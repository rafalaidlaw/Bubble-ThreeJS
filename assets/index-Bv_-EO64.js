(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const r of s) if (r.type === "childList") for (const a of r.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: true, subtree: true });
  function t(s) {
    const r = {};
    return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function n(s) {
    if (s.ep) return;
    s.ep = true;
    const r = t(s);
    fetch(s.href, r);
  }
})();
/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const sr = "172", as = { ROTATE: 0, DOLLY: 1, PAN: 2 }, es = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, qu = 0, ql = 1, ju = 2, Nh = 1, Ku = 2, zn = 3, Cn = 0, St = 1, Yt = 2, qt = 0, os = 1, jl = 2, Kl = 3, $l = 4, $u = 5, Ai = 100, Zu = 101, Ju = 102, Qu = 103, ed = 104, td = 200, nd = 201, id = 202, sd = 203, uo = 204, fo = 205, rd = 206, ad = 207, od = 208, ld = 209, cd = 210, hd = 211, ud = 212, dd = 213, fd = 214, po = 0, $r = 1, mo = 2, ds = 3, go = 4, _o = 5, vo = 6, xo = 7, Fh = 0, pd = 1, md = 2, di = 0, gd = 1, _d = 2, vd = 3, Oh = 4, xd = 5, Sd = 6, yd = 7, Zl = "attached", Md = "detached", Bh = 300, fs = 301, ps = 302, So = 303, yo = 304, aa = 306, ms = 1e3, oi = 1001, Zr = 1002, Vt = 1003, kh = 1004, Vs = 1005, Ct = 1006, Gr = 1007, Gn = 1008, Ot = 1009, zh = 1010, Hh = 1011, Js = 1012, ul = 1013, Ci = 1014, on = 1015, Ms = 1016, dl = 1017, fl = 1018, Pi = 1020, Vh = 35902, Gh = 1021, Wh = 1022, ln = 1023, Xh = 1024, Yh = 1025, ls = 1026, Ii = 1027, pl = 1028, ml = 1029, qh = 1030, gl = 1031, _l = 1033, Wr = 33776, Xr = 33777, Yr = 33778, qr = 33779, Mo = 35840, Eo = 35841, bo = 35842, To = 35843, Ao = 36196, wo = 37492, Ro = 37496, Co = 37808, Po = 37809, Io = 37810, Do = 37811, Lo = 37812, Uo = 37813, No = 37814, Fo = 37815, Oo = 37816, Bo = 37817, ko = 37818, zo = 37819, Ho = 37820, Vo = 37821, jr = 36492, Go = 36494, Wo = 36495, jh = 36283, Xo = 36284, Yo = 36285, qo = 36286, Kh = 2200, Ed = 2201, bd = 2202, Qs = 2300, er = 2301, Ta = 2302, ts = 2400, ns = 2401, Jr = 2402, vl = 2500, Td = 2501, Ad = 0, $h = 1, jo = 2, rr = 3200, wd = 3201, Zh = 0, Rd = 1, wn = "", Ye = "srgb", Dt = "srgb-linear", Qr = "linear", at = "srgb", Ni = 7680, Jl = 519, Cd = 512, Pd = 513, Id = 514, Jh = 515, Dd = 516, Ld = 517, Ud = 518, Nd = 519, Ko = 35044, Ql = "300 es", Wn = 2e3, ea = 2001;
class xn {
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
    const s = this._listeners[e];
    if (s !== void 0) {
      const r = s.indexOf(t);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const s = n.slice(0);
      for (let r = 0, a = s.length; r < a; r++) s[r].call(this, e);
      e.target = null;
    }
  }
}
const Ut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let ec = 1234567;
const Xs = Math.PI / 180, gs = 180 / Math.PI;
function vn() {
  const i3 = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Ut[i3 & 255] + Ut[i3 >> 8 & 255] + Ut[i3 >> 16 & 255] + Ut[i3 >> 24 & 255] + "-" + Ut[e & 255] + Ut[e >> 8 & 255] + "-" + Ut[e >> 16 & 15 | 64] + Ut[e >> 24 & 255] + "-" + Ut[t & 63 | 128] + Ut[t >> 8 & 255] + "-" + Ut[t >> 16 & 255] + Ut[t >> 24 & 255] + Ut[n & 255] + Ut[n >> 8 & 255] + Ut[n >> 16 & 255] + Ut[n >> 24 & 255]).toLowerCase();
}
function Oe(i3, e, t) {
  return Math.max(e, Math.min(t, i3));
}
function xl(i3, e) {
  return (i3 % e + e) % e;
}
function Fd(i3, e, t, n, s) {
  return n + (i3 - e) * (s - n) / (t - e);
}
function Od(i3, e, t) {
  return i3 !== e ? (t - i3) / (e - i3) : 0;
}
function Ys(i3, e, t) {
  return (1 - t) * i3 + t * e;
}
function Bd(i3, e, t, n) {
  return Ys(i3, e, 1 - Math.exp(-t * n));
}
function kd(i3, e = 1) {
  return e - Math.abs(xl(i3, e * 2) - e);
}
function zd(i3, e, t) {
  return i3 <= e ? 0 : i3 >= t ? 1 : (i3 = (i3 - e) / (t - e), i3 * i3 * (3 - 2 * i3));
}
function Hd(i3, e, t) {
  return i3 <= e ? 0 : i3 >= t ? 1 : (i3 = (i3 - e) / (t - e), i3 * i3 * i3 * (i3 * (i3 * 6 - 15) + 10));
}
function Vd(i3, e) {
  return i3 + Math.floor(Math.random() * (e - i3 + 1));
}
function Gd(i3, e) {
  return i3 + Math.random() * (e - i3);
}
function Wd(i3) {
  return i3 * (0.5 - Math.random());
}
function Xd(i3) {
  i3 !== void 0 && (ec = i3);
  let e = ec += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Yd(i3) {
  return i3 * Xs;
}
function qd(i3) {
  return i3 * gs;
}
function jd(i3) {
  return (i3 & i3 - 1) === 0 && i3 !== 0;
}
function Kd(i3) {
  return Math.pow(2, Math.ceil(Math.log(i3) / Math.LN2));
}
function $d(i3) {
  return Math.pow(2, Math.floor(Math.log(i3) / Math.LN2));
}
function Zd(i3, e, t, n, s) {
  const r = Math.cos, a = Math.sin, o = r(t / 2), l = a(t / 2), c = r((e + n) / 2), h = a((e + n) / 2), u = r((e - n) / 2), d = a((e - n) / 2), p = r((n - e) / 2), g = a((n - e) / 2);
  switch (s) {
    case "XYX":
      i3.set(o * h, l * u, l * d, o * c);
      break;
    case "YZY":
      i3.set(l * d, o * h, l * u, o * c);
      break;
    case "ZXZ":
      i3.set(l * u, l * d, o * h, o * c);
      break;
    case "XZX":
      i3.set(o * h, l * g, l * p, o * c);
      break;
    case "YXY":
      i3.set(l * p, o * h, l * g, o * c);
      break;
    case "ZYZ":
      i3.set(l * g, l * p, o * h, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function gn(i3, e) {
  switch (e.constructor) {
    case Float32Array:
      return i3;
    case Uint32Array:
      return i3 / 4294967295;
    case Uint16Array:
      return i3 / 65535;
    case Uint8Array:
      return i3 / 255;
    case Int32Array:
      return Math.max(i3 / 2147483647, -1);
    case Int16Array:
      return Math.max(i3 / 32767, -1);
    case Int8Array:
      return Math.max(i3 / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function st(i3, e) {
  switch (e.constructor) {
    case Float32Array:
      return i3;
    case Uint32Array:
      return Math.round(i3 * 4294967295);
    case Uint16Array:
      return Math.round(i3 * 65535);
    case Uint8Array:
      return Math.round(i3 * 255);
    case Int32Array:
      return Math.round(i3 * 2147483647);
    case Int16Array:
      return Math.round(i3 * 32767);
    case Int8Array:
      return Math.round(i3 * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Qh = { DEG2RAD: Xs, RAD2DEG: gs, generateUUID: vn, clamp: Oe, euclideanModulo: xl, mapLinear: Fd, inverseLerp: Od, lerp: Ys, damp: Bd, pingpong: kd, smoothstep: zd, smootherstep: Hd, randInt: Vd, randFloat: Gd, randFloatSpread: Wd, seededRandom: Xd, degToRad: Yd, radToDeg: qd, isPowerOfTwo: jd, ceilPowerOfTwo: Kd, floorPowerOfTwo: $d, setQuaternionFromProperEuler: Zd, normalize: st, denormalize: gn };
class _e {
  constructor(e = 0, t = 0) {
    _e.prototype.isVector2 = true, this.x = e, this.y = t;
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
    const t = this.x, n = this.y, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6], this.y = s[1] * t + s[4] * n + s[7], this;
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
    const n = Math.cos(t), s = Math.sin(t), r = this.x - e.x, a = this.y - e.y;
    return this.x = r * n - a * s + e.x, this.y = r * s + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ue {
  constructor(e, t, n, s, r, a, o, l, c) {
    Ue.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, s, r, a, o, l, c);
  }
  set(e, t, n, s, r, a, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = s, h[2] = o, h[3] = t, h[4] = r, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
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
    const n = e.elements, s = t.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], p = n[5], g = n[8], _ = s[0], m = s[3], f = s[6], T = s[1], E = s[4], y = s[7], P = s[2], w = s[5], R = s[8];
    return r[0] = a * _ + o * T + l * P, r[3] = a * m + o * E + l * w, r[6] = a * f + o * y + l * R, r[1] = c * _ + h * T + u * P, r[4] = c * m + h * E + u * w, r[7] = c * f + h * y + u * R, r[2] = d * _ + p * T + g * P, r[5] = d * m + p * E + g * w, r[8] = d * f + p * y + g * R, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * a * h - t * o * c - n * r * h + n * o * l + s * r * c - s * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = h * a - o * c, d = o * l - h * r, p = c * r - a * l, g = t * u + n * d + s * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = u * _, e[1] = (s * c - h * n) * _, e[2] = (o * n - s * a) * _, e[3] = d * _, e[4] = (h * t - s * l) * _, e[5] = (s * r - o * t) * _, e[6] = p * _, e[7] = (n * l - c * t) * _, e[8] = (a * t - n * r) * _, this;
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
  setUvTransform(e, t, n, s, r, a, o) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(n * l, n * c, -n * (l * a + c * o) + a + e, -s * c, s * l, -s * (-c * a + l * o) + o + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(Aa.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Aa.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Aa.makeTranslation(e, t)), this;
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
    for (let s = 0; s < 9; s++) if (t[s] !== n[s]) return false;
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
const Aa = new Ue();
function eu(i3) {
  for (let e = i3.length - 1; e >= 0; --e) if (i3[e] >= 65535) return true;
  return false;
}
function tr(i3) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i3);
}
function Jd() {
  const i3 = tr("canvas");
  return i3.style.display = "block", i3;
}
const tc = {};
function Zi(i3) {
  i3 in tc || (tc[i3] = true, console.warn(i3));
}
function Qd(i3, e, t) {
  return new Promise(function(n, s) {
    function r() {
      switch (i3.clientWaitSync(e, i3.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i3.WAIT_FAILED:
          s();
          break;
        case i3.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
function ef(i3) {
  const e = i3.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function tf(i3) {
  const e = i3.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const nc = new Ue().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), ic = new Ue().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function nf() {
  const i3 = { enabled: true, workingColorSpace: Dt, spaces: {}, convert: function(s, r, a) {
    return this.enabled === false || r === a || !r || !a || (this.spaces[r].transfer === at && (s.r = Yn(s.r), s.g = Yn(s.g), s.b = Yn(s.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === at && (s.r = cs(s.r), s.g = cs(s.g), s.b = cs(s.b))), s;
  }, fromWorkingColorSpace: function(s, r) {
    return this.convert(s, this.workingColorSpace, r);
  }, toWorkingColorSpace: function(s, r) {
    return this.convert(s, r, this.workingColorSpace);
  }, getPrimaries: function(s) {
    return this.spaces[s].primaries;
  }, getTransfer: function(s) {
    return s === wn ? Qr : this.spaces[s].transfer;
  }, getLuminanceCoefficients: function(s, r = this.workingColorSpace) {
    return s.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(s) {
    Object.assign(this.spaces, s);
  }, _getMatrix: function(s, r, a) {
    return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(s) {
    return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(s = this.workingColorSpace) {
    return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i3.define({ [Dt]: { primaries: e, whitePoint: n, transfer: Qr, toXYZ: nc, fromXYZ: ic, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: Ye }, outputColorSpaceConfig: { drawingBufferColorSpace: Ye } }, [Ye]: { primaries: e, whitePoint: n, transfer: at, toXYZ: nc, fromXYZ: ic, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: Ye } } }), i3;
}
const Xe = nf();
function Yn(i3) {
  return i3 < 0.04045 ? i3 * 0.0773993808 : Math.pow(i3 * 0.9478672986 + 0.0521327014, 2.4);
}
function cs(i3) {
  return i3 < 31308e-7 ? i3 * 12.92 : 1.055 * Math.pow(i3, 0.41666) - 0.055;
}
let Fi;
class sf {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Fi === void 0 && (Fi = tr("canvas")), Fi.width = e.width, Fi.height = e.height;
      const n = Fi.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Fi;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = tr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const s = n.getImageData(0, 0, e.width, e.height), r = s.data;
      for (let a = 0; a < r.length; a++) r[a] = Yn(r[a] / 255) * 255;
      return n.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Yn(t[n] / 255) * 255) : t[n] = Yn(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let rf = 0;
class tu {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: rf++ }), this.uuid = vn(), this.data = e, this.dataReady = true, this.version = 0;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let a = 0, o = s.length; a < o; a++) s[a].isDataTexture ? r.push(wa(s[a].image)) : r.push(wa(s[a]));
      } else r = wa(s);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function wa(i3) {
  return typeof HTMLImageElement < "u" && i3 instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i3 instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i3 instanceof ImageBitmap ? sf.getDataURL(i3) : i3.data ? { data: Array.from(i3.data), width: i3.width, height: i3.height, type: i3.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let af = 0;
class Mt extends xn {
  constructor(e = Mt.DEFAULT_IMAGE, t = Mt.DEFAULT_MAPPING, n = oi, s = oi, r = Ct, a = Gn, o = ln, l = Ot, c = Mt.DEFAULT_ANISOTROPY, h = wn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: af++ }), this.uuid = vn(), this.name = "", this.source = new tu(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new _e(0, 0), this.repeat = new _e(1, 1), this.center = new _e(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ue(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
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
    if (this.mapping !== Bh) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case ms:
        e.x = e.x - Math.floor(e.x);
        break;
      case oi:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case Zr:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case ms:
        e.y = e.y - Math.floor(e.y);
        break;
      case oi:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case Zr:
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
Mt.DEFAULT_IMAGE = null;
Mt.DEFAULT_MAPPING = Bh;
Mt.DEFAULT_ANISOTROPY = 1;
class $e {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    $e.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = s;
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
  set(e, t, n, s) {
    return this.x = e, this.y = t, this.z = n, this.w = s, this;
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
    const t = this.x, n = this.y, s = this.z, r = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * s + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * s + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * s + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * s + a[15] * r, this;
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
    let t, n, s, r;
    const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], p = l[5], g = l[9], _ = l[2], m = l[6], f = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(c + p + f - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const E = (c + 1) / 2, y = (p + 1) / 2, P = (f + 1) / 2, w = (h + d) / 4, R = (u + _) / 4, N = (g + m) / 4;
      return E > y && E > P ? E < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(E), s = w / n, r = R / n) : y > P ? y < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(y), n = w / s, r = N / s) : P < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(P), n = R / r, s = N / r), this.set(n, s, r, t), this;
    }
    let T = Math.sqrt((m - g) * (m - g) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (m - g) / T, this.y = (u - _) / T, this.z = (d - h) / T, this.w = Math.acos((c + p + f - 1) / 2), this;
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
class of extends xn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new $e(0, 0, e, t), this.scissorTest = false, this.viewport = new $e(0, 0, e, t);
    const s = { width: e, height: t, depth: 1 };
    n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Ct, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, n);
    const r = new Mt(s, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = false, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = true, this.textures[o].renderTarget = this;
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
      for (let s = 0, r = this.textures.length; s < r; s++) this.textures[s].image.width = e, this.textures[s].image.height = t, this.textures[s].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, s = e.textures.length; n < s; n++) this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = true, this.textures[n].renderTarget = this;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new tu(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Bt extends of {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = true;
  }
}
class nu extends Mt {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = Vt, this.minFilter = Vt, this.wrapR = oi, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class lf extends Mt {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = Vt, this.minFilter = Vt, this.wrapR = oi, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Pt {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = s;
  }
  static slerpFlat(e, t, n, s, r, a, o) {
    let l = n[s + 0], c = n[s + 1], h = n[s + 2], u = n[s + 3];
    const d = r[a + 0], p = r[a + 1], g = r[a + 2], _ = r[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (u !== _ || l !== d || c !== p || h !== g) {
      let m = 1 - o;
      const f = l * d + c * p + h * g + u * _, T = f >= 0 ? 1 : -1, E = 1 - f * f;
      if (E > Number.EPSILON) {
        const P = Math.sqrt(E), w = Math.atan2(P, f * T);
        m = Math.sin(m * w) / P, o = Math.sin(o * w) / P;
      }
      const y = o * T;
      if (l = l * m + d * y, c = c * m + p * y, h = h * m + g * y, u = u * m + _ * y, m === 1 - o) {
        const P = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= P, c *= P, h *= P, u *= P;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, s, r, a) {
    const o = n[s], l = n[s + 1], c = n[s + 2], h = n[s + 3], u = r[a], d = r[a + 1], p = r[a + 2], g = r[a + 3];
    return e[t] = o * g + h * u + l * p - c * d, e[t + 1] = l * g + h * d + c * u - o * p, e[t + 2] = c * g + h * p + o * d - l * u, e[t + 3] = h * g - o * u - l * d - c * p, e;
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
  set(e, t, n, s) {
    return this._x = e, this._y = t, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = true) {
    const n = e._x, s = e._y, r = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(s / 2), u = o(r / 2), d = l(n / 2), p = l(s / 2), g = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * u + c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u - d * p * g;
        break;
      case "YXZ":
        this._x = d * h * u + c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u + d * p * g;
        break;
      case "ZXY":
        this._x = d * h * u - c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u - d * p * g;
        break;
      case "ZYX":
        this._x = d * h * u - c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u + d * p * g;
        break;
      case "YZX":
        this._x = d * h * u + c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u - d * p * g;
        break;
      case "XZY":
        this._x = d * h * u - c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u + d * p * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, s = Math.sin(n);
    return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], s = t[4], r = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + o + u;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (h - l) * p, this._y = (r - c) * p, this._z = (a - s) * p;
    } else if (n > o && n > u) {
      const p = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - l) / p, this._x = 0.25 * p, this._y = (s + a) / p, this._z = (r + c) / p;
    } else if (o > u) {
      const p = 2 * Math.sqrt(1 + o - n - u);
      this._w = (r - c) / p, this._x = (s + a) / p, this._y = 0.25 * p, this._z = (l + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - s) / p, this._x = (r + c) / p, this._y = (l + h) / p, this._z = 0.25 * p;
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
    const s = Math.min(1, t / n);
    return this.slerp(e, s), this;
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
    const n = e._x, s = e._y, r = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + a * o + s * c - r * l, this._y = s * h + a * l + r * o - n * c, this._z = r * h + a * c + n * l - s * o, this._w = a * h - n * o - s * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, s = this._y, r = this._z, a = this._w;
    let o = a * e._w + n * e._x + s * e._y + r * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = s, this._z = r, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * s + t * this._y, this._z = p * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
    return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = s * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(s * Math.sin(e), s * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
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
class C {
  constructor(e = 0, t = 0, n = 0) {
    C.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
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
    return this.applyQuaternion(sc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(sc.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * s, this.y = r[1] * t + r[4] * n + r[7] * s, this.z = r[2] * t + r[5] * n + r[8] * s, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements, a = 1 / (r[3] * t + r[7] * n + r[11] * s + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * s + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * s + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * s + r[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, s = this.z, r = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * s - o * n), h = 2 * (o * t - r * s), u = 2 * (r * n - a * t);
    return this.x = t + l * c + a * u - o * h, this.y = n + l * h + o * c - r * u, this.z = s + l * u + r * h - a * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * s, this.y = r[1] * t + r[5] * n + r[9] * s, this.z = r[2] * t + r[6] * n + r[10] * s, this.normalize();
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
    const n = e.x, s = e.y, r = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = s * l - r * o, this.y = r * a - n * l, this.z = n * o - s * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ra.copy(this).projectOnVector(e), this.sub(Ra);
  }
  reflect(e) {
    return this.sub(Ra.copy(e).multiplyScalar(2 * this.dot(e)));
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
    const t = this.x - e.x, n = this.y - e.y, s = this.z - e.z;
    return t * t + n * n + s * s;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const s = Math.sin(t) * e;
    return this.x = s * Math.sin(n), this.y = Math.cos(t) * e, this.z = s * Math.cos(n), this;
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
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), s = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = s, this;
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
const Ra = new C(), sc = new Pt();
class jn {
  constructor(e = new C(1 / 0, 1 / 0, 1 / 0), t = new C(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(fn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(fn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = fn.copy(t).multiplyScalar(0.5);
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
      if (t === true && r !== void 0 && e.isInstancedMesh !== true) for (let a = 0, o = r.count; a < o; a++) e.isMesh === true ? e.getVertexPosition(a, fn) : fn.fromBufferAttribute(r, a), fn.applyMatrix4(e.matrixWorld), this.expandByPoint(fn);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), dr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), dr.copy(n.boundingBox)), dr.applyMatrix4(e.matrixWorld), this.union(dr);
    }
    const s = e.children;
    for (let r = 0, a = s.length; r < a; r++) this.expandByObject(s[r], t);
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
    return this.clampPoint(e.center, fn), fn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(Is), fr.subVectors(this.max, Is), Oi.subVectors(e.a, Is), Bi.subVectors(e.b, Is), ki.subVectors(e.c, Is), Zn.subVectors(Bi, Oi), Jn.subVectors(ki, Bi), vi.subVectors(Oi, ki);
    let t = [0, -Zn.z, Zn.y, 0, -Jn.z, Jn.y, 0, -vi.z, vi.y, Zn.z, 0, -Zn.x, Jn.z, 0, -Jn.x, vi.z, 0, -vi.x, -Zn.y, Zn.x, 0, -Jn.y, Jn.x, 0, -vi.y, vi.x, 0];
    return !Ca(t, Oi, Bi, ki, fr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ca(t, Oi, Bi, ki, fr)) ? false : (pr.crossVectors(Zn, Jn), t = [pr.x, pr.y, pr.z], Ca(t, Oi, Bi, ki, fr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, fn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(fn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Un[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Un[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Un[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Un[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Un[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Un[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Un[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Un[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Un), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Un = [new C(), new C(), new C(), new C(), new C(), new C(), new C(), new C()], fn = new C(), dr = new jn(), Oi = new C(), Bi = new C(), ki = new C(), Zn = new C(), Jn = new C(), vi = new C(), Is = new C(), fr = new C(), pr = new C(), xi = new C();
function Ca(i3, e, t, n, s) {
  for (let r = 0, a = i3.length - 3; r <= a; r += 3) {
    xi.fromArray(i3, r);
    const o = s.x * Math.abs(xi.x) + s.y * Math.abs(xi.y) + s.z * Math.abs(xi.z), l = e.dot(xi), c = t.dot(xi), h = n.dot(xi);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return false;
  }
  return true;
}
const cf = new jn(), Ds = new C(), Pa = new C();
class In {
  constructor(e = new C(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : cf.setFromPoints(e).getCenter(n);
    let s = 0;
    for (let r = 0, a = e.length; r < a; r++) s = Math.max(s, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(s), this;
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
    Ds.subVectors(e, this.center);
    const t = Ds.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ds, s / n), this.radius += s;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (Pa.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ds.copy(e.center).add(Pa)), this.expandByPoint(Ds.copy(e.center).sub(Pa))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Nn = new C(), Ia = new C(), mr = new C(), Qn = new C(), Da = new C(), gr = new C(), La = new C();
class Es {
  constructor(e = new C(), t = new C(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, Nn)), this;
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
    const t = Nn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Nn.copy(this.origin).addScaledVector(this.direction, t), Nn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, s) {
    Ia.copy(e).add(t).multiplyScalar(0.5), mr.copy(t).sub(e).normalize(), Qn.copy(this.origin).sub(Ia);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(mr), o = Qn.dot(this.direction), l = -Qn.dot(mr), c = Qn.lengthSq(), h = Math.abs(1 - a * a);
    let u, d, p, g;
    if (h > 0) if (u = a * l - o, d = a * o - l, g = r * h, u >= 0) if (d >= -g) if (d <= g) {
      const _ = 1 / h;
      u *= _, d *= _, p = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * l) + c;
    } else d = r, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
    else d = -r, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
    else d <= -g ? (u = Math.max(0, -(-a * r + o)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -l), r), p = d * (d + 2 * l) + c) : (u = Math.max(0, -(a * r + o)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c);
    else d = a > 0 ? -r : r, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), s && s.copy(Ia).addScaledVector(mr, d), p;
  }
  intersectSphere(e, t) {
    Nn.subVectors(e.center, this.origin);
    const n = Nn.dot(this.direction), s = Nn.dot(Nn) - n * n, r = e.radius * e.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
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
    let n, s, r, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, s = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, s = (e.min.x - d.x) * c), h >= 0 ? (r = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), n > a || r > s || ((r > n || isNaN(n)) && (n = r), (a < s || isNaN(s)) && (s = a), u >= 0 ? (o = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || o > s) || ((o > n || n !== n) && (n = o), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(n >= 0 ? n : s, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Nn) !== null;
  }
  intersectTriangle(e, t, n, s, r) {
    Da.subVectors(t, e), gr.subVectors(n, e), La.crossVectors(Da, gr);
    let a = this.direction.dot(La), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    Qn.subVectors(this.origin, e);
    const l = o * this.direction.dot(gr.crossVectors(Qn, gr));
    if (l < 0) return null;
    const c = o * this.direction.dot(Da.cross(Qn));
    if (c < 0 || l + c > a) return null;
    const h = -o * Qn.dot(La);
    return h < 0 ? null : this.at(h / a, r);
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
class De {
  constructor(e, t, n, s, r, a, o, l, c, h, u, d, p, g, _, m) {
    De.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, s, r, a, o, l, c, h, u, d, p, g, _, m);
  }
  set(e, t, n, s, r, a, o, l, c, h, u, d, p, g, _, m) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = s, f[1] = r, f[5] = a, f[9] = o, f[13] = l, f[2] = c, f[6] = h, f[10] = u, f[14] = d, f[3] = p, f[7] = g, f[11] = _, f[15] = m, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new De().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, s = 1 / zi.setFromMatrixColumn(e, 0).length(), r = 1 / zi.setFromMatrixColumn(e, 1).length(), a = 1 / zi.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * s, t[1] = n[1] * s, t[2] = n[2] * s, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, s = e.y, r = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(s), c = Math.sin(s), h = Math.cos(r), u = Math.sin(r);
    if (e.order === "XYZ") {
      const d = a * h, p = a * u, g = o * h, _ = o * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = p + g * c, t[5] = d - _ * c, t[9] = -o * l, t[2] = _ - d * c, t[6] = g + p * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const d = l * h, p = l * u, g = c * h, _ = c * u;
      t[0] = d + _ * o, t[4] = g * o - p, t[8] = a * c, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = p * o - g, t[6] = _ + d * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const d = l * h, p = l * u, g = c * h, _ = c * u;
      t[0] = d - _ * o, t[4] = -a * u, t[8] = g + p * o, t[1] = p + g * o, t[5] = a * h, t[9] = _ - d * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const d = a * h, p = a * u, g = o * h, _ = o * u;
      t[0] = l * h, t[4] = g * c - p, t[8] = d * c + _, t[1] = l * u, t[5] = _ * c + d, t[9] = p * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const d = a * l, p = a * c, g = o * l, _ = o * c;
      t[0] = l * h, t[4] = _ - d * u, t[8] = g * u + p, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = p * u + g, t[10] = d - _ * u;
    } else if (e.order === "XZY") {
      const d = a * l, p = a * c, g = o * l, _ = o * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + _, t[5] = a * h, t[9] = p * u - g, t[2] = g * u - p, t[6] = o * h, t[10] = _ * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(hf, e, uf);
  }
  lookAt(e, t, n) {
    const s = this.elements;
    return Kt.subVectors(e, t), Kt.lengthSq() === 0 && (Kt.z = 1), Kt.normalize(), ei.crossVectors(n, Kt), ei.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Kt.x += 1e-4 : Kt.z += 1e-4, Kt.normalize(), ei.crossVectors(n, Kt)), ei.normalize(), _r.crossVectors(Kt, ei), s[0] = ei.x, s[4] = _r.x, s[8] = Kt.x, s[1] = ei.y, s[5] = _r.y, s[9] = Kt.y, s[2] = ei.z, s[6] = _r.z, s[10] = Kt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], p = n[13], g = n[2], _ = n[6], m = n[10], f = n[14], T = n[3], E = n[7], y = n[11], P = n[15], w = s[0], R = s[4], N = s[8], M = s[12], S = s[1], I = s[5], q = s[9], z = s[13], X = s[2], J = s[6], G = s[10], te = s[14], V = s[3], ae = s[7], de = s[11], ye = s[15];
    return r[0] = a * w + o * S + l * X + c * V, r[4] = a * R + o * I + l * J + c * ae, r[8] = a * N + o * q + l * G + c * de, r[12] = a * M + o * z + l * te + c * ye, r[1] = h * w + u * S + d * X + p * V, r[5] = h * R + u * I + d * J + p * ae, r[9] = h * N + u * q + d * G + p * de, r[13] = h * M + u * z + d * te + p * ye, r[2] = g * w + _ * S + m * X + f * V, r[6] = g * R + _ * I + m * J + f * ae, r[10] = g * N + _ * q + m * G + f * de, r[14] = g * M + _ * z + m * te + f * ye, r[3] = T * w + E * S + y * X + P * V, r[7] = T * R + E * I + y * J + P * ae, r[11] = T * N + E * q + y * G + P * de, r[15] = T * M + E * z + y * te + P * ye, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], s = e[8], r = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], p = e[14], g = e[3], _ = e[7], m = e[11], f = e[15];
    return g * (+r * l * u - s * c * u - r * o * d + n * c * d + s * o * p - n * l * p) + _ * (+t * l * p - t * c * d + r * a * d - s * a * p + s * c * h - r * l * h) + m * (+t * c * u - t * o * p - r * a * u + n * a * p + r * o * h - n * c * h) + f * (-s * o * h - t * l * u + t * o * d + s * a * u - n * a * d + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const s = this.elements;
    return e.isVector3 ? (s[12] = e.x, s[13] = e.y, s[14] = e.z) : (s[12] = e, s[13] = t, s[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], p = e[11], g = e[12], _ = e[13], m = e[14], f = e[15], T = u * m * c - _ * d * c + _ * l * p - o * m * p - u * l * f + o * d * f, E = g * d * c - h * m * c - g * l * p + a * m * p + h * l * f - a * d * f, y = h * _ * c - g * u * c + g * o * p - a * _ * p - h * o * f + a * u * f, P = g * u * l - h * _ * l - g * o * d + a * _ * d + h * o * m - a * u * m, w = t * T + n * E + s * y + r * P;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / w;
    return e[0] = T * R, e[1] = (_ * d * r - u * m * r - _ * s * p + n * m * p + u * s * f - n * d * f) * R, e[2] = (o * m * r - _ * l * r + _ * s * c - n * m * c - o * s * f + n * l * f) * R, e[3] = (u * l * r - o * d * r - u * s * c + n * d * c + o * s * p - n * l * p) * R, e[4] = E * R, e[5] = (h * m * r - g * d * r + g * s * p - t * m * p - h * s * f + t * d * f) * R, e[6] = (g * l * r - a * m * r - g * s * c + t * m * c + a * s * f - t * l * f) * R, e[7] = (a * d * r - h * l * r + h * s * c - t * d * c - a * s * p + t * l * p) * R, e[8] = y * R, e[9] = (g * u * r - h * _ * r - g * n * p + t * _ * p + h * n * f - t * u * f) * R, e[10] = (a * _ * r - g * o * r + g * n * c - t * _ * c - a * n * f + t * o * f) * R, e[11] = (h * o * r - a * u * r - h * n * c + t * u * c + a * n * p - t * o * p) * R, e[12] = P * R, e[13] = (h * _ * s - g * u * s + g * n * d - t * _ * d - h * n * m + t * u * m) * R, e[14] = (g * o * s - a * _ * s - g * n * l + t * _ * l + a * n * m - t * o * m) * R, e[15] = (a * u * s - h * o * s + h * n * l - t * u * l - a * n * d + t * o * d) * R, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, s = e.y, r = e.z;
    return t[0] *= n, t[4] *= s, t[8] *= r, t[1] *= n, t[5] *= s, t[9] *= r, t[2] *= n, t[6] *= s, t[10] *= r, t[3] *= n, t[7] *= s, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, s));
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
    const n = Math.cos(t), s = Math.sin(t), r = 1 - n, a = e.x, o = e.y, l = e.z, c = r * a, h = r * o;
    return this.set(c * a + n, c * o - s * l, c * l + s * o, 0, c * o + s * l, h * o + n, h * l - s * a, 0, c * l - s * o, h * l + s * a, r * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, s, r, a) {
    return this.set(1, n, r, 0, e, 1, a, 0, t, s, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const s = this.elements, r = t._x, a = t._y, o = t._z, l = t._w, c = r + r, h = a + a, u = o + o, d = r * c, p = r * h, g = r * u, _ = a * h, m = a * u, f = o * u, T = l * c, E = l * h, y = l * u, P = n.x, w = n.y, R = n.z;
    return s[0] = (1 - (_ + f)) * P, s[1] = (p + y) * P, s[2] = (g - E) * P, s[3] = 0, s[4] = (p - y) * w, s[5] = (1 - (d + f)) * w, s[6] = (m + T) * w, s[7] = 0, s[8] = (g + E) * R, s[9] = (m - T) * R, s[10] = (1 - (d + _)) * R, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
  }
  decompose(e, t, n) {
    const s = this.elements;
    let r = zi.set(s[0], s[1], s[2]).length();
    const a = zi.set(s[4], s[5], s[6]).length(), o = zi.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), e.x = s[12], e.y = s[13], e.z = s[14], pn.copy(this);
    const c = 1 / r, h = 1 / a, u = 1 / o;
    return pn.elements[0] *= c, pn.elements[1] *= c, pn.elements[2] *= c, pn.elements[4] *= h, pn.elements[5] *= h, pn.elements[6] *= h, pn.elements[8] *= u, pn.elements[9] *= u, pn.elements[10] *= u, t.setFromRotationMatrix(pn), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, s, r, a, o = Wn) {
    const l = this.elements, c = 2 * r / (t - e), h = 2 * r / (n - s), u = (t + e) / (t - e), d = (n + s) / (n - s);
    let p, g;
    if (o === Wn) p = -(a + r) / (a - r), g = -2 * a * r / (a - r);
    else if (o === ea) p = -a / (a - r), g = -a * r / (a - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, s, r, a, o = Wn) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - s), u = 1 / (a - r), d = (t + e) * c, p = (n + s) * h;
    let g, _;
    if (o === Wn) g = (a + r) * u, _ = -2 * u;
    else if (o === ea) g = r * u, _ = -1 * u;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -p, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 16; s++) if (t[s] !== n[s]) return false;
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
const zi = new C(), pn = new De(), hf = new C(0, 0, 0), uf = new C(1, 1, 1), ei = new C(), _r = new C(), Kt = new C(), rc = new De(), ac = new Pt();
class Pn {
  constructor(e = 0, t = 0, n = 0, s = Pn.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = s;
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
  set(e, t, n, s = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    const s = e.elements, r = s[0], a = s[4], o = s[8], l = s[1], c = s[5], h = s[9], u = s[2], d = s[6], p = s[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Oe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Oe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Oe(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Oe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Oe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Oe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return rc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(rc, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ac.setFromEuler(this), this.setFromQuaternion(ac, e);
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
Pn.DEFAULT_ORDER = "XYZ";
class Sl {
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
let df = 0;
const oc = new C(), Hi = new Pt(), Fn = new De(), vr = new C(), Ls = new C(), ff = new C(), pf = new Pt(), lc = new C(1, 0, 0), cc = new C(0, 1, 0), hc = new C(0, 0, 1), uc = { type: "added" }, mf = { type: "removed" }, Vi = { type: "childadded", child: null }, Ua = { type: "childremoved", child: null };
class pt extends xn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: df++ }), this.uuid = vn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = pt.DEFAULT_UP.clone();
    const e = new C(), t = new Pn(), n = new Pt(), s = new C(1, 1, 1);
    function r() {
      n.setFromEuler(t, false);
    }
    function a() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(r), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: s }, modelViewMatrix: { value: new De() }, normalMatrix: { value: new Ue() } }), this.matrix = new De(), this.matrixWorld = new De(), this.matrixAutoUpdate = pt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Sl(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return Hi.setFromAxisAngle(e, t), this.quaternion.multiply(Hi), this;
  }
  rotateOnWorldAxis(e, t) {
    return Hi.setFromAxisAngle(e, t), this.quaternion.premultiply(Hi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(lc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(cc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(hc, e);
  }
  translateOnAxis(e, t) {
    return oc.copy(e).applyQuaternion(this.quaternion), this.position.add(oc.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(lc, e);
  }
  translateY(e) {
    return this.translateOnAxis(cc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(hc, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(Fn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? vr.copy(e) : vr.set(e, t, n);
    const s = this.parent;
    this.updateWorldMatrix(true, false), Ls.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Fn.lookAt(Ls, vr, this.up) : Fn.lookAt(vr, Ls, this.up), this.quaternion.setFromRotationMatrix(Fn), s && (Fn.extractRotation(s.matrixWorld), Hi.setFromRotationMatrix(Fn), this.quaternion.premultiply(Hi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(uc), Vi.child = e, this.dispatchEvent(Vi), Vi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(mf), Ua.child = e, this.dispatchEvent(Ua), Ua.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), Fn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), Fn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Fn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(uc), Vi.child = e, this.dispatchEvent(Vi), Vi.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const s = this.children;
    for (let r = 0, a = s.length; r < a; r++) s[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ls, e, ff), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ls, pf, e), e;
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
    for (let n = 0, s = t.length; n < s; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++) t[n].traverseVisible(e);
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
    for (let n = 0, s = t.length; n < s; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
      const s = this.children;
      for (let r = 0, a = s.length; r < a; r++) s[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === true && (s.castShadow = true), this.receiveShadow === true && (s.receiveShadow = true), this.visible === false && (s.visible = false), this.frustumCulled === false && (s.frustumCulled = false), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === false && (s.matrixAutoUpdate = false), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((o) => ({ boxInitialized: o.boxInitialized, boxMin: o.box.min.toArray(), boxMax: o.box.max.toArray(), sphereInitialized: o.sphereInitialized, sphereRadius: o.sphere.radius, sphereCenter: o.sphere.center.toArray() })), s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (s.boundingSphere = { center: s.boundingSphere.center.toArray(), radius: s.boundingSphere.radius }), this.boundingBox !== null && (s.boundingBox = { min: s.boundingBox.min.toArray(), max: s.boundingBox.max.toArray() }));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          r(e.shapes, u);
        }
        else r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(r(e.materials, this.material[l]));
      s.material = o;
    } else s.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++) s.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        s.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), u = a(e.shapes), d = a(e.skeletons), p = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = s, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
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
      const s = e.children[n];
      this.add(s.clone());
    }
    return this;
  }
}
pt.DEFAULT_UP = new C(0, 1, 0);
pt.DEFAULT_MATRIX_AUTO_UPDATE = true;
pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const mn = new C(), On = new C(), Na = new C(), Bn = new C(), Gi = new C(), Wi = new C(), dc = new C(), Fa = new C(), Oa = new C(), Ba = new C(), ka = new $e(), za = new $e(), Ha = new $e();
class _n {
  constructor(e = new C(), t = new C(), n = new C()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, s) {
    s.subVectors(n, t), mn.subVectors(e, t), s.cross(mn);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, s, r) {
    mn.subVectors(s, t), On.subVectors(n, t), Na.subVectors(e, t);
    const a = mn.dot(mn), o = mn.dot(On), l = mn.dot(Na), c = On.dot(On), h = On.dot(Na), u = a * c - o * o;
    if (u === 0) return r.set(0, 0, 0), null;
    const d = 1 / u, p = (c * l - o * h) * d, g = (a * h - o * l) * d;
    return r.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, s) {
    return this.getBarycoord(e, t, n, s, Bn) === null ? false : Bn.x >= 0 && Bn.y >= 0 && Bn.x + Bn.y <= 1;
  }
  static getInterpolation(e, t, n, s, r, a, o, l) {
    return this.getBarycoord(e, t, n, s, Bn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Bn.x), l.addScaledVector(a, Bn.y), l.addScaledVector(o, Bn.z), l);
  }
  static getInterpolatedAttribute(e, t, n, s, r, a) {
    return ka.setScalar(0), za.setScalar(0), Ha.setScalar(0), ka.fromBufferAttribute(e, t), za.fromBufferAttribute(e, n), Ha.fromBufferAttribute(e, s), a.setScalar(0), a.addScaledVector(ka, r.x), a.addScaledVector(za, r.y), a.addScaledVector(Ha, r.z), a;
  }
  static isFrontFacing(e, t, n, s) {
    return mn.subVectors(n, t), On.subVectors(e, t), mn.cross(On).dot(s) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, s) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[s]), this;
  }
  setFromAttributeAndIndices(e, t, n, s) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return mn.subVectors(this.c, this.b), On.subVectors(this.a, this.b), mn.cross(On).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return _n.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return _n.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, s, r) {
    return _n.getInterpolation(e, this.a, this.b, this.c, t, n, s, r);
  }
  containsPoint(e) {
    return _n.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return _n.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, s = this.b, r = this.c;
    let a, o;
    Gi.subVectors(s, n), Wi.subVectors(r, n), Fa.subVectors(e, n);
    const l = Gi.dot(Fa), c = Wi.dot(Fa);
    if (l <= 0 && c <= 0) return t.copy(n);
    Oa.subVectors(e, s);
    const h = Gi.dot(Oa), u = Wi.dot(Oa);
    if (h >= 0 && u <= h) return t.copy(s);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0) return a = l / (l - h), t.copy(n).addScaledVector(Gi, a);
    Ba.subVectors(e, r);
    const p = Gi.dot(Ba), g = Wi.dot(Ba);
    if (g >= 0 && p <= g) return t.copy(r);
    const _ = p * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0) return o = c / (c - g), t.copy(n).addScaledVector(Wi, o);
    const m = h * g - p * u;
    if (m <= 0 && u - h >= 0 && p - g >= 0) return dc.subVectors(r, s), o = (u - h) / (u - h + (p - g)), t.copy(s).addScaledVector(dc, o);
    const f = 1 / (m + _ + d);
    return a = _ * f, o = d * f, t.copy(n).addScaledVector(Gi, a).addScaledVector(Wi, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const iu = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, ti = { h: 0, s: 0, l: 0 }, xr = { h: 0, s: 0, l: 0 };
function Va(i3, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i3 + (e - i3) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i3 + (e - i3) * 6 * (2 / 3 - t) : i3;
}
let Te = class {
  constructor(e, t, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const s = e;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Ye) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Xe.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, s = Xe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Xe.toWorkingColorSpace(this, s), this;
  }
  setHSL(e, t, n, s = Xe.workingColorSpace) {
    if (e = xl(e, 1), t = Oe(t, 0, 1), n = Oe(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r;
      this.r = Va(a, r, e + 1 / 3), this.g = Va(a, r, e), this.b = Va(a, r, e - 1 / 3);
    }
    return Xe.toWorkingColorSpace(this, s), this;
  }
  setStyle(e, t = Ye) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const a = s[1], o = s[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = s[1], a = r.length;
      if (a === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ye) {
    const n = iu[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Yn(e.r), this.g = Yn(e.g), this.b = Yn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = cs(e.r), this.g = cs(e.g), this.b = cs(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ye) {
    return Xe.fromWorkingColorSpace(Nt.copy(this), e), Math.round(Oe(Nt.r * 255, 0, 255)) * 65536 + Math.round(Oe(Nt.g * 255, 0, 255)) * 256 + Math.round(Oe(Nt.b * 255, 0, 255));
  }
  getHexString(e = Ye) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Xe.workingColorSpace) {
    Xe.fromWorkingColorSpace(Nt.copy(this), t);
    const n = Nt.r, s = Nt.g, r = Nt.b, a = Math.max(n, s, r), o = Math.min(n, s, r);
    let l, c;
    const h = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const u = a - o;
      switch (c = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          l = (s - r) / u + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - s) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = Xe.workingColorSpace) {
    return Xe.fromWorkingColorSpace(Nt.copy(this), t), e.r = Nt.r, e.g = Nt.g, e.b = Nt.b, e;
  }
  getStyle(e = Ye) {
    Xe.fromWorkingColorSpace(Nt.copy(this), e);
    const t = Nt.r, n = Nt.g, s = Nt.b;
    return e !== Ye ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(ti), this.setHSL(ti.h + e, ti.s + t, ti.l + n);
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
    this.getHSL(ti), e.getHSL(xr);
    const n = Ys(ti.h, xr.h, t), s = Ys(ti.s, xr.s, t), r = Ys(ti.l, xr.l, t);
    return this.setHSL(n, s, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, s = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * s, this.g = r[1] * t + r[4] * n + r[7] * s, this.b = r[2] * t + r[5] * n + r[8] * s, this;
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
const Nt = new Te();
Te.NAMES = iu;
let gf = 0;
class cn extends xn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: gf++ }), this.uuid = vn(), this.name = "", this.type = "Material", this.blending = os, this.side = Cn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = uo, this.blendDst = fo, this.blendEquation = Ai, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Te(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ds, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Jl, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ni, this.stencilZFail = Ni, this.stencilZPass = Ni, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
      const s = this[t];
      if (s === void 0) {
        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== os && (n.blending = this.blending), this.side !== Cn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== uo && (n.blendSrc = this.blendSrc), this.blendDst !== fo && (n.blendDst = this.blendDst), this.blendEquation !== Ai && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ds && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Jl && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Ni && (n.stencilFail = this.stencilFail), this.stencilZFail !== Ni && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Ni && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const r = s(e.textures), a = s(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
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
      const s = t.length;
      n = new Array(s);
      for (let r = 0; r !== s; ++r) n[r] = t[r].clone();
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
class li extends cn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Te(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Pn(), this.combine = Fh, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const xt = new C(), Sr = new _e();
class It {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Ko, this.updateRanges = [], this.gpuType = on, this.version = 0;
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
    for (let s = 0, r = this.itemSize; s < r; s++) this.array[e + s] = t.array[n + s];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Sr.fromBufferAttribute(this, t), Sr.applyMatrix3(e), this.setXY(t, Sr.x, Sr.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) xt.fromBufferAttribute(this, t), xt.applyMatrix3(e), this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) xt.fromBufferAttribute(this, t), xt.applyMatrix4(e), this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) xt.fromBufferAttribute(this, t), xt.applyNormalMatrix(e), this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) xt.fromBufferAttribute(this, t), xt.transformDirection(e), this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = gn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = st(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = st(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = st(t, this.array), n = st(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, s) {
    return e *= this.itemSize, this.normalized && (t = st(t, this.array), n = st(n, this.array), s = st(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this;
  }
  setXYZW(e, t, n, s, r) {
    return e *= this.itemSize, this.normalized && (t = st(t, this.array), n = st(n, this.array), s = st(s, this.array), r = st(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== Ko && (e.usage = this.usage), e;
  }
}
class su extends It {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class ru extends It {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class qn extends It {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let _f = 0;
const sn = new De(), Ga = new pt(), Xi = new C(), $t = new jn(), Us = new jn(), At = new C();
class Sn extends xn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: _f++ }), this.uuid = vn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (eu(e) ? ru : su)(e, 1) : this.index = e, this;
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
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(e), s.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return sn.makeRotationFromQuaternion(e), this.applyMatrix4(sn), this;
  }
  rotateX(e) {
    return sn.makeRotationX(e), this.applyMatrix4(sn), this;
  }
  rotateY(e) {
    return sn.makeRotationY(e), this.applyMatrix4(sn), this;
  }
  rotateZ(e) {
    return sn.makeRotationZ(e), this.applyMatrix4(sn), this;
  }
  translate(e, t, n) {
    return sn.makeTranslation(e, t, n), this.applyMatrix4(sn), this;
  }
  scale(e, t, n) {
    return sn.makeScale(e, t, n), this.applyMatrix4(sn), this;
  }
  lookAt(e) {
    return Ga.lookAt(e), Ga.updateMatrix(), this.applyMatrix4(Ga.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Xi).negate(), this.translate(Xi.x, Xi.y, Xi.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let s = 0, r = e.length; s < r; s++) {
        const a = e[s];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new qn(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let s = 0; s < n; s++) {
        const r = e[s];
        t.setXYZ(s, r.x, r.y, r.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new jn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new C(-1 / 0, -1 / 0, -1 / 0), new C(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, s = t.length; n < s; n++) {
        const r = t[n];
        $t.setFromBufferAttribute(r), this.morphTargetsRelative ? (At.addVectors(this.boundingBox.min, $t.min), this.boundingBox.expandByPoint(At), At.addVectors(this.boundingBox.max, $t.max), this.boundingBox.expandByPoint(At)) : (this.boundingBox.expandByPoint($t.min), this.boundingBox.expandByPoint($t.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new In());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new C(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ($t.setFromBufferAttribute(e), t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r];
        Us.setFromBufferAttribute(o), this.morphTargetsRelative ? (At.addVectors($t.min, Us.min), $t.expandByPoint(At), At.addVectors($t.max, Us.max), $t.expandByPoint(At)) : ($t.expandByPoint(Us.min), $t.expandByPoint(Us.max));
      }
      $t.getCenter(n);
      let s = 0;
      for (let r = 0, a = e.count; r < a; r++) At.fromBufferAttribute(e, r), s = Math.max(s, n.distanceToSquared(At));
      if (t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r], l = this.morphTargetsRelative;
        for (let c = 0, h = o.count; c < h; c++) At.fromBufferAttribute(o, c), l && (Xi.fromBufferAttribute(e, c), At.add(Xi)), s = Math.max(s, n.distanceToSquared(At));
      }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, s = t.normal, r = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new It(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let N = 0; N < n.count; N++) o[N] = new C(), l[N] = new C();
    const c = new C(), h = new C(), u = new C(), d = new _e(), p = new _e(), g = new _e(), _ = new C(), m = new C();
    function f(N, M, S) {
      c.fromBufferAttribute(n, N), h.fromBufferAttribute(n, M), u.fromBufferAttribute(n, S), d.fromBufferAttribute(r, N), p.fromBufferAttribute(r, M), g.fromBufferAttribute(r, S), h.sub(c), u.sub(c), p.sub(d), g.sub(d);
      const I = 1 / (p.x * g.y - g.x * p.y);
      isFinite(I) && (_.copy(h).multiplyScalar(g.y).addScaledVector(u, -p.y).multiplyScalar(I), m.copy(u).multiplyScalar(p.x).addScaledVector(h, -g.x).multiplyScalar(I), o[N].add(_), o[M].add(_), o[S].add(_), l[N].add(m), l[M].add(m), l[S].add(m));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: e.count }]);
    for (let N = 0, M = T.length; N < M; ++N) {
      const S = T[N], I = S.start, q = S.count;
      for (let z = I, X = I + q; z < X; z += 3) f(e.getX(z + 0), e.getX(z + 1), e.getX(z + 2));
    }
    const E = new C(), y = new C(), P = new C(), w = new C();
    function R(N) {
      P.fromBufferAttribute(s, N), w.copy(P);
      const M = o[N];
      E.copy(M), E.sub(P.multiplyScalar(P.dot(M))).normalize(), y.crossVectors(w, M);
      const I = y.dot(l[N]) < 0 ? -1 : 1;
      a.setXYZW(N, E.x, E.y, E.z, I);
    }
    for (let N = 0, M = T.length; N < M; ++N) {
      const S = T[N], I = S.start, q = S.count;
      for (let z = I, X = I + q; z < X; z += 3) R(e.getX(z + 0)), R(e.getX(z + 1)), R(e.getX(z + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new It(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let d = 0, p = n.count; d < p; d++) n.setXYZ(d, 0, 0, 0);
      const s = new C(), r = new C(), a = new C(), o = new C(), l = new C(), c = new C(), h = new C(), u = new C();
      if (e) for (let d = 0, p = e.count; d < p; d += 3) {
        const g = e.getX(d + 0), _ = e.getX(d + 1), m = e.getX(d + 2);
        s.fromBufferAttribute(t, g), r.fromBufferAttribute(t, _), a.fromBufferAttribute(t, m), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, m), o.add(h), l.add(h), c.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
      }
      else for (let d = 0, p = t.count; d < p; d += 3) s.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) At.fromBufferAttribute(e, t), At.normalize(), e.setXYZ(t, At.x, At.y, At.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, d = new c.constructor(l.length * h);
      let p = 0, g = 0;
      for (let _ = 0, m = l.length; _ < m; _++) {
        o.isInterleavedBufferAttribute ? p = l[_] * o.data.stride + o.offset : p = l[_] * h;
        for (let f = 0; f < h; f++) d[g++] = c[p++];
      }
      return new It(d, h, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Sn(), n = this.index.array, s = this.attributes;
    for (const o in s) {
      const l = s[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], p = e(d, n);
        l.push(p);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
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
    const s = {};
    let r = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const p = c[u];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (s[l] = h, r = true);
    }
    r && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), e;
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
    const s = e.attributes;
    for (const c in s) {
      const h = s[c];
      this.setAttribute(c, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
      for (let d = 0, p = u.length; d < p; d++) h.push(u[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const fc = new De(), Si = new Es(), yr = new In(), pc = new C(), Mr = new C(), Er = new C(), br = new C(), Wa = new C(), Tr = new C(), mc = new C(), Ar = new C();
class rt extends pt {
  constructor(e = new Sn(), t = new li()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(s, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      Tr.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = o[l], u = r[l];
        h !== 0 && (Wa.fromBufferAttribute(u, e), a ? Tr.addScaledVector(Wa, h) : Tr.addScaledVector(Wa.sub(t), h));
      }
      t.add(Tr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), yr.copy(n.boundingSphere), yr.applyMatrix4(r), Si.copy(e.ray).recast(e.near), !(yr.containsPoint(Si.origin) === false && (Si.intersectSphere(yr, pc) === null || Si.origin.distanceToSquared(pc) > (e.far - e.near) ** 2)) && (fc.copy(r).invert(), Si.copy(e.ray).applyMatrix4(fc), !(n.boundingBox !== null && Si.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, Si)));
  }
  _computeIntersections(e, t, n) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, p = r.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let g = 0, _ = d.length; g < _; g++) {
      const m = d[g], f = a[m.materialIndex], T = Math.max(m.start, p.start), E = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
      for (let y = T, P = E; y < P; y += 3) {
        const w = o.getX(y), R = o.getX(y + 1), N = o.getX(y + 2);
        s = wr(this, f, e, n, c, h, u, w, R, N), s && (s.faceIndex = Math.floor(y / 3), s.face.materialIndex = m.materialIndex, t.push(s));
      }
    }
    else {
      const g = Math.max(0, p.start), _ = Math.min(o.count, p.start + p.count);
      for (let m = g, f = _; m < f; m += 3) {
        const T = o.getX(m), E = o.getX(m + 1), y = o.getX(m + 2);
        s = wr(this, a, e, n, c, h, u, T, E, y), s && (s.faceIndex = Math.floor(m / 3), t.push(s));
      }
    }
    else if (l !== void 0) if (Array.isArray(a)) for (let g = 0, _ = d.length; g < _; g++) {
      const m = d[g], f = a[m.materialIndex], T = Math.max(m.start, p.start), E = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
      for (let y = T, P = E; y < P; y += 3) {
        const w = y, R = y + 1, N = y + 2;
        s = wr(this, f, e, n, c, h, u, w, R, N), s && (s.faceIndex = Math.floor(y / 3), s.face.materialIndex = m.materialIndex, t.push(s));
      }
    }
    else {
      const g = Math.max(0, p.start), _ = Math.min(l.count, p.start + p.count);
      for (let m = g, f = _; m < f; m += 3) {
        const T = m, E = m + 1, y = m + 2;
        s = wr(this, a, e, n, c, h, u, T, E, y), s && (s.faceIndex = Math.floor(m / 3), t.push(s));
      }
    }
  }
}
function vf(i3, e, t, n, s, r, a, o) {
  let l;
  if (e.side === St ? l = n.intersectTriangle(a, r, s, true, o) : l = n.intersectTriangle(s, r, a, e.side === Cn, o), l === null) return null;
  Ar.copy(o), Ar.applyMatrix4(i3.matrixWorld);
  const c = t.ray.origin.distanceTo(Ar);
  return c < t.near || c > t.far ? null : { distance: c, point: Ar.clone(), object: i3 };
}
function wr(i3, e, t, n, s, r, a, o, l, c) {
  i3.getVertexPosition(o, Mr), i3.getVertexPosition(l, Er), i3.getVertexPosition(c, br);
  const h = vf(i3, e, t, n, Mr, Er, br, mc);
  if (h) {
    const u = new C();
    _n.getBarycoord(mc, Mr, Er, br, u), s && (h.uv = _n.getInterpolatedAttribute(s, o, l, c, u, new _e())), r && (h.uv1 = _n.getInterpolatedAttribute(r, o, l, c, u, new _e())), a && (h.normal = _n.getInterpolatedAttribute(a, o, l, c, u, new C()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = { a: o, b: l, c, normal: new C(), materialIndex: 0 };
    _n.getNormal(Mr, Er, br, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class bs extends Sn {
  constructor(e = 1, t = 1, n = 1, s = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: s, heightSegments: r, depthSegments: a };
    const o = this;
    s = Math.floor(s), r = Math.floor(r), a = Math.floor(a);
    const l = [], c = [], h = [], u = [];
    let d = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0), g("z", "y", "x", 1, -1, n, t, -e, a, r, 1), g("x", "z", "y", 1, 1, e, n, t, s, a, 2), g("x", "z", "y", 1, -1, e, n, -t, s, a, 3), g("x", "y", "z", 1, -1, e, t, n, s, r, 4), g("x", "y", "z", -1, -1, e, t, -n, s, r, 5), this.setIndex(l), this.setAttribute("position", new qn(c, 3)), this.setAttribute("normal", new qn(h, 3)), this.setAttribute("uv", new qn(u, 2));
    function g(_, m, f, T, E, y, P, w, R, N, M) {
      const S = y / R, I = P / N, q = y / 2, z = P / 2, X = w / 2, J = R + 1, G = N + 1;
      let te = 0, V = 0;
      const ae = new C();
      for (let de = 0; de < G; de++) {
        const ye = de * I - z;
        for (let Be = 0; Be < J; Be++) {
          const lt = Be * S - q;
          ae[_] = lt * T, ae[m] = ye * E, ae[f] = X, c.push(ae.x, ae.y, ae.z), ae[_] = 0, ae[m] = 0, ae[f] = w > 0 ? 1 : -1, h.push(ae.x, ae.y, ae.z), u.push(Be / R), u.push(1 - de / N), te += 1;
        }
      }
      for (let de = 0; de < N; de++) for (let ye = 0; ye < R; ye++) {
        const Be = d + ye + J * de, lt = d + ye + J * (de + 1), Y = d + (ye + 1) + J * (de + 1), ne = d + (ye + 1) + J * de;
        l.push(Be, lt, ne), l.push(lt, Y, ne), V += 6;
      }
      o.addGroup(p, V, M), p += V, d += te;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new bs(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function _s(i3) {
  const e = {};
  for (const t in i3) {
    e[t] = {};
    for (const n in i3[t]) {
      const s = i3[t][n];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = s.clone() : Array.isArray(s) ? e[t][n] = s.slice() : e[t][n] = s;
    }
  }
  return e;
}
function Ht(i3) {
  const e = {};
  for (let t = 0; t < i3.length; t++) {
    const n = _s(i3[t]);
    for (const s in n) e[s] = n[s];
  }
  return e;
}
function xf(i3) {
  const e = [];
  for (let t = 0; t < i3.length; t++) e.push(i3[t].clone());
  return e;
}
function au(i3) {
  const e = i3.getRenderTarget();
  return e === null ? i3.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : Xe.workingColorSpace;
}
const Sf = { clone: _s, merge: Ht };
var yf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Mf = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Gt extends cn {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = yf, this.fragmentShader = Mf, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = _s(e.uniforms), this.uniformsGroups = xf(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const s in this.uniforms) {
      const a = this.uniforms[s].value;
      a && a.isTexture ? t.uniforms[s] = { type: "t", value: a.toJSON(e).uuid } : a && a.isColor ? t.uniforms[s] = { type: "c", value: a.getHex() } : a && a.isVector2 ? t.uniforms[s] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? t.uniforms[s] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? t.uniforms[s] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? t.uniforms[s] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? t.uniforms[s] = { type: "m4", value: a.toArray() } : t.uniforms[s] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const s in this.extensions) this.extensions[s] === true && (n[s] = true);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class ou extends pt {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new De(), this.projectionMatrix = new De(), this.projectionMatrixInverse = new De(), this.coordinateSystem = Wn;
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
const ni = new C(), gc = new _e(), _c = new _e();
class Ft extends ou {
  constructor(e = 50, t = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = gs * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Xs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return gs * 2 * Math.atan(Math.tan(Xs * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    ni.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(ni.x, ni.y).multiplyScalar(-e / ni.z), ni.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(ni.x, ni.y).multiplyScalar(-e / ni.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, gc, _c), t.subVectors(_c, gc);
  }
  setViewOffset(e, t, n, s, r, a) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Xs * 0.5 * this.fov) / this.zoom, n = 2 * t, s = this.aspect * n, r = -0.5 * s;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      r += a.offsetX * s / l, t -= a.offsetY * n / c, s *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Yi = -90, qi = 1;
class Ef extends pt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Ft(Yi, qi, e, t);
    s.layers = this.layers, this.add(s);
    const r = new Ft(Yi, qi, e, t);
    r.layers = this.layers, this.add(r);
    const a = new Ft(Yi, qi, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Ft(Yi, qi, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Ft(Yi, qi, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Ft(Yi, qi, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, s, r, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === Wn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === ea) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, l, c, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = false;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, s), e.render(t, r), e.setRenderTarget(n, 1, s), e.render(t, a), e.setRenderTarget(n, 2, s), e.render(t, o), e.setRenderTarget(n, 3, s), e.render(t, l), e.setRenderTarget(n, 4, s), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, s), e.render(t, h), e.setRenderTarget(u, d, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = true;
  }
}
class lu extends Mt {
  constructor(e, t, n, s, r, a, o, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : fs, super(e, t, n, s, r, a, o, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class bf extends Bt {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new lu(s, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ct;
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
			` }, s = new bs(5, 5, 5), r = new Gt({ name: "CubemapFromEquirect", uniforms: _s(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: St, blending: qt });
    r.uniforms.tEquirect.value = t;
    const a = new rt(s, r), o = t.minFilter;
    return t.minFilter === Gn && (t.minFilter = Ct), new Ef(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, s) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, s);
    e.setRenderTarget(r);
  }
}
class ta extends pt {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Pn(), this.environmentIntensity = 1, this.environmentRotation = new Pn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class Tf {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Ko, this.updateRanges = [], this.version = 0, this.uuid = vn();
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
    for (let s = 0, r = this.stride; s < r; s++) this.array[e + s] = t.array[n + s];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = vn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = vn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const zt = new C();
class yl {
  constructor(e, t, n, s = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = s;
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
    for (let t = 0, n = this.data.count; t < n; t++) zt.fromBufferAttribute(this, t), zt.applyMatrix4(e), this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) zt.fromBufferAttribute(this, t), zt.applyNormalMatrix(e), this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) zt.fromBufferAttribute(this, t), zt.transformDirection(e), this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = gn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = st(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = st(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = gn(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = st(t, this.array), n = st(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = st(t, this.array), n = st(n, this.array), s = st(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = s, this;
  }
  setXYZW(e, t, n, s, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = st(t, this.array), n = st(n, this.array), s = st(s, this.array), r = st(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = s, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const s = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
      }
      return new It(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new yl(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const s = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
const vc = new C(), xc = new $e(), Sc = new $e(), Af = new C(), yc = new De(), Rr = new C(), Xa = new In(), Mc = new De(), Ya = new Es();
class wf extends rt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = Zl, this.bindMatrix = new De(), this.bindMatrixInverse = new De(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new jn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, Rr), this.boundingBox.expandByPoint(Rr);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new In()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, Rr), this.boundingSphere.expandByPoint(Rr);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, s = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Xa.copy(this.boundingSphere), Xa.applyMatrix4(s), e.ray.intersectsSphere(Xa) !== false && (Mc.copy(s).invert(), Ya.copy(e.ray).applyMatrix4(Mc), !(this.boundingBox !== null && Ya.intersectsBox(this.boundingBox) === false) && this._computeIntersections(e, t, Ya)));
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
    const e = new $e(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, s = t.count; n < s; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Zl ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Md ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, s = this.geometry;
    xc.fromBufferAttribute(s.attributes.skinIndex, e), Sc.fromBufferAttribute(s.attributes.skinWeight, e), vc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = Sc.getComponent(r);
      if (a !== 0) {
        const o = xc.getComponent(r);
        yc.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Af.copy(vc).applyMatrix4(yc), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class cu extends pt {
  constructor() {
    super(), this.isBone = true, this.type = "Bone";
  }
}
class hu extends Mt {
  constructor(e = null, t = 1, n = 1, s, r, a, o, l, c = Vt, h = Vt, u, d) {
    super(null, a, o, l, c, h, s, r, u, d), this.isDataTexture = true, this.image = { data: e, width: t, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const Ec = new De(), Rf = new De();
class Ml {
  constructor(e = [], t = []) {
    this.uuid = vn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, s = this.bones.length; n < s; n++) this.boneInverses.push(new De());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new De();
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
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, s = this.boneTexture;
    for (let r = 0, a = e.length; r < a; r++) {
      const o = e[r] ? e[r].matrixWorld : Rf;
      Ec.multiplyMatrices(o, t[r]), Ec.toArray(n, r * 16);
    }
    s !== null && (s.needsUpdate = true);
  }
  clone() {
    return new Ml(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new hu(t, e, e, ln, on);
    return n.needsUpdate = true, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const s = this.bones[t];
      if (s.name === e) return s;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, s = e.bones.length; n < s; n++) {
      const r = e.bones[n];
      let a = t[r];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), a = new cu()), this.bones.push(a), this.boneInverses.push(new De().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let s = 0, r = t.length; s < r; s++) {
      const a = t[s];
      e.bones.push(a.uuid);
      const o = n[s];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class $o extends It {
  constructor(e, t, n, s = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = true, this.meshPerAttribute = s;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = true, e;
  }
}
const ji = new De(), bc = new De(), Cr = [], Tc = new jn(), Cf = new De(), Ns = new rt(), Fs = new In();
class Pf extends rt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new $o(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let s = 0; s < n; s++) this.setMatrixAt(s, Cf);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new jn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, ji), Tc.copy(e.boundingBox).applyMatrix4(ji), this.boundingBox.union(Tc);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new In()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, ji), Fs.copy(e.boundingSphere).applyMatrix4(ji), this.boundingSphere.union(Fs);
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
    const n = t.morphTargetInfluences, s = this.morphTexture.source.data.data, r = n.length + 1, a = e * r + 1;
    for (let o = 0; o < n.length; o++) n[o] = s[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld, s = this.count;
    if (Ns.geometry = this.geometry, Ns.material = this.material, Ns.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Fs.copy(this.boundingSphere), Fs.applyMatrix4(n), e.ray.intersectsSphere(Fs) !== false)) for (let r = 0; r < s; r++) {
      this.getMatrixAt(r, ji), bc.multiplyMatrices(n, ji), Ns.matrixWorld = bc, Ns.raycast(e, Cr);
      for (let a = 0, o = Cr.length; a < o; a++) {
        const l = Cr[a];
        l.instanceId = r, l.object = this, t.push(l);
      }
      Cr.length = 0;
    }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new $o(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, s = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new hu(new Float32Array(s * this.count), s, this.count, pl, on));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < n.length; c++) a += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, l = s * e;
    r[l] = o, r.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
const qa = new C(), If = new C(), Df = new Ue();
class ri {
  constructor(e = new C(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, s) {
    return this.normal.set(e, t, n), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const s = qa.subVectors(n, t).cross(If.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, e), this;
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
    const n = e.delta(qa), s = this.normal.dot(n);
    if (s === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / s;
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
    const n = t || Df.getNormalMatrix(e), s = this.coplanarPoint(qa).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -s.dot(r), this;
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
const yi = new In(), Pr = new C();
class El {
  constructor(e = new ri(), t = new ri(), n = new ri(), s = new ri(), r = new ri(), a = new ri()) {
    this.planes = [e, t, n, s, r, a];
  }
  set(e, t, n, s, r, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(s), o[4].copy(r), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Wn) {
    const n = this.planes, s = e.elements, r = s[0], a = s[1], o = s[2], l = s[3], c = s[4], h = s[5], u = s[6], d = s[7], p = s[8], g = s[9], _ = s[10], m = s[11], f = s[12], T = s[13], E = s[14], y = s[15];
    if (n[0].setComponents(l - r, d - c, m - p, y - f).normalize(), n[1].setComponents(l + r, d + c, m + p, y + f).normalize(), n[2].setComponents(l + a, d + h, m + g, y + T).normalize(), n[3].setComponents(l - a, d - h, m - g, y - T).normalize(), n[4].setComponents(l - o, d - u, m - _, y - E).normalize(), t === Wn) n[5].setComponents(l + o, d + u, m + _, y + E).normalize();
    else if (t === ea) n[5].setComponents(o, u, _, E).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(yi);
  }
  intersectsSprite(e) {
    return yi.center.set(0, 0, 0), yi.radius = 0.7071067811865476, yi.applyMatrix4(e.matrixWorld), this.intersectsSphere(yi);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, s = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < s) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = t[n];
      if (Pr.x = s.normal.x > 0 ? e.max.x : e.min.x, Pr.y = s.normal.y > 0 ? e.max.y : e.min.y, Pr.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint(Pr) < 0) return false;
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
class uu extends cn {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Te(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const na = new C(), ia = new C(), Ac = new De(), Os = new Es(), Ir = new In(), ja = new C(), wc = new C();
class bl extends pt {
  constructor(e = new Sn(), t = new uu()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let s = 1, r = t.count; s < r; s++) na.fromBufferAttribute(t, s - 1), ia.fromBufferAttribute(t, s), n[s] = n[s - 1], n[s] += na.distanceTo(ia);
      e.setAttribute("lineDistance", new qn(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.matrixWorld, r = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ir.copy(n.boundingSphere), Ir.applyMatrix4(s), Ir.radius += r, e.ray.intersectsSphere(Ir) === false) return;
    Ac.copy(s).invert(), Os.copy(e.ray).applyMatrix4(Ac);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
    if (h !== null) {
      const p = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let _ = p, m = g - 1; _ < m; _ += c) {
        const f = h.getX(_), T = h.getX(_ + 1), E = Dr(this, e, Os, l, f, T);
        E && t.push(E);
      }
      if (this.isLineLoop) {
        const _ = h.getX(g - 1), m = h.getX(p), f = Dr(this, e, Os, l, _, m);
        f && t.push(f);
      }
    } else {
      const p = Math.max(0, a.start), g = Math.min(d.count, a.start + a.count);
      for (let _ = p, m = g - 1; _ < m; _ += c) {
        const f = Dr(this, e, Os, l, _, _ + 1);
        f && t.push(f);
      }
      if (this.isLineLoop) {
        const _ = Dr(this, e, Os, l, g - 1, p);
        _ && t.push(_);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function Dr(i3, e, t, n, s, r) {
  const a = i3.geometry.attributes.position;
  if (na.fromBufferAttribute(a, s), ia.fromBufferAttribute(a, r), t.distanceSqToSegment(na, ia, ja, wc) > n) return;
  ja.applyMatrix4(i3.matrixWorld);
  const l = e.ray.origin.distanceTo(ja);
  if (!(l < e.near || l > e.far)) return { distance: l, point: wc.clone().applyMatrix4(i3.matrixWorld), index: s, face: null, faceIndex: null, barycoord: null, object: i3 };
}
const Rc = new C(), Cc = new C();
class Lf extends bl {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let s = 0, r = t.count; s < r; s += 2) Rc.fromBufferAttribute(t, s), Cc.fromBufferAttribute(t, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + Rc.distanceTo(Cc);
      e.setAttribute("lineDistance", new qn(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Uf extends bl {
  constructor(e, t) {
    super(e, t), this.isLineLoop = true, this.type = "LineLoop";
  }
}
class du extends cn {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Te(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Pc = new De(), Zo = new Es(), Lr = new In(), Ur = new C();
class Nf extends pt {
  constructor(e = new Sn(), t = new du()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.matrixWorld, r = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Lr.copy(n.boundingSphere), Lr.applyMatrix4(s), Lr.radius += r, e.ray.intersectsSphere(Lr) === false) return;
    Pc.copy(s).invert(), Zo.copy(e.ray).applyMatrix4(Pc);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, a.start), p = Math.min(c.count, a.start + a.count);
      for (let g = d, _ = p; g < _; g++) {
        const m = c.getX(g);
        Ur.fromBufferAttribute(u, m), Ic(Ur, m, l, s, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), p = Math.min(u.count, a.start + a.count);
      for (let g = d, _ = p; g < _; g++) Ur.fromBufferAttribute(u, g), Ic(Ur, g, l, s, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function Ic(i3, e, t, n, s, r, a) {
  const o = Zo.distanceSqToPoint(i3);
  if (o < t) {
    const l = new C();
    Zo.closestPointToPoint(i3, l), l.applyMatrix4(n);
    const c = s.ray.origin.distanceTo(l);
    if (c < s.near || c > s.far) return;
    r.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: e, face: null, faceIndex: null, barycoord: null, object: a });
  }
}
class ci extends pt {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
class Tl extends Mt {
  constructor(e, t, n, s, r, a, o, l, c, h = ls) {
    if (h !== ls && h !== Ii) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === ls && (n = Ci), n === void 0 && h === Ii && (n = Pi), super(null, s, r, a, o, l, h, n, c), this.isDepthTexture = true, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : Vt, this.minFilter = l !== void 0 ? l : Vt, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class oa extends Sn {
  constructor(e = 1, t = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: s };
    const r = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(s), c = o + 1, h = l + 1, u = e / o, d = t / l, p = [], g = [], _ = [], m = [];
    for (let f = 0; f < h; f++) {
      const T = f * d - a;
      for (let E = 0; E < c; E++) {
        const y = E * u - r;
        g.push(y, -T, 0), _.push(0, 0, 1), m.push(E / o), m.push(1 - f / l);
      }
    }
    for (let f = 0; f < l; f++) for (let T = 0; T < o; T++) {
      const E = T + c * f, y = T + c * (f + 1), P = T + 1 + c * (f + 1), w = T + 1 + c * f;
      p.push(E, y, w), p.push(y, P, w);
    }
    this.setIndex(p), this.setAttribute("position", new qn(g, 3)), this.setAttribute("normal", new qn(_, 3)), this.setAttribute("uv", new qn(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new oa(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class nr extends cn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Te(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Te(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Zh, this.normalScale = new _e(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Pn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Qt extends nr {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new _e(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return Oe(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(t) {
      this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Te(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Te(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Te(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
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
class Ff extends cn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = rr, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Of extends cn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
function Nr(i3, e, t) {
  return !i3 || !t && i3.constructor === e ? i3 : typeof e.BYTES_PER_ELEMENT == "number" ? new e(i3) : Array.prototype.slice.call(i3);
}
function Bf(i3) {
  return ArrayBuffer.isView(i3) && !(i3 instanceof DataView);
}
function kf(i3) {
  function e(s, r) {
    return i3[s] - i3[r];
  }
  const t = i3.length, n = new Array(t);
  for (let s = 0; s !== t; ++s) n[s] = s;
  return n.sort(e), n;
}
function Dc(i3, e, t) {
  const n = i3.length, s = new i3.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let l = 0; l !== e; ++l) s[a++] = i3[o + l];
  }
  return s;
}
function fu(i3, e, t, n) {
  let s = 1, r = i3[0];
  for (; r !== void 0 && r[n] === void 0; ) r = i3[s++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0) if (Array.isArray(a)) do
    a = r[n], a !== void 0 && (e.push(r.time), t.push.apply(t, a)), r = i3[s++];
  while (r !== void 0);
  else if (a.toArray !== void 0) do
    a = r[n], a !== void 0 && (e.push(r.time), a.toArray(t, t.length)), r = i3[s++];
  while (r !== void 0);
  else do
    a = r[n], a !== void 0 && (e.push(r.time), t.push(a)), r = i3[s++];
  while (r !== void 0);
}
class ar {
  constructor(e, t, n, s) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = s !== void 0 ? s : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, s = t[n], r = t[n - 1];
    e: {
      t: {
        let a;
        n: {
          i: if (!(e < s)) {
            for (let o = n + 2; ; ) {
              if (s === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (r = s, s = t[++n], e < s) break t;
            }
            a = t.length;
            break n;
          }
          if (!(e >= r)) {
            const o = t[1];
            e < o && (n = 2, r = o);
            for (let l = n - 2; ; ) {
              if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (s = r, r = t[--n - 1], e >= r) break t;
            }
            a = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (s = t[n], r = t[n - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (s === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, s);
    }
    return this.interpolate_(n, r, e, s);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, r = e * s;
    for (let a = 0; a !== s; ++a) t[a] = n[r + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class zf extends ar {
  constructor(e, t, n, s) {
    super(e, t, n, s), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: ts, endingEnd: ts };
  }
  intervalChanged_(e, t, n) {
    const s = this.parameterPositions;
    let r = e - 2, a = e + 1, o = s[r], l = s[a];
    if (o === void 0) switch (this.getSettings_().endingStart) {
      case ns:
        r = e, o = 2 * t - n;
        break;
      case Jr:
        r = s.length - 2, o = t + s[r] - s[r + 1];
        break;
      default:
        r = e, o = n;
    }
    if (l === void 0) switch (this.getSettings_().endingEnd) {
      case ns:
        a = e, l = 2 * n - t;
        break;
      case Jr:
        a = 1, l = n + s[1] - s[0];
        break;
      default:
        a = e - 1, l = t;
    }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, s) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, p = this._weightNext, g = (n - t) / (s - t), _ = g * g, m = _ * g, f = -d * m + 2 * d * _ - d * g, T = (1 + d) * m + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1, E = (-1 - p) * m + (1.5 + p) * _ + 0.5 * g, y = p * m - p * _;
    for (let P = 0; P !== o; ++P) r[P] = f * a[h + P] + T * a[c + P] + E * a[l + P] + y * a[u + P];
    return r;
  }
}
class pu extends ar {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  interpolate_(e, t, n, s) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (s - t), u = 1 - h;
    for (let d = 0; d !== o; ++d) r[d] = a[c + d] * u + a[l + d] * h;
    return r;
  }
}
class Hf extends ar {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Dn {
  constructor(e, t, n, s) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Nr(t, this.TimeBufferType), this.values = Nr(n, this.ValueBufferType), this.setInterpolation(s || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = { name: e.name, times: Nr(e.times, Array), values: Nr(e.values, Array) };
      const s = e.getInterpolation();
      s !== e.DefaultInterpolation && (n.interpolation = s);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Hf(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new pu(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new zf(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Qs:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case er:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Ta:
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
        return Qs;
      case this.InterpolantFactoryMethodLinear:
        return er;
      case this.InterpolantFactoryMethodSmooth:
        return Ta;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, s = t.length; n !== s; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, s = t.length; n !== s; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, s = n.length;
    let r = 0, a = s - 1;
    for (; r !== s && n[r] < e; ) ++r;
    for (; a !== -1 && n[a] > t; ) --a;
    if (++a, r !== 0 || a !== s) {
      r >= a && (a = Math.max(a, 1), r = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(r, a), this.values = this.values.slice(r * o, a * o);
    }
    return this;
  }
  validate() {
    let e = true;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = false);
    const n = this.times, s = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = false);
    let a = null;
    for (let o = 0; o !== r; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = false;
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), e = false;
        break;
      }
      a = l;
    }
    if (s !== void 0 && Bf(s)) for (let o = 0, l = s.length; o !== l; ++o) {
      const c = s[o];
      if (isNaN(c)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = false;
        break;
      }
    }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), s = this.getInterpolation() === Ta, r = e.length - 1;
    let a = 1;
    for (let o = 1; o < r; ++o) {
      let l = false;
      const c = e[o], h = e[o + 1];
      if (c !== h && (o !== 1 || c !== e[0])) if (s) l = true;
      else {
        const u = o * n, d = u - n, p = u + n;
        for (let g = 0; g !== n; ++g) {
          const _ = t[u + g];
          if (_ !== t[d + g] || _ !== t[p + g]) {
            l = true;
            break;
          }
        }
      }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n, d = a * n;
          for (let p = 0; p !== n; ++p) t[d + p] = t[u + p];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let o = r * n, l = a * n, c = 0; c !== n; ++c) t[l + c] = t[o + c];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, s = new n(this.name, e, t);
    return s.createInterpolant = this.createInterpolant, s;
  }
}
Dn.prototype.TimeBufferType = Float32Array;
Dn.prototype.ValueBufferType = Float32Array;
Dn.prototype.DefaultInterpolation = er;
class Ts extends Dn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Ts.prototype.ValueTypeName = "bool";
Ts.prototype.ValueBufferType = Array;
Ts.prototype.DefaultInterpolation = Qs;
Ts.prototype.InterpolantFactoryMethodLinear = void 0;
Ts.prototype.InterpolantFactoryMethodSmooth = void 0;
class mu extends Dn {
}
mu.prototype.ValueTypeName = "color";
class vs extends Dn {
}
vs.prototype.ValueTypeName = "number";
class Vf extends ar {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  interpolate_(e, t, n, s) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (s - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4) Pt.slerpFlat(r, 0, a, c - o, a, c, l);
    return r;
  }
}
class xs extends Dn {
  InterpolantFactoryMethodLinear(e) {
    return new Vf(this.times, this.values, this.getValueSize(), e);
  }
}
xs.prototype.ValueTypeName = "quaternion";
xs.prototype.InterpolantFactoryMethodSmooth = void 0;
class As extends Dn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
As.prototype.ValueTypeName = "string";
As.prototype.ValueBufferType = Array;
As.prototype.DefaultInterpolation = Qs;
As.prototype.InterpolantFactoryMethodLinear = void 0;
As.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ss extends Dn {
}
Ss.prototype.ValueTypeName = "vector";
class Jo {
  constructor(e = "", t = -1, n = [], s = vl) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = s, this.uuid = vn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, s = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(Wf(n[a]).scale(s));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, s = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode };
    for (let r = 0, a = n.length; r !== a; ++r) t.push(Dn.toJSON(n[r]));
    return s;
  }
  static CreateFromMorphTargetSequence(e, t, n, s) {
    const r = t.length, a = [];
    for (let o = 0; o < r; o++) {
      let l = [], c = [];
      l.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
      const h = kf(l);
      l = Dc(l, 1, h), c = Dc(c, 1, h), !s && l[0] === 0 && (l.push(r), c.push(c[0])), a.push(new vs(".morphTargetInfluences[" + t[o].name + "]", l, c).scale(1 / n));
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const s = e;
      n = s.geometry && s.geometry.animations || s.animations;
    }
    for (let s = 0; s < n.length; s++) if (n[s].name === t) return n[s];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const s = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = c.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let d = s[u];
        d || (s[u] = d = []), d.push(c);
      }
    }
    const a = [];
    for (const o in s) a.push(this.CreateFromMorphTargetSequence(o, s[o], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, p, g, _) {
      if (p.length !== 0) {
        const m = [], f = [];
        fu(p, m, f, g), m.length !== 0 && _.push(new u(d, m, f));
      }
    }, s = [], r = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0)) if (d[0].morphTargets) {
        const p = {};
        let g;
        for (g = 0; g < d.length; g++) if (d[g].morphTargets) for (let _ = 0; _ < d[g].morphTargets.length; _++) p[d[g].morphTargets[_]] = -1;
        for (const _ in p) {
          const m = [], f = [];
          for (let T = 0; T !== d[g].morphTargets.length; ++T) {
            const E = d[g];
            m.push(E.time), f.push(E.morphTarget === _ ? 1 : 0);
          }
          s.push(new vs(".morphTargetInfluence[" + _ + "]", m, f));
        }
        l = p.length * a;
      } else {
        const p = ".bones[" + t[u].name + "]";
        n(Ss, p + ".position", d, "pos", s), n(xs, p + ".quaternion", d, "rot", s), n(Ss, p + ".scale", d, "scl", s);
      }
    }
    return s.length === 0 ? null : new this(r, l, s, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, s = e.length; n !== s; ++n) {
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
function Gf(i3) {
  switch (i3.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return vs;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Ss;
    case "color":
      return mu;
    case "quaternion":
      return xs;
    case "bool":
    case "boolean":
      return Ts;
    case "string":
      return As;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + i3);
}
function Wf(i3) {
  if (i3.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Gf(i3.type);
  if (i3.times === void 0) {
    const t = [], n = [];
    fu(i3.keys, t, n, "value"), i3.times = t, i3.values = n;
  }
  return e.parse !== void 0 ? e.parse(i3) : new e(i3.name, i3.times, i3.values, i3.interpolation);
}
const hi = { enabled: false, files: {}, add: function(i3, e) {
  this.enabled !== false && (this.files[i3] = e);
}, get: function(i3) {
  if (this.enabled !== false) return this.files[i3];
}, remove: function(i3) {
  delete this.files[i3];
}, clear: function() {
  this.files = {};
} };
class Xf {
  constructor(e, t, n) {
    const s = this;
    let r = false, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, r === false && s.onStart !== void 0 && s.onStart(h, a, o), r = true;
    }, this.itemEnd = function(h) {
      a++, s.onProgress !== void 0 && s.onProgress(h, a, o), a === o && (r = false, s.onLoad !== void 0 && s.onLoad());
    }, this.itemError = function(h) {
      s.onError !== void 0 && s.onError(h);
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
        const p = c[u], g = c[u + 1];
        if (p.global && (p.lastIndex = 0), p.test(h)) return g;
      }
      return null;
    };
  }
}
const Yf = new Xf();
class ws {
  constructor(e) {
    this.manager = e !== void 0 ? e : Yf, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(s, r) {
      n.load(e, s, t, r);
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
ws.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const kn = {};
class qf extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class gu extends ws {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = hi.get(e);
    if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => {
      t && t(r), this.manager.itemEnd(e);
    }, 0), r;
    if (kn[e] !== void 0) {
      kn[e].push({ onLoad: t, onProgress: n, onError: s });
      return;
    }
    kn[e] = [], kn[e].push({ onLoad: t, onProgress: n, onError: s });
    const a = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), o = this.mimeType, l = this.responseType;
    fetch(a).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
        const h = kn[e], u = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), p = d ? parseInt(d) : 0, g = p !== 0;
        let _ = 0;
        const m = new ReadableStream({ start(f) {
          T();
          function T() {
            u.read().then(({ done: E, value: y }) => {
              if (E) f.close();
              else {
                _ += y.byteLength;
                const P = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: p });
                for (let w = 0, R = h.length; w < R; w++) {
                  const N = h[w];
                  N.onProgress && N.onProgress(P);
                }
                f.enqueue(y), T();
              }
            }, (E) => {
              f.error(E);
            });
          }
        } });
        return new Response(m);
      } else throw new qf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return c.json();
        default:
          if (o === void 0) return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return c.arrayBuffer().then((g) => p.decode(g));
          }
      }
    }).then((c) => {
      hi.add(e, c);
      const h = kn[e];
      delete kn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onLoad && p.onLoad(c);
      }
    }).catch((c) => {
      const h = kn[e];
      if (h === void 0) throw this.manager.itemError(e), c;
      delete kn[e];
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
class jf extends ws {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = hi.get(e);
    if (a !== void 0) return r.manager.itemStart(e), setTimeout(function() {
      t && t(a), r.manager.itemEnd(e);
    }, 0), a;
    const o = tr("img");
    function l() {
      h(), hi.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(u) {
      h(), s && s(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, false), o.removeEventListener("error", c, false);
    }
    return o.addEventListener("load", l, false), o.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o;
  }
}
class Kf extends ws {
  constructor(e) {
    super(e);
  }
  load(e, t, n, s) {
    const r = new Mt(), a = new jf(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      r.image = o, r.needsUpdate = true, t !== void 0 && t(r);
    }, n, s), r;
  }
}
class la extends pt {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Te(e), this.intensity = t;
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
const Ka = new De(), Lc = new C(), Uc = new C();
class Al {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new _e(512, 512), this.map = null, this.mapPass = null, this.matrix = new De(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new El(), this._frameExtents = new _e(1, 1), this._viewportCount = 1, this._viewports = [new $e(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Lc.setFromMatrixPosition(e.matrixWorld), t.position.copy(Lc), Uc.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Uc), t.updateMatrixWorld(), Ka.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ka), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(Ka);
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
class $f extends Al {
  constructor() {
    super(new Ft(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = gs * 2 * e.angle * this.focus, s = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || s !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = s, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class wl extends la {
  constructor(e, t, n = 0, s = Math.PI / 3, r = 0, a = 2) {
    super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(pt.DEFAULT_UP), this.updateMatrix(), this.target = new pt(), this.distance = n, this.angle = s, this.penumbra = r, this.decay = a, this.map = null, this.shadow = new $f();
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
const Nc = new De(), Bs = new C(), $a = new C();
class Zf extends Al {
  constructor() {
    super(new Ft(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new _e(4, 2), this._viewportCount = 6, this._viewports = [new $e(2, 1, 1, 1), new $e(0, 1, 1, 1), new $e(3, 1, 1, 1), new $e(1, 1, 1, 1), new $e(3, 0, 1, 1), new $e(1, 0, 1, 1)], this._cubeDirections = [new C(1, 0, 0), new C(-1, 0, 0), new C(0, 0, 1), new C(0, 0, -1), new C(0, 1, 0), new C(0, -1, 0)], this._cubeUps = [new C(0, 1, 0), new C(0, 1, 0), new C(0, 1, 0), new C(0, 1, 0), new C(0, 0, 1), new C(0, 0, -1)];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, s = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), Bs.setFromMatrixPosition(e.matrixWorld), n.position.copy(Bs), $a.copy(n.position), $a.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt($a), n.updateMatrixWorld(), s.makeTranslation(-Bs.x, -Bs.y, -Bs.z), Nc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Nc);
  }
}
class ca extends la {
  constructor(e, t, n = 0, s = 2) {
    super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = s, this.shadow = new Zf();
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
class ha extends ou {
  constructor(e = -1, t = 1, n = 1, s = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = s, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, s, r, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = n - e, a = n + e, o = s + t, l = s - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class Jf extends Al {
  constructor() {
    super(new ha(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class Qf extends la {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(pt.DEFAULT_UP), this.updateMatrix(), this.target = new pt(), this.shadow = new Jf();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class ep extends la {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class qs {
  static decodeText(e) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u") return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, s = e.length; n < s; n++) t += String.fromCharCode(e[n]);
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
class tp extends ws {
  constructor(e) {
    super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, s) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = hi.get(e);
    if (a !== void 0) {
      if (r.manager.itemStart(e), a.then) {
        a.then((c) => {
          t && t(c), r.manager.itemEnd(e);
        }).catch((c) => {
          s && s(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const l = fetch(e, o).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return hi.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      s && s(c), hi.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    hi.add(e, l), r.manager.itemStart(e);
  }
}
class np extends Ft {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.cameras = e;
  }
}
class ip {
  constructor(e = true) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
  }
  start() {
    this.startTime = Fc(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
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
      const t = Fc();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Fc() {
  return performance.now();
}
class sp {
  constructor(e, t, n) {
    this.binding = e, this.valueSize = n;
    let s, r, a;
    switch (t) {
      case "quaternion":
        s = this._slerp, r = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        s = this._select, r = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        s = this._lerp, r = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = s, this._mixBufferRegionAdditive = r, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  accumulate(e, t) {
    const n = this.buffer, s = this.valueSize, r = e * s + s;
    let a = this.cumulativeWeight;
    if (a === 0) {
      for (let o = 0; o !== s; ++o) n[r + o] = n[o];
      a = t;
    } else {
      a += t;
      const o = t / a;
      this._mixBufferRegion(n, r, 0, o, s);
    }
    this.cumulativeWeight = a;
  }
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, s = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, s, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  apply(e) {
    const t = this.valueSize, n = this.buffer, s = e * t + t, r = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
      const l = t * this._origIndex;
      this._mixBufferRegion(n, s, l, 1 - r, t);
    }
    a > 0 && this._mixBufferRegionAdditive(n, s, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l) if (n[l] !== n[l + t]) {
      o.setValue(n, s);
      break;
    }
  }
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, s = n * this._origIndex;
    e.getValue(t, s);
    for (let r = n, a = s; r !== a; ++r) t[r] = t[s + r % n];
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
  _select(e, t, n, s, r) {
    if (s >= 0.5) for (let a = 0; a !== r; ++a) e[t + a] = e[n + a];
  }
  _slerp(e, t, n, s) {
    Pt.slerpFlat(e, t, e, t, e, n, s);
  }
  _slerpAdditive(e, t, n, s, r) {
    const a = this._workIndex * r;
    Pt.multiplyQuaternionsFlat(e, a, e, t, e, n), Pt.slerpFlat(e, t, e, t, e, a, s);
  }
  _lerp(e, t, n, s, r) {
    const a = 1 - s;
    for (let o = 0; o !== r; ++o) {
      const l = t + o;
      e[l] = e[l] * a + e[n + o] * s;
    }
  }
  _lerpAdditive(e, t, n, s, r) {
    for (let a = 0; a !== r; ++a) {
      const o = t + a;
      e[o] = e[o] + e[n + a] * s;
    }
  }
}
const Rl = "\\[\\]\\.:\\/", rp = new RegExp("[" + Rl + "]", "g"), Cl = "[^" + Rl + "]", ap = "[^" + Rl.replace("\\.", "") + "]", op = /((?:WC+[\/:])*)/.source.replace("WC", Cl), lp = /(WCOD+)?/.source.replace("WCOD", ap), cp = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Cl), hp = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Cl), up = new RegExp("^" + op + lp + cp + hp + "$"), dp = ["material", "materials", "bones", "map"];
class fp {
  constructor(e, t, n) {
    const s = n || nt.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, s);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, s = this._bindings[n];
    s !== void 0 && s.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let s = this._targetGroup.nCachedObjects_, r = n.length; s !== r; ++s) n[s].setValue(e, t);
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
class nt {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || nt.parseTrackName(t), this.node = nt.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new nt.Composite(e, t, n) : new nt(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(rp, "");
  }
  static parseTrackName(e) {
    const t = up.exec(e);
    if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, s = n.nodeName && n.nodeName.lastIndexOf(".");
    if (s !== void 0 && s !== -1) {
      const r = n.nodeName.substring(s + 1);
      dp.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, s), n.objectName = r);
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
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          if (o.name === t || o.uuid === t) return o;
          const l = n(o.children);
          if (l) return l;
        }
        return null;
      }, s = n(e.children);
      if (s) return s;
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
    for (let s = 0, r = n.length; s !== r; ++s) e[t++] = n[s];
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
    for (let s = 0, r = n.length; s !== r; ++s) n[s] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let s = 0, r = n.length; s !== r; ++s) n[s] = e[t++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let s = 0, r = n.length; s !== r; ++s) n[s] = e[t++];
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
    const t = this.parsedPath, n = t.objectName, s = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = nt.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
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
    const a = e[s];
    if (a === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + s + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.isMaterial === true ? o = this.Versioning.NeedsUpdate : e.isObject3D === true && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (s === "morphTargetInfluences") {
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
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = s;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
nt.Composite = fp;
nt.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
nt.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
nt.prototype.GetterByBindingType = [nt.prototype._getValue_direct, nt.prototype._getValue_array, nt.prototype._getValue_arrayElement, nt.prototype._getValue_toArray];
nt.prototype.SetterByBindingTypeAndVersioning = [[nt.prototype._setValue_direct, nt.prototype._setValue_direct_setNeedsUpdate, nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [nt.prototype._setValue_array, nt.prototype._setValue_array_setNeedsUpdate, nt.prototype._setValue_array_setMatrixWorldNeedsUpdate], [nt.prototype._setValue_arrayElement, nt.prototype._setValue_arrayElement_setNeedsUpdate, nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [nt.prototype._setValue_fromArray, nt.prototype._setValue_fromArray_setNeedsUpdate, nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
class pp {
  constructor(e, t, n = null, s = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = s;
    const r = t.tracks, a = r.length, o = new Array(a), l = { endingStart: ts, endingEnd: ts };
    for (let c = 0; c !== a; ++c) {
      const h = r[c].createInterpolant(null);
      o[c] = h, h.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Ed, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = false, this.enabled = true, this.clampWhenFinished = false, this.zeroSlopeAtStart = true, this.zeroSlopeAtEnd = true;
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
      const s = this._clip.duration, r = e._clip.duration, a = r / s, o = s / r;
      e.warp(1, a, t), this.warp(o, 1, t);
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
    const s = this._mixer, r = s.time, a = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null && (o = s._lendControlInterpolant(), this._timeScaleInterpolant = o);
    const l = o.parameterPositions, c = o.sampleValues;
    return l[0] = r, l[1] = r + n, c[0] = e / a, c[1] = t / a, this;
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
  _update(e, t, n, s) {
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
    const a = this._updateTime(t), o = this._updateWeight(e);
    if (o > 0) {
      const l = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case Td:
          for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(a), c[h].accumulateAdditive(o);
          break;
        case vl:
        default:
          for (let h = 0, u = l.length; h !== u; ++h) l[h].evaluate(a), c[h].accumulate(s, o);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const s = n.evaluate(e)[0];
        t *= s, e > n.parameterPositions[1] && (this.stopFading(), s === 0 && (this.enabled = false));
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
        const s = n.evaluate(e)[0];
        t *= s, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = true : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let s = this.time + e, r = this._loopCount;
    const a = n === bd;
    if (e === 0) return r === -1 ? s : a && (r & 1) === 1 ? t - s : s;
    if (n === Kh) {
      r === -1 && (this._loopCount = 0, this._setEndings(true, true, false));
      e: {
        if (s >= t) s = t;
        else if (s < 0) s = 0;
        else {
          this.time = s;
          break e;
        }
        this.clampWhenFinished ? this.paused = true : this.enabled = false, this.time = s, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e < 0 ? -1 : 1 });
      }
    } else {
      if (r === -1 && (e >= 0 ? (r = 0, this._setEndings(true, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, true, a)), s >= t || s < 0) {
        const o = Math.floor(s / t);
        s -= t * o, r += Math.abs(o);
        const l = this.repetitions - r;
        if (l <= 0) this.clampWhenFinished ? this.paused = true : this.enabled = false, s = e > 0 ? t : 0, this.time = s, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e > 0 ? 1 : -1 });
        else {
          if (l === 1) {
            const c = e < 0;
            this._setEndings(c, !c, a);
          } else this._setEndings(false, false, a);
          this._loopCount = r, this.time = s, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: o });
        }
      } else this.time = s;
      if (a && (r & 1) === 1) return t - s;
    }
    return s;
  }
  _setEndings(e, t, n) {
    const s = this._interpolantSettings;
    n ? (s.endingStart = ns, s.endingEnd = ns) : (e ? s.endingStart = this.zeroSlopeAtStart ? ns : ts : s.endingStart = Jr, t ? s.endingEnd = this.zeroSlopeAtEnd ? ns : ts : s.endingEnd = Jr);
  }
  _scheduleFading(e, t, n) {
    const s = this._mixer, r = s.time;
    let a = this._weightInterpolant;
    a === null && (a = s._lendControlInterpolant(), this._weightInterpolant = a);
    const o = a.parameterPositions, l = a.sampleValues;
    return o[0] = r, l[0] = t, o[1] = r + e, l[1] = n, this;
  }
}
const mp = new Float32Array(1);
class gp extends xn {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, s = e._clip.tracks, r = s.length, a = e._propertyBindings, o = e._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
    let h = c[l];
    h === void 0 && (h = {}, c[l] = h);
    for (let u = 0; u !== r; ++u) {
      const d = s[u], p = d.name;
      let g = h[p];
      if (g !== void 0) ++g.referenceCount, a[u] = g;
      else {
        if (g = a[u], g !== void 0) {
          g._cacheIndex === null && (++g.referenceCount, this._addInactiveBinding(g, l, p));
          continue;
        }
        const _ = t && t._propertyBindings[u].binding.parsedPath;
        g = new sp(nt.create(n, p, _), d.ValueTypeName, d.getValueSize()), ++g.referenceCount, this._addInactiveBinding(g, l, p), a[u] = g;
      }
      o[u].resultBuffer = g.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, s = e._clip.uuid, r = this._actionsByClip[s];
        this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, s, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, s = t.length; n !== s; ++n) {
        const r = t[n];
        r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, s = t.length; n !== s; ++n) {
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
    const s = this._actions, r = this._actionsByClip;
    let a = r[t];
    if (a === void 0) a = { knownActions: [e], actionByRoot: {} }, e._byClipCacheIndex = 0, r[t] = a;
    else {
      const o = a.knownActions;
      e._byClipCacheIndex = o.length, o.push(e);
    }
    e._cacheIndex = s.length, s.push(e), a.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], s = e._cacheIndex;
    n._cacheIndex = s, t[s] = n, t.pop(), e._cacheIndex = null;
    const r = e._clip.uuid, a = this._actionsByClip, o = a[r], l = o.knownActions, c = l[l.length - 1], h = e._byClipCacheIndex;
    c._byClipCacheIndex = h, l[h] = c, l.pop(), e._byClipCacheIndex = null;
    const u = o.actionByRoot, d = (e._localRoot || this._root).uuid;
    delete u[d], l.length === 0 && delete a[r], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, s = t.length; n !== s; ++n) {
      const r = t[n];
      --r.referenceCount === 0 && this._removeInactiveBinding(r);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, s = this._nActiveActions++, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = n, t[n] = r;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, s = --this._nActiveActions, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = n, t[n] = r;
  }
  _addInactiveBinding(e, t, n) {
    const s = this._bindingsByRootAndName, r = this._bindings;
    let a = s[t];
    a === void 0 && (a = {}, s[t] = a), a[n] = e, e._cacheIndex = r.length, r.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, s = n.rootNode.uuid, r = n.path, a = this._bindingsByRootAndName, o = a[s], l = t[t.length - 1], c = e._cacheIndex;
    l._cacheIndex = c, t[c] = l, t.pop(), delete o[r], Object.keys(o).length === 0 && delete a[s];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, s = this._nActiveBindings++, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = n, t[n] = r;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, s = --this._nActiveBindings, r = t[s];
    e._cacheIndex = s, t[s] = e, r._cacheIndex = n, t[n] = r;
  }
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new pu(new Float32Array(2), new Float32Array(2), 1, mp), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, s = --this._nActiveControlInterpolants, r = t[s];
    e.__cacheIndex = s, t[s] = e, r.__cacheIndex = n, t[n] = r;
  }
  clipAction(e, t, n) {
    const s = t || this._root, r = s.uuid;
    let a = typeof e == "string" ? Jo.findByName(s, e) : e;
    const o = a !== null ? a.uuid : e, l = this._actionsByClip[o];
    let c = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = vl), l !== void 0) {
      const u = l.actionByRoot[r];
      if (u !== void 0 && u.blendMode === n) return u;
      c = l.knownActions[0], a === null && (a = c._clip);
    }
    if (a === null) return null;
    const h = new pp(this, a, t, n);
    return this._bindAction(h, c), this._addInactiveAction(h, o, r), h;
  }
  existingAction(e, t) {
    const n = t || this._root, s = n.uuid, r = typeof e == "string" ? Jo.findByName(n, e) : e, a = r ? r.uuid : e, o = this._actionsByClip[a];
    return o !== void 0 && o.actionByRoot[s] || null;
  }
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n) e[n].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, s = this.time += e, r = Math.sign(e), a = this._accuIndex ^= 1;
    for (let c = 0; c !== n; ++c) t[c]._update(s, e, r, a);
    const o = this._bindings, l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c) o[c].apply(a);
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
    const t = this._actions, n = e.uuid, s = this._actionsByClip, r = s[n];
    if (r !== void 0) {
      const a = r.knownActions;
      for (let o = 0, l = a.length; o !== l; ++o) {
        const c = a[o];
        this._deactivateAction(c);
        const h = c._cacheIndex, u = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = h, t[h] = u, t.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete s[n];
    }
  }
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const a in n) {
      const o = n[a].actionByRoot, l = o[t];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const s = this._bindingsByRootAndName, r = s[t];
    if (r !== void 0) for (const a in r) {
      const o = r[a];
      o.restoreOriginalState(), this._removeInactiveBinding(o);
    }
  }
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
class Qe {
  constructor(e) {
    this.value = e;
  }
  clone() {
    return new Qe(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
const Oc = new De();
class _p {
  constructor(e, t, n = 0, s = 1 / 0) {
    this.ray = new Es(e, t), this.near = n, this.far = s, this.camera = null, this.layers = new Sl(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return Oc.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Oc), this;
  }
  intersectObject(e, t = true, n = []) {
    return Qo(e, this, n, t), n.sort(Bc), n;
  }
  intersectObjects(e, t = true, n = []) {
    for (let s = 0, r = e.length; s < r; s++) Qo(e[s], this, n, t);
    return n.sort(Bc), n;
  }
}
function Bc(i3, e) {
  return i3.distance - e.distance;
}
function Qo(i3, e, t, n) {
  let s = true;
  if (i3.layers.test(e.layers) && i3.raycast(e, t) === false && (s = false), s === true && n === true) {
    const r = i3.children;
    for (let a = 0, o = r.length; a < o; a++) Qo(r[a], e, t, true);
  }
}
class kc {
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
class vp extends xn {
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
function zc(i3, e, t, n) {
  const s = xp(n);
  switch (t) {
    case Gh:
      return i3 * e;
    case Xh:
      return i3 * e;
    case Yh:
      return i3 * e * 2;
    case pl:
      return i3 * e / s.components * s.byteLength;
    case ml:
      return i3 * e / s.components * s.byteLength;
    case qh:
      return i3 * e * 2 / s.components * s.byteLength;
    case gl:
      return i3 * e * 2 / s.components * s.byteLength;
    case Wh:
      return i3 * e * 3 / s.components * s.byteLength;
    case ln:
      return i3 * e * 4 / s.components * s.byteLength;
    case _l:
      return i3 * e * 4 / s.components * s.byteLength;
    case Wr:
    case Xr:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Yr:
    case qr:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Eo:
    case To:
      return Math.max(i3, 16) * Math.max(e, 8) / 4;
    case Mo:
    case bo:
      return Math.max(i3, 8) * Math.max(e, 8) / 2;
    case Ao:
    case wo:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Ro:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Co:
      return Math.floor((i3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Po:
      return Math.floor((i3 + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Io:
      return Math.floor((i3 + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Do:
      return Math.floor((i3 + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Lo:
      return Math.floor((i3 + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Uo:
      return Math.floor((i3 + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case No:
      return Math.floor((i3 + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Fo:
      return Math.floor((i3 + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Oo:
      return Math.floor((i3 + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Bo:
      return Math.floor((i3 + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case ko:
      return Math.floor((i3 + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case zo:
      return Math.floor((i3 + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Ho:
      return Math.floor((i3 + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Vo:
      return Math.floor((i3 + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case jr:
    case Go:
    case Wo:
      return Math.ceil(i3 / 4) * Math.ceil(e / 4) * 16;
    case jh:
    case Xo:
      return Math.ceil(i3 / 4) * Math.ceil(e / 4) * 8;
    case Yo:
    case qo:
      return Math.ceil(i3 / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function xp(i3) {
  switch (i3) {
    case Ot:
    case zh:
      return { byteLength: 1, components: 1 };
    case Js:
    case Hh:
    case Ms:
      return { byteLength: 2, components: 1 };
    case dl:
    case fl:
      return { byteLength: 2, components: 4 };
    case Ci:
    case ul:
    case on:
      return { byteLength: 4, components: 1 };
    case Vh:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i3}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: sr } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = sr);
/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function _u() {
  let i3 = null, e = false, t = null, n = null;
  function s(r, a) {
    t(r, a), n = i3.requestAnimationFrame(s);
  }
  return { start: function() {
    e !== true && t !== null && (n = i3.requestAnimationFrame(s), e = true);
  }, stop: function() {
    i3.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(r) {
    t = r;
  }, setContext: function(r) {
    i3 = r;
  } };
}
function Sp(i3) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, h = o.usage, u = c.byteLength, d = i3.createBuffer();
    i3.bindBuffer(l, d), i3.bufferData(l, c, h), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array) p = i3.FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? p = i3.HALF_FLOAT : p = i3.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) p = i3.SHORT;
    else if (c instanceof Uint32Array) p = i3.UNSIGNED_INT;
    else if (c instanceof Int32Array) p = i3.INT;
    else if (c instanceof Int8Array) p = i3.BYTE;
    else if (c instanceof Uint8Array) p = i3.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) p = i3.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: d, type: p, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: u };
  }
  function n(o, l, c) {
    const h = l.array, u = l.updateRanges;
    if (i3.bindBuffer(c, o), u.length === 0) i3.bufferSubData(c, 0, h);
    else {
      u.sort((p, g) => p.start - g.start);
      let d = 0;
      for (let p = 1; p < u.length; p++) {
        const g = u[d], _ = u[p];
        _.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, _.start + _.count - g.start) : (++d, u[d] = _);
      }
      u.length = d + 1;
      for (let p = 0, g = u.length; p < g; p++) {
        const _ = u[p];
        i3.bufferSubData(c, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function s(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i3.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const c = e.get(o);
    if (c === void 0) e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return { get: s, remove: r, update: a };
}
var yp = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Mp = `#ifdef USE_ALPHAHASH
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
#endif`, Ep = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, bp = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Tp = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Ap = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, wp = `#ifdef USE_AOMAP
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
#endif`, Rp = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Cp = `#ifdef USE_BATCHING
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
#endif`, Pp = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Ip = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Dp = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Lp = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Up = `#ifdef USE_IRIDESCENCE
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
#endif`, Np = `#ifdef USE_BUMPMAP
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
#endif`, Fp = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Op = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Bp = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, kp = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, zp = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Hp = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Vp = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Gp = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Wp = `#define PI 3.141592653589793
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
} // validated`, Xp = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Yp = `vec3 transformedNormal = objectNormal;
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
#endif`, qp = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, jp = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Kp = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, $p = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Zp = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Jp = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Qp = `#ifdef USE_ENVMAP
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
#endif`, em = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, tm = `#ifdef USE_ENVMAP
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
#endif`, nm = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, im = `#ifdef USE_ENVMAP
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
#endif`, sm = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, rm = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, am = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, om = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, lm = `#ifdef USE_GRADIENTMAP
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
}`, cm = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, hm = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, um = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, dm = `uniform bool receiveShadow;
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
#endif`, fm = `#ifdef USE_ENVMAP
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
#endif`, pm = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, mm = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, gm = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, _m = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, vm = `PhysicalMaterial material;
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
#endif`, xm = `struct PhysicalMaterial {
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
}`, Sm = `
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
#endif`, ym = `#if defined( RE_IndirectDiffuse )
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
#endif`, Mm = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Em = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, bm = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Tm = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Am = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, wm = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Rm = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Cm = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Pm = `#if defined( USE_POINTS_UV )
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
#endif`, Im = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Dm = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Lm = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Um = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Nm = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Fm = `#ifdef USE_MORPHTARGETS
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
#endif`, Om = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Bm = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, km = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, zm = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Hm = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Vm = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Gm = `#ifdef USE_NORMALMAP
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
#endif`, Wm = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Xm = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Ym = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, qm = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, jm = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Km = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, $m = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Zm = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Jm = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Qm = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, eg = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, tg = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, ng = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, ig = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, sg = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, rg = `float getShadowMask() {
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
}`, ag = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, og = `#ifdef USE_SKINNING
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
#endif`, lg = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, cg = `#ifdef USE_SKINNING
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
#endif`, hg = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, ug = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, dg = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, fg = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, pg = `#ifdef USE_TRANSMISSION
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
#endif`, mg = `#ifdef USE_TRANSMISSION
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
#endif`, gg = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, _g = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, vg = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, xg = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Sg = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, yg = `uniform sampler2D t2D;
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
}`, Mg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Eg = `#ifdef ENVMAP_TYPE_CUBE
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
}`, bg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Tg = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ag = `#include <common>
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
}`, wg = `#if DEPTH_PACKING == 3200
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
}`, Rg = `#define DISTANCE
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
}`, Cg = `#define DISTANCE
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
}`, Pg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Ig = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Dg = `uniform float scale;
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
}`, Lg = `uniform vec3 diffuse;
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
}`, Ug = `#include <common>
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
}`, Ng = `uniform vec3 diffuse;
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
}`, Fg = `#define LAMBERT
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
}`, Og = `#define LAMBERT
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
}`, Bg = `#define MATCAP
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
}`, kg = `#define MATCAP
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
}`, zg = `#define NORMAL
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
}`, Hg = `#define NORMAL
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
}`, Vg = `#define PHONG
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
}`, Gg = `#define PHONG
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
}`, Wg = `#define STANDARD
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
}`, Xg = `#define STANDARD
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
}`, Yg = `#define TOON
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
}`, qg = `#define TOON
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
}`, jg = `uniform float size;
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
}`, Kg = `uniform vec3 diffuse;
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
}`, $g = `#include <common>
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
}`, Zg = `uniform vec3 color;
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
}`, Jg = `uniform float rotation;
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
}`, Qg = `uniform vec3 diffuse;
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
}`, Fe = { alphahash_fragment: yp, alphahash_pars_fragment: Mp, alphamap_fragment: Ep, alphamap_pars_fragment: bp, alphatest_fragment: Tp, alphatest_pars_fragment: Ap, aomap_fragment: wp, aomap_pars_fragment: Rp, batching_pars_vertex: Cp, batching_vertex: Pp, begin_vertex: Ip, beginnormal_vertex: Dp, bsdfs: Lp, iridescence_fragment: Up, bumpmap_pars_fragment: Np, clipping_planes_fragment: Fp, clipping_planes_pars_fragment: Op, clipping_planes_pars_vertex: Bp, clipping_planes_vertex: kp, color_fragment: zp, color_pars_fragment: Hp, color_pars_vertex: Vp, color_vertex: Gp, common: Wp, cube_uv_reflection_fragment: Xp, defaultnormal_vertex: Yp, displacementmap_pars_vertex: qp, displacementmap_vertex: jp, emissivemap_fragment: Kp, emissivemap_pars_fragment: $p, colorspace_fragment: Zp, colorspace_pars_fragment: Jp, envmap_fragment: Qp, envmap_common_pars_fragment: em, envmap_pars_fragment: tm, envmap_pars_vertex: nm, envmap_physical_pars_fragment: fm, envmap_vertex: im, fog_vertex: sm, fog_pars_vertex: rm, fog_fragment: am, fog_pars_fragment: om, gradientmap_pars_fragment: lm, lightmap_pars_fragment: cm, lights_lambert_fragment: hm, lights_lambert_pars_fragment: um, lights_pars_begin: dm, lights_toon_fragment: pm, lights_toon_pars_fragment: mm, lights_phong_fragment: gm, lights_phong_pars_fragment: _m, lights_physical_fragment: vm, lights_physical_pars_fragment: xm, lights_fragment_begin: Sm, lights_fragment_maps: ym, lights_fragment_end: Mm, logdepthbuf_fragment: Em, logdepthbuf_pars_fragment: bm, logdepthbuf_pars_vertex: Tm, logdepthbuf_vertex: Am, map_fragment: wm, map_pars_fragment: Rm, map_particle_fragment: Cm, map_particle_pars_fragment: Pm, metalnessmap_fragment: Im, metalnessmap_pars_fragment: Dm, morphinstance_vertex: Lm, morphcolor_vertex: Um, morphnormal_vertex: Nm, morphtarget_pars_vertex: Fm, morphtarget_vertex: Om, normal_fragment_begin: Bm, normal_fragment_maps: km, normal_pars_fragment: zm, normal_pars_vertex: Hm, normal_vertex: Vm, normalmap_pars_fragment: Gm, clearcoat_normal_fragment_begin: Wm, clearcoat_normal_fragment_maps: Xm, clearcoat_pars_fragment: Ym, iridescence_pars_fragment: qm, opaque_fragment: jm, packing: Km, premultiplied_alpha_fragment: $m, project_vertex: Zm, dithering_fragment: Jm, dithering_pars_fragment: Qm, roughnessmap_fragment: eg, roughnessmap_pars_fragment: tg, shadowmap_pars_fragment: ng, shadowmap_pars_vertex: ig, shadowmap_vertex: sg, shadowmask_pars_fragment: rg, skinbase_vertex: ag, skinning_pars_vertex: og, skinning_vertex: lg, skinnormal_vertex: cg, specularmap_fragment: hg, specularmap_pars_fragment: ug, tonemapping_fragment: dg, tonemapping_pars_fragment: fg, transmission_fragment: pg, transmission_pars_fragment: mg, uv_pars_fragment: gg, uv_pars_vertex: _g, uv_vertex: vg, worldpos_vertex: xg, background_vert: Sg, background_frag: yg, backgroundCube_vert: Mg, backgroundCube_frag: Eg, cube_vert: bg, cube_frag: Tg, depth_vert: Ag, depth_frag: wg, distanceRGBA_vert: Rg, distanceRGBA_frag: Cg, equirect_vert: Pg, equirect_frag: Ig, linedashed_vert: Dg, linedashed_frag: Lg, meshbasic_vert: Ug, meshbasic_frag: Ng, meshlambert_vert: Fg, meshlambert_frag: Og, meshmatcap_vert: Bg, meshmatcap_frag: kg, meshnormal_vert: zg, meshnormal_frag: Hg, meshphong_vert: Vg, meshphong_frag: Gg, meshphysical_vert: Wg, meshphysical_frag: Xg, meshtoon_vert: Yg, meshtoon_frag: qg, points_vert: jg, points_frag: Kg, shadow_vert: $g, shadow_frag: Zg, sprite_vert: Jg, sprite_frag: Qg }, ie = { common: { diffuse: { value: new Te(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ue() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ue() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ue() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ue() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ue() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ue() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ue() }, normalScale: { value: new _e(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ue() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ue() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ue() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ue() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Te(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Te(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue() }, alphaTest: { value: 0 }, uvTransform: { value: new Ue() } }, sprite: { diffuse: { value: new Te(16777215) }, opacity: { value: 1 }, center: { value: new _e(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ue() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue() }, alphaTest: { value: 0 } } }, An = { basic: { uniforms: Ht([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.fog]), vertexShader: Fe.meshbasic_vert, fragmentShader: Fe.meshbasic_frag }, lambert: { uniforms: Ht([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, { emissive: { value: new Te(0) } }]), vertexShader: Fe.meshlambert_vert, fragmentShader: Fe.meshlambert_frag }, phong: { uniforms: Ht([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, { emissive: { value: new Te(0) }, specular: { value: new Te(1118481) }, shininess: { value: 30 } }]), vertexShader: Fe.meshphong_vert, fragmentShader: Fe.meshphong_frag }, standard: { uniforms: Ht([ie.common, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.roughnessmap, ie.metalnessmap, ie.fog, ie.lights, { emissive: { value: new Te(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Fe.meshphysical_vert, fragmentShader: Fe.meshphysical_frag }, toon: { uniforms: Ht([ie.common, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.gradientmap, ie.fog, ie.lights, { emissive: { value: new Te(0) } }]), vertexShader: Fe.meshtoon_vert, fragmentShader: Fe.meshtoon_frag }, matcap: { uniforms: Ht([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, { matcap: { value: null } }]), vertexShader: Fe.meshmatcap_vert, fragmentShader: Fe.meshmatcap_frag }, points: { uniforms: Ht([ie.points, ie.fog]), vertexShader: Fe.points_vert, fragmentShader: Fe.points_frag }, dashed: { uniforms: Ht([ie.common, ie.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Fe.linedashed_vert, fragmentShader: Fe.linedashed_frag }, depth: { uniforms: Ht([ie.common, ie.displacementmap]), vertexShader: Fe.depth_vert, fragmentShader: Fe.depth_frag }, normal: { uniforms: Ht([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, { opacity: { value: 1 } }]), vertexShader: Fe.meshnormal_vert, fragmentShader: Fe.meshnormal_frag }, sprite: { uniforms: Ht([ie.sprite, ie.fog]), vertexShader: Fe.sprite_vert, fragmentShader: Fe.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ue() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Fe.background_vert, fragmentShader: Fe.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ue() } }, vertexShader: Fe.backgroundCube_vert, fragmentShader: Fe.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Fe.cube_vert, fragmentShader: Fe.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Fe.equirect_vert, fragmentShader: Fe.equirect_frag }, distanceRGBA: { uniforms: Ht([ie.common, ie.displacementmap, { referencePosition: { value: new C() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Fe.distanceRGBA_vert, fragmentShader: Fe.distanceRGBA_frag }, shadow: { uniforms: Ht([ie.lights, ie.fog, { color: { value: new Te(0) }, opacity: { value: 1 } }]), vertexShader: Fe.shadow_vert, fragmentShader: Fe.shadow_frag } };
An.physical = { uniforms: Ht([An.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ue() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ue() }, clearcoatNormalScale: { value: new _e(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ue() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ue() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ue() }, sheen: { value: 0 }, sheenColor: { value: new Te(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ue() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ue() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ue() }, transmissionSamplerSize: { value: new _e() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ue() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Te(0) }, specularColor: { value: new Te(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ue() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ue() }, anisotropyVector: { value: new _e() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ue() } }]), vertexShader: Fe.meshphysical_vert, fragmentShader: Fe.meshphysical_frag };
const Fr = { r: 0, b: 0, g: 0 }, Mi = new Pn(), e_ = new De();
function t_(i3, e, t, n, s, r, a) {
  const o = new Te(0);
  let l = r === true ? 0 : 1, c, h, u = null, d = 0, p = null;
  function g(E) {
    let y = E.isScene === true ? E.background : null;
    return y && y.isTexture && (y = (E.backgroundBlurriness > 0 ? t : e).get(y)), y;
  }
  function _(E) {
    let y = false;
    const P = g(E);
    P === null ? f(o, l) : P && P.isColor && (f(P, 1), y = true);
    const w = i3.xr.getEnvironmentBlendMode();
    w === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : w === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i3.autoClear || y) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), i3.clear(i3.autoClearColor, i3.autoClearDepth, i3.autoClearStencil));
  }
  function m(E, y) {
    const P = g(y);
    P && (P.isCubeTexture || P.mapping === aa) ? (h === void 0 && (h = new rt(new bs(1, 1, 1), new Gt({ name: "BackgroundCubeMaterial", uniforms: _s(An.backgroundCube.uniforms), vertexShader: An.backgroundCube.vertexShader, fragmentShader: An.backgroundCube.fragmentShader, side: St, depthTest: false, depthWrite: false, fog: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(w, R, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), s.update(h)), Mi.copy(y.backgroundRotation), Mi.x *= -1, Mi.y *= -1, Mi.z *= -1, P.isCubeTexture && P.isRenderTargetTexture === false && (Mi.y *= -1, Mi.z *= -1), h.material.uniforms.envMap.value = P, h.material.uniforms.flipEnvMap.value = P.isCubeTexture && P.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(e_.makeRotationFromEuler(Mi)), h.material.toneMapped = Xe.getTransfer(P.colorSpace) !== at, (u !== P || d !== P.version || p !== i3.toneMapping) && (h.material.needsUpdate = true, u = P, d = P.version, p = i3.toneMapping), h.layers.enableAll(), E.unshift(h, h.geometry, h.material, 0, 0, null)) : P && P.isTexture && (c === void 0 && (c = new rt(new oa(2, 2), new Gt({ name: "BackgroundMaterial", uniforms: _s(An.background.uniforms), vertexShader: An.background.vertexShader, fragmentShader: An.background.fragmentShader, side: Cn, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), s.update(c)), c.material.uniforms.t2D.value = P, c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, c.material.toneMapped = Xe.getTransfer(P.colorSpace) !== at, P.matrixAutoUpdate === true && P.updateMatrix(), c.material.uniforms.uvTransform.value.copy(P.matrix), (u !== P || d !== P.version || p !== i3.toneMapping) && (c.material.needsUpdate = true, u = P, d = P.version, p = i3.toneMapping), c.layers.enableAll(), E.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function f(E, y) {
    E.getRGB(Fr, au(i3)), n.buffers.color.setClear(Fr.r, Fr.g, Fr.b, y, a);
  }
  function T() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose()), c !== void 0 && (c.geometry.dispose(), c.material.dispose());
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(E, y = 1) {
    o.set(E), l = y, f(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(E) {
    l = E, f(o, l);
  }, render: _, addToRenderList: m, dispose: T };
}
function n_(i3, e) {
  const t = i3.getParameter(i3.MAX_VERTEX_ATTRIBS), n = {}, s = d(null);
  let r = s, a = false;
  function o(S, I, q, z, X) {
    let J = false;
    const G = u(z, q, I);
    r !== G && (r = G, c(r.object)), J = p(S, z, q, X), J && g(S, z, q, X), X !== null && e.update(X, i3.ELEMENT_ARRAY_BUFFER), (J || a) && (a = false, y(S, I, q, z), X !== null && i3.bindBuffer(i3.ELEMENT_ARRAY_BUFFER, e.get(X).buffer));
  }
  function l() {
    return i3.createVertexArray();
  }
  function c(S) {
    return i3.bindVertexArray(S);
  }
  function h(S) {
    return i3.deleteVertexArray(S);
  }
  function u(S, I, q) {
    const z = q.wireframe === true;
    let X = n[S.id];
    X === void 0 && (X = {}, n[S.id] = X);
    let J = X[I.id];
    J === void 0 && (J = {}, X[I.id] = J);
    let G = J[z];
    return G === void 0 && (G = d(l()), J[z] = G), G;
  }
  function d(S) {
    const I = [], q = [], z = [];
    for (let X = 0; X < t; X++) I[X] = 0, q[X] = 0, z[X] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: I, enabledAttributes: q, attributeDivisors: z, object: S, attributes: {}, index: null };
  }
  function p(S, I, q, z) {
    const X = r.attributes, J = I.attributes;
    let G = 0;
    const te = q.getAttributes();
    for (const V in te) if (te[V].location >= 0) {
      const de = X[V];
      let ye = J[V];
      if (ye === void 0 && (V === "instanceMatrix" && S.instanceMatrix && (ye = S.instanceMatrix), V === "instanceColor" && S.instanceColor && (ye = S.instanceColor)), de === void 0 || de.attribute !== ye || ye && de.data !== ye.data) return true;
      G++;
    }
    return r.attributesNum !== G || r.index !== z;
  }
  function g(S, I, q, z) {
    const X = {}, J = I.attributes;
    let G = 0;
    const te = q.getAttributes();
    for (const V in te) if (te[V].location >= 0) {
      let de = J[V];
      de === void 0 && (V === "instanceMatrix" && S.instanceMatrix && (de = S.instanceMatrix), V === "instanceColor" && S.instanceColor && (de = S.instanceColor));
      const ye = {};
      ye.attribute = de, de && de.data && (ye.data = de.data), X[V] = ye, G++;
    }
    r.attributes = X, r.attributesNum = G, r.index = z;
  }
  function _() {
    const S = r.newAttributes;
    for (let I = 0, q = S.length; I < q; I++) S[I] = 0;
  }
  function m(S) {
    f(S, 0);
  }
  function f(S, I) {
    const q = r.newAttributes, z = r.enabledAttributes, X = r.attributeDivisors;
    q[S] = 1, z[S] === 0 && (i3.enableVertexAttribArray(S), z[S] = 1), X[S] !== I && (i3.vertexAttribDivisor(S, I), X[S] = I);
  }
  function T() {
    const S = r.newAttributes, I = r.enabledAttributes;
    for (let q = 0, z = I.length; q < z; q++) I[q] !== S[q] && (i3.disableVertexAttribArray(q), I[q] = 0);
  }
  function E(S, I, q, z, X, J, G) {
    G === true ? i3.vertexAttribIPointer(S, I, q, X, J) : i3.vertexAttribPointer(S, I, q, z, X, J);
  }
  function y(S, I, q, z) {
    _();
    const X = z.attributes, J = q.getAttributes(), G = I.defaultAttributeValues;
    for (const te in J) {
      const V = J[te];
      if (V.location >= 0) {
        let ae = X[te];
        if (ae === void 0 && (te === "instanceMatrix" && S.instanceMatrix && (ae = S.instanceMatrix), te === "instanceColor" && S.instanceColor && (ae = S.instanceColor)), ae !== void 0) {
          const de = ae.normalized, ye = ae.itemSize, Be = e.get(ae);
          if (Be === void 0) continue;
          const lt = Be.buffer, Y = Be.type, ne = Be.bytesPerElement, ve = Y === i3.INT || Y === i3.UNSIGNED_INT || ae.gpuType === ul;
          if (ae.isInterleavedBufferAttribute) {
            const oe = ae.data, we = oe.stride, Pe = ae.offset;
            if (oe.isInstancedInterleavedBuffer) {
              for (let ke = 0; ke < V.locationSize; ke++) f(V.location + ke, oe.meshPerAttribute);
              S.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else for (let ke = 0; ke < V.locationSize; ke++) m(V.location + ke);
            i3.bindBuffer(i3.ARRAY_BUFFER, lt);
            for (let ke = 0; ke < V.locationSize; ke++) E(V.location + ke, ye / V.locationSize, Y, de, we * ne, (Pe + ye / V.locationSize * ke) * ne, ve);
          } else {
            if (ae.isInstancedBufferAttribute) {
              for (let oe = 0; oe < V.locationSize; oe++) f(V.location + oe, ae.meshPerAttribute);
              S.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else for (let oe = 0; oe < V.locationSize; oe++) m(V.location + oe);
            i3.bindBuffer(i3.ARRAY_BUFFER, lt);
            for (let oe = 0; oe < V.locationSize; oe++) E(V.location + oe, ye / V.locationSize, Y, de, ye * ne, ye / V.locationSize * oe * ne, ve);
          }
        } else if (G !== void 0) {
          const de = G[te];
          if (de !== void 0) switch (de.length) {
            case 2:
              i3.vertexAttrib2fv(V.location, de);
              break;
            case 3:
              i3.vertexAttrib3fv(V.location, de);
              break;
            case 4:
              i3.vertexAttrib4fv(V.location, de);
              break;
            default:
              i3.vertexAttrib1fv(V.location, de);
          }
        }
      }
    }
    T();
  }
  function P() {
    N();
    for (const S in n) {
      const I = n[S];
      for (const q in I) {
        const z = I[q];
        for (const X in z) h(z[X].object), delete z[X];
        delete I[q];
      }
      delete n[S];
    }
  }
  function w(S) {
    if (n[S.id] === void 0) return;
    const I = n[S.id];
    for (const q in I) {
      const z = I[q];
      for (const X in z) h(z[X].object), delete z[X];
      delete I[q];
    }
    delete n[S.id];
  }
  function R(S) {
    for (const I in n) {
      const q = n[I];
      if (q[S.id] === void 0) continue;
      const z = q[S.id];
      for (const X in z) h(z[X].object), delete z[X];
      delete q[S.id];
    }
  }
  function N() {
    M(), a = true, r !== s && (r = s, c(r.object));
  }
  function M() {
    s.geometry = null, s.program = null, s.wireframe = false;
  }
  return { setup: o, reset: N, resetDefaultState: M, dispose: P, releaseStatesOfGeometry: w, releaseStatesOfProgram: R, initAttributes: _, enableAttribute: m, disableUnusedAttributes: T };
}
function i_(i3, e, t) {
  let n;
  function s(c) {
    n = c;
  }
  function r(c, h) {
    i3.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function a(c, h, u) {
    u !== 0 && (i3.drawArraysInstanced(n, c, h, u), t.update(h, n, u));
  }
  function o(c, h, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let p = 0;
    for (let g = 0; g < u; g++) p += h[g];
    t.update(p, n, 1);
  }
  function l(c, h, u, d) {
    if (u === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let g = 0; g < c.length; g++) a(c[g], h[g], d[g]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, u);
      let g = 0;
      for (let _ = 0; _ < u; _++) g += h[_] * d[_];
      t.update(g, n, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function s_(i3, e, t, n) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const R = e.get("EXT_texture_filter_anisotropic");
      s = i3.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function a(R) {
    return !(R !== ln && n.convert(R) !== i3.getParameter(i3.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(R) {
    const N = R === Ms && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(R !== Ot && n.convert(R) !== i3.getParameter(i3.IMPLEMENTATION_COLOR_READ_TYPE) && R !== on && !N);
  }
  function l(R) {
    if (R === "highp") {
      if (i3.getShaderPrecisionFormat(i3.VERTEX_SHADER, i3.HIGH_FLOAT).precision > 0 && i3.getShaderPrecisionFormat(i3.FRAGMENT_SHADER, i3.HIGH_FLOAT).precision > 0) return "highp";
      R = "mediump";
    }
    return R === "mediump" && i3.getShaderPrecisionFormat(i3.VERTEX_SHADER, i3.MEDIUM_FLOAT).precision > 0 && i3.getShaderPrecisionFormat(i3.FRAGMENT_SHADER, i3.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = t.logarithmicDepthBuffer === true, d = t.reverseDepthBuffer === true && e.has("EXT_clip_control"), p = i3.getParameter(i3.MAX_TEXTURE_IMAGE_UNITS), g = i3.getParameter(i3.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = i3.getParameter(i3.MAX_TEXTURE_SIZE), m = i3.getParameter(i3.MAX_CUBE_MAP_TEXTURE_SIZE), f = i3.getParameter(i3.MAX_VERTEX_ATTRIBS), T = i3.getParameter(i3.MAX_VERTEX_UNIFORM_VECTORS), E = i3.getParameter(i3.MAX_VARYING_VECTORS), y = i3.getParameter(i3.MAX_FRAGMENT_UNIFORM_VECTORS), P = g > 0, w = i3.getParameter(i3.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: u, reverseDepthBuffer: d, maxTextures: p, maxVertexTextures: g, maxTextureSize: _, maxCubemapSize: m, maxAttributes: f, maxVertexUniforms: T, maxVaryings: E, maxFragmentUniforms: y, vertexTextures: P, maxSamples: w };
}
function r_(i3) {
  const e = this;
  let t = null, n = 0, s = false, r = false;
  const a = new ri(), o = new Ue(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const p = u.length !== 0 || d || n !== 0 || s;
    return s = d, n = u.length, p;
  }, this.beginShadows = function() {
    r = true, h(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, p) {
    const g = u.clippingPlanes, _ = u.clipIntersection, m = u.clipShadows, f = i3.get(u);
    if (!s || g === null || g.length === 0 || r && !m) r ? h(null) : c();
    else {
      const T = r ? 0 : n, E = T * 4;
      let y = f.clippingState || null;
      l.value = y, y = h(g, d, E, p);
      for (let P = 0; P !== E; ++P) y[P] = t[P];
      f.clippingState = y, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, p, g) {
    const _ = u !== null ? u.length : 0;
    let m = null;
    if (_ !== 0) {
      if (m = l.value, g !== true || m === null) {
        const f = p + _ * 4, T = d.matrixWorldInverse;
        o.getNormalMatrix(T), (m === null || m.length < f) && (m = new Float32Array(f));
        for (let E = 0, y = p; E !== _; ++E, y += 4) a.copy(u[E]).applyMatrix4(T, o), a.normal.toArray(m, y), m[y + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = true;
    }
    return e.numPlanes = _, e.numIntersection = 0, m;
  }
}
function a_(i3) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === So ? a.mapping = fs : o === yo && (a.mapping = ps), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === So || o === yo) if (e.has(a)) {
        const l = e.get(a).texture;
        return t(l, a.mapping);
      } else {
        const l = a.image;
        if (l && l.height > 0) {
          const c = new bf(l.height);
          return c.fromEquirectangularTexture(i3, a), e.set(a, c), a.addEventListener("dispose", s), t(c.texture, a.mapping);
        } else return null;
      }
    }
    return a;
  }
  function s(a) {
    const o = a.target;
    o.removeEventListener("dispose", s);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
const is = 4, Hc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], wi = 20, Za = new ha(), Vc = new Te();
let Ja = null, Qa = 0, eo = 0, to = false;
const Ti = (1 + Math.sqrt(5)) / 2, Ki = 1 / Ti, Gc = [new C(-Ti, Ki, 0), new C(Ti, Ki, 0), new C(-Ki, 0, Ti), new C(Ki, 0, Ti), new C(0, Ti, -Ki), new C(0, Ti, Ki), new C(-1, 1, -1), new C(1, 1, -1), new C(-1, 1, 1), new C(1, 1, 1)];
class el {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, s = 100) {
    Ja = this._renderer.getRenderTarget(), Qa = this._renderer.getActiveCubeFace(), eo = this._renderer.getActiveMipmapLevel(), to = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = true, this._sceneToCubeUV(e, n, s, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Yc(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Xc(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Ja, Qa, eo), this._renderer.xr.enabled = to, e.scissorTest = false, Or(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === fs || e.mapping === ps ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ja = this._renderer.getRenderTarget(), Qa = this._renderer.getActiveCubeFace(), eo = this._renderer.getActiveMipmapLevel(), to = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: Ct, minFilter: Ct, generateMipmaps: false, type: Ms, format: ln, colorSpace: Dt, depthBuffer: false }, s = Wc(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Wc(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = o_(r)), this._blurMaterial = l_(r, e, t);
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new rt(this._lodPlanes[0], e);
    this._renderer.compile(t, Za);
  }
  _sceneToCubeUV(e, t, n, s) {
    const o = new Ft(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(Vc), h.toneMapping = di, h.autoClear = false;
    const p = new li({ name: "PMREM.Background", side: St, depthWrite: false, depthTest: false }), g = new rt(new bs(), p);
    let _ = false;
    const m = e.background;
    m ? m.isColor && (p.color.copy(m), e.background = null, _ = true) : (p.color.copy(Vc), _ = true);
    for (let f = 0; f < 6; f++) {
      const T = f % 3;
      T === 0 ? (o.up.set(0, l[f], 0), o.lookAt(c[f], 0, 0)) : T === 1 ? (o.up.set(0, 0, l[f]), o.lookAt(0, c[f], 0)) : (o.up.set(0, l[f], 0), o.lookAt(0, 0, c[f]));
      const E = this._cubeSize;
      Or(s, T * E, f > 2 ? E : 0, E, E), h.setRenderTarget(s), _ && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, s = e.mapping === fs || e.mapping === ps;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Yc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Xc());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = new rt(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Or(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, Za);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Gc[(s - r - 1) % Gc.length];
      this._blur(e, r - 1, r, a, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, s, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, s, "latitudinal", r), this._halfBlur(a, e, n, n, s, "longitudinal", r);
  }
  _halfBlur(e, t, n, s, r, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = new rt(this._lodPlanes[s], c), d = c.uniforms, p = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * wi - 1), _ = r / g, m = isFinite(r) ? 1 + Math.floor(h * _) : wi;
    m > wi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);
    const f = [];
    let T = 0;
    for (let R = 0; R < wi; ++R) {
      const N = R / _, M = Math.exp(-N * N / 2);
      f.push(M), R === 0 ? T += M : R < m && (T += 2 * M);
    }
    for (let R = 0; R < f.length; R++) f[R] = f[R] / T;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = f, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: E } = this;
    d.dTheta.value = g, d.mipInt.value = E - n;
    const y = this._sizeLods[s], P = 3 * y * (s > E - is ? s - E + is : 0), w = 4 * (this._cubeSize - y);
    Or(t, P, w, 3 * y, 2 * y), l.setRenderTarget(t), l.render(u, Za);
  }
}
function o_(i3) {
  const e = [], t = [], n = [];
  let s = i3;
  const r = i3 - is + 1 + Hc.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    t.push(o);
    let l = 1 / o;
    a > i3 - is ? l = Hc[a - i3 + is - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], p = 6, g = 6, _ = 3, m = 2, f = 1, T = new Float32Array(_ * g * p), E = new Float32Array(m * g * p), y = new Float32Array(f * g * p);
    for (let w = 0; w < p; w++) {
      const R = w % 3 * 2 / 3 - 1, N = w > 2 ? 0 : -1, M = [R, N, 0, R + 2 / 3, N, 0, R + 2 / 3, N + 1, 0, R, N, 0, R + 2 / 3, N + 1, 0, R, N + 1, 0];
      T.set(M, _ * g * w), E.set(d, m * g * w);
      const S = [w, w, w, w, w, w];
      y.set(S, f * g * w);
    }
    const P = new Sn();
    P.setAttribute("position", new It(T, _)), P.setAttribute("uv", new It(E, m)), P.setAttribute("faceIndex", new It(y, f)), e.push(P), s > is && s--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Wc(i3, e, t) {
  const n = new Bt(i3, e, t);
  return n.texture.mapping = aa, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function Or(i3, e, t, n, s) {
  i3.viewport.set(e, t, n, s), i3.scissor.set(e, t, n, s);
}
function l_(i3, e, t) {
  const n = new Float32Array(wi), s = new C(0, 1, 0);
  return new Gt({ name: "SphericalGaussianBlur", defines: { n: wi, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${i3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: s } }, vertexShader: Pl(), fragmentShader: `

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
		`, blending: qt, depthTest: false, depthWrite: false });
}
function Xc() {
  return new Gt({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Pl(), fragmentShader: `

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
		`, blending: qt, depthTest: false, depthWrite: false });
}
function Yc() {
  return new Gt({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Pl(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: qt, depthTest: false, depthWrite: false });
}
function Pl() {
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
function c_(i3) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === So || l === yo, h = l === fs || l === ps;
      if (c || h) {
        let u = e.get(o);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d) return t === null && (t = new el(i3)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const p = o.image;
          return c && p && p.height > 0 || h && p && s(p) ? (t === null && (t = new el(i3)), u = c ? t.fromEquirectangular(o) : t.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) o[h] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: n, dispose: a };
}
function h_(i3) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let s;
    switch (n) {
      case "WEBGL_depth_texture":
        s = i3.getExtension("WEBGL_depth_texture") || i3.getExtension("MOZ_WEBGL_depth_texture") || i3.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = i3.getExtension("EXT_texture_filter_anisotropic") || i3.getExtension("MOZ_EXT_texture_filter_anisotropic") || i3.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = i3.getExtension("WEBGL_compressed_texture_s3tc") || i3.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i3.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = i3.getExtension("WEBGL_compressed_texture_pvrtc") || i3.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = i3.getExtension(n);
    }
    return e[n] = s, s;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const s = t(n);
    return s === null && Zi("THREE.WebGLRenderer: " + n + " extension not supported."), s;
  } };
}
function u_(i3, e, t, n) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes) e.remove(d.attributes[g]);
    d.removeEventListener("dispose", a), delete s[d.id];
    const p = r.get(d);
    p && (e.remove(p), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, d) {
    return s[d.id] === true || (d.addEventListener("dispose", a), s[d.id] = true, t.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const p in d) e.update(d[p], i3.ARRAY_BUFFER);
  }
  function c(u) {
    const d = [], p = u.index, g = u.attributes.position;
    let _ = 0;
    if (p !== null) {
      const T = p.array;
      _ = p.version;
      for (let E = 0, y = T.length; E < y; E += 3) {
        const P = T[E + 0], w = T[E + 1], R = T[E + 2];
        d.push(P, w, w, R, R, P);
      }
    } else if (g !== void 0) {
      const T = g.array;
      _ = g.version;
      for (let E = 0, y = T.length / 3 - 1; E < y; E += 3) {
        const P = E + 0, w = E + 1, R = E + 2;
        d.push(P, w, w, R, R, P);
      }
    } else return;
    const m = new (eu(d) ? ru : su)(d, 1);
    m.version = _;
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
  return { get: o, update: l, getWireframeAttribute: h };
}
function d_(i3, e, t) {
  let n;
  function s(d) {
    n = d;
  }
  let r, a;
  function o(d) {
    r = d.type, a = d.bytesPerElement;
  }
  function l(d, p) {
    i3.drawElements(n, p, r, d * a), t.update(p, n, 1);
  }
  function c(d, p, g) {
    g !== 0 && (i3.drawElementsInstanced(n, p, r, d * a, g), t.update(p, n, g));
  }
  function h(d, p, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, r, d, 0, g);
    let m = 0;
    for (let f = 0; f < g; f++) m += p[f];
    t.update(m, n, 1);
  }
  function u(d, p, g, _) {
    if (g === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let f = 0; f < d.length; f++) c(d[f] / a, p[f], _[f]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, r, d, 0, _, 0, g);
      let f = 0;
      for (let T = 0; T < g; T++) f += p[T] * _[T];
      t.update(f, n, 1);
    }
  }
  this.setMode = s, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function f_(i3) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch (t.calls++, a) {
      case i3.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case i3.LINES:
        t.lines += o * (r / 2);
        break;
      case i3.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case i3.LINE_LOOP:
        t.lines += o * r;
        break;
      case i3.POINTS:
        t.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: s, update: n };
}
function p_(i3, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), s = new $e();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== u) {
      let M = function() {
        R.dispose(), n.delete(o), o.removeEventListener("dispose", M);
      };
      d !== void 0 && d.texture.dispose();
      const p = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, _ = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], f = o.morphAttributes.normal || [], T = o.morphAttributes.color || [];
      let E = 0;
      p === true && (E = 1), g === true && (E = 2), _ === true && (E = 3);
      let y = o.attributes.position.count * E, P = 1;
      y > e.maxTextureSize && (P = Math.ceil(y / e.maxTextureSize), y = e.maxTextureSize);
      const w = new Float32Array(y * P * 4 * u), R = new nu(w, y, P, u);
      R.type = on, R.needsUpdate = true;
      const N = E * 4;
      for (let S = 0; S < u; S++) {
        const I = m[S], q = f[S], z = T[S], X = y * P * 4 * S;
        for (let J = 0; J < I.count; J++) {
          const G = J * N;
          p === true && (s.fromBufferAttribute(I, J), w[X + G + 0] = s.x, w[X + G + 1] = s.y, w[X + G + 2] = s.z, w[X + G + 3] = 0), g === true && (s.fromBufferAttribute(q, J), w[X + G + 4] = s.x, w[X + G + 5] = s.y, w[X + G + 6] = s.z, w[X + G + 7] = 0), _ === true && (s.fromBufferAttribute(z, J), w[X + G + 8] = s.x, w[X + G + 9] = s.y, w[X + G + 10] = s.z, w[X + G + 11] = z.itemSize === 4 ? s.w : 1);
        }
      }
      d = { count: u, texture: R, size: new _e(y, P) }, n.set(o, d), o.addEventListener("dispose", M);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) l.getUniforms().setValue(i3, "morphTexture", a.morphTexture, t);
    else {
      let p = 0;
      for (let _ = 0; _ < c.length; _++) p += c[_];
      const g = o.morphTargetsRelative ? 1 : 1 - p;
      l.getUniforms().setValue(i3, "morphTargetBaseInfluence", g), l.getUniforms().setValue(i3, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i3, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(i3, "morphTargetsTextureSize", d.size);
  }
  return { update: r };
}
function m_(i3, e, t, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, u = e.get(l, h);
    if (s.get(u) !== c && (e.update(u), s.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === false && l.addEventListener("dispose", o), s.get(l) !== c && (t.update(l.instanceMatrix, i3.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i3.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      s.get(d) !== c && (d.update(), s.set(d, c));
    }
    return u;
  }
  function a() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: r, dispose: a };
}
const vu = new Mt(), qc = new Tl(1, 1), xu = new nu(), Su = new lf(), yu = new lu(), jc = [], Kc = [], $c = new Float32Array(16), Zc = new Float32Array(9), Jc = new Float32Array(4);
function Rs(i3, e, t) {
  const n = i3[0];
  if (n <= 0 || n > 0) return i3;
  const s = e * t;
  let r = jc[s];
  if (r === void 0 && (r = new Float32Array(s), jc[s] = r), e !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) o += t, i3[a].toArray(r, o);
  }
  return r;
}
function bt(i3, e) {
  if (i3.length !== e.length) return false;
  for (let t = 0, n = i3.length; t < n; t++) if (i3[t] !== e[t]) return false;
  return true;
}
function Tt(i3, e) {
  for (let t = 0, n = e.length; t < n; t++) i3[t] = e[t];
}
function ua(i3, e) {
  let t = Kc[e];
  t === void 0 && (t = new Int32Array(e), Kc[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = i3.allocateTextureUnit();
  return t;
}
function g_(i3, e) {
  const t = this.cache;
  t[0] !== e && (i3.uniform1f(this.addr, e), t[0] = e);
}
function __(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i3.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (bt(t, e)) return;
    i3.uniform2fv(this.addr, e), Tt(t, e);
  }
}
function v_(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i3.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i3.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (bt(t, e)) return;
    i3.uniform3fv(this.addr, e), Tt(t, e);
  }
}
function x_(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i3.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (bt(t, e)) return;
    i3.uniform4fv(this.addr, e), Tt(t, e);
  }
}
function S_(i3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (bt(t, e)) return;
    i3.uniformMatrix2fv(this.addr, false, e), Tt(t, e);
  } else {
    if (bt(t, n)) return;
    Jc.set(n), i3.uniformMatrix2fv(this.addr, false, Jc), Tt(t, n);
  }
}
function y_(i3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (bt(t, e)) return;
    i3.uniformMatrix3fv(this.addr, false, e), Tt(t, e);
  } else {
    if (bt(t, n)) return;
    Zc.set(n), i3.uniformMatrix3fv(this.addr, false, Zc), Tt(t, n);
  }
}
function M_(i3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (bt(t, e)) return;
    i3.uniformMatrix4fv(this.addr, false, e), Tt(t, e);
  } else {
    if (bt(t, n)) return;
    $c.set(n), i3.uniformMatrix4fv(this.addr, false, $c), Tt(t, n);
  }
}
function E_(i3, e) {
  const t = this.cache;
  t[0] !== e && (i3.uniform1i(this.addr, e), t[0] = e);
}
function b_(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i3.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (bt(t, e)) return;
    i3.uniform2iv(this.addr, e), Tt(t, e);
  }
}
function T_(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i3.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (bt(t, e)) return;
    i3.uniform3iv(this.addr, e), Tt(t, e);
  }
}
function A_(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i3.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (bt(t, e)) return;
    i3.uniform4iv(this.addr, e), Tt(t, e);
  }
}
function w_(i3, e) {
  const t = this.cache;
  t[0] !== e && (i3.uniform1ui(this.addr, e), t[0] = e);
}
function R_(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i3.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (bt(t, e)) return;
    i3.uniform2uiv(this.addr, e), Tt(t, e);
  }
}
function C_(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i3.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (bt(t, e)) return;
    i3.uniform3uiv(this.addr, e), Tt(t, e);
  }
}
function P_(i3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i3.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (bt(t, e)) return;
    i3.uniform4uiv(this.addr, e), Tt(t, e);
  }
}
function I_(i3, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i3.uniform1i(this.addr, s), n[0] = s);
  let r;
  this.type === i3.SAMPLER_2D_SHADOW ? (qc.compareFunction = Jh, r = qc) : r = vu, t.setTexture2D(e || r, s);
}
function D_(i3, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i3.uniform1i(this.addr, s), n[0] = s), t.setTexture3D(e || Su, s);
}
function L_(i3, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i3.uniform1i(this.addr, s), n[0] = s), t.setTextureCube(e || yu, s);
}
function U_(i3, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i3.uniform1i(this.addr, s), n[0] = s), t.setTexture2DArray(e || xu, s);
}
function N_(i3) {
  switch (i3) {
    case 5126:
      return g_;
    case 35664:
      return __;
    case 35665:
      return v_;
    case 35666:
      return x_;
    case 35674:
      return S_;
    case 35675:
      return y_;
    case 35676:
      return M_;
    case 5124:
    case 35670:
      return E_;
    case 35667:
    case 35671:
      return b_;
    case 35668:
    case 35672:
      return T_;
    case 35669:
    case 35673:
      return A_;
    case 5125:
      return w_;
    case 36294:
      return R_;
    case 36295:
      return C_;
    case 36296:
      return P_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return I_;
    case 35679:
    case 36299:
    case 36307:
      return D_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return L_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return U_;
  }
}
function F_(i3, e) {
  i3.uniform1fv(this.addr, e);
}
function O_(i3, e) {
  const t = Rs(e, this.size, 2);
  i3.uniform2fv(this.addr, t);
}
function B_(i3, e) {
  const t = Rs(e, this.size, 3);
  i3.uniform3fv(this.addr, t);
}
function k_(i3, e) {
  const t = Rs(e, this.size, 4);
  i3.uniform4fv(this.addr, t);
}
function z_(i3, e) {
  const t = Rs(e, this.size, 4);
  i3.uniformMatrix2fv(this.addr, false, t);
}
function H_(i3, e) {
  const t = Rs(e, this.size, 9);
  i3.uniformMatrix3fv(this.addr, false, t);
}
function V_(i3, e) {
  const t = Rs(e, this.size, 16);
  i3.uniformMatrix4fv(this.addr, false, t);
}
function G_(i3, e) {
  i3.uniform1iv(this.addr, e);
}
function W_(i3, e) {
  i3.uniform2iv(this.addr, e);
}
function X_(i3, e) {
  i3.uniform3iv(this.addr, e);
}
function Y_(i3, e) {
  i3.uniform4iv(this.addr, e);
}
function q_(i3, e) {
  i3.uniform1uiv(this.addr, e);
}
function j_(i3, e) {
  i3.uniform2uiv(this.addr, e);
}
function K_(i3, e) {
  i3.uniform3uiv(this.addr, e);
}
function $_(i3, e) {
  i3.uniform4uiv(this.addr, e);
}
function Z_(i3, e, t) {
  const n = this.cache, s = e.length, r = ua(t, s);
  bt(n, r) || (i3.uniform1iv(this.addr, r), Tt(n, r));
  for (let a = 0; a !== s; ++a) t.setTexture2D(e[a] || vu, r[a]);
}
function J_(i3, e, t) {
  const n = this.cache, s = e.length, r = ua(t, s);
  bt(n, r) || (i3.uniform1iv(this.addr, r), Tt(n, r));
  for (let a = 0; a !== s; ++a) t.setTexture3D(e[a] || Su, r[a]);
}
function Q_(i3, e, t) {
  const n = this.cache, s = e.length, r = ua(t, s);
  bt(n, r) || (i3.uniform1iv(this.addr, r), Tt(n, r));
  for (let a = 0; a !== s; ++a) t.setTextureCube(e[a] || yu, r[a]);
}
function ev(i3, e, t) {
  const n = this.cache, s = e.length, r = ua(t, s);
  bt(n, r) || (i3.uniform1iv(this.addr, r), Tt(n, r));
  for (let a = 0; a !== s; ++a) t.setTexture2DArray(e[a] || xu, r[a]);
}
function tv(i3) {
  switch (i3) {
    case 5126:
      return F_;
    case 35664:
      return O_;
    case 35665:
      return B_;
    case 35666:
      return k_;
    case 35674:
      return z_;
    case 35675:
      return H_;
    case 35676:
      return V_;
    case 5124:
    case 35670:
      return G_;
    case 35667:
    case 35671:
      return W_;
    case 35668:
    case 35672:
      return X_;
    case 35669:
    case 35673:
      return Y_;
    case 5125:
      return q_;
    case 36294:
      return j_;
    case 36295:
      return K_;
    case 36296:
      return $_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Z_;
    case 35679:
    case 36299:
    case 36307:
      return J_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Q_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ev;
  }
}
class nv {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = N_(t.type);
  }
}
class iv {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = tv(t.type);
  }
}
class sv {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const s = this.seq;
    for (let r = 0, a = s.length; r !== a; ++r) {
      const o = s[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const no = /(\w+)(\])?(\[|\.)?/g;
function Qc(i3, e) {
  i3.seq.push(e), i3.map[e.id] = e;
}
function rv(i3, e, t) {
  const n = i3.name, s = n.length;
  for (no.lastIndex = 0; ; ) {
    const r = no.exec(n), a = no.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === s) {
      Qc(t, c === void 0 ? new nv(o, i3, e) : new iv(o, i3, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new sv(o), Qc(t, u)), t = u;
    }
  }
}
class Kr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = e.getActiveUniform(t, s), a = e.getUniformLocation(t, r.name);
      rv(r, a, this);
    }
  }
  setValue(e, t, n, s) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, s);
  }
  setOptional(e, t, n) {
    const s = t[n];
    s !== void 0 && this.setValue(e, n, s);
  }
  static upload(e, t, n, s) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r], l = n[o.id];
      l.needsUpdate !== false && o.setValue(e, l.value, s);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let s = 0, r = e.length; s !== r; ++s) {
      const a = e[s];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function eh(i3, e, t) {
  const n = i3.createShader(e);
  return i3.shaderSource(n, t), i3.compileShader(n), n;
}
const av = 37297;
let ov = 0;
function lv(i3, e) {
  const t = i3.split(`
`), n = [], s = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const th = new Ue();
function cv(i3) {
  Xe._getMatrix(th, Xe.workingColorSpace, i3);
  const e = `mat3( ${th.elements.map((t) => t.toFixed(4))} )`;
  switch (Xe.getTransfer(i3)) {
    case Qr:
      return [e, "LinearTransferOETF"];
    case at:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i3), [e, "LinearTransferOETF"];
  }
}
function nh(i3, e, t) {
  const n = i3.getShaderParameter(e, i3.COMPILE_STATUS), s = i3.getShaderInfoLog(e).trim();
  if (n && s === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(s);
  if (r) {
    const a = parseInt(r[1]);
    return t.toUpperCase() + `

` + s + `

` + lv(i3.getShaderSource(e), a);
  } else return s;
}
function hv(i3, e) {
  const t = cv(e);
  return [`vec4 ${i3}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function uv(i3, e) {
  let t;
  switch (e) {
    case gd:
      t = "Linear";
      break;
    case _d:
      t = "Reinhard";
      break;
    case vd:
      t = "Cineon";
      break;
    case Oh:
      t = "ACESFilmic";
      break;
    case Sd:
      t = "AgX";
      break;
    case yd:
      t = "Neutral";
      break;
    case xd:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i3 + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Br = new C();
function dv() {
  Xe.getLuminanceCoefficients(Br);
  const i3 = Br.x.toFixed(4), e = Br.y.toFixed(4), t = Br.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i3}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function fv(i3) {
  return [i3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i3.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Gs).join(`
`);
}
function pv(i3) {
  const e = [];
  for (const t in i3) {
    const n = i3[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function mv(i3, e) {
  const t = {}, n = i3.getProgramParameter(e, i3.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i3.getActiveAttrib(e, s), a = r.name;
    let o = 1;
    r.type === i3.FLOAT_MAT2 && (o = 2), r.type === i3.FLOAT_MAT3 && (o = 3), r.type === i3.FLOAT_MAT4 && (o = 4), t[a] = { type: r.type, location: i3.getAttribLocation(e, a), locationSize: o };
  }
  return t;
}
function Gs(i3) {
  return i3 !== "";
}
function ih(i3, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i3.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function sh(i3, e) {
  return i3.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const gv = /^[ \t]*#include +<([\w\d./]+)>/gm;
function tl(i3) {
  return i3.replace(gv, vv);
}
const _v = /* @__PURE__ */ new Map();
function vv(i3, e) {
  let t = Fe[e];
  if (t === void 0) {
    const n = _v.get(e);
    if (n !== void 0) t = Fe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return tl(t);
}
const xv = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function rh(i3) {
  return i3.replace(xv, Sv);
}
function Sv(i3, e, t, n) {
  let s = "";
  for (let r = parseInt(e); r < parseInt(t); r++) s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function ah(i3) {
  let e = `precision ${i3.precision} float;
	precision ${i3.precision} int;
	precision ${i3.precision} sampler2D;
	precision ${i3.precision} samplerCube;
	precision ${i3.precision} sampler3D;
	precision ${i3.precision} sampler2DArray;
	precision ${i3.precision} sampler2DShadow;
	precision ${i3.precision} samplerCubeShadow;
	precision ${i3.precision} sampler2DArrayShadow;
	precision ${i3.precision} isampler2D;
	precision ${i3.precision} isampler3D;
	precision ${i3.precision} isamplerCube;
	precision ${i3.precision} isampler2DArray;
	precision ${i3.precision} usampler2D;
	precision ${i3.precision} usampler3D;
	precision ${i3.precision} usamplerCube;
	precision ${i3.precision} usampler2DArray;
	`;
  return i3.precision === "highp" ? e += `
#define HIGH_PRECISION` : i3.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i3.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function yv(i3) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i3.shadowMapType === Nh ? e = "SHADOWMAP_TYPE_PCF" : i3.shadowMapType === Ku ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i3.shadowMapType === zn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Mv(i3) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i3.envMap) switch (i3.envMapMode) {
    case fs:
    case ps:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case aa:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function Ev(i3) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i3.envMap) switch (i3.envMapMode) {
    case ps:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function bv(i3) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i3.envMap) switch (i3.combine) {
    case Fh:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case pd:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case md:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function Tv(i3) {
  const e = i3.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function Av(i3, e, t, n) {
  const s = i3.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = yv(t), c = Mv(t), h = Ev(t), u = bv(t), d = Tv(t), p = fv(t), g = pv(r), _ = s.createProgram();
  let m, f, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Gs).join(`
`), m.length > 0 && (m += `
`), f = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Gs).join(`
`), f.length > 0 && (f += `
`)) : (m = [ah(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Gs).join(`
`), f = [ah(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== di ? "#define TONE_MAPPING" : "", t.toneMapping !== di ? Fe.tonemapping_pars_fragment : "", t.toneMapping !== di ? uv("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Fe.colorspace_pars_fragment, hv("linearToOutputTexel", t.outputColorSpace), dv(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Gs).join(`
`)), a = tl(a), a = ih(a, t), a = sh(a, t), o = tl(o), o = ih(o, t), o = sh(o, t), a = rh(a), o = rh(o), t.isRawShaderMaterial !== true && (T = `#version 300 es
`, m = [p, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m, f = ["#define varying in", t.glslVersion === Ql ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Ql ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + f);
  const E = T + m + a, y = T + f + o, P = eh(s, s.VERTEX_SHADER, E), w = eh(s, s.FRAGMENT_SHADER, y);
  s.attachShader(_, P), s.attachShader(_, w), t.index0AttributeName !== void 0 ? s.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === true && s.bindAttribLocation(_, 0, "position"), s.linkProgram(_);
  function R(I) {
    if (i3.debug.checkShaderErrors) {
      const q = s.getProgramInfoLog(_).trim(), z = s.getShaderInfoLog(P).trim(), X = s.getShaderInfoLog(w).trim();
      let J = true, G = true;
      if (s.getProgramParameter(_, s.LINK_STATUS) === false) if (J = false, typeof i3.debug.onShaderError == "function") i3.debug.onShaderError(s, _, P, w);
      else {
        const te = nh(s, P, "vertex"), V = nh(s, w, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(_, s.VALIDATE_STATUS) + `

Material Name: ` + I.name + `
Material Type: ` + I.type + `

Program Info Log: ` + q + `
` + te + `
` + V);
      }
      else q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", q) : (z === "" || X === "") && (G = false);
      G && (I.diagnostics = { runnable: J, programLog: q, vertexShader: { log: z, prefix: m }, fragmentShader: { log: X, prefix: f } });
    }
    s.deleteShader(P), s.deleteShader(w), N = new Kr(s, _), M = mv(s, _);
  }
  let N;
  this.getUniforms = function() {
    return N === void 0 && R(this), N;
  };
  let M;
  this.getAttributes = function() {
    return M === void 0 && R(this), M;
  };
  let S = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return S === false && (S = s.getProgramParameter(_, av)), S;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = ov++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = P, this.fragmentShader = w, this;
}
let wv = 0;
class Rv {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, s = this._getShaderStage(t), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(s) === false && (a.add(s), s.usedTimes++), a.has(r) === false && (a.add(r), r.usedTimes++), this;
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
    return n === void 0 && (n = new Cv(e), t.set(e, n)), n;
  }
}
class Cv {
  constructor(e) {
    this.id = wv++, this.code = e, this.usedTimes = 0;
  }
}
function Pv(i3, e, t, n, s, r, a) {
  const o = new Sl(), l = new Rv(), c = /* @__PURE__ */ new Set(), h = [], u = s.logarithmicDepthBuffer, d = s.vertexTextures;
  let p = s.precision;
  const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function _(M) {
    return c.add(M), M === 0 ? "uv" : `uv${M}`;
  }
  function m(M, S, I, q, z) {
    const X = q.fog, J = z.geometry, G = M.isMeshStandardMaterial ? q.environment : null, te = (M.isMeshStandardMaterial ? t : e).get(M.envMap || G), V = te && te.mapping === aa ? te.image.height : null, ae = g[M.type];
    M.precision !== null && (p = s.getMaxPrecision(M.precision), p !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", p, "instead."));
    const de = J.morphAttributes.position || J.morphAttributes.normal || J.morphAttributes.color, ye = de !== void 0 ? de.length : 0;
    let Be = 0;
    J.morphAttributes.position !== void 0 && (Be = 1), J.morphAttributes.normal !== void 0 && (Be = 2), J.morphAttributes.color !== void 0 && (Be = 3);
    let lt, Y, ne, ve;
    if (ae) {
      const it = An[ae];
      lt = it.vertexShader, Y = it.fragmentShader;
    } else lt = M.vertexShader, Y = M.fragmentShader, l.update(M), ne = l.getVertexShaderID(M), ve = l.getFragmentShaderID(M);
    const oe = i3.getRenderTarget(), we = i3.state.buffers.depth.getReversed(), Pe = z.isInstancedMesh === true, ke = z.isBatchedMesh === true, ft = !!M.map, qe = !!M.matcap, _t = !!te, A = !!M.aoMap, en = !!M.lightMap, Ve = !!M.bumpMap, Ge = !!M.normalMap, Me = !!M.displacementMap, ut = !!M.emissiveMap, Se = !!M.metalnessMap, b = !!M.roughnessMap, v = M.anisotropy > 0, F = M.clearcoat > 0, K = M.dispersion > 0, Z = M.iridescence > 0, W = M.sheen > 0, xe = M.transmission > 0, le = v && !!M.anisotropyMap, fe = F && !!M.clearcoatMap, je = F && !!M.clearcoatNormalMap, ee = F && !!M.clearcoatRoughnessMap, pe = Z && !!M.iridescenceMap, Ae = Z && !!M.iridescenceThicknessMap, Re = W && !!M.sheenColorMap, me = W && !!M.sheenRoughnessMap, We = !!M.specularMap, Ne = !!M.specularColorMap, ct = !!M.specularIntensityMap, D = xe && !!M.transmissionMap, se = xe && !!M.thicknessMap, H = !!M.gradientMap, $ = !!M.alphaMap, he = M.alphaTest > 0, ce = !!M.alphaHash, Le = !!M.extensions;
    let mt = di;
    M.toneMapped && (oe === null || oe.isXRRenderTarget === true) && (mt = i3.toneMapping);
    const Lt = { shaderID: ae, shaderType: M.type, shaderName: M.name, vertexShader: lt, fragmentShader: Y, defines: M.defines, customVertexShaderID: ne, customFragmentShaderID: ve, isRawShaderMaterial: M.isRawShaderMaterial === true, glslVersion: M.glslVersion, precision: p, batching: ke, batchingColor: ke && z._colorsTexture !== null, instancing: Pe, instancingColor: Pe && z.instanceColor !== null, instancingMorph: Pe && z.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: oe === null ? i3.outputColorSpace : oe.isXRRenderTarget === true ? oe.texture.colorSpace : Dt, alphaToCoverage: !!M.alphaToCoverage, map: ft, matcap: qe, envMap: _t, envMapMode: _t && te.mapping, envMapCubeUVHeight: V, aoMap: A, lightMap: en, bumpMap: Ve, normalMap: Ge, displacementMap: d && Me, emissiveMap: ut, normalMapObjectSpace: Ge && M.normalMapType === Rd, normalMapTangentSpace: Ge && M.normalMapType === Zh, metalnessMap: Se, roughnessMap: b, anisotropy: v, anisotropyMap: le, clearcoat: F, clearcoatMap: fe, clearcoatNormalMap: je, clearcoatRoughnessMap: ee, dispersion: K, iridescence: Z, iridescenceMap: pe, iridescenceThicknessMap: Ae, sheen: W, sheenColorMap: Re, sheenRoughnessMap: me, specularMap: We, specularColorMap: Ne, specularIntensityMap: ct, transmission: xe, transmissionMap: D, thicknessMap: se, gradientMap: H, opaque: M.transparent === false && M.blending === os && M.alphaToCoverage === false, alphaMap: $, alphaTest: he, alphaHash: ce, combine: M.combine, mapUv: ft && _(M.map.channel), aoMapUv: A && _(M.aoMap.channel), lightMapUv: en && _(M.lightMap.channel), bumpMapUv: Ve && _(M.bumpMap.channel), normalMapUv: Ge && _(M.normalMap.channel), displacementMapUv: Me && _(M.displacementMap.channel), emissiveMapUv: ut && _(M.emissiveMap.channel), metalnessMapUv: Se && _(M.metalnessMap.channel), roughnessMapUv: b && _(M.roughnessMap.channel), anisotropyMapUv: le && _(M.anisotropyMap.channel), clearcoatMapUv: fe && _(M.clearcoatMap.channel), clearcoatNormalMapUv: je && _(M.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: ee && _(M.clearcoatRoughnessMap.channel), iridescenceMapUv: pe && _(M.iridescenceMap.channel), iridescenceThicknessMapUv: Ae && _(M.iridescenceThicknessMap.channel), sheenColorMapUv: Re && _(M.sheenColorMap.channel), sheenRoughnessMapUv: me && _(M.sheenRoughnessMap.channel), specularMapUv: We && _(M.specularMap.channel), specularColorMapUv: Ne && _(M.specularColorMap.channel), specularIntensityMapUv: ct && _(M.specularIntensityMap.channel), transmissionMapUv: D && _(M.transmissionMap.channel), thicknessMapUv: se && _(M.thicknessMap.channel), alphaMapUv: $ && _(M.alphaMap.channel), vertexTangents: !!J.attributes.tangent && (Ge || v), vertexColors: M.vertexColors, vertexAlphas: M.vertexColors === true && !!J.attributes.color && J.attributes.color.itemSize === 4, pointsUvs: z.isPoints === true && !!J.attributes.uv && (ft || $), fog: !!X, useFog: M.fog === true, fogExp2: !!X && X.isFogExp2, flatShading: M.flatShading === true, sizeAttenuation: M.sizeAttenuation === true, logarithmicDepthBuffer: u, reverseDepthBuffer: we, skinning: z.isSkinnedMesh === true, morphTargets: J.morphAttributes.position !== void 0, morphNormals: J.morphAttributes.normal !== void 0, morphColors: J.morphAttributes.color !== void 0, morphTargetsCount: ye, morphTextureStride: Be, numDirLights: S.directional.length, numPointLights: S.point.length, numSpotLights: S.spot.length, numSpotLightMaps: S.spotLightMap.length, numRectAreaLights: S.rectArea.length, numHemiLights: S.hemi.length, numDirLightShadows: S.directionalShadowMap.length, numPointLightShadows: S.pointShadowMap.length, numSpotLightShadows: S.spotShadowMap.length, numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps, numLightProbes: S.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: M.dithering, shadowMapEnabled: i3.shadowMap.enabled && I.length > 0, shadowMapType: i3.shadowMap.type, toneMapping: mt, decodeVideoTexture: ft && M.map.isVideoTexture === true && Xe.getTransfer(M.map.colorSpace) === at, decodeVideoTextureEmissive: ut && M.emissiveMap.isVideoTexture === true && Xe.getTransfer(M.emissiveMap.colorSpace) === at, premultipliedAlpha: M.premultipliedAlpha, doubleSided: M.side === Yt, flipSided: M.side === St, useDepthPacking: M.depthPacking >= 0, depthPacking: M.depthPacking || 0, index0AttributeName: M.index0AttributeName, extensionClipCullDistance: Le && M.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Le && M.extensions.multiDraw === true || ke) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: M.customProgramCacheKey() };
    return Lt.vertexUv1s = c.has(1), Lt.vertexUv2s = c.has(2), Lt.vertexUv3s = c.has(3), c.clear(), Lt;
  }
  function f(M) {
    const S = [];
    if (M.shaderID ? S.push(M.shaderID) : (S.push(M.customVertexShaderID), S.push(M.customFragmentShaderID)), M.defines !== void 0) for (const I in M.defines) S.push(I), S.push(M.defines[I]);
    return M.isRawShaderMaterial === false && (T(S, M), E(S, M), S.push(i3.outputColorSpace)), S.push(M.customProgramCacheKey), S.join();
  }
  function T(M, S) {
    M.push(S.precision), M.push(S.outputColorSpace), M.push(S.envMapMode), M.push(S.envMapCubeUVHeight), M.push(S.mapUv), M.push(S.alphaMapUv), M.push(S.lightMapUv), M.push(S.aoMapUv), M.push(S.bumpMapUv), M.push(S.normalMapUv), M.push(S.displacementMapUv), M.push(S.emissiveMapUv), M.push(S.metalnessMapUv), M.push(S.roughnessMapUv), M.push(S.anisotropyMapUv), M.push(S.clearcoatMapUv), M.push(S.clearcoatNormalMapUv), M.push(S.clearcoatRoughnessMapUv), M.push(S.iridescenceMapUv), M.push(S.iridescenceThicknessMapUv), M.push(S.sheenColorMapUv), M.push(S.sheenRoughnessMapUv), M.push(S.specularMapUv), M.push(S.specularColorMapUv), M.push(S.specularIntensityMapUv), M.push(S.transmissionMapUv), M.push(S.thicknessMapUv), M.push(S.combine), M.push(S.fogExp2), M.push(S.sizeAttenuation), M.push(S.morphTargetsCount), M.push(S.morphAttributeCount), M.push(S.numDirLights), M.push(S.numPointLights), M.push(S.numSpotLights), M.push(S.numSpotLightMaps), M.push(S.numHemiLights), M.push(S.numRectAreaLights), M.push(S.numDirLightShadows), M.push(S.numPointLightShadows), M.push(S.numSpotLightShadows), M.push(S.numSpotLightShadowsWithMaps), M.push(S.numLightProbes), M.push(S.shadowMapType), M.push(S.toneMapping), M.push(S.numClippingPlanes), M.push(S.numClipIntersection), M.push(S.depthPacking);
  }
  function E(M, S) {
    o.disableAll(), S.supportsVertexTextures && o.enable(0), S.instancing && o.enable(1), S.instancingColor && o.enable(2), S.instancingMorph && o.enable(3), S.matcap && o.enable(4), S.envMap && o.enable(5), S.normalMapObjectSpace && o.enable(6), S.normalMapTangentSpace && o.enable(7), S.clearcoat && o.enable(8), S.iridescence && o.enable(9), S.alphaTest && o.enable(10), S.vertexColors && o.enable(11), S.vertexAlphas && o.enable(12), S.vertexUv1s && o.enable(13), S.vertexUv2s && o.enable(14), S.vertexUv3s && o.enable(15), S.vertexTangents && o.enable(16), S.anisotropy && o.enable(17), S.alphaHash && o.enable(18), S.batching && o.enable(19), S.dispersion && o.enable(20), S.batchingColor && o.enable(21), M.push(o.mask), o.disableAll(), S.fog && o.enable(0), S.useFog && o.enable(1), S.flatShading && o.enable(2), S.logarithmicDepthBuffer && o.enable(3), S.reverseDepthBuffer && o.enable(4), S.skinning && o.enable(5), S.morphTargets && o.enable(6), S.morphNormals && o.enable(7), S.morphColors && o.enable(8), S.premultipliedAlpha && o.enable(9), S.shadowMapEnabled && o.enable(10), S.doubleSided && o.enable(11), S.flipSided && o.enable(12), S.useDepthPacking && o.enable(13), S.dithering && o.enable(14), S.transmission && o.enable(15), S.sheen && o.enable(16), S.opaque && o.enable(17), S.pointsUvs && o.enable(18), S.decodeVideoTexture && o.enable(19), S.decodeVideoTextureEmissive && o.enable(20), S.alphaToCoverage && o.enable(21), M.push(o.mask);
  }
  function y(M) {
    const S = g[M.type];
    let I;
    if (S) {
      const q = An[S];
      I = Sf.clone(q.uniforms);
    } else I = M.uniforms;
    return I;
  }
  function P(M, S) {
    let I;
    for (let q = 0, z = h.length; q < z; q++) {
      const X = h[q];
      if (X.cacheKey === S) {
        I = X, ++I.usedTimes;
        break;
      }
    }
    return I === void 0 && (I = new Av(i3, S, M, r), h.push(I)), I;
  }
  function w(M) {
    if (--M.usedTimes === 0) {
      const S = h.indexOf(M);
      h[S] = h[h.length - 1], h.pop(), M.destroy();
    }
  }
  function R(M) {
    l.remove(M);
  }
  function N() {
    l.dispose();
  }
  return { getParameters: m, getProgramCacheKey: f, getUniforms: y, acquireProgram: P, releaseProgram: w, releaseShaderCache: R, programs: h, dispose: N };
}
function Iv() {
  let i3 = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i3.has(a);
  }
  function t(a) {
    let o = i3.get(a);
    return o === void 0 && (o = {}, i3.set(a, o)), o;
  }
  function n(a) {
    i3.delete(a);
  }
  function s(a, o, l) {
    i3.get(a)[o] = l;
  }
  function r() {
    i3 = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: n, update: s, dispose: r };
}
function Dv(i3, e) {
  return i3.groupOrder !== e.groupOrder ? i3.groupOrder - e.groupOrder : i3.renderOrder !== e.renderOrder ? i3.renderOrder - e.renderOrder : i3.material.id !== e.material.id ? i3.material.id - e.material.id : i3.z !== e.z ? i3.z - e.z : i3.id - e.id;
}
function oh(i3, e) {
  return i3.groupOrder !== e.groupOrder ? i3.groupOrder - e.groupOrder : i3.renderOrder !== e.renderOrder ? i3.renderOrder - e.renderOrder : i3.z !== e.z ? e.z - i3.z : i3.id - e.id;
}
function lh() {
  const i3 = [];
  let e = 0;
  const t = [], n = [], s = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, s.length = 0;
  }
  function a(u, d, p, g, _, m) {
    let f = i3[e];
    return f === void 0 ? (f = { id: u.id, object: u, geometry: d, material: p, groupOrder: g, renderOrder: u.renderOrder, z: _, group: m }, i3[e] = f) : (f.id = u.id, f.object = u, f.geometry = d, f.material = p, f.groupOrder = g, f.renderOrder = u.renderOrder, f.z = _, f.group = m), e++, f;
  }
  function o(u, d, p, g, _, m) {
    const f = a(u, d, p, g, _, m);
    p.transmission > 0 ? n.push(f) : p.transparent === true ? s.push(f) : t.push(f);
  }
  function l(u, d, p, g, _, m) {
    const f = a(u, d, p, g, _, m);
    p.transmission > 0 ? n.unshift(f) : p.transparent === true ? s.unshift(f) : t.unshift(f);
  }
  function c(u, d) {
    t.length > 1 && t.sort(u || Dv), n.length > 1 && n.sort(d || oh), s.length > 1 && s.sort(d || oh);
  }
  function h() {
    for (let u = e, d = i3.length; u < d; u++) {
      const p = i3[u];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: s, init: r, push: o, unshift: l, finish: h, sort: c };
}
function Lv() {
  let i3 = /* @__PURE__ */ new WeakMap();
  function e(n, s) {
    const r = i3.get(n);
    let a;
    return r === void 0 ? (a = new lh(), i3.set(n, [a])) : s >= r.length ? (a = new lh(), r.push(a)) : a = r[s], a;
  }
  function t() {
    i3 = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function Uv() {
  const i3 = {};
  return { get: function(e) {
    if (i3[e.id] !== void 0) return i3[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new C(), color: new Te() };
        break;
      case "SpotLight":
        t = { position: new C(), direction: new C(), color: new Te(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new C(), color: new Te(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new C(), skyColor: new Te(), groundColor: new Te() };
        break;
      case "RectAreaLight":
        t = { color: new Te(), position: new C(), halfWidth: new C(), halfHeight: new C() };
        break;
    }
    return i3[e.id] = t, t;
  } };
}
function Nv() {
  const i3 = {};
  return { get: function(e) {
    if (i3[e.id] !== void 0) return i3[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new _e() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new _e() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new _e(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return i3[e.id] = t, t;
  } };
}
let Fv = 0;
function Ov(i3, e) {
  return (e.castShadow ? 2 : 0) - (i3.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i3.map ? 1 : 0);
}
function Bv(i3) {
  const e = new Uv(), t = Nv(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new C());
  const s = new C(), r = new De(), a = new De();
  function o(c) {
    let h = 0, u = 0, d = 0;
    for (let M = 0; M < 9; M++) n.probe[M].set(0, 0, 0);
    let p = 0, g = 0, _ = 0, m = 0, f = 0, T = 0, E = 0, y = 0, P = 0, w = 0, R = 0;
    c.sort(Ov);
    for (let M = 0, S = c.length; M < S; M++) {
      const I = c[M], q = I.color, z = I.intensity, X = I.distance, J = I.shadow && I.shadow.map ? I.shadow.map.texture : null;
      if (I.isAmbientLight) h += q.r * z, u += q.g * z, d += q.b * z;
      else if (I.isLightProbe) {
        for (let G = 0; G < 9; G++) n.probe[G].addScaledVector(I.sh.coefficients[G], z);
        R++;
      } else if (I.isDirectionalLight) {
        const G = e.get(I);
        if (G.color.copy(I.color).multiplyScalar(I.intensity), I.castShadow) {
          const te = I.shadow, V = t.get(I);
          V.shadowIntensity = te.intensity, V.shadowBias = te.bias, V.shadowNormalBias = te.normalBias, V.shadowRadius = te.radius, V.shadowMapSize = te.mapSize, n.directionalShadow[p] = V, n.directionalShadowMap[p] = J, n.directionalShadowMatrix[p] = I.shadow.matrix, T++;
        }
        n.directional[p] = G, p++;
      } else if (I.isSpotLight) {
        const G = e.get(I);
        G.position.setFromMatrixPosition(I.matrixWorld), G.color.copy(q).multiplyScalar(z), G.distance = X, G.coneCos = Math.cos(I.angle), G.penumbraCos = Math.cos(I.angle * (1 - I.penumbra)), G.decay = I.decay, n.spot[_] = G;
        const te = I.shadow;
        if (I.map && (n.spotLightMap[P] = I.map, P++, te.updateMatrices(I), I.castShadow && w++), n.spotLightMatrix[_] = te.matrix, I.castShadow) {
          const V = t.get(I);
          V.shadowIntensity = te.intensity, V.shadowBias = te.bias, V.shadowNormalBias = te.normalBias, V.shadowRadius = te.radius, V.shadowMapSize = te.mapSize, n.spotShadow[_] = V, n.spotShadowMap[_] = J, y++;
        }
        _++;
      } else if (I.isRectAreaLight) {
        const G = e.get(I);
        G.color.copy(q).multiplyScalar(z), G.halfWidth.set(I.width * 0.5, 0, 0), G.halfHeight.set(0, I.height * 0.5, 0), n.rectArea[m] = G, m++;
      } else if (I.isPointLight) {
        const G = e.get(I);
        if (G.color.copy(I.color).multiplyScalar(I.intensity), G.distance = I.distance, G.decay = I.decay, I.castShadow) {
          const te = I.shadow, V = t.get(I);
          V.shadowIntensity = te.intensity, V.shadowBias = te.bias, V.shadowNormalBias = te.normalBias, V.shadowRadius = te.radius, V.shadowMapSize = te.mapSize, V.shadowCameraNear = te.camera.near, V.shadowCameraFar = te.camera.far, n.pointShadow[g] = V, n.pointShadowMap[g] = J, n.pointShadowMatrix[g] = I.shadow.matrix, E++;
        }
        n.point[g] = G, g++;
      } else if (I.isHemisphereLight) {
        const G = e.get(I);
        G.skyColor.copy(I.color).multiplyScalar(z), G.groundColor.copy(I.groundColor).multiplyScalar(z), n.hemi[f] = G, f++;
      }
    }
    m > 0 && (i3.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = ie.LTC_FLOAT_1, n.rectAreaLTC2 = ie.LTC_FLOAT_2) : (n.rectAreaLTC1 = ie.LTC_HALF_1, n.rectAreaLTC2 = ie.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
    const N = n.hash;
    (N.directionalLength !== p || N.pointLength !== g || N.spotLength !== _ || N.rectAreaLength !== m || N.hemiLength !== f || N.numDirectionalShadows !== T || N.numPointShadows !== E || N.numSpotShadows !== y || N.numSpotMaps !== P || N.numLightProbes !== R) && (n.directional.length = p, n.spot.length = _, n.rectArea.length = m, n.point.length = g, n.hemi.length = f, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = E, n.pointShadowMap.length = E, n.spotShadow.length = y, n.spotShadowMap.length = y, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = E, n.spotLightMatrix.length = y + P - w, n.spotLightMap.length = P, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = R, N.directionalLength = p, N.pointLength = g, N.spotLength = _, N.rectAreaLength = m, N.hemiLength = f, N.numDirectionalShadows = T, N.numPointShadows = E, N.numSpotShadows = y, N.numSpotMaps = P, N.numLightProbes = R, n.version = Fv++);
  }
  function l(c, h) {
    let u = 0, d = 0, p = 0, g = 0, _ = 0;
    const m = h.matrixWorldInverse;
    for (let f = 0, T = c.length; f < T; f++) {
      const E = c[f];
      if (E.isDirectionalLight) {
        const y = n.directional[u];
        y.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(m), u++;
      } else if (E.isSpotLight) {
        const y = n.spot[p];
        y.position.setFromMatrixPosition(E.matrixWorld), y.position.applyMatrix4(m), y.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(m), p++;
      } else if (E.isRectAreaLight) {
        const y = n.rectArea[g];
        y.position.setFromMatrixPosition(E.matrixWorld), y.position.applyMatrix4(m), a.identity(), r.copy(E.matrixWorld), r.premultiply(m), a.extractRotation(r), y.halfWidth.set(E.width * 0.5, 0, 0), y.halfHeight.set(0, E.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), g++;
      } else if (E.isPointLight) {
        const y = n.point[d];
        y.position.setFromMatrixPosition(E.matrixWorld), y.position.applyMatrix4(m), d++;
      } else if (E.isHemisphereLight) {
        const y = n.hemi[_];
        y.direction.setFromMatrixPosition(E.matrixWorld), y.direction.transformDirection(m), _++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function ch(i3) {
  const e = new Bv(i3), t = [], n = [];
  function s(h) {
    c.camera = h, t.length = 0, n.length = 0;
  }
  function r(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: s, state: c, setupLights: o, setupLightsView: l, pushLight: r, pushShadow: a };
}
function kv(i3) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s, r = 0) {
    const a = e.get(s);
    let o;
    return a === void 0 ? (o = new ch(i3), e.set(s, [o])) : r >= a.length ? (o = new ch(i3), a.push(o)) : o = a[r], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: n };
}
const zv = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Hv = `uniform sampler2D shadow_pass;
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
function Vv(i3, e, t) {
  let n = new El();
  const s = new _e(), r = new _e(), a = new $e(), o = new Ff({ depthPacking: wd }), l = new Of(), c = {}, h = t.maxTextureSize, u = { [Cn]: St, [St]: Cn, [Yt]: Yt }, d = new Gt({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new _e() }, radius: { value: 4 } }, vertexShader: zv, fragmentShader: Hv }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Sn();
  g.setAttribute("position", new It(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const _ = new rt(g, d), m = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Nh;
  let f = this.type;
  this.render = function(w, R, N) {
    if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || w.length === 0) return;
    const M = i3.getRenderTarget(), S = i3.getActiveCubeFace(), I = i3.getActiveMipmapLevel(), q = i3.state;
    q.setBlending(qt), q.buffers.color.setClear(1, 1, 1, 1), q.buffers.depth.setTest(true), q.setScissorTest(false);
    const z = f !== zn && this.type === zn, X = f === zn && this.type !== zn;
    for (let J = 0, G = w.length; J < G; J++) {
      const te = w[J], V = te.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", te, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === false && V.needsUpdate === false) continue;
      s.copy(V.mapSize);
      const ae = V.getFrameExtents();
      if (s.multiply(ae), r.copy(V.mapSize), (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / ae.x), s.x = r.x * ae.x, V.mapSize.x = r.x), s.y > h && (r.y = Math.floor(h / ae.y), s.y = r.y * ae.y, V.mapSize.y = r.y)), V.map === null || z === true || X === true) {
        const ye = this.type !== zn ? { minFilter: Vt, magFilter: Vt } : {};
        V.map !== null && V.map.dispose(), V.map = new Bt(s.x, s.y, ye), V.map.texture.name = te.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      i3.setRenderTarget(V.map), i3.clear();
      const de = V.getViewportCount();
      for (let ye = 0; ye < de; ye++) {
        const Be = V.getViewport(ye);
        a.set(r.x * Be.x, r.y * Be.y, r.x * Be.z, r.y * Be.w), q.viewport(a), V.updateMatrices(te, ye), n = V.getFrustum(), y(R, N, V.camera, te, this.type);
      }
      V.isPointLightShadow !== true && this.type === zn && T(V, N), V.needsUpdate = false;
    }
    f = this.type, m.needsUpdate = false, i3.setRenderTarget(M, S, I);
  };
  function T(w, R) {
    const N = e.update(_);
    d.defines.VSM_SAMPLES !== w.blurSamples && (d.defines.VSM_SAMPLES = w.blurSamples, p.defines.VSM_SAMPLES = w.blurSamples, d.needsUpdate = true, p.needsUpdate = true), w.mapPass === null && (w.mapPass = new Bt(s.x, s.y)), d.uniforms.shadow_pass.value = w.map.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, i3.setRenderTarget(w.mapPass), i3.clear(), i3.renderBufferDirect(R, null, N, d, _, null), p.uniforms.shadow_pass.value = w.mapPass.texture, p.uniforms.resolution.value = w.mapSize, p.uniforms.radius.value = w.radius, i3.setRenderTarget(w.map), i3.clear(), i3.renderBufferDirect(R, null, N, p, _, null);
  }
  function E(w, R, N, M) {
    let S = null;
    const I = N.isPointLight === true ? w.customDistanceMaterial : w.customDepthMaterial;
    if (I !== void 0) S = I;
    else if (S = N.isPointLight === true ? l : o, i3.localClippingEnabled && R.clipShadows === true && Array.isArray(R.clippingPlanes) && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0 || R.map && R.alphaTest > 0) {
      const q = S.uuid, z = R.uuid;
      let X = c[q];
      X === void 0 && (X = {}, c[q] = X);
      let J = X[z];
      J === void 0 && (J = S.clone(), X[z] = J, R.addEventListener("dispose", P)), S = J;
    }
    if (S.visible = R.visible, S.wireframe = R.wireframe, M === zn ? S.side = R.shadowSide !== null ? R.shadowSide : R.side : S.side = R.shadowSide !== null ? R.shadowSide : u[R.side], S.alphaMap = R.alphaMap, S.alphaTest = R.alphaTest, S.map = R.map, S.clipShadows = R.clipShadows, S.clippingPlanes = R.clippingPlanes, S.clipIntersection = R.clipIntersection, S.displacementMap = R.displacementMap, S.displacementScale = R.displacementScale, S.displacementBias = R.displacementBias, S.wireframeLinewidth = R.wireframeLinewidth, S.linewidth = R.linewidth, N.isPointLight === true && S.isMeshDistanceMaterial === true) {
      const q = i3.properties.get(S);
      q.light = N;
    }
    return S;
  }
  function y(w, R, N, M, S) {
    if (w.visible === false) return;
    if (w.layers.test(R.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && S === zn) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, w.matrixWorld);
      const z = e.update(w), X = w.material;
      if (Array.isArray(X)) {
        const J = z.groups;
        for (let G = 0, te = J.length; G < te; G++) {
          const V = J[G], ae = X[V.materialIndex];
          if (ae && ae.visible) {
            const de = E(w, ae, M, S);
            w.onBeforeShadow(i3, w, R, N, z, de, V), i3.renderBufferDirect(N, null, z, de, w, V), w.onAfterShadow(i3, w, R, N, z, de, V);
          }
        }
      } else if (X.visible) {
        const J = E(w, X, M, S);
        w.onBeforeShadow(i3, w, R, N, z, J, null), i3.renderBufferDirect(N, null, z, J, w, null), w.onAfterShadow(i3, w, R, N, z, J, null);
      }
    }
    const q = w.children;
    for (let z = 0, X = q.length; z < X; z++) y(q[z], R, N, M, S);
  }
  function P(w) {
    w.target.removeEventListener("dispose", P);
    for (const N in c) {
      const M = c[N], S = w.target.uuid;
      S in M && (M[S].dispose(), delete M[S]);
    }
  }
}
const Gv = { [po]: $r, [mo]: vo, [go]: xo, [ds]: _o, [$r]: po, [vo]: mo, [xo]: go, [_o]: ds };
function Wv(i3, e) {
  function t() {
    let D = false;
    const se = new $e();
    let H = null;
    const $ = new $e(0, 0, 0, 0);
    return { setMask: function(he) {
      H !== he && !D && (i3.colorMask(he, he, he, he), H = he);
    }, setLocked: function(he) {
      D = he;
    }, setClear: function(he, ce, Le, mt, Lt) {
      Lt === true && (he *= mt, ce *= mt, Le *= mt), se.set(he, ce, Le, mt), $.equals(se) === false && (i3.clearColor(he, ce, Le, mt), $.copy(se));
    }, reset: function() {
      D = false, H = null, $.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let D = false, se = false, H = null, $ = null, he = null;
    return { setReversed: function(ce) {
      if (se !== ce) {
        const Le = e.get("EXT_clip_control");
        se ? Le.clipControlEXT(Le.LOWER_LEFT_EXT, Le.ZERO_TO_ONE_EXT) : Le.clipControlEXT(Le.LOWER_LEFT_EXT, Le.NEGATIVE_ONE_TO_ONE_EXT);
        const mt = he;
        he = null, this.setClear(mt);
      }
      se = ce;
    }, getReversed: function() {
      return se;
    }, setTest: function(ce) {
      ce ? oe(i3.DEPTH_TEST) : we(i3.DEPTH_TEST);
    }, setMask: function(ce) {
      H !== ce && !D && (i3.depthMask(ce), H = ce);
    }, setFunc: function(ce) {
      if (se && (ce = Gv[ce]), $ !== ce) {
        switch (ce) {
          case po:
            i3.depthFunc(i3.NEVER);
            break;
          case $r:
            i3.depthFunc(i3.ALWAYS);
            break;
          case mo:
            i3.depthFunc(i3.LESS);
            break;
          case ds:
            i3.depthFunc(i3.LEQUAL);
            break;
          case go:
            i3.depthFunc(i3.EQUAL);
            break;
          case _o:
            i3.depthFunc(i3.GEQUAL);
            break;
          case vo:
            i3.depthFunc(i3.GREATER);
            break;
          case xo:
            i3.depthFunc(i3.NOTEQUAL);
            break;
          default:
            i3.depthFunc(i3.LEQUAL);
        }
        $ = ce;
      }
    }, setLocked: function(ce) {
      D = ce;
    }, setClear: function(ce) {
      he !== ce && (se && (ce = 1 - ce), i3.clearDepth(ce), he = ce);
    }, reset: function() {
      D = false, H = null, $ = null, he = null, se = false;
    } };
  }
  function s() {
    let D = false, se = null, H = null, $ = null, he = null, ce = null, Le = null, mt = null, Lt = null;
    return { setTest: function(it) {
      D || (it ? oe(i3.STENCIL_TEST) : we(i3.STENCIL_TEST));
    }, setMask: function(it) {
      se !== it && !D && (i3.stencilMask(it), se = it);
    }, setFunc: function(it, un, Ln) {
      (H !== it || $ !== un || he !== Ln) && (i3.stencilFunc(it, un, Ln), H = it, $ = un, he = Ln);
    }, setOp: function(it, un, Ln) {
      (ce !== it || Le !== un || mt !== Ln) && (i3.stencilOp(it, un, Ln), ce = it, Le = un, mt = Ln);
    }, setLocked: function(it) {
      D = it;
    }, setClear: function(it) {
      Lt !== it && (i3.clearStencil(it), Lt = it);
    }, reset: function() {
      D = false, se = null, H = null, $ = null, he = null, ce = null, Le = null, mt = null, Lt = null;
    } };
  }
  const r = new t(), a = new n(), o = new s(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), p = [], g = null, _ = false, m = null, f = null, T = null, E = null, y = null, P = null, w = null, R = new Te(0, 0, 0), N = 0, M = false, S = null, I = null, q = null, z = null, X = null;
  const J = i3.getParameter(i3.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let G = false, te = 0;
  const V = i3.getParameter(i3.VERSION);
  V.indexOf("WebGL") !== -1 ? (te = parseFloat(/^WebGL (\d)/.exec(V)[1]), G = te >= 1) : V.indexOf("OpenGL ES") !== -1 && (te = parseFloat(/^OpenGL ES (\d)/.exec(V)[1]), G = te >= 2);
  let ae = null, de = {};
  const ye = i3.getParameter(i3.SCISSOR_BOX), Be = i3.getParameter(i3.VIEWPORT), lt = new $e().fromArray(ye), Y = new $e().fromArray(Be);
  function ne(D, se, H, $) {
    const he = new Uint8Array(4), ce = i3.createTexture();
    i3.bindTexture(D, ce), i3.texParameteri(D, i3.TEXTURE_MIN_FILTER, i3.NEAREST), i3.texParameteri(D, i3.TEXTURE_MAG_FILTER, i3.NEAREST);
    for (let Le = 0; Le < H; Le++) D === i3.TEXTURE_3D || D === i3.TEXTURE_2D_ARRAY ? i3.texImage3D(se, 0, i3.RGBA, 1, 1, $, 0, i3.RGBA, i3.UNSIGNED_BYTE, he) : i3.texImage2D(se + Le, 0, i3.RGBA, 1, 1, 0, i3.RGBA, i3.UNSIGNED_BYTE, he);
    return ce;
  }
  const ve = {};
  ve[i3.TEXTURE_2D] = ne(i3.TEXTURE_2D, i3.TEXTURE_2D, 1), ve[i3.TEXTURE_CUBE_MAP] = ne(i3.TEXTURE_CUBE_MAP, i3.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ve[i3.TEXTURE_2D_ARRAY] = ne(i3.TEXTURE_2D_ARRAY, i3.TEXTURE_2D_ARRAY, 1, 1), ve[i3.TEXTURE_3D] = ne(i3.TEXTURE_3D, i3.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), oe(i3.DEPTH_TEST), a.setFunc(ds), Ve(false), Ge(ql), oe(i3.CULL_FACE), A(qt);
  function oe(D) {
    h[D] !== true && (i3.enable(D), h[D] = true);
  }
  function we(D) {
    h[D] !== false && (i3.disable(D), h[D] = false);
  }
  function Pe(D, se) {
    return u[D] !== se ? (i3.bindFramebuffer(D, se), u[D] = se, D === i3.DRAW_FRAMEBUFFER && (u[i3.FRAMEBUFFER] = se), D === i3.FRAMEBUFFER && (u[i3.DRAW_FRAMEBUFFER] = se), true) : false;
  }
  function ke(D, se) {
    let H = p, $ = false;
    if (D) {
      H = d.get(se), H === void 0 && (H = [], d.set(se, H));
      const he = D.textures;
      if (H.length !== he.length || H[0] !== i3.COLOR_ATTACHMENT0) {
        for (let ce = 0, Le = he.length; ce < Le; ce++) H[ce] = i3.COLOR_ATTACHMENT0 + ce;
        H.length = he.length, $ = true;
      }
    } else H[0] !== i3.BACK && (H[0] = i3.BACK, $ = true);
    $ && i3.drawBuffers(H);
  }
  function ft(D) {
    return g !== D ? (i3.useProgram(D), g = D, true) : false;
  }
  const qe = { [Ai]: i3.FUNC_ADD, [Zu]: i3.FUNC_SUBTRACT, [Ju]: i3.FUNC_REVERSE_SUBTRACT };
  qe[Qu] = i3.MIN, qe[ed] = i3.MAX;
  const _t = { [td]: i3.ZERO, [nd]: i3.ONE, [id]: i3.SRC_COLOR, [uo]: i3.SRC_ALPHA, [cd]: i3.SRC_ALPHA_SATURATE, [od]: i3.DST_COLOR, [rd]: i3.DST_ALPHA, [sd]: i3.ONE_MINUS_SRC_COLOR, [fo]: i3.ONE_MINUS_SRC_ALPHA, [ld]: i3.ONE_MINUS_DST_COLOR, [ad]: i3.ONE_MINUS_DST_ALPHA, [hd]: i3.CONSTANT_COLOR, [ud]: i3.ONE_MINUS_CONSTANT_COLOR, [dd]: i3.CONSTANT_ALPHA, [fd]: i3.ONE_MINUS_CONSTANT_ALPHA };
  function A(D, se, H, $, he, ce, Le, mt, Lt, it) {
    if (D === qt) {
      _ === true && (we(i3.BLEND), _ = false);
      return;
    }
    if (_ === false && (oe(i3.BLEND), _ = true), D !== $u) {
      if (D !== m || it !== M) {
        if ((f !== Ai || y !== Ai) && (i3.blendEquation(i3.FUNC_ADD), f = Ai, y = Ai), it) switch (D) {
          case os:
            i3.blendFuncSeparate(i3.ONE, i3.ONE_MINUS_SRC_ALPHA, i3.ONE, i3.ONE_MINUS_SRC_ALPHA);
            break;
          case jl:
            i3.blendFunc(i3.ONE, i3.ONE);
            break;
          case Kl:
            i3.blendFuncSeparate(i3.ZERO, i3.ONE_MINUS_SRC_COLOR, i3.ZERO, i3.ONE);
            break;
          case $l:
            i3.blendFuncSeparate(i3.ZERO, i3.SRC_COLOR, i3.ZERO, i3.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", D);
            break;
        }
        else switch (D) {
          case os:
            i3.blendFuncSeparate(i3.SRC_ALPHA, i3.ONE_MINUS_SRC_ALPHA, i3.ONE, i3.ONE_MINUS_SRC_ALPHA);
            break;
          case jl:
            i3.blendFunc(i3.SRC_ALPHA, i3.ONE);
            break;
          case Kl:
            i3.blendFuncSeparate(i3.ZERO, i3.ONE_MINUS_SRC_COLOR, i3.ZERO, i3.ONE);
            break;
          case $l:
            i3.blendFunc(i3.ZERO, i3.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", D);
            break;
        }
        T = null, E = null, P = null, w = null, R.set(0, 0, 0), N = 0, m = D, M = it;
      }
      return;
    }
    he = he || se, ce = ce || H, Le = Le || $, (se !== f || he !== y) && (i3.blendEquationSeparate(qe[se], qe[he]), f = se, y = he), (H !== T || $ !== E || ce !== P || Le !== w) && (i3.blendFuncSeparate(_t[H], _t[$], _t[ce], _t[Le]), T = H, E = $, P = ce, w = Le), (mt.equals(R) === false || Lt !== N) && (i3.blendColor(mt.r, mt.g, mt.b, Lt), R.copy(mt), N = Lt), m = D, M = false;
  }
  function en(D, se) {
    D.side === Yt ? we(i3.CULL_FACE) : oe(i3.CULL_FACE);
    let H = D.side === St;
    se && (H = !H), Ve(H), D.blending === os && D.transparent === false ? A(qt) : A(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), a.setFunc(D.depthFunc), a.setTest(D.depthTest), a.setMask(D.depthWrite), r.setMask(D.colorWrite);
    const $ = D.stencilWrite;
    o.setTest($), $ && (o.setMask(D.stencilWriteMask), o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), ut(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === true ? oe(i3.SAMPLE_ALPHA_TO_COVERAGE) : we(i3.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ve(D) {
    S !== D && (D ? i3.frontFace(i3.CW) : i3.frontFace(i3.CCW), S = D);
  }
  function Ge(D) {
    D !== qu ? (oe(i3.CULL_FACE), D !== I && (D === ql ? i3.cullFace(i3.BACK) : D === ju ? i3.cullFace(i3.FRONT) : i3.cullFace(i3.FRONT_AND_BACK))) : we(i3.CULL_FACE), I = D;
  }
  function Me(D) {
    D !== q && (G && i3.lineWidth(D), q = D);
  }
  function ut(D, se, H) {
    D ? (oe(i3.POLYGON_OFFSET_FILL), (z !== se || X !== H) && (i3.polygonOffset(se, H), z = se, X = H)) : we(i3.POLYGON_OFFSET_FILL);
  }
  function Se(D) {
    D ? oe(i3.SCISSOR_TEST) : we(i3.SCISSOR_TEST);
  }
  function b(D) {
    D === void 0 && (D = i3.TEXTURE0 + J - 1), ae !== D && (i3.activeTexture(D), ae = D);
  }
  function v(D, se, H) {
    H === void 0 && (ae === null ? H = i3.TEXTURE0 + J - 1 : H = ae);
    let $ = de[H];
    $ === void 0 && ($ = { type: void 0, texture: void 0 }, de[H] = $), ($.type !== D || $.texture !== se) && (ae !== H && (i3.activeTexture(H), ae = H), i3.bindTexture(D, se || ve[D]), $.type = D, $.texture = se);
  }
  function F() {
    const D = de[ae];
    D !== void 0 && D.type !== void 0 && (i3.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function K() {
    try {
      i3.compressedTexImage2D.apply(i3, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Z() {
    try {
      i3.compressedTexImage3D.apply(i3, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function W() {
    try {
      i3.texSubImage2D.apply(i3, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function xe() {
    try {
      i3.texSubImage3D.apply(i3, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function le() {
    try {
      i3.compressedTexSubImage2D.apply(i3, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function fe() {
    try {
      i3.compressedTexSubImage3D.apply(i3, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function je() {
    try {
      i3.texStorage2D.apply(i3, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ee() {
    try {
      i3.texStorage3D.apply(i3, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function pe() {
    try {
      i3.texImage2D.apply(i3, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ae() {
    try {
      i3.texImage3D.apply(i3, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Re(D) {
    lt.equals(D) === false && (i3.scissor(D.x, D.y, D.z, D.w), lt.copy(D));
  }
  function me(D) {
    Y.equals(D) === false && (i3.viewport(D.x, D.y, D.z, D.w), Y.copy(D));
  }
  function We(D, se) {
    let H = c.get(se);
    H === void 0 && (H = /* @__PURE__ */ new WeakMap(), c.set(se, H));
    let $ = H.get(D);
    $ === void 0 && ($ = i3.getUniformBlockIndex(se, D.name), H.set(D, $));
  }
  function Ne(D, se) {
    const $ = c.get(se).get(D);
    l.get(se) !== $ && (i3.uniformBlockBinding(se, $, D.__bindingPointIndex), l.set(se, $));
  }
  function ct() {
    i3.disable(i3.BLEND), i3.disable(i3.CULL_FACE), i3.disable(i3.DEPTH_TEST), i3.disable(i3.POLYGON_OFFSET_FILL), i3.disable(i3.SCISSOR_TEST), i3.disable(i3.STENCIL_TEST), i3.disable(i3.SAMPLE_ALPHA_TO_COVERAGE), i3.blendEquation(i3.FUNC_ADD), i3.blendFunc(i3.ONE, i3.ZERO), i3.blendFuncSeparate(i3.ONE, i3.ZERO, i3.ONE, i3.ZERO), i3.blendColor(0, 0, 0, 0), i3.colorMask(true, true, true, true), i3.clearColor(0, 0, 0, 0), i3.depthMask(true), i3.depthFunc(i3.LESS), a.setReversed(false), i3.clearDepth(1), i3.stencilMask(4294967295), i3.stencilFunc(i3.ALWAYS, 0, 4294967295), i3.stencilOp(i3.KEEP, i3.KEEP, i3.KEEP), i3.clearStencil(0), i3.cullFace(i3.BACK), i3.frontFace(i3.CCW), i3.polygonOffset(0, 0), i3.activeTexture(i3.TEXTURE0), i3.bindFramebuffer(i3.FRAMEBUFFER, null), i3.bindFramebuffer(i3.DRAW_FRAMEBUFFER, null), i3.bindFramebuffer(i3.READ_FRAMEBUFFER, null), i3.useProgram(null), i3.lineWidth(1), i3.scissor(0, 0, i3.canvas.width, i3.canvas.height), i3.viewport(0, 0, i3.canvas.width, i3.canvas.height), h = {}, ae = null, de = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), p = [], g = null, _ = false, m = null, f = null, T = null, E = null, y = null, P = null, w = null, R = new Te(0, 0, 0), N = 0, M = false, S = null, I = null, q = null, z = null, X = null, lt.set(0, 0, i3.canvas.width, i3.canvas.height), Y.set(0, 0, i3.canvas.width, i3.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: r, depth: a, stencil: o }, enable: oe, disable: we, bindFramebuffer: Pe, drawBuffers: ke, useProgram: ft, setBlending: A, setMaterial: en, setFlipSided: Ve, setCullFace: Ge, setLineWidth: Me, setPolygonOffset: ut, setScissorTest: Se, activeTexture: b, bindTexture: v, unbindTexture: F, compressedTexImage2D: K, compressedTexImage3D: Z, texImage2D: pe, texImage3D: Ae, updateUBOMapping: We, uniformBlockBinding: Ne, texStorage2D: je, texStorage3D: ee, texSubImage2D: W, texSubImage3D: xe, compressedTexSubImage2D: le, compressedTexSubImage3D: fe, scissor: Re, viewport: me, reset: ct };
}
function Xv(i3, e, t, n, s, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new _e(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let p = false;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(b, v) {
    return p ? new OffscreenCanvas(b, v) : tr("canvas");
  }
  function _(b, v, F) {
    let K = 1;
    const Z = Se(b);
    if ((Z.width > F || Z.height > F) && (K = F / Math.max(Z.width, Z.height)), K < 1) if (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && b instanceof ImageBitmap || typeof VideoFrame < "u" && b instanceof VideoFrame) {
      const W = Math.floor(K * Z.width), xe = Math.floor(K * Z.height);
      u === void 0 && (u = g(W, xe));
      const le = v ? g(W, xe) : u;
      return le.width = W, le.height = xe, le.getContext("2d").drawImage(b, 0, 0, W, xe), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + W + "x" + xe + ")."), le;
    } else return "data" in b && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), b;
    return b;
  }
  function m(b) {
    return b.generateMipmaps;
  }
  function f(b) {
    i3.generateMipmap(b);
  }
  function T(b) {
    return b.isWebGLCubeRenderTarget ? i3.TEXTURE_CUBE_MAP : b.isWebGL3DRenderTarget ? i3.TEXTURE_3D : b.isWebGLArrayRenderTarget || b.isCompressedArrayTexture ? i3.TEXTURE_2D_ARRAY : i3.TEXTURE_2D;
  }
  function E(b, v, F, K, Z = false) {
    if (b !== null) {
      if (i3[b] !== void 0) return i3[b];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + b + "'");
    }
    let W = v;
    if (v === i3.RED && (F === i3.FLOAT && (W = i3.R32F), F === i3.HALF_FLOAT && (W = i3.R16F), F === i3.UNSIGNED_BYTE && (W = i3.R8)), v === i3.RED_INTEGER && (F === i3.UNSIGNED_BYTE && (W = i3.R8UI), F === i3.UNSIGNED_SHORT && (W = i3.R16UI), F === i3.UNSIGNED_INT && (W = i3.R32UI), F === i3.BYTE && (W = i3.R8I), F === i3.SHORT && (W = i3.R16I), F === i3.INT && (W = i3.R32I)), v === i3.RG && (F === i3.FLOAT && (W = i3.RG32F), F === i3.HALF_FLOAT && (W = i3.RG16F), F === i3.UNSIGNED_BYTE && (W = i3.RG8)), v === i3.RG_INTEGER && (F === i3.UNSIGNED_BYTE && (W = i3.RG8UI), F === i3.UNSIGNED_SHORT && (W = i3.RG16UI), F === i3.UNSIGNED_INT && (W = i3.RG32UI), F === i3.BYTE && (W = i3.RG8I), F === i3.SHORT && (W = i3.RG16I), F === i3.INT && (W = i3.RG32I)), v === i3.RGB_INTEGER && (F === i3.UNSIGNED_BYTE && (W = i3.RGB8UI), F === i3.UNSIGNED_SHORT && (W = i3.RGB16UI), F === i3.UNSIGNED_INT && (W = i3.RGB32UI), F === i3.BYTE && (W = i3.RGB8I), F === i3.SHORT && (W = i3.RGB16I), F === i3.INT && (W = i3.RGB32I)), v === i3.RGBA_INTEGER && (F === i3.UNSIGNED_BYTE && (W = i3.RGBA8UI), F === i3.UNSIGNED_SHORT && (W = i3.RGBA16UI), F === i3.UNSIGNED_INT && (W = i3.RGBA32UI), F === i3.BYTE && (W = i3.RGBA8I), F === i3.SHORT && (W = i3.RGBA16I), F === i3.INT && (W = i3.RGBA32I)), v === i3.RGB && F === i3.UNSIGNED_INT_5_9_9_9_REV && (W = i3.RGB9_E5), v === i3.RGBA) {
      const xe = Z ? Qr : Xe.getTransfer(K);
      F === i3.FLOAT && (W = i3.RGBA32F), F === i3.HALF_FLOAT && (W = i3.RGBA16F), F === i3.UNSIGNED_BYTE && (W = xe === at ? i3.SRGB8_ALPHA8 : i3.RGBA8), F === i3.UNSIGNED_SHORT_4_4_4_4 && (W = i3.RGBA4), F === i3.UNSIGNED_SHORT_5_5_5_1 && (W = i3.RGB5_A1);
    }
    return (W === i3.R16F || W === i3.R32F || W === i3.RG16F || W === i3.RG32F || W === i3.RGBA16F || W === i3.RGBA32F) && e.get("EXT_color_buffer_float"), W;
  }
  function y(b, v) {
    let F;
    return b ? v === null || v === Ci || v === Pi ? F = i3.DEPTH24_STENCIL8 : v === on ? F = i3.DEPTH32F_STENCIL8 : v === Js && (F = i3.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === Ci || v === Pi ? F = i3.DEPTH_COMPONENT24 : v === on ? F = i3.DEPTH_COMPONENT32F : v === Js && (F = i3.DEPTH_COMPONENT16), F;
  }
  function P(b, v) {
    return m(b) === true || b.isFramebufferTexture && b.minFilter !== Vt && b.minFilter !== Ct ? Math.log2(Math.max(v.width, v.height)) + 1 : b.mipmaps !== void 0 && b.mipmaps.length > 0 ? b.mipmaps.length : b.isCompressedTexture && Array.isArray(b.image) ? v.mipmaps.length : 1;
  }
  function w(b) {
    const v = b.target;
    v.removeEventListener("dispose", w), N(v), v.isVideoTexture && h.delete(v);
  }
  function R(b) {
    const v = b.target;
    v.removeEventListener("dispose", R), S(v);
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
    i3.deleteTexture(v.__webglTexture);
    const F = b.source, K = d.get(F);
    delete K[v.__cacheKey], a.memory.textures--;
  }
  function S(b) {
    const v = n.get(b);
    if (b.depthTexture && (b.depthTexture.dispose(), n.remove(b.depthTexture)), b.isWebGLCubeRenderTarget) for (let K = 0; K < 6; K++) {
      if (Array.isArray(v.__webglFramebuffer[K])) for (let Z = 0; Z < v.__webglFramebuffer[K].length; Z++) i3.deleteFramebuffer(v.__webglFramebuffer[K][Z]);
      else i3.deleteFramebuffer(v.__webglFramebuffer[K]);
      v.__webglDepthbuffer && i3.deleteRenderbuffer(v.__webglDepthbuffer[K]);
    }
    else {
      if (Array.isArray(v.__webglFramebuffer)) for (let K = 0; K < v.__webglFramebuffer.length; K++) i3.deleteFramebuffer(v.__webglFramebuffer[K]);
      else i3.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && i3.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && i3.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer) for (let K = 0; K < v.__webglColorRenderbuffer.length; K++) v.__webglColorRenderbuffer[K] && i3.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);
      v.__webglDepthRenderbuffer && i3.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const F = b.textures;
    for (let K = 0, Z = F.length; K < Z; K++) {
      const W = n.get(F[K]);
      W.__webglTexture && (i3.deleteTexture(W.__webglTexture), a.memory.textures--), n.remove(F[K]);
    }
    n.remove(b);
  }
  let I = 0;
  function q() {
    I = 0;
  }
  function z() {
    const b = I;
    return b >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + b + " texture units while this GPU supports only " + s.maxTextures), I += 1, b;
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
    t.bindTexture(i3.TEXTURE_2D, F.__webglTexture, i3.TEXTURE0 + v);
  }
  function G(b, v) {
    const F = n.get(b);
    if (b.version > 0 && F.__version !== b.version) {
      Y(F, b, v);
      return;
    }
    t.bindTexture(i3.TEXTURE_2D_ARRAY, F.__webglTexture, i3.TEXTURE0 + v);
  }
  function te(b, v) {
    const F = n.get(b);
    if (b.version > 0 && F.__version !== b.version) {
      Y(F, b, v);
      return;
    }
    t.bindTexture(i3.TEXTURE_3D, F.__webglTexture, i3.TEXTURE0 + v);
  }
  function V(b, v) {
    const F = n.get(b);
    if (b.version > 0 && F.__version !== b.version) {
      ne(F, b, v);
      return;
    }
    t.bindTexture(i3.TEXTURE_CUBE_MAP, F.__webglTexture, i3.TEXTURE0 + v);
  }
  const ae = { [ms]: i3.REPEAT, [oi]: i3.CLAMP_TO_EDGE, [Zr]: i3.MIRRORED_REPEAT }, de = { [Vt]: i3.NEAREST, [kh]: i3.NEAREST_MIPMAP_NEAREST, [Vs]: i3.NEAREST_MIPMAP_LINEAR, [Ct]: i3.LINEAR, [Gr]: i3.LINEAR_MIPMAP_NEAREST, [Gn]: i3.LINEAR_MIPMAP_LINEAR }, ye = { [Cd]: i3.NEVER, [Nd]: i3.ALWAYS, [Pd]: i3.LESS, [Jh]: i3.LEQUAL, [Id]: i3.EQUAL, [Ud]: i3.GEQUAL, [Dd]: i3.GREATER, [Ld]: i3.NOTEQUAL };
  function Be(b, v) {
    if (v.type === on && e.has("OES_texture_float_linear") === false && (v.magFilter === Ct || v.magFilter === Gr || v.magFilter === Vs || v.magFilter === Gn || v.minFilter === Ct || v.minFilter === Gr || v.minFilter === Vs || v.minFilter === Gn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i3.texParameteri(b, i3.TEXTURE_WRAP_S, ae[v.wrapS]), i3.texParameteri(b, i3.TEXTURE_WRAP_T, ae[v.wrapT]), (b === i3.TEXTURE_3D || b === i3.TEXTURE_2D_ARRAY) && i3.texParameteri(b, i3.TEXTURE_WRAP_R, ae[v.wrapR]), i3.texParameteri(b, i3.TEXTURE_MAG_FILTER, de[v.magFilter]), i3.texParameteri(b, i3.TEXTURE_MIN_FILTER, de[v.minFilter]), v.compareFunction && (i3.texParameteri(b, i3.TEXTURE_COMPARE_MODE, i3.COMPARE_REF_TO_TEXTURE), i3.texParameteri(b, i3.TEXTURE_COMPARE_FUNC, ye[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (v.magFilter === Vt || v.minFilter !== Vs && v.minFilter !== Gn || v.type === on && e.has("OES_texture_float_linear") === false) return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        i3.texParameterf(b, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, s.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function lt(b, v) {
    let F = false;
    b.__webglInit === void 0 && (b.__webglInit = true, v.addEventListener("dispose", w));
    const K = v.source;
    let Z = d.get(K);
    Z === void 0 && (Z = {}, d.set(K, Z));
    const W = X(v);
    if (W !== b.__cacheKey) {
      Z[W] === void 0 && (Z[W] = { texture: i3.createTexture(), usedTimes: 0 }, a.memory.textures++, F = true), Z[W].usedTimes++;
      const xe = Z[b.__cacheKey];
      xe !== void 0 && (Z[b.__cacheKey].usedTimes--, xe.usedTimes === 0 && M(v)), b.__cacheKey = W, b.__webglTexture = Z[W].texture;
    }
    return F;
  }
  function Y(b, v, F) {
    let K = i3.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (K = i3.TEXTURE_2D_ARRAY), v.isData3DTexture && (K = i3.TEXTURE_3D);
    const Z = lt(b, v), W = v.source;
    t.bindTexture(K, b.__webglTexture, i3.TEXTURE0 + F);
    const xe = n.get(W);
    if (W.version !== xe.__version || Z === true) {
      t.activeTexture(i3.TEXTURE0 + F);
      const le = Xe.getPrimaries(Xe.workingColorSpace), fe = v.colorSpace === wn ? null : Xe.getPrimaries(v.colorSpace), je = v.colorSpace === wn || le === fe ? i3.NONE : i3.BROWSER_DEFAULT_WEBGL;
      i3.pixelStorei(i3.UNPACK_FLIP_Y_WEBGL, v.flipY), i3.pixelStorei(i3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i3.pixelStorei(i3.UNPACK_ALIGNMENT, v.unpackAlignment), i3.pixelStorei(i3.UNPACK_COLORSPACE_CONVERSION_WEBGL, je);
      let ee = _(v.image, false, s.maxTextureSize);
      ee = ut(v, ee);
      const pe = r.convert(v.format, v.colorSpace), Ae = r.convert(v.type);
      let Re = E(v.internalFormat, pe, Ae, v.colorSpace, v.isVideoTexture);
      Be(K, v);
      let me;
      const We = v.mipmaps, Ne = v.isVideoTexture !== true, ct = xe.__version === void 0 || Z === true, D = W.dataReady, se = P(v, ee);
      if (v.isDepthTexture) Re = y(v.format === Ii, v.type), ct && (Ne ? t.texStorage2D(i3.TEXTURE_2D, 1, Re, ee.width, ee.height) : t.texImage2D(i3.TEXTURE_2D, 0, Re, ee.width, ee.height, 0, pe, Ae, null));
      else if (v.isDataTexture) if (We.length > 0) {
        Ne && ct && t.texStorage2D(i3.TEXTURE_2D, se, Re, We[0].width, We[0].height);
        for (let H = 0, $ = We.length; H < $; H++) me = We[H], Ne ? D && t.texSubImage2D(i3.TEXTURE_2D, H, 0, 0, me.width, me.height, pe, Ae, me.data) : t.texImage2D(i3.TEXTURE_2D, H, Re, me.width, me.height, 0, pe, Ae, me.data);
        v.generateMipmaps = false;
      } else Ne ? (ct && t.texStorage2D(i3.TEXTURE_2D, se, Re, ee.width, ee.height), D && t.texSubImage2D(i3.TEXTURE_2D, 0, 0, 0, ee.width, ee.height, pe, Ae, ee.data)) : t.texImage2D(i3.TEXTURE_2D, 0, Re, ee.width, ee.height, 0, pe, Ae, ee.data);
      else if (v.isCompressedTexture) if (v.isCompressedArrayTexture) {
        Ne && ct && t.texStorage3D(i3.TEXTURE_2D_ARRAY, se, Re, We[0].width, We[0].height, ee.depth);
        for (let H = 0, $ = We.length; H < $; H++) if (me = We[H], v.format !== ln) if (pe !== null) if (Ne) {
          if (D) if (v.layerUpdates.size > 0) {
            const he = zc(me.width, me.height, v.format, v.type);
            for (const ce of v.layerUpdates) {
              const Le = me.data.subarray(ce * he / me.data.BYTES_PER_ELEMENT, (ce + 1) * he / me.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(i3.TEXTURE_2D_ARRAY, H, 0, 0, ce, me.width, me.height, 1, pe, Le);
            }
            v.clearLayerUpdates();
          } else t.compressedTexSubImage3D(i3.TEXTURE_2D_ARRAY, H, 0, 0, 0, me.width, me.height, ee.depth, pe, me.data);
        } else t.compressedTexImage3D(i3.TEXTURE_2D_ARRAY, H, Re, me.width, me.height, ee.depth, 0, me.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else Ne ? D && t.texSubImage3D(i3.TEXTURE_2D_ARRAY, H, 0, 0, 0, me.width, me.height, ee.depth, pe, Ae, me.data) : t.texImage3D(i3.TEXTURE_2D_ARRAY, H, Re, me.width, me.height, ee.depth, 0, pe, Ae, me.data);
      } else {
        Ne && ct && t.texStorage2D(i3.TEXTURE_2D, se, Re, We[0].width, We[0].height);
        for (let H = 0, $ = We.length; H < $; H++) me = We[H], v.format !== ln ? pe !== null ? Ne ? D && t.compressedTexSubImage2D(i3.TEXTURE_2D, H, 0, 0, me.width, me.height, pe, me.data) : t.compressedTexImage2D(i3.TEXTURE_2D, H, Re, me.width, me.height, 0, me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ne ? D && t.texSubImage2D(i3.TEXTURE_2D, H, 0, 0, me.width, me.height, pe, Ae, me.data) : t.texImage2D(i3.TEXTURE_2D, H, Re, me.width, me.height, 0, pe, Ae, me.data);
      }
      else if (v.isDataArrayTexture) if (Ne) {
        if (ct && t.texStorage3D(i3.TEXTURE_2D_ARRAY, se, Re, ee.width, ee.height, ee.depth), D) if (v.layerUpdates.size > 0) {
          const H = zc(ee.width, ee.height, v.format, v.type);
          for (const $ of v.layerUpdates) {
            const he = ee.data.subarray($ * H / ee.data.BYTES_PER_ELEMENT, ($ + 1) * H / ee.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(i3.TEXTURE_2D_ARRAY, 0, 0, 0, $, ee.width, ee.height, 1, pe, Ae, he);
          }
          v.clearLayerUpdates();
        } else t.texSubImage3D(i3.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ee.width, ee.height, ee.depth, pe, Ae, ee.data);
      } else t.texImage3D(i3.TEXTURE_2D_ARRAY, 0, Re, ee.width, ee.height, ee.depth, 0, pe, Ae, ee.data);
      else if (v.isData3DTexture) Ne ? (ct && t.texStorage3D(i3.TEXTURE_3D, se, Re, ee.width, ee.height, ee.depth), D && t.texSubImage3D(i3.TEXTURE_3D, 0, 0, 0, 0, ee.width, ee.height, ee.depth, pe, Ae, ee.data)) : t.texImage3D(i3.TEXTURE_3D, 0, Re, ee.width, ee.height, ee.depth, 0, pe, Ae, ee.data);
      else if (v.isFramebufferTexture) {
        if (ct) if (Ne) t.texStorage2D(i3.TEXTURE_2D, se, Re, ee.width, ee.height);
        else {
          let H = ee.width, $ = ee.height;
          for (let he = 0; he < se; he++) t.texImage2D(i3.TEXTURE_2D, he, Re, H, $, 0, pe, Ae, null), H >>= 1, $ >>= 1;
        }
      } else if (We.length > 0) {
        if (Ne && ct) {
          const H = Se(We[0]);
          t.texStorage2D(i3.TEXTURE_2D, se, Re, H.width, H.height);
        }
        for (let H = 0, $ = We.length; H < $; H++) me = We[H], Ne ? D && t.texSubImage2D(i3.TEXTURE_2D, H, 0, 0, pe, Ae, me) : t.texImage2D(i3.TEXTURE_2D, H, Re, pe, Ae, me);
        v.generateMipmaps = false;
      } else if (Ne) {
        if (ct) {
          const H = Se(ee);
          t.texStorage2D(i3.TEXTURE_2D, se, Re, H.width, H.height);
        }
        D && t.texSubImage2D(i3.TEXTURE_2D, 0, 0, 0, pe, Ae, ee);
      } else t.texImage2D(i3.TEXTURE_2D, 0, Re, pe, Ae, ee);
      m(v) && f(K), xe.__version = W.version, v.onUpdate && v.onUpdate(v);
    }
    b.__version = v.version;
  }
  function ne(b, v, F) {
    if (v.image.length !== 6) return;
    const K = lt(b, v), Z = v.source;
    t.bindTexture(i3.TEXTURE_CUBE_MAP, b.__webglTexture, i3.TEXTURE0 + F);
    const W = n.get(Z);
    if (Z.version !== W.__version || K === true) {
      t.activeTexture(i3.TEXTURE0 + F);
      const xe = Xe.getPrimaries(Xe.workingColorSpace), le = v.colorSpace === wn ? null : Xe.getPrimaries(v.colorSpace), fe = v.colorSpace === wn || xe === le ? i3.NONE : i3.BROWSER_DEFAULT_WEBGL;
      i3.pixelStorei(i3.UNPACK_FLIP_Y_WEBGL, v.flipY), i3.pixelStorei(i3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i3.pixelStorei(i3.UNPACK_ALIGNMENT, v.unpackAlignment), i3.pixelStorei(i3.UNPACK_COLORSPACE_CONVERSION_WEBGL, fe);
      const je = v.isCompressedTexture || v.image[0].isCompressedTexture, ee = v.image[0] && v.image[0].isDataTexture, pe = [];
      for (let $ = 0; $ < 6; $++) !je && !ee ? pe[$] = _(v.image[$], true, s.maxCubemapSize) : pe[$] = ee ? v.image[$].image : v.image[$], pe[$] = ut(v, pe[$]);
      const Ae = pe[0], Re = r.convert(v.format, v.colorSpace), me = r.convert(v.type), We = E(v.internalFormat, Re, me, v.colorSpace), Ne = v.isVideoTexture !== true, ct = W.__version === void 0 || K === true, D = Z.dataReady;
      let se = P(v, Ae);
      Be(i3.TEXTURE_CUBE_MAP, v);
      let H;
      if (je) {
        Ne && ct && t.texStorage2D(i3.TEXTURE_CUBE_MAP, se, We, Ae.width, Ae.height);
        for (let $ = 0; $ < 6; $++) {
          H = pe[$].mipmaps;
          for (let he = 0; he < H.length; he++) {
            const ce = H[he];
            v.format !== ln ? Re !== null ? Ne ? D && t.compressedTexSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he, 0, 0, ce.width, ce.height, Re, ce.data) : t.compressedTexImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he, We, ce.width, ce.height, 0, ce.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ne ? D && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he, 0, 0, ce.width, ce.height, Re, me, ce.data) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he, We, ce.width, ce.height, 0, Re, me, ce.data);
          }
        }
      } else {
        if (H = v.mipmaps, Ne && ct) {
          H.length > 0 && se++;
          const $ = Se(pe[0]);
          t.texStorage2D(i3.TEXTURE_CUBE_MAP, se, We, $.width, $.height);
        }
        for (let $ = 0; $ < 6; $++) if (ee) {
          Ne ? D && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, pe[$].width, pe[$].height, Re, me, pe[$].data) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, We, pe[$].width, pe[$].height, 0, Re, me, pe[$].data);
          for (let he = 0; he < H.length; he++) {
            const Le = H[he].image[$].image;
            Ne ? D && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he + 1, 0, 0, Le.width, Le.height, Re, me, Le.data) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he + 1, We, Le.width, Le.height, 0, Re, me, Le.data);
          }
        } else {
          Ne ? D && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, Re, me, pe[$]) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, We, Re, me, pe[$]);
          for (let he = 0; he < H.length; he++) {
            const ce = H[he];
            Ne ? D && t.texSubImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he + 1, 0, 0, Re, me, ce.image[$]) : t.texImage2D(i3.TEXTURE_CUBE_MAP_POSITIVE_X + $, he + 1, We, Re, me, ce.image[$]);
          }
        }
      }
      m(v) && f(i3.TEXTURE_CUBE_MAP), W.__version = Z.version, v.onUpdate && v.onUpdate(v);
    }
    b.__version = v.version;
  }
  function ve(b, v, F, K, Z, W) {
    const xe = r.convert(F.format, F.colorSpace), le = r.convert(F.type), fe = E(F.internalFormat, xe, le, F.colorSpace), je = n.get(v), ee = n.get(F);
    if (ee.__renderTarget = v, !je.__hasExternalTextures) {
      const pe = Math.max(1, v.width >> W), Ae = Math.max(1, v.height >> W);
      Z === i3.TEXTURE_3D || Z === i3.TEXTURE_2D_ARRAY ? t.texImage3D(Z, W, fe, pe, Ae, v.depth, 0, xe, le, null) : t.texImage2D(Z, W, fe, pe, Ae, 0, xe, le, null);
    }
    t.bindFramebuffer(i3.FRAMEBUFFER, b), Ge(v) ? o.framebufferTexture2DMultisampleEXT(i3.FRAMEBUFFER, K, Z, ee.__webglTexture, 0, Ve(v)) : (Z === i3.TEXTURE_2D || Z >= i3.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i3.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i3.framebufferTexture2D(i3.FRAMEBUFFER, K, Z, ee.__webglTexture, W), t.bindFramebuffer(i3.FRAMEBUFFER, null);
  }
  function oe(b, v, F) {
    if (i3.bindRenderbuffer(i3.RENDERBUFFER, b), v.depthBuffer) {
      const K = v.depthTexture, Z = K && K.isDepthTexture ? K.type : null, W = y(v.stencilBuffer, Z), xe = v.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT, le = Ve(v);
      Ge(v) ? o.renderbufferStorageMultisampleEXT(i3.RENDERBUFFER, le, W, v.width, v.height) : F ? i3.renderbufferStorageMultisample(i3.RENDERBUFFER, le, W, v.width, v.height) : i3.renderbufferStorage(i3.RENDERBUFFER, W, v.width, v.height), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, xe, i3.RENDERBUFFER, b);
    } else {
      const K = v.textures;
      for (let Z = 0; Z < K.length; Z++) {
        const W = K[Z], xe = r.convert(W.format, W.colorSpace), le = r.convert(W.type), fe = E(W.internalFormat, xe, le, W.colorSpace), je = Ve(v);
        F && Ge(v) === false ? i3.renderbufferStorageMultisample(i3.RENDERBUFFER, je, fe, v.width, v.height) : Ge(v) ? o.renderbufferStorageMultisampleEXT(i3.RENDERBUFFER, je, fe, v.width, v.height) : i3.renderbufferStorage(i3.RENDERBUFFER, fe, v.width, v.height);
      }
    }
    i3.bindRenderbuffer(i3.RENDERBUFFER, null);
  }
  function we(b, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i3.FRAMEBUFFER, b), !(v.depthTexture && v.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const K = n.get(v.depthTexture);
    K.__renderTarget = v, (!K.__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = true), J(v.depthTexture, 0);
    const Z = K.__webglTexture, W = Ve(v);
    if (v.depthTexture.format === ls) Ge(v) ? o.framebufferTexture2DMultisampleEXT(i3.FRAMEBUFFER, i3.DEPTH_ATTACHMENT, i3.TEXTURE_2D, Z, 0, W) : i3.framebufferTexture2D(i3.FRAMEBUFFER, i3.DEPTH_ATTACHMENT, i3.TEXTURE_2D, Z, 0);
    else if (v.depthTexture.format === Ii) Ge(v) ? o.framebufferTexture2DMultisampleEXT(i3.FRAMEBUFFER, i3.DEPTH_STENCIL_ATTACHMENT, i3.TEXTURE_2D, Z, 0, W) : i3.framebufferTexture2D(i3.FRAMEBUFFER, i3.DEPTH_STENCIL_ATTACHMENT, i3.TEXTURE_2D, Z, 0);
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
      for (let K = 0; K < 6; K++) if (t.bindFramebuffer(i3.FRAMEBUFFER, v.__webglFramebuffer[K]), v.__webglDepthbuffer[K] === void 0) v.__webglDepthbuffer[K] = i3.createRenderbuffer(), oe(v.__webglDepthbuffer[K], b, false);
      else {
        const Z = b.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT, W = v.__webglDepthbuffer[K];
        i3.bindRenderbuffer(i3.RENDERBUFFER, W), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, Z, i3.RENDERBUFFER, W);
      }
    } else if (t.bindFramebuffer(i3.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0) v.__webglDepthbuffer = i3.createRenderbuffer(), oe(v.__webglDepthbuffer, b, false);
    else {
      const K = b.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT, Z = v.__webglDepthbuffer;
      i3.bindRenderbuffer(i3.RENDERBUFFER, Z), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, K, i3.RENDERBUFFER, Z);
    }
    t.bindFramebuffer(i3.FRAMEBUFFER, null);
  }
  function ke(b, v, F) {
    const K = n.get(b);
    v !== void 0 && ve(K.__webglFramebuffer, b, b.texture, i3.COLOR_ATTACHMENT0, i3.TEXTURE_2D, 0), F !== void 0 && Pe(b);
  }
  function ft(b) {
    const v = b.texture, F = n.get(b), K = n.get(v);
    b.addEventListener("dispose", R);
    const Z = b.textures, W = b.isWebGLCubeRenderTarget === true, xe = Z.length > 1;
    if (xe || (K.__webglTexture === void 0 && (K.__webglTexture = i3.createTexture()), K.__version = v.version, a.memory.textures++), W) {
      F.__webglFramebuffer = [];
      for (let le = 0; le < 6; le++) if (v.mipmaps && v.mipmaps.length > 0) {
        F.__webglFramebuffer[le] = [];
        for (let fe = 0; fe < v.mipmaps.length; fe++) F.__webglFramebuffer[le][fe] = i3.createFramebuffer();
      } else F.__webglFramebuffer[le] = i3.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let le = 0; le < v.mipmaps.length; le++) F.__webglFramebuffer[le] = i3.createFramebuffer();
      } else F.__webglFramebuffer = i3.createFramebuffer();
      if (xe) for (let le = 0, fe = Z.length; le < fe; le++) {
        const je = n.get(Z[le]);
        je.__webglTexture === void 0 && (je.__webglTexture = i3.createTexture(), a.memory.textures++);
      }
      if (b.samples > 0 && Ge(b) === false) {
        F.__webglMultisampledFramebuffer = i3.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(i3.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let le = 0; le < Z.length; le++) {
          const fe = Z[le];
          F.__webglColorRenderbuffer[le] = i3.createRenderbuffer(), i3.bindRenderbuffer(i3.RENDERBUFFER, F.__webglColorRenderbuffer[le]);
          const je = r.convert(fe.format, fe.colorSpace), ee = r.convert(fe.type), pe = E(fe.internalFormat, je, ee, fe.colorSpace, b.isXRRenderTarget === true), Ae = Ve(b);
          i3.renderbufferStorageMultisample(i3.RENDERBUFFER, Ae, pe, b.width, b.height), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + le, i3.RENDERBUFFER, F.__webglColorRenderbuffer[le]);
        }
        i3.bindRenderbuffer(i3.RENDERBUFFER, null), b.depthBuffer && (F.__webglDepthRenderbuffer = i3.createRenderbuffer(), oe(F.__webglDepthRenderbuffer, b, true)), t.bindFramebuffer(i3.FRAMEBUFFER, null);
      }
    }
    if (W) {
      t.bindTexture(i3.TEXTURE_CUBE_MAP, K.__webglTexture), Be(i3.TEXTURE_CUBE_MAP, v);
      for (let le = 0; le < 6; le++) if (v.mipmaps && v.mipmaps.length > 0) for (let fe = 0; fe < v.mipmaps.length; fe++) ve(F.__webglFramebuffer[le][fe], b, v, i3.COLOR_ATTACHMENT0, i3.TEXTURE_CUBE_MAP_POSITIVE_X + le, fe);
      else ve(F.__webglFramebuffer[le], b, v, i3.COLOR_ATTACHMENT0, i3.TEXTURE_CUBE_MAP_POSITIVE_X + le, 0);
      m(v) && f(i3.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (xe) {
      for (let le = 0, fe = Z.length; le < fe; le++) {
        const je = Z[le], ee = n.get(je);
        t.bindTexture(i3.TEXTURE_2D, ee.__webglTexture), Be(i3.TEXTURE_2D, je), ve(F.__webglFramebuffer, b, je, i3.COLOR_ATTACHMENT0 + le, i3.TEXTURE_2D, 0), m(je) && f(i3.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let le = i3.TEXTURE_2D;
      if ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (le = b.isWebGL3DRenderTarget ? i3.TEXTURE_3D : i3.TEXTURE_2D_ARRAY), t.bindTexture(le, K.__webglTexture), Be(le, v), v.mipmaps && v.mipmaps.length > 0) for (let fe = 0; fe < v.mipmaps.length; fe++) ve(F.__webglFramebuffer[fe], b, v, i3.COLOR_ATTACHMENT0, le, fe);
      else ve(F.__webglFramebuffer, b, v, i3.COLOR_ATTACHMENT0, le, 0);
      m(v) && f(le), t.unbindTexture();
    }
    b.depthBuffer && Pe(b);
  }
  function qe(b) {
    const v = b.textures;
    for (let F = 0, K = v.length; F < K; F++) {
      const Z = v[F];
      if (m(Z)) {
        const W = T(b), xe = n.get(Z).__webglTexture;
        t.bindTexture(W, xe), f(W), t.unbindTexture();
      }
    }
  }
  const _t = [], A = [];
  function en(b) {
    if (b.samples > 0) {
      if (Ge(b) === false) {
        const v = b.textures, F = b.width, K = b.height;
        let Z = i3.COLOR_BUFFER_BIT;
        const W = b.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT, xe = n.get(b), le = v.length > 1;
        if (le) for (let fe = 0; fe < v.length; fe++) t.bindFramebuffer(i3.FRAMEBUFFER, xe.__webglMultisampledFramebuffer), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + fe, i3.RENDERBUFFER, null), t.bindFramebuffer(i3.FRAMEBUFFER, xe.__webglFramebuffer), i3.framebufferTexture2D(i3.DRAW_FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + fe, i3.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i3.READ_FRAMEBUFFER, xe.__webglMultisampledFramebuffer), t.bindFramebuffer(i3.DRAW_FRAMEBUFFER, xe.__webglFramebuffer);
        for (let fe = 0; fe < v.length; fe++) {
          if (b.resolveDepthBuffer && (b.depthBuffer && (Z |= i3.DEPTH_BUFFER_BIT), b.stencilBuffer && b.resolveStencilBuffer && (Z |= i3.STENCIL_BUFFER_BIT)), le) {
            i3.framebufferRenderbuffer(i3.READ_FRAMEBUFFER, i3.COLOR_ATTACHMENT0, i3.RENDERBUFFER, xe.__webglColorRenderbuffer[fe]);
            const je = n.get(v[fe]).__webglTexture;
            i3.framebufferTexture2D(i3.DRAW_FRAMEBUFFER, i3.COLOR_ATTACHMENT0, i3.TEXTURE_2D, je, 0);
          }
          i3.blitFramebuffer(0, 0, F, K, 0, 0, F, K, Z, i3.NEAREST), l === true && (_t.length = 0, A.length = 0, _t.push(i3.COLOR_ATTACHMENT0 + fe), b.depthBuffer && b.resolveDepthBuffer === false && (_t.push(W), A.push(W), i3.invalidateFramebuffer(i3.DRAW_FRAMEBUFFER, A)), i3.invalidateFramebuffer(i3.READ_FRAMEBUFFER, _t));
        }
        if (t.bindFramebuffer(i3.READ_FRAMEBUFFER, null), t.bindFramebuffer(i3.DRAW_FRAMEBUFFER, null), le) for (let fe = 0; fe < v.length; fe++) {
          t.bindFramebuffer(i3.FRAMEBUFFER, xe.__webglMultisampledFramebuffer), i3.framebufferRenderbuffer(i3.FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + fe, i3.RENDERBUFFER, xe.__webglColorRenderbuffer[fe]);
          const je = n.get(v[fe]).__webglTexture;
          t.bindFramebuffer(i3.FRAMEBUFFER, xe.__webglFramebuffer), i3.framebufferTexture2D(i3.DRAW_FRAMEBUFFER, i3.COLOR_ATTACHMENT0 + fe, i3.TEXTURE_2D, je, 0);
        }
        t.bindFramebuffer(i3.DRAW_FRAMEBUFFER, xe.__webglMultisampledFramebuffer);
      } else if (b.depthBuffer && b.resolveDepthBuffer === false && l) {
        const v = b.stencilBuffer ? i3.DEPTH_STENCIL_ATTACHMENT : i3.DEPTH_ATTACHMENT;
        i3.invalidateFramebuffer(i3.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function Ve(b) {
    return Math.min(s.maxSamples, b.samples);
  }
  function Ge(b) {
    const v = n.get(b);
    return b.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && v.__useRenderToTexture !== false;
  }
  function Me(b) {
    const v = a.render.frame;
    h.get(b) !== v && (h.set(b, v), b.update());
  }
  function ut(b, v) {
    const F = b.colorSpace, K = b.format, Z = b.type;
    return b.isCompressedTexture === true || b.isVideoTexture === true || F !== Dt && F !== wn && (Xe.getTransfer(F) === at ? (K !== ln || Z !== Ot) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), v;
  }
  function Se(b) {
    return typeof HTMLImageElement < "u" && b instanceof HTMLImageElement ? (c.width = b.naturalWidth || b.width, c.height = b.naturalHeight || b.height) : typeof VideoFrame < "u" && b instanceof VideoFrame ? (c.width = b.displayWidth, c.height = b.displayHeight) : (c.width = b.width, c.height = b.height), c;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = q, this.setTexture2D = J, this.setTexture2DArray = G, this.setTexture3D = te, this.setTextureCube = V, this.rebindTextures = ke, this.setupRenderTarget = ft, this.updateRenderTargetMipmap = qe, this.updateMultisampleRenderTarget = en, this.setupDepthRenderbuffer = Pe, this.setupFrameBufferTexture = ve, this.useMultisampledRTT = Ge;
}
function Yv(i3, e) {
  function t(n, s = wn) {
    let r;
    const a = Xe.getTransfer(s);
    if (n === Ot) return i3.UNSIGNED_BYTE;
    if (n === dl) return i3.UNSIGNED_SHORT_4_4_4_4;
    if (n === fl) return i3.UNSIGNED_SHORT_5_5_5_1;
    if (n === Vh) return i3.UNSIGNED_INT_5_9_9_9_REV;
    if (n === zh) return i3.BYTE;
    if (n === Hh) return i3.SHORT;
    if (n === Js) return i3.UNSIGNED_SHORT;
    if (n === ul) return i3.INT;
    if (n === Ci) return i3.UNSIGNED_INT;
    if (n === on) return i3.FLOAT;
    if (n === Ms) return i3.HALF_FLOAT;
    if (n === Gh) return i3.ALPHA;
    if (n === Wh) return i3.RGB;
    if (n === ln) return i3.RGBA;
    if (n === Xh) return i3.LUMINANCE;
    if (n === Yh) return i3.LUMINANCE_ALPHA;
    if (n === ls) return i3.DEPTH_COMPONENT;
    if (n === Ii) return i3.DEPTH_STENCIL;
    if (n === pl) return i3.RED;
    if (n === ml) return i3.RED_INTEGER;
    if (n === qh) return i3.RG;
    if (n === gl) return i3.RG_INTEGER;
    if (n === _l) return i3.RGBA_INTEGER;
    if (n === Wr || n === Xr || n === Yr || n === qr) if (a === at) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (n === Wr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === Xr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === Yr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === qr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (n === Wr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === Xr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === Yr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === qr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === Mo || n === Eo || n === bo || n === To) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (n === Mo) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === Eo) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === bo) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === To) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === Ao || n === wo || n === Ro) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (n === Ao || n === wo) return a === at ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (n === Ro) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === Co || n === Po || n === Io || n === Do || n === Lo || n === Uo || n === No || n === Fo || n === Oo || n === Bo || n === ko || n === zo || n === Ho || n === Vo) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (n === Co) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === Po) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === Io) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === Do) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === Lo) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Uo) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === No) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Fo) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Oo) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === Bo) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === ko) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === zo) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === Ho) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === Vo) return a === at ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === jr || n === Go || n === Wo) if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
      if (n === jr) return a === at ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Go) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === Wo) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === jh || n === Xo || n === Yo || n === qo) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
      if (n === jr) return r.COMPRESSED_RED_RGTC1_EXT;
      if (n === Xo) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === Yo) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === qo) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === Pi ? i3.UNSIGNED_INT_24_8 : i3[n] !== void 0 ? i3[n] : null;
  }
  return { convert: t };
}
const qv = { type: "move" };
class io {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ci(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ci(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new C(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new C()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ci(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new C(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new C()), this._grip;
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
    let s = null, r = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = true;
        for (const _ of e.hand.values()) {
          const m = t.getJointPose(_, n), f = this._getHandJoint(c, _);
          m !== null && (f.matrix.fromArray(m.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = true, f.jointRadius = m.radius), f.visible = m !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), p = 0.02, g = 5e-3;
        c.inputState.pinching && d > p + g ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= p - g && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (s = t.getPose(e.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, s.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = false, s.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(qv)));
    }
    return o !== null && (o.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ci();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const jv = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Kv = `
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
class $v {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const s = new Mt(), r = e.properties.get(s);
      r.__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = s;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Gt({ vertexShader: jv, fragmentShader: Kv, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new rt(new oa(20, 20), n);
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
class Zv extends xn {
  constructor(e, t) {
    super();
    const n = this;
    let s = null, r = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, d = null, p = null, g = null;
    const _ = new $v(), m = t.getContextAttributes();
    let f = null, T = null;
    const E = [], y = [], P = new _e();
    let w = null;
    const R = new Ft();
    R.viewport = new $e();
    const N = new Ft();
    N.viewport = new $e();
    const M = [R, N], S = new np();
    let I = null, q = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(Y) {
      let ne = E[Y];
      return ne === void 0 && (ne = new io(), E[Y] = ne), ne.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let ne = E[Y];
      return ne === void 0 && (ne = new io(), E[Y] = ne), ne.getGripSpace();
    }, this.getHand = function(Y) {
      let ne = E[Y];
      return ne === void 0 && (ne = new io(), E[Y] = ne), ne.getHandSpace();
    };
    function z(Y) {
      const ne = y.indexOf(Y.inputSource);
      if (ne === -1) return;
      const ve = E[ne];
      ve !== void 0 && (ve.update(Y.inputSource, Y.frame, c || a), ve.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function X() {
      s.removeEventListener("select", z), s.removeEventListener("selectstart", z), s.removeEventListener("selectend", z), s.removeEventListener("squeeze", z), s.removeEventListener("squeezestart", z), s.removeEventListener("squeezeend", z), s.removeEventListener("end", X), s.removeEventListener("inputsourceschange", J);
      for (let Y = 0; Y < E.length; Y++) {
        const ne = y[Y];
        ne !== null && (y[Y] = null, E[Y].disconnect(ne));
      }
      I = null, q = null, _.reset(), e.setRenderTarget(f), p = null, d = null, u = null, s = null, T = null, lt.stop(), n.isPresenting = false, e.setPixelRatio(w), e.setSize(P.width, P.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Y) {
      r = Y, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Y) {
      o = Y, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(Y) {
      c = Y;
    }, this.getBaseLayer = function() {
      return d !== null ? d : p;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(Y) {
      if (s = Y, s !== null) {
        if (f = e.getRenderTarget(), s.addEventListener("select", z), s.addEventListener("selectstart", z), s.addEventListener("selectend", z), s.addEventListener("squeeze", z), s.addEventListener("squeezestart", z), s.addEventListener("squeezeend", z), s.addEventListener("end", X), s.addEventListener("inputsourceschange", J), m.xrCompatible !== true && await t.makeXRCompatible(), w = e.getPixelRatio(), e.getSize(P), s.enabledFeatures !== void 0 && s.enabledFeatures.includes("layers")) {
          let ve = null, oe = null, we = null;
          m.depth && (we = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ve = m.stencil ? Ii : ls, oe = m.stencil ? Pi : Ci);
          const Pe = { colorFormat: t.RGBA8, depthFormat: we, scaleFactor: r };
          u = new XRWebGLBinding(s, t), d = u.createProjectionLayer(Pe), s.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, false), T = new Bt(d.textureWidth, d.textureHeight, { format: ln, type: Ot, depthTexture: new Tl(d.textureWidth, d.textureHeight, oe, void 0, void 0, void 0, void 0, void 0, void 0, ve), stencilBuffer: m.stencil, colorSpace: e.outputColorSpace, samples: m.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === false });
        } else {
          const ve = { antialias: m.antialias, alpha: true, depth: m.depth, stencil: m.stencil, framebufferScaleFactor: r };
          p = new XRWebGLLayer(s, t, ve), s.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, false), T = new Bt(p.framebufferWidth, p.framebufferHeight, { format: ln, type: Ot, colorSpace: e.outputColorSpace, stencilBuffer: m.stencil });
        }
        T.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await s.requestReferenceSpace(o), lt.setContext(s), lt.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null) return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function J(Y) {
      for (let ne = 0; ne < Y.removed.length; ne++) {
        const ve = Y.removed[ne], oe = y.indexOf(ve);
        oe >= 0 && (y[oe] = null, E[oe].disconnect(ve));
      }
      for (let ne = 0; ne < Y.added.length; ne++) {
        const ve = Y.added[ne];
        let oe = y.indexOf(ve);
        if (oe === -1) {
          for (let Pe = 0; Pe < E.length; Pe++) if (Pe >= y.length) {
            y.push(ve), oe = Pe;
            break;
          } else if (y[Pe] === null) {
            y[Pe] = ve, oe = Pe;
            break;
          }
          if (oe === -1) break;
        }
        const we = E[oe];
        we && we.connect(ve);
      }
    }
    const G = new C(), te = new C();
    function V(Y, ne, ve) {
      G.setFromMatrixPosition(ne.matrixWorld), te.setFromMatrixPosition(ve.matrixWorld);
      const oe = G.distanceTo(te), we = ne.projectionMatrix.elements, Pe = ve.projectionMatrix.elements, ke = we[14] / (we[10] - 1), ft = we[14] / (we[10] + 1), qe = (we[9] + 1) / we[5], _t = (we[9] - 1) / we[5], A = (we[8] - 1) / we[0], en = (Pe[8] + 1) / Pe[0], Ve = ke * A, Ge = ke * en, Me = oe / (-A + en), ut = Me * -A;
      if (ne.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(ut), Y.translateZ(Me), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), we[10] === -1) Y.projectionMatrix.copy(ne.projectionMatrix), Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);
      else {
        const Se = ke + Me, b = ft + Me, v = Ve - ut, F = Ge + (oe - ut), K = qe * ft / b * Se, Z = _t * ft / b * Se;
        Y.projectionMatrix.makePerspective(v, F, K, Z, Se, b), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function ae(Y, ne) {
      ne === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(ne.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (s === null) return;
      let ne = Y.near, ve = Y.far;
      _.texture !== null && (_.depthNear > 0 && (ne = _.depthNear), _.depthFar > 0 && (ve = _.depthFar)), S.near = N.near = R.near = ne, S.far = N.far = R.far = ve, (I !== S.near || q !== S.far) && (s.updateRenderState({ depthNear: S.near, depthFar: S.far }), I = S.near, q = S.far), R.layers.mask = Y.layers.mask | 2, N.layers.mask = Y.layers.mask | 4, S.layers.mask = R.layers.mask | N.layers.mask;
      const oe = Y.parent, we = S.cameras;
      ae(S, oe);
      for (let Pe = 0; Pe < we.length; Pe++) ae(we[Pe], oe);
      we.length === 2 ? V(S, R, N) : S.projectionMatrix.copy(R.projectionMatrix), de(Y, S, oe);
    };
    function de(Y, ne, ve) {
      ve === null ? Y.matrix.copy(ne.matrixWorld) : (Y.matrix.copy(ve.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(ne.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(true), Y.projectionMatrix.copy(ne.projectionMatrix), Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = gs * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return S;
    }, this.getFoveation = function() {
      if (!(d === null && p === null)) return l;
    }, this.setFoveation = function(Y) {
      l = Y, d !== null && (d.fixedFoveation = Y), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(S);
    };
    let ye = null;
    function Be(Y, ne) {
      if (h = ne.getViewerPose(c || a), g = ne, h !== null) {
        const ve = h.views;
        p !== null && (e.setRenderTargetFramebuffer(T, p.framebuffer), e.setRenderTarget(T));
        let oe = false;
        ve.length !== S.cameras.length && (S.cameras.length = 0, oe = true);
        for (let Pe = 0; Pe < ve.length; Pe++) {
          const ke = ve[Pe];
          let ft = null;
          if (p !== null) ft = p.getViewport(ke);
          else {
            const _t = u.getViewSubImage(d, ke);
            ft = _t.viewport, Pe === 0 && (e.setRenderTargetTextures(T, _t.colorTexture, d.ignoreDepthValues ? void 0 : _t.depthStencilTexture), e.setRenderTarget(T));
          }
          let qe = M[Pe];
          qe === void 0 && (qe = new Ft(), qe.layers.enable(Pe), qe.viewport = new $e(), M[Pe] = qe), qe.matrix.fromArray(ke.transform.matrix), qe.matrix.decompose(qe.position, qe.quaternion, qe.scale), qe.projectionMatrix.fromArray(ke.projectionMatrix), qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(), qe.viewport.set(ft.x, ft.y, ft.width, ft.height), Pe === 0 && (S.matrix.copy(qe.matrix), S.matrix.decompose(S.position, S.quaternion, S.scale)), oe === true && S.cameras.push(qe);
        }
        const we = s.enabledFeatures;
        if (we && we.includes("depth-sensing")) {
          const Pe = u.getDepthInformation(ve[0]);
          Pe && Pe.isValid && Pe.texture && _.init(e, Pe, s.renderState);
        }
      }
      for (let ve = 0; ve < E.length; ve++) {
        const oe = y[ve], we = E[ve];
        oe !== null && we !== void 0 && we.update(oe, ne, c || a);
      }
      ye && ye(Y, ne), ne.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ne }), g = null;
    }
    const lt = new _u();
    lt.setAnimationLoop(Be), this.setAnimationLoop = function(Y) {
      ye = Y;
    }, this.dispose = function() {
    };
  }
}
const Ei = new Pn(), Jv = new De();
function Qv(i3, e) {
  function t(m, f) {
    m.matrixAutoUpdate === true && m.updateMatrix(), f.value.copy(m.matrix);
  }
  function n(m, f) {
    f.color.getRGB(m.fogColor.value, au(i3)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density);
  }
  function s(m, f, T, E, y) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? r(m, f) : f.isMeshToonMaterial ? (r(m, f), u(m, f)) : f.isMeshPhongMaterial ? (r(m, f), h(m, f)) : f.isMeshStandardMaterial ? (r(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, y)) : f.isMeshMatcapMaterial ? (r(m, f), g(m, f)) : f.isMeshDepthMaterial ? r(m, f) : f.isMeshDistanceMaterial ? (r(m, f), _(m, f)) : f.isMeshNormalMaterial ? r(m, f) : f.isLineBasicMaterial ? (a(m, f), f.isLineDashedMaterial && o(m, f)) : f.isPointsMaterial ? l(m, f, T, E) : f.isSpriteMaterial ? c(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = false);
  }
  function r(m, f) {
    m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, t(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === St && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, t(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === St && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, t(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, t(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    const T = e.get(f), E = T.envMap, y = T.envMapRotation;
    E && (m.envMap.value = E, Ei.copy(y), Ei.x *= -1, Ei.y *= -1, Ei.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === false && (Ei.y *= -1, Ei.z *= -1), m.envMapRotation.value.setFromMatrix4(Jv.makeRotationFromEuler(Ei)), m.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === false ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap && (m.lightMap.value = f.lightMap, m.lightMapIntensity.value = f.lightMapIntensity, t(f.lightMap, m.lightMapTransform)), f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, m.aoMapTransform));
  }
  function a(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, t(f.map, m.mapTransform));
  }
  function o(m, f) {
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
    m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === St && m.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (m.dispersion.value = f.dispersion), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = T.texture, m.transmissionSamplerSize.value.set(T.width, T.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, f) {
    f.matcap && (m.matcap.value = f.matcap);
  }
  function _(m, f) {
    const T = e.get(f).light;
    m.referencePosition.value.setFromMatrixPosition(T.matrixWorld), m.nearDistance.value = T.shadow.camera.near, m.farDistance.value = T.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: s };
}
function e0(i3, e, t, n) {
  let s = {}, r = {}, a = [];
  const o = i3.getParameter(i3.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(T, E) {
    const y = E.program;
    n.uniformBlockBinding(T, y);
  }
  function c(T, E) {
    let y = s[T.id];
    y === void 0 && (g(T), y = h(T), s[T.id] = y, T.addEventListener("dispose", m));
    const P = E.program;
    n.updateUBOMapping(T, P);
    const w = e.render.frame;
    r[T.id] !== w && (d(T), r[T.id] = w);
  }
  function h(T) {
    const E = u();
    T.__bindingPointIndex = E;
    const y = i3.createBuffer(), P = T.__size, w = T.usage;
    return i3.bindBuffer(i3.UNIFORM_BUFFER, y), i3.bufferData(i3.UNIFORM_BUFFER, P, w), i3.bindBuffer(i3.UNIFORM_BUFFER, null), i3.bindBufferBase(i3.UNIFORM_BUFFER, E, y), y;
  }
  function u() {
    for (let T = 0; T < o; T++) if (a.indexOf(T) === -1) return a.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(T) {
    const E = s[T.id], y = T.uniforms, P = T.__cache;
    i3.bindBuffer(i3.UNIFORM_BUFFER, E);
    for (let w = 0, R = y.length; w < R; w++) {
      const N = Array.isArray(y[w]) ? y[w] : [y[w]];
      for (let M = 0, S = N.length; M < S; M++) {
        const I = N[M];
        if (p(I, w, M, P) === true) {
          const q = I.__offset, z = Array.isArray(I.value) ? I.value : [I.value];
          let X = 0;
          for (let J = 0; J < z.length; J++) {
            const G = z[J], te = _(G);
            typeof G == "number" || typeof G == "boolean" ? (I.__data[0] = G, i3.bufferSubData(i3.UNIFORM_BUFFER, q + X, I.__data)) : G.isMatrix3 ? (I.__data[0] = G.elements[0], I.__data[1] = G.elements[1], I.__data[2] = G.elements[2], I.__data[3] = 0, I.__data[4] = G.elements[3], I.__data[5] = G.elements[4], I.__data[6] = G.elements[5], I.__data[7] = 0, I.__data[8] = G.elements[6], I.__data[9] = G.elements[7], I.__data[10] = G.elements[8], I.__data[11] = 0) : (G.toArray(I.__data, X), X += te.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i3.bufferSubData(i3.UNIFORM_BUFFER, q, I.__data);
        }
      }
    }
    i3.bindBuffer(i3.UNIFORM_BUFFER, null);
  }
  function p(T, E, y, P) {
    const w = T.value, R = E + "_" + y;
    if (P[R] === void 0) return typeof w == "number" || typeof w == "boolean" ? P[R] = w : P[R] = w.clone(), true;
    {
      const N = P[R];
      if (typeof w == "number" || typeof w == "boolean") {
        if (N !== w) return P[R] = w, true;
      } else if (N.equals(w) === false) return N.copy(w), true;
    }
    return false;
  }
  function g(T) {
    const E = T.uniforms;
    let y = 0;
    const P = 16;
    for (let R = 0, N = E.length; R < N; R++) {
      const M = Array.isArray(E[R]) ? E[R] : [E[R]];
      for (let S = 0, I = M.length; S < I; S++) {
        const q = M[S], z = Array.isArray(q.value) ? q.value : [q.value];
        for (let X = 0, J = z.length; X < J; X++) {
          const G = z[X], te = _(G), V = y % P, ae = V % te.boundary, de = V + ae;
          y += ae, de !== 0 && P - de < te.storage && (y += P - de), q.__data = new Float32Array(te.storage / Float32Array.BYTES_PER_ELEMENT), q.__offset = y, y += te.storage;
        }
      }
    }
    const w = y % P;
    return w > 0 && (y += P - w), T.__size = y, T.__cache = {}, this;
  }
  function _(T) {
    const E = { boundary: 0, storage: 0 };
    return typeof T == "number" || typeof T == "boolean" ? (E.boundary = 4, E.storage = 4) : T.isVector2 ? (E.boundary = 8, E.storage = 8) : T.isVector3 || T.isColor ? (E.boundary = 16, E.storage = 12) : T.isVector4 ? (E.boundary = 16, E.storage = 16) : T.isMatrix3 ? (E.boundary = 48, E.storage = 48) : T.isMatrix4 ? (E.boundary = 64, E.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), E;
  }
  function m(T) {
    const E = T.target;
    E.removeEventListener("dispose", m);
    const y = a.indexOf(E.__bindingPointIndex);
    a.splice(y, 1), i3.deleteBuffer(s[E.id]), delete s[E.id], delete r[E.id];
  }
  function f() {
    for (const T in s) i3.deleteBuffer(s[T]);
    a = [], s = {}, r = {};
  }
  return { bind: l, update: c, dispose: f };
}
class t0 {
  constructor(e = {}) {
    const { canvas: t = Jd(), context: n = null, depth: s = true, stencil: r = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false, reverseDepthBuffer: d = false } = e;
    this.isWebGLRenderer = true;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else p = a;
    const g = new Uint32Array(4), _ = new Int32Array(4);
    let m = null, f = null;
    const T = [], E = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = Ye, this.toneMapping = di, this.toneMappingExposure = 1;
    const y = this;
    let P = false, w = 0, R = 0, N = null, M = -1, S = null;
    const I = new $e(), q = new $e();
    let z = null;
    const X = new Te(0);
    let J = 0, G = t.width, te = t.height, V = 1, ae = null, de = null;
    const ye = new $e(0, 0, G, te), Be = new $e(0, 0, G, te);
    let lt = false;
    const Y = new El();
    let ne = false, ve = false;
    this.transmissionResolutionScale = 1;
    const oe = new De(), we = new De(), Pe = new C(), ke = new $e(), ft = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let qe = false;
    function _t() {
      return N === null ? V : 1;
    }
    let A = n;
    function en(x, L) {
      return t.getContext(x, L);
    }
    try {
      const x = { alpha: true, depth: s, stencil: r, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${sr}`), t.addEventListener("webglcontextlost", $, false), t.addEventListener("webglcontextrestored", he, false), t.addEventListener("webglcontextcreationerror", ce, false), A === null) {
        const L = "webgl2";
        if (A = en(L, x), A === null) throw en(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let Ve, Ge, Me, ut, Se, b, v, F, K, Z, W, xe, le, fe, je, ee, pe, Ae, Re, me, We, Ne, ct, D;
    function se() {
      Ve = new h_(A), Ve.init(), Ne = new Yv(A, Ve), Ge = new s_(A, Ve, e, Ne), Me = new Wv(A, Ve), Ge.reverseDepthBuffer && d && Me.buffers.depth.setReversed(true), ut = new f_(A), Se = new Iv(), b = new Xv(A, Ve, Me, Se, Ge, Ne, ut), v = new a_(y), F = new c_(y), K = new Sp(A), ct = new n_(A, K), Z = new u_(A, K, ut, ct), W = new m_(A, Z, K, ut), Re = new p_(A, Ge, b), ee = new r_(Se), xe = new Pv(y, v, F, Ve, Ge, ct, ee), le = new Qv(y, Se), fe = new Lv(), je = new kv(Ve), Ae = new t_(y, v, F, Me, W, p, l), pe = new Vv(y, W, Ge), D = new e0(A, ut, Ge, Me), me = new i_(A, Ve, ut), We = new d_(A, Ve, ut), ut.programs = xe.programs, y.capabilities = Ge, y.extensions = Ve, y.properties = Se, y.renderLists = fe, y.shadowMap = pe, y.state = Me, y.info = ut;
    }
    se();
    const H = new Zv(y, A);
    this.xr = H, this.getContext = function() {
      return A;
    }, this.getContextAttributes = function() {
      return A.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = Ve.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = Ve.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return V;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (V = x, this.setSize(G, te, false));
    }, this.getSize = function(x) {
      return x.set(G, te);
    }, this.setSize = function(x, L, B = true) {
      if (H.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      G = x, te = L, t.width = Math.floor(x * V), t.height = Math.floor(L * V), B === true && (t.style.width = x + "px", t.style.height = L + "px"), this.setViewport(0, 0, x, L);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(G * V, te * V).floor();
    }, this.setDrawingBufferSize = function(x, L, B) {
      G = x, te = L, V = B, t.width = Math.floor(x * B), t.height = Math.floor(L * B), this.setViewport(0, 0, x, L);
    }, this.getCurrentViewport = function(x) {
      return x.copy(I);
    }, this.getViewport = function(x) {
      return x.copy(ye);
    }, this.setViewport = function(x, L, B, k) {
      x.isVector4 ? ye.set(x.x, x.y, x.z, x.w) : ye.set(x, L, B, k), Me.viewport(I.copy(ye).multiplyScalar(V).round());
    }, this.getScissor = function(x) {
      return x.copy(Be);
    }, this.setScissor = function(x, L, B, k) {
      x.isVector4 ? Be.set(x.x, x.y, x.z, x.w) : Be.set(x, L, B, k), Me.scissor(q.copy(Be).multiplyScalar(V).round());
    }, this.getScissorTest = function() {
      return lt;
    }, this.setScissorTest = function(x) {
      Me.setScissorTest(lt = x);
    }, this.setOpaqueSort = function(x) {
      ae = x;
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
    }, this.clear = function(x = true, L = true, B = true) {
      let k = 0;
      if (x) {
        let U = false;
        if (N !== null) {
          const Q = N.texture.format;
          U = Q === _l || Q === gl || Q === ml;
        }
        if (U) {
          const Q = N.texture.type, re = Q === Ot || Q === Ci || Q === Js || Q === Pi || Q === dl || Q === fl, ue = Ae.getClearColor(), ge = Ae.getClearAlpha(), Ce = ue.r, Ie = ue.g, Ee = ue.b;
          re ? (g[0] = Ce, g[1] = Ie, g[2] = Ee, g[3] = ge, A.clearBufferuiv(A.COLOR, 0, g)) : (_[0] = Ce, _[1] = Ie, _[2] = Ee, _[3] = ge, A.clearBufferiv(A.COLOR, 0, _));
        } else k |= A.COLOR_BUFFER_BIT;
      }
      L && (k |= A.DEPTH_BUFFER_BIT), B && (k |= A.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), A.clear(k);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", $, false), t.removeEventListener("webglcontextrestored", he, false), t.removeEventListener("webglcontextcreationerror", ce, false), Ae.dispose(), fe.dispose(), je.dispose(), Se.dispose(), v.dispose(), F.dispose(), W.dispose(), ct.dispose(), D.dispose(), xe.dispose(), H.dispose(), H.removeEventListener("sessionstart", zl), H.removeEventListener("sessionend", Hl), gi.stop();
    };
    function $(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), P = true;
    }
    function he() {
      console.log("THREE.WebGLRenderer: Context Restored."), P = false;
      const x = ut.autoReset, L = pe.enabled, B = pe.autoUpdate, k = pe.needsUpdate, U = pe.type;
      se(), ut.autoReset = x, pe.enabled = L, pe.autoUpdate = B, pe.needsUpdate = k, pe.type = U;
    }
    function ce(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Le(x) {
      const L = x.target;
      L.removeEventListener("dispose", Le), mt(L);
    }
    function mt(x) {
      Lt(x), Se.remove(x);
    }
    function Lt(x) {
      const L = Se.get(x).programs;
      L !== void 0 && (L.forEach(function(B) {
        xe.releaseProgram(B);
      }), x.isShaderMaterial && xe.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, L, B, k, U, Q) {
      L === null && (L = ft);
      const re = U.isMesh && U.matrixWorld.determinant() < 0, ue = Hu(x, L, B, k, U);
      Me.setMaterial(k, re);
      let ge = B.index, Ce = 1;
      if (k.wireframe === true) {
        if (ge = Z.getWireframeAttribute(B), ge === void 0) return;
        Ce = 2;
      }
      const Ie = B.drawRange, Ee = B.attributes.position;
      let Ke = Ie.start * Ce, et = (Ie.start + Ie.count) * Ce;
      Q !== null && (Ke = Math.max(Ke, Q.start * Ce), et = Math.min(et, (Q.start + Q.count) * Ce)), ge !== null ? (Ke = Math.max(Ke, 0), et = Math.min(et, ge.count)) : Ee != null && (Ke = Math.max(Ke, 0), et = Math.min(et, Ee.count));
      const vt = et - Ke;
      if (vt < 0 || vt === 1 / 0) return;
      ct.setup(U, k, ue, B, ge);
      let gt, Ze = me;
      if (ge !== null && (gt = K.get(ge), Ze = We, Ze.setIndex(gt)), U.isMesh) k.wireframe === true ? (Me.setLineWidth(k.wireframeLinewidth * _t()), Ze.setMode(A.LINES)) : Ze.setMode(A.TRIANGLES);
      else if (U.isLine) {
        let be = k.linewidth;
        be === void 0 && (be = 1), Me.setLineWidth(be * _t()), U.isLineSegments ? Ze.setMode(A.LINES) : U.isLineLoop ? Ze.setMode(A.LINE_LOOP) : Ze.setMode(A.LINE_STRIP);
      } else U.isPoints ? Ze.setMode(A.POINTS) : U.isSprite && Ze.setMode(A.TRIANGLES);
      if (U.isBatchedMesh) if (U._multiDrawInstances !== null) Ze.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
      else if (Ve.get("WEBGL_multi_draw")) Ze.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
      else {
        const be = U._multiDrawStarts, Rt = U._multiDrawCounts, tt = U._multiDrawCount, dn = ge ? K.get(ge).bytesPerElement : 1, Ui = Se.get(k).currentProgram.getUniforms();
        for (let jt = 0; jt < tt; jt++) Ui.setValue(A, "_gl_DrawID", jt), Ze.render(be[jt] / dn, Rt[jt]);
      }
      else if (U.isInstancedMesh) Ze.renderInstances(Ke, vt, U.count);
      else if (B.isInstancedBufferGeometry) {
        const be = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, Rt = Math.min(B.instanceCount, be);
        Ze.renderInstances(Ke, vt, Rt);
      } else Ze.render(Ke, vt);
    };
    function it(x, L, B) {
      x.transparent === true && x.side === Yt && x.forceSinglePass === false ? (x.side = St, x.needsUpdate = true, ur(x, L, B), x.side = Cn, x.needsUpdate = true, ur(x, L, B), x.side = Yt) : ur(x, L, B);
    }
    this.compile = function(x, L, B = null) {
      B === null && (B = x), f = je.get(B), f.init(L), E.push(f), B.traverseVisible(function(U) {
        U.isLight && U.layers.test(L.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), x !== B && x.traverseVisible(function(U) {
        U.isLight && U.layers.test(L.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), f.setupLights();
      const k = /* @__PURE__ */ new Set();
      return x.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
        const Q = U.material;
        if (Q) if (Array.isArray(Q)) for (let re = 0; re < Q.length; re++) {
          const ue = Q[re];
          it(ue, B, U), k.add(ue);
        }
        else it(Q, B, U), k.add(Q);
      }), E.pop(), f = null, k;
    }, this.compileAsync = function(x, L, B = null) {
      const k = this.compile(x, L, B);
      return new Promise((U) => {
        function Q() {
          if (k.forEach(function(re) {
            Se.get(re).currentProgram.isReady() && k.delete(re);
          }), k.size === 0) {
            U(x);
            return;
          }
          setTimeout(Q, 10);
        }
        Ve.get("KHR_parallel_shader_compile") !== null ? Q() : setTimeout(Q, 10);
      });
    };
    let un = null;
    function Ln(x) {
      un && un(x);
    }
    function zl() {
      gi.stop();
    }
    function Hl() {
      gi.start();
    }
    const gi = new _u();
    gi.setAnimationLoop(Ln), typeof self < "u" && gi.setContext(self), this.setAnimationLoop = function(x) {
      un = x, H.setAnimationLoop(x), x === null ? gi.stop() : gi.start();
    }, H.addEventListener("sessionstart", zl), H.addEventListener("sessionend", Hl), this.render = function(x, L) {
      if (L !== void 0 && L.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (P === true) return;
      if (x.matrixWorldAutoUpdate === true && x.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === true && L.updateMatrixWorld(), H.enabled === true && H.isPresenting === true && (H.cameraAutoUpdate === true && H.updateCamera(L), L = H.getCamera()), x.isScene === true && x.onBeforeRender(y, x, L, N), f = je.get(x, E.length), f.init(L), E.push(f), we.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), Y.setFromProjectionMatrix(we), ve = this.localClippingEnabled, ne = ee.init(this.clippingPlanes, ve), m = fe.get(x, T.length), m.init(), T.push(m), H.enabled === true && H.isPresenting === true) {
        const Q = y.xr.getDepthSensingMesh();
        Q !== null && Ea(Q, L, -1 / 0, y.sortObjects);
      }
      Ea(x, L, 0, y.sortObjects), m.finish(), y.sortObjects === true && m.sort(ae, de), qe = H.enabled === false || H.isPresenting === false || H.hasDepthSensing() === false, qe && Ae.addToRenderList(m, x), this.info.render.frame++, ne === true && ee.beginShadows();
      const B = f.state.shadowsArray;
      pe.render(B, x, L), ne === true && ee.endShadows(), this.info.autoReset === true && this.info.reset();
      const k = m.opaque, U = m.transmissive;
      if (f.setupLights(), L.isArrayCamera) {
        const Q = L.cameras;
        if (U.length > 0) for (let re = 0, ue = Q.length; re < ue; re++) {
          const ge = Q[re];
          Gl(k, U, x, ge);
        }
        qe && Ae.render(x);
        for (let re = 0, ue = Q.length; re < ue; re++) {
          const ge = Q[re];
          Vl(m, x, ge, ge.viewport);
        }
      } else U.length > 0 && Gl(k, U, x, L), qe && Ae.render(x), Vl(m, x, L);
      N !== null && R === 0 && (b.updateMultisampleRenderTarget(N), b.updateRenderTargetMipmap(N)), x.isScene === true && x.onAfterRender(y, x, L), ct.resetDefaultState(), M = -1, S = null, E.pop(), E.length > 0 ? (f = E[E.length - 1], ne === true && ee.setGlobalState(y.clippingPlanes, f.state.camera)) : f = null, T.pop(), T.length > 0 ? m = T[T.length - 1] : m = null;
    };
    function Ea(x, L, B, k) {
      if (x.visible === false) return;
      if (x.layers.test(L.layers)) {
        if (x.isGroup) B = x.renderOrder;
        else if (x.isLOD) x.autoUpdate === true && x.update(L);
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
              const Ee = ge[Ce], Ke = ue[Ee.materialIndex];
              Ke && Ke.visible && m.push(x, re, Ke, B, ke.z, Ee);
            }
          } else ue.visible && m.push(x, re, ue, B, ke.z, null);
        }
      }
      const Q = x.children;
      for (let re = 0, ue = Q.length; re < ue; re++) Ea(Q[re], L, B, k);
    }
    function Vl(x, L, B, k) {
      const U = x.opaque, Q = x.transmissive, re = x.transparent;
      f.setupLightsView(B), ne === true && ee.setGlobalState(y.clippingPlanes, B), k && Me.viewport(I.copy(k)), U.length > 0 && hr(U, L, B), Q.length > 0 && hr(Q, L, B), re.length > 0 && hr(re, L, B), Me.buffers.depth.setTest(true), Me.buffers.depth.setMask(true), Me.buffers.color.setMask(true), Me.setPolygonOffset(false);
    }
    function Gl(x, L, B, k) {
      if ((B.isScene === true ? B.overrideMaterial : null) !== null) return;
      f.state.transmissionRenderTarget[k.id] === void 0 && (f.state.transmissionRenderTarget[k.id] = new Bt(1, 1, { generateMipmaps: true, type: Ve.has("EXT_color_buffer_half_float") || Ve.has("EXT_color_buffer_float") ? Ms : Ot, minFilter: Gn, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Xe.workingColorSpace }));
      const Q = f.state.transmissionRenderTarget[k.id], re = k.viewport || I;
      Q.setSize(re.z * y.transmissionResolutionScale, re.w * y.transmissionResolutionScale);
      const ue = y.getRenderTarget();
      y.setRenderTarget(Q), y.getClearColor(X), J = y.getClearAlpha(), J < 1 && y.setClearColor(16777215, 0.5), y.clear(), qe && Ae.render(B);
      const ge = y.toneMapping;
      y.toneMapping = di;
      const Ce = k.viewport;
      if (k.viewport !== void 0 && (k.viewport = void 0), f.setupLightsView(k), ne === true && ee.setGlobalState(y.clippingPlanes, k), hr(x, B, k), b.updateMultisampleRenderTarget(Q), b.updateRenderTargetMipmap(Q), Ve.has("WEBGL_multisampled_render_to_texture") === false) {
        let Ie = false;
        for (let Ee = 0, Ke = L.length; Ee < Ke; Ee++) {
          const et = L[Ee], vt = et.object, gt = et.geometry, Ze = et.material, be = et.group;
          if (Ze.side === Yt && vt.layers.test(k.layers)) {
            const Rt = Ze.side;
            Ze.side = St, Ze.needsUpdate = true, Wl(vt, B, k, gt, Ze, be), Ze.side = Rt, Ze.needsUpdate = true, Ie = true;
          }
        }
        Ie === true && (b.updateMultisampleRenderTarget(Q), b.updateRenderTargetMipmap(Q));
      }
      y.setRenderTarget(ue), y.setClearColor(X, J), Ce !== void 0 && (k.viewport = Ce), y.toneMapping = ge;
    }
    function hr(x, L, B) {
      const k = L.isScene === true ? L.overrideMaterial : null;
      for (let U = 0, Q = x.length; U < Q; U++) {
        const re = x[U], ue = re.object, ge = re.geometry, Ce = k === null ? re.material : k, Ie = re.group;
        ue.layers.test(B.layers) && Wl(ue, L, B, ge, Ce, Ie);
      }
    }
    function Wl(x, L, B, k, U, Q) {
      x.onBeforeRender(y, L, B, k, U, Q), x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), U.onBeforeRender(y, L, B, k, x, Q), U.transparent === true && U.side === Yt && U.forceSinglePass === false ? (U.side = St, U.needsUpdate = true, y.renderBufferDirect(B, L, k, U, x, Q), U.side = Cn, U.needsUpdate = true, y.renderBufferDirect(B, L, k, U, x, Q), U.side = Yt) : y.renderBufferDirect(B, L, k, U, x, Q), x.onAfterRender(y, L, B, k, U, Q);
    }
    function ur(x, L, B) {
      L.isScene !== true && (L = ft);
      const k = Se.get(x), U = f.state.lights, Q = f.state.shadowsArray, re = U.state.version, ue = xe.getParameters(x, U.state, Q, L, B), ge = xe.getProgramCacheKey(ue);
      let Ce = k.programs;
      k.environment = x.isMeshStandardMaterial ? L.environment : null, k.fog = L.fog, k.envMap = (x.isMeshStandardMaterial ? F : v).get(x.envMap || k.environment), k.envMapRotation = k.environment !== null && x.envMap === null ? L.environmentRotation : x.envMapRotation, Ce === void 0 && (x.addEventListener("dispose", Le), Ce = /* @__PURE__ */ new Map(), k.programs = Ce);
      let Ie = Ce.get(ge);
      if (Ie !== void 0) {
        if (k.currentProgram === Ie && k.lightsStateVersion === re) return Yl(x, ue), Ie;
      } else ue.uniforms = xe.getUniforms(x), x.onBeforeCompile(ue, y), Ie = xe.acquireProgram(ue, ge), Ce.set(ge, Ie), k.uniforms = ue.uniforms;
      const Ee = k.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === true) && (Ee.clippingPlanes = ee.uniform), Yl(x, ue), k.needsLights = Gu(x), k.lightsStateVersion = re, k.needsLights && (Ee.ambientLightColor.value = U.state.ambient, Ee.lightProbe.value = U.state.probe, Ee.directionalLights.value = U.state.directional, Ee.directionalLightShadows.value = U.state.directionalShadow, Ee.spotLights.value = U.state.spot, Ee.spotLightShadows.value = U.state.spotShadow, Ee.rectAreaLights.value = U.state.rectArea, Ee.ltc_1.value = U.state.rectAreaLTC1, Ee.ltc_2.value = U.state.rectAreaLTC2, Ee.pointLights.value = U.state.point, Ee.pointLightShadows.value = U.state.pointShadow, Ee.hemisphereLights.value = U.state.hemi, Ee.directionalShadowMap.value = U.state.directionalShadowMap, Ee.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Ee.spotShadowMap.value = U.state.spotShadowMap, Ee.spotLightMatrix.value = U.state.spotLightMatrix, Ee.spotLightMap.value = U.state.spotLightMap, Ee.pointShadowMap.value = U.state.pointShadowMap, Ee.pointShadowMatrix.value = U.state.pointShadowMatrix), k.currentProgram = Ie, k.uniformsList = null, Ie;
    }
    function Xl(x) {
      if (x.uniformsList === null) {
        const L = x.currentProgram.getUniforms();
        x.uniformsList = Kr.seqWithValue(L.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function Yl(x, L) {
      const B = Se.get(x);
      B.outputColorSpace = L.outputColorSpace, B.batching = L.batching, B.batchingColor = L.batchingColor, B.instancing = L.instancing, B.instancingColor = L.instancingColor, B.instancingMorph = L.instancingMorph, B.skinning = L.skinning, B.morphTargets = L.morphTargets, B.morphNormals = L.morphNormals, B.morphColors = L.morphColors, B.morphTargetsCount = L.morphTargetsCount, B.numClippingPlanes = L.numClippingPlanes, B.numIntersection = L.numClipIntersection, B.vertexAlphas = L.vertexAlphas, B.vertexTangents = L.vertexTangents, B.toneMapping = L.toneMapping;
    }
    function Hu(x, L, B, k, U) {
      L.isScene !== true && (L = ft), b.resetTextureUnits();
      const Q = L.fog, re = k.isMeshStandardMaterial ? L.environment : null, ue = N === null ? y.outputColorSpace : N.isXRRenderTarget === true ? N.texture.colorSpace : Dt, ge = (k.isMeshStandardMaterial ? F : v).get(k.envMap || re), Ce = k.vertexColors === true && !!B.attributes.color && B.attributes.color.itemSize === 4, Ie = !!B.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), Ee = !!B.morphAttributes.position, Ke = !!B.morphAttributes.normal, et = !!B.morphAttributes.color;
      let vt = di;
      k.toneMapped && (N === null || N.isXRRenderTarget === true) && (vt = y.toneMapping);
      const gt = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Ze = gt !== void 0 ? gt.length : 0, be = Se.get(k), Rt = f.state.lights;
      if (ne === true && (ve === true || x !== S)) {
        const kt = x === S && k.id === M;
        ee.setState(k, x, kt);
      }
      let tt = false;
      k.version === be.__version ? (be.needsLights && be.lightsStateVersion !== Rt.state.version || be.outputColorSpace !== ue || U.isBatchedMesh && be.batching === false || !U.isBatchedMesh && be.batching === true || U.isBatchedMesh && be.batchingColor === true && U.colorTexture === null || U.isBatchedMesh && be.batchingColor === false && U.colorTexture !== null || U.isInstancedMesh && be.instancing === false || !U.isInstancedMesh && be.instancing === true || U.isSkinnedMesh && be.skinning === false || !U.isSkinnedMesh && be.skinning === true || U.isInstancedMesh && be.instancingColor === true && U.instanceColor === null || U.isInstancedMesh && be.instancingColor === false && U.instanceColor !== null || U.isInstancedMesh && be.instancingMorph === true && U.morphTexture === null || U.isInstancedMesh && be.instancingMorph === false && U.morphTexture !== null || be.envMap !== ge || k.fog === true && be.fog !== Q || be.numClippingPlanes !== void 0 && (be.numClippingPlanes !== ee.numPlanes || be.numIntersection !== ee.numIntersection) || be.vertexAlphas !== Ce || be.vertexTangents !== Ie || be.morphTargets !== Ee || be.morphNormals !== Ke || be.morphColors !== et || be.toneMapping !== vt || be.morphTargetsCount !== Ze) && (tt = true) : (tt = true, be.__version = k.version);
      let dn = be.currentProgram;
      tt === true && (dn = ur(k, L, U));
      let Ui = false, jt = false, Ps = false;
      const dt = dn.getUniforms(), tn = be.uniforms;
      if (Me.useProgram(dn.program) && (Ui = true, jt = true, Ps = true), k.id !== M && (M = k.id, jt = true), Ui || S !== x) {
        Me.buffers.depth.getReversed() ? (oe.copy(x.projectionMatrix), ef(oe), tf(oe), dt.setValue(A, "projectionMatrix", oe)) : dt.setValue(A, "projectionMatrix", x.projectionMatrix), dt.setValue(A, "viewMatrix", x.matrixWorldInverse);
        const Wt = dt.map.cameraPosition;
        Wt !== void 0 && Wt.setValue(A, Pe.setFromMatrixPosition(x.matrixWorld)), Ge.logarithmicDepthBuffer && dt.setValue(A, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && dt.setValue(A, "isOrthographic", x.isOrthographicCamera === true), S !== x && (S = x, jt = true, Ps = true);
      }
      if (U.isSkinnedMesh) {
        dt.setOptional(A, U, "bindMatrix"), dt.setOptional(A, U, "bindMatrixInverse");
        const kt = U.skeleton;
        kt && (kt.boneTexture === null && kt.computeBoneTexture(), dt.setValue(A, "boneTexture", kt.boneTexture, b));
      }
      U.isBatchedMesh && (dt.setOptional(A, U, "batchingTexture"), dt.setValue(A, "batchingTexture", U._matricesTexture, b), dt.setOptional(A, U, "batchingIdTexture"), dt.setValue(A, "batchingIdTexture", U._indirectTexture, b), dt.setOptional(A, U, "batchingColorTexture"), U._colorsTexture !== null && dt.setValue(A, "batchingColorTexture", U._colorsTexture, b));
      const nn = B.morphAttributes;
      if ((nn.position !== void 0 || nn.normal !== void 0 || nn.color !== void 0) && Re.update(U, B, dn), (jt || be.receiveShadow !== U.receiveShadow) && (be.receiveShadow = U.receiveShadow, dt.setValue(A, "receiveShadow", U.receiveShadow)), k.isMeshGouraudMaterial && k.envMap !== null && (tn.envMap.value = ge, tn.flipEnvMap.value = ge.isCubeTexture && ge.isRenderTargetTexture === false ? -1 : 1), k.isMeshStandardMaterial && k.envMap === null && L.environment !== null && (tn.envMapIntensity.value = L.environmentIntensity), jt && (dt.setValue(A, "toneMappingExposure", y.toneMappingExposure), be.needsLights && Vu(tn, Ps), Q && k.fog === true && le.refreshFogUniforms(tn, Q), le.refreshMaterialUniforms(tn, k, V, te, f.state.transmissionRenderTarget[x.id]), Kr.upload(A, Xl(be), tn, b)), k.isShaderMaterial && k.uniformsNeedUpdate === true && (Kr.upload(A, Xl(be), tn, b), k.uniformsNeedUpdate = false), k.isSpriteMaterial && dt.setValue(A, "center", U.center), dt.setValue(A, "modelViewMatrix", U.modelViewMatrix), dt.setValue(A, "normalMatrix", U.normalMatrix), dt.setValue(A, "modelMatrix", U.matrixWorld), k.isShaderMaterial || k.isRawShaderMaterial) {
        const kt = k.uniformsGroups;
        for (let Wt = 0, ba = kt.length; Wt < ba; Wt++) {
          const _i = kt[Wt];
          D.update(_i, dn), D.bind(_i, dn);
        }
      }
      return dn;
    }
    function Vu(x, L) {
      x.ambientLightColor.needsUpdate = L, x.lightProbe.needsUpdate = L, x.directionalLights.needsUpdate = L, x.directionalLightShadows.needsUpdate = L, x.pointLights.needsUpdate = L, x.pointLightShadows.needsUpdate = L, x.spotLights.needsUpdate = L, x.spotLightShadows.needsUpdate = L, x.rectAreaLights.needsUpdate = L, x.hemisphereLights.needsUpdate = L;
    }
    function Gu(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === true;
    }
    this.getActiveCubeFace = function() {
      return w;
    }, this.getActiveMipmapLevel = function() {
      return R;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(x, L, B) {
      Se.get(x.texture).__webglTexture = L, Se.get(x.depthTexture).__webglTexture = B;
      const k = Se.get(x);
      k.__hasExternalTextures = true, k.__autoAllocateDepthBuffer = B === void 0, k.__autoAllocateDepthBuffer || Ve.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), k.__useRenderToTexture = false);
    }, this.setRenderTargetFramebuffer = function(x, L) {
      const B = Se.get(x);
      B.__webglFramebuffer = L, B.__useDefaultFramebuffer = L === void 0;
    };
    const Wu = A.createFramebuffer();
    this.setRenderTarget = function(x, L = 0, B = 0) {
      N = x, w = L, R = B;
      let k = true, U = null, Q = false, re = false;
      if (x) {
        const ge = Se.get(x);
        if (ge.__useDefaultFramebuffer !== void 0) Me.bindFramebuffer(A.FRAMEBUFFER, null), k = false;
        else if (ge.__webglFramebuffer === void 0) b.setupRenderTarget(x);
        else if (ge.__hasExternalTextures) b.rebindTextures(x, Se.get(x.texture).__webglTexture, Se.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Ee = x.depthTexture;
          if (ge.__boundDepthTexture !== Ee) {
            if (Ee !== null && Se.has(Ee) && (x.width !== Ee.image.width || x.height !== Ee.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            b.setupDepthRenderbuffer(x);
          }
        }
        const Ce = x.texture;
        (Ce.isData3DTexture || Ce.isDataArrayTexture || Ce.isCompressedArrayTexture) && (re = true);
        const Ie = Se.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Ie[L]) ? U = Ie[L][B] : U = Ie[L], Q = true) : x.samples > 0 && b.useMultisampledRTT(x) === false ? U = Se.get(x).__webglMultisampledFramebuffer : Array.isArray(Ie) ? U = Ie[B] : U = Ie, I.copy(x.viewport), q.copy(x.scissor), z = x.scissorTest;
      } else I.copy(ye).multiplyScalar(V).floor(), q.copy(Be).multiplyScalar(V).floor(), z = lt;
      if (B !== 0 && (U = Wu), Me.bindFramebuffer(A.FRAMEBUFFER, U) && k && Me.drawBuffers(x, U), Me.viewport(I), Me.scissor(q), Me.setScissorTest(z), Q) {
        const ge = Se.get(x.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + L, ge.__webglTexture, B);
      } else if (re) {
        const ge = Se.get(x.texture), Ce = L;
        A.framebufferTextureLayer(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, ge.__webglTexture, B, Ce);
      } else if (x !== null && B !== 0) {
        const ge = Se.get(x.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, ge.__webglTexture, B);
      }
      M = -1;
    }, this.readRenderTargetPixels = function(x, L, B, k, U, Q, re) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ue = Se.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && re !== void 0 && (ue = ue[re]), ue) {
        Me.bindFramebuffer(A.FRAMEBUFFER, ue);
        try {
          const ge = x.texture, Ce = ge.format, Ie = ge.type;
          if (!Ge.textureFormatReadable(Ce)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ge.textureTypeReadable(Ie)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= x.width - k && B >= 0 && B <= x.height - U && A.readPixels(L, B, k, U, Ne.convert(Ce), Ne.convert(Ie), Q);
        } finally {
          const ge = N !== null ? Se.get(N).__webglFramebuffer : null;
          Me.bindFramebuffer(A.FRAMEBUFFER, ge);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, L, B, k, U, Q, re) {
      if (!(x && x.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ue = Se.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && re !== void 0 && (ue = ue[re]), ue) {
        const ge = x.texture, Ce = ge.format, Ie = ge.type;
        if (!Ge.textureFormatReadable(Ce)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Ge.textureTypeReadable(Ie)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (L >= 0 && L <= x.width - k && B >= 0 && B <= x.height - U) {
          Me.bindFramebuffer(A.FRAMEBUFFER, ue);
          const Ee = A.createBuffer();
          A.bindBuffer(A.PIXEL_PACK_BUFFER, Ee), A.bufferData(A.PIXEL_PACK_BUFFER, Q.byteLength, A.STREAM_READ), A.readPixels(L, B, k, U, Ne.convert(Ce), Ne.convert(Ie), 0);
          const Ke = N !== null ? Se.get(N).__webglFramebuffer : null;
          Me.bindFramebuffer(A.FRAMEBUFFER, Ke);
          const et = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return A.flush(), await Qd(A, et, 4), A.bindBuffer(A.PIXEL_PACK_BUFFER, Ee), A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, Q), A.deleteBuffer(Ee), A.deleteSync(et), Q;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(x, L = null, B = 0) {
      x.isTexture !== true && (Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."), L = arguments[0] || null, x = arguments[1]);
      const k = Math.pow(2, -B), U = Math.floor(x.image.width * k), Q = Math.floor(x.image.height * k), re = L !== null ? L.x : 0, ue = L !== null ? L.y : 0;
      b.setTexture2D(x, 0), A.copyTexSubImage2D(A.TEXTURE_2D, B, 0, 0, re, ue, U, Q), Me.unbindTexture();
    };
    const Xu = A.createFramebuffer(), Yu = A.createFramebuffer();
    this.copyTextureToTexture = function(x, L, B = null, k = null, U = 0, Q = null) {
      x.isTexture !== true && (Zi("WebGLRenderer: copyTextureToTexture function signature has changed."), k = arguments[0] || null, x = arguments[1], L = arguments[2], Q = arguments[3] || 0, B = null), Q === null && (U !== 0 ? (Zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), Q = U, U = 0) : Q = 0);
      let re, ue, ge, Ce, Ie, Ee, Ke, et, vt;
      const gt = x.isCompressedTexture ? x.mipmaps[Q] : x.image;
      if (B !== null) re = B.max.x - B.min.x, ue = B.max.y - B.min.y, ge = B.isBox3 ? B.max.z - B.min.z : 1, Ce = B.min.x, Ie = B.min.y, Ee = B.isBox3 ? B.min.z : 0;
      else {
        const nn = Math.pow(2, -U);
        re = Math.floor(gt.width * nn), ue = Math.floor(gt.height * nn), x.isDataArrayTexture ? ge = gt.depth : x.isData3DTexture ? ge = Math.floor(gt.depth * nn) : ge = 1, Ce = 0, Ie = 0, Ee = 0;
      }
      k !== null ? (Ke = k.x, et = k.y, vt = k.z) : (Ke = 0, et = 0, vt = 0);
      const Ze = Ne.convert(L.format), be = Ne.convert(L.type);
      let Rt;
      L.isData3DTexture ? (b.setTexture3D(L, 0), Rt = A.TEXTURE_3D) : L.isDataArrayTexture || L.isCompressedArrayTexture ? (b.setTexture2DArray(L, 0), Rt = A.TEXTURE_2D_ARRAY) : (b.setTexture2D(L, 0), Rt = A.TEXTURE_2D), A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, L.flipY), A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), A.pixelStorei(A.UNPACK_ALIGNMENT, L.unpackAlignment);
      const tt = A.getParameter(A.UNPACK_ROW_LENGTH), dn = A.getParameter(A.UNPACK_IMAGE_HEIGHT), Ui = A.getParameter(A.UNPACK_SKIP_PIXELS), jt = A.getParameter(A.UNPACK_SKIP_ROWS), Ps = A.getParameter(A.UNPACK_SKIP_IMAGES);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, gt.width), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, gt.height), A.pixelStorei(A.UNPACK_SKIP_PIXELS, Ce), A.pixelStorei(A.UNPACK_SKIP_ROWS, Ie), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Ee);
      const dt = x.isDataArrayTexture || x.isData3DTexture, tn = L.isDataArrayTexture || L.isData3DTexture;
      if (x.isDepthTexture) {
        const nn = Se.get(x), kt = Se.get(L), Wt = Se.get(nn.__renderTarget), ba = Se.get(kt.__renderTarget);
        Me.bindFramebuffer(A.READ_FRAMEBUFFER, Wt.__webglFramebuffer), Me.bindFramebuffer(A.DRAW_FRAMEBUFFER, ba.__webglFramebuffer);
        for (let _i = 0; _i < ge; _i++) dt && (A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Se.get(x).__webglTexture, U, Ee + _i), A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Se.get(L).__webglTexture, Q, vt + _i)), A.blitFramebuffer(Ce, Ie, re, ue, Ke, et, re, ue, A.DEPTH_BUFFER_BIT, A.NEAREST);
        Me.bindFramebuffer(A.READ_FRAMEBUFFER, null), Me.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else if (U !== 0 || x.isRenderTargetTexture || Se.has(x)) {
        const nn = Se.get(x), kt = Se.get(L);
        Me.bindFramebuffer(A.READ_FRAMEBUFFER, Xu), Me.bindFramebuffer(A.DRAW_FRAMEBUFFER, Yu);
        for (let Wt = 0; Wt < ge; Wt++) dt ? A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, nn.__webglTexture, U, Ee + Wt) : A.framebufferTexture2D(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, nn.__webglTexture, U), tn ? A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, kt.__webglTexture, Q, vt + Wt) : A.framebufferTexture2D(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, kt.__webglTexture, Q), U !== 0 ? A.blitFramebuffer(Ce, Ie, re, ue, Ke, et, re, ue, A.COLOR_BUFFER_BIT, A.NEAREST) : tn ? A.copyTexSubImage3D(Rt, Q, Ke, et, vt + Wt, Ce, Ie, re, ue) : A.copyTexSubImage2D(Rt, Q, Ke, et, Ce, Ie, re, ue);
        Me.bindFramebuffer(A.READ_FRAMEBUFFER, null), Me.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else tn ? x.isDataTexture || x.isData3DTexture ? A.texSubImage3D(Rt, Q, Ke, et, vt, re, ue, ge, Ze, be, gt.data) : L.isCompressedArrayTexture ? A.compressedTexSubImage3D(Rt, Q, Ke, et, vt, re, ue, ge, Ze, gt.data) : A.texSubImage3D(Rt, Q, Ke, et, vt, re, ue, ge, Ze, be, gt) : x.isDataTexture ? A.texSubImage2D(A.TEXTURE_2D, Q, Ke, et, re, ue, Ze, be, gt.data) : x.isCompressedTexture ? A.compressedTexSubImage2D(A.TEXTURE_2D, Q, Ke, et, gt.width, gt.height, Ze, gt.data) : A.texSubImage2D(A.TEXTURE_2D, Q, Ke, et, re, ue, Ze, be, gt);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, tt), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, dn), A.pixelStorei(A.UNPACK_SKIP_PIXELS, Ui), A.pixelStorei(A.UNPACK_SKIP_ROWS, jt), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Ps), Q === 0 && L.generateMipmaps && A.generateMipmap(Rt), Me.unbindTexture();
    }, this.copyTextureToTexture3D = function(x, L, B = null, k = null, U = 0) {
      return x.isTexture !== true && (Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."), B = arguments[0] || null, k = arguments[1] || null, x = arguments[2], L = arguments[3], U = arguments[4] || 0), Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(x, L, B, k, U);
    }, this.initRenderTarget = function(x) {
      Se.get(x).__webglFramebuffer === void 0 && b.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? b.setTextureCube(x, 0) : x.isData3DTexture ? b.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? b.setTexture2DArray(x, 0) : b.setTexture2D(x, 0), Me.unbindTexture();
    }, this.resetState = function() {
      w = 0, R = 0, N = null, Me.reset(), ct.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Wn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorspace = Xe._getDrawingBufferColorSpace(e), t.unpackColorSpace = Xe._getUnpackColorSpace();
  }
}
const hh = { type: "change" }, Il = { type: "start" }, Mu = { type: "end" }, kr = new Es(), uh = new ri(), n0 = Math.cos(70 * Qh.DEG2RAD), Et = new C(), Xt = 2 * Math.PI, ot = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, so = 1e-6;
class i0 extends vp {
  constructor(e, t = null) {
    super(e, t), this.state = ot.NONE, this.enabled = true, this.target = new C(), this.cursor = new C(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: as.ROTATE, MIDDLE: as.DOLLY, RIGHT: as.PAN }, this.touches = { ONE: es.ROTATE, TWO: es.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new C(), this._lastQuaternion = new Pt(), this._lastTargetPosition = new C(), this._quat = new Pt().setFromUnitVectors(e.up, new C(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new kc(), this._sphericalDelta = new kc(), this._scale = 1, this._panOffset = new C(), this._rotateStart = new _e(), this._rotateEnd = new _e(), this._rotateDelta = new _e(), this._panStart = new _e(), this._panEnd = new _e(), this._panDelta = new _e(), this._dollyStart = new _e(), this._dollyEnd = new _e(), this._dollyDelta = new _e(), this._dollyDirection = new C(), this._mouse = new _e(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = r0.bind(this), this._onPointerDown = s0.bind(this), this._onPointerUp = a0.bind(this), this._onContextMenu = f0.bind(this), this._onMouseWheel = c0.bind(this), this._onKeyDown = h0.bind(this), this._onTouchStart = u0.bind(this), this._onTouchMove = d0.bind(this), this._onMouseDown = o0.bind(this), this._onMouseMove = l0.bind(this), this._interceptControlDown = p0.bind(this), this._interceptControlUp = m0.bind(this), this.domElement !== null && this.connect(), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(hh), this.update(), this.state = ot.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    Et.copy(t).sub(this.target), Et.applyQuaternion(this._quat), this._spherical.setFromVector3(Et), this.autoRotate && this.state === ot.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(n) && isFinite(s) && (n < -Math.PI ? n += Xt : n > Math.PI && (n -= Xt), s < -Math.PI ? s += Xt : s > Math.PI && (s -= Xt), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (Et.setFromSpherical(this._spherical), Et.applyQuaternion(this._quatInverse), t.copy(this.target).add(Et), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = Et.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const o = new C(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new C(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), a = Et.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (kr.origin.copy(this.object.position), kr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(kr.direction)) < n0 ? this.object.lookAt(this.target) : (uh.setFromNormalAndCoplanarPoint(this.object.up, this.target), kr.intersectPlane(uh, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > so || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > so || this._lastTargetPosition.distanceToSquared(this.target) > so ? (this.dispatchEvent(hh), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Xt / 60 * this.autoRotateSpeed * e : Xt / 60 / 60 * this.autoRotateSpeed;
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
    Et.setFromMatrixColumn(t, 0), Et.multiplyScalar(-e), this._panOffset.add(Et);
  }
  _panUp(e, t) {
    this.screenSpacePanning === true ? Et.setFromMatrixColumn(t, 1) : (Et.setFromMatrixColumn(t, 0), Et.crossVectors(this.object.up, Et)), Et.multiplyScalar(e), this._panOffset.add(Et);
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      Et.copy(s).sub(this.target);
      let r = Et.length();
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
    const n = this.domElement.getBoundingClientRect(), s = e - n.left, r = t - n.top, a = n.width, o = n.height;
    this._mouse.x = s / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
    this._rotateLeft(Xt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Xt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(Xt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = true;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-Xt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = true;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(Xt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = true;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-Xt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = true;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, s);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, s);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, r = Math.sqrt(n * n + s * s);
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
      const n = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + n.x), r = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(s, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Xt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Xt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, s);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, r = Math.sqrt(n * n + s * s);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (e.pageX + t.x) * 0.5, o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, o);
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
    t === void 0 && (t = new _e(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
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
function s0(i3) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i3.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i3) && (this._addPointer(i3), i3.pointerType === "touch" ? this._onTouchStart(i3) : this._onMouseDown(i3)));
}
function r0(i3) {
  this.enabled !== false && (i3.pointerType === "touch" ? this._onTouchMove(i3) : this._onMouseMove(i3));
}
function a0(i3) {
  switch (this._removePointer(i3), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i3.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Mu), this.state = ot.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function o0(i3) {
  let e;
  switch (i3.button) {
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
    case as.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(i3), this.state = ot.DOLLY;
      break;
    case as.ROTATE:
      if (i3.ctrlKey || i3.metaKey || i3.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i3), this.state = ot.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i3), this.state = ot.ROTATE;
      }
      break;
    case as.PAN:
      if (i3.ctrlKey || i3.metaKey || i3.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i3), this.state = ot.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i3), this.state = ot.PAN;
      }
      break;
    default:
      this.state = ot.NONE;
  }
  this.state !== ot.NONE && this.dispatchEvent(Il);
}
function l0(i3) {
  switch (this.state) {
    case ot.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(i3);
      break;
    case ot.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(i3);
      break;
    case ot.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(i3);
      break;
  }
}
function c0(i3) {
  this.enabled === false || this.enableZoom === false || this.state !== ot.NONE || (i3.preventDefault(), this.dispatchEvent(Il), this._handleMouseWheel(this._customWheelEvent(i3)), this.dispatchEvent(Mu));
}
function h0(i3) {
  this.enabled !== false && this._handleKeyDown(i3);
}
function u0(i3) {
  switch (this._trackPointer(i3), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case es.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(i3), this.state = ot.TOUCH_ROTATE;
          break;
        case es.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(i3), this.state = ot.TOUCH_PAN;
          break;
        default:
          this.state = ot.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case es.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(i3), this.state = ot.TOUCH_DOLLY_PAN;
          break;
        case es.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(i3), this.state = ot.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = ot.NONE;
      }
      break;
    default:
      this.state = ot.NONE;
  }
  this.state !== ot.NONE && this.dispatchEvent(Il);
}
function d0(i3) {
  switch (this._trackPointer(i3), this.state) {
    case ot.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(i3), this.update();
      break;
    case ot.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(i3), this.update();
      break;
    case ot.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(i3), this.update();
      break;
    case ot.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(i3), this.update();
      break;
    default:
      this.state = ot.NONE;
  }
}
function f0(i3) {
  this.enabled !== false && i3.preventDefault();
}
function p0(i3) {
  i3.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function m0(i3) {
  i3.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function dh(i3, e) {
  if (e === Ad) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), i3;
  if (e === jo || e === $h) {
    let t = i3.getIndex();
    if (t === null) {
      const a = [], o = i3.getAttribute("position");
      if (o !== void 0) {
        for (let l = 0; l < o.count; l++) a.push(l);
        i3.setIndex(a), t = i3.getIndex();
      } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), i3;
    }
    const n = t.count - 2, s = [];
    if (e === jo) for (let a = 1; a <= n; a++) s.push(t.getX(0)), s.push(t.getX(a)), s.push(t.getX(a + 1));
    else for (let a = 0; a < n; a++) a % 2 === 0 ? (s.push(t.getX(a)), s.push(t.getX(a + 1)), s.push(t.getX(a + 2))) : (s.push(t.getX(a + 2)), s.push(t.getX(a + 1)), s.push(t.getX(a)));
    s.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = i3.clone();
    return r.setIndex(s), r.clearGroups(), r;
  } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), i3;
}
class g0 extends ws {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new y0(t);
    }), this.register(function(t) {
      return new M0(t);
    }), this.register(function(t) {
      return new I0(t);
    }), this.register(function(t) {
      return new D0(t);
    }), this.register(function(t) {
      return new L0(t);
    }), this.register(function(t) {
      return new b0(t);
    }), this.register(function(t) {
      return new T0(t);
    }), this.register(function(t) {
      return new A0(t);
    }), this.register(function(t) {
      return new w0(t);
    }), this.register(function(t) {
      return new S0(t);
    }), this.register(function(t) {
      return new R0(t);
    }), this.register(function(t) {
      return new E0(t);
    }), this.register(function(t) {
      return new P0(t);
    }), this.register(function(t) {
      return new C0(t);
    }), this.register(function(t) {
      return new v0(t);
    }), this.register(function(t) {
      return new U0(t);
    }), this.register(function(t) {
      return new N0(t);
    });
  }
  load(e, t, n, s) {
    const r = this;
    let a;
    if (this.resourcePath !== "") a = this.resourcePath;
    else if (this.path !== "") {
      const c = qs.extractUrlBase(e);
      a = qs.resolveURL(c, this.path);
    } else a = qs.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(c) {
      s ? s(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new gu(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        r.parse(c, a, function(h) {
          t(h), r.manager.itemEnd(e);
        }, o);
      } catch (h) {
        o(h);
      }
    }, n, o);
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
  parse(e, t, n, s) {
    let r;
    const a = {}, o = {}, l = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer) if (l.decode(new Uint8Array(e, 0, 4)) === Eu) {
      try {
        a[ze.KHR_BINARY_GLTF] = new F0(e);
      } catch (u) {
        s && s(u);
        return;
      }
      r = JSON.parse(a[ze.KHR_BINARY_GLTF].content);
    } else r = JSON.parse(l.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new K0(r, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[u.name] = u, a[u.name] = true;
    }
    if (r.extensionsUsed) for (let h = 0; h < r.extensionsUsed.length; ++h) {
      const u = r.extensionsUsed[h], d = r.extensionsRequired || [];
      switch (u) {
        case ze.KHR_MATERIALS_UNLIT:
          a[u] = new x0();
          break;
        case ze.KHR_DRACO_MESH_COMPRESSION:
          a[u] = new O0(r, this.dracoLoader);
          break;
        case ze.KHR_TEXTURE_TRANSFORM:
          a[u] = new B0();
          break;
        case ze.KHR_MESH_QUANTIZATION:
          a[u] = new k0();
          break;
        default:
          d.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
      }
    }
    c.setExtensions(a), c.setPlugins(o), c.parse(n, s);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(s, r) {
      n.parse(e, t, s, r);
    });
  }
}
function _0() {
  let i3 = {};
  return { get: function(e) {
    return i3[e];
  }, add: function(e, t) {
    i3[e] = t;
  }, remove: function(e) {
    delete i3[e];
  }, removeAll: function() {
    i3 = {};
  } };
}
const ze = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" };
class v0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, s = t.length; n < s; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let s = t.cache.get(n);
    if (s) return s;
    const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let c;
    const h = new Te(16777215);
    l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], Dt);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new Qf(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new ca(h), c.distance = u;
        break;
      case "spot":
        c = new wl(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, Hn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), s = Promise.resolve(c), t.cache.add(n, s), s;
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], o = (r.extensions && r.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(l) {
      return n._getNodeRef(t.cache, o, l);
    });
  }
}
class x0 {
  constructor() {
    this.name = ze.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return li;
  }
  extendParams(e, t, n) {
    const s = [];
    e.color = new Te(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], Dt), e.opacity = a[3];
      }
      r.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", r.baseColorTexture, Ye));
    }
    return Promise.all(s);
  }
}
class S0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = s.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class y0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], a = s.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new _e(o, o);
    }
    return Promise.all(r);
  }
}
class M0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = s.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class E0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], a = s.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class b0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [];
    t.sheenColor = new Te(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = s.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Dt);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, Ye)), a.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(r);
  }
}
class T0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], a = s.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(r);
  }
}
class A0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], a = s.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Te().setRGB(o[0], o[1], o[2], Dt), Promise.all(r);
  }
}
class w0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = s.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class R0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], a = s.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Te().setRGB(o[0], o[1], o[2], Dt), a.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, Ye)), Promise.all(r);
  }
}
class C0 {
  constructor(e) {
    this.parser = e, this.name = ze.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], a = s.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(r);
  }
}
class P0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const r = [], a = s.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(r);
  }
}
class I0 {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, s = n.textures[e];
    if (!s.extensions || !s.extensions[this.name]) return null;
    const r = s.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class D0 {
  constructor(e) {
    this.parser = e, this.name = ze.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, r = s.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t], o = s.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
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
class L0 {
  constructor(e) {
    this.parser = e, this.name = ze.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, r = s.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t], o = s.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
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
class U0 {
  constructor(e) {
    this.name = ze.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const s = n.extensions[this.name], r = this.parser.getDependency("buffer", s.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(o) {
        const l = s.byteOffset || 0, c = s.byteLength || 0, h = s.count, u = s.byteStride, d = new Uint8Array(o, l, c);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, d, s.mode, s.filter).then(function(p) {
          return p.buffer;
        }) : a.ready.then(function() {
          const p = new ArrayBuffer(h * u);
          return a.decodeGltfBuffer(new Uint8Array(p), h, u, d, s.mode, s.filter), p;
        });
      });
    } else return null;
  }
}
class N0 {
  constructor(e) {
    this.name = ze.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
    const s = t.meshes[n.mesh];
    for (const c of s.primitives) if (c.mode !== rn.TRIANGLES && c.mode !== rn.TRIANGLE_STRIP && c.mode !== rn.TRIANGLE_FAN && c.mode !== void 0) return null;
    const a = n.extensions[this.name].attributes, o = [], l = {};
    for (const c in a) o.push(this.parser.getDependency("accessor", a[c]).then((h) => (l[c] = h, l[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const h = c.pop(), u = h.isGroup ? h.children : [h], d = c[0].count, p = [];
      for (const g of u) {
        const _ = new De(), m = new C(), f = new Pt(), T = new C(1, 1, 1), E = new Pf(g.geometry, g.material, d);
        for (let y = 0; y < d; y++) l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, y), l.ROTATION && f.fromBufferAttribute(l.ROTATION, y), l.SCALE && T.fromBufferAttribute(l.SCALE, y), E.setMatrixAt(y, _.compose(m, f, T));
        for (const y in l) if (y === "_COLOR_0") {
          const P = l[y];
          E.instanceColor = new $o(P.array, P.itemSize, P.normalized);
        } else y !== "TRANSLATION" && y !== "ROTATION" && y !== "SCALE" && g.geometry.setAttribute(y, l[y]);
        pt.prototype.copy.call(E, g), this.parser.assignFinalMaterial(E), p.push(E);
      }
      return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
    }));
  }
}
const Eu = "glTF", ks = 12, fh = { JSON: 1313821514, BIN: 5130562 };
class F0 {
  constructor(e) {
    this.name = ze.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, ks), n = new TextDecoder();
    if (this.header = { magic: n.decode(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, true), length: t.getUint32(8, true) }, this.header.magic !== Eu) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const s = this.header.length - ks, r = new DataView(e, ks);
    let a = 0;
    for (; a < s; ) {
      const o = r.getUint32(a, true);
      a += 4;
      const l = r.getUint32(a, true);
      if (a += 4, l === fh.JSON) {
        const c = new Uint8Array(e, ks + a, o);
        this.content = n.decode(c);
      } else if (l === fh.BIN) {
        const c = ks + a;
        this.body = e.slice(c, c + o);
      }
      a += o;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class O0 {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = ze.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, s = this.dracoLoader, r = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const h in a) {
      const u = nl[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = nl[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], p = hs[d.componentType];
        c[u] = p.name, l[u] = d.normalized === true;
      }
    }
    return t.getDependency("bufferView", r).then(function(h) {
      return new Promise(function(u, d) {
        s.decodeDracoFile(h, function(p) {
          for (const g in p.attributes) {
            const _ = p.attributes[g], m = l[g];
            m !== void 0 && (_.normalized = m);
          }
          u(p);
        }, o, c, Dt, d);
      });
    });
  }
}
class B0 {
  constructor() {
    this.name = ze.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
}
class k0 {
  constructor() {
    this.name = ze.KHR_MESH_QUANTIZATION;
  }
}
class bu extends ar {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, r = e * s * 3 + s;
    for (let a = 0; a !== s; a++) t[a] = n[r + a];
    return t;
  }
  interpolate_(e, t, n, s) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, h = s - t, u = (n - t) / h, d = u * u, p = d * u, g = e * c, _ = g - c, m = -2 * p + 3 * d, f = p - d, T = 1 - m, E = f - d + u;
    for (let y = 0; y !== o; y++) {
      const P = a[_ + y + o], w = a[_ + y + l] * h, R = a[g + y + o], N = a[g + y] * h;
      r[y] = T * P + E * w + m * R + f * N;
    }
    return r;
  }
}
const z0 = new Pt();
class H0 extends bu {
  interpolate_(e, t, n, s) {
    const r = super.interpolate_(e, t, n, s);
    return z0.fromArray(r).normalize().toArray(r), r;
  }
}
const rn = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 }, hs = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, ph = { 9728: Vt, 9729: Ct, 9984: kh, 9985: Gr, 9986: Vs, 9987: Gn }, mh = { 33071: oi, 33648: Zr, 10497: ms }, ro = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, nl = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, ii = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, V0 = { CUBICSPLINE: void 0, LINEAR: er, STEP: Qs }, ao = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function G0(i3) {
  return i3.DefaultMaterial === void 0 && (i3.DefaultMaterial = new nr({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: false, depthTest: true, side: Cn })), i3.DefaultMaterial;
}
function bi(i3, e, t) {
  for (const n in t.extensions) i3[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Hn(i3, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(i3.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function W0(i3, e, t) {
  let n = false, s = false, r = false;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = true), u.NORMAL !== void 0 && (s = true), u.COLOR_0 !== void 0 && (r = true), n && s && r) break;
  }
  if (!n && !s && !r) return Promise.resolve(i3);
  const a = [], o = [], l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : i3.attributes.position;
      a.push(d);
    }
    if (s) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : i3.attributes.normal;
      o.push(d);
    }
    if (r) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : i3.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l)]).then(function(c) {
    const h = c[0], u = c[1], d = c[2];
    return n && (i3.morphAttributes.position = h), s && (i3.morphAttributes.normal = u), r && (i3.morphAttributes.color = d), i3.morphTargetsRelative = true, i3;
  });
}
function X0(i3, e) {
  if (i3.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++) i3.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (i3.morphTargetInfluences.length === t.length) {
      i3.morphTargetDictionary = {};
      for (let n = 0, s = t.length; n < s; n++) i3.morphTargetDictionary[t[n]] = n;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Y0(i3) {
  let e;
  const t = i3.extensions && i3.extensions[ze.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + oo(t.attributes) : e = i3.indices + ":" + oo(i3.attributes) + ":" + i3.mode, i3.targets !== void 0) for (let n = 0, s = i3.targets.length; n < s; n++) e += ":" + oo(i3.targets[n]);
  return e;
}
function oo(i3) {
  let e = "";
  const t = Object.keys(i3).sort();
  for (let n = 0, s = t.length; n < s; n++) e += t[n] + ":" + i3[t[n]] + ";";
  return e;
}
function il(i3) {
  switch (i3) {
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
function q0(i3) {
  return i3.search(/\.jpe?g($|\?)/i) > 0 || i3.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : i3.search(/\.webp($|\?)/i) > 0 || i3.search(/^data\:image\/webp/) === 0 ? "image/webp" : i3.search(/\.ktx2($|\?)/i) > 0 || i3.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const j0 = new De();
class K0 {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new _0(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = false, s = -1, r = false, a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === true;
      const l = o.match(/Version\/(\d+)/);
      s = n && l ? parseInt(l[1], 10) : -1, r = o.indexOf("Firefox") > -1, a = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && s < 17 || r && a < 98 ? this.textureLoader = new Kf(this.options.manager) : this.textureLoader = new tp(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new gu(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, s = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]);
    }).then(function(a) {
      const o = { scene: a[0][s.scene || 0], scenes: a[0], animations: a[1], cameras: a[2], asset: s.asset, parser: n, userData: {} };
      return bi(r, o, s), Hn(o, s), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(o);
      })).then(function() {
        for (const l of o.scenes) l.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let s = 0, r = t.length; s < r; s++) {
      const a = t[s].joints;
      for (let o = 0, l = a.length; o < l; o++) e[a[o]].isBone = true;
    }
    for (let s = 0, r = e.length; s < r; s++) {
      const a = e[s];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = true)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const s = n.clone(), r = (a, o) => {
      const l = this.associations.get(a);
      l != null && this.associations.set(o, l);
      for (const [c, h] of a.children.entries()) r(h, o.children[c]);
    };
    return r(n, s), s.name += "_instance_" + e.uses[t]++, s;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const s = e(t[n]);
      if (s) return s;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const r = e(t[s]);
      r && n.push(r);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let s = this.cache.get(n);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (s = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !s) throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, s);
    }
    return s;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(s.map(function(r, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(r, a) {
      n.load(qs.resolveURL(t.uri, s.path), r, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const s = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + s);
    });
  }
  loadAccessor(e) {
    const t = this, n = this.json, s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const a = ro[s.type], o = hs[s.componentType], l = s.normalized === true, c = new o(s.count * a);
      return Promise.resolve(new It(c, a, l));
    }
    const r = [];
    return s.bufferView !== void 0 ? r.push(this.getDependency("bufferView", s.bufferView)) : r.push(null), s.sparse !== void 0 && (r.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(r).then(function(a) {
      const o = a[0], l = ro[s.type], c = hs[s.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, d = s.byteOffset || 0, p = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, g = s.normalized === true;
      let _, m;
      if (p && p !== u) {
        const f = Math.floor(d / p), T = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + f + ":" + s.count;
        let E = t.cache.get(T);
        E || (_ = new c(o, f * p, s.count * p / h), E = new Tf(_, p / h), t.cache.add(T, E)), m = new yl(E, l, d % p / h, g);
      } else o === null ? _ = new c(s.count * l) : _ = new c(o, d, s.count * l), m = new It(_, l, g);
      if (s.sparse !== void 0) {
        const f = ro.SCALAR, T = hs[s.sparse.indices.componentType], E = s.sparse.indices.byteOffset || 0, y = s.sparse.values.byteOffset || 0, P = new T(a[1], E, s.sparse.count * f), w = new c(a[2], y, s.sparse.count * l);
        o !== null && (m = new It(m.array.slice(), m.itemSize, m.normalized)), m.normalized = false;
        for (let R = 0, N = P.length; R < N; R++) {
          const M = P[R];
          if (m.setX(M, w[R * l]), l >= 2 && m.setY(M, w[R * l + 1]), l >= 3 && m.setZ(M, w[R * l + 2]), l >= 4 && m.setW(M, w[R * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = g;
      }
      return m;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, r = t.textures[e].source, a = t.images[r];
    let o = this.textureLoader;
    if (a.uri) {
      const l = n.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, r, o);
  }
  loadTextureImage(e, t, n) {
    const s = this, r = this.json, a = r.textures[e], o = r.images[t], l = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[l]) return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(h) {
      h.flipY = false, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === false && (h.name = o.uri);
      const d = (r.samplers || {})[a.sampler] || {};
      return h.magFilter = ph[d.magFilter] || Ct, h.minFilter = ph[d.minFilter] || Gn, h.wrapS = mh[d.wrapS] || ms, h.wrapT = mh[d.wrapT] || ms, h.generateMipmaps = !h.isCompressedTexture && h.minFilter !== Vt && h.minFilter !== Ct, s.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, s = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((u) => u.clone());
    const a = s.images[e], o = self.URL || self.webkitURL;
    let l = a.uri || "", c = false;
    if (a.bufferView !== void 0) l = n.getDependency("bufferView", a.bufferView).then(function(u) {
      c = true;
      const d = new Blob([u], { type: a.mimeType });
      return l = o.createObjectURL(d), l;
    });
    else if (a.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(l).then(function(u) {
      return new Promise(function(d, p) {
        let g = d;
        t.isImageBitmapLoader === true && (g = function(_) {
          const m = new Mt(_);
          m.needsUpdate = true, d(m);
        }), t.load(qs.resolveURL(u, r.path), g, void 0, p);
      });
    }).then(function(u) {
      return c === true && o.revokeObjectURL(l), Hn(u, a), u.userData.mimeType = a.mimeType || q0(a.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = h, h;
  }
  assignTexture(e, t, n, s) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), r.extensions[ze.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[ze.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const l = r.associations.get(a);
          a = r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), r.associations.set(a, l);
        }
      }
      return s !== void 0 && (a.colorSpace = s), e[t] = a, a;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const s = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new du(), cn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new uu(), cn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(o, l)), n = l;
    }
    if (s || r || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      s && (o += "derivative-tangents:"), r && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let l = this.cache.get(o);
      l || (l = n.clone(), r && (l.vertexColors = true), a && (l.flatShading = true), s && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return nr;
  }
  loadMaterial(e) {
    const t = this, n = this.json, s = this.extensions, r = n.materials[e];
    let a;
    const o = {}, l = r.extensions || {}, c = [];
    if (l[ze.KHR_MATERIALS_UNLIT]) {
      const u = s[ze.KHR_MATERIALS_UNLIT];
      a = u.getMaterialType(), c.push(u.extendParams(o, r, t));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (o.color = new Te(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], Dt), o.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", u.baseColorTexture, Ye)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    r.doubleSided === true && (o.side = Yt);
    const h = r.alphaMode || ao.OPAQUE;
    if (h === ao.BLEND ? (o.transparent = true, o.depthWrite = false) : (o.transparent = false, h === ao.MASK && (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && a !== li && (c.push(t.assignTexture(o, "normalMap", r.normalTexture)), o.normalScale = new _e(1, 1), r.normalTexture.scale !== void 0)) {
      const u = r.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (r.occlusionTexture !== void 0 && a !== li && (c.push(t.assignTexture(o, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && a !== li) {
      const u = r.emissiveFactor;
      o.emissive = new Te().setRGB(u[0], u[1], u[2], Dt);
    }
    return r.emissiveTexture !== void 0 && a !== li && c.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, Ye)), Promise.all(c).then(function() {
      const u = new a(o);
      return r.name && (u.name = r.name), Hn(u, r), t.associations.set(u, { materials: e }), r.extensions && bi(s, u, r), u;
    });
  }
  createUniqueName(e) {
    const t = nt.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, s = this.primitiveCache;
    function r(o) {
      return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
        return gh(l, o, t);
      });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = Y0(c), u = s[h];
      if (u) a.push(u.promise);
      else {
        let d;
        c.extensions && c.extensions[ze.KHR_DRACO_MESH_COMPRESSION] ? d = r(c) : d = gh(new Sn(), c, t), s[h] = { primitive: c, promise: d }, a.push(d);
      }
    }
    return Promise.all(a);
  }
  loadMesh(e) {
    const t = this, n = this.json, s = this.extensions, r = n.meshes[e], a = r.primitives, o = [];
    for (let l = 0, c = a.length; l < c; l++) {
      const h = a[l].material === void 0 ? G0(this.cache) : this.getDependency("material", a[l].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
      for (let p = 0, g = h.length; p < g; p++) {
        const _ = h[p], m = a[p];
        let f;
        const T = c[p];
        if (m.mode === rn.TRIANGLES || m.mode === rn.TRIANGLE_STRIP || m.mode === rn.TRIANGLE_FAN || m.mode === void 0) f = r.isSkinnedMesh === true ? new wf(_, T) : new rt(_, T), f.isSkinnedMesh === true && f.normalizeSkinWeights(), m.mode === rn.TRIANGLE_STRIP ? f.geometry = dh(f.geometry, $h) : m.mode === rn.TRIANGLE_FAN && (f.geometry = dh(f.geometry, jo));
        else if (m.mode === rn.LINES) f = new Lf(_, T);
        else if (m.mode === rn.LINE_STRIP) f = new bl(_, T);
        else if (m.mode === rn.LINE_LOOP) f = new Uf(_, T);
        else if (m.mode === rn.POINTS) f = new Nf(_, T);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(f.geometry.morphAttributes).length > 0 && X0(f, r), f.name = t.createUniqueName(r.name || "mesh_" + e), Hn(f, r), m.extensions && bi(s, f, m), t.assignFinalMaterial(f), u.push(f);
      }
      for (let p = 0, g = u.length; p < g; p++) t.associations.set(u[p], { meshes: e, primitives: p });
      if (u.length === 1) return r.extensions && bi(s, u[0], r), u[0];
      const d = new ci();
      r.extensions && bi(s, d, r), t.associations.set(d, { meshes: e });
      for (let p = 0, g = u.length; p < g; p++) d.add(u[p]);
      return d;
    });
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], s = n[n.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Ft(Qh.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : n.type === "orthographic" && (t = new ha(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Hn(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let s = 0, r = t.joints.length; s < r; s++) n.push(this._loadNodeShallow(t.joints[s]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(s) {
      const r = s.pop(), a = s, o = [], l = [];
      for (let c = 0, h = a.length; c < h; c++) {
        const u = a[c];
        if (u) {
          o.push(u);
          const d = new De();
          r !== null && d.fromArray(r.array, c * 16), l.push(d);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Ml(o, l);
    });
  }
  loadAnimation(e) {
    const t = this.json, n = this, s = t.animations[e], r = s.name ? s.name : "animation_" + e, a = [], o = [], l = [], c = [], h = [];
    for (let u = 0, d = s.channels.length; u < d; u++) {
      const p = s.channels[u], g = s.samplers[p.sampler], _ = p.target, m = _.node, f = s.parameters !== void 0 ? s.parameters[g.input] : g.input, T = s.parameters !== void 0 ? s.parameters[g.output] : g.output;
      _.node !== void 0 && (a.push(this.getDependency("node", m)), o.push(this.getDependency("accessor", f)), l.push(this.getDependency("accessor", T)), c.push(g), h.push(_));
    }
    return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l), Promise.all(c), Promise.all(h)]).then(function(u) {
      const d = u[0], p = u[1], g = u[2], _ = u[3], m = u[4], f = [];
      for (let T = 0, E = d.length; T < E; T++) {
        const y = d[T], P = p[T], w = g[T], R = _[T], N = m[T];
        if (y === void 0) continue;
        y.updateMatrix && y.updateMatrix();
        const M = n._createAnimationTracks(y, P, w, R, N);
        if (M) for (let S = 0; S < M.length; S++) f.push(M[S]);
      }
      return new Jo(r, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, s = t.nodes[e];
    return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(r) {
      const a = n._getNodeRef(n.meshCache, s.mesh, r);
      return s.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh) for (let l = 0, c = s.weights.length; l < c; l++) o.morphTargetInfluences[l] = s.weights[l];
      }), a;
    });
  }
  loadNode(e) {
    const t = this.json, n = this, s = t.nodes[e], r = n._loadNodeShallow(e), a = [], o = s.children || [];
    for (let c = 0, h = o.length; c < h; c++) a.push(n.getDependency("node", o[c]));
    const l = s.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", s.skin);
    return Promise.all([r, Promise.all(a), l]).then(function(c) {
      const h = c[0], u = c[1], d = c[2];
      d !== null && h.traverse(function(p) {
        p.isSkinnedMesh && p.bind(d, j0);
      });
      for (let p = 0, g = u.length; p < g; p++) h.add(u[p]);
      return h;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, s = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e], a = r.name ? s.createUniqueName(r.name) : "", o = [], l = s._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && o.push(l), r.camera !== void 0 && o.push(s.getDependency("camera", r.camera).then(function(c) {
      return s._getNodeRef(s.cameraCache, r.camera, c);
    })), s._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      o.push(c);
    }), this.nodeCache[e] = Promise.all(o).then(function(c) {
      let h;
      if (r.isBone === true ? h = new cu() : c.length > 1 ? h = new ci() : c.length === 1 ? h = c[0] : h = new pt(), h !== c[0]) for (let u = 0, d = c.length; u < d; u++) h.add(c[u]);
      if (r.name && (h.userData.name = r.name, h.name = a), Hn(h, r), r.extensions && bi(n, h, r), r.matrix !== void 0) {
        const u = new De();
        u.fromArray(r.matrix), h.applyMatrix4(u);
      } else r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
      return s.associations.has(h) || s.associations.set(h, {}), s.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], s = this, r = new ci();
    n.name && (r.name = s.createUniqueName(n.name)), Hn(r, n), n.extensions && bi(t, r, n);
    const a = n.nodes || [], o = [];
    for (let l = 0, c = a.length; l < c; l++) o.push(s.getDependency("node", a[l]));
    return Promise.all(o).then(function(l) {
      for (let h = 0, u = l.length; h < u; h++) r.add(l[h]);
      const c = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, p] of s.associations) (d instanceof cn || d instanceof Mt) && u.set(d, p);
        return h.traverse((d) => {
          const p = s.associations.get(d);
          p != null && u.set(d, p);
        }), u;
      };
      return s.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, n, s, r) {
    const a = [], o = e.name ? e.name : e.uuid, l = [];
    ii[r.path] === ii.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
    }) : l.push(o);
    let c;
    switch (ii[r.path]) {
      case ii.weights:
        c = vs;
        break;
      case ii.rotation:
        c = xs;
        break;
      case ii.position:
      case ii.scale:
        c = Ss;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = vs;
            break;
          case 2:
          case 3:
          default:
            c = Ss;
            break;
        }
        break;
    }
    const h = s.interpolation !== void 0 ? V0[s.interpolation] : er, u = this._getArrayFromAccessor(n);
    for (let d = 0, p = l.length; d < p; d++) {
      const g = new c(l[d] + "." + ii[r.path], t.array, u, h);
      s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = il(t.constructor), s = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++) s[r] = t[r] * n;
      t = s;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const s = this instanceof xs ? H0 : bu;
      return new s(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function $0(i3, e, t) {
  const n = e.attributes, s = new jn();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (s.set(new C(l[0], l[1], l[2]), new C(c[0], c[1], c[2])), o.normalized) {
        const h = il(hs[o.componentType]);
        s.min.multiplyScalar(h), s.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const r = e.targets;
  if (r !== void 0) {
    const o = new C(), l = new C();
    for (let c = 0, h = r.length; c < h; c++) {
      const u = r[c];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], p = d.min, g = d.max;
        if (p !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))), d.normalized) {
            const _ = il(hs[d.componentType]);
            l.multiplyScalar(_);
          }
          o.max(l);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(o);
  }
  i3.boundingBox = s;
  const a = new In();
  s.getCenter(a.center), a.radius = s.min.distanceTo(s.max) / 2, i3.boundingSphere = a;
}
function gh(i3, e, t) {
  const n = e.attributes, s = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function(l) {
      i3.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = nl[a] || a.toLowerCase();
    o in i3.attributes || s.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !i3.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      i3.setIndex(o);
    });
    s.push(a);
  }
  return Xe.workingColorSpace !== Dt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`), Hn(i3, e), $0(i3, e, t), Promise.all(s).then(function() {
    return e.targets !== void 0 ? W0(i3, e.targets, t) : i3;
  });
}
class Z0 extends ta {
  constructor() {
    super();
    const e = new bs();
    e.deleteAttribute("uv");
    const t = new nr({ side: St }), n = new nr(), s = new ca(16777215, 900, 28, 2);
    s.position.set(0.418, 16.199, 0.3), this.add(s);
    const r = new rt(e, t);
    r.position.set(-0.757, 13.219, 0.717), r.scale.set(31.713, 28.305, 28.591), this.add(r);
    const a = new rt(e, n);
    a.position.set(-10.906, 2.009, 1.846), a.rotation.set(0, -0.195, 0), a.scale.set(2.328, 7.905, 4.651), this.add(a);
    const o = new rt(e, n);
    o.position.set(-5.607, -0.754, -0.758), o.rotation.set(0, 0.994, 0), o.scale.set(1.97, 1.534, 3.955), this.add(o);
    const l = new rt(e, n);
    l.position.set(6.167, 0.857, 7.803), l.rotation.set(0, 0.561, 0), l.scale.set(3.927, 6.285, 3.687), this.add(l);
    const c = new rt(e, n);
    c.position.set(-2.017, 0.018, 6.124), c.rotation.set(0, 0.333, 0), c.scale.set(2.002, 4.566, 2.064), this.add(c);
    const h = new rt(e, n);
    h.position.set(2.291, -0.756, -2.621), h.rotation.set(0, -0.286, 0), h.scale.set(1.546, 1.552, 1.496), this.add(h);
    const u = new rt(e, n);
    u.position.set(-2.193, -0.369, -5.547), u.rotation.set(0, 0.516, 0), u.scale.set(3.875, 3.487, 2.986), this.add(u);
    const d = new rt(e, $i(50));
    d.position.set(-16.116, 14.37, 8.208), d.scale.set(0.1, 2.428, 2.739), this.add(d);
    const p = new rt(e, $i(50));
    p.position.set(-16.109, 18.021, -8.207), p.scale.set(0.1, 2.425, 2.751), this.add(p);
    const g = new rt(e, $i(17));
    g.position.set(14.904, 12.198, -1.832), g.scale.set(0.15, 4.265, 6.331), this.add(g);
    const _ = new rt(e, $i(43));
    _.position.set(-0.462, 8.89, 14.52), _.scale.set(4.38, 5.441, 0.088), this.add(_);
    const m = new rt(e, $i(20));
    m.position.set(3.235, 11.486, -12.541), m.scale.set(2.5, 2, 0.1), this.add(m);
    const f = new rt(e, $i(100));
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
function $i(i3) {
  const e = new li();
  return e.color.setScalar(i3), e;
}
/**
* postprocessing v6.39.0 build Fri Mar 20 2026
* https://github.com/pmndrs/postprocessing
* Copyright 2015-2026 Raoul van Rüschen
* @license Zlib
*/
var J0 = (() => {
  const i3 = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), e = new Float32Array([0, 0, 2, 0, 0, 2]), t = new Sn();
  return t.setAttribute("position", new It(i3, 3)), t.setAttribute("uv", new It(e, 2)), t;
})(), yn = class sl {
  static get fullscreenGeometry() {
    return J0;
  }
  constructor(e = "Pass", t = new ta(), n = new ha()) {
    this.name = e, this.renderer = null, this.scene = t, this.camera = n, this.screen = null, this.rtt = true, this.needsSwap = true, this.needsDepthBlit = false, this.needsDepthTexture = false, this.enabled = true;
  }
  get renderToScreen() {
    return !this.rtt;
  }
  set renderToScreen(e) {
    if (this.rtt === e) {
      const t = this.fullscreenMaterial;
      t !== null && (t.needsUpdate = true), this.rtt = !e;
    }
  }
  set mainScene(e) {
  }
  set mainCamera(e) {
  }
  setRenderer(e) {
    this.renderer = e;
  }
  isEnabled() {
    return this.enabled;
  }
  setEnabled(e) {
    this.enabled = e;
  }
  get fullscreenMaterial() {
    return this.screen !== null ? this.screen.material : null;
  }
  set fullscreenMaterial(e) {
    let t = this.screen;
    t !== null ? t.material = e : (t = new rt(sl.fullscreenGeometry, e), t.frustumCulled = false, this.scene === null && (this.scene = new ta()), this.scene.add(t), this.screen = t);
  }
  getFullscreenMaterial() {
    return this.fullscreenMaterial;
  }
  setFullscreenMaterial(e) {
    this.fullscreenMaterial = e;
  }
  getDepthTexture() {
    return null;
  }
  setDepthTexture(e, t = rr) {
  }
  render(e, t, n, s, r) {
    throw new Error("Render method not implemented!");
  }
  setSize(e, t) {
  }
  initialize(e, t, n) {
  }
  dispose() {
    for (const e of Object.keys(this)) {
      const t = this[e];
      (t instanceof Bt || t instanceof cn || t instanceof Mt || t instanceof sl) && this[e].dispose();
    }
    this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
  }
}, Q0 = class extends yn {
  constructor() {
    super("ClearMaskPass", null, null), this.needsSwap = false;
  }
  render(i3, e, t, n, s) {
    const r = i3.state.buffers.stencil;
    r.setLocked(false), r.setTest(false);
  }
}, ex = `#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`, Tu = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}", Au = class extends Gt {
  constructor() {
    super({ name: "CopyMaterial", defines: { COLOR_SPACE_CONVERSION: "1", DEPTH_PACKING: "0", COLOR_WRITE: "1" }, uniforms: { inputBuffer: new Qe(null), depthBuffer: new Qe(null), channelWeights: new Qe(null), opacity: new Qe(1) }, blending: qt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: ex, vertexShader: Tu }), this.depthFunc = $r;
  }
  get inputBuffer() {
    return this.uniforms.inputBuffer.value;
  }
  set inputBuffer(i3) {
    const e = i3 !== null;
    this.colorWrite !== e && (e ? this.defines.COLOR_WRITE = true : delete this.defines.COLOR_WRITE, this.colorWrite = e, this.needsUpdate = true), this.uniforms.inputBuffer.value = i3;
  }
  get depthBuffer() {
    return this.uniforms.depthBuffer.value;
  }
  set depthBuffer(i3) {
    const e = i3 !== null;
    this.depthWrite !== e && (e ? this.defines.DEPTH_WRITE = true : delete this.defines.DEPTH_WRITE, this.depthTest = e, this.depthWrite = e, this.needsUpdate = true), this.uniforms.depthBuffer.value = i3;
  }
  set depthPacking(i3) {
    this.defines.DEPTH_PACKING = i3.toFixed(0), this.needsUpdate = true;
  }
  get colorSpaceConversion() {
    return this.defines.COLOR_SPACE_CONVERSION !== void 0;
  }
  set colorSpaceConversion(i3) {
    this.colorSpaceConversion !== i3 && (i3 ? this.defines.COLOR_SPACE_CONVERSION = true : delete this.defines.COLOR_SPACE_CONVERSION, this.needsUpdate = true);
  }
  get channelWeights() {
    return this.uniforms.channelWeights.value;
  }
  set channelWeights(i3) {
    i3 !== null ? (this.defines.USE_WEIGHTS = "1", this.uniforms.channelWeights.value = i3) : delete this.defines.USE_WEIGHTS, this.needsUpdate = true;
  }
  setInputBuffer(i3) {
    this.uniforms.inputBuffer.value = i3;
  }
  getOpacity(i3) {
    return this.uniforms.opacity.value;
  }
  setOpacity(i3) {
    this.uniforms.opacity.value = i3;
  }
}, tx = class extends yn {
  constructor(i3, e = true) {
    super("CopyPass"), this.fullscreenMaterial = new Au(), this.needsSwap = false, this.renderTarget = i3, i3 === void 0 && (this.renderTarget = new Bt(1, 1, { minFilter: Ct, magFilter: Ct, stencilBuffer: false, depthBuffer: false }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = e;
  }
  get resize() {
    return this.autoResize;
  }
  set resize(i3) {
    this.autoResize = i3;
  }
  get texture() {
    return this.renderTarget.texture;
  }
  getTexture() {
    return this.renderTarget.texture;
  }
  setAutoResizeEnabled(i3) {
    this.autoResize = i3;
  }
  render(i3, e, t, n, s) {
    this.fullscreenMaterial.inputBuffer = e.texture, i3.setRenderTarget(this.renderToScreen ? null : this.renderTarget), i3.render(this.scene, this.camera);
  }
  setSize(i3, e) {
    this.autoResize && this.renderTarget.setSize(i3, e);
  }
  initialize(i3, e, t) {
    t !== void 0 && (this.renderTarget.texture.type = t, t !== Ot ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : i3 !== null && i3.outputColorSpace === Ye && (this.renderTarget.texture.colorSpace = Ye));
  }
}, _h = new Te(), wu = class extends yn {
  constructor(i3 = true, e = true, t = false) {
    super("ClearPass", null, null), this.needsSwap = false, this.color = i3, this.depth = e, this.stencil = t, this.overrideClearColor = null, this.overrideClearAlpha = -1;
  }
  setClearFlags(i3, e, t) {
    this.color = i3, this.depth = e, this.stencil = t;
  }
  getOverrideClearColor() {
    return this.overrideClearColor;
  }
  setOverrideClearColor(i3) {
    this.overrideClearColor = i3;
  }
  getOverrideClearAlpha() {
    return this.overrideClearAlpha;
  }
  setOverrideClearAlpha(i3) {
    this.overrideClearAlpha = i3;
  }
  render(i3, e, t, n, s) {
    const r = this.overrideClearColor, a = this.overrideClearAlpha, o = i3.getClearAlpha(), l = r !== null, c = a >= 0;
    l ? (i3.getClearColor(_h), i3.setClearColor(r, c ? a : o)) : c && i3.setClearAlpha(a), i3.setRenderTarget(this.renderToScreen ? null : e), i3.clear(this.color, this.depth, this.stencil), l ? i3.setClearColor(_h, o) : c && i3.setClearAlpha(o);
  }
}, nx = class extends yn {
  constructor(i3, e) {
    super("MaskPass", i3, e), this.needsSwap = false, this.clearPass = new wu(false, false, true), this.inverse = false;
  }
  set mainScene(i3) {
    this.scene = i3;
  }
  set mainCamera(i3) {
    this.camera = i3;
  }
  get inverted() {
    return this.inverse;
  }
  set inverted(i3) {
    this.inverse = i3;
  }
  get clear() {
    return this.clearPass.enabled;
  }
  set clear(i3) {
    this.clearPass.enabled = i3;
  }
  getClearPass() {
    return this.clearPass;
  }
  isInverted() {
    return this.inverted;
  }
  setInverted(i3) {
    this.inverted = i3;
  }
  render(i3, e, t, n, s) {
    const r = i3.getContext(), a = i3.state.buffers, o = this.scene, l = this.camera, c = this.clearPass, h = this.inverted ? 0 : 1, u = 1 - h;
    a.color.setMask(false), a.depth.setMask(false), a.color.setLocked(true), a.depth.setLocked(true), a.stencil.setTest(true), a.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE), a.stencil.setFunc(r.ALWAYS, h, 4294967295), a.stencil.setClear(u), a.stencil.setLocked(true), this.clearPass.enabled && (this.renderToScreen ? c.render(i3, null) : (c.render(i3, e), c.render(i3, t))), this.renderToScreen ? (i3.setRenderTarget(null), i3.render(o, l)) : (i3.setRenderTarget(e), i3.render(o, l), i3.setRenderTarget(t), i3.render(o, l)), a.color.setLocked(false), a.depth.setLocked(false), a.stencil.setLocked(false), a.stencil.setFunc(r.EQUAL, 1, 4294967295), a.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), a.stencil.setLocked(true);
  }
}, lo = 1 / 1e3, ix = 1e3, sx = class {
  constructor() {
    this.startTime = performance.now(), this.previousTime = 0, this.currentTime = 0, this._delta = 0, this._elapsed = 0, this._fixedDelta = 1e3 / 60, this.timescale = 1, this.useFixedDelta = false, this._autoReset = false;
  }
  get autoReset() {
    return this._autoReset;
  }
  set autoReset(i3) {
    typeof document < "u" && document.hidden !== void 0 && (i3 ? document.addEventListener("visibilitychange", this) : document.removeEventListener("visibilitychange", this), this._autoReset = i3);
  }
  get delta() {
    return this._delta * lo;
  }
  get fixedDelta() {
    return this._fixedDelta * lo;
  }
  set fixedDelta(i3) {
    this._fixedDelta = i3 * ix;
  }
  get elapsed() {
    return this._elapsed * lo;
  }
  update(i3) {
    this.useFixedDelta ? this._delta = this.fixedDelta : (this.previousTime = this.currentTime, this.currentTime = (i3 !== void 0 ? i3 : performance.now()) - this.startTime, this._delta = this.currentTime - this.previousTime), this._delta *= this.timescale, this._elapsed += this._delta;
  }
  reset() {
    this._delta = 0, this._elapsed = 0, this.currentTime = performance.now() - this.startTime;
  }
  getDelta() {
    return this.delta;
  }
  getElapsed() {
    return this.elapsed;
  }
  handleEvent(i3) {
    document.hidden || (this.currentTime = performance.now() - this.startTime);
  }
  dispose() {
    this.autoReset = false;
  }
}, rx = class {
  constructor(i3 = null, { depthBuffer: e = true, stencilBuffer: t = false, multisampling: n = 0, frameBufferType: s } = {}) {
    this.renderer = null, this.inputBuffer = this.createBuffer(e, t, s, n), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new tx(), this.depthTexture = null, this.depthRenderTarget = null, this.passes = [], this.timer = new sx(), this.autoRenderToScreen = true, this.setRenderer(i3);
  }
  get multisampling() {
    return this.inputBuffer.samples;
  }
  set multisampling(i3) {
    const e = this.inputBuffer, t = this.multisampling;
    t > 0 && i3 > 0 ? (this.inputBuffer.samples = i3, this.outputBuffer.samples = i3, this.inputBuffer.dispose(), this.outputBuffer.dispose()) : t !== i3 && (this.inputBuffer.dispose(), this.outputBuffer.dispose(), this.inputBuffer = this.createBuffer(e.depthBuffer, e.stencilBuffer, e.texture.type, i3), this.outputBuffer = this.inputBuffer.clone());
  }
  getTimer() {
    return this.timer;
  }
  getRenderer() {
    return this.renderer;
  }
  setRenderer(i3) {
    if (this.renderer = i3, i3 !== null) {
      const e = i3.getSize(new _e()), t = i3.getContext().getContextAttributes().alpha, n = this.inputBuffer.texture.type;
      n === Ot && i3.outputColorSpace === Ye && (this.inputBuffer.texture.colorSpace = Ye, this.outputBuffer.texture.colorSpace = Ye, this.inputBuffer.dispose(), this.outputBuffer.dispose()), i3.autoClear = false, this.setSize(e.width, e.height);
      for (const s of this.passes) s.initialize(i3, t, n);
    }
  }
  replaceRenderer(i3, e = true) {
    const t = this.renderer, n = t.domElement.parentNode;
    return this.setRenderer(i3), e && n !== null && (n.removeChild(t.domElement), n.appendChild(i3.domElement)), t;
  }
  createDepthTexture() {
    const i3 = this.inputBuffer, e = new Tl();
    this.depthTexture = e, i3.stencilBuffer ? (e.format = Ii, e.type = Pi) : e.type = on;
    const t = e.clone();
    return t.name = "EffectComposer.StableDepth", this.depthRenderTarget = new Bt(i3.width, i3.height, { depthBuffer: true, stencilBuffer: i3.stencilBuffer, depthTexture: t }), t;
  }
  blitDepthBuffer(i3) {
    const e = this.renderer, t = this.depthRenderTarget, n = e.properties, s = e.getContext();
    e.setRenderTarget(t);
    const r = n.get(i3).__webglFramebuffer, a = n.get(t).__webglFramebuffer, o = i3.stencilBuffer ? s.DEPTH_BUFFER_BIT | s.STENCIL_BUFFER_BIT : s.DEPTH_BUFFER_BIT;
    s.bindFramebuffer(s.READ_FRAMEBUFFER, r), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, a), s.blitFramebuffer(0, 0, i3.width, i3.height, 0, 0, t.width, t.height, o, s.NEAREST), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), e.setRenderTarget(null);
  }
  deleteDepthTexture() {
    if (this.depthTexture !== null) {
      this.depthTexture.dispose(), this.depthTexture = null, this.depthRenderTarget.dispose(), this.depthRenderTarget = null, this.inputBuffer.depthTexture = null, this.outputBuffer.depthTexture = null;
      for (const i3 of this.passes) i3.setDepthTexture(null);
    }
  }
  createBuffer(i3, e, t, n) {
    const s = this.renderer, r = s === null ? new _e() : s.getDrawingBufferSize(new _e()), a = { minFilter: Ct, magFilter: Ct, stencilBuffer: e, depthBuffer: i3, type: t }, o = new Bt(r.width, r.height, a);
    return n > 0 && (o.samples = n), t === Ot && s !== null && s.outputColorSpace === Ye && (o.texture.colorSpace = Ye), o.texture.name = "EffectComposer.Buffer", o.texture.generateMipmaps = false, o;
  }
  setMainScene(i3) {
    for (const e of this.passes) e.mainScene = i3;
  }
  setMainCamera(i3) {
    for (const e of this.passes) e.mainCamera = i3;
  }
  addPass(i3, e) {
    const t = this.passes, n = this.renderer, s = n.getDrawingBufferSize(new _e()), r = n.getContext().getContextAttributes().alpha, a = this.inputBuffer.texture.type;
    if (i3.renderer = n, i3.setSize(s.width, s.height), i3.initialize(n, r, a), this.autoRenderToScreen && (t.length > 0 && (t[t.length - 1].renderToScreen = false), i3.renderToScreen && (this.autoRenderToScreen = false)), e !== void 0 ? t.splice(e, 0, i3) : t.push(i3), this.autoRenderToScreen && (t[t.length - 1].renderToScreen = true), i3.needsDepthTexture || this.depthTexture !== null) if (this.depthTexture === null) {
      const o = this.createDepthTexture();
      for (i3 of t) i3.setDepthTexture(o);
    } else {
      const o = this.depthRenderTarget.depthTexture;
      i3.setDepthTexture(o);
    }
  }
  removePass(i3) {
    const e = this.passes, t = e.indexOf(i3);
    if (t !== -1 && e.splice(t, 1).length > 0) {
      if (this.depthTexture !== null) {
        const r = (o, l) => o || l.needsDepthTexture;
        if (!e.reduce(r, false)) {
          const o = this.depthRenderTarget.depthTexture;
          i3.getDepthTexture() === o && i3.setDepthTexture(null), this.deleteDepthTexture();
        }
      }
      this.autoRenderToScreen && t === e.length && (i3.renderToScreen = false, e.length > 0 && (e[e.length - 1].renderToScreen = true));
    }
  }
  removeAllPasses() {
    const i3 = this.passes;
    this.deleteDepthTexture(), i3.length > 0 && (this.autoRenderToScreen && (i3[i3.length - 1].renderToScreen = false), this.passes = []);
  }
  render(i3) {
    const e = this.renderer, t = this.copyPass;
    let n = this.inputBuffer, s = this.outputBuffer, r, a = false;
    i3 === void 0 && (this.timer.update(), i3 = this.timer.getDelta());
    for (const o of this.passes) if (o.enabled) {
      if (n.depthTexture = this.depthTexture, s.depthTexture = null, o.render(e, n, s, i3, a), o.needsDepthBlit && this.depthRenderTarget !== null && this.blitDepthBuffer(n), o.needsSwap) {
        if (a) {
          t.renderToScreen = o.renderToScreen;
          const l = e.getContext(), c = e.state.buffers.stencil;
          c.setFunc(l.NOTEQUAL, 1, 4294967295), t.render(e, n, s, i3, a), c.setFunc(l.EQUAL, 1, 4294967295);
        }
        r = n, n = s, s = r;
      }
      o instanceof nx ? a = true : o instanceof Q0 && (a = false);
    }
  }
  setSize(i3, e, t) {
    const n = this.renderer, s = n.getSize(new _e());
    (i3 === void 0 || e === void 0) && (i3 = s.width, e = s.height), (s.width !== i3 || s.height !== e) && n.setSize(i3, e, t);
    const r = n.getDrawingBufferSize(new _e());
    this.inputBuffer.setSize(r.width, r.height), this.outputBuffer.setSize(r.width, r.height), this.depthRenderTarget !== null && this.depthRenderTarget.setSize(r.width, r.height);
    for (const a of this.passes) a.setSize(r.width, r.height);
  }
  reset() {
    this.dispose(), this.autoRenderToScreen = true;
  }
  dispose() {
    for (const i3 of this.passes) i3.dispose();
    this.passes = [], this.inputBuffer !== null && this.inputBuffer.dispose(), this.outputBuffer !== null && this.outputBuffer.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose(), yn.fullscreenGeometry.dispose();
  }
}, Ri = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 }, Je = { FRAGMENT_HEAD: "FRAGMENT_HEAD", FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV", FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE", VERTEX_HEAD: "VERTEX_HEAD", VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT" }, ax = class {
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([[Je.FRAGMENT_HEAD, null], [Je.FRAGMENT_MAIN_UV, null], [Je.FRAGMENT_MAIN_IMAGE, null], [Je.VERTEX_HEAD, null], [Je.VERTEX_MAIN_SUPPORT, null]]), this.defines = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map(), this.blendModes = /* @__PURE__ */ new Map(), this.extensions = /* @__PURE__ */ new Set(), this.attributes = Ri.NONE, this.varyings = /* @__PURE__ */ new Set(), this.uvTransformation = false, this.readDepth = false, this.colorSpace = Dt;
  }
}, co = false, vh = class {
  constructor(i3 = null) {
    this.originalMaterials = /* @__PURE__ */ new Map(), this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(i3), this.meshCount = 0, this.replaceMaterial = (e) => {
      if (e.isMesh) {
        let t;
        if (e.material.flatShading) switch (e.material.side) {
          case Yt:
            t = this.materialsFlatShadedDoubleSide;
            break;
          case St:
            t = this.materialsFlatShadedBackSide;
            break;
          default:
            t = this.materialsFlatShaded;
            break;
        }
        else switch (e.material.side) {
          case Yt:
            t = this.materialsDoubleSide;
            break;
          case St:
            t = this.materialsBackSide;
            break;
          default:
            t = this.materials;
            break;
        }
        this.originalMaterials.set(e, e.material), e.isSkinnedMesh ? e.material = t[2] : e.isInstancedMesh ? e.material = t[1] : e.material = t[0], ++this.meshCount;
      }
    };
  }
  cloneMaterial(i3) {
    if (!(i3 instanceof Gt)) return i3.clone();
    const e = i3.uniforms, t = /* @__PURE__ */ new Map();
    for (const s in e) {
      const r = e[s].value;
      r.isRenderTargetTexture && (e[s].value = null, t.set(s, r));
    }
    const n = i3.clone();
    for (const s of t) e[s[0]].value = s[1], n.uniforms[s[0]].value = s[1];
    return n;
  }
  setMaterial(i3) {
    if (this.disposeMaterials(), this.material = i3, i3 !== null) {
      const e = this.materials = [this.cloneMaterial(i3), this.cloneMaterial(i3), this.cloneMaterial(i3)];
      for (const t of e) t.uniforms = Object.assign({}, i3.uniforms), t.side = Cn;
      e[2].skinning = true, this.materialsBackSide = e.map((t) => {
        const n = this.cloneMaterial(t);
        return n.uniforms = Object.assign({}, i3.uniforms), n.side = St, n;
      }), this.materialsDoubleSide = e.map((t) => {
        const n = this.cloneMaterial(t);
        return n.uniforms = Object.assign({}, i3.uniforms), n.side = Yt, n;
      }), this.materialsFlatShaded = e.map((t) => {
        const n = this.cloneMaterial(t);
        return n.uniforms = Object.assign({}, i3.uniforms), n.flatShading = true, n;
      }), this.materialsFlatShadedBackSide = e.map((t) => {
        const n = this.cloneMaterial(t);
        return n.uniforms = Object.assign({}, i3.uniforms), n.flatShading = true, n.side = St, n;
      }), this.materialsFlatShadedDoubleSide = e.map((t) => {
        const n = this.cloneMaterial(t);
        return n.uniforms = Object.assign({}, i3.uniforms), n.flatShading = true, n.side = Yt, n;
      });
    }
  }
  render(i3, e, t) {
    const n = i3.shadowMap.enabled;
    if (i3.shadowMap.enabled = false, co) {
      const s = this.originalMaterials;
      this.meshCount = 0, e.traverse(this.replaceMaterial), i3.render(e, t);
      for (const r of s) r[0].material = r[1];
      this.meshCount !== s.size && s.clear();
    } else {
      const s = e.overrideMaterial;
      e.overrideMaterial = this.material, i3.render(e, t), e.overrideMaterial = s;
    }
    i3.shadowMap.enabled = n;
  }
  disposeMaterials() {
    if (this.material !== null) {
      const i3 = this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);
      for (const e of i3) e.dispose();
    }
  }
  dispose() {
    this.originalMaterials.clear(), this.disposeMaterials();
  }
  static get workaroundEnabled() {
    return co;
  }
  static set workaroundEnabled(i3) {
    co = i3;
  }
}, si = -1, Rn = class extends xn {
  constructor(i3, e = si, t = si, n = 1) {
    super(), this.resizable = i3, this.baseSize = new _e(1, 1), this.preferredSize = new _e(e, t), this.target = this.preferredSize, this.s = n, this.effectiveSize = new _e(), this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize();
  }
  updateEffectiveSize() {
    const i3 = this.baseSize, e = this.preferredSize, t = this.effectiveSize, n = this.scale;
    e.width !== si ? t.width = e.width : e.height !== si ? t.width = Math.round(e.height * (i3.width / Math.max(i3.height, 1))) : t.width = Math.round(i3.width * n), e.height !== si ? t.height = e.height : e.width !== si ? t.height = Math.round(e.width / Math.max(i3.width / Math.max(i3.height, 1), 1)) : t.height = Math.round(i3.height * n);
  }
  get width() {
    return this.effectiveSize.width;
  }
  set width(i3) {
    this.preferredWidth = i3;
  }
  get height() {
    return this.effectiveSize.height;
  }
  set height(i3) {
    this.preferredHeight = i3;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  get scale() {
    return this.s;
  }
  set scale(i3) {
    this.s !== i3 && (this.s = i3, this.preferredSize.setScalar(si), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  getScale() {
    return this.scale;
  }
  setScale(i3) {
    this.scale = i3;
  }
  get baseWidth() {
    return this.baseSize.width;
  }
  set baseWidth(i3) {
    this.baseSize.width !== i3 && (this.baseSize.width = i3, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  getBaseWidth() {
    return this.baseWidth;
  }
  setBaseWidth(i3) {
    this.baseWidth = i3;
  }
  get baseHeight() {
    return this.baseSize.height;
  }
  set baseHeight(i3) {
    this.baseSize.height !== i3 && (this.baseSize.height = i3, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  getBaseHeight() {
    return this.baseHeight;
  }
  setBaseHeight(i3) {
    this.baseHeight = i3;
  }
  setBaseSize(i3, e) {
    (this.baseSize.width !== i3 || this.baseSize.height !== e) && (this.baseSize.set(i3, e), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  get preferredWidth() {
    return this.preferredSize.width;
  }
  set preferredWidth(i3) {
    this.preferredSize.width !== i3 && (this.preferredSize.width = i3, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  getPreferredWidth() {
    return this.preferredWidth;
  }
  setPreferredWidth(i3) {
    this.preferredWidth = i3;
  }
  get preferredHeight() {
    return this.preferredSize.height;
  }
  set preferredHeight(i3) {
    this.preferredSize.height !== i3 && (this.preferredSize.height = i3, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  getPreferredHeight() {
    return this.preferredHeight;
  }
  setPreferredHeight(i3) {
    this.preferredHeight = i3;
  }
  setPreferredSize(i3, e) {
    (this.preferredSize.width !== i3 || this.preferredSize.height !== e) && (this.preferredSize.set(i3, e), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  copy(i3) {
    this.s = i3.scale, this.baseSize.set(i3.baseWidth, i3.baseHeight), this.preferredSize.set(i3.preferredWidth, i3.preferredHeight), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height);
  }
  static get AUTO_SIZE() {
    return si;
  }
}, He = { ADD: 0, ALPHA: 1, AVERAGE: 2, COLOR: 3, COLOR_BURN: 4, COLOR_DODGE: 5, DARKEN: 6, DIFFERENCE: 7, DIVIDE: 8, DST: 9, EXCLUSION: 10, HARD_LIGHT: 11, HARD_MIX: 12, HUE: 13, INVERT: 14, INVERT_RGB: 15, LIGHTEN: 16, LINEAR_BURN: 17, LINEAR_DODGE: 18, LINEAR_LIGHT: 19, LUMINOSITY: 20, MULTIPLY: 21, NEGATION: 22, NORMAL: 23, OVERLAY: 24, PIN_LIGHT: 25, REFLECT: 26, SATURATION: 27, SCREEN: 28, SOFT_LIGHT: 29, SRC: 30, SUBTRACT: 31, VIVID_LIGHT: 32 }, ox = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", lx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}", cx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", hx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", ux = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", dx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", fx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", px = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", mx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", gx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", _x = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", vx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", xx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Sx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", yx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Mx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ex = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", bx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Tx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ax = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", wx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Rx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Cx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}", Px = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ix = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Dx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Lx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Ux = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Nx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Fx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}", Ox = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", Bx = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", kx = /* @__PURE__ */ new Map([[He.ADD, ox], [He.ALPHA, lx], [He.AVERAGE, cx], [He.COLOR, hx], [He.COLOR_BURN, ux], [He.COLOR_DODGE, dx], [He.DARKEN, fx], [He.DIFFERENCE, px], [He.DIVIDE, mx], [He.DST, null], [He.EXCLUSION, gx], [He.HARD_LIGHT, _x], [He.HARD_MIX, vx], [He.HUE, xx], [He.INVERT, Sx], [He.INVERT_RGB, yx], [He.LIGHTEN, Mx], [He.LINEAR_BURN, Ex], [He.LINEAR_DODGE, bx], [He.LINEAR_LIGHT, Tx], [He.LUMINOSITY, Ax], [He.MULTIPLY, wx], [He.NEGATION, Rx], [He.NORMAL, Cx], [He.OVERLAY, Px], [He.PIN_LIGHT, Ix], [He.REFLECT, Dx], [He.SATURATION, Lx], [He.SCREEN, Ux], [He.SOFT_LIGHT, Nx], [He.SRC, Fx], [He.SUBTRACT, Ox], [He.VIVID_LIGHT, Bx]]), zx = class extends xn {
  constructor(i3, e = 1) {
    super(), this._blendFunction = i3, this.opacity = new Qe(e);
  }
  getOpacity() {
    return this.opacity.value;
  }
  setOpacity(i3) {
    this.opacity.value = i3;
  }
  get blendFunction() {
    return this._blendFunction;
  }
  set blendFunction(i3) {
    this._blendFunction = i3, this.dispatchEvent({ type: "change" });
  }
  getBlendFunction() {
    return this.blendFunction;
  }
  setBlendFunction(i3) {
    this.blendFunction = i3;
  }
  getShaderCode() {
    return kx.get(this.blendFunction);
  }
}, Hx = class extends xn {
  constructor(i3, e, { attributes: t = Ri.NONE, blendFunction: n = He.NORMAL, defines: s = /* @__PURE__ */ new Map(), uniforms: r = /* @__PURE__ */ new Map(), extensions: a = null, vertexShader: o = null } = {}) {
    super(), this.name = i3, this.renderer = null, this.attributes = t, this.fragmentShader = e, this.vertexShader = o, this.defines = s, this.uniforms = r, this.extensions = a, this.blendMode = new zx(n), this.blendMode.addEventListener("change", (l) => this.setChanged()), this._inputColorSpace = Dt, this._outputColorSpace = wn;
  }
  get inputColorSpace() {
    return this._inputColorSpace;
  }
  set inputColorSpace(i3) {
    this._inputColorSpace = i3, this.setChanged();
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(i3) {
    this._outputColorSpace = i3, this.setChanged();
  }
  set mainScene(i3) {
  }
  set mainCamera(i3) {
  }
  getName() {
    return this.name;
  }
  setRenderer(i3) {
    this.renderer = i3;
  }
  getDefines() {
    return this.defines;
  }
  getUniforms() {
    return this.uniforms;
  }
  getExtensions() {
    return this.extensions;
  }
  getBlendMode() {
    return this.blendMode;
  }
  getAttributes() {
    return this.attributes;
  }
  setAttributes(i3) {
    this.attributes = i3, this.setChanged();
  }
  getFragmentShader() {
    return this.fragmentShader;
  }
  setFragmentShader(i3) {
    this.fragmentShader = i3, this.setChanged();
  }
  getVertexShader() {
    return this.vertexShader;
  }
  setVertexShader(i3) {
    this.vertexShader = i3, this.setChanged();
  }
  setChanged() {
    this.dispatchEvent({ type: "change" });
  }
  setDepthTexture(i3, e = rr) {
  }
  update(i3, e, t) {
  }
  setSize(i3, e) {
  }
  initialize(i3, e, t) {
  }
  dispose() {
    for (const i3 of Object.keys(this)) {
      const e = this[i3];
      (e instanceof Bt || e instanceof cn || e instanceof Mt || e instanceof yn) && this[i3].dispose();
    }
  }
}, Dl = { MEDIUM: 2, LARGE: 3 }, Vx = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`, Gx = "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}", Wx = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])], Xx = class extends Gt {
  constructor(i3 = new $e()) {
    super({ name: "KawaseBlurMaterial", uniforms: { inputBuffer: new Qe(null), texelSize: new Qe(new $e()), scale: new Qe(1), kernel: new Qe(0) }, blending: qt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Vx, vertexShader: Gx }), this.setTexelSize(i3.x, i3.y), this.kernelSize = Dl.MEDIUM;
  }
  set inputBuffer(i3) {
    this.uniforms.inputBuffer.value = i3;
  }
  setInputBuffer(i3) {
    this.inputBuffer = i3;
  }
  get kernelSequence() {
    return Wx[this.kernelSize];
  }
  get scale() {
    return this.uniforms.scale.value;
  }
  set scale(i3) {
    this.uniforms.scale.value = i3;
  }
  getScale() {
    return this.uniforms.scale.value;
  }
  setScale(i3) {
    this.uniforms.scale.value = i3;
  }
  getKernel() {
    return null;
  }
  get kernel() {
    return this.uniforms.kernel.value;
  }
  set kernel(i3) {
    this.uniforms.kernel.value = i3;
  }
  setKernel(i3) {
    this.kernel = i3;
  }
  setTexelSize(i3, e) {
    this.uniforms.texelSize.value.set(i3, e, i3 * 0.5, e * 0.5);
  }
  setSize(i3, e) {
    const t = 1 / i3, n = 1 / e;
    this.uniforms.texelSize.value.set(t, n, t * 0.5, n * 0.5);
  }
}, Yx = class extends yn {
  constructor({ kernelSize: i3 = Dl.MEDIUM, resolutionScale: e = 0.5, width: t = Rn.AUTO_SIZE, height: n = Rn.AUTO_SIZE, resolutionX: s = t, resolutionY: r = n } = {}) {
    super("KawaseBlurPass"), this.renderTargetA = new Bt(1, 1, { depthBuffer: false }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
    const a = this.resolution = new Rn(this, s, r, e);
    a.addEventListener("change", (o) => this.setSize(a.baseWidth, a.baseHeight)), this._blurMaterial = new Xx(), this._blurMaterial.kernelSize = i3, this.copyMaterial = new Au();
  }
  getResolution() {
    return this.resolution;
  }
  get blurMaterial() {
    return this._blurMaterial;
  }
  set blurMaterial(i3) {
    this._blurMaterial = i3;
  }
  get dithering() {
    return this.copyMaterial.dithering;
  }
  set dithering(i3) {
    this.copyMaterial.dithering = i3;
  }
  get kernelSize() {
    return this.blurMaterial.kernelSize;
  }
  set kernelSize(i3) {
    this.blurMaterial.kernelSize = i3;
  }
  get width() {
    return this.resolution.width;
  }
  set width(i3) {
    this.resolution.preferredWidth = i3;
  }
  get height() {
    return this.resolution.height;
  }
  set height(i3) {
    this.resolution.preferredHeight = i3;
  }
  get scale() {
    return this.blurMaterial.scale;
  }
  set scale(i3) {
    this.blurMaterial.scale = i3;
  }
  getScale() {
    return this.blurMaterial.scale;
  }
  setScale(i3) {
    this.blurMaterial.scale = i3;
  }
  getKernelSize() {
    return this.kernelSize;
  }
  setKernelSize(i3) {
    this.kernelSize = i3;
  }
  getResolutionScale() {
    return this.resolution.scale;
  }
  setResolutionScale(i3) {
    this.resolution.scale = i3;
  }
  render(i3, e, t, n, s) {
    const r = this.scene, a = this.camera, o = this.renderTargetA, l = this.renderTargetB, c = this.blurMaterial, h = c.kernelSequence;
    let u = e;
    this.fullscreenMaterial = c;
    for (let d = 0, p = h.length; d < p; ++d) {
      const g = (d & 1) === 0 ? o : l;
      c.kernel = h[d], c.inputBuffer = u.texture, i3.setRenderTarget(g), i3.render(r, a), u = g;
    }
    this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = u.texture, i3.setRenderTarget(this.renderToScreen ? null : t), i3.render(r, a);
  }
  setSize(i3, e) {
    const t = this.resolution;
    t.setBaseSize(i3, e);
    const n = t.width, s = t.height;
    this.renderTargetA.setSize(n, s), this.renderTargetB.setSize(n, s), this.blurMaterial.setSize(i3, e);
  }
  initialize(i3, e, t) {
    t !== void 0 && (this.renderTargetA.texture.type = t, this.renderTargetB.texture.type = t, t !== Ot ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : i3 !== null && i3.outputColorSpace === Ye && (this.renderTargetA.texture.colorSpace = Ye, this.renderTargetB.texture.colorSpace = Ye));
  }
  static get AUTO_SIZE() {
    return Rn.AUTO_SIZE;
  }
}, qx = `#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`, jx = class extends Gt {
  constructor(i3 = false, e = null) {
    super({ name: "LuminanceMaterial", defines: { THREE_REVISION: sr.replace(/\D+/g, "") }, uniforms: { inputBuffer: new Qe(null), threshold: new Qe(0), smoothing: new Qe(1), range: new Qe(null) }, blending: qt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: qx, vertexShader: Tu }), this.colorOutput = i3, this.luminanceRange = e;
  }
  set inputBuffer(i3) {
    this.uniforms.inputBuffer.value = i3;
  }
  setInputBuffer(i3) {
    this.uniforms.inputBuffer.value = i3;
  }
  get threshold() {
    return this.uniforms.threshold.value;
  }
  set threshold(i3) {
    this.smoothing > 0 || i3 > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD, this.uniforms.threshold.value = i3;
  }
  getThreshold() {
    return this.threshold;
  }
  setThreshold(i3) {
    this.threshold = i3;
  }
  get smoothing() {
    return this.uniforms.smoothing.value;
  }
  set smoothing(i3) {
    this.threshold > 0 || i3 > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD, this.uniforms.smoothing.value = i3;
  }
  getSmoothingFactor() {
    return this.smoothing;
  }
  setSmoothingFactor(i3) {
    this.smoothing = i3;
  }
  get useThreshold() {
    return this.threshold > 0 || this.smoothing > 0;
  }
  set useThreshold(i3) {
  }
  get colorOutput() {
    return this.defines.COLOR !== void 0;
  }
  set colorOutput(i3) {
    i3 ? this.defines.COLOR = "1" : delete this.defines.COLOR, this.needsUpdate = true;
  }
  isColorOutputEnabled(i3) {
    return this.colorOutput;
  }
  setColorOutputEnabled(i3) {
    this.colorOutput = i3;
  }
  get useRange() {
    return this.luminanceRange !== null;
  }
  set useRange(i3) {
    this.luminanceRange = null;
  }
  get luminanceRange() {
    return this.uniforms.range.value;
  }
  set luminanceRange(i3) {
    i3 !== null ? this.defines.RANGE = "1" : delete this.defines.RANGE, this.uniforms.range.value = i3, this.needsUpdate = true;
  }
  getLuminanceRange() {
    return this.luminanceRange;
  }
  setLuminanceRange(i3) {
    this.luminanceRange = i3;
  }
}, Kx = class extends yn {
  constructor({ renderTarget: i3, luminanceRange: e, colorOutput: t, resolutionScale: n = 1, width: s = Rn.AUTO_SIZE, height: r = Rn.AUTO_SIZE, resolutionX: a = s, resolutionY: o = r } = {}) {
    super("LuminancePass"), this.fullscreenMaterial = new jx(t, e), this.needsSwap = false, this.renderTarget = i3, this.renderTarget === void 0 && (this.renderTarget = new Bt(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "LuminancePass.Target");
    const l = this.resolution = new Rn(this, a, o, n);
    l.addEventListener("change", (c) => this.setSize(l.baseWidth, l.baseHeight));
  }
  get texture() {
    return this.renderTarget.texture;
  }
  getTexture() {
    return this.renderTarget.texture;
  }
  getResolution() {
    return this.resolution;
  }
  render(i3, e, t, n, s) {
    const r = this.fullscreenMaterial;
    r.inputBuffer = e.texture, i3.setRenderTarget(this.renderToScreen ? null : this.renderTarget), i3.render(this.scene, this.camera);
  }
  setSize(i3, e) {
    const t = this.resolution;
    t.setBaseSize(i3, e), this.renderTarget.setSize(t.width, t.height);
  }
  initialize(i3, e, t) {
    t !== void 0 && t !== Ot && (this.renderTarget.texture.type = t, this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, $x = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`, Zx = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}", Jx = class extends Gt {
  constructor() {
    super({ name: "DownsamplingMaterial", uniforms: { inputBuffer: new Qe(null), texelSize: new Qe(new _e()) }, blending: qt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: $x, vertexShader: Zx });
  }
  set inputBuffer(i3) {
    this.uniforms.inputBuffer.value = i3;
  }
  setSize(i3, e) {
    this.uniforms.texelSize.value.set(1 / i3, 1 / e);
  }
}, Qx = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`, eS = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}", tS = class extends Gt {
  constructor() {
    super({ name: "UpsamplingMaterial", uniforms: { inputBuffer: new Qe(null), supportBuffer: new Qe(null), texelSize: new Qe(new _e()), radius: new Qe(0.85) }, blending: qt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Qx, vertexShader: eS });
  }
  set inputBuffer(i3) {
    this.uniforms.inputBuffer.value = i3;
  }
  set supportBuffer(i3) {
    this.uniforms.supportBuffer.value = i3;
  }
  get radius() {
    return this.uniforms.radius.value;
  }
  set radius(i3) {
    this.uniforms.radius.value = i3;
  }
  setSize(i3, e) {
    this.uniforms.texelSize.value.set(1 / i3, 1 / e);
  }
}, nS = class extends yn {
  constructor() {
    super("MipmapBlurPass"), this.needsSwap = false, this.renderTarget = new Bt(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Upsampling.Mipmap0", this.downsamplingMipmaps = [], this.upsamplingMipmaps = [], this.downsamplingMaterial = new Jx(), this.upsamplingMaterial = new tS(), this.resolution = new _e();
  }
  get texture() {
    return this.renderTarget.texture;
  }
  get levels() {
    return this.downsamplingMipmaps.length;
  }
  set levels(i3) {
    if (this.levels !== i3) {
      const e = this.renderTarget;
      this.dispose(), this.downsamplingMipmaps = [], this.upsamplingMipmaps = [];
      for (let t = 0; t < i3; ++t) {
        const n = e.clone();
        n.texture.name = "Downsampling.Mipmap" + t, this.downsamplingMipmaps.push(n);
      }
      this.upsamplingMipmaps.push(e);
      for (let t = 1, n = i3 - 1; t < n; ++t) {
        const s = e.clone();
        s.texture.name = "Upsampling.Mipmap" + t, this.upsamplingMipmaps.push(s);
      }
      this.setSize(this.resolution.x, this.resolution.y);
    }
  }
  get radius() {
    return this.upsamplingMaterial.radius;
  }
  set radius(i3) {
    this.upsamplingMaterial.radius = i3;
  }
  render(i3, e, t, n, s) {
    const { scene: r, camera: a } = this, { downsamplingMaterial: o, upsamplingMaterial: l } = this, { downsamplingMipmaps: c, upsamplingMipmaps: h } = this;
    let u = e;
    this.fullscreenMaterial = o;
    for (let d = 0, p = c.length; d < p; ++d) {
      const g = c[d];
      o.setSize(u.width, u.height), o.inputBuffer = u.texture, i3.setRenderTarget(g), i3.render(r, a), u = g;
    }
    this.fullscreenMaterial = l;
    for (let d = h.length - 1; d >= 0; --d) {
      const p = h[d];
      l.setSize(u.width, u.height), l.inputBuffer = u.texture, l.supportBuffer = c[d].texture, i3.setRenderTarget(p), i3.render(r, a), u = p;
    }
  }
  setSize(i3, e) {
    const t = this.resolution;
    t.set(i3, e);
    let n = t.width, s = t.height;
    for (let r = 0, a = this.downsamplingMipmaps.length; r < a; ++r) n = Math.round(n * 0.5), s = Math.round(s * 0.5), this.downsamplingMipmaps[r].setSize(n, s), r < this.upsamplingMipmaps.length && this.upsamplingMipmaps[r].setSize(n, s);
  }
  initialize(i3, e, t) {
    if (t !== void 0) {
      const n = this.downsamplingMipmaps.concat(this.upsamplingMipmaps);
      for (const s of n) s.texture.type = t;
      if (t !== Ot) this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      else if (i3 !== null && i3.outputColorSpace === Ye) for (const s of n) s.texture.colorSpace = Ye;
    }
  }
  dispose() {
    super.dispose();
    for (const i3 of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) i3.dispose();
  }
}, iS = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`, sS = class extends Hx {
  constructor({ blendFunction: i3 = He.SCREEN, luminanceThreshold: e = 1, luminanceSmoothing: t = 0.03, mipmapBlur: n = true, intensity: s = 1, radius: r = 0.85, levels: a = 8, kernelSize: o = Dl.LARGE, resolutionScale: l = 0.5, width: c = Rn.AUTO_SIZE, height: h = Rn.AUTO_SIZE, resolutionX: u = c, resolutionY: d = h } = {}) {
    super("BloomEffect", iS, { blendFunction: i3, uniforms: /* @__PURE__ */ new Map([["map", new Qe(null)], ["intensity", new Qe(s)]]) }), this.renderTarget = new Bt(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Bloom.Target", this.blurPass = new Yx({ kernelSize: o }), this.luminancePass = new Kx({ colorOutput: true }), this.luminanceMaterial.threshold = e, this.luminanceMaterial.smoothing = t, this.mipmapBlurPass = new nS(), this.mipmapBlurPass.enabled = n, this.mipmapBlurPass.radius = r, this.mipmapBlurPass.levels = a, this.uniforms.get("map").value = n ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    const p = this.resolution = new Rn(this, u, d, l);
    p.addEventListener("change", (g) => this.setSize(p.baseWidth, p.baseHeight));
  }
  get texture() {
    return this.mipmapBlurPass.enabled ? this.mipmapBlurPass.texture : this.renderTarget.texture;
  }
  getTexture() {
    return this.texture;
  }
  getResolution() {
    return this.resolution;
  }
  getBlurPass() {
    return this.blurPass;
  }
  getLuminancePass() {
    return this.luminancePass;
  }
  get luminanceMaterial() {
    return this.luminancePass.fullscreenMaterial;
  }
  getLuminanceMaterial() {
    return this.luminancePass.fullscreenMaterial;
  }
  get width() {
    return this.resolution.width;
  }
  set width(i3) {
    this.resolution.preferredWidth = i3;
  }
  get height() {
    return this.resolution.height;
  }
  set height(i3) {
    this.resolution.preferredHeight = i3;
  }
  get dithering() {
    return this.blurPass.dithering;
  }
  set dithering(i3) {
    this.blurPass.dithering = i3;
  }
  get kernelSize() {
    return this.blurPass.kernelSize;
  }
  set kernelSize(i3) {
    this.blurPass.kernelSize = i3;
  }
  get distinction() {
    return console.warn(this.name, "distinction was removed"), 1;
  }
  set distinction(i3) {
    console.warn(this.name, "distinction was removed");
  }
  get intensity() {
    return this.uniforms.get("intensity").value;
  }
  set intensity(i3) {
    this.uniforms.get("intensity").value = i3;
  }
  getIntensity() {
    return this.intensity;
  }
  setIntensity(i3) {
    this.intensity = i3;
  }
  getResolutionScale() {
    return this.resolution.scale;
  }
  setResolutionScale(i3) {
    this.resolution.scale = i3;
  }
  update(i3, e, t) {
    const n = this.renderTarget, s = this.luminancePass;
    s.enabled ? (s.render(i3, e), this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(i3, s.renderTarget) : this.blurPass.render(i3, s.renderTarget, n)) : this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(i3, e) : this.blurPass.render(i3, e, n);
  }
  setSize(i3, e) {
    const t = this.resolution;
    t.setBaseSize(i3, e), this.renderTarget.setSize(t.width, t.height), this.blurPass.resolution.copy(t), this.luminancePass.setSize(i3, e), this.mipmapBlurPass.setSize(i3, e);
  }
  initialize(i3, e, t) {
    this.blurPass.initialize(i3, e, t), this.luminancePass.initialize(i3, e, t), this.mipmapBlurPass.initialize(i3, e, t), t !== void 0 && (this.renderTarget.texture.type = t, i3 !== null && i3.outputColorSpace === Ye && (this.renderTarget.texture.colorSpace = Ye));
  }
}, rS = class extends yn {
  constructor(i3, e, t = null) {
    super("RenderPass", i3, e), this.needsSwap = false, this.needsDepthBlit = true, this.clearPass = new wu(), this.overrideMaterialManager = t === null ? null : new vh(t), this.ignoreBackground = false, this.skipShadowMapUpdate = false, this.selection = null;
  }
  set mainScene(i3) {
    this.scene = i3;
  }
  set mainCamera(i3) {
    this.camera = i3;
  }
  get renderToScreen() {
    return super.renderToScreen;
  }
  set renderToScreen(i3) {
    super.renderToScreen = i3, this.clearPass.renderToScreen = i3;
  }
  get overrideMaterial() {
    const i3 = this.overrideMaterialManager;
    return i3 !== null ? i3.material : null;
  }
  set overrideMaterial(i3) {
    const e = this.overrideMaterialManager;
    i3 !== null ? e !== null ? e.setMaterial(i3) : this.overrideMaterialManager = new vh(i3) : e !== null && (e.dispose(), this.overrideMaterialManager = null);
  }
  getOverrideMaterial() {
    return this.overrideMaterial;
  }
  setOverrideMaterial(i3) {
    this.overrideMaterial = i3;
  }
  get clear() {
    return this.clearPass.enabled;
  }
  set clear(i3) {
    this.clearPass.enabled = i3;
  }
  getSelection() {
    return this.selection;
  }
  setSelection(i3) {
    this.selection = i3;
  }
  isBackgroundDisabled() {
    return this.ignoreBackground;
  }
  setBackgroundDisabled(i3) {
    this.ignoreBackground = i3;
  }
  isShadowMapDisabled() {
    return this.skipShadowMapUpdate;
  }
  setShadowMapDisabled(i3) {
    this.skipShadowMapUpdate = i3;
  }
  getClearPass() {
    return this.clearPass;
  }
  render(i3, e, t, n, s) {
    const r = this.scene, a = this.camera, o = this.selection, l = a.layers.mask, c = r.background, h = i3.shadowMap.autoUpdate, u = this.renderToScreen ? null : e;
    o !== null && a.layers.set(o.getLayer()), this.skipShadowMapUpdate && (i3.shadowMap.autoUpdate = false), (this.ignoreBackground || this.clearPass.overrideClearColor !== null) && (r.background = null), this.clearPass.enabled && this.clearPass.render(i3, e), i3.setRenderTarget(u), this.overrideMaterialManager !== null ? this.overrideMaterialManager.render(i3, r, a) : i3.render(r, a), a.layers.mask = l, r.background = c, i3.shadowMap.autoUpdate = h;
  }
}, aS = `#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`, oS = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}", lS = class extends Gt {
  constructor(i3, e, t, n, s = false) {
    super({ name: "EffectMaterial", defines: { THREE_REVISION: sr.replace(/\D+/g, ""), DEPTH_PACKING: "0", ENCODE_OUTPUT: "1" }, uniforms: { inputBuffer: new Qe(null), depthBuffer: new Qe(null), resolution: new Qe(new _e()), texelSize: new Qe(new _e()), cameraNear: new Qe(0.3), cameraFar: new Qe(1e3), aspect: new Qe(1), time: new Qe(0) }, blending: qt, toneMapped: false, depthWrite: false, depthTest: false, dithering: s }), i3 && this.setShaderParts(i3), e && this.setDefines(e), t && this.setUniforms(t), this.copyCameraSettings(n);
  }
  set inputBuffer(i3) {
    this.uniforms.inputBuffer.value = i3;
  }
  setInputBuffer(i3) {
    this.uniforms.inputBuffer.value = i3;
  }
  get depthBuffer() {
    return this.uniforms.depthBuffer.value;
  }
  set depthBuffer(i3) {
    this.uniforms.depthBuffer.value = i3;
  }
  get depthPacking() {
    return Number(this.defines.DEPTH_PACKING);
  }
  set depthPacking(i3) {
    this.defines.DEPTH_PACKING = i3.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(i3, e = rr) {
    this.depthBuffer = i3, this.depthPacking = e;
  }
  setShaderData(i3) {
    this.setShaderParts(i3.shaderParts), this.setDefines(i3.defines), this.setUniforms(i3.uniforms), this.setExtensions(i3.extensions);
  }
  setShaderParts(i3) {
    return this.fragmentShader = aS.replace(Je.FRAGMENT_HEAD, i3.get(Je.FRAGMENT_HEAD) || "").replace(Je.FRAGMENT_MAIN_UV, i3.get(Je.FRAGMENT_MAIN_UV) || "").replace(Je.FRAGMENT_MAIN_IMAGE, i3.get(Je.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = oS.replace(Je.VERTEX_HEAD, i3.get(Je.VERTEX_HEAD) || "").replace(Je.VERTEX_MAIN_SUPPORT, i3.get(Je.VERTEX_MAIN_SUPPORT) || ""), this.needsUpdate = true, this;
  }
  setDefines(i3) {
    for (const e of i3.entries()) this.defines[e[0]] = e[1];
    return this.needsUpdate = true, this;
  }
  setUniforms(i3) {
    for (const e of i3.entries()) this.uniforms[e[0]] = e[1];
    return this;
  }
  setExtensions(i3) {
    this.extensions = {};
    for (const e of i3) this.extensions[e] = true;
    return this;
  }
  get encodeOutput() {
    return this.defines.ENCODE_OUTPUT !== void 0;
  }
  set encodeOutput(i3) {
    this.encodeOutput !== i3 && (i3 ? this.defines.ENCODE_OUTPUT = "1" : delete this.defines.ENCODE_OUTPUT, this.needsUpdate = true);
  }
  isOutputEncodingEnabled(i3) {
    return this.encodeOutput;
  }
  setOutputEncodingEnabled(i3) {
    this.encodeOutput = i3;
  }
  get time() {
    return this.uniforms.time.value;
  }
  set time(i3) {
    this.uniforms.time.value = i3;
  }
  setDeltaTime(i3) {
    this.uniforms.time.value += i3;
  }
  adoptCameraSettings(i3) {
    this.copyCameraSettings(i3);
  }
  copyCameraSettings(i3) {
    i3 && (this.uniforms.cameraNear.value = i3.near, this.uniforms.cameraFar.value = i3.far, i3 instanceof Ft ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = true);
  }
  setSize(i3, e) {
    const t = this.uniforms;
    t.resolution.value.set(i3, e), t.texelSize.value.set(1 / i3, 1 / e), t.aspect.value = i3 / e;
  }
  static get Section() {
    return Je;
  }
};
function xh(i3, e, t) {
  for (const n of e) {
    const s = "$1" + i3 + n.charAt(0).toUpperCase() + n.slice(1), r = new RegExp("([^\\.])(\\b" + n + "\\b)", "g");
    for (const a of t.entries()) a[1] !== null && t.set(a[0], a[1].replace(r, s));
  }
}
function cS(i3, e, t) {
  let n = e.getFragmentShader(), s = e.getVertexShader();
  const r = n !== void 0 && /mainImage/.test(n), a = n !== void 0 && /mainUv/.test(n);
  if (t.attributes |= e.getAttributes(), n === void 0) throw new Error(`Missing fragment shader (${e.name})`);
  if (a && (t.attributes & Ri.CONVOLUTION) !== 0) throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);
  if (!r && !a) throw new Error(`Could not find mainImage or mainUv function (${e.name})`);
  {
    const o = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g, l = t.shaderParts;
    let c = l.get(Je.FRAGMENT_HEAD) || "", h = l.get(Je.FRAGMENT_MAIN_UV) || "", u = l.get(Je.FRAGMENT_MAIN_IMAGE) || "", d = l.get(Je.VERTEX_HEAD) || "", p = l.get(Je.VERTEX_MAIN_SUPPORT) || "";
    const g = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
    if (a && (h += `	${i3}MainUv(UV);
`, t.uvTransformation = true), s !== null && /mainSupport/.test(s)) {
      const T = /mainSupport *\([\w\s]*?uv\s*?\)/.test(s);
      p += `	${i3}MainSupport(`, p += T ? `vUv);
` : `);
`;
      for (const E of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) for (const y of E[1].split(/\s*,\s*/)) t.varyings.add(y), g.add(y), _.add(y);
      for (const E of s.matchAll(o)) _.add(E[1]);
    }
    for (const T of n.matchAll(o)) _.add(T[1]);
    for (const T of e.defines.keys()) _.add(T.replace(/\([\w\s,]*\)/g, ""));
    for (const T of e.uniforms.keys()) _.add(T);
    _.delete("while"), _.delete("for"), _.delete("if"), e.uniforms.forEach((T, E) => t.uniforms.set(i3 + E.charAt(0).toUpperCase() + E.slice(1), T)), e.defines.forEach((T, E) => t.defines.set(i3 + E.charAt(0).toUpperCase() + E.slice(1), T));
    const m = /* @__PURE__ */ new Map([["fragment", n], ["vertex", s]]);
    xh(i3, _, t.defines), xh(i3, _, m), n = m.get("fragment"), s = m.get("vertex");
    const f = e.blendMode;
    if (t.blendModes.set(f.blendFunction, f), r) {
      e.inputColorSpace !== null && e.inputColorSpace !== t.colorSpace && (u += e.inputColorSpace === Ye ? `color0 = sRGBTransferOETF(color0);
	` : `color0 = sRGBToLinear(color0);
	`), e.outputColorSpace !== wn ? t.colorSpace = e.outputColorSpace : e.inputColorSpace !== null && (t.colorSpace = e.inputColorSpace);
      const T = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      u += `${i3}MainImage(color0, UV, `, (t.attributes & Ri.DEPTH) !== 0 && T.test(n) && (u += "depth, ", t.readDepth = true), u += `color1);
	`;
      const E = i3 + "BlendOpacity";
      t.uniforms.set(E, f.opacity), u += `color0 = blend${f.blendFunction}(color0, color1, ${E});

	`, c += `uniform float ${E};

`;
    }
    if (c += n + `
`, s !== null && (d += s + `
`), l.set(Je.FRAGMENT_HEAD, c), l.set(Je.FRAGMENT_MAIN_UV, h), l.set(Je.FRAGMENT_MAIN_IMAGE, u), l.set(Je.VERTEX_HEAD, d), l.set(Je.VERTEX_MAIN_SUPPORT, p), e.extensions !== null) for (const T of e.extensions) t.extensions.add(T);
  }
}
var hS = class extends yn {
  constructor(i3, ...e) {
    super("EffectPass"), this.fullscreenMaterial = new lS(null, null, null, i3), this.listener = (t) => this.handleEvent(t), this.effects = [], this.setEffects(e), this.skipRendering = false, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1;
  }
  set mainScene(i3) {
    for (const e of this.effects) e.mainScene = i3;
  }
  set mainCamera(i3) {
    this.fullscreenMaterial.copyCameraSettings(i3);
    for (const e of this.effects) e.mainCamera = i3;
  }
  get encodeOutput() {
    return this.fullscreenMaterial.encodeOutput;
  }
  set encodeOutput(i3) {
    this.fullscreenMaterial.encodeOutput = i3;
  }
  get dithering() {
    return this.fullscreenMaterial.dithering;
  }
  set dithering(i3) {
    const e = this.fullscreenMaterial;
    e.dithering = i3, e.needsUpdate = true;
  }
  setEffects(i3) {
    for (const e of this.effects) e.removeEventListener("change", this.listener);
    this.effects = i3.sort((e, t) => t.attributes - e.attributes);
    for (const e of this.effects) e.addEventListener("change", this.listener);
  }
  updateMaterial() {
    const i3 = new ax();
    let e = 0;
    for (const a of this.effects) if (a.blendMode.blendFunction === He.DST) i3.attributes |= a.getAttributes() & Ri.DEPTH;
    else {
      if ((i3.attributes & a.getAttributes() & Ri.CONVOLUTION) !== 0) throw new Error(`Convolution effects cannot be merged (${a.name})`);
      cS("e" + e++, a, i3);
    }
    let t = i3.shaderParts.get(Je.FRAGMENT_HEAD), n = i3.shaderParts.get(Je.FRAGMENT_MAIN_IMAGE), s = i3.shaderParts.get(Je.FRAGMENT_MAIN_UV);
    const r = /\bblend\b/g;
    for (const a of i3.blendModes.values()) t += a.getShaderCode().replace(r, `blend${a.blendFunction}`) + `
`;
    (i3.attributes & Ri.DEPTH) !== 0 ? (i3.readDepth && (n = `float depth = readDepth(UV);

	` + n), this.needsDepthTexture = this.getDepthTexture() === null) : this.needsDepthTexture = false, i3.colorSpace === Ye && (n += `color0 = sRGBToLinear(color0);
	`), i3.uvTransformation ? (s = `vec2 transformedUv = vUv;
` + s, i3.defines.set("UV", "transformedUv")) : i3.defines.set("UV", "vUv"), i3.shaderParts.set(Je.FRAGMENT_HEAD, t), i3.shaderParts.set(Je.FRAGMENT_MAIN_IMAGE, n), i3.shaderParts.set(Je.FRAGMENT_MAIN_UV, s);
    for (const [a, o] of i3.shaderParts) o !== null && i3.shaderParts.set(a, o.trim().replace(/^#/, `
#`));
    this.skipRendering = e === 0, this.needsSwap = !this.skipRendering, this.fullscreenMaterial.setShaderData(i3);
  }
  recompile() {
    this.updateMaterial();
  }
  getDepthTexture() {
    return this.fullscreenMaterial.depthBuffer;
  }
  setDepthTexture(i3, e = rr) {
    this.fullscreenMaterial.depthBuffer = i3, this.fullscreenMaterial.depthPacking = e;
    for (const t of this.effects) t.setDepthTexture(i3, e);
  }
  render(i3, e, t, n, s) {
    for (const r of this.effects) r.update(i3, e, n);
    if (!this.skipRendering || this.renderToScreen) {
      const r = this.fullscreenMaterial;
      r.inputBuffer = e.texture, r.time += n * this.timeScale, i3.setRenderTarget(this.renderToScreen ? null : t), i3.render(this.scene, this.camera);
    }
  }
  setSize(i3, e) {
    this.fullscreenMaterial.setSize(i3, e);
    for (const t of this.effects) t.setSize(i3, e);
  }
  initialize(i3, e, t) {
    this.renderer = i3;
    for (const n of this.effects) n.initialize(i3, e, t);
    this.updateMaterial(), t !== void 0 && t !== Ot && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
  dispose() {
    super.dispose();
    for (const i3 of this.effects) i3.removeEventListener("change", this.listener), i3.dispose();
  }
  handleEvent(i3) {
    switch (i3.type) {
      case "change":
        this.recompile();
        break;
    }
  }
};
function uS(i3) {
  if (!(typeof window > "u")) {
    var e = document.createElement("style");
    return e.setAttribute("type", "text/css"), e.innerHTML = i3, document.head.appendChild(e), i3;
  }
}
function ss(i3, e) {
  var t = i3.__state.conversionName.toString(), n = Math.round(i3.r), s = Math.round(i3.g), r = Math.round(i3.b), a = i3.a, o = Math.round(i3.h), l = i3.s.toFixed(1), c = i3.v.toFixed(1);
  if (e || t === "THREE_CHAR_HEX" || t === "SIX_CHAR_HEX") {
    for (var h = i3.hex.toString(16); h.length < 6; ) h = "0" + h;
    return "#" + h;
  } else {
    if (t === "CSS_RGB") return "rgb(" + n + "," + s + "," + r + ")";
    if (t === "CSS_RGBA") return "rgba(" + n + "," + s + "," + r + "," + a + ")";
    if (t === "HEX") return "0x" + i3.hex.toString(16);
    if (t === "RGB_ARRAY") return "[" + n + "," + s + "," + r + "]";
    if (t === "RGBA_ARRAY") return "[" + n + "," + s + "," + r + "," + a + "]";
    if (t === "RGB_OBJ") return "{r:" + n + ",g:" + s + ",b:" + r + "}";
    if (t === "RGBA_OBJ") return "{r:" + n + ",g:" + s + ",b:" + r + ",a:" + a + "}";
    if (t === "HSV_OBJ") return "{h:" + o + ",s:" + l + ",v:" + c + "}";
    if (t === "HSVA_OBJ") return "{h:" + o + ",s:" + l + ",v:" + c + ",a:" + a + "}";
  }
  return "unknown format";
}
var Sh = Array.prototype.forEach, zs = Array.prototype.slice, j = { BREAK: {}, extend: function(e) {
  return this.each(zs.call(arguments, 1), function(t) {
    var n = this.isObject(t) ? Object.keys(t) : [];
    n.forEach((function(s) {
      this.isUndefined(t[s]) || (e[s] = t[s]);
    }).bind(this));
  }, this), e;
}, defaults: function(e) {
  return this.each(zs.call(arguments, 1), function(t) {
    var n = this.isObject(t) ? Object.keys(t) : [];
    n.forEach((function(s) {
      this.isUndefined(e[s]) && (e[s] = t[s]);
    }).bind(this));
  }, this), e;
}, compose: function() {
  var e = zs.call(arguments);
  return function() {
    for (var t = zs.call(arguments), n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
    return t[0];
  };
}, each: function(e, t, n) {
  if (e) {
    if (Sh && e.forEach && e.forEach === Sh) e.forEach(t, n);
    else if (e.length === e.length + 0) {
      var s = void 0, r = void 0;
      for (s = 0, r = e.length; s < r; s++) if (s in e && t.call(n, e[s], s) === this.BREAK) return;
    } else for (var a in e) if (t.call(n, e[a], a) === this.BREAK) return;
  }
}, defer: function(e) {
  setTimeout(e, 0);
}, debounce: function(e, t, n) {
  var s = void 0;
  return function() {
    var r = this, a = arguments;
    function o() {
      s = null, n || e.apply(r, a);
    }
    var l = n || !s;
    clearTimeout(s), s = setTimeout(o, t), l && e.apply(r, a);
  };
}, toArray: function(e) {
  return e.toArray ? e.toArray() : zs.call(e);
}, isUndefined: function(e) {
  return e === void 0;
}, isNull: function(e) {
  return e === null;
}, isNaN: (function(i3) {
  function e(t) {
    return i3.apply(this, arguments);
  }
  return e.toString = function() {
    return i3.toString();
  }, e;
})(function(i3) {
  return isNaN(i3);
}), isArray: Array.isArray || function(i3) {
  return i3.constructor === Array;
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
} }, dS = [{ litmus: j.isString, conversions: { THREE_CHAR_HEX: { read: function(e) {
  var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
  return t === null ? false : { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) };
}, write: ss }, SIX_CHAR_HEX: { read: function(e) {
  var t = e.match(/^#([A-F0-9]{6})$/i);
  return t === null ? false : { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) };
}, write: ss }, CSS_RGB: { read: function(e) {
  var t = e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
  return t === null ? false : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) };
}, write: ss }, CSS_RGBA: { read: function(e) {
  var t = e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
  return t === null ? false : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) };
}, write: ss } } }, { litmus: j.isNumber, conversions: { HEX: { read: function(e) {
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
} } } }], Hs = void 0, zr = void 0, rl = function() {
  zr = false;
  var e = arguments.length > 1 ? j.toArray(arguments) : arguments[0];
  return j.each(dS, function(t) {
    if (t.litmus(e)) return j.each(t.conversions, function(n, s) {
      if (Hs = n.read(e), zr === false && Hs !== false) return zr = Hs, Hs.conversionName = s, Hs.conversion = n, j.BREAK;
    }), j.BREAK;
  }), zr;
}, yh = void 0, sa = { hsv_to_rgb: function(e, t, n) {
  var s = Math.floor(e / 60) % 6, r = e / 60 - Math.floor(e / 60), a = n * (1 - t), o = n * (1 - r * t), l = n * (1 - (1 - r) * t), c = [[n, l, a], [o, n, a], [a, n, l], [a, o, n], [l, a, n], [n, a, o]][s];
  return { r: c[0] * 255, g: c[1] * 255, b: c[2] * 255 };
}, rgb_to_hsv: function(e, t, n) {
  var s = Math.min(e, t, n), r = Math.max(e, t, n), a = r - s, o = void 0, l = void 0;
  if (r !== 0) l = a / r;
  else return { h: NaN, s: 0, v: 0 };
  return e === r ? o = (t - n) / a : t === r ? o = 2 + (n - e) / a : o = 4 + (e - t) / a, o /= 6, o < 0 && (o += 1), { h: o * 360, s: l, v: r / 255 };
}, rgb_to_hex: function(e, t, n) {
  var s = this.hex_with_component(0, 2, e);
  return s = this.hex_with_component(s, 1, t), s = this.hex_with_component(s, 0, n), s;
}, component_from_hex: function(e, t) {
  return e >> t * 8 & 255;
}, hex_with_component: function(e, t, n) {
  return n << (yh = t * 8) | e & ~(255 << yh);
} }, fS = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i3) {
  return typeof i3;
} : function(i3) {
  return i3 && typeof Symbol == "function" && i3.constructor === Symbol && i3 !== Symbol.prototype ? "symbol" : typeof i3;
}, Mn = function(i3, e) {
  if (!(i3 instanceof e)) throw new TypeError("Cannot call a class as a function");
}, En = /* @__PURE__ */ (function() {
  function i3(e, t) {
    for (var n = 0; n < t.length; n++) {
      var s = t[n];
      s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(e, s.key, s);
    }
  }
  return function(e, t, n) {
    return t && i3(e.prototype, t), n && i3(e, n), e;
  };
})(), fi = function i(e, t, n) {
  e === null && (e = Function.prototype);
  var s = Object.getOwnPropertyDescriptor(e, t);
  if (s === void 0) {
    var r = Object.getPrototypeOf(e);
    return r === null ? void 0 : i(r, t, n);
  } else {
    if ("value" in s) return s.value;
    var a = s.get;
    return a === void 0 ? void 0 : a.call(n);
  }
}, pi = function(i3, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  i3.prototype = Object.create(e && e.prototype, { constructor: { value: i3, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(i3, e) : i3.__proto__ = e);
}, mi = function(i3, e) {
  if (!i3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : i3;
}, wt = (function() {
  function i3() {
    if (Mn(this, i3), this.__state = rl.apply(this, arguments), this.__state === false) throw new Error("Failed to interpret color arguments");
    this.__state.a = this.__state.a || 1;
  }
  return En(i3, [{ key: "toString", value: function() {
    return ss(this);
  } }, { key: "toHexString", value: function() {
    return ss(this, true);
  } }, { key: "toOriginal", value: function() {
    return this.__state.conversion.write(this);
  } }]), i3;
})();
function Ll(i3, e, t) {
  Object.defineProperty(i3, e, { get: function() {
    return this.__state.space === "RGB" ? this.__state[e] : (wt.recalculateRGB(this, e, t), this.__state[e]);
  }, set: function(s) {
    this.__state.space !== "RGB" && (wt.recalculateRGB(this, e, t), this.__state.space = "RGB"), this.__state[e] = s;
  } });
}
function Ul(i3, e) {
  Object.defineProperty(i3, e, { get: function() {
    return this.__state.space === "HSV" ? this.__state[e] : (wt.recalculateHSV(this), this.__state[e]);
  }, set: function(n) {
    this.__state.space !== "HSV" && (wt.recalculateHSV(this), this.__state.space = "HSV"), this.__state[e] = n;
  } });
}
wt.recalculateRGB = function(i3, e, t) {
  if (i3.__state.space === "HEX") i3.__state[e] = sa.component_from_hex(i3.__state.hex, t);
  else if (i3.__state.space === "HSV") j.extend(i3.__state, sa.hsv_to_rgb(i3.__state.h, i3.__state.s, i3.__state.v));
  else throw new Error("Corrupted color state");
};
wt.recalculateHSV = function(i3) {
  var e = sa.rgb_to_hsv(i3.r, i3.g, i3.b);
  j.extend(i3.__state, { s: e.s, v: e.v }), j.isNaN(e.h) ? j.isUndefined(i3.__state.h) && (i3.__state.h = 0) : i3.__state.h = e.h;
};
wt.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"];
Ll(wt.prototype, "r", 2);
Ll(wt.prototype, "g", 1);
Ll(wt.prototype, "b", 0);
Ul(wt.prototype, "h");
Ul(wt.prototype, "s");
Ul(wt.prototype, "v");
Object.defineProperty(wt.prototype, "a", { get: function() {
  return this.__state.a;
}, set: function(e) {
  this.__state.a = e;
} });
Object.defineProperty(wt.prototype, "hex", { get: function() {
  return this.__state.space !== "HEX" && (this.__state.hex = sa.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex;
}, set: function(e) {
  this.__state.space = "HEX", this.__state.hex = e;
} });
var Li = (function() {
  function i3(e, t) {
    Mn(this, i3), this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = void 0, this.__onFinishChange = void 0;
  }
  return En(i3, [{ key: "onChange", value: function(t) {
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
  } }]), i3;
})(), pS = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, Ru = {};
j.each(pS, function(i3, e) {
  j.each(i3, function(t) {
    Ru[t] = e;
  });
});
var mS = /(\d+(\.\d+)?)px/;
function Tn(i3) {
  if (i3 === "0" || j.isUndefined(i3)) return 0;
  var e = i3.match(mS);
  return j.isNull(e) ? 0 : parseFloat(e[1]);
}
var O = { makeSelectable: function(e, t) {
  e === void 0 || e.style === void 0 || (e.onselectstart = t ? function() {
    return false;
  } : function() {
  }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off");
}, makeFullscreen: function(e, t, n) {
  var s = n, r = t;
  j.isUndefined(r) && (r = true), j.isUndefined(s) && (s = true), e.style.position = "absolute", r && (e.style.left = 0, e.style.right = 0), s && (e.style.top = 0, e.style.bottom = 0);
}, fakeEvent: function(e, t, n, s) {
  var r = n || {}, a = Ru[t];
  if (!a) throw new Error("Event type " + t + " not supported.");
  var o = document.createEvent(a);
  switch (a) {
    case "MouseEvents": {
      var l = r.x || r.clientX || 0, c = r.y || r.clientY || 0;
      o.initMouseEvent(t, r.bubbles || false, r.cancelable || true, window, r.clickCount || 1, 0, 0, l, c, false, false, false, false, 0, null);
      break;
    }
    case "KeyboardEvents": {
      var h = o.initKeyboardEvent || o.initKeyEvent;
      j.defaults(r, { cancelable: true, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, keyCode: void 0, charCode: void 0 }), h(t, r.bubbles || false, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode);
      break;
    }
    default: {
      o.initEvent(t, r.bubbles || false, r.cancelable || true);
      break;
    }
  }
  j.defaults(o, s), e.dispatchEvent(o);
}, bind: function(e, t, n, s) {
  var r = s || false;
  return e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent("on" + t, n), O;
}, unbind: function(e, t, n, s) {
  var r = s || false;
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
    var n = e.className.split(/ +/), s = n.indexOf(t);
    s !== -1 && (n.splice(s, 1), e.className = n.join(" "));
  }
  else e.className = void 0;
  return O;
}, hasClass: function(e, t) {
  return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || false;
}, getWidth: function(e) {
  var t = getComputedStyle(e);
  return Tn(t["border-left-width"]) + Tn(t["border-right-width"]) + Tn(t["padding-left"]) + Tn(t["padding-right"]) + Tn(t.width);
}, getHeight: function(e) {
  var t = getComputedStyle(e);
  return Tn(t["border-top-width"]) + Tn(t["border-bottom-width"]) + Tn(t["padding-top"]) + Tn(t["padding-bottom"]) + Tn(t.height);
}, getOffset: function(e) {
  var t = e, n = { left: 0, top: 0 };
  if (t.offsetParent) do
    n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent;
  while (t);
  return n;
}, isActive: function(e) {
  return e === document.activeElement && (e.type || e.href);
} }, Cu = (function(i3) {
  pi(e, i3);
  function e(t, n) {
    Mn(this, e);
    var s = mi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), r = s;
    s.__prev = s.getValue(), s.__checkbox = document.createElement("input"), s.__checkbox.setAttribute("type", "checkbox");
    function a() {
      r.setValue(!r.__prev);
    }
    return O.bind(s.__checkbox, "change", a, false), s.domElement.appendChild(s.__checkbox), s.updateDisplay(), s;
  }
  return En(e, [{ key: "setValue", value: function(n) {
    var s = fi(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), s;
  } }, { key: "updateDisplay", value: function() {
    return this.getValue() === true ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = true, this.__prev = true) : (this.__checkbox.checked = false, this.__prev = false), fi(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
})(Li), gS = (function(i3) {
  pi(e, i3);
  function e(t, n, s) {
    Mn(this, e);
    var r = mi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), a = s, o = r;
    if (r.__select = document.createElement("select"), j.isArray(a)) {
      var l = {};
      j.each(a, function(c) {
        l[c] = c;
      }), a = l;
    }
    return j.each(a, function(c, h) {
      var u = document.createElement("option");
      u.innerHTML = h, u.setAttribute("value", c), o.__select.appendChild(u);
    }), r.updateDisplay(), O.bind(r.__select, "change", function() {
      var c = this.options[this.selectedIndex].value;
      o.setValue(c);
    }), r.domElement.appendChild(r.__select), r;
  }
  return En(e, [{ key: "setValue", value: function(n) {
    var s = fi(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), s;
  } }, { key: "updateDisplay", value: function() {
    return O.isActive(this.__select) ? this : (this.__select.value = this.getValue(), fi(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this));
  } }]), e;
})(Li), _S = (function(i3) {
  pi(e, i3);
  function e(t, n) {
    Mn(this, e);
    var s = mi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), r = s;
    function a() {
      r.setValue(r.__input.value);
    }
    function o() {
      r.__onFinishChange && r.__onFinishChange.call(r, r.getValue());
    }
    return s.__input = document.createElement("input"), s.__input.setAttribute("type", "text"), O.bind(s.__input, "keyup", a), O.bind(s.__input, "change", a), O.bind(s.__input, "blur", o), O.bind(s.__input, "keydown", function(l) {
      l.keyCode === 13 && this.blur();
    }), s.updateDisplay(), s.domElement.appendChild(s.__input), s;
  }
  return En(e, [{ key: "updateDisplay", value: function() {
    return O.isActive(this.__input) || (this.__input.value = this.getValue()), fi(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
})(Li);
function Mh(i3) {
  var e = i3.toString();
  return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0;
}
var Pu = (function(i3) {
  pi(e, i3);
  function e(t, n, s) {
    Mn(this, e);
    var r = mi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), a = s || {};
    return r.__min = a.min, r.__max = a.max, r.__step = a.step, j.isUndefined(r.__step) ? r.initialValue === 0 ? r.__impliedStep = 1 : r.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(r.initialValue)) / Math.LN10)) / 10 : r.__impliedStep = r.__step, r.__precision = Mh(r.__impliedStep), r;
  }
  return En(e, [{ key: "setValue", value: function(n) {
    var s = n;
    return this.__min !== void 0 && s < this.__min ? s = this.__min : this.__max !== void 0 && s > this.__max && (s = this.__max), this.__step !== void 0 && s % this.__step !== 0 && (s = Math.round(s / this.__step) * this.__step), fi(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, s);
  } }, { key: "min", value: function(n) {
    return this.__min = n, this;
  } }, { key: "max", value: function(n) {
    return this.__max = n, this;
  } }, { key: "step", value: function(n) {
    return this.__step = n, this.__impliedStep = n, this.__precision = Mh(n), this;
  } }]), e;
})(Li);
function vS(i3, e) {
  var t = Math.pow(10, e);
  return Math.round(i3 * t) / t;
}
var ra = (function(i3) {
  pi(e, i3);
  function e(t, n, s) {
    Mn(this, e);
    var r = mi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, s));
    r.__truncationSuspended = false;
    var a = r, o = void 0;
    function l() {
      var g = parseFloat(a.__input.value);
      j.isNaN(g) || a.setValue(g);
    }
    function c() {
      a.__onFinishChange && a.__onFinishChange.call(a, a.getValue());
    }
    function h() {
      c();
    }
    function u(g) {
      var _ = o - g.clientY;
      a.setValue(a.getValue() + _ * a.__impliedStep), o = g.clientY;
    }
    function d() {
      O.unbind(window, "mousemove", u), O.unbind(window, "mouseup", d), c();
    }
    function p(g) {
      O.bind(window, "mousemove", u), O.bind(window, "mouseup", d), o = g.clientY;
    }
    return r.__input = document.createElement("input"), r.__input.setAttribute("type", "text"), O.bind(r.__input, "change", l), O.bind(r.__input, "blur", h), O.bind(r.__input, "mousedown", p), O.bind(r.__input, "keydown", function(g) {
      g.keyCode === 13 && (a.__truncationSuspended = true, this.blur(), a.__truncationSuspended = false, c());
    }), r.updateDisplay(), r.domElement.appendChild(r.__input), r;
  }
  return En(e, [{ key: "updateDisplay", value: function() {
    return this.__input.value = this.__truncationSuspended ? this.getValue() : vS(this.getValue(), this.__precision), fi(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
})(Pu);
function Eh(i3, e, t, n, s) {
  return n + (s - n) * ((i3 - e) / (t - e));
}
var al = (function(i3) {
  pi(e, i3);
  function e(t, n, s, r, a) {
    Mn(this, e);
    var o = mi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, { min: s, max: r, step: a })), l = o;
    o.__background = document.createElement("div"), o.__foreground = document.createElement("div"), O.bind(o.__background, "mousedown", c), O.bind(o.__background, "touchstart", d), O.addClass(o.__background, "slider"), O.addClass(o.__foreground, "slider-fg");
    function c(_) {
      document.activeElement.blur(), O.bind(window, "mousemove", h), O.bind(window, "mouseup", u), h(_);
    }
    function h(_) {
      _.preventDefault();
      var m = l.__background.getBoundingClientRect();
      return l.setValue(Eh(_.clientX, m.left, m.right, l.__min, l.__max)), false;
    }
    function u() {
      O.unbind(window, "mousemove", h), O.unbind(window, "mouseup", u), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
    }
    function d(_) {
      _.touches.length === 1 && (O.bind(window, "touchmove", p), O.bind(window, "touchend", g), p(_));
    }
    function p(_) {
      var m = _.touches[0].clientX, f = l.__background.getBoundingClientRect();
      l.setValue(Eh(m, f.left, f.right, l.__min, l.__max));
    }
    function g() {
      O.unbind(window, "touchmove", p), O.unbind(window, "touchend", g), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
    }
    return o.updateDisplay(), o.__background.appendChild(o.__foreground), o.domElement.appendChild(o.__background), o;
  }
  return En(e, [{ key: "updateDisplay", value: function() {
    var n = (this.getValue() - this.__min) / (this.__max - this.__min);
    return this.__foreground.style.width = n * 100 + "%", fi(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
})(Pu), Iu = (function(i3) {
  pi(e, i3);
  function e(t, n, s) {
    Mn(this, e);
    var r = mi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), a = r;
    return r.__button = document.createElement("div"), r.__button.innerHTML = s === void 0 ? "Fire" : s, O.bind(r.__button, "click", function(o) {
      return o.preventDefault(), a.fire(), false;
    }), O.addClass(r.__button, "button"), r.domElement.appendChild(r.__button), r;
  }
  return En(e, [{ key: "fire", value: function() {
    this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
  } }]), e;
})(Li), ol = (function(i3) {
  pi(e, i3);
  function e(t, n) {
    Mn(this, e);
    var s = mi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    s.__color = new wt(s.getValue()), s.__temp = new wt(0);
    var r = s;
    s.domElement = document.createElement("div"), O.makeSelectable(s.domElement, false), s.__selector = document.createElement("div"), s.__selector.className = "selector", s.__saturation_field = document.createElement("div"), s.__saturation_field.className = "saturation-field", s.__field_knob = document.createElement("div"), s.__field_knob.className = "field-knob", s.__field_knob_border = "2px solid ", s.__hue_knob = document.createElement("div"), s.__hue_knob.className = "hue-knob", s.__hue_field = document.createElement("div"), s.__hue_field.className = "hue-field", s.__input = document.createElement("input"), s.__input.type = "text", s.__input_textShadow = "0 1px 1px ", O.bind(s.__input, "keydown", function(_) {
      _.keyCode === 13 && u.call(this);
    }), O.bind(s.__input, "blur", u), O.bind(s.__selector, "mousedown", function() {
      O.addClass(this, "drag").bind(window, "mouseup", function() {
        O.removeClass(r.__selector, "drag");
      });
    }), O.bind(s.__selector, "touchstart", function() {
      O.addClass(this, "drag").bind(window, "touchend", function() {
        O.removeClass(r.__selector, "drag");
      });
    });
    var a = document.createElement("div");
    j.extend(s.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), j.extend(s.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: s.__field_knob_border + (s.__color.v < 0.5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), j.extend(s.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), j.extend(s.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), j.extend(a.style, { width: "100%", height: "100%", background: "none" }), bh(a, "top", "rgba(0,0,0,0)", "#000"), j.extend(s.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), SS(s.__hue_field), j.extend(s.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: s.__input_textShadow + "rgba(0,0,0,0.7)" }), O.bind(s.__saturation_field, "mousedown", o), O.bind(s.__saturation_field, "touchstart", o), O.bind(s.__field_knob, "mousedown", o), O.bind(s.__field_knob, "touchstart", o), O.bind(s.__hue_field, "mousedown", l), O.bind(s.__hue_field, "touchstart", l);
    function o(_) {
      p(_), O.bind(window, "mousemove", p), O.bind(window, "touchmove", p), O.bind(window, "mouseup", c), O.bind(window, "touchend", c);
    }
    function l(_) {
      g(_), O.bind(window, "mousemove", g), O.bind(window, "touchmove", g), O.bind(window, "mouseup", h), O.bind(window, "touchend", h);
    }
    function c() {
      O.unbind(window, "mousemove", p), O.unbind(window, "touchmove", p), O.unbind(window, "mouseup", c), O.unbind(window, "touchend", c), d();
    }
    function h() {
      O.unbind(window, "mousemove", g), O.unbind(window, "touchmove", g), O.unbind(window, "mouseup", h), O.unbind(window, "touchend", h), d();
    }
    function u() {
      var _ = rl(this.value);
      _ !== false ? (r.__color.__state = _, r.setValue(r.__color.toOriginal())) : this.value = r.__color.toString();
    }
    function d() {
      r.__onFinishChange && r.__onFinishChange.call(r, r.__color.toOriginal());
    }
    s.__saturation_field.appendChild(a), s.__selector.appendChild(s.__field_knob), s.__selector.appendChild(s.__saturation_field), s.__selector.appendChild(s.__hue_field), s.__hue_field.appendChild(s.__hue_knob), s.domElement.appendChild(s.__input), s.domElement.appendChild(s.__selector), s.updateDisplay();
    function p(_) {
      _.type.indexOf("touch") === -1 && _.preventDefault();
      var m = r.__saturation_field.getBoundingClientRect(), f = _.touches && _.touches[0] || _, T = f.clientX, E = f.clientY, y = (T - m.left) / (m.right - m.left), P = 1 - (E - m.top) / (m.bottom - m.top);
      return P > 1 ? P = 1 : P < 0 && (P = 0), y > 1 ? y = 1 : y < 0 && (y = 0), r.__color.v = P, r.__color.s = y, r.setValue(r.__color.toOriginal()), false;
    }
    function g(_) {
      _.type.indexOf("touch") === -1 && _.preventDefault();
      var m = r.__hue_field.getBoundingClientRect(), f = _.touches && _.touches[0] || _, T = f.clientY, E = 1 - (T - m.top) / (m.bottom - m.top);
      return E > 1 ? E = 1 : E < 0 && (E = 0), r.__color.h = E * 360, r.setValue(r.__color.toOriginal()), false;
    }
    return s;
  }
  return En(e, [{ key: "updateDisplay", value: function() {
    var n = rl(this.getValue());
    if (n !== false) {
      var s = false;
      j.each(wt.COMPONENTS, function(o) {
        if (!j.isUndefined(n[o]) && !j.isUndefined(this.__color.__state[o]) && n[o] !== this.__color.__state[o]) return s = true, {};
      }, this), s && j.extend(this.__color.__state, n);
    }
    j.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
    var r = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0, a = 255 - r;
    j.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + r + "," + r + "," + r + ")" }), this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px", this.__temp.s = 1, this.__temp.v = 1, bh(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), j.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + r + "," + r + "," + r + ")", textShadow: this.__input_textShadow + "rgba(" + a + "," + a + "," + a + ",.7)" });
  } }]), e;
})(Li), xS = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
function bh(i3, e, t, n) {
  i3.style.background = "", j.each(xS, function(s) {
    i3.style.cssText += "background: " + s + "linear-gradient(" + e + ", " + t + " 0%, " + n + " 100%); ";
  });
}
function SS(i3) {
  i3.style.background = "", i3.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", i3.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", i3.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", i3.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", i3.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
}
var yS = { load: function(e, t) {
  var n = t || document, s = n.createElement("link");
  s.type = "text/css", s.rel = "stylesheet", s.href = e, n.getElementsByTagName("head")[0].appendChild(s);
}, inject: function(e, t) {
  var n = t || document, s = document.createElement("style");
  s.type = "text/css", s.innerHTML = e;
  var r = n.getElementsByTagName("head")[0];
  try {
    r.appendChild(s);
  } catch {
  }
} }, MS = `<div id="dg-save" class="dg dialogue">

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

</div>`, ES = function(e, t) {
  var n = e[t];
  return j.isArray(arguments[2]) || j.isObject(arguments[2]) ? new gS(e, t, arguments[2]) : j.isNumber(n) ? j.isNumber(arguments[2]) && j.isNumber(arguments[3]) ? j.isNumber(arguments[4]) ? new al(e, t, arguments[2], arguments[3], arguments[4]) : new al(e, t, arguments[2], arguments[3]) : j.isNumber(arguments[4]) ? new ra(e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new ra(e, t, { min: arguments[2], max: arguments[3] }) : j.isString(n) ? new _S(e, t) : j.isFunction(n) ? new Iu(e, t, "") : j.isBoolean(n) ? new Cu(e, t) : null;
};
function bS(i3) {
  setTimeout(i3, 1e3 / 60);
}
var TS = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || bS, AS = (function() {
  function i3() {
    Mn(this, i3), this.backgroundElement = document.createElement("div"), j.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), O.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), j.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
    var e = this;
    O.bind(this.backgroundElement, "click", function() {
      e.hide();
    });
  }
  return En(i3, [{ key: "show", value: function() {
    var t = this;
    this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), j.defer(function() {
      t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)";
    });
  } }, { key: "hide", value: function() {
    var t = this, n = function s() {
      t.domElement.style.display = "none", t.backgroundElement.style.display = "none", O.unbind(t.domElement, "webkitTransitionEnd", s), O.unbind(t.domElement, "transitionend", s), O.unbind(t.domElement, "oTransitionEnd", s);
    };
    O.bind(this.domElement, "webkitTransitionEnd", n), O.bind(this.domElement, "transitionend", n), O.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)";
  } }, { key: "layout", value: function() {
    this.domElement.style.left = window.innerWidth / 2 - O.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - O.getHeight(this.domElement) / 2 + "px";
  } }]), i3;
})(), wS = uS(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
yS.inject(wS);
var Th = "dg", Ah = 72, wh = 20, ir = "Default", Ws = (function() {
  try {
    return !!window.localStorage;
  } catch {
    return false;
  }
})(), js = void 0, Rh = true, Ji = void 0, ho = false, Du = [], ht = function i2(e) {
  var t = this, n = e || {};
  this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), O.addClass(this.domElement, Th), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], n = j.defaults(n, { closeOnTop: false, autoPlace: true, width: i2.DEFAULT_WIDTH }), n = j.defaults(n, { resizable: n.autoPlace, hideable: n.autoPlace }), j.isUndefined(n.load) ? n.load = { preset: ir } : n.preset && (n.load.preset = n.preset), j.isUndefined(n.parent) && n.hideable && Du.push(this), n.resizable = j.isUndefined(n.parent) && n.resizable, n.autoPlace && j.isUndefined(n.scrollable) && (n.scrollable = true);
  var s = Ws && localStorage.getItem(Qi(this, "isLocal")) === "true", r = void 0, a = void 0;
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
    t.parent ? t.getRoot().preset = d : n.load.preset = d, IS(this), t.revert();
  } }, width: { get: function() {
    return n.width;
  }, set: function(d) {
    n.width = d, hl(t, d);
  } }, name: { get: function() {
    return n.name;
  }, set: function(d) {
    n.name = d, a && (a.innerHTML = n.name);
  } }, closed: { get: function() {
    return n.closed;
  }, set: function(d) {
    n.closed = d, n.closed ? O.addClass(t.__ul, i2.CLASS_CLOSED) : O.removeClass(t.__ul, i2.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = d ? i2.TEXT_OPEN : i2.TEXT_CLOSED);
  } }, load: { get: function() {
    return n.load;
  } }, useLocalStorage: { get: function() {
    return s;
  }, set: function(d) {
    Ws && (s = d, d ? O.bind(window, "unload", r) : O.unbind(window, "unload", r), localStorage.setItem(Qi(t, "isLocal"), d));
  } } }), j.isUndefined(n.parent)) {
    if (this.closed = n.closed || false, O.addClass(this.domElement, i2.CLASS_MAIN), O.makeSelectable(this.domElement, false), Ws && s) {
      t.useLocalStorage = true;
      var o = localStorage.getItem(Qi(this, "gui"));
      o && (n.load = JSON.parse(o));
    }
    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = i2.TEXT_CLOSED, O.addClass(this.__closeButton, i2.CLASS_CLOSE_BUTTON), n.closeOnTop ? (O.addClass(this.__closeButton, i2.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (O.addClass(this.__closeButton, i2.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), O.bind(this.__closeButton, "click", function() {
      t.closed = !t.closed;
    });
  } else {
    n.closed === void 0 && (n.closed = true);
    var l = document.createTextNode(n.name);
    O.addClass(l, "controller-name"), a = Nl(t, l);
    var c = function(d) {
      return d.preventDefault(), t.closed = !t.closed, false;
    };
    O.addClass(this.__ul, i2.CLASS_CLOSED), O.addClass(a, "title"), O.bind(a, "click", c), n.closed || (this.closed = false);
  }
  n.autoPlace && (j.isUndefined(n.parent) && (Rh && (Ji = document.createElement("div"), O.addClass(Ji, Th), O.addClass(Ji, i2.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(Ji), Rh = false), Ji.appendChild(this.domElement), O.addClass(this.domElement, i2.CLASS_AUTO_PLACE)), this.parent || hl(t, n.width)), this.__resizeHandler = function() {
    t.onResizeDebounced();
  }, O.bind(window, "resize", this.__resizeHandler), O.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), O.bind(this.__ul, "transitionend", this.__resizeHandler), O.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), n.resizable && PS(this), r = function() {
    Ws && localStorage.getItem(Qi(t, "isLocal")) === "true" && localStorage.setItem(Qi(t, "gui"), JSON.stringify(t.getSaveObject()));
  }, this.saveToLocalStorageIfPossible = r;
  function h() {
    var u = t.getRoot();
    u.width += 1, j.defer(function() {
      u.width -= 1;
    });
  }
  n.parent || h();
};
ht.toggleHide = function() {
  ho = !ho, j.each(Du, function(i3) {
    i3.domElement.style.display = ho ? "none" : "";
  });
};
ht.CLASS_AUTO_PLACE = "a";
ht.CLASS_AUTO_PLACE_CONTAINER = "ac";
ht.CLASS_MAIN = "main";
ht.CLASS_CONTROLLER_ROW = "cr";
ht.CLASS_TOO_TALL = "taller-than-window";
ht.CLASS_CLOSED = "closed";
ht.CLASS_CLOSE_BUTTON = "close-button";
ht.CLASS_CLOSE_TOP = "close-top";
ht.CLASS_CLOSE_BOTTOM = "close-bottom";
ht.CLASS_DRAG = "drag";
ht.DEFAULT_WIDTH = 245;
ht.TEXT_CLOSED = "Close Controls";
ht.TEXT_OPEN = "Open Controls";
ht._keydownHandler = function(i3) {
  document.activeElement.type !== "text" && (i3.which === Ah || i3.keyCode === Ah) && ht.toggleHide();
};
O.bind(window, "keydown", ht._keydownHandler, false);
j.extend(ht.prototype, { add: function(e, t) {
  return Ks(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) });
}, addColor: function(e, t) {
  return Ks(this, e, t, { color: true });
}, remove: function(e) {
  this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
  var t = this;
  j.defer(function() {
    t.onResize();
  });
}, destroy: function() {
  if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
  this.autoPlace && Ji.removeChild(this.domElement);
  var e = this;
  j.each(this.__folders, function(t) {
    e.removeFolder(t);
  }), O.unbind(window, "keydown", ht._keydownHandler, false), Ch(this);
}, addFolder: function(e) {
  if (this.__folders[e] !== void 0) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
  var t = { name: e, parent: this };
  t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
  var n = new ht(t);
  this.__folders[e] = n;
  var s = Nl(this, n.domElement);
  return O.addClass(s, "folder"), n;
}, removeFolder: function(e) {
  this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], Ch(e);
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
    j.each(e.__ul.childNodes, function(s) {
      e.autoPlace && s === e.__save_row || (n += O.getHeight(s));
    }), window.innerHeight - t - wh < n ? (O.addClass(e.domElement, ht.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - wh + "px") : (O.removeClass(e.domElement, ht.CLASS_TOO_TALL), e.__ul.style.height = "auto");
  }
  e.__resize_handle && j.defer(function() {
    e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
  }), e.__closeButton && (e.__closeButton.style.width = e.width + "px");
}, onResizeDebounced: j.debounce(function() {
  this.onResize();
}, 50), remember: function() {
  if (j.isUndefined(js) && (js = new AS(), js.domElement.innerHTML = MS), this.parent) throw new Error("You can only call remember on a top level GUI.");
  var e = this;
  j.each(Array.prototype.slice.call(arguments), function(t) {
    e.__rememberedObjects.length === 0 && CS(e), e.__rememberedObjects.indexOf(t) === -1 && e.__rememberedObjects.push(t);
  }), this.autoPlace && hl(this, this.width);
}, getRoot: function() {
  for (var e = this; e.parent; ) e = e.parent;
  return e;
}, getSaveObject: function() {
  var e = this.load;
  return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = Hr(this)), e.folders = {}, j.each(this.__folders, function(t, n) {
    e.folders[n] = t.getSaveObject();
  }), e;
}, save: function() {
  this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = Hr(this), ll(this, false), this.saveToLocalStorageIfPossible();
}, saveAs: function(e) {
  this.load.remembered || (this.load.remembered = {}, this.load.remembered[ir] = Hr(this, true)), this.load.remembered[e] = Hr(this), this.preset = e, cl(this, e, true), this.saveToLocalStorageIfPossible();
}, revert: function(e) {
  j.each(this.__controllers, function(t) {
    this.getRoot().load.remembered ? Lu(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
  }, this), j.each(this.__folders, function(t) {
    t.revert(t);
  }), e || ll(this.getRoot(), false);
}, listen: function(e) {
  var t = this.__listening.length === 0;
  this.__listening.push(e), t && Uu(this.__listening);
}, updateDisplay: function() {
  j.each(this.__controllers, function(e) {
    e.updateDisplay();
  }), j.each(this.__folders, function(e) {
    e.updateDisplay();
  });
} });
function Nl(i3, e, t) {
  var n = document.createElement("li");
  return e && n.appendChild(e), t ? i3.__ul.insertBefore(n, t) : i3.__ul.appendChild(n), i3.onResize(), n;
}
function Ch(i3) {
  O.unbind(window, "resize", i3.__resizeHandler), i3.saveToLocalStorageIfPossible && O.unbind(window, "unload", i3.saveToLocalStorageIfPossible);
}
function ll(i3, e) {
  var t = i3.__preset_select[i3.__preset_select.selectedIndex];
  e ? t.innerHTML = t.value + "*" : t.innerHTML = t.value;
}
function RS(i3, e, t) {
  if (t.__li = e, t.__gui = i3, j.extend(t, { options: function(a) {
    if (arguments.length > 1) {
      var o = t.__li.nextElementSibling;
      return t.remove(), Ks(i3, t.object, t.property, { before: o, factoryArgs: [j.toArray(arguments)] });
    }
    if (j.isArray(a) || j.isObject(a)) {
      var l = t.__li.nextElementSibling;
      return t.remove(), Ks(i3, t.object, t.property, { before: l, factoryArgs: [a] });
    }
  }, name: function(a) {
    return t.__li.firstElementChild.firstElementChild.innerHTML = a, t;
  }, listen: function() {
    return t.__gui.listen(t), t;
  }, remove: function() {
    return t.__gui.remove(t), t;
  } }), t instanceof al) {
    var n = new ra(t.object, t.property, { min: t.__min, max: t.__max, step: t.__step });
    j.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function(r) {
      var a = t[r], o = n[r];
      t[r] = n[r] = function() {
        var l = Array.prototype.slice.call(arguments);
        return o.apply(n, l), a.apply(t, l);
      };
    }), O.addClass(e, "has-slider"), t.domElement.insertBefore(n.domElement, t.domElement.firstElementChild);
  } else if (t instanceof ra) {
    var s = function(a) {
      if (j.isNumber(t.__min) && j.isNumber(t.__max)) {
        var o = t.__li.firstElementChild.firstElementChild.innerHTML, l = t.__gui.__listening.indexOf(t) > -1;
        t.remove();
        var c = Ks(i3, t.object, t.property, { before: t.__li.nextElementSibling, factoryArgs: [t.__min, t.__max, t.__step] });
        return c.name(o), l && c.listen(), c;
      }
      return a;
    };
    t.min = j.compose(s, t.min), t.max = j.compose(s, t.max);
  } else t instanceof Cu ? (O.bind(e, "click", function() {
    O.fakeEvent(t.__checkbox, "click");
  }), O.bind(t.__checkbox, "click", function(r) {
    r.stopPropagation();
  })) : t instanceof Iu ? (O.bind(e, "click", function() {
    O.fakeEvent(t.__button, "click");
  }), O.bind(e, "mouseover", function() {
    O.addClass(t.__button, "hover");
  }), O.bind(e, "mouseout", function() {
    O.removeClass(t.__button, "hover");
  })) : t instanceof ol && (O.addClass(e, "color"), t.updateDisplay = j.compose(function(r) {
    return e.style.borderLeftColor = t.__color.toString(), r;
  }, t.updateDisplay), t.updateDisplay());
  t.setValue = j.compose(function(r) {
    return i3.getRoot().__preset_select && t.isModified() && ll(i3.getRoot(), true), r;
  }, t.setValue);
}
function Lu(i3, e) {
  var t = i3.getRoot(), n = t.__rememberedObjects.indexOf(e.object);
  if (n !== -1) {
    var s = t.__rememberedObjectIndecesToControllers[n];
    if (s === void 0 && (s = {}, t.__rememberedObjectIndecesToControllers[n] = s), s[e.property] = e, t.load && t.load.remembered) {
      var r = t.load.remembered, a = void 0;
      if (r[i3.preset]) a = r[i3.preset];
      else if (r[ir]) a = r[ir];
      else return;
      if (a[n] && a[n][e.property] !== void 0) {
        var o = a[n][e.property];
        e.initialValue = o, e.setValue(o);
      }
    }
  }
}
function Ks(i3, e, t, n) {
  if (e[t] === void 0) throw new Error('Object "' + e + '" has no property "' + t + '"');
  var s = void 0;
  if (n.color) s = new ol(e, t);
  else {
    var r = [e, t].concat(n.factoryArgs);
    s = ES.apply(i3, r);
  }
  n.before instanceof Li && (n.before = n.before.__li), Lu(i3, s), O.addClass(s.domElement, "c");
  var a = document.createElement("span");
  O.addClass(a, "property-name"), a.innerHTML = s.property;
  var o = document.createElement("div");
  o.appendChild(a), o.appendChild(s.domElement);
  var l = Nl(i3, o, n.before);
  return O.addClass(l, ht.CLASS_CONTROLLER_ROW), s instanceof ol ? O.addClass(l, "color") : O.addClass(l, fS(s.getValue())), RS(i3, l, s), i3.__controllers.push(s), s;
}
function Qi(i3, e) {
  return document.location.href + "." + e;
}
function cl(i3, e, t) {
  var n = document.createElement("option");
  n.innerHTML = e, n.value = e, i3.__preset_select.appendChild(n), t && (i3.__preset_select.selectedIndex = i3.__preset_select.length - 1);
}
function Ph(i3, e) {
  e.style.display = i3.useLocalStorage ? "block" : "none";
}
function CS(i3) {
  var e = i3.__save_row = document.createElement("li");
  O.addClass(i3.domElement, "has-save"), i3.__ul.insertBefore(e, i3.__ul.firstChild), O.addClass(e, "save-row");
  var t = document.createElement("span");
  t.innerHTML = "&nbsp;", O.addClass(t, "button gears");
  var n = document.createElement("span");
  n.innerHTML = "Save", O.addClass(n, "button"), O.addClass(n, "save");
  var s = document.createElement("span");
  s.innerHTML = "New", O.addClass(s, "button"), O.addClass(s, "save-as");
  var r = document.createElement("span");
  r.innerHTML = "Revert", O.addClass(r, "button"), O.addClass(r, "revert");
  var a = i3.__preset_select = document.createElement("select");
  if (i3.load && i3.load.remembered ? j.each(i3.load.remembered, function(u, d) {
    cl(i3, d, d === i3.preset);
  }) : cl(i3, ir, false), O.bind(a, "change", function() {
    for (var u = 0; u < i3.__preset_select.length; u++) i3.__preset_select[u].innerHTML = i3.__preset_select[u].value;
    i3.preset = this.value;
  }), e.appendChild(a), e.appendChild(t), e.appendChild(n), e.appendChild(s), e.appendChild(r), Ws) {
    var o = document.getElementById("dg-local-explain"), l = document.getElementById("dg-local-storage"), c = document.getElementById("dg-save-locally");
    c.style.display = "block", localStorage.getItem(Qi(i3, "isLocal")) === "true" && l.setAttribute("checked", "checked"), Ph(i3, o), O.bind(l, "change", function() {
      i3.useLocalStorage = !i3.useLocalStorage, Ph(i3, o);
    });
  }
  var h = document.getElementById("dg-new-constructor");
  O.bind(h, "keydown", function(u) {
    u.metaKey && (u.which === 67 || u.keyCode === 67) && js.hide();
  }), O.bind(t, "click", function() {
    h.innerHTML = JSON.stringify(i3.getSaveObject(), void 0, 2), js.show(), h.focus(), h.select();
  }), O.bind(n, "click", function() {
    i3.save();
  }), O.bind(s, "click", function() {
    var u = prompt("Enter a new preset name.");
    u && i3.saveAs(u);
  }), O.bind(r, "click", function() {
    i3.revert();
  });
}
function PS(i3) {
  var e = void 0;
  i3.__resize_handle = document.createElement("div"), j.extend(i3.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" });
  function t(r) {
    return r.preventDefault(), i3.width += e - r.clientX, i3.onResize(), e = r.clientX, false;
  }
  function n() {
    O.removeClass(i3.__closeButton, ht.CLASS_DRAG), O.unbind(window, "mousemove", t), O.unbind(window, "mouseup", n);
  }
  function s(r) {
    return r.preventDefault(), e = r.clientX, O.addClass(i3.__closeButton, ht.CLASS_DRAG), O.bind(window, "mousemove", t), O.bind(window, "mouseup", n), false;
  }
  O.bind(i3.__resize_handle, "mousedown", s), O.bind(i3.__closeButton, "mousedown", s), i3.domElement.insertBefore(i3.__resize_handle, i3.domElement.firstElementChild);
}
function hl(i3, e) {
  i3.domElement.style.width = e + "px", i3.__save_row && i3.autoPlace && (i3.__save_row.style.width = e + "px"), i3.__closeButton && (i3.__closeButton.style.width = e + "px");
}
function Hr(i3, e) {
  var t = {};
  return j.each(i3.__rememberedObjects, function(n, s) {
    var r = {}, a = i3.__rememberedObjectIndecesToControllers[s];
    j.each(a, function(o, l) {
      r[l] = e ? o.initialValue : o.getValue();
    }), t[s] = r;
  }), t;
}
function IS(i3) {
  for (var e = 0; e < i3.__preset_select.length; e++) i3.__preset_select[e].value === i3.preset && (i3.__preset_select.selectedIndex = e);
}
function Uu(i3) {
  i3.length !== 0 && TS.call(window, function() {
    Uu(i3);
  }), j.each(i3, function(e) {
    e.updateDisplay();
  });
}
var DS = ht;
const LS = "" + new URL("bubble-CL26MHl-.glb", import.meta.url).href, bn = new ta();
bn.background = null;
const yt = new Ft(42, window.innerWidth / window.innerHeight, 0.1, 100);
yt.position.set(0.02, -11.98, 0.61);
const hn = new t0({ antialias: true, alpha: true, premultipliedAlpha: false });
hn.setPixelRatio(Math.min(window.devicePixelRatio, 2));
hn.setSize(window.innerWidth, window.innerHeight);
hn.setClearColor(0, 0);
hn.outputColorSpace = Ye;
hn.toneMapping = Oh;
hn.toneMappingExposure = 1.1;
hn.shadowMap.enabled = false;
document.body.appendChild(hn.domElement);
const Nu = new el(hn), US = Nu.fromScene(new Z0(), 0.08).texture;
bn.environment = US;
Nu.dispose();
const or = new i0(yt, hn.domElement);
or.enableDamping = true;
or.enableRotate = false;
or.enablePan = false;
or.enableZoom = false;
const Fu = new ep(16777215, 0.12);
bn.add(Fu);
const lr = new wl(16777215, 8, 16, 0.5, 0.7, 1.2);
lr.position.set(0.5, 2, 3.5);
lr.target.position.set(0, 0, 0);
bn.add(lr);
bn.add(lr.target);
const da = new wl(16777215, 0.4, 12, 1, 1, 2);
da.position.set(-1.5, -0.5, 2);
da.target.position.set(0, 0, 0);
bn.add(da);
bn.add(da.target);
const Fl = new ca(16777215, 3.5, 12, 1.5);
Fl.position.set(0, 0.5, -2.5);
bn.add(Fl);
const Ol = new ca(15658751, 2, 10, 1.5);
Ol.position.set(-2, 1, -1);
bn.add(Ol);
const Kn = new Qt({ color: 16777215, metalness: 0, roughness: 0.05, transmission: 1, thickness: 0.5, ior: 1.45, transparent: true, opacity: 1, envMapIntensity: 1, clearcoat: 1, clearcoatRoughness: 0.05, specularIntensity: 1, specularColor: new Te(16777215), attenuationColor: new Te(13951743), attenuationDistance: 1.5, emissive: new Te(16777215), emissiveIntensity: 0.3 }), Cs = new Qt({ color: 16777215, metalness: 0, roughness: 0.1, transmission: 0, thickness: 0.3, ior: 1.45, transparent: true, opacity: 1, depthWrite: false, envMapIntensity: 0.5, clearcoat: 0.5, clearcoatRoughness: 0.1, specularIntensity: 0.5, specularColor: new Te(16777215), attenuationColor: new Te(13951743), attenuationDistance: 2 });
Cs.onBeforeCompile = (i3) => {
  i3.vertexShader = i3.vertexShader.replace("void main() {", `varying float vViewYOffset;
void main() {`), i3.vertexShader = i3.vertexShader.replace("#include <begin_vertex>", `#include <begin_vertex>
     vec4 viewPos = modelViewMatrix * vec4(position, 1.0);
     vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
     vViewYOffset = viewPos.y - viewCenter.y;`), i3.fragmentShader = i3.fragmentShader.replace("void main() {", `varying float vViewYOffset;
void main() {`), i3.fragmentShader = i3.fragmentShader.replace("#include <alphatest_fragment>", `#include <alphatest_fragment>
     float fadeFactor = 0.08 * smoothstep(0.35, 1.0, vViewYOffset);
     diffuseColor.a *= fadeFactor;`);
};
const fa = new Qt({ color: 8952234, metalness: 0.1, roughness: 0.15, transmission: 0, transparent: true, opacity: 1, envMapIntensity: 0.8, side: St, depthWrite: false }), pa = new rx(hn, { frameBufferType: Ms }), Bl = new rS(bn, yt);
Bl.clearPass.overrideClearColor = new Te(0);
Bl.clearPass.overrideClearAlpha = 0;
pa.addPass(Bl);
const Ih = 3, Dh = 0.44, ui = new sS({ intensity: 8, radius: 0, luminanceThreshold: 0 });
pa.addPass(new hS(yt, ui));
function Ou() {
  yt.aspect = window.innerWidth / window.innerHeight, yt.updateProjectionMatrix(), hn.setSize(window.innerWidth, window.innerHeight), pa.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", Ou);
window.addEventListener("load", Ou);
const $s = new ci();
$s.position.set(0, 0, -10);
yt.add($s);
bn.add(yt);
const Bu = [{ x: -1.8, y: 2, label: "PixiJS", url: "https://github.com/pixijs/pixijs/pull/11761", lx: -8, ly: -4 }, { x: 1.8, y: 2, label: "Crawlee", url: "https://github.com/apify/crawlee/pull/3237", lx: 7, ly: -4 }, { x: -3.6, y: -0.4, label: "Hoppscotch", url: "https://github.com/hoppscotch/hoppscotch/pull/5231", lx: -9, ly: 3 }, { x: 0, y: -0.75, label: `Altair
GraphQL`, url: "https://github.com/altair-graphql", lx: 0, ly: 0 }, { x: 3.6, y: -0.4, label: `Godot
Engine`, url: "https://docs.godotengine.org/en/stable/contributing/workflow/bug_triage_guidelines.html", lx: 13, ly: 0 }], NS = new ip();
let Di = 4.06, Xn = 4.25, ma = 4.9;
const an = [], Lh = new _p(), Zs = new _e();
let ai = -1;
const Jt = new DS();
Jt.hide();
window.addEventListener("keydown", (i3) => {
  (i3.key === "m" || i3.key === "M") && (Jt.domElement.style.display === "none" ? Jt.show() : Jt.hide());
});
const us = { x: yt.position.x, y: yt.position.y, z: yt.position.z }, ga = Jt.addFolder("Camera");
ga.add(us, "x", -10, 10, 0.01).listen().onChange((i3) => yt.position.x = i3);
ga.add(us, "y", -10, 10, 0.01).listen().onChange((i3) => yt.position.y = i3);
ga.add(us, "z", 0.5, 20, 0.01).listen().onChange((i3) => yt.position.z = i3);
ga.open();
const $n = Jt.addFolder("Glass");
$n.add(Kn, "roughness", 0, 1, 0.01);
$n.add(Kn, "transmission", 0, 1, 0.01);
$n.add(Kn, "thickness", 0, 3, 0.01);
$n.add(Kn, "ior", 1, 2.5, 0.01);
$n.add(Kn, "envMapIntensity", 0, 3, 0.01);
$n.add(Kn, "clearcoatRoughness", 0, 1, 0.01);
$n.add(Kn, "specularIntensity", 0, 2, 0.01);
$n.add(Kn, "attenuationDistance", 0, 5, 0.01);
$n.open();
const kl = Jt.addFolder("Edge Rim");
kl.add(fa, "opacity", 0, 1, 0.01);
kl.add(fa, "roughness", 0, 1, 0.01);
kl.add(fa, "envMapIntensity", 0, 2, 0.01);
const _a = Jt.addFolder("Reflection");
_a.add(Cs, "opacity", 0, 1, 0.01);
_a.add(Cs, "transmission", 0, 1, 0.01);
_a.add(Cs, "roughness", 0, 1, 0.01);
_a.add(Cs, "envMapIntensity", 0, 2, 0.01);
const va = Jt.addFolder("Bloom");
va.add(ui, "intensity", 0, 3, 0.01);
va.add(ui.mipmapBlurPass, "radius", 0, 2, 0.01);
va.add(ui.luminanceMaterial, "threshold", 0, 1, 0.01);
va.open();
const cr = Jt.addFolder("Animation"), Vn = { idleSpinSpeed: -0.1, introLerpSpeed: 4, bloomIntroSpeed: 3, emissiveIntroSpeed: 3 };
cr.add(Vn, "idleSpinSpeed", -1, 0, 0.01).name("Idle Spin");
cr.add(Vn, "introLerpSpeed", 0.5, 10, 0.1).name("Intro Scale Speed");
cr.add(Vn, "bloomIntroSpeed", 0.5, 10, 0.1).name("Bloom Intro Speed");
cr.add(Vn, "emissiveIntroSpeed", 0.5, 10, 0.1).name("Emissive Intro Speed");
cr.open();
const xa = { restTime: Di, hoverTime: Xn, exitTime: ma, scrub: Di }, Sa = Jt.addFolder("GLB Animation");
Sa.add(xa, "restTime", 0, 8.46, 0.01).name("Rest Time").onChange((i3) => {
  Di = i3;
});
Sa.add(xa, "hoverTime", 0, 8.46, 0.01).name("Hover Time").onChange((i3) => {
  Xn = i3;
});
Sa.add(xa, "exitTime", 0, 8.46, 0.01).name("Exit Time").onChange((i3) => {
  ma = i3;
});
Sa.add(xa, "scrub", 0, 8.46, 0.01).name("Scrub").onChange((i3) => {
  for (const e of an) e.action.time = i3, e.action.paused = true, e.mixer.update(0);
});
const ya = Jt.addFolder("Lighting");
ya.add(lr, "intensity", 0, 20, 0.1);
ya.add(Fl, "intensity", 0, 10, 0.1);
ya.add(Ol, "intensity", 0, 10, 0.1);
ya.add(Fu, "intensity", 0, 1, 0.01);
const FS = Jt.addFolder("Label Offsets");
Bu.forEach((i3) => {
  const e = FS.addFolder(i3.label.replace(`
`, " "));
  e.add(i3, "lx", -50, 50, 1).name("x offset (px)"), e.add(i3, "ly", -50, 50, 1).name("y offset (px)");
});
const OS = new g0();
OS.load(LS, (i3) => {
  const e = i3.animations[0] || null;
  Bu.forEach((t) => {
    const n = i3.scene.clone(true), s = n.children[0] || null;
    s && (s.position.set(0, 0, 0), s.quaternion.identity()), n.position.set(t.x, t.y, 0);
    const r = 0.01;
    n.scale.setScalar(r);
    let a = null, o = null, l = null;
    const c = s;
    n.traverse((u) => {
      if (u.isMesh) {
        const d = u;
        d.material = Kn.clone(), a = d;
        const p = new rt(d.geometry.clone(), fa);
        d.morphTargetInfluences && (p.morphTargetInfluences = [...d.morphTargetInfluences], p.morphTargetDictionary = d.morphTargetDictionary), p.scale.setScalar(1.005 * r), p.position.copy(n.position), $s.add(p), o = p;
        const g = new rt(d.geometry.clone(), Cs);
        d.morphTargetInfluences && (g.morphTargetInfluences = [...d.morphTargetInfluences], g.morphTargetDictionary = d.morphTargetDictionary), g.position.set(t.x, t.y - 2, 0), g.scale.set(r, -r, r), g.renderOrder = -1, $s.add(g), l = g;
      }
    }), $s.add(n);
    const h = document.createElement("div");
    if (h.innerHTML = t.label.replace(`
`, "<br>"), h.style.cssText = "position:fixed;pointer-events:none;font:700 16px 'Ubuntu',sans-serif;color:#55575b;text-align:center;white-space:nowrap;transform:translate(-50%,-50%);opacity:0;transition:opacity 0.3s ease;", document.body.appendChild(h), e) {
      const u = new gp(n), d = u.clipAction(e);
      d.play(), d.clampWhenFinished = true, d.setLoop(Kh, 1), d.time = 6.8, d.paused = false, d.timeScale = 1, u.update(0), an.push({ model: n, meshNode: c, mixer: u, action: d, mesh: a, edgeClone: o, reflectionClone: l, state: "idle", targetQuat: new Pt(), currentQuat: new Pt(), idleAngle: 0, introScale: r, introDelay: 0, introPlaying: true, labelDiv: h, label: t.label, url: t.url, bp: t });
    }
  }), console.log(`Loaded 5 bubbles \u2014 rest:${Di} hover:${Xn} exit:${ma}`);
}, void 0, (i3) => console.error("Error loading bubble model:", i3));
const ys = document.createElement("div");
ys.textContent = "Hover For More Information";
ys.style.cssText = "position:fixed;bottom:5%;left:50%;transform:translateX(-50%);background:#fff;color:#333;font:700 16px 'Ubuntu',sans-serif;padding:12px 28px;border-radius:0;border-top:1px solid #ccc;border-bottom:10px solid #ccc;border-left:5px solid #ccc;border-right:5px solid #ccc;pointer-events:none;white-space:nowrap;opacity:0;transition:opacity 2.5s ease;";
document.body.appendChild(ys);
setTimeout(() => {
  ys.style.opacity = "1";
}, 1e3);
const Ma = document.createElement("div");
Ma.innerHTML = "Open<br>Source<br>Contributions";
Ma.style.cssText = "position:fixed;left:4%;top:35%;transform:translateY(-50%);background:#fff;color:#333;font:700 19px 'Ubuntu',sans-serif;width:150px;height:150px;display:flex;align-items:center;justify-content:center;text-align:left;border-radius:0;border-top:1px solid #ccc;border-bottom:5px solid #ccc;border-left:10px solid #ccc;border-right:1px solid #ccc;pointer-events:none;opacity:0;transition:opacity 2.5s ease;";
document.body.appendChild(Ma);
setTimeout(() => {
  Ma.style.opacity = "1";
}, 500);
const Vr = new C(), rs = new Pt(), BS = new Pt(), Uh = new C(0, 0, 1);
function ku(i3) {
  i3.model.updateWorldMatrix(true, false), i3.model.getWorldPosition(Vr), Vr.project(yt);
  const e = Math.atan2(Zs.y - Vr.y, Zs.x - Vr.x), t = Math.PI / 2, n = i3.targetQuat.setFromAxisAngle(new C(0, 0, 1), e + t);
  i3.currentQuat.copy(n), i3.meshNode && i3.meshNode.quaternion.copy(n), i3.edgeClone && i3.edgeClone.quaternion.copy(n), i3.reflectionClone && (rs.setFromAxisAngle(new C(0, 0, 1), -e - t), i3.reflectionClone.quaternion.copy(rs));
}
let Zt = null;
function kS(i3) {
  switch (ku(i3), i3.state) {
    case "idle":
      i3.state = "hover-in", i3.action.paused = false, i3.action.timeScale = 1, i3.action.time = Di;
      break;
    case "hover-out":
      i3.action.time > Xn ? (i3.state = "returning", i3.action.paused = false, i3.action.timeScale = -1) : i3.action.time < Xn ? (i3.state = "hover-in", i3.action.paused = false, i3.action.timeScale = 1) : (i3.state = "hover-hold", i3.action.paused = true);
      break;
  }
}
function zS(i3) {
  switch (i3.state) {
    case "hover-hold":
    case "hover-in":
      i3.state = "hover-out", i3.action.paused = false, i3.action.timeScale = 1;
      break;
    case "returning":
      i3.state = "hover-out", i3.action.paused = false, i3.action.timeScale = 1;
      break;
  }
}
window.addEventListener("mousemove", (i3) => {
  Zs.x = i3.clientX / window.innerWidth * 2 - 1, Zs.y = -(i3.clientY / window.innerHeight) * 2 + 1, Lh.setFromCamera(Zs, yt);
  const e = an.map((s) => s.mesh).filter(Boolean), t = Lh.intersectObjects(e, false), n = t.length > 0 ? an.findIndex((s) => s.mesh === t[0].object) : -1;
  if (n !== ai) {
    if (ai >= 0 && ai < an.length) {
      const s = an[ai];
      zS(s), Zt = null, window.parent.postMessage({ type: "bubble-leave" }, "*"), ys.textContent = "Hover For More Information";
    }
    if (n >= 0) {
      const s = an[n];
      kS(s), Zt = s, window.parent.postMessage({ type: "bubble-hover", label: s.label.replace(`
`, " "), url: s.url, index: n }, "*"), ys.textContent = "Click Bubble To View Merged PR";
    }
    ai = n, document.body.style.cursor = n >= 0 ? "pointer" : "default";
  } else n >= 0 && ku(an[n]);
});
window.addEventListener("click", () => {
  ai >= 0 && ai < an.length && window.open(an[ai].url, "_blank");
});
function zu() {
  requestAnimationFrame(zu);
  const i3 = NS.getDelta(), e = ui.luminanceMaterial.threshold;
  Math.abs(e - Dh) > 1e-3 && (ui.luminanceMaterial.threshold += (Dh - e) * Math.min(1, Vn.bloomIntroSpeed * i3));
  const t = ui.intensity;
  Math.abs(t - Ih) > 1e-3 && (ui.intensity += (Ih - t) * Math.min(1, Vn.bloomIntroSpeed * i3));
  for (const n of an) if (n.mesh) {
    const s = n.mesh.material;
    s.emissiveIntensity > 1e-3 && (s.emissiveIntensity += (0 - s.emissiveIntensity) * Math.min(1, Vn.emissiveIntroSpeed * i3));
  }
  for (const n of an) {
    switch (n.model.position.set(n.bp.x, n.bp.y, 0), n.edgeClone && n.edgeClone.position.set(n.bp.x, n.bp.y, 0), n.reflectionClone && n.reflectionClone.position.set(n.bp.x, n.bp.y - 2, 0), n.state) {
      case "hover-in":
        n.mixer.update(i3), n.action.time >= Xn && (n.action.time = Xn, n.action.paused = true, n.mixer.update(0), n.state = "hover-hold");
        break;
      case "hover-out":
        n.mixer.update(i3), n.action.time >= ma && (n.action.time = Di, n.action.paused = true, n.mixer.update(0), n.idleAngle = 0, n.state = "idle");
        break;
      case "returning":
        n.mixer.update(i3), n.action.time <= Xn && (n.action.time = Xn, n.action.paused = true, n.action.timeScale = 1, n.mixer.update(0), n.state = "hover-hold");
        break;
      case "idle": {
        n.idleAngle += Vn.idleSpinSpeed * i3;
        const s = BS.setFromAxisAngle(Uh, n.idleAngle);
        n.meshNode && n.meshNode.quaternion.copy(s), n.edgeClone && n.edgeClone.quaternion.copy(s), n.reflectionClone && (rs.setFromAxisAngle(Uh, -n.idleAngle), n.reflectionClone.quaternion.copy(rs));
        break;
      }
    }
    if (n.introPlaying && (n.mixer.update(i3), n.action.time >= 8.46 && (n.action.time = Di, n.action.paused = true, n.mixer.update(0), n.introPlaying = false)), n.introScale < 0.999) {
      const s = Vn.introLerpSpeed - n.introDelay * 2;
      n.introScale += (1 - n.introScale) * Math.min(1, s * i3);
      const r = n.introScale;
      n.model.scale.setScalar(r), n.edgeClone && n.edgeClone.scale.setScalar(1.005 * r), n.reflectionClone && n.reflectionClone.scale.set(r, -r, r);
    }
    if (n.labelDiv) {
      const s = new C();
      n.model.updateWorldMatrix(true, false), n.model.getWorldPosition(s), s.project(yt);
      const r = (s.x * 0.5 + 0.5) * window.innerWidth + n.bp.lx, a = (-s.y * 0.5 + 0.5) * window.innerHeight + n.bp.ly;
      n.labelDiv.style.left = `${r}px`, n.labelDiv.style.top = `${a}px`, n.labelDiv.style.opacity = n.introScale > 0.5 ? "1" : "0";
    }
    if (n.mesh && n.mesh.morphTargetInfluences) for (let s = 0; s < n.mesh.morphTargetInfluences.length; s++) n.edgeClone && (n.edgeClone.morphTargetInfluences[s] = n.mesh.morphTargetInfluences[s]), n.reflectionClone && (n.reflectionClone.morphTargetInfluences[s] = n.mesh.morphTargetInfluences[s]);
  }
  if (Zt && Zt.meshNode && (Zt.meshNode.quaternion.copy(Zt.currentQuat), Zt.edgeClone && Zt.edgeClone.quaternion.copy(Zt.currentQuat), Zt.reflectionClone)) {
    const n = 2 * Math.acos(Math.min(1, Math.abs(Zt.currentQuat.w))), r = (Zt.currentQuat.z >= 0 ? 1 : -1) * n - Math.PI / 2;
    rs.setFromAxisAngle(new C(0, 0, 1), -r - Math.PI / 2), Zt.reflectionClone.quaternion.copy(rs);
  }
  us.x = yt.position.x, us.y = yt.position.y, us.z = yt.position.z, or.update(), pa.render();
}
zu();
