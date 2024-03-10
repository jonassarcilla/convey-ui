function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      './syntaxhighlighter-B5GMVT5T-JaV9nIQr.js',
      './iframe-Wx6sLx1V.js',
      './index-CBqU2yxZ.js',
      './_commonjsHelpers-BosuxZz1.js',
      './index-BtM5VmRH.js',
      './index-Bw8VTzHM.js',
      './index-Cmc67Rxs.js',
      './index-DrFu-skq.js',
      './formatter-SWP5E3XI-CzpOOY9j.js',
      './WithTooltip-V3YHNWJZ-DxMpGr6g.js',
      './Color-6VNJS4EI-BNJ_cObI.js',
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import { _ as Zt } from './iframe-Wx6sLx1V.js';
import { r as b, a as Il, R as o } from './index-CBqU2yxZ.js';
import { g as Ln, c as sa } from './_commonjsHelpers-BosuxZz1.js';
import { r as Cs, R as U0 } from './index-BtM5VmRH.js';
import { L as ks, O as W0 } from './index-Bw8VTzHM.js';
import {
  q as _s,
  r as G0,
  s as Os,
  t as Y0,
  i as Mn,
  v as K0,
  w as X0,
  x as J0,
  c as Ts,
  y as Rs,
  z as Q0,
  A as Fs,
  B as e1,
  C as t1,
  D as r1,
  E as n1,
  F as a1,
  G as o1,
  H as $s,
  I as l1,
  J as i1,
  K as Ds,
  _ as s1,
  L as u1,
  M as c1,
  N as _o,
  d as Ls,
  O as Ms,
  P as Bs,
  Q as d1,
  R as p1,
  U as f1,
  e as m1,
  S as Pl,
  V as Ha,
  k as ua,
} from './index-Cmc67Rxs.js';
import { d as Ee } from './index-DrFu-skq.js';
var Ze = (e) => `control-${e.replace(/\s+/g, '-')}`,
  Bn = (e) => `set-${e.replace(/\s+/g, '-')}`;
const { global: g1 } = __STORYBOOK_MODULE_GLOBAL__,
  { logger: h1 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var b1 = Object.create,
  Is = Object.defineProperty,
  y1 = Object.getOwnPropertyDescriptor,
  Ps = Object.getOwnPropertyNames,
  v1 = Object.getPrototypeOf,
  E1 = Object.prototype.hasOwnProperty,
  Oo = (e, t) =>
    function () {
      return t || (0, e[Ps(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  x1 = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let a of Ps(t))
        !E1.call(e, a) &&
          a !== r &&
          Is(e, a, {
            get: () => t[a],
            enumerable: !(n = y1(t, a)) || n.enumerable,
          });
    return e;
  },
  js = (e, t, r) => (
    (r = e != null ? b1(v1(e)) : {}),
    x1(
      t || !e || !e.__esModule
        ? Is(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  );
function tr() {
  return (
    (tr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    tr.apply(this, arguments)
  );
}
function w1(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Rr(e, t) {
  return (
    (Rr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Rr(e, t)
  );
}
function A1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Rr(e, t);
}
function Za(e) {
  return (
    (Za = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Za(e)
  );
}
function S1(e) {
  try {
    return Function.toString.call(e).indexOf('[native code]') !== -1;
  } catch {
    return typeof e == 'function';
  }
}
function C1() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function fn(e, t, r) {
  return (
    C1()
      ? (fn = Reflect.construct.bind())
      : (fn = function (n, a, l) {
          var i = [null];
          i.push.apply(i, a);
          var u = Function.bind.apply(n, i),
            s = new u();
          return l && Rr(s, l.prototype), s;
        }),
    fn.apply(null, arguments)
  );
}
function Va(e) {
  var t = typeof Map == 'function' ? new Map() : void 0;
  return (
    (Va = function (r) {
      if (r === null || !S1(r)) return r;
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      if (typeof t < 'u') {
        if (t.has(r)) return t.get(r);
        t.set(r, n);
      }
      function n() {
        return fn(r, arguments, Za(this).constructor);
      }
      return (
        (n.prototype = Object.create(r.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Rr(n, r)
      );
    }),
    Va(e)
  );
}
var k1 = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: 'expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
  22: 'expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`,
};
function _1() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0],
    a = [],
    l;
  for (l = 1; l < t.length; l += 1) a.push(t[l]);
  return (
    a.forEach(function (i) {
      n = n.replace(/%[a-z]/, i);
    }),
    n
  );
}
var rt = (function (e) {
  A1(t, e);
  function t(r) {
    for (
      var n, a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), i = 1;
      i < a;
      i++
    )
      l[i - 1] = arguments[i];
    return (
      (n = e.call(this, _1.apply(void 0, [k1[r]].concat(l))) || this), w1(n)
    );
  }
  return t;
})(Va(Error));
function ca(e) {
  return Math.round(e * 255);
}
function O1(e, t, r) {
  return ca(e) + ',' + ca(t) + ',' + ca(r);
}
function Fr(e, t, r, n) {
  if ((n === void 0 && (n = O1), t === 0)) return n(r, r, r);
  var a = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((a % 2) - 1)),
    u = 0,
    s = 0,
    c = 0;
  a >= 0 && a < 1
    ? ((u = l), (s = i))
    : a >= 1 && a < 2
      ? ((u = i), (s = l))
      : a >= 2 && a < 3
        ? ((s = l), (c = i))
        : a >= 3 && a < 4
          ? ((s = i), (c = l))
          : a >= 4 && a < 5
            ? ((u = i), (c = l))
            : a >= 5 && a < 6 && ((u = l), (c = i));
  var d = r - l / 2,
    f = u + d,
    m = s + d,
    p = c + d;
  return n(f, m, p);
}
var jl = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',
};
function T1(e) {
  if (typeof e != 'string') return e;
  var t = e.toLowerCase();
  return jl[t] ? '#' + jl[t] : e;
}
var R1 = /^#[a-fA-F0-9]{6}$/,
  F1 = /^#[a-fA-F0-9]{8}$/,
  $1 = /^#[a-fA-F0-9]{3}$/,
  D1 = /^#[a-fA-F0-9]{4}$/,
  da = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  L1 =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  M1 =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  B1 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function In(e) {
  if (typeof e != 'string') throw new rt(3);
  var t = T1(e);
  if (t.match(R1))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
    };
  if (t.match(F1)) {
    var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match($1))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
    };
  if (t.match(D1)) {
    var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
      alpha: n,
    };
  }
  var a = da.exec(t);
  if (a)
    return {
      red: parseInt('' + a[1], 10),
      green: parseInt('' + a[2], 10),
      blue: parseInt('' + a[3], 10),
    };
  var l = L1.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt('' + l[1], 10),
      green: parseInt('' + l[2], 10),
      blue: parseInt('' + l[3], 10),
      alpha:
        parseFloat('' + l[4]) > 1
          ? parseFloat('' + l[4]) / 100
          : parseFloat('' + l[4]),
    };
  var i = M1.exec(t);
  if (i) {
    var u = parseInt('' + i[1], 10),
      s = parseInt('' + i[2], 10) / 100,
      c = parseInt('' + i[3], 10) / 100,
      d = 'rgb(' + Fr(u, s, c) + ')',
      f = da.exec(d);
    if (!f) throw new rt(4, t, d);
    return {
      red: parseInt('' + f[1], 10),
      green: parseInt('' + f[2], 10),
      blue: parseInt('' + f[3], 10),
    };
  }
  var m = B1.exec(t.substring(0, 50));
  if (m) {
    var p = parseInt('' + m[1], 10),
      h = parseInt('' + m[2], 10) / 100,
      g = parseInt('' + m[3], 10) / 100,
      w = 'rgb(' + Fr(p, h, g) + ')',
      x = da.exec(w);
    if (!x) throw new rt(4, t, w);
    return {
      red: parseInt('' + x[1], 10),
      green: parseInt('' + x[2], 10),
      blue: parseInt('' + x[3], 10),
      alpha:
        parseFloat('' + m[4]) > 1
          ? parseFloat('' + m[4]) / 100
          : parseFloat('' + m[4]),
    };
  }
  throw new rt(5);
}
function I1(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    a = Math.max(t, r, n),
    l = Math.min(t, r, n),
    i = (a + l) / 2;
  if (a === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i };
  var u,
    s = a - l,
    c = i > 0.5 ? s / (2 - a - l) : s / (a + l);
  switch (a) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      u = (n - t) / s + 2;
      break;
    default:
      u = (t - r) / s + 4;
      break;
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? { hue: u, saturation: c, lightness: i, alpha: e.alpha }
      : { hue: u, saturation: c, lightness: i }
  );
}
function Ns(e) {
  return I1(In(e));
}
var P1 = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
      ? '#' + e[1] + e[3] + e[5]
      : e;
  },
  za = P1;
function $t(e) {
  var t = e.toString(16);
  return t.length === 1 ? '0' + t : t;
}
function pa(e) {
  return $t(Math.round(e * 255));
}
function j1(e, t, r) {
  return za('#' + pa(e) + pa(t) + pa(r));
}
function Sn(e, t, r) {
  return Fr(e, t, r, j1);
}
function N1(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return Sn(e, t, r);
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return Sn(e.hue, e.saturation, e.lightness);
  throw new rt(1);
}
function H1(e, t, r, n) {
  if (
    typeof e == 'number' &&
    typeof t == 'number' &&
    typeof r == 'number' &&
    typeof n == 'number'
  )
    return n >= 1 ? Sn(e, t, r) : 'rgba(' + Fr(e, t, r) + ',' + n + ')';
  if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? Sn(e.hue, e.saturation, e.lightness)
      : 'rgba(' + Fr(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')';
  throw new rt(2);
}
function qa(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return za('#' + $t(e) + $t(t) + $t(r));
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return za('#' + $t(e.red) + $t(e.green) + $t(e.blue));
  throw new rt(6);
}
function $r(e, t, r, n) {
  if (typeof e == 'string' && typeof t == 'number') {
    var a = In(e);
    return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')';
  } else {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1
        ? qa(e, t, r)
        : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')';
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? qa(e.red, e.green, e.blue)
        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')';
  }
  throw new rt(7);
}
var Z1 = function (e) {
    return (
      typeof e.red == 'number' &&
      typeof e.green == 'number' &&
      typeof e.blue == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    );
  },
  V1 = function (e) {
    return (
      typeof e.red == 'number' &&
      typeof e.green == 'number' &&
      typeof e.blue == 'number' &&
      typeof e.alpha == 'number'
    );
  },
  z1 = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    );
  },
  q1 = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      typeof e.alpha == 'number'
    );
  };
function Hs(e) {
  if (typeof e != 'object') throw new rt(8);
  if (V1(e)) return $r(e);
  if (Z1(e)) return qa(e);
  if (q1(e)) return H1(e);
  if (z1(e)) return N1(e);
  throw new rt(8);
}
function Zs(e, t, r) {
  return function () {
    var n = r.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : Zs(e, t, n);
  };
}
function Pn(e) {
  return Zs(e, e.length, []);
}
function jn(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function U1(e, t) {
  if (t === 'transparent') return t;
  var r = Ns(t);
  return Hs(tr({}, r, { lightness: jn(0, 1, r.lightness - parseFloat(e)) }));
}
var W1 = Pn(U1),
  G1 = W1;
function Y1(e, t) {
  if (t === 'transparent') return t;
  var r = Ns(t);
  return Hs(tr({}, r, { lightness: jn(0, 1, r.lightness + parseFloat(e)) }));
}
var K1 = Pn(Y1),
  X1 = K1;
function J1(e, t) {
  if (t === 'transparent') return t;
  var r = In(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    a = tr({}, r, { alpha: jn(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
  return $r(a);
}
var Q1 = Pn(J1),
  ed = Q1;
function td(e, t) {
  if (t === 'transparent') return t;
  var r = In(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    a = tr({}, r, {
      alpha: jn(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return $r(a);
}
var rd = Pn(td),
  nd = rd,
  j = {
    primary: '#FF4785',
    secondary: '#029CFD',
    tertiary: '#FAFBFC',
    ancillary: '#22a699',
    orange: '#FC521F',
    gold: '#FFAE00',
    green: '#66BF3C',
    seafoam: '#37D5D3',
    purple: '#6F2CAC',
    ultraviolet: '#2A0481',
    lightest: '#FFFFFF',
    lighter: '#F7FAFC',
    light: '#EEF3F6',
    mediumlight: '#ECF4F9',
    medium: '#D9E8F2',
    mediumdark: '#73828C',
    dark: '#5C6870',
    darker: '#454E54',
    darkest: '#2E3438',
    border: 'hsla(203, 50%, 30%, 0.15)',
    positive: '#66BF3C',
    negative: '#FF4400',
    warning: '#E69D00',
    critical: '#FFFFFF',
    defaultText: '#2E3438',
    inverseText: '#FFFFFF',
    positiveText: '#448028',
    negativeText: '#D43900',
    warningText: '#A15C20',
  },
  xt = {
    app: '#F6F9FC',
    bar: j.lightest,
    content: j.lightest,
    preview: j.lightest,
    gridCellSize: 10,
    hoverable: nd(0.9, j.secondary),
    positive: '#E1FFD4',
    negative: '#FEDED2',
    warning: '#FFF5CF',
    critical: '#FF4400',
  },
  nt = {
    fonts: {
      base: [
        '"Nunito Sans"',
        '-apple-system',
        '".SFNSText-Regular"',
        '"San Francisco"',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(', '),
      mono: [
        'ui-monospace',
        'Menlo',
        'Monaco',
        '"Roboto Mono"',
        '"Oxygen Mono"',
        '"Ubuntu Monospace"',
        '"Source Code Pro"',
        '"Droid Sans Mono"',
        '"Courier New"',
        'monospace',
      ].join(', '),
    },
    weight: { regular: 400, bold: 700 },
    size: {
      s1: 12,
      s2: 14,
      s3: 16,
      m1: 20,
      m2: 24,
      m3: 28,
      l1: 32,
      l2: 40,
      l3: 48,
      code: 90,
    },
  },
  ad = {
    base: 'light',
    colorPrimary: '#FF4785',
    colorSecondary: '#029CFD',
    appBg: xt.app,
    appContentBg: j.lightest,
    appPreviewBg: j.lightest,
    appBorderColor: j.border,
    appBorderRadius: 4,
    fontBase: nt.fonts.base,
    fontCode: nt.fonts.mono,
    textColor: j.darkest,
    textInverseColor: j.lightest,
    textMutedColor: j.dark,
    barTextColor: j.mediumdark,
    barHoverColor: j.secondary,
    barSelectedColor: j.secondary,
    barBg: j.lightest,
    buttonBg: xt.app,
    buttonBorder: j.medium,
    booleanBg: j.mediumlight,
    booleanSelectedBg: j.lightest,
    inputBg: j.lightest,
    inputBorder: j.border,
    inputTextColor: j.darkest,
    inputBorderRadius: 4,
  },
  Cn = ad,
  od = {
    base: 'dark',
    colorPrimary: '#FF4785',
    colorSecondary: '#029CFD',
    appBg: '#222425',
    appContentBg: '#1B1C1D',
    appPreviewBg: j.lightest,
    appBorderColor: 'rgba(255,255,255,.1)',
    appBorderRadius: 4,
    fontBase: nt.fonts.base,
    fontCode: nt.fonts.mono,
    textColor: '#C9CDCF',
    textInverseColor: '#222425',
    textMutedColor: '#798186',
    barTextColor: '#798186',
    barHoverColor: j.secondary,
    barSelectedColor: j.secondary,
    barBg: '#292C2E',
    buttonBg: '#222425',
    buttonBorder: 'rgba(255,255,255,.1)',
    booleanBg: '#222425',
    booleanSelectedBg: '#2E3438',
    inputBg: '#1B1C1D',
    inputBorder: 'rgba(255,255,255,.1)',
    inputTextColor: j.lightest,
    inputBorderRadius: 4,
  },
  ld = od,
  { window: fa } = g1,
  id = (e) => ({ color: e }),
  sd = (e) =>
    typeof e != 'string'
      ? (h1.warn(
          `Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`
        ),
        !1)
      : !0,
  ud = (e) => !/(gradient|var|calc)/.test(e),
  cd = (e, t) =>
    e === 'darken'
      ? $r(`${G1(1, t)}`, 0.95)
      : e === 'lighten'
        ? $r(`${X1(1, t)}`, 0.95)
        : t,
  dd = (e) => (t) => {
    if (!sd(t) || !ud(t)) return t;
    try {
      return cd(e, t);
    } catch {
      return t;
    }
  },
  _r = dd('lighten'),
  Vs = () =>
    !fa || !fa.matchMedia
      ? 'light'
      : fa.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
  Ua = { light: Cn, dark: ld, normal: Cn };
Vs();
var pd = function (t) {
    return t();
  },
  zs = Il.useInsertionEffect ? Il.useInsertionEffect : !1,
  To = zs || pd,
  Nl = zs || b.useLayoutEffect;
function nn(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var qs = { exports: {} };
(function (e, t) {
  (function (r) {
    e.exports = r();
  })(function () {
    return (function r(n, a, l) {
      function i(c, d) {
        if (!a[c]) {
          if (!n[c]) {
            var f = typeof nn == 'function' && nn;
            if (!d && f) return f(c, !0);
            if (u) return u(c, !0);
            var m = new Error("Cannot find module '" + c + "'");
            throw ((m.code = 'MODULE_NOT_FOUND'), m);
          }
          var p = (a[c] = { exports: {} });
          n[c][0].call(
            p.exports,
            function (h) {
              var g = n[c][1][h];
              return i(g || h);
            },
            p,
            p.exports,
            r,
            n,
            a,
            l
          );
        }
        return a[c].exports;
      }
      for (var u = typeof nn == 'function' && nn, s = 0; s < l.length; s++)
        i(l[s]);
      return i;
    })(
      {
        1: [
          function (r, n, a) {
            n.exports = function (l) {
              if (typeof Map != 'function' || l) {
                var i = r('./similar');
                return new i();
              } else return new Map();
            };
          },
          { './similar': 2 },
        ],
        2: [
          function (r, n, a) {
            function l() {
              return (
                (this.list = []),
                (this.lastItem = void 0),
                (this.size = 0),
                this
              );
            }
            (l.prototype.get = function (i) {
              var u;
              if (this.lastItem && this.isEqual(this.lastItem.key, i))
                return this.lastItem.val;
              if (((u = this.indexOf(i)), u >= 0))
                return (this.lastItem = this.list[u]), this.list[u].val;
            }),
              (l.prototype.set = function (i, u) {
                var s;
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? ((this.lastItem.val = u), this)
                  : ((s = this.indexOf(i)),
                    s >= 0
                      ? ((this.lastItem = this.list[s]),
                        (this.list[s].val = u),
                        this)
                      : ((this.lastItem = { key: i, val: u }),
                        this.list.push(this.lastItem),
                        this.size++,
                        this));
              }),
              (l.prototype.delete = function (i) {
                var u;
                if (
                  (this.lastItem &&
                    this.isEqual(this.lastItem.key, i) &&
                    (this.lastItem = void 0),
                  (u = this.indexOf(i)),
                  u >= 0)
                )
                  return this.size--, this.list.splice(u, 1)[0];
              }),
              (l.prototype.has = function (i) {
                var u;
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? !0
                  : ((u = this.indexOf(i)),
                    u >= 0 ? ((this.lastItem = this.list[u]), !0) : !1);
              }),
              (l.prototype.forEach = function (i, u) {
                var s;
                for (s = 0; s < this.size; s++)
                  i.call(u || this, this.list[s].val, this.list[s].key, this);
              }),
              (l.prototype.indexOf = function (i) {
                var u;
                for (u = 0; u < this.size; u++)
                  if (this.isEqual(this.list[u].key, i)) return u;
                return -1;
              }),
              (l.prototype.isEqual = function (i, u) {
                return i === u || (i !== i && u !== u);
              }),
              (n.exports = l);
          },
          {},
        ],
        3: [
          function (r, n, a) {
            var l = r('map-or-similar');
            n.exports = function (c) {
              var d = new l(!1),
                f = [];
              return function (m) {
                var p = function () {
                  var h = d,
                    g,
                    w,
                    x = arguments.length - 1,
                    v = Array(x + 1),
                    y = !0,
                    E;
                  if ((p.numArgs || p.numArgs === 0) && p.numArgs !== x + 1)
                    throw new Error(
                      'Memoizerific functions should always be called with the same number of arguments'
                    );
                  for (E = 0; E < x; E++) {
                    if (
                      ((v[E] = { cacheItem: h, arg: arguments[E] }),
                      h.has(arguments[E]))
                    ) {
                      h = h.get(arguments[E]);
                      continue;
                    }
                    (y = !1), (g = new l(!1)), h.set(arguments[E], g), (h = g);
                  }
                  return (
                    y &&
                      (h.has(arguments[x])
                        ? (w = h.get(arguments[x]))
                        : (y = !1)),
                    y ||
                      ((w = m.apply(null, arguments)), h.set(arguments[x], w)),
                    c > 0 &&
                      ((v[x] = { cacheItem: h, arg: arguments[x] }),
                      y ? i(f, v) : f.push(v),
                      f.length > c && u(f.shift())),
                    (p.wasMemoized = y),
                    (p.numArgs = x + 1),
                    w
                  );
                };
                return (
                  (p.limit = c),
                  (p.wasMemoized = !1),
                  (p.cache = d),
                  (p.lru = f),
                  p
                );
              };
            };
            function i(c, d) {
              var f = c.length,
                m = d.length,
                p,
                h,
                g;
              for (h = 0; h < f; h++) {
                for (p = !0, g = 0; g < m; g++)
                  if (!s(c[h][g].arg, d[g].arg)) {
                    p = !1;
                    break;
                  }
                if (p) break;
              }
              c.push(c.splice(h, 1)[0]);
            }
            function u(c) {
              var d = c.length,
                f = c[d - 1],
                m,
                p;
              for (
                f.cacheItem.delete(f.arg), p = d - 2;
                p >= 0 &&
                ((f = c[p]), (m = f.cacheItem.get(f.arg)), !m || !m.size);
                p--
              )
                f.cacheItem.delete(f.arg);
            }
            function s(c, d) {
              return c === d || (c !== c && d !== d);
            }
          },
          { 'map-or-similar': 1 },
        ],
      },
      {},
      [3]
    )(3);
  });
})(qs);
var fd = qs.exports;
const zt = Ln(fd),
  { logger: md } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var gd = Oo({
    '../../node_modules/react-is/cjs/react-is.development.js'(e) {
      (function () {
        var t = typeof Symbol == 'function' && Symbol.for,
          r = t ? Symbol.for('react.element') : 60103,
          n = t ? Symbol.for('react.portal') : 60106,
          a = t ? Symbol.for('react.fragment') : 60107,
          l = t ? Symbol.for('react.strict_mode') : 60108,
          i = t ? Symbol.for('react.profiler') : 60114,
          u = t ? Symbol.for('react.provider') : 60109,
          s = t ? Symbol.for('react.context') : 60110,
          c = t ? Symbol.for('react.async_mode') : 60111,
          d = t ? Symbol.for('react.concurrent_mode') : 60111,
          f = t ? Symbol.for('react.forward_ref') : 60112,
          m = t ? Symbol.for('react.suspense') : 60113,
          p = t ? Symbol.for('react.suspense_list') : 60120,
          h = t ? Symbol.for('react.memo') : 60115,
          g = t ? Symbol.for('react.lazy') : 60116,
          w = t ? Symbol.for('react.block') : 60121,
          x = t ? Symbol.for('react.fundamental') : 60117,
          v = t ? Symbol.for('react.responder') : 60118,
          y = t ? Symbol.for('react.scope') : 60119;
        function E(M) {
          return (
            typeof M == 'string' ||
            typeof M == 'function' ||
            M === a ||
            M === d ||
            M === i ||
            M === l ||
            M === m ||
            M === p ||
            (typeof M == 'object' &&
              M !== null &&
              (M.$$typeof === g ||
                M.$$typeof === h ||
                M.$$typeof === u ||
                M.$$typeof === s ||
                M.$$typeof === f ||
                M.$$typeof === x ||
                M.$$typeof === v ||
                M.$$typeof === y ||
                M.$$typeof === w))
          );
        }
        function A(M) {
          if (typeof M == 'object' && M !== null) {
            var je = M.$$typeof;
            switch (je) {
              case r:
                var ze = M.type;
                switch (ze) {
                  case c:
                  case d:
                  case a:
                  case i:
                  case l:
                  case m:
                    return ze;
                  default:
                    var Ot = ze && ze.$$typeof;
                    switch (Ot) {
                      case s:
                      case f:
                      case g:
                      case h:
                      case u:
                        return Ot;
                      default:
                        return je;
                    }
                }
              case n:
                return je;
            }
          }
        }
        var S = c,
          C = d,
          k = s,
          O = u,
          T = r,
          R = f,
          F = a,
          $ = g,
          P = h,
          D = n,
          L = i,
          N = l,
          V = m,
          B = !1;
        function H(M) {
          return (
            B ||
              ((B = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
              )),
            Y(M) || A(M) === c
          );
        }
        function Y(M) {
          return A(M) === d;
        }
        function te(M) {
          return A(M) === s;
        }
        function G(M) {
          return A(M) === u;
        }
        function K(M) {
          return typeof M == 'object' && M !== null && M.$$typeof === r;
        }
        function I(M) {
          return A(M) === f;
        }
        function z(M) {
          return A(M) === a;
        }
        function q(M) {
          return A(M) === g;
        }
        function ie(M) {
          return A(M) === h;
        }
        function he(M) {
          return A(M) === n;
        }
        function ut(M) {
          return A(M) === i;
        }
        function Fe(M) {
          return A(M) === l;
        }
        function Ve(M) {
          return A(M) === m;
        }
        (e.AsyncMode = S),
          (e.ConcurrentMode = C),
          (e.ContextConsumer = k),
          (e.ContextProvider = O),
          (e.Element = T),
          (e.ForwardRef = R),
          (e.Fragment = F),
          (e.Lazy = $),
          (e.Memo = P),
          (e.Portal = D),
          (e.Profiler = L),
          (e.StrictMode = N),
          (e.Suspense = V),
          (e.isAsyncMode = H),
          (e.isConcurrentMode = Y),
          (e.isContextConsumer = te),
          (e.isContextProvider = G),
          (e.isElement = K),
          (e.isForwardRef = I),
          (e.isFragment = z),
          (e.isLazy = q),
          (e.isMemo = ie),
          (e.isPortal = he),
          (e.isProfiler = ut),
          (e.isStrictMode = Fe),
          (e.isSuspense = Ve),
          (e.isValidElementType = E),
          (e.typeOf = A);
      })();
    },
  }),
  hd = Oo({
    '../../node_modules/react-is/index.js'(e, t) {
      t.exports = gd();
    },
  }),
  Us = Oo({
    '../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'(
      e,
      t
    ) {
      var r = hd(),
        n = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        l = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        u = {};
      (u[r.ForwardRef] = l), (u[r.Memo] = i);
      function s(w) {
        return r.isMemo(w) ? i : u[w.$$typeof] || n;
      }
      var c = Object.defineProperty,
        d = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        m = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      function g(w, x, v) {
        if (typeof x != 'string') {
          if (h) {
            var y = p(x);
            y && y !== h && g(w, y, v);
          }
          var E = d(x);
          f && (E = E.concat(f(x)));
          for (var A = s(w), S = s(x), C = 0; C < E.length; ++C) {
            var k = E[C];
            if (!a[k] && !(v && v[k]) && !(S && S[k]) && !(A && A[k])) {
              var O = m(x, k);
              try {
                c(w, k, O);
              } catch {}
            }
          }
        }
        return w;
      }
      t.exports = g;
    },
  });
function Wa() {
  return (
    (Wa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Wa.apply(this, arguments)
  );
}
function Ws(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var bd =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Ro = Ws(function (e) {
    return (
      bd.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function yd(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function vd(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var Ed = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (a) {
        var l;
        n.tags.length === 0
          ? n.insertionPoint
            ? (l = n.insertionPoint.nextSibling)
            : n.prepend
              ? (l = n.container.firstChild)
              : (l = n.before)
          : (l = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(a, l),
          n.tags.push(a);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !1 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(vd(this));
        var n = this.tags[this.tags.length - 1],
          a = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
        if (
          (a &&
            this._alreadyInsertedOrderInsensitiveRule &&
            console.error(
              `You're attempting to insert the following rule:
` +
                r +
                '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.'
            ),
          (this._alreadyInsertedOrderInsensitiveRule =
            this._alreadyInsertedOrderInsensitiveRule || !a),
          this.isSpeedy)
        ) {
          var l = yd(n);
          try {
            l.insertRule(r, l.cssRules.length);
          } catch (i) {
            /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
              r
            ) ||
              console.error(
                'There was a problem inserting the following rule: "' + r + '"',
                i
              );
          }
        } else n.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0),
          (this._alreadyInsertedOrderInsensitiveRule = !1);
      }),
      e
    );
  })(),
  ge = '-ms-',
  kn = '-moz-',
  U = '-webkit-',
  Fo = 'comm',
  $o = 'rule',
  Do = 'decl',
  xd = '@import',
  Gs = '@keyframes',
  wd = '@layer',
  Ad = Math.abs,
  Nn = String.fromCharCode,
  Sd = Object.assign;
function Cd(e, t) {
  return ce(e, 0) ^ 45
    ? (((((((t << 2) ^ ce(e, 0)) << 2) ^ ce(e, 1)) << 2) ^ ce(e, 2)) << 2) ^
        ce(e, 3)
    : 0;
}
function Ys(e) {
  return e.trim();
}
function kd(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function W(e, t, r) {
  return e.replace(t, r);
}
function Ga(e, t) {
  return e.indexOf(t);
}
function ce(e, t) {
  return e.charCodeAt(t) | 0;
}
function Dr(e, t, r) {
  return e.slice(t, r);
}
function Je(e) {
  return e.length;
}
function Lo(e) {
  return e.length;
}
function an(e, t) {
  return t.push(e), e;
}
function _d(e, t) {
  return e.map(t).join('');
}
var Hn = 1,
  rr = 1,
  Ks = 0,
  Ae = 0,
  ne = 0,
  pr = '';
function Zn(e, t, r, n, a, l, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: a,
    children: l,
    line: Hn,
    column: rr,
    length: i,
    return: '',
  };
}
function wr(e, t) {
  return Sd(Zn('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function Od() {
  return ne;
}
function Td() {
  return (
    (ne = Ae > 0 ? ce(pr, --Ae) : 0), rr--, ne === 10 && ((rr = 1), Hn--), ne
  );
}
function ke() {
  return (
    (ne = Ae < Ks ? ce(pr, Ae++) : 0), rr++, ne === 10 && ((rr = 1), Hn++), ne
  );
}
function lt() {
  return ce(pr, Ae);
}
function mn() {
  return Ae;
}
function Ur(e, t) {
  return Dr(pr, e, t);
}
function Lr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Xs(e) {
  return (Hn = rr = 1), (Ks = Je((pr = e))), (Ae = 0), [];
}
function Js(e) {
  return (pr = ''), e;
}
function gn(e) {
  return Ys(Ur(Ae - 1, Ya(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Rd(e) {
  for (; (ne = lt()) && ne < 33; ) ke();
  return Lr(e) > 2 || Lr(ne) > 3 ? '' : ' ';
}
function Fd(e, t) {
  for (
    ;
    --t &&
    ke() &&
    !(ne < 48 || ne > 102 || (ne > 57 && ne < 65) || (ne > 70 && ne < 97));

  );
  return Ur(e, mn() + (t < 6 && lt() == 32 && ke() == 32));
}
function Ya(e) {
  for (; ke(); )
    switch (ne) {
      case e:
        return Ae;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ya(ne);
        break;
      case 40:
        e === 41 && Ya(e);
        break;
      case 92:
        ke();
        break;
    }
  return Ae;
}
function $d(e, t) {
  for (; ke() && e + ne !== 57 && !(e + ne === 84 && lt() === 47); );
  return '/*' + Ur(t, Ae - 1) + '*' + Nn(e === 47 ? e : ke());
}
function Dd(e) {
  for (; !Lr(lt()); ) ke();
  return Ur(e, Ae);
}
function Ld(e) {
  return Js(hn('', null, null, null, [''], (e = Xs(e)), 0, [0], e));
}
function hn(e, t, r, n, a, l, i, u, s) {
  for (
    var c = 0,
      d = 0,
      f = i,
      m = 0,
      p = 0,
      h = 0,
      g = 1,
      w = 1,
      x = 1,
      v = 0,
      y = '',
      E = a,
      A = l,
      S = n,
      C = y;
    w;

  )
    switch (((h = v), (v = ke()))) {
      case 40:
        if (h != 108 && ce(C, f - 1) == 58) {
          Ga((C += W(gn(v), '&', '&\f')), '&\f') != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += gn(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Rd(h);
        break;
      case 92:
        C += Fd(mn() - 1, 7);
        continue;
      case 47:
        switch (lt()) {
          case 42:
          case 47:
            an(Md($d(ke(), mn()), t, r), s);
            break;
          default:
            C += '/';
        }
        break;
      case 123 * g:
        u[c++] = Je(C) * x;
      case 125 * g:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            w = 0;
          case 59 + d:
            x == -1 && (C = W(C, /\f/g, '')),
              p > 0 &&
                Je(C) - f &&
                an(
                  p > 32
                    ? Zl(C + ';', n, r, f - 1)
                    : Zl(W(C, ' ', '') + ';', n, r, f - 2),
                  s
                );
            break;
          case 59:
            C += ';';
          default:
            if (
              (an((S = Hl(C, t, r, c, d, a, u, y, (E = []), (A = []), f)), l),
              v === 123)
            )
              if (d === 0) hn(C, t, S, S, E, l, f, u, A);
              else
                switch (m === 99 && ce(C, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    hn(
                      e,
                      S,
                      S,
                      n && an(Hl(e, S, S, 0, 0, a, u, y, a, (E = []), f), A),
                      a,
                      A,
                      f,
                      u,
                      n ? E : A
                    );
                    break;
                  default:
                    hn(C, S, S, S, [''], A, 0, u, A);
                }
        }
        (c = d = p = 0), (g = x = 1), (y = C = ''), (f = i);
        break;
      case 58:
        (f = 1 + Je(C)), (p = h);
      default:
        if (g < 1) {
          if (v == 123) --g;
          else if (v == 125 && g++ == 0 && Td() == 125) continue;
        }
        switch (((C += Nn(v)), v * g)) {
          case 38:
            x = d > 0 ? 1 : ((C += '\f'), -1);
            break;
          case 44:
            (u[c++] = (Je(C) - 1) * x), (x = 1);
            break;
          case 64:
            lt() === 45 && (C += gn(ke())),
              (m = lt()),
              (d = f = Je((y = C += Dd(mn())))),
              v++;
            break;
          case 45:
            h === 45 && Je(C) == 2 && (g = 0);
        }
    }
  return l;
}
function Hl(e, t, r, n, a, l, i, u, s, c, d) {
  for (
    var f = a - 1, m = a === 0 ? l : [''], p = Lo(m), h = 0, g = 0, w = 0;
    h < n;
    ++h
  )
    for (var x = 0, v = Dr(e, f + 1, (f = Ad((g = i[h])))), y = e; x < p; ++x)
      (y = Ys(g > 0 ? m[x] + ' ' + v : W(v, /&\f/g, m[x]))) && (s[w++] = y);
  return Zn(e, t, r, a === 0 ? $o : u, s, c, d);
}
function Md(e, t, r) {
  return Zn(e, t, r, Fo, Nn(Od()), Dr(e, 2, -2), 0);
}
function Zl(e, t, r, n) {
  return Zn(e, t, r, Do, Dr(e, 0, n), Dr(e, n + 1, -1), n);
}
function er(e, t) {
  for (var r = '', n = Lo(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || '';
  return r;
}
function Bd(e, t, r, n) {
  switch (e.type) {
    case wd:
      if (e.children.length) break;
    case xd:
    case Do:
      return (e.return = e.return || e.value);
    case Fo:
      return '';
    case Gs:
      return (e.return = e.value + '{' + er(e.children, n) + '}');
    case $o:
      e.value = e.props.join(',');
  }
  return Je((r = er(e.children, n)))
    ? (e.return = e.value + '{' + r + '}')
    : '';
}
function Id(e) {
  var t = Lo(e);
  return function (r, n, a, l) {
    for (var i = '', u = 0; u < t; u++) i += e[u](r, n, a, l) || '';
    return i;
  };
}
var Vl = function (e) {
    var t = new WeakMap();
    return function (r) {
      if (t.has(r)) return t.get(r);
      var n = e(r);
      return t.set(r, n), n;
    };
  },
  Pd = function (e, t, r) {
    for (
      var n = 0, a = 0;
      (n = a), (a = lt()), n === 38 && a === 12 && (t[r] = 1), !Lr(a);

    )
      ke();
    return Ur(e, Ae);
  },
  jd = function (e, t) {
    var r = -1,
      n = 44;
    do
      switch (Lr(n)) {
        case 0:
          n === 38 && lt() === 12 && (t[r] = 1), (e[r] += Pd(Ae - 1, t, r));
          break;
        case 2:
          e[r] += gn(n);
          break;
        case 4:
          if (n === 44) {
            (e[++r] = lt() === 58 ? '&\f' : ''), (t[r] = e[r].length);
            break;
          }
        default:
          e[r] += Nn(n);
      }
    while ((n = ke()));
    return e;
  },
  Nd = function (e, t) {
    return Js(jd(Xs(e), t));
  },
  zl = new WeakMap(),
  Hd = function (e) {
    if (!(e.type !== 'rule' || !e.parent || e.length < 1)) {
      for (
        var t = e.value,
          r = e.parent,
          n = e.column === r.column && e.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return;
      if (
        !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !zl.get(r)) &&
        !n
      ) {
        zl.set(e, !0);
        for (
          var a = [], l = Nd(t, a), i = r.props, u = 0, s = 0;
          u < l.length;
          u++
        )
          for (var c = 0; c < i.length; c++, s++)
            e.props[s] = a[u] ? l[u].replace(/&\f/g, i[c]) : i[c] + ' ' + l[u];
      }
    }
  },
  Zd = function (e) {
    if (e.type === 'decl') {
      var t = e.value;
      t.charCodeAt(0) === 108 &&
        t.charCodeAt(2) === 98 &&
        ((e.return = ''), (e.value = ''));
    }
  },
  Vd =
    'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason',
  zd = function (e) {
    return e.type === 'comm' && e.children.indexOf(Vd) > -1;
  },
  qd = function (e) {
    return function (t, r, n) {
      if (!(t.type !== 'rule' || e.compat)) {
        var a = t.value.match(/(:first|:nth|:nth-last)-child/g);
        if (a) {
          for (
            var l = !!t.parent, i = l ? t.parent.children : n, u = i.length - 1;
            u >= 0;
            u--
          ) {
            var s = i[u];
            if (s.line < t.line) break;
            if (s.column < t.column) {
              if (zd(s)) return;
              break;
            }
          }
          a.forEach(function (c) {
            console.error(
              'The pseudo class "' +
                c +
                '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                c.split('-child')[0] +
                '-of-type".'
            );
          });
        }
      }
    };
  },
  Qs = function (e) {
    return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
  },
  Ud = function (e, t) {
    for (var r = e - 1; r >= 0; r--) if (!Qs(t[r])) return !0;
    return !1;
  },
  ql = function (e) {
    (e.type = ''),
      (e.value = ''),
      (e.return = ''),
      (e.children = ''),
      (e.props = '');
  },
  Wd = function (e, t, r) {
    Qs(e) &&
      (e.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
          ),
          ql(e))
        : Ud(t, r) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
          ),
          ql(e)));
  };
function eu(e, t) {
  switch (Cd(e, t)) {
    case 5103:
      return U + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return U + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return U + e + kn + e + ge + e + e;
    case 6828:
    case 4268:
      return U + e + ge + e + e;
    case 6165:
      return U + e + ge + 'flex-' + e + e;
    case 5187:
      return (
        U + e + W(e, /(\w+).+(:[^]+)/, U + 'box-$1$2' + ge + 'flex-$1$2') + e
      );
    case 5443:
      return U + e + ge + 'flex-item-' + W(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        U +
        e +
        ge +
        'flex-line-pack' +
        W(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return U + e + ge + W(e, 'shrink', 'negative') + e;
    case 5292:
      return U + e + ge + W(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        U +
        'box-' +
        W(e, '-grow', '') +
        U +
        e +
        ge +
        W(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return U + W(e, /([^-])(transform)/g, '$1' + U + '$2') + e;
    case 6187:
      return (
        W(W(W(e, /(zoom-|grab)/, U + '$1'), /(image-set)/, U + '$1'), e, '') + e
      );
    case 5495:
    case 3959:
      return W(e, /(image-set\([^]*)/, U + '$1$`$1');
    case 4968:
      return (
        W(
          W(e, /(.+:)(flex-)?(.*)/, U + 'box-pack:$3' + ge + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        U +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(e, /(.+)-inline(.+)/, U + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Je(e) - 1 - t > 6)
        switch (ce(e, t + 1)) {
          case 109:
            if (ce(e, t + 4) !== 45) break;
          case 102:
            return (
              W(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  U +
                  '$2-$3$1' +
                  kn +
                  (ce(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~Ga(e, 'stretch')
              ? eu(W(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (ce(e, t + 1) !== 115) break;
    case 6444:
      switch (ce(e, Je(e) - 3 - (~Ga(e, '!important') && 10))) {
        case 107:
          return W(e, ':', ':' + U) + e;
        case 101:
          return (
            W(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                U +
                (ce(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                U +
                '$2$3$1' +
                ge +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (ce(e, t + 11)) {
        case 114:
          return U + e + ge + W(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return U + e + ge + W(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return U + e + ge + W(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return U + e + ge + e + e;
  }
  return e;
}
var Gd = function (e, t, r, n) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case Do:
          e.return = eu(e.value, e.length);
          break;
        case Gs:
          return er([wr(e, { value: W(e.value, '@', '@' + U) })], n);
        case $o:
          if (e.length)
            return _d(e.props, function (a) {
              switch (kd(a, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return er(
                    [wr(e, { props: [W(a, /:(read-\w+)/, ':' + kn + '$1')] })],
                    n
                  );
                case '::placeholder':
                  return er(
                    [
                      wr(e, {
                        props: [W(a, /:(plac\w+)/, ':' + U + 'input-$1')],
                      }),
                      wr(e, { props: [W(a, /:(plac\w+)/, ':' + kn + '$1')] }),
                      wr(e, { props: [W(a, /:(plac\w+)/, ge + 'input-$1')] }),
                    ],
                    n
                  );
              }
              return '';
            });
      }
  },
  Yd = [Gd],
  Kd = function (e) {
    var t = e.key;
    if (!t)
      throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
    if (t === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (h) {
        var g = h.getAttribute('data-emotion');
        g.indexOf(' ') !== -1 &&
          (document.head.appendChild(h), h.setAttribute('data-s', ''));
      });
    }
    var n = e.stylisPlugins || Yd;
    if (/[^a-z-]/.test(t))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' +
          t +
          '" was passed'
      );
    var a = {},
      l,
      i = [];
    (l = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
        function (h) {
          for (
            var g = h.getAttribute('data-emotion').split(' '), w = 1;
            w < g.length;
            w++
          )
            a[g[w]] = !0;
          i.push(h);
        }
      );
    var u,
      s = [Hd, Zd];
    s.push(
      qd({
        get compat() {
          return p.compat;
        },
      }),
      Wd
    );
    {
      var c,
        d = [
          Bd,
          function (h) {
            h.root ||
              (h.return
                ? c.insert(h.return)
                : h.value && h.type !== Fo && c.insert(h.value + '{}'));
          },
        ],
        f = Id(s.concat(n, d)),
        m = function (h) {
          return er(Ld(h), f);
        };
      u = function (h, g, w, x) {
        (c = w),
          g.map !== void 0 &&
            (c = {
              insert: function (v) {
                w.insert(v + g.map);
              },
            }),
          m(h ? h + '{' + g.styles + '}' : g.styles),
          x && (p.inserted[g.name] = !0);
      };
    }
    var p = {
      key: t,
      sheet: new Ed({
        key: t,
        container: l,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint,
      }),
      nonce: e.nonce,
      inserted: a,
      registered: {},
      insert: u,
    };
    return p.sheet.hydrate(i), p;
  };
function Ka() {
  return (
    (Ka = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ka.apply(this, arguments)
  );
}
js(Us());
var Xd = !0;
function Mo(e, t, r) {
  var n = '';
  return (
    r.split(' ').forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ';') : (n += a + ' ');
    }),
    n
  );
}
var Vn = function (e, t, r) {
    var n = e.key + '-' + t.name;
    (r === !1 || Xd === !1) &&
      e.registered[n] === void 0 &&
      (e.registered[n] = t.styles);
  },
  zn = function (e, t, r) {
    Vn(e, t, r);
    var n = e.key + '-' + t.name;
    if (e.inserted[t.name] === void 0) {
      var a = t;
      do e.insert(t === a ? '.' + n : '', a, e.sheet, !0), (a = a.next);
      while (a !== void 0);
    }
  };
function Jd(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Qd = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Ul = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  ep =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  tp = /[A-Z]|^ms/g,
  tu = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Bo = function (e) {
    return e.charCodeAt(1) === 45;
  },
  Wl = function (e) {
    return e != null && typeof e != 'boolean';
  },
  ma = Ws(function (e) {
    return Bo(e) ? e : e.replace(tp, '-$&').toLowerCase();
  }),
  _n = function (e, t) {
    switch (e) {
      case 'animation':
      case 'animationName':
        if (typeof t == 'string')
          return t.replace(tu, function (r, n, a) {
            return (Qe = { name: n, styles: a, next: Qe }), n;
          });
    }
    return Qd[e] !== 1 && !Bo(e) && typeof t == 'number' && t !== 0
      ? t + 'px'
      : t;
  };
(Gl =
  /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/),
  (Yl = ['normal', 'none', 'initial', 'inherit', 'unset']),
  (Kl = _n),
  (Xl = /^-ms-/),
  (Jl = /-(.)/g),
  (ga = {}),
  (_n = function (e, t) {
    if (
      e === 'content' &&
      (typeof t != 'string' ||
        (Yl.indexOf(t) === -1 &&
          !Gl.test(t) &&
          (t.charAt(0) !== t.charAt(t.length - 1) ||
            (t.charAt(0) !== '"' && t.charAt(0) !== "'"))))
    )
      throw new Error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
          t +
          '"\'`'
      );
    var r = Kl(e, t);
    return (
      r !== '' &&
        !Bo(e) &&
        e.indexOf('-') !== -1 &&
        ga[e] === void 0 &&
        ((ga[e] = !0),
        console.error(
          'Using kebab-case for css properties in objects is not supported. Did you mean ' +
            e.replace(Xl, 'ms-').replace(Jl, function (n, a) {
              return a.toUpperCase();
            }) +
            '?'
        )),
      r
    );
  });
var Gl,
  Yl,
  Kl,
  Xl,
  Jl,
  ga,
  ru =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
function Mr(e, t, r) {
  if (r == null) return '';
  if (r.__emotion_styles !== void 0) {
    if (r.toString() === 'NO_COMPONENT_SELECTOR') throw new Error(ru);
    return r;
  }
  switch (typeof r) {
    case 'boolean':
      return '';
    case 'object': {
      if (r.anim === 1)
        return (Qe = { name: r.name, styles: r.styles, next: Qe }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (Qe = { name: n.name, styles: n.styles, next: Qe }), (n = n.next);
        var a = r.styles + ';';
        return r.map !== void 0 && (a += r.map), a;
      }
      return rp(e, t, r);
    }
    case 'function': {
      if (e !== void 0) {
        var l = Qe,
          i = r(e);
        return (Qe = l), Mr(e, t, i);
      } else
        console.error(
          "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
        );
      break;
    }
    case 'string':
      var u = [],
        s = r.replace(tu, function (d, f, m) {
          var p = 'animation' + u.length;
          return (
            u.push(
              'const ' +
                p +
                ' = keyframes`' +
                m.replace(/^@keyframes animation-\w+/, '') +
                '`'
            ),
            '${' + p + '}'
          );
        });
      u.length &&
        console.error(
          '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
            [].concat(u, ['`' + s + '`']).join(`
`) +
            `

You should wrap it with \`css\` like this:

` +
            ('css`' + s + '`')
        );
      break;
  }
  if (t == null) return r;
  var c = t[r];
  return c !== void 0 ? c : r;
}
function rp(e, t, r) {
  var n = '';
  if (Array.isArray(r))
    for (var a = 0; a < r.length; a++) n += Mr(e, t, r[a]) + ';';
  else
    for (var l in r) {
      var i = r[l];
      if (typeof i != 'object')
        t != null && t[i] !== void 0
          ? (n += l + '{' + t[i] + '}')
          : Wl(i) && (n += ma(l) + ':' + _n(l, i) + ';');
      else {
        if (l === 'NO_COMPONENT_SELECTOR') throw new Error(ru);
        if (
          Array.isArray(i) &&
          typeof i[0] == 'string' &&
          (t == null || t[i[0]] === void 0)
        )
          for (var u = 0; u < i.length; u++)
            Wl(i[u]) && (n += ma(l) + ':' + _n(l, i[u]) + ';');
        else {
          var s = Mr(e, t, i);
          switch (l) {
            case 'animation':
            case 'animationName': {
              n += ma(l) + ':' + s + ';';
              break;
            }
            default:
              l === 'undefined' && console.error(ep), (n += l + '{' + s + '}');
          }
        }
      }
    }
  return n;
}
var Ql = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  nu;
nu = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var Qe,
  nr = function (e, t, r) {
    if (
      e.length === 1 &&
      typeof e[0] == 'object' &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var n = !0,
      a = '';
    Qe = void 0;
    var l = e[0];
    l == null || l.raw === void 0
      ? ((n = !1), (a += Mr(r, t, l)))
      : (l[0] === void 0 && console.error(Ul), (a += l[0]));
    for (var i = 1; i < e.length; i++)
      (a += Mr(r, t, e[i])),
        n && (l[i] === void 0 && console.error(Ul), (a += l[i]));
    var u;
    (a = a.replace(nu, function (f) {
      return (u = f), '';
    })),
      (Ql.lastIndex = 0);
    for (var s = '', c; (c = Ql.exec(a)) !== null; ) s += '-' + c[1];
    var d = Jd(a) + s;
    return {
      name: d,
      styles: a,
      map: u,
      next: Qe,
      toString: function () {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      },
    };
  },
  np = {}.hasOwnProperty,
  Io = b.createContext(typeof HTMLElement < 'u' ? Kd({ key: 'css' }) : null);
Io.displayName = 'EmotionCacheContext';
Io.Provider;
var qn = function (e) {
    return b.forwardRef(function (t, r) {
      var n = b.useContext(Io);
      return e(t, n, r);
    });
  },
  St = b.createContext({});
St.displayName = 'EmotionThemeContext';
var ap = function () {
    return b.useContext(St);
  },
  op = function (e, t) {
    if (typeof t == 'function') {
      var r = t(e);
      if (r == null || typeof r != 'object' || Array.isArray(r))
        throw new Error(
          '[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!'
        );
      return r;
    }
    if (t == null || typeof t != 'object' || Array.isArray(t))
      throw new Error(
        '[ThemeProvider] Please make your theme prop a plain object'
      );
    return Ka({}, e, t);
  },
  lp = Vl(function (e) {
    return Vl(function (t) {
      return op(e, t);
    });
  }),
  au = function (e) {
    var t = b.useContext(St);
    return (
      e.theme !== t && (t = lp(t)(e.theme)),
      b.createElement(St.Provider, { value: t }, e.children)
    );
  },
  ei = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  ti = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__',
  ip = function (e) {
    var t = e.cache,
      r = e.serialized,
      n = e.isStringTag;
    return (
      Vn(t, r, n),
      To(function () {
        return zn(t, r, n);
      }),
      null
    );
  },
  sp = qn(function (e, t, r) {
    var n = e.css;
    typeof n == 'string' && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[ei],
      l = [n],
      i = '';
    typeof e.className == 'string'
      ? (i = Mo(t.registered, l, e.className))
      : e.className != null && (i = e.className + ' ');
    var u = nr(l, void 0, b.useContext(St));
    if (u.name.indexOf('-') === -1) {
      var s = e[ti];
      s && (u = nr([u, 'label:' + s + ';']));
    }
    i += t.key + '-' + u.name;
    var c = {};
    for (var d in e)
      np.call(e, d) && d !== 'css' && d !== ei && d !== ti && (c[d] = e[d]);
    return (
      (c.ref = r),
      (c.className = i),
      b.createElement(
        b.Fragment,
        null,
        b.createElement(ip, {
          cache: t,
          serialized: u,
          isStringTag: typeof a == 'string',
        }),
        b.createElement(a, c)
      )
    );
  });
sp.displayName = 'EmotionCssPropInternal';
js(Us());
var up = {
    name: '@emotion/react',
    version: '11.11.1',
    main: 'dist/emotion-react.cjs.js',
    module: 'dist/emotion-react.esm.js',
    browser: {
      './dist/emotion-react.esm.js': './dist/emotion-react.browser.esm.js',
    },
    exports: {
      '.': {
        module: {
          worker: './dist/emotion-react.worker.esm.js',
          browser: './dist/emotion-react.browser.esm.js',
          default: './dist/emotion-react.esm.js',
        },
        import: './dist/emotion-react.cjs.mjs',
        default: './dist/emotion-react.cjs.js',
      },
      './jsx-runtime': {
        module: {
          worker: './jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js',
          browser:
            './jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js',
          default: './jsx-runtime/dist/emotion-react-jsx-runtime.esm.js',
        },
        import: './jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs',
        default: './jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js',
      },
      './_isolated-hnrs': {
        module: {
          worker:
            './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js',
          browser:
            './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js',
          default: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js',
        },
        import: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs',
        default: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js',
      },
      './jsx-dev-runtime': {
        module: {
          worker:
            './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js',
          browser:
            './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js',
          default:
            './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js',
        },
        import: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs',
        default: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js',
      },
      './package.json': './package.json',
      './types/css-prop': './types/css-prop.d.ts',
      './macro': {
        types: { import: './macro.d.mts', default: './macro.d.ts' },
        default: './macro.js',
      },
    },
    types: 'types/index.d.ts',
    files: [
      'src',
      'dist',
      'jsx-runtime',
      'jsx-dev-runtime',
      '_isolated-hnrs',
      'types/*.d.ts',
      'macro.*',
    ],
    sideEffects: !1,
    author: 'Emotion Contributors',
    license: 'MIT',
    scripts: { 'test:typescript': 'dtslint types' },
    dependencies: {
      '@babel/runtime': '^7.18.3',
      '@emotion/babel-plugin': '^11.11.0',
      '@emotion/cache': '^11.11.0',
      '@emotion/serialize': '^1.1.2',
      '@emotion/use-insertion-effect-with-fallbacks': '^1.0.1',
      '@emotion/utils': '^1.2.1',
      '@emotion/weak-memoize': '^0.3.1',
      'hoist-non-react-statics': '^3.3.1',
    },
    peerDependencies: { react: '>=16.8.0' },
    peerDependenciesMeta: { '@types/react': { optional: !0 } },
    devDependencies: {
      '@definitelytyped/dtslint': '0.0.112',
      '@emotion/css': '11.11.0',
      '@emotion/css-prettifier': '1.1.3',
      '@emotion/server': '11.11.0',
      '@emotion/styled': '11.11.0',
      'html-tag-names': '^1.1.2',
      react: '16.14.0',
      'svg-tag-names': '^1.1.1',
      typescript: '^4.5.5',
    },
    repository:
      'https://github.com/emotion-js/emotion/tree/main/packages/react',
    publishConfig: { access: 'public' },
    'umd:main': 'dist/emotion-react.umd.min.js',
    preconstruct: {
      entrypoints: [
        './index.js',
        './jsx-runtime.js',
        './jsx-dev-runtime.js',
        './_isolated-hnrs.js',
      ],
      umdName: 'emotionReact',
      exports: {
        envConditions: ['browser', 'worker'],
        extra: {
          './types/css-prop': './types/css-prop.d.ts',
          './macro': {
            types: { import: './macro.d.mts', default: './macro.d.ts' },
            default: './macro.js',
          },
        },
      },
    },
  },
  ri = !1,
  cp = qn(function (e, t) {
    !ri &&
      (e.className || e.css) &&
      (console.error(
        "It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"
      ),
      (ri = !0));
    var r = e.styles,
      n = nr([r], void 0, b.useContext(St)),
      a = b.useRef();
    return (
      Nl(
        function () {
          var l = t.key + '-global',
            i = new t.sheet.constructor({
              key: l,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            u = !1,
            s = document.querySelector(
              'style[data-emotion="' + l + ' ' + n.name + '"]'
            );
          return (
            t.sheet.tags.length && (i.before = t.sheet.tags[0]),
            s !== null &&
              ((u = !0), s.setAttribute('data-emotion', l), i.hydrate([s])),
            (a.current = [i, u]),
            function () {
              i.flush();
            }
          );
        },
        [t]
      ),
      Nl(
        function () {
          var l = a.current,
            i = l[0],
            u = l[1];
          if (u) {
            l[1] = !1;
            return;
          }
          if ((n.next !== void 0 && zn(t, n.next, !0), i.tags.length)) {
            var s = i.tags[i.tags.length - 1].nextElementSibling;
            (i.before = s), i.flush();
          }
          t.insert('', n, i, !1);
        },
        [t, n.name]
      ),
      null
    );
  });
cp.displayName = 'EmotionGlobal';
function Po() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return nr(t);
}
var fr = function () {
    var e = Po.apply(void 0, arguments),
      t = 'animation-' + e.name;
    return {
      name: t,
      styles: '@keyframes ' + t + '{' + e.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  dp = function e(t) {
    for (var r = t.length, n = 0, a = ''; n < r; n++) {
      var l = t[n];
      if (l != null) {
        var i = void 0;
        switch (typeof l) {
          case 'boolean':
            break;
          case 'object': {
            if (Array.isArray(l)) i = e(l);
            else {
              l.styles !== void 0 &&
                l.name !== void 0 &&
                console.error(
                  'You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.'
                ),
                (i = '');
              for (var u in l) l[u] && u && (i && (i += ' '), (i += u));
            }
            break;
          }
          default:
            i = l;
        }
        i && (a && (a += ' '), (a += i));
      }
    }
    return a;
  };
function pp(e, t, r) {
  var n = [],
    a = Mo(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var fp = function (e) {
    var t = e.cache,
      r = e.serializedArr;
    return (
      To(function () {
        for (var n = 0; n < r.length; n++) zn(t, r[n], !1);
      }),
      null
    );
  },
  mp = qn(function (e, t) {
    var r = !1,
      n = [],
      a = function () {
        if (r) throw new Error('css can only be used during render');
        for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
          c[d] = arguments[d];
        var f = nr(c, t.registered);
        return n.push(f), Vn(t, f, !1), t.key + '-' + f.name;
      },
      l = function () {
        if (r) throw new Error('cx can only be used during render');
        for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
          c[d] = arguments[d];
        return pp(t.registered, a, dp(c));
      },
      i = { css: a, cx: l, theme: b.useContext(St) },
      u = e.children(i);
    return (
      (r = !0),
      b.createElement(
        b.Fragment,
        null,
        b.createElement(fp, { cache: t, serializedArr: n }),
        u
      )
    );
  });
mp.displayName = 'EmotionClassNames';
(ha = !0),
  (ni = typeof jest < 'u' || typeof vi < 'u'),
  ha &&
    !ni &&
    ((ba = typeof globalThis < 'u' ? globalThis : ha ? window : global),
    (ya = '__EMOTION_REACT_' + up.version.split('.')[0] + '__'),
    ba[ya] &&
      console.warn(
        'You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.'
      ),
    (ba[ya] = !0));
var ha,
  ni,
  ba,
  ya,
  gp = Ro,
  hp = function (e) {
    return e !== 'theme';
  },
  ai = function (e) {
    return typeof e == 'string' && e.charCodeAt(0) > 96 ? gp : hp;
  },
  oi = function (e, t, r) {
    var n;
    if (t) {
      var a = t.shouldForwardProp;
      n =
        e.__emotion_forwardProp && a
          ? function (l) {
              return e.__emotion_forwardProp(l) && a(l);
            }
          : a;
    }
    return typeof n != 'function' && r && (n = e.__emotion_forwardProp), n;
  },
  li = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  bp = function (e) {
    var t = e.cache,
      r = e.serialized,
      n = e.isStringTag;
    return (
      Vn(t, r, n),
      To(function () {
        return zn(t, r, n);
      }),
      null
    );
  },
  yp = function e(t, r) {
    if (t === void 0)
      throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
    var n = t.__emotion_real === t,
      a = (n && t.__emotion_base) || t,
      l,
      i;
    r !== void 0 && ((l = r.label), (i = r.target));
    var u = oi(t, r, n),
      s = u || ai(a),
      c = !s('as');
    return function () {
      var d = arguments,
        f =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (l !== void 0 && f.push('label:' + l + ';'),
        d[0] == null || d[0].raw === void 0)
      )
        f.push.apply(f, d);
      else {
        d[0][0] === void 0 && console.error(li), f.push(d[0][0]);
        for (var m = d.length, p = 1; p < m; p++)
          d[0][p] === void 0 && console.error(li), f.push(d[p], d[0][p]);
      }
      var h = qn(function (g, w, x) {
        var v = (c && g.as) || a,
          y = '',
          E = [],
          A = g;
        if (g.theme == null) {
          A = {};
          for (var S in g) A[S] = g[S];
          A.theme = b.useContext(St);
        }
        typeof g.className == 'string'
          ? (y = Mo(w.registered, E, g.className))
          : g.className != null && (y = g.className + ' ');
        var C = nr(f.concat(E), w.registered, A);
        (y += w.key + '-' + C.name), i !== void 0 && (y += ' ' + i);
        var k = c && u === void 0 ? ai(v) : s,
          O = {};
        for (var T in g) (c && T === 'as') || (k(T) && (O[T] = g[T]));
        return (
          (O.className = y),
          (O.ref = x),
          b.createElement(
            b.Fragment,
            null,
            b.createElement(bp, {
              cache: w,
              serialized: C,
              isStringTag: typeof v == 'string',
            }),
            b.createElement(v, O)
          )
        );
      });
      return (
        (h.displayName =
          l !== void 0
            ? l
            : 'Styled(' +
              (typeof a == 'string'
                ? a
                : a.displayName || a.name || 'Component') +
              ')'),
        (h.defaultProps = t.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = a),
        (h.__emotion_styles = f),
        (h.__emotion_forwardProp = u),
        Object.defineProperty(h, 'toString', {
          value: function () {
            return i === void 0 ? 'NO_COMPONENT_SELECTOR' : '.' + i;
          },
        }),
        (h.withComponent = function (g, w) {
          return e(g, Wa({}, r, w, { shouldForwardProp: oi(h, w, !0) })).apply(
            void 0,
            f
          );
        }),
        h
      );
    };
  },
  vp = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  _ = yp.bind();
vp.forEach(function (e) {
  _[e] = _(e);
});
var Ep = zt(1)(({ typography: e }) => ({
  body: {
    fontFamily: e.fonts.base,
    fontSize: e.size.s3,
    margin: 0,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitOverflowScrolling: 'touch',
  },
  '*': { boxSizing: 'border-box' },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: e.weight.regular,
    margin: 0,
    padding: 0,
  },
  'button, input, textarea, select': {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    boxSizing: 'border-box',
  },
  sub: { fontSize: '0.8em', bottom: '-0.2em' },
  sup: { fontSize: '0.8em', top: '-0.2em' },
  'b, strong': { fontWeight: e.weight.bold },
  hr: {
    border: 'none',
    borderTop: '1px solid silver',
    clear: 'both',
    marginBottom: '1.25rem',
  },
  code: {
    fontFamily: e.fonts.mono,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    display: 'inline-block',
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: 'baseline',
    color: 'inherit',
  },
  pre: {
    fontFamily: e.fonts.mono,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    lineHeight: '18px',
    padding: '11px 1rem',
    whiteSpace: 'pre-wrap',
    color: 'inherit',
    borderRadius: 3,
    margin: '1rem 0',
  },
}));
zt(1)(({ color: e, background: t, typography: r }) => {
  let n = Ep({ typography: r });
  return {
    ...n,
    body: {
      ...n.body,
      color: e.defaultText,
      background: t.app,
      overflow: 'hidden',
    },
    hr: { ...n.hr, borderTop: `1px solid ${e.border}` },
  };
});
var xp = { rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)' },
  wp = fr`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  ou = fr`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`,
  Ap = fr`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`,
  Sp = fr`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`,
  Cp = Po`
  animation: ${ou} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`,
  kp = Po`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`,
  _p = {
    rotate360: wp,
    glow: ou,
    float: Ap,
    jiggle: Sp,
    inlineGlow: Cp,
    hoverable: kp,
  },
  Op = {
    BASE_FONT_FAMILY: 'Menlo, monospace',
    BASE_FONT_SIZE: '11px',
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
    BASE_COLOR: 'rgb(213, 213, 213)',
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
    OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
    HTML_TAG_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
    HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
    HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
    HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
    HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
    ARROW_COLOR: 'rgb(145, 145, 145)',
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: '0',
    TREENODE_FONT_FAMILY: 'Menlo, monospace',
    TREENODE_FONT_SIZE: '11px',
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
    TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
    TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
    TABLE_SORT_ICON_COLOR: 'black',
    TABLE_DATA_BACKGROUND_IMAGE:
      'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
    TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
  },
  Tp = {
    BASE_FONT_FAMILY: 'Menlo, monospace',
    BASE_FONT_SIZE: '11px',
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: 'white',
    BASE_COLOR: 'black',
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
    OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
    OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
    OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
    OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
    HTML_TAG_COLOR: 'rgb(168, 148, 166)',
    HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
    HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
    HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
    HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
    HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
    HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
    ARROW_COLOR: '#6e6e6e',
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: '0',
    TREENODE_FONT_FAMILY: 'Menlo, monospace',
    TREENODE_FONT_SIZE: '11px',
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: '#aaa',
    TABLE_TH_BACKGROUND_COLOR: '#eee',
    TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
    TABLE_SORT_ICON_COLOR: '#6e6e6e',
    TABLE_DATA_BACKGROUND_IMAGE:
      'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
    TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
  },
  Rp = (e) =>
    Object.entries(e).reduce((t, [r, n]) => ({ ...t, [r]: id(n) }), {}),
  Fp = ({ colors: e, mono: t }) => {
    let r = Rp(e);
    return {
      token: {
        fontFamily: t,
        WebkitFontSmoothing: 'antialiased',
        '&.tag': r.red3,
        '&.comment': { ...r.green1, fontStyle: 'italic' },
        '&.prolog': { ...r.green1, fontStyle: 'italic' },
        '&.doctype': { ...r.green1, fontStyle: 'italic' },
        '&.cdata': { ...r.green1, fontStyle: 'italic' },
        '&.string': r.red1,
        '&.url': r.cyan1,
        '&.symbol': r.cyan1,
        '&.number': r.cyan1,
        '&.boolean': r.cyan1,
        '&.variable': r.cyan1,
        '&.constant': r.cyan1,
        '&.inserted': r.cyan1,
        '&.atrule': r.blue1,
        '&.keyword': r.blue1,
        '&.attr-value': r.blue1,
        '&.punctuation': r.gray1,
        '&.operator': r.gray1,
        '&.function': r.gray1,
        '&.deleted': r.red2,
        '&.important': { fontWeight: 'bold' },
        '&.bold': { fontWeight: 'bold' },
        '&.italic': { fontStyle: 'italic' },
        '&.class-name': r.cyan2,
        '&.selector': r.red3,
        '&.attr-name': r.red4,
        '&.property': r.red4,
        '&.regex': r.red4,
        '&.entity': r.red4,
        '&.directive.tag .tag': { background: '#ffff00', ...r.gray1 },
      },
      'language-json .token.boolean': r.blue1,
      'language-json .token.number': r.blue1,
      'language-json .token.property': r.cyan2,
      namespace: { opacity: 0.7 },
    };
  },
  $p = {
    green1: '#008000',
    red1: '#A31515',
    red2: '#9a050f',
    red3: '#800000',
    red4: '#ff0000',
    gray1: '#393A34',
    cyan1: '#36acaa',
    cyan2: '#2B91AF',
    blue1: '#0000ff',
    blue2: '#00009f',
  },
  Dp = {
    green1: '#7C7C7C',
    red1: '#92C379',
    red2: '#9a050f',
    red3: '#A8FF60',
    red4: '#96CBFE',
    gray1: '#EDEDED',
    cyan1: '#C6C5FE',
    cyan2: '#FFFFB6',
    blue1: '#B474DD',
    blue2: '#00009f',
  },
  Lp = (e) => ({
    primary: e.colorPrimary,
    secondary: e.colorSecondary,
    tertiary: j.tertiary,
    ancillary: j.ancillary,
    orange: j.orange,
    gold: j.gold,
    green: j.green,
    seafoam: j.seafoam,
    purple: j.purple,
    ultraviolet: j.ultraviolet,
    lightest: j.lightest,
    lighter: j.lighter,
    light: j.light,
    mediumlight: j.mediumlight,
    medium: j.medium,
    mediumdark: j.mediumdark,
    dark: j.dark,
    darker: j.darker,
    darkest: j.darkest,
    border: j.border,
    positive: j.positive,
    negative: j.negative,
    warning: j.warning,
    critical: j.critical,
    defaultText: e.textColor || j.darkest,
    inverseText: e.textInverseColor || j.lightest,
    positiveText: j.positiveText,
    negativeText: j.negativeText,
    warningText: j.warningText,
  }),
  Xa = (e = Ua[Vs()]) => {
    let {
      base: t,
      colorPrimary: r,
      colorSecondary: n,
      appBg: a,
      appContentBg: l,
      appPreviewBg: i,
      appBorderColor: u,
      appBorderRadius: s,
      fontBase: c,
      fontCode: d,
      textColor: f,
      textInverseColor: m,
      barTextColor: p,
      barHoverColor: h,
      barSelectedColor: g,
      barBg: w,
      buttonBg: x,
      buttonBorder: v,
      booleanBg: y,
      booleanSelectedBg: E,
      inputBg: A,
      inputBorder: S,
      inputTextColor: C,
      inputBorderRadius: k,
      brandTitle: O,
      brandUrl: T,
      brandImage: R,
      brandTarget: F,
      gridCellSize: $,
      ...P
    } = e;
    return {
      ...P,
      base: t,
      color: Lp(e),
      background: {
        app: a,
        bar: w,
        content: l,
        preview: i,
        gridCellSize: $ || xt.gridCellSize,
        hoverable: xt.hoverable,
        positive: xt.positive,
        negative: xt.negative,
        warning: xt.warning,
        critical: xt.critical,
      },
      typography: {
        fonts: { base: c, mono: d },
        weight: nt.weight,
        size: nt.size,
      },
      animation: _p,
      easing: xp,
      input: { background: A, border: S, borderRadius: k, color: C },
      button: { background: x || A, border: v || S },
      boolean: { background: y || S, selectedBackground: E || A },
      layoutMargin: 10,
      appBorderColor: u,
      appBorderRadius: s,
      barTextColor: p,
      barHoverColor: h || n,
      barSelectedColor: g || n,
      barBg: w,
      brand: { title: O, url: T, image: R || (O ? null : void 0), target: F },
      code: Fp({ colors: t === 'light' ? $p : Dp, mono: d }),
      addonActionsTheme: {
        ...(t === 'light' ? Tp : Op),
        BASE_FONT_FAMILY: d,
        BASE_FONT_SIZE: nt.size.s2 - 1,
        BASE_LINE_HEIGHT: '18px',
        BASE_BACKGROUND_COLOR: 'transparent',
        BASE_COLOR: f,
        ARROW_COLOR: ed(0.2, u),
        ARROW_MARGIN_RIGHT: 4,
        ARROW_FONT_SIZE: 8,
        TREENODE_FONT_FAMILY: d,
        TREENODE_FONT_SIZE: nt.size.s2 - 1,
        TREENODE_LINE_HEIGHT: '18px',
        TREENODE_PADDING_LEFT: 12,
      },
    };
  },
  Mp = (e) => Object.keys(e).length === 0,
  va = (e) => e != null && typeof e == 'object',
  Bp = (e, ...t) => Object.prototype.hasOwnProperty.call(e, ...t),
  Ip = () => Object.create(null),
  lu = (e, t) =>
    e === t || !va(e) || !va(t)
      ? {}
      : Object.keys(e).reduce((r, n) => {
          if (Bp(t, n)) {
            let a = lu(e[n], t[n]);
            return (va(a) && Mp(a)) || (r[n] = a), r;
          }
          return (r[n] = void 0), r;
        }, Ip()),
  Pp = lu;
function jp(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = Array.from(typeof e == 'string' ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '');
  var a = n.reduce(function (u, s) {
    var c = s.match(/\n([\t ]+|(?!\s).)/g);
    return c
      ? u.concat(
          c.map(function (d) {
            var f, m;
            return (m =
              (f = d.match(/[\t ]/g)) === null || f === void 0
                ? void 0
                : f.length) !== null && m !== void 0
              ? m
              : 0;
          })
        )
      : u;
  }, []);
  if (a.length) {
    var l = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, a) +
        '}',
      'g'
    );
    n = n.map(function (u) {
      return u.replace(
        l,
        `
`
      );
    });
  }
  n[0] = n[0].replace(/^\r?\n/, '');
  var i = n[0];
  return (
    t.forEach(function (u, s) {
      var c = i.match(/(?:^|\n)( *)$/),
        d = c ? c[1] : '',
        f = u;
      typeof u == 'string' &&
        u.includes(`
`) &&
        (f = String(u)
          .split(
            `
`
          )
          .map(function (m, p) {
            return p === 0 ? m : '' + d + m;
          }).join(`
`)),
        (i += f + n[s + 1]);
    }),
    i
  );
}
var Np = (e) => {
    if (!e) return Xa(Cn);
    let t = Pp(Cn, e);
    return (
      Object.keys(t).length &&
        md.warn(
          jp`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
          t
        ),
      Xa(e)
    );
  },
  Ja =
    '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */',
  Hp = Object.create,
  iu = Object.defineProperty,
  Zp = Object.getOwnPropertyDescriptor,
  su = Object.getOwnPropertyNames,
  Vp = Object.getPrototypeOf,
  zp = Object.prototype.hasOwnProperty,
  Z = (e, t) =>
    function () {
      return t || (0, e[su(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  qp = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let a of su(t))
        !zp.call(e, a) &&
          a !== r &&
          iu(e, a, {
            get: () => t[a],
            enumerable: !(n = Zp(t, a)) || n.enumerable,
          });
    return e;
  },
  Oe = (e, t, r) => (
    (r = e != null ? Hp(Vp(e)) : {}),
    qp(
      t || !e || !e.__esModule
        ? iu(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  Up = Z({
    '../../node_modules/refractor/lang/markdown.js'(e, t) {
      (t.exports = r), (r.displayName = 'markdown'), (r.aliases = ['md']);
      function r(n) {
        (function (a) {
          var l = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function i(h) {
            return (
              (h = h.replace(/<inner>/g, function () {
                return l;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + h + ')')
            );
          }
          var u = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return u;
              }
            ),
            c =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (a.languages.markdown = a.languages.extend('markup', {})),
            a.languages.insertBefore('markdown', 'prolog', {
              'front-matter-block': {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  'front-matter': {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ['yaml', 'language-yaml'],
                    inside: a.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
              table: {
                pattern: RegExp('^' + s + c + '(?:' + s + ')*', 'm'),
                inside: {
                  'table-data-rows': {
                    pattern: RegExp('^(' + s + c + ')(?:' + s + ')*$'),
                    lookbehind: !0,
                    inside: {
                      'table-data': {
                        pattern: RegExp(u),
                        inside: a.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  'table-line': {
                    pattern: RegExp('^(' + s + ')' + c + '$'),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  'table-header-row': {
                    pattern: RegExp('^' + s + '$'),
                    inside: {
                      'table-header': {
                        pattern: RegExp(u),
                        alias: 'important',
                        inside: a.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: 'keyword',
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    'code-block': {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: 'important',
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: 'important',
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              'url-reference': {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: 'url',
              },
              bold: {
                pattern: i(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: i(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: i(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              'code-snippet': {
                pattern:
                  /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ['code', 'keyword'],
              },
              url: {
                pattern: i(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ['url', 'bold', 'italic', 'strike'].forEach(function (h) {
              ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(
                function (g) {
                  h !== g &&
                    (a.languages.markdown[h].inside.content.inside[g] =
                      a.languages.markdown[g]);
                }
              );
            }),
            a.hooks.add('after-tokenize', function (h) {
              if (h.language !== 'markdown' && h.language !== 'md') return;
              function g(w) {
                if (!(!w || typeof w == 'string'))
                  for (var x = 0, v = w.length; x < v; x++) {
                    var y = w[x];
                    if (y.type !== 'code') {
                      g(y.content);
                      continue;
                    }
                    var E = y.content[1],
                      A = y.content[3];
                    if (
                      E &&
                      A &&
                      E.type === 'code-language' &&
                      A.type === 'code-block' &&
                      typeof E.content == 'string'
                    ) {
                      var S = E.content
                        .replace(/\b#/g, 'sharp')
                        .replace(/\b\+\+/g, 'pp');
                      S = (/[a-z][\w-]*/i.exec(S) || [''])[0].toLowerCase();
                      var C = 'language-' + S;
                      A.alias
                        ? typeof A.alias == 'string'
                          ? (A.alias = [A.alias, C])
                          : A.alias.push(C)
                        : (A.alias = [C]);
                    }
                  }
              }
              g(h.tokens);
            }),
            a.hooks.add('wrap', function (h) {
              if (h.type === 'code-block') {
                for (var g = '', w = 0, x = h.classes.length; w < x; w++) {
                  var v = h.classes[w],
                    y = /language-(.+)/.exec(v);
                  if (y) {
                    g = y[1];
                    break;
                  }
                }
                var E = a.languages[g];
                if (E) h.content = a.highlight(p(h.content.value), E, g);
                else if (g && g !== 'none' && a.plugins.autoloader) {
                  var A =
                    'md-' +
                    new Date().valueOf() +
                    '-' +
                    Math.floor(Math.random() * 1e16);
                  (h.attributes.id = A),
                    a.plugins.autoloader.loadLanguages(g, function () {
                      var S = document.getElementById(A);
                      S &&
                        (S.innerHTML = a.highlight(
                          S.textContent,
                          a.languages[g],
                          g
                        ));
                    });
                }
              }
            });
          var d = RegExp(a.languages.markup.tag.pattern.source, 'gi'),
            f = { amp: '&', lt: '<', gt: '>', quot: '"' },
            m = String.fromCodePoint || String.fromCharCode;
          function p(h) {
            var g = h.replace(d, '');
            return (
              (g = g.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (w, x) {
                if (((x = x.toLowerCase()), x[0] === '#')) {
                  var v;
                  return (
                    x[1] === 'x'
                      ? (v = parseInt(x.slice(2), 16))
                      : (v = Number(x.slice(1))),
                    m(v)
                  );
                } else {
                  var y = f[x];
                  return y || w;
                }
              })),
              g
            );
          }
          a.languages.md = a.languages.markdown;
        })(n);
      }
    },
  }),
  Wp = Z({
    '../../node_modules/refractor/lang/yaml.js'(e, t) {
      (t.exports = r), (r.displayName = 'yaml'), (r.aliases = ['yml']);
      function r(n) {
        (function (a) {
          var l = /[*&][^\s[\]{},]+/,
            i =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            u =
              '(?:' +
              i.source +
              '(?:[ 	]+' +
              l.source +
              ')?|' +
              l.source +
              '(?:[ 	]+' +
              i.source +
              ')?)',
            s =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                }
              ),
            c = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function d(f, m) {
            m = (m || '').replace(/m/g, '') + 'm';
            var p =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return u;
                })
                .replace(/<<value>>/g, function () {
                  return f;
                });
            return RegExp(p, m);
          }
          (a.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return u;
                  }
                )
              ),
              lookbehind: !0,
              alias: 'string',
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return u;
                  })
                  .replace(/<<key>>/g, function () {
                    return '(?:' + s + '|' + c + ')';
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: 'atrule',
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: 'important',
            },
            datetime: {
              pattern: d(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: 'number',
            },
            boolean: {
              pattern: d(/false|true/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            null: {
              pattern: d(/null|~/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            string: { pattern: d(c), lookbehind: !0, greedy: !0 },
            number: {
              pattern: d(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                'i'
              ),
              lookbehind: !0,
            },
            tag: i,
            important: l,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (a.languages.yml = a.languages.yaml);
        })(n);
      }
    },
  }),
  uu = Z({
    '../../node_modules/refractor/lang/typescript.js'(e, t) {
      (t.exports = r), (r.displayName = 'typescript'), (r.aliases = ['ts']);
      function r(n) {
        (function (a) {
          (a.languages.typescript = a.languages.extend('javascript', {
            'class-name': {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin:
              /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            a.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete a.languages.typescript.parameter,
            delete a.languages.typescript['literal-property'];
          var l = a.languages.extend('typescript', {});
          delete l['class-name'],
            (a.languages.typescript['class-name'].inside = l),
            a.languages.insertBefore('typescript', 'function', {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                  at: { pattern: /^@/, alias: 'operator' },
                  function: /^[\s\S]+/,
                },
              },
              'generic-function': {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: 'class-name',
                    inside: l,
                  },
                },
              },
            }),
            (a.languages.ts = a.languages.typescript);
        })(n);
      }
    },
  }),
  cu = Z({
    '../../node_modules/refractor/lang/jsx.js'(e, t) {
      (t.exports = r), (r.displayName = 'jsx'), (r.aliases = []);
      function r(n) {
        (function (a) {
          var l = a.util.clone(a.languages.javascript),
            i = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            u = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function c(m, p) {
            return (
              (m = m
                .replace(/<S>/g, function () {
                  return i;
                })
                .replace(/<BRACES>/g, function () {
                  return u;
                })
                .replace(/<SPREAD>/g, function () {
                  return s;
                })),
              RegExp(m, p)
            );
          }
          (s = c(s).source),
            (a.languages.jsx = a.languages.extend('markup', l)),
            (a.languages.jsx.tag.pattern = c(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (a.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (a.languages.jsx.tag.inside['attr-value'].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (a.languages.jsx.tag.inside.tag.inside['class-name'] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (a.languages.jsx.tag.inside.comment = l.comment),
            a.languages.insertBefore(
              'inside',
              'attr-name',
              {
                spread: {
                  pattern: c(/<SPREAD>/.source),
                  inside: a.languages.jsx,
                },
              },
              a.languages.jsx.tag
            ),
            a.languages.insertBefore(
              'inside',
              'special-attr',
              {
                script: {
                  pattern: c(/=<BRACES>/.source),
                  alias: 'language-javascript',
                  inside: {
                    'script-punctuation': {
                      pattern: /^=(?=\{)/,
                      alias: 'punctuation',
                    },
                    rest: a.languages.jsx,
                  },
                },
              },
              a.languages.jsx.tag
            );
          var d = function (m) {
              return m
                ? typeof m == 'string'
                  ? m
                  : typeof m.content == 'string'
                    ? m.content
                    : m.content.map(d).join('')
                : '';
            },
            f = function (m) {
              for (var p = [], h = 0; h < m.length; h++) {
                var g = m[h],
                  w = !1;
                if (
                  (typeof g != 'string' &&
                    (g.type === 'tag' &&
                    g.content[0] &&
                    g.content[0].type === 'tag'
                      ? g.content[0].content[0].content === '</'
                        ? p.length > 0 &&
                          p[p.length - 1].tagName ===
                            d(g.content[0].content[1]) &&
                          p.pop()
                        : g.content[g.content.length - 1].content === '/>' ||
                          p.push({
                            tagName: d(g.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : p.length > 0 &&
                          g.type === 'punctuation' &&
                          g.content === '{'
                        ? p[p.length - 1].openedBraces++
                        : p.length > 0 &&
                            p[p.length - 1].openedBraces > 0 &&
                            g.type === 'punctuation' &&
                            g.content === '}'
                          ? p[p.length - 1].openedBraces--
                          : (w = !0)),
                  (w || typeof g == 'string') &&
                    p.length > 0 &&
                    p[p.length - 1].openedBraces === 0)
                ) {
                  var x = d(g);
                  h < m.length - 1 &&
                    (typeof m[h + 1] == 'string' ||
                      m[h + 1].type === 'plain-text') &&
                    ((x += d(m[h + 1])), m.splice(h + 1, 1)),
                    h > 0 &&
                      (typeof m[h - 1] == 'string' ||
                        m[h - 1].type === 'plain-text') &&
                      ((x = d(m[h - 1]) + x), m.splice(h - 1, 1), h--),
                    (m[h] = new a.Token('plain-text', x, null, x));
                }
                g.content && typeof g.content != 'string' && f(g.content);
              }
            };
          a.hooks.add('after-tokenize', function (m) {
            (m.language !== 'jsx' && m.language !== 'tsx') || f(m.tokens);
          });
        })(n);
      }
    },
  }),
  Gp = Z({
    '../../node_modules/refractor/lang/tsx.js'(e, t) {
      var r = cu(),
        n = uu();
      (t.exports = a), (a.displayName = 'tsx'), (a.aliases = []);
      function a(l) {
        l.register(r),
          l.register(n),
          (function (i) {
            var u = i.util.clone(i.languages.typescript);
            (i.languages.tsx = i.languages.extend('jsx', u)),
              delete i.languages.tsx.parameter,
              delete i.languages.tsx['literal-property'];
            var s = i.languages.tsx.tag;
            (s.pattern = RegExp(
              /(^|[^\w$]|(?=<\/))/.source + '(?:' + s.pattern.source + ')',
              s.pattern.flags
            )),
              (s.lookbehind = !0);
          })(l);
      }
    },
  }),
  Yp = Z({
    '../../node_modules/refractor/lang/clike.js'(e, t) {
      (t.exports = r), (r.displayName = 'clike'), (r.aliases = []);
      function r(n) {
        n.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          'class-name': {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        };
      }
    },
  }),
  Kp = Z({
    '../../node_modules/refractor/lang/javascript.js'(e, t) {
      (t.exports = r), (r.displayName = 'javascript'), (r.aliases = ['js']);
      function r(n) {
        (n.languages.javascript = n.languages.extend('clike', {
          'class-name': [
            n.languages.clike['class-name'],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                '(?:' +
                (/NaN|Infinity/.source +
                  '|' +
                  /0[bB][01]+(?:_[01]+)*n?/.source +
                  '|' +
                  /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                  '|' +
                  /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                  '|' +
                  /\d+(?:_\d+)*n/.source +
                  '|' +
                  /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                    .source) +
                ')' +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
          (n.languages.javascript['class-name'][0].pattern =
            /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
          n.languages.insertBefore('javascript', 'keyword', {
            regex: {
              pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                'regex-source': {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: 'language-regex',
                  inside: n.languages.regex,
                },
                'regex-delimiter': /^\/|\/$/,
                'regex-flags': /^[a-z]+$/,
              },
            },
            'function-variable': {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: 'function',
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern:
                  /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          n.languages.insertBefore('javascript', 'string', {
            hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
            'template-string': {
              pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
                interpolation: {
                  pattern:
                    /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    'interpolation-punctuation': {
                      pattern: /^\$\{|\}$/,
                      alias: 'punctuation',
                    },
                    rest: n.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
            'string-property': {
              pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
              lookbehind: !0,
              greedy: !0,
              alias: 'property',
            },
          }),
          n.languages.insertBefore('javascript', 'operator', {
            'literal-property': {
              pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
              lookbehind: !0,
              alias: 'property',
            },
          }),
          n.languages.markup &&
            (n.languages.markup.tag.addInlined('script', 'javascript'),
            n.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              'javascript'
            )),
          (n.languages.js = n.languages.javascript);
      }
    },
  }),
  du = Z({
    '../../node_modules/refractor/lang/css.js'(e, t) {
      (t.exports = r), (r.displayName = 'css'), (r.aliases = []);
      function r(n) {
        (function (a) {
          var l =
            /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (a.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector',
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                '\\burl\\((?:' +
                  l.source +
                  '|' +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ')\\)',
                'i'
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp('^' + l.source + '$'), alias: 'url' },
              },
            },
            selector: {
              pattern: RegExp(
                `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
                  l.source +
                  ')*(?=\\s*\\{)'
              ),
              lookbehind: !0,
            },
            string: { pattern: l, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0,
            },
            punctuation: /[(){};:,]/,
          }),
            (a.languages.css.atrule.inside.rest = a.languages.css);
          var i = a.languages.markup;
          i &&
            (i.tag.addInlined('style', 'css'),
            i.tag.addAttribute('style', 'css'));
        })(n);
      }
    },
  }),
  pu = Z({
    '../../node_modules/refractor/lang/markup.js'(e, t) {
      (t.exports = r),
        (r.displayName = 'markup'),
        (r.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss']);
      function r(n) {
        (n.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              'internal-subset': {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              'doctype-tag': /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              'special-attr': [],
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
                },
              },
              punctuation: /\/?>/,
              'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
          (n.languages.markup.tag.inside['attr-value'].inside.entity =
            n.languages.markup.entity),
          (n.languages.markup.doctype.inside['internal-subset'].inside =
            n.languages.markup),
          n.hooks.add('wrap', function (a) {
            a.type === 'entity' &&
              (a.attributes.title = a.content.value.replace(/&amp;/, '&'));
          }),
          Object.defineProperty(n.languages.markup.tag, 'addInlined', {
            value: function (a, l) {
              var i = {};
              (i['language-' + l] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: n.languages[l],
              }),
                (i.cdata = /^<!\[CDATA\[|\]\]>$/i);
              var u = {
                'included-cdata': {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: i,
                },
              };
              u['language-' + l] = {
                pattern: /[\s\S]+/,
                inside: n.languages[l],
              };
              var s = {};
              (s[a] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return a;
                    }
                  ),
                  'i'
                ),
                lookbehind: !0,
                greedy: !0,
                inside: u,
              }),
                n.languages.insertBefore('markup', 'cdata', s);
            },
          }),
          Object.defineProperty(n.languages.markup.tag, 'addAttribute', {
            value: function (a, l) {
              n.languages.markup.tag.inside['special-attr'].push({
                pattern: RegExp(
                  /(^|["'\s])/.source +
                    '(?:' +
                    a +
                    ')' +
                    /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                  'i'
                ),
                lookbehind: !0,
                inside: {
                  'attr-name': /^[^\s=]+/,
                  'attr-value': {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [l, 'language-' + l],
                        inside: n.languages[l],
                      },
                      punctuation: [
                        { pattern: /^=/, alias: 'attr-equals' },
                        /"|'/,
                      ],
                    },
                  },
                },
              });
            },
          }),
          (n.languages.html = n.languages.markup),
          (n.languages.mathml = n.languages.markup),
          (n.languages.svg = n.languages.markup),
          (n.languages.xml = n.languages.extend('markup', {})),
          (n.languages.ssml = n.languages.xml),
          (n.languages.atom = n.languages.xml),
          (n.languages.rss = n.languages.xml);
      }
    },
  }),
  Xp = Z({
    '../../node_modules/xtend/immutable.js'(e, t) {
      t.exports = n;
      var r = Object.prototype.hasOwnProperty;
      function n() {
        for (var a = {}, l = 0; l < arguments.length; l++) {
          var i = arguments[l];
          for (var u in i) r.call(i, u) && (a[u] = i[u]);
        }
        return a;
      }
    },
  }),
  fu = Z({
    '../../node_modules/property-information/lib/util/schema.js'(e, t) {
      t.exports = n;
      var r = n.prototype;
      (r.space = null), (r.normal = {}), (r.property = {});
      function n(a, l, i) {
        (this.property = a), (this.normal = l), i && (this.space = i);
      }
    },
  }),
  Jp = Z({
    '../../node_modules/property-information/lib/util/merge.js'(e, t) {
      var r = Xp(),
        n = fu();
      t.exports = a;
      function a(l) {
        for (var i = l.length, u = [], s = [], c = -1, d, f; ++c < i; )
          (d = l[c]), u.push(d.property), s.push(d.normal), (f = d.space);
        return new n(r.apply(null, u), r.apply(null, s), f);
      }
    },
  }),
  jo = Z({
    '../../node_modules/property-information/normalize.js'(e, t) {
      t.exports = r;
      function r(n) {
        return n.toLowerCase();
      }
    },
  }),
  mu = Z({
    '../../node_modules/property-information/lib/util/info.js'(e, t) {
      t.exports = n;
      var r = n.prototype;
      (r.space = null),
        (r.attribute = null),
        (r.property = null),
        (r.boolean = !1),
        (r.booleanish = !1),
        (r.overloadedBoolean = !1),
        (r.number = !1),
        (r.commaSeparated = !1),
        (r.spaceSeparated = !1),
        (r.commaOrSpaceSeparated = !1),
        (r.mustUseProperty = !1),
        (r.defined = !1);
      function n(a, l) {
        (this.property = a), (this.attribute = l);
      }
    },
  }),
  No = Z({
    '../../node_modules/property-information/lib/util/types.js'(e) {
      var t = 0;
      (e.boolean = r()),
        (e.booleanish = r()),
        (e.overloadedBoolean = r()),
        (e.number = r()),
        (e.spaceSeparated = r()),
        (e.commaSeparated = r()),
        (e.commaOrSpaceSeparated = r());
      function r() {
        return Math.pow(2, ++t);
      }
    },
  }),
  gu = Z({
    '../../node_modules/property-information/lib/util/defined-info.js'(e, t) {
      var r = mu(),
        n = No();
      (t.exports = i), (i.prototype = new r()), (i.prototype.defined = !0);
      var a = [
          'boolean',
          'booleanish',
          'overloadedBoolean',
          'number',
          'commaSeparated',
          'spaceSeparated',
          'commaOrSpaceSeparated',
        ],
        l = a.length;
      function i(s, c, d, f) {
        var m = -1,
          p;
        for (u(this, 'space', f), r.call(this, s, c); ++m < l; )
          (p = a[m]), u(this, p, (d & n[p]) === n[p]);
      }
      function u(s, c, d) {
        d && (s[c] = d);
      }
    },
  }),
  Wr = Z({
    '../../node_modules/property-information/lib/util/create.js'(e, t) {
      var r = jo(),
        n = fu(),
        a = gu();
      t.exports = l;
      function l(i) {
        var u = i.space,
          s = i.mustUseProperty || [],
          c = i.attributes || {},
          d = i.properties,
          f = i.transform,
          m = {},
          p = {},
          h,
          g;
        for (h in d)
          (g = new a(h, f(c, h), d[h], u)),
            s.indexOf(h) !== -1 && (g.mustUseProperty = !0),
            (m[h] = g),
            (p[r(h)] = h),
            (p[r(g.attribute)] = h);
        return new n(m, p, u);
      }
    },
  }),
  Qp = Z({
    '../../node_modules/property-information/lib/xlink.js'(e, t) {
      var r = Wr();
      t.exports = r({
        space: 'xlink',
        transform: n,
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      });
      function n(a, l) {
        return 'xlink:' + l.slice(5).toLowerCase();
      }
    },
  }),
  e2 = Z({
    '../../node_modules/property-information/lib/xml.js'(e, t) {
      var r = Wr();
      t.exports = r({
        space: 'xml',
        transform: n,
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
      });
      function n(a, l) {
        return 'xml:' + l.slice(3).toLowerCase();
      }
    },
  }),
  t2 = Z({
    '../../node_modules/property-information/lib/util/case-sensitive-transform.js'(
      e,
      t
    ) {
      t.exports = r;
      function r(n, a) {
        return a in n ? n[a] : a;
      }
    },
  }),
  hu = Z({
    '../../node_modules/property-information/lib/util/case-insensitive-transform.js'(
      e,
      t
    ) {
      var r = t2();
      t.exports = n;
      function n(a, l) {
        return r(a, l.toLowerCase());
      }
    },
  }),
  r2 = Z({
    '../../node_modules/property-information/lib/xmlns.js'(e, t) {
      var r = Wr(),
        n = hu();
      t.exports = r({
        space: 'xmlns',
        attributes: { xmlnsxlink: 'xmlns:xlink' },
        transform: n,
        properties: { xmlns: null, xmlnsXLink: null },
      });
    },
  }),
  n2 = Z({
    '../../node_modules/property-information/lib/aria.js'(e, t) {
      var r = No(),
        n = Wr(),
        a = r.booleanish,
        l = r.number,
        i = r.spaceSeparated;
      t.exports = n({
        transform: u,
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: a,
          ariaAutoComplete: null,
          ariaBusy: a,
          ariaChecked: a,
          ariaColCount: l,
          ariaColIndex: l,
          ariaColSpan: l,
          ariaControls: i,
          ariaCurrent: null,
          ariaDescribedBy: i,
          ariaDetails: null,
          ariaDisabled: a,
          ariaDropEffect: i,
          ariaErrorMessage: null,
          ariaExpanded: a,
          ariaFlowTo: i,
          ariaGrabbed: a,
          ariaHasPopup: null,
          ariaHidden: a,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: i,
          ariaLevel: l,
          ariaLive: null,
          ariaModal: a,
          ariaMultiLine: a,
          ariaMultiSelectable: a,
          ariaOrientation: null,
          ariaOwns: i,
          ariaPlaceholder: null,
          ariaPosInSet: l,
          ariaPressed: a,
          ariaReadOnly: a,
          ariaRelevant: null,
          ariaRequired: a,
          ariaRoleDescription: i,
          ariaRowCount: l,
          ariaRowIndex: l,
          ariaRowSpan: l,
          ariaSelected: a,
          ariaSetSize: l,
          ariaSort: null,
          ariaValueMax: l,
          ariaValueMin: l,
          ariaValueNow: l,
          ariaValueText: null,
          role: null,
        },
      });
      function u(s, c) {
        return c === 'role' ? c : 'aria-' + c.slice(4).toLowerCase();
      }
    },
  }),
  a2 = Z({
    '../../node_modules/property-information/lib/html.js'(e, t) {
      var r = No(),
        n = Wr(),
        a = hu(),
        l = r.boolean,
        i = r.overloadedBoolean,
        u = r.booleanish,
        s = r.number,
        c = r.spaceSeparated,
        d = r.commaSeparated;
      t.exports = n({
        space: 'html',
        attributes: {
          acceptcharset: 'accept-charset',
          classname: 'class',
          htmlfor: 'for',
          httpequiv: 'http-equiv',
        },
        transform: a,
        mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
        properties: {
          abbr: null,
          accept: d,
          acceptCharset: c,
          accessKey: c,
          action: null,
          allow: null,
          allowFullScreen: l,
          allowPaymentRequest: l,
          allowUserMedia: l,
          alt: null,
          as: null,
          async: l,
          autoCapitalize: null,
          autoComplete: c,
          autoFocus: l,
          autoPlay: l,
          capture: l,
          charSet: null,
          checked: l,
          cite: null,
          className: c,
          cols: s,
          colSpan: null,
          content: null,
          contentEditable: u,
          controls: l,
          controlsList: c,
          coords: s | d,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: l,
          defer: l,
          dir: null,
          dirName: null,
          disabled: l,
          download: i,
          draggable: u,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: l,
          formTarget: null,
          headers: c,
          height: s,
          hidden: l,
          high: s,
          href: null,
          hrefLang: null,
          htmlFor: c,
          httpEquiv: c,
          id: null,
          imageSizes: null,
          imageSrcSet: d,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: l,
          itemId: null,
          itemProp: c,
          itemRef: c,
          itemScope: l,
          itemType: c,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: l,
          low: s,
          manifest: null,
          max: null,
          maxLength: s,
          media: null,
          method: null,
          min: null,
          minLength: s,
          multiple: l,
          muted: l,
          name: null,
          nonce: null,
          noModule: l,
          noValidate: l,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: l,
          optimum: s,
          pattern: null,
          ping: c,
          placeholder: null,
          playsInline: l,
          poster: null,
          preload: null,
          readOnly: l,
          referrerPolicy: null,
          rel: c,
          required: l,
          reversed: l,
          rows: s,
          rowSpan: s,
          sandbox: c,
          scope: null,
          scoped: l,
          seamless: l,
          selected: l,
          shape: null,
          size: s,
          sizes: null,
          slot: null,
          span: s,
          spellCheck: u,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: d,
          start: s,
          step: null,
          style: null,
          tabIndex: s,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: l,
          useMap: null,
          value: u,
          width: s,
          wrap: null,
          align: null,
          aLink: null,
          archive: c,
          axis: null,
          background: null,
          bgColor: null,
          border: s,
          borderColor: null,
          bottomMargin: s,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: l,
          declare: l,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: s,
          leftMargin: s,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: s,
          marginWidth: s,
          noResize: l,
          noHref: l,
          noShade: l,
          noWrap: l,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: s,
          rules: null,
          scheme: null,
          scrolling: u,
          standby: null,
          summary: null,
          text: null,
          topMargin: s,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: s,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: l,
          disableRemotePlayback: l,
          prefix: null,
          property: null,
          results: s,
          security: null,
          unselectable: null,
        },
      });
    },
  }),
  o2 = Z({
    '../../node_modules/property-information/html.js'(e, t) {
      var r = Jp(),
        n = Qp(),
        a = e2(),
        l = r2(),
        i = n2(),
        u = a2();
      t.exports = r([a, n, l, i, u]);
    },
  }),
  l2 = Z({
    '../../node_modules/property-information/find.js'(e, t) {
      var r = jo(),
        n = gu(),
        a = mu(),
        l = 'data';
      t.exports = c;
      var i = /^data[-\w.:]+$/i,
        u = /-[a-z]/g,
        s = /[A-Z]/g;
      function c(h, g) {
        var w = r(g),
          x = g,
          v = a;
        return w in h.normal
          ? h.property[h.normal[w]]
          : (w.length > 4 &&
              w.slice(0, 4) === l &&
              i.test(g) &&
              (g.charAt(4) === '-' ? (x = d(g)) : (g = f(g)), (v = n)),
            new v(x, g));
      }
      function d(h) {
        var g = h.slice(5).replace(u, p);
        return l + g.charAt(0).toUpperCase() + g.slice(1);
      }
      function f(h) {
        var g = h.slice(4);
        return u.test(g)
          ? h
          : ((g = g.replace(s, m)),
            g.charAt(0) !== '-' && (g = '-' + g),
            l + g);
      }
      function m(h) {
        return '-' + h.toLowerCase();
      }
      function p(h) {
        return h.charAt(1).toUpperCase();
      }
    },
  }),
  i2 = Z({
    '../../node_modules/hast-util-parse-selector/index.js'(e, t) {
      t.exports = n;
      var r = /[#.]/g;
      function n(a, l) {
        for (
          var i = a || '', u = l || 'div', s = {}, c = 0, d, f, m;
          c < i.length;

        )
          (r.lastIndex = c),
            (m = r.exec(i)),
            (d = i.slice(c, m ? m.index : i.length)),
            d &&
              (f
                ? f === '#'
                  ? (s.id = d)
                  : s.className
                    ? s.className.push(d)
                    : (s.className = [d])
                : (u = d),
              (c += d.length)),
            m && ((f = m[0]), c++);
        return { type: 'element', tagName: u, properties: s, children: [] };
      }
    },
  }),
  s2 = Z({
    '../../node_modules/space-separated-tokens/index.js'(e) {
      (e.parse = a), (e.stringify = l);
      var t = '',
        r = ' ',
        n = /[ \t\n\r\f]+/g;
      function a(i) {
        var u = String(i || t).trim();
        return u === t ? [] : u.split(n);
      }
      function l(i) {
        return i.join(r).trim();
      }
    },
  }),
  u2 = Z({
    '../../node_modules/comma-separated-tokens/index.js'(e) {
      (e.parse = a), (e.stringify = l);
      var t = ',',
        r = ' ',
        n = '';
      function a(i) {
        for (
          var u = [], s = String(i || n), c = s.indexOf(t), d = 0, f = !1, m;
          !f;

        )
          c === -1 && ((c = s.length), (f = !0)),
            (m = s.slice(d, c).trim()),
            (m || !f) && u.push(m),
            (d = c + 1),
            (c = s.indexOf(t, d));
        return u;
      }
      function l(i, u) {
        var s = u || {},
          c = s.padLeft === !1 ? n : r,
          d = s.padRight ? r : n;
        return (
          i[i.length - 1] === n && (i = i.concat(n)), i.join(d + t + c).trim()
        );
      }
    },
  }),
  c2 = Z({
    '../../node_modules/hastscript/factory.js'(e, t) {
      var r = l2(),
        n = jo(),
        a = i2(),
        l = s2().parse,
        i = u2().parse;
      t.exports = s;
      var u = {}.hasOwnProperty;
      function s(w, x, v) {
        var y = v ? g(v) : null;
        return E;
        function E(S, C) {
          var k = a(S, x),
            O = Array.prototype.slice.call(arguments, 2),
            T = k.tagName.toLowerCase(),
            R;
          if (
            ((k.tagName = y && u.call(y, T) ? y[T] : T),
            C && c(C, k) && (O.unshift(C), (C = null)),
            C)
          )
            for (R in C) A(k.properties, R, C[R]);
          return (
            f(k.children, O),
            k.tagName === 'template' &&
              ((k.content = { type: 'root', children: k.children }),
              (k.children = [])),
            k
          );
        }
        function A(S, C, k) {
          var O, T, R;
          k == null ||
            k !== k ||
            ((O = r(w, C)),
            (T = O.property),
            (R = k),
            typeof R == 'string' &&
              (O.spaceSeparated
                ? (R = l(R))
                : O.commaSeparated
                  ? (R = i(R))
                  : O.commaOrSpaceSeparated && (R = l(i(R).join(' ')))),
            T === 'style' && typeof k != 'string' && (R = h(R)),
            T === 'className' && S.className && (R = S.className.concat(R)),
            (S[T] = m(O, T, R)));
        }
      }
      function c(w, x) {
        return typeof w == 'string' || 'length' in w || d(x.tagName, w);
      }
      function d(w, x) {
        var v = x.type;
        return w === 'input' || !v || typeof v != 'string'
          ? !1
          : typeof x.children == 'object' && 'length' in x.children
            ? !0
            : ((v = v.toLowerCase()),
              w === 'button'
                ? v !== 'menu' &&
                  v !== 'submit' &&
                  v !== 'reset' &&
                  v !== 'button'
                : 'value' in x);
      }
      function f(w, x) {
        var v, y;
        if (typeof x == 'string' || typeof x == 'number') {
          w.push({ type: 'text', value: String(x) });
          return;
        }
        if (typeof x == 'object' && 'length' in x) {
          for (v = -1, y = x.length; ++v < y; ) f(w, x[v]);
          return;
        }
        if (typeof x != 'object' || !('type' in x))
          throw new Error('Expected node, nodes, or string, got `' + x + '`');
        w.push(x);
      }
      function m(w, x, v) {
        var y, E, A;
        if (typeof v != 'object' || !('length' in v)) return p(w, x, v);
        for (E = v.length, y = -1, A = []; ++y < E; ) A[y] = p(w, x, v[y]);
        return A;
      }
      function p(w, x, v) {
        var y = v;
        return (
          w.number || w.positiveNumber
            ? !isNaN(y) && y !== '' && (y = Number(y))
            : (w.boolean || w.overloadedBoolean) &&
              typeof y == 'string' &&
              (y === '' || n(v) === n(x)) &&
              (y = !0),
          y
        );
      }
      function h(w) {
        var x = [],
          v;
        for (v in w) x.push([v, w[v]].join(': '));
        return x.join('; ');
      }
      function g(w) {
        for (var x = w.length, v = -1, y = {}, E; ++v < x; )
          (E = w[v]), (y[E.toLowerCase()] = E);
        return y;
      }
    },
  }),
  d2 = Z({
    '../../node_modules/hastscript/html.js'(e, t) {
      var r = o2(),
        n = c2(),
        a = n(r, 'div');
      (a.displayName = 'html'), (t.exports = a);
    },
  }),
  p2 = Z({
    '../../node_modules/hastscript/index.js'(e, t) {
      t.exports = d2();
    },
  }),
  f2 = Z({
    '../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json'(
      e,
      t
    ) {
      t.exports = {
        AElig: 'Æ',
        AMP: '&',
        Aacute: 'Á',
        Acirc: 'Â',
        Agrave: 'À',
        Aring: 'Å',
        Atilde: 'Ã',
        Auml: 'Ä',
        COPY: '©',
        Ccedil: 'Ç',
        ETH: 'Ð',
        Eacute: 'É',
        Ecirc: 'Ê',
        Egrave: 'È',
        Euml: 'Ë',
        GT: '>',
        Iacute: 'Í',
        Icirc: 'Î',
        Igrave: 'Ì',
        Iuml: 'Ï',
        LT: '<',
        Ntilde: 'Ñ',
        Oacute: 'Ó',
        Ocirc: 'Ô',
        Ograve: 'Ò',
        Oslash: 'Ø',
        Otilde: 'Õ',
        Ouml: 'Ö',
        QUOT: '"',
        REG: '®',
        THORN: 'Þ',
        Uacute: 'Ú',
        Ucirc: 'Û',
        Ugrave: 'Ù',
        Uuml: 'Ü',
        Yacute: 'Ý',
        aacute: 'á',
        acirc: 'â',
        acute: '´',
        aelig: 'æ',
        agrave: 'à',
        amp: '&',
        aring: 'å',
        atilde: 'ã',
        auml: 'ä',
        brvbar: '¦',
        ccedil: 'ç',
        cedil: '¸',
        cent: '¢',
        copy: '©',
        curren: '¤',
        deg: '°',
        divide: '÷',
        eacute: 'é',
        ecirc: 'ê',
        egrave: 'è',
        eth: 'ð',
        euml: 'ë',
        frac12: '½',
        frac14: '¼',
        frac34: '¾',
        gt: '>',
        iacute: 'í',
        icirc: 'î',
        iexcl: '¡',
        igrave: 'ì',
        iquest: '¿',
        iuml: 'ï',
        laquo: '«',
        lt: '<',
        macr: '¯',
        micro: 'µ',
        middot: '·',
        nbsp: ' ',
        not: '¬',
        ntilde: 'ñ',
        oacute: 'ó',
        ocirc: 'ô',
        ograve: 'ò',
        ordf: 'ª',
        ordm: 'º',
        oslash: 'ø',
        otilde: 'õ',
        ouml: 'ö',
        para: '¶',
        plusmn: '±',
        pound: '£',
        quot: '"',
        raquo: '»',
        reg: '®',
        sect: '§',
        shy: '­',
        sup1: '¹',
        sup2: '²',
        sup3: '³',
        szlig: 'ß',
        thorn: 'þ',
        times: '×',
        uacute: 'ú',
        ucirc: 'û',
        ugrave: 'ù',
        uml: '¨',
        uuml: 'ü',
        yacute: 'ý',
        yen: '¥',
        yuml: 'ÿ',
      };
    },
  }),
  m2 = Z({
    '../../node_modules/character-reference-invalid/index.json'(e, t) {
      t.exports = {
        0: '�',
        128: '€',
        130: '‚',
        131: 'ƒ',
        132: '„',
        133: '…',
        134: '†',
        135: '‡',
        136: 'ˆ',
        137: '‰',
        138: 'Š',
        139: '‹',
        140: 'Œ',
        142: 'Ž',
        145: '‘',
        146: '’',
        147: '“',
        148: '”',
        149: '•',
        150: '–',
        151: '—',
        152: '˜',
        153: '™',
        154: 'š',
        155: '›',
        156: 'œ',
        158: 'ž',
        159: 'Ÿ',
      };
    },
  }),
  bu = Z({
    '../../node_modules/is-decimal/index.js'(e, t) {
      t.exports = r;
      function r(n) {
        var a = typeof n == 'string' ? n.charCodeAt(0) : n;
        return a >= 48 && a <= 57;
      }
    },
  }),
  g2 = Z({
    '../../node_modules/is-hexadecimal/index.js'(e, t) {
      t.exports = r;
      function r(n) {
        var a = typeof n == 'string' ? n.charCodeAt(0) : n;
        return (
          (a >= 97 && a <= 102) || (a >= 65 && a <= 70) || (a >= 48 && a <= 57)
        );
      }
    },
  }),
  h2 = Z({
    '../../node_modules/is-alphabetical/index.js'(e, t) {
      t.exports = r;
      function r(n) {
        var a = typeof n == 'string' ? n.charCodeAt(0) : n;
        return (a >= 97 && a <= 122) || (a >= 65 && a <= 90);
      }
    },
  }),
  b2 = Z({
    '../../node_modules/is-alphanumerical/index.js'(e, t) {
      var r = h2(),
        n = bu();
      t.exports = a;
      function a(l) {
        return r(l) || n(l);
      }
    },
  }),
  y2 = Z({
    '../../node_modules/parse-entities/node_modules/character-entities/index.json'(
      e,
      t
    ) {
      t.exports = {
        AEli: 'Æ',
        AElig: 'Æ',
        AM: '&',
        AMP: '&',
        Aacut: 'Á',
        Aacute: 'Á',
        Abreve: 'Ă',
        Acir: 'Â',
        Acirc: 'Â',
        Acy: 'А',
        Afr: '𝔄',
        Agrav: 'À',
        Agrave: 'À',
        Alpha: 'Α',
        Amacr: 'Ā',
        And: '⩓',
        Aogon: 'Ą',
        Aopf: '𝔸',
        ApplyFunction: '⁡',
        Arin: 'Å',
        Aring: 'Å',
        Ascr: '𝒜',
        Assign: '≔',
        Atild: 'Ã',
        Atilde: 'Ã',
        Aum: 'Ä',
        Auml: 'Ä',
        Backslash: '∖',
        Barv: '⫧',
        Barwed: '⌆',
        Bcy: 'Б',
        Because: '∵',
        Bernoullis: 'ℬ',
        Beta: 'Β',
        Bfr: '𝔅',
        Bopf: '𝔹',
        Breve: '˘',
        Bscr: 'ℬ',
        Bumpeq: '≎',
        CHcy: 'Ч',
        COP: '©',
        COPY: '©',
        Cacute: 'Ć',
        Cap: '⋒',
        CapitalDifferentialD: 'ⅅ',
        Cayleys: 'ℭ',
        Ccaron: 'Č',
        Ccedi: 'Ç',
        Ccedil: 'Ç',
        Ccirc: 'Ĉ',
        Cconint: '∰',
        Cdot: 'Ċ',
        Cedilla: '¸',
        CenterDot: '·',
        Cfr: 'ℭ',
        Chi: 'Χ',
        CircleDot: '⊙',
        CircleMinus: '⊖',
        CirclePlus: '⊕',
        CircleTimes: '⊗',
        ClockwiseContourIntegral: '∲',
        CloseCurlyDoubleQuote: '”',
        CloseCurlyQuote: '’',
        Colon: '∷',
        Colone: '⩴',
        Congruent: '≡',
        Conint: '∯',
        ContourIntegral: '∮',
        Copf: 'ℂ',
        Coproduct: '∐',
        CounterClockwiseContourIntegral: '∳',
        Cross: '⨯',
        Cscr: '𝒞',
        Cup: '⋓',
        CupCap: '≍',
        DD: 'ⅅ',
        DDotrahd: '⤑',
        DJcy: 'Ђ',
        DScy: 'Ѕ',
        DZcy: 'Џ',
        Dagger: '‡',
        Darr: '↡',
        Dashv: '⫤',
        Dcaron: 'Ď',
        Dcy: 'Д',
        Del: '∇',
        Delta: 'Δ',
        Dfr: '𝔇',
        DiacriticalAcute: '´',
        DiacriticalDot: '˙',
        DiacriticalDoubleAcute: '˝',
        DiacriticalGrave: '`',
        DiacriticalTilde: '˜',
        Diamond: '⋄',
        DifferentialD: 'ⅆ',
        Dopf: '𝔻',
        Dot: '¨',
        DotDot: '⃜',
        DotEqual: '≐',
        DoubleContourIntegral: '∯',
        DoubleDot: '¨',
        DoubleDownArrow: '⇓',
        DoubleLeftArrow: '⇐',
        DoubleLeftRightArrow: '⇔',
        DoubleLeftTee: '⫤',
        DoubleLongLeftArrow: '⟸',
        DoubleLongLeftRightArrow: '⟺',
        DoubleLongRightArrow: '⟹',
        DoubleRightArrow: '⇒',
        DoubleRightTee: '⊨',
        DoubleUpArrow: '⇑',
        DoubleUpDownArrow: '⇕',
        DoubleVerticalBar: '∥',
        DownArrow: '↓',
        DownArrowBar: '⤓',
        DownArrowUpArrow: '⇵',
        DownBreve: '̑',
        DownLeftRightVector: '⥐',
        DownLeftTeeVector: '⥞',
        DownLeftVector: '↽',
        DownLeftVectorBar: '⥖',
        DownRightTeeVector: '⥟',
        DownRightVector: '⇁',
        DownRightVectorBar: '⥗',
        DownTee: '⊤',
        DownTeeArrow: '↧',
        Downarrow: '⇓',
        Dscr: '𝒟',
        Dstrok: 'Đ',
        ENG: 'Ŋ',
        ET: 'Ð',
        ETH: 'Ð',
        Eacut: 'É',
        Eacute: 'É',
        Ecaron: 'Ě',
        Ecir: 'Ê',
        Ecirc: 'Ê',
        Ecy: 'Э',
        Edot: 'Ė',
        Efr: '𝔈',
        Egrav: 'È',
        Egrave: 'È',
        Element: '∈',
        Emacr: 'Ē',
        EmptySmallSquare: '◻',
        EmptyVerySmallSquare: '▫',
        Eogon: 'Ę',
        Eopf: '𝔼',
        Epsilon: 'Ε',
        Equal: '⩵',
        EqualTilde: '≂',
        Equilibrium: '⇌',
        Escr: 'ℰ',
        Esim: '⩳',
        Eta: 'Η',
        Eum: 'Ë',
        Euml: 'Ë',
        Exists: '∃',
        ExponentialE: 'ⅇ',
        Fcy: 'Ф',
        Ffr: '𝔉',
        FilledSmallSquare: '◼',
        FilledVerySmallSquare: '▪',
        Fopf: '𝔽',
        ForAll: '∀',
        Fouriertrf: 'ℱ',
        Fscr: 'ℱ',
        GJcy: 'Ѓ',
        G: '>',
        GT: '>',
        Gamma: 'Γ',
        Gammad: 'Ϝ',
        Gbreve: 'Ğ',
        Gcedil: 'Ģ',
        Gcirc: 'Ĝ',
        Gcy: 'Г',
        Gdot: 'Ġ',
        Gfr: '𝔊',
        Gg: '⋙',
        Gopf: '𝔾',
        GreaterEqual: '≥',
        GreaterEqualLess: '⋛',
        GreaterFullEqual: '≧',
        GreaterGreater: '⪢',
        GreaterLess: '≷',
        GreaterSlantEqual: '⩾',
        GreaterTilde: '≳',
        Gscr: '𝒢',
        Gt: '≫',
        HARDcy: 'Ъ',
        Hacek: 'ˇ',
        Hat: '^',
        Hcirc: 'Ĥ',
        Hfr: 'ℌ',
        HilbertSpace: 'ℋ',
        Hopf: 'ℍ',
        HorizontalLine: '─',
        Hscr: 'ℋ',
        Hstrok: 'Ħ',
        HumpDownHump: '≎',
        HumpEqual: '≏',
        IEcy: 'Е',
        IJlig: 'Ĳ',
        IOcy: 'Ё',
        Iacut: 'Í',
        Iacute: 'Í',
        Icir: 'Î',
        Icirc: 'Î',
        Icy: 'И',
        Idot: 'İ',
        Ifr: 'ℑ',
        Igrav: 'Ì',
        Igrave: 'Ì',
        Im: 'ℑ',
        Imacr: 'Ī',
        ImaginaryI: 'ⅈ',
        Implies: '⇒',
        Int: '∬',
        Integral: '∫',
        Intersection: '⋂',
        InvisibleComma: '⁣',
        InvisibleTimes: '⁢',
        Iogon: 'Į',
        Iopf: '𝕀',
        Iota: 'Ι',
        Iscr: 'ℐ',
        Itilde: 'Ĩ',
        Iukcy: 'І',
        Ium: 'Ï',
        Iuml: 'Ï',
        Jcirc: 'Ĵ',
        Jcy: 'Й',
        Jfr: '𝔍',
        Jopf: '𝕁',
        Jscr: '𝒥',
        Jsercy: 'Ј',
        Jukcy: 'Є',
        KHcy: 'Х',
        KJcy: 'Ќ',
        Kappa: 'Κ',
        Kcedil: 'Ķ',
        Kcy: 'К',
        Kfr: '𝔎',
        Kopf: '𝕂',
        Kscr: '𝒦',
        LJcy: 'Љ',
        L: '<',
        LT: '<',
        Lacute: 'Ĺ',
        Lambda: 'Λ',
        Lang: '⟪',
        Laplacetrf: 'ℒ',
        Larr: '↞',
        Lcaron: 'Ľ',
        Lcedil: 'Ļ',
        Lcy: 'Л',
        LeftAngleBracket: '⟨',
        LeftArrow: '←',
        LeftArrowBar: '⇤',
        LeftArrowRightArrow: '⇆',
        LeftCeiling: '⌈',
        LeftDoubleBracket: '⟦',
        LeftDownTeeVector: '⥡',
        LeftDownVector: '⇃',
        LeftDownVectorBar: '⥙',
        LeftFloor: '⌊',
        LeftRightArrow: '↔',
        LeftRightVector: '⥎',
        LeftTee: '⊣',
        LeftTeeArrow: '↤',
        LeftTeeVector: '⥚',
        LeftTriangle: '⊲',
        LeftTriangleBar: '⧏',
        LeftTriangleEqual: '⊴',
        LeftUpDownVector: '⥑',
        LeftUpTeeVector: '⥠',
        LeftUpVector: '↿',
        LeftUpVectorBar: '⥘',
        LeftVector: '↼',
        LeftVectorBar: '⥒',
        Leftarrow: '⇐',
        Leftrightarrow: '⇔',
        LessEqualGreater: '⋚',
        LessFullEqual: '≦',
        LessGreater: '≶',
        LessLess: '⪡',
        LessSlantEqual: '⩽',
        LessTilde: '≲',
        Lfr: '𝔏',
        Ll: '⋘',
        Lleftarrow: '⇚',
        Lmidot: 'Ŀ',
        LongLeftArrow: '⟵',
        LongLeftRightArrow: '⟷',
        LongRightArrow: '⟶',
        Longleftarrow: '⟸',
        Longleftrightarrow: '⟺',
        Longrightarrow: '⟹',
        Lopf: '𝕃',
        LowerLeftArrow: '↙',
        LowerRightArrow: '↘',
        Lscr: 'ℒ',
        Lsh: '↰',
        Lstrok: 'Ł',
        Lt: '≪',
        Map: '⤅',
        Mcy: 'М',
        MediumSpace: ' ',
        Mellintrf: 'ℳ',
        Mfr: '𝔐',
        MinusPlus: '∓',
        Mopf: '𝕄',
        Mscr: 'ℳ',
        Mu: 'Μ',
        NJcy: 'Њ',
        Nacute: 'Ń',
        Ncaron: 'Ň',
        Ncedil: 'Ņ',
        Ncy: 'Н',
        NegativeMediumSpace: '​',
        NegativeThickSpace: '​',
        NegativeThinSpace: '​',
        NegativeVeryThinSpace: '​',
        NestedGreaterGreater: '≫',
        NestedLessLess: '≪',
        NewLine: `
`,
        Nfr: '𝔑',
        NoBreak: '⁠',
        NonBreakingSpace: ' ',
        Nopf: 'ℕ',
        Not: '⫬',
        NotCongruent: '≢',
        NotCupCap: '≭',
        NotDoubleVerticalBar: '∦',
        NotElement: '∉',
        NotEqual: '≠',
        NotEqualTilde: '≂̸',
        NotExists: '∄',
        NotGreater: '≯',
        NotGreaterEqual: '≱',
        NotGreaterFullEqual: '≧̸',
        NotGreaterGreater: '≫̸',
        NotGreaterLess: '≹',
        NotGreaterSlantEqual: '⩾̸',
        NotGreaterTilde: '≵',
        NotHumpDownHump: '≎̸',
        NotHumpEqual: '≏̸',
        NotLeftTriangle: '⋪',
        NotLeftTriangleBar: '⧏̸',
        NotLeftTriangleEqual: '⋬',
        NotLess: '≮',
        NotLessEqual: '≰',
        NotLessGreater: '≸',
        NotLessLess: '≪̸',
        NotLessSlantEqual: '⩽̸',
        NotLessTilde: '≴',
        NotNestedGreaterGreater: '⪢̸',
        NotNestedLessLess: '⪡̸',
        NotPrecedes: '⊀',
        NotPrecedesEqual: '⪯̸',
        NotPrecedesSlantEqual: '⋠',
        NotReverseElement: '∌',
        NotRightTriangle: '⋫',
        NotRightTriangleBar: '⧐̸',
        NotRightTriangleEqual: '⋭',
        NotSquareSubset: '⊏̸',
        NotSquareSubsetEqual: '⋢',
        NotSquareSuperset: '⊐̸',
        NotSquareSupersetEqual: '⋣',
        NotSubset: '⊂⃒',
        NotSubsetEqual: '⊈',
        NotSucceeds: '⊁',
        NotSucceedsEqual: '⪰̸',
        NotSucceedsSlantEqual: '⋡',
        NotSucceedsTilde: '≿̸',
        NotSuperset: '⊃⃒',
        NotSupersetEqual: '⊉',
        NotTilde: '≁',
        NotTildeEqual: '≄',
        NotTildeFullEqual: '≇',
        NotTildeTilde: '≉',
        NotVerticalBar: '∤',
        Nscr: '𝒩',
        Ntild: 'Ñ',
        Ntilde: 'Ñ',
        Nu: 'Ν',
        OElig: 'Œ',
        Oacut: 'Ó',
        Oacute: 'Ó',
        Ocir: 'Ô',
        Ocirc: 'Ô',
        Ocy: 'О',
        Odblac: 'Ő',
        Ofr: '𝔒',
        Ograv: 'Ò',
        Ograve: 'Ò',
        Omacr: 'Ō',
        Omega: 'Ω',
        Omicron: 'Ο',
        Oopf: '𝕆',
        OpenCurlyDoubleQuote: '“',
        OpenCurlyQuote: '‘',
        Or: '⩔',
        Oscr: '𝒪',
        Oslas: 'Ø',
        Oslash: 'Ø',
        Otild: 'Õ',
        Otilde: 'Õ',
        Otimes: '⨷',
        Oum: 'Ö',
        Ouml: 'Ö',
        OverBar: '‾',
        OverBrace: '⏞',
        OverBracket: '⎴',
        OverParenthesis: '⏜',
        PartialD: '∂',
        Pcy: 'П',
        Pfr: '𝔓',
        Phi: 'Φ',
        Pi: 'Π',
        PlusMinus: '±',
        Poincareplane: 'ℌ',
        Popf: 'ℙ',
        Pr: '⪻',
        Precedes: '≺',
        PrecedesEqual: '⪯',
        PrecedesSlantEqual: '≼',
        PrecedesTilde: '≾',
        Prime: '″',
        Product: '∏',
        Proportion: '∷',
        Proportional: '∝',
        Pscr: '𝒫',
        Psi: 'Ψ',
        QUO: '"',
        QUOT: '"',
        Qfr: '𝔔',
        Qopf: 'ℚ',
        Qscr: '𝒬',
        RBarr: '⤐',
        RE: '®',
        REG: '®',
        Racute: 'Ŕ',
        Rang: '⟫',
        Rarr: '↠',
        Rarrtl: '⤖',
        Rcaron: 'Ř',
        Rcedil: 'Ŗ',
        Rcy: 'Р',
        Re: 'ℜ',
        ReverseElement: '∋',
        ReverseEquilibrium: '⇋',
        ReverseUpEquilibrium: '⥯',
        Rfr: 'ℜ',
        Rho: 'Ρ',
        RightAngleBracket: '⟩',
        RightArrow: '→',
        RightArrowBar: '⇥',
        RightArrowLeftArrow: '⇄',
        RightCeiling: '⌉',
        RightDoubleBracket: '⟧',
        RightDownTeeVector: '⥝',
        RightDownVector: '⇂',
        RightDownVectorBar: '⥕',
        RightFloor: '⌋',
        RightTee: '⊢',
        RightTeeArrow: '↦',
        RightTeeVector: '⥛',
        RightTriangle: '⊳',
        RightTriangleBar: '⧐',
        RightTriangleEqual: '⊵',
        RightUpDownVector: '⥏',
        RightUpTeeVector: '⥜',
        RightUpVector: '↾',
        RightUpVectorBar: '⥔',
        RightVector: '⇀',
        RightVectorBar: '⥓',
        Rightarrow: '⇒',
        Ropf: 'ℝ',
        RoundImplies: '⥰',
        Rrightarrow: '⇛',
        Rscr: 'ℛ',
        Rsh: '↱',
        RuleDelayed: '⧴',
        SHCHcy: 'Щ',
        SHcy: 'Ш',
        SOFTcy: 'Ь',
        Sacute: 'Ś',
        Sc: '⪼',
        Scaron: 'Š',
        Scedil: 'Ş',
        Scirc: 'Ŝ',
        Scy: 'С',
        Sfr: '𝔖',
        ShortDownArrow: '↓',
        ShortLeftArrow: '←',
        ShortRightArrow: '→',
        ShortUpArrow: '↑',
        Sigma: 'Σ',
        SmallCircle: '∘',
        Sopf: '𝕊',
        Sqrt: '√',
        Square: '□',
        SquareIntersection: '⊓',
        SquareSubset: '⊏',
        SquareSubsetEqual: '⊑',
        SquareSuperset: '⊐',
        SquareSupersetEqual: '⊒',
        SquareUnion: '⊔',
        Sscr: '𝒮',
        Star: '⋆',
        Sub: '⋐',
        Subset: '⋐',
        SubsetEqual: '⊆',
        Succeeds: '≻',
        SucceedsEqual: '⪰',
        SucceedsSlantEqual: '≽',
        SucceedsTilde: '≿',
        SuchThat: '∋',
        Sum: '∑',
        Sup: '⋑',
        Superset: '⊃',
        SupersetEqual: '⊇',
        Supset: '⋑',
        THOR: 'Þ',
        THORN: 'Þ',
        TRADE: '™',
        TSHcy: 'Ћ',
        TScy: 'Ц',
        Tab: '	',
        Tau: 'Τ',
        Tcaron: 'Ť',
        Tcedil: 'Ţ',
        Tcy: 'Т',
        Tfr: '𝔗',
        Therefore: '∴',
        Theta: 'Θ',
        ThickSpace: '  ',
        ThinSpace: ' ',
        Tilde: '∼',
        TildeEqual: '≃',
        TildeFullEqual: '≅',
        TildeTilde: '≈',
        Topf: '𝕋',
        TripleDot: '⃛',
        Tscr: '𝒯',
        Tstrok: 'Ŧ',
        Uacut: 'Ú',
        Uacute: 'Ú',
        Uarr: '↟',
        Uarrocir: '⥉',
        Ubrcy: 'Ў',
        Ubreve: 'Ŭ',
        Ucir: 'Û',
        Ucirc: 'Û',
        Ucy: 'У',
        Udblac: 'Ű',
        Ufr: '𝔘',
        Ugrav: 'Ù',
        Ugrave: 'Ù',
        Umacr: 'Ū',
        UnderBar: '_',
        UnderBrace: '⏟',
        UnderBracket: '⎵',
        UnderParenthesis: '⏝',
        Union: '⋃',
        UnionPlus: '⊎',
        Uogon: 'Ų',
        Uopf: '𝕌',
        UpArrow: '↑',
        UpArrowBar: '⤒',
        UpArrowDownArrow: '⇅',
        UpDownArrow: '↕',
        UpEquilibrium: '⥮',
        UpTee: '⊥',
        UpTeeArrow: '↥',
        Uparrow: '⇑',
        Updownarrow: '⇕',
        UpperLeftArrow: '↖',
        UpperRightArrow: '↗',
        Upsi: 'ϒ',
        Upsilon: 'Υ',
        Uring: 'Ů',
        Uscr: '𝒰',
        Utilde: 'Ũ',
        Uum: 'Ü',
        Uuml: 'Ü',
        VDash: '⊫',
        Vbar: '⫫',
        Vcy: 'В',
        Vdash: '⊩',
        Vdashl: '⫦',
        Vee: '⋁',
        Verbar: '‖',
        Vert: '‖',
        VerticalBar: '∣',
        VerticalLine: '|',
        VerticalSeparator: '❘',
        VerticalTilde: '≀',
        VeryThinSpace: ' ',
        Vfr: '𝔙',
        Vopf: '𝕍',
        Vscr: '𝒱',
        Vvdash: '⊪',
        Wcirc: 'Ŵ',
        Wedge: '⋀',
        Wfr: '𝔚',
        Wopf: '𝕎',
        Wscr: '𝒲',
        Xfr: '𝔛',
        Xi: 'Ξ',
        Xopf: '𝕏',
        Xscr: '𝒳',
        YAcy: 'Я',
        YIcy: 'Ї',
        YUcy: 'Ю',
        Yacut: 'Ý',
        Yacute: 'Ý',
        Ycirc: 'Ŷ',
        Ycy: 'Ы',
        Yfr: '𝔜',
        Yopf: '𝕐',
        Yscr: '𝒴',
        Yuml: 'Ÿ',
        ZHcy: 'Ж',
        Zacute: 'Ź',
        Zcaron: 'Ž',
        Zcy: 'З',
        Zdot: 'Ż',
        ZeroWidthSpace: '​',
        Zeta: 'Ζ',
        Zfr: 'ℨ',
        Zopf: 'ℤ',
        Zscr: '𝒵',
        aacut: 'á',
        aacute: 'á',
        abreve: 'ă',
        ac: '∾',
        acE: '∾̳',
        acd: '∿',
        acir: 'â',
        acirc: 'â',
        acut: '´',
        acute: '´',
        acy: 'а',
        aeli: 'æ',
        aelig: 'æ',
        af: '⁡',
        afr: '𝔞',
        agrav: 'à',
        agrave: 'à',
        alefsym: 'ℵ',
        aleph: 'ℵ',
        alpha: 'α',
        amacr: 'ā',
        amalg: '⨿',
        am: '&',
        amp: '&',
        and: '∧',
        andand: '⩕',
        andd: '⩜',
        andslope: '⩘',
        andv: '⩚',
        ang: '∠',
        ange: '⦤',
        angle: '∠',
        angmsd: '∡',
        angmsdaa: '⦨',
        angmsdab: '⦩',
        angmsdac: '⦪',
        angmsdad: '⦫',
        angmsdae: '⦬',
        angmsdaf: '⦭',
        angmsdag: '⦮',
        angmsdah: '⦯',
        angrt: '∟',
        angrtvb: '⊾',
        angrtvbd: '⦝',
        angsph: '∢',
        angst: 'Å',
        angzarr: '⍼',
        aogon: 'ą',
        aopf: '𝕒',
        ap: '≈',
        apE: '⩰',
        apacir: '⩯',
        ape: '≊',
        apid: '≋',
        apos: "'",
        approx: '≈',
        approxeq: '≊',
        arin: 'å',
        aring: 'å',
        ascr: '𝒶',
        ast: '*',
        asymp: '≈',
        asympeq: '≍',
        atild: 'ã',
        atilde: 'ã',
        aum: 'ä',
        auml: 'ä',
        awconint: '∳',
        awint: '⨑',
        bNot: '⫭',
        backcong: '≌',
        backepsilon: '϶',
        backprime: '‵',
        backsim: '∽',
        backsimeq: '⋍',
        barvee: '⊽',
        barwed: '⌅',
        barwedge: '⌅',
        bbrk: '⎵',
        bbrktbrk: '⎶',
        bcong: '≌',
        bcy: 'б',
        bdquo: '„',
        becaus: '∵',
        because: '∵',
        bemptyv: '⦰',
        bepsi: '϶',
        bernou: 'ℬ',
        beta: 'β',
        beth: 'ℶ',
        between: '≬',
        bfr: '𝔟',
        bigcap: '⋂',
        bigcirc: '◯',
        bigcup: '⋃',
        bigodot: '⨀',
        bigoplus: '⨁',
        bigotimes: '⨂',
        bigsqcup: '⨆',
        bigstar: '★',
        bigtriangledown: '▽',
        bigtriangleup: '△',
        biguplus: '⨄',
        bigvee: '⋁',
        bigwedge: '⋀',
        bkarow: '⤍',
        blacklozenge: '⧫',
        blacksquare: '▪',
        blacktriangle: '▴',
        blacktriangledown: '▾',
        blacktriangleleft: '◂',
        blacktriangleright: '▸',
        blank: '␣',
        blk12: '▒',
        blk14: '░',
        blk34: '▓',
        block: '█',
        bne: '=⃥',
        bnequiv: '≡⃥',
        bnot: '⌐',
        bopf: '𝕓',
        bot: '⊥',
        bottom: '⊥',
        bowtie: '⋈',
        boxDL: '╗',
        boxDR: '╔',
        boxDl: '╖',
        boxDr: '╓',
        boxH: '═',
        boxHD: '╦',
        boxHU: '╩',
        boxHd: '╤',
        boxHu: '╧',
        boxUL: '╝',
        boxUR: '╚',
        boxUl: '╜',
        boxUr: '╙',
        boxV: '║',
        boxVH: '╬',
        boxVL: '╣',
        boxVR: '╠',
        boxVh: '╫',
        boxVl: '╢',
        boxVr: '╟',
        boxbox: '⧉',
        boxdL: '╕',
        boxdR: '╒',
        boxdl: '┐',
        boxdr: '┌',
        boxh: '─',
        boxhD: '╥',
        boxhU: '╨',
        boxhd: '┬',
        boxhu: '┴',
        boxminus: '⊟',
        boxplus: '⊞',
        boxtimes: '⊠',
        boxuL: '╛',
        boxuR: '╘',
        boxul: '┘',
        boxur: '└',
        boxv: '│',
        boxvH: '╪',
        boxvL: '╡',
        boxvR: '╞',
        boxvh: '┼',
        boxvl: '┤',
        boxvr: '├',
        bprime: '‵',
        breve: '˘',
        brvba: '¦',
        brvbar: '¦',
        bscr: '𝒷',
        bsemi: '⁏',
        bsim: '∽',
        bsime: '⋍',
        bsol: '\\',
        bsolb: '⧅',
        bsolhsub: '⟈',
        bull: '•',
        bullet: '•',
        bump: '≎',
        bumpE: '⪮',
        bumpe: '≏',
        bumpeq: '≏',
        cacute: 'ć',
        cap: '∩',
        capand: '⩄',
        capbrcup: '⩉',
        capcap: '⩋',
        capcup: '⩇',
        capdot: '⩀',
        caps: '∩︀',
        caret: '⁁',
        caron: 'ˇ',
        ccaps: '⩍',
        ccaron: 'č',
        ccedi: 'ç',
        ccedil: 'ç',
        ccirc: 'ĉ',
        ccups: '⩌',
        ccupssm: '⩐',
        cdot: 'ċ',
        cedi: '¸',
        cedil: '¸',
        cemptyv: '⦲',
        cen: '¢',
        cent: '¢',
        centerdot: '·',
        cfr: '𝔠',
        chcy: 'ч',
        check: '✓',
        checkmark: '✓',
        chi: 'χ',
        cir: '○',
        cirE: '⧃',
        circ: 'ˆ',
        circeq: '≗',
        circlearrowleft: '↺',
        circlearrowright: '↻',
        circledR: '®',
        circledS: 'Ⓢ',
        circledast: '⊛',
        circledcirc: '⊚',
        circleddash: '⊝',
        cire: '≗',
        cirfnint: '⨐',
        cirmid: '⫯',
        cirscir: '⧂',
        clubs: '♣',
        clubsuit: '♣',
        colon: ':',
        colone: '≔',
        coloneq: '≔',
        comma: ',',
        commat: '@',
        comp: '∁',
        compfn: '∘',
        complement: '∁',
        complexes: 'ℂ',
        cong: '≅',
        congdot: '⩭',
        conint: '∮',
        copf: '𝕔',
        coprod: '∐',
        cop: '©',
        copy: '©',
        copysr: '℗',
        crarr: '↵',
        cross: '✗',
        cscr: '𝒸',
        csub: '⫏',
        csube: '⫑',
        csup: '⫐',
        csupe: '⫒',
        ctdot: '⋯',
        cudarrl: '⤸',
        cudarrr: '⤵',
        cuepr: '⋞',
        cuesc: '⋟',
        cularr: '↶',
        cularrp: '⤽',
        cup: '∪',
        cupbrcap: '⩈',
        cupcap: '⩆',
        cupcup: '⩊',
        cupdot: '⊍',
        cupor: '⩅',
        cups: '∪︀',
        curarr: '↷',
        curarrm: '⤼',
        curlyeqprec: '⋞',
        curlyeqsucc: '⋟',
        curlyvee: '⋎',
        curlywedge: '⋏',
        curre: '¤',
        curren: '¤',
        curvearrowleft: '↶',
        curvearrowright: '↷',
        cuvee: '⋎',
        cuwed: '⋏',
        cwconint: '∲',
        cwint: '∱',
        cylcty: '⌭',
        dArr: '⇓',
        dHar: '⥥',
        dagger: '†',
        daleth: 'ℸ',
        darr: '↓',
        dash: '‐',
        dashv: '⊣',
        dbkarow: '⤏',
        dblac: '˝',
        dcaron: 'ď',
        dcy: 'д',
        dd: 'ⅆ',
        ddagger: '‡',
        ddarr: '⇊',
        ddotseq: '⩷',
        de: '°',
        deg: '°',
        delta: 'δ',
        demptyv: '⦱',
        dfisht: '⥿',
        dfr: '𝔡',
        dharl: '⇃',
        dharr: '⇂',
        diam: '⋄',
        diamond: '⋄',
        diamondsuit: '♦',
        diams: '♦',
        die: '¨',
        digamma: 'ϝ',
        disin: '⋲',
        div: '÷',
        divid: '÷',
        divide: '÷',
        divideontimes: '⋇',
        divonx: '⋇',
        djcy: 'ђ',
        dlcorn: '⌞',
        dlcrop: '⌍',
        dollar: '$',
        dopf: '𝕕',
        dot: '˙',
        doteq: '≐',
        doteqdot: '≑',
        dotminus: '∸',
        dotplus: '∔',
        dotsquare: '⊡',
        doublebarwedge: '⌆',
        downarrow: '↓',
        downdownarrows: '⇊',
        downharpoonleft: '⇃',
        downharpoonright: '⇂',
        drbkarow: '⤐',
        drcorn: '⌟',
        drcrop: '⌌',
        dscr: '𝒹',
        dscy: 'ѕ',
        dsol: '⧶',
        dstrok: 'đ',
        dtdot: '⋱',
        dtri: '▿',
        dtrif: '▾',
        duarr: '⇵',
        duhar: '⥯',
        dwangle: '⦦',
        dzcy: 'џ',
        dzigrarr: '⟿',
        eDDot: '⩷',
        eDot: '≑',
        eacut: 'é',
        eacute: 'é',
        easter: '⩮',
        ecaron: 'ě',
        ecir: 'ê',
        ecirc: 'ê',
        ecolon: '≕',
        ecy: 'э',
        edot: 'ė',
        ee: 'ⅇ',
        efDot: '≒',
        efr: '𝔢',
        eg: '⪚',
        egrav: 'è',
        egrave: 'è',
        egs: '⪖',
        egsdot: '⪘',
        el: '⪙',
        elinters: '⏧',
        ell: 'ℓ',
        els: '⪕',
        elsdot: '⪗',
        emacr: 'ē',
        empty: '∅',
        emptyset: '∅',
        emptyv: '∅',
        emsp13: ' ',
        emsp14: ' ',
        emsp: ' ',
        eng: 'ŋ',
        ensp: ' ',
        eogon: 'ę',
        eopf: '𝕖',
        epar: '⋕',
        eparsl: '⧣',
        eplus: '⩱',
        epsi: 'ε',
        epsilon: 'ε',
        epsiv: 'ϵ',
        eqcirc: '≖',
        eqcolon: '≕',
        eqsim: '≂',
        eqslantgtr: '⪖',
        eqslantless: '⪕',
        equals: '=',
        equest: '≟',
        equiv: '≡',
        equivDD: '⩸',
        eqvparsl: '⧥',
        erDot: '≓',
        erarr: '⥱',
        escr: 'ℯ',
        esdot: '≐',
        esim: '≂',
        eta: 'η',
        et: 'ð',
        eth: 'ð',
        eum: 'ë',
        euml: 'ë',
        euro: '€',
        excl: '!',
        exist: '∃',
        expectation: 'ℰ',
        exponentiale: 'ⅇ',
        fallingdotseq: '≒',
        fcy: 'ф',
        female: '♀',
        ffilig: 'ﬃ',
        fflig: 'ﬀ',
        ffllig: 'ﬄ',
        ffr: '𝔣',
        filig: 'ﬁ',
        fjlig: 'fj',
        flat: '♭',
        fllig: 'ﬂ',
        fltns: '▱',
        fnof: 'ƒ',
        fopf: '𝕗',
        forall: '∀',
        fork: '⋔',
        forkv: '⫙',
        fpartint: '⨍',
        frac1: '¼',
        frac12: '½',
        frac13: '⅓',
        frac14: '¼',
        frac15: '⅕',
        frac16: '⅙',
        frac18: '⅛',
        frac23: '⅔',
        frac25: '⅖',
        frac3: '¾',
        frac34: '¾',
        frac35: '⅗',
        frac38: '⅜',
        frac45: '⅘',
        frac56: '⅚',
        frac58: '⅝',
        frac78: '⅞',
        frasl: '⁄',
        frown: '⌢',
        fscr: '𝒻',
        gE: '≧',
        gEl: '⪌',
        gacute: 'ǵ',
        gamma: 'γ',
        gammad: 'ϝ',
        gap: '⪆',
        gbreve: 'ğ',
        gcirc: 'ĝ',
        gcy: 'г',
        gdot: 'ġ',
        ge: '≥',
        gel: '⋛',
        geq: '≥',
        geqq: '≧',
        geqslant: '⩾',
        ges: '⩾',
        gescc: '⪩',
        gesdot: '⪀',
        gesdoto: '⪂',
        gesdotol: '⪄',
        gesl: '⋛︀',
        gesles: '⪔',
        gfr: '𝔤',
        gg: '≫',
        ggg: '⋙',
        gimel: 'ℷ',
        gjcy: 'ѓ',
        gl: '≷',
        glE: '⪒',
        gla: '⪥',
        glj: '⪤',
        gnE: '≩',
        gnap: '⪊',
        gnapprox: '⪊',
        gne: '⪈',
        gneq: '⪈',
        gneqq: '≩',
        gnsim: '⋧',
        gopf: '𝕘',
        grave: '`',
        gscr: 'ℊ',
        gsim: '≳',
        gsime: '⪎',
        gsiml: '⪐',
        g: '>',
        gt: '>',
        gtcc: '⪧',
        gtcir: '⩺',
        gtdot: '⋗',
        gtlPar: '⦕',
        gtquest: '⩼',
        gtrapprox: '⪆',
        gtrarr: '⥸',
        gtrdot: '⋗',
        gtreqless: '⋛',
        gtreqqless: '⪌',
        gtrless: '≷',
        gtrsim: '≳',
        gvertneqq: '≩︀',
        gvnE: '≩︀',
        hArr: '⇔',
        hairsp: ' ',
        half: '½',
        hamilt: 'ℋ',
        hardcy: 'ъ',
        harr: '↔',
        harrcir: '⥈',
        harrw: '↭',
        hbar: 'ℏ',
        hcirc: 'ĥ',
        hearts: '♥',
        heartsuit: '♥',
        hellip: '…',
        hercon: '⊹',
        hfr: '𝔥',
        hksearow: '⤥',
        hkswarow: '⤦',
        hoarr: '⇿',
        homtht: '∻',
        hookleftarrow: '↩',
        hookrightarrow: '↪',
        hopf: '𝕙',
        horbar: '―',
        hscr: '𝒽',
        hslash: 'ℏ',
        hstrok: 'ħ',
        hybull: '⁃',
        hyphen: '‐',
        iacut: 'í',
        iacute: 'í',
        ic: '⁣',
        icir: 'î',
        icirc: 'î',
        icy: 'и',
        iecy: 'е',
        iexc: '¡',
        iexcl: '¡',
        iff: '⇔',
        ifr: '𝔦',
        igrav: 'ì',
        igrave: 'ì',
        ii: 'ⅈ',
        iiiint: '⨌',
        iiint: '∭',
        iinfin: '⧜',
        iiota: '℩',
        ijlig: 'ĳ',
        imacr: 'ī',
        image: 'ℑ',
        imagline: 'ℐ',
        imagpart: 'ℑ',
        imath: 'ı',
        imof: '⊷',
        imped: 'Ƶ',
        in: '∈',
        incare: '℅',
        infin: '∞',
        infintie: '⧝',
        inodot: 'ı',
        int: '∫',
        intcal: '⊺',
        integers: 'ℤ',
        intercal: '⊺',
        intlarhk: '⨗',
        intprod: '⨼',
        iocy: 'ё',
        iogon: 'į',
        iopf: '𝕚',
        iota: 'ι',
        iprod: '⨼',
        iques: '¿',
        iquest: '¿',
        iscr: '𝒾',
        isin: '∈',
        isinE: '⋹',
        isindot: '⋵',
        isins: '⋴',
        isinsv: '⋳',
        isinv: '∈',
        it: '⁢',
        itilde: 'ĩ',
        iukcy: 'і',
        ium: 'ï',
        iuml: 'ï',
        jcirc: 'ĵ',
        jcy: 'й',
        jfr: '𝔧',
        jmath: 'ȷ',
        jopf: '𝕛',
        jscr: '𝒿',
        jsercy: 'ј',
        jukcy: 'є',
        kappa: 'κ',
        kappav: 'ϰ',
        kcedil: 'ķ',
        kcy: 'к',
        kfr: '𝔨',
        kgreen: 'ĸ',
        khcy: 'х',
        kjcy: 'ќ',
        kopf: '𝕜',
        kscr: '𝓀',
        lAarr: '⇚',
        lArr: '⇐',
        lAtail: '⤛',
        lBarr: '⤎',
        lE: '≦',
        lEg: '⪋',
        lHar: '⥢',
        lacute: 'ĺ',
        laemptyv: '⦴',
        lagran: 'ℒ',
        lambda: 'λ',
        lang: '⟨',
        langd: '⦑',
        langle: '⟨',
        lap: '⪅',
        laqu: '«',
        laquo: '«',
        larr: '←',
        larrb: '⇤',
        larrbfs: '⤟',
        larrfs: '⤝',
        larrhk: '↩',
        larrlp: '↫',
        larrpl: '⤹',
        larrsim: '⥳',
        larrtl: '↢',
        lat: '⪫',
        latail: '⤙',
        late: '⪭',
        lates: '⪭︀',
        lbarr: '⤌',
        lbbrk: '❲',
        lbrace: '{',
        lbrack: '[',
        lbrke: '⦋',
        lbrksld: '⦏',
        lbrkslu: '⦍',
        lcaron: 'ľ',
        lcedil: 'ļ',
        lceil: '⌈',
        lcub: '{',
        lcy: 'л',
        ldca: '⤶',
        ldquo: '“',
        ldquor: '„',
        ldrdhar: '⥧',
        ldrushar: '⥋',
        ldsh: '↲',
        le: '≤',
        leftarrow: '←',
        leftarrowtail: '↢',
        leftharpoondown: '↽',
        leftharpoonup: '↼',
        leftleftarrows: '⇇',
        leftrightarrow: '↔',
        leftrightarrows: '⇆',
        leftrightharpoons: '⇋',
        leftrightsquigarrow: '↭',
        leftthreetimes: '⋋',
        leg: '⋚',
        leq: '≤',
        leqq: '≦',
        leqslant: '⩽',
        les: '⩽',
        lescc: '⪨',
        lesdot: '⩿',
        lesdoto: '⪁',
        lesdotor: '⪃',
        lesg: '⋚︀',
        lesges: '⪓',
        lessapprox: '⪅',
        lessdot: '⋖',
        lesseqgtr: '⋚',
        lesseqqgtr: '⪋',
        lessgtr: '≶',
        lesssim: '≲',
        lfisht: '⥼',
        lfloor: '⌊',
        lfr: '𝔩',
        lg: '≶',
        lgE: '⪑',
        lhard: '↽',
        lharu: '↼',
        lharul: '⥪',
        lhblk: '▄',
        ljcy: 'љ',
        ll: '≪',
        llarr: '⇇',
        llcorner: '⌞',
        llhard: '⥫',
        lltri: '◺',
        lmidot: 'ŀ',
        lmoust: '⎰',
        lmoustache: '⎰',
        lnE: '≨',
        lnap: '⪉',
        lnapprox: '⪉',
        lne: '⪇',
        lneq: '⪇',
        lneqq: '≨',
        lnsim: '⋦',
        loang: '⟬',
        loarr: '⇽',
        lobrk: '⟦',
        longleftarrow: '⟵',
        longleftrightarrow: '⟷',
        longmapsto: '⟼',
        longrightarrow: '⟶',
        looparrowleft: '↫',
        looparrowright: '↬',
        lopar: '⦅',
        lopf: '𝕝',
        loplus: '⨭',
        lotimes: '⨴',
        lowast: '∗',
        lowbar: '_',
        loz: '◊',
        lozenge: '◊',
        lozf: '⧫',
        lpar: '(',
        lparlt: '⦓',
        lrarr: '⇆',
        lrcorner: '⌟',
        lrhar: '⇋',
        lrhard: '⥭',
        lrm: '‎',
        lrtri: '⊿',
        lsaquo: '‹',
        lscr: '𝓁',
        lsh: '↰',
        lsim: '≲',
        lsime: '⪍',
        lsimg: '⪏',
        lsqb: '[',
        lsquo: '‘',
        lsquor: '‚',
        lstrok: 'ł',
        l: '<',
        lt: '<',
        ltcc: '⪦',
        ltcir: '⩹',
        ltdot: '⋖',
        lthree: '⋋',
        ltimes: '⋉',
        ltlarr: '⥶',
        ltquest: '⩻',
        ltrPar: '⦖',
        ltri: '◃',
        ltrie: '⊴',
        ltrif: '◂',
        lurdshar: '⥊',
        luruhar: '⥦',
        lvertneqq: '≨︀',
        lvnE: '≨︀',
        mDDot: '∺',
        mac: '¯',
        macr: '¯',
        male: '♂',
        malt: '✠',
        maltese: '✠',
        map: '↦',
        mapsto: '↦',
        mapstodown: '↧',
        mapstoleft: '↤',
        mapstoup: '↥',
        marker: '▮',
        mcomma: '⨩',
        mcy: 'м',
        mdash: '—',
        measuredangle: '∡',
        mfr: '𝔪',
        mho: '℧',
        micr: 'µ',
        micro: 'µ',
        mid: '∣',
        midast: '*',
        midcir: '⫰',
        middo: '·',
        middot: '·',
        minus: '−',
        minusb: '⊟',
        minusd: '∸',
        minusdu: '⨪',
        mlcp: '⫛',
        mldr: '…',
        mnplus: '∓',
        models: '⊧',
        mopf: '𝕞',
        mp: '∓',
        mscr: '𝓂',
        mstpos: '∾',
        mu: 'μ',
        multimap: '⊸',
        mumap: '⊸',
        nGg: '⋙̸',
        nGt: '≫⃒',
        nGtv: '≫̸',
        nLeftarrow: '⇍',
        nLeftrightarrow: '⇎',
        nLl: '⋘̸',
        nLt: '≪⃒',
        nLtv: '≪̸',
        nRightarrow: '⇏',
        nVDash: '⊯',
        nVdash: '⊮',
        nabla: '∇',
        nacute: 'ń',
        nang: '∠⃒',
        nap: '≉',
        napE: '⩰̸',
        napid: '≋̸',
        napos: 'ŉ',
        napprox: '≉',
        natur: '♮',
        natural: '♮',
        naturals: 'ℕ',
        nbs: ' ',
        nbsp: ' ',
        nbump: '≎̸',
        nbumpe: '≏̸',
        ncap: '⩃',
        ncaron: 'ň',
        ncedil: 'ņ',
        ncong: '≇',
        ncongdot: '⩭̸',
        ncup: '⩂',
        ncy: 'н',
        ndash: '–',
        ne: '≠',
        neArr: '⇗',
        nearhk: '⤤',
        nearr: '↗',
        nearrow: '↗',
        nedot: '≐̸',
        nequiv: '≢',
        nesear: '⤨',
        nesim: '≂̸',
        nexist: '∄',
        nexists: '∄',
        nfr: '𝔫',
        ngE: '≧̸',
        nge: '≱',
        ngeq: '≱',
        ngeqq: '≧̸',
        ngeqslant: '⩾̸',
        nges: '⩾̸',
        ngsim: '≵',
        ngt: '≯',
        ngtr: '≯',
        nhArr: '⇎',
        nharr: '↮',
        nhpar: '⫲',
        ni: '∋',
        nis: '⋼',
        nisd: '⋺',
        niv: '∋',
        njcy: 'њ',
        nlArr: '⇍',
        nlE: '≦̸',
        nlarr: '↚',
        nldr: '‥',
        nle: '≰',
        nleftarrow: '↚',
        nleftrightarrow: '↮',
        nleq: '≰',
        nleqq: '≦̸',
        nleqslant: '⩽̸',
        nles: '⩽̸',
        nless: '≮',
        nlsim: '≴',
        nlt: '≮',
        nltri: '⋪',
        nltrie: '⋬',
        nmid: '∤',
        nopf: '𝕟',
        no: '¬',
        not: '¬',
        notin: '∉',
        notinE: '⋹̸',
        notindot: '⋵̸',
        notinva: '∉',
        notinvb: '⋷',
        notinvc: '⋶',
        notni: '∌',
        notniva: '∌',
        notnivb: '⋾',
        notnivc: '⋽',
        npar: '∦',
        nparallel: '∦',
        nparsl: '⫽⃥',
        npart: '∂̸',
        npolint: '⨔',
        npr: '⊀',
        nprcue: '⋠',
        npre: '⪯̸',
        nprec: '⊀',
        npreceq: '⪯̸',
        nrArr: '⇏',
        nrarr: '↛',
        nrarrc: '⤳̸',
        nrarrw: '↝̸',
        nrightarrow: '↛',
        nrtri: '⋫',
        nrtrie: '⋭',
        nsc: '⊁',
        nsccue: '⋡',
        nsce: '⪰̸',
        nscr: '𝓃',
        nshortmid: '∤',
        nshortparallel: '∦',
        nsim: '≁',
        nsime: '≄',
        nsimeq: '≄',
        nsmid: '∤',
        nspar: '∦',
        nsqsube: '⋢',
        nsqsupe: '⋣',
        nsub: '⊄',
        nsubE: '⫅̸',
        nsube: '⊈',
        nsubset: '⊂⃒',
        nsubseteq: '⊈',
        nsubseteqq: '⫅̸',
        nsucc: '⊁',
        nsucceq: '⪰̸',
        nsup: '⊅',
        nsupE: '⫆̸',
        nsupe: '⊉',
        nsupset: '⊃⃒',
        nsupseteq: '⊉',
        nsupseteqq: '⫆̸',
        ntgl: '≹',
        ntild: 'ñ',
        ntilde: 'ñ',
        ntlg: '≸',
        ntriangleleft: '⋪',
        ntrianglelefteq: '⋬',
        ntriangleright: '⋫',
        ntrianglerighteq: '⋭',
        nu: 'ν',
        num: '#',
        numero: '№',
        numsp: ' ',
        nvDash: '⊭',
        nvHarr: '⤄',
        nvap: '≍⃒',
        nvdash: '⊬',
        nvge: '≥⃒',
        nvgt: '>⃒',
        nvinfin: '⧞',
        nvlArr: '⤂',
        nvle: '≤⃒',
        nvlt: '<⃒',
        nvltrie: '⊴⃒',
        nvrArr: '⤃',
        nvrtrie: '⊵⃒',
        nvsim: '∼⃒',
        nwArr: '⇖',
        nwarhk: '⤣',
        nwarr: '↖',
        nwarrow: '↖',
        nwnear: '⤧',
        oS: 'Ⓢ',
        oacut: 'ó',
        oacute: 'ó',
        oast: '⊛',
        ocir: 'ô',
        ocirc: 'ô',
        ocy: 'о',
        odash: '⊝',
        odblac: 'ő',
        odiv: '⨸',
        odot: '⊙',
        odsold: '⦼',
        oelig: 'œ',
        ofcir: '⦿',
        ofr: '𝔬',
        ogon: '˛',
        ograv: 'ò',
        ograve: 'ò',
        ogt: '⧁',
        ohbar: '⦵',
        ohm: 'Ω',
        oint: '∮',
        olarr: '↺',
        olcir: '⦾',
        olcross: '⦻',
        oline: '‾',
        olt: '⧀',
        omacr: 'ō',
        omega: 'ω',
        omicron: 'ο',
        omid: '⦶',
        ominus: '⊖',
        oopf: '𝕠',
        opar: '⦷',
        operp: '⦹',
        oplus: '⊕',
        or: '∨',
        orarr: '↻',
        ord: 'º',
        order: 'ℴ',
        orderof: 'ℴ',
        ordf: 'ª',
        ordm: 'º',
        origof: '⊶',
        oror: '⩖',
        orslope: '⩗',
        orv: '⩛',
        oscr: 'ℴ',
        oslas: 'ø',
        oslash: 'ø',
        osol: '⊘',
        otild: 'õ',
        otilde: 'õ',
        otimes: '⊗',
        otimesas: '⨶',
        oum: 'ö',
        ouml: 'ö',
        ovbar: '⌽',
        par: '¶',
        para: '¶',
        parallel: '∥',
        parsim: '⫳',
        parsl: '⫽',
        part: '∂',
        pcy: 'п',
        percnt: '%',
        period: '.',
        permil: '‰',
        perp: '⊥',
        pertenk: '‱',
        pfr: '𝔭',
        phi: 'φ',
        phiv: 'ϕ',
        phmmat: 'ℳ',
        phone: '☎',
        pi: 'π',
        pitchfork: '⋔',
        piv: 'ϖ',
        planck: 'ℏ',
        planckh: 'ℎ',
        plankv: 'ℏ',
        plus: '+',
        plusacir: '⨣',
        plusb: '⊞',
        pluscir: '⨢',
        plusdo: '∔',
        plusdu: '⨥',
        pluse: '⩲',
        plusm: '±',
        plusmn: '±',
        plussim: '⨦',
        plustwo: '⨧',
        pm: '±',
        pointint: '⨕',
        popf: '𝕡',
        poun: '£',
        pound: '£',
        pr: '≺',
        prE: '⪳',
        prap: '⪷',
        prcue: '≼',
        pre: '⪯',
        prec: '≺',
        precapprox: '⪷',
        preccurlyeq: '≼',
        preceq: '⪯',
        precnapprox: '⪹',
        precneqq: '⪵',
        precnsim: '⋨',
        precsim: '≾',
        prime: '′',
        primes: 'ℙ',
        prnE: '⪵',
        prnap: '⪹',
        prnsim: '⋨',
        prod: '∏',
        profalar: '⌮',
        profline: '⌒',
        profsurf: '⌓',
        prop: '∝',
        propto: '∝',
        prsim: '≾',
        prurel: '⊰',
        pscr: '𝓅',
        psi: 'ψ',
        puncsp: ' ',
        qfr: '𝔮',
        qint: '⨌',
        qopf: '𝕢',
        qprime: '⁗',
        qscr: '𝓆',
        quaternions: 'ℍ',
        quatint: '⨖',
        quest: '?',
        questeq: '≟',
        quo: '"',
        quot: '"',
        rAarr: '⇛',
        rArr: '⇒',
        rAtail: '⤜',
        rBarr: '⤏',
        rHar: '⥤',
        race: '∽̱',
        racute: 'ŕ',
        radic: '√',
        raemptyv: '⦳',
        rang: '⟩',
        rangd: '⦒',
        range: '⦥',
        rangle: '⟩',
        raqu: '»',
        raquo: '»',
        rarr: '→',
        rarrap: '⥵',
        rarrb: '⇥',
        rarrbfs: '⤠',
        rarrc: '⤳',
        rarrfs: '⤞',
        rarrhk: '↪',
        rarrlp: '↬',
        rarrpl: '⥅',
        rarrsim: '⥴',
        rarrtl: '↣',
        rarrw: '↝',
        ratail: '⤚',
        ratio: '∶',
        rationals: 'ℚ',
        rbarr: '⤍',
        rbbrk: '❳',
        rbrace: '}',
        rbrack: ']',
        rbrke: '⦌',
        rbrksld: '⦎',
        rbrkslu: '⦐',
        rcaron: 'ř',
        rcedil: 'ŗ',
        rceil: '⌉',
        rcub: '}',
        rcy: 'р',
        rdca: '⤷',
        rdldhar: '⥩',
        rdquo: '”',
        rdquor: '”',
        rdsh: '↳',
        real: 'ℜ',
        realine: 'ℛ',
        realpart: 'ℜ',
        reals: 'ℝ',
        rect: '▭',
        re: '®',
        reg: '®',
        rfisht: '⥽',
        rfloor: '⌋',
        rfr: '𝔯',
        rhard: '⇁',
        rharu: '⇀',
        rharul: '⥬',
        rho: 'ρ',
        rhov: 'ϱ',
        rightarrow: '→',
        rightarrowtail: '↣',
        rightharpoondown: '⇁',
        rightharpoonup: '⇀',
        rightleftarrows: '⇄',
        rightleftharpoons: '⇌',
        rightrightarrows: '⇉',
        rightsquigarrow: '↝',
        rightthreetimes: '⋌',
        ring: '˚',
        risingdotseq: '≓',
        rlarr: '⇄',
        rlhar: '⇌',
        rlm: '‏',
        rmoust: '⎱',
        rmoustache: '⎱',
        rnmid: '⫮',
        roang: '⟭',
        roarr: '⇾',
        robrk: '⟧',
        ropar: '⦆',
        ropf: '𝕣',
        roplus: '⨮',
        rotimes: '⨵',
        rpar: ')',
        rpargt: '⦔',
        rppolint: '⨒',
        rrarr: '⇉',
        rsaquo: '›',
        rscr: '𝓇',
        rsh: '↱',
        rsqb: ']',
        rsquo: '’',
        rsquor: '’',
        rthree: '⋌',
        rtimes: '⋊',
        rtri: '▹',
        rtrie: '⊵',
        rtrif: '▸',
        rtriltri: '⧎',
        ruluhar: '⥨',
        rx: '℞',
        sacute: 'ś',
        sbquo: '‚',
        sc: '≻',
        scE: '⪴',
        scap: '⪸',
        scaron: 'š',
        sccue: '≽',
        sce: '⪰',
        scedil: 'ş',
        scirc: 'ŝ',
        scnE: '⪶',
        scnap: '⪺',
        scnsim: '⋩',
        scpolint: '⨓',
        scsim: '≿',
        scy: 'с',
        sdot: '⋅',
        sdotb: '⊡',
        sdote: '⩦',
        seArr: '⇘',
        searhk: '⤥',
        searr: '↘',
        searrow: '↘',
        sec: '§',
        sect: '§',
        semi: ';',
        seswar: '⤩',
        setminus: '∖',
        setmn: '∖',
        sext: '✶',
        sfr: '𝔰',
        sfrown: '⌢',
        sharp: '♯',
        shchcy: 'щ',
        shcy: 'ш',
        shortmid: '∣',
        shortparallel: '∥',
        sh: '­',
        shy: '­',
        sigma: 'σ',
        sigmaf: 'ς',
        sigmav: 'ς',
        sim: '∼',
        simdot: '⩪',
        sime: '≃',
        simeq: '≃',
        simg: '⪞',
        simgE: '⪠',
        siml: '⪝',
        simlE: '⪟',
        simne: '≆',
        simplus: '⨤',
        simrarr: '⥲',
        slarr: '←',
        smallsetminus: '∖',
        smashp: '⨳',
        smeparsl: '⧤',
        smid: '∣',
        smile: '⌣',
        smt: '⪪',
        smte: '⪬',
        smtes: '⪬︀',
        softcy: 'ь',
        sol: '/',
        solb: '⧄',
        solbar: '⌿',
        sopf: '𝕤',
        spades: '♠',
        spadesuit: '♠',
        spar: '∥',
        sqcap: '⊓',
        sqcaps: '⊓︀',
        sqcup: '⊔',
        sqcups: '⊔︀',
        sqsub: '⊏',
        sqsube: '⊑',
        sqsubset: '⊏',
        sqsubseteq: '⊑',
        sqsup: '⊐',
        sqsupe: '⊒',
        sqsupset: '⊐',
        sqsupseteq: '⊒',
        squ: '□',
        square: '□',
        squarf: '▪',
        squf: '▪',
        srarr: '→',
        sscr: '𝓈',
        ssetmn: '∖',
        ssmile: '⌣',
        sstarf: '⋆',
        star: '☆',
        starf: '★',
        straightepsilon: 'ϵ',
        straightphi: 'ϕ',
        strns: '¯',
        sub: '⊂',
        subE: '⫅',
        subdot: '⪽',
        sube: '⊆',
        subedot: '⫃',
        submult: '⫁',
        subnE: '⫋',
        subne: '⊊',
        subplus: '⪿',
        subrarr: '⥹',
        subset: '⊂',
        subseteq: '⊆',
        subseteqq: '⫅',
        subsetneq: '⊊',
        subsetneqq: '⫋',
        subsim: '⫇',
        subsub: '⫕',
        subsup: '⫓',
        succ: '≻',
        succapprox: '⪸',
        succcurlyeq: '≽',
        succeq: '⪰',
        succnapprox: '⪺',
        succneqq: '⪶',
        succnsim: '⋩',
        succsim: '≿',
        sum: '∑',
        sung: '♪',
        sup: '⊃',
        sup1: '¹',
        sup2: '²',
        sup3: '³',
        supE: '⫆',
        supdot: '⪾',
        supdsub: '⫘',
        supe: '⊇',
        supedot: '⫄',
        suphsol: '⟉',
        suphsub: '⫗',
        suplarr: '⥻',
        supmult: '⫂',
        supnE: '⫌',
        supne: '⊋',
        supplus: '⫀',
        supset: '⊃',
        supseteq: '⊇',
        supseteqq: '⫆',
        supsetneq: '⊋',
        supsetneqq: '⫌',
        supsim: '⫈',
        supsub: '⫔',
        supsup: '⫖',
        swArr: '⇙',
        swarhk: '⤦',
        swarr: '↙',
        swarrow: '↙',
        swnwar: '⤪',
        szli: 'ß',
        szlig: 'ß',
        target: '⌖',
        tau: 'τ',
        tbrk: '⎴',
        tcaron: 'ť',
        tcedil: 'ţ',
        tcy: 'т',
        tdot: '⃛',
        telrec: '⌕',
        tfr: '𝔱',
        there4: '∴',
        therefore: '∴',
        theta: 'θ',
        thetasym: 'ϑ',
        thetav: 'ϑ',
        thickapprox: '≈',
        thicksim: '∼',
        thinsp: ' ',
        thkap: '≈',
        thksim: '∼',
        thor: 'þ',
        thorn: 'þ',
        tilde: '˜',
        time: '×',
        times: '×',
        timesb: '⊠',
        timesbar: '⨱',
        timesd: '⨰',
        tint: '∭',
        toea: '⤨',
        top: '⊤',
        topbot: '⌶',
        topcir: '⫱',
        topf: '𝕥',
        topfork: '⫚',
        tosa: '⤩',
        tprime: '‴',
        trade: '™',
        triangle: '▵',
        triangledown: '▿',
        triangleleft: '◃',
        trianglelefteq: '⊴',
        triangleq: '≜',
        triangleright: '▹',
        trianglerighteq: '⊵',
        tridot: '◬',
        trie: '≜',
        triminus: '⨺',
        triplus: '⨹',
        trisb: '⧍',
        tritime: '⨻',
        trpezium: '⏢',
        tscr: '𝓉',
        tscy: 'ц',
        tshcy: 'ћ',
        tstrok: 'ŧ',
        twixt: '≬',
        twoheadleftarrow: '↞',
        twoheadrightarrow: '↠',
        uArr: '⇑',
        uHar: '⥣',
        uacut: 'ú',
        uacute: 'ú',
        uarr: '↑',
        ubrcy: 'ў',
        ubreve: 'ŭ',
        ucir: 'û',
        ucirc: 'û',
        ucy: 'у',
        udarr: '⇅',
        udblac: 'ű',
        udhar: '⥮',
        ufisht: '⥾',
        ufr: '𝔲',
        ugrav: 'ù',
        ugrave: 'ù',
        uharl: '↿',
        uharr: '↾',
        uhblk: '▀',
        ulcorn: '⌜',
        ulcorner: '⌜',
        ulcrop: '⌏',
        ultri: '◸',
        umacr: 'ū',
        um: '¨',
        uml: '¨',
        uogon: 'ų',
        uopf: '𝕦',
        uparrow: '↑',
        updownarrow: '↕',
        upharpoonleft: '↿',
        upharpoonright: '↾',
        uplus: '⊎',
        upsi: 'υ',
        upsih: 'ϒ',
        upsilon: 'υ',
        upuparrows: '⇈',
        urcorn: '⌝',
        urcorner: '⌝',
        urcrop: '⌎',
        uring: 'ů',
        urtri: '◹',
        uscr: '𝓊',
        utdot: '⋰',
        utilde: 'ũ',
        utri: '▵',
        utrif: '▴',
        uuarr: '⇈',
        uum: 'ü',
        uuml: 'ü',
        uwangle: '⦧',
        vArr: '⇕',
        vBar: '⫨',
        vBarv: '⫩',
        vDash: '⊨',
        vangrt: '⦜',
        varepsilon: 'ϵ',
        varkappa: 'ϰ',
        varnothing: '∅',
        varphi: 'ϕ',
        varpi: 'ϖ',
        varpropto: '∝',
        varr: '↕',
        varrho: 'ϱ',
        varsigma: 'ς',
        varsubsetneq: '⊊︀',
        varsubsetneqq: '⫋︀',
        varsupsetneq: '⊋︀',
        varsupsetneqq: '⫌︀',
        vartheta: 'ϑ',
        vartriangleleft: '⊲',
        vartriangleright: '⊳',
        vcy: 'в',
        vdash: '⊢',
        vee: '∨',
        veebar: '⊻',
        veeeq: '≚',
        vellip: '⋮',
        verbar: '|',
        vert: '|',
        vfr: '𝔳',
        vltri: '⊲',
        vnsub: '⊂⃒',
        vnsup: '⊃⃒',
        vopf: '𝕧',
        vprop: '∝',
        vrtri: '⊳',
        vscr: '𝓋',
        vsubnE: '⫋︀',
        vsubne: '⊊︀',
        vsupnE: '⫌︀',
        vsupne: '⊋︀',
        vzigzag: '⦚',
        wcirc: 'ŵ',
        wedbar: '⩟',
        wedge: '∧',
        wedgeq: '≙',
        weierp: '℘',
        wfr: '𝔴',
        wopf: '𝕨',
        wp: '℘',
        wr: '≀',
        wreath: '≀',
        wscr: '𝓌',
        xcap: '⋂',
        xcirc: '◯',
        xcup: '⋃',
        xdtri: '▽',
        xfr: '𝔵',
        xhArr: '⟺',
        xharr: '⟷',
        xi: 'ξ',
        xlArr: '⟸',
        xlarr: '⟵',
        xmap: '⟼',
        xnis: '⋻',
        xodot: '⨀',
        xopf: '𝕩',
        xoplus: '⨁',
        xotime: '⨂',
        xrArr: '⟹',
        xrarr: '⟶',
        xscr: '𝓍',
        xsqcup: '⨆',
        xuplus: '⨄',
        xutri: '△',
        xvee: '⋁',
        xwedge: '⋀',
        yacut: 'ý',
        yacute: 'ý',
        yacy: 'я',
        ycirc: 'ŷ',
        ycy: 'ы',
        ye: '¥',
        yen: '¥',
        yfr: '𝔶',
        yicy: 'ї',
        yopf: '𝕪',
        yscr: '𝓎',
        yucy: 'ю',
        yum: 'ÿ',
        yuml: 'ÿ',
        zacute: 'ź',
        zcaron: 'ž',
        zcy: 'з',
        zdot: 'ż',
        zeetrf: 'ℨ',
        zeta: 'ζ',
        zfr: '𝔷',
        zhcy: 'ж',
        zigrarr: '⇝',
        zopf: '𝕫',
        zscr: '𝓏',
        zwj: '‍',
        zwnj: '‌',
      };
    },
  }),
  v2 = Z({
    '../../node_modules/parse-entities/decode-entity.js'(e, t) {
      var r = y2();
      t.exports = a;
      var n = {}.hasOwnProperty;
      function a(l) {
        return n.call(r, l) ? r[l] : !1;
      }
    },
  }),
  E2 = Z({
    '../../node_modules/parse-entities/index.js'(e, t) {
      var r = f2(),
        n = m2(),
        a = bu(),
        l = g2(),
        i = b2(),
        u = v2();
      t.exports = Y;
      var s = {}.hasOwnProperty,
        c = String.fromCharCode,
        d = Function.prototype,
        f = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0,
        },
        m = 9,
        p = 10,
        h = 12,
        g = 32,
        w = 38,
        x = 59,
        v = 60,
        y = 61,
        E = 35,
        A = 88,
        S = 120,
        C = 65533,
        k = 'named',
        O = 'hexadecimal',
        T = 'decimal',
        R = {};
      (R[O] = 16), (R[T] = 10);
      var F = {};
      (F[k] = i), (F[T] = a), (F[O] = l);
      var $ = 1,
        P = 2,
        D = 3,
        L = 4,
        N = 5,
        V = 6,
        B = 7,
        H = {};
      (H[$] = 'Named character references must be terminated by a semicolon'),
        (H[P] =
          'Numeric character references must be terminated by a semicolon'),
        (H[D] = 'Named character references cannot be empty'),
        (H[L] = 'Numeric character references cannot be empty'),
        (H[N] = 'Named character references must be known'),
        (H[V] = 'Numeric character references cannot be disallowed'),
        (H[B] =
          'Numeric character references cannot be outside the permissible Unicode range');
      function Y(I, z) {
        var q = {},
          ie,
          he;
        z || (z = {});
        for (he in f) (ie = z[he]), (q[he] = ie ?? f[he]);
        return (
          (q.position.indent || q.position.start) &&
            ((q.indent = q.position.indent || []),
            (q.position = q.position.start)),
          te(I, q)
        );
      }
      function te(I, z) {
        var q = z.additional,
          ie = z.nonTerminated,
          he = z.text,
          ut = z.reference,
          Fe = z.warning,
          Ve = z.textContext,
          M = z.referenceContext,
          je = z.warningContext,
          ze = z.position,
          Ot = z.indent || [],
          Wt = I.length,
          qe = 0,
          en = -1,
          be = ze.column || 1,
          Tt = ze.line || 1,
          Ue = '',
          Gt = [],
          We,
          Yt,
          Ge,
          pe,
          Ne,
          se,
          re,
          Ye,
          tn,
          la,
          Rt,
          vr,
          Ft,
          ct,
          Dl,
          Er,
          rn,
          Ke,
          ue;
        for (
          typeof q == 'string' && (q = q.charCodeAt(0)),
            Er = xr(),
            Ye = Fe ? q0 : d,
            qe--,
            Wt++;
          ++qe < Wt;

        )
          if (
            (Ne === p && (be = Ot[en] || 1), (Ne = I.charCodeAt(qe)), Ne === w)
          ) {
            if (
              ((re = I.charCodeAt(qe + 1)),
              re === m ||
                re === p ||
                re === h ||
                re === g ||
                re === w ||
                re === v ||
                re !== re ||
                (q && re === q))
            ) {
              (Ue += c(Ne)), be++;
              continue;
            }
            for (
              Ft = qe + 1,
                vr = Ft,
                ue = Ft,
                re === E
                  ? ((ue = ++vr),
                    (re = I.charCodeAt(ue)),
                    re === A || re === S ? ((ct = O), (ue = ++vr)) : (ct = T))
                  : (ct = k),
                We = '',
                Rt = '',
                pe = '',
                Dl = F[ct],
                ue--;
              ++ue < Wt && ((re = I.charCodeAt(ue)), !!Dl(re));

            )
              (pe += c(re)),
                ct === k && s.call(r, pe) && ((We = pe), (Rt = r[pe]));
            (Ge = I.charCodeAt(ue) === x),
              Ge &&
                (ue++,
                (Yt = ct === k ? u(pe) : !1),
                Yt && ((We = pe), (Rt = Yt))),
              (Ke = 1 + ue - Ft),
              (!Ge && !ie) ||
                (pe
                  ? ct === k
                    ? (Ge && !Rt
                        ? Ye(N, 1)
                        : (We !== pe &&
                            ((ue = vr + We.length),
                            (Ke = 1 + ue - vr),
                            (Ge = !1)),
                          Ge ||
                            ((tn = We ? $ : D),
                            z.attribute
                              ? ((re = I.charCodeAt(ue)),
                                re === y
                                  ? (Ye(tn, Ke), (Rt = null))
                                  : i(re)
                                    ? (Rt = null)
                                    : Ye(tn, Ke))
                              : Ye(tn, Ke))),
                      (se = Rt))
                    : (Ge || Ye(P, Ke),
                      (se = parseInt(pe, R[ct])),
                      G(se)
                        ? (Ye(B, Ke), (se = c(C)))
                        : se in n
                          ? (Ye(V, Ke), (se = n[se]))
                          : ((la = ''),
                            K(se) && Ye(V, Ke),
                            se > 65535 &&
                              ((se -= 65536),
                              (la += c((se >>> 10) | 55296)),
                              (se = 56320 | (se & 1023))),
                            (se = la + c(se))))
                  : ct !== k && Ye(L, Ke)),
              se
                ? (Ll(),
                  (Er = xr()),
                  (qe = ue - 1),
                  (be += ue - Ft + 1),
                  Gt.push(se),
                  (rn = xr()),
                  rn.offset++,
                  ut &&
                    ut.call(M, se, { start: Er, end: rn }, I.slice(Ft - 1, ue)),
                  (Er = rn))
                : ((pe = I.slice(Ft - 1, ue)),
                  (Ue += pe),
                  (be += pe.length),
                  (qe = ue - 1));
          } else
            Ne === 10 && (Tt++, en++, (be = 0)),
              Ne === Ne ? ((Ue += c(Ne)), be++) : Ll();
        return Gt.join('');
        function xr() {
          return { line: Tt, column: be, offset: qe + (ze.offset || 0) };
        }
        function q0(Ml, Bl) {
          var ia = xr();
          (ia.column += Bl), (ia.offset += Bl), Fe.call(je, H[Ml], ia, Ml);
        }
        function Ll() {
          Ue &&
            (Gt.push(Ue),
            he && he.call(Ve, Ue, { start: Er, end: xr() }),
            (Ue = ''));
        }
      }
      function G(I) {
        return (I >= 55296 && I <= 57343) || I > 1114111;
      }
      function K(I) {
        return (
          (I >= 1 && I <= 8) ||
          I === 11 ||
          (I >= 13 && I <= 31) ||
          (I >= 127 && I <= 159) ||
          (I >= 64976 && I <= 65007) ||
          (I & 65535) === 65535 ||
          (I & 65535) === 65534
        );
      }
    },
  }),
  x2 = Z({
    '../../node_modules/refractor/node_modules/prismjs/components/prism-core.js'(
      e,
      t
    ) {
      var r =
          typeof window < 'u'
            ? window
            : typeof WorkerGlobalScope < 'u' &&
                self instanceof WorkerGlobalScope
              ? self
              : {},
        n = (function (a) {
          var l = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            i = 0,
            u = {},
            s = {
              manual: a.Prism && a.Prism.manual,
              disableWorkerMessageHandler:
                a.Prism && a.Prism.disableWorkerMessageHandler,
              util: {
                encode: function y(E) {
                  return E instanceof c
                    ? new c(E.type, y(E.content), E.alias)
                    : Array.isArray(E)
                      ? E.map(y)
                      : E.replace(/&/g, '&amp;')
                          .replace(/</g, '&lt;')
                          .replace(/\u00a0/g, ' ');
                },
                type: function (y) {
                  return Object.prototype.toString.call(y).slice(8, -1);
                },
                objId: function (y) {
                  return (
                    y.__id || Object.defineProperty(y, '__id', { value: ++i }),
                    y.__id
                  );
                },
                clone: function y(E, A) {
                  A = A || {};
                  var S, C;
                  switch (s.util.type(E)) {
                    case 'Object':
                      if (((C = s.util.objId(E)), A[C])) return A[C];
                      (S = {}), (A[C] = S);
                      for (var k in E)
                        E.hasOwnProperty(k) && (S[k] = y(E[k], A));
                      return S;
                    case 'Array':
                      return (
                        (C = s.util.objId(E)),
                        A[C]
                          ? A[C]
                          : ((S = []),
                            (A[C] = S),
                            E.forEach(function (O, T) {
                              S[T] = y(O, A);
                            }),
                            S)
                      );
                    default:
                      return E;
                  }
                },
                getLanguage: function (y) {
                  for (; y; ) {
                    var E = l.exec(y.className);
                    if (E) return E[1].toLowerCase();
                    y = y.parentElement;
                  }
                  return 'none';
                },
                setLanguage: function (y, E) {
                  (y.className = y.className.replace(RegExp(l, 'gi'), '')),
                    y.classList.add('language-' + E);
                },
                currentScript: function () {
                  if (typeof document > 'u') return null;
                  if ('currentScript' in document && 1 < 2)
                    return document.currentScript;
                  try {
                    throw new Error();
                  } catch (S) {
                    var y = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      S.stack
                    ) || [])[1];
                    if (y) {
                      var E = document.getElementsByTagName('script');
                      for (var A in E) if (E[A].src == y) return E[A];
                    }
                    return null;
                  }
                },
                isActive: function (y, E, A) {
                  for (var S = 'no-' + E; y; ) {
                    var C = y.classList;
                    if (C.contains(E)) return !0;
                    if (C.contains(S)) return !1;
                    y = y.parentElement;
                  }
                  return !!A;
                },
              },
              languages: {
                plain: u,
                plaintext: u,
                text: u,
                txt: u,
                extend: function (y, E) {
                  var A = s.util.clone(s.languages[y]);
                  for (var S in E) A[S] = E[S];
                  return A;
                },
                insertBefore: function (y, E, A, S) {
                  S = S || s.languages;
                  var C = S[y],
                    k = {};
                  for (var O in C)
                    if (C.hasOwnProperty(O)) {
                      if (O == E)
                        for (var T in A) A.hasOwnProperty(T) && (k[T] = A[T]);
                      A.hasOwnProperty(O) || (k[O] = C[O]);
                    }
                  var R = S[y];
                  return (
                    (S[y] = k),
                    s.languages.DFS(s.languages, function (F, $) {
                      $ === R && F != y && (this[F] = k);
                    }),
                    k
                  );
                },
                DFS: function y(E, A, S, C) {
                  C = C || {};
                  var k = s.util.objId;
                  for (var O in E)
                    if (E.hasOwnProperty(O)) {
                      A.call(E, O, E[O], S || O);
                      var T = E[O],
                        R = s.util.type(T);
                      R === 'Object' && !C[k(T)]
                        ? ((C[k(T)] = !0), y(T, A, null, C))
                        : R === 'Array' &&
                          !C[k(T)] &&
                          ((C[k(T)] = !0), y(T, A, O, C));
                    }
                },
              },
              plugins: {},
              highlightAll: function (y, E) {
                s.highlightAllUnder(document, y, E);
              },
              highlightAllUnder: function (y, E, A) {
                var S = {
                  callback: A,
                  container: y,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                s.hooks.run('before-highlightall', S),
                  (S.elements = Array.prototype.slice.apply(
                    S.container.querySelectorAll(S.selector)
                  )),
                  s.hooks.run('before-all-elements-highlight', S);
                for (var C = 0, k; (k = S.elements[C++]); )
                  s.highlightElement(k, E === !0, S.callback);
              },
              highlightElement: function (y, E, A) {
                var S = s.util.getLanguage(y),
                  C = s.languages[S];
                s.util.setLanguage(y, S);
                var k = y.parentElement;
                k &&
                  k.nodeName.toLowerCase() === 'pre' &&
                  s.util.setLanguage(k, S);
                var O = y.textContent,
                  T = { element: y, language: S, grammar: C, code: O };
                function R($) {
                  (T.highlightedCode = $),
                    s.hooks.run('before-insert', T),
                    (T.element.innerHTML = T.highlightedCode),
                    s.hooks.run('after-highlight', T),
                    s.hooks.run('complete', T),
                    A && A.call(T.element);
                }
                if (
                  (s.hooks.run('before-sanity-check', T),
                  (k = T.element.parentElement),
                  k &&
                    k.nodeName.toLowerCase() === 'pre' &&
                    !k.hasAttribute('tabindex') &&
                    k.setAttribute('tabindex', '0'),
                  !T.code)
                ) {
                  s.hooks.run('complete', T), A && A.call(T.element);
                  return;
                }
                if ((s.hooks.run('before-highlight', T), !T.grammar)) {
                  R(s.util.encode(T.code));
                  return;
                }
                if (E && a.Worker) {
                  var F = new Worker(s.filename);
                  (F.onmessage = function ($) {
                    R($.data);
                  }),
                    F.postMessage(
                      JSON.stringify({
                        language: T.language,
                        code: T.code,
                        immediateClose: !0,
                      })
                    );
                } else R(s.highlight(T.code, T.grammar, T.language));
              },
              highlight: function (y, E, A) {
                var S = { code: y, grammar: E, language: A };
                if ((s.hooks.run('before-tokenize', S), !S.grammar))
                  throw new Error(
                    'The language "' + S.language + '" has no grammar.'
                  );
                return (
                  (S.tokens = s.tokenize(S.code, S.grammar)),
                  s.hooks.run('after-tokenize', S),
                  c.stringify(s.util.encode(S.tokens), S.language)
                );
              },
              tokenize: function (y, E) {
                var A = E.rest;
                if (A) {
                  for (var S in A) E[S] = A[S];
                  delete E.rest;
                }
                var C = new m();
                return p(C, C.head, y), f(y, C, E, C.head, 0), g(C);
              },
              hooks: {
                all: {},
                add: function (y, E) {
                  var A = s.hooks.all;
                  (A[y] = A[y] || []), A[y].push(E);
                },
                run: function (y, E) {
                  var A = s.hooks.all[y];
                  if (!(!A || !A.length))
                    for (var S = 0, C; (C = A[S++]); ) C(E);
                },
              },
              Token: c,
            };
          a.Prism = s;
          function c(y, E, A, S) {
            (this.type = y),
              (this.content = E),
              (this.alias = A),
              (this.length = (S || '').length | 0);
          }
          c.stringify = function y(E, A) {
            if (typeof E == 'string') return E;
            if (Array.isArray(E)) {
              var S = '';
              return (
                E.forEach(function (R) {
                  S += y(R, A);
                }),
                S
              );
            }
            var C = {
                type: E.type,
                content: y(E.content, A),
                tag: 'span',
                classes: ['token', E.type],
                attributes: {},
                language: A,
              },
              k = E.alias;
            k &&
              (Array.isArray(k)
                ? Array.prototype.push.apply(C.classes, k)
                : C.classes.push(k)),
              s.hooks.run('wrap', C);
            var O = '';
            for (var T in C.attributes)
              O +=
                ' ' +
                T +
                '="' +
                (C.attributes[T] || '').replace(/"/g, '&quot;') +
                '"';
            return (
              '<' +
              C.tag +
              ' class="' +
              C.classes.join(' ') +
              '"' +
              O +
              '>' +
              C.content +
              '</' +
              C.tag +
              '>'
            );
          };
          function d(y, E, A, S) {
            y.lastIndex = E;
            var C = y.exec(A);
            if (C && S && C[1]) {
              var k = C[1].length;
              (C.index += k), (C[0] = C[0].slice(k));
            }
            return C;
          }
          function f(y, E, A, S, C, k) {
            for (var O in A)
              if (!(!A.hasOwnProperty(O) || !A[O])) {
                var T = A[O];
                T = Array.isArray(T) ? T : [T];
                for (var R = 0; R < T.length; ++R) {
                  if (k && k.cause == O + ',' + R) return;
                  var F = T[R],
                    $ = F.inside,
                    P = !!F.lookbehind,
                    D = !!F.greedy,
                    L = F.alias;
                  if (D && !F.pattern.global) {
                    var N = F.pattern.toString().match(/[imsuy]*$/)[0];
                    F.pattern = RegExp(F.pattern.source, N + 'g');
                  }
                  for (
                    var V = F.pattern || F, B = S.next, H = C;
                    B !== E.tail && !(k && H >= k.reach);
                    H += B.value.length, B = B.next
                  ) {
                    var Y = B.value;
                    if (E.length > y.length) return;
                    if (!(Y instanceof c)) {
                      var te = 1,
                        G;
                      if (D) {
                        if (((G = d(V, H, y, P)), !G || G.index >= y.length))
                          break;
                        var q = G.index,
                          K = G.index + G[0].length,
                          I = H;
                        for (I += B.value.length; q >= I; )
                          (B = B.next), (I += B.value.length);
                        if (
                          ((I -= B.value.length), (H = I), B.value instanceof c)
                        )
                          continue;
                        for (
                          var z = B;
                          z !== E.tail && (I < K || typeof z.value == 'string');
                          z = z.next
                        )
                          te++, (I += z.value.length);
                        te--, (Y = y.slice(H, I)), (G.index -= H);
                      } else if (((G = d(V, 0, Y, P)), !G)) continue;
                      var q = G.index,
                        ie = G[0],
                        he = Y.slice(0, q),
                        ut = Y.slice(q + ie.length),
                        Fe = H + Y.length;
                      k && Fe > k.reach && (k.reach = Fe);
                      var Ve = B.prev;
                      he && ((Ve = p(E, Ve, he)), (H += he.length)),
                        h(E, Ve, te);
                      var M = new c(O, $ ? s.tokenize(ie, $) : ie, L, ie);
                      if (((B = p(E, Ve, M)), ut && p(E, B, ut), te > 1)) {
                        var je = { cause: O + ',' + R, reach: Fe };
                        f(y, E, A, B.prev, H, je),
                          k && je.reach > k.reach && (k.reach = je.reach);
                      }
                    }
                  }
                }
              }
          }
          function m() {
            var y = { value: null, prev: null, next: null },
              E = { value: null, prev: y, next: null };
            (y.next = E), (this.head = y), (this.tail = E), (this.length = 0);
          }
          function p(y, E, A) {
            var S = E.next,
              C = { value: A, prev: E, next: S };
            return (E.next = C), (S.prev = C), y.length++, C;
          }
          function h(y, E, A) {
            for (var S = E.next, C = 0; C < A && S !== y.tail; C++) S = S.next;
            (E.next = S), (S.prev = E), (y.length -= C);
          }
          function g(y) {
            for (var E = [], A = y.head.next; A !== y.tail; )
              E.push(A.value), (A = A.next);
            return E;
          }
          if (!a.document)
            return (
              a.addEventListener &&
                (s.disableWorkerMessageHandler ||
                  a.addEventListener(
                    'message',
                    function (y) {
                      var E = JSON.parse(y.data),
                        A = E.language,
                        S = E.code,
                        C = E.immediateClose;
                      a.postMessage(s.highlight(S, s.languages[A], A)),
                        C && a.close();
                    },
                    !1
                  )),
              s
            );
          var w = s.util.currentScript();
          w &&
            ((s.filename = w.src),
            w.hasAttribute('data-manual') && (s.manual = !0));
          function x() {
            s.manual || s.highlightAll();
          }
          if (!s.manual) {
            var v = document.readyState;
            v === 'loading' || (v === 'interactive' && w && w.defer)
              ? document.addEventListener('DOMContentLoaded', x)
              : window.requestAnimationFrame
                ? window.requestAnimationFrame(x)
                : window.setTimeout(x, 16);
          }
          return s;
        })(r);
      typeof t < 'u' && t.exports && (t.exports = n),
        typeof global < 'u' && (global.Prism = n);
    },
  }),
  w2 = Z({
    '../../node_modules/refractor/core.js'(e, t) {
      var r =
          typeof globalThis == 'object'
            ? globalThis
            : typeof self == 'object'
              ? self
              : typeof window == 'object'
                ? window
                : typeof global == 'object'
                  ? global
                  : {},
        n = C();
      r.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
      var a = p2(),
        l = E2(),
        i = x2(),
        u = pu(),
        s = du(),
        c = Yp(),
        d = Kp();
      n();
      var f = {}.hasOwnProperty;
      function m() {}
      m.prototype = i;
      var p = new m();
      (t.exports = p),
        (p.highlight = w),
        (p.register = h),
        (p.alias = g),
        (p.registered = x),
        (p.listLanguages = v),
        h(u),
        h(s),
        h(c),
        h(d),
        (p.util.encode = A),
        (p.Token.stringify = y);
      function h(k) {
        if (typeof k != 'function' || !k.displayName)
          throw new Error('Expected `function` for `grammar`, got `' + k + '`');
        p.languages[k.displayName] === void 0 && k(p);
      }
      function g(k, O) {
        var T = p.languages,
          R = k,
          F,
          $,
          P,
          D;
        O && ((R = {}), (R[k] = O));
        for (F in R)
          for (
            $ = R[F], $ = typeof $ == 'string' ? [$] : $, P = $.length, D = -1;
            ++D < P;

          )
            T[$[D]] = T[F];
      }
      function w(k, O) {
        var T = i.highlight,
          R;
        if (typeof k != 'string')
          throw new Error('Expected `string` for `value`, got `' + k + '`');
        if (p.util.type(O) === 'Object') (R = O), (O = null);
        else {
          if (typeof O != 'string')
            throw new Error('Expected `string` for `name`, got `' + O + '`');
          if (f.call(p.languages, O)) R = p.languages[O];
          else
            throw new Error('Unknown language: `' + O + '` is not registered');
        }
        return T.call(this, k, R, O);
      }
      function x(k) {
        if (typeof k != 'string')
          throw new Error('Expected `string` for `language`, got `' + k + '`');
        return f.call(p.languages, k);
      }
      function v() {
        var k = p.languages,
          O = [],
          T;
        for (T in k) f.call(k, T) && typeof k[T] == 'object' && O.push(T);
        return O;
      }
      function y(k, O, T) {
        var R;
        return typeof k == 'string'
          ? { type: 'text', value: k }
          : p.util.type(k) === 'Array'
            ? E(k, O)
            : ((R = {
                type: k.type,
                content: p.Token.stringify(k.content, O, T),
                tag: 'span',
                classes: ['token', k.type],
                attributes: {},
                language: O,
                parent: T,
              }),
              k.alias && (R.classes = R.classes.concat(k.alias)),
              p.hooks.run('wrap', R),
              a(R.tag + '.' + R.classes.join('.'), S(R.attributes), R.content));
      }
      function E(k, O) {
        for (var T = [], R = k.length, F = -1, $; ++F < R; )
          ($ = k[F]), $ !== '' && $ !== null && $ !== void 0 && T.push($);
        for (F = -1, R = T.length; ++F < R; )
          ($ = T[F]), (T[F] = p.Token.stringify($, O, T));
        return T;
      }
      function A(k) {
        return k;
      }
      function S(k) {
        var O;
        for (O in k) k[O] = l(k[O]);
        return k;
      }
      function C() {
        var k = 'Prism' in r,
          O = k ? r.Prism : void 0;
        return T;
        function T() {
          k ? (r.Prism = O) : delete r.Prism, (k = void 0), (O = void 0);
        }
      }
    },
  }),
  A2 = Z({
    '../../node_modules/refractor/lang/bash.js'(e, t) {
      (t.exports = r), (r.displayName = 'bash'), (r.aliases = ['shell']);
      function r(n) {
        (function (a) {
          var l =
              '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
            i = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: 'punctuation',
              inside: null,
            },
            u = {
              bash: i,
              environment: { pattern: RegExp('\\$' + l), alias: 'constant' },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp('(\\{)' + l),
                      lookbehind: !0,
                      alias: 'constant',
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (a.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            'function-name': [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: 'function',
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
            ],
            'for-or-select': {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: 'variable',
              lookbehind: !0,
            },
            'assign-left': {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + l),
                  lookbehind: !0,
                  alias: 'constant',
                },
              },
              alias: 'variable',
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: u,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: i },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: u,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: u.entity },
              },
            ],
            environment: { pattern: RegExp('\\$?' + l), alias: 'constant' },
            variable: u.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: 'class-name',
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                'file-descriptor': { pattern: /^\d/, alias: 'important' },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (i.inside = a.languages.bash);
          for (
            var s = [
                'comment',
                'function-name',
                'for-or-select',
                'assign-left',
                'string',
                'environment',
                'function',
                'keyword',
                'builtin',
                'boolean',
                'file-descriptor',
                'operator',
                'punctuation',
                'number',
              ],
              c = u.variable[1].inside,
              d = 0;
            d < s.length;
            d++
          )
            c[s[d]] = a.languages.bash[s[d]];
          a.languages.shell = a.languages.bash;
        })(n);
      }
    },
  }),
  S2 = Z({
    '../../node_modules/refractor/lang/js-extras.js'(e, t) {
      (t.exports = r), (r.displayName = 'jsExtras'), (r.aliases = []);
      function r(n) {
        (function (a) {
          a.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp(
                '(\\.\\s*)' +
                  a.languages.javascript['function-variable'].pattern.source
              ),
              lookbehind: !0,
              alias: [
                'function-variable',
                'method',
                'function',
                'property-access',
              ],
            },
          }),
            a.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp(
                  '(\\.\\s*)' + a.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ['function', 'property-access'],
              },
            }),
            a.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: 'class-name',
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
              ],
            });
          function l(f, m) {
            return RegExp(
              f.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              m
            );
          }
          a.languages.insertBefore('javascript', 'keyword', {
            imports: {
              pattern: l(
                /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                  .source
              ),
              lookbehind: !0,
              inside: a.languages.javascript,
            },
            exports: {
              pattern: l(
                /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                  .source
              ),
              lookbehind: !0,
              inside: a.languages.javascript,
            },
          }),
            a.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: 'module',
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow',
              },
              { pattern: /\bnull\b/, alias: ['null', 'nil'] },
              { pattern: /\bundefined\b/, alias: 'nil' }
            ),
            a.languages.insertBefore('javascript', 'operator', {
              spread: { pattern: /\.{3}/, alias: 'operator' },
              arrow: { pattern: /=>/, alias: 'operator' },
            }),
            a.languages.insertBefore('javascript', 'punctuation', {
              'property-access': {
                pattern: l(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              'maybe-class-name': {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: 'variable',
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
            });
          for (
            var i = [
                'function',
                'function-variable',
                'method',
                'method-variable',
                'property-access',
              ],
              u = 0;
            u < i.length;
            u++
          ) {
            var s = i[u],
              c = a.languages.javascript[s];
            a.util.type(c) === 'RegExp' &&
              (c = a.languages.javascript[s] = { pattern: c });
            var d = c.inside || {};
            (c.inside = d), (d['maybe-class-name'] = /^[A-Z][\s\S]*/);
          }
        })(n);
      }
    },
  }),
  C2 = Z({
    '../../node_modules/refractor/lang/json.js'(e, t) {
      (t.exports = r), (r.displayName = 'json'), (r.aliases = ['webmanifest']);
      function r(n) {
        (n.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
        }),
          (n.languages.webmanifest = n.languages.json);
      }
    },
  }),
  k2 = Z({
    '../../node_modules/refractor/lang/graphql.js'(e, t) {
      (t.exports = r), (r.displayName = 'graphql'), (r.aliases = []);
      function r(n) {
        (n.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: 'string',
            inside: {
              'language-markdown': {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: n.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': {
            pattern:
              /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          'class-name': {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          'definition-mutation': {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          'definition-query': {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          'property-query': /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
          n.hooks.add('after-tokenize', function (a) {
            if (a.language !== 'graphql') return;
            var l = a.tokens.filter(function (v) {
                return (
                  typeof v != 'string' &&
                  v.type !== 'comment' &&
                  v.type !== 'scalar'
                );
              }),
              i = 0;
            function u(v) {
              return l[i + v];
            }
            function s(v, y) {
              y = y || 0;
              for (var E = 0; E < v.length; E++) {
                var A = u(E + y);
                if (!A || A.type !== v[E]) return !1;
              }
              return !0;
            }
            function c(v, y) {
              for (var E = 1, A = i; A < l.length; A++) {
                var S = l[A],
                  C = S.content;
                if (S.type === 'punctuation' && typeof C == 'string') {
                  if (v.test(C)) E++;
                  else if (y.test(C) && (E--, E === 0)) return A;
                }
              }
              return -1;
            }
            function d(v, y) {
              var E = v.alias;
              E ? Array.isArray(E) || (v.alias = E = [E]) : (v.alias = E = []),
                E.push(y);
            }
            for (; i < l.length; ) {
              var f = l[i++];
              if (f.type === 'keyword' && f.content === 'mutation') {
                var m = [];
                if (
                  s(['definition-mutation', 'punctuation']) &&
                  u(1).content === '('
                ) {
                  i += 2;
                  var p = c(/^\($/, /^\)$/);
                  if (p === -1) continue;
                  for (; i < p; i++) {
                    var h = u(0);
                    h.type === 'variable' &&
                      (d(h, 'variable-input'), m.push(h.content));
                  }
                  i = p + 1;
                }
                if (
                  s(['punctuation', 'property-query']) &&
                  u(0).content === '{' &&
                  (i++, d(u(0), 'property-mutation'), m.length > 0)
                ) {
                  var g = c(/^\{$/, /^\}$/);
                  if (g === -1) continue;
                  for (var w = i; w < g; w++) {
                    var x = l[w];
                    x.type === 'variable' &&
                      m.indexOf(x.content) >= 0 &&
                      d(x, 'variable-input');
                  }
                }
              }
            }
          });
      }
    },
  });
const { logger: _2 } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  { global: O2 } = __STORYBOOK_MODULE_GLOBAL__;
var T2 = Oe(cu()),
  R2 = T2.default,
  F2 = Oe(A2()),
  $2 = F2.default,
  D2 = Oe(du()),
  L2 = D2.default,
  M2 = Oe(S2()),
  B2 = M2.default,
  I2 = Oe(C2()),
  P2 = I2.default,
  j2 = Oe(k2()),
  N2 = j2.default,
  H2 = Oe(pu()),
  Z2 = H2.default,
  V2 = Oe(Up()),
  z2 = V2.default,
  q2 = Oe(Wp()),
  U2 = q2.default,
  W2 = Oe(Gp()),
  G2 = W2.default,
  Y2 = Oe(uu()),
  K2 = Y2.default;
function X2(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    l;
  for (l = 0; l < n.length; l++)
    (a = n[l]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function J2(e, t) {
  if (e == null) return {};
  var r = X2(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (a = 0; a < l.length; a++)
      (n = l[a]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Qa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Q2(e) {
  if (Array.isArray(e)) return Qa(e);
}
function e5(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function t5(e, t) {
  if (e) {
    if (typeof e == 'string') return Qa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qa(e, t);
  }
}
function r5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n5(e) {
  return Q2(e) || e5(e) || t5(e) || r5();
}
function Br(e) {
  '@babel/helpers - typeof';
  return (
    (Br =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Br(e)
  );
}
function a5(e, t) {
  if (Br(e) != 'object' || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || 'default');
    if (Br(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function o5(e) {
  var t = a5(e, 'string');
  return Br(t) == 'symbol' ? t : String(t);
}
function yu(e, t, r) {
  return (
    (t = o5(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function eo() {
  return (
    (eo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    eo.apply(this, arguments)
  );
}
function ii(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ii(Object(r), !0).forEach(function (n) {
          yu(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ii(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function l5(e) {
  var t = e.length;
  if (t === 0 || t === 1) return e;
  if (t === 2)
    return [
      e[0],
      e[1],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0]),
    ];
  if (t === 3)
    return [
      e[0],
      e[1],
      e[2],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2]),
      ''.concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0]),
    ];
  if (t >= 4)
    return [
      e[0],
      e[1],
      e[2],
      e[3],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[3]),
      ''.concat(e[3], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[1], '.').concat(e[0]),
    ];
}
var Ea = {};
function i5(e) {
  if (e.length === 0 || e.length === 1) return e;
  var t = e.join('.');
  return Ea[t] || (Ea[t] = l5(e)), Ea[t];
}
function s5(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = arguments.length > 2 ? arguments[2] : void 0,
    n = e.filter(function (l) {
      return l !== 'token';
    }),
    a = i5(n);
  return a.reduce(function (l, i) {
    return Jt(Jt({}, l), r[i]);
  }, t);
}
function si(e) {
  return e.join(' ');
}
function u5(e, t) {
  var r = 0;
  return function (n) {
    return (
      (r += 1),
      n.map(function (a, l) {
        return Ho({
          node: a,
          stylesheet: e,
          useInlineStyles: t,
          key: 'code-segment-'.concat(r, '-').concat(l),
        });
      })
    );
  };
}
function Ho(e) {
  var t = e.node,
    r = e.stylesheet,
    n = e.style,
    a = n === void 0 ? {} : n,
    l = e.useInlineStyles,
    i = e.key,
    u = t.properties,
    s = t.type,
    c = t.tagName,
    d = t.value;
  if (s === 'text') return d;
  if (c) {
    var f = u5(r, l),
      m;
    if (!l) m = Jt(Jt({}, u), {}, { className: si(u.className) });
    else {
      var p = Object.keys(r).reduce(function (x, v) {
          return (
            v.split('.').forEach(function (y) {
              x.includes(y) || x.push(y);
            }),
            x
          );
        }, []),
        h = u.className && u.className.includes('token') ? ['token'] : [],
        g =
          u.className &&
          h.concat(
            u.className.filter(function (x) {
              return !p.includes(x);
            })
          );
      m = Jt(
        Jt({}, u),
        {},
        {
          className: si(g) || void 0,
          style: s5(u.className, Object.assign({}, u.style, a), r),
        }
      );
    }
    var w = f(t.children);
    return o.createElement(c, eo({ key: i }, m), w);
  }
}
var c5 = function (e, t) {
    var r = e.listLanguages();
    return r.indexOf(t) !== -1;
  },
  d5 = [
    'language',
    'children',
    'style',
    'customStyle',
    'codeTagProps',
    'useInlineStyles',
    'showLineNumbers',
    'showInlineLineNumbers',
    'startingLineNumber',
    'lineNumberContainerStyle',
    'lineNumberStyle',
    'wrapLines',
    'wrapLongLines',
    'lineProps',
    'renderer',
    'PreTag',
    'CodeTag',
    'code',
    'astGenerator',
  ];
function ui(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ui(Object(r), !0).forEach(function (n) {
          yu(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ui(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var p5 = /\n/g;
function f5(e) {
  return e.match(p5);
}
function m5(e) {
  var t = e.lines,
    r = e.startingLineNumber,
    n = e.style;
  return t.map(function (a, l) {
    var i = l + r;
    return o.createElement(
      'span',
      {
        key: 'line-'.concat(l),
        className: 'react-syntax-highlighter-line-number',
        style: typeof n == 'function' ? n(i) : n,
      },
      ''.concat(
        i,
        `
`
      )
    );
  });
}
function g5(e) {
  var t = e.codeString,
    r = e.codeStyle,
    n = e.containerStyle,
    a = n === void 0 ? { float: 'left', paddingRight: '10px' } : n,
    l = e.numberStyle,
    i = l === void 0 ? {} : l,
    u = e.startingLineNumber;
  return o.createElement(
    'code',
    { style: Object.assign({}, r, a) },
    m5({
      lines: t.replace(/\n$/, '').split(`
`),
      style: i,
      startingLineNumber: u,
    })
  );
}
function h5(e) {
  return ''.concat(e.toString().length, '.25em');
}
function vu(e, t) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: 'line-number--'.concat(e),
      className: [
        'comment',
        'linenumber',
        'react-syntax-highlighter-line-number',
      ],
      style: t,
    },
    children: [{ type: 'text', value: e }],
  };
}
function Eu(e, t, r) {
  var n = {
      display: 'inline-block',
      minWidth: h5(r),
      paddingRight: '1em',
      textAlign: 'right',
      userSelect: 'none',
    },
    a = typeof e == 'function' ? e(t) : e,
    l = et(et({}, n), a);
  return l;
}
function bn(e) {
  var t = e.children,
    r = e.lineNumber,
    n = e.lineNumberStyle,
    a = e.largestLineNumber,
    l = e.showInlineLineNumbers,
    i = e.lineProps,
    u = i === void 0 ? {} : i,
    s = e.className,
    c = s === void 0 ? [] : s,
    d = e.showLineNumbers,
    f = e.wrapLongLines,
    m = typeof u == 'function' ? u(r) : u;
  if (((m.className = c), r && l)) {
    var p = Eu(n, r, a);
    t.unshift(vu(r, p));
  }
  return (
    f & d && (m.style = et(et({}, m.style), {}, { display: 'flex' })),
    { type: 'element', tagName: 'span', properties: m, children: t }
  );
}
function xu(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      n = 0;
    n < e.length;
    n++
  ) {
    var a = e[n];
    if (a.type === 'text')
      r.push(bn({ children: [a], className: n5(new Set(t)) }));
    else if (a.children) {
      var l = t.concat(a.properties.className);
      xu(a.children, l).forEach(function (i) {
        return r.push(i);
      });
    }
  }
  return r;
}
function b5(e, t, r, n, a, l, i, u, s) {
  var c,
    d = xu(e.value),
    f = [],
    m = -1,
    p = 0;
  function h(A, S) {
    var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return bn({
      children: A,
      lineNumber: S,
      lineNumberStyle: u,
      largestLineNumber: i,
      showInlineLineNumbers: a,
      lineProps: r,
      className: C,
      showLineNumbers: n,
      wrapLongLines: s,
    });
  }
  function g(A, S) {
    if (n && S && a) {
      var C = Eu(u, S, i);
      A.unshift(vu(S, C));
    }
    return A;
  }
  function w(A, S) {
    var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || C.length > 0 ? h(A, S, C) : g(A, S);
  }
  for (
    var x = function () {
      var A = d[p],
        S = A.children[0].value,
        C = f5(S);
      if (C) {
        var k = S.split(`
`);
        k.forEach(function (O, T) {
          var R = n && f.length + l,
            F = {
              type: 'text',
              value: ''.concat(
                O,
                `
`
              ),
            };
          if (T === 0) {
            var $ = d
                .slice(m + 1, p)
                .concat(
                  bn({ children: [F], className: A.properties.className })
                ),
              P = w($, R);
            f.push(P);
          } else if (T === k.length - 1) {
            var D = d[p + 1] && d[p + 1].children && d[p + 1].children[0],
              L = { type: 'text', value: ''.concat(O) };
            if (D) {
              var N = bn({ children: [L], className: A.properties.className });
              d.splice(p + 1, 0, N);
            } else {
              var V = [L],
                B = w(V, R, A.properties.className);
              f.push(B);
            }
          } else {
            var H = [F],
              Y = w(H, R, A.properties.className);
            f.push(Y);
          }
        }),
          (m = p);
      }
      p++;
    };
    p < d.length;

  )
    x();
  if (m !== d.length - 1) {
    var v = d.slice(m + 1, d.length);
    if (v && v.length) {
      var y = n && f.length + l,
        E = w(v, y);
      f.push(E);
    }
  }
  return t ? f : (c = []).concat.apply(c, f);
}
function y5(e) {
  var t = e.rows,
    r = e.stylesheet,
    n = e.useInlineStyles;
  return t.map(function (a, l) {
    return Ho({
      node: a,
      stylesheet: r,
      useInlineStyles: n,
      key: 'code-segement'.concat(l),
    });
  });
}
function wu(e) {
  return e && typeof e.highlightAuto < 'u';
}
function v5(e) {
  var t = e.astGenerator,
    r = e.language,
    n = e.code,
    a = e.defaultCodeValue;
  if (wu(t)) {
    var l = c5(t, r);
    return r === 'text'
      ? { value: a, language: 'text' }
      : l
        ? t.highlight(r, n)
        : t.highlightAuto(n);
  }
  try {
    return r && r !== 'text' ? { value: t.highlight(n, r) } : { value: a };
  } catch {
    return { value: a };
  }
}
function E5(e, t) {
  return function (r) {
    var n = r.language,
      a = r.children,
      l = r.style,
      i = l === void 0 ? t : l,
      u = r.customStyle,
      s = u === void 0 ? {} : u,
      c = r.codeTagProps,
      d =
        c === void 0
          ? {
              className: n ? 'language-'.concat(n) : void 0,
              style: et(
                et({}, i['code[class*="language-"]']),
                i['code[class*="language-'.concat(n, '"]')]
              ),
            }
          : c,
      f = r.useInlineStyles,
      m = f === void 0 ? !0 : f,
      p = r.showLineNumbers,
      h = p === void 0 ? !1 : p,
      g = r.showInlineLineNumbers,
      w = g === void 0 ? !0 : g,
      x = r.startingLineNumber,
      v = x === void 0 ? 1 : x,
      y = r.lineNumberContainerStyle,
      E = r.lineNumberStyle,
      A = E === void 0 ? {} : E,
      S = r.wrapLines,
      C = r.wrapLongLines,
      k = C === void 0 ? !1 : C,
      O = r.lineProps,
      T = O === void 0 ? {} : O,
      R = r.renderer,
      F = r.PreTag,
      $ = F === void 0 ? 'pre' : F,
      P = r.CodeTag,
      D = P === void 0 ? 'code' : P,
      L = r.code,
      N = L === void 0 ? (Array.isArray(a) ? a[0] : a) || '' : L,
      V = r.astGenerator,
      B = J2(r, d5);
    V = V || e;
    var H = h
        ? o.createElement(g5, {
            containerStyle: y,
            codeStyle: d.style || {},
            numberStyle: A,
            startingLineNumber: v,
            codeString: N,
          })
        : null,
      Y = i.hljs || i['pre[class*="language-"]'] || { backgroundColor: '#fff' },
      te = wu(V) ? 'hljs' : 'prismjs',
      G = m
        ? Object.assign({}, B, { style: Object.assign({}, Y, s) })
        : Object.assign({}, B, {
            className: B.className
              ? ''.concat(te, ' ').concat(B.className)
              : te,
            style: Object.assign({}, s),
          });
    if (
      (k
        ? (d.style = et(et({}, d.style), {}, { whiteSpace: 'pre-wrap' }))
        : (d.style = et(et({}, d.style), {}, { whiteSpace: 'pre' })),
      !V)
    )
      return o.createElement($, G, H, o.createElement(D, d, N));
    ((S === void 0 && R) || k) && (S = !0), (R = R || y5);
    var K = [{ type: 'text', value: N }],
      I = v5({ astGenerator: V, language: n, code: N, defaultCodeValue: K });
    I.language === null && (I.value = K);
    var z = I.value.length + v,
      q = b5(I, S, T, h, w, v, z, A, k);
    return o.createElement(
      $,
      G,
      o.createElement(
        D,
        d,
        !w && H,
        R({ rows: q, stylesheet: i, useInlineStyles: m })
      )
    );
  };
}
var Zo = Oe(w2()),
  Vo = E5(Zo.default, {});
Vo.registerLanguage = function (e, t) {
  return Zo.default.register(t);
};
Vo.alias = function (e, t) {
  return Zo.default.alias(e, t);
};
var Te = Vo,
  x5 = _.div(({ theme: e }) => ({
    position: 'absolute',
    bottom: 0,
    right: 0,
    maxWidth: '100%',
    display: 'flex',
    background: e.background.content,
    zIndex: 1,
  })),
  Au = _.button(
    ({ theme: e }) => ({
      margin: 0,
      border: '0 none',
      padding: '4px 10px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      color: e.color.defaultText,
      background: e.background.content,
      fontSize: 12,
      lineHeight: '16px',
      fontFamily: e.typography.fonts.base,
      fontWeight: e.typography.weight.bold,
      borderTop: `1px solid ${e.appBorderColor}`,
      borderLeft: `1px solid ${e.appBorderColor}`,
      marginLeft: -1,
      borderRadius: '4px 0 0 0',
      '&:not(:last-child)': { borderRight: `1px solid ${e.appBorderColor}` },
      '& + *': { borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0 },
      '&:focus': {
        boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`,
        outline: '0 none',
      },
    }),
    ({ disabled: e }) => e && { cursor: 'not-allowed', opacity: 0.5 }
  );
Au.displayName = 'ActionButton';
var zo = ({ actionItems: e, ...t }) =>
  o.createElement(
    x5,
    { ...t },
    e.map(({ title: r, className: n, onClick: a, disabled: l }, i) =>
      o.createElement(Au, { key: i, className: n, onClick: a, disabled: l }, r)
    )
  );
function ae() {
  return (
    (ae = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ae.apply(this, arguments)
  );
}
function to() {
  return (
    (to = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    to.apply(this, arguments)
  );
}
function On() {
  return (
    (On = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    On.apply(this, arguments)
  );
}
function w5(e, t) {
  typeof e == 'function' ? e(t) : e != null && (e.current = t);
}
function Su(...e) {
  return (t) => e.forEach((r) => w5(r, t));
}
function qt(...e) {
  return b.useCallback(Su(...e), e);
}
var Cu = b.forwardRef((e, t) => {
  let { children: r, ...n } = e,
    a = b.Children.toArray(r),
    l = a.find(S5);
  if (l) {
    let i = l.props.children,
      u = a.map((s) =>
        s === l
          ? b.Children.count(i) > 1
            ? b.Children.only(null)
            : b.isValidElement(i)
              ? i.props.children
              : null
          : s
      );
    return b.createElement(
      ro,
      On({}, n, { ref: t }),
      b.isValidElement(i) ? b.cloneElement(i, void 0, u) : null
    );
  }
  return b.createElement(ro, On({}, n, { ref: t }), r);
});
Cu.displayName = 'Slot';
var ro = b.forwardRef((e, t) => {
  let { children: r, ...n } = e;
  return b.isValidElement(r)
    ? b.cloneElement(r, { ...C5(n, r.props), ref: t ? Su(t, r.ref) : r.ref })
    : b.Children.count(r) > 1
      ? b.Children.only(null)
      : null;
});
ro.displayName = 'SlotClone';
var A5 = ({ children: e }) => b.createElement(b.Fragment, null, e);
function S5(e) {
  return b.isValidElement(e) && e.type === A5;
}
function C5(e, t) {
  let r = { ...t };
  for (let n in t) {
    let a = e[n],
      l = t[n];
    /^on[A-Z]/.test(n)
      ? a && l
        ? (r[n] = (...i) => {
            l(...i), a(...i);
          })
        : a && (r[n] = a)
      : n === 'style'
        ? (r[n] = { ...a, ...l })
        : n === 'className' && (r[n] = [a, l].filter(Boolean).join(' '));
  }
  return { ...e, ...r };
}
var k5 = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  Gr = k5.reduce((e, t) => {
    let r = b.forwardRef((n, a) => {
      let { asChild: l, ...i } = n,
        u = l ? Cu : t;
      return (
        b.useEffect(() => {
          window[Symbol.for('radix-ui')] = !0;
        }, []),
        b.createElement(u, to({}, i, { ref: a }))
      );
    });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {}),
  no = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {};
function _5(e, t) {
  return b.useReducer((r, n) => t[r][n] ?? r, e);
}
var Yr = (e) => {
  let { present: t, children: r } = e,
    n = O5(t),
    a =
      typeof r == 'function' ? r({ present: n.isPresent }) : b.Children.only(r),
    l = qt(n.ref, a.ref);
  return typeof r == 'function' || n.isPresent
    ? b.cloneElement(a, { ref: l })
    : null;
};
Yr.displayName = 'Presence';
function O5(e) {
  let [t, r] = b.useState(),
    n = b.useRef({}),
    a = b.useRef(e),
    l = b.useRef('none'),
    i = e ? 'mounted' : 'unmounted',
    [u, s] = _5(i, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    b.useEffect(() => {
      let c = on(n.current);
      l.current = u === 'mounted' ? c : 'none';
    }, [u]),
    no(() => {
      let c = n.current,
        d = a.current;
      if (d !== e) {
        let f = l.current,
          m = on(c);
        e
          ? s('MOUNT')
          : m === 'none' || (c == null ? void 0 : c.display) === 'none'
            ? s('UNMOUNT')
            : s(d && f !== m ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (a.current = e);
      }
    }, [e, s]),
    no(() => {
      if (t) {
        let c = (f) => {
            let m = on(n.current).includes(f.animationName);
            f.target === t && m && Cs.flushSync(() => s('ANIMATION_END'));
          },
          d = (f) => {
            f.target === t && (l.current = on(n.current));
          };
        return (
          t.addEventListener('animationstart', d),
          t.addEventListener('animationcancel', c),
          t.addEventListener('animationend', c),
          () => {
            t.removeEventListener('animationstart', d),
              t.removeEventListener('animationcancel', c),
              t.removeEventListener('animationend', c);
          }
        );
      } else s('ANIMATION_END');
    }, [t, s]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(u),
      ref: b.useCallback((c) => {
        c && (n.current = getComputedStyle(c)), r(c);
      }, []),
    }
  );
}
function on(e) {
  return (e == null ? void 0 : e.animationName) || 'none';
}
function T5(e, t = []) {
  let r = [];
  function n(l, i) {
    let u = b.createContext(i),
      s = r.length;
    r = [...r, i];
    function c(f) {
      let { scope: m, children: p, ...h } = f,
        g = (m == null ? void 0 : m[e][s]) || u,
        w = b.useMemo(() => h, Object.values(h));
      return b.createElement(g.Provider, { value: w }, p);
    }
    function d(f, m) {
      let p = (m == null ? void 0 : m[e][s]) || u,
        h = b.useContext(p);
      if (h) return h;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${l}\``);
    }
    return (c.displayName = l + 'Provider'), [c, d];
  }
  let a = () => {
    let l = r.map((i) => b.createContext(i));
    return function (i) {
      let u = (i == null ? void 0 : i[e]) || l;
      return b.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: u } }), [i, u]);
    };
  };
  return (a.scopeName = e), [n, R5(a, ...t)];
}
function R5(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let r = () => {
    let n = e.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return function (a) {
      let l = n.reduce((i, { useScope: u, scopeName: s }) => {
        let c = u(a)[`__scope${s}`];
        return { ...i, ...c };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
function Bt(e) {
  let t = b.useRef(e);
  return (
    b.useEffect(() => {
      t.current = e;
    }),
    b.useMemo(
      () =>
        (...r) => {
          var n;
          return (n = t.current) === null || n === void 0
            ? void 0
            : n.call(t, ...r);
        },
      []
    )
  );
}
var F5 = b.createContext(void 0);
function $5(e) {
  let t = b.useContext(F5);
  return e || t || 'ltr';
}
function D5(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Pt(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (n) {
    if ((e == null || e(n), r === !1 || !n.defaultPrevented))
      return t == null ? void 0 : t(n);
  };
}
function L5(e, t) {
  return b.useReducer((r, n) => t[r][n] ?? r, e);
}
var ku = 'ScrollArea',
  [_u, Jw] = T5(ku),
  [M5, Ie] = _u(ku),
  B5 = b.forwardRef((e, t) => {
    let {
        __scopeScrollArea: r,
        type: n = 'hover',
        dir: a,
        scrollHideDelay: l = 600,
        ...i
      } = e,
      [u, s] = b.useState(null),
      [c, d] = b.useState(null),
      [f, m] = b.useState(null),
      [p, h] = b.useState(null),
      [g, w] = b.useState(null),
      [x, v] = b.useState(0),
      [y, E] = b.useState(0),
      [A, S] = b.useState(!1),
      [C, k] = b.useState(!1),
      O = qt(t, (R) => s(R)),
      T = $5(a);
    return b.createElement(
      M5,
      {
        scope: r,
        type: n,
        dir: T,
        scrollHideDelay: l,
        scrollArea: u,
        viewport: c,
        onViewportChange: d,
        content: f,
        onContentChange: m,
        scrollbarX: p,
        onScrollbarXChange: h,
        scrollbarXEnabled: A,
        onScrollbarXEnabledChange: S,
        scrollbarY: g,
        onScrollbarYChange: w,
        scrollbarYEnabled: C,
        onScrollbarYEnabledChange: k,
        onCornerWidthChange: v,
        onCornerHeightChange: E,
      },
      b.createElement(
        Gr.div,
        ae({ dir: T }, i, {
          ref: O,
          style: {
            position: 'relative',
            '--radix-scroll-area-corner-width': x + 'px',
            '--radix-scroll-area-corner-height': y + 'px',
            ...e.style,
          },
        })
      )
    );
  }),
  I5 = 'ScrollAreaViewport',
  P5 = b.forwardRef((e, t) => {
    let { __scopeScrollArea: r, children: n, ...a } = e,
      l = Ie(I5, r),
      i = b.useRef(null),
      u = qt(t, i, l.onViewportChange);
    return b.createElement(
      b.Fragment,
      null,
      b.createElement('style', {
        dangerouslySetInnerHTML: {
          __html:
            '[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}',
        },
      }),
      b.createElement(
        Gr.div,
        ae({ 'data-radix-scroll-area-viewport': '' }, a, {
          ref: u,
          style: {
            overflowX: l.scrollbarXEnabled ? 'scroll' : 'hidden',
            overflowY: l.scrollbarYEnabled ? 'scroll' : 'hidden',
            ...e.style,
          },
        }),
        b.createElement(
          'div',
          {
            ref: l.onContentChange,
            style: { minWidth: '100%', display: 'table' },
          },
          n
        )
      )
    );
  }),
  gt = 'ScrollAreaScrollbar',
  j5 = b.forwardRef((e, t) => {
    let { forceMount: r, ...n } = e,
      a = Ie(gt, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: i } = a,
      u = e.orientation === 'horizontal';
    return (
      b.useEffect(
        () => (
          u ? l(!0) : i(!0),
          () => {
            u ? l(!1) : i(!1);
          }
        ),
        [u, l, i]
      ),
      a.type === 'hover'
        ? b.createElement(N5, ae({}, n, { ref: t, forceMount: r }))
        : a.type === 'scroll'
          ? b.createElement(H5, ae({}, n, { ref: t, forceMount: r }))
          : a.type === 'auto'
            ? b.createElement(Ou, ae({}, n, { ref: t, forceMount: r }))
            : a.type === 'always'
              ? b.createElement(qo, ae({}, n, { ref: t }))
              : null
    );
  }),
  N5 = b.forwardRef((e, t) => {
    let { forceMount: r, ...n } = e,
      a = Ie(gt, e.__scopeScrollArea),
      [l, i] = b.useState(!1);
    return (
      b.useEffect(() => {
        let u = a.scrollArea,
          s = 0;
        if (u) {
          let c = () => {
              window.clearTimeout(s), i(!0);
            },
            d = () => {
              s = window.setTimeout(() => i(!1), a.scrollHideDelay);
            };
          return (
            u.addEventListener('pointerenter', c),
            u.addEventListener('pointerleave', d),
            () => {
              window.clearTimeout(s),
                u.removeEventListener('pointerenter', c),
                u.removeEventListener('pointerleave', d);
            }
          );
        }
      }, [a.scrollArea, a.scrollHideDelay]),
      b.createElement(
        Yr,
        { present: r || l },
        b.createElement(
          Ou,
          ae({ 'data-state': l ? 'visible' : 'hidden' }, n, { ref: t })
        )
      )
    );
  }),
  H5 = b.forwardRef((e, t) => {
    let { forceMount: r, ...n } = e,
      a = Ie(gt, e.__scopeScrollArea),
      l = e.orientation === 'horizontal',
      i = Wn(() => s('SCROLL_END'), 100),
      [u, s] = L5('hidden', {
        hidden: { SCROLL: 'scrolling' },
        scrolling: { SCROLL_END: 'idle', POINTER_ENTER: 'interacting' },
        interacting: { SCROLL: 'interacting', POINTER_LEAVE: 'idle' },
        idle: {
          HIDE: 'hidden',
          SCROLL: 'scrolling',
          POINTER_ENTER: 'interacting',
        },
      });
    return (
      b.useEffect(() => {
        if (u === 'idle') {
          let c = window.setTimeout(() => s('HIDE'), a.scrollHideDelay);
          return () => window.clearTimeout(c);
        }
      }, [u, a.scrollHideDelay, s]),
      b.useEffect(() => {
        let c = a.viewport,
          d = l ? 'scrollLeft' : 'scrollTop';
        if (c) {
          let f = c[d],
            m = () => {
              let p = c[d];
              f !== p && (s('SCROLL'), i()), (f = p);
            };
          return (
            c.addEventListener('scroll', m),
            () => c.removeEventListener('scroll', m)
          );
        }
      }, [a.viewport, l, s, i]),
      b.createElement(
        Yr,
        { present: r || u !== 'hidden' },
        b.createElement(
          qo,
          ae({ 'data-state': u === 'hidden' ? 'hidden' : 'visible' }, n, {
            ref: t,
            onPointerEnter: Pt(e.onPointerEnter, () => s('POINTER_ENTER')),
            onPointerLeave: Pt(e.onPointerLeave, () => s('POINTER_LEAVE')),
          })
        )
      )
    );
  }),
  Ou = b.forwardRef((e, t) => {
    let r = Ie(gt, e.__scopeScrollArea),
      { forceMount: n, ...a } = e,
      [l, i] = b.useState(!1),
      u = e.orientation === 'horizontal',
      s = Wn(() => {
        if (r.viewport) {
          let c = r.viewport.offsetWidth < r.viewport.scrollWidth,
            d = r.viewport.offsetHeight < r.viewport.scrollHeight;
          i(u ? c : d);
        }
      }, 10);
    return (
      ar(r.viewport, s),
      ar(r.content, s),
      b.createElement(
        Yr,
        { present: n || l },
        b.createElement(
          qo,
          ae({ 'data-state': l ? 'visible' : 'hidden' }, a, { ref: t })
        )
      )
    );
  }),
  qo = b.forwardRef((e, t) => {
    let { orientation: r = 'vertical', ...n } = e,
      a = Ie(gt, e.__scopeScrollArea),
      l = b.useRef(null),
      i = b.useRef(0),
      [u, s] = b.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      c = $u(u.viewport, u.content),
      d = {
        ...n,
        sizes: u,
        onSizesChange: s,
        hasThumb: c > 0 && c < 1,
        onThumbChange: (m) => (l.current = m),
        onThumbPointerUp: () => (i.current = 0),
        onThumbPointerDown: (m) => (i.current = m),
      };
    function f(m, p) {
      return Y5(m, i.current, u, p);
    }
    return r === 'horizontal'
      ? b.createElement(
          Z5,
          ae({}, d, {
            ref: t,
            onThumbPositionChange: () => {
              if (a.viewport && l.current) {
                let m = a.viewport.scrollLeft,
                  p = ci(m, u, a.dir);
                l.current.style.transform = `translate3d(${p}px, 0, 0)`;
              }
            },
            onWheelScroll: (m) => {
              a.viewport && (a.viewport.scrollLeft = m);
            },
            onDragScroll: (m) => {
              a.viewport && (a.viewport.scrollLeft = f(m, a.dir));
            },
          })
        )
      : r === 'vertical'
        ? b.createElement(
            V5,
            ae({}, d, {
              ref: t,
              onThumbPositionChange: () => {
                if (a.viewport && l.current) {
                  let m = a.viewport.scrollTop,
                    p = ci(m, u);
                  l.current.style.transform = `translate3d(0, ${p}px, 0)`;
                }
              },
              onWheelScroll: (m) => {
                a.viewport && (a.viewport.scrollTop = m);
              },
              onDragScroll: (m) => {
                a.viewport && (a.viewport.scrollTop = f(m));
              },
            })
          )
        : null;
  }),
  Z5 = b.forwardRef((e, t) => {
    let { sizes: r, onSizesChange: n, ...a } = e,
      l = Ie(gt, e.__scopeScrollArea),
      [i, u] = b.useState(),
      s = b.useRef(null),
      c = qt(t, s, l.onScrollbarXChange);
    return (
      b.useEffect(() => {
        s.current && u(getComputedStyle(s.current));
      }, [s]),
      b.createElement(
        Ru,
        ae({ 'data-orientation': 'horizontal' }, a, {
          ref: c,
          sizes: r,
          style: {
            bottom: 0,
            left: l.dir === 'rtl' ? 'var(--radix-scroll-area-corner-width)' : 0,
            right:
              l.dir === 'ltr' ? 'var(--radix-scroll-area-corner-width)' : 0,
            '--radix-scroll-area-thumb-width': Un(r) + 'px',
            ...e.style,
          },
          onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
          onDragScroll: (d) => e.onDragScroll(d.x),
          onWheelScroll: (d, f) => {
            if (l.viewport) {
              let m = l.viewport.scrollLeft + d.deltaX;
              e.onWheelScroll(m), Lu(m, f) && d.preventDefault();
            }
          },
          onResize: () => {
            s.current &&
              l.viewport &&
              i &&
              n({
                content: l.viewport.scrollWidth,
                viewport: l.viewport.offsetWidth,
                scrollbar: {
                  size: s.current.clientWidth,
                  paddingStart: Tn(i.paddingLeft),
                  paddingEnd: Tn(i.paddingRight),
                },
              });
          },
        })
      )
    );
  }),
  V5 = b.forwardRef((e, t) => {
    let { sizes: r, onSizesChange: n, ...a } = e,
      l = Ie(gt, e.__scopeScrollArea),
      [i, u] = b.useState(),
      s = b.useRef(null),
      c = qt(t, s, l.onScrollbarYChange);
    return (
      b.useEffect(() => {
        s.current && u(getComputedStyle(s.current));
      }, [s]),
      b.createElement(
        Ru,
        ae({ 'data-orientation': 'vertical' }, a, {
          ref: c,
          sizes: r,
          style: {
            top: 0,
            right: l.dir === 'ltr' ? 0 : void 0,
            left: l.dir === 'rtl' ? 0 : void 0,
            bottom: 'var(--radix-scroll-area-corner-height)',
            '--radix-scroll-area-thumb-height': Un(r) + 'px',
            ...e.style,
          },
          onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
          onDragScroll: (d) => e.onDragScroll(d.y),
          onWheelScroll: (d, f) => {
            if (l.viewport) {
              let m = l.viewport.scrollTop + d.deltaY;
              e.onWheelScroll(m), Lu(m, f) && d.preventDefault();
            }
          },
          onResize: () => {
            s.current &&
              l.viewport &&
              i &&
              n({
                content: l.viewport.scrollHeight,
                viewport: l.viewport.offsetHeight,
                scrollbar: {
                  size: s.current.clientHeight,
                  paddingStart: Tn(i.paddingTop),
                  paddingEnd: Tn(i.paddingBottom),
                },
              });
          },
        })
      )
    );
  }),
  [z5, Tu] = _u(gt),
  Ru = b.forwardRef((e, t) => {
    let {
        __scopeScrollArea: r,
        sizes: n,
        hasThumb: a,
        onThumbChange: l,
        onThumbPointerUp: i,
        onThumbPointerDown: u,
        onThumbPositionChange: s,
        onDragScroll: c,
        onWheelScroll: d,
        onResize: f,
        ...m
      } = e,
      p = Ie(gt, r),
      [h, g] = b.useState(null),
      w = qt(t, (O) => g(O)),
      x = b.useRef(null),
      v = b.useRef(''),
      y = p.viewport,
      E = n.content - n.viewport,
      A = Bt(d),
      S = Bt(s),
      C = Wn(f, 10);
    function k(O) {
      if (x.current) {
        let T = O.clientX - x.current.left,
          R = O.clientY - x.current.top;
        c({ x: T, y: R });
      }
    }
    return (
      b.useEffect(() => {
        let O = (T) => {
          let R = T.target;
          h != null && h.contains(R) && A(T, E);
        };
        return (
          document.addEventListener('wheel', O, { passive: !1 }),
          () => document.removeEventListener('wheel', O, { passive: !1 })
        );
      }, [y, h, E, A]),
      b.useEffect(S, [n, S]),
      ar(h, C),
      ar(p.content, C),
      b.createElement(
        z5,
        {
          scope: r,
          scrollbar: h,
          hasThumb: a,
          onThumbChange: Bt(l),
          onThumbPointerUp: Bt(i),
          onThumbPositionChange: S,
          onThumbPointerDown: Bt(u),
        },
        b.createElement(
          Gr.div,
          ae({}, m, {
            ref: w,
            style: { position: 'absolute', ...m.style },
            onPointerDown: Pt(e.onPointerDown, (O) => {
              O.button === 0 &&
                (O.target.setPointerCapture(O.pointerId),
                (x.current = h.getBoundingClientRect()),
                (v.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = 'none'),
                p.viewport && (p.viewport.style.scrollBehavior = 'auto'),
                k(O));
            }),
            onPointerMove: Pt(e.onPointerMove, k),
            onPointerUp: Pt(e.onPointerUp, (O) => {
              let T = O.target;
              T.hasPointerCapture(O.pointerId) &&
                T.releasePointerCapture(O.pointerId),
                (document.body.style.webkitUserSelect = v.current),
                p.viewport && (p.viewport.style.scrollBehavior = ''),
                (x.current = null);
            }),
          })
        )
      )
    );
  }),
  ao = 'ScrollAreaThumb',
  q5 = b.forwardRef((e, t) => {
    let { forceMount: r, ...n } = e,
      a = Tu(ao, e.__scopeScrollArea);
    return b.createElement(
      Yr,
      { present: r || a.hasThumb },
      b.createElement(U5, ae({ ref: t }, n))
    );
  }),
  U5 = b.forwardRef((e, t) => {
    let { __scopeScrollArea: r, style: n, ...a } = e,
      l = Ie(ao, r),
      i = Tu(ao, r),
      { onThumbPositionChange: u } = i,
      s = qt(t, (f) => i.onThumbChange(f)),
      c = b.useRef(),
      d = Wn(() => {
        c.current && (c.current(), (c.current = void 0));
      }, 100);
    return (
      b.useEffect(() => {
        let f = l.viewport;
        if (f) {
          let m = () => {
            if ((d(), !c.current)) {
              let p = K5(f, u);
              (c.current = p), u();
            }
          };
          return (
            u(),
            f.addEventListener('scroll', m),
            () => f.removeEventListener('scroll', m)
          );
        }
      }, [l.viewport, d, u]),
      b.createElement(
        Gr.div,
        ae({ 'data-state': i.hasThumb ? 'visible' : 'hidden' }, a, {
          ref: s,
          style: {
            width: 'var(--radix-scroll-area-thumb-width)',
            height: 'var(--radix-scroll-area-thumb-height)',
            ...n,
          },
          onPointerDownCapture: Pt(e.onPointerDownCapture, (f) => {
            let m = f.target.getBoundingClientRect(),
              p = f.clientX - m.left,
              h = f.clientY - m.top;
            i.onThumbPointerDown({ x: p, y: h });
          }),
          onPointerUp: Pt(e.onPointerUp, i.onThumbPointerUp),
        })
      )
    );
  }),
  Fu = 'ScrollAreaCorner',
  W5 = b.forwardRef((e, t) => {
    let r = Ie(Fu, e.__scopeScrollArea),
      n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== 'scroll' && n
      ? b.createElement(G5, ae({}, e, { ref: t }))
      : null;
  }),
  G5 = b.forwardRef((e, t) => {
    let { __scopeScrollArea: r, ...n } = e,
      a = Ie(Fu, r),
      [l, i] = b.useState(0),
      [u, s] = b.useState(0),
      c = !!(l && u);
    return (
      ar(a.scrollbarX, () => {
        var d;
        let f =
          ((d = a.scrollbarX) === null || d === void 0
            ? void 0
            : d.offsetHeight) || 0;
        a.onCornerHeightChange(f), s(f);
      }),
      ar(a.scrollbarY, () => {
        var d;
        let f =
          ((d = a.scrollbarY) === null || d === void 0
            ? void 0
            : d.offsetWidth) || 0;
        a.onCornerWidthChange(f), i(f);
      }),
      c
        ? b.createElement(
            Gr.div,
            ae({}, n, {
              ref: t,
              style: {
                width: l,
                height: u,
                position: 'absolute',
                right: a.dir === 'ltr' ? 0 : void 0,
                left: a.dir === 'rtl' ? 0 : void 0,
                bottom: 0,
                ...e.style,
              },
            })
          )
        : null
    );
  });
function Tn(e) {
  return e ? parseInt(e, 10) : 0;
}
function $u(e, t) {
  let r = e / t;
  return isNaN(r) ? 0 : r;
}
function Un(e) {
  let t = $u(e.viewport, e.content),
    r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function Y5(e, t, r, n = 'ltr') {
  let a = Un(r),
    l = a / 2,
    i = t || l,
    u = a - i,
    s = r.scrollbar.paddingStart + i,
    c = r.scrollbar.size - r.scrollbar.paddingEnd - u,
    d = r.content - r.viewport,
    f = n === 'ltr' ? [0, d] : [d * -1, 0];
  return Du([s, c], f)(e);
}
function ci(e, t, r = 'ltr') {
  let n = Un(t),
    a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    l = t.scrollbar.size - a,
    i = t.content - t.viewport,
    u = l - n,
    s = r === 'ltr' ? [0, i] : [i * -1, 0],
    c = D5(e, s);
  return Du([0, i], [0, u])(c);
}
function Du(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    let n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function Lu(e, t) {
  return e > 0 && e < t;
}
var K5 = (e, t = () => {}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop },
    n = 0;
  return (
    (function a() {
      let l = { left: e.scrollLeft, top: e.scrollTop },
        i = r.left !== l.left,
        u = r.top !== l.top;
      (i || u) && t(), (r = l), (n = window.requestAnimationFrame(a));
    })(),
    () => window.cancelAnimationFrame(n)
  );
};
function Wn(e, t) {
  let r = Bt(e),
    n = b.useRef(0);
  return (
    b.useEffect(() => () => window.clearTimeout(n.current), []),
    b.useCallback(() => {
      window.clearTimeout(n.current), (n.current = window.setTimeout(r, t));
    }, [r, t])
  );
}
function ar(e, t) {
  let r = Bt(t);
  no(() => {
    let n = 0;
    if (e) {
      let a = new ResizeObserver(() => {
        cancelAnimationFrame(n), (n = window.requestAnimationFrame(r));
      });
      return (
        a.observe(e),
        () => {
          window.cancelAnimationFrame(n), a.unobserve(e);
        }
      );
    }
  }, [e, r]);
}
var X5 = B5,
  J5 = P5,
  Q5 = j5,
  ef = q5,
  tf = W5,
  rf = _(X5)(({ scrollbarsize: e, offset: t }) => ({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '--scrollbar-size': `${e + t}px`,
    '--radix-scroll-area-thumb-width': `${e}px`,
  })),
  nf = _(J5)({ width: '100%', height: '100%' }),
  di = _(Q5)(({ offset: e, horizontal: t, vertical: r }) => ({
    display: 'flex',
    userSelect: 'none',
    touchAction: 'none',
    background: 'transparent',
    transition: 'all 0.2s ease-out',
    borderRadius: 'var(--scrollbar-size)',
    '&[data-orientation="vertical"]': {
      width: 'var(--scrollbar-size)',
      paddingRight: e,
      marginTop: e,
      marginBottom: t === 'true' && r === 'true' ? 0 : e,
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: 'column',
      height: 'var(--scrollbar-size)',
      paddingBottom: e,
      marginLeft: e,
      marginRight: t === 'true' && r === 'true' ? 0 : e,
    },
  })),
  pi = _(ef)(({ theme: e }) => ({
    flex: 1,
    background: e.textMutedColor,
    opacity: 0.5,
    borderRadius: 'var(--scrollbar-size)',
    position: 'relative',
    transition: 'opacity 0.2s ease-out',
    '&:hover': { opacity: 0.8 },
    '::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '100%',
      height: '100%',
      minWidth: 44,
      minHeight: 44,
    },
  })),
  Uo = ({
    children: e,
    horizontal: t = !1,
    vertical: r = !1,
    offset: n = 2,
    scrollbarSize: a = 6,
    className: l,
  }) =>
    o.createElement(
      rf,
      { scrollbarsize: a, offset: n, className: l },
      o.createElement(nf, null, e),
      t &&
        o.createElement(
          di,
          {
            orientation: 'horizontal',
            offset: n,
            horizontal: t.toString(),
            vertical: r.toString(),
          },
          o.createElement(pi, null)
        ),
      r &&
        o.createElement(
          di,
          {
            orientation: 'vertical',
            offset: n,
            horizontal: t.toString(),
            vertical: r.toString(),
          },
          o.createElement(pi, null)
        ),
      t && r && o.createElement(tf, null)
    ),
  { navigator: ln, document: Ar, window: af } = O2;
Te.registerLanguage('jsextra', B2);
Te.registerLanguage('jsx', R2);
Te.registerLanguage('json', P2);
Te.registerLanguage('yml', U2);
Te.registerLanguage('md', z2);
Te.registerLanguage('bash', $2);
Te.registerLanguage('css', L2);
Te.registerLanguage('html', Z2);
Te.registerLanguage('tsx', G2);
Te.registerLanguage('typescript', K2);
Te.registerLanguage('graphql', N2);
var of = zt(2)((e) =>
    Object.entries(e.code || {}).reduce(
      (t, [r, n]) => ({ ...t, [`* .${r}`]: n }),
      {}
    )
  ),
  lf = Mu();
function Mu() {
  return ln != null && ln.clipboard
    ? (e) => ln.clipboard.writeText(e)
    : async (e) => {
        let t = Ar.createElement('TEXTAREA'),
          r = Ar.activeElement;
        (t.value = e),
          Ar.body.appendChild(t),
          t.select(),
          Ar.execCommand('copy'),
          Ar.body.removeChild(t),
          r.focus();
      };
}
var sf = _.div(
    ({ theme: e }) => ({
      position: 'relative',
      overflow: 'hidden',
      color: e.color.defaultText,
    }),
    ({ theme: e, bordered: t }) =>
      t
        ? {
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.borderRadius,
            background: e.background.content,
          }
        : {},
    ({ showLineNumbers: e }) =>
      e
        ? {
            '.react-syntax-highlighter-line-number::before': {
              content: 'attr(data-line-number)',
            },
          }
        : {}
  ),
  uf = ({ children: e, className: t }) =>
    o.createElement(Uo, { horizontal: !0, vertical: !0, className: t }, e),
  cf = _(uf)({ position: 'relative' }, ({ theme: e }) => of(e)),
  df = _.pre(({ theme: e, padded: t }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    margin: 0,
    padding: t ? e.layoutMargin : 0,
  })),
  pf = _.div(({ theme: e }) => ({
    flex: 1,
    paddingLeft: 2,
    paddingRight: e.layoutMargin,
    opacity: 1,
  })),
  Bu = (e) => {
    let t = [...e.children],
      r = t[0],
      n = r.children[0].value,
      a = {
        ...r,
        children: [],
        properties: {
          ...r.properties,
          'data-line-number': n,
          style: { ...r.properties.style, userSelect: 'auto' },
        },
      };
    return (t[0] = a), { ...e, children: t };
  },
  ff = ({ rows: e, stylesheet: t, useInlineStyles: r }) =>
    e.map((n, a) =>
      Ho({
        node: Bu(n),
        stylesheet: t,
        useInlineStyles: r,
        key: `code-segement${a}`,
      })
    ),
  mf = (e, t) =>
    t
      ? e
        ? ({ rows: r, ...n }) => e({ rows: r.map((a) => Bu(a)), ...n })
        : ff
      : e,
  Wo = ({
    children: e,
    language: t = 'jsx',
    copyable: r = !1,
    bordered: n = !1,
    padded: a = !1,
    format: l = !0,
    formatter: i = null,
    className: u = null,
    showLineNumbers: s = !1,
    ...c
  }) => {
    if (typeof e != 'string' || !e.trim()) return null;
    let d = i ? i(l, e) : e.trim(),
      [f, m] = b.useState(!1),
      p = b.useCallback(
        (g) => {
          g.preventDefault(),
            lf(d)
              .then(() => {
                m(!0), af.setTimeout(() => m(!1), 1500);
              })
              .catch(_2.error);
        },
        [d]
      ),
      h = mf(c.renderer, s);
    return o.createElement(
      sf,
      { bordered: n, padded: a, showLineNumbers: s, className: u },
      o.createElement(
        cf,
        null,
        o.createElement(
          Te,
          {
            padded: a || n,
            language: t,
            showLineNumbers: s,
            showInlineLineNumbers: s,
            useInlineStyles: !1,
            PreTag: df,
            CodeTag: pf,
            lineNumberContainerStyle: {},
            ...c,
            renderer: h,
          },
          d
        )
      ),
      r
        ? o.createElement(zo, {
            actionItems: [{ title: f ? 'Copied' : 'Copy', onClick: p }],
          })
        : null
    );
  };
Wo.registerLanguage = (...e) => Te.registerLanguage(...e);
var Qw = Wo;
const { global: gf } = __STORYBOOK_MODULE_GLOBAL__;
var hf = Z({
  '../../node_modules/react-fast-compare/index.js'(e, t) {
    var r = typeof Element < 'u',
      n = typeof Map == 'function',
      a = typeof Set == 'function',
      l = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
    function i(u, s) {
      if (u === s) return !0;
      if (u && s && typeof u == 'object' && typeof s == 'object') {
        if (u.constructor !== s.constructor) return !1;
        var c, d, f;
        if (Array.isArray(u)) {
          if (((c = u.length), c != s.length)) return !1;
          for (d = c; d-- !== 0; ) if (!i(u[d], s[d])) return !1;
          return !0;
        }
        var m;
        if (n && u instanceof Map && s instanceof Map) {
          if (u.size !== s.size) return !1;
          for (m = u.entries(); !(d = m.next()).done; )
            if (!s.has(d.value[0])) return !1;
          for (m = u.entries(); !(d = m.next()).done; )
            if (!i(d.value[1], s.get(d.value[0]))) return !1;
          return !0;
        }
        if (a && u instanceof Set && s instanceof Set) {
          if (u.size !== s.size) return !1;
          for (m = u.entries(); !(d = m.next()).done; )
            if (!s.has(d.value[0])) return !1;
          return !0;
        }
        if (l && ArrayBuffer.isView(u) && ArrayBuffer.isView(s)) {
          if (((c = u.length), c != s.length)) return !1;
          for (d = c; d-- !== 0; ) if (u[d] !== s[d]) return !1;
          return !0;
        }
        if (u.constructor === RegExp)
          return u.source === s.source && u.flags === s.flags;
        if (
          u.valueOf !== Object.prototype.valueOf &&
          typeof u.valueOf == 'function' &&
          typeof s.valueOf == 'function'
        )
          return u.valueOf() === s.valueOf();
        if (
          u.toString !== Object.prototype.toString &&
          typeof u.toString == 'function' &&
          typeof s.toString == 'function'
        )
          return u.toString() === s.toString();
        if (((f = Object.keys(u)), (c = f.length), c !== Object.keys(s).length))
          return !1;
        for (d = c; d-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(s, f[d])) return !1;
        if (r && u instanceof Element) return !1;
        for (d = c; d-- !== 0; )
          if (
            !(
              (f[d] === '_owner' || f[d] === '__v' || f[d] === '__o') &&
              u.$$typeof
            ) &&
            !i(u[f[d]], s[f[d]])
          )
            return !1;
        return !0;
      }
      return u !== u && s !== s;
    }
    t.exports = function (u, s) {
      try {
        return i(u, s);
      } catch (c) {
        if ((c.message || '').match(/stack|recursion/i))
          return (
            console.warn('react-fast-compare cannot handle circular refs'), !1
          );
        throw c;
      }
    };
  },
});
function bf(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    l;
  for (l = 0; l < n.length; l++)
    (a = n[l]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function pt() {
  return (
    (pt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    pt.apply(this, arguments)
  );
}
var fi = function (e) {
    return e.reduce(function (t, r) {
      var n = r[0],
        a = r[1];
      return (t[n] = a), t;
    }, {});
  },
  mi =
    typeof window < 'u' && window.document && window.document.createElement
      ? b.useLayoutEffect
      : b.useEffect,
  xe = 'top',
  Me = 'bottom',
  Be = 'right',
  we = 'left',
  Gn = 'auto',
  Kr = [xe, Me, Be, we],
  or = 'start',
  Ir = 'end',
  yf = 'clippingParents',
  Iu = 'viewport',
  Sr = 'popper',
  vf = 'reference',
  gi = Kr.reduce(function (e, t) {
    return e.concat([t + '-' + or, t + '-' + Ir]);
  }, []),
  Pu = [].concat(Kr, [Gn]).reduce(function (e, t) {
    return e.concat([t, t + '-' + or, t + '-' + Ir]);
  }, []),
  Ef = 'beforeRead',
  xf = 'read',
  wf = 'afterRead',
  Af = 'beforeMain',
  Sf = 'main',
  Cf = 'afterMain',
  kf = 'beforeWrite',
  _f = 'write',
  Of = 'afterWrite',
  Tf = [Ef, xf, wf, Af, Sf, Cf, kf, _f, Of];
function st(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function _e(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Vt(e) {
  var t = _e(e).Element;
  return e instanceof t || e instanceof Element;
}
function Le(e) {
  var t = _e(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Go(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = _e(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Rf(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      l = t.elements[r];
    !Le(l) ||
      !st(l) ||
      (Object.assign(l.style, n),
      Object.keys(a).forEach(function (i) {
        var u = a[i];
        u === !1 ? l.removeAttribute(i) : l.setAttribute(i, u === !0 ? '' : u);
      }));
  });
}
function Ff(e) {
  var t = e.state,
    r = {
      popper: {
        position: t.options.strategy,
        left: '0',
        top: '0',
        margin: '0',
      },
      arrow: { position: 'absolute' },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var a = t.elements[n],
          l = t.attributes[n] || {},
          i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          u = i.reduce(function (s, c) {
            return (s[c] = ''), s;
          }, {});
        !Le(a) ||
          !st(a) ||
          (Object.assign(a.style, u),
          Object.keys(l).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
var $f = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: Rf,
  effect: Ff,
  requires: ['computeStyles'],
};
function it(e) {
  return e.split('-')[0];
}
var jt = Math.max,
  Rn = Math.min,
  lr = Math.round;
function oo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function ju() {
  return !/^((?!chrome|android).)*safari/i.test(oo());
}
function ir(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    a = 1,
    l = 1;
  t &&
    Le(e) &&
    ((a = (e.offsetWidth > 0 && lr(n.width) / e.offsetWidth) || 1),
    (l = (e.offsetHeight > 0 && lr(n.height) / e.offsetHeight) || 1));
  var i = Vt(e) ? _e(e) : window,
    u = i.visualViewport,
    s = !ju() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / a,
    d = (n.top + (s && u ? u.offsetTop : 0)) / l,
    f = n.width / a,
    m = n.height / l;
  return {
    width: f,
    height: m,
    top: d,
    right: c + f,
    bottom: d + m,
    left: c,
    x: c,
    y: d,
  };
}
function Yo(e) {
  var t = ir(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Nu(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Go(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function mt(e) {
  return _e(e).getComputedStyle(e);
}
function Df(e) {
  return ['table', 'td', 'th'].indexOf(st(e)) >= 0;
}
function Ct(e) {
  return ((Vt(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Yn(e) {
  return st(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (Go(e) ? e.host : null) || Ct(e);
}
function hi(e) {
  return !Le(e) || mt(e).position === 'fixed' ? null : e.offsetParent;
}
function Lf(e) {
  var t = /firefox/i.test(oo()),
    r = /Trident/i.test(oo());
  if (r && Le(e)) {
    var n = mt(e);
    if (n.position === 'fixed') return null;
  }
  var a = Yn(e);
  for (Go(a) && (a = a.host); Le(a) && ['html', 'body'].indexOf(st(a)) < 0; ) {
    var l = mt(a);
    if (
      l.transform !== 'none' ||
      l.perspective !== 'none' ||
      l.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(l.willChange) !== -1 ||
      (t && l.willChange === 'filter') ||
      (t && l.filter && l.filter !== 'none')
    )
      return a;
    a = a.parentNode;
  }
  return null;
}
function Xr(e) {
  for (var t = _e(e), r = hi(e); r && Df(r) && mt(r).position === 'static'; )
    r = hi(r);
  return r &&
    (st(r) === 'html' || (st(r) === 'body' && mt(r).position === 'static'))
    ? t
    : r || Lf(e) || t;
}
function Ko(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function Or(e, t, r) {
  return jt(e, Rn(t, r));
}
function Mf(e, t, r) {
  var n = Or(e, t, r);
  return n > r ? r : n;
}
function Hu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Zu(e) {
  return Object.assign({}, Hu(), e);
}
function Vu(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var Bf = function (e, t) {
  return (
    (e =
      typeof e == 'function'
        ? e(Object.assign({}, t.rects, { placement: t.placement }))
        : e),
    Zu(typeof e != 'number' ? e : Vu(e, Kr))
  );
};
function If(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    l = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    u = it(r.placement),
    s = Ko(u),
    c = [we, Be].indexOf(u) >= 0,
    d = c ? 'height' : 'width';
  if (!(!l || !i)) {
    var f = Bf(a.padding, r),
      m = Yo(l),
      p = s === 'y' ? xe : we,
      h = s === 'y' ? Me : Be,
      g =
        r.rects.reference[d] + r.rects.reference[s] - i[s] - r.rects.popper[d],
      w = i[s] - r.rects.reference[s],
      x = Xr(l),
      v = x ? (s === 'y' ? x.clientHeight || 0 : x.clientWidth || 0) : 0,
      y = g / 2 - w / 2,
      E = f[p],
      A = v - m[d] - f[h],
      S = v / 2 - m[d] / 2 + y,
      C = Or(E, S, A),
      k = s;
    r.modifiersData[n] = ((t = {}), (t[k] = C), (t.centerOffset = C - S), t);
  }
}
function Pf(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? '[data-popper-arrow]' : n;
  a != null &&
    ((typeof a == 'string' && ((a = t.elements.popper.querySelector(a)), !a)) ||
      (Nu(t.elements.popper, a) && (t.elements.arrow = a)));
}
var jf = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: If,
  effect: Pf,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function sr(e) {
  return e.split('-')[1];
}
var Nf = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function Hf(e, t) {
  var r = e.x,
    n = e.y,
    a = t.devicePixelRatio || 1;
  return { x: lr(r * a) / a || 0, y: lr(n * a) / a || 0 };
}
function bi(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    l = e.variation,
    i = e.offsets,
    u = e.position,
    s = e.gpuAcceleration,
    c = e.adaptive,
    d = e.roundOffsets,
    f = e.isFixed,
    m = i.x,
    p = m === void 0 ? 0 : m,
    h = i.y,
    g = h === void 0 ? 0 : h,
    w = typeof d == 'function' ? d({ x: p, y: g }) : { x: p, y: g };
  (p = w.x), (g = w.y);
  var x = i.hasOwnProperty('x'),
    v = i.hasOwnProperty('y'),
    y = we,
    E = xe,
    A = window;
  if (c) {
    var S = Xr(r),
      C = 'clientHeight',
      k = 'clientWidth';
    if (
      (S === _e(r) &&
        ((S = Ct(r)),
        mt(S).position !== 'static' &&
          u === 'absolute' &&
          ((C = 'scrollHeight'), (k = 'scrollWidth'))),
      (S = S),
      a === xe || ((a === we || a === Be) && l === Ir))
    ) {
      E = Me;
      var O = f && S === A && A.visualViewport ? A.visualViewport.height : S[C];
      (g -= O - n.height), (g *= s ? 1 : -1);
    }
    if (a === we || ((a === xe || a === Me) && l === Ir)) {
      y = Be;
      var T = f && S === A && A.visualViewport ? A.visualViewport.width : S[k];
      (p -= T - n.width), (p *= s ? 1 : -1);
    }
  }
  var R = Object.assign({ position: u }, c && Nf),
    F = d === !0 ? Hf({ x: p, y: g }, _e(r)) : { x: p, y: g };
  if (((p = F.x), (g = F.y), s)) {
    var $;
    return Object.assign(
      {},
      R,
      (($ = {}),
      ($[E] = v ? '0' : ''),
      ($[y] = x ? '0' : ''),
      ($.transform =
        (A.devicePixelRatio || 1) <= 1
          ? 'translate(' + p + 'px, ' + g + 'px)'
          : 'translate3d(' + p + 'px, ' + g + 'px, 0)'),
      $)
    );
  }
  return Object.assign(
    {},
    R,
    ((t = {}),
    (t[E] = v ? g + 'px' : ''),
    (t[y] = x ? p + 'px' : ''),
    (t.transform = ''),
    t)
  );
}
function Zf(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    l = r.adaptive,
    i = l === void 0 ? !0 : l,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    c = {
      placement: it(t.placement),
      variation: sr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === 'fixed',
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      bi(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: s,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        bi(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: s,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }));
}
var Vf = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: Zf,
    data: {},
  },
  sn = { passive: !0 };
function zf(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    l = a === void 0 ? !0 : a,
    i = n.resize,
    u = i === void 0 ? !0 : i,
    s = _e(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    l &&
      c.forEach(function (d) {
        d.addEventListener('scroll', r.update, sn);
      }),
    u && s.addEventListener('resize', r.update, sn),
    function () {
      l &&
        c.forEach(function (d) {
          d.removeEventListener('scroll', r.update, sn);
        }),
        u && s.removeEventListener('resize', r.update, sn);
    }
  );
}
var qf = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: zf,
    data: {},
  },
  Uf = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function yn(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Uf[t];
  });
}
var Wf = { start: 'end', end: 'start' };
function yi(e) {
  return e.replace(/start|end/g, function (t) {
    return Wf[t];
  });
}
function Xo(e) {
  var t = _e(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Jo(e) {
  return ir(Ct(e)).left + Xo(e).scrollLeft;
}
function Gf(e, t) {
  var r = _e(e),
    n = Ct(e),
    a = r.visualViewport,
    l = n.clientWidth,
    i = n.clientHeight,
    u = 0,
    s = 0;
  if (a) {
    (l = a.width), (i = a.height);
    var c = ju();
    (c || (!c && t === 'fixed')) && ((u = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: l, height: i, x: u + Jo(e), y: s };
}
function Yf(e) {
  var t,
    r = Ct(e),
    n = Xo(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    l = jt(
      r.scrollWidth,
      r.clientWidth,
      a ? a.scrollWidth : 0,
      a ? a.clientWidth : 0
    ),
    i = jt(
      r.scrollHeight,
      r.clientHeight,
      a ? a.scrollHeight : 0,
      a ? a.clientHeight : 0
    ),
    u = -n.scrollLeft + Jo(e),
    s = -n.scrollTop;
  return (
    mt(a || r).direction === 'rtl' &&
      (u += jt(r.clientWidth, a ? a.clientWidth : 0) - l),
    { width: l, height: i, x: u, y: s }
  );
}
function Qo(e) {
  var t = mt(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function zu(e) {
  return ['html', 'body', '#document'].indexOf(st(e)) >= 0
    ? e.ownerDocument.body
    : Le(e) && Qo(e)
      ? e
      : zu(Yn(e));
}
function Tr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = zu(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = _e(n),
    i = a ? [l].concat(l.visualViewport || [], Qo(n) ? n : []) : n,
    u = t.concat(i);
  return a ? u : u.concat(Tr(Yn(i)));
}
function lo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Kf(e, t) {
  var r = ir(e, !1, t === 'fixed');
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function Ei(e, t, r) {
  return t === Iu ? lo(Gf(e, r)) : Vt(t) ? Kf(t, r) : lo(Yf(Ct(e)));
}
function Xf(e) {
  var t = Tr(Yn(e)),
    r = ['absolute', 'fixed'].indexOf(mt(e).position) >= 0,
    n = r && Le(e) ? Xr(e) : e;
  return Vt(n)
    ? t.filter(function (a) {
        return Vt(a) && Nu(a, n) && st(a) !== 'body';
      })
    : [];
}
function Jf(e, t, r, n) {
  var a = t === 'clippingParents' ? Xf(e) : [].concat(t),
    l = [].concat(a, [r]),
    i = l[0],
    u = l.reduce(
      function (s, c) {
        var d = Ei(e, c, n);
        return (
          (s.top = jt(d.top, s.top)),
          (s.right = Rn(d.right, s.right)),
          (s.bottom = Rn(d.bottom, s.bottom)),
          (s.left = jt(d.left, s.left)),
          s
        );
      },
      Ei(e, i, n)
    );
  return (
    (u.width = u.right - u.left),
    (u.height = u.bottom - u.top),
    (u.x = u.left),
    (u.y = u.top),
    u
  );
}
function qu(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? it(n) : null,
    l = n ? sr(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (a) {
    case xe:
      s = { x: i, y: t.y - r.height };
      break;
    case Me:
      s = { x: i, y: t.y + t.height };
      break;
    case Be:
      s = { x: t.x + t.width, y: u };
      break;
    case we:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = a ? Ko(a) : null;
  if (c != null) {
    var d = c === 'y' ? 'height' : 'width';
    switch (l) {
      case or:
        s[c] = s[c] - (t[d] / 2 - r[d] / 2);
        break;
      case Ir:
        s[c] = s[c] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Pr(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    l = r.strategy,
    i = l === void 0 ? e.strategy : l,
    u = r.boundary,
    s = u === void 0 ? yf : u,
    c = r.rootBoundary,
    d = c === void 0 ? Iu : c,
    f = r.elementContext,
    m = f === void 0 ? Sr : f,
    p = r.altBoundary,
    h = p === void 0 ? !1 : p,
    g = r.padding,
    w = g === void 0 ? 0 : g,
    x = Zu(typeof w != 'number' ? w : Vu(w, Kr)),
    v = m === Sr ? vf : Sr,
    y = e.rects.popper,
    E = e.elements[h ? v : m],
    A = Jf(Vt(E) ? E : E.contextElement || Ct(e.elements.popper), s, d, i),
    S = ir(e.elements.reference),
    C = qu({ reference: S, element: y, strategy: 'absolute', placement: a }),
    k = lo(Object.assign({}, y, C)),
    O = m === Sr ? k : S,
    T = {
      top: A.top - O.top + x.top,
      bottom: O.bottom - A.bottom + x.bottom,
      left: A.left - O.left + x.left,
      right: O.right - A.right + x.right,
    },
    R = e.modifiersData.offset;
  if (m === Sr && R) {
    var F = R[a];
    Object.keys(T).forEach(function ($) {
      var P = [Be, Me].indexOf($) >= 0 ? 1 : -1,
        D = [xe, Me].indexOf($) >= 0 ? 'y' : 'x';
      T[$] += F[D] * P;
    });
  }
  return T;
}
function Qf(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    l = r.rootBoundary,
    i = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? Pu : s,
    d = sr(n),
    f = d
      ? u
        ? gi
        : gi.filter(function (h) {
            return sr(h) === d;
          })
      : Kr,
    m = f.filter(function (h) {
      return c.indexOf(h) >= 0;
    });
  m.length === 0 && (m = f);
  var p = m.reduce(function (h, g) {
    return (
      (h[g] = Pr(e, { placement: g, boundary: a, rootBoundary: l, padding: i })[
        it(g)
      ]),
      h
    );
  }, {});
  return Object.keys(p).sort(function (h, g) {
    return p[h] - p[g];
  });
}
function em(e) {
  if (it(e) === Gn) return [];
  var t = yn(e);
  return [yi(e), t, yi(t)];
}
function tm(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        l = a === void 0 ? !0 : a,
        i = r.altAxis,
        u = i === void 0 ? !0 : i,
        s = r.fallbackPlacements,
        c = r.padding,
        d = r.boundary,
        f = r.rootBoundary,
        m = r.altBoundary,
        p = r.flipVariations,
        h = p === void 0 ? !0 : p,
        g = r.allowedAutoPlacements,
        w = t.options.placement,
        x = it(w),
        v = x === w,
        y = s || (v || !h ? [yn(w)] : em(w)),
        E = [w].concat(y).reduce(function (K, I) {
          return K.concat(
            it(I) === Gn
              ? Qf(t, {
                  placement: I,
                  boundary: d,
                  rootBoundary: f,
                  padding: c,
                  flipVariations: h,
                  allowedAutoPlacements: g,
                })
              : I
          );
        }, []),
        A = t.rects.reference,
        S = t.rects.popper,
        C = new Map(),
        k = !0,
        O = E[0],
        T = 0;
      T < E.length;
      T++
    ) {
      var R = E[T],
        F = it(R),
        $ = sr(R) === or,
        P = [xe, Me].indexOf(F) >= 0,
        D = P ? 'width' : 'height',
        L = Pr(t, {
          placement: R,
          boundary: d,
          rootBoundary: f,
          altBoundary: m,
          padding: c,
        }),
        N = P ? ($ ? Be : we) : $ ? Me : xe;
      A[D] > S[D] && (N = yn(N));
      var V = yn(N),
        B = [];
      if (
        (l && B.push(L[F] <= 0),
        u && B.push(L[N] <= 0, L[V] <= 0),
        B.every(function (K) {
          return K;
        }))
      ) {
        (O = R), (k = !1);
        break;
      }
      C.set(R, B);
    }
    if (k)
      for (
        var H = h ? 3 : 1,
          Y = function (K) {
            var I = E.find(function (z) {
              var q = C.get(z);
              if (q)
                return q.slice(0, K).every(function (ie) {
                  return ie;
                });
            });
            if (I) return (O = I), 'break';
          },
          te = H;
        te > 0;
        te--
      ) {
        var G = Y(te);
        if (G === 'break') break;
      }
    t.placement !== O &&
      ((t.modifiersData[n]._skip = !0), (t.placement = O), (t.reset = !0));
  }
}
var rm = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: tm,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
};
function xi(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function wi(e) {
  return [xe, Be, Me, we].some(function (t) {
    return e[t] >= 0;
  });
}
function nm(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    l = t.modifiersData.preventOverflow,
    i = Pr(t, { elementContext: 'reference' }),
    u = Pr(t, { altBoundary: !0 }),
    s = xi(i, n),
    c = xi(u, a, l),
    d = wi(s),
    f = wi(c);
  (t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: f,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': d,
      'data-popper-escaped': f,
    }));
}
var am = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: nm,
};
function om(e, t, r) {
  var n = it(e),
    a = [we, xe].indexOf(n) >= 0 ? -1 : 1,
    l = typeof r == 'function' ? r(Object.assign({}, t, { placement: e })) : r,
    i = l[0],
    u = l[1];
  return (
    (i = i || 0),
    (u = (u || 0) * a),
    [we, Be].indexOf(n) >= 0 ? { x: u, y: i } : { x: i, y: u }
  );
}
function lm(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    l = a === void 0 ? [0, 0] : a,
    i = Pu.reduce(function (d, f) {
      return (d[f] = om(f, t.rects, l)), d;
    }, {}),
    u = i[t.placement],
    s = u.x,
    c = u.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = i);
}
var im = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: lm,
};
function sm(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = qu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  });
}
var um = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: sm,
  data: {},
};
function cm(e) {
  return e === 'x' ? 'y' : 'x';
}
function dm(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    l = a === void 0 ? !0 : a,
    i = r.altAxis,
    u = i === void 0 ? !1 : i,
    s = r.boundary,
    c = r.rootBoundary,
    d = r.altBoundary,
    f = r.padding,
    m = r.tether,
    p = m === void 0 ? !0 : m,
    h = r.tetherOffset,
    g = h === void 0 ? 0 : h,
    w = Pr(t, { boundary: s, rootBoundary: c, padding: f, altBoundary: d }),
    x = it(t.placement),
    v = sr(t.placement),
    y = !v,
    E = Ko(x),
    A = cm(E),
    S = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    k = t.rects.popper,
    O =
      typeof g == 'function'
        ? g(Object.assign({}, t.rects, { placement: t.placement }))
        : g,
    T =
      typeof O == 'number'
        ? { mainAxis: O, altAxis: O }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
    R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    F = { x: 0, y: 0 };
  if (S) {
    if (l) {
      var $,
        P = E === 'y' ? xe : we,
        D = E === 'y' ? Me : Be,
        L = E === 'y' ? 'height' : 'width',
        N = S[E],
        V = N + w[P],
        B = N - w[D],
        H = p ? -k[L] / 2 : 0,
        Y = v === or ? C[L] : k[L],
        te = v === or ? -k[L] : -C[L],
        G = t.elements.arrow,
        K = p && G ? Yo(G) : { width: 0, height: 0 },
        I = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Hu(),
        z = I[P],
        q = I[D],
        ie = Or(0, C[L], K[L]),
        he = y ? C[L] / 2 - H - ie - z - T.mainAxis : Y - ie - z - T.mainAxis,
        ut = y ? -C[L] / 2 + H + ie + q + T.mainAxis : te + ie + q + T.mainAxis,
        Fe = t.elements.arrow && Xr(t.elements.arrow),
        Ve = Fe ? (E === 'y' ? Fe.clientTop || 0 : Fe.clientLeft || 0) : 0,
        M = ($ = R == null ? void 0 : R[E]) != null ? $ : 0,
        je = N + he - M - Ve,
        ze = N + ut - M,
        Ot = Or(p ? Rn(V, je) : V, N, p ? jt(B, ze) : B);
      (S[E] = Ot), (F[E] = Ot - N);
    }
    if (u) {
      var Wt,
        qe = E === 'x' ? xe : we,
        en = E === 'x' ? Me : Be,
        be = S[A],
        Tt = A === 'y' ? 'height' : 'width',
        Ue = be + w[qe],
        Gt = be - w[en],
        We = [xe, we].indexOf(x) !== -1,
        Yt = (Wt = R == null ? void 0 : R[A]) != null ? Wt : 0,
        Ge = We ? Ue : be - C[Tt] - k[Tt] - Yt + T.altAxis,
        pe = We ? be + C[Tt] + k[Tt] - Yt - T.altAxis : Gt,
        Ne = p && We ? Mf(Ge, be, pe) : Or(p ? Ge : Ue, be, p ? pe : Gt);
      (S[A] = Ne), (F[A] = Ne - be);
    }
    t.modifiersData[n] = F;
  }
}
var pm = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: dm,
  requiresIfExists: ['offset'],
};
function fm(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function mm(e) {
  return e === _e(e) || !Le(e) ? Xo(e) : fm(e);
}
function gm(e) {
  var t = e.getBoundingClientRect(),
    r = lr(t.width) / e.offsetWidth || 1,
    n = lr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function hm(e, t, r) {
  r === void 0 && (r = !1);
  var n = Le(t),
    a = Le(t) && gm(t),
    l = Ct(t),
    i = ir(e, a, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((st(t) !== 'body' || Qo(l)) && (u = mm(t)),
      Le(t)
        ? ((s = ir(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop))
        : l && (s.x = Jo(l))),
    {
      x: i.left + u.scrollLeft - s.x,
      y: i.top + u.scrollTop - s.y,
      width: i.width,
      height: i.height,
    }
  );
}
function bm(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (l) {
    t.set(l.name, l);
  });
  function a(l) {
    r.add(l.name);
    var i = [].concat(l.requires || [], l.requiresIfExists || []);
    i.forEach(function (u) {
      if (!r.has(u)) {
        var s = t.get(u);
        s && a(s);
      }
    }),
      n.push(l);
  }
  return (
    e.forEach(function (l) {
      r.has(l.name) || a(l);
    }),
    n
  );
}
function ym(e) {
  var t = bm(e);
  return Tf.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      })
    );
  }, []);
}
function vm(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function Em(e) {
  var t = e.reduce(function (r, n) {
    var a = r[n.name];
    return (
      (r[n.name] = a
        ? Object.assign({}, a, n, {
            options: Object.assign({}, a.options, n.options),
            data: Object.assign({}, a.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var Ai = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function Si() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function');
  });
}
function xm(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    l = a === void 0 ? Ai : a;
  return function (i, u, s) {
    s === void 0 && (s = l);
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, Ai, l),
        modifiersData: {},
        elements: { reference: i, popper: u },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      m = {
        state: c,
        setOptions: function (g) {
          var w = typeof g == 'function' ? g(c.options) : g;
          h(),
            (c.options = Object.assign({}, l, c.options, w)),
            (c.scrollParents = {
              reference: Vt(i)
                ? Tr(i)
                : i.contextElement
                  ? Tr(i.contextElement)
                  : [],
              popper: Tr(u),
            });
          var x = ym(Em([].concat(n, c.options.modifiers)));
          return (
            (c.orderedModifiers = x.filter(function (v) {
              return v.enabled;
            })),
            p(),
            m.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var g = c.elements,
              w = g.reference,
              x = g.popper;
            if (Si(w, x)) {
              (c.rects = {
                reference: hm(w, Xr(x), c.options.strategy === 'fixed'),
                popper: Yo(x),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (k) {
                  return (c.modifiersData[k.name] = Object.assign({}, k.data));
                });
              for (var v = 0; v < c.orderedModifiers.length; v++) {
                if (c.reset === !0) {
                  (c.reset = !1), (v = -1);
                  continue;
                }
                var y = c.orderedModifiers[v],
                  E = y.fn,
                  A = y.options,
                  S = A === void 0 ? {} : A,
                  C = y.name;
                typeof E == 'function' &&
                  (c = E({ state: c, options: S, name: C, instance: m }) || c);
              }
            }
          }
        },
        update: vm(function () {
          return new Promise(function (g) {
            m.forceUpdate(), g(c);
          });
        }),
        destroy: function () {
          h(), (f = !0);
        },
      };
    if (!Si(i, u)) return m;
    m.setOptions(s).then(function (g) {
      !f && s.onFirstUpdate && s.onFirstUpdate(g);
    });
    function p() {
      c.orderedModifiers.forEach(function (g) {
        var w = g.name,
          x = g.options,
          v = x === void 0 ? {} : x,
          y = g.effect;
        if (typeof y == 'function') {
          var E = y({ state: c, name: w, instance: m, options: v }),
            A = function () {};
          d.push(E || A);
        }
      });
    }
    function h() {
      d.forEach(function (g) {
        return g();
      }),
        (d = []);
    }
    return m;
  };
}
var wm = [qf, um, Vf, $f, im, rm, pm, jf, am],
  Am = xm({ defaultModifiers: wm }),
  Sm = Oe(hf()),
  Cm = [],
  km = function (e, t, r) {
    r === void 0 && (r = {});
    var n = b.useRef(null),
      a = {
        onFirstUpdate: r.onFirstUpdate,
        placement: r.placement || 'bottom',
        strategy: r.strategy || 'absolute',
        modifiers: r.modifiers || Cm,
      },
      l = b.useState({
        styles: {
          popper: { position: a.strategy, left: '0', top: '0' },
          arrow: { position: 'absolute' },
        },
        attributes: {},
      }),
      i = l[0],
      u = l[1],
      s = b.useMemo(function () {
        return {
          name: 'updateState',
          enabled: !0,
          phase: 'write',
          fn: function (f) {
            var m = f.state,
              p = Object.keys(m.elements);
            Cs.flushSync(function () {
              u({
                styles: fi(
                  p.map(function (h) {
                    return [h, m.styles[h] || {}];
                  })
                ),
                attributes: fi(
                  p.map(function (h) {
                    return [h, m.attributes[h]];
                  })
                ),
              });
            });
          },
          requires: ['computeStyles'],
        };
      }, []),
      c = b.useMemo(
        function () {
          var f = {
            onFirstUpdate: a.onFirstUpdate,
            placement: a.placement,
            strategy: a.strategy,
            modifiers: [].concat(a.modifiers, [
              s,
              { name: 'applyStyles', enabled: !1 },
            ]),
          };
          return (0, Sm.default)(n.current, f)
            ? n.current || f
            : ((n.current = f), f);
        },
        [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, s]
      ),
      d = b.useRef();
    return (
      mi(
        function () {
          d.current && d.current.setOptions(c);
        },
        [c]
      ),
      mi(
        function () {
          if (!(e == null || t == null)) {
            var f = r.createPopper || Am,
              m = f(e, t, c);
            return (
              (d.current = m),
              function () {
                m.destroy(), (d.current = null);
              }
            );
          }
        },
        [e, t, r.createPopper]
      ),
      {
        state: d.current ? d.current.state : null,
        styles: i.styles,
        attributes: i.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    );
  };
function Uu(e) {
  var t = b.useRef(e);
  return (
    (t.current = e),
    b.useCallback(function () {
      return t.current;
    }, [])
  );
}
var _m = function () {};
function Om(e) {
  var t = e.initial,
    r = e.value,
    n = e.onChange,
    a = n === void 0 ? _m : n;
  if (t === void 0 && r === void 0)
    throw new TypeError(
      'Either "value" or "initial" variable must be set. Now both are undefined'
    );
  var l = b.useState(t),
    i = l[0],
    u = l[1],
    s = Uu(i),
    c = b.useCallback(
      function (f) {
        var m = s(),
          p = typeof f == 'function' ? f(m) : f;
        typeof p.persist == 'function' && p.persist(),
          u(p),
          typeof a == 'function' && a(p);
      },
      [s, a]
    ),
    d = r !== void 0;
  return [d ? r : i, d ? a : c];
}
function Wu(e, t) {
  return (
    e === void 0 && (e = 0),
    t === void 0 && (t = 0),
    function () {
      return {
        width: 0,
        height: 0,
        top: t,
        right: e,
        bottom: t,
        left: e,
        x: 0,
        y: 0,
        toJSON: function () {
          return null;
        },
      };
    }
  );
}
var Tm = ['styles', 'attributes'],
  Ci = { getBoundingClientRect: Wu() },
  ki = {
    closeOnOutsideClick: !0,
    closeOnTriggerHidden: !1,
    defaultVisible: !1,
    delayHide: 0,
    delayShow: 0,
    followCursor: !1,
    interactive: !1,
    mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 },
    offset: [0, 6],
    trigger: 'hover',
  };
function Rm(e, t) {
  var r, n, a;
  e === void 0 && (e = {}), t === void 0 && (t = {});
  var l = Object.keys(ki).reduce(function (D, L) {
      var N;
      return pt({}, D, ((N = {}), (N[L] = D[L] !== void 0 ? D[L] : ki[L]), N));
    }, e),
    i = b.useMemo(
      function () {
        return [{ name: 'offset', options: { offset: l.offset } }];
      },
      Array.isArray(l.offset) ? l.offset : []
    ),
    u = pt({}, t, {
      placement: t.placement || l.placement,
      modifiers: t.modifiers || i,
    }),
    s = b.useState(null),
    c = s[0],
    d = s[1],
    f = b.useState(null),
    m = f[0],
    p = f[1],
    h = Om({
      initial: l.defaultVisible,
      value: l.visible,
      onChange: l.onVisibleChange,
    }),
    g = h[0],
    w = h[1],
    x = b.useRef();
  b.useEffect(function () {
    return function () {
      return clearTimeout(x.current);
    };
  }, []);
  var v = km(l.followCursor ? Ci : c, m, u),
    y = v.styles,
    E = v.attributes,
    A = bf(v, Tm),
    S = A.update,
    C = Uu({ visible: g, triggerRef: c, tooltipRef: m, finalConfig: l }),
    k = b.useCallback(
      function (D) {
        return Array.isArray(l.trigger)
          ? l.trigger.includes(D)
          : l.trigger === D;
      },
      Array.isArray(l.trigger) ? l.trigger : [l.trigger]
    ),
    O = b.useCallback(
      function () {
        clearTimeout(x.current),
          (x.current = window.setTimeout(function () {
            return w(!1);
          }, l.delayHide));
      },
      [l.delayHide, w]
    ),
    T = b.useCallback(
      function () {
        clearTimeout(x.current),
          (x.current = window.setTimeout(function () {
            return w(!0);
          }, l.delayShow));
      },
      [l.delayShow, w]
    ),
    R = b.useCallback(
      function () {
        C().visible ? O() : T();
      },
      [C, O, T]
    );
  b.useEffect(
    function () {
      if (C().finalConfig.closeOnOutsideClick) {
        var D = function (L) {
          var N,
            V = C(),
            B = V.tooltipRef,
            H = V.triggerRef,
            Y =
              (L.composedPath == null || (N = L.composedPath()) == null
                ? void 0
                : N[0]) || L.target;
          Y instanceof Node &&
            B != null &&
            H != null &&
            !B.contains(Y) &&
            !H.contains(Y) &&
            O();
        };
        return (
          document.addEventListener('mousedown', D),
          function () {
            return document.removeEventListener('mousedown', D);
          }
        );
      }
    },
    [C, O]
  ),
    b.useEffect(
      function () {
        if (!(c == null || !k('click')))
          return (
            c.addEventListener('click', R),
            function () {
              return c.removeEventListener('click', R);
            }
          );
      },
      [c, k, R]
    ),
    b.useEffect(
      function () {
        if (!(c == null || !k('double-click')))
          return (
            c.addEventListener('dblclick', R),
            function () {
              return c.removeEventListener('dblclick', R);
            }
          );
      },
      [c, k, R]
    ),
    b.useEffect(
      function () {
        if (!(c == null || !k('right-click'))) {
          var D = function (L) {
            L.preventDefault(), R();
          };
          return (
            c.addEventListener('contextmenu', D),
            function () {
              return c.removeEventListener('contextmenu', D);
            }
          );
        }
      },
      [c, k, R]
    ),
    b.useEffect(
      function () {
        if (!(c == null || !k('focus')))
          return (
            c.addEventListener('focus', T),
            c.addEventListener('blur', O),
            function () {
              c.removeEventListener('focus', T),
                c.removeEventListener('blur', O);
            }
          );
      },
      [c, k, T, O]
    ),
    b.useEffect(
      function () {
        if (!(c == null || !k('hover')))
          return (
            c.addEventListener('mouseenter', T),
            c.addEventListener('mouseleave', O),
            function () {
              c.removeEventListener('mouseenter', T),
                c.removeEventListener('mouseleave', O);
            }
          );
      },
      [c, k, T, O]
    ),
    b.useEffect(
      function () {
        if (!(m == null || !k('hover') || !C().finalConfig.interactive))
          return (
            m.addEventListener('mouseenter', T),
            m.addEventListener('mouseleave', O),
            function () {
              m.removeEventListener('mouseenter', T),
                m.removeEventListener('mouseleave', O);
            }
          );
      },
      [m, k, T, O, C]
    );
  var F =
    A == null ||
    (r = A.state) == null ||
    (n = r.modifiersData) == null ||
    (a = n.hide) == null
      ? void 0
      : a.isReferenceHidden;
  b.useEffect(
    function () {
      l.closeOnTriggerHidden && F && O();
    },
    [l.closeOnTriggerHidden, O, F]
  ),
    b.useEffect(
      function () {
        if (!l.followCursor || c == null) return;
        function D(L) {
          var N = L.clientX,
            V = L.clientY;
          (Ci.getBoundingClientRect = Wu(N, V)), S == null || S();
        }
        return (
          c.addEventListener('mousemove', D),
          function () {
            return c.removeEventListener('mousemove', D);
          }
        );
      },
      [l.followCursor, c, S]
    ),
    b.useEffect(
      function () {
        if (!(m == null || S == null || l.mutationObserverOptions == null)) {
          var D = new MutationObserver(S);
          return (
            D.observe(m, l.mutationObserverOptions),
            function () {
              return D.disconnect();
            }
          );
        }
      },
      [l.mutationObserverOptions, m, S]
    );
  var $ = function (D) {
      return (
        D === void 0 && (D = {}),
        pt({}, D, { style: pt({}, D.style, y.popper) }, E.popper, {
          'data-popper-interactive': l.interactive,
        })
      );
    },
    P = function (D) {
      return (
        D === void 0 && (D = {}),
        pt({}, D, E.arrow, {
          style: pt({}, D.style, y.arrow),
          'data-popper-arrow': !0,
        })
      );
    };
  return pt(
    {
      getArrowProps: P,
      getTooltipProps: $,
      setTooltipRef: p,
      setTriggerRef: d,
      tooltipRef: m,
      triggerRef: c,
      visible: g,
    },
    A
  );
}
var $e = zt(1e3)((e, t, r, n = 0) => (t.split('-')[0] === e ? r : n)),
  bt = 8,
  Fm = _.div(
    { position: 'absolute', borderStyle: 'solid' },
    ({ placement: e }) => {
      let t = 0,
        r = 0;
      switch (!0) {
        case e.startsWith('left') || e.startsWith('right'): {
          r = 8;
          break;
        }
        case e.startsWith('top') || e.startsWith('bottom'): {
          t = 8;
          break;
        }
      }
      return { transform: `translate3d(${t}px, ${r}px, 0px)` };
    },
    ({ theme: e, color: t, placement: r }) => ({
      bottom: `${$e('top', r, `${bt * -1}px`, 'auto')}`,
      top: `${$e('bottom', r, `${bt * -1}px`, 'auto')}`,
      right: `${$e('left', r, `${bt * -1}px`, 'auto')}`,
      left: `${$e('right', r, `${bt * -1}px`, 'auto')}`,
      borderBottomWidth: `${$e('top', r, '0', bt)}px`,
      borderTopWidth: `${$e('bottom', r, '0', bt)}px`,
      borderRightWidth: `${$e('left', r, '0', bt)}px`,
      borderLeftWidth: `${$e('right', r, '0', bt)}px`,
      borderTopColor: $e(
        'top',
        r,
        e.color[t] || t || e.base === 'light'
          ? _r(e.background.app)
          : e.background.app,
        'transparent'
      ),
      borderBottomColor: $e(
        'bottom',
        r,
        e.color[t] || t || e.base === 'light'
          ? _r(e.background.app)
          : e.background.app,
        'transparent'
      ),
      borderLeftColor: $e(
        'left',
        r,
        e.color[t] || t || e.base === 'light'
          ? _r(e.background.app)
          : e.background.app,
        'transparent'
      ),
      borderRightColor: $e(
        'right',
        r,
        e.color[t] || t || e.base === 'light'
          ? _r(e.background.app)
          : e.background.app,
        'transparent'
      ),
    })
  ),
  $m = _.div(
    ({ hidden: e }) => ({
      display: e ? 'none' : 'inline-block',
      zIndex: 2147483647,
    }),
    ({ theme: e, color: t, hasChrome: r }) =>
      r
        ? {
            background:
              e.color[t] || t || e.base === 'light'
                ? _r(e.background.app)
                : e.background.app,
            filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
            borderRadius: e.appBorderRadius,
            fontSize: e.typography.size.s1,
          }
        : {}
  ),
  el = o.forwardRef(
    (
      {
        placement: e,
        hasChrome: t,
        children: r,
        arrowProps: n,
        tooltipRef: a,
        color: l,
        withArrows: i,
        ...u
      },
      s
    ) =>
      o.createElement(
        $m,
        { 'data-testid': 'tooltip', hasChrome: t, ref: s, ...u, color: l },
        t && i && o.createElement(Fm, { placement: e, ...n, color: l }),
        r
      )
  );
el.displayName = 'Tooltip';
el.defaultProps = {
  color: void 0,
  tooltipRef: void 0,
  hasChrome: !0,
  placement: 'top',
  arrowProps: {},
};
var { document: vn } = gf,
  Dm = _.div`
  display: inline-block;
  cursor: ${(e) => (e.trigger === 'hover' || e.trigger.includes('hover') ? 'default' : 'pointer')};
`,
  Lm = _.g`
  cursor: ${(e) => (e.trigger === 'hover' || e.trigger.includes('hover') ? 'default' : 'pointer')};
`,
  Gu = ({
    svg: e,
    trigger: t,
    closeOnOutsideClick: r,
    placement: n,
    hasChrome: a,
    withArrows: l,
    offset: i,
    tooltip: u,
    children: s,
    closeOnTriggerHidden: c,
    mutationObserverOptions: d,
    closeOnClick: f,
    tooltipShown: m,
    onVisibilityChange: p,
    defaultVisible: h,
    delayHide: g,
    visible: w,
    interactive: x,
    delayShow: v,
    modifiers: y,
    strategy: E,
    followCursor: A,
    onVisibleChange: S,
    ...C
  }) => {
    let k = e ? Lm : Dm,
      {
        getArrowProps: O,
        getTooltipProps: T,
        setTooltipRef: R,
        setTriggerRef: F,
        visible: $,
        state: P,
      } = Rm(
        {
          trigger: t,
          placement: n,
          defaultVisible: h ?? m,
          delayHide: g,
          interactive: x,
          closeOnOutsideClick: r ?? f,
          closeOnTriggerHidden: c,
          onVisibleChange: (L) => {
            p == null || p(L), S == null || S(L);
          },
          delayShow: v,
          followCursor: A,
          mutationObserverOptions: d,
          visible: w,
          offset: i,
        },
        { modifiers: y, strategy: E }
      ),
      D = o.createElement(
        el,
        {
          placement: P == null ? void 0 : P.placement,
          ref: R,
          hasChrome: a,
          arrowProps: O(),
          withArrows: l,
          ...T(),
        },
        typeof u == 'function' ? u({ onHide: () => S(!1) }) : u
      );
    return o.createElement(
      o.Fragment,
      null,
      o.createElement(k, { trigger: t, ref: F, ...C }, s),
      $ && U0.createPortal(D, vn.body)
    );
  };
Gu.defaultProps = {
  svg: !1,
  trigger: 'click',
  closeOnOutsideClick: !1,
  placement: 'top',
  modifiers: [
    { name: 'preventOverflow', options: { padding: 8 } },
    { name: 'offset', options: { offset: [8, 8] } },
    { name: 'arrow', options: { padding: 8 } },
  ],
  hasChrome: !0,
  defaultVisible: !1,
};
var Mm = ({ startOpen: e = !1, onVisibleChange: t, ...r }) => {
  let [n, a] = b.useState(e),
    l = b.useCallback(
      (i) => {
        (t && t(i) === !1) || a(i);
      },
      [t]
    );
  return (
    b.useEffect(() => {
      let i = () => l(!1);
      vn.addEventListener('keydown', i, !1);
      let u = Array.from(vn.getElementsByTagName('iframe')),
        s = [];
      return (
        u.forEach((c) => {
          let d = () => {
            try {
              c.contentWindow.document &&
                (c.contentWindow.document.addEventListener('click', i),
                s.push(() => {
                  try {
                    c.contentWindow.document.removeEventListener('click', i);
                  } catch {}
                }));
            } catch {}
          };
          d(),
            c.addEventListener('load', d),
            s.push(() => {
              c.removeEventListener('load', d);
            });
        }),
        () => {
          vn.removeEventListener('keydown', i),
            s.forEach((c) => {
              c();
            });
        }
      );
    }),
    o.createElement(Gu, { ...r, visible: n, onVisibleChange: l })
  );
};
function Bm(e, t) {
  var r = b.useRef(null),
    n = b.useRef(null);
  n.current = t;
  var a = b.useRef(null);
  b.useEffect(function () {
    l();
  });
  var l = b.useCallback(
    function () {
      var i = a.current,
        u = n.current,
        s = i || (u ? (u instanceof Element ? u : u.current) : null);
      (r.current && r.current.element === s && r.current.subscriber === e) ||
        (r.current && r.current.cleanup && r.current.cleanup(),
        (r.current = {
          element: s,
          subscriber: e,
          cleanup: s ? e(s) : void 0,
        }));
    },
    [e]
  );
  return (
    b.useEffect(function () {
      return function () {
        r.current &&
          r.current.cleanup &&
          (r.current.cleanup(), (r.current = null));
      };
    }, []),
    b.useCallback(
      function (i) {
        (a.current = i), l();
      },
      [l]
    )
  );
}
function _i(e, t, r) {
  return e[t]
    ? e[t][0]
      ? e[t][0][r]
      : e[t][r]
    : t === 'contentBoxSize'
      ? e.contentRect[r === 'inlineSize' ? 'width' : 'height']
      : void 0;
}
function Yu(e) {
  e === void 0 && (e = {});
  var t = e.onResize,
    r = b.useRef(void 0);
  r.current = t;
  var n = e.round || Math.round,
    a = b.useRef(),
    l = b.useState({ width: void 0, height: void 0 }),
    i = l[0],
    u = l[1],
    s = b.useRef(!1);
  b.useEffect(function () {
    return (
      (s.current = !1),
      function () {
        s.current = !0;
      }
    );
  }, []);
  var c = b.useRef({ width: void 0, height: void 0 }),
    d = Bm(
      b.useCallback(
        function (f) {
          return (
            (!a.current || a.current.box !== e.box || a.current.round !== n) &&
              (a.current = {
                box: e.box,
                round: n,
                instance: new ResizeObserver(function (m) {
                  var p = m[0],
                    h =
                      e.box === 'border-box'
                        ? 'borderBoxSize'
                        : e.box === 'device-pixel-content-box'
                          ? 'devicePixelContentBoxSize'
                          : 'contentBoxSize',
                    g = _i(p, h, 'inlineSize'),
                    w = _i(p, h, 'blockSize'),
                    x = g ? n(g) : void 0,
                    v = w ? n(w) : void 0;
                  if (c.current.width !== x || c.current.height !== v) {
                    var y = { width: x, height: v };
                    (c.current.width = x),
                      (c.current.height = v),
                      r.current ? r.current(y) : s.current || u(y);
                  }
                }),
              }),
            a.current.instance.observe(f, { box: e.box }),
            function () {
              a.current && a.current.instance.unobserve(f);
            }
          );
        },
        [e.box, n]
      ),
      e.ref
    );
  return b.useMemo(
    function () {
      return { ref: d, width: i.width, height: i.height };
    },
    [d, i.width, i.height]
  );
}
const { global: Im } = __STORYBOOK_MODULE_GLOBAL__;
var J = ({ ...e }, t) => {
  let r = [e.class, e.className];
  return (
    delete e.class,
    (e.className = ['sbdocs', `sbdocs-${t}`, ...r].filter(Boolean).join(' ')),
    e
  );
};
function jr() {
  return (
    (jr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    jr.apply(this, arguments)
  );
}
function Pm(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Nr(e, t) {
  return (
    (Nr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Nr(e, t)
  );
}
function jm(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Nr(e, t);
}
function io(e) {
  return (
    (io = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    io(e)
  );
}
function Nm(e) {
  try {
    return Function.toString.call(e).indexOf('[native code]') !== -1;
  } catch {
    return typeof e == 'function';
  }
}
function Hm() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function En(e, t, r) {
  return (
    Hm()
      ? (En = Reflect.construct.bind())
      : (En = function (n, a, l) {
          var i = [null];
          i.push.apply(i, a);
          var u = Function.bind.apply(n, i),
            s = new u();
          return l && Nr(s, l.prototype), s;
        }),
    En.apply(null, arguments)
  );
}
function so(e) {
  var t = typeof Map == 'function' ? new Map() : void 0;
  return (
    (so = function (r) {
      if (r === null || !Nm(r)) return r;
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      if (typeof t < 'u') {
        if (t.has(r)) return t.get(r);
        t.set(r, n);
      }
      function n() {
        return En(r, arguments, io(this).constructor);
      }
      return (
        (n.prototype = Object.create(r.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Nr(n, r)
      );
    }),
    so(e)
  );
}
var at = (function (e) {
  jm(t, e);
  function t(r) {
    var n;
    return (
      (n =
        e.call(
          this,
          'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
            r +
            ' for more information.'
        ) || this),
      Pm(n)
    );
  }
  return t;
})(so(Error));
function xa(e) {
  return Math.round(e * 255);
}
function Zm(e, t, r) {
  return xa(e) + ',' + xa(t) + ',' + xa(r);
}
function Hr(e, t, r, n) {
  if ((n === void 0 && (n = Zm), t === 0)) return n(r, r, r);
  var a = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((a % 2) - 1)),
    u = 0,
    s = 0,
    c = 0;
  a >= 0 && a < 1
    ? ((u = l), (s = i))
    : a >= 1 && a < 2
      ? ((u = i), (s = l))
      : a >= 2 && a < 3
        ? ((s = l), (c = i))
        : a >= 3 && a < 4
          ? ((s = i), (c = l))
          : a >= 4 && a < 5
            ? ((u = i), (c = l))
            : a >= 5 && a < 6 && ((u = l), (c = i));
  var d = r - l / 2,
    f = u + d,
    m = s + d,
    p = c + d;
  return n(f, m, p);
}
var Oi = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',
};
function Vm(e) {
  if (typeof e != 'string') return e;
  var t = e.toLowerCase();
  return Oi[t] ? '#' + Oi[t] : e;
}
var zm = /^#[a-fA-F0-9]{6}$/,
  qm = /^#[a-fA-F0-9]{8}$/,
  Um = /^#[a-fA-F0-9]{3}$/,
  Wm = /^#[a-fA-F0-9]{4}$/,
  wa = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  Gm =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  Ym =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  Km =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function tl(e) {
  if (typeof e != 'string') throw new at(3);
  var t = Vm(e);
  if (t.match(zm))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
    };
  if (t.match(qm)) {
    var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match(Um))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
    };
  if (t.match(Wm)) {
    var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
      alpha: n,
    };
  }
  var a = wa.exec(t);
  if (a)
    return {
      red: parseInt('' + a[1], 10),
      green: parseInt('' + a[2], 10),
      blue: parseInt('' + a[3], 10),
    };
  var l = Gm.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt('' + l[1], 10),
      green: parseInt('' + l[2], 10),
      blue: parseInt('' + l[3], 10),
      alpha:
        parseFloat('' + l[4]) > 1
          ? parseFloat('' + l[4]) / 100
          : parseFloat('' + l[4]),
    };
  var i = Ym.exec(t);
  if (i) {
    var u = parseInt('' + i[1], 10),
      s = parseInt('' + i[2], 10) / 100,
      c = parseInt('' + i[3], 10) / 100,
      d = 'rgb(' + Hr(u, s, c) + ')',
      f = wa.exec(d);
    if (!f) throw new at(4, t, d);
    return {
      red: parseInt('' + f[1], 10),
      green: parseInt('' + f[2], 10),
      blue: parseInt('' + f[3], 10),
    };
  }
  var m = Km.exec(t.substring(0, 50));
  if (m) {
    var p = parseInt('' + m[1], 10),
      h = parseInt('' + m[2], 10) / 100,
      g = parseInt('' + m[3], 10) / 100,
      w = 'rgb(' + Hr(p, h, g) + ')',
      x = wa.exec(w);
    if (!x) throw new at(4, t, w);
    return {
      red: parseInt('' + x[1], 10),
      green: parseInt('' + x[2], 10),
      blue: parseInt('' + x[3], 10),
      alpha:
        parseFloat('' + m[4]) > 1
          ? parseFloat('' + m[4]) / 100
          : parseFloat('' + m[4]),
    };
  }
  throw new at(5);
}
function Xm(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    a = Math.max(t, r, n),
    l = Math.min(t, r, n),
    i = (a + l) / 2;
  if (a === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i };
  var u,
    s = a - l,
    c = i > 0.5 ? s / (2 - a - l) : s / (a + l);
  switch (a) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      u = (n - t) / s + 2;
      break;
    default:
      u = (t - r) / s + 4;
      break;
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? { hue: u, saturation: c, lightness: i, alpha: e.alpha }
      : { hue: u, saturation: c, lightness: i }
  );
}
function Ku(e) {
  return Xm(tl(e));
}
var Jm = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
      ? '#' + e[1] + e[3] + e[5]
      : e;
  },
  uo = Jm;
function Dt(e) {
  var t = e.toString(16);
  return t.length === 1 ? '0' + t : t;
}
function Aa(e) {
  return Dt(Math.round(e * 255));
}
function Qm(e, t, r) {
  return uo('#' + Aa(e) + Aa(t) + Aa(r));
}
function Fn(e, t, r) {
  return Hr(e, t, r, Qm);
}
function eg(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return Fn(e, t, r);
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return Fn(e.hue, e.saturation, e.lightness);
  throw new at(1);
}
function tg(e, t, r, n) {
  if (
    typeof e == 'number' &&
    typeof t == 'number' &&
    typeof r == 'number' &&
    typeof n == 'number'
  )
    return n >= 1 ? Fn(e, t, r) : 'rgba(' + Hr(e, t, r) + ',' + n + ')';
  if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? Fn(e.hue, e.saturation, e.lightness)
      : 'rgba(' + Hr(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')';
  throw new at(2);
}
function co(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return uo('#' + Dt(e) + Dt(t) + Dt(r));
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return uo('#' + Dt(e.red) + Dt(e.green) + Dt(e.blue));
  throw new at(6);
}
function ft(e, t, r, n) {
  if (typeof e == 'string' && typeof t == 'number') {
    var a = tl(e);
    return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')';
  } else {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1
        ? co(e, t, r)
        : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')';
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? co(e.red, e.green, e.blue)
        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')';
  }
  throw new at(7);
}
var rg = function (e) {
    return (
      typeof e.red == 'number' &&
      typeof e.green == 'number' &&
      typeof e.blue == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    );
  },
  ng = function (e) {
    return (
      typeof e.red == 'number' &&
      typeof e.green == 'number' &&
      typeof e.blue == 'number' &&
      typeof e.alpha == 'number'
    );
  },
  ag = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    );
  },
  og = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      typeof e.alpha == 'number'
    );
  };
function Xu(e) {
  if (typeof e != 'object') throw new at(8);
  if (ng(e)) return ft(e);
  if (rg(e)) return co(e);
  if (og(e)) return tg(e);
  if (ag(e)) return eg(e);
  throw new at(8);
}
function Ju(e, t, r) {
  return function () {
    var n = r.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : Ju(e, t, n);
  };
}
function rl(e) {
  return Ju(e, e.length, []);
}
function nl(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function lg(e, t) {
  if (t === 'transparent') return t;
  var r = Ku(t);
  return Xu(jr({}, r, { lightness: nl(0, 1, r.lightness - parseFloat(e)) }));
}
var ig = rl(lg),
  Qt = ig;
function sg(e, t) {
  if (t === 'transparent') return t;
  var r = Ku(t);
  return Xu(jr({}, r, { lightness: nl(0, 1, r.lightness + parseFloat(e)) }));
}
var ug = rl(sg),
  cg = ug;
function dg(e, t) {
  if (t === 'transparent') return t;
  var r = tl(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    a = jr({}, r, {
      alpha: nl(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return ft(a);
}
var pg = rl(dg),
  ve = pg,
  mr = ({ theme: e }) => ({
    margin: '20px 0 8px',
    padding: 0,
    cursor: 'text',
    position: 'relative',
    color: e.color.defaultText,
    '&:first-of-type': { marginTop: 0, paddingTop: 0 },
    '&:hover a.anchor': { textDecoration: 'none' },
    '& tt, & code': { fontSize: 'inherit' },
  }),
  ht = ({ theme: e }) => ({
    lineHeight: 1,
    margin: '0 2px',
    padding: '3px 5px',
    whiteSpace: 'nowrap',
    borderRadius: 3,
    fontSize: e.typography.size.s2 - 1,
    border:
      e.base === 'light'
        ? `1px solid ${e.color.mediumlight}`
        : `1px solid ${e.color.darker}`,
    color:
      e.base === 'light'
        ? ve(0.1, e.color.defaultText)
        : ve(0.3, e.color.defaultText),
    backgroundColor: e.base === 'light' ? e.color.lighter : e.color.border,
  }),
  ee = ({ theme: e }) => ({
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s3,
    margin: 0,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitOverflowScrolling: 'touch',
  }),
  Ut = { margin: '16px 0' },
  fg = ({ href: e, children: t, ...r }) => {
    let n = /^\//.test(e),
      a = /^#.*/.test(e),
      l = n ? `./?path=${e}` : e;
    return o.createElement(
      'a',
      { href: l, target: a ? '_self' : '_top', ...r },
      t
    );
  },
  Qu = _(fg)(ee, ({ theme: e }) => ({
    fontSize: 'inherit',
    lineHeight: '24px',
    color: e.color.secondary,
    textDecoration: 'none',
    '&.absent': { color: '#cc0000' },
    '&.anchor': {
      display: 'block',
      paddingLeft: 30,
      marginLeft: -30,
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
    },
  })),
  ec = _.blockquote(ee, Ut, ({ theme: e }) => ({
    borderLeft: `4px solid ${e.color.medium}`,
    padding: '0 15px',
    color: e.color.dark,
    '& > :first-of-type': { marginTop: 0 },
    '& > :last-child': { marginBottom: 0 },
  })),
  mg = (e) => typeof e == 'string',
  gg = /[\n\r]/g,
  hg = _.code(
    ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      display: 'inline-block',
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: 'baseline',
      color: 'inherit',
    }),
    ht
  ),
  bg = _(Wo)(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: '19px',
    margin: '25px 0 40px',
    borderRadius: e.appBorderRadius,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    'pre.prismjs': { padding: 20, background: 'inherit' },
  })),
  al = ({ className: e, children: t, ...r }) => {
    let n = (e || '').match(/lang-(\S+)/),
      a = b.Children.toArray(t);
    return a.filter(mg).some((l) => l.match(gg))
      ? o.createElement(
          bg,
          {
            bordered: !0,
            copyable: !0,
            language: (n == null ? void 0 : n[1]) ?? 'plaintext',
            format: !1,
            ...r,
          },
          t
        )
      : o.createElement(hg, { ...r, className: e }, a);
  },
  tc = _.div(ee),
  rc = _.dl(ee, Ut, {
    padding: 0,
    '& dt': {
      fontSize: '14px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      padding: 0,
      margin: '16px 0 4px',
    },
    '& dt:first-of-type': { padding: 0 },
    '& dt > :first-of-type': { marginTop: 0 },
    '& dt > :last-child': { marginBottom: 0 },
    '& dd': { margin: '0 0 16px', padding: '0 15px' },
    '& dd > :first-of-type': { marginTop: 0 },
    '& dd > :last-child': { marginBottom: 0 },
  }),
  nc = _.h1(ee, mr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.l1}px`,
    fontWeight: e.typography.weight.bold,
  })),
  ol = _.h2(ee, mr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m2}px`,
    paddingBottom: 4,
    borderBottom: `1px solid ${e.appBorderColor}`,
  })),
  ll = _.h3(ee, mr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m1}px`,
  })),
  ac = _.h4(ee, mr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s3}px`,
  })),
  oc = _.h5(ee, mr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
  })),
  lc = _.h6(ee, mr, ({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
    color: e.color.dark,
  })),
  ic = _.hr(({ theme: e }) => ({
    border: '0 none',
    borderTop: `1px solid ${e.appBorderColor}`,
    height: 4,
    padding: 0,
  })),
  sc = _.img({ maxWidth: '100%' }),
  uc = _.li(ee, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    color: e.color.defaultText,
    lineHeight: '24px',
    '& + li': { marginTop: '.25em' },
    '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
    '& code': ht({ theme: e }),
  })),
  yg = {
    paddingLeft: 30,
    '& :first-of-type': { marginTop: 0 },
    '& :last-child': { marginBottom: 0 },
  },
  cc = _.ol(ee, Ut, yg, { listStyle: 'decimal' }),
  dc = _.p(ee, Ut, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: '24px',
    color: e.color.defaultText,
    '& code': ht({ theme: e }),
  })),
  pc = _.pre(ee, Ut, ({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    lineHeight: '18px',
    padding: '11px 1rem',
    whiteSpace: 'pre-wrap',
    color: 'inherit',
    borderRadius: 3,
    margin: '1rem 0',
    '&:not(.prismjs)': {
      background: 'transparent',
      border: 'none',
      borderRadius: 0,
      padding: 0,
      margin: 0,
    },
    '& pre, &.prismjs': {
      padding: 15,
      margin: 0,
      whiteSpace: 'pre-wrap',
      color: 'inherit',
      fontSize: '13px',
      lineHeight: '19px',
      code: { color: 'inherit', fontSize: 'inherit' },
    },
    '& code': { whiteSpace: 'pre' },
    '& code, & tt': { border: 'none' },
  })),
  fc = _.span(ee, ({ theme: e }) => ({
    '&.frame': {
      display: 'block',
      overflow: 'hidden',
      '& > span': {
        border: `1px solid ${e.color.medium}`,
        display: 'block',
        float: 'left',
        overflow: 'hidden',
        margin: '13px 0 0',
        padding: 7,
        width: 'auto',
      },
      '& span img': { display: 'block', float: 'left' },
      '& span span': {
        clear: 'both',
        color: e.color.darkest,
        display: 'block',
        padding: '5px 0 0',
      },
    },
    '&.align-center': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'center',
      },
      '& span img': { margin: '0 auto', textAlign: 'center' },
    },
    '&.align-right': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px 0 0',
        textAlign: 'right',
      },
      '& span img': { margin: 0, textAlign: 'right' },
    },
    '&.float-left': {
      display: 'block',
      marginRight: 13,
      overflow: 'hidden',
      float: 'left',
      '& span': { margin: '13px 0 0' },
    },
    '&.float-right': {
      display: 'block',
      marginLeft: 13,
      overflow: 'hidden',
      float: 'right',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'right',
      },
    },
  })),
  mc = _.table(ee, Ut, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: '24px',
    padding: 0,
    borderCollapse: 'collapse',
    '& tr': {
      borderTop: `1px solid ${e.appBorderColor}`,
      backgroundColor: e.appContentBg,
      margin: 0,
      padding: 0,
    },
    '& tr:nth-of-type(2n)': {
      backgroundColor: e.base === 'dark' ? e.color.darker : e.color.lighter,
    },
    '& tr th': {
      fontWeight: 'bold',
      color: e.color.defaultText,
      border: `1px solid ${e.appBorderColor}`,
      margin: 0,
      padding: '6px 13px',
    },
    '& tr td': {
      border: `1px solid ${e.appBorderColor}`,
      color: e.color.defaultText,
      margin: 0,
      padding: '6px 13px',
    },
    '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
    '& tr th :last-child, & tr td :last-child': { marginBottom: 0 },
  })),
  gc = _.title(ht),
  vg = {
    paddingLeft: 30,
    '& :first-of-type': { marginTop: 0 },
    '& :last-child': { marginBottom: 0 },
  },
  hc = _.ul(ee, Ut, vg, { listStyle: 'disc' }),
  il = _.div(ee),
  bc = {
    h1: (e) => o.createElement(nc, { ...J(e, 'h1') }),
    h2: (e) => o.createElement(ol, { ...J(e, 'h2') }),
    h3: (e) => o.createElement(ll, { ...J(e, 'h3') }),
    h4: (e) => o.createElement(ac, { ...J(e, 'h4') }),
    h5: (e) => o.createElement(oc, { ...J(e, 'h5') }),
    h6: (e) => o.createElement(lc, { ...J(e, 'h6') }),
    pre: (e) => o.createElement(pc, { ...J(e, 'pre') }),
    a: (e) => o.createElement(Qu, { ...J(e, 'a') }),
    hr: (e) => o.createElement(ic, { ...J(e, 'hr') }),
    dl: (e) => o.createElement(rc, { ...J(e, 'dl') }),
    blockquote: (e) => o.createElement(ec, { ...J(e, 'blockquote') }),
    table: (e) => o.createElement(mc, { ...J(e, 'table') }),
    img: (e) => o.createElement(sc, { ...J(e, 'img') }),
    div: (e) => o.createElement(tc, { ...J(e, 'div') }),
    span: (e) => o.createElement(fc, { ...J(e, 'span') }),
    li: (e) => o.createElement(uc, { ...J(e, 'li') }),
    ul: (e) => o.createElement(hc, { ...J(e, 'ul') }),
    ol: (e) => o.createElement(cc, { ...J(e, 'ol') }),
    p: (e) => o.createElement(dc, { ...J(e, 'p') }),
    code: (e) => o.createElement(al, { ...J(e, 'code') }),
    tt: (e) => o.createElement(gc, { ...J(e, 'tt') }),
    resetwrapper: (e) => o.createElement(il, { ...J(e, 'resetwrapper') }),
  },
  Eg = _.div(
    ({ theme: e }) => ({
      display: 'inline-block',
      fontSize: 11,
      lineHeight: '12px',
      alignSelf: 'center',
      padding: '4px 12px',
      borderRadius: '3em',
      fontWeight: e.typography.weight.bold,
    }),
    {
      svg: {
        height: 12,
        width: 12,
        marginRight: 4,
        marginTop: -2,
        path: { fill: 'currentColor' },
      },
    },
    ({ theme: e, status: t }) => {
      switch (t) {
        case 'critical':
          return { color: e.color.critical, background: e.background.critical };
        case 'negative':
          return {
            color: e.color.negativeText,
            background: e.background.negative,
            boxShadow:
              e.base === 'light'
                ? `inset 0 0 0 1px ${ve(0.9, e.color.negativeText)}`
                : 'none',
          };
        case 'warning':
          return {
            color: e.color.warningText,
            background: e.background.warning,
            boxShadow:
              e.base === 'light'
                ? `inset 0 0 0 1px ${ve(0.9, e.color.warningText)}`
                : 'none',
          };
        case 'neutral':
          return {
            color: e.color.dark,
            background: e.color.mediumlight,
            boxShadow:
              e.base === 'light'
                ? `inset 0 0 0 1px ${ve(0.9, e.color.dark)}`
                : 'none',
          };
        case 'positive':
          return {
            color: e.color.positiveText,
            background: e.background.positive,
            boxShadow:
              e.base === 'light'
                ? `inset 0 0 0 1px ${ve(0.9, e.color.positiveText)}`
                : 'none',
          };
        default:
          return {};
      }
    }
  ),
  xg = ({ ...e }) => o.createElement(Eg, { ...e }),
  Zr = {
    user: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z',
      })
    ),
    useralt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z',
      })
    ),
    useradd: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z',
      })
    ),
    users: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z',
      }),
      o.createElement('path', {
        d: 'M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z',
      })
    ),
    profile: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z',
      })
    ),
    facehappy: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    faceneutral: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    facesad: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    accessibility: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z',
      }),
      o.createElement('path', { d: 'M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z' }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
      })
    ),
    accessibilityalt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z',
      })
    ),
    arrowup: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'm7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z',
      })
    ),
    arrowdown: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'm1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z',
      })
    ),
    arrowleft: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z',
      })
    ),
    arrowright: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'm11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z',
      })
    ),
    arrowupalt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z',
      })
    ),
    arrowdownalt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z',
      })
    ),
    arrowleftalt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z',
      })
    ),
    arrowrightalt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z',
      })
    ),
    expandalt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'm7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z',
      })
    ),
    collapse: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z',
      })
    ),
    expand: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z',
      })
    ),
    unfold: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'm6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z',
      }),
      o.createElement('path', {
        d: 'M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z',
      }),
      o.createElement('path', {
        d: 'M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z',
      })
    ),
    transfer: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z',
      })
    ),
    redirect: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z',
      })
    ),
    undo: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z',
      })
    ),
    reply: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z',
      })
    ),
    sync: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z',
      })
    ),
    upload: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    download: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z',
      })
    ),
    back: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z',
      })
    ),
    proceed: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z',
      })
    ),
    refresh: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z',
      })
    ),
    globe: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z',
      })
    ),
    compass: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    location: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z',
      })
    ),
    pin: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z',
      })
    ),
    time: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
      })
    ),
    dashboard: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z',
      })
    ),
    timer: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z',
      })
    ),
    home: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'm7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z',
      })
    ),
    admin: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z',
      }),
      o.createElement('path', {
        d: 'M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z',
      })
    ),
    info: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
      })
    ),
    question: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    support: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
      })
    ),
    alert: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z',
      })
    ),
    email: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z',
      })
    ),
    phone: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'm7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z',
      })
    ),
    link: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z',
      }),
      o.createElement('path', {
        d: 'M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z',
      })
    ),
    unlink: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'm1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z',
      })
    ),
    bell: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z',
      })
    ),
    rss: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z',
      }),
      o.createElement('path', {
        d: 'M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
      })
    ),
    sharealt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z',
      }),
      o.createElement('path', {
        d: 'M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z',
      })
    ),
    share: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z',
      }),
      o.createElement('path', {
        d: 'M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z',
      })
    ),
    circlehollow: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z',
      })
    ),
    circle: o.createElement('path', {
      d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z',
    }),
    bookmarkhollow: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z',
      })
    ),
    bookmark: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z',
      })
    ),
    hearthollow: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2',
      })
    ),
    heart: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z',
      })
    ),
    starhollow: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z',
      })
    ),
    star: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z',
      })
    ),
    certificate: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z',
      })
    ),
    verified: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z',
      })
    ),
    thumbsup: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z',
      })
    ),
    shield: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z',
      })
    ),
    basket: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z',
      }),
      o.createElement('path', {
        d: 'M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z',
      }),
      o.createElement('path', {
        d: 'M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z',
      })
    ),
    beaker: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z',
      })
    ),
    hourglass: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z',
      })
    ),
    flag: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z',
      })
    ),
    cloudhollow: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z',
      })
    ),
    cloud: o.createElement('path', {
      d: 'M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z',
    }),
    edit: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'm13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z',
      })
    ),
    cog: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z',
        fill: '#333',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z',
      })
    ),
    nut: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z',
      })
    ),
    wrench: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z',
      })
    ),
    ellipsis: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
      })
    ),
    check: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z',
      })
    ),
    form: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z',
      }),
      o.createElement('path', {
        d: 'm6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z',
      })
    ),
    batchdeny: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z',
      })
    ),
    batchaccept: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z',
      })
    ),
    controls: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z',
      })
    ),
    plus: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z',
      })
    ),
    closeAlt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z',
      })
    ),
    cross: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z',
      })
    ),
    trash: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z',
      })
    ),
    pinalt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z',
      })
    ),
    unpin: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z',
      })
    ),
    add: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
      })
    ),
    subtract: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    close: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
      })
    ),
    delete: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z',
      })
    ),
    passed: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z',
      })
    ),
    changed: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z',
      })
    ),
    failed: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z',
      })
    ),
    clear: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z',
      })
    ),
    comment: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z',
      })
    ),
    commentadd: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z',
      })
    ),
    requestchange: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z',
      })
    ),
    comments: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z',
      })
    ),
    lock: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z',
      })
    ),
    unlock: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z',
      })
    ),
    key: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', { d: 'M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z',
      })
    ),
    outbox: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z',
      }),
      o.createElement('path', {
        d: 'M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z',
      })
    ),
    credit: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z',
      })
    ),
    button: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z',
      }),
      o.createElement('path', {
        d: 'M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z',
      })
    ),
    type: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z',
      }),
      o.createElement('path', {
        d: 'M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z',
      })
    ),
    pointerdefault: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z',
      })
    ),
    pointerhand: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z',
      })
    ),
    browser: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
      })
    ),
    tablet: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z',
      })
    ),
    mobile: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z',
      })
    ),
    watch: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        key: 'watch',
        fillRule: 'evenodd',
        d: 'M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z',
      })
    ),
    sidebar: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z',
      })
    ),
    sidebaralt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z',
      })
    ),
    sidebaralttoggle: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z',
      })
    ),
    sidebartoggle: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z',
      })
    ),
    bottombar: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z',
      })
    ),
    bottombartoggle: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z',
      })
    ),
    cpu: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z',
      })
    ),
    database: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z',
      })
    ),
    memory: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z',
      })
    ),
    structure: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z',
      })
    ),
    box: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'm7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z',
      })
    ),
    power: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z',
      }),
      o.createElement('path', {
        d: 'M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z',
      })
    ),
    photo: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z',
      })
    ),
    component: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z',
      })
    ),
    grid: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z',
      })
    ),
    outline: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
      })
    ),
    photodrag: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z',
      }),
      o.createElement('path', {
        d: 'M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z',
      })
    ),
    search: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z',
      })
    ),
    zoom: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z',
      })
    ),
    zoomout: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z',
      })
    ),
    zoomreset: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z',
      })
    ),
    eye: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'm14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z',
      })
    ),
    eyeclose: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z',
      }),
      o.createElement('path', {
        d: 'M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z',
      })
    ),
    lightning: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z',
      })
    ),
    lightningoff: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z',
      })
    ),
    contrast: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z',
      })
    ),
    switchalt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z',
      })
    ),
    mirror: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z',
      })
    ),
    grow: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z',
      }),
      o.createElement('path', {
        d: 'M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z',
      })
    ),
    paintbrush: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z',
      })
    ),
    ruler: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z',
      })
    ),
    stop: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
      })
    ),
    camera: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z',
      })
    ),
    video: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', { d: 'M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z' }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z',
      })
    ),
    speaker: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z',
      }),
      o.createElement('path', {
        d: 'M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z',
      }),
      o.createElement('path', {
        d: 'M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z',
      })
    ),
    play: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'm12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z',
      })
    ),
    playback: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z',
      })
    ),
    playnext: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'm2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z',
      })
    ),
    rewind: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z',
      })
    ),
    fastforward: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z',
      })
    ),
    stopalt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z',
      })
    ),
    sidebyside: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z',
      })
    ),
    stacked: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z',
      })
    ),
    sun: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
      }),
      o.createElement('path', {
        d: 'M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z',
      })
    ),
    moon: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z',
      })
    ),
    book: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z',
      })
    ),
    document: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z',
      })
    ),
    copy: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z',
      })
    ),
    category: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z',
      })
    ),
    folder: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z',
      })
    ),
    print: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z',
      })
    ),
    graphline: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z',
      })
    ),
    calendar: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z',
      })
    ),
    graphbar: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z',
      })
    ),
    menu: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z',
      })
    ),
    menualt: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z',
      })
    ),
    filter: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z',
      })
    ),
    docchart: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z',
      })
    ),
    doclist: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z',
      })
    ),
    markup: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z',
      })
    ),
    bold: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z',
      })
    ),
    italic: o.createElement('path', {
      d: 'M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z',
    }),
    paperclip: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z',
      })
    ),
    listordered: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z',
      })
    ),
    listunordered: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z',
      })
    ),
    paragraph: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z',
      })
    ),
    markdown: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z',
      })
    ),
    repository: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z',
      }),
      o.createElement('path', {
        d: 'M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z',
      }),
      o.createElement('path', {
        d: 'M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z',
      }),
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z',
      })
    ),
    commit: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
      })
    ),
    branch: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
      })
    ),
    pullrequest: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z',
      })
    ),
    merge: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
      })
    ),
    apple: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z',
      })
    ),
    linux: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z',
      })
    ),
    ubuntu: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z',
      })
    ),
    windows: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z',
      })
    ),
    storybook: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z',
      })
    ),
    azuredevops: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'm0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z',
      })
    ),
    bitbucket: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z',
      })
    ),
    chrome: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z',
      })
    ),
    chromatic: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z',
      })
    ),
    componentdriven: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z',
      })
    ),
    discord: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z',
      })
    ),
    facebook: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z',
      })
    ),
    figma: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z',
      })
    ),
    gdrive: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z',
      })
    ),
    github: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z',
      })
    ),
    gitlab: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z',
      })
    ),
    google: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z',
      })
    ),
    graphql: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z',
      })
    ),
    medium: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z',
      })
    ),
    redux: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z',
      })
    ),
    twitter: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z',
      })
    ),
    youtube: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z',
      })
    ),
    vscode: o.createElement(
      o.Fragment,
      null,
      o.createElement('path', {
        d: 'M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z',
      })
    ),
  },
  yc = _.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`,
  ye = ({ icon: e, useSymbol: t, ...r }) =>
    o.createElement(
      yc,
      { viewBox: '0 0 14 14', width: '14px', height: '14px', ...r },
      t ? o.createElement('use', { xlinkHref: `#icon--${e}` }) : Zr[e]
    ),
  wg = b.memo(function ({ icons: e = Object.keys(Zr) }) {
    return o.createElement(
      yc,
      {
        viewBox: '0 0 14 14',
        style: { position: 'absolute', width: 0, height: 0 },
        'data-chromatic': 'ignore',
      },
      e.map((t) =>
        o.createElement('symbol', { id: `icon--${t}`, key: t }, Zr[t])
      )
    );
  }),
  Ag = 0,
  Sg = (e) =>
    e.button === Ag && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
  Cg = (e, t) => {
    Sg(e) && (e.preventDefault(), t(e));
  },
  kg = _.span(
    ({ withArrow: e }) =>
      e
        ? {
            '> svg:last-of-type': {
              height: '0.7em',
              width: '0.7em',
              marginRight: 0,
              marginLeft: '0.25em',
              bottom: 'auto',
              verticalAlign: 'inherit',
            },
          }
        : {},
    ({ containsIcon: e }) =>
      e
        ? {
            svg: {
              height: '1em',
              width: '1em',
              verticalAlign: 'middle',
              position: 'relative',
              bottom: 0,
              marginRight: 0,
            },
          }
        : {}
  ),
  _g = _.a(
    ({ theme: e }) => ({
      display: 'inline-block',
      transition: 'all 150ms ease-out',
      textDecoration: 'none',
      color: e.color.secondary,
      '&:hover, &:focus': {
        cursor: 'pointer',
        color: Qt(0.07, e.color.secondary),
        'svg path:not([fill])': { fill: Qt(0.07, e.color.secondary) },
      },
      '&:active': {
        color: Qt(0.1, e.color.secondary),
        'svg path:not([fill])': { fill: Qt(0.1, e.color.secondary) },
      },
      svg: {
        display: 'inline-block',
        height: '1em',
        width: '1em',
        verticalAlign: 'text-top',
        position: 'relative',
        bottom: '-0.125em',
        marginRight: '0.4em',
        '& path': { fill: e.color.secondary },
      },
    }),
    ({ theme: e, secondary: t, tertiary: r }) => {
      let n;
      return (
        t && (n = [e.textMutedColor, e.color.dark, e.color.darker]),
        r && (n = [e.color.dark, e.color.darkest, e.textMutedColor]),
        n
          ? {
              color: n[0],
              'svg path:not([fill])': { fill: n[0] },
              '&:hover': {
                color: n[1],
                'svg path:not([fill])': { fill: n[1] },
              },
              '&:active': {
                color: n[2],
                'svg path:not([fill])': { fill: n[2] },
              },
            }
          : {}
      );
    },
    ({ nochrome: e }) =>
      e
        ? {
            color: 'inherit',
            '&:hover, &:active': {
              color: 'inherit',
              textDecoration: 'underline',
            },
          }
        : {},
    ({ theme: e, inverse: t }) =>
      t
        ? {
            color: e.color.lightest,
            ':not([fill])': { fill: e.color.lightest },
            '&:hover': {
              color: e.color.lighter,
              'svg path:not([fill])': { fill: e.color.lighter },
            },
            '&:active': {
              color: e.color.light,
              'svg path:not([fill])': { fill: e.color.light },
            },
          }
        : {},
    ({ isButton: e }) =>
      e
        ? {
            border: 0,
            borderRadius: 0,
            background: 'none',
            padding: 0,
            fontSize: 'inherit',
          }
        : {}
  ),
  At = ({
    cancel: e,
    children: t,
    onClick: r,
    withArrow: n,
    containsIcon: a,
    className: l,
    ...i
  }) =>
    o.createElement(
      _g,
      { ...i, onClick: r && e ? (u) => Cg(u, r) : r, className: l },
      o.createElement(
        kg,
        { withArrow: n, containsIcon: a },
        t,
        n && o.createElement(ye, { icon: 'arrowright' })
      )
    );
At.defaultProps = {
  cancel: !0,
  className: void 0,
  style: void 0,
  onClick: void 0,
  withArrow: !1,
  containsIcon: !1,
};
var Og = _.div(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
    lineHeight: '1.6',
    h1: {
      fontSize: `${e.typography.size.l1}px`,
      fontWeight: e.typography.weight.bold,
    },
    h2: {
      fontSize: `${e.typography.size.m2}px`,
      borderBottom: `1px solid ${e.appBorderColor}`,
    },
    h3: { fontSize: `${e.typography.size.m1}px` },
    h4: { fontSize: `${e.typography.size.s3}px` },
    h5: { fontSize: `${e.typography.size.s2}px` },
    h6: { fontSize: `${e.typography.size.s2}px`, color: e.color.dark },
    'pre:not(.prismjs)': {
      background: 'transparent',
      border: 'none',
      borderRadius: 0,
      padding: 0,
      margin: 0,
    },
    'pre pre, pre.prismjs': {
      padding: 15,
      margin: 0,
      whiteSpace: 'pre-wrap',
      color: 'inherit',
      fontSize: '13px',
      lineHeight: '19px',
    },
    'pre pre code, pre.prismjs code': { color: 'inherit', fontSize: 'inherit' },
    'pre code': {
      margin: 0,
      padding: 0,
      whiteSpace: 'pre',
      border: 'none',
      background: 'transparent',
    },
    'pre code, pre tt': { backgroundColor: 'transparent', border: 'none' },
    'body > *:first-of-type': { marginTop: '0 !important' },
    'body > *:last-child': { marginBottom: '0 !important' },
    a: { color: e.color.secondary, textDecoration: 'none' },
    'a.absent': { color: '#cc0000' },
    'a.anchor': {
      display: 'block',
      paddingLeft: 30,
      marginLeft: -30,
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
    },
    'h1, h2, h3, h4, h5, h6': {
      margin: '20px 0 10px',
      padding: 0,
      cursor: 'text',
      position: 'relative',
      '&:first-of-type': { marginTop: 0, paddingTop: 0 },
      '&:hover a.anchor': { textDecoration: 'none' },
      '& tt, & code': { fontSize: 'inherit' },
    },
    'h1:first-of-type + h2': { marginTop: 0, paddingTop: 0 },
    'p, blockquote, ul, ol, dl, li, table, pre': { margin: '15px 0' },
    hr: {
      border: '0 none',
      borderTop: `1px solid ${e.appBorderColor}`,
      height: 4,
      padding: 0,
    },
    'body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type':
      { marginTop: 0, paddingTop: 0 },
    'body > h1:first-of-type + h2': { marginTop: 0, paddingTop: 0 },
    'a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6':
      { marginTop: 0, paddingTop: 0 },
    'h1 p, h2 p, h3 p, h4 p, h5 p, h6 p': { marginTop: 0 },
    'li p.first': { display: 'inline-block' },
    'ul, ol': {
      paddingLeft: 30,
      '& :first-of-type': { marginTop: 0 },
      '& :last-child': { marginBottom: 0 },
    },
    dl: { padding: 0 },
    'dl dt': {
      fontSize: '14px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      margin: '0 0 15px',
      padding: '0 15px',
      '&:first-of-type': { padding: 0 },
      '& > :first-of-type': { marginTop: 0 },
      '& > :last-child': { marginBottom: 0 },
    },
    blockquote: {
      borderLeft: `4px solid ${e.color.medium}`,
      padding: '0 15px',
      color: e.color.dark,
      '& > :first-of-type': { marginTop: 0 },
      '& > :last-child': { marginBottom: 0 },
    },
    table: {
      padding: 0,
      borderCollapse: 'collapse',
      '& tr': {
        borderTop: `1px solid ${e.appBorderColor}`,
        backgroundColor: 'white',
        margin: 0,
        padding: 0,
        '& th': {
          fontWeight: 'bold',
          border: `1px solid ${e.appBorderColor}`,
          textAlign: 'left',
          margin: 0,
          padding: '6px 13px',
        },
        '& td': {
          border: `1px solid ${e.appBorderColor}`,
          textAlign: 'left',
          margin: 0,
          padding: '6px 13px',
        },
        '&:nth-of-type(2n)': { backgroundColor: e.color.lighter },
        '& th :first-of-type, & td :first-of-type': { marginTop: 0 },
        '& th :last-child, & td :last-child': { marginBottom: 0 },
      },
    },
    img: { maxWidth: '100%' },
    'span.frame': {
      display: 'block',
      overflow: 'hidden',
      '& > span': {
        border: `1px solid ${e.color.medium}`,
        display: 'block',
        float: 'left',
        overflow: 'hidden',
        margin: '13px 0 0',
        padding: 7,
        width: 'auto',
      },
      '& span img': { display: 'block', float: 'left' },
      '& span span': {
        clear: 'both',
        color: e.color.darkest,
        display: 'block',
        padding: '5px 0 0',
      },
    },
    'span.align-center': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'center',
      },
      '& span img': { margin: '0 auto', textAlign: 'center' },
    },
    'span.align-right': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px 0 0',
        textAlign: 'right',
      },
      '& span img': { margin: 0, textAlign: 'right' },
    },
    'span.float-left': {
      display: 'block',
      marginRight: 13,
      overflow: 'hidden',
      float: 'left',
      '& span': { margin: '13px 0 0' },
    },
    'span.float-right': {
      display: 'block',
      marginLeft: 13,
      overflow: 'hidden',
      float: 'right',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'right',
      },
    },
    'code, tt': {
      margin: '0 2px',
      padding: '0 5px',
      whiteSpace: 'nowrap',
      border: `1px solid ${e.color.mediumlight}`,
      backgroundColor: e.color.lighter,
      borderRadius: 3,
      color: e.base === 'dark' && e.color.darkest,
    },
  })),
  Nt = [],
  ur = null,
  Tg = b.lazy(async () => {
    let { SyntaxHighlighter: e } = await Zt(
      () => import('./syntaxhighlighter-B5GMVT5T-JaV9nIQr.js'),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
      import.meta.url
    );
    return (
      Nt.length > 0 &&
        (Nt.forEach((t) => {
          e.registerLanguage(...t);
        }),
        (Nt = [])),
      ur === null && (ur = e),
      { default: (t) => o.createElement(e, { ...t }) }
    );
  }),
  Rg = b.lazy(async () => {
    let [{ SyntaxHighlighter: e }, { formatter: t }] = await Promise.all([
      Zt(
        () => import('./syntaxhighlighter-B5GMVT5T-JaV9nIQr.js'),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
        import.meta.url
      ),
      Zt(
        () => import('./formatter-SWP5E3XI-CzpOOY9j.js'),
        __vite__mapDeps([8, 1, 2, 3, 4, 5, 6, 7]),
        import.meta.url
      ),
    ]);
    return (
      Nt.length > 0 &&
        (Nt.forEach((r) => {
          e.registerLanguage(...r);
        }),
        (Nt = [])),
      ur === null && (ur = e),
      { default: (r) => o.createElement(e, { ...r, formatter: t }) }
    );
  }),
  Kn = (e) =>
    o.createElement(
      b.Suspense,
      { fallback: o.createElement('div', null) },
      e.format !== !1
        ? o.createElement(Rg, { ...e })
        : o.createElement(Tg, { ...e })
    );
Kn.registerLanguage = (...e) => {
  if (ur !== null) {
    ur.registerLanguage(...e);
    return;
  }
  Nt.push(e);
};
var Fg = (e) => (typeof e == 'number' ? e : Number(e)),
  $g = _.div(
    ({ theme: e, col: t, row: r = 1 }) =>
      t
        ? {
            display: 'inline-block',
            verticalAlign: 'inherit',
            '& > *': {
              marginLeft: t * e.layoutMargin,
              verticalAlign: 'inherit',
            },
            [`& > *:first-child${Ja}`]: { marginLeft: 0 },
          }
        : {
            '& > *': { marginTop: r * e.layoutMargin },
            [`& > *:first-child${Ja}`]: { marginTop: 0 },
          },
    ({ theme: e, outer: t, col: r, row: n }) => {
      switch (!0) {
        case !!(t && r):
          return {
            marginLeft: t * e.layoutMargin,
            marginRight: t * e.layoutMargin,
          };
        case !!(t && n):
          return {
            marginTop: t * e.layoutMargin,
            marginBottom: t * e.layoutMargin,
          };
        default:
          return {};
      }
    }
  ),
  Dg = ({ col: e, row: t, outer: r, children: n, ...a }) => {
    let l = Fg(typeof r == 'number' || !r ? r : e || t);
    return o.createElement($g, { col: e, row: t, outer: l, ...a }, n);
  },
  Lg = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  Mg = _.div(),
  Bg = _.div(({ theme: e }) => ({
    padding: 30,
    textAlign: 'center',
    color: e.color.defaultText,
    fontSize: e.typography.size.s2 - 1,
  })),
  vc = ({ children: e, ...t }) => {
    let [r, n] = b.Children.toArray(e);
    return o.createElement(
      Bg,
      { ...t },
      o.createElement(Lg, null, r),
      n && o.createElement(Mg, null, n)
    );
  },
  Ig = _.div(({ scale: e = 1, elementHeight: t }) => ({
    height: t || 'auto',
    transformOrigin: 'top left',
    transform: `scale(${1 / e})`,
  }));
function Pg({ scale: e, children: t }) {
  let r = b.useRef(null),
    [n, a] = b.useState(0),
    l = b.useCallback(
      ({ height: i }) => {
        i && a(i / e);
      },
      [e]
    );
  return (
    b.useEffect(() => {
      r.current && a(r.current.getBoundingClientRect().height);
    }, [e]),
    Yu({ ref: r, onResize: l }),
    o.createElement(
      Ig,
      { scale: e, elementHeight: n },
      o.createElement(
        'div',
        { ref: r, className: 'innerZoomElementWrapper' },
        t
      )
    )
  );
}
var jg = class extends b.Component {
    constructor() {
      super(...arguments), (this.iframe = null);
    }
    componentDidMount() {
      let { iFrameRef: e } = this.props;
      this.iframe = e.current;
    }
    shouldComponentUpdate(e) {
      let { scale: t, active: r } = this.props;
      return (
        t !== e.scale && this.setIframeInnerZoom(e.scale),
        r !== e.active &&
          this.iframe.setAttribute(
            'data-is-storybook',
            e.active ? 'true' : 'false'
          ),
        e.children.props.src !== this.props.children.props.src
      );
    }
    setIframeInnerZoom(e) {
      try {
        Object.assign(this.iframe.contentDocument.body.style, {
          width: `${e * 100}%`,
          height: `${e * 100}%`,
          transform: `scale(${1 / e})`,
          transformOrigin: 'top left',
        });
      } catch {
        this.setIframeZoom(e);
      }
    }
    setIframeZoom(e) {
      Object.assign(this.iframe.style, {
        width: `${e * 100}%`,
        height: `${e * 100}%`,
        transform: `scale(${1 / e})`,
        transformOrigin: 'top left',
      });
    }
    render() {
      let { children: e } = this.props;
      return o.createElement(o.Fragment, null, e);
    }
  },
  Ec = { Element: Pg, IFrame: jg },
  { document: Ng } = Im,
  Hg = _.strong(({ theme: e }) => ({ color: e.color.orange })),
  Zg = _.strong(({ theme: e }) => ({
    color: e.color.ancillary,
    textDecoration: 'underline',
  })),
  Ti = _.em(({ theme: e }) => ({ color: e.textMutedColor })),
  Vg = /(Error): (.*)\n/,
  zg = /at (?:(.*) )?\(?(.+)\)?/,
  qg = /([^@]+)?(?:\/<)?@(.+)?/,
  Ug = /([^@]+)?@(.+)?/,
  xc = ({ error: e }) => {
    if (!e)
      return o.createElement(
        b.Fragment,
        null,
        'This error has no stack or message'
      );
    if (!e.stack)
      return o.createElement(
        b.Fragment,
        null,
        e.message || 'This error has no stack or message'
      );
    let t = e.stack.toString();
    t &&
      e.message &&
      !t.includes(e.message) &&
      (t = `Error: ${e.message}

${t}`);
    let r = t.match(Vg);
    if (!r) return o.createElement(b.Fragment, null, t);
    let [, n, a] = r,
      l = t.split(/\n/).slice(1),
      [, ...i] = l
        .map((u) => {
          let s = u.match(zg) || u.match(qg) || u.match(Ug);
          return s
            ? {
                name: (s[1] || '').replace('/<', ''),
                location: s[2].replace(Ng.location.origin, ''),
              }
            : null;
        })
        .filter(Boolean);
    return o.createElement(
      b.Fragment,
      null,
      o.createElement('span', null, n),
      ': ',
      o.createElement(Hg, null, a),
      o.createElement('br', null),
      i.map((u, s) =>
        u.name
          ? o.createElement(
              b.Fragment,
              { key: s },
              '  ',
              'at ',
              o.createElement(Zg, null, u.name),
              ' (',
              o.createElement(Ti, null, u.location),
              ')',
              o.createElement('br', null)
            )
          : o.createElement(
              b.Fragment,
              { key: s },
              '  ',
              'at ',
              o.createElement(Ti, null, u.location),
              o.createElement('br', null)
            )
      )
    );
  },
  wc = _.button(
    ({ small: e, theme: t }) => ({
      border: 0,
      borderRadius: '3em',
      cursor: 'pointer',
      display: 'inline-block',
      overflow: 'hidden',
      padding: e ? '8px 16px' : '13px 20px',
      position: 'relative',
      textAlign: 'center',
      textDecoration: 'none',
      transitionProperty: 'background, box-shadow',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-out',
      verticalAlign: 'top',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      opacity: 1,
      margin: 0,
      background: 'transparent',
      fontSize: `${e ? t.typography.size.s1 : t.typography.size.s2 - 1}px`,
      fontWeight: t.typography.weight.bold,
      lineHeight: '1',
      svg: {
        display: 'inline-block',
        height: e ? 12 : 14,
        width: e ? 12 : 14,
        verticalAlign: 'top',
        marginRight: e ? 4 : 6,
        marginTop: e ? 0 : -1,
        marginBottom: e ? 0 : -1,
        pointerEvents: 'none',
        path: { fill: 'currentColor' },
      },
    }),
    ({ disabled: e }) =>
      e
        ? {
            cursor: 'not-allowed !important',
            opacity: 0.5,
            '&:hover': { transform: 'none' },
          }
        : {},
    ({ containsIcon: e, small: t }) =>
      e
        ? {
            svg: { display: 'block', margin: 0 },
            ...(t ? { padding: 10 } : { padding: 13 }),
          }
        : {},
    ({ theme: e, primary: t, secondary: r, gray: n }) => {
      let a;
      return (
        n
          ? (a = e.color.mediumlight)
          : r
            ? (a = e.color.secondary)
            : t && (a = e.color.primary),
        a
          ? {
              background: a,
              color: n ? e.color.darkest : e.color.lightest,
              '&:hover': { background: Qt(0.05, a) },
              '&:active': { boxShadow: 'rgba(0, 0, 0, 0.1) 0 0 0 3em inset' },
              '&:focus': {
                boxShadow: `${ft(a, 1)} 0 1px 9px 2px`,
                outline: 'none',
              },
              '&:focus:hover': { boxShadow: `${ft(a, 0.2)} 0 8px 18px 0px` },
            }
          : {}
      );
    },
    ({ theme: e, tertiary: t, inForm: r, small: n }) =>
      t
        ? {
            background: e.button.background,
            color: e.input.color,
            boxShadow: `${e.button.border} 0 0 0 1px inset`,
            borderRadius: e.input.borderRadius,
            ...(r && n ? { padding: '10px 16px' } : {}),
            '&:hover': {
              background:
                e.base === 'light'
                  ? Qt(0.02, e.button.background)
                  : cg(0.03, e.button.background),
              ...(r
                ? {}
                : {
                    boxShadow:
                      'rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset',
                  }),
            },
            '&:active': { background: e.button.background },
            '&:focus': {
              boxShadow: `${ft(e.color.secondary, 1)} 0 0 0 1px inset`,
              outline: 'none',
            },
          }
        : {},
    ({ theme: e, outline: t }) =>
      t
        ? {
            boxShadow: `${ve(0.8, e.color.defaultText)} 0 0 0 1px inset`,
            color: ve(0.3, e.color.defaultText),
            background: 'transparent',
            '&:hover, &:focus': {
              boxShadow: `${ve(0.5, e.color.defaultText)} 0 0 0 1px inset`,
              outline: 'none',
            },
            '&:active': {
              boxShadow: `${ve(0.5, e.color.defaultText)} 0 0 0 2px inset`,
              color: ve(0, e.color.defaultText),
            },
          }
        : {},
    ({ theme: e, outline: t, primary: r }) => {
      let n = e.color.primary;
      return t && r
        ? {
            boxShadow: `${n} 0 0 0 1px inset`,
            color: n,
            'svg path:not([fill])': { fill: n },
            '&:hover': {
              boxShadow: `${n} 0 0 0 1px inset`,
              background: 'transparent',
            },
            '&:active': {
              background: n,
              boxShadow: `${n} 0 0 0 1px inset`,
              color: e.color.tertiary,
            },
            '&:focus': {
              boxShadow: `${n} 0 0 0 1px inset, ${ft(n, 0.4)} 0 1px 9px 2px`,
              outline: 'none',
            },
            '&:focus:hover': {
              boxShadow: `${n} 0 0 0 1px inset, ${ft(n, 0.2)} 0 8px 18px 0px`,
            },
          }
        : {};
    },
    ({ theme: e, outline: t, primary: r, secondary: n }) => {
      let a;
      return (
        n ? (a = e.color.secondary) : r && (a = e.color.primary),
        t && a
          ? {
              boxShadow: `${a} 0 0 0 1px inset`,
              color: a,
              'svg path:not([fill])': { fill: a },
              '&:hover': {
                boxShadow: `${a} 0 0 0 1px inset`,
                background: 'transparent',
              },
              '&:active': {
                background: a,
                boxShadow: `${a} 0 0 0 1px inset`,
                color: e.color.tertiary,
              },
              '&:focus': {
                boxShadow: `${a} 0 0 0 1px inset, ${ft(a, 0.4)} 0 1px 9px 2px`,
                outline: 'none',
              },
              '&:focus:hover': {
                boxShadow: `${a} 0 0 0 1px inset, ${ft(a, 0.2)} 0 8px 18px 0px`,
              },
            }
          : {}
      );
    }
  ),
  Wg = wc.withComponent('a'),
  Ac = Object.assign(
    b.forwardRef(function ({ isLink: e, children: t, ...r }, n) {
      return e
        ? o.createElement(Wg, { ...r, ref: n }, t)
        : o.createElement(wc, { ...r, ref: n }, t);
    }),
    { defaultProps: { isLink: !1 } }
  ),
  Gg = _.label(({ theme: e }) => ({
    display: 'flex',
    borderBottom: `1px solid ${e.appBorderColor}`,
    margin: '0 15px',
    padding: '8px 0',
    '&:last-child': { marginBottom: '3rem' },
  })),
  Yg = _.span(({ theme: e }) => ({
    minWidth: 100,
    fontWeight: e.typography.weight.bold,
    marginRight: 15,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    lineHeight: '16px',
  })),
  Sc = ({ label: e, children: t, ...r }) =>
    o.createElement(
      Gg,
      { ...r },
      e ? o.createElement(Yg, null, o.createElement('span', null, e)) : null,
      t
    );
Sc.defaultProps = { label: void 0 };
function po() {
  return (
    (po = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    po.apply(this, arguments)
  );
}
function Kg(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    l;
  for (l = 0; l < n.length; l++)
    (a = n[l]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Ri = function (e, t) {
    if (typeof e == 'function') {
      e(t);
      return;
    }
    e.current = t;
  },
  Xg = function (e, t) {
    var r = b.useRef();
    return b.useCallback(
      function (n) {
        (e.current = n),
          r.current && Ri(r.current, null),
          (r.current = t),
          t && Ri(t, n);
      },
      [t]
    );
  },
  Jg = Xg,
  Qg = function () {},
  eh = [
    'cacheMeasurements',
    'maxRows',
    'minRows',
    'onChange',
    'onHeightChange',
  ],
  th = function (e, t) {
    e.cacheMeasurements, e.maxRows, e.minRows;
    var r = e.onChange,
      n = r === void 0 ? Qg : r;
    e.onHeightChange;
    var a = Kg(e, eh);
    a.value;
    var l = b.useRef(null),
      i = Jg(l, t);
    return (
      b.useRef(0),
      b.useRef(),
      b.createElement('textarea', po({}, a, { onChange: n, ref: i }))
    );
  },
  rh = b.forwardRef(th),
  nh = {
    appearance: 'none',
    border: '0 none',
    boxSizing: 'inherit',
    display: ' block',
    margin: ' 0',
    background: 'transparent',
    padding: 0,
    fontSize: 'inherit',
    position: 'relative',
  },
  sl = ({ theme: e }) => ({
    ...nh,
    transition: 'box-shadow 200ms ease-out, opacity 200ms ease-out',
    color: e.input.color || 'inherit',
    background: e.input.background,
    boxShadow: `${e.input.border} 0 0 0 1px inset`,
    borderRadius: e.input.borderRadius,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: '20px',
    padding: '6px 10px',
    boxSizing: 'border-box',
    height: 32,
    '&[type="file"]': { height: 'auto' },
    '&:focus': {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: 'none',
    },
    '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
    '&:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset`,
    },
    '&::placeholder': { color: e.textMutedColor, opacity: 1 },
  }),
  Xn = ({ size: e }) => {
    switch (e) {
      case '100%':
        return { width: '100%' };
      case 'flex':
        return { flex: 1 };
      case 'auto':
      default:
        return { display: 'inline' };
    }
  },
  Cc = ({ align: e }) => {
    switch (e) {
      case 'end':
        return { textAlign: 'right' };
      case 'center':
        return { textAlign: 'center' };
      case 'start':
      default:
        return { textAlign: 'left' };
    }
  },
  Jn = ({ valid: e, theme: t }) => {
    switch (e) {
      case 'valid':
        return { boxShadow: `${t.color.positive} 0 0 0 1px inset !important` };
      case 'error':
        return { boxShadow: `${t.color.negative} 0 0 0 1px inset !important` };
      case 'warn':
        return { boxShadow: `${t.color.warning} 0 0 0 1px inset` };
      case void 0:
      case null:
      default:
        return {};
    }
  },
  ah = Object.assign(
    _(
      b.forwardRef(function ({ size: e, valid: t, align: r, ...n }, a) {
        return o.createElement('input', { ...n, ref: a });
      })
    )(sl, Xn, Cc, Jn, { minHeight: 32 }),
    { displayName: 'Input' }
  ),
  oh = Object.assign(
    _(
      b.forwardRef(function ({ size: e, valid: t, align: r, ...n }, a) {
        return o.createElement('select', { ...n, ref: a });
      })
    )(sl, Xn, Jn, {
      height: 32,
      userSelect: 'none',
      paddingRight: 20,
      appearance: 'menulist',
    }),
    { displayName: 'Select' }
  ),
  lh = Object.assign(
    _(
      b.forwardRef(function ({ size: e, valid: t, align: r, ...n }, a) {
        return o.createElement(rh, { ...n, ref: a });
      })
    )(sl, Xn, Cc, Jn, ({ height: e = 400 }) => ({
      overflow: 'visible',
      maxHeight: e,
    })),
    { displayName: 'Textarea' }
  ),
  ih = _(
    b.forwardRef(function ({ size: e, valid: t, align: r, ...n }, a) {
      return o.createElement(Ac, { ...n, ref: a });
    })
  )(Xn, Jn, {
    userSelect: 'none',
    overflow: 'visible',
    zIndex: 2,
    '&:hover': { transform: 'none' },
  }),
  sh = Object.assign(
    b.forwardRef(function (e, t) {
      return o.createElement(ih, {
        ...e,
        tertiary: !0,
        small: !0,
        inForm: !0,
        ref: t,
      });
    }),
    { displayName: 'Button' }
  ),
  He = Object.assign(_.form({ boxSizing: 'border-box', width: '100%' }), {
    Field: Sc,
    Input: ah,
    Select: oh,
    Textarea: lh,
    Button: sh,
  }),
  uh = b.lazy(() =>
    Zt(
      () => import('./WithTooltip-V3YHNWJZ-DxMpGr6g.js'),
      __vite__mapDeps([9, 1, 2, 3, 4, 5, 6, 7]),
      import.meta.url
    ).then((e) => ({ default: e.WithTooltip }))
  ),
  ch = (e) =>
    o.createElement(
      b.Suspense,
      { fallback: o.createElement('div', null) },
      o.createElement(uh, { ...e })
    ),
  dh = b.lazy(() =>
    Zt(
      () => import('./WithTooltip-V3YHNWJZ-DxMpGr6g.js'),
      __vite__mapDeps([9, 1, 2, 3, 4, 5, 6, 7]),
      import.meta.url
    ).then((e) => ({ default: e.WithTooltipPure }))
  ),
  kc = (e) =>
    o.createElement(
      b.Suspense,
      { fallback: o.createElement('div', null) },
      o.createElement(dh, { ...e })
    ),
  ph = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  fh = _.span(),
  mh = _.div(({ theme: e }) => ({
    marginTop: 8,
    textAlign: 'center',
    '> *': { margin: '0 8px', fontWeight: e.typography.weight.bold },
  })),
  gh = _.div(({ theme: e }) => ({
    color: e.color.defaultText,
    lineHeight: '18px',
  })),
  hh = _.div({ padding: 15, width: 280, boxSizing: 'border-box' }),
  _c = ({ title: e, desc: t, links: r }) =>
    o.createElement(
      hh,
      null,
      o.createElement(
        gh,
        null,
        e && o.createElement(ph, null, e),
        t && o.createElement(fh, null, t)
      ),
      r &&
        o.createElement(
          mh,
          null,
          r.map(({ title: n, ...a }) =>
            o.createElement(At, { ...a, key: n }, n)
          )
        )
    );
_c.defaultProps = { title: null, desc: null, links: null };
var bh = _.div(({ theme: e }) => ({
    padding: '2px 6px',
    lineHeight: '16px',
    fontSize: 10,
    fontWeight: e.typography.weight.bold,
    color: e.color.lightest,
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.3)',
    borderRadius: 4,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: -1,
    background:
      e.base === 'light' ? 'rgba(60, 60, 60, 0.9)' : 'rgba(0, 0, 0, 0.95)',
    margin: 6,
  })),
  yh = ({ note: e, ...t }) => o.createElement(bh, { ...t }, e),
  vh = _(({ active: e, loading: t, disabled: r, ...n }) =>
    o.createElement('span', { ...n })
  )(
    ({ theme: e }) => ({
      color: e.color.defaultText,
      fontWeight: e.typography.weight.regular,
    }),
    ({ active: e, theme: t }) =>
      e
        ? { color: t.color.secondary, fontWeight: t.typography.weight.bold }
        : {},
    ({ loading: e, theme: t }) =>
      e
        ? { display: 'inline-block', flex: 'none', ...t.animation.inlineGlow }
        : {},
    ({ disabled: e, theme: t }) =>
      e ? { color: ve(0.7, t.color.defaultText) } : {}
  ),
  Eh = _.span({
    display: 'flex',
    '& svg': { height: 12, width: 12, margin: '3px 0', verticalAlign: 'top' },
    '& path': { fill: 'inherit' },
  }),
  xh = _.span(
    { flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column' },
    ({ isIndented: e }) => (e ? { marginLeft: 24 } : {})
  ),
  wh = _.span(
    ({ theme: e }) => ({ fontSize: '11px', lineHeight: '14px' }),
    ({ active: e, theme: t }) => (e ? { color: t.color.secondary } : {}),
    ({ theme: e, disabled: t }) => (t ? { color: e.textMutedColor } : {})
  ),
  Fi = _.span(
    ({ active: e, theme: t }) =>
      e
        ? {
            '& svg': { opacity: 1 },
            '& svg path:not([fill])': { fill: t.color.secondary },
          }
        : {},
    () => ({ display: 'flex', maxWidth: 14 })
  ),
  Ah = _.a(
    ({ theme: e }) => ({
      fontSize: e.typography.size.s1,
      transition: 'all 150ms ease-out',
      color: e.color.dark,
      textDecoration: 'none',
      cursor: 'pointer',
      justifyContent: 'space-between',
      lineHeight: '18px',
      padding: '7px 10px',
      display: 'flex',
      alignItems: 'center',
      '& > * + *': { paddingLeft: 10 },
      '&:hover': { background: e.background.hoverable },
      '&:hover svg': { opacity: 1 },
    }),
    ({ disabled: e }) => (e ? { cursor: 'not-allowed' } : {})
  ),
  Sh = zt(100)((e, t, r) => {
    let n = {};
    return (
      e && Object.assign(n, { onClick: e }),
      t && Object.assign(n, { href: t }),
      r && t && Object.assign(n, { to: t, as: r }),
      n
    );
  }),
  Oc = ({
    loading: e,
    left: t,
    title: r,
    center: n,
    right: a,
    icon: l,
    active: i,
    disabled: u,
    isIndented: s,
    href: c,
    onClick: d,
    LinkWrapper: f,
    ...m
  }) => {
    let p = Sh(d, c, f),
      h = { active: i, disabled: u },
      g = typeof l == 'string' && Zr[l];
    return o.createElement(
      Ah,
      { ...h, ...m, ...p },
      l
        ? o.createElement(
            Fi,
            { ...h },
            g ? o.createElement(ye, { icon: l }) : l
          )
        : t && o.createElement(Fi, { ...h }, t),
      r || n
        ? o.createElement(
            xh,
            { isIndented: !t && !l && s },
            r && o.createElement(vh, { ...h, loading: e }, r),
            n && o.createElement(wh, { ...h }, n)
          )
        : null,
      a && o.createElement(Eh, { ...h }, a)
    );
  };
Oc.defaultProps = {
  loading: !1,
  left: null,
  title: o.createElement('span', null, 'Loading state'),
  center: null,
  right: null,
  active: !1,
  disabled: !1,
  href: null,
  LinkWrapper: null,
  onClick: null,
};
var ul = Oc,
  Ch = _.div(
    {
      minWidth: 180,
      overflow: 'hidden',
      overflowY: 'auto',
      maxHeight: 15.5 * 32,
    },
    ({ theme: e }) => ({ borderRadius: e.appBorderRadius })
  ),
  kh = (e) => {
    let { LinkWrapper: t, onClick: r, id: n, isIndented: a, ...l } = e,
      { title: i, href: u, active: s } = l,
      c = b.useCallback(
        (f) => {
          r(f, l);
        },
        [r]
      ),
      d = !!r;
    return o.createElement(ul, {
      title: i,
      active: s,
      href: u,
      id: `list-item-${n}`,
      LinkWrapper: t,
      isIndented: a,
      ...l,
      ...(d ? { onClick: c } : {}),
    });
  },
  cl = ({ links: e, LinkWrapper: t }) => {
    let r = e.some((n) => n.left || n.icon);
    return o.createElement(
      Ch,
      null,
      e.map(({ isGatsby: n, ...a }) =>
        o.createElement(kh, {
          key: a.id,
          LinkWrapper: n ? t : null,
          isIndented: r,
          ...a,
        })
      )
    );
  };
cl.defaultProps = { LinkWrapper: ul.defaultProps.LinkWrapper };
var dl = o.forwardRef(({ children: e, ...t }, r) =>
  t.href != null
    ? o.createElement('a', { ref: r, ...t }, e)
    : o.createElement('button', { ref: r, type: 'button', ...t }, e)
);
dl.displayName = 'ButtonOrLink';
var Jr = _(dl, { shouldForwardProp: Ro })(
  {
    whiteSpace: 'normal',
    display: 'inline-flex',
    overflow: 'hidden',
    verticalAlign: 'top',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    '&:empty': { display: 'none' },
  },
  ({ theme: e }) => ({
    padding: '0 15px',
    transition: 'color 0.2s linear, border-bottom-color 0.2s linear',
    height: 40,
    lineHeight: '12px',
    cursor: 'pointer',
    background: 'transparent',
    border: '0 solid transparent',
    borderTop: '3px solid transparent',
    borderBottom: '3px solid transparent',
    fontWeight: 'bold',
    fontSize: 13,
    '&:focus': { outline: '0 none', borderBottomColor: e.color.secondary },
  }),
  ({ active: e, textColor: t, theme: r }) =>
    e
      ? {
          color: t || r.barSelectedColor,
          borderBottomColor: r.barSelectedColor,
        }
      : { color: t || r.barTextColor, borderBottomColor: 'transparent' }
);
Jr.displayName = 'TabButton';
var Ht = _(dl, { shouldForwardProp: Ro })(
  () => ({
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    borderRadius: 4,
    color: 'inherit',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: 13,
    fontWeight: 'bold',
    height: 28,
    justifyContent: 'center',
    marginTop: 6,
    padding: '8px 7px',
    '& > svg': { width: 14 },
  }),
  ({ active: e, theme: t }) =>
    e
      ? { backgroundColor: t.background.hoverable, color: t.barSelectedColor }
      : {},
  ({ disabled: e, theme: t }) =>
    e
      ? { opacity: 0.5, cursor: 'not-allowed' }
      : {
          '&:hover, &:focus-visible': {
            background: ve(0.88, t.color.secondary),
            color: t.barHoverColor,
          },
          '&:focus-visible': { outline: Gn },
          '&:focus:not(:focus-visible)': { outline: 'none' },
        }
);
Ht.displayName = 'IconButton';
var _h = _.div(({ theme: e }) => ({
    width: 14,
    height: 14,
    backgroundColor: e.appBorderColor,
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  })),
  Oh = _.div(() => ({ marginTop: 6, padding: 7, height: 28 })),
  Tc = () => o.createElement(Oh, null, o.createElement(_h, null)),
  fo = _.div(
    {
      display: 'flex',
      whiteSpace: 'nowrap',
      flexBasis: 'auto',
      marginLeft: 3,
      marginRight: 3,
    },
    ({ scrollable: e }) => (e ? { flexShrink: 0 } : {}),
    ({ left: e }) => (e ? { '& > *': { marginLeft: 4 } } : {}),
    ({ right: e }) => (e ? { marginLeft: 30, '& > *': { marginRight: 4 } } : {})
  );
fo.displayName = 'Side';
var Th = ({ children: e, className: t, scrollable: r }) =>
    r
      ? o.createElement(Uo, { vertical: !1, className: t }, e)
      : o.createElement('div', { className: t }, e),
  pl = _(Th)(
    ({ theme: e, scrollable: t = !0 }) => ({
      color: e.barTextColor,
      width: '100%',
      height: 40,
      flexShrink: 0,
      overflow: t ? 'auto' : 'hidden',
      overflowY: 'hidden',
    }),
    ({ theme: e, border: t = !1 }) =>
      t
        ? {
            boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
            background: e.barBg,
          }
        : {}
  );
pl.displayName = 'Bar';
var Rh = _.div(({ bgColor: e }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    flexWrap: 'nowrap',
    flexShrink: 0,
    height: 40,
    backgroundColor: e || '',
  })),
  Qn = ({ children: e, backgroundColor: t, ...r }) => {
    let [n, a] = b.Children.toArray(e);
    return o.createElement(
      pl,
      { ...r },
      o.createElement(
        Rh,
        { bgColor: t },
        o.createElement(fo, { scrollable: r.scrollable, left: !0 }, n),
        a ? o.createElement(fo, { right: !0 }, a) : null
      )
    );
  };
Qn.displayName = 'FlexBar';
var Rc = _.div(({ active: e }) =>
    e ? { display: 'block' } : { display: 'none' }
  ),
  $i = (e) =>
    b.Children.toArray(e).map(
      ({ props: { title: t, id: r, color: n, children: a } }) => {
        let l = Array.isArray(a) ? a[0] : a;
        return {
          title: t,
          id: r,
          ...(n ? { color: n } : {}),
          render:
            typeof l == 'function'
              ? l
              : ({ active: i }) =>
                  o.createElement(Rc, { active: i, role: 'tabpanel' }, l),
        };
      }
    ),
  Fh = _.span(({ theme: e, isActive: t }) => ({
    display: 'inline-block',
    width: 0,
    height: 0,
    marginLeft: 8,
    color: t ? e.color.secondary : e.color.mediumdark,
    borderRight: '3px solid transparent',
    borderLeft: '3px solid transparent',
    borderTop: '3px solid',
    transition: 'transform .1s ease-out',
  })),
  $h = _(Jr)(
    ({ active: e, theme: t, preActive: r }) => `
    color: ${r || e ? t.color.secondary : t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `
  );
function Dh(e) {
  let t = b.useRef(),
    r = b.useRef(),
    n = b.useRef(new Map()),
    { width: a = 1 } = Yu({ ref: t }),
    [l, i] = b.useState(e),
    [u, s] = b.useState([]),
    c = b.useRef(e),
    d = b.useCallback(
      ({ menuName: m, actions: p }) => {
        let h = u.some(({ active: x }) => x),
          [g, w] = b.useState(!1);
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            Mm,
            {
              interactive: !0,
              visible: g,
              onVisibleChange: w,
              placement: 'bottom',
              delayHide: 100,
              tooltip: o.createElement(cl, {
                links: u.map(({ title: x, id: v, color: y, active: E }) => ({
                  id: v,
                  title: x,
                  color: y,
                  active: E,
                  onClick: (A) => {
                    A.preventDefault(), p.onSelect(v);
                  },
                })),
              }),
            },
            o.createElement(
              $h,
              {
                ref: r,
                active: h,
                preActive: g,
                style: { visibility: u.length ? 'visible' : 'hidden' },
                'aria-hidden': !u.length,
                className: 'tabbutton',
                type: 'button',
                role: 'tab',
              },
              m,
              o.createElement(Fh, {
                className: 'addon-collapsible-icon',
                isActive: h || g,
              })
            )
          ),
          u.map(({ title: x, id: v, color: y }, E) => {
            let A = `index-${E}`;
            return o.createElement(
              Jr,
              {
                id: `tabbutton-${ks(v) ?? A}`,
                style: { visibility: 'hidden' },
                'aria-hidden': !0,
                tabIndex: -1,
                ref: (S) => {
                  n.current.set(v, S);
                },
                className: 'tabbutton',
                type: 'button',
                key: v,
                textColor: y,
                role: 'tab',
              },
              x
            );
          })
        );
      },
      [u]
    ),
    f = b.useCallback(() => {
      if (!t.current || !r.current) return;
      let { x: m, width: p } = t.current.getBoundingClientRect(),
        { width: h } = r.current.getBoundingClientRect(),
        g = u.length ? m + p - h : m + p,
        w = [],
        x = 0,
        v = e.filter((y) => {
          let { id: E } = y,
            A = n.current.get(E),
            { width: S = 0 } =
              (A == null ? void 0 : A.getBoundingClientRect()) || {},
            C = m + x + S > g;
          return (!C || !A) && w.push(y), (x += S), C;
        });
      (w.length !== l.length || c.current !== e) &&
        (i(w), s(v), (c.current = e));
    }, [u.length, e, l]);
  return (
    b.useLayoutEffect(f, [f, a]),
    {
      tabRefs: n,
      addonsRef: r,
      tabBarRef: t,
      visibleList: l,
      invisibleList: u,
      AddonTab: d,
    }
  );
}
var Lh =
    '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */',
  Mh = _.div(
    ({ theme: e, bordered: t }) =>
      t
        ? {
            backgroundClip: 'padding-box',
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.appBorderRadius,
            overflow: 'hidden',
            boxSizing: 'border-box',
          }
        : {},
    ({ absolute: e }) =>
      e
        ? {
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
          }
        : { display: 'block' }
  ),
  fl = _.div({
    overflow: 'hidden',
    '&:first-of-type': { marginLeft: -3 },
    whiteSpace: 'nowrap',
    flexGrow: 1,
  });
fl.displayName = 'TabBar';
var Bh = _.div(
    { display: 'block', position: 'relative' },
    ({ theme: e }) => ({
      fontSize: e.typography.size.s2 - 1,
      background: e.background.content,
    }),
    ({ bordered: e, theme: t }) =>
      e
        ? {
            borderRadius: `0 0 ${t.appBorderRadius - 1}px ${t.appBorderRadius - 1}px`,
          }
        : {},
    ({ absolute: e, bordered: t }) =>
      e
        ? {
            height: `calc(100% - ${t ? 42 : 40}px)`,
            position: 'absolute',
            left: 0 + (t ? 1 : 0),
            right: 0 + (t ? 1 : 0),
            bottom: 0 + (t ? 1 : 0),
            top: 40 + (t ? 1 : 0),
            overflow: 'auto',
            [`& > *:first-child${Lh}`]: {
              position: 'absolute',
              left: 0 + (t ? 1 : 0),
              right: 0 + (t ? 1 : 0),
              bottom: 0 + (t ? 1 : 0),
              top: 0 + (t ? 1 : 0),
              height: `calc(100% - ${t ? 2 : 0}px)`,
              overflow: 'auto',
            },
          }
        : {}
  ),
  Ih = ({ active: e, render: t, children: r }) =>
    o.createElement(Rc, { active: e }, t ? t() : r),
  ea = b.memo(
    ({
      children: e,
      selected: t,
      actions: r,
      absolute: n,
      bordered: a,
      tools: l,
      backgroundColor: i,
      id: u,
      menuName: s,
    }) => {
      let c = $i(e).map((g) => g.id),
        d = b.useMemo(
          () =>
            $i(e).map((g, w) => ({ ...g, active: t ? g.id === t : w === 0 })),
          [t, ...c]
        ),
        { visibleList: f, tabBarRef: m, tabRefs: p, AddonTab: h } = Dh(d);
      return d.length
        ? o.createElement(
            Mh,
            { absolute: n, bordered: a, id: u },
            o.createElement(
              Qn,
              { scrollable: !1, border: !0, backgroundColor: i },
              o.createElement(
                fl,
                { style: { whiteSpace: 'normal' }, ref: m, role: 'tablist' },
                f.map(({ title: g, id: w, active: x, color: v }, y) => {
                  let E = `index-${y}`;
                  return o.createElement(
                    Jr,
                    {
                      id: `tabbutton-${ks(w) ?? E}`,
                      ref: (A) => {
                        p.current.set(w, A);
                      },
                      className: `tabbutton ${x ? 'tabbutton-active' : ''}`,
                      type: 'button',
                      key: w,
                      active: x,
                      textColor: v,
                      onClick: (A) => {
                        A.preventDefault(), r.onSelect(w);
                      },
                      role: 'tab',
                    },
                    typeof g == 'function' ? o.createElement('title', null) : g
                  );
                }),
                o.createElement(h, { menuName: s, actions: r })
              ),
              l
            ),
            o.createElement(
              Bh,
              { id: 'panel-tab-content', bordered: a, absolute: n },
              d.map(({ id: g, active: w, render: x }) =>
                o.createElement(x, { key: g, active: w }, null)
              )
            )
          )
        : o.createElement(
            vc,
            null,
            o.createElement(b.Fragment, { key: 'title' }, 'Nothing found')
          );
    }
  );
ea.displayName = 'Tabs';
ea.defaultProps = {
  id: null,
  children: null,
  tools: null,
  selected: null,
  absolute: !1,
  bordered: !1,
  menuName: 'Tabs',
};
var Fc = class extends b.Component {
  constructor(e) {
    super(e),
      (this.handlers = { onSelect: (t) => this.setState({ selected: t }) }),
      (this.state = { selected: e.initial });
  }
  render() {
    let {
        bordered: e = !1,
        absolute: t = !1,
        children: r,
        backgroundColor: n,
        menuName: a,
      } = this.props,
      { selected: l } = this.state;
    return o.createElement(
      ea,
      {
        bordered: e,
        absolute: t,
        selected: l,
        backgroundColor: n,
        menuName: a,
        actions: this.handlers,
      },
      r
    );
  }
};
Fc.defaultProps = {
  children: [],
  initial: null,
  absolute: !1,
  bordered: !1,
  backgroundColor: '',
  menuName: void 0,
};
var ml = _.span(
  ({ theme: e }) => ({
    width: 1,
    height: 20,
    background: e.appBorderColor,
    marginTop: 10,
    marginLeft: 6,
    marginRight: 2,
  }),
  ({ force: e }) => (e ? {} : { '& + &': { display: 'none' } })
);
ml.displayName = 'Separator';
var Ph = (e) =>
    e.reduce(
      (t, r, n) =>
        r
          ? o.createElement(
              b.Fragment,
              { key: r.id || r.key || `f-${n}` },
              t,
              n > 0 ? o.createElement(ml, { key: `s-${n}` }) : null,
              r.render() || r
            )
          : t,
      null
    ),
  jh = (e) => {
    let t = b.useRef();
    return (
      b.useEffect(() => {
        t.current = e;
      }, [e]),
      t.current
    );
  },
  Nh = (e, t) => {
    let r = jh(t);
    return e ? t : r;
  },
  Hh = ({ active: e, children: t }) =>
    o.createElement('div', { hidden: !e }, Nh(e, t)),
  Zh = ({ alt: e, ...t }) =>
    o.createElement(
      'svg',
      {
        width: '200px',
        height: '40px',
        viewBox: '0 0 200 40',
        ...t,
        role: 'img',
      },
      e ? o.createElement('title', null, e) : null,
      o.createElement(
        'defs',
        null,
        o.createElement('path', {
          d: 'M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z',
          id: 'a',
        })
      ),
      o.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd' },
        o.createElement('path', {
          d: 'M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z',
          fill: 'currentColor',
        }),
        o.createElement(
          'mask',
          { id: 'b', fill: '#fff' },
          o.createElement('use', { xlinkHref: '#a' })
        ),
        o.createElement('use', {
          fill: '#FF4785',
          fillRule: 'nonzero',
          xlinkHref: '#a',
        }),
        o.createElement('path', {
          d: 'M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z',
          fill: '#FFF',
          fillRule: 'nonzero',
          mask: 'url(#b)',
        })
      )
    ),
  Vh = ({ ...e }) =>
    o.createElement(
      'svg',
      { viewBox: '0 0 64 64', ...e },
      o.createElement('title', null, 'Storybook icon'),
      o.createElement(
        'g',
        {
          id: 'Artboard',
          stroke: 'none',
          strokeWidth: '1',
          fill: 'none',
          fillRule: 'evenodd',
        },
        o.createElement('path', {
          d: 'M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z',
          id: 'path-1',
          fill: '#FF4785',
          fillRule: 'nonzero',
        }),
        o.createElement('path', {
          d: 'M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z',
          id: 'path9_fill-path',
          fill: '#FFFFFF',
          fillRule: 'nonzero',
        }),
        o.createElement('path', {
          d: 'M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z',
          id: 'Path',
          fill: '#FFFFFF',
        })
      )
    ),
  zh = fr`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  qh = _.div(({ size: e = 32 }) => ({
    borderRadius: '50%',
    cursor: 'progress',
    display: 'inline-block',
    overflow: 'hidden',
    position: 'absolute',
    transition: 'all 200ms ease-out',
    verticalAlign: 'top',
    top: '50%',
    left: '50%',
    marginTop: -(e / 2),
    marginLeft: -(e / 2),
    height: e,
    width: e,
    zIndex: 4,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(97, 97, 97, 0.29)',
    borderTopColor: 'rgb(100,100,100)',
    animation: `${zh} 0.7s linear infinite`,
    mixBlendMode: 'difference',
  })),
  Di = _.div({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }),
  Uh = _.div(({ theme: e }) => ({
    position: 'relative',
    width: '80%',
    marginBottom: '0.75rem',
    maxWidth: 300,
    height: 5,
    borderRadius: 5,
    background: ve(0.8, e.color.secondary),
    overflow: 'hidden',
    cursor: 'progress',
  })),
  Wh = _.div(({ theme: e }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    background: e.color.secondary,
  })),
  Li = _.div(({ theme: e }) => ({
    minHeight: '2em',
    fontSize: `${e.typography.size.s1}px`,
    color: e.barTextColor,
  })),
  Gh = _(ye)(({ theme: e }) => ({
    width: 20,
    height: 20,
    marginBottom: '0.5rem',
    color: e.textMutedColor,
  })),
  Yh = fr`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`,
  Kh = _.span({
    '&::after': {
      content: "'...'",
      animation: `${Yh} 1s linear infinite`,
      animationDelay: '1s',
      display: 'inline-block',
      width: '1em',
      height: 'auto',
    },
  }),
  $c = ({ progress: e, error: t, size: r, ...n }) => {
    if (t)
      return o.createElement(
        Di,
        {
          'aria-label': t.toString(),
          'aria-live': 'polite',
          role: 'status',
          ...n,
        },
        o.createElement(Gh, { icon: 'lightningoff' }),
        o.createElement(Li, null, t.message)
      );
    if (e) {
      let { value: a, modules: l } = e,
        { message: i } = e;
      return (
        l && (i += ` ${l.complete} / ${l.total} modules`),
        o.createElement(
          Di,
          {
            'aria-label': 'Content is loading...',
            'aria-live': 'polite',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': a * 100,
            'aria-valuetext': i,
            role: 'progressbar',
            ...n,
          },
          o.createElement(
            Uh,
            null,
            o.createElement(Wh, { style: { width: `${a * 100}%` } })
          ),
          o.createElement(Li, null, i, a < 1 && o.createElement(Kh, { key: i }))
        )
      );
    }
    return o.createElement(qh, {
      'aria-label': 'Content is loading...',
      'aria-live': 'polite',
      role: 'status',
      size: r,
      ...n,
    });
  };
function Xh(e) {
  let t = {},
    r = e.split('&');
  for (let n = 0; n < r.length; n++) {
    let a = r[n].split('=');
    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || '');
  }
  return t;
}
var Dc = (e, t, r = {}) => {
    let [n, a] = e.split('?'),
      l = a ? { ...Xh(a), ...r, id: t } : { ...r, id: t };
    return `${n}?${Object.entries(l)
      .map((i) => `${i[0]}=${i[1]}`)
      .join('&')}`;
  },
  Jh = _.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${j.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${nt.fonts.mono};
  font-size: ${nt.size.s2 - 1}px;
`,
  Qh = ({ code: e, ...t }) =>
    o.createElement(Jh, { id: 'clipboard-code', ...t }, e),
  Lc = bc,
  Mc = {};
Object.keys(bc).forEach((e) => {
  Mc[e] = b.forwardRef((t, r) => b.createElement(e, { ...t, ref: r }));
});
const eb = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      A: Qu,
      ActionBar: zo,
      AddonPanel: Hh,
      Badge: xg,
      Bar: pl,
      Blockquote: ec,
      Button: Ac,
      ClipboardCode: Qh,
      Code: al,
      DL: rc,
      Div: tc,
      DocumentWrapper: Og,
      ErrorFormatter: xc,
      FlexBar: Qn,
      Form: He,
      H1: nc,
      H2: ol,
      H3: ll,
      H4: ac,
      H5: oc,
      H6: lc,
      HR: ic,
      IconButton: Ht,
      IconButtonSkeleton: Tc,
      Icons: ye,
      Img: sc,
      LI: uc,
      Link: At,
      ListItem: ul,
      Loader: $c,
      OL: cc,
      P: dc,
      Placeholder: vc,
      Pre: pc,
      ResetWrapper: il,
      ScrollArea: Uo,
      Separator: ml,
      Spaced: Dg,
      Span: fc,
      StorybookIcon: Vh,
      StorybookLogo: Zh,
      Symbols: wg,
      SyntaxHighlighter: Kn,
      TT: gc,
      TabBar: fl,
      TabButton: Jr,
      TabWrapper: Ih,
      Table: mc,
      Tabs: ea,
      TabsState: Fc,
      TooltipLinkList: cl,
      TooltipMessage: _c,
      TooltipNote: yh,
      UL: hc,
      WithTooltip: ch,
      WithTooltipPure: kc,
      Zoom: Ec,
      codeCommon: ht,
      components: Lc,
      createCopyToClipboardFunction: Mu,
      getStoryHref: Dc,
      icons: Zr,
      interleaveSeparators: Ph,
      nameSpaceClassNames: J,
      resetComponents: Mc,
      withReset: ee,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function Se() {
  return (
    (Se = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Se.apply(this, arguments)
  );
}
function tb(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Vr(e, t) {
  return (
    (Vr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return (n.__proto__ = a), n;
        }),
    Vr(e, t)
  );
}
function rb(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Vr(e, t);
}
function mo(e) {
  return (
    (mo = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    mo(e)
  );
}
function nb(e) {
  try {
    return Function.toString.call(e).indexOf('[native code]') !== -1;
  } catch {
    return typeof e == 'function';
  }
}
function Bc() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Bc = function () {
    return !!e;
  })();
}
function ab(e, t, r) {
  if (Bc()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return r && Vr(a, r.prototype), a;
}
function go(e) {
  var t = typeof Map == 'function' ? new Map() : void 0;
  return (
    (go = function (n) {
      if (n === null || !nb(n)) return n;
      if (typeof n != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      if (typeof t < 'u') {
        if (t.has(n)) return t.get(n);
        t.set(n, a);
      }
      function a() {
        return ab(n, arguments, mo(this).constructor);
      }
      return (
        (a.prototype = Object.create(n.prototype, {
          constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Vr(a, n)
      );
    }),
    go(e)
  );
}
var ot = (function (e) {
  rb(t, e);
  function t(r) {
    var n;
    return (
      (n =
        e.call(
          this,
          'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
            r +
            ' for more information.'
        ) || this),
      tb(n)
    );
  }
  return t;
})(go(Error));
function Sa(e) {
  return Math.round(e * 255);
}
function ob(e, t, r) {
  return Sa(e) + ',' + Sa(t) + ',' + Sa(r);
}
function zr(e, t, r, n) {
  if ((n === void 0 && (n = ob), t === 0)) return n(r, r, r);
  var a = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((a % 2) - 1)),
    u = 0,
    s = 0,
    c = 0;
  a >= 0 && a < 1
    ? ((u = l), (s = i))
    : a >= 1 && a < 2
      ? ((u = i), (s = l))
      : a >= 2 && a < 3
        ? ((s = l), (c = i))
        : a >= 3 && a < 4
          ? ((s = i), (c = l))
          : a >= 4 && a < 5
            ? ((u = i), (c = l))
            : a >= 5 && a < 6 && ((u = l), (c = i));
  var d = r - l / 2,
    f = u + d,
    m = s + d,
    p = c + d;
  return n(f, m, p);
}
var Mi = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',
};
function lb(e) {
  if (typeof e != 'string') return e;
  var t = e.toLowerCase();
  return Mi[t] ? '#' + Mi[t] : e;
}
var ib = /^#[a-fA-F0-9]{6}$/,
  sb = /^#[a-fA-F0-9]{8}$/,
  ub = /^#[a-fA-F0-9]{3}$/,
  cb = /^#[a-fA-F0-9]{4}$/,
  Ca = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  db =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  pb =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  fb =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function cr(e) {
  if (typeof e != 'string') throw new ot(3);
  var t = lb(e);
  if (t.match(ib))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
    };
  if (t.match(sb)) {
    var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match(ub))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
    };
  if (t.match(cb)) {
    var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
      alpha: n,
    };
  }
  var a = Ca.exec(t);
  if (a)
    return {
      red: parseInt('' + a[1], 10),
      green: parseInt('' + a[2], 10),
      blue: parseInt('' + a[3], 10),
    };
  var l = db.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt('' + l[1], 10),
      green: parseInt('' + l[2], 10),
      blue: parseInt('' + l[3], 10),
      alpha:
        parseFloat('' + l[4]) > 1
          ? parseFloat('' + l[4]) / 100
          : parseFloat('' + l[4]),
    };
  var i = pb.exec(t);
  if (i) {
    var u = parseInt('' + i[1], 10),
      s = parseInt('' + i[2], 10) / 100,
      c = parseInt('' + i[3], 10) / 100,
      d = 'rgb(' + zr(u, s, c) + ')',
      f = Ca.exec(d);
    if (!f) throw new ot(4, t, d);
    return {
      red: parseInt('' + f[1], 10),
      green: parseInt('' + f[2], 10),
      blue: parseInt('' + f[3], 10),
    };
  }
  var m = fb.exec(t.substring(0, 50));
  if (m) {
    var p = parseInt('' + m[1], 10),
      h = parseInt('' + m[2], 10) / 100,
      g = parseInt('' + m[3], 10) / 100,
      w = 'rgb(' + zr(p, h, g) + ')',
      x = Ca.exec(w);
    if (!x) throw new ot(4, t, w);
    return {
      red: parseInt('' + x[1], 10),
      green: parseInt('' + x[2], 10),
      blue: parseInt('' + x[3], 10),
      alpha:
        parseFloat('' + m[4]) > 1
          ? parseFloat('' + m[4]) / 100
          : parseFloat('' + m[4]),
    };
  }
  throw new ot(5);
}
function mb(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    a = Math.max(t, r, n),
    l = Math.min(t, r, n),
    i = (a + l) / 2;
  if (a === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i };
  var u,
    s = a - l,
    c = i > 0.5 ? s / (2 - a - l) : s / (a + l);
  switch (a) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      u = (n - t) / s + 2;
      break;
    default:
      u = (t - r) / s + 4;
      break;
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? { hue: u, saturation: c, lightness: i, alpha: e.alpha }
      : { hue: u, saturation: c, lightness: i }
  );
}
function kt(e) {
  return mb(cr(e));
}
var gb = function (t) {
    return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
      ? '#' + t[1] + t[3] + t[5]
      : t;
  },
  ho = gb;
function Lt(e) {
  var t = e.toString(16);
  return t.length === 1 ? '0' + t : t;
}
function ka(e) {
  return Lt(Math.round(e * 255));
}
function hb(e, t, r) {
  return ho('#' + ka(e) + ka(t) + ka(r));
}
function $n(e, t, r) {
  return zr(e, t, r, hb);
}
function bb(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return $n(e, t, r);
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return $n(e.hue, e.saturation, e.lightness);
  throw new ot(1);
}
function yb(e, t, r, n) {
  if (
    typeof e == 'number' &&
    typeof t == 'number' &&
    typeof r == 'number' &&
    typeof n == 'number'
  )
    return n >= 1 ? $n(e, t, r) : 'rgba(' + zr(e, t, r) + ',' + n + ')';
  if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? $n(e.hue, e.saturation, e.lightness)
      : 'rgba(' + zr(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')';
  throw new ot(2);
}
function bo(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return ho('#' + Lt(e) + Lt(t) + Lt(r));
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return ho('#' + Lt(e.red) + Lt(e.green) + Lt(e.blue));
  throw new ot(6);
}
function tt(e, t, r, n) {
  if (typeof e == 'string' && typeof t == 'number') {
    var a = cr(e);
    return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')';
  } else {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1
        ? bo(e, t, r)
        : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')';
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? bo(e.red, e.green, e.blue)
        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')';
  }
  throw new ot(7);
}
var vb = function (t) {
    return (
      typeof t.red == 'number' &&
      typeof t.green == 'number' &&
      typeof t.blue == 'number' &&
      (typeof t.alpha != 'number' || typeof t.alpha > 'u')
    );
  },
  Eb = function (t) {
    return (
      typeof t.red == 'number' &&
      typeof t.green == 'number' &&
      typeof t.blue == 'number' &&
      typeof t.alpha == 'number'
    );
  },
  xb = function (t) {
    return (
      typeof t.hue == 'number' &&
      typeof t.saturation == 'number' &&
      typeof t.lightness == 'number' &&
      (typeof t.alpha != 'number' || typeof t.alpha > 'u')
    );
  },
  wb = function (t) {
    return (
      typeof t.hue == 'number' &&
      typeof t.saturation == 'number' &&
      typeof t.lightness == 'number' &&
      typeof t.alpha == 'number'
    );
  };
function _t(e) {
  if (typeof e != 'object') throw new ot(8);
  if (Eb(e)) return tt(e);
  if (vb(e)) return bo(e);
  if (wb(e)) return yb(e);
  if (xb(e)) return bb(e);
  throw new ot(8);
}
function Ic(e, t, r) {
  return function () {
    var a = r.concat(Array.prototype.slice.call(arguments));
    return a.length >= t ? e.apply(this, a) : Ic(e, t, a);
  };
}
function Re(e) {
  return Ic(e, e.length, []);
}
function Ab(e, t) {
  if (t === 'transparent') return t;
  var r = kt(t);
  return _t(Se({}, r, { hue: r.hue + parseFloat(e) }));
}
Re(Ab);
function gr(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function Sb(e, t) {
  if (t === 'transparent') return t;
  var r = kt(t);
  return _t(Se({}, r, { lightness: gr(0, 1, r.lightness - parseFloat(e)) }));
}
var Cb = Re(Sb),
  Xe = Cb;
function kb(e, t) {
  if (t === 'transparent') return t;
  var r = kt(t);
  return _t(Se({}, r, { saturation: gr(0, 1, r.saturation - parseFloat(e)) }));
}
Re(kb);
function _b(e, t) {
  if (t === 'transparent') return t;
  var r = kt(t);
  return _t(Se({}, r, { lightness: gr(0, 1, r.lightness + parseFloat(e)) }));
}
var Ob = Re(_b),
  Mt = Ob;
function Tb(e, t, r) {
  if (t === 'transparent') return r;
  if (r === 'transparent') return t;
  if (e === 0) return r;
  var n = cr(t),
    a = Se({}, n, { alpha: typeof n.alpha == 'number' ? n.alpha : 1 }),
    l = cr(r),
    i = Se({}, l, { alpha: typeof l.alpha == 'number' ? l.alpha : 1 }),
    u = a.alpha - i.alpha,
    s = parseFloat(e) * 2 - 1,
    c = s * u === -1 ? s : s + u,
    d = 1 + s * u,
    f = (c / d + 1) / 2,
    m = 1 - f,
    p = {
      red: Math.floor(a.red * f + i.red * m),
      green: Math.floor(a.green * f + i.green * m),
      blue: Math.floor(a.blue * f + i.blue * m),
      alpha: a.alpha * parseFloat(e) + i.alpha * (1 - parseFloat(e)),
    };
  return tt(p);
}
var Rb = Re(Tb),
  Pc = Rb;
function Fb(e, t) {
  if (t === 'transparent') return t;
  var r = cr(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    a = Se({}, r, { alpha: gr(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
  return tt(a);
}
var $b = Re(Fb),
  un = $b;
function Db(e, t) {
  if (t === 'transparent') return t;
  var r = kt(t);
  return _t(Se({}, r, { saturation: gr(0, 1, r.saturation + parseFloat(e)) }));
}
Re(Db);
function Lb(e, t) {
  return t === 'transparent' ? t : _t(Se({}, kt(t), { hue: parseFloat(e) }));
}
Re(Lb);
function Mb(e, t) {
  return t === 'transparent'
    ? t
    : _t(Se({}, kt(t), { lightness: parseFloat(e) }));
}
Re(Mb);
function Bb(e, t) {
  return t === 'transparent'
    ? t
    : _t(Se({}, kt(t), { saturation: parseFloat(e) }));
}
Re(Bb);
function Ib(e, t) {
  return t === 'transparent' ? t : Pc(parseFloat(e), 'rgb(0, 0, 0)', t);
}
Re(Ib);
function Pb(e, t) {
  return t === 'transparent' ? t : Pc(parseFloat(e), 'rgb(255, 255, 255)', t);
}
Re(Pb);
function jb(e, t) {
  if (t === 'transparent') return t;
  var r = cr(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    a = Se({}, r, {
      alpha: gr(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
  return tt(a);
}
var Nb = Re(jb),
  Q = Nb,
  Hb = _s,
  Zb = G0,
  Vb = Object.prototype,
  zb = Vb.hasOwnProperty;
function qb(e, t, r) {
  var n = e[t];
  (!(zb.call(e, t) && Zb(n, r)) || (r === void 0 && !(t in e))) && Hb(e, t, r);
}
var gl = qb,
  Ub = gl,
  Wb = Os,
  Gb = Y0,
  Bi = Mn,
  Yb = K0;
function Kb(e, t, r, n) {
  if (!Bi(e)) return e;
  t = Wb(t, e);
  for (var a = -1, l = t.length, i = l - 1, u = e; u != null && ++a < l; ) {
    var s = Yb(t[a]),
      c = r;
    if (s === '__proto__' || s === 'constructor' || s === 'prototype') return e;
    if (a != i) {
      var d = u[s];
      (c = n ? n(d, s, u) : void 0),
        c === void 0 && (c = Bi(d) ? d : Gb(t[a + 1]) ? [] : {});
    }
    Ub(u, s, c), (u = u[s]);
  }
  return e;
}
var Xb = Kb,
  Jb = X0,
  Qb = Xb,
  ey = Os;
function ty(e, t, r) {
  for (var n = -1, a = t.length, l = {}; ++n < a; ) {
    var i = t[n],
      u = Jb(e, i);
    r(u, i) && Qb(l, ey(i, e), u);
  }
  return l;
}
var ry = ty,
  ny = J0,
  ay = Ts,
  oy = Rs,
  ly = Q0,
  iy = Object.getOwnPropertySymbols,
  sy = iy
    ? function (e) {
        for (var t = []; e; ) ny(t, oy(e)), (e = ay(e));
        return t;
      }
    : ly,
  jc = sy;
function uy(e) {
  var t = [];
  if (e != null) for (var r in Object(e)) t.push(r);
  return t;
}
var cy = uy,
  dy = Mn,
  py = Fs,
  fy = cy,
  my = Object.prototype,
  gy = my.hasOwnProperty;
function hy(e) {
  if (!dy(e)) return fy(e);
  var t = py(e),
    r = [];
  for (var n in e) (n == 'constructor' && (t || !gy.call(e, n))) || r.push(n);
  return r;
}
var by = hy,
  yy = e1,
  vy = by,
  Ey = t1;
function xy(e) {
  return Ey(e) ? yy(e, !0) : vy(e);
}
var hl = xy,
  wy = r1,
  Ay = jc,
  Sy = hl;
function Cy(e) {
  return wy(e, Sy, Ay);
}
var Nc = Cy,
  ky = n1,
  _y = a1,
  Oy = ry,
  Ty = Nc;
function Ry(e, t) {
  if (e == null) return {};
  var r = ky(Ty(e), function (n) {
    return [n];
  });
  return (
    (t = _y(t)),
    Oy(e, r, function (n, a) {
      return t(n, a[0]);
    })
  );
}
var Fy = Ry;
const $y = Ln(Fy);
function It() {
  return (
    (It = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    It.apply(this, arguments)
  );
}
const Dy = ['children', 'options'];
var Ii, Pi;
(function (e) {
  (e.blockQuote = '0'),
    (e.breakLine = '1'),
    (e.breakThematic = '2'),
    (e.codeBlock = '3'),
    (e.codeFenced = '4'),
    (e.codeInline = '5'),
    (e.footnote = '6'),
    (e.footnoteReference = '7'),
    (e.gfmTask = '8'),
    (e.heading = '9'),
    (e.headingSetext = '10'),
    (e.htmlBlock = '11'),
    (e.htmlComment = '12'),
    (e.htmlSelfClosing = '13'),
    (e.image = '14'),
    (e.link = '15'),
    (e.linkAngleBraceStyleDetector = '16'),
    (e.linkBareUrlDetector = '17'),
    (e.linkMailtoDetector = '18'),
    (e.newlineCoalescer = '19'),
    (e.orderedList = '20'),
    (e.paragraph = '21'),
    (e.ref = '22'),
    (e.refImage = '23'),
    (e.refLink = '24'),
    (e.table = '25'),
    (e.tableSeparator = '26'),
    (e.text = '27'),
    (e.textBolded = '28'),
    (e.textEmphasized = '29'),
    (e.textEscaped = '30'),
    (e.textMarked = '31'),
    (e.textStrikethroughed = '32'),
    (e.unorderedList = '33');
})(Ii || (Ii = {})),
  (function (e) {
    (e[(e.MAX = 0)] = 'MAX'),
      (e[(e.HIGH = 1)] = 'HIGH'),
      (e[(e.MED = 2)] = 'MED'),
      (e[(e.LOW = 3)] = 'LOW'),
      (e[(e.MIN = 4)] = 'MIN');
  })(Pi || (Pi = {}));
const ji = [
    'allowFullScreen',
    'allowTransparency',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'className',
    'classId',
    'colSpan',
    'contentEditable',
    'contextMenu',
    'crossOrigin',
    'encType',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'hrefLang',
    'inputMode',
    'keyParams',
    'keyType',
    'marginHeight',
    'marginWidth',
    'maxLength',
    'mediaGroup',
    'minLength',
    'noValidate',
    'radioGroup',
    'readOnly',
    'rowSpan',
    'spellCheck',
    'srcDoc',
    'srcLang',
    'srcSet',
    'tabIndex',
    'useMap',
  ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: 'htmlFor' }),
  Ni = { amp: '&', apos: "'", gt: '>', lt: '<', nbsp: ' ', quot: '“' },
  Ly = ['style', 'script'],
  My =
    /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
  By = /mailto:/i,
  Iy = /\n{2,}$/,
  Hc = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
  Py = /^ *> ?/gm,
  jy = /^ {2,}\n/,
  Ny = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
  Zc = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
  Vc = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
  Hy = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  Zy = /^(?:\n *)*\n/,
  Vy = /\r\n?/g,
  zy = /^\[\^([^\]]+)](:.*)\n/,
  qy = /^\[\^([^\]]+)]/,
  Uy = /\f/g,
  Wy = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,
  Gy = /^\s*?\[(x|\s)\]/,
  zc = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  qc = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  Uc = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
  yo =
    /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
  Yy = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
  Wc = /^<!--[\s\S]*?(?:-->)/,
  Ky = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
  vo = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
  Xy = /^\{.*\}$/,
  Jy = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  Qy = /^<([^ >]+@[^ >]+)>/,
  e3 = /^<([^ >]+:\/[^ >]+)>/,
  t3 = /-([a-z])?/gi,
  Gc = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
  r3 = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
  n3 = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
  a3 = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
  o3 = /(\[|\])/g,
  l3 = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
  i3 = /\t/g,
  s3 = /^ *\| */,
  u3 = /(^ *\||\| *$)/g,
  c3 = / *$/,
  d3 = /^ *:-+: *$/,
  p3 = /^ *:-+ *$/,
  f3 = /^ *-+: *$/,
  m3 =
    /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
  g3 =
    /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
  h3 = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
  b3 = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
  y3 = /^\\([^0-9A-Za-z\s])/,
  v3 =
    /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
  E3 = /^\n+/,
  x3 = /^([ \t]*)/,
  w3 = /\\([^\\])/g,
  Hi = / *\n+$/,
  A3 = /(?:^|\n)( *)$/,
  bl = '(?:\\d+\\.)',
  yl = '(?:[*+-])';
function Yc(e) {
  return '( *)(' + (e === 1 ? bl : yl) + ') +';
}
const Kc = Yc(1),
  Xc = Yc(2);
function Jc(e) {
  return new RegExp('^' + (e === 1 ? Kc : Xc));
}
const S3 = Jc(1),
  C3 = Jc(2);
function Qc(e) {
  return new RegExp(
    '^' +
      (e === 1 ? Kc : Xc) +
      '[^\\n]*(?:\\n(?!\\1' +
      (e === 1 ? bl : yl) +
      ' )[^\\n]*)*(\\n|$)',
    'gm'
  );
}
const e0 = Qc(1),
  t0 = Qc(2);
function r0(e) {
  const t = e === 1 ? bl : yl;
  return new RegExp(
    '^( *)(' +
      t +
      ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' +
      t +
      ' (?!' +
      t +
      ' ))\\n*|\\s*\\n*$)'
  );
}
const n0 = r0(1),
  a0 = r0(2);
function Zi(e, t) {
  const r = t === 1,
    n = r ? n0 : a0,
    a = r ? e0 : t0,
    l = r ? S3 : C3;
  return {
    match(i, u, s) {
      const c = A3.exec(s);
      return c && (u.list || (!u.inline && !u.simple))
        ? n.exec((i = c[1] + i))
        : null;
    },
    order: 1,
    parse(i, u, s) {
      const c = r ? +i[2] : void 0,
        d = i[0]
          .replace(
            Iy,
            `
`
          )
          .match(a);
      let f = !1;
      return {
        items: d.map(function (m, p) {
          const h = l.exec(m)[0].length,
            g = new RegExp('^ {1,' + h + '}', 'gm'),
            w = m.replace(g, '').replace(l, ''),
            x = p === d.length - 1,
            v =
              w.indexOf(`

`) !== -1 ||
              (x && f);
          f = v;
          const y = s.inline,
            E = s.list;
          let A;
          (s.list = !0),
            v
              ? ((s.inline = !1),
                (A = w.replace(
                  Hi,
                  `

`
                )))
              : ((s.inline = !0), (A = w.replace(Hi, '')));
          const S = u(A, s);
          return (s.inline = y), (s.list = E), S;
        }),
        ordered: r,
        start: c,
      };
    },
    render: (i, u, s) =>
      e(
        i.ordered ? 'ol' : 'ul',
        { key: s.key, start: i.type === '20' ? i.start : void 0 },
        i.items.map(function (c, d) {
          return e('li', { key: d }, u(c, s));
        })
      ),
  };
}
const k3 = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  _3 = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  o0 = [Hc, Zc, Vc, zc, Uc, qc, Wc, Gc, e0, n0, t0, a0],
  O3 = [...o0, /^[^\n]+(?:  \n|\n{2,})/, yo, vo];
function T3(e) {
  return e
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ðÐ]/g, 'd')
    .replace(/[ÈÉÊËéèêë]/g, 'e')
    .replace(/[ÏïÎîÍíÌì]/g, 'i')
    .replace(/[Ññ]/g, 'n')
    .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
    .replace(/[ÜüÛûÚúÙù]/g, 'u')
    .replace(/[ŸÿÝý]/g, 'y')
    .replace(/[^a-z0-9- ]/gi, '')
    .replace(/ /gi, '-')
    .toLowerCase();
}
function R3(e) {
  return f3.test(e)
    ? 'right'
    : d3.test(e)
      ? 'center'
      : p3.test(e)
        ? 'left'
        : null;
}
function Vi(e, t, r) {
  const n = r.inTable;
  r.inTable = !0;
  const a = t(e.trim(), r);
  r.inTable = n;
  let l = [[]];
  return (
    a.forEach(function (i, u) {
      i.type === '26'
        ? u !== 0 && u !== a.length - 1 && l.push([])
        : (i.type !== '27' ||
            (a[u + 1] != null && a[u + 1].type !== '26') ||
            (i.text = i.text.replace(c3, '')),
          l[l.length - 1].push(i));
    }),
    l
  );
}
function F3(e, t, r) {
  r.inline = !0;
  const n = Vi(e[1], t, r),
    a = e[2].replace(u3, '').split('|').map(R3),
    l = (function (i, u, s) {
      return i
        .trim()
        .split(
          `
`
        )
        .map(function (c) {
          return Vi(c, u, s);
        });
    })(e[3], t, r);
  return (r.inline = !1), { align: a, cells: l, header: n, type: '25' };
}
function zi(e, t) {
  return e.align[t] == null ? {} : { textAlign: e.align[t] };
}
function yt(e) {
  return function (t, r) {
    return r.inline ? e.exec(t) : null;
  };
}
function vt(e) {
  return function (t, r) {
    return r.inline || r.simple ? e.exec(t) : null;
  };
}
function dt(e) {
  return function (t, r) {
    return r.inline || r.simple ? null : e.exec(t);
  };
}
function Cr(e) {
  return function (t) {
    return e.exec(t);
  };
}
function $3(e, t, r) {
  if (
    t.inline ||
    t.simple ||
    (r &&
      !r.endsWith(`
`))
  )
    return null;
  let n = '';
  e.split(
    `
`
  ).every(
    (l) =>
      !o0.some((i) => i.test(l)) &&
      ((n +=
        l +
        `
`),
      l.trim())
  );
  const a = n.trimEnd();
  return a == '' ? null : [n, a];
}
function Kt(e) {
  try {
    if (
      decodeURIComponent(e)
        .replace(/[^A-Za-z0-9/:]/g, '')
        .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
    )
      return;
  } catch {
    return null;
  }
  return e;
}
function qi(e) {
  return e.replace(w3, '$1');
}
function xn(e, t, r) {
  const n = r.inline || !1,
    a = r.simple || !1;
  (r.inline = !0), (r.simple = !0);
  const l = e(t, r);
  return (r.inline = n), (r.simple = a), l;
}
function D3(e, t, r) {
  const n = r.inline || !1,
    a = r.simple || !1;
  (r.inline = !1), (r.simple = !0);
  const l = e(t, r);
  return (r.inline = n), (r.simple = a), l;
}
function L3(e, t, r) {
  return (r.inline = !1), e(t, r);
}
const _a = (e, t, r) => ({ children: xn(t, e[1], r) });
function Oa() {
  return {};
}
function Ta() {
  return null;
}
function M3(...e) {
  return e.filter(Boolean).join(' ');
}
function Ra(e, t, r) {
  let n = e;
  const a = t.split('.');
  for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift();
  return n || r;
}
function B3(e, t = {}) {
  (t.overrides = t.overrides || {}),
    (t.slugify = t.slugify || T3),
    (t.namedCodesToUnicode = t.namedCodesToUnicode
      ? It({}, Ni, t.namedCodesToUnicode)
      : Ni);
  const r = t.createElement || b.createElement;
  function n(p, h, ...g) {
    const w = Ra(t.overrides, `${p}.props`, {});
    return r(
      (function (x, v) {
        const y = Ra(v, x);
        return y
          ? typeof y == 'function' || (typeof y == 'object' && 'render' in y)
            ? y
            : Ra(v, `${x}.component`, x)
          : x;
      })(p, t.overrides),
      It({}, h, w, {
        className: M3(h == null ? void 0 : h.className, w.className) || void 0,
      }),
      ...g
    );
  }
  function a(p) {
    p = p.replace(Wy, '');
    let h = !1;
    t.forceInline ? (h = !0) : t.forceBlock || (h = l3.test(p) === !1);
    const g = d(
      c(
        h
          ? p
          : `${p.trimEnd().replace(E3, '')}

`,
        { inline: h }
      )
    );
    for (; typeof g[g.length - 1] == 'string' && !g[g.length - 1].trim(); )
      g.pop();
    if (t.wrapper === null) return g;
    const w = t.wrapper || (h ? 'span' : 'div');
    let x;
    if (g.length > 1 || t.forceWrapper) x = g;
    else {
      if (g.length === 1)
        return (
          (x = g[0]), typeof x == 'string' ? n('span', { key: 'outer' }, x) : x
        );
      x = null;
    }
    return b.createElement(w, { key: 'outer' }, x);
  }
  function l(p) {
    const h = p.match(My);
    return h
      ? h.reduce(function (g, w, x) {
          const v = w.indexOf('=');
          if (v !== -1) {
            const y = (function (C) {
                return (
                  C.indexOf('-') !== -1 &&
                    C.match(Ky) === null &&
                    (C = C.replace(t3, function (k, O) {
                      return O.toUpperCase();
                    })),
                  C
                );
              })(w.slice(0, v)).trim(),
              E = (function (C) {
                const k = C[0];
                return (k === '"' || k === "'") &&
                  C.length >= 2 &&
                  C[C.length - 1] === k
                  ? C.slice(1, -1)
                  : C;
              })(w.slice(v + 1).trim()),
              A = ji[y] || y,
              S = (g[A] = (function (C, k) {
                return C === 'style'
                  ? k.split(/;\s?/).reduce(function (O, T) {
                      const R = T.slice(0, T.indexOf(':'));
                      return (
                        (O[R.replace(/(-[a-z])/g, (F) => F[1].toUpperCase())] =
                          T.slice(R.length + 1).trim()),
                        O
                      );
                    }, {})
                  : C === 'href' || C === 'src'
                    ? Kt(k)
                    : (k.match(Xy) && (k = k.slice(1, k.length - 1)),
                      k === 'true' || (k !== 'false' && k));
              })(y, E));
            typeof S == 'string' &&
              (yo.test(S) || vo.test(S)) &&
              (g[A] = b.cloneElement(a(S.trim()), { key: x }));
          } else w !== 'style' && (g[ji[w] || w] = !0);
          return g;
        }, {})
      : null;
  }
  const i = [],
    u = {},
    s = {
      0: {
        match: dt(Hc),
        order: 1,
        parse: (p, h, g) => ({ children: h(p[0].replace(Py, ''), g) }),
        render: (p, h, g) => n('blockquote', { key: g.key }, h(p.children, g)),
      },
      1: {
        match: Cr(jy),
        order: 1,
        parse: Oa,
        render: (p, h, g) => n('br', { key: g.key }),
      },
      2: {
        match: dt(Ny),
        order: 1,
        parse: Oa,
        render: (p, h, g) => n('hr', { key: g.key }),
      },
      3: {
        match: dt(Vc),
        order: 0,
        parse: (p) => ({
          lang: void 0,
          text: p[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''),
        }),
        render: (p, h, g) =>
          n(
            'pre',
            { key: g.key },
            n(
              'code',
              It({}, p.attrs, { className: p.lang ? `lang-${p.lang}` : '' }),
              p.text
            )
          ),
      },
      4: {
        match: dt(Zc),
        order: 0,
        parse: (p) => ({
          attrs: l(p[3] || ''),
          lang: p[2] || void 0,
          text: p[4],
          type: '3',
        }),
      },
      5: {
        match: vt(Hy),
        order: 3,
        parse: (p) => ({ text: p[2] }),
        render: (p, h, g) => n('code', { key: g.key }, p.text),
      },
      6: {
        match: dt(zy),
        order: 0,
        parse: (p) => (i.push({ footnote: p[2], identifier: p[1] }), {}),
        render: Ta,
      },
      7: {
        match: yt(qy),
        order: 1,
        parse: (p) => ({ target: `#${t.slugify(p[1])}`, text: p[1] }),
        render: (p, h, g) =>
          n(
            'a',
            { key: g.key, href: Kt(p.target) },
            n('sup', { key: g.key }, p.text)
          ),
      },
      8: {
        match: yt(Gy),
        order: 1,
        parse: (p) => ({ completed: p[1].toLowerCase() === 'x' }),
        render: (p, h, g) =>
          n('input', {
            checked: p.completed,
            key: g.key,
            readOnly: !0,
            type: 'checkbox',
          }),
      },
      9: {
        match: dt(t.enforceAtxHeadings ? qc : zc),
        order: 1,
        parse: (p, h, g) => ({
          children: xn(h, p[2], g),
          id: t.slugify(p[2]),
          level: p[1].length,
        }),
        render: (p, h, g) =>
          n(`h${p.level}`, { id: p.id, key: g.key }, h(p.children, g)),
      },
      10: {
        match: dt(Uc),
        order: 0,
        parse: (p, h, g) => ({
          children: xn(h, p[1], g),
          level: p[2] === '=' ? 1 : 2,
          type: '9',
        }),
      },
      11: {
        match: Cr(yo),
        order: 1,
        parse(p, h, g) {
          const [, w] = p[3].match(x3),
            x = new RegExp(`^${w}`, 'gm'),
            v = p[3].replace(x, ''),
            y = ((E = v), O3.some((k) => k.test(E)) ? L3 : xn);
          var E;
          const A = p[1].toLowerCase(),
            S = Ly.indexOf(A) !== -1,
            C = { attrs: l(p[2]), noInnerParse: S, tag: S ? A : p[1] };
          return (
            (g.inAnchor = g.inAnchor || A === 'a'),
            S ? (C.text = p[3]) : (C.children = y(h, v, g)),
            (g.inAnchor = !1),
            C
          );
        },
        render: (p, h, g) =>
          n(p.tag, It({ key: g.key }, p.attrs), p.text || h(p.children, g)),
      },
      13: {
        match: Cr(vo),
        order: 1,
        parse: (p) => ({ attrs: l(p[2] || ''), tag: p[1] }),
        render: (p, h, g) => n(p.tag, It({}, p.attrs, { key: g.key })),
      },
      12: { match: Cr(Wc), order: 1, parse: () => ({}), render: Ta },
      14: {
        match: vt(_3),
        order: 1,
        parse: (p) => ({ alt: p[1], target: qi(p[2]), title: p[3] }),
        render: (p, h, g) =>
          n('img', {
            key: g.key,
            alt: p.alt || void 0,
            title: p.title || void 0,
            src: Kt(p.target),
          }),
      },
      15: {
        match: yt(k3),
        order: 3,
        parse: (p, h, g) => ({
          children: D3(h, p[1], g),
          target: qi(p[2]),
          title: p[3],
        }),
        render: (p, h, g) =>
          n(
            'a',
            { key: g.key, href: Kt(p.target), title: p.title },
            h(p.children, g)
          ),
      },
      16: {
        match: yt(e3),
        order: 0,
        parse: (p) => ({
          children: [{ text: p[1], type: '27' }],
          target: p[1],
          type: '15',
        }),
      },
      17: {
        match: (p, h) => (h.inAnchor ? null : yt(Jy)(p, h)),
        order: 0,
        parse: (p) => ({
          children: [{ text: p[1], type: '27' }],
          target: p[1],
          title: void 0,
          type: '15',
        }),
      },
      18: {
        match: yt(Qy),
        order: 0,
        parse(p) {
          let h = p[1],
            g = p[1];
          return (
            By.test(g) || (g = 'mailto:' + g),
            {
              children: [{ text: h.replace('mailto:', ''), type: '27' }],
              target: g,
              type: '15',
            }
          );
        },
      },
      20: Zi(n, 1),
      33: Zi(n, 2),
      19: {
        match: dt(Zy),
        order: 3,
        parse: Oa,
        render: () => `
`,
      },
      21: {
        match: $3,
        order: 3,
        parse: _a,
        render: (p, h, g) => n('p', { key: g.key }, h(p.children, g)),
      },
      22: {
        match: yt(r3),
        order: 0,
        parse: (p) => ((u[p[1]] = { target: p[2], title: p[4] }), {}),
        render: Ta,
      },
      23: {
        match: vt(n3),
        order: 0,
        parse: (p) => ({ alt: p[1] || void 0, ref: p[2] }),
        render: (p, h, g) =>
          n('img', {
            key: g.key,
            alt: p.alt,
            src: Kt(u[p.ref].target),
            title: u[p.ref].title,
          }),
      },
      24: {
        match: yt(a3),
        order: 0,
        parse: (p, h, g) => ({
          children: h(p[1], g),
          fallbackChildren: h(p[0].replace(o3, '\\$1'), g),
          ref: p[2],
        }),
        render: (p, h, g) =>
          u[p.ref]
            ? n(
                'a',
                {
                  key: g.key,
                  href: Kt(u[p.ref].target),
                  title: u[p.ref].title,
                },
                h(p.children, g)
              )
            : n('span', { key: g.key }, h(p.fallbackChildren, g)),
      },
      25: {
        match: dt(Gc),
        order: 1,
        parse: F3,
        render: (p, h, g) =>
          n(
            'table',
            { key: g.key },
            n(
              'thead',
              null,
              n(
                'tr',
                null,
                p.header.map(function (w, x) {
                  return n('th', { key: x, style: zi(p, x) }, h(w, g));
                })
              )
            ),
            n(
              'tbody',
              null,
              p.cells.map(function (w, x) {
                return n(
                  'tr',
                  { key: x },
                  w.map(function (v, y) {
                    return n('td', { key: y, style: zi(p, y) }, h(v, g));
                  })
                );
              })
            )
          ),
      },
      26: {
        match: function (p, h) {
          return h.inTable ? ((h.inline = !0), s3.exec(p)) : null;
        },
        order: 1,
        parse: function () {
          return { type: '26' };
        },
        render: () => ' | ',
      },
      27: {
        match: Cr(v3),
        order: 4,
        parse: (p) => ({
          text: p[0].replace(Yy, (h, g) =>
            t.namedCodesToUnicode[g] ? t.namedCodesToUnicode[g] : h
          ),
        }),
        render: (p) => p.text,
      },
      28: {
        match: vt(m3),
        order: 2,
        parse: (p, h, g) => ({ children: h(p[2], g) }),
        render: (p, h, g) => n('strong', { key: g.key }, h(p.children, g)),
      },
      29: {
        match: vt(g3),
        order: 3,
        parse: (p, h, g) => ({ children: h(p[2], g) }),
        render: (p, h, g) => n('em', { key: g.key }, h(p.children, g)),
      },
      30: {
        match: vt(y3),
        order: 1,
        parse: (p) => ({ text: p[1], type: '27' }),
      },
      31: {
        match: vt(h3),
        order: 3,
        parse: _a,
        render: (p, h, g) => n('mark', { key: g.key }, h(p.children, g)),
      },
      32: {
        match: vt(b3),
        order: 3,
        parse: _a,
        render: (p, h, g) => n('del', { key: g.key }, h(p.children, g)),
      },
    };
  t.disableParsingRawHTML === !0 && (delete s[11], delete s[13]);
  const c = (function (p) {
      let h = Object.keys(p);
      function g(w, x) {
        let v = [],
          y = '';
        for (; w; ) {
          let E = 0;
          for (; E < h.length; ) {
            const A = h[E],
              S = p[A],
              C = S.match(w, x, y);
            if (C) {
              const k = C[0];
              w = w.substring(k.length);
              const O = S.parse(C, g, x);
              O.type == null && (O.type = A), v.push(O), (y = k);
              break;
            }
            E++;
          }
        }
        return v;
      }
      return (
        h.sort(function (w, x) {
          let v = p[w].order,
            y = p[x].order;
          return v !== y ? v - y : 1;
        }),
        function (w, x) {
          return g(
            (function (v) {
              return v
                .replace(
                  Vy,
                  `
`
                )
                .replace(Uy, '')
                .replace(i3, '    ');
            })(w),
            x
          );
        }
      );
    })(s),
    d =
      ((f = (function (p, h) {
        return function (g, w, x) {
          const v = p[g.type].render;
          return h ? h(() => v(g, w, x), g, w, x) : v(g, w, x);
        };
      })(s, t.renderRule)),
      function p(h, g = {}) {
        if (Array.isArray(h)) {
          const w = g.key,
            x = [];
          let v = !1;
          for (let y = 0; y < h.length; y++) {
            g.key = y;
            const E = p(h[y], g),
              A = typeof E == 'string';
            A && v ? (x[x.length - 1] += E) : E !== null && x.push(E), (v = A);
          }
          return (g.key = w), x;
        }
        return f(h, p, g);
      });
  var f;
  const m = a(e);
  return i.length
    ? n(
        'div',
        null,
        m,
        n(
          'footer',
          { key: 'footer' },
          i.map(function (p) {
            return n(
              'div',
              { id: t.slugify(p.identifier), key: p.identifier },
              p.identifier,
              d(c(p.footnote, { inline: !0 }))
            );
          })
        )
      )
    : m;
}
const l0 = (e) => {
  let { children: t, options: r } = e,
    n = (function (a, l) {
      if (a == null) return {};
      var i,
        u,
        s = {},
        c = Object.keys(a);
      for (u = 0; u < c.length; u++)
        l.indexOf((i = c[u])) >= 0 || (s[i] = a[i]);
      return s;
    })(e, Dy);
  return b.cloneElement(B3(t, r), n);
};
function I3(e, t, r, n) {
  for (var a = e.length, l = r + (n ? 1 : -1); n ? l-- : ++l < a; )
    if (t(e[l], l, e)) return l;
  return -1;
}
var P3 = I3;
function j3(e) {
  return e !== e;
}
var N3 = j3;
function H3(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
  return -1;
}
var Z3 = H3,
  V3 = P3,
  z3 = N3,
  q3 = Z3;
function U3(e, t, r) {
  return t === t ? q3(e, t, r) : V3(e, z3, r);
}
var W3 = U3,
  G3 = W3;
function Y3(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && G3(e, t, 0) > -1;
}
var K3 = Y3;
function X3(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n])) return !0;
  return !1;
}
var J3 = X3;
function Q3() {}
var ev = Q3,
  Fa = o1,
  tv = ev,
  rv = $s,
  nv = 1 / 0,
  av =
    Fa && 1 / rv(new Fa([, -0]))[1] == nv
      ? function (e) {
          return new Fa(e);
        }
      : tv,
  ov = av,
  lv = l1,
  iv = K3,
  sv = J3,
  uv = i1,
  cv = ov,
  dv = $s,
  pv = 200;
function fv(e, t, r) {
  var n = -1,
    a = iv,
    l = e.length,
    i = !0,
    u = [],
    s = u;
  if (r) (i = !1), (a = sv);
  else if (l >= pv) {
    var c = t ? null : cv(e);
    if (c) return dv(c);
    (i = !1), (a = uv), (s = new lv());
  } else s = t ? [] : u;
  e: for (; ++n < l; ) {
    var d = e[n],
      f = t ? t(d) : d;
    if (((d = r || d !== 0 ? d : 0), i && f === f)) {
      for (var m = s.length; m--; ) if (s[m] === f) continue e;
      t && s.push(f), u.push(d);
    } else a(s, f, r) || (s !== u && s.push(f), u.push(d));
  }
  return u;
}
var mv = fv,
  gv = mv;
function hv(e) {
  return e && e.length ? gv(e) : [];
}
var bv = hv;
const yv = Ln(bv);
function vv(e, t) {
  for (
    var r = -1, n = e == null ? 0 : e.length;
    ++r < n && t(e[r], r, e) !== !1;

  );
  return e;
}
var Ev = vv,
  xv = gl,
  wv = _s;
function Av(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var l = -1, i = t.length; ++l < i; ) {
    var u = t[l],
      s = n ? n(r[u], e[u], u, r, e) : void 0;
    s === void 0 && (s = e[u]), a ? wv(r, u, s) : xv(r, u, s);
  }
  return r;
}
var ta = Av,
  Sv = ta,
  Cv = Ds;
function kv(e, t) {
  return e && Sv(t, Cv(t), e);
}
var _v = kv,
  Ov = ta,
  Tv = hl;
function Rv(e, t) {
  return e && Ov(t, Tv(t), e);
}
var Fv = Rv,
  Dn = { exports: {} };
Dn.exports;
(function (e, t) {
  var r = s1,
    n = t && !t.nodeType && t,
    a = n && !0 && e && !e.nodeType && e,
    l = a && a.exports === n,
    i = l ? r.Buffer : void 0,
    u = i ? i.allocUnsafe : void 0;
  function s(c, d) {
    if (d) return c.slice();
    var f = c.length,
      m = u ? u(f) : new c.constructor(f);
    return c.copy(m), m;
  }
  e.exports = s;
})(Dn, Dn.exports);
var $v = Dn.exports;
function Dv(e, t) {
  var r = -1,
    n = e.length;
  for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
  return t;
}
var Lv = Dv,
  Mv = ta,
  Bv = Rs;
function Iv(e, t) {
  return Mv(e, Bv(e), t);
}
var Pv = Iv,
  jv = ta,
  Nv = jc;
function Hv(e, t) {
  return jv(e, Nv(e), t);
}
var Zv = Hv,
  Vv = Object.prototype,
  zv = Vv.hasOwnProperty;
function qv(e) {
  var t = e.length,
    r = new e.constructor(t);
  return (
    t &&
      typeof e[0] == 'string' &&
      zv.call(e, 'index') &&
      ((r.index = e.index), (r.input = e.input)),
    r
  );
}
var Uv = qv,
  Ui = u1;
function Wv(e) {
  var t = new e.constructor(e.byteLength);
  return new Ui(t).set(new Ui(e)), t;
}
var vl = Wv,
  Gv = vl;
function Yv(e, t) {
  var r = t ? Gv(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Kv = Yv,
  Xv = /\w*$/;
function Jv(e) {
  var t = new e.constructor(e.source, Xv.exec(e));
  return (t.lastIndex = e.lastIndex), t;
}
var Qv = Jv,
  Wi = c1,
  Gi = Wi ? Wi.prototype : void 0,
  Yi = Gi ? Gi.valueOf : void 0;
function e4(e) {
  return Yi ? Object(Yi.call(e)) : {};
}
var t4 = e4,
  r4 = vl;
function n4(e, t) {
  var r = t ? r4(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var a4 = n4,
  o4 = vl,
  l4 = Kv,
  i4 = Qv,
  s4 = t4,
  u4 = a4,
  c4 = '[object Boolean]',
  d4 = '[object Date]',
  p4 = '[object Map]',
  f4 = '[object Number]',
  m4 = '[object RegExp]',
  g4 = '[object Set]',
  h4 = '[object String]',
  b4 = '[object Symbol]',
  y4 = '[object ArrayBuffer]',
  v4 = '[object DataView]',
  E4 = '[object Float32Array]',
  x4 = '[object Float64Array]',
  w4 = '[object Int8Array]',
  A4 = '[object Int16Array]',
  S4 = '[object Int32Array]',
  C4 = '[object Uint8Array]',
  k4 = '[object Uint8ClampedArray]',
  _4 = '[object Uint16Array]',
  O4 = '[object Uint32Array]';
function T4(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case y4:
      return o4(e);
    case c4:
    case d4:
      return new n(+e);
    case v4:
      return l4(e, r);
    case E4:
    case x4:
    case w4:
    case A4:
    case S4:
    case C4:
    case k4:
    case _4:
    case O4:
      return u4(e, r);
    case p4:
      return new n();
    case f4:
    case h4:
      return new n(e);
    case m4:
      return i4(e);
    case g4:
      return new n();
    case b4:
      return s4(e);
  }
}
var R4 = T4,
  F4 = Mn,
  Ki = Object.create,
  $4 = (function () {
    function e() {}
    return function (t) {
      if (!F4(t)) return {};
      if (Ki) return Ki(t);
      e.prototype = t;
      var r = new e();
      return (e.prototype = void 0), r;
    };
  })(),
  D4 = $4,
  L4 = D4,
  M4 = Ts,
  B4 = Fs;
function I4(e) {
  return typeof e.constructor == 'function' && !B4(e) ? L4(M4(e)) : {};
}
var P4 = I4,
  j4 = _o,
  N4 = Ls,
  H4 = '[object Map]';
function Z4(e) {
  return N4(e) && j4(e) == H4;
}
var V4 = Z4,
  z4 = V4,
  q4 = Bs,
  Xi = Ms,
  Ji = Xi && Xi.isMap,
  U4 = Ji ? q4(Ji) : z4,
  W4 = U4,
  G4 = _o,
  Y4 = Ls,
  K4 = '[object Set]';
function X4(e) {
  return Y4(e) && G4(e) == K4;
}
var J4 = X4,
  Q4 = J4,
  e7 = Bs,
  Qi = Ms,
  es = Qi && Qi.isSet,
  t7 = es ? e7(es) : Q4,
  r7 = t7,
  n7 = d1,
  a7 = Ev,
  o7 = gl,
  l7 = _v,
  i7 = Fv,
  s7 = $v,
  u7 = Lv,
  c7 = Pv,
  d7 = Zv,
  p7 = f1,
  f7 = Nc,
  m7 = _o,
  g7 = Uv,
  h7 = R4,
  b7 = P4,
  y7 = m1,
  v7 = p1,
  E7 = W4,
  x7 = Mn,
  w7 = r7,
  A7 = Ds,
  S7 = hl,
  C7 = 1,
  k7 = 2,
  _7 = 4,
  i0 = '[object Arguments]',
  O7 = '[object Array]',
  T7 = '[object Boolean]',
  R7 = '[object Date]',
  F7 = '[object Error]',
  s0 = '[object Function]',
  $7 = '[object GeneratorFunction]',
  D7 = '[object Map]',
  L7 = '[object Number]',
  u0 = '[object Object]',
  M7 = '[object RegExp]',
  B7 = '[object Set]',
  I7 = '[object String]',
  P7 = '[object Symbol]',
  j7 = '[object WeakMap]',
  N7 = '[object ArrayBuffer]',
  H7 = '[object DataView]',
  Z7 = '[object Float32Array]',
  V7 = '[object Float64Array]',
  z7 = '[object Int8Array]',
  q7 = '[object Int16Array]',
  U7 = '[object Int32Array]',
  W7 = '[object Uint8Array]',
  G7 = '[object Uint8ClampedArray]',
  Y7 = '[object Uint16Array]',
  K7 = '[object Uint32Array]',
  X = {};
X[i0] =
  X[O7] =
  X[N7] =
  X[H7] =
  X[T7] =
  X[R7] =
  X[Z7] =
  X[V7] =
  X[z7] =
  X[q7] =
  X[U7] =
  X[D7] =
  X[L7] =
  X[u0] =
  X[M7] =
  X[B7] =
  X[I7] =
  X[P7] =
  X[W7] =
  X[G7] =
  X[Y7] =
  X[K7] =
    !0;
X[F7] = X[s0] = X[j7] = !1;
function wn(e, t, r, n, a, l) {
  var i,
    u = t & C7,
    s = t & k7,
    c = t & _7;
  if ((r && (i = a ? r(e, n, a, l) : r(e)), i !== void 0)) return i;
  if (!x7(e)) return e;
  var d = y7(e);
  if (d) {
    if (((i = g7(e)), !u)) return u7(e, i);
  } else {
    var f = m7(e),
      m = f == s0 || f == $7;
    if (v7(e)) return s7(e, u);
    if (f == u0 || f == i0 || (m && !a)) {
      if (((i = s || m ? {} : b7(e)), !u))
        return s ? d7(e, i7(i, e)) : c7(e, l7(i, e));
    } else {
      if (!X[f]) return a ? e : {};
      i = h7(e, f, u);
    }
  }
  l || (l = new n7());
  var p = l.get(e);
  if (p) return p;
  l.set(e, i),
    w7(e)
      ? e.forEach(function (w) {
          i.add(wn(w, t, r, w, e, l));
        })
      : E7(e) &&
        e.forEach(function (w, x) {
          i.set(x, wn(w, t, r, x, e, l));
        });
  var h = c ? (s ? f7 : p7) : s ? S7 : A7,
    g = d ? void 0 : h(e);
  return (
    a7(g || e, function (w, x) {
      g && ((x = w), (w = e[x])), o7(i, x, wn(w, t, r, x, e, l));
    }),
    i
  );
}
var X7 = wn,
  J7 = X7,
  Q7 = 1,
  e6 = 4;
function t6(e) {
  return J7(e, Q7 | e6);
}
var r6 = t6;
const n6 = Ln(r6);
var a6 = Object.create,
  c0 = Object.defineProperty,
  o6 = Object.getOwnPropertyDescriptor,
  d0 = Object.getOwnPropertyNames,
  l6 = Object.getPrototypeOf,
  i6 = Object.prototype.hasOwnProperty,
  Pe = (e, t) =>
    function () {
      return t || (0, e[d0(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  s6 = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let a of d0(t))
        !i6.call(e, a) &&
          a !== r &&
          c0(e, a, {
            get: () => t[a],
            enumerable: !(n = o6(t, a)) || n.enumerable,
          });
    return e;
  },
  El = (e, t, r) => (
    (r = e != null ? a6(l6(e)) : {}),
    s6(
      t || !e || !e.__esModule
        ? c0(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  u6 = [
    'bubbles',
    'cancelBubble',
    'cancelable',
    'composed',
    'currentTarget',
    'defaultPrevented',
    'eventPhase',
    'isTrusted',
    'returnValue',
    'srcElement',
    'target',
    'timeStamp',
    'type',
  ],
  c6 = ['detail'];
function d6(e) {
  const t = u6
    .filter((r) => e[r] !== void 0)
    .reduce((r, n) => ({ ...r, [n]: e[n] }), {});
  return (
    e instanceof CustomEvent &&
      c6
        .filter((r) => e[r] !== void 0)
        .forEach((r) => {
          t[r] = e[r];
        }),
    t
  );
}
var p0 = Pe({
    'node_modules/has-symbols/shams.js'(e, t) {
      t.exports = function () {
        if (
          typeof Symbol != 'function' ||
          typeof Object.getOwnPropertySymbols != 'function'
        )
          return !1;
        if (typeof Symbol.iterator == 'symbol') return !0;
        var n = {},
          a = Symbol('test'),
          l = Object(a);
        if (
          typeof a == 'string' ||
          Object.prototype.toString.call(a) !== '[object Symbol]' ||
          Object.prototype.toString.call(l) !== '[object Symbol]'
        )
          return !1;
        var i = 42;
        n[a] = i;
        for (a in n) return !1;
        if (
          (typeof Object.keys == 'function' && Object.keys(n).length !== 0) ||
          (typeof Object.getOwnPropertyNames == 'function' &&
            Object.getOwnPropertyNames(n).length !== 0)
        )
          return !1;
        var u = Object.getOwnPropertySymbols(n);
        if (
          u.length !== 1 ||
          u[0] !== a ||
          !Object.prototype.propertyIsEnumerable.call(n, a)
        )
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == 'function') {
          var s = Object.getOwnPropertyDescriptor(n, a);
          if (s.value !== i || s.enumerable !== !0) return !1;
        }
        return !0;
      };
    },
  }),
  f0 = Pe({
    'node_modules/has-symbols/index.js'(e, t) {
      var r = typeof Symbol < 'u' && Symbol,
        n = p0();
      t.exports = function () {
        return typeof r != 'function' ||
          typeof Symbol != 'function' ||
          typeof r('foo') != 'symbol' ||
          typeof Symbol('bar') != 'symbol'
          ? !1
          : n();
      };
    },
  }),
  p6 = Pe({
    'node_modules/function-bind/implementation.js'(e, t) {
      var r = 'Function.prototype.bind called on incompatible ',
        n = Array.prototype.slice,
        a = Object.prototype.toString,
        l = '[object Function]';
      t.exports = function (u) {
        var s = this;
        if (typeof s != 'function' || a.call(s) !== l)
          throw new TypeError(r + s);
        for (
          var c = n.call(arguments, 1),
            d,
            f = function () {
              if (this instanceof d) {
                var w = s.apply(this, c.concat(n.call(arguments)));
                return Object(w) === w ? w : this;
              } else return s.apply(u, c.concat(n.call(arguments)));
            },
            m = Math.max(0, s.length - c.length),
            p = [],
            h = 0;
          h < m;
          h++
        )
          p.push('$' + h);
        if (
          ((d = Function(
            'binder',
            'return function (' +
              p.join(',') +
              '){ return binder.apply(this,arguments); }'
          )(f)),
          s.prototype)
        ) {
          var g = function () {};
          (g.prototype = s.prototype),
            (d.prototype = new g()),
            (g.prototype = null);
        }
        return d;
      };
    },
  }),
  xl = Pe({
    'node_modules/function-bind/index.js'(e, t) {
      var r = p6();
      t.exports = Function.prototype.bind || r;
    },
  }),
  f6 = Pe({
    'node_modules/has/src/index.js'(e, t) {
      var r = xl();
      t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    },
  }),
  m0 = Pe({
    'node_modules/get-intrinsic/index.js'(e, t) {
      var r,
        n = SyntaxError,
        a = Function,
        l = TypeError,
        i = function (F) {
          try {
            return a('"use strict"; return (' + F + ').constructor;')();
          } catch {}
        },
        u = Object.getOwnPropertyDescriptor;
      if (u)
        try {
          u({}, '');
        } catch {
          u = null;
        }
      var s = function () {
          throw new l();
        },
        c = u
          ? (function () {
              try {
                return arguments.callee, s;
              } catch {
                try {
                  return u(arguments, 'callee').get;
                } catch {
                  return s;
                }
              }
            })()
          : s,
        d = f0()(),
        f =
          Object.getPrototypeOf ||
          function (F) {
            return F.__proto__;
          },
        m = {},
        p = typeof Uint8Array > 'u' ? r : f(Uint8Array),
        h = {
          '%AggregateError%': typeof AggregateError > 'u' ? r : AggregateError,
          '%Array%': Array,
          '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
          '%ArrayIteratorPrototype%': d ? f([][Symbol.iterator]()) : r,
          '%AsyncFromSyncIteratorPrototype%': r,
          '%AsyncFunction%': m,
          '%AsyncGenerator%': m,
          '%AsyncGeneratorFunction%': m,
          '%AsyncIteratorPrototype%': m,
          '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
          '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
          '%Boolean%': Boolean,
          '%DataView%': typeof DataView > 'u' ? r : DataView,
          '%Date%': Date,
          '%decodeURI%': decodeURI,
          '%decodeURIComponent%': decodeURIComponent,
          '%encodeURI%': encodeURI,
          '%encodeURIComponent%': encodeURIComponent,
          '%Error%': Error,
          '%eval%': eval,
          '%EvalError%': EvalError,
          '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
          '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
          '%FinalizationRegistry%':
            typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
          '%Function%': a,
          '%GeneratorFunction%': m,
          '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
          '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
          '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
          '%isFinite%': isFinite,
          '%isNaN%': isNaN,
          '%IteratorPrototype%': d ? f(f([][Symbol.iterator]())) : r,
          '%JSON%': typeof JSON == 'object' ? JSON : r,
          '%Map%': typeof Map > 'u' ? r : Map,
          '%MapIteratorPrototype%':
            typeof Map > 'u' || !d ? r : f(new Map()[Symbol.iterator]()),
          '%Math%': Math,
          '%Number%': Number,
          '%Object%': Object,
          '%parseFloat%': parseFloat,
          '%parseInt%': parseInt,
          '%Promise%': typeof Promise > 'u' ? r : Promise,
          '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
          '%RangeError%': RangeError,
          '%ReferenceError%': ReferenceError,
          '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
          '%RegExp%': RegExp,
          '%Set%': typeof Set > 'u' ? r : Set,
          '%SetIteratorPrototype%':
            typeof Set > 'u' || !d ? r : f(new Set()[Symbol.iterator]()),
          '%SharedArrayBuffer%':
            typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
          '%String%': String,
          '%StringIteratorPrototype%': d ? f(''[Symbol.iterator]()) : r,
          '%Symbol%': d ? Symbol : r,
          '%SyntaxError%': n,
          '%ThrowTypeError%': c,
          '%TypedArray%': p,
          '%TypeError%': l,
          '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
          '%Uint8ClampedArray%':
            typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
          '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
          '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
          '%URIError%': URIError,
          '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
          '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
          '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
        },
        g = function F($) {
          var P;
          if ($ === '%AsyncFunction%') P = i('async function () {}');
          else if ($ === '%GeneratorFunction%') P = i('function* () {}');
          else if ($ === '%AsyncGeneratorFunction%')
            P = i('async function* () {}');
          else if ($ === '%AsyncGenerator%') {
            var D = F('%AsyncGeneratorFunction%');
            D && (P = D.prototype);
          } else if ($ === '%AsyncIteratorPrototype%') {
            var L = F('%AsyncGenerator%');
            L && (P = f(L.prototype));
          }
          return (h[$] = P), P;
        },
        w = {
          '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
          '%ArrayPrototype%': ['Array', 'prototype'],
          '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
          '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
          '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
          '%ArrayProto_values%': ['Array', 'prototype', 'values'],
          '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
          '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
          '%AsyncGeneratorPrototype%': [
            'AsyncGeneratorFunction',
            'prototype',
            'prototype',
          ],
          '%BooleanPrototype%': ['Boolean', 'prototype'],
          '%DataViewPrototype%': ['DataView', 'prototype'],
          '%DatePrototype%': ['Date', 'prototype'],
          '%ErrorPrototype%': ['Error', 'prototype'],
          '%EvalErrorPrototype%': ['EvalError', 'prototype'],
          '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
          '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
          '%FunctionPrototype%': ['Function', 'prototype'],
          '%Generator%': ['GeneratorFunction', 'prototype'],
          '%GeneratorPrototype%': [
            'GeneratorFunction',
            'prototype',
            'prototype',
          ],
          '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
          '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
          '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
          '%JSONParse%': ['JSON', 'parse'],
          '%JSONStringify%': ['JSON', 'stringify'],
          '%MapPrototype%': ['Map', 'prototype'],
          '%NumberPrototype%': ['Number', 'prototype'],
          '%ObjectPrototype%': ['Object', 'prototype'],
          '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
          '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
          '%PromisePrototype%': ['Promise', 'prototype'],
          '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
          '%Promise_all%': ['Promise', 'all'],
          '%Promise_reject%': ['Promise', 'reject'],
          '%Promise_resolve%': ['Promise', 'resolve'],
          '%RangeErrorPrototype%': ['RangeError', 'prototype'],
          '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
          '%RegExpPrototype%': ['RegExp', 'prototype'],
          '%SetPrototype%': ['Set', 'prototype'],
          '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
          '%StringPrototype%': ['String', 'prototype'],
          '%SymbolPrototype%': ['Symbol', 'prototype'],
          '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
          '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
          '%TypeErrorPrototype%': ['TypeError', 'prototype'],
          '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
          '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
          '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
          '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
          '%URIErrorPrototype%': ['URIError', 'prototype'],
          '%WeakMapPrototype%': ['WeakMap', 'prototype'],
          '%WeakSetPrototype%': ['WeakSet', 'prototype'],
        },
        x = xl(),
        v = f6(),
        y = x.call(Function.call, Array.prototype.concat),
        E = x.call(Function.apply, Array.prototype.splice),
        A = x.call(Function.call, String.prototype.replace),
        S = x.call(Function.call, String.prototype.slice),
        C = x.call(Function.call, RegExp.prototype.exec),
        k =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        O = /\\(\\)?/g,
        T = function ($) {
          var P = S($, 0, 1),
            D = S($, -1);
          if (P === '%' && D !== '%')
            throw new n('invalid intrinsic syntax, expected closing `%`');
          if (D === '%' && P !== '%')
            throw new n('invalid intrinsic syntax, expected opening `%`');
          var L = [];
          return (
            A($, k, function (N, V, B, H) {
              L[L.length] = B ? A(H, O, '$1') : V || N;
            }),
            L
          );
        },
        R = function ($, P) {
          var D = $,
            L;
          if ((v(w, D) && ((L = w[D]), (D = '%' + L[0] + '%')), v(h, D))) {
            var N = h[D];
            if ((N === m && (N = g(D)), typeof N > 'u' && !P))
              throw new l(
                'intrinsic ' +
                  $ +
                  ' exists, but is not available. Please file an issue!'
              );
            return { alias: L, name: D, value: N };
          }
          throw new n('intrinsic ' + $ + ' does not exist!');
        };
      t.exports = function ($, P) {
        if (typeof $ != 'string' || $.length === 0)
          throw new l('intrinsic name must be a non-empty string');
        if (arguments.length > 1 && typeof P != 'boolean')
          throw new l('"allowMissing" argument must be a boolean');
        if (C(/^%?[^%]*%?$/, $) === null)
          throw new n(
            '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
          );
        var D = T($),
          L = D.length > 0 ? D[0] : '',
          N = R('%' + L + '%', P),
          V = N.name,
          B = N.value,
          H = !1,
          Y = N.alias;
        Y && ((L = Y[0]), E(D, y([0, 1], Y)));
        for (var te = 1, G = !0; te < D.length; te += 1) {
          var K = D[te],
            I = S(K, 0, 1),
            z = S(K, -1);
          if (
            (I === '"' ||
              I === "'" ||
              I === '`' ||
              z === '"' ||
              z === "'" ||
              z === '`') &&
            I !== z
          )
            throw new n('property names with quotes must have matching quotes');
          if (
            ((K === 'constructor' || !G) && (H = !0),
            (L += '.' + K),
            (V = '%' + L + '%'),
            v(h, V))
          )
            B = h[V];
          else if (B != null) {
            if (!(K in B)) {
              if (!P)
                throw new l(
                  'base intrinsic for ' +
                    $ +
                    ' exists, but the property is not available.'
                );
              return;
            }
            if (u && te + 1 >= D.length) {
              var q = u(B, K);
              (G = !!q),
                G && 'get' in q && !('originalValue' in q.get)
                  ? (B = q.get)
                  : (B = B[K]);
            } else (G = v(B, K)), (B = B[K]);
            G && !H && (h[V] = B);
          }
        }
        return B;
      };
    },
  }),
  m6 = Pe({
    'node_modules/call-bind/index.js'(e, t) {
      var r = xl(),
        n = m0(),
        a = n('%Function.prototype.apply%'),
        l = n('%Function.prototype.call%'),
        i = n('%Reflect.apply%', !0) || r.call(l, a),
        u = n('%Object.getOwnPropertyDescriptor%', !0),
        s = n('%Object.defineProperty%', !0),
        c = n('%Math.max%');
      if (s)
        try {
          s({}, 'a', { value: 1 });
        } catch {
          s = null;
        }
      t.exports = function (m) {
        var p = i(r, l, arguments);
        if (u && s) {
          var h = u(p, 'length');
          h.configurable &&
            s(p, 'length', {
              value: 1 + c(0, m.length - (arguments.length - 1)),
            });
        }
        return p;
      };
      var d = function () {
        return i(r, a, arguments);
      };
      s ? s(t.exports, 'apply', { value: d }) : (t.exports.apply = d);
    },
  }),
  g6 = Pe({
    'node_modules/call-bind/callBound.js'(e, t) {
      var r = m0(),
        n = m6(),
        a = n(r('String.prototype.indexOf'));
      t.exports = function (i, u) {
        var s = r(i, !!u);
        return typeof s == 'function' && a(i, '.prototype.') > -1 ? n(s) : s;
      };
    },
  }),
  h6 = Pe({
    'node_modules/has-tostringtag/shams.js'(e, t) {
      var r = p0();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    },
  }),
  b6 = Pe({
    'node_modules/is-regex/index.js'(e, t) {
      var r = g6(),
        n = h6()(),
        a,
        l,
        i,
        u;
      n &&
        ((a = r('Object.prototype.hasOwnProperty')),
        (l = r('RegExp.prototype.exec')),
        (i = {}),
        (s = function () {
          throw i;
        }),
        (u = { toString: s, valueOf: s }),
        typeof Symbol.toPrimitive == 'symbol' && (u[Symbol.toPrimitive] = s));
      var s,
        c = r('Object.prototype.toString'),
        d = Object.getOwnPropertyDescriptor,
        f = '[object RegExp]';
      t.exports = n
        ? function (p) {
            if (!p || typeof p != 'object') return !1;
            var h = d(p, 'lastIndex'),
              g = h && a(h, 'value');
            if (!g) return !1;
            try {
              l(p, u);
            } catch (w) {
              return w === i;
            }
          }
        : function (p) {
            return !p || (typeof p != 'object' && typeof p != 'function')
              ? !1
              : c(p) === f;
          };
    },
  }),
  y6 = Pe({
    'node_modules/is-function/index.js'(e, t) {
      t.exports = n;
      var r = Object.prototype.toString;
      function n(a) {
        if (!a) return !1;
        var l = r.call(a);
        return (
          l === '[object Function]' ||
          (typeof a == 'function' && l !== '[object RegExp]') ||
          (typeof window < 'u' &&
            (a === window.setTimeout ||
              a === window.alert ||
              a === window.confirm ||
              a === window.prompt))
        );
      }
    },
  }),
  v6 = Pe({
    'node_modules/is-symbol/index.js'(e, t) {
      var r = Object.prototype.toString,
        n = f0()();
      n
        ? ((a = Symbol.prototype.toString),
          (l = /^Symbol\(.*\)$/),
          (i = function (s) {
            return typeof s.valueOf() != 'symbol' ? !1 : l.test(a.call(s));
          }),
          (t.exports = function (s) {
            if (typeof s == 'symbol') return !0;
            if (r.call(s) !== '[object Symbol]') return !1;
            try {
              return i(s);
            } catch {
              return !1;
            }
          }))
        : (t.exports = function (s) {
            return !1;
          });
      var a, l, i;
    },
  }),
  E6 = El(b6()),
  x6 = El(y6()),
  w6 = El(v6());
function A6(e) {
  return e != null && typeof e == 'object' && Array.isArray(e) === !1;
}
var S6 =
    typeof global == 'object' && global && global.Object === Object && global,
  C6 = S6,
  k6 = typeof self == 'object' && self && self.Object === Object && self,
  _6 = C6 || k6 || Function('return this')(),
  wl = _6,
  O6 = wl.Symbol,
  dr = O6,
  g0 = Object.prototype,
  T6 = g0.hasOwnProperty,
  R6 = g0.toString,
  kr = dr ? dr.toStringTag : void 0;
function F6(e) {
  var t = T6.call(e, kr),
    r = e[kr];
  try {
    e[kr] = void 0;
    var n = !0;
  } catch {}
  var a = R6.call(e);
  return n && (t ? (e[kr] = r) : delete e[kr]), a;
}
var $6 = F6,
  D6 = Object.prototype,
  L6 = D6.toString;
function M6(e) {
  return L6.call(e);
}
var B6 = M6,
  I6 = '[object Null]',
  P6 = '[object Undefined]',
  ts = dr ? dr.toStringTag : void 0;
function j6(e) {
  return e == null
    ? e === void 0
      ? P6
      : I6
    : ts && ts in Object(e)
      ? $6(e)
      : B6(e);
}
var N6 = j6,
  rs = dr ? dr.prototype : void 0;
rs && rs.toString;
function H6(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var h0 = H6,
  Z6 = '[object AsyncFunction]',
  V6 = '[object Function]',
  z6 = '[object GeneratorFunction]',
  q6 = '[object Proxy]';
function U6(e) {
  if (!h0(e)) return !1;
  var t = N6(e);
  return t == V6 || t == z6 || t == Z6 || t == q6;
}
var W6 = U6,
  G6 = wl['__core-js_shared__'],
  $a = G6,
  ns = (function () {
    var e = /[^.]+$/.exec(($a && $a.keys && $a.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
function Y6(e) {
  return !!ns && ns in e;
}
var K6 = Y6,
  X6 = Function.prototype,
  J6 = X6.toString;
function Q6(e) {
  if (e != null) {
    try {
      return J6.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var eE = Q6,
  tE = /[\\^$.*+?()[\]{}|]/g,
  rE = /^\[object .+?Constructor\]$/,
  nE = Function.prototype,
  aE = Object.prototype,
  oE = nE.toString,
  lE = aE.hasOwnProperty,
  iE = RegExp(
    '^' +
      oE
        .call(lE)
        .replace(tE, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  );
function sE(e) {
  if (!h0(e) || K6(e)) return !1;
  var t = W6(e) ? iE : rE;
  return t.test(eE(e));
}
var uE = sE;
function cE(e, t) {
  return e == null ? void 0 : e[t];
}
var dE = cE;
function pE(e, t) {
  var r = dE(e, t);
  return uE(r) ? r : void 0;
}
var b0 = pE;
function fE(e, t) {
  return e === t || (e !== e && t !== t);
}
var mE = fE,
  gE = b0(Object, 'create'),
  qr = gE;
function hE() {
  (this.__data__ = qr ? qr(null) : {}), (this.size = 0);
}
var bE = hE;
function yE(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var vE = yE,
  EE = '__lodash_hash_undefined__',
  xE = Object.prototype,
  wE = xE.hasOwnProperty;
function AE(e) {
  var t = this.__data__;
  if (qr) {
    var r = t[e];
    return r === EE ? void 0 : r;
  }
  return wE.call(t, e) ? t[e] : void 0;
}
var SE = AE,
  CE = Object.prototype,
  kE = CE.hasOwnProperty;
function _E(e) {
  var t = this.__data__;
  return qr ? t[e] !== void 0 : kE.call(t, e);
}
var OE = _E,
  TE = '__lodash_hash_undefined__';
function RE(e, t) {
  var r = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = qr && t === void 0 ? TE : t),
    this
  );
}
var FE = RE;
function hr(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
hr.prototype.clear = bE;
hr.prototype.delete = vE;
hr.prototype.get = SE;
hr.prototype.has = OE;
hr.prototype.set = FE;
var as = hr;
function $E() {
  (this.__data__ = []), (this.size = 0);
}
var DE = $E;
function LE(e, t) {
  for (var r = e.length; r--; ) if (mE(e[r][0], t)) return r;
  return -1;
}
var ra = LE,
  ME = Array.prototype,
  BE = ME.splice;
function IE(e) {
  var t = this.__data__,
    r = ra(t, e);
  if (r < 0) return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : BE.call(t, r, 1), --this.size, !0;
}
var PE = IE;
function jE(e) {
  var t = this.__data__,
    r = ra(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var NE = jE;
function HE(e) {
  return ra(this.__data__, e) > -1;
}
var ZE = HE;
function VE(e, t) {
  var r = this.__data__,
    n = ra(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
}
var zE = VE;
function br(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
br.prototype.clear = DE;
br.prototype.delete = PE;
br.prototype.get = NE;
br.prototype.has = ZE;
br.prototype.set = zE;
var qE = br,
  UE = b0(wl, 'Map'),
  WE = UE;
function GE() {
  (this.size = 0),
    (this.__data__ = {
      hash: new as(),
      map: new (WE || qE)(),
      string: new as(),
    });
}
var YE = GE;
function KE(e) {
  var t = typeof e;
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? e !== '__proto__'
    : e === null;
}
var XE = KE;
function JE(e, t) {
  var r = e.__data__;
  return XE(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
}
var na = JE;
function QE(e) {
  var t = na(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var e8 = QE;
function t8(e) {
  return na(this, e).get(e);
}
var r8 = t8;
function n8(e) {
  return na(this, e).has(e);
}
var a8 = n8;
function o8(e, t) {
  var r = na(this, e),
    n = r.size;
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
}
var l8 = o8;
function yr(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
yr.prototype.clear = YE;
yr.prototype.delete = e8;
yr.prototype.get = r8;
yr.prototype.has = a8;
yr.prototype.set = l8;
var y0 = yr,
  i8 = 'Expected a function';
function Al(e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function'))
    throw new TypeError(i8);
  var r = function () {
    var n = arguments,
      a = t ? t.apply(this, n) : n[0],
      l = r.cache;
    if (l.has(a)) return l.get(a);
    var i = e.apply(this, n);
    return (r.cache = l.set(a, i) || l), i;
  };
  return (r.cache = new (Al.Cache || y0)()), r;
}
Al.Cache = y0;
var s8 = Al,
  u8 = 500;
function c8(e) {
  var t = s8(e, function (n) {
      return r.size === u8 && r.clear(), n;
    }),
    r = t.cache;
  return t;
}
var d8 = c8,
  p8 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  f8 = /\\(\\)?/g;
d8(function (e) {
  var t = [];
  return (
    e.charCodeAt(0) === 46 && t.push(''),
    e.replace(p8, function (r, n, a, l) {
      t.push(a ? l.replace(f8, '$1') : n || r);
    }),
    t
  );
});
var m8 = A6,
  g8 = (e) => {
    let t = null,
      r = !1,
      n = !1,
      a = !1,
      l = '';
    if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
      for (let i = 0; i < e.length; i += 1)
        !t && !r && !n && !a
          ? e[i] === '"' || e[i] === "'" || e[i] === '`'
            ? (t = e[i])
            : e[i] === '/' && e[i + 1] === '*'
              ? (r = !0)
              : e[i] === '/' && e[i + 1] === '/'
                ? (n = !0)
                : e[i] === '/' && e[i + 1] !== '/' && (a = !0)
          : (t &&
              ((e[i] === t && e[i - 1] !== '\\') ||
                (e[i] ===
                  `
` &&
                  t !== '`')) &&
              (t = null),
            a &&
              ((e[i] === '/' && e[i - 1] !== '\\') ||
                e[i] ===
                  `
`) &&
              (a = !1),
            r && e[i - 1] === '/' && e[i - 2] === '*' && (r = !1),
            n &&
              e[i] ===
                `
` &&
              (n = !1)),
          !r && !n && (l += e[i]);
    else l = e;
    return l;
  },
  h8 = zt(1e4)((e) => g8(e).replace(/\n\s*/g, '').trim()),
  b8 = function (t, r) {
    const n = r.slice(0, r.indexOf('{')),
      a = r.slice(r.indexOf('{'));
    if (n.includes('=>') || n.includes('function')) return r;
    let l = n;
    return (l = l.replace(t, 'function')), l + a;
  },
  y8 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function v0(e) {
  if (!m8(e)) return e;
  let t = e,
    r = !1;
  return (
    typeof Event < 'u' && e instanceof Event && ((t = d6(t)), (r = !0)),
    (t = Object.keys(t).reduce((n, a) => {
      try {
        t[a] && t[a].toJSON, (n[a] = t[a]);
      } catch {
        r = !0;
      }
      return n;
    }, {})),
    r ? t : e
  );
}
var v8 = function (t) {
    let r, n, a, l;
    return function (u, s) {
      try {
        if (u === '')
          return (
            (l = []), (r = new Map([[s, '[]']])), (n = new Map()), (a = []), s
          );
        const c = n.get(this) || this;
        for (; a.length && c !== a[0]; ) a.shift(), l.pop();
        if (typeof s == 'boolean') return s;
        if (s === void 0) return t.allowUndefined ? '_undefined_' : void 0;
        if (s === null) return null;
        if (typeof s == 'number')
          return s === -1 / 0
            ? '_-Infinity_'
            : s === 1 / 0
              ? '_Infinity_'
              : Number.isNaN(s)
                ? '_NaN_'
                : s;
        if (typeof s == 'bigint') return `_bigint_${s.toString()}`;
        if (typeof s == 'string')
          return y8.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s;
        if ((0, E6.default)(s))
          return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
        if ((0, x6.default)(s)) {
          if (!t.allowFunction) return;
          const { name: f } = s,
            m = s.toString();
          return m.match(
            /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
          )
            ? `_function_${f}|${(() => {}).toString()}`
            : `_function_${f}|${h8(b8(u, m))}`;
        }
        if ((0, w6.default)(s)) {
          if (!t.allowSymbol) return;
          const f = Symbol.keyFor(s);
          return f !== void 0
            ? `_gsymbol_${f}`
            : `_symbol_${s.toString().slice(7, -1)}`;
        }
        if (a.length >= t.maxDepth)
          return Array.isArray(s) ? `[Array(${s.length})]` : '[Object]';
        if (s === this) return `_duplicate_${JSON.stringify(l)}`;
        if (s instanceof Error && t.allowError)
          return {
            __isConvertedError__: !0,
            errorProperties: {
              ...(s.cause ? { cause: s.cause } : {}),
              ...s,
              name: s.name,
              message: s.message,
              stack: s.stack,
              '_constructor-name_': s.constructor.name,
            },
          };
        if (
          s.constructor &&
          s.constructor.name &&
          s.constructor.name !== 'Object' &&
          !Array.isArray(s) &&
          !t.allowClass
        )
          return;
        const d = r.get(s);
        if (!d) {
          const f = Array.isArray(s) ? s : v0(s);
          if (
            s.constructor &&
            s.constructor.name &&
            s.constructor.name !== 'Object' &&
            !Array.isArray(s) &&
            t.allowClass
          )
            try {
              Object.assign(f, { '_constructor-name_': s.constructor.name });
            } catch {}
          return (
            l.push(u),
            a.unshift(f),
            r.set(s, JSON.stringify(l)),
            s !== f && n.set(s, f),
            f
          );
        }
        return `_duplicate_${d}`;
      } catch {
        return;
      }
    };
  },
  E8 = {
    maxDepth: 10,
    space: void 0,
    allowFunction: !0,
    allowRegExp: !0,
    allowDate: !0,
    allowClass: !0,
    allowError: !0,
    allowUndefined: !0,
    allowSymbol: !0,
    lazyEval: !0,
  },
  x8 = (e, t = {}) => {
    const r = { ...E8, ...t };
    return JSON.stringify(v0(e), v8(r), t.space);
  };
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 *//**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ var E0 = { exports: {} },
  Da,
  os;
function w8() {
  return (
    os ||
      ((os = 1),
      (Da = {
        tocSelector: '.js-toc',
        contentSelector: '.js-toc-content',
        headingSelector: 'h1, h2, h3',
        ignoreSelector: '.js-toc-ignore',
        hasInnerContainers: !1,
        linkClass: 'toc-link',
        extraLinkClasses: '',
        activeLinkClass: 'is-active-link',
        listClass: 'toc-list',
        extraListClasses: '',
        isCollapsedClass: 'is-collapsed',
        collapsibleClass: 'is-collapsible',
        listItemClass: 'toc-list-item',
        activeListItemClass: 'is-active-li',
        collapseDepth: 0,
        scrollSmooth: !0,
        scrollSmoothDuration: 420,
        scrollSmoothOffset: 0,
        scrollEndCallback: function (e) {},
        headingsOffset: 1,
        throttleTimeout: 50,
        positionFixedSelector: null,
        positionFixedClass: 'is-position-fixed',
        fixedSidebarOffset: 'auto',
        includeHtml: !1,
        includeTitleTags: !1,
        onClick: function (e) {},
        orderedList: !0,
        scrollContainer: null,
        skipRendering: !1,
        headingLabelCallback: !1,
        ignoreHiddenElements: !1,
        headingObjectCallback: null,
        basePath: '',
        disableTocScrollSync: !1,
        tocScrollOffset: 0,
      })),
    Da
  );
}
var La, ls;
function A8() {
  return (
    ls ||
      ((ls = 1),
      (La = function (e) {
        var t = [].forEach,
          r = [].some,
          n = document.body,
          a,
          l = !0,
          i = ' ';
        function u(v, y) {
          var E = y.appendChild(c(v));
          if (v.children.length) {
            var A = d(v.isCollapsed);
            v.children.forEach(function (S) {
              u(S, A);
            }),
              E.appendChild(A);
          }
        }
        function s(v, y) {
          var E = !1,
            A = d(E);
          if (
            (y.forEach(function (S) {
              u(S, A);
            }),
            (a = v || a),
            a !== null)
          )
            return (
              a.firstChild && a.removeChild(a.firstChild),
              y.length === 0 ? a : a.appendChild(A)
            );
        }
        function c(v) {
          var y = document.createElement('li'),
            E = document.createElement('a');
          return (
            e.listItemClass && y.setAttribute('class', e.listItemClass),
            e.onClick && (E.onclick = e.onClick),
            e.includeTitleTags && E.setAttribute('title', v.textContent),
            e.includeHtml && v.childNodes.length
              ? t.call(v.childNodes, function (A) {
                  E.appendChild(A.cloneNode(!0));
                })
              : (E.textContent = v.textContent),
            E.setAttribute('href', e.basePath + '#' + v.id),
            E.setAttribute(
              'class',
              e.linkClass +
                i +
                'node-name--' +
                v.nodeName +
                i +
                e.extraLinkClasses
            ),
            y.appendChild(E),
            y
          );
        }
        function d(v) {
          var y = e.orderedList ? 'ol' : 'ul',
            E = document.createElement(y),
            A = e.listClass + i + e.extraListClasses;
          return (
            v &&
              ((A = A + i + e.collapsibleClass),
              (A = A + i + e.isCollapsedClass)),
            E.setAttribute('class', A),
            E
          );
        }
        function f() {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var v;
            v = document.querySelector(e.scrollContainer).scrollTop;
          } else v = document.documentElement.scrollTop || n.scrollTop;
          var y = document.querySelector(e.positionFixedSelector);
          e.fixedSidebarOffset === 'auto' &&
            (e.fixedSidebarOffset = a.offsetTop),
            v > e.fixedSidebarOffset
              ? y.className.indexOf(e.positionFixedClass) === -1 &&
                (y.className += i + e.positionFixedClass)
              : (y.className = y.className.replace(
                  i + e.positionFixedClass,
                  ''
                ));
        }
        function m(v) {
          var y = 0;
          return (
            v !== null &&
              ((y = v.offsetTop),
              e.hasInnerContainers && (y += m(v.offsetParent))),
            y
          );
        }
        function p(v, y) {
          return v && v.className !== y && (v.className = y), v;
        }
        function h(v) {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var y;
            y = document.querySelector(e.scrollContainer).scrollTop;
          } else y = document.documentElement.scrollTop || n.scrollTop;
          e.positionFixedSelector && f();
          var E = v,
            A;
          if (l && a !== null && E.length > 0) {
            r.call(E, function (F, $) {
              if (m(F) > y + e.headingsOffset + 10) {
                var P = $ === 0 ? $ : $ - 1;
                return (A = E[P]), !0;
              } else if ($ === E.length - 1) return (A = E[E.length - 1]), !0;
            });
            var S = a.querySelector('.' + e.activeLinkClass),
              C = a.querySelector(
                '.' +
                  e.linkClass +
                  '.node-name--' +
                  A.nodeName +
                  '[href="' +
                  e.basePath +
                  '#' +
                  A.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, '\\$1') +
                  '"]'
              );
            if (S === C) return;
            var k = a.querySelectorAll('.' + e.linkClass);
            t.call(k, function (F) {
              p(F, F.className.replace(i + e.activeLinkClass, ''));
            });
            var O = a.querySelectorAll('.' + e.listItemClass);
            t.call(O, function (F) {
              p(F, F.className.replace(i + e.activeListItemClass, ''));
            }),
              C &&
                C.className.indexOf(e.activeLinkClass) === -1 &&
                (C.className += i + e.activeLinkClass);
            var T = C && C.parentNode;
            T &&
              T.className.indexOf(e.activeListItemClass) === -1 &&
              (T.className += i + e.activeListItemClass);
            var R = a.querySelectorAll(
              '.' + e.listClass + '.' + e.collapsibleClass
            );
            t.call(R, function (F) {
              F.className.indexOf(e.isCollapsedClass) === -1 &&
                (F.className += i + e.isCollapsedClass);
            }),
              C &&
                C.nextSibling &&
                C.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 &&
                p(
                  C.nextSibling,
                  C.nextSibling.className.replace(i + e.isCollapsedClass, '')
                ),
              g(C && C.parentNode.parentNode);
          }
        }
        function g(v) {
          return v &&
            v.className.indexOf(e.collapsibleClass) !== -1 &&
            v.className.indexOf(e.isCollapsedClass) !== -1
            ? (p(v, v.className.replace(i + e.isCollapsedClass, '')),
              g(v.parentNode.parentNode))
            : v;
        }
        function w(v) {
          var y = v.target || v.srcElement;
          typeof y.className != 'string' ||
            y.className.indexOf(e.linkClass) === -1 ||
            (l = !1);
        }
        function x() {
          l = !0;
        }
        return {
          enableTocAnimation: x,
          disableTocAnimation: w,
          render: s,
          updateToc: h,
        };
      })),
    La
  );
}
var Ma, is;
function S8() {
  return (
    is ||
      ((is = 1),
      (Ma = function (t) {
        var r = [].reduce;
        function n(d) {
          return d[d.length - 1];
        }
        function a(d) {
          return +d.nodeName.toUpperCase().replace('H', '');
        }
        function l(d) {
          try {
            return (
              d instanceof window.HTMLElement ||
              d instanceof window.parent.HTMLElement
            );
          } catch {
            return d instanceof window.HTMLElement;
          }
        }
        function i(d) {
          if (!l(d)) return d;
          if (t.ignoreHiddenElements && (!d.offsetHeight || !d.offsetParent))
            return null;
          const f =
            d.getAttribute('data-heading-label') ||
            (t.headingLabelCallback
              ? String(t.headingLabelCallback(d.innerText))
              : (d.innerText || d.textContent).trim());
          var m = {
            id: d.id,
            children: [],
            nodeName: d.nodeName,
            headingLevel: a(d),
            textContent: f,
          };
          return (
            t.includeHtml && (m.childNodes = d.childNodes),
            t.headingObjectCallback ? t.headingObjectCallback(m, d) : m
          );
        }
        function u(d, f) {
          for (
            var m = i(d),
              p = m.headingLevel,
              h = f,
              g = n(h),
              w = g ? g.headingLevel : 0,
              x = p - w;
            x > 0 && ((g = n(h)), !(g && p === g.headingLevel));

          )
            g && g.children !== void 0 && (h = g.children), x--;
          return p >= t.collapseDepth && (m.isCollapsed = !0), h.push(m), h;
        }
        function s(d, f) {
          var m = f;
          t.ignoreSelector &&
            (m = f.split(',').map(function (h) {
              return h.trim() + ':not(' + t.ignoreSelector + ')';
            }));
          try {
            return d.querySelectorAll(m);
          } catch {
            return console.warn('Headers not found with selector: ' + m), null;
          }
        }
        function c(d) {
          return r.call(
            d,
            function (m, p) {
              var h = i(p);
              return h && u(h, m.nest), m;
            },
            { nest: [] }
          );
        }
        return { nestHeadingsArray: c, selectHeadings: s };
      })),
    Ma
  );
}
var Ba, ss;
function C8() {
  if (ss) return Ba;
  ss = 1;
  const e = 30;
  return (
    (Ba = function (r) {
      var n = r.tocElement || document.querySelector(r.tocSelector);
      if (n && n.scrollHeight > n.clientHeight) {
        var a = n.querySelector('.' + r.activeListItemClass);
        if (a) {
          var l = n.scrollTop,
            i = l + n.clientHeight,
            u = a.offsetTop,
            s = u + a.clientHeight;
          u < l + r.tocScrollOffset
            ? (n.scrollTop -= l - u + r.tocScrollOffset)
            : s > i - r.tocScrollOffset - e &&
              (n.scrollTop += s - i + r.tocScrollOffset + 2 * e);
        }
      }
    }),
    Ba
  );
}
var Ia = {},
  us;
function k8() {
  if (us) return Ia;
  (us = 1), (Ia.initSmoothScrolling = e);
  function e(r) {
    var n = r.duration,
      a = r.offset,
      l = location.hash ? s(location.href) : location.href;
    i();
    function i() {
      document.body.addEventListener('click', d, !1);
      function d(f) {
        !u(f.target) ||
          f.target.className.indexOf('no-smooth-scroll') > -1 ||
          (f.target.href.charAt(f.target.href.length - 2) === '#' &&
            f.target.href.charAt(f.target.href.length - 1) === '!') ||
          f.target.className.indexOf(r.linkClass) === -1 ||
          t(f.target.hash, {
            duration: n,
            offset: a,
            callback: function () {
              c(f.target.hash);
            },
          });
      }
    }
    function u(d) {
      return (
        d.tagName.toLowerCase() === 'a' &&
        (d.hash.length > 0 || d.href.charAt(d.href.length - 1) === '#') &&
        (s(d.href) === l || s(d.href) + '#' === l)
      );
    }
    function s(d) {
      return d.slice(0, d.lastIndexOf('#'));
    }
    function c(d) {
      var f = document.getElementById(d.substring(1));
      f &&
        (/^(?:a|select|input|button|textarea)$/i.test(f.tagName) ||
          (f.tabIndex = -1),
        f.focus());
    }
  }
  function t(r, n) {
    var a = window.pageYOffset,
      l = {
        duration: n.duration,
        offset: n.offset || 0,
        callback: n.callback,
        easing: n.easing || p,
      },
      i =
        document.querySelector(
          '[id="' + decodeURI(r).split('#').join('') + '"]'
        ) || document.querySelector('[id="' + r.split('#').join('') + '"]'),
      u =
        typeof r == 'string'
          ? l.offset +
            (r
              ? (i && i.getBoundingClientRect().top) || 0
              : -(
                  document.documentElement.scrollTop || document.body.scrollTop
                ))
          : r,
      s = typeof l.duration == 'function' ? l.duration(u) : l.duration,
      c,
      d;
    requestAnimationFrame(function (h) {
      (c = h), f(h);
    });
    function f(h) {
      (d = h - c),
        window.scrollTo(0, l.easing(d, a, u, s)),
        d < s ? requestAnimationFrame(f) : m();
    }
    function m() {
      window.scrollTo(0, a + u),
        typeof l.callback == 'function' && l.callback();
    }
    function p(h, g, w, x) {
      return (
        (h /= x / 2),
        h < 1 ? (w / 2) * h * h + g : (h--, (-w / 2) * (h * (h - 2) - 1) + g)
      );
    }
  }
  return Ia;
}
(function (e, t) {
  (function (r, n) {
    e.exports = n(r);
  })(typeof sa < 'u' ? sa : window || sa, function (r) {
    var n = w8(),
      a = {},
      l = {},
      i = A8(),
      u = S8(),
      s = C8(),
      c,
      d,
      f =
        !!r &&
        !!r.document &&
        !!r.document.querySelector &&
        !!r.addEventListener;
    if (typeof window > 'u' && !f) return;
    var m,
      p = Object.prototype.hasOwnProperty;
    function h() {
      for (var v = {}, y = 0; y < arguments.length; y++) {
        var E = arguments[y];
        for (var A in E) p.call(E, A) && (v[A] = E[A]);
      }
      return v;
    }
    function g(v, y, E) {
      y || (y = 250);
      var A, S;
      return function () {
        var C = E || this,
          k = +new Date(),
          O = arguments;
        A && k < A + y
          ? (clearTimeout(S),
            (S = setTimeout(function () {
              (A = k), v.apply(C, O);
            }, y)))
          : ((A = k), v.apply(C, O));
      };
    }
    function w(v) {
      try {
        return v.contentElement || document.querySelector(v.contentSelector);
      } catch {
        return (
          console.warn('Contents element not found: ' + v.contentSelector), null
        );
      }
    }
    function x(v) {
      try {
        return v.tocElement || document.querySelector(v.tocSelector);
      } catch {
        return console.warn('TOC element not found: ' + v.tocSelector), null;
      }
    }
    return (
      (l.destroy = function () {
        var v = x(a);
        v !== null &&
          (a.skipRendering || (v && (v.innerHTML = '')),
          a.scrollContainer && document.querySelector(a.scrollContainer)
            ? (document
                .querySelector(a.scrollContainer)
                .removeEventListener('scroll', this._scrollListener, !1),
              document
                .querySelector(a.scrollContainer)
                .removeEventListener('resize', this._scrollListener, !1),
              c &&
                document
                  .querySelector(a.scrollContainer)
                  .removeEventListener('click', this._clickListener, !1))
            : (document.removeEventListener('scroll', this._scrollListener, !1),
              document.removeEventListener('resize', this._scrollListener, !1),
              c &&
                document.removeEventListener(
                  'click',
                  this._clickListener,
                  !1
                )));
      }),
      (l.init = function (v) {
        if (f) {
          (a = h(n, v || {})),
            (this.options = a),
            (this.state = {}),
            a.scrollSmooth &&
              ((a.duration = a.scrollSmoothDuration),
              (a.offset = a.scrollSmoothOffset),
              (l.scrollSmooth = k8().initSmoothScrolling(a))),
            (c = i(a)),
            (d = u(a)),
            (this._buildHtml = c),
            (this._parseContent = d),
            (this._headingsArray = m),
            l.destroy();
          var y = w(a);
          if (y !== null) {
            var E = x(a);
            if (
              E !== null &&
              ((m = d.selectHeadings(y, a.headingSelector)), m !== null)
            ) {
              var A = d.nestHeadingsArray(m),
                S = A.nest;
              if (!a.skipRendering) c.render(E, S);
              else return this;
              (this._scrollListener = g(function (k) {
                c.updateToc(m), !a.disableTocScrollSync && s(a);
                var O =
                  k &&
                  k.target &&
                  k.target.scrollingElement &&
                  k.target.scrollingElement.scrollTop === 0;
                ((k && (k.eventPhase === 0 || k.currentTarget === null)) ||
                  O) &&
                  (c.updateToc(m),
                  a.scrollEndCallback && a.scrollEndCallback(k));
              }, a.throttleTimeout)),
                this._scrollListener(),
                a.scrollContainer && document.querySelector(a.scrollContainer)
                  ? (document
                      .querySelector(a.scrollContainer)
                      .addEventListener('scroll', this._scrollListener, !1),
                    document
                      .querySelector(a.scrollContainer)
                      .addEventListener('resize', this._scrollListener, !1))
                  : (document.addEventListener(
                      'scroll',
                      this._scrollListener,
                      !1
                    ),
                    document.addEventListener(
                      'resize',
                      this._scrollListener,
                      !1
                    ));
              var C = null;
              return (
                (this._clickListener = g(function (k) {
                  a.scrollSmooth && c.disableTocAnimation(k),
                    c.updateToc(m),
                    C && clearTimeout(C),
                    (C = setTimeout(function () {
                      c.enableTocAnimation();
                    }, a.scrollSmoothDuration));
                }, a.throttleTimeout)),
                a.scrollContainer && document.querySelector(a.scrollContainer)
                  ? document
                      .querySelector(a.scrollContainer)
                      .addEventListener('click', this._clickListener, !1)
                  : document.addEventListener('click', this._clickListener, !1),
                this
              );
            }
          }
        }
      }),
      (l.refresh = function (v) {
        l.destroy(), l.init(v || this.options);
      }),
      (r.tocbot = l),
      l
    );
  });
})(E0);
var cs = E0.exports;
const { global: De } = __STORYBOOK_MODULE_GLOBAL__,
  { deprecate: de, once: _8, logger: Sl } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  {
    filterArgTypes: O8,
    composeConfigs: eA,
    Preview: tA,
    DocsContext: rA,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  {
    STORY_ARGS_UPDATED: ds,
    UPDATE_STORY_ARGS: T8,
    RESET_STORY_ARGS: R8,
    GLOBALS_UPDATED: ps,
    NAVIGATE_URL: F8,
  } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var $8 = _.div(ee, ({ theme: e }) => ({
    backgroundColor:
      e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
    borderRadius: e.appBorderRadius,
    border: `1px dashed ${e.appBorderColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: '25px 0 40px',
    color: Q(0.3, e.color.defaultText),
    fontSize: e.typography.size.s2,
  })),
  x0 = (e) =>
    o.createElement($8, { ...e, className: 'docblock-emptyblock sb-unstyled' }),
  D8 = _(Kn)(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: '19px',
    margin: '25px 0 40px',
    borderRadius: e.appBorderRadius,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    'pre.prismjs': { padding: 20, background: 'inherit' },
  })),
  L8 = _.div(({ theme: e }) => ({
    background: e.background.content,
    borderRadius: e.appBorderRadius,
    border: `1px solid ${e.appBorderColor}`,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    margin: '25px 0 40px',
    padding: '20px 20px 20px 22px',
  })),
  cn = _.div(({ theme: e }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    height: 17,
    marginTop: 1,
    width: '60%',
    [`&:first-child${Ja}`]: { margin: 0 },
  })),
  M8 = () =>
    o.createElement(
      L8,
      null,
      o.createElement(cn, null),
      o.createElement(cn, { style: { width: '80%' } }),
      o.createElement(cn, { style: { width: '30%' } }),
      o.createElement(cn, { style: { width: '80%' } })
    ),
  Cl = ({
    isLoading: e,
    error: t,
    language: r,
    code: n,
    dark: a,
    format: l,
    ...i
  }) => {
    if (e) return o.createElement(M8, null);
    if (t) return o.createElement(x0, null, t);
    let u = o.createElement(
      D8,
      {
        bordered: !0,
        copyable: !0,
        format: l,
        language: r,
        className: 'docblock-source sb-unstyled',
        ...i,
      },
      n
    );
    if (typeof a > 'u') return u;
    let s = a ? Ua.dark : Ua.light;
    return o.createElement(au, { theme: Xa(s) }, u);
  };
Cl.defaultProps = { format: !1 };
var oe = (e) =>
    `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
  kl = 600,
  B8 = _.h1(ee, ({ theme: e }) => ({
    color: e.color.defaultText,
    fontSize: e.typography.size.m3,
    fontWeight: e.typography.weight.bold,
    lineHeight: '32px',
    [`@media (min-width: ${kl}px)`]: {
      fontSize: e.typography.size.l1,
      lineHeight: '36px',
      marginBottom: '16px',
    },
  })),
  I8 = _.h2(ee, ({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s3,
    lineHeight: '20px',
    borderBottom: 'none',
    marginBottom: 15,
    [`@media (min-width: ${kl}px)`]: {
      fontSize: e.typography.size.m1,
      lineHeight: '28px',
      marginBottom: 24,
    },
    color: Q(0.25, e.color.defaultText),
  })),
  P8 = _.div(({ theme: e }) => {
    let t = {
        fontFamily: e.typography.fonts.base,
        fontSize: e.typography.size.s3,
        margin: 0,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        WebkitOverflowScrolling: 'touch',
      },
      r = {
        margin: '20px 0 8px',
        padding: 0,
        cursor: 'text',
        position: 'relative',
        color: e.color.defaultText,
        '&:first-of-type': { marginTop: 0, paddingTop: 0 },
        '&:hover a.anchor': { textDecoration: 'none' },
        '& code': { fontSize: 'inherit' },
      },
      n = {
        lineHeight: 1,
        margin: '0 2px',
        padding: '3px 5px',
        whiteSpace: 'nowrap',
        borderRadius: 3,
        fontSize: e.typography.size.s2 - 1,
        border:
          e.base === 'light'
            ? `1px solid ${e.color.mediumlight}`
            : `1px solid ${e.color.darker}`,
        color:
          e.base === 'light'
            ? Q(0.1, e.color.defaultText)
            : Q(0.3, e.color.defaultText),
        backgroundColor: e.base === 'light' ? e.color.lighter : e.color.border,
      };
    return {
      maxWidth: 1e3,
      width: '100%',
      [oe('a')]: {
        ...t,
        fontSize: 'inherit',
        lineHeight: '24px',
        color: e.color.secondary,
        textDecoration: 'none',
        '&.absent': { color: '#cc0000' },
        '&.anchor': {
          display: 'block',
          paddingLeft: 30,
          marginLeft: -30,
          cursor: 'pointer',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
        },
      },
      [oe('blockquote')]: {
        ...t,
        margin: '16px 0',
        borderLeft: `4px solid ${e.color.medium}`,
        padding: '0 15px',
        color: e.color.dark,
        '& > :first-of-type': { marginTop: 0 },
        '& > :last-child': { marginBottom: 0 },
      },
      [oe('div')]: t,
      [oe('dl')]: {
        ...t,
        margin: '16px 0',
        padding: 0,
        '& dt': {
          fontSize: '14px',
          fontWeight: 'bold',
          fontStyle: 'italic',
          padding: 0,
          margin: '16px 0 4px',
        },
        '& dt:first-of-type': { padding: 0 },
        '& dt > :first-of-type': { marginTop: 0 },
        '& dt > :last-child': { marginBottom: 0 },
        '& dd': { margin: '0 0 16px', padding: '0 15px' },
        '& dd > :first-of-type': { marginTop: 0 },
        '& dd > :last-child': { marginBottom: 0 },
      },
      [oe('h1')]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.l1}px`,
        fontWeight: e.typography.weight.bold,
      },
      [oe('h2')]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.m2}px`,
        paddingBottom: 4,
        borderBottom: `1px solid ${e.appBorderColor}`,
      },
      [oe('h3')]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.m1}px`,
        fontWeight: e.typography.weight.bold,
      },
      [oe('h4')]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
      [oe('h5')]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
      [oe('h6')]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.s2}px`,
        color: e.color.dark,
      },
      [oe('hr')]: {
        border: '0 none',
        borderTop: `1px solid ${e.appBorderColor}`,
        height: 4,
        padding: 0,
      },
      [oe('img')]: { maxWidth: '100%' },
      [oe('li')]: {
        ...t,
        fontSize: e.typography.size.s2,
        color: e.color.defaultText,
        lineHeight: '24px',
        '& + li': { marginTop: '.25em' },
        '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
        '& code': n,
      },
      [oe('ol')]: {
        ...t,
        margin: '16px 0',
        paddingLeft: 30,
        '& :first-of-type': { marginTop: 0 },
        '& :last-child': { marginBottom: 0 },
      },
      [oe('p')]: {
        ...t,
        margin: '16px 0',
        fontSize: e.typography.size.s2,
        lineHeight: '24px',
        color: e.color.defaultText,
        '& code': n,
      },
      [oe('pre')]: {
        ...t,
        fontFamily: e.typography.fonts.mono,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        lineHeight: '18px',
        padding: '11px 1rem',
        whiteSpace: 'pre-wrap',
        color: 'inherit',
        borderRadius: 3,
        margin: '1rem 0',
        '&:not(.prismjs)': {
          background: 'transparent',
          border: 'none',
          borderRadius: 0,
          padding: 0,
          margin: 0,
        },
        '& pre, &.prismjs': {
          padding: 15,
          margin: 0,
          whiteSpace: 'pre-wrap',
          color: 'inherit',
          fontSize: '13px',
          lineHeight: '19px',
          code: { color: 'inherit', fontSize: 'inherit' },
        },
        '& code': { whiteSpace: 'pre' },
        '& code, & tt': { border: 'none' },
      },
      [oe('span')]: {
        ...t,
        '&.frame': {
          display: 'block',
          overflow: 'hidden',
          '& > span': {
            border: `1px solid ${e.color.medium}`,
            display: 'block',
            float: 'left',
            overflow: 'hidden',
            margin: '13px 0 0',
            padding: 7,
            width: 'auto',
          },
          '& span img': { display: 'block', float: 'left' },
          '& span span': {
            clear: 'both',
            color: e.color.darkest,
            display: 'block',
            padding: '5px 0 0',
          },
        },
        '&.align-center': {
          display: 'block',
          overflow: 'hidden',
          clear: 'both',
          '& > span': {
            display: 'block',
            overflow: 'hidden',
            margin: '13px auto 0',
            textAlign: 'center',
          },
          '& span img': { margin: '0 auto', textAlign: 'center' },
        },
        '&.align-right': {
          display: 'block',
          overflow: 'hidden',
          clear: 'both',
          '& > span': {
            display: 'block',
            overflow: 'hidden',
            margin: '13px 0 0',
            textAlign: 'right',
          },
          '& span img': { margin: 0, textAlign: 'right' },
        },
        '&.float-left': {
          display: 'block',
          marginRight: 13,
          overflow: 'hidden',
          float: 'left',
          '& span': { margin: '13px 0 0' },
        },
        '&.float-right': {
          display: 'block',
          marginLeft: 13,
          overflow: 'hidden',
          float: 'right',
          '& > span': {
            display: 'block',
            overflow: 'hidden',
            margin: '13px auto 0',
            textAlign: 'right',
          },
        },
      },
      [oe('table')]: {
        ...t,
        margin: '16px 0',
        fontSize: e.typography.size.s2,
        lineHeight: '24px',
        padding: 0,
        borderCollapse: 'collapse',
        '& tr': {
          borderTop: `1px solid ${e.appBorderColor}`,
          backgroundColor: e.appContentBg,
          margin: 0,
          padding: 0,
        },
        '& tr:nth-of-type(2n)': {
          backgroundColor: e.base === 'dark' ? e.color.darker : e.color.lighter,
        },
        '& tr th': {
          fontWeight: 'bold',
          color: e.color.defaultText,
          border: `1px solid ${e.appBorderColor}`,
          margin: 0,
          padding: '6px 13px',
        },
        '& tr td': {
          border: `1px solid ${e.appBorderColor}`,
          color: e.color.defaultText,
          margin: 0,
          padding: '6px 13px',
        },
        '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
        '& tr th :last-child, & tr td :last-child': { marginBottom: 0 },
      },
      [oe('ul')]: {
        ...t,
        margin: '16px 0',
        paddingLeft: 30,
        '& :first-of-type': { marginTop: 0 },
        '& :last-child': { marginBottom: 0 },
        listStyle: 'disc',
      },
    };
  }),
  j8 = _.div(({ theme: e }) => ({
    background: e.background.content,
    display: 'flex',
    justifyContent: 'center',
    padding: '4rem 20px',
    minHeight: '100vh',
    boxSizing: 'border-box',
    gap: '3rem',
    [`@media (min-width: ${kl}px)`]: {},
  })),
  N8 = ({ children: e, toc: t }) =>
    o.createElement(
      j8,
      { className: 'sbdocs sbdocs-wrapper' },
      o.createElement(P8, { className: 'sbdocs sbdocs-content' }, e),
      t
    ),
  aa = (e) => ({
    borderRadius: e.appBorderRadius,
    background: e.background.content,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    border: `1px solid ${e.appBorderColor}`,
  }),
  H8 = ({ zoom: e, resetZoom: t }) =>
    o.createElement(
      o.Fragment,
      null,
      o.createElement(
        Ht,
        {
          key: 'zoomin',
          onClick: (r) => {
            r.preventDefault(), e(0.8);
          },
          title: 'Zoom in',
        },
        o.createElement(ye, { icon: 'zoom' })
      ),
      o.createElement(
        Ht,
        {
          key: 'zoomout',
          onClick: (r) => {
            r.preventDefault(), e(1.25);
          },
          title: 'Zoom out',
        },
        o.createElement(ye, { icon: 'zoomout' })
      ),
      o.createElement(
        Ht,
        {
          key: 'zoomreset',
          onClick: (r) => {
            r.preventDefault(), t();
          },
          title: 'Reset zoom',
        },
        o.createElement(ye, { icon: 'zoomreset' })
      )
    ),
  Z8 = _(Qn)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    transition: 'transform .2s linear',
  }),
  V8 = ({
    isLoading: e,
    storyId: t,
    baseUrl: r,
    zoom: n,
    resetZoom: a,
    ...l
  }) =>
    o.createElement(
      Z8,
      { ...l },
      o.createElement(
        b.Fragment,
        { key: 'left' },
        e
          ? [1, 2, 3].map((i) => o.createElement(Tc, { key: i }))
          : o.createElement(H8, { zoom: n, resetZoom: a })
      )
    ),
  w0 = b.createContext({ scale: 1 }),
  { window: z8 } = De,
  q8 = class extends b.Component {
    constructor() {
      super(...arguments), (this.iframe = null);
    }
    componentDidMount() {
      let { id: e } = this.props;
      this.iframe = z8.document.getElementById(e);
    }
    shouldComponentUpdate(e) {
      let { scale: t } = e;
      return (
        t !== this.props.scale &&
          this.setIframeBodyStyle({
            width: `${t * 100}%`,
            height: `${t * 100}%`,
            transform: `scale(${1 / t})`,
            transformOrigin: 'top left',
          }),
        !1
      );
    }
    setIframeBodyStyle(e) {
      return Object.assign(this.iframe.contentDocument.body.style, e);
    }
    render() {
      let {
        id: e,
        title: t,
        src: r,
        allowFullScreen: n,
        scale: a,
        ...l
      } = this.props;
      return o.createElement('iframe', {
        id: e,
        title: t,
        src: r,
        ...(n ? { allow: 'fullscreen' } : {}),
        loading: 'lazy',
        ...l,
      });
    }
  },
  { PREVIEW_URL: U8 } = De,
  W8 = U8 || 'iframe.html',
  Eo = ({ story: e, primary: t }) => `story--${e.id}${t ? '--primary' : ''}`,
  G8 = (e) => {
    let t = b.useRef(),
      [r, n] = b.useState(!0),
      [a, l] = b.useState(),
      {
        story: i,
        height: u,
        autoplay: s,
        forceInitialArgs: c,
        renderStoryToElement: d,
      } = e;
    return (
      b.useEffect(() => {
        if (!(i && t.current)) return () => {};
        let f = t.current,
          m = d(
            i,
            f,
            {
              showMain: () => {},
              showError: ({ title: p, description: h }) =>
                l(new Error(`${p} - ${h}`)),
              showException: (p) => l(p),
            },
            { autoplay: s, forceInitialArgs: c }
          );
        return (
          n(!1),
          () => {
            Promise.resolve().then(() => m());
          }
        );
      }, [s, d, i]),
      a
        ? o.createElement('pre', null, o.createElement(xc, { error: a }))
        : o.createElement(
            o.Fragment,
            null,
            u
              ? o.createElement(
                  'style',
                  null,
                  `#${Eo(e)} { min-height: ${u}; transform: translateZ(0); overflow: auto }`
                )
              : null,
            r && o.createElement(_l, null),
            o.createElement('div', {
              ref: t,
              id: `${Eo(e)}-inner`,
              'data-name': i.name,
            })
          )
    );
  },
  Y8 = ({ story: e, height: t = '500px' }) =>
    o.createElement(
      'div',
      { style: { width: '100%', height: t } },
      o.createElement(w0.Consumer, null, ({ scale: r }) =>
        o.createElement(q8, {
          key: 'iframe',
          id: `iframe--${e.id}`,
          title: e.name,
          src: Dc(W8, e.id, { viewMode: 'story' }),
          allowFullScreen: !0,
          scale: r,
          style: { width: '100%', height: '100%', border: '0 none' },
        })
      )
    ),
  K8 = (e) => {
    let { inline: t } = e;
    return o.createElement(
      'div',
      {
        id: Eo(e),
        className: 'sb-story sb-unstyled',
        'data-story-block': 'true',
      },
      t ? o.createElement(G8, { ...e }) : o.createElement(Y8, { ...e })
    );
  },
  _l = () => o.createElement($c, null),
  X8 = _.div(
    ({ isColumn: e, columns: t, layout: r }) => ({
      display: e || !t ? 'block' : 'flex',
      position: 'relative',
      flexWrap: 'wrap',
      overflow: 'auto',
      flexDirection: e ? 'column' : 'row',
      '& .innerZoomElementWrapper > *': e
        ? {
            width: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
            display: 'block',
          }
        : {
            maxWidth: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
            display: 'inline-block',
          },
    }),
    ({ layout: e = 'padded' }) =>
      e === 'centered' || e === 'padded'
        ? {
            padding: '30px 20px',
            '& .innerZoomElementWrapper > *': {
              width: 'auto',
              border: '10px solid transparent!important',
            },
          }
        : {},
    ({ layout: e = 'padded' }) =>
      e === 'centered'
        ? {
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }
        : {},
    ({ columns: e }) =>
      e && e > 1
        ? {
            '.innerZoomElementWrapper > *': {
              minWidth: `calc(100% / ${e} - 20px)`,
            },
          }
        : {}
  ),
  fs = _(Cl)(({ theme: e }) => ({
    margin: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: e.appBorderRadius,
    borderBottomRightRadius: e.appBorderRadius,
    border: 'none',
    background:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.85)'
        : Xe(0.05, e.background.content),
    color: e.color.lightest,
    button: {
      background:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.85)'
          : Xe(0.05, e.background.content),
    },
  })),
  J8 = _.div(
    ({ theme: e, withSource: t, isExpanded: r }) => ({
      position: 'relative',
      overflow: 'hidden',
      margin: '25px 0 40px',
      ...aa(e),
      borderBottomLeftRadius: t && r && 0,
      borderBottomRightRadius: t && r && 0,
      borderBottomWidth: r && 0,
      'h3 + &': { marginTop: '16px' },
    }),
    ({ withToolbar: e }) => e && { paddingTop: 40 }
  ),
  Q8 = (e, t, r) => {
    switch (!0) {
      case !!(e && e.error):
        return {
          source: null,
          actionItem: {
            title: 'No code available',
            className: 'docblock-code-toggle docblock-code-toggle--disabled',
            disabled: !0,
            onClick: () => r(!1),
          },
        };
      case t:
        return {
          source: o.createElement(fs, { ...e, dark: !0 }),
          actionItem: {
            title: 'Hide code',
            className: 'docblock-code-toggle docblock-code-toggle--expanded',
            onClick: () => r(!1),
          },
        };
      default:
        return {
          source: o.createElement(fs, { ...e, dark: !0 }),
          actionItem: {
            title: 'Show code',
            className: 'docblock-code-toggle',
            onClick: () => r(!0),
          },
        };
    }
  };
function ex(e) {
  if (b.Children.count(e) === 1) {
    let t = e;
    if (t.props) return t.props.id;
  }
  return null;
}
var tx = _(V8)({ position: 'absolute', top: 0, left: 0, right: 0, height: 40 }),
  rx = _.div({ overflow: 'hidden', position: 'relative' }),
  xo = ({
    isLoading: e,
    isColumn: t,
    columns: r,
    children: n,
    withSource: a,
    withToolbar: l = !1,
    isExpanded: i = !1,
    additionalActions: u,
    className: s,
    layout: c = 'padded',
    ...d
  }) => {
    let [f, m] = b.useState(i),
      { source: p, actionItem: h } = Q8(a, f, m),
      [g, w] = b.useState(1),
      x = [s].concat(['sbdocs', 'sbdocs-preview', 'sb-unstyled']),
      v = a ? [h] : [],
      [y, E] = b.useState(u ? [...u] : []),
      A = [...v, ...y],
      { window: S } = De,
      C = b.useCallback(async (O) => {
        let { createCopyToClipboardFunction: T } = await Zt(
          () => Promise.resolve().then(() => eb),
          void 0,
          import.meta.url
        );
        T();
      }, []),
      k = (O) => {
        let T = S.getSelection();
        (T && T.type === 'Range') ||
          (O.preventDefault(),
          y.filter((R) => R.title === 'Copied').length === 0 &&
            C(p.props.code).then(() => {
              E([...y, { title: 'Copied', onClick: () => {} }]),
                S.setTimeout(
                  () => E(y.filter((R) => R.title !== 'Copied')),
                  1500
                );
            }));
      };
    return o.createElement(
      J8,
      { withSource: a, withToolbar: l, ...d, className: x.join(' ') },
      l &&
        o.createElement(tx, {
          isLoading: e,
          border: !0,
          zoom: (O) => w(g * O),
          resetZoom: () => w(1),
          storyId: ex(n),
          baseUrl: './iframe.html',
        }),
      o.createElement(
        w0.Provider,
        { value: { scale: g } },
        o.createElement(
          rx,
          { className: 'docs-story', onCopyCapture: a && k },
          o.createElement(
            X8,
            { isColumn: t || !Array.isArray(n), columns: r, layout: c },
            o.createElement(
              Ec.Element,
              { scale: g },
              Array.isArray(n)
                ? n.map((O, T) => o.createElement('div', { key: T }, O))
                : o.createElement('div', null, n)
            )
          ),
          o.createElement(zo, { actionItems: A })
        )
      ),
      a && f && p
    );
  },
  nx = _(xo)(() => ({ '.docs-story': { paddingTop: 32, paddingBottom: 40 } })),
  ax = () =>
    o.createElement(
      nx,
      { isLoading: !0, withToolbar: !0 },
      o.createElement(_l, null)
    ),
  ox = _.table(({ theme: e }) => ({
    '&&': {
      borderCollapse: 'collapse',
      borderSpacing: 0,
      border: 'none',
      tr: { border: 'none !important', background: 'none' },
      'td, th': { padding: 0, border: 'none', width: 'auto!important' },
      marginTop: 0,
      marginBottom: 0,
      'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
      'th:last-of-type, td:last-of-type': { paddingRight: 0 },
      td: {
        paddingTop: 0,
        paddingBottom: 4,
        '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 },
      },
      tbody: { boxShadow: 'none', border: 'none' },
      code: ht({ theme: e }),
      div: { span: { fontWeight: 'bold' } },
      '& code': {
        margin: 0,
        display: 'inline-block',
        fontSize: e.typography.size.s1,
      },
    },
  })),
  lx = ({ tags: e }) => {
    let t = (e.params || []).filter((l) => l.description),
      r = t.length !== 0,
      n = e.deprecated != null,
      a = e.returns != null && e.returns.description != null;
    return !r && !a && !n
      ? null
      : o.createElement(
          o.Fragment,
          null,
          o.createElement(
            ox,
            null,
            o.createElement(
              'tbody',
              null,
              n &&
                o.createElement(
                  'tr',
                  { key: 'deprecated' },
                  o.createElement(
                    'td',
                    { colSpan: 2 },
                    o.createElement('strong', null, 'Deprecated'),
                    ': ',
                    e.deprecated
                  )
                ),
              r &&
                t.map((l) =>
                  o.createElement(
                    'tr',
                    { key: l.name },
                    o.createElement(
                      'td',
                      null,
                      o.createElement('code', null, l.name)
                    ),
                    o.createElement('td', null, l.description)
                  )
                ),
              a &&
                o.createElement(
                  'tr',
                  { key: 'returns' },
                  o.createElement(
                    'td',
                    null,
                    o.createElement('code', null, 'Returns')
                  ),
                  o.createElement('td', null, e.returns.description)
                )
            )
          )
        );
  },
  wo = 8,
  ms = _.div(({ isExpanded: e }) => ({
    display: 'flex',
    flexDirection: e ? 'column' : 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginBottom: '-4px',
    minWidth: 100,
  })),
  ix = _.span(ht, ({ theme: e, simple: t = !1 }) => ({
    flex: '0 0 auto',
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    maxWidth: '100%',
    margin: 0,
    marginRight: '4px',
    marginBottom: '4px',
    paddingTop: '2px',
    paddingBottom: '2px',
    lineHeight: '13px',
    ...(t && { background: 'transparent', border: '0 none', paddingLeft: 0 }),
  })),
  sx = _.button(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    marginBottom: '4px',
    background: 'none',
    border: 'none',
  })),
  ux = _.div(ht, ({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    fontSize: e.typography.size.s1,
    margin: 0,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
  })),
  cx = _.div(({ theme: e, width: t }) => ({
    width: t,
    minWidth: 200,
    maxWidth: 800,
    padding: 15,
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    boxSizing: 'content-box',
    '& code': { padding: '0 !important' },
  })),
  dx = _(ye)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
  px = () => o.createElement('span', null, '-'),
  A0 = ({ text: e, simple: t }) => o.createElement(ix, { simple: t }, e),
  fx = zt(1e3)((e) => {
    let t = e.split(/\r?\n/);
    return `${Math.max(...t.map((r) => r.length))}ch`;
  }),
  mx = (e) => {
    if (!e) return [e];
    let t = e.split('|').map((r) => r.trim());
    return yv(t);
  },
  gs = (e, t = !0) => {
    let r = e;
    return (
      t || (r = e.slice(0, wo)),
      r.map((n) => o.createElement(A0, { key: n, text: n === '' ? '""' : n }))
    );
  },
  gx = ({ value: e, initialExpandedArgs: t }) => {
    let { summary: r, detail: n } = e,
      [a, l] = b.useState(!1),
      [i, u] = b.useState(t || !1);
    if (r == null) return null;
    let s = typeof r.toString == 'function' ? r.toString() : r;
    if (n == null) {
      if (/[(){}[\]<>]/.test(s)) return o.createElement(A0, { text: s });
      let c = mx(s),
        d = c.length;
      return d > wo
        ? o.createElement(
            ms,
            { isExpanded: i },
            gs(c, i),
            o.createElement(
              sx,
              { onClick: () => u(!i) },
              i ? 'Show less...' : `Show ${d - wo} more...`
            )
          )
        : o.createElement(ms, null, gs(c));
    }
    return o.createElement(
      kc,
      {
        closeOnOutsideClick: !0,
        placement: 'bottom',
        visible: a,
        onVisibleChange: (c) => {
          l(c);
        },
        tooltip: o.createElement(
          cx,
          { width: fx(n) },
          o.createElement(Kn, { language: 'jsx', format: !1 }, n)
        ),
      },
      o.createElement(
        ux,
        { className: 'sbdocs-expandable' },
        o.createElement('span', null, s),
        o.createElement(dx, { icon: a ? 'arrowup' : 'arrowdown' })
      )
    );
  },
  Pa = ({ value: e, initialExpandedArgs: t }) =>
    e == null
      ? o.createElement(px, null)
      : o.createElement(gx, { value: e, initialExpandedArgs: t }),
  hx = _.label(({ theme: e }) => ({
    lineHeight: '18px',
    alignItems: 'center',
    marginBottom: 8,
    display: 'inline-block',
    position: 'relative',
    whiteSpace: 'nowrap',
    background: e.boolean.background,
    borderRadius: '3em',
    padding: 1,
    input: {
      appearance: 'none',
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      margin: 0,
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      borderRadius: '3em',
      '&:focus': {
        outline: 'none',
        boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
      },
    },
    span: {
      textAlign: 'center',
      fontSize: e.typography.size.s1,
      fontWeight: e.typography.weight.bold,
      lineHeight: '1',
      cursor: 'pointer',
      display: 'inline-block',
      padding: '7px 15px',
      transition: 'all 100ms ease-out',
      userSelect: 'none',
      borderRadius: '3em',
      color: Q(0.5, e.color.defaultText),
      background: 'transparent',
      '&:hover': { boxShadow: `${un(0.3, e.appBorderColor)} 0 0 0 1px inset` },
      '&:active': {
        boxShadow: `${un(0.05, e.appBorderColor)} 0 0 0 2px inset`,
        color: un(1, e.appBorderColor),
      },
      '&:first-of-type': { paddingRight: 8 },
      '&:last-of-type': { paddingLeft: 8 },
    },
    'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type':
      {
        background: e.boolean.selectedBackground,
        boxShadow:
          e.base === 'light'
            ? `${un(0.1, e.appBorderColor)} 0 0 2px`
            : `${e.appBorderColor} 0 0 0 1px`,
        color: e.color.defaultText,
        padding: '7px 15px',
      },
  })),
  bx = (e) => e === 'true',
  yx = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
    let l = b.useCallback(() => r(!1), [r]);
    if (t === void 0)
      return o.createElement(
        He.Button,
        { id: Bn(e), onClick: l },
        'Set boolean'
      );
    let i = Ze(e),
      u = typeof t == 'string' ? bx(t) : t;
    return o.createElement(
      hx,
      { htmlFor: i, 'aria-label': e },
      o.createElement('input', {
        id: i,
        type: 'checkbox',
        onChange: (s) => r(s.target.checked),
        checked: u,
        role: 'switch',
        name: e,
        onBlur: n,
        onFocus: a,
      }),
      o.createElement('span', { 'aria-hidden': 'true' }, 'False'),
      o.createElement('span', { 'aria-hidden': 'true' }, 'True')
    );
  },
  vx = (e) => {
    let [t, r, n] = e.split('-'),
      a = new Date();
    return (
      a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), a
    );
  },
  Ex = (e) => {
    let [t, r] = e.split(':'),
      n = new Date();
    return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
  },
  xx = (e) => {
    let t = new Date(e),
      r = `000${t.getFullYear()}`.slice(-4),
      n = `0${t.getMonth() + 1}`.slice(-2),
      a = `0${t.getDate()}`.slice(-2);
    return `${r}-${n}-${a}`;
  },
  wx = (e) => {
    let t = new Date(e),
      r = `0${t.getHours()}`.slice(-2),
      n = `0${t.getMinutes()}`.slice(-2);
    return `${r}:${n}`;
  },
  Ax = _.div(({ theme: e }) => ({
    flex: 1,
    display: 'flex',
    input: {
      marginLeft: 10,
      flex: 1,
      height: 32,
      '&::-webkit-calendar-picker-indicator': {
        opacity: 0.5,
        height: 12,
        filter: e.base === 'light' ? void 0 : 'invert(1)',
      },
    },
    'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
    'input:last-of-type': { flexGrow: 3 },
  })),
  Sx = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
    let [l, i] = b.useState(!0),
      u = b.useRef(),
      s = b.useRef();
    b.useEffect(() => {
      l !== !1 &&
        (u && u.current && (u.current.value = xx(t)),
        s && s.current && (s.current.value = wx(t)));
    }, [t]);
    let c = (m) => {
        let p = vx(m.target.value),
          h = new Date(t);
        h.setFullYear(p.getFullYear(), p.getMonth(), p.getDate());
        let g = h.getTime();
        g && r(g), i(!!g);
      },
      d = (m) => {
        let p = Ex(m.target.value),
          h = new Date(t);
        h.setHours(p.getHours()), h.setMinutes(p.getMinutes());
        let g = h.getTime();
        g && r(g), i(!!g);
      },
      f = Ze(e);
    return o.createElement(
      Ax,
      null,
      o.createElement(He.Input, {
        type: 'date',
        max: '9999-12-31',
        ref: u,
        id: `${f}-date`,
        name: `${f}-date`,
        onChange: c,
        onFocus: n,
        onBlur: a,
      }),
      o.createElement(He.Input, {
        type: 'time',
        id: `${f}-time`,
        name: `${f}-time`,
        ref: s,
        onChange: d,
        onFocus: n,
        onBlur: a,
      }),
      l ? null : o.createElement('div', null, 'invalid')
    );
  },
  Cx = _.label({ display: 'flex' }),
  kx = (e) => {
    let t = parseFloat(e);
    return Number.isNaN(t) ? void 0 : t;
  },
  _x = ({
    name: e,
    value: t,
    onChange: r,
    min: n,
    max: a,
    step: l,
    onBlur: i,
    onFocus: u,
  }) => {
    let [s, c] = b.useState(typeof t == 'number' ? t : ''),
      [d, f] = b.useState(!1),
      [m, p] = b.useState(null),
      h = b.useCallback(
        (x) => {
          c(x.target.value);
          let v = parseFloat(x.target.value);
          Number.isNaN(v)
            ? p(new Error(`'${x.target.value}' is not a number`))
            : (r(v), p(null));
        },
        [r, p]
      ),
      g = b.useCallback(() => {
        c('0'), r(0), f(!0);
      }, [f]),
      w = b.useRef(null);
    return (
      b.useEffect(() => {
        d && w.current && w.current.select();
      }, [d]),
      b.useEffect(() => {
        s !== (typeof t == 'number' ? t : '') && c(t);
      }, [t]),
      !d && t === void 0
        ? o.createElement(He.Button, { id: Bn(e), onClick: g }, 'Set number')
        : o.createElement(
            Cx,
            null,
            o.createElement(He.Input, {
              ref: w,
              id: Ze(e),
              type: 'number',
              onChange: h,
              size: 'flex',
              placeholder: 'Edit number...',
              value: s,
              valid: m ? 'error' : null,
              autoFocus: d,
              name: e,
              min: n,
              max: a,
              step: l,
              onFocus: u,
              onBlur: i,
            })
          )
    );
  },
  S0 = (e, t) => {
    let r = t && Object.entries(t).find(([n, a]) => a === e);
    return r ? r[0] : void 0;
  },
  Ao = (e, t) =>
    e && t
      ? Object.entries(t)
          .filter((r) => e.includes(r[1]))
          .map((r) => r[0])
      : [],
  C0 = (e, t) => e && t && e.map((r) => t[r]),
  Ox = _.div(({ isInline: e }) =>
    e
      ? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          label: { display: 'inline-flex', marginRight: 15 },
        }
      : { label: { display: 'flex' } }
  ),
  Tx = _.span({}),
  Rx = _.label({
    lineHeight: '20px',
    alignItems: 'center',
    marginBottom: 8,
    '&:last-child': { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 },
  }),
  hs = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
    if (!t)
      return (
        Sl.warn(`Checkbox with no options: ${e}`),
        o.createElement(o.Fragment, null, '-')
      );
    let l = Ao(r, t),
      [i, u] = b.useState(l),
      s = (d) => {
        let f = d.target.value,
          m = [...i];
        m.includes(f) ? m.splice(m.indexOf(f), 1) : m.push(f),
          n(C0(m, t)),
          u(m);
      };
    b.useEffect(() => {
      u(Ao(r, t));
    }, [r]);
    let c = Ze(e);
    return o.createElement(
      Ox,
      { isInline: a },
      Object.keys(t).map((d, f) => {
        let m = `${c}-${f}`;
        return o.createElement(
          Rx,
          { key: m, htmlFor: m },
          o.createElement('input', {
            type: 'checkbox',
            id: m,
            name: m,
            value: d,
            onChange: s,
            checked: i == null ? void 0 : i.includes(d),
          }),
          o.createElement(Tx, null, d)
        );
      })
    );
  },
  Fx = _.div(({ isInline: e }) =>
    e
      ? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          label: { display: 'inline-flex', marginRight: 15 },
        }
      : { label: { display: 'flex' } }
  ),
  $x = _.span({}),
  Dx = _.label({
    lineHeight: '20px',
    alignItems: 'center',
    marginBottom: 8,
    '&:last-child': { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 },
  }),
  bs = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
    if (!t)
      return (
        Sl.warn(`Radio with no options: ${e}`),
        o.createElement(o.Fragment, null, '-')
      );
    let l = S0(r, t),
      i = Ze(e);
    return o.createElement(
      Fx,
      { isInline: a },
      Object.keys(t).map((u, s) => {
        let c = `${i}-${s}`;
        return o.createElement(
          Dx,
          { key: c, htmlFor: c },
          o.createElement('input', {
            type: 'radio',
            id: c,
            name: c,
            value: u,
            onChange: (d) => n(t[d.currentTarget.value]),
            checked: u === l,
          }),
          o.createElement($x, null, u)
        );
      })
    );
  },
  Lx = {
    appearance: 'none',
    border: '0 none',
    boxSizing: 'inherit',
    display: ' block',
    margin: ' 0',
    background: 'transparent',
    padding: 0,
    fontSize: 'inherit',
    position: 'relative',
  },
  k0 = _.select(Lx, ({ theme: e }) => ({
    boxSizing: 'border-box',
    position: 'relative',
    padding: '6px 10px',
    width: '100%',
    color: e.input.color || 'inherit',
    background: e.input.background,
    borderRadius: e.input.borderRadius,
    boxShadow: `${e.input.border} 0 0 0 1px inset`,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: '20px',
    '&:focus': {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: 'none',
    },
    '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
    '::placeholder': { color: e.textMutedColor },
    '&[multiple]': {
      overflow: 'auto',
      padding: 0,
      option: {
        display: 'block',
        padding: '6px 10px',
        marginLeft: 1,
        marginRight: 1,
      },
    },
  })),
  _0 = _.span(({ theme: e }) => ({
    display: 'inline-block',
    lineHeight: 'normal',
    overflow: 'hidden',
    position: 'relative',
    verticalAlign: 'top',
    width: '100%',
    svg: {
      position: 'absolute',
      zIndex: 1,
      pointerEvents: 'none',
      height: '12px',
      marginTop: '-6px',
      right: '12px',
      top: '50%',
      fill: e.textMutedColor,
      path: { fill: e.textMutedColor },
    },
  })),
  ys = 'Choose option...',
  Mx = ({ name: e, value: t, options: r, onChange: n }) => {
    let a = (u) => {
        n(r[u.currentTarget.value]);
      },
      l = S0(t, r) || ys,
      i = Ze(e);
    return o.createElement(
      _0,
      null,
      o.createElement(ye, { icon: 'arrowdown' }),
      o.createElement(
        k0,
        { id: i, value: l, onChange: a },
        o.createElement('option', { key: 'no-selection', disabled: !0 }, ys),
        Object.keys(r).map((u) =>
          o.createElement('option', { key: u, value: u }, u)
        )
      )
    );
  },
  Bx = ({ name: e, value: t, options: r, onChange: n }) => {
    let a = (u) => {
        let s = Array.from(u.currentTarget.options)
          .filter((c) => c.selected)
          .map((c) => c.value);
        n(C0(s, r));
      },
      l = Ao(t, r),
      i = Ze(e);
    return o.createElement(
      _0,
      null,
      o.createElement(
        k0,
        { id: i, multiple: !0, value: l, onChange: a },
        Object.keys(r).map((u) =>
          o.createElement('option', { key: u, value: u }, u)
        )
      )
    );
  },
  vs = (e) => {
    let { name: t, options: r } = e;
    return r
      ? e.isMulti
        ? o.createElement(Bx, { ...e })
        : o.createElement(Mx, { ...e })
      : (Sl.warn(`Select with no options: ${t}`),
        o.createElement(o.Fragment, null, '-'));
  },
  Ix = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (r, n) => ((r[(t == null ? void 0 : t[n]) || String(n)] = n), r),
          {}
        )
      : e,
  Px = {
    check: hs,
    'inline-check': hs,
    radio: bs,
    'inline-radio': bs,
    select: vs,
    'multi-select': vs,
  },
  Xt = (e) => {
    let { type: t = 'select', labels: r, argType: n } = e,
      a = {
        ...e,
        options: n ? Ix(n.options, r) : {},
        isInline: t.includes('inline'),
        isMulti: t.includes('multi'),
      },
      l = Px[t];
    if (l) return o.createElement(l, { ...a });
    throw new Error(`Unknown options type: ${t}`);
  },
  Ol = 'value',
  jx = 'key',
  Nx = 'Error',
  Hx = 'Object',
  Zx = 'Array',
  Vx = 'String',
  zx = 'Number',
  qx = 'Boolean',
  Ux = 'Date',
  Wx = 'Null',
  Gx = 'Undefined',
  Yx = 'Function',
  Kx = 'Symbol',
  O0 = 'ADD_DELTA_TYPE',
  T0 = 'REMOVE_DELTA_TYPE',
  R0 = 'UPDATE_DELTA_TYPE';
function wt(e) {
  return e !== null &&
    typeof e == 'object' &&
    !Array.isArray(e) &&
    typeof e[Symbol.iterator] == 'function'
    ? 'Iterable'
    : Object.prototype.toString.call(e).slice(8, -1);
}
function F0(e, t) {
  let r = wt(e),
    n = wt(t);
  return (r === 'Function' || n === 'Function') && n !== r;
}
var Tl = class extends b.Component {
  constructor(e) {
    super(e),
      (this.state = { inputRefKey: null, inputRefValue: null }),
      (this.refInputValue = this.refInputValue.bind(this)),
      (this.refInputKey = this.refInputKey.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this)),
      (this.onSubmit = this.onSubmit.bind(this));
  }
  componentDidMount() {
    let { inputRefKey: e, inputRefValue: t } = this.state,
      { onlyValue: r } = this.props;
    e && typeof e.focus == 'function' && e.focus(),
      r && t && typeof t.focus == 'function' && t.focus(),
      document.addEventListener('keydown', this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === 'Enter' || e.key === 'Enter') &&
        (e.preventDefault(), this.onSubmit()),
      (e.code === 'Escape' || e.key === 'Escape') &&
        (e.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let {
        handleAdd: e,
        onlyValue: t,
        onSubmitValueParser: r,
        keyPath: n,
        deep: a,
      } = this.props,
      { inputRefKey: l, inputRefValue: i } = this.state,
      u = {};
    if (!t) {
      if (!l.value) return;
      u.key = l.value;
    }
    (u.newValue = r(!1, n, a, u.key, i.value)), e(u);
  }
  refInputKey(e) {
    this.state.inputRefKey = e;
  }
  refInputValue(e) {
    this.state.inputRefValue = e;
  }
  render() {
    let {
        handleCancel: e,
        onlyValue: t,
        addButtonElement: r,
        cancelButtonElement: n,
        inputElementGenerator: a,
        keyPath: l,
        deep: i,
      } = this.props,
      u = b.cloneElement(r, { onClick: this.onSubmit }),
      s = b.cloneElement(n, { onClick: e }),
      c = a(Ol, l, i),
      d = b.cloneElement(c, { placeholder: 'Value', ref: this.refInputValue }),
      f = null;
    if (!t) {
      let m = a(jx, l, i);
      f = b.cloneElement(m, { placeholder: 'Key', ref: this.refInputKey });
    }
    return o.createElement(
      'span',
      { className: 'rejt-add-value-node' },
      f,
      d,
      s,
      u
    );
  }
};
Tl.defaultProps = {
  onlyValue: !1,
  addButtonElement: o.createElement('button', null, '+'),
  cancelButtonElement: o.createElement('button', null, 'c'),
};
var $0 = class extends b.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      data: e.data,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1,
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state;
    (r[e] = t), this.setState({ data: r });
    let { onUpdate: a } = this.props,
      l = n.length;
    a(n[l - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleRemoveItem(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props,
        { data: n, keyPath: a, nextDeep: l } = this.state,
        i = n[e];
      t(e, a, l, i)
        .then(() => {
          let u = { keyPath: a, deep: l, key: e, oldValue: i, type: T0 };
          n.splice(e, 1), this.setState({ data: n });
          let { onUpdate: s, onDeltaUpdate: c } = this.props;
          s(a[a.length - 1], n), c(u);
        })
        .catch(r.error);
    };
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: t, keyPath: r, nextDeep: n } = this.state,
      { beforeAddAction: a, logger: l } = this.props;
    a(t.length, r, n, e)
      .then(() => {
        let i = [...t, e];
        this.setState({ data: i }), this.handleAddValueCancel();
        let { onUpdate: u, onDeltaUpdate: s } = this.props;
        u(r[r.length - 1], i),
          s({ type: O0, keyPath: r, deep: n, key: i.length - 1, newValue: e });
      })
      .catch(l.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: a } = this.props,
        { data: l, keyPath: i, nextDeep: u } = this.state,
        s = l[e];
      a(e, i, u, s, t)
        .then(() => {
          (l[e] = t), this.setState({ data: l });
          let { onUpdate: c, onDeltaUpdate: d } = this.props;
          c(i[i.length - 1], l),
            d({
              type: R0,
              keyPath: i,
              deep: u,
              key: e,
              newValue: t,
              oldValue: s,
            }),
            r(void 0);
        })
        .catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n } = this.state,
      {
        handleRemove: a,
        readOnly: l,
        getStyle: i,
        dataType: u,
        minusMenuElement: s,
      } = this.props,
      { minus: c, collapsed: d } = i(e, t, r, n, u),
      f = l(e, t, r, n, u),
      m = b.cloneElement(s, {
        onClick: a,
        className: 'rejt-minus-menu',
        style: c,
      });
    return o.createElement(
      'span',
      { className: 'rejt-collapsed' },
      o.createElement(
        'span',
        {
          className: 'rejt-collapsed-text',
          style: d,
          onClick: this.handleCollapseMode,
        },
        '[...] ',
        t.length,
        ' ',
        t.length === 1 ? 'item' : 'items'
      ),
      !f && m
    );
  }
  renderNotCollapsed() {
    let {
        name: e,
        data: t,
        keyPath: r,
        deep: n,
        addFormVisible: a,
        nextDeep: l,
      } = this.state,
      {
        isCollapsed: i,
        handleRemove: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: d,
        dataType: f,
        addButtonElement: m,
        cancelButtonElement: p,
        editButtonElement: h,
        inputElementGenerator: g,
        textareaElementGenerator: w,
        minusMenuElement: x,
        plusMenuElement: v,
        beforeRemoveAction: y,
        beforeAddAction: E,
        beforeUpdateAction: A,
        logger: S,
        onSubmitValueParser: C,
      } = this.props,
      { minus: k, plus: O, delimiter: T, ul: R, addForm: F } = d(e, t, r, n, f),
      $ = c(e, t, r, n, f),
      P = b.cloneElement(v, {
        onClick: this.handleAddMode,
        className: 'rejt-plus-menu',
        style: O,
      }),
      D = b.cloneElement(x, {
        onClick: u,
        className: 'rejt-minus-menu',
        style: k,
      });
    return o.createElement(
      'span',
      { className: 'rejt-not-collapsed' },
      o.createElement(
        'span',
        { className: 'rejt-not-collapsed-delimiter', style: T },
        '['
      ),
      !a && P,
      o.createElement(
        'ul',
        { className: 'rejt-not-collapsed-list', style: R },
        t.map((B, H) =>
          o.createElement(oa, {
            key: H,
            name: H.toString(),
            data: B,
            keyPath: r,
            deep: l,
            isCollapsed: i,
            handleRemove: this.handleRemoveItem(H),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: s,
            readOnly: c,
            getStyle: d,
            addButtonElement: m,
            cancelButtonElement: p,
            editButtonElement: h,
            inputElementGenerator: g,
            textareaElementGenerator: w,
            minusMenuElement: x,
            plusMenuElement: v,
            beforeRemoveAction: y,
            beforeAddAction: E,
            beforeUpdateAction: A,
            logger: S,
            onSubmitValueParser: C,
          })
        )
      ),
      !$ &&
        a &&
        o.createElement(
          'div',
          { className: 'rejt-add-form', style: F },
          o.createElement(Tl, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            onlyValue: !0,
            addButtonElement: m,
            cancelButtonElement: p,
            inputElementGenerator: g,
            keyPath: r,
            deep: n,
            onSubmitValueParser: C,
          })
        ),
      o.createElement(
        'span',
        { className: 'rejt-not-collapsed-delimiter', style: T },
        ']'
      ),
      !$ && D
    );
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
      { dataType: l, getStyle: i } = this.props,
      u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      s = i(e, r, n, a, l);
    return o.createElement(
      'div',
      { className: 'rejt-array-node' },
      o.createElement(
        'span',
        { onClick: this.handleCollapseMode },
        o.createElement(
          'span',
          { className: 'rejt-name', style: s.name },
          e,
          ' :',
          ' '
        )
      ),
      u
    );
  }
};
$0.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: o.createElement('span', null, ' - '),
  plusMenuElement: o.createElement('span', null, ' + '),
};
var D0 = class extends b.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      value: e.value,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      editEnabled: !1,
      inputRef: null,
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let {
        editEnabled: e,
        inputRef: t,
        name: r,
        value: n,
        keyPath: a,
        deep: l,
      } = this.state,
      { readOnly: i, dataType: u } = this.props,
      s = i(r, n, a, l, u);
    e && !s && typeof t.focus == 'function' && t.focus();
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === 'Enter' || e.key === 'Enter') &&
        (e.preventDefault(), this.handleEdit()),
      (e.code === 'Escape' || e.key === 'Escape') &&
        (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let {
        handleUpdateValue: e,
        originalValue: t,
        logger: r,
        onSubmitValueParser: n,
        keyPath: a,
      } = this.props,
      { inputRef: l, name: i, deep: u } = this.state;
    if (!l) return;
    let s = n(!0, a, u, i, l.value);
    e({ value: s, key: i })
      .then(() => {
        F0(t, s) || this.handleCancelEdit();
      })
      .catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: a } = this.state,
      {
        handleRemove: l,
        originalValue: i,
        readOnly: u,
        dataType: s,
        getStyle: c,
        editButtonElement: d,
        cancelButtonElement: f,
        textareaElementGenerator: m,
        minusMenuElement: p,
        keyPath: h,
      } = this.props,
      g = c(e, i, n, a, s),
      w = null,
      x = null,
      v = u(e, i, n, a, s);
    if (r && !v) {
      let y = m(Ol, h, a, e, i, s),
        E = b.cloneElement(d, { onClick: this.handleEdit }),
        A = b.cloneElement(f, { onClick: this.handleCancelEdit }),
        S = b.cloneElement(y, { ref: this.refInput, defaultValue: i });
      (w = o.createElement(
        'span',
        { className: 'rejt-edit-form', style: g.editForm },
        S,
        ' ',
        A,
        E
      )),
        (x = null);
    } else {
      w = o.createElement(
        'span',
        {
          className: 'rejt-value',
          style: g.value,
          onClick: v ? null : this.handleEditMode,
        },
        t
      );
      let y = b.cloneElement(p, {
        onClick: l,
        className: 'rejt-minus-menu',
        style: g.minus,
      });
      x = v ? null : y;
    }
    return o.createElement(
      'li',
      { className: 'rejt-function-value-node', style: g.li },
      o.createElement(
        'span',
        { className: 'rejt-name', style: g.name },
        e,
        ' :',
        ' '
      ),
      w,
      x
    );
  }
};
D0.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => {},
  editButtonElement: o.createElement('button', null, 'e'),
  cancelButtonElement: o.createElement('button', null, 'c'),
  minusMenuElement: o.createElement('span', null, ' - '),
};
var oa = class extends b.Component {
  constructor(e) {
    super(e),
      (this.state = {
        data: e.data,
        name: e.name,
        keyPath: e.keyPath,
        deep: e.deep,
      });
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  render() {
    let { data: e, name: t, keyPath: r, deep: n } = this.state,
      {
        isCollapsed: a,
        handleRemove: l,
        handleUpdateValue: i,
        onUpdate: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: d,
        addButtonElement: f,
        cancelButtonElement: m,
        editButtonElement: p,
        inputElementGenerator: h,
        textareaElementGenerator: g,
        minusMenuElement: w,
        plusMenuElement: x,
        beforeRemoveAction: v,
        beforeAddAction: y,
        beforeUpdateAction: E,
        logger: A,
        onSubmitValueParser: S,
      } = this.props,
      C = () => !0,
      k = wt(e);
    switch (k) {
      case Nx:
        return o.createElement(So, {
          data: e,
          name: t,
          isCollapsed: a,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: C,
          dataType: k,
          getStyle: d,
          addButtonElement: f,
          cancelButtonElement: m,
          editButtonElement: p,
          inputElementGenerator: h,
          textareaElementGenerator: g,
          minusMenuElement: w,
          plusMenuElement: x,
          beforeRemoveAction: v,
          beforeAddAction: y,
          beforeUpdateAction: E,
          logger: A,
          onSubmitValueParser: S,
        });
      case Hx:
        return o.createElement(So, {
          data: e,
          name: t,
          isCollapsed: a,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: c,
          dataType: k,
          getStyle: d,
          addButtonElement: f,
          cancelButtonElement: m,
          editButtonElement: p,
          inputElementGenerator: h,
          textareaElementGenerator: g,
          minusMenuElement: w,
          plusMenuElement: x,
          beforeRemoveAction: v,
          beforeAddAction: y,
          beforeUpdateAction: E,
          logger: A,
          onSubmitValueParser: S,
        });
      case Zx:
        return o.createElement($0, {
          data: e,
          name: t,
          isCollapsed: a,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: c,
          dataType: k,
          getStyle: d,
          addButtonElement: f,
          cancelButtonElement: m,
          editButtonElement: p,
          inputElementGenerator: h,
          textareaElementGenerator: g,
          minusMenuElement: w,
          plusMenuElement: x,
          beforeRemoveAction: v,
          beforeAddAction: y,
          beforeUpdateAction: E,
          logger: A,
          onSubmitValueParser: S,
        });
      case Vx:
        return o.createElement(Et, {
          name: t,
          value: `"${e}"`,
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: k,
          getStyle: d,
          cancelButtonElement: m,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: A,
          onSubmitValueParser: S,
        });
      case zx:
        return o.createElement(Et, {
          name: t,
          value: e,
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: k,
          getStyle: d,
          cancelButtonElement: m,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: A,
          onSubmitValueParser: S,
        });
      case qx:
        return o.createElement(Et, {
          name: t,
          value: e ? 'true' : 'false',
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: k,
          getStyle: d,
          cancelButtonElement: m,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: A,
          onSubmitValueParser: S,
        });
      case Ux:
        return o.createElement(Et, {
          name: t,
          value: e.toISOString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: C,
          dataType: k,
          getStyle: d,
          cancelButtonElement: m,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: A,
          onSubmitValueParser: S,
        });
      case Wx:
        return o.createElement(Et, {
          name: t,
          value: 'null',
          originalValue: 'null',
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: k,
          getStyle: d,
          cancelButtonElement: m,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: A,
          onSubmitValueParser: S,
        });
      case Gx:
        return o.createElement(Et, {
          name: t,
          value: 'undefined',
          originalValue: 'undefined',
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: k,
          getStyle: d,
          cancelButtonElement: m,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: A,
          onSubmitValueParser: S,
        });
      case Yx:
        return o.createElement(D0, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: k,
          getStyle: d,
          cancelButtonElement: m,
          editButtonElement: p,
          textareaElementGenerator: g,
          minusMenuElement: w,
          logger: A,
          onSubmitValueParser: S,
        });
      case Kx:
        return o.createElement(Et, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: C,
          dataType: k,
          getStyle: d,
          cancelButtonElement: m,
          editButtonElement: p,
          inputElementGenerator: h,
          minusMenuElement: w,
          logger: A,
          onSubmitValueParser: S,
        });
      default:
        return null;
    }
  }
};
oa.defaultProps = { keyPath: [], deep: 0 };
var So = class extends b.Component {
  constructor(e) {
    super(e);
    let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
    (this.state = {
      name: e.name,
      data: e.data,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1,
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state;
    (r[e] = t), this.setState({ data: r });
    let { onUpdate: a } = this.props,
      l = n.length;
    a(n[l - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleAddValueAdd({ key: e, newValue: t }) {
    let { data: r, keyPath: n, nextDeep: a } = this.state,
      { beforeAddAction: l, logger: i } = this.props;
    l(e, n, a, t)
      .then(() => {
        (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
        let { onUpdate: u, onDeltaUpdate: s } = this.props;
        u(n[n.length - 1], r),
          s({ type: O0, keyPath: n, deep: a, key: e, newValue: t });
      })
      .catch(i.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props,
        { data: n, keyPath: a, nextDeep: l } = this.state,
        i = n[e];
      t(e, a, l, i)
        .then(() => {
          let u = { keyPath: a, deep: l, key: e, oldValue: i, type: T0 };
          delete n[e], this.setState({ data: n });
          let { onUpdate: s, onDeltaUpdate: c } = this.props;
          s(a[a.length - 1], n), c(u);
        })
        .catch(r.error);
    };
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: a } = this.props,
        { data: l, keyPath: i, nextDeep: u } = this.state,
        s = l[e];
      a(e, i, u, s, t)
        .then(() => {
          (l[e] = t), this.setState({ data: l });
          let { onUpdate: c, onDeltaUpdate: d } = this.props;
          c(i[i.length - 1], l),
            d({
              type: R0,
              keyPath: i,
              deep: u,
              key: e,
              newValue: t,
              oldValue: s,
            }),
            r();
        })
        .catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, keyPath: t, deep: r, data: n } = this.state,
      {
        handleRemove: a,
        readOnly: l,
        dataType: i,
        getStyle: u,
        minusMenuElement: s,
      } = this.props,
      { minus: c, collapsed: d } = u(e, n, t, r, i),
      f = Object.getOwnPropertyNames(n),
      m = l(e, n, t, r, i),
      p = b.cloneElement(s, {
        onClick: a,
        className: 'rejt-minus-menu',
        style: c,
      });
    return o.createElement(
      'span',
      { className: 'rejt-collapsed' },
      o.createElement(
        'span',
        {
          className: 'rejt-collapsed-text',
          style: d,
          onClick: this.handleCollapseMode,
        },
        '{...}',
        ' ',
        f.length,
        ' ',
        f.length === 1 ? 'key' : 'keys'
      ),
      !m && p
    );
  }
  renderNotCollapsed() {
    let {
        name: e,
        data: t,
        keyPath: r,
        deep: n,
        nextDeep: a,
        addFormVisible: l,
      } = this.state,
      {
        isCollapsed: i,
        handleRemove: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: d,
        dataType: f,
        addButtonElement: m,
        cancelButtonElement: p,
        editButtonElement: h,
        inputElementGenerator: g,
        textareaElementGenerator: w,
        minusMenuElement: x,
        plusMenuElement: v,
        beforeRemoveAction: y,
        beforeAddAction: E,
        beforeUpdateAction: A,
        logger: S,
        onSubmitValueParser: C,
      } = this.props,
      { minus: k, plus: O, addForm: T, ul: R, delimiter: F } = d(e, t, r, n, f),
      $ = Object.getOwnPropertyNames(t),
      P = c(e, t, r, n, f),
      D = b.cloneElement(v, {
        onClick: this.handleAddMode,
        className: 'rejt-plus-menu',
        style: O,
      }),
      L = b.cloneElement(x, {
        onClick: u,
        className: 'rejt-minus-menu',
        style: k,
      }),
      N = $.map((H) =>
        o.createElement(oa, {
          key: H,
          name: H,
          data: t[H],
          keyPath: r,
          deep: a,
          isCollapsed: i,
          handleRemove: this.handleRemoveValue(H),
          handleUpdateValue: this.handleEditValue,
          onUpdate: this.onChildUpdate,
          onDeltaUpdate: s,
          readOnly: c,
          getStyle: d,
          addButtonElement: m,
          cancelButtonElement: p,
          editButtonElement: h,
          inputElementGenerator: g,
          textareaElementGenerator: w,
          minusMenuElement: x,
          plusMenuElement: v,
          beforeRemoveAction: y,
          beforeAddAction: E,
          beforeUpdateAction: A,
          logger: S,
          onSubmitValueParser: C,
        })
      );
    return o.createElement(
      'span',
      { className: 'rejt-not-collapsed' },
      o.createElement(
        'span',
        { className: 'rejt-not-collapsed-delimiter', style: F },
        '{'
      ),
      !P && D,
      o.createElement(
        'ul',
        { className: 'rejt-not-collapsed-list', style: R },
        N
      ),
      !P &&
        l &&
        o.createElement(
          'div',
          { className: 'rejt-add-form', style: T },
          o.createElement(Tl, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            addButtonElement: m,
            cancelButtonElement: p,
            inputElementGenerator: g,
            keyPath: r,
            deep: n,
            onSubmitValueParser: C,
          })
        ),
      o.createElement(
        'span',
        { className: 'rejt-not-collapsed-delimiter', style: F },
        '}'
      ),
      !P && L
    );
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
      { getStyle: l, dataType: i } = this.props,
      u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      s = l(e, r, n, a, i);
    return o.createElement(
      'div',
      { className: 'rejt-object-node' },
      o.createElement(
        'span',
        { onClick: this.handleCollapseMode },
        o.createElement(
          'span',
          { className: 'rejt-name', style: s.name },
          e,
          ' :',
          ' '
        )
      ),
      u
    );
  }
};
So.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: o.createElement('span', null, ' - '),
  plusMenuElement: o.createElement('span', null, ' + '),
};
var Et = class extends b.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    (this.state = {
      value: e.value,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      editEnabled: !1,
      inputRef: null,
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let {
        editEnabled: e,
        inputRef: t,
        name: r,
        value: n,
        keyPath: a,
        deep: l,
      } = this.state,
      { readOnly: i, dataType: u } = this.props,
      s = i(r, n, a, l, u);
    e && !s && typeof t.focus == 'function' && t.focus();
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown);
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === 'Enter' || e.key === 'Enter') &&
        (e.preventDefault(), this.handleEdit()),
      (e.code === 'Escape' || e.key === 'Escape') &&
        (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let {
        handleUpdateValue: e,
        originalValue: t,
        logger: r,
        onSubmitValueParser: n,
        keyPath: a,
      } = this.props,
      { inputRef: l, name: i, deep: u } = this.state;
    if (!l) return;
    let s = n(!0, a, u, i, l.value);
    e({ value: s, key: i })
      .then(() => {
        F0(t, s) || this.handleCancelEdit();
      })
      .catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: a } = this.state,
      {
        handleRemove: l,
        originalValue: i,
        readOnly: u,
        dataType: s,
        getStyle: c,
        editButtonElement: d,
        cancelButtonElement: f,
        inputElementGenerator: m,
        minusMenuElement: p,
        keyPath: h,
      } = this.props,
      g = c(e, i, n, a, s),
      w = u(e, i, n, a, s),
      x = r && !w,
      v = m(Ol, h, a, e, i, s),
      y = b.cloneElement(d, { onClick: this.handleEdit }),
      E = b.cloneElement(f, { onClick: this.handleCancelEdit }),
      A = b.cloneElement(v, {
        ref: this.refInput,
        defaultValue: JSON.stringify(i),
      }),
      S = b.cloneElement(p, {
        onClick: l,
        className: 'rejt-minus-menu',
        style: g.minus,
      });
    return o.createElement(
      'li',
      { className: 'rejt-value-node', style: g.li },
      o.createElement(
        'span',
        { className: 'rejt-name', style: g.name },
        e,
        ' : '
      ),
      x
        ? o.createElement(
            'span',
            { className: 'rejt-edit-form', style: g.editForm },
            A,
            ' ',
            E,
            y
          )
        : o.createElement(
            'span',
            {
              className: 'rejt-value',
              style: g.value,
              onClick: w ? null : this.handleEditMode,
            },
            String(t)
          ),
      !w && !x && S
    );
  }
};
Et.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => Promise.resolve(),
  editButtonElement: o.createElement('button', null, 'e'),
  cancelButtonElement: o.createElement('button', null, 'c'),
  minusMenuElement: o.createElement('span', null, ' - '),
};
var Xx = {
    minus: { color: 'red' },
    plus: { color: 'green' },
    collapsed: { color: 'grey' },
    delimiter: {},
    ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
    name: { color: '#2287CD' },
    addForm: {},
  },
  Jx = {
    minus: { color: 'red' },
    plus: { color: 'green' },
    collapsed: { color: 'grey' },
    delimiter: {},
    ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
    name: { color: '#2287CD' },
    addForm: {},
  },
  Qx = {
    minus: { color: 'red' },
    editForm: {},
    value: { color: '#7bba3d' },
    li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
    name: { color: '#2287CD' },
  };
function e9(e) {
  let t = e;
  if (t.indexOf('function') === 0) return (0, eval)(`(${t})`);
  try {
    t = JSON.parse(e);
  } catch {}
  return t;
}
var L0 = class extends b.Component {
  constructor(e) {
    super(e),
      (this.state = { data: e.data, rootName: e.rootName }),
      (this.onUpdate = this.onUpdate.bind(this)),
      (this.removeRoot = this.removeRoot.bind(this));
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data || e.rootName !== t.rootName
      ? { data: e.data, rootName: e.rootName }
      : null;
  }
  onUpdate(e, t) {
    this.setState({ data: t }), this.props.onFullyUpdate(t);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data: e, rootName: t } = this.state,
      {
        isCollapsed: r,
        onDeltaUpdate: n,
        readOnly: a,
        getStyle: l,
        addButtonElement: i,
        cancelButtonElement: u,
        editButtonElement: s,
        inputElement: c,
        textareaElement: d,
        minusMenuElement: f,
        plusMenuElement: m,
        beforeRemoveAction: p,
        beforeAddAction: h,
        beforeUpdateAction: g,
        logger: w,
        onSubmitValueParser: x,
        fallback: v = null,
      } = this.props,
      y = wt(e),
      E = a;
    wt(a) === 'Boolean' && (E = () => a);
    let A = c;
    c && wt(c) !== 'Function' && (A = () => c);
    let S = d;
    return (
      d && wt(d) !== 'Function' && (S = () => d),
      y === 'Object' || y === 'Array'
        ? o.createElement(
            'div',
            { className: 'rejt-tree' },
            o.createElement(oa, {
              data: e,
              name: t,
              deep: -1,
              isCollapsed: r,
              onUpdate: this.onUpdate,
              onDeltaUpdate: n,
              readOnly: E,
              getStyle: l,
              addButtonElement: i,
              cancelButtonElement: u,
              editButtonElement: s,
              inputElementGenerator: A,
              textareaElementGenerator: S,
              minusMenuElement: f,
              plusMenuElement: m,
              handleRemove: this.removeRoot,
              beforeRemoveAction: p,
              beforeAddAction: h,
              beforeUpdateAction: g,
              logger: w,
              onSubmitValueParser: x,
            })
          )
        : v
    );
  }
};
L0.defaultProps = {
  rootName: 'root',
  isCollapsed: (e, t) => t !== -1,
  getStyle: (e, t, r, n, a) => {
    switch (a) {
      case 'Object':
      case 'Error':
        return Xx;
      case 'Array':
        return Jx;
      default:
        return Qx;
    }
  },
  readOnly: () => !1,
  onFullyUpdate: () => {},
  onDeltaUpdate: () => {},
  beforeRemoveAction: () => Promise.resolve(),
  beforeAddAction: () => Promise.resolve(),
  beforeUpdateAction: () => Promise.resolve(),
  logger: { error: () => {} },
  onSubmitValueParser: (e, t, r, n, a) => e9(a),
  inputElement: () => o.createElement('input', null),
  textareaElement: () => o.createElement('textarea', null),
  fallback: null,
};
var { window: t9 } = De,
  r9 = _.div(({ theme: e }) => ({
    position: 'relative',
    display: 'flex',
    '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
    '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
      { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
    '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
      { '& > svg': { opacity: 1 } },
    '.rejt-edit-form button': { display: 'none' },
    '.rejt-add-form': { marginLeft: 10 },
    '.rejt-add-value-node': { display: 'inline-flex', alignItems: 'center' },
    '.rejt-name': { lineHeight: '22px' },
    '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
    '.rejt-plus-menu': { marginLeft: 5 },
    '.rejt-object-node > span > *, .rejt-array-node > span > *': {
      position: 'relative',
      zIndex: 2,
    },
    '.rejt-object-node, .rejt-array-node': { position: 'relative' },
    '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
      {
        content: '""',
        position: 'absolute',
        top: 0,
        display: 'block',
        width: '100%',
        marginLeft: '-1rem',
        padding: '0 4px 0 1rem',
        height: 22,
      },
    '.rejt-collapsed::before, .rejt-not-collapsed::before': {
      zIndex: 1,
      background: 'transparent',
      borderRadius: 4,
      transition: 'background 0.2s',
      pointerEvents: 'none',
      opacity: 0.1,
    },
    '.rejt-object-node:hover, .rejt-array-node:hover': {
      '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
        background: e.color.secondary,
      },
    },
    '.rejt-collapsed::after, .rejt-not-collapsed::after': {
      content: '""',
      position: 'absolute',
      display: 'inline-block',
      pointerEvents: 'none',
      width: 0,
      height: 0,
    },
    '.rejt-collapsed::after': {
      left: -8,
      top: 8,
      borderTop: '3px solid transparent',
      borderBottom: '3px solid transparent',
      borderLeft: '3px solid rgba(153,153,153,0.6)',
    },
    '.rejt-not-collapsed::after': {
      left: -10,
      top: 10,
      borderTop: '3px solid rgba(153,153,153,0.6)',
      borderLeft: '3px solid transparent',
      borderRight: '3px solid transparent',
    },
    '.rejt-value': {
      display: 'inline-block',
      border: '1px solid transparent',
      borderRadius: 4,
      margin: '1px 0',
      padding: '0 4px',
      cursor: 'text',
      color: e.color.defaultText,
    },
    '.rejt-value-node:hover > .rejt-value': {
      background: e.color.lighter,
      borderColor: e.appBorderColor,
    },
  })),
  ja = _.button(({ theme: e, primary: t }) => ({
    border: 0,
    height: 20,
    margin: 1,
    borderRadius: 4,
    background: t ? e.color.secondary : 'transparent',
    color: t ? e.color.lightest : e.color.dark,
    fontWeight: t ? 'bold' : 'normal',
    cursor: 'pointer',
    order: t ? 'initial' : 9,
  })),
  Es = _(ye)(({ theme: e, icon: t, disabled: r }) => ({
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 15,
    height: 15,
    padding: 3,
    marginLeft: 5,
    cursor: r ? 'not-allowed' : 'pointer',
    color: e.textMutedColor,
    '&:hover': r
      ? {}
      : { color: t === 'subtract' ? e.color.negative : e.color.ancillary },
    'svg + &': { marginLeft: 0 },
  })),
  xs = _.input(({ theme: e, placeholder: t }) => ({
    outline: 0,
    margin: t ? 1 : '1px 0',
    padding: '3px 4px',
    color: e.color.defaultText,
    background: e.background.app,
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: 4,
    lineHeight: '14px',
    width: t === 'Key' ? 80 : 120,
    '&:focus': { border: `1px solid ${e.color.secondary}` },
  })),
  n9 = _(Ht)(({ theme: e }) => ({
    position: 'absolute',
    zIndex: 2,
    top: 2,
    right: 2,
    height: 21,
    padding: '0 3px',
    background: e.background.bar,
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: 3,
    color: e.textMutedColor,
    fontSize: '9px',
    fontWeight: 'bold',
    textDecoration: 'none',
    span: { marginLeft: 3, marginTop: 1 },
  })),
  a9 = _(He.Textarea)(({ theme: e }) => ({
    flex: 1,
    padding: '7px 6px',
    fontFamily: e.typography.fonts.mono,
    fontSize: '12px',
    lineHeight: '18px',
    '&::placeholder': { fontFamily: e.typography.fonts.base, fontSize: '13px' },
    '&:placeholder-shown': { padding: '7px 10px' },
  })),
  o9 = {
    bubbles: !0,
    cancelable: !0,
    key: 'Enter',
    code: 'Enter',
    keyCode: 13,
  },
  l9 = (e) => {
    e.currentTarget.dispatchEvent(new t9.KeyboardEvent('keydown', o9));
  },
  i9 = (e) => {
    e.currentTarget.select();
  },
  s9 = (e) => () => ({
    name: { color: e.color.secondary },
    collapsed: { color: e.color.dark },
    ul: { listStyle: 'none', margin: '0 0 0 1rem', padding: 0 },
    li: { outline: 0 },
  }),
  ws = ({ name: e, value: t, onChange: r }) => {
    let n = ap(),
      a = b.useMemo(() => t && n6(t), [t]),
      l = a != null,
      [i, u] = b.useState(!l),
      [s, c] = b.useState(null),
      d = b.useCallback(
        (w) => {
          try {
            w && r(JSON.parse(w)), c(void 0);
          } catch (x) {
            c(x);
          }
        },
        [r]
      ),
      [f, m] = b.useState(!1),
      p = b.useCallback(() => {
        r({}), m(!0);
      }, [m]),
      h = b.useRef(null);
    if (
      (b.useEffect(() => {
        f && h.current && h.current.select();
      }, [f]),
      !l)
    )
      return o.createElement(
        He.Button,
        { id: Bn(e), onClick: p },
        'Set object'
      );
    let g = o.createElement(a9, {
      ref: h,
      id: Ze(e),
      name: e,
      defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
      onBlur: (w) => d(w.target.value),
      placeholder: 'Edit JSON string...',
      autoFocus: f,
      valid: s ? 'error' : null,
    });
    return o.createElement(
      r9,
      null,
      ['Object', 'Array'].includes(wt(a)) &&
        o.createElement(
          n9,
          {
            href: '#',
            onClick: (w) => {
              w.preventDefault(), u((x) => !x);
            },
          },
          o.createElement(ye, { icon: i ? 'eyeclose' : 'eye' }),
          o.createElement('span', null, 'RAW')
        ),
      i
        ? g
        : o.createElement(L0, {
            data: a,
            rootName: e,
            onFullyUpdate: r,
            getStyle: s9(n),
            cancelButtonElement: o.createElement(
              ja,
              { type: 'button' },
              'Cancel'
            ),
            editButtonElement: o.createElement(ja, { type: 'submit' }, 'Save'),
            addButtonElement: o.createElement(
              ja,
              { type: 'submit', primary: !0 },
              'Save'
            ),
            plusMenuElement: o.createElement(Es, { icon: 'add' }),
            minusMenuElement: o.createElement(Es, { icon: 'subtract' }),
            inputElement: (w, x, v, y) =>
              y
                ? o.createElement(xs, { onFocus: i9, onBlur: l9 })
                : o.createElement(xs, null),
            fallback: g,
          })
    );
  },
  u9 = _.input(({ theme: e, min: t, max: r, value: n }) => ({
    '&': { width: '100%', backgroundColor: 'transparent', appearance: 'none' },
    '&::-webkit-slider-runnable-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Xe(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Xe(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Mt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Mt(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: '100%',
      height: 6,
      cursor: 'pointer',
    },
    '&::-webkit-slider-thumb': {
      marginTop: '-6px',
      width: 16,
      height: 16,
      border: `1px solid ${tt(e.appBorderColor, 0.2)}`,
      borderRadius: '50px',
      boxShadow: `0 1px 3px 0px ${tt(e.appBorderColor, 0.2)}`,
      cursor: 'grab',
      appearance: 'none',
      background: `${e.input.background}`,
      transition: 'all 150ms ease-out',
      '&:hover': {
        background: `${Xe(0.05, e.input.background)}`,
        transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
        transition: 'all 50ms ease-out',
      },
      '&:active': {
        background: `${e.input.background}`,
        transform: 'scale3d(1, 1, 1) translateY(0px)',
        cursor: 'grabbing',
      },
    },
    '&:focus': {
      outline: 'none',
      '&::-webkit-slider-runnable-track': {
        borderColor: tt(e.color.secondary, 0.4),
      },
      '&::-webkit-slider-thumb': {
        borderColor: e.color.secondary,
        boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
      },
    },
    '&::-moz-range-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Xe(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Xe(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Mt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Mt(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: '100%',
      height: 6,
      cursor: 'pointer',
      outline: 'none',
    },
    '&::-moz-range-thumb': {
      width: 16,
      height: 16,
      border: `1px solid ${tt(e.appBorderColor, 0.2)}`,
      borderRadius: '50px',
      boxShadow: `0 1px 3px 0px ${tt(e.appBorderColor, 0.2)}`,
      cursor: 'grab',
      background: `${e.input.background}`,
      transition: 'all 150ms ease-out',
      '&:hover': {
        background: `${Xe(0.05, e.input.background)}`,
        transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
        transition: 'all 50ms ease-out',
      },
      '&:active': {
        background: `${e.input.background}`,
        transform: 'scale3d(1, 1, 1) translateY(0px)',
        cursor: 'grabbing',
      },
    },
    '&::-ms-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Xe(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Xe(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Mt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Mt(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      color: 'transparent',
      width: '100%',
      height: '6px',
      cursor: 'pointer',
    },
    '&::-ms-fill-lower': { borderRadius: 6 },
    '&::-ms-fill-upper': { borderRadius: 6 },
    '&::-ms-thumb': {
      width: 16,
      height: 16,
      background: `${e.input.background}`,
      border: `1px solid ${tt(e.appBorderColor, 0.2)}`,
      borderRadius: 50,
      cursor: 'grab',
      marginTop: 0,
    },
    '@supports (-ms-ime-align:auto)': { 'input[type=range]': { margin: '0' } },
  })),
  M0 = _.span({
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    whiteSpace: 'nowrap',
    fontFeatureSettings: 'tnum',
    fontVariantNumeric: 'tabular-nums',
  }),
  c9 = _(M0)(({ numberOFDecimalsPlaces: e, max: t }) => ({
    width: `${e + t.toString().length * 2 + 3}ch`,
    textAlign: 'right',
    flexShrink: 0,
  })),
  d9 = _.div({ display: 'flex', alignItems: 'center', width: '100%' });
function p9(e) {
  let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}
var f9 = ({
    name: e,
    value: t,
    onChange: r,
    min: n = 0,
    max: a = 100,
    step: l = 1,
    onBlur: i,
    onFocus: u,
  }) => {
    let s = (f) => {
        r(kx(f.target.value));
      },
      c = t !== void 0,
      d = b.useMemo(() => p9(l), [l]);
    return o.createElement(
      d9,
      null,
      o.createElement(M0, null, n),
      o.createElement(u9, {
        id: Ze(e),
        type: 'range',
        onChange: s,
        name: e,
        value: t,
        min: n,
        max: a,
        step: l,
        onFocus: u,
        onBlur: i,
      }),
      o.createElement(
        c9,
        { numberOFDecimalsPlaces: d, max: a },
        c ? t.toFixed(d) : '--',
        ' / ',
        a
      )
    );
  },
  m9 = _.label({ display: 'flex' }),
  g9 = _.div(({ isMaxed: e }) => ({
    marginLeft: '0.75rem',
    paddingTop: '0.35rem',
    color: e ? 'red' : void 0,
  })),
  h9 = ({
    name: e,
    value: t,
    onChange: r,
    onFocus: n,
    onBlur: a,
    maxLength: l,
  }) => {
    let i = (f) => {
        r(f.target.value);
      },
      [u, s] = b.useState(!1),
      c = b.useCallback(() => {
        r(''), s(!0);
      }, [s]);
    if (t === void 0)
      return o.createElement(
        He.Button,
        { id: Bn(e), onClick: c },
        'Set string'
      );
    let d = typeof t == 'string';
    return o.createElement(
      m9,
      null,
      o.createElement(He.Textarea, {
        id: Ze(e),
        maxLength: l,
        onChange: i,
        size: 'flex',
        placeholder: 'Edit string...',
        autoFocus: u,
        valid: d ? null : 'error',
        name: e,
        value: d ? t : '',
        onFocus: n,
        onBlur: a,
      }),
      l &&
        o.createElement(
          g9,
          { isMaxed: (t == null ? void 0 : t.length) === l },
          (t == null ? void 0 : t.length) ?? 0,
          ' / ',
          l
        )
    );
  },
  b9 = _(He.Input)({ padding: 10 });
function y9(e) {
  e.forEach((t) => {
    t.startsWith('blob:') && URL.revokeObjectURL(t);
  });
}
var v9 = ({ onChange: e, name: t, accept: r = 'image/*', value: n }) => {
    let a = b.useRef(null);
    function l(i) {
      if (!i.target.files) return;
      let u = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
      e(u), y9(n);
    }
    return (
      b.useEffect(() => {
        n == null && a.current && (a.current.value = null);
      }, [n, t]),
      o.createElement(b9, {
        ref: a,
        id: Ze(t),
        type: 'file',
        name: t,
        multiple: !0,
        onChange: l,
        accept: r,
        size: 'flex',
      })
    );
  },
  E9 = b.lazy(() =>
    Zt(
      () => import('./Color-6VNJS4EI-BNJ_cObI.js'),
      __vite__mapDeps([10, 2, 3, 6, 1, 4, 5, 7]),
      import.meta.url
    )
  ),
  x9 = (e) =>
    o.createElement(
      b.Suspense,
      { fallback: o.createElement('div', null) },
      o.createElement(E9, { ...e })
    ),
  w9 = {
    array: ws,
    object: ws,
    boolean: yx,
    color: x9,
    date: Sx,
    number: _x,
    check: Xt,
    'inline-check': Xt,
    radio: Xt,
    'inline-radio': Xt,
    select: Xt,
    'multi-select': Xt,
    range: f9,
    text: h9,
    file: v9,
  },
  As = () => o.createElement(o.Fragment, null, '-'),
  A9 = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
    let { key: a, control: l } = e,
      [i, u] = b.useState(!1),
      [s, c] = b.useState({ value: t });
    b.useEffect(() => {
      i || c({ value: t });
    }, [i, t]);
    let d = b.useCallback((g) => (c({ value: g }), r({ [a]: g }), g), [r, a]),
      f = b.useCallback(() => u(!1), []),
      m = b.useCallback(() => u(!0), []);
    if (!l || l.disable)
      return n
        ? o.createElement(
            At,
            {
              href: 'https://storybook.js.org/docs/react/essentials/controls',
              target: '_blank',
              withArrow: !0,
            },
            'Setup controls'
          )
        : o.createElement(As, null);
    let p = {
        name: a,
        argType: e,
        value: s.value,
        onChange: d,
        onBlur: f,
        onFocus: m,
      },
      h = w9[l.type] || As;
    return o.createElement(h, { ...p, ...l, controlType: l.type });
  },
  S9 = _.span({ fontWeight: 'bold' }),
  C9 = _.span(({ theme: e }) => ({
    color: e.color.negative,
    fontFamily: e.typography.fonts.mono,
    cursor: 'help',
  })),
  k9 = _.div(({ theme: e }) => ({
    '&&': { p: { margin: '0 0 10px 0' }, a: { color: e.color.secondary } },
    code: {
      ...ht({ theme: e }),
      fontSize: 12,
      fontFamily: e.typography.fonts.mono,
    },
    '& code': { margin: 0, display: 'inline-block' },
    '& pre > code': { whiteSpace: 'pre-wrap' },
  })),
  _9 = _.div(({ theme: e, hasDescription: t }) => ({
    color:
      e.base === 'light'
        ? Q(0.1, e.color.defaultText)
        : Q(0.2, e.color.defaultText),
    marginTop: t ? 4 : 0,
  })),
  O9 = _.div(({ theme: e, hasDescription: t }) => ({
    color:
      e.base === 'light'
        ? Q(0.1, e.color.defaultText)
        : Q(0.2, e.color.defaultText),
    marginTop: t ? 12 : 0,
    marginBottom: 12,
  })),
  T9 = _.td(({ theme: e, expandable: t }) => ({
    paddingLeft: t ? '40px !important' : '20px !important',
  })),
  dn = (e) => {
    var g;
    let [t, r] = b.useState(!1),
      {
        row: n,
        updateArgs: a,
        compact: l,
        expandable: i,
        initialExpandedArgs: u,
      } = e,
      { name: s, description: c } = n,
      d = n.table || {},
      f = d.type || n.type,
      m = d.defaultValue || n.defaultValue,
      p = (g = n.type) == null ? void 0 : g.required,
      h = c != null && c !== '';
    return o.createElement(
      'tr',
      { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) },
      o.createElement(
        T9,
        { expandable: i },
        o.createElement(S9, null, s),
        p ? o.createElement(C9, { title: 'Required' }, '*') : null
      ),
      l
        ? null
        : o.createElement(
            'td',
            null,
            h && o.createElement(k9, null, o.createElement(l0, null, c)),
            d.jsDocTags != null
              ? o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    O9,
                    { hasDescription: h },
                    o.createElement(Pa, { value: f, initialExpandedArgs: u })
                  ),
                  o.createElement(lx, { tags: d.jsDocTags })
                )
              : o.createElement(
                  _9,
                  { hasDescription: h },
                  o.createElement(Pa, { value: f, initialExpandedArgs: u })
                )
          ),
      l
        ? null
        : o.createElement(
            'td',
            null,
            o.createElement(Pa, { value: m, initialExpandedArgs: u })
          ),
      a
        ? o.createElement(
            'td',
            null,
            o.createElement(A9, { ...e, isHovered: t })
          )
        : null
    );
  },
  R9 = _(ye)(({ theme: e }) => ({
    marginRight: 8,
    marginLeft: -10,
    marginTop: -2,
    height: 12,
    width: 12,
    color:
      e.base === 'light'
        ? Q(0.25, e.color.defaultText)
        : Q(0.3, e.color.defaultText),
    border: 'none',
    display: 'inline-block',
  })),
  F9 = _.span(({ theme: e }) => ({
    display: 'flex',
    lineHeight: '20px',
    alignItems: 'center',
  })),
  $9 = _.td(({ theme: e }) => ({
    position: 'relative',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s1 - 1,
    color:
      e.base === 'light'
        ? Q(0.4, e.color.defaultText)
        : Q(0.6, e.color.defaultText),
    background: `${e.background.app} !important`,
    '& ~ td': { background: `${e.background.app} !important` },
  })),
  D9 = _.td(({ theme: e }) => ({
    position: 'relative',
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    background: e.background.app,
  })),
  L9 = _.td(() => ({ position: 'relative' })),
  M9 = _.tr(({ theme: e }) => ({
    '&:hover > td': {
      backgroundColor: `${Mt(0.005, e.background.app)} !important`,
      boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
      cursor: 'row-resize',
    },
  })),
  Ss = _.button(() => ({
    background: 'none',
    border: 'none',
    padding: '0',
    font: 'inherit',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    color: 'transparent',
    cursor: 'row-resize !important',
  })),
  Na = ({
    level: e = 'section',
    label: t,
    children: r,
    initialExpanded: n = !0,
    colSpan: a = 3,
  }) => {
    let [l, i] = b.useState(n),
      u = e === 'subsection' ? D9 : $9,
      s = (r == null ? void 0 : r.length) || 0,
      c = e === 'subsection' ? `${s} item${s !== 1 ? 's' : ''}` : '',
      d = l ? 'arrowdown' : 'arrowright',
      f = `${l ? 'Hide' : 'Show'} ${e === 'subsection' ? s : t} item${s !== 1 ? 's' : ''}`;
    return o.createElement(
      o.Fragment,
      null,
      o.createElement(
        M9,
        { title: f },
        o.createElement(
          u,
          { colSpan: 1 },
          o.createElement(Ss, { onClick: (m) => i(!l), tabIndex: 0 }, f),
          o.createElement(F9, null, o.createElement(R9, { icon: d }), t)
        ),
        o.createElement(
          L9,
          { colSpan: a - 1 },
          o.createElement(
            Ss,
            { onClick: (m) => i(!l), tabIndex: -1, style: { outline: 'none' } },
            f
          ),
          l ? null : c
        )
      ),
      l ? r : null
    );
  },
  pn = _.div(({ theme: e }) => ({
    display: 'flex',
    gap: 16,
    borderBottom: `1px solid ${e.appBorderColor}`,
    '&:last-child': { borderBottom: 0 },
  })),
  fe = _.div(({ numColumn: e }) => ({
    display: 'flex',
    flexDirection: 'column',
    flex: e || 1,
    gap: 5,
    padding: '12px 20px',
  })),
  le = _.div(({ theme: e, width: t, height: r }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    width: t || '100%',
    height: r || 16,
    borderRadius: 3,
  })),
  me = [2, 4, 2, 2],
  B9 = () =>
    o.createElement(
      o.Fragment,
      null,
      o.createElement(
        pn,
        null,
        o.createElement(
          fe,
          { numColumn: me[0] },
          o.createElement(le, { width: '60%' })
        ),
        o.createElement(
          fe,
          { numColumn: me[1] },
          o.createElement(le, { width: '30%' })
        ),
        o.createElement(
          fe,
          { numColumn: me[2] },
          o.createElement(le, { width: '60%' })
        ),
        o.createElement(
          fe,
          { numColumn: me[3] },
          o.createElement(le, { width: '60%' })
        )
      ),
      o.createElement(
        pn,
        null,
        o.createElement(
          fe,
          { numColumn: me[0] },
          o.createElement(le, { width: '60%' })
        ),
        o.createElement(
          fe,
          { numColumn: me[1] },
          o.createElement(le, { width: '80%' }),
          o.createElement(le, { width: '30%' })
        ),
        o.createElement(
          fe,
          { numColumn: me[2] },
          o.createElement(le, { width: '60%' })
        ),
        o.createElement(
          fe,
          { numColumn: me[3] },
          o.createElement(le, { width: '60%' })
        )
      ),
      o.createElement(
        pn,
        null,
        o.createElement(
          fe,
          { numColumn: me[0] },
          o.createElement(le, { width: '60%' })
        ),
        o.createElement(
          fe,
          { numColumn: me[1] },
          o.createElement(le, { width: '80%' }),
          o.createElement(le, { width: '30%' })
        ),
        o.createElement(
          fe,
          { numColumn: me[2] },
          o.createElement(le, { width: '60%' })
        ),
        o.createElement(
          fe,
          { numColumn: me[3] },
          o.createElement(le, { width: '60%' })
        )
      ),
      o.createElement(
        pn,
        null,
        o.createElement(
          fe,
          { numColumn: me[0] },
          o.createElement(le, { width: '60%' })
        ),
        o.createElement(
          fe,
          { numColumn: me[1] },
          o.createElement(le, { width: '80%' }),
          o.createElement(le, { width: '30%' })
        ),
        o.createElement(
          fe,
          { numColumn: me[2] },
          o.createElement(le, { width: '60%' })
        ),
        o.createElement(
          fe,
          { numColumn: me[3] },
          o.createElement(le, { width: '60%' })
        )
      )
    ),
  I9 = _.div(({ inAddonPanel: e, theme: t }) => ({
    height: e ? '100%' : 'auto',
    display: 'flex',
    border: e ? 'none' : `1px solid ${t.appBorderColor}`,
    borderRadius: e ? 0 : t.appBorderRadius,
    padding: e ? 0 : 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 15,
    background: t.background.content,
    boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
  })),
  P9 = _.div({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    maxWidth: 415,
  }),
  j9 = _.div(({ theme: e }) => ({
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    textAlign: 'center',
    color: e.textColor,
  })),
  N9 = _.div(({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s2 - 1,
    textAlign: 'center',
    color: e.textMutedColor,
  })),
  H9 = _.div(({ theme: e }) => ({
    display: 'flex',
    fontSize: e.typography.size.s2 - 1,
    gap: 25,
  })),
  Z9 = _.div(({ theme: e }) => ({
    width: 1,
    height: 16,
    backgroundColor: e.appBorderColor,
  })),
  V9 = ({ inAddonPanel: e }) => {
    let [t, r] = b.useState(!0);
    return (
      b.useEffect(() => {
        let n = setTimeout(() => {
          r(!1);
        }, 100);
        return () => clearTimeout(n);
      }, []),
      t
        ? null
        : o.createElement(
            I9,
            { inAddonPanel: e },
            o.createElement(
              P9,
              null,
              o.createElement(
                j9,
                null,
                e
                  ? 'Interactive story playground'
                  : "Args table with interactive controls couldn't be auto-generated"
              ),
              o.createElement(
                N9,
                null,
                "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."
              )
            ),
            o.createElement(
              H9,
              null,
              e &&
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    At,
                    {
                      href: 'https://youtu.be/0gOfS6K0x0E',
                      target: '_blank',
                      withArrow: !0,
                    },
                    o.createElement(ye, { icon: 'video' }),
                    ' Watch 5m video'
                  ),
                  o.createElement(Z9, null),
                  o.createElement(
                    At,
                    {
                      href: 'https://storybook.js.org/docs/react/essentials/controls',
                      target: '_blank',
                      withArrow: !0,
                    },
                    'Read docs'
                  )
                ),
              !e &&
                o.createElement(
                  At,
                  {
                    href: 'https://storybook.js.org/docs/react/essentials/controls',
                    target: '_blank',
                    withArrow: !0,
                  },
                  'Learn how to set that up'
                )
            )
          )
    );
  },
  z9 = _.table(({ theme: e, compact: t, inAddonPanel: r }) => ({
    '&&': {
      borderSpacing: 0,
      color: e.color.defaultText,
      'td, th': {
        padding: 0,
        border: 'none',
        verticalAlign: 'top',
        textOverflow: 'ellipsis',
      },
      fontSize: e.typography.size.s2 - 1,
      lineHeight: '20px',
      textAlign: 'left',
      width: '100%',
      marginTop: r ? 0 : 25,
      marginBottom: r ? 0 : 40,
      'thead th:first-of-type, td:first-of-type': { width: '25%' },
      'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
      'th:nth-of-type(2), td:nth-of-type(2)': {
        ...(t ? null : { width: '35%' }),
      },
      'td:nth-of-type(3)': { ...(t ? null : { width: '15%' }) },
      'th:last-of-type, td:last-of-type': {
        paddingRight: 20,
        ...(t ? null : { width: '25%' }),
      },
      th: {
        color:
          e.base === 'light'
            ? Q(0.25, e.color.defaultText)
            : Q(0.45, e.color.defaultText),
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
      },
      td: {
        paddingTop: '10px',
        paddingBottom: '10px',
        '&:not(:first-of-type)': { paddingLeft: 15, paddingRight: 15 },
        '&:last-of-type': { paddingRight: 20 },
      },
      marginLeft: r ? 0 : 1,
      marginRight: r ? 0 : 1,
      tbody: {
        ...(r
          ? null
          : {
              filter:
                e.base === 'light'
                  ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                  : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))',
            }),
        '> tr > *': {
          background: e.background.content,
          borderTop: `1px solid ${e.appBorderColor}`,
        },
        ...(r
          ? null
          : {
              '> tr:first-of-type > *': {
                borderBlockStart: `1px solid ${e.appBorderColor}`,
              },
              '> tr:last-of-type > *': {
                borderBlockEnd: `1px solid ${e.appBorderColor}`,
              },
              '> tr > *:first-of-type': {
                borderInlineStart: `1px solid ${e.appBorderColor}`,
              },
              '> tr > *:last-of-type': {
                borderInlineEnd: `1px solid ${e.appBorderColor}`,
              },
              '> tr:first-of-type > td:first-of-type': {
                borderTopLeftRadius: e.appBorderRadius,
              },
              '> tr:first-of-type > td:last-of-type': {
                borderTopRightRadius: e.appBorderRadius,
              },
              '> tr:last-of-type > td:first-of-type': {
                borderBottomLeftRadius: e.appBorderRadius,
              },
              '> tr:last-of-type > td:last-of-type': {
                borderBottomRightRadius: e.appBorderRadius,
              },
            }),
      },
    },
  })),
  q9 = _(Ht)(({ theme: e }) => ({
    color: e.barTextColor,
    margin: '-4px -12px -4px 0',
  })),
  U9 = _.span({ display: 'flex', justifyContent: 'space-between' }),
  W9 = {
    alpha: (e, t) => e.name.localeCompare(t.name),
    requiredFirst: (e, t) => {
      var r, n;
      return (
        +!!((r = t.type) != null && r.required) -
          +!!((n = e.type) != null && n.required) ||
        e.name.localeCompare(t.name)
      );
    },
    none: void 0,
  },
  G9 = (e, t) => {
    let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
    if (!e) return r;
    Object.entries(e).forEach(([l, i]) => {
      let { category: u, subcategory: s } =
        (i == null ? void 0 : i.table) || {};
      if (u) {
        let c = r.sections[u] || { ungrouped: [], subsections: {} };
        if (!s) c.ungrouped.push({ key: l, ...i });
        else {
          let d = c.subsections[s] || [];
          d.push({ key: l, ...i }), (c.subsections[s] = d);
        }
        r.sections[u] = c;
      } else if (s) {
        let c = r.ungroupedSubsections[s] || [];
        c.push({ key: l, ...i }), (r.ungroupedSubsections[s] = c);
      } else r.ungrouped.push({ key: l, ...i });
    });
    let n = W9[t],
      a = (l) =>
        n
          ? Object.keys(l).reduce((i, u) => ({ ...i, [u]: l[u].sort(n) }), {})
          : l;
    return {
      ungrouped: r.ungrouped.sort(n),
      ungroupedSubsections: a(r.ungroupedSubsections),
      sections: Object.keys(r.sections).reduce(
        (l, i) => ({
          ...l,
          [i]: {
            ungrouped: r.sections[i].ungrouped.sort(n),
            subsections: a(r.sections[i].subsections),
          },
        }),
        {}
      ),
    };
  },
  Y9 = (e, t, r) => {
    try {
      return W0(e, t, r);
    } catch (n) {
      return _8.warn(n.message), !1;
    }
  },
  K9 = (e) => {
    let {
      updateArgs: t,
      resetArgs: r,
      compact: n,
      inAddonPanel: a,
      initialExpandedArgs: l,
      sort: i = 'none',
      isLoading: u,
    } = e;
    if ('error' in e) {
      let { error: v } = e;
      return o.createElement(
        x0,
        null,
        v,
        ' ',
        o.createElement(
          At,
          {
            href: 'http://storybook.js.org/docs/',
            target: '_blank',
            withArrow: !0,
          },
          'Read the docs'
        )
      );
    }
    if (u) return o.createElement(B9, null);
    let { rows: s, args: c, globals: d } = 'rows' in e && e,
      f = G9(
        $y(s, (v) => {
          var y;
          return (
            !((y = v == null ? void 0 : v.table) != null && y.disable) &&
            Y9(v, c || {}, d || {})
          );
        }),
        i
      ),
      m = f.ungrouped.length === 0,
      p = Object.entries(f.sections).length === 0,
      h = Object.entries(f.ungroupedSubsections).length === 0;
    if (m && p && h) return o.createElement(V9, { inAddonPanel: a });
    let g = 1;
    t && (g += 1), n || (g += 2);
    let w = Object.keys(f.sections).length > 0,
      x = {
        updateArgs: t,
        compact: n,
        inAddonPanel: a,
        initialExpandedArgs: l,
      };
    return o.createElement(
      il,
      null,
      o.createElement(
        z9,
        {
          compact: n,
          inAddonPanel: a,
          className: 'docblock-argstable sb-unstyled',
        },
        o.createElement(
          'thead',
          { className: 'docblock-argstable-head' },
          o.createElement(
            'tr',
            null,
            o.createElement('th', null, o.createElement('span', null, 'Name')),
            n
              ? null
              : o.createElement(
                  'th',
                  null,
                  o.createElement('span', null, 'Description')
                ),
            n
              ? null
              : o.createElement(
                  'th',
                  null,
                  o.createElement('span', null, 'Default')
                ),
            t
              ? o.createElement(
                  'th',
                  null,
                  o.createElement(
                    U9,
                    null,
                    'Control',
                    ' ',
                    !u &&
                      r &&
                      o.createElement(
                        q9,
                        { onClick: () => r(), title: 'Reset controls' },
                        o.createElement(ye, { icon: 'undo', 'aria-hidden': !0 })
                      )
                  )
                )
              : null
          )
        ),
        o.createElement(
          'tbody',
          { className: 'docblock-argstable-body' },
          f.ungrouped.map((v) =>
            o.createElement(dn, {
              key: v.key,
              row: v,
              arg: c && c[v.key],
              ...x,
            })
          ),
          Object.entries(f.ungroupedSubsections).map(([v, y]) =>
            o.createElement(
              Na,
              { key: v, label: v, level: 'subsection', colSpan: g },
              y.map((E) =>
                o.createElement(dn, {
                  key: E.key,
                  row: E,
                  arg: c && c[E.key],
                  expandable: w,
                  ...x,
                })
              )
            )
          ),
          Object.entries(f.sections).map(([v, y]) =>
            o.createElement(
              Na,
              { key: v, label: v, level: 'section', colSpan: g },
              y.ungrouped.map((E) =>
                o.createElement(dn, {
                  key: E.key,
                  row: E,
                  arg: c && c[E.key],
                  ...x,
                })
              ),
              Object.entries(y.subsections).map(([E, A]) =>
                o.createElement(
                  Na,
                  { key: E, label: E, level: 'subsection', colSpan: g },
                  A.map((S) =>
                    o.createElement(dn, {
                      key: S.key,
                      row: S,
                      arg: c && c[S.key],
                      expandable: w,
                      ...x,
                    })
                  )
                )
              )
            )
          )
        )
      )
    );
  };
_.div(({ theme: e }) => ({
  marginRight: 30,
  fontSize: `${e.typography.size.s1}px`,
  color:
    e.base === 'light'
      ? Q(0.4, e.color.defaultText)
      : Q(0.6, e.color.defaultText),
}));
_.div({ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' });
_.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  '&:not(:last-child)': { marginBottom: '1rem' },
});
_.div(ee, ({ theme: e }) => ({
  ...aa(e),
  margin: '25px 0 40px',
  padding: '30px 20px',
}));
_.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold,
  color: e.color.defaultText,
}));
_.div(({ theme: e }) => ({
  color:
    e.base === 'light'
      ? Q(0.2, e.color.defaultText)
      : Q(0.6, e.color.defaultText),
}));
_.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 });
_.div(({ theme: e }) => ({
  flex: 1,
  textAlign: 'center',
  fontFamily: e.typography.fonts.mono,
  fontSize: e.typography.size.s1,
  lineHeight: 1,
  overflow: 'hidden',
  color:
    e.base === 'light'
      ? Q(0.4, e.color.defaultText)
      : Q(0.6, e.color.defaultText),
  '> div': {
    display: 'inline-block',
    overflow: 'hidden',
    maxWidth: '100%',
    textOverflow: 'ellipsis',
  },
  span: { display: 'block', marginTop: 2 },
}));
_.div({ display: 'flex', flexDirection: 'row' });
_.div(({ background: e }) => ({
  position: 'relative',
  flex: 1,
  '&::before': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: e,
    content: '""',
  },
}));
_.div(({ theme: e }) => ({
  ...aa(e),
  display: 'flex',
  flexDirection: 'row',
  height: 50,
  marginBottom: 5,
  overflow: 'hidden',
  backgroundColor: 'white',
  backgroundImage:
    'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
  backgroundClip: 'padding-box',
}));
_.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  marginBottom: 30,
});
_.div({ flex: 1, display: 'flex', flexDirection: 'row' });
_.div({ display: 'flex', alignItems: 'flex-start' });
_.div({ flex: '0 0 30%' });
_.div({ flex: 1 });
_.div(({ theme: e }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: 20,
  fontWeight: e.typography.weight.bold,
  color:
    e.base === 'light'
      ? Q(0.4, e.color.defaultText)
      : Q(0.6, e.color.defaultText),
}));
_.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: '20px',
  display: 'flex',
  flexDirection: 'column',
}));
_.div(({ theme: e }) => ({
  fontFamily: e.typography.fonts.base,
  fontSize: e.typography.size.s2,
  color: e.color.defaultText,
  marginLeft: 10,
  lineHeight: 1.2,
}));
_.div(({ theme: e }) => ({
  ...aa(e),
  overflow: 'hidden',
  height: 40,
  width: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 'none',
  '> img, > svg': { width: 20, height: 20 },
}));
_.div({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  flex: '0 1 calc(20% - 10px)',
  minWidth: 120,
  margin: '0px 10px 30px 0',
});
_.div({ display: 'flex', flexFlow: 'row wrap' });
var X9 = (e) => `anchor--${e}`,
  B0 = ({ storyId: e, children: t }) =>
    o.createElement('div', { id: X9(e), className: 'sb-anchor' }, t);
De &&
  De.__DOCS_CONTEXT__ === void 0 &&
  ((De.__DOCS_CONTEXT__ = b.createContext(null)),
  (De.__DOCS_CONTEXT__.displayName = 'DocsContext'));
var Ce = De ? De.__DOCS_CONTEXT__ : b.createContext(null),
  Qr = (e, t) => b.useContext(Ce).resolveOf(e, t);
function J9(e, t = 'start') {
  e.scrollIntoView({ behavior: 'smooth', block: t, inline: 'nearest' });
}
function Q9(e, t) {
  let r = Rl([e], t);
  return r && r[0];
}
function Rl(e, t) {
  let [r, n] = b.useState({});
  return (
    b.useEffect(() => {
      Promise.all(
        e.map(async (a) => {
          let l = await t.loadStory(a);
          n((i) => (i[a] === l ? i : { ...i, [a]: l }));
        })
      );
    }),
    e.map((a) => {
      if (r[a]) return r[a];
      try {
        return t.storyById(a);
      } catch {
        return null;
      }
    })
  );
}
function I0(e) {
  return x8(e);
}
var P0 = b.createContext({ sources: {} }),
  j0 = '--unknown--',
  ew = ({ children: e, channel: t }) => {
    let [r, n] = b.useState({});
    return (
      b.useEffect(() => {
        let a = (l, i = null, u = !1) => {
          let {
              id: s,
              args: c = void 0,
              source: d,
              format: f,
            } = typeof l == 'string' ? { id: l, source: i, format: u } : l,
            m = c ? I0(c) : j0;
          n((p) => ({ ...p, [s]: { ...p[s], [m]: { code: d, format: f } } }));
        };
        return t.on(Pl, a), () => t.off(Pl, a);
      }, []),
      o.createElement(P0.Provider, { value: { sources: r } }, e)
    );
  },
  tw = ((e) => (
    (e.OPEN = 'open'), (e.CLOSED = 'closed'), (e.NONE = 'none'), e
  ))(tw || {}),
  rw = (e) => {
    let t = e
      .map((r) => {
        var n, a;
        return (a = (n = r.parameters.docs) == null ? void 0 : n.source) == null
          ? void 0
          : a.state;
      })
      .filter(Boolean);
    return t.length === 0 ? 'closed' : t[0];
  },
  nw = (e, t, r) => {
    let { sources: n } = r,
      a = n == null ? void 0 : n[e];
    return (
      (a == null ? void 0 : a[I0(t)]) ||
      (a == null ? void 0 : a[j0]) || { code: '' }
    );
  },
  aw = ({
    snippet: e,
    storyContext: t,
    typeFromProps: r,
    transformFromProps: n,
  }) => {
    var s, c, d, f, m, p;
    let { __isArgsStory: a } = t.parameters,
      l = ((s = t.parameters.docs) == null ? void 0 : s.source) || {},
      i = r || l.type || ua.AUTO;
    if (l.code !== void 0) return l.code;
    let u =
      i === ua.DYNAMIC || (i === ua.AUTO && e && a)
        ? e
        : l.originalSource || '';
    return (
      l.transformSource &&
        de(Ee`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (c = t.parameters.docs) != null &&
        c.transformSource &&
        de(Ee`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (d = t.parameters.jsx) != null &&
        d.transformSource &&
        de(Ee`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      ((p =
        n ??
        l.transform ??
        l.transformSource ??
        ((f = t.parameters.docs) == null ? void 0 : f.transformSource) ??
        ((m = t.parameters.jsx) == null ? void 0 : m.transformSource)) == null
        ? void 0
        : p(u, t)) || u
    );
  },
  N0 = (e, t, r) => {
    var p, h, g;
    let n = e.ids || (e.id ? [e.id] : []),
      a = Rl(n, t),
      l = a,
      { of: i } = e;
    if ('of' in e && i === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    if (i) l = [t.resolveOf(i, ['story']).story];
    else if (l.length === 0)
      try {
        l = [t.storyById()];
      } catch {}
    if (!a.every(Boolean))
      return { error: 'Oh no! The source is not available.', state: 'none' };
    let u =
        ((g =
          (h = (p = l[0]) == null ? void 0 : p.parameters) == null
            ? void 0
            : h.docs) == null
          ? void 0
          : g.source) || {},
      { code: s } = e,
      c = e.format ?? u.format,
      d = e.language ?? u.language ?? 'jsx',
      f = e.dark ?? u.dark ?? !1;
    s ||
      (s = l.map((w, x) => {
        var A, S;
        if (!w) return '';
        let v = t.getStoryContext(w),
          y = e.__forceInitialArgs ? v.initialArgs : v.unmappedArgs,
          E = nw(w.id, y, r);
        return (
          x === 0 &&
            (c =
              E.format ??
              ((S = (A = w.parameters.docs) == null ? void 0 : A.source) == null
                ? void 0
                : S.format) ??
              !1),
          aw({
            snippet: E.code,
            storyContext: { ...v, args: y },
            typeFromProps: e.type,
            transformFromProps: e.transform,
          })
        );
      }).join(`

`));
    let m = rw(l);
    return s
      ? { code: s, format: c, language: d, dark: f, state: m }
      : { error: 'Oh no! The source is not available.', state: m };
  },
  H0 = (e, t) => {
    let { id: r, of: n, meta: a, story: l } = e;
    if ('of' in e && n === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    if (r)
      return (
        de(Ee`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        r
      );
    let { name: i } = e;
    return i
      ? (de(Ee`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        t.storyIdByName(i))
      : (l &&
          de(Ee`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        a && t.referenceMeta(a, !1),
        t.resolveOf(n || l || 'story', ['story']).story.id);
  },
  ow = (e, t, r) => {
    let { parameters: n = {} } = t || {},
      { docs: a = {} } = n,
      l = a.story || {};
    if (a.disable) return null;
    let { inlineStories: i, iframeHeight: u } = a;
    typeof i < 'u' &&
      de(Ee`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
    let s = e.inline ?? l.inline ?? i ?? !1;
    if (
      (typeof u < 'u' &&
        de(Ee`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
      s)
    ) {
      let d = e.height ?? l.height,
        f = e.autoplay ?? l.autoplay ?? !1;
      return {
        story: t,
        inline: !0,
        height: d,
        autoplay: f,
        forceInitialArgs: !!e.__forceInitialArgs,
        primary: !!e.__primary,
        renderStoryToElement: r.renderStoryToElement,
      };
    }
    let c = e.height ?? l.height ?? l.iframeHeight ?? u ?? '100px';
    return { story: t, inline: !1, height: c, primary: !!e.__primary };
  },
  lw = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
    let t = b.useContext(Ce),
      r = H0(e, t),
      n = Q9(r, t);
    if (!n) return o.createElement(_l, null);
    let a = ow(e, n, t);
    return a ? o.createElement(K8, { ...a }) : null;
  },
  iw = (
    { withSource: e, mdxSource: t, children: r, layout: n, ...a },
    l,
    i
  ) => {
    let u = b.Children.toArray(r)
        .filter((m) => m.props && (m.props.id || m.props.name || m.props.of))
        .map((m) => H0(m.props, l)),
      s = Rl(u, l),
      c = s.some((m) => !m),
      d = N0(
        {
          ...(t ? { code: decodeURI(t) } : { ids: u }),
          ...(a.of && { of: a.of }),
        },
        l,
        i
      );
    if (e === 'none') return { isLoading: c, previewProps: a };
    let f = n;
    return (
      b.Children.forEach(r, (m) => {
        var p, h;
        f ||
          (f =
            (h =
              (p = m == null ? void 0 : m.props) == null
                ? void 0
                : p.parameters) == null
              ? void 0
              : h.layout);
      }),
      s.forEach((m) => {
        var p, h;
        f ||
          !m ||
          (f =
            (m == null ? void 0 : m.parameters.layout) ??
            ((h = (p = m.parameters.docs) == null ? void 0 : p.canvas) == null
              ? void 0
              : h.layout));
      }),
      {
        isLoading: c,
        previewProps: {
          ...a,
          layout: f ?? 'padded',
          withSource: d,
          isExpanded: (e || d.state) === 'open',
        },
      }
    );
  },
  sw = (e) => {
    var w, x, v, y, E, A, S, C, k, O;
    let t = b.useContext(Ce),
      r = b.useContext(P0),
      { children: n, of: a, source: l } = e;
    if ('of' in e && a === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    let { isLoading: i, previewProps: u } = iw(e, t, r),
      s,
      c,
      d;
    try {
      ({ story: s } = Qr(a || 'story', ['story']));
    } catch (T) {
      n || (d = T);
    }
    try {
      c = N0({ ...l, ...(a && { of: a }) }, t, r);
    } catch (T) {
      n || (d = T);
    }
    if (d) throw d;
    if (
      (e.withSource &&
        de(Ee`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      e.mdxSource &&
        de(Ee`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      (e.isColumn !== void 0 || e.columns !== void 0) &&
        de(Ee`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      n)
    )
      return (
        de(Ee`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
        i ? o.createElement(ax, null) : o.createElement(xo, { ...u }, n)
      );
    let f =
        e.layout ??
        s.parameters.layout ??
        ((x = (w = s.parameters.docs) == null ? void 0 : w.canvas) == null
          ? void 0
          : x.layout) ??
        'padded',
      m =
        e.withToolbar ??
        ((y = (v = s.parameters.docs) == null ? void 0 : v.canvas) == null
          ? void 0
          : y.withToolbar) ??
        !1,
      p =
        e.additionalActions ??
        ((A = (E = s.parameters.docs) == null ? void 0 : E.canvas) == null
          ? void 0
          : A.additionalActions),
      h =
        e.sourceState ??
        ((C = (S = s.parameters.docs) == null ? void 0 : S.canvas) == null
          ? void 0
          : C.sourceState) ??
        'hidden',
      g =
        e.className ??
        ((O = (k = s.parameters.docs) == null ? void 0 : k.canvas) == null
          ? void 0
          : O.className);
    return o.createElement(
      xo,
      {
        withSource: h === 'none' ? void 0 : c,
        isExpanded: h === 'shown',
        withToolbar: m,
        additionalActions: p,
        className: g,
        layout: f,
      },
      o.createElement(lw, { of: a || s.moduleExport, meta: e.meta, ...e.story })
    );
  },
  uw = (e, t) => {
    let r = t.getStoryContext(e),
      [n, a] = b.useState(r.globals);
    return (
      b.useEffect(() => {
        let l = (i) => {
          a(i.globals);
        };
        return t.channel.on(ps, l), () => t.channel.off(ps, l);
      }, [t.channel]),
      [n]
    );
  },
  cw = (e, t) => {
    let r = dw(e, t);
    if (!r) throw new Error('No result when story was defined');
    return r;
  },
  dw = (e, t) => {
    let r = e ? t.getStoryContext(e) : { args: {} },
      { id: n } = e || { id: 'none' },
      [a, l] = b.useState(r.args);
    b.useEffect(() => {
      let s = (c) => {
        c.storyId === n && l(c.args);
      };
      return t.channel.on(ds, s), () => t.channel.off(ds, s);
    }, [n, t.channel]);
    let i = b.useCallback(
        (s) => t.channel.emit(T8, { storyId: n, updatedArgs: s }),
        [n, t.channel]
      ),
      u = b.useCallback(
        (s) => t.channel.emit(R8, { storyId: n, argNames: s }),
        [n, t.channel]
      );
    return e && [a, i, u];
  },
  pw = (e) => {
    var g;
    let { of: t } = e;
    if ('of' in e && t === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    let r = b.useContext(Ce),
      { story: n } = r.resolveOf(t || 'story', ['story']),
      { parameters: a, argTypes: l } = n,
      i = ((g = a.docs) == null ? void 0 : g.controls) || {},
      u = e.include ?? i.include,
      s = e.exclude ?? i.exclude,
      c = e.sort ?? i.sort,
      [d, f, m] = cw(n, r),
      [p] = uw(n, r),
      h = O8(l, u, s);
    return o.createElement(K9, {
      rows: h,
      args: d,
      globals: p,
      updateArgs: f,
      resetArgs: m,
      sort: c,
    });
  },
  { document: Z0 } = De,
  fw = ({ className: e, children: t, ...r }) => {
    if (typeof e != 'string' && (typeof t != 'string' || !t.match(/[\n\r]/g)))
      return o.createElement(al, null, t);
    let n = e && e.split('-');
    return o.createElement(Cl, {
      language: (n && n[1]) || 'plaintext',
      format: !1,
      code: t,
      ...r,
    });
  };
function Fl(e, t) {
  e.channel.emit(F8, t);
}
var Co = Lc.a,
  mw = ({ hash: e, children: t }) => {
    let r = b.useContext(Ce);
    return o.createElement(
      Co,
      {
        href: e,
        target: '_self',
        onClick: (n) => {
          let a = e.substring(1);
          Z0.getElementById(a) && Fl(r, e);
        },
      },
      t
    );
  },
  gw = (e) => {
    let { href: t, target: r, children: n, ...a } = e,
      l = b.useContext(Ce);
    if (t) {
      if (t.startsWith('#')) return o.createElement(mw, { hash: t }, n);
      if (r !== '_blank' && !t.startsWith('https://'))
        return o.createElement(
          Co,
          {
            href: t,
            onClick: (i) => {
              i.button === 0 &&
                !i.altKey &&
                !i.ctrlKey &&
                !i.metaKey &&
                !i.shiftKey &&
                (i.preventDefault(),
                Fl(l, i.currentTarget.getAttribute('href')));
            },
            target: r,
            ...a,
          },
          n
        );
    }
    return o.createElement(Co, { ...e });
  },
  V0 = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  hw = V0.reduce(
    (e, t) => ({
      ...e,
      [t]: _(t)({
        '& svg': { position: 'relative', top: '-0.1em', visibility: 'hidden' },
        '&:hover svg': { visibility: 'visible' },
      }),
    }),
    {}
  ),
  bw = _.a(() => ({
    float: 'left',
    lineHeight: 'inherit',
    paddingRight: '10px',
    marginLeft: '-24px',
    color: 'inherit',
  })),
  yw = ({ as: e, id: t, children: r, ...n }) => {
    let a = b.useContext(Ce),
      l = hw[e],
      i = `#${t}`;
    return o.createElement(
      l,
      { id: t, ...n },
      o.createElement(
        bw,
        {
          'aria-hidden': 'true',
          href: i,
          tabIndex: -1,
          target: '_self',
          onClick: (u) => {
            Z0.getElementById(t) && Fl(a, i);
          },
        },
        o.createElement(ye, { icon: 'link' })
      ),
      r
    );
  },
  $l = (e) => {
    let { as: t, id: r, children: n, ...a } = e;
    if (r) return o.createElement(yw, { as: t, id: r, ...a }, n);
    let l = t,
      { as: i, ...u } = e;
    return o.createElement(l, { ...J(u, t) });
  },
  vw = V0.reduce(
    (e, t) => ({ ...e, [t]: (r) => o.createElement($l, { as: t, ...r }) }),
    {}
  ),
  Ew = (e) => {
    var t;
    if (!e.children) return null;
    if (typeof e.children != 'string')
      throw new Error(Ee`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
    return o.createElement(l0, {
      ...e,
      options: {
        forceBlock: !0,
        overrides: {
          code: fw,
          a: gw,
          ...vw,
          ...((t = e == null ? void 0 : e.options) == null
            ? void 0
            : t.overrides),
        },
        ...(e == null ? void 0 : e.options),
      },
    });
  },
  xw = ((e) => (
    (e.INFO = 'info'),
    (e.NOTES = 'notes'),
    (e.DOCGEN = 'docgen'),
    (e.AUTO = 'auto'),
    e
  ))(xw || {}),
  An =
    'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo',
  ww = (e) => e && (typeof e == 'string' ? e : Ha(e.markdown) || Ha(e.text)),
  Aw = (e) => e && (typeof e == 'string' ? e : Ha(e.text)),
  Sw = (e) => null,
  Cw = (e) => {
    var t, r, n, a, l, i, u, s;
    switch (e.type) {
      case 'story':
        return (
          ((r =
            (t = e.story.parameters.docs) == null ? void 0 : t.description) ==
          null
            ? void 0
            : r.story) || null
        );
      case 'meta': {
        let { parameters: c, component: d } = e.preparedMeta;
        return (
          ((a = (n = c.docs) == null ? void 0 : n.description) == null
            ? void 0
            : a.component) ||
          ((i =
            (l = c.docs) == null ? void 0 : l.extractComponentDescription) ==
          null
            ? void 0
            : i.call(l, d, { component: d, parameters: c })) ||
          null
        );
      }
      case 'component': {
        let {
          component: c,
          projectAnnotations: { parameters: d },
        } = e;
        return (
          ((s =
            (u = d.docs) == null ? void 0 : u.extractComponentDescription) ==
          null
            ? void 0
            : s.call(u, c, { component: c, parameters: d })) || null
        );
      }
      default:
        throw new Error(
          `Unrecognized module type resolved from 'useOf', got: ${e.type}`
        );
    }
  },
  kw = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
    let { component: a, parameters: l } = n();
    if (r || t) return r || t;
    let { notes: i, info: u, docs: s } = l;
    (i || u) &&
      de(
        `Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${An}`
      );
    let { extractComponentDescription: c = Sw, description: d } = s || {},
      f = d == null ? void 0 : d.component;
    if (f) return f;
    switch (e) {
      case 'info':
        return Aw(u);
      case 'notes':
        return ww(i);
      case 'docgen':
      case 'auto':
      default:
        return c(a, { component: a, ...l });
    }
  },
  ko = (e) => {
    let { of: t, type: r, markdown: n, children: a } = e;
    if ('of' in e && t === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    let l = b.useContext(Ce),
      i = Qr(t || 'meta'),
      u;
    return (
      r || n || a ? (u = kw(e, l)) : (u = Cw(i)),
      r && de(`Manually specifying description type is deprecated. See ${An}`),
      n &&
        de(
          `The 'markdown' prop on the Description block is deprecated. See ${An}`
        ),
      a &&
        de(
          `The 'children' prop on the Description block is deprecated. See ${An}`
        ),
      u ? o.createElement(Ew, null, u) : null
    );
  },
  _w = _.div(({ theme: e }) => ({
    width: '10rem',
    '@media (max-width: 768px)': { display: 'none' },
  })),
  Ow = _.div(({ theme: e }) => ({
    position: 'fixed',
    bottom: 0,
    top: 0,
    width: '10rem',
    paddingTop: '4rem',
    paddingBottom: '2rem',
    overflowY: 'auto',
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s2,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitOverflowScrolling: 'touch',
    '& *': { boxSizing: 'border-box' },
    '& > .toc-wrapper > .toc-list': {
      paddingLeft: 0,
      borderLeft: `solid 2px ${e.color.mediumlight}`,
      '.toc-list': {
        paddingLeft: 0,
        borderLeft: `solid 2px ${e.color.mediumlight}`,
        '.toc-list': {
          paddingLeft: 0,
          borderLeft: `solid 2px ${e.color.mediumlight}`,
        },
      },
    },
    '& .toc-list-item': {
      position: 'relative',
      listStyleType: 'none',
      marginLeft: 20,
      paddingTop: 3,
      paddingBottom: 3,
    },
    '& .toc-list-item::before': {
      content: '""',
      position: 'absolute',
      height: '100%',
      top: 0,
      left: 0,
      transform: 'translateX(calc(-2px - 20px))',
      borderLeft: `solid 2px ${e.color.mediumdark}`,
      opacity: 0,
      transition: 'opacity 0.2s',
    },
    '& .toc-list-item.is-active-li::before': { opacity: 1 },
    '& .toc-list-item > a': {
      color: e.color.defaultText,
      textDecoration: 'none',
    },
    '& .toc-list-item.is-active-li > a': {
      fontWeight: 600,
      color: e.color.secondary,
      textDecoration: 'none',
    },
  })),
  Tw = _.p(({ theme: e }) => ({
    fontWeight: 600,
    fontSize: '0.875em',
    color: e.textColor,
    textTransform: 'uppercase',
    marginBottom: 10,
  })),
  Rw = ({ title: e }) =>
    e === null ? null : typeof e == 'string' ? o.createElement(Tw, null, e) : e,
  Fw = ({
    title: e,
    disable: t,
    headingSelector: r,
    contentsSelector: n,
    ignoreSelector: a,
    unsafeTocbotOptions: l,
  }) => (
    b.useEffect(() => {
      let i = {
          tocSelector: '.toc-wrapper',
          contentSelector: n ?? '.sbdocs-content',
          headingSelector: r ?? 'h3',
          ignoreSelector: a ?? '.docs-story *, .skip-toc',
          headingsOffset: 40,
          scrollSmoothOffset: -40,
          orderedList: !1,
          onClick: () => !1,
          ...l,
        },
        u = setTimeout(() => cs.init(i), 100);
      return () => {
        clearTimeout(u), cs.destroy();
      };
    }, [t]),
    o.createElement(
      o.Fragment,
      null,
      o.createElement(
        _w,
        null,
        t
          ? null
          : o.createElement(
              Ow,
              null,
              o.createElement(Rw, { title: e || null }),
              o.createElement('div', { className: 'toc-wrapper' })
            )
      )
    )
  ),
  { document: $w, window: Dw } = De,
  Lw = ({ context: e, theme: t, children: r }) => {
    var a, l, i, u, s;
    let n;
    try {
      n =
        (l =
          (a = e.resolveOf('meta', ['meta']).preparedMeta.parameters) == null
            ? void 0
            : a.docs) == null
          ? void 0
          : l.toc;
    } catch {
      n =
        (s =
          (u =
            (i = e == null ? void 0 : e.projectAnnotations) == null
              ? void 0
              : i.parameters) == null
            ? void 0
            : u.docs) == null
          ? void 0
          : s.toc;
    }
    return (
      b.useEffect(() => {
        let c;
        try {
          if (((c = new URL(Dw.parent.location.toString())), c.hash)) {
            let d = $w.getElementById(c.hash.substring(1));
            d &&
              setTimeout(() => {
                J9(d);
              }, 200);
          }
        } catch {}
      }),
      o.createElement(
        Ce.Provider,
        { value: e },
        o.createElement(
          ew,
          { channel: e.channel },
          o.createElement(
            au,
            { theme: Np(t) },
            o.createElement(
              N8,
              {
                toc: n
                  ? o.createElement(Fw, {
                      className: 'sbdocs sbdocs-toc--custom',
                      ...n,
                    })
                  : null,
              },
              r
            )
          )
        )
      )
    );
  },
  Mw = /\s*\/\s*/,
  Bw = (e) => {
    let t = e.trim().split(Mw);
    return (t && t[t.length - 1]) || e;
  },
  Iw = ({ children: e }) => {
    let t = b.useContext(Ce),
      r = e || Bw(t.storyById().title);
    return r
      ? o.createElement(B8, { className: 'sbdocs-title sb-unstyled' }, r)
      : null;
  },
  Pw = ({ children: e }) => {
    var n;
    let t = b.useContext(Ce),
      r =
        e ||
        ((n = t.storyById().parameters) == null ? void 0 : n.componentSubtitle);
    return r
      ? o.createElement(I8, { className: 'sbdocs-subtitle sb-unstyled' }, r)
      : null;
  },
  jw = ({ children: e, disableAnchor: t }) => {
    if (t || typeof e != 'string') return o.createElement(ll, null, e);
    let r = e.toLowerCase().replace(/[^a-z0-9]/gi, '-');
    return o.createElement($l, { as: 'h3', id: r }, e);
  },
  z0 = ({
    of: e,
    expanded: t = !0,
    withToolbar: r = !1,
    __forceInitialArgs: n = !1,
    __primary: a = !1,
  }) => {
    var u, s;
    let { story: l } = Qr(e || 'story', ['story']),
      i =
        ((s = (u = l.parameters.docs) == null ? void 0 : u.canvas) == null
          ? void 0
          : s.withToolbar) ?? r;
    return o.createElement(
      B0,
      { storyId: l.id },
      t &&
        o.createElement(
          o.Fragment,
          null,
          o.createElement(jw, null, l.name),
          o.createElement(ko, { of: e })
        ),
      o.createElement(sw, {
        of: e,
        withToolbar: i,
        story: { __forceInitialArgs: n, __primary: a },
        source: { __forceInitialArgs: n },
      })
    );
  },
  Nw = (e) => {
    let { name: t, of: r } = e;
    if ('of' in e && r === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    let n = b.useContext(Ce),
      a;
    if ((r && (a = Qr(r || 'meta', ['meta']).csfFile.stories[0] || null), !a)) {
      let l = t && n.storyIdByName(t);
      a = n.storyById(l);
    }
    return (
      t &&
        de(Ee`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `),
      a
        ? o.createElement(z0, {
            of: a.moduleExport,
            expanded: !1,
            __primary: !0,
            withToolbar: !0,
          })
        : null
    );
  },
  Hw = ({ children: e, disableAnchor: t, ...r }) => {
    if (t || typeof e != 'string') return o.createElement(ol, null, e);
    let n = e.toLowerCase().replace(/[^a-z0-9]/gi, '-');
    return o.createElement($l, { as: 'h2', id: n, ...r }, e);
  },
  Zw = _(Hw)(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    fontWeight: e.typography.weight.bold,
    lineHeight: '16px',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    color: e.textMutedColor,
    border: 0,
    marginBottom: '12px',
    '&:first-of-type': { marginTop: '56px' },
  })),
  Vw = ({ title: e = 'Stories', includePrimary: t = !0 }) => {
    let { componentStories: r } = b.useContext(Ce),
      n = r().filter((a) => {
        var l, i;
        return !(
          (i = (l = a.parameters) == null ? void 0 : l.docs) != null &&
          i.disable
        );
      });
    return (
      t || (n = n.slice(1)),
      !n || n.length === 0
        ? null
        : o.createElement(
            o.Fragment,
            null,
            o.createElement(Zw, null, e),
            n.map(
              (a) =>
                a &&
                o.createElement(z0, {
                  key: a.id,
                  of: a.moduleExport,
                  expanded: !0,
                  __forceInitialArgs: !0,
                })
            )
          )
    );
  },
  zw = () => {
    let e = Qr('meta', ['meta']),
      { stories: t } = e.csfFile,
      r = Object.keys(t).length === 1;
    return o.createElement(
      o.Fragment,
      null,
      o.createElement(Iw, null),
      o.createElement(Pw, null),
      o.createElement(ko, { of: 'meta' }),
      r ? o.createElement(ko, { of: 'story' }) : null,
      o.createElement(Nw, null),
      o.createElement(pw, null),
      r ? null : o.createElement(Vw, null)
    );
  };
function nA({ context: e, docsParameter: t }) {
  let r = t.container || Lw,
    n = t.page || zw;
  return o.createElement(
    r,
    { context: e, theme: t.theme },
    o.createElement(n, null)
  );
}
var aA = ({ of: e }) => {
  let t = b.useContext(Ce);
  e && t.referenceMeta(e, !0);
  try {
    let r = t.storyById();
    return o.createElement(B0, { storyId: r.id });
  } catch {
    return null;
  }
};
export {
  gw as A,
  fw as C,
  nA as D,
  He as F,
  vw as H,
  ye as I,
  aA as M,
  Wo as S,
  yh as T,
  Mm as W,
  Oe as _,
  Gu as a,
  Z as b,
  Mu as c,
  ch as d,
  Ze as g,
  zt as m,
  _ as n,
  Qw as s,
};
