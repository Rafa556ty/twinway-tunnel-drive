import { describe, expect, it } from "vitest";
import {
  buyPlateStyle,
  getPlateStyle,
  loadOwnedPlateStyles,
  ownsPlateStyle,
  plateSettingFor,
  sanitizePlateText,
} from "./plate-rules";

describe("license plate rules", () => {
  it("gives the US (California) plate for free", () => {
    expect(getPlateStyle("california").price).toBe(0);
    expect(ownsPlateStyle([], "california")).toBe(true);
    expect(plateSettingFor({}, "revuelto").style).toBe("california");
  });

  it("charges for the black plate", () => {
    expect(getPlateStyle("black").price).toBe(20_000);
    expect(ownsPlateStyle(["california"], "black")).toBe(false);
  });

  it("deducts the price when buying a colored plate", () => {
    const res = buyPlateStyle(["california"], 50_000, "black");
    expect(res).toEqual({ owned: ["california", "black"], balance: 30_000 });
  });

  it("refuses the purchase without enough balance", () => {
    expect(buyPlateStyle(["california"], 19_999, "black")).toBeNull();
  });

  it("does not charge twice for a plate already bought", () => {
    expect(buyPlateStyle(["california", "blue"], 50_000, "blue")).toBeNull();
  });

  it("limits plate text to 7 uppercase letters and numbers", () => {
    expect(sanitizePlateText("revuelto!!")).toBe("REVUELT");
    expect(sanitizePlateText("çá 12")).toBe("CA 12");
  });

  it("always keeps the free plate in the owned list", () => {
    const store = { getItem: () => '["black","bogus"]', setItem: () => {} };
    expect(loadOwnedPlateStyles(store)).toEqual(["california", "black"]);
  });
});
