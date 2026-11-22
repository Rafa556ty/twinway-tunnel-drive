import { describe, expect, it } from "vitest";
import {
  hasOncomingTraffic,
  hasOppositeRoad,
  isDualHighway,
  oncomingTraffic,
  spanCamera,
  ONCOMING_X,
} from "./highway-layout";

describe("first highway is a dual carriageway", () => {
  it("covers the whole first highway before the tunnel", () => {
    expect(isDualHighway(0)).toBe(true);
    expect(isDualHighway(1399)).toBe(true);
    expect(isDualHighway(6000)).toBe(true);
    expect(isDualHighway(1400)).toBe(false);
    expect(isDualHighway(4000)).toBe(false);
  });

  it("keeps the opposite road through the tunnel up to the bridge", () => {
    expect(hasOppositeRoad(1800)).toBe(true);
    expect(hasOppositeRoad(2600)).toBe(true);
    expect(hasOppositeRoad(2700)).toBe(false);
  });

  it("has oncoming cars on the highway, tunnel and bridge but not the night highway", () => {
    expect(hasOncomingTraffic(500)).toBe(true);
    expect(hasOncomingTraffic(1900)).toBe(true);
    expect(hasOncomingTraffic(3000)).toBe(true);
    expect(hasOncomingTraffic(4200)).toBe(false);
  });
});

describe("oncoming traffic", () => {
  it("drives on the three opposite lanes", () => {
    const xs = new Set(oncomingTraffic(300, 12, 285, 110).map((c) => c.x));
    expect([...xs].sort((a, b) => a - b)).toEqual([ONCOMING_X - 3.6, ONCOMING_X, ONCOMING_X + 3.6]);
  });

  it("comes toward the player", () => {
    const a = oncomingTraffic(300, 10, 285, 110);
    const b = oncomingTraffic(300, 10.1, 285, 110);
    const car = a.find((c) => c.z < 0 && c.z > -200);
    const later = b.find((c) => c.lane === car?.lane && Math.abs(c.z - (car?.z ?? 0)) < 5);
    expect(car).toBeDefined();
    expect(later && car && later.z > car.z).toBe(true);
  });

  it("never stacks two cars in the same lane", () => {
    for (let t = 0; t < 60; t += 0.7) {
      const cars = oncomingTraffic(200, t, 285, 110);
      for (const lane of [0, 1, 2]) {
        const zs = cars.filter((c) => c.lane === lane).map((c) => c.z).sort((x, y) => x - y);
        for (let i = 1; i < zs.length; i++) expect((zs[i] ?? 0) - (zs[i - 1] ?? 0)).toBeGreaterThan(25);
      }
    }
  });
});

describe("span clipping", () => {
  it("places the current dual-carriageway span around the player", () => {
    const s = spanCamera(100, 5600, 2650, 110);
    expect(s.near).toBe(900);
    expect(s.far).toBe(-2550);
  });

  it("jumps to the next lap once the span is far behind", () => {
    const s = spanCamera(3500, 5600, 2650, 110);
    expect(s.near).toBe(-2100);
  });
});
