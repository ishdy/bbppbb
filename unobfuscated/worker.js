var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require =  ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/tweetnacl/nacl-fast.js
var require_nacl_fast = __commonJS({
  "node_modules/tweetnacl/nacl-fast.js"(exports, module) {
    (function(nacl) {
      "use strict";
      var gf = function(init) {
        var i, r = new Float64Array(16);
        if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
        return r;
      };
      var randombytes = function() {
        throw new Error("no PRNG");
      };
      var _0 = new Uint8Array(16);
      var _9 = new Uint8Array(32);
      _9[0] = 9;
      var gf0 = gf(), gf1 = gf([1]), _121665 = gf([56129, 1]), D = gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), D2 = gf([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), X = gf([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), Y = gf([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), I = gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
      function ts64(x, i, h, l) {
        x[i] = h >> 24 & 255;
        x[i + 1] = h >> 16 & 255;
        x[i + 2] = h >> 8 & 255;
        x[i + 3] = h & 255;
        x[i + 4] = l >> 24 & 255;
        x[i + 5] = l >> 16 & 255;
        x[i + 6] = l >> 8 & 255;
        x[i + 7] = l & 255;
      }
      function vn(x, xi, y, yi, n) {
        var i, d = 0;
        for (i = 0; i < n; i++) d |= x[xi + i] ^ y[yi + i];
        return (1 & d - 1 >>> 8) - 1;
      }
      function crypto_verify_16(x, xi, y, yi) {
        return vn(x, xi, y, yi, 16);
      }
      function crypto_verify_32(x, xi, y, yi) {
        return vn(x, xi, y, yi, 32);
      }
      function core_salsa20(o, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for (var i = 0; i < 20; i += 2) {
          u = x0 + x12 | 0;
          x4 ^= u << 7 | u >>> 32 - 7;
          u = x4 + x0 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x4 | 0;
          x12 ^= u << 13 | u >>> 32 - 13;
          u = x12 + x8 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x1 | 0;
          x9 ^= u << 7 | u >>> 32 - 7;
          u = x9 + x5 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x9 | 0;
          x1 ^= u << 13 | u >>> 32 - 13;
          u = x1 + x13 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x6 | 0;
          x14 ^= u << 7 | u >>> 32 - 7;
          u = x14 + x10 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x14 | 0;
          x6 ^= u << 13 | u >>> 32 - 13;
          u = x6 + x2 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x11 | 0;
          x3 ^= u << 7 | u >>> 32 - 7;
          u = x3 + x15 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x3 | 0;
          x11 ^= u << 13 | u >>> 32 - 13;
          u = x11 + x7 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
          u = x0 + x3 | 0;
          x1 ^= u << 7 | u >>> 32 - 7;
          u = x1 + x0 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x1 | 0;
          x3 ^= u << 13 | u >>> 32 - 13;
          u = x3 + x2 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x4 | 0;
          x6 ^= u << 7 | u >>> 32 - 7;
          u = x6 + x5 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x6 | 0;
          x4 ^= u << 13 | u >>> 32 - 13;
          u = x4 + x7 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x9 | 0;
          x11 ^= u << 7 | u >>> 32 - 7;
          u = x11 + x10 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x11 | 0;
          x9 ^= u << 13 | u >>> 32 - 13;
          u = x9 + x8 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x14 | 0;
          x12 ^= u << 7 | u >>> 32 - 7;
          u = x12 + x15 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x12 | 0;
          x14 ^= u << 13 | u >>> 32 - 13;
          u = x14 + x13 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
        }
        x0 = x0 + j0 | 0;
        x1 = x1 + j1 | 0;
        x2 = x2 + j2 | 0;
        x3 = x3 + j3 | 0;
        x4 = x4 + j4 | 0;
        x5 = x5 + j5 | 0;
        x6 = x6 + j6 | 0;
        x7 = x7 + j7 | 0;
        x8 = x8 + j8 | 0;
        x9 = x9 + j9 | 0;
        x10 = x10 + j10 | 0;
        x11 = x11 + j11 | 0;
        x12 = x12 + j12 | 0;
        x13 = x13 + j13 | 0;
        x14 = x14 + j14 | 0;
        x15 = x15 + j15 | 0;
        o[0] = x0 >>> 0 & 255;
        o[1] = x0 >>> 8 & 255;
        o[2] = x0 >>> 16 & 255;
        o[3] = x0 >>> 24 & 255;
        o[4] = x1 >>> 0 & 255;
        o[5] = x1 >>> 8 & 255;
        o[6] = x1 >>> 16 & 255;
        o[7] = x1 >>> 24 & 255;
        o[8] = x2 >>> 0 & 255;
        o[9] = x2 >>> 8 & 255;
        o[10] = x2 >>> 16 & 255;
        o[11] = x2 >>> 24 & 255;
        o[12] = x3 >>> 0 & 255;
        o[13] = x3 >>> 8 & 255;
        o[14] = x3 >>> 16 & 255;
        o[15] = x3 >>> 24 & 255;
        o[16] = x4 >>> 0 & 255;
        o[17] = x4 >>> 8 & 255;
        o[18] = x4 >>> 16 & 255;
        o[19] = x4 >>> 24 & 255;
        o[20] = x5 >>> 0 & 255;
        o[21] = x5 >>> 8 & 255;
        o[22] = x5 >>> 16 & 255;
        o[23] = x5 >>> 24 & 255;
        o[24] = x6 >>> 0 & 255;
        o[25] = x6 >>> 8 & 255;
        o[26] = x6 >>> 16 & 255;
        o[27] = x6 >>> 24 & 255;
        o[28] = x7 >>> 0 & 255;
        o[29] = x7 >>> 8 & 255;
        o[30] = x7 >>> 16 & 255;
        o[31] = x7 >>> 24 & 255;
        o[32] = x8 >>> 0 & 255;
        o[33] = x8 >>> 8 & 255;
        o[34] = x8 >>> 16 & 255;
        o[35] = x8 >>> 24 & 255;
        o[36] = x9 >>> 0 & 255;
        o[37] = x9 >>> 8 & 255;
        o[38] = x9 >>> 16 & 255;
        o[39] = x9 >>> 24 & 255;
        o[40] = x10 >>> 0 & 255;
        o[41] = x10 >>> 8 & 255;
        o[42] = x10 >>> 16 & 255;
        o[43] = x10 >>> 24 & 255;
        o[44] = x11 >>> 0 & 255;
        o[45] = x11 >>> 8 & 255;
        o[46] = x11 >>> 16 & 255;
        o[47] = x11 >>> 24 & 255;
        o[48] = x12 >>> 0 & 255;
        o[49] = x12 >>> 8 & 255;
        o[50] = x12 >>> 16 & 255;
        o[51] = x12 >>> 24 & 255;
        o[52] = x13 >>> 0 & 255;
        o[53] = x13 >>> 8 & 255;
        o[54] = x13 >>> 16 & 255;
        o[55] = x13 >>> 24 & 255;
        o[56] = x14 >>> 0 & 255;
        o[57] = x14 >>> 8 & 255;
        o[58] = x14 >>> 16 & 255;
        o[59] = x14 >>> 24 & 255;
        o[60] = x15 >>> 0 & 255;
        o[61] = x15 >>> 8 & 255;
        o[62] = x15 >>> 16 & 255;
        o[63] = x15 >>> 24 & 255;
      }
      function core_hsalsa20(o, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for (var i = 0; i < 20; i += 2) {
          u = x0 + x12 | 0;
          x4 ^= u << 7 | u >>> 32 - 7;
          u = x4 + x0 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x4 | 0;
          x12 ^= u << 13 | u >>> 32 - 13;
          u = x12 + x8 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x1 | 0;
          x9 ^= u << 7 | u >>> 32 - 7;
          u = x9 + x5 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x9 | 0;
          x1 ^= u << 13 | u >>> 32 - 13;
          u = x1 + x13 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x6 | 0;
          x14 ^= u << 7 | u >>> 32 - 7;
          u = x14 + x10 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x14 | 0;
          x6 ^= u << 13 | u >>> 32 - 13;
          u = x6 + x2 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x11 | 0;
          x3 ^= u << 7 | u >>> 32 - 7;
          u = x3 + x15 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x3 | 0;
          x11 ^= u << 13 | u >>> 32 - 13;
          u = x11 + x7 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
          u = x0 + x3 | 0;
          x1 ^= u << 7 | u >>> 32 - 7;
          u = x1 + x0 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x1 | 0;
          x3 ^= u << 13 | u >>> 32 - 13;
          u = x3 + x2 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x4 | 0;
          x6 ^= u << 7 | u >>> 32 - 7;
          u = x6 + x5 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x6 | 0;
          x4 ^= u << 13 | u >>> 32 - 13;
          u = x4 + x7 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x9 | 0;
          x11 ^= u << 7 | u >>> 32 - 7;
          u = x11 + x10 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x11 | 0;
          x9 ^= u << 13 | u >>> 32 - 13;
          u = x9 + x8 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x14 | 0;
          x12 ^= u << 7 | u >>> 32 - 7;
          u = x12 + x15 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x12 | 0;
          x14 ^= u << 13 | u >>> 32 - 13;
          u = x14 + x13 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
        }
        o[0] = x0 >>> 0 & 255;
        o[1] = x0 >>> 8 & 255;
        o[2] = x0 >>> 16 & 255;
        o[3] = x0 >>> 24 & 255;
        o[4] = x5 >>> 0 & 255;
        o[5] = x5 >>> 8 & 255;
        o[6] = x5 >>> 16 & 255;
        o[7] = x5 >>> 24 & 255;
        o[8] = x10 >>> 0 & 255;
        o[9] = x10 >>> 8 & 255;
        o[10] = x10 >>> 16 & 255;
        o[11] = x10 >>> 24 & 255;
        o[12] = x15 >>> 0 & 255;
        o[13] = x15 >>> 8 & 255;
        o[14] = x15 >>> 16 & 255;
        o[15] = x15 >>> 24 & 255;
        o[16] = x6 >>> 0 & 255;
        o[17] = x6 >>> 8 & 255;
        o[18] = x6 >>> 16 & 255;
        o[19] = x6 >>> 24 & 255;
        o[20] = x7 >>> 0 & 255;
        o[21] = x7 >>> 8 & 255;
        o[22] = x7 >>> 16 & 255;
        o[23] = x7 >>> 24 & 255;
        o[24] = x8 >>> 0 & 255;
        o[25] = x8 >>> 8 & 255;
        o[26] = x8 >>> 16 & 255;
        o[27] = x8 >>> 24 & 255;
        o[28] = x9 >>> 0 & 255;
        o[29] = x9 >>> 8 & 255;
        o[30] = x9 >>> 16 & 255;
        o[31] = x9 >>> 24 & 255;
      }
      function crypto_core_salsa20(out, inp, k, c) {
        core_salsa20(out, inp, k, c);
      }
      function crypto_core_hsalsa20(out, inp, k, c) {
        core_hsalsa20(out, inp, k, c);
      }
      var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
      function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for (i = 0; i < 16; i++) z[i] = 0;
        for (i = 0; i < 8; i++) z[i] = n[i];
        while (b >= 64) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < 64; i++) c[cpos + i] = m[mpos + i] ^ x[i];
          u = 1;
          for (i = 8; i < 16; i++) {
            u = u + (z[i] & 255) | 0;
            z[i] = u & 255;
            u >>>= 8;
          }
          b -= 64;
          cpos += 64;
          mpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < b; i++) c[cpos + i] = m[mpos + i] ^ x[i];
        }
        return 0;
      }
      function crypto_stream_salsa20(c, cpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for (i = 0; i < 16; i++) z[i] = 0;
        for (i = 0; i < 8; i++) z[i] = n[i];
        while (b >= 64) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < 64; i++) c[cpos + i] = x[i];
          u = 1;
          for (i = 8; i < 16; i++) {
            u = u + (z[i] & 255) | 0;
            z[i] = u & 255;
            u >>>= 8;
          }
          b -= 64;
          cpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < b; i++) c[cpos + i] = x[i];
        }
        return 0;
      }
      function crypto_stream(c, cpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i = 0; i < 8; i++) sn[i] = n[i + 16];
        return crypto_stream_salsa20(c, cpos, d, sn, s);
      }
      function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i = 0; i < 8; i++) sn[i] = n[i + 16];
        return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
      }
      var poly1305 = function(key) {
        this.buffer = new Uint8Array(16);
        this.r = new Uint16Array(10);
        this.h = new Uint16Array(10);
        this.pad = new Uint16Array(8);
        this.leftover = 0;
        this.fin = 0;
        var t0, t1, t2, t3, t4, t5, t6, t7;
        t0 = key[0] & 255 | (key[1] & 255) << 8;
        this.r[0] = t0 & 8191;
        t1 = key[2] & 255 | (key[3] & 255) << 8;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
        t2 = key[4] & 255 | (key[5] & 255) << 8;
        this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
        t3 = key[6] & 255 | (key[7] & 255) << 8;
        this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
        t4 = key[8] & 255 | (key[9] & 255) << 8;
        this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
        this.r[5] = t4 >>> 1 & 8190;
        t5 = key[10] & 255 | (key[11] & 255) << 8;
        this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
        t6 = key[12] & 255 | (key[13] & 255) << 8;
        this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
        t7 = key[14] & 255 | (key[15] & 255) << 8;
        this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
        this.r[9] = t7 >>> 5 & 127;
        this.pad[0] = key[16] & 255 | (key[17] & 255) << 8;
        this.pad[1] = key[18] & 255 | (key[19] & 255) << 8;
        this.pad[2] = key[20] & 255 | (key[21] & 255) << 8;
        this.pad[3] = key[22] & 255 | (key[23] & 255) << 8;
        this.pad[4] = key[24] & 255 | (key[25] & 255) << 8;
        this.pad[5] = key[26] & 255 | (key[27] & 255) << 8;
        this.pad[6] = key[28] & 255 | (key[29] & 255) << 8;
        this.pad[7] = key[30] & 255 | (key[31] & 255) << 8;
      };
      poly1305.prototype.blocks = function(m, mpos, bytes) {
        var hibit = this.fin ? 0 : 1 << 11;
        var t0, t1, t2, t3, t4, t5, t6, t7, c;
        var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
        var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
        var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
        while (bytes >= 16) {
          t0 = m[mpos + 0] & 255 | (m[mpos + 1] & 255) << 8;
          h0 += t0 & 8191;
          t1 = m[mpos + 2] & 255 | (m[mpos + 3] & 255) << 8;
          h1 += (t0 >>> 13 | t1 << 3) & 8191;
          t2 = m[mpos + 4] & 255 | (m[mpos + 5] & 255) << 8;
          h2 += (t1 >>> 10 | t2 << 6) & 8191;
          t3 = m[mpos + 6] & 255 | (m[mpos + 7] & 255) << 8;
          h3 += (t2 >>> 7 | t3 << 9) & 8191;
          t4 = m[mpos + 8] & 255 | (m[mpos + 9] & 255) << 8;
          h4 += (t3 >>> 4 | t4 << 12) & 8191;
          h5 += t4 >>> 1 & 8191;
          t5 = m[mpos + 10] & 255 | (m[mpos + 11] & 255) << 8;
          h6 += (t4 >>> 14 | t5 << 2) & 8191;
          t6 = m[mpos + 12] & 255 | (m[mpos + 13] & 255) << 8;
          h7 += (t5 >>> 11 | t6 << 5) & 8191;
          t7 = m[mpos + 14] & 255 | (m[mpos + 15] & 255) << 8;
          h8 += (t6 >>> 8 | t7 << 8) & 8191;
          h9 += t7 >>> 5 | hibit;
          c = 0;
          d0 = c;
          d0 += h0 * r0;
          d0 += h1 * (5 * r9);
          d0 += h2 * (5 * r8);
          d0 += h3 * (5 * r7);
          d0 += h4 * (5 * r6);
          c = d0 >>> 13;
          d0 &= 8191;
          d0 += h5 * (5 * r5);
          d0 += h6 * (5 * r4);
          d0 += h7 * (5 * r3);
          d0 += h8 * (5 * r2);
          d0 += h9 * (5 * r1);
          c += d0 >>> 13;
          d0 &= 8191;
          d1 = c;
          d1 += h0 * r1;
          d1 += h1 * r0;
          d1 += h2 * (5 * r9);
          d1 += h3 * (5 * r8);
          d1 += h4 * (5 * r7);
          c = d1 >>> 13;
          d1 &= 8191;
          d1 += h5 * (5 * r6);
          d1 += h6 * (5 * r5);
          d1 += h7 * (5 * r4);
          d1 += h8 * (5 * r3);
          d1 += h9 * (5 * r2);
          c += d1 >>> 13;
          d1 &= 8191;
          d2 = c;
          d2 += h0 * r2;
          d2 += h1 * r1;
          d2 += h2 * r0;
          d2 += h3 * (5 * r9);
          d2 += h4 * (5 * r8);
          c = d2 >>> 13;
          d2 &= 8191;
          d2 += h5 * (5 * r7);
          d2 += h6 * (5 * r6);
          d2 += h7 * (5 * r5);
          d2 += h8 * (5 * r4);
          d2 += h9 * (5 * r3);
          c += d2 >>> 13;
          d2 &= 8191;
          d3 = c;
          d3 += h0 * r3;
          d3 += h1 * r2;
          d3 += h2 * r1;
          d3 += h3 * r0;
          d3 += h4 * (5 * r9);
          c = d3 >>> 13;
          d3 &= 8191;
          d3 += h5 * (5 * r8);
          d3 += h6 * (5 * r7);
          d3 += h7 * (5 * r6);
          d3 += h8 * (5 * r5);
          d3 += h9 * (5 * r4);
          c += d3 >>> 13;
          d3 &= 8191;
          d4 = c;
          d4 += h0 * r4;
          d4 += h1 * r3;
          d4 += h2 * r2;
          d4 += h3 * r1;
          d4 += h4 * r0;
          c = d4 >>> 13;
          d4 &= 8191;
          d4 += h5 * (5 * r9);
          d4 += h6 * (5 * r8);
          d4 += h7 * (5 * r7);
          d4 += h8 * (5 * r6);
          d4 += h9 * (5 * r5);
          c += d4 >>> 13;
          d4 &= 8191;
          d5 = c;
          d5 += h0 * r5;
          d5 += h1 * r4;
          d5 += h2 * r3;
          d5 += h3 * r2;
          d5 += h4 * r1;
          c = d5 >>> 13;
          d5 &= 8191;
          d5 += h5 * r0;
          d5 += h6 * (5 * r9);
          d5 += h7 * (5 * r8);
          d5 += h8 * (5 * r7);
          d5 += h9 * (5 * r6);
          c += d5 >>> 13;
          d5 &= 8191;
          d6 = c;
          d6 += h0 * r6;
          d6 += h1 * r5;
          d6 += h2 * r4;
          d6 += h3 * r3;
          d6 += h4 * r2;
          c = d6 >>> 13;
          d6 &= 8191;
          d6 += h5 * r1;
          d6 += h6 * r0;
          d6 += h7 * (5 * r9);
          d6 += h8 * (5 * r8);
          d6 += h9 * (5 * r7);
          c += d6 >>> 13;
          d6 &= 8191;
          d7 = c;
          d7 += h0 * r7;
          d7 += h1 * r6;
          d7 += h2 * r5;
          d7 += h3 * r4;
          d7 += h4 * r3;
          c = d7 >>> 13;
          d7 &= 8191;
          d7 += h5 * r2;
          d7 += h6 * r1;
          d7 += h7 * r0;
          d7 += h8 * (5 * r9);
          d7 += h9 * (5 * r8);
          c += d7 >>> 13;
          d7 &= 8191;
          d8 = c;
          d8 += h0 * r8;
          d8 += h1 * r7;
          d8 += h2 * r6;
          d8 += h3 * r5;
          d8 += h4 * r4;
          c = d8 >>> 13;
          d8 &= 8191;
          d8 += h5 * r3;
          d8 += h6 * r2;
          d8 += h7 * r1;
          d8 += h8 * r0;
          d8 += h9 * (5 * r9);
          c += d8 >>> 13;
          d8 &= 8191;
          d9 = c;
          d9 += h0 * r9;
          d9 += h1 * r8;
          d9 += h2 * r7;
          d9 += h3 * r6;
          d9 += h4 * r5;
          c = d9 >>> 13;
          d9 &= 8191;
          d9 += h5 * r4;
          d9 += h6 * r3;
          d9 += h7 * r2;
          d9 += h8 * r1;
          d9 += h9 * r0;
          c += d9 >>> 13;
          d9 &= 8191;
          c = (c << 2) + c | 0;
          c = c + d0 | 0;
          d0 = c & 8191;
          c = c >>> 13;
          d1 += c;
          h0 = d0;
          h1 = d1;
          h2 = d2;
          h3 = d3;
          h4 = d4;
          h5 = d5;
          h6 = d6;
          h7 = d7;
          h8 = d8;
          h9 = d9;
          mpos += 16;
          bytes -= 16;
        }
        this.h[0] = h0;
        this.h[1] = h1;
        this.h[2] = h2;
        this.h[3] = h3;
        this.h[4] = h4;
        this.h[5] = h5;
        this.h[6] = h6;
        this.h[7] = h7;
        this.h[8] = h8;
        this.h[9] = h9;
      };
      poly1305.prototype.finish = function(mac, macpos) {
        var g = new Uint16Array(10);
        var c, mask, f, i;
        if (this.leftover) {
          i = this.leftover;
          this.buffer[i++] = 1;
          for (; i < 16; i++) this.buffer[i] = 0;
          this.fin = 1;
          this.blocks(this.buffer, 0, 16);
        }
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        for (i = 2; i < 10; i++) {
          this.h[i] += c;
          c = this.h[i] >>> 13;
          this.h[i] &= 8191;
        }
        this.h[0] += c * 5;
        c = this.h[0] >>> 13;
        this.h[0] &= 8191;
        this.h[1] += c;
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        this.h[2] += c;
        g[0] = this.h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 8191;
        for (i = 1; i < 10; i++) {
          g[i] = this.h[i] + c;
          c = g[i] >>> 13;
          g[i] &= 8191;
        }
        g[9] -= 1 << 13;
        mask = (c ^ 1) - 1;
        for (i = 0; i < 10; i++) g[i] &= mask;
        mask = ~mask;
        for (i = 0; i < 10; i++) this.h[i] = this.h[i] & mask | g[i];
        this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
        this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
        this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
        this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
        this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
        this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
        this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
        this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
        f = this.h[0] + this.pad[0];
        this.h[0] = f & 65535;
        for (i = 1; i < 8; i++) {
          f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
          this.h[i] = f & 65535;
        }
        mac[macpos + 0] = this.h[0] >>> 0 & 255;
        mac[macpos + 1] = this.h[0] >>> 8 & 255;
        mac[macpos + 2] = this.h[1] >>> 0 & 255;
        mac[macpos + 3] = this.h[1] >>> 8 & 255;
        mac[macpos + 4] = this.h[2] >>> 0 & 255;
        mac[macpos + 5] = this.h[2] >>> 8 & 255;
        mac[macpos + 6] = this.h[3] >>> 0 & 255;
        mac[macpos + 7] = this.h[3] >>> 8 & 255;
        mac[macpos + 8] = this.h[4] >>> 0 & 255;
        mac[macpos + 9] = this.h[4] >>> 8 & 255;
        mac[macpos + 10] = this.h[5] >>> 0 & 255;
        mac[macpos + 11] = this.h[5] >>> 8 & 255;
        mac[macpos + 12] = this.h[6] >>> 0 & 255;
        mac[macpos + 13] = this.h[6] >>> 8 & 255;
        mac[macpos + 14] = this.h[7] >>> 0 & 255;
        mac[macpos + 15] = this.h[7] >>> 8 & 255;
      };
      poly1305.prototype.update = function(m, mpos, bytes) {
        var i, want;
        if (this.leftover) {
          want = 16 - this.leftover;
          if (want > bytes)
            want = bytes;
          for (i = 0; i < want; i++)
            this.buffer[this.leftover + i] = m[mpos + i];
          bytes -= want;
          mpos += want;
          this.leftover += want;
          if (this.leftover < 16)
            return;
          this.blocks(this.buffer, 0, 16);
          this.leftover = 0;
        }
        if (bytes >= 16) {
          want = bytes - bytes % 16;
          this.blocks(m, mpos, want);
          mpos += want;
          bytes -= want;
        }
        if (bytes) {
          for (i = 0; i < bytes; i++)
            this.buffer[this.leftover + i] = m[mpos + i];
          this.leftover += bytes;
        }
      };
      function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
        var s = new poly1305(k);
        s.update(m, mpos, n);
        s.finish(out, outpos);
        return 0;
      }
      function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
        var x = new Uint8Array(16);
        crypto_onetimeauth(x, 0, m, mpos, n, k);
        return crypto_verify_16(h, hpos, x, 0);
      }
      function crypto_secretbox(c, m, d, n, k) {
        var i;
        if (d < 32) return -1;
        crypto_stream_xor(c, 0, m, 0, d, n, k);
        crypto_onetimeauth(c, 16, c, 32, d - 32, c);
        for (i = 0; i < 16; i++) c[i] = 0;
        return 0;
      }
      function crypto_secretbox_open(m, c, d, n, k) {
        var i;
        var x = new Uint8Array(32);
        if (d < 32) return -1;
        crypto_stream(x, 0, 32, n, k);
        if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0) return -1;
        crypto_stream_xor(m, 0, c, 0, d, n, k);
        for (i = 0; i < 32; i++) m[i] = 0;
        return 0;
      }
      function set25519(r, a) {
        var i;
        for (i = 0; i < 16; i++) r[i] = a[i] | 0;
      }
      function car25519(o) {
        var i, v, c = 1;
        for (i = 0; i < 16; i++) {
          v = o[i] + c + 65535;
          c = Math.floor(v / 65536);
          o[i] = v - c * 65536;
        }
        o[0] += c - 1 + 37 * (c - 1);
      }
      function sel25519(p, q, b) {
        var t, c = ~(b - 1);
        for (var i = 0; i < 16; i++) {
          t = c & (p[i] ^ q[i]);
          p[i] ^= t;
          q[i] ^= t;
        }
      }
      function pack25519(o, n) {
        var i, j, b;
        var m = gf(), t = gf();
        for (i = 0; i < 16; i++) t[i] = n[i];
        car25519(t);
        car25519(t);
        car25519(t);
        for (j = 0; j < 2; j++) {
          m[0] = t[0] - 65517;
          for (i = 1; i < 15; i++) {
            m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
            m[i - 1] &= 65535;
          }
          m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
          b = m[15] >> 16 & 1;
          m[14] &= 65535;
          sel25519(t, m, 1 - b);
        }
        for (i = 0; i < 16; i++) {
          o[2 * i] = t[i] & 255;
          o[2 * i + 1] = t[i] >> 8;
        }
      }
      function neq25519(a, b) {
        var c = new Uint8Array(32), d = new Uint8Array(32);
        pack25519(c, a);
        pack25519(d, b);
        return crypto_verify_32(c, 0, d, 0);
      }
      function par25519(a) {
        var d = new Uint8Array(32);
        pack25519(d, a);
        return d[0] & 1;
      }
      function unpack25519(o, n) {
        var i;
        for (i = 0; i < 16; i++) o[i] = n[2 * i] + (n[2 * i + 1] << 8);
        o[15] &= 32767;
      }
      function A(o, a, b) {
        for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
      }
      function Z(o, a, b) {
        for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
      }
      function M(o, a, b) {
        var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        v = a[0];
        t0 += v * b0;
        t1 += v * b1;
        t2 += v * b2;
        t3 += v * b3;
        t4 += v * b4;
        t5 += v * b5;
        t6 += v * b6;
        t7 += v * b7;
        t8 += v * b8;
        t9 += v * b9;
        t10 += v * b10;
        t11 += v * b11;
        t12 += v * b12;
        t13 += v * b13;
        t14 += v * b14;
        t15 += v * b15;
        v = a[1];
        t1 += v * b0;
        t2 += v * b1;
        t3 += v * b2;
        t4 += v * b3;
        t5 += v * b4;
        t6 += v * b5;
        t7 += v * b6;
        t8 += v * b7;
        t9 += v * b8;
        t10 += v * b9;
        t11 += v * b10;
        t12 += v * b11;
        t13 += v * b12;
        t14 += v * b13;
        t15 += v * b14;
        t16 += v * b15;
        v = a[2];
        t2 += v * b0;
        t3 += v * b1;
        t4 += v * b2;
        t5 += v * b3;
        t6 += v * b4;
        t7 += v * b5;
        t8 += v * b6;
        t9 += v * b7;
        t10 += v * b8;
        t11 += v * b9;
        t12 += v * b10;
        t13 += v * b11;
        t14 += v * b12;
        t15 += v * b13;
        t16 += v * b14;
        t17 += v * b15;
        v = a[3];
        t3 += v * b0;
        t4 += v * b1;
        t5 += v * b2;
        t6 += v * b3;
        t7 += v * b4;
        t8 += v * b5;
        t9 += v * b6;
        t10 += v * b7;
        t11 += v * b8;
        t12 += v * b9;
        t13 += v * b10;
        t14 += v * b11;
        t15 += v * b12;
        t16 += v * b13;
        t17 += v * b14;
        t18 += v * b15;
        v = a[4];
        t4 += v * b0;
        t5 += v * b1;
        t6 += v * b2;
        t7 += v * b3;
        t8 += v * b4;
        t9 += v * b5;
        t10 += v * b6;
        t11 += v * b7;
        t12 += v * b8;
        t13 += v * b9;
        t14 += v * b10;
        t15 += v * b11;
        t16 += v * b12;
        t17 += v * b13;
        t18 += v * b14;
        t19 += v * b15;
        v = a[5];
        t5 += v * b0;
        t6 += v * b1;
        t7 += v * b2;
        t8 += v * b3;
        t9 += v * b4;
        t10 += v * b5;
        t11 += v * b6;
        t12 += v * b7;
        t13 += v * b8;
        t14 += v * b9;
        t15 += v * b10;
        t16 += v * b11;
        t17 += v * b12;
        t18 += v * b13;
        t19 += v * b14;
        t20 += v * b15;
        v = a[6];
        t6 += v * b0;
        t7 += v * b1;
        t8 += v * b2;
        t9 += v * b3;
        t10 += v * b4;
        t11 += v * b5;
        t12 += v * b6;
        t13 += v * b7;
        t14 += v * b8;
        t15 += v * b9;
        t16 += v * b10;
        t17 += v * b11;
        t18 += v * b12;
        t19 += v * b13;
        t20 += v * b14;
        t21 += v * b15;
        v = a[7];
        t7 += v * b0;
        t8 += v * b1;
        t9 += v * b2;
        t10 += v * b3;
        t11 += v * b4;
        t12 += v * b5;
        t13 += v * b6;
        t14 += v * b7;
        t15 += v * b8;
        t16 += v * b9;
        t17 += v * b10;
        t18 += v * b11;
        t19 += v * b12;
        t20 += v * b13;
        t21 += v * b14;
        t22 += v * b15;
        v = a[8];
        t8 += v * b0;
        t9 += v * b1;
        t10 += v * b2;
        t11 += v * b3;
        t12 += v * b4;
        t13 += v * b5;
        t14 += v * b6;
        t15 += v * b7;
        t16 += v * b8;
        t17 += v * b9;
        t18 += v * b10;
        t19 += v * b11;
        t20 += v * b12;
        t21 += v * b13;
        t22 += v * b14;
        t23 += v * b15;
        v = a[9];
        t9 += v * b0;
        t10 += v * b1;
        t11 += v * b2;
        t12 += v * b3;
        t13 += v * b4;
        t14 += v * b5;
        t15 += v * b6;
        t16 += v * b7;
        t17 += v * b8;
        t18 += v * b9;
        t19 += v * b10;
        t20 += v * b11;
        t21 += v * b12;
        t22 += v * b13;
        t23 += v * b14;
        t24 += v * b15;
        v = a[10];
        t10 += v * b0;
        t11 += v * b1;
        t12 += v * b2;
        t13 += v * b3;
        t14 += v * b4;
        t15 += v * b5;
        t16 += v * b6;
        t17 += v * b7;
        t18 += v * b8;
        t19 += v * b9;
        t20 += v * b10;
        t21 += v * b11;
        t22 += v * b12;
        t23 += v * b13;
        t24 += v * b14;
        t25 += v * b15;
        v = a[11];
        t11 += v * b0;
        t12 += v * b1;
        t13 += v * b2;
        t14 += v * b3;
        t15 += v * b4;
        t16 += v * b5;
        t17 += v * b6;
        t18 += v * b7;
        t19 += v * b8;
        t20 += v * b9;
        t21 += v * b10;
        t22 += v * b11;
        t23 += v * b12;
        t24 += v * b13;
        t25 += v * b14;
        t26 += v * b15;
        v = a[12];
        t12 += v * b0;
        t13 += v * b1;
        t14 += v * b2;
        t15 += v * b3;
        t16 += v * b4;
        t17 += v * b5;
        t18 += v * b6;
        t19 += v * b7;
        t20 += v * b8;
        t21 += v * b9;
        t22 += v * b10;
        t23 += v * b11;
        t24 += v * b12;
        t25 += v * b13;
        t26 += v * b14;
        t27 += v * b15;
        v = a[13];
        t13 += v * b0;
        t14 += v * b1;
        t15 += v * b2;
        t16 += v * b3;
        t17 += v * b4;
        t18 += v * b5;
        t19 += v * b6;
        t20 += v * b7;
        t21 += v * b8;
        t22 += v * b9;
        t23 += v * b10;
        t24 += v * b11;
        t25 += v * b12;
        t26 += v * b13;
        t27 += v * b14;
        t28 += v * b15;
        v = a[14];
        t14 += v * b0;
        t15 += v * b1;
        t16 += v * b2;
        t17 += v * b3;
        t18 += v * b4;
        t19 += v * b5;
        t20 += v * b6;
        t21 += v * b7;
        t22 += v * b8;
        t23 += v * b9;
        t24 += v * b10;
        t25 += v * b11;
        t26 += v * b12;
        t27 += v * b13;
        t28 += v * b14;
        t29 += v * b15;
        v = a[15];
        t15 += v * b0;
        t16 += v * b1;
        t17 += v * b2;
        t18 += v * b3;
        t19 += v * b4;
        t20 += v * b5;
        t21 += v * b6;
        t22 += v * b7;
        t23 += v * b8;
        t24 += v * b9;
        t25 += v * b10;
        t26 += v * b11;
        t27 += v * b12;
        t28 += v * b13;
        t29 += v * b14;
        t30 += v * b15;
        t0 += 38 * t16;
        t1 += 38 * t17;
        t2 += 38 * t18;
        t3 += 38 * t19;
        t4 += 38 * t20;
        t5 += 38 * t21;
        t6 += 38 * t22;
        t7 += 38 * t23;
        t8 += 38 * t24;
        t9 += 38 * t25;
        t10 += 38 * t26;
        t11 += 38 * t27;
        t12 += 38 * t28;
        t13 += 38 * t29;
        t14 += 38 * t30;
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        o[0] = t0;
        o[1] = t1;
        o[2] = t2;
        o[3] = t3;
        o[4] = t4;
        o[5] = t5;
        o[6] = t6;
        o[7] = t7;
        o[8] = t8;
        o[9] = t9;
        o[10] = t10;
        o[11] = t11;
        o[12] = t12;
        o[13] = t13;
        o[14] = t14;
        o[15] = t15;
      }
      function S(o, a) {
        M(o, a, a);
      }
      function inv25519(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++) c[a] = i[a];
        for (a = 253; a >= 0; a--) {
          S(c, c);
          if (a !== 2 && a !== 4) M(c, c, i);
        }
        for (a = 0; a < 16; a++) o[a] = c[a];
      }
      function pow2523(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++) c[a] = i[a];
        for (a = 250; a >= 0; a--) {
          S(c, c);
          if (a !== 1) M(c, c, i);
        }
        for (a = 0; a < 16; a++) o[a] = c[a];
      }
      function crypto_scalarmult(q, n, p) {
        var z = new Uint8Array(32);
        var x = new Float64Array(80), r, i;
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
        for (i = 0; i < 31; i++) z[i] = n[i];
        z[31] = n[31] & 127 | 64;
        z[0] &= 248;
        unpack25519(x, p);
        for (i = 0; i < 16; i++) {
          b[i] = x[i];
          d[i] = a[i] = c[i] = 0;
        }
        a[0] = d[0] = 1;
        for (i = 254; i >= 0; --i) {
          r = z[i >>> 3] >>> (i & 7) & 1;
          sel25519(a, b, r);
          sel25519(c, d, r);
          A(e, a, c);
          Z(a, a, c);
          A(c, b, d);
          Z(b, b, d);
          S(d, e);
          S(f, a);
          M(a, c, a);
          M(c, b, e);
          A(e, a, c);
          Z(a, a, c);
          S(b, a);
          Z(c, d, f);
          M(a, c, _121665);
          A(a, a, d);
          M(c, c, a);
          M(a, d, f);
          M(d, b, x);
          S(b, e);
          sel25519(a, b, r);
          sel25519(c, d, r);
        }
        for (i = 0; i < 16; i++) {
          x[i + 16] = a[i];
          x[i + 32] = c[i];
          x[i + 48] = b[i];
          x[i + 64] = d[i];
        }
        var x32 = x.subarray(32);
        var x16 = x.subarray(16);
        inv25519(x32, x32);
        M(x16, x16, x32);
        pack25519(q, x16);
        return 0;
      }
      function crypto_scalarmult_base(q, n) {
        return crypto_scalarmult(q, n, _9);
      }
      function crypto_box_keypair(y, x) {
        randombytes(x, 32);
        return crypto_scalarmult_base(y, x);
      }
      function crypto_box_beforenm(k, y, x) {
        var s = new Uint8Array(32);
        crypto_scalarmult(s, x, y);
        return crypto_core_hsalsa20(k, _0, s, sigma);
      }
      var crypto_box_afternm = crypto_secretbox;
      var crypto_box_open_afternm = crypto_secretbox_open;
      function crypto_box(c, m, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_afternm(c, m, d, n, k);
      }
      function crypto_box_open(m, c, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_open_afternm(m, c, d, n, k);
      }
      var K = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
      ];
      function crypto_hashblocks_hl(hh, hl, m, n) {
        var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d;
        var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
        var pos = 0;
        while (n >= 128) {
          for (i = 0; i < 16; i++) {
            j = 8 * i + pos;
            wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
            wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
          }
          for (i = 0; i < 80; i++) {
            bh0 = ah0;
            bh1 = ah1;
            bh2 = ah2;
            bh3 = ah3;
            bh4 = ah4;
            bh5 = ah5;
            bh6 = ah6;
            bh7 = ah7;
            bl0 = al0;
            bl1 = al1;
            bl2 = al2;
            bl3 = al3;
            bl4 = al4;
            bl5 = al5;
            bl6 = al6;
            bl7 = al7;
            h = ah7;
            l = al7;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
            l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = ah4 & ah5 ^ ~ah4 & ah6;
            l = al4 & al5 ^ ~al4 & al6;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = K[i * 2];
            l = K[i * 2 + 1];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = wh[i % 16];
            l = wl[i % 16];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            th = c & 65535 | d << 16;
            tl = a & 65535 | b << 16;
            h = th;
            l = tl;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
            l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
            l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh7 = c & 65535 | d << 16;
            bl7 = a & 65535 | b << 16;
            h = bh3;
            l = bl3;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = th;
            l = tl;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh3 = c & 65535 | d << 16;
            bl3 = a & 65535 | b << 16;
            ah1 = bh0;
            ah2 = bh1;
            ah3 = bh2;
            ah4 = bh3;
            ah5 = bh4;
            ah6 = bh5;
            ah7 = bh6;
            ah0 = bh7;
            al1 = bl0;
            al2 = bl1;
            al3 = bl2;
            al4 = bl3;
            al5 = bl4;
            al6 = bl5;
            al7 = bl6;
            al0 = bl7;
            if (i % 16 === 15) {
              for (j = 0; j < 16; j++) {
                h = wh[j];
                l = wl[j];
                a = l & 65535;
                b = l >>> 16;
                c = h & 65535;
                d = h >>> 16;
                h = wh[(j + 9) % 16];
                l = wl[(j + 9) % 16];
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                th = wh[(j + 1) % 16];
                tl = wl[(j + 1) % 16];
                h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                th = wh[(j + 14) % 16];
                tl = wl[(j + 14) % 16];
                h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                wh[j] = c & 65535 | d << 16;
                wl[j] = a & 65535 | b << 16;
              }
            }
          }
          h = ah0;
          l = al0;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[0];
          l = hl[0];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[0] = ah0 = c & 65535 | d << 16;
          hl[0] = al0 = a & 65535 | b << 16;
          h = ah1;
          l = al1;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[1];
          l = hl[1];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[1] = ah1 = c & 65535 | d << 16;
          hl[1] = al1 = a & 65535 | b << 16;
          h = ah2;
          l = al2;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[2];
          l = hl[2];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[2] = ah2 = c & 65535 | d << 16;
          hl[2] = al2 = a & 65535 | b << 16;
          h = ah3;
          l = al3;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[3];
          l = hl[3];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[3] = ah3 = c & 65535 | d << 16;
          hl[3] = al3 = a & 65535 | b << 16;
          h = ah4;
          l = al4;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[4];
          l = hl[4];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[4] = ah4 = c & 65535 | d << 16;
          hl[4] = al4 = a & 65535 | b << 16;
          h = ah5;
          l = al5;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[5];
          l = hl[5];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[5] = ah5 = c & 65535 | d << 16;
          hl[5] = al5 = a & 65535 | b << 16;
          h = ah6;
          l = al6;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[6];
          l = hl[6];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[6] = ah6 = c & 65535 | d << 16;
          hl[6] = al6 = a & 65535 | b << 16;
          h = ah7;
          l = al7;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[7];
          l = hl[7];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[7] = ah7 = c & 65535 | d << 16;
          hl[7] = al7 = a & 65535 | b << 16;
          pos += 128;
          n -= 128;
        }
        return n;
      }
      function crypto_hash(out, m, n) {
        var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
        hh[0] = 1779033703;
        hh[1] = 3144134277;
        hh[2] = 1013904242;
        hh[3] = 2773480762;
        hh[4] = 1359893119;
        hh[5] = 2600822924;
        hh[6] = 528734635;
        hh[7] = 1541459225;
        hl[0] = 4089235720;
        hl[1] = 2227873595;
        hl[2] = 4271175723;
        hl[3] = 1595750129;
        hl[4] = 2917565137;
        hl[5] = 725511199;
        hl[6] = 4215389547;
        hl[7] = 327033209;
        crypto_hashblocks_hl(hh, hl, m, n);
        n %= 128;
        for (i = 0; i < n; i++) x[i] = m[b - n + i];
        x[n] = 128;
        n = 256 - 128 * (n < 112 ? 1 : 0);
        x[n - 9] = 0;
        ts64(x, n - 8, b / 536870912 | 0, b << 3);
        crypto_hashblocks_hl(hh, hl, x, n);
        for (i = 0; i < 8; i++) ts64(out, 8 * i, hh[i], hl[i]);
        return 0;
      }
      function add(p, q) {
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
        Z(a, p[1], p[0]);
        Z(t, q[1], q[0]);
        M(a, a, t);
        A(b, p[0], p[1]);
        A(t, q[0], q[1]);
        M(b, b, t);
        M(c, p[3], q[3]);
        M(c, c, D2);
        M(d, p[2], q[2]);
        A(d, d, d);
        Z(e, b, a);
        Z(f, d, c);
        A(g, d, c);
        A(h, b, a);
        M(p[0], e, f);
        M(p[1], h, g);
        M(p[2], g, f);
        M(p[3], e, h);
      }
      function cswap(p, q, b) {
        var i;
        for (i = 0; i < 4; i++) {
          sel25519(p[i], q[i], b);
        }
      }
      function pack(r, p) {
        var tx = gf(), ty = gf(), zi = gf();
        inv25519(zi, p[2]);
        M(tx, p[0], zi);
        M(ty, p[1], zi);
        pack25519(r, ty);
        r[31] ^= par25519(tx) << 7;
      }
      function scalarmult(p, q, s) {
        var b, i;
        set25519(p[0], gf0);
        set25519(p[1], gf1);
        set25519(p[2], gf1);
        set25519(p[3], gf0);
        for (i = 255; i >= 0; --i) {
          b = s[i / 8 | 0] >> (i & 7) & 1;
          cswap(p, q, b);
          add(q, p);
          add(p, p);
          cswap(p, q, b);
        }
      }
      function scalarbase(p, s) {
        var q = [gf(), gf(), gf(), gf()];
        set25519(q[0], X);
        set25519(q[1], Y);
        set25519(q[2], gf1);
        M(q[3], X, Y);
        scalarmult(p, q, s);
      }
      function crypto_sign_keypair(pk, sk, seeded) {
        var d = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()];
        var i;
        if (!seeded) randombytes(sk, 32);
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        scalarbase(p, d);
        pack(pk, p);
        for (i = 0; i < 32; i++) sk[i + 32] = pk[i];
        return 0;
      }
      var L = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
      function modL(r, x) {
        var carry, i, j, k;
        for (i = 63; i >= 32; --i) {
          carry = 0;
          for (j = i - 32, k = i - 12; j < k; ++j) {
            x[j] += carry - 16 * x[i] * L[j - (i - 32)];
            carry = Math.floor((x[j] + 128) / 256);
            x[j] -= carry * 256;
          }
          x[j] += carry;
          x[i] = 0;
        }
        carry = 0;
        for (j = 0; j < 32; j++) {
          x[j] += carry - (x[31] >> 4) * L[j];
          carry = x[j] >> 8;
          x[j] &= 255;
        }
        for (j = 0; j < 32; j++) x[j] -= carry * L[j];
        for (i = 0; i < 32; i++) {
          x[i + 1] += x[i] >> 8;
          r[i] = x[i] & 255;
        }
      }
      function reduce(r) {
        var x = new Float64Array(64), i;
        for (i = 0; i < 64; i++) x[i] = r[i];
        for (i = 0; i < 64; i++) r[i] = 0;
        modL(r, x);
      }
      function crypto_sign(sm, m, n, sk) {
        var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
        var i, j, x = new Float64Array(64);
        var p = [gf(), gf(), gf(), gf()];
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        var smlen = n + 64;
        for (i = 0; i < n; i++) sm[64 + i] = m[i];
        for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];
        crypto_hash(r, sm.subarray(32), n + 32);
        reduce(r);
        scalarbase(p, r);
        pack(sm, p);
        for (i = 32; i < 64; i++) sm[i] = sk[i];
        crypto_hash(h, sm, n + 64);
        reduce(h);
        for (i = 0; i < 64; i++) x[i] = 0;
        for (i = 0; i < 32; i++) x[i] = r[i];
        for (i = 0; i < 32; i++) {
          for (j = 0; j < 32; j++) {
            x[i + j] += h[i] * d[j];
          }
        }
        modL(sm.subarray(32), x);
        return smlen;
      }
      function unpackneg(r, p) {
        var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
        set25519(r[2], gf1);
        unpack25519(r[1], p);
        S(num, r[1]);
        M(den, num, D);
        Z(num, num, r[2]);
        A(den, r[2], den);
        S(den2, den);
        S(den4, den2);
        M(den6, den4, den2);
        M(t, den6, num);
        M(t, t, den);
        pow2523(t, t);
        M(t, t, num);
        M(t, t, den);
        M(t, t, den);
        M(r[0], t, den);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) M(r[0], r[0], I);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) return -1;
        if (par25519(r[0]) === p[31] >> 7) Z(r[0], gf0, r[0]);
        M(r[3], r[0], r[1]);
        return 0;
      }
      function crypto_sign_open(m, sm, n, pk) {
        var i;
        var t = new Uint8Array(32), h = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
        if (n < 64) return -1;
        if (unpackneg(q, pk)) return -1;
        for (i = 0; i < n; i++) m[i] = sm[i];
        for (i = 0; i < 32; i++) m[i + 32] = pk[i];
        crypto_hash(h, m, n);
        reduce(h);
        scalarmult(p, q, h);
        scalarbase(q, sm.subarray(32));
        add(p, q);
        pack(t, p);
        n -= 64;
        if (crypto_verify_32(sm, 0, t, 0)) {
          for (i = 0; i < n; i++) m[i] = 0;
          return -1;
        }
        for (i = 0; i < n; i++) m[i] = sm[i + 64];
        return n;
      }
      var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
      nacl.lowlevel = {
        crypto_core_hsalsa20,
        crypto_stream_xor,
        crypto_stream,
        crypto_stream_salsa20_xor,
        crypto_stream_salsa20,
        crypto_onetimeauth,
        crypto_onetimeauth_verify,
        crypto_verify_16,
        crypto_verify_32,
        crypto_secretbox,
        crypto_secretbox_open,
        crypto_scalarmult,
        crypto_scalarmult_base,
        crypto_box_beforenm,
        crypto_box_afternm,
        crypto_box,
        crypto_box_open,
        crypto_box_keypair,
        crypto_hash,
        crypto_sign,
        crypto_sign_keypair,
        crypto_sign_open,
        crypto_secretbox_KEYBYTES,
        crypto_secretbox_NONCEBYTES,
        crypto_secretbox_ZEROBYTES,
        crypto_secretbox_BOXZEROBYTES,
        crypto_scalarmult_BYTES,
        crypto_scalarmult_SCALARBYTES,
        crypto_box_PUBLICKEYBYTES,
        crypto_box_SECRETKEYBYTES,
        crypto_box_BEFORENMBYTES,
        crypto_box_NONCEBYTES,
        crypto_box_ZEROBYTES,
        crypto_box_BOXZEROBYTES,
        crypto_sign_BYTES,
        crypto_sign_PUBLICKEYBYTES,
        crypto_sign_SECRETKEYBYTES,
        crypto_sign_SEEDBYTES,
        crypto_hash_BYTES,
        gf,
        D,
        L,
        pack25519,
        unpack25519,
        M,
        A,
        S,
        Z,
        pow2523,
        add,
        set25519,
        modL,
        scalarmult,
        scalarbase
      };
      function checkLengths(k, n) {
        if (k.length !== crypto_secretbox_KEYBYTES) throw new Error("bad key size");
        if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error("bad nonce size");
      }
      function checkBoxLengths(pk, sk) {
        if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error("bad public key size");
        if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error("bad secret key size");
      }
      function checkArrayTypes() {
        for (var i = 0; i < arguments.length; i++) {
          if (!(arguments[i] instanceof Uint8Array))
            throw new TypeError("unexpected type, use Uint8Array");
        }
      }
      function cleanup(arr) {
        for (var i = 0; i < arr.length; i++) arr[i] = 0;
      }
      nacl.randomBytes = function(n) {
        var b = new Uint8Array(n);
        randombytes(b, n);
        return b;
      };
      nacl.secretbox = function(msg, nonce, key) {
        checkArrayTypes(msg, nonce, key);
        checkLengths(key, nonce);
        var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
        var c = new Uint8Array(m.length);
        for (var i = 0; i < msg.length; i++) m[i + crypto_secretbox_ZEROBYTES] = msg[i];
        crypto_secretbox(c, m, m.length, nonce, key);
        return c.subarray(crypto_secretbox_BOXZEROBYTES);
      };
      nacl.secretbox.open = function(box, nonce, key) {
        checkArrayTypes(box, nonce, key);
        checkLengths(key, nonce);
        var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
        var m = new Uint8Array(c.length);
        for (var i = 0; i < box.length; i++) c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
        if (c.length < 32) return null;
        if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
        return m.subarray(crypto_secretbox_ZEROBYTES);
      };
      nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
      nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
      nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
      nacl.scalarMult = function(n, p) {
        checkArrayTypes(n, p);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        if (p.length !== crypto_scalarmult_BYTES) throw new Error("bad p size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult(q, n, p);
        return q;
      };
      nacl.scalarMult.base = function(n) {
        checkArrayTypes(n);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult_base(q, n);
        return q;
      };
      nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
      nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
      nacl.box = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox(msg, nonce, k);
      };
      nacl.box.before = function(publicKey, secretKey) {
        checkArrayTypes(publicKey, secretKey);
        checkBoxLengths(publicKey, secretKey);
        var k = new Uint8Array(crypto_box_BEFORENMBYTES);
        crypto_box_beforenm(k, publicKey, secretKey);
        return k;
      };
      nacl.box.after = nacl.secretbox;
      nacl.box.open = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox.open(msg, nonce, k);
      };
      nacl.box.open.after = nacl.secretbox.open;
      nacl.box.keyPair = function() {
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
        crypto_box_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.box.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_box_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        crypto_scalarmult_base(pk, secretKey);
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
      nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
      nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
      nacl.box.nonceLength = crypto_box_NONCEBYTES;
      nacl.box.overheadLength = nacl.secretbox.overheadLength;
      nacl.sign = function(msg, secretKey) {
        checkArrayTypes(msg, secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
        crypto_sign(signedMsg, msg, msg.length, secretKey);
        return signedMsg;
      };
      nacl.sign.open = function(signedMsg, publicKey) {
        checkArrayTypes(signedMsg, publicKey);
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var tmp = new Uint8Array(signedMsg.length);
        var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
        if (mlen < 0) return null;
        var m = new Uint8Array(mlen);
        for (var i = 0; i < m.length; i++) m[i] = tmp[i];
        return m;
      };
      nacl.sign.detached = function(msg, secretKey) {
        var signedMsg = nacl.sign(msg, secretKey);
        var sig = new Uint8Array(crypto_sign_BYTES);
        for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
        return sig;
      };
      nacl.sign.detached.verify = function(msg, sig, publicKey) {
        checkArrayTypes(msg, sig, publicKey);
        if (sig.length !== crypto_sign_BYTES)
          throw new Error("bad signature size");
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
        var m = new Uint8Array(crypto_sign_BYTES + msg.length);
        var i;
        for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
        for (i = 0; i < msg.length; i++) sm[i + crypto_sign_BYTES] = msg[i];
        return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
      };
      nacl.sign.keyPair = function() {
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        crypto_sign_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.sign.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32 + i];
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl.sign.keyPair.fromSeed = function(seed) {
        checkArrayTypes(seed);
        if (seed.length !== crypto_sign_SEEDBYTES)
          throw new Error("bad seed size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        for (var i = 0; i < 32; i++) sk[i] = seed[i];
        crypto_sign_keypair(pk, sk, true);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
      nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
      nacl.sign.seedLength = crypto_sign_SEEDBYTES;
      nacl.sign.signatureLength = crypto_sign_BYTES;
      nacl.hash = function(msg) {
        checkArrayTypes(msg);
        var h = new Uint8Array(crypto_hash_BYTES);
        crypto_hash(h, msg, msg.length);
        return h;
      };
      nacl.hash.hashLength = crypto_hash_BYTES;
      nacl.verify = function(x, y) {
        checkArrayTypes(x, y);
        if (x.length === 0 || y.length === 0) return false;
        if (x.length !== y.length) return false;
        return vn(x, 0, y, 0, x.length) === 0 ? true : false;
      };
      nacl.setPRNG = function(fn) {
        randombytes = fn;
      };
      (function() {
        var crypto2 = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (crypto2 && crypto2.getRandomValues) {
          var QUOTA = 65536;
          nacl.setPRNG(function(x, n) {
            var i, v = new Uint8Array(n);
            for (i = 0; i < n; i += QUOTA) {
              crypto2.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
            }
            for (i = 0; i < n; i++) x[i] = v[i];
            cleanup(v);
          });
        } else if (typeof __require !== "undefined") {
          crypto2 = __require("crypto");
          if (crypto2 && crypto2.randomBytes) {
            nacl.setPRNG(function(x, n) {
              var i, v = crypto2.randomBytes(n);
              for (i = 0; i < n; i++) x[i] = v[i];
              cleanup(v);
            });
          }
        }
      })();
    })(typeof module !== "undefined" && module.exports ? module.exports : self.nacl = self.nacl || {});
  }
});

// node_modules/process-nextick-args/index.js
var require_process_nextick_args = __commonJS({
  "node_modules/process-nextick-args/index.js"(exports, module) {
    "use strict";
    if (typeof process === "undefined" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0) {
      module.exports = { nextTick };
    } else {
      module.exports = process;
    }
    function nextTick(fn, arg1, arg2, arg3) {
      if (typeof fn !== "function") {
        throw new TypeError('"callback" argument must be a function');
      }
      var len = arguments.length;
      var args, i;
      switch (len) {
        case 0:
        case 1:
          return process.nextTick(fn);
        case 2:
          return process.nextTick(function afterTickOne() {
            fn.call(null, arg1);
          });
        case 3:
          return process.nextTick(function afterTickTwo() {
            fn.call(null, arg1, arg2);
          });
        case 4:
          return process.nextTick(function afterTickThree() {
            fn.call(null, arg1, arg2, arg3);
          });
        default:
          args = new Array(len - 1);
          i = 0;
          while (i < args.length) {
            args[i++] = arguments[i];
          }
          return process.nextTick(function afterTick() {
            fn.apply(null, args);
          });
      }
    }
  }
});

// node_modules/isarray/index.js
var require_isarray = __commonJS({
  "node_modules/isarray/index.js"(exports, module) {
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/stream.js
var require_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/stream.js"(exports, module) {
    module.exports = __require("stream");
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    var buffer = __require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/core-util-is/lib/util.js
var require_util = __commonJS({
  "node_modules/core-util-is/lib/util.js"(exports) {
    function isArray(arg) {
      if (Array.isArray) {
        return Array.isArray(arg);
      }
      return objectToString(arg) === "[object Array]";
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return objectToString(re) === "[object RegExp]";
    }
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return objectToString(d) === "[object Date]";
    }
    exports.isDate = isDate;
    function isError(e) {
      return objectToString(e) === "[object Error]" || e instanceof Error;
    }
    exports.isError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
      typeof arg === "undefined";
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = __require("buffer").Buffer.isBuffer;
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module) {
    if (typeof Object.create === "function") {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "node_modules/inherits/inherits.js"(exports, module) {
    try {
      util = __require("util");
      if (typeof util.inherits !== "function") throw "";
      module.exports = util.inherits;
    } catch (e) {
      module.exports = require_inherits_browser();
    }
    var util;
  }
});

// node_modules/readable-stream/lib/internal/streams/BufferList.js
var require_BufferList = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/BufferList.js"(exports, module) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Buffer2 = require_safe_buffer().Buffer;
    var util = __require("util");
    function copyBuffer(src, target, offset) {
      src.copy(target, offset);
    }
    module.exports = function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      BufferList.prototype.push = function push(v) {
        var entry = { data: v, next: null };
        if (this.length > 0) this.tail.next = entry;
        else this.head = entry;
        this.tail = entry;
        ++this.length;
      };
      BufferList.prototype.unshift = function unshift(v) {
        var entry = { data: v, next: this.head };
        if (this.length === 0) this.tail = entry;
        this.head = entry;
        ++this.length;
      };
      BufferList.prototype.shift = function shift() {
        if (this.length === 0) return;
        var ret = this.head.data;
        if (this.length === 1) this.head = this.tail = null;
        else this.head = this.head.next;
        --this.length;
        return ret;
      };
      BufferList.prototype.clear = function clear() {
        this.head = this.tail = null;
        this.length = 0;
      };
      BufferList.prototype.join = function join(s) {
        if (this.length === 0) return "";
        var p = this.head;
        var ret = "" + p.data;
        while (p = p.next) {
          ret += s + p.data;
        }
        return ret;
      };
      BufferList.prototype.concat = function concat2(n) {
        if (this.length === 0) return Buffer2.alloc(0);
        var ret = Buffer2.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while (p) {
          copyBuffer(p.data, ret, i);
          i += p.data.length;
          p = p.next;
        }
        return ret;
      };
      return BufferList;
    }();
    if (util && util.inspect && util.inspect.custom) {
      module.exports.prototype[util.inspect.custom] = function() {
        var obj = util.inspect({ length: this.length });
        return this.constructor.name + " " + obj;
      };
    }
  }
});

// node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module) {
    "use strict";
    var pna = require_process_nextick_args();
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err) {
          if (!this._writableState) {
            pna.nextTick(emitErrorNT, this, err);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            pna.nextTick(emitErrorNT, this, err);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          if (!_this._writableState) {
            pna.nextTick(emitErrorNT, _this, err2);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            pna.nextTick(emitErrorNT, _this, err2);
          }
        } else if (cb) {
          cb(err2);
        }
      });
      return this;
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    module.exports = {
      destroy,
      undestroy
    };
  }
});

// node_modules/util-deprecate/node.js
var require_node = __commonJS({
  "node_modules/util-deprecate/node.js"(exports, module) {
    module.exports = __require("util").deprecate;
  }
});

// node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/readable-stream/lib/_stream_writable.js"(exports, module) {
    "use strict";
    var pna = require_process_nextick_args();
    module.exports = Writable;
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    var asyncWrite = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
    var Duplex;
    Writable.WritableState = WritableState;
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var internalUtil = {
      deprecate: require_node()
    };
    var Stream = require_stream();
    var Buffer2 = require_safe_buffer().Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = require_destroy();
    util.inherits(Writable, Stream);
    function nop() {
    }
    function WritableState(options, stream) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      var isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
      var hwm = options.highWaterMark;
      var writableHwm = options.writableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      if (hwm || hwm === 0) this.highWaterMark = hwm;
      else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;
      else this.highWaterMark = defaultHwm;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(function() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function(object) {
          if (realHasInstance.call(this, object)) return true;
          if (this !== Writable) return false;
          return object && object._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function(object) {
        return object instanceof this;
      };
    }
    function Writable(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
        return new Writable(options);
      }
      this._writableState = new WritableState(options, this);
      this.writable = true;
      if (options) {
        if (typeof options.write === "function") this._write = options.write;
        if (typeof options.writev === "function") this._writev = options.writev;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
        if (typeof options.final === "function") this._final = options.final;
      }
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    function writeAfterEnd(stream, cb) {
      var er = new Error("write after end");
      stream.emit("error", er);
      pna.nextTick(cb, er);
    }
    function validChunk(stream, state, chunk, cb) {
      var valid = true;
      var er = false;
      if (chunk === null) {
        er = new TypeError("May not write null values to stream");
      } else if (typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      if (er) {
        stream.emit("error", er);
        pna.nextTick(cb, er);
        valid = false;
      }
      return valid;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf) encoding = "buffer";
      else if (!encoding) encoding = state.defaultEncoding;
      if (typeof cb !== "function") cb = nop;
      if (state.ended) writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string") encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer2.from(chunk, encoding);
      }
      return chunk;
    }
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret) state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (writev) stream._writev(chunk, state.onwrite);
      else stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) {
        pna.nextTick(cb, er);
        pna.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
        finishMaybe(stream, state);
      }
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      onwriteStateUpdate(state);
      if (er) onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(state);
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          asyncWrite(afterWrite, stream, state, finished, cb);
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished) onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf) allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null) state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error("_write() is not implemented"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending) endWritable(this, state, cb);
    };
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--;
        if (err) {
          stream.emit("error", err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
      });
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function") {
          state.pendingcb++;
          state.finalCalled = true;
          pna.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit("finish");
        }
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished) pna.nextTick(cb);
        else stream.once("finish", cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      state.corkedRequestsFree.next = corkReq;
    }
    Object.defineProperty(Writable.prototype, "destroyed", {
      get: function() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      this.end();
      cb(err);
    };
  }
});

// node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/readable-stream/lib/_stream_duplex.js"(exports, module) {
    "use strict";
    var pna = require_process_nextick_args();
    var objectKeys = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj) {
        keys2.push(key);
      }
      return keys2;
    };
    module.exports = Duplex;
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    util.inherits(Duplex, Readable);
    {
      keys = objectKeys(Writable.prototype);
      for (v = 0; v < keys.length; v++) {
        method = keys[v];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    var keys;
    var method;
    var v;
    function Duplex(options) {
      if (!(this instanceof Duplex)) return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      if (options && options.readable === false) this.readable = false;
      if (options && options.writable === false) this.writable = false;
      this.allowHalfOpen = true;
      if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
      this.once("end", onend);
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function onend() {
      if (this.allowHalfOpen || this._writableState.ended) return;
      pna.nextTick(onEndNT, this);
    }
    function onEndNT(self2) {
      self2.end();
    }
    Object.defineProperty(Duplex.prototype, "destroyed", {
      get: function() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
    Duplex.prototype._destroy = function(err, cb) {
      this.push(null);
      this.end();
      pna.nextTick(cb, err);
    };
  }
});

// node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/string_decoder/lib/string_decoder.js"(exports) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc) return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried) return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0) return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127) return 0;
      else if (byte >> 5 === 6) return 2;
      else if (byte >> 4 === 14) return 3;
      else if (byte >> 3 === 30) return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self2, buf, i) {
      var j = buf.length - 1;
      if (j < i) return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2) nb = 0;
          else self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self2, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "\uFFFD";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "\uFFFD";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0) return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed) return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r + "\uFFFD";
      return r;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0) return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  }
});

// node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/readable-stream/lib/_stream_readable.js"(exports, module) {
    "use strict";
    var pna = require_process_nextick_args();
    module.exports = Readable;
    var isArray = require_isarray();
    var Duplex;
    Readable.ReadableState = ReadableState;
    var EE = __require("events").EventEmitter;
    var EElistenerCount = function(emitter, type) {
      return emitter.listeners(type).length;
    };
    var Stream = require_stream();
    var Buffer2 = require_safe_buffer().Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var debugUtil = __require("util");
    var debug = void 0;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = function() {
      };
    }
    var BufferList = require_BufferList();
    var destroyImpl = require_destroy();
    var StringDecoder;
    util.inherits(Readable, Stream);
    var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
      else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);
      else emitter._events[event] = [fn, emitter._events[event]];
    }
    function ReadableState(options, stream) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      var isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
      var hwm = options.highWaterMark;
      var readableHwm = options.readableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      if (hwm || hwm === 0) this.highWaterMark = hwm;
      else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;
      else this.highWaterMark = defaultHwm;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable)) return new Readable(options);
      this._readableState = new ReadableState(options, this);
      this.readable = true;
      if (options) {
        if (typeof options.read === "function") this._read = options.read;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
      }
      Stream.call(this);
    }
    Object.defineProperty(Readable.prototype, "destroyed", {
      get: function() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function(err, cb) {
      this.push(null);
      cb(err);
    };
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) {
          stream.emit("error", er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted) stream.emit("error", new Error("stream.unshift() after end event"));
            else addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            stream.emit("error", new Error("stream.push() after EOF"));
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
              else maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
        }
      }
      return needMoreData(state);
    }
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit("data", chunk);
        stream.read(0);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      return er;
    }
    function needMoreData(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    var MAX_HWM = 8388608;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (n <= 0 || state.length === 0 && state.ended) return 0;
      if (state.objectMode) return 1;
      if (n !== n) {
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
      }
      if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state.length) return n;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    Readable.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0) state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0) state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading) n = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n > 0) ret = fromList(n, state);
      else ret = null;
      if (ret === null) {
        state.needReadable = true;
        n = 0;
      } else {
        state.length -= n;
      }
      if (state.length === 0) {
        if (!state.ended) state.needReadable = true;
        if (nOrig !== n && state.ended) endReadable(this);
      }
      if (ret !== null) this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state) {
      if (state.ended) return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      emitReadable(stream);
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        if (state.sync) pna.nextTick(emitReadable_, stream);
        else emitReadable_(stream);
      }
    }
    function emitReadable_(stream) {
      debug("emit readable");
      stream.emit("readable");
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        pna.nextTick(maybeReadMore_, stream, state);
      }
    }
    function maybeReadMore_(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
        else len = state.length;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      this.emit("error", new Error("_read() is not implemented"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted) pna.nextTick(endFn);
      else src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
      }
      var increasedAwaitDrain = false;
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (false === ret && !increasedAwaitDrain) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", state.awaitDrain);
            state.awaitDrain++;
            increasedAwaitDrain = true;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0) dest.emit("error", er);
      }
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = { hasUnpiped: false };
      if (state.pipesCount === 0) return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++) {
          dests[i].emit("unpipe", this, { hasUnpiped: false });
        }
        return this;
      }
      var index = indexOf(state.pipes, dest);
      if (index === -1) return this;
      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1) state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      if (ev === "data") {
        if (this._readableState.flowing !== false) this.resume();
      } else if (ev === "readable") {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.emittedReadable = false;
          if (!state.reading) {
            pna.nextTick(nReadingNextTick, this);
          } else if (state.length) {
            emitReadable(this);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    function nReadingNextTick(self2) {
      debug("readable nexttick read 0");
      self2.read(0);
    }
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = true;
        resume(this, state);
      }
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        pna.nextTick(resume_, stream, state);
      }
    }
    function resume_(stream, state) {
      if (!state.reading) {
        debug("resume read 0");
        stream.read(0);
      }
      state.resumeScheduled = false;
      state.awaitDrain = 0;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading) stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (false !== this._readableState.flowing) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug("flow", state.flowing);
      while (state.flowing && stream.read() !== null) {
      }
    }
    Readable.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder) chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] =  function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug("wrapped _read", n2);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function() {
        return this._readableState.highWaterMark;
      }
    });
    Readable._fromList = fromList;
    function fromList(n, state) {
      if (state.length === 0) return null;
      var ret;
      if (state.objectMode) ret = state.buffer.shift();
      else if (!n || n >= state.length) {
        if (state.decoder) ret = state.buffer.join("");
        else if (state.buffer.length === 1) ret = state.buffer.head.data;
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = fromListPartial(n, state.buffer, state.decoder);
      }
      return ret;
    }
    function fromListPartial(n, list, hasStrings) {
      var ret;
      if (n < list.head.data.length) {
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
      } else if (n === list.head.data.length) {
        ret = list.shift();
      } else {
        ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
      }
      return ret;
    }
    function copyFromBufferString(n, list) {
      var p = list.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;
      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;
        else ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) list.head = p.next;
            else list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = str.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    function copyFromBuffer(n, list) {
      var ret = Buffer2.allocUnsafe(n);
      var p = list.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;
      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) list.head = p.next;
            else list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = buf.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
      if (!state.endEmitted) {
        state.ended = true;
        pna.nextTick(endReadableNT, state, stream);
      }
    }
    function endReadableNT(state, stream) {
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
      }
    }
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i;
      }
      return -1;
    }
  }
});

// node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/readable-stream/lib/_stream_transform.js"(exports, module) {
    "use strict";
    module.exports = Transform;
    var Duplex = require_stream_duplex();
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    util.inherits(Transform, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (!cb) {
        return this.emit("error", new Error("write callback called multiple times"));
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform)) return new Transform(options);
      Duplex.call(this, options);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === "function") this._transform = options.transform;
        if (typeof options.flush === "function") this._flush = options.flush;
      }
      this.on("prefinish", prefinish);
    }
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function") {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      throw new Error("_transform() is not implemented");
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err, cb) {
      var _this2 = this;
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
        _this2.emit("close");
      });
    };
    function done(stream, er, data) {
      if (er) return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length) throw new Error("Calling transform done when ws.length != 0");
      if (stream._transformState.transforming) throw new Error("Calling transform done when still transforming");
      return stream.push(null);
    }
  }
});

// node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module) {
    "use strict";
    module.exports = PassThrough;
    var Transform = require_stream_transform();
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    util.inherits(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough)) return new PassThrough(options);
      Transform.call(this, options);
    }
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/readable-stream/readable.js
var require_readable = __commonJS({
  "node_modules/readable-stream/readable.js"(exports, module) {
    var Stream = __require("stream");
    if (process.env.READABLE_STREAM === "disable" && Stream) {
      module.exports = Stream;
      exports = module.exports = Stream.Readable;
      exports.Readable = Stream.Readable;
      exports.Writable = Stream.Writable;
      exports.Duplex = Stream.Duplex;
      exports.Transform = Stream.Transform;
      exports.PassThrough = Stream.PassThrough;
      exports.Stream = Stream;
    } else {
      exports = module.exports = require_stream_readable();
      exports.Stream = Stream || exports;
      exports.Readable = exports;
      exports.Writable = require_stream_writable();
      exports.Duplex = require_stream_duplex();
      exports.Transform = require_stream_transform();
      exports.PassThrough = require_stream_passthrough();
    }
  }
});

// node_modules/jszip/lib/support.js
var require_support = __commonJS({
  "node_modules/jszip/lib/support.js"(exports) {
    "use strict";
    exports.base64 = true;
    exports.array = true;
    exports.string = true;
    exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
    exports.nodebuffer = typeof Buffer !== "undefined";
    exports.uint8array = typeof Uint8Array !== "undefined";
    if (typeof ArrayBuffer === "undefined") {
      exports.blob = false;
    } else {
      buffer = new ArrayBuffer(0);
      try {
        exports.blob = new Blob([buffer], {
          type: "application/zip"
        }).size === 0;
      } catch (e) {
        try {
          Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
          builder = new Builder();
          builder.append(buffer);
          exports.blob = builder.getBlob("application/zip").size === 0;
        } catch (e2) {
          exports.blob = false;
        }
      }
    }
    var buffer;
    var Builder;
    var builder;
    try {
      exports.nodestream = !!require_readable().Readable;
    } catch (e) {
      exports.nodestream = false;
    }
  }
});

// node_modules/jszip/lib/base64.js
var require_base64 = __commonJS({
  "node_modules/jszip/lib/base64.js"(exports) {
    "use strict";
    var utils = require_utils();
    var support = require_support();
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    exports.encode = function(input) {
      var output = [];
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0, len = input.length, remainingBytes = len;
      var isArray = utils.getTypeOf(input) !== "string";
      while (i < input.length) {
        remainingBytes = len - i;
        if (!isArray) {
          chr1 = input.charCodeAt(i++);
          chr2 = i < len ? input.charCodeAt(i++) : 0;
          chr3 = i < len ? input.charCodeAt(i++) : 0;
        } else {
          chr1 = input[i++];
          chr2 = i < len ? input[i++] : 0;
          chr3 = i < len ? input[i++] : 0;
        }
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = remainingBytes > 1 ? (chr2 & 15) << 2 | chr3 >> 6 : 64;
        enc4 = remainingBytes > 2 ? chr3 & 63 : 64;
        output.push(_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4));
      }
      return output.join("");
    };
    exports.decode = function(input) {
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0, resultIndex = 0;
      var dataUrlPrefix = "data:";
      if (input.substr(0, dataUrlPrefix.length) === dataUrlPrefix) {
        throw new Error("Invalid base64 input, it looks like a data url.");
      }
      input = input.replace(/[^A-Za-z0-9+/=]/g, "");
      var totalLength = input.length * 3 / 4;
      if (input.charAt(input.length - 1) === _keyStr.charAt(64)) {
        totalLength--;
      }
      if (input.charAt(input.length - 2) === _keyStr.charAt(64)) {
        totalLength--;
      }
      if (totalLength % 1 !== 0) {
        throw new Error("Invalid base64 input, bad content length.");
      }
      var output;
      if (support.uint8array) {
        output = new Uint8Array(totalLength | 0);
      } else {
        output = new Array(totalLength | 0);
      }
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output[resultIndex++] = chr1;
        if (enc3 !== 64) {
          output[resultIndex++] = chr2;
        }
        if (enc4 !== 64) {
          output[resultIndex++] = chr3;
        }
      }
      return output;
    };
  }
});

// node_modules/jszip/lib/nodejsUtils.js
var require_nodejsUtils = __commonJS({
  "node_modules/jszip/lib/nodejsUtils.js"(exports, module) {
    "use strict";
    module.exports = {
      
      isNode: typeof Buffer !== "undefined",
      
      newBufferFrom: function(data, encoding) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) {
          return Buffer.from(data, encoding);
        } else {
          if (typeof data === "number") {
            throw new Error('The "data" argument must not be a number');
          }
          return new Buffer(data, encoding);
        }
      },
      
      allocBuffer: function(size) {
        if (Buffer.alloc) {
          return Buffer.alloc(size);
        } else {
          var buf = new Buffer(size);
          buf.fill(0);
          return buf;
        }
      },
      
      isBuffer: function(b) {
        return Buffer.isBuffer(b);
      },
      isStream: function(obj) {
        return obj && typeof obj.on === "function" && typeof obj.pause === "function" && typeof obj.resume === "function";
      }
    };
  }
});

// node_modules/immediate/lib/index.js
var require_lib = __commonJS({
  "node_modules/immediate/lib/index.js"(exports, module) {
    "use strict";
    var Mutation = global.MutationObserver || global.WebKitMutationObserver;
    var scheduleDrain;
    if (process.browser) {
      if (Mutation) {
        called = 0;
        observer = new Mutation(nextTick);
        element = global.document.createTextNode("");
        observer.observe(element, {
          characterData: true
        });
        scheduleDrain = function() {
          element.data = called = ++called % 2;
        };
      } else if (!global.setImmediate && typeof global.MessageChannel !== "undefined") {
        channel = new global.MessageChannel();
        channel.port1.onmessage = nextTick;
        scheduleDrain = function() {
          channel.port2.postMessage(0);
        };
      } else if ("document" in global && "onreadystatechange" in global.document.createElement("script")) {
        scheduleDrain = function() {
          var scriptEl = global.document.createElement("script");
          scriptEl.onreadystatechange = function() {
            nextTick();
            scriptEl.onreadystatechange = null;
            scriptEl.parentNode.removeChild(scriptEl);
            scriptEl = null;
          };
          global.document.documentElement.appendChild(scriptEl);
        };
      } else {
        scheduleDrain = function() {
          setTimeout(nextTick, 0);
        };
      }
    } else {
      scheduleDrain = function() {
        process.nextTick(nextTick);
      };
    }
    var called;
    var observer;
    var element;
    var channel;
    var draining;
    var queue = [];
    function nextTick() {
      draining = true;
      var i, oldQueue;
      var len = queue.length;
      while (len) {
        oldQueue = queue;
        queue = [];
        i = -1;
        while (++i < len) {
          oldQueue[i]();
        }
        len = queue.length;
      }
      draining = false;
    }
    module.exports = immediate;
    function immediate(task) {
      if (queue.push(task) === 1 && !draining) {
        scheduleDrain();
      }
    }
  }
});

// node_modules/lie/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/lie/lib/index.js"(exports, module) {
    "use strict";
    var immediate = require_lib();
    function INTERNAL() {
    }
    var handlers = {};
    var REJECTED = ["REJECTED"];
    var FULFILLED = ["FULFILLED"];
    var PENDING = ["PENDING"];
    if (!process.browser) {
      UNHANDLED = ["UNHANDLED"];
    }
    var UNHANDLED;
    module.exports = Promise2;
    function Promise2(resolver) {
      if (typeof resolver !== "function") {
        throw new TypeError("resolver must be a function");
      }
      this.state = PENDING;
      this.queue = [];
      this.outcome = void 0;
      if (!process.browser) {
        this.handled = UNHANDLED;
      }
      if (resolver !== INTERNAL) {
        safelyResolveThenable(this, resolver);
      }
    }
    Promise2.prototype.finally = function(callback) {
      if (typeof callback !== "function") {
        return this;
      }
      var p = this.constructor;
      return this.then(resolve2, reject2);
      function resolve2(value) {
        function yes() {
          return value;
        }
        return p.resolve(callback()).then(yes);
      }
      function reject2(reason) {
        function no() {
          throw reason;
        }
        return p.resolve(callback()).then(no);
      }
    };
    Promise2.prototype.catch = function(onRejected) {
      return this.then(null, onRejected);
    };
    Promise2.prototype.then = function(onFulfilled, onRejected) {
      if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) {
        return this;
      }
      var promise = new this.constructor(INTERNAL);
      if (!process.browser) {
        if (this.handled === UNHANDLED) {
          this.handled = null;
        }
      }
      if (this.state !== PENDING) {
        var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
        unwrap(promise, resolver, this.outcome);
      } else {
        this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
      }
      return promise;
    };
    function QueueItem(promise, onFulfilled, onRejected) {
      this.promise = promise;
      if (typeof onFulfilled === "function") {
        this.onFulfilled = onFulfilled;
        this.callFulfilled = this.otherCallFulfilled;
      }
      if (typeof onRejected === "function") {
        this.onRejected = onRejected;
        this.callRejected = this.otherCallRejected;
      }
    }
    QueueItem.prototype.callFulfilled = function(value) {
      handlers.resolve(this.promise, value);
    };
    QueueItem.prototype.otherCallFulfilled = function(value) {
      unwrap(this.promise, this.onFulfilled, value);
    };
    QueueItem.prototype.callRejected = function(value) {
      handlers.reject(this.promise, value);
    };
    QueueItem.prototype.otherCallRejected = function(value) {
      unwrap(this.promise, this.onRejected, value);
    };
    function unwrap(promise, func, value) {
      immediate(function() {
        var returnValue;
        try {
          returnValue = func(value);
        } catch (e) {
          return handlers.reject(promise, e);
        }
        if (returnValue === promise) {
          handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
        } else {
          handlers.resolve(promise, returnValue);
        }
      });
    }
    handlers.resolve = function(self2, value) {
      var result = tryCatch(getThen, value);
      if (result.status === "error") {
        return handlers.reject(self2, result.value);
      }
      var thenable = result.value;
      if (thenable) {
        safelyResolveThenable(self2, thenable);
      } else {
        self2.state = FULFILLED;
        self2.outcome = value;
        var i = -1;
        var len = self2.queue.length;
        while (++i < len) {
          self2.queue[i].callFulfilled(value);
        }
      }
      return self2;
    };
    handlers.reject = function(self2, error) {
      self2.state = REJECTED;
      self2.outcome = error;
      if (!process.browser) {
        if (self2.handled === UNHANDLED) {
          immediate(function() {
            if (self2.handled === UNHANDLED) {
              process.emit("unhandledRejection", error, self2);
            }
          });
        }
      }
      var i = -1;
      var len = self2.queue.length;
      while (++i < len) {
        self2.queue[i].callRejected(error);
      }
      return self2;
    };
    function getThen(obj) {
      var then = obj && obj.then;
      if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") {
        return function appyThen() {
          then.apply(obj, arguments);
        };
      }
    }
    function safelyResolveThenable(self2, thenable) {
      var called = false;
      function onError(value) {
        if (called) {
          return;
        }
        called = true;
        handlers.reject(self2, value);
      }
      function onSuccess(value) {
        if (called) {
          return;
        }
        called = true;
        handlers.resolve(self2, value);
      }
      function tryToUnwrap() {
        thenable(onSuccess, onError);
      }
      var result = tryCatch(tryToUnwrap);
      if (result.status === "error") {
        onError(result.value);
      }
    }
    function tryCatch(func, value) {
      var out = {};
      try {
        out.value = func(value);
        out.status = "success";
      } catch (e) {
        out.status = "error";
        out.value = e;
      }
      return out;
    }
    Promise2.resolve = resolve;
    function resolve(value) {
      if (value instanceof this) {
        return value;
      }
      return handlers.resolve(new this(INTERNAL), value);
    }
    Promise2.reject = reject;
    function reject(reason) {
      var promise = new this(INTERNAL);
      return handlers.reject(promise, reason);
    }
    Promise2.all = all;
    function all(iterable) {
      var self2 = this;
      if (Object.prototype.toString.call(iterable) !== "[object Array]") {
        return this.reject(new TypeError("must be an array"));
      }
      var len = iterable.length;
      var called = false;
      if (!len) {
        return this.resolve([]);
      }
      var values = new Array(len);
      var resolved = 0;
      var i = -1;
      var promise = new this(INTERNAL);
      while (++i < len) {
        allResolver(iterable[i], i);
      }
      return promise;
      function allResolver(value, i2) {
        self2.resolve(value).then(resolveFromAll, function(error) {
          if (!called) {
            called = true;
            handlers.reject(promise, error);
          }
        });
        function resolveFromAll(outValue) {
          values[i2] = outValue;
          if (++resolved === len && !called) {
            called = true;
            handlers.resolve(promise, values);
          }
        }
      }
    }
    Promise2.race = race;
    function race(iterable) {
      var self2 = this;
      if (Object.prototype.toString.call(iterable) !== "[object Array]") {
        return this.reject(new TypeError("must be an array"));
      }
      var len = iterable.length;
      var called = false;
      if (!len) {
        return this.resolve([]);
      }
      var i = -1;
      var promise = new this(INTERNAL);
      while (++i < len) {
        resolver(iterable[i]);
      }
      return promise;
      function resolver(value) {
        self2.resolve(value).then(function(response) {
          if (!called) {
            called = true;
            handlers.resolve(promise, response);
          }
        }, function(error) {
          if (!called) {
            called = true;
            handlers.reject(promise, error);
          }
        });
      }
    }
  }
});

// node_modules/jszip/lib/external.js
var require_external = __commonJS({
  "node_modules/jszip/lib/external.js"(exports, module) {
    "use strict";
    var ES6Promise = null;
    if (typeof Promise !== "undefined") {
      ES6Promise = Promise;
    } else {
      ES6Promise = require_lib2();
    }
    module.exports = {
      Promise: ES6Promise
    };
  }
});

// node_modules/setimmediate/setImmediate.js
var require_setImmediate = __commonJS({
  "node_modules/setimmediate/setImmediate.js"(exports) {
    (function(global2, undefined2) {
      "use strict";
      if (global2.setImmediate) {
        return;
      }
      var nextHandle = 1;
      var tasksByHandle = {};
      var currentlyRunningATask = false;
      var doc = global2.document;
      var registerImmediate;
      function setImmediate2(callback) {
        if (typeof callback !== "function") {
          callback = new Function("" + callback);
        }
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
        }
        var task = { callback, args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
      }
      function clearImmediate(handle) {
        delete tasksByHandle[handle];
      }
      function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
          case 0:
            callback();
            break;
          case 1:
            callback(args[0]);
            break;
          case 2:
            callback(args[0], args[1]);
            break;
          case 3:
            callback(args[0], args[1], args[2]);
            break;
          default:
            callback.apply(undefined2, args);
            break;
        }
      }
      function runIfPresent(handle) {
        if (currentlyRunningATask) {
          setTimeout(runIfPresent, 0, handle);
        } else {
          var task = tasksByHandle[handle];
          if (task) {
            currentlyRunningATask = true;
            try {
              run(task);
            } finally {
              clearImmediate(handle);
              currentlyRunningATask = false;
            }
          }
        }
      }
      function installNextTickImplementation() {
        registerImmediate = function(handle) {
          process.nextTick(function() {
            runIfPresent(handle);
          });
        };
      }
      function canUsePostMessage() {
        if (global2.postMessage && !global2.importScripts) {
          var postMessageIsAsynchronous = true;
          var oldOnMessage = global2.onmessage;
          global2.onmessage = function() {
            postMessageIsAsynchronous = false;
          };
          global2.postMessage("", "*");
          global2.onmessage = oldOnMessage;
          return postMessageIsAsynchronous;
        }
      }
      function installPostMessageImplementation() {
        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
          if (event.source === global2 && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
            runIfPresent(+event.data.slice(messagePrefix.length));
          }
        };
        if (global2.addEventListener) {
          global2.addEventListener("message", onGlobalMessage, false);
        } else {
          global2.attachEvent("onmessage", onGlobalMessage);
        }
        registerImmediate = function(handle) {
          global2.postMessage(messagePrefix + handle, "*");
        };
      }
      function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
          var handle = event.data;
          runIfPresent(handle);
        };
        registerImmediate = function(handle) {
          channel.port2.postMessage(handle);
        };
      }
      function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
          var script = doc.createElement("script");
          script.onreadystatechange = function() {
            runIfPresent(handle);
            script.onreadystatechange = null;
            html.removeChild(script);
            script = null;
          };
          html.appendChild(script);
        };
      }
      function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
          setTimeout(runIfPresent, 0, handle);
        };
      }
      var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global2);
      attachTo = attachTo && attachTo.setTimeout ? attachTo : global2;
      if ({}.toString.call(global2.process) === "[object process]") {
        installNextTickImplementation();
      } else if (canUsePostMessage()) {
        installPostMessageImplementation();
      } else if (global2.MessageChannel) {
        installMessageChannelImplementation();
      } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        installReadyStateChangeImplementation();
      } else {
        installSetTimeoutImplementation();
      }
      attachTo.setImmediate = setImmediate2;
      attachTo.clearImmediate = clearImmediate;
    })(typeof self === "undefined" ? typeof global === "undefined" ? exports : global : self);
  }
});

// node_modules/jszip/lib/utils.js
var require_utils = __commonJS({
  "node_modules/jszip/lib/utils.js"(exports) {
    "use strict";
    var support = require_support();
    var base64 = require_base64();
    var nodejsUtils = require_nodejsUtils();
    var external = require_external();
    require_setImmediate();
    function string2binary(str) {
      var result = null;
      if (support.uint8array) {
        result = new Uint8Array(str.length);
      } else {
        result = new Array(str.length);
      }
      return stringToArrayLike(str, result);
    }
    exports.newBlob = function(part, type) {
      exports.checkSupport("blob");
      try {
        return new Blob([part], {
          type
        });
      } catch (e) {
        try {
          var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
          var builder = new Builder();
          builder.append(part);
          return builder.getBlob(type);
        } catch (e2) {
          throw new Error("Bug : can't construct the Blob.");
        }
      }
    };
    function identity(input) {
      return input;
    }
    function stringToArrayLike(str, array) {
      for (var i = 0; i < str.length; ++i) {
        array[i] = str.charCodeAt(i) & 255;
      }
      return array;
    }
    var arrayToStringHelper = {
      
      stringifyByChunk: function(array, type, chunk) {
        var result = [], k = 0, len = array.length;
        if (len <= chunk) {
          return String.fromCharCode.apply(null, array);
        }
        while (k < len) {
          if (type === "array" || type === "nodebuffer") {
            result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
          } else {
            result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
          }
          k += chunk;
        }
        return result.join("");
      },
      
      stringifyByChar: function(array) {
        var resultStr = "";
        for (var i = 0; i < array.length; i++) {
          resultStr += String.fromCharCode(array[i]);
        }
        return resultStr;
      },
      applyCanBeUsed: {
        
        uint8array: function() {
          try {
            return support.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
          } catch (e) {
            return false;
          }
        }(),
        
        nodebuffer: function() {
          try {
            return support.nodebuffer && String.fromCharCode.apply(null, nodejsUtils.allocBuffer(1)).length === 1;
          } catch (e) {
            return false;
          }
        }()
      }
    };
    function arrayLikeToString(array) {
      var chunk = 65536, type = exports.getTypeOf(array), canUseApply = true;
      if (type === "uint8array") {
        canUseApply = arrayToStringHelper.applyCanBeUsed.uint8array;
      } else if (type === "nodebuffer") {
        canUseApply = arrayToStringHelper.applyCanBeUsed.nodebuffer;
      }
      if (canUseApply) {
        while (chunk > 1) {
          try {
            return arrayToStringHelper.stringifyByChunk(array, type, chunk);
          } catch (e) {
            chunk = Math.floor(chunk / 2);
          }
        }
      }
      return arrayToStringHelper.stringifyByChar(array);
    }
    exports.applyFromCharCode = arrayLikeToString;
    function arrayLikeToArrayLike(arrayFrom, arrayTo) {
      for (var i = 0; i < arrayFrom.length; i++) {
        arrayTo[i] = arrayFrom[i];
      }
      return arrayTo;
    }
    var transform = {};
    transform["string"] = {
      "string": identity,
      "array": function(input) {
        return stringToArrayLike(input, new Array(input.length));
      },
      "arraybuffer": function(input) {
        return transform["string"]["uint8array"](input).buffer;
      },
      "uint8array": function(input) {
        return stringToArrayLike(input, new Uint8Array(input.length));
      },
      "nodebuffer": function(input) {
        return stringToArrayLike(input, nodejsUtils.allocBuffer(input.length));
      }
    };
    transform["array"] = {
      "string": arrayLikeToString,
      "array": identity,
      "arraybuffer": function(input) {
        return new Uint8Array(input).buffer;
      },
      "uint8array": function(input) {
        return new Uint8Array(input);
      },
      "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(input);
      }
    };
    transform["arraybuffer"] = {
      "string": function(input) {
        return arrayLikeToString(new Uint8Array(input));
      },
      "array": function(input) {
        return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
      },
      "arraybuffer": identity,
      "uint8array": function(input) {
        return new Uint8Array(input);
      },
      "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(new Uint8Array(input));
      }
    };
    transform["uint8array"] = {
      "string": arrayLikeToString,
      "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
      },
      "arraybuffer": function(input) {
        return input.buffer;
      },
      "uint8array": identity,
      "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(input);
      }
    };
    transform["nodebuffer"] = {
      "string": arrayLikeToString,
      "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
      },
      "arraybuffer": function(input) {
        return transform["nodebuffer"]["uint8array"](input).buffer;
      },
      "uint8array": function(input) {
        return arrayLikeToArrayLike(input, new Uint8Array(input.length));
      },
      "nodebuffer": identity
    };
    exports.transformTo = function(outputType, input) {
      if (!input) {
        input = "";
      }
      if (!outputType) {
        return input;
      }
      exports.checkSupport(outputType);
      var inputType = exports.getTypeOf(input);
      var result = transform[inputType][outputType](input);
      return result;
    };
    exports.resolve = function(path) {
      var parts = path.split("/");
      var result = [];
      for (var index = 0; index < parts.length; index++) {
        var part = parts[index];
        if (part === "." || part === "" && index !== 0 && index !== parts.length - 1) {
          continue;
        } else if (part === "..") {
          result.pop();
        } else {
          result.push(part);
        }
      }
      return result.join("/");
    };
    exports.getTypeOf = function(input) {
      if (typeof input === "string") {
        return "string";
      }
      if (Object.prototype.toString.call(input) === "[object Array]") {
        return "array";
      }
      if (support.nodebuffer && nodejsUtils.isBuffer(input)) {
        return "nodebuffer";
      }
      if (support.uint8array && input instanceof Uint8Array) {
        return "uint8array";
      }
      if (support.arraybuffer && input instanceof ArrayBuffer) {
        return "arraybuffer";
      }
    };
    exports.checkSupport = function(type) {
      var supported = support[type.toLowerCase()];
      if (!supported) {
        throw new Error(type + " is not supported by this platform");
      }
    };
    exports.MAX_VALUE_16BITS = 65535;
    exports.MAX_VALUE_32BITS = -1;
    exports.pretty = function(str) {
      var res = "", code, i;
      for (i = 0; i < (str || "").length; i++) {
        code = str.charCodeAt(i);
        res += "\\x" + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
      }
      return res;
    };
    exports.delay = function(callback, args, self2) {
      setImmediate(function() {
        callback.apply(self2 || null, args || []);
      });
    };
    exports.inherits = function(ctor, superCtor) {
      var Obj = function() {
      };
      Obj.prototype = superCtor.prototype;
      ctor.prototype = new Obj();
    };
    exports.extend = function() {
      var result = {}, i, attr;
      for (i = 0; i < arguments.length; i++) {
        for (attr in arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(arguments[i], attr) && typeof result[attr] === "undefined") {
            result[attr] = arguments[i][attr];
          }
        }
      }
      return result;
    };
    exports.prepareContent = function(name, inputData, isBinary, isOptimizedBinaryString, isBase64) {
      var promise = external.Promise.resolve(inputData).then(function(data) {
        var isBlob = support.blob && (data instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(data)) !== -1);
        if (isBlob && typeof FileReader !== "undefined") {
          return new external.Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.onload = function(e) {
              resolve(e.target.result);
            };
            reader.onerror = function(e) {
              reject(e.target.error);
            };
            reader.readAsArrayBuffer(data);
          });
        } else {
          return data;
        }
      });
      return promise.then(function(data) {
        var dataType = exports.getTypeOf(data);
        if (!dataType) {
          return external.Promise.reject(
            new Error("Can't read the data of '" + name + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?")
          );
        }
        if (dataType === "arraybuffer") {
          data = exports.transformTo("uint8array", data);
        } else if (dataType === "string") {
          if (isBase64) {
            data = base64.decode(data);
          } else if (isBinary) {
            if (isOptimizedBinaryString !== true) {
              data = string2binary(data);
            }
          }
        }
        return data;
      });
    };
  }
});

// node_modules/jszip/lib/stream/GenericWorker.js
var require_GenericWorker = __commonJS({
  "node_modules/jszip/lib/stream/GenericWorker.js"(exports, module) {
    "use strict";
    function GenericWorker(name) {
      this.name = name || "default";
      this.streamInfo = {};
      this.generatedError = null;
      this.extraStreamInfo = {};
      this.isPaused = true;
      this.isFinished = false;
      this.isLocked = false;
      this._listeners = {
        "data": [],
        "end": [],
        "error": []
      };
      this.previous = null;
    }
    GenericWorker.prototype = {
      
      push: function(chunk) {
        this.emit("data", chunk);
      },
      
      end: function() {
        if (this.isFinished) {
          return false;
        }
        this.flush();
        try {
          this.emit("end");
          this.cleanUp();
          this.isFinished = true;
        } catch (e) {
          this.emit("error", e);
        }
        return true;
      },
      
      error: function(e) {
        if (this.isFinished) {
          return false;
        }
        if (this.isPaused) {
          this.generatedError = e;
        } else {
          this.isFinished = true;
          this.emit("error", e);
          if (this.previous) {
            this.previous.error(e);
          }
          this.cleanUp();
        }
        return true;
      },
      
      on: function(name, listener) {
        this._listeners[name].push(listener);
        return this;
      },
      
      cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null;
        this._listeners = [];
      },
      
      emit: function(name, arg) {
        if (this._listeners[name]) {
          for (var i = 0; i < this._listeners[name].length; i++) {
            this._listeners[name][i].call(this, arg);
          }
        }
      },
      
      pipe: function(next) {
        return next.registerPrevious(this);
      },
      
      registerPrevious: function(previous) {
        if (this.isLocked) {
          throw new Error("The stream '" + this + "' has already been used.");
        }
        this.streamInfo = previous.streamInfo;
        this.mergeStreamInfo();
        this.previous = previous;
        var self2 = this;
        previous.on("data", function(chunk) {
          self2.processChunk(chunk);
        });
        previous.on("end", function() {
          self2.end();
        });
        previous.on("error", function(e) {
          self2.error(e);
        });
        return this;
      },
      
      pause: function() {
        if (this.isPaused || this.isFinished) {
          return false;
        }
        this.isPaused = true;
        if (this.previous) {
          this.previous.pause();
        }
        return true;
      },
      
      resume: function() {
        if (!this.isPaused || this.isFinished) {
          return false;
        }
        this.isPaused = false;
        var withError = false;
        if (this.generatedError) {
          this.error(this.generatedError);
          withError = true;
        }
        if (this.previous) {
          this.previous.resume();
        }
        return !withError;
      },
      
      flush: function() {
      },
      
      processChunk: function(chunk) {
        this.push(chunk);
      },
      
      withStreamInfo: function(key, value) {
        this.extraStreamInfo[key] = value;
        this.mergeStreamInfo();
        return this;
      },
      
      mergeStreamInfo: function() {
        for (var key in this.extraStreamInfo) {
          if (!Object.prototype.hasOwnProperty.call(this.extraStreamInfo, key)) {
            continue;
          }
          this.streamInfo[key] = this.extraStreamInfo[key];
        }
      },
      
      lock: function() {
        if (this.isLocked) {
          throw new Error("The stream '" + this + "' has already been used.");
        }
        this.isLocked = true;
        if (this.previous) {
          this.previous.lock();
        }
      },
      
      toString: function() {
        var me = "Worker " + this.name;
        if (this.previous) {
          return this.previous + " -> " + me;
        } else {
          return me;
        }
      }
    };
    module.exports = GenericWorker;
  }
});

// node_modules/jszip/lib/utf8.js
var require_utf8 = __commonJS({
  "node_modules/jszip/lib/utf8.js"(exports) {
    "use strict";
    var utils = require_utils();
    var support = require_support();
    var nodejsUtils = require_nodejsUtils();
    var GenericWorker = require_GenericWorker();
    var _utf8len = new Array(256);
    for (i = 0; i < 256; i++) {
      _utf8len[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
    }
    var i;
    _utf8len[254] = _utf8len[254] = 1;
    var string2buf = function(str) {
      var buf, c, c2, m_pos, i2, str_len = str.length, buf_len = 0;
      for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
      }
      if (support.uint8array) {
        buf = new Uint8Array(buf_len);
      } else {
        buf = new Array(buf_len);
      }
      for (i2 = 0, m_pos = 0; i2 < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        if (c < 128) {
          buf[i2++] = c;
        } else if (c < 2048) {
          buf[i2++] = 192 | c >>> 6;
          buf[i2++] = 128 | c & 63;
        } else if (c < 65536) {
          buf[i2++] = 224 | c >>> 12;
          buf[i2++] = 128 | c >>> 6 & 63;
          buf[i2++] = 128 | c & 63;
        } else {
          buf[i2++] = 240 | c >>> 18;
          buf[i2++] = 128 | c >>> 12 & 63;
          buf[i2++] = 128 | c >>> 6 & 63;
          buf[i2++] = 128 | c & 63;
        }
      }
      return buf;
    };
    var utf8border = function(buf, max) {
      var pos;
      max = max || buf.length;
      if (max > buf.length) {
        max = buf.length;
      }
      pos = max - 1;
      while (pos >= 0 && (buf[pos] & 192) === 128) {
        pos--;
      }
      if (pos < 0) {
        return max;
      }
      if (pos === 0) {
        return max;
      }
      return pos + _utf8len[buf[pos]] > max ? pos : max;
    };
    var buf2string = function(buf) {
      var i2, out, c, c_len;
      var len = buf.length;
      var utf16buf = new Array(len * 2);
      for (out = 0, i2 = 0; i2 < len; ) {
        c = buf[i2++];
        if (c < 128) {
          utf16buf[out++] = c;
          continue;
        }
        c_len = _utf8len[c];
        if (c_len > 4) {
          utf16buf[out++] = 65533;
          i2 += c_len - 1;
          continue;
        }
        c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
        while (c_len > 1 && i2 < len) {
          c = c << 6 | buf[i2++] & 63;
          c_len--;
        }
        if (c_len > 1) {
          utf16buf[out++] = 65533;
          continue;
        }
        if (c < 65536) {
          utf16buf[out++] = c;
        } else {
          c -= 65536;
          utf16buf[out++] = 55296 | c >> 10 & 1023;
          utf16buf[out++] = 56320 | c & 1023;
        }
      }
      if (utf16buf.length !== out) {
        if (utf16buf.subarray) {
          utf16buf = utf16buf.subarray(0, out);
        } else {
          utf16buf.length = out;
        }
      }
      return utils.applyFromCharCode(utf16buf);
    };
    exports.utf8encode = function utf8encode(str) {
      if (support.nodebuffer) {
        return nodejsUtils.newBufferFrom(str, "utf-8");
      }
      return string2buf(str);
    };
    exports.utf8decode = function utf8decode(buf) {
      if (support.nodebuffer) {
        return utils.transformTo("nodebuffer", buf).toString("utf-8");
      }
      buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);
      return buf2string(buf);
    };
    function Utf8DecodeWorker() {
      GenericWorker.call(this, "utf-8 decode");
      this.leftOver = null;
    }
    utils.inherits(Utf8DecodeWorker, GenericWorker);
    Utf8DecodeWorker.prototype.processChunk = function(chunk) {
      var data = utils.transformTo(support.uint8array ? "uint8array" : "array", chunk.data);
      if (this.leftOver && this.leftOver.length) {
        if (support.uint8array) {
          var previousData = data;
          data = new Uint8Array(previousData.length + this.leftOver.length);
          data.set(this.leftOver, 0);
          data.set(previousData, this.leftOver.length);
        } else {
          data = this.leftOver.concat(data);
        }
        this.leftOver = null;
      }
      var nextBoundary = utf8border(data);
      var usableData = data;
      if (nextBoundary !== data.length) {
        if (support.uint8array) {
          usableData = data.subarray(0, nextBoundary);
          this.leftOver = data.subarray(nextBoundary, data.length);
        } else {
          usableData = data.slice(0, nextBoundary);
          this.leftOver = data.slice(nextBoundary, data.length);
        }
      }
      this.push({
        data: exports.utf8decode(usableData),
        meta: chunk.meta
      });
    };
    Utf8DecodeWorker.prototype.flush = function() {
      if (this.leftOver && this.leftOver.length) {
        this.push({
          data: exports.utf8decode(this.leftOver),
          meta: {}
        });
        this.leftOver = null;
      }
    };
    exports.Utf8DecodeWorker = Utf8DecodeWorker;
    function Utf8EncodeWorker() {
      GenericWorker.call(this, "utf-8 encode");
    }
    utils.inherits(Utf8EncodeWorker, GenericWorker);
    Utf8EncodeWorker.prototype.processChunk = function(chunk) {
      this.push({
        data: exports.utf8encode(chunk.data),
        meta: chunk.meta
      });
    };
    exports.Utf8EncodeWorker = Utf8EncodeWorker;
  }
});

// node_modules/jszip/lib/stream/ConvertWorker.js
var require_ConvertWorker = __commonJS({
  "node_modules/jszip/lib/stream/ConvertWorker.js"(exports, module) {
    "use strict";
    var GenericWorker = require_GenericWorker();
    var utils = require_utils();
    function ConvertWorker(destType) {
      GenericWorker.call(this, "ConvertWorker to " + destType);
      this.destType = destType;
    }
    utils.inherits(ConvertWorker, GenericWorker);
    ConvertWorker.prototype.processChunk = function(chunk) {
      this.push({
        data: utils.transformTo(this.destType, chunk.data),
        meta: chunk.meta
      });
    };
    module.exports = ConvertWorker;
  }
});

// node_modules/jszip/lib/nodejs/NodejsStreamOutputAdapter.js
var require_NodejsStreamOutputAdapter = __commonJS({
  "node_modules/jszip/lib/nodejs/NodejsStreamOutputAdapter.js"(exports, module) {
    "use strict";
    var Readable = require_readable().Readable;
    var utils = require_utils();
    utils.inherits(NodejsStreamOutputAdapter, Readable);
    function NodejsStreamOutputAdapter(helper, options, updateCb) {
      Readable.call(this, options);
      this._helper = helper;
      var self2 = this;
      helper.on("data", function(data, meta) {
        if (!self2.push(data)) {
          self2._helper.pause();
        }
        if (updateCb) {
          updateCb(meta);
        }
      }).on("error", function(e) {
        self2.emit("error", e);
      }).on("end", function() {
        self2.push(null);
      });
    }
    NodejsStreamOutputAdapter.prototype._read = function() {
      this._helper.resume();
    };
    module.exports = NodejsStreamOutputAdapter;
  }
});

// node_modules/jszip/lib/stream/StreamHelper.js
var require_StreamHelper = __commonJS({
  "node_modules/jszip/lib/stream/StreamHelper.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var ConvertWorker = require_ConvertWorker();
    var GenericWorker = require_GenericWorker();
    var base64 = require_base64();
    var support = require_support();
    var external = require_external();
    var NodejsStreamOutputAdapter = null;
    if (support.nodestream) {
      try {
        NodejsStreamOutputAdapter = require_NodejsStreamOutputAdapter();
      } catch (e) {
      }
    }
    function transformZipOutput(type, content, mimeType) {
      switch (type) {
        case "blob":
          return utils.newBlob(utils.transformTo("arraybuffer", content), mimeType);
        case "base64":
          return base64.encode(content);
        default:
          return utils.transformTo(type, content);
      }
    }
    function concat2(type, dataArray) {
      var i, index = 0, res = null, totalLength = 0;
      for (i = 0; i < dataArray.length; i++) {
        totalLength += dataArray[i].length;
      }
      switch (type) {
        case "string":
          return dataArray.join("");
        case "array":
          return Array.prototype.concat.apply([], dataArray);
        case "uint8array":
          res = new Uint8Array(totalLength);
          for (i = 0; i < dataArray.length; i++) {
            res.set(dataArray[i], index);
            index += dataArray[i].length;
          }
          return res;
        case "nodebuffer":
          return Buffer.concat(dataArray);
        default:
          throw new Error("concat : unsupported type '" + type + "'");
      }
    }
    function accumulate(helper, updateCallback) {
      return new external.Promise(function(resolve, reject) {
        var dataArray = [];
        var chunkType = helper._internalType, resultType = helper._outputType, mimeType = helper._mimeType;
        helper.on("data", function(data, meta) {
          dataArray.push(data);
          if (updateCallback) {
            updateCallback(meta);
          }
        }).on("error", function(err) {
          dataArray = [];
          reject(err);
        }).on("end", function() {
          try {
            var result = transformZipOutput(resultType, concat2(chunkType, dataArray), mimeType);
            resolve(result);
          } catch (e) {
            reject(e);
          }
          dataArray = [];
        }).resume();
      });
    }
    function StreamHelper(worker, outputType, mimeType) {
      var internalType = outputType;
      switch (outputType) {
        case "blob":
        case "arraybuffer":
          internalType = "uint8array";
          break;
        case "base64":
          internalType = "string";
          break;
      }
      try {
        this._internalType = internalType;
        this._outputType = outputType;
        this._mimeType = mimeType;
        utils.checkSupport(internalType);
        this._worker = worker.pipe(new ConvertWorker(internalType));
        worker.lock();
      } catch (e) {
        this._worker = new GenericWorker("error");
        this._worker.error(e);
      }
    }
    StreamHelper.prototype = {
      
      accumulate: function(updateCb) {
        return accumulate(this, updateCb);
      },
      
      on: function(evt, fn) {
        var self2 = this;
        if (evt === "data") {
          this._worker.on(evt, function(chunk) {
            fn.call(self2, chunk.data, chunk.meta);
          });
        } else {
          this._worker.on(evt, function() {
            utils.delay(fn, arguments, self2);
          });
        }
        return this;
      },
      
      resume: function() {
        utils.delay(this._worker.resume, [], this._worker);
        return this;
      },
      
      pause: function() {
        this._worker.pause();
        return this;
      },
      
      toNodejsStream: function(updateCb) {
        utils.checkSupport("nodestream");
        if (this._outputType !== "nodebuffer") {
          throw new Error(this._outputType + " is not supported by this method");
        }
        return new NodejsStreamOutputAdapter(this, {
          objectMode: this._outputType !== "nodebuffer"
        }, updateCb);
      }
    };
    module.exports = StreamHelper;
  }
});

// node_modules/jszip/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/jszip/lib/defaults.js"(exports) {
    "use strict";
    exports.base64 = false;
    exports.binary = false;
    exports.dir = false;
    exports.createFolders = true;
    exports.date = null;
    exports.compression = null;
    exports.compressionOptions = null;
    exports.comment = null;
    exports.unixPermissions = null;
    exports.dosPermissions = null;
  }
});

// node_modules/jszip/lib/stream/DataWorker.js
var require_DataWorker = __commonJS({
  "node_modules/jszip/lib/stream/DataWorker.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var GenericWorker = require_GenericWorker();
    var DEFAULT_BLOCK_SIZE = 16 * 1024;
    function DataWorker(dataP) {
      GenericWorker.call(this, "DataWorker");
      var self2 = this;
      this.dataIsReady = false;
      this.index = 0;
      this.max = 0;
      this.data = null;
      this.type = "";
      this._tickScheduled = false;
      dataP.then(function(data) {
        self2.dataIsReady = true;
        self2.data = data;
        self2.max = data && data.length || 0;
        self2.type = utils.getTypeOf(data);
        if (!self2.isPaused) {
          self2._tickAndRepeat();
        }
      }, function(e) {
        self2.error(e);
      });
    }
    utils.inherits(DataWorker, GenericWorker);
    DataWorker.prototype.cleanUp = function() {
      GenericWorker.prototype.cleanUp.call(this);
      this.data = null;
    };
    DataWorker.prototype.resume = function() {
      if (!GenericWorker.prototype.resume.call(this)) {
        return false;
      }
      if (!this._tickScheduled && this.dataIsReady) {
        this._tickScheduled = true;
        utils.delay(this._tickAndRepeat, [], this);
      }
      return true;
    };
    DataWorker.prototype._tickAndRepeat = function() {
      this._tickScheduled = false;
      if (this.isPaused || this.isFinished) {
        return;
      }
      this._tick();
      if (!this.isFinished) {
        utils.delay(this._tickAndRepeat, [], this);
        this._tickScheduled = true;
      }
    };
    DataWorker.prototype._tick = function() {
      if (this.isPaused || this.isFinished) {
        return false;
      }
      var size = DEFAULT_BLOCK_SIZE;
      var data = null, nextIndex = Math.min(this.max, this.index + size);
      if (this.index >= this.max) {
        return this.end();
      } else {
        switch (this.type) {
          case "string":
            data = this.data.substring(this.index, nextIndex);
            break;
          case "uint8array":
            data = this.data.subarray(this.index, nextIndex);
            break;
          case "array":
          case "nodebuffer":
            data = this.data.slice(this.index, nextIndex);
            break;
        }
        this.index = nextIndex;
        return this.push({
          data,
          meta: {
            percent: this.max ? this.index / this.max * 100 : 0
          }
        });
      }
    };
    module.exports = DataWorker;
  }
});

// node_modules/jszip/lib/crc32.js
var require_crc32 = __commonJS({
  "node_modules/jszip/lib/crc32.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function makeTable() {
      var c, table = [];
      for (var n = 0; n < 256; n++) {
        c = n;
        for (var k = 0; k < 8; k++) {
          c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
        }
        table[n] = c;
      }
      return table;
    }
    var crcTable = makeTable();
    function crc32(crc, buf, len, pos) {
      var t = crcTable, end = pos + len;
      crc = crc ^ -1;
      for (var i = pos; i < end; i++) {
        crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
      }
      return crc ^ -1;
    }
    function crc32str(crc, str, len, pos) {
      var t = crcTable, end = pos + len;
      crc = crc ^ -1;
      for (var i = pos; i < end; i++) {
        crc = crc >>> 8 ^ t[(crc ^ str.charCodeAt(i)) & 255];
      }
      return crc ^ -1;
    }
    module.exports = function crc32wrapper(input, crc) {
      if (typeof input === "undefined" || !input.length) {
        return 0;
      }
      var isArray = utils.getTypeOf(input) !== "string";
      if (isArray) {
        return crc32(crc | 0, input, input.length, 0);
      } else {
        return crc32str(crc | 0, input, input.length, 0);
      }
    };
  }
});

// node_modules/jszip/lib/stream/Crc32Probe.js
var require_Crc32Probe = __commonJS({
  "node_modules/jszip/lib/stream/Crc32Probe.js"(exports, module) {
    "use strict";
    var GenericWorker = require_GenericWorker();
    var crc32 = require_crc32();
    var utils = require_utils();
    function Crc32Probe() {
      GenericWorker.call(this, "Crc32Probe");
      this.withStreamInfo("crc32", 0);
    }
    utils.inherits(Crc32Probe, GenericWorker);
    Crc32Probe.prototype.processChunk = function(chunk) {
      this.streamInfo.crc32 = crc32(chunk.data, this.streamInfo.crc32 || 0);
      this.push(chunk);
    };
    module.exports = Crc32Probe;
  }
});

// node_modules/jszip/lib/stream/DataLengthProbe.js
var require_DataLengthProbe = __commonJS({
  "node_modules/jszip/lib/stream/DataLengthProbe.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var GenericWorker = require_GenericWorker();
    function DataLengthProbe(propName) {
      GenericWorker.call(this, "DataLengthProbe for " + propName);
      this.propName = propName;
      this.withStreamInfo(propName, 0);
    }
    utils.inherits(DataLengthProbe, GenericWorker);
    DataLengthProbe.prototype.processChunk = function(chunk) {
      if (chunk) {
        var length = this.streamInfo[this.propName] || 0;
        this.streamInfo[this.propName] = length + chunk.data.length;
      }
      GenericWorker.prototype.processChunk.call(this, chunk);
    };
    module.exports = DataLengthProbe;
  }
});

// node_modules/jszip/lib/compressedObject.js
var require_compressedObject = __commonJS({
  "node_modules/jszip/lib/compressedObject.js"(exports, module) {
    "use strict";
    var external = require_external();
    var DataWorker = require_DataWorker();
    var Crc32Probe = require_Crc32Probe();
    var DataLengthProbe = require_DataLengthProbe();
    function CompressedObject(compressedSize, uncompressedSize, crc32, compression, data) {
      this.compressedSize = compressedSize;
      this.uncompressedSize = uncompressedSize;
      this.crc32 = crc32;
      this.compression = compression;
      this.compressedContent = data;
    }
    CompressedObject.prototype = {
      
      getContentWorker: function() {
        var worker = new DataWorker(external.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new DataLengthProbe("data_length"));
        var that = this;
        worker.on("end", function() {
          if (this.streamInfo["data_length"] !== that.uncompressedSize) {
            throw new Error("Bug : uncompressed data size mismatch");
          }
        });
        return worker;
      },
      
      getCompressedWorker: function() {
        return new DataWorker(external.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      }
    };
    CompressedObject.createWorkerFrom = function(uncompressedWorker, compression, compressionOptions) {
      return uncompressedWorker.pipe(new Crc32Probe()).pipe(new DataLengthProbe("uncompressedSize")).pipe(compression.compressWorker(compressionOptions)).pipe(new DataLengthProbe("compressedSize")).withStreamInfo("compression", compression);
    };
    module.exports = CompressedObject;
  }
});

// node_modules/jszip/lib/zipObject.js
var require_zipObject = __commonJS({
  "node_modules/jszip/lib/zipObject.js"(exports, module) {
    "use strict";
    var StreamHelper = require_StreamHelper();
    var DataWorker = require_DataWorker();
    var utf8 = require_utf8();
    var CompressedObject = require_compressedObject();
    var GenericWorker = require_GenericWorker();
    var ZipObject = function(name, data, options) {
      this.name = name;
      this.dir = options.dir;
      this.date = options.date;
      this.comment = options.comment;
      this.unixPermissions = options.unixPermissions;
      this.dosPermissions = options.dosPermissions;
      this._data = data;
      this._dataBinary = options.binary;
      this.options = {
        compression: options.compression,
        compressionOptions: options.compressionOptions
      };
    };
    ZipObject.prototype = {
      
      internalStream: function(type) {
        var result = null, outputType = "string";
        try {
          if (!type) {
            throw new Error("No output type specified.");
          }
          outputType = type.toLowerCase();
          var askUnicodeString = outputType === "string" || outputType === "text";
          if (outputType === "binarystring" || outputType === "text") {
            outputType = "string";
          }
          result = this._decompressWorker();
          var isUnicodeString = !this._dataBinary;
          if (isUnicodeString && !askUnicodeString) {
            result = result.pipe(new utf8.Utf8EncodeWorker());
          }
          if (!isUnicodeString && askUnicodeString) {
            result = result.pipe(new utf8.Utf8DecodeWorker());
          }
        } catch (e) {
          result = new GenericWorker("error");
          result.error(e);
        }
        return new StreamHelper(result, outputType, "");
      },
      
      async: function(type, onUpdate) {
        return this.internalStream(type).accumulate(onUpdate);
      },
      
      nodeStream: function(type, onUpdate) {
        return this.internalStream(type || "nodebuffer").toNodejsStream(onUpdate);
      },
      
      _compressWorker: function(compression, compressionOptions) {
        if (this._data instanceof CompressedObject && this._data.compression.magic === compression.magic) {
          return this._data.getCompressedWorker();
        } else {
          var result = this._decompressWorker();
          if (!this._dataBinary) {
            result = result.pipe(new utf8.Utf8EncodeWorker());
          }
          return CompressedObject.createWorkerFrom(result, compression, compressionOptions);
        }
      },
      
      _decompressWorker: function() {
        if (this._data instanceof CompressedObject) {
          return this._data.getContentWorker();
        } else if (this._data instanceof GenericWorker) {
          return this._data;
        } else {
          return new DataWorker(this._data);
        }
      }
    };
    var removedMethods = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"];
    var removedFn = function() {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    };
    for (i = 0; i < removedMethods.length; i++) {
      ZipObject.prototype[removedMethods[i]] = removedFn;
    }
    var i;
    module.exports = ZipObject;
  }
});

// node_modules/pako/lib/utils/common.js
var require_common = __commonJS({
  "node_modules/pako/lib/utils/common.js"(exports) {
    "use strict";
    var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
    function _has(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    exports.assign = function(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      while (sources.length) {
        var source = sources.shift();
        if (!source) {
          continue;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be non-object");
        }
        for (var p in source) {
          if (_has(source, p)) {
            obj[p] = source[p];
          }
        }
      }
      return obj;
    };
    exports.shrinkBuf = function(buf, size) {
      if (buf.length === size) {
        return buf;
      }
      if (buf.subarray) {
        return buf.subarray(0, size);
      }
      buf.length = size;
      return buf;
    };
    var fnTyped = {
      arraySet: function(dest, src, src_offs, len, dest_offs) {
        if (src.subarray && dest.subarray) {
          dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
          return;
        }
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        var i, l, len, pos, chunk, result;
        len = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          len += chunks[i].length;
        }
        result = new Uint8Array(len);
        pos = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          chunk = chunks[i];
          result.set(chunk, pos);
          pos += chunk.length;
        }
        return result;
      }
    };
    var fnUntyped = {
      arraySet: function(dest, src, src_offs, len, dest_offs) {
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        return [].concat.apply([], chunks);
      }
    };
    exports.setTyped = function(on) {
      if (on) {
        exports.Buf8 = Uint8Array;
        exports.Buf16 = Uint16Array;
        exports.Buf32 = Int32Array;
        exports.assign(exports, fnTyped);
      } else {
        exports.Buf8 = Array;
        exports.Buf16 = Array;
        exports.Buf32 = Array;
        exports.assign(exports, fnUntyped);
      }
    };
    exports.setTyped(TYPED_OK);
  }
});

// node_modules/pako/lib/zlib/trees.js
var require_trees = __commonJS({
  "node_modules/pako/lib/zlib/trees.js"(exports) {
    "use strict";
    var utils = require_common();
    var Z_FIXED = 4;
    var Z_BINARY = 0;
    var Z_TEXT = 1;
    var Z_UNKNOWN = 2;
    function zero(buf) {
      var len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    var STORED_BLOCK = 0;
    var STATIC_TREES = 1;
    var DYN_TREES = 2;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var Buf_size = 16;
    var MAX_BL_BITS = 7;
    var END_BLOCK = 256;
    var REP_3_6 = 16;
    var REPZ_3_10 = 17;
    var REPZ_11_138 = 18;
    var extra_lbits = (
      
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
    );
    var extra_dbits = (
      
      [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
    );
    var extra_blbits = (
      
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
    );
    var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    var DIST_CODE_LEN = 512;
    var static_ltree = new Array((L_CODES + 2) * 2);
    zero(static_ltree);
    var static_dtree = new Array(D_CODES * 2);
    zero(static_dtree);
    var _dist_code = new Array(DIST_CODE_LEN);
    zero(_dist_code);
    var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
    zero(_length_code);
    var base_length = new Array(LENGTH_CODES);
    zero(base_length);
    var base_dist = new Array(D_CODES);
    zero(base_dist);
    function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
      this.static_tree = static_tree;
      this.extra_bits = extra_bits;
      this.extra_base = extra_base;
      this.elems = elems;
      this.max_length = max_length;
      this.has_stree = static_tree && static_tree.length;
    }
    var static_l_desc;
    var static_d_desc;
    var static_bl_desc;
    function TreeDesc(dyn_tree, stat_desc) {
      this.dyn_tree = dyn_tree;
      this.max_code = 0;
      this.stat_desc = stat_desc;
    }
    function d_code(dist) {
      return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
    }
    function put_short(s, w) {
      s.pending_buf[s.pending++] = w & 255;
      s.pending_buf[s.pending++] = w >>> 8 & 255;
    }
    function send_bits(s, value, length) {
      if (s.bi_valid > Buf_size - length) {
        s.bi_buf |= value << s.bi_valid & 65535;
        put_short(s, s.bi_buf);
        s.bi_buf = value >> Buf_size - s.bi_valid;
        s.bi_valid += length - Buf_size;
      } else {
        s.bi_buf |= value << s.bi_valid & 65535;
        s.bi_valid += length;
      }
    }
    function send_code(s, c, tree) {
      send_bits(
        s,
        tree[c * 2],
        tree[c * 2 + 1]
        
      );
    }
    function bi_reverse(code, len) {
      var res = 0;
      do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
      } while (--len > 0);
      return res >>> 1;
    }
    function bi_flush(s) {
      if (s.bi_valid === 16) {
        put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
      } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 255;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
      }
    }
    function gen_bitlen(s, desc) {
      var tree = desc.dyn_tree;
      var max_code = desc.max_code;
      var stree = desc.stat_desc.static_tree;
      var has_stree = desc.stat_desc.has_stree;
      var extra = desc.stat_desc.extra_bits;
      var base = desc.stat_desc.extra_base;
      var max_length = desc.stat_desc.max_length;
      var h;
      var n, m;
      var bits;
      var xbits;
      var f;
      var overflow = 0;
      for (bits = 0; bits <= MAX_BITS; bits++) {
        s.bl_count[bits] = 0;
      }
      tree[s.heap[s.heap_max] * 2 + 1] = 0;
      for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
        n = s.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
          bits = max_length;
          overflow++;
        }
        tree[n * 2 + 1] = bits;
        if (n > max_code) {
          continue;
        }
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base) {
          xbits = extra[n - base];
        }
        f = tree[n * 2];
        s.opt_len += f * (bits + xbits);
        if (has_stree) {
          s.static_len += f * (stree[n * 2 + 1] + xbits);
        }
      }
      if (overflow === 0) {
        return;
      }
      do {
        bits = max_length - 1;
        while (s.bl_count[bits] === 0) {
          bits--;
        }
        s.bl_count[bits]--;
        s.bl_count[bits + 1] += 2;
        s.bl_count[max_length]--;
        overflow -= 2;
      } while (overflow > 0);
      for (bits = max_length; bits !== 0; bits--) {
        n = s.bl_count[bits];
        while (n !== 0) {
          m = s.heap[--h];
          if (m > max_code) {
            continue;
          }
          if (tree[m * 2 + 1] !== bits) {
            s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
            tree[m * 2 + 1] = bits;
          }
          n--;
        }
      }
    }
    function gen_codes(tree, max_code, bl_count) {
      var next_code = new Array(MAX_BITS + 1);
      var code = 0;
      var bits;
      var n;
      for (bits = 1; bits <= MAX_BITS; bits++) {
        next_code[bits] = code = code + bl_count[bits - 1] << 1;
      }
      for (n = 0; n <= max_code; n++) {
        var len = tree[n * 2 + 1];
        if (len === 0) {
          continue;
        }
        tree[n * 2] = bi_reverse(next_code[len]++, len);
      }
    }
    function tr_static_init() {
      var n;
      var bits;
      var length;
      var code;
      var dist;
      var bl_count = new Array(MAX_BITS + 1);
      length = 0;
      for (code = 0; code < LENGTH_CODES - 1; code++) {
        base_length[code] = length;
        for (n = 0; n < 1 << extra_lbits[code]; n++) {
          _length_code[length++] = code;
        }
      }
      _length_code[length - 1] = code;
      dist = 0;
      for (code = 0; code < 16; code++) {
        base_dist[code] = dist;
        for (n = 0; n < 1 << extra_dbits[code]; n++) {
          _dist_code[dist++] = code;
        }
      }
      dist >>= 7;
      for (; code < D_CODES; code++) {
        base_dist[code] = dist << 7;
        for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
          _dist_code[256 + dist++] = code;
        }
      }
      for (bits = 0; bits <= MAX_BITS; bits++) {
        bl_count[bits] = 0;
      }
      n = 0;
      while (n <= 143) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      while (n <= 255) {
        static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
      }
      while (n <= 279) {
        static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
      }
      while (n <= 287) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      gen_codes(static_ltree, L_CODES + 1, bl_count);
      for (n = 0; n < D_CODES; n++) {
        static_dtree[n * 2 + 1] = 5;
        static_dtree[n * 2] = bi_reverse(n, 5);
      }
      static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
      static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
      static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
    }
    function init_block(s) {
      var n;
      for (n = 0; n < L_CODES; n++) {
        s.dyn_ltree[n * 2] = 0;
      }
      for (n = 0; n < D_CODES; n++) {
        s.dyn_dtree[n * 2] = 0;
      }
      for (n = 0; n < BL_CODES; n++) {
        s.bl_tree[n * 2] = 0;
      }
      s.dyn_ltree[END_BLOCK * 2] = 1;
      s.opt_len = s.static_len = 0;
      s.last_lit = s.matches = 0;
    }
    function bi_windup(s) {
      if (s.bi_valid > 8) {
        put_short(s, s.bi_buf);
      } else if (s.bi_valid > 0) {
        s.pending_buf[s.pending++] = s.bi_buf;
      }
      s.bi_buf = 0;
      s.bi_valid = 0;
    }
    function copy_block(s, buf, len, header) {
      bi_windup(s);
      if (header) {
        put_short(s, len);
        put_short(s, ~len);
      }
      utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
      s.pending += len;
    }
    function smaller(tree, n, m, depth) {
      var _n2 = n * 2;
      var _m2 = m * 2;
      return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
    }
    function pqdownheap(s, tree, k) {
      var v = s.heap[k];
      var j = k << 1;
      while (j <= s.heap_len) {
        if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
          j++;
        }
        if (smaller(tree, v, s.heap[j], s.depth)) {
          break;
        }
        s.heap[k] = s.heap[j];
        k = j;
        j <<= 1;
      }
      s.heap[k] = v;
    }
    function compress_block(s, ltree, dtree) {
      var dist;
      var lc;
      var lx = 0;
      var code;
      var extra;
      if (s.last_lit !== 0) {
        do {
          dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
          lc = s.pending_buf[s.l_buf + lx];
          lx++;
          if (dist === 0) {
            send_code(s, lc, ltree);
          } else {
            code = _length_code[lc];
            send_code(s, code + LITERALS + 1, ltree);
            extra = extra_lbits[code];
            if (extra !== 0) {
              lc -= base_length[code];
              send_bits(s, lc, extra);
            }
            dist--;
            code = d_code(dist);
            send_code(s, code, dtree);
            extra = extra_dbits[code];
            if (extra !== 0) {
              dist -= base_dist[code];
              send_bits(s, dist, extra);
            }
          }
        } while (lx < s.last_lit);
      }
      send_code(s, END_BLOCK, ltree);
    }
    function build_tree(s, desc) {
      var tree = desc.dyn_tree;
      var stree = desc.stat_desc.static_tree;
      var has_stree = desc.stat_desc.has_stree;
      var elems = desc.stat_desc.elems;
      var n, m;
      var max_code = -1;
      var node;
      s.heap_len = 0;
      s.heap_max = HEAP_SIZE;
      for (n = 0; n < elems; n++) {
        if (tree[n * 2] !== 0) {
          s.heap[++s.heap_len] = max_code = n;
          s.depth[n] = 0;
        } else {
          tree[n * 2 + 1] = 0;
        }
      }
      while (s.heap_len < 2) {
        node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s.depth[node] = 0;
        s.opt_len--;
        if (has_stree) {
          s.static_len -= stree[node * 2 + 1];
        }
      }
      desc.max_code = max_code;
      for (n = s.heap_len >> 1; n >= 1; n--) {
        pqdownheap(s, tree, n);
      }
      node = elems;
      do {
        n = s.heap[
          1
          
        ];
        s.heap[
          1
          
        ] = s.heap[s.heap_len--];
        pqdownheap(
          s,
          tree,
          1
          
        );
        m = s.heap[
          1
          
        ];
        s.heap[--s.heap_max] = n;
        s.heap[--s.heap_max] = m;
        tree[node * 2] = tree[n * 2] + tree[m * 2];
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n * 2 + 1] = tree[m * 2 + 1] = node;
        s.heap[
          1
          
        ] = node++;
        pqdownheap(
          s,
          tree,
          1
          
        );
      } while (s.heap_len >= 2);
      s.heap[--s.heap_max] = s.heap[
        1
        
      ];
      gen_bitlen(s, desc);
      gen_codes(tree, max_code, s.bl_count);
    }
    function scan_tree(s, tree, max_code) {
      var n;
      var prevlen = -1;
      var curlen;
      var nextlen = tree[0 * 2 + 1];
      var count = 0;
      var max_count = 7;
      var min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      tree[(max_code + 1) * 2 + 1] = 65535;
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count < max_count && curlen === nextlen) {
          continue;
        } else if (count < min_count) {
          s.bl_tree[curlen * 2] += count;
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            s.bl_tree[curlen * 2]++;
          }
          s.bl_tree[REP_3_6 * 2]++;
        } else if (count <= 10) {
          s.bl_tree[REPZ_3_10 * 2]++;
        } else {
          s.bl_tree[REPZ_11_138 * 2]++;
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }
    function send_tree(s, tree, max_code) {
      var n;
      var prevlen = -1;
      var curlen;
      var nextlen = tree[0 * 2 + 1];
      var count = 0;
      var max_count = 7;
      var min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count < max_count && curlen === nextlen) {
          continue;
        } else if (count < min_count) {
          do {
            send_code(s, curlen, s.bl_tree);
          } while (--count !== 0);
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            send_code(s, curlen, s.bl_tree);
            count--;
          }
          send_code(s, REP_3_6, s.bl_tree);
          send_bits(s, count - 3, 2);
        } else if (count <= 10) {
          send_code(s, REPZ_3_10, s.bl_tree);
          send_bits(s, count - 3, 3);
        } else {
          send_code(s, REPZ_11_138, s.bl_tree);
          send_bits(s, count - 11, 7);
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }
    function build_bl_tree(s) {
      var max_blindex;
      scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
      scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
      build_tree(s, s.bl_desc);
      for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
        if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
          break;
        }
      }
      s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
      return max_blindex;
    }
    function send_all_trees(s, lcodes, dcodes, blcodes) {
      var rank;
      send_bits(s, lcodes - 257, 5);
      send_bits(s, dcodes - 1, 5);
      send_bits(s, blcodes - 4, 4);
      for (rank = 0; rank < blcodes; rank++) {
        send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
      }
      send_tree(s, s.dyn_ltree, lcodes - 1);
      send_tree(s, s.dyn_dtree, dcodes - 1);
    }
    function detect_data_type(s) {
      var black_mask = 4093624447;
      var n;
      for (n = 0; n <= 31; n++, black_mask >>>= 1) {
        if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
          return Z_BINARY;
        }
      }
      if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
        return Z_TEXT;
      }
      for (n = 32; n < LITERALS; n++) {
        if (s.dyn_ltree[n * 2] !== 0) {
          return Z_TEXT;
        }
      }
      return Z_BINARY;
    }
    var static_init_done = false;
    function _tr_init(s) {
      if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
      }
      s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
      s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
      s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
      s.bi_buf = 0;
      s.bi_valid = 0;
      init_block(s);
    }
    function _tr_stored_block(s, buf, stored_len, last) {
      send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
      copy_block(s, buf, stored_len, true);
    }
    function _tr_align(s) {
      send_bits(s, STATIC_TREES << 1, 3);
      send_code(s, END_BLOCK, static_ltree);
      bi_flush(s);
    }
    function _tr_flush_block(s, buf, stored_len, last) {
      var opt_lenb, static_lenb;
      var max_blindex = 0;
      if (s.level > 0) {
        if (s.strm.data_type === Z_UNKNOWN) {
          s.strm.data_type = detect_data_type(s);
        }
        build_tree(s, s.l_desc);
        build_tree(s, s.d_desc);
        max_blindex = build_bl_tree(s);
        opt_lenb = s.opt_len + 3 + 7 >>> 3;
        static_lenb = s.static_len + 3 + 7 >>> 3;
        if (static_lenb <= opt_lenb) {
          opt_lenb = static_lenb;
        }
      } else {
        opt_lenb = static_lenb = stored_len + 5;
      }
      if (stored_len + 4 <= opt_lenb && buf !== -1) {
        _tr_stored_block(s, buf, stored_len, last);
      } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
        send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
        compress_block(s, static_ltree, static_dtree);
      } else {
        send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
        send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s, s.dyn_ltree, s.dyn_dtree);
      }
      init_block(s);
      if (last) {
        bi_windup(s);
      }
    }
    function _tr_tally(s, dist, lc) {
      s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 255;
      s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 255;
      s.pending_buf[s.l_buf + s.last_lit] = lc & 255;
      s.last_lit++;
      if (dist === 0) {
        s.dyn_ltree[lc * 2]++;
      } else {
        s.matches++;
        dist--;
        s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
        s.dyn_dtree[d_code(dist) * 2]++;
      }
      return s.last_lit === s.lit_bufsize - 1;
    }
    exports._tr_init = _tr_init;
    exports._tr_stored_block = _tr_stored_block;
    exports._tr_flush_block = _tr_flush_block;
    exports._tr_tally = _tr_tally;
    exports._tr_align = _tr_align;
  }
});

// node_modules/pako/lib/zlib/adler32.js
var require_adler32 = __commonJS({
  "node_modules/pako/lib/zlib/adler32.js"(exports, module) {
    "use strict";
    function adler32(adler, buf, len, pos) {
      var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
      while (len !== 0) {
        n = len > 2e3 ? 2e3 : len;
        len -= n;
        do {
          s1 = s1 + buf[pos++] | 0;
          s2 = s2 + s1 | 0;
        } while (--n);
        s1 %= 65521;
        s2 %= 65521;
      }
      return s1 | s2 << 16 | 0;
    }
    module.exports = adler32;
  }
});

// node_modules/pako/lib/zlib/crc32.js
var require_crc322 = __commonJS({
  "node_modules/pako/lib/zlib/crc32.js"(exports, module) {
    "use strict";
    function makeTable() {
      var c, table = [];
      for (var n = 0; n < 256; n++) {
        c = n;
        for (var k = 0; k < 8; k++) {
          c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
        }
        table[n] = c;
      }
      return table;
    }
    var crcTable = makeTable();
    function crc32(crc, buf, len, pos) {
      var t = crcTable, end = pos + len;
      crc ^= -1;
      for (var i = pos; i < end; i++) {
        crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
      }
      return crc ^ -1;
    }
    module.exports = crc32;
  }
});

// node_modules/pako/lib/zlib/messages.js
var require_messages = __commonJS({
  "node_modules/pako/lib/zlib/messages.js"(exports, module) {
    "use strict";
    module.exports = {
      2: "need dictionary",
      
      1: "stream end",
      
      0: "",
      
      "-1": "file error",
      
      "-2": "stream error",
      
      "-3": "data error",
      
      "-4": "insufficient memory",
      
      "-5": "buffer error",
      
      "-6": "incompatible version"
      
    };
  }
});

// node_modules/pako/lib/zlib/deflate.js
var require_deflate = __commonJS({
  "node_modules/pako/lib/zlib/deflate.js"(exports) {
    "use strict";
    var utils = require_common();
    var trees = require_trees();
    var adler32 = require_adler32();
    var crc32 = require_crc322();
    var msg = require_messages();
    var Z_NO_FLUSH = 0;
    var Z_PARTIAL_FLUSH = 1;
    var Z_FULL_FLUSH = 3;
    var Z_FINISH = 4;
    var Z_BLOCK = 5;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_STREAM_ERROR = -2;
    var Z_DATA_ERROR = -3;
    var Z_BUF_ERROR = -5;
    var Z_DEFAULT_COMPRESSION = -1;
    var Z_FILTERED = 1;
    var Z_HUFFMAN_ONLY = 2;
    var Z_RLE = 3;
    var Z_FIXED = 4;
    var Z_DEFAULT_STRATEGY = 0;
    var Z_UNKNOWN = 2;
    var Z_DEFLATED = 8;
    var MAX_MEM_LEVEL = 9;
    var MAX_WBITS = 15;
    var DEF_MEM_LEVEL = 8;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
    var PRESET_DICT = 32;
    var INIT_STATE = 42;
    var EXTRA_STATE = 69;
    var NAME_STATE = 73;
    var COMMENT_STATE = 91;
    var HCRC_STATE = 103;
    var BUSY_STATE = 113;
    var FINISH_STATE = 666;
    var BS_NEED_MORE = 1;
    var BS_BLOCK_DONE = 2;
    var BS_FINISH_STARTED = 3;
    var BS_FINISH_DONE = 4;
    var OS_CODE = 3;
    function err(strm, errorCode) {
      strm.msg = msg[errorCode];
      return errorCode;
    }
    function rank(f) {
      return (f << 1) - (f > 4 ? 9 : 0);
    }
    function zero(buf) {
      var len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    function flush_pending(strm) {
      var s = strm.state;
      var len = s.pending;
      if (len > strm.avail_out) {
        len = strm.avail_out;
      }
      if (len === 0) {
        return;
      }
      utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
      strm.next_out += len;
      s.pending_out += len;
      strm.total_out += len;
      strm.avail_out -= len;
      s.pending -= len;
      if (s.pending === 0) {
        s.pending_out = 0;
      }
    }
    function flush_block_only(s, last) {
      trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
      s.block_start = s.strstart;
      flush_pending(s.strm);
    }
    function put_byte(s, b) {
      s.pending_buf[s.pending++] = b;
    }
    function putShortMSB(s, b) {
      s.pending_buf[s.pending++] = b >>> 8 & 255;
      s.pending_buf[s.pending++] = b & 255;
    }
    function read_buf(strm, buf, start, size) {
      var len = strm.avail_in;
      if (len > size) {
        len = size;
      }
      if (len === 0) {
        return 0;
      }
      strm.avail_in -= len;
      utils.arraySet(buf, strm.input, strm.next_in, len, start);
      if (strm.state.wrap === 1) {
        strm.adler = adler32(strm.adler, buf, len, start);
      } else if (strm.state.wrap === 2) {
        strm.adler = crc32(strm.adler, buf, len, start);
      }
      strm.next_in += len;
      strm.total_in += len;
      return len;
    }
    function longest_match(s, cur_match) {
      var chain_length = s.max_chain_length;
      var scan = s.strstart;
      var match;
      var len;
      var best_len = s.prev_length;
      var nice_match = s.nice_match;
      var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
      var _win = s.window;
      var wmask = s.w_mask;
      var prev = s.prev;
      var strend = s.strstart + MAX_MATCH;
      var scan_end1 = _win[scan + best_len - 1];
      var scan_end = _win[scan + best_len];
      if (s.prev_length >= s.good_match) {
        chain_length >>= 2;
      }
      if (nice_match > s.lookahead) {
        nice_match = s.lookahead;
      }
      do {
        match = cur_match;
        if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
          continue;
        }
        scan += 2;
        match++;
        do {
        } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
        if (len > best_len) {
          s.match_start = cur_match;
          best_len = len;
          if (len >= nice_match) {
            break;
          }
          scan_end1 = _win[scan + best_len - 1];
          scan_end = _win[scan + best_len];
        }
      } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
      if (best_len <= s.lookahead) {
        return best_len;
      }
      return s.lookahead;
    }
    function fill_window(s) {
      var _w_size = s.w_size;
      var p, n, m, more, str;
      do {
        more = s.window_size - s.lookahead - s.strstart;
        if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
          utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
          s.match_start -= _w_size;
          s.strstart -= _w_size;
          s.block_start -= _w_size;
          n = s.hash_size;
          p = n;
          do {
            m = s.head[--p];
            s.head[p] = m >= _w_size ? m - _w_size : 0;
          } while (--n);
          n = _w_size;
          p = n;
          do {
            m = s.prev[--p];
            s.prev[p] = m >= _w_size ? m - _w_size : 0;
          } while (--n);
          more += _w_size;
        }
        if (s.strm.avail_in === 0) {
          break;
        }
        n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
        if (s.lookahead + s.insert >= MIN_MATCH) {
          str = s.strstart - s.insert;
          s.ins_h = s.window[str];
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask;
          while (s.insert) {
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
            s.insert--;
            if (s.lookahead + s.insert < MIN_MATCH) {
              break;
            }
          }
        }
      } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
    }
    function deflate_stored(s, flush) {
      var max_block_size = 65535;
      if (max_block_size > s.pending_buf_size - 5) {
        max_block_size = s.pending_buf_size - 5;
      }
      for (; ; ) {
        if (s.lookahead <= 1) {
          fill_window(s);
          if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        s.strstart += s.lookahead;
        s.lookahead = 0;
        var max_start = s.block_start + max_block_size;
        if (s.strstart === 0 || s.strstart >= max_start) {
          s.lookahead = s.strstart - max_start;
          s.strstart = max_start;
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
        if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.strstart > s.block_start) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_NEED_MORE;
    }
    function deflate_fast(s, flush) {
      var hash_head;
      var bflush;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
          s.match_length = longest_match(s, hash_head);
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
            s.match_length--;
            do {
              s.strstart++;
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            } while (--s.match_length !== 0);
            s.strstart++;
          } else {
            s.strstart += s.match_length;
            s.match_length = 0;
            s.ins_h = s.window[s.strstart];
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
          }
        } else {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_slow(s, flush) {
      var hash_head;
      var bflush;
      var max_insert;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
          s.match_length = longest_match(s, hash_head);
          if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) {
            s.match_length = MIN_MATCH - 1;
          }
        }
        if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
          max_insert = s.strstart + s.lookahead - MIN_MATCH;
          bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
          s.lookahead -= s.prev_length - 1;
          s.prev_length -= 2;
          do {
            if (++s.strstart <= max_insert) {
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            }
          } while (--s.prev_length !== 0);
          s.match_available = 0;
          s.match_length = MIN_MATCH - 1;
          s.strstart++;
          if (bflush) {
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          }
        } else if (s.match_available) {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
          if (bflush) {
            flush_block_only(s, false);
          }
          s.strstart++;
          s.lookahead--;
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        } else {
          s.match_available = 1;
          s.strstart++;
          s.lookahead--;
        }
      }
      if (s.match_available) {
        bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
        s.match_available = 0;
      }
      s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_rle(s, flush) {
      var bflush;
      var prev;
      var scan, strend;
      var _win = s.window;
      for (; ; ) {
        if (s.lookahead <= MAX_MATCH) {
          fill_window(s);
          if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        s.match_length = 0;
        if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
          scan = s.strstart - 1;
          prev = _win[scan];
          if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
            strend = s.strstart + MAX_MATCH;
            do {
            } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
            s.match_length = MAX_MATCH - (strend - scan);
            if (s.match_length > s.lookahead) {
              s.match_length = s.lookahead;
            }
          }
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          s.strstart += s.match_length;
          s.match_length = 0;
        } else {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_huff(s, flush) {
      var bflush;
      for (; ; ) {
        if (s.lookahead === 0) {
          fill_window(s);
          if (s.lookahead === 0) {
            if (flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            break;
          }
        }
        s.match_length = 0;
        bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function Config(good_length, max_lazy, nice_length, max_chain, func) {
      this.good_length = good_length;
      this.max_lazy = max_lazy;
      this.nice_length = nice_length;
      this.max_chain = max_chain;
      this.func = func;
    }
    var configuration_table;
    configuration_table = [
      
      new Config(0, 0, 0, 0, deflate_stored),
      
      new Config(4, 4, 8, 4, deflate_fast),
      
      new Config(4, 5, 16, 8, deflate_fast),
      
      new Config(4, 6, 32, 32, deflate_fast),
      
      new Config(4, 4, 16, 16, deflate_slow),
      
      new Config(8, 16, 32, 32, deflate_slow),
      
      new Config(8, 16, 128, 128, deflate_slow),
      
      new Config(8, 32, 128, 256, deflate_slow),
      
      new Config(32, 128, 258, 1024, deflate_slow),
      
      new Config(32, 258, 258, 4096, deflate_slow)
      
    ];
    function lm_init(s) {
      s.window_size = 2 * s.w_size;
      zero(s.head);
      s.max_lazy_match = configuration_table[s.level].max_lazy;
      s.good_match = configuration_table[s.level].good_length;
      s.nice_match = configuration_table[s.level].nice_length;
      s.max_chain_length = configuration_table[s.level].max_chain;
      s.strstart = 0;
      s.block_start = 0;
      s.lookahead = 0;
      s.insert = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      s.ins_h = 0;
    }
    function DeflateState() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = Z_DEFLATED;
      this.last_flush = -1;
      this.w_size = 0;
      this.w_bits = 0;
      this.w_mask = 0;
      this.window = null;
      this.window_size = 0;
      this.prev = null;
      this.head = null;
      this.ins_h = 0;
      this.hash_size = 0;
      this.hash_bits = 0;
      this.hash_mask = 0;
      this.hash_shift = 0;
      this.block_start = 0;
      this.match_length = 0;
      this.prev_match = 0;
      this.match_available = 0;
      this.strstart = 0;
      this.match_start = 0;
      this.lookahead = 0;
      this.prev_length = 0;
      this.max_chain_length = 0;
      this.max_lazy_match = 0;
      this.level = 0;
      this.strategy = 0;
      this.good_match = 0;
      this.nice_match = 0;
      this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
      this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
      this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
      zero(this.dyn_ltree);
      zero(this.dyn_dtree);
      zero(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new utils.Buf16(MAX_BITS + 1);
      this.heap = new utils.Buf16(2 * L_CODES + 1);
      zero(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new utils.Buf16(2 * L_CODES + 1);
      zero(this.depth);
      this.l_buf = 0;
      this.lit_bufsize = 0;
      this.last_lit = 0;
      this.d_buf = 0;
      this.opt_len = 0;
      this.static_len = 0;
      this.matches = 0;
      this.insert = 0;
      this.bi_buf = 0;
      this.bi_valid = 0;
    }
    function deflateResetKeep(strm) {
      var s;
      if (!strm || !strm.state) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.total_in = strm.total_out = 0;
      strm.data_type = Z_UNKNOWN;
      s = strm.state;
      s.pending = 0;
      s.pending_out = 0;
      if (s.wrap < 0) {
        s.wrap = -s.wrap;
      }
      s.status = s.wrap ? INIT_STATE : BUSY_STATE;
      strm.adler = s.wrap === 2 ? 0 : 1;
      s.last_flush = Z_NO_FLUSH;
      trees._tr_init(s);
      return Z_OK;
    }
    function deflateReset(strm) {
      var ret = deflateResetKeep(strm);
      if (ret === Z_OK) {
        lm_init(strm.state);
      }
      return ret;
    }
    function deflateSetHeader(strm, head) {
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      if (strm.state.wrap !== 2) {
        return Z_STREAM_ERROR;
      }
      strm.state.gzhead = head;
      return Z_OK;
    }
    function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      var wrap = 1;
      if (level === Z_DEFAULT_COMPRESSION) {
        level = 6;
      }
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else if (windowBits > 15) {
        wrap = 2;
        windowBits -= 16;
      }
      if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
        return err(strm, Z_STREAM_ERROR);
      }
      if (windowBits === 8) {
        windowBits = 9;
      }
      var s = new DeflateState();
      strm.state = s;
      s.strm = strm;
      s.wrap = wrap;
      s.gzhead = null;
      s.w_bits = windowBits;
      s.w_size = 1 << s.w_bits;
      s.w_mask = s.w_size - 1;
      s.hash_bits = memLevel + 7;
      s.hash_size = 1 << s.hash_bits;
      s.hash_mask = s.hash_size - 1;
      s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
      s.window = new utils.Buf8(s.w_size * 2);
      s.head = new utils.Buf16(s.hash_size);
      s.prev = new utils.Buf16(s.w_size);
      s.lit_bufsize = 1 << memLevel + 6;
      s.pending_buf_size = s.lit_bufsize * 4;
      s.pending_buf = new utils.Buf8(s.pending_buf_size);
      s.d_buf = 1 * s.lit_bufsize;
      s.l_buf = (1 + 2) * s.lit_bufsize;
      s.level = level;
      s.strategy = strategy;
      s.method = method;
      return deflateReset(strm);
    }
    function deflateInit(strm, level) {
      return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
    }
    function deflate(strm, flush) {
      var old_flush, s;
      var beg, val;
      if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
        return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
      }
      s = strm.state;
      if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
        return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
      }
      s.strm = strm;
      old_flush = s.last_flush;
      s.last_flush = flush;
      if (s.status === INIT_STATE) {
        if (s.wrap === 2) {
          strm.adler = 0;
          put_byte(s, 31);
          put_byte(s, 139);
          put_byte(s, 8);
          if (!s.gzhead) {
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, OS_CODE);
            s.status = BUSY_STATE;
          } else {
            put_byte(
              s,
              (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16)
            );
            put_byte(s, s.gzhead.time & 255);
            put_byte(s, s.gzhead.time >> 8 & 255);
            put_byte(s, s.gzhead.time >> 16 & 255);
            put_byte(s, s.gzhead.time >> 24 & 255);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, s.gzhead.os & 255);
            if (s.gzhead.extra && s.gzhead.extra.length) {
              put_byte(s, s.gzhead.extra.length & 255);
              put_byte(s, s.gzhead.extra.length >> 8 & 255);
            }
            if (s.gzhead.hcrc) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
            }
            s.gzindex = 0;
            s.status = EXTRA_STATE;
          }
        } else {
          var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
          var level_flags = -1;
          if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
            level_flags = 0;
          } else if (s.level < 6) {
            level_flags = 1;
          } else if (s.level === 6) {
            level_flags = 2;
          } else {
            level_flags = 3;
          }
          header |= level_flags << 6;
          if (s.strstart !== 0) {
            header |= PRESET_DICT;
          }
          header += 31 - header % 31;
          s.status = BUSY_STATE;
          putShortMSB(s, header);
          if (s.strstart !== 0) {
            putShortMSB(s, strm.adler >>> 16);
            putShortMSB(s, strm.adler & 65535);
          }
          strm.adler = 1;
        }
      }
      if (s.status === EXTRA_STATE) {
        if (s.gzhead.extra) {
          beg = s.pending;
          while (s.gzindex < (s.gzhead.extra.length & 65535)) {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                break;
              }
            }
            put_byte(s, s.gzhead.extra[s.gzindex] & 255);
            s.gzindex++;
          }
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (s.gzindex === s.gzhead.extra.length) {
            s.gzindex = 0;
            s.status = NAME_STATE;
          }
        } else {
          s.status = NAME_STATE;
        }
      }
      if (s.status === NAME_STATE) {
        if (s.gzhead.name) {
          beg = s.pending;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            }
            if (s.gzindex < s.gzhead.name.length) {
              val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (val === 0) {
            s.gzindex = 0;
            s.status = COMMENT_STATE;
          }
        } else {
          s.status = COMMENT_STATE;
        }
      }
      if (s.status === COMMENT_STATE) {
        if (s.gzhead.comment) {
          beg = s.pending;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            }
            if (s.gzindex < s.gzhead.comment.length) {
              val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (val === 0) {
            s.status = HCRC_STATE;
          }
        } else {
          s.status = HCRC_STATE;
        }
      }
      if (s.status === HCRC_STATE) {
        if (s.gzhead.hcrc) {
          if (s.pending + 2 > s.pending_buf_size) {
            flush_pending(strm);
          }
          if (s.pending + 2 <= s.pending_buf_size) {
            put_byte(s, strm.adler & 255);
            put_byte(s, strm.adler >> 8 & 255);
            strm.adler = 0;
            s.status = BUSY_STATE;
          }
        } else {
          s.status = BUSY_STATE;
        }
      }
      if (s.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
        return err(strm, Z_BUF_ERROR);
      }
      if (s.status === FINISH_STATE && strm.avail_in !== 0) {
        return err(strm, Z_BUF_ERROR);
      }
      if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
        var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
          s.status = FINISH_STATE;
        }
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
          if (strm.avail_out === 0) {
            s.last_flush = -1;
          }
          return Z_OK;
        }
        if (bstate === BS_BLOCK_DONE) {
          if (flush === Z_PARTIAL_FLUSH) {
            trees._tr_align(s);
          } else if (flush !== Z_BLOCK) {
            trees._tr_stored_block(s, 0, 0, false);
            if (flush === Z_FULL_FLUSH) {
              zero(s.head);
              if (s.lookahead === 0) {
                s.strstart = 0;
                s.block_start = 0;
                s.insert = 0;
              }
            }
          }
          flush_pending(strm);
          if (strm.avail_out === 0) {
            s.last_flush = -1;
            return Z_OK;
          }
        }
      }
      if (flush !== Z_FINISH) {
        return Z_OK;
      }
      if (s.wrap <= 0) {
        return Z_STREAM_END;
      }
      if (s.wrap === 2) {
        put_byte(s, strm.adler & 255);
        put_byte(s, strm.adler >> 8 & 255);
        put_byte(s, strm.adler >> 16 & 255);
        put_byte(s, strm.adler >> 24 & 255);
        put_byte(s, strm.total_in & 255);
        put_byte(s, strm.total_in >> 8 & 255);
        put_byte(s, strm.total_in >> 16 & 255);
        put_byte(s, strm.total_in >> 24 & 255);
      } else {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 65535);
      }
      flush_pending(strm);
      if (s.wrap > 0) {
        s.wrap = -s.wrap;
      }
      return s.pending !== 0 ? Z_OK : Z_STREAM_END;
    }
    function deflateEnd(strm) {
      var status;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      status = strm.state.status;
      if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.state = null;
      return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
    }
    function deflateSetDictionary(strm, dictionary) {
      var dictLength = dictionary.length;
      var s;
      var str, n;
      var wrap;
      var avail;
      var next;
      var input;
      var tmpDict;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      s = strm.state;
      wrap = s.wrap;
      if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
        return Z_STREAM_ERROR;
      }
      if (wrap === 1) {
        strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
      }
      s.wrap = 0;
      if (dictLength >= s.w_size) {
        if (wrap === 0) {
          zero(s.head);
          s.strstart = 0;
          s.block_start = 0;
          s.insert = 0;
        }
        tmpDict = new utils.Buf8(s.w_size);
        utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
        dictionary = tmpDict;
        dictLength = s.w_size;
      }
      avail = strm.avail_in;
      next = strm.next_in;
      input = strm.input;
      strm.avail_in = dictLength;
      strm.next_in = 0;
      strm.input = dictionary;
      fill_window(s);
      while (s.lookahead >= MIN_MATCH) {
        str = s.strstart;
        n = s.lookahead - (MIN_MATCH - 1);
        do {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
          s.prev[str & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = str;
          str++;
        } while (--n);
        s.strstart = str;
        s.lookahead = MIN_MATCH - 1;
        fill_window(s);
      }
      s.strstart += s.lookahead;
      s.block_start = s.strstart;
      s.insert = s.lookahead;
      s.lookahead = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      strm.next_in = next;
      strm.input = input;
      strm.avail_in = avail;
      s.wrap = wrap;
      return Z_OK;
    }
    exports.deflateInit = deflateInit;
    exports.deflateInit2 = deflateInit2;
    exports.deflateReset = deflateReset;
    exports.deflateResetKeep = deflateResetKeep;
    exports.deflateSetHeader = deflateSetHeader;
    exports.deflate = deflate;
    exports.deflateEnd = deflateEnd;
    exports.deflateSetDictionary = deflateSetDictionary;
    exports.deflateInfo = "pako deflate (from Nodeca project)";
  }
});

// node_modules/pako/lib/utils/strings.js
var require_strings = __commonJS({
  "node_modules/pako/lib/utils/strings.js"(exports) {
    "use strict";
    var utils = require_common();
    var STR_APPLY_OK = true;
    var STR_APPLY_UIA_OK = true;
    try {
      String.fromCharCode.apply(null, [0]);
    } catch (__) {
      STR_APPLY_OK = false;
    }
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (__) {
      STR_APPLY_UIA_OK = false;
    }
    var _utf8len = new utils.Buf8(256);
    for (q = 0; q < 256; q++) {
      _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
    }
    var q;
    _utf8len[254] = _utf8len[254] = 1;
    exports.string2buf = function(str) {
      var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
      for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
      }
      buf = new utils.Buf8(buf_len);
      for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        if (c < 128) {
          buf[i++] = c;
        } else if (c < 2048) {
          buf[i++] = 192 | c >>> 6;
          buf[i++] = 128 | c & 63;
        } else if (c < 65536) {
          buf[i++] = 224 | c >>> 12;
          buf[i++] = 128 | c >>> 6 & 63;
          buf[i++] = 128 | c & 63;
        } else {
          buf[i++] = 240 | c >>> 18;
          buf[i++] = 128 | c >>> 12 & 63;
          buf[i++] = 128 | c >>> 6 & 63;
          buf[i++] = 128 | c & 63;
        }
      }
      return buf;
    };
    function buf2binstring(buf, len) {
      if (len < 65534) {
        if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
          return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
        }
      }
      var result = "";
      for (var i = 0; i < len; i++) {
        result += String.fromCharCode(buf[i]);
      }
      return result;
    }
    exports.buf2binstring = function(buf) {
      return buf2binstring(buf, buf.length);
    };
    exports.binstring2buf = function(str) {
      var buf = new utils.Buf8(str.length);
      for (var i = 0, len = buf.length; i < len; i++) {
        buf[i] = str.charCodeAt(i);
      }
      return buf;
    };
    exports.buf2string = function(buf, max) {
      var i, out, c, c_len;
      var len = max || buf.length;
      var utf16buf = new Array(len * 2);
      for (out = 0, i = 0; i < len; ) {
        c = buf[i++];
        if (c < 128) {
          utf16buf[out++] = c;
          continue;
        }
        c_len = _utf8len[c];
        if (c_len > 4) {
          utf16buf[out++] = 65533;
          i += c_len - 1;
          continue;
        }
        c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
        while (c_len > 1 && i < len) {
          c = c << 6 | buf[i++] & 63;
          c_len--;
        }
        if (c_len > 1) {
          utf16buf[out++] = 65533;
          continue;
        }
        if (c < 65536) {
          utf16buf[out++] = c;
        } else {
          c -= 65536;
          utf16buf[out++] = 55296 | c >> 10 & 1023;
          utf16buf[out++] = 56320 | c & 1023;
        }
      }
      return buf2binstring(utf16buf, out);
    };
    exports.utf8border = function(buf, max) {
      var pos;
      max = max || buf.length;
      if (max > buf.length) {
        max = buf.length;
      }
      pos = max - 1;
      while (pos >= 0 && (buf[pos] & 192) === 128) {
        pos--;
      }
      if (pos < 0) {
        return max;
      }
      if (pos === 0) {
        return max;
      }
      return pos + _utf8len[buf[pos]] > max ? pos : max;
    };
  }
});

// node_modules/pako/lib/zlib/zstream.js
var require_zstream = __commonJS({
  "node_modules/pako/lib/zlib/zstream.js"(exports, module) {
    "use strict";
    function ZStream() {
      this.input = null;
      this.next_in = 0;
      this.avail_in = 0;
      this.total_in = 0;
      this.output = null;
      this.next_out = 0;
      this.avail_out = 0;
      this.total_out = 0;
      this.msg = "";
      this.state = null;
      this.data_type = 2;
      this.adler = 0;
    }
    module.exports = ZStream;
  }
});

// node_modules/pako/lib/deflate.js
var require_deflate2 = __commonJS({
  "node_modules/pako/lib/deflate.js"(exports) {
    "use strict";
    var zlib_deflate = require_deflate();
    var utils = require_common();
    var strings = require_strings();
    var msg = require_messages();
    var ZStream = require_zstream();
    var toString = Object.prototype.toString;
    var Z_NO_FLUSH = 0;
    var Z_FINISH = 4;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_SYNC_FLUSH = 2;
    var Z_DEFAULT_COMPRESSION = -1;
    var Z_DEFAULT_STRATEGY = 0;
    var Z_DEFLATED = 8;
    function Deflate(options) {
      if (!(this instanceof Deflate)) return new Deflate(options);
      this.options = utils.assign({
        level: Z_DEFAULT_COMPRESSION,
        method: Z_DEFLATED,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Z_DEFAULT_STRATEGY,
        to: ""
      }, options || {});
      var opt = this.options;
      if (opt.raw && opt.windowBits > 0) {
        opt.windowBits = -opt.windowBits;
      } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
        opt.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      var status = zlib_deflate.deflateInit2(
        this.strm,
        opt.level,
        opt.method,
        opt.windowBits,
        opt.memLevel,
        opt.strategy
      );
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
      if (opt.header) {
        zlib_deflate.deflateSetHeader(this.strm, opt.header);
      }
      if (opt.dictionary) {
        var dict;
        if (typeof opt.dictionary === "string") {
          dict = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          dict = new Uint8Array(opt.dictionary);
        } else {
          dict = opt.dictionary;
        }
        status = zlib_deflate.deflateSetDictionary(this.strm, dict);
        if (status !== Z_OK) {
          throw new Error(msg[status]);
        }
        this._dict_set = true;
      }
    }
    Deflate.prototype.push = function(data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var status, _mode;
      if (this.ended) {
        return false;
      }
      _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
      if (typeof data === "string") {
        strm.input = strings.string2buf(data);
      } else if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      do {
        if (strm.avail_out === 0) {
          strm.output = new utils.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        status = zlib_deflate.deflate(strm, _mode);
        if (status !== Z_STREAM_END && status !== Z_OK) {
          this.onEnd(status);
          this.ended = true;
          return false;
        }
        if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
          if (this.options.to === "string") {
            this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
          } else {
            this.onData(utils.shrinkBuf(strm.output, strm.next_out));
          }
        }
      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
      if (_mode === Z_FINISH) {
        status = zlib_deflate.deflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === Z_OK;
      }
      if (_mode === Z_SYNC_FLUSH) {
        this.onEnd(Z_OK);
        strm.avail_out = 0;
        return true;
      }
      return true;
    };
    Deflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    Deflate.prototype.onEnd = function(status) {
      if (status === Z_OK) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    function deflate(input, options) {
      var deflator = new Deflate(options);
      deflator.push(input, true);
      if (deflator.err) {
        throw deflator.msg || msg[deflator.err];
      }
      return deflator.result;
    }
    function deflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return deflate(input, options);
    }
    function gzip(input, options) {
      options = options || {};
      options.gzip = true;
      return deflate(input, options);
    }
    exports.Deflate = Deflate;
    exports.deflate = deflate;
    exports.deflateRaw = deflateRaw;
    exports.gzip = gzip;
  }
});

// node_modules/pako/lib/zlib/inffast.js
var require_inffast = __commonJS({
  "node_modules/pako/lib/zlib/inffast.js"(exports, module) {
    "use strict";
    var BAD = 30;
    var TYPE = 12;
    module.exports = function inflate_fast(strm, start) {
      var state;
      var _in;
      var last;
      var _out;
      var beg;
      var end;
      var dmax;
      var wsize;
      var whave;
      var wnext;
      var s_window;
      var hold;
      var bits;
      var lcode;
      var dcode;
      var lmask;
      var dmask;
      var here;
      var op;
      var len;
      var dist;
      var from;
      var from_source;
      var input, output;
      state = strm.state;
      _in = strm.next_in;
      input = strm.input;
      last = _in + (strm.avail_in - 5);
      _out = strm.next_out;
      output = strm.output;
      beg = _out - (start - strm.avail_out);
      end = _out + (strm.avail_out - 257);
      dmax = state.dmax;
      wsize = state.wsize;
      whave = state.whave;
      wnext = state.wnext;
      s_window = state.window;
      hold = state.hold;
      bits = state.bits;
      lcode = state.lencode;
      dcode = state.distcode;
      lmask = (1 << state.lenbits) - 1;
      dmask = (1 << state.distbits) - 1;
      top:
        do {
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }
          here = lcode[hold & lmask];
          dolen:
            for (; ; ) {
              op = here >>> 24;
              hold >>>= op;
              bits -= op;
              op = here >>> 16 & 255;
              if (op === 0) {
                output[_out++] = here & 65535;
              } else if (op & 16) {
                len = here & 65535;
                op &= 15;
                if (op) {
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                  }
                  len += hold & (1 << op) - 1;
                  hold >>>= op;
                  bits -= op;
                }
                if (bits < 15) {
                  hold += input[_in++] << bits;
                  bits += 8;
                  hold += input[_in++] << bits;
                  bits += 8;
                }
                here = dcode[hold & dmask];
                dodist:
                  for (; ; ) {
                    op = here >>> 24;
                    hold >>>= op;
                    bits -= op;
                    op = here >>> 16 & 255;
                    if (op & 16) {
                      dist = here & 65535;
                      op &= 15;
                      if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                        if (bits < op) {
                          hold += input[_in++] << bits;
                          bits += 8;
                        }
                      }
                      dist += hold & (1 << op) - 1;
                      if (dist > dmax) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD;
                        break top;
                      }
                      hold >>>= op;
                      bits -= op;
                      op = _out - beg;
                      if (dist > op) {
                        op = dist - op;
                        if (op > whave) {
                          if (state.sane) {
                            strm.msg = "invalid distance too far back";
                            state.mode = BAD;
                            break top;
                          }
                        }
                        from = 0;
                        from_source = s_window;
                        if (wnext === 0) {
                          from += wsize - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        } else if (wnext < op) {
                          from += wsize + wnext - op;
                          op -= wnext;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = 0;
                            if (wnext < len) {
                              op = wnext;
                              len -= op;
                              do {
                                output[_out++] = s_window[from++];
                              } while (--op);
                              from = _out - dist;
                              from_source = output;
                            }
                          }
                        } else {
                          from += wnext - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        }
                        while (len > 2) {
                          output[_out++] = from_source[from++];
                          output[_out++] = from_source[from++];
                          output[_out++] = from_source[from++];
                          len -= 3;
                        }
                        if (len) {
                          output[_out++] = from_source[from++];
                          if (len > 1) {
                            output[_out++] = from_source[from++];
                          }
                        }
                      } else {
                        from = _out - dist;
                        do {
                          output[_out++] = output[from++];
                          output[_out++] = output[from++];
                          output[_out++] = output[from++];
                          len -= 3;
                        } while (len > 2);
                        if (len) {
                          output[_out++] = output[from++];
                          if (len > 1) {
                            output[_out++] = output[from++];
                          }
                        }
                      }
                    } else if ((op & 64) === 0) {
                      here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                      continue dodist;
                    } else {
                      strm.msg = "invalid distance code";
                      state.mode = BAD;
                      break top;
                    }
                    break;
                  }
              } else if ((op & 64) === 0) {
                here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
                continue dolen;
              } else if (op & 32) {
                state.mode = TYPE;
                break top;
              } else {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break top;
              }
              break;
            }
        } while (_in < last && _out < end);
      len = bits >> 3;
      _in -= len;
      bits -= len << 3;
      hold &= (1 << bits) - 1;
      strm.next_in = _in;
      strm.next_out = _out;
      strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
      strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
      state.hold = hold;
      state.bits = bits;
      return;
    };
  }
});

// node_modules/pako/lib/zlib/inftrees.js
var require_inftrees = __commonJS({
  "node_modules/pako/lib/zlib/inftrees.js"(exports, module) {
    "use strict";
    var utils = require_common();
    var MAXBITS = 15;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var lbase = [
      
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      0,
      0
    ];
    var lext = [
      
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      17,
      17,
      17,
      17,
      18,
      18,
      18,
      18,
      19,
      19,
      19,
      19,
      20,
      20,
      20,
      20,
      21,
      21,
      21,
      21,
      16,
      72,
      78
    ];
    var dbase = [
      
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      13,
      17,
      25,
      33,
      49,
      65,
      97,
      129,
      193,
      257,
      385,
      513,
      769,
      1025,
      1537,
      2049,
      3073,
      4097,
      6145,
      8193,
      12289,
      16385,
      24577,
      0,
      0
    ];
    var dext = [
      
      16,
      16,
      16,
      16,
      17,
      17,
      18,
      18,
      19,
      19,
      20,
      20,
      21,
      21,
      22,
      22,
      23,
      23,
      24,
      24,
      25,
      25,
      26,
      26,
      27,
      27,
      28,
      28,
      29,
      29,
      64,
      64
    ];
    module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
      var bits = opts.bits;
      var len = 0;
      var sym = 0;
      var min = 0, max = 0;
      var root = 0;
      var curr = 0;
      var drop = 0;
      var left = 0;
      var used = 0;
      var huff = 0;
      var incr;
      var fill;
      var low;
      var mask;
      var next;
      var base = null;
      var base_index = 0;
      var end;
      var count = new utils.Buf16(MAXBITS + 1);
      var offs = new utils.Buf16(MAXBITS + 1);
      var extra = null;
      var extra_index = 0;
      var here_bits, here_op, here_val;
      for (len = 0; len <= MAXBITS; len++) {
        count[len] = 0;
      }
      for (sym = 0; sym < codes; sym++) {
        count[lens[lens_index + sym]]++;
      }
      root = bits;
      for (max = MAXBITS; max >= 1; max--) {
        if (count[max] !== 0) {
          break;
        }
      }
      if (root > max) {
        root = max;
      }
      if (max === 0) {
        table[table_index++] = 1 << 24 | 64 << 16 | 0;
        table[table_index++] = 1 << 24 | 64 << 16 | 0;
        opts.bits = 1;
        return 0;
      }
      for (min = 1; min < max; min++) {
        if (count[min] !== 0) {
          break;
        }
      }
      if (root < min) {
        root = min;
      }
      left = 1;
      for (len = 1; len <= MAXBITS; len++) {
        left <<= 1;
        left -= count[len];
        if (left < 0) {
          return -1;
        }
      }
      if (left > 0 && (type === CODES || max !== 1)) {
        return -1;
      }
      offs[1] = 0;
      for (len = 1; len < MAXBITS; len++) {
        offs[len + 1] = offs[len] + count[len];
      }
      for (sym = 0; sym < codes; sym++) {
        if (lens[lens_index + sym] !== 0) {
          work[offs[lens[lens_index + sym]]++] = sym;
        }
      }
      if (type === CODES) {
        base = extra = work;
        end = 19;
      } else if (type === LENS) {
        base = lbase;
        base_index -= 257;
        extra = lext;
        extra_index -= 257;
        end = 256;
      } else {
        base = dbase;
        extra = dext;
        end = -1;
      }
      huff = 0;
      sym = 0;
      len = min;
      next = table_index;
      curr = root;
      drop = 0;
      low = -1;
      used = 1 << root;
      mask = used - 1;
      if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
        return 1;
      }
      for (; ; ) {
        here_bits = len - drop;
        if (work[sym] < end) {
          here_op = 0;
          here_val = work[sym];
        } else if (work[sym] > end) {
          here_op = extra[extra_index + work[sym]];
          here_val = base[base_index + work[sym]];
        } else {
          here_op = 32 + 64;
          here_val = 0;
        }
        incr = 1 << len - drop;
        fill = 1 << curr;
        min = fill;
        do {
          fill -= incr;
          table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
        } while (fill !== 0);
        incr = 1 << len - 1;
        while (huff & incr) {
          incr >>= 1;
        }
        if (incr !== 0) {
          huff &= incr - 1;
          huff += incr;
        } else {
          huff = 0;
        }
        sym++;
        if (--count[len] === 0) {
          if (len === max) {
            break;
          }
          len = lens[lens_index + work[sym]];
        }
        if (len > root && (huff & mask) !== low) {
          if (drop === 0) {
            drop = root;
          }
          next += min;
          curr = len - drop;
          left = 1 << curr;
          while (curr + drop < max) {
            left -= count[curr + drop];
            if (left <= 0) {
              break;
            }
            curr++;
            left <<= 1;
          }
          used += 1 << curr;
          if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
            return 1;
          }
          low = huff & mask;
          table[low] = root << 24 | curr << 16 | next - table_index | 0;
        }
      }
      if (huff !== 0) {
        table[next + huff] = len - drop << 24 | 64 << 16 | 0;
      }
      opts.bits = root;
      return 0;
    };
  }
});

// node_modules/pako/lib/zlib/inflate.js
var require_inflate = __commonJS({
  "node_modules/pako/lib/zlib/inflate.js"(exports) {
    "use strict";
    var utils = require_common();
    var adler32 = require_adler32();
    var crc32 = require_crc322();
    var inflate_fast = require_inffast();
    var inflate_table = require_inftrees();
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var Z_FINISH = 4;
    var Z_BLOCK = 5;
    var Z_TREES = 6;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_NEED_DICT = 2;
    var Z_STREAM_ERROR = -2;
    var Z_DATA_ERROR = -3;
    var Z_MEM_ERROR = -4;
    var Z_BUF_ERROR = -5;
    var Z_DEFLATED = 8;
    var HEAD = 1;
    var FLAGS = 2;
    var TIME = 3;
    var OS = 4;
    var EXLEN = 5;
    var EXTRA = 6;
    var NAME = 7;
    var COMMENT = 8;
    var HCRC = 9;
    var DICTID = 10;
    var DICT = 11;
    var TYPE = 12;
    var TYPEDO = 13;
    var STORED = 14;
    var COPY_ = 15;
    var COPY = 16;
    var TABLE = 17;
    var LENLENS = 18;
    var CODELENS = 19;
    var LEN_ = 20;
    var LEN = 21;
    var LENEXT = 22;
    var DIST = 23;
    var DISTEXT = 24;
    var MATCH = 25;
    var LIT = 26;
    var CHECK = 27;
    var LENGTH = 28;
    var DONE = 29;
    var BAD = 30;
    var MEM = 31;
    var SYNC = 32;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var MAX_WBITS = 15;
    var DEF_WBITS = MAX_WBITS;
    function zswap32(q) {
      return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
    }
    function InflateState() {
      this.mode = 0;
      this.last = false;
      this.wrap = 0;
      this.havedict = false;
      this.flags = 0;
      this.dmax = 0;
      this.check = 0;
      this.total = 0;
      this.head = null;
      this.wbits = 0;
      this.wsize = 0;
      this.whave = 0;
      this.wnext = 0;
      this.window = null;
      this.hold = 0;
      this.bits = 0;
      this.length = 0;
      this.offset = 0;
      this.extra = 0;
      this.lencode = null;
      this.distcode = null;
      this.lenbits = 0;
      this.distbits = 0;
      this.ncode = 0;
      this.nlen = 0;
      this.ndist = 0;
      this.have = 0;
      this.next = null;
      this.lens = new utils.Buf16(320);
      this.work = new utils.Buf16(288);
      this.lendyn = null;
      this.distdyn = null;
      this.sane = 0;
      this.back = 0;
      this.was = 0;
    }
    function inflateResetKeep(strm) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      strm.total_in = strm.total_out = state.total = 0;
      strm.msg = "";
      if (state.wrap) {
        strm.adler = state.wrap & 1;
      }
      state.mode = HEAD;
      state.last = 0;
      state.havedict = 0;
      state.dmax = 32768;
      state.head = null;
      state.hold = 0;
      state.bits = 0;
      state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
      state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
      state.sane = 1;
      state.back = -1;
      return Z_OK;
    }
    function inflateReset(strm) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      state.wsize = 0;
      state.whave = 0;
      state.wnext = 0;
      return inflateResetKeep(strm);
    }
    function inflateReset2(strm, windowBits) {
      var wrap;
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else {
        wrap = (windowBits >> 4) + 1;
        if (windowBits < 48) {
          windowBits &= 15;
        }
      }
      if (windowBits && (windowBits < 8 || windowBits > 15)) {
        return Z_STREAM_ERROR;
      }
      if (state.window !== null && state.wbits !== windowBits) {
        state.window = null;
      }
      state.wrap = wrap;
      state.wbits = windowBits;
      return inflateReset(strm);
    }
    function inflateInit2(strm, windowBits) {
      var ret;
      var state;
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      state = new InflateState();
      strm.state = state;
      state.window = null;
      ret = inflateReset2(strm, windowBits);
      if (ret !== Z_OK) {
        strm.state = null;
      }
      return ret;
    }
    function inflateInit(strm) {
      return inflateInit2(strm, DEF_WBITS);
    }
    var virgin = true;
    var lenfix;
    var distfix;
    function fixedtables(state) {
      if (virgin) {
        var sym;
        lenfix = new utils.Buf32(512);
        distfix = new utils.Buf32(32);
        sym = 0;
        while (sym < 144) {
          state.lens[sym++] = 8;
        }
        while (sym < 256) {
          state.lens[sym++] = 9;
        }
        while (sym < 280) {
          state.lens[sym++] = 7;
        }
        while (sym < 288) {
          state.lens[sym++] = 8;
        }
        inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
        sym = 0;
        while (sym < 32) {
          state.lens[sym++] = 5;
        }
        inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
        virgin = false;
      }
      state.lencode = lenfix;
      state.lenbits = 9;
      state.distcode = distfix;
      state.distbits = 5;
    }
    function updatewindow(strm, src, end, copy) {
      var dist;
      var state = strm.state;
      if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
        state.window = new utils.Buf8(state.wsize);
      }
      if (copy >= state.wsize) {
        utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
        state.wnext = 0;
        state.whave = state.wsize;
      } else {
        dist = state.wsize - state.wnext;
        if (dist > copy) {
          dist = copy;
        }
        utils.arraySet(state.window, src, end - copy, dist, state.wnext);
        copy -= dist;
        if (copy) {
          utils.arraySet(state.window, src, end - copy, copy, 0);
          state.wnext = copy;
          state.whave = state.wsize;
        } else {
          state.wnext += dist;
          if (state.wnext === state.wsize) {
            state.wnext = 0;
          }
          if (state.whave < state.wsize) {
            state.whave += dist;
          }
        }
      }
      return 0;
    }
    function inflate(strm, flush) {
      var state;
      var input, output;
      var next;
      var put;
      var have, left;
      var hold;
      var bits;
      var _in, _out;
      var copy;
      var from;
      var from_source;
      var here = 0;
      var here_bits, here_op, here_val;
      var last_bits, last_op, last_val;
      var len;
      var ret;
      var hbuf = new utils.Buf8(4);
      var opts;
      var n;
      var order = (
        
        [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
      );
      if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (state.mode === TYPE) {
        state.mode = TYPEDO;
      }
      put = strm.next_out;
      output = strm.output;
      left = strm.avail_out;
      next = strm.next_in;
      input = strm.input;
      have = strm.avail_in;
      hold = state.hold;
      bits = state.bits;
      _in = have;
      _out = left;
      ret = Z_OK;
      inf_leave:
        for (; ; ) {
          switch (state.mode) {
            case HEAD:
              if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
              }
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.wrap & 2 && hold === 35615) {
                state.check = 0;
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
                hold = 0;
                bits = 0;
                state.mode = FLAGS;
                break;
              }
              state.flags = 0;
              if (state.head) {
                state.head.done = false;
              }
              if (!(state.wrap & 1) || 
              (((hold & 255) << 8) + (hold >> 8)) % 31) {
                strm.msg = "incorrect header check";
                state.mode = BAD;
                break;
              }
              if ((hold & 15) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
              }
              hold >>>= 4;
              bits -= 4;
              len = (hold & 15) + 8;
              if (state.wbits === 0) {
                state.wbits = len;
              } else if (len > state.wbits) {
                strm.msg = "invalid window size";
                state.mode = BAD;
                break;
              }
              state.dmax = 1 << len;
              strm.adler = state.check = 1;
              state.mode = hold & 512 ? DICTID : TYPE;
              hold = 0;
              bits = 0;
              break;
            case FLAGS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.flags = hold;
              if ((state.flags & 255) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
              }
              if (state.flags & 57344) {
                strm.msg = "unknown header flags set";
                state.mode = BAD;
                break;
              }
              if (state.head) {
                state.head.text = hold >> 8 & 1;
              }
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = TIME;
            
            case TIME:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.head) {
                state.head.time = hold;
              }
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                hbuf[2] = hold >>> 16 & 255;
                hbuf[3] = hold >>> 24 & 255;
                state.check = crc32(state.check, hbuf, 4, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = OS;
            
            case OS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.head) {
                state.head.xflags = hold & 255;
                state.head.os = hold >> 8;
              }
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = EXLEN;
            
            case EXLEN:
              if (state.flags & 1024) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.length = hold;
                if (state.head) {
                  state.head.extra_len = hold;
                }
                if (state.flags & 512) {
                  hbuf[0] = hold & 255;
                  hbuf[1] = hold >>> 8 & 255;
                  state.check = crc32(state.check, hbuf, 2, 0);
                }
                hold = 0;
                bits = 0;
              } else if (state.head) {
                state.head.extra = null;
              }
              state.mode = EXTRA;
            
            case EXTRA:
              if (state.flags & 1024) {
                copy = state.length;
                if (copy > have) {
                  copy = have;
                }
                if (copy) {
                  if (state.head) {
                    len = state.head.extra_len - state.length;
                    if (!state.head.extra) {
                      state.head.extra = new Array(state.head.extra_len);
                    }
                    utils.arraySet(
                      state.head.extra,
                      input,
                      next,
                      // extra field is limited to 65536 bytes
                      // - no need for additional size check
                      copy,
                      
                      len
                    );
                  }
                  if (state.flags & 512) {
                    state.check = crc32(state.check, input, copy, next);
                  }
                  have -= copy;
                  next += copy;
                  state.length -= copy;
                }
                if (state.length) {
                  break inf_leave;
                }
              }
              state.length = 0;
              state.mode = NAME;
            
            case NAME:
              if (state.flags & 2048) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  if (state.head && len && state.length < 65536) {
                    state.head.name += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 512) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.name = null;
              }
              state.length = 0;
              state.mode = COMMENT;
            
            case COMMENT:
              if (state.flags & 4096) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  if (state.head && len && state.length < 65536) {
                    state.head.comment += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 512) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.comment = null;
              }
              state.mode = HCRC;
            
            case HCRC:
              if (state.flags & 512) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (hold !== (state.check & 65535)) {
                  strm.msg = "header crc mismatch";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
              }
              strm.adler = state.check = 0;
              state.mode = TYPE;
              break;
            case DICTID:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              strm.adler = state.check = zswap32(hold);
              hold = 0;
              bits = 0;
              state.mode = DICT;
            
            case DICT:
              if (state.havedict === 0) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                return Z_NEED_DICT;
              }
              strm.adler = state.check = 1;
              state.mode = TYPE;
            
            case TYPE:
              if (flush === Z_BLOCK || flush === Z_TREES) {
                break inf_leave;
              }
            
            case TYPEDO:
              if (state.last) {
                hold >>>= bits & 7;
                bits -= bits & 7;
                state.mode = CHECK;
                break;
              }
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.last = hold & 1;
              hold >>>= 1;
              bits -= 1;
              switch (hold & 3) {
                case 0:
                  state.mode = STORED;
                  break;
                case 1:
                  fixedtables(state);
                  state.mode = LEN_;
                  if (flush === Z_TREES) {
                    hold >>>= 2;
                    bits -= 2;
                    break inf_leave;
                  }
                  break;
                case 2:
                  state.mode = TABLE;
                  break;
                case 3:
                  strm.msg = "invalid block type";
                  state.mode = BAD;
              }
              hold >>>= 2;
              bits -= 2;
              break;
            case STORED:
              hold >>>= bits & 7;
              bits -= bits & 7;
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
                strm.msg = "invalid stored block lengths";
                state.mode = BAD;
                break;
              }
              state.length = hold & 65535;
              hold = 0;
              bits = 0;
              state.mode = COPY_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            
            case COPY_:
              state.mode = COPY;
            
            case COPY:
              copy = state.length;
              if (copy) {
                if (copy > have) {
                  copy = have;
                }
                if (copy > left) {
                  copy = left;
                }
                if (copy === 0) {
                  break inf_leave;
                }
                utils.arraySet(output, input, next, copy, put);
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
              }
              state.mode = TYPE;
              break;
            case TABLE:
              while (bits < 14) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.nlen = (hold & 31) + 257;
              hold >>>= 5;
              bits -= 5;
              state.ndist = (hold & 31) + 1;
              hold >>>= 5;
              bits -= 5;
              state.ncode = (hold & 15) + 4;
              hold >>>= 4;
              bits -= 4;
              if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = "too many length or distance symbols";
                state.mode = BAD;
                break;
              }
              state.have = 0;
              state.mode = LENLENS;
            
            case LENLENS:
              while (state.have < state.ncode) {
                while (bits < 3) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.lens[order[state.have++]] = hold & 7;
                hold >>>= 3;
                bits -= 3;
              }
              while (state.have < 19) {
                state.lens[order[state.have++]] = 0;
              }
              state.lencode = state.lendyn;
              state.lenbits = 7;
              opts = { bits: state.lenbits };
              ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid code lengths set";
                state.mode = BAD;
                break;
              }
              state.have = 0;
              state.mode = CODELENS;
            
            case CODELENS:
              while (state.have < state.nlen + state.ndist) {
                for (; ; ) {
                  here = state.lencode[hold & (1 << state.lenbits) - 1];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (here_val < 16) {
                  hold >>>= here_bits;
                  bits -= here_bits;
                  state.lens[state.have++] = here_val;
                } else {
                  if (here_val === 16) {
                    n = here_bits + 2;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    if (state.have === 0) {
                      strm.msg = "invalid bit length repeat";
                      state.mode = BAD;
                      break;
                    }
                    len = state.lens[state.have - 1];
                    copy = 3 + (hold & 3);
                    hold >>>= 2;
                    bits -= 2;
                  } else if (here_val === 17) {
                    n = here_bits + 3;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy = 3 + (hold & 7);
                    hold >>>= 3;
                    bits -= 3;
                  } else {
                    n = here_bits + 7;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy = 11 + (hold & 127);
                    hold >>>= 7;
                    bits -= 7;
                  }
                  if (state.have + copy > state.nlen + state.ndist) {
                    strm.msg = "invalid bit length repeat";
                    state.mode = BAD;
                    break;
                  }
                  while (copy--) {
                    state.lens[state.have++] = len;
                  }
                }
              }
              if (state.mode === BAD) {
                break;
              }
              if (state.lens[256] === 0) {
                strm.msg = "invalid code -- missing end-of-block";
                state.mode = BAD;
                break;
              }
              state.lenbits = 9;
              opts = { bits: state.lenbits };
              ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid literal/lengths set";
                state.mode = BAD;
                break;
              }
              state.distbits = 6;
              state.distcode = state.distdyn;
              opts = { bits: state.distbits };
              ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
              state.distbits = opts.bits;
              if (ret) {
                strm.msg = "invalid distances set";
                state.mode = BAD;
                break;
              }
              state.mode = LEN_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            
            case LEN_:
              state.mode = LEN;
            
            case LEN:
              if (have >= 6 && left >= 258) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                inflate_fast(strm, _out);
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                if (state.mode === TYPE) {
                  state.back = -1;
                }
                break;
              }
              state.back = 0;
              for (; ; ) {
                here = state.lencode[hold & (1 << state.lenbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (here_op && (here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state.back += here_bits;
              state.length = here_val;
              if (here_op === 0) {
                state.mode = LIT;
                break;
              }
              if (here_op & 32) {
                state.back = -1;
                state.mode = TYPE;
                break;
              }
              if (here_op & 64) {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break;
              }
              state.extra = here_op & 15;
              state.mode = LENEXT;
            
            case LENEXT:
              if (state.extra) {
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.length += hold & (1 << state.extra) - 1;
                hold >>>= state.extra;
                bits -= state.extra;
                state.back += state.extra;
              }
              state.was = state.length;
              state.mode = DIST;
            
            case DIST:
              for (; ; ) {
                here = state.distcode[hold & (1 << state.distbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state.back += here_bits;
              if (here_op & 64) {
                strm.msg = "invalid distance code";
                state.mode = BAD;
                break;
              }
              state.offset = here_val;
              state.extra = here_op & 15;
              state.mode = DISTEXT;
            
            case DISTEXT:
              if (state.extra) {
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.offset += hold & (1 << state.extra) - 1;
                hold >>>= state.extra;
                bits -= state.extra;
                state.back += state.extra;
              }
              if (state.offset > state.dmax) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD;
                break;
              }
              state.mode = MATCH;
            
            case MATCH:
              if (left === 0) {
                break inf_leave;
              }
              copy = _out - left;
              if (state.offset > copy) {
                copy = state.offset - copy;
                if (copy > state.whave) {
                  if (state.sane) {
                    strm.msg = "invalid distance too far back";
                    state.mode = BAD;
                    break;
                  }
                }
                if (copy > state.wnext) {
                  copy -= state.wnext;
                  from = state.wsize - copy;
                } else {
                  from = state.wnext - copy;
                }
                if (copy > state.length) {
                  copy = state.length;
                }
                from_source = state.window;
              } else {
                from_source = output;
                from = put - state.offset;
                copy = state.length;
              }
              if (copy > left) {
                copy = left;
              }
              left -= copy;
              state.length -= copy;
              do {
                output[put++] = from_source[from++];
              } while (--copy);
              if (state.length === 0) {
                state.mode = LEN;
              }
              break;
            case LIT:
              if (left === 0) {
                break inf_leave;
              }
              output[put++] = state.length;
              left--;
              state.mode = LEN;
              break;
            case CHECK:
              if (state.wrap) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold |= input[next++] << bits;
                  bits += 8;
                }
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (_out) {
                  strm.adler = state.check = 
                  state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
                }
                _out = left;
                if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                  strm.msg = "incorrect data check";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state.mode = LENGTH;
            
            case LENGTH:
              if (state.wrap && state.flags) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (hold !== (state.total & 4294967295)) {
                  strm.msg = "incorrect length check";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state.mode = DONE;
            
            case DONE:
              ret = Z_STREAM_END;
              break inf_leave;
            case BAD:
              ret = Z_DATA_ERROR;
              break inf_leave;
            case MEM:
              return Z_MEM_ERROR;
            case SYNC:
            
            default:
              return Z_STREAM_ERROR;
          }
        }
      strm.next_out = put;
      strm.avail_out = left;
      strm.next_in = next;
      strm.avail_in = have;
      state.hold = hold;
      state.bits = bits;
      if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
        if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
          state.mode = MEM;
          return Z_MEM_ERROR;
        }
      }
      _in -= strm.avail_in;
      _out -= strm.avail_out;
      strm.total_in += _in;
      strm.total_out += _out;
      state.total += _out;
      if (state.wrap && _out) {
        strm.adler = state.check = 
        state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
      }
      strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
      if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
        ret = Z_BUF_ERROR;
      }
      return ret;
    }
    function inflateEnd(strm) {
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      var state = strm.state;
      if (state.window) {
        state.window = null;
      }
      strm.state = null;
      return Z_OK;
    }
    function inflateGetHeader(strm, head) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if ((state.wrap & 2) === 0) {
        return Z_STREAM_ERROR;
      }
      state.head = head;
      head.done = false;
      return Z_OK;
    }
    function inflateSetDictionary(strm, dictionary) {
      var dictLength = dictionary.length;
      var state;
      var dictid;
      var ret;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (state.wrap !== 0 && state.mode !== DICT) {
        return Z_STREAM_ERROR;
      }
      if (state.mode === DICT) {
        dictid = 1;
        dictid = adler32(dictid, dictionary, dictLength, 0);
        if (dictid !== state.check) {
          return Z_DATA_ERROR;
        }
      }
      ret = updatewindow(strm, dictionary, dictLength, dictLength);
      if (ret) {
        state.mode = MEM;
        return Z_MEM_ERROR;
      }
      state.havedict = 1;
      return Z_OK;
    }
    exports.inflateReset = inflateReset;
    exports.inflateReset2 = inflateReset2;
    exports.inflateResetKeep = inflateResetKeep;
    exports.inflateInit = inflateInit;
    exports.inflateInit2 = inflateInit2;
    exports.inflate = inflate;
    exports.inflateEnd = inflateEnd;
    exports.inflateGetHeader = inflateGetHeader;
    exports.inflateSetDictionary = inflateSetDictionary;
    exports.inflateInfo = "pako inflate (from Nodeca project)";
  }
});

// node_modules/pako/lib/zlib/constants.js
var require_constants = __commonJS({
  "node_modules/pako/lib/zlib/constants.js"(exports, module) {
    "use strict";
    module.exports = {
      
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      //Z_MEM_ERROR:     -4,
      Z_BUF_ERROR: -5,
      //Z_VERSION_ERROR: -6,
      
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      
      Z_BINARY: 0,
      Z_TEXT: 1,
      //Z_ASCII:                1, // = Z_TEXT (deprecated)
      Z_UNKNOWN: 2,
      
      Z_DEFLATED: 8
      //Z_NULL:                 null // Use -1 or null inline, depending on var type
    };
  }
});

// node_modules/pako/lib/zlib/gzheader.js
var require_gzheader = __commonJS({
  "node_modules/pako/lib/zlib/gzheader.js"(exports, module) {
    "use strict";
    function GZheader() {
      this.text = 0;
      this.time = 0;
      this.xflags = 0;
      this.os = 0;
      this.extra = null;
      this.extra_len = 0;
      this.name = "";
      this.comment = "";
      this.hcrc = 0;
      this.done = false;
    }
    module.exports = GZheader;
  }
});

// node_modules/pako/lib/inflate.js
var require_inflate2 = __commonJS({
  "node_modules/pako/lib/inflate.js"(exports) {
    "use strict";
    var zlib_inflate = require_inflate();
    var utils = require_common();
    var strings = require_strings();
    var c = require_constants();
    var msg = require_messages();
    var ZStream = require_zstream();
    var GZheader = require_gzheader();
    var toString = Object.prototype.toString;
    function Inflate(options) {
      if (!(this instanceof Inflate)) return new Inflate(options);
      this.options = utils.assign({
        chunkSize: 16384,
        windowBits: 0,
        to: ""
      }, options || {});
      var opt = this.options;
      if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) {
          opt.windowBits = -15;
        }
      }
      if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
        opt.windowBits += 32;
      }
      if (opt.windowBits > 15 && opt.windowBits < 48) {
        if ((opt.windowBits & 15) === 0) {
          opt.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      var status = zlib_inflate.inflateInit2(
        this.strm,
        opt.windowBits
      );
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
      this.header = new GZheader();
      zlib_inflate.inflateGetHeader(this.strm, this.header);
      if (opt.dictionary) {
        if (typeof opt.dictionary === "string") {
          opt.dictionary = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          opt.dictionary = new Uint8Array(opt.dictionary);
        }
        if (opt.raw) {
          status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
          if (status !== c.Z_OK) {
            throw new Error(msg[status]);
          }
        }
      }
    }
    Inflate.prototype.push = function(data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var dictionary = this.options.dictionary;
      var status, _mode;
      var next_out_utf8, tail, utf8str;
      var allowBufError = false;
      if (this.ended) {
        return false;
      }
      _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
      if (typeof data === "string") {
        strm.input = strings.binstring2buf(data);
      } else if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      do {
        if (strm.avail_out === 0) {
          strm.output = new utils.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
        if (status === c.Z_NEED_DICT && dictionary) {
          status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
        }
        if (status === c.Z_BUF_ERROR && allowBufError === true) {
          status = c.Z_OK;
          allowBufError = false;
        }
        if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
          this.onEnd(status);
          this.ended = true;
          return false;
        }
        if (strm.next_out) {
          if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
            if (this.options.to === "string") {
              next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
              tail = strm.next_out - next_out_utf8;
              utf8str = strings.buf2string(strm.output, next_out_utf8);
              strm.next_out = tail;
              strm.avail_out = chunkSize - tail;
              if (tail) {
                utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
              }
              this.onData(utf8str);
            } else {
              this.onData(utils.shrinkBuf(strm.output, strm.next_out));
            }
          }
        }
        if (strm.avail_in === 0 && strm.avail_out === 0) {
          allowBufError = true;
        }
      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
      if (status === c.Z_STREAM_END) {
        _mode = c.Z_FINISH;
      }
      if (_mode === c.Z_FINISH) {
        status = zlib_inflate.inflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === c.Z_OK;
      }
      if (_mode === c.Z_SYNC_FLUSH) {
        this.onEnd(c.Z_OK);
        strm.avail_out = 0;
        return true;
      }
      return true;
    };
    Inflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    Inflate.prototype.onEnd = function(status) {
      if (status === c.Z_OK) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    function inflate(input, options) {
      var inflator = new Inflate(options);
      inflator.push(input, true);
      if (inflator.err) {
        throw inflator.msg || msg[inflator.err];
      }
      return inflator.result;
    }
    function inflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return inflate(input, options);
    }
    exports.Inflate = Inflate;
    exports.inflate = inflate;
    exports.inflateRaw = inflateRaw;
    exports.ungzip = inflate;
  }
});

// node_modules/pako/index.js
var require_pako = __commonJS({
  "node_modules/pako/index.js"(exports, module) {
    "use strict";
    var assign = require_common().assign;
    var deflate = require_deflate2();
    var inflate = require_inflate2();
    var constants = require_constants();
    var pako = {};
    assign(pako, deflate, inflate, constants);
    module.exports = pako;
  }
});

// node_modules/jszip/lib/flate.js
var require_flate = __commonJS({
  "node_modules/jszip/lib/flate.js"(exports) {
    "use strict";
    var USE_TYPEDARRAY = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Uint32Array !== "undefined";
    var pako = require_pako();
    var utils = require_utils();
    var GenericWorker = require_GenericWorker();
    var ARRAY_TYPE = USE_TYPEDARRAY ? "uint8array" : "array";
    exports.magic = "\b\0";
    function FlateWorker(action, options) {
      GenericWorker.call(this, "FlateWorker/" + action);
      this._pako = null;
      this._pakoAction = action;
      this._pakoOptions = options;
      this.meta = {};
    }
    utils.inherits(FlateWorker, GenericWorker);
    FlateWorker.prototype.processChunk = function(chunk) {
      this.meta = chunk.meta;
      if (this._pako === null) {
        this._createPako();
      }
      this._pako.push(utils.transformTo(ARRAY_TYPE, chunk.data), false);
    };
    FlateWorker.prototype.flush = function() {
      GenericWorker.prototype.flush.call(this);
      if (this._pako === null) {
        this._createPako();
      }
      this._pako.push([], true);
    };
    FlateWorker.prototype.cleanUp = function() {
      GenericWorker.prototype.cleanUp.call(this);
      this._pako = null;
    };
    FlateWorker.prototype._createPako = function() {
      this._pako = new pako[this._pakoAction]({
        raw: true,
        level: this._pakoOptions.level || -1
        // default compression
      });
      var self2 = this;
      this._pako.onData = function(data) {
        self2.push({
          data,
          meta: self2.meta
        });
      };
    };
    exports.compressWorker = function(compressionOptions) {
      return new FlateWorker("Deflate", compressionOptions);
    };
    exports.uncompressWorker = function() {
      return new FlateWorker("Inflate", {});
    };
  }
});

// node_modules/jszip/lib/compressions.js
var require_compressions = __commonJS({
  "node_modules/jszip/lib/compressions.js"(exports) {
    "use strict";
    var GenericWorker = require_GenericWorker();
    exports.STORE = {
      magic: "\0\0",
      compressWorker: function() {
        return new GenericWorker("STORE compression");
      },
      uncompressWorker: function() {
        return new GenericWorker("STORE decompression");
      }
    };
    exports.DEFLATE = require_flate();
  }
});

// node_modules/jszip/lib/signature.js
var require_signature = __commonJS({
  "node_modules/jszip/lib/signature.js"(exports) {
    "use strict";
    exports.LOCAL_FILE_HEADER = "PK";
    exports.CENTRAL_FILE_HEADER = "PK";
    exports.CENTRAL_DIRECTORY_END = "PK";
    exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07";
    exports.ZIP64_CENTRAL_DIRECTORY_END = "PK";
    exports.DATA_DESCRIPTOR = "PK\x07\b";
  }
});

// node_modules/jszip/lib/generate/ZipFileWorker.js
var require_ZipFileWorker = __commonJS({
  "node_modules/jszip/lib/generate/ZipFileWorker.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var GenericWorker = require_GenericWorker();
    var utf8 = require_utf8();
    var crc32 = require_crc32();
    var signature = require_signature();
    var decToHex = function(dec, bytes) {
      var hex = "", i;
      for (i = 0; i < bytes; i++) {
        hex += String.fromCharCode(dec & 255);
        dec = dec >>> 8;
      }
      return hex;
    };
    var generateUnixExternalFileAttr = function(unixPermissions, isDir) {
      var result = unixPermissions;
      if (!unixPermissions) {
        result = isDir ? 16893 : 33204;
      }
      return (result & 65535) << 16;
    };
    var generateDosExternalFileAttr = function(dosPermissions) {
      return (dosPermissions || 0) & 63;
    };
    var generateZipParts = function(streamInfo, streamedContent, streamingEnded, offset, platform, encodeFileName) {
      var file = streamInfo["file"], compression = streamInfo["compression"], useCustomEncoding = encodeFileName !== utf8.utf8encode, encodedFileName = utils.transformTo("string", encodeFileName(file.name)), utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)), comment = file.comment, encodedComment = utils.transformTo("string", encodeFileName(comment)), utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)), useUTF8ForFileName = utfEncodedFileName.length !== file.name.length, useUTF8ForComment = utfEncodedComment.length !== comment.length, dosTime, dosDate, extraFields = "", unicodePathExtraField = "", unicodeCommentExtraField = "", dir = file.dir, date = file.date;
      var dataInfo = {
        crc32: 0,
        compressedSize: 0,
        uncompressedSize: 0
      };
      if (!streamedContent || streamingEnded) {
        dataInfo.crc32 = streamInfo["crc32"];
        dataInfo.compressedSize = streamInfo["compressedSize"];
        dataInfo.uncompressedSize = streamInfo["uncompressedSize"];
      }
      var bitflag = 0;
      if (streamedContent) {
        bitflag |= 8;
      }
      if (!useCustomEncoding && (useUTF8ForFileName || useUTF8ForComment)) {
        bitflag |= 2048;
      }
      var extFileAttr = 0;
      var versionMadeBy = 0;
      if (dir) {
        extFileAttr |= 16;
      }
      if (platform === "UNIX") {
        versionMadeBy = 798;
        extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
      } else {
        versionMadeBy = 20;
        extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
      }
      dosTime = date.getUTCHours();
      dosTime = dosTime << 6;
      dosTime = dosTime | date.getUTCMinutes();
      dosTime = dosTime << 5;
      dosTime = dosTime | date.getUTCSeconds() / 2;
      dosDate = date.getUTCFullYear() - 1980;
      dosDate = dosDate << 4;
      dosDate = dosDate | date.getUTCMonth() + 1;
      dosDate = dosDate << 5;
      dosDate = dosDate | date.getUTCDate();
      if (useUTF8ForFileName) {
        unicodePathExtraField = // Version
        decToHex(1, 1) + // NameCRC32
        decToHex(crc32(encodedFileName), 4) + // UnicodeName
        utfEncodedFileName;
        extraFields += // Info-ZIP Unicode Path Extra Field
        "up" + // size
        decToHex(unicodePathExtraField.length, 2) + // content
        unicodePathExtraField;
      }
      if (useUTF8ForComment) {
        unicodeCommentExtraField = // Version
        decToHex(1, 1) + // CommentCRC32
        decToHex(crc32(encodedComment), 4) + // UnicodeName
        utfEncodedComment;
        extraFields += // Info-ZIP Unicode Path Extra Field
        "uc" + // size
        decToHex(unicodeCommentExtraField.length, 2) + // content
        unicodeCommentExtraField;
      }
      var header = "";
      header += "\n\0";
      header += decToHex(bitflag, 2);
      header += compression.magic;
      header += decToHex(dosTime, 2);
      header += decToHex(dosDate, 2);
      header += decToHex(dataInfo.crc32, 4);
      header += decToHex(dataInfo.compressedSize, 4);
      header += decToHex(dataInfo.uncompressedSize, 4);
      header += decToHex(encodedFileName.length, 2);
      header += decToHex(extraFields.length, 2);
      var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;
      var dirRecord = signature.CENTRAL_FILE_HEADER + // version made by (00: DOS)
      decToHex(versionMadeBy, 2) + // file header (common to file and central directory)
      header + // file comment length
      decToHex(encodedComment.length, 2) + // disk number start
      "\0\0\0\0" + // external file attributes
      decToHex(extFileAttr, 4) + // relative offset of local header
      decToHex(offset, 4) + // file name
      encodedFileName + // extra field
      extraFields + // file comment
      encodedComment;
      return {
        fileRecord,
        dirRecord
      };
    };
    var generateCentralDirectoryEnd = function(entriesCount, centralDirLength, localDirLength, comment, encodeFileName) {
      var dirEnd = "";
      var encodedComment = utils.transformTo("string", encodeFileName(comment));
      dirEnd = signature.CENTRAL_DIRECTORY_END + // number of this disk
      "\0\0\0\0" + // total number of entries in the central directory on this disk
      decToHex(entriesCount, 2) + // total number of entries in the central directory
      decToHex(entriesCount, 2) + // size of the central directory   4 bytes
      decToHex(centralDirLength, 4) + // offset of start of central directory with respect to the starting disk number
      decToHex(localDirLength, 4) + // .ZIP file comment length
      decToHex(encodedComment.length, 2) + // .ZIP file comment
      encodedComment;
      return dirEnd;
    };
    var generateDataDescriptors = function(streamInfo) {
      var descriptor = "";
      descriptor = signature.DATA_DESCRIPTOR + // crc-32                          4 bytes
      decToHex(streamInfo["crc32"], 4) + // compressed size                 4 bytes
      decToHex(streamInfo["compressedSize"], 4) + // uncompressed size               4 bytes
      decToHex(streamInfo["uncompressedSize"], 4);
      return descriptor;
    };
    function ZipFileWorker(streamFiles, comment, platform, encodeFileName) {
      GenericWorker.call(this, "ZipFileWorker");
      this.bytesWritten = 0;
      this.zipComment = comment;
      this.zipPlatform = platform;
      this.encodeFileName = encodeFileName;
      this.streamFiles = streamFiles;
      this.accumulate = false;
      this.contentBuffer = [];
      this.dirRecords = [];
      this.currentSourceOffset = 0;
      this.entriesCount = 0;
      this.currentFile = null;
      this._sources = [];
    }
    utils.inherits(ZipFileWorker, GenericWorker);
    ZipFileWorker.prototype.push = function(chunk) {
      var currentFilePercent = chunk.meta.percent || 0;
      var entriesCount = this.entriesCount;
      var remainingFiles = this._sources.length;
      if (this.accumulate) {
        this.contentBuffer.push(chunk);
      } else {
        this.bytesWritten += chunk.data.length;
        GenericWorker.prototype.push.call(this, {
          data: chunk.data,
          meta: {
            currentFile: this.currentFile,
            percent: entriesCount ? (currentFilePercent + 100 * (entriesCount - remainingFiles - 1)) / entriesCount : 100
          }
        });
      }
    };
    ZipFileWorker.prototype.openedSource = function(streamInfo) {
      this.currentSourceOffset = this.bytesWritten;
      this.currentFile = streamInfo["file"].name;
      var streamedContent = this.streamFiles && !streamInfo["file"].dir;
      if (streamedContent) {
        var record = generateZipParts(streamInfo, streamedContent, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        this.push({
          data: record.fileRecord,
          meta: { percent: 0 }
        });
      } else {
        this.accumulate = true;
      }
    };
    ZipFileWorker.prototype.closedSource = function(streamInfo) {
      this.accumulate = false;
      var streamedContent = this.streamFiles && !streamInfo["file"].dir;
      var record = generateZipParts(streamInfo, streamedContent, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
      this.dirRecords.push(record.dirRecord);
      if (streamedContent) {
        this.push({
          data: generateDataDescriptors(streamInfo),
          meta: { percent: 100 }
        });
      } else {
        this.push({
          data: record.fileRecord,
          meta: { percent: 0 }
        });
        while (this.contentBuffer.length) {
          this.push(this.contentBuffer.shift());
        }
      }
      this.currentFile = null;
    };
    ZipFileWorker.prototype.flush = function() {
      var localDirLength = this.bytesWritten;
      for (var i = 0; i < this.dirRecords.length; i++) {
        this.push({
          data: this.dirRecords[i],
          meta: { percent: 100 }
        });
      }
      var centralDirLength = this.bytesWritten - localDirLength;
      var dirEnd = generateCentralDirectoryEnd(this.dirRecords.length, centralDirLength, localDirLength, this.zipComment, this.encodeFileName);
      this.push({
        data: dirEnd,
        meta: { percent: 100 }
      });
    };
    ZipFileWorker.prototype.prepareNextSource = function() {
      this.previous = this._sources.shift();
      this.openedSource(this.previous.streamInfo);
      if (this.isPaused) {
        this.previous.pause();
      } else {
        this.previous.resume();
      }
    };
    ZipFileWorker.prototype.registerPrevious = function(previous) {
      this._sources.push(previous);
      var self2 = this;
      previous.on("data", function(chunk) {
        self2.processChunk(chunk);
      });
      previous.on("end", function() {
        self2.closedSource(self2.previous.streamInfo);
        if (self2._sources.length) {
          self2.prepareNextSource();
        } else {
          self2.end();
        }
      });
      previous.on("error", function(e) {
        self2.error(e);
      });
      return this;
    };
    ZipFileWorker.prototype.resume = function() {
      if (!GenericWorker.prototype.resume.call(this)) {
        return false;
      }
      if (!this.previous && this._sources.length) {
        this.prepareNextSource();
        return true;
      }
      if (!this.previous && !this._sources.length && !this.generatedError) {
        this.end();
        return true;
      }
    };
    ZipFileWorker.prototype.error = function(e) {
      var sources = this._sources;
      if (!GenericWorker.prototype.error.call(this, e)) {
        return false;
      }
      for (var i = 0; i < sources.length; i++) {
        try {
          sources[i].error(e);
        } catch (e2) {
        }
      }
      return true;
    };
    ZipFileWorker.prototype.lock = function() {
      GenericWorker.prototype.lock.call(this);
      var sources = this._sources;
      for (var i = 0; i < sources.length; i++) {
        sources[i].lock();
      }
    };
    module.exports = ZipFileWorker;
  }
});

// node_modules/jszip/lib/generate/index.js
var require_generate = __commonJS({
  "node_modules/jszip/lib/generate/index.js"(exports) {
    "use strict";
    var compressions = require_compressions();
    var ZipFileWorker = require_ZipFileWorker();
    var getCompression = function(fileCompression, zipCompression) {
      var compressionName = fileCompression || zipCompression;
      var compression = compressions[compressionName];
      if (!compression) {
        throw new Error(compressionName + " is not a valid compression method !");
      }
      return compression;
    };
    exports.generateWorker = function(zip, options, comment) {
      var zipFileWorker = new ZipFileWorker(options.streamFiles, comment, options.platform, options.encodeFileName);
      var entriesCount = 0;
      try {
        zip.forEach(function(relativePath, file) {
          entriesCount++;
          var compression = getCompression(file.options.compression, options.compression);
          var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};
          var dir = file.dir, date = file.date;
          file._compressWorker(compression, compressionOptions).withStreamInfo("file", {
            name: relativePath,
            dir,
            date,
            comment: file.comment || "",
            unixPermissions: file.unixPermissions,
            dosPermissions: file.dosPermissions
          }).pipe(zipFileWorker);
        });
        zipFileWorker.entriesCount = entriesCount;
      } catch (e) {
        zipFileWorker.error(e);
      }
      return zipFileWorker;
    };
  }
});

// node_modules/jszip/lib/nodejs/NodejsStreamInputAdapter.js
var require_NodejsStreamInputAdapter = __commonJS({
  "node_modules/jszip/lib/nodejs/NodejsStreamInputAdapter.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var GenericWorker = require_GenericWorker();
    function NodejsStreamInputAdapter(filename, stream) {
      GenericWorker.call(this, "Nodejs stream input adapter for " + filename);
      this._upstreamEnded = false;
      this._bindStream(stream);
    }
    utils.inherits(NodejsStreamInputAdapter, GenericWorker);
    NodejsStreamInputAdapter.prototype._bindStream = function(stream) {
      var self2 = this;
      this._stream = stream;
      stream.pause();
      stream.on("data", function(chunk) {
        self2.push({
          data: chunk,
          meta: {
            percent: 0
          }
        });
      }).on("error", function(e) {
        if (self2.isPaused) {
          this.generatedError = e;
        } else {
          self2.error(e);
        }
      }).on("end", function() {
        if (self2.isPaused) {
          self2._upstreamEnded = true;
        } else {
          self2.end();
        }
      });
    };
    NodejsStreamInputAdapter.prototype.pause = function() {
      if (!GenericWorker.prototype.pause.call(this)) {
        return false;
      }
      this._stream.pause();
      return true;
    };
    NodejsStreamInputAdapter.prototype.resume = function() {
      if (!GenericWorker.prototype.resume.call(this)) {
        return false;
      }
      if (this._upstreamEnded) {
        this.end();
      } else {
        this._stream.resume();
      }
      return true;
    };
    module.exports = NodejsStreamInputAdapter;
  }
});

// node_modules/jszip/lib/object.js
var require_object = __commonJS({
  "node_modules/jszip/lib/object.js"(exports, module) {
    "use strict";
    var utf8 = require_utf8();
    var utils = require_utils();
    var GenericWorker = require_GenericWorker();
    var StreamHelper = require_StreamHelper();
    var defaults = require_defaults();
    var CompressedObject = require_compressedObject();
    var ZipObject = require_zipObject();
    var generate = require_generate();
    var nodejsUtils = require_nodejsUtils();
    var NodejsStreamInputAdapter = require_NodejsStreamInputAdapter();
    var fileAdd = function(name, data, originalOptions) {
      var dataType = utils.getTypeOf(data), parent;
      var o = utils.extend(originalOptions || {}, defaults);
      o.date = o.date ||  new Date();
      if (o.compression !== null) {
        o.compression = o.compression.toUpperCase();
      }
      if (typeof o.unixPermissions === "string") {
        o.unixPermissions = parseInt(o.unixPermissions, 8);
      }
      if (o.unixPermissions && o.unixPermissions & 16384) {
        o.dir = true;
      }
      if (o.dosPermissions && o.dosPermissions & 16) {
        o.dir = true;
      }
      if (o.dir) {
        name = forceTrailingSlash(name);
      }
      if (o.createFolders && (parent = parentFolder(name))) {
        folderAdd.call(this, parent, true);
      }
      var isUnicodeString = dataType === "string" && o.binary === false && o.base64 === false;
      if (!originalOptions || typeof originalOptions.binary === "undefined") {
        o.binary = !isUnicodeString;
      }
      var isCompressedEmpty = data instanceof CompressedObject && data.uncompressedSize === 0;
      if (isCompressedEmpty || o.dir || !data || data.length === 0) {
        o.base64 = false;
        o.binary = true;
        data = "";
        o.compression = "STORE";
        dataType = "string";
      }
      var zipObjectContent = null;
      if (data instanceof CompressedObject || data instanceof GenericWorker) {
        zipObjectContent = data;
      } else if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
        zipObjectContent = new NodejsStreamInputAdapter(name, data);
      } else {
        zipObjectContent = utils.prepareContent(name, data, o.binary, o.optimizedBinaryString, o.base64);
      }
      var object = new ZipObject(name, zipObjectContent, o);
      this.files[name] = object;
    };
    var parentFolder = function(path) {
      if (path.slice(-1) === "/") {
        path = path.substring(0, path.length - 1);
      }
      var lastSlash = path.lastIndexOf("/");
      return lastSlash > 0 ? path.substring(0, lastSlash) : "";
    };
    var forceTrailingSlash = function(path) {
      if (path.slice(-1) !== "/") {
        path += "/";
      }
      return path;
    };
    var folderAdd = function(name, createFolders) {
      createFolders = typeof createFolders !== "undefined" ? createFolders : defaults.createFolders;
      name = forceTrailingSlash(name);
      if (!this.files[name]) {
        fileAdd.call(this, name, null, {
          dir: true,
          createFolders
        });
      }
      return this.files[name];
    };
    function isRegExp(object) {
      return Object.prototype.toString.call(object) === "[object RegExp]";
    }
    var out = {
      
      load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      },
      
      forEach: function(cb) {
        var filename, relativePath, file;
        for (filename in this.files) {
          file = this.files[filename];
          relativePath = filename.slice(this.root.length, filename.length);
          if (relativePath && filename.slice(0, this.root.length) === this.root) {
            cb(relativePath, file);
          }
        }
      },
      
      filter: function(search) {
        var result = [];
        this.forEach(function(relativePath, entry) {
          if (search(relativePath, entry)) {
            result.push(entry);
          }
        });
        return result;
      },
      
      file: function(name, data, o) {
        if (arguments.length === 1) {
          if (isRegExp(name)) {
            var regexp = name;
            return this.filter(function(relativePath, file) {
              return !file.dir && regexp.test(relativePath);
            });
          } else {
            var obj = this.files[this.root + name];
            if (obj && !obj.dir) {
              return obj;
            } else {
              return null;
            }
          }
        } else {
          name = this.root + name;
          fileAdd.call(this, name, data, o);
        }
        return this;
      },
      
      folder: function(arg) {
        if (!arg) {
          return this;
        }
        if (isRegExp(arg)) {
          return this.filter(function(relativePath, file) {
            return file.dir && arg.test(relativePath);
          });
        }
        var name = this.root + arg;
        var newFolder = folderAdd.call(this, name);
        var ret = this.clone();
        ret.root = newFolder.name;
        return ret;
      },
      
      remove: function(name) {
        name = this.root + name;
        var file = this.files[name];
        if (!file) {
          if (name.slice(-1) !== "/") {
            name += "/";
          }
          file = this.files[name];
        }
        if (file && !file.dir) {
          delete this.files[name];
        } else {
          var kids = this.filter(function(relativePath, file2) {
            return file2.name.slice(0, name.length) === name;
          });
          for (var i = 0; i < kids.length; i++) {
            delete this.files[kids[i].name];
          }
        }
        return this;
      },
      
      generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      },
      
      generateInternalStream: function(options) {
        var worker, opts = {};
        try {
          opts = utils.extend(options || {}, {
            streamFiles: false,
            compression: "STORE",
            compressionOptions: null,
            type: "",
            platform: "DOS",
            comment: null,
            mimeType: "application/zip",
            encodeFileName: utf8.utf8encode
          });
          opts.type = opts.type.toLowerCase();
          opts.compression = opts.compression.toUpperCase();
          if (opts.type === "binarystring") {
            opts.type = "string";
          }
          if (!opts.type) {
            throw new Error("No output type specified.");
          }
          utils.checkSupport(opts.type);
          if (opts.platform === "darwin" || opts.platform === "freebsd" || opts.platform === "linux" || opts.platform === "sunos") {
            opts.platform = "UNIX";
          }
          if (opts.platform === "win32") {
            opts.platform = "DOS";
          }
          var comment = opts.comment || this.comment || "";
          worker = generate.generateWorker(this, opts, comment);
        } catch (e) {
          worker = new GenericWorker("error");
          worker.error(e);
        }
        return new StreamHelper(worker, opts.type || "string", opts.mimeType);
      },
      
      generateAsync: function(options, onUpdate) {
        return this.generateInternalStream(options).accumulate(onUpdate);
      },
      
      generateNodeStream: function(options, onUpdate) {
        options = options || {};
        if (!options.type) {
          options.type = "nodebuffer";
        }
        return this.generateInternalStream(options).toNodejsStream(onUpdate);
      }
    };
    module.exports = out;
  }
});

// node_modules/jszip/lib/reader/DataReader.js
var require_DataReader = __commonJS({
  "node_modules/jszip/lib/reader/DataReader.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function DataReader(data) {
      this.data = data;
      this.length = data.length;
      this.index = 0;
      this.zero = 0;
    }
    DataReader.prototype = {
      
      checkOffset: function(offset) {
        this.checkIndex(this.index + offset);
      },
      
      checkIndex: function(newIndex) {
        if (this.length < this.zero + newIndex || newIndex < 0) {
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + newIndex + "). Corrupted zip ?");
        }
      },
      
      setIndex: function(newIndex) {
        this.checkIndex(newIndex);
        this.index = newIndex;
      },
      
      skip: function(n) {
        this.setIndex(this.index + n);
      },
      
      byteAt: function() {
      },
      
      readInt: function(size) {
        var result = 0, i;
        this.checkOffset(size);
        for (i = this.index + size - 1; i >= this.index; i--) {
          result = (result << 8) + this.byteAt(i);
        }
        this.index += size;
        return result;
      },
      
      readString: function(size) {
        return utils.transformTo("string", this.readData(size));
      },
      
      readData: function() {
      },
      
      lastIndexOfSignature: function() {
      },
      
      readAndCheckSignature: function() {
      },
      
      readDate: function() {
        var dostime = this.readInt(4);
        return new Date(Date.UTC(
          (dostime >> 25 & 127) + 1980,
          // year
          (dostime >> 21 & 15) - 1,
          // month
          dostime >> 16 & 31,
          // day
          dostime >> 11 & 31,
          // hour
          dostime >> 5 & 63,
          // minute
          (dostime & 31) << 1
        ));
      }
    };
    module.exports = DataReader;
  }
});

// node_modules/jszip/lib/reader/ArrayReader.js
var require_ArrayReader = __commonJS({
  "node_modules/jszip/lib/reader/ArrayReader.js"(exports, module) {
    "use strict";
    var DataReader = require_DataReader();
    var utils = require_utils();
    function ArrayReader(data) {
      DataReader.call(this, data);
      for (var i = 0; i < this.data.length; i++) {
        data[i] = data[i] & 255;
      }
    }
    utils.inherits(ArrayReader, DataReader);
    ArrayReader.prototype.byteAt = function(i) {
      return this.data[this.zero + i];
    };
    ArrayReader.prototype.lastIndexOfSignature = function(sig) {
      var sig0 = sig.charCodeAt(0), sig1 = sig.charCodeAt(1), sig2 = sig.charCodeAt(2), sig3 = sig.charCodeAt(3);
      for (var i = this.length - 4; i >= 0; --i) {
        if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
          return i - this.zero;
        }
      }
      return -1;
    };
    ArrayReader.prototype.readAndCheckSignature = function(sig) {
      var sig0 = sig.charCodeAt(0), sig1 = sig.charCodeAt(1), sig2 = sig.charCodeAt(2), sig3 = sig.charCodeAt(3), data = this.readData(4);
      return sig0 === data[0] && sig1 === data[1] && sig2 === data[2] && sig3 === data[3];
    };
    ArrayReader.prototype.readData = function(size) {
      this.checkOffset(size);
      if (size === 0) {
        return [];
      }
      var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
      this.index += size;
      return result;
    };
    module.exports = ArrayReader;
  }
});

// node_modules/jszip/lib/reader/StringReader.js
var require_StringReader = __commonJS({
  "node_modules/jszip/lib/reader/StringReader.js"(exports, module) {
    "use strict";
    var DataReader = require_DataReader();
    var utils = require_utils();
    function StringReader(data) {
      DataReader.call(this, data);
    }
    utils.inherits(StringReader, DataReader);
    StringReader.prototype.byteAt = function(i) {
      return this.data.charCodeAt(this.zero + i);
    };
    StringReader.prototype.lastIndexOfSignature = function(sig) {
      return this.data.lastIndexOf(sig) - this.zero;
    };
    StringReader.prototype.readAndCheckSignature = function(sig) {
      var data = this.readData(4);
      return sig === data;
    };
    StringReader.prototype.readData = function(size) {
      this.checkOffset(size);
      var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
      this.index += size;
      return result;
    };
    module.exports = StringReader;
  }
});

// node_modules/jszip/lib/reader/Uint8ArrayReader.js
var require_Uint8ArrayReader = __commonJS({
  "node_modules/jszip/lib/reader/Uint8ArrayReader.js"(exports, module) {
    "use strict";
    var ArrayReader = require_ArrayReader();
    var utils = require_utils();
    function Uint8ArrayReader(data) {
      ArrayReader.call(this, data);
    }
    utils.inherits(Uint8ArrayReader, ArrayReader);
    Uint8ArrayReader.prototype.readData = function(size) {
      this.checkOffset(size);
      if (size === 0) {
        return new Uint8Array(0);
      }
      var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
      this.index += size;
      return result;
    };
    module.exports = Uint8ArrayReader;
  }
});

// node_modules/jszip/lib/reader/NodeBufferReader.js
var require_NodeBufferReader = __commonJS({
  "node_modules/jszip/lib/reader/NodeBufferReader.js"(exports, module) {
    "use strict";
    var Uint8ArrayReader = require_Uint8ArrayReader();
    var utils = require_utils();
    function NodeBufferReader(data) {
      Uint8ArrayReader.call(this, data);
    }
    utils.inherits(NodeBufferReader, Uint8ArrayReader);
    NodeBufferReader.prototype.readData = function(size) {
      this.checkOffset(size);
      var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
      this.index += size;
      return result;
    };
    module.exports = NodeBufferReader;
  }
});

// node_modules/jszip/lib/reader/readerFor.js
var require_readerFor = __commonJS({
  "node_modules/jszip/lib/reader/readerFor.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var support = require_support();
    var ArrayReader = require_ArrayReader();
    var StringReader = require_StringReader();
    var NodeBufferReader = require_NodeBufferReader();
    var Uint8ArrayReader = require_Uint8ArrayReader();
    module.exports = function(data) {
      var type = utils.getTypeOf(data);
      utils.checkSupport(type);
      if (type === "string" && !support.uint8array) {
        return new StringReader(data);
      }
      if (type === "nodebuffer") {
        return new NodeBufferReader(data);
      }
      if (support.uint8array) {
        return new Uint8ArrayReader(utils.transformTo("uint8array", data));
      }
      return new ArrayReader(utils.transformTo("array", data));
    };
  }
});

// node_modules/jszip/lib/zipEntry.js
var require_zipEntry = __commonJS({
  "node_modules/jszip/lib/zipEntry.js"(exports, module) {
    "use strict";
    var readerFor = require_readerFor();
    var utils = require_utils();
    var CompressedObject = require_compressedObject();
    var crc32fn = require_crc32();
    var utf8 = require_utf8();
    var compressions = require_compressions();
    var support = require_support();
    var MADE_BY_DOS = 0;
    var MADE_BY_UNIX = 3;
    var findCompression = function(compressionMethod) {
      for (var method in compressions) {
        if (!Object.prototype.hasOwnProperty.call(compressions, method)) {
          continue;
        }
        if (compressions[method].magic === compressionMethod) {
          return compressions[method];
        }
      }
      return null;
    };
    function ZipEntry(options, loadOptions) {
      this.options = options;
      this.loadOptions = loadOptions;
    }
    ZipEntry.prototype = {
      
      isEncrypted: function() {
        return (this.bitFlag & 1) === 1;
      },
      
      useUTF8: function() {
        return (this.bitFlag & 2048) === 2048;
      },
      
      readLocalPart: function(reader) {
        var compression, localExtraFieldsLength;
        reader.skip(22);
        this.fileNameLength = reader.readInt(2);
        localExtraFieldsLength = reader.readInt(2);
        this.fileName = reader.readData(this.fileNameLength);
        reader.skip(localExtraFieldsLength);
        if (this.compressedSize === -1 || this.uncompressedSize === -1) {
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        }
        compression = findCompression(this.compressionMethod);
        if (compression === null) {
          throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + utils.transformTo("string", this.fileName) + ")");
        }
        this.decompressed = new CompressedObject(this.compressedSize, this.uncompressedSize, this.crc32, compression, reader.readData(this.compressedSize));
      },
      
      readCentralPart: function(reader) {
        this.versionMadeBy = reader.readInt(2);
        reader.skip(2);
        this.bitFlag = reader.readInt(2);
        this.compressionMethod = reader.readString(2);
        this.date = reader.readDate();
        this.crc32 = reader.readInt(4);
        this.compressedSize = reader.readInt(4);
        this.uncompressedSize = reader.readInt(4);
        var fileNameLength = reader.readInt(2);
        this.extraFieldsLength = reader.readInt(2);
        this.fileCommentLength = reader.readInt(2);
        this.diskNumberStart = reader.readInt(2);
        this.internalFileAttributes = reader.readInt(2);
        this.externalFileAttributes = reader.readInt(4);
        this.localHeaderOffset = reader.readInt(4);
        if (this.isEncrypted()) {
          throw new Error("Encrypted zip are not supported");
        }
        reader.skip(fileNameLength);
        this.readExtraFields(reader);
        this.parseZIP64ExtraField(reader);
        this.fileComment = reader.readData(this.fileCommentLength);
      },
      
      processAttributes: function() {
        this.unixPermissions = null;
        this.dosPermissions = null;
        var madeBy = this.versionMadeBy >> 8;
        this.dir = this.externalFileAttributes & 16 ? true : false;
        if (madeBy === MADE_BY_DOS) {
          this.dosPermissions = this.externalFileAttributes & 63;
        }
        if (madeBy === MADE_BY_UNIX) {
          this.unixPermissions = this.externalFileAttributes >> 16 & 65535;
        }
        if (!this.dir && this.fileNameStr.slice(-1) === "/") {
          this.dir = true;
        }
      },
      
      parseZIP64ExtraField: function() {
        if (!this.extraFields[1]) {
          return;
        }
        var extraReader = readerFor(this.extraFields[1].value);
        if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
          this.uncompressedSize = extraReader.readInt(8);
        }
        if (this.compressedSize === utils.MAX_VALUE_32BITS) {
          this.compressedSize = extraReader.readInt(8);
        }
        if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
          this.localHeaderOffset = extraReader.readInt(8);
        }
        if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
          this.diskNumberStart = extraReader.readInt(4);
        }
      },
      
      readExtraFields: function(reader) {
        var end = reader.index + this.extraFieldsLength, extraFieldId, extraFieldLength, extraFieldValue;
        if (!this.extraFields) {
          this.extraFields = {};
        }
        while (reader.index + 4 < end) {
          extraFieldId = reader.readInt(2);
          extraFieldLength = reader.readInt(2);
          extraFieldValue = reader.readData(extraFieldLength);
          this.extraFields[extraFieldId] = {
            id: extraFieldId,
            length: extraFieldLength,
            value: extraFieldValue
          };
        }
        reader.setIndex(end);
      },
      
      handleUTF8: function() {
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) {
          this.fileNameStr = utf8.utf8decode(this.fileName);
          this.fileCommentStr = utf8.utf8decode(this.fileComment);
        } else {
          var upath = this.findExtraFieldUnicodePath();
          if (upath !== null) {
            this.fileNameStr = upath;
          } else {
            var fileNameByteArray = utils.transformTo(decodeParamType, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
          }
          var ucomment = this.findExtraFieldUnicodeComment();
          if (ucomment !== null) {
            this.fileCommentStr = ucomment;
          } else {
            var commentByteArray = utils.transformTo(decodeParamType, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
          }
        }
      },
      
      findExtraFieldUnicodePath: function() {
        var upathField = this.extraFields[28789];
        if (upathField) {
          var extraReader = readerFor(upathField.value);
          if (extraReader.readInt(1) !== 1) {
            return null;
          }
          if (crc32fn(this.fileName) !== extraReader.readInt(4)) {
            return null;
          }
          return utf8.utf8decode(extraReader.readData(upathField.length - 5));
        }
        return null;
      },
      
      findExtraFieldUnicodeComment: function() {
        var ucommentField = this.extraFields[25461];
        if (ucommentField) {
          var extraReader = readerFor(ucommentField.value);
          if (extraReader.readInt(1) !== 1) {
            return null;
          }
          if (crc32fn(this.fileComment) !== extraReader.readInt(4)) {
            return null;
          }
          return utf8.utf8decode(extraReader.readData(ucommentField.length - 5));
        }
        return null;
      }
    };
    module.exports = ZipEntry;
  }
});

// node_modules/jszip/lib/zipEntries.js
var require_zipEntries = __commonJS({
  "node_modules/jszip/lib/zipEntries.js"(exports, module) {
    "use strict";
    var readerFor = require_readerFor();
    var utils = require_utils();
    var sig = require_signature();
    var ZipEntry = require_zipEntry();
    var support = require_support();
    function ZipEntries(loadOptions) {
      this.files = [];
      this.loadOptions = loadOptions;
    }
    ZipEntries.prototype = {
      
      checkSignature: function(expectedSignature) {
        if (!this.reader.readAndCheckSignature(expectedSignature)) {
          this.reader.index -= 4;
          var signature = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
        }
      },
      
      isSignature: function(askedIndex, expectedSignature) {
        var currentIndex = this.reader.index;
        this.reader.setIndex(askedIndex);
        var signature = this.reader.readString(4);
        var result = signature === expectedSignature;
        this.reader.setIndex(currentIndex);
        return result;
      },
      
      readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2);
        this.diskWithCentralDirStart = this.reader.readInt(2);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
        this.centralDirRecords = this.reader.readInt(2);
        this.centralDirSize = this.reader.readInt(4);
        this.centralDirOffset = this.reader.readInt(4);
        this.zipCommentLength = this.reader.readInt(2);
        var zipComment = this.reader.readData(this.zipCommentLength);
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        var decodeContent = utils.transformTo(decodeParamType, zipComment);
        this.zipComment = this.loadOptions.decodeFileName(decodeContent);
      },
      
      readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8);
        this.reader.skip(4);
        this.diskNumber = this.reader.readInt(4);
        this.diskWithCentralDirStart = this.reader.readInt(4);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
        this.centralDirRecords = this.reader.readInt(8);
        this.centralDirSize = this.reader.readInt(8);
        this.centralDirOffset = this.reader.readInt(8);
        this.zip64ExtensibleData = {};
        var extraDataSize = this.zip64EndOfCentralSize - 44, index = 0, extraFieldId, extraFieldLength, extraFieldValue;
        while (index < extraDataSize) {
          extraFieldId = this.reader.readInt(2);
          extraFieldLength = this.reader.readInt(4);
          extraFieldValue = this.reader.readData(extraFieldLength);
          this.zip64ExtensibleData[extraFieldId] = {
            id: extraFieldId,
            length: extraFieldLength,
            value: extraFieldValue
          };
        }
      },
      
      readBlockZip64EndOfCentralLocator: function() {
        this.diskWithZip64CentralDirStart = this.reader.readInt(4);
        this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
        this.disksCount = this.reader.readInt(4);
        if (this.disksCount > 1) {
          throw new Error("Multi-volumes zip are not supported");
        }
      },
      
      readLocalFiles: function() {
        var i, file;
        for (i = 0; i < this.files.length; i++) {
          file = this.files[i];
          this.reader.setIndex(file.localHeaderOffset);
          this.checkSignature(sig.LOCAL_FILE_HEADER);
          file.readLocalPart(this.reader);
          file.handleUTF8();
          file.processAttributes();
        }
      },
      
      readCentralDir: function() {
        var file;
        this.reader.setIndex(this.centralDirOffset);
        while (this.reader.readAndCheckSignature(sig.CENTRAL_FILE_HEADER)) {
          file = new ZipEntry({
            zip64: this.zip64
          }, this.loadOptions);
          file.readCentralPart(this.reader);
          this.files.push(file);
        }
        if (this.centralDirRecords !== this.files.length) {
          if (this.centralDirRecords !== 0 && this.files.length === 0) {
            throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
          } else {
          }
        }
      },
      
      readEndOfCentral: function() {
        var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
        if (offset < 0) {
          var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);
          if (isGarbage) {
            throw new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
          } else {
            throw new Error("Corrupted zip: can't find end of central directory");
          }
        }
        this.reader.setIndex(offset);
        var endOfCentralDirOffset = offset;
        this.checkSignature(sig.CENTRAL_DIRECTORY_END);
        this.readBlockEndOfCentral();
        if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
          this.zip64 = true;
          offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
          if (offset < 0) {
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          }
          this.reader.setIndex(offset);
          this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
          this.readBlockZip64EndOfCentralLocator();
          if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
            this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
            if (this.relativeOffsetEndOfZip64CentralDir < 0) {
              throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            }
          }
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
          this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
          this.readBlockZip64EndOfCentral();
        }
        var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;
        if (this.zip64) {
          expectedEndOfCentralDirOffset += 20;
          expectedEndOfCentralDirOffset += 12 + this.zip64EndOfCentralSize;
        }
        var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;
        if (extraBytes > 0) {
          if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {
          } else {
            this.reader.zero = extraBytes;
          }
        } else if (extraBytes < 0) {
          throw new Error("Corrupted zip: missing " + Math.abs(extraBytes) + " bytes.");
        }
      },
      prepareReader: function(data) {
        this.reader = readerFor(data);
      },
      
      load: function(data) {
        this.prepareReader(data);
        this.readEndOfCentral();
        this.readCentralDir();
        this.readLocalFiles();
      }
    };
    module.exports = ZipEntries;
  }
});

// node_modules/jszip/lib/load.js
var require_load = __commonJS({
  "node_modules/jszip/lib/load.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var external = require_external();
    var utf8 = require_utf8();
    var ZipEntries = require_zipEntries();
    var Crc32Probe = require_Crc32Probe();
    var nodejsUtils = require_nodejsUtils();
    function checkEntryCRC32(zipEntry) {
      return new external.Promise(function(resolve, reject) {
        var worker = zipEntry.decompressed.getContentWorker().pipe(new Crc32Probe());
        worker.on("error", function(e) {
          reject(e);
        }).on("end", function() {
          if (worker.streamInfo.crc32 !== zipEntry.decompressed.crc32) {
            reject(new Error("Corrupted zip : CRC32 mismatch"));
          } else {
            resolve();
          }
        }).resume();
      });
    }
    module.exports = function(data, options) {
      var zip = this;
      options = utils.extend(options || {}, {
        base64: false,
        checkCRC32: false,
        optimizedBinaryString: false,
        createFolders: false,
        decodeFileName: utf8.utf8decode
      });
      if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
        return external.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."));
      }
      return utils.prepareContent("the loaded zip file", data, true, options.optimizedBinaryString, options.base64).then(function(data2) {
        var zipEntries = new ZipEntries(options);
        zipEntries.load(data2);
        return zipEntries;
      }).then(function checkCRC32(zipEntries) {
        var promises = [external.Promise.resolve(zipEntries)];
        var files = zipEntries.files;
        if (options.checkCRC32) {
          for (var i = 0; i < files.length; i++) {
            promises.push(checkEntryCRC32(files[i]));
          }
        }
        return external.Promise.all(promises);
      }).then(function addFiles(results) {
        var zipEntries = results.shift();
        var files = zipEntries.files;
        for (var i = 0; i < files.length; i++) {
          var input = files[i];
          var unsafeName = input.fileNameStr;
          var safeName = utils.resolve(input.fileNameStr);
          zip.file(safeName, input.decompressed, {
            binary: true,
            optimizedBinaryString: true,
            date: input.date,
            dir: input.dir,
            comment: input.fileCommentStr.length ? input.fileCommentStr : null,
            unixPermissions: input.unixPermissions,
            dosPermissions: input.dosPermissions,
            createFolders: options.createFolders
          });
          if (!input.dir) {
            zip.file(safeName).unsafeOriginalName = unsafeName;
          }
        }
        if (zipEntries.zipComment.length) {
          zip.comment = zipEntries.zipComment;
        }
        return zip;
      });
    };
  }
});

// node_modules/jszip/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/jszip/lib/index.js"(exports, module) {
    "use strict";
    function JSZip2() {
      if (!(this instanceof JSZip2)) {
        return new JSZip2();
      }
      if (arguments.length) {
        throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
      }
      this.files =  Object.create(null);
      this.comment = null;
      this.root = "";
      this.clone = function() {
        var newObj = new JSZip2();
        for (var i in this) {
          if (typeof this[i] !== "function") {
            newObj[i] = this[i];
          }
        }
        return newObj;
      };
    }
    JSZip2.prototype = require_object();
    JSZip2.prototype.loadAsync = require_load();
    JSZip2.support = require_support();
    JSZip2.defaults = require_defaults();
    JSZip2.version = "3.10.1";
    JSZip2.loadAsync = function(content, options) {
      return new JSZip2().loadAsync(content, options);
    };
    JSZip2.external = require_external();
    module.exports = JSZip2;
  }
});

// node_modules/js-sha256/src/sha256.js
var require_sha256 = __commonJS({
  "node_modules/js-sha256/src/sha256.js"(exports, module) {
    (function() {
      "use strict";
      var ERROR = "input is invalid type";
      var WINDOW = typeof window === "object";
      var root = WINDOW ? window : {};
      if (root.JS_SHA256_NO_WINDOW) {
        WINDOW = false;
      }
      var WEB_WORKER = !WINDOW && typeof self === "object";
      var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
      if (NODE_JS) {
        root = global;
      } else if (WEB_WORKER) {
        root = self;
      }
      var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === "object" && module.exports;
      var AMD = typeof define === "function" && define.amd;
      var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
      var HEX_CHARS = "0123456789abcdef".split("");
      var EXTRA = [-2147483648, 8388608, 32768, 128];
      var SHIFT = [24, 16, 8, 0];
      var K = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ];
      var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
      var blocks = [];
      if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
      }
      if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
          return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
      }
      var createOutputMethod = function(outputType, is224) {
        return function(message2) {
          return new Sha256(is224, true).update(message2)[outputType]();
        };
      };
      var createMethod = function(is224) {
        var method = createOutputMethod("hex", is224);
        if (NODE_JS) {
          method = nodeWrap(method, is224);
        }
        method.create = function() {
          return new Sha256(is224);
        };
        method.update = function(message2) {
          return method.create().update(message2);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method[type] = createOutputMethod(type, is224);
        }
        return method;
      };
      var nodeWrap = function(method, is224) {
        var crypto2 = __require("crypto");
        var Buffer2 = __require("buffer").Buffer;
        var algorithm = is224 ? "sha224" : "sha256";
        var bufferFrom;
        if (Buffer2.from && !root.JS_SHA256_NO_BUFFER_FROM) {
          bufferFrom = Buffer2.from;
        } else {
          bufferFrom = function(message2) {
            return new Buffer2(message2);
          };
        }
        var nodeMethod = function(message2) {
          if (typeof message2 === "string") {
            return crypto2.createHash(algorithm).update(message2, "utf8").digest("hex");
          } else {
            if (message2 === null || message2 === void 0) {
              throw new Error(ERROR);
            } else if (message2.constructor === ArrayBuffer) {
              message2 = new Uint8Array(message2);
            }
          }
          if (Array.isArray(message2) || ArrayBuffer.isView(message2) || message2.constructor === Buffer2) {
            return crypto2.createHash(algorithm).update(bufferFrom(message2)).digest("hex");
          } else {
            return method(message2);
          }
        };
        return nodeMethod;
      };
      var createHmacOutputMethod = function(outputType, is224) {
        return function(key, message2) {
          return new HmacSha256(key, is224, true).update(message2)[outputType]();
        };
      };
      var createHmacMethod = function(is224) {
        var method = createHmacOutputMethod("hex", is224);
        method.create = function(key) {
          return new HmacSha256(key, is224);
        };
        method.update = function(key, message2) {
          return method.create(key).update(message2);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method[type] = createHmacOutputMethod(type, is224);
        }
        return method;
      };
      function Sha256(is224, sharedMemory) {
        if (sharedMemory) {
          blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
          this.blocks = blocks;
        } else {
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (is224) {
          this.h0 = 3238371032;
          this.h1 = 914150663;
          this.h2 = 812702999;
          this.h3 = 4144912697;
          this.h4 = 4290775857;
          this.h5 = 1750603025;
          this.h6 = 1694076839;
          this.h7 = 3204075428;
        } else {
          this.h0 = 1779033703;
          this.h1 = 3144134277;
          this.h2 = 1013904242;
          this.h3 = 2773480762;
          this.h4 = 1359893119;
          this.h5 = 2600822924;
          this.h6 = 528734635;
          this.h7 = 1541459225;
        }
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
        this.is224 = is224;
      }
      Sha256.prototype.update = function(message2) {
        if (this.finalized) {
          return;
        }
        var notString, type = typeof message2;
        if (type !== "string") {
          if (type === "object") {
            if (message2 === null) {
              throw new Error(ERROR);
            } else if (ARRAY_BUFFER && message2.constructor === ArrayBuffer) {
              message2 = new Uint8Array(message2);
            } else if (!Array.isArray(message2)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(message2)) {
                throw new Error(ERROR);
              }
            }
          } else {
            throw new Error(ERROR);
          }
          notString = true;
        }
        var code, index = 0, i, length = message2.length, blocks2 = this.blocks;
        while (index < length) {
          if (this.hashed) {
            this.hashed = false;
            blocks2[0] = this.block;
            this.block = blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
          }
          if (notString) {
            for (i = this.start; index < length && i < 64; ++index) {
              blocks2[i >>> 2] |= message2[index] << SHIFT[i++ & 3];
            }
          } else {
            for (i = this.start; index < length && i < 64; ++index) {
              code = message2.charCodeAt(index);
              if (code < 128) {
                blocks2[i >>> 2] |= code << SHIFT[i++ & 3];
              } else if (code < 2048) {
                blocks2[i >>> 2] |= (192 | code >>> 6) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else if (code < 55296 || code >= 57344) {
                blocks2[i >>> 2] |= (224 | code >>> 12) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else {
                code = 65536 + ((code & 1023) << 10 | message2.charCodeAt(++index) & 1023);
                blocks2[i >>> 2] |= (240 | code >>> 18) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 12 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              }
            }
          }
          this.lastByteIndex = i;
          this.bytes += i - this.start;
          if (i >= 64) {
            this.block = blocks2[16];
            this.start = i - 64;
            this.hash();
            this.hashed = true;
          } else {
            this.start = i;
          }
        }
        if (this.bytes > 4294967295) {
          this.hBytes += this.bytes / 4294967296 << 0;
          this.bytes = this.bytes % 4294967296;
        }
        return this;
      };
      Sha256.prototype.finalize = function() {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        var blocks2 = this.blocks, i = this.lastByteIndex;
        blocks2[16] = this.block;
        blocks2[i >>> 2] |= EXTRA[i & 3];
        this.block = blocks2[16];
        if (i >= 56) {
          if (!this.hashed) {
            this.hash();
          }
          blocks2[0] = this.block;
          blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        blocks2[14] = this.hBytes << 3 | this.bytes >>> 29;
        blocks2[15] = this.bytes << 3;
        this.hash();
      };
      Sha256.prototype.hash = function() {
        var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6, h = this.h7, blocks2 = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;
        for (j = 16; j < 64; ++j) {
          t1 = blocks2[j - 15];
          s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
          t1 = blocks2[j - 2];
          s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
          blocks2[j] = blocks2[j - 16] + s0 + blocks2[j - 7] + s1 << 0;
        }
        bc = b & c;
        for (j = 0; j < 64; j += 4) {
          if (this.first) {
            if (this.is224) {
              ab = 300032;
              t1 = blocks2[0] - 1413257819;
              h = t1 - 150054599 << 0;
              d = t1 + 24177077 << 0;
            } else {
              ab = 704751109;
              t1 = blocks2[0] - 210244248;
              h = t1 - 1521486534 << 0;
              d = t1 + 143694565 << 0;
            }
            this.first = false;
          } else {
            s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
            s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
            ab = a & b;
            maj = ab ^ a & c ^ bc;
            ch = e & f ^ ~e & g;
            t1 = h + s1 + ch + K[j] + blocks2[j];
            t2 = s0 + maj;
            h = d + t1 << 0;
            d = t1 + t2 << 0;
          }
          s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
          s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
          da = d & a;
          maj = da ^ d & b ^ ab;
          ch = h & e ^ ~h & f;
          t1 = g + s1 + ch + K[j + 1] + blocks2[j + 1];
          t2 = s0 + maj;
          g = c + t1 << 0;
          c = t1 + t2 << 0;
          s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
          s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
          cd = c & d;
          maj = cd ^ c & a ^ da;
          ch = g & h ^ ~g & e;
          t1 = f + s1 + ch + K[j + 2] + blocks2[j + 2];
          t2 = s0 + maj;
          f = b + t1 << 0;
          b = t1 + t2 << 0;
          s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
          s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
          bc = b & c;
          maj = bc ^ b & d ^ cd;
          ch = f & g ^ ~f & h;
          t1 = e + s1 + ch + K[j + 3] + blocks2[j + 3];
          t2 = s0 + maj;
          e = a + t1 << 0;
          a = t1 + t2 << 0;
          this.chromeBugWorkAround = true;
        }
        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
        this.h4 = this.h4 + e << 0;
        this.h5 = this.h5 + f << 0;
        this.h6 = this.h6 + g << 0;
        this.h7 = this.h7 + h << 0;
      };
      Sha256.prototype.hex = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var hex = HEX_CHARS[h0 >>> 28 & 15] + HEX_CHARS[h0 >>> 24 & 15] + HEX_CHARS[h0 >>> 20 & 15] + HEX_CHARS[h0 >>> 16 & 15] + HEX_CHARS[h0 >>> 12 & 15] + HEX_CHARS[h0 >>> 8 & 15] + HEX_CHARS[h0 >>> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >>> 28 & 15] + HEX_CHARS[h1 >>> 24 & 15] + HEX_CHARS[h1 >>> 20 & 15] + HEX_CHARS[h1 >>> 16 & 15] + HEX_CHARS[h1 >>> 12 & 15] + HEX_CHARS[h1 >>> 8 & 15] + HEX_CHARS[h1 >>> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h2 >>> 28 & 15] + HEX_CHARS[h2 >>> 24 & 15] + HEX_CHARS[h2 >>> 20 & 15] + HEX_CHARS[h2 >>> 16 & 15] + HEX_CHARS[h2 >>> 12 & 15] + HEX_CHARS[h2 >>> 8 & 15] + HEX_CHARS[h2 >>> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h3 >>> 28 & 15] + HEX_CHARS[h3 >>> 24 & 15] + HEX_CHARS[h3 >>> 20 & 15] + HEX_CHARS[h3 >>> 16 & 15] + HEX_CHARS[h3 >>> 12 & 15] + HEX_CHARS[h3 >>> 8 & 15] + HEX_CHARS[h3 >>> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >>> 28 & 15] + HEX_CHARS[h4 >>> 24 & 15] + HEX_CHARS[h4 >>> 20 & 15] + HEX_CHARS[h4 >>> 16 & 15] + HEX_CHARS[h4 >>> 12 & 15] + HEX_CHARS[h4 >>> 8 & 15] + HEX_CHARS[h4 >>> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >>> 28 & 15] + HEX_CHARS[h5 >>> 24 & 15] + HEX_CHARS[h5 >>> 20 & 15] + HEX_CHARS[h5 >>> 16 & 15] + HEX_CHARS[h5 >>> 12 & 15] + HEX_CHARS[h5 >>> 8 & 15] + HEX_CHARS[h5 >>> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >>> 28 & 15] + HEX_CHARS[h6 >>> 24 & 15] + HEX_CHARS[h6 >>> 20 & 15] + HEX_CHARS[h6 >>> 16 & 15] + HEX_CHARS[h6 >>> 12 & 15] + HEX_CHARS[h6 >>> 8 & 15] + HEX_CHARS[h6 >>> 4 & 15] + HEX_CHARS[h6 & 15];
        if (!this.is224) {
          hex += HEX_CHARS[h7 >>> 28 & 15] + HEX_CHARS[h7 >>> 24 & 15] + HEX_CHARS[h7 >>> 20 & 15] + HEX_CHARS[h7 >>> 16 & 15] + HEX_CHARS[h7 >>> 12 & 15] + HEX_CHARS[h7 >>> 8 & 15] + HEX_CHARS[h7 >>> 4 & 15] + HEX_CHARS[h7 & 15];
        }
        return hex;
      };
      Sha256.prototype.toString = Sha256.prototype.hex;
      Sha256.prototype.digest = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var arr = [
          h0 >>> 24 & 255,
          h0 >>> 16 & 255,
          h0 >>> 8 & 255,
          h0 & 255,
          h1 >>> 24 & 255,
          h1 >>> 16 & 255,
          h1 >>> 8 & 255,
          h1 & 255,
          h2 >>> 24 & 255,
          h2 >>> 16 & 255,
          h2 >>> 8 & 255,
          h2 & 255,
          h3 >>> 24 & 255,
          h3 >>> 16 & 255,
          h3 >>> 8 & 255,
          h3 & 255,
          h4 >>> 24 & 255,
          h4 >>> 16 & 255,
          h4 >>> 8 & 255,
          h4 & 255,
          h5 >>> 24 & 255,
          h5 >>> 16 & 255,
          h5 >>> 8 & 255,
          h5 & 255,
          h6 >>> 24 & 255,
          h6 >>> 16 & 255,
          h6 >>> 8 & 255,
          h6 & 255
        ];
        if (!this.is224) {
          arr.push(h7 >>> 24 & 255, h7 >>> 16 & 255, h7 >>> 8 & 255, h7 & 255);
        }
        return arr;
      };
      Sha256.prototype.array = Sha256.prototype.digest;
      Sha256.prototype.arrayBuffer = function() {
        this.finalize();
        var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
        var dataView = new DataView(buffer);
        dataView.setUint32(0, this.h0);
        dataView.setUint32(4, this.h1);
        dataView.setUint32(8, this.h2);
        dataView.setUint32(12, this.h3);
        dataView.setUint32(16, this.h4);
        dataView.setUint32(20, this.h5);
        dataView.setUint32(24, this.h6);
        if (!this.is224) {
          dataView.setUint32(28, this.h7);
        }
        return buffer;
      };
      function HmacSha256(key, is224, sharedMemory) {
        var i, type = typeof key;
        if (type === "string") {
          var bytes = [], length = key.length, index = 0, code;
          for (i = 0; i < length; ++i) {
            code = key.charCodeAt(i);
            if (code < 128) {
              bytes[index++] = code;
            } else if (code < 2048) {
              bytes[index++] = 192 | code >>> 6;
              bytes[index++] = 128 | code & 63;
            } else if (code < 55296 || code >= 57344) {
              bytes[index++] = 224 | code >>> 12;
              bytes[index++] = 128 | code >>> 6 & 63;
              bytes[index++] = 128 | code & 63;
            } else {
              code = 65536 + ((code & 1023) << 10 | key.charCodeAt(++i) & 1023);
              bytes[index++] = 240 | code >>> 18;
              bytes[index++] = 128 | code >>> 12 & 63;
              bytes[index++] = 128 | code >>> 6 & 63;
              bytes[index++] = 128 | code & 63;
            }
          }
          key = bytes;
        } else {
          if (type === "object") {
            if (key === null) {
              throw new Error(ERROR);
            } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
              key = new Uint8Array(key);
            } else if (!Array.isArray(key)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
                throw new Error(ERROR);
              }
            }
          } else {
            throw new Error(ERROR);
          }
        }
        if (key.length > 64) {
          key = new Sha256(is224, true).update(key).array();
        }
        var oKeyPad = [], iKeyPad = [];
        for (i = 0; i < 64; ++i) {
          var b = key[i] || 0;
          oKeyPad[i] = 92 ^ b;
          iKeyPad[i] = 54 ^ b;
        }
        Sha256.call(this, is224, sharedMemory);
        this.update(iKeyPad);
        this.oKeyPad = oKeyPad;
        this.inner = true;
        this.sharedMemory = sharedMemory;
      }
      HmacSha256.prototype = new Sha256();
      HmacSha256.prototype.finalize = function() {
        Sha256.prototype.finalize.call(this);
        if (this.inner) {
          this.inner = false;
          var innerHash = this.array();
          Sha256.call(this, this.is224, this.sharedMemory);
          this.update(this.oKeyPad);
          this.update(innerHash);
          Sha256.prototype.finalize.call(this);
        }
      };
      var exports2 = createMethod();
      exports2.sha256 = exports2;
      exports2.sha224 = createMethod(true);
      exports2.sha256.hmac = createHmacMethod();
      exports2.sha224.hmac = createHmacMethod(true);
      if (COMMON_JS) {
        module.exports = exports2;
      } else {
        root.sha256 = exports2.sha256;
        root.sha224 = exports2.sha224;
        if (AMD) {
          define(function() {
            return exports2;
          });
        }
      }
    })();
  }
});

// node_modules/jose/dist/webapi/lib/buffer_utils.js
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var MAX_INT32 = 2 ** 32;
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf = new Uint8Array(size);
  let i = 0;
  for (const buffer of buffers) {
    buf.set(buffer, i);
    i += buffer.length;
  }
  return buf;
}

// node_modules/jose/dist/webapi/lib/base64.js
function encodeBase64(input) {
  if (Uint8Array.prototype.toBase64) {
    return input.toBase64();
  }
  const CHUNK_SIZE = 32768;
  const arr = [];
  for (let i = 0; i < input.length; i += CHUNK_SIZE) {
    arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
  }
  return btoa(arr.join(""));
}
function decodeBase64(encoded) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(encoded);
  }
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// node_modules/jose/dist/webapi/util/base64url.js
function decode(input) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(typeof input === "string" ? input : decoder.decode(input), {
      alphabet: "base64url"
    });
  }
  let encoded = input;
  if (encoded instanceof Uint8Array) {
    encoded = decoder.decode(encoded);
  }
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
  try {
    return decodeBase64(encoded);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
}
function encode(input) {
  let unencoded = input;
  if (typeof unencoded === "string") {
    unencoded = encoder.encode(unencoded);
  }
  if (Uint8Array.prototype.toBase64) {
    return unencoded.toBase64({ alphabet: "base64url", omitPadding: true });
  }
  return encodeBase64(unencoded).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

// node_modules/jose/dist/webapi/util/errors.js
var JOSEError = class extends Error {
  static code = "ERR_JOSE_GENERIC";
  code = "ERR_JOSE_GENERIC";
  constructor(message2, options) {
    super(message2, options);
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
};
var JWTClaimValidationFailed = class extends JOSEError {
  static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  claim;
  reason;
  payload;
  constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
    super(message2, { cause: { claim, reason, payload } });
    this.claim = claim;
    this.reason = reason;
    this.payload = payload;
  }
};
var JWTExpired = class extends JOSEError {
  static code = "ERR_JWT_EXPIRED";
  code = "ERR_JWT_EXPIRED";
  claim;
  reason;
  payload;
  constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
    super(message2, { cause: { claim, reason, payload } });
    this.claim = claim;
    this.reason = reason;
    this.payload = payload;
  }
};
var JOSEAlgNotAllowed = class extends JOSEError {
  static code = "ERR_JOSE_ALG_NOT_ALLOWED";
  code = "ERR_JOSE_ALG_NOT_ALLOWED";
};
var JOSENotSupported = class extends JOSEError {
  static code = "ERR_JOSE_NOT_SUPPORTED";
  code = "ERR_JOSE_NOT_SUPPORTED";
};
var JWSInvalid = class extends JOSEError {
  static code = "ERR_JWS_INVALID";
  code = "ERR_JWS_INVALID";
};
var JWTInvalid = class extends JOSEError {
  static code = "ERR_JWT_INVALID";
  code = "ERR_JWT_INVALID";
};
var JWSSignatureVerificationFailed = class extends JOSEError {
  static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  constructor(message2 = "signature verification failed", options) {
    super(message2, options);
  }
};

// node_modules/jose/dist/webapi/lib/crypto_key.js
function unusable(name, prop = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
  return algorithm.name === name;
}
function getHashLength(hash) {
  return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
  switch (alg) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function checkUsage(key, usage) {
  if (usage && !key.usages.includes(usage)) {
    throw new TypeError(`CryptoKey does not support this operation, its usages must include ${usage}.`);
  }
}
function checkSigCryptoKey(key, alg, usage) {
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!isAlgorithm(key.algorithm, "HMAC"))
        throw unusable("HMAC");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
        throw unusable("RSASSA-PKCS1-v1_5");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!isAlgorithm(key.algorithm, "RSA-PSS"))
        throw unusable("RSA-PSS");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "Ed25519":
    case "EdDSA": {
      if (!isAlgorithm(key.algorithm, "Ed25519"))
        throw unusable("Ed25519");
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!isAlgorithm(key.algorithm, "ECDSA"))
        throw unusable("ECDSA");
      const expected = getNamedCurve(alg);
      const actual = key.algorithm.namedCurve;
      if (actual !== expected)
        throw unusable(expected, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usage);
}

// node_modules/jose/dist/webapi/lib/invalid_key_input.js
function message(msg, actual, ...types) {
  types = types.filter(Boolean);
  if (types.length > 2) {
    const last = types.pop();
    msg += `one of type ${types.join(", ")}, or ${last}.`;
  } else if (types.length === 2) {
    msg += `one of type ${types[0]} or ${types[1]}.`;
  } else {
    msg += `of type ${types[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor?.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
var invalid_key_input_default = (actual, ...types) => {
  return message("Key must be ", actual, ...types);
};
function withAlg(alg, actual, ...types) {
  return message(`Key for the ${alg} algorithm must be `, actual, ...types);
}

// node_modules/jose/dist/webapi/lib/is_key_like.js
function isCryptoKey(key) {
  return key?.[Symbol.toStringTag] === "CryptoKey";
}
function isKeyObject(key) {
  return key?.[Symbol.toStringTag] === "KeyObject";
}
var is_key_like_default = (key) => {
  return isCryptoKey(key) || isKeyObject(key);
};

// node_modules/jose/dist/webapi/lib/is_disjoint.js
var is_disjoint_default = (...headers) => {
  const sources = headers.filter(Boolean);
  if (sources.length === 0 || sources.length === 1) {
    return true;
  }
  let acc;
  for (const header of sources) {
    const parameters = Object.keys(header);
    if (!acc || acc.size === 0) {
      acc = new Set(parameters);
      continue;
    }
    for (const parameter of parameters) {
      if (acc.has(parameter)) {
        return false;
      }
      acc.add(parameter);
    }
  }
  return true;
};

// node_modules/jose/dist/webapi/lib/is_object.js
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
var is_object_default = (input) => {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
};

// node_modules/jose/dist/webapi/lib/check_key_length.js
var check_key_length_default = (alg, key) => {
  if (alg.startsWith("RS") || alg.startsWith("PS")) {
    const { modulusLength } = key.algorithm;
    if (typeof modulusLength !== "number" || modulusLength < 2048) {
      throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
  }
};

// node_modules/jose/dist/webapi/lib/jwk_to_key.js
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (jwk.alg) {
        case "Ed25519":
        case "EdDSA":
          algorithm = { name: "Ed25519" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
var jwk_to_key_default = async (jwk) => {
  if (!jwk.alg) {
    throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
  }
  const { algorithm, keyUsages } = subtleMapping(jwk);
  const keyData = { ...jwk };
  delete keyData.alg;
  delete keyData.use;
  return crypto.subtle.importKey("jwk", keyData, algorithm, jwk.ext ?? (jwk.d ? false : true), jwk.key_ops ?? keyUsages);
};

// node_modules/jose/dist/webapi/lib/validate_crit.js
var validate_crit_default = (Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) => {
  if (joseHeader.crit !== void 0 && protectedHeader?.crit === void 0) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === void 0) {
    return  new Set();
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== void 0) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    }
    if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
};

// node_modules/jose/dist/webapi/lib/validate_algorithms.js
var validate_algorithms_default = (option, algorithms) => {
  if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
    throw new TypeError(`"${option}" option must be an array of strings`);
  }
  if (!algorithms) {
    return void 0;
  }
  return new Set(algorithms);
};

// node_modules/jose/dist/webapi/lib/is_jwk.js
function isJWK(key) {
  return is_object_default(key) && typeof key.kty === "string";
}
function isPrivateJWK(key) {
  return key.kty !== "oct" && typeof key.d === "string";
}
function isPublicJWK(key) {
  return key.kty !== "oct" && typeof key.d === "undefined";
}
function isSecretJWK(key) {
  return key.kty === "oct" && typeof key.k === "string";
}

// node_modules/jose/dist/webapi/lib/normalize_key.js
var cache;
var handleJWK = async (key, jwk, alg, freeze = false) => {
  cache ||=  new WeakMap();
  let cached = cache.get(key);
  if (cached?.[alg]) {
    return cached[alg];
  }
  const cryptoKey = await jwk_to_key_default({ ...jwk, alg });
  if (freeze)
    Object.freeze(key);
  if (!cached) {
    cache.set(key, { [alg]: cryptoKey });
  } else {
    cached[alg] = cryptoKey;
  }
  return cryptoKey;
};
var handleKeyObject = (keyObject, alg) => {
  cache ||=  new WeakMap();
  let cached = cache.get(keyObject);
  if (cached?.[alg]) {
    return cached[alg];
  }
  const isPublic = keyObject.type === "public";
  const extractable = isPublic ? true : false;
  let cryptoKey;
  if (keyObject.asymmetricKeyType === "x25519") {
    switch (alg) {
      case "ECDH-ES":
      case "ECDH-ES+A128KW":
      case "ECDH-ES+A192KW":
      case "ECDH-ES+A256KW":
        break;
      default:
        throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, isPublic ? [] : ["deriveBits"]);
  }
  if (keyObject.asymmetricKeyType === "ed25519") {
    if (alg !== "EdDSA" && alg !== "Ed25519") {
      throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, [
      isPublic ? "verify" : "sign"
    ]);
  }
  if (keyObject.asymmetricKeyType === "rsa") {
    let hash;
    switch (alg) {
      case "RSA-OAEP":
        hash = "SHA-1";
        break;
      case "RS256":
      case "PS256":
      case "RSA-OAEP-256":
        hash = "SHA-256";
        break;
      case "RS384":
      case "PS384":
      case "RSA-OAEP-384":
        hash = "SHA-384";
        break;
      case "RS512":
      case "PS512":
      case "RSA-OAEP-512":
        hash = "SHA-512";
        break;
      default:
        throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    if (alg.startsWith("RSA-OAEP")) {
      return keyObject.toCryptoKey({
        name: "RSA-OAEP",
        hash
      }, extractable, isPublic ? ["encrypt"] : ["decrypt"]);
    }
    cryptoKey = keyObject.toCryptoKey({
      name: alg.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5",
      hash
    }, extractable, [isPublic ? "verify" : "sign"]);
  }
  if (keyObject.asymmetricKeyType === "ec") {
    const nist =  new Map([
      ["prime256v1", "P-256"],
      ["secp384r1", "P-384"],
      ["secp521r1", "P-521"]
    ]);
    const namedCurve = nist.get(keyObject.asymmetricKeyDetails?.namedCurve);
    if (!namedCurve) {
      throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    if (alg === "ES256" && namedCurve === "P-256") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg === "ES384" && namedCurve === "P-384") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg === "ES512" && namedCurve === "P-521") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg.startsWith("ECDH-ES")) {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDH",
        namedCurve
      }, extractable, isPublic ? [] : ["deriveBits"]);
    }
  }
  if (!cryptoKey) {
    throw new TypeError("given KeyObject instance cannot be used for this algorithm");
  }
  if (!cached) {
    cache.set(keyObject, { [alg]: cryptoKey });
  } else {
    cached[alg] = cryptoKey;
  }
  return cryptoKey;
};
var normalize_key_default = async (key, alg) => {
  if (key instanceof Uint8Array) {
    return key;
  }
  if (isCryptoKey(key)) {
    return key;
  }
  if (isKeyObject(key)) {
    if (key.type === "secret") {
      return key.export();
    }
    if ("toCryptoKey" in key && typeof key.toCryptoKey === "function") {
      try {
        return handleKeyObject(key, alg);
      } catch (err) {
        if (err instanceof TypeError) {
          throw err;
        }
      }
    }
    let jwk = key.export({ format: "jwk" });
    return handleJWK(key, jwk, alg);
  }
  if (isJWK(key)) {
    if (key.k) {
      return decode(key.k);
    }
    return handleJWK(key, key, alg, true);
  }
  throw new Error("unreachable");
};

// node_modules/jose/dist/webapi/lib/check_key_type.js
var tag = (key) => key?.[Symbol.toStringTag];
var jwkMatchesOp = (alg, key, usage) => {
  if (key.use !== void 0) {
    let expected;
    switch (usage) {
      case "sign":
      case "verify":
        expected = "sig";
        break;
      case "encrypt":
      case "decrypt":
        expected = "enc";
        break;
    }
    if (key.use !== expected) {
      throw new TypeError(`Invalid key for this operation, its "use" must be "${expected}" when present`);
    }
  }
  if (key.alg !== void 0 && key.alg !== alg) {
    throw new TypeError(`Invalid key for this operation, its "alg" must be "${alg}" when present`);
  }
  if (Array.isArray(key.key_ops)) {
    let expectedKeyOp;
    switch (true) {
      case (usage === "sign" || usage === "verify"):
      case alg === "dir":
      case alg.includes("CBC-HS"):
        expectedKeyOp = usage;
        break;
      case alg.startsWith("PBES2"):
        expectedKeyOp = "deriveBits";
        break;
      case /^A\d{3}(?:GCM)?(?:KW)?$/.test(alg):
        if (!alg.includes("GCM") && alg.endsWith("KW")) {
          expectedKeyOp = usage === "encrypt" ? "wrapKey" : "unwrapKey";
        } else {
          expectedKeyOp = usage;
        }
        break;
      case (usage === "encrypt" && alg.startsWith("RSA")):
        expectedKeyOp = "wrapKey";
        break;
      case usage === "decrypt":
        expectedKeyOp = alg.startsWith("RSA") ? "unwrapKey" : "deriveBits";
        break;
    }
    if (expectedKeyOp && key.key_ops?.includes?.(expectedKeyOp) === false) {
      throw new TypeError(`Invalid key for this operation, its "key_ops" must include "${expectedKeyOp}" when present`);
    }
  }
  return true;
};
var symmetricTypeCheck = (alg, key, usage) => {
  if (key instanceof Uint8Array)
    return;
  if (isJWK(key)) {
    if (isSecretJWK(key) && jwkMatchesOp(alg, key, usage))
      return;
    throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
  }
  if (!is_key_like_default(key)) {
    throw new TypeError(withAlg(alg, key, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array"));
  }
  if (key.type !== "secret") {
    throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
  }
};
var asymmetricTypeCheck = (alg, key, usage) => {
  if (isJWK(key)) {
    switch (usage) {
      case "decrypt":
      case "sign":
        if (isPrivateJWK(key) && jwkMatchesOp(alg, key, usage))
          return;
        throw new TypeError(`JSON Web Key for this operation be a private JWK`);
      case "encrypt":
      case "verify":
        if (isPublicJWK(key) && jwkMatchesOp(alg, key, usage))
          return;
        throw new TypeError(`JSON Web Key for this operation be a public JWK`);
    }
  }
  if (!is_key_like_default(key)) {
    throw new TypeError(withAlg(alg, key, "CryptoKey", "KeyObject", "JSON Web Key"));
  }
  if (key.type === "secret") {
    throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
  }
  if (key.type === "public") {
    switch (usage) {
      case "sign":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
      case "decrypt":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
      default:
        break;
    }
  }
  if (key.type === "private") {
    switch (usage) {
      case "verify":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
      case "encrypt":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
      default:
        break;
    }
  }
};
var check_key_type_default = (alg, key, usage) => {
  const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A(?:128|192|256)(?:GCM)?(?:KW)?$/.test(alg) || /^A(?:128|192|256)CBC-HS(?:256|384|512)$/.test(alg);
  if (symmetric) {
    symmetricTypeCheck(alg, key, usage);
  } else {
    asymmetricTypeCheck(alg, key, usage);
  }
};

// node_modules/jose/dist/webapi/lib/subtle_dsa.js
var subtle_dsa_default = (alg, algorithm) => {
  const hash = `SHA-${alg.slice(-3)}`;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return { hash, name: "RSA-PSS", saltLength: parseInt(alg.slice(-3), 10) >> 3 };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash, name: "ECDSA", namedCurve: algorithm.namedCurve };
    case "Ed25519":
    case "EdDSA":
      return { name: "Ed25519" };
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
};

// node_modules/jose/dist/webapi/lib/get_sign_verify_key.js
var get_sign_verify_key_default = async (alg, key, usage) => {
  if (key instanceof Uint8Array) {
    if (!alg.startsWith("HS")) {
      throw new TypeError(invalid_key_input_default(key, "CryptoKey", "KeyObject", "JSON Web Key"));
    }
    return crypto.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
  }
  checkSigCryptoKey(key, alg, usage);
  return key;
};

// node_modules/jose/dist/webapi/lib/verify.js
var verify_default = async (alg, key, signature, data) => {
  const cryptoKey = await get_sign_verify_key_default(alg, key, "verify");
  check_key_length_default(alg, cryptoKey);
  const algorithm = subtle_dsa_default(alg, cryptoKey.algorithm);
  try {
    return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
  } catch {
    return false;
  }
};

// node_modules/jose/dist/webapi/jws/flattened/verify.js
async function flattenedVerify(jws, key, options) {
  if (!is_object_default(jws)) {
    throw new JWSInvalid("Flattened JWS must be an object");
  }
  if (jws.protected === void 0 && jws.header === void 0) {
    throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
  }
  if (jws.protected !== void 0 && typeof jws.protected !== "string") {
    throw new JWSInvalid("JWS Protected Header incorrect type");
  }
  if (jws.payload === void 0) {
    throw new JWSInvalid("JWS Payload missing");
  }
  if (typeof jws.signature !== "string") {
    throw new JWSInvalid("JWS Signature missing or incorrect type");
  }
  if (jws.header !== void 0 && !is_object_default(jws.header)) {
    throw new JWSInvalid("JWS Unprotected Header incorrect type");
  }
  let parsedProt = {};
  if (jws.protected) {
    try {
      const protectedHeader = decode(jws.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader));
    } catch {
      throw new JWSInvalid("JWS Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jws.header)) {
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jws.header
  };
  const extensions = validate_crit_default(JWSInvalid,  new Map([["b64", true]]), options?.crit, parsedProt, joseHeader);
  let b64 = true;
  if (extensions.has("b64")) {
    b64 = parsedProt.b64;
    if (typeof b64 !== "boolean") {
      throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
  }
  const { alg } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  }
  const algorithms = options && validate_algorithms_default("algorithms", options.algorithms);
  if (algorithms && !algorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
  }
  if (b64) {
    if (typeof jws.payload !== "string") {
      throw new JWSInvalid("JWS Payload must be a string");
    }
  } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
    throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jws);
    resolvedKey = true;
  }
  check_key_type_default(alg, key, "verify");
  const data = concat(encoder.encode(jws.protected ?? ""), encoder.encode("."), typeof jws.payload === "string" ? encoder.encode(jws.payload) : jws.payload);
  let signature;
  try {
    signature = decode(jws.signature);
  } catch {
    throw new JWSInvalid("Failed to base64url decode the signature");
  }
  const k = await normalize_key_default(key, alg);
  const verified = await verify_default(alg, k, signature, data);
  if (!verified) {
    throw new JWSSignatureVerificationFailed();
  }
  let payload;
  if (b64) {
    try {
      payload = decode(jws.payload);
    } catch {
      throw new JWSInvalid("Failed to base64url decode the payload");
    }
  } else if (typeof jws.payload === "string") {
    payload = encoder.encode(jws.payload);
  } else {
    payload = jws.payload;
  }
  const result = { payload };
  if (jws.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jws.header !== void 0) {
    result.unprotectedHeader = jws.header;
  }
  if (resolvedKey) {
    return { ...result, key: k };
  }
  return result;
}

// node_modules/jose/dist/webapi/jws/compact/verify.js
async function compactVerify(jws, key, options) {
  if (jws instanceof Uint8Array) {
    jws = decoder.decode(jws);
  }
  if (typeof jws !== "string") {
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
  if (length !== 3) {
    throw new JWSInvalid("Invalid Compact JWS");
  }
  const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
  const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}

// node_modules/jose/dist/webapi/lib/epoch.js
var epoch_default = (date) => Math.floor(date.getTime() / 1e3);

// node_modules/jose/dist/webapi/lib/secs.js
var minute = 60;
var hour = minute * 60;
var day = hour * 24;
var week = day * 7;
var year = day * 365.25;
var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
var secs_default = (str) => {
  const matched = REGEX.exec(str);
  if (!matched || matched[4] && matched[1]) {
    throw new TypeError("Invalid time period format");
  }
  const value = parseFloat(matched[2]);
  const unit = matched[3].toLowerCase();
  let numericDate;
  switch (unit) {
    case "sec":
    case "secs":
    case "second":
    case "seconds":
    case "s":
      numericDate = Math.round(value);
      break;
    case "minute":
    case "minutes":
    case "min":
    case "mins":
    case "m":
      numericDate = Math.round(value * minute);
      break;
    case "hour":
    case "hours":
    case "hr":
    case "hrs":
    case "h":
      numericDate = Math.round(value * hour);
      break;
    case "day":
    case "days":
    case "d":
      numericDate = Math.round(value * day);
      break;
    case "week":
    case "weeks":
    case "w":
      numericDate = Math.round(value * week);
      break;
    default:
      numericDate = Math.round(value * year);
      break;
  }
  if (matched[1] === "-" || matched[4] === "ago") {
    return -numericDate;
  }
  return numericDate;
};

// node_modules/jose/dist/webapi/lib/jwt_claims_set.js
function validateInput(label, input) {
  if (!Number.isFinite(input)) {
    throw new TypeError(`Invalid ${label} input`);
  }
  return input;
}
var normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, "");
var checkAudiencePresence = (audPayload, audOption) => {
  if (typeof audPayload === "string") {
    return audOption.includes(audPayload);
  }
  if (Array.isArray(audPayload)) {
    return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
  }
  return false;
};
function validateClaimsSet(protectedHeader, encodedPayload, options = {}) {
  let payload;
  try {
    payload = JSON.parse(decoder.decode(encodedPayload));
  } catch {
  }
  if (!is_object_default(payload)) {
    throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
  }
  const { typ } = options;
  if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
    throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, "typ", "check_failed");
  }
  const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
  const presenceCheck = [...requiredClaims];
  if (maxTokenAge !== void 0)
    presenceCheck.push("iat");
  if (audience !== void 0)
    presenceCheck.push("aud");
  if (subject !== void 0)
    presenceCheck.push("sub");
  if (issuer !== void 0)
    presenceCheck.push("iss");
  for (const claim of new Set(presenceCheck.reverse())) {
    if (!(claim in payload)) {
      throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, "missing");
    }
  }
  if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
    throw new JWTClaimValidationFailed('unexpected "iss" claim value', payload, "iss", "check_failed");
  }
  if (subject && payload.sub !== subject) {
    throw new JWTClaimValidationFailed('unexpected "sub" claim value', payload, "sub", "check_failed");
  }
  if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
    throw new JWTClaimValidationFailed('unexpected "aud" claim value', payload, "aud", "check_failed");
  }
  let tolerance;
  switch (typeof options.clockTolerance) {
    case "string":
      tolerance = secs_default(options.clockTolerance);
      break;
    case "number":
      tolerance = options.clockTolerance;
      break;
    case "undefined":
      tolerance = 0;
      break;
    default:
      throw new TypeError("Invalid clockTolerance option type");
  }
  const { currentDate } = options;
  const now = epoch_default(currentDate ||  new Date());
  if ((payload.iat !== void 0 || maxTokenAge) && typeof payload.iat !== "number") {
    throw new JWTClaimValidationFailed('"iat" claim must be a number', payload, "iat", "invalid");
  }
  if (payload.nbf !== void 0) {
    if (typeof payload.nbf !== "number") {
      throw new JWTClaimValidationFailed('"nbf" claim must be a number', payload, "nbf", "invalid");
    }
    if (payload.nbf > now + tolerance) {
      throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, "nbf", "check_failed");
    }
  }
  if (payload.exp !== void 0) {
    if (typeof payload.exp !== "number") {
      throw new JWTClaimValidationFailed('"exp" claim must be a number', payload, "exp", "invalid");
    }
    if (payload.exp <= now - tolerance) {
      throw new JWTExpired('"exp" claim timestamp check failed', payload, "exp", "check_failed");
    }
  }
  if (maxTokenAge) {
    const age = now - payload.iat;
    const max = typeof maxTokenAge === "number" ? maxTokenAge : secs_default(maxTokenAge);
    if (age - tolerance > max) {
      throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, "iat", "check_failed");
    }
    if (age < 0 - tolerance) {
      throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, "iat", "check_failed");
    }
  }
  return payload;
}
var JWTClaimsBuilder = class {
  #payload;
  constructor(payload) {
    if (!is_object_default(payload)) {
      throw new TypeError("JWT Claims Set MUST be an object");
    }
    this.#payload = structuredClone(payload);
  }
  data() {
    return encoder.encode(JSON.stringify(this.#payload));
  }
  get iss() {
    return this.#payload.iss;
  }
  set iss(value) {
    this.#payload.iss = value;
  }
  get sub() {
    return this.#payload.sub;
  }
  set sub(value) {
    this.#payload.sub = value;
  }
  get aud() {
    return this.#payload.aud;
  }
  set aud(value) {
    this.#payload.aud = value;
  }
  set jti(value) {
    this.#payload.jti = value;
  }
  set nbf(value) {
    if (typeof value === "number") {
      this.#payload.nbf = validateInput("setNotBefore", value);
    } else if (value instanceof Date) {
      this.#payload.nbf = validateInput("setNotBefore", epoch_default(value));
    } else {
      this.#payload.nbf = epoch_default( new Date()) + secs_default(value);
    }
  }
  set exp(value) {
    if (typeof value === "number") {
      this.#payload.exp = validateInput("setExpirationTime", value);
    } else if (value instanceof Date) {
      this.#payload.exp = validateInput("setExpirationTime", epoch_default(value));
    } else {
      this.#payload.exp = epoch_default( new Date()) + secs_default(value);
    }
  }
  set iat(value) {
    if (typeof value === "undefined") {
      this.#payload.iat = epoch_default( new Date());
    } else if (value instanceof Date) {
      this.#payload.iat = validateInput("setIssuedAt", epoch_default(value));
    } else if (typeof value === "string") {
      this.#payload.iat = validateInput("setIssuedAt", epoch_default( new Date()) + secs_default(value));
    } else {
      this.#payload.iat = validateInput("setIssuedAt", value);
    }
  }
};

// node_modules/jose/dist/webapi/jwt/verify.js
async function jwtVerify(jwt, key, options) {
  const verified = await compactVerify(jwt, key, options);
  if (verified.protectedHeader.crit?.includes("b64") && verified.protectedHeader.b64 === false) {
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  }
  const payload = validateClaimsSet(verified.protectedHeader, verified.payload, options);
  const result = { payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}

// node_modules/jose/dist/webapi/lib/sign.js
var sign_default = async (alg, key, data) => {
  const cryptoKey = await get_sign_verify_key_default(alg, key, "sign");
  check_key_length_default(alg, cryptoKey);
  const signature = await crypto.subtle.sign(subtle_dsa_default(alg, cryptoKey.algorithm), cryptoKey, data);
  return new Uint8Array(signature);
};

// node_modules/jose/dist/webapi/jws/flattened/sign.js
var FlattenedSign = class {
  #payload;
  #protectedHeader;
  #unprotectedHeader;
  constructor(payload) {
    if (!(payload instanceof Uint8Array)) {
      throw new TypeError("payload must be an instance of Uint8Array");
    }
    this.#payload = payload;
  }
  setProtectedHeader(protectedHeader) {
    if (this.#protectedHeader) {
      throw new TypeError("setProtectedHeader can only be called once");
    }
    this.#protectedHeader = protectedHeader;
    return this;
  }
  setUnprotectedHeader(unprotectedHeader) {
    if (this.#unprotectedHeader) {
      throw new TypeError("setUnprotectedHeader can only be called once");
    }
    this.#unprotectedHeader = unprotectedHeader;
    return this;
  }
  async sign(key, options) {
    if (!this.#protectedHeader && !this.#unprotectedHeader) {
      throw new JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
    }
    if (!is_disjoint_default(this.#protectedHeader, this.#unprotectedHeader)) {
      throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    }
    const joseHeader = {
      ...this.#protectedHeader,
      ...this.#unprotectedHeader
    };
    const extensions = validate_crit_default(JWSInvalid,  new Map([["b64", true]]), options?.crit, this.#protectedHeader, joseHeader);
    let b64 = true;
    if (extensions.has("b64")) {
      b64 = this.#protectedHeader.b64;
      if (typeof b64 !== "boolean") {
        throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
      }
    }
    const { alg } = joseHeader;
    if (typeof alg !== "string" || !alg) {
      throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    check_key_type_default(alg, key, "sign");
    let payload = this.#payload;
    if (b64) {
      payload = encoder.encode(encode(payload));
    }
    let protectedHeader;
    if (this.#protectedHeader) {
      protectedHeader = encoder.encode(encode(JSON.stringify(this.#protectedHeader)));
    } else {
      protectedHeader = encoder.encode("");
    }
    const data = concat(protectedHeader, encoder.encode("."), payload);
    const k = await normalize_key_default(key, alg);
    const signature = await sign_default(alg, k, data);
    const jws = {
      signature: encode(signature),
      payload: ""
    };
    if (b64) {
      jws.payload = decoder.decode(payload);
    }
    if (this.#unprotectedHeader) {
      jws.header = this.#unprotectedHeader;
    }
    if (this.#protectedHeader) {
      jws.protected = decoder.decode(protectedHeader);
    }
    return jws;
  }
};

// node_modules/jose/dist/webapi/jws/compact/sign.js
var CompactSign = class {
  #flattened;
  constructor(payload) {
    this.#flattened = new FlattenedSign(payload);
  }
  setProtectedHeader(protectedHeader) {
    this.#flattened.setProtectedHeader(protectedHeader);
    return this;
  }
  async sign(key, options) {
    const jws = await this.#flattened.sign(key, options);
    if (jws.payload === void 0) {
      throw new TypeError("use the flattened module for creating JWS with b64: false");
    }
    return `${jws.protected}.${jws.payload}.${jws.signature}`;
  }
};

// node_modules/jose/dist/webapi/jwt/sign.js
var SignJWT = class {
  #protectedHeader;
  #jwt;
  constructor(payload = {}) {
    this.#jwt = new JWTClaimsBuilder(payload);
  }
  setIssuer(issuer) {
    this.#jwt.iss = issuer;
    return this;
  }
  setSubject(subject) {
    this.#jwt.sub = subject;
    return this;
  }
  setAudience(audience) {
    this.#jwt.aud = audience;
    return this;
  }
  setJti(jwtId) {
    this.#jwt.jti = jwtId;
    return this;
  }
  setNotBefore(input) {
    this.#jwt.nbf = input;
    return this;
  }
  setExpirationTime(input) {
    this.#jwt.exp = input;
    return this;
  }
  setIssuedAt(input) {
    this.#jwt.iat = input;
    return this;
  }
  setProtectedHeader(protectedHeader) {
    this.#protectedHeader = protectedHeader;
    return this;
  }
  async sign(key, options) {
    const sig = new CompactSign(this.#jwt.data());
    sig.setProtectedHeader(this.#protectedHeader);
    if (Array.isArray(this.#protectedHeader?.crit) && this.#protectedHeader.crit.includes("b64") && this.#protectedHeader.b64 === false) {
      throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
    }
    return sig.sign(key, options);
  }
};

// src/authentication/auth.js
var import_tweetnacl = __toESM(require_nacl_fast(), 1);
async function generateJWTToken(request, env) {
  if (request.method !== "POST") return await respond(false, 405, "Method not allowed.");
  const password = await request.text();
  const savedPass = await env.kv.get("pwd");
  if (password !== savedPass) return await respond(false, 401, "Wrong password.");
  let secretKey = await env.kv.get("secretKey");
  if (!secretKey) {
    secretKey = generateSecretKey();
    await env.kv.put("secretKey", secretKey);
  }
  const secret = new TextEncoder().encode(secretKey);
  const jwtToken = await new SignJWT({ userID: globalThis.userID }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("24h").sign(secret);
  return await respond(true, 200, "Successfully generated Auth token", null, {
    "Set-Cookie": `jwtToken=${jwtToken}; HttpOnly; Secure; Max-Age=${7 * 24 * 60 * 60}; Path=/; SameSite=Strict`,
    "Content-Type": "text/plain"
  });
}
function generateSecretKey() {
  const key = (0, import_tweetnacl.randomBytes)(32);
  return Array.from(key, (byte) => byte.toString(16).padStart(2, "0")).join("");
}
async function Authenticate(request, env) {
  try {
    const secretKey = await env.kv.get("secretKey");
    const secret = new TextEncoder().encode(secretKey);
    const cookie = request.headers.get("Cookie")?.match(/(^|;\s*)jwtToken=([^;]*)/);
    const token = cookie ? cookie[2] : null;
    if (!token) {
      console.log("Unauthorized: Token not available!");
      return false;
    }
    const { payload } = await jwtVerify(token, secret);
    console.log(`Successfully authenticated, User ID: ${payload.userID}`);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
async function logout() {
  return await respond(true, 200, "Successfully logged out!", null, {
    "Set-Cookie": "jwtToken=; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
    "Content-Type": "text/plain"
  });
}
async function resetPassword(request, env) {
  let auth = await Authenticate(request, env);
  const oldPwd = await env.kv.get("pwd");
  if (oldPwd && !auth) return await respond(false, 401, "Unauthorized.");
  const newPwd = await request.text();
  if (newPwd === oldPwd) return await respond(false, 400, "Please enter a new Password.");
  await env.kv.put("pwd", newPwd);
  return await respond(true, 200, "Successfully logged in!", null, {
    "Set-Cookie": "jwtToken=; Path=/; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
    "Content-Type": "text/plain"
  });
}

// src/cores-configs/helpers.js
async function getConfigAddresses(cleanIPs, VLTRenableIPv6) {
  const resolved = await resolveDNS(globalThis.hostName);
  const defaultIPv6 = VLTRenableIPv6 ? resolved.ipv6.map((ip) => `[${ip}]`) : [];
  return [
    globalThis.hostName,
    "www.speedtest.net",
    ...resolved.ipv4,
    ...defaultIPv6,
    ...cleanIPs
  ];
}
function extractWireguardParams(warpConfigs, isWoW) {
  const index = isWoW ? 1 : 0;
  const warpConfig = warpConfigs[index].account.config;
  return {
    warpIPv6: `${warpConfig.interface.addresses.v6}/128`,
    reserved: warpConfig.client_id,
    publicKey: warpConfig.peers[0].public_key,
    privateKey: warpConfigs[index].privateKey
  };
}
function generateRemark(index, port, address, cleanIPs, protocol, configType) {
  let addressType;
  const type = configType ? ` ${configType}` : "";
  cleanIPs.includes(address) ? addressType = "Clean IP" : addressType = isDomain(address) ? "Domain" : isIPv4(address) ? "IPv4" : isIPv6(address) ? "IPv6" : "";
  return `\u{1F4A6} ${index} - ${protocol}${type} - ${addressType} : ${port}`;
}
function randomUpperCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += Math.random() < 0.5 ? str[i].toUpperCase() : str[i];
  }
  return result;
}
function getRandomPath(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function base64ToDecimal(base64) {
  const binaryString = atob(base64);
  const hexString = Array.from(binaryString).map((char) => char.charCodeAt(0).toString(16).padStart(2, "0")).join("");
  const decimalArray = hexString.match(/.{2}/g).map((hex) => parseInt(hex, 16));
  return decimalArray;
}
function isIPv4(address) {
  const ipv4Pattern = /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\/([0-9]|[1-2][0-9]|3[0-2]))?$/;
  return ipv4Pattern.test(address);
}
function isIPv6(address) {
  const ipv6Pattern = /^\[(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|::(?:[a-fA-F0-9]{1,4}:){0,7}|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6})\](?:\/(1[0-1][0-9]|12[0-8]|[0-9]?[0-9]))?$/;
  return ipv6Pattern.test(address);
}
function getDomain(url) {
  const newUrl = new URL(url);
  const host = newUrl.hostname;
  const isHostDomain = isDomain(host);
  return { host, isHostDomain };
}

// src/protocols/warp.js
var import_tweetnacl2 = __toESM(require_nacl_fast(), 1);
async function fetchWarpConfigs(env) {
  let warpConfigs = [];
  const apiBaseUrl = "https://api.cloudflareclient.com/v0a4005/reg";
  const warpKeys = [generateKeyPair(), generateKeyPair()];
  const commonPayload = {
    install_id: "",
    fcm_token: "",
    tos: ( new Date()).toISOString(),
    type: "Android",
    model: "PC",
    locale: "en_US",
    warp_enabled: true
  };
  const fetchAccount = async (key) => {
    try {
      const response = await fetch(apiBaseUrl, {
        method: "POST",
        headers: {
          "User-Agent": "insomnia/8.6.1",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...commonPayload, key: key.publicKey })
      });
      return await response.json();
    } catch (error) {
      throw new Error("Failed to get warp configs.", error);
    }
  };
  for (const key of warpKeys) {
    const accountData = await fetchAccount(key);
    warpConfigs.push({
      privateKey: key.privateKey,
      account: accountData
    });
  }
  const configs = JSON.stringify(warpConfigs);
  await env.kv.put("warpConfigs", configs);
  return configs;
}
var generateKeyPair = () => {
  const base64Encode = (array) => btoa(String.fromCharCode.apply(null, array));
  let privateKey = (0, import_tweetnacl2.randomBytes)(32);
  privateKey[0] &= 248;
  privateKey[31] &= 127;
  privateKey[31] |= 64;
  let publicKey = import_tweetnacl2.scalarMult.base(privateKey);
  const publicKeyBase64 = base64Encode(publicKey);
  const privateKeyBase64 = base64Encode(privateKey);
  return { publicKey: publicKeyBase64, privateKey: privateKeyBase64 };
};

// src/kv/handlers.js
async function getDataset(request, env) {
  let proxySettings, warpConfigs;
  try {
    proxySettings = await env.kv.get("proxySettings", { type: "json" });
    warpConfigs = await env.kv.get("warpConfigs", { type: "json" });
  } catch (error) {
    console.log(error);
    throw new Error(`An error occurred while getting KV - ${error}`);
  }
  if (!proxySettings) {
    proxySettings = await updateDataset(request, env);
    const configs = await fetchWarpConfigs(env);
    warpConfigs = configs;
  }
  if (globalThis.panelVersion !== proxySettings.panelVersion) proxySettings = await updateDataset(request, env);
  return { proxySettings, warpConfigs };
}
async function updateDataset(request, env) {
  let newSettings = request.method === "POST" ? await request.formData() : null;
  const isReset = newSettings?.get("resetSettings") === "true";
  let currentSettings;
  if (!isReset) {
    try {
      currentSettings = await env.kv.get("proxySettings", { type: "json" });
    } catch (error) {
      console.log(error);
      throw new Error(`An error occurred while getting current KV settings - ${error}`);
    }
  }
  const getxrayUdpNoises = () => {
    if (isReset) return null;
    let xrayUdpNoises = [];
    const udpNoiseModes = newSettings?.getAll("udpXrayNoiseMode") || [];
    const udpNoisePackets = newSettings?.getAll("udpXrayNoisePacket") || [];
    const udpNoiseDelaysMin = newSettings?.getAll("udpXrayNoiseDelayMin") || [];
    const udpNoiseDelaysMax = newSettings?.getAll("udpXrayNoiseDelayMax") || [];
    const udpNoiseCount = newSettings?.getAll("udpXrayNoiseCount") || [];
    xrayUdpNoises.push(...udpNoiseModes?.map((mode, index) => ({
      type: mode,
      packet: udpNoisePackets[index],
      delay: `${udpNoiseDelaysMin[index]}-${udpNoiseDelaysMax[index]}`,
      count: udpNoiseCount[index]
    })));
    return xrayUdpNoises.length ? xrayUdpNoises : currentSettings?.xrayUdpNoises;
  };
  const getPorts = () => {
    if (isReset) return null;
    const ports = [];
    [...globalThis.defaultHttpsPorts, ...globalThis.defaultHttpPorts].forEach((port) => {
      validateField(port) && ports.push(port);
    });
    return ports.length ? ports : currentSettings?.ports;
  };
  const validateField = (field, isCheckBox, isArray) => {
    const fieldValue = newSettings?.get(field);
    if (isCheckBox) return fieldValue ? true : false;
    if (fieldValue === void 0) return currentSettings?.[field];
    if (fieldValue === "true") return true;
    if (fieldValue === "false") return false;
    if (isArray) return fieldValue === "" ? [] : fieldValue.split("\r\n").map((value) => value.trim()).filter(Boolean);
    return fieldValue?.trim();
  };
  const populateField = (field, defaultValue, isCheckBox, isArray, callback) => {
    if (isReset) return defaultValue;
    if (!newSettings) return currentSettings?.[field] || defaultValue;
    return typeof callback === "function" ? callback(validateField(field, isCheckBox, isArray)) : validateField(field, isCheckBox, isArray);
  };
  const proxySettings = {
    remoteDNS: populateField("remoteDNS", "https://8.8.8.8/dns-query"),
    localDNS: populateField("localDNS", "8.8.8.8"),
    VLTRFakeDNS: populateField("VLTRFakeDNS", false),
    proxyIPs: populateField("proxyIPs", [], false, true),
    outProxy: populateField("outProxy", ""),
    outProxyParams: populateField("outProxy", {}, false, false, (field) => extractChainProxyParams(field)),
    cleanIPs: populateField("cleanIPs", [], false, true),
    VLTRenableIPv6: populateField("VLTRenableIPv6", true, false, true),
    customCdnAddrs: populateField("customCdnAddrs", [], false, true),
    customCdnHost: populateField("customCdnHost", ""),
    customCdnSni: populateField("customCdnSni", ""),
    bestVLTRInterval: populateField("bestVLTRInterval", "30"),
    VLConfigs: populateField("VLConfigs", true, true),
    TRConfigs: populateField("TRConfigs", true, true),
    ports: getPorts() ?? ["443"],
    fragmentLengthMin: populateField("fragmentLengthMin", "100"),
    fragmentLengthMax: populateField("fragmentLengthMax", "200"),
    fragmentIntervalMin: populateField("fragmentIntervalMin", "1"),
    fragmentIntervalMax: populateField("fragmentIntervalMax", "1"),
    fragmentPackets: populateField("fragmentPackets", "tlshello"),
    bypassLAN: populateField("bypassLAN", false, true),
    bypassIran: populateField("bypassIran", false, true),
    bypassChina: populateField("bypassChina", false, true),
    bypassRussia: populateField("bypassRussia", false, true),
    bypassOpenAi: populateField("bypassOpenAi", false, true),
    blockAds: populateField("blockAds", false, true),
    blockPorn: populateField("blockPorn", false, true),
    blockUDP443: populateField("blockUDP443", false, true),
    customBypassRules: populateField("customBypassRules", [], false, true),
    customBlockRules: populateField("customBlockRules", [], false, true),
    warpEndpoints: populateField("warpEndpoints", ["engage.cloudflareclient.com:2408"], false, true),
    warpFakeDNS: populateField("warpFakeDNS", false),
    warpEnableIPv6: populateField("warpEnableIPv6", true),
    bestWarpInterval: populateField("bestWarpInterval", "30"),
    xrayUdpNoises: getxrayUdpNoises() ?? [
      {
        type: "rand",
        packet: "50-100",
        delay: "1-1",
        count: 5
      }
    ],
    hiddifyNoiseMode: populateField("hiddifyNoiseMode", "m4"),
    knockerNoiseMode: populateField("knockerNoiseMode", "quic"),
    noiseCountMin: populateField("noiseCountMin", "10"),
    noiseCountMax: populateField("noiseCountMax", "15"),
    noiseSizeMin: populateField("noiseSizeMin", "5"),
    noiseSizeMax: populateField("noiseSizeMax", "10"),
    noiseDelayMin: populateField("noiseDelayMin", "1"),
    noiseDelayMax: populateField("noiseDelayMax", "1"),
    amneziaNoiseCount: populateField("amneziaNoiseCount", "5"),
    amneziaNoiseSizeMin: populateField("amneziaNoiseSizeMin", "50"),
    amneziaNoiseSizeMax: populateField("amneziaNoiseSizeMax", "100"),
    panelVersion: globalThis.panelVersion
  };
  try {
    await env.kv.put("proxySettings", JSON.stringify(proxySettings));
  } catch (error) {
    console.log(error);
    throw new Error(`An error occurred while updating KV - ${error}`);
  }
  return proxySettings;
}
function extractChainProxyParams(chainProxy) {
  let configParams = {};
  if (!chainProxy) return {};
  const url = new URL(chainProxy);
  const protocol = url.protocol.slice(0, -1);
  if (protocol === "vless") {
    const params = new URLSearchParams(url.search);
    configParams = {
      protocol,
      uuid: url.username,
      server: url.hostname,
      port: url.port
    };
    params.forEach((value, key) => {
      configParams[key] = value;
    });
  } else {
    configParams = {
      protocol,
      user: url.username,
      pass: url.password,
      server: url.host,
      port: url.port
    };
  }
  return configParams;
}

// src/cores-configs/clash.js
async function buildClashDNS(proxySettings, isChain, isWarp) {
  const {
    remoteDNS,
    localDNS,
    VLTRFakeDNS,
    outProxyParams,
    VLTRenableIPv6,
    warpFakeDNS,
    warpEnableIPv6,
    bypassIran,
    bypassChina,
    bypassRussia,
    bypassOpenAi,
    customBypassRules
  } = proxySettings;
  const finalLocalDNS = localDNS === "localhost" ? "system" : `${localDNS}#DIRECT`;
  const isFakeDNS = VLTRFakeDNS && !isWarp || warpFakeDNS && isWarp;
  const isIPv62 = VLTRenableIPv6 && !isWarp || warpEnableIPv6 && isWarp;
  const customBypassRulesDomains = customBypassRules.filter((address) => isDomain(address));
  const isBypass = bypassIran || bypassChina || bypassRussia;
  const bypassRules = [
    { rule: bypassIran, geosite: "ir" },
    { rule: bypassChina, geosite: "cn" },
    { rule: bypassRussia, geosite: "ru" }
  ];
  const dns = {
    "enable": true,
    "listen": "0.0.0.0:1053",
    "ipv6": isIPv62,
    "respect-rules": true,
    "use-system-hosts": false,
    "nameserver": isWarp ? [`1.1.1.1#\u2705 Selector`] : [`${remoteDNS}#\u2705 Selector`],
    "proxy-server-nameserver": [finalLocalDNS],
    "nameserver-policy": {
      "raw.githubusercontent.com": finalLocalDNS,
      "time.apple.com": finalLocalDNS
    }
  };
  if (isChain && !isWarp) {
    const chainOutboundServer = outProxyParams.server;
    if (isDomain(chainOutboundServer)) dns["nameserver-policy"][chainOutboundServer] = `${remoteDNS}#proxy-1`;
  }
  if (isBypass) {
    const geosites = [];
    bypassRules.forEach(({ rule, geosite }) => {
      rule && geosites.push(geosite);
    });
    dns["nameserver-policy"][`rule-set:${geosites.join(",")}`] = [finalLocalDNS];
  }
  customBypassRulesDomains.forEach((domain) => {
    dns["nameserver-policy"][`+.${domain}`] = [finalLocalDNS];
  });
  if (bypassOpenAi) dns["nameserver-policy"]["rule-set:openai"] = `178.22.122.100#DIRECT`;
  const dohHost = getDomain(remoteDNS);
  if (dohHost.isHostDomain && !isWarp) {
    dns["default-nameserver"] = [`https://8.8.8.8/dns-query#\u2705 Selector`];
  }
  if (isFakeDNS) Object.assign(dns, {
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": ["geosite:private"]
  });
  return dns;
}
function buildClashRoutingRules(proxySettings, isWarp) {
  const {
    bypassLAN,
    bypassIran,
    bypassChina,
    bypassRussia,
    bypassOpenAi,
    blockAds,
    blockPorn,
    blockUDP443,
    customBypassRules,
    customBlockRules
  } = proxySettings;
  const geoRules = [
    {
      rule: bypassLAN,
      type: "direct",
      noResolve: true,
      ruleProvider: {
        format: "yaml",
        geosite: "private",
        geoip: "private-cidr",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.yaml",
        geoipURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/private.yaml"
      }
    },
    {
      rule: bypassIran,
      type: "direct",
      ruleProvider: {
        format: "text",
        geosite: "ir",
        geoip: "ir-cidr",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ir.txt",
        geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ircidr.txt"
      }
    },
    {
      rule: bypassChina,
      type: "direct",
      ruleProvider: {
        format: "yaml",
        geosite: "cn",
        geoip: "cn-cidr",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.yaml",
        geoipURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.yaml"
      }
    },
    {
      rule: bypassRussia,
      type: "direct",
      ruleProvider: {
        format: "yaml",
        geosite: "ru",
        geoip: "ru-cidr",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/category-ru.yaml",
        geoipURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/ru.yaml"
      }
    },
    {
      rule: bypassOpenAi,
      type: "direct",
      ruleProvider: {
        format: "yaml",
        geosite: "openai",
        geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/openai.yaml"
      }
    },
    {
      rule: true,
      type: "block",
      ruleProvider: {
        format: "text",
        geosite: "malware",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/malware.txt"
      }
    },
    {
      rule: true,
      type: "block",
      ruleProvider: {
        format: "text",
        geosite: "phishing",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/phishing.txt"
      }
    },
    {
      rule: true,
      type: "block",
      ruleProvider: {
        format: "text",
        geosite: "cryptominers",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/cryptominers.txt"
      }
    },
    {
      rule: blockAds,
      type: "block",
      ruleProvider: {
        format: "text",
        geosite: "category-ads-all",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/category-ads-all.txt"
      }
    },
    {
      rule: blockPorn,
      type: "block",
      ruleProvider: {
        format: "text",
        geosite: "nsfw",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/nsfw.txt"
      }
    }
  ];
  function buildRuleProvider(tag2, format, behavior, url) {
    const fileExtension = format === "text" ? "txt" : format;
    return {
      [tag2]: {
        type: "http",
        format,
        behavior,
        url,
        path: `./ruleset/${tag2}.${fileExtension}`,
        interval: 86400
      }
    };
  }
  const directDomainRules = [], directIPRules = [], blockDomainRules = [], blockIPRules = [], ruleProviders = {};
  geoRules.forEach(({ rule, type, ruleProvider, noResolve }) => {
    const { geosite, geoip, geositeURL, geoipURL, format } = ruleProvider;
    if (rule) {
      if (geosite) {
        const targetRules = type === "direct" ? directDomainRules : blockDomainRules;
        targetRules.push(`RULE-SET,${geosite},${type === "direct" ? "DIRECT" : "REJECT"}`);
        const ruleProvider2 = buildRuleProvider(geosite, format, "domain", geositeURL);
        Object.assign(ruleProviders, ruleProvider2);
      }
      if (geoip) {
        const targetRules = type === "direct" ? directIPRules : blockIPRules;
        targetRules.push(`RULE-SET,${geoip},${type === "direct" ? "DIRECT" : "REJECT"}${noResolve ? ",no-resolve" : ""}`);
        const ruleProvider2 = buildRuleProvider(geoip, format, "ipcidr", geoipURL);
        Object.assign(ruleProviders, ruleProvider2);
      }
    }
  });
  const generateRule = (address, action) => {
    if (isDomain(address)) {
      return `DOMAIN-SUFFIX,${address},${action}`;
    } else {
      const type = isIPv4(address) ? "IP-CIDR" : "IP-CIDR6";
      const ip = isIPv6(address) ? address.replace(/\[|\]/g, "") : address;
      const cidr = address.includes("/") ? "" : isIPv4(address) ? "/32" : "/128";
      return `${type},${ip}${cidr},${action},no-resolve`;
    }
  };
  [...customBypassRules, ...customBlockRules].forEach((address, index) => {
    const isDirectRule = index < customBypassRules.length;
    const action = isDirectRule ? "DIRECT" : "REJECT";
    const targetRules = isDirectRule ? isDomain(address) ? directDomainRules : directIPRules : isDomain(address) ? blockDomainRules : blockIPRules;
    targetRules.push(generateRule(address, action));
  });
  let rules = [];
  isWarp && blockUDP443 && rules.push("AND,((NETWORK,udp),(DST-PORT,443)),REJECT");
  !isWarp && rules.push("NETWORK,udp,REJECT");
  rules = [...rules, ...blockDomainRules, ...blockIPRules, ...directDomainRules, ...directIPRules];
  rules.push("MATCH,\u2705 Selector");
  return { rules, ruleProviders };
}
function buildClashVLOutbound(remark, address, port, host, sni, path, allowInsecure) {
  const { userID: userID2, defaultHttpsPorts } = globalThis;
  const tls = defaultHttpsPorts.includes(port) ? true : false;
  const addr = isIPv6(address) ? address.replace(/\[|\]/g, "") : address;
  const outbound = {
    "name": remark,
    "type": "vless",
    "server": addr,
    "port": +port,
    "uuid": userID2,
    "packet-encoding": "packetaddr",
    "tls": tls,
    "network": "ws",
    "ws-opts": {
      "path": path,
      "headers": { "Host": host },
      "max-early-data": 2560,
      "early-data-header-name": "Sec-WebSocket-Protocol"
    }
  };
  if (tls) {
    Object.assign(outbound, {
      "servername": sni,
      "alpn": ["http/1.1"],
      "client-fingerprint": "random",
      "skip-cert-verify": allowInsecure
    });
  }
  return outbound;
}
function buildClashTROutbound(remark, address, port, host, sni, path, allowInsecure) {
  const addr = isIPv6(address) ? address.replace(/\[|\]/g, "") : address;
  return {
    "name": remark,
    "type": "trojan",
    "server": addr,
    "port": +port,
    "password": globalThis.TRPassword,
    "network": "ws",
    "ws-opts": {
      "path": path,
      "headers": { "Host": host },
      "max-early-data": 2560,
      "early-data-header-name": "Sec-WebSocket-Protocol"
    },
    "sni": sni,
    "alpn": ["http/1.1"],
    "client-fingerprint": "random",
    "skip-cert-verify": allowInsecure
  };
}
function buildClashWarpOutbound(proxySettings, warpConfigs, remark, endpoint, chain, isPro) {
  const { amneziaNoiseCount, amneziaNoiseSizeMin, amneziaNoiseSizeMax } = proxySettings;
  const ipv6Regex = /\[(.*?)\]/;
  const portRegex = /[^:]*$/;
  const endpointServer = endpoint.includes("[") ? endpoint.match(ipv6Regex)[1] : endpoint.split(":")[0];
  const endpointPort = endpoint.includes("[") ? +endpoint.match(portRegex)[0] : +endpoint.split(":")[1];
  const {
    warpIPv6,
    reserved,
    publicKey,
    privateKey
  } = extractWireguardParams(warpConfigs, chain);
  let outbound = {
    "name": remark,
    "type": "wireguard",
    "ip": "172.16.0.2/32",
    "ipv6": warpIPv6,
    "private-key": privateKey,
    "server": chain ? "162.159.192.1" : endpointServer,
    "port": chain ? 2408 : endpointPort,
    "public-key": publicKey,
    "allowed-ips": ["0.0.0.0/0", "::/0"],
    "reserved": reserved,
    "udp": true,
    "mtu": 1280
  };
  if (chain) outbound["dialer-proxy"] = chain;
  if (isPro) outbound["amnezia-wg-option"] = {
    "jc": amneziaNoiseCount,
    "jmin": amneziaNoiseSizeMin,
    "jmax": amneziaNoiseSizeMax
  };
  return outbound;
}
function buildClashChainOutbound(chainProxyParams) {
  if (["socks", "http"].includes(chainProxyParams.protocol)) {
    const { protocol, server: server2, port: port2, user, pass } = chainProxyParams;
    const proxyType = protocol === "socks" ? "socks5" : protocol;
    return {
      "name": "",
      "type": proxyType,
      "server": server2,
      "port": +port2,
      "dialer-proxy": "",
      "username": user,
      "password": pass
    };
  }
  const { server, port, uuid, flow, security, type, sni, fp, alpn, pbk, sid, headerType, host, path, serviceName } = chainProxyParams;
  const chainOutbound = {
    "name": "\u{1F4A6} Chain Best Ping \u{1F4A5}",
    "type": "vless",
    "server": server,
    "port": +port,
    "udp": true,
    "uuid": uuid,
    "flow": flow,
    "network": type,
    "dialer-proxy": "\u{1F4A6} Best Ping \u{1F4A5}"
  };
  if (security === "tls") {
    const tlsAlpns = alpn ? alpn?.split(",") : [];
    Object.assign(chainOutbound, {
      "tls": true,
      "servername": sni,
      "alpn": tlsAlpns,
      "client-fingerprint": fp
    });
  }
  if (security === "reality") Object.assign(chainOutbound, {
    "tls": true,
    "servername": sni,
    "client-fingerprint": fp,
    "reality-opts": {
      "public-key": pbk,
      "short-id": sid
    }
  });
  if (headerType === "http") {
    const httpPaths = path?.split(",");
    chainOutbound["http-opts"] = {
      "method": "GET",
      "path": httpPaths,
      "headers": {
        "Connection": ["keep-alive"],
        "Content-Type": ["application/octet-stream"]
      }
    };
  }
  if (type === "ws") {
    const wsPath = path?.split("?ed=")[0];
    const earlyData = +path?.split("?ed=")[1];
    chainOutbound["ws-opts"] = {
      "path": wsPath,
      "headers": {
        "Host": host
      },
      "max-early-data": earlyData,
      "early-data-header-name": "Sec-WebSocket-Protocol"
    };
  }
  if (type === "grpc") chainOutbound["grpc-opts"] = {
    "grpc-service-name": serviceName
  };
  return chainOutbound;
}
async function getClashWarpConfig(request, env, isPro) {
  const { proxySettings, warpConfigs } = await getDataset(request, env);
  const { warpEndpoints } = proxySettings;
  const config = structuredClone(clashConfigTemp);
  config.dns = await buildClashDNS(proxySettings, true, true);
  const { rules, ruleProviders } = buildClashRoutingRules(proxySettings, true);
  config.rules = rules;
  config["rule-providers"] = ruleProviders;
  const selector = config["proxy-groups"][0];
  const warpUrlTest = config["proxy-groups"][1];
  selector.proxies = [`\u{1F4A6} Warp ${isPro ? "Pro " : ""}- Best Ping \u{1F680}`, `\u{1F4A6} WoW ${isPro ? "Pro " : ""}- Best Ping \u{1F680}`];
  warpUrlTest.name = `\u{1F4A6} Warp ${isPro ? "Pro " : ""}- Best Ping \u{1F680}`;
  warpUrlTest.interval = +proxySettings.bestWarpInterval;
  config["proxy-groups"].push(structuredClone(warpUrlTest));
  const WoWUrlTest = config["proxy-groups"][2];
  WoWUrlTest.name = `\u{1F4A6} WoW ${isPro ? "Pro " : ""}- Best Ping \u{1F680}`;
  let warpRemarks = [], WoWRemarks = [];
  warpEndpoints.forEach((endpoint, index) => {
    const warpRemark = `\u{1F4A6} ${index + 1} - Warp ${isPro ? "Pro " : ""}\u{1F1EE}\u{1F1F7}`;
    const WoWRemark = `\u{1F4A6} ${index + 1} - WoW ${isPro ? "Pro " : ""}\u{1F30D}`;
    const warpOutbound = buildClashWarpOutbound(proxySettings, warpConfigs, warpRemark, endpoint, "", isPro);
    const WoWOutbound = buildClashWarpOutbound(proxySettings, warpConfigs, WoWRemark, endpoint, warpRemark);
    config.proxies.push(WoWOutbound, warpOutbound);
    warpRemarks.push(warpRemark);
    WoWRemarks.push(WoWRemark);
    warpUrlTest.proxies.push(warpRemark);
    WoWUrlTest.proxies.push(WoWRemark);
  });
  selector.proxies.push(...warpRemarks, ...WoWRemarks);
  return new Response(JSON.stringify(config, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store"
    }
  });
}
async function getClashNormalConfig(request, env) {
  const { hostName, defaultHttpsPorts } = globalThis;
  const { proxySettings } = await getDataset(request, env);
  let chainProxy;
  const {
    cleanIPs,
    proxyIPs,
    ports,
    VLConfigs,
    TRConfigs,
    outProxy,
    outProxyParams,
    customCdnAddrs,
    customCdnHost,
    customCdnSni,
    bestVLTRInterval,
    VLTRenableIPv6
  } = proxySettings;
  if (outProxy) {
    const proxyParams = outProxyParams;
    try {
      chainProxy = buildClashChainOutbound(proxyParams);
    } catch (error) {
      console.log("An error occured while parsing chain proxy: ", error);
      chainProxy = void 0;
      await env.kv.put("proxySettings", JSON.stringify({
        ...proxySettings,
        outProxy: "",
        outProxyParams: {}
      }));
    }
  }
  const config = structuredClone(clashConfigTemp);
  const { rules, ruleProviders } = buildClashRoutingRules(proxySettings, false);
  config.dns = await buildClashDNS(proxySettings, chainProxy, false);
  config.rules = rules;
  config["rule-providers"] = ruleProviders;
  const selector = config["proxy-groups"][0];
  const urlTest = config["proxy-groups"][1];
  selector.proxies = ["\u{1F4A6} Best Ping \u{1F4A5}"];
  urlTest.name = "\u{1F4A6} Best Ping \u{1F4A5}";
  urlTest.interval = +bestVLTRInterval;
  const Addresses = await getConfigAddresses(cleanIPs, VLTRenableIPv6);
  const totalAddresses = [...Addresses, ...customCdnAddrs];
  let proxyIndex = 1, path;
  const protocols = [
    ...VLConfigs ? ["VLESS"] : [],
    ...TRConfigs ? ["Trojan"] : []
  ];
  protocols.forEach((protocol) => {
    let protocolIndex = 1;
    ports.forEach((port) => {
      totalAddresses.forEach((addr) => {
        let VLOutbound, TROutbound;
        const isCustomAddr = customCdnAddrs.includes(addr);
        const configType = isCustomAddr ? "C" : "";
        const sni = isCustomAddr ? customCdnSni : randomUpperCase(hostName);
        const host = isCustomAddr ? customCdnHost : hostName;
        const remark = generateRemark(protocolIndex, port, addr, cleanIPs, protocol, configType).replace(" : ", " - ");
        if (protocol === "VLESS") {
          path = `/${getRandomPath(16)}${proxyIPs.length ? `/${btoa(proxyIPs.join(","))}` : ""}`;
          VLOutbound = buildClashVLOutbound(
            chainProxy ? `proxy-${proxyIndex}` : remark,
            addr,
            port,
            host,
            sni,
            path,
            isCustomAddr
          );
          config.proxies.push(VLOutbound);
          selector.proxies.push(remark);
          urlTest.proxies.push(remark);
        }
        if (protocol === "Trojan" && defaultHttpsPorts.includes(port)) {
          path = `/tr${getRandomPath(16)}${proxyIPs.length ? `/${btoa(proxyIPs.join(","))}` : ""}`;
          TROutbound = buildClashTROutbound(
            chainProxy ? `proxy-${proxyIndex}` : remark,
            addr,
            port,
            host,
            sni,
            path,
            isCustomAddr
          );
          config.proxies.push(TROutbound);
          selector.proxies.push(remark);
          urlTest.proxies.push(remark);
        }
        if (chainProxy) {
          let chain = structuredClone(chainProxy);
          chain["name"] = remark;
          chain["dialer-proxy"] = `proxy-${proxyIndex}`;
          config.proxies.push(chain);
        }
        proxyIndex++;
        protocolIndex++;
      });
    });
  });
  return new Response(JSON.stringify(config, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store"
    }
  });
}
var clashConfigTemp = {
  "mixed-port": 7890,
  "ipv6": true,
  "allow-lan": true,
  "mode": "rule",
  "log-level": "warning",
  "disable-keep-alive": false,
  "keep-alive-idle": 10,
  "keep-alive-interval": 15,
  "unified-delay": false,
  "geo-auto-update": true,
  "geo-update-interval": 168,
  "external-controller": "127.0.0.1:9090",
  "external-ui-url": "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
  "external-ui": "ui",
  "external-controller-cors": {
    "allow-origins": ["*"],
    "allow-private-network": true
  },
  "profile": {
    "store-selected": true,
    "store-fake-ip": true
  },
  "dns": {},
  "tun": {
    "enable": true,
    "stack": "mixed",
    "auto-route": true,
    "strict-route": true,
    "auto-detect-interface": true,
    "dns-hijack": [
      "any:53",
      "tcp://any:53"
    ],
    "mtu": 9e3
  },
  "sniffer": {
    "enable": true,
    "force-dns-mapping": true,
    "parse-pure-ip": true,
    "override-destination": false,
    "sniff": {
      "HTTP": {
        "ports": [80, 8080, 8880, 2052, 2082, 2086, 2095]
      },
      "TLS": {
        "ports": [443, 8443, 2053, 2083, 2087, 2096]
      }
    }
  },
  "proxies": [],
  "proxy-groups": [
    {
      "name": "\u2705 Selector",
      "type": "select",
      "proxies": []
    },
    {
      "name": "",
      "type": "url-test",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 30,
      "tolerance": 50,
      "proxies": []
    }
  ],
  "rule-providers": {},
  "rules": [],
  "ntp": {
    "enable": true,
    "server": "time.apple.com",
    "port": 123,
    "interval": 30
  }
};

// src/cores-configs/normalConfigs.js
async function getNormalConfigs(request, env) {
  const { hostName, defaultHttpsPorts, client: client2, userID: userID2, TRPassword } = globalThis;
  const { proxySettings } = await getDataset(request, env);
  const {
    remoteDNS,
    cleanIPs,
    proxyIPs,
    ports,
    VLConfigs,
    TRConfigs,
    fragmentLengthMin,
    fragmentLengthMax,
    fragmentIntervalMin,
    fragmentIntervalMax,
    outProxy,
    customCdnAddrs,
    customCdnHost,
    customCdnSni,
    VLTRenableIPv6
  } = proxySettings;
  let VLConfs = "", TRConfs = "", chainProxy = "";
  let proxyIndex = 1;
  const Addresses = await getConfigAddresses(cleanIPs, VLTRenableIPv6);
  const totalAddresses = [...Addresses, ...customCdnAddrs];
  const TRPass = encodeURIComponent(TRPassword);
  const earlyData = client2 === "singbox" ? "&eh=Sec-WebSocket-Protocol&ed=2560" : encodeURIComponent("?ed=2560");
  ports.forEach((port) => {
    totalAddresses.forEach((addr, index) => {
      const isCustomAddr = index > Addresses.length - 1;
      const configType = isCustomAddr ? "C" : "";
      const sni = isCustomAddr ? customCdnSni : randomUpperCase(hostName);
      const host = isCustomAddr ? customCdnHost : hostName;
      const path = `${getRandomPath(16)}${proxyIPs.length ? `/${encodeURIComponent(btoa(proxyIPs.join(",")))}` : ""}${earlyData}`;
      const VLRemark = encodeURIComponent(generateRemark(proxyIndex, port, addr, cleanIPs, "VLESS", configType));
      const TRRemark = encodeURIComponent(generateRemark(proxyIndex, port, addr, cleanIPs, "Trojan", configType));
      const tlsFields = defaultHttpsPorts.includes(port) ? `&security=tls&sni=${sni}&fp=randomized&alpn=http/1.1` : "&security=none";
      const hiddifyFragment = client2 === "hiddify-frag" && defaultHttpsPorts.includes(port) ? `&fragment=${fragmentLengthMin}-${fragmentLengthMax},${fragmentIntervalMin}-${fragmentIntervalMax},hellotls` : "";
      if (VLConfigs) VLConfs += `vless://${userID2}@${addr}:${port}?path=/${path}&encryption=none&host=${host}&type=ws${tlsFields}${hiddifyFragment}#${VLRemark}
`;
      if (TRConfigs) TRConfs += `trojan://${TRPass}@${addr}:${port}?path=/tr${path}&host=${host}&type=ws${tlsFields}${hiddifyFragment}#${TRRemark}
`;
      proxyIndex++;
    });
  });
  if (outProxy) {
    let chainRemark = `#${encodeURIComponent("\u{1F4A6} Chain proxy \u{1F517}")}`;
    if (outProxy.startsWith("socks") || outProxy.startsWith("http")) {
      const regex = /^(?:socks|http):\/\/([^@]+)@/;
      const isUserPass = outProxy.match(regex);
      const userPass = isUserPass ? isUserPass[1] : false;
      chainProxy = userPass ? outProxy.replace(userPass, btoa(userPass)) + chainRemark : outProxy + chainRemark;
    } else {
      chainProxy = outProxy.split("#")[0] + chainRemark;
    }
  }
  const configs = btoa(VLConfs + TRConfs + chainProxy);
  const headers = {
    "Content-Type": "text/plain;charset=utf-8",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    "CDN-Cache-Control": "no-store"
  };
  client2 === "hiddify-frag" && Object.assign(headers, {
    "Profile-Title": "BPB Fragment",
    "DNS": remoteDNS
  });
  return new Response(configs, {
    status: 200,
    headers
  });
}
async function getHiddifyWarpConfigs(request, env, isPro) {
  const { proxySettings } = await getDataset(request, env);
  const {
    warpEndpoints,
    hiddifyNoiseMode,
    noiseCountMin,
    noiseCountMax,
    noiseSizeMin,
    noiseSizeMax,
    noiseDelayMin,
    noiseDelayMax
  } = proxySettings;
  let configs = "";
  warpEndpoints.forEach((endpoint, index) => {
    configs += `warp://${endpoint}${isPro ? `?ifp=${noiseCountMin}-${noiseCountMax}&ifps=${noiseSizeMin}-${noiseSizeMax}&ifpd=${noiseDelayMin}-${noiseDelayMax}&ifpm=${hiddifyNoiseMode}` : ""}#${encodeURIComponent(`\u{1F4A6} ${index + 1} - Warp \u{1F1EE}\u{1F1F7}`)}&&detour=warp://162.159.192.1:2408#${encodeURIComponent(`\u{1F4A6} ${index + 1} - WoW \u{1F30D}`)}
`;
  });
  return new Response(btoa(configs), {
    status: 200,
    headers: {
      "Profile-Title": `BPB Warp${isPro ? " Pro" : ""}`,
      "DNS": "1.1.1.1",
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store"
    }
  });
}

// src/cores-configs/sing-box.js
function buildSingBoxDNS(proxySettings, outboundAddrs, isWarp) {
  const {
    remoteDNS,
    localDNS,
    VLTRFakeDNS,
    VLTRenableIPv6,
    warpFakeDNS,
    warpEnableIPv6,
    bypassIran,
    bypassChina,
    bypassRussia,
    bypassOpenAi,
    blockAds,
    blockPorn,
    customBypassRules,
    customBlockRules
  } = proxySettings;
  let fakeip;
  const dohHost = getDomain(remoteDNS);
  const isFakeDNS = VLTRFakeDNS && !isWarp || warpFakeDNS && isWarp;
  const isIPv62 = VLTRenableIPv6 && !isWarp || warpEnableIPv6 && isWarp;
  const customBypassRulesDomains = customBypassRules.filter((address) => isDomain(address));
  const geoRules = [
    { rule: bypassIran, type: "direct", geosite: "geosite-ir", geoip: "geoip-ir" },
    { rule: bypassChina, type: "direct", geosite: "geosite-cn", geoip: "geoip-cn" },
    { rule: bypassRussia, type: "direct", geosite: "geosite-category-ru", geoip: "geoip-ru" },
    { rule: true, type: "block", geosite: "geosite-malware" },
    { rule: true, type: "block", geosite: "geosite-phishing" },
    { rule: true, type: "block", geosite: "geosite-cryptominers" },
    { rule: blockAds, type: "block", geosite: "geosite-category-ads-all" },
    { rule: blockPorn, type: "block", geosite: "geosite-nsfw" }
  ];
  const servers = [
    {
      address: isWarp ? "1.1.1.1" : remoteDNS,
      address_resolver: dohHost.isHostDomain ? "doh-resolver" : "dns-direct",
      detour: "\u2705 Selector",
      tag: "dns-remote"
    },
    {
      address: localDNS === "localhost" ? "local" : localDNS,
      detour: "direct",
      tag: "dns-direct"
    },
    {
      address: "local",
      tag: "dns-local"
    }
  ];
  dohHost.isHostDomain && !isWarp && servers.push({
    address: "https://8.8.8.8/dns-query",
    detour: "\u2705 Selector",
    tag: "doh-resolver"
  });
  bypassOpenAi && servers.push({
    address: "178.22.122.100",
    detour: "direct",
    tag: "dns-openai"
  });
  let outboundRule;
  if (isWarp) {
    outboundRule = {
      outbound: "any",
      server: "dns-direct"
    };
  } else {
    const outboundDomains = outboundAddrs.filter((address) => isDomain(address));
    const uniqueDomains = [...new Set(outboundDomains)];
    outboundRule = {
      domain: uniqueDomains,
      server: "dns-direct"
    };
  }
  const rules = [
    outboundRule,
    {
      domain: [
        "raw.githubusercontent.com",
        "time.apple.com"
      ],
      server: "dns-direct"
    },
    {
      clash_mode: "Direct",
      server: "dns-direct"
    },
    {
      clash_mode: "Global",
      server: "dns-remote"
    }
  ];
  let blockRule = {
    disable_cache: true,
    rule_set: [],
    action: "reject"
  };
  geoRules.forEach(({ rule, type, geosite, geoip }) => {
    rule && type === "direct" && rules.push({
      type: "logical",
      mode: "and",
      rules: [
        { rule_set: geosite },
        { rule_set: geoip }
      ],
      server: "dns-direct"
    });
    rule && type === "block" && blockRule.rule_set.push(geosite);
  });
  rules.push(blockRule);
  const createRule = (server) => ({
    domain_suffix: [],
    server
  });
  let domainDirectRule, domainBlockRule;
  if (customBypassRulesDomains.length) {
    domainDirectRule = createRule("dns-direct");
    customBypassRulesDomains.forEach((domain) => {
      domainDirectRule.domain_suffix.push(domain);
    });
    rules.push(domainDirectRule);
  }
  if (customBlockRules.length) {
    domainBlockRule = createRule("dns-block");
    customBlockRules.forEach((domain) => {
      domainBlockRule.domain_suffix.push(domain);
    });
    rules.push(domainBlockRule);
  }
  bypassOpenAi && rules.push({
    rule_set: "geosite-openai",
    server: "dns-openai"
  });
  if (isFakeDNS) {
    servers.push({
      address: "fakeip",
      tag: "dns-fake"
    });
    rules.push({
      disable_cache: true,
      inbound: "tun-in",
      query_type: [
        "A",
        "AAAA"
      ],
      server: "dns-fake"
    });
    fakeip = {
      enabled: true,
      inet4_range: "198.18.0.0/15"
    };
    if (isIPv62) fakeip.inet6_range = "fc00::/18";
  }
  return { servers, rules, fakeip };
}
function buildSingBoxRoutingRules(proxySettings, isWarp) {
  const {
    bypassLAN,
    bypassIran,
    bypassChina,
    bypassRussia,
    bypassOpenAi,
    blockAds,
    blockPorn,
    blockUDP443,
    customBypassRules,
    customBlockRules
  } = proxySettings;
  const defaultRules = [
    {
      action: "sniff"
    },
    {
      action: "hijack-dns",
      mode: "or",
      rules: [
        {
          inbound: "dns-in"
        },
        {
          protocol: "dns"
        }
      ],
      type: "logical"
    },
    {
      clash_mode: "Direct",
      outbound: "direct"
    },
    {
      clash_mode: "Global",
      outbound: "\u2705 Selector"
    }
  ];
  const geoRules = [
    {
      rule: bypassIran,
      type: "direct",
      ruleSet: {
        geosite: "geosite-ir",
        geoip: "geoip-ir",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-ir.srs",
        geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-ir.srs"
      }
    },
    {
      rule: bypassChina,
      type: "direct",
      ruleSet: {
        geosite: "geosite-cn",
        geoip: "geoip-cn",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-cn.srs",
        geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-cn.srs"
      }
    },
    {
      rule: bypassRussia,
      type: "direct",
      ruleSet: {
        geosite: "geosite-category-ru",
        geoip: "geoip-ru",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-category-ru.srs",
        geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-ru.srs"
      }
    },
    {
      rule: bypassOpenAi,
      type: "direct",
      ruleSet: {
        geosite: "geosite-openai",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-openai.srs"
      }
    },
    {
      rule: true,
      type: "block",
      ruleSet: {
        geosite: "geosite-malware",
        geoip: "geoip-malware",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-malware.srs",
        geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-malware.srs"
      }
    },
    {
      rule: true,
      type: "block",
      ruleSet: {
        geosite: "geosite-phishing",
        geoip: "geoip-phishing",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-phishing.srs",
        geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-phishing.srs"
      }
    },
    {
      rule: true,
      type: "block",
      ruleSet: {
        geosite: "geosite-cryptominers",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-cryptominers.srs"
      }
    },
    {
      rule: blockAds,
      type: "block",
      ruleSet: {
        geosite: "geosite-category-ads-all",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-category-ads-all.srs"
      }
    },
    {
      rule: blockPorn,
      type: "block",
      ruleSet: {
        geosite: "geosite-nsfw",
        geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-nsfw.srs"
      }
    }
  ];
  const directDomainRules = [], directIPRules = [], blockDomainRules = [], blockIPRules = [], ruleSets = [];
  bypassLAN && directIPRules.push({
    ip_is_private: true,
    outbound: "direct"
  });
  const createRule = (rule, action) => {
    return action === "direct" ? {
      [rule]: [],
      outbound: action
    } : {
      [rule]: [],
      action
    };
  };
  const routingRuleSet = {
    type: "remote",
    tag: "",
    format: "binary",
    url: "",
    download_detour: "direct"
  };
  const directDomainRule = createRule("rule_set", "direct");
  ;
  const directIPRule = createRule("rule_set", "direct");
  ;
  const blockDomainRule = createRule("rule_set", "reject");
  const blockIPRule = createRule("rule_set", "reject");
  geoRules.forEach(({ rule, type, ruleSet }) => {
    if (!rule) return;
    const { geosite, geoip, geositeURL, geoipURL } = ruleSet;
    const isDirect = type === "direct";
    const domainRule = isDirect ? directDomainRule : blockDomainRule;
    const ipRule = isDirect ? directIPRule : blockIPRule;
    domainRule.rule_set.push(geosite);
    ruleSets.push({ ...routingRuleSet, tag: geosite, url: geositeURL });
    if (geoip) {
      ipRule.rule_set.push(geoip);
      ruleSets.push({ ...routingRuleSet, tag: geoip, url: geoipURL });
    }
  });
  const pushRuleIfNotEmpty = (rule, targetArray) => {
    if (rule.rule_set?.length || rule.domain_suffix?.length || rule.ip_cidr?.length) {
      targetArray.push(rule);
    }
  };
  pushRuleIfNotEmpty(directDomainRule, directDomainRules);
  pushRuleIfNotEmpty(directIPRule, directIPRules);
  pushRuleIfNotEmpty(blockDomainRule, blockDomainRules);
  pushRuleIfNotEmpty(blockIPRule, blockIPRules);
  const processRules = (addresses, action) => {
    const domainRule = createRule("domain_suffix", action);
    const ipRule = createRule("ip_cidr", action);
    addresses.forEach((address) => {
      if (isDomain(address)) {
        domainRule.domain_suffix.push(address);
      } else {
        const ip = isIPv6(address) ? address.replace(/\[|\]/g, "") : address;
        ipRule.ip_cidr.push(ip);
      }
    });
    pushRuleIfNotEmpty(domainRule, action === "direct" ? directDomainRules : blockDomainRules);
    pushRuleIfNotEmpty(ipRule, action === "direct" ? directIPRules : blockIPRules);
  };
  customBypassRules.length && processRules(customBypassRules, "direct");
  customBlockRules.length && processRules(customBlockRules, "reject");
  let rules = [];
  isWarp && blockUDP443 && rules.push({
    network: "udp",
    port: 443,
    protocol: "quic",
    action: "reject"
  });
  !isWarp && rules.push({
    network: "udp",
    action: "reject"
  });
  rules = [...defaultRules, ...rules, ...blockDomainRules, ...blockIPRules, ...directDomainRules, ...directIPRules];
  return { rules, rule_set: ruleSets };
}
function buildSingBoxVLOutbound(proxySettings, remark, address, port, host, sni, allowInsecure) {
  const { userID: userID2, defaultHttpsPorts } = globalThis;
  const { VLTRenableIPv6, proxyIPs } = proxySettings;
  const path = `/${getRandomPath(16)}${proxyIPs.length ? `/${btoa(proxyIPs.join(","))}` : ""}`;
  const tls = defaultHttpsPorts.includes(port) ? true : false;
  const outbound = {
    type: "vless",
    server: address,
    server_port: +port,
    uuid: userID2,
    packet_encoding: "",
    tls: {
      alpn: "http/1.1",
      enabled: true,
      insecure: allowInsecure,
      server_name: sni,
      utls: {
        enabled: true,
        fingerprint: "randomized"
      }
    },
    transport: {
      early_data_header_name: "Sec-WebSocket-Protocol",
      max_early_data: 2560,
      headers: {
        Host: host
      },
      path,
      type: "ws"
    },
    tcp_fast_open: true,
    tcp_multi_path: true,
    tag: remark
  };
  if (isDomain(address)) outbound.domain_strategy = VLTRenableIPv6 ? "prefer_ipv4" : "ipv4_only";
  if (!tls) delete outbound.tls;
  return outbound;
}
function buildSingBoxTROutbound(proxySettings, remark, address, port, host, sni, allowInsecure) {
  const { TRPassword, defaultHttpsPorts } = globalThis;
  const { VLTRenableIPv6, proxyIPs } = proxySettings;
  const path = `/tr${getRandomPath(16)}${proxyIPs.length ? `/${btoa(proxyIPs.join(","))}` : ""}`;
  const tls = defaultHttpsPorts.includes(port) ? true : false;
  const outbound = {
    type: "trojan",
    password: TRPassword,
    server: address,
    server_port: +port,
    tls: {
      alpn: "http/1.1",
      enabled: true,
      insecure: allowInsecure,
      server_name: sni,
      utls: {
        enabled: true,
        fingerprint: "randomized"
      }
    },
    transport: {
      early_data_header_name: "Sec-WebSocket-Protocol",
      max_early_data: 2560,
      headers: {
        Host: host
      },
      path,
      type: "ws"
    },
    tcp_fast_open: true,
    tcp_multi_path: true,
    tag: remark
  };
  if (isDomain(address)) outbound.domain_strategy = VLTRenableIPv6 ? "prefer_ipv4" : "ipv4_only";
  if (!tls) delete outbound.tls;
  return outbound;
}
function buildSingBoxWarpOutbound(proxySettings, warpConfigs, remark, endpoint, chain) {
  const ipv6Regex = /\[(.*?)\]/;
  const portRegex = /[^:]*$/;
  const endpointServer = endpoint.includes("[") ? endpoint.match(ipv6Regex)[1] : endpoint.split(":")[0];
  const endpointPort = endpoint.includes("[") ? +endpoint.match(portRegex)[0] : +endpoint.split(":")[1];
  const server = chain ? "162.159.192.1" : endpointServer;
  const port = chain ? 2408 : endpointPort;
  const { warpEnableIPv6 } = proxySettings;
  const {
    warpIPv6,
    reserved,
    publicKey,
    privateKey
  } = extractWireguardParams(warpConfigs, chain);
  const outbound = {
    address: [
      "172.16.0.2/32",
      warpIPv6
    ],
    mtu: 1280,
    peers: [
      {
        address: server,
        port,
        public_key: publicKey,
        reserved: base64ToDecimal(reserved),
        allowed_ips: [
          "0.0.0.0/0",
          "::/0"
        ],
        persistent_keepalive_interval: 5
      }
    ],
    private_key: privateKey,
    type: "wireguard",
    tag: remark
  };
  if (isDomain(server)) outbound.domain_strategy = warpEnableIPv6 ? "prefer_ipv4" : "ipv4_only";
  if (chain) outbound.detour = chain;
  return outbound;
}
function buildSingBoxChainOutbound(chainProxyParams, VLTRenableIPv6) {
  if (["socks", "http"].includes(chainProxyParams.protocol)) {
    const { protocol, server: server2, port: port2, user, pass } = chainProxyParams;
    const chainOutbound2 = {
      type: protocol,
      tag: "",
      server: server2,
      server_port: +port2,
      username: user,
      password: pass,
      detour: ""
    };
    if (isDomain(server2)) chainOutbound2.domain_strategy = VLTRenableIPv6 ? "prefer_ipv4" : "ipv4_only";
    if (protocol === "socks") chainOutbound2.version = "5";
    return chainOutbound2;
  }
  const { server, port, uuid, flow, security, type, sni, fp, alpn, pbk, sid, headerType, host, path, serviceName } = chainProxyParams;
  const chainOutbound = {
    type: "vless",
    tag: "",
    server,
    server_port: +port,
    uuid,
    flow,
    detour: ""
  };
  if (isDomain(server)) chainOutbound.domain_strategy = VLTRenableIPv6 ? "prefer_ipv4" : "ipv4_only";
  if (security === "tls" || security === "reality") {
    const tlsAlpns = alpn ? alpn?.split(",").filter((value) => value !== "h2") : [];
    chainOutbound.tls = {
      enabled: true,
      server_name: sni,
      insecure: false,
      alpn: tlsAlpns,
      utls: {
        enabled: true,
        fingerprint: fp
      }
    };
    if (security === "reality") {
      chainOutbound.tls.reality = {
        enabled: true,
        public_key: pbk,
        short_id: sid
      };
      delete chainOutbound.tls.alpn;
    }
  }
  if (headerType === "http") {
    const httpHosts = host?.split(",");
    chainOutbound.transport = {
      type: "http",
      host: httpHosts,
      path,
      method: "GET",
      headers: {
        "Connection": ["keep-alive"],
        "Content-Type": ["application/octet-stream"]
      }
    };
  }
  if (type === "ws") {
    const wsPath = path?.split("?ed=")[0];
    const earlyData = +path?.split("?ed=")[1] || 0;
    chainOutbound.transport = {
      type: "ws",
      path: wsPath,
      headers: { Host: host },
      max_early_data: earlyData,
      early_data_header_name: "Sec-WebSocket-Protocol"
    };
  }
  if (type === "grpc") chainOutbound.transport = {
    type: "grpc",
    service_name: serviceName
  };
  return chainOutbound;
}
async function getSingBoxWarpConfig(request, env) {
  const { proxySettings, warpConfigs } = await getDataset(request, env);
  const { warpEndpoints } = proxySettings;
  const config = structuredClone(singboxConfigTemp);
  config.endpoints = [];
  const dnsObject = buildSingBoxDNS(proxySettings, void 0, true);
  const { rules, rule_set } = buildSingBoxRoutingRules(proxySettings, true);
  config.dns.servers = dnsObject.servers;
  config.dns.rules = dnsObject.rules;
  if (dnsObject.fakeip) config.dns.fakeip = dnsObject.fakeip;
  config.route.rules = rules;
  config.route.rule_set = rule_set;
  const selector = config.outbounds[0];
  const warpUrlTest = config.outbounds[1];
  selector.outbounds = [`\u{1F4A6} Warp - Best Ping \u{1F680}`, `\u{1F4A6} WoW - Best Ping \u{1F680}`];
  config.outbounds.splice(2, 0, structuredClone(warpUrlTest));
  const WoWUrlTest = config.outbounds[2];
  warpUrlTest.tag = `\u{1F4A6} Warp - Best Ping \u{1F680}`;
  warpUrlTest.interval = `${proxySettings.bestWarpInterval}s`;
  WoWUrlTest.tag = `\u{1F4A6} WoW - Best Ping \u{1F680}`;
  WoWUrlTest.interval = `${proxySettings.bestWarpInterval}s`;
  const warpRemarks = [], WoWRemarks = [];
  warpEndpoints.forEach((endpoint, index) => {
    const warpRemark = `\u{1F4A6} ${index + 1} - Warp \u{1F1EE}\u{1F1F7}`;
    const WoWRemark = `\u{1F4A6} ${index + 1} - WoW \u{1F30D}`;
    const warpOutbound = buildSingBoxWarpOutbound(proxySettings, warpConfigs, warpRemark, endpoint, "");
    const WoWOutbound = buildSingBoxWarpOutbound(proxySettings, warpConfigs, WoWRemark, endpoint, warpRemark);
    config.endpoints.push(WoWOutbound, warpOutbound);
    warpRemarks.push(warpRemark);
    WoWRemarks.push(WoWRemark);
    warpUrlTest.outbounds.push(warpRemark);
    WoWUrlTest.outbounds.push(WoWRemark);
  });
  selector.outbounds.push(...warpRemarks, ...WoWRemarks);
  return new Response(JSON.stringify(config, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store"
    }
  });
}
async function getSingBoxCustomConfig(request, env) {
  const { hostName } = globalThis;
  const { proxySettings } = await getDataset(request, env);
  let chainProxy;
  const {
    cleanIPs,
    ports,
    VLConfigs,
    TRConfigs,
    outProxy,
    outProxyParams,
    customCdnAddrs,
    customCdnHost,
    customCdnSni,
    bestVLTRInterval,
    VLTRenableIPv6
  } = proxySettings;
  if (outProxy) {
    const proxyParams = outProxyParams;
    try {
      chainProxy = buildSingBoxChainOutbound(proxyParams, VLTRenableIPv6);
    } catch (error) {
      console.log("An error occured while parsing chain proxy: ", error);
      chainProxy = void 0;
      await env.kv.put("proxySettings", JSON.stringify({
        ...proxySettings,
        outProxy: "",
        outProxyParams: {}
      }));
    }
  }
  const Addresses = await getConfigAddresses(cleanIPs, VLTRenableIPv6);
  const totalAddresses = [...Addresses, ...customCdnAddrs];
  const config = structuredClone(singboxConfigTemp);
  const dnsObject = buildSingBoxDNS(proxySettings, totalAddresses, false);
  const { rules, rule_set } = buildSingBoxRoutingRules(proxySettings, false);
  config.dns.servers = dnsObject.servers;
  config.dns.rules = dnsObject.rules;
  if (dnsObject.fakeip) config.dns.fakeip = dnsObject.fakeip;
  config.route.rules = rules;
  config.route.rule_set = rule_set;
  const selector = config.outbounds[0];
  const urlTest = config.outbounds[1];
  selector.outbounds = ["\u{1F4A6} Best Ping \u{1F4A5}"];
  urlTest.interval = `${bestVLTRInterval}s`;
  urlTest.tag = "\u{1F4A6} Best Ping \u{1F4A5}";
  let proxyIndex = 1;
  const protocols = [
    ...VLConfigs ? ["VLESS"] : [],
    ...TRConfigs ? ["Trojan"] : []
  ];
  protocols.forEach((protocol) => {
    let protocolIndex = 1;
    ports.forEach((port) => {
      totalAddresses.forEach((addr) => {
        let VLOutbound, TROutbound;
        const isCustomAddr = customCdnAddrs.includes(addr);
        const configType = isCustomAddr ? "C" : "";
        const sni = isCustomAddr ? customCdnSni : randomUpperCase(hostName);
        const host = isCustomAddr ? customCdnHost : hostName;
        const remark = generateRemark(protocolIndex, port, addr, cleanIPs, protocol, configType);
        if (protocol === "VLESS") {
          VLOutbound = buildSingBoxVLOutbound(
            proxySettings,
            chainProxy ? `proxy-${proxyIndex}` : remark,
            addr,
            port,
            host,
            sni,
            isCustomAddr
          );
          config.outbounds.push(VLOutbound);
        }
        if (protocol === "Trojan") {
          TROutbound = buildSingBoxTROutbound(
            proxySettings,
            chainProxy ? `proxy-${proxyIndex}` : remark,
            addr,
            port,
            host,
            sni,
            isCustomAddr
          );
          config.outbounds.push(TROutbound);
        }
        if (chainProxy) {
          const chain = structuredClone(chainProxy);
          chain.tag = remark;
          chain.detour = `proxy-${proxyIndex}`;
          config.outbounds.push(chain);
        }
        selector.outbounds.push(remark);
        urlTest.outbounds.push(remark);
        proxyIndex++;
        protocolIndex++;
      });
    });
  });
  return new Response(JSON.stringify(config, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store"
    }
  });
}
var singboxConfigTemp = {
  log: {
    level: "warn",
    timestamp: true
  },
  dns: {
    servers: [],
    rules: [],
    strategy: "ipv4_only",
    independent_cache: true
  },
  inbounds: [
    {
      type: "direct",
      tag: "dns-in",
      listen: "0.0.0.0",
      listen_port: 6450,
      override_address: "1.1.1.1",
      override_port: 53
    },
    {
      type: "tun",
      tag: "tun-in",
      address: [
        "172.18.0.1/30",
        "fdfe:dcba:9876::1/126"
      ],
      mtu: 9e3,
      auto_route: true,
      strict_route: true,
      endpoint_independent_nat: true,
      stack: "mixed"
    },
    {
      type: "mixed",
      tag: "mixed-in",
      listen: "0.0.0.0",
      listen_port: 2080
    }
  ],
  outbounds: [
    {
      type: "selector",
      tag: "\u2705 Selector",
      outbounds: []
    },
    {
      type: "urltest",
      tag: "",
      outbounds: [],
      url: "https://www.gstatic.com/generate_204",
      interval: ""
    },
    {
      type: "direct",
      domain_strategy: "ipv4_only",
      tag: "direct"
    }
  ],
  route: {
    rules: [],
    rule_set: [],
    auto_detect_interface: true,
    override_android_vpn: true,
    final: "\u2705 Selector"
  },
  ntp: {
    enabled: true,
    server: "time.apple.com",
    server_port: 123,
    detour: "direct",
    interval: "30m",
    write_to_system: false
  },
  experimental: {
    cache_file: {
      enabled: true,
      store_fakeip: true
    },
    clash_api: {
      external_controller: "127.0.0.1:9090",
      external_ui: "ui",
      external_ui_download_url: "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
      external_ui_download_detour: "direct",
      default_mode: "Rule"
    }
  }
};

// src/cores-configs/xray.js
async function buildXrayDNS(proxySettings, outboundAddrs, domainToStaticIPs, isWorkerLess, isWarp) {
  const {
    remoteDNS,
    localDNS,
    VLTRFakeDNS,
    VLTRenableIPv6,
    warpFakeDNS,
    warpEnableIPv6,
    blockAds,
    bypassIran,
    bypassChina,
    blockPorn,
    bypassRussia,
    bypassOpenAi,
    customBypassRules,
    customBlockRules
  } = proxySettings;
  const bypassRules = [
    { rule: bypassIran, domain: "geosite:category-ir", ip: "geoip:ir" },
    { rule: bypassChina, domain: "geosite:cn", ip: "geoip:cn" },
    { rule: bypassRussia, domain: "geosite:category-ru", ip: "geoip:ru" }
  ];
  const blockRules = [
    { rule: blockAds, host: "geosite:category-ads-all" },
    { rule: blockAds, host: "geosite:category-ads-ir" },
    { rule: blockPorn, host: "geosite:category-porn" }
  ];
  const isFakeDNS = VLTRFakeDNS && !isWarp || warpFakeDNS && isWarp;
  const isIPv62 = VLTRenableIPv6 && !isWarp || warpEnableIPv6 && isWarp;
  const outboundDomains = outboundAddrs.filter((address) => isDomain(address));
  const customBypassRulesDomains = customBypassRules.filter((address) => isDomain(address));
  const customBlockRulesDomains = customBlockRules.filter((address) => isDomain(address));
  const uniqueOutboundDomains = [...new Set(outboundDomains)];
  const isDomainRule = [...uniqueOutboundDomains, ...customBypassRulesDomains].length > 0;
  const isBypass = bypassIran || bypassChina || bypassRussia;
  const isBlock = blockAds || blockPorn || customBlockRulesDomains.length > 0;
  const finalRemoteDNS = isWorkerLess ? ["https://cloudflare-dns.com/dns-query"] : isWarp ? ["1.1.1.1"] : [remoteDNS];
  const dnsHost = {};
  if (isBlock) {
    blockRules.forEach(({ rule, host }) => {
      if (rule) dnsHost[host] = ["127.0.0.1"];
    });
    customBlockRulesDomains.forEach((domain) => {
      dnsHost[`domain:${domain}`] = ["127.0.0.1"];
    });
  }
  const staticIPs = domainToStaticIPs ? await resolveDNS(domainToStaticIPs) : void 0;
  if (staticIPs) dnsHost[domainToStaticIPs] = VLTRenableIPv6 ? [...staticIPs.ipv4, ...staticIPs.ipv6] : staticIPs.ipv4;
  if (isWorkerLess) {
    const domains = ["cloudflare-dns.com", "cloudflare.com", "dash.cloudflare.com"];
    const resolved = await Promise.all(domains.map(resolveDNS));
    const hostIPv4 = resolved.flatMap((r) => r.ipv4);
    const hostIPv6 = VLTRenableIPv6 ? resolved.flatMap((r) => r.ipv6) : [];
    dnsHost["cloudflare-dns.com"] = [
      ...hostIPv4,
      ...hostIPv6
    ];
  }
  const hosts = Object.keys(dnsHost).length ? { hosts: dnsHost } : {};
  const dnsObject = {
    ...hosts,
    servers: finalRemoteDNS,
    queryStrategy: isIPv62 ? "UseIP" : "UseIPv4",
    tag: "dns"
  };
  const dohHost = getDomain(remoteDNS);
  if (dohHost.isHostDomain && !isWorkerLess && !isWarp) dnsObject.servers.push({
    address: "https://8.8.8.8/dns-query",
    domains: [`full:${dohHost.host}`],
    skipFallback: true
  });
  if (bypassOpenAi) dnsObject.servers.push({
    address: "178.22.122.100",
    domains: ["geosite:openai"],
    skipFallback: true
  });
  if (isDomainRule) {
    const outboundDomainRules = uniqueOutboundDomains.map((domain) => `full:${domain}`);
    const bypassDomainRules = customBypassRulesDomains.map((domain) => `domain:${domain}`);
    dnsObject.servers.push({
      address: localDNS,
      domains: [...outboundDomainRules, ...bypassDomainRules],
      skipFallback: true
    });
  }
  const localDNSServer = {
    address: localDNS,
    domains: [],
    expectIPs: [],
    skipFallback: true
  };
  if (!isWorkerLess && isBypass) {
    bypassRules.forEach(({ rule, domain, ip }) => {
      if (rule) {
        localDNSServer.domains.push(domain);
        localDNSServer.expectIPs.push(ip);
      }
    });
    dnsObject.servers.push(localDNSServer);
  }
  if (isFakeDNS) {
    const fakeDNSServer = isBypass && !isWorkerLess ? { address: "fakedns", domains: localDNSServer.domains } : "fakedns";
    dnsObject.servers.unshift(fakeDNSServer);
  }
  return dnsObject;
}
function buildXrayRoutingRules(proxySettings, outboundAddrs, isChain, isBalancer, isWorkerLess, isWarp) {
  const {
    localDNS,
    bypassLAN,
    bypassIran,
    bypassChina,
    bypassRussia,
    bypassOpenAi,
    blockAds,
    blockPorn,
    blockUDP443,
    customBypassRules,
    customBlockRules
  } = proxySettings;
  const geoRules = [
    { rule: bypassLAN, type: "direct", domain: "geosite:private", ip: "geoip:private" },
    { rule: bypassIran, type: "direct", domain: "geosite:category-ir", ip: "geoip:ir" },
    { rule: bypassChina, type: "direct", domain: "geosite:cn", ip: "geoip:cn" },
    { rule: bypassRussia, type: "direct", domain: "geosite:ru", ip: "geoip:ru" },
    { rule: bypassOpenAi, type: "direct", domain: "geosite:openai" },
    { rule: blockAds, type: "block", domain: "geosite:category-ads-all" },
    { rule: blockAds, type: "block", domain: "geosite:category-ads-ir" },
    { rule: blockPorn, type: "block", domain: "geosite:category-porn" }
  ];
  const outboundDomains = outboundAddrs.filter((address) => isDomain(address));
  const customBypassRulesDomains = customBypassRules.filter((address) => isDomain(address));
  const isDomainRule = [...outboundDomains, ...customBypassRulesDomains].length > 0;
  const isBlock = blockAds || blockPorn || customBlockRules.length > 0;
  const isBypass = bypassIran || bypassChina || bypassRussia || bypassOpenAi || customBypassRules.length > 0;
  const finallOutboundTag = isChain ? "chain" : isWorkerLess ? "fragment" : "proxy";
  const rules = [
    {
      inboundTag: [
        "dns-in"
      ],
      outboundTag: "dns-out",
      type: "field"
    },
    {
      inboundTag: [
        "socks-in"
      ],
      port: "53",
      outboundTag: "dns-out",
      type: "field"
    }
  ];
  if (!isWorkerLess && (isDomainRule || isBypass) && localDNS !== "localhost") rules.push({
    inboundTag: ["dns"],
    ip: [localDNS],
    port: "53",
    outboundTag: "direct",
    type: "field"
  });
  bypassOpenAi && rules.push({
    ip: ["178.22.122.100"],
    outboundTag: "direct",
    type: "field"
  });
  if (!isWorkerLess) rules.push({
    inboundTag: ["dns"],
    [isBalancer ? "balancerTag" : "outboundTag"]: isBalancer ? "all" : finallOutboundTag,
    type: "field"
  });
  isWarp && blockUDP443 && rules.push({
    network: "udp",
    port: "443",
    outboundTag: "block",
    type: "field"
  });
  if (isBypass || isBlock) {
    const createRule = (type, outbound) => ({
      [type]: [],
      outboundTag: outbound,
      type: "field"
    });
    let domainDirectRule = createRule("domain", "direct");
    let ipDirectRule = createRule("ip", "direct");
    let domainBlockRule = createRule("domain", "block");
    let ipBlockRule = createRule("ip", "block");
    geoRules.forEach(({ rule, type, domain, ip }) => {
      if (rule) {
        if (type === "direct") {
          domainDirectRule?.domain.push(domain);
          ip && ipDirectRule?.ip?.push(ip);
        } else {
          domainBlockRule.domain.push(domain);
        }
      }
    });
    customBypassRules.forEach((address) => {
      if (isDomain(address)) {
        domainDirectRule?.domain.push(`domain:${address}`);
      } else {
        ipDirectRule?.ip.push(address);
      }
    });
    customBlockRules.forEach((address) => {
      if (isDomain(address)) {
        domainBlockRule.domain.push(`domain:${address}`);
      } else {
        ipBlockRule.ip.push(address);
      }
    });
    domainBlockRule.domain.length && rules.push(domainBlockRule);
    ipBlockRule.ip.length && rules.push(ipBlockRule);
    domainDirectRule.domain.length && rules.push(domainDirectRule);
    ipDirectRule.ip.length && rules.push(ipDirectRule);
  }
  if (isBalancer) {
    rules.push({
      network: isWarp ? "tcp,udp" : "tcp",
      balancerTag: "all",
      type: "field"
    });
  } else {
    rules.push({
      network: isWarp || isWorkerLess ? "tcp,udp" : "tcp",
      outboundTag: finallOutboundTag,
      type: "field"
    });
  }
  return rules;
}
function buildXrayVLOutbound(tag2, address, port, host, sni, proxyIPs, isFragment, allowInsecure, VLTRenableIPv6) {
  const { userID: userID2, defaultHttpsPorts } = globalThis;
  const outbound = {
    protocol: "vless",
    settings: {
      vnext: [
        {
          address,
          port: +port,
          users: [
            {
              id: userID2,
              encryption: "none",
              level: 8
            }
          ]
        }
      ]
    },
    streamSettings: {
      network: "ws",
      security: "none",
      sockopt: {},
      wsSettings: {
        host,
        path: `/${getRandomPath(16)}${proxyIPs.length ? `/${proxyIPs.join(",")}` : ""}?ed=2560`
      }
    },
    tag: tag2
  };
  if (defaultHttpsPorts.includes(port)) {
    outbound.streamSettings.security = "tls";
    outbound.streamSettings.tlsSettings = {
      allowInsecure,
      fingerprint: "randomized",
      alpn: ["http/1.1"],
      serverName: sni
    };
  }
  const sockopt = outbound.streamSettings.sockopt;
  if (isFragment) {
    sockopt.dialerProxy = "fragment";
  } else {
    sockopt.domainStrategy = VLTRenableIPv6 ? "UseIPv4v6" : "UseIPv4";
  }
  return outbound;
}
function buildXrayTROutbound(tag2, address, port, host, sni, proxyIPs, isFragment, allowInsecure, VLTRenableIPv6) {
  const { TRPassword, defaultHttpsPorts } = globalThis;
  const outbound = {
    protocol: "trojan",
    settings: {
      servers: [
        {
          address,
          port: +port,
          password: TRPassword,
          level: 8
        }
      ]
    },
    streamSettings: {
      network: "ws",
      security: "none",
      sockopt: {},
      wsSettings: {
        host,
        path: `/tr${getRandomPath(16)}${proxyIPs.length ? `/${proxyIPs.join(",")}` : ""}?ed=2560`
      }
    },
    tag: tag2
  };
  if (defaultHttpsPorts.includes(port)) {
    outbound.streamSettings.security = "tls";
    outbound.streamSettings.tlsSettings = {
      allowInsecure,
      fingerprint: "randomized",
      alpn: ["http/1.1"],
      serverName: sni
    };
  }
  const sockopt = outbound.streamSettings.sockopt;
  if (isFragment) {
    sockopt.dialerProxy = "fragment";
  } else {
    sockopt.domainStrategy = VLTRenableIPv6 ? "UseIPv4v6" : "UseIPv4";
  }
  return outbound;
}
function buildXrayWarpOutbound(proxySettings, warpConfigs, endpoint, chain, client2) {
  const {
    knockerNoiseMode,
    noiseCountMin,
    noiseCountMax,
    noiseSizeMin,
    noiseSizeMax,
    noiseDelayMin,
    noiseDelayMax
  } = proxySettings;
  const isWoW = chain === "proxy";
  const {
    warpIPv6,
    reserved,
    publicKey,
    privateKey
  } = extractWireguardParams(warpConfigs, isWoW);
  const outbound = {
    protocol: "wireguard",
    settings: {
      address: [
        "172.16.0.2/32",
        warpIPv6
      ],
      mtu: 1280,
      peers: [
        {
          endpoint: isWoW ? "162.159.192.1:2408" : endpoint,
          publicKey,
          keepAlive: 5
        }
      ],
      reserved: base64ToDecimal(reserved),
      secretKey: privateKey
    },
    streamSettings: {
      sockopt: {
        dialerProxy: chain
      }
    },
    tag: isWoW ? "chain" : "proxy"
  };
  !chain && delete outbound.streamSettings;
  client2 === "xray-knocker" && !isWoW && delete outbound.streamSettings && Object.assign(outbound.settings, {
    wnoise: knockerNoiseMode,
    wnoisecount: noiseCountMin === noiseCountMax ? noiseCountMin : `${noiseCountMin}-${noiseCountMax}`,
    wpayloadsize: noiseSizeMin === noiseSizeMax ? noiseSizeMin : `${noiseSizeMin}-${noiseSizeMax}`,
    wnoisedelay: noiseDelayMin === noiseDelayMax ? noiseDelayMin : `${noiseDelayMin}-${noiseDelayMax}`
  });
  return outbound;
}
function buildXrayChainOutbound(chainProxyParams, VLTRenableIPv6) {
  if (["socks", "http"].includes(chainProxyParams.protocol)) {
    const { protocol, server: server2, port: port2, user, pass } = chainProxyParams;
    return {
      protocol,
      settings: {
        servers: [
          {
            address: server2,
            port: +port2,
            users: [
              {
                user,
                pass,
                level: 8
              }
            ]
          }
        ]
      },
      streamSettings: {
        network: "tcp",
        sockopt: {
          dialerProxy: "proxy",
          domainStrategy: VLTRenableIPv6 ? "UseIPv4v6" : "UseIPv4"
        }
      },
      mux: {
        enabled: true,
        concurrency: 8,
        xudpConcurrency: 16,
        xudpProxyUDP443: "reject"
      },
      tag: "chain"
    };
  }
  const {
    server,
    port,
    uuid,
    flow,
    security,
    type,
    sni,
    fp,
    alpn,
    pbk,
    sid,
    spx,
    headerType,
    host,
    path,
    authority,
    serviceName,
    mode
  } = chainProxyParams;
  const proxyOutbound = {
    mux: {
      concurrency: 8,
      enabled: true,
      xudpConcurrency: 16,
      xudpProxyUDP443: "reject"
    },
    protocol: "vless",
    settings: {
      vnext: [
        {
          address: server,
          port: +port,
          users: [
            {
              encryption: "none",
              flow,
              id: uuid,
              level: 8,
              security: "auto"
            }
          ]
        }
      ]
    },
    streamSettings: {
      network: type,
      security,
      sockopt: {
        dialerProxy: "proxy",
        domainStrategy: VLTRenableIPv6 ? "UseIPv4v6" : "UseIPv4"
      }
    },
    tag: "chain"
  };
  if (security === "tls") {
    const tlsAlpns = alpn ? alpn?.split(",") : [];
    proxyOutbound.streamSettings.tlsSettings = {
      allowInsecure: false,
      fingerprint: fp,
      alpn: tlsAlpns,
      serverName: sni
    };
  }
  if (security === "reality") {
    delete proxyOutbound.mux;
    proxyOutbound.streamSettings.realitySettings = {
      fingerprint: fp,
      publicKey: pbk,
      serverName: sni,
      shortId: sid,
      spiderX: spx
    };
  }
  if (headerType === "http") {
    const httpPaths = path?.split(",");
    const httpHosts = host?.split(",");
    proxyOutbound.streamSettings.tcpSettings = {
      header: {
        request: {
          headers: { Host: httpHosts },
          method: "GET",
          path: httpPaths,
          version: "1.1"
        },
        response: {
          headers: { "Content-Type": ["application/octet-stream"] },
          reason: "OK",
          status: "200",
          version: "1.1"
        },
        type: "http"
      }
    };
  }
  if (type === "tcp" && security !== "reality" && !headerType) proxyOutbound.streamSettings.tcpSettings = {
    header: {
      type: "none"
    }
  };
  if (type === "ws") proxyOutbound.streamSettings.wsSettings = {
    headers: { Host: host },
    path
  };
  if (type === "grpc") {
    delete proxyOutbound.mux;
    proxyOutbound.streamSettings.grpcSettings = {
      authority,
      multiMode: mode === "multi",
      serviceName
    };
  }
  return proxyOutbound;
}
function buildFreedomOutbound(proxySettings, isFragment, isUdpNoises, tag2) {
  const {
    xrayUdpNoises,
    fragmentPackets,
    fragmentLengthMin,
    fragmentLengthMax,
    fragmentIntervalMin,
    fragmentIntervalMax,
    VLTRenableIPv6,
    warpEnableIPv6
  } = proxySettings;
  const outbound = {
    tag: tag2,
    protocol: "freedom",
    settings: {}
  };
  if (isFragment) {
    outbound.settings.fragment = {
      packets: fragmentPackets,
      length: `${fragmentLengthMin}-${fragmentLengthMax}`,
      interval: `${fragmentIntervalMin}-${fragmentIntervalMax}`
    };
    outbound.settings.domainStrategy = VLTRenableIPv6 ? "UseIPv4v6" : "UseIPv4";
  }
  if (isUdpNoises) {
    outbound.settings.noises = [];
    xrayUdpNoises.forEach((noise) => {
      const count = noise.count;
      delete noise.count;
      outbound.settings.noises.push(...Array.from({ length: count }, () => noise));
    });
    if (!isFragment) outbound.settings.domainStrategy = warpEnableIPv6 ? "UseIPv4v6" : "UseIPv4";
  }
  return outbound;
}
function buildXrayConfig(proxySettings, remark, isBalancer, isChain, balancerFallback, isWarp) {
  const {
    VLTRFakeDNS,
    warpFakeDNS,
    bestVLTRInterval,
    bestWarpInterval
  } = proxySettings;
  const isFakeDNS = VLTRFakeDNS && !isWarp || warpFakeDNS && isWarp;
  const config = structuredClone(xrayConfigTemp);
  config.remarks = remark;
  isFakeDNS && config.inbounds[0].sniffing.destOverride.push("fakedns");
  if (isBalancer) {
    const interval = isWarp ? bestWarpInterval : bestVLTRInterval;
    config.observatory.probeInterval = `${interval}s`;
    if (balancerFallback) config.routing.balancers[0].fallbackTag = "prox-2";
    if (isChain) {
      config.observatory.subjectSelector = ["chain"];
      config.routing.balancers[0].selector = ["chain"];
    }
  } else {
    delete config.observatory;
    delete config.routing.balancers;
  }
  return config;
}
async function buildXrayBestPingConfig(proxySettings, totalAddresses, chainProxy, outbounds, isFragment) {
  const remark = isFragment ? `\u{1F4A6} BPB F - Best Ping \u{1F4A5}` : `\u{1F4A6} BPB - Best Ping \u{1F4A5}`;
  const config = buildXrayConfig(proxySettings, remark, true, chainProxy, true);
  config.dns = await buildXrayDNS(proxySettings, totalAddresses, void 0, false, false);
  config.routing.rules = buildXrayRoutingRules(proxySettings, totalAddresses, chainProxy, true, false, false);
  config.outbounds.unshift(...outbounds);
  return config;
}
async function buildXrayBestFragmentConfig(proxySettings, hostName, chainProxy, outbounds) {
  const bestFragValues = [
    "10-20",
    "20-30",
    "30-40",
    "40-50",
    "50-60",
    "60-70",
    "70-80",
    "80-90",
    "90-100",
    "10-30",
    "20-40",
    "30-50",
    "40-60",
    "50-70",
    "60-80",
    "70-90",
    "80-100",
    "100-200"
  ];
  const config = buildXrayConfig(proxySettings, `\u{1F4A6} BPB F - Best Fragment \u{1F60E}`, true, chainProxy, false, false);
  config.dns = await buildXrayDNS(proxySettings, [], hostName, false, false);
  config.routing.rules = buildXrayRoutingRules(proxySettings, [], chainProxy, true, false, false);
  const bestFragOutbounds = [];
  const freedomOutbound = outbounds.pop();
  bestFragValues.forEach((fragLength, index) => {
    if (chainProxy) {
      const chainOutbound = structuredClone(chainProxy);
      chainOutbound.tag = `chain-${index + 1}`;
      chainOutbound.streamSettings.sockopt.dialerProxy = `prox-${index + 1}`;
      bestFragOutbounds.push(chainOutbound);
    }
    const proxyOutbound = structuredClone(outbounds[chainProxy ? 1 : 0]);
    proxyOutbound.tag = `prox-${index + 1}`;
    proxyOutbound.streamSettings.sockopt.dialerProxy = `frag-${index + 1}`;
    const fragmentOutbound = structuredClone(freedomOutbound);
    fragmentOutbound.tag = `frag-${index + 1}`;
    fragmentOutbound.settings.fragment.length = fragLength;
    fragmentOutbound.settings.fragment.interval = "1-1";
    bestFragOutbounds.push(proxyOutbound, fragmentOutbound);
  });
  config.outbounds.unshift(...bestFragOutbounds);
  return config;
}
async function buildXrayWorkerLessConfig(proxySettings) {
  const config = buildXrayConfig(proxySettings, `\u{1F4A6} BPB F - WorkerLess \u2B50`, false, false, false, false);
  const fragmentOutbound = buildFreedomOutbound(proxySettings, true, true, "fragment");
  config.outbounds.unshift(fragmentOutbound);
  config.dns = await buildXrayDNS(proxySettings, [], void 0, true);
  config.routing.rules = buildXrayRoutingRules(proxySettings, [], false, false, true, false);
  const fakeOutbound = buildXrayVLOutbound("fake-outbound", "google.com", "443", globalThis.host, "google.com", [], true, false, proxySettings.VLTRenableIPv6);
  fakeOutbound.streamSettings.wsSettings.path = "/";
  config.outbounds.push(fakeOutbound);
  return config;
}
async function getXrayCustomConfigs(request, env, isFragment) {
  const { hostName, defaultHttpsPorts } = globalThis;
  const { proxySettings } = await getDataset(request, env);
  let configs = [];
  let outbounds = [];
  let protocols = [];
  let chainProxy;
  const {
    proxyIPs,
    outProxy,
    outProxyParams,
    cleanIPs,
    VLTRenableIPv6,
    customCdnAddrs,
    customCdnHost,
    customCdnSni,
    VLConfigs,
    TRConfigs,
    ports
  } = proxySettings;
  if (outProxy) {
    const proxyParams = outProxyParams;
    try {
      chainProxy = buildXrayChainOutbound(proxyParams, VLTRenableIPv6);
    } catch (error) {
      console.log("An error occured while parsing chain proxy: ", error);
      chainProxy = void 0;
      await env.kv.put("proxySettings", JSON.stringify({
        ...proxySettings,
        outProxy: "",
        outProxyParams: {}
      }));
    }
  }
  const Addresses = await getConfigAddresses(cleanIPs, VLTRenableIPv6);
  const totalAddresses = isFragment ? [...Addresses] : [...Addresses, ...customCdnAddrs];
  const totalPorts = ports.filter((port) => isFragment ? defaultHttpsPorts.includes(port) : true);
  VLConfigs && protocols.push("VLESS");
  TRConfigs && protocols.push("Trojan");
  let proxyIndex = 1;
  let freedomOutbound = isFragment ? buildFreedomOutbound(proxySettings, true, false, "fragment") : null;
  for (const protocol of protocols) {
    let protocolIndex = 1;
    for (const port of totalPorts) {
      for (const addr of totalAddresses) {
        const isCustomAddr = customCdnAddrs.includes(addr);
        const configType = isCustomAddr ? "C" : isFragment ? "F" : "";
        const sni = isCustomAddr ? customCdnSni : randomUpperCase(hostName);
        const host = isCustomAddr ? customCdnHost : hostName;
        const remark = generateRemark(protocolIndex, port, addr, cleanIPs, protocol, configType);
        const customConfig = buildXrayConfig(proxySettings, remark, false, chainProxy, false, false);
        isFragment && customConfig.outbounds.unshift(freedomOutbound);
        customConfig.dns = await buildXrayDNS(proxySettings, [addr], void 0, false, false);
        customConfig.routing.rules = buildXrayRoutingRules(proxySettings, [addr], chainProxy, false, false, false);
        const outbound = protocol === "VLESS" ? buildXrayVLOutbound("proxy", addr, port, host, sni, proxyIPs, isFragment, isCustomAddr, VLTRenableIPv6) : buildXrayTROutbound("proxy", addr, port, host, sni, proxyIPs, isFragment, isCustomAddr, VLTRenableIPv6);
        customConfig.outbounds.unshift({ ...outbound });
        outbound.tag = `prox-${proxyIndex}`;
        if (chainProxy) {
          customConfig.outbounds.unshift(chainProxy);
          const chainOutbound = structuredClone(chainProxy);
          chainOutbound.tag = `chain-${proxyIndex}`;
          chainOutbound.streamSettings.sockopt.dialerProxy = `prox-${proxyIndex}`;
          outbounds.push(chainOutbound);
        }
        outbounds.push(outbound);
        configs.push(customConfig);
        proxyIndex++;
        protocolIndex++;
      }
    }
  }
  isFragment && outbounds.push(freedomOutbound);
  const bestPing = await buildXrayBestPingConfig(proxySettings, totalAddresses, chainProxy, outbounds, isFragment);
  const finalConfigs = [...configs, bestPing];
  if (isFragment) {
    const bestFragment = await buildXrayBestFragmentConfig(proxySettings, hostName, chainProxy, outbounds);
    const workerLessConfig = await buildXrayWorkerLessConfig(proxySettings);
    finalConfigs.push(bestFragment, workerLessConfig);
  }
  return new Response(JSON.stringify(finalConfigs, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store"
    }
  });
}
async function getXrayWarpConfigs(request, env) {
  const { proxySettings, warpConfigs } = await getDataset(request, env);
  const { warpEndpoints } = proxySettings;
  const { client: client2 } = globalThis;
  const xrayWarpConfigs = [];
  const xrayWoWConfigs = [];
  const xrayWarpOutbounds = [];
  const xrayWoWOutbounds = [];
  const outboundDomains = warpEndpoints.map((endpoint) => endpoint.split(":")[0]).filter((address) => isDomain(address));
  const proIndicator = client2 !== "xray" ? " Pro " : " ";
  const xrayWarpChain = client2 === "xray-pro" ? "udp-noise" : void 0;
  let freedomOutbound;
  if (client2 === "xray-pro") {
    freedomOutbound = buildFreedomOutbound(proxySettings, false, true, "udp-noise");
  }
  for (const [index, endpoint] of warpEndpoints.entries()) {
    const endpointHost = endpoint.split(":")[0];
    const warpConfig = buildXrayConfig(proxySettings, `\u{1F4A6} ${index + 1} - Warp${proIndicator}\u{1F1EE}\u{1F1F7}`, false, false, false, true);
    const WoWConfig = buildXrayConfig(proxySettings, `\u{1F4A6} ${index + 1} - WoW${proIndicator}\u{1F30D}`, false, true, false, true);
    if (client2 === "xray-pro") {
      warpConfig.outbounds.unshift(freedomOutbound);
      WoWConfig.outbounds.unshift(freedomOutbound);
    }
    warpConfig.dns = WoWConfig.dns = await buildXrayDNS(proxySettings, [endpointHost], void 0, false, true);
    warpConfig.routing.rules = buildXrayRoutingRules(proxySettings, [endpointHost], false, false, false, true);
    WoWConfig.routing.rules = buildXrayRoutingRules(proxySettings, [endpointHost], true, false, false, true);
    const warpOutbound = buildXrayWarpOutbound(proxySettings, warpConfigs, endpoint, xrayWarpChain, client2);
    const WoWOutbound = buildXrayWarpOutbound(proxySettings, warpConfigs, endpoint, "proxy", client2);
    warpConfig.outbounds.unshift(warpOutbound);
    WoWConfig.outbounds.unshift(WoWOutbound, warpOutbound);
    xrayWarpConfigs.push(warpConfig);
    xrayWoWConfigs.push(WoWConfig);
    const proxyOutbound = structuredClone(warpOutbound);
    proxyOutbound.tag = `prox-${index + 1}`;
    const chainOutbound = structuredClone(WoWOutbound);
    chainOutbound.tag = `chain-${index + 1}`;
    chainOutbound.streamSettings.sockopt.dialerProxy = `prox-${index + 1}`;
    xrayWarpOutbounds.push(proxyOutbound);
    xrayWoWOutbounds.push(chainOutbound);
  }
  const dnsObject = await buildXrayDNS(proxySettings, outboundDomains, void 0, false, true);
  const xrayWarpBestPing = buildXrayConfig(proxySettings, `\u{1F4A6} Warp${proIndicator}- Best Ping \u{1F680}`, true, false, false, true);
  xrayWarpBestPing.dns = dnsObject;
  xrayWarpBestPing.routing.rules = buildXrayRoutingRules(proxySettings, outboundDomains, false, true, false, true);
  client2 === "xray-pro" && xrayWarpBestPing.outbounds.unshift(freedomOutbound);
  xrayWarpBestPing.outbounds.unshift(...xrayWarpOutbounds);
  const xrayWoWBestPing = buildXrayConfig(proxySettings, `\u{1F4A6} WoW${proIndicator}- Best Ping \u{1F680}`, true, true, false, true);
  xrayWoWBestPing.dns = dnsObject;
  xrayWoWBestPing.routing.rules = buildXrayRoutingRules(proxySettings, outboundDomains, true, true, false, true);
  client2 === "xray-pro" && xrayWoWBestPing.outbounds.unshift(freedomOutbound);
  xrayWoWBestPing.outbounds.unshift(...xrayWoWOutbounds, ...xrayWarpOutbounds);
  const configs = [...xrayWarpConfigs, ...xrayWoWConfigs, xrayWarpBestPing, xrayWoWBestPing];
  return new Response(JSON.stringify(configs, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "CDN-Cache-Control": "no-store"
    }
  });
}
var xrayConfigTemp = {
  remarks: "",
  log: {
    loglevel: "warning"
  },
  dns: {},
  inbounds: [
    {
      port: 10808,
      protocol: "socks",
      settings: {
        auth: "noauth",
        udp: true,
        userLevel: 8
      },
      sniffing: {
        destOverride: ["http", "tls"],
        enabled: true,
        routeOnly: true
      },
      tag: "socks-in"
    },
    {
      port: 10853,
      protocol: "dokodemo-door",
      settings: {
        address: "1.1.1.1",
        network: "tcp,udp",
        port: 53
      },
      tag: "dns-in"
    }
  ],
  outbounds: [
    {
      protocol: "dns",
      tag: "dns-out"
    },
    {
      protocol: "freedom",
      settings: {
        domainStrategy: "UseIP"
      },
      tag: "direct"
    },
    {
      protocol: "blackhole",
      settings: {
        response: {
          type: "http"
        }
      },
      tag: "block"
    }
  ],
  policy: {
    levels: {
      8: {
        connIdle: 300,
        downlinkOnly: 1,
        handshake: 4,
        uplinkOnly: 1
      }
    },
    system: {
      statsOutboundUplink: true,
      statsOutboundDownlink: true
    }
  },
  routing: {
    domainStrategy: "IPIfNonMatch",
    rules: [],
    balancers: [
      {
        tag: "all",
        selector: ["prox"],
        strategy: {
          type: "leastPing"
        }
      }
    ]
  },
  observatory: {
    subjectSelector: [
      "prox"
    ],
    probeUrl: "https://www.gstatic.com/generate_204",
    probeInterval: "30s",
    enableConcurrency: true
  },
  stats: {}
};

// src/helpers/helpers.js
var import_jszip = __toESM(require_lib3(), 1);
function isValidUUID(uuid) {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}
function isDomain(address) {
  const domainPattern = /^(?!\-)(?:[A-Za-z0-9\-]{1,63}\.)+[A-Za-z]{2,}$/;
  return domainPattern.test(address);
}
async function resolveDNS(domain) {
  const dohURL = "https://cloudflare-dns.com/dns-query";
  const dohURLv4 = `${dohURL}?name=${encodeURIComponent(domain)}&type=A`;
  const dohURLv6 = `${dohURL}?name=${encodeURIComponent(domain)}&type=AAAA`;
  try {
    const [ipv4Response, ipv6Response] = await Promise.all([
      fetch(dohURLv4, { headers: { accept: "application/dns-json" } }),
      fetch(dohURLv6, { headers: { accept: "application/dns-json" } })
    ]);
    const ipv4Addresses = await ipv4Response.json();
    const ipv6Addresses = await ipv6Response.json();
    const ipv4 = ipv4Addresses.Answer ? ipv4Addresses.Answer.map((record) => record.data) : [];
    const ipv6 = ipv6Addresses.Answer ? ipv6Addresses.Answer.map((record) => record.data) : [];
    return { ipv4, ipv6 };
  } catch (error) {
    throw new Error(`Error resolving DNS: ${error}`);
  }
}
async function handlePanel(request, env) {
  switch (globalThis.pathName) {
    case "/panel":
      return await renderPanel(request, env);
    case "/panel/settings":
      return await getSettings(request, env);
    case "/panel/update-settings":
      return await updateSettings(request, env);
    case "/panel/reset-settings":
      return await resetSettings(request, env);
    case "/panel/reset-password":
      return await resetPassword(request, env);
    case "/panel/my-ip":
      return await getMyIP(request);
    case "/panel/update-warp":
      return await updateWarpConfigs(request, env);
    case "/panel/get-warp-configs":
      return await getWarpConfigs(request, env);
    default:
      return await fallback(request);
  }
}
async function handleLogin(request, env) {
  const { pathName: pathName2 } = globalThis;
  if (pathName2 === "/login") return await renderLogin(request, env);
  if (pathName2 === "/login/authenticate") return await generateJWTToken(request, env);
  return await fallback(request);
}
async function handleSubscriptions(request, env) {
  const { subPath, pathName: pathName2 } = globalThis;
  switch (decodeURIComponent(pathName2)) {
    case `/sub/normal/${subPath}`:
      return await getNormalSub(request, env);
    case `/sub/full-normal/${subPath}`:
      return await getFullNormalSub(request, env);
    case `/sub/fragment/${subPath}`:
      return await getFragmentSub(request, env);
    case `/sub/warp/${subPath}`:
      return await getWarpSub(request, env);
    case `/sub/warp-pro/${subPath}`:
      return await getWarpProSub(request, env);
    default:
      return await fallback(request);
  }
}
async function updateSettings(request, env) {
  if (request.method === "POST") {
    const auth = await Authenticate(request, env);
    if (!auth) return await respond(false, 401, "Unauthorized or expired session.");
    const proxySettings = await updateDataset(request, env);
    return await respond(true, 200, null, proxySettings);
  }
  return await respond(false, 405, "Method not allowed.");
}
async function resetSettings(request, env) {
  if (request.method === "POST") {
    const auth = await Authenticate(request, env);
    if (!auth) return await respond(false, 401, "Unauthorized or expired session.");
    const proxySettings = await updateDataset(request, env);
    return await respond(true, 200, null, proxySettings);
  }
  return await respond(false, 405, "Method not allowed!");
}
async function getSettings(request, env) {
  try {
    const pwd = await env.kv.get("pwd");
    const auth = await Authenticate(request, env);
    if (!auth) return await respond(false, 401, "Unauthorized or expired session.", { isPassSet: pwd });
    const { proxySettings } = await getDataset(request, env);
    const settings = {
      proxySettings,
      isPassSet: pwd ? true : false,
      subPath: globalThis.subPath
    };
    return await respond(true, 200, null, settings);
  } catch (error) {
    throw new Error(error);
  }
}
async function fallback(request) {
  const url = new URL(request.url);
  url.hostname = globalThis.fallbackDomain;
  url.protocol = "https:";
  const newRequest = new Request(url.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: "manual"
  });
  return await fetch(newRequest);
}
async function getMyIP(request) {
  const ip = await request.text();
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}?nocache=${Date.now()}`);
    const geoLocation = await response.json();
    return await respond(true, 200, null, geoLocation);
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return await respond(false, 500, `Error fetching IP address: ${error}`);
  }
}
async function getWarpConfigs(request, env) {
  const isPro = globalThis.client === "amnezia";
  const auth = await Authenticate(request, env);
  if (!auth) return new Response("Unauthorized or expired session.", { status: 401 });
  const { warpConfigs, proxySettings } = await getDataset(request, env);
  const { warpEndpoints, amneziaNoiseCount, amneziaNoiseSizeMin, amneziaNoiseSizeMax } = proxySettings;
  const warpConfig = extractWireguardParams(warpConfigs, false);
  const { warpIPv6, publicKey, privateKey } = warpConfig;
  const zip = new import_jszip.default();
  const trimLines = (string) => string.split("\n").map((line) => line.trim()).join("\n");
  const amneziaNoise = isPro ? `Jc = ${amneziaNoiseCount}
        Jmin = ${amneziaNoiseSizeMin}
        Jmax = ${amneziaNoiseSizeMax}
        S1 = 0
        S2 = 0
        H1 = 0
        H2 = 0
        H3 = 0
        H4 = 0` : "";
  try {
    warpEndpoints.forEach((endpoint, index) => {
      zip.file(`BPB-Warp-${index + 1}.conf`, trimLines(
        `[Interface]
                PrivateKey = ${privateKey}
                Address = 172.16.0.2/32, ${warpIPv6}
                DNS = 1.1.1.1, 1.0.0.1
                MTU = 1280
                ${amneziaNoise}
                [Peer]
                PublicKey = ${publicKey}
                AllowedIPs = 0.0.0.0/0, ::/0
                Endpoint = ${endpoint}
                PersistentKeepalive = 25`
      ));
    });
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const arrayBuffer = await zipBlob.arrayBuffer();
    return new Response(arrayBuffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="BPB-Warp-${isPro ? "Pro-" : ""}configs.zip"`
      }
    });
  } catch (error) {
    return new Response(`Error generating ZIP file: ${error}`, { status: 500 });
  }
}
async function serveIcon() {
  const faviconBase64 = "AAABAAEAQEAAAAEAIAAoQgAAFgAAACgAAABAAAAAgAAAAAEAIAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAABMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcASGtEBSs/KFsRGRCyAwQC5wAAAPoBAgHtDxYOvyU2InFEZD8QTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAOVQ1LgcLB9UAAAD/AQEA/ykjGP9ANyb/MCod/wUEA/8AAAD/AgQC6yo/J1dMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAOVU2KwIDAu4AAAD/Wk01/9W3f//105L/9dOS//XTkv/jxIf/emlI/wYFA/8AAAD/JjgjZkxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAEptRQE2UDM3IjMgehQdEqsNFAzHBwsHzw4VDcUWIRWmJTcjcTpVNilMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcASGpDBgcKBtcAAAD/lYBY//XTkv/105L/9dOS//XTkv/105L/9dOS//TSkf+xjE7/DQoF/wABAPg6VTYsTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAS25GAC1DKlQHCwfXAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/DBILwzVPMjhMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHACo/J1sAAAD/VUkz//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/xzIj/5LJh/5t5Qv8AAAD/EhoRrUxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAPls5IA4VDbwAAAD/BAMC/0k+K/+VgFn/y695/+rKi//00pH/6MiK/8aqdv+JdlH/Ny8h/wAAAP8AAAD9FyIVmkVlQA1McEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwARGRC0AAAA/8Gmc//105L/9dOS//XTkv/105L/9dOS//XTkv/105L/6r90/+SyYf/jsWD/MiYV/wAAAPlCYj4STHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcANlAyNQIEAuoAAAD/S0As/9O2fv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv+/pHH/Lykc/wAAAP8JDQjSQF88GUxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBIakMFAAEA9R4aEv/00pH/9dOS//XTkv/105L/9dOS//XTkv/105L/8s2K/+SyYf/ksmH/5LJh/3pfM/8AAAD/LkQrUExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAO1g3JQIDAu0CAQH/iXZR//TSkf/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS/+7Njv9bTjb/AAAA/wkNCM9GZ0EKTHBHAExwRwBMcEcATHBHAExwRwBMcEcAOFQ0LwAAAP9bTjb/9dOS//XTkv/105L/9dOS//XTkv/105L/9NKR/+i6bv/ksmH/5LJh/+SyYf+XdkD/AAAA/yo+J21McEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcARWZBDAcLBtgAAAD/lH9Y//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9NKR/15PM/8AAAD/ExwRp0tuRgBMcEcATHBHAExwRwBMcEcATHBHAC1EKlYAAAD/iXZR//XTkv/105L/9dOS//XTkv/105L/9dOS/+3Ffv/ksmH/5LJh/+SyYf/ksmH/kXE9/wAAAP8qPidmTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHABspGYwAAAD/ZVc8//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/lunH/MSYU/wAAAP8sQSlUTHBHAExwRwBMcEcATHBHAExwRwAjNCB3AAAA/66WZ//105L/9dOS//XTkv/105L/9dOS//DKhf/ksmL/5LJh/+SyYf/ksmH/5LJh/2ROKv8AAAD/NE4xPExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAEJhPRMAAQD2ExAL/+fHiv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/6bxw/7WNTP8AAAD/CAwH0ktuRgBMcEcATHBHAExwRwBMcEcAHSobjwAAAP/JrXf/9dOS//XTkv/105L/9dOS//HMiP/ks2P/5LJh/+SyYf/ksmH/5LJh/92tXv8WEQn/AgMC60lrRARMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwAlNyNuAAAA/4RyTv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS/+e4av/ksmH/QzQc/wAAAP82UDI2THBHAExwRwBMcEcATHBHABYhFaEAAAD/3b6D//XTkv/105L/9dOS//LNif/ltWX/5LJh/+SyYf/ksmH/5LJh/+OxYP9iTCn/AAAA/x4tHIRMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcADhYOuwQDAv/kxIf/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//TRkP/ksmL/5LJh/6J+RP8AAAD/HiwchkxwRwBMcEcATHBHAExwRwASGxGxAAAA/+7Njv/105L/9dOS//DLhv/ltGX/5LJh/+SyYf/ksmH/5LJh/9WmWv9bRyb/AAAA/wgMB9dFZkELTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAAIDAucqJBn/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/wyoX/5LJh/+SyYf/drF3/BQMC/w4WDr5McEcATHBHAExwRwBMcEcADxYOvgYGA//105L/9dOS/+/Igv/ksmL/5LJh/+SyYf/gr1//rohK/19KKP8LCQT/AAAA/wUIBd88WTgkTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAEptRQAAAAD8QTgm//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/6r91/+SyYf/ksmH/5LJh/yMcD/8EBgTiTHBHAExwRwBMcEcATHBHAAsQCsoPDQn/zK95/7CUYf+Pbz3/dFsx/1ZDJP8xJhT/CAcD/wAAAP8AAAD/AgMC7B4sHIRFZUANTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBJbEQAAAAA/EM5J//105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9NKQ/+W0ZP/ksmH/5LJh/+SyYf81KRb/AAAA8kxwRwBMcEcATHBHAExwRwAHCwfYAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAEA8wsRC8ccKhqQMUguSUdpQwZMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAAABAO0yKx7/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS/+/Igv/ksmH/5LJh/+SyYf/ksmH/MicV/wAAAO9McEcATHBHAExwRwBMcEcAHiwcghAXDroZJReeIDAegik8JmQzTDBEPlw6IElsRAFMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwAJDgnRFRIM//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/ou27/5LJh/+SyYf/ksmH/5LJh/xoUCv8HCwfYTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAFB4TpwAAAP/cvYL/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/yzYr/5LJh/+SyYf/ksmH/5LJh/8yfVv8AAAD/FB0Sq0xwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHACQ1IXUAAAD/o4xh//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/6r50/+SyYf/ksmH/5LJh/+SyYf+AZDb/AAAA/yY5I2tMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwA0TjE7AAAA/2FUOv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/8s6L/+SyYv/ksmH/5LJh/+SyYf/ZqVz/GRMK/wABAPhBXzwYTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcASGpDBQECAfAXEw3/8tGQ//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS/+m8cP/ksmH/5LJh/+SyYf/ksmH/XEcn/wAAAP8aJxmOTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHADhTNC4fLh2FDhUNwAUIBeAAAADpBwsH2RIbEbMlNiJ0P147G0xwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwASHBGuAAAA/8Clcv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//DLhv/ksmH/5LJh/+SyYf/ksmH/kXE9/wAAAP8FCAXeRWVADUxwRwBMcEcATHBHAExwRwBMcEcARWVADhQdEqUAAAD/AAAA/wAAAP8PDQn/GhYP/wgHBf8AAAD/AAAA/wAAAPkaJhiQRWVADExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAKT0mYAAAAP9yYkT/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//TSkf/nuWz/5LJh/+SyYf/ksmH/mXhB/wYEAv8CAwLtOVU2LExwRwBMcEcATHBHAExwRwBMcEcAO1g3JggMB9cAAAD/KCIX/5aBWf/dvoT/9dOS//XTkv/z0ZD/zbF6/4NxTv8bFxD/AAAA/wcLB9k6VTYsTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAEJiPRAAAQD3HhoR//PRkf/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/ux4D/5LJh/+SyYf/jsWD/el8z/wEBAP8CAwLwNlAyOExwRwBMcEcATHBHAExwRwBMcEcANlAyNQIDAu4BAAD/eWhI//HQkP/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/68qM/3JiQ/8CAQH/AgMC8TdRMzZMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAExwRqQAAAP+7oW//9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/00Y//5bVm/+SyYf/gr1//XUgn/wAAAP8CBALuNE4xOExwRwBMcEcATHBHAExwRwBMcEcAP106HQMEA+kAAAD/i3dS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/k35X/wAAAP8EBwThRWVADExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHADFJLkQAAAD/Y1U6//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/6r91/+SyYf/AllH/MCUU/wAAAP8JDQjRPFk4JUxwRwBMcEcATHBHAExwRwBMcEcARmhCCQsQCsoAAAD/gnBN//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv9tXkH/AAAA/x4sHIhMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBKbUUABwsH2Q0LB//oyIr/9dOS//XTkv/105L/9dOS//XTkv/105L/8MmE/+KxYP+DZjf/CQcD/wAAAP8VHxOgRmhBCkxwRwBMcEcATHBHAExwRwBMcEcAS25GABMdEqgAAAD/aFk+//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/786O/yIeFP8BAgH0QmI+EUxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHACIyH3kAAAD/jnpU//XTkv/105L/9dOS//XTkv/105L/9NGQ/8adWv82Khb/AAAA/wIDAvApPSdZTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHACg7JWIAAAD/Licb/+/Ojv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv+GdFD/AAAA/yc6JWZMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwA/XTsbAAAA+iYgFv/z0ZH/9dOS//XTkv/105L/8M6O/4JtSP8JBwT/AAAA/w8WDrs9WjkgTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAD9dOxoCAwLuCAcE/8queP/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/zrF6/wAAAP8THRKqTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHABMcEqwAAAD/sJhp//XTkv/105L/qpJl/yMeFf8AAAD/BQcE4yo/KFhLbkYATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAEtuRgARGRCyAAAA/5R/WP/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//PRkf8HBgT/CAwH1UxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwAwRy1JAAAA/1JHMf/WuH//SD0q/wAAAP8AAAD/FiEVnUVlQA5McEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwArQChXAAAA/0I4J//00pH/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/FBEM/wECAeJMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcASGtDAwQHBOAGBQP/CgkG/wAAAP8LEArJNU4xOkxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBCYj4UAwQC6QcGBP/Psnv/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9NKR/wgHBf8IDAfWTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwAiMyBzAAAA/wUHBOMqPidcSm1FAkxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAFiEVngAAAP97akn/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS/9K0fP8AAAD/EhwRrkxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAR2lCBitAKV9FZUAOTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcANU8xOAAAAP4hHBP/7cyN//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv+MeVP/AAAA/yY4I2tMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcASWxEAgoPCc0AAAD/qJBj//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/y0JD/KSMY/wABAPdAXzwVTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAEZnQQ0AAQD0AAAA/wgHBP9lVjz/1bd+//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9dOS//XTkv/105L/9NKR//HMiP/tw3v/f2c+/wAAAP8YIxaZTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcAPls6HR8tHIUDBAPoAAAA/wMDAv9IPiv/p49h/+zGgf/wyYT/8MqE//DJhP/wyYP/78iC/+7HgP/txX3/7MN6/+vAdf/pvHD/57hq/+SzYv/ksmH/on5E/wQDAf8CBALrQWA8GExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcASGpDBSxBKVUNFAzCAAAA/wAAAP8VEQn/ZE4q/7KLS//jsWD/5LJh/+SyYf/ksmH/5LJh/+SyYf/ksmH/5LJh/+SyYf/hsF//gGQ2/wYEAv8AAQD4MUkuQ0xwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHADlUNSwZJReXAAEA9AAAAP8AAAD/HBYM/2NNKv+hfkT/1qdb/+SyYf/ksmH/5LJh/+GvX/+jf0X/LyQT/wAAAP8CAwLwMUguQ0xwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAERkPw8qPyheEhsRsAABAPUAAAD/AAAA/wAAAP8WEQn/KB8R/yYeEP8KCAT/AAAA/wAAAP8PFw61PFk4JUxwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBFZkEKMkovRCExH38THBGwCQ0I0gMFA+QFBwTiCxELyB0rG484UjQwTHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcATHBHAExwRwBMcEcA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////gD////////8AH////////gAP///+AH/8AAf///wAH/wAB///8AAH/AAD///gAAP4AAP//8AAAfgAA///gAAB+AAD//+AAAD4AAP//wAAAPgAA///AAAAeAAH//8AAAB4AAf//wAAAHgAD///AAAAeAAf//8AAAB4AH///wAAAHgH////AAAAf/////8AAAB//////wAAAH//////AAAAf/////8AAAD+AP///4AAAPgAP///gAAB8AAf//+AAAPgAA///8AAB8AAB///wAAPgAAH///gAB+AAAP//+AAfwAAA///4AD+AAAD///wA/4AAAP///AH/AAAA///8B/4AAAD///4P/gAAAP///j/8AAAA//////gAAAD/////+AAAAf/////8AAAB//////8AAAP//////+AAB///////+AAP////////AD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8=";
  return new Response(Uint8Array.from(atob(faviconBase64), (c) => c.charCodeAt(0)), {
    headers: {
      "Content-Type": "image/x-icon",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
async function renderPanel(request, env) {
  const pwd = await env.kv.get("pwd");
  if (pwd) {
    const auth = await Authenticate(request, env);
    if (!auth) return Response.redirect(`${globalThis.urlOrigin}/login`, 302);
  }
  const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BPB Panel</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=autorenew,download,fingerprint,format_list_bulleted,key_vertical,open_in_new,qr_code,settings,share,terminal,tune,verified,visibility,visibility_off&display=block" />
    <style>:root {
    --color: black;
    --primary-color: #09639f;
    --secondary-color: #3498db;
    --header-color: #09639f;
    --background-color: #fff;
    --form-background-color: #f9f9f9;
    --table-active-color: #f2f2f2;
    --hr-text-color: #3b3b3b;
    --lable-text-color: #333;
    --border-color: #ddd;
    --button-color: #09639f;
    --input-background-color: white;
    --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    --container-border-radius: 28px;
    --inner-container-border-radius: 14px;
    --element-border-radius: 10px;
    --container-padding: 28px;
    --container-gap: 20px;
    --container-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    --inner-container-padding: 14px;
    --inner-container-gap: 14px;
}

body {
    font-family: Twemoji Country Flags, system-ui;
    background-color: var(--background-color);
    color: var(--color);
    text-align: center;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

body.dark-mode {
    --color: white;
    --primary-color: #09639F;
    --secondary-color: #3498DB;
    --header-color: #3498DB;
    --background-color: #121212;
    --form-background-color: #121212;
    --table-active-color: #252525;
    --hr-text-color: #D5D5D5;
    --lable-text-color: #DFDFDF;
    --border-color: #353535;
    --button-color: #3498DB;
    --input-background-color: #252525;
    --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);
    --container-box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
}

h1 {
    color: var(--header-color);
    text-shadow: var(--header-shadow);
}

.icon {
    vertical-align: middle;
    height: 3rem;
}

.container {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--container-border-radius);
    padding: var(--container-padding);
    box-shadow: var(--container-box-shadow);
}

.section .container {
    gap: var(--container-gap);
}

.inner-container {
    display: flex;
    flex-direction: column;
    gap: var(--inner-container-gap);
    box-shadow: var(--container-box-shadow);
    border: 1px solid var(--border-color);
    border-radius: var(--inner-container-border-radius);
    padding: var(--inner-container-padding);
}

.form-container {
    max-width: 90%;
    margin: 0 auto;
    background: var(--form-background-color);
    margin-bottom: 30px;
}

.configForm {
    display: flex;
    flex-direction: column;
}

.section {
    display: flex;
    flex-direction: column;
    gap: var(--container-gap);
    margin-bottom: var(--container-gap);
}

.form-control {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.form-control div {
    display: flex;
    flex: 1;
    width: 100%;
}

.form-control label {
    flex: 1;
    text-align: center;
    width: 100%;
    font-weight: bold;
    color: var(--lable-text-color);
}

input[type="text"],
input[type="number"],
input[type="url"],
textarea,
select {
    width: 100%;
    text-align: center;
    padding: 10px;
    line-height: 1.5;
    border: 1px solid var(--border-color);
    border-radius: var(--element-border-radius);
    color: var(--lable-text-color);
    background-color: var(--input-background-color);
    transition: border-color 0.3s ease;
}

textarea {
    font-family: inherit;
    resize: none;
    color: var(--color);
    max-height: calc(5lh + 10px);
}

input[type="text"]:focus,
input[type="number"]:focus,
input[type="url"]:focus,
textarea:focus,
select:focus {
    border-color: var(--secondary-color);
    outline: none;
}

.form-control input[type="password"] {
    text-align: center;
    width: 50%;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--element-border-radius);
    color: var(--lable-text-color);
    background-color: var(--input-background-color);
    transition: border-color 0.3s ease;
}

.form-control input[type="password"]:focus {
    border-color: var(--secondary-color);
    outline: none;
}

.form-control a,
a.link {
    width: 100%;
    text-decoration: none;
}

.form-control button {
    width: 100%;
    background-color: var(--form-background-color);
    font-weight: 600;
    color: var(--button-color);
    border-color: var(--primary-color);
    border: 1px solid;
    padding: 10px;
}

.protocols {
    flex-direction: row;
    flex-wrap: wrap;
}

.proto {
    gap: 8px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
}

.proto label {
    width: unset;
    flex: unset;
}

.min-max {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
}

.min-max input {
    width: 100%;
}

.min-max span {
    text-align: center;
    white-space: pre;
}

.ports-block th {
    text-wrap: nowrap;
    background-color: gray;
}

.ports-block td:first-child {
    text-align: center;
    font-size: larger;
}

.ports-block td:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.rules {
    gap: 16px;
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
}

.routing {
    gap: 5px;
    display: flex;
    flex: 1;
    margin: 0;
    align-items: center;
}

.routing label {
    text-align: left;
    width: unset;
    font-weight: 400;
    font-size: 100%;
    text-wrap: nowrap;
}

.form-control.apply {
    flex-direction: row;
    padding: var(--container-padding) 0;
    gap: 16px;
    justify-content: center;
    flex: unset;
}

.apply input {
    margin: 0;
}

.form-control.apply button {
    flex: unset;
    border: none;
    cursor: pointer;
    width: fit-content;
}

.material-symbols-outlined {
    margin: 0 5px 0 5px;
}

details:not(:last-of-type) {
    border-bottom: 1px solid var(--border-color);
}

summary {
    font-weight: bold;
    cursor: pointer;
    text-align: left;
    text-wrap: nowrap;
}

summary::marker {
    font-size: 1.5rem;
    color: var(--secondary-color);
}

summary:focus-visible {
    outline: none;
}

h2,
h3 {
    text-align: center;
    color: var(--hr-text-color);
}

hr {
    margin: 1px 0;
    border: 1px solid var(--border-color);
}

.footer-container {
    overflow-x: auto;
    display: flex;
}

.footer {
    display: flex;
    font-weight: 600;
    margin: 10px auto;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.footer i {
    font-size: 36px;
}

.footer a,
.footer a.link {
    color: var(--color);
    text-decoration: underline;
    width: unset;
    flex: unset;
}

.footer button {
    margin: unset;
    background: #212121;
    max-width: fit-content;
}

.footer .logout {
    background: none;
    color: var(--color);
    margin: 0;
    border: none;
    cursor: pointer;
}

.github-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
}

label {
    display: block;
    font-weight: 600;
    color: var(--lable-text-color);
}

.button,
table button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    white-space: nowrap;
    padding: 14px 14px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    border: none;
    border-radius: var(--element-border-radius);
    color: white;
    background-color: var(--primary-color);
    cursor: pointer;
    outline: none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    margin-right: auto;
    margin-left: auto;
}

.button {
    font-weight: 600;
    font-size: 1.1rem;
    width: max-content;
}

input[type="checkbox"] {
    background-color: var(--input-background-color);
}

.button.disabled {
    background-color: #ccc;
    cursor: not-allowed;
    box-shadow: none;
    pointer-events: none;
}

.button:hover,
table button:hover,
table button:focus {
    background-color: #2980b9;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}

.header-container button:hover {
    transform: scale(1.1);
}

.header-container {
    gap: 10px;
    display: flex;
    justify-content: center;
}

.header-container h3 {
    display: flex;
    justify-content: center;
}

button.button:hover {
    color: white;
}

.button:active,
table button:active {
    transform: translateY(1px);
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
}

.table-container {
    overflow-x: auto;
}

.add-noise {
    background: none;
    margin: 0;
    border: none;
    cursor: pointer;
}

.add-noise i,
.delete-noise i {
    color: var(--button-color);
}

.delete-noise {
    background: none;
    margin: 0;
    border: none;
    cursor: pointer;
}

.table-container table {
    width: 100%;
    border: 1px solid var(--border-color);
    border-collapse: separate;
    border-spacing: 0;
    border-radius: var(--inner-container-border-radius);
    margin-bottom: 20px;
    overflow: hidden;
}

.table-container tbody {
    display: flex;
    flex-direction: column;
}

.table-container tr {
    display: flex;
    flex-direction: row;
}

.table-container tr td:first-child {
    text-wrap: nowrap;
}

.my-ip {
    overflow-x: auto;
}

.my-ip table {
    width: 100%;
    border: 1px solid var(--border-color);
    border-collapse: separate;
    border-spacing: 0;
    border-radius: var(--inner-container-border-radius);
    margin-bottom: 20px;
    overflow: hidden;
}

.my-ip th,
.my-ip td {
    text-wrap: nowrap;
    padding: 10px;
    border-bottom: 1px solid var(--border-color);
}

.my-ip td:first-child,
.my-ip th {
    background-color: var(--table-active-color);
    font-weight: bold;
}

.table-container th,
.table-container td {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    width: 100%;
    gap: 10px;
    border-bottom: 1px solid var(--border-color);
}

.table-container td div {
    display: flex;
    align-items: center;
}

.table-container th {
    background-color: var(--secondary-color);
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    width: 50%;
}

.table-container tr:hover {
    background-color: var(--table-active-color);
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    width: fit-content;
    text-align: center;
    background-color: var(--form-background-color);
    margin: auto;
    padding: 10px 20px 20px;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.modal-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}

.qr-title {
    align-self: center;
    font-weight: bold;
}

.close {
    align-self: flex-end;
    color: var(--color);
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

#passwordError {
    color: red;
    margin-bottom: 10px;
}

.modalQR {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.floating-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: var(--color);
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, transform 0.3s;
}

.floating-button:hover {
    transform: scale(1.1);
}

body.dark-mode .floating-button {
    background-color: var(--color);
}

.floating-button i {
    color: var(--background-color);
}

body.dark-mode .floating-button:hover {
    transform: scale(1.1);
}

.refresh-geo-location {
    background: none;
    margin: 0;
    border: none;
    cursor: pointer;
}

.refresh-my-ip {
    color: var(--button-color);
}

details h3 {
    display: flex;
    justify-content: center;
}

.udp-noise {
    margin-bottom: 10px;
}

.password-wrapper {
    position: relative;
}

.password-wrapper input[type=password],
.password-wrapper input[type=text] {
    width: 100%;
    padding-right: 40px;
    margin: 0;
}

.toggle-password {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    user-select: none;
    color: darkgray;
}

.password-error {
    color: red;
    margin-bottom: 10px;
}

summary h3 {
    display: inline-flex;
    align-items: center;
}

@media only screen and (min-width: 768px) {
    .form-container {
        max-width: 60%;
    }

    .form-control {
        flex-direction: row;
    }

    .form-control label {
        text-align: left;
    }
}</style>
</head>

<body>
    <h1>
        BPB Panel <span id="panel-version" style="font-size: smaller;">v3.2.3</span> <img class="icon"
            src="/favicon.ico" alt="BPB Logo">
    </h1>
    <div class="form-container container">
        <h2><span class="material-symbols-outlined">settings</span> Settings</h2>
        <form id="configForm" class="configForm">
            <details class="details">
                <summary>
                    <h3>VLESS - Trojan</h3>
                </summary>
                <div class="section">
                    <div class="form-control">
                        <label for="remoteDNS">\u{1F30F} Remote DNS</label>
                        <div>
                            <input type="url" id="remoteDNS" name="remoteDNS" required>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="localDNS">\u{1F3DA}\uFE0F Local DNS</label>
                        <div>
                            <input type="text" id="localDNS" name="localDNS"
                                pattern="^(localhost|(?:\\d{1,3}\\.){3}\\d{1,3})$"
                                title="Please enter a valid DNS IP Address!" required>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="VLTRFakeDNS">\u{1F9E2} Fake DNS</label>
                        <div>
                            <select id="VLTRFakeDNS" name="VLTRFakeDNS">
                                <option value="true">Enabled</option>
                                <option value="false">Disabled</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="proxyIPs">\u{1F4CD} Proxy IPs / Domains</label>
                        <div>
                            <textarea type="text" id="proxyIPs" name="proxyIPs" rows="1"></textarea>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="outProxy">\u2708\uFE0F Chain Proxy</label>
                        <div>
                            <input type="text" id="outProxy" name="outProxy">
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="cleanIPs">\u2728 Clean IPs / Domains</label>
                        <div>
                            <textarea type="text" id="cleanIPs" name="cleanIPs" rows="1"></textarea>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="scanner">\u{1F50E} Clean IP Scanner</label>
                        <div>
                            <a href="https://github.com/bia-pain-bache/Cloudflare-Clean-IP-Scanner/releases/tag/v2.2.5"
                                name="scanner" target="_blank">
                                <button type="button" id="scanner" class="button">
                                    Download Scanner
                                    <span class="material-symbols-outlined">open_in_new</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="VLTRenableIPv6">\u{1F51B} IPv6</label>
                        <div>
                            <select id="VLTRenableIPv6" name="VLTRenableIPv6">
                                <option value="true">Enabled</option>
                                <option value="false">Disabled</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="customCdnAddrs">\u{1F480} Custom CDN Addrs</label>
                        <div>
                            <textarea type="text" id="customCdnAddrs" name="customCdnAddrs" rows="1"></textarea>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="customCdnHost">\u{1F480} Custom CDN Host</label>
                        <div>
                            <input type="text" id="customCdnHost" name="customCdnHost">
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="customCdnSni">\u{1F480} Custom CDN SNI</label>
                        <div>
                            <input type="text" id="customCdnSni" name="customCdnSni">
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="bestVLTRInterval">\u{1F504} Best Interval</label>
                        <div>
                            <input type="number" id="bestVLTRInterval" name="bestVLTRInterval" min="10" max="90">
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="VLConfigs">\u2699\uFE0F Protocols</label>
                        <div>
                            <div class="protocols inner-container">
                                <div class="proto">
                                    <input type="checkbox" id="VLConfigs" name="VLConfigs" value="true">
                                    <label for="VLConfigs">VLESS</label>
                                </div>
                                <div class="proto">
                                    <input type="checkbox" id="TRConfigs" name="TRConfigs" value="true">
                                    <label for="TRConfigs">Trojan</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="tls-ports">\u{1F512} TLS Ports</label>
                        <div>
                            <div id="tls-ports" class="rules inner-container"></div>
                        </div>
                    </div>
                    <div id="none-tls" class="form-control" style="display: none;">
                        <label for="non-tls-ports">\u{1F513} None TLS Ports</label>
                        <div>
                            <div id="non-tls-ports" class="rules inner-container"></div>
                        </div>
                    </div>
                </div>
            </details>
            <details>
                <summary>
                    <h3>Fragment</h3>
                </summary>
                <div class="section">
                    <div class="form-control">
                        <label for="fragmentLengthMin">\u{1F4D0} Length</label>
                        <div class="min-max">
                            <input type="number" id="fragmentLengthMin" name="fragmentLengthMin" min="10" required>
                            <span>-</span>
                            <input type="number" id="fragmentLengthMax" name="fragmentLengthMax" max="500" required>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="fragmentIntervalMin">\u{1F55E} Interval</label>
                        <div class="min-max">
                            <input type="number" id="fragmentIntervalMin" name="fragmentIntervalMin" min="1" max="30"
                                required>
                            <span>-</span>
                            <input type="number" id="fragmentIntervalMax" name="fragmentIntervalMax" min="1" max="30"
                                required>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="fragmentPackets">\u{1F4E6} Packets</label>
                        <div>
                            <select id="fragmentPackets" name="fragmentPackets">
                                <option value="tlshello">tlshello</option>
                                <option value="1-1">1-1</option>
                                <option value="1-2">1-2</option>
                                <option value="1-3">1-3</option>
                                <option value="1-5">1-5</option>
                            </select>
                        </div>
                    </div>
                </div>
            </details>
            <details>
                <summary>
                    <h3>Warp General</h3>
                </summary>
                <div class="section">

                    <div class="form-control">
                        <label for="warpEndpoints">\u2728 Endpoints</label>
                        <div>
                            <textarea type="text" id="warpEndpoints" name="warpEndpoints" rows="1" required></textarea>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="endpointScanner">\u{1F50E} Scan Endpoint</label>
                        <div>
                            <button type="button" id="endpointScanner" class="button">
                                Copy Script<span class="material-symbols-outlined">terminal</span>
                            </button>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="warpFakeDNS">\u{1F9E2} Fake DNS</label>
                        <div>
                            <select id="warpFakeDNS" name="warpFakeDNS">
                                <option value="true">Enabled</option>
                                <option value="false">Disabled</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="warpEnableIPv6">\u{1F51B} IPv6</label>
                        <div>
                            <select id="warpEnableIPv6" name="warpEnableIPv6">
                                <option value="true">Enabled</option>
                                <option value="false">Disabled</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="refreshBtn">\u267B\uFE0F Warp Configs</label>
                        <div>
                            <button id="updateWarpConfigs" type="button" class="button">
                                Update<span class="material-symbols-outlined">autorenew</span>
                            </button>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="bestWarpInterval">\u{1F504} Best Interval</label>
                        <div>
                            <input type="number" id="bestWarpInterval" name="bestWarpInterval" min="10" max="90">
                        </div>
                    </div>
                </div>
            </details>
            <details>
                <summary>
                    <h3>Warp PRO</h3>
                </summary>
                <div class="section">
                    <div class="container">
                        <div class="section">
                            <h3><span class="material-symbols-outlined">tune</span> MahsaNG - NikaNG - Hiddify</h3>
                            <div class="form-control">
                                <label for="hiddifyNoiseMode">\u{1F635}\u200D\u{1F4AB} Hiddify Mode</label>
                                <div>
                                    <input type="text" id="hiddifyNoiseMode" name="hiddifyNoiseMode"
                                        pattern="^(m[1-6]|h_[0-9A-Fa-f]{2}|g_([0-9A-Fa-f]{2}_){2}[0-9A-Fa-f]{2})$"
                                        title="Enter 'm1-m6', 'h_HEX', 'g_HEX_HEX_HEX' which HEX can be between 00 to ff"
                                        required>
                                </div>
                            </div>
                            <div class="form-control">
                                <label for="knockerNoiseMode">\u{1F635}\u200D\u{1F4AB} NikaNG Mode</label>
                                <div>
                                    <input type="text" id="knockerNoiseMode" name="knockerNoiseMode"
                                        pattern="^(none|quic|random|[0-9A-Fa-f]+)$"
                                        title="Enter 'none', 'quic', 'random', or any HEX string like 'ee0000000108aaaa'"
                                        required>
                                </div>
                            </div>
                            <div class="form-control">
                                <label for="noiseCountMin">\u{1F39A}\uFE0F Noise Count</label>
                                <div class="min-max">
                                    <input type="number" id="noiseCountMin" name="noiseCountMin" min="1" required>
                                    <span>-</span>
                                    <input type="number" id="noiseCountMax" name="noiseCountMax" min="1" required>
                                </div>
                            </div>
                            <div class="form-control">
                                <label for="noiseSizeMin">\u{1F4CF} Noise Size</label>
                                <div class="min-max">
                                    <input type="number" id="noiseSizeMin" name="noiseSizeMin" min="1" required>
                                    <span>-</span>
                                    <input type="number" id="noiseSizeMax" name="noiseSizeMax" min="1" required>
                                </div>
                            </div>
                            <div class="form-control">
                                <label for="noiseDelayMin">\u{1F55E} Noise Delay</label>
                                <div class="min-max">
                                    <input type="number" id="noiseDelayMin" name="noiseDelayMin" min="1" required>
                                    <span>-</span>
                                    <input type="number" id="noiseDelayMax" name="noiseDelayMax" min="1" required>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="section">
                            <h3><span class="material-symbols-outlined">tune</span> Clash - Amnezia</h3>
                            <div class="form-control">
                                <label for="amneziaNoiseCount">\u{1F39A}\uFE0F Noise Count</label>
                                <div>
                                    <input type="number" id="amneziaNoiseCount" name="amneziaNoiseCount" min="1"
                                        required>
                                </div>
                            </div>
                            <div class="form-control">
                                <label for="amneziaNoiseSizeMin">\u{1F4CF} Noise Size</label>
                                <div class="min-max">
                                    <input type="number" id="amneziaNoiseSizeMin" name="amneziaNoiseSizeMin" min="1"
                                        required>
                                    <span>-</span>
                                    <input type="number" id="amneziaNoiseSizeMax" name="amneziaNoiseSizeMax" min="1"
                                        required>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="udp-noise-container" class="container">
                        <div class="header-container">
                            <h3><span class="material-symbols-outlined">tune</span> v2rayNG - v2rayN</h3>
                            <button type="button" id="addUdpNoise" class="add-noise">
                                <i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div id="noises" class="section"></div>
                    </div>
                </div>
            </details>
            <details>
                <summary>
                    <h3>Routing Rules</h3>
                </summary>
                <div class="section">
                    <div class="container">
                        <h3><span class="material-symbols-outlined">tune</span> Preset Rules</h3>
                        <div class="form-control">
                            <label for="bypass-rules">\u{1F7E9} Bypass rules</label>
                            <div>
                                <div id="bypass-rules" class="rules inner-container">
                                    <div class="routing">
                                        <input type="checkbox" id="bypassLAN" name="bypassLAN" value="true">
                                        <label for="bypassLAN">Bypass LAN</label>
                                    </div>
                                    <div class="routing">
                                        <input type="checkbox" id="bypassIran" name="bypassIran" value="true">
                                        <label for="bypassIran">Bypass Iran</label>
                                    </div>
                                    <div class="routing">
                                        <input type="checkbox" id="bypassChina" name="bypassChina" value="true">
                                        <label for="bypassChina">Bypass China</label>
                                    </div>
                                    <div class="routing">
                                        <input type="checkbox" id="bypassRussia" name="bypassRussia" value="true">
                                        <label for="bypassRussia">Bypass Russia</label>
                                    </div>
                                    <div class="routing">
                                        <input type="checkbox" id="bypassOpenAi" name="bypassOpenAi" value="true">
                                        <label for="bypassOpenAi">Bypass ChatGPT</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-control">
                            <label for="block-rules">\u{1F7E5} Block rules</label>
                            <div>
                                <div id="block-rules" class="rules inner-container">
                                    <div class="routing">
                                        <input type="checkbox" id="blockAds" name="blockAds" value="true">
                                        <label for="blockAds">Block Ads.</label>
                                    </div>
                                    <div class="routing">
                                        <input type="checkbox" id="blockPorn" name="blockPorn" value="true">
                                        <label for="blockPorn">Block Porn</label>
                                    </div>
                                    <div class="routing">
                                        <input type="checkbox" id="blockUDP443" name="blockUDP443" value="true">
                                        <label for="blockUDP443">Block QUIC</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <h3><span class="material-symbols-outlined">tune</span> Custom Rules</h3>
                        <div class="form-control">
                            <label for="customBypassRules">\u{1F7E9} Bypass IPs / Domains</label>
                            <div>
                                <textarea type="text" id="customBypassRules" name="customBypassRules"rows="1"></textarea>
                            </div>
                        </div>
                        <div class="form-control">
                            <label for="customBlockRules">\u{1F7E5} Block IPs / Domains</label>
                            <div>
                                <textarea type="text" id="customBlockRules" name="customBlockRules" rows="1"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </details>
            <div id="apply" class="form-control apply">
                <input type="submit" id="applyButton" class="button disabled" value="Apply Settings \u{1F4A5}"
                    form="configForm">
                <button type="button" id="resetSettings" title="Reset panel settings to default">
                    <i class="fa fa-refresh fa-2x" aria-hidden="true"></i>
                </button>
            </div>
        </form>
    </div>
    <div class="form-container container">
        <h2><span class="material-symbols-outlined">share</span> Subscriptions - Configs</h2>
        <details class="details">
            <summary>
                <h3>Normal</h3>
            </summary>
            <div class="table-container">
                <table id="normal-configs-table">
                    <tr>
                        <th>Application</th>
                        <th>Subscription</th>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayNG</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>NikaNG</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>MahsaNG</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN-PRO</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Shadowrocket</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Streisand</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Hiddify</span>
                            </div>
                        </td>
                        <td>
                            <button onclick="openQR('normal', '', 'Normal', 'Normal Subscription')">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button class="copySubUrl" onclick="subURL('normal', '', 'Normal')">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>husi</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Nekobox</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Nekoray</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Karing</span>
                            </div>
                        </td>
                        <td>
                            <button onclick="openQR('normal', 'singbox', 'Normal', 'Normal Subscription', true)">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('normal', 'singbox', 'Normal')">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </details>
        <details>
            <summary>
                <h3>Full Normal</h3>
            </summary>
            <div class="table-container">
                <table id="full-normal-configs-table">
                    <tr>
                        <th>Application</th>
                        <th>Subscription</th>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayNG</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>NikaNG</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>MahsaNG</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN-PRO</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Streisand</span>
                            </div>
                        </td>
                        <td>
                            <button onclick="openQR('full-normal', 'xray', 'Full-Normal', 'Full normal Subscription')">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('full-normal', 'xray', 'Full-Normal')">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>sing-box</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN (sing-box)</span>
                            </div>
                        </td>
                        <td>
                            <button
                                onclick="openQR('full-normal', 'sfa', 'Full-Normal', 'Full normal Subscription', true)">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('full-normal', 'sfa', 'Full-Normal')">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                            <button onclick="dlURL('full-normal', 'sfa')">
                                Get config<span class="material-symbols-outlined">download</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Clash Meta</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Clash Verge</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>FlClash</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Stash</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN (mihomo)</span>
                            </div>
                        </td>
                        <td>
                            <button onclick="openQR('full-normal', 'clash', 'Full-Normal', 'Full normal Subscription')">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('full-normal', 'clash', 'Full-Normal')">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                            <button onclick="dlURL('full-normal', 'clash')">
                                Get config<span class="material-symbols-outlined">download</span>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </details>
        <details>
            <summary>
                <h3>Fragment</h3>
            </summary>
            <div class="table-container">
                <table id="frag-sub-table">
                    <thead>
                        <th>Application</th>
                        <th>Subscription</th>
                    </thead>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayNG</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>NikaNG</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>MahsaNG</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN-PRO</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Streisand</span>
                            </div>
                        </td>
                        <td>
                            <button onclick="openQR('fragment', '', 'Fragment', 'Fragment Subscription')">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('fragment', '', 'Fragment')">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Hiddify</span>
                            </div>
                        </td>
                        <td>
                            <button
                                onclick="openQR('fragment', 'hiddify-frag', 'Fragment', 'Fragment Subscription', false, true)">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('fragment', 'hiddify-frag', 'Fragment', true)">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </details>
        <details>
            <summary>
                <h3>Warp</h3>
            </summary>
            <div class="table-container">
                <table id="warp-configs-table">
                    <tr>
                        <th>Application</th>
                        <th>Subscription</th>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayNG</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Streisand</span>
                            </div>
                        </td>
                        <td>
                            <button onclick="openQR('warp', 'xray', 'Warp', 'Warp Subscription')">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('warp', 'xray', 'Warp')">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>sing-box</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN (sing-box)</span>
                            </div>
                        </td>
                        <td>
                            <button onclick="openQR('warp', 'singbox', 'Warp', 'Warp Subscription', true)">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('warp', 'singbox', 'Warp')">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                            <button onclick="dlURL('warp', 'singbox')">
                                Get config<span class="material-symbols-outlined">download</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Hiddify</span>
                            </div>
                        </td>
                        <td>
                            <button onclick="openQR('warp', 'hiddify', 'Warp', 'Warp Subscription', false, true)">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('warp', 'hiddify', 'Warp', true)">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Clash Meta</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Clash Verge</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>FlClash</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Stash</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN (mihomo)</span>
                            </div>
                        </td>
                        <td>
                            <button onclick="openQR('warp', 'clash', 'Warp', 'Warp Subscription')">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('warp', 'clash', 'Warp')">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                            <button onclick="dlURL('warp', 'clash')">
                                Get config<span class="material-symbols-outlined">download</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Wireguard</span>
                            </div>
                        </td>
                        <td>
                            <button id="dlConfigsBtn" type="button">
                                Download<span class="material-symbols-outlined">download</span>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </details>
        <details>
            <summary>
                <h3>Warp PRO</h3>
            </summary>
            <div class="table-container">
                <table id="warp-pro-configs-table">
                    <tr>
                        <th>Application</th>
                        <th>Subscription</th>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayNG</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Streisand</span>
                            </div>
                        </td>
                        <td>
                            <button onclick="openQR('warp-pro', 'xray-pro', 'Warp-Pro', 'Warp Pro Subscription')">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('warp-pro', 'xray-pro', 'Warp-Pro')">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>NikaNG</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>MahsaNG</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN-PRO</span>
                            </div>
                        </td>
                        <td>
                            <button onclick="openQR('warp-pro', 'xray-knocker', 'Warp-Pro', 'Warp Pro Subscription')">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('warp-pro', 'xray-knocker', 'Warp-Pro')">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Clash Meta</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Clash Verge</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>FlClash</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Stash</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>v2rayN (mihomo)</span>
                            </div>
                        </td>
                        <td>
                            <button onclick="openQR('warp-pro', 'clash-pro', 'Warp-Pro', 'Warp Pro Subscription')">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('warp-pro', 'clash-pro', 'Warp-Pro')">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                            <button onclick="dlURL('warp-pro', 'clash-pro')">
                                Get config<span class="material-symbols-outlined">download</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Hiddify</span>
                            </div>
                        </td>
                        <td>
                            <button
                                onclick="openQR('warp-pro', 'hiddify-pro', 'Warp-Pro', 'Warp Pro Subscription', false, true)">
                                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>
                            </button>
                            <button onclick="subURL('warp-pro', 'hiddify-pro', 'Warp-Pro', true)">
                                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>Amnezia</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">verified</span>
                                <span>WG Tunnel</span>
                            </div>
                        </td>
                        <td>
                            <button id="dlAmneziaConfigsBtn" type="button">
                                Download<span class="material-symbols-outlined">download</span>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </details>
    </div>
    <div class="form-container container">
        <div id="resetPassModal" class="modal">
            <div class="modal-content">
                <span class="close" id="closeResetPass">&times;</span>
                <form id="passwordChangeForm">
                    <h2>Change Password</h2>
                    <div class="section">
                        <div class="form-control">
                            <label for="newPassword">New Password</label>
                            <div class="password-wrapper">
                                <input type="password" id="newPassword" name="newPassword" required>
                                <span class="material-symbols-outlined toggle-password">
                                    visibility_off
                                </span>
                            </div>
                        </div>
                        <div class="form-control">
                            <label for="confirmPassword">Confirm Password</label>
                            <div class="password-wrapper">
                                <input type="password" id="confirmPassword" name="confirmPassword" required>
                                <span class="material-symbols-outlined toggle-password">
                                    visibility_off
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="passwordError" class="password-error"></div>
                    <button id="changePasswordBtn" type="submit" class="button">Change Password</button>
                </form>
            </div>
        </div>
        <div id="qrModal" class="modalQR">
            <div class="modal-content" class="modal-content">
                <div class="modal-header">
                    <span id="closeQR" class="close">&times;</span>
                    <span id="qrcodeTitle" class="qr-title"></span>
                </div>
                <div id="qrcode-container"></div>
            </div>
        </div>
        <div class="header-container">
            <h2><span class="material-symbols-outlined">fingerprint</span> My IP</h2>
            <button type="button" id="refresh-geo-location" class="refresh-geo-location">
                <i class="fa fa-refresh fa-2x refresh-my-ip" aria-hidden="true"></i>
            </button>
        </div>
        <div class="my-ip">
            <table id="ips" class="my-ip">
                <thead>
                    <th>Information</th>
                    <th>Cloudflare targets</th>
                    <th>Other targets</th>
                </thead>
                <tbody>
                    <tr>
                        <td>IP</td>
                        <td id="cf-ip"></td>
                        <td id="ip"></td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td id="cf-country"></td>
                        <td id="country"></td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td id="cf-city"></td>
                        <td id="city"></td>
                    </tr>
                    <tr>
                        <td>ISP</td>
                        <td id="cf-isp"></td>
                        <td id="isp"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="footer-container">
        <div class="footer">
            <div class="github-container">
                <i class="fa fa-github"></i>
                <a class="link" id="github-link" href="https://github.com/bia-pain-bache/BPB-Worker-Panel"
                    target="_blank">Github</a>
            </div>
            <button id="openResetPass" class="button">Change Password <span
                    class="material-symbols-outlined">key_vertical</span></button>
            <button type="button" id="logout" class="logout" title="Log out">
                <i class="fa fa-power-off fa-2x" aria-hidden="true"></i>
            </button>
        </div>
    </div>
    </div>
    <button id="darkModeToggle" class="floating-button">
        <i id="modeIcon" class="fa fa-2x fa-adjust dark-mode" aria-hidden="true"></i>
    </button>

    <script type="module">import { polyfillCountryFlagEmojis } from 'https://cdn.skypack.dev/country-flag-emoji-polyfill';

localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');
const defaultHttpsPorts = ['443', '8443', '2053', '2083', '2087', '2096'];
const defaultHttpPorts = ['80', '8080', '8880', '2052', '2082', '2086', '2095'];

fetch('/panel/settings')
    .then(async response => response.json())
    .then(data => {
        const { success, status, message, body } = data;
        if (status === 401 && !body.isPassSet) {
            const closeBtn = document.querySelector(".close");
            openResetPass();
            closeBtn.style.display = 'none';
        }
        if (!success) throw new Error(\`Data query failed with status \${status}: \${message}\`);
        const { subPath, proxySettings } = body;
        globalThis.subPath = encodeURIComponent(subPath);
        initiatePanel(proxySettings);
    })
    .catch(error => console.error("Data query error:", error.message || error));

Object.assign(window, { subURL, openQR, dlURL });
document.getElementById('openResetPass').addEventListener('click', openResetPass);
document.getElementById('closeResetPass').addEventListener('click', closeResetPass);
document.getElementById('closeQR').addEventListener('click', closeQR);
document.getElementById('darkModeToggle').addEventListener('click', darkModeToggle);
document.getElementById('dlAmneziaConfigsBtn').addEventListener('click', () => downloadWarpConfigs(true));
document.getElementById('dlConfigsBtn').addEventListener('click', () => downloadWarpConfigs(false));
document.getElementById('endpointScanner').addEventListener('click', () => copyToClipboard('bash <(curl -fsSL https://raw.githubusercontent.com/bia-pain-bache/warp-script/refs/heads/main/endip/install.sh)'));
document.getElementById('updateWarpConfigs').addEventListener('click', updateWarpConfigs);
document.getElementById('VLConfigs').addEventListener('click', handleProtocolChange);
document.getElementById('TRConfigs').addEventListener('click', handleProtocolChange);
document.getElementById('resetSettings').addEventListener('click', resetSettings);
document.getElementById('configForm').addEventListener('submit', updateSettings);
document.getElementById('logout').addEventListener('click', logout);
document.getElementById('passwordChangeForm').addEventListener('submit', resetPassword);
document.getElementById('addUdpNoise').addEventListener('click', addUdpNoise);
document.querySelectorAll('button.delete-noise').forEach(element => element.addEventListener('click', deleteUdpNoise));
document.querySelectorAll('.https').forEach(element => element.addEventListener('change', handlePortChange));
document.getElementById('refresh-geo-location').addEventListener('click', fetchIPInfo);
window.onclick = (event) => {
    const qrModal = document.getElementById('qrModal');
    const qrcodeContainer = document.getElementById('qrcode-container');
    if (event.target == qrModal) {
        qrModal.style.display = "none";
        qrcodeContainer.lastElementChild.remove();
    }
}

function initiatePanel(proxySettings) {
    const {
        VLConfigs,
        TRConfigs,
        ports,
        xrayUdpNoises
    } = proxySettings;

    globalThis.activeProtocols = VLConfigs + TRConfigs;
    globalThis.activeTlsPorts = ports.filter(port => defaultHttpsPorts.includes(port));

    const selectElements = ["VLTRFakeDNS", "VLTRenableIPv6", "warpFakeDNS", "warpEnableIPv6"];
    const checkboxElements = ["VLConfigs", "TRConfigs", "bypassLAN", "blockAds", "bypassIran", "blockPorn", "bypassChina", "blockUDP443", "bypassRussia", "bypassOpenAi"];
    const inputElements = [
        "remoteDNS", "localDNS", "outProxy", "customCdnHost", "customCdnSni", "bestVLTRInterval",
        "fragmentLengthMin", "fragmentLengthMax", "fragmentIntervalMin", "fragmentIntervalMax",
        "fragmentPackets", "bestWarpInterval", "hiddifyNoiseMode", "knockerNoiseMode", "noiseCountMin",
        "noiseCountMax", "noiseSizeMin", "noiseSizeMax", "noiseDelayMin", "noiseDelayMax",
        "amneziaNoiseCount", "amneziaNoiseSizeMin", "amneziaNoiseSizeMax",
    ];
    const textareaElements = ["proxyIPs", "cleanIPs", "customCdnAddrs", "warpEndpoints", "customBypassRules", "customBlockRules"];

    populatePanel(selectElements, checkboxElements, inputElements, textareaElements, proxySettings);
    renderPortsBlock(ports);
    renderUdpNoiseBlock(xrayUdpNoises);
    initiateForm();
    fetchIPInfo();
    polyfillCountryFlagEmojis();
}

function populatePanel(selectElements, checkboxElements, inputElements, textareaElements, proxySettings) {
    selectElements.forEach(key => document.getElementById(key).value = proxySettings[key]);
    checkboxElements.forEach(key => document.getElementById(key).checked = proxySettings[key]);
    inputElements.forEach(key => document.getElementById(key).value = proxySettings[key]);
    textareaElements.forEach(key => {
        const element = document.getElementById(key);
        const value = proxySettings[key]?.join('\\r\\n');
        const rowsCount = proxySettings[key].length;
        element.style.height = 'auto';
        if (rowsCount) element.rows = rowsCount;
        element.value = value;
    })
}

function initiateForm() {
    const configForm = document.getElementById('configForm');
    globalThis.initialFormData = new FormData(configForm);
    enableApplyButton();

    configForm.addEventListener('input', enableApplyButton);
    configForm.addEventListener('change', enableApplyButton);

    const textareas = document.querySelectorAll("textarea");
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height = \`\${this.scrollHeight}px\`;
        });
    });
}

function hasFormDataChanged() {
    const configForm = document.getElementById('configForm');
    const formDataToObject = (formData) => Object.fromEntries(formData.entries());
    const currentFormData = new FormData(configForm);
    const initialFormDataObj = formDataToObject(globalThis.initialFormData);
    const currentFormDataObj = formDataToObject(currentFormData);
    return JSON.stringify(initialFormDataObj) !== JSON.stringify(currentFormDataObj);
}

function enableApplyButton() {
    const applyButton = document.getElementById('applyButton');
    const isChanged = hasFormDataChanged();
    applyButton.disabled = !isChanged;
    applyButton.classList.toggle('disabled', !isChanged);
}

function openResetPass() {
    const resetPassModal = document.getElementById('resetPassModal');
    resetPassModal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeResetPass() {
    const resetPassModal = document.getElementById('resetPassModal');
    resetPassModal.style.display = "none";
    document.body.style.overflow = "";
}

function closeQR() {
    const qrModal = document.getElementById('qrModal');
    const qrcodeContainer = document.getElementById('qrcode-container');
    qrModal.style.display = "none";
    qrcodeContainer.lastElementChild.remove();
}

function darkModeToggle() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

async function getIpDetails(ip) {
    try {
        const response = await fetch('/panel/my-ip', { method: 'POST', body: ip });
        const data = await response.json();
        const { success, status, message, body } = data;
        if (!success) throw new Error(\`Fetch target IP failed with status \${status}: \${message}\`);
        return body;
    } catch (error) {
        console.error("Fetching IP error:", error.message || error)
    }
}

async function fetchIPInfo() {
    const refreshIcon = document.getElementById("refresh-geo-location").querySelector('i');
    refreshIcon.classList.add('fa-spin');
    const updateUI = (ip = '-', country = '-', countryCode = '-', city = '-', isp = '-', cfIP) => {
        const flag = countryCode !== '-' ? String.fromCodePoint(...[...countryCode].map(c => 0x1F1E6 + c.charCodeAt(0) - 65)) : '';
        document.getElementById(cfIP ? 'cf-ip' : 'ip').textContent = ip;
        document.getElementById(cfIP ? 'cf-country' : 'country').textContent = country + ' ' + flag;
        document.getElementById(cfIP ? 'cf-city' : 'city').textContent = city;
        document.getElementById(cfIP ? 'cf-isp' : 'isp').textContent = isp;
    };

    try {
        const response = await fetch('https://ipwho.is/' + '?nocache=' + Date.now(), { cache: "no-store" });
        const data = await response.json();
        const { success, ip, message } = data;
        if (!success) throw new Error(\`Fetch Other targets IP failed at \${response.url}: \${message}\`);
        const { country, countryCode, city, isp } = await getIpDetails(ip);
        updateUI(ip, country, countryCode, city, isp);
        refreshIcon.classList.remove('fa-spin');
    } catch (error) {
        console.error("Fetching IP error:", error.message || error)
    }

    try {
        const response = await fetch('https://ipv4.icanhazip.com/?nocache=' + Date.now(), { cache: "no-store" });
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(\`Fetch Cloudflare targets IP failed with status \${response.status} at \${response.url}: \${errorMessage}\`);
        }

        const ip = await response.text();
        const { country, countryCode, city, isp } = await getIpDetails(ip);
        updateUI(ip, country, countryCode, city, isp, true);
        refreshIcon.classList.remove('fa-spin');
    } catch (error) {
        console.error("Fetching IP error:", error.message || error)
    }
}

function downloadWarpConfigs(isAmnezia) {
    const client = isAmnezia ? "?app=amnezia" : "";
    window.location.href = "/panel/get-warp-configs" + client;
}

function subURL(path, app, tag, hiddifyType) {
    const url = \`\${hiddifyType ? 'hiddify://import/' : ''}\${window.origin}/sub/\${path}/\${globalThis.subPath}\${app ? \`?app=\${app}\` : ''}#BPB-\${tag}\`;
    copyToClipboard(url);
}

async function dlURL(path, app) {
    try {
        const response = await fetch(\`\${window.origin}/sub/\${path}/\${subPath}\${app ? \`?app=\${app}\` : ''}\`);
        const data = await response.text();
        if (!response.ok) throw new Error(\`Download failed with status \${response.status} at \${response.url}: \${data}\`);
        const blob = new Blob([data], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'config.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error("Download error:", error.message || error);
    }
}

function openQR(path, app, tag, title, sbType, hiddifyType) {
    const qrModal = document.getElementById('qrModal');
    const qrcodeContainer = document.getElementById('qrcode-container');
    const url = \`\${sbType ? 'sing-box://import-remote-profile?url=' : ''}\${hiddifyType ? 'hiddify://import/' : ''}\${window.origin}/sub/\${path}/\${globalThis.subPath}\${app ? \`?app=\${app}\` : ''}#BPB-\${tag}\`;
    let qrcodeTitle = document.getElementById("qrcodeTitle");
    qrcodeTitle.textContent = title;
    qrModal.style.display = "block";
    let qrcodeDiv = document.createElement("div");
    qrcodeDiv.className = "qrcode";
    qrcodeDiv.style.padding = "2px";
    qrcodeDiv.style.backgroundColor = "#ffffff";
    new QRCode(qrcodeDiv, {
        text: url,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    qrcodeContainer.appendChild(qrcodeDiv);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert('\u2705 Copied to clipboard:\\n\\n' + text))
        .catch(error => console.error('Failed to copy:', error));
}

async function updateWarpConfigs() {
    const confirmReset = confirm('\u26A0\uFE0F Are you sure?');
    if (!confirmReset) return;
    const refreshBtn = document.getElementById('updateWarpConfigs');
    document.body.style.cursor = 'wait';
    const refreshButtonVal = refreshBtn.innerHTML;
    refreshBtn.innerHTML = '\u231B Loading...';

    try {
        const response = await fetch('/panel/update-warp', { method: 'POST', credentials: 'include' });
        const { success, status, message } = await response.json();
        document.body.style.cursor = 'default';
        refreshBtn.innerHTML = refreshButtonVal;
        if (!success) {
            alert(\`\u26A0\uFE0F An error occured, Please try again!\\n\u26D4 \${message}\`);
            throw new Error(\`Updating Warp configs failed with status \${status}: \${message}\`);
        }

        alert('\u2705 Warp configs updated successfully! \u{1F60E}');
    } catch (error) {
        console.error("Updating Warp configs error:", error.message || error)
    }
}

function handleProtocolChange(event) {
    if (event.target.checked) {
        globalThis.activeProtocols++;
        return true;
    }

    globalThis.activeProtocols--;
    if (globalThis.activeProtocols === 0) {
        event.preventDefault();
        event.target.checked = !event.target.checked;
        alert("\u26D4 At least one Protocol should be selected! \u{1FAE4}");
        globalThis.activeProtocols++;
        return false;
    }
}

function handlePortChange(event) {
    if (event.target.checked) {
        globalThis.activeTlsPorts.push(event.target.name);
        return true;
    }

    globalThis.activeTlsPorts = globalThis.activeTlsPorts.filter(port => port !== event.target.name);
    if (globalThis.activeTlsPorts.length === 0) {
        event.preventDefault();
        event.target.checked = !event.target.checked;
        alert("\u26D4 At least one TLS port should be selected! \u{1FAE4}");
        globalThis.activeTlsPorts.push(event.target.name);
        return false;
    }
}

function resetSettings() {
    const confirmReset = confirm('\u26A0\uFE0F This will reset all panel settings.\\nAre you sure?');
    if (!confirmReset) return;
    const resetBtn = document.querySelector('#resetSettings i');
    resetBtn.classList.add('fa-spin');
    const formData = new FormData();
    formData.append('resetSettings', 'true');
    document.body.style.cursor = 'wait';

    fetch('/panel/reset-settings', { method: 'POST', body: formData, credentials: 'include' })
        .then(response => response.json())
        .then(data => {
            const { success, status, message, body } = data;
            document.body.style.cursor = 'default';
            resetBtn.classList.remove('fa-spin');
            if (!success) throw new Error(\`Reset settings failed with status \${status}: \${message}\`);
            initiatePanel(body);
            alert('\u2705 Panel settings reset to default successfully! \u{1F60E}');
        })
        .catch(error => console.error("Reseting settings error:", error.message || error));
}

function updateSettings(event) {
    event.preventDefault();
    event.stopPropagation();

    const elementsToCheck = ['cleanIPs', 'customCdnAddrs', 'customCdnSni', 'customCdnHost', 'proxyIPs', 'customBypassRules', 'customBlockRules'];
    const configForm = document.getElementById('configForm');
    const formData = new FormData(configForm);

    const validations = [
        validateMultipleIpDomains(elementsToCheck),
        validateWarpEndpoints(),
        validateMinMax(),
        validateChainProxy(),
        validateCustomCdn(),
        validateXrayNoises(formData),
    ];

    if (!validations.every(Boolean)) return false;

    const applyButton = document.getElementById('applyButton');
    document.body.style.cursor = 'wait';
    const applyButtonVal = applyButton.value;
    applyButton.value = '\u231B Loading...';

    fetch('/panel/update-settings', { method: 'POST', body: formData, credentials: 'include' })
        .then(response => response.json())
        .then(data => {
            const { success, status, message } = data;
            document.body.style.cursor = 'default';
            applyButton.value = applyButtonVal;
            if (status === 401) {
                alert('\u26A0\uFE0F Session expired! Please login again.');
                window.location.href = '/login';
            }

            if (!success) throw new Error(\`Update settings failed with status \${status}: \${message}\`);
            initiateForm();
            alert('\u2705 Settings applied successfully \u{1F60E}');
        })
        .catch(error => console.error("Update settings error:", error.message || error));
}

function isValidIpDomain(value) {
    const ipv6Regex = /^\\[(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6}|:(?::[a-fA-F0-9]{1,4}){1,7})\\](?:\\/(?:12[0-8]|1[01]?\\d|[0-9]?\\d))?$/gm;
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)(?:\\/(?:\\d|[12]\\d|3[0-2]))?$/gm;
    const domainRegex = /^(?=.{1,253}$)(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)\\.)+[a-zA-Z]{2,63}$/gm;
    return ipv4Regex.test(value) || ipv6Regex.test(value) || domainRegex.test(value);
}

function validateMultipleIpDomains(elements) {

    const getValue = (id) => document.getElementById(id).value?.split('\\n').filter(Boolean);

    const ips = [];
    elements.forEach(id => ips.push(...getValue(id)));
    const invalidIPs = ips?.filter(value => value && !isValidIpDomain(value.trim()));

    if (invalidIPs.length) {
        alert('\u26D4 Invalid IPs or Domains \u{1FAE4}\\n\u{1F449} Please enter each IP/domain in a new line.\\n\\n' + invalidIPs.map(ip => '\u26A0\uFE0F ' + ip).join('\\n'));
        return false;
    }

    return true;
}

function validateWarpEndpoints() {

    function isValidEndpoint(value) {
        const ipv6Regex = /^\\[(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6}|:(?::[a-fA-F0-9]{1,4}){1,7})\\](?:\\/(?:12[0-8]|1[01]?\\d|[0-9]?\\d))?:(?:6553[0-5]|655[0-2]\\d|65[0-4]\\d{2}|6[0-4]\\d{3}|[1-5]?\\d{1,4})$/gm;
        const ipv4Regex = /^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)(?:\\/(?:\\d|[12]\\d|3[0-2]))?:(?:6553[0-5]|655[0-2]\\d|65[0-4]\\d{2}|6[0-4]\\d{3}|[1-5]?\\d{1,4})$/gm;
        const domainRegex = /^(?=.{1,253}$)(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)\\.)+[a-zA-Z]{2,63}:(?:6553[0-5]|655[0-2]\\d|65[0-4]\\d{2}|6[0-4]\\d{3}|[1-5]?\\d{1,4})$/gm;
        return ipv4Regex.test(value) || ipv6Regex.test(value) || domainRegex.test(value);
    }

    const warpEndpoints = document.getElementById('warpEndpoints').value?.split('\\n');
    const invalidEndpoints = warpEndpoints?.filter(value => value && !isValidEndpoint(value.trim()));

    if (invalidEndpoints.length) {
        alert('\u26D4 Invalid endpoint \u{1FAE4}\\n\\n' + invalidEndpoints.map(endpoint => '\u26A0\uFE0F ' + endpoint).join('\\n'));
        return false;
    }

    return true;
}

function validateMinMax() {

    const getValue = (id) => parseInt(document.getElementById(id).value, 10);

    const fragmentLengthMin = getValue('fragmentLengthMin');
    const fragmentLengthMax = getValue('fragmentLengthMax');
    const fragmentIntervalMin = getValue('fragmentIntervalMin');
    const fragmentIntervalMax = getValue('fragmentIntervalMax');
    const noiseCountMin = getValue('noiseCountMin');
    const noiseCountMax = getValue('noiseCountMax');
    const noiseSizeMin = getValue('noiseSizeMin');
    const noiseSizeMax = getValue('noiseSizeMax');
    const noiseDelayMin = getValue('noiseDelayMin');
    const noiseDelayMax = getValue('noiseDelayMax');

    if (fragmentLengthMin >= fragmentLengthMax || fragmentIntervalMin > fragmentIntervalMax || noiseCountMin > noiseCountMax || noiseSizeMin > noiseSizeMax || noiseDelayMin > noiseDelayMax) {
        alert('\u26D4 Minimum should be smaller or equal to Maximum! \u{1FAE4}');
        return false;
    }

    return true;
}

function validateChainProxy() {

    const chainProxy = document.getElementById('outProxy').value?.trim();
    const isVless = /vless:\\/\\/[^\\s@]+@[^\\s:]+:[^\\s]+/.test(chainProxy);
    const hasSecurity = /security=/.test(chainProxy);
    const isSocksHttp = /^(http|socks):\\/\\/(?:([^:@]+):([^:@]+)@)?([^:@]+):(\\d+)$/.test(chainProxy);
    const securityRegex = /security=(tls|none|reality)/;
    const validSecurityType = securityRegex.test(chainProxy);
    const validTransmission = /type=(tcp|grpc|ws)/.test(chainProxy);
    if (!(isVless && (hasSecurity && validSecurityType || !hasSecurity) && validTransmission) && !isSocksHttp && chainProxy) {
        alert('\u26D4 Invalid Config! \u{1FAE4} \\n - The chain proxy should be VLESS, Socks or Http!\\n - VLESS transmission should be GRPC,WS or TCP\\n - VLESS security should be TLS,Reality or None\\n - socks or http should be like:\\n + (socks or http)://user:pass@host:port\\n + (socks or http)://host:port');
        return false;
    }

    let match = chainProxy.match(securityRegex);
    const securityType = match?.[1] || null;
    match = chainProxy.match(/:(\\d+)\\?/);
    const vlessPort = match?.[1] || null;
    if (isVless && securityType === 'tls' && vlessPort !== '443') {
        alert('\u26D4 VLESS TLS port can be only 443 to be used as a proxy chain! \u{1FAE4}');
        return false;
    }

    return true;
}

function validateCustomCdn() {

    const customCdnHost = document.getElementById('customCdnHost').value;
    const customCdnSni = document.getElementById('customCdnSni').value;
    const customCdnAddrs = document.getElementById('customCdnAddrs').value?.split('\\n').filter(Boolean);

    const isCustomCdn = customCdnAddrs.length || customCdnHost !== '' || customCdnSni !== '';
    if (isCustomCdn && !(customCdnAddrs.length && customCdnHost && customCdnSni)) {
        alert('\u26D4 All "Custom" fields should be filled or deleted together! \u{1FAE4}');
        return false;
    }

    return true;
}

function validateXrayNoises(formData) {
    const udpNoiseModes = formData.getAll('udpXrayNoiseMode') || [];
    const udpNoisePackets = formData.getAll('udpXrayNoisePacket') || [];
    const udpNoiseDelaysMin = formData.getAll('udpXrayNoiseDelayMin') || [];
    const udpNoiseDelaysMax = formData.getAll('udpXrayNoiseDelayMax') || [];
    const base64Regex = /^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+\\/]{3}=)?$/;
    let submisionError = false;
    for (const [index, mode] of udpNoiseModes.entries()) {
        if (udpNoiseDelaysMin[index] > udpNoiseDelaysMax[index]) {
            alert('\u26D4 The minimum noise delay should be smaller or equal to maximum! \u{1FAE4}');
            submisionError = true;
            break;
        }

        switch (mode) {

            case 'base64':

                if (!base64Regex.test(udpNoisePackets[index])) {
                    alert('\u26D4 The Base64 noise packet is not a valid base64 value! \u{1FAE4}');
                    submisionError = true;
                }

                break;

            case 'rand':

                if (!(/^\\d+-\\d+$/.test(udpNoisePackets[index]))) {
                    alert('\u26D4 The Random noise packet should be a range like 0-10 or 10-30! \u{1FAE4}');
                    submisionError = true;
                }

                const [min, max] = udpNoisePackets[index].split("-").map(Number);
                if (min > max) {
                    alert('\u26D4 The minimum Random noise packet should be smaller or equal to maximum! \u{1FAE4}');
                    submisionError = true;
                }

                break;

            case 'hex':

                if (!(/^(?=(?:[0-9A-Fa-f]{2})*$)[0-9A-Fa-f]+$/.test(udpNoisePackets[index]))) {
                    alert('\u26D4 The Hex noise packet is not a valid hex value! It should have even length and consisted of 0-9, a-f and A-F. \u{1FAE4}');
                    submisionError = true;
                }

                break;
        }
    }

    return !submisionError;
}

function logout(event) {
    event.preventDefault();

    fetch('/logout', { method: 'GET', credentials: 'same-origin' })
        .then(response => response.json())
        .then(data => {
            const { success, status, message } = data;
            if (!success) throw new Error(\`Logout failed with status \${status}: \${message}\`);
            window.location.href = '/login';
        })
        .catch(error => console.error("Logout error:", error.message || error));
}

document.querySelectorAll(".toggle-password").forEach(toggle => {
    toggle.addEventListener("click", function () {
        const input = this.previousElementSibling;
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        this.textContent = isPassword ? "visibility" : "visibility_off";
    });
});

function resetPassword(event) {
    event.preventDefault();
    const resetPassModal = document.getElementById('resetPassModal');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');
    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (newPassword !== confirmPassword) {
        passwordError.textContent = "Passwords do not match";
        return false;
    }

    const hasCapitalLetter = /[A-Z]/.test(newPassword);
    const hasNumber = /[0-9]/.test(newPassword);
    const isLongEnough = newPassword.length >= 8;

    if (!(hasCapitalLetter && hasNumber && isLongEnough)) {
        passwordError.textContent = '\u26A0\uFE0F Password must contain at least one capital letter, one number, and be at least 8 characters long.';
        return false;
    }

    fetch('/panel/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: newPassword,
        credentials: 'same-origin'

    })
        .then(response => response.json())
        .then(data => {
            const { success, status, message } = data;
            if (!success) {
                passwordError.textContent = \`\u26A0\uFE0F \${message}\`;
                throw new Error(\`Reset password failed with status \${status}: \${message}\`);
            }

            resetPassModal.style.display = "none";
            document.body.style.overflow = "";
            alert("\u2705 Password changed successfully! \u{1F44D}");
            window.location.href = '/login';

        }).catch(error => console.error("Reset password error:", error.message || error));
}

function renderPortsBlock(ports) {
    let noneTlsPortsBlock = '', tlsPortsBlock = '';
    const allPorts = [...(window.origin.includes('workers.dev') ? defaultHttpPorts : []), ...defaultHttpsPorts];

    allPorts.forEach(port => {
        const isChecked = ports.includes(port) ? 'checked' : '';
        const clss = defaultHttpsPorts.includes(port) ? 'class="https"' : '';
        const portBlock = \`
            <div class="routing">
                <input type="checkbox" name=\${port} \${clss} value="true" \${isChecked}>
                <label>\${port}</label>
            </div>\`;

        defaultHttpsPorts.includes(port) ? tlsPortsBlock += portBlock : noneTlsPortsBlock += portBlock;
    });

    document.getElementById("tls-ports").innerHTML = tlsPortsBlock;
    if (noneTlsPortsBlock) {
        document.getElementById("non-tls-ports").innerHTML = noneTlsPortsBlock;
        document.getElementById("none-tls").style.display = 'flex';
    }
}

function addUdpNoise() {
    const container = document.getElementById("noises");
    const noiseBlock = document.getElementById("udp-noise-1");
    const index = container.children.length + 1;
    const clone = noiseBlock.cloneNode(true);
    clone.querySelector("h4").textContent = \`Noise \${index}\`;
    clone.id = \`udp-noise-\${index}\`;
    clone.querySelector("button").addEventListener('click', deleteUdpNoise);
    container.appendChild(clone);
    document.getElementById("configForm").dispatchEvent(new Event("change"));
}

function deleteUdpNoise(event) {
    const container = document.getElementById("noises");
    if (container.children.length === 1) {
        alert('\u26D4 You cannot delete all noises!');
        return;
    }

    const confirmReset = confirm('\u26A0\uFE0F This will delete the noise.\\nAre you sure?');
    if (!confirmReset) return;
    event.target.closest(".inner-container").remove();
    document.getElementById("configForm").dispatchEvent(new Event("change"));
}

function renderUdpNoiseBlock(xrayUdpNoises) {
    let udpNoiseBlocks = '';
    xrayUdpNoises.forEach((noise, index) => {
        udpNoiseBlocks += \`
            <div id="udp-noise-\${index + 1}" class="inner-container">
                <div class="header-container">
                    <h4>Noise \${index + 1}</h4>
                    <button type="button" class="delete-noise">
                        <i class="fa fa-minus-circle fa-2x" aria-hidden="true"></i>
                    </button>      
                </div>
                <div class="section">
                    <div class="form-control">
                        <label>\u{1F635}\u200D\u{1F4AB} v2ray Mode</label>
                        <div>
                            <select name="udpXrayNoiseMode">
                                <option value="base64" \${noise.type === 'base64' ? 'selected' : ''}>Base64</option>
                                <option value="rand" \${noise.type === 'rand' ? 'selected' : ''}>Random</option>
                                <option value="str" \${noise.type === 'str' ? 'selected' : ''}>String</option>
                                <option value="hex" \${noise.type === 'hex' ? 'selected' : ''}>Hex</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-control">
                        <label>\u{1F4E5} Noise Packet</label>
                        <div>
                            <input type="text" name="udpXrayNoisePacket" value="\${noise.packet}">
                        </div>
                    </div>
                    <div class="form-control">
                        <label>\u{1F55E} Noise Delay</label>
                        <div class="min-max">
                            <input type="number" name="udpXrayNoiseDelayMin"
                                value="\${noise.delay.split('-')[0]}" min="1" required>
                            <span> - </span>
                            <input type="number" name="udpXrayNoiseDelayMax"
                                value="\${noise.delay.split('-')[1]}" min="1" required>
                        </div>
                    </div>
                    <div class="form-control">
                        <label>\u{1F39A}\uFE0F Noise Count</label>
                        <div>
                            <input type="number" name="udpXrayNoiseCount" value="\${noise.count}" min="1" required>
                        </div>
                    </div>
                </div>
            </div>\`;
    });

    document.getElementById("noises").innerHTML = udpNoiseBlocks;
}</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
</body>

</html>`.replace(/__PANEL_VERSION__/g, globalThis.panelVersion);
  return new Response(html, {
    headers: { "Content-Type": "text/html" }
  });
}
async function renderLogin(request, env) {
  const auth = await Authenticate(request, env);
  if (auth) return Response.redirect(`${globalThis.urlOrigin}/panel`, 302);
  const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BPB Panel</title>
    <link rel="icon" href="/favicon.ico" />
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=login,visibility,visibility_off&display=block"
        rel="stylesheet" />
    <style>:root {
    --color: black;
    --primary-color: #09639f;
    --header-color: #09639f;
    --background-color: #fff;
    --form-background-color: #f9f9f9;
    --lable-text-color: #333;
    --h2-color: #3b3b3b;
    --border-color: #ddd;
    --input-background-color: white;
    --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}

html,
body {
    height: 100%;
    margin: 0;
}

body {
    font-family: system-ui;
    background-color: var(--background-color);
    position: relative;
    overflow: hidden;
    text-align: center;
}

body.dark-mode {
    --color: white;
    --primary-color: #09639F;
    --header-color: #3498DB;
    --background-color: #121212;
    --form-background-color: #121212;
    --lable-text-color: #DFDFDF;
    --h2-color: #D5D5D5;
    --border-color: #353535;
    --input-background-color: #252525;
    --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);
}

.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
}

h1 {
    color: var(--header-color);
    text-shadow: var(--header-shadow);
}

.icon {
    vertical-align: middle;
    height: 3rem;
}

h2 {
    color: var(--h2-color)
}

.form-container {
    background: var(--form-background-color);
    border: 1px solid var(--border-color);
    border-radius: 28px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
}

label {
    font-weight: bold;
    color: var(--lable-text-color);
}

.password-wrapper {
    display: flex;
    width: 100%;
    position: relative;
}

.password-wrapper input[type=password],
.password-wrapper input[type=text] {
    width: 100%;
    padding-right: 40px;
    text-align: center;
    margin: 0;
}

.toggle-password {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    user-select: none;
    color: darkgray;
}

input[type="text"],
input[type="password"] {
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    color: var(--lable-text-color);
    background-color: var(--input-background-color);
}

.hint {
    color: red;
    margin-bottom: 10px;
}

button {
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: var(--primary-color);
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button:hover,
.button:focus {
    background-color: #2980b9;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}

.button:active {
    transform: translateY(1px);
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
}

@media only screen and (min-width: 576px) {
    .container {
        width: 70%;
    }
}

@media only screen and (min-width: 768px) {
    .container {
        width: 50%;
    }
}

@media only screen and (min-width: 992px) {
    .container {
        width: 30%;
    }
}</style>
</head>

<body>
    <div class="container">
        <h1>
            BPB Panel <span id="panel-version" style="font-size: smaller;">v3.2.3</span> <img class="icon"
                src="/favicon.ico" alt="BPB Logo">
        </h1>
        <div class="form-container">
            <h2>User Login</h2>
            <form id="loginForm" class="login-form">
                <div class="form-control">
                    <label for="password">Password</label>
                    <div class="password-wrapper">
                        <input type="password" id="password" name="password" required>
                        <span id="togglePassword" class="material-symbols-outlined toggle-password">
                            visibility_off
                        </span>
                    </div>
                </div>
                <div id="passwordError" class="hint"></div>
                <button type="submit" class="button">
                    Login
                    <span class="material-symbols-outlined">
                        login
                    </span>
                </button>
            </form>
        </div>
    </div>
    <script>localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: password
        });

        const { success, status, message } = await response.json();
        if (!success) {
            passwordError.textContent = '\u26A0\uFE0F Wrong Password!';
            throw new Error(\`Login failed with status \${status}: \${message}\`);
        }

        window.location.href = '/panel';
        console.log('true')
    } catch (error) {
        console.error('Login error:', error.message || error);
    }
});

document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    this.textContent = isPassword ? "visibility_off" : "visibility";
});</script>
</body>

</html>`.replace(/__PANEL_VERSION__/g, globalThis.panelVersion);
  return new Response(html, {
    headers: { "Content-Type": "text/html" }
  });
}
async function renderSecrets() {
  const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BPB Panel</title>
    <link rel="icon" href="/favicon.ico" />
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=content_copy,refresh&display=block"
        rel="stylesheet" />
    <style>:root {
    --color: black;
    --primary-color: #09639f;
    --header-color: #09639f;
    --background-color: #fff;
    --form-background-color: #f9f9f9;
    --lable-text-color: #333;
    --h2-color: #3b3b3b;
    --border-color: #ddd;
    --input-background-color: white;
    --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}

html,
body {
    height: 100%;
    margin: 0;
}

body {
    font-family: system-ui;
    background-color: var(--background-color);
    color: var(--lable-text-color);
    position: relative;
    text-align: center;
}

body.dark-mode {
    --color: white;
    --primary-color: #09639F;
    --header-color: #3498DB;
    --background-color: #121212;
    --form-background-color: #121212;
    --lable-text-color: #DFDFDF;
    --h2-color: #D5D5D5;
    --border-color: #353535;
    --input-background-color: #252525;
    --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);
}

.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
}

h1 {
    color: var(--header-color);
    text-shadow: var(--header-shadow);
}

.icon {
    vertical-align: middle;
    height: 3rem;
}

h2 {
    color: var(--h2-color)
}

h3 {
    color: var(--lable-text-color);
}

.form-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: var(--form-background-color);
    border: 1px solid var(--border-color);
    border-radius: 28px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.value-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.output-container {
    width: 100%;
    padding: 8px;
    text-align: center;
    background-color: var(--input-background-color);
    color: var(--lable-text-color);
    border: 1px solid var(--border-color);
    border-radius: 10px;
}

.copy-icon {
    cursor: pointer;
    transition: color 0.2s;
}

.copy-icon:hover {
    color: #2980b9;
}

button {
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: var(--primary-color);
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button:hover,
.button:focus {
    background-color: #2980b9;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
}

.button:active {
    transform: translateY(1px);
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
}

.button:active {
    transform: translateY(1px);
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
}

.material-symbols-outlined:hover {
    cursor: pointer;
}

@media only screen and (min-width: 576px) {
    .container {
        width: 70%;
    }
}

@media only screen and (min-width: 768px) {
    .container {
        width: 50%;
    }
}

@media only screen and (min-width: 992px) {
    .container {
        width: 40%;
    }
}</style>
</head>

<body>
    <div class="container">
        <h1>
            BPB Panel <span id="panel-version" style="font-size: smaller;">v3.2.3</span> <img class="icon"
                src="/favicon.ico" alt="BPB Logo">
        </h1>
        <div class="form-container">
            <h2>Secrets generator</h2>
            <div>
                <h3>Random UUID</h3>
                <div class="value-container">
                    <div class="output-container">
                        <span id="uuid" class="output"></span>
                    </div>
                    <span class="material-symbols-outlined" onclick="copyToClipboard('uuid')">
                        content_copy
                    </span>
                </div>
            </div>
            <div>
                <h3>Random Trojan Password</h3>
                <div class="value-container">
                    <div class="output-container">
                        <span id="tr-password" class="output"></span>
                    </div>
                    <span class="material-symbols-outlined" onclick="copyToClipboard('tr-password')">
                        content_copy
                    </span>
                </div>
            </div>
            <div>
                <h3>Random Subscription URI path</h3>
                <div class="value-container">
                    <div class="output-container">
                        <span id="sub-path" class="output"></span>
                    </div>
                    <span class="material-symbols-outlined" onclick="copyToClipboard('sub-path')">
                        content_copy
                    </span>
                </div>
            </div>
            <button class="button" class="button" onclick="generateCredentials()">
                Generate Again
                <span class="material-symbols-outlined">
                    refresh
                </span>
            </button>
        </div>
    </div>
    <script>localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');
generateCredentials();

function generateUUID() {
    return crypto.randomUUID();
}

function generateStrongPassword() {
    const charset =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?";
    let password = '';
    const randomValues = new Uint8Array(16);
    crypto.getRandomValues(randomValues);

    for (let i = 0; i < 16; i++) {
        password += charset[randomValues[i] % charset.length];
    }
    return password;
}

function generateSubURIPath() {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@__SCRIPT__*_-+;:,.";
    let uriPath = '';
    const randomValues = new Uint8Array(16);
    crypto.getRandomValues(randomValues);

    for (let i = 0; i < 16; i++) {
        uriPath += charset[randomValues[i] % charset.length];
    }
    return uriPath;
}

function generateCredentials() {
    const uuid = generateUUID();
    const password = generateStrongPassword();
    const uriPath = generateSubURIPath();

    document.getElementById('uuid').textContent = uuid;
    document.getElementById('tr-password').textContent = password;
    document.getElementById('sub-path').textContent = uriPath;
}

function copyToClipboard(elementId) {
    const textToCopy = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(textToCopy)
        .then(() => alert('\u2705 Copied to clipboard!'))
        .catch(err => console.error('Failed to copy text:', err));
}</script>
</body>

</html>`.replace(/__PANEL_VERSION__/g, globalThis.panelVersion);
  return new Response(html, {
    headers: { "Content-Type": "text/html" }
  });
}
async function renderError() {
  const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BPB Panel</title>
    <link rel="icon" href="/favicon.ico" />
    <style>:root {
    --color: black;
    --header-color: #09639f;
    --background-color: #fff;
    --border-color: #ddd;
    --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}

body,
html {
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: system-ui;
    color: var(--color);
    background-color: var(--background-color);
    text-align: center;
}

body.dark-mode {
    --color: white;
    --header-color: #3498DB;
    --background-color: #121212;
    --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);
}

h1 {
    color: var(--header-color);
    text-shadow: var(--header-shadow);
}

.icon {
    vertical-align: middle;
    height: 3rem;
}</style>
</head>

<body>
    <div id="error-container">
        <h1>
            BPB Panel
            <span id="panel-version" style="font-size: smaller">v3.2.3</span>
            <img class="icon" src="/favicon.ico" alt="BPB Logo" />
        </h1>
        <div id="error-message">
            <h2>\u274C Something went wrong!</h2>
            <p>
                <b id="error"></b>
            </p>
        </div>
    </div>
    <script>
        localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');
const params = new URLSearchParams(window.location.search);
const errorString = params.get('error');
document.getElementById("error").innerHTML = \`\u26A0\uFE0F \${errorString}\`;
;
    </script>
</body>

</html>`.replace(/__PANEL_VERSION__/g, globalThis.panelVersion);
  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html" }
  });
}
async function getWarpSub(request, env) {
  if (client === "clash") return await getClashWarpConfig(request, env);
  if (client === "singbox") return await getSingBoxWarpConfig(request, env, client);
  if (client === "hiddify") return await getHiddifyWarpConfigs(request, env, false);
  return await getXrayWarpConfigs(request, env, client);
}
async function getWarpProSub(request, env) {
  if (client === "clash-pro") return await getClashWarpConfig(request, env, true);
  if (client === "hiddify-pro") return await getHiddifyWarpConfigs(request, env, true);
  return await getXrayWarpConfigs(request, env);
}
async function getNormalSub(request, env) {
  return await getNormalConfigs(request, env);
}
async function getFullNormalSub(request, env) {
  if (client === "sfa") return await getSingBoxCustomConfig(request, env);
  if (client === "clash") return await getClashNormalConfig(request, env);
  if (client === "xray") return await getXrayCustomConfigs(request, env, false);
}
async function getFragmentSub(request, env) {
  if (client === "hiddify-frag") return await getNormalConfigs(request, env);
  return await getXrayCustomConfigs(request, env, true);
}
async function updateWarpConfigs(request, env) {
  if (request.method === "POST") {
    const auth = await Authenticate(request, env);
    if (!auth) return await respond(false, 401, "Unauthorized.");
    try {
      await fetchWarpConfigs(env);
      return await respond(true, 200, "Warp configs updated successfully!");
    } catch (error) {
      console.log(error);
      return await respond(false, 500, `An error occurred while updating Warp configs: ${error}`);
    }
  }
  return await respond(false, 405, "Method not allowd.");
}
async function respond(success, status, message2, body, customHeaders) {
  return new Response(JSON.stringify({
    success,
    status,
    message: message2 || "",
    body: body || ""
  }), {
    headers: customHeaders || {
      "Content-Type": message2 ? "text/plain" : "application/json"
    }
  });
}

// package.json
var package_default = {
  name: "bpb-panel",
  version: "3.2.3",
  homepage: "https://github.com/bia-pain-bache/BPB-Worker-Panel",
  license: "GPL-3.0",
  private: true,
  type: "module",
  scripts: {
    build: "node scripts/build.js"
  },
  devDependencies: {
    esbuild: "^0.25.2",
    glob: "^10.3.10",
    "html-minifier": "^4.0.0",
    "javascript-obfuscator": "latest"
  },
  dependencies: {
    jose: "^6.0.10",
    jszip: "^3.10.1",
    tweetnacl: "^1.0.3",
    "js-sha256": "^0.11.0"
  }
};

// src/helpers/init.js
function initializeParams(request, env) {
  const proxyIPs = env.PROXY_IP?.split(",").map((proxyIP) => proxyIP.trim());
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  globalThis.panelVersion = package_default.version;
  globalThis.defaultHttpPorts = ["80", "8080", "2052", "2082", "2086", "2095", "8880"];
  globalThis.defaultHttpsPorts = ["443", "8443", "2053", "2083", "2087", "2096"];
  globalThis.userID = env.UUID;
  globalThis.TRPassword = env.TR_PASS;
  globalThis.proxyIP = proxyIPs?.length ? proxyIPs[Math.floor(Math.random() * proxyIPs?.length)] : "bpb.yousef.isegaro.com";
  globalThis.hostName = request.headers.get("Host");
  globalThis.pathName = url.pathname;
  globalThis.client = searchParams.get("app");
  globalThis.urlOrigin = url.origin;
  globalThis.dohURL = env.DOH_URL || "https://cloudflare-dns.com/dns-query";
  globalThis.fallbackDomain = env.FALLBACK || "speed.cloudflare.com";
  globalThis.subPath = env.SUB_PATH || userID;
  if (!["/error", "/secrets", "/favicon.ico"].includes(pathName)) {
    if (!globalThis.userID || !globalThis.TRPassword) throw new Error(`Please set UUID and Trojan password first. Please visit <a href="${globalThis.urlOrigin}/secrets" target="_blank">here</a> to generate them.`, { cause: "init" });
    if (globalThis.userID && !isValidUUID(globalThis.userID)) throw new Error(`Invalid UUID: ${globalThis.userID}`, { cause: "init" });
    if (typeof env.kv !== "object") throw new Error("KV Dataset is not properly set! Please refer to tutorials.", { cause: "init" });
  }
}

// src/protocols/vless.js
import { connect } from "cloudflare:sockets";
async function VLOverWSHandler(request) {
  const webSocketPair = new WebSocketPair();
  const [client2, webSocket] = Object.values(webSocketPair);
  webSocket.accept();
  let address = "";
  let portWithRandomLog = "";
  const log = (info, event) => {
    console.log(`[${address}:${portWithRandomLog}] ${info}`, event || "");
  };
  const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
  const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);
  let remoteSocketWapper = {
    value: null
  };
  let udpStreamWrite = null;
  let isDns = false;
  readableWebSocketStream.pipeTo(
    new WritableStream({
      async write(chunk, controller) {
        if (isDns && udpStreamWrite) {
          return udpStreamWrite(chunk);
        }
        if (remoteSocketWapper.value) {
          const writer = remoteSocketWapper.value.writable.getWriter();
          await writer.write(chunk);
          writer.releaseLock();
          return;
        }
        const {
          hasError,
          message: message2,
          portRemote = 443,
          addressRemote = "",
          rawDataIndex,
          VLVersion = new Uint8Array([0, 0]),
          isUDP
        } = await processVLHeader(chunk, globalThis.userID);
        address = addressRemote;
        portWithRandomLog = `${portRemote}--${Math.random()} ${isUDP ? "udp " : "tcp "} `;
        if (hasError) {
          throw new Error(message2);
        }
        if (isUDP) {
          if (portRemote === 53) {
            isDns = true;
          } else {
            throw new Error("UDP proxy only enable for DNS which is port 53");
          }
        }
        const VLResponseHeader = new Uint8Array([VLVersion[0], 0]);
        const rawClientData = chunk.slice(rawDataIndex);
        if (isDns) {
          const { write } = await handleUDPOutBound(webSocket, VLResponseHeader, log);
          udpStreamWrite = write;
          udpStreamWrite(rawClientData);
          return;
        }
        handleTCPOutBound(
          remoteSocketWapper,
          addressRemote,
          portRemote,
          rawClientData,
          webSocket,
          VLResponseHeader,
          log
        );
      },
      close() {
        log(`readableWebSocketStream is close`);
      },
      abort(reason) {
        log(`readableWebSocketStream is abort`, JSON.stringify(reason));
      }
    })
  ).catch((err) => {
    log("readableWebSocketStream pipeTo error", err);
  });
  return new Response(null, {
    status: 101,
    // @ts-ignore
    webSocket: client2
  });
}
async function handleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, VLResponseHeader, log) {
  async function connectAndWrite(address, port) {
    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(address)) address = `${atob("d3d3Lg==")}${address}${atob("LnNzbGlwLmlv")}`;
    const tcpSocket2 = connect({
      hostname: address,
      port
    });
    remoteSocket.value = tcpSocket2;
    log(`connected to ${address}:${port}`);
    const writer = tcpSocket2.writable.getWriter();
    await writer.write(rawClientData);
    writer.releaseLock();
    return tcpSocket2;
  }
  async function retry() {
    const panelProxyIP = globalThis.pathName.split("/")[2];
    const panelProxyIPs = panelProxyIP ? atob(panelProxyIP).split(",") : void 0;
    const finalProxyIP = panelProxyIPs ? panelProxyIPs[Math.floor(Math.random() * panelProxyIPs.length)] : globalThis.proxyIP || addressRemote;
    const tcpSocket2 = await connectAndWrite(finalProxyIP, portRemote);
    tcpSocket2.closed.catch((error) => {
      console.log("retry tcpSocket closed error", error);
    }).finally(() => {
      safeCloseWebSocket(webSocket);
    });
    VLRemoteSocketToWS(tcpSocket2, webSocket, VLResponseHeader, null, log);
  }
  const tcpSocket = await connectAndWrite(addressRemote, portRemote);
  VLRemoteSocketToWS(tcpSocket, webSocket, VLResponseHeader, retry, log);
}
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
  let readableStreamCancel = false;
  const stream = new ReadableStream({
    start(controller) {
      webSocketServer.addEventListener("message", (event) => {
        if (readableStreamCancel) {
          return;
        }
        const message2 = event.data;
        controller.enqueue(message2);
      });
      webSocketServer.addEventListener("close", () => {
        safeCloseWebSocket(webSocketServer);
        if (readableStreamCancel) {
          return;
        }
        controller.close();
      });
      webSocketServer.addEventListener("error", (err) => {
        log("webSocketServer has error");
        controller.error(err);
      });
      const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
      if (error) {
        controller.error(error);
      } else if (earlyData) {
        controller.enqueue(earlyData);
      }
    },
    pull(controller) {
    },
    cancel(reason) {
      if (readableStreamCancel) {
        return;
      }
      log(`ReadableStream was canceled, due to ${reason}`);
      readableStreamCancel = true;
      safeCloseWebSocket(webSocketServer);
    }
  });
  return stream;
}
async function processVLHeader(VLBuffer, userID2) {
  if (VLBuffer.byteLength < 24) {
    return {
      hasError: true,
      message: "invalid data"
    };
  }
  const version = new Uint8Array(VLBuffer.slice(0, 1));
  let isValidUser = false;
  let isUDP = false;
  const slicedBuffer = new Uint8Array(VLBuffer.slice(1, 17));
  const slicedBufferString = stringify(slicedBuffer);
  const uuids = userID2.includes(",") ? userID2.split(",") : [userID2];
  isValidUser = uuids.some((userUuid) => slicedBufferString === userUuid.trim());
  if (!isValidUser) {
    return {
      hasError: true,
      message: "invalid user"
    };
  }
  const optLength = new Uint8Array(VLBuffer.slice(17, 18))[0];
  const command = new Uint8Array(VLBuffer.slice(18 + optLength, 18 + optLength + 1))[0];
  if (command === 1) {
  } else if (command === 2) {
    isUDP = true;
  } else {
    return {
      hasError: true,
      message: `command ${command} is not support, command 01-tcp,02-udp,03-mux`
    };
  }
  const portIndex = 18 + optLength + 1;
  const portBuffer = VLBuffer.slice(portIndex, portIndex + 2);
  const portRemote = new DataView(portBuffer).getUint16(0);
  let addressIndex = portIndex + 2;
  const addressBuffer = new Uint8Array(VLBuffer.slice(addressIndex, addressIndex + 1));
  const addressType = addressBuffer[0];
  let addressLength = 0;
  let addressValueIndex = addressIndex + 1;
  let addressValue = "";
  switch (addressType) {
    case 1:
      addressLength = 4;
      addressValue = new Uint8Array(VLBuffer.slice(addressValueIndex, addressValueIndex + addressLength)).join(".");
      break;
    case 2:
      addressLength = new Uint8Array(VLBuffer.slice(addressValueIndex, addressValueIndex + 1))[0];
      addressValueIndex += 1;
      addressValue = new TextDecoder().decode(VLBuffer.slice(addressValueIndex, addressValueIndex + addressLength));
      break;
    case 3:
      addressLength = 16;
      const dataView = new DataView(VLBuffer.slice(addressValueIndex, addressValueIndex + addressLength));
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        ipv6.push(dataView.getUint16(i * 2).toString(16));
      }
      addressValue = ipv6.join(":");
      break;
    default:
      return {
        hasError: true,
        message: `invild  addressType is ${addressType}`
      };
  }
  if (!addressValue) {
    return {
      hasError: true,
      message: `addressValue is empty, addressType is ${addressType}`
    };
  }
  return {
    hasError: false,
    addressRemote: addressValue,
    addressType,
    portRemote,
    rawDataIndex: addressValueIndex + addressLength,
    VLVersion: version,
    isUDP
  };
}
async function VLRemoteSocketToWS(remoteSocket, webSocket, VLResponseHeader, retry, log) {
  let remoteChunkCount = 0;
  let chunks = [];
  let VLHeader = VLResponseHeader;
  let hasIncomingData = false;
  await remoteSocket.readable.pipeTo(
    new WritableStream({
      start() {
      },
      
      async write(chunk, controller) {
        hasIncomingData = true;
        if (webSocket.readyState !== WS_READY_STATE_OPEN) {
          controller.error("webSocket.readyState is not open, maybe close");
        }
        if (VLHeader) {
          webSocket.send(await new Blob([VLHeader, chunk]).arrayBuffer());
          VLHeader = null;
        } else {
          webSocket.send(chunk);
        }
      },
      close() {
        log(`remoteConnection!.readable is close with hasIncomingData is ${hasIncomingData}`);
      },
      abort(reason) {
        console.error(`remoteConnection!.readable abort`, reason);
      }
    })
  ).catch((error) => {
    console.error(`VLRemoteSocketToWS has exception `, error.stack || error);
    safeCloseWebSocket(webSocket);
  });
  if (hasIncomingData === false && retry) {
    log(`retry`);
    retry();
  }
}
function base64ToArrayBuffer(base64Str) {
  if (!base64Str) {
    return { earlyData: null, error: null };
  }
  try {
    base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
    const decode2 = atob(base64Str);
    const arryBuffer = Uint8Array.from(decode2, (c) => c.charCodeAt(0));
    return { earlyData: arryBuffer.buffer, error: null };
  } catch (error) {
    return { earlyData: null, error };
  }
}
var WS_READY_STATE_OPEN = 1;
var WS_READY_STATE_CLOSING = 2;
function safeCloseWebSocket(socket) {
  try {
    if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
      socket.close();
    }
  } catch (error) {
    console.error("safeCloseWebSocket error", error);
  }
}
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset);
  if (!isValidUUID(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
async function handleUDPOutBound(webSocket, VLResponseHeader, log) {
  let isVLHeaderSent = false;
  const transformStream = new TransformStream({
    start(controller) {
    },
    transform(chunk, controller) {
      for (let index = 0; index < chunk.byteLength; ) {
        const lengthBuffer = chunk.slice(index, index + 2);
        const udpPakcetLength = new DataView(lengthBuffer).getUint16(0);
        const udpData = new Uint8Array(chunk.slice(index + 2, index + 2 + udpPakcetLength));
        index = index + 2 + udpPakcetLength;
        controller.enqueue(udpData);
      }
    },
    flush(controller) {
    }
  });
  transformStream.readable.pipeTo(
    new WritableStream({
      async write(chunk) {
        const resp = await fetch(
          globalThis.dohURL,
          // dns server url
          {
            method: "POST",
            headers: {
              "content-type": "application/dns-message"
            },
            body: chunk
          }
        );
        const dnsQueryResult = await resp.arrayBuffer();
        const udpSize = dnsQueryResult.byteLength;
        const udpSizeBuffer = new Uint8Array([udpSize >> 8 & 255, udpSize & 255]);
        if (webSocket.readyState === WS_READY_STATE_OPEN) {
          log(`doh success and dns message length is ${udpSize}`);
          if (isVLHeaderSent) {
            webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
          } else {
            webSocket.send(await new Blob([VLResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
            isVLHeaderSent = true;
          }
        }
      }
    })
  ).catch((error) => {
    log("dns udp has error" + error);
  });
  const writer = transformStream.writable.getWriter();
  return {
    
    write(chunk) {
      writer.write(chunk);
    }
  };
}

// src/protocols/trojan.js
var import_js_sha256 = __toESM(require_sha256(), 1);
import { connect as connect2 } from "cloudflare:sockets";
async function TROverWSHandler(request) {
  const webSocketPair = new WebSocketPair();
  const [client2, webSocket] = Object.values(webSocketPair);
  webSocket.accept();
  let address = "";
  let portWithRandomLog = "";
  const log = (info, event) => {
    console.log(`[${address}:${portWithRandomLog}] ${info}`, event || "");
  };
  const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
  const readableWebSocketStream = makeReadableWebSocketStream2(webSocket, earlyDataHeader, log);
  let remoteSocketWapper = {
    value: null
  };
  let udpStreamWrite = null;
  readableWebSocketStream.pipeTo(
    new WritableStream({
      async write(chunk, controller) {
        if (udpStreamWrite) {
          return udpStreamWrite(chunk);
        }
        if (remoteSocketWapper.value) {
          const writer = remoteSocketWapper.value.writable.getWriter();
          await writer.write(chunk);
          writer.releaseLock();
          return;
        }
        const {
          hasError,
          message: message2,
          portRemote = 443,
          addressRemote = "",
          rawClientData
        } = await parseTRHeader(chunk);
        address = addressRemote;
        portWithRandomLog = `${portRemote}--${Math.random()} tcp`;
        if (hasError) {
          throw new Error(message2);
          return;
        }
        handleTCPOutBound2(remoteSocketWapper, addressRemote, portRemote, rawClientData, webSocket, log);
      },
      close() {
        log(`readableWebSocketStream is closed`);
      },
      abort(reason) {
        log(`readableWebSocketStream is aborted`, JSON.stringify(reason));
      }
    })
  ).catch((err) => {
    log("readableWebSocketStream pipeTo error", err);
  });
  return new Response(null, {
    status: 101,
    // @ts-ignore
    webSocket: client2
  });
}
async function parseTRHeader(buffer) {
  if (buffer.byteLength < 56) {
    return {
      hasError: true,
      message: "invalid data"
    };
  }
  let crLfIndex = 56;
  if (new Uint8Array(buffer.slice(56, 57))[0] !== 13 || new Uint8Array(buffer.slice(57, 58))[0] !== 10) {
    return {
      hasError: true,
      message: "invalid header format (missing CR LF)"
    };
  }
  const password = new TextDecoder().decode(buffer.slice(0, crLfIndex));
  if (password !== (0, import_js_sha256.sha224)(globalThis.TRPassword)) {
    return {
      hasError: true,
      message: "invalid password"
    };
  }
  const socks5DataBuffer = buffer.slice(crLfIndex + 2);
  if (socks5DataBuffer.byteLength < 6) {
    return {
      hasError: true,
      message: "invalid SOCKS5 request data"
    };
  }
  const view = new DataView(socks5DataBuffer);
  const cmd = view.getUint8(0);
  if (cmd !== 1) {
    return {
      hasError: true,
      message: "unsupported command, only TCP (CONNECT) is allowed"
    };
  }
  const atype = view.getUint8(1);
  let addressLength = 0;
  let addressIndex = 2;
  let address = "";
  switch (atype) {
    case 1:
      addressLength = 4;
      address = new Uint8Array(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength)).join(".");
      break;
    case 3:
      addressLength = new Uint8Array(socks5DataBuffer.slice(addressIndex, addressIndex + 1))[0];
      addressIndex += 1;
      address = new TextDecoder().decode(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength));
      break;
    case 4:
      addressLength = 16;
      const dataView = new DataView(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength));
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        ipv6.push(dataView.getUint16(i * 2).toString(16));
      }
      address = ipv6.join(":");
      break;
    default:
      return {
        hasError: true,
        message: `invalid addressType is ${atype}`
      };
  }
  if (!address) {
    return {
      hasError: true,
      message: `address is empty, addressType is ${atype}`
    };
  }
  const portIndex = addressIndex + addressLength;
  const portBuffer = socks5DataBuffer.slice(portIndex, portIndex + 2);
  const portRemote = new DataView(portBuffer).getUint16(0);
  return {
    hasError: false,
    addressRemote: address,
    portRemote,
    rawClientData: socks5DataBuffer.slice(portIndex + 4)
  };
}
async function handleTCPOutBound2(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, log) {
  async function connectAndWrite(address, port) {
    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(address)) address = `${atob("d3d3Lg==")}${address}${atob("LnNzbGlwLmlv")}`;
    const tcpSocket2 = connect2({
      hostname: address,
      port
    });
    remoteSocket.value = tcpSocket2;
    log(`connected to ${address}:${port}`);
    const writer = tcpSocket2.writable.getWriter();
    await writer.write(rawClientData);
    writer.releaseLock();
    return tcpSocket2;
  }
  async function retry() {
    const panelProxyIP = globalThis.pathName.split("/")[2];
    const panelProxyIPs = panelProxyIP ? atob(panelProxyIP).split(",") : void 0;
    const finalProxyIP = panelProxyIPs ? panelProxyIPs[Math.floor(Math.random() * panelProxyIPs.length)] : globalThis.proxyIP || addressRemote;
    const tcpSocket2 = await connectAndWrite(finalProxyIP, portRemote);
    tcpSocket2.closed.catch((error) => {
      console.log("retry tcpSocket closed error", error);
    }).finally(() => {
      safeCloseWebSocket2(webSocket);
    });
    TRRemoteSocketToWS(tcpSocket2, webSocket, null, log);
  }
  const tcpSocket = await connectAndWrite(addressRemote, portRemote);
  TRRemoteSocketToWS(tcpSocket, webSocket, retry, log);
}
function makeReadableWebSocketStream2(webSocketServer, earlyDataHeader, log) {
  let readableStreamCancel = false;
  const stream = new ReadableStream({
    start(controller) {
      webSocketServer.addEventListener("message", (event) => {
        if (readableStreamCancel) {
          return;
        }
        const message2 = event.data;
        controller.enqueue(message2);
      });
      webSocketServer.addEventListener("close", () => {
        safeCloseWebSocket2(webSocketServer);
        if (readableStreamCancel) {
          return;
        }
        controller.close();
      });
      webSocketServer.addEventListener("error", (err) => {
        log("webSocketServer has error");
        controller.error(err);
      });
      const { earlyData, error } = base64ToArrayBuffer2(earlyDataHeader);
      if (error) {
        controller.error(error);
      } else if (earlyData) {
        controller.enqueue(earlyData);
      }
    },
    pull(controller) {
    },
    cancel(reason) {
      if (readableStreamCancel) {
        return;
      }
      log(`ReadableStream was canceled, due to ${reason}`);
      readableStreamCancel = true;
      safeCloseWebSocket2(webSocketServer);
    }
  });
  return stream;
}
async function TRRemoteSocketToWS(remoteSocket, webSocket, retry, log) {
  let hasIncomingData = false;
  await remoteSocket.readable.pipeTo(
    new WritableStream({
      start() {
      },
      
      async write(chunk, controller) {
        hasIncomingData = true;
        if (webSocket.readyState !== WS_READY_STATE_OPEN2) {
          controller.error("webSocket connection is not open");
        }
        webSocket.send(chunk);
      },
      close() {
        log(`remoteSocket.readable is closed, hasIncomingData: ${hasIncomingData}`);
      },
      abort(reason) {
        console.error("remoteSocket.readable abort", reason);
      }
    })
  ).catch((error) => {
    console.error(`trojanRemoteSocketToWS error:`, error.stack || error);
    safeCloseWebSocket2(webSocket);
  });
  if (hasIncomingData === false && retry) {
    log(`retry`);
    retry();
  }
}
function base64ToArrayBuffer2(base64Str) {
  if (!base64Str) {
    return { earlyData: null, error: null };
  }
  try {
    base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
    const decode2 = atob(base64Str);
    const arryBuffer = Uint8Array.from(decode2, (c) => c.charCodeAt(0));
    return { earlyData: arryBuffer.buffer, error: null };
  } catch (error) {
    return { earlyData: null, error };
  }
}
var WS_READY_STATE_OPEN2 = 1;
var WS_READY_STATE_CLOSING2 = 2;
function safeCloseWebSocket2(socket) {
  try {
    if (socket.readyState === WS_READY_STATE_OPEN2 || socket.readyState === WS_READY_STATE_CLOSING2) {
      socket.close();
    }
  } catch (error) {
    console.error("safeCloseWebSocket error", error);
  }
}

// src/worker.js
var worker_default = {
  async fetch(request, env) {
    try {
      initializeParams(request, env);
      const { pathName: pathName2 } = globalThis;
      const upgradeHeader = request.headers.get("Upgrade");
      if (!upgradeHeader || upgradeHeader !== "websocket") {
        if (pathName2.startsWith("/panel")) return await handlePanel(request, env);
        if (pathName2.startsWith("/sub")) return await handleSubscriptions(request, env);
        if (pathName2.startsWith("/login")) return await handleLogin(request, env);
        if (pathName2.startsWith("/logout")) return await logout(request, env);
        if (pathName2.startsWith("/error")) return await renderError();
        if (pathName2.startsWith("/secrets")) return await renderSecrets();
        if (pathName2.startsWith("/favicon.ico")) return await serveIcon();
        return await fallback(request);
      } else {
        return pathName2.startsWith("/tr") ? await TROverWSHandler(request) : await VLOverWSHandler(request);
      }
    } catch (error) {
      return Response.redirect(`${globalThis.urlOrigin}/error?error=${error.toString()}`, 302);
    }
  }
};
export {
  worker_default as default
};

