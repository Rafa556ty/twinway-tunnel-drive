// License plate rules: styles, prices, per-car settings and purchases.
// Pure TypeScript (no React / three) so it can be unit tested.

export type PlateStyleId = "california" | "black" | "blue" | "red";

export interface PlateStyle {
  id: PlateStyleId;
  name: string;
  /** Price in game dollars; 0 = free. */
  price: number;
  background: string;
  text: string;
  header: string;
  headerText: string;
  footerText: string;
  /** Script header (California cursive) vs block capitals. */
  scriptHeader: boolean;
  border: string;
}

export const PLATE_STYLES: readonly PlateStyle[] = [
  {
    id: "california",
    name: "EUA Califórnia",
    price: 0,
    background: "#f4f5f7",
    text: "#1b2a6b",
    header: "#c8102e",
    headerText: "California",
    footerText: "DMV.CA.GOV",
    scriptHeader: true,
    border: "#9aa0a8",
  },
  {
    id: "black",
    name: "Preta clássica",
    price: 20_000,
    background: "#0d0d0f",
    text: "#f2c230",
    header: "#f2c230",
    headerText: "CALIFORNIA",
    footerText: "LEGACY",
    scriptHeader: false,
    border: "#f2c230",
  },
  {
    id: "blue",
    name: "Azul clássica",
    price: 12_000,
    background: "#1c3a8c",
    text: "#f5c400",
    header: "#f5c400",
    headerText: "CALIFORNIA",
    footerText: "LEGACY",
    scriptHeader: false,
    border: "#f5c400",
  },
  {
    id: "red",
    name: "Vermelha",
    price: 15_000,
    background: "#b3121b",
    text: "#ffffff",
    header: "#ffffff",
    headerText: "CALIFORNIA",
    footerText: "SUPERCAR",
    scriptHeader: false,
    border: "#ffffff",
  },
];

export const FREE_PLATE_STYLE: PlateStyleId = "california";
export const PLATE_TEXT_MAX = 7;

export function getPlateStyle(id: string): PlateStyle {
  return PLATE_STYLES.find((s) => s.id === id) ?? PLATE_STYLES[0]!;
}

export function isPlateStyleId(id: unknown): id is PlateStyleId {
  return typeof id === "string" && PLATE_STYLES.some((s) => s.id === id);
}

/** Uppercase, only A-Z / 0-9 / space / dash, at most 7 characters. */
export function sanitizePlateText(raw: string): string {
  return raw
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Z0-9 -]/g, "")
    .replace(/\s+/g, " ")
    .replace(/^ /, "")
    .slice(0, PLATE_TEXT_MAX);
}

/** Deterministic California-format serial (e.g. 9ABC123) for a car. */
export function defaultPlateText(carId: string): string {
  let h = 2166136261;
  for (let i = 0; i < carId.length; i++) {
    h ^= carId.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  const L = "ABCDEFGHJKLMNPRSTUVWXYZ";
  const a = L[h % 23]!;
  const b = L[(h >>> 5) % 23]!;
  const c = L[(h >>> 10) % 23]!;
  const n = String((h >>> 15) % 1000).padStart(3, "0");
  return `${7 + ((h >>> 25) % 3)}${a}${b}${c}${n}`;
}

export interface PlateSetting {
  style: PlateStyleId;
  text: string;
  front: boolean;
}

export const defaultPlateSetting = (carId: string): PlateSetting => ({
  style: FREE_PLATE_STYLE,
  text: defaultPlateText(carId),
  front: true,
});

type StorageLike = Pick<Storage, "getItem" | "setItem">;

const PLATES_KEY = "car-plates-v1";
const OWNED_KEY = "plate-styles-owned-v1";

export function loadPlateSettings(storage: StorageLike): Record<string, PlateSetting> {
  try {
    const raw = JSON.parse(storage.getItem(PLATES_KEY) ?? "null");
    if (!raw || typeof raw !== "object") return {};
    const out: Record<string, PlateSetting> = {};
    for (const [car, v] of Object.entries(raw as Record<string, unknown>)) {
      if (!v || typeof v !== "object") continue;
      const s = v as Record<string, unknown>;
      out[car] = {
        style: isPlateStyleId(s["style"]) ? s["style"] : FREE_PLATE_STYLE,
        text: typeof s["text"] === "string" ? sanitizePlateText(s["text"]) : defaultPlateText(car),
        front: s["front"] !== false,
      };
    }
    return out;
  } catch {
    return {};
  }
}

export function plateSettingFor(all: Record<string, PlateSetting>, carId: string): PlateSetting {
  return all[carId] ?? defaultPlateSetting(carId);
}

export function savePlateSettings(storage: StorageLike, all: Record<string, PlateSetting>) {
  storage.setItem(PLATES_KEY, JSON.stringify(all));
}

export function loadOwnedPlateStyles(storage: StorageLike): PlateStyleId[] {
  const owned = new Set<PlateStyleId>([FREE_PLATE_STYLE]);
  try {
    const raw = JSON.parse(storage.getItem(OWNED_KEY) ?? "[]");
    if (Array.isArray(raw)) for (const id of raw) if (isPlateStyleId(id)) owned.add(id);
  } catch {
    /* ignore */
  }
  return PLATE_STYLES.map((s) => s.id).filter((id) => owned.has(id));
}

export function saveOwnedPlateStyles(storage: StorageLike, owned: PlateStyleId[]) {
  storage.setItem(OWNED_KEY, JSON.stringify(owned));
}

export const ownsPlateStyle = (owned: readonly PlateStyleId[], id: PlateStyleId) =>
  getPlateStyle(id).price === 0 || owned.includes(id);

/** Buy a plate style once (usable on every car). Null when already owned or not affordable. */
export function buyPlateStyle(
  owned: readonly PlateStyleId[],
  balance: number,
  id: PlateStyleId,
): { owned: PlateStyleId[]; balance: number } | null {
  const style = getPlateStyle(id);
  if (ownsPlateStyle(owned, id) || balance < style.price) return null;
  const next = new Set([...owned, id]);
  return {
    owned: PLATE_STYLES.map((s) => s.id).filter((s) => next.has(s)),
    balance: balance - style.price,
  };
}

/**
 * Where the plate sits on each car, in metres above the ground (cars are
 * normalised to real length with the ground at y=0). Researched from the
 * US-spec cars: supercars carry the rear plate low and centred above the
 * diffuser and the front plate on the lower centre of the bumper; the
 * Mustang, Challenger and BMWs carry it on the trunk / bumper between the
 * tail lights. `front: null` means the car has no front plate position.
 */
export interface PlateMount {
  rear: number;
  front: number | null;
  /** Sideways offset of the front plate (negative = driver's left). */
  frontX?: number;
}

/**
 * Bugattis in the US carry the front plate offset to the car's left, beside
 * the horseshoe grille (which fills the centre of the bumper).
 */
export const BUGATTI_FRONT_X = -0.5;

export const PLATE_MOUNTS: Record<string, PlateMount> = {
  "mustang-rtr": { rear: 0.78, front: 0.3 },
  revuelto: { rear: 0.45, front: 0.24 },
  svj: { rear: 0.45, front: 0.24 },
  "huracan-evo": { rear: 0.5, front: 0.25 },
  laferrari: { rear: 0.45, front: 0.22 },
  chiron: { rear: 0.43, front: 0.26, frontX: BUGATTI_FRONT_X },
  "chiron-ss300": { rear: 0.43, front: 0.26, frontX: BUGATTI_FRONT_X },
  tourbillon: { rear: 0.43, front: 0.26, frontX: BUGATTI_FRONT_X },
  "voiture-noire": { rear: 0.42, front: 0.26, frontX: BUGATTI_FRONT_X },
  jesko: { rear: 0.42, front: 0.24 },
  "utopia-roadster": { rear: 0.4, front: 0.24 },
  huayra: { rear: 0.4, front: 0.24 },
  demon: { rear: 0.62, front: 0.36 },
  m2: { rear: 0.55, front: 0.32 },
  "m4-competition": { rear: 0.6, front: 0.34 },
  "m8-competition": { rear: 0.56, front: 0.32 },
};

export const plateMountFor = (carId: string): PlateMount =>
  PLATE_MOUNTS[carId] ?? { rear: 0.5, front: 0.3 };
