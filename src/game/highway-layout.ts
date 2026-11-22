/**
 * Layout of the remodelled first highway: a divided dual carriageway whose
 * opposite side carries oncoming NPC traffic, continuing through the twin-bore
 * tunnel and onto the bridge. All distances are metres along the 6400 m loop.
 */
export const LOOP = 6400;
export const TUNNEL_START = 1400;
export const TUNNEL_END = 2415;
export const BRIDGE_START = 2650;
export const BRIDGE_END = 3140;
/** The dual carriageway starts on the stretch that leads into the start line. */
export const DUAL_START = 5600;

export const LANE_W = 3.6;
/** Centre of the oncoming carriageway (matches the bridge's opposite deck). */
export const ONCOMING_X = -14.5;
/** Centre line of the concrete median barrier. */
export const MEDIAN_X = -7.85;
export const OPP_ROAD_INNER = -8.15;
export const OPP_ROAD_OUTER = -21.5;
export const OPP_RAIL_X = -21.9;

export const wrap = (w: number) => ((w % LOOP) + LOOP) % LOOP;

/** True when world distance `w` lies inside [start, end) on the loop (spans may wrap). */
export function inSpan(w: number, start: number, end: number) {
  const t = wrap(w);
  return start <= end ? t >= start && t < end : t >= start || t < end;
}

/** Open-air dual carriageway (the first highway, before the tunnel). */
export const isDualHighway = (w: number) => inSpan(w, DUAL_START, TUNNEL_START);
/** Where the opposite road surface and median barrier exist (highway + tunnel + link to bridge). */
export const hasOppositeRoad = (w: number) => inSpan(w, DUAL_START, BRIDGE_START);
/** Where oncoming NPC cars drive (opposite road + bridge deck). */
export const hasOncomingTraffic = (w: number) => inSpan(w, DUAL_START, BRIDGE_END);

/**
 * Camera-space z range (camera looks toward -z, the player sits at 0) of the
 * occurrence of a span that matters for the player at `pz`.
 */
export function spanCamera(pz: number, start: number, end: number, behind: number) {
  const len = wrap(end - start);
  const d = wrap(pz - start);
  let startW = pz - d;
  if (d > len + behind + 40) startW += LOOP;
  const near = -(startW - pz);
  return { near, far: near - len };
}

export type OncomingCar = { model: string; x: number; z: number; lane: number };

const ONCOMING_LANES = [
  // outer (slow) lane: heavy vehicles
  { offset: -1, kmh: 76, models: ["truck", "suv", "bus", "pickup", "sedan", "truck"] },
  { offset: 0, kmh: 96, models: ["sedan", "hatch", "suv", "pickup", "mustang", "hatch"] },
  // lane next to the median: the fast lane
  { offset: 1, kmh: 122, models: ["bmw", "mustang", "porsche", "sedan", "ferrari", "bugatti"] },
];
export const ONCOMING_PER_LANE = 6;

const hash = (n: number) => {
  const t = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return t - Math.floor(t);
};

/**
 * Oncoming cars for this frame. Cars in a lane share one speed and keep evenly
 * spaced slots, so they never drive through each other.
 */
export function oncomingTraffic(pz: number, time: number, ahead: number, behind: number) {
  const range = ahead + behind;
  const slot = range / ONCOMING_PER_LANE;
  const cars: OncomingCar[] = [];
  ONCOMING_LANES.forEach((lane, li) => {
    const v = lane.kmh / 3.6;
    for (let k = 0; k < ONCOMING_PER_LANE; k++) {
      const jitter = (hash(li * 31 + k * 7.7) - 0.5) * slot * 0.4;
      const z = ((((pz + v * time + k * slot + jitter + li * slot * 0.37) % range) + range) % range) - ahead;
      const world = pz - z;
      if (!hasOncomingTraffic(world)) continue;
      cars.push({
        model: lane.models[k % lane.models.length] ?? "sedan",
        x: ONCOMING_X + lane.offset * LANE_W,
        z,
        lane: li,
      });
    }
  });
  return cars;
}
