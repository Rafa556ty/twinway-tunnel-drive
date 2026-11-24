// Paints a tileable, photo-like grass texture: soft colour patches, thousands
// of individual blades with light/shadow, dry tips, clover and soil specks.
// Everything wraps at the edges so the tile repeats without seams.

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Calls draw at (x,y) and at the wrapped copies near the tile edges. */
function wrapped(size: number, x: number, y: number, r: number, draw: (x: number, y: number) => void) {
  for (const dx of [0, -size, size]) {
    if (dx !== 0 && (x + dx < -r || x + dx > size + r)) continue;
    for (const dy of [0, -size, size]) {
      if (dy !== 0 && (y + dy < -r || y + dy > size + r)) continue;
      draw(x + dx, y + dy);
    }
  }
}

export function paintGrass(g: CanvasRenderingContext2D, size: number, seed = 7) {
  const rand = rng(seed);
  g.fillStyle = "#46632a";
  g.fillRect(0, 0, size, size);

  // Large, soft colour variation (lush / dry / dark patches).
  const patches = ["rgba(92,122,48,0.35)", "rgba(52,78,28,0.40)", "rgba(128,128,62,0.22)", "rgba(38,60,22,0.35)"];
  for (let i = 0; i < 70; i++) {
    const x = rand() * size;
    const y = rand() * size;
    const r = size * (0.05 + rand() * 0.16);
    const col = patches[i % patches.length]!;
    wrapped(size, x, y, r, (px, py) => {
      const grd = g.createRadialGradient(px, py, 0, px, py, r);
      grd.addColorStop(0, col);
      grd.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = grd;
      g.fillRect(px - r, py - r, r * 2, r * 2);
    });
  }

  // Soil showing through between the blades.
  for (let i = 0; i < 2600; i++) {
    const x = rand() * size;
    const y = rand() * size;
    const r = 0.6 + rand() * 1.8;
    g.fillStyle = rand() < 0.5 ? "rgba(70,55,34,0.55)" : "rgba(40,34,22,0.6)";
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
  }

  // Blades: dark undergrowth first, then brighter blades on top.
  const layers: { n: number; len: [number, number]; cols: string[]; w: number }[] = [
    { n: 26000, len: [5, 11], cols: ["#2b4318", "#334f1c", "#3a5520", "#2f4a1b"], w: 1.4 },
    { n: 30000, len: [6, 14], cols: ["#4f7230", "#5a7e36", "#46682a", "#63863b", "#557a2f"], w: 1.2 },
    { n: 14000, len: [5, 12], cols: ["#78994a", "#86a653", "#6f8f40", "#9aa860", "#a8a565"], w: 1.0 },
  ];
  // One path per colour keeps this to a handful of stroke calls.
  g.lineCap = "round";
  for (const layer of layers) {
    g.lineWidth = layer.w;
    const paths = layer.cols.map(() => new Path2D());
    for (let i = 0; i < layer.n; i++) {
      const x = rand() * size;
      const y = rand() * size;
      const len = layer.len[0] + rand() * (layer.len[1] - layer.len[0]);
      const ang = -Math.PI / 2 + (rand() - 0.5) * 1.6;
      const bend = (rand() - 0.5) * len * 0.6;
      const ex = Math.cos(ang) * len;
      const ey = Math.sin(ang) * len;
      const path = paths[(rand() * paths.length) | 0]!;
      wrapped(size, x, y, len + 2, (px, py) => {
        path.moveTo(px, py);
        path.quadraticCurveTo(px + ex * 0.5 + bend, py + ey * 0.5, px + ex, py + ey);
      });
    }
    paths.forEach((path, k) => {
      g.strokeStyle = layer.cols[k]!;
      g.stroke(path);
    });
  }

  // Dry straw-coloured tips and small clover clusters.
  for (let i = 0; i < 2200; i++) {
    const x = rand() * size;
    const y = rand() * size;
    g.fillStyle = rand() < 0.7 ? "rgba(176,168,104,0.55)" : "rgba(140,120,70,0.5)";
    g.fillRect(x, y, 1 + rand() * 1.5, 1 + rand() * 1.5);
  }
  for (let i = 0; i < 160; i++) {
    const x = rand() * size;
    const y = rand() * size;
    const col = rand() < 0.5 ? "rgba(70,110,40,0.85)" : "rgba(58,96,34,0.85)";
    wrapped(size, x, y, 8, (px, py) => {
      g.fillStyle = col;
      for (let k = 0; k < 3; k++) {
        const a = (k / 3) * Math.PI * 2 + rand();
        g.beginPath();
        g.arc(px + Math.cos(a) * 2.6, py + Math.sin(a) * 2.6, 2.4, 0, Math.PI * 2);
        g.fill();
      }
    });
  }
  // A few tiny wildflowers.
  for (let i = 0; i < 90; i++) {
    g.fillStyle = rand() < 0.6 ? "rgba(238,236,210,0.85)" : "rgba(230,200,70,0.85)";
    g.beginPath();
    g.arc(rand() * size, rand() * size, 1 + rand(), 0, Math.PI * 2);
    g.fill();
  }
}
