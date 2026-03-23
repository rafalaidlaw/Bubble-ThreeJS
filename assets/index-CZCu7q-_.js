(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const r of i) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: true, subtree: true });
  function t(i) {
    const r = {};
    return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function n(i) {
    if (i.ep) return;
    i.ep = true;
    const r = t(i);
    fetch(i.href, r);
  }
})();
/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const al = "172", Ji = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Yi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Hu = 0, zl = 1, Vu = 2, Eh = 1, Gu = 2, In = 3, kn = 0, Rt = 1, xn = 2, On = 0, Qi = 1, aa = 2, Hl = 3, Vl = 4, Wu = 5, gi = 100, Xu = 101, Yu = 102, qu = 103, ju = 104, Ku = 200, $u = 201, Zu = 202, Ju = 203, la = 204, ca = 205, Qu = 206, ed = 207, td = 208, nd = 209, id = 210, sd = 211, rd = 212, od = 213, ad = 214, ha = 0, ua = 1, da = 2, ss = 3, fa = 4, pa = 5, ma = 6, _a = 7, Th = 0, ld = 1, cd = 2, ni = 0, hd = 1, ud = 2, dd = 3, Ah = 4, fd = 5, pd = 6, md = 7, Gl = "attached", _d = "detached", wh = 300, rs = 301, os = 302, ga = 303, va = 304, oo = 306, as = 1e3, Qn = 1001, Kr = 1002, Ut = 1003, Rh = 1004, ks = 1005, Wt = 1006, Vr = 1007, Un = 1008, zn = 1009, Ch = 1010, Ph = 1011, js = 1012, ll = 1013, yi = 1014, cn = 1015, yn = 1016, cl = 1017, hl = 1018, ls = 1020, Ih = 35902, Lh = 1021, Dh = 1022, Xt = 1023, Uh = 1024, Nh = 1025, es = 1026, cs = 1027, ul = 1028, dl = 1029, Fh = 1030, fl = 1031, pl = 1033, Gr = 33776, Wr = 33777, Xr = 33778, Yr = 33779, xa = 35840, ya = 35841, Sa = 35842, Ma = 35843, ba = 36196, Ea = 37492, Ta = 37496, Aa = 37808, wa = 37809, Ra = 37810, Ca = 37811, Pa = 37812, Ia = 37813, La = 37814, Da = 37815, Ua = 37816, Na = 37817, Fa = 37818, Oa = 37819, Ba = 37820, ka = 37821, qr = 36492, za = 36494, Ha = 36495, Oh = 36283, Va = 36284, Ga = 36285, Wa = 36286, Bh = 2200, gd = 2201, vd = 2202, Ks = 2300, $s = 2301, Mo = 2302, qi = 2400, ji = 2401, $r = 2402, ml = 2500, xd = 2501, yd = 0, kh = 1, Xa = 2, Sd = 3200, Md = 3201, zh = 0, bd = 1, Jn = "", gt = "srgb", Ft = "srgb-linear", Zr = "linear", nt = "srgb", bi = 7680, Wl = 519, Ed = 512, Td = 513, Ad = 514, Hh = 515, wd = 516, Rd = 517, Cd = 518, Pd = 519, Ya = 35044, Xl = "300 es", Nn = 2e3, Jr = 2001;
class si {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return false;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, o = i.length; r < o; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const At = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Yl = 1234567;
const Vs = Math.PI / 180, hs = 180 / Math.PI;
function hn() {
  const s3 = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (At[s3 & 255] + At[s3 >> 8 & 255] + At[s3 >> 16 & 255] + At[s3 >> 24 & 255] + "-" + At[e & 255] + At[e >> 8 & 255] + "-" + At[e >> 16 & 15 | 64] + At[e >> 24 & 255] + "-" + At[t & 63 | 128] + At[t >> 8 & 255] + "-" + At[t >> 16 & 255] + At[t >> 24 & 255] + At[n & 255] + At[n >> 8 & 255] + At[n >> 16 & 255] + At[n >> 24 & 255]).toLowerCase();
}
function Oe(s3, e, t) {
  return Math.max(e, Math.min(t, s3));
}
function _l(s3, e) {
  return (s3 % e + e) % e;
}
function Id(s3, e, t, n, i) {
  return n + (s3 - e) * (i - n) / (t - e);
}
function Ld(s3, e, t) {
  return s3 !== e ? (t - s3) / (e - s3) : 0;
}
function Gs(s3, e, t) {
  return (1 - t) * s3 + t * e;
}
function Dd(s3, e, t, n) {
  return Gs(s3, e, 1 - Math.exp(-t * n));
}
function Ud(s3, e = 1) {
  return e - Math.abs(_l(s3, e * 2) - e);
}
function Nd(s3, e, t) {
  return s3 <= e ? 0 : s3 >= t ? 1 : (s3 = (s3 - e) / (t - e), s3 * s3 * (3 - 2 * s3));
}
function Fd(s3, e, t) {
  return s3 <= e ? 0 : s3 >= t ? 1 : (s3 = (s3 - e) / (t - e), s3 * s3 * s3 * (s3 * (s3 * 6 - 15) + 10));
}
function Od(s3, e) {
  return s3 + Math.floor(Math.random() * (e - s3 + 1));
}
function Bd(s3, e) {
  return s3 + Math.random() * (e - s3);
}
function kd(s3) {
  return s3 * (0.5 - Math.random());
}
function zd(s3) {
  s3 !== void 0 && (Yl = s3);
  let e = Yl += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Hd(s3) {
  return s3 * Vs;
}
function Vd(s3) {
  return s3 * hs;
}
function Gd(s3) {
  return (s3 & s3 - 1) === 0 && s3 !== 0;
}
function Wd(s3) {
  return Math.pow(2, Math.ceil(Math.log(s3) / Math.LN2));
}
function Xd(s3) {
  return Math.pow(2, Math.floor(Math.log(s3) / Math.LN2));
}
function Yd(s3, e, t, n, i) {
  const r = Math.cos, o = Math.sin, a = r(t / 2), l = o(t / 2), c = r((e + n) / 2), h = o((e + n) / 2), u = r((e - n) / 2), d = o((e - n) / 2), p = r((n - e) / 2), _ = o((n - e) / 2);
  switch (i) {
    case "XYX":
      s3.set(a * h, l * u, l * d, a * c);
      break;
    case "YZY":
      s3.set(l * d, a * h, l * u, a * c);
      break;
    case "ZXZ":
      s3.set(l * u, l * d, a * h, a * c);
      break;
    case "XZX":
      s3.set(a * h, l * _, l * p, a * c);
      break;
    case "YXY":
      s3.set(l * p, a * h, l * _, a * c);
      break;
    case "ZYZ":
      s3.set(l * _, l * p, a * h, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function ln(s3, e) {
  switch (e.constructor) {
    case Float32Array:
      return s3;
    case Uint32Array:
      return s3 / 4294967295;
    case Uint16Array:
      return s3 / 65535;
    case Uint8Array:
      return s3 / 255;
    case Int32Array:
      return Math.max(s3 / 2147483647, -1);
    case Int16Array:
      return Math.max(s3 / 32767, -1);
    case Int8Array:
      return Math.max(s3 / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function et(s3, e) {
  switch (e.constructor) {
    case Float32Array:
      return s3;
    case Uint32Array:
      return Math.round(s3 * 4294967295);
    case Uint16Array:
      return Math.round(s3 * 65535);
    case Uint8Array:
      return Math.round(s3 * 255);
    case Int32Array:
      return Math.round(s3 * 2147483647);
    case Int16Array:
      return Math.round(s3 * 32767);
    case Int8Array:
      return Math.round(s3 * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Vh = { DEG2RAD: Vs, RAD2DEG: hs, generateUUID: hn, clamp: Oe, euclideanModulo: _l, mapLinear: Id, inverseLerp: Ld, lerp: Gs, damp: Dd, pingpong: Ud, smoothstep: Nd, smootherstep: Fd, randInt: Od, randFloat: Bd, randFloatSpread: kd, seededRandom: zd, degToRad: Hd, radToDeg: Vd, isPowerOfTwo: Gd, ceilPowerOfTwo: Wd, floorPowerOfTwo: Xd, setQuaternionFromProperEuler: Yd, normalize: et, denormalize: ln };
class pe {
  constructor(e = 0, t = 0) {
    pe.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Oe(this.x, e.x, t.x), this.y = Oe(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Oe(this.x, e, t), this.y = Oe(this.y, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Oe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, o = this.y - e.y;
    return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ue {
  constructor(e, t, n, i, r, o, a, l, c) {
    Ue.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, o, a, l, c);
  }
  set(e, t, n, i, r, o, a, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = r, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], p = n[5], _ = n[8], g = i[0], m = i[3], f = i[6], T = i[1], E = i[4], S = i[7], P = i[2], w = i[5], C = i[8];
    return r[0] = o * g + a * T + l * P, r[3] = o * m + a * E + l * w, r[6] = o * f + a * S + l * C, r[1] = c * g + h * T + u * P, r[4] = c * m + h * E + u * w, r[7] = c * f + h * S + u * C, r[2] = d * g + p * T + _ * P, r[5] = d * m + p * E + _ * w, r[8] = d * f + p * S + _ * C, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8];
    return t * o * h - t * a * c - n * r * h + n * a * l + i * r * c - i * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = h * o - a * c, d = a * l - h * r, p = c * r - o * l, _ = t * u + n * d + i * p;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return e[0] = u * g, e[1] = (i * c - h * n) * g, e[2] = (a * n - i * o) * g, e[3] = d * g, e[4] = (h * t - i * l) * g, e[5] = (i * r - a * t) * g, e[6] = p * g, e[7] = (n * l - c * t) * g, e[8] = (o * t - n * r) * g, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, r, o, a) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -i * c, i * l, -i * (-c * o + l * a) + a + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(bo.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(bo.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(bo.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const bo = new Ue();
function Gh(s3) {
  for (let e = s3.length - 1; e >= 0; --e) if (s3[e] >= 65535) return true;
  return false;
}
function Zs(s3) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s3);
}
function qd() {
  const s3 = Zs("canvas");
  return s3.style.display = "block", s3;
}
const ql = {};
function Gi(s3) {
  s3 in ql || (ql[s3] = true, console.warn(s3));
}
function jd(s3, e, t) {
  return new Promise(function(n, i) {
    function r() {
      switch (s3.clientWaitSync(e, s3.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s3.WAIT_FAILED:
          i();
          break;
        case s3.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
function Kd(s3) {
  const e = s3.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function $d(s3) {
  const e = s3.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const jl = new Ue().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Kl = new Ue().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Zd() {
  const s3 = { enabled: true, workingColorSpace: Ft, spaces: {}, convert: function(i, r, o) {
    return this.enabled === false || r === o || !r || !o || (this.spaces[r].transfer === nt && (i.r = Bn(i.r), i.g = Bn(i.g), i.b = Bn(i.b)), this.spaces[r].primaries !== this.spaces[o].primaries && (i.applyMatrix3(this.spaces[r].toXYZ), i.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === nt && (i.r = ts(i.r), i.g = ts(i.g), i.b = ts(i.b))), i;
  }, fromWorkingColorSpace: function(i, r) {
    return this.convert(i, this.workingColorSpace, r);
  }, toWorkingColorSpace: function(i, r) {
    return this.convert(i, r, this.workingColorSpace);
  }, getPrimaries: function(i) {
    return this.spaces[i].primaries;
  }, getTransfer: function(i) {
    return i === Jn ? Zr : this.spaces[i].transfer;
  }, getLuminanceCoefficients: function(i, r = this.workingColorSpace) {
    return i.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(i) {
    Object.assign(this.spaces, i);
  }, _getMatrix: function(i, r, o) {
    return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ);
  }, _getDrawingBufferColorSpace: function(i) {
    return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(i = this.workingColorSpace) {
    return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return s3.define({ [Ft]: { primaries: e, whitePoint: n, transfer: Zr, toXYZ: jl, fromXYZ: Kl, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: gt }, outputColorSpaceConfig: { drawingBufferColorSpace: gt } }, [gt]: { primaries: e, whitePoint: n, transfer: nt, toXYZ: jl, fromXYZ: Kl, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: gt } } }), s3;
}
const We = Zd();
function Bn(s3) {
  return s3 < 0.04045 ? s3 * 0.0773993808 : Math.pow(s3 * 0.9478672986 + 0.0521327014, 2.4);
}
function ts(s3) {
  return s3 < 31308e-7 ? s3 * 12.92 : 1.055 * Math.pow(s3, 0.41666) - 0.055;
}
let Ei;
class Jd {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Ei === void 0 && (Ei = Zs("canvas")), Ei.width = e.width, Ei.height = e.height;
      const n = Ei.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Ei;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Zs("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let o = 0; o < r.length; o++) r[o] = Bn(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Bn(t[n] / 255) * 255) : t[n] = Bn(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Qd = 0;
class Wh {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Qd++ }), this.uuid = hn(), this.data = e, this.dataReady = true, this.version = 0;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let o = 0, a = i.length; o < a; o++) i[o].isDataTexture ? r.push(Eo(i[o].image)) : r.push(Eo(i[o]));
      } else r = Eo(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Eo(s3) {
  return typeof HTMLImageElement < "u" && s3 instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s3 instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s3 instanceof ImageBitmap ? Jd.getDataURL(s3) : s3.data ? { data: Array.from(s3.data), width: s3.width, height: s3.height, type: s3.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let ef = 0;
class vt extends si {
  constructor(e = vt.DEFAULT_IMAGE, t = vt.DEFAULT_MAPPING, n = Qn, i = Qn, r = Wt, o = Un, a = Xt, l = zn, c = vt.DEFAULT_ANISOTROPY, h = Jn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: ef++ }), this.uuid = hn(), this.name = "", this.source = new Wh(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new pe(0, 0), this.repeat = new pe(1, 1), this.center = new pe(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ue(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== wh) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case as:
        e.x = e.x - Math.floor(e.x);
        break;
      case Qn:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case Kr:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case as:
        e.y = e.y - Math.floor(e.y);
        break;
      case Qn:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case Kr:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(e) {
    e === true && this.pmremVersion++;
  }
}
vt.DEFAULT_IMAGE = null;
vt.DEFAULT_MAPPING = wh;
vt.DEFAULT_ANISOTROPY = 1;
class Ke {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Ke.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], p = l[5], _ = l[9], g = l[2], m = l[6], f = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - g) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + g) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(c + p + f - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const E = (c + 1) / 2, S = (p + 1) / 2, P = (f + 1) / 2, w = (h + d) / 4, C = (u + g) / 4, N = (_ + m) / 4;
      return E > S && E > P ? E < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(E), i = w / n, r = C / n) : S > P ? S < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(S), n = w / i, r = N / i) : P < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(P), n = C / r, i = N / r), this.set(n, i, r, t), this;
    }
    let T = Math.sqrt((m - _) * (m - _) + (u - g) * (u - g) + (d - h) * (d - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (m - _) / T, this.y = (u - g) / T, this.z = (d - h) / T, this.w = Math.acos((c + p + f - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Oe(this.x, e.x, t.x), this.y = Oe(this.y, e.y, t.y), this.z = Oe(this.z, e.z, t.z), this.w = Oe(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Oe(this.x, e, t), this.y = Oe(this.y, e, t), this.z = Oe(this.z, e, t), this.w = Oe(this.w, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class tf extends si {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ke(0, 0, e, t), this.scissorTest = false, this.viewport = new Ke(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Wt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, n);
    const r = new vt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = false, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const o = n.count;
    for (let a = 0; a < o; a++) this.textures[a] = r.clone(), this.textures[a].isRenderTargetTexture = true, this.textures[a].renderTarget = this;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, r = this.textures.length; i < r; i++) this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, i = e.textures.length; n < i; n++) this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = true, this.textures[n].renderTarget = this;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Wh(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Qt extends tf {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = true;
  }
}
class Xh extends vt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Ut, this.minFilter = Ut, this.wrapR = Qn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class nf extends vt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Ut, this.minFilter = Ut, this.wrapR = Qn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Ct {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, o, a) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = r[o + 0], p = r[o + 1], _ = r[o + 2], g = r[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = _, e[t + 3] = g;
      return;
    }
    if (u !== g || l !== d || c !== p || h !== _) {
      let m = 1 - a;
      const f = l * d + c * p + h * _ + u * g, T = f >= 0 ? 1 : -1, E = 1 - f * f;
      if (E > Number.EPSILON) {
        const P = Math.sqrt(E), w = Math.atan2(P, f * T);
        m = Math.sin(m * w) / P, a = Math.sin(a * w) / P;
      }
      const S = a * T;
      if (l = l * m + d * S, c = c * m + p * S, h = h * m + _ * S, u = u * m + g * S, m === 1 - a) {
        const P = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= P, c *= P, h *= P, u *= P;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, o) {
    const a = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = r[o], d = r[o + 1], p = r[o + 2], _ = r[o + 3];
    return e[t] = a * _ + h * u + l * p - c * d, e[t + 1] = l * _ + h * d + c * u - a * p, e[t + 2] = c * _ + h * p + a * d - l * u, e[t + 3] = h * _ - a * u - l * d - c * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = true) {
    const n = e._x, i = e._y, r = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), h = a(i / 2), u = a(r / 2), d = l(n / 2), p = l(i / 2), _ = l(r / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + c * p * _, this._y = c * p * u - d * h * _, this._z = c * h * _ + d * p * u, this._w = c * h * u - d * p * _;
        break;
      case "YXZ":
        this._x = d * h * u + c * p * _, this._y = c * p * u - d * h * _, this._z = c * h * _ - d * p * u, this._w = c * h * u + d * p * _;
        break;
      case "ZXY":
        this._x = d * h * u - c * p * _, this._y = c * p * u + d * h * _, this._z = c * h * _ + d * p * u, this._w = c * h * u - d * p * _;
        break;
      case "ZYX":
        this._x = d * h * u - c * p * _, this._y = c * p * u + d * h * _, this._z = c * h * _ - d * p * u, this._w = c * h * u + d * p * _;
        break;
      case "YZX":
        this._x = d * h * u + c * p * _, this._y = c * p * u + d * h * _, this._z = c * h * _ - d * p * u, this._w = c * h * u - d * p * _;
        break;
      case "XZY":
        this._x = d * h * u - c * p * _, this._y = c * p * u - d * h * _, this._z = c * h * _ + d * p * u, this._w = c * h * u + d * p * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], o = t[1], a = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + a + u;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (h - l) * p, this._y = (r - c) * p, this._z = (o - i) * p;
    } else if (n > a && n > u) {
      const p = 2 * Math.sqrt(1 + n - a - u);
      this._w = (h - l) / p, this._x = 0.25 * p, this._y = (i + o) / p, this._z = (r + c) / p;
    } else if (a > u) {
      const p = 2 * Math.sqrt(1 + a - n - u);
      this._w = (r - c) / p, this._x = (i + o) / p, this._y = 0.25 * p, this._z = (l + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - i) / p, this._x = (r + c) / p, this._y = (l + h) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Oe(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, o = e._w, a = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + o * a + i * c - r * l, this._y = i * h + o * l + r * a - n * c, this._z = r * h + o * c + n * l - i * a, this._w = o * h - n * a - i * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, r = this._z, o = this._w;
    let a = o * e._w + n * e._x + i * e._y + r * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * o + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, a), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
    return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(i * Math.sin(e), i * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, n = 0) {
    R.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion($l.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion($l.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * i - a * n), h = 2 * (a * t - r * i), u = 2 * (r * n - o * t);
    return this.x = t + l * c + o * u - a * h, this.y = n + l * h + a * c - r * u, this.z = i + l * u + r * h - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Oe(this.x, e.x, t.x), this.y = Oe(this.y, e.y, t.y), this.z = Oe(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Oe(this.x, e, t), this.y = Oe(this.y, e, t), this.z = Oe(this.z, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Oe(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, r = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = i * l - r * a, this.y = r * o - n * l, this.z = n * a - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return To.copy(this).projectOnVector(e), this.sub(To);
  }
  reflect(e) {
    return this.sub(To.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Oe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const To = new R(), $l = new Ct();
class Hn {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(rn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(rn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = rn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === true && r !== void 0 && e.isInstancedMesh !== true) for (let o = 0, a = r.count; o < a; o++) e.isMesh === true ? e.getVertexPosition(o, rn) : rn.fromBufferAttribute(r, o), rn.applyMatrix4(e.matrixWorld), this.expandByPoint(rn);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), lr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), lr.copy(n.boundingBox)), lr.applyMatrix4(e.matrixWorld), this.union(lr);
    }
    const i = e.children;
    for (let r = 0, o = i.length; r < o; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, rn), rn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(Ts), cr.subVectors(this.max, Ts), Ti.subVectors(e.a, Ts), Ai.subVectors(e.b, Ts), wi.subVectors(e.c, Ts), Wn.subVectors(Ai, Ti), Xn.subVectors(wi, Ai), ci.subVectors(Ti, wi);
    let t = [0, -Wn.z, Wn.y, 0, -Xn.z, Xn.y, 0, -ci.z, ci.y, Wn.z, 0, -Wn.x, Xn.z, 0, -Xn.x, ci.z, 0, -ci.x, -Wn.y, Wn.x, 0, -Xn.y, Xn.x, 0, -ci.y, ci.x, 0];
    return !Ao(t, Ti, Ai, wi, cr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ao(t, Ti, Ai, wi, cr)) ? false : (hr.crossVectors(Wn, Xn), t = [hr.x, hr.y, hr.z], Ao(t, Ti, Ai, wi, cr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, rn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(rn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Tn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Tn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Tn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Tn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Tn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Tn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Tn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Tn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Tn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Tn = [new R(), new R(), new R(), new R(), new R(), new R(), new R(), new R()], rn = new R(), lr = new Hn(), Ti = new R(), Ai = new R(), wi = new R(), Wn = new R(), Xn = new R(), ci = new R(), Ts = new R(), cr = new R(), hr = new R(), hi = new R();
function Ao(s3, e, t, n, i) {
  for (let r = 0, o = s3.length - 3; r <= o; r += 3) {
    hi.fromArray(s3, r);
    const a = i.x * Math.abs(hi.x) + i.y * Math.abs(hi.y) + i.z * Math.abs(hi.z), l = e.dot(hi), c = t.dot(hi), h = n.dot(hi);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return false;
  }
  return true;
}
const sf = new Hn(), As = new R(), wo = new R();
class Mn {
  constructor(e = new R(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : sf.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, o = e.length; r < o; r++) i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    As.subVectors(e, this.center);
    const t = As.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(As, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (wo.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(As.copy(e.center).add(wo)), this.expandByPoint(As.copy(e.center).sub(wo))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const An = new R(), Ro = new R(), ur = new R(), Yn = new R(), Co = new R(), dr = new R(), Po = new R();
class _s {
  constructor(e = new R(), t = new R(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, An)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = An.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (An.copy(this.origin).addScaledVector(this.direction, t), An.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Ro.copy(e).add(t).multiplyScalar(0.5), ur.copy(t).sub(e).normalize(), Yn.copy(this.origin).sub(Ro);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(ur), a = Yn.dot(this.direction), l = -Yn.dot(ur), c = Yn.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, p, _;
    if (h > 0) if (u = o * l - a, d = o * a - l, _ = r * h, u >= 0) if (d >= -_) if (d <= _) {
      const g = 1 / h;
      u *= g, d *= g, p = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * l) + c;
    } else d = r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c;
    else d = -r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c;
    else d <= -_ ? (u = Math.max(0, -(-o * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c) : d <= _ ? (u = 0, d = Math.min(Math.max(-r, -l), r), p = d * (d + 2 * l) + c) : (u = Math.max(0, -(o * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c);
    else d = o > 0 ? -r : r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(Ro).addScaledVector(ur, d), p;
  }
  intersectSphere(e, t) {
    An.subVectors(e.center, this.origin);
    const n = An.dot(this.direction), i = An.dot(An) - n * n, r = e.radius * e.radius;
    if (i > r) return null;
    const o = Math.sqrt(r - i), a = n - o, l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, o, a, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (r = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || r > i || ((r > n || isNaN(n)) && (n = r), (o < i || isNaN(i)) && (i = o), u >= 0 ? (a = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, An) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Co.subVectors(t, e), dr.subVectors(n, e), Po.crossVectors(Co, dr);
    let o = this.direction.dot(Po), a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0) a = -1, o = -o;
    else return null;
    Yn.subVectors(this.origin, e);
    const l = a * this.direction.dot(dr.crossVectors(Yn, dr));
    if (l < 0) return null;
    const c = a * this.direction.dot(Co.cross(Yn));
    if (c < 0 || l + c > o) return null;
    const h = -a * Yn.dot(Po);
    return h < 0 ? null : this.at(h / o, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Le {
  constructor(e, t, n, i, r, o, a, l, c, h, u, d, p, _, g, m) {
    Le.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, o, a, l, c, h, u, d, p, _, g, m);
  }
  set(e, t, n, i, r, o, a, l, c, h, u, d, p, _, g, m) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = i, f[1] = r, f[5] = o, f[9] = a, f[13] = l, f[2] = c, f[6] = h, f[10] = u, f[14] = d, f[3] = p, f[7] = _, f[11] = g, f[15] = m, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Le().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Ri.setFromMatrixColumn(e, 0).length(), r = 1 / Ri.setFromMatrixColumn(e, 1).length(), o = 1 / Ri.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(r), u = Math.sin(r);
    if (e.order === "XYZ") {
      const d = o * h, p = o * u, _ = a * h, g = a * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = p + _ * c, t[5] = d - g * c, t[9] = -a * l, t[2] = g - d * c, t[6] = _ + p * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const d = l * h, p = l * u, _ = c * h, g = c * u;
      t[0] = d + g * a, t[4] = _ * a - p, t[8] = o * c, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = p * a - _, t[6] = g + d * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const d = l * h, p = l * u, _ = c * h, g = c * u;
      t[0] = d - g * a, t[4] = -o * u, t[8] = _ + p * a, t[1] = p + _ * a, t[5] = o * h, t[9] = g - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const d = o * h, p = o * u, _ = a * h, g = a * u;
      t[0] = l * h, t[4] = _ * c - p, t[8] = d * c + g, t[1] = l * u, t[5] = g * c + d, t[9] = p * c - _, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const d = o * l, p = o * c, _ = a * l, g = a * c;
      t[0] = l * h, t[4] = g - d * u, t[8] = _ * u + p, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = p * u + _, t[10] = d - g * u;
    } else if (e.order === "XZY") {
      const d = o * l, p = o * c, _ = a * l, g = a * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + g, t[5] = o * h, t[9] = p * u - _, t[2] = _ * u - p, t[6] = a * h, t[10] = g * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(rf, e, of);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Ht.subVectors(e, t), Ht.lengthSq() === 0 && (Ht.z = 1), Ht.normalize(), qn.crossVectors(n, Ht), qn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ht.x += 1e-4 : Ht.z += 1e-4, Ht.normalize(), qn.crossVectors(n, Ht)), qn.normalize(), fr.crossVectors(Ht, qn), i[0] = qn.x, i[4] = fr.x, i[8] = Ht.x, i[1] = qn.y, i[5] = fr.y, i[9] = Ht.y, i[2] = qn.z, i[6] = fr.z, i[10] = Ht.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], p = n[13], _ = n[2], g = n[6], m = n[10], f = n[14], T = n[3], E = n[7], S = n[11], P = n[15], w = i[0], C = i[4], N = i[8], M = i[12], y = i[1], I = i[5], q = i[9], z = i[13], X = i[2], J = i[6], G = i[10], te = i[14], V = i[3], oe = i[7], de = i[11], Se = i[15];
    return r[0] = o * w + a * y + l * X + c * V, r[4] = o * C + a * I + l * J + c * oe, r[8] = o * N + a * q + l * G + c * de, r[12] = o * M + a * z + l * te + c * Se, r[1] = h * w + u * y + d * X + p * V, r[5] = h * C + u * I + d * J + p * oe, r[9] = h * N + u * q + d * G + p * de, r[13] = h * M + u * z + d * te + p * Se, r[2] = _ * w + g * y + m * X + f * V, r[6] = _ * C + g * I + m * J + f * oe, r[10] = _ * N + g * q + m * G + f * de, r[14] = _ * M + g * z + m * te + f * Se, r[3] = T * w + E * y + S * X + P * V, r[7] = T * C + E * I + S * J + P * oe, r[11] = T * N + E * q + S * G + P * de, r[15] = T * M + E * z + S * te + P * Se, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], o = e[1], a = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], p = e[14], _ = e[3], g = e[7], m = e[11], f = e[15];
    return _ * (+r * l * u - i * c * u - r * a * d + n * c * d + i * a * p - n * l * p) + g * (+t * l * p - t * c * d + r * o * d - i * o * p + i * c * h - r * l * h) + m * (+t * c * u - t * a * p - r * o * u + n * o * p + r * a * h - n * c * h) + f * (-i * a * h - t * l * u + t * a * d + i * o * u - n * o * d + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], p = e[11], _ = e[12], g = e[13], m = e[14], f = e[15], T = u * m * c - g * d * c + g * l * p - a * m * p - u * l * f + a * d * f, E = _ * d * c - h * m * c - _ * l * p + o * m * p + h * l * f - o * d * f, S = h * g * c - _ * u * c + _ * a * p - o * g * p - h * a * f + o * u * f, P = _ * u * l - h * g * l - _ * a * d + o * g * d + h * a * m - o * u * m, w = t * T + n * E + i * S + r * P;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / w;
    return e[0] = T * C, e[1] = (g * d * r - u * m * r - g * i * p + n * m * p + u * i * f - n * d * f) * C, e[2] = (a * m * r - g * l * r + g * i * c - n * m * c - a * i * f + n * l * f) * C, e[3] = (u * l * r - a * d * r - u * i * c + n * d * c + a * i * p - n * l * p) * C, e[4] = E * C, e[5] = (h * m * r - _ * d * r + _ * i * p - t * m * p - h * i * f + t * d * f) * C, e[6] = (_ * l * r - o * m * r - _ * i * c + t * m * c + o * i * f - t * l * f) * C, e[7] = (o * d * r - h * l * r + h * i * c - t * d * c - o * i * p + t * l * p) * C, e[8] = S * C, e[9] = (_ * u * r - h * g * r - _ * n * p + t * g * p + h * n * f - t * u * f) * C, e[10] = (o * g * r - _ * a * r + _ * n * c - t * g * c - o * n * f + t * a * f) * C, e[11] = (h * a * r - o * u * r - h * n * c + t * u * c + o * n * p - t * a * p) * C, e[12] = P * C, e[13] = (h * g * i - _ * u * i + _ * n * d - t * g * d - h * n * m + t * u * m) * C, e[14] = (_ * a * i - o * g * i - _ * n * l + t * g * l + o * n * m - t * a * m) * C, e[15] = (o * u * i - h * a * i + h * n * l - t * u * l - o * n * d + t * a * d) * C, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, o = e.x, a = e.y, l = e.z, c = r * o, h = r * a;
    return this.set(c * o + n, c * a - i * l, c * l + i * a, 0, c * a + i * l, h * a + n, h * l - i * o, 0, c * l - i * a, h * l + i * o, r * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, o) {
    return this.set(1, n, r, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, o = t._y, a = t._z, l = t._w, c = r + r, h = o + o, u = a + a, d = r * c, p = r * h, _ = r * u, g = o * h, m = o * u, f = a * u, T = l * c, E = l * h, S = l * u, P = n.x, w = n.y, C = n.z;
    return i[0] = (1 - (g + f)) * P, i[1] = (p + S) * P, i[2] = (_ - E) * P, i[3] = 0, i[4] = (p - S) * w, i[5] = (1 - (d + f)) * w, i[6] = (m + T) * w, i[7] = 0, i[8] = (_ + E) * C, i[9] = (m - T) * C, i[10] = (1 - (d + g)) * C, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = Ri.set(i[0], i[1], i[2]).length();
    const o = Ri.set(i[4], i[5], i[6]).length(), a = Ri.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], on.copy(this);
    const c = 1 / r, h = 1 / o, u = 1 / a;
    return on.elements[0] *= c, on.elements[1] *= c, on.elements[2] *= c, on.elements[4] *= h, on.elements[5] *= h, on.elements[6] *= h, on.elements[8] *= u, on.elements[9] *= u, on.elements[10] *= u, t.setFromRotationMatrix(on), n.x = r, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, r, o, a = Nn) {
    const l = this.elements, c = 2 * r / (t - e), h = 2 * r / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let p, _;
    if (a === Nn) p = -(o + r) / (o - r), _ = -2 * o * r / (o - r);
    else if (a === Jr) p = -o / (o - r), _ = -o * r / (o - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, o, a = Nn) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - i), u = 1 / (o - r), d = (t + e) * c, p = (n + i) * h;
    let _, g;
    if (a === Nn) _ = (o + r) * u, g = -2 * u;
    else if (a === Jr) _ = r * u, g = -1 * u;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -p, l[2] = 0, l[6] = 0, l[10] = g, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Ri = new R(), on = new Le(), rf = new R(0, 0, 0), of = new R(1, 1, 1), qn = new R(), fr = new R(), Ht = new R(), Zl = new Le(), Jl = new Ct();
class Sn {
  constructor(e = 0, t = 0, n = 0, i = Sn.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    const i = e.elements, r = i[0], o = i[4], a = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], p = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Oe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Oe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Oe(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Oe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(Oe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, p));
        break;
      case "XZY":
        this._z = Math.asin(-Oe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Zl.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Zl, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Jl.setFromEuler(this), this.setFromQuaternion(Jl, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Sn.DEFAULT_ORDER = "XYZ";
class gl {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let af = 0;
const Ql = new R(), Ci = new Ct(), wn = new Le(), pr = new R(), ws = new R(), lf = new R(), cf = new Ct(), ec = new R(1, 0, 0), tc = new R(0, 1, 0), nc = new R(0, 0, 1), ic = { type: "added" }, hf = { type: "removed" }, Pi = { type: "childadded", child: null }, Io = { type: "childremoved", child: null };
class ct extends si {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: af++ }), this.uuid = hn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ct.DEFAULT_UP.clone();
    const e = new R(), t = new Sn(), n = new Ct(), i = new R(1, 1, 1);
    function r() {
      n.setFromEuler(t, false);
    }
    function o() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(r), n._onChange(o), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new Le() }, normalMatrix: { value: new Ue() } }), this.matrix = new Le(), this.matrixWorld = new Le(), this.matrixAutoUpdate = ct.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new gl(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Ci.setFromAxisAngle(e, t), this.quaternion.multiply(Ci), this;
  }
  rotateOnWorldAxis(e, t) {
    return Ci.setFromAxisAngle(e, t), this.quaternion.premultiply(Ci), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(ec, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(tc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(nc, e);
  }
  translateOnAxis(e, t) {
    return Ql.copy(e).applyQuaternion(this.quaternion), this.position.add(Ql.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(ec, e);
  }
  translateY(e) {
    return this.translateOnAxis(tc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(nc, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(wn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? pr.copy(e) : pr.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(true, false), ws.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? wn.lookAt(ws, pr, this.up) : wn.lookAt(pr, ws, this.up), this.quaternion.setFromRotationMatrix(wn), i && (wn.extractRotation(i.matrixWorld), Ci.setFromRotationMatrix(wn), this.quaternion.premultiply(Ci.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(ic), Pi.child = e, this.dispatchEvent(Pi), Pi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(hf), Io.child = e, this.dispatchEvent(Io), Io.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), wn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), wn.multiply(e.parent.matrixWorld)), e.applyMatrix4(wn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(ic), Pi.child = e, this.dispatchEvent(Pi), Pi.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let r = 0, o = i.length; r < o; r++) i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(ws, e, lf), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(ws, cf, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
      const i = this.children;
      for (let r = 0, o = i.length; r < o; r++) i[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((a) => ({ boxInitialized: a.boxInitialized, boxMin: a.box.min.toArray(), boxMax: a.box.max.toArray(), sphereInitialized: a.sphereInitialized, sphereRadius: a.sphere.radius, sphereCenter: a.sphere.center.toArray() })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), this.boundingBox !== null && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() }));
    function r(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          r(e.shapes, u);
        }
        else r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const a = [];
      for (let l = 0, c = this.material.length; l < c; l++) a.push(r(e.materials, this.material[l]));
      i.material = a;
    } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++) i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        i.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), p = o(e.animations), _ = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), _.length > 0 && (n.nodes = _);
    }
    return n.object = i, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let n = 0; n < e.children.length; n++) {
      const i = e.children[n];
      this.add(i.clone());
    }
    return this;
  }
}
ct.DEFAULT_UP = new R(0, 1, 0);
ct.DEFAULT_MATRIX_AUTO_UPDATE = true;
ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const an = new R(), Rn = new R(), Lo = new R(), Cn = new R(), Ii = new R(), Li = new R(), sc = new R(), Do = new R(), Uo = new R(), No = new R(), Fo = new Ke(), Oo = new Ke(), Bo = new Ke();
class Jt {
  constructor(e = new R(), t = new R(), n = new R()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), an.subVectors(e, t), i.cross(an);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    an.subVectors(i, t), Rn.subVectors(n, t), Lo.subVectors(e, t);
    const o = an.dot(an), a = an.dot(Rn), l = an.dot(Lo), c = Rn.dot(Rn), h = Rn.dot(Lo), u = o * c - a * a;
    if (u === 0) return r.set(0, 0, 0), null;
    const d = 1 / u, p = (c * l - a * h) * d, _ = (o * h - a * l) * d;
    return r.set(1 - p - _, _, p);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Cn) === null ? false : Cn.x >= 0 && Cn.y >= 0 && Cn.x + Cn.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, o, a, l) {
    return this.getBarycoord(e, t, n, i, Cn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Cn.x), l.addScaledVector(o, Cn.y), l.addScaledVector(a, Cn.z), l);
  }
  static getInterpolatedAttribute(e, t, n, i, r, o) {
    return Fo.setScalar(0), Oo.setScalar(0), Bo.setScalar(0), Fo.fromBufferAttribute(e, t), Oo.fromBufferAttribute(e, n), Bo.fromBufferAttribute(e, i), o.setScalar(0), o.addScaledVector(Fo, r.x), o.addScaledVector(Oo, r.y), o.addScaledVector(Bo, r.z), o;
  }
  static isFrontFacing(e, t, n, i) {
    return an.subVectors(n, t), Rn.subVectors(e, t), an.cross(Rn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return an.subVectors(this.c, this.b), Rn.subVectors(this.a, this.b), an.cross(Rn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Jt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Jt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return Jt.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Jt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Jt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let o, a;
    Ii.subVectors(i, n), Li.subVectors(r, n), Do.subVectors(e, n);
    const l = Ii.dot(Do), c = Li.dot(Do);
    if (l <= 0 && c <= 0) return t.copy(n);
    Uo.subVectors(e, i);
    const h = Ii.dot(Uo), u = Li.dot(Uo);
    if (h >= 0 && u <= h) return t.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0) return o = l / (l - h), t.copy(n).addScaledVector(Ii, o);
    No.subVectors(e, r);
    const p = Ii.dot(No), _ = Li.dot(No);
    if (_ >= 0 && p <= _) return t.copy(r);
    const g = p * c - l * _;
    if (g <= 0 && c >= 0 && _ <= 0) return a = c / (c - _), t.copy(n).addScaledVector(Li, a);
    const m = h * _ - p * u;
    if (m <= 0 && u - h >= 0 && p - _ >= 0) return sc.subVectors(r, i), a = (u - h) / (u - h + (p - _)), t.copy(i).addScaledVector(sc, a);
    const f = 1 / (m + g + d);
    return o = g * f, a = d * f, t.copy(n).addScaledVector(Ii, o).addScaledVector(Li, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Yh = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, jn = { h: 0, s: 0, l: 0 }, mr = { h: 0, s: 0, l: 0 };
function ko(s3, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s3 + (e - s3) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s3 + (e - s3) * 6 * (2 / 3 - t) : s3;
}
let Ee = class {
  constructor(e, t, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = gt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, We.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = We.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, We.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = We.workingColorSpace) {
    if (e = _l(e, 1), t = Oe(t, 0, 1), n = Oe(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r;
      this.r = ko(o, r, e + 1 / 3), this.g = ko(o, r, e), this.b = ko(o, r, e - 1 / 3);
    }
    return We.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = gt) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const o = i[1], a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], o = r.length;
      if (o === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (o === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = gt) {
    const n = Yh[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Bn(e.r), this.g = Bn(e.g), this.b = Bn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ts(e.r), this.g = ts(e.g), this.b = ts(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = gt) {
    return We.fromWorkingColorSpace(wt.copy(this), e), Math.round(Oe(wt.r * 255, 0, 255)) * 65536 + Math.round(Oe(wt.g * 255, 0, 255)) * 256 + Math.round(Oe(wt.b * 255, 0, 255));
  }
  getHexString(e = gt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = We.workingColorSpace) {
    We.fromWorkingColorSpace(wt.copy(this), t);
    const n = wt.r, i = wt.g, r = wt.b, o = Math.max(n, i, r), a = Math.min(n, i, r);
    let l, c;
    const h = (a + o) / 2;
    if (a === o) l = 0, c = 0;
    else {
      const u = o - a;
      switch (c = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case n:
          l = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = We.workingColorSpace) {
    return We.fromWorkingColorSpace(wt.copy(this), t), e.r = wt.r, e.g = wt.g, e.b = wt.b, e;
  }
  getStyle(e = gt) {
    We.fromWorkingColorSpace(wt.copy(this), e);
    const t = wt.r, n = wt.g, i = wt.b;
    return e !== gt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(jn), this.setHSL(jn.h + e, jn.s + t, jn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(jn), e.getHSL(mr);
    const n = Gs(jn.h, mr.h, t), i = Gs(jn.s, mr.s, t), r = Gs(jn.l, mr.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
};
const wt = new Ee();
Ee.NAMES = Yh;
let uf = 0;
class un extends si {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: uf++ }), this.uuid = hn(), this.name = "", this.type = "Material", this.blending = Qi, this.side = kn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = la, this.blendDst = ca, this.blendEquation = gi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ee(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ss, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Wl, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = bi, this.stencilZFail = bi, this.stencilZPass = bi, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const i = this[t];
      if (i === void 0) {
        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Qi && (n.blending = this.blending), this.side !== kn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== la && (n.blendSrc = this.blendSrc), this.blendDst !== ca && (n.blendDst = this.blendDst), this.blendEquation !== gi && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ss && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Wl && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== bi && (n.stencilFail = this.stencilFail), this.stencilZFail !== bi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== bi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const o = [];
      for (const a in r) {
        const l = r[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const r = i(e.textures), o = i(e.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class Fn extends un {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Ee(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Sn(), this.combine = Th, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const mt = new R(), _r = new pe();
class Nt {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Ya, this.updateRanges = [], this.gpuType = cn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) _r.fromBufferAttribute(this, t), _r.applyMatrix3(e), this.setXY(t, _r.x, _r.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) mt.fromBufferAttribute(this, t), mt.applyMatrix3(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) mt.fromBufferAttribute(this, t), mt.applyMatrix4(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) mt.fromBufferAttribute(this, t), mt.applyNormalMatrix(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) mt.fromBufferAttribute(this, t), mt.transformDirection(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = ln(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = et(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = et(t, this.array), n = et(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array), r = et(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== Ya && (e.usage = this.usage), e;
  }
}
class qh extends Nt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class jh extends Nt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class dn extends Nt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let df = 0;
const $t = new Le(), zo = new ct(), Di = new R(), Vt = new Hn(), Rs = new Hn(), St = new R();
class en extends si {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: df++ }), this.uuid = hn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Gh(e) ? jh : qh)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ue().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = true;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return $t.makeRotationFromQuaternion(e), this.applyMatrix4($t), this;
  }
  rotateX(e) {
    return $t.makeRotationX(e), this.applyMatrix4($t), this;
  }
  rotateY(e) {
    return $t.makeRotationY(e), this.applyMatrix4($t), this;
  }
  rotateZ(e) {
    return $t.makeRotationZ(e), this.applyMatrix4($t), this;
  }
  translate(e, t, n) {
    return $t.makeTranslation(e, t, n), this.applyMatrix4($t), this;
  }
  scale(e, t, n) {
    return $t.makeScale(e, t, n), this.applyMatrix4($t), this;
  }
  lookAt(e) {
    return zo.lookAt(e), zo.updateMatrix(), this.applyMatrix4(zo.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Di).negate(), this.translate(Di.x, Di.y, Di.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let i = 0, r = e.length; i < r; i++) {
        const o = e[i];
        n.push(o.x, o.y, o.z || 0);
      }
      this.setAttribute("position", new dn(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let i = 0; i < n; i++) {
        const r = e[i];
        t.setXYZ(i, r.x, r.y, r.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Hn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new R(-1 / 0, -1 / 0, -1 / 0), new R(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) {
        const r = t[n];
        Vt.setFromBufferAttribute(r), this.morphTargetsRelative ? (St.addVectors(this.boundingBox.min, Vt.min), this.boundingBox.expandByPoint(St), St.addVectors(this.boundingBox.max, Vt.max), this.boundingBox.expandByPoint(St)) : (this.boundingBox.expandByPoint(Vt.min), this.boundingBox.expandByPoint(Vt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Mn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Vt.setFromBufferAttribute(e), t) for (let r = 0, o = t.length; r < o; r++) {
        const a = t[r];
        Rs.setFromBufferAttribute(a), this.morphTargetsRelative ? (St.addVectors(Vt.min, Rs.min), Vt.expandByPoint(St), St.addVectors(Vt.max, Rs.max), Vt.expandByPoint(St)) : (Vt.expandByPoint(Rs.min), Vt.expandByPoint(Rs.max));
      }
      Vt.getCenter(n);
      let i = 0;
      for (let r = 0, o = e.count; r < o; r++) St.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(St));
      if (t) for (let r = 0, o = t.length; r < o; r++) {
        const a = t[r], l = this.morphTargetsRelative;
        for (let c = 0, h = a.count; c < h; c++) St.fromBufferAttribute(a, c), l && (Di.fromBufferAttribute(e, c), St.add(Di)), i = Math.max(i, n.distanceToSquared(St));
      }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, i = t.normal, r = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Nt(new Float32Array(4 * n.count), 4));
    const o = this.getAttribute("tangent"), a = [], l = [];
    for (let N = 0; N < n.count; N++) a[N] = new R(), l[N] = new R();
    const c = new R(), h = new R(), u = new R(), d = new pe(), p = new pe(), _ = new pe(), g = new R(), m = new R();
    function f(N, M, y) {
      c.fromBufferAttribute(n, N), h.fromBufferAttribute(n, M), u.fromBufferAttribute(n, y), d.fromBufferAttribute(r, N), p.fromBufferAttribute(r, M), _.fromBufferAttribute(r, y), h.sub(c), u.sub(c), p.sub(d), _.sub(d);
      const I = 1 / (p.x * _.y - _.x * p.y);
      isFinite(I) && (g.copy(h).multiplyScalar(_.y).addScaledVector(u, -p.y).multiplyScalar(I), m.copy(u).multiplyScalar(p.x).addScaledVector(h, -_.x).multiplyScalar(I), a[N].add(g), a[M].add(g), a[y].add(g), l[N].add(m), l[M].add(m), l[y].add(m));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: e.count }]);
    for (let N = 0, M = T.length; N < M; ++N) {
      const y = T[N], I = y.start, q = y.count;
      for (let z = I, X = I + q; z < X; z += 3) f(e.getX(z + 0), e.getX(z + 1), e.getX(z + 2));
    }
    const E = new R(), S = new R(), P = new R(), w = new R();
    function C(N) {
      P.fromBufferAttribute(i, N), w.copy(P);
      const M = a[N];
      E.copy(M), E.sub(P.multiplyScalar(P.dot(M))).normalize(), S.crossVectors(w, M);
      const I = S.dot(l[N]) < 0 ? -1 : 1;
      o.setXYZW(N, E.x, E.y, E.z, I);
    }
    for (let N = 0, M = T.length; N < M; ++N) {
      const y = T[N], I = y.start, q = y.count;
      for (let z = I, X = I + q; z < X; z += 3) C(e.getX(z + 0)), C(e.getX(z + 1)), C(e.getX(z + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Nt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let d = 0, p = n.count; d < p; d++) n.setXYZ(d, 0, 0, 0);
      const i = new R(), r = new R(), o = new R(), a = new R(), l = new R(), c = new R(), h = new R(), u = new R();
      if (e) for (let d = 0, p = e.count; d < p; d += 3) {
        const _ = e.getX(d + 0), g = e.getX(d + 1), m = e.getX(d + 2);
        i.fromBufferAttribute(t, _), r.fromBufferAttribute(t, g), o.fromBufferAttribute(t, m), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), a.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), c.fromBufferAttribute(n, m), a.add(h), l.add(h), c.add(h), n.setXYZ(_, a.x, a.y, a.z), n.setXYZ(g, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
      }
      else for (let d = 0, p = t.count; d < p; d += 3) i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) St.fromBufferAttribute(e, t), St.normalize(), e.setXYZ(t, St.x, St.y, St.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, h = a.itemSize, u = a.normalized, d = new c.constructor(l.length * h);
      let p = 0, _ = 0;
      for (let g = 0, m = l.length; g < m; g++) {
        a.isInterleavedBufferAttribute ? p = l[g] * a.data.stride + a.offset : p = l[g] * h;
        for (let f = 0; f < h; f++) d[_++] = c[p++];
      }
      return new Nt(d, h, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new en(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const l = i[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const l = [], c = r[a];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], p = e(d, n);
        l.push(p);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let r = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const p = c[u];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (i[l] = h, r = true);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
      for (let d = 0, p = u.length; d < p; d++) h.push(u[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const rc = new Le(), ui = new _s(), gr = new Mn(), oc = new R(), vr = new R(), xr = new R(), yr = new R(), Ho = new R(), Sr = new R(), ac = new R(), Mr = new R();
class tt extends ct {
  constructor(e = new en(), t = new Fn()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (r && a) {
      Sr.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = a[l], u = r[l];
        h !== 0 && (Ho.fromBufferAttribute(u, e), o ? Sr.addScaledVector(Ho, h) : Sr.addScaledVector(Ho.sub(t), h));
      }
      t.add(Sr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), gr.copy(n.boundingSphere), gr.applyMatrix4(r), ui.copy(e.ray).recast(e.near), !(gr.containsPoint(ui.origin) === false && (ui.intersectSphere(gr, oc) === null || ui.origin.distanceToSquared(oc) > (e.far - e.near) ** 2)) && (rc.copy(r).invert(), ui.copy(e.ray).applyMatrix4(rc), !(n.boundingBox !== null && ui.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, ui)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, p = r.drawRange;
    if (a !== null) if (Array.isArray(o)) for (let _ = 0, g = d.length; _ < g; _++) {
      const m = d[_], f = o[m.materialIndex], T = Math.max(m.start, p.start), E = Math.min(a.count, Math.min(m.start + m.count, p.start + p.count));
      for (let S = T, P = E; S < P; S += 3) {
        const w = a.getX(S), C = a.getX(S + 1), N = a.getX(S + 2);
        i = br(this, f, e, n, c, h, u, w, C, N), i && (i.faceIndex = Math.floor(S / 3), i.face.materialIndex = m.materialIndex, t.push(i));
      }
    }
    else {
      const _ = Math.max(0, p.start), g = Math.min(a.count, p.start + p.count);
      for (let m = _, f = g; m < f; m += 3) {
        const T = a.getX(m), E = a.getX(m + 1), S = a.getX(m + 2);
        i = br(this, o, e, n, c, h, u, T, E, S), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
      }
    }
    else if (l !== void 0) if (Array.isArray(o)) for (let _ = 0, g = d.length; _ < g; _++) {
      const m = d[_], f = o[m.materialIndex], T = Math.max(m.start, p.start), E = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
      for (let S = T, P = E; S < P; S += 3) {
        const w = S, C = S + 1, N = S + 2;
        i = br(this, f, e, n, c, h, u, w, C, N), i && (i.faceIndex = Math.floor(S / 3), i.face.materialIndex = m.materialIndex, t.push(i));
      }
    }
    else {
      const _ = Math.max(0, p.start), g = Math.min(l.count, p.start + p.count);
      for (let m = _, f = g; m < f; m += 3) {
        const T = m, E = m + 1, S = m + 2;
        i = br(this, o, e, n, c, h, u, T, E, S), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
      }
    }
  }
}
function ff(s3, e, t, n, i, r, o, a) {
  let l;
  if (e.side === Rt ? l = n.intersectTriangle(o, r, i, true, a) : l = n.intersectTriangle(i, r, o, e.side === kn, a), l === null) return null;
  Mr.copy(a), Mr.applyMatrix4(s3.matrixWorld);
  const c = t.ray.origin.distanceTo(Mr);
  return c < t.near || c > t.far ? null : { distance: c, point: Mr.clone(), object: s3 };
}
function br(s3, e, t, n, i, r, o, a, l, c) {
  s3.getVertexPosition(a, vr), s3.getVertexPosition(l, xr), s3.getVertexPosition(c, yr);
  const h = ff(s3, e, t, n, vr, xr, yr, ac);
  if (h) {
    const u = new R();
    Jt.getBarycoord(ac, vr, xr, yr, u), i && (h.uv = Jt.getInterpolatedAttribute(i, a, l, c, u, new pe())), r && (h.uv1 = Jt.getInterpolatedAttribute(r, a, l, c, u, new pe())), o && (h.normal = Jt.getInterpolatedAttribute(o, a, l, c, u, new R()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = { a, b: l, c, normal: new R(), materialIndex: 0 };
    Jt.getNormal(vr, xr, yr, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class gs extends en {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: r, depthSegments: o };
    const a = this;
    i = Math.floor(i), r = Math.floor(r), o = Math.floor(o);
    const l = [], c = [], h = [], u = [];
    let d = 0, p = 0;
    _("z", "y", "x", -1, -1, n, t, e, o, r, 0), _("z", "y", "x", 1, -1, n, t, -e, o, r, 1), _("x", "z", "y", 1, 1, e, n, t, i, o, 2), _("x", "z", "y", 1, -1, e, n, -t, i, o, 3), _("x", "y", "z", 1, -1, e, t, n, i, r, 4), _("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new dn(c, 3)), this.setAttribute("normal", new dn(h, 3)), this.setAttribute("uv", new dn(u, 2));
    function _(g, m, f, T, E, S, P, w, C, N, M) {
      const y = S / C, I = P / N, q = S / 2, z = P / 2, X = w / 2, J = C + 1, G = N + 1;
      let te = 0, V = 0;
      const oe = new R();
      for (let de = 0; de < G; de++) {
        const Se = de * I - z;
        for (let Be = 0; Be < J; Be++) {
          const st = Be * y - q;
          oe[g] = st * T, oe[m] = Se * E, oe[f] = X, c.push(oe.x, oe.y, oe.z), oe[g] = 0, oe[m] = 0, oe[f] = w > 0 ? 1 : -1, h.push(oe.x, oe.y, oe.z), u.push(Be / C), u.push(1 - de / N), te += 1;
        }
      }
      for (let de = 0; de < N; de++) for (let Se = 0; Se < C; Se++) {
        const Be = d + Se + J * de, st = d + Se + J * (de + 1), Y = d + (Se + 1) + J * (de + 1), ne = d + (Se + 1) + J * de;
        l.push(Be, st, ne), l.push(st, Y, ne), V += 6;
      }
      a.addGroup(p, V, M), p += V, d += te;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new gs(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function us(s3) {
  const e = {};
  for (const t in s3) {
    e[t] = {};
    for (const n in s3[t]) {
      const i = s3[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Lt(s3) {
  const e = {};
  for (let t = 0; t < s3.length; t++) {
    const n = us(s3[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function pf(s3) {
  const e = [];
  for (let t = 0; t < s3.length; t++) e.push(s3[t].clone());
  return e;
}
function Kh(s3) {
  const e = s3.getRenderTarget();
  return e === null ? s3.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : We.workingColorSpace;
}
const Qr = { clone: us, merge: Lt };
var mf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, _f = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class kt extends un {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = mf, this.fragmentShader = _f, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = us(e.uniforms), this.uniformsGroups = pf(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? t.uniforms[i] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[i] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[i] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? t.uniforms[i] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? t.uniforms[i] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? t.uniforms[i] = { type: "m4", value: o.toArray() } : t.uniforms[i] = { value: o };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions) this.extensions[i] === true && (n[i] = true);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class $h extends ct {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Le(), this.projectionMatrix = new Le(), this.projectionMatrixInverse = new Le(), this.coordinateSystem = Nn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Kn = new R(), lc = new pe(), cc = new pe();
class Dt extends $h {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = hs * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Vs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return hs * 2 * Math.atan(Math.tan(Vs * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Kn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Kn.x, Kn.y).multiplyScalar(-e / Kn.z), Kn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Kn.x, Kn.y).multiplyScalar(-e / Kn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, lc, cc), t.subVectors(cc, lc);
  }
  setViewOffset(e, t, n, i, r, o) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Vs * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      r += o.offsetX * i / l, t -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Ui = -90, Ni = 1;
class gf extends ct {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Dt(Ui, Ni, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Dt(Ui, Ni, e, t);
    r.layers = this.layers, this.add(r);
    const o = new Dt(Ui, Ni, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Dt(Ui, Ni, e, t);
    a.layers = this.layers, this.add(a);
    const l = new Dt(Ui, Ni, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Dt(Ui, Ni, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === Nn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === Jr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, o, a, l, c, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = false;
    const g = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, o), e.setRenderTarget(n, 2, i), e.render(t, a), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = g, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, p), e.xr.enabled = _, n.texture.needsPMREMUpdate = true;
  }
}
class Zh extends vt {
  constructor(e, t, n, i, r, o, a, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : rs, super(e, t, n, i, r, o, a, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class vf extends Qt {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Zh(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Wt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, i = new gs(5, 5, 5), r = new kt({ name: "CubemapFromEquirect", uniforms: us(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Rt, blending: On });
    r.uniforms.tEquirect.value = t;
    const o = new tt(i, r), a = t.minFilter;
    return t.minFilter === Un && (t.minFilter = Wt), new gf(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
class Jh extends ct {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Sn(), this.environmentIntensity = 1, this.environmentRotation = new Sn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class Qh {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Ya, this.updateRanges = [], this.version = 0, this.uuid = hn();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, r = this.stride; i < r; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = hn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = hn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const It = new R();
class Js {
  constructor(e, t, n, i = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++) It.fromBufferAttribute(this, t), It.applyMatrix4(e), this.setXYZ(t, It.x, It.y, It.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) It.fromBufferAttribute(this, t), It.applyNormalMatrix(e), this.setXYZ(t, It.x, It.y, It.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) It.fromBufferAttribute(this, t), It.transformDirection(e), this.setXYZ(t, It.x, It.y, It.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = ln(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = et(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = ln(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = et(t, this.array), n = et(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array), r = et(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return new Nt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Js(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
class eu extends un {
  constructor(e) {
    super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new Ee(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let Fi;
const Cs = new R(), Oi = new R(), Bi = new R(), ki = new pe(), Ps = new pe(), tu = new Le(), Er = new R(), Is = new R(), Tr = new R(), hc = new pe(), Vo = new pe(), uc = new pe();
class xf extends ct {
  constructor(e = new eu()) {
    if (super(), this.isSprite = true, this.type = "Sprite", Fi === void 0) {
      Fi = new en();
      const t = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), n = new Qh(t, 5);
      Fi.setIndex([0, 1, 2, 0, 2, 3]), Fi.setAttribute("position", new Js(n, 3, 0, false)), Fi.setAttribute("uv", new Js(n, 2, 3, false));
    }
    this.geometry = Fi, this.material = e, this.center = new pe(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Oi.setFromMatrixScale(this.matrixWorld), tu.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Bi.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === false && Oi.multiplyScalar(-Bi.z);
    const n = this.material.rotation;
    let i, r;
    n !== 0 && (r = Math.cos(n), i = Math.sin(n));
    const o = this.center;
    Ar(Er.set(-0.5, -0.5, 0), Bi, o, Oi, i, r), Ar(Is.set(0.5, -0.5, 0), Bi, o, Oi, i, r), Ar(Tr.set(0.5, 0.5, 0), Bi, o, Oi, i, r), hc.set(0, 0), Vo.set(1, 0), uc.set(1, 1);
    let a = e.ray.intersectTriangle(Er, Is, Tr, false, Cs);
    if (a === null && (Ar(Is.set(-0.5, 0.5, 0), Bi, o, Oi, i, r), Vo.set(0, 1), a = e.ray.intersectTriangle(Er, Tr, Is, false, Cs), a === null)) return;
    const l = e.ray.origin.distanceTo(Cs);
    l < e.near || l > e.far || t.push({ distance: l, point: Cs.clone(), uv: Jt.getInterpolation(Cs, Er, Is, Tr, hc, Vo, uc, new pe()), face: null, object: this });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function Ar(s3, e, t, n, i, r) {
  ki.subVectors(s3, t).addScalar(0.5).multiply(n), i !== void 0 ? (Ps.x = r * ki.x - i * ki.y, Ps.y = i * ki.x + r * ki.y) : Ps.copy(ki), s3.copy(e), s3.x += Ps.x, s3.y += Ps.y, s3.applyMatrix4(tu);
}
const dc = new R(), fc = new Ke(), pc = new Ke(), yf = new R(), mc = new Le(), wr = new R(), Go = new Mn(), _c = new Le(), Wo = new _s();
class Sf extends tt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = Gl, this.bindMatrix = new Le(), this.bindMatrixInverse = new Le(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Hn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, wr), this.boundingBox.expandByPoint(wr);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Mn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, wr), this.boundingSphere.expandByPoint(wr);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Go.copy(this.boundingSphere), Go.applyMatrix4(i), e.ray.intersectsSphere(Go) !== false && (_c.copy(i).invert(), Wo.copy(e.ray).applyMatrix4(_c), !(this.boundingBox !== null && Wo.intersectsBox(this.boundingBox) === false) && this._computeIntersections(e, t, Wo)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Ke(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Gl ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === _d ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    fc.fromBufferAttribute(i.attributes.skinIndex, e), pc.fromBufferAttribute(i.attributes.skinWeight, e), dc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const o = pc.getComponent(r);
      if (o !== 0) {
        const a = fc.getComponent(r);
        mc.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(yf.copy(dc).applyMatrix4(mc), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class nu extends ct {
  constructor() {
    super(), this.isBone = true, this.type = "Bone";
  }
}
class iu extends vt {
  constructor(e = null, t = 1, n = 1, i, r, o, a, l, c = Ut, h = Ut, u, d) {
    super(null, o, a, l, c, h, i, r, u, d), this.isDataTexture = true, this.image = { data: e, width: t, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const gc = new Le(), Mf = new Le();
class vl {
  constructor(e = [], t = []) {
    this.uuid = hn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new Le());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Le();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let r = 0, o = e.length; r < o; r++) {
      const a = e[r] ? e[r].matrixWorld : Mf;
      gc.multiplyMatrices(a, t[r]), gc.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = true);
  }
  clone() {
    return new vl(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new iu(t, e, e, Xt, cn);
    return n.needsUpdate = true, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let o = t[r];
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new nu()), this.bones.push(o), this.boneInverses.push(new Le().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i];
      e.bones.push(o.uuid);
      const a = n[i];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class qa extends Nt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = true, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = true, e;
  }
}
const zi = new Le(), vc = new Le(), Rr = [], xc = new Hn(), bf = new Le(), Ls = new tt(), Ds = new Mn();
class Ef extends tt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new qa(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++) this.setMatrixAt(i, bf);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Hn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, zi), xc.copy(e.boundingBox).applyMatrix4(zi), this.boundingBox.union(xc);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Mn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, zi), Ds.copy(e.boundingSphere).applyMatrix4(zi), this.boundingSphere.union(Ds);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, r = n.length + 1, o = e * r + 1;
    for (let a = 0; a < n.length; a++) n[a] = i[o + a];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (Ls.geometry = this.geometry, Ls.material = this.material, Ls.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ds.copy(this.boundingSphere), Ds.applyMatrix4(n), e.ray.intersectsSphere(Ds) !== false)) for (let r = 0; r < i; r++) {
      this.getMatrixAt(r, zi), vc.multiplyMatrices(n, zi), Ls.matrixWorld = vc, Ls.raycast(e, Rr);
      for (let o = 0, a = Rr.length; o < a; o++) {
        const l = Rr[o];
        l.instanceId = r, l.object = this, t.push(l);
      }
      Rr.length = 0;
    }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new qa(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new iu(new Float32Array(i * this.count), i, this.count, ul, cn));
    const r = this.morphTexture.source.data.data;
    let o = 0;
    for (let c = 0; c < n.length; c++) o += n[c];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - o, l = i * e;
    r[l] = a, r.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
const Xo = new R(), Tf = new R(), Af = new Ue();
class Zn {
  constructor(e = new R(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Xo.subVectors(n, t).cross(Tf.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Xo), i = this.normal.dot(n);
    if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Af.getNormalMatrix(e), i = this.coplanarPoint(Xo).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const di = new Mn(), Cr = new R();
class xl {
  constructor(e = new Zn(), t = new Zn(), n = new Zn(), i = new Zn(), r = new Zn(), o = new Zn()) {
    this.planes = [e, t, n, i, r, o];
  }
  set(e, t, n, i, r, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Nn) {
    const n = this.planes, i = e.elements, r = i[0], o = i[1], a = i[2], l = i[3], c = i[4], h = i[5], u = i[6], d = i[7], p = i[8], _ = i[9], g = i[10], m = i[11], f = i[12], T = i[13], E = i[14], S = i[15];
    if (n[0].setComponents(l - r, d - c, m - p, S - f).normalize(), n[1].setComponents(l + r, d + c, m + p, S + f).normalize(), n[2].setComponents(l + o, d + h, m + _, S + T).normalize(), n[3].setComponents(l - o, d - h, m - _, S - T).normalize(), n[4].setComponents(l - a, d - u, m - g, S - E).normalize(), t === Nn) n[5].setComponents(l + a, d + u, m + g, S + E).normalize();
    else if (t === Jr) n[5].setComponents(a, u, g, E).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(di);
  }
  intersectsSprite(e) {
    return di.center.set(0, 0, 0), di.radius = 0.7071067811865476, di.applyMatrix4(e.matrixWorld), this.intersectsSphere(di);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Cr.x = i.normal.x > 0 ? e.max.x : e.min.x, Cr.y = i.normal.y > 0 ? e.max.y : e.min.y, Cr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Cr) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class su extends un {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Ee(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const eo = new R(), to = new R(), yc = new Le(), Us = new _s(), Pr = new Mn(), Yo = new R(), Sc = new R();
class yl extends ct {
  constructor(e = new en(), t = new su()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++) eo.fromBufferAttribute(t, i - 1), to.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += eo.distanceTo(to);
      e.setAttribute("lineDistance", new dn(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Pr.copy(n.boundingSphere), Pr.applyMatrix4(i), Pr.radius += r, e.ray.intersectsSphere(Pr) === false) return;
    yc.copy(i).invert(), Us.copy(e.ray).applyMatrix4(yc);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
    if (h !== null) {
      const p = Math.max(0, o.start), _ = Math.min(h.count, o.start + o.count);
      for (let g = p, m = _ - 1; g < m; g += c) {
        const f = h.getX(g), T = h.getX(g + 1), E = Ir(this, e, Us, l, f, T);
        E && t.push(E);
      }
      if (this.isLineLoop) {
        const g = h.getX(_ - 1), m = h.getX(p), f = Ir(this, e, Us, l, g, m);
        f && t.push(f);
      }
    } else {
      const p = Math.max(0, o.start), _ = Math.min(d.count, o.start + o.count);
      for (let g = p, m = _ - 1; g < m; g += c) {
        const f = Ir(this, e, Us, l, g, g + 1);
        f && t.push(f);
      }
      if (this.isLineLoop) {
        const g = Ir(this, e, Us, l, _ - 1, p);
        g && t.push(g);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function Ir(s3, e, t, n, i, r) {
  const o = s3.geometry.attributes.position;
  if (eo.fromBufferAttribute(o, i), to.fromBufferAttribute(o, r), t.distanceSqToSegment(eo, to, Yo, Sc) > n) return;
  Yo.applyMatrix4(s3.matrixWorld);
  const l = e.ray.origin.distanceTo(Yo);
  if (!(l < e.near || l > e.far)) return { distance: l, point: Sc.clone().applyMatrix4(s3.matrixWorld), index: i, face: null, faceIndex: null, barycoord: null, object: s3 };
}
const Mc = new R(), bc = new R();
class wf extends yl {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2) Mc.fromBufferAttribute(t, i), bc.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Mc.distanceTo(bc);
      e.setAttribute("lineDistance", new dn(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Rf extends yl {
  constructor(e, t) {
    super(e, t), this.isLineLoop = true, this.type = "LineLoop";
  }
}
class ru extends un {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Ee(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Ec = new Le(), ja = new _s(), Lr = new Mn(), Dr = new R();
class Cf extends ct {
  constructor(e = new en(), t = new ru()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Lr.copy(n.boundingSphere), Lr.applyMatrix4(i), Lr.radius += r, e.ray.intersectsSphere(Lr) === false) return;
    Ec.copy(i).invert(), ja.copy(e.ray).applyMatrix4(Ec);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, o.start), p = Math.min(c.count, o.start + o.count);
      for (let _ = d, g = p; _ < g; _++) {
        const m = c.getX(_);
        Dr.fromBufferAttribute(u, m), Tc(Dr, m, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, o.start), p = Math.min(u.count, o.start + o.count);
      for (let _ = d, g = p; _ < g; _++) Dr.fromBufferAttribute(u, _), Tc(Dr, _, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function Tc(s3, e, t, n, i, r, o) {
  const a = ja.distanceSqToPoint(s3);
  if (a < t) {
    const l = new R();
    ja.closestPointToPoint(s3, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    r.push({ distance: c, distanceToRay: Math.sqrt(a), point: l, index: e, face: null, faceIndex: null, barycoord: null, object: o });
  }
}
class ei extends ct {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
class Pf extends vt {
  constructor(e, t, n, i, r, o, a, l, c) {
    super(e, t, n, i, r, o, a, l, c), this.isCanvasTexture = true, this.needsUpdate = true;
  }
}
class ou extends vt {
  constructor(e, t, n, i, r, o, a, l, c, h = es) {
    if (h !== es && h !== cs) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === es && (n = yi), n === void 0 && h === cs && (n = ls), super(null, i, r, o, a, l, h, n, c), this.isDepthTexture = true, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : Ut, this.minFilter = l !== void 0 ? l : Ut, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class ao extends en {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i };
    const r = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, h = l + 1, u = e / a, d = t / l, p = [], _ = [], g = [], m = [];
    for (let f = 0; f < h; f++) {
      const T = f * d - o;
      for (let E = 0; E < c; E++) {
        const S = E * u - r;
        _.push(S, -T, 0), g.push(0, 0, 1), m.push(E / a), m.push(1 - f / l);
      }
    }
    for (let f = 0; f < l; f++) for (let T = 0; T < a; T++) {
      const E = T + c * f, S = T + c * (f + 1), P = T + 1 + c * (f + 1), w = T + 1 + c * f;
      p.push(E, S, w), p.push(S, P, w);
    }
    this.setIndex(p), this.setAttribute("position", new dn(_, 3)), this.setAttribute("normal", new dn(g, 3)), this.setAttribute("uv", new dn(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ao(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class Qs extends un {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ee(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = zh, this.normalScale = new pe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Sn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Yt extends Qs {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new pe(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return Oe(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(t) {
      this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Ee(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Ee(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ee(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class If extends un {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Sd, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Lf extends un {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
function Ur(s3, e, t) {
  return !s3 || !t && s3.constructor === e ? s3 : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s3) : Array.prototype.slice.call(s3);
}
function Df(s3) {
  return ArrayBuffer.isView(s3) && !(s3 instanceof DataView);
}
function Uf(s3) {
  function e(i, r) {
    return s3[i] - s3[r];
  }
  const t = s3.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Ac(s3, e, t) {
  const n = s3.length, i = new s3.constructor(n);
  for (let r = 0, o = 0; o !== n; ++r) {
    const a = t[r] * e;
    for (let l = 0; l !== e; ++l) i[o++] = s3[a + l];
  }
  return i;
}
function au(s3, e, t, n) {
  let i = 1, r = s3[0];
  for (; r !== void 0 && r[n] === void 0; ) r = s3[i++];
  if (r === void 0) return;
  let o = r[n];
  if (o !== void 0) if (Array.isArray(o)) do
    o = r[n], o !== void 0 && (e.push(r.time), t.push.apply(t, o)), r = s3[i++];
  while (r !== void 0);
  else if (o.toArray !== void 0) do
    o = r[n], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = s3[i++];
  while (r !== void 0);
  else do
    o = r[n], o !== void 0 && (e.push(r.time), t.push(o)), r = s3[i++];
  while (r !== void 0);
}
class nr {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    e: {
      t: {
        let o;
        n: {
          i: if (!(e < i)) {
            for (let a = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === a) break;
              if (r = i, i = t[++n], e < i) break t;
            }
            o = t.length;
            break n;
          }
          if (!(e >= r)) {
            const a = t[1];
            e < a && (n = 2, r = a);
            for (let l = n - 2; ; ) {
              if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = r, r = t[--n - 1], e >= r) break t;
            }
            o = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < o; ) {
          const a = n + o >>> 1;
          e < t[a] ? o = a : n = a + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let o = 0; o !== i; ++o) t[o] = n[r + o];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Nf extends nr {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: qi, endingEnd: qi };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, o = e + 1, a = i[r], l = i[o];
    if (a === void 0) switch (this.getSettings_().endingStart) {
      case ji:
        r = e, a = 2 * t - n;
        break;
      case $r:
        r = i.length - 2, a = t + i[r] - i[r + 1];
        break;
      default:
        r = e, a = n;
    }
    if (l === void 0) switch (this.getSettings_().endingEnd) {
      case ji:
        o = e, l = 2 * n - t;
        break;
      case $r:
        o = 1, l = n + i[1] - i[0];
        break;
      default:
        o = e - 1, l = t;
    }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = o * h;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, p = this._weightNext, _ = (n - t) / (i - t), g = _ * _, m = g * _, f = -d * m + 2 * d * g - d * _, T = (1 + d) * m + (-1.5 - 2 * d) * g + (-0.5 + d) * _ + 1, E = (-1 - p) * m + (1.5 + p) * g + 0.5 * _, S = p * m - p * g;
    for (let P = 0; P !== a; ++P) r[P] = f * o[h + P] + T * o[c + P] + E * o[l + P] + S * o[u + P];
    return r;
  }
}
class lu extends nr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== a; ++d) r[d] = o[c + d] * u + o[l + d] * h;
    return r;
  }
}
class Ff extends nr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class bn {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Ur(t, this.TimeBufferType), this.values = Ur(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = { name: e.name, times: Ur(e.times, Array), values: Ur(e.values, Array) };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Ff(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new lu(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Nf(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Ks:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case $s:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Mo:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
      else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Ks;
      case this.InterpolantFactoryMethodLinear:
        return $s;
      case this.InterpolantFactoryMethodSmooth:
        return Mo;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, i = n.length;
    let r = 0, o = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; o !== -1 && n[o] > t; ) --o;
    if (++o, r !== 0 || o !== i) {
      r >= o && (o = Math.max(o, 1), r = o - 1);
      const a = this.getValueSize();
      this.times = n.slice(r, o), this.values = this.values.slice(r * a, o * a);
    }
    return this;
  }
  validate() {
    let e = true;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = false);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = false);
    let o = null;
    for (let a = 0; a !== r; a++) {
      const l = n[a];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = false;
        break;
      }
      if (o !== null && o > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), e = false;
        break;
      }
      o = l;
    }
    if (i !== void 0 && Df(i)) for (let a = 0, l = i.length; a !== l; ++a) {
      const c = i[a];
      if (isNaN(c)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = false;
        break;
      }
    }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Mo, r = e.length - 1;
    let o = 1;
    for (let a = 1; a < r; ++a) {
      let l = false;
      const c = e[a], h = e[a + 1];
      if (c !== h && (a !== 1 || c !== e[0])) if (i) l = true;
      else {
        const u = a * n, d = u - n, p = u + n;
        for (let _ = 0; _ !== n; ++_) {
          const g = t[u + _];
          if (g !== t[d + _] || g !== t[p + _]) {
            l = true;
            break;
          }
        }
      }
      if (l) {
        if (a !== o) {
          e[o] = e[a];
          const u = a * n, d = o * n;
          for (let p = 0; p !== n; ++p) t[d + p] = t[u + p];
        }
        ++o;
      }
    }
    if (r > 0) {
      e[o] = e[r];
      for (let a = r * n, l = o * n, c = 0; c !== n; ++c) t[l + c] = t[a + c];
      ++o;
    }
    return o !== e.length ? (this.times = e.slice(0, o), this.values = t.slice(0, o * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
bn.prototype.TimeBufferType = Float32Array;
bn.prototype.ValueBufferType = Float32Array;
bn.prototype.DefaultInterpolation = $s;
class vs extends bn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
vs.prototype.ValueTypeName = "bool";
vs.prototype.ValueBufferType = Array;
vs.prototype.DefaultInterpolation = Ks;
vs.prototype.InterpolantFactoryMethodLinear = void 0;
vs.prototype.InterpolantFactoryMethodSmooth = void 0;
class cu extends bn {
}
cu.prototype.ValueTypeName = "color";
class ds extends bn {
}
ds.prototype.ValueTypeName = "number";
class Of extends nr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (i - t);
    let c = e * a;
    for (let h = c + a; c !== h; c += 4) Ct.slerpFlat(r, 0, o, c - a, o, c, l);
    return r;
  }
}
class fs extends bn {
  InterpolantFactoryMethodLinear(e) {
    return new Of(this.times, this.values, this.getValueSize(), e);
  }
}
fs.prototype.ValueTypeName = "quaternion";
fs.prototype.InterpolantFactoryMethodSmooth = void 0;
class xs extends bn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
xs.prototype.ValueTypeName = "string";
xs.prototype.ValueBufferType = Array;
xs.prototype.DefaultInterpolation = Ks;
xs.prototype.InterpolantFactoryMethodLinear = void 0;
xs.prototype.InterpolantFactoryMethodSmooth = void 0;
class ps extends bn {
}
ps.prototype.ValueTypeName = "vector";
class Ka {
  constructor(e = "", t = -1, n = [], i = ml) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = hn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o) t.push(kf(n[o]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode };
    for (let r = 0, o = n.length; r !== o; ++r) t.push(bn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, o = [];
    for (let a = 0; a < r; a++) {
      let l = [], c = [];
      l.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0);
      const h = Uf(l);
      l = Ac(l, 1, h), c = Ac(c, 1, h), !i && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(new ds(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / n));
    }
    return new this(e, -1, o);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], h = c.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(c);
      }
    }
    const o = [];
    for (const a in i) o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
    return o;
  }
  static parseAnimation(e, t) {
    if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, p, _, g) {
      if (p.length !== 0) {
        const m = [], f = [];
        au(p, m, f, _), m.length !== 0 && g.push(new u(d, m, f));
      }
    }, i = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0)) if (d[0].morphTargets) {
        const p = {};
        let _;
        for (_ = 0; _ < d.length; _++) if (d[_].morphTargets) for (let g = 0; g < d[_].morphTargets.length; g++) p[d[_].morphTargets[g]] = -1;
        for (const g in p) {
          const m = [], f = [];
          for (let T = 0; T !== d[_].morphTargets.length; ++T) {
            const E = d[_];
            m.push(E.time), f.push(E.morphTarget === g ? 1 : 0);
          }
          i.push(new ds(".morphTargetInfluence[" + g + "]", m, f));
        }
        l = p.length * o;
      } else {
        const p = ".bones[" + t[u].name + "]";
        n(ps, p + ".position", d, "pos", i), n(fs, p + ".quaternion", d, "rot", i), n(ps, p + ".scale", d, "scl", i);
      }
    }
    return i.length === 0 ? null : new this(r, l, i, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = true;
    for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Bf(s3) {
  switch (s3.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ds;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return ps;
    case "color":
      return cu;
    case "quaternion":
      return fs;
    case "bool":
    case "boolean":
      return vs;
    case "string":
      return xs;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s3);
}
function kf(s3) {
  if (s3.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Bf(s3.type);
  if (s3.times === void 0) {
    const t = [], n = [];
    au(s3.keys, t, n, "value"), s3.times = t, s3.values = n;
  }
  return e.parse !== void 0 ? e.parse(s3) : new e(s3.name, s3.times, s3.values, s3.interpolation);
}
const ti = { enabled: false, files: {}, add: function(s3, e) {
  this.enabled !== false && (this.files[s3] = e);
}, get: function(s3) {
  if (this.enabled !== false) return this.files[s3];
}, remove: function(s3) {
  delete this.files[s3];
}, clear: function() {
  this.files = {};
} };
class zf {
  constructor(e, t, n) {
    const i = this;
    let r = false, o = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      a++, r === false && i.onStart !== void 0 && i.onStart(h, o, a), r = true;
    }, this.itemEnd = function(h) {
      o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (r = false, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = c.length; u < d; u += 2) {
        const p = c[u], _ = c[u + 1];
        if (p.global && (p.lastIndex = 0), p.test(h)) return _;
      }
      return null;
    };
  }
}
const Hf = new zf();
class ys {
  constructor(e) {
    this.manager = e !== void 0 ? e : Hf, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
ys.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Pn = {};
class Vf extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class hu extends ys {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = ti.get(e);
    if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => {
      t && t(r), this.manager.itemEnd(e);
    }, 0), r;
    if (Pn[e] !== void 0) {
      Pn[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    Pn[e] = [], Pn[e].push({ onLoad: t, onProgress: n, onError: i });
    const o = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), a = this.mimeType, l = this.responseType;
    fetch(o).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
        const h = Pn[e], u = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), p = d ? parseInt(d) : 0, _ = p !== 0;
        let g = 0;
        const m = new ReadableStream({ start(f) {
          T();
          function T() {
            u.read().then(({ done: E, value: S }) => {
              if (E) f.close();
              else {
                g += S.byteLength;
                const P = new ProgressEvent("progress", { lengthComputable: _, loaded: g, total: p });
                for (let w = 0, C = h.length; w < C; w++) {
                  const N = h[w];
                  N.onProgress && N.onProgress(P);
                }
                f.enqueue(S), T();
              }
            }, (E) => {
              f.error(E);
            });
          }
        } });
        return new Response(m);
      } else throw new Vf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, a));
        case "json":
          return c.json();
        default:
          if (a === void 0) return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return c.arrayBuffer().then((_) => p.decode(_));
          }
      }
    }).then((c) => {
      ti.add(e, c);
      const h = Pn[e];
      delete Pn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onLoad && p.onLoad(c);
      }
    }).catch((c) => {
      const h = Pn[e];
      if (h === void 0) throw this.manager.itemError(e), c;
      delete Pn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onError && p.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class Gf extends ys {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = ti.get(e);
    if (o !== void 0) return r.manager.itemStart(e), setTimeout(function() {
      t && t(o), r.manager.itemEnd(e);
    }, 0), o;
    const a = Zs("img");
    function l() {
      h(), ti.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      a.removeEventListener("load", l, false), a.removeEventListener("error", c, false);
    }
    return a.addEventListener("load", l, false), a.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a;
  }
}
class Wf extends ys {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new vt(), o = new Gf(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      r.image = a, r.needsUpdate = true, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class lo extends ct {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Ee(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
const qo = new Le(), wc = new R(), Rc = new R();
class Sl {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new pe(512, 512), this.map = null, this.mapPass = null, this.matrix = new Le(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new xl(), this._frameExtents = new pe(1, 1), this._viewportCount = 1, this._viewports = [new Ke(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    wc.setFromMatrixPosition(e.matrixWorld), t.position.copy(wc), Rc.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Rc), t.updateMatrixWorld(), qo.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(qo), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(qo);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
  }
}
class Xf extends Sl {
  constructor() {
    super(new Dt(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = hs * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Ml extends lo {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, o = 2) {
    super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(ct.DEFAULT_UP), this.updateMatrix(), this.target = new ct(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new Xf();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const Cc = new Le(), Ns = new R(), jo = new R();
class Yf extends Sl {
  constructor() {
    super(new Dt(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new pe(4, 2), this._viewportCount = 6, this._viewports = [new Ke(2, 1, 1, 1), new Ke(0, 1, 1, 1), new Ke(3, 1, 1, 1), new Ke(1, 1, 1, 1), new Ke(3, 0, 1, 1), new Ke(1, 0, 1, 1)], this._cubeDirections = [new R(1, 0, 0), new R(-1, 0, 0), new R(0, 0, 1), new R(0, 0, -1), new R(0, 1, 0), new R(0, -1, 0)], this._cubeUps = [new R(0, 1, 0), new R(0, 1, 0), new R(0, 1, 0), new R(0, 1, 0), new R(0, 0, 1), new R(0, 0, -1)];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), Ns.setFromMatrixPosition(e.matrixWorld), n.position.copy(Ns), jo.copy(n.position), jo.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(jo), n.updateMatrixWorld(), i.makeTranslation(-Ns.x, -Ns.y, -Ns.z), Cc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Cc);
  }
}
class co extends lo {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Yf();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class ho extends $h {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, o) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, o = n + e, a = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, o = r + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class qf extends Sl {
  constructor() {
    super(new ho(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class jf extends lo {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(ct.DEFAULT_UP), this.updateMatrix(), this.target = new ct(), this.shadow = new qf();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Kf extends lo {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class Ws {
  static decodeText(e) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u") return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class $f extends ys {
  constructor(e) {
    super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = ti.get(e);
    if (o !== void 0) {
      if (r.manager.itemStart(e), o.then) {
        o.then((c) => {
          t && t(c), r.manager.itemEnd(e);
        }).catch((c) => {
          i && i(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    }
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader;
    const l = fetch(e, a).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return ti.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), ti.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    ti.add(e, l), r.manager.itemStart(e);
  }
}
class Zf extends Dt {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.cameras = e;
  }
}
class uu {
  constructor(e = true) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
  }
  start() {
    this.startTime = Pc(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
  }
  stop() {
    this.getElapsedTime(), this.running = false, this.autoStart = false;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = Pc();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Pc() {
  return performance.now();
}
class Jf {
  constructor(e, t, n) {
    this.binding = e, this.valueSize = n;
    let i, r, o;
    switch (t) {
      case "quaternion":
        i = this._slerp, r = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, r = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, r = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  accumulate(e, t) {
    const n = this.buffer, i = this.valueSize, r = e * i + i;
    let o = this.cumulativeWeight;
    if (o === 0) {
      for (let a = 0; a !== i; ++a) n[r + a] = n[a];
      o = t;
    } else {
      o += t;
      const a = t / o;
      this._mixBufferRegion(n, r, 0, a, i);
    }
    this.cumulativeWeight = o;
  }
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  apply(e) {
    const t = this.valueSize, n = this.buffer, i = e * t + t, r = this.cumulativeWeight, o = this.cumulativeWeightAdditive, a = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
      const l = t * this._origIndex;
      this._mixBufferRegion(n, i, l, 1 - r, t);
    }
    o > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l) if (n[l] !== n[l + t]) {
      a.setValue(n, i);
      break;
    }
  }
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
    e.getValue(t, i);
    for (let r = n, o = i; r !== o; ++r) t[r] = t[i + r % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let n = e; n < t; n++) this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n];
  }
  _select(e, t, n, i, r) {
    if (i >= 0.5) for (let o = 0; o !== r; ++o) e[t + o] = e[n + o];
  }
  _slerp(e, t, n, i) {
    Ct.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, r) {
    const o = this._workIndex * r;
    Ct.multiplyQuaternionsFlat(e, o, e, t, e, n), Ct.slerpFlat(e, t, e, t, e, o, i);
  }
  _lerp(e, t, n, i, r) {
    const o = 1 - i;
    for (let a = 0; a !== r; ++a) {
      const l = t + a;
      e[l] = e[l] * o + e[n + a] * i;
    }
  }
  _lerpAdditive(e, t, n, i, r) {
    for (let o = 0; o !== r; ++o) {
      const a = t + o;
      e[a] = e[a] + e[n + o] * i;
    }
  }
}
const bl = "\\[\\]\\.:\\/", Qf = new RegExp("[" + bl + "]", "g"), El = "[^" + bl + "]", ep = "[^" + bl.replace("\\.", "") + "]", tp = /((?:WC+[\/:])*)/.source.replace("WC", El), np = /(WCOD+)?/.source.replace("WCOD", ep), ip = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", El), sp = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", El), rp = new RegExp("^" + tp + np + ip + sp + "$"), op = ["material", "materials", "bones", "map"];
class ap {
  constructor(e, t, n) {
    const i = n || Je.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
  }
}
class Je {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Je.parseTrackName(t), this.node = Je.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Je.Composite(e, t, n) : new Je(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Qf, "");
  }
  static parseTrackName(e) {
    const t = rp.exec(e);
    if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      op.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function(r) {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          if (a.name === t || a.uuid === t) return a;
          const l = n(a.children);
          if (l) return l;
        }
        return null;
      }, i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = Je.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++) if (e[h].name === c) {
            c = h;
            break;
          }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const o = e[i];
    if (o === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.isMaterial === true ? a = this.Versioning.NeedsUpdate : e.isObject3D === true && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r;
    } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Je.Composite = ap;
Je.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
Je.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
Je.prototype.GetterByBindingType = [Je.prototype._getValue_direct, Je.prototype._getValue_array, Je.prototype._getValue_arrayElement, Je.prototype._getValue_toArray];
Je.prototype.SetterByBindingTypeAndVersioning = [[Je.prototype._setValue_direct, Je.prototype._setValue_direct_setNeedsUpdate, Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Je.prototype._setValue_array, Je.prototype._setValue_array_setNeedsUpdate, Je.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Je.prototype._setValue_arrayElement, Je.prototype._setValue_arrayElement_setNeedsUpdate, Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Je.prototype._setValue_fromArray, Je.prototype._setValue_fromArray_setNeedsUpdate, Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
class lp {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const r = t.tracks, o = r.length, a = new Array(o), l = { endingStart: qi, endingEnd: qi };
    for (let c = 0; c !== o; ++c) {
      const h = r[c].createInterpolant(null);
      a[c] = h, h.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = gd, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = false, this.enabled = true, this.clampWhenFinished = false, this.zeroSlopeAtStart = true, this.zeroSlopeAtEnd = true;
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = false, this.enabled = true, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      const i = this._clip.duration, r = e._clip.duration, o = r / i, a = i / r;
      e.warp(1, o, t), this.warp(a, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer, r = i.time, o = this.timeScale;
    let a = this._timeScaleInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
    const l = a.parameterPositions, c = a.sampleValues;
    return l[0] = r, l[1] = r + n, c[0] = e / o, c[1] = t / o, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const r = this._startTime;
    if (r !== null) {
      const l = (e - r) * n;
      l < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * l);
    }
    t *= this._updateTimeScale(e);
    const o = this._updateTime(t), a = this._updateWeight(e);
    if (a > 0) {
      const l = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case xd:
          for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(o), c[h].accumulateAdditive(a);
          break;
        case ml:
        default:
          for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(o), c[h].accumulate(i, a);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = false));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = true : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let i = this.time + e, r = this._loopCount;
    const o = n === vd;
    if (e === 0) return r === -1 ? i : o && (r & 1) === 1 ? t - i : i;
    if (n === Bh) {
      r === -1 && (this._loopCount = 0, this._setEndings(true, true, false));
      e: {
        if (i >= t) i = t;
        else if (i < 0) i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? this.paused = true : this.enabled = false, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e < 0 ? -1 : 1 });
      }
    } else {
      if (r === -1 && (e >= 0 ? (r = 0, this._setEndings(true, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, true, o)), i >= t || i < 0) {
        const a = Math.floor(i / t);
        i -= t * a, r += Math.abs(a);
        const l = this.repetitions - r;
        if (l <= 0) this.clampWhenFinished ? this.paused = true : this.enabled = false, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e > 0 ? 1 : -1 });
        else {
          if (l === 1) {
            const c = e < 0;
            this._setEndings(c, !c, o);
          } else this._setEndings(false, false, o);
          this._loopCount = r, this.time = i, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: a });
        }
      } else this.time = i;
      if (o && (r & 1) === 1) return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = ji, i.endingEnd = ji) : (e ? i.endingStart = this.zeroSlopeAtStart ? ji : qi : i.endingStart = $r, t ? i.endingEnd = this.zeroSlopeAtEnd ? ji : qi : i.endingEnd = $r);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, r = i.time;
    let o = this._weightInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
    const a = o.parameterPositions, l = o.sampleValues;
    return a[0] = r, l[0] = t, a[1] = r + e, l[1] = n, this;
  }
}
const cp = new Float32Array(1);
class hp extends si {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, r = i.length, o = e._propertyBindings, a = e._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
    let h = c[l];
    h === void 0 && (h = {}, c[l] = h);
    for (let u = 0; u !== r; ++u) {
      const d = i[u], p = d.name;
      let _ = h[p];
      if (_ !== void 0) ++_.referenceCount, o[u] = _;
      else {
        if (_ = o[u], _ !== void 0) {
          _._cacheIndex === null && (++_.referenceCount, this._addInactiveBinding(_, l, p));
          continue;
        }
        const g = t && t._propertyBindings[u].binding.parsedPath;
        _ = new Jf(Je.create(n, p, g), d.ValueTypeName, d.getValueSize()), ++_.referenceCount, this._addInactiveBinding(_, l, p), o[u] = _;
      }
      a[u].resultBuffer = _.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, i = e._clip.uuid, r = this._actionsByClip[i];
        this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const r = t[n];
        r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const r = t[n];
        --r.useCount === 0 && (r.restoreOriginalState(), this._takeBackBinding(r));
      }
      this._takeBackAction(e);
    }
  }
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = { actions: { get total() {
      return e._actions.length;
    }, get inUse() {
      return e._nActiveActions;
    } }, bindings: { get total() {
      return e._bindings.length;
    }, get inUse() {
      return e._nActiveBindings;
    } }, controlInterpolants: { get total() {
      return e._controlInterpolants.length;
    }, get inUse() {
      return e._nActiveControlInterpolants;
    } } };
  }
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions, r = this._actionsByClip;
    let o = r[t];
    if (o === void 0) o = { knownActions: [e], actionByRoot: {} }, e._byClipCacheIndex = 0, r[t] = o;
    else {
      const a = o.knownActions;
      e._byClipCacheIndex = a.length, a.push(e);
    }
    e._cacheIndex = i.length, i.push(e), o.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
    n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
    const r = e._clip.uuid, o = this._actionsByClip, a = o[r], l = a.knownActions, c = l[l.length - 1], h = e._byClipCacheIndex;
    c._byClipCacheIndex = h, l[h] = c, l.pop(), e._byClipCacheIndex = null;
    const u = a.actionByRoot, d = (e._localRoot || this._root).uuid;
    delete u[d], l.length === 0 && delete o[r], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const r = t[n];
      --r.referenceCount === 0 && this._removeInactiveBinding(r);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  }
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName, r = this._bindings;
    let o = i[t];
    o === void 0 && (o = {}, i[t] = o), o[n] = e, e._cacheIndex = r.length, r.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, i = n.rootNode.uuid, r = n.path, o = this._bindingsByRootAndName, a = o[i], l = t[t.length - 1], c = e._cacheIndex;
    l._cacheIndex = c, t[c] = l, t.pop(), delete a[r], Object.keys(a).length === 0 && delete o[i];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  }
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new lu(new Float32Array(2), new Float32Array(2), 1, cp), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, r = t[i];
    e.__cacheIndex = i, t[i] = e, r.__cacheIndex = n, t[n] = r;
  }
  clipAction(e, t, n) {
    const i = t || this._root, r = i.uuid;
    let o = typeof e == "string" ? Ka.findByName(i, e) : e;
    const a = o !== null ? o.uuid : e, l = this._actionsByClip[a];
    let c = null;
    if (n === void 0 && (o !== null ? n = o.blendMode : n = ml), l !== void 0) {
      const u = l.actionByRoot[r];
      if (u !== void 0 && u.blendMode === n) return u;
      c = l.knownActions[0], o === null && (o = c._clip);
    }
    if (o === null) return null;
    const h = new lp(this, o, t, n);
    return this._bindAction(h, c), this._addInactiveAction(h, a, r), h;
  }
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, r = typeof e == "string" ? Ka.findByName(n, e) : e, o = r ? r.uuid : e, a = this._actionsByClip[o];
    return a !== void 0 && a.actionByRoot[i] || null;
  }
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n) e[n].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, i = this.time += e, r = Math.sign(e), o = this._accuIndex ^= 1;
    for (let c = 0; c !== n; ++c) t[c]._update(i, e, r, o);
    const a = this._bindings, l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c) a[c].apply(o);
    return this;
  }
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
    return this.update(e);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e) {
    const t = this._actions, n = e.uuid, i = this._actionsByClip, r = i[n];
    if (r !== void 0) {
      const o = r.knownActions;
      for (let a = 0, l = o.length; a !== l; ++a) {
        const c = o[a];
        this._deactivateAction(c);
        const h = c._cacheIndex, u = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = h, t[h] = u, t.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete i[n];
    }
  }
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const o in n) {
      const a = n[o].actionByRoot, l = a[t];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const i = this._bindingsByRootAndName, r = i[t];
    if (r !== void 0) for (const o in r) {
      const a = r[o];
      a.restoreOriginalState(), this._removeInactiveBinding(a);
    }
  }
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
const Ic = new Le();
class up {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new _s(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new gl(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return Ic.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Ic), this;
  }
  intersectObject(e, t = true, n = []) {
    return $a(e, this, n, t), n.sort(Lc), n;
  }
  intersectObjects(e, t = true, n = []) {
    for (let i = 0, r = e.length; i < r; i++) $a(e[i], this, n, t);
    return n.sort(Lc), n;
  }
}
function Lc(s3, e) {
  return s3.distance - e.distance;
}
function $a(s3, e, t, n) {
  let i = true;
  if (s3.layers.test(e.layers) && s3.raycast(e, t) === false && (i = false), i === true && n === true) {
    const r = s3.children;
    for (let o = 0, a = r.length; o < a; o++) $a(r[o], e, t, true);
  }
}
class Dc {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Oe(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Oe(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class dp extends si {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function Uc(s3, e, t, n) {
  const i = fp(n);
  switch (t) {
    case Lh:
      return s3 * e;
    case Uh:
      return s3 * e;
    case Nh:
      return s3 * e * 2;
    case ul:
      return s3 * e / i.components * i.byteLength;
    case dl:
      return s3 * e / i.components * i.byteLength;
    case Fh:
      return s3 * e * 2 / i.components * i.byteLength;
    case fl:
      return s3 * e * 2 / i.components * i.byteLength;
    case Dh:
      return s3 * e * 3 / i.components * i.byteLength;
    case Xt:
      return s3 * e * 4 / i.components * i.byteLength;
    case pl:
      return s3 * e * 4 / i.components * i.byteLength;
    case Gr:
    case Wr:
      return Math.floor((s3 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Xr:
    case Yr:
      return Math.floor((s3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ya:
    case Ma:
      return Math.max(s3, 16) * Math.max(e, 8) / 4;
    case xa:
    case Sa:
      return Math.max(s3, 8) * Math.max(e, 8) / 2;
    case ba:
    case Ea:
      return Math.floor((s3 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Ta:
      return Math.floor((s3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Aa:
      return Math.floor((s3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case wa:
      return Math.floor((s3 + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Ra:
      return Math.floor((s3 + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Ca:
      return Math.floor((s3 + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Pa:
      return Math.floor((s3 + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Ia:
      return Math.floor((s3 + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case La:
      return Math.floor((s3 + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Da:
      return Math.floor((s3 + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Ua:
      return Math.floor((s3 + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Na:
      return Math.floor((s3 + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Fa:
      return Math.floor((s3 + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Oa:
      return Math.floor((s3 + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Ba:
      return Math.floor((s3 + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case ka:
      return Math.floor((s3 + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case qr:
    case za:
    case Ha:
      return Math.ceil(s3 / 4) * Math.ceil(e / 4) * 16;
    case Oh:
    case Va:
      return Math.ceil(s3 / 4) * Math.ceil(e / 4) * 8;
    case Ga:
    case Wa:
      return Math.ceil(s3 / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function fp(s3) {
  switch (s3) {
    case zn:
    case Ch:
      return { byteLength: 1, components: 1 };
    case js:
    case Ph:
    case yn:
      return { byteLength: 2, components: 1 };
    case cl:
    case hl:
      return { byteLength: 2, components: 4 };
    case yi:
    case ll:
    case cn:
      return { byteLength: 4, components: 1 };
    case Ih:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s3}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: al } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = al);
/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function du() {
  let s3 = null, e = false, t = null, n = null;
  function i(r, o) {
    t(r, o), n = s3.requestAnimationFrame(i);
  }
  return { start: function() {
    e !== true && t !== null && (n = s3.requestAnimationFrame(i), e = true);
  }, stop: function() {
    s3.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(r) {
    t = r;
  }, setContext: function(r) {
    s3 = r;
  } };
}
function pp(s3) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(a, l) {
    const c = a.array, h = a.usage, u = c.byteLength, d = s3.createBuffer();
    s3.bindBuffer(l, d), s3.bufferData(l, c, h), a.onUploadCallback();
    let p;
    if (c instanceof Float32Array) p = s3.FLOAT;
    else if (c instanceof Uint16Array) a.isFloat16BufferAttribute ? p = s3.HALF_FLOAT : p = s3.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) p = s3.SHORT;
    else if (c instanceof Uint32Array) p = s3.UNSIGNED_INT;
    else if (c instanceof Int32Array) p = s3.INT;
    else if (c instanceof Int8Array) p = s3.BYTE;
    else if (c instanceof Uint8Array) p = s3.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) p = s3.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: d, type: p, bytesPerElement: c.BYTES_PER_ELEMENT, version: a.version, size: u };
  }
  function n(a, l, c) {
    const h = l.array, u = l.updateRanges;
    if (s3.bindBuffer(c, a), u.length === 0) s3.bufferSubData(c, 0, h);
    else {
      u.sort((p, _) => p.start - _.start);
      let d = 0;
      for (let p = 1; p < u.length; p++) {
        const _ = u[d], g = u[p];
        g.start <= _.start + _.count + 1 ? _.count = Math.max(_.count, g.start + g.count - _.start) : (++d, u[d] = g);
      }
      u.length = d + 1;
      for (let p = 0, _ = u.length; p < _; p++) {
        const g = u[p];
        s3.bufferSubData(c, g.start * h.BYTES_PER_ELEMENT, h, g.start, g.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function i(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), e.get(a);
  }
  function r(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const l = e.get(a);
    l && (s3.deleteBuffer(l.buffer), e.delete(a));
  }
  function o(a, l) {
    if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
      const h = e.get(a);
      (!h || h.version < a.version) && e.set(a, { buffer: a.buffer, type: a.type, bytesPerElement: a.elementSize, version: a.version });
      return;
    }
    const c = e.get(a);
    if (c === void 0) e.set(a, t(a, l));
    else if (c.version < a.version) {
      if (c.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, a, l), c.version = a.version;
    }
  }
  return { get: i, remove: r, update: o };
}
var mp = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, _p = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, gp = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, vp = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, xp = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, yp = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Sp = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Mp = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, bp = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Ep = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Tp = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Ap = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, wp = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Rp = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Cp = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Pp = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Ip = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Lp = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Dp = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Up = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Np = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Fp = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Op = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Bp = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, kp = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, zp = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Hp = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Vp = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Gp = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Wp = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Xp = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Yp = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, qp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, jp = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Kp = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, $p = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Zp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Jp = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Qp = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, em = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, tm = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, nm = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, im = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, sm = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, rm = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, om = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, am = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, lm = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, cm = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, hm = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, um = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, dm = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, fm = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, pm = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, mm = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, _m = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, gm = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, vm = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, xm = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ym = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Sm = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Mm = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, bm = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Em = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Tm = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Am = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, wm = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Rm = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Cm = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Pm = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Im = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Lm = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Dm = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Um = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Nm = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Fm = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Om = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Bm = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, km = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, zm = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Hm = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Vm = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Gm = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Wm = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Xm = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Ym = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, qm = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, jm = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Km = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, $m = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Zm = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Jm = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Qm = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, e_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, t_ = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, n_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, i_ = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, s_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, r_ = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, o_ = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, a_ = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, l_ = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, c_ = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, h_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, u_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, d_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, f_ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const p_ = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, m_ = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, __ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, g_ = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, v_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, x_ = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, y_ = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, S_ = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, M_ = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, b_ = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, E_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, T_ = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, A_ = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, w_ = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, R_ = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, C_ = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, P_ = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, I_ = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, L_ = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, D_ = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, U_ = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, N_ = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, F_ = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, O_ = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, B_ = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, k_ = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, z_ = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, H_ = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, V_ = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, G_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, W_ = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, X_ = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Y_ = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, q_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Fe = { alphahash_fragment: mp, alphahash_pars_fragment: _p, alphamap_fragment: gp, alphamap_pars_fragment: vp, alphatest_fragment: xp, alphatest_pars_fragment: yp, aomap_fragment: Sp, aomap_pars_fragment: Mp, batching_pars_vertex: bp, batching_vertex: Ep, begin_vertex: Tp, beginnormal_vertex: Ap, bsdfs: wp, iridescence_fragment: Rp, bumpmap_pars_fragment: Cp, clipping_planes_fragment: Pp, clipping_planes_pars_fragment: Ip, clipping_planes_pars_vertex: Lp, clipping_planes_vertex: Dp, color_fragment: Up, color_pars_fragment: Np, color_pars_vertex: Fp, color_vertex: Op, common: Bp, cube_uv_reflection_fragment: kp, defaultnormal_vertex: zp, displacementmap_pars_vertex: Hp, displacementmap_vertex: Vp, emissivemap_fragment: Gp, emissivemap_pars_fragment: Wp, colorspace_fragment: Xp, colorspace_pars_fragment: Yp, envmap_fragment: qp, envmap_common_pars_fragment: jp, envmap_pars_fragment: Kp, envmap_pars_vertex: $p, envmap_physical_pars_fragment: am, envmap_vertex: Zp, fog_vertex: Jp, fog_pars_vertex: Qp, fog_fragment: em, fog_pars_fragment: tm, gradientmap_pars_fragment: nm, lightmap_pars_fragment: im, lights_lambert_fragment: sm, lights_lambert_pars_fragment: rm, lights_pars_begin: om, lights_toon_fragment: lm, lights_toon_pars_fragment: cm, lights_phong_fragment: hm, lights_phong_pars_fragment: um, lights_physical_fragment: dm, lights_physical_pars_fragment: fm, lights_fragment_begin: pm, lights_fragment_maps: mm, lights_fragment_end: _m, logdepthbuf_fragment: gm, logdepthbuf_pars_fragment: vm, logdepthbuf_pars_vertex: xm, logdepthbuf_vertex: ym, map_fragment: Sm, map_pars_fragment: Mm, map_particle_fragment: bm, map_particle_pars_fragment: Em, metalnessmap_fragment: Tm, metalnessmap_pars_fragment: Am, morphinstance_vertex: wm, morphcolor_vertex: Rm, morphnormal_vertex: Cm, morphtarget_pars_vertex: Pm, morphtarget_vertex: Im, normal_fragment_begin: Lm, normal_fragment_maps: Dm, normal_pars_fragment: Um, normal_pars_vertex: Nm, normal_vertex: Fm, normalmap_pars_fragment: Om, clearcoat_normal_fragment_begin: Bm, clearcoat_normal_fragment_maps: km, clearcoat_pars_fragment: zm, iridescence_pars_fragment: Hm, opaque_fragment: Vm, packing: Gm, premultiplied_alpha_fragment: Wm, project_vertex: Xm, dithering_fragment: Ym, dithering_pars_fragment: qm, roughnessmap_fragment: jm, roughnessmap_pars_fragment: Km, shadowmap_pars_fragment: $m, shadowmap_pars_vertex: Zm, shadowmap_vertex: Jm, shadowmask_pars_fragment: Qm, skinbase_vertex: e_, skinning_pars_vertex: t_, skinning_vertex: n_, skinnormal_vertex: i_, specularmap_fragment: s_, specularmap_pars_fragment: r_, tonemapping_fragment: o_, tonemapping_pars_fragment: a_, transmission_fragment: l_, transmission_pars_fragment: c_, uv_pars_fragment: h_, uv_pars_vertex: u_, uv_vertex: d_, worldpos_vertex: f_, background_vert: p_, background_frag: m_, backgroundCube_vert: __, backgroundCube_frag: g_, cube_vert: v_, cube_frag: x_, depth_vert: y_, depth_frag: S_, distanceRGBA_vert: M_, distanceRGBA_frag: b_, equirect_vert: E_, equirect_frag: T_, linedashed_vert: A_, linedashed_frag: w_, meshbasic_vert: R_, meshbasic_frag: C_, meshlambert_vert: P_, meshlambert_frag: I_, meshmatcap_vert: L_, meshmatcap_frag: D_, meshnormal_vert: U_, meshnormal_frag: N_, meshphong_vert: F_, meshphong_frag: O_, meshphysical_vert: B_, meshphysical_frag: k_, meshtoon_vert: z_, meshtoon_frag: H_, points_vert: V_, points_frag: G_, shadow_vert: W_, shadow_frag: X_, sprite_vert: Y_, sprite_frag: q_ }, ie = { common: { diffuse: { value: new Ee(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ue() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ue() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ue() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ue() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ue() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ue() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ue() }, normalScale: { value: new pe(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ue() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ue() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ue() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ue() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Ee(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Ee(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue() }, alphaTest: { value: 0 }, uvTransform: { value: new Ue() } }, sprite: { diffuse: { value: new Ee(16777215) }, opacity: { value: 1 }, center: { value: new pe(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ue() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue() }, alphaTest: { value: 0 } } }, gn = { basic: { uniforms: Lt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.fog]), vertexShader: Fe.meshbasic_vert, fragmentShader: Fe.meshbasic_frag }, lambert: { uniforms: Lt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, { emissive: { value: new Ee(0) } }]), vertexShader: Fe.meshlambert_vert, fragmentShader: Fe.meshlambert_frag }, phong: { uniforms: Lt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, { emissive: { value: new Ee(0) }, specular: { value: new Ee(1118481) }, shininess: { value: 30 } }]), vertexShader: Fe.meshphong_vert, fragmentShader: Fe.meshphong_frag }, standard: { uniforms: Lt([ie.common, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.roughnessmap, ie.metalnessmap, ie.fog, ie.lights, { emissive: { value: new Ee(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Fe.meshphysical_vert, fragmentShader: Fe.meshphysical_frag }, toon: { uniforms: Lt([ie.common, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.gradientmap, ie.fog, ie.lights, { emissive: { value: new Ee(0) } }]), vertexShader: Fe.meshtoon_vert, fragmentShader: Fe.meshtoon_frag }, matcap: { uniforms: Lt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, { matcap: { value: null } }]), vertexShader: Fe.meshmatcap_vert, fragmentShader: Fe.meshmatcap_frag }, points: { uniforms: Lt([ie.points, ie.fog]), vertexShader: Fe.points_vert, fragmentShader: Fe.points_frag }, dashed: { uniforms: Lt([ie.common, ie.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Fe.linedashed_vert, fragmentShader: Fe.linedashed_frag }, depth: { uniforms: Lt([ie.common, ie.displacementmap]), vertexShader: Fe.depth_vert, fragmentShader: Fe.depth_frag }, normal: { uniforms: Lt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, { opacity: { value: 1 } }]), vertexShader: Fe.meshnormal_vert, fragmentShader: Fe.meshnormal_frag }, sprite: { uniforms: Lt([ie.sprite, ie.fog]), vertexShader: Fe.sprite_vert, fragmentShader: Fe.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ue() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Fe.background_vert, fragmentShader: Fe.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ue() } }, vertexShader: Fe.backgroundCube_vert, fragmentShader: Fe.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Fe.cube_vert, fragmentShader: Fe.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Fe.equirect_vert, fragmentShader: Fe.equirect_frag }, distanceRGBA: { uniforms: Lt([ie.common, ie.displacementmap, { referencePosition: { value: new R() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Fe.distanceRGBA_vert, fragmentShader: Fe.distanceRGBA_frag }, shadow: { uniforms: Lt([ie.lights, ie.fog, { color: { value: new Ee(0) }, opacity: { value: 1 } }]), vertexShader: Fe.shadow_vert, fragmentShader: Fe.shadow_frag } };
gn.physical = { uniforms: Lt([gn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ue() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ue() }, clearcoatNormalScale: { value: new pe(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ue() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ue() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ue() }, sheen: { value: 0 }, sheenColor: { value: new Ee(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ue() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ue() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ue() }, transmissionSamplerSize: { value: new pe() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ue() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Ee(0) }, specularColor: { value: new Ee(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ue() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ue() }, anisotropyVector: { value: new pe() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ue() } }]), vertexShader: Fe.meshphysical_vert, fragmentShader: Fe.meshphysical_frag };
const Nr = { r: 0, b: 0, g: 0 }, fi = new Sn(), j_ = new Le();
function K_(s3, e, t, n, i, r, o) {
  const a = new Ee(0);
  let l = r === true ? 0 : 1, c, h, u = null, d = 0, p = null;
  function _(E) {
    let S = E.isScene === true ? E.background : null;
    return S && S.isTexture && (S = (E.backgroundBlurriness > 0 ? t : e).get(S)), S;
  }
  function g(E) {
    let S = false;
    const P = _(E);
    P === null ? f(a, l) : P && P.isColor && (f(P, 1), S = true);
    const w = s3.xr.getEnvironmentBlendMode();
    w === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : w === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (s3.autoClear || S) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), s3.clear(s3.autoClearColor, s3.autoClearDepth, s3.autoClearStencil));
  }
  function m(E, S) {
    const P = _(S);
    P && (P.isCubeTexture || P.mapping === oo) ? (h === void 0 && (h = new tt(new gs(1, 1, 1), new kt({ name: "BackgroundCubeMaterial", uniforms: us(gn.backgroundCube.uniforms), vertexShader: gn.backgroundCube.vertexShader, fragmentShader: gn.backgroundCube.fragmentShader, side: Rt, depthTest: false, depthWrite: false, fog: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(w, C, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(h)), fi.copy(S.backgroundRotation), fi.x *= -1, fi.y *= -1, fi.z *= -1, P.isCubeTexture && P.isRenderTargetTexture === false && (fi.y *= -1, fi.z *= -1), h.material.uniforms.envMap.value = P, h.material.uniforms.flipEnvMap.value = P.isCubeTexture && P.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(fi)), h.material.toneMapped = We.getTransfer(P.colorSpace) !== nt, (u !== P || d !== P.version || p !== s3.toneMapping) && (h.material.needsUpdate = true, u = P, d = P.version, p = s3.toneMapping), h.layers.enableAll(), E.unshift(h, h.geometry, h.material, 0, 0, null)) : P && P.isTexture && (c === void 0 && (c = new tt(new ao(2, 2), new kt({ name: "BackgroundMaterial", uniforms: us(gn.background.uniforms), vertexShader: gn.background.vertexShader, fragmentShader: gn.background.fragmentShader, side: kn, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(c)), c.material.uniforms.t2D.value = P, c.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, c.material.toneMapped = We.getTransfer(P.colorSpace) !== nt, P.matrixAutoUpdate === true && P.updateMatrix(), c.material.uniforms.uvTransform.value.copy(P.matrix), (u !== P || d !== P.version || p !== s3.toneMapping) && (c.material.needsUpdate = true, u = P, d = P.version, p = s3.toneMapping), c.layers.enableAll(), E.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function f(E, S) {
    E.getRGB(Nr, Kh(s3)), n.buffers.color.setClear(Nr.r, Nr.g, Nr.b, S, o);
  }
  function T() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose()), c !== void 0 && (c.geometry.dispose(), c.material.dispose());
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(E, S = 1) {
    a.set(E), l = S, f(a, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(E) {
    l = E, f(a, l);
  }, render: g, addToRenderList: m, dispose: T };
}
function $_(s3, e) {
  const t = s3.getParameter(s3.MAX_VERTEX_ATTRIBS), n = {}, i = d(null);
  let r = i, o = false;
  function a(y, I, q, z, X) {
    let J = false;
    const G = u(z, q, I);
    r !== G && (r = G, c(r.object)), J = p(y, z, q, X), J && _(y, z, q, X), X !== null && e.update(X, s3.ELEMENT_ARRAY_BUFFER), (J || o) && (o = false, S(y, I, q, z), X !== null && s3.bindBuffer(s3.ELEMENT_ARRAY_BUFFER, e.get(X).buffer));
  }
  function l() {
    return s3.createVertexArray();
  }
  function c(y) {
    return s3.bindVertexArray(y);
  }
  function h(y) {
    return s3.deleteVertexArray(y);
  }
  function u(y, I, q) {
    const z = q.wireframe === true;
    let X = n[y.id];
    X === void 0 && (X = {}, n[y.id] = X);
    let J = X[I.id];
    J === void 0 && (J = {}, X[I.id] = J);
    let G = J[z];
    return G === void 0 && (G = d(l()), J[z] = G), G;
  }
  function d(y) {
    const I = [], q = [], z = [];
    for (let X = 0; X < t; X++) I[X] = 0, q[X] = 0, z[X] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: I, enabledAttributes: q, attributeDivisors: z, object: y, attributes: {}, index: null };
  }
  function p(y, I, q, z) {
    const X = r.attributes, J = I.attributes;
    let G = 0;
    const te = q.getAttributes();
    for (const V in te) if (te[V].location >= 0) {
      const de = X[V];
      let Se = J[V];
      if (Se === void 0 && (V === "instanceMatrix" && y.instanceMatrix && (Se = y.instanceMatrix), V === "instanceColor" && y.instanceColor && (Se = y.instanceColor)), de === void 0 || de.attribute !== Se || Se && de.data !== Se.data) return true;
      G++;
    }
    return r.attributesNum !== G || r.index !== z;
  }
  function _(y, I, q, z) {
    const X = {}, J = I.attributes;
    let G = 0;
    const te = q.getAttributes();
    for (const V in te) if (te[V].location >= 0) {
      let de = J[V];
      de === void 0 && (V === "instanceMatrix" && y.instanceMatrix && (de = y.instanceMatrix), V === "instanceColor" && y.instanceColor && (de = y.instanceColor));
      const Se = {};
      Se.attribute = de, de && de.data && (Se.data = de.data), X[V] = Se, G++;
    }
    r.attributes = X, r.attributesNum = G, r.index = z;
  }
  function g() {
    const y = r.newAttributes;
    for (let I = 0, q = y.length; I < q; I++) y[I] = 0;
  }
  function m(y) {
    f(y, 0);
  }
  function f(y, I) {
    const q = r.newAttributes, z = r.enabledAttributes, X = r.attributeDivisors;
    q[y] = 1, z[y] === 0 && (s3.enableVertexAttribArray(y), z[y] = 1), X[y] !== I && (s3.vertexAttribDivisor(y, I), X[y] = I);
  }
  function T() {
    const y = r.newAttributes, I = r.enabledAttributes;
    for (let q = 0, z = I.length; q < z; q++) I[q] !== y[q] && (s3.disableVertexAttribArray(q), I[q] = 0);
  }
  function E(y, I, q, z, X, J, G) {
    G === true ? s3.vertexAttribIPointer(y, I, q, X, J) : s3.vertexAttribPointer(y, I, q, z, X, J);
  }
  function S(y, I, q, z) {
    g();
    const X = z.attributes, J = q.getAttributes(), G = I.defaultAttributeValues;
    for (const te in J) {
      const V = J[te];
      if (V.location >= 0) {
        let oe = X[te];
        if (oe === void 0 && (te === "instanceMatrix" && y.instanceMatrix && (oe = y.instanceMatrix), te === "instanceColor" && y.instanceColor && (oe = y.instanceColor)), oe !== void 0) {
          const de = oe.normalized, Se = oe.itemSize, Be = e.get(oe);
          if (Be === void 0) continue;
          const st = Be.buffer, Y = Be.type, ne = Be.bytesPerElement, ve = Y === s3.INT || Y === s3.UNSIGNED_INT || oe.gpuType === ll;
          if (oe.isInterleavedBufferAttribute) {
            const ae = oe.data, we = ae.stride, Pe = oe.offset;
            if (ae.isInstancedInterleavedBuffer) {
              for (let ke = 0; ke < V.locationSize; ke++) f(V.location + ke, ae.meshPerAttribute);
              y.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else for (let ke = 0; ke < V.locationSize; ke++) m(V.location + ke);
            s3.bindBuffer(s3.ARRAY_BUFFER, st);
            for (let ke = 0; ke < V.locationSize; ke++) E(V.location + ke, Se / V.locationSize, Y, de, we * ne, (Pe + Se / V.locationSize * ke) * ne, ve);
          } else {
            if (oe.isInstancedBufferAttribute) {
              for (let ae = 0; ae < V.locationSize; ae++) f(V.location + ae, oe.meshPerAttribute);
              y.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else for (let ae = 0; ae < V.locationSize; ae++) m(V.location + ae);
            s3.bindBuffer(s3.ARRAY_BUFFER, st);
            for (let ae = 0; ae < V.locationSize; ae++) E(V.location + ae, Se / V.locationSize, Y, de, Se * ne, Se / V.locationSize * ae * ne, ve);
          }
        } else if (G !== void 0) {
          const de = G[te];
          if (de !== void 0) switch (de.length) {
            case 2:
              s3.vertexAttrib2fv(V.location, de);
              break;
            case 3:
              s3.vertexAttrib3fv(V.location, de);
              break;
            case 4:
              s3.vertexAttrib4fv(V.location, de);
              break;
            default:
              s3.vertexAttrib1fv(V.location, de);
          }
        }
      }
    }
    T();
  }
  function P() {
    N();
    for (const y in n) {
      const I = n[y];
      for (const q in I) {
        const z = I[q];
        for (const X in z) h(z[X].object), delete z[X];
        delete I[q];
      }
      delete n[y];
    }
  }
  function w(y) {
    if (n[y.id] === void 0) return;
    const I = n[y.id];
    for (const q in I) {
      const z = I[q];
      for (const X in z) h(z[X].object), delete z[X];
      delete I[q];
    }
    delete n[y.id];
  }
  function C(y) {
    for (const I in n) {
      const q = n[I];
      if (q[y.id] === void 0) continue;
      const z = q[y.id];
      for (const X in z) h(z[X].object), delete z[X];
      delete q[y.id];
    }
  }
  function N() {
    M(), o = true, r !== i && (r = i, c(r.object));
  }
  function M() {
    i.geometry = null, i.program = null, i.wireframe = false;
  }
  return { setup: a, reset: N, resetDefaultState: M, dispose: P, releaseStatesOfGeometry: w, releaseStatesOfProgram: C, initAttributes: g, enableAttribute: m, disableUnusedAttributes: T };
}
function Z_(s3, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function r(c, h) {
    s3.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function o(c, h, u) {
    u !== 0 && (s3.drawArraysInstanced(n, c, h, u), t.update(h, n, u));
  }
  function a(c, h, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let p = 0;
    for (let _ = 0; _ < u; _++) p += h[_];
    t.update(p, n, 1);
  }
  function l(c, h, u, d) {
    if (u === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let _ = 0; _ < c.length; _++) o(c[_], h[_], d[_]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, u);
      let _ = 0;
      for (let g = 0; g < u; g++) _ += h[g] * d[g];
      t.update(_, n, 1);
    }
  }
  this.setMode = i, this.render = r, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
}
function J_(s3, e, t, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const C = e.get("EXT_texture_filter_anisotropic");
      i = s3.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function o(C) {
    return !(C !== Xt && n.convert(C) !== s3.getParameter(s3.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(C) {
    const N = C === yn && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(C !== zn && n.convert(C) !== s3.getParameter(s3.IMPLEMENTATION_COLOR_READ_TYPE) && C !== cn && !N);
  }
  function l(C) {
    if (C === "highp") {
      if (s3.getShaderPrecisionFormat(s3.VERTEX_SHADER, s3.HIGH_FLOAT).precision > 0 && s3.getShaderPrecisionFormat(s3.FRAGMENT_SHADER, s3.HIGH_FLOAT).precision > 0) return "highp";
      C = "mediump";
    }
    return C === "mediump" && s3.getShaderPrecisionFormat(s3.VERTEX_SHADER, s3.MEDIUM_FLOAT).precision > 0 && s3.getShaderPrecisionFormat(s3.FRAGMENT_SHADER, s3.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = t.logarithmicDepthBuffer === true, d = t.reverseDepthBuffer === true && e.has("EXT_clip_control"), p = s3.getParameter(s3.MAX_TEXTURE_IMAGE_UNITS), _ = s3.getParameter(s3.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = s3.getParameter(s3.MAX_TEXTURE_SIZE), m = s3.getParameter(s3.MAX_CUBE_MAP_TEXTURE_SIZE), f = s3.getParameter(s3.MAX_VERTEX_ATTRIBS), T = s3.getParameter(s3.MAX_VERTEX_UNIFORM_VECTORS), E = s3.getParameter(s3.MAX_VARYING_VECTORS), S = s3.getParameter(s3.MAX_FRAGMENT_UNIFORM_VECTORS), P = _ > 0, w = s3.getParameter(s3.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: o, textureTypeReadable: a, precision: c, logarithmicDepthBuffer: u, reverseDepthBuffer: d, maxTextures: p, maxVertexTextures: _, maxTextureSize: g, maxCubemapSize: m, maxAttributes: f, maxVertexUniforms: T, maxVaryings: E, maxFragmentUniforms: S, vertexTextures: P, maxSamples: w };
}
function Q_(s3) {
  const e = this;
  let t = null, n = 0, i = false, r = false;
  const o = new Zn(), a = new Ue(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const p = u.length !== 0 || d || n !== 0 || i;
    return i = d, n = u.length, p;
  }, this.beginShadows = function() {
    r = true, h(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, p) {
    const _ = u.clippingPlanes, g = u.clipIntersection, m = u.clipShadows, f = s3.get(u);
    if (!i || _ === null || _.length === 0 || r && !m) r ? h(null) : c();
    else {
      const T = r ? 0 : n, E = T * 4;
      let S = f.clippingState || null;
      l.value = S, S = h(_, d, E, p);
      for (let P = 0; P !== E; ++P) S[P] = t[P];
      f.clippingState = S, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, p, _) {
    const g = u !== null ? u.length : 0;
    let m = null;
    if (g !== 0) {
      if (m = l.value, _ !== true || m === null) {
        const f = p + g * 4, T = d.matrixWorldInverse;
        a.getNormalMatrix(T), (m === null || m.length < f) && (m = new Float32Array(f));
        for (let E = 0, S = p; E !== g; ++E, S += 4) o.copy(u[E]).applyMatrix4(T, a), o.normal.toArray(m, S), m[S + 3] = o.constant;
      }
      l.value = m, l.needsUpdate = true;
    }
    return e.numPlanes = g, e.numIntersection = 0, m;
  }
}
function eg(s3) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === ga ? o.mapping = rs : a === va && (o.mapping = os), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === ga || a === va) if (e.has(o)) {
        const l = e.get(o).texture;
        return t(l, o.mapping);
      } else {
        const l = o.image;
        if (l && l.height > 0) {
          const c = new vf(l.height);
          return c.fromEquirectangularTexture(s3, o), e.set(o, c), o.addEventListener("dispose", i), t(c.texture, o.mapping);
        } else return null;
      }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
const Ki = 4, Nc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], vi = 20, Ko = new ho(), Fc = new Ee();
let $o = null, Zo = 0, Jo = 0, Qo = false;
const _i = (1 + Math.sqrt(5)) / 2, Hi = 1 / _i, Oc = [new R(-_i, Hi, 0), new R(_i, Hi, 0), new R(-Hi, 0, _i), new R(Hi, 0, _i), new R(0, _i, -Hi), new R(0, _i, Hi), new R(-1, 1, -1), new R(1, 1, -1), new R(-1, 1, 1), new R(1, 1, 1)];
class Za {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    $o = this._renderer.getRenderTarget(), Zo = this._renderer.getActiveCubeFace(), Jo = this._renderer.getActiveMipmapLevel(), Qo = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = true, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = zc(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = kc(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget($o, Zo, Jo), this._renderer.xr.enabled = Qo, e.scissorTest = false, Fr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === rs || e.mapping === os ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), $o = this._renderer.getRenderTarget(), Zo = this._renderer.getActiveCubeFace(), Jo = this._renderer.getActiveMipmapLevel(), Qo = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: Wt, minFilter: Wt, generateMipmaps: false, type: yn, format: Xt, colorSpace: Ft, depthBuffer: false }, i = Bc(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Bc(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = tg(r)), this._blurMaterial = ng(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new tt(this._lodPlanes[0], e);
    this._renderer.compile(t, Ko);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Dt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(Fc), h.toneMapping = ni, h.autoClear = false;
    const p = new Fn({ name: "PMREM.Background", side: Rt, depthWrite: false, depthTest: false }), _ = new tt(new gs(), p);
    let g = false;
    const m = e.background;
    m ? m.isColor && (p.color.copy(m), e.background = null, g = true) : (p.color.copy(Fc), g = true);
    for (let f = 0; f < 6; f++) {
      const T = f % 3;
      T === 0 ? (a.up.set(0, l[f], 0), a.lookAt(c[f], 0, 0)) : T === 1 ? (a.up.set(0, 0, l[f]), a.lookAt(0, c[f], 0)) : (a.up.set(0, l[f], 0), a.lookAt(0, 0, c[f]));
      const E = this._cubeSize;
      Fr(i, T * E, f > 2 ? E : 0, E, E), h.setRenderTarget(i), g && h.render(_, a), h.render(e, a);
    }
    _.geometry.dispose(), _.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === rs || e.mapping === os;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = zc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = kc());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new tt(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Fr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, Ko);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const o = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), a = Oc[(i - r - 1) % Oc.length];
      this._blur(e, r - 1, r, o, a);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, i, "latitudinal", r), this._halfBlur(o, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = new tt(this._lodPlanes[i], c), d = c.uniforms, p = this._sizeLods[n] - 1, _ = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * vi - 1), g = r / _, m = isFinite(r) ? 1 + Math.floor(h * g) : vi;
    m > vi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);
    const f = [];
    let T = 0;
    for (let C = 0; C < vi; ++C) {
      const N = C / g, M = Math.exp(-N * N / 2);
      f.push(M), C === 0 ? T += M : C < m && (T += 2 * M);
    }
    for (let C = 0; C < f.length; C++) f[C] = f[C] / T;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = f, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: E } = this;
    d.dTheta.value = _, d.mipInt.value = E - n;
    const S = this._sizeLods[i], P = 3 * S * (i > E - Ki ? i - E + Ki : 0), w = 4 * (this._cubeSize - S);
    Fr(t, P, w, 3 * S, 2 * S), l.setRenderTarget(t), l.render(u, Ko);
  }
}
function tg(s3) {
  const e = [], t = [], n = [];
  let i = s3;
  const r = s3 - Ki + 1 + Nc.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let l = 1 / a;
    o > s3 - Ki ? l = Nc[o - s3 + Ki - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], p = 6, _ = 6, g = 3, m = 2, f = 1, T = new Float32Array(g * _ * p), E = new Float32Array(m * _ * p), S = new Float32Array(f * _ * p);
    for (let w = 0; w < p; w++) {
      const C = w % 3 * 2 / 3 - 1, N = w > 2 ? 0 : -1, M = [C, N, 0, C + 2 / 3, N, 0, C + 2 / 3, N + 1, 0, C, N, 0, C + 2 / 3, N + 1, 0, C, N + 1, 0];
      T.set(M, g * _ * w), E.set(d, m * _ * w);
      const y = [w, w, w, w, w, w];
      S.set(y, f * _ * w);
    }
    const P = new en();
    P.setAttribute("position", new Nt(T, g)), P.setAttribute("uv", new Nt(E, m)), P.setAttribute("faceIndex", new Nt(S, f)), e.push(P), i > Ki && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Bc(s3, e, t) {
  const n = new Qt(s3, e, t);
  return n.texture.mapping = oo, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function Fr(s3, e, t, n, i) {
  s3.viewport.set(e, t, n, i), s3.scissor.set(e, t, n, i);
}
function ng(s3, e, t) {
  const n = new Float32Array(vi), i = new R(0, 1, 0);
  return new kt({ name: "SphericalGaussianBlur", defines: { n: vi, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${s3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: Tl(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: On, depthTest: false, depthWrite: false });
}
function kc() {
  return new kt({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Tl(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: On, depthTest: false, depthWrite: false });
}
function zc() {
  return new kt({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Tl(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: On, depthTest: false, depthWrite: false });
}
function Tl() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function ig(s3) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === ga || l === va, h = l === rs || l === os;
      if (c || h) {
        let u = e.get(a);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== d) return t === null && (t = new Za(s3)), u = c ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const p = a.image;
          return c && p && p.height > 0 || h && p && i(p) ? (t === null && (t = new Za(s3)), u = c ? t.fromEquirectangular(a) : t.fromCubemap(a), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), a.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return a;
  }
  function i(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) a[h] !== void 0 && l++;
    return l === c;
  }
  function r(a) {
    const l = a.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: n, dispose: o };
}
function sg(s3) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s3.getExtension("WEBGL_depth_texture") || s3.getExtension("MOZ_WEBGL_depth_texture") || s3.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s3.getExtension("EXT_texture_filter_anisotropic") || s3.getExtension("MOZ_EXT_texture_filter_anisotropic") || s3.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s3.getExtension("WEBGL_compressed_texture_s3tc") || s3.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s3.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s3.getExtension("WEBGL_compressed_texture_pvrtc") || s3.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s3.getExtension(n);
    }
    return e[n] = i, i;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const i = t(n);
    return i === null && Gi("THREE.WebGLRenderer: " + n + " extension not supported."), i;
  } };
}
function rg(s3, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const _ in d.attributes) e.remove(d.attributes[_]);
    d.removeEventListener("dispose", o), delete i[d.id];
    const p = r.get(d);
    p && (e.remove(p), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(u, d) {
    return i[d.id] === true || (d.addEventListener("dispose", o), i[d.id] = true, t.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const p in d) e.update(d[p], s3.ARRAY_BUFFER);
  }
  function c(u) {
    const d = [], p = u.index, _ = u.attributes.position;
    let g = 0;
    if (p !== null) {
      const T = p.array;
      g = p.version;
      for (let E = 0, S = T.length; E < S; E += 3) {
        const P = T[E + 0], w = T[E + 1], C = T[E + 2];
        d.push(P, w, w, C, C, P);
      }
    } else if (_ !== void 0) {
      const T = _.array;
      g = _.version;
      for (let E = 0, S = T.length / 3 - 1; E < S; E += 3) {
        const P = E + 0, w = E + 1, C = E + 2;
        d.push(P, w, w, C, C, P);
      }
    } else return;
    const m = new (Gh(d) ? jh : qh)(d, 1);
    m.version = g;
    const f = r.get(u);
    f && e.remove(f), r.set(u, m);
  }
  function h(u) {
    const d = r.get(u);
    if (d) {
      const p = u.index;
      p !== null && d.version < p.version && c(u);
    } else c(u);
    return r.get(u);
  }
  return { get: a, update: l, getWireframeAttribute: h };
}
function og(s3, e, t) {
  let n;
  function i(d) {
    n = d;
  }
  let r, o;
  function a(d) {
    r = d.type, o = d.bytesPerElement;
  }
  function l(d, p) {
    s3.drawElements(n, p, r, d * o), t.update(p, n, 1);
  }
  function c(d, p, _) {
    _ !== 0 && (s3.drawElementsInstanced(n, p, r, d * o, _), t.update(p, n, _));
  }
  function h(d, p, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, r, d, 0, _);
    let m = 0;
    for (let f = 0; f < _; f++) m += p[f];
    t.update(m, n, 1);
  }
  function u(d, p, _, g) {
    if (_ === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let f = 0; f < d.length; f++) c(d[f] / o, p[f], g[f]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, r, d, 0, g, 0, _);
      let f = 0;
      for (let T = 0; T < _; T++) f += p[T] * g[T];
      t.update(f, n, 1);
    }
  }
  this.setMode = i, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function ag(s3) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, o, a) {
    switch (t.calls++, o) {
      case s3.TRIANGLES:
        t.triangles += a * (r / 3);
        break;
      case s3.LINES:
        t.lines += a * (r / 2);
        break;
      case s3.LINE_STRIP:
        t.lines += a * (r - 1);
        break;
      case s3.LINE_LOOP:
        t.lines += a * r;
        break;
      case s3.POINTS:
        t.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: i, update: n };
}
function lg(s3, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new Ke();
  function r(o, a, l) {
    const c = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = n.get(a);
    if (d === void 0 || d.count !== u) {
      let M = function() {
        C.dispose(), n.delete(a), a.removeEventListener("dispose", M);
      };
      d !== void 0 && d.texture.dispose();
      const p = a.morphAttributes.position !== void 0, _ = a.morphAttributes.normal !== void 0, g = a.morphAttributes.color !== void 0, m = a.morphAttributes.position || [], f = a.morphAttributes.normal || [], T = a.morphAttributes.color || [];
      let E = 0;
      p === true && (E = 1), _ === true && (E = 2), g === true && (E = 3);
      let S = a.attributes.position.count * E, P = 1;
      S > e.maxTextureSize && (P = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
      const w = new Float32Array(S * P * 4 * u), C = new Xh(w, S, P, u);
      C.type = cn, C.needsUpdate = true;
      const N = E * 4;
      for (let y = 0; y < u; y++) {
        const I = m[y], q = f[y], z = T[y], X = S * P * 4 * y;
        for (let J = 0; J < I.count; J++) {
          const G = J * N;
          p === true && (i.fromBufferAttribute(I, J), w[X + G + 0] = i.x, w[X + G + 1] = i.y, w[X + G + 2] = i.z, w[X + G + 3] = 0), _ === true && (i.fromBufferAttribute(q, J), w[X + G + 4] = i.x, w[X + G + 5] = i.y, w[X + G + 6] = i.z, w[X + G + 7] = 0), g === true && (i.fromBufferAttribute(z, J), w[X + G + 8] = i.x, w[X + G + 9] = i.y, w[X + G + 10] = i.z, w[X + G + 11] = z.itemSize === 4 ? i.w : 1);
        }
      }
      d = { count: u, texture: C, size: new pe(S, P) }, n.set(a, d), a.addEventListener("dispose", M);
    }
    if (o.isInstancedMesh === true && o.morphTexture !== null) l.getUniforms().setValue(s3, "morphTexture", o.morphTexture, t);
    else {
      let p = 0;
      for (let g = 0; g < c.length; g++) p += c[g];
      const _ = a.morphTargetsRelative ? 1 : 1 - p;
      l.getUniforms().setValue(s3, "morphTargetBaseInfluence", _), l.getUniforms().setValue(s3, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(s3, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(s3, "morphTargetsTextureSize", d.size);
  }
  return { update: r };
}
function cg(s3, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, u = e.get(l, h);
    if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === false && l.addEventListener("dispose", a), i.get(l) !== c && (t.update(l.instanceMatrix, s3.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, s3.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      i.get(d) !== c && (d.update(), i.set(d, c));
    }
    return u;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: r, dispose: o };
}
const fu = new vt(), Hc = new ou(1, 1), pu = new Xh(), mu = new nf(), _u = new Zh(), Vc = [], Gc = [], Wc = new Float32Array(16), Xc = new Float32Array(9), Yc = new Float32Array(4);
function Ss(s3, e, t) {
  const n = s3[0];
  if (n <= 0 || n > 0) return s3;
  const i = e * t;
  let r = Vc[i];
  if (r === void 0 && (r = new Float32Array(i), Vc[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o) a += t, s3[o].toArray(r, a);
  }
  return r;
}
function xt(s3, e) {
  if (s3.length !== e.length) return false;
  for (let t = 0, n = s3.length; t < n; t++) if (s3[t] !== e[t]) return false;
  return true;
}
function yt(s3, e) {
  for (let t = 0, n = e.length; t < n; t++) s3[t] = e[t];
}
function uo(s3, e) {
  let t = Gc[e];
  t === void 0 && (t = new Int32Array(e), Gc[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = s3.allocateTextureUnit();
  return t;
}
function hg(s3, e) {
  const t = this.cache;
  t[0] !== e && (s3.uniform1f(this.addr, e), t[0] = e);
}
function ug(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s3.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (xt(t, e)) return;
    s3.uniform2fv(this.addr, e), yt(t, e);
  }
}
function dg(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s3.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s3.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (xt(t, e)) return;
    s3.uniform3fv(this.addr, e), yt(t, e);
  }
}
function fg(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s3.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (xt(t, e)) return;
    s3.uniform4fv(this.addr, e), yt(t, e);
  }
}
function pg(s3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (xt(t, e)) return;
    s3.uniformMatrix2fv(this.addr, false, e), yt(t, e);
  } else {
    if (xt(t, n)) return;
    Yc.set(n), s3.uniformMatrix2fv(this.addr, false, Yc), yt(t, n);
  }
}
function mg(s3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (xt(t, e)) return;
    s3.uniformMatrix3fv(this.addr, false, e), yt(t, e);
  } else {
    if (xt(t, n)) return;
    Xc.set(n), s3.uniformMatrix3fv(this.addr, false, Xc), yt(t, n);
  }
}
function _g(s3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (xt(t, e)) return;
    s3.uniformMatrix4fv(this.addr, false, e), yt(t, e);
  } else {
    if (xt(t, n)) return;
    Wc.set(n), s3.uniformMatrix4fv(this.addr, false, Wc), yt(t, n);
  }
}
function gg(s3, e) {
  const t = this.cache;
  t[0] !== e && (s3.uniform1i(this.addr, e), t[0] = e);
}
function vg(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s3.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (xt(t, e)) return;
    s3.uniform2iv(this.addr, e), yt(t, e);
  }
}
function xg(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s3.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (xt(t, e)) return;
    s3.uniform3iv(this.addr, e), yt(t, e);
  }
}
function yg(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s3.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (xt(t, e)) return;
    s3.uniform4iv(this.addr, e), yt(t, e);
  }
}
function Sg(s3, e) {
  const t = this.cache;
  t[0] !== e && (s3.uniform1ui(this.addr, e), t[0] = e);
}
function Mg(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s3.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (xt(t, e)) return;
    s3.uniform2uiv(this.addr, e), yt(t, e);
  }
}
function bg(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s3.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (xt(t, e)) return;
    s3.uniform3uiv(this.addr, e), yt(t, e);
  }
}
function Eg(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s3.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (xt(t, e)) return;
    s3.uniform4uiv(this.addr, e), yt(t, e);
  }
}
function Tg(s3, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s3.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s3.SAMPLER_2D_SHADOW ? (Hc.compareFunction = Hh, r = Hc) : r = fu, t.setTexture2D(e || r, i);
}
function Ag(s3, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s3.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || mu, i);
}
function wg(s3, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s3.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || _u, i);
}
function Rg(s3, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s3.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || pu, i);
}
function Cg(s3) {
  switch (s3) {
    case 5126:
      return hg;
    case 35664:
      return ug;
    case 35665:
      return dg;
    case 35666:
      return fg;
    case 35674:
      return pg;
    case 35675:
      return mg;
    case 35676:
      return _g;
    case 5124:
    case 35670:
      return gg;
    case 35667:
    case 35671:
      return vg;
    case 35668:
    case 35672:
      return xg;
    case 35669:
    case 35673:
      return yg;
    case 5125:
      return Sg;
    case 36294:
      return Mg;
    case 36295:
      return bg;
    case 36296:
      return Eg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Tg;
    case 35679:
    case 36299:
    case 36307:
      return Ag;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return wg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Rg;
  }
}
function Pg(s3, e) {
  s3.uniform1fv(this.addr, e);
}
function Ig(s3, e) {
  const t = Ss(e, this.size, 2);
  s3.uniform2fv(this.addr, t);
}
function Lg(s3, e) {
  const t = Ss(e, this.size, 3);
  s3.uniform3fv(this.addr, t);
}
function Dg(s3, e) {
  const t = Ss(e, this.size, 4);
  s3.uniform4fv(this.addr, t);
}
function Ug(s3, e) {
  const t = Ss(e, this.size, 4);
  s3.uniformMatrix2fv(this.addr, false, t);
}
function Ng(s3, e) {
  const t = Ss(e, this.size, 9);
  s3.uniformMatrix3fv(this.addr, false, t);
}
function Fg(s3, e) {
  const t = Ss(e, this.size, 16);
  s3.uniformMatrix4fv(this.addr, false, t);
}
function Og(s3, e) {
  s3.uniform1iv(this.addr, e);
}
function Bg(s3, e) {
  s3.uniform2iv(this.addr, e);
}
function kg(s3, e) {
  s3.uniform3iv(this.addr, e);
}
function zg(s3, e) {
  s3.uniform4iv(this.addr, e);
}
function Hg(s3, e) {
  s3.uniform1uiv(this.addr, e);
}
function Vg(s3, e) {
  s3.uniform2uiv(this.addr, e);
}
function Gg(s3, e) {
  s3.uniform3uiv(this.addr, e);
}
function Wg(s3, e) {
  s3.uniform4uiv(this.addr, e);
}
function Xg(s3, e, t) {
  const n = this.cache, i = e.length, r = uo(t, i);
  xt(n, r) || (s3.uniform1iv(this.addr, r), yt(n, r));
  for (let o = 0; o !== i; ++o) t.setTexture2D(e[o] || fu, r[o]);
}
function Yg(s3, e, t) {
  const n = this.cache, i = e.length, r = uo(t, i);
  xt(n, r) || (s3.uniform1iv(this.addr, r), yt(n, r));
  for (let o = 0; o !== i; ++o) t.setTexture3D(e[o] || mu, r[o]);
}
function qg(s3, e, t) {
  const n = this.cache, i = e.length, r = uo(t, i);
  xt(n, r) || (s3.uniform1iv(this.addr, r), yt(n, r));
  for (let o = 0; o !== i; ++o) t.setTextureCube(e[o] || _u, r[o]);
}
function jg(s3, e, t) {
  const n = this.cache, i = e.length, r = uo(t, i);
  xt(n, r) || (s3.uniform1iv(this.addr, r), yt(n, r));
  for (let o = 0; o !== i; ++o) t.setTexture2DArray(e[o] || pu, r[o]);
}
function Kg(s3) {
  switch (s3) {
    case 5126:
      return Pg;
    case 35664:
      return Ig;
    case 35665:
      return Lg;
    case 35666:
      return Dg;
    case 35674:
      return Ug;
    case 35675:
      return Ng;
    case 35676:
      return Fg;
    case 5124:
    case 35670:
      return Og;
    case 35667:
    case 35671:
      return Bg;
    case 35668:
    case 35672:
      return kg;
    case 35669:
    case 35673:
      return zg;
    case 5125:
      return Hg;
    case 36294:
      return Vg;
    case 36295:
      return Gg;
    case 36296:
      return Wg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Xg;
    case 35679:
    case 36299:
    case 36307:
      return Yg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return qg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return jg;
  }
}
class $g {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Cg(t.type);
  }
}
class Zg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Kg(t.type);
  }
}
class Jg {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, o = i.length; r !== o; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const ea = /(\w+)(\])?(\[|\.)?/g;
function qc(s3, e) {
  s3.seq.push(e), s3.map[e.id] = e;
}
function Qg(s3, e, t) {
  const n = s3.name, i = n.length;
  for (ea.lastIndex = 0; ; ) {
    const r = ea.exec(n), o = ea.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) {
      qc(t, c === void 0 ? new $g(a, s3, e) : new Zg(a, s3, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && (u = new Jg(a), qc(t, u)), t = u;
    }
  }
}
class jr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), o = e.getUniformLocation(t, r.name);
      Qg(r, o, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, o = t.length; r !== o; ++r) {
      const a = t[r], l = n[a.id];
      l.needsUpdate !== false && a.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function jc(s3, e, t) {
  const n = s3.createShader(e);
  return s3.shaderSource(n, t), s3.compileShader(n), n;
}
const ev = 37297;
let tv = 0;
function nv(s3, e) {
  const t = s3.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = i; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
const Kc = new Ue();
function iv(s3) {
  We._getMatrix(Kc, We.workingColorSpace, s3);
  const e = `mat3( ${Kc.elements.map((t) => t.toFixed(4))} )`;
  switch (We.getTransfer(s3)) {
    case Zr:
      return [e, "LinearTransferOETF"];
    case nt:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", s3), [e, "LinearTransferOETF"];
  }
}
function $c(s3, e, t) {
  const n = s3.getShaderParameter(e, s3.COMPILE_STATUS), i = s3.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + nv(s3.getShaderSource(e), o);
  } else return i;
}
function sv(s3, e) {
  const t = iv(e);
  return [`vec4 ${s3}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function rv(s3, e) {
  let t;
  switch (e) {
    case hd:
      t = "Linear";
      break;
    case ud:
      t = "Reinhard";
      break;
    case dd:
      t = "Cineon";
      break;
    case Ah:
      t = "ACESFilmic";
      break;
    case pd:
      t = "AgX";
      break;
    case md:
      t = "Neutral";
      break;
    case fd:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s3 + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Or = new R();
function ov() {
  We.getLuminanceCoefficients(Or);
  const s3 = Or.x.toFixed(4), e = Or.y.toFixed(4), t = Or.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${s3}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function av(s3) {
  return [s3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s3.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(zs).join(`
`);
}
function lv(s3) {
  const e = [];
  for (const t in s3) {
    const n = s3[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function cv(s3, e) {
  const t = {}, n = s3.getProgramParameter(e, s3.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s3.getActiveAttrib(e, i), o = r.name;
    let a = 1;
    r.type === s3.FLOAT_MAT2 && (a = 2), r.type === s3.FLOAT_MAT3 && (a = 3), r.type === s3.FLOAT_MAT4 && (a = 4), t[o] = { type: r.type, location: s3.getAttribLocation(e, o), locationSize: a };
  }
  return t;
}
function zs(s3) {
  return s3 !== "";
}
function Zc(s3, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s3.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Jc(s3, e) {
  return s3.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const hv = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ja(s3) {
  return s3.replace(hv, dv);
}
const uv = /* @__PURE__ */ new Map();
function dv(s3, e) {
  let t = Fe[e];
  if (t === void 0) {
    const n = uv.get(e);
    if (n !== void 0) t = Fe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Ja(t);
}
const fv = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Qc(s3) {
  return s3.replace(fv, pv);
}
function pv(s3, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++) i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function eh(s3) {
  let e = `precision ${s3.precision} float;
	precision ${s3.precision} int;
	precision ${s3.precision} sampler2D;
	precision ${s3.precision} samplerCube;
	precision ${s3.precision} sampler3D;
	precision ${s3.precision} sampler2DArray;
	precision ${s3.precision} sampler2DShadow;
	precision ${s3.precision} samplerCubeShadow;
	precision ${s3.precision} sampler2DArrayShadow;
	precision ${s3.precision} isampler2D;
	precision ${s3.precision} isampler3D;
	precision ${s3.precision} isamplerCube;
	precision ${s3.precision} isampler2DArray;
	precision ${s3.precision} usampler2D;
	precision ${s3.precision} usampler3D;
	precision ${s3.precision} usamplerCube;
	precision ${s3.precision} usampler2DArray;
	`;
  return s3.precision === "highp" ? e += `
#define HIGH_PRECISION` : s3.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s3.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function mv(s3) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s3.shadowMapType === Eh ? e = "SHADOWMAP_TYPE_PCF" : s3.shadowMapType === Gu ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s3.shadowMapType === In && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function _v(s3) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s3.envMap) switch (s3.envMapMode) {
    case rs:
    case os:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case oo:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function gv(s3) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s3.envMap) switch (s3.envMapMode) {
    case os:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function vv(s3) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s3.envMap) switch (s3.combine) {
    case Th:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case ld:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case cd:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function xv(s3) {
  const e = s3.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function yv(s3, e, t, n) {
  const i = s3.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = mv(t), c = _v(t), h = gv(t), u = vv(t), d = xv(t), p = av(t), _ = lv(r), g = i.createProgram();
  let m, f, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _].filter(zs).join(`
`), m.length > 0 && (m += `
`), f = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _].filter(zs).join(`
`), f.length > 0 && (f += `
`)) : (m = [eh(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(zs).join(`
`), f = [eh(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== ni ? "#define TONE_MAPPING" : "", t.toneMapping !== ni ? Fe.tonemapping_pars_fragment : "", t.toneMapping !== ni ? rv("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Fe.colorspace_pars_fragment, sv("linearToOutputTexel", t.outputColorSpace), ov(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(zs).join(`
`)), o = Ja(o), o = Zc(o, t), o = Jc(o, t), a = Ja(a), a = Zc(a, t), a = Jc(a, t), o = Qc(o), a = Qc(a), t.isRawShaderMaterial !== true && (T = `#version 300 es
`, m = [p, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m, f = ["#define varying in", t.glslVersion === Xl ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Xl ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + f);
  const E = T + m + o, S = T + f + a, P = jc(i, i.VERTEX_SHADER, E), w = jc(i, i.FRAGMENT_SHADER, S);
  i.attachShader(g, P), i.attachShader(g, w), t.index0AttributeName !== void 0 ? i.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === true && i.bindAttribLocation(g, 0, "position"), i.linkProgram(g);
  function C(I) {
    if (s3.debug.checkShaderErrors) {
      const q = i.getProgramInfoLog(g).trim(), z = i.getShaderInfoLog(P).trim(), X = i.getShaderInfoLog(w).trim();
      let J = true, G = true;
      if (i.getProgramParameter(g, i.LINK_STATUS) === false) if (J = false, typeof s3.debug.onShaderError == "function") s3.debug.onShaderError(i, g, P, w);
      else {
        const te = $c(i, P, "vertex"), V = $c(i, w, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(g, i.VALIDATE_STATUS) + `

Material Name: ` + I.name + `
Material Type: ` + I.type + `

Program Info Log: ` + q + `
` + te + `
` + V);
      }
      else q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", q) : (z === "" || X === "") && (G = false);
      G && (I.diagnostics = { runnable: J, programLog: q, vertexShader: { log: z, prefix: m }, fragmentShader: { log: X, prefix: f } });
    }
    i.deleteShader(P), i.deleteShader(w), N = new jr(i, g), M = cv(i, g);
  }
  let N;
  this.getUniforms = function() {
    return N === void 0 && C(this), N;
  };
  let M;
  this.getAttributes = function() {
    return M === void 0 && C(this), M;
  };
  let y = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return y === false && (y = i.getProgramParameter(g, ev)), y;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(g), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = tv++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = P, this.fragmentShader = w, this;
}
let Sv = 0;
class Mv {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(i) === false && (o.add(i), i.usedTimes++), o.has(r) === false && (o.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new bv(e), t.set(e, n)), n;
  }
}
class bv {
  constructor(e) {
    this.id = Sv++, this.code = e, this.usedTimes = 0;
  }
}
function Ev(s3, e, t, n, i, r, o) {
  const a = new gl(), l = new Mv(), c = /* @__PURE__ */ new Set(), h = [], u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let p = i.precision;
  const _ = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function g(M) {
    return c.add(M), M === 0 ? "uv" : `uv${M}`;
  }
  function m(M, y, I, q, z) {
    const X = q.fog, J = z.geometry, G = M.isMeshStandardMaterial ? q.environment : null, te = (M.isMeshStandardMaterial ? t : e).get(M.envMap || G), V = te && te.mapping === oo ? te.image.height : null, oe = _[M.type];
    M.precision !== null && (p = i.getMaxPrecision(M.precision), p !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", p, "instead."));
    const de = J.morphAttributes.position || J.morphAttributes.normal || J.morphAttributes.color, Se = de !== void 0 ? de.length : 0;
    let Be = 0;
    J.morphAttributes.position !== void 0 && (Be = 1), J.morphAttributes.normal !== void 0 && (Be = 2), J.morphAttributes.color !== void 0 && (Be = 3);
    let st, Y, ne, ve;
    if (oe) {
      const Qe = gn[oe];
      st = Qe.vertexShader, Y = Qe.fragmentShader;
    } else st = M.vertexShader, Y = M.fragmentShader, l.update(M), ne = l.getVertexShaderID(M), ve = l.getFragmentShaderID(M);
    const ae = s3.getRenderTarget(), we = s3.state.buffers.depth.getReversed(), Pe = z.isInstancedMesh === true, ke = z.isBatchedMesh === true, ht = !!M.map, Xe = !!M.matcap, ft = !!te, A = !!M.aoMap, qt = !!M.lightMap, He = !!M.bumpMap, Ve = !!M.normalMap, Me = !!M.displacementMap, at = !!M.emissiveMap, ye = !!M.metalnessMap, b = !!M.roughnessMap, v = M.anisotropy > 0, F = M.clearcoat > 0, K = M.dispersion > 0, Z = M.iridescence > 0, W = M.sheen > 0, xe = M.transmission > 0, le = v && !!M.anisotropyMap, fe = F && !!M.clearcoatMap, Ye = F && !!M.clearcoatNormalMap, ee = F && !!M.clearcoatRoughnessMap, me = Z && !!M.iridescenceMap, Ae = Z && !!M.iridescenceThicknessMap, Re = W && !!M.sheenColorMap, _e = W && !!M.sheenRoughnessMap, Ge = !!M.specularMap, Ne = !!M.specularColorMap, rt = !!M.specularIntensityMap, L = xe && !!M.transmissionMap, se = xe && !!M.thicknessMap, H = !!M.gradientMap, $ = !!M.alphaMap, he = M.alphaTest > 0, ce = !!M.alphaHash, De = !!M.extensions;
    let ut = ni;
    M.toneMapped && (ae === null || ae.isXRRenderTarget === true) && (ut = s3.toneMapping);
    const Tt = { shaderID: oe, shaderType: M.type, shaderName: M.name, vertexShader: st, fragmentShader: Y, defines: M.defines, customVertexShaderID: ne, customFragmentShaderID: ve, isRawShaderMaterial: M.isRawShaderMaterial === true, glslVersion: M.glslVersion, precision: p, batching: ke, batchingColor: ke && z._colorsTexture !== null, instancing: Pe, instancingColor: Pe && z.instanceColor !== null, instancingMorph: Pe && z.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: ae === null ? s3.outputColorSpace : ae.isXRRenderTarget === true ? ae.texture.colorSpace : Ft, alphaToCoverage: !!M.alphaToCoverage, map: ht, matcap: Xe, envMap: ft, envMapMode: ft && te.mapping, envMapCubeUVHeight: V, aoMap: A, lightMap: qt, bumpMap: He, normalMap: Ve, displacementMap: d && Me, emissiveMap: at, normalMapObjectSpace: Ve && M.normalMapType === bd, normalMapTangentSpace: Ve && M.normalMapType === zh, metalnessMap: ye, roughnessMap: b, anisotropy: v, anisotropyMap: le, clearcoat: F, clearcoatMap: fe, clearcoatNormalMap: Ye, clearcoatRoughnessMap: ee, dispersion: K, iridescence: Z, iridescenceMap: me, iridescenceThicknessMap: Ae, sheen: W, sheenColorMap: Re, sheenRoughnessMap: _e, specularMap: Ge, specularColorMap: Ne, specularIntensityMap: rt, transmission: xe, transmissionMap: L, thicknessMap: se, gradientMap: H, opaque: M.transparent === false && M.blending === Qi && M.alphaToCoverage === false, alphaMap: $, alphaTest: he, alphaHash: ce, combine: M.combine, mapUv: ht && g(M.map.channel), aoMapUv: A && g(M.aoMap.channel), lightMapUv: qt && g(M.lightMap.channel), bumpMapUv: He && g(M.bumpMap.channel), normalMapUv: Ve && g(M.normalMap.channel), displacementMapUv: Me && g(M.displacementMap.channel), emissiveMapUv: at && g(M.emissiveMap.channel), metalnessMapUv: ye && g(M.metalnessMap.channel), roughnessMapUv: b && g(M.roughnessMap.channel), anisotropyMapUv: le && g(M.anisotropyMap.channel), clearcoatMapUv: fe && g(M.clearcoatMap.channel), clearcoatNormalMapUv: Ye && g(M.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: ee && g(M.clearcoatRoughnessMap.channel), iridescenceMapUv: me && g(M.iridescenceMap.channel), iridescenceThicknessMapUv: Ae && g(M.iridescenceThicknessMap.channel), sheenColorMapUv: Re && g(M.sheenColorMap.channel), sheenRoughnessMapUv: _e && g(M.sheenRoughnessMap.channel), specularMapUv: Ge && g(M.specularMap.channel), specularColorMapUv: Ne && g(M.specularColorMap.channel), specularIntensityMapUv: rt && g(M.specularIntensityMap.channel), transmissionMapUv: L && g(M.transmissionMap.channel), thicknessMapUv: se && g(M.thicknessMap.channel), alphaMapUv: $ && g(M.alphaMap.channel), vertexTangents: !!J.attributes.tangent && (Ve || v), vertexColors: M.vertexColors, vertexAlphas: M.vertexColors === true && !!J.attributes.color && J.attributes.color.itemSize === 4, pointsUvs: z.isPoints === true && !!J.attributes.uv && (ht || $), fog: !!X, useFog: M.fog === true, fogExp2: !!X && X.isFogExp2, flatShading: M.flatShading === true, sizeAttenuation: M.sizeAttenuation === true, logarithmicDepthBuffer: u, reverseDepthBuffer: we, skinning: z.isSkinnedMesh === true, morphTargets: J.morphAttributes.position !== void 0, morphNormals: J.morphAttributes.normal !== void 0, morphColors: J.morphAttributes.color !== void 0, morphTargetsCount: Se, morphTextureStride: Be, numDirLights: y.directional.length, numPointLights: y.point.length, numSpotLights: y.spot.length, numSpotLightMaps: y.spotLightMap.length, numRectAreaLights: y.rectArea.length, numHemiLights: y.hemi.length, numDirLightShadows: y.directionalShadowMap.length, numPointLightShadows: y.pointShadowMap.length, numSpotLightShadows: y.spotShadowMap.length, numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps, numLightProbes: y.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: M.dithering, shadowMapEnabled: s3.shadowMap.enabled && I.length > 0, shadowMapType: s3.shadowMap.type, toneMapping: ut, decodeVideoTexture: ht && M.map.isVideoTexture === true && We.getTransfer(M.map.colorSpace) === nt, decodeVideoTextureEmissive: at && M.emissiveMap.isVideoTexture === true && We.getTransfer(M.emissiveMap.colorSpace) === nt, premultipliedAlpha: M.premultipliedAlpha, doubleSided: M.side === xn, flipSided: M.side === Rt, useDepthPacking: M.depthPacking >= 0, depthPacking: M.depthPacking || 0, index0AttributeName: M.index0AttributeName, extensionClipCullDistance: De && M.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (De && M.extensions.multiDraw === true || ke) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: M.customProgramCacheKey() };
    return Tt.vertexUv1s = c.has(1), Tt.vertexUv2s = c.has(2), Tt.vertexUv3s = c.has(3), c.clear(), Tt;
  }
  function f(M) {
    const y = [];
    if (M.shaderID ? y.push(M.shaderID) : (y.push(M.customVertexShaderID), y.push(M.customFragmentShaderID)), M.defines !== void 0) for (const I in M.defines) y.push(I), y.push(M.defines[I]);
    return M.isRawShaderMaterial === false && (T(y, M), E(y, M), y.push(s3.outputColorSpace)), y.push(M.customProgramCacheKey), y.join();
  }
  function T(M, y) {
    M.push(y.precision), M.push(y.outputColorSpace), M.push(y.envMapMode), M.push(y.envMapCubeUVHeight), M.push(y.mapUv), M.push(y.alphaMapUv), M.push(y.lightMapUv), M.push(y.aoMapUv), M.push(y.bumpMapUv), M.push(y.normalMapUv), M.push(y.displacementMapUv), M.push(y.emissiveMapUv), M.push(y.metalnessMapUv), M.push(y.roughnessMapUv), M.push(y.anisotropyMapUv), M.push(y.clearcoatMapUv), M.push(y.clearcoatNormalMapUv), M.push(y.clearcoatRoughnessMapUv), M.push(y.iridescenceMapUv), M.push(y.iridescenceThicknessMapUv), M.push(y.sheenColorMapUv), M.push(y.sheenRoughnessMapUv), M.push(y.specularMapUv), M.push(y.specularColorMapUv), M.push(y.specularIntensityMapUv), M.push(y.transmissionMapUv), M.push(y.thicknessMapUv), M.push(y.combine), M.push(y.fogExp2), M.push(y.sizeAttenuation), M.push(y.morphTargetsCount), M.push(y.morphAttributeCount), M.push(y.numDirLights), M.push(y.numPointLights), M.push(y.numSpotLights), M.push(y.numSpotLightMaps), M.push(y.numHemiLights), M.push(y.numRectAreaLights), M.push(y.numDirLightShadows), M.push(y.numPointLightShadows), M.push(y.numSpotLightShadows), M.push(y.numSpotLightShadowsWithMaps), M.push(y.numLightProbes), M.push(y.shadowMapType), M.push(y.toneMapping), M.push(y.numClippingPlanes), M.push(y.numClipIntersection), M.push(y.depthPacking);
  }
  function E(M, y) {
    a.disableAll(), y.supportsVertexTextures && a.enable(0), y.instancing && a.enable(1), y.instancingColor && a.enable(2), y.instancingMorph && a.enable(3), y.matcap && a.enable(4), y.envMap && a.enable(5), y.normalMapObjectSpace && a.enable(6), y.normalMapTangentSpace && a.enable(7), y.clearcoat && a.enable(8), y.iridescence && a.enable(9), y.alphaTest && a.enable(10), y.vertexColors && a.enable(11), y.vertexAlphas && a.enable(12), y.vertexUv1s && a.enable(13), y.vertexUv2s && a.enable(14), y.vertexUv3s && a.enable(15), y.vertexTangents && a.enable(16), y.anisotropy && a.enable(17), y.alphaHash && a.enable(18), y.batching && a.enable(19), y.dispersion && a.enable(20), y.batchingColor && a.enable(21), M.push(a.mask), a.disableAll(), y.fog && a.enable(0), y.useFog && a.enable(1), y.flatShading && a.enable(2), y.logarithmicDepthBuffer && a.enable(3), y.reverseDepthBuffer && a.enable(4), y.skinning && a.enable(5), y.morphTargets && a.enable(6), y.morphNormals && a.enable(7), y.morphColors && a.enable(8), y.premultipliedAlpha && a.enable(9), y.shadowMapEnabled && a.enable(10), y.doubleSided && a.enable(11), y.flipSided && a.enable(12), y.useDepthPacking && a.enable(13), y.dithering && a.enable(14), y.transmission && a.enable(15), y.sheen && a.enable(16), y.opaque && a.enable(17), y.pointsUvs && a.enable(18), y.decodeVideoTexture && a.enable(19), y.decodeVideoTextureEmissive && a.enable(20), y.alphaToCoverage && a.enable(21), M.push(a.mask);
  }
  function S(M) {
    const y = _[M.type];
    let I;
    if (y) {
      const q = gn[y];
      I = Qr.clone(q.uniforms);
    } else I = M.uniforms;
    return I;
  }
  function P(M, y) {
    let I;
    for (let q = 0, z = h.length; q < z; q++) {
      const X = h[q];
      if (X.cacheKey === y) {
        I = X, ++I.usedTimes;
        break;
      }
    }
    return I === void 0 && (I = new yv(s3, y, M, r), h.push(I)), I;
  }
  function w(M) {
    if (--M.usedTimes === 0) {
      const y = h.indexOf(M);
      h[y] = h[h.length - 1], h.pop(), M.destroy();
    }
  }
  function C(M) {
    l.remove(M);
  }
  function N() {
    l.dispose();
  }
  return { getParameters: m, getProgramCacheKey: f, getUniforms: S, acquireProgram: P, releaseProgram: w, releaseShaderCache: C, programs: h, dispose: N };
}
function Tv() {
  let s3 = /* @__PURE__ */ new WeakMap();
  function e(o) {
    return s3.has(o);
  }
  function t(o) {
    let a = s3.get(o);
    return a === void 0 && (a = {}, s3.set(o, a)), a;
  }
  function n(o) {
    s3.delete(o);
  }
  function i(o, a, l) {
    s3.get(o)[a] = l;
  }
  function r() {
    s3 = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: n, update: i, dispose: r };
}
function Av(s3, e) {
  return s3.groupOrder !== e.groupOrder ? s3.groupOrder - e.groupOrder : s3.renderOrder !== e.renderOrder ? s3.renderOrder - e.renderOrder : s3.material.id !== e.material.id ? s3.material.id - e.material.id : s3.z !== e.z ? s3.z - e.z : s3.id - e.id;
}
function th(s3, e) {
  return s3.groupOrder !== e.groupOrder ? s3.groupOrder - e.groupOrder : s3.renderOrder !== e.renderOrder ? s3.renderOrder - e.renderOrder : s3.z !== e.z ? e.z - s3.z : s3.id - e.id;
}
function nh() {
  const s3 = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(u, d, p, _, g, m) {
    let f = s3[e];
    return f === void 0 ? (f = { id: u.id, object: u, geometry: d, material: p, groupOrder: _, renderOrder: u.renderOrder, z: g, group: m }, s3[e] = f) : (f.id = u.id, f.object = u, f.geometry = d, f.material = p, f.groupOrder = _, f.renderOrder = u.renderOrder, f.z = g, f.group = m), e++, f;
  }
  function a(u, d, p, _, g, m) {
    const f = o(u, d, p, _, g, m);
    p.transmission > 0 ? n.push(f) : p.transparent === true ? i.push(f) : t.push(f);
  }
  function l(u, d, p, _, g, m) {
    const f = o(u, d, p, _, g, m);
    p.transmission > 0 ? n.unshift(f) : p.transparent === true ? i.unshift(f) : t.unshift(f);
  }
  function c(u, d) {
    t.length > 1 && t.sort(u || Av), n.length > 1 && n.sort(d || th), i.length > 1 && i.sort(d || th);
  }
  function h() {
    for (let u = e, d = s3.length; u < d; u++) {
      const p = s3[u];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: i, init: r, push: a, unshift: l, finish: h, sort: c };
}
function wv() {
  let s3 = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s3.get(n);
    let o;
    return r === void 0 ? (o = new nh(), s3.set(n, [o])) : i >= r.length ? (o = new nh(), r.push(o)) : o = r[i], o;
  }
  function t() {
    s3 = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function Rv() {
  const s3 = {};
  return { get: function(e) {
    if (s3[e.id] !== void 0) return s3[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new R(), color: new Ee() };
        break;
      case "SpotLight":
        t = { position: new R(), direction: new R(), color: new Ee(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new R(), color: new Ee(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new R(), skyColor: new Ee(), groundColor: new Ee() };
        break;
      case "RectAreaLight":
        t = { color: new Ee(), position: new R(), halfWidth: new R(), halfHeight: new R() };
        break;
    }
    return s3[e.id] = t, t;
  } };
}
function Cv() {
  const s3 = {};
  return { get: function(e) {
    if (s3[e.id] !== void 0) return s3[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new pe() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new pe() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new pe(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return s3[e.id] = t, t;
  } };
}
let Pv = 0;
function Iv(s3, e) {
  return (e.castShadow ? 2 : 0) - (s3.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s3.map ? 1 : 0);
}
function Lv(s3) {
  const e = new Rv(), t = Cv(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new R());
  const i = new R(), r = new Le(), o = new Le();
  function a(c) {
    let h = 0, u = 0, d = 0;
    for (let M = 0; M < 9; M++) n.probe[M].set(0, 0, 0);
    let p = 0, _ = 0, g = 0, m = 0, f = 0, T = 0, E = 0, S = 0, P = 0, w = 0, C = 0;
    c.sort(Iv);
    for (let M = 0, y = c.length; M < y; M++) {
      const I = c[M], q = I.color, z = I.intensity, X = I.distance, J = I.shadow && I.shadow.map ? I.shadow.map.texture : null;
      if (I.isAmbientLight) h += q.r * z, u += q.g * z, d += q.b * z;
      else if (I.isLightProbe) {
        for (let G = 0; G < 9; G++) n.probe[G].addScaledVector(I.sh.coefficients[G], z);
        C++;
      } else if (I.isDirectionalLight) {
        const G = e.get(I);
        if (G.color.copy(I.color).multiplyScalar(I.intensity), I.castShadow) {
          const te = I.shadow, V = t.get(I);
          V.shadowIntensity = te.intensity, V.shadowBias = te.bias, V.shadowNormalBias = te.normalBias, V.shadowRadius = te.radius, V.shadowMapSize = te.mapSize, n.directionalShadow[p] = V, n.directionalShadowMap[p] = J, n.directionalShadowMatrix[p] = I.shadow.matrix, T++;
        }
        n.directional[p] = G, p++;
      } else if (I.isSpotLight) {
        const G = e.get(I);
        G.position.setFromMatrixPosition(I.matrixWorld), G.color.copy(q).multiplyScalar(z), G.distance = X, G.coneCos = Math.cos(I.angle), G.penumbraCos = Math.cos(I.angle * (1 - I.penumbra)), G.decay = I.decay, n.spot[g] = G;
        const te = I.shadow;
        if (I.map && (n.spotLightMap[P] = I.map, P++, te.updateMatrices(I), I.castShadow && w++), n.spotLightMatrix[g] = te.matrix, I.castShadow) {
          const V = t.get(I);
          V.shadowIntensity = te.intensity, V.shadowBias = te.bias, V.shadowNormalBias = te.normalBias, V.shadowRadius = te.radius, V.shadowMapSize = te.mapSize, n.spotShadow[g] = V, n.spotShadowMap[g] = J, S++;
        }
        g++;
      } else if (I.isRectAreaLight) {
        const G = e.get(I);
        G.color.copy(q).multiplyScalar(z), G.halfWidth.set(I.width * 0.5, 0, 0), G.halfHeight.set(0, I.height * 0.5, 0), n.rectArea[m] = G, m++;
      } else if (I.isPointLight) {
        const G = e.get(I);
        if (G.color.copy(I.color).multiplyScalar(I.intensity), G.distance = I.distance, G.decay = I.decay, I.castShadow) {
          const te = I.shadow, V = t.get(I);
          V.shadowIntensity = te.intensity, V.shadowBias = te.bias, V.shadowNormalBias = te.normalBias, V.shadowRadius = te.radius, V.shadowMapSize = te.mapSize, V.shadowCameraNear = te.camera.near, V.shadowCameraFar = te.camera.far, n.pointShadow[_] = V, n.pointShadowMap[_] = J, n.pointShadowMatrix[_] = I.shadow.matrix, E++;
        }
        n.point[_] = G, _++;
      } else if (I.isHemisphereLight) {
        const G = e.get(I);
        G.skyColor.copy(I.color).multiplyScalar(z), G.groundColor.copy(I.groundColor).multiplyScalar(z), n.hemi[f] = G, f++;
      }
    }
    m > 0 && (s3.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = ie.LTC_FLOAT_1, n.rectAreaLTC2 = ie.LTC_FLOAT_2) : (n.rectAreaLTC1 = ie.LTC_HALF_1, n.rectAreaLTC2 = ie.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
    const N = n.hash;
    (N.directionalLength !== p || N.pointLength !== _ || N.spotLength !== g || N.rectAreaLength !== m || N.hemiLength !== f || N.numDirectionalShadows !== T || N.numPointShadows !== E || N.numSpotShadows !== S || N.numSpotMaps !== P || N.numLightProbes !== C) && (n.directional.length = p, n.spot.length = g, n.rectArea.length = m, n.point.length = _, n.hemi.length = f, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = E, n.pointShadowMap.length = E, n.spotShadow.length = S, n.spotShadowMap.length = S, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = E, n.spotLightMatrix.length = S + P - w, n.spotLightMap.length = P, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = C, N.directionalLength = p, N.pointLength = _, N.spotLength = g, N.rectAreaLength = m, N.hemiLength = f, N.numDirectionalShadows = T, N.numPointShadows = E, N.numSpotShadows = S, N.numSpotMaps = P, N.numLightProbes = C, n.version = Pv++);
  }
  function l(c, h) {
    let u = 0, d = 0, p = 0, _ = 0, g = 0;
    const m = h.matrixWorldInverse;
    for (let f = 0, T = c.length; f < T; f++) {
      const E = c[f];
      if (E.isDirectionalLight) {
        const S = n.directional[u];
        S.direction.setFromMatrixPosition(E.matrixWorld), i.setFromMatrixPosition(E.target.matrixWorld), S.direction.sub(i), S.direction.transformDirection(m), u++;
      } else if (E.isSpotLight) {
        const S = n.spot[p];
        S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(m), S.direction.setFromMatrixPosition(E.matrixWorld), i.setFromMatrixPosition(E.target.matrixWorld), S.direction.sub(i), S.direction.transformDirection(m), p++;
      } else if (E.isRectAreaLight) {
        const S = n.rectArea[_];
        S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(m), o.identity(), r.copy(E.matrixWorld), r.premultiply(m), o.extractRotation(r), S.halfWidth.set(E.width * 0.5, 0, 0), S.halfHeight.set(0, E.height * 0.5, 0), S.halfWidth.applyMatrix4(o), S.halfHeight.applyMatrix4(o), _++;
      } else if (E.isPointLight) {
        const S = n.point[d];
        S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(m), d++;
      } else if (E.isHemisphereLight) {
        const S = n.hemi[g];
        S.direction.setFromMatrixPosition(E.matrixWorld), S.direction.transformDirection(m), g++;
      }
    }
  }
  return { setup: a, setupView: l, state: n };
}
function ih(s3) {
  const e = new Lv(s3), t = [], n = [];
  function i(h) {
    c.camera = h, t.length = 0, n.length = 0;
  }
  function r(h) {
    t.push(h);
  }
  function o(h) {
    n.push(h);
  }
  function a() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: i, state: c, setupLights: a, setupLightsView: l, pushLight: r, pushShadow: o };
}
function Dv(s3) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r = 0) {
    const o = e.get(i);
    let a;
    return o === void 0 ? (a = new ih(s3), e.set(i, [a])) : r >= o.length ? (a = new ih(s3), o.push(a)) : a = o[r], a;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: n };
}
const Uv = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Nv = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Fv(s3, e, t) {
  let n = new xl();
  const i = new pe(), r = new pe(), o = new Ke(), a = new If({ depthPacking: Md }), l = new Lf(), c = {}, h = t.maxTextureSize, u = { [kn]: Rt, [Rt]: kn, [xn]: xn }, d = new kt({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new pe() }, radius: { value: 4 } }, vertexShader: Uv, fragmentShader: Nv }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const _ = new en();
  _.setAttribute("position", new Nt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const g = new tt(_, d), m = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Eh;
  let f = this.type;
  this.render = function(w, C, N) {
    if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || w.length === 0) return;
    const M = s3.getRenderTarget(), y = s3.getActiveCubeFace(), I = s3.getActiveMipmapLevel(), q = s3.state;
    q.setBlending(On), q.buffers.color.setClear(1, 1, 1, 1), q.buffers.depth.setTest(true), q.setScissorTest(false);
    const z = f !== In && this.type === In, X = f === In && this.type !== In;
    for (let J = 0, G = w.length; J < G; J++) {
      const te = w[J], V = te.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", te, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === false && V.needsUpdate === false) continue;
      i.copy(V.mapSize);
      const oe = V.getFrameExtents();
      if (i.multiply(oe), r.copy(V.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / oe.x), i.x = r.x * oe.x, V.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / oe.y), i.y = r.y * oe.y, V.mapSize.y = r.y)), V.map === null || z === true || X === true) {
        const Se = this.type !== In ? { minFilter: Ut, magFilter: Ut } : {};
        V.map !== null && V.map.dispose(), V.map = new Qt(i.x, i.y, Se), V.map.texture.name = te.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      s3.setRenderTarget(V.map), s3.clear();
      const de = V.getViewportCount();
      for (let Se = 0; Se < de; Se++) {
        const Be = V.getViewport(Se);
        o.set(r.x * Be.x, r.y * Be.y, r.x * Be.z, r.y * Be.w), q.viewport(o), V.updateMatrices(te, Se), n = V.getFrustum(), S(C, N, V.camera, te, this.type);
      }
      V.isPointLightShadow !== true && this.type === In && T(V, N), V.needsUpdate = false;
    }
    f = this.type, m.needsUpdate = false, s3.setRenderTarget(M, y, I);
  };
  function T(w, C) {
    const N = e.update(g);
    d.defines.VSM_SAMPLES !== w.blurSamples && (d.defines.VSM_SAMPLES = w.blurSamples, p.defines.VSM_SAMPLES = w.blurSamples, d.needsUpdate = true, p.needsUpdate = true), w.mapPass === null && (w.mapPass = new Qt(i.x, i.y)), d.uniforms.shadow_pass.value = w.map.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, s3.setRenderTarget(w.mapPass), s3.clear(), s3.renderBufferDirect(C, null, N, d, g, null), p.uniforms.shadow_pass.value = w.mapPass.texture, p.uniforms.resolution.value = w.mapSize, p.uniforms.radius.value = w.radius, s3.setRenderTarget(w.map), s3.clear(), s3.renderBufferDirect(C, null, N, p, g, null);
  }
  function E(w, C, N, M) {
    let y = null;
    const I = N.isPointLight === true ? w.customDistanceMaterial : w.customDepthMaterial;
    if (I !== void 0) y = I;
    else if (y = N.isPointLight === true ? l : a, s3.localClippingEnabled && C.clipShadows === true && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
      const q = y.uuid, z = C.uuid;
      let X = c[q];
      X === void 0 && (X = {}, c[q] = X);
      let J = X[z];
      J === void 0 && (J = y.clone(), X[z] = J, C.addEventListener("dispose", P)), y = J;
    }
    if (y.visible = C.visible, y.wireframe = C.wireframe, M === In ? y.side = C.shadowSide !== null ? C.shadowSide : C.side : y.side = C.shadowSide !== null ? C.shadowSide : u[C.side], y.alphaMap = C.alphaMap, y.alphaTest = C.alphaTest, y.map = C.map, y.clipShadows = C.clipShadows, y.clippingPlanes = C.clippingPlanes, y.clipIntersection = C.clipIntersection, y.displacementMap = C.displacementMap, y.displacementScale = C.displacementScale, y.displacementBias = C.displacementBias, y.wireframeLinewidth = C.wireframeLinewidth, y.linewidth = C.linewidth, N.isPointLight === true && y.isMeshDistanceMaterial === true) {
      const q = s3.properties.get(y);
      q.light = N;
    }
    return y;
  }
  function S(w, C, N, M, y) {
    if (w.visible === false) return;
    if (w.layers.test(C.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && y === In) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, w.matrixWorld);
      const z = e.update(w), X = w.material;
      if (Array.isArray(X)) {
        const J = z.groups;
        for (let G = 0, te = J.length; G < te; G++) {
          const V = J[G], oe = X[V.materialIndex];
          if (oe && oe.visible) {
            const de = E(w, oe, M, y);
            w.onBeforeShadow(s3, w, C, N, z, de, V), s3.renderBufferDirect(N, null, z, de, w, V), w.onAfterShadow(s3, w, C, N, z, de, V);
          }
        }
      } else if (X.visible) {
        const J = E(w, X, M, y);
        w.onBeforeShadow(s3, w, C, N, z, J, null), s3.renderBufferDirect(N, null, z, J, w, null), w.onAfterShadow(s3, w, C, N, z, J, null);
      }
    }
    const q = w.children;
    for (let z = 0, X = q.length; z < X; z++) S(q[z], C, N, M, y);
  }
  function P(w) {
    w.target.removeEventListener("dispose", P);
    for (const N in c) {
      const M = c[N], y = w.target.uuid;
      y in M && (M[y].dispose(), delete M[y]);
    }
  }
}
const Ov = { [ha]: ua, [da]: ma, [fa]: _a, [ss]: pa, [ua]: ha, [ma]: da, [_a]: fa, [pa]: ss };
function Bv(s3, e) {
  function t() {
    let L = false;
    const se = new Ke();
    let H = null;
    const $ = new Ke(0, 0, 0, 0);
    return { setMask: function(he) {
      H !== he && !L && (s3.colorMask(he, he, he, he), H = he);
    }, setLocked: function(he) {
      L = he;
    }, setClear: function(he, ce, De, ut, Tt) {
      Tt === true && (he *= ut, ce *= ut, De *= ut), se.set(he, ce, De, ut), $.equals(se) === false && (s3.clearColor(he, ce, De, ut), $.copy(se));
    }, reset: function() {
      L = false, H = null, $.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let L = false, se = false, H = null, $ = null, he = null;
    return { setReversed: function(ce) {
      if (se !== ce) {
        const De = e.get("EXT_clip_control");
        se ? De.clipControlEXT(De.LOWER_LEFT_EXT, De.ZERO_TO_ONE_EXT) : De.clipControlEXT(De.LOWER_LEFT_EXT, De.NEGATIVE_ONE_TO_ONE_EXT);
        const ut = he;
        he = null, this.setClear(ut);
      }
      se = ce;
    }, getReversed: function() {
      return se;
    }, setTest: function(ce) {
      ce ? ae(s3.DEPTH_TEST) : we(s3.DEPTH_TEST);
    }, setMask: function(ce) {
      H !== ce && !L && (s3.depthMask(ce), H = ce);
    }, setFunc: function(ce) {
      if (se && (ce = Ov[ce]), $ !== ce) {
        switch (ce) {
          case ha:
            s3.depthFunc(s3.NEVER);
            break;
          case ua:
            s3.depthFunc(s3.ALWAYS);
            break;
          case da:
            s3.depthFunc(s3.LESS);
            break;
          case ss:
            s3.depthFunc(s3.LEQUAL);
            break;
          case fa:
            s3.depthFunc(s3.EQUAL);
            break;
          case pa:
            s3.depthFunc(s3.GEQUAL);
            break;
          case ma:
            s3.depthFunc(s3.GREATER);
            break;
          case _a:
            s3.depthFunc(s3.NOTEQUAL);
            break;
          default:
            s3.depthFunc(s3.LEQUAL);
        }
        $ = ce;
      }
    }, setLocked: function(ce) {
      L = ce;
    }, setClear: function(ce) {
      he !== ce && (se && (ce = 1 - ce), s3.clearDepth(ce), he = ce);
    }, reset: function() {
      L = false, H = null, $ = null, he = null, se = false;
    } };
  }
  function i() {
    let L = false, se = null, H = null, $ = null, he = null, ce = null, De = null, ut = null, Tt = null;
    return { setTest: function(Qe) {
      L || (Qe ? ae(s3.STENCIL_TEST) : we(s3.STENCIL_TEST));
    }, setMask: function(Qe) {
      se !== Qe && !L && (s3.stencilMask(Qe), se = Qe);
    }, setFunc: function(Qe, nn, En) {
      (H !== Qe || $ !== nn || he !== En) && (s3.stencilFunc(Qe, nn, En), H = Qe, $ = nn, he = En);
    }, setOp: function(Qe, nn, En) {
      (ce !== Qe || De !== nn || ut !== En) && (s3.stencilOp(Qe, nn, En), ce = Qe, De = nn, ut = En);
    }, setLocked: function(Qe) {
      L = Qe;
    }, setClear: function(Qe) {
      Tt !== Qe && (s3.clearStencil(Qe), Tt = Qe);
    }, reset: function() {
      L = false, se = null, H = null, $ = null, he = null, ce = null, De = null, ut = null, Tt = null;
    } };
  }
  const r = new t(), o = new n(), a = new i(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), p = [], _ = null, g = false, m = null, f = null, T = null, E = null, S = null, P = null, w = null, C = new Ee(0, 0, 0), N = 0, M = false, y = null, I = null, q = null, z = null, X = null;
  const J = s3.getParameter(s3.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let G = false, te = 0;
  const V = s3.getParameter(s3.VERSION);
  V.indexOf("WebGL") !== -1 ? (te = parseFloat(/^WebGL (\d)/.exec(V)[1]), G = te >= 1) : V.indexOf("OpenGL ES") !== -1 && (te = parseFloat(/^OpenGL ES (\d)/.exec(V)[1]), G = te >= 2);
  let oe = null, de = {};
  const Se = s3.getParameter(s3.SCISSOR_BOX), Be = s3.getParameter(s3.VIEWPORT), st = new Ke().fromArray(Se), Y = new Ke().fromArray(Be);
  function ne(L, se, H, $) {
    const he = new Uint8Array(4), ce = s3.createTexture();
    s3.bindTexture(L, ce), s3.texParameteri(L, s3.TEXTURE_MIN_FILTER, s3.NEAREST), s3.texParameteri(L, s3.TEXTURE_MAG_FILTER, s3.NEAREST);
    for (let De = 0; De < H; De++) L === s3.TEXTURE_3D || L === s3.TEXTURE_2D_ARRAY ? s3.texImage3D(se, 0, s3.RGBA, 1, 1, $, 0, s3.RGBA, s3.UNSIGNED_BYTE, he) : s3.texImage2D(se + De, 0, s3.RGBA, 1, 1, 0, s3.RGBA, s3.UNSIGNED_BYTE, he);
    return ce;
  }
  const ve = {};
  ve[s3.TEXTURE_2D] = ne(s3.TEXTURE_2D, s3.TEXTURE_2D, 1), ve[s3.TEXTURE_CUBE_MAP] = ne(s3.TEXTURE_CUBE_MAP, s3.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ve[s3.TEXTURE_2D_ARRAY] = ne(s3.TEXTURE_2D_ARRAY, s3.TEXTURE_2D_ARRAY, 1, 1), ve[s3.TEXTURE_3D] = ne(s3.TEXTURE_3D, s3.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), ae(s3.DEPTH_TEST), o.setFunc(ss), He(false), Ve(zl), ae(s3.CULL_FACE), A(On);
  function ae(L) {
    h[L] !== true && (s3.enable(L), h[L] = true);
  }
  function we(L) {
    h[L] !== false && (s3.disable(L), h[L] = false);
  }
  function Pe(L, se) {
    return u[L] !== se ? (s3.bindFramebuffer(L, se), u[L] = se, L === s3.DRAW_FRAMEBUFFER && (u[s3.FRAMEBUFFER] = se), L === s3.FRAMEBUFFER && (u[s3.DRAW_FRAMEBUFFER] = se), true) : false;
  }
  function ke(L, se) {
    let H = p, $ = false;
    if (L) {
      H = d.get(se), H === void 0 && (H = [], d.set(se, H));
      const he = L.textures;
      if (H.length !== he.length || H[0] !== s3.COLOR_ATTACHMENT0) {
        for (let ce = 0, De = he.length; ce < De; ce++) H[ce] = s3.COLOR_ATTACHMENT0 + ce;
        H.length = he.length, $ = true;
      }
    } else H[0] !== s3.BACK && (H[0] = s3.BACK, $ = true);
    $ && s3.drawBuffers(H);
  }
  function ht(L) {
    return _ !== L ? (s3.useProgram(L), _ = L, true) : false;
  }
  const Xe = { [gi]: s3.FUNC_ADD, [Xu]: s3.FUNC_SUBTRACT, [Yu]: s3.FUNC_REVERSE_SUBTRACT };
  Xe[qu] = s3.MIN, Xe[ju] = s3.MAX;
  const ft = { [Ku]: s3.ZERO, [$u]: s3.ONE, [Zu]: s3.SRC_COLOR, [la]: s3.SRC_ALPHA, [id]: s3.SRC_ALPHA_SATURATE, [td]: s3.DST_COLOR, [Qu]: s3.DST_ALPHA, [Ju]: s3.ONE_MINUS_SRC_COLOR, [ca]: s3.ONE_MINUS_SRC_ALPHA, [nd]: s3.ONE_MINUS_DST_COLOR, [ed]: s3.ONE_MINUS_DST_ALPHA, [sd]: s3.CONSTANT_COLOR, [rd]: s3.ONE_MINUS_CONSTANT_COLOR, [od]: s3.CONSTANT_ALPHA, [ad]: s3.ONE_MINUS_CONSTANT_ALPHA };
  function A(L, se, H, $, he, ce, De, ut, Tt, Qe) {
    if (L === On) {
      g === true && (we(s3.BLEND), g = false);
      return;
    }
    if (g === false && (ae(s3.BLEND), g = true), L !== Wu) {
      if (L !== m || Qe !== M) {
        if ((f !== gi || S !== gi) && (s3.blendEquation(s3.FUNC_ADD), f = gi, S = gi), Qe) switch (L) {
          case Qi:
            s3.blendFuncSeparate(s3.ONE, s3.ONE_MINUS_SRC_ALPHA, s3.ONE, s3.ONE_MINUS_SRC_ALPHA);
            break;
          case aa:
            s3.blendFunc(s3.ONE, s3.ONE);
            break;
          case Hl:
            s3.blendFuncSeparate(s3.ZERO, s3.ONE_MINUS_SRC_COLOR, s3.ZERO, s3.ONE);
            break;
          case Vl:
            s3.blendFuncSeparate(s3.ZERO, s3.SRC_COLOR, s3.ZERO, s3.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", L);
            break;
        }
        else switch (L) {
          case Qi:
            s3.blendFuncSeparate(s3.SRC_ALPHA, s3.ONE_MINUS_SRC_ALPHA, s3.ONE, s3.ONE_MINUS_SRC_ALPHA);
            break;
          case aa:
            s3.blendFunc(s3.SRC_ALPHA, s3.ONE);
            break;
          case Hl:
            s3.blendFuncSeparate(s3.ZERO, s3.ONE_MINUS_SRC_COLOR, s3.ZERO, s3.ONE);
            break;
          case Vl:
            s3.blendFunc(s3.ZERO, s3.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", L);
            break;
        }
        T = null, E = null, P = null, w = null, C.set(0, 0, 0), N = 0, m = L, M = Qe;
      }
      return;
    }
    he = he || se, ce = ce || H, De = De || $, (se !== f || he !== S) && (s3.blendEquationSeparate(Xe[se], Xe[he]), f = se, S = he), (H !== T || $ !== E || ce !== P || De !== w) && (s3.blendFuncSeparate(ft[H], ft[$], ft[ce], ft[De]), T = H, E = $, P = ce, w = De), (ut.equals(C) === false || Tt !== N) && (s3.blendColor(ut.r, ut.g, ut.b, Tt), C.copy(ut), N = Tt), m = L, M = false;
  }
  function qt(L, se) {
    L.side === xn ? we(s3.CULL_FACE) : ae(s3.CULL_FACE);
    let H = L.side === Rt;
    se && (H = !H), He(H), L.blending === Qi && L.transparent === false ? A(On) : A(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), o.setFunc(L.depthFunc), o.setTest(L.depthTest), o.setMask(L.depthWrite), r.setMask(L.colorWrite);
    const $ = L.stencilWrite;
    a.setTest($), $ && (a.setMask(L.stencilWriteMask), a.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), a.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), at(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === true ? ae(s3.SAMPLE_ALPHA_TO_COVERAGE) : we(s3.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function He(L) {
    y !== L && (L ? s3.frontFace(s3.CW) : s3.frontFace(s3.CCW), y = L);
  }
  function Ve(L) {
    L !== Hu ? (ae(s3.CULL_FACE), L !== I && (L === zl ? s3.cullFace(s3.BACK) : L === Vu ? s3.cullFace(s3.FRONT) : s3.cullFace(s3.FRONT_AND_BACK))) : we(s3.CULL_FACE), I = L;
  }
  function Me(L) {
    L !== q && (G && s3.lineWidth(L), q = L);
  }
  function at(L, se, H) {
    L ? (ae(s3.POLYGON_OFFSET_FILL), (z !== se || X !== H) && (s3.polygonOffset(se, H), z = se, X = H)) : we(s3.POLYGON_OFFSET_FILL);
  }
  function ye(L) {
    L ? ae(s3.SCISSOR_TEST) : we(s3.SCISSOR_TEST);
  }
  function b(L) {
    L === void 0 && (L = s3.TEXTURE0 + J - 1), oe !== L && (s3.activeTexture(L), oe = L);
  }
  function v(L, se, H) {
    H === void 0 && (oe === null ? H = s3.TEXTURE0 + J - 1 : H = oe);
    let $ = de[H];
    $ === void 0 && ($ = { type: void 0, texture: void 0 }, de[H] = $), ($.type !== L || $.texture !== se) && (oe !== H && (s3.activeTexture(H), oe = H), s3.bindTexture(L, se || ve[L]), $.type = L, $.texture = se);
  }
  function F() {
    const L = de[oe];
    L !== void 0 && L.type !== void 0 && (s3.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function K() {
    try {
      s3.compressedTexImage2D.apply(s3, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Z() {
    try {
      s3.compressedTexImage3D.apply(s3, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function W() {
    try {
      s3.texSubImage2D.apply(s3, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function xe() {
    try {
      s3.texSubImage3D.apply(s3, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function le() {
    try {
      s3.compressedTexSubImage2D.apply(s3, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function fe() {
    try {
      s3.compressedTexSubImage3D.apply(s3, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ye() {
    try {
      s3.texStorage2D.apply(s3, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ee() {
    try {
      s3.texStorage3D.apply(s3, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function me() {
    try {
      s3.texImage2D.apply(s3, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ae() {
    try {
      s3.texImage3D.apply(s3, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Re(L) {
    st.equals(L) === false && (s3.scissor(L.x, L.y, L.z, L.w), st.copy(L));
  }
  function _e(L) {
    Y.equals(L) === false && (s3.viewport(L.x, L.y, L.z, L.w), Y.copy(L));
  }
  function Ge(L, se) {
    let H = c.get(se);
    H === void 0 && (H = /* @__PURE__ */ new WeakMap(), c.set(se, H));
    let $ = H.get(L);
    $ === void 0 && ($ = s3.getUniformBlockIndex(se, L.name), H.set(L, $));
  }
  function Ne(L, se) {
    const $ = c.get(se).get(L);
    l.get(se) !== $ && (s3.uniformBlockBinding(se, $, L.__bindingPointIndex), l.set(se, $));
  }
  function rt() {
    s3.disable(s3.BLEND), s3.disable(s3.CULL_FACE), s3.disable(s3.DEPTH_TEST), s3.disable(s3.POLYGON_OFFSET_FILL), s3.disable(s3.SCISSOR_TEST), s3.disable(s3.STENCIL_TEST), s3.disable(s3.SAMPLE_ALPHA_TO_COVERAGE), s3.blendEquation(s3.FUNC_ADD), s3.blendFunc(s3.ONE, s3.ZERO), s3.blendFuncSeparate(s3.ONE, s3.ZERO, s3.ONE, s3.ZERO), s3.blendColor(0, 0, 0, 0), s3.colorMask(true, true, true, true), s3.clearColor(0, 0, 0, 0), s3.depthMask(true), s3.depthFunc(s3.LESS), o.setReversed(false), s3.clearDepth(1), s3.stencilMask(4294967295), s3.stencilFunc(s3.ALWAYS, 0, 4294967295), s3.stencilOp(s3.KEEP, s3.KEEP, s3.KEEP), s3.clearStencil(0), s3.cullFace(s3.BACK), s3.frontFace(s3.CCW), s3.polygonOffset(0, 0), s3.activeTexture(s3.TEXTURE0), s3.bindFramebuffer(s3.FRAMEBUFFER, null), s3.bindFramebuffer(s3.DRAW_FRAMEBUFFER, null), s3.bindFramebuffer(s3.READ_FRAMEBUFFER, null), s3.useProgram(null), s3.lineWidth(1), s3.scissor(0, 0, s3.canvas.width, s3.canvas.height), s3.viewport(0, 0, s3.canvas.width, s3.canvas.height), h = {}, oe = null, de = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), p = [], _ = null, g = false, m = null, f = null, T = null, E = null, S = null, P = null, w = null, C = new Ee(0, 0, 0), N = 0, M = false, y = null, I = null, q = null, z = null, X = null, st.set(0, 0, s3.canvas.width, s3.canvas.height), Y.set(0, 0, s3.canvas.width, s3.canvas.height), r.reset(), o.reset(), a.reset();
  }
  return { buffers: { color: r, depth: o, stencil: a }, enable: ae, disable: we, bindFramebuffer: Pe, drawBuffers: ke, useProgram: ht, setBlending: A, setMaterial: qt, setFlipSided: He, setCullFace: Ve, setLineWidth: Me, setPolygonOffset: at, setScissorTest: ye, activeTexture: b, bindTexture: v, unbindTexture: F, compressedTexImage2D: K, compressedTexImage3D: Z, texImage2D: me, texImage3D: Ae, updateUBOMapping: Ge, uniformBlockBinding: Ne, texStorage2D: Ye, texStorage3D: ee, texSubImage2D: W, texSubImage3D: xe, compressedTexSubImage2D: le, compressedTexSubImage3D: fe, scissor: Re, viewport: _e, reset: rt };
}
function kv(s3, e, t, n, i, r, o) {
  const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new pe(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let p = false;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(b, v) {
    return p ? new OffscreenCanvas(b, v) : Zs("canvas");
  }
  function g(b, v, F) {
    let K = 1;
    const Z = ye(b);
    if ((Z.width > F || Z.height > F) && (K = F / Math.max(Z.width, Z.height)), K < 1) if (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && b instanceof ImageBitmap || typeof VideoFrame < "u" && b instanceof VideoFrame) {
      const W = Math.floor(K * Z.width), xe = Math.floor(K * Z.height);
      u === void 0 && (u = _(W, xe));
      const le = v ? _(W, xe) : u;
      return le.width = W, le.height = xe, le.getContext("2d").drawImage(b, 0, 0, W, xe), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + W + "x" + xe + ")."), le;
    } else return "data" in b && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), b;
    return b;
  }
  function m(b) {
    return b.generateMipmaps;
  }
  function f(b) {
    s3.generateMipmap(b);
  }
  function T(b) {
    return b.isWebGLCubeRenderTarget ? s3.TEXTURE_CUBE_MAP : b.isWebGL3DRenderTarget ? s3.TEXTURE_3D : b.isWebGLArrayRenderTarget || b.isCompressedArrayTexture ? s3.TEXTURE_2D_ARRAY : s3.TEXTURE_2D;
  }
  function E(b, v, F, K, Z = false) {
    if (b !== null) {
      if (s3[b] !== void 0) return s3[b];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + b + "'");
    }
    let W = v;
    if (v === s3.RED && (F === s3.FLOAT && (W = s3.R32F), F === s3.HALF_FLOAT && (W = s3.R16F), F === s3.UNSIGNED_BYTE && (W = s3.R8)), v === s3.RED_INTEGER && (F === s3.UNSIGNED_BYTE && (W = s3.R8UI), F === s3.UNSIGNED_SHORT && (W = s3.R16UI), F === s3.UNSIGNED_INT && (W = s3.R32UI), F === s3.BYTE && (W = s3.R8I), F === s3.SHORT && (W = s3.R16I), F === s3.INT && (W = s3.R32I)), v === s3.RG && (F === s3.FLOAT && (W = s3.RG32F), F === s3.HALF_FLOAT && (W = s3.RG16F), F === s3.UNSIGNED_BYTE && (W = s3.RG8)), v === s3.RG_INTEGER && (F === s3.UNSIGNED_BYTE && (W = s3.RG8UI), F === s3.UNSIGNED_SHORT && (W = s3.RG16UI), F === s3.UNSIGNED_INT && (W = s3.RG32UI), F === s3.BYTE && (W = s3.RG8I), F === s3.SHORT && (W = s3.RG16I), F === s3.INT && (W = s3.RG32I)), v === s3.RGB_INTEGER && (F === s3.UNSIGNED_BYTE && (W = s3.RGB8UI), F === s3.UNSIGNED_SHORT && (W = s3.RGB16UI), F === s3.UNSIGNED_INT && (W = s3.RGB32UI), F === s3.BYTE && (W = s3.RGB8I), F === s3.SHORT && (W = s3.RGB16I), F === s3.INT && (W = s3.RGB32I)), v === s3.RGBA_INTEGER && (F === s3.UNSIGNED_BYTE && (W = s3.RGBA8UI), F === s3.UNSIGNED_SHORT && (W = s3.RGBA16UI), F === s3.UNSIGNED_INT && (W = s3.RGBA32UI), F === s3.BYTE && (W = s3.RGBA8I), F === s3.SHORT && (W = s3.RGBA16I), F === s3.INT && (W = s3.RGBA32I)), v === s3.RGB && F === s3.UNSIGNED_INT_5_9_9_9_REV && (W = s3.RGB9_E5), v === s3.RGBA) {
      const xe = Z ? Zr : We.getTransfer(K);
      F === s3.FLOAT && (W = s3.RGBA32F), F === s3.HALF_FLOAT && (W = s3.RGBA16F), F === s3.UNSIGNED_BYTE && (W = xe === nt ? s3.SRGB8_ALPHA8 : s3.RGBA8), F === s3.UNSIGNED_SHORT_4_4_4_4 && (W = s3.RGBA4), F === s3.UNSIGNED_SHORT_5_5_5_1 && (W = s3.RGB5_A1);
    }
    return (W === s3.R16F || W === s3.R32F || W === s3.RG16F || W === s3.RG32F || W === s3.RGBA16F || W === s3.RGBA32F) && e.get("EXT_color_buffer_float"), W;
  }
  function S(b, v) {
    let F;
    return b ? v === null || v === yi || v === ls ? F = s3.DEPTH24_STENCIL8 : v === cn ? F = s3.DEPTH32F_STENCIL8 : v === js && (F = s3.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === yi || v === ls ? F = s3.DEPTH_COMPONENT24 : v === cn ? F = s3.DEPTH_COMPONENT32F : v === js && (F = s3.DEPTH_COMPONENT16), F;
  }
  function P(b, v) {
    return m(b) === true || b.isFramebufferTexture && b.minFilter !== Ut && b.minFilter !== Wt ? Math.log2(Math.max(v.width, v.height)) + 1 : b.mipmaps !== void 0 && b.mipmaps.length > 0 ? b.mipmaps.length : b.isCompressedTexture && Array.isArray(b.image) ? v.mipmaps.length : 1;
  }
  function w(b) {
    const v = b.target;
    v.removeEventListener("dispose", w), N(v), v.isVideoTexture && h.delete(v);
  }
  function C(b) {
    const v = b.target;
    v.removeEventListener("dispose", C), y(v);
  }
  function N(b) {
    const v = n.get(b);
    if (v.__webglInit === void 0) return;
    const F = b.source, K = d.get(F);
    if (K) {
      const Z = K[v.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && M(b), Object.keys(K).length === 0 && d.delete(F);
    }
    n.remove(b);
  }
  function M(b) {
    const v = n.get(b);
    s3.deleteTexture(v.__webglTexture);
    const F = b.source, K = d.get(F);
    delete K[v.__cacheKey], o.memory.textures--;
  }
  function y(b) {
    const v = n.get(b);
    if (b.depthTexture && (b.depthTexture.dispose(), n.remove(b.depthTexture)), b.isWebGLCubeRenderTarget) for (let K = 0; K < 6; K++) {
      if (Array.isArray(v.__webglFramebuffer[K])) for (let Z = 0; Z < v.__webglFramebuffer[K].length; Z++) s3.deleteFramebuffer(v.__webglFramebuffer[K][Z]);
      else s3.deleteFramebuffer(v.__webglFramebuffer[K]);
      v.__webglDepthbuffer && s3.deleteRenderbuffer(v.__webglDepthbuffer[K]);
    }
    else {
      if (Array.isArray(v.__webglFramebuffer)) for (let K = 0; K < v.__webglFramebuffer.length; K++) s3.deleteFramebuffer(v.__webglFramebuffer[K]);
      else s3.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && s3.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && s3.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer) for (let K = 0; K < v.__webglColorRenderbuffer.length; K++) v.__webglColorRenderbuffer[K] && s3.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);
      v.__webglDepthRenderbuffer && s3.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const F = b.textures;
    for (let K = 0, Z = F.length; K < Z; K++) {
      const W = n.get(F[K]);
      W.__webglTexture && (s3.deleteTexture(W.__webglTexture), o.memory.textures--), n.remove(F[K]);
    }
    n.remove(b);
  }
  let I = 0;
  function q() {
    I = 0;
  }
  function z() {
    const b = I;
    return b >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + b + " texture units while this GPU supports only " + i.maxTextures), I += 1, b;
  }
  function X(b) {
    const v = [];
    return v.push(b.wrapS), v.push(b.wrapT), v.push(b.wrapR || 0), v.push(b.magFilter), v.push(b.minFilter), v.push(b.anisotropy), v.push(b.internalFormat), v.push(b.format), v.push(b.type), v.push(b.generateMipmaps), v.push(b.premultiplyAlpha), v.push(b.flipY), v.push(b.unpackAlignment), v.push(b.colorSpace), v.join();
  }
  function J(b, v) {
    const F = n.get(b);
    if (b.isVideoTexture && Me(b), b.isRenderTargetTexture === false && b.version > 0 && F.__version !== b.version) {
      const K = b.image;
      if (K === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (K.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Y(F, b, v);
        return;
      }
    }
    t.bindTexture(s3.TEXTURE_2D, F.__webglTexture, s3.TEXTURE0 + v);
  }
  function G(b, v) {
    const F = n.get(b);
    if (b.version > 0 && F.__version !== b.version) {
      Y(F, b, v);
      return;
    }
    t.bindTexture(s3.TEXTURE_2D_ARRAY, F.__webglTexture, s3.TEXTURE0 + v);
  }
  function te(b, v) {
    const F = n.get(b);
    if (b.version > 0 && F.__version !== b.version) {
      Y(F, b, v);
      return;
    }
    t.bindTexture(s3.TEXTURE_3D, F.__webglTexture, s3.TEXTURE0 + v);
  }
  function V(b, v) {
    const F = n.get(b);
    if (b.version > 0 && F.__version !== b.version) {
      ne(F, b, v);
      return;
    }
    t.bindTexture(s3.TEXTURE_CUBE_MAP, F.__webglTexture, s3.TEXTURE0 + v);
  }
  const oe = { [as]: s3.REPEAT, [Qn]: s3.CLAMP_TO_EDGE, [Kr]: s3.MIRRORED_REPEAT }, de = { [Ut]: s3.NEAREST, [Rh]: s3.NEAREST_MIPMAP_NEAREST, [ks]: s3.NEAREST_MIPMAP_LINEAR, [Wt]: s3.LINEAR, [Vr]: s3.LINEAR_MIPMAP_NEAREST, [Un]: s3.LINEAR_MIPMAP_LINEAR }, Se = { [Ed]: s3.NEVER, [Pd]: s3.ALWAYS, [Td]: s3.LESS, [Hh]: s3.LEQUAL, [Ad]: s3.EQUAL, [Cd]: s3.GEQUAL, [wd]: s3.GREATER, [Rd]: s3.NOTEQUAL };
  function Be(b, v) {
    if (v.type === cn && e.has("OES_texture_float_linear") === false && (v.magFilter === Wt || v.magFilter === Vr || v.magFilter === ks || v.magFilter === Un || v.minFilter === Wt || v.minFilter === Vr || v.minFilter === ks || v.minFilter === Un) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s3.texParameteri(b, s3.TEXTURE_WRAP_S, oe[v.wrapS]), s3.texParameteri(b, s3.TEXTURE_WRAP_T, oe[v.wrapT]), (b === s3.TEXTURE_3D || b === s3.TEXTURE_2D_ARRAY) && s3.texParameteri(b, s3.TEXTURE_WRAP_R, oe[v.wrapR]), s3.texParameteri(b, s3.TEXTURE_MAG_FILTER, de[v.magFilter]), s3.texParameteri(b, s3.TEXTURE_MIN_FILTER, de[v.minFilter]), v.compareFunction && (s3.texParameteri(b, s3.TEXTURE_COMPARE_MODE, s3.COMPARE_REF_TO_TEXTURE), s3.texParameteri(b, s3.TEXTURE_COMPARE_FUNC, Se[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (v.magFilter === Ut || v.minFilter !== ks && v.minFilter !== Un || v.type === cn && e.has("OES_texture_float_linear") === false) return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        s3.texParameterf(b, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function st(b, v) {
    let F = false;
    b.__webglInit === void 0 && (b.__webglInit = true, v.addEventListener("dispose", w));
    const K = v.source;
    let Z = d.get(K);
    Z === void 0 && (Z = {}, d.set(K, Z));
    const W = X(v);
    if (W !== b.__cacheKey) {
      Z[W] === void 0 && (Z[W] = { texture: s3.createTexture(), usedTimes: 0 }, o.memory.textures++, F = true), Z[W].usedTimes++;
      const xe = Z[b.__cacheKey];
      xe !== void 0 && (Z[b.__cacheKey].usedTimes--, xe.usedTimes === 0 && M(v)), b.__cacheKey = W, b.__webglTexture = Z[W].texture;
    }
    return F;
  }
  function Y(b, v, F) {
    let K = s3.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (K = s3.TEXTURE_2D_ARRAY), v.isData3DTexture && (K = s3.TEXTURE_3D);
    const Z = st(b, v), W = v.source;
    t.bindTexture(K, b.__webglTexture, s3.TEXTURE0 + F);
    const xe = n.get(W);
    if (W.version !== xe.__version || Z === true) {
      t.activeTexture(s3.TEXTURE0 + F);
      const le = We.getPrimaries(We.workingColorSpace), fe = v.colorSpace === Jn ? null : We.getPrimaries(v.colorSpace), Ye = v.colorSpace === Jn || le === fe ? s3.NONE : s3.BROWSER_DEFAULT_WEBGL;
      s3.pixelStorei(s3.UNPACK_FLIP_Y_WEBGL, v.flipY), s3.pixelStorei(s3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), s3.pixelStorei(s3.UNPACK_ALIGNMENT, v.unpackAlignment), s3.pixelStorei(s3.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ye);
      let ee = g(v.image, false, i.maxTextureSize);
      ee = at(v, ee);
      const me = r.convert(v.format, v.colorSpace), Ae = r.convert(v.type);
      let Re = E(v.internalFormat, me, Ae, v.colorSpace, v.isVideoTexture);
      Be(K, v);
      let _e;
      const Ge = v.mipmaps, Ne = v.isVideoTexture !== true, rt = xe.__version === void 0 || Z === true, L = W.dataReady, se = P(v, ee);
      if (v.isDepthTexture) Re = S(v.format === cs, v.type), rt && (Ne ? t.texStorage2D(s3.TEXTURE_2D, 1, Re, ee.width, ee.height) : t.texImage2D(s3.TEXTURE_2D, 0, Re, ee.width, ee.height, 0, me, Ae, null));
      else if (v.isDataTexture) if (Ge.length > 0) {
        Ne && rt && t.texStorage2D(s3.TEXTURE_2D, se, Re, Ge[0].width, Ge[0].height);
        for (let H = 0, $ = Ge.length; H < $; H++) _e = Ge[H], Ne ? L && t.texSubImage2D(s3.TEXTURE_2D, H, 0, 0, _e.width, _e.height, me, Ae, _e.data) : t.texImage2D(s3.TEXTURE_2D, H, Re, _e.width, _e.height, 0, me, Ae, _e.data);
        v.generateMipmaps = false;
      } else Ne ? (rt && t.texStorage2D(s3.TEXTURE_2D, se, Re, ee.width, ee.height), L && t.texSubImage2D(s3.TEXTURE_2D, 0, 0, 0, ee.width, ee.height, me, Ae, ee.data)) : t.texImage2D(s3.TEXTURE_2D, 0, Re, ee.width, ee.height, 0, me, Ae, ee.data);
      else if (v.isCompressedTexture) if (v.isCompressedArrayTexture) {
        Ne && rt && t.texStorage3D(s3.TEXTURE_2D_ARRAY, se, Re, Ge[0].width, Ge[0].height, ee.depth);
        for (let H = 0, $ = Ge.length; H < $; H++) if (_e = Ge[H], v.format !== Xt) if (me !== null) if (Ne) {
          if (L) if (v.layerUpdates.size > 0) {
            const he = Uc(_e.width, _e.height, v.format, v.type);
            for (const ce of v.layerUpdates) {
              const De = _e.data.subarray(ce * he / _e.data.BYTES_PER_ELEMENT, (ce + 1) * he / _e.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(s3.TEXTURE_2D_ARRAY, H, 0, 0, ce, _e.width, _e.height, 1, me, De);
            }
            v.clearLayerUpdates();
          } else t.compressedTexSubImage3D(s3.TEXTURE_2D_ARRAY, H, 0, 0, 0, _e.width, _e.height, ee.depth, me, _e.data);
        } else t.compressedTexImage3D(s3.TEXTURE_2D_ARRAY, H, Re, _e.width, _e.height, ee.depth, 0, _e.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else Ne ? L && t.texSubImage3D(s3.TEXTURE_2D_ARRAY, H, 0, 0, 0, _e.width, _e.height, ee.depth, me, Ae, _e.data) : t.texImage3D(s3.TEXTURE_2D_ARRAY, H, Re, _e.width, _e.height, ee.depth, 0, me, Ae, _e.data);
      } else {
        Ne && rt && t.texStorage2D(s3.TEXTURE_2D, se, Re, Ge[0].width, Ge[0].height);
        for (let H = 0, $ = Ge.length; H < $; H++) _e = Ge[H], v.format !== Xt ? me !== null ? Ne ? L && t.compressedTexSubImage2D(s3.TEXTURE_2D, H, 0, 0, _e.width, _e.height, me, _e.data) : t.compressedTexImage2D(s3.TEXTURE_2D, H, Re, _e.width, _e.height, 0, _e.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ne ? L && t.texSubImage2D(s3.TEXTURE_2D, H, 0, 0, _e.width, _e.height, me, Ae, _e.data) : t.texImage2D(s3.TEXTURE_2D, H, Re, _e.width, _e.height, 0, me, Ae, _e.data);
      }
      else if (v.isDataArrayTexture) if (Ne) {
        if (rt && t.texStorage3D(s3.TEXTURE_2D_ARRAY, se, Re, ee.width, ee.height, ee.depth), L) if (v.layerUpdates.size > 0) {
          const H = Uc(ee.width, ee.height, v.format, v.type);
          for (const $ of v.layerUpdates) {
            const he = ee.data.subarray($ * H / ee.data.BYTES_PER_ELEMENT, ($ + 1) * H / ee.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(s3.TEXTURE_2D_ARRAY, 0, 0, 0, $, ee.width, ee.height, 1, me, Ae, he);
          }
          v.clearLayerUpdates();
        } else t.texSubImage3D(s3.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ee.width, ee.height, ee.depth, me, Ae, ee.data);
      } else t.texImage3D(s3.TEXTURE_2D_ARRAY, 0, Re, ee.width, ee.height, ee.depth, 0, me, Ae, ee.data);
      else if (v.isData3DTexture) Ne ? (rt && t.texStorage3D(s3.TEXTURE_3D, se, Re, ee.width, ee.height, ee.depth), L && t.texSubImage3D(s3.TEXTURE_3D, 0, 0, 0, 0, ee.width, ee.height, ee.depth, me, Ae, ee.data)) : t.texImage3D(s3.TEXTURE_3D, 0, Re, ee.width, ee.height, ee.depth, 0, me, Ae, ee.data);
      else if (v.isFramebufferTexture) {
        if (rt) if (Ne) t.texStorage2D(s3.TEXTURE_2D, se, Re, ee.width, ee.height);
        else {
          let H = ee.width, $ = ee.height;
          for (let he = 0; he < se; he++) t.texImage2D(s3.TEXTURE_2D, he, Re, H, $, 0, me, Ae, null), H >>= 1, $ >>= 1;
        }
      } else if (Ge.length > 0) {
        if (Ne && rt) {
          const H = ye(Ge[0]);
          t.texStorage2D(s3.TEXTURE_2D, se, Re, H.width, H.height);
        }
        for (let H = 0, $ = Ge.length; H < $; H++) _e = Ge[H], Ne ? L && t.texSubImage2D(s3.TEXTURE_2D, H, 0, 0, me, Ae, _e) : t.texImage2D(s3.TEXTURE_2D, H, Re, me, Ae, _e);
        v.generateMipmaps = false;
      } else if (Ne) {
        if (rt) {
          const H = ye(ee);
          t.texStorage2D(s3.TEXTURE_2D, se, Re, H.width, H.height);
        }
        L && t.texSubImage2D(s3.TEXTURE_2D, 0, 0, 0, me, Ae, ee);
      } else t.texImage2D(s3.TEXTURE_2D, 0, Re, me, Ae, ee);
      m(v) && f(K), xe.__version = W.version, v.onUpdate && v.onUpdate(v);
    }
    b.__version = v.version;
  }
  function ne(b, v, F) {
    if (v.image.length !== 6) return;
    const K = st(b, v), Z = v.source;
    t.bindTexture(s3.TEXTURE_CUBE_MAP, b.__webglTexture, s3.TEXTURE0 + F);
    const W = n.get(Z);
    if (Z.version !== W.__version || K === true) {
      t.activeTexture(s3.TEXTURE0 + F);
      const xe = We.getPrimaries(We.workingColorSpace), le = v.colorSpace === Jn ? null : We.getPrimaries(v.colorSpace), fe = v.colorSpace === Jn || xe === le ? s3.NONE : s3.BROWSER_DEFAULT_WEBGL;
      s3.pixelStorei(s3.UNPACK_FLIP_Y_WEBGL, v.flipY), s3.pixelStorei(s3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), s3.pixelStorei(s3.UNPACK_ALIGNMENT, v.unpackAlignment), s3.pixelStorei(s3.UNPACK_COLORSPACE_CONVERSION_WEBGL, fe);
      const Ye = v.isCompressedTexture || v.image[0].isCompressedTexture, ee = v.image[0] && v.image[0].isDataTexture, me = [];
      for (let $ = 0; $ < 6; $++) !Ye && !ee ? me[$] = g(v.image[$], true, i.maxCubemapSize) : me[$] = ee ? v.image[$].image : v.image[$], me[$] = at(v, me[$]);
      const Ae = me[0], Re = r.convert(v.format, v.colorSpace), _e = r.convert(v.type), Ge = E(v.internalFormat, Re, _e, v.colorSpace), Ne = v.isVideoTexture !== true, rt = W.__version === void 0 || K === true, L = Z.dataReady;
      let se = P(v, Ae);
      Be(s3.TEXTURE_CUBE_MAP, v);
      let H;
      if (Ye) {
        Ne && rt && t.texStorage2D(s3.TEXTURE_CUBE_MAP, se, Ge, Ae.width, Ae.height);
        for (let $ = 0; $ < 6; $++) {
          H = me[$].mipmaps;
          for (let he = 0; he < H.length; he++) {
            const ce = H[he];
            v.format !== Xt ? Re !== null ? Ne ? L && t.compressedTexSubImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he, 0, 0, ce.width, ce.height, Re, ce.data) : t.compressedTexImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he, Ge, ce.width, ce.height, 0, ce.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ne ? L && t.texSubImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he, 0, 0, ce.width, ce.height, Re, _e, ce.data) : t.texImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he, Ge, ce.width, ce.height, 0, Re, _e, ce.data);
          }
        }
      } else {
        if (H = v.mipmaps, Ne && rt) {
          H.length > 0 && se++;
          const $ = ye(me[0]);
          t.texStorage2D(s3.TEXTURE_CUBE_MAP, se, Ge, $.width, $.height);
        }
        for (let $ = 0; $ < 6; $++) if (ee) {
          Ne ? L && t.texSubImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, me[$].width, me[$].height, Re, _e, me[$].data) : t.texImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Ge, me[$].width, me[$].height, 0, Re, _e, me[$].data);
          for (let he = 0; he < H.length; he++) {
            const De = H[he].image[$].image;
            Ne ? L && t.texSubImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he + 1, 0, 0, De.width, De.height, Re, _e, De.data) : t.texImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he + 1, Ge, De.width, De.height, 0, Re, _e, De.data);
          }
        } else {
          Ne ? L && t.texSubImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, Re, _e, me[$]) : t.texImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Ge, Re, _e, me[$]);
          for (let he = 0; he < H.length; he++) {
            const ce = H[he];
            Ne ? L && t.texSubImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he + 1, 0, 0, Re, _e, ce.image[$]) : t.texImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he + 1, Ge, Re, _e, ce.image[$]);
          }
        }
      }
      m(v) && f(s3.TEXTURE_CUBE_MAP), W.__version = Z.version, v.onUpdate && v.onUpdate(v);
    }
    b.__version = v.version;
  }
  function ve(b, v, F, K, Z, W) {
    const xe = r.convert(F.format, F.colorSpace), le = r.convert(F.type), fe = E(F.internalFormat, xe, le, F.colorSpace), Ye = n.get(v), ee = n.get(F);
    if (ee.__renderTarget = v, !Ye.__hasExternalTextures) {
      const me = Math.max(1, v.width >> W), Ae = Math.max(1, v.height >> W);
      Z === s3.TEXTURE_3D || Z === s3.TEXTURE_2D_ARRAY ? t.texImage3D(Z, W, fe, me, Ae, v.depth, 0, xe, le, null) : t.texImage2D(Z, W, fe, me, Ae, 0, xe, le, null);
    }
    t.bindFramebuffer(s3.FRAMEBUFFER, b), Ve(v) ? a.framebufferTexture2DMultisampleEXT(s3.FRAMEBUFFER, K, Z, ee.__webglTexture, 0, He(v)) : (Z === s3.TEXTURE_2D || Z >= s3.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= s3.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s3.framebufferTexture2D(s3.FRAMEBUFFER, K, Z, ee.__webglTexture, W), t.bindFramebuffer(s3.FRAMEBUFFER, null);
  }
  function ae(b, v, F) {
    if (s3.bindRenderbuffer(s3.RENDERBUFFER, b), v.depthBuffer) {
      const K = v.depthTexture, Z = K && K.isDepthTexture ? K.type : null, W = S(v.stencilBuffer, Z), xe = v.stencilBuffer ? s3.DEPTH_STENCIL_ATTACHMENT : s3.DEPTH_ATTACHMENT, le = He(v);
      Ve(v) ? a.renderbufferStorageMultisampleEXT(s3.RENDERBUFFER, le, W, v.width, v.height) : F ? s3.renderbufferStorageMultisample(s3.RENDERBUFFER, le, W, v.width, v.height) : s3.renderbufferStorage(s3.RENDERBUFFER, W, v.width, v.height), s3.framebufferRenderbuffer(s3.FRAMEBUFFER, xe, s3.RENDERBUFFER, b);
    } else {
      const K = v.textures;
      for (let Z = 0; Z < K.length; Z++) {
        const W = K[Z], xe = r.convert(W.format, W.colorSpace), le = r.convert(W.type), fe = E(W.internalFormat, xe, le, W.colorSpace), Ye = He(v);
        F && Ve(v) === false ? s3.renderbufferStorageMultisample(s3.RENDERBUFFER, Ye, fe, v.width, v.height) : Ve(v) ? a.renderbufferStorageMultisampleEXT(s3.RENDERBUFFER, Ye, fe, v.width, v.height) : s3.renderbufferStorage(s3.RENDERBUFFER, fe, v.width, v.height);
      }
    }
    s3.bindRenderbuffer(s3.RENDERBUFFER, null);
  }
  function we(b, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s3.FRAMEBUFFER, b), !(v.depthTexture && v.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const K = n.get(v.depthTexture);
    K.__renderTarget = v, (!K.__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = true), J(v.depthTexture, 0);
    const Z = K.__webglTexture, W = He(v);
    if (v.depthTexture.format === es) Ve(v) ? a.framebufferTexture2DMultisampleEXT(s3.FRAMEBUFFER, s3.DEPTH_ATTACHMENT, s3.TEXTURE_2D, Z, 0, W) : s3.framebufferTexture2D(s3.FRAMEBUFFER, s3.DEPTH_ATTACHMENT, s3.TEXTURE_2D, Z, 0);
    else if (v.depthTexture.format === cs) Ve(v) ? a.framebufferTexture2DMultisampleEXT(s3.FRAMEBUFFER, s3.DEPTH_STENCIL_ATTACHMENT, s3.TEXTURE_2D, Z, 0, W) : s3.framebufferTexture2D(s3.FRAMEBUFFER, s3.DEPTH_STENCIL_ATTACHMENT, s3.TEXTURE_2D, Z, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Pe(b) {
    const v = n.get(b), F = b.isWebGLCubeRenderTarget === true;
    if (v.__boundDepthTexture !== b.depthTexture) {
      const K = b.depthTexture;
      if (v.__depthDisposeCallback && v.__depthDisposeCallback(), K) {
        const Z = () => {
          delete v.__boundDepthTexture, delete v.__depthDisposeCallback, K.removeEventListener("dispose", Z);
        };
        K.addEventListener("dispose", Z), v.__depthDisposeCallback = Z;
      }
      v.__boundDepthTexture = K;
    }
    if (b.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      we(v.__webglFramebuffer, b);
    } else if (F) {
      v.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++) if (t.bindFramebuffer(s3.FRAMEBUFFER, v.__webglFramebuffer[K]), v.__webglDepthbuffer[K] === void 0) v.__webglDepthbuffer[K] = s3.createRenderbuffer(), ae(v.__webglDepthbuffer[K], b, false);
      else {
        const Z = b.stencilBuffer ? s3.DEPTH_STENCIL_ATTACHMENT : s3.DEPTH_ATTACHMENT, W = v.__webglDepthbuffer[K];
        s3.bindRenderbuffer(s3.RENDERBUFFER, W), s3.framebufferRenderbuffer(s3.FRAMEBUFFER, Z, s3.RENDERBUFFER, W);
      }
    } else if (t.bindFramebuffer(s3.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0) v.__webglDepthbuffer = s3.createRenderbuffer(), ae(v.__webglDepthbuffer, b, false);
    else {
      const K = b.stencilBuffer ? s3.DEPTH_STENCIL_ATTACHMENT : s3.DEPTH_ATTACHMENT, Z = v.__webglDepthbuffer;
      s3.bindRenderbuffer(s3.RENDERBUFFER, Z), s3.framebufferRenderbuffer(s3.FRAMEBUFFER, K, s3.RENDERBUFFER, Z);
    }
    t.bindFramebuffer(s3.FRAMEBUFFER, null);
  }
  function ke(b, v, F) {
    const K = n.get(b);
    v !== void 0 && ve(K.__webglFramebuffer, b, b.texture, s3.COLOR_ATTACHMENT0, s3.TEXTURE_2D, 0), F !== void 0 && Pe(b);
  }
  function ht(b) {
    const v = b.texture, F = n.get(b), K = n.get(v);
    b.addEventListener("dispose", C);
    const Z = b.textures, W = b.isWebGLCubeRenderTarget === true, xe = Z.length > 1;
    if (xe || (K.__webglTexture === void 0 && (K.__webglTexture = s3.createTexture()), K.__version = v.version, o.memory.textures++), W) {
      F.__webglFramebuffer = [];
      for (let le = 0; le < 6; le++) if (v.mipmaps && v.mipmaps.length > 0) {
        F.__webglFramebuffer[le] = [];
        for (let fe = 0; fe < v.mipmaps.length; fe++) F.__webglFramebuffer[le][fe] = s3.createFramebuffer();
      } else F.__webglFramebuffer[le] = s3.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let le = 0; le < v.mipmaps.length; le++) F.__webglFramebuffer[le] = s3.createFramebuffer();
      } else F.__webglFramebuffer = s3.createFramebuffer();
      if (xe) for (let le = 0, fe = Z.length; le < fe; le++) {
        const Ye = n.get(Z[le]);
        Ye.__webglTexture === void 0 && (Ye.__webglTexture = s3.createTexture(), o.memory.textures++);
      }
      if (b.samples > 0 && Ve(b) === false) {
        F.__webglMultisampledFramebuffer = s3.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(s3.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let le = 0; le < Z.length; le++) {
          const fe = Z[le];
          F.__webglColorRenderbuffer[le] = s3.createRenderbuffer(), s3.bindRenderbuffer(s3.RENDERBUFFER, F.__webglColorRenderbuffer[le]);
          const Ye = r.convert(fe.format, fe.colorSpace), ee = r.convert(fe.type), me = E(fe.internalFormat, Ye, ee, fe.colorSpace, b.isXRRenderTarget === true), Ae = He(b);
          s3.renderbufferStorageMultisample(s3.RENDERBUFFER, Ae, me, b.width, b.height), s3.framebufferRenderbuffer(s3.FRAMEBUFFER, s3.COLOR_ATTACHMENT0 + le, s3.RENDERBUFFER, F.__webglColorRenderbuffer[le]);
        }
        s3.bindRenderbuffer(s3.RENDERBUFFER, null), b.depthBuffer && (F.__webglDepthRenderbuffer = s3.createRenderbuffer(), ae(F.__webglDepthRenderbuffer, b, true)), t.bindFramebuffer(s3.FRAMEBUFFER, null);
      }
    }
    if (W) {
      t.bindTexture(s3.TEXTURE_CUBE_MAP, K.__webglTexture), Be(s3.TEXTURE_CUBE_MAP, v);
      for (let le = 0; le < 6; le++) if (v.mipmaps && v.mipmaps.length > 0) for (let fe = 0; fe < v.mipmaps.length; fe++) ve(F.__webglFramebuffer[le][fe], b, v, s3.COLOR_ATTACHMENT0, s3.TEXTURE_CUBE_MAP_POSITIVE_X + le, fe);
      else ve(F.__webglFramebuffer[le], b, v, s3.COLOR_ATTACHMENT0, s3.TEXTURE_CUBE_MAP_POSITIVE_X + le, 0);
      m(v) && f(s3.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (xe) {
      for (let le = 0, fe = Z.length; le < fe; le++) {
        const Ye = Z[le], ee = n.get(Ye);
        t.bindTexture(s3.TEXTURE_2D, ee.__webglTexture), Be(s3.TEXTURE_2D, Ye), ve(F.__webglFramebuffer, b, Ye, s3.COLOR_ATTACHMENT0 + le, s3.TEXTURE_2D, 0), m(Ye) && f(s3.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let le = s3.TEXTURE_2D;
      if ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (le = b.isWebGL3DRenderTarget ? s3.TEXTURE_3D : s3.TEXTURE_2D_ARRAY), t.bindTexture(le, K.__webglTexture), Be(le, v), v.mipmaps && v.mipmaps.length > 0) for (let fe = 0; fe < v.mipmaps.length; fe++) ve(F.__webglFramebuffer[fe], b, v, s3.COLOR_ATTACHMENT0, le, fe);
      else ve(F.__webglFramebuffer, b, v, s3.COLOR_ATTACHMENT0, le, 0);
      m(v) && f(le), t.unbindTexture();
    }
    b.depthBuffer && Pe(b);
  }
  function Xe(b) {
    const v = b.textures;
    for (let F = 0, K = v.length; F < K; F++) {
      const Z = v[F];
      if (m(Z)) {
        const W = T(b), xe = n.get(Z).__webglTexture;
        t.bindTexture(W, xe), f(W), t.unbindTexture();
      }
    }
  }
  const ft = [], A = [];
  function qt(b) {
    if (b.samples > 0) {
      if (Ve(b) === false) {
        const v = b.textures, F = b.width, K = b.height;
        let Z = s3.COLOR_BUFFER_BIT;
        const W = b.stencilBuffer ? s3.DEPTH_STENCIL_ATTACHMENT : s3.DEPTH_ATTACHMENT, xe = n.get(b), le = v.length > 1;
        if (le) for (let fe = 0; fe < v.length; fe++) t.bindFramebuffer(s3.FRAMEBUFFER, xe.__webglMultisampledFramebuffer), s3.framebufferRenderbuffer(s3.FRAMEBUFFER, s3.COLOR_ATTACHMENT0 + fe, s3.RENDERBUFFER, null), t.bindFramebuffer(s3.FRAMEBUFFER, xe.__webglFramebuffer), s3.framebufferTexture2D(s3.DRAW_FRAMEBUFFER, s3.COLOR_ATTACHMENT0 + fe, s3.TEXTURE_2D, null, 0);
        t.bindFramebuffer(s3.READ_FRAMEBUFFER, xe.__webglMultisampledFramebuffer), t.bindFramebuffer(s3.DRAW_FRAMEBUFFER, xe.__webglFramebuffer);
        for (let fe = 0; fe < v.length; fe++) {
          if (b.resolveDepthBuffer && (b.depthBuffer && (Z |= s3.DEPTH_BUFFER_BIT), b.stencilBuffer && b.resolveStencilBuffer && (Z |= s3.STENCIL_BUFFER_BIT)), le) {
            s3.framebufferRenderbuffer(s3.READ_FRAMEBUFFER, s3.COLOR_ATTACHMENT0, s3.RENDERBUFFER, xe.__webglColorRenderbuffer[fe]);
            const Ye = n.get(v[fe]).__webglTexture;
            s3.framebufferTexture2D(s3.DRAW_FRAMEBUFFER, s3.COLOR_ATTACHMENT0, s3.TEXTURE_2D, Ye, 0);
          }
          s3.blitFramebuffer(0, 0, F, K, 0, 0, F, K, Z, s3.NEAREST), l === true && (ft.length = 0, A.length = 0, ft.push(s3.COLOR_ATTACHMENT0 + fe), b.depthBuffer && b.resolveDepthBuffer === false && (ft.push(W), A.push(W), s3.invalidateFramebuffer(s3.DRAW_FRAMEBUFFER, A)), s3.invalidateFramebuffer(s3.READ_FRAMEBUFFER, ft));
        }
        if (t.bindFramebuffer(s3.READ_FRAMEBUFFER, null), t.bindFramebuffer(s3.DRAW_FRAMEBUFFER, null), le) for (let fe = 0; fe < v.length; fe++) {
          t.bindFramebuffer(s3.FRAMEBUFFER, xe.__webglMultisampledFramebuffer), s3.framebufferRenderbuffer(s3.FRAMEBUFFER, s3.COLOR_ATTACHMENT0 + fe, s3.RENDERBUFFER, xe.__webglColorRenderbuffer[fe]);
          const Ye = n.get(v[fe]).__webglTexture;
          t.bindFramebuffer(s3.FRAMEBUFFER, xe.__webglFramebuffer), s3.framebufferTexture2D(s3.DRAW_FRAMEBUFFER, s3.COLOR_ATTACHMENT0 + fe, s3.TEXTURE_2D, Ye, 0);
        }
        t.bindFramebuffer(s3.DRAW_FRAMEBUFFER, xe.__webglMultisampledFramebuffer);
      } else if (b.depthBuffer && b.resolveDepthBuffer === false && l) {
        const v = b.stencilBuffer ? s3.DEPTH_STENCIL_ATTACHMENT : s3.DEPTH_ATTACHMENT;
        s3.invalidateFramebuffer(s3.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function He(b) {
    return Math.min(i.maxSamples, b.samples);
  }
  function Ve(b) {
    const v = n.get(b);
    return b.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && v.__useRenderToTexture !== false;
  }
  function Me(b) {
    const v = o.render.frame;
    h.get(b) !== v && (h.set(b, v), b.update());
  }
  function at(b, v) {
    const F = b.colorSpace, K = b.format, Z = b.type;
    return b.isCompressedTexture === true || b.isVideoTexture === true || F !== Ft && F !== Jn && (We.getTransfer(F) === nt ? (K !== Xt || Z !== zn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), v;
  }
  function ye(b) {
    return typeof HTMLImageElement < "u" && b instanceof HTMLImageElement ? (c.width = b.naturalWidth || b.width, c.height = b.naturalHeight || b.height) : typeof VideoFrame < "u" && b instanceof VideoFrame ? (c.width = b.displayWidth, c.height = b.displayHeight) : (c.width = b.width, c.height = b.height), c;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = q, this.setTexture2D = J, this.setTexture2DArray = G, this.setTexture3D = te, this.setTextureCube = V, this.rebindTextures = ke, this.setupRenderTarget = ht, this.updateRenderTargetMipmap = Xe, this.updateMultisampleRenderTarget = qt, this.setupDepthRenderbuffer = Pe, this.setupFrameBufferTexture = ve, this.useMultisampledRTT = Ve;
}
function zv(s3, e) {
  function t(n, i = Jn) {
    let r;
    const o = We.getTransfer(i);
    if (n === zn) return s3.UNSIGNED_BYTE;
    if (n === cl) return s3.UNSIGNED_SHORT_4_4_4_4;
    if (n === hl) return s3.UNSIGNED_SHORT_5_5_5_1;
    if (n === Ih) return s3.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Ch) return s3.BYTE;
    if (n === Ph) return s3.SHORT;
    if (n === js) return s3.UNSIGNED_SHORT;
    if (n === ll) return s3.INT;
    if (n === yi) return s3.UNSIGNED_INT;
    if (n === cn) return s3.FLOAT;
    if (n === yn) return s3.HALF_FLOAT;
    if (n === Lh) return s3.ALPHA;
    if (n === Dh) return s3.RGB;
    if (n === Xt) return s3.RGBA;
    if (n === Uh) return s3.LUMINANCE;
    if (n === Nh) return s3.LUMINANCE_ALPHA;
    if (n === es) return s3.DEPTH_COMPONENT;
    if (n === cs) return s3.DEPTH_STENCIL;
    if (n === ul) return s3.RED;
    if (n === dl) return s3.RED_INTEGER;
    if (n === Fh) return s3.RG;
    if (n === fl) return s3.RG_INTEGER;
    if (n === pl) return s3.RGBA_INTEGER;
    if (n === Gr || n === Wr || n === Xr || n === Yr) if (o === nt) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (n === Gr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === Wr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === Xr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === Yr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (n === Gr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === Wr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === Xr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === Yr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === xa || n === ya || n === Sa || n === Ma) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (n === xa) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === ya) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === Sa) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === Ma) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === ba || n === Ea || n === Ta) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (n === ba || n === Ea) return o === nt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (n === Ta) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === Aa || n === wa || n === Ra || n === Ca || n === Pa || n === Ia || n === La || n === Da || n === Ua || n === Na || n === Fa || n === Oa || n === Ba || n === ka) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (n === Aa) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === wa) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === Ra) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === Ca) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === Pa) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Ia) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === La) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Da) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Ua) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === Na) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === Fa) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Oa) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === Ba) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === ka) return o === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === qr || n === za || n === Ha) if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
      if (n === qr) return o === nt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === za) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === Ha) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === Oh || n === Va || n === Ga || n === Wa) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
      if (n === qr) return r.COMPRESSED_RED_RGTC1_EXT;
      if (n === Va) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === Ga) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === Wa) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === ls ? s3.UNSIGNED_INT_24_8 : s3[n] !== void 0 ? s3[n] : null;
  }
  return { convert: t };
}
const Hv = { type: "move" };
class ta {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ei(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ei(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ei(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new R()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, n) {
    let i = null, r = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = true;
        for (const g of e.hand.values()) {
          const m = t.getJointPose(g, n), f = this._getHandJoint(c, g);
          m !== null && (f.matrix.fromArray(m.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = true, f.jointRadius = m.radius), f.visible = m !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), p = 0.02, _ = 5e-3;
        c.inputState.pinching && d > p + _ ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= p - _ && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, i.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = false, i.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(Hv)));
    }
    return a !== null && (a.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ei();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Vv = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Gv = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Wv {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new vt(), r = e.properties.get(i);
      r.__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new kt({ vertexShader: Vv, fragmentShader: Gv, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new tt(new ao(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Xv extends si {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, o = null, a = "local-floor", l = 1, c = null, h = null, u = null, d = null, p = null, _ = null;
    const g = new Wv(), m = t.getContextAttributes();
    let f = null, T = null;
    const E = [], S = [], P = new pe();
    let w = null;
    const C = new Dt();
    C.viewport = new Ke();
    const N = new Dt();
    N.viewport = new Ke();
    const M = [C, N], y = new Zf();
    let I = null, q = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(Y) {
      let ne = E[Y];
      return ne === void 0 && (ne = new ta(), E[Y] = ne), ne.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let ne = E[Y];
      return ne === void 0 && (ne = new ta(), E[Y] = ne), ne.getGripSpace();
    }, this.getHand = function(Y) {
      let ne = E[Y];
      return ne === void 0 && (ne = new ta(), E[Y] = ne), ne.getHandSpace();
    };
    function z(Y) {
      const ne = S.indexOf(Y.inputSource);
      if (ne === -1) return;
      const ve = E[ne];
      ve !== void 0 && (ve.update(Y.inputSource, Y.frame, c || o), ve.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function X() {
      i.removeEventListener("select", z), i.removeEventListener("selectstart", z), i.removeEventListener("selectend", z), i.removeEventListener("squeeze", z), i.removeEventListener("squeezestart", z), i.removeEventListener("squeezeend", z), i.removeEventListener("end", X), i.removeEventListener("inputsourceschange", J);
      for (let Y = 0; Y < E.length; Y++) {
        const ne = S[Y];
        ne !== null && (S[Y] = null, E[Y].disconnect(ne));
      }
      I = null, q = null, g.reset(), e.setRenderTarget(f), p = null, d = null, u = null, i = null, T = null, st.stop(), n.isPresenting = false, e.setPixelRatio(w), e.setSize(P.width, P.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Y) {
      r = Y, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Y) {
      a = Y, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(Y) {
      c = Y;
    }, this.getBaseLayer = function() {
      return d !== null ? d : p;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(Y) {
      if (i = Y, i !== null) {
        if (f = e.getRenderTarget(), i.addEventListener("select", z), i.addEventListener("selectstart", z), i.addEventListener("selectend", z), i.addEventListener("squeeze", z), i.addEventListener("squeezestart", z), i.addEventListener("squeezeend", z), i.addEventListener("end", X), i.addEventListener("inputsourceschange", J), m.xrCompatible !== true && await t.makeXRCompatible(), w = e.getPixelRatio(), e.getSize(P), i.enabledFeatures !== void 0 && i.enabledFeatures.includes("layers")) {
          let ve = null, ae = null, we = null;
          m.depth && (we = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ve = m.stencil ? cs : es, ae = m.stencil ? ls : yi);
          const Pe = { colorFormat: t.RGBA8, depthFormat: we, scaleFactor: r };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(Pe), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, false), T = new Qt(d.textureWidth, d.textureHeight, { format: Xt, type: zn, depthTexture: new ou(d.textureWidth, d.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, ve), stencilBuffer: m.stencil, colorSpace: e.outputColorSpace, samples: m.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === false });
        } else {
          const ve = { antialias: m.antialias, alpha: true, depth: m.depth, stencil: m.stencil, framebufferScaleFactor: r };
          p = new XRWebGLLayer(i, t, ve), i.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, false), T = new Qt(p.framebufferWidth, p.framebufferHeight, { format: Xt, type: zn, colorSpace: e.outputColorSpace, stencilBuffer: m.stencil });
        }
        T.isXRRenderTarget = true, this.setFoveation(l), c = null, o = await i.requestReferenceSpace(a), st.setContext(i), st.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return g.getDepthTexture();
    };
    function J(Y) {
      for (let ne = 0; ne < Y.removed.length; ne++) {
        const ve = Y.removed[ne], ae = S.indexOf(ve);
        ae >= 0 && (S[ae] = null, E[ae].disconnect(ve));
      }
      for (let ne = 0; ne < Y.added.length; ne++) {
        const ve = Y.added[ne];
        let ae = S.indexOf(ve);
        if (ae === -1) {
          for (let Pe = 0; Pe < E.length; Pe++) if (Pe >= S.length) {
            S.push(ve), ae = Pe;
            break;
          } else if (S[Pe] === null) {
            S[Pe] = ve, ae = Pe;
            break;
          }
          if (ae === -1) break;
        }
        const we = E[ae];
        we && we.connect(ve);
      }
    }
    const G = new R(), te = new R();
    function V(Y, ne, ve) {
      G.setFromMatrixPosition(ne.matrixWorld), te.setFromMatrixPosition(ve.matrixWorld);
      const ae = G.distanceTo(te), we = ne.projectionMatrix.elements, Pe = ve.projectionMatrix.elements, ke = we[14] / (we[10] - 1), ht = we[14] / (we[10] + 1), Xe = (we[9] + 1) / we[5], ft = (we[9] - 1) / we[5], A = (we[8] - 1) / we[0], qt = (Pe[8] + 1) / Pe[0], He = ke * A, Ve = ke * qt, Me = ae / (-A + qt), at = Me * -A;
      if (ne.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(at), Y.translateZ(Me), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), we[10] === -1) Y.projectionMatrix.copy(ne.projectionMatrix), Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);
      else {
        const ye = ke + Me, b = ht + Me, v = He - at, F = Ve + (ae - at), K = Xe * ht / b * ye, Z = ft * ht / b * ye;
        Y.projectionMatrix.makePerspective(v, F, K, Z, ye, b), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function oe(Y, ne) {
      ne === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(ne.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (i === null) return;
      let ne = Y.near, ve = Y.far;
      g.texture !== null && (g.depthNear > 0 && (ne = g.depthNear), g.depthFar > 0 && (ve = g.depthFar)), y.near = N.near = C.near = ne, y.far = N.far = C.far = ve, (I !== y.near || q !== y.far) && (i.updateRenderState({ depthNear: y.near, depthFar: y.far }), I = y.near, q = y.far), C.layers.mask = Y.layers.mask | 2, N.layers.mask = Y.layers.mask | 4, y.layers.mask = C.layers.mask | N.layers.mask;
      const ae = Y.parent, we = y.cameras;
      oe(y, ae);
      for (let Pe = 0; Pe < we.length; Pe++) oe(we[Pe], ae);
      we.length === 2 ? V(y, C, N) : y.projectionMatrix.copy(C.projectionMatrix), de(Y, y, ae);
    };
    function de(Y, ne, ve) {
      ve === null ? Y.matrix.copy(ne.matrixWorld) : (Y.matrix.copy(ve.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(ne.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(true), Y.projectionMatrix.copy(ne.projectionMatrix), Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = hs * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return y;
    }, this.getFoveation = function() {
      if (!(d === null && p === null)) return l;
    }, this.setFoveation = function(Y) {
      l = Y, d !== null && (d.fixedFoveation = Y), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return g.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return g.getMesh(y);
    };
    let Se = null;
    function Be(Y, ne) {
      if (h = ne.getViewerPose(c || o), _ = ne, h !== null) {
        const ve = h.views;
        p !== null && (e.setRenderTargetFramebuffer(T, p.framebuffer), e.setRenderTarget(T));
        let ae = false;
        ve.length !== y.cameras.length && (y.cameras.length = 0, ae = true);
        for (let Pe = 0; Pe < ve.length; Pe++) {
          const ke = ve[Pe];
          let ht = null;
          if (p !== null) ht = p.getViewport(ke);
          else {
            const ft = u.getViewSubImage(d, ke);
            ht = ft.viewport, Pe === 0 && (e.setRenderTargetTextures(T, ft.colorTexture, d.ignoreDepthValues ? void 0 : ft.depthStencilTexture), e.setRenderTarget(T));
          }
          let Xe = M[Pe];
          Xe === void 0 && (Xe = new Dt(), Xe.layers.enable(Pe), Xe.viewport = new Ke(), M[Pe] = Xe), Xe.matrix.fromArray(ke.transform.matrix), Xe.matrix.decompose(Xe.position, Xe.quaternion, Xe.scale), Xe.projectionMatrix.fromArray(ke.projectionMatrix), Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(), Xe.viewport.set(ht.x, ht.y, ht.width, ht.height), Pe === 0 && (y.matrix.copy(Xe.matrix), y.matrix.decompose(y.position, y.quaternion, y.scale)), ae === true && y.cameras.push(Xe);
        }
        const we = i.enabledFeatures;
        if (we && we.includes("depth-sensing")) {
          const Pe = u.getDepthInformation(ve[0]);
          Pe && Pe.isValid && Pe.texture && g.init(e, Pe, i.renderState);
        }
      }
      for (let ve = 0; ve < E.length; ve++) {
        const ae = S[ve], we = E[ve];
        ae !== null && we !== void 0 && we.update(ae, ne, c || o);
      }
      Se && Se(Y, ne), ne.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ne }), _ = null;
    }
    const st = new du();
    st.setAnimationLoop(Be), this.setAnimationLoop = function(Y) {
      Se = Y;
    }, this.dispose = function() {
    };
  }
}
const pi = new Sn(), Yv = new Le();
function qv(s3, e) {
  function t(m, f) {
    m.matrixAutoUpdate === true && m.updateMatrix(), f.value.copy(m.matrix);
  }
  function n(m, f) {
    f.color.getRGB(m.fogColor.value, Kh(s3)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density);
  }
  function i(m, f, T, E, S) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? r(m, f) : f.isMeshToonMaterial ? (r(m, f), u(m, f)) : f.isMeshPhongMaterial ? (r(m, f), h(m, f)) : f.isMeshStandardMaterial ? (r(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, S)) : f.isMeshMatcapMaterial ? (r(m, f), _(m, f)) : f.isMeshDepthMaterial ? r(m, f) : f.isMeshDistanceMaterial ? (r(m, f), g(m, f)) : f.isMeshNormalMaterial ? r(m, f) : f.isLineBasicMaterial ? (o(m, f), f.isLineDashedMaterial && a(m, f)) : f.isPointsMaterial ? l(m, f, T, E) : f.isSpriteMaterial ? c(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = false);
  }
  function r(m, f) {
    m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, t(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === Rt && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, t(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === Rt && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, t(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, t(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    const T = e.get(f), E = T.envMap, S = T.envMapRotation;
    E && (m.envMap.value = E, pi.copy(S), pi.x *= -1, pi.y *= -1, pi.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === false && (pi.y *= -1, pi.z *= -1), m.envMapRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(pi)), m.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === false ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap && (m.lightMap.value = f.lightMap, m.lightMapIntensity.value = f.lightMapIntensity, t(f.lightMap, m.lightMapTransform)), f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, m.aoMapTransform));
  }
  function o(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, t(f.map, m.mapTransform));
  }
  function a(m, f) {
    m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale;
  }
  function l(m, f, T, E) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * T, m.scale.value = E * 0.5, f.map && (m.map.value = f.map, t(f.map, m.uvTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function c(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.rotation.value = f.rotation, f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function h(m, f) {
    m.specular.value.copy(f.specular), m.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function u(m, f) {
    f.gradientMap && (m.gradientMap.value = f.gradientMap);
  }
  function d(m, f) {
    m.metalness.value = f.metalness, f.metalnessMap && (m.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, m.metalnessMapTransform)), m.roughness.value = f.roughness, f.roughnessMap && (m.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, m.roughnessMapTransform)), f.envMap && (m.envMapIntensity.value = f.envMapIntensity);
  }
  function p(m, f, T) {
    m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === Rt && m.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (m.dispersion.value = f.dispersion), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = T.texture, m.transmissionSamplerSize.value.set(T.width, T.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, f) {
    f.matcap && (m.matcap.value = f.matcap);
  }
  function g(m, f) {
    const T = e.get(f).light;
    m.referencePosition.value.setFromMatrixPosition(T.matrixWorld), m.nearDistance.value = T.shadow.camera.near, m.farDistance.value = T.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function jv(s3, e, t, n) {
  let i = {}, r = {}, o = [];
  const a = s3.getParameter(s3.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(T, E) {
    const S = E.program;
    n.uniformBlockBinding(T, S);
  }
  function c(T, E) {
    let S = i[T.id];
    S === void 0 && (_(T), S = h(T), i[T.id] = S, T.addEventListener("dispose", m));
    const P = E.program;
    n.updateUBOMapping(T, P);
    const w = e.render.frame;
    r[T.id] !== w && (d(T), r[T.id] = w);
  }
  function h(T) {
    const E = u();
    T.__bindingPointIndex = E;
    const S = s3.createBuffer(), P = T.__size, w = T.usage;
    return s3.bindBuffer(s3.UNIFORM_BUFFER, S), s3.bufferData(s3.UNIFORM_BUFFER, P, w), s3.bindBuffer(s3.UNIFORM_BUFFER, null), s3.bindBufferBase(s3.UNIFORM_BUFFER, E, S), S;
  }
  function u() {
    for (let T = 0; T < a; T++) if (o.indexOf(T) === -1) return o.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(T) {
    const E = i[T.id], S = T.uniforms, P = T.__cache;
    s3.bindBuffer(s3.UNIFORM_BUFFER, E);
    for (let w = 0, C = S.length; w < C; w++) {
      const N = Array.isArray(S[w]) ? S[w] : [S[w]];
      for (let M = 0, y = N.length; M < y; M++) {
        const I = N[M];
        if (p(I, w, M, P) === true) {
          const q = I.__offset, z = Array.isArray(I.value) ? I.value : [I.value];
          let X = 0;
          for (let J = 0; J < z.length; J++) {
            const G = z[J], te = g(G);
            typeof G == "number" || typeof G == "boolean" ? (I.__data[0] = G, s3.bufferSubData(s3.UNIFORM_BUFFER, q + X, I.__data)) : G.isMatrix3 ? (I.__data[0] = G.elements[0], I.__data[1] = G.elements[1], I.__data[2] = G.elements[2], I.__data[3] = 0, I.__data[4] = G.elements[3], I.__data[5] = G.elements[4], I.__data[6] = G.elements[5], I.__data[7] = 0, I.__data[8] = G.elements[6], I.__data[9] = G.elements[7], I.__data[10] = G.elements[8], I.__data[11] = 0) : (G.toArray(I.__data, X), X += te.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s3.bufferSubData(s3.UNIFORM_BUFFER, q, I.__data);
        }
      }
    }
    s3.bindBuffer(s3.UNIFORM_BUFFER, null);
  }
  function p(T, E, S, P) {
    const w = T.value, C = E + "_" + S;
    if (P[C] === void 0) return typeof w == "number" || typeof w == "boolean" ? P[C] = w : P[C] = w.clone(), true;
    {
      const N = P[C];
      if (typeof w == "number" || typeof w == "boolean") {
        if (N !== w) return P[C] = w, true;
      } else if (N.equals(w) === false) return N.copy(w), true;
    }
    return false;
  }
  function _(T) {
    const E = T.uniforms;
    let S = 0;
    const P = 16;
    for (let C = 0, N = E.length; C < N; C++) {
      const M = Array.isArray(E[C]) ? E[C] : [E[C]];
      for (let y = 0, I = M.length; y < I; y++) {
        const q = M[y], z = Array.isArray(q.value) ? q.value : [q.value];
        for (let X = 0, J = z.length; X < J; X++) {
          const G = z[X], te = g(G), V = S % P, oe = V % te.boundary, de = V + oe;
          S += oe, de !== 0 && P - de < te.storage && (S += P - de), q.__data = new Float32Array(te.storage / Float32Array.BYTES_PER_ELEMENT), q.__offset = S, S += te.storage;
        }
      }
    }
    const w = S % P;
    return w > 0 && (S += P - w), T.__size = S, T.__cache = {}, this;
  }
  function g(T) {
    const E = { boundary: 0, storage: 0 };
    return typeof T == "number" || typeof T == "boolean" ? (E.boundary = 4, E.storage = 4) : T.isVector2 ? (E.boundary = 8, E.storage = 8) : T.isVector3 || T.isColor ? (E.boundary = 16, E.storage = 12) : T.isVector4 ? (E.boundary = 16, E.storage = 16) : T.isMatrix3 ? (E.boundary = 48, E.storage = 48) : T.isMatrix4 ? (E.boundary = 64, E.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), E;
  }
  function m(T) {
    const E = T.target;
    E.removeEventListener("dispose", m);
    const S = o.indexOf(E.__bindingPointIndex);
    o.splice(S, 1), s3.deleteBuffer(i[E.id]), delete i[E.id], delete r[E.id];
  }
  function f() {
    for (const T in i) s3.deleteBuffer(i[T]);
    o = [], i = {}, r = {};
  }
  return { bind: l, update: c, dispose: f };
}
class Kv {
  constructor(e = {}) {
    const { canvas: t = qd(), context: n = null, depth: i = true, stencil: r = false, alpha: o = false, antialias: a = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false, reverseDepthBuffer: d = false } = e;
    this.isWebGLRenderer = true;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else p = o;
    const _ = new Uint32Array(4), g = new Int32Array(4);
    let m = null, f = null;
    const T = [], E = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = gt, this.toneMapping = ni, this.toneMappingExposure = 1;
    const S = this;
    let P = false, w = 0, C = 0, N = null, M = -1, y = null;
    const I = new Ke(), q = new Ke();
    let z = null;
    const X = new Ee(0);
    let J = 0, G = t.width, te = t.height, V = 1, oe = null, de = null;
    const Se = new Ke(0, 0, G, te), Be = new Ke(0, 0, G, te);
    let st = false;
    const Y = new xl();
    let ne = false, ve = false;
    this.transmissionResolutionScale = 1;
    const ae = new Le(), we = new Le(), Pe = new R(), ke = new Ke(), ht = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let Xe = false;
    function ft() {
      return N === null ? V : 1;
    }
    let A = n;
    function qt(x, D) {
      return t.getContext(x, D);
    }
    try {
      const x = { alpha: true, depth: i, stencil: r, antialias: a, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${al}`), t.addEventListener("webglcontextlost", $, false), t.addEventListener("webglcontextrestored", he, false), t.addEventListener("webglcontextcreationerror", ce, false), A === null) {
        const D = "webgl2";
        if (A = qt(D, x), A === null) throw qt(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let He, Ve, Me, at, ye, b, v, F, K, Z, W, xe, le, fe, Ye, ee, me, Ae, Re, _e, Ge, Ne, rt, L;
    function se() {
      He = new sg(A), He.init(), Ne = new zv(A, He), Ve = new J_(A, He, e, Ne), Me = new Bv(A, He), Ve.reverseDepthBuffer && d && Me.buffers.depth.setReversed(true), at = new ag(A), ye = new Tv(), b = new kv(A, He, Me, ye, Ve, Ne, at), v = new eg(S), F = new ig(S), K = new pp(A), rt = new $_(A, K), Z = new rg(A, K, at, rt), W = new cg(A, Z, K, at), Re = new lg(A, Ve, b), ee = new Q_(ye), xe = new Ev(S, v, F, He, Ve, rt, ee), le = new qv(S, ye), fe = new wv(), Ye = new Dv(He), Ae = new K_(S, v, F, Me, W, p, l), me = new Fv(S, W, Ve), L = new jv(A, at, Ve, Me), _e = new Z_(A, He, at), Ge = new og(A, He, at), at.programs = xe.programs, S.capabilities = Ve, S.extensions = He, S.properties = ye, S.renderLists = fe, S.shadowMap = me, S.state = Me, S.info = at;
    }
    se();
    const H = new Xv(S, A);
    this.xr = H, this.getContext = function() {
      return A;
    }, this.getContextAttributes = function() {
      return A.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = He.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = He.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return V;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (V = x, this.setSize(G, te, false));
    }, this.getSize = function(x) {
      return x.set(G, te);
    }, this.setSize = function(x, D, B = true) {
      if (H.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      G = x, te = D, t.width = Math.floor(x * V), t.height = Math.floor(D * V), B === true && (t.style.width = x + "px", t.style.height = D + "px"), this.setViewport(0, 0, x, D);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(G * V, te * V).floor();
    }, this.setDrawingBufferSize = function(x, D, B) {
      G = x, te = D, V = B, t.width = Math.floor(x * B), t.height = Math.floor(D * B), this.setViewport(0, 0, x, D);
    }, this.getCurrentViewport = function(x) {
      return x.copy(I);
    }, this.getViewport = function(x) {
      return x.copy(Se);
    }, this.setViewport = function(x, D, B, k) {
      x.isVector4 ? Se.set(x.x, x.y, x.z, x.w) : Se.set(x, D, B, k), Me.viewport(I.copy(Se).multiplyScalar(V).round());
    }, this.getScissor = function(x) {
      return x.copy(Be);
    }, this.setScissor = function(x, D, B, k) {
      x.isVector4 ? Be.set(x.x, x.y, x.z, x.w) : Be.set(x, D, B, k), Me.scissor(q.copy(Be).multiplyScalar(V).round());
    }, this.getScissorTest = function() {
      return st;
    }, this.setScissorTest = function(x) {
      Me.setScissorTest(st = x);
    }, this.setOpaqueSort = function(x) {
      oe = x;
    }, this.setTransparentSort = function(x) {
      de = x;
    }, this.getClearColor = function(x) {
      return x.copy(Ae.getClearColor());
    }, this.setClearColor = function() {
      Ae.setClearColor.apply(Ae, arguments);
    }, this.getClearAlpha = function() {
      return Ae.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ae.setClearAlpha.apply(Ae, arguments);
    }, this.clear = function(x = true, D = true, B = true) {
      let k = 0;
      if (x) {
        let U = false;
        if (N !== null) {
          const Q = N.texture.format;
          U = Q === pl || Q === fl || Q === dl;
        }
        if (U) {
          const Q = N.texture.type, re = Q === zn || Q === yi || Q === js || Q === ls || Q === cl || Q === hl, ue = Ae.getClearColor(), ge = Ae.getClearAlpha(), Ce = ue.r, Ie = ue.g, be = ue.b;
          re ? (_[0] = Ce, _[1] = Ie, _[2] = be, _[3] = ge, A.clearBufferuiv(A.COLOR, 0, _)) : (g[0] = Ce, g[1] = Ie, g[2] = be, g[3] = ge, A.clearBufferiv(A.COLOR, 0, g));
        } else k |= A.COLOR_BUFFER_BIT;
      }
      D && (k |= A.DEPTH_BUFFER_BIT), B && (k |= A.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), A.clear(k);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", $, false), t.removeEventListener("webglcontextrestored", he, false), t.removeEventListener("webglcontextcreationerror", ce, false), Ae.dispose(), fe.dispose(), Ye.dispose(), ye.dispose(), v.dispose(), F.dispose(), W.dispose(), rt.dispose(), L.dispose(), xe.dispose(), H.dispose(), H.removeEventListener("sessionstart", Dl), H.removeEventListener("sessionend", Ul), ai.stop();
    };
    function $(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), P = true;
    }
    function he() {
      console.log("THREE.WebGLRenderer: Context Restored."), P = false;
      const x = at.autoReset, D = me.enabled, B = me.autoUpdate, k = me.needsUpdate, U = me.type;
      se(), at.autoReset = x, me.enabled = D, me.autoUpdate = B, me.needsUpdate = k, me.type = U;
    }
    function ce(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function De(x) {
      const D = x.target;
      D.removeEventListener("dispose", De), ut(D);
    }
    function ut(x) {
      Tt(x), ye.remove(x);
    }
    function Tt(x) {
      const D = ye.get(x).programs;
      D !== void 0 && (D.forEach(function(B) {
        xe.releaseProgram(B);
      }), x.isShaderMaterial && xe.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, D, B, k, U, Q) {
      D === null && (D = ht);
      const re = U.isMesh && U.matrixWorld.determinant() < 0, ue = Nu(x, D, B, k, U);
      Me.setMaterial(k, re);
      let ge = B.index, Ce = 1;
      if (k.wireframe === true) {
        if (ge = Z.getWireframeAttribute(B), ge === void 0) return;
        Ce = 2;
      }
      const Ie = B.drawRange, be = B.attributes.position;
      let qe = Ie.start * Ce, $e = (Ie.start + Ie.count) * Ce;
      Q !== null && (qe = Math.max(qe, Q.start * Ce), $e = Math.min($e, (Q.start + Q.count) * Ce)), ge !== null ? (qe = Math.max(qe, 0), $e = Math.min($e, ge.count)) : be != null && (qe = Math.max(qe, 0), $e = Math.min($e, be.count));
      const pt = $e - qe;
      if (pt < 0 || pt === 1 / 0) return;
      rt.setup(U, k, ue, B, ge);
      let dt, je = _e;
      if (ge !== null && (dt = K.get(ge), je = Ge, je.setIndex(dt)), U.isMesh) k.wireframe === true ? (Me.setLineWidth(k.wireframeLinewidth * ft()), je.setMode(A.LINES)) : je.setMode(A.TRIANGLES);
      else if (U.isLine) {
        let Te = k.linewidth;
        Te === void 0 && (Te = 1), Me.setLineWidth(Te * ft()), U.isLineSegments ? je.setMode(A.LINES) : U.isLineLoop ? je.setMode(A.LINE_LOOP) : je.setMode(A.LINE_STRIP);
      } else U.isPoints ? je.setMode(A.POINTS) : U.isSprite && je.setMode(A.TRIANGLES);
      if (U.isBatchedMesh) if (U._multiDrawInstances !== null) je.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
      else if (He.get("WEBGL_multi_draw")) je.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
      else {
        const Te = U._multiDrawStarts, Et = U._multiDrawCounts, Ze = U._multiDrawCount, sn = ge ? K.get(ge).bytesPerElement : 1, Mi = ye.get(k).currentProgram.getUniforms();
        for (let zt = 0; zt < Ze; zt++) Mi.setValue(A, "_gl_DrawID", zt), je.render(Te[zt] / sn, Et[zt]);
      }
      else if (U.isInstancedMesh) je.renderInstances(qe, pt, U.count);
      else if (B.isInstancedBufferGeometry) {
        const Te = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, Et = Math.min(B.instanceCount, Te);
        je.renderInstances(qe, pt, Et);
      } else je.render(qe, pt);
    };
    function Qe(x, D, B) {
      x.transparent === true && x.side === xn && x.forceSinglePass === false ? (x.side = Rt, x.needsUpdate = true, ar(x, D, B), x.side = kn, x.needsUpdate = true, ar(x, D, B), x.side = xn) : ar(x, D, B);
    }
    this.compile = function(x, D, B = null) {
      B === null && (B = x), f = Ye.get(B), f.init(D), E.push(f), B.traverseVisible(function(U) {
        U.isLight && U.layers.test(D.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), x !== B && x.traverseVisible(function(U) {
        U.isLight && U.layers.test(D.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), f.setupLights();
      const k = /* @__PURE__ */ new Set();
      return x.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
        const Q = U.material;
        if (Q) if (Array.isArray(Q)) for (let re = 0; re < Q.length; re++) {
          const ue = Q[re];
          Qe(ue, B, U), k.add(ue);
        }
        else Qe(Q, B, U), k.add(Q);
      }), E.pop(), f = null, k;
    }, this.compileAsync = function(x, D, B = null) {
      const k = this.compile(x, D, B);
      return new Promise((U) => {
        function Q() {
          if (k.forEach(function(re) {
            ye.get(re).currentProgram.isReady() && k.delete(re);
          }), k.size === 0) {
            U(x);
            return;
          }
          setTimeout(Q, 10);
        }
        He.get("KHR_parallel_shader_compile") !== null ? Q() : setTimeout(Q, 10);
      });
    };
    let nn = null;
    function En(x) {
      nn && nn(x);
    }
    function Dl() {
      ai.stop();
    }
    function Ul() {
      ai.start();
    }
    const ai = new du();
    ai.setAnimationLoop(En), typeof self < "u" && ai.setContext(self), this.setAnimationLoop = function(x) {
      nn = x, H.setAnimationLoop(x), x === null ? ai.stop() : ai.start();
    }, H.addEventListener("sessionstart", Dl), H.addEventListener("sessionend", Ul), this.render = function(x, D) {
      if (D !== void 0 && D.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (P === true) return;
      if (x.matrixWorldAutoUpdate === true && x.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === true && D.updateMatrixWorld(), H.enabled === true && H.isPresenting === true && (H.cameraAutoUpdate === true && H.updateCamera(D), D = H.getCamera()), x.isScene === true && x.onBeforeRender(S, x, D, N), f = Ye.get(x, E.length), f.init(D), E.push(f), we.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), Y.setFromProjectionMatrix(we), ve = this.localClippingEnabled, ne = ee.init(this.clippingPlanes, ve), m = fe.get(x, T.length), m.init(), T.push(m), H.enabled === true && H.isPresenting === true) {
        const Q = S.xr.getDepthSensingMesh();
        Q !== null && yo(Q, D, -1 / 0, S.sortObjects);
      }
      yo(x, D, 0, S.sortObjects), m.finish(), S.sortObjects === true && m.sort(oe, de), Xe = H.enabled === false || H.isPresenting === false || H.hasDepthSensing() === false, Xe && Ae.addToRenderList(m, x), this.info.render.frame++, ne === true && ee.beginShadows();
      const B = f.state.shadowsArray;
      me.render(B, x, D), ne === true && ee.endShadows(), this.info.autoReset === true && this.info.reset();
      const k = m.opaque, U = m.transmissive;
      if (f.setupLights(), D.isArrayCamera) {
        const Q = D.cameras;
        if (U.length > 0) for (let re = 0, ue = Q.length; re < ue; re++) {
          const ge = Q[re];
          Fl(k, U, x, ge);
        }
        Xe && Ae.render(x);
        for (let re = 0, ue = Q.length; re < ue; re++) {
          const ge = Q[re];
          Nl(m, x, ge, ge.viewport);
        }
      } else U.length > 0 && Fl(k, U, x, D), Xe && Ae.render(x), Nl(m, x, D);
      N !== null && C === 0 && (b.updateMultisampleRenderTarget(N), b.updateRenderTargetMipmap(N)), x.isScene === true && x.onAfterRender(S, x, D), rt.resetDefaultState(), M = -1, y = null, E.pop(), E.length > 0 ? (f = E[E.length - 1], ne === true && ee.setGlobalState(S.clippingPlanes, f.state.camera)) : f = null, T.pop(), T.length > 0 ? m = T[T.length - 1] : m = null;
    };
    function yo(x, D, B, k) {
      if (x.visible === false) return;
      if (x.layers.test(D.layers)) {
        if (x.isGroup) B = x.renderOrder;
        else if (x.isLOD) x.autoUpdate === true && x.update(D);
        else if (x.isLight) f.pushLight(x), x.castShadow && f.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || Y.intersectsSprite(x)) {
            k && ke.setFromMatrixPosition(x.matrixWorld).applyMatrix4(we);
            const re = W.update(x), ue = x.material;
            ue.visible && m.push(x, re, ue, B, ke.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || Y.intersectsObject(x))) {
          const re = W.update(x), ue = x.material;
          if (k && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), ke.copy(x.boundingSphere.center)) : (re.boundingSphere === null && re.computeBoundingSphere(), ke.copy(re.boundingSphere.center)), ke.applyMatrix4(x.matrixWorld).applyMatrix4(we)), Array.isArray(ue)) {
            const ge = re.groups;
            for (let Ce = 0, Ie = ge.length; Ce < Ie; Ce++) {
              const be = ge[Ce], qe = ue[be.materialIndex];
              qe && qe.visible && m.push(x, re, qe, B, ke.z, be);
            }
          } else ue.visible && m.push(x, re, ue, B, ke.z, null);
        }
      }
      const Q = x.children;
      for (let re = 0, ue = Q.length; re < ue; re++) yo(Q[re], D, B, k);
    }
    function Nl(x, D, B, k) {
      const U = x.opaque, Q = x.transmissive, re = x.transparent;
      f.setupLightsView(B), ne === true && ee.setGlobalState(S.clippingPlanes, B), k && Me.viewport(I.copy(k)), U.length > 0 && or(U, D, B), Q.length > 0 && or(Q, D, B), re.length > 0 && or(re, D, B), Me.buffers.depth.setTest(true), Me.buffers.depth.setMask(true), Me.buffers.color.setMask(true), Me.setPolygonOffset(false);
    }
    function Fl(x, D, B, k) {
      if ((B.isScene === true ? B.overrideMaterial : null) !== null) return;
      f.state.transmissionRenderTarget[k.id] === void 0 && (f.state.transmissionRenderTarget[k.id] = new Qt(1, 1, { generateMipmaps: true, type: He.has("EXT_color_buffer_half_float") || He.has("EXT_color_buffer_float") ? yn : zn, minFilter: Un, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: We.workingColorSpace }));
      const Q = f.state.transmissionRenderTarget[k.id], re = k.viewport || I;
      Q.setSize(re.z * S.transmissionResolutionScale, re.w * S.transmissionResolutionScale);
      const ue = S.getRenderTarget();
      S.setRenderTarget(Q), S.getClearColor(X), J = S.getClearAlpha(), J < 1 && S.setClearColor(16777215, 0.5), S.clear(), Xe && Ae.render(B);
      const ge = S.toneMapping;
      S.toneMapping = ni;
      const Ce = k.viewport;
      if (k.viewport !== void 0 && (k.viewport = void 0), f.setupLightsView(k), ne === true && ee.setGlobalState(S.clippingPlanes, k), or(x, B, k), b.updateMultisampleRenderTarget(Q), b.updateRenderTargetMipmap(Q), He.has("WEBGL_multisampled_render_to_texture") === false) {
        let Ie = false;
        for (let be = 0, qe = D.length; be < qe; be++) {
          const $e = D[be], pt = $e.object, dt = $e.geometry, je = $e.material, Te = $e.group;
          if (je.side === xn && pt.layers.test(k.layers)) {
            const Et = je.side;
            je.side = Rt, je.needsUpdate = true, Ol(pt, B, k, dt, je, Te), je.side = Et, je.needsUpdate = true, Ie = true;
          }
        }
        Ie === true && (b.updateMultisampleRenderTarget(Q), b.updateRenderTargetMipmap(Q));
      }
      S.setRenderTarget(ue), S.setClearColor(X, J), Ce !== void 0 && (k.viewport = Ce), S.toneMapping = ge;
    }
    function or(x, D, B) {
      const k = D.isScene === true ? D.overrideMaterial : null;
      for (let U = 0, Q = x.length; U < Q; U++) {
        const re = x[U], ue = re.object, ge = re.geometry, Ce = k === null ? re.material : k, Ie = re.group;
        ue.layers.test(B.layers) && Ol(ue, D, B, ge, Ce, Ie);
      }
    }
    function Ol(x, D, B, k, U, Q) {
      x.onBeforeRender(S, D, B, k, U, Q), x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), U.onBeforeRender(S, D, B, k, x, Q), U.transparent === true && U.side === xn && U.forceSinglePass === false ? (U.side = Rt, U.needsUpdate = true, S.renderBufferDirect(B, D, k, U, x, Q), U.side = kn, U.needsUpdate = true, S.renderBufferDirect(B, D, k, U, x, Q), U.side = xn) : S.renderBufferDirect(B, D, k, U, x, Q), x.onAfterRender(S, D, B, k, U, Q);
    }
    function ar(x, D, B) {
      D.isScene !== true && (D = ht);
      const k = ye.get(x), U = f.state.lights, Q = f.state.shadowsArray, re = U.state.version, ue = xe.getParameters(x, U.state, Q, D, B), ge = xe.getProgramCacheKey(ue);
      let Ce = k.programs;
      k.environment = x.isMeshStandardMaterial ? D.environment : null, k.fog = D.fog, k.envMap = (x.isMeshStandardMaterial ? F : v).get(x.envMap || k.environment), k.envMapRotation = k.environment !== null && x.envMap === null ? D.environmentRotation : x.envMapRotation, Ce === void 0 && (x.addEventListener("dispose", De), Ce = /* @__PURE__ */ new Map(), k.programs = Ce);
      let Ie = Ce.get(ge);
      if (Ie !== void 0) {
        if (k.currentProgram === Ie && k.lightsStateVersion === re) return kl(x, ue), Ie;
      } else ue.uniforms = xe.getUniforms(x), x.onBeforeCompile(ue, S), Ie = xe.acquireProgram(ue, ge), Ce.set(ge, Ie), k.uniforms = ue.uniforms;
      const be = k.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === true) && (be.clippingPlanes = ee.uniform), kl(x, ue), k.needsLights = Ou(x), k.lightsStateVersion = re, k.needsLights && (be.ambientLightColor.value = U.state.ambient, be.lightProbe.value = U.state.probe, be.directionalLights.value = U.state.directional, be.directionalLightShadows.value = U.state.directionalShadow, be.spotLights.value = U.state.spot, be.spotLightShadows.value = U.state.spotShadow, be.rectAreaLights.value = U.state.rectArea, be.ltc_1.value = U.state.rectAreaLTC1, be.ltc_2.value = U.state.rectAreaLTC2, be.pointLights.value = U.state.point, be.pointLightShadows.value = U.state.pointShadow, be.hemisphereLights.value = U.state.hemi, be.directionalShadowMap.value = U.state.directionalShadowMap, be.directionalShadowMatrix.value = U.state.directionalShadowMatrix, be.spotShadowMap.value = U.state.spotShadowMap, be.spotLightMatrix.value = U.state.spotLightMatrix, be.spotLightMap.value = U.state.spotLightMap, be.pointShadowMap.value = U.state.pointShadowMap, be.pointShadowMatrix.value = U.state.pointShadowMatrix), k.currentProgram = Ie, k.uniformsList = null, Ie;
    }
    function Bl(x) {
      if (x.uniformsList === null) {
        const D = x.currentProgram.getUniforms();
        x.uniformsList = jr.seqWithValue(D.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function kl(x, D) {
      const B = ye.get(x);
      B.outputColorSpace = D.outputColorSpace, B.batching = D.batching, B.batchingColor = D.batchingColor, B.instancing = D.instancing, B.instancingColor = D.instancingColor, B.instancingMorph = D.instancingMorph, B.skinning = D.skinning, B.morphTargets = D.morphTargets, B.morphNormals = D.morphNormals, B.morphColors = D.morphColors, B.morphTargetsCount = D.morphTargetsCount, B.numClippingPlanes = D.numClippingPlanes, B.numIntersection = D.numClipIntersection, B.vertexAlphas = D.vertexAlphas, B.vertexTangents = D.vertexTangents, B.toneMapping = D.toneMapping;
    }
    function Nu(x, D, B, k, U) {
      D.isScene !== true && (D = ht), b.resetTextureUnits();
      const Q = D.fog, re = k.isMeshStandardMaterial ? D.environment : null, ue = N === null ? S.outputColorSpace : N.isXRRenderTarget === true ? N.texture.colorSpace : Ft, ge = (k.isMeshStandardMaterial ? F : v).get(k.envMap || re), Ce = k.vertexColors === true && !!B.attributes.color && B.attributes.color.itemSize === 4, Ie = !!B.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), be = !!B.morphAttributes.position, qe = !!B.morphAttributes.normal, $e = !!B.morphAttributes.color;
      let pt = ni;
      k.toneMapped && (N === null || N.isXRRenderTarget === true) && (pt = S.toneMapping);
      const dt = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, je = dt !== void 0 ? dt.length : 0, Te = ye.get(k), Et = f.state.lights;
      if (ne === true && (ve === true || x !== y)) {
        const Pt = x === y && k.id === M;
        ee.setState(k, x, Pt);
      }
      let Ze = false;
      k.version === Te.__version ? (Te.needsLights && Te.lightsStateVersion !== Et.state.version || Te.outputColorSpace !== ue || U.isBatchedMesh && Te.batching === false || !U.isBatchedMesh && Te.batching === true || U.isBatchedMesh && Te.batchingColor === true && U.colorTexture === null || U.isBatchedMesh && Te.batchingColor === false && U.colorTexture !== null || U.isInstancedMesh && Te.instancing === false || !U.isInstancedMesh && Te.instancing === true || U.isSkinnedMesh && Te.skinning === false || !U.isSkinnedMesh && Te.skinning === true || U.isInstancedMesh && Te.instancingColor === true && U.instanceColor === null || U.isInstancedMesh && Te.instancingColor === false && U.instanceColor !== null || U.isInstancedMesh && Te.instancingMorph === true && U.morphTexture === null || U.isInstancedMesh && Te.instancingMorph === false && U.morphTexture !== null || Te.envMap !== ge || k.fog === true && Te.fog !== Q || Te.numClippingPlanes !== void 0 && (Te.numClippingPlanes !== ee.numPlanes || Te.numIntersection !== ee.numIntersection) || Te.vertexAlphas !== Ce || Te.vertexTangents !== Ie || Te.morphTargets !== be || Te.morphNormals !== qe || Te.morphColors !== $e || Te.toneMapping !== pt || Te.morphTargetsCount !== je) && (Ze = true) : (Ze = true, Te.__version = k.version);
      let sn = Te.currentProgram;
      Ze === true && (sn = ar(k, D, U));
      let Mi = false, zt = false, Es = false;
      const lt = sn.getUniforms(), jt = Te.uniforms;
      if (Me.useProgram(sn.program) && (Mi = true, zt = true, Es = true), k.id !== M && (M = k.id, zt = true), Mi || y !== x) {
        Me.buffers.depth.getReversed() ? (ae.copy(x.projectionMatrix), Kd(ae), $d(ae), lt.setValue(A, "projectionMatrix", ae)) : lt.setValue(A, "projectionMatrix", x.projectionMatrix), lt.setValue(A, "viewMatrix", x.matrixWorldInverse);
        const Ot = lt.map.cameraPosition;
        Ot !== void 0 && Ot.setValue(A, Pe.setFromMatrixPosition(x.matrixWorld)), Ve.logarithmicDepthBuffer && lt.setValue(A, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && lt.setValue(A, "isOrthographic", x.isOrthographicCamera === true), y !== x && (y = x, zt = true, Es = true);
      }
      if (U.isSkinnedMesh) {
        lt.setOptional(A, U, "bindMatrix"), lt.setOptional(A, U, "bindMatrixInverse");
        const Pt = U.skeleton;
        Pt && (Pt.boneTexture === null && Pt.computeBoneTexture(), lt.setValue(A, "boneTexture", Pt.boneTexture, b));
      }
      U.isBatchedMesh && (lt.setOptional(A, U, "batchingTexture"), lt.setValue(A, "batchingTexture", U._matricesTexture, b), lt.setOptional(A, U, "batchingIdTexture"), lt.setValue(A, "batchingIdTexture", U._indirectTexture, b), lt.setOptional(A, U, "batchingColorTexture"), U._colorsTexture !== null && lt.setValue(A, "batchingColorTexture", U._colorsTexture, b));
      const Kt = B.morphAttributes;
      if ((Kt.position !== void 0 || Kt.normal !== void 0 || Kt.color !== void 0) && Re.update(U, B, sn), (zt || Te.receiveShadow !== U.receiveShadow) && (Te.receiveShadow = U.receiveShadow, lt.setValue(A, "receiveShadow", U.receiveShadow)), k.isMeshGouraudMaterial && k.envMap !== null && (jt.envMap.value = ge, jt.flipEnvMap.value = ge.isCubeTexture && ge.isRenderTargetTexture === false ? -1 : 1), k.isMeshStandardMaterial && k.envMap === null && D.environment !== null && (jt.envMapIntensity.value = D.environmentIntensity), zt && (lt.setValue(A, "toneMappingExposure", S.toneMappingExposure), Te.needsLights && Fu(jt, Es), Q && k.fog === true && le.refreshFogUniforms(jt, Q), le.refreshMaterialUniforms(jt, k, V, te, f.state.transmissionRenderTarget[x.id]), jr.upload(A, Bl(Te), jt, b)), k.isShaderMaterial && k.uniformsNeedUpdate === true && (jr.upload(A, Bl(Te), jt, b), k.uniformsNeedUpdate = false), k.isSpriteMaterial && lt.setValue(A, "center", U.center), lt.setValue(A, "modelViewMatrix", U.modelViewMatrix), lt.setValue(A, "normalMatrix", U.normalMatrix), lt.setValue(A, "modelMatrix", U.matrixWorld), k.isShaderMaterial || k.isRawShaderMaterial) {
        const Pt = k.uniformsGroups;
        for (let Ot = 0, So = Pt.length; Ot < So; Ot++) {
          const li = Pt[Ot];
          L.update(li, sn), L.bind(li, sn);
        }
      }
      return sn;
    }
    function Fu(x, D) {
      x.ambientLightColor.needsUpdate = D, x.lightProbe.needsUpdate = D, x.directionalLights.needsUpdate = D, x.directionalLightShadows.needsUpdate = D, x.pointLights.needsUpdate = D, x.pointLightShadows.needsUpdate = D, x.spotLights.needsUpdate = D, x.spotLightShadows.needsUpdate = D, x.rectAreaLights.needsUpdate = D, x.hemisphereLights.needsUpdate = D;
    }
    function Ou(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === true;
    }
    this.getActiveCubeFace = function() {
      return w;
    }, this.getActiveMipmapLevel = function() {
      return C;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(x, D, B) {
      ye.get(x.texture).__webglTexture = D, ye.get(x.depthTexture).__webglTexture = B;
      const k = ye.get(x);
      k.__hasExternalTextures = true, k.__autoAllocateDepthBuffer = B === void 0, k.__autoAllocateDepthBuffer || He.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), k.__useRenderToTexture = false);
    }, this.setRenderTargetFramebuffer = function(x, D) {
      const B = ye.get(x);
      B.__webglFramebuffer = D, B.__useDefaultFramebuffer = D === void 0;
    };
    const Bu = A.createFramebuffer();
    this.setRenderTarget = function(x, D = 0, B = 0) {
      N = x, w = D, C = B;
      let k = true, U = null, Q = false, re = false;
      if (x) {
        const ge = ye.get(x);
        if (ge.__useDefaultFramebuffer !== void 0) Me.bindFramebuffer(A.FRAMEBUFFER, null), k = false;
        else if (ge.__webglFramebuffer === void 0) b.setupRenderTarget(x);
        else if (ge.__hasExternalTextures) b.rebindTextures(x, ye.get(x.texture).__webglTexture, ye.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const be = x.depthTexture;
          if (ge.__boundDepthTexture !== be) {
            if (be !== null && ye.has(be) && (x.width !== be.image.width || x.height !== be.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            b.setupDepthRenderbuffer(x);
          }
        }
        const Ce = x.texture;
        (Ce.isData3DTexture || Ce.isDataArrayTexture || Ce.isCompressedArrayTexture) && (re = true);
        const Ie = ye.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Ie[D]) ? U = Ie[D][B] : U = Ie[D], Q = true) : x.samples > 0 && b.useMultisampledRTT(x) === false ? U = ye.get(x).__webglMultisampledFramebuffer : Array.isArray(Ie) ? U = Ie[B] : U = Ie, I.copy(x.viewport), q.copy(x.scissor), z = x.scissorTest;
      } else I.copy(Se).multiplyScalar(V).floor(), q.copy(Be).multiplyScalar(V).floor(), z = st;
      if (B !== 0 && (U = Bu), Me.bindFramebuffer(A.FRAMEBUFFER, U) && k && Me.drawBuffers(x, U), Me.viewport(I), Me.scissor(q), Me.setScissorTest(z), Q) {
        const ge = ye.get(x.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + D, ge.__webglTexture, B);
      } else if (re) {
        const ge = ye.get(x.texture), Ce = D;
        A.framebufferTextureLayer(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, ge.__webglTexture, B, Ce);
      } else if (x !== null && B !== 0) {
        const ge = ye.get(x.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, ge.__webglTexture, B);
      }
      M = -1;
    }, this.readRenderTargetPixels = function(x, D, B, k, U, Q, re) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ue = ye.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && re !== void 0 && (ue = ue[re]), ue) {
        Me.bindFramebuffer(A.FRAMEBUFFER, ue);
        try {
          const ge = x.texture, Ce = ge.format, Ie = ge.type;
          if (!Ve.textureFormatReadable(Ce)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ve.textureTypeReadable(Ie)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          D >= 0 && D <= x.width - k && B >= 0 && B <= x.height - U && A.readPixels(D, B, k, U, Ne.convert(Ce), Ne.convert(Ie), Q);
        } finally {
          const ge = N !== null ? ye.get(N).__webglFramebuffer : null;
          Me.bindFramebuffer(A.FRAMEBUFFER, ge);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, D, B, k, U, Q, re) {
      if (!(x && x.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ue = ye.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && re !== void 0 && (ue = ue[re]), ue) {
        const ge = x.texture, Ce = ge.format, Ie = ge.type;
        if (!Ve.textureFormatReadable(Ce)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Ve.textureTypeReadable(Ie)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (D >= 0 && D <= x.width - k && B >= 0 && B <= x.height - U) {
          Me.bindFramebuffer(A.FRAMEBUFFER, ue);
          const be = A.createBuffer();
          A.bindBuffer(A.PIXEL_PACK_BUFFER, be), A.bufferData(A.PIXEL_PACK_BUFFER, Q.byteLength, A.STREAM_READ), A.readPixels(D, B, k, U, Ne.convert(Ce), Ne.convert(Ie), 0);
          const qe = N !== null ? ye.get(N).__webglFramebuffer : null;
          Me.bindFramebuffer(A.FRAMEBUFFER, qe);
          const $e = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return A.flush(), await jd(A, $e, 4), A.bindBuffer(A.PIXEL_PACK_BUFFER, be), A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, Q), A.deleteBuffer(be), A.deleteSync($e), Q;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(x, D = null, B = 0) {
      x.isTexture !== true && (Gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."), D = arguments[0] || null, x = arguments[1]);
      const k = Math.pow(2, -B), U = Math.floor(x.image.width * k), Q = Math.floor(x.image.height * k), re = D !== null ? D.x : 0, ue = D !== null ? D.y : 0;
      b.setTexture2D(x, 0), A.copyTexSubImage2D(A.TEXTURE_2D, B, 0, 0, re, ue, U, Q), Me.unbindTexture();
    };
    const ku = A.createFramebuffer(), zu = A.createFramebuffer();
    this.copyTextureToTexture = function(x, D, B = null, k = null, U = 0, Q = null) {
      x.isTexture !== true && (Gi("WebGLRenderer: copyTextureToTexture function signature has changed."), k = arguments[0] || null, x = arguments[1], D = arguments[2], Q = arguments[3] || 0, B = null), Q === null && (U !== 0 ? (Gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), Q = U, U = 0) : Q = 0);
      let re, ue, ge, Ce, Ie, be, qe, $e, pt;
      const dt = x.isCompressedTexture ? x.mipmaps[Q] : x.image;
      if (B !== null) re = B.max.x - B.min.x, ue = B.max.y - B.min.y, ge = B.isBox3 ? B.max.z - B.min.z : 1, Ce = B.min.x, Ie = B.min.y, be = B.isBox3 ? B.min.z : 0;
      else {
        const Kt = Math.pow(2, -U);
        re = Math.floor(dt.width * Kt), ue = Math.floor(dt.height * Kt), x.isDataArrayTexture ? ge = dt.depth : x.isData3DTexture ? ge = Math.floor(dt.depth * Kt) : ge = 1, Ce = 0, Ie = 0, be = 0;
      }
      k !== null ? (qe = k.x, $e = k.y, pt = k.z) : (qe = 0, $e = 0, pt = 0);
      const je = Ne.convert(D.format), Te = Ne.convert(D.type);
      let Et;
      D.isData3DTexture ? (b.setTexture3D(D, 0), Et = A.TEXTURE_3D) : D.isDataArrayTexture || D.isCompressedArrayTexture ? (b.setTexture2DArray(D, 0), Et = A.TEXTURE_2D_ARRAY) : (b.setTexture2D(D, 0), Et = A.TEXTURE_2D), A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, D.flipY), A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), A.pixelStorei(A.UNPACK_ALIGNMENT, D.unpackAlignment);
      const Ze = A.getParameter(A.UNPACK_ROW_LENGTH), sn = A.getParameter(A.UNPACK_IMAGE_HEIGHT), Mi = A.getParameter(A.UNPACK_SKIP_PIXELS), zt = A.getParameter(A.UNPACK_SKIP_ROWS), Es = A.getParameter(A.UNPACK_SKIP_IMAGES);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, dt.width), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, dt.height), A.pixelStorei(A.UNPACK_SKIP_PIXELS, Ce), A.pixelStorei(A.UNPACK_SKIP_ROWS, Ie), A.pixelStorei(A.UNPACK_SKIP_IMAGES, be);
      const lt = x.isDataArrayTexture || x.isData3DTexture, jt = D.isDataArrayTexture || D.isData3DTexture;
      if (x.isDepthTexture) {
        const Kt = ye.get(x), Pt = ye.get(D), Ot = ye.get(Kt.__renderTarget), So = ye.get(Pt.__renderTarget);
        Me.bindFramebuffer(A.READ_FRAMEBUFFER, Ot.__webglFramebuffer), Me.bindFramebuffer(A.DRAW_FRAMEBUFFER, So.__webglFramebuffer);
        for (let li = 0; li < ge; li++) lt && (A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, ye.get(x).__webglTexture, U, be + li), A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, ye.get(D).__webglTexture, Q, pt + li)), A.blitFramebuffer(Ce, Ie, re, ue, qe, $e, re, ue, A.DEPTH_BUFFER_BIT, A.NEAREST);
        Me.bindFramebuffer(A.READ_FRAMEBUFFER, null), Me.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else if (U !== 0 || x.isRenderTargetTexture || ye.has(x)) {
        const Kt = ye.get(x), Pt = ye.get(D);
        Me.bindFramebuffer(A.READ_FRAMEBUFFER, ku), Me.bindFramebuffer(A.DRAW_FRAMEBUFFER, zu);
        for (let Ot = 0; Ot < ge; Ot++) lt ? A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Kt.__webglTexture, U, be + Ot) : A.framebufferTexture2D(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Kt.__webglTexture, U), jt ? A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Pt.__webglTexture, Q, pt + Ot) : A.framebufferTexture2D(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Pt.__webglTexture, Q), U !== 0 ? A.blitFramebuffer(Ce, Ie, re, ue, qe, $e, re, ue, A.COLOR_BUFFER_BIT, A.NEAREST) : jt ? A.copyTexSubImage3D(Et, Q, qe, $e, pt + Ot, Ce, Ie, re, ue) : A.copyTexSubImage2D(Et, Q, qe, $e, Ce, Ie, re, ue);
        Me.bindFramebuffer(A.READ_FRAMEBUFFER, null), Me.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else jt ? x.isDataTexture || x.isData3DTexture ? A.texSubImage3D(Et, Q, qe, $e, pt, re, ue, ge, je, Te, dt.data) : D.isCompressedArrayTexture ? A.compressedTexSubImage3D(Et, Q, qe, $e, pt, re, ue, ge, je, dt.data) : A.texSubImage3D(Et, Q, qe, $e, pt, re, ue, ge, je, Te, dt) : x.isDataTexture ? A.texSubImage2D(A.TEXTURE_2D, Q, qe, $e, re, ue, je, Te, dt.data) : x.isCompressedTexture ? A.compressedTexSubImage2D(A.TEXTURE_2D, Q, qe, $e, dt.width, dt.height, je, dt.data) : A.texSubImage2D(A.TEXTURE_2D, Q, qe, $e, re, ue, je, Te, dt);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, Ze), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, sn), A.pixelStorei(A.UNPACK_SKIP_PIXELS, Mi), A.pixelStorei(A.UNPACK_SKIP_ROWS, zt), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Es), Q === 0 && D.generateMipmaps && A.generateMipmap(Et), Me.unbindTexture();
    }, this.copyTextureToTexture3D = function(x, D, B = null, k = null, U = 0) {
      return x.isTexture !== true && (Gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."), B = arguments[0] || null, k = arguments[1] || null, x = arguments[2], D = arguments[3], U = arguments[4] || 0), Gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(x, D, B, k, U);
    }, this.initRenderTarget = function(x) {
      ye.get(x).__webglFramebuffer === void 0 && b.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? b.setTextureCube(x, 0) : x.isData3DTexture ? b.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? b.setTexture2DArray(x, 0) : b.setTexture2D(x, 0), Me.unbindTexture();
    }, this.resetState = function() {
      w = 0, C = 0, N = null, Me.reset(), rt.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Nn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorspace = We._getDrawingBufferColorSpace(e), t.unpackColorSpace = We._getUnpackColorSpace();
  }
}
const sh = { type: "change" }, Al = { type: "start" }, gu = { type: "end" }, Br = new _s(), rh = new Zn(), $v = Math.cos(70 * Vh.DEG2RAD), _t = new R(), Bt = 2 * Math.PI, it = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, na = 1e-6;
class Zv extends dp {
  constructor(e, t = null) {
    super(e, t), this.state = it.NONE, this.enabled = true, this.target = new R(), this.cursor = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Ji.ROTATE, MIDDLE: Ji.DOLLY, RIGHT: Ji.PAN }, this.touches = { ONE: Yi.ROTATE, TWO: Yi.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new R(), this._lastQuaternion = new Ct(), this._lastTargetPosition = new R(), this._quat = new Ct().setFromUnitVectors(e.up, new R(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Dc(), this._sphericalDelta = new Dc(), this._scale = 1, this._panOffset = new R(), this._rotateStart = new pe(), this._rotateEnd = new pe(), this._rotateDelta = new pe(), this._panStart = new pe(), this._panEnd = new pe(), this._panDelta = new pe(), this._dollyStart = new pe(), this._dollyEnd = new pe(), this._dollyDelta = new pe(), this._dollyDirection = new R(), this._mouse = new pe(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = Qv.bind(this), this._onPointerDown = Jv.bind(this), this._onPointerUp = e0.bind(this), this._onContextMenu = a0.bind(this), this._onMouseWheel = i0.bind(this), this._onKeyDown = s0.bind(this), this._onTouchStart = r0.bind(this), this._onTouchMove = o0.bind(this), this._onMouseDown = t0.bind(this), this._onMouseMove = n0.bind(this), this._interceptControlDown = l0.bind(this), this._interceptControlUp = c0.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(sh), this.update(), this.state = it.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    _t.copy(t).sub(this.target), _t.applyQuaternion(this._quat), this._spherical.setFromVector3(_t), this.autoRotate && this.state === it.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(n) && isFinite(i) && (n < -Math.PI ? n += Bt : n > Math.PI && (n -= Bt), i < -Math.PI ? i += Bt : i > Math.PI && (i -= Bt), n <= i ? this._spherical.theta = Math.max(n, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + i) / 2 ? Math.max(n, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const o = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = o != this._spherical.radius;
    }
    if (_t.setFromSpherical(this._spherical), _t.applyQuaternion(this._quatInverse), t.copy(this.target).add(_t), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let o = null;
      if (this.object.isPerspectiveCamera) {
        const a = _t.length();
        o = this._clampDistance(a * this._scale);
        const l = a - o;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const a = new R(this._mouse.x, this._mouse.y, 0);
        a.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new R(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(a), this.object.updateMatrixWorld(), o = _t.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (Br.origin.copy(this.object.position), Br.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Br.direction)) < $v ? this.object.lookAt(this.target) : (rh.setFromNormalAndCoplanarPoint(this.object.up, this.target), Br.intersectPlane(rh, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const o = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > na || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > na || this._lastTargetPosition.distanceToSquared(this.target) > na ? (this.dispatchEvent(sh), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Bt / 60 * this.autoRotateSpeed * e : Bt / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    _t.setFromMatrixColumn(t, 0), _t.multiplyScalar(-e), this._panOffset.add(_t);
  }
  _panUp(e, t) {
    this.screenSpacePanning === true ? _t.setFromMatrixColumn(t, 1) : (_t.setFromMatrixColumn(t, 0), _t.crossVectors(this.object.up, _t)), _t.multiplyScalar(e), this._panOffset.add(_t);
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      _t.copy(i).sub(this.target);
      let r = _t.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * r / n.clientHeight, this.object.matrix), this._panUp(2 * t * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect(), i = e - n.left, r = t - n.top, o = n.width, a = n.height;
    this._mouse.x = i / o * 2 - 1, this._mouse.y = -(r / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Bt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Bt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = false;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(Bt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = true;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-Bt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = true;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(Bt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = true;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-Bt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = true;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, i);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, i);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e), i = 0.5 * (e.pageX + n.x), r = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(i, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Bt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Bt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, i);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const o = (e.pageX + t.x) * 0.5, a = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(o, a);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
      this._pointers.splice(t, 1);
      return;
    }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return true;
    return false;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new pe(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode, n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function Jv(s3) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(s3.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(s3) && (this._addPointer(s3), s3.pointerType === "touch" ? this._onTouchStart(s3) : this._onMouseDown(s3)));
}
function Qv(s3) {
  this.enabled !== false && (s3.pointerType === "touch" ? this._onTouchMove(s3) : this._onMouseMove(s3));
}
function e0(s3) {
  switch (this._removePointer(s3), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(s3.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(gu), this.state = it.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function t0(s3) {
  let e;
  switch (s3.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case Ji.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(s3), this.state = it.DOLLY;
      break;
    case Ji.ROTATE:
      if (s3.ctrlKey || s3.metaKey || s3.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s3), this.state = it.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s3), this.state = it.ROTATE;
      }
      break;
    case Ji.PAN:
      if (s3.ctrlKey || s3.metaKey || s3.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s3), this.state = it.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s3), this.state = it.PAN;
      }
      break;
    default:
      this.state = it.NONE;
  }
  this.state !== it.NONE && this.dispatchEvent(Al);
}
function n0(s3) {
  switch (this.state) {
    case it.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(s3);
      break;
    case it.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(s3);
      break;
    case it.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(s3);
      break;
  }
}
function i0(s3) {
  this.enabled === false || this.enableZoom === false || this.state !== it.NONE || (s3.preventDefault(), this.dispatchEvent(Al), this._handleMouseWheel(this._customWheelEvent(s3)), this.dispatchEvent(gu));
}
function s0(s3) {
  this.enabled !== false && this._handleKeyDown(s3);
}
function r0(s3) {
  switch (this._trackPointer(s3), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Yi.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(s3), this.state = it.TOUCH_ROTATE;
          break;
        case Yi.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(s3), this.state = it.TOUCH_PAN;
          break;
        default:
          this.state = it.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Yi.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(s3), this.state = it.TOUCH_DOLLY_PAN;
          break;
        case Yi.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(s3), this.state = it.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = it.NONE;
      }
      break;
    default:
      this.state = it.NONE;
  }
  this.state !== it.NONE && this.dispatchEvent(Al);
}
function o0(s3) {
  switch (this._trackPointer(s3), this.state) {
    case it.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(s3), this.update();
      break;
    case it.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(s3), this.update();
      break;
    case it.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(s3), this.update();
      break;
    case it.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(s3), this.update();
      break;
    default:
      this.state = it.NONE;
  }
}
function a0(s3) {
  this.enabled !== false && s3.preventDefault();
}
function l0(s3) {
  s3.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function c0(s3) {
  s3.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function oh(s3, e) {
  if (e === yd) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s3;
  if (e === Xa || e === kh) {
    let t = s3.getIndex();
    if (t === null) {
      const o = [], a = s3.getAttribute("position");
      if (a !== void 0) {
        for (let l = 0; l < a.count; l++) o.push(l);
        s3.setIndex(o), t = s3.getIndex();
      } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s3;
    }
    const n = t.count - 2, i = [];
    if (e === Xa) for (let o = 1; o <= n; o++) i.push(t.getX(0)), i.push(t.getX(o)), i.push(t.getX(o + 1));
    else for (let o = 0; o < n; o++) o % 2 === 0 ? (i.push(t.getX(o)), i.push(t.getX(o + 1)), i.push(t.getX(o + 2))) : (i.push(t.getX(o + 2)), i.push(t.getX(o + 1)), i.push(t.getX(o)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = s3.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s3;
}
class h0 extends ys {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new m0(t);
    }), this.register(function(t) {
      return new _0(t);
    }), this.register(function(t) {
      return new T0(t);
    }), this.register(function(t) {
      return new A0(t);
    }), this.register(function(t) {
      return new w0(t);
    }), this.register(function(t) {
      return new v0(t);
    }), this.register(function(t) {
      return new x0(t);
    }), this.register(function(t) {
      return new y0(t);
    }), this.register(function(t) {
      return new S0(t);
    }), this.register(function(t) {
      return new p0(t);
    }), this.register(function(t) {
      return new M0(t);
    }), this.register(function(t) {
      return new g0(t);
    }), this.register(function(t) {
      return new E0(t);
    }), this.register(function(t) {
      return new b0(t);
    }), this.register(function(t) {
      return new d0(t);
    }), this.register(function(t) {
      return new R0(t);
    }), this.register(function(t) {
      return new C0(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let o;
    if (this.resourcePath !== "") o = this.resourcePath;
    else if (this.path !== "") {
      const c = Ws.extractUrlBase(e);
      o = Ws.resolveURL(c, this.path);
    } else o = Ws.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(c) {
      i ? i(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new hu(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        r.parse(c, o, function(h) {
          t(h), r.manager.itemEnd(e);
        }, a);
      } catch (h) {
        a(h);
      }
    }, n, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let r;
    const o = {}, a = {}, l = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer) if (l.decode(new Uint8Array(e, 0, 4)) === vu) {
      try {
        o[ze.KHR_BINARY_GLTF] = new P0(e);
      } catch (u) {
        i && i(u);
        return;
      }
      r = JSON.parse(o[ze.KHR_BINARY_GLTF].content);
    } else r = JSON.parse(l.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new G0(r, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[u.name] = u, o[u.name] = true;
    }
    if (r.extensionsUsed) for (let h = 0; h < r.extensionsUsed.length; ++h) {
      const u = r.extensionsUsed[h], d = r.extensionsRequired || [];
      switch (u) {
        case ze.KHR_MATERIALS_UNLIT:
          o[u] = new f0();
          break;
        case ze.KHR_DRACO_MESH_COMPRESSION:
          o[u] = new I0(r, this.dracoLoader);
          break;
        case ze.KHR_TEXTURE_TRANSFORM:
          o[u] = new L0();
          break;
        case ze.KHR_MESH_QUANTIZATION:
          o[u] = new D0();
          break;
        default:
          d.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
      }
    }
    c.setExtensions(o), c.setPlugins(a), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function u0() {
  let s3 = {};
  return { get: function(e) {
    return s3[e];
  }, add: function(e, t) {
    s3[e] = t;
  }, remove: function(e) {
    delete s3[e];
  }, removeAll: function() {
    s3 = {};
  } };
}
const ze = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" };
class d0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let c;
    const h = new Ee(16777215);
    l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], Ft);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new jf(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new co(h), c.distance = u;
        break;
      case "spot":
        c = new Ml(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, Ln(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(l) {
      return n._getNodeRef(t.cache, a, l);
    });
  }
}
class f0 {
  constructor() {
    this.name = ze.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Fn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Ee(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const o = r.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], Ft), e.opacity = o[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, gt));
    }
    return Promise.all(i);
  }
}
class p0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class m0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new pe(a, a);
    }
    return Promise.all(r);
  }
}
class _0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yt;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class g0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class v0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [];
    t.sheenColor = new Ee(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = i.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const a = o.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], Ft);
    }
    return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, gt)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r);
  }
}
class x0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r);
  }
}
class y0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Ee().setRGB(a[0], a[1], a[2], Ft), Promise.all(r);
  }
}
class S0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yt;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class M0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Ee().setRGB(a[0], a[1], a[2], Ft), o.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, gt)), Promise.all(r);
  }
}
class b0 {
  constructor(e) {
    this.parser = e, this.name = ze.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(r);
  }
}
class E0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r);
  }
}
class T0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const r = i.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, o);
  }
}
class A0 {
  constructor(e) {
    this.parser = e, this.name = ze.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const o = r.extensions[t], a = i.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, o.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class w0 {
  constructor(e) {
    this.parser = e, this.name = ze.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const o = r.extensions[t], a = i.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, o.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class R0 {
  constructor(e) {
    this.name = ze.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(a) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(a, l, c);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(p) {
          return p.buffer;
        }) : o.ready.then(function() {
          const p = new ArrayBuffer(h * u);
          return o.decodeGltfBuffer(new Uint8Array(p), h, u, d, i.mode, i.filter), p;
        });
      });
    } else return null;
  }
}
class C0 {
  constructor(e) {
    this.name = ze.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives) if (c.mode !== Zt.TRIANGLES && c.mode !== Zt.TRIANGLE_STRIP && c.mode !== Zt.TRIANGLE_FAN && c.mode !== void 0) return null;
    const o = n.extensions[this.name].attributes, a = [], l = {};
    for (const c in o) a.push(this.parser.getDependency("accessor", o[c]).then((h) => (l[c] = h, l[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
      const h = c.pop(), u = h.isGroup ? h.children : [h], d = c[0].count, p = [];
      for (const _ of u) {
        const g = new Le(), m = new R(), f = new Ct(), T = new R(1, 1, 1), E = new Ef(_.geometry, _.material, d);
        for (let S = 0; S < d; S++) l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, S), l.ROTATION && f.fromBufferAttribute(l.ROTATION, S), l.SCALE && T.fromBufferAttribute(l.SCALE, S), E.setMatrixAt(S, g.compose(m, f, T));
        for (const S in l) if (S === "_COLOR_0") {
          const P = l[S];
          E.instanceColor = new qa(P.array, P.itemSize, P.normalized);
        } else S !== "TRANSLATION" && S !== "ROTATION" && S !== "SCALE" && _.geometry.setAttribute(S, l[S]);
        ct.prototype.copy.call(E, _), this.parser.assignFinalMaterial(E), p.push(E);
      }
      return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
    }));
  }
}
const vu = "glTF", Fs = 12, ah = { JSON: 1313821514, BIN: 5130562 };
class P0 {
  constructor(e) {
    this.name = ze.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Fs), n = new TextDecoder();
    if (this.header = { magic: n.decode(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, true), length: t.getUint32(8, true) }, this.header.magic !== vu) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Fs, r = new DataView(e, Fs);
    let o = 0;
    for (; o < i; ) {
      const a = r.getUint32(o, true);
      o += 4;
      const l = r.getUint32(o, true);
      if (o += 4, l === ah.JSON) {
        const c = new Uint8Array(e, Fs + o, a);
        this.content = n.decode(c);
      } else if (l === ah.BIN) {
        const c = Fs + o;
        this.body = e.slice(c, c + a);
      }
      o += a;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class I0 {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = ze.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const h in o) {
      const u = Qa[h] || h.toLowerCase();
      a[u] = o[h];
    }
    for (const h in e.attributes) {
      const u = Qa[h] || h.toLowerCase();
      if (o[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], p = ns[d.componentType];
        c[u] = p.name, l[u] = d.normalized === true;
      }
    }
    return t.getDependency("bufferView", r).then(function(h) {
      return new Promise(function(u, d) {
        i.decodeDracoFile(h, function(p) {
          for (const _ in p.attributes) {
            const g = p.attributes[_], m = l[_];
            m !== void 0 && (g.normalized = m);
          }
          u(p);
        }, a, c, Ft, d);
      });
    });
  }
}
class L0 {
  constructor() {
    this.name = ze.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
}
class D0 {
  constructor() {
    this.name = ze.KHR_MESH_QUANTIZATION;
  }
}
class xu extends nr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let o = 0; o !== i; o++) t[o] = n[r + o];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, h = i - t, u = (n - t) / h, d = u * u, p = d * u, _ = e * c, g = _ - c, m = -2 * p + 3 * d, f = p - d, T = 1 - m, E = f - d + u;
    for (let S = 0; S !== a; S++) {
      const P = o[g + S + a], w = o[g + S + l] * h, C = o[_ + S + a], N = o[_ + S] * h;
      r[S] = T * P + E * w + m * C + f * N;
    }
    return r;
  }
}
const U0 = new Ct();
class N0 extends xu {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return U0.fromArray(r).normalize().toArray(r), r;
  }
}
const Zt = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 }, ns = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, lh = { 9728: Ut, 9729: Wt, 9984: Rh, 9985: Vr, 9986: ks, 9987: Un }, ch = { 33071: Qn, 33648: Kr, 10497: as }, ia = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, Qa = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, $n = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, F0 = { CUBICSPLINE: void 0, LINEAR: $s, STEP: Ks }, sa = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function O0(s3) {
  return s3.DefaultMaterial === void 0 && (s3.DefaultMaterial = new Qs({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: false, depthTest: true, side: kn })), s3.DefaultMaterial;
}
function mi(s3, e, t) {
  for (const n in t.extensions) s3[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Ln(s3, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s3.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function B0(s3, e, t) {
  let n = false, i = false, r = false;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = true), u.NORMAL !== void 0 && (i = true), u.COLOR_0 !== void 0 && (r = true), n && i && r) break;
  }
  if (!n && !i && !r) return Promise.resolve(s3);
  const o = [], a = [], l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : s3.attributes.position;
      o.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : s3.attributes.normal;
      a.push(d);
    }
    if (r) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : s3.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([Promise.all(o), Promise.all(a), Promise.all(l)]).then(function(c) {
    const h = c[0], u = c[1], d = c[2];
    return n && (s3.morphAttributes.position = h), i && (s3.morphAttributes.normal = u), r && (s3.morphAttributes.color = d), s3.morphTargetsRelative = true, s3;
  });
}
function k0(s3, e) {
  if (s3.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++) s3.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s3.morphTargetInfluences.length === t.length) {
      s3.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++) s3.morphTargetDictionary[t[n]] = n;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function z0(s3) {
  let e;
  const t = s3.extensions && s3.extensions[ze.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ra(t.attributes) : e = s3.indices + ":" + ra(s3.attributes) + ":" + s3.mode, s3.targets !== void 0) for (let n = 0, i = s3.targets.length; n < i; n++) e += ":" + ra(s3.targets[n]);
  return e;
}
function ra(s3) {
  let e = "";
  const t = Object.keys(s3).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + s3[t[n]] + ";";
  return e;
}
function el(s3) {
  switch (s3) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function H0(s3) {
  return s3.search(/\.jpe?g($|\?)/i) > 0 || s3.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s3.search(/\.webp($|\?)/i) > 0 || s3.search(/^data\:image\/webp/) === 0 ? "image/webp" : s3.search(/\.ktx2($|\?)/i) > 0 || s3.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const V0 = new Le();
class G0 {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new u0(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = false, i = -1, r = false, o = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(a) === true;
      const l = a.match(/Version\/(\d+)/);
      i = n && l ? parseInt(l[1], 10) : -1, r = a.indexOf("Firefox") > -1, o = r ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || r && o < 98 ? this.textureLoader = new Wf(this.options.manager) : this.textureLoader = new $f(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new hu(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]);
    }).then(function(o) {
      const a = { scene: o[0][i.scene || 0], scenes: o[0], animations: o[1], cameras: o[2], asset: i.asset, parser: n, userData: {} };
      return mi(r, a, i), Ln(a, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(a);
      })).then(function() {
        for (const l of a.scenes) l.updateMatrixWorld();
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i].joints;
      for (let a = 0, l = o.length; a < l; a++) e[o[a]].isBone = true;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const o = e[i];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = true)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), r = (o, a) => {
      const l = this.associations.get(o);
      l != null && this.associations.set(a, l);
      for (const [c, h] of o.children.entries()) r(h, a.children[c]);
    };
    return r(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !i) throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(r, o) {
        return n.getDependency(e, o);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, o) {
      n.load(Ws.resolveURL(t.uri, i.path), r, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const o = ia[i.type], a = ns[i.componentType], l = i.normalized === true, c = new a(i.count * o);
      return Promise.resolve(new Nt(c, o, l));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(o) {
      const a = o[0], l = ia[i.type], c = ns[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, d = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, _ = i.normalized === true;
      let g, m;
      if (p && p !== u) {
        const f = Math.floor(d / p), T = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count;
        let E = t.cache.get(T);
        E || (g = new c(a, f * p, i.count * p / h), E = new Qh(g, p / h), t.cache.add(T, E)), m = new Js(E, l, d % p / h, _);
      } else a === null ? g = new c(i.count * l) : g = new c(a, d, i.count * l), m = new Nt(g, l, _);
      if (i.sparse !== void 0) {
        const f = ia.SCALAR, T = ns[i.sparse.indices.componentType], E = i.sparse.indices.byteOffset || 0, S = i.sparse.values.byteOffset || 0, P = new T(o[1], E, i.sparse.count * f), w = new c(o[2], S, i.sparse.count * l);
        a !== null && (m = new Nt(m.array.slice(), m.itemSize, m.normalized)), m.normalized = false;
        for (let C = 0, N = P.length; C < N; C++) {
          const M = P[C];
          if (m.setX(M, w[C * l]), l >= 2 && m.setY(M, w[C * l + 1]), l >= 3 && m.setZ(M, w[C * l + 2]), l >= 4 && m.setW(M, w[C * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = _;
      }
      return m;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, r = t.textures[e].source, o = t.images[r];
    let a = this.textureLoader;
    if (o.uri) {
      const l = n.manager.getHandler(o.uri);
      l !== null && (a = l);
    }
    return this.loadTextureImage(e, r, a);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, o = r.textures[e], a = r.images[t], l = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[l]) return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(h) {
      h.flipY = false, h.name = o.name || a.name || "", h.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === false && (h.name = a.uri);
      const d = (r.samplers || {})[o.sampler] || {};
      return h.magFilter = lh[d.magFilter] || Wt, h.minFilter = lh[d.minFilter] || Un, h.wrapS = ch[d.wrapS] || as, h.wrapT = ch[d.wrapT] || as, h.generateMipmaps = !h.isCompressedTexture && h.minFilter !== Ut && h.minFilter !== Wt, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((u) => u.clone());
    const o = i.images[e], a = self.URL || self.webkitURL;
    let l = o.uri || "", c = false;
    if (o.bufferView !== void 0) l = n.getDependency("bufferView", o.bufferView).then(function(u) {
      c = true;
      const d = new Blob([u], { type: o.mimeType });
      return l = a.createObjectURL(d), l;
    });
    else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(l).then(function(u) {
      return new Promise(function(d, p) {
        let _ = d;
        t.isImageBitmapLoader === true && (_ = function(g) {
          const m = new vt(g);
          m.needsUpdate = true, d(m);
        }), t.load(Ws.resolveURL(u, r.path), _, void 0, p);
      });
    }).then(function(u) {
      return c === true && a.revokeObjectURL(l), Ln(u, o), u.userData.mimeType = o.mimeType || H0(o.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = h, h;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), r.extensions[ze.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[ze.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = r.associations.get(o);
          o = r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, l);
        }
      }
      return i !== void 0 && (o.colorSpace = i), e[t] = o, o;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new ru(), un.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(a, l)), n = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new su(), un.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
    }
    if (i || r || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      i && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = n.clone(), r && (l.vertexColors = true), o && (l.flatShading = true), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return Qs;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let o;
    const a = {}, l = r.extensions || {}, c = [];
    if (l[ze.KHR_MATERIALS_UNLIT]) {
      const u = i[ze.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), c.push(u.extendParams(a, r, t));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (a.color = new Ee(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        a.color.setRGB(d[0], d[1], d[2], Ft), a.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", u.baseColorTexture, gt)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === true && (a.side = xn);
    const h = r.alphaMode || sa.OPAQUE;
    if (h === sa.BLEND ? (a.transparent = true, a.depthWrite = false) : (a.transparent = false, h === sa.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && o !== Fn && (c.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new pe(1, 1), r.normalTexture.scale !== void 0)) {
      const u = r.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    if (r.occlusionTexture !== void 0 && o !== Fn && (c.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== Fn) {
      const u = r.emissiveFactor;
      a.emissive = new Ee().setRGB(u[0], u[1], u[2], Ft);
    }
    return r.emissiveTexture !== void 0 && o !== Fn && c.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, gt)), Promise.all(c).then(function() {
      const u = new o(a);
      return r.name && (u.name = r.name), Ln(u, r), t.associations.set(u, { materials: e }), r.extensions && mi(i, u, r), u;
    });
  }
  createUniqueName(e) {
    const t = Je.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(a) {
      return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
        return hh(l, a, t);
      });
    }
    const o = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], h = z0(c), u = i[h];
      if (u) o.push(u.promise);
      else {
        let d;
        c.extensions && c.extensions[ze.KHR_DRACO_MESH_COMPRESSION] ? d = r(c) : d = hh(new en(), c, t), i[h] = { primitive: c, promise: d }, o.push(d);
      }
    }
    return Promise.all(o);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], o = r.primitives, a = [];
    for (let l = 0, c = o.length; l < c; l++) {
      const h = o[l].material === void 0 ? O0(this.cache) : this.getDependency("material", o[l].material);
      a.push(h);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
      for (let p = 0, _ = h.length; p < _; p++) {
        const g = h[p], m = o[p];
        let f;
        const T = c[p];
        if (m.mode === Zt.TRIANGLES || m.mode === Zt.TRIANGLE_STRIP || m.mode === Zt.TRIANGLE_FAN || m.mode === void 0) f = r.isSkinnedMesh === true ? new Sf(g, T) : new tt(g, T), f.isSkinnedMesh === true && f.normalizeSkinWeights(), m.mode === Zt.TRIANGLE_STRIP ? f.geometry = oh(f.geometry, kh) : m.mode === Zt.TRIANGLE_FAN && (f.geometry = oh(f.geometry, Xa));
        else if (m.mode === Zt.LINES) f = new wf(g, T);
        else if (m.mode === Zt.LINE_STRIP) f = new yl(g, T);
        else if (m.mode === Zt.LINE_LOOP) f = new Rf(g, T);
        else if (m.mode === Zt.POINTS) f = new Cf(g, T);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(f.geometry.morphAttributes).length > 0 && k0(f, r), f.name = t.createUniqueName(r.name || "mesh_" + e), Ln(f, r), m.extensions && mi(i, f, m), t.assignFinalMaterial(f), u.push(f);
      }
      for (let p = 0, _ = u.length; p < _; p++) t.associations.set(u[p], { meshes: e, primitives: p });
      if (u.length === 1) return r.extensions && mi(i, u[0], r), u[0];
      const d = new ei();
      r.extensions && mi(i, d, r), t.associations.set(d, { meshes: e });
      for (let p = 0, _ = u.length; p < _; p++) d.add(u[p]);
      return d;
    });
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Dt(Vh.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new ho(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Ln(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++) n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), o = i, a = [], l = [];
      for (let c = 0, h = o.length; c < h; c++) {
        const u = o[c];
        if (u) {
          a.push(u);
          const d = new Le();
          r !== null && d.fromArray(r.array, c * 16), l.push(d);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new vl(a, l);
    });
  }
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, o = [], a = [], l = [], c = [], h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const p = i.channels[u], _ = i.samplers[p.sampler], g = p.target, m = g.node, f = i.parameters !== void 0 ? i.parameters[_.input] : _.input, T = i.parameters !== void 0 ? i.parameters[_.output] : _.output;
      g.node !== void 0 && (o.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", f)), l.push(this.getDependency("accessor", T)), c.push(_), h.push(g));
    }
    return Promise.all([Promise.all(o), Promise.all(a), Promise.all(l), Promise.all(c), Promise.all(h)]).then(function(u) {
      const d = u[0], p = u[1], _ = u[2], g = u[3], m = u[4], f = [];
      for (let T = 0, E = d.length; T < E; T++) {
        const S = d[T], P = p[T], w = _[T], C = g[T], N = m[T];
        if (S === void 0) continue;
        S.updateMatrix && S.updateMatrix();
        const M = n._createAnimationTracks(S, P, w, C, N);
        if (M) for (let y = 0; y < M.length; y++) f.push(M[y]);
      }
      return new Ka(r, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const o = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh) for (let l = 0, c = i.weights.length; l < c; l++) a.morphTargetInfluences[l] = i.weights[l];
      }), o;
    });
  }
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), o = [], a = i.children || [];
    for (let c = 0, h = a.length; c < h; c++) o.push(n.getDependency("node", a[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([r, Promise.all(o), l]).then(function(c) {
      const h = c[0], u = c[1], d = c[2];
      d !== null && h.traverse(function(p) {
        p.isSkinnedMesh && p.bind(d, V0);
      });
      for (let p = 0, _ = u.length; p < _; p++) h.add(u[p]);
      return h;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e], o = r.name ? i.createUniqueName(r.name) : "", a = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && a.push(l), r.camera !== void 0 && a.push(i.getDependency("camera", r.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, r.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[e] = Promise.all(a).then(function(c) {
      let h;
      if (r.isBone === true ? h = new nu() : c.length > 1 ? h = new ei() : c.length === 1 ? h = c[0] : h = new ct(), h !== c[0]) for (let u = 0, d = c.length; u < d; u++) h.add(c[u]);
      if (r.name && (h.userData.name = r.name, h.name = o), Ln(h, r), r.extensions && mi(n, h, r), r.matrix !== void 0) {
        const u = new Le();
        u.fromArray(r.matrix), h.applyMatrix4(u);
      } else r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new ei();
    n.name && (r.name = i.createUniqueName(n.name)), Ln(r, n), n.extensions && mi(t, r, n);
    const o = n.nodes || [], a = [];
    for (let l = 0, c = o.length; l < c; l++) a.push(i.getDependency("node", o[l]));
    return Promise.all(a).then(function(l) {
      for (let h = 0, u = l.length; h < u; h++) r.add(l[h]);
      const c = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, p] of i.associations) (d instanceof un || d instanceof vt) && u.set(d, p);
        return h.traverse((d) => {
          const p = i.associations.get(d);
          p != null && u.set(d, p);
        }), u;
      };
      return i.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const o = [], a = e.name ? e.name : e.uuid, l = [];
    $n[r.path] === $n.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
    }) : l.push(a);
    let c;
    switch ($n[r.path]) {
      case $n.weights:
        c = ds;
        break;
      case $n.rotation:
        c = fs;
        break;
      case $n.position:
      case $n.scale:
        c = ps;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = ds;
            break;
          case 2:
          case 3:
          default:
            c = ps;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? F0[i.interpolation] : $s, u = this._getArrayFromAccessor(n);
    for (let d = 0, p = l.length; d < p; d++) {
      const _ = new c(l[d] + "." + $n[r.path], t.array, u, h);
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(_), o.push(_);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = el(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, o = t.length; r < o; r++) i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof fs ? N0 : xu;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function W0(s3, e, t) {
  const n = e.attributes, i = new Hn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(new R(l[0], l[1], l[2]), new R(c[0], c[1], c[2])), a.normalized) {
        const h = el(ns[a.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const r = e.targets;
  if (r !== void 0) {
    const a = new R(), l = new R();
    for (let c = 0, h = r.length; c < h; c++) {
      const u = r[c];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], p = d.min, _ = d.max;
        if (p !== void 0 && _ !== void 0) {
          if (l.setX(Math.max(Math.abs(p[0]), Math.abs(_[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(_[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(_[2]))), d.normalized) {
            const g = el(ns[d.componentType]);
            l.multiplyScalar(g);
          }
          a.max(l);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(a);
  }
  s3.boundingBox = i;
  const o = new Mn();
  i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, s3.boundingSphere = o;
}
function hh(s3, e, t) {
  const n = e.attributes, i = [];
  function r(o, a) {
    return t.getDependency("accessor", o).then(function(l) {
      s3.setAttribute(a, l);
    });
  }
  for (const o in n) {
    const a = Qa[o] || o.toLowerCase();
    a in s3.attributes || i.push(r(n[o], a));
  }
  if (e.indices !== void 0 && !s3.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      s3.setIndex(a);
    });
    i.push(o);
  }
  return We.workingColorSpace !== Ft && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`), Ln(s3, e), W0(s3, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? B0(s3, e.targets, t) : s3;
  });
}
class X0 extends Jh {
  constructor() {
    super();
    const e = new gs();
    e.deleteAttribute("uv");
    const t = new Qs({ side: Rt }), n = new Qs(), i = new co(16777215, 900, 28, 2);
    i.position.set(0.418, 16.199, 0.3), this.add(i);
    const r = new tt(e, t);
    r.position.set(-0.757, 13.219, 0.717), r.scale.set(31.713, 28.305, 28.591), this.add(r);
    const o = new tt(e, n);
    o.position.set(-10.906, 2.009, 1.846), o.rotation.set(0, -0.195, 0), o.scale.set(2.328, 7.905, 4.651), this.add(o);
    const a = new tt(e, n);
    a.position.set(-5.607, -0.754, -0.758), a.rotation.set(0, 0.994, 0), a.scale.set(1.97, 1.534, 3.955), this.add(a);
    const l = new tt(e, n);
    l.position.set(6.167, 0.857, 7.803), l.rotation.set(0, 0.561, 0), l.scale.set(3.927, 6.285, 3.687), this.add(l);
    const c = new tt(e, n);
    c.position.set(-2.017, 0.018, 6.124), c.rotation.set(0, 0.333, 0), c.scale.set(2.002, 4.566, 2.064), this.add(c);
    const h = new tt(e, n);
    h.position.set(2.291, -0.756, -2.621), h.rotation.set(0, -0.286, 0), h.scale.set(1.546, 1.552, 1.496), this.add(h);
    const u = new tt(e, n);
    u.position.set(-2.193, -0.369, -5.547), u.rotation.set(0, 0.516, 0), u.scale.set(3.875, 3.487, 2.986), this.add(u);
    const d = new tt(e, Vi(50));
    d.position.set(-16.116, 14.37, 8.208), d.scale.set(0.1, 2.428, 2.739), this.add(d);
    const p = new tt(e, Vi(50));
    p.position.set(-16.109, 18.021, -8.207), p.scale.set(0.1, 2.425, 2.751), this.add(p);
    const _ = new tt(e, Vi(17));
    _.position.set(14.904, 12.198, -1.832), _.scale.set(0.15, 4.265, 6.331), this.add(_);
    const g = new tt(e, Vi(43));
    g.position.set(-0.462, 8.89, 14.52), g.scale.set(4.38, 5.441, 0.088), this.add(g);
    const m = new tt(e, Vi(20));
    m.position.set(3.235, 11.486, -12.541), m.scale.set(2.5, 2, 0.1), this.add(m);
    const f = new tt(e, Vi(100));
    f.position.set(0, 20, 0), f.scale.set(1, 0.1, 1), this.add(f);
  }
  dispose() {
    const e = /* @__PURE__ */ new Set();
    this.traverse((t) => {
      t.isMesh && (e.add(t.geometry), e.add(t.material));
    });
    for (const t of e) t.dispose();
  }
}
function Vi(s3) {
  const e = new Fn();
  return e.color.setScalar(s3), e;
}
const yu = { name: "CopyShader", uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}` };
class ir {
  constructor() {
    this.isPass = true, this.enabled = true, this.needsSwap = true, this.clear = false, this.renderToScreen = false;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
const Y0 = new ho(-1, 1, 1, -1, 0, 1);
class q0 extends en {
  constructor() {
    super(), this.setAttribute("position", new dn([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new dn([0, 2, 0, 0, 2, 0], 2));
  }
}
const j0 = new q0();
class Su {
  constructor(e) {
    this._mesh = new tt(j0, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, Y0);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class K0 extends ir {
  constructor(e, t) {
    super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof kt ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = Qr.clone(e.uniforms), this.material = new kt({ name: e.name !== void 0 ? e.name : "unspecified", defines: Object.assign({}, e.defines), uniforms: this.uniforms, vertexShader: e.vertexShader, fragmentShader: e.fragmentShader })), this.fsQuad = new Su(this.material);
  }
  render(e, t, n) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class uh extends ir {
  constructor(e, t) {
    super(), this.scene = e, this.camera = t, this.clear = true, this.needsSwap = false, this.inverse = false;
  }
  render(e, t, n) {
    const i = e.getContext(), r = e.state;
    r.buffers.color.setMask(false), r.buffers.depth.setMask(false), r.buffers.color.setLocked(true), r.buffers.depth.setLocked(true);
    let o, a;
    this.inverse ? (o = 0, a = 1) : (o = 1, a = 0), r.buffers.stencil.setTest(true), r.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), r.buffers.stencil.setFunc(i.ALWAYS, o, 4294967295), r.buffers.stencil.setClear(a), r.buffers.stencil.setLocked(true), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), r.buffers.color.setLocked(false), r.buffers.depth.setLocked(false), r.buffers.color.setMask(true), r.buffers.depth.setMask(true), r.buffers.stencil.setLocked(false), r.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), r.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP), r.buffers.stencil.setLocked(true);
  }
}
class $0 extends ir {
  constructor() {
    super(), this.needsSwap = false;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(false), e.state.buffers.stencil.setTest(false);
  }
}
class Z0 {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const n = e.getSize(new pe());
      this._width = n.width, this._height = n.height, t = new Qt(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: yn }), t.texture.name = "EffectComposer.rt1";
    } else this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = true, this.passes = [], this.copyPass = new K0(yu), this.copyPass.material.blending = On, this.clock = new uu();
  }
  swapBuffers() {
    const e = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e;
  }
  addPass(e) {
    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++) if (this.passes[t].enabled) return false;
    return true;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = false;
    for (let i = 0, r = this.passes.length; i < r; i++) {
      const o = this.passes[i];
      if (o.enabled !== false) {
        if (o.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), o.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), o.needsSwap) {
          if (n) {
            const a = this.renderer.getContext(), l = this.renderer.state.buffers.stencil;
            l.setFunc(a.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), l.setFunc(a.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        uh !== void 0 && (o instanceof uh ? n = true : o instanceof $0 && (n = false));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new pe());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(e, t) {
    this._width = e, this._height = t;
    const n = this._width * this._pixelRatio, i = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
    for (let r = 0; r < this.passes.length; r++) this.passes[r].setSize(n, i);
  }
  setPixelRatio(e) {
    this._pixelRatio = e, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}
class J0 extends ir {
  constructor(e, t, n = null, i = null, r = null) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = r, this.clear = true, this.clearDepth = false, this.needsSwap = false, this._oldClearColor = new Ee();
  }
  render(e, t, n) {
    const i = e.autoClear;
    e.autoClear = false;
    let r, o;
    this.overrideMaterial !== null && (o = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (r = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == true && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === true && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(r), this.overrideMaterial !== null && (this.scene.overrideMaterial = o), e.autoClear = i;
  }
}
const Q0 = { uniforms: { tDiffuse: { value: null }, luminosityThreshold: { value: 1 }, smoothWidth: { value: 1 }, defaultColor: { value: new Ee(0) }, defaultOpacity: { value: 0 } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}` };
class ms extends ir {
  constructor(e, t, n, i) {
    super(), this.strength = t !== void 0 ? t : 1, this.radius = n, this.threshold = i, this.resolution = e !== void 0 ? new pe(e.x, e.y) : new pe(256, 256), this.clearColor = new Ee(0, 0, 0), this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
    let r = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new Qt(r, o, { type: yn }), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = false;
    for (let u = 0; u < this.nMips; u++) {
      const d = new Qt(r, o, { type: yn });
      d.texture.name = "UnrealBloomPass.h" + u, d.texture.generateMipmaps = false, this.renderTargetsHorizontal.push(d);
      const p = new Qt(r, o, { type: yn });
      p.texture.name = "UnrealBloomPass.v" + u, p.texture.generateMipmaps = false, this.renderTargetsVertical.push(p), r = Math.round(r / 2), o = Math.round(o / 2);
    }
    const a = Q0;
    this.highPassUniforms = Qr.clone(a.uniforms), this.highPassUniforms.luminosityThreshold.value = i, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new kt({ uniforms: this.highPassUniforms, vertexShader: a.vertexShader, fragmentShader: a.fragmentShader }), this.separableBlurMaterials = [];
    const l = [3, 5, 7, 9, 11];
    r = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
    for (let u = 0; u < this.nMips; u++) this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])), this.separableBlurMaterials[u].uniforms.invSize.value = new pe(1 / r, 1 / o), r = Math.round(r / 2), o = Math.round(o / 2);
    this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = 0.1;
    const c = [1, 0.8, 0.6, 0.4, 0.2];
    this.compositeMaterial.uniforms.bloomFactors.value = c, this.bloomTintColors = [new R(1, 1, 1), new R(1, 1, 1), new R(1, 1, 1), new R(1, 1, 1), new R(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
    const h = yu;
    this.copyUniforms = Qr.clone(h.uniforms), this.blendMaterial = new kt({ uniforms: this.copyUniforms, vertexShader: h.vertexShader, fragmentShader: h.fragmentShader, blending: aa, depthTest: false, depthWrite: false, transparent: true }), this.enabled = true, this.needsSwap = false, this._oldClearColor = new Ee(), this.oldClearAlpha = 1, this.basic = new Fn(), this.fsQuad = new Su(null);
  }
  dispose() {
    for (let e = 0; e < this.renderTargetsHorizontal.length; e++) this.renderTargetsHorizontal[e].dispose();
    for (let e = 0; e < this.renderTargetsVertical.length; e++) this.renderTargetsVertical[e].dispose();
    this.renderTargetBright.dispose();
    for (let e = 0; e < this.separableBlurMaterials.length; e++) this.separableBlurMaterials[e].dispose();
    this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this.basic.dispose(), this.fsQuad.dispose();
  }
  setSize(e, t) {
    let n = Math.round(e / 2), i = Math.round(t / 2);
    this.renderTargetBright.setSize(n, i);
    for (let r = 0; r < this.nMips; r++) this.renderTargetsHorizontal[r].setSize(n, i), this.renderTargetsVertical[r].setSize(n, i), this.separableBlurMaterials[r].uniforms.invSize.value = new pe(1 / n, 1 / i), n = Math.round(n / 2), i = Math.round(i / 2);
  }
  render(e, t, n, i, r) {
    e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
    const o = e.autoClear;
    e.autoClear = false, e.setClearColor(this.clearColor, 0), r && e.state.buffers.stencil.setTest(false), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = n.texture, e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = n.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this.fsQuad.render(e);
    let a = this.renderTargetBright;
    for (let l = 0; l < this.nMips; l++) this.fsQuad.material = this.separableBlurMaterials[l], this.separableBlurMaterials[l].uniforms.colorTexture.value = a.texture, this.separableBlurMaterials[l].uniforms.direction.value = ms.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[l]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l].texture, this.separableBlurMaterials[l].uniforms.direction.value = ms.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[l]), e.clear(), this.fsQuad.render(e), a = this.renderTargetsVertical[l];
    this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, r && e.state.buffers.stencil.setTest(true), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(n), this.fsQuad.render(e)), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = o;
  }
  getSeparableBlurMaterial(e) {
    const t = [];
    for (let n = 0; n < e; n++) t.push(0.39894 * Math.exp(-0.5 * n * n / (e * e)) / e);
    return new kt({ defines: { KERNEL_RADIUS: e }, uniforms: { colorTexture: { value: null }, invSize: { value: new pe(0.5, 0.5) }, direction: { value: new pe(0.5, 0.5) }, gaussianCoefficients: { value: t } }, vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`, fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}` });
  }
  getCompositeMaterial(e) {
    return new kt({ defines: { NUM_MIPS: e }, uniforms: { blurTexture1: { value: null }, blurTexture2: { value: null }, blurTexture3: { value: null }, blurTexture4: { value: null }, blurTexture5: { value: null }, bloomStrength: { value: 1 }, bloomFactors: { value: null }, bloomTintColors: { value: null }, bloomRadius: { value: 0 } }, vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`, fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}` });
  }
}
ms.BlurDirectionX = new pe(1, 0);
ms.BlurDirectionY = new pe(0, 1);
function ex(s3) {
  if (!(typeof window > "u")) {
    var e = document.createElement("style");
    return e.setAttribute("type", "text/css"), e.innerHTML = s3, document.head.appendChild(e), s3;
  }
}
function $i(s3, e) {
  var t = s3.__state.conversionName.toString(), n = Math.round(s3.r), i = Math.round(s3.g), r = Math.round(s3.b), o = s3.a, a = Math.round(s3.h), l = s3.s.toFixed(1), c = s3.v.toFixed(1);
  if (e || t === "THREE_CHAR_HEX" || t === "SIX_CHAR_HEX") {
    for (var h = s3.hex.toString(16); h.length < 6; ) h = "0" + h;
    return "#" + h;
  } else {
    if (t === "CSS_RGB") return "rgb(" + n + "," + i + "," + r + ")";
    if (t === "CSS_RGBA") return "rgba(" + n + "," + i + "," + r + "," + o + ")";
    if (t === "HEX") return "0x" + s3.hex.toString(16);
    if (t === "RGB_ARRAY") return "[" + n + "," + i + "," + r + "]";
    if (t === "RGBA_ARRAY") return "[" + n + "," + i + "," + r + "," + o + "]";
    if (t === "RGB_OBJ") return "{r:" + n + ",g:" + i + ",b:" + r + "}";
    if (t === "RGBA_OBJ") return "{r:" + n + ",g:" + i + ",b:" + r + ",a:" + o + "}";
    if (t === "HSV_OBJ") return "{h:" + a + ",s:" + l + ",v:" + c + "}";
    if (t === "HSVA_OBJ") return "{h:" + a + ",s:" + l + ",v:" + c + ",a:" + o + "}";
  }
  return "unknown format";
}
var dh = Array.prototype.forEach, Os = Array.prototype.slice, j = { BREAK: {}, extend: function(e) {
  return this.each(Os.call(arguments, 1), function(t) {
    var n = this.isObject(t) ? Object.keys(t) : [];
    n.forEach((function(i) {
      this.isUndefined(t[i]) || (e[i] = t[i]);
    }).bind(this));
  }, this), e;
}, defaults: function(e) {
  return this.each(Os.call(arguments, 1), function(t) {
    var n = this.isObject(t) ? Object.keys(t) : [];
    n.forEach((function(i) {
      this.isUndefined(e[i]) && (e[i] = t[i]);
    }).bind(this));
  }, this), e;
}, compose: function() {
  var e = Os.call(arguments);
  return function() {
    for (var t = Os.call(arguments), n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
    return t[0];
  };
}, each: function(e, t, n) {
  if (e) {
    if (dh && e.forEach && e.forEach === dh) e.forEach(t, n);
    else if (e.length === e.length + 0) {
      var i = void 0, r = void 0;
      for (i = 0, r = e.length; i < r; i++) if (i in e && t.call(n, e[i], i) === this.BREAK) return;
    } else for (var o in e) if (t.call(n, e[o], o) === this.BREAK) return;
  }
}, defer: function(e) {
  setTimeout(e, 0);
}, debounce: function(e, t, n) {
  var i = void 0;
  return function() {
    var r = this, o = arguments;
    function a() {
      i = null, n || e.apply(r, o);
    }
    var l = n || !i;
    clearTimeout(i), i = setTimeout(a, t), l && e.apply(r, o);
  };
}, toArray: function(e) {
  return e.toArray ? e.toArray() : Os.call(e);
}, isUndefined: function(e) {
  return e === void 0;
}, isNull: function(e) {
  return e === null;
}, isNaN: (function(s3) {
  function e(t) {
    return s3.apply(this, arguments);
  }
  return e.toString = function() {
    return s3.toString();
  }, e;
})(function(s3) {
  return isNaN(s3);
}), isArray: Array.isArray || function(s3) {
  return s3.constructor === Array;
}, isObject: function(e) {
  return e === Object(e);
}, isNumber: function(e) {
  return e === e + 0;
}, isString: function(e) {
  return e === e + "";
}, isBoolean: function(e) {
  return e === false || e === true;
}, isFunction: function(e) {
  return e instanceof Function;
} }, tx = [{ litmus: j.isString, conversions: { THREE_CHAR_HEX: { read: function(e) {
  var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
  return t === null ? false : { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) };
}, write: $i }, SIX_CHAR_HEX: { read: function(e) {
  var t = e.match(/^#([A-F0-9]{6})$/i);
  return t === null ? false : { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) };
}, write: $i }, CSS_RGB: { read: function(e) {
  var t = e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
  return t === null ? false : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) };
}, write: $i }, CSS_RGBA: { read: function(e) {
  var t = e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
  return t === null ? false : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) };
}, write: $i } } }, { litmus: j.isNumber, conversions: { HEX: { read: function(e) {
  return { space: "HEX", hex: e, conversionName: "HEX" };
}, write: function(e) {
  return e.hex;
} } } }, { litmus: j.isArray, conversions: { RGB_ARRAY: { read: function(e) {
  return e.length !== 3 ? false : { space: "RGB", r: e[0], g: e[1], b: e[2] };
}, write: function(e) {
  return [e.r, e.g, e.b];
} }, RGBA_ARRAY: { read: function(e) {
  return e.length !== 4 ? false : { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] };
}, write: function(e) {
  return [e.r, e.g, e.b, e.a];
} } } }, { litmus: j.isObject, conversions: { RGBA_OBJ: { read: function(e) {
  return j.isNumber(e.r) && j.isNumber(e.g) && j.isNumber(e.b) && j.isNumber(e.a) ? { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a } : false;
}, write: function(e) {
  return { r: e.r, g: e.g, b: e.b, a: e.a };
} }, RGB_OBJ: { read: function(e) {
  return j.isNumber(e.r) && j.isNumber(e.g) && j.isNumber(e.b) ? { space: "RGB", r: e.r, g: e.g, b: e.b } : false;
}, write: function(e) {
  return { r: e.r, g: e.g, b: e.b };
} }, HSVA_OBJ: { read: function(e) {
  return j.isNumber(e.h) && j.isNumber(e.s) && j.isNumber(e.v) && j.isNumber(e.a) ? { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a } : false;
}, write: function(e) {
  return { h: e.h, s: e.s, v: e.v, a: e.a };
} }, HSV_OBJ: { read: function(e) {
  return j.isNumber(e.h) && j.isNumber(e.s) && j.isNumber(e.v) ? { space: "HSV", h: e.h, s: e.s, v: e.v } : false;
}, write: function(e) {
  return { h: e.h, s: e.s, v: e.v };
} } } }], Bs = void 0, kr = void 0, tl = function() {
  kr = false;
  var e = arguments.length > 1 ? j.toArray(arguments) : arguments[0];
  return j.each(tx, function(t) {
    if (t.litmus(e)) return j.each(t.conversions, function(n, i) {
      if (Bs = n.read(e), kr === false && Bs !== false) return kr = Bs, Bs.conversionName = i, Bs.conversion = n, j.BREAK;
    }), j.BREAK;
  }), kr;
}, fh = void 0, no = { hsv_to_rgb: function(e, t, n) {
  var i = Math.floor(e / 60) % 6, r = e / 60 - Math.floor(e / 60), o = n * (1 - t), a = n * (1 - r * t), l = n * (1 - (1 - r) * t), c = [[n, l, o], [a, n, o], [o, n, l], [o, a, n], [l, o, n], [n, o, a]][i];
  return { r: c[0] * 255, g: c[1] * 255, b: c[2] * 255 };
}, rgb_to_hsv: function(e, t, n) {
  var i = Math.min(e, t, n), r = Math.max(e, t, n), o = r - i, a = void 0, l = void 0;
  if (r !== 0) l = o / r;
  else return { h: NaN, s: 0, v: 0 };
  return e === r ? a = (t - n) / o : t === r ? a = 2 + (n - e) / o : a = 4 + (e - t) / o, a /= 6, a < 0 && (a += 1), { h: a * 360, s: l, v: r / 255 };
}, rgb_to_hex: function(e, t, n) {
  var i = this.hex_with_component(0, 2, e);
  return i = this.hex_with_component(i, 1, t), i = this.hex_with_component(i, 0, n), i;
}, component_from_hex: function(e, t) {
  return e >> t * 8 & 255;
}, hex_with_component: function(e, t, n) {
  return n << (fh = t * 8) | e & ~(255 << fh);
} }, nx = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s3) {
  return typeof s3;
} : function(s3) {
  return s3 && typeof Symbol == "function" && s3.constructor === Symbol && s3 !== Symbol.prototype ? "symbol" : typeof s3;
}, fn = function(s3, e) {
  if (!(s3 instanceof e)) throw new TypeError("Cannot call a class as a function");
}, pn = /* @__PURE__ */ (function() {
  function s3(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, t, n) {
    return t && s3(e.prototype, t), n && s3(e, n), e;
  };
})(), ii = function s(e, t, n) {
  e === null && (e = Function.prototype);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (i === void 0) {
    var r = Object.getPrototypeOf(e);
    return r === null ? void 0 : s(r, t, n);
  } else {
    if ("value" in i) return i.value;
    var o = i.get;
    return o === void 0 ? void 0 : o.call(n);
  }
}, ri = function(s3, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  s3.prototype = Object.create(e && e.prototype, { constructor: { value: s3, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(s3, e) : s3.__proto__ = e);
}, oi = function(s3, e) {
  if (!s3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : s3;
}, Mt = (function() {
  function s3() {
    if (fn(this, s3), this.__state = tl.apply(this, arguments), this.__state === false) throw new Error("Failed to interpret color arguments");
    this.__state.a = this.__state.a || 1;
  }
  return pn(s3, [{ key: "toString", value: function() {
    return $i(this);
  } }, { key: "toHexString", value: function() {
    return $i(this, true);
  } }, { key: "toOriginal", value: function() {
    return this.__state.conversion.write(this);
  } }]), s3;
})();
function wl(s3, e, t) {
  Object.defineProperty(s3, e, { get: function() {
    return this.__state.space === "RGB" ? this.__state[e] : (Mt.recalculateRGB(this, e, t), this.__state[e]);
  }, set: function(i) {
    this.__state.space !== "RGB" && (Mt.recalculateRGB(this, e, t), this.__state.space = "RGB"), this.__state[e] = i;
  } });
}
function Rl(s3, e) {
  Object.defineProperty(s3, e, { get: function() {
    return this.__state.space === "HSV" ? this.__state[e] : (Mt.recalculateHSV(this), this.__state[e]);
  }, set: function(n) {
    this.__state.space !== "HSV" && (Mt.recalculateHSV(this), this.__state.space = "HSV"), this.__state[e] = n;
  } });
}
Mt.recalculateRGB = function(s3, e, t) {
  if (s3.__state.space === "HEX") s3.__state[e] = no.component_from_hex(s3.__state.hex, t);
  else if (s3.__state.space === "HSV") j.extend(s3.__state, no.hsv_to_rgb(s3.__state.h, s3.__state.s, s3.__state.v));
  else throw new Error("Corrupted color state");
};
Mt.recalculateHSV = function(s3) {
  var e = no.rgb_to_hsv(s3.r, s3.g, s3.b);
  j.extend(s3.__state, { s: e.s, v: e.v }), j.isNaN(e.h) ? j.isUndefined(s3.__state.h) && (s3.__state.h = 0) : s3.__state.h = e.h;
};
Mt.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"];
wl(Mt.prototype, "r", 2);
wl(Mt.prototype, "g", 1);
wl(Mt.prototype, "b", 0);
Rl(Mt.prototype, "h");
Rl(Mt.prototype, "s");
Rl(Mt.prototype, "v");
Object.defineProperty(Mt.prototype, "a", { get: function() {
  return this.__state.a;
}, set: function(e) {
  this.__state.a = e;
} });
Object.defineProperty(Mt.prototype, "hex", { get: function() {
  return this.__state.space !== "HEX" && (this.__state.hex = no.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex;
}, set: function(e) {
  this.__state.space = "HEX", this.__state.hex = e;
} });
var Si = (function() {
  function s3(e, t) {
    fn(this, s3), this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = void 0, this.__onFinishChange = void 0;
  }
  return pn(s3, [{ key: "onChange", value: function(t) {
    return this.__onChange = t, this;
  } }, { key: "onFinishChange", value: function(t) {
    return this.__onFinishChange = t, this;
  } }, { key: "setValue", value: function(t) {
    return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this;
  } }, { key: "getValue", value: function() {
    return this.object[this.property];
  } }, { key: "updateDisplay", value: function() {
    return this;
  } }, { key: "isModified", value: function() {
    return this.initialValue !== this.getValue();
  } }]), s3;
})(), ix = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, Mu = {};
j.each(ix, function(s3, e) {
  j.each(s3, function(t) {
    Mu[t] = e;
  });
});
var sx = /(\d+(\.\d+)?)px/;
function _n(s3) {
  if (s3 === "0" || j.isUndefined(s3)) return 0;
  var e = s3.match(sx);
  return j.isNull(e) ? 0 : parseFloat(e[1]);
}
var O = { makeSelectable: function(e, t) {
  e === void 0 || e.style === void 0 || (e.onselectstart = t ? function() {
    return false;
  } : function() {
  }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off");
}, makeFullscreen: function(e, t, n) {
  var i = n, r = t;
  j.isUndefined(r) && (r = true), j.isUndefined(i) && (i = true), e.style.position = "absolute", r && (e.style.left = 0, e.style.right = 0), i && (e.style.top = 0, e.style.bottom = 0);
}, fakeEvent: function(e, t, n, i) {
  var r = n || {}, o = Mu[t];
  if (!o) throw new Error("Event type " + t + " not supported.");
  var a = document.createEvent(o);
  switch (o) {
    case "MouseEvents": {
      var l = r.x || r.clientX || 0, c = r.y || r.clientY || 0;
      a.initMouseEvent(t, r.bubbles || false, r.cancelable || true, window, r.clickCount || 1, 0, 0, l, c, false, false, false, false, 0, null);
      break;
    }
    case "KeyboardEvents": {
      var h = a.initKeyboardEvent || a.initKeyEvent;
      j.defaults(r, { cancelable: true, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, keyCode: void 0, charCode: void 0 }), h(t, r.bubbles || false, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode);
      break;
    }
    default: {
      a.initEvent(t, r.bubbles || false, r.cancelable || true);
      break;
    }
  }
  j.defaults(a, i), e.dispatchEvent(a);
}, bind: function(e, t, n, i) {
  var r = i || false;
  return e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent("on" + t, n), O;
}, unbind: function(e, t, n, i) {
  var r = i || false;
  return e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent && e.detachEvent("on" + t, n), O;
}, addClass: function(e, t) {
  if (e.className === void 0) e.className = t;
  else if (e.className !== t) {
    var n = e.className.split(/ +/);
    n.indexOf(t) === -1 && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""));
  }
  return O;
}, removeClass: function(e, t) {
  if (t) if (e.className === t) e.removeAttribute("class");
  else {
    var n = e.className.split(/ +/), i = n.indexOf(t);
    i !== -1 && (n.splice(i, 1), e.className = n.join(" "));
  }
  else e.className = void 0;
  return O;
}, hasClass: function(e, t) {
  return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || false;
}, getWidth: function(e) {
  var t = getComputedStyle(e);
  return _n(t["border-left-width"]) + _n(t["border-right-width"]) + _n(t["padding-left"]) + _n(t["padding-right"]) + _n(t.width);
}, getHeight: function(e) {
  var t = getComputedStyle(e);
  return _n(t["border-top-width"]) + _n(t["border-bottom-width"]) + _n(t["padding-top"]) + _n(t["padding-bottom"]) + _n(t.height);
}, getOffset: function(e) {
  var t = e, n = { left: 0, top: 0 };
  if (t.offsetParent) do
    n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent;
  while (t);
  return n;
}, isActive: function(e) {
  return e === document.activeElement && (e.type || e.href);
} }, bu = (function(s3) {
  ri(e, s3);
  function e(t, n) {
    fn(this, e);
    var i = oi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), r = i;
    i.__prev = i.getValue(), i.__checkbox = document.createElement("input"), i.__checkbox.setAttribute("type", "checkbox");
    function o() {
      r.setValue(!r.__prev);
    }
    return O.bind(i.__checkbox, "change", o, false), i.domElement.appendChild(i.__checkbox), i.updateDisplay(), i;
  }
  return pn(e, [{ key: "setValue", value: function(n) {
    var i = ii(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), i;
  } }, { key: "updateDisplay", value: function() {
    return this.getValue() === true ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = true, this.__prev = true) : (this.__checkbox.checked = false, this.__prev = false), ii(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
})(Si), rx = (function(s3) {
  ri(e, s3);
  function e(t, n, i) {
    fn(this, e);
    var r = oi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), o = i, a = r;
    if (r.__select = document.createElement("select"), j.isArray(o)) {
      var l = {};
      j.each(o, function(c) {
        l[c] = c;
      }), o = l;
    }
    return j.each(o, function(c, h) {
      var u = document.createElement("option");
      u.innerHTML = h, u.setAttribute("value", c), a.__select.appendChild(u);
    }), r.updateDisplay(), O.bind(r.__select, "change", function() {
      var c = this.options[this.selectedIndex].value;
      a.setValue(c);
    }), r.domElement.appendChild(r.__select), r;
  }
  return pn(e, [{ key: "setValue", value: function(n) {
    var i = ii(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), i;
  } }, { key: "updateDisplay", value: function() {
    return O.isActive(this.__select) ? this : (this.__select.value = this.getValue(), ii(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this));
  } }]), e;
})(Si), ox = (function(s3) {
  ri(e, s3);
  function e(t, n) {
    fn(this, e);
    var i = oi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), r = i;
    function o() {
      r.setValue(r.__input.value);
    }
    function a() {
      r.__onFinishChange && r.__onFinishChange.call(r, r.getValue());
    }
    return i.__input = document.createElement("input"), i.__input.setAttribute("type", "text"), O.bind(i.__input, "keyup", o), O.bind(i.__input, "change", o), O.bind(i.__input, "blur", a), O.bind(i.__input, "keydown", function(l) {
      l.keyCode === 13 && this.blur();
    }), i.updateDisplay(), i.domElement.appendChild(i.__input), i;
  }
  return pn(e, [{ key: "updateDisplay", value: function() {
    return O.isActive(this.__input) || (this.__input.value = this.getValue()), ii(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
})(Si);
function ph(s3) {
  var e = s3.toString();
  return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0;
}
var Eu = (function(s3) {
  ri(e, s3);
  function e(t, n, i) {
    fn(this, e);
    var r = oi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), o = i || {};
    return r.__min = o.min, r.__max = o.max, r.__step = o.step, j.isUndefined(r.__step) ? r.initialValue === 0 ? r.__impliedStep = 1 : r.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(r.initialValue)) / Math.LN10)) / 10 : r.__impliedStep = r.__step, r.__precision = ph(r.__impliedStep), r;
  }
  return pn(e, [{ key: "setValue", value: function(n) {
    var i = n;
    return this.__min !== void 0 && i < this.__min ? i = this.__min : this.__max !== void 0 && i > this.__max && (i = this.__max), this.__step !== void 0 && i % this.__step !== 0 && (i = Math.round(i / this.__step) * this.__step), ii(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, i);
  } }, { key: "min", value: function(n) {
    return this.__min = n, this;
  } }, { key: "max", value: function(n) {
    return this.__max = n, this;
  } }, { key: "step", value: function(n) {
    return this.__step = n, this.__impliedStep = n, this.__precision = ph(n), this;
  } }]), e;
})(Si);
function ax(s3, e) {
  var t = Math.pow(10, e);
  return Math.round(s3 * t) / t;
}
var io = (function(s3) {
  ri(e, s3);
  function e(t, n, i) {
    fn(this, e);
    var r = oi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, i));
    r.__truncationSuspended = false;
    var o = r, a = void 0;
    function l() {
      var _ = parseFloat(o.__input.value);
      j.isNaN(_) || o.setValue(_);
    }
    function c() {
      o.__onFinishChange && o.__onFinishChange.call(o, o.getValue());
    }
    function h() {
      c();
    }
    function u(_) {
      var g = a - _.clientY;
      o.setValue(o.getValue() + g * o.__impliedStep), a = _.clientY;
    }
    function d() {
      O.unbind(window, "mousemove", u), O.unbind(window, "mouseup", d), c();
    }
    function p(_) {
      O.bind(window, "mousemove", u), O.bind(window, "mouseup", d), a = _.clientY;
    }
    return r.__input = document.createElement("input"), r.__input.setAttribute("type", "text"), O.bind(r.__input, "change", l), O.bind(r.__input, "blur", h), O.bind(r.__input, "mousedown", p), O.bind(r.__input, "keydown", function(_) {
      _.keyCode === 13 && (o.__truncationSuspended = true, this.blur(), o.__truncationSuspended = false, c());
    }), r.updateDisplay(), r.domElement.appendChild(r.__input), r;
  }
  return pn(e, [{ key: "updateDisplay", value: function() {
    return this.__input.value = this.__truncationSuspended ? this.getValue() : ax(this.getValue(), this.__precision), ii(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
})(Eu);
function mh(s3, e, t, n, i) {
  return n + (i - n) * ((s3 - e) / (t - e));
}
var nl = (function(s3) {
  ri(e, s3);
  function e(t, n, i, r, o) {
    fn(this, e);
    var a = oi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, { min: i, max: r, step: o })), l = a;
    a.__background = document.createElement("div"), a.__foreground = document.createElement("div"), O.bind(a.__background, "mousedown", c), O.bind(a.__background, "touchstart", d), O.addClass(a.__background, "slider"), O.addClass(a.__foreground, "slider-fg");
    function c(g) {
      document.activeElement.blur(), O.bind(window, "mousemove", h), O.bind(window, "mouseup", u), h(g);
    }
    function h(g) {
      g.preventDefault();
      var m = l.__background.getBoundingClientRect();
      return l.setValue(mh(g.clientX, m.left, m.right, l.__min, l.__max)), false;
    }
    function u() {
      O.unbind(window, "mousemove", h), O.unbind(window, "mouseup", u), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
    }
    function d(g) {
      g.touches.length === 1 && (O.bind(window, "touchmove", p), O.bind(window, "touchend", _), p(g));
    }
    function p(g) {
      var m = g.touches[0].clientX, f = l.__background.getBoundingClientRect();
      l.setValue(mh(m, f.left, f.right, l.__min, l.__max));
    }
    function _() {
      O.unbind(window, "touchmove", p), O.unbind(window, "touchend", _), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
    }
    return a.updateDisplay(), a.__background.appendChild(a.__foreground), a.domElement.appendChild(a.__background), a;
  }
  return pn(e, [{ key: "updateDisplay", value: function() {
    var n = (this.getValue() - this.__min) / (this.__max - this.__min);
    return this.__foreground.style.width = n * 100 + "%", ii(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
})(Eu), Tu = (function(s3) {
  ri(e, s3);
  function e(t, n, i) {
    fn(this, e);
    var r = oi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), o = r;
    return r.__button = document.createElement("div"), r.__button.innerHTML = i === void 0 ? "Fire" : i, O.bind(r.__button, "click", function(a) {
      return a.preventDefault(), o.fire(), false;
    }), O.addClass(r.__button, "button"), r.domElement.appendChild(r.__button), r;
  }
  return pn(e, [{ key: "fire", value: function() {
    this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
  } }]), e;
})(Si), il = (function(s3) {
  ri(e, s3);
  function e(t, n) {
    fn(this, e);
    var i = oi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    i.__color = new Mt(i.getValue()), i.__temp = new Mt(0);
    var r = i;
    i.domElement = document.createElement("div"), O.makeSelectable(i.domElement, false), i.__selector = document.createElement("div"), i.__selector.className = "selector", i.__saturation_field = document.createElement("div"), i.__saturation_field.className = "saturation-field", i.__field_knob = document.createElement("div"), i.__field_knob.className = "field-knob", i.__field_knob_border = "2px solid ", i.__hue_knob = document.createElement("div"), i.__hue_knob.className = "hue-knob", i.__hue_field = document.createElement("div"), i.__hue_field.className = "hue-field", i.__input = document.createElement("input"), i.__input.type = "text", i.__input_textShadow = "0 1px 1px ", O.bind(i.__input, "keydown", function(g) {
      g.keyCode === 13 && u.call(this);
    }), O.bind(i.__input, "blur", u), O.bind(i.__selector, "mousedown", function() {
      O.addClass(this, "drag").bind(window, "mouseup", function() {
        O.removeClass(r.__selector, "drag");
      });
    }), O.bind(i.__selector, "touchstart", function() {
      O.addClass(this, "drag").bind(window, "touchend", function() {
        O.removeClass(r.__selector, "drag");
      });
    });
    var o = document.createElement("div");
    j.extend(i.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), j.extend(i.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: i.__field_knob_border + (i.__color.v < 0.5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), j.extend(i.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), j.extend(i.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), j.extend(o.style, { width: "100%", height: "100%", background: "none" }), _h(o, "top", "rgba(0,0,0,0)", "#000"), j.extend(i.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), cx(i.__hue_field), j.extend(i.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: i.__input_textShadow + "rgba(0,0,0,0.7)" }), O.bind(i.__saturation_field, "mousedown", a), O.bind(i.__saturation_field, "touchstart", a), O.bind(i.__field_knob, "mousedown", a), O.bind(i.__field_knob, "touchstart", a), O.bind(i.__hue_field, "mousedown", l), O.bind(i.__hue_field, "touchstart", l);
    function a(g) {
      p(g), O.bind(window, "mousemove", p), O.bind(window, "touchmove", p), O.bind(window, "mouseup", c), O.bind(window, "touchend", c);
    }
    function l(g) {
      _(g), O.bind(window, "mousemove", _), O.bind(window, "touchmove", _), O.bind(window, "mouseup", h), O.bind(window, "touchend", h);
    }
    function c() {
      O.unbind(window, "mousemove", p), O.unbind(window, "touchmove", p), O.unbind(window, "mouseup", c), O.unbind(window, "touchend", c), d();
    }
    function h() {
      O.unbind(window, "mousemove", _), O.unbind(window, "touchmove", _), O.unbind(window, "mouseup", h), O.unbind(window, "touchend", h), d();
    }
    function u() {
      var g = tl(this.value);
      g !== false ? (r.__color.__state = g, r.setValue(r.__color.toOriginal())) : this.value = r.__color.toString();
    }
    function d() {
      r.__onFinishChange && r.__onFinishChange.call(r, r.__color.toOriginal());
    }
    i.__saturation_field.appendChild(o), i.__selector.appendChild(i.__field_knob), i.__selector.appendChild(i.__saturation_field), i.__selector.appendChild(i.__hue_field), i.__hue_field.appendChild(i.__hue_knob), i.domElement.appendChild(i.__input), i.domElement.appendChild(i.__selector), i.updateDisplay();
    function p(g) {
      g.type.indexOf("touch") === -1 && g.preventDefault();
      var m = r.__saturation_field.getBoundingClientRect(), f = g.touches && g.touches[0] || g, T = f.clientX, E = f.clientY, S = (T - m.left) / (m.right - m.left), P = 1 - (E - m.top) / (m.bottom - m.top);
      return P > 1 ? P = 1 : P < 0 && (P = 0), S > 1 ? S = 1 : S < 0 && (S = 0), r.__color.v = P, r.__color.s = S, r.setValue(r.__color.toOriginal()), false;
    }
    function _(g) {
      g.type.indexOf("touch") === -1 && g.preventDefault();
      var m = r.__hue_field.getBoundingClientRect(), f = g.touches && g.touches[0] || g, T = f.clientY, E = 1 - (T - m.top) / (m.bottom - m.top);
      return E > 1 ? E = 1 : E < 0 && (E = 0), r.__color.h = E * 360, r.setValue(r.__color.toOriginal()), false;
    }
    return i;
  }
  return pn(e, [{ key: "updateDisplay", value: function() {
    var n = tl(this.getValue());
    if (n !== false) {
      var i = false;
      j.each(Mt.COMPONENTS, function(a) {
        if (!j.isUndefined(n[a]) && !j.isUndefined(this.__color.__state[a]) && n[a] !== this.__color.__state[a]) return i = true, {};
      }, this), i && j.extend(this.__color.__state, n);
    }
    j.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
    var r = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0, o = 255 - r;
    j.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + r + "," + r + "," + r + ")" }), this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px", this.__temp.s = 1, this.__temp.v = 1, _h(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), j.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + r + "," + r + "," + r + ")", textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)" });
  } }]), e;
})(Si), lx = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
function _h(s3, e, t, n) {
  s3.style.background = "", j.each(lx, function(i) {
    s3.style.cssText += "background: " + i + "linear-gradient(" + e + ", " + t + " 0%, " + n + " 100%); ";
  });
}
function cx(s3) {
  s3.style.background = "", s3.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", s3.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", s3.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", s3.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", s3.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
}
var hx = { load: function(e, t) {
  var n = t || document, i = n.createElement("link");
  i.type = "text/css", i.rel = "stylesheet", i.href = e, n.getElementsByTagName("head")[0].appendChild(i);
}, inject: function(e, t) {
  var n = t || document, i = document.createElement("style");
  i.type = "text/css", i.innerHTML = e;
  var r = n.getElementsByTagName("head")[0];
  try {
    r.appendChild(i);
  } catch {
  }
} }, ux = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`, dx = function(e, t) {
  var n = e[t];
  return j.isArray(arguments[2]) || j.isObject(arguments[2]) ? new rx(e, t, arguments[2]) : j.isNumber(n) ? j.isNumber(arguments[2]) && j.isNumber(arguments[3]) ? j.isNumber(arguments[4]) ? new nl(e, t, arguments[2], arguments[3], arguments[4]) : new nl(e, t, arguments[2], arguments[3]) : j.isNumber(arguments[4]) ? new io(e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new io(e, t, { min: arguments[2], max: arguments[3] }) : j.isString(n) ? new ox(e, t) : j.isFunction(n) ? new Tu(e, t, "") : j.isBoolean(n) ? new bu(e, t) : null;
};
function fx(s3) {
  setTimeout(s3, 1e3 / 60);
}
var px = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || fx, mx = (function() {
  function s3() {
    fn(this, s3), this.backgroundElement = document.createElement("div"), j.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), O.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), j.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
    var e = this;
    O.bind(this.backgroundElement, "click", function() {
      e.hide();
    });
  }
  return pn(s3, [{ key: "show", value: function() {
    var t = this;
    this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), j.defer(function() {
      t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)";
    });
  } }, { key: "hide", value: function() {
    var t = this, n = function i() {
      t.domElement.style.display = "none", t.backgroundElement.style.display = "none", O.unbind(t.domElement, "webkitTransitionEnd", i), O.unbind(t.domElement, "transitionend", i), O.unbind(t.domElement, "oTransitionEnd", i);
    };
    O.bind(this.domElement, "webkitTransitionEnd", n), O.bind(this.domElement, "transitionend", n), O.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)";
  } }, { key: "layout", value: function() {
    this.domElement.style.left = window.innerWidth / 2 - O.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - O.getHeight(this.domElement) / 2 + "px";
  } }]), s3;
})(), _x = ex(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
hx.inject(_x);
var gh = "dg", vh = 72, xh = 20, er = "Default", Hs = (function() {
  try {
    return !!window.localStorage;
  } catch {
    return false;
  }
})(), Xs = void 0, yh = true, Wi = void 0, oa = false, Au = [], ot = function s2(e) {
  var t = this, n = e || {};
  this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), O.addClass(this.domElement, gh), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], n = j.defaults(n, { closeOnTop: false, autoPlace: true, width: s2.DEFAULT_WIDTH }), n = j.defaults(n, { resizable: n.autoPlace, hideable: n.autoPlace }), j.isUndefined(n.load) ? n.load = { preset: er } : n.preset && (n.load.preset = n.preset), j.isUndefined(n.parent) && n.hideable && Au.push(this), n.resizable = j.isUndefined(n.parent) && n.resizable, n.autoPlace && j.isUndefined(n.scrollable) && (n.scrollable = true);
  var i = Hs && localStorage.getItem(Xi(this, "isLocal")) === "true", r = void 0, o = void 0;
  if (Object.defineProperties(this, { parent: { get: function() {
    return n.parent;
  } }, scrollable: { get: function() {
    return n.scrollable;
  } }, autoPlace: { get: function() {
    return n.autoPlace;
  } }, closeOnTop: { get: function() {
    return n.closeOnTop;
  } }, preset: { get: function() {
    return t.parent ? t.getRoot().preset : n.load.preset;
  }, set: function(d) {
    t.parent ? t.getRoot().preset = d : n.load.preset = d, yx(this), t.revert();
  } }, width: { get: function() {
    return n.width;
  }, set: function(d) {
    n.width = d, ol(t, d);
  } }, name: { get: function() {
    return n.name;
  }, set: function(d) {
    n.name = d, o && (o.innerHTML = n.name);
  } }, closed: { get: function() {
    return n.closed;
  }, set: function(d) {
    n.closed = d, n.closed ? O.addClass(t.__ul, s2.CLASS_CLOSED) : O.removeClass(t.__ul, s2.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = d ? s2.TEXT_OPEN : s2.TEXT_CLOSED);
  } }, load: { get: function() {
    return n.load;
  } }, useLocalStorage: { get: function() {
    return i;
  }, set: function(d) {
    Hs && (i = d, d ? O.bind(window, "unload", r) : O.unbind(window, "unload", r), localStorage.setItem(Xi(t, "isLocal"), d));
  } } }), j.isUndefined(n.parent)) {
    if (this.closed = n.closed || false, O.addClass(this.domElement, s2.CLASS_MAIN), O.makeSelectable(this.domElement, false), Hs && i) {
      t.useLocalStorage = true;
      var a = localStorage.getItem(Xi(this, "gui"));
      a && (n.load = JSON.parse(a));
    }
    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = s2.TEXT_CLOSED, O.addClass(this.__closeButton, s2.CLASS_CLOSE_BUTTON), n.closeOnTop ? (O.addClass(this.__closeButton, s2.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (O.addClass(this.__closeButton, s2.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), O.bind(this.__closeButton, "click", function() {
      t.closed = !t.closed;
    });
  } else {
    n.closed === void 0 && (n.closed = true);
    var l = document.createTextNode(n.name);
    O.addClass(l, "controller-name"), o = Cl(t, l);
    var c = function(d) {
      return d.preventDefault(), t.closed = !t.closed, false;
    };
    O.addClass(this.__ul, s2.CLASS_CLOSED), O.addClass(o, "title"), O.bind(o, "click", c), n.closed || (this.closed = false);
  }
  n.autoPlace && (j.isUndefined(n.parent) && (yh && (Wi = document.createElement("div"), O.addClass(Wi, gh), O.addClass(Wi, s2.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(Wi), yh = false), Wi.appendChild(this.domElement), O.addClass(this.domElement, s2.CLASS_AUTO_PLACE)), this.parent || ol(t, n.width)), this.__resizeHandler = function() {
    t.onResizeDebounced();
  }, O.bind(window, "resize", this.__resizeHandler), O.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), O.bind(this.__ul, "transitionend", this.__resizeHandler), O.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), n.resizable && xx(this), r = function() {
    Hs && localStorage.getItem(Xi(t, "isLocal")) === "true" && localStorage.setItem(Xi(t, "gui"), JSON.stringify(t.getSaveObject()));
  }, this.saveToLocalStorageIfPossible = r;
  function h() {
    var u = t.getRoot();
    u.width += 1, j.defer(function() {
      u.width -= 1;
    });
  }
  n.parent || h();
};
ot.toggleHide = function() {
  oa = !oa, j.each(Au, function(s3) {
    s3.domElement.style.display = oa ? "none" : "";
  });
};
ot.CLASS_AUTO_PLACE = "a";
ot.CLASS_AUTO_PLACE_CONTAINER = "ac";
ot.CLASS_MAIN = "main";
ot.CLASS_CONTROLLER_ROW = "cr";
ot.CLASS_TOO_TALL = "taller-than-window";
ot.CLASS_CLOSED = "closed";
ot.CLASS_CLOSE_BUTTON = "close-button";
ot.CLASS_CLOSE_TOP = "close-top";
ot.CLASS_CLOSE_BOTTOM = "close-bottom";
ot.CLASS_DRAG = "drag";
ot.DEFAULT_WIDTH = 245;
ot.TEXT_CLOSED = "Close Controls";
ot.TEXT_OPEN = "Open Controls";
ot._keydownHandler = function(s3) {
  document.activeElement.type !== "text" && (s3.which === vh || s3.keyCode === vh) && ot.toggleHide();
};
O.bind(window, "keydown", ot._keydownHandler, false);
j.extend(ot.prototype, { add: function(e, t) {
  return Ys(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) });
}, addColor: function(e, t) {
  return Ys(this, e, t, { color: true });
}, remove: function(e) {
  this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
  var t = this;
  j.defer(function() {
    t.onResize();
  });
}, destroy: function() {
  if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
  this.autoPlace && Wi.removeChild(this.domElement);
  var e = this;
  j.each(this.__folders, function(t) {
    e.removeFolder(t);
  }), O.unbind(window, "keydown", ot._keydownHandler, false), Sh(this);
}, addFolder: function(e) {
  if (this.__folders[e] !== void 0) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
  var t = { name: e, parent: this };
  t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
  var n = new ot(t);
  this.__folders[e] = n;
  var i = Cl(this, n.domElement);
  return O.addClass(i, "folder"), n;
}, removeFolder: function(e) {
  this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], Sh(e);
  var t = this;
  j.each(e.__folders, function(n) {
    e.removeFolder(n);
  }), j.defer(function() {
    t.onResize();
  });
}, open: function() {
  this.closed = false;
}, close: function() {
  this.closed = true;
}, hide: function() {
  this.domElement.style.display = "none";
}, show: function() {
  this.domElement.style.display = "";
}, onResize: function() {
  var e = this.getRoot();
  if (e.scrollable) {
    var t = O.getOffset(e.__ul).top, n = 0;
    j.each(e.__ul.childNodes, function(i) {
      e.autoPlace && i === e.__save_row || (n += O.getHeight(i));
    }), window.innerHeight - t - xh < n ? (O.addClass(e.domElement, ot.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - xh + "px") : (O.removeClass(e.domElement, ot.CLASS_TOO_TALL), e.__ul.style.height = "auto");
  }
  e.__resize_handle && j.defer(function() {
    e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
  }), e.__closeButton && (e.__closeButton.style.width = e.width + "px");
}, onResizeDebounced: j.debounce(function() {
  this.onResize();
}, 50), remember: function() {
  if (j.isUndefined(Xs) && (Xs = new mx(), Xs.domElement.innerHTML = ux), this.parent) throw new Error("You can only call remember on a top level GUI.");
  var e = this;
  j.each(Array.prototype.slice.call(arguments), function(t) {
    e.__rememberedObjects.length === 0 && vx(e), e.__rememberedObjects.indexOf(t) === -1 && e.__rememberedObjects.push(t);
  }), this.autoPlace && ol(this, this.width);
}, getRoot: function() {
  for (var e = this; e.parent; ) e = e.parent;
  return e;
}, getSaveObject: function() {
  var e = this.load;
  return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = zr(this)), e.folders = {}, j.each(this.__folders, function(t, n) {
    e.folders[n] = t.getSaveObject();
  }), e;
}, save: function() {
  this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = zr(this), sl(this, false), this.saveToLocalStorageIfPossible();
}, saveAs: function(e) {
  this.load.remembered || (this.load.remembered = {}, this.load.remembered[er] = zr(this, true)), this.load.remembered[e] = zr(this), this.preset = e, rl(this, e, true), this.saveToLocalStorageIfPossible();
}, revert: function(e) {
  j.each(this.__controllers, function(t) {
    this.getRoot().load.remembered ? wu(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
  }, this), j.each(this.__folders, function(t) {
    t.revert(t);
  }), e || sl(this.getRoot(), false);
}, listen: function(e) {
  var t = this.__listening.length === 0;
  this.__listening.push(e), t && Ru(this.__listening);
}, updateDisplay: function() {
  j.each(this.__controllers, function(e) {
    e.updateDisplay();
  }), j.each(this.__folders, function(e) {
    e.updateDisplay();
  });
} });
function Cl(s3, e, t) {
  var n = document.createElement("li");
  return e && n.appendChild(e), t ? s3.__ul.insertBefore(n, t) : s3.__ul.appendChild(n), s3.onResize(), n;
}
function Sh(s3) {
  O.unbind(window, "resize", s3.__resizeHandler), s3.saveToLocalStorageIfPossible && O.unbind(window, "unload", s3.saveToLocalStorageIfPossible);
}
function sl(s3, e) {
  var t = s3.__preset_select[s3.__preset_select.selectedIndex];
  e ? t.innerHTML = t.value + "*" : t.innerHTML = t.value;
}
function gx(s3, e, t) {
  if (t.__li = e, t.__gui = s3, j.extend(t, { options: function(o) {
    if (arguments.length > 1) {
      var a = t.__li.nextElementSibling;
      return t.remove(), Ys(s3, t.object, t.property, { before: a, factoryArgs: [j.toArray(arguments)] });
    }
    if (j.isArray(o) || j.isObject(o)) {
      var l = t.__li.nextElementSibling;
      return t.remove(), Ys(s3, t.object, t.property, { before: l, factoryArgs: [o] });
    }
  }, name: function(o) {
    return t.__li.firstElementChild.firstElementChild.innerHTML = o, t;
  }, listen: function() {
    return t.__gui.listen(t), t;
  }, remove: function() {
    return t.__gui.remove(t), t;
  } }), t instanceof nl) {
    var n = new io(t.object, t.property, { min: t.__min, max: t.__max, step: t.__step });
    j.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function(r) {
      var o = t[r], a = n[r];
      t[r] = n[r] = function() {
        var l = Array.prototype.slice.call(arguments);
        return a.apply(n, l), o.apply(t, l);
      };
    }), O.addClass(e, "has-slider"), t.domElement.insertBefore(n.domElement, t.domElement.firstElementChild);
  } else if (t instanceof io) {
    var i = function(o) {
      if (j.isNumber(t.__min) && j.isNumber(t.__max)) {
        var a = t.__li.firstElementChild.firstElementChild.innerHTML, l = t.__gui.__listening.indexOf(t) > -1;
        t.remove();
        var c = Ys(s3, t.object, t.property, { before: t.__li.nextElementSibling, factoryArgs: [t.__min, t.__max, t.__step] });
        return c.name(a), l && c.listen(), c;
      }
      return o;
    };
    t.min = j.compose(i, t.min), t.max = j.compose(i, t.max);
  } else t instanceof bu ? (O.bind(e, "click", function() {
    O.fakeEvent(t.__checkbox, "click");
  }), O.bind(t.__checkbox, "click", function(r) {
    r.stopPropagation();
  })) : t instanceof Tu ? (O.bind(e, "click", function() {
    O.fakeEvent(t.__button, "click");
  }), O.bind(e, "mouseover", function() {
    O.addClass(t.__button, "hover");
  }), O.bind(e, "mouseout", function() {
    O.removeClass(t.__button, "hover");
  })) : t instanceof il && (O.addClass(e, "color"), t.updateDisplay = j.compose(function(r) {
    return e.style.borderLeftColor = t.__color.toString(), r;
  }, t.updateDisplay), t.updateDisplay());
  t.setValue = j.compose(function(r) {
    return s3.getRoot().__preset_select && t.isModified() && sl(s3.getRoot(), true), r;
  }, t.setValue);
}
function wu(s3, e) {
  var t = s3.getRoot(), n = t.__rememberedObjects.indexOf(e.object);
  if (n !== -1) {
    var i = t.__rememberedObjectIndecesToControllers[n];
    if (i === void 0 && (i = {}, t.__rememberedObjectIndecesToControllers[n] = i), i[e.property] = e, t.load && t.load.remembered) {
      var r = t.load.remembered, o = void 0;
      if (r[s3.preset]) o = r[s3.preset];
      else if (r[er]) o = r[er];
      else return;
      if (o[n] && o[n][e.property] !== void 0) {
        var a = o[n][e.property];
        e.initialValue = a, e.setValue(a);
      }
    }
  }
}
function Ys(s3, e, t, n) {
  if (e[t] === void 0) throw new Error('Object "' + e + '" has no property "' + t + '"');
  var i = void 0;
  if (n.color) i = new il(e, t);
  else {
    var r = [e, t].concat(n.factoryArgs);
    i = dx.apply(s3, r);
  }
  n.before instanceof Si && (n.before = n.before.__li), wu(s3, i), O.addClass(i.domElement, "c");
  var o = document.createElement("span");
  O.addClass(o, "property-name"), o.innerHTML = i.property;
  var a = document.createElement("div");
  a.appendChild(o), a.appendChild(i.domElement);
  var l = Cl(s3, a, n.before);
  return O.addClass(l, ot.CLASS_CONTROLLER_ROW), i instanceof il ? O.addClass(l, "color") : O.addClass(l, nx(i.getValue())), gx(s3, l, i), s3.__controllers.push(i), i;
}
function Xi(s3, e) {
  return document.location.href + "." + e;
}
function rl(s3, e, t) {
  var n = document.createElement("option");
  n.innerHTML = e, n.value = e, s3.__preset_select.appendChild(n), t && (s3.__preset_select.selectedIndex = s3.__preset_select.length - 1);
}
function Mh(s3, e) {
  e.style.display = s3.useLocalStorage ? "block" : "none";
}
function vx(s3) {
  var e = s3.__save_row = document.createElement("li");
  O.addClass(s3.domElement, "has-save"), s3.__ul.insertBefore(e, s3.__ul.firstChild), O.addClass(e, "save-row");
  var t = document.createElement("span");
  t.innerHTML = "&nbsp;", O.addClass(t, "button gears");
  var n = document.createElement("span");
  n.innerHTML = "Save", O.addClass(n, "button"), O.addClass(n, "save");
  var i = document.createElement("span");
  i.innerHTML = "New", O.addClass(i, "button"), O.addClass(i, "save-as");
  var r = document.createElement("span");
  r.innerHTML = "Revert", O.addClass(r, "button"), O.addClass(r, "revert");
  var o = s3.__preset_select = document.createElement("select");
  if (s3.load && s3.load.remembered ? j.each(s3.load.remembered, function(u, d) {
    rl(s3, d, d === s3.preset);
  }) : rl(s3, er, false), O.bind(o, "change", function() {
    for (var u = 0; u < s3.__preset_select.length; u++) s3.__preset_select[u].innerHTML = s3.__preset_select[u].value;
    s3.preset = this.value;
  }), e.appendChild(o), e.appendChild(t), e.appendChild(n), e.appendChild(i), e.appendChild(r), Hs) {
    var a = document.getElementById("dg-local-explain"), l = document.getElementById("dg-local-storage"), c = document.getElementById("dg-save-locally");
    c.style.display = "block", localStorage.getItem(Xi(s3, "isLocal")) === "true" && l.setAttribute("checked", "checked"), Mh(s3, a), O.bind(l, "change", function() {
      s3.useLocalStorage = !s3.useLocalStorage, Mh(s3, a);
    });
  }
  var h = document.getElementById("dg-new-constructor");
  O.bind(h, "keydown", function(u) {
    u.metaKey && (u.which === 67 || u.keyCode === 67) && Xs.hide();
  }), O.bind(t, "click", function() {
    h.innerHTML = JSON.stringify(s3.getSaveObject(), void 0, 2), Xs.show(), h.focus(), h.select();
  }), O.bind(n, "click", function() {
    s3.save();
  }), O.bind(i, "click", function() {
    var u = prompt("Enter a new preset name.");
    u && s3.saveAs(u);
  }), O.bind(r, "click", function() {
    s3.revert();
  });
}
function xx(s3) {
  var e = void 0;
  s3.__resize_handle = document.createElement("div"), j.extend(s3.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" });
  function t(r) {
    return r.preventDefault(), s3.width += e - r.clientX, s3.onResize(), e = r.clientX, false;
  }
  function n() {
    O.removeClass(s3.__closeButton, ot.CLASS_DRAG), O.unbind(window, "mousemove", t), O.unbind(window, "mouseup", n);
  }
  function i(r) {
    return r.preventDefault(), e = r.clientX, O.addClass(s3.__closeButton, ot.CLASS_DRAG), O.bind(window, "mousemove", t), O.bind(window, "mouseup", n), false;
  }
  O.bind(s3.__resize_handle, "mousedown", i), O.bind(s3.__closeButton, "mousedown", i), s3.domElement.insertBefore(s3.__resize_handle, s3.domElement.firstElementChild);
}
function ol(s3, e) {
  s3.domElement.style.width = e + "px", s3.__save_row && s3.autoPlace && (s3.__save_row.style.width = e + "px"), s3.__closeButton && (s3.__closeButton.style.width = e + "px");
}
function zr(s3, e) {
  var t = {};
  return j.each(s3.__rememberedObjects, function(n, i) {
    var r = {}, o = s3.__rememberedObjectIndecesToControllers[i];
    j.each(o, function(a, l) {
      r[l] = e ? a.initialValue : a.getValue();
    }), t[i] = r;
  }), t;
}
function yx(s3) {
  for (var e = 0; e < s3.__preset_select.length; e++) s3.__preset_select[e].value === s3.preset && (s3.__preset_select.selectedIndex = e);
}
function Ru(s3) {
  s3.length !== 0 && px.call(window, function() {
    Ru(s3);
  }), j.each(s3, function(e) {
    e.updateDisplay();
  });
}
var Sx = ot;
const Mx = "" + new URL("bubble-CL26MHl-.glb", import.meta.url).href, mn = new Jh();
mn.background = null;
const bt = new Dt(42, window.innerWidth / window.innerHeight, 0.1, 100);
bt.position.set(0.02, -11.98, 0.61);
const tn = new Kv({ antialias: true, alpha: true });
tn.setPixelRatio(Math.min(window.devicePixelRatio, 2));
tn.setSize(window.innerWidth, window.innerHeight);
tn.setClearColor(0, 0);
tn.outputColorSpace = gt;
tn.toneMapping = Ah;
tn.toneMappingExposure = 1.1;
tn.shadowMap.enabled = false;
document.body.appendChild(tn.domElement);
const Cu = new Za(tn), bx = Cu.fromScene(new X0(), 0.08).texture;
mn.environment = bx;
Cu.dispose();
const sr = new Zv(bt, tn.domElement);
sr.enableDamping = true;
sr.enableRotate = false;
sr.enablePan = false;
sr.enableZoom = false;
const Pu = new Kf(16777215, 0.12);
mn.add(Pu);
const rr = new Ml(16777215, 8, 16, 0.5, 0.7, 1.2);
rr.position.set(0.5, 2, 3.5);
rr.target.position.set(0, 0, 0);
mn.add(rr);
mn.add(rr.target);
const fo = new Ml(16777215, 0.4, 12, 1, 1, 2);
fo.position.set(-1.5, -0.5, 2);
fo.target.position.set(0, 0, 0);
mn.add(fo);
mn.add(fo.target);
const Pl = new co(16777215, 3.5, 12, 1.5);
Pl.position.set(0, 0.5, -2.5);
mn.add(Pl);
const Il = new co(15658751, 2, 10, 1.5);
Il.position.set(-2, 1, -1);
mn.add(Il);
const Vn = new Yt({ color: 16777215, metalness: 0, roughness: 0.05, transmission: 1, thickness: 0.5, ior: 1.45, transparent: true, opacity: 1, envMapIntensity: 1, clearcoat: 1, clearcoatRoughness: 0.05, specularIntensity: 1, specularColor: new Ee(16777215), attenuationColor: new Ee(13951743), attenuationDistance: 1.5 }), Ms = new Yt({ color: 16777215, metalness: 0, roughness: 0.1, transmission: 0, thickness: 0.3, ior: 1.45, transparent: true, opacity: 0.4, depthWrite: false, envMapIntensity: 0.5, clearcoat: 0.5, clearcoatRoughness: 0.1, specularIntensity: 0.5, specularColor: new Ee(16777215), attenuationColor: new Ee(13951743), attenuationDistance: 2 });
Ms.onBeforeCompile = (s3) => {
  s3.vertexShader = s3.vertexShader.replace("void main() {", `varying float vViewYOffset;
void main() {`), s3.vertexShader = s3.vertexShader.replace("#include <begin_vertex>", `#include <begin_vertex>
     vec4 viewPos = modelViewMatrix * vec4(position, 1.0);
     vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
     vViewYOffset = viewPos.y - viewCenter.y;`), s3.fragmentShader = s3.fragmentShader.replace("void main() {", `varying float vViewYOffset;
void main() {`), s3.fragmentShader = s3.fragmentShader.replace("#include <alphatest_fragment>", `#include <alphatest_fragment>
     float fadeFactor = 0.08 * smoothstep(0.35, 1.0, vViewYOffset);
     diffuseColor.a *= fadeFactor;`);
};
const po = new Yt({ color: 8952234, metalness: 0.1, roughness: 0.15, transmission: 0, transparent: true, opacity: 0.35, envMapIntensity: 0.8, side: Rt, depthWrite: false }), Ex = new Qt(window.innerWidth, window.innerHeight, { type: yn, format: Xt }), tr = new Z0(tn, Ex), Iu = new J0(mn, bt);
Iu.clearAlpha = 0;
tr.addPass(Iu);
const mo = new ms(new pe(window.innerWidth, window.innerHeight), 0.4, 0.8, 0.85);
tr.addPass(mo);
window.addEventListener("resize", () => {
  bt.aspect = window.innerWidth / window.innerHeight, bt.updateProjectionMatrix(), tn.setSize(window.innerWidth, window.innerHeight), tr.setSize(window.innerWidth, window.innerHeight), tr.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
const Zi = new ei();
Zi.position.set(0, 0, -10);
bt.add(Zi);
mn.add(bt);
const Tx = [{ x: -1.8, y: 1.4, label: "PixiJS", url: "https://github.com/pixijs/pixijs/pull/11761" }, { x: 1.8, y: 1.4, label: "Crawlee", url: "https://github.com/apify/crawlee/pull/3237" }, { x: -3.6, y: -1, label: "Hoppscotch", url: "https://github.com/hoppscotch/hoppscotch/pull/5231" }, { x: 0, y: -1.35, label: `Altair
GraphQL`, url: "https://github.com/altair-graphql" }, { x: 3.6, y: -1, label: `Godot
Engine`, url: "https://docs.godotengine.org/en/stable/contributing/workflow/bug_triage_guidelines.html" }], Ax = new uu(), so = 4.06, xi = 4.25, Lu = 4.9, vn = [], bh = new up(), qs = new pe();
let Dn = -1;
const bs = new Sx(), is = { x: bt.position.x, y: bt.position.y, z: bt.position.z }, _o = bs.addFolder("Camera");
_o.add(is, "x", -10, 10, 0.01).listen().onChange((s3) => bt.position.x = s3);
_o.add(is, "y", -10, 10, 0.01).listen().onChange((s3) => bt.position.y = s3);
_o.add(is, "z", 0.5, 20, 0.01).listen().onChange((s3) => bt.position.z = s3);
_o.open();
const Gn = bs.addFolder("Glass");
Gn.add(Vn, "roughness", 0, 1, 0.01);
Gn.add(Vn, "transmission", 0, 1, 0.01);
Gn.add(Vn, "thickness", 0, 3, 0.01);
Gn.add(Vn, "ior", 1, 2.5, 0.01);
Gn.add(Vn, "envMapIntensity", 0, 3, 0.01);
Gn.add(Vn, "clearcoatRoughness", 0, 1, 0.01);
Gn.add(Vn, "specularIntensity", 0, 2, 0.01);
Gn.add(Vn, "attenuationDistance", 0, 5, 0.01);
Gn.open();
const Ll = bs.addFolder("Edge Rim");
Ll.add(po, "opacity", 0, 1, 0.01);
Ll.add(po, "roughness", 0, 1, 0.01);
Ll.add(po, "envMapIntensity", 0, 2, 0.01);
const go = bs.addFolder("Reflection");
go.add(Ms, "opacity", 0, 1, 0.01);
go.add(Ms, "transmission", 0, 1, 0.01);
go.add(Ms, "roughness", 0, 1, 0.01);
go.add(Ms, "envMapIntensity", 0, 2, 0.01);
const vo = bs.addFolder("Bloom");
vo.add(mo, "strength", 0, 3, 0.01);
vo.add(mo, "radius", 0, 2, 0.01);
vo.add(mo, "threshold", 0, 1, 0.01);
vo.open();
const xo = bs.addFolder("Lighting");
xo.add(rr, "intensity", 0, 20, 0.1);
xo.add(Pl, "intensity", 0, 10, 0.1);
xo.add(Il, "intensity", 0, 10, 0.1);
xo.add(Pu, "intensity", 0, 1, 0.01);
function wx(s3) {
  const e = document.createElement("canvas"), t = 1024;
  e.width = t, e.height = t;
  const n = e.getContext("2d");
  n.clearRect(0, 0, t, t);
  const i = s3.split(`
`), r = 168;
  n.font = `700 ${r}px "Ubuntu", sans-serif`, n.fillStyle = "#55575b", n.textAlign = "center", n.textBaseline = "middle";
  const o = r * 1.25, a = t / 2 - (i.length - 1) * o / 2;
  i.forEach((u, d) => {
    n.fillText(u, t / 2, a + d * o);
  });
  const l = new Pf(e);
  l.colorSpace = gt, l.needsUpdate = true;
  const c = new eu({ map: l, transparent: true, depthTest: false, toneMapped: false }), h = new xf(c);
  return h.scale.set(1.4, 1.4, 1), h.renderOrder = 999, h;
}
const Rx = new h0();
Rx.load(Mx, (s3) => {
  const e = s3.animations[0] || null;
  Tx.forEach((t) => {
    const n = s3.scene.clone(true), i = n.children[0] || null;
    i && (i.position.set(0, 0, 0), i.quaternion.identity()), n.position.set(t.x, t.y, 0);
    let r = null, o = null, a = null;
    const l = i;
    n.traverse((h) => {
      if (h.isMesh) {
        const u = h;
        u.material = Vn, r = u;
        const d = new tt(u.geometry.clone(), po);
        u.morphTargetInfluences && (d.morphTargetInfluences = [...u.morphTargetInfluences], d.morphTargetDictionary = u.morphTargetDictionary), d.scale.setScalar(1.005), d.position.copy(n.position), Zi.add(d), o = d;
        const p = new tt(u.geometry.clone(), Ms);
        u.morphTargetInfluences && (p.morphTargetInfluences = [...u.morphTargetInfluences], p.morphTargetDictionary = u.morphTargetDictionary), p.position.set(t.x, t.y - 2, 0), p.scale.set(1, -1, 1), p.renderOrder = -1, Zi.add(p), a = p;
      }
    }), Zi.add(n);
    const c = wx(t.label);
    if (c.position.set(t.x, t.y, 0), Zi.add(c), e) {
      const h = new hp(n), u = h.clipAction(e);
      u.play(), u.paused = true, u.clampWhenFinished = true, u.setLoop(Bh, 1), u.time = so, h.update(0), vn.push({ model: n, meshNode: l, mixer: h, action: u, mesh: r, edgeClone: o, reflectionClone: a, state: "idle", targetQuat: new Ct(), currentQuat: new Ct(), label: t.label, url: t.url });
    }
  }), console.log(`Loaded 5 bubbles \u2014 rest:${so} hover:${xi} exit:${Lu}`);
}, void 0, (s3) => console.error("Error loading bubble model:", s3));
const Hr = new R(), ro = new Ct();
function Du(s3) {
  s3.model.updateWorldMatrix(true, false), s3.model.getWorldPosition(Hr), Hr.project(bt);
  const e = Math.atan2(qs.y - Hr.y, qs.x - Hr.x), t = Math.PI / 2, n = s3.targetQuat.setFromAxisAngle(new R(0, 0, 1), e + t);
  s3.currentQuat.copy(n), s3.meshNode && s3.meshNode.quaternion.copy(n), s3.edgeClone && s3.edgeClone.quaternion.copy(n), s3.reflectionClone && (ro.setFromAxisAngle(new R(0, 0, 1), -e - t), s3.reflectionClone.quaternion.copy(ro));
}
let Gt = null;
function Cx(s3) {
  switch (Du(s3), s3.state) {
    case "idle":
      s3.state = "hover-in", s3.action.paused = false, s3.action.timeScale = 1, s3.action.time = so;
      break;
    case "hover-out":
      s3.action.time > xi ? (s3.state = "returning", s3.action.paused = false, s3.action.timeScale = -1) : s3.action.time < xi ? (s3.state = "hover-in", s3.action.paused = false, s3.action.timeScale = 1) : (s3.state = "hover-hold", s3.action.paused = true);
      break;
  }
}
function Px(s3) {
  switch (s3.state) {
    case "hover-hold":
    case "hover-in":
      s3.state = "hover-out", s3.action.paused = false, s3.action.timeScale = 1;
      break;
    case "returning":
      s3.state = "hover-out", s3.action.paused = false, s3.action.timeScale = 1;
      break;
  }
}
window.addEventListener("mousemove", (s3) => {
  qs.x = s3.clientX / window.innerWidth * 2 - 1, qs.y = -(s3.clientY / window.innerHeight) * 2 + 1, bh.setFromCamera(qs, bt);
  const e = vn.map((i) => i.mesh).filter(Boolean), t = bh.intersectObjects(e, false), n = t.length > 0 ? vn.findIndex((i) => i.mesh === t[0].object) : -1;
  if (n !== Dn) {
    if (Dn >= 0 && Dn < vn.length) {
      const i = vn[Dn];
      Px(i), Gt = null, window.dispatchEvent(new CustomEvent("bubble-leave", { detail: { label: i.label, url: i.url, index: Dn } }));
    }
    if (n >= 0) {
      const i = vn[n];
      Cx(i), Gt = i, window.dispatchEvent(new CustomEvent("bubble-hover", { detail: { label: i.label, url: i.url, index: n } }));
    }
    Dn = n, document.body.style.cursor = n >= 0 ? "pointer" : "default";
  } else n >= 0 && Du(vn[n]);
});
window.addEventListener("click", () => {
  Dn >= 0 && Dn < vn.length && window.open(vn[Dn].url, "_blank");
});
function Uu() {
  requestAnimationFrame(Uu);
  const s3 = Ax.getDelta();
  for (const e of vn) {
    switch (e.state) {
      case "hover-in":
        e.mixer.update(s3), e.action.time >= xi && (e.action.time = xi, e.action.paused = true, e.mixer.update(0), e.state = "hover-hold");
        break;
      case "hover-out":
        e.mixer.update(s3), e.action.time >= Lu && (e.action.time = so, e.action.paused = true, e.mixer.update(0), e.state = "idle");
        break;
      case "returning":
        e.mixer.update(s3), e.action.time <= xi && (e.action.time = xi, e.action.paused = true, e.action.timeScale = 1, e.mixer.update(0), e.state = "hover-hold");
        break;
    }
    if (e.mesh && e.mesh.morphTargetInfluences) for (let t = 0; t < e.mesh.morphTargetInfluences.length; t++) e.edgeClone && (e.edgeClone.morphTargetInfluences[t] = e.mesh.morphTargetInfluences[t]), e.reflectionClone && (e.reflectionClone.morphTargetInfluences[t] = e.mesh.morphTargetInfluences[t]);
  }
  if (Gt && Gt.meshNode && (Gt.meshNode.quaternion.copy(Gt.currentQuat), Gt.edgeClone && Gt.edgeClone.quaternion.copy(Gt.currentQuat), Gt.reflectionClone)) {
    const e = 2 * Math.acos(Math.min(1, Math.abs(Gt.currentQuat.w))), n = (Gt.currentQuat.z >= 0 ? 1 : -1) * e - Math.PI / 2;
    ro.setFromAxisAngle(new R(0, 0, 1), -n - Math.PI / 2), Gt.reflectionClone.quaternion.copy(ro);
  }
  is.x = bt.position.x, is.y = bt.position.y, is.z = bt.position.z, sr.update(), tr.render();
}
Uu();
