// @ts-nocheck
/* eslint-disable */
// Ported from the original Supercar Highway Dash build.
function e(e) {
  return (
    /SM-A115|Galaxy A11/i.test(e.userAgent) ||
    (e.touch && (e.memory === void 0 || e.memory <= 4 || e.cores <= 8))
  );
}
var t = class {
  scale = 1;
  elapsed = 0;
  frames = 0;
  stable = 0;
  sample(e, t = !1) {
    if (
      t ||
      e <= 0 ||
      e > 0.25 ||
      ((this.elapsed += e), this.frames++, this.elapsed < 3)
    )
      return !1;
    let n = this.elapsed / this.frames;
    ((this.elapsed = 0), (this.frames = 0));
    let r = this.scale;
    return (
      n > 1 / 26
        ? ((this.scale = Math.max(0.8, this.scale - 0.1)), (this.stable = 0))
        : n < 1 / 50
          ? (this.stable++,
            this.stable >= 5 &&
              ((this.scale = Math.min(1, this.scale + 0.1)), (this.stable = 0)))
          : (this.stable = 0),
      r !== this.scale
    );
  }
};
export { e as n, t };
