import { useEffect, useRef, useState } from "react";
import { drawPlate } from "./license-plates";
import {
  PLATE_STYLES,
  PLATE_TEXT_MAX,
  buyPlateStyle,
  defaultPlateText,
  getPlateStyle,
  loadOwnedPlateStyles,
  ownsPlateStyle,
  sanitizePlateText,
  saveOwnedPlateStyles,
  type PlateSetting,
  type PlateStyleId,
} from "./plate-rules";

const BTN =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium cursor-pointer transition-colors border shadow-sm hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed";
const money = (n: number) => `$${Math.round(n).toLocaleString("pt-BR")}`;

function PlatePreview({ style, text }: { style: PlateStyleId; text: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    drawPlate(c, getPlateStyle(style), text);
    let alive = true;
    void document.fonts?.ready.then(() => {
      if (alive && ref.current) drawPlate(ref.current, getPlateStyle(style), text);
    });
    return () => {
      alive = false;
    };
  }, [style, text]);
  return (
    <canvas
      ref={ref}
      aria-label={`Placa ${text}`}
      className="w-full rounded-md border border-hud-border"
      style={{ aspectRatio: "2 / 1" }}
    />
  );
}

export interface PlateEditorProps {
  carId: string;
  setting: PlateSetting;
  balance: number;
  developer: boolean;
  onChange: (next: PlateSetting) => void;
  onBalance: (next: number) => void;
  onView: (side: "rear" | "front") => void;
}

export function PlateEditor({
  carId,
  setting,
  balance,
  developer,
  onChange,
  onBalance,
  onView,
}: PlateEditorProps) {
  const [owned, setOwned] = useState<PlateStyleId[]>(["california"]);
  const [pending, setPending] = useState<PlateStyleId | null>(null);
  const [message, setMessage] = useState("");
  const [draft, setDraft] = useState(setting.text);

  useEffect(() => setOwned(loadOwnedPlateStyles(localStorage)), []);
  useEffect(() => setDraft(setting.text), [setting.text]);
  useEffect(() => {
    setPending(null);
    setMessage("");
  }, [carId]);

  const has = (id: PlateStyleId) => developer || ownsPlateStyle(owned, id);
  const shown = pending ?? setting.style;
  const pendingStyle = pending ? getPlateStyle(pending) : null;

  const pick = (id: PlateStyleId) => {
    setMessage("");
    if (has(id)) {
      setPending(null);
      onChange({ ...setting, style: id });
    } else setPending(id);
  };

  const buy = () => {
    if (!pending) return;
    const res = buyPlateStyle(owned, balance, pending);
    if (!res) {
      setMessage(`Saldo insuficiente. Faltam ${money(getPlateStyle(pending).price - balance)}.`);
      return;
    }
    try {
      saveOwnedPlateStyles(localStorage, res.owned);
    } catch {
      /* ignore */
    }
    setOwned(res.owned);
    onBalance(res.balance);
    onChange({ ...setting, style: pending });
    setMessage(`Placa ${getPlateStyle(pending).name} comprada!`);
    setPending(null);
  };

  const commitText = (raw: string) => {
    const t = sanitizePlateText(raw);
    setDraft(t);
    onChange({ ...setting, text: t });
  };

  return (
    <div className="flex flex-col gap-2">
      <PlatePreview style={shown} text={draft} />

      <label className="flex flex-col gap-1 text-[11px] text-muted-foreground">
        TEXTO DA PLACA (até {PLATE_TEXT_MAX})
        <div className="flex gap-1">
          <input
            aria-label="Texto da placa"
            value={draft}
            maxLength={PLATE_TEXT_MAX}
            onChange={(e) => commitText(e.target.value)}
            onKeyDown={(e) => e.stopPropagation()}
            className="h-8 w-full flex-1 rounded-sm border border-hud-border bg-card px-2 font-display text-foreground uppercase"
            style={{ fontSize: 18, letterSpacing: "0.18em" }}
          />
          <button
            type="button"
            className={`${BTN} h-8 border-hud-border bg-card px-2 text-[10px]`}
            onClick={() => commitText(defaultPlateText(`${carId}-${Date.now()}`))}
          >
            SORTEAR
          </button>
        </div>
      </label>

      <span className="font-display text-[11px] tracking-[0.25em] text-primary">MODELO</span>
      <div className="grid grid-cols-2 gap-1">
        {PLATE_STYLES.map((s) => {
          const active = shown === s.id;
          const tag =
            setting.style === s.id
              ? "EM USO"
              : s.price === 0
                ? "GRÁTIS"
                : has(s.id)
                  ? developer && !owned.includes(s.id)
                    ? "GRÁTIS (DEV)"
                    : "COMPRADA"
                  : money(s.price);
          return (
            <button
              key={s.id}
              type="button"
              aria-pressed={active}
              onClick={() => pick(s.id)}
              className={`${BTN} h-auto flex-col py-1.5 text-[10px] ${active ? "border-primary bg-primary/15 text-primary" : "border-hud-border bg-card"}`}
            >
              <span
                className="block w-full rounded-sm font-display leading-none"
                style={{
                  background: s.background,
                  color: s.text,
                  border: `1px solid ${s.border}`,
                  padding: "3px 0",
                  fontSize: 13,
                  letterSpacing: "0.12em",
                }}
              >
                ABC123
              </span>
              <span className="leading-tight">{s.name}</span>
              <span className={has(s.id) ? "text-muted-foreground" : "text-primary"}>{tag}</span>
            </button>
          );
        })}
      </div>

      {pendingStyle && (
        <button
          type="button"
          onClick={buy}
          className={`${BTN} h-9 border-primary bg-primary text-primary-foreground text-xs`}
        >
          COMPRAR {pendingStyle.name.toUpperCase()} — {money(pendingStyle.price)}
        </button>
      )}
      <p className="text-[10px] text-muted-foreground">Saldo: {money(balance)}</p>
      {message && (
        <p
          role="status"
          className={`text-[11px] ${message.startsWith("Saldo") ? "text-brake" : "text-primary"}`}
        >
          {message}
        </p>
      )}

      <label className="flex cursor-pointer items-center justify-between gap-2 text-[11px] text-muted-foreground">
        Placa dianteira
        <input
          type="checkbox"
          checked={setting.front}
          onChange={(e) => onChange({ ...setting, front: e.target.checked })}
          className="size-4 cursor-pointer"
        />
      </label>

      <div className="grid grid-cols-2 gap-1">
        <button
          type="button"
          className={`${BTN} h-7 border-hud-border bg-card text-[10px]`}
          onClick={() => onView("rear")}
        >
          VER TRASEIRA
        </button>
        <button
          type="button"
          className={`${BTN} h-7 border-hud-border bg-card text-[10px]`}
          onClick={() => onView("front")}
        >
          VER FRENTE
        </button>
      </div>
    </div>
  );
}
