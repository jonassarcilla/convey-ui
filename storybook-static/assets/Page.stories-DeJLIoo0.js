var $d = Object.defineProperty;
var Dd = (e, t, r) =>
  t in e
    ? $d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var Xt = (e, t, r) => (Dd(e, typeof t != 'symbol' ? t + '' : t, r), r);
import { j as qe } from './jsx-runtime-CKrituN3.js';
import { R as kd } from './index-CBqU2yxZ.js';
import { H as Ld } from './Header-C5yX4MSU.js';
import './_commonjsHelpers-BosuxZz1.js';
import './Button-Co2Qoq0-.js';
const { addons: Fd } = __STORYBOOK_MODULE_PREVIEW_API__,
  { once: Ud, logger: Hd } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  {
    FORCE_REMOUNT: xa,
    STORY_RENDER_PHASE_CHANGED: zd,
    SET_CURRENT_STORY: Vd,
    IGNORED_EXCEPTION: Wd,
  } = __STORYBOOK_MODULE_CORE_EVENTS__,
  { global: et } = __STORYBOOK_MODULE_GLOBAL__;
var Gd = Object.create,
  fl = Object.defineProperty,
  Kd = Object.getOwnPropertyDescriptor,
  pl = Object.getOwnPropertyNames,
  Yd = Object.getPrototypeOf,
  Jd = Object.prototype.hasOwnProperty,
  Xd = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
        ? new Proxy(e, {
            get: (t, r) => (typeof require < 'u' ? require : t)[r],
          })
        : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  }),
  ze = (e, t) =>
    function () {
      return t || (0, e[pl(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Qd = (e, t, r, o) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let a of pl(t))
        !Jd.call(e, a) &&
          a !== r &&
          fl(e, a, {
            get: () => t[a],
            enumerable: !(o = Kd(t, a)) || o.enumerable,
          });
    return e;
  },
  Lt = (e, t, r) => (
    (r = e != null ? Gd(Yd(e)) : {}),
    Qd(
      t || !e || !e.__esModule
        ? fl(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  Zd = ze({
    '../../node_modules/pretty-format/node_modules/ansi-styles/index.js'(e, t) {
      var r =
          (c = 0) =>
          (n) =>
            `\x1B[${38 + c};5;${n}m`,
        o =
          (c = 0) =>
          (n, i, l) =>
            `\x1B[${38 + c};2;${n};${i};${l}m`;
      function a() {
        let c = new Map(),
          n = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              overline: [53, 55],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29],
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              blackBright: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39],
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49],
            },
          };
        (n.color.gray = n.color.blackBright),
          (n.bgColor.bgGray = n.bgColor.bgBlackBright),
          (n.color.grey = n.color.blackBright),
          (n.bgColor.bgGrey = n.bgColor.bgBlackBright);
        for (let [i, l] of Object.entries(n)) {
          for (let [s, u] of Object.entries(l))
            (n[s] = { open: `\x1B[${u[0]}m`, close: `\x1B[${u[1]}m` }),
              (l[s] = n[s]),
              c.set(u[0], u[1]);
          Object.defineProperty(n, i, { value: l, enumerable: !1 });
        }
        return (
          Object.defineProperty(n, 'codes', { value: c, enumerable: !1 }),
          (n.color.close = '\x1B[39m'),
          (n.bgColor.close = '\x1B[49m'),
          (n.color.ansi256 = r()),
          (n.color.ansi16m = o()),
          (n.bgColor.ansi256 = r(10)),
          (n.bgColor.ansi16m = o(10)),
          Object.defineProperties(n, {
            rgbToAnsi256: {
              value: (i, l, s) =>
                i === l && l === s
                  ? i < 8
                    ? 16
                    : i > 248
                      ? 231
                      : Math.round(((i - 8) / 247) * 24) + 232
                  : 16 +
                    36 * Math.round((i / 255) * 5) +
                    6 * Math.round((l / 255) * 5) +
                    Math.round((s / 255) * 5),
              enumerable: !1,
            },
            hexToRgb: {
              value: (i) => {
                let l = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(
                  i.toString(16)
                );
                if (!l) return [0, 0, 0];
                let { colorString: s } = l.groups;
                s.length === 3 &&
                  (s = s
                    .split('')
                    .map((f) => f + f)
                    .join(''));
                let u = Number.parseInt(s, 16);
                return [(u >> 16) & 255, (u >> 8) & 255, u & 255];
              },
              enumerable: !1,
            },
            hexToAnsi256: {
              value: (i) => n.rgbToAnsi256(...n.hexToRgb(i)),
              enumerable: !1,
            },
          }),
          n
        );
      }
      Object.defineProperty(t, 'exports', { enumerable: !0, get: a });
    },
  }),
  pn = ze({
    '../../node_modules/pretty-format/build/collections.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printIteratorEntries = r),
        (e.printIteratorValues = o),
        (e.printListItems = a),
        (e.printObjectProperties = c);
      var t = (n, i) => {
        let l = Object.keys(n),
          s = i !== null ? l.sort(i) : l;
        return (
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(n).forEach((u) => {
              Object.getOwnPropertyDescriptor(n, u).enumerable && s.push(u);
            }),
          s
        );
      };
      function r(n, i, l, s, u, f, d = ': ') {
        let p = '',
          m = 0,
          y = n.next();
        if (!y.done) {
          p += i.spacingOuter;
          let g = l + i.indent;
          for (; !y.done; ) {
            if (((p += g), m++ === i.maxWidth)) {
              p += '…';
              break;
            }
            let h = f(y.value[0], i, g, s, u),
              v = f(y.value[1], i, g, s, u);
            (p += h + d + v),
              (y = n.next()),
              y.done ? i.min || (p += ',') : (p += `,${i.spacingInner}`);
          }
          p += i.spacingOuter + l;
        }
        return p;
      }
      function o(n, i, l, s, u, f) {
        let d = '',
          p = 0,
          m = n.next();
        if (!m.done) {
          d += i.spacingOuter;
          let y = l + i.indent;
          for (; !m.done; ) {
            if (((d += y), p++ === i.maxWidth)) {
              d += '…';
              break;
            }
            (d += f(m.value, i, y, s, u)),
              (m = n.next()),
              m.done ? i.min || (d += ',') : (d += `,${i.spacingInner}`);
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
      function a(n, i, l, s, u, f) {
        let d = '';
        if (n.length) {
          d += i.spacingOuter;
          let p = l + i.indent;
          for (let m = 0; m < n.length; m++) {
            if (((d += p), m === i.maxWidth)) {
              d += '…';
              break;
            }
            m in n && (d += f(n[m], i, p, s, u)),
              m < n.length - 1
                ? (d += `,${i.spacingInner}`)
                : i.min || (d += ',');
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
      function c(n, i, l, s, u, f) {
        let d = '',
          p = t(n, i.compareKeys);
        if (p.length) {
          d += i.spacingOuter;
          let m = l + i.indent;
          for (let y = 0; y < p.length; y++) {
            let g = p[y],
              h = f(g, i, m, s, u),
              v = f(n[g], i, m, s, u);
            (d += `${m + h}: ${v}`),
              y < p.length - 1
                ? (d += `,${i.spacingInner}`)
                : i.min || (d += ',');
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
    },
  }),
  ef = ze({
    '../../node_modules/pretty-format/build/plugins/AsymmetricMatcher.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = pn(),
        r = globalThis['jest-symbol-do-not-touch'] || globalThis.Symbol,
        o =
          typeof r == 'function' && r.for
            ? r.for('jest.asymmetricMatcher')
            : 1267621,
        a = ' ',
        c = (s, u, f, d, p, m) => {
          let y = s.toString();
          if (y === 'ArrayContaining' || y === 'ArrayNotContaining')
            return ++d > u.maxDepth
              ? `[${y}]`
              : `${y + a}[${(0, t.printListItems)(s.sample, u, f, d, p, m)}]`;
          if (y === 'ObjectContaining' || y === 'ObjectNotContaining')
            return ++d > u.maxDepth
              ? `[${y}]`
              : `${y + a}{${(0, t.printObjectProperties)(s.sample, u, f, d, p, m)}}`;
          if (
            y === 'StringMatching' ||
            y === 'StringNotMatching' ||
            y === 'StringContaining' ||
            y === 'StringNotContaining'
          )
            return y + a + m(s.sample, u, f, d, p);
          if (typeof s.toAsymmetricMatcher != 'function')
            throw new Error(
              `Asymmetric matcher ${s.constructor.name} does not implement toAsymmetricMatcher()`
            );
          return s.toAsymmetricMatcher();
        };
      e.serialize = c;
      var n = (s) => s && s.$$typeof === o;
      e.test = n;
      var i = { serialize: c, test: n },
        l = i;
      e.default = l;
    },
  }),
  tf = ze({
    '../../node_modules/pretty-format/build/plugins/DOMCollection.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = pn(),
        r = ' ',
        o = ['DOMStringMap', 'NamedNodeMap'],
        a = /^(HTML\w*Collection|NodeList)$/,
        c = (f) => o.indexOf(f) !== -1 || a.test(f),
        n = (f) =>
          f && f.constructor && !!f.constructor.name && c(f.constructor.name);
      e.test = n;
      var i = (f) => f.constructor.name === 'NamedNodeMap',
        l = (f, d, p, m, y, g) => {
          let h = f.constructor.name;
          return ++m > d.maxDepth
            ? `[${h}]`
            : (d.min ? '' : h + r) +
                (o.indexOf(h) !== -1
                  ? `{${(0, t.printObjectProperties)(i(f) ? Array.from(f).reduce((v, S) => ((v[S.name] = S.value), v), {}) : { ...f }, d, p, m, y, g)}}`
                  : `[${(0, t.printListItems)(Array.from(f), d, p, m, y, g)}]`);
        };
      e.serialize = l;
      var s = { serialize: l, test: n },
        u = s;
      e.default = u;
    },
  }),
  rf = ze({
    '../../node_modules/pretty-format/build/plugins/lib/escapeHTML.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = t);
      function t(r) {
        return r.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
    },
  }),
  Bo = ze({
    '../../node_modules/pretty-format/build/plugins/lib/markup.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printText =
          e.printProps =
          e.printElementAsLeaf =
          e.printElement =
          e.printComment =
          e.printChildren =
            void 0);
      var t = r(rf());
      function r(s) {
        return s && s.__esModule ? s : { default: s };
      }
      var o = (s, u, f, d, p, m, y) => {
        let g = d + f.indent,
          h = f.colors;
        return s
          .map((v) => {
            let S = u[v],
              E = y(S, f, g, p, m);
            return (
              typeof S != 'string' &&
                (E.indexOf(`
`) !== -1 && (E = f.spacingOuter + g + E + f.spacingOuter + d),
                (E = `{${E}}`)),
              `${f.spacingInner + d + h.prop.open + v + h.prop.close}=${h.value.open}${E}${h.value.close}`
            );
          })
          .join('');
      };
      e.printProps = o;
      var a = (s, u, f, d, p, m) =>
        s
          .map(
            (y) =>
              u.spacingOuter +
              f +
              (typeof y == 'string' ? c(y, u) : m(y, u, f, d, p))
          )
          .join('');
      e.printChildren = a;
      var c = (s, u) => {
        let f = u.colors.content;
        return f.open + (0, t.default)(s) + f.close;
      };
      e.printText = c;
      var n = (s, u) => {
        let f = u.colors.comment;
        return `${f.open}<!--${(0, t.default)(s)}-->${f.close}`;
      };
      e.printComment = n;
      var i = (s, u, f, d, p) => {
        let m = d.colors.tag;
        return `${m.open}<${s}${u && m.close + u + d.spacingOuter + p + m.open}${f ? `>${m.close}${f}${d.spacingOuter}${p}${m.open}</${s}` : `${u && !d.min ? '' : ' '}/`}>${m.close}`;
      };
      e.printElement = i;
      var l = (s, u) => {
        let f = u.colors.tag;
        return `${f.open}<${s}${f.close} …${f.open} />${f.close}`;
      };
      e.printElementAsLeaf = l;
    },
  }),
  nf = ze({
    '../../node_modules/pretty-format/build/plugins/DOMElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = Bo(),
        r = 1,
        o = 3,
        a = 8,
        c = 11,
        n = /^((HTML|SVG)\w*)?Element$/,
        i = (g) => {
          try {
            return typeof g.hasAttribute == 'function' && g.hasAttribute('is');
          } catch {
            return !1;
          }
        },
        l = (g) => {
          let h = g.constructor.name,
            { nodeType: v, tagName: S } = g,
            E = (typeof S == 'string' && S.includes('-')) || i(g);
          return (
            (v === r && (n.test(h) || E)) ||
            (v === o && h === 'Text') ||
            (v === a && h === 'Comment') ||
            (v === c && h === 'DocumentFragment')
          );
        },
        s = (g) => {
          var h;
          return (
            ((h = g == null ? void 0 : g.constructor) == null
              ? void 0
              : h.name) && l(g)
          );
        };
      e.test = s;
      function u(g) {
        return g.nodeType === o;
      }
      function f(g) {
        return g.nodeType === a;
      }
      function d(g) {
        return g.nodeType === c;
      }
      var p = (g, h, v, S, E, C) => {
        if (u(g)) return (0, t.printText)(g.data, h);
        if (f(g)) return (0, t.printComment)(g.data, h);
        let A = d(g) ? 'DocumentFragment' : g.tagName.toLowerCase();
        return ++S > h.maxDepth
          ? (0, t.printElementAsLeaf)(A, h)
          : (0, t.printElement)(
              A,
              (0, t.printProps)(
                d(g) ? [] : Array.from(g.attributes, (R) => R.name).sort(),
                d(g)
                  ? {}
                  : Array.from(g.attributes).reduce(
                      (R, _) => ((R[_.name] = _.value), R),
                      {}
                    ),
                h,
                v + h.indent,
                S,
                E,
                C
              ),
              (0, t.printChildren)(
                Array.prototype.slice.call(g.childNodes || g.children),
                h,
                v + h.indent,
                S,
                E,
                C
              ),
              h,
              v
            );
      };
      e.serialize = p;
      var m = { serialize: p, test: s },
        y = m;
      e.default = y;
    },
  }),
  of = ze({
    '../../node_modules/pretty-format/build/plugins/Immutable.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = pn(),
        r = '@@__IMMUTABLE_ITERABLE__@@',
        o = '@@__IMMUTABLE_LIST__@@',
        a = '@@__IMMUTABLE_KEYED__@@',
        c = '@@__IMMUTABLE_MAP__@@',
        n = '@@__IMMUTABLE_ORDERED__@@',
        i = '@@__IMMUTABLE_RECORD__@@',
        l = '@@__IMMUTABLE_SEQ__@@',
        s = '@@__IMMUTABLE_SET__@@',
        u = '@@__IMMUTABLE_STACK__@@',
        f = (_) => `Immutable.${_}`,
        d = (_) => `[${_}]`,
        p = ' ',
        m = '…',
        y = (_, O, x, I, H, V, L) =>
          ++I > O.maxDepth
            ? d(f(L))
            : `${f(L) + p}{${(0, t.printIteratorEntries)(_.entries(), O, x, I, H, V)}}`;
      function g(_) {
        let O = 0;
        return {
          next() {
            if (O < _._keys.length) {
              let x = _._keys[O++];
              return { done: !1, value: [x, _.get(x)] };
            }
            return { done: !0, value: void 0 };
          },
        };
      }
      var h = (_, O, x, I, H, V) => {
          let L = f(_._name || 'Record');
          return ++I > O.maxDepth
            ? d(L)
            : `${L + p}{${(0, t.printIteratorEntries)(g(_), O, x, I, H, V)}}`;
        },
        v = (_, O, x, I, H, V) => {
          let L = f('Seq');
          return ++I > O.maxDepth
            ? d(L)
            : _[a]
              ? `${L + p}{${_._iter || _._object ? (0, t.printIteratorEntries)(_.entries(), O, x, I, H, V) : m}}`
              : `${L + p}[${_._iter || _._array || _._collection || _._iterable ? (0, t.printIteratorValues)(_.values(), O, x, I, H, V) : m}]`;
        },
        S = (_, O, x, I, H, V, L) =>
          ++I > O.maxDepth
            ? d(f(L))
            : `${f(L) + p}[${(0, t.printIteratorValues)(_.values(), O, x, I, H, V)}]`,
        E = (_, O, x, I, H, V) =>
          _[c]
            ? y(_, O, x, I, H, V, _[n] ? 'OrderedMap' : 'Map')
            : _[o]
              ? S(_, O, x, I, H, V, 'List')
              : _[s]
                ? S(_, O, x, I, H, V, _[n] ? 'OrderedSet' : 'Set')
                : _[u]
                  ? S(_, O, x, I, H, V, 'Stack')
                  : _[l]
                    ? v(_, O, x, I, H, V)
                    : h(_, O, x, I, H, V);
      e.serialize = E;
      var C = (_) => _ && (_[r] === !0 || _[i] === !0);
      e.test = C;
      var A = { serialize: E, test: C },
        R = A;
      e.default = R;
    },
  }),
  af = ze({
    '../../node_modules/pretty-format/node_modules/react-is/cjs/react-is.development.js'(
      e
    ) {
      (function () {
        var t = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          c = Symbol.for('react.profiler'),
          n = Symbol.for('react.provider'),
          i = Symbol.for('react.context'),
          l = Symbol.for('react.server_context'),
          s = Symbol.for('react.forward_ref'),
          u = Symbol.for('react.suspense'),
          f = Symbol.for('react.suspense_list'),
          d = Symbol.for('react.memo'),
          p = Symbol.for('react.lazy'),
          m = Symbol.for('react.offscreen'),
          y = !1,
          g = !1,
          h = !1,
          v = !1,
          S = !1,
          E;
        E = Symbol.for('react.module.reference');
        function C(k) {
          return !!(
            typeof k == 'string' ||
            typeof k == 'function' ||
            k === o ||
            k === c ||
            S ||
            k === a ||
            k === u ||
            k === f ||
            v ||
            k === m ||
            y ||
            g ||
            h ||
            (typeof k == 'object' &&
              k !== null &&
              (k.$$typeof === p ||
                k.$$typeof === d ||
                k.$$typeof === n ||
                k.$$typeof === i ||
                k.$$typeof === s ||
                k.$$typeof === E ||
                k.getModuleId !== void 0))
          );
        }
        function A(k) {
          if (typeof k == 'object' && k !== null) {
            var ie = k.$$typeof;
            switch (ie) {
              case t:
                var se = k.type;
                switch (se) {
                  case o:
                  case c:
                  case a:
                  case u:
                  case f:
                    return se;
                  default:
                    var fe = se && se.$$typeof;
                    switch (fe) {
                      case l:
                      case i:
                      case s:
                      case p:
                      case d:
                      case n:
                        return fe;
                      default:
                        return ie;
                    }
                }
              case r:
                return ie;
            }
          }
        }
        var R = i,
          _ = n,
          O = t,
          x = s,
          I = o,
          H = p,
          V = d,
          L = r,
          re = c,
          G = a,
          oe = u,
          ae = f,
          ue = !1,
          Z = !1;
        function q(k) {
          return (
            ue ||
              ((ue = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.'
              )),
            !1
          );
        }
        function M(k) {
          return (
            Z ||
              ((Z = !0),
              console.warn(
                'The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.'
              )),
            !1
          );
        }
        function F(k) {
          return A(k) === i;
        }
        function z(k) {
          return A(k) === n;
        }
        function X(k) {
          return typeof k == 'object' && k !== null && k.$$typeof === t;
        }
        function B(k) {
          return A(k) === s;
        }
        function D(k) {
          return A(k) === o;
        }
        function U(k) {
          return A(k) === p;
        }
        function ee(k) {
          return A(k) === d;
        }
        function b(k) {
          return A(k) === r;
        }
        function N(k) {
          return A(k) === c;
        }
        function $(k) {
          return A(k) === a;
        }
        function Y(k) {
          return A(k) === u;
        }
        function W(k) {
          return A(k) === f;
        }
        (e.ContextConsumer = R),
          (e.ContextProvider = _),
          (e.Element = O),
          (e.ForwardRef = x),
          (e.Fragment = I),
          (e.Lazy = H),
          (e.Memo = V),
          (e.Portal = L),
          (e.Profiler = re),
          (e.StrictMode = G),
          (e.Suspense = oe),
          (e.SuspenseList = ae),
          (e.isAsyncMode = q),
          (e.isConcurrentMode = M),
          (e.isContextConsumer = F),
          (e.isContextProvider = z),
          (e.isElement = X),
          (e.isForwardRef = B),
          (e.isFragment = D),
          (e.isLazy = U),
          (e.isMemo = ee),
          (e.isPortal = b),
          (e.isProfiler = N),
          (e.isStrictMode = $),
          (e.isSuspense = Y),
          (e.isSuspenseList = W),
          (e.isValidElementType = C),
          (e.typeOf = A);
      })();
    },
  }),
  lf = ze({
    '../../node_modules/pretty-format/node_modules/react-is/index.js'(e, t) {
      t.exports = af();
    },
  }),
  sf = ze({
    '../../node_modules/pretty-format/build/plugins/ReactElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = a(lf()),
        r = Bo();
      function o(d) {
        if (typeof WeakMap != 'function') return null;
        var p = new WeakMap(),
          m = new WeakMap();
        return (o = function (y) {
          return y ? m : p;
        })(d);
      }
      function a(d, p) {
        if (!p && d && d.__esModule) return d;
        if (d === null || (typeof d != 'object' && typeof d != 'function'))
          return { default: d };
        var m = o(p);
        if (m && m.has(d)) return m.get(d);
        var y = {},
          g = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var h in d)
          if (h !== 'default' && Object.prototype.hasOwnProperty.call(d, h)) {
            var v = g ? Object.getOwnPropertyDescriptor(d, h) : null;
            v && (v.get || v.set)
              ? Object.defineProperty(y, h, v)
              : (y[h] = d[h]);
          }
        return (y.default = d), m && m.set(d, y), y;
      }
      var c = (d, p = []) => (
          Array.isArray(d)
            ? d.forEach((m) => {
                c(m, p);
              })
            : d != null && d !== !1 && p.push(d),
          p
        ),
        n = (d) => {
          let p = d.type;
          if (typeof p == 'string') return p;
          if (typeof p == 'function')
            return p.displayName || p.name || 'Unknown';
          if (t.isFragment(d)) return 'React.Fragment';
          if (t.isSuspense(d)) return 'React.Suspense';
          if (typeof p == 'object' && p !== null) {
            if (t.isContextProvider(d)) return 'Context.Provider';
            if (t.isContextConsumer(d)) return 'Context.Consumer';
            if (t.isForwardRef(d)) {
              if (p.displayName) return p.displayName;
              let m = p.render.displayName || p.render.name || '';
              return m !== '' ? `ForwardRef(${m})` : 'ForwardRef';
            }
            if (t.isMemo(d)) {
              let m = p.displayName || p.type.displayName || p.type.name || '';
              return m !== '' ? `Memo(${m})` : 'Memo';
            }
          }
          return 'UNDEFINED';
        },
        i = (d) => {
          let { props: p } = d;
          return Object.keys(p)
            .filter((m) => m !== 'children' && p[m] !== void 0)
            .sort();
        },
        l = (d, p, m, y, g, h) =>
          ++y > p.maxDepth
            ? (0, r.printElementAsLeaf)(n(d), p)
            : (0, r.printElement)(
                n(d),
                (0, r.printProps)(i(d), d.props, p, m + p.indent, y, g, h),
                (0, r.printChildren)(
                  c(d.props.children),
                  p,
                  m + p.indent,
                  y,
                  g,
                  h
                ),
                p,
                m
              );
      e.serialize = l;
      var s = (d) => d != null && t.isElement(d);
      e.test = s;
      var u = { serialize: l, test: s },
        f = u;
      e.default = f;
    },
  }),
  uf = ze({
    '../../node_modules/pretty-format/build/plugins/ReactTestComponent.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = Bo(),
        r = globalThis['jest-symbol-do-not-touch'] || globalThis.Symbol,
        o =
          typeof r == 'function' && r.for
            ? r.for('react.test.json')
            : 245830487,
        a = (s) => {
          let { props: u } = s;
          return u
            ? Object.keys(u)
                .filter((f) => u[f] !== void 0)
                .sort()
            : [];
        },
        c = (s, u, f, d, p, m) =>
          ++d > u.maxDepth
            ? (0, t.printElementAsLeaf)(s.type, u)
            : (0, t.printElement)(
                s.type,
                s.props
                  ? (0, t.printProps)(a(s), s.props, u, f + u.indent, d, p, m)
                  : '',
                s.children
                  ? (0, t.printChildren)(s.children, u, f + u.indent, d, p, m)
                  : '',
                u,
                f
              );
      e.serialize = c;
      var n = (s) => s && s.$$typeof === o;
      e.test = n;
      var i = { serialize: c, test: n },
        l = i;
      e.default = l;
    },
  }),
  $o = ze({
    '../../node_modules/pretty-format/build/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = e.DEFAULT_OPTIONS = void 0),
        (e.format = D),
        (e.plugins = void 0);
      var t = s(Zd()),
        r = pn(),
        o = s(ef()),
        a = s(tf()),
        c = s(nf()),
        n = s(of()),
        i = s(sf()),
        l = s(uf());
      function s(b) {
        return b && b.__esModule ? b : { default: b };
      }
      var u = Object.prototype.toString,
        f = Date.prototype.toISOString,
        d = Error.prototype.toString,
        p = RegExp.prototype.toString,
        m = (b) =>
          (typeof b.constructor == 'function' && b.constructor.name) ||
          'Object',
        y = (b) => typeof window < 'u' && b === window,
        g = /^Symbol\((.*)\)(.*)$/,
        h = /\n/gi,
        v = class extends Error {
          constructor(b, N) {
            super(b), (this.stack = N), (this.name = this.constructor.name);
          }
        };
      function S(b) {
        return (
          b === '[object Array]' ||
          b === '[object ArrayBuffer]' ||
          b === '[object DataView]' ||
          b === '[object Float32Array]' ||
          b === '[object Float64Array]' ||
          b === '[object Int8Array]' ||
          b === '[object Int16Array]' ||
          b === '[object Int32Array]' ||
          b === '[object Uint8Array]' ||
          b === '[object Uint8ClampedArray]' ||
          b === '[object Uint16Array]' ||
          b === '[object Uint32Array]'
        );
      }
      function E(b) {
        return Object.is(b, -0) ? '-0' : String(b);
      }
      function C(b) {
        return `${b}n`;
      }
      function A(b, N) {
        return N ? `[Function ${b.name || 'anonymous'}]` : '[Function]';
      }
      function R(b) {
        return String(b).replace(g, 'Symbol($1)');
      }
      function _(b) {
        return `[${d.call(b)}]`;
      }
      function O(b, N, $, Y) {
        if (b === !0 || b === !1) return `${b}`;
        if (b === void 0) return 'undefined';
        if (b === null) return 'null';
        let W = typeof b;
        if (W === 'number') return E(b);
        if (W === 'bigint') return C(b);
        if (W === 'string')
          return Y ? `"${b.replace(/"|\\/g, '\\$&')}"` : `"${b}"`;
        if (W === 'function') return A(b, N);
        if (W === 'symbol') return R(b);
        let k = u.call(b);
        return k === '[object WeakMap]'
          ? 'WeakMap {}'
          : k === '[object WeakSet]'
            ? 'WeakSet {}'
            : k === '[object Function]' || k === '[object GeneratorFunction]'
              ? A(b, N)
              : k === '[object Symbol]'
                ? R(b)
                : k === '[object Date]'
                  ? isNaN(+b)
                    ? 'Date { NaN }'
                    : f.call(b)
                  : k === '[object Error]'
                    ? _(b)
                    : k === '[object RegExp]'
                      ? $
                        ? p.call(b).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
                        : p.call(b)
                      : b instanceof Error
                        ? _(b)
                        : null;
      }
      function x(b, N, $, Y, W, k) {
        if (W.indexOf(b) !== -1) return '[Circular]';
        (W = W.slice()), W.push(b);
        let ie = ++Y > N.maxDepth,
          se = N.min;
        if (
          N.callToJSON &&
          !ie &&
          b.toJSON &&
          typeof b.toJSON == 'function' &&
          !k
        )
          return L(b.toJSON(), N, $, Y, W, !0);
        let fe = u.call(b);
        return fe === '[object Arguments]'
          ? ie
            ? '[Arguments]'
            : `${se ? '' : 'Arguments '}[${(0, r.printListItems)(b, N, $, Y, W, L)}]`
          : S(fe)
            ? ie
              ? `[${b.constructor.name}]`
              : `${se || (!N.printBasicPrototype && b.constructor.name === 'Array') ? '' : `${b.constructor.name} `}[${(0, r.printListItems)(b, N, $, Y, W, L)}]`
            : fe === '[object Map]'
              ? ie
                ? '[Map]'
                : `Map {${(0, r.printIteratorEntries)(b.entries(), N, $, Y, W, L, ' => ')}}`
              : fe === '[object Set]'
                ? ie
                  ? '[Set]'
                  : `Set {${(0, r.printIteratorValues)(b.values(), N, $, Y, W, L)}}`
                : ie || y(b)
                  ? `[${m(b)}]`
                  : `${se || (!N.printBasicPrototype && m(b) === 'Object') ? '' : `${m(b)} `}{${(0, r.printObjectProperties)(b, N, $, Y, W, L)}}`;
      }
      function I(b) {
        return b.serialize != null;
      }
      function H(b, N, $, Y, W, k) {
        let ie;
        try {
          ie = I(b)
            ? b.serialize(N, $, Y, W, k, L)
            : b.print(
                N,
                (se) => L(se, $, Y, W, k),
                (se) => {
                  let fe = Y + $.indent;
                  return (
                    fe +
                    se.replace(
                      h,
                      `
${fe}`
                    )
                  );
                },
                {
                  edgeSpacing: $.spacingOuter,
                  min: $.min,
                  spacing: $.spacingInner,
                },
                $.colors
              );
        } catch (se) {
          throw new v(se.message, se.stack);
        }
        if (typeof ie != 'string')
          throw new Error(
            `pretty-format: Plugin must return type "string" but instead returned "${typeof ie}".`
          );
        return ie;
      }
      function V(b, N) {
        for (let $ = 0; $ < b.length; $++)
          try {
            if (b[$].test(N)) return b[$];
          } catch (Y) {
            throw new v(Y.message, Y.stack);
          }
        return null;
      }
      function L(b, N, $, Y, W, k) {
        let ie = V(N.plugins, b);
        if (ie !== null) return H(ie, b, N, $, Y, W);
        let se = O(b, N.printFunctionName, N.escapeRegex, N.escapeString);
        return se !== null ? se : x(b, N, $, Y, W, k);
      }
      var re = {
          comment: 'gray',
          content: 'reset',
          prop: 'yellow',
          tag: 'cyan',
          value: 'green',
        },
        G = Object.keys(re),
        oe = (b) => b,
        ae = oe({
          callToJSON: !0,
          compareKeys: void 0,
          escapeRegex: !1,
          escapeString: !0,
          highlight: !1,
          indent: 2,
          maxDepth: 1 / 0,
          maxWidth: 1 / 0,
          min: !1,
          plugins: [],
          printBasicPrototype: !0,
          printFunctionName: !0,
          theme: re,
        });
      e.DEFAULT_OPTIONS = ae;
      function ue(b) {
        if (
          (Object.keys(b).forEach((N) => {
            if (!Object.prototype.hasOwnProperty.call(ae, N))
              throw new Error(`pretty-format: Unknown option "${N}".`);
          }),
          b.min && b.indent !== void 0 && b.indent !== 0)
        )
          throw new Error(
            'pretty-format: Options "min" and "indent" cannot be used together.'
          );
        if (b.theme !== void 0) {
          if (b.theme === null)
            throw new Error('pretty-format: Option "theme" must not be null.');
          if (typeof b.theme != 'object')
            throw new Error(
              `pretty-format: Option "theme" must be of type "object" but instead received "${typeof b.theme}".`
            );
        }
      }
      var Z = (b) =>
          G.reduce((N, $) => {
            let Y = b.theme && b.theme[$] !== void 0 ? b.theme[$] : re[$],
              W = Y && t.default[Y];
            if (W && typeof W.close == 'string' && typeof W.open == 'string')
              N[$] = W;
            else
              throw new Error(
                `pretty-format: Option "theme" has a key "${$}" whose value "${Y}" is undefined in ansi-styles.`
              );
            return N;
          }, Object.create(null)),
        q = () =>
          G.reduce(
            (b, N) => ((b[N] = { close: '', open: '' }), b),
            Object.create(null)
          ),
        M = (b) =>
          (b == null ? void 0 : b.printFunctionName) ?? ae.printFunctionName,
        F = (b) => (b == null ? void 0 : b.escapeRegex) ?? ae.escapeRegex,
        z = (b) => (b == null ? void 0 : b.escapeString) ?? ae.escapeString,
        X = (b) => ({
          callToJSON: (b == null ? void 0 : b.callToJSON) ?? ae.callToJSON,
          colors: b != null && b.highlight ? Z(b) : q(),
          compareKeys:
            typeof (b == null ? void 0 : b.compareKeys) == 'function' ||
            (b == null ? void 0 : b.compareKeys) === null
              ? b.compareKeys
              : ae.compareKeys,
          escapeRegex: F(b),
          escapeString: z(b),
          indent:
            b != null && b.min
              ? ''
              : B((b == null ? void 0 : b.indent) ?? ae.indent),
          maxDepth: (b == null ? void 0 : b.maxDepth) ?? ae.maxDepth,
          maxWidth: (b == null ? void 0 : b.maxWidth) ?? ae.maxWidth,
          min: (b == null ? void 0 : b.min) ?? ae.min,
          plugins: (b == null ? void 0 : b.plugins) ?? ae.plugins,
          printBasicPrototype:
            (b == null ? void 0 : b.printBasicPrototype) ?? !0,
          printFunctionName: M(b),
          spacingInner:
            b != null && b.min
              ? ' '
              : `
`,
          spacingOuter:
            b != null && b.min
              ? ''
              : `
`,
        });
      function B(b) {
        return new Array(b + 1).join(' ');
      }
      function D(b, N) {
        if (N && (ue(N), N.plugins)) {
          let Y = V(N.plugins, b);
          if (Y !== null) return H(Y, b, X(N), '', 0, []);
        }
        let $ = O(b, M(N), F(N), z(N));
        return $ !== null ? $ : x(b, X(N), '', 0, []);
      }
      var U = {
        AsymmetricMatcher: o.default,
        DOMCollection: a.default,
        DOMElement: c.default,
        Immutable: n.default,
        ReactElement: i.default,
        ReactTestComponent: l.default,
      };
      e.plugins = U;
      var ee = D;
      e.default = ee;
    },
  }),
  ml = ze({
    '../../node_modules/diff-sequences/build/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = p);
      var t = 'diff-sequences',
        r = 0,
        o = (m, y, g, h, v) => {
          let S = 0;
          for (; m < y && g < h && v(m, g); ) (m += 1), (g += 1), (S += 1);
          return S;
        },
        a = (m, y, g, h, v) => {
          let S = 0;
          for (; m <= y && g <= h && v(y, h); ) (y -= 1), (h -= 1), (S += 1);
          return S;
        },
        c = (m, y, g, h, v, S, E) => {
          let C = 0,
            A = -m,
            R = S[C],
            _ = R;
          S[C] += o(R + 1, y, h + R - A + 1, g, v);
          let O = m < E ? m : E;
          for (C += 1, A += 2; C <= O; C += 1, A += 2) {
            if (C !== m && _ < S[C]) R = S[C];
            else if (((R = _ + 1), y <= R)) return C - 1;
            (_ = S[C]), (S[C] = R + o(R + 1, y, h + R - A + 1, g, v));
          }
          return E;
        },
        n = (m, y, g, h, v, S, E) => {
          let C = 0,
            A = m,
            R = S[C],
            _ = R;
          S[C] -= a(y, R - 1, g, h + R - A - 1, v);
          let O = m < E ? m : E;
          for (C += 1, A -= 2; C <= O; C += 1, A -= 2) {
            if (C !== m && S[C] < _) R = S[C];
            else if (((R = _ - 1), R < y)) return C - 1;
            (_ = S[C]), (S[C] = R - a(y, R - 1, g, h + R - A - 1, v));
          }
          return E;
        },
        i = (m, y, g, h, v, S, E, C, A, R, _) => {
          let O = h - y,
            x = g - y,
            I = v - h - x,
            H = -I - (m - 1),
            V = -I + (m - 1),
            L = r,
            re = m < C ? m : C;
          for (let G = 0, oe = -m; G <= re; G += 1, oe += 2) {
            let ae = G === 0 || (G !== m && L < E[G]),
              ue = ae ? E[G] : L,
              Z = ae ? ue : ue + 1,
              q = O + Z - oe,
              M = o(Z + 1, g, q + 1, v, S),
              F = Z + M;
            if (((L = E[G]), (E[G] = F), H <= oe && oe <= V)) {
              let z = (m - 1 - (oe + I)) / 2;
              if (z <= R && A[z] - 1 <= F) {
                let X = O + ue - (ae ? oe + 1 : oe - 1),
                  B = a(y, ue, h, X, S),
                  D = ue - B,
                  U = X - B,
                  ee = D + 1,
                  b = U + 1;
                (_.nChangePreceding = m - 1),
                  m - 1 === ee + b - y - h
                    ? ((_.aEndPreceding = y), (_.bEndPreceding = h))
                    : ((_.aEndPreceding = ee), (_.bEndPreceding = b)),
                  (_.nCommonPreceding = B),
                  B !== 0 &&
                    ((_.aCommonPreceding = ee), (_.bCommonPreceding = b)),
                  (_.nCommonFollowing = M),
                  M !== 0 &&
                    ((_.aCommonFollowing = Z + 1),
                    (_.bCommonFollowing = q + 1));
                let N = F + 1,
                  $ = q + M + 1;
                return (
                  (_.nChangeFollowing = m - 1),
                  m - 1 === g + v - N - $
                    ? ((_.aStartFollowing = g), (_.bStartFollowing = v))
                    : ((_.aStartFollowing = N), (_.bStartFollowing = $)),
                  !0
                );
              }
            }
          }
          return !1;
        },
        l = (m, y, g, h, v, S, E, C, A, R, _) => {
          let O = v - g,
            x = g - y,
            I = v - h - x,
            H = I - m,
            V = I + m,
            L = r,
            re = m < R ? m : R;
          for (let G = 0, oe = m; G <= re; G += 1, oe -= 2) {
            let ae = G === 0 || (G !== m && A[G] < L),
              ue = ae ? A[G] : L,
              Z = ae ? ue : ue - 1,
              q = O + Z - oe,
              M = a(y, Z - 1, h, q - 1, S),
              F = Z - M;
            if (((L = A[G]), (A[G] = F), H <= oe && oe <= V)) {
              let z = (m + (oe - I)) / 2;
              if (z <= C && F - 1 <= E[z]) {
                let X = q - M;
                if (
                  ((_.nChangePreceding = m),
                  m === F + X - y - h
                    ? ((_.aEndPreceding = y), (_.bEndPreceding = h))
                    : ((_.aEndPreceding = F), (_.bEndPreceding = X)),
                  (_.nCommonPreceding = M),
                  M !== 0 &&
                    ((_.aCommonPreceding = F), (_.bCommonPreceding = X)),
                  (_.nChangeFollowing = m - 1),
                  m === 1)
                )
                  (_.nCommonFollowing = 0),
                    (_.aStartFollowing = g),
                    (_.bStartFollowing = v);
                else {
                  let B = O + ue - (ae ? oe - 1 : oe + 1),
                    D = o(ue, g, B, v, S);
                  (_.nCommonFollowing = D),
                    D !== 0 &&
                      ((_.aCommonFollowing = ue), (_.bCommonFollowing = B));
                  let U = ue + D,
                    ee = B + D;
                  m - 1 === g + v - U - ee
                    ? ((_.aStartFollowing = g), (_.bStartFollowing = v))
                    : ((_.aStartFollowing = U), (_.bStartFollowing = ee));
                }
                return !0;
              }
            }
          }
          return !1;
        },
        s = (m, y, g, h, v, S, E, C, A) => {
          let R = h - y,
            _ = v - g,
            O = g - y,
            x = v - h,
            I = x - O,
            H = O,
            V = O;
          if (((E[0] = y - 1), (C[0] = g), I % 2 === 0)) {
            let L = (m || I) / 2,
              re = (O + x) / 2;
            for (let G = 1; G <= re; G += 1)
              if (((H = c(G, g, v, R, S, E, H)), G < L))
                V = n(G, y, h, _, S, C, V);
              else if (l(G, y, g, h, v, S, E, H, C, V, A)) return;
          } else {
            let L = ((m || I) + 1) / 2,
              re = (O + x + 1) / 2,
              G = 1;
            for (H = c(G, g, v, R, S, E, H), G += 1; G <= re; G += 1)
              if (((V = n(G - 1, y, h, _, S, C, V)), G < L))
                H = c(G, g, v, R, S, E, H);
              else if (i(G, y, g, h, v, S, E, H, C, V, A)) return;
          }
          throw new Error(
            `${t}: no overlap aStart=${y} aEnd=${g} bStart=${h} bEnd=${v}`
          );
        },
        u = (m, y, g, h, v, S, E, C, A, R) => {
          if (v - h < g - y) {
            if (((S = !S), S && E.length === 1)) {
              let { foundSubsequence: z, isCommon: X } = E[0];
              E[1] = {
                foundSubsequence: (B, D, U) => {
                  z(B, U, D);
                },
                isCommon: (B, D) => X(D, B),
              };
            }
            let M = y,
              F = g;
            (y = h), (g = v), (h = M), (v = F);
          }
          let { foundSubsequence: _, isCommon: O } = E[S ? 1 : 0];
          s(m, y, g, h, v, O, C, A, R);
          let {
            nChangePreceding: x,
            aEndPreceding: I,
            bEndPreceding: H,
            nCommonPreceding: V,
            aCommonPreceding: L,
            bCommonPreceding: re,
            nCommonFollowing: G,
            aCommonFollowing: oe,
            bCommonFollowing: ae,
            nChangeFollowing: ue,
            aStartFollowing: Z,
            bStartFollowing: q,
          } = R;
          y < I && h < H && u(x, y, I, h, H, S, E, C, A, R),
            V !== 0 && _(V, L, re),
            G !== 0 && _(G, oe, ae),
            Z < g && q < v && u(ue, Z, g, q, v, S, E, C, A, R);
        },
        f = (m, y) => {
          if (typeof y != 'number')
            throw new TypeError(
              `${t}: ${m} typeof ${typeof y} is not a number`
            );
          if (!Number.isSafeInteger(y))
            throw new RangeError(`${t}: ${m} value ${y} is not a safe integer`);
          if (y < 0)
            throw new RangeError(`${t}: ${m} value ${y} is a negative integer`);
        },
        d = (m, y) => {
          let g = typeof y;
          if (g !== 'function')
            throw new TypeError(`${t}: ${m} typeof ${g} is not a function`);
        };
      function p(m, y, g, h) {
        f('aLength', m),
          f('bLength', y),
          d('isCommon', g),
          d('foundSubsequence', h);
        let v = o(0, m, 0, y, g);
        if ((v !== 0 && h(v, 0, 0), m !== v || y !== v)) {
          let S = v,
            E = v,
            C = a(S, m - 1, E, y - 1, g),
            A = m - C,
            R = y - C,
            _ = v + C;
          m !== _ &&
            y !== _ &&
            u(
              0,
              S,
              A,
              E,
              R,
              !1,
              [{ foundSubsequence: h, isCommon: g }],
              [r],
              [r],
              {
                aCommonFollowing: r,
                aCommonPreceding: r,
                aEndPreceding: r,
                aStartFollowing: r,
                bCommonFollowing: r,
                bCommonPreceding: r,
                bEndPreceding: r,
                bStartFollowing: r,
                nChangeFollowing: r,
                nChangePreceding: r,
                nCommonFollowing: r,
                nCommonPreceding: r,
              }
            ),
            C !== 0 && h(C, A, R);
        }
      }
    },
  }),
  yl = ze({
    '../../node_modules/loupe/loupe.js'(e, t) {
      (function (r, o) {
        typeof e == 'object' && typeof t < 'u'
          ? o(e)
          : typeof define == 'function' && define.amd
            ? define(['exports'], o)
            : ((r = typeof globalThis < 'u' ? globalThis : r || self),
              o((r.loupe = {})));
      })(e, function (r) {
        function o(w) {
          '@babel/helpers - typeof';
          return (
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? (o = function (T) {
                  return typeof T;
                })
              : (o = function (T) {
                  return T &&
                    typeof Symbol == 'function' &&
                    T.constructor === Symbol &&
                    T !== Symbol.prototype
                    ? 'symbol'
                    : typeof T;
                }),
            o(w)
          );
        }
        function a(w, T) {
          return c(w) || n(w, T) || i(w, T) || s();
        }
        function c(w) {
          if (Array.isArray(w)) return w;
        }
        function n(w, T) {
          if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(w)))) {
            var j = [],
              J = !0,
              ne = !1,
              le = void 0;
            try {
              for (
                var ce = w[Symbol.iterator](), de;
                !(J = (de = ce.next()).done) &&
                (j.push(de.value), !(T && j.length === T));
                J = !0
              );
            } catch (me) {
              (ne = !0), (le = me);
            } finally {
              try {
                !J && ce.return != null && ce.return();
              } finally {
                if (ne) throw le;
              }
            }
            return j;
          }
        }
        function i(w, T) {
          if (w) {
            if (typeof w == 'string') return l(w, T);
            var j = Object.prototype.toString.call(w).slice(8, -1);
            if (
              (j === 'Object' && w.constructor && (j = w.constructor.name),
              j === 'Map' || j === 'Set')
            )
              return Array.from(w);
            if (
              j === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)
            )
              return l(w, T);
          }
        }
        function l(w, T) {
          (T == null || T > w.length) && (T = w.length);
          for (var j = 0, J = new Array(T); j < T; j++) J[j] = w[j];
          return J;
        }
        function s() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var u = {
            bold: ['1', '22'],
            dim: ['2', '22'],
            italic: ['3', '23'],
            underline: ['4', '24'],
            inverse: ['7', '27'],
            hidden: ['8', '28'],
            strike: ['9', '29'],
            black: ['30', '39'],
            red: ['31', '39'],
            green: ['32', '39'],
            yellow: ['33', '39'],
            blue: ['34', '39'],
            magenta: ['35', '39'],
            cyan: ['36', '39'],
            white: ['37', '39'],
            brightblack: ['30;1', '39'],
            brightred: ['31;1', '39'],
            brightgreen: ['32;1', '39'],
            brightyellow: ['33;1', '39'],
            brightblue: ['34;1', '39'],
            brightmagenta: ['35;1', '39'],
            brightcyan: ['36;1', '39'],
            brightwhite: ['37;1', '39'],
            grey: ['90', '39'],
          },
          f = {
            special: 'cyan',
            number: 'yellow',
            bigint: 'yellow',
            boolean: 'yellow',
            undefined: 'grey',
            null: 'bold',
            string: 'green',
            symbol: 'green',
            date: 'magenta',
            regexp: 'red',
          },
          d = '…';
        function p(w, T) {
          var j = u[f[T]] || u[T];
          return j
            ? '\x1B['
                .concat(j[0], 'm')
                .concat(String(w), '\x1B[')
                .concat(j[1], 'm')
            : String(w);
        }
        function m() {
          var w =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            T = w.showHidden,
            j = T === void 0 ? !1 : T,
            J = w.depth,
            ne = J === void 0 ? 2 : J,
            le = w.colors,
            ce = le === void 0 ? !1 : le,
            de = w.customInspect,
            me = de === void 0 ? !0 : de,
            te = w.showProxy,
            ve = te === void 0 ? !1 : te,
            Re = w.maxArrayLength,
            Ue = Re === void 0 ? 1 / 0 : Re,
            je = w.breakLength,
            Ie = je === void 0 ? 1 / 0 : je,
            ke = w.seen,
            jt = ke === void 0 ? [] : ke,
            ft = w.truncate,
            Yt = ft === void 0 ? 1 / 0 : ft,
            Ct = w.stylize,
            It = Ct === void 0 ? String : Ct,
            ct = {
              showHidden: !!j,
              depth: Number(ne),
              colors: !!ce,
              customInspect: !!me,
              showProxy: !!ve,
              maxArrayLength: Number(Ue),
              breakLength: Number(Ie),
              truncate: Number(Yt),
              seen: jt,
              stylize: It,
            };
          return ct.colors && (ct.stylize = p), ct;
        }
        function y(w, T) {
          var j =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : d;
          w = String(w);
          var J = j.length,
            ne = w.length;
          return J > T && ne > J
            ? j
            : ne > T && ne > J
              ? ''.concat(w.slice(0, T - J)).concat(j)
              : w;
        }
        function g(w, T, j) {
          var J =
            arguments.length > 3 && arguments[3] !== void 0
              ? arguments[3]
              : ', ';
          j = j || T.inspect;
          var ne = w.length;
          if (ne === 0) return '';
          for (
            var le = T.truncate, ce = '', de = '', me = '', te = 0;
            te < ne;
            te += 1
          ) {
            var ve = te + 1 === w.length,
              Re = te + 2 === w.length;
            me = ''.concat(d, '(').concat(w.length - te, ')');
            var Ue = w[te];
            T.truncate = le - ce.length - (ve ? 0 : J.length);
            var je = de || j(Ue, T) + (ve ? '' : J),
              Ie = ce.length + je.length,
              ke = Ie + me.length;
            if (
              (ve && Ie > le && ce.length + me.length <= le) ||
              (!ve && !Re && ke > le) ||
              ((de = ve ? '' : j(w[te + 1], T) + (Re ? '' : J)),
              !ve && Re && ke > le && Ie + de.length > le)
            )
              break;
            if (((ce += je), !ve && !Re && Ie + de.length >= le)) {
              me = ''.concat(d, '(').concat(w.length - te - 1, ')');
              break;
            }
            me = '';
          }
          return ''.concat(ce).concat(me);
        }
        function h(w) {
          return w.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)
            ? w
            : JSON.stringify(w)
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'");
        }
        function v(w, T) {
          var j = a(w, 2),
            J = j[0],
            ne = j[1];
          return (
            (T.truncate -= 2),
            typeof J == 'string'
              ? (J = h(J))
              : typeof J != 'number' && (J = '['.concat(T.inspect(J, T), ']')),
            (T.truncate -= J.length),
            (ne = T.inspect(ne, T)),
            ''.concat(J, ': ').concat(ne)
          );
        }
        function S(w, T) {
          var j = Object.keys(w).slice(w.length);
          if (!w.length && !j.length) return '[]';
          T.truncate -= 4;
          var J = g(w, T);
          T.truncate -= J.length;
          var ne = '';
          return (
            j.length &&
              (ne = g(
                j.map(function (le) {
                  return [le, w[le]];
                }),
                T,
                v
              )),
            '[ '.concat(J).concat(ne ? ', '.concat(ne) : '', ' ]')
          );
        }
        var E = Function.prototype.toString,
          C = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/,
          A = 512;
        function R(w) {
          if (typeof w != 'function') return null;
          var T = '';
          if (typeof Function.prototype.name > 'u' && typeof w.name > 'u') {
            var j = E.call(w);
            if (j.indexOf('(') > A) return T;
            var J = j.match(C);
            J && (T = J[1]);
          } else T = w.name;
          return T;
        }
        var _ = R,
          O = function (w) {
            return typeof Buffer == 'function' && w instanceof Buffer
              ? 'Buffer'
              : w[Symbol.toStringTag]
                ? w[Symbol.toStringTag]
                : _(w.constructor);
          };
        function x(w, T) {
          var j = O(w);
          T.truncate -= j.length + 4;
          var J = Object.keys(w).slice(w.length);
          if (!w.length && !J.length) return ''.concat(j, '[]');
          for (var ne = '', le = 0; le < w.length; le++) {
            var ce = ''
              .concat(T.stylize(y(w[le], T.truncate), 'number'))
              .concat(le === w.length - 1 ? '' : ', ');
            if (
              ((T.truncate -= ce.length), w[le] !== w.length && T.truncate <= 3)
            ) {
              ne += ''.concat(d, '(').concat(w.length - w[le] + 1, ')');
              break;
            }
            ne += ce;
          }
          var de = '';
          return (
            J.length &&
              (de = g(
                J.map(function (me) {
                  return [me, w[me]];
                }),
                T,
                v
              )),
            ''
              .concat(j, '[ ')
              .concat(ne)
              .concat(de ? ', '.concat(de) : '', ' ]')
          );
        }
        function I(w, T) {
          var j = w.toJSON();
          if (j === null) return 'Invalid Date';
          var J = j.split('T'),
            ne = J[0];
          return T.stylize(
            ''.concat(ne, 'T').concat(y(J[1], T.truncate - ne.length - 1)),
            'date'
          );
        }
        function H(w, T) {
          var j = _(w);
          return j
            ? T.stylize(
                '[Function '.concat(y(j, T.truncate - 11), ']'),
                'special'
              )
            : T.stylize('[Function]', 'special');
        }
        function V(w, T) {
          var j = a(w, 2),
            J = j[0],
            ne = j[1];
          return (
            (T.truncate -= 4),
            (J = T.inspect(J, T)),
            (T.truncate -= J.length),
            (ne = T.inspect(ne, T)),
            ''.concat(J, ' => ').concat(ne)
          );
        }
        function L(w) {
          var T = [];
          return (
            w.forEach(function (j, J) {
              T.push([J, j]);
            }),
            T
          );
        }
        function re(w, T) {
          var j = w.size - 1;
          return j <= 0
            ? 'Map{}'
            : ((T.truncate -= 7), 'Map{ '.concat(g(L(w), T, V), ' }'));
        }
        var G =
          Number.isNaN ||
          function (w) {
            return w !== w;
          };
        function oe(w, T) {
          return G(w)
            ? T.stylize('NaN', 'number')
            : w === 1 / 0
              ? T.stylize('Infinity', 'number')
              : w === -1 / 0
                ? T.stylize('-Infinity', 'number')
                : w === 0
                  ? T.stylize(1 / w === 1 / 0 ? '+0' : '-0', 'number')
                  : T.stylize(y(w, T.truncate), 'number');
        }
        function ae(w, T) {
          var j = y(w.toString(), T.truncate - 1);
          return j !== d && (j += 'n'), T.stylize(j, 'bigint');
        }
        function ue(w, T) {
          var j = w.toString().split('/')[2],
            J = T.truncate - (2 + j.length),
            ne = w.source;
          return T.stylize('/'.concat(y(ne, J), '/').concat(j), 'regexp');
        }
        function Z(w) {
          var T = [];
          return (
            w.forEach(function (j) {
              T.push(j);
            }),
            T
          );
        }
        function q(w, T) {
          return w.size === 0
            ? 'Set{}'
            : ((T.truncate -= 7), 'Set{ '.concat(g(Z(w), T), ' }'));
        }
        var M = new RegExp(
            "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
            'g'
          ),
          F = {
            '\b': '\\b',
            '	': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            "'": "\\'",
            '\\': '\\\\',
          },
          z = 16,
          X = 4;
        function B(w) {
          return (
            F[w] ||
            '\\u'.concat('0000'.concat(w.charCodeAt(0).toString(z)).slice(-X))
          );
        }
        function D(w, T) {
          return (
            M.test(w) && (w = w.replace(M, B)),
            T.stylize("'".concat(y(w, T.truncate - 2), "'"), 'string')
          );
        }
        function U(w) {
          return 'description' in Symbol.prototype
            ? w.description
              ? 'Symbol('.concat(w.description, ')')
              : 'Symbol()'
            : w.toString();
        }
        var ee = function () {
          return 'Promise{…}';
        };
        try {
          var b = process.binding('util'),
            N = b.getPromiseDetails,
            $ = b.kPending,
            Y = b.kRejected;
          Array.isArray(N(Promise.resolve())) &&
            (ee = function (w, T) {
              var j = N(w),
                J = a(j, 2),
                ne = J[0],
                le = J[1];
              return ne === $
                ? 'Promise{<pending>}'
                : 'Promise'
                    .concat(ne === Y ? '!' : '', '{')
                    .concat(T.inspect(le, T), '}');
            });
        } catch {}
        var W = ee;
        function k(w, T) {
          var j = Object.getOwnPropertyNames(w),
            J = Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(w)
              : [];
          if (j.length === 0 && J.length === 0) return '{}';
          if (
            ((T.truncate -= 4), (T.seen = T.seen || []), T.seen.indexOf(w) >= 0)
          )
            return '[Circular]';
          T.seen.push(w);
          var ne = g(
              j.map(function (de) {
                return [de, w[de]];
              }),
              T,
              v
            ),
            le = g(
              J.map(function (de) {
                return [de, w[de]];
              }),
              T,
              v
            );
          T.seen.pop();
          var ce = '';
          return (
            ne && le && (ce = ', '), '{ '.concat(ne).concat(ce).concat(le, ' }')
          );
        }
        var ie =
          typeof Symbol < 'u' && Symbol.toStringTag ? Symbol.toStringTag : !1;
        function se(w, T) {
          var j = '';
          return (
            ie && ie in w && (j = w[ie]),
            (j = j || _(w.constructor)),
            (!j || j === '_class') && (j = '<Anonymous Class>'),
            (T.truncate -= j.length),
            ''.concat(j).concat(k(w, T))
          );
        }
        function fe(w, T) {
          return w.length === 0
            ? 'Arguments[]'
            : ((T.truncate -= 13), 'Arguments[ '.concat(g(w, T), ' ]'));
        }
        var Te = [
          'stack',
          'line',
          'column',
          'name',
          'message',
          'fileName',
          'lineNumber',
          'columnNumber',
          'number',
          'description',
        ];
        function lt(w, T) {
          var j = Object.getOwnPropertyNames(w).filter(function (ce) {
              return Te.indexOf(ce) === -1;
            }),
            J = w.name;
          T.truncate -= J.length;
          var ne = '';
          typeof w.message == 'string'
            ? (ne = y(w.message, T.truncate))
            : j.unshift('message'),
            (ne = ne ? ': '.concat(ne) : ''),
            (T.truncate -= ne.length + 5);
          var le = g(
            j.map(function (ce) {
              return [ce, w[ce]];
            }),
            T,
            v
          );
          return ''
            .concat(J)
            .concat(ne)
            .concat(le ? ' { '.concat(le, ' }') : '');
        }
        function st(w, T) {
          var j = a(w, 2),
            J = j[0],
            ne = j[1];
          return (
            (T.truncate -= 3),
            ne
              ? ''
                  .concat(T.stylize(J, 'yellow'), '=')
                  .concat(T.stylize('"'.concat(ne, '"'), 'string'))
              : ''.concat(T.stylize(J, 'yellow'))
          );
        }
        function Ve(w, T) {
          return g(
            w,
            T,
            Ye,
            `
`
          );
        }
        function Ye(w, T) {
          var j = w.getAttributeNames(),
            J = w.tagName.toLowerCase(),
            ne = T.stylize('<'.concat(J), 'special'),
            le = T.stylize('>', 'special'),
            ce = T.stylize('</'.concat(J, '>'), 'special');
          T.truncate -= J.length * 2 + 5;
          var de = '';
          j.length > 0 &&
            ((de += ' '),
            (de += g(
              j.map(function (ve) {
                return [ve, w.getAttribute(ve)];
              }),
              T,
              st,
              ' '
            ))),
            (T.truncate -= de.length);
          var me = T.truncate,
            te = Ve(w.children, T);
          return (
            te &&
              te.length > me &&
              (te = ''.concat(d, '(').concat(w.children.length, ')')),
            ''.concat(ne).concat(de).concat(le).concat(te).concat(ce)
          );
        }
        var ut = typeof Symbol == 'function' && typeof Symbol.for == 'function',
          $e = ut ? Symbol.for('chai/inspect') : '@@chai/inspect',
          Oe = !1;
        try {
          var Je = Xd('util');
          Oe = Je.inspect ? Je.inspect.custom : !1;
        } catch {
          Oe = !1;
        }
        function Pe() {
          this.key = 'chai/loupe__' + Math.random() + Date.now();
        }
        Pe.prototype = {
          get: function (w) {
            return w[this.key];
          },
          has: function (w) {
            return this.key in w;
          },
          set: function (w, T) {
            Object.isExtensible(w) &&
              Object.defineProperty(w, this.key, {
                value: T,
                configurable: !0,
              });
          },
        };
        var Ae = new (typeof WeakMap == 'function' ? WeakMap : Pe)(),
          Me = {},
          Xe = {
            undefined: function (w, T) {
              return T.stylize('undefined', 'undefined');
            },
            null: function (w, T) {
              return T.stylize(null, 'null');
            },
            boolean: function (w, T) {
              return T.stylize(w, 'boolean');
            },
            Boolean: function (w, T) {
              return T.stylize(w, 'boolean');
            },
            number: oe,
            Number: oe,
            bigint: ae,
            BigInt: ae,
            string: D,
            String: D,
            function: H,
            Function: H,
            symbol: U,
            Symbol: U,
            Array: S,
            Date: I,
            Map: re,
            Set: q,
            RegExp: ue,
            Promise: W,
            WeakSet: function (w, T) {
              return T.stylize('WeakSet{…}', 'special');
            },
            WeakMap: function (w, T) {
              return T.stylize('WeakMap{…}', 'special');
            },
            Arguments: fe,
            Int8Array: x,
            Uint8Array: x,
            Uint8ClampedArray: x,
            Int16Array: x,
            Uint16Array: x,
            Int32Array: x,
            Uint32Array: x,
            Float32Array: x,
            Float64Array: x,
            Generator: function () {
              return '';
            },
            DataView: function () {
              return '';
            },
            ArrayBuffer: function () {
              return '';
            },
            Error: lt,
            HTMLCollection: Ve,
            NodeList: Ve,
          },
          Mt = function (w, T, j) {
            return $e in w && typeof w[$e] == 'function'
              ? w[$e](T)
              : Oe && Oe in w && typeof w[Oe] == 'function'
                ? w[Oe](T.depth, T)
                : 'inspect' in w && typeof w.inspect == 'function'
                  ? w.inspect(T.depth, T)
                  : 'constructor' in w && Ae.has(w.constructor)
                    ? Ae.get(w.constructor)(w, T)
                    : Me[j]
                      ? Me[j](w, T)
                      : '';
          },
          dt = Object.prototype.toString;
        function De(w, T) {
          (T = m(T)), (T.inspect = De);
          var j = T,
            J = j.customInspect,
            ne = w === null ? 'null' : o(w);
          if ((ne === 'object' && (ne = dt.call(w).slice(8, -1)), Xe[ne]))
            return Xe[ne](w, T);
          if (J && w) {
            var le = Mt(w, T, ne);
            if (le) return typeof le == 'string' ? le : De(le, T);
          }
          var ce = w ? Object.getPrototypeOf(w) : !1;
          return ce === Object.prototype || ce === null
            ? k(w, T)
            : w && typeof HTMLElement == 'function' && w instanceof HTMLElement
              ? Ye(w, T)
              : 'constructor' in w
                ? w.constructor !== Object
                  ? se(w, T)
                  : k(w, T)
                : w === Object(w)
                  ? k(w, T)
                  : T.stylize(String(w), ne);
        }
        function K(w, T) {
          return Ae.has(w) ? !1 : (Ae.set(w, T), !0);
        }
        function Q(w, T) {
          return w in Me ? !1 : ((Me[w] = T), !0);
        }
        var ye = $e;
        (r.custom = ye),
          (r.default = De),
          (r.inspect = De),
          (r.registerConstructor = K),
          (r.registerStringTag = Q),
          Object.defineProperty(r, '__esModule', { value: !0 });
      });
    },
  }),
  mt = Lt($o(), 1),
  Ma = Lt(ml(), 1),
  cf = Symbol('vitest:SAFE_COLORS'),
  df = {
    bold: ['\x1B[1m', '\x1B[22m', '\x1B[22m\x1B[1m'],
    dim: ['\x1B[2m', '\x1B[22m', '\x1B[22m\x1B[2m'],
    italic: ['\x1B[3m', '\x1B[23m'],
    underline: ['\x1B[4m', '\x1B[24m'],
    inverse: ['\x1B[7m', '\x1B[27m'],
    hidden: ['\x1B[8m', '\x1B[28m'],
    strikethrough: ['\x1B[9m', '\x1B[29m'],
    black: ['\x1B[30m', '\x1B[39m'],
    red: ['\x1B[31m', '\x1B[39m'],
    green: ['\x1B[32m', '\x1B[39m'],
    yellow: ['\x1B[33m', '\x1B[39m'],
    blue: ['\x1B[34m', '\x1B[39m'],
    magenta: ['\x1B[35m', '\x1B[39m'],
    cyan: ['\x1B[36m', '\x1B[39m'],
    white: ['\x1B[37m', '\x1B[39m'],
    gray: ['\x1B[90m', '\x1B[39m'],
    bgBlack: ['\x1B[40m', '\x1B[49m'],
    bgRed: ['\x1B[41m', '\x1B[49m'],
    bgGreen: ['\x1B[42m', '\x1B[49m'],
    bgYellow: ['\x1B[43m', '\x1B[49m'],
    bgBlue: ['\x1B[44m', '\x1B[49m'],
    bgMagenta: ['\x1B[45m', '\x1B[49m'],
    bgCyan: ['\x1B[46m', '\x1B[49m'],
    bgWhite: ['\x1B[47m', '\x1B[49m'],
  },
  ff = Object.entries(df);
function Do(e) {
  return String(e);
}
Do.open = '';
Do.close = '';
var pf = ff.reduce((e, [t]) => ((e[t] = Do), e), { isColorSupported: !1 });
function mf() {
  return globalThis[cf] || pf;
}
function ja(e) {
  if (e === void 0) return 'undefined';
  if (e === null) return 'null';
  if (Array.isArray(e)) return 'array';
  if (typeof e == 'boolean') return 'boolean';
  if (typeof e == 'function') return 'function';
  if (typeof e == 'number') return 'number';
  if (typeof e == 'string') return 'string';
  if (typeof e == 'bigint') return 'bigint';
  if (typeof e == 'object') {
    if (e != null) {
      if (e.constructor === RegExp) return 'regexp';
      if (e.constructor === Map) return 'map';
      if (e.constructor === Set) return 'set';
      if (e.constructor === Date) return 'date';
    }
    return 'object';
  } else if (typeof e == 'symbol') return 'symbol';
  throw new Error(`value of unknown type: ${e}`);
}
var rr = -1,
  nr = 1,
  en = 0,
  gr = class {
    constructor(t, r) {
      Xt(this, 0);
      Xt(this, 1);
      (this[0] = t), (this[1] = r);
    }
  },
  hl = 'Compared values have no visual difference.',
  yf =
    'Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.';
function hf(e, t) {
  return e.replace(/\s+$/, (r) => t(r));
}
function ko(e, t, r, o, a, c) {
  return e.length !== 0
    ? r(`${o} ${hf(e, a)}`)
    : o !== ' '
      ? r(o)
      : t && c.length !== 0
        ? r(`${o} ${c}`)
        : '';
}
function bl(
  e,
  t,
  {
    aColor: r,
    aIndicator: o,
    changeLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: c,
  }
) {
  return ko(e, t, r, o, a, c);
}
function gl(
  e,
  t,
  {
    bColor: r,
    bIndicator: o,
    changeLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: c,
  }
) {
  return ko(e, t, r, o, a, c);
}
function vl(
  e,
  t,
  {
    commonColor: r,
    commonIndicator: o,
    commonLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: c,
  }
) {
  return ko(e, t, r, o, a, c);
}
function Ia(e, t, r, o, { patchColor: a }) {
  return a(`@@ -${e + 1},${t - e} +${r + 1},${o - r} @@`);
}
function bf(e, t) {
  let r = e.length,
    o = t.contextLines,
    a = o + o,
    c = r,
    n = !1,
    i = 0,
    l = 0;
  for (; l !== r; ) {
    let E = l;
    for (; l !== r && e[l][0] === en; ) l += 1;
    if (E !== l)
      if (E === 0) l > o && ((c -= l - o), (n = !0));
      else if (l === r) {
        let C = l - E;
        C > o && ((c -= C - o), (n = !0));
      } else {
        let C = l - E;
        C > a && ((c -= C - a), (i += 1));
      }
    for (; l !== r && e[l][0] !== en; ) l += 1;
  }
  let s = i !== 0 || n;
  i !== 0 ? (c += i + 1) : n && (c += 1);
  let u = c - 1,
    f = [],
    d = 0;
  s && f.push('');
  let p = 0,
    m = 0,
    y = 0,
    g = 0,
    h = (E) => {
      let C = f.length;
      f.push(vl(E, C === 0 || C === u, t)), (y += 1), (g += 1);
    },
    v = (E) => {
      let C = f.length;
      f.push(bl(E, C === 0 || C === u, t)), (y += 1);
    },
    S = (E) => {
      let C = f.length;
      f.push(gl(E, C === 0 || C === u, t)), (g += 1);
    };
  for (l = 0; l !== r; ) {
    let E = l;
    for (; l !== r && e[l][0] === en; ) l += 1;
    if (E !== l)
      if (E === 0) {
        l > o && ((E = l - o), (p = E), (m = E), (y = p), (g = m));
        for (let C = E; C !== l; C += 1) h(e[C][1]);
      } else if (l === r) {
        let C = l - E > o ? E + o : l;
        for (let A = E; A !== C; A += 1) h(e[A][1]);
      } else {
        let C = l - E;
        if (C > a) {
          let A = E + o;
          for (let _ = E; _ !== A; _ += 1) h(e[_][1]);
          (f[d] = Ia(p, y, m, g, t)), (d = f.length), f.push('');
          let R = C - a;
          (p = y + R), (m = g + R), (y = p), (g = m);
          for (let _ = l - o; _ !== l; _ += 1) h(e[_][1]);
        } else for (let A = E; A !== l; A += 1) h(e[A][1]);
      }
    for (; l !== r && e[l][0] === rr; ) v(e[l][1]), (l += 1);
    for (; l !== r && e[l][0] === nr; ) S(e[l][1]), (l += 1);
  }
  return (
    s && (f[d] = Ia(p, y, m, g, t)),
    f.join(`
`)
  );
}
function gf(e, t) {
  return e.map((r, o, a) => {
    let c = r[1],
      n = o === 0 || o === a.length - 1;
    switch (r[0]) {
      case rr:
        return bl(c, n, t);
      case nr:
        return gl(c, n, t);
      default:
        return vl(c, n, t);
    }
  }).join(`
`);
}
var Na = (e) => e,
  _l = 5;
function vf() {
  let e = mf();
  return {
    aAnnotation: 'Expected',
    aColor: e.green,
    aIndicator: '-',
    bAnnotation: 'Received',
    bColor: e.red,
    bIndicator: '+',
    changeColor: e.inverse,
    changeLineTrailingSpaceColor: Na,
    commonColor: e.dim,
    commonIndicator: ' ',
    commonLineTrailingSpaceColor: Na,
    compareKeys: void 0,
    contextLines: _l,
    emptyFirstOrLastLinePlaceholder: '',
    expand: !0,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: e.yellow,
  };
}
function _f(e) {
  return e && typeof e == 'function' ? e : void 0;
}
function Ef(e) {
  return typeof e == 'number' && Number.isSafeInteger(e) && e >= 0 ? e : _l;
}
function kr(e = {}) {
  return {
    ...vf(),
    ...e,
    compareKeys: _f(e.compareKeys),
    contextLines: Ef(e.contextLines),
  };
}
function Qt(e) {
  return e.length === 1 && e[0].length === 0;
}
function wf(e) {
  let t = 0,
    r = 0;
  return (
    e.forEach((o) => {
      switch (o[0]) {
        case rr:
          t += 1;
          break;
        case nr:
          r += 1;
          break;
      }
    }),
    { a: t, b: r }
  );
}
function Sf(
  {
    aAnnotation: e,
    aColor: t,
    aIndicator: r,
    bAnnotation: o,
    bColor: a,
    bIndicator: c,
    includeChangeCounts: n,
    omitAnnotationLines: i,
  },
  l
) {
  if (i) return '';
  let s = '',
    u = '';
  if (n) {
    let p = String(l.a),
      m = String(l.b),
      y = o.length - e.length,
      g = ' '.repeat(Math.max(0, y)),
      h = ' '.repeat(Math.max(0, -y)),
      v = m.length - p.length,
      S = ' '.repeat(Math.max(0, v)),
      E = ' '.repeat(Math.max(0, -v));
    (s = `${g}  ${r} ${S}${p}`), (u = `${h}  ${c} ${E}${m}`);
  }
  let f = `${r} ${e}${s}`,
    d = `${c} ${o}${u}`;
  return `${t(f)}
${a(d)}

`;
}
function El(e, t) {
  return Sf(t, wf(e)) + (t.expand ? gf(e, t) : bf(e, t));
}
function Lo(e, t, r) {
  return El(wl(Qt(e) ? [] : e, Qt(t) ? [] : t), kr(r));
}
function Cf(e, t, r, o, a) {
  if (
    (Qt(e) && Qt(r) && ((e = []), (r = [])),
    Qt(t) && Qt(o) && ((t = []), (o = [])),
    e.length !== r.length || t.length !== o.length)
  )
    return Lo(e, t, a);
  let c = wl(r, o),
    n = 0,
    i = 0;
  return (
    c.forEach((l) => {
      switch (l[0]) {
        case rr:
          (l[1] = e[n]), (n += 1);
          break;
        case nr:
          (l[1] = t[i]), (i += 1);
          break;
        default:
          (l[1] = t[i]), (n += 1), (i += 1);
      }
    }),
    El(c, kr(a))
  );
}
function wl(e, t) {
  let r = e.length,
    o = t.length,
    a = (s, u) => e[s] === t[u],
    c = [],
    n = 0,
    i = 0,
    l = (s, u, f) => {
      for (; n !== u; n += 1) c.push(new gr(rr, e[n]));
      for (; i !== f; i += 1) c.push(new gr(nr, t[i]));
      for (; s !== 0; s -= 1, n += 1, i += 1) c.push(new gr(en, t[i]));
    };
  for ((Ma.default.default || Ma.default)(r, o, a, l); n !== r; n += 1)
    c.push(new gr(rr, e[n]));
  for (; i !== o; i += 1) c.push(new gr(nr, t[i]));
  return c;
}
function Qn(e, t) {
  let { commonColor: r } = kr(t);
  return r(e);
}
var {
    AsymmetricMatcher: Of,
    DOMCollection: Pf,
    DOMElement: Rf,
    Immutable: Tf,
    ReactElement: Af,
    ReactTestComponent: qf,
  } = mt.plugins,
  Sl = [qf, Af, Rf, Pf, Tf, Of],
  Zn = { plugins: Sl },
  Cl = { callToJSON: !1, maxDepth: 10, plugins: Sl };
function xf(e, t, r) {
  if (Object.is(e, t)) return '';
  let o = ja(e),
    a = o,
    c = !1;
  if (o === 'object' && typeof e.asymmetricMatch == 'function') {
    if (
      e.$$typeof !== Symbol.for('jest.asymmetricMatcher') ||
      typeof e.getExpectedType != 'function'
    )
      return null;
    (a = e.getExpectedType()), (c = a === 'string');
  }
  if (a !== ja(t)) {
    let {
        aAnnotation: n,
        aColor: i,
        aIndicator: l,
        bAnnotation: s,
        bColor: u,
        bIndicator: f,
      } = kr(r),
      d = eo(Cl, r),
      p = (0, mt.format)(e, d),
      m = (0, mt.format)(t, d),
      y = `${i(`${l} ${n}:`)} 
${p}`,
      g = `${u(`${f} ${s}:`)} 
${m}`;
    return `${y}

${g}`;
  }
  if (c) return null;
  switch (o) {
    case 'string':
      return Lo(
        e.split(`
`),
        t.split(`
`),
        r
      );
    case 'boolean':
    case 'number':
      return Mf(e, t, r);
    case 'map':
      return Fn(Ba(e), Ba(t), r);
    case 'set':
      return Fn($a(e), $a(t), r);
    default:
      return Fn(e, t, r);
  }
}
function Mf(e, t, r) {
  let o = (0, mt.format)(e, Zn),
    a = (0, mt.format)(t, Zn);
  return o === a
    ? ''
    : Lo(
        o.split(`
`),
        a.split(`
`),
        r
      );
}
function Ba(e) {
  return new Map(Array.from(e.entries()).sort());
}
function $a(e) {
  return new Set(Array.from(e.values()).sort());
}
function Fn(e, t, r) {
  let o,
    a = !1;
  try {
    let n = eo(Zn, r);
    o = Da(e, t, n, r);
  } catch {
    a = !0;
  }
  let c = Qn(hl, r);
  if (o === void 0 || o === c) {
    let n = eo(Cl, r);
    (o = Da(e, t, n, r)),
      o !== c &&
        !a &&
        (o = `${Qn(yf, r)}

${o}`);
  }
  return o;
}
function eo(e, t) {
  let { compareKeys: r } = kr(t);
  return { ...e, compareKeys: r };
}
function Da(e, t, r, o) {
  let a = { ...r, indent: 0 },
    c = (0, mt.format)(e, a),
    n = (0, mt.format)(t, a);
  if (c === n) return Qn(hl, o);
  {
    let i = (0, mt.format)(e, r),
      l = (0, mt.format)(t, r);
    return Cf(
      i.split(`
`),
      l.split(`
`),
      c.split(`
`),
      n.split(`
`),
      o
    );
  }
}
var to = Lt($o(), 1),
  jf = Lt(yl(), 1),
  {
    AsymmetricMatcher: If,
    DOMCollection: Nf,
    DOMElement: Bf,
    Immutable: $f,
    ReactElement: Df,
    ReactTestComponent: kf,
  } = to.plugins,
  ka = [kf, Df, Bf, Nf, $f, If];
function ro(e, t = 10, { maxLength: r, ...o } = {}) {
  let a = r ?? 1e4,
    c;
  try {
    c = (0, to.format)(e, { maxDepth: t, escapeString: !1, plugins: ka, ...o });
  } catch {
    c = (0, to.format)(e, {
      callToJSON: !1,
      maxDepth: t,
      escapeString: !1,
      plugins: ka,
      ...o,
    });
  }
  return c.length >= a && t > 1 ? ro(e, Math.floor(t / 2)) : c;
}
var Lf = /%[sdjifoOcj%]/g;
function Ff(...e) {
  if (typeof e[0] != 'string') {
    let c = [];
    for (let n = 0; n < e.length; n++)
      c.push(vr(e[n], { depth: 0, colors: !1, compact: 3 }));
    return c.join(' ');
  }
  let t = e.length,
    r = 1,
    o = e[0],
    a = String(o).replace(Lf, (c) => {
      if (c === '%%') return '%';
      if (r >= t) return c;
      switch (c) {
        case '%s': {
          let n = e[r++];
          return typeof n == 'bigint'
            ? `${n.toString()}n`
            : typeof n == 'number' && n === 0 && 1 / n < 0
              ? '-0'
              : typeof n == 'object' && n !== null
                ? vr(n, { depth: 0, colors: !1, compact: 3 })
                : String(n);
        }
        case '%d': {
          let n = e[r++];
          return typeof n == 'bigint'
            ? `${n.toString()}n`
            : Number(n).toString();
        }
        case '%i': {
          let n = e[r++];
          return typeof n == 'bigint'
            ? `${n.toString()}n`
            : Number.parseInt(String(n)).toString();
        }
        case '%f':
          return Number.parseFloat(String(e[r++])).toString();
        case '%o':
          return vr(e[r++], { showHidden: !0, showProxy: !0 });
        case '%O':
          return vr(e[r++]);
        case '%c':
          return r++, '';
        case '%j':
          try {
            return JSON.stringify(e[r++]);
          } catch (n) {
            let i = n.message;
            if (
              i.includes('circular structure') ||
              i.includes('cyclic structures') ||
              i.includes('cyclic object')
            )
              return '[Circular]';
            throw n;
          }
        default:
          return c;
      }
    });
  for (let c = e[r]; r < t; c = e[++r])
    c === null || typeof c != 'object' ? (a += ` ${c}`) : (a += ` ${vr(c)}`);
  return a;
}
function vr(e, t = {}) {
  return (
    t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY),
    (0, jf.inspect)(e, t)
  );
}
function Uf(e) {
  return (
    e === Object.prototype || e === Function.prototype || e === RegExp.prototype
  );
}
function no(e) {
  return Object.prototype.toString.apply(e).slice(8, -1);
}
function Hf(e, t) {
  let r = typeof t == 'function' ? t : (o) => t.add(o);
  Object.getOwnPropertyNames(e).forEach(r),
    Object.getOwnPropertySymbols(e).forEach(r);
}
function Ol(e) {
  let t = new Set();
  return Uf(e) ? [] : (Hf(e, t), Array.from(t));
}
var Pl = { forceWritable: !1 };
function La(e, t = Pl) {
  return oo(e, new WeakMap(), t);
}
function oo(e, t, r = Pl) {
  let o, a;
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    for (a = Array((o = e.length)), t.set(e, a); o--; ) a[o] = oo(e[o], t);
    return a;
  }
  if (Object.prototype.toString.call(e) === '[object Object]') {
    (a = Object.create(Object.getPrototypeOf(e))), t.set(e, a);
    let c = Ol(e);
    for (let n of c) {
      let i = Object.getOwnPropertyDescriptor(e, n);
      if (!i) continue;
      let l = oo(e[n], t);
      'get' in i
        ? Object.defineProperty(a, n, {
            ...i,
            get() {
              return l;
            },
          })
        : Object.defineProperty(a, n, {
            ...i,
            writable: r.forceWritable ? !0 : i.writable,
            value: l,
          });
    }
    return a;
  }
  return e;
}
Lt($o(), 1);
Lt(ml(), 1);
Lt(yl(), 1);
var zf = '@@__IMMUTABLE_RECORD__@@',
  Vf = '@@__IMMUTABLE_ITERABLE__@@';
function Wf(e) {
  return e && (e[Vf] || e[zf]);
}
var Gf = Object.getPrototypeOf({});
function Fa(e) {
  return e instanceof Error
    ? `<unserializable>: ${e.message}`
    : typeof e == 'string'
      ? `<unserializable>: ${e}`
      : '<unserializable>';
}
function Cr(e, t = new WeakMap()) {
  if (!e || typeof e == 'string') return e;
  if (typeof e == 'function') return `Function<${e.name || 'anonymous'}>`;
  if (typeof e == 'symbol') return e.toString();
  if (typeof e != 'object') return e;
  if (Wf(e)) return Cr(e.toJSON(), t);
  if (
    e instanceof Promise ||
    (e.constructor && e.constructor.prototype === 'AsyncFunction')
  )
    return 'Promise';
  if (typeof Element < 'u' && e instanceof Element) return e.tagName;
  if (typeof e.asymmetricMatch == 'function')
    return `${e.toString()} ${Ff(e.sample)}`;
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    let r = new Array(e.length);
    return (
      t.set(e, r),
      e.forEach((o, a) => {
        try {
          r[a] = Cr(o, t);
        } catch (c) {
          r[a] = Fa(c);
        }
      }),
      r
    );
  } else {
    let r = Object.create(null);
    t.set(e, r);
    let o = e;
    for (; o && o !== Gf; )
      Object.getOwnPropertyNames(o).forEach((a) => {
        if (!(a in r))
          try {
            r[a] = Cr(e[a], t);
          } catch (c) {
            delete r[a], (r[a] = Fa(c));
          }
      }),
        (o = Object.getPrototypeOf(o));
    return r;
  }
}
function Ua(e) {
  return e.replace(/__vite_ssr_import_\d+__\./g, '');
}
function Kf(e, t) {
  if (!e || typeof e != 'object') return { message: e };
  if (
    (e.stack && (e.stackStr = String(e.stack)),
    e.name && (e.nameStr = String(e.name)),
    e.showDiff ||
      (e.showDiff === void 0 && e.expected !== void 0 && e.actual !== void 0))
  ) {
    let r = La(e.actual, { forceWritable: !0 }),
      o = La(e.expected, { forceWritable: !0 }),
      { replacedActual: a, replacedExpected: c } = Rl(r, o);
    e.diff = xf(c, a, t);
  }
  typeof e.expected != 'string' && (e.expected = ro(e.expected, 10)),
    typeof e.actual != 'string' && (e.actual = ro(e.actual, 10));
  try {
    typeof e.message == 'string' && (e.message = Ua(e.message)),
      typeof e.cause == 'object' &&
        typeof e.cause.message == 'string' &&
        (e.cause.message = Ua(e.cause.message));
  } catch {}
  try {
    return Cr(e);
  } catch (r) {
    return Cr(
      new Error(`Failed to fully serialize error: ${r == null ? void 0 : r.message}
Inner error message: ${e == null ? void 0 : e.message}`)
    );
  }
}
function Ha(e) {
  return no(e) === 'Object' && typeof e.asymmetricMatch == 'function';
}
function za(e, t) {
  let r = no(e),
    o = no(t);
  return r === o && r === 'Object';
}
function Rl(e, t, r = new WeakSet(), o = new WeakSet()) {
  return za(e, t)
    ? r.has(e) || o.has(t)
      ? { replacedActual: e, replacedExpected: t }
      : (r.add(e),
        o.add(t),
        Ol(t).forEach((a) => {
          let c = t[a],
            n = e[a];
          if (Ha(c)) c.asymmetricMatch(n) && (e[a] = c);
          else if (Ha(n)) n.asymmetricMatch(c) && (t[a] = n);
          else if (za(n, c)) {
            let i = Rl(n, c, r, o);
            (e[a] = i.replacedActual), (t[a] = i.replacedExpected);
          }
        }),
        { replacedActual: e, replacedExpected: t })
    : { replacedActual: e, replacedExpected: t };
}
var Yf = ((e) => (
    (e.DONE = 'done'),
    (e.ERROR = 'error'),
    (e.ACTIVE = 'active'),
    (e.WAITING = 'waiting'),
    e
  ))(Yf || {}),
  pt = {
    CALL: 'storybook/instrumenter/call',
    SYNC: 'storybook/instrumenter/sync',
    START: 'storybook/instrumenter/start',
    BACK: 'storybook/instrumenter/back',
    GOTO: 'storybook/instrumenter/goto',
    NEXT: 'storybook/instrumenter/next',
    END: 'storybook/instrumenter/end',
  },
  Va = { start: !1, back: !1, goto: !1, next: !1, end: !1 },
  Wa = new Error(
    'This function ran after the play function completed. Did you forget to `await` it?'
  ),
  Ga = (e) => Object.prototype.toString.call(e) === '[object Object]',
  Jf = (e) => Object.prototype.toString.call(e) === '[object Module]',
  Xf = (e) => {
    if (!Ga(e) && !Jf(e)) return !1;
    if (e.constructor === void 0) return !0;
    let t = e.constructor.prototype;
    return !!Ga(t);
  },
  Qf = (e) => {
    try {
      return new e.constructor();
    } catch {
      return {};
    }
  },
  Un = () => ({
    renderPhase: void 0,
    isDebugging: !1,
    isPlaying: !1,
    isLocked: !1,
    cursor: 0,
    calls: [],
    shadowCalls: [],
    callRefsByResult: new Map(),
    chainedCallIds: new Set(),
    ancestors: [],
    playUntil: void 0,
    resolvers: {},
    syncTimeout: void 0,
  }),
  Ka = (e, t = !1) => {
    let r = (t ? e.shadowCalls : e.calls).filter((a) => a.retain);
    if (!r.length) return;
    let o = new Map(
      Array.from(e.callRefsByResult.entries()).filter(([, a]) => a.retain)
    );
    return { cursor: r.length, calls: r, callRefsByResult: o };
  },
  Zf = class {
    constructor() {
      (this.initialized = !1),
        (this.channel = Fd.getChannel()),
        (this.state =
          et.window.parent
            .__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {});
      let e = ({ storyId: n, isPlaying: i = !0, isDebugging: l = !1 }) => {
        let s = this.getState(n);
        this.setState(n, {
          ...Un(),
          ...Ka(s, l),
          shadowCalls: l ? s.shadowCalls : [],
          chainedCallIds: l ? s.chainedCallIds : new Set(),
          playUntil: l ? s.playUntil : void 0,
          isPlaying: i,
          isDebugging: l,
        }),
          this.sync(n);
      };
      this.channel.on(xa, e),
        this.channel.on(zd, ({ storyId: n, newPhase: i }) => {
          let { isDebugging: l } = this.getState(n);
          this.setState(n, { renderPhase: i }),
            i === 'preparing' && l && e({ storyId: n }),
            i === 'playing' && e({ storyId: n, isDebugging: l }),
            i === 'played' &&
              this.setState(n, {
                isLocked: !1,
                isPlaying: !1,
                isDebugging: !1,
              }),
            i === 'errored' &&
              this.setState(n, { isLocked: !1, isPlaying: !1 });
        }),
        this.channel.on(Vd, () => {
          this.initialized ? this.cleanup() : (this.initialized = !0);
        });
      let t = ({ storyId: n, playUntil: i }) => {
          this.getState(n).isDebugging ||
            this.setState(n, ({ calls: s }) => ({
              calls: [],
              shadowCalls: s.map((u) => ({ ...u, status: 'waiting' })),
              isDebugging: !0,
            }));
          let l = this.getLog(n);
          this.setState(n, ({ shadowCalls: s }) => {
            var f;
            if (i || !l.length) return { playUntil: i };
            let u = s.findIndex((d) => d.id === l[0].callId);
            return {
              playUntil:
                (f = s
                  .slice(0, u)
                  .filter((d) => d.interceptable && !d.ancestors.length)
                  .slice(-1)[0]) == null
                  ? void 0
                  : f.id,
            };
          }),
            this.channel.emit(xa, { storyId: n, isDebugging: !0 });
        },
        r = ({ storyId: n }) => {
          var s;
          let i = this.getLog(n).filter((u) => !u.ancestors.length),
            l = i.reduceRight(
              (u, f, d) => (u >= 0 || f.status === 'waiting' ? u : d),
              -1
            );
          t({
            storyId: n,
            playUntil: (s = i[l - 1]) == null ? void 0 : s.callId,
          });
        },
        o = ({ storyId: n, callId: i }) => {
          var p;
          let { calls: l, shadowCalls: s, resolvers: u } = this.getState(n),
            f = l.find(({ id: m }) => m === i),
            d = s.find(({ id: m }) => m === i);
          if (!f && d && Object.values(u).length > 0) {
            let m =
              (p = this.getLog(n).find((y) => y.status === 'waiting')) == null
                ? void 0
                : p.callId;
            d.id !== m && this.setState(n, { playUntil: d.id }),
              Object.values(u).forEach((y) => y());
          } else t({ storyId: n, playUntil: i });
        },
        a = ({ storyId: n }) => {
          var l;
          let { resolvers: i } = this.getState(n);
          if (Object.values(i).length > 0) Object.values(i).forEach((s) => s());
          else {
            let s =
              (l = this.getLog(n).find((u) => u.status === 'waiting')) == null
                ? void 0
                : l.callId;
            s ? t({ storyId: n, playUntil: s }) : c({ storyId: n });
          }
        },
        c = ({ storyId: n }) => {
          this.setState(n, { playUntil: void 0, isDebugging: !1 }),
            Object.values(this.getState(n).resolvers).forEach((i) => i());
        };
      this.channel.on(pt.START, t),
        this.channel.on(pt.BACK, r),
        this.channel.on(pt.GOTO, o),
        this.channel.on(pt.NEXT, a),
        this.channel.on(pt.END, c);
    }
    getState(e) {
      return this.state[e] || Un();
    }
    setState(e, t) {
      let r = this.getState(e),
        o = typeof t == 'function' ? t(r) : t;
      (this.state = { ...this.state, [e]: { ...r, ...o } }),
        (et.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ =
          this.state);
    }
    cleanup() {
      this.state = Object.entries(this.state).reduce((t, [r, o]) => {
        let a = Ka(o);
        return a && (t[r] = Object.assign(Un(), a)), t;
      }, {});
      let e = { controlStates: Va, logItems: [] };
      this.channel.emit(pt.SYNC, e),
        (et.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ =
          this.state);
    }
    getLog(e) {
      let { calls: t, shadowCalls: r } = this.getState(e),
        o = [...r];
      t.forEach((c, n) => {
        o[n] = c;
      });
      let a = new Set();
      return o.reduceRight(
        (c, n) => (
          n.args.forEach((i) => {
            i != null && i.__callId__ && a.add(i.__callId__);
          }),
          n.path.forEach((i) => {
            i.__callId__ && a.add(i.__callId__);
          }),
          (n.interceptable || n.exception) &&
            !a.has(n.id) &&
            (c.unshift({
              callId: n.id,
              status: n.status,
              ancestors: n.ancestors,
            }),
            a.add(n.id)),
          c
        ),
        []
      );
    }
    instrument(e, t, r = 0) {
      if (!Xf(e)) return e;
      let { mutate: o = !1, path: a = [] } = t,
        c = t.getKeys ? t.getKeys(e, r) : Object.keys(e);
      return (
        (r += 1),
        c.reduce(
          (n, i) => {
            let l = ep(e, i);
            if (typeof (l == null ? void 0 : l.get) == 'function') {
              let u = () => {
                var f, d;
                return (d =
                  (f = l == null ? void 0 : l.get) == null
                    ? void 0
                    : f.bind(e)) == null
                  ? void 0
                  : d();
              };
              return (
                Object.defineProperty(n, i, {
                  get: () =>
                    this.instrument(u(), { ...t, path: a.concat(i) }, r),
                }),
                n
              );
            }
            let s = e[i];
            return typeof s != 'function'
              ? ((n[i] = this.instrument(s, { ...t, path: a.concat(i) }, r)), n)
              : '__originalFn__' in s && typeof s.__originalFn__ == 'function'
                ? ((n[i] = s), n)
                : ((n[i] = (...u) => this.track(i, s, e, u, t)),
                  (n[i].__originalFn__ = s),
                  Object.defineProperty(n[i], 'name', {
                    value: i,
                    writable: !1,
                  }),
                  Object.keys(s).length > 0 &&
                    Object.assign(
                      n[i],
                      this.instrument({ ...s }, { ...t, path: a.concat(i) }, r)
                    ),
                  n);
          },
          o ? e : Qf(e)
        )
      );
    }
    track(e, t, r, o, a) {
      var y, g, h, v;
      let c =
          ((y = o == null ? void 0 : o[0]) == null ? void 0 : y.__storyId__) ||
          ((v =
            (h =
              (g = et.__STORYBOOK_PREVIEW__) == null
                ? void 0
                : g.selectionStore) == null
              ? void 0
              : h.selection) == null
            ? void 0
            : v.storyId),
        { cursor: n, ancestors: i } = this.getState(c);
      this.setState(c, { cursor: n + 1 });
      let l = `${i.slice(-1)[0] || c} [${n}] ${e}`,
        { path: s = [], intercept: u = !1, retain: f = !1 } = a,
        d = typeof u == 'function' ? u(e, s) : u,
        p = {
          id: l,
          cursor: n,
          storyId: c,
          ancestors: i,
          path: s,
          method: e,
          args: o,
          interceptable: d,
          retain: f,
        },
        m = (d && !i.length ? this.intercept : this.invoke).call(
          this,
          t,
          r,
          p,
          a
        );
      return this.instrument(m, {
        ...a,
        mutate: !0,
        path: [{ __callId__: p.id }],
      });
    }
    intercept(e, t, r, o) {
      let {
          chainedCallIds: a,
          isDebugging: c,
          playUntil: n,
        } = this.getState(r.storyId),
        i = a.has(r.id);
      return !c || i || n
        ? (n === r.id && this.setState(r.storyId, { playUntil: void 0 }),
          this.invoke(e, t, r, o))
        : new Promise((l) => {
            this.setState(r.storyId, ({ resolvers: s }) => ({
              isLocked: !1,
              resolvers: { ...s, [r.id]: l },
            }));
          }).then(
            () => (
              this.setState(r.storyId, (l) => {
                let { [r.id]: s, ...u } = l.resolvers;
                return { isLocked: !0, resolvers: u };
              }),
              this.invoke(e, t, r, o)
            )
          );
    }
    invoke(e, t, r, o) {
      let { callRefsByResult: a, renderPhase: c } = this.getState(r.storyId),
        n = (s) => {
          var u, f;
          if (a.has(s)) return a.get(s);
          if (s instanceof Array) return s.map(n);
          if (s instanceof Date)
            return { __date__: { value: s.toISOString() } };
          if (s instanceof Error) {
            let { name: d, message: p, stack: m } = s;
            return { __error__: { name: d, message: p, stack: m } };
          }
          if (s instanceof RegExp) {
            let { flags: d, source: p } = s;
            return { __regexp__: { flags: d, source: p } };
          }
          if (s instanceof et.window.HTMLElement) {
            let {
                prefix: d,
                localName: p,
                id: m,
                classList: y,
                innerText: g,
              } = s,
              h = Array.from(y);
            return {
              __element__: {
                prefix: d,
                localName: p,
                id: m,
                classNames: h,
                innerText: g,
              },
            };
          }
          return typeof s == 'function'
            ? { __function__: { name: s.name } }
            : typeof s == 'symbol'
              ? { __symbol__: { description: s.description } }
              : typeof s == 'object' &&
                  (u = s == null ? void 0 : s.constructor) != null &&
                  u.name &&
                  ((f = s == null ? void 0 : s.constructor) == null
                    ? void 0
                    : f.name) !== 'Object'
                ? { __class__: { name: s.constructor.name } }
                : Object.prototype.toString.call(s) === '[object Object]'
                  ? Object.fromEntries(
                      Object.entries(s).map(([d, p]) => [d, n(p)])
                    )
                  : s;
        },
        i = { ...r, args: r.args.map(n) };
      r.path.forEach((s) => {
        s != null &&
          s.__callId__ &&
          this.setState(r.storyId, ({ chainedCallIds: u }) => ({
            chainedCallIds: new Set(Array.from(u).concat(s.__callId__)),
          }));
      });
      let l = (s) => {
        if (s instanceof Error) {
          let { name: u, message: f, stack: d, callId: p = r.id } = s,
            {
              showDiff: m = void 0,
              diff: y = void 0,
              actual: g = void 0,
              expected: h = void 0,
            } = Kf(s),
            v = {
              name: u,
              message: f,
              stack: d,
              callId: p,
              showDiff: m,
              diff: y,
              actual: g,
              expected: h,
            };
          if (
            (this.update({ ...i, status: 'error', exception: v }),
            this.setState(r.storyId, (S) => ({
              callRefsByResult: new Map([
                ...Array.from(S.callRefsByResult.entries()),
                [s, { __callId__: r.id, retain: r.retain }],
              ]),
            })),
            r.ancestors.length)
          )
            throw (
              (Object.prototype.hasOwnProperty.call(s, 'callId') ||
                Object.defineProperty(s, 'callId', { value: r.id }),
              s)
            );
          if (s !== Wa) throw (Hd.warn(s), Wd);
        }
        throw s;
      };
      try {
        if (c === 'played' && !r.retain) throw Wa;
        let s = (
            o.getArgs ? o.getArgs(r, this.getState(r.storyId)) : r.args
          ).map((f) =>
            typeof f != 'function' || Object.keys(f).length
              ? f
              : (...d) => {
                  let { cursor: p, ancestors: m } = this.getState(r.storyId);
                  this.setState(r.storyId, {
                    cursor: 0,
                    ancestors: [...m, r.id],
                  });
                  let y = () =>
                      this.setState(r.storyId, { cursor: p, ancestors: m }),
                    g = !1;
                  try {
                    let h = f(...d);
                    return h instanceof Promise ? ((g = !0), h.finally(y)) : h;
                  } finally {
                    g || y();
                  }
                }
          ),
          u = e.apply(t, s);
        return (
          u &&
            ['object', 'function', 'symbol'].includes(typeof u) &&
            this.setState(r.storyId, (f) => ({
              callRefsByResult: new Map([
                ...Array.from(f.callRefsByResult.entries()),
                [u, { __callId__: r.id, retain: r.retain }],
              ]),
            })),
          this.update({
            ...i,
            status: u instanceof Promise ? 'active' : 'done',
          }),
          u instanceof Promise
            ? u.then((f) => (this.update({ ...i, status: 'done' }), f), l)
            : u
        );
      } catch (s) {
        return l(s);
      }
    }
    update(e) {
      this.channel.emit(pt.CALL, e),
        this.setState(e.storyId, ({ calls: t }) => {
          let r = t
            .concat(e)
            .reduce((o, a) => Object.assign(o, { [a.id]: a }), {});
          return {
            calls: Object.values(r).sort((o, a) =>
              o.id.localeCompare(a.id, void 0, { numeric: !0 })
            ),
          };
        }),
        this.sync(e.storyId);
    }
    sync(e) {
      let t = () => {
        var s;
        let { isLocked: r, isPlaying: o } = this.getState(e),
          a = this.getLog(e),
          c =
            (s = a
              .filter(({ ancestors: u }) => !u.length)
              .find((u) => u.status === 'waiting')) == null
              ? void 0
              : s.callId,
          n = a.some((u) => u.status === 'active');
        if (r || n || a.length === 0) {
          let u = { controlStates: Va, logItems: a };
          this.channel.emit(pt.SYNC, u);
          return;
        }
        let i = a.some((u) => u.status === 'done' || u.status === 'error'),
          l = {
            controlStates: { start: i, back: i, goto: !0, next: o, end: o },
            logItems: a,
            pausedAt: c,
          };
        this.channel.emit(pt.SYNC, l);
      };
      this.setState(
        e,
        ({ syncTimeout: r }) => (
          clearTimeout(r), { syncTimeout: setTimeout(t, 0) }
        )
      );
    }
  };
function Fo(e, t = {}) {
  var r, o, a, c;
  try {
    let n = !1,
      i = !1;
    return (
      (o = (r = et.window.location) == null ? void 0 : r.search) != null &&
      o.includes('instrument=true')
        ? (n = !0)
        : (c = (a = et.window.location) == null ? void 0 : a.search) != null &&
          c.includes('instrument=false') &&
          (i = !0),
      (et.window.parent === et.window && !n) || i
        ? e
        : (et.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ ||
            (et.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ =
              new Zf()),
          et.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(
            e,
            t
          ))
    );
  } catch (n) {
    return Ud.warn(n), e;
  }
}
function ep(e, t) {
  let r = e;
  for (; r != null; ) {
    let o = Object.getOwnPropertyDescriptor(r, t);
    if (o) return o;
    r = Object.getPrototypeOf(r);
  }
}
var tp = {};
const { once: rp } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var np = Object.create,
  Uo = Object.defineProperty,
  op = Object.getOwnPropertyDescriptor,
  Tl = Object.getOwnPropertyNames,
  ap = Object.getPrototypeOf,
  ip = Object.prototype.hasOwnProperty,
  lp = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
        ? new Proxy(e, {
            get: (t, r) => (typeof require < 'u' ? require : t)[r],
          })
        : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  }),
  P = (e, t) =>
    function () {
      return t || (0, e[Tl(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Al = (e, t) => {
    for (var r in t) Uo(e, r, { get: t[r], enumerable: !0 });
  },
  sp = (e, t, r, o) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let a of Tl(t))
        !ip.call(e, a) &&
          a !== r &&
          Uo(e, a, {
            get: () => t[a],
            enumerable: !(o = op(t, a)) || o.enumerable,
          });
    return e;
  },
  _e = (e, t, r) => (
    (r = e != null ? np(ap(e)) : {}),
    sp(
      t || !e || !e.__esModule
        ? Uo(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  ql = P({
    '../../node_modules/assertion-error/index.js'(e, t) {
      function r() {
        var a = [].slice.call(arguments);
        function c(n, i) {
          Object.keys(i).forEach(function (l) {
            ~a.indexOf(l) || (n[l] = i[l]);
          });
        }
        return function () {
          for (
            var n = [].slice.call(arguments), i = 0, l = {};
            i < n.length;
            i++
          )
            c(l, n[i]);
          return l;
        };
      }
      t.exports = o;
      function o(a, c, n) {
        var i = r('name', 'message', 'stack', 'constructor', 'toJSON'),
          l = i(c || {});
        (this.message = a || 'Unspecified AssertionError'),
          (this.showDiff = !1);
        for (var s in l) this[s] = l[s];
        if (((n = n || o), Error.captureStackTrace))
          Error.captureStackTrace(this, n);
        else
          try {
            throw new Error();
          } catch (u) {
            this.stack = u.stack;
          }
      }
      (o.prototype = Object.create(Error.prototype)),
        (o.prototype.name = 'AssertionError'),
        (o.prototype.constructor = o),
        (o.prototype.toJSON = function (a) {
          var c = r('constructor', 'toJSON', 'stack'),
            n = c({ name: this.name }, this);
          return a !== !1 && this.stack && (n.stack = this.stack), n;
        });
    },
  }),
  up = P({
    '../../node_modules/pathval/index.js'(e, t) {
      function r(s, u) {
        return typeof s > 'u' || s === null ? !1 : u in Object(s);
      }
      function o(s) {
        var u = s.replace(/([^\\])\[/g, '$1.['),
          f = u.match(/(\\\.|[^.]+?)+/g);
        return f.map(function (d) {
          if (d === 'constructor' || d === '__proto__' || d === 'prototype')
            return {};
          var p = /^\[(\d+)\]$/,
            m = p.exec(d),
            y = null;
          return (
            m
              ? (y = { i: parseFloat(m[1]) })
              : (y = { p: d.replace(/\\([.[\]])/g, '$1') }),
            y
          );
        });
      }
      function a(s, u, f) {
        var d = s,
          p = null;
        f = typeof f > 'u' ? u.length : f;
        for (var m = 0; m < f; m++) {
          var y = u[m];
          d &&
            (typeof y.p > 'u' ? (d = d[y.i]) : (d = d[y.p]),
            m === f - 1 && (p = d));
        }
        return p;
      }
      function c(s, u, f) {
        for (var d = s, p = f.length, m = null, y = 0; y < p; y++) {
          var g = null,
            h = null;
          if (((m = f[y]), y === p - 1))
            (g = typeof m.p > 'u' ? m.i : m.p), (d[g] = u);
          else if (typeof m.p < 'u' && d[m.p]) d = d[m.p];
          else if (typeof m.i < 'u' && d[m.i]) d = d[m.i];
          else {
            var v = f[y + 1];
            (g = typeof m.p > 'u' ? m.i : m.p),
              (h = typeof v.p > 'u' ? [] : {}),
              (d[g] = h),
              (d = d[g]);
          }
        }
      }
      function n(s, u) {
        var f = o(u),
          d = f[f.length - 1],
          p = {
            parent: f.length > 1 ? a(s, f, f.length - 1) : s,
            name: d.p || d.i,
            value: a(s, f),
          };
        return (p.exists = r(p.parent, p.name)), p;
      }
      function i(s, u) {
        var f = n(s, u);
        return f.value;
      }
      function l(s, u, f) {
        var d = o(u);
        return c(s, f, d), s;
      }
      t.exports = {
        hasProperty: r,
        getPathInfo: n,
        getPathValue: i,
        setPathValue: l,
      };
    },
  }),
  at = P({
    '../../node_modules/chai/lib/chai/utils/flag.js'(e, t) {
      t.exports = function (r, o, a) {
        var c = r.__flags || (r.__flags = Object.create(null));
        if (arguments.length === 3) c[o] = a;
        else return c[o];
      };
    },
  }),
  cp = P({
    '../../node_modules/chai/lib/chai/utils/test.js'(e, t) {
      var r = at();
      t.exports = function (o, a) {
        var c = r(o, 'negate'),
          n = a[0];
        return c ? !n : n;
      };
    },
  }),
  mn = P({
    '../../node_modules/type-detect/type-detect.js'(e, t) {
      (function (r, o) {
        typeof e == 'object' && typeof t < 'u'
          ? (t.exports = o())
          : typeof define == 'function' && define.amd
            ? define(o)
            : (r.typeDetect = o());
      })(e, function () {
        var r = typeof Promise == 'function',
          o = typeof self == 'object' ? self : global,
          a = typeof Symbol < 'u',
          c = typeof Map < 'u',
          n = typeof Set < 'u',
          i = typeof WeakMap < 'u',
          l = typeof WeakSet < 'u',
          s = typeof DataView < 'u',
          u = a && typeof Symbol.iterator < 'u',
          f = a && typeof Symbol.toStringTag < 'u',
          d = n && typeof Set.prototype.entries == 'function',
          p = c && typeof Map.prototype.entries == 'function',
          m = d && Object.getPrototypeOf(new Set().entries()),
          y = p && Object.getPrototypeOf(new Map().entries()),
          g = u && typeof Array.prototype[Symbol.iterator] == 'function',
          h = g && Object.getPrototypeOf([][Symbol.iterator]()),
          v = u && typeof String.prototype[Symbol.iterator] == 'function',
          S = v && Object.getPrototypeOf(''[Symbol.iterator]()),
          E = 8,
          C = -1;
        function A(R) {
          var _ = typeof R;
          if (_ !== 'object') return _;
          if (R === null) return 'null';
          if (R === o) return 'global';
          if (Array.isArray(R) && (f === !1 || !(Symbol.toStringTag in R)))
            return 'Array';
          if (typeof window == 'object' && window !== null) {
            if (typeof window.location == 'object' && R === window.location)
              return 'Location';
            if (typeof window.document == 'object' && R === window.document)
              return 'Document';
            if (typeof window.navigator == 'object') {
              if (
                typeof window.navigator.mimeTypes == 'object' &&
                R === window.navigator.mimeTypes
              )
                return 'MimeTypeArray';
              if (
                typeof window.navigator.plugins == 'object' &&
                R === window.navigator.plugins
              )
                return 'PluginArray';
            }
            if (
              (typeof window.HTMLElement == 'function' ||
                typeof window.HTMLElement == 'object') &&
              R instanceof window.HTMLElement
            ) {
              if (R.tagName === 'BLOCKQUOTE') return 'HTMLQuoteElement';
              if (R.tagName === 'TD') return 'HTMLTableDataCellElement';
              if (R.tagName === 'TH') return 'HTMLTableHeaderCellElement';
            }
          }
          var O = f && R[Symbol.toStringTag];
          if (typeof O == 'string') return O;
          var x = Object.getPrototypeOf(R);
          return x === RegExp.prototype
            ? 'RegExp'
            : x === Date.prototype
              ? 'Date'
              : r && x === Promise.prototype
                ? 'Promise'
                : n && x === Set.prototype
                  ? 'Set'
                  : c && x === Map.prototype
                    ? 'Map'
                    : l && x === WeakSet.prototype
                      ? 'WeakSet'
                      : i && x === WeakMap.prototype
                        ? 'WeakMap'
                        : s && x === DataView.prototype
                          ? 'DataView'
                          : c && x === y
                            ? 'Map Iterator'
                            : n && x === m
                              ? 'Set Iterator'
                              : g && x === h
                                ? 'Array Iterator'
                                : v && x === S
                                  ? 'String Iterator'
                                  : x === null
                                    ? 'Object'
                                    : Object.prototype.toString
                                        .call(R)
                                        .slice(E, C);
        }
        return A;
      });
    },
  }),
  dp = P({
    '../../node_modules/chai/lib/chai/utils/expectTypes.js'(e, t) {
      var r = ql(),
        o = at(),
        a = mn();
      t.exports = function (c, n) {
        var i = o(c, 'message'),
          l = o(c, 'ssfi');
        (i = i ? i + ': ' : ''),
          (c = o(c, 'object')),
          (n = n.map(function (f) {
            return f.toLowerCase();
          })),
          n.sort();
        var s = n
            .map(function (f, d) {
              var p = ~['a', 'e', 'i', 'o', 'u'].indexOf(f.charAt(0))
                  ? 'an'
                  : 'a',
                m = n.length > 1 && d === n.length - 1 ? 'or ' : '';
              return m + p + ' ' + f;
            })
            .join(', '),
          u = a(c).toLowerCase();
        if (
          !n.some(function (f) {
            return u === f;
          })
        )
          throw new r(
            i + 'object tested must be ' + s + ', but ' + u + ' given',
            void 0,
            l
          );
      };
    },
  }),
  xl = P({
    '../../node_modules/chai/lib/chai/utils/getActual.js'(e, t) {
      t.exports = function (r, o) {
        return o.length > 4 ? o[4] : r._obj;
      };
    },
  }),
  Ho = P({
    '../../node_modules/get-func-name/index.js'(e, t) {
      var r = Function.prototype.toString,
        o = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/,
        a = 512;
      function c(n) {
        if (typeof n != 'function') return null;
        var i = '';
        if (typeof Function.prototype.name > 'u' && typeof n.name > 'u') {
          var l = r.call(n);
          if (l.indexOf('(') > a) return i;
          var s = l.match(o);
          s && (i = s[1]);
        } else i = n.name;
        return i;
      }
      t.exports = c;
    },
  }),
  yn = P({
    '../../node_modules/loupe/loupe.js'(e, t) {
      (function (r, o) {
        typeof e == 'object' && typeof t < 'u'
          ? o(e)
          : typeof define == 'function' && define.amd
            ? define(['exports'], o)
            : ((r = typeof globalThis < 'u' ? globalThis : r || self),
              o((r.loupe = {})));
      })(e, function (r) {
        function o(w) {
          '@babel/helpers - typeof';
          return (
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? (o = function (T) {
                  return typeof T;
                })
              : (o = function (T) {
                  return T &&
                    typeof Symbol == 'function' &&
                    T.constructor === Symbol &&
                    T !== Symbol.prototype
                    ? 'symbol'
                    : typeof T;
                }),
            o(w)
          );
        }
        function a(w, T) {
          return c(w) || n(w, T) || i(w, T) || s();
        }
        function c(w) {
          if (Array.isArray(w)) return w;
        }
        function n(w, T) {
          if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(w)))) {
            var j = [],
              J = !0,
              ne = !1,
              le = void 0;
            try {
              for (
                var ce = w[Symbol.iterator](), de;
                !(J = (de = ce.next()).done) &&
                (j.push(de.value), !(T && j.length === T));
                J = !0
              );
            } catch (me) {
              (ne = !0), (le = me);
            } finally {
              try {
                !J && ce.return != null && ce.return();
              } finally {
                if (ne) throw le;
              }
            }
            return j;
          }
        }
        function i(w, T) {
          if (w) {
            if (typeof w == 'string') return l(w, T);
            var j = Object.prototype.toString.call(w).slice(8, -1);
            if (
              (j === 'Object' && w.constructor && (j = w.constructor.name),
              j === 'Map' || j === 'Set')
            )
              return Array.from(w);
            if (
              j === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)
            )
              return l(w, T);
          }
        }
        function l(w, T) {
          (T == null || T > w.length) && (T = w.length);
          for (var j = 0, J = new Array(T); j < T; j++) J[j] = w[j];
          return J;
        }
        function s() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var u = {
            bold: ['1', '22'],
            dim: ['2', '22'],
            italic: ['3', '23'],
            underline: ['4', '24'],
            inverse: ['7', '27'],
            hidden: ['8', '28'],
            strike: ['9', '29'],
            black: ['30', '39'],
            red: ['31', '39'],
            green: ['32', '39'],
            yellow: ['33', '39'],
            blue: ['34', '39'],
            magenta: ['35', '39'],
            cyan: ['36', '39'],
            white: ['37', '39'],
            brightblack: ['30;1', '39'],
            brightred: ['31;1', '39'],
            brightgreen: ['32;1', '39'],
            brightyellow: ['33;1', '39'],
            brightblue: ['34;1', '39'],
            brightmagenta: ['35;1', '39'],
            brightcyan: ['36;1', '39'],
            brightwhite: ['37;1', '39'],
            grey: ['90', '39'],
          },
          f = {
            special: 'cyan',
            number: 'yellow',
            bigint: 'yellow',
            boolean: 'yellow',
            undefined: 'grey',
            null: 'bold',
            string: 'green',
            symbol: 'green',
            date: 'magenta',
            regexp: 'red',
          },
          d = '…';
        function p(w, T) {
          var j = u[f[T]] || u[T];
          return j
            ? '\x1B['
                .concat(j[0], 'm')
                .concat(String(w), '\x1B[')
                .concat(j[1], 'm')
            : String(w);
        }
        function m() {
          var w =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            T = w.showHidden,
            j = T === void 0 ? !1 : T,
            J = w.depth,
            ne = J === void 0 ? 2 : J,
            le = w.colors,
            ce = le === void 0 ? !1 : le,
            de = w.customInspect,
            me = de === void 0 ? !0 : de,
            te = w.showProxy,
            ve = te === void 0 ? !1 : te,
            Re = w.maxArrayLength,
            Ue = Re === void 0 ? 1 / 0 : Re,
            je = w.breakLength,
            Ie = je === void 0 ? 1 / 0 : je,
            ke = w.seen,
            jt = ke === void 0 ? [] : ke,
            ft = w.truncate,
            Yt = ft === void 0 ? 1 / 0 : ft,
            Ct = w.stylize,
            It = Ct === void 0 ? String : Ct,
            ct = {
              showHidden: !!j,
              depth: Number(ne),
              colors: !!ce,
              customInspect: !!me,
              showProxy: !!ve,
              maxArrayLength: Number(Ue),
              breakLength: Number(Ie),
              truncate: Number(Yt),
              seen: jt,
              stylize: It,
            };
          return ct.colors && (ct.stylize = p), ct;
        }
        function y(w, T) {
          var j =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : d;
          w = String(w);
          var J = j.length,
            ne = w.length;
          return J > T && ne > J
            ? j
            : ne > T && ne > J
              ? ''.concat(w.slice(0, T - J)).concat(j)
              : w;
        }
        function g(w, T, j) {
          var J =
            arguments.length > 3 && arguments[3] !== void 0
              ? arguments[3]
              : ', ';
          j = j || T.inspect;
          var ne = w.length;
          if (ne === 0) return '';
          for (
            var le = T.truncate, ce = '', de = '', me = '', te = 0;
            te < ne;
            te += 1
          ) {
            var ve = te + 1 === w.length,
              Re = te + 2 === w.length;
            me = ''.concat(d, '(').concat(w.length - te, ')');
            var Ue = w[te];
            T.truncate = le - ce.length - (ve ? 0 : J.length);
            var je = de || j(Ue, T) + (ve ? '' : J),
              Ie = ce.length + je.length,
              ke = Ie + me.length;
            if (
              (ve && Ie > le && ce.length + me.length <= le) ||
              (!ve && !Re && ke > le) ||
              ((de = ve ? '' : j(w[te + 1], T) + (Re ? '' : J)),
              !ve && Re && ke > le && Ie + de.length > le)
            )
              break;
            if (((ce += je), !ve && !Re && Ie + de.length >= le)) {
              me = ''.concat(d, '(').concat(w.length - te - 1, ')');
              break;
            }
            me = '';
          }
          return ''.concat(ce).concat(me);
        }
        function h(w) {
          return w.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)
            ? w
            : JSON.stringify(w)
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'");
        }
        function v(w, T) {
          var j = a(w, 2),
            J = j[0],
            ne = j[1];
          return (
            (T.truncate -= 2),
            typeof J == 'string'
              ? (J = h(J))
              : typeof J != 'number' && (J = '['.concat(T.inspect(J, T), ']')),
            (T.truncate -= J.length),
            (ne = T.inspect(ne, T)),
            ''.concat(J, ': ').concat(ne)
          );
        }
        function S(w, T) {
          var j = Object.keys(w).slice(w.length);
          if (!w.length && !j.length) return '[]';
          T.truncate -= 4;
          var J = g(w, T);
          T.truncate -= J.length;
          var ne = '';
          return (
            j.length &&
              (ne = g(
                j.map(function (le) {
                  return [le, w[le]];
                }),
                T,
                v
              )),
            '[ '.concat(J).concat(ne ? ', '.concat(ne) : '', ' ]')
          );
        }
        var E = Function.prototype.toString,
          C = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/,
          A = 512;
        function R(w) {
          if (typeof w != 'function') return null;
          var T = '';
          if (typeof Function.prototype.name > 'u' && typeof w.name > 'u') {
            var j = E.call(w);
            if (j.indexOf('(') > A) return T;
            var J = j.match(C);
            J && (T = J[1]);
          } else T = w.name;
          return T;
        }
        var _ = R,
          O = function (w) {
            return typeof Buffer == 'function' && w instanceof Buffer
              ? 'Buffer'
              : w[Symbol.toStringTag]
                ? w[Symbol.toStringTag]
                : _(w.constructor);
          };
        function x(w, T) {
          var j = O(w);
          T.truncate -= j.length + 4;
          var J = Object.keys(w).slice(w.length);
          if (!w.length && !J.length) return ''.concat(j, '[]');
          for (var ne = '', le = 0; le < w.length; le++) {
            var ce = ''
              .concat(T.stylize(y(w[le], T.truncate), 'number'))
              .concat(le === w.length - 1 ? '' : ', ');
            if (
              ((T.truncate -= ce.length), w[le] !== w.length && T.truncate <= 3)
            ) {
              ne += ''.concat(d, '(').concat(w.length - w[le] + 1, ')');
              break;
            }
            ne += ce;
          }
          var de = '';
          return (
            J.length &&
              (de = g(
                J.map(function (me) {
                  return [me, w[me]];
                }),
                T,
                v
              )),
            ''
              .concat(j, '[ ')
              .concat(ne)
              .concat(de ? ', '.concat(de) : '', ' ]')
          );
        }
        function I(w, T) {
          var j = w.toJSON();
          if (j === null) return 'Invalid Date';
          var J = j.split('T'),
            ne = J[0];
          return T.stylize(
            ''.concat(ne, 'T').concat(y(J[1], T.truncate - ne.length - 1)),
            'date'
          );
        }
        function H(w, T) {
          var j = _(w);
          return j
            ? T.stylize(
                '[Function '.concat(y(j, T.truncate - 11), ']'),
                'special'
              )
            : T.stylize('[Function]', 'special');
        }
        function V(w, T) {
          var j = a(w, 2),
            J = j[0],
            ne = j[1];
          return (
            (T.truncate -= 4),
            (J = T.inspect(J, T)),
            (T.truncate -= J.length),
            (ne = T.inspect(ne, T)),
            ''.concat(J, ' => ').concat(ne)
          );
        }
        function L(w) {
          var T = [];
          return (
            w.forEach(function (j, J) {
              T.push([J, j]);
            }),
            T
          );
        }
        function re(w, T) {
          var j = w.size - 1;
          return j <= 0
            ? 'Map{}'
            : ((T.truncate -= 7), 'Map{ '.concat(g(L(w), T, V), ' }'));
        }
        var G =
          Number.isNaN ||
          function (w) {
            return w !== w;
          };
        function oe(w, T) {
          return G(w)
            ? T.stylize('NaN', 'number')
            : w === 1 / 0
              ? T.stylize('Infinity', 'number')
              : w === -1 / 0
                ? T.stylize('-Infinity', 'number')
                : w === 0
                  ? T.stylize(1 / w === 1 / 0 ? '+0' : '-0', 'number')
                  : T.stylize(y(w, T.truncate), 'number');
        }
        function ae(w, T) {
          var j = y(w.toString(), T.truncate - 1);
          return j !== d && (j += 'n'), T.stylize(j, 'bigint');
        }
        function ue(w, T) {
          var j = w.toString().split('/')[2],
            J = T.truncate - (2 + j.length),
            ne = w.source;
          return T.stylize('/'.concat(y(ne, J), '/').concat(j), 'regexp');
        }
        function Z(w) {
          var T = [];
          return (
            w.forEach(function (j) {
              T.push(j);
            }),
            T
          );
        }
        function q(w, T) {
          return w.size === 0
            ? 'Set{}'
            : ((T.truncate -= 7), 'Set{ '.concat(g(Z(w), T), ' }'));
        }
        var M = new RegExp(
            "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
            'g'
          ),
          F = {
            '\b': '\\b',
            '	': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            "'": "\\'",
            '\\': '\\\\',
          },
          z = 16,
          X = 4;
        function B(w) {
          return (
            F[w] ||
            '\\u'.concat('0000'.concat(w.charCodeAt(0).toString(z)).slice(-X))
          );
        }
        function D(w, T) {
          return (
            M.test(w) && (w = w.replace(M, B)),
            T.stylize("'".concat(y(w, T.truncate - 2), "'"), 'string')
          );
        }
        function U(w) {
          return 'description' in Symbol.prototype
            ? w.description
              ? 'Symbol('.concat(w.description, ')')
              : 'Symbol()'
            : w.toString();
        }
        var ee = function () {
          return 'Promise{…}';
        };
        try {
          var b = process.binding('util'),
            N = b.getPromiseDetails,
            $ = b.kPending,
            Y = b.kRejected;
          Array.isArray(N(Promise.resolve())) &&
            (ee = function (w, T) {
              var j = N(w),
                J = a(j, 2),
                ne = J[0],
                le = J[1];
              return ne === $
                ? 'Promise{<pending>}'
                : 'Promise'
                    .concat(ne === Y ? '!' : '', '{')
                    .concat(T.inspect(le, T), '}');
            });
        } catch {}
        var W = ee;
        function k(w, T) {
          var j = Object.getOwnPropertyNames(w),
            J = Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(w)
              : [];
          if (j.length === 0 && J.length === 0) return '{}';
          if (
            ((T.truncate -= 4), (T.seen = T.seen || []), T.seen.indexOf(w) >= 0)
          )
            return '[Circular]';
          T.seen.push(w);
          var ne = g(
              j.map(function (de) {
                return [de, w[de]];
              }),
              T,
              v
            ),
            le = g(
              J.map(function (de) {
                return [de, w[de]];
              }),
              T,
              v
            );
          T.seen.pop();
          var ce = '';
          return (
            ne && le && (ce = ', '), '{ '.concat(ne).concat(ce).concat(le, ' }')
          );
        }
        var ie =
          typeof Symbol < 'u' && Symbol.toStringTag ? Symbol.toStringTag : !1;
        function se(w, T) {
          var j = '';
          return (
            ie && ie in w && (j = w[ie]),
            (j = j || _(w.constructor)),
            (!j || j === '_class') && (j = '<Anonymous Class>'),
            (T.truncate -= j.length),
            ''.concat(j).concat(k(w, T))
          );
        }
        function fe(w, T) {
          return w.length === 0
            ? 'Arguments[]'
            : ((T.truncate -= 13), 'Arguments[ '.concat(g(w, T), ' ]'));
        }
        var Te = [
          'stack',
          'line',
          'column',
          'name',
          'message',
          'fileName',
          'lineNumber',
          'columnNumber',
          'number',
          'description',
        ];
        function lt(w, T) {
          var j = Object.getOwnPropertyNames(w).filter(function (ce) {
              return Te.indexOf(ce) === -1;
            }),
            J = w.name;
          T.truncate -= J.length;
          var ne = '';
          typeof w.message == 'string'
            ? (ne = y(w.message, T.truncate))
            : j.unshift('message'),
            (ne = ne ? ': '.concat(ne) : ''),
            (T.truncate -= ne.length + 5);
          var le = g(
            j.map(function (ce) {
              return [ce, w[ce]];
            }),
            T,
            v
          );
          return ''
            .concat(J)
            .concat(ne)
            .concat(le ? ' { '.concat(le, ' }') : '');
        }
        function st(w, T) {
          var j = a(w, 2),
            J = j[0],
            ne = j[1];
          return (
            (T.truncate -= 3),
            ne
              ? ''
                  .concat(T.stylize(J, 'yellow'), '=')
                  .concat(T.stylize('"'.concat(ne, '"'), 'string'))
              : ''.concat(T.stylize(J, 'yellow'))
          );
        }
        function Ve(w, T) {
          return g(
            w,
            T,
            Ye,
            `
`
          );
        }
        function Ye(w, T) {
          var j = w.getAttributeNames(),
            J = w.tagName.toLowerCase(),
            ne = T.stylize('<'.concat(J), 'special'),
            le = T.stylize('>', 'special'),
            ce = T.stylize('</'.concat(J, '>'), 'special');
          T.truncate -= J.length * 2 + 5;
          var de = '';
          j.length > 0 &&
            ((de += ' '),
            (de += g(
              j.map(function (ve) {
                return [ve, w.getAttribute(ve)];
              }),
              T,
              st,
              ' '
            ))),
            (T.truncate -= de.length);
          var me = T.truncate,
            te = Ve(w.children, T);
          return (
            te &&
              te.length > me &&
              (te = ''.concat(d, '(').concat(w.children.length, ')')),
            ''.concat(ne).concat(de).concat(le).concat(te).concat(ce)
          );
        }
        var ut = typeof Symbol == 'function' && typeof Symbol.for == 'function',
          $e = ut ? Symbol.for('chai/inspect') : '@@chai/inspect',
          Oe = !1;
        try {
          var Je = lp('util');
          Oe = Je.inspect ? Je.inspect.custom : !1;
        } catch {
          Oe = !1;
        }
        function Pe() {
          this.key = 'chai/loupe__' + Math.random() + Date.now();
        }
        Pe.prototype = {
          get: function (w) {
            return w[this.key];
          },
          has: function (w) {
            return this.key in w;
          },
          set: function (w, T) {
            Object.isExtensible(w) &&
              Object.defineProperty(w, this.key, {
                value: T,
                configurable: !0,
              });
          },
        };
        var Ae = new (typeof WeakMap == 'function' ? WeakMap : Pe)(),
          Me = {},
          Xe = {
            undefined: function (w, T) {
              return T.stylize('undefined', 'undefined');
            },
            null: function (w, T) {
              return T.stylize(null, 'null');
            },
            boolean: function (w, T) {
              return T.stylize(w, 'boolean');
            },
            Boolean: function (w, T) {
              return T.stylize(w, 'boolean');
            },
            number: oe,
            Number: oe,
            bigint: ae,
            BigInt: ae,
            string: D,
            String: D,
            function: H,
            Function: H,
            symbol: U,
            Symbol: U,
            Array: S,
            Date: I,
            Map: re,
            Set: q,
            RegExp: ue,
            Promise: W,
            WeakSet: function (w, T) {
              return T.stylize('WeakSet{…}', 'special');
            },
            WeakMap: function (w, T) {
              return T.stylize('WeakMap{…}', 'special');
            },
            Arguments: fe,
            Int8Array: x,
            Uint8Array: x,
            Uint8ClampedArray: x,
            Int16Array: x,
            Uint16Array: x,
            Int32Array: x,
            Uint32Array: x,
            Float32Array: x,
            Float64Array: x,
            Generator: function () {
              return '';
            },
            DataView: function () {
              return '';
            },
            ArrayBuffer: function () {
              return '';
            },
            Error: lt,
            HTMLCollection: Ve,
            NodeList: Ve,
          },
          Mt = function (w, T, j) {
            return $e in w && typeof w[$e] == 'function'
              ? w[$e](T)
              : Oe && Oe in w && typeof w[Oe] == 'function'
                ? w[Oe](T.depth, T)
                : 'inspect' in w && typeof w.inspect == 'function'
                  ? w.inspect(T.depth, T)
                  : 'constructor' in w && Ae.has(w.constructor)
                    ? Ae.get(w.constructor)(w, T)
                    : Me[j]
                      ? Me[j](w, T)
                      : '';
          },
          dt = Object.prototype.toString;
        function De(w, T) {
          (T = m(T)), (T.inspect = De);
          var j = T,
            J = j.customInspect,
            ne = w === null ? 'null' : o(w);
          if ((ne === 'object' && (ne = dt.call(w).slice(8, -1)), Xe[ne]))
            return Xe[ne](w, T);
          if (J && w) {
            var le = Mt(w, T, ne);
            if (le) return typeof le == 'string' ? le : De(le, T);
          }
          var ce = w ? Object.getPrototypeOf(w) : !1;
          return ce === Object.prototype || ce === null
            ? k(w, T)
            : w && typeof HTMLElement == 'function' && w instanceof HTMLElement
              ? Ye(w, T)
              : 'constructor' in w
                ? w.constructor !== Object
                  ? se(w, T)
                  : k(w, T)
                : w === Object(w)
                  ? k(w, T)
                  : T.stylize(String(w), ne);
        }
        function K(w, T) {
          return Ae.has(w) ? !1 : (Ae.set(w, T), !0);
        }
        function Q(w, T) {
          return w in Me ? !1 : ((Me[w] = T), !0);
        }
        var ye = $e;
        (r.custom = ye),
          (r.default = De),
          (r.inspect = De),
          (r.registerConstructor = K),
          (r.registerStringTag = Q),
          Object.defineProperty(r, '__esModule', { value: !0 });
      });
    },
  }),
  fr = P({
    '../../node_modules/chai/lib/chai/config.js'(e, t) {
      t.exports = {
        includeStack: !1,
        showDiff: !0,
        truncateThreshold: 40,
        useProxy: !0,
        proxyExcludedKeys: ['then', 'catch', 'inspect', 'toJSON'],
      };
    },
  }),
  zo = P({
    '../../node_modules/chai/lib/chai/utils/inspect.js'(e, t) {
      Ho();
      var r = yn(),
        o = fr();
      t.exports = a;
      function a(c, n, i, l) {
        var s = {
          colors: l,
          depth: typeof i > 'u' ? 2 : i,
          showHidden: n,
          truncate: o.truncateThreshold ? o.truncateThreshold : 1 / 0,
        };
        return r.inspect(c, s);
      }
    },
  }),
  Ml = P({
    '../../node_modules/chai/lib/chai/utils/objDisplay.js'(e, t) {
      var r = zo(),
        o = fr();
      t.exports = function (a) {
        var c = r(a),
          n = Object.prototype.toString.call(a);
        if (o.truncateThreshold && c.length >= o.truncateThreshold) {
          if (n === '[object Function]')
            return !a.name || a.name === ''
              ? '[Function]'
              : '[Function: ' + a.name + ']';
          if (n === '[object Array]') return '[ Array(' + a.length + ') ]';
          if (n === '[object Object]') {
            var i = Object.keys(a),
              l =
                i.length > 2
                  ? i.splice(0, 2).join(', ') + ', ...'
                  : i.join(', ');
            return '{ Object (' + l + ') }';
          } else return c;
        } else return c;
      };
    },
  }),
  fp = P({
    '../../node_modules/chai/lib/chai/utils/getMessage.js'(e, t) {
      var r = at(),
        o = xl(),
        a = Ml();
      t.exports = function (c, n) {
        var i = r(c, 'negate'),
          l = r(c, 'object'),
          s = n[3],
          u = o(c, n),
          f = i ? n[2] : n[1],
          d = r(c, 'message');
        return (
          typeof f == 'function' && (f = f()),
          (f = f || ''),
          (f = f
            .replace(/#\{this\}/g, function () {
              return a(l);
            })
            .replace(/#\{act\}/g, function () {
              return a(u);
            })
            .replace(/#\{exp\}/g, function () {
              return a(s);
            })),
          d ? d + ': ' + f : f
        );
      };
    },
  }),
  Ft = P({
    '../../node_modules/chai/lib/chai/utils/transferFlags.js'(e, t) {
      t.exports = function (r, o, a) {
        var c = r.__flags || (r.__flags = Object.create(null));
        o.__flags || (o.__flags = Object.create(null)),
          (a = arguments.length === 3 ? a : !0);
        for (var n in c)
          (a ||
            (n !== 'object' &&
              n !== 'ssfi' &&
              n !== 'lockSsfi' &&
              n != 'message')) &&
            (o.__flags[n] = c[n]);
      };
    },
  }),
  pp = P({
    '../../node_modules/deep-eql/index.js'(e, t) {
      var r = mn();
      function o() {
        this._key = 'chai/deep-eql__' + Math.random() + Date.now();
      }
      o.prototype = {
        get: function (_) {
          return _[this._key];
        },
        set: function (_, O) {
          Object.isExtensible(_) &&
            Object.defineProperty(_, this._key, { value: O, configurable: !0 });
        },
      };
      var a = typeof WeakMap == 'function' ? WeakMap : o;
      function c(_, O, x) {
        if (!x || A(_) || A(O)) return null;
        var I = x.get(_);
        if (I) {
          var H = I.get(O);
          if (typeof H == 'boolean') return H;
        }
        return null;
      }
      function n(_, O, x, I) {
        if (!(!x || A(_) || A(O))) {
          var H = x.get(_);
          H ? H.set(O, I) : ((H = new a()), H.set(O, I), x.set(_, H));
        }
      }
      (t.exports = i), (t.exports.MemoizeMap = a);
      function i(_, O, x) {
        if (x && x.comparator) return s(_, O, x);
        var I = l(_, O);
        return I !== null ? I : s(_, O, x);
      }
      function l(_, O) {
        return _ === O
          ? _ !== 0 || 1 / _ === 1 / O
          : _ !== _ && O !== O
            ? !0
            : A(_) || A(O)
              ? !1
              : null;
      }
      function s(_, O, x) {
        (x = x || {}),
          (x.memoize = x.memoize === !1 ? !1 : x.memoize || new a());
        var I = x && x.comparator,
          H = c(_, O, x.memoize);
        if (H !== null) return H;
        var V = c(O, _, x.memoize);
        if (V !== null) return V;
        if (I) {
          var L = I(_, O);
          if (L === !1 || L === !0) return n(_, O, x.memoize, L), L;
          var re = l(_, O);
          if (re !== null) return re;
        }
        var G = r(_);
        if (G !== r(O)) return n(_, O, x.memoize, !1), !1;
        n(_, O, x.memoize, !0);
        var oe = u(_, O, G, x);
        return n(_, O, x.memoize, oe), oe;
      }
      function u(_, O, x, I) {
        switch (x) {
          case 'String':
          case 'Number':
          case 'Boolean':
          case 'Date':
            return i(_.valueOf(), O.valueOf());
          case 'Promise':
          case 'Symbol':
          case 'function':
          case 'WeakMap':
          case 'WeakSet':
            return _ === O;
          case 'Error':
            return E(_, O, ['name', 'message', 'code'], I);
          case 'Arguments':
          case 'Int8Array':
          case 'Uint8Array':
          case 'Uint8ClampedArray':
          case 'Int16Array':
          case 'Uint16Array':
          case 'Int32Array':
          case 'Uint32Array':
          case 'Float32Array':
          case 'Float64Array':
          case 'Array':
            return p(_, O, I);
          case 'RegExp':
            return f(_, O);
          case 'Generator':
            return m(_, O, I);
          case 'DataView':
            return p(new Uint8Array(_.buffer), new Uint8Array(O.buffer), I);
          case 'ArrayBuffer':
            return p(new Uint8Array(_), new Uint8Array(O), I);
          case 'Set':
            return d(_, O, I);
          case 'Map':
            return d(_, O, I);
          case 'Temporal.PlainDate':
          case 'Temporal.PlainTime':
          case 'Temporal.PlainDateTime':
          case 'Temporal.Instant':
          case 'Temporal.ZonedDateTime':
          case 'Temporal.PlainYearMonth':
          case 'Temporal.PlainMonthDay':
            return _.equals(O);
          case 'Temporal.Duration':
            return _.total('nanoseconds') === O.total('nanoseconds');
          case 'Temporal.TimeZone':
          case 'Temporal.Calendar':
            return _.toString() === O.toString();
          default:
            return C(_, O, I);
        }
      }
      function f(_, O) {
        return _.toString() === O.toString();
      }
      function d(_, O, x) {
        if (_.size !== O.size) return !1;
        if (_.size === 0) return !0;
        var I = [],
          H = [];
        return (
          _.forEach(function (V, L) {
            I.push([V, L]);
          }),
          O.forEach(function (V, L) {
            H.push([V, L]);
          }),
          p(I.sort(), H.sort(), x)
        );
      }
      function p(_, O, x) {
        var I = _.length;
        if (I !== O.length) return !1;
        if (I === 0) return !0;
        for (var H = -1; ++H < I; ) if (i(_[H], O[H], x) === !1) return !1;
        return !0;
      }
      function m(_, O, x) {
        return p(h(_), h(O), x);
      }
      function y(_) {
        return (
          typeof Symbol < 'u' &&
          typeof _ == 'object' &&
          typeof Symbol.iterator < 'u' &&
          typeof _[Symbol.iterator] == 'function'
        );
      }
      function g(_) {
        if (y(_))
          try {
            return h(_[Symbol.iterator]());
          } catch {
            return [];
          }
        return [];
      }
      function h(_) {
        for (var O = _.next(), x = [O.value]; O.done === !1; )
          (O = _.next()), x.push(O.value);
        return x;
      }
      function v(_) {
        var O = [];
        for (var x in _) O.push(x);
        return O;
      }
      function S(_) {
        for (
          var O = [], x = Object.getOwnPropertySymbols(_), I = 0;
          I < x.length;
          I += 1
        ) {
          var H = x[I];
          Object.getOwnPropertyDescriptor(_, H).enumerable && O.push(H);
        }
        return O;
      }
      function E(_, O, x, I) {
        var H = x.length;
        if (H === 0) return !0;
        for (var V = 0; V < H; V += 1)
          if (i(_[x[V]], O[x[V]], I) === !1) return !1;
        return !0;
      }
      function C(_, O, x) {
        var I = v(_),
          H = v(O),
          V = S(_),
          L = S(O);
        if (
          ((I = I.concat(V)),
          (H = H.concat(L)),
          I.length && I.length === H.length)
        )
          return p(R(I).sort(), R(H).sort()) === !1 ? !1 : E(_, O, I, x);
        var re = g(_),
          G = g(O);
        return re.length && re.length === G.length
          ? (re.sort(), G.sort(), p(re, G, x))
          : I.length === 0 &&
              re.length === 0 &&
              H.length === 0 &&
              G.length === 0;
      }
      function A(_) {
        return _ === null || typeof _ != 'object';
      }
      function R(_) {
        return _.map(function (O) {
          return typeof O == 'symbol' ? O.toString() : O;
        });
      }
    },
  }),
  hn = P({
    '../../node_modules/chai/lib/chai/utils/isProxyEnabled.js'(e, t) {
      var r = fr();
      t.exports = function () {
        return r.useProxy && typeof Proxy < 'u' && typeof Reflect < 'u';
      };
    },
  }),
  mp = P({
    '../../node_modules/chai/lib/chai/utils/addProperty.js'(e, t) {
      var r = Ut(),
        o = at(),
        a = hn(),
        c = Ft();
      t.exports = function (n, i, l) {
        (l = l === void 0 ? function () {} : l),
          Object.defineProperty(n, i, {
            get: function s() {
              !a() && !o(this, 'lockSsfi') && o(this, 'ssfi', s);
              var u = l.call(this);
              if (u !== void 0) return u;
              var f = new r.Assertion();
              return c(this, f), f;
            },
            configurable: !0,
          });
      };
    },
  }),
  bn = P({
    '../../node_modules/chai/lib/chai/utils/addLengthGuard.js'(e, t) {
      var r = Object.getOwnPropertyDescriptor(function () {}, 'length');
      t.exports = function (o, a, c) {
        return (
          r.configurable &&
            Object.defineProperty(o, 'length', {
              get: function () {
                throw Error(
                  c
                    ? 'Invalid Chai property: ' +
                        a +
                        '.length. Due to a compatibility issue, "length" cannot directly follow "' +
                        a +
                        '". Use "' +
                        a +
                        '.lengthOf" instead.'
                    : 'Invalid Chai property: ' +
                        a +
                        '.length. See docs for proper usage of "' +
                        a +
                        '".'
                );
              },
            }),
          o
        );
      };
    },
  }),
  yp = P({
    '../../node_modules/chai/lib/chai/utils/getProperties.js'(e, t) {
      t.exports = function (r) {
        var o = Object.getOwnPropertyNames(r);
        function a(n) {
          o.indexOf(n) === -1 && o.push(n);
        }
        for (var c = Object.getPrototypeOf(r); c !== null; )
          Object.getOwnPropertyNames(c).forEach(a),
            (c = Object.getPrototypeOf(c));
        return o;
      };
    },
  }),
  gn = P({
    '../../node_modules/chai/lib/chai/utils/proxify.js'(e, t) {
      var r = fr(),
        o = at(),
        a = yp(),
        c = hn(),
        n = ['__flags', '__methods', '_obj', 'assert'];
      t.exports = function (l, s) {
        return c()
          ? new Proxy(l, {
              get: function u(f, d) {
                if (
                  typeof d == 'string' &&
                  r.proxyExcludedKeys.indexOf(d) === -1 &&
                  !Reflect.has(f, d)
                ) {
                  if (s)
                    throw Error(
                      'Invalid Chai property: ' +
                        s +
                        '.' +
                        d +
                        '. See docs for proper usage of "' +
                        s +
                        '".'
                    );
                  var p = null,
                    m = 4;
                  throw (
                    (a(f).forEach(function (y) {
                      if (
                        !Object.prototype.hasOwnProperty(y) &&
                        n.indexOf(y) === -1
                      ) {
                        var g = i(d, y, m);
                        g < m && ((p = y), (m = g));
                      }
                    }),
                    Error(
                      p !== null
                        ? 'Invalid Chai property: ' +
                            d +
                            '. Did you mean "' +
                            p +
                            '"?'
                        : 'Invalid Chai property: ' + d
                    ))
                  );
                }
                return (
                  n.indexOf(d) === -1 && !o(f, 'lockSsfi') && o(f, 'ssfi', u),
                  Reflect.get(f, d)
                );
              },
            })
          : l;
      };
      function i(l, s, u) {
        if (Math.abs(l.length - s.length) >= u) return u;
        for (var f = [], d = 0; d <= l.length; d++)
          (f[d] = Array(s.length + 1).fill(0)), (f[d][0] = d);
        for (var p = 0; p < s.length; p++) f[0][p] = p;
        for (var d = 1; d <= l.length; d++)
          for (var m = l.charCodeAt(d - 1), p = 1; p <= s.length; p++) {
            if (Math.abs(d - p) >= u) {
              f[d][p] = u;
              continue;
            }
            f[d][p] = Math.min(
              f[d - 1][p] + 1,
              f[d][p - 1] + 1,
              f[d - 1][p - 1] + (m === s.charCodeAt(p - 1) ? 0 : 1)
            );
          }
        return f[l.length][s.length];
      }
    },
  }),
  hp = P({
    '../../node_modules/chai/lib/chai/utils/addMethod.js'(e, t) {
      var r = bn(),
        o = Ut(),
        a = at(),
        c = gn(),
        n = Ft();
      t.exports = function (i, l, s) {
        var u = function () {
          a(this, 'lockSsfi') || a(this, 'ssfi', u);
          var f = s.apply(this, arguments);
          if (f !== void 0) return f;
          var d = new o.Assertion();
          return n(this, d), d;
        };
        r(u, l, !1), (i[l] = c(u, l));
      };
    },
  }),
  bp = P({
    '../../node_modules/chai/lib/chai/utils/overwriteProperty.js'(e, t) {
      var r = Ut(),
        o = at(),
        a = hn(),
        c = Ft();
      t.exports = function (n, i, l) {
        var s = Object.getOwnPropertyDescriptor(n, i),
          u = function () {};
        s && typeof s.get == 'function' && (u = s.get),
          Object.defineProperty(n, i, {
            get: function f() {
              !a() && !o(this, 'lockSsfi') && o(this, 'ssfi', f);
              var d = o(this, 'lockSsfi');
              o(this, 'lockSsfi', !0);
              var p = l(u).call(this);
              if ((o(this, 'lockSsfi', d), p !== void 0)) return p;
              var m = new r.Assertion();
              return c(this, m), m;
            },
            configurable: !0,
          });
      };
    },
  }),
  gp = P({
    '../../node_modules/chai/lib/chai/utils/overwriteMethod.js'(e, t) {
      var r = bn(),
        o = Ut(),
        a = at(),
        c = gn(),
        n = Ft();
      t.exports = function (i, l, s) {
        var u = i[l],
          f = function () {
            throw new Error(l + ' is not a function');
          };
        u && typeof u == 'function' && (f = u);
        var d = function () {
          a(this, 'lockSsfi') || a(this, 'ssfi', d);
          var p = a(this, 'lockSsfi');
          a(this, 'lockSsfi', !0);
          var m = s(f).apply(this, arguments);
          if ((a(this, 'lockSsfi', p), m !== void 0)) return m;
          var y = new o.Assertion();
          return n(this, y), y;
        };
        r(d, l, !1), (i[l] = c(d, l));
      };
    },
  }),
  vp = P({
    '../../node_modules/chai/lib/chai/utils/addChainableMethod.js'(e, t) {
      var r = bn(),
        o = Ut(),
        a = at(),
        c = gn(),
        n = Ft(),
        i = typeof Object.setPrototypeOf == 'function',
        l = function () {},
        s = Object.getOwnPropertyNames(l).filter(function (d) {
          var p = Object.getOwnPropertyDescriptor(l, d);
          return typeof p != 'object' ? !0 : !p.configurable;
        }),
        u = Function.prototype.call,
        f = Function.prototype.apply;
      t.exports = function (d, p, m, y) {
        typeof y != 'function' && (y = function () {});
        var g = { method: m, chainingBehavior: y };
        d.__methods || (d.__methods = {}),
          (d.__methods[p] = g),
          Object.defineProperty(d, p, {
            get: function () {
              g.chainingBehavior.call(this);
              var h = function () {
                a(this, 'lockSsfi') || a(this, 'ssfi', h);
                var E = g.method.apply(this, arguments);
                if (E !== void 0) return E;
                var C = new o.Assertion();
                return n(this, C), C;
              };
              if ((r(h, p, !0), i)) {
                var v = Object.create(this);
                (v.call = u), (v.apply = f), Object.setPrototypeOf(h, v);
              } else {
                var S = Object.getOwnPropertyNames(d);
                S.forEach(function (E) {
                  if (s.indexOf(E) === -1) {
                    var C = Object.getOwnPropertyDescriptor(d, E);
                    Object.defineProperty(h, E, C);
                  }
                });
              }
              return n(this, h), c(h);
            },
            configurable: !0,
          });
      };
    },
  }),
  _p = P({
    '../../node_modules/chai/lib/chai/utils/overwriteChainableMethod.js'(e, t) {
      var r = Ut(),
        o = Ft();
      t.exports = function (a, c, n, i) {
        var l = a.__methods[c],
          s = l.chainingBehavior;
        l.chainingBehavior = function () {
          var f = i(s).call(this);
          if (f !== void 0) return f;
          var d = new r.Assertion();
          return o(this, d), d;
        };
        var u = l.method;
        l.method = function () {
          var f = n(u).apply(this, arguments);
          if (f !== void 0) return f;
          var d = new r.Assertion();
          return o(this, d), d;
        };
      };
    },
  }),
  Ep = P({
    '../../node_modules/chai/lib/chai/utils/compareByInspect.js'(e, t) {
      var r = zo();
      t.exports = function (o, a) {
        return r(o) < r(a) ? -1 : 1;
      };
    },
  }),
  jl = P({
    '../../node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js'(
      e,
      t
    ) {
      t.exports = function (r) {
        return typeof Object.getOwnPropertySymbols != 'function'
          ? []
          : Object.getOwnPropertySymbols(r).filter(function (o) {
              return Object.getOwnPropertyDescriptor(r, o).enumerable;
            });
      };
    },
  }),
  wp = P({
    '../../node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js'(
      e,
      t
    ) {
      var r = jl();
      t.exports = function (o) {
        return Object.keys(o).concat(r(o));
      };
    },
  }),
  Sp = P({
    '../../node_modules/check-error/index.js'(e, t) {
      var r = Ho();
      function o(l, s) {
        return s instanceof Error && l === s;
      }
      function a(l, s) {
        return s instanceof Error
          ? l.constructor === s.constructor || l instanceof s.constructor
          : s.prototype instanceof Error || s === Error
            ? l.constructor === s || l instanceof s
            : !1;
      }
      function c(l, s) {
        var u = typeof l == 'string' ? l : l.message;
        return s instanceof RegExp
          ? s.test(u)
          : typeof s == 'string'
            ? u.indexOf(s) !== -1
            : !1;
      }
      function n(l) {
        var s = l;
        if (l instanceof Error) s = r(l.constructor);
        else if (typeof l == 'function' && ((s = r(l)), s === '')) {
          var u = r(new l());
          s = u || s;
        }
        return s;
      }
      function i(l) {
        var s = '';
        return (
          l && l.message ? (s = l.message) : typeof l == 'string' && (s = l), s
        );
      }
      t.exports = {
        compatibleInstance: o,
        compatibleConstructor: a,
        compatibleMessage: c,
        getMessage: i,
        getConstructorName: n,
      };
    },
  }),
  Cp = P({
    '../../node_modules/chai/lib/chai/utils/isNaN.js'(e, t) {
      function r(o) {
        return o !== o;
      }
      t.exports = Number.isNaN || r;
    },
  }),
  Op = P({
    '../../node_modules/chai/lib/chai/utils/getOperator.js'(e, t) {
      var r = mn(),
        o = at();
      function a(c) {
        var n = r(c),
          i = ['Array', 'Object', 'function'];
        return i.indexOf(n) !== -1;
      }
      t.exports = function (c, n) {
        var i = o(c, 'operator'),
          l = o(c, 'negate'),
          s = n[3],
          u = l ? n[2] : n[1];
        if (i) return i;
        if (
          (typeof u == 'function' && (u = u()),
          (u = u || ''),
          !!u && !/\shave\s/.test(u))
        ) {
          var f = a(s);
          return /\snot\s/.test(u)
            ? f
              ? 'notDeepStrictEqual'
              : 'notStrictEqual'
            : f
              ? 'deepStrictEqual'
              : 'strictEqual';
        }
      };
    },
  }),
  Pp = P({
    '../../node_modules/chai/lib/chai/utils/index.js'(e) {
      var t = up();
      (e.test = cp()),
        (e.type = mn()),
        (e.expectTypes = dp()),
        (e.getMessage = fp()),
        (e.getActual = xl()),
        (e.inspect = zo()),
        (e.objDisplay = Ml()),
        (e.flag = at()),
        (e.transferFlags = Ft()),
        (e.eql = pp()),
        (e.getPathInfo = t.getPathInfo),
        (e.hasProperty = t.hasProperty),
        (e.getName = Ho()),
        (e.addProperty = mp()),
        (e.addMethod = hp()),
        (e.overwriteProperty = bp()),
        (e.overwriteMethod = gp()),
        (e.addChainableMethod = vp()),
        (e.overwriteChainableMethod = _p()),
        (e.compareByInspect = Ep()),
        (e.getOwnEnumerablePropertySymbols = jl()),
        (e.getOwnEnumerableProperties = wp()),
        (e.checkError = Sp()),
        (e.proxify = gn()),
        (e.addLengthGuard = bn()),
        (e.isProxyEnabled = hn()),
        (e.isNaN = Cp()),
        (e.getOperator = Op());
    },
  }),
  Rp = P({
    '../../node_modules/chai/lib/chai/assertion.js'(e, t) {
      var r = fr();
      t.exports = function (o, a) {
        var c = o.AssertionError,
          n = a.flag;
        o.Assertion = i;
        function i(l, s, u, f) {
          return (
            n(this, 'ssfi', u || i),
            n(this, 'lockSsfi', f),
            n(this, 'object', l),
            n(this, 'message', s),
            a.proxify(this)
          );
        }
        Object.defineProperty(i, 'includeStack', {
          get: function () {
            return (
              console.warn(
                'Assertion.includeStack is deprecated, use chai.config.includeStack instead.'
              ),
              r.includeStack
            );
          },
          set: function (l) {
            console.warn(
              'Assertion.includeStack is deprecated, use chai.config.includeStack instead.'
            ),
              (r.includeStack = l);
          },
        }),
          Object.defineProperty(i, 'showDiff', {
            get: function () {
              return (
                console.warn(
                  'Assertion.showDiff is deprecated, use chai.config.showDiff instead.'
                ),
                r.showDiff
              );
            },
            set: function (l) {
              console.warn(
                'Assertion.showDiff is deprecated, use chai.config.showDiff instead.'
              ),
                (r.showDiff = l);
            },
          }),
          (i.addProperty = function (l, s) {
            a.addProperty(this.prototype, l, s);
          }),
          (i.addMethod = function (l, s) {
            a.addMethod(this.prototype, l, s);
          }),
          (i.addChainableMethod = function (l, s, u) {
            a.addChainableMethod(this.prototype, l, s, u);
          }),
          (i.overwriteProperty = function (l, s) {
            a.overwriteProperty(this.prototype, l, s);
          }),
          (i.overwriteMethod = function (l, s) {
            a.overwriteMethod(this.prototype, l, s);
          }),
          (i.overwriteChainableMethod = function (l, s, u) {
            a.overwriteChainableMethod(this.prototype, l, s, u);
          }),
          (i.prototype.assert = function (l, s, u, f, d, p) {
            var m = a.test(this, arguments);
            if (
              (p !== !1 && (p = !0),
              f === void 0 && d === void 0 && (p = !1),
              r.showDiff !== !0 && (p = !1),
              !m)
            ) {
              s = a.getMessage(this, arguments);
              var y = a.getActual(this, arguments),
                g = { actual: y, expected: f, showDiff: p },
                h = a.getOperator(this, arguments);
              throw (
                (h && (g.operator = h),
                new c(s, g, r.includeStack ? this.assert : n(this, 'ssfi')))
              );
            }
          }),
          Object.defineProperty(i.prototype, '_obj', {
            get: function () {
              return n(this, 'object');
            },
            set: function (l) {
              n(this, 'object', l);
            },
          });
      };
    },
  }),
  Tp = P({
    '../../node_modules/chai/lib/chai/core/assertions.js'(e, t) {
      t.exports = function (r, o) {
        var a = r.Assertion,
          c = r.AssertionError,
          n = o.flag;
        [
          'to',
          'be',
          'been',
          'is',
          'and',
          'has',
          'have',
          'with',
          'that',
          'which',
          'at',
          'of',
          'same',
          'but',
          'does',
          'still',
          'also',
        ].forEach(function (q) {
          a.addProperty(q);
        }),
          a.addProperty('not', function () {
            n(this, 'negate', !0);
          }),
          a.addProperty('deep', function () {
            n(this, 'deep', !0);
          }),
          a.addProperty('nested', function () {
            n(this, 'nested', !0);
          }),
          a.addProperty('own', function () {
            n(this, 'own', !0);
          }),
          a.addProperty('ordered', function () {
            n(this, 'ordered', !0);
          }),
          a.addProperty('any', function () {
            n(this, 'any', !0), n(this, 'all', !1);
          }),
          a.addProperty('all', function () {
            n(this, 'all', !0), n(this, 'any', !1);
          });
        function i(q, M) {
          M && n(this, 'message', M), (q = q.toLowerCase());
          var F = n(this, 'object'),
            z = ~['a', 'e', 'i', 'o', 'u'].indexOf(q.charAt(0)) ? 'an ' : 'a ';
          this.assert(
            q === o.type(F).toLowerCase(),
            'expected #{this} to be ' + z + q,
            'expected #{this} not to be ' + z + q
          );
        }
        a.addChainableMethod('an', i), a.addChainableMethod('a', i);
        function l(q, M) {
          return (o.isNaN(q) && o.isNaN(M)) || q === M;
        }
        function s() {
          n(this, 'contains', !0);
        }
        function u(q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'object'),
            z = o.type(F).toLowerCase(),
            X = n(this, 'message'),
            B = n(this, 'negate'),
            D = n(this, 'ssfi'),
            U = n(this, 'deep'),
            ee = U ? 'deep ' : '';
          X = X ? X + ': ' : '';
          var b = !1;
          switch (z) {
            case 'string':
              b = F.indexOf(q) !== -1;
              break;
            case 'weakset':
              if (U)
                throw new c(
                  X + 'unable to use .deep.include with WeakSet',
                  void 0,
                  D
                );
              b = F.has(q);
              break;
            case 'map':
              var N = U ? o.eql : l;
              F.forEach(function (k) {
                b = b || N(k, q);
              });
              break;
            case 'set':
              U
                ? F.forEach(function (k) {
                    b = b || o.eql(k, q);
                  })
                : (b = F.has(q));
              break;
            case 'array':
              U
                ? (b = F.some(function (k) {
                    return o.eql(k, q);
                  }))
                : (b = F.indexOf(q) !== -1);
              break;
            default:
              if (q !== Object(q))
                throw new c(
                  X +
                    'the given combination of arguments (' +
                    z +
                    ' and ' +
                    o.type(q).toLowerCase() +
                    ') is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a ' +
                    o.type(q).toLowerCase(),
                  void 0,
                  D
                );
              var $ = Object.keys(q),
                Y = null,
                W = 0;
              if (
                ($.forEach(function (k) {
                  var ie = new a(F);
                  if (
                    (o.transferFlags(this, ie, !0),
                    n(ie, 'lockSsfi', !0),
                    !B || $.length === 1)
                  ) {
                    ie.property(k, q[k]);
                    return;
                  }
                  try {
                    ie.property(k, q[k]);
                  } catch (se) {
                    if (!o.checkError.compatibleConstructor(se, c)) throw se;
                    Y === null && (Y = se), W++;
                  }
                }, this),
                B && $.length > 1 && W === $.length)
              )
                throw Y;
              return;
          }
          this.assert(
            b,
            'expected #{this} to ' + ee + 'include ' + o.inspect(q),
            'expected #{this} to not ' + ee + 'include ' + o.inspect(q)
          );
        }
        a.addChainableMethod('include', u, s),
          a.addChainableMethod('contain', u, s),
          a.addChainableMethod('contains', u, s),
          a.addChainableMethod('includes', u, s),
          a.addProperty('ok', function () {
            this.assert(
              n(this, 'object'),
              'expected #{this} to be truthy',
              'expected #{this} to be falsy'
            );
          }),
          a.addProperty('true', function () {
            this.assert(
              n(this, 'object') === !0,
              'expected #{this} to be true',
              'expected #{this} to be false',
              !n(this, 'negate')
            );
          }),
          a.addProperty('false', function () {
            this.assert(
              n(this, 'object') === !1,
              'expected #{this} to be false',
              'expected #{this} to be true',
              !!n(this, 'negate')
            );
          }),
          a.addProperty('null', function () {
            this.assert(
              n(this, 'object') === null,
              'expected #{this} to be null',
              'expected #{this} not to be null'
            );
          }),
          a.addProperty('undefined', function () {
            this.assert(
              n(this, 'object') === void 0,
              'expected #{this} to be undefined',
              'expected #{this} not to be undefined'
            );
          }),
          a.addProperty('NaN', function () {
            this.assert(
              o.isNaN(n(this, 'object')),
              'expected #{this} to be NaN',
              'expected #{this} not to be NaN'
            );
          });
        function f() {
          var q = n(this, 'object');
          this.assert(
            q != null,
            'expected #{this} to exist',
            'expected #{this} to not exist'
          );
        }
        a.addProperty('exist', f),
          a.addProperty('exists', f),
          a.addProperty('empty', function () {
            var q = n(this, 'object'),
              M = n(this, 'ssfi'),
              F = n(this, 'message'),
              z;
            switch (((F = F ? F + ': ' : ''), o.type(q).toLowerCase())) {
              case 'array':
              case 'string':
                z = q.length;
                break;
              case 'map':
              case 'set':
                z = q.size;
                break;
              case 'weakmap':
              case 'weakset':
                throw new c(
                  F + '.empty was passed a weak collection',
                  void 0,
                  M
                );
              case 'function':
                var X = F + '.empty was passed a function ' + o.getName(q);
                throw new c(X.trim(), void 0, M);
              default:
                if (q !== Object(q))
                  throw new c(
                    F +
                      '.empty was passed non-string primitive ' +
                      o.inspect(q),
                    void 0,
                    M
                  );
                z = Object.keys(q).length;
            }
            this.assert(
              z === 0,
              'expected #{this} to be empty',
              'expected #{this} not to be empty'
            );
          });
        function d() {
          var q = n(this, 'object'),
            M = o.type(q);
          this.assert(
            M === 'Arguments',
            'expected #{this} to be arguments but got ' + M,
            'expected #{this} to not be arguments'
          );
        }
        a.addProperty('arguments', d), a.addProperty('Arguments', d);
        function p(q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'object');
          if (n(this, 'deep')) {
            var z = n(this, 'lockSsfi');
            n(this, 'lockSsfi', !0), this.eql(q), n(this, 'lockSsfi', z);
          } else
            this.assert(
              q === F,
              'expected #{this} to equal #{exp}',
              'expected #{this} to not equal #{exp}',
              q,
              this._obj,
              !0
            );
        }
        a.addMethod('equal', p), a.addMethod('equals', p), a.addMethod('eq', p);
        function m(q, M) {
          M && n(this, 'message', M),
            this.assert(
              o.eql(q, n(this, 'object')),
              'expected #{this} to deeply equal #{exp}',
              'expected #{this} to not deeply equal #{exp}',
              q,
              this._obj,
              !0
            );
        }
        a.addMethod('eql', m), a.addMethod('eqls', m);
        function y(q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'object'),
            z = n(this, 'doLength'),
            X = n(this, 'message'),
            B = X ? X + ': ' : '',
            D = n(this, 'ssfi'),
            U = o.type(F).toLowerCase(),
            ee = o.type(q).toLowerCase(),
            b,
            N = !0;
          if (
            (z &&
              U !== 'map' &&
              U !== 'set' &&
              new a(F, X, D, !0).to.have.property('length'),
            !z && U === 'date' && ee !== 'date')
          )
            b = B + 'the argument to above must be a date';
          else if (ee !== 'number' && (z || U === 'number'))
            b = B + 'the argument to above must be a number';
          else if (!z && U !== 'date' && U !== 'number') {
            var $ = U === 'string' ? "'" + F + "'" : F;
            b = B + 'expected ' + $ + ' to be a number or a date';
          } else N = !1;
          if (N) throw new c(b, void 0, D);
          if (z) {
            var Y = 'length',
              W;
            U === 'map' || U === 'set'
              ? ((Y = 'size'), (W = F.size))
              : (W = F.length),
              this.assert(
                W > q,
                'expected #{this} to have a ' +
                  Y +
                  ' above #{exp} but got #{act}',
                'expected #{this} to not have a ' + Y + ' above #{exp}',
                q,
                W
              );
          } else
            this.assert(
              F > q,
              'expected #{this} to be above #{exp}',
              'expected #{this} to be at most #{exp}',
              q
            );
        }
        a.addMethod('above', y),
          a.addMethod('gt', y),
          a.addMethod('greaterThan', y);
        function g(q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'object'),
            z = n(this, 'doLength'),
            X = n(this, 'message'),
            B = X ? X + ': ' : '',
            D = n(this, 'ssfi'),
            U = o.type(F).toLowerCase(),
            ee = o.type(q).toLowerCase(),
            b,
            N = !0;
          if (
            (z &&
              U !== 'map' &&
              U !== 'set' &&
              new a(F, X, D, !0).to.have.property('length'),
            !z && U === 'date' && ee !== 'date')
          )
            b = B + 'the argument to least must be a date';
          else if (ee !== 'number' && (z || U === 'number'))
            b = B + 'the argument to least must be a number';
          else if (!z && U !== 'date' && U !== 'number') {
            var $ = U === 'string' ? "'" + F + "'" : F;
            b = B + 'expected ' + $ + ' to be a number or a date';
          } else N = !1;
          if (N) throw new c(b, void 0, D);
          if (z) {
            var Y = 'length',
              W;
            U === 'map' || U === 'set'
              ? ((Y = 'size'), (W = F.size))
              : (W = F.length),
              this.assert(
                W >= q,
                'expected #{this} to have a ' +
                  Y +
                  ' at least #{exp} but got #{act}',
                'expected #{this} to have a ' + Y + ' below #{exp}',
                q,
                W
              );
          } else
            this.assert(
              F >= q,
              'expected #{this} to be at least #{exp}',
              'expected #{this} to be below #{exp}',
              q
            );
        }
        a.addMethod('least', g),
          a.addMethod('gte', g),
          a.addMethod('greaterThanOrEqual', g);
        function h(q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'object'),
            z = n(this, 'doLength'),
            X = n(this, 'message'),
            B = X ? X + ': ' : '',
            D = n(this, 'ssfi'),
            U = o.type(F).toLowerCase(),
            ee = o.type(q).toLowerCase(),
            b,
            N = !0;
          if (
            (z &&
              U !== 'map' &&
              U !== 'set' &&
              new a(F, X, D, !0).to.have.property('length'),
            !z && U === 'date' && ee !== 'date')
          )
            b = B + 'the argument to below must be a date';
          else if (ee !== 'number' && (z || U === 'number'))
            b = B + 'the argument to below must be a number';
          else if (!z && U !== 'date' && U !== 'number') {
            var $ = U === 'string' ? "'" + F + "'" : F;
            b = B + 'expected ' + $ + ' to be a number or a date';
          } else N = !1;
          if (N) throw new c(b, void 0, D);
          if (z) {
            var Y = 'length',
              W;
            U === 'map' || U === 'set'
              ? ((Y = 'size'), (W = F.size))
              : (W = F.length),
              this.assert(
                W < q,
                'expected #{this} to have a ' +
                  Y +
                  ' below #{exp} but got #{act}',
                'expected #{this} to not have a ' + Y + ' below #{exp}',
                q,
                W
              );
          } else
            this.assert(
              F < q,
              'expected #{this} to be below #{exp}',
              'expected #{this} to be at least #{exp}',
              q
            );
        }
        a.addMethod('below', h),
          a.addMethod('lt', h),
          a.addMethod('lessThan', h);
        function v(q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'object'),
            z = n(this, 'doLength'),
            X = n(this, 'message'),
            B = X ? X + ': ' : '',
            D = n(this, 'ssfi'),
            U = o.type(F).toLowerCase(),
            ee = o.type(q).toLowerCase(),
            b,
            N = !0;
          if (
            (z &&
              U !== 'map' &&
              U !== 'set' &&
              new a(F, X, D, !0).to.have.property('length'),
            !z && U === 'date' && ee !== 'date')
          )
            b = B + 'the argument to most must be a date';
          else if (ee !== 'number' && (z || U === 'number'))
            b = B + 'the argument to most must be a number';
          else if (!z && U !== 'date' && U !== 'number') {
            var $ = U === 'string' ? "'" + F + "'" : F;
            b = B + 'expected ' + $ + ' to be a number or a date';
          } else N = !1;
          if (N) throw new c(b, void 0, D);
          if (z) {
            var Y = 'length',
              W;
            U === 'map' || U === 'set'
              ? ((Y = 'size'), (W = F.size))
              : (W = F.length),
              this.assert(
                W <= q,
                'expected #{this} to have a ' +
                  Y +
                  ' at most #{exp} but got #{act}',
                'expected #{this} to have a ' + Y + ' above #{exp}',
                q,
                W
              );
          } else
            this.assert(
              F <= q,
              'expected #{this} to be at most #{exp}',
              'expected #{this} to be above #{exp}',
              q
            );
        }
        a.addMethod('most', v),
          a.addMethod('lte', v),
          a.addMethod('lessThanOrEqual', v),
          a.addMethod('within', function (q, M, F) {
            F && n(this, 'message', F);
            var z = n(this, 'object'),
              X = n(this, 'doLength'),
              B = n(this, 'message'),
              D = B ? B + ': ' : '',
              U = n(this, 'ssfi'),
              ee = o.type(z).toLowerCase(),
              b = o.type(q).toLowerCase(),
              N = o.type(M).toLowerCase(),
              $,
              Y = !0,
              W =
                b === 'date' && N === 'date'
                  ? q.toISOString() + '..' + M.toISOString()
                  : q + '..' + M;
            if (
              (X &&
                ee !== 'map' &&
                ee !== 'set' &&
                new a(z, B, U, !0).to.have.property('length'),
              !X && ee === 'date' && (b !== 'date' || N !== 'date'))
            )
              $ = D + 'the arguments to within must be dates';
            else if (
              (b !== 'number' || N !== 'number') &&
              (X || ee === 'number')
            )
              $ = D + 'the arguments to within must be numbers';
            else if (!X && ee !== 'date' && ee !== 'number') {
              var k = ee === 'string' ? "'" + z + "'" : z;
              $ = D + 'expected ' + k + ' to be a number or a date';
            } else Y = !1;
            if (Y) throw new c($, void 0, U);
            if (X) {
              var ie = 'length',
                se;
              ee === 'map' || ee === 'set'
                ? ((ie = 'size'), (se = z.size))
                : (se = z.length),
                this.assert(
                  se >= q && se <= M,
                  'expected #{this} to have a ' + ie + ' within ' + W,
                  'expected #{this} to not have a ' + ie + ' within ' + W
                );
            } else
              this.assert(
                z >= q && z <= M,
                'expected #{this} to be within ' + W,
                'expected #{this} to not be within ' + W
              );
          });
        function S(q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'object'),
            z = n(this, 'ssfi'),
            X = n(this, 'message');
          try {
            var B = F instanceof q;
          } catch (U) {
            throw U instanceof TypeError
              ? ((X = X ? X + ': ' : ''),
                new c(
                  X +
                    'The instanceof assertion needs a constructor but ' +
                    o.type(q) +
                    ' was given.',
                  void 0,
                  z
                ))
              : U;
          }
          var D = o.getName(q);
          D === null && (D = 'an unnamed constructor'),
            this.assert(
              B,
              'expected #{this} to be an instance of ' + D,
              'expected #{this} to not be an instance of ' + D
            );
        }
        a.addMethod('instanceof', S), a.addMethod('instanceOf', S);
        function E(q, M, F) {
          F && n(this, 'message', F);
          var z = n(this, 'nested'),
            X = n(this, 'own'),
            B = n(this, 'message'),
            D = n(this, 'object'),
            U = n(this, 'ssfi'),
            ee = typeof q;
          if (((B = B ? B + ': ' : ''), z)) {
            if (ee !== 'string')
              throw new c(
                B +
                  'the argument to property must be a string when using nested syntax',
                void 0,
                U
              );
          } else if (ee !== 'string' && ee !== 'number' && ee !== 'symbol')
            throw new c(
              B +
                'the argument to property must be a string, number, or symbol',
              void 0,
              U
            );
          if (z && X)
            throw new c(
              B + 'The "nested" and "own" flags cannot be combined.',
              void 0,
              U
            );
          if (D == null)
            throw new c(B + 'Target cannot be null or undefined.', void 0, U);
          var b = n(this, 'deep'),
            N = n(this, 'negate'),
            $ = z ? o.getPathInfo(D, q) : null,
            Y = z ? $.value : D[q],
            W = '';
          b && (W += 'deep '),
            X && (W += 'own '),
            z && (W += 'nested '),
            (W += 'property ');
          var k;
          X
            ? (k = Object.prototype.hasOwnProperty.call(D, q))
            : z
              ? (k = $.exists)
              : (k = o.hasProperty(D, q)),
            (!N || arguments.length === 1) &&
              this.assert(
                k,
                'expected #{this} to have ' + W + o.inspect(q),
                'expected #{this} to not have ' + W + o.inspect(q)
              ),
            arguments.length > 1 &&
              this.assert(
                k && (b ? o.eql(M, Y) : M === Y),
                'expected #{this} to have ' +
                  W +
                  o.inspect(q) +
                  ' of #{exp}, but got #{act}',
                'expected #{this} to not have ' +
                  W +
                  o.inspect(q) +
                  ' of #{act}',
                M,
                Y
              ),
            n(this, 'object', Y);
        }
        a.addMethod('property', E);
        function C(q, M, F) {
          n(this, 'own', !0), E.apply(this, arguments);
        }
        a.addMethod('ownProperty', C), a.addMethod('haveOwnProperty', C);
        function A(q, M, F) {
          typeof M == 'string' && ((F = M), (M = null)),
            F && n(this, 'message', F);
          var z = n(this, 'object'),
            X = Object.getOwnPropertyDescriptor(Object(z), q);
          X && M
            ? this.assert(
                o.eql(M, X),
                'expected the own property descriptor for ' +
                  o.inspect(q) +
                  ' on #{this} to match ' +
                  o.inspect(M) +
                  ', got ' +
                  o.inspect(X),
                'expected the own property descriptor for ' +
                  o.inspect(q) +
                  ' on #{this} to not match ' +
                  o.inspect(M),
                M,
                X,
                !0
              )
            : this.assert(
                X,
                'expected #{this} to have an own property descriptor for ' +
                  o.inspect(q),
                'expected #{this} to not have an own property descriptor for ' +
                  o.inspect(q)
              ),
            n(this, 'object', X);
        }
        a.addMethod('ownPropertyDescriptor', A),
          a.addMethod('haveOwnPropertyDescriptor', A);
        function R() {
          n(this, 'doLength', !0);
        }
        function _(q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'object'),
            z = o.type(F).toLowerCase(),
            X = n(this, 'message'),
            B = n(this, 'ssfi'),
            D = 'length',
            U;
          switch (z) {
            case 'map':
            case 'set':
              (D = 'size'), (U = F.size);
              break;
            default:
              new a(F, X, B, !0).to.have.property('length'), (U = F.length);
          }
          this.assert(
            U == q,
            'expected #{this} to have a ' + D + ' of #{exp} but got #{act}',
            'expected #{this} to not have a ' + D + ' of #{act}',
            q,
            U
          );
        }
        a.addChainableMethod('length', _, R),
          a.addChainableMethod('lengthOf', _, R);
        function O(q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'object');
          this.assert(
            q.exec(F),
            'expected #{this} to match ' + q,
            'expected #{this} not to match ' + q
          );
        }
        a.addMethod('match', O),
          a.addMethod('matches', O),
          a.addMethod('string', function (q, M) {
            M && n(this, 'message', M);
            var F = n(this, 'object'),
              z = n(this, 'message'),
              X = n(this, 'ssfi');
            new a(F, z, X, !0).is.a('string'),
              this.assert(
                ~F.indexOf(q),
                'expected #{this} to contain ' + o.inspect(q),
                'expected #{this} to not contain ' + o.inspect(q)
              );
          });
        function x(q) {
          var M = n(this, 'object'),
            F = o.type(M),
            z = o.type(q),
            X = n(this, 'ssfi'),
            B = n(this, 'deep'),
            D,
            U = '',
            ee,
            b = !0,
            N = n(this, 'message');
          N = N ? N + ': ' : '';
          var $ =
            N +
            'when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments';
          if (F === 'Map' || F === 'Set')
            (U = B ? 'deeply ' : ''),
              (ee = []),
              M.forEach(function (fe, Te) {
                ee.push(Te);
              }),
              z !== 'Array' && (q = Array.prototype.slice.call(arguments));
          else {
            switch (((ee = o.getOwnEnumerableProperties(M)), z)) {
              case 'Array':
                if (arguments.length > 1) throw new c($, void 0, X);
                break;
              case 'Object':
                if (arguments.length > 1) throw new c($, void 0, X);
                q = Object.keys(q);
                break;
              default:
                q = Array.prototype.slice.call(arguments);
            }
            q = q.map(function (fe) {
              return typeof fe == 'symbol' ? fe : String(fe);
            });
          }
          if (!q.length) throw new c(N + 'keys required', void 0, X);
          var Y = q.length,
            W = n(this, 'any'),
            k = n(this, 'all'),
            ie = q;
          if (
            (!W && !k && (k = !0),
            W &&
              (b = ie.some(function (fe) {
                return ee.some(function (Te) {
                  return B ? o.eql(fe, Te) : fe === Te;
                });
              })),
            k &&
              ((b = ie.every(function (fe) {
                return ee.some(function (Te) {
                  return B ? o.eql(fe, Te) : fe === Te;
                });
              })),
              n(this, 'contains') || (b = b && q.length == ee.length)),
            Y > 1)
          ) {
            q = q.map(function (fe) {
              return o.inspect(fe);
            });
            var se = q.pop();
            k && (D = q.join(', ') + ', and ' + se),
              W && (D = q.join(', ') + ', or ' + se);
          } else D = o.inspect(q[0]);
          (D = (Y > 1 ? 'keys ' : 'key ') + D),
            (D = (n(this, 'contains') ? 'contain ' : 'have ') + D),
            this.assert(
              b,
              'expected #{this} to ' + U + D,
              'expected #{this} to not ' + U + D,
              ie.slice(0).sort(o.compareByInspect),
              ee.sort(o.compareByInspect),
              !0
            );
        }
        a.addMethod('keys', x), a.addMethod('key', x);
        function I(q, M, F) {
          F && n(this, 'message', F);
          var z = n(this, 'object'),
            X = n(this, 'ssfi'),
            B = n(this, 'message'),
            D = n(this, 'negate') || !1;
          new a(z, B, X, !0).is.a('function'),
            (q instanceof RegExp || typeof q == 'string') &&
              ((M = q), (q = null));
          var U;
          try {
            z();
          } catch (fe) {
            U = fe;
          }
          var ee = q === void 0 && M === void 0,
            b = !!(q && M),
            N = !1,
            $ = !1;
          if (ee || (!ee && !D)) {
            var Y = 'an error';
            q instanceof Error
              ? (Y = '#{exp}')
              : q && (Y = o.checkError.getConstructorName(q)),
              this.assert(
                U,
                'expected #{this} to throw ' + Y,
                'expected #{this} to not throw an error but #{act} was thrown',
                q && q.toString(),
                U instanceof Error
                  ? U.toString()
                  : typeof U == 'string'
                    ? U
                    : U && o.checkError.getConstructorName(U)
              );
          }
          if (q && U) {
            if (q instanceof Error) {
              var W = o.checkError.compatibleInstance(U, q);
              W === D &&
                (b && D
                  ? (N = !0)
                  : this.assert(
                      D,
                      'expected #{this} to throw #{exp} but #{act} was thrown',
                      'expected #{this} to not throw #{exp}' +
                        (U && !D ? ' but #{act} was thrown' : ''),
                      q.toString(),
                      U.toString()
                    ));
            }
            var k = o.checkError.compatibleConstructor(U, q);
            k === D &&
              (b && D
                ? (N = !0)
                : this.assert(
                    D,
                    'expected #{this} to throw #{exp} but #{act} was thrown',
                    'expected #{this} to not throw #{exp}' +
                      (U ? ' but #{act} was thrown' : ''),
                    q instanceof Error
                      ? q.toString()
                      : q && o.checkError.getConstructorName(q),
                    U instanceof Error
                      ? U.toString()
                      : U && o.checkError.getConstructorName(U)
                  ));
          }
          if (U && M !== void 0 && M !== null) {
            var ie = 'including';
            M instanceof RegExp && (ie = 'matching');
            var se = o.checkError.compatibleMessage(U, M);
            se === D &&
              (b && D
                ? ($ = !0)
                : this.assert(
                    D,
                    'expected #{this} to throw error ' +
                      ie +
                      ' #{exp} but got #{act}',
                    'expected #{this} to throw error not ' + ie + ' #{exp}',
                    M,
                    o.checkError.getMessage(U)
                  ));
          }
          N &&
            $ &&
            this.assert(
              D,
              'expected #{this} to throw #{exp} but #{act} was thrown',
              'expected #{this} to not throw #{exp}' +
                (U ? ' but #{act} was thrown' : ''),
              q instanceof Error
                ? q.toString()
                : q && o.checkError.getConstructorName(q),
              U instanceof Error
                ? U.toString()
                : U && o.checkError.getConstructorName(U)
            ),
            n(this, 'object', U);
        }
        a.addMethod('throw', I),
          a.addMethod('throws', I),
          a.addMethod('Throw', I);
        function H(q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'object'),
            z = n(this, 'itself'),
            X = typeof F == 'function' && !z ? F.prototype[q] : F[q];
          this.assert(
            typeof X == 'function',
            'expected #{this} to respond to ' + o.inspect(q),
            'expected #{this} to not respond to ' + o.inspect(q)
          );
        }
        a.addMethod('respondTo', H),
          a.addMethod('respondsTo', H),
          a.addProperty('itself', function () {
            n(this, 'itself', !0);
          });
        function V(q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'object'),
            z = q(F);
          this.assert(
            z,
            'expected #{this} to satisfy ' + o.objDisplay(q),
            'expected #{this} to not satisfy' + o.objDisplay(q),
            !n(this, 'negate'),
            z
          );
        }
        a.addMethod('satisfy', V), a.addMethod('satisfies', V);
        function L(q, M, F) {
          F && n(this, 'message', F);
          var z = n(this, 'object'),
            X = n(this, 'message'),
            B = n(this, 'ssfi');
          if (
            (new a(z, X, B, !0).is.a('number'),
            typeof q != 'number' || typeof M != 'number')
          ) {
            X = X ? X + ': ' : '';
            var D = M === void 0 ? ', and a delta is required' : '';
            throw new c(
              X +
                'the arguments to closeTo or approximately must be numbers' +
                D,
              void 0,
              B
            );
          }
          this.assert(
            Math.abs(z - q) <= M,
            'expected #{this} to be close to ' + q + ' +/- ' + M,
            'expected #{this} not to be close to ' + q + ' +/- ' + M
          );
        }
        a.addMethod('closeTo', L), a.addMethod('approximately', L);
        function re(q, M, F, z, X) {
          if (!z) {
            if (q.length !== M.length) return !1;
            M = M.slice();
          }
          return q.every(function (B, D) {
            if (X) return F ? F(B, M[D]) : B === M[D];
            if (!F) {
              var U = M.indexOf(B);
              return U === -1 ? !1 : (z || M.splice(U, 1), !0);
            }
            return M.some(function (ee, b) {
              return F(B, ee) ? (z || M.splice(b, 1), !0) : !1;
            });
          });
        }
        a.addMethod('members', function (q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'object'),
            z = n(this, 'message'),
            X = n(this, 'ssfi');
          new a(F, z, X, !0).to.be.an('array'),
            new a(q, z, X, !0).to.be.an('array');
          var B = n(this, 'contains'),
            D = n(this, 'ordered'),
            U,
            ee,
            b;
          B
            ? ((U = D ? 'an ordered superset' : 'a superset'),
              (ee = 'expected #{this} to be ' + U + ' of #{exp}'),
              (b = 'expected #{this} to not be ' + U + ' of #{exp}'))
            : ((U = D ? 'ordered members' : 'members'),
              (ee = 'expected #{this} to have the same ' + U + ' as #{exp}'),
              (b =
                'expected #{this} to not have the same ' + U + ' as #{exp}'));
          var N = n(this, 'deep') ? o.eql : void 0;
          this.assert(re(q, F, N, B, D), ee, b, q, F, !0);
        });
        function G(q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'object'),
            z = n(this, 'message'),
            X = n(this, 'ssfi'),
            B = n(this, 'contains'),
            D = n(this, 'deep');
          new a(q, z, X, !0).to.be.an('array'),
            B
              ? this.assert(
                  q.some(function (U) {
                    return F.indexOf(U) > -1;
                  }),
                  'expected #{this} to contain one of #{exp}',
                  'expected #{this} to not contain one of #{exp}',
                  q,
                  F
                )
              : D
                ? this.assert(
                    q.some(function (U) {
                      return o.eql(F, U);
                    }),
                    'expected #{this} to deeply equal one of #{exp}',
                    'expected #{this} to deeply equal one of #{exp}',
                    q,
                    F
                  )
                : this.assert(
                    q.indexOf(F) > -1,
                    'expected #{this} to be one of #{exp}',
                    'expected #{this} to not be one of #{exp}',
                    q,
                    F
                  );
        }
        a.addMethod('oneOf', G);
        function oe(q, M, F) {
          F && n(this, 'message', F);
          var z = n(this, 'object'),
            X = n(this, 'message'),
            B = n(this, 'ssfi');
          new a(z, X, B, !0).is.a('function');
          var D;
          M
            ? (new a(q, X, B, !0).to.have.property(M), (D = q[M]))
            : (new a(q, X, B, !0).is.a('function'), (D = q())),
            z();
          var U = M == null ? q() : q[M],
            ee = M == null ? D : '.' + M;
          n(this, 'deltaMsgObj', ee),
            n(this, 'initialDeltaValue', D),
            n(this, 'finalDeltaValue', U),
            n(this, 'deltaBehavior', 'change'),
            n(this, 'realDelta', U !== D),
            this.assert(
              D !== U,
              'expected ' + ee + ' to change',
              'expected ' + ee + ' to not change'
            );
        }
        a.addMethod('change', oe), a.addMethod('changes', oe);
        function ae(q, M, F) {
          F && n(this, 'message', F);
          var z = n(this, 'object'),
            X = n(this, 'message'),
            B = n(this, 'ssfi');
          new a(z, X, B, !0).is.a('function');
          var D;
          M
            ? (new a(q, X, B, !0).to.have.property(M), (D = q[M]))
            : (new a(q, X, B, !0).is.a('function'), (D = q())),
            new a(D, X, B, !0).is.a('number'),
            z();
          var U = M == null ? q() : q[M],
            ee = M == null ? D : '.' + M;
          n(this, 'deltaMsgObj', ee),
            n(this, 'initialDeltaValue', D),
            n(this, 'finalDeltaValue', U),
            n(this, 'deltaBehavior', 'increase'),
            n(this, 'realDelta', U - D),
            this.assert(
              U - D > 0,
              'expected ' + ee + ' to increase',
              'expected ' + ee + ' to not increase'
            );
        }
        a.addMethod('increase', ae), a.addMethod('increases', ae);
        function ue(q, M, F) {
          F && n(this, 'message', F);
          var z = n(this, 'object'),
            X = n(this, 'message'),
            B = n(this, 'ssfi');
          new a(z, X, B, !0).is.a('function');
          var D;
          M
            ? (new a(q, X, B, !0).to.have.property(M), (D = q[M]))
            : (new a(q, X, B, !0).is.a('function'), (D = q())),
            new a(D, X, B, !0).is.a('number'),
            z();
          var U = M == null ? q() : q[M],
            ee = M == null ? D : '.' + M;
          n(this, 'deltaMsgObj', ee),
            n(this, 'initialDeltaValue', D),
            n(this, 'finalDeltaValue', U),
            n(this, 'deltaBehavior', 'decrease'),
            n(this, 'realDelta', D - U),
            this.assert(
              U - D < 0,
              'expected ' + ee + ' to decrease',
              'expected ' + ee + ' to not decrease'
            );
        }
        a.addMethod('decrease', ue), a.addMethod('decreases', ue);
        function Z(q, M) {
          M && n(this, 'message', M);
          var F = n(this, 'deltaMsgObj'),
            z = n(this, 'initialDeltaValue'),
            X = n(this, 'finalDeltaValue'),
            B = n(this, 'deltaBehavior'),
            D = n(this, 'realDelta'),
            U;
          B === 'change'
            ? (U = Math.abs(X - z) === Math.abs(q))
            : (U = D === Math.abs(q)),
            this.assert(
              U,
              'expected ' + F + ' to ' + B + ' by ' + q,
              'expected ' + F + ' to not ' + B + ' by ' + q
            );
        }
        a.addMethod('by', Z),
          a.addProperty('extensible', function () {
            var q = n(this, 'object'),
              M = q === Object(q) && Object.isExtensible(q);
            this.assert(
              M,
              'expected #{this} to be extensible',
              'expected #{this} to not be extensible'
            );
          }),
          a.addProperty('sealed', function () {
            var q = n(this, 'object'),
              M = q === Object(q) ? Object.isSealed(q) : !0;
            this.assert(
              M,
              'expected #{this} to be sealed',
              'expected #{this} to not be sealed'
            );
          }),
          a.addProperty('frozen', function () {
            var q = n(this, 'object'),
              M = q === Object(q) ? Object.isFrozen(q) : !0;
            this.assert(
              M,
              'expected #{this} to be frozen',
              'expected #{this} to not be frozen'
            );
          }),
          a.addProperty('finite', function (q) {
            var M = n(this, 'object');
            this.assert(
              typeof M == 'number' && isFinite(M),
              'expected #{this} to be a finite number',
              'expected #{this} to not be a finite number'
            );
          });
      };
    },
  }),
  Ap = P({
    '../../node_modules/chai/lib/chai/interface/expect.js'(e, t) {
      t.exports = function (r, o) {
        (r.expect = function (a, c) {
          return new r.Assertion(a, c);
        }),
          (r.expect.fail = function (a, c, n, i) {
            throw (
              (arguments.length < 2 && ((n = a), (a = void 0)),
              (n = n || 'expect.fail()'),
              new r.AssertionError(
                n,
                { actual: a, expected: c, operator: i },
                r.expect.fail
              ))
            );
          });
      };
    },
  }),
  qp = P({
    '../../node_modules/chai/lib/chai/interface/should.js'(e, t) {
      t.exports = function (r, o) {
        var a = r.Assertion;
        function c() {
          function n() {
            return this instanceof String ||
              this instanceof Number ||
              this instanceof Boolean ||
              (typeof Symbol == 'function' && this instanceof Symbol) ||
              (typeof BigInt == 'function' && this instanceof BigInt)
              ? new a(this.valueOf(), null, n)
              : new a(this, null, n);
          }
          function i(s) {
            Object.defineProperty(this, 'should', {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            });
          }
          Object.defineProperty(Object.prototype, 'should', {
            set: i,
            get: n,
            configurable: !0,
          });
          var l = {};
          return (
            (l.fail = function (s, u, f, d) {
              throw (
                (arguments.length < 2 && ((f = s), (s = void 0)),
                (f = f || 'should.fail()'),
                new r.AssertionError(
                  f,
                  { actual: s, expected: u, operator: d },
                  l.fail
                ))
              );
            }),
            (l.equal = function (s, u, f) {
              new a(s, f).to.equal(u);
            }),
            (l.Throw = function (s, u, f, d) {
              new a(s, d).to.Throw(u, f);
            }),
            (l.exist = function (s, u) {
              new a(s, u).to.exist;
            }),
            (l.not = {}),
            (l.not.equal = function (s, u, f) {
              new a(s, f).to.not.equal(u);
            }),
            (l.not.Throw = function (s, u, f, d) {
              new a(s, d).to.not.Throw(u, f);
            }),
            (l.not.exist = function (s, u) {
              new a(s, u).to.not.exist;
            }),
            (l.throw = l.Throw),
            (l.not.throw = l.not.Throw),
            l
          );
        }
        (r.should = c), (r.Should = c);
      };
    },
  }),
  xp = P({
    '../../node_modules/chai/lib/chai/interface/assert.js'(e, t) {
      t.exports = function (r, o) {
        var a = r.Assertion,
          c = o.flag,
          n = (r.assert = function (i, l) {
            var s = new a(null, null, r.assert, !0);
            s.assert(i, l, '[ negation message unavailable ]');
          });
        (n.fail = function (i, l, s, u) {
          throw (
            (arguments.length < 2 && ((s = i), (i = void 0)),
            (s = s || 'assert.fail()'),
            new r.AssertionError(
              s,
              { actual: i, expected: l, operator: u },
              n.fail
            ))
          );
        }),
          (n.isOk = function (i, l) {
            new a(i, l, n.isOk, !0).is.ok;
          }),
          (n.isNotOk = function (i, l) {
            new a(i, l, n.isNotOk, !0).is.not.ok;
          }),
          (n.equal = function (i, l, s) {
            var u = new a(i, s, n.equal, !0);
            u.assert(
              l == c(u, 'object'),
              'expected #{this} to equal #{exp}',
              'expected #{this} to not equal #{act}',
              l,
              i,
              !0
            );
          }),
          (n.notEqual = function (i, l, s) {
            var u = new a(i, s, n.notEqual, !0);
            u.assert(
              l != c(u, 'object'),
              'expected #{this} to not equal #{exp}',
              'expected #{this} to equal #{act}',
              l,
              i,
              !0
            );
          }),
          (n.strictEqual = function (i, l, s) {
            new a(i, s, n.strictEqual, !0).to.equal(l);
          }),
          (n.notStrictEqual = function (i, l, s) {
            new a(i, s, n.notStrictEqual, !0).to.not.equal(l);
          }),
          (n.deepEqual = n.deepStrictEqual =
            function (i, l, s) {
              new a(i, s, n.deepEqual, !0).to.eql(l);
            }),
          (n.notDeepEqual = function (i, l, s) {
            new a(i, s, n.notDeepEqual, !0).to.not.eql(l);
          }),
          (n.isAbove = function (i, l, s) {
            new a(i, s, n.isAbove, !0).to.be.above(l);
          }),
          (n.isAtLeast = function (i, l, s) {
            new a(i, s, n.isAtLeast, !0).to.be.least(l);
          }),
          (n.isBelow = function (i, l, s) {
            new a(i, s, n.isBelow, !0).to.be.below(l);
          }),
          (n.isAtMost = function (i, l, s) {
            new a(i, s, n.isAtMost, !0).to.be.most(l);
          }),
          (n.isTrue = function (i, l) {
            new a(i, l, n.isTrue, !0).is.true;
          }),
          (n.isNotTrue = function (i, l) {
            new a(i, l, n.isNotTrue, !0).to.not.equal(!0);
          }),
          (n.isFalse = function (i, l) {
            new a(i, l, n.isFalse, !0).is.false;
          }),
          (n.isNotFalse = function (i, l) {
            new a(i, l, n.isNotFalse, !0).to.not.equal(!1);
          }),
          (n.isNull = function (i, l) {
            new a(i, l, n.isNull, !0).to.equal(null);
          }),
          (n.isNotNull = function (i, l) {
            new a(i, l, n.isNotNull, !0).to.not.equal(null);
          }),
          (n.isNaN = function (i, l) {
            new a(i, l, n.isNaN, !0).to.be.NaN;
          }),
          (n.isNotNaN = function (i, l) {
            new a(i, l, n.isNotNaN, !0).not.to.be.NaN;
          }),
          (n.exists = function (i, l) {
            new a(i, l, n.exists, !0).to.exist;
          }),
          (n.notExists = function (i, l) {
            new a(i, l, n.notExists, !0).to.not.exist;
          }),
          (n.isUndefined = function (i, l) {
            new a(i, l, n.isUndefined, !0).to.equal(void 0);
          }),
          (n.isDefined = function (i, l) {
            new a(i, l, n.isDefined, !0).to.not.equal(void 0);
          }),
          (n.isFunction = function (i, l) {
            new a(i, l, n.isFunction, !0).to.be.a('function');
          }),
          (n.isNotFunction = function (i, l) {
            new a(i, l, n.isNotFunction, !0).to.not.be.a('function');
          }),
          (n.isObject = function (i, l) {
            new a(i, l, n.isObject, !0).to.be.a('object');
          }),
          (n.isNotObject = function (i, l) {
            new a(i, l, n.isNotObject, !0).to.not.be.a('object');
          }),
          (n.isArray = function (i, l) {
            new a(i, l, n.isArray, !0).to.be.an('array');
          }),
          (n.isNotArray = function (i, l) {
            new a(i, l, n.isNotArray, !0).to.not.be.an('array');
          }),
          (n.isString = function (i, l) {
            new a(i, l, n.isString, !0).to.be.a('string');
          }),
          (n.isNotString = function (i, l) {
            new a(i, l, n.isNotString, !0).to.not.be.a('string');
          }),
          (n.isNumber = function (i, l) {
            new a(i, l, n.isNumber, !0).to.be.a('number');
          }),
          (n.isNotNumber = function (i, l) {
            new a(i, l, n.isNotNumber, !0).to.not.be.a('number');
          }),
          (n.isFinite = function (i, l) {
            new a(i, l, n.isFinite, !0).to.be.finite;
          }),
          (n.isBoolean = function (i, l) {
            new a(i, l, n.isBoolean, !0).to.be.a('boolean');
          }),
          (n.isNotBoolean = function (i, l) {
            new a(i, l, n.isNotBoolean, !0).to.not.be.a('boolean');
          }),
          (n.typeOf = function (i, l, s) {
            new a(i, s, n.typeOf, !0).to.be.a(l);
          }),
          (n.notTypeOf = function (i, l, s) {
            new a(i, s, n.notTypeOf, !0).to.not.be.a(l);
          }),
          (n.instanceOf = function (i, l, s) {
            new a(i, s, n.instanceOf, !0).to.be.instanceOf(l);
          }),
          (n.notInstanceOf = function (i, l, s) {
            new a(i, s, n.notInstanceOf, !0).to.not.be.instanceOf(l);
          }),
          (n.include = function (i, l, s) {
            new a(i, s, n.include, !0).include(l);
          }),
          (n.notInclude = function (i, l, s) {
            new a(i, s, n.notInclude, !0).not.include(l);
          }),
          (n.deepInclude = function (i, l, s) {
            new a(i, s, n.deepInclude, !0).deep.include(l);
          }),
          (n.notDeepInclude = function (i, l, s) {
            new a(i, s, n.notDeepInclude, !0).not.deep.include(l);
          }),
          (n.nestedInclude = function (i, l, s) {
            new a(i, s, n.nestedInclude, !0).nested.include(l);
          }),
          (n.notNestedInclude = function (i, l, s) {
            new a(i, s, n.notNestedInclude, !0).not.nested.include(l);
          }),
          (n.deepNestedInclude = function (i, l, s) {
            new a(i, s, n.deepNestedInclude, !0).deep.nested.include(l);
          }),
          (n.notDeepNestedInclude = function (i, l, s) {
            new a(i, s, n.notDeepNestedInclude, !0).not.deep.nested.include(l);
          }),
          (n.ownInclude = function (i, l, s) {
            new a(i, s, n.ownInclude, !0).own.include(l);
          }),
          (n.notOwnInclude = function (i, l, s) {
            new a(i, s, n.notOwnInclude, !0).not.own.include(l);
          }),
          (n.deepOwnInclude = function (i, l, s) {
            new a(i, s, n.deepOwnInclude, !0).deep.own.include(l);
          }),
          (n.notDeepOwnInclude = function (i, l, s) {
            new a(i, s, n.notDeepOwnInclude, !0).not.deep.own.include(l);
          }),
          (n.match = function (i, l, s) {
            new a(i, s, n.match, !0).to.match(l);
          }),
          (n.notMatch = function (i, l, s) {
            new a(i, s, n.notMatch, !0).to.not.match(l);
          }),
          (n.property = function (i, l, s) {
            new a(i, s, n.property, !0).to.have.property(l);
          }),
          (n.notProperty = function (i, l, s) {
            new a(i, s, n.notProperty, !0).to.not.have.property(l);
          }),
          (n.propertyVal = function (i, l, s, u) {
            new a(i, u, n.propertyVal, !0).to.have.property(l, s);
          }),
          (n.notPropertyVal = function (i, l, s, u) {
            new a(i, u, n.notPropertyVal, !0).to.not.have.property(l, s);
          }),
          (n.deepPropertyVal = function (i, l, s, u) {
            new a(i, u, n.deepPropertyVal, !0).to.have.deep.property(l, s);
          }),
          (n.notDeepPropertyVal = function (i, l, s, u) {
            new a(i, u, n.notDeepPropertyVal, !0).to.not.have.deep.property(
              l,
              s
            );
          }),
          (n.ownProperty = function (i, l, s) {
            new a(i, s, n.ownProperty, !0).to.have.own.property(l);
          }),
          (n.notOwnProperty = function (i, l, s) {
            new a(i, s, n.notOwnProperty, !0).to.not.have.own.property(l);
          }),
          (n.ownPropertyVal = function (i, l, s, u) {
            new a(i, u, n.ownPropertyVal, !0).to.have.own.property(l, s);
          }),
          (n.notOwnPropertyVal = function (i, l, s, u) {
            new a(i, u, n.notOwnPropertyVal, !0).to.not.have.own.property(l, s);
          }),
          (n.deepOwnPropertyVal = function (i, l, s, u) {
            new a(i, u, n.deepOwnPropertyVal, !0).to.have.deep.own.property(
              l,
              s
            );
          }),
          (n.notDeepOwnPropertyVal = function (i, l, s, u) {
            new a(
              i,
              u,
              n.notDeepOwnPropertyVal,
              !0
            ).to.not.have.deep.own.property(l, s);
          }),
          (n.nestedProperty = function (i, l, s) {
            new a(i, s, n.nestedProperty, !0).to.have.nested.property(l);
          }),
          (n.notNestedProperty = function (i, l, s) {
            new a(i, s, n.notNestedProperty, !0).to.not.have.nested.property(l);
          }),
          (n.nestedPropertyVal = function (i, l, s, u) {
            new a(i, u, n.nestedPropertyVal, !0).to.have.nested.property(l, s);
          }),
          (n.notNestedPropertyVal = function (i, l, s, u) {
            new a(i, u, n.notNestedPropertyVal, !0).to.not.have.nested.property(
              l,
              s
            );
          }),
          (n.deepNestedPropertyVal = function (i, l, s, u) {
            new a(
              i,
              u,
              n.deepNestedPropertyVal,
              !0
            ).to.have.deep.nested.property(l, s);
          }),
          (n.notDeepNestedPropertyVal = function (i, l, s, u) {
            new a(
              i,
              u,
              n.notDeepNestedPropertyVal,
              !0
            ).to.not.have.deep.nested.property(l, s);
          }),
          (n.lengthOf = function (i, l, s) {
            new a(i, s, n.lengthOf, !0).to.have.lengthOf(l);
          }),
          (n.hasAnyKeys = function (i, l, s) {
            new a(i, s, n.hasAnyKeys, !0).to.have.any.keys(l);
          }),
          (n.hasAllKeys = function (i, l, s) {
            new a(i, s, n.hasAllKeys, !0).to.have.all.keys(l);
          }),
          (n.containsAllKeys = function (i, l, s) {
            new a(i, s, n.containsAllKeys, !0).to.contain.all.keys(l);
          }),
          (n.doesNotHaveAnyKeys = function (i, l, s) {
            new a(i, s, n.doesNotHaveAnyKeys, !0).to.not.have.any.keys(l);
          }),
          (n.doesNotHaveAllKeys = function (i, l, s) {
            new a(i, s, n.doesNotHaveAllKeys, !0).to.not.have.all.keys(l);
          }),
          (n.hasAnyDeepKeys = function (i, l, s) {
            new a(i, s, n.hasAnyDeepKeys, !0).to.have.any.deep.keys(l);
          }),
          (n.hasAllDeepKeys = function (i, l, s) {
            new a(i, s, n.hasAllDeepKeys, !0).to.have.all.deep.keys(l);
          }),
          (n.containsAllDeepKeys = function (i, l, s) {
            new a(i, s, n.containsAllDeepKeys, !0).to.contain.all.deep.keys(l);
          }),
          (n.doesNotHaveAnyDeepKeys = function (i, l, s) {
            new a(i, s, n.doesNotHaveAnyDeepKeys, !0).to.not.have.any.deep.keys(
              l
            );
          }),
          (n.doesNotHaveAllDeepKeys = function (i, l, s) {
            new a(i, s, n.doesNotHaveAllDeepKeys, !0).to.not.have.all.deep.keys(
              l
            );
          }),
          (n.throws = function (i, l, s, u) {
            (typeof l == 'string' || l instanceof RegExp) &&
              ((s = l), (l = null));
            var f = new a(i, u, n.throws, !0).to.throw(l, s);
            return c(f, 'object');
          }),
          (n.doesNotThrow = function (i, l, s, u) {
            (typeof l == 'string' || l instanceof RegExp) &&
              ((s = l), (l = null)),
              new a(i, u, n.doesNotThrow, !0).to.not.throw(l, s);
          }),
          (n.operator = function (i, l, s, u) {
            var f;
            switch (l) {
              case '==':
                f = i == s;
                break;
              case '===':
                f = i === s;
                break;
              case '>':
                f = i > s;
                break;
              case '>=':
                f = i >= s;
                break;
              case '<':
                f = i < s;
                break;
              case '<=':
                f = i <= s;
                break;
              case '!=':
                f = i != s;
                break;
              case '!==':
                f = i !== s;
                break;
              default:
                throw (
                  ((u = u && u + ': '),
                  new r.AssertionError(
                    u + 'Invalid operator "' + l + '"',
                    void 0,
                    n.operator
                  ))
                );
            }
            var d = new a(f, u, n.operator, !0);
            d.assert(
              c(d, 'object') === !0,
              'expected ' + o.inspect(i) + ' to be ' + l + ' ' + o.inspect(s),
              'expected ' +
                o.inspect(i) +
                ' to not be ' +
                l +
                ' ' +
                o.inspect(s)
            );
          }),
          (n.closeTo = function (i, l, s, u) {
            new a(i, u, n.closeTo, !0).to.be.closeTo(l, s);
          }),
          (n.approximately = function (i, l, s, u) {
            new a(i, u, n.approximately, !0).to.be.approximately(l, s);
          }),
          (n.sameMembers = function (i, l, s) {
            new a(i, s, n.sameMembers, !0).to.have.same.members(l);
          }),
          (n.notSameMembers = function (i, l, s) {
            new a(i, s, n.notSameMembers, !0).to.not.have.same.members(l);
          }),
          (n.sameDeepMembers = function (i, l, s) {
            new a(i, s, n.sameDeepMembers, !0).to.have.same.deep.members(l);
          }),
          (n.notSameDeepMembers = function (i, l, s) {
            new a(i, s, n.notSameDeepMembers, !0).to.not.have.same.deep.members(
              l
            );
          }),
          (n.sameOrderedMembers = function (i, l, s) {
            new a(i, s, n.sameOrderedMembers, !0).to.have.same.ordered.members(
              l
            );
          }),
          (n.notSameOrderedMembers = function (i, l, s) {
            new a(
              i,
              s,
              n.notSameOrderedMembers,
              !0
            ).to.not.have.same.ordered.members(l);
          }),
          (n.sameDeepOrderedMembers = function (i, l, s) {
            new a(
              i,
              s,
              n.sameDeepOrderedMembers,
              !0
            ).to.have.same.deep.ordered.members(l);
          }),
          (n.notSameDeepOrderedMembers = function (i, l, s) {
            new a(
              i,
              s,
              n.notSameDeepOrderedMembers,
              !0
            ).to.not.have.same.deep.ordered.members(l);
          }),
          (n.includeMembers = function (i, l, s) {
            new a(i, s, n.includeMembers, !0).to.include.members(l);
          }),
          (n.notIncludeMembers = function (i, l, s) {
            new a(i, s, n.notIncludeMembers, !0).to.not.include.members(l);
          }),
          (n.includeDeepMembers = function (i, l, s) {
            new a(i, s, n.includeDeepMembers, !0).to.include.deep.members(l);
          }),
          (n.notIncludeDeepMembers = function (i, l, s) {
            new a(
              i,
              s,
              n.notIncludeDeepMembers,
              !0
            ).to.not.include.deep.members(l);
          }),
          (n.includeOrderedMembers = function (i, l, s) {
            new a(i, s, n.includeOrderedMembers, !0).to.include.ordered.members(
              l
            );
          }),
          (n.notIncludeOrderedMembers = function (i, l, s) {
            new a(
              i,
              s,
              n.notIncludeOrderedMembers,
              !0
            ).to.not.include.ordered.members(l);
          }),
          (n.includeDeepOrderedMembers = function (i, l, s) {
            new a(
              i,
              s,
              n.includeDeepOrderedMembers,
              !0
            ).to.include.deep.ordered.members(l);
          }),
          (n.notIncludeDeepOrderedMembers = function (i, l, s) {
            new a(
              i,
              s,
              n.notIncludeDeepOrderedMembers,
              !0
            ).to.not.include.deep.ordered.members(l);
          }),
          (n.oneOf = function (i, l, s) {
            new a(i, s, n.oneOf, !0).to.be.oneOf(l);
          }),
          (n.changes = function (i, l, s, u) {
            arguments.length === 3 &&
              typeof l == 'function' &&
              ((u = s), (s = null)),
              new a(i, u, n.changes, !0).to.change(l, s);
          }),
          (n.changesBy = function (i, l, s, u, f) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (f = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            new a(i, f, n.changesBy, !0).to.change(l, s).by(u);
          }),
          (n.doesNotChange = function (i, l, s, u) {
            return (
              arguments.length === 3 &&
                typeof l == 'function' &&
                ((u = s), (s = null)),
              new a(i, u, n.doesNotChange, !0).to.not.change(l, s)
            );
          }),
          (n.changesButNotBy = function (i, l, s, u, f) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (f = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            new a(i, f, n.changesButNotBy, !0).to.change(l, s).but.not.by(u);
          }),
          (n.increases = function (i, l, s, u) {
            return (
              arguments.length === 3 &&
                typeof l == 'function' &&
                ((u = s), (s = null)),
              new a(i, u, n.increases, !0).to.increase(l, s)
            );
          }),
          (n.increasesBy = function (i, l, s, u, f) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (f = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            new a(i, f, n.increasesBy, !0).to.increase(l, s).by(u);
          }),
          (n.doesNotIncrease = function (i, l, s, u) {
            return (
              arguments.length === 3 &&
                typeof l == 'function' &&
                ((u = s), (s = null)),
              new a(i, u, n.doesNotIncrease, !0).to.not.increase(l, s)
            );
          }),
          (n.increasesButNotBy = function (i, l, s, u, f) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (f = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            new a(i, f, n.increasesButNotBy, !0).to
              .increase(l, s)
              .but.not.by(u);
          }),
          (n.decreases = function (i, l, s, u) {
            return (
              arguments.length === 3 &&
                typeof l == 'function' &&
                ((u = s), (s = null)),
              new a(i, u, n.decreases, !0).to.decrease(l, s)
            );
          }),
          (n.decreasesBy = function (i, l, s, u, f) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (f = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            new a(i, f, n.decreasesBy, !0).to.decrease(l, s).by(u);
          }),
          (n.doesNotDecrease = function (i, l, s, u) {
            return (
              arguments.length === 3 &&
                typeof l == 'function' &&
                ((u = s), (s = null)),
              new a(i, u, n.doesNotDecrease, !0).to.not.decrease(l, s)
            );
          }),
          (n.doesNotDecreaseBy = function (i, l, s, u, f) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (f = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            return new a(i, f, n.doesNotDecreaseBy, !0).to.not
              .decrease(l, s)
              .by(u);
          }),
          (n.decreasesButNotBy = function (i, l, s, u, f) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (f = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            new a(i, f, n.decreasesButNotBy, !0).to
              .decrease(l, s)
              .but.not.by(u);
          }),
          (n.ifError = function (i) {
            if (i) throw i;
          }),
          (n.isExtensible = function (i, l) {
            new a(i, l, n.isExtensible, !0).to.be.extensible;
          }),
          (n.isNotExtensible = function (i, l) {
            new a(i, l, n.isNotExtensible, !0).to.not.be.extensible;
          }),
          (n.isSealed = function (i, l) {
            new a(i, l, n.isSealed, !0).to.be.sealed;
          }),
          (n.isNotSealed = function (i, l) {
            new a(i, l, n.isNotSealed, !0).to.not.be.sealed;
          }),
          (n.isFrozen = function (i, l) {
            new a(i, l, n.isFrozen, !0).to.be.frozen;
          }),
          (n.isNotFrozen = function (i, l) {
            new a(i, l, n.isNotFrozen, !0).to.not.be.frozen;
          }),
          (n.isEmpty = function (i, l) {
            new a(i, l, n.isEmpty, !0).to.be.empty;
          }),
          (n.isNotEmpty = function (i, l) {
            new a(i, l, n.isNotEmpty, !0).to.not.be.empty;
          }),
          (function i(l, s) {
            return (n[s] = n[l]), i;
          })('isOk', 'ok')('isNotOk', 'notOk')('throws', 'throw')(
            'throws',
            'Throw'
          )('isExtensible', 'extensible')('isNotExtensible', 'notExtensible')(
            'isSealed',
            'sealed'
          )('isNotSealed', 'notSealed')('isFrozen', 'frozen')(
            'isNotFrozen',
            'notFrozen'
          )('isEmpty', 'empty')('isNotEmpty', 'notEmpty');
      };
    },
  }),
  Ut = P({
    '../../node_modules/chai/lib/chai.js'(e) {
      var t = [];
      (e.version = '4.3.8'), (e.AssertionError = ql());
      var r = Pp();
      (e.use = function (s) {
        return ~t.indexOf(s) || (s(e, r), t.push(s)), e;
      }),
        (e.util = r);
      var o = fr();
      e.config = o;
      var a = Rp();
      e.use(a);
      var c = Tp();
      e.use(c);
      var n = Ap();
      e.use(n);
      var i = qp();
      e.use(i);
      var l = xp();
      e.use(l);
    },
  }),
  Mp = P({
    '../../node_modules/chai/index.js'(e, t) {
      t.exports = Ut();
    },
  }),
  jp = P({
    '../../node_modules/pretty-format/node_modules/ansi-styles/index.js'(e, t) {
      var r =
          (c = 0) =>
          (n) =>
            `\x1B[${38 + c};5;${n}m`,
        o =
          (c = 0) =>
          (n, i, l) =>
            `\x1B[${38 + c};2;${n};${i};${l}m`;
      function a() {
        let c = new Map(),
          n = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              overline: [53, 55],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29],
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              blackBright: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39],
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49],
            },
          };
        (n.color.gray = n.color.blackBright),
          (n.bgColor.bgGray = n.bgColor.bgBlackBright),
          (n.color.grey = n.color.blackBright),
          (n.bgColor.bgGrey = n.bgColor.bgBlackBright);
        for (let [i, l] of Object.entries(n)) {
          for (let [s, u] of Object.entries(l))
            (n[s] = { open: `\x1B[${u[0]}m`, close: `\x1B[${u[1]}m` }),
              (l[s] = n[s]),
              c.set(u[0], u[1]);
          Object.defineProperty(n, i, { value: l, enumerable: !1 });
        }
        return (
          Object.defineProperty(n, 'codes', { value: c, enumerable: !1 }),
          (n.color.close = '\x1B[39m'),
          (n.bgColor.close = '\x1B[49m'),
          (n.color.ansi256 = r()),
          (n.color.ansi16m = o()),
          (n.bgColor.ansi256 = r(10)),
          (n.bgColor.ansi16m = o(10)),
          Object.defineProperties(n, {
            rgbToAnsi256: {
              value: (i, l, s) =>
                i === l && l === s
                  ? i < 8
                    ? 16
                    : i > 248
                      ? 231
                      : Math.round(((i - 8) / 247) * 24) + 232
                  : 16 +
                    36 * Math.round((i / 255) * 5) +
                    6 * Math.round((l / 255) * 5) +
                    Math.round((s / 255) * 5),
              enumerable: !1,
            },
            hexToRgb: {
              value: (i) => {
                let l = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(
                  i.toString(16)
                );
                if (!l) return [0, 0, 0];
                let { colorString: s } = l.groups;
                s.length === 3 &&
                  (s = s
                    .split('')
                    .map((f) => f + f)
                    .join(''));
                let u = Number.parseInt(s, 16);
                return [(u >> 16) & 255, (u >> 8) & 255, u & 255];
              },
              enumerable: !1,
            },
            hexToAnsi256: {
              value: (i) => n.rgbToAnsi256(...n.hexToRgb(i)),
              enumerable: !1,
            },
          }),
          n
        );
      }
      Object.defineProperty(t, 'exports', { enumerable: !0, get: a });
    },
  }),
  vn = P({
    '../../node_modules/pretty-format/build/collections.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printIteratorEntries = r),
        (e.printIteratorValues = o),
        (e.printListItems = a),
        (e.printObjectProperties = c);
      var t = (n, i) => {
        let l = Object.keys(n),
          s = i !== null ? l.sort(i) : l;
        return (
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(n).forEach((u) => {
              Object.getOwnPropertyDescriptor(n, u).enumerable && s.push(u);
            }),
          s
        );
      };
      function r(n, i, l, s, u, f, d = ': ') {
        let p = '',
          m = 0,
          y = n.next();
        if (!y.done) {
          p += i.spacingOuter;
          let g = l + i.indent;
          for (; !y.done; ) {
            if (((p += g), m++ === i.maxWidth)) {
              p += '…';
              break;
            }
            let h = f(y.value[0], i, g, s, u),
              v = f(y.value[1], i, g, s, u);
            (p += h + d + v),
              (y = n.next()),
              y.done ? i.min || (p += ',') : (p += `,${i.spacingInner}`);
          }
          p += i.spacingOuter + l;
        }
        return p;
      }
      function o(n, i, l, s, u, f) {
        let d = '',
          p = 0,
          m = n.next();
        if (!m.done) {
          d += i.spacingOuter;
          let y = l + i.indent;
          for (; !m.done; ) {
            if (((d += y), p++ === i.maxWidth)) {
              d += '…';
              break;
            }
            (d += f(m.value, i, y, s, u)),
              (m = n.next()),
              m.done ? i.min || (d += ',') : (d += `,${i.spacingInner}`);
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
      function a(n, i, l, s, u, f) {
        let d = '';
        if (n.length) {
          d += i.spacingOuter;
          let p = l + i.indent;
          for (let m = 0; m < n.length; m++) {
            if (((d += p), m === i.maxWidth)) {
              d += '…';
              break;
            }
            m in n && (d += f(n[m], i, p, s, u)),
              m < n.length - 1
                ? (d += `,${i.spacingInner}`)
                : i.min || (d += ',');
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
      function c(n, i, l, s, u, f) {
        let d = '',
          p = t(n, i.compareKeys);
        if (p.length) {
          d += i.spacingOuter;
          let m = l + i.indent;
          for (let y = 0; y < p.length; y++) {
            let g = p[y],
              h = f(g, i, m, s, u),
              v = f(n[g], i, m, s, u);
            (d += `${m + h}: ${v}`),
              y < p.length - 1
                ? (d += `,${i.spacingInner}`)
                : i.min || (d += ',');
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
    },
  }),
  Ip = P({
    '../../node_modules/pretty-format/build/plugins/AsymmetricMatcher.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = vn(),
        r = globalThis['jest-symbol-do-not-touch'] || globalThis.Symbol,
        o =
          typeof r == 'function' && r.for
            ? r.for('jest.asymmetricMatcher')
            : 1267621,
        a = ' ',
        c = (s, u, f, d, p, m) => {
          let y = s.toString();
          if (y === 'ArrayContaining' || y === 'ArrayNotContaining')
            return ++d > u.maxDepth
              ? `[${y}]`
              : `${y + a}[${(0, t.printListItems)(s.sample, u, f, d, p, m)}]`;
          if (y === 'ObjectContaining' || y === 'ObjectNotContaining')
            return ++d > u.maxDepth
              ? `[${y}]`
              : `${y + a}{${(0, t.printObjectProperties)(s.sample, u, f, d, p, m)}}`;
          if (
            y === 'StringMatching' ||
            y === 'StringNotMatching' ||
            y === 'StringContaining' ||
            y === 'StringNotContaining'
          )
            return y + a + m(s.sample, u, f, d, p);
          if (typeof s.toAsymmetricMatcher != 'function')
            throw new Error(
              `Asymmetric matcher ${s.constructor.name} does not implement toAsymmetricMatcher()`
            );
          return s.toAsymmetricMatcher();
        };
      e.serialize = c;
      var n = (s) => s && s.$$typeof === o;
      e.test = n;
      var i = { serialize: c, test: n },
        l = i;
      e.default = l;
    },
  }),
  Np = P({
    '../../node_modules/pretty-format/build/plugins/DOMCollection.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = vn(),
        r = ' ',
        o = ['DOMStringMap', 'NamedNodeMap'],
        a = /^(HTML\w*Collection|NodeList)$/,
        c = (f) => o.indexOf(f) !== -1 || a.test(f),
        n = (f) =>
          f && f.constructor && !!f.constructor.name && c(f.constructor.name);
      e.test = n;
      var i = (f) => f.constructor.name === 'NamedNodeMap',
        l = (f, d, p, m, y, g) => {
          let h = f.constructor.name;
          return ++m > d.maxDepth
            ? `[${h}]`
            : (d.min ? '' : h + r) +
                (o.indexOf(h) !== -1
                  ? `{${(0, t.printObjectProperties)(i(f) ? Array.from(f).reduce((v, S) => ((v[S.name] = S.value), v), {}) : { ...f }, d, p, m, y, g)}}`
                  : `[${(0, t.printListItems)(Array.from(f), d, p, m, y, g)}]`);
        };
      e.serialize = l;
      var s = { serialize: l, test: n },
        u = s;
      e.default = u;
    },
  }),
  Bp = P({
    '../../node_modules/pretty-format/build/plugins/lib/escapeHTML.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = t);
      function t(r) {
        return r.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
    },
  }),
  Vo = P({
    '../../node_modules/pretty-format/build/plugins/lib/markup.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printText =
          e.printProps =
          e.printElementAsLeaf =
          e.printElement =
          e.printComment =
          e.printChildren =
            void 0);
      var t = r(Bp());
      function r(s) {
        return s && s.__esModule ? s : { default: s };
      }
      var o = (s, u, f, d, p, m, y) => {
        let g = d + f.indent,
          h = f.colors;
        return s
          .map((v) => {
            let S = u[v],
              E = y(S, f, g, p, m);
            return (
              typeof S != 'string' &&
                (E.indexOf(`
`) !== -1 && (E = f.spacingOuter + g + E + f.spacingOuter + d),
                (E = `{${E}}`)),
              `${f.spacingInner + d + h.prop.open + v + h.prop.close}=${h.value.open}${E}${h.value.close}`
            );
          })
          .join('');
      };
      e.printProps = o;
      var a = (s, u, f, d, p, m) =>
        s
          .map(
            (y) =>
              u.spacingOuter +
              f +
              (typeof y == 'string' ? c(y, u) : m(y, u, f, d, p))
          )
          .join('');
      e.printChildren = a;
      var c = (s, u) => {
        let f = u.colors.content;
        return f.open + (0, t.default)(s) + f.close;
      };
      e.printText = c;
      var n = (s, u) => {
        let f = u.colors.comment;
        return `${f.open}<!--${(0, t.default)(s)}-->${f.close}`;
      };
      e.printComment = n;
      var i = (s, u, f, d, p) => {
        let m = d.colors.tag;
        return `${m.open}<${s}${u && m.close + u + d.spacingOuter + p + m.open}${f ? `>${m.close}${f}${d.spacingOuter}${p}${m.open}</${s}` : `${u && !d.min ? '' : ' '}/`}>${m.close}`;
      };
      e.printElement = i;
      var l = (s, u) => {
        let f = u.colors.tag;
        return `${f.open}<${s}${f.close} …${f.open} />${f.close}`;
      };
      e.printElementAsLeaf = l;
    },
  }),
  $p = P({
    '../../node_modules/pretty-format/build/plugins/DOMElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = Vo(),
        r = 1,
        o = 3,
        a = 8,
        c = 11,
        n = /^((HTML|SVG)\w*)?Element$/,
        i = (g) => {
          try {
            return typeof g.hasAttribute == 'function' && g.hasAttribute('is');
          } catch {
            return !1;
          }
        },
        l = (g) => {
          let h = g.constructor.name,
            { nodeType: v, tagName: S } = g,
            E = (typeof S == 'string' && S.includes('-')) || i(g);
          return (
            (v === r && (n.test(h) || E)) ||
            (v === o && h === 'Text') ||
            (v === a && h === 'Comment') ||
            (v === c && h === 'DocumentFragment')
          );
        },
        s = (g) => {
          var h;
          return (
            ((h = g == null ? void 0 : g.constructor) == null
              ? void 0
              : h.name) && l(g)
          );
        };
      e.test = s;
      function u(g) {
        return g.nodeType === o;
      }
      function f(g) {
        return g.nodeType === a;
      }
      function d(g) {
        return g.nodeType === c;
      }
      var p = (g, h, v, S, E, C) => {
        if (u(g)) return (0, t.printText)(g.data, h);
        if (f(g)) return (0, t.printComment)(g.data, h);
        let A = d(g) ? 'DocumentFragment' : g.tagName.toLowerCase();
        return ++S > h.maxDepth
          ? (0, t.printElementAsLeaf)(A, h)
          : (0, t.printElement)(
              A,
              (0, t.printProps)(
                d(g) ? [] : Array.from(g.attributes, (R) => R.name).sort(),
                d(g)
                  ? {}
                  : Array.from(g.attributes).reduce(
                      (R, _) => ((R[_.name] = _.value), R),
                      {}
                    ),
                h,
                v + h.indent,
                S,
                E,
                C
              ),
              (0, t.printChildren)(
                Array.prototype.slice.call(g.childNodes || g.children),
                h,
                v + h.indent,
                S,
                E,
                C
              ),
              h,
              v
            );
      };
      e.serialize = p;
      var m = { serialize: p, test: s },
        y = m;
      e.default = y;
    },
  }),
  Dp = P({
    '../../node_modules/pretty-format/build/plugins/Immutable.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = vn(),
        r = '@@__IMMUTABLE_ITERABLE__@@',
        o = '@@__IMMUTABLE_LIST__@@',
        a = '@@__IMMUTABLE_KEYED__@@',
        c = '@@__IMMUTABLE_MAP__@@',
        n = '@@__IMMUTABLE_ORDERED__@@',
        i = '@@__IMMUTABLE_RECORD__@@',
        l = '@@__IMMUTABLE_SEQ__@@',
        s = '@@__IMMUTABLE_SET__@@',
        u = '@@__IMMUTABLE_STACK__@@',
        f = (_) => `Immutable.${_}`,
        d = (_) => `[${_}]`,
        p = ' ',
        m = '…',
        y = (_, O, x, I, H, V, L) =>
          ++I > O.maxDepth
            ? d(f(L))
            : `${f(L) + p}{${(0, t.printIteratorEntries)(_.entries(), O, x, I, H, V)}}`;
      function g(_) {
        let O = 0;
        return {
          next() {
            if (O < _._keys.length) {
              let x = _._keys[O++];
              return { done: !1, value: [x, _.get(x)] };
            }
            return { done: !0, value: void 0 };
          },
        };
      }
      var h = (_, O, x, I, H, V) => {
          let L = f(_._name || 'Record');
          return ++I > O.maxDepth
            ? d(L)
            : `${L + p}{${(0, t.printIteratorEntries)(g(_), O, x, I, H, V)}}`;
        },
        v = (_, O, x, I, H, V) => {
          let L = f('Seq');
          return ++I > O.maxDepth
            ? d(L)
            : _[a]
              ? `${L + p}{${_._iter || _._object ? (0, t.printIteratorEntries)(_.entries(), O, x, I, H, V) : m}}`
              : `${L + p}[${_._iter || _._array || _._collection || _._iterable ? (0, t.printIteratorValues)(_.values(), O, x, I, H, V) : m}]`;
        },
        S = (_, O, x, I, H, V, L) =>
          ++I > O.maxDepth
            ? d(f(L))
            : `${f(L) + p}[${(0, t.printIteratorValues)(_.values(), O, x, I, H, V)}]`,
        E = (_, O, x, I, H, V) =>
          _[c]
            ? y(_, O, x, I, H, V, _[n] ? 'OrderedMap' : 'Map')
            : _[o]
              ? S(_, O, x, I, H, V, 'List')
              : _[s]
                ? S(_, O, x, I, H, V, _[n] ? 'OrderedSet' : 'Set')
                : _[u]
                  ? S(_, O, x, I, H, V, 'Stack')
                  : _[l]
                    ? v(_, O, x, I, H, V)
                    : h(_, O, x, I, H, V);
      e.serialize = E;
      var C = (_) => _ && (_[r] === !0 || _[i] === !0);
      e.test = C;
      var A = { serialize: E, test: C },
        R = A;
      e.default = R;
    },
  }),
  kp = P({
    '../../node_modules/pretty-format/node_modules/react-is/cjs/react-is.development.js'(
      e
    ) {
      (function () {
        var t = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          c = Symbol.for('react.profiler'),
          n = Symbol.for('react.provider'),
          i = Symbol.for('react.context'),
          l = Symbol.for('react.server_context'),
          s = Symbol.for('react.forward_ref'),
          u = Symbol.for('react.suspense'),
          f = Symbol.for('react.suspense_list'),
          d = Symbol.for('react.memo'),
          p = Symbol.for('react.lazy'),
          m = Symbol.for('react.offscreen'),
          y = !1,
          g = !1,
          h = !1,
          v = !1,
          S = !1,
          E;
        E = Symbol.for('react.module.reference');
        function C(k) {
          return !!(
            typeof k == 'string' ||
            typeof k == 'function' ||
            k === o ||
            k === c ||
            S ||
            k === a ||
            k === u ||
            k === f ||
            v ||
            k === m ||
            y ||
            g ||
            h ||
            (typeof k == 'object' &&
              k !== null &&
              (k.$$typeof === p ||
                k.$$typeof === d ||
                k.$$typeof === n ||
                k.$$typeof === i ||
                k.$$typeof === s ||
                k.$$typeof === E ||
                k.getModuleId !== void 0))
          );
        }
        function A(k) {
          if (typeof k == 'object' && k !== null) {
            var ie = k.$$typeof;
            switch (ie) {
              case t:
                var se = k.type;
                switch (se) {
                  case o:
                  case c:
                  case a:
                  case u:
                  case f:
                    return se;
                  default:
                    var fe = se && se.$$typeof;
                    switch (fe) {
                      case l:
                      case i:
                      case s:
                      case p:
                      case d:
                      case n:
                        return fe;
                      default:
                        return ie;
                    }
                }
              case r:
                return ie;
            }
          }
        }
        var R = i,
          _ = n,
          O = t,
          x = s,
          I = o,
          H = p,
          V = d,
          L = r,
          re = c,
          G = a,
          oe = u,
          ae = f,
          ue = !1,
          Z = !1;
        function q(k) {
          return (
            ue ||
              ((ue = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.'
              )),
            !1
          );
        }
        function M(k) {
          return (
            Z ||
              ((Z = !0),
              console.warn(
                'The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.'
              )),
            !1
          );
        }
        function F(k) {
          return A(k) === i;
        }
        function z(k) {
          return A(k) === n;
        }
        function X(k) {
          return typeof k == 'object' && k !== null && k.$$typeof === t;
        }
        function B(k) {
          return A(k) === s;
        }
        function D(k) {
          return A(k) === o;
        }
        function U(k) {
          return A(k) === p;
        }
        function ee(k) {
          return A(k) === d;
        }
        function b(k) {
          return A(k) === r;
        }
        function N(k) {
          return A(k) === c;
        }
        function $(k) {
          return A(k) === a;
        }
        function Y(k) {
          return A(k) === u;
        }
        function W(k) {
          return A(k) === f;
        }
        (e.ContextConsumer = R),
          (e.ContextProvider = _),
          (e.Element = O),
          (e.ForwardRef = x),
          (e.Fragment = I),
          (e.Lazy = H),
          (e.Memo = V),
          (e.Portal = L),
          (e.Profiler = re),
          (e.StrictMode = G),
          (e.Suspense = oe),
          (e.SuspenseList = ae),
          (e.isAsyncMode = q),
          (e.isConcurrentMode = M),
          (e.isContextConsumer = F),
          (e.isContextProvider = z),
          (e.isElement = X),
          (e.isForwardRef = B),
          (e.isFragment = D),
          (e.isLazy = U),
          (e.isMemo = ee),
          (e.isPortal = b),
          (e.isProfiler = N),
          (e.isStrictMode = $),
          (e.isSuspense = Y),
          (e.isSuspenseList = W),
          (e.isValidElementType = C),
          (e.typeOf = A);
      })();
    },
  }),
  Lp = P({
    '../../node_modules/pretty-format/node_modules/react-is/index.js'(e, t) {
      t.exports = kp();
    },
  }),
  Fp = P({
    '../../node_modules/pretty-format/build/plugins/ReactElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = a(Lp()),
        r = Vo();
      function o(d) {
        if (typeof WeakMap != 'function') return null;
        var p = new WeakMap(),
          m = new WeakMap();
        return (o = function (y) {
          return y ? m : p;
        })(d);
      }
      function a(d, p) {
        if (!p && d && d.__esModule) return d;
        if (d === null || (typeof d != 'object' && typeof d != 'function'))
          return { default: d };
        var m = o(p);
        if (m && m.has(d)) return m.get(d);
        var y = {},
          g = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var h in d)
          if (h !== 'default' && Object.prototype.hasOwnProperty.call(d, h)) {
            var v = g ? Object.getOwnPropertyDescriptor(d, h) : null;
            v && (v.get || v.set)
              ? Object.defineProperty(y, h, v)
              : (y[h] = d[h]);
          }
        return (y.default = d), m && m.set(d, y), y;
      }
      var c = (d, p = []) => (
          Array.isArray(d)
            ? d.forEach((m) => {
                c(m, p);
              })
            : d != null && d !== !1 && p.push(d),
          p
        ),
        n = (d) => {
          let p = d.type;
          if (typeof p == 'string') return p;
          if (typeof p == 'function')
            return p.displayName || p.name || 'Unknown';
          if (t.isFragment(d)) return 'React.Fragment';
          if (t.isSuspense(d)) return 'React.Suspense';
          if (typeof p == 'object' && p !== null) {
            if (t.isContextProvider(d)) return 'Context.Provider';
            if (t.isContextConsumer(d)) return 'Context.Consumer';
            if (t.isForwardRef(d)) {
              if (p.displayName) return p.displayName;
              let m = p.render.displayName || p.render.name || '';
              return m !== '' ? `ForwardRef(${m})` : 'ForwardRef';
            }
            if (t.isMemo(d)) {
              let m = p.displayName || p.type.displayName || p.type.name || '';
              return m !== '' ? `Memo(${m})` : 'Memo';
            }
          }
          return 'UNDEFINED';
        },
        i = (d) => {
          let { props: p } = d;
          return Object.keys(p)
            .filter((m) => m !== 'children' && p[m] !== void 0)
            .sort();
        },
        l = (d, p, m, y, g, h) =>
          ++y > p.maxDepth
            ? (0, r.printElementAsLeaf)(n(d), p)
            : (0, r.printElement)(
                n(d),
                (0, r.printProps)(i(d), d.props, p, m + p.indent, y, g, h),
                (0, r.printChildren)(
                  c(d.props.children),
                  p,
                  m + p.indent,
                  y,
                  g,
                  h
                ),
                p,
                m
              );
      e.serialize = l;
      var s = (d) => d != null && t.isElement(d);
      e.test = s;
      var u = { serialize: l, test: s },
        f = u;
      e.default = f;
    },
  }),
  Up = P({
    '../../node_modules/pretty-format/build/plugins/ReactTestComponent.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = Vo(),
        r = globalThis['jest-symbol-do-not-touch'] || globalThis.Symbol,
        o =
          typeof r == 'function' && r.for
            ? r.for('react.test.json')
            : 245830487,
        a = (s) => {
          let { props: u } = s;
          return u
            ? Object.keys(u)
                .filter((f) => u[f] !== void 0)
                .sort()
            : [];
        },
        c = (s, u, f, d, p, m) =>
          ++d > u.maxDepth
            ? (0, t.printElementAsLeaf)(s.type, u)
            : (0, t.printElement)(
                s.type,
                s.props
                  ? (0, t.printProps)(a(s), s.props, u, f + u.indent, d, p, m)
                  : '',
                s.children
                  ? (0, t.printChildren)(s.children, u, f + u.indent, d, p, m)
                  : '',
                u,
                f
              );
      e.serialize = c;
      var n = (s) => s && s.$$typeof === o;
      e.test = n;
      var i = { serialize: c, test: n },
        l = i;
      e.default = l;
    },
  }),
  _n = P({
    '../../node_modules/pretty-format/build/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = e.DEFAULT_OPTIONS = void 0),
        (e.format = D),
        (e.plugins = void 0);
      var t = s(jp()),
        r = vn(),
        o = s(Ip()),
        a = s(Np()),
        c = s($p()),
        n = s(Dp()),
        i = s(Fp()),
        l = s(Up());
      function s(b) {
        return b && b.__esModule ? b : { default: b };
      }
      var u = Object.prototype.toString,
        f = Date.prototype.toISOString,
        d = Error.prototype.toString,
        p = RegExp.prototype.toString,
        m = (b) =>
          (typeof b.constructor == 'function' && b.constructor.name) ||
          'Object',
        y = (b) => typeof window < 'u' && b === window,
        g = /^Symbol\((.*)\)(.*)$/,
        h = /\n/gi,
        v = class extends Error {
          constructor(b, N) {
            super(b), (this.stack = N), (this.name = this.constructor.name);
          }
        };
      function S(b) {
        return (
          b === '[object Array]' ||
          b === '[object ArrayBuffer]' ||
          b === '[object DataView]' ||
          b === '[object Float32Array]' ||
          b === '[object Float64Array]' ||
          b === '[object Int8Array]' ||
          b === '[object Int16Array]' ||
          b === '[object Int32Array]' ||
          b === '[object Uint8Array]' ||
          b === '[object Uint8ClampedArray]' ||
          b === '[object Uint16Array]' ||
          b === '[object Uint32Array]'
        );
      }
      function E(b) {
        return Object.is(b, -0) ? '-0' : String(b);
      }
      function C(b) {
        return `${b}n`;
      }
      function A(b, N) {
        return N ? `[Function ${b.name || 'anonymous'}]` : '[Function]';
      }
      function R(b) {
        return String(b).replace(g, 'Symbol($1)');
      }
      function _(b) {
        return `[${d.call(b)}]`;
      }
      function O(b, N, $, Y) {
        if (b === !0 || b === !1) return `${b}`;
        if (b === void 0) return 'undefined';
        if (b === null) return 'null';
        let W = typeof b;
        if (W === 'number') return E(b);
        if (W === 'bigint') return C(b);
        if (W === 'string')
          return Y ? `"${b.replace(/"|\\/g, '\\$&')}"` : `"${b}"`;
        if (W === 'function') return A(b, N);
        if (W === 'symbol') return R(b);
        let k = u.call(b);
        return k === '[object WeakMap]'
          ? 'WeakMap {}'
          : k === '[object WeakSet]'
            ? 'WeakSet {}'
            : k === '[object Function]' || k === '[object GeneratorFunction]'
              ? A(b, N)
              : k === '[object Symbol]'
                ? R(b)
                : k === '[object Date]'
                  ? isNaN(+b)
                    ? 'Date { NaN }'
                    : f.call(b)
                  : k === '[object Error]'
                    ? _(b)
                    : k === '[object RegExp]'
                      ? $
                        ? p.call(b).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
                        : p.call(b)
                      : b instanceof Error
                        ? _(b)
                        : null;
      }
      function x(b, N, $, Y, W, k) {
        if (W.indexOf(b) !== -1) return '[Circular]';
        (W = W.slice()), W.push(b);
        let ie = ++Y > N.maxDepth,
          se = N.min;
        if (
          N.callToJSON &&
          !ie &&
          b.toJSON &&
          typeof b.toJSON == 'function' &&
          !k
        )
          return L(b.toJSON(), N, $, Y, W, !0);
        let fe = u.call(b);
        return fe === '[object Arguments]'
          ? ie
            ? '[Arguments]'
            : `${se ? '' : 'Arguments '}[${(0, r.printListItems)(b, N, $, Y, W, L)}]`
          : S(fe)
            ? ie
              ? `[${b.constructor.name}]`
              : `${se || (!N.printBasicPrototype && b.constructor.name === 'Array') ? '' : `${b.constructor.name} `}[${(0, r.printListItems)(b, N, $, Y, W, L)}]`
            : fe === '[object Map]'
              ? ie
                ? '[Map]'
                : `Map {${(0, r.printIteratorEntries)(b.entries(), N, $, Y, W, L, ' => ')}}`
              : fe === '[object Set]'
                ? ie
                  ? '[Set]'
                  : `Set {${(0, r.printIteratorValues)(b.values(), N, $, Y, W, L)}}`
                : ie || y(b)
                  ? `[${m(b)}]`
                  : `${se || (!N.printBasicPrototype && m(b) === 'Object') ? '' : `${m(b)} `}{${(0, r.printObjectProperties)(b, N, $, Y, W, L)}}`;
      }
      function I(b) {
        return b.serialize != null;
      }
      function H(b, N, $, Y, W, k) {
        let ie;
        try {
          ie = I(b)
            ? b.serialize(N, $, Y, W, k, L)
            : b.print(
                N,
                (se) => L(se, $, Y, W, k),
                (se) => {
                  let fe = Y + $.indent;
                  return (
                    fe +
                    se.replace(
                      h,
                      `
${fe}`
                    )
                  );
                },
                {
                  edgeSpacing: $.spacingOuter,
                  min: $.min,
                  spacing: $.spacingInner,
                },
                $.colors
              );
        } catch (se) {
          throw new v(se.message, se.stack);
        }
        if (typeof ie != 'string')
          throw new Error(
            `pretty-format: Plugin must return type "string" but instead returned "${typeof ie}".`
          );
        return ie;
      }
      function V(b, N) {
        for (let $ = 0; $ < b.length; $++)
          try {
            if (b[$].test(N)) return b[$];
          } catch (Y) {
            throw new v(Y.message, Y.stack);
          }
        return null;
      }
      function L(b, N, $, Y, W, k) {
        let ie = V(N.plugins, b);
        if (ie !== null) return H(ie, b, N, $, Y, W);
        let se = O(b, N.printFunctionName, N.escapeRegex, N.escapeString);
        return se !== null ? se : x(b, N, $, Y, W, k);
      }
      var re = {
          comment: 'gray',
          content: 'reset',
          prop: 'yellow',
          tag: 'cyan',
          value: 'green',
        },
        G = Object.keys(re),
        oe = (b) => b,
        ae = oe({
          callToJSON: !0,
          compareKeys: void 0,
          escapeRegex: !1,
          escapeString: !0,
          highlight: !1,
          indent: 2,
          maxDepth: 1 / 0,
          maxWidth: 1 / 0,
          min: !1,
          plugins: [],
          printBasicPrototype: !0,
          printFunctionName: !0,
          theme: re,
        });
      e.DEFAULT_OPTIONS = ae;
      function ue(b) {
        if (
          (Object.keys(b).forEach((N) => {
            if (!Object.prototype.hasOwnProperty.call(ae, N))
              throw new Error(`pretty-format: Unknown option "${N}".`);
          }),
          b.min && b.indent !== void 0 && b.indent !== 0)
        )
          throw new Error(
            'pretty-format: Options "min" and "indent" cannot be used together.'
          );
        if (b.theme !== void 0) {
          if (b.theme === null)
            throw new Error('pretty-format: Option "theme" must not be null.');
          if (typeof b.theme != 'object')
            throw new Error(
              `pretty-format: Option "theme" must be of type "object" but instead received "${typeof b.theme}".`
            );
        }
      }
      var Z = (b) =>
          G.reduce((N, $) => {
            let Y = b.theme && b.theme[$] !== void 0 ? b.theme[$] : re[$],
              W = Y && t.default[Y];
            if (W && typeof W.close == 'string' && typeof W.open == 'string')
              N[$] = W;
            else
              throw new Error(
                `pretty-format: Option "theme" has a key "${$}" whose value "${Y}" is undefined in ansi-styles.`
              );
            return N;
          }, Object.create(null)),
        q = () =>
          G.reduce(
            (b, N) => ((b[N] = { close: '', open: '' }), b),
            Object.create(null)
          ),
        M = (b) =>
          (b == null ? void 0 : b.printFunctionName) ?? ae.printFunctionName,
        F = (b) => (b == null ? void 0 : b.escapeRegex) ?? ae.escapeRegex,
        z = (b) => (b == null ? void 0 : b.escapeString) ?? ae.escapeString,
        X = (b) => ({
          callToJSON: (b == null ? void 0 : b.callToJSON) ?? ae.callToJSON,
          colors: b != null && b.highlight ? Z(b) : q(),
          compareKeys:
            typeof (b == null ? void 0 : b.compareKeys) == 'function' ||
            (b == null ? void 0 : b.compareKeys) === null
              ? b.compareKeys
              : ae.compareKeys,
          escapeRegex: F(b),
          escapeString: z(b),
          indent:
            b != null && b.min
              ? ''
              : B((b == null ? void 0 : b.indent) ?? ae.indent),
          maxDepth: (b == null ? void 0 : b.maxDepth) ?? ae.maxDepth,
          maxWidth: (b == null ? void 0 : b.maxWidth) ?? ae.maxWidth,
          min: (b == null ? void 0 : b.min) ?? ae.min,
          plugins: (b == null ? void 0 : b.plugins) ?? ae.plugins,
          printBasicPrototype:
            (b == null ? void 0 : b.printBasicPrototype) ?? !0,
          printFunctionName: M(b),
          spacingInner:
            b != null && b.min
              ? ' '
              : `
`,
          spacingOuter:
            b != null && b.min
              ? ''
              : `
`,
        });
      function B(b) {
        return new Array(b + 1).join(' ');
      }
      function D(b, N) {
        if (N && (ue(N), N.plugins)) {
          let Y = V(N.plugins, b);
          if (Y !== null) return H(Y, b, X(N), '', 0, []);
        }
        let $ = O(b, M(N), F(N), z(N));
        return $ !== null ? $ : x(b, X(N), '', 0, []);
      }
      var U = {
        AsymmetricMatcher: o.default,
        DOMCollection: a.default,
        DOMElement: c.default,
        Immutable: n.default,
        ReactElement: i.default,
        ReactTestComponent: l.default,
      };
      e.plugins = U;
      var ee = D;
      e.default = ee;
    },
  }),
  Il = P({
    '../../node_modules/diff-sequences/build/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = p);
      var t = 'diff-sequences',
        r = 0,
        o = (m, y, g, h, v) => {
          let S = 0;
          for (; m < y && g < h && v(m, g); ) (m += 1), (g += 1), (S += 1);
          return S;
        },
        a = (m, y, g, h, v) => {
          let S = 0;
          for (; m <= y && g <= h && v(y, h); ) (y -= 1), (h -= 1), (S += 1);
          return S;
        },
        c = (m, y, g, h, v, S, E) => {
          let C = 0,
            A = -m,
            R = S[C],
            _ = R;
          S[C] += o(R + 1, y, h + R - A + 1, g, v);
          let O = m < E ? m : E;
          for (C += 1, A += 2; C <= O; C += 1, A += 2) {
            if (C !== m && _ < S[C]) R = S[C];
            else if (((R = _ + 1), y <= R)) return C - 1;
            (_ = S[C]), (S[C] = R + o(R + 1, y, h + R - A + 1, g, v));
          }
          return E;
        },
        n = (m, y, g, h, v, S, E) => {
          let C = 0,
            A = m,
            R = S[C],
            _ = R;
          S[C] -= a(y, R - 1, g, h + R - A - 1, v);
          let O = m < E ? m : E;
          for (C += 1, A -= 2; C <= O; C += 1, A -= 2) {
            if (C !== m && S[C] < _) R = S[C];
            else if (((R = _ - 1), R < y)) return C - 1;
            (_ = S[C]), (S[C] = R - a(y, R - 1, g, h + R - A - 1, v));
          }
          return E;
        },
        i = (m, y, g, h, v, S, E, C, A, R, _) => {
          let O = h - y,
            x = g - y,
            I = v - h - x,
            H = -I - (m - 1),
            V = -I + (m - 1),
            L = r,
            re = m < C ? m : C;
          for (let G = 0, oe = -m; G <= re; G += 1, oe += 2) {
            let ae = G === 0 || (G !== m && L < E[G]),
              ue = ae ? E[G] : L,
              Z = ae ? ue : ue + 1,
              q = O + Z - oe,
              M = o(Z + 1, g, q + 1, v, S),
              F = Z + M;
            if (((L = E[G]), (E[G] = F), H <= oe && oe <= V)) {
              let z = (m - 1 - (oe + I)) / 2;
              if (z <= R && A[z] - 1 <= F) {
                let X = O + ue - (ae ? oe + 1 : oe - 1),
                  B = a(y, ue, h, X, S),
                  D = ue - B,
                  U = X - B,
                  ee = D + 1,
                  b = U + 1;
                (_.nChangePreceding = m - 1),
                  m - 1 === ee + b - y - h
                    ? ((_.aEndPreceding = y), (_.bEndPreceding = h))
                    : ((_.aEndPreceding = ee), (_.bEndPreceding = b)),
                  (_.nCommonPreceding = B),
                  B !== 0 &&
                    ((_.aCommonPreceding = ee), (_.bCommonPreceding = b)),
                  (_.nCommonFollowing = M),
                  M !== 0 &&
                    ((_.aCommonFollowing = Z + 1),
                    (_.bCommonFollowing = q + 1));
                let N = F + 1,
                  $ = q + M + 1;
                return (
                  (_.nChangeFollowing = m - 1),
                  m - 1 === g + v - N - $
                    ? ((_.aStartFollowing = g), (_.bStartFollowing = v))
                    : ((_.aStartFollowing = N), (_.bStartFollowing = $)),
                  !0
                );
              }
            }
          }
          return !1;
        },
        l = (m, y, g, h, v, S, E, C, A, R, _) => {
          let O = v - g,
            x = g - y,
            I = v - h - x,
            H = I - m,
            V = I + m,
            L = r,
            re = m < R ? m : R;
          for (let G = 0, oe = m; G <= re; G += 1, oe -= 2) {
            let ae = G === 0 || (G !== m && A[G] < L),
              ue = ae ? A[G] : L,
              Z = ae ? ue : ue - 1,
              q = O + Z - oe,
              M = a(y, Z - 1, h, q - 1, S),
              F = Z - M;
            if (((L = A[G]), (A[G] = F), H <= oe && oe <= V)) {
              let z = (m + (oe - I)) / 2;
              if (z <= C && F - 1 <= E[z]) {
                let X = q - M;
                if (
                  ((_.nChangePreceding = m),
                  m === F + X - y - h
                    ? ((_.aEndPreceding = y), (_.bEndPreceding = h))
                    : ((_.aEndPreceding = F), (_.bEndPreceding = X)),
                  (_.nCommonPreceding = M),
                  M !== 0 &&
                    ((_.aCommonPreceding = F), (_.bCommonPreceding = X)),
                  (_.nChangeFollowing = m - 1),
                  m === 1)
                )
                  (_.nCommonFollowing = 0),
                    (_.aStartFollowing = g),
                    (_.bStartFollowing = v);
                else {
                  let B = O + ue - (ae ? oe - 1 : oe + 1),
                    D = o(ue, g, B, v, S);
                  (_.nCommonFollowing = D),
                    D !== 0 &&
                      ((_.aCommonFollowing = ue), (_.bCommonFollowing = B));
                  let U = ue + D,
                    ee = B + D;
                  m - 1 === g + v - U - ee
                    ? ((_.aStartFollowing = g), (_.bStartFollowing = v))
                    : ((_.aStartFollowing = U), (_.bStartFollowing = ee));
                }
                return !0;
              }
            }
          }
          return !1;
        },
        s = (m, y, g, h, v, S, E, C, A) => {
          let R = h - y,
            _ = v - g,
            O = g - y,
            x = v - h,
            I = x - O,
            H = O,
            V = O;
          if (((E[0] = y - 1), (C[0] = g), I % 2 === 0)) {
            let L = (m || I) / 2,
              re = (O + x) / 2;
            for (let G = 1; G <= re; G += 1)
              if (((H = c(G, g, v, R, S, E, H)), G < L))
                V = n(G, y, h, _, S, C, V);
              else if (l(G, y, g, h, v, S, E, H, C, V, A)) return;
          } else {
            let L = ((m || I) + 1) / 2,
              re = (O + x + 1) / 2,
              G = 1;
            for (H = c(G, g, v, R, S, E, H), G += 1; G <= re; G += 1)
              if (((V = n(G - 1, y, h, _, S, C, V)), G < L))
                H = c(G, g, v, R, S, E, H);
              else if (i(G, y, g, h, v, S, E, H, C, V, A)) return;
          }
          throw new Error(
            `${t}: no overlap aStart=${y} aEnd=${g} bStart=${h} bEnd=${v}`
          );
        },
        u = (m, y, g, h, v, S, E, C, A, R) => {
          if (v - h < g - y) {
            if (((S = !S), S && E.length === 1)) {
              let { foundSubsequence: z, isCommon: X } = E[0];
              E[1] = {
                foundSubsequence: (B, D, U) => {
                  z(B, U, D);
                },
                isCommon: (B, D) => X(D, B),
              };
            }
            let M = y,
              F = g;
            (y = h), (g = v), (h = M), (v = F);
          }
          let { foundSubsequence: _, isCommon: O } = E[S ? 1 : 0];
          s(m, y, g, h, v, O, C, A, R);
          let {
            nChangePreceding: x,
            aEndPreceding: I,
            bEndPreceding: H,
            nCommonPreceding: V,
            aCommonPreceding: L,
            bCommonPreceding: re,
            nCommonFollowing: G,
            aCommonFollowing: oe,
            bCommonFollowing: ae,
            nChangeFollowing: ue,
            aStartFollowing: Z,
            bStartFollowing: q,
          } = R;
          y < I && h < H && u(x, y, I, h, H, S, E, C, A, R),
            V !== 0 && _(V, L, re),
            G !== 0 && _(G, oe, ae),
            Z < g && q < v && u(ue, Z, g, q, v, S, E, C, A, R);
        },
        f = (m, y) => {
          if (typeof y != 'number')
            throw new TypeError(
              `${t}: ${m} typeof ${typeof y} is not a number`
            );
          if (!Number.isSafeInteger(y))
            throw new RangeError(`${t}: ${m} value ${y} is not a safe integer`);
          if (y < 0)
            throw new RangeError(`${t}: ${m} value ${y} is a negative integer`);
        },
        d = (m, y) => {
          let g = typeof y;
          if (g !== 'function')
            throw new TypeError(`${t}: ${m} typeof ${g} is not a function`);
        };
      function p(m, y, g, h) {
        f('aLength', m),
          f('bLength', y),
          d('isCommon', g),
          d('foundSubsequence', h);
        let v = o(0, m, 0, y, g);
        if ((v !== 0 && h(v, 0, 0), m !== v || y !== v)) {
          let S = v,
            E = v,
            C = a(S, m - 1, E, y - 1, g),
            A = m - C,
            R = y - C,
            _ = v + C;
          m !== _ &&
            y !== _ &&
            u(
              0,
              S,
              A,
              E,
              R,
              !1,
              [{ foundSubsequence: h, isCommon: g }],
              [r],
              [r],
              {
                aCommonFollowing: r,
                aCommonPreceding: r,
                aEndPreceding: r,
                aStartFollowing: r,
                bCommonFollowing: r,
                bCommonPreceding: r,
                bEndPreceding: r,
                bStartFollowing: r,
                nChangeFollowing: r,
                nChangePreceding: r,
                nCommonFollowing: r,
                nCommonPreceding: r,
              }
            ),
            C !== 0 && h(C, A, R);
        }
      }
    },
  }),
  Hp = P({
    '../../node_modules/min-indent/index.js'(e, t) {
      t.exports = (r) => {
        let o = r.match(/^[ \t]*(?=\S)/gm);
        return o ? o.reduce((a, c) => Math.min(a, c.length), 1 / 0) : 0;
      };
    },
  }),
  zp = P({
    '../../node_modules/strip-indent/index.js'(e, t) {
      var r = Hp();
      t.exports = (o) => {
        let a = r(o);
        if (a === 0) return o;
        let c = new RegExp(`^[ \\t]{${a}}`, 'gm');
        return o.replace(c, '');
      };
    },
  }),
  Vp = P({
    '../../node_modules/indent-string/index.js'(e, t) {
      t.exports = (r, o = 1, a) => {
        if (
          ((a = { indent: ' ', includeEmptyLines: !1, ...a }),
          typeof r != 'string')
        )
          throw new TypeError(
            `Expected \`input\` to be a \`string\`, got \`${typeof r}\``
          );
        if (typeof o != 'number')
          throw new TypeError(
            `Expected \`count\` to be a \`number\`, got \`${typeof o}\``
          );
        if (typeof a.indent != 'string')
          throw new TypeError(
            `Expected \`options.indent\` to be a \`string\`, got \`${typeof a.indent}\``
          );
        if (o === 0) return r;
        let c = a.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return r.replace(c, a.indent.repeat(o));
      };
    },
  }),
  Nl = P({
    '../../node_modules/redent/index.js'(e, t) {
      var r = zp(),
        o = Vp();
      t.exports = (a, c = 0, n) => o(r(a), c, n);
    },
  }),
  Wp = P({
    '../../node_modules/lodash/_listCacheClear.js'(e, t) {
      function r() {
        (this.__data__ = []), (this.size = 0);
      }
      t.exports = r;
    },
  }),
  Bl = P({
    '../../node_modules/lodash/eq.js'(e, t) {
      function r(o, a) {
        return o === a || (o !== o && a !== a);
      }
      t.exports = r;
    },
  }),
  En = P({
    '../../node_modules/lodash/_assocIndexOf.js'(e, t) {
      var r = Bl();
      function o(a, c) {
        for (var n = a.length; n--; ) if (r(a[n][0], c)) return n;
        return -1;
      }
      t.exports = o;
    },
  }),
  Gp = P({
    '../../node_modules/lodash/_listCacheDelete.js'(e, t) {
      var r = En(),
        o = Array.prototype,
        a = o.splice;
      function c(n) {
        var i = this.__data__,
          l = r(i, n);
        if (l < 0) return !1;
        var s = i.length - 1;
        return l == s ? i.pop() : a.call(i, l, 1), --this.size, !0;
      }
      t.exports = c;
    },
  }),
  Kp = P({
    '../../node_modules/lodash/_listCacheGet.js'(e, t) {
      var r = En();
      function o(a) {
        var c = this.__data__,
          n = r(c, a);
        return n < 0 ? void 0 : c[n][1];
      }
      t.exports = o;
    },
  }),
  Yp = P({
    '../../node_modules/lodash/_listCacheHas.js'(e, t) {
      var r = En();
      function o(a) {
        return r(this.__data__, a) > -1;
      }
      t.exports = o;
    },
  }),
  Jp = P({
    '../../node_modules/lodash/_listCacheSet.js'(e, t) {
      var r = En();
      function o(a, c) {
        var n = this.__data__,
          i = r(n, a);
        return i < 0 ? (++this.size, n.push([a, c])) : (n[i][1] = c), this;
      }
      t.exports = o;
    },
  }),
  wn = P({
    '../../node_modules/lodash/_ListCache.js'(e, t) {
      var r = Wp(),
        o = Gp(),
        a = Kp(),
        c = Yp(),
        n = Jp();
      function i(l) {
        var s = -1,
          u = l == null ? 0 : l.length;
        for (this.clear(); ++s < u; ) {
          var f = l[s];
          this.set(f[0], f[1]);
        }
      }
      (i.prototype.clear = r),
        (i.prototype.delete = o),
        (i.prototype.get = a),
        (i.prototype.has = c),
        (i.prototype.set = n),
        (t.exports = i);
    },
  }),
  Xp = P({
    '../../node_modules/lodash/_stackClear.js'(e, t) {
      var r = wn();
      function o() {
        (this.__data__ = new r()), (this.size = 0);
      }
      t.exports = o;
    },
  }),
  Qp = P({
    '../../node_modules/lodash/_stackDelete.js'(e, t) {
      function r(o) {
        var a = this.__data__,
          c = a.delete(o);
        return (this.size = a.size), c;
      }
      t.exports = r;
    },
  }),
  Zp = P({
    '../../node_modules/lodash/_stackGet.js'(e, t) {
      function r(o) {
        return this.__data__.get(o);
      }
      t.exports = r;
    },
  }),
  em = P({
    '../../node_modules/lodash/_stackHas.js'(e, t) {
      function r(o) {
        return this.__data__.has(o);
      }
      t.exports = r;
    },
  }),
  $l = P({
    '../../node_modules/lodash/_freeGlobal.js'(e, t) {
      var r =
        typeof global == 'object' &&
        global &&
        global.Object === Object &&
        global;
      t.exports = r;
    },
  }),
  vt = P({
    '../../node_modules/lodash/_root.js'(e, t) {
      var r = $l(),
        o = typeof self == 'object' && self && self.Object === Object && self,
        a = r || o || Function('return this')();
      t.exports = a;
    },
  }),
  Wo = P({
    '../../node_modules/lodash/_Symbol.js'(e, t) {
      var r = vt(),
        o = r.Symbol;
      t.exports = o;
    },
  }),
  tm = P({
    '../../node_modules/lodash/_getRawTag.js'(e, t) {
      var r = Wo(),
        o = Object.prototype,
        a = o.hasOwnProperty,
        c = o.toString,
        n = r ? r.toStringTag : void 0;
      function i(l) {
        var s = a.call(l, n),
          u = l[n];
        try {
          l[n] = void 0;
          var f = !0;
        } catch {}
        var d = c.call(l);
        return f && (s ? (l[n] = u) : delete l[n]), d;
      }
      t.exports = i;
    },
  }),
  rm = P({
    '../../node_modules/lodash/_objectToString.js'(e, t) {
      var r = Object.prototype,
        o = r.toString;
      function a(c) {
        return o.call(c);
      }
      t.exports = a;
    },
  }),
  Sn = P({
    '../../node_modules/lodash/_baseGetTag.js'(e, t) {
      var r = Wo(),
        o = tm(),
        a = rm(),
        c = '[object Null]',
        n = '[object Undefined]',
        i = r ? r.toStringTag : void 0;
      function l(s) {
        return s == null
          ? s === void 0
            ? n
            : c
          : i && i in Object(s)
            ? o(s)
            : a(s);
      }
      t.exports = l;
    },
  }),
  Dl = P({
    '../../node_modules/lodash/isObject.js'(e, t) {
      function r(o) {
        var a = typeof o;
        return o != null && (a == 'object' || a == 'function');
      }
      t.exports = r;
    },
  }),
  kl = P({
    '../../node_modules/lodash/isFunction.js'(e, t) {
      var r = Sn(),
        o = Dl(),
        a = '[object AsyncFunction]',
        c = '[object Function]',
        n = '[object GeneratorFunction]',
        i = '[object Proxy]';
      function l(s) {
        if (!o(s)) return !1;
        var u = r(s);
        return u == c || u == n || u == a || u == i;
      }
      t.exports = l;
    },
  }),
  nm = P({
    '../../node_modules/lodash/_coreJsData.js'(e, t) {
      var r = vt(),
        o = r['__core-js_shared__'];
      t.exports = o;
    },
  }),
  om = P({
    '../../node_modules/lodash/_isMasked.js'(e, t) {
      var r = nm(),
        o = (function () {
          var c = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
          return c ? 'Symbol(src)_1.' + c : '';
        })();
      function a(c) {
        return !!o && o in c;
      }
      t.exports = a;
    },
  }),
  Ll = P({
    '../../node_modules/lodash/_toSource.js'(e, t) {
      var r = Function.prototype,
        o = r.toString;
      function a(c) {
        if (c != null) {
          try {
            return o.call(c);
          } catch {}
          try {
            return c + '';
          } catch {}
        }
        return '';
      }
      t.exports = a;
    },
  }),
  am = P({
    '../../node_modules/lodash/_baseIsNative.js'(e, t) {
      var r = kl(),
        o = om(),
        a = Dl(),
        c = Ll(),
        n = /[\\^$.*+?()[\]{}|]/g,
        i = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        s = Object.prototype,
        u = l.toString,
        f = s.hasOwnProperty,
        d = RegExp(
          '^' +
            u
              .call(f)
              .replace(n, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        );
      function p(m) {
        if (!a(m) || o(m)) return !1;
        var y = r(m) ? d : i;
        return y.test(c(m));
      }
      t.exports = p;
    },
  }),
  im = P({
    '../../node_modules/lodash/_getValue.js'(e, t) {
      function r(o, a) {
        return o == null ? void 0 : o[a];
      }
      t.exports = r;
    },
  }),
  pr = P({
    '../../node_modules/lodash/_getNative.js'(e, t) {
      var r = am(),
        o = im();
      function a(c, n) {
        var i = o(c, n);
        return r(i) ? i : void 0;
      }
      t.exports = a;
    },
  }),
  Go = P({
    '../../node_modules/lodash/_Map.js'(e, t) {
      var r = pr(),
        o = vt(),
        a = r(o, 'Map');
      t.exports = a;
    },
  }),
  Cn = P({
    '../../node_modules/lodash/_nativeCreate.js'(e, t) {
      var r = pr(),
        o = r(Object, 'create');
      t.exports = o;
    },
  }),
  lm = P({
    '../../node_modules/lodash/_hashClear.js'(e, t) {
      var r = Cn();
      function o() {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      }
      t.exports = o;
    },
  }),
  sm = P({
    '../../node_modules/lodash/_hashDelete.js'(e, t) {
      function r(o) {
        var a = this.has(o) && delete this.__data__[o];
        return (this.size -= a ? 1 : 0), a;
      }
      t.exports = r;
    },
  }),
  um = P({
    '../../node_modules/lodash/_hashGet.js'(e, t) {
      var r = Cn(),
        o = '__lodash_hash_undefined__',
        a = Object.prototype,
        c = a.hasOwnProperty;
      function n(i) {
        var l = this.__data__;
        if (r) {
          var s = l[i];
          return s === o ? void 0 : s;
        }
        return c.call(l, i) ? l[i] : void 0;
      }
      t.exports = n;
    },
  }),
  cm = P({
    '../../node_modules/lodash/_hashHas.js'(e, t) {
      var r = Cn(),
        o = Object.prototype,
        a = o.hasOwnProperty;
      function c(n) {
        var i = this.__data__;
        return r ? i[n] !== void 0 : a.call(i, n);
      }
      t.exports = c;
    },
  }),
  dm = P({
    '../../node_modules/lodash/_hashSet.js'(e, t) {
      var r = Cn(),
        o = '__lodash_hash_undefined__';
      function a(c, n) {
        var i = this.__data__;
        return (
          (this.size += this.has(c) ? 0 : 1),
          (i[c] = r && n === void 0 ? o : n),
          this
        );
      }
      t.exports = a;
    },
  }),
  fm = P({
    '../../node_modules/lodash/_Hash.js'(e, t) {
      var r = lm(),
        o = sm(),
        a = um(),
        c = cm(),
        n = dm();
      function i(l) {
        var s = -1,
          u = l == null ? 0 : l.length;
        for (this.clear(); ++s < u; ) {
          var f = l[s];
          this.set(f[0], f[1]);
        }
      }
      (i.prototype.clear = r),
        (i.prototype.delete = o),
        (i.prototype.get = a),
        (i.prototype.has = c),
        (i.prototype.set = n),
        (t.exports = i);
    },
  }),
  pm = P({
    '../../node_modules/lodash/_mapCacheClear.js'(e, t) {
      var r = fm(),
        o = wn(),
        a = Go();
      function c() {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (a || o)(),
            string: new r(),
          });
      }
      t.exports = c;
    },
  }),
  mm = P({
    '../../node_modules/lodash/_isKeyable.js'(e, t) {
      function r(o) {
        var a = typeof o;
        return a == 'string' || a == 'number' || a == 'symbol' || a == 'boolean'
          ? o !== '__proto__'
          : o === null;
      }
      t.exports = r;
    },
  }),
  On = P({
    '../../node_modules/lodash/_getMapData.js'(e, t) {
      var r = mm();
      function o(a, c) {
        var n = a.__data__;
        return r(c) ? n[typeof c == 'string' ? 'string' : 'hash'] : n.map;
      }
      t.exports = o;
    },
  }),
  ym = P({
    '../../node_modules/lodash/_mapCacheDelete.js'(e, t) {
      var r = On();
      function o(a) {
        var c = r(this, a).delete(a);
        return (this.size -= c ? 1 : 0), c;
      }
      t.exports = o;
    },
  }),
  hm = P({
    '../../node_modules/lodash/_mapCacheGet.js'(e, t) {
      var r = On();
      function o(a) {
        return r(this, a).get(a);
      }
      t.exports = o;
    },
  }),
  bm = P({
    '../../node_modules/lodash/_mapCacheHas.js'(e, t) {
      var r = On();
      function o(a) {
        return r(this, a).has(a);
      }
      t.exports = o;
    },
  }),
  gm = P({
    '../../node_modules/lodash/_mapCacheSet.js'(e, t) {
      var r = On();
      function o(a, c) {
        var n = r(this, a),
          i = n.size;
        return n.set(a, c), (this.size += n.size == i ? 0 : 1), this;
      }
      t.exports = o;
    },
  }),
  Fl = P({
    '../../node_modules/lodash/_MapCache.js'(e, t) {
      var r = pm(),
        o = ym(),
        a = hm(),
        c = bm(),
        n = gm();
      function i(l) {
        var s = -1,
          u = l == null ? 0 : l.length;
        for (this.clear(); ++s < u; ) {
          var f = l[s];
          this.set(f[0], f[1]);
        }
      }
      (i.prototype.clear = r),
        (i.prototype.delete = o),
        (i.prototype.get = a),
        (i.prototype.has = c),
        (i.prototype.set = n),
        (t.exports = i);
    },
  }),
  vm = P({
    '../../node_modules/lodash/_stackSet.js'(e, t) {
      var r = wn(),
        o = Go(),
        a = Fl(),
        c = 200;
      function n(i, l) {
        var s = this.__data__;
        if (s instanceof r) {
          var u = s.__data__;
          if (!o || u.length < c - 1)
            return u.push([i, l]), (this.size = ++s.size), this;
          s = this.__data__ = new a(u);
        }
        return s.set(i, l), (this.size = s.size), this;
      }
      t.exports = n;
    },
  }),
  _m = P({
    '../../node_modules/lodash/_Stack.js'(e, t) {
      var r = wn(),
        o = Xp(),
        a = Qp(),
        c = Zp(),
        n = em(),
        i = vm();
      function l(s) {
        var u = (this.__data__ = new r(s));
        this.size = u.size;
      }
      (l.prototype.clear = o),
        (l.prototype.delete = a),
        (l.prototype.get = c),
        (l.prototype.has = n),
        (l.prototype.set = i),
        (t.exports = l);
    },
  }),
  Em = P({
    '../../node_modules/lodash/_setCacheAdd.js'(e, t) {
      var r = '__lodash_hash_undefined__';
      function o(a) {
        return this.__data__.set(a, r), this;
      }
      t.exports = o;
    },
  }),
  wm = P({
    '../../node_modules/lodash/_setCacheHas.js'(e, t) {
      function r(o) {
        return this.__data__.has(o);
      }
      t.exports = r;
    },
  }),
  Ul = P({
    '../../node_modules/lodash/_SetCache.js'(e, t) {
      var r = Fl(),
        o = Em(),
        a = wm();
      function c(n) {
        var i = -1,
          l = n == null ? 0 : n.length;
        for (this.__data__ = new r(); ++i < l; ) this.add(n[i]);
      }
      (c.prototype.add = c.prototype.push = o),
        (c.prototype.has = a),
        (t.exports = c);
    },
  }),
  Sm = P({
    '../../node_modules/lodash/_arraySome.js'(e, t) {
      function r(o, a) {
        for (var c = -1, n = o == null ? 0 : o.length; ++c < n; )
          if (a(o[c], c, o)) return !0;
        return !1;
      }
      t.exports = r;
    },
  }),
  Hl = P({
    '../../node_modules/lodash/_cacheHas.js'(e, t) {
      function r(o, a) {
        return o.has(a);
      }
      t.exports = r;
    },
  }),
  zl = P({
    '../../node_modules/lodash/_equalArrays.js'(e, t) {
      var r = Ul(),
        o = Sm(),
        a = Hl(),
        c = 1,
        n = 2;
      function i(l, s, u, f, d, p) {
        var m = u & c,
          y = l.length,
          g = s.length;
        if (y != g && !(m && g > y)) return !1;
        var h = p.get(l),
          v = p.get(s);
        if (h && v) return h == s && v == l;
        var S = -1,
          E = !0,
          C = u & n ? new r() : void 0;
        for (p.set(l, s), p.set(s, l); ++S < y; ) {
          var A = l[S],
            R = s[S];
          if (f) var _ = m ? f(R, A, S, s, l, p) : f(A, R, S, l, s, p);
          if (_ !== void 0) {
            if (_) continue;
            E = !1;
            break;
          }
          if (C) {
            if (
              !o(s, function (O, x) {
                if (!a(C, x) && (A === O || d(A, O, u, f, p))) return C.push(x);
              })
            ) {
              E = !1;
              break;
            }
          } else if (!(A === R || d(A, R, u, f, p))) {
            E = !1;
            break;
          }
        }
        return p.delete(l), p.delete(s), E;
      }
      t.exports = i;
    },
  }),
  Cm = P({
    '../../node_modules/lodash/_Uint8Array.js'(e, t) {
      var r = vt(),
        o = r.Uint8Array;
      t.exports = o;
    },
  }),
  Om = P({
    '../../node_modules/lodash/_mapToArray.js'(e, t) {
      function r(o) {
        var a = -1,
          c = Array(o.size);
        return (
          o.forEach(function (n, i) {
            c[++a] = [i, n];
          }),
          c
        );
      }
      t.exports = r;
    },
  }),
  Ko = P({
    '../../node_modules/lodash/_setToArray.js'(e, t) {
      function r(o) {
        var a = -1,
          c = Array(o.size);
        return (
          o.forEach(function (n) {
            c[++a] = n;
          }),
          c
        );
      }
      t.exports = r;
    },
  }),
  Pm = P({
    '../../node_modules/lodash/_equalByTag.js'(e, t) {
      var r = Wo(),
        o = Cm(),
        a = Bl(),
        c = zl(),
        n = Om(),
        i = Ko(),
        l = 1,
        s = 2,
        u = '[object Boolean]',
        f = '[object Date]',
        d = '[object Error]',
        p = '[object Map]',
        m = '[object Number]',
        y = '[object RegExp]',
        g = '[object Set]',
        h = '[object String]',
        v = '[object Symbol]',
        S = '[object ArrayBuffer]',
        E = '[object DataView]',
        C = r ? r.prototype : void 0,
        A = C ? C.valueOf : void 0;
      function R(_, O, x, I, H, V, L) {
        switch (x) {
          case E:
            if (_.byteLength != O.byteLength || _.byteOffset != O.byteOffset)
              return !1;
            (_ = _.buffer), (O = O.buffer);
          case S:
            return !(_.byteLength != O.byteLength || !V(new o(_), new o(O)));
          case u:
          case f:
          case m:
            return a(+_, +O);
          case d:
            return _.name == O.name && _.message == O.message;
          case y:
          case h:
            return _ == O + '';
          case p:
            var re = n;
          case g:
            var G = I & l;
            if ((re || (re = i), _.size != O.size && !G)) return !1;
            var oe = L.get(_);
            if (oe) return oe == O;
            (I |= s), L.set(_, O);
            var ae = c(re(_), re(O), I, H, V, L);
            return L.delete(_), ae;
          case v:
            if (A) return A.call(_) == A.call(O);
        }
        return !1;
      }
      t.exports = R;
    },
  }),
  Rm = P({
    '../../node_modules/lodash/_arrayPush.js'(e, t) {
      function r(o, a) {
        for (var c = -1, n = a.length, i = o.length; ++c < n; ) o[i + c] = a[c];
        return o;
      }
      t.exports = r;
    },
  }),
  Yo = P({
    '../../node_modules/lodash/isArray.js'(e, t) {
      var r = Array.isArray;
      t.exports = r;
    },
  }),
  Tm = P({
    '../../node_modules/lodash/_baseGetAllKeys.js'(e, t) {
      var r = Rm(),
        o = Yo();
      function a(c, n, i) {
        var l = n(c);
        return o(c) ? l : r(l, i(c));
      }
      t.exports = a;
    },
  }),
  Am = P({
    '../../node_modules/lodash/_arrayFilter.js'(e, t) {
      function r(o, a) {
        for (
          var c = -1, n = o == null ? 0 : o.length, i = 0, l = [];
          ++c < n;

        ) {
          var s = o[c];
          a(s, c, o) && (l[i++] = s);
        }
        return l;
      }
      t.exports = r;
    },
  }),
  qm = P({
    '../../node_modules/lodash/stubArray.js'(e, t) {
      function r() {
        return [];
      }
      t.exports = r;
    },
  }),
  xm = P({
    '../../node_modules/lodash/_getSymbols.js'(e, t) {
      var r = Am(),
        o = qm(),
        a = Object.prototype,
        c = a.propertyIsEnumerable,
        n = Object.getOwnPropertySymbols,
        i = n
          ? function (l) {
              return l == null
                ? []
                : ((l = Object(l)),
                  r(n(l), function (s) {
                    return c.call(l, s);
                  }));
            }
          : o;
      t.exports = i;
    },
  }),
  Mm = P({
    '../../node_modules/lodash/_baseTimes.js'(e, t) {
      function r(o, a) {
        for (var c = -1, n = Array(o); ++c < o; ) n[c] = a(c);
        return n;
      }
      t.exports = r;
    },
  }),
  Pn = P({
    '../../node_modules/lodash/isObjectLike.js'(e, t) {
      function r(o) {
        return o != null && typeof o == 'object';
      }
      t.exports = r;
    },
  }),
  jm = P({
    '../../node_modules/lodash/_baseIsArguments.js'(e, t) {
      var r = Sn(),
        o = Pn(),
        a = '[object Arguments]';
      function c(n) {
        return o(n) && r(n) == a;
      }
      t.exports = c;
    },
  }),
  Im = P({
    '../../node_modules/lodash/isArguments.js'(e, t) {
      var r = jm(),
        o = Pn(),
        a = Object.prototype,
        c = a.hasOwnProperty,
        n = a.propertyIsEnumerable,
        i = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (l) {
              return o(l) && c.call(l, 'callee') && !n.call(l, 'callee');
            };
      t.exports = i;
    },
  }),
  Nm = P({
    '../../node_modules/lodash/stubFalse.js'(e, t) {
      function r() {
        return !1;
      }
      t.exports = r;
    },
  }),
  Vl = P({
    '../../node_modules/lodash/isBuffer.js'(e, t) {
      var r = vt(),
        o = Nm(),
        a = typeof e == 'object' && e && !e.nodeType && e,
        c = a && typeof t == 'object' && t && !t.nodeType && t,
        n = c && c.exports === a,
        i = n ? r.Buffer : void 0,
        l = i ? i.isBuffer : void 0,
        s = l || o;
      t.exports = s;
    },
  }),
  Bm = P({
    '../../node_modules/lodash/_isIndex.js'(e, t) {
      var r = 9007199254740991,
        o = /^(?:0|[1-9]\d*)$/;
      function a(c, n) {
        var i = typeof c;
        return (
          (n = n ?? r),
          !!n &&
            (i == 'number' || (i != 'symbol' && o.test(c))) &&
            c > -1 &&
            c % 1 == 0 &&
            c < n
        );
      }
      t.exports = a;
    },
  }),
  Wl = P({
    '../../node_modules/lodash/isLength.js'(e, t) {
      var r = 9007199254740991;
      function o(a) {
        return typeof a == 'number' && a > -1 && a % 1 == 0 && a <= r;
      }
      t.exports = o;
    },
  }),
  $m = P({
    '../../node_modules/lodash/_baseIsTypedArray.js'(e, t) {
      var r = Sn(),
        o = Wl(),
        a = Pn(),
        c = '[object Arguments]',
        n = '[object Array]',
        i = '[object Boolean]',
        l = '[object Date]',
        s = '[object Error]',
        u = '[object Function]',
        f = '[object Map]',
        d = '[object Number]',
        p = '[object Object]',
        m = '[object RegExp]',
        y = '[object Set]',
        g = '[object String]',
        h = '[object WeakMap]',
        v = '[object ArrayBuffer]',
        S = '[object DataView]',
        E = '[object Float32Array]',
        C = '[object Float64Array]',
        A = '[object Int8Array]',
        R = '[object Int16Array]',
        _ = '[object Int32Array]',
        O = '[object Uint8Array]',
        x = '[object Uint8ClampedArray]',
        I = '[object Uint16Array]',
        H = '[object Uint32Array]',
        V = {};
      (V[E] = V[C] = V[A] = V[R] = V[_] = V[O] = V[x] = V[I] = V[H] = !0),
        (V[c] =
          V[n] =
          V[v] =
          V[i] =
          V[S] =
          V[l] =
          V[s] =
          V[u] =
          V[f] =
          V[d] =
          V[p] =
          V[m] =
          V[y] =
          V[g] =
          V[h] =
            !1);
      function L(re) {
        return a(re) && o(re.length) && !!V[r(re)];
      }
      t.exports = L;
    },
  }),
  Dm = P({
    '../../node_modules/lodash/_baseUnary.js'(e, t) {
      function r(o) {
        return function (a) {
          return o(a);
        };
      }
      t.exports = r;
    },
  }),
  km = P({
    '../../node_modules/lodash/_nodeUtil.js'(e, t) {
      var r = $l(),
        o = typeof e == 'object' && e && !e.nodeType && e,
        a = o && typeof t == 'object' && t && !t.nodeType && t,
        c = a && a.exports === o,
        n = c && r.process,
        i = (function () {
          try {
            var l = a && a.require && a.require('util').types;
            return l || (n && n.binding && n.binding('util'));
          } catch {}
        })();
      t.exports = i;
    },
  }),
  Gl = P({
    '../../node_modules/lodash/isTypedArray.js'(e, t) {
      var r = $m(),
        o = Dm(),
        a = km(),
        c = a && a.isTypedArray,
        n = c ? o(c) : r;
      t.exports = n;
    },
  }),
  Lm = P({
    '../../node_modules/lodash/_arrayLikeKeys.js'(e, t) {
      var r = Mm(),
        o = Im(),
        a = Yo(),
        c = Vl(),
        n = Bm(),
        i = Gl(),
        l = Object.prototype,
        s = l.hasOwnProperty;
      function u(f, d) {
        var p = a(f),
          m = !p && o(f),
          y = !p && !m && c(f),
          g = !p && !m && !y && i(f),
          h = p || m || y || g,
          v = h ? r(f.length, String) : [],
          S = v.length;
        for (var E in f)
          (d || s.call(f, E)) &&
            !(
              h &&
              (E == 'length' ||
                (y && (E == 'offset' || E == 'parent')) ||
                (g &&
                  (E == 'buffer' || E == 'byteLength' || E == 'byteOffset')) ||
                n(E, S))
            ) &&
            v.push(E);
        return v;
      }
      t.exports = u;
    },
  }),
  Fm = P({
    '../../node_modules/lodash/_isPrototype.js'(e, t) {
      var r = Object.prototype;
      function o(a) {
        var c = a && a.constructor,
          n = (typeof c == 'function' && c.prototype) || r;
        return a === n;
      }
      t.exports = o;
    },
  }),
  Um = P({
    '../../node_modules/lodash/_overArg.js'(e, t) {
      function r(o, a) {
        return function (c) {
          return o(a(c));
        };
      }
      t.exports = r;
    },
  }),
  Hm = P({
    '../../node_modules/lodash/_nativeKeys.js'(e, t) {
      var r = Um(),
        o = r(Object.keys, Object);
      t.exports = o;
    },
  }),
  zm = P({
    '../../node_modules/lodash/_baseKeys.js'(e, t) {
      var r = Fm(),
        o = Hm(),
        a = Object.prototype,
        c = a.hasOwnProperty;
      function n(i) {
        if (!r(i)) return o(i);
        var l = [];
        for (var s in Object(i))
          c.call(i, s) && s != 'constructor' && l.push(s);
        return l;
      }
      t.exports = n;
    },
  }),
  Vm = P({
    '../../node_modules/lodash/isArrayLike.js'(e, t) {
      var r = kl(),
        o = Wl();
      function a(c) {
        return c != null && o(c.length) && !r(c);
      }
      t.exports = a;
    },
  }),
  Wm = P({
    '../../node_modules/lodash/keys.js'(e, t) {
      var r = Lm(),
        o = zm(),
        a = Vm();
      function c(n) {
        return a(n) ? r(n) : o(n);
      }
      t.exports = c;
    },
  }),
  Gm = P({
    '../../node_modules/lodash/_getAllKeys.js'(e, t) {
      var r = Tm(),
        o = xm(),
        a = Wm();
      function c(n) {
        return r(n, a, o);
      }
      t.exports = c;
    },
  }),
  Km = P({
    '../../node_modules/lodash/_equalObjects.js'(e, t) {
      var r = Gm(),
        o = 1,
        a = Object.prototype,
        c = a.hasOwnProperty;
      function n(i, l, s, u, f, d) {
        var p = s & o,
          m = r(i),
          y = m.length,
          g = r(l),
          h = g.length;
        if (y != h && !p) return !1;
        for (var v = y; v--; ) {
          var S = m[v];
          if (!(p ? S in l : c.call(l, S))) return !1;
        }
        var E = d.get(i),
          C = d.get(l);
        if (E && C) return E == l && C == i;
        var A = !0;
        d.set(i, l), d.set(l, i);
        for (var R = p; ++v < y; ) {
          S = m[v];
          var _ = i[S],
            O = l[S];
          if (u) var x = p ? u(O, _, S, l, i, d) : u(_, O, S, i, l, d);
          if (!(x === void 0 ? _ === O || f(_, O, s, u, d) : x)) {
            A = !1;
            break;
          }
          R || (R = S == 'constructor');
        }
        if (A && !R) {
          var I = i.constructor,
            H = l.constructor;
          I != H &&
            'constructor' in i &&
            'constructor' in l &&
            !(
              typeof I == 'function' &&
              I instanceof I &&
              typeof H == 'function' &&
              H instanceof H
            ) &&
            (A = !1);
        }
        return d.delete(i), d.delete(l), A;
      }
      t.exports = n;
    },
  }),
  Ym = P({
    '../../node_modules/lodash/_DataView.js'(e, t) {
      var r = pr(),
        o = vt(),
        a = r(o, 'DataView');
      t.exports = a;
    },
  }),
  Jm = P({
    '../../node_modules/lodash/_Promise.js'(e, t) {
      var r = pr(),
        o = vt(),
        a = r(o, 'Promise');
      t.exports = a;
    },
  }),
  Kl = P({
    '../../node_modules/lodash/_Set.js'(e, t) {
      var r = pr(),
        o = vt(),
        a = r(o, 'Set');
      t.exports = a;
    },
  }),
  Xm = P({
    '../../node_modules/lodash/_WeakMap.js'(e, t) {
      var r = pr(),
        o = vt(),
        a = r(o, 'WeakMap');
      t.exports = a;
    },
  }),
  Qm = P({
    '../../node_modules/lodash/_getTag.js'(e, t) {
      var r = Ym(),
        o = Go(),
        a = Jm(),
        c = Kl(),
        n = Xm(),
        i = Sn(),
        l = Ll(),
        s = '[object Map]',
        u = '[object Object]',
        f = '[object Promise]',
        d = '[object Set]',
        p = '[object WeakMap]',
        m = '[object DataView]',
        y = l(r),
        g = l(o),
        h = l(a),
        v = l(c),
        S = l(n),
        E = i;
      ((r && E(new r(new ArrayBuffer(1))) != m) ||
        (o && E(new o()) != s) ||
        (a && E(a.resolve()) != f) ||
        (c && E(new c()) != d) ||
        (n && E(new n()) != p)) &&
        (E = function (C) {
          var A = i(C),
            R = A == u ? C.constructor : void 0,
            _ = R ? l(R) : '';
          if (_)
            switch (_) {
              case y:
                return m;
              case g:
                return s;
              case h:
                return f;
              case v:
                return d;
              case S:
                return p;
            }
          return A;
        }),
        (t.exports = E);
    },
  }),
  Zm = P({
    '../../node_modules/lodash/_baseIsEqualDeep.js'(e, t) {
      var r = _m(),
        o = zl(),
        a = Pm(),
        c = Km(),
        n = Qm(),
        i = Yo(),
        l = Vl(),
        s = Gl(),
        u = 1,
        f = '[object Arguments]',
        d = '[object Array]',
        p = '[object Object]',
        m = Object.prototype,
        y = m.hasOwnProperty;
      function g(h, v, S, E, C, A) {
        var R = i(h),
          _ = i(v),
          O = R ? d : n(h),
          x = _ ? d : n(v);
        (O = O == f ? p : O), (x = x == f ? p : x);
        var I = O == p,
          H = x == p,
          V = O == x;
        if (V && l(h)) {
          if (!l(v)) return !1;
          (R = !0), (I = !1);
        }
        if (V && !I)
          return (
            A || (A = new r()),
            R || s(h) ? o(h, v, S, E, C, A) : a(h, v, O, S, E, C, A)
          );
        if (!(S & u)) {
          var L = I && y.call(h, '__wrapped__'),
            re = H && y.call(v, '__wrapped__');
          if (L || re) {
            var G = L ? h.value() : h,
              oe = re ? v.value() : v;
            return A || (A = new r()), C(G, oe, S, E, A);
          }
        }
        return V ? (A || (A = new r()), c(h, v, S, E, C, A)) : !1;
      }
      t.exports = g;
    },
  }),
  Yl = P({
    '../../node_modules/lodash/_baseIsEqual.js'(e, t) {
      var r = Zm(),
        o = Pn();
      function a(c, n, i, l, s) {
        return c === n
          ? !0
          : c == null || n == null || (!o(c) && !o(n))
            ? c !== c && n !== n
            : r(c, n, i, l, a, s);
      }
      t.exports = a;
    },
  }),
  Jl = P({
    '../../node_modules/lodash/isEqual.js'(e, t) {
      var r = Yl();
      function o(a, c) {
        return r(a, c);
      }
      t.exports = o;
    },
  }),
  ey = P({
    '../../node_modules/color-name/index.js'(e, t) {
      t.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      };
    },
  }),
  Xl = P({
    '../../node_modules/color-convert/conversions.js'(e, t) {
      var r = ey(),
        o = {};
      for (let n of Object.keys(r)) o[r[n]] = n;
      var a = {
        rgb: { channels: 3, labels: 'rgb' },
        hsl: { channels: 3, labels: 'hsl' },
        hsv: { channels: 3, labels: 'hsv' },
        hwb: { channels: 3, labels: 'hwb' },
        cmyk: { channels: 4, labels: 'cmyk' },
        xyz: { channels: 3, labels: 'xyz' },
        lab: { channels: 3, labels: 'lab' },
        lch: { channels: 3, labels: 'lch' },
        hex: { channels: 1, labels: ['hex'] },
        keyword: { channels: 1, labels: ['keyword'] },
        ansi16: { channels: 1, labels: ['ansi16'] },
        ansi256: { channels: 1, labels: ['ansi256'] },
        hcg: { channels: 3, labels: ['h', 'c', 'g'] },
        apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
        gray: { channels: 1, labels: ['gray'] },
      };
      t.exports = a;
      for (let n of Object.keys(a)) {
        if (!('channels' in a[n]))
          throw new Error('missing channels property: ' + n);
        if (!('labels' in a[n]))
          throw new Error('missing channel labels property: ' + n);
        if (a[n].labels.length !== a[n].channels)
          throw new Error('channel and label counts mismatch: ' + n);
        let { channels: i, labels: l } = a[n];
        delete a[n].channels,
          delete a[n].labels,
          Object.defineProperty(a[n], 'channels', { value: i }),
          Object.defineProperty(a[n], 'labels', { value: l });
      }
      (a.rgb.hsl = function (n) {
        let i = n[0] / 255,
          l = n[1] / 255,
          s = n[2] / 255,
          u = Math.min(i, l, s),
          f = Math.max(i, l, s),
          d = f - u,
          p,
          m;
        f === u
          ? (p = 0)
          : i === f
            ? (p = (l - s) / d)
            : l === f
              ? (p = 2 + (s - i) / d)
              : s === f && (p = 4 + (i - l) / d),
          (p = Math.min(p * 60, 360)),
          p < 0 && (p += 360);
        let y = (u + f) / 2;
        return (
          f === u
            ? (m = 0)
            : y <= 0.5
              ? (m = d / (f + u))
              : (m = d / (2 - f - u)),
          [p, m * 100, y * 100]
        );
      }),
        (a.rgb.hsv = function (n) {
          let i,
            l,
            s,
            u,
            f,
            d = n[0] / 255,
            p = n[1] / 255,
            m = n[2] / 255,
            y = Math.max(d, p, m),
            g = y - Math.min(d, p, m),
            h = function (v) {
              return (y - v) / 6 / g + 1 / 2;
            };
          return (
            g === 0
              ? ((u = 0), (f = 0))
              : ((f = g / y),
                (i = h(d)),
                (l = h(p)),
                (s = h(m)),
                d === y
                  ? (u = s - l)
                  : p === y
                    ? (u = 1 / 3 + i - s)
                    : m === y && (u = 2 / 3 + l - i),
                u < 0 ? (u += 1) : u > 1 && (u -= 1)),
            [u * 360, f * 100, y * 100]
          );
        }),
        (a.rgb.hwb = function (n) {
          let i = n[0],
            l = n[1],
            s = n[2],
            u = a.rgb.hsl(n)[0],
            f = (1 / 255) * Math.min(i, Math.min(l, s));
          return (
            (s = 1 - (1 / 255) * Math.max(i, Math.max(l, s))),
            [u, f * 100, s * 100]
          );
        }),
        (a.rgb.cmyk = function (n) {
          let i = n[0] / 255,
            l = n[1] / 255,
            s = n[2] / 255,
            u = Math.min(1 - i, 1 - l, 1 - s),
            f = (1 - i - u) / (1 - u) || 0,
            d = (1 - l - u) / (1 - u) || 0,
            p = (1 - s - u) / (1 - u) || 0;
          return [f * 100, d * 100, p * 100, u * 100];
        });
      function c(n, i) {
        return (n[0] - i[0]) ** 2 + (n[1] - i[1]) ** 2 + (n[2] - i[2]) ** 2;
      }
      (a.rgb.keyword = function (n) {
        let i = o[n];
        if (i) return i;
        let l = 1 / 0,
          s;
        for (let u of Object.keys(r)) {
          let f = r[u],
            d = c(n, f);
          d < l && ((l = d), (s = u));
        }
        return s;
      }),
        (a.keyword.rgb = function (n) {
          return r[n];
        }),
        (a.rgb.xyz = function (n) {
          let i = n[0] / 255,
            l = n[1] / 255,
            s = n[2] / 255;
          (i = i > 0.04045 ? ((i + 0.055) / 1.055) ** 2.4 : i / 12.92),
            (l = l > 0.04045 ? ((l + 0.055) / 1.055) ** 2.4 : l / 12.92),
            (s = s > 0.04045 ? ((s + 0.055) / 1.055) ** 2.4 : s / 12.92);
          let u = i * 0.4124 + l * 0.3576 + s * 0.1805,
            f = i * 0.2126 + l * 0.7152 + s * 0.0722,
            d = i * 0.0193 + l * 0.1192 + s * 0.9505;
          return [u * 100, f * 100, d * 100];
        }),
        (a.rgb.lab = function (n) {
          let i = a.rgb.xyz(n),
            l = i[0],
            s = i[1],
            u = i[2];
          (l /= 95.047),
            (s /= 100),
            (u /= 108.883),
            (l = l > 0.008856 ? l ** (1 / 3) : 7.787 * l + 16 / 116),
            (s = s > 0.008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116),
            (u = u > 0.008856 ? u ** (1 / 3) : 7.787 * u + 16 / 116);
          let f = 116 * s - 16,
            d = 500 * (l - s),
            p = 200 * (s - u);
          return [f, d, p];
        }),
        (a.hsl.rgb = function (n) {
          let i = n[0] / 360,
            l = n[1] / 100,
            s = n[2] / 100,
            u,
            f,
            d;
          if (l === 0) return (d = s * 255), [d, d, d];
          s < 0.5 ? (u = s * (1 + l)) : (u = s + l - s * l);
          let p = 2 * s - u,
            m = [0, 0, 0];
          for (let y = 0; y < 3; y++)
            (f = i + (1 / 3) * -(y - 1)),
              f < 0 && f++,
              f > 1 && f--,
              6 * f < 1
                ? (d = p + (u - p) * 6 * f)
                : 2 * f < 1
                  ? (d = u)
                  : 3 * f < 2
                    ? (d = p + (u - p) * (2 / 3 - f) * 6)
                    : (d = p),
              (m[y] = d * 255);
          return m;
        }),
        (a.hsl.hsv = function (n) {
          let i = n[0],
            l = n[1] / 100,
            s = n[2] / 100,
            u = l,
            f = Math.max(s, 0.01);
          (s *= 2), (l *= s <= 1 ? s : 2 - s), (u *= f <= 1 ? f : 2 - f);
          let d = (s + l) / 2,
            p = s === 0 ? (2 * u) / (f + u) : (2 * l) / (s + l);
          return [i, p * 100, d * 100];
        }),
        (a.hsv.rgb = function (n) {
          let i = n[0] / 60,
            l = n[1] / 100,
            s = n[2] / 100,
            u = Math.floor(i) % 6,
            f = i - Math.floor(i),
            d = 255 * s * (1 - l),
            p = 255 * s * (1 - l * f),
            m = 255 * s * (1 - l * (1 - f));
          switch (((s *= 255), u)) {
            case 0:
              return [s, m, d];
            case 1:
              return [p, s, d];
            case 2:
              return [d, s, m];
            case 3:
              return [d, p, s];
            case 4:
              return [m, d, s];
            case 5:
              return [s, d, p];
          }
        }),
        (a.hsv.hsl = function (n) {
          let i = n[0],
            l = n[1] / 100,
            s = n[2] / 100,
            u = Math.max(s, 0.01),
            f,
            d;
          d = (2 - l) * s;
          let p = (2 - l) * u;
          return (
            (f = l * u),
            (f /= p <= 1 ? p : 2 - p),
            (f = f || 0),
            (d /= 2),
            [i, f * 100, d * 100]
          );
        }),
        (a.hwb.rgb = function (n) {
          let i = n[0] / 360,
            l = n[1] / 100,
            s = n[2] / 100,
            u = l + s,
            f;
          u > 1 && ((l /= u), (s /= u));
          let d = Math.floor(6 * i),
            p = 1 - s;
          (f = 6 * i - d), d & 1 && (f = 1 - f);
          let m = l + f * (p - l),
            y,
            g,
            h;
          switch (d) {
            default:
            case 6:
            case 0:
              (y = p), (g = m), (h = l);
              break;
            case 1:
              (y = m), (g = p), (h = l);
              break;
            case 2:
              (y = l), (g = p), (h = m);
              break;
            case 3:
              (y = l), (g = m), (h = p);
              break;
            case 4:
              (y = m), (g = l), (h = p);
              break;
            case 5:
              (y = p), (g = l), (h = m);
              break;
          }
          return [y * 255, g * 255, h * 255];
        }),
        (a.cmyk.rgb = function (n) {
          let i = n[0] / 100,
            l = n[1] / 100,
            s = n[2] / 100,
            u = n[3] / 100,
            f = 1 - Math.min(1, i * (1 - u) + u),
            d = 1 - Math.min(1, l * (1 - u) + u),
            p = 1 - Math.min(1, s * (1 - u) + u);
          return [f * 255, d * 255, p * 255];
        }),
        (a.xyz.rgb = function (n) {
          let i = n[0] / 100,
            l = n[1] / 100,
            s = n[2] / 100,
            u,
            f,
            d;
          return (
            (u = i * 3.2406 + l * -1.5372 + s * -0.4986),
            (f = i * -0.9689 + l * 1.8758 + s * 0.0415),
            (d = i * 0.0557 + l * -0.204 + s * 1.057),
            (u = u > 0.0031308 ? 1.055 * u ** (1 / 2.4) - 0.055 : u * 12.92),
            (f = f > 0.0031308 ? 1.055 * f ** (1 / 2.4) - 0.055 : f * 12.92),
            (d = d > 0.0031308 ? 1.055 * d ** (1 / 2.4) - 0.055 : d * 12.92),
            (u = Math.min(Math.max(0, u), 1)),
            (f = Math.min(Math.max(0, f), 1)),
            (d = Math.min(Math.max(0, d), 1)),
            [u * 255, f * 255, d * 255]
          );
        }),
        (a.xyz.lab = function (n) {
          let i = n[0],
            l = n[1],
            s = n[2];
          (i /= 95.047),
            (l /= 100),
            (s /= 108.883),
            (i = i > 0.008856 ? i ** (1 / 3) : 7.787 * i + 16 / 116),
            (l = l > 0.008856 ? l ** (1 / 3) : 7.787 * l + 16 / 116),
            (s = s > 0.008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116);
          let u = 116 * l - 16,
            f = 500 * (i - l),
            d = 200 * (l - s);
          return [u, f, d];
        }),
        (a.lab.xyz = function (n) {
          let i = n[0],
            l = n[1],
            s = n[2],
            u,
            f,
            d;
          (f = (i + 16) / 116), (u = l / 500 + f), (d = f - s / 200);
          let p = f ** 3,
            m = u ** 3,
            y = d ** 3;
          return (
            (f = p > 0.008856 ? p : (f - 16 / 116) / 7.787),
            (u = m > 0.008856 ? m : (u - 16 / 116) / 7.787),
            (d = y > 0.008856 ? y : (d - 16 / 116) / 7.787),
            (u *= 95.047),
            (f *= 100),
            (d *= 108.883),
            [u, f, d]
          );
        }),
        (a.lab.lch = function (n) {
          let i = n[0],
            l = n[1],
            s = n[2],
            u;
          (u = (Math.atan2(s, l) * 360) / 2 / Math.PI), u < 0 && (u += 360);
          let f = Math.sqrt(l * l + s * s);
          return [i, f, u];
        }),
        (a.lch.lab = function (n) {
          let i = n[0],
            l = n[1],
            s = (n[2] / 360) * 2 * Math.PI,
            u = l * Math.cos(s),
            f = l * Math.sin(s);
          return [i, u, f];
        }),
        (a.rgb.ansi16 = function (n, i = null) {
          let [l, s, u] = n,
            f = i === null ? a.rgb.hsv(n)[2] : i;
          if (((f = Math.round(f / 50)), f === 0)) return 30;
          let d =
            30 +
            ((Math.round(u / 255) << 2) |
              (Math.round(s / 255) << 1) |
              Math.round(l / 255));
          return f === 2 && (d += 60), d;
        }),
        (a.hsv.ansi16 = function (n) {
          return a.rgb.ansi16(a.hsv.rgb(n), n[2]);
        }),
        (a.rgb.ansi256 = function (n) {
          let i = n[0],
            l = n[1],
            s = n[2];
          return i === l && l === s
            ? i < 8
              ? 16
              : i > 248
                ? 231
                : Math.round(((i - 8) / 247) * 24) + 232
            : 16 +
                36 * Math.round((i / 255) * 5) +
                6 * Math.round((l / 255) * 5) +
                Math.round((s / 255) * 5);
        }),
        (a.ansi16.rgb = function (n) {
          let i = n % 10;
          if (i === 0 || i === 7)
            return n > 50 && (i += 3.5), (i = (i / 10.5) * 255), [i, i, i];
          let l = (~~(n > 50) + 1) * 0.5,
            s = (i & 1) * l * 255,
            u = ((i >> 1) & 1) * l * 255,
            f = ((i >> 2) & 1) * l * 255;
          return [s, u, f];
        }),
        (a.ansi256.rgb = function (n) {
          if (n >= 232) {
            let f = (n - 232) * 10 + 8;
            return [f, f, f];
          }
          n -= 16;
          let i,
            l = (Math.floor(n / 36) / 5) * 255,
            s = (Math.floor((i = n % 36) / 6) / 5) * 255,
            u = ((i % 6) / 5) * 255;
          return [l, s, u];
        }),
        (a.rgb.hex = function (n) {
          let i = (
            ((Math.round(n[0]) & 255) << 16) +
            ((Math.round(n[1]) & 255) << 8) +
            (Math.round(n[2]) & 255)
          )
            .toString(16)
            .toUpperCase();
          return '000000'.substring(i.length) + i;
        }),
        (a.hex.rgb = function (n) {
          let i = n.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!i) return [0, 0, 0];
          let l = i[0];
          i[0].length === 3 &&
            (l = l
              .split('')
              .map((p) => p + p)
              .join(''));
          let s = parseInt(l, 16),
            u = (s >> 16) & 255,
            f = (s >> 8) & 255,
            d = s & 255;
          return [u, f, d];
        }),
        (a.rgb.hcg = function (n) {
          let i = n[0] / 255,
            l = n[1] / 255,
            s = n[2] / 255,
            u = Math.max(Math.max(i, l), s),
            f = Math.min(Math.min(i, l), s),
            d = u - f,
            p,
            m;
          return (
            d < 1 ? (p = f / (1 - d)) : (p = 0),
            d <= 0
              ? (m = 0)
              : u === i
                ? (m = ((l - s) / d) % 6)
                : u === l
                  ? (m = 2 + (s - i) / d)
                  : (m = 4 + (i - l) / d),
            (m /= 6),
            (m %= 1),
            [m * 360, d * 100, p * 100]
          );
        }),
        (a.hsl.hcg = function (n) {
          let i = n[1] / 100,
            l = n[2] / 100,
            s = l < 0.5 ? 2 * i * l : 2 * i * (1 - l),
            u = 0;
          return (
            s < 1 && (u = (l - 0.5 * s) / (1 - s)), [n[0], s * 100, u * 100]
          );
        }),
        (a.hsv.hcg = function (n) {
          let i = n[1] / 100,
            l = n[2] / 100,
            s = i * l,
            u = 0;
          return s < 1 && (u = (l - s) / (1 - s)), [n[0], s * 100, u * 100];
        }),
        (a.hcg.rgb = function (n) {
          let i = n[0] / 360,
            l = n[1] / 100,
            s = n[2] / 100;
          if (l === 0) return [s * 255, s * 255, s * 255];
          let u = [0, 0, 0],
            f = (i % 1) * 6,
            d = f % 1,
            p = 1 - d,
            m = 0;
          switch (Math.floor(f)) {
            case 0:
              (u[0] = 1), (u[1] = d), (u[2] = 0);
              break;
            case 1:
              (u[0] = p), (u[1] = 1), (u[2] = 0);
              break;
            case 2:
              (u[0] = 0), (u[1] = 1), (u[2] = d);
              break;
            case 3:
              (u[0] = 0), (u[1] = p), (u[2] = 1);
              break;
            case 4:
              (u[0] = d), (u[1] = 0), (u[2] = 1);
              break;
            default:
              (u[0] = 1), (u[1] = 0), (u[2] = p);
          }
          return (
            (m = (1 - l) * s),
            [(l * u[0] + m) * 255, (l * u[1] + m) * 255, (l * u[2] + m) * 255]
          );
        }),
        (a.hcg.hsv = function (n) {
          let i = n[1] / 100,
            l = n[2] / 100,
            s = i + l * (1 - i),
            u = 0;
          return s > 0 && (u = i / s), [n[0], u * 100, s * 100];
        }),
        (a.hcg.hsl = function (n) {
          let i = n[1] / 100,
            l = (n[2] / 100) * (1 - i) + 0.5 * i,
            s = 0;
          return (
            l > 0 && l < 0.5
              ? (s = i / (2 * l))
              : l >= 0.5 && l < 1 && (s = i / (2 * (1 - l))),
            [n[0], s * 100, l * 100]
          );
        }),
        (a.hcg.hwb = function (n) {
          let i = n[1] / 100,
            l = n[2] / 100,
            s = i + l * (1 - i);
          return [n[0], (s - i) * 100, (1 - s) * 100];
        }),
        (a.hwb.hcg = function (n) {
          let i = n[1] / 100,
            l = 1 - n[2] / 100,
            s = l - i,
            u = 0;
          return s < 1 && (u = (l - s) / (1 - s)), [n[0], s * 100, u * 100];
        }),
        (a.apple.rgb = function (n) {
          return [
            (n[0] / 65535) * 255,
            (n[1] / 65535) * 255,
            (n[2] / 65535) * 255,
          ];
        }),
        (a.rgb.apple = function (n) {
          return [
            (n[0] / 255) * 65535,
            (n[1] / 255) * 65535,
            (n[2] / 255) * 65535,
          ];
        }),
        (a.gray.rgb = function (n) {
          return [(n[0] / 100) * 255, (n[0] / 100) * 255, (n[0] / 100) * 255];
        }),
        (a.gray.hsl = function (n) {
          return [0, 0, n[0]];
        }),
        (a.gray.hsv = a.gray.hsl),
        (a.gray.hwb = function (n) {
          return [0, 100, n[0]];
        }),
        (a.gray.cmyk = function (n) {
          return [0, 0, 0, n[0]];
        }),
        (a.gray.lab = function (n) {
          return [n[0], 0, 0];
        }),
        (a.gray.hex = function (n) {
          let i = Math.round((n[0] / 100) * 255) & 255,
            l = ((i << 16) + (i << 8) + i).toString(16).toUpperCase();
          return '000000'.substring(l.length) + l;
        }),
        (a.rgb.gray = function (n) {
          return [((n[0] + n[1] + n[2]) / 3 / 255) * 100];
        });
    },
  }),
  ty = P({
    '../../node_modules/color-convert/route.js'(e, t) {
      var r = Xl();
      function o() {
        let i = {},
          l = Object.keys(r);
        for (let s = l.length, u = 0; u < s; u++)
          i[l[u]] = { distance: -1, parent: null };
        return i;
      }
      function a(i) {
        let l = o(),
          s = [i];
        for (l[i].distance = 0; s.length; ) {
          let u = s.pop(),
            f = Object.keys(r[u]);
          for (let d = f.length, p = 0; p < d; p++) {
            let m = f[p],
              y = l[m];
            y.distance === -1 &&
              ((y.distance = l[u].distance + 1), (y.parent = u), s.unshift(m));
          }
        }
        return l;
      }
      function c(i, l) {
        return function (s) {
          return l(i(s));
        };
      }
      function n(i, l) {
        let s = [l[i].parent, i],
          u = r[l[i].parent][i],
          f = l[i].parent;
        for (; l[f].parent; )
          s.unshift(l[f].parent),
            (u = c(r[l[f].parent][f], u)),
            (f = l[f].parent);
        return (u.conversion = s), u;
      }
      t.exports = function (i) {
        let l = a(i),
          s = {},
          u = Object.keys(l);
        for (let f = u.length, d = 0; d < f; d++) {
          let p = u[d];
          l[p].parent !== null && (s[p] = n(p, l));
        }
        return s;
      };
    },
  }),
  ry = P({
    '../../node_modules/color-convert/index.js'(e, t) {
      var r = Xl(),
        o = ty(),
        a = {},
        c = Object.keys(r);
      function n(l) {
        let s = function (...u) {
          let f = u[0];
          return f == null ? f : (f.length > 1 && (u = f), l(u));
        };
        return 'conversion' in l && (s.conversion = l.conversion), s;
      }
      function i(l) {
        let s = function (...u) {
          let f = u[0];
          if (f == null) return f;
          f.length > 1 && (u = f);
          let d = l(u);
          if (typeof d == 'object')
            for (let p = d.length, m = 0; m < p; m++) d[m] = Math.round(d[m]);
          return d;
        };
        return 'conversion' in l && (s.conversion = l.conversion), s;
      }
      c.forEach((l) => {
        (a[l] = {}),
          Object.defineProperty(a[l], 'channels', { value: r[l].channels }),
          Object.defineProperty(a[l], 'labels', { value: r[l].labels });
        let s = o(l);
        Object.keys(s).forEach((u) => {
          let f = s[u];
          (a[l][u] = i(f)), (a[l][u].raw = n(f));
        });
      }),
        (t.exports = a);
    },
  }),
  ny = P({
    '../../node_modules/ansi-styles/index.js'(e, t) {
      var r =
          (f, d) =>
          (...p) =>
            `\x1B[${f(...p) + d}m`,
        o =
          (f, d) =>
          (...p) => {
            let m = f(...p);
            return `\x1B[${38 + d};5;${m}m`;
          },
        a =
          (f, d) =>
          (...p) => {
            let m = f(...p);
            return `\x1B[${38 + d};2;${m[0]};${m[1]};${m[2]}m`;
          },
        c = (f) => f,
        n = (f, d, p) => [f, d, p],
        i = (f, d, p) => {
          Object.defineProperty(f, d, {
            get: () => {
              let m = p();
              return (
                Object.defineProperty(f, d, {
                  value: m,
                  enumerable: !0,
                  configurable: !0,
                }),
                m
              );
            },
            enumerable: !0,
            configurable: !0,
          });
        },
        l,
        s = (f, d, p, m) => {
          l === void 0 && (l = ry());
          let y = m ? 10 : 0,
            g = {};
          for (let [h, v] of Object.entries(l)) {
            let S = h === 'ansi16' ? 'ansi' : h;
            h === d
              ? (g[S] = f(p, y))
              : typeof v == 'object' && (g[S] = f(v[d], y));
          }
          return g;
        };
      function u() {
        let f = new Map(),
          d = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29],
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              blackBright: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39],
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49],
            },
          };
        (d.color.gray = d.color.blackBright),
          (d.bgColor.bgGray = d.bgColor.bgBlackBright),
          (d.color.grey = d.color.blackBright),
          (d.bgColor.bgGrey = d.bgColor.bgBlackBright);
        for (let [p, m] of Object.entries(d)) {
          for (let [y, g] of Object.entries(m))
            (d[y] = { open: `\x1B[${g[0]}m`, close: `\x1B[${g[1]}m` }),
              (m[y] = d[y]),
              f.set(g[0], g[1]);
          Object.defineProperty(d, p, { value: m, enumerable: !1 });
        }
        return (
          Object.defineProperty(d, 'codes', { value: f, enumerable: !1 }),
          (d.color.close = '\x1B[39m'),
          (d.bgColor.close = '\x1B[49m'),
          i(d.color, 'ansi', () => s(r, 'ansi16', c, !1)),
          i(d.color, 'ansi256', () => s(o, 'ansi256', c, !1)),
          i(d.color, 'ansi16m', () => s(a, 'rgb', n, !1)),
          i(d.bgColor, 'ansi', () => s(r, 'ansi16', c, !0)),
          i(d.bgColor, 'ansi256', () => s(o, 'ansi256', c, !0)),
          i(d.bgColor, 'ansi16m', () => s(a, 'rgb', n, !0)),
          d
        );
      }
      Object.defineProperty(t, 'exports', { enumerable: !0, get: u });
    },
  }),
  oy = P({
    '../../node_modules/supports-color/browser.js'(e, t) {
      t.exports = { stdout: !1, stderr: !1 };
    },
  }),
  ay = P({
    'node_modules/@testing-library/jest-dom/node_modules/chalk/source/util.js'(
      e,
      t
    ) {
      var r = (a, c, n) => {
          let i = a.indexOf(c);
          if (i === -1) return a;
          let l = c.length,
            s = 0,
            u = '';
          do
            (u += a.substr(s, i - s) + c + n),
              (s = i + l),
              (i = a.indexOf(c, s));
          while (i !== -1);
          return (u += a.substr(s)), u;
        },
        o = (a, c, n, i) => {
          let l = 0,
            s = '';
          do {
            let u = a[i - 1] === '\r';
            (s +=
              a.substr(l, (u ? i - 1 : i) - l) +
              c +
              (u
                ? `\r
`
                : `
`) +
              n),
              (l = i + 1),
              (i = a.indexOf(
                `
`,
                l
              ));
          } while (i !== -1);
          return (s += a.substr(l)), s;
        };
      t.exports = { stringReplaceAll: r, stringEncaseCRLFWithFirstIndex: o };
    },
  }),
  iy = P({
    'node_modules/@testing-library/jest-dom/node_modules/chalk/source/templates.js'(
      e,
      t
    ) {
      var r =
          /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
        o = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
        a = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
        c = /\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.)|([^\\])/gi,
        n = new Map([
          [
            'n',
            `
`,
          ],
          ['r', '\r'],
          ['t', '	'],
          ['b', '\b'],
          ['f', '\f'],
          ['v', '\v'],
          ['0', '\0'],
          ['\\', '\\'],
          ['e', '\x1B'],
          ['a', '\x07'],
        ]);
      function i(f) {
        let d = f[0] === 'u',
          p = f[1] === '{';
        return (d && !p && f.length === 5) || (f[0] === 'x' && f.length === 3)
          ? String.fromCharCode(parseInt(f.slice(1), 16))
          : d && p
            ? String.fromCodePoint(parseInt(f.slice(2, -1), 16))
            : n.get(f) || f;
      }
      function l(f, d) {
        let p = [],
          m = d.trim().split(/\s*,\s*/g),
          y;
        for (let g of m) {
          let h = Number(g);
          if (!Number.isNaN(h)) p.push(h);
          else if ((y = g.match(a)))
            p.push(y[2].replace(c, (v, S, E) => (S ? i(S) : E)));
          else
            throw new Error(
              `Invalid Chalk template style argument: ${g} (in style '${f}')`
            );
        }
        return p;
      }
      function s(f) {
        o.lastIndex = 0;
        let d = [],
          p;
        for (; (p = o.exec(f)) !== null; ) {
          let m = p[1];
          if (p[2]) {
            let y = l(m, p[2]);
            d.push([m].concat(y));
          } else d.push([m]);
        }
        return d;
      }
      function u(f, d) {
        let p = {};
        for (let y of d)
          for (let g of y.styles) p[g[0]] = y.inverse ? null : g.slice(1);
        let m = f;
        for (let [y, g] of Object.entries(p))
          if (Array.isArray(g)) {
            if (!(y in m)) throw new Error(`Unknown Chalk style: ${y}`);
            m = g.length > 0 ? m[y](...g) : m[y];
          }
        return m;
      }
      t.exports = (f, d) => {
        let p = [],
          m = [],
          y = [];
        if (
          (d.replace(r, (g, h, v, S, E, C) => {
            if (h) y.push(i(h));
            else if (S) {
              let A = y.join('');
              (y = []),
                m.push(p.length === 0 ? A : u(f, p)(A)),
                p.push({ inverse: v, styles: s(S) });
            } else if (E) {
              if (p.length === 0)
                throw new Error('Found extraneous } in Chalk template literal');
              m.push(u(f, p)(y.join(''))), (y = []), p.pop();
            } else y.push(C);
          }),
          m.push(y.join('')),
          p.length > 0)
        ) {
          let g = `Chalk template literal is missing ${p.length} closing bracket${p.length === 1 ? '' : 's'} (\`}\`)`;
          throw new Error(g);
        }
        return m.join('');
      };
    },
  }),
  Ql = P({
    'node_modules/@testing-library/jest-dom/node_modules/chalk/source/index.js'(
      e,
      t
    ) {
      var r = ny(),
        { stdout: o, stderr: a } = oy(),
        { stringReplaceAll: c, stringEncaseCRLFWithFirstIndex: n } = ay(),
        i = ['ansi', 'ansi', 'ansi256', 'ansi16m'],
        l = Object.create(null),
        s = (C, A = {}) => {
          if (A.level > 3 || A.level < 0)
            throw new Error(
              'The `level` option should be an integer from 0 to 3'
            );
          let R = o ? o.level : 0;
          C.level = A.level === void 0 ? R : A.level;
        },
        u = class {
          constructor(C) {
            return f(C);
          }
        },
        f = (C) => {
          let A = {};
          return (
            s(A, C),
            (A.template = (...R) => S(A.template, ...R)),
            Object.setPrototypeOf(A, d.prototype),
            Object.setPrototypeOf(A.template, A),
            (A.template.constructor = () => {
              throw new Error(
                '`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.'
              );
            }),
            (A.template.Instance = u),
            A.template
          );
        };
      function d(C) {
        return f(C);
      }
      for (let [C, A] of Object.entries(r))
        l[C] = {
          get() {
            let R = g(this, y(A.open, A.close, this._styler), this._isEmpty);
            return Object.defineProperty(this, C, { value: R }), R;
          },
        };
      l.visible = {
        get() {
          let C = g(this, this._styler, !0);
          return Object.defineProperty(this, 'visible', { value: C }), C;
        },
      };
      var p = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];
      for (let C of p)
        l[C] = {
          get() {
            let { level: A } = this;
            return function (...R) {
              let _ = y(r.color[i[A]][C](...R), r.color.close, this._styler);
              return g(this, _, this._isEmpty);
            };
          },
        };
      for (let C of p) {
        let A = 'bg' + C[0].toUpperCase() + C.slice(1);
        l[A] = {
          get() {
            let { level: R } = this;
            return function (..._) {
              let O = y(
                r.bgColor[i[R]][C](..._),
                r.bgColor.close,
                this._styler
              );
              return g(this, O, this._isEmpty);
            };
          },
        };
      }
      var m = Object.defineProperties(() => {}, {
          ...l,
          level: {
            enumerable: !0,
            get() {
              return this._generator.level;
            },
            set(C) {
              this._generator.level = C;
            },
          },
        }),
        y = (C, A, R) => {
          let _, O;
          return (
            R === void 0
              ? ((_ = C), (O = A))
              : ((_ = R.openAll + C), (O = A + R.closeAll)),
            { open: C, close: A, openAll: _, closeAll: O, parent: R }
          );
        },
        g = (C, A, R) => {
          let _ = (...O) => h(_, O.length === 1 ? '' + O[0] : O.join(' '));
          return (
            (_.__proto__ = m),
            (_._generator = C),
            (_._styler = A),
            (_._isEmpty = R),
            _
          );
        },
        h = (C, A) => {
          if (C.level <= 0 || !A) return C._isEmpty ? '' : A;
          let R = C._styler;
          if (R === void 0) return A;
          let { openAll: _, closeAll: O } = R;
          if (A.indexOf('\x1B') !== -1)
            for (; R !== void 0; ) (A = c(A, R.close, R.open)), (R = R.parent);
          let x = A.indexOf(`
`);
          return x !== -1 && (A = n(A, O, _, x)), _ + A + O;
        },
        v,
        S = (C, ...A) => {
          let [R] = A;
          if (!Array.isArray(R)) return A.join(' ');
          let _ = A.slice(1),
            O = [R.raw[0]];
          for (let x = 1; x < R.length; x++)
            O.push(
              String(_[x - 1]).replace(/[{}\\]/g, '\\$&'),
              String(R.raw[x])
            );
          return v === void 0 && (v = iy()), v(C, O.join(''));
        };
      Object.defineProperties(d.prototype, l);
      var E = d();
      (E.supportsColor = o),
        (E.stderr = d({ level: a ? a.level : 0 })),
        (E.stderr.supportsColor = a),
        (E.Level = {
          None: 0,
          Basic: 1,
          Ansi256: 2,
          TrueColor: 3,
          0: 'None',
          1: 'Basic',
          2: 'Ansi256',
          3: 'TrueColor',
        }),
        (t.exports = E);
    },
  }),
  Zl = P({
    '../../node_modules/lodash/isEqualWith.js'(e, t) {
      var r = Yl();
      function o(a, c, n) {
        n = typeof n == 'function' ? n : void 0;
        var i = n ? n(a, c) : void 0;
        return i === void 0 ? r(a, c, void 0, n) : !!i;
      }
      t.exports = o;
    },
  }),
  ly = P({
    '../../node_modules/lodash/_baseFindIndex.js'(e, t) {
      function r(o, a, c, n) {
        for (var i = o.length, l = c + (n ? 1 : -1); n ? l-- : ++l < i; )
          if (a(o[l], l, o)) return l;
        return -1;
      }
      t.exports = r;
    },
  }),
  sy = P({
    '../../node_modules/lodash/_baseIsNaN.js'(e, t) {
      function r(o) {
        return o !== o;
      }
      t.exports = r;
    },
  }),
  uy = P({
    '../../node_modules/lodash/_strictIndexOf.js'(e, t) {
      function r(o, a, c) {
        for (var n = c - 1, i = o.length; ++n < i; ) if (o[n] === a) return n;
        return -1;
      }
      t.exports = r;
    },
  }),
  cy = P({
    '../../node_modules/lodash/_baseIndexOf.js'(e, t) {
      var r = ly(),
        o = sy(),
        a = uy();
      function c(n, i, l) {
        return i === i ? a(n, i, l) : r(n, o, l);
      }
      t.exports = c;
    },
  }),
  dy = P({
    '../../node_modules/lodash/_arrayIncludes.js'(e, t) {
      var r = cy();
      function o(a, c) {
        var n = a == null ? 0 : a.length;
        return !!n && r(a, c, 0) > -1;
      }
      t.exports = o;
    },
  }),
  fy = P({
    '../../node_modules/lodash/_arrayIncludesWith.js'(e, t) {
      function r(o, a, c) {
        for (var n = -1, i = o == null ? 0 : o.length; ++n < i; )
          if (c(a, o[n])) return !0;
        return !1;
      }
      t.exports = r;
    },
  }),
  py = P({
    '../../node_modules/lodash/noop.js'(e, t) {
      function r() {}
      t.exports = r;
    },
  }),
  my = P({
    '../../node_modules/lodash/_createSet.js'(e, t) {
      var r = Kl(),
        o = py(),
        a = Ko(),
        c = 1 / 0,
        n =
          r && 1 / a(new r([, -0]))[1] == c
            ? function (i) {
                return new r(i);
              }
            : o;
      t.exports = n;
    },
  }),
  yy = P({
    '../../node_modules/lodash/_baseUniq.js'(e, t) {
      var r = Ul(),
        o = dy(),
        a = fy(),
        c = Hl(),
        n = my(),
        i = Ko(),
        l = 200;
      function s(u, f, d) {
        var p = -1,
          m = o,
          y = u.length,
          g = !0,
          h = [],
          v = h;
        if (d) (g = !1), (m = a);
        else if (y >= l) {
          var S = f ? null : n(u);
          if (S) return i(S);
          (g = !1), (m = c), (v = new r());
        } else v = f ? [] : h;
        e: for (; ++p < y; ) {
          var E = u[p],
            C = f ? f(E) : E;
          if (((E = d || E !== 0 ? E : 0), g && C === C)) {
            for (var A = v.length; A--; ) if (v[A] === C) continue e;
            f && v.push(C), h.push(E);
          } else m(v, C, d) || (v !== h && v.push(C), h.push(E));
        }
        return h;
      }
      t.exports = s;
    },
  }),
  es = P({
    '../../node_modules/lodash/uniq.js'(e, t) {
      var r = yy();
      function o(a) {
        return a && a.length ? r(a) : [];
      }
      t.exports = o;
    },
  }),
  ts = P({
    '../../node_modules/css.escape/css.escape.js'(e, t) {
      (function (r, o) {
        typeof e == 'object'
          ? (t.exports = o(r))
          : typeof define == 'function' && define.amd
            ? define([], o.bind(r, r))
            : o(r);
      })(typeof global < 'u' ? global : e, function (r) {
        if (r.CSS && r.CSS.escape) return r.CSS.escape;
        var o = function (a) {
          if (arguments.length == 0)
            throw new TypeError('`CSS.escape` requires an argument.');
          for (
            var c = String(a),
              n = c.length,
              i = -1,
              l,
              s = '',
              u = c.charCodeAt(0);
            ++i < n;

          ) {
            if (((l = c.charCodeAt(i)), l == 0)) {
              s += '�';
              continue;
            }
            if (
              (l >= 1 && l <= 31) ||
              l == 127 ||
              (i == 0 && l >= 48 && l <= 57) ||
              (i == 1 && l >= 48 && l <= 57 && u == 45)
            ) {
              s += '\\' + l.toString(16) + ' ';
              continue;
            }
            if (i == 0 && n == 1 && l == 45) {
              s += '\\' + c.charAt(i);
              continue;
            }
            if (
              l >= 128 ||
              l == 45 ||
              l == 95 ||
              (l >= 48 && l <= 57) ||
              (l >= 65 && l <= 90) ||
              (l >= 97 && l <= 122)
            ) {
              s += c.charAt(i);
              continue;
            }
            s += '\\' + c.charAt(i);
          }
          return s;
        };
        return r.CSS || (r.CSS = {}), (r.CSS.escape = o), o;
      });
    },
  }),
  hy = P({
    '../../node_modules/aria-query/lib/util/iteratorProxy.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      function t() {
        var o = this,
          a = 0,
          c = {
            '@@iterator': function () {
              return c;
            },
            next: function () {
              if (a < o.length) {
                var n = o[a];
                return (a = a + 1), { done: !1, value: n };
              } else return { done: !0 };
            },
          };
        return c;
      }
      var r = t;
      e.default = r;
    },
  }),
  Lr = P({
    '../../node_modules/aria-query/lib/util/iterationDecorator.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = a);
      var t = r(hy());
      function r(c) {
        return c && c.__esModule ? c : { default: c };
      }
      function o(c) {
        '@babel/helpers - typeof';
        return (
          (o =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    typeof Symbol == 'function' &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? 'symbol'
                    : typeof n;
                }),
          o(c)
        );
      }
      function a(c, n) {
        return (
          typeof Symbol == 'function' &&
            o(Symbol.iterator) === 'symbol' &&
            Object.defineProperty(c, Symbol.iterator, {
              value: t.default.bind(n),
            }),
          c
        );
      }
    },
  }),
  by = P({
    '../../node_modules/aria-query/lib/ariaPropsMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = r(Lr());
      function r(p) {
        return p && p.__esModule ? p : { default: p };
      }
      function o(p, m) {
        return n(p) || c(p, m) || l(p, m) || a();
      }
      function a() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function c(p, m) {
        var y =
          p == null
            ? null
            : (typeof Symbol < 'u' && p[Symbol.iterator]) || p['@@iterator'];
        if (y != null) {
          var g = [],
            h = !0,
            v = !1,
            S,
            E;
          try {
            for (
              y = y.call(p);
              !(h = (S = y.next()).done) &&
              (g.push(S.value), !(m && g.length === m));
              h = !0
            );
          } catch (C) {
            (v = !0), (E = C);
          } finally {
            try {
              !h && y.return != null && y.return();
            } finally {
              if (v) throw E;
            }
          }
          return g;
        }
      }
      function n(p) {
        if (Array.isArray(p)) return p;
      }
      function i(p, m) {
        var y = (typeof Symbol < 'u' && p[Symbol.iterator]) || p['@@iterator'];
        if (!y) {
          if (
            Array.isArray(p) ||
            (y = l(p)) ||
            (m && p && typeof p.length == 'number')
          ) {
            y && (p = y);
            var g = 0,
              h = function () {};
            return {
              s: h,
              n: function () {
                return g >= p.length
                  ? { done: !0 }
                  : { done: !1, value: p[g++] };
              },
              e: function (C) {
                throw C;
              },
              f: h,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var v = !0,
          S = !1,
          E;
        return {
          s: function () {
            y = y.call(p);
          },
          n: function () {
            var C = y.next();
            return (v = C.done), C;
          },
          e: function (C) {
            (S = !0), (E = C);
          },
          f: function () {
            try {
              !v && y.return != null && y.return();
            } finally {
              if (S) throw E;
            }
          },
        };
      }
      function l(p, m) {
        if (p) {
          if (typeof p == 'string') return s(p, m);
          var y = Object.prototype.toString.call(p).slice(8, -1);
          if (
            (y === 'Object' && p.constructor && (y = p.constructor.name),
            y === 'Map' || y === 'Set')
          )
            return Array.from(p);
          if (
            y === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)
          )
            return s(p, m);
        }
      }
      function s(p, m) {
        (m == null || m > p.length) && (m = p.length);
        for (var y = 0, g = new Array(m); y < m; y++) g[y] = p[y];
        return g;
      }
      var u = [
          ['aria-activedescendant', { type: 'id' }],
          ['aria-atomic', { type: 'boolean' }],
          [
            'aria-autocomplete',
            { type: 'token', values: ['inline', 'list', 'both', 'none'] },
          ],
          ['aria-busy', { type: 'boolean' }],
          ['aria-checked', { type: 'tristate' }],
          ['aria-colcount', { type: 'integer' }],
          ['aria-colindex', { type: 'integer' }],
          ['aria-colspan', { type: 'integer' }],
          ['aria-controls', { type: 'idlist' }],
          [
            'aria-current',
            {
              type: 'token',
              values: ['page', 'step', 'location', 'date', 'time', !0, !1],
            },
          ],
          ['aria-describedby', { type: 'idlist' }],
          ['aria-details', { type: 'id' }],
          ['aria-disabled', { type: 'boolean' }],
          [
            'aria-dropeffect',
            {
              type: 'tokenlist',
              values: ['copy', 'execute', 'link', 'move', 'none', 'popup'],
            },
          ],
          ['aria-errormessage', { type: 'id' }],
          ['aria-expanded', { type: 'boolean', allowundefined: !0 }],
          ['aria-flowto', { type: 'idlist' }],
          ['aria-grabbed', { type: 'boolean', allowundefined: !0 }],
          [
            'aria-haspopup',
            {
              type: 'token',
              values: [!1, !0, 'menu', 'listbox', 'tree', 'grid', 'dialog'],
            },
          ],
          ['aria-hidden', { type: 'boolean', allowundefined: !0 }],
          [
            'aria-invalid',
            { type: 'token', values: ['grammar', !1, 'spelling', !0] },
          ],
          ['aria-keyshortcuts', { type: 'string' }],
          ['aria-label', { type: 'string' }],
          ['aria-labelledby', { type: 'idlist' }],
          ['aria-level', { type: 'integer' }],
          [
            'aria-live',
            { type: 'token', values: ['assertive', 'off', 'polite'] },
          ],
          ['aria-modal', { type: 'boolean' }],
          ['aria-multiline', { type: 'boolean' }],
          ['aria-multiselectable', { type: 'boolean' }],
          [
            'aria-orientation',
            { type: 'token', values: ['vertical', 'undefined', 'horizontal'] },
          ],
          ['aria-owns', { type: 'idlist' }],
          ['aria-placeholder', { type: 'string' }],
          ['aria-posinset', { type: 'integer' }],
          ['aria-pressed', { type: 'tristate' }],
          ['aria-readonly', { type: 'boolean' }],
          [
            'aria-relevant',
            {
              type: 'tokenlist',
              values: ['additions', 'all', 'removals', 'text'],
            },
          ],
          ['aria-required', { type: 'boolean' }],
          ['aria-roledescription', { type: 'string' }],
          ['aria-rowcount', { type: 'integer' }],
          ['aria-rowindex', { type: 'integer' }],
          ['aria-rowspan', { type: 'integer' }],
          ['aria-selected', { type: 'boolean', allowundefined: !0 }],
          ['aria-setsize', { type: 'integer' }],
          [
            'aria-sort',
            {
              type: 'token',
              values: ['ascending', 'descending', 'none', 'other'],
            },
          ],
          ['aria-valuemax', { type: 'number' }],
          ['aria-valuemin', { type: 'number' }],
          ['aria-valuenow', { type: 'number' }],
          ['aria-valuetext', { type: 'string' }],
        ],
        f = {
          entries: function () {
            return u;
          },
          forEach: function (p) {
            var m =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : null,
              y = i(u),
              g;
            try {
              for (y.s(); !(g = y.n()).done; ) {
                var h = o(g.value, 2),
                  v = h[0],
                  S = h[1];
                p.call(m, S, v, u);
              }
            } catch (E) {
              y.e(E);
            } finally {
              y.f();
            }
          },
          get: function (p) {
            var m = u.find(function (y) {
              return y[0] === p;
            });
            return m && m[1];
          },
          has: function (p) {
            return !!f.get(p);
          },
          keys: function () {
            return u.map(function (p) {
              var m = o(p, 1),
                y = m[0];
              return y;
            });
          },
          values: function () {
            return u.map(function (p) {
              var m = o(p, 2),
                y = m[1];
              return y;
            });
          },
        },
        d = (0, t.default)(f, f.entries());
      e.default = d;
    },
  }),
  gy = P({
    '../../node_modules/aria-query/lib/domMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = r(Lr());
      function r(p) {
        return p && p.__esModule ? p : { default: p };
      }
      function o(p, m) {
        return n(p) || c(p, m) || l(p, m) || a();
      }
      function a() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function c(p, m) {
        var y =
          p == null
            ? null
            : (typeof Symbol < 'u' && p[Symbol.iterator]) || p['@@iterator'];
        if (y != null) {
          var g = [],
            h = !0,
            v = !1,
            S,
            E;
          try {
            for (
              y = y.call(p);
              !(h = (S = y.next()).done) &&
              (g.push(S.value), !(m && g.length === m));
              h = !0
            );
          } catch (C) {
            (v = !0), (E = C);
          } finally {
            try {
              !h && y.return != null && y.return();
            } finally {
              if (v) throw E;
            }
          }
          return g;
        }
      }
      function n(p) {
        if (Array.isArray(p)) return p;
      }
      function i(p, m) {
        var y = (typeof Symbol < 'u' && p[Symbol.iterator]) || p['@@iterator'];
        if (!y) {
          if (
            Array.isArray(p) ||
            (y = l(p)) ||
            (m && p && typeof p.length == 'number')
          ) {
            y && (p = y);
            var g = 0,
              h = function () {};
            return {
              s: h,
              n: function () {
                return g >= p.length
                  ? { done: !0 }
                  : { done: !1, value: p[g++] };
              },
              e: function (C) {
                throw C;
              },
              f: h,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var v = !0,
          S = !1,
          E;
        return {
          s: function () {
            y = y.call(p);
          },
          n: function () {
            var C = y.next();
            return (v = C.done), C;
          },
          e: function (C) {
            (S = !0), (E = C);
          },
          f: function () {
            try {
              !v && y.return != null && y.return();
            } finally {
              if (S) throw E;
            }
          },
        };
      }
      function l(p, m) {
        if (p) {
          if (typeof p == 'string') return s(p, m);
          var y = Object.prototype.toString.call(p).slice(8, -1);
          if (
            (y === 'Object' && p.constructor && (y = p.constructor.name),
            y === 'Map' || y === 'Set')
          )
            return Array.from(p);
          if (
            y === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)
          )
            return s(p, m);
        }
      }
      function s(p, m) {
        (m == null || m > p.length) && (m = p.length);
        for (var y = 0, g = new Array(m); y < m; y++) g[y] = p[y];
        return g;
      }
      var u = [
          ['a', { reserved: !1 }],
          ['abbr', { reserved: !1 }],
          ['acronym', { reserved: !1 }],
          ['address', { reserved: !1 }],
          ['applet', { reserved: !1 }],
          ['area', { reserved: !1 }],
          ['article', { reserved: !1 }],
          ['aside', { reserved: !1 }],
          ['audio', { reserved: !1 }],
          ['b', { reserved: !1 }],
          ['base', { reserved: !0 }],
          ['bdi', { reserved: !1 }],
          ['bdo', { reserved: !1 }],
          ['big', { reserved: !1 }],
          ['blink', { reserved: !1 }],
          ['blockquote', { reserved: !1 }],
          ['body', { reserved: !1 }],
          ['br', { reserved: !1 }],
          ['button', { reserved: !1 }],
          ['canvas', { reserved: !1 }],
          ['caption', { reserved: !1 }],
          ['center', { reserved: !1 }],
          ['cite', { reserved: !1 }],
          ['code', { reserved: !1 }],
          ['col', { reserved: !0 }],
          ['colgroup', { reserved: !0 }],
          ['content', { reserved: !1 }],
          ['data', { reserved: !1 }],
          ['datalist', { reserved: !1 }],
          ['dd', { reserved: !1 }],
          ['del', { reserved: !1 }],
          ['details', { reserved: !1 }],
          ['dfn', { reserved: !1 }],
          ['dialog', { reserved: !1 }],
          ['dir', { reserved: !1 }],
          ['div', { reserved: !1 }],
          ['dl', { reserved: !1 }],
          ['dt', { reserved: !1 }],
          ['em', { reserved: !1 }],
          ['embed', { reserved: !1 }],
          ['fieldset', { reserved: !1 }],
          ['figcaption', { reserved: !1 }],
          ['figure', { reserved: !1 }],
          ['font', { reserved: !1 }],
          ['footer', { reserved: !1 }],
          ['form', { reserved: !1 }],
          ['frame', { reserved: !1 }],
          ['frameset', { reserved: !1 }],
          ['h1', { reserved: !1 }],
          ['h2', { reserved: !1 }],
          ['h3', { reserved: !1 }],
          ['h4', { reserved: !1 }],
          ['h5', { reserved: !1 }],
          ['h6', { reserved: !1 }],
          ['head', { reserved: !0 }],
          ['header', { reserved: !1 }],
          ['hgroup', { reserved: !1 }],
          ['hr', { reserved: !1 }],
          ['html', { reserved: !0 }],
          ['i', { reserved: !1 }],
          ['iframe', { reserved: !1 }],
          ['img', { reserved: !1 }],
          ['input', { reserved: !1 }],
          ['ins', { reserved: !1 }],
          ['kbd', { reserved: !1 }],
          ['keygen', { reserved: !1 }],
          ['label', { reserved: !1 }],
          ['legend', { reserved: !1 }],
          ['li', { reserved: !1 }],
          ['link', { reserved: !0 }],
          ['main', { reserved: !1 }],
          ['map', { reserved: !1 }],
          ['mark', { reserved: !1 }],
          ['marquee', { reserved: !1 }],
          ['menu', { reserved: !1 }],
          ['menuitem', { reserved: !1 }],
          ['meta', { reserved: !0 }],
          ['meter', { reserved: !1 }],
          ['nav', { reserved: !1 }],
          ['noembed', { reserved: !0 }],
          ['noscript', { reserved: !0 }],
          ['object', { reserved: !1 }],
          ['ol', { reserved: !1 }],
          ['optgroup', { reserved: !1 }],
          ['option', { reserved: !1 }],
          ['output', { reserved: !1 }],
          ['p', { reserved: !1 }],
          ['param', { reserved: !0 }],
          ['picture', { reserved: !0 }],
          ['pre', { reserved: !1 }],
          ['progress', { reserved: !1 }],
          ['q', { reserved: !1 }],
          ['rp', { reserved: !1 }],
          ['rt', { reserved: !1 }],
          ['rtc', { reserved: !1 }],
          ['ruby', { reserved: !1 }],
          ['s', { reserved: !1 }],
          ['samp', { reserved: !1 }],
          ['script', { reserved: !0 }],
          ['section', { reserved: !1 }],
          ['select', { reserved: !1 }],
          ['small', { reserved: !1 }],
          ['source', { reserved: !0 }],
          ['spacer', { reserved: !1 }],
          ['span', { reserved: !1 }],
          ['strike', { reserved: !1 }],
          ['strong', { reserved: !1 }],
          ['style', { reserved: !0 }],
          ['sub', { reserved: !1 }],
          ['summary', { reserved: !1 }],
          ['sup', { reserved: !1 }],
          ['table', { reserved: !1 }],
          ['tbody', { reserved: !1 }],
          ['td', { reserved: !1 }],
          ['textarea', { reserved: !1 }],
          ['tfoot', { reserved: !1 }],
          ['th', { reserved: !1 }],
          ['thead', { reserved: !1 }],
          ['time', { reserved: !1 }],
          ['title', { reserved: !0 }],
          ['tr', { reserved: !1 }],
          ['track', { reserved: !0 }],
          ['tt', { reserved: !1 }],
          ['u', { reserved: !1 }],
          ['ul', { reserved: !1 }],
          ['var', { reserved: !1 }],
          ['video', { reserved: !1 }],
          ['wbr', { reserved: !1 }],
          ['xmp', { reserved: !1 }],
        ],
        f = {
          entries: function () {
            return u;
          },
          forEach: function (p) {
            var m =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : null,
              y = i(u),
              g;
            try {
              for (y.s(); !(g = y.n()).done; ) {
                var h = o(g.value, 2),
                  v = h[0],
                  S = h[1];
                p.call(m, S, v, u);
              }
            } catch (E) {
              y.e(E);
            } finally {
              y.f();
            }
          },
          get: function (p) {
            var m = u.find(function (y) {
              return y[0] === p;
            });
            return m && m[1];
          },
          has: function (p) {
            return !!f.get(p);
          },
          keys: function () {
            return u.map(function (p) {
              var m = o(p, 1),
                y = m[0];
              return y;
            });
          },
          values: function () {
            return u.map(function (p) {
              var m = o(p, 2),
                y = m[1];
              return y;
            });
          },
        },
        d = (0, t.default)(f, f.entries());
      e.default = d;
    },
  }),
  vy = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/commandRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget']],
        },
        r = t;
      e.default = r;
    },
  }),
  _y = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-activedescendant': null, 'aria-disabled': null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ey = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/inputRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-disabled': null },
          relatedConcepts: [{ concept: { name: 'input' }, module: 'XForms' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget']],
        },
        r = t;
      e.default = r;
    },
  }),
  wy = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Sy = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-valuemax': null,
            'aria-valuemin': null,
            'aria-valuenow': null,
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Cy = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {
            'aria-atomic': null,
            'aria-busy': null,
            'aria-controls': null,
            'aria-current': null,
            'aria-describedby': null,
            'aria-details': null,
            'aria-dropeffect': null,
            'aria-flowto': null,
            'aria-grabbed': null,
            'aria-hidden': null,
            'aria-keyshortcuts': null,
            'aria-label': null,
            'aria-labelledby': null,
            'aria-live': null,
            'aria-owns': null,
            'aria-relevant': null,
            'aria-roledescription': null,
          },
          relatedConcepts: [
            { concept: { name: 'rel' }, module: 'HTML' },
            { concept: { name: 'role' }, module: 'XHTML' },
            { concept: { name: 'type' }, module: 'Dublin Core' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [],
        },
        r = t;
      e.default = r;
    },
  }),
  Oy = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'frontmatter' }, module: 'DTB' },
            { concept: { name: 'level' }, module: 'DTB' },
            { concept: { name: 'level' }, module: 'SMIL' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Py = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ry = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/selectRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-orientation': null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite'],
            ['roletype', 'structure', 'section', 'group'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Ty = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/structureRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ay = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype']],
        },
        r = t;
      e.default = r;
    },
  }),
  qy = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/windowRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-modal': null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype']],
        },
        r = t;
      e.default = r;
    },
  }),
  xy = P({
    '../../node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = p(vy()),
        r = p(_y()),
        o = p(Ey()),
        a = p(wy()),
        c = p(Sy()),
        n = p(Cy()),
        i = p(Oy()),
        l = p(Py()),
        s = p(Ry()),
        u = p(Ty()),
        f = p(Ay()),
        d = p(qy());
      function p(g) {
        return g && g.__esModule ? g : { default: g };
      }
      var m = [
          ['command', t.default],
          ['composite', r.default],
          ['input', o.default],
          ['landmark', a.default],
          ['range', c.default],
          ['roletype', n.default],
          ['section', i.default],
          ['sectionhead', l.default],
          ['select', s.default],
          ['structure', u.default],
          ['widget', f.default],
          ['window', d.default],
        ],
        y = m;
      e.default = y;
    },
  }),
  My = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/alertRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-atomic': 'true', 'aria-live': 'assertive' },
          relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  jy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'alert'],
            ['roletype', 'window', 'dialog'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Iy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/applicationRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-activedescendant': null,
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'Device Independence Delivery Unit' } },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ny = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/articleRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-posinset': null, 'aria-setsize': null },
          relatedConcepts: [{ concept: { name: 'article' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'document']],
        },
        r = t;
      e.default = r;
    },
  }),
  By = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/bannerRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                constraints: ['direct descendant of document'],
                name: 'header',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  $y = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Dy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/buttonRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-pressed': null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'aria-pressed' },
                  { name: 'type', value: 'checkbox' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ name: 'aria-expanded', value: 'false' }],
                name: 'summary',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ name: 'aria-expanded', value: 'true' }],
                constraints: [
                  'direct descendant of details element with the open attribute defined',
                ],
                name: 'summary',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ name: 'type', value: 'button' }],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ name: 'type', value: 'image' }],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ name: 'type', value: 'reset' }],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ name: 'type', value: 'submit' }],
                name: 'input',
              },
              module: 'HTML',
            },
            { concept: { name: 'button' }, module: 'HTML' },
            { concept: { name: 'trigger' }, module: 'XForms' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command']],
        },
        r = t;
      e.default = r;
    },
  }),
  ky = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/captionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: ['figure', 'grid', 'table'],
          requiredContextRole: ['figure', 'grid', 'table'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ly = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/cellRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-colindex': null,
            'aria-colspan': null,
            'aria-rowindex': null,
            'aria-rowspan': null,
          },
          relatedConcepts: [
            {
              concept: { constraints: ['descendant of table'], name: 'td' },
              module: 'HTML',
            },
          ],
          requireContextRole: ['row'],
          requiredContextRole: ['row'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Fy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-checked': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'type', value: 'checkbox' }],
                name: 'input',
              },
              module: 'HTML',
            },
            { concept: { name: 'option' }, module: 'ARIA' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  Uy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/codeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Hy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-sort': null },
          relatedConcepts: [
            {
              attributes: [{ name: 'scope', value: 'col' }],
              concept: { name: 'th' },
              module: 'HTML',
            },
          ],
          requireContextRole: ['row'],
          requiredContextRole: ['row'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'cell'],
            ['roletype', 'structure', 'section', 'cell', 'gridcell'],
            ['roletype', 'widget', 'gridcell'],
            ['roletype', 'structure', 'sectionhead'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  zy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-activedescendant': null,
            'aria-autocomplete': null,
            'aria-errormessage': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
            'aria-expanded': 'false',
            'aria-haspopup': 'listbox',
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'email' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'search' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'tel' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'text' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'url' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'url' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'multiple' },
                  { constraints: ['undefined'], name: 'size' },
                ],
                name: 'select',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'multiple' },
                  { name: 'size', value: 1 },
                ],
                name: 'select',
              },
              module: 'HTML',
            },
            { concept: { name: 'select' }, module: 'XForms' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-controls': null, 'aria-expanded': 'false' },
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  Vy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'aside' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Wy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                constraints: ['direct descendant of document'],
                name: 'footer',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Gy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/definitionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'dd' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ky = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/deletionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Yy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/dialogRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'dialog' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'window']],
        },
        r = t;
      e.default = r;
    },
  }),
  Jy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/directoryRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ module: 'DAISY Guide' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'list']],
        },
        r = t;
      e.default = r;
    },
  }),
  Xy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/documentRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'Device Independence Delivery Unit' } },
            { concept: { name: 'body' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Qy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Zy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/feedRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['article']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'list']],
        },
        r = t;
      e.default = r;
    },
  }),
  eh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/figureRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'figure' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  th = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/formRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'aria-label' }],
                name: 'form',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
                name: 'form',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'name' }],
                name: 'form',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  rh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/genericRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [
            { concept: { name: 'span' }, module: 'HTML' },
            { concept: { name: 'div' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  nh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/gridRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-multiselectable': null, 'aria-readonly': null },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'role', value: 'grid' }],
                name: 'table',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['row'], ['row', 'rowgroup']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite'],
            ['roletype', 'structure', 'section', 'table'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  oh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
            'aria-selected': null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'role', value: 'gridcell' }],
                name: 'td',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: ['row'],
          requiredContextRole: ['row'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'cell'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  ah = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/groupRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-activedescendant': null, 'aria-disabled': null },
          relatedConcepts: [
            { concept: { name: 'details' }, module: 'HTML' },
            { concept: { name: 'fieldset' }, module: 'HTML' },
            { concept: { name: 'optgroup' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  ih = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/headingRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-level': '2' },
          relatedConcepts: [
            { concept: { name: 'h1' }, module: 'HTML' },
            { concept: { name: 'h2' }, module: 'HTML' },
            { concept: { name: 'h3' }, module: 'HTML' },
            { concept: { name: 'h4' }, module: 'HTML' },
            { concept: { name: 'h5' }, module: 'HTML' },
            { concept: { name: 'h6' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-level': '2' },
          superClass: [['roletype', 'structure', 'sectionhead']],
        },
        r = t;
      e.default = r;
    },
  }),
  lh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/imgRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'alt' }],
                name: 'img',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ constraints: ['undefined'], name: 'alt' }],
                name: 'img',
              },
              module: 'HTML',
            },
            { concept: { name: 'imggroup' }, module: 'DTB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  sh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/insertionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  uh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/linkRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-expanded': null,
            'aria-haspopup': null,
          },
          relatedConcepts: [
            {
              concept: { attributes: [{ name: 'href' }], name: 'a' },
              module: 'HTML',
            },
            {
              concept: { attributes: [{ name: 'href' }], name: 'area' },
              module: 'HTML',
            },
            {
              concept: { attributes: [{ name: 'href' }], name: 'link' },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command']],
        },
        r = t;
      e.default = r;
    },
  }),
  ch = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/listRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'menu' }, module: 'HTML' },
            { concept: { name: 'ol' }, module: 'HTML' },
            { concept: { name: 'ul' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['listitem']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  dh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/listboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-invalid': null,
            'aria-multiselectable': null,
            'aria-readonly': null,
            'aria-required': null,
            'aria-orientation': 'vertical',
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ['>1'], name: 'size' },
                  { name: 'multiple' },
                ],
                name: 'select',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ constraints: ['>1'], name: 'size' }],
                name: 'select',
              },
              module: 'HTML',
            },
            {
              concept: { attributes: [{ name: 'multiple' }], name: 'select' },
              module: 'HTML',
            },
            { concept: { name: 'datalist' }, module: 'HTML' },
            { concept: { name: 'list' }, module: 'ARIA' },
            { concept: { name: 'select' }, module: 'XForms' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['option', 'group'], ['option']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select'],
            ['roletype', 'structure', 'section', 'group', 'select'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  fh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/listitemRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-level': null,
            'aria-posinset': null,
            'aria-setsize': null,
          },
          relatedConcepts: [
            {
              concept: {
                constraints: ['direct descendant of ol, ul or menu'],
                name: 'li',
              },
              module: 'HTML',
            },
            { concept: { name: 'item' }, module: 'XForms' },
          ],
          requireContextRole: ['directory', 'list'],
          requiredContextRole: ['directory', 'list'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  ph = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/logRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-live': 'polite' },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  mh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/mainRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'main' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  yh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  hh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/mathRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'math' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  bh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/menuRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-orientation': 'vertical' },
          relatedConcepts: [
            { concept: { name: 'MENU' }, module: 'JAPI' },
            { concept: { name: 'list' }, module: 'ARIA' },
            { concept: { name: 'select' }, module: 'XForms' },
            { concept: { name: 'sidebar' }, module: 'DTB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [
            ['menuitem', 'group'],
            ['menuitemradio', 'group'],
            ['menuitemcheckbox', 'group'],
            ['menuitem'],
            ['menuitemcheckbox'],
            ['menuitemradio'],
          ],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select'],
            ['roletype', 'structure', 'section', 'group', 'select'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  gh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/menubarRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-orientation': 'horizontal' },
          relatedConcepts: [{ concept: { name: 'toolbar' }, module: 'ARIA' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [
            ['menuitem', 'group'],
            ['menuitemradio', 'group'],
            ['menuitemcheckbox', 'group'],
            ['menuitem'],
            ['menuitemcheckbox'],
            ['menuitemradio'],
          ],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select', 'menu'],
            ['roletype', 'structure', 'section', 'group', 'select', 'menu'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  vh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-posinset': null,
            'aria-setsize': null,
          },
          relatedConcepts: [
            { concept: { name: 'MENU_ITEM' }, module: 'JAPI' },
            { concept: { name: 'listitem' }, module: 'ARIA' },
            { concept: { name: 'menuitem' }, module: 'HTML' },
            { concept: { name: 'option' }, module: 'ARIA' },
          ],
          requireContextRole: ['group', 'menu', 'menubar'],
          requiredContextRole: ['group', 'menu', 'menubar'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command']],
        },
        r = t;
      e.default = r;
    },
  }),
  _h = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
          requireContextRole: ['group', 'menu', 'menubar'],
          requiredContextRole: ['group', 'menu', 'menubar'],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [
            ['roletype', 'widget', 'input', 'checkbox'],
            ['roletype', 'widget', 'command', 'menuitem'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Eh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
          requireContextRole: ['group', 'menu', 'menubar'],
          requiredContextRole: ['group', 'menu', 'menubar'],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [
            ['roletype', 'widget', 'input', 'checkbox', 'menuitemcheckbox'],
            ['roletype', 'widget', 'command', 'menuitem', 'menuitemcheckbox'],
            ['roletype', 'widget', 'input', 'radio'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  wh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/meterRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-valuetext': null,
            'aria-valuemax': '100',
            'aria-valuemin': '0',
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-valuenow': null },
          superClass: [['roletype', 'structure', 'range']],
        },
        r = t;
      e.default = r;
    },
  }),
  Sh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/navigationRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'nav' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ch = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/noneRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [],
        },
        r = t;
      e.default = r;
    },
  }),
  Oh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/noteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ph = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/optionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-checked': null,
            'aria-posinset': null,
            'aria-setsize': null,
            'aria-selected': 'false',
          },
          relatedConcepts: [
            { concept: { name: 'item' }, module: 'XForms' },
            { concept: { name: 'listitem' }, module: 'ARIA' },
            { concept: { name: 'option' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-selected': 'false' },
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  Rh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Th = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/presentationRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ah = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-valuetext': null },
          relatedConcepts: [
            { concept: { name: 'progress' }, module: 'HTML' },
            { concept: { name: 'status' }, module: 'ARIA' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'range'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  qh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/radioRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-checked': null,
            'aria-posinset': null,
            'aria-setsize': null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'type', value: 'radio' }],
                name: 'input',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  xh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
          },
          relatedConcepts: [{ concept: { name: 'list' }, module: 'ARIA' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['radio']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select'],
            ['roletype', 'structure', 'section', 'group', 'select'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Mh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/regionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'aria-label' }],
                name: 'section',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
                name: 'section',
              },
              module: 'HTML',
            },
            {
              concept: {
                name: 'Device Independence Glossart perceivable unit',
              },
            },
            { concept: { name: 'frame' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  jh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/rowRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-colindex': null,
            'aria-expanded': null,
            'aria-level': null,
            'aria-posinset': null,
            'aria-rowindex': null,
            'aria-selected': null,
            'aria-setsize': null,
          },
          relatedConcepts: [{ concept: { name: 'tr' }, module: 'HTML' }],
          requireContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
          requiredContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
          requiredOwnedElements: [
            ['cell'],
            ['columnheader'],
            ['gridcell'],
            ['rowheader'],
          ],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'group'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Ih = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'tbody' }, module: 'HTML' },
            { concept: { name: 'tfoot' }, module: 'HTML' },
            { concept: { name: 'thead' }, module: 'HTML' },
          ],
          requireContextRole: ['grid', 'table', 'treegrid'],
          requiredContextRole: ['grid', 'table', 'treegrid'],
          requiredOwnedElements: [['row']],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Nh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-sort': null },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'scope', value: 'row' }],
                name: 'th',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ name: 'scope', value: 'rowgroup' }],
                name: 'th',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: ['row', 'rowgroup'],
          requiredContextRole: ['row', 'rowgroup'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'cell'],
            ['roletype', 'structure', 'section', 'cell', 'gridcell'],
            ['roletype', 'widget', 'gridcell'],
            ['roletype', 'structure', 'sectionhead'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Bh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-valuetext': null,
            'aria-orientation': 'vertical',
            'aria-valuemax': '100',
            'aria-valuemin': '0',
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-controls': null, 'aria-valuenow': null },
          superClass: [
            ['roletype', 'structure', 'range'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  $h = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/searchRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Dh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'search' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'input', 'textbox']],
        },
        r = t;
      e.default = r;
    },
  }),
  kh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/separatorRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-orientation': 'horizontal',
            'aria-valuemax': '100',
            'aria-valuemin': '0',
            'aria-valuenow': null,
            'aria-valuetext': null,
          },
          relatedConcepts: [{ concept: { name: 'hr' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Lh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/sliderRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-haspopup': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-valuetext': null,
            'aria-orientation': 'horizontal',
            'aria-valuemax': '100',
            'aria-valuemin': '0',
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'type', value: 'range' }],
                name: 'input',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-valuenow': null },
          superClass: [
            ['roletype', 'widget', 'input'],
            ['roletype', 'structure', 'range'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Fh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
            'aria-valuetext': null,
            'aria-valuenow': '0',
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ name: 'type', value: 'number' }],
                name: 'input',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite'],
            ['roletype', 'widget', 'input'],
            ['roletype', 'structure', 'range'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Uh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/statusRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-atomic': 'true', 'aria-live': 'polite' },
          relatedConcepts: [{ concept: { name: 'output' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Hh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/strongRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  zh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Vh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Wh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/switchRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'button' }, module: 'ARIA' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [['roletype', 'widget', 'input', 'checkbox']],
        },
        r = t;
      e.default = r;
    },
  }),
  Gh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/tabRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-posinset': null,
            'aria-setsize': null,
            'aria-selected': 'false',
          },
          relatedConcepts: [],
          requireContextRole: ['tablist'],
          requiredContextRole: ['tablist'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'sectionhead'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Kh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/tableRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-colcount': null, 'aria-rowcount': null },
          relatedConcepts: [{ concept: { name: 'table' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['row'], ['row', 'rowgroup']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Yh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/tablistRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-level': null,
            'aria-multiselectable': null,
            'aria-orientation': 'horizontal',
          },
          relatedConcepts: [{ module: 'DAISY', concept: { name: 'guide' } }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['tab']],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'composite']],
        },
        r = t;
      e.default = r;
    },
  }),
  Jh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Xh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/termRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'dfn' }, module: 'HTML' },
            { concept: { name: 'dt' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Qh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/textboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-activedescendant': null,
            'aria-autocomplete': null,
            'aria-errormessage': null,
            'aria-haspopup': null,
            'aria-invalid': null,
            'aria-multiline': null,
            'aria-placeholder': null,
            'aria-readonly': null,
            'aria-required': null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'type' },
                  { constraints: ['undefined'], name: 'list' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'email' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'tel' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'text' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'url' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            { concept: { name: 'input' }, module: 'XForms' },
            { concept: { name: 'textarea' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  Zh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/timeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  eb = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/timerRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'status']],
        },
        r = t;
      e.default = r;
    },
  }),
  tb = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-orientation': 'horizontal' },
          relatedConcepts: [{ concept: { name: 'menubar' }, module: 'ARIA' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'group']],
        },
        r = t;
      e.default = r;
    },
  }),
  rb = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  nb = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/treeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-invalid': null,
            'aria-multiselectable': null,
            'aria-required': null,
            'aria-orientation': 'vertical',
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['treeitem', 'group'], ['treeitem']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select'],
            ['roletype', 'structure', 'section', 'group', 'select'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  ob = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/treegridRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['row'], ['row', 'rowgroup']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'grid'],
            ['roletype', 'structure', 'section', 'table', 'grid'],
            ['roletype', 'widget', 'composite', 'select', 'tree'],
            ['roletype', 'structure', 'section', 'group', 'select', 'tree'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  ab = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-expanded': null, 'aria-haspopup': null },
          relatedConcepts: [],
          requireContextRole: ['group', 'tree'],
          requiredContextRole: ['group', 'tree'],
          requiredOwnedElements: [],
          requiredProps: { 'aria-selected': null },
          superClass: [
            ['roletype', 'structure', 'section', 'listitem'],
            ['roletype', 'widget', 'input', 'option'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  ib = P({
    '../../node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = te(My()),
        r = te(jy()),
        o = te(Iy()),
        a = te(Ny()),
        c = te(By()),
        n = te($y()),
        i = te(Dy()),
        l = te(ky()),
        s = te(Ly()),
        u = te(Fy()),
        f = te(Uy()),
        d = te(Hy()),
        p = te(zy()),
        m = te(Vy()),
        y = te(Wy()),
        g = te(Gy()),
        h = te(Ky()),
        v = te(Yy()),
        S = te(Jy()),
        E = te(Xy()),
        C = te(Qy()),
        A = te(Zy()),
        R = te(eh()),
        _ = te(th()),
        O = te(rh()),
        x = te(nh()),
        I = te(oh()),
        H = te(ah()),
        V = te(ih()),
        L = te(lh()),
        re = te(sh()),
        G = te(uh()),
        oe = te(ch()),
        ae = te(dh()),
        ue = te(fh()),
        Z = te(ph()),
        q = te(mh()),
        M = te(yh()),
        F = te(hh()),
        z = te(bh()),
        X = te(gh()),
        B = te(vh()),
        D = te(_h()),
        U = te(Eh()),
        ee = te(wh()),
        b = te(Sh()),
        N = te(Ch()),
        $ = te(Oh()),
        Y = te(Ph()),
        W = te(Rh()),
        k = te(Th()),
        ie = te(Ah()),
        se = te(qh()),
        fe = te(xh()),
        Te = te(Mh()),
        lt = te(jh()),
        st = te(Ih()),
        Ve = te(Nh()),
        Ye = te(Bh()),
        ut = te($h()),
        $e = te(Dh()),
        Oe = te(kh()),
        Je = te(Lh()),
        Pe = te(Fh()),
        Ae = te(Uh()),
        Me = te(Hh()),
        Xe = te(zh()),
        Mt = te(Vh()),
        dt = te(Wh()),
        De = te(Gh()),
        K = te(Kh()),
        Q = te(Yh()),
        ye = te(Jh()),
        w = te(Xh()),
        T = te(Qh()),
        j = te(Zh()),
        J = te(eb()),
        ne = te(tb()),
        le = te(rb()),
        ce = te(nb()),
        de = te(ob()),
        me = te(ab());
      function te(Ue) {
        return Ue && Ue.__esModule ? Ue : { default: Ue };
      }
      var ve = [
          ['alert', t.default],
          ['alertdialog', r.default],
          ['application', o.default],
          ['article', a.default],
          ['banner', c.default],
          ['blockquote', n.default],
          ['button', i.default],
          ['caption', l.default],
          ['cell', s.default],
          ['checkbox', u.default],
          ['code', f.default],
          ['columnheader', d.default],
          ['combobox', p.default],
          ['complementary', m.default],
          ['contentinfo', y.default],
          ['definition', g.default],
          ['deletion', h.default],
          ['dialog', v.default],
          ['directory', S.default],
          ['document', E.default],
          ['emphasis', C.default],
          ['feed', A.default],
          ['figure', R.default],
          ['form', _.default],
          ['generic', O.default],
          ['grid', x.default],
          ['gridcell', I.default],
          ['group', H.default],
          ['heading', V.default],
          ['img', L.default],
          ['insertion', re.default],
          ['link', G.default],
          ['list', oe.default],
          ['listbox', ae.default],
          ['listitem', ue.default],
          ['log', Z.default],
          ['main', q.default],
          ['marquee', M.default],
          ['math', F.default],
          ['menu', z.default],
          ['menubar', X.default],
          ['menuitem', B.default],
          ['menuitemcheckbox', D.default],
          ['menuitemradio', U.default],
          ['meter', ee.default],
          ['navigation', b.default],
          ['none', N.default],
          ['note', $.default],
          ['option', Y.default],
          ['paragraph', W.default],
          ['presentation', k.default],
          ['progressbar', ie.default],
          ['radio', se.default],
          ['radiogroup', fe.default],
          ['region', Te.default],
          ['row', lt.default],
          ['rowgroup', st.default],
          ['rowheader', Ve.default],
          ['scrollbar', Ye.default],
          ['search', ut.default],
          ['searchbox', $e.default],
          ['separator', Oe.default],
          ['slider', Je.default],
          ['spinbutton', Pe.default],
          ['status', Ae.default],
          ['strong', Me.default],
          ['subscript', Xe.default],
          ['superscript', Mt.default],
          ['switch', dt.default],
          ['tab', De.default],
          ['table', K.default],
          ['tablist', Q.default],
          ['tabpanel', ye.default],
          ['term', w.default],
          ['textbox', T.default],
          ['time', j.default],
          ['timer', J.default],
          ['toolbar', ne.default],
          ['tooltip', le.default],
          ['tree', ce.default],
          ['treegrid', de.default],
          ['treeitem', me.default],
        ],
        Re = ve;
      e.default = Re;
    },
  }),
  lb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'abstract [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  sb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'acknowledgments [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  ub = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'afterword [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  cb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'appendix [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  db = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'content'],
          prohibitedProps: [],
          props: { 'aria-errormessage': null, 'aria-invalid': null },
          relatedConcepts: [
            { concept: { name: 'referrer [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command', 'link']],
        },
        r = t;
      e.default = r;
    },
  }),
  fb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            {
              concept: { name: 'EPUB biblioentry [EPUB-SSV]' },
              module: 'EPUB',
            },
          ],
          requireContextRole: ['doc-bibliography'],
          requiredContextRole: ['doc-bibliography'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'listitem']],
        },
        r = t;
      e.default = r;
    },
  }),
  pb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'bibliography [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['doc-biblioentry']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  mb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-errormessage': null, 'aria-invalid': null },
          relatedConcepts: [
            { concept: { name: 'biblioref [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command', 'link']],
        },
        r = t;
      e.default = r;
    },
  }),
  yb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'chapter [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  hb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'colophon [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  bb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'conclusion [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  gb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'cover [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'img']],
        },
        r = t;
      e.default = r;
    },
  }),
  vb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'credit [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  _b = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'credits [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Eb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'dedication [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  wb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'rearnote [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: ['doc-endnotes'],
          requiredContextRole: ['doc-endnotes'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'listitem']],
        },
        r = t;
      e.default = r;
    },
  }),
  Sb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'rearnotes [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['doc-endnote']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Cb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'epigraph [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ob = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'epilogue [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Pb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'errata [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Rb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Tb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'footnote [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ab = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'foreword [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  qb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'glossary [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['definition'], ['term']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  xb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-errormessage': null, 'aria-invalid': null },
          relatedConcepts: [
            { concept: { name: 'glossref [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command', 'link']],
        },
        r = t;
      e.default = r;
    },
  }),
  Mb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'index [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'landmark', 'navigation'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  jb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'introduction [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ib = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-errormessage': null, 'aria-invalid': null },
          relatedConcepts: [
            { concept: { name: 'noteref [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command', 'link']],
        },
        r = t;
      e.default = r;
    },
  }),
  Nb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'notice [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'note']],
        },
        r = t;
      e.default = r;
    },
  }),
  Bb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'pagebreak [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'separator']],
        },
        r = t;
      e.default = r;
    },
  }),
  $b = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'page-list [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'landmark', 'navigation'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Db = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'part [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  kb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'preface [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Lb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'prologue [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Fb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'pullquote [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['none']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ub = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'qna [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Hb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'subtitle [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'sectionhead']],
        },
        r = t;
      e.default = r;
    },
  }),
  zb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'help [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'note']],
        },
        r = t;
      e.default = r;
    },
  }),
  Vb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { concept: { name: 'toc [EPUB-SSV]' }, module: 'EPUB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'landmark', 'navigation'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Wb = P({
    '../../node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = z(lb()),
        r = z(sb()),
        o = z(ub()),
        a = z(cb()),
        c = z(db()),
        n = z(fb()),
        i = z(pb()),
        l = z(mb()),
        s = z(yb()),
        u = z(hb()),
        f = z(bb()),
        d = z(gb()),
        p = z(vb()),
        m = z(_b()),
        y = z(Eb()),
        g = z(wb()),
        h = z(Sb()),
        v = z(Cb()),
        S = z(Ob()),
        E = z(Pb()),
        C = z(Rb()),
        A = z(Tb()),
        R = z(Ab()),
        _ = z(qb()),
        O = z(xb()),
        x = z(Mb()),
        I = z(jb()),
        H = z(Ib()),
        V = z(Nb()),
        L = z(Bb()),
        re = z($b()),
        G = z(Db()),
        oe = z(kb()),
        ae = z(Lb()),
        ue = z(Fb()),
        Z = z(Ub()),
        q = z(Hb()),
        M = z(zb()),
        F = z(Vb());
      function z(D) {
        return D && D.__esModule ? D : { default: D };
      }
      var X = [
          ['doc-abstract', t.default],
          ['doc-acknowledgments', r.default],
          ['doc-afterword', o.default],
          ['doc-appendix', a.default],
          ['doc-backlink', c.default],
          ['doc-biblioentry', n.default],
          ['doc-bibliography', i.default],
          ['doc-biblioref', l.default],
          ['doc-chapter', s.default],
          ['doc-colophon', u.default],
          ['doc-conclusion', f.default],
          ['doc-cover', d.default],
          ['doc-credit', p.default],
          ['doc-credits', m.default],
          ['doc-dedication', y.default],
          ['doc-endnote', g.default],
          ['doc-endnotes', h.default],
          ['doc-epigraph', v.default],
          ['doc-epilogue', S.default],
          ['doc-errata', E.default],
          ['doc-example', C.default],
          ['doc-footnote', A.default],
          ['doc-foreword', R.default],
          ['doc-glossary', _.default],
          ['doc-glossref', O.default],
          ['doc-index', x.default],
          ['doc-introduction', I.default],
          ['doc-noteref', H.default],
          ['doc-notice', V.default],
          ['doc-pagebreak', L.default],
          ['doc-pagelist', re.default],
          ['doc-part', G.default],
          ['doc-preface', oe.default],
          ['doc-prologue', ae.default],
          ['doc-pullquote', ue.default],
          ['doc-qna', Z.default],
          ['doc-subtitle', q.default],
          ['doc-tip', M.default],
          ['doc-toc', F.default],
        ],
        B = X;
      e.default = B;
    },
  }),
  Gb = P({
    '../../node_modules/aria-query/lib/etc/roles/graphics/graphicsDocumentRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { module: 'GRAPHICS', concept: { name: 'graphics-object' } },
            { module: 'ARIA', concept: { name: 'img' } },
            { module: 'ARIA', concept: { name: 'article' } },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'document']],
        },
        r = t;
      e.default = r;
    },
  }),
  Kb = P({
    '../../node_modules/aria-query/lib/etc/roles/graphics/graphicsObjectRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { module: 'GRAPHICS', concept: { name: 'graphics-document' } },
            { module: 'ARIA', concept: { name: 'group' } },
            { module: 'ARIA', concept: { name: 'img' } },
            { module: 'GRAPHICS', concept: { name: 'graphics-symbol' } },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'group']],
        },
        r = t;
      e.default = r;
    },
  }),
  Yb = P({
    '../../node_modules/aria-query/lib/etc/roles/graphics/graphicsSymbolRole.js'(
      e
    ) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'img']],
        },
        r = t;
      e.default = r;
    },
  }),
  Jb = P({
    '../../node_modules/aria-query/lib/etc/roles/ariaGraphicsRoles.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = a(Gb()),
        r = a(Kb()),
        o = a(Yb());
      function a(i) {
        return i && i.__esModule ? i : { default: i };
      }
      var c = [
          ['graphics-document', t.default],
          ['graphics-object', r.default],
          ['graphics-symbol', o.default],
        ],
        n = c;
      e.default = n;
    },
  }),
  Jo = P({
    '../../node_modules/aria-query/lib/rolesMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = n(xy()),
        r = n(ib()),
        o = n(Wb()),
        a = n(Jb()),
        c = n(Lr());
      function n(v) {
        return v && v.__esModule ? v : { default: v };
      }
      function i(v, S, E) {
        return (
          S in v
            ? Object.defineProperty(v, S, {
                value: E,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (v[S] = E),
          v
        );
      }
      function l(v, S) {
        var E = (typeof Symbol < 'u' && v[Symbol.iterator]) || v['@@iterator'];
        if (!E) {
          if (
            Array.isArray(v) ||
            (E = f(v)) ||
            (S && v && typeof v.length == 'number')
          ) {
            E && (v = E);
            var C = 0,
              A = function () {};
            return {
              s: A,
              n: function () {
                return C >= v.length
                  ? { done: !0 }
                  : { done: !1, value: v[C++] };
              },
              e: function (x) {
                throw x;
              },
              f: A,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var R = !0,
          _ = !1,
          O;
        return {
          s: function () {
            E = E.call(v);
          },
          n: function () {
            var x = E.next();
            return (R = x.done), x;
          },
          e: function (x) {
            (_ = !0), (O = x);
          },
          f: function () {
            try {
              !R && E.return != null && E.return();
            } finally {
              if (_) throw O;
            }
          },
        };
      }
      function s(v, S) {
        return m(v) || p(v, S) || f(v, S) || u();
      }
      function u() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function f(v, S) {
        if (v) {
          if (typeof v == 'string') return d(v, S);
          var E = Object.prototype.toString.call(v).slice(8, -1);
          if (
            (E === 'Object' && v.constructor && (E = v.constructor.name),
            E === 'Map' || E === 'Set')
          )
            return Array.from(v);
          if (
            E === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)
          )
            return d(v, S);
        }
      }
      function d(v, S) {
        (S == null || S > v.length) && (S = v.length);
        for (var E = 0, C = new Array(S); E < S; E++) C[E] = v[E];
        return C;
      }
      function p(v, S) {
        var E =
          v == null
            ? null
            : (typeof Symbol < 'u' && v[Symbol.iterator]) || v['@@iterator'];
        if (E != null) {
          var C = [],
            A = !0,
            R = !1,
            _,
            O;
          try {
            for (
              E = E.call(v);
              !(A = (_ = E.next()).done) &&
              (C.push(_.value), !(S && C.length === S));
              A = !0
            );
          } catch (x) {
            (R = !0), (O = x);
          } finally {
            try {
              !A && E.return != null && E.return();
            } finally {
              if (R) throw O;
            }
          }
          return C;
        }
      }
      function m(v) {
        if (Array.isArray(v)) return v;
      }
      var y = [].concat(t.default, r.default, o.default, a.default);
      y.forEach(function (v) {
        var S = s(v, 2),
          E = S[1],
          C = l(E.superClass),
          A;
        try {
          for (C.s(); !(A = C.n()).done; ) {
            var R = A.value,
              _ = l(R),
              O;
            try {
              var x = function () {
                var I = O.value,
                  H = y.find(function (oe) {
                    var ae = s(oe, 1),
                      ue = ae[0];
                    return ue === I;
                  });
                if (H)
                  for (
                    var V = H[1], L = 0, re = Object.keys(V.props);
                    L < re.length;
                    L++
                  ) {
                    var G = re[L];
                    Object.prototype.hasOwnProperty.call(E.props, G) ||
                      Object.assign(E.props, i({}, G, V.props[G]));
                  }
              };
              for (_.s(); !(O = _.n()).done; ) x();
            } catch (I) {
              _.e(I);
            } finally {
              _.f();
            }
          }
        } catch (I) {
          C.e(I);
        } finally {
          C.f();
        }
      });
      var g = {
          entries: function () {
            return y;
          },
          forEach: function (v) {
            var S =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : null,
              E = l(y),
              C;
            try {
              for (E.s(); !(C = E.n()).done; ) {
                var A = s(C.value, 2),
                  R = A[0],
                  _ = A[1];
                v.call(S, _, R, y);
              }
            } catch (O) {
              E.e(O);
            } finally {
              E.f();
            }
          },
          get: function (v) {
            var S = y.find(function (E) {
              return E[0] === v;
            });
            return S && S[1];
          },
          has: function (v) {
            return !!g.get(v);
          },
          keys: function () {
            return y.map(function (v) {
              var S = s(v, 1),
                E = S[0];
              return E;
            });
          },
          values: function () {
            return y.map(function (v) {
              var S = s(v, 2),
                E = S[1];
              return E;
            });
          },
        },
        h = (0, c.default)(g, g.entries());
      e.default = h;
    },
  }),
  rs = P({
    '../../node_modules/object-keys/isArguments.js'(e, t) {
      var r = Object.prototype.toString;
      t.exports = function (o) {
        var a = r.call(o),
          c = a === '[object Arguments]';
        return (
          c ||
            (c =
              a !== '[object Array]' &&
              o !== null &&
              typeof o == 'object' &&
              typeof o.length == 'number' &&
              o.length >= 0 &&
              r.call(o.callee) === '[object Function]'),
          c
        );
      };
    },
  }),
  Xb = P({
    '../../node_modules/object-keys/implementation.js'(e, t) {
      var r;
      Object.keys ||
        ((o = Object.prototype.hasOwnProperty),
        (a = Object.prototype.toString),
        (c = rs()),
        (n = Object.prototype.propertyIsEnumerable),
        (i = !n.call({ toString: null }, 'toString')),
        (l = n.call(function () {}, 'prototype')),
        (s = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor',
        ]),
        (u = function (m) {
          var y = m.constructor;
          return y && y.prototype === m;
        }),
        (f = {
          $applicationCache: !0,
          $console: !0,
          $external: !0,
          $frame: !0,
          $frameElement: !0,
          $frames: !0,
          $innerHeight: !0,
          $innerWidth: !0,
          $onmozfullscreenchange: !0,
          $onmozfullscreenerror: !0,
          $outerHeight: !0,
          $outerWidth: !0,
          $pageXOffset: !0,
          $pageYOffset: !0,
          $parent: !0,
          $scrollLeft: !0,
          $scrollTop: !0,
          $scrollX: !0,
          $scrollY: !0,
          $self: !0,
          $webkitIndexedDB: !0,
          $webkitStorageInfo: !0,
          $window: !0,
        }),
        (d = (function () {
          if (typeof window > 'u') return !1;
          for (var m in window)
            try {
              if (
                !f['$' + m] &&
                o.call(window, m) &&
                window[m] !== null &&
                typeof window[m] == 'object'
              )
                try {
                  u(window[m]);
                } catch {
                  return !0;
                }
            } catch {
              return !0;
            }
          return !1;
        })()),
        (p = function (m) {
          if (typeof window > 'u' || !d) return u(m);
          try {
            return u(m);
          } catch {
            return !1;
          }
        }),
        (r = function (m) {
          var y = m !== null && typeof m == 'object',
            g = a.call(m) === '[object Function]',
            h = c(m),
            v = y && a.call(m) === '[object String]',
            S = [];
          if (!y && !g && !h)
            throw new TypeError('Object.keys called on a non-object');
          var E = l && g;
          if (v && m.length > 0 && !o.call(m, 0))
            for (var C = 0; C < m.length; ++C) S.push(String(C));
          if (h && m.length > 0)
            for (var A = 0; A < m.length; ++A) S.push(String(A));
          else
            for (var R in m)
              !(E && R === 'prototype') && o.call(m, R) && S.push(String(R));
          if (i)
            for (var _ = p(m), O = 0; O < s.length; ++O)
              !(_ && s[O] === 'constructor') && o.call(m, s[O]) && S.push(s[O]);
          return S;
        }));
      var o, a, c, n, i, l, s, u, f, d, p;
      t.exports = r;
    },
  }),
  Xo = P({
    '../../node_modules/object-keys/index.js'(e, t) {
      var r = Array.prototype.slice,
        o = rs(),
        a = Object.keys,
        c = a
          ? function (i) {
              return a(i);
            }
          : Xb(),
        n = Object.keys;
      (c.shim = function () {
        if (Object.keys) {
          var i = (function () {
            var l = Object.keys(arguments);
            return l && l.length === arguments.length;
          })(1, 2);
          i ||
            (Object.keys = function (l) {
              return o(l) ? n(r.call(l)) : n(l);
            });
        } else Object.keys = c;
        return Object.keys || c;
      }),
        (t.exports = c);
    },
  }),
  Rn = P({
    '../../node_modules/has-symbols/shams.js'(e, t) {
      t.exports = function () {
        if (
          typeof Symbol != 'function' ||
          typeof Object.getOwnPropertySymbols != 'function'
        )
          return !1;
        if (typeof Symbol.iterator == 'symbol') return !0;
        var r = {},
          o = Symbol('test'),
          a = Object(o);
        if (
          typeof o == 'string' ||
          Object.prototype.toString.call(o) !== '[object Symbol]' ||
          Object.prototype.toString.call(a) !== '[object Symbol]'
        )
          return !1;
        var c = 42;
        r[o] = c;
        for (o in r) return !1;
        if (
          (typeof Object.keys == 'function' && Object.keys(r).length !== 0) ||
          (typeof Object.getOwnPropertyNames == 'function' &&
            Object.getOwnPropertyNames(r).length !== 0)
        )
          return !1;
        var n = Object.getOwnPropertySymbols(r);
        if (
          n.length !== 1 ||
          n[0] !== o ||
          !Object.prototype.propertyIsEnumerable.call(r, o)
        )
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == 'function') {
          var i = Object.getOwnPropertyDescriptor(r, o);
          if (i.value !== c || i.enumerable !== !0) return !1;
        }
        return !0;
      };
    },
  }),
  Qo = P({
    '../../node_modules/has-symbols/index.js'(e, t) {
      var r = typeof Symbol < 'u' && Symbol,
        o = Rn();
      t.exports = function () {
        return typeof r != 'function' ||
          typeof Symbol != 'function' ||
          typeof r('foo') != 'symbol' ||
          typeof Symbol('bar') != 'symbol'
          ? !1
          : o();
      };
    },
  }),
  Qb = P({
    '../../node_modules/has-proto/index.js'(e, t) {
      var r = { foo: {} },
        o = Object;
      t.exports = function () {
        return (
          { __proto__: r }.foo === r.foo && !({ __proto__: null } instanceof o)
        );
      };
    },
  }),
  Zb = P({
    '../../node_modules/function-bind/implementation.js'(e, t) {
      var r = 'Function.prototype.bind called on incompatible ',
        o = Object.prototype.toString,
        a = Math.max,
        c = '[object Function]',
        n = function (s, u) {
          for (var f = [], d = 0; d < s.length; d += 1) f[d] = s[d];
          for (var p = 0; p < u.length; p += 1) f[p + s.length] = u[p];
          return f;
        },
        i = function (s, u) {
          for (var f = [], d = u || 0, p = 0; d < s.length; d += 1, p += 1)
            f[p] = s[d];
          return f;
        },
        l = function (s, u) {
          for (var f = '', d = 0; d < s.length; d += 1)
            (f += s[d]), d + 1 < s.length && (f += u);
          return f;
        };
      t.exports = function (s) {
        var u = this;
        if (typeof u != 'function' || o.apply(u) !== c)
          throw new TypeError(r + u);
        for (
          var f = i(arguments, 1),
            d,
            p = function () {
              if (this instanceof d) {
                var v = u.apply(this, n(f, arguments));
                return Object(v) === v ? v : this;
              }
              return u.apply(s, n(f, arguments));
            },
            m = a(0, u.length - f.length),
            y = [],
            g = 0;
          g < m;
          g++
        )
          y[g] = '$' + g;
        if (
          ((d = Function(
            'binder',
            'return function (' +
              l(y, ',') +
              '){ return binder.apply(this,arguments); }'
          )(p)),
          u.prototype)
        ) {
          var h = function () {};
          (h.prototype = u.prototype),
            (d.prototype = new h()),
            (h.prototype = null);
        }
        return d;
      };
    },
  }),
  ns = P({
    '../../node_modules/function-bind/index.js'(e, t) {
      var r = Zb();
      t.exports = Function.prototype.bind || r;
    },
  }),
  os = P({
    '../../node_modules/has/src/index.js'(e, t) {
      var r = {}.hasOwnProperty,
        o = Function.prototype.call;
      t.exports = o.bind
        ? o.bind(r)
        : function (a, c) {
            return o.call(r, a, c);
          };
    },
  }),
  tt = P({
    '../../node_modules/get-intrinsic/index.js'(e, t) {
      var r,
        o = SyntaxError,
        a = Function,
        c = TypeError,
        n = function (L) {
          try {
            return a('"use strict"; return (' + L + ').constructor;')();
          } catch {}
        },
        i = Object.getOwnPropertyDescriptor;
      if (i)
        try {
          i({}, '');
        } catch {
          i = null;
        }
      var l = function () {
          throw new c();
        },
        s = i
          ? (function () {
              try {
                return arguments.callee, l;
              } catch {
                try {
                  return i(arguments, 'callee').get;
                } catch {
                  return l;
                }
              }
            })()
          : l,
        u = Qo()(),
        f = Qb()(),
        d =
          Object.getPrototypeOf ||
          (f
            ? function (L) {
                return L.__proto__;
              }
            : null),
        p = {},
        m = typeof Uint8Array > 'u' || !d ? r : d(Uint8Array),
        y = {
          '%AggregateError%': typeof AggregateError > 'u' ? r : AggregateError,
          '%Array%': Array,
          '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
          '%ArrayIteratorPrototype%': u && d ? d([][Symbol.iterator]()) : r,
          '%AsyncFromSyncIteratorPrototype%': r,
          '%AsyncFunction%': p,
          '%AsyncGenerator%': p,
          '%AsyncGeneratorFunction%': p,
          '%AsyncIteratorPrototype%': p,
          '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
          '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
          '%BigInt64Array%': typeof BigInt64Array > 'u' ? r : BigInt64Array,
          '%BigUint64Array%': typeof BigUint64Array > 'u' ? r : BigUint64Array,
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
          '%GeneratorFunction%': p,
          '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
          '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
          '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
          '%isFinite%': isFinite,
          '%isNaN%': isNaN,
          '%IteratorPrototype%': u && d ? d(d([][Symbol.iterator]())) : r,
          '%JSON%': typeof JSON == 'object' ? JSON : r,
          '%Map%': typeof Map > 'u' ? r : Map,
          '%MapIteratorPrototype%':
            typeof Map > 'u' || !u || !d ? r : d(new Map()[Symbol.iterator]()),
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
            typeof Set > 'u' || !u || !d ? r : d(new Set()[Symbol.iterator]()),
          '%SharedArrayBuffer%':
            typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
          '%String%': String,
          '%StringIteratorPrototype%': u && d ? d(''[Symbol.iterator]()) : r,
          '%Symbol%': u ? Symbol : r,
          '%SyntaxError%': o,
          '%ThrowTypeError%': s,
          '%TypedArray%': m,
          '%TypeError%': c,
          '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
          '%Uint8ClampedArray%':
            typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
          '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
          '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
          '%URIError%': URIError,
          '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
          '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
          '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
        };
      if (d)
        try {
          null.error;
        } catch (L) {
          (g = d(d(L))), (y['%Error.prototype%'] = g);
        }
      var g,
        h = function L(re) {
          var G;
          if (re === '%AsyncFunction%') G = n('async function () {}');
          else if (re === '%GeneratorFunction%') G = n('function* () {}');
          else if (re === '%AsyncGeneratorFunction%')
            G = n('async function* () {}');
          else if (re === '%AsyncGenerator%') {
            var oe = L('%AsyncGeneratorFunction%');
            oe && (G = oe.prototype);
          } else if (re === '%AsyncIteratorPrototype%') {
            var ae = L('%AsyncGenerator%');
            ae && d && (G = d(ae.prototype));
          }
          return (y[re] = G), G;
        },
        v = {
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
        S = ns(),
        E = os(),
        C = S.call(Function.call, Array.prototype.concat),
        A = S.call(Function.apply, Array.prototype.splice),
        R = S.call(Function.call, String.prototype.replace),
        _ = S.call(Function.call, String.prototype.slice),
        O = S.call(Function.call, RegExp.prototype.exec),
        x =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        I = /\\(\\)?/g,
        H = function (L) {
          var re = _(L, 0, 1),
            G = _(L, -1);
          if (re === '%' && G !== '%')
            throw new o('invalid intrinsic syntax, expected closing `%`');
          if (G === '%' && re !== '%')
            throw new o('invalid intrinsic syntax, expected opening `%`');
          var oe = [];
          return (
            R(L, x, function (ae, ue, Z, q) {
              oe[oe.length] = Z ? R(q, I, '$1') : ue || ae;
            }),
            oe
          );
        },
        V = function (L, re) {
          var G = L,
            oe;
          if ((E(v, G) && ((oe = v[G]), (G = '%' + oe[0] + '%')), E(y, G))) {
            var ae = y[G];
            if ((ae === p && (ae = h(G)), typeof ae > 'u' && !re))
              throw new c(
                'intrinsic ' +
                  L +
                  ' exists, but is not available. Please file an issue!'
              );
            return { alias: oe, name: G, value: ae };
          }
          throw new o('intrinsic ' + L + ' does not exist!');
        };
      t.exports = function (L, re) {
        if (typeof L != 'string' || L.length === 0)
          throw new c('intrinsic name must be a non-empty string');
        if (arguments.length > 1 && typeof re != 'boolean')
          throw new c('"allowMissing" argument must be a boolean');
        if (O(/^%?[^%]*%?$/, L) === null)
          throw new o(
            '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
          );
        var G = H(L),
          oe = G.length > 0 ? G[0] : '',
          ae = V('%' + oe + '%', re),
          ue = ae.name,
          Z = ae.value,
          q = !1,
          M = ae.alias;
        M && ((oe = M[0]), A(G, C([0, 1], M)));
        for (var F = 1, z = !0; F < G.length; F += 1) {
          var X = G[F],
            B = _(X, 0, 1),
            D = _(X, -1);
          if (
            (B === '"' ||
              B === "'" ||
              B === '`' ||
              D === '"' ||
              D === "'" ||
              D === '`') &&
            B !== D
          )
            throw new o('property names with quotes must have matching quotes');
          if (
            ((X === 'constructor' || !z) && (q = !0),
            (oe += '.' + X),
            (ue = '%' + oe + '%'),
            E(y, ue))
          )
            Z = y[ue];
          else if (Z != null) {
            if (!(X in Z)) {
              if (!re)
                throw new c(
                  'base intrinsic for ' +
                    L +
                    ' exists, but the property is not available.'
                );
              return;
            }
            if (i && F + 1 >= G.length) {
              var U = i(Z, X);
              (z = !!U),
                z && 'get' in U && !('originalValue' in U.get)
                  ? (Z = U.get)
                  : (Z = Z[X]);
            } else (z = E(Z, X)), (Z = Z[X]);
            z && !q && (y[ue] = Z);
          }
        }
        return Z;
      };
    },
  }),
  Tn = P({
    '../../node_modules/has-property-descriptors/index.js'(e, t) {
      var r = tt(),
        o = r('%Object.defineProperty%', !0),
        a = function () {
          if (o)
            try {
              return o({}, 'a', { value: 1 }), !0;
            } catch {
              return !1;
            }
          return !1;
        };
      (a.hasArrayLengthDefineBug = function () {
        if (!a()) return null;
        try {
          return o([], 'length', { value: 1 }).length !== 1;
        } catch {
          return !0;
        }
      }),
        (t.exports = a);
    },
  }),
  Zo = P({
    '../../node_modules/gopd/index.js'(e, t) {
      var r = tt(),
        o = r('%Object.getOwnPropertyDescriptor%', !0);
      if (o)
        try {
          o([], 'length');
        } catch {
          o = null;
        }
      t.exports = o;
    },
  }),
  ea = P({
    '../../node_modules/define-data-property/index.js'(e, t) {
      var r = Tn()(),
        o = tt(),
        a = r && o('%Object.defineProperty%', !0);
      if (a)
        try {
          a({}, 'a', { value: 1 });
        } catch {
          a = !1;
        }
      var c = o('%SyntaxError%'),
        n = o('%TypeError%'),
        i = Zo();
      t.exports = function (l, s, u) {
        if (!l || (typeof l != 'object' && typeof l != 'function'))
          throw new n('`obj` must be an object or a function`');
        if (typeof s != 'string' && typeof s != 'symbol')
          throw new n('`property` must be a string or a symbol`');
        if (
          arguments.length > 3 &&
          typeof arguments[3] != 'boolean' &&
          arguments[3] !== null
        )
          throw new n(
            '`nonEnumerable`, if provided, must be a boolean or null'
          );
        if (
          arguments.length > 4 &&
          typeof arguments[4] != 'boolean' &&
          arguments[4] !== null
        )
          throw new n('`nonWritable`, if provided, must be a boolean or null');
        if (
          arguments.length > 5 &&
          typeof arguments[5] != 'boolean' &&
          arguments[5] !== null
        )
          throw new n(
            '`nonConfigurable`, if provided, must be a boolean or null'
          );
        if (arguments.length > 6 && typeof arguments[6] != 'boolean')
          throw new n('`loose`, if provided, must be a boolean');
        var f = arguments.length > 3 ? arguments[3] : null,
          d = arguments.length > 4 ? arguments[4] : null,
          p = arguments.length > 5 ? arguments[5] : null,
          m = arguments.length > 6 ? arguments[6] : !1,
          y = !!i && i(l, s);
        if (a)
          a(l, s, {
            configurable: p === null && y ? y.configurable : !p,
            enumerable: f === null && y ? y.enumerable : !f,
            value: u,
            writable: d === null && y ? y.writable : !d,
          });
        else if (m || (!f && !d && !p)) l[s] = u;
        else
          throw new c(
            'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.'
          );
      };
    },
  }),
  Ht = P({
    '../../node_modules/define-properties/index.js'(e, t) {
      var r = Xo(),
        o = typeof Symbol == 'function' && typeof Symbol('foo') == 'symbol',
        a = Object.prototype.toString,
        c = Array.prototype.concat,
        n = ea(),
        i = function (f) {
          return typeof f == 'function' && a.call(f) === '[object Function]';
        },
        l = Tn()(),
        s = function (f, d, p, m) {
          if (d in f) {
            if (m === !0) {
              if (f[d] === p) return;
            } else if (!i(m) || !m()) return;
          }
          l ? n(f, d, p, !0) : n(f, d, p);
        },
        u = function (f, d) {
          var p = arguments.length > 2 ? arguments[2] : {},
            m = r(d);
          o && (m = c.call(m, Object.getOwnPropertySymbols(d)));
          for (var y = 0; y < m.length; y += 1) s(f, m[y], d[m[y]], p[m[y]]);
        };
      (u.supportsDescriptors = !!l), (t.exports = u);
    },
  }),
  eg = P({
    '../../node_modules/set-function-length/index.js'(e, t) {
      var r = tt(),
        o = ea(),
        a = Tn()(),
        c = Zo(),
        n = r('%TypeError%'),
        i = r('%Math.floor%');
      t.exports = function (l, s) {
        if (typeof l != 'function') throw new n('`fn` is not a function');
        if (typeof s != 'number' || s < 0 || s > 4294967295 || i(s) !== s)
          throw new n('`length` must be a positive 32-bit integer');
        var u = arguments.length > 2 && !!arguments[2],
          f = !0,
          d = !0;
        if ('length' in l && c) {
          var p = c(l, 'length');
          p && !p.configurable && (f = !1), p && !p.writable && (d = !1);
        }
        return (
          (f || d || !u) && (a ? o(l, 'length', s, !0, !0) : o(l, 'length', s)),
          l
        );
      };
    },
  }),
  mr = P({
    '../../node_modules/call-bind/index.js'(e, t) {
      var r = ns(),
        o = tt(),
        a = eg(),
        c = o('%TypeError%'),
        n = o('%Function.prototype.apply%'),
        i = o('%Function.prototype.call%'),
        l = o('%Reflect.apply%', !0) || r.call(i, n),
        s = o('%Object.defineProperty%', !0),
        u = o('%Math.max%');
      if (s)
        try {
          s({}, 'a', { value: 1 });
        } catch {
          s = null;
        }
      t.exports = function (d) {
        if (typeof d != 'function') throw new c('a function is required');
        var p = l(r, i, arguments);
        return a(p, 1 + u(0, d.length - (arguments.length - 1)), !0);
      };
      var f = function () {
        return l(r, n, arguments);
      };
      s ? s(t.exports, 'apply', { value: f }) : (t.exports.apply = f);
    },
  }),
  rt = P({
    '../../node_modules/call-bind/callBound.js'(e, t) {
      var r = tt(),
        o = mr(),
        a = o(r('String.prototype.indexOf'));
      t.exports = function (c, n) {
        var i = r(c, !!n);
        return typeof i == 'function' && a(c, '.prototype.') > -1 ? o(i) : i;
      };
    },
  }),
  as = P({
    '../../node_modules/object.assign/implementation.js'(e, t) {
      var r = Xo(),
        o = Rn()(),
        a = rt(),
        c = Object,
        n = a('Array.prototype.push'),
        i = a('Object.prototype.propertyIsEnumerable'),
        l = o ? Object.getOwnPropertySymbols : null;
      t.exports = function (s, u) {
        if (s == null) throw new TypeError('target must be an object');
        var f = c(s);
        if (arguments.length === 1) return f;
        for (var d = 1; d < arguments.length; ++d) {
          var p = c(arguments[d]),
            m = r(p),
            y = o && (Object.getOwnPropertySymbols || l);
          if (y)
            for (var g = y(p), h = 0; h < g.length; ++h) {
              var v = g[h];
              i(p, v) && n(m, v);
            }
          for (var S = 0; S < m.length; ++S) {
            var E = m[S];
            if (i(p, E)) {
              var C = p[E];
              f[E] = C;
            }
          }
        }
        return f;
      };
    },
  }),
  is = P({
    '../../node_modules/object.assign/polyfill.js'(e, t) {
      var r = as(),
        o = function () {
          if (!Object.assign) return !1;
          for (
            var c = 'abcdefghijklmnopqrst', n = c.split(''), i = {}, l = 0;
            l < n.length;
            ++l
          )
            i[n[l]] = n[l];
          var s = Object.assign({}, i),
            u = '';
          for (var f in s) u += f;
          return c !== u;
        },
        a = function () {
          if (!Object.assign || !Object.preventExtensions) return !1;
          var c = Object.preventExtensions({ 1: 2 });
          try {
            Object.assign(c, 'xy');
          } catch {
            return c[1] === 'y';
          }
          return !1;
        };
      t.exports = function () {
        return !Object.assign || o() || a() ? r : Object.assign;
      };
    },
  }),
  tg = P({
    '../../node_modules/object.assign/shim.js'(e, t) {
      var r = Ht(),
        o = is();
      t.exports = function () {
        var a = o();
        return (
          r(
            Object,
            { assign: a },
            {
              assign: function () {
                return Object.assign !== a;
              },
            }
          ),
          a
        );
      };
    },
  }),
  rg = P({
    '../../node_modules/object.assign/index.js'(e, t) {
      var r = Ht(),
        o = mr(),
        a = as(),
        c = is(),
        n = tg(),
        i = o.apply(c()),
        l = function (s, u) {
          return i(Object, arguments);
        };
      r(l, { getPolyfill: c, implementation: a, shim: n }), (t.exports = l);
    },
  }),
  ng = P({
    '../../node_modules/functions-have-names/index.js'(e, t) {
      var r = function () {
          return typeof function () {}.name == 'string';
        },
        o = Object.getOwnPropertyDescriptor;
      if (o)
        try {
          o([], 'length');
        } catch {
          o = null;
        }
      r.functionsHaveConfigurableNames = function () {
        if (!r() || !o) return !1;
        var c = o(function () {}, 'name');
        return !!c && !!c.configurable;
      };
      var a = Function.prototype.bind;
      (r.boundFunctionsHaveNames = function () {
        return (
          r() && typeof a == 'function' && function () {}.bind().name !== ''
        );
      }),
        (t.exports = r);
    },
  }),
  og = P({
    '../../node_modules/set-function-name/index.js'(e, t) {
      var r = ea(),
        o = Tn()(),
        a = ng().functionsHaveConfigurableNames(),
        c = TypeError;
      t.exports = function (n, i) {
        if (typeof n != 'function') throw new c('`fn` is not a function');
        var l = arguments.length > 2 && !!arguments[2];
        return (!l || a) && (o ? r(n, 'name', i, !0, !0) : r(n, 'name', i)), n;
      };
    },
  }),
  ls = P({
    '../../node_modules/regexp.prototype.flags/implementation.js'(e, t) {
      var r = og(),
        o = Object,
        a = TypeError;
      t.exports = r(
        function () {
          if (this != null && this !== o(this))
            throw new a('RegExp.prototype.flags getter called on non-object');
          var c = '';
          return (
            this.hasIndices && (c += 'd'),
            this.global && (c += 'g'),
            this.ignoreCase && (c += 'i'),
            this.multiline && (c += 'm'),
            this.dotAll && (c += 's'),
            this.unicode && (c += 'u'),
            this.unicodeSets && (c += 'v'),
            this.sticky && (c += 'y'),
            c
          );
        },
        'get flags',
        !0
      );
    },
  }),
  ss = P({
    '../../node_modules/regexp.prototype.flags/polyfill.js'(e, t) {
      var r = ls(),
        o = Ht().supportsDescriptors,
        a = Object.getOwnPropertyDescriptor;
      t.exports = function () {
        if (o && /a/gim.flags === 'gim') {
          var c = a(RegExp.prototype, 'flags');
          if (
            c &&
            typeof c.get == 'function' &&
            typeof RegExp.prototype.dotAll == 'boolean' &&
            typeof RegExp.prototype.hasIndices == 'boolean'
          ) {
            var n = '',
              i = {};
            if (
              (Object.defineProperty(i, 'hasIndices', {
                get: function () {
                  n += 'd';
                },
              }),
              Object.defineProperty(i, 'sticky', {
                get: function () {
                  n += 'y';
                },
              }),
              n === 'dy')
            )
              return c.get;
          }
        }
        return r;
      };
    },
  }),
  ag = P({
    '../../node_modules/regexp.prototype.flags/shim.js'(e, t) {
      var r = Ht().supportsDescriptors,
        o = ss(),
        a = Object.getOwnPropertyDescriptor,
        c = Object.defineProperty,
        n = TypeError,
        i = Object.getPrototypeOf,
        l = /a/;
      t.exports = function () {
        if (!r || !i)
          throw new n(
            'RegExp.prototype.flags requires a true ES5 environment that supports property descriptors'
          );
        var s = o(),
          u = i(l),
          f = a(u, 'flags');
        return (
          (!f || f.get !== s) &&
            c(u, 'flags', { configurable: !0, enumerable: !1, get: s }),
          s
        );
      };
    },
  }),
  ig = P({
    '../../node_modules/regexp.prototype.flags/index.js'(e, t) {
      var r = Ht(),
        o = mr(),
        a = ls(),
        c = ss(),
        n = ag(),
        i = o(c());
      r(i, { getPolyfill: c, implementation: a, shim: n }), (t.exports = i);
    },
  }),
  zt = P({
    '../../node_modules/has-tostringtag/shams.js'(e, t) {
      var r = Rn();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    },
  }),
  us = P({
    '../../node_modules/is-arguments/index.js'(e, t) {
      var r = zt()(),
        o = rt(),
        a = o('Object.prototype.toString'),
        c = function (l) {
          return r && l && typeof l == 'object' && Symbol.toStringTag in l
            ? !1
            : a(l) === '[object Arguments]';
        },
        n = function (l) {
          return c(l)
            ? !0
            : l !== null &&
                typeof l == 'object' &&
                typeof l.length == 'number' &&
                l.length >= 0 &&
                a(l) !== '[object Array]' &&
                a(l.callee) === '[object Function]';
        },
        i = (function () {
          return c(arguments);
        })();
      (c.isLegacyArguments = n), (t.exports = i ? c : n);
    },
  }),
  lg = P({ '(disabled):../../node_modules/object-inspect/util.inspect'() {} }),
  sg = P({
    '../../node_modules/object-inspect/index.js'(e, t) {
      var r = typeof Map == 'function' && Map.prototype,
        o =
          Object.getOwnPropertyDescriptor && r
            ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
            : null,
        a = r && o && typeof o.get == 'function' ? o.get : null,
        c = r && Map.prototype.forEach,
        n = typeof Set == 'function' && Set.prototype,
        i =
          Object.getOwnPropertyDescriptor && n
            ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
            : null,
        l = n && i && typeof i.get == 'function' ? i.get : null,
        s = n && Set.prototype.forEach,
        u = typeof WeakMap == 'function' && WeakMap.prototype,
        f = u ? WeakMap.prototype.has : null,
        d = typeof WeakSet == 'function' && WeakSet.prototype,
        p = d ? WeakSet.prototype.has : null,
        m = typeof WeakRef == 'function' && WeakRef.prototype,
        y = m ? WeakRef.prototype.deref : null,
        g = Boolean.prototype.valueOf,
        h = Object.prototype.toString,
        v = Function.prototype.toString,
        S = String.prototype.match,
        E = String.prototype.slice,
        C = String.prototype.replace,
        A = String.prototype.toUpperCase,
        R = String.prototype.toLowerCase,
        _ = RegExp.prototype.test,
        O = Array.prototype.concat,
        x = Array.prototype.join,
        I = Array.prototype.slice,
        H = Math.floor,
        V = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
        L = Object.getOwnPropertySymbols,
        re =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? Symbol.prototype.toString
            : null,
        G = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
        oe =
          typeof Symbol == 'function' &&
          Symbol.toStringTag &&
          (typeof Symbol.toStringTag === G || !0)
            ? Symbol.toStringTag
            : null,
        ae = Object.prototype.propertyIsEnumerable,
        ue =
          (typeof Reflect == 'function'
            ? Reflect.getPrototypeOf
            : Object.getPrototypeOf) ||
          ([].__proto__ === Array.prototype
            ? function (K) {
                return K.__proto__;
              }
            : null);
      function Z(K, Q) {
        if (
          K === 1 / 0 ||
          K === -1 / 0 ||
          K !== K ||
          (K && K > -1e3 && K < 1e3) ||
          _.call(/e/, Q)
        )
          return Q;
        var ye = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof K == 'number') {
          var w = K < 0 ? -H(-K) : H(K);
          if (w !== K) {
            var T = String(w),
              j = E.call(Q, T.length + 1);
            return (
              C.call(T, ye, '$&_') +
              '.' +
              C.call(C.call(j, /([0-9]{3})/g, '$&_'), /_$/, '')
            );
          }
        }
        return C.call(Q, ye, '$&_');
      }
      var q = lg(),
        M = q.custom,
        F = Y(M) ? M : null;
      t.exports = function K(Q, ye, w, T) {
        var j = ye || {};
        if (
          ie(j, 'quoteStyle') &&
          j.quoteStyle !== 'single' &&
          j.quoteStyle !== 'double'
        )
          throw new TypeError(
            'option "quoteStyle" must be "single" or "double"'
          );
        if (
          ie(j, 'maxStringLength') &&
          (typeof j.maxStringLength == 'number'
            ? j.maxStringLength < 0 && j.maxStringLength !== 1 / 0
            : j.maxStringLength !== null)
        )
          throw new TypeError(
            'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
          );
        var J = ie(j, 'customInspect') ? j.customInspect : !0;
        if (typeof J != 'boolean' && J !== 'symbol')
          throw new TypeError(
            'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
          );
        if (
          ie(j, 'indent') &&
          j.indent !== null &&
          j.indent !== '	' &&
          !(parseInt(j.indent, 10) === j.indent && j.indent > 0)
        )
          throw new TypeError(
            'option "indent" must be "\\t", an integer > 0, or `null`'
          );
        if (ie(j, 'numericSeparator') && typeof j.numericSeparator != 'boolean')
          throw new TypeError(
            'option "numericSeparator", if provided, must be `true` or `false`'
          );
        var ne = j.numericSeparator;
        if (typeof Q > 'u') return 'undefined';
        if (Q === null) return 'null';
        if (typeof Q == 'boolean') return Q ? 'true' : 'false';
        if (typeof Q == 'string') return Oe(Q, j);
        if (typeof Q == 'number') {
          if (Q === 0) return 1 / 0 / Q > 0 ? '0' : '-0';
          var le = String(Q);
          return ne ? Z(Q, le) : le;
        }
        if (typeof Q == 'bigint') {
          var ce = String(Q) + 'n';
          return ne ? Z(Q, ce) : ce;
        }
        var de = typeof j.depth > 'u' ? 5 : j.depth;
        if (
          (typeof w > 'u' && (w = 0), w >= de && de > 0 && typeof Q == 'object')
        )
          return B(Q) ? '[Array]' : '[Object]';
        var me = Mt(j, w);
        if (typeof T > 'u') T = [];
        else if (Te(T, Q) >= 0) return '[Circular]';
        function te(Jt, Wr, Bd) {
          if ((Wr && ((T = I.call(T)), T.push(Wr)), Bd)) {
            var qa = { depth: j.depth };
            return (
              ie(j, 'quoteStyle') && (qa.quoteStyle = j.quoteStyle),
              K(Jt, qa, w + 1, T)
            );
          }
          return K(Jt, j, w + 1, T);
        }
        if (typeof Q == 'function' && !U(Q)) {
          var ve = fe(Q),
            Re = De(Q, te);
          return (
            '[Function' +
            (ve ? ': ' + ve : ' (anonymous)') +
            ']' +
            (Re.length > 0 ? ' { ' + x.call(Re, ', ') + ' }' : '')
          );
        }
        if (Y(Q)) {
          var Ue = G
            ? C.call(String(Q), /^(Symbol\(.*\))_[^)]*$/, '$1')
            : re.call(Q);
          return typeof Q == 'object' && !G ? Pe(Ue) : Ue;
        }
        if ($e(Q)) {
          for (
            var je = '<' + R.call(String(Q.nodeName)),
              Ie = Q.attributes || [],
              ke = 0;
            ke < Ie.length;
            ke++
          )
            je += ' ' + Ie[ke].name + '=' + z(X(Ie[ke].value), 'double', j);
          return (
            (je += '>'),
            Q.childNodes && Q.childNodes.length && (je += '...'),
            (je += '</' + R.call(String(Q.nodeName)) + '>'),
            je
          );
        }
        if (B(Q)) {
          if (Q.length === 0) return '[]';
          var jt = De(Q, te);
          return me && !Xe(jt)
            ? '[' + dt(jt, me) + ']'
            : '[ ' + x.call(jt, ', ') + ' ]';
        }
        if (ee(Q)) {
          var ft = De(Q, te);
          return !('cause' in Error.prototype) &&
            'cause' in Q &&
            !ae.call(Q, 'cause')
            ? '{ [' +
                String(Q) +
                '] ' +
                x.call(O.call('[cause]: ' + te(Q.cause), ft), ', ') +
                ' }'
            : ft.length === 0
              ? '[' + String(Q) + ']'
              : '{ [' + String(Q) + '] ' + x.call(ft, ', ') + ' }';
        }
        if (typeof Q == 'object' && J) {
          if (F && typeof Q[F] == 'function' && q)
            return q(Q, { depth: de - w });
          if (J !== 'symbol' && typeof Q.inspect == 'function')
            return Q.inspect();
        }
        if (lt(Q)) {
          var Yt = [];
          return (
            c &&
              c.call(Q, function (Jt, Wr) {
                Yt.push(te(Wr, Q, !0) + ' => ' + te(Jt, Q));
              }),
            Me('Map', a.call(Q), Yt, me)
          );
        }
        if (Ye(Q)) {
          var Ct = [];
          return (
            s &&
              s.call(Q, function (Jt) {
                Ct.push(te(Jt, Q));
              }),
            Me('Set', l.call(Q), Ct, me)
          );
        }
        if (st(Q)) return Ae('WeakMap');
        if (ut(Q)) return Ae('WeakSet');
        if (Ve(Q)) return Ae('WeakRef');
        if (N(Q)) return Pe(te(Number(Q)));
        if (W(Q)) return Pe(te(V.call(Q)));
        if ($(Q)) return Pe(g.call(Q));
        if (b(Q)) return Pe(te(String(Q)));
        if (typeof window < 'u' && Q === window) return '{ [object Window] }';
        if (Q === global) return '{ [object globalThis] }';
        if (!D(Q) && !U(Q)) {
          var It = De(Q, te),
            ct = ue
              ? ue(Q) === Object.prototype
              : Q instanceof Object || Q.constructor === Object,
            kn = Q instanceof Object ? '' : 'null prototype',
            Aa =
              !ct && oe && Object(Q) === Q && oe in Q
                ? E.call(se(Q), 8, -1)
                : kn
                  ? 'Object'
                  : '',
            Nd =
              ct || typeof Q.constructor != 'function'
                ? ''
                : Q.constructor.name
                  ? Q.constructor.name + ' '
                  : '',
            Ln =
              Nd +
              (Aa || kn
                ? '[' + x.call(O.call([], Aa || [], kn || []), ': ') + '] '
                : '');
          return It.length === 0
            ? Ln + '{}'
            : me
              ? Ln + '{' + dt(It, me) + '}'
              : Ln + '{ ' + x.call(It, ', ') + ' }';
        }
        return String(Q);
      };
      function z(K, Q, ye) {
        var w = (ye.quoteStyle || Q) === 'double' ? '"' : "'";
        return w + K + w;
      }
      function X(K) {
        return C.call(String(K), /"/g, '&quot;');
      }
      function B(K) {
        return (
          se(K) === '[object Array]' &&
          (!oe || !(typeof K == 'object' && oe in K))
        );
      }
      function D(K) {
        return (
          se(K) === '[object Date]' &&
          (!oe || !(typeof K == 'object' && oe in K))
        );
      }
      function U(K) {
        return (
          se(K) === '[object RegExp]' &&
          (!oe || !(typeof K == 'object' && oe in K))
        );
      }
      function ee(K) {
        return (
          se(K) === '[object Error]' &&
          (!oe || !(typeof K == 'object' && oe in K))
        );
      }
      function b(K) {
        return (
          se(K) === '[object String]' &&
          (!oe || !(typeof K == 'object' && oe in K))
        );
      }
      function N(K) {
        return (
          se(K) === '[object Number]' &&
          (!oe || !(typeof K == 'object' && oe in K))
        );
      }
      function $(K) {
        return (
          se(K) === '[object Boolean]' &&
          (!oe || !(typeof K == 'object' && oe in K))
        );
      }
      function Y(K) {
        if (G) return K && typeof K == 'object' && K instanceof Symbol;
        if (typeof K == 'symbol') return !0;
        if (!K || typeof K != 'object' || !re) return !1;
        try {
          return re.call(K), !0;
        } catch {}
        return !1;
      }
      function W(K) {
        if (!K || typeof K != 'object' || !V) return !1;
        try {
          return V.call(K), !0;
        } catch {}
        return !1;
      }
      var k =
        Object.prototype.hasOwnProperty ||
        function (K) {
          return K in this;
        };
      function ie(K, Q) {
        return k.call(K, Q);
      }
      function se(K) {
        return h.call(K);
      }
      function fe(K) {
        if (K.name) return K.name;
        var Q = S.call(v.call(K), /^function\s*([\w$]+)/);
        return Q ? Q[1] : null;
      }
      function Te(K, Q) {
        if (K.indexOf) return K.indexOf(Q);
        for (var ye = 0, w = K.length; ye < w; ye++) if (K[ye] === Q) return ye;
        return -1;
      }
      function lt(K) {
        if (!a || !K || typeof K != 'object') return !1;
        try {
          a.call(K);
          try {
            l.call(K);
          } catch {
            return !0;
          }
          return K instanceof Map;
        } catch {}
        return !1;
      }
      function st(K) {
        if (!f || !K || typeof K != 'object') return !1;
        try {
          f.call(K, f);
          try {
            p.call(K, p);
          } catch {
            return !0;
          }
          return K instanceof WeakMap;
        } catch {}
        return !1;
      }
      function Ve(K) {
        if (!y || !K || typeof K != 'object') return !1;
        try {
          return y.call(K), !0;
        } catch {}
        return !1;
      }
      function Ye(K) {
        if (!l || !K || typeof K != 'object') return !1;
        try {
          l.call(K);
          try {
            a.call(K);
          } catch {
            return !0;
          }
          return K instanceof Set;
        } catch {}
        return !1;
      }
      function ut(K) {
        if (!p || !K || typeof K != 'object') return !1;
        try {
          p.call(K, p);
          try {
            f.call(K, f);
          } catch {
            return !0;
          }
          return K instanceof WeakSet;
        } catch {}
        return !1;
      }
      function $e(K) {
        return !K || typeof K != 'object'
          ? !1
          : typeof HTMLElement < 'u' && K instanceof HTMLElement
            ? !0
            : typeof K.nodeName == 'string' &&
              typeof K.getAttribute == 'function';
      }
      function Oe(K, Q) {
        if (K.length > Q.maxStringLength) {
          var ye = K.length - Q.maxStringLength,
            w = '... ' + ye + ' more character' + (ye > 1 ? 's' : '');
          return Oe(E.call(K, 0, Q.maxStringLength), Q) + w;
        }
        var T = C.call(C.call(K, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, Je);
        return z(T, 'single', Q);
      }
      function Je(K) {
        var Q = K.charCodeAt(0),
          ye = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[Q];
        return ye
          ? '\\' + ye
          : '\\x' + (Q < 16 ? '0' : '') + A.call(Q.toString(16));
      }
      function Pe(K) {
        return 'Object(' + K + ')';
      }
      function Ae(K) {
        return K + ' { ? }';
      }
      function Me(K, Q, ye, w) {
        var T = w ? dt(ye, w) : x.call(ye, ', ');
        return K + ' (' + Q + ') {' + T + '}';
      }
      function Xe(K) {
        for (var Q = 0; Q < K.length; Q++)
          if (
            Te(
              K[Q],
              `
`
            ) >= 0
          )
            return !1;
        return !0;
      }
      function Mt(K, Q) {
        var ye;
        if (K.indent === '	') ye = '	';
        else if (typeof K.indent == 'number' && K.indent > 0)
          ye = x.call(Array(K.indent + 1), ' ');
        else return null;
        return { base: ye, prev: x.call(Array(Q + 1), ye) };
      }
      function dt(K, Q) {
        if (K.length === 0) return '';
        var ye =
          `
` +
          Q.prev +
          Q.base;
        return (
          ye +
          x.call(K, ',' + ye) +
          `
` +
          Q.prev
        );
      }
      function De(K, Q) {
        var ye = B(K),
          w = [];
        if (ye) {
          w.length = K.length;
          for (var T = 0; T < K.length; T++) w[T] = ie(K, T) ? Q(K[T], K) : '';
        }
        var j = typeof L == 'function' ? L(K) : [],
          J;
        if (G) {
          J = {};
          for (var ne = 0; ne < j.length; ne++) J['$' + j[ne]] = j[ne];
        }
        for (var le in K)
          ie(K, le) &&
            ((ye && String(Number(le)) === le && le < K.length) ||
              (G && J['$' + le] instanceof Symbol) ||
              (_.call(/[^\w$]/, le)
                ? w.push(Q(le, K) + ': ' + Q(K[le], K))
                : w.push(le + ': ' + Q(K[le], K))));
        if (typeof L == 'function')
          for (var ce = 0; ce < j.length; ce++)
            ae.call(K, j[ce]) &&
              w.push('[' + Q(j[ce]) + ']: ' + Q(K[j[ce]], K));
        return w;
      }
    },
  }),
  cs = P({
    '../../node_modules/side-channel/index.js'(e, t) {
      var r = tt(),
        o = rt(),
        a = sg(),
        c = r('%TypeError%'),
        n = r('%WeakMap%', !0),
        i = r('%Map%', !0),
        l = o('WeakMap.prototype.get', !0),
        s = o('WeakMap.prototype.set', !0),
        u = o('WeakMap.prototype.has', !0),
        f = o('Map.prototype.get', !0),
        d = o('Map.prototype.set', !0),
        p = o('Map.prototype.has', !0),
        m = function (v, S) {
          for (var E = v, C; (C = E.next) !== null; E = C)
            if (C.key === S)
              return (E.next = C.next), (C.next = v.next), (v.next = C), C;
        },
        y = function (v, S) {
          var E = m(v, S);
          return E && E.value;
        },
        g = function (v, S, E) {
          var C = m(v, S);
          C ? (C.value = E) : (v.next = { key: S, next: v.next, value: E });
        },
        h = function (v, S) {
          return !!m(v, S);
        };
      t.exports = function () {
        var v,
          S,
          E,
          C = {
            assert: function (A) {
              if (!C.has(A))
                throw new c('Side channel does not contain ' + a(A));
            },
            get: function (A) {
              if (n && A && (typeof A == 'object' || typeof A == 'function')) {
                if (v) return l(v, A);
              } else if (i) {
                if (S) return f(S, A);
              } else if (E) return y(E, A);
            },
            has: function (A) {
              if (n && A && (typeof A == 'object' || typeof A == 'function')) {
                if (v) return u(v, A);
              } else if (i) {
                if (S) return p(S, A);
              } else if (E) return h(E, A);
              return !1;
            },
            set: function (A, R) {
              n && A && (typeof A == 'object' || typeof A == 'function')
                ? (v || (v = new n()), s(v, A, R))
                : i
                  ? (S || (S = new i()), d(S, A, R))
                  : (E || (E = { key: {}, next: null }), g(E, A, R));
            },
          };
        return C;
      };
    },
  }),
  ug = P({
    '../../node_modules/internal-slot/index.js'(e, t) {
      var r = tt(),
        o = os(),
        a = cs()(),
        c = r('%TypeError%'),
        n = {
          assert: function (i, l) {
            if (!i || (typeof i != 'object' && typeof i != 'function'))
              throw new c('`O` is not an object');
            if (typeof l != 'string') throw new c('`slot` must be a string');
            if ((a.assert(i), !n.has(i, l)))
              throw new c('`' + l + '` is not present on `O`');
          },
          get: function (i, l) {
            if (!i || (typeof i != 'object' && typeof i != 'function'))
              throw new c('`O` is not an object');
            if (typeof l != 'string') throw new c('`slot` must be a string');
            var s = a.get(i);
            return s && s['$' + l];
          },
          has: function (i, l) {
            if (!i || (typeof i != 'object' && typeof i != 'function'))
              throw new c('`O` is not an object');
            if (typeof l != 'string') throw new c('`slot` must be a string');
            var s = a.get(i);
            return !!s && o(s, '$' + l);
          },
          set: function (i, l, s) {
            if (!i || (typeof i != 'object' && typeof i != 'function'))
              throw new c('`O` is not an object');
            if (typeof l != 'string') throw new c('`slot` must be a string');
            var u = a.get(i);
            u || ((u = {}), a.set(i, u)), (u['$' + l] = s);
          },
        };
      Object.freeze && Object.freeze(n), (t.exports = n);
    },
  }),
  cg = P({
    '../../node_modules/stop-iteration-iterator/index.js'(e, t) {
      var r = ug(),
        o = SyntaxError,
        a = typeof StopIteration == 'object' ? StopIteration : null;
      t.exports = function (c) {
        if (!a) throw new o('this environment lacks StopIteration');
        r.set(c, '[[Done]]', !1);
        var n = {
          next: function () {
            var i = r.get(this, '[[Iterator]]'),
              l = r.get(i, '[[Done]]');
            try {
              return { done: l, value: l ? void 0 : i.next() };
            } catch (s) {
              if ((r.set(i, '[[Done]]', !0), s !== a)) throw s;
              return { done: !0, value: void 0 };
            }
          },
        };
        return r.set(n, '[[Iterator]]', c), n;
      };
    },
  }),
  ds = P({
    '../../node_modules/isarray/index.js'(e, t) {
      var r = {}.toString;
      t.exports =
        Array.isArray ||
        function (o) {
          return r.call(o) == '[object Array]';
        };
    },
  }),
  fs = P({
    '../../node_modules/is-string/index.js'(e, t) {
      var r = String.prototype.valueOf,
        o = function (i) {
          try {
            return r.call(i), !0;
          } catch {
            return !1;
          }
        },
        a = Object.prototype.toString,
        c = '[object String]',
        n = zt()();
      t.exports = function (i) {
        return typeof i == 'string'
          ? !0
          : typeof i != 'object'
            ? !1
            : n
              ? o(i)
              : a.call(i) === c;
      };
    },
  }),
  ps = P({
    '../../node_modules/is-map/index.js'(e, t) {
      var r = typeof Map == 'function' && Map.prototype ? Map : null,
        o = typeof Set == 'function' && Set.prototype ? Set : null,
        a;
      r ||
        (a = function (i) {
          return !1;
        });
      var c = r ? Map.prototype.has : null,
        n = o ? Set.prototype.has : null;
      !a &&
        !c &&
        (a = function (i) {
          return !1;
        }),
        (t.exports =
          a ||
          function (i) {
            if (!i || typeof i != 'object') return !1;
            try {
              if ((c.call(i), n))
                try {
                  n.call(i);
                } catch {
                  return !0;
                }
              return i instanceof r;
            } catch {}
            return !1;
          });
    },
  }),
  ms = P({
    '../../node_modules/is-set/index.js'(e, t) {
      var r = typeof Map == 'function' && Map.prototype ? Map : null,
        o = typeof Set == 'function' && Set.prototype ? Set : null,
        a;
      o ||
        (a = function (i) {
          return !1;
        });
      var c = r ? Map.prototype.has : null,
        n = o ? Set.prototype.has : null;
      !a &&
        !n &&
        (a = function (i) {
          return !1;
        }),
        (t.exports =
          a ||
          function (i) {
            if (!i || typeof i != 'object') return !1;
            try {
              if ((n.call(i), c))
                try {
                  c.call(i);
                } catch {
                  return !0;
                }
              return i instanceof o;
            } catch {}
            return !1;
          });
    },
  }),
  dg = P({
    '../../node_modules/es-get-iterator/index.js'(e, t) {
      var r = us(),
        o = cg();
      Qo()() || Rn()()
        ? ((a = Symbol.iterator),
          (t.exports = function (x) {
            if (x != null && typeof x[a] < 'u') return x[a]();
            if (r(x)) return Array.prototype[a].call(x);
          }))
        : ((c = ds()),
          (n = fs()),
          (i = tt()),
          (l = i('%Map%', !0)),
          (s = i('%Set%', !0)),
          (u = rt()),
          (f = u('Array.prototype.push')),
          (d = u('String.prototype.charCodeAt')),
          (p = u('String.prototype.slice')),
          (m = function (x, I) {
            var H = x.length;
            if (I + 1 >= H) return I + 1;
            var V = d(x, I);
            if (V < 55296 || V > 56319) return I + 1;
            var L = d(x, I + 1);
            return L < 56320 || L > 57343 ? I + 1 : I + 2;
          }),
          (y = function (x) {
            var I = 0;
            return {
              next: function () {
                var H = I >= x.length,
                  V;
                return H || ((V = x[I]), (I += 1)), { done: H, value: V };
              },
            };
          }),
          (g = function (x, I) {
            if (c(x) || r(x)) return y(x);
            if (n(x)) {
              var H = 0;
              return {
                next: function () {
                  var V = m(x, H),
                    L = p(x, H, V);
                  return (H = V), { done: V > x.length, value: L };
                },
              };
            }
            if (I && typeof x['_es6-shim iterator_'] < 'u')
              return x['_es6-shim iterator_']();
          }),
          !l && !s
            ? (t.exports = function (x) {
                if (x != null) return g(x, !0);
              })
            : ((h = ps()),
              (v = ms()),
              (S = u('Map.prototype.forEach', !0)),
              (E = u('Set.prototype.forEach', !0)),
              (typeof process > 'u' ||
                !process.versions ||
                !process.versions.node) &&
                ((C = u('Map.prototype.iterator', !0)),
                (A = u('Set.prototype.iterator', !0))),
              (R =
                u('Map.prototype.@@iterator', !0) ||
                u('Map.prototype._es6-shim iterator_', !0)),
              (_ =
                u('Set.prototype.@@iterator', !0) ||
                u('Set.prototype._es6-shim iterator_', !0)),
              (O = function (x) {
                if (h(x)) {
                  if (C) return o(C(x));
                  if (R) return R(x);
                  if (S) {
                    var I = [];
                    return (
                      S(x, function (V, L) {
                        f(I, [L, V]);
                      }),
                      y(I)
                    );
                  }
                }
                if (v(x)) {
                  if (A) return o(A(x));
                  if (_) return _(x);
                  if (E) {
                    var H = [];
                    return (
                      E(x, function (V) {
                        f(H, V);
                      }),
                      y(H)
                    );
                  }
                }
              }),
              (t.exports = function (x) {
                return O(x) || g(x);
              })));
      var a, c, n, i, l, s, u, f, d, p, m, y, g, h, v, S, E, C, A, R, _, O;
    },
  }),
  ys = P({
    '../../node_modules/object-is/implementation.js'(e, t) {
      var r = function (o) {
        return o !== o;
      };
      t.exports = function (o, a) {
        return o === 0 && a === 0
          ? 1 / o === 1 / a
          : !!(o === a || (r(o) && r(a)));
      };
    },
  }),
  hs = P({
    '../../node_modules/object-is/polyfill.js'(e, t) {
      var r = ys();
      t.exports = function () {
        return typeof Object.is == 'function' ? Object.is : r;
      };
    },
  }),
  fg = P({
    '../../node_modules/object-is/shim.js'(e, t) {
      var r = hs(),
        o = Ht();
      t.exports = function () {
        var a = r();
        return (
          o(
            Object,
            { is: a },
            {
              is: function () {
                return Object.is !== a;
              },
            }
          ),
          a
        );
      };
    },
  }),
  pg = P({
    '../../node_modules/object-is/index.js'(e, t) {
      var r = Ht(),
        o = mr(),
        a = ys(),
        c = hs(),
        n = fg(),
        i = o(c(), Object);
      r(i, { getPolyfill: c, implementation: a, shim: n }), (t.exports = i);
    },
  }),
  mg = P({
    '../../node_modules/is-callable/index.js'(e, t) {
      var r = Function.prototype.toString,
        o = typeof Reflect == 'object' && Reflect !== null && Reflect.apply,
        a,
        c;
      if (typeof o == 'function' && typeof Object.defineProperty == 'function')
        try {
          (a = Object.defineProperty({}, 'length', {
            get: function () {
              throw c;
            },
          })),
            (c = {}),
            o(
              function () {
                throw 42;
              },
              null,
              a
            );
        } catch (E) {
          E !== c && (o = null);
        }
      else o = null;
      var n = /^\s*class\b/,
        i = function (E) {
          try {
            var C = r.call(E);
            return n.test(C);
          } catch {
            return !1;
          }
        },
        l = function (E) {
          try {
            return i(E) ? !1 : (r.call(E), !0);
          } catch {
            return !1;
          }
        },
        s = Object.prototype.toString,
        u = '[object Object]',
        f = '[object Function]',
        d = '[object GeneratorFunction]',
        p = '[object HTMLAllCollection]',
        m = '[object HTML document.all class]',
        y = '[object HTMLCollection]',
        g = typeof Symbol == 'function' && !!Symbol.toStringTag,
        h = !(0 in [,]),
        v = function () {
          return !1;
        };
      typeof document == 'object' &&
        ((S = document.all),
        s.call(S) === s.call(document.all) &&
          (v = function (E) {
            if ((h || !E) && (typeof E > 'u' || typeof E == 'object'))
              try {
                var C = s.call(E);
                return (
                  (C === p || C === m || C === y || C === u) && E('') == null
                );
              } catch {}
            return !1;
          }));
      var S;
      t.exports = o
        ? function (E) {
            if (v(E)) return !0;
            if (!E || (typeof E != 'function' && typeof E != 'object'))
              return !1;
            try {
              o(E, null, a);
            } catch (C) {
              if (C !== c) return !1;
            }
            return !i(E) && l(E);
          }
        : function (E) {
            if (v(E)) return !0;
            if (!E || (typeof E != 'function' && typeof E != 'object'))
              return !1;
            if (g) return l(E);
            if (i(E)) return !1;
            var C = s.call(E);
            return C !== f && C !== d && !/^\[object HTML/.test(C) ? !1 : l(E);
          };
    },
  }),
  yg = P({
    '../../node_modules/for-each/index.js'(e, t) {
      var r = mg(),
        o = Object.prototype.toString,
        a = Object.prototype.hasOwnProperty,
        c = function (s, u, f) {
          for (var d = 0, p = s.length; d < p; d++)
            a.call(s, d) && (f == null ? u(s[d], d, s) : u.call(f, s[d], d, s));
        },
        n = function (s, u, f) {
          for (var d = 0, p = s.length; d < p; d++)
            f == null ? u(s.charAt(d), d, s) : u.call(f, s.charAt(d), d, s);
        },
        i = function (s, u, f) {
          for (var d in s)
            a.call(s, d) && (f == null ? u(s[d], d, s) : u.call(f, s[d], d, s));
        },
        l = function (s, u, f) {
          if (!r(u)) throw new TypeError('iterator must be a function');
          var d;
          arguments.length >= 3 && (d = f),
            o.call(s) === '[object Array]'
              ? c(s, u, d)
              : typeof s == 'string'
                ? n(s, u, d)
                : i(s, u, d);
        };
      t.exports = l;
    },
  }),
  hg = P({
    '../../node_modules/available-typed-arrays/index.js'(e, t) {
      var r = [
          'BigInt64Array',
          'BigUint64Array',
          'Float32Array',
          'Float64Array',
          'Int16Array',
          'Int32Array',
          'Int8Array',
          'Uint16Array',
          'Uint32Array',
          'Uint8Array',
          'Uint8ClampedArray',
        ],
        o = typeof globalThis > 'u' ? global : globalThis;
      t.exports = function () {
        for (var a = [], c = 0; c < r.length; c++)
          typeof o[r[c]] == 'function' && (a[a.length] = r[c]);
        return a;
      };
    },
  }),
  bs = P({
    '../../node_modules/which-typed-array/index.js'(e, t) {
      var r = yg(),
        o = hg(),
        a = mr(),
        c = rt(),
        n = Zo(),
        i = c('Object.prototype.toString'),
        l = zt()(),
        s = typeof globalThis > 'u' ? global : globalThis,
        u = o(),
        f = c('String.prototype.slice'),
        d = Object.getPrototypeOf,
        p =
          c('Array.prototype.indexOf', !0) ||
          function (h, v) {
            for (var S = 0; S < h.length; S += 1) if (h[S] === v) return S;
            return -1;
          },
        m = { __proto__: null };
      l && n && d
        ? r(u, function (h) {
            var v = new s[h]();
            if (Symbol.toStringTag in v) {
              var S = d(v),
                E = n(S, Symbol.toStringTag);
              if (!E) {
                var C = d(S);
                E = n(C, Symbol.toStringTag);
              }
              m['$' + h] = a(E.get);
            }
          })
        : r(u, function (h) {
            var v = new s[h]();
            m['$' + h] = a(v.slice);
          });
      var y = function (h) {
          var v = !1;
          return (
            r(m, function (S, E) {
              if (!v)
                try {
                  '$' + S(h) === E && (v = f(E, 1));
                } catch {}
            }),
            v
          );
        },
        g = function (h) {
          var v = !1;
          return (
            r(m, function (S, E) {
              if (!v)
                try {
                  S(h), (v = f(E, 1));
                } catch {}
            }),
            v
          );
        };
      t.exports = function (h) {
        if (!h || typeof h != 'object') return !1;
        if (!l) {
          var v = f(i(h), 8, -1);
          return p(u, v) > -1 ? v : v !== 'Object' ? !1 : g(h);
        }
        return n ? y(h) : null;
      };
    },
  }),
  bg = P({
    '../../node_modules/is-typed-array/index.js'(e, t) {
      var r = bs();
      t.exports = function (o) {
        return !!r(o);
      };
    },
  }),
  gs = P({
    '../../node_modules/is-array-buffer/index.js'(e, t) {
      var r = mr(),
        o = rt(),
        a = tt(),
        c = bg(),
        n = a('ArrayBuffer', !0),
        i = a('Float32Array', !0),
        l = o('ArrayBuffer.prototype.byteLength', !0),
        s = n && !l && new n().slice,
        u = s && r(s);
      t.exports =
        l || u
          ? function (f) {
              if (!f || typeof f != 'object') return !1;
              try {
                return l ? l(f) : u(f, 0), !0;
              } catch {
                return !1;
              }
            }
          : i
            ? function (f) {
                try {
                  return new i(f).buffer === f && !c(f);
                } catch (d) {
                  return typeof f == 'object' && d.name === 'RangeError';
                }
              }
            : function (f) {
                return !1;
              };
    },
  }),
  gg = P({
    '../../node_modules/is-date-object/index.js'(e, t) {
      var r = Date.prototype.getDay,
        o = function (i) {
          try {
            return r.call(i), !0;
          } catch {
            return !1;
          }
        },
        a = Object.prototype.toString,
        c = '[object Date]',
        n = zt()();
      t.exports = function (i) {
        return typeof i != 'object' || i === null
          ? !1
          : n
            ? o(i)
            : a.call(i) === c;
      };
    },
  }),
  vg = P({
    '../../node_modules/is-regex/index.js'(e, t) {
      var r = rt(),
        o = zt()(),
        a,
        c,
        n,
        i;
      o &&
        ((a = r('Object.prototype.hasOwnProperty')),
        (c = r('RegExp.prototype.exec')),
        (n = {}),
        (l = function () {
          throw n;
        }),
        (i = { toString: l, valueOf: l }),
        typeof Symbol.toPrimitive == 'symbol' && (i[Symbol.toPrimitive] = l));
      var l,
        s = r('Object.prototype.toString'),
        u = Object.getOwnPropertyDescriptor,
        f = '[object RegExp]';
      t.exports = o
        ? function (d) {
            if (!d || typeof d != 'object') return !1;
            var p = u(d, 'lastIndex'),
              m = p && a(p, 'value');
            if (!m) return !1;
            try {
              c(d, i);
            } catch (y) {
              return y === n;
            }
          }
        : function (d) {
            return !d || (typeof d != 'object' && typeof d != 'function')
              ? !1
              : s(d) === f;
          };
    },
  }),
  _g = P({
    '../../node_modules/is-shared-array-buffer/index.js'(e, t) {
      var r = rt(),
        o = r('SharedArrayBuffer.prototype.byteLength', !0);
      t.exports = o
        ? function (a) {
            if (!a || typeof a != 'object') return !1;
            try {
              return o(a), !0;
            } catch {
              return !1;
            }
          }
        : function (a) {
            return !1;
          };
    },
  }),
  Eg = P({
    '../../node_modules/is-number-object/index.js'(e, t) {
      var r = Number.prototype.toString,
        o = function (i) {
          try {
            return r.call(i), !0;
          } catch {
            return !1;
          }
        },
        a = Object.prototype.toString,
        c = '[object Number]',
        n = zt()();
      t.exports = function (i) {
        return typeof i == 'number'
          ? !0
          : typeof i != 'object'
            ? !1
            : n
              ? o(i)
              : a.call(i) === c;
      };
    },
  }),
  wg = P({
    '../../node_modules/is-boolean-object/index.js'(e, t) {
      var r = rt(),
        o = r('Boolean.prototype.toString'),
        a = r('Object.prototype.toString'),
        c = function (l) {
          try {
            return o(l), !0;
          } catch {
            return !1;
          }
        },
        n = '[object Boolean]',
        i = zt()();
      t.exports = function (l) {
        return typeof l == 'boolean'
          ? !0
          : l === null || typeof l != 'object'
            ? !1
            : i && Symbol.toStringTag in l
              ? c(l)
              : a(l) === n;
      };
    },
  }),
  Sg = P({
    '../../node_modules/is-symbol/index.js'(e, t) {
      var r = Object.prototype.toString,
        o = Qo()();
      o
        ? ((a = Symbol.prototype.toString),
          (c = /^Symbol\(.*\)$/),
          (n = function (i) {
            return typeof i.valueOf() != 'symbol' ? !1 : c.test(a.call(i));
          }),
          (t.exports = function (i) {
            if (typeof i == 'symbol') return !0;
            if (r.call(i) !== '[object Symbol]') return !1;
            try {
              return n(i);
            } catch {
              return !1;
            }
          }))
        : (t.exports = function (i) {
            return !1;
          });
      var a, c, n;
    },
  }),
  Cg = P({
    '../../node_modules/has-bigints/index.js'(e, t) {
      var r = typeof BigInt < 'u' && BigInt;
      t.exports = function () {
        return (
          typeof r == 'function' &&
          typeof BigInt == 'function' &&
          typeof r(42) == 'bigint' &&
          typeof BigInt(42) == 'bigint'
        );
      };
    },
  }),
  Og = P({
    '../../node_modules/is-bigint/index.js'(e, t) {
      var r = Cg()();
      r
        ? ((o = BigInt.prototype.valueOf),
          (a = function (c) {
            try {
              return o.call(c), !0;
            } catch {}
            return !1;
          }),
          (t.exports = function (c) {
            return c === null ||
              typeof c > 'u' ||
              typeof c == 'boolean' ||
              typeof c == 'string' ||
              typeof c == 'number' ||
              typeof c == 'symbol' ||
              typeof c == 'function'
              ? !1
              : typeof c == 'bigint'
                ? !0
                : a(c);
          }))
        : (t.exports = function (c) {
            return !1;
          });
      var o, a;
    },
  }),
  Pg = P({
    '../../node_modules/which-boxed-primitive/index.js'(e, t) {
      var r = fs(),
        o = Eg(),
        a = wg(),
        c = Sg(),
        n = Og();
      t.exports = function (i) {
        if (i == null || (typeof i != 'object' && typeof i != 'function'))
          return null;
        if (r(i)) return 'String';
        if (o(i)) return 'Number';
        if (a(i)) return 'Boolean';
        if (c(i)) return 'Symbol';
        if (n(i)) return 'BigInt';
      };
    },
  }),
  Rg = P({
    '../../node_modules/is-weakmap/index.js'(e, t) {
      var r =
          typeof WeakMap == 'function' && WeakMap.prototype ? WeakMap : null,
        o = typeof WeakSet == 'function' && WeakSet.prototype ? WeakSet : null,
        a;
      r ||
        (a = function (i) {
          return !1;
        });
      var c = r ? r.prototype.has : null,
        n = o ? o.prototype.has : null;
      !a &&
        !c &&
        (a = function (i) {
          return !1;
        }),
        (t.exports =
          a ||
          function (i) {
            if (!i || typeof i != 'object') return !1;
            try {
              if ((c.call(i, c), n))
                try {
                  n.call(i, n);
                } catch {
                  return !0;
                }
              return i instanceof r;
            } catch {}
            return !1;
          });
    },
  }),
  Tg = P({
    '../../node_modules/is-weakset/index.js'(e, t) {
      var r = tt(),
        o = rt(),
        a = r('%WeakSet%', !0),
        c = o('WeakSet.prototype.has', !0);
      c
        ? ((n = o('WeakMap.prototype.has', !0)),
          (t.exports = function (i) {
            if (!i || typeof i != 'object') return !1;
            try {
              if ((c(i, c), n))
                try {
                  n(i, n);
                } catch {
                  return !0;
                }
              return i instanceof a;
            } catch {}
            return !1;
          }))
        : (t.exports = function (i) {
            return !1;
          });
      var n;
    },
  }),
  Ag = P({
    '../../node_modules/which-collection/index.js'(e, t) {
      var r = ps(),
        o = ms(),
        a = Rg(),
        c = Tg();
      t.exports = function (n) {
        if (n && typeof n == 'object') {
          if (r(n)) return 'Map';
          if (o(n)) return 'Set';
          if (a(n)) return 'WeakMap';
          if (c(n)) return 'WeakSet';
        }
        return !1;
      };
    },
  }),
  qg = P({
    '../../node_modules/array-buffer-byte-length/index.js'(e, t) {
      var r = rt(),
        o = r('ArrayBuffer.prototype.byteLength', !0),
        a = gs();
      t.exports = function (c) {
        return a(c) ? (o ? o(c) : c.byteLength) : NaN;
      };
    },
  }),
  xg = P({
    '../../node_modules/deep-equal/index.js'(e, t) {
      var r = rg(),
        o = rt(),
        a = ig(),
        c = tt(),
        n = dg(),
        i = cs(),
        l = pg(),
        s = us(),
        u = ds(),
        f = gs(),
        d = gg(),
        p = vg(),
        m = _g(),
        y = Xo(),
        g = Pg(),
        h = Ag(),
        v = bs(),
        S = qg(),
        E = o('SharedArrayBuffer.prototype.byteLength', !0),
        C = o('Date.prototype.getTime'),
        A = Object.getPrototypeOf,
        R = o('Object.prototype.toString'),
        _ = c('%Set%', !0),
        O = o('Map.prototype.has', !0),
        x = o('Map.prototype.get', !0),
        I = o('Map.prototype.size', !0),
        H = o('Set.prototype.add', !0),
        V = o('Set.prototype.delete', !0),
        L = o('Set.prototype.has', !0),
        re = o('Set.prototype.size', !0);
      function G(B, D, U, ee) {
        for (var b = n(B), N; (N = b.next()) && !N.done; )
          if (q(D, N.value, U, ee)) return V(B, N.value), !0;
        return !1;
      }
      function oe(B) {
        if (typeof B > 'u') return null;
        if (typeof B != 'object')
          return typeof B == 'symbol'
            ? !1
            : typeof B == 'string' || typeof B == 'number'
              ? +B == +B
              : !0;
      }
      function ae(B, D, U, ee, b, N) {
        var $ = oe(U);
        if ($ != null) return $;
        var Y = x(D, $),
          W = r({}, b, { strict: !1 });
        return (typeof Y > 'u' && !O(D, $)) || !q(ee, Y, W, N)
          ? !1
          : !O(B, $) && q(ee, Y, W, N);
      }
      function ue(B, D, U) {
        var ee = oe(U);
        return ee ?? (L(D, ee) && !L(B, ee));
      }
      function Z(B, D, U, ee, b, N) {
        for (var $ = n(B), Y, W; (Y = $.next()) && !Y.done; )
          if (((W = Y.value), q(U, W, b, N) && q(ee, x(D, W), b, N)))
            return V(B, W), !0;
        return !1;
      }
      function q(B, D, U, ee) {
        var b = U || {};
        if (b.strict ? l(B, D) : B === D) return !0;
        var N = g(B),
          $ = g(D);
        if (N !== $) return !1;
        if (!B || !D || (typeof B != 'object' && typeof D != 'object'))
          return b.strict ? l(B, D) : B == D;
        var Y = ee.has(B),
          W = ee.has(D),
          k;
        if (Y && W) {
          if (ee.get(B) === ee.get(D)) return !0;
        } else k = {};
        return Y || ee.set(B, k), W || ee.set(D, k), X(B, D, b, ee);
      }
      function M(B) {
        return !B ||
          typeof B != 'object' ||
          typeof B.length != 'number' ||
          typeof B.copy != 'function' ||
          typeof B.slice != 'function' ||
          (B.length > 0 && typeof B[0] != 'number')
          ? !1
          : !!(
              B.constructor &&
              B.constructor.isBuffer &&
              B.constructor.isBuffer(B)
            );
      }
      function F(B, D, U, ee) {
        if (re(B) !== re(D)) return !1;
        for (var b = n(B), N = n(D), $, Y, W; ($ = b.next()) && !$.done; )
          if ($.value && typeof $.value == 'object')
            W || (W = new _()), H(W, $.value);
          else if (!L(D, $.value)) {
            if (U.strict || !ue(B, D, $.value)) return !1;
            W || (W = new _()), H(W, $.value);
          }
        if (W) {
          for (; (Y = N.next()) && !Y.done; )
            if (Y.value && typeof Y.value == 'object') {
              if (!G(W, Y.value, U.strict, ee)) return !1;
            } else if (
              !U.strict &&
              !L(B, Y.value) &&
              !G(W, Y.value, U.strict, ee)
            )
              return !1;
          return re(W) === 0;
        }
        return !0;
      }
      function z(B, D, U, ee) {
        if (I(B) !== I(D)) return !1;
        for (
          var b = n(B), N = n(D), $, Y, W, k, ie, se;
          ($ = b.next()) && !$.done;

        )
          if (((k = $.value[0]), (ie = $.value[1]), k && typeof k == 'object'))
            W || (W = new _()), H(W, k);
          else if (
            ((se = x(D, k)), (typeof se > 'u' && !O(D, k)) || !q(ie, se, U, ee))
          ) {
            if (U.strict || !ae(B, D, k, ie, U, ee)) return !1;
            W || (W = new _()), H(W, k);
          }
        if (W) {
          for (; (Y = N.next()) && !Y.done; )
            if (
              ((k = Y.value[0]), (se = Y.value[1]), k && typeof k == 'object')
            ) {
              if (!Z(W, B, k, se, U, ee)) return !1;
            } else if (
              !U.strict &&
              (!B.has(k) || !q(x(B, k), se, U, ee)) &&
              !Z(W, B, k, se, r({}, U, { strict: !1 }), ee)
            )
              return !1;
          return re(W) === 0;
        }
        return !0;
      }
      function X(B, D, U, ee) {
        var b, N;
        if (
          typeof B != typeof D ||
          B == null ||
          D == null ||
          R(B) !== R(D) ||
          s(B) !== s(D)
        )
          return !1;
        var $ = u(B),
          Y = u(D);
        if ($ !== Y) return !1;
        var W = B instanceof Error,
          k = D instanceof Error;
        if (
          W !== k ||
          ((W || k) && (B.name !== D.name || B.message !== D.message))
        )
          return !1;
        var ie = p(B),
          se = p(D);
        if (
          ie !== se ||
          ((ie || se) && (B.source !== D.source || a(B) !== a(D)))
        )
          return !1;
        var fe = d(B),
          Te = d(D);
        if (
          fe !== Te ||
          ((fe || Te) && C(B) !== C(D)) ||
          (U.strict && A && A(B) !== A(D))
        )
          return !1;
        var lt = v(B),
          st = v(D);
        if (lt !== st) return !1;
        if (lt || st) {
          if (B.length !== D.length) return !1;
          for (b = 0; b < B.length; b++) if (B[b] !== D[b]) return !1;
          return !0;
        }
        var Ve = M(B),
          Ye = M(D);
        if (Ve !== Ye) return !1;
        if (Ve || Ye) {
          if (B.length !== D.length) return !1;
          for (b = 0; b < B.length; b++) if (B[b] !== D[b]) return !1;
          return !0;
        }
        var ut = f(B),
          $e = f(D);
        if (ut !== $e) return !1;
        if (ut || $e)
          return S(B) !== S(D)
            ? !1
            : typeof Uint8Array == 'function' &&
                q(new Uint8Array(B), new Uint8Array(D), U, ee);
        var Oe = m(B),
          Je = m(D);
        if (Oe !== Je) return !1;
        if (Oe || Je)
          return E(B) !== E(D)
            ? !1
            : typeof Uint8Array == 'function' &&
                q(new Uint8Array(B), new Uint8Array(D), U, ee);
        if (typeof B != typeof D) return !1;
        var Pe = y(B),
          Ae = y(D);
        if (Pe.length !== Ae.length) return !1;
        for (Pe.sort(), Ae.sort(), b = Pe.length - 1; b >= 0; b--)
          if (Pe[b] != Ae[b]) return !1;
        for (b = Pe.length - 1; b >= 0; b--)
          if (((N = Pe[b]), !q(B[N], D[N], U, ee))) return !1;
        var Me = h(B),
          Xe = h(D);
        return Me !== Xe
          ? !1
          : Me === 'Set' || Xe === 'Set'
            ? F(B, D, U, ee)
            : Me === 'Map'
              ? z(B, D, U, ee)
              : !0;
      }
      t.exports = function (B, D, U) {
        return q(B, D, U, i());
      };
    },
  }),
  Mg = P({
    '../../node_modules/aria-query/lib/elementRoleMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = a(xg()),
        r = a(Lr()),
        o = a(Jo());
      function a(R) {
        return R && R.__esModule ? R : { default: R };
      }
      function c(R, _) {
        return l(R) || i(R, _) || u(R, _) || n();
      }
      function n() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function i(R, _) {
        var O =
          R == null
            ? null
            : (typeof Symbol < 'u' && R[Symbol.iterator]) || R['@@iterator'];
        if (O != null) {
          var x = [],
            I = !0,
            H = !1,
            V,
            L;
          try {
            for (
              O = O.call(R);
              !(I = (V = O.next()).done) &&
              (x.push(V.value), !(_ && x.length === _));
              I = !0
            );
          } catch (re) {
            (H = !0), (L = re);
          } finally {
            try {
              !I && O.return != null && O.return();
            } finally {
              if (H) throw L;
            }
          }
          return x;
        }
      }
      function l(R) {
        if (Array.isArray(R)) return R;
      }
      function s(R, _) {
        var O = (typeof Symbol < 'u' && R[Symbol.iterator]) || R['@@iterator'];
        if (!O) {
          if (
            Array.isArray(R) ||
            (O = u(R)) ||
            (_ && R && typeof R.length == 'number')
          ) {
            O && (R = O);
            var x = 0,
              I = function () {};
            return {
              s: I,
              n: function () {
                return x >= R.length
                  ? { done: !0 }
                  : { done: !1, value: R[x++] };
              },
              e: function (re) {
                throw re;
              },
              f: I,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var H = !0,
          V = !1,
          L;
        return {
          s: function () {
            O = O.call(R);
          },
          n: function () {
            var re = O.next();
            return (H = re.done), re;
          },
          e: function (re) {
            (V = !0), (L = re);
          },
          f: function () {
            try {
              !H && O.return != null && O.return();
            } finally {
              if (V) throw L;
            }
          },
        };
      }
      function u(R, _) {
        if (R) {
          if (typeof R == 'string') return f(R, _);
          var O = Object.prototype.toString.call(R).slice(8, -1);
          if (
            (O === 'Object' && R.constructor && (O = R.constructor.name),
            O === 'Map' || O === 'Set')
          )
            return Array.from(R);
          if (
            O === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)
          )
            return f(R, _);
        }
      }
      function f(R, _) {
        (_ == null || _ > R.length) && (_ = R.length);
        for (var O = 0, x = new Array(_); O < _; O++) x[O] = R[O];
        return x;
      }
      var d = [],
        p = o.default.keys();
      for (E = 0; E < p.length; E++)
        if (((m = p[E]), (y = o.default.get(m)), y))
          for (
            g = [].concat(y.baseConcepts, y.relatedConcepts), S = 0;
            S < g.length;
            S++
          )
            (h = g[S]),
              h.module === 'HTML' &&
                ((v = h.concept),
                v &&
                  (function () {
                    var R = JSON.stringify(v),
                      _ = d.find(function (H) {
                        return JSON.stringify(H[0]) === R;
                      }),
                      O = void 0;
                    _ ? (O = _[1]) : (O = []);
                    for (var x = !0, I = 0; I < O.length; I++)
                      if (O[I] === m) {
                        x = !1;
                        break;
                      }
                    x && O.push(m), d.push([v, O]);
                  })());
      var m,
        y,
        g,
        h,
        v,
        S,
        E,
        C = {
          entries: function () {
            return d;
          },
          forEach: function (R) {
            var _ =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : null,
              O = s(d),
              x;
            try {
              for (O.s(); !(x = O.n()).done; ) {
                var I = c(x.value, 2),
                  H = I[0],
                  V = I[1];
                R.call(_, V, H, d);
              }
            } catch (L) {
              O.e(L);
            } finally {
              O.f();
            }
          },
          get: function (R) {
            var _ = d.find(function (O) {
              return (0, t.default)(R, O[0]);
            });
            return _ && _[1];
          },
          has: function (R) {
            return !!C.get(R);
          },
          keys: function () {
            return d.map(function (R) {
              var _ = c(R, 1),
                O = _[0];
              return O;
            });
          },
          values: function () {
            return d.map(function (R) {
              var _ = c(R, 2),
                O = _[1];
              return O;
            });
          },
        },
        A = (0, r.default)(C, C.entries());
      e.default = A;
    },
  }),
  jg = P({
    '../../node_modules/aria-query/lib/roleElementMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0);
      var t = o(Lr()),
        r = o(Jo());
      function o(h) {
        return h && h.__esModule ? h : { default: h };
      }
      function a(h, v) {
        return i(h) || n(h, v) || s(h, v) || c();
      }
      function c() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function n(h, v) {
        var S =
          h == null
            ? null
            : (typeof Symbol < 'u' && h[Symbol.iterator]) || h['@@iterator'];
        if (S != null) {
          var E = [],
            C = !0,
            A = !1,
            R,
            _;
          try {
            for (
              S = S.call(h);
              !(C = (R = S.next()).done) &&
              (E.push(R.value), !(v && E.length === v));
              C = !0
            );
          } catch (O) {
            (A = !0), (_ = O);
          } finally {
            try {
              !C && S.return != null && S.return();
            } finally {
              if (A) throw _;
            }
          }
          return E;
        }
      }
      function i(h) {
        if (Array.isArray(h)) return h;
      }
      function l(h, v) {
        var S = (typeof Symbol < 'u' && h[Symbol.iterator]) || h['@@iterator'];
        if (!S) {
          if (
            Array.isArray(h) ||
            (S = s(h)) ||
            (v && h && typeof h.length == 'number')
          ) {
            S && (h = S);
            var E = 0,
              C = function () {};
            return {
              s: C,
              n: function () {
                return E >= h.length
                  ? { done: !0 }
                  : { done: !1, value: h[E++] };
              },
              e: function (O) {
                throw O;
              },
              f: C,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var A = !0,
          R = !1,
          _;
        return {
          s: function () {
            S = S.call(h);
          },
          n: function () {
            var O = S.next();
            return (A = O.done), O;
          },
          e: function (O) {
            (R = !0), (_ = O);
          },
          f: function () {
            try {
              !A && S.return != null && S.return();
            } finally {
              if (R) throw _;
            }
          },
        };
      }
      function s(h, v) {
        if (h) {
          if (typeof h == 'string') return u(h, v);
          var S = Object.prototype.toString.call(h).slice(8, -1);
          if (
            (S === 'Object' && h.constructor && (S = h.constructor.name),
            S === 'Map' || S === 'Set')
          )
            return Array.from(h);
          if (
            S === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)
          )
            return u(h, v);
        }
      }
      function u(h, v) {
        (v == null || v > h.length) && (v = h.length);
        for (var S = 0, E = new Array(v); S < v; S++) E[S] = h[S];
        return E;
      }
      var f = [],
        d = r.default.keys(),
        p = function (h) {
          var v = d[h],
            S = r.default.get(v);
          if (S)
            for (
              var E = [].concat(S.baseConcepts, S.relatedConcepts), C = 0;
              C < E.length;
              C++
            ) {
              var A = E[C];
              if (A.module === 'HTML') {
                var R = A.concept;
                if (R) {
                  var _ = f.find(function (x) {
                      return x[0] === v;
                    }),
                    O = void 0;
                  _ ? (O = _[1]) : (O = []), O.push(R), f.push([v, O]);
                }
              }
            }
        };
      for (m = 0; m < d.length; m++) p(m);
      var m,
        y = {
          entries: function () {
            return f;
          },
          forEach: function (h) {
            var v =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : null,
              S = l(f),
              E;
            try {
              for (S.s(); !(E = S.n()).done; ) {
                var C = a(E.value, 2),
                  A = C[0],
                  R = C[1];
                h.call(v, R, A, f);
              }
            } catch (_) {
              S.e(_);
            } finally {
              S.f();
            }
          },
          get: function (h) {
            var v = f.find(function (S) {
              return S[0] === h;
            });
            return v && v[1];
          },
          has: function (h) {
            return !!y.get(h);
          },
          keys: function () {
            return f.map(function (h) {
              var v = a(h, 1),
                S = v[0];
              return S;
            });
          },
          values: function () {
            return f.map(function (h) {
              var v = a(h, 2),
                S = v[1];
              return S;
            });
          },
        },
        g = (0, t.default)(y, y.entries());
      e.default = g;
    },
  }),
  ta = P({
    '../../node_modules/aria-query/lib/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.roles = e.roleElements = e.elementRoles = e.dom = e.aria = void 0);
      var t = n(by()),
        r = n(gy()),
        o = n(Jo()),
        a = n(Mg()),
        c = n(jg());
      function n(d) {
        return d && d.__esModule ? d : { default: d };
      }
      var i = t.default;
      e.aria = i;
      var l = r.default;
      e.dom = l;
      var s = o.default;
      e.roles = s;
      var u = a.default;
      e.elementRoles = u;
      var f = c.default;
      e.roleElements = f;
    },
  }),
  vs = P({
    'node_modules/pretty-format/node_modules/ansi-styles/index.js'(e, t) {
      var r =
          (c = 0) =>
          (n) =>
            `\x1B[${38 + c};5;${n}m`,
        o =
          (c = 0) =>
          (n, i, l) =>
            `\x1B[${38 + c};2;${n};${i};${l}m`;
      function a() {
        let c = new Map(),
          n = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              overline: [53, 55],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29],
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              blackBright: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39],
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49],
            },
          };
        (n.color.gray = n.color.blackBright),
          (n.bgColor.bgGray = n.bgColor.bgBlackBright),
          (n.color.grey = n.color.blackBright),
          (n.bgColor.bgGrey = n.bgColor.bgBlackBright);
        for (let [i, l] of Object.entries(n)) {
          for (let [s, u] of Object.entries(l))
            (n[s] = { open: `\x1B[${u[0]}m`, close: `\x1B[${u[1]}m` }),
              (l[s] = n[s]),
              c.set(u[0], u[1]);
          Object.defineProperty(n, i, { value: l, enumerable: !1 });
        }
        return (
          Object.defineProperty(n, 'codes', { value: c, enumerable: !1 }),
          (n.color.close = '\x1B[39m'),
          (n.bgColor.close = '\x1B[49m'),
          (n.color.ansi256 = r()),
          (n.color.ansi16m = o()),
          (n.bgColor.ansi256 = r(10)),
          (n.bgColor.ansi16m = o(10)),
          Object.defineProperties(n, {
            rgbToAnsi256: {
              value: (i, l, s) =>
                i === l && l === s
                  ? i < 8
                    ? 16
                    : i > 248
                      ? 231
                      : Math.round(((i - 8) / 247) * 24) + 232
                  : 16 +
                    36 * Math.round((i / 255) * 5) +
                    6 * Math.round((l / 255) * 5) +
                    Math.round((s / 255) * 5),
              enumerable: !1,
            },
            hexToRgb: {
              value: (i) => {
                let l = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(
                  i.toString(16)
                );
                if (!l) return [0, 0, 0];
                let { colorString: s } = l.groups;
                s.length === 3 &&
                  (s = s
                    .split('')
                    .map((f) => f + f)
                    .join(''));
                let u = Number.parseInt(s, 16);
                return [(u >> 16) & 255, (u >> 8) & 255, u & 255];
              },
              enumerable: !1,
            },
            hexToAnsi256: {
              value: (i) => n.rgbToAnsi256(...n.hexToRgb(i)),
              enumerable: !1,
            },
          }),
          n
        );
      }
      Object.defineProperty(t, 'exports', { enumerable: !0, get: a });
    },
  }),
  An = P({
    'node_modules/pretty-format/build/collections.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printIteratorEntries = r),
        (e.printIteratorValues = o),
        (e.printListItems = a),
        (e.printObjectProperties = c);
      var t = (n, i) => {
        let l = Object.keys(n).sort(i);
        return (
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(n).forEach((s) => {
              Object.getOwnPropertyDescriptor(n, s).enumerable && l.push(s);
            }),
          l
        );
      };
      function r(n, i, l, s, u, f, d = ': ') {
        let p = '',
          m = n.next();
        if (!m.done) {
          p += i.spacingOuter;
          let y = l + i.indent;
          for (; !m.done; ) {
            let g = f(m.value[0], i, y, s, u),
              h = f(m.value[1], i, y, s, u);
            (p += y + g + d + h),
              (m = n.next()),
              m.done ? i.min || (p += ',') : (p += ',' + i.spacingInner);
          }
          p += i.spacingOuter + l;
        }
        return p;
      }
      function o(n, i, l, s, u, f) {
        let d = '',
          p = n.next();
        if (!p.done) {
          d += i.spacingOuter;
          let m = l + i.indent;
          for (; !p.done; )
            (d += m + f(p.value, i, m, s, u)),
              (p = n.next()),
              p.done ? i.min || (d += ',') : (d += ',' + i.spacingInner);
          d += i.spacingOuter + l;
        }
        return d;
      }
      function a(n, i, l, s, u, f) {
        let d = '';
        if (n.length) {
          d += i.spacingOuter;
          let p = l + i.indent;
          for (let m = 0; m < n.length; m++)
            (d += p),
              m in n && (d += f(n[m], i, p, s, u)),
              m < n.length - 1
                ? (d += ',' + i.spacingInner)
                : i.min || (d += ',');
          d += i.spacingOuter + l;
        }
        return d;
      }
      function c(n, i, l, s, u, f) {
        let d = '',
          p = t(n, i.compareKeys);
        if (p.length) {
          d += i.spacingOuter;
          let m = l + i.indent;
          for (let y = 0; y < p.length; y++) {
            let g = p[y],
              h = f(g, i, m, s, u),
              v = f(n[g], i, m, s, u);
            (d += m + h + ': ' + v),
              y < p.length - 1
                ? (d += ',' + i.spacingInner)
                : i.min || (d += ',');
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
    },
  }),
  Ig = P({
    'node_modules/pretty-format/build/plugins/AsymmetricMatcher.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = An(),
        r = (function () {
          return typeof globalThis < 'u'
            ? globalThis
            : typeof r < 'u'
              ? r
              : typeof self < 'u'
                ? self
                : typeof window < 'u'
                  ? window
                  : Function('return this')();
        })(),
        o = r['jest-symbol-do-not-touch'] || r.Symbol,
        a =
          typeof o == 'function' && o.for
            ? o.for('jest.asymmetricMatcher')
            : 1267621,
        c = ' ',
        n = (u, f, d, p, m, y) => {
          let g = u.toString();
          return g === 'ArrayContaining' || g === 'ArrayNotContaining'
            ? ++p > f.maxDepth
              ? '[' + g + ']'
              : g +
                c +
                '[' +
                (0, t.printListItems)(u.sample, f, d, p, m, y) +
                ']'
            : g === 'ObjectContaining' || g === 'ObjectNotContaining'
              ? ++p > f.maxDepth
                ? '[' + g + ']'
                : g +
                  c +
                  '{' +
                  (0, t.printObjectProperties)(u.sample, f, d, p, m, y) +
                  '}'
              : g === 'StringMatching' ||
                  g === 'StringNotMatching' ||
                  g === 'StringContaining' ||
                  g === 'StringNotContaining'
                ? g + c + y(u.sample, f, d, p, m)
                : u.toAsymmetricMatcher();
        };
      e.serialize = n;
      var i = (u) => u && u.$$typeof === a;
      e.test = i;
      var l = { serialize: n, test: i },
        s = l;
      e.default = s;
    },
  }),
  Ng = P({
    '../../node_modules/ansi-regex/index.js'(e, t) {
      t.exports = ({ onlyFirst: r = !1 } = {}) => {
        let o = [
          '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
          '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
        ].join('|');
        return new RegExp(o, r ? void 0 : 'g');
      };
    },
  }),
  Bg = P({
    'node_modules/pretty-format/build/plugins/ConvertAnsi.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = o(Ng()),
        r = o(vs());
      function o(s) {
        return s && s.__esModule ? s : { default: s };
      }
      var a = (s) =>
          s.replace((0, t.default)(), (u) => {
            switch (u) {
              case r.default.red.close:
              case r.default.green.close:
              case r.default.cyan.close:
              case r.default.gray.close:
              case r.default.white.close:
              case r.default.yellow.close:
              case r.default.bgRed.close:
              case r.default.bgGreen.close:
              case r.default.bgYellow.close:
              case r.default.inverse.close:
              case r.default.dim.close:
              case r.default.bold.close:
              case r.default.reset.open:
              case r.default.reset.close:
                return '</>';
              case r.default.red.open:
                return '<red>';
              case r.default.green.open:
                return '<green>';
              case r.default.cyan.open:
                return '<cyan>';
              case r.default.gray.open:
                return '<gray>';
              case r.default.white.open:
                return '<white>';
              case r.default.yellow.open:
                return '<yellow>';
              case r.default.bgRed.open:
                return '<bgRed>';
              case r.default.bgGreen.open:
                return '<bgGreen>';
              case r.default.bgYellow.open:
                return '<bgYellow>';
              case r.default.inverse.open:
                return '<inverse>';
              case r.default.dim.open:
                return '<dim>';
              case r.default.bold.open:
                return '<bold>';
              default:
                return '';
            }
          }),
        c = (s) => typeof s == 'string' && !!s.match((0, t.default)());
      e.test = c;
      var n = (s, u, f, d, p, m) => m(a(s), u, f, d, p);
      e.serialize = n;
      var i = { serialize: n, test: c },
        l = i;
      e.default = l;
    },
  }),
  $g = P({
    'node_modules/pretty-format/build/plugins/DOMCollection.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = An(),
        r = ' ',
        o = ['DOMStringMap', 'NamedNodeMap'],
        a = /^(HTML\w*Collection|NodeList)$/,
        c = (f) => o.indexOf(f) !== -1 || a.test(f),
        n = (f) =>
          f && f.constructor && !!f.constructor.name && c(f.constructor.name);
      e.test = n;
      var i = (f) => f.constructor.name === 'NamedNodeMap',
        l = (f, d, p, m, y, g) => {
          let h = f.constructor.name;
          return ++m > d.maxDepth
            ? '[' + h + ']'
            : (d.min ? '' : h + r) +
                (o.indexOf(h) !== -1
                  ? '{' +
                    (0, t.printObjectProperties)(
                      i(f)
                        ? Array.from(f).reduce(
                            (v, S) => ((v[S.name] = S.value), v),
                            {}
                          )
                        : { ...f },
                      d,
                      p,
                      m,
                      y,
                      g
                    ) +
                    '}'
                  : '[' +
                    (0, t.printListItems)(Array.from(f), d, p, m, y, g) +
                    ']');
        };
      e.serialize = l;
      var s = { serialize: l, test: n },
        u = s;
      e.default = u;
    },
  }),
  Dg = P({
    'node_modules/pretty-format/build/plugins/lib/escapeHTML.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = t);
      function t(r) {
        return r.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
    },
  }),
  ra = P({
    'node_modules/pretty-format/build/plugins/lib/markup.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printText =
          e.printProps =
          e.printElementAsLeaf =
          e.printElement =
          e.printComment =
          e.printChildren =
            void 0);
      var t = r(Dg());
      function r(s) {
        return s && s.__esModule ? s : { default: s };
      }
      var o = (s, u, f, d, p, m, y) => {
        let g = d + f.indent,
          h = f.colors;
        return s
          .map((v) => {
            let S = u[v],
              E = y(S, f, g, p, m);
            return (
              typeof S != 'string' &&
                (E.indexOf(`
`) !== -1 && (E = f.spacingOuter + g + E + f.spacingOuter + d),
                (E = '{' + E + '}')),
              f.spacingInner +
                d +
                h.prop.open +
                v +
                h.prop.close +
                '=' +
                h.value.open +
                E +
                h.value.close
            );
          })
          .join('');
      };
      e.printProps = o;
      var a = (s, u, f, d, p, m) =>
        s
          .map(
            (y) =>
              u.spacingOuter +
              f +
              (typeof y == 'string' ? c(y, u) : m(y, u, f, d, p))
          )
          .join('');
      e.printChildren = a;
      var c = (s, u) => {
        let f = u.colors.content;
        return f.open + (0, t.default)(s) + f.close;
      };
      e.printText = c;
      var n = (s, u) => {
        let f = u.colors.comment;
        return f.open + '<!--' + (0, t.default)(s) + '-->' + f.close;
      };
      e.printComment = n;
      var i = (s, u, f, d, p) => {
        let m = d.colors.tag;
        return (
          m.open +
          '<' +
          s +
          (u && m.close + u + d.spacingOuter + p + m.open) +
          (f
            ? '>' + m.close + f + d.spacingOuter + p + m.open + '</' + s
            : (u && !d.min ? '' : ' ') + '/') +
          '>' +
          m.close
        );
      };
      e.printElement = i;
      var l = (s, u) => {
        let f = u.colors.tag;
        return f.open + '<' + s + f.close + ' …' + f.open + ' />' + f.close;
      };
      e.printElementAsLeaf = l;
    },
  }),
  kg = P({
    'node_modules/pretty-format/build/plugins/DOMElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = ra(),
        r = 1,
        o = 3,
        a = 8,
        c = 11,
        n = /^((HTML|SVG)\w*)?Element$/,
        i = (g) => {
          try {
            return typeof g.hasAttribute == 'function' && g.hasAttribute('is');
          } catch {
            return !1;
          }
        },
        l = (g) => {
          let h = g.constructor.name,
            { nodeType: v, tagName: S } = g,
            E = (typeof S == 'string' && S.includes('-')) || i(g);
          return (
            (v === r && (n.test(h) || E)) ||
            (v === o && h === 'Text') ||
            (v === a && h === 'Comment') ||
            (v === c && h === 'DocumentFragment')
          );
        },
        s = (g) => {
          var h;
          return (
            (g == null || (h = g.constructor) === null || h === void 0
              ? void 0
              : h.name) && l(g)
          );
        };
      e.test = s;
      function u(g) {
        return g.nodeType === o;
      }
      function f(g) {
        return g.nodeType === a;
      }
      function d(g) {
        return g.nodeType === c;
      }
      var p = (g, h, v, S, E, C) => {
        if (u(g)) return (0, t.printText)(g.data, h);
        if (f(g)) return (0, t.printComment)(g.data, h);
        let A = d(g) ? 'DocumentFragment' : g.tagName.toLowerCase();
        return ++S > h.maxDepth
          ? (0, t.printElementAsLeaf)(A, h)
          : (0, t.printElement)(
              A,
              (0, t.printProps)(
                d(g)
                  ? []
                  : Array.from(g.attributes)
                      .map((R) => R.name)
                      .sort(),
                d(g)
                  ? {}
                  : Array.from(g.attributes).reduce(
                      (R, _) => ((R[_.name] = _.value), R),
                      {}
                    ),
                h,
                v + h.indent,
                S,
                E,
                C
              ),
              (0, t.printChildren)(
                Array.prototype.slice.call(g.childNodes || g.children),
                h,
                v + h.indent,
                S,
                E,
                C
              ),
              h,
              v
            );
      };
      e.serialize = p;
      var m = { serialize: p, test: s },
        y = m;
      e.default = y;
    },
  }),
  Lg = P({
    'node_modules/pretty-format/build/plugins/Immutable.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = An(),
        r = '@@__IMMUTABLE_ITERABLE__@@',
        o = '@@__IMMUTABLE_LIST__@@',
        a = '@@__IMMUTABLE_KEYED__@@',
        c = '@@__IMMUTABLE_MAP__@@',
        n = '@@__IMMUTABLE_ORDERED__@@',
        i = '@@__IMMUTABLE_RECORD__@@',
        l = '@@__IMMUTABLE_SEQ__@@',
        s = '@@__IMMUTABLE_SET__@@',
        u = '@@__IMMUTABLE_STACK__@@',
        f = (_) => 'Immutable.' + _,
        d = (_) => '[' + _ + ']',
        p = ' ',
        m = '…',
        y = (_, O, x, I, H, V, L) =>
          ++I > O.maxDepth
            ? d(f(L))
            : f(L) +
              p +
              '{' +
              (0, t.printIteratorEntries)(_.entries(), O, x, I, H, V) +
              '}';
      function g(_) {
        let O = 0;
        return {
          next() {
            if (O < _._keys.length) {
              let x = _._keys[O++];
              return { done: !1, value: [x, _.get(x)] };
            }
            return { done: !0, value: void 0 };
          },
        };
      }
      var h = (_, O, x, I, H, V) => {
          let L = f(_._name || 'Record');
          return ++I > O.maxDepth
            ? d(L)
            : L +
                p +
                '{' +
                (0, t.printIteratorEntries)(g(_), O, x, I, H, V) +
                '}';
        },
        v = (_, O, x, I, H, V) => {
          let L = f('Seq');
          return ++I > O.maxDepth
            ? d(L)
            : _[a]
              ? L +
                p +
                '{' +
                (_._iter || _._object
                  ? (0, t.printIteratorEntries)(_.entries(), O, x, I, H, V)
                  : m) +
                '}'
              : L +
                p +
                '[' +
                (_._iter || _._array || _._collection || _._iterable
                  ? (0, t.printIteratorValues)(_.values(), O, x, I, H, V)
                  : m) +
                ']';
        },
        S = (_, O, x, I, H, V, L) =>
          ++I > O.maxDepth
            ? d(f(L))
            : f(L) +
              p +
              '[' +
              (0, t.printIteratorValues)(_.values(), O, x, I, H, V) +
              ']',
        E = (_, O, x, I, H, V) =>
          _[c]
            ? y(_, O, x, I, H, V, _[n] ? 'OrderedMap' : 'Map')
            : _[o]
              ? S(_, O, x, I, H, V, 'List')
              : _[s]
                ? S(_, O, x, I, H, V, _[n] ? 'OrderedSet' : 'Set')
                : _[u]
                  ? S(_, O, x, I, H, V, 'Stack')
                  : _[l]
                    ? v(_, O, x, I, H, V)
                    : h(_, O, x, I, H, V);
      e.serialize = E;
      var C = (_) => _ && (_[r] === !0 || _[i] === !0);
      e.test = C;
      var A = { serialize: E, test: C },
        R = A;
      e.default = R;
    },
  }),
  Fg = P({
    'node_modules/react-is/cjs/react-is.development.js'(e) {
      (function () {
        var t = 60103,
          r = 60106,
          o = 60107,
          a = 60108,
          c = 60114,
          n = 60109,
          i = 60110,
          l = 60112,
          s = 60113,
          u = 60120,
          f = 60115,
          d = 60116,
          p = 60121,
          m = 60122,
          y = 60117,
          g = 60129,
          h = 60131;
        if (typeof Symbol == 'function' && Symbol.for) {
          var v = Symbol.for;
          (t = v('react.element')),
            (r = v('react.portal')),
            (o = v('react.fragment')),
            (a = v('react.strict_mode')),
            (c = v('react.profiler')),
            (n = v('react.provider')),
            (i = v('react.context')),
            (l = v('react.forward_ref')),
            (s = v('react.suspense')),
            (u = v('react.suspense_list')),
            (f = v('react.memo')),
            (d = v('react.lazy')),
            (p = v('react.block')),
            (m = v('react.server.block')),
            (y = v('react.fundamental')),
            v('react.scope'),
            v('react.opaque.id'),
            (g = v('react.debug_trace_mode')),
            v('react.offscreen'),
            (h = v('react.legacy_hidden'));
        }
        var S = !1;
        function E($) {
          return !!(
            typeof $ == 'string' ||
            typeof $ == 'function' ||
            $ === o ||
            $ === c ||
            $ === g ||
            $ === a ||
            $ === s ||
            $ === u ||
            $ === h ||
            S ||
            (typeof $ == 'object' &&
              $ !== null &&
              ($.$$typeof === d ||
                $.$$typeof === f ||
                $.$$typeof === n ||
                $.$$typeof === i ||
                $.$$typeof === l ||
                $.$$typeof === y ||
                $.$$typeof === p ||
                $[0] === m))
          );
        }
        function C($) {
          if (typeof $ == 'object' && $ !== null) {
            var Y = $.$$typeof;
            switch (Y) {
              case t:
                var W = $.type;
                switch (W) {
                  case o:
                  case c:
                  case a:
                  case s:
                  case u:
                    return W;
                  default:
                    var k = W && W.$$typeof;
                    switch (k) {
                      case i:
                      case l:
                      case d:
                      case f:
                      case n:
                        return k;
                      default:
                        return Y;
                    }
                }
              case r:
                return Y;
            }
          }
        }
        var A = i,
          R = n,
          _ = t,
          O = l,
          x = o,
          I = d,
          H = f,
          V = r,
          L = c,
          re = a,
          G = s,
          oe = !1,
          ae = !1;
        function ue($) {
          return (
            oe ||
              ((oe = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.'
              )),
            !1
          );
        }
        function Z($) {
          return (
            ae ||
              ((ae = !0),
              console.warn(
                'The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.'
              )),
            !1
          );
        }
        function q($) {
          return C($) === i;
        }
        function M($) {
          return C($) === n;
        }
        function F($) {
          return typeof $ == 'object' && $ !== null && $.$$typeof === t;
        }
        function z($) {
          return C($) === l;
        }
        function X($) {
          return C($) === o;
        }
        function B($) {
          return C($) === d;
        }
        function D($) {
          return C($) === f;
        }
        function U($) {
          return C($) === r;
        }
        function ee($) {
          return C($) === c;
        }
        function b($) {
          return C($) === a;
        }
        function N($) {
          return C($) === s;
        }
        (e.ContextConsumer = A),
          (e.ContextProvider = R),
          (e.Element = _),
          (e.ForwardRef = O),
          (e.Fragment = x),
          (e.Lazy = I),
          (e.Memo = H),
          (e.Portal = V),
          (e.Profiler = L),
          (e.StrictMode = re),
          (e.Suspense = G),
          (e.isAsyncMode = ue),
          (e.isConcurrentMode = Z),
          (e.isContextConsumer = q),
          (e.isContextProvider = M),
          (e.isElement = F),
          (e.isForwardRef = z),
          (e.isFragment = X),
          (e.isLazy = B),
          (e.isMemo = D),
          (e.isPortal = U),
          (e.isProfiler = ee),
          (e.isStrictMode = b),
          (e.isSuspense = N),
          (e.isValidElementType = E),
          (e.typeOf = C);
      })();
    },
  }),
  Ug = P({
    'node_modules/react-is/index.js'(e, t) {
      t.exports = Fg();
    },
  }),
  Hg = P({
    'node_modules/pretty-format/build/plugins/ReactElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = a(Ug()),
        r = ra();
      function o(d) {
        if (typeof WeakMap != 'function') return null;
        var p = new WeakMap(),
          m = new WeakMap();
        return (o = function (y) {
          return y ? m : p;
        })(d);
      }
      function a(d, p) {
        if (!p && d && d.__esModule) return d;
        if (d === null || (typeof d != 'object' && typeof d != 'function'))
          return { default: d };
        var m = o(p);
        if (m && m.has(d)) return m.get(d);
        var y = {},
          g = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var h in d)
          if (h !== 'default' && Object.prototype.hasOwnProperty.call(d, h)) {
            var v = g ? Object.getOwnPropertyDescriptor(d, h) : null;
            v && (v.get || v.set)
              ? Object.defineProperty(y, h, v)
              : (y[h] = d[h]);
          }
        return (y.default = d), m && m.set(d, y), y;
      }
      var c = (d, p = []) => (
          Array.isArray(d)
            ? d.forEach((m) => {
                c(m, p);
              })
            : d != null && d !== !1 && p.push(d),
          p
        ),
        n = (d) => {
          let p = d.type;
          if (typeof p == 'string') return p;
          if (typeof p == 'function')
            return p.displayName || p.name || 'Unknown';
          if (t.isFragment(d)) return 'React.Fragment';
          if (t.isSuspense(d)) return 'React.Suspense';
          if (typeof p == 'object' && p !== null) {
            if (t.isContextProvider(d)) return 'Context.Provider';
            if (t.isContextConsumer(d)) return 'Context.Consumer';
            if (t.isForwardRef(d)) {
              if (p.displayName) return p.displayName;
              let m = p.render.displayName || p.render.name || '';
              return m !== '' ? 'ForwardRef(' + m + ')' : 'ForwardRef';
            }
            if (t.isMemo(d)) {
              let m = p.displayName || p.type.displayName || p.type.name || '';
              return m !== '' ? 'Memo(' + m + ')' : 'Memo';
            }
          }
          return 'UNDEFINED';
        },
        i = (d) => {
          let { props: p } = d;
          return Object.keys(p)
            .filter((m) => m !== 'children' && p[m] !== void 0)
            .sort();
        },
        l = (d, p, m, y, g, h) =>
          ++y > p.maxDepth
            ? (0, r.printElementAsLeaf)(n(d), p)
            : (0, r.printElement)(
                n(d),
                (0, r.printProps)(i(d), d.props, p, m + p.indent, y, g, h),
                (0, r.printChildren)(
                  c(d.props.children),
                  p,
                  m + p.indent,
                  y,
                  g,
                  h
                ),
                p,
                m
              );
      e.serialize = l;
      var s = (d) => d != null && t.isElement(d);
      e.test = s;
      var u = { serialize: l, test: s },
        f = u;
      e.default = f;
    },
  }),
  zg = P({
    'node_modules/pretty-format/build/plugins/ReactTestComponent.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = ra(),
        r = (function () {
          return typeof globalThis < 'u'
            ? globalThis
            : typeof r < 'u'
              ? r
              : typeof self < 'u'
                ? self
                : typeof window < 'u'
                  ? window
                  : Function('return this')();
        })(),
        o = r['jest-symbol-do-not-touch'] || r.Symbol,
        a =
          typeof o == 'function' && o.for
            ? o.for('react.test.json')
            : 245830487,
        c = (u) => {
          let { props: f } = u;
          return f
            ? Object.keys(f)
                .filter((d) => f[d] !== void 0)
                .sort()
            : [];
        },
        n = (u, f, d, p, m, y) =>
          ++p > f.maxDepth
            ? (0, t.printElementAsLeaf)(u.type, f)
            : (0, t.printElement)(
                u.type,
                u.props
                  ? (0, t.printProps)(c(u), u.props, f, d + f.indent, p, m, y)
                  : '',
                u.children
                  ? (0, t.printChildren)(u.children, f, d + f.indent, p, m, y)
                  : '',
                f,
                d
              );
      e.serialize = n;
      var i = (u) => u && u.$$typeof === a;
      e.test = i;
      var l = { serialize: n, test: i },
        s = l;
      e.default = s;
    },
  }),
  Vg = P({
    'node_modules/pretty-format/build/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = e.DEFAULT_OPTIONS = void 0),
        (e.format = D),
        (e.plugins = void 0);
      var t = u(vs()),
        r = An(),
        o = u(Ig()),
        a = u(Bg()),
        c = u($g()),
        n = u(kg()),
        i = u(Lg()),
        l = u(Hg()),
        s = u(zg());
      function u(b) {
        return b && b.__esModule ? b : { default: b };
      }
      var f = Object.prototype.toString,
        d = Date.prototype.toISOString,
        p = Error.prototype.toString,
        m = RegExp.prototype.toString,
        y = (b) =>
          (typeof b.constructor == 'function' && b.constructor.name) ||
          'Object',
        g = (b) => typeof window < 'u' && b === window,
        h = /^Symbol\((.*)\)(.*)$/,
        v = /\n/gi,
        S = class extends Error {
          constructor(b, N) {
            super(b), (this.stack = N), (this.name = this.constructor.name);
          }
        };
      function E(b) {
        return (
          b === '[object Array]' ||
          b === '[object ArrayBuffer]' ||
          b === '[object DataView]' ||
          b === '[object Float32Array]' ||
          b === '[object Float64Array]' ||
          b === '[object Int8Array]' ||
          b === '[object Int16Array]' ||
          b === '[object Int32Array]' ||
          b === '[object Uint8Array]' ||
          b === '[object Uint8ClampedArray]' ||
          b === '[object Uint16Array]' ||
          b === '[object Uint32Array]'
        );
      }
      function C(b) {
        return Object.is(b, -0) ? '-0' : String(b);
      }
      function A(b) {
        return `${b}n`;
      }
      function R(b, N) {
        return N ? '[Function ' + (b.name || 'anonymous') + ']' : '[Function]';
      }
      function _(b) {
        return String(b).replace(h, 'Symbol($1)');
      }
      function O(b) {
        return '[' + p.call(b) + ']';
      }
      function x(b, N, $, Y) {
        if (b === !0 || b === !1) return '' + b;
        if (b === void 0) return 'undefined';
        if (b === null) return 'null';
        let W = typeof b;
        if (W === 'number') return C(b);
        if (W === 'bigint') return A(b);
        if (W === 'string')
          return Y ? '"' + b.replace(/"|\\/g, '\\$&') + '"' : '"' + b + '"';
        if (W === 'function') return R(b, N);
        if (W === 'symbol') return _(b);
        let k = f.call(b);
        return k === '[object WeakMap]'
          ? 'WeakMap {}'
          : k === '[object WeakSet]'
            ? 'WeakSet {}'
            : k === '[object Function]' || k === '[object GeneratorFunction]'
              ? R(b, N)
              : k === '[object Symbol]'
                ? _(b)
                : k === '[object Date]'
                  ? isNaN(+b)
                    ? 'Date { NaN }'
                    : d.call(b)
                  : k === '[object Error]'
                    ? O(b)
                    : k === '[object RegExp]'
                      ? $
                        ? m.call(b).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
                        : m.call(b)
                      : b instanceof Error
                        ? O(b)
                        : null;
      }
      function I(b, N, $, Y, W, k) {
        if (W.indexOf(b) !== -1) return '[Circular]';
        (W = W.slice()), W.push(b);
        let ie = ++Y > N.maxDepth,
          se = N.min;
        if (
          N.callToJSON &&
          !ie &&
          b.toJSON &&
          typeof b.toJSON == 'function' &&
          !k
        )
          return re(b.toJSON(), N, $, Y, W, !0);
        let fe = f.call(b);
        return fe === '[object Arguments]'
          ? ie
            ? '[Arguments]'
            : (se ? '' : 'Arguments ') +
              '[' +
              (0, r.printListItems)(b, N, $, Y, W, re) +
              ']'
          : E(fe)
            ? ie
              ? '[' + b.constructor.name + ']'
              : (se ||
                (!N.printBasicPrototype && b.constructor.name === 'Array')
                  ? ''
                  : b.constructor.name + ' ') +
                '[' +
                (0, r.printListItems)(b, N, $, Y, W, re) +
                ']'
            : fe === '[object Map]'
              ? ie
                ? '[Map]'
                : 'Map {' +
                  (0, r.printIteratorEntries)(
                    b.entries(),
                    N,
                    $,
                    Y,
                    W,
                    re,
                    ' => '
                  ) +
                  '}'
              : fe === '[object Set]'
                ? ie
                  ? '[Set]'
                  : 'Set {' +
                    (0, r.printIteratorValues)(b.values(), N, $, Y, W, re) +
                    '}'
                : ie || g(b)
                  ? '[' + y(b) + ']'
                  : (se || (!N.printBasicPrototype && y(b) === 'Object')
                      ? ''
                      : y(b) + ' ') +
                    '{' +
                    (0, r.printObjectProperties)(b, N, $, Y, W, re) +
                    '}';
      }
      function H(b) {
        return b.serialize != null;
      }
      function V(b, N, $, Y, W, k) {
        let ie;
        try {
          ie = H(b)
            ? b.serialize(N, $, Y, W, k, re)
            : b.print(
                N,
                (se) => re(se, $, Y, W, k),
                (se) => {
                  let fe = Y + $.indent;
                  return (
                    fe +
                    se.replace(
                      v,
                      `
` + fe
                    )
                  );
                },
                {
                  edgeSpacing: $.spacingOuter,
                  min: $.min,
                  spacing: $.spacingInner,
                },
                $.colors
              );
        } catch (se) {
          throw new S(se.message, se.stack);
        }
        if (typeof ie != 'string')
          throw new Error(
            `pretty-format: Plugin must return type "string" but instead returned "${typeof ie}".`
          );
        return ie;
      }
      function L(b, N) {
        for (let $ = 0; $ < b.length; $++)
          try {
            if (b[$].test(N)) return b[$];
          } catch (Y) {
            throw new S(Y.message, Y.stack);
          }
        return null;
      }
      function re(b, N, $, Y, W, k) {
        let ie = L(N.plugins, b);
        if (ie !== null) return V(ie, b, N, $, Y, W);
        let se = x(b, N.printFunctionName, N.escapeRegex, N.escapeString);
        return se !== null ? se : I(b, N, $, Y, W, k);
      }
      var G = {
          comment: 'gray',
          content: 'reset',
          prop: 'yellow',
          tag: 'cyan',
          value: 'green',
        },
        oe = Object.keys(G),
        ae = {
          callToJSON: !0,
          compareKeys: void 0,
          escapeRegex: !1,
          escapeString: !0,
          highlight: !1,
          indent: 2,
          maxDepth: 1 / 0,
          min: !1,
          plugins: [],
          printBasicPrototype: !0,
          printFunctionName: !0,
          theme: G,
        };
      e.DEFAULT_OPTIONS = ae;
      function ue(b) {
        if (
          (Object.keys(b).forEach((N) => {
            if (!ae.hasOwnProperty(N))
              throw new Error(`pretty-format: Unknown option "${N}".`);
          }),
          b.min && b.indent !== void 0 && b.indent !== 0)
        )
          throw new Error(
            'pretty-format: Options "min" and "indent" cannot be used together.'
          );
        if (b.theme !== void 0) {
          if (b.theme === null)
            throw new Error('pretty-format: Option "theme" must not be null.');
          if (typeof b.theme != 'object')
            throw new Error(
              `pretty-format: Option "theme" must be of type "object" but instead received "${typeof b.theme}".`
            );
        }
      }
      var Z = (b) =>
          oe.reduce((N, $) => {
            let Y = b.theme && b.theme[$] !== void 0 ? b.theme[$] : G[$],
              W = Y && t.default[Y];
            if (W && typeof W.close == 'string' && typeof W.open == 'string')
              N[$] = W;
            else
              throw new Error(
                `pretty-format: Option "theme" has a key "${$}" whose value "${Y}" is undefined in ansi-styles.`
              );
            return N;
          }, Object.create(null)),
        q = () =>
          oe.reduce(
            (b, N) => ((b[N] = { close: '', open: '' }), b),
            Object.create(null)
          ),
        M = (b) =>
          b && b.printFunctionName !== void 0
            ? b.printFunctionName
            : ae.printFunctionName,
        F = (b) =>
          b && b.escapeRegex !== void 0 ? b.escapeRegex : ae.escapeRegex,
        z = (b) =>
          b && b.escapeString !== void 0 ? b.escapeString : ae.escapeString,
        X = (b) => {
          var N;
          return {
            callToJSON:
              b && b.callToJSON !== void 0 ? b.callToJSON : ae.callToJSON,
            colors: b && b.highlight ? Z(b) : q(),
            compareKeys:
              b && typeof b.compareKeys == 'function'
                ? b.compareKeys
                : ae.compareKeys,
            escapeRegex: F(b),
            escapeString: z(b),
            indent:
              b && b.min
                ? ''
                : B(b && b.indent !== void 0 ? b.indent : ae.indent),
            maxDepth: b && b.maxDepth !== void 0 ? b.maxDepth : ae.maxDepth,
            min: b && b.min !== void 0 ? b.min : ae.min,
            plugins: b && b.plugins !== void 0 ? b.plugins : ae.plugins,
            printBasicPrototype:
              (N = b == null ? void 0 : b.printBasicPrototype) !== null &&
              N !== void 0
                ? N
                : !0,
            printFunctionName: M(b),
            spacingInner:
              b && b.min
                ? ' '
                : `
`,
            spacingOuter:
              b && b.min
                ? ''
                : `
`,
          };
        };
      function B(b) {
        return new Array(b + 1).join(' ');
      }
      function D(b, N) {
        if (N && (ue(N), N.plugins)) {
          let Y = L(N.plugins, b);
          if (Y !== null) return V(Y, b, X(N), '', 0, []);
        }
        let $ = x(b, M(N), F(N), z(N));
        return $ !== null ? $ : I(b, X(N), '', 0, []);
      }
      var U = {
        AsymmetricMatcher: o.default,
        ConvertAnsi: a.default,
        DOMCollection: c.default,
        DOMElement: n.default,
        Immutable: i.default,
        ReactElement: l.default,
        ReactTestComponent: s.default,
      };
      e.plugins = U;
      var ee = D;
      e.default = ee;
    },
  }),
  Wg = P({
    '../../node_modules/lz-string/libs/lz-string.js'(e, t) {
      var r = (function () {
        var o = String.fromCharCode,
          a =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          c =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
          n = {};
        function i(s, u) {
          if (!n[s]) {
            n[s] = {};
            for (var f = 0; f < s.length; f++) n[s][s.charAt(f)] = f;
          }
          return n[s][u];
        }
        var l = {
          compressToBase64: function (s) {
            if (s == null) return '';
            var u = l._compress(s, 6, function (f) {
              return a.charAt(f);
            });
            switch (u.length % 4) {
              default:
              case 0:
                return u;
              case 1:
                return u + '===';
              case 2:
                return u + '==';
              case 3:
                return u + '=';
            }
          },
          decompressFromBase64: function (s) {
            return s == null
              ? ''
              : s == ''
                ? null
                : l._decompress(s.length, 32, function (u) {
                    return i(a, s.charAt(u));
                  });
          },
          compressToUTF16: function (s) {
            return s == null
              ? ''
              : l._compress(s, 15, function (u) {
                  return o(u + 32);
                }) + ' ';
          },
          decompressFromUTF16: function (s) {
            return s == null
              ? ''
              : s == ''
                ? null
                : l._decompress(s.length, 16384, function (u) {
                    return s.charCodeAt(u) - 32;
                  });
          },
          compressToUint8Array: function (s) {
            for (
              var u = l.compress(s),
                f = new Uint8Array(u.length * 2),
                d = 0,
                p = u.length;
              d < p;
              d++
            ) {
              var m = u.charCodeAt(d);
              (f[d * 2] = m >>> 8), (f[d * 2 + 1] = m % 256);
            }
            return f;
          },
          decompressFromUint8Array: function (s) {
            if (s == null) return l.decompress(s);
            for (
              var u = new Array(s.length / 2), f = 0, d = u.length;
              f < d;
              f++
            )
              u[f] = s[f * 2] * 256 + s[f * 2 + 1];
            var p = [];
            return (
              u.forEach(function (m) {
                p.push(o(m));
              }),
              l.decompress(p.join(''))
            );
          },
          compressToEncodedURIComponent: function (s) {
            return s == null
              ? ''
              : l._compress(s, 6, function (u) {
                  return c.charAt(u);
                });
          },
          decompressFromEncodedURIComponent: function (s) {
            return s == null
              ? ''
              : s == ''
                ? null
                : ((s = s.replace(/ /g, '+')),
                  l._decompress(s.length, 32, function (u) {
                    return i(c, s.charAt(u));
                  }));
          },
          compress: function (s) {
            return l._compress(s, 16, function (u) {
              return o(u);
            });
          },
          _compress: function (s, u, f) {
            if (s == null) return '';
            var d,
              p,
              m = {},
              y = {},
              g = '',
              h = '',
              v = '',
              S = 2,
              E = 3,
              C = 2,
              A = [],
              R = 0,
              _ = 0,
              O;
            for (O = 0; O < s.length; O += 1)
              if (
                ((g = s.charAt(O)),
                Object.prototype.hasOwnProperty.call(m, g) ||
                  ((m[g] = E++), (y[g] = !0)),
                (h = v + g),
                Object.prototype.hasOwnProperty.call(m, h))
              )
                v = h;
              else {
                if (Object.prototype.hasOwnProperty.call(y, v)) {
                  if (v.charCodeAt(0) < 256) {
                    for (d = 0; d < C; d++)
                      (R = R << 1),
                        _ == u - 1 ? ((_ = 0), A.push(f(R)), (R = 0)) : _++;
                    for (p = v.charCodeAt(0), d = 0; d < 8; d++)
                      (R = (R << 1) | (p & 1)),
                        _ == u - 1 ? ((_ = 0), A.push(f(R)), (R = 0)) : _++,
                        (p = p >> 1);
                  } else {
                    for (p = 1, d = 0; d < C; d++)
                      (R = (R << 1) | p),
                        _ == u - 1 ? ((_ = 0), A.push(f(R)), (R = 0)) : _++,
                        (p = 0);
                    for (p = v.charCodeAt(0), d = 0; d < 16; d++)
                      (R = (R << 1) | (p & 1)),
                        _ == u - 1 ? ((_ = 0), A.push(f(R)), (R = 0)) : _++,
                        (p = p >> 1);
                  }
                  S--, S == 0 && ((S = Math.pow(2, C)), C++), delete y[v];
                } else
                  for (p = m[v], d = 0; d < C; d++)
                    (R = (R << 1) | (p & 1)),
                      _ == u - 1 ? ((_ = 0), A.push(f(R)), (R = 0)) : _++,
                      (p = p >> 1);
                S--,
                  S == 0 && ((S = Math.pow(2, C)), C++),
                  (m[h] = E++),
                  (v = String(g));
              }
            if (v !== '') {
              if (Object.prototype.hasOwnProperty.call(y, v)) {
                if (v.charCodeAt(0) < 256) {
                  for (d = 0; d < C; d++)
                    (R = R << 1),
                      _ == u - 1 ? ((_ = 0), A.push(f(R)), (R = 0)) : _++;
                  for (p = v.charCodeAt(0), d = 0; d < 8; d++)
                    (R = (R << 1) | (p & 1)),
                      _ == u - 1 ? ((_ = 0), A.push(f(R)), (R = 0)) : _++,
                      (p = p >> 1);
                } else {
                  for (p = 1, d = 0; d < C; d++)
                    (R = (R << 1) | p),
                      _ == u - 1 ? ((_ = 0), A.push(f(R)), (R = 0)) : _++,
                      (p = 0);
                  for (p = v.charCodeAt(0), d = 0; d < 16; d++)
                    (R = (R << 1) | (p & 1)),
                      _ == u - 1 ? ((_ = 0), A.push(f(R)), (R = 0)) : _++,
                      (p = p >> 1);
                }
                S--, S == 0 && ((S = Math.pow(2, C)), C++), delete y[v];
              } else
                for (p = m[v], d = 0; d < C; d++)
                  (R = (R << 1) | (p & 1)),
                    _ == u - 1 ? ((_ = 0), A.push(f(R)), (R = 0)) : _++,
                    (p = p >> 1);
              S--, S == 0 && ((S = Math.pow(2, C)), C++);
            }
            for (p = 2, d = 0; d < C; d++)
              (R = (R << 1) | (p & 1)),
                _ == u - 1 ? ((_ = 0), A.push(f(R)), (R = 0)) : _++,
                (p = p >> 1);
            for (;;)
              if (((R = R << 1), _ == u - 1)) {
                A.push(f(R));
                break;
              } else _++;
            return A.join('');
          },
          decompress: function (s) {
            return s == null
              ? ''
              : s == ''
                ? null
                : l._decompress(s.length, 32768, function (u) {
                    return s.charCodeAt(u);
                  });
          },
          _decompress: function (s, u, f) {
            var d = [],
              p = 4,
              m = 4,
              y = 3,
              g = '',
              h = [],
              v,
              S,
              E,
              C,
              A,
              R,
              _,
              O = { val: f(0), position: u, index: 1 };
            for (v = 0; v < 3; v += 1) d[v] = v;
            for (E = 0, A = Math.pow(2, 2), R = 1; R != A; )
              (C = O.val & O.position),
                (O.position >>= 1),
                O.position == 0 && ((O.position = u), (O.val = f(O.index++))),
                (E |= (C > 0 ? 1 : 0) * R),
                (R <<= 1);
            switch (E) {
              case 0:
                for (E = 0, A = Math.pow(2, 8), R = 1; R != A; )
                  (C = O.val & O.position),
                    (O.position >>= 1),
                    O.position == 0 &&
                      ((O.position = u), (O.val = f(O.index++))),
                    (E |= (C > 0 ? 1 : 0) * R),
                    (R <<= 1);
                _ = o(E);
                break;
              case 1:
                for (E = 0, A = Math.pow(2, 16), R = 1; R != A; )
                  (C = O.val & O.position),
                    (O.position >>= 1),
                    O.position == 0 &&
                      ((O.position = u), (O.val = f(O.index++))),
                    (E |= (C > 0 ? 1 : 0) * R),
                    (R <<= 1);
                _ = o(E);
                break;
              case 2:
                return '';
            }
            for (d[3] = _, S = _, h.push(_); ; ) {
              if (O.index > s) return '';
              for (E = 0, A = Math.pow(2, y), R = 1; R != A; )
                (C = O.val & O.position),
                  (O.position >>= 1),
                  O.position == 0 && ((O.position = u), (O.val = f(O.index++))),
                  (E |= (C > 0 ? 1 : 0) * R),
                  (R <<= 1);
              switch ((_ = E)) {
                case 0:
                  for (E = 0, A = Math.pow(2, 8), R = 1; R != A; )
                    (C = O.val & O.position),
                      (O.position >>= 1),
                      O.position == 0 &&
                        ((O.position = u), (O.val = f(O.index++))),
                      (E |= (C > 0 ? 1 : 0) * R),
                      (R <<= 1);
                  (d[m++] = o(E)), (_ = m - 1), p--;
                  break;
                case 1:
                  for (E = 0, A = Math.pow(2, 16), R = 1; R != A; )
                    (C = O.val & O.position),
                      (O.position >>= 1),
                      O.position == 0 &&
                        ((O.position = u), (O.val = f(O.index++))),
                      (E |= (C > 0 ? 1 : 0) * R),
                      (R <<= 1);
                  (d[m++] = o(E)), (_ = m - 1), p--;
                  break;
                case 2:
                  return h.join('');
              }
              if ((p == 0 && ((p = Math.pow(2, y)), y++), d[_])) g = d[_];
              else if (_ === m) g = S + S.charAt(0);
              else return null;
              h.push(g),
                (d[m++] = S + g.charAt(0)),
                p--,
                (S = g),
                p == 0 && ((p = Math.pow(2, y)), y++);
            }
          },
        };
        return l;
      })();
      typeof define == 'function' && define.amd
        ? define(function () {
            return r;
          })
        : typeof t < 'u' && t != null
          ? (t.exports = r)
          : typeof angular < 'u' &&
            angular != null &&
            angular.module('LZString', []).factory('LZString', function () {
              return r;
            });
    },
  }),
  Gg = P({
    'node_modules/@testing-library/dom/dist/helpers.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TEXT_NODE = void 0),
        (e.checkContainerType = c),
        (e.getDocument = o),
        (e.getWindowFromNode = a),
        (e.jestFakeTimersAreEnabled = r);
      var t = 3;
      e.TEXT_NODE = t;
      function r() {
        return typeof jest < 'u' && jest !== null
          ? setTimeout._isMockFunction === !0 ||
              Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
          : !1;
      }
      function o() {
        if (typeof window > 'u')
          throw new Error('Could not find default container');
        return window.document;
      }
      function a(n) {
        if (n.defaultView) return n.defaultView;
        if (n.ownerDocument && n.ownerDocument.defaultView)
          return n.ownerDocument.defaultView;
        if (n.window) return n.window;
        throw n.ownerDocument && n.ownerDocument.defaultView === null
          ? new Error(
              'It looks like the window object is not available for the provided node.'
            )
          : n.then instanceof Function
            ? new Error(
                'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?'
              )
            : Array.isArray(n)
              ? new Error(
                  'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?'
                )
              : typeof n.debug == 'function' &&
                  typeof n.logTestingPlaygroundURL == 'function'
                ? new Error(
                    'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?'
                  )
                : new Error(
                    `The given node is not an Element, the node type is: ${typeof n}.`
                  );
      }
      function c(n) {
        if (
          !n ||
          typeof n.querySelector != 'function' ||
          typeof n.querySelectorAll != 'function'
        )
          throw new TypeError(
            `Expected container to be an Element, a Document or a DocumentFragment but got ${i(n)}.`
          );
        function i(l) {
          return typeof l == 'object'
            ? l === null
              ? 'null'
              : l.constructor.name
            : typeof l;
        }
      }
    },
  }),
  _s = P({
    'node_modules/@testing-library/dom/dist/event-map.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.eventMap = e.eventAliasMap = void 0);
      var t = {
        copy: {
          EventType: 'ClipboardEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        cut: {
          EventType: 'ClipboardEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        paste: {
          EventType: 'ClipboardEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        compositionEnd: {
          EventType: 'CompositionEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        compositionStart: {
          EventType: 'CompositionEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        compositionUpdate: {
          EventType: 'CompositionEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        keyDown: {
          EventType: 'KeyboardEvent',
          defaultInit: {
            bubbles: !0,
            cancelable: !0,
            charCode: 0,
            composed: !0,
          },
        },
        keyPress: {
          EventType: 'KeyboardEvent',
          defaultInit: {
            bubbles: !0,
            cancelable: !0,
            charCode: 0,
            composed: !0,
          },
        },
        keyUp: {
          EventType: 'KeyboardEvent',
          defaultInit: {
            bubbles: !0,
            cancelable: !0,
            charCode: 0,
            composed: !0,
          },
        },
        focus: {
          EventType: 'FocusEvent',
          defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
        },
        blur: {
          EventType: 'FocusEvent',
          defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
        },
        focusIn: {
          EventType: 'FocusEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        focusOut: {
          EventType: 'FocusEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        change: {
          EventType: 'Event',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        input: {
          EventType: 'InputEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        invalid: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !0 },
        },
        submit: {
          EventType: 'Event',
          defaultInit: { bubbles: !0, cancelable: !0 },
        },
        reset: {
          EventType: 'Event',
          defaultInit: { bubbles: !0, cancelable: !0 },
        },
        click: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 },
        },
        contextMenu: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        dblClick: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        drag: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        dragEnd: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        dragEnter: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        dragExit: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        dragLeave: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        dragOver: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        dragStart: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        drop: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseDown: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseEnter: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
        },
        mouseLeave: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
        },
        mouseMove: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseOut: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseOver: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseUp: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        select: {
          EventType: 'Event',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        touchCancel: {
          EventType: 'TouchEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        touchEnd: {
          EventType: 'TouchEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        touchMove: {
          EventType: 'TouchEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        touchStart: {
          EventType: 'TouchEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        resize: {
          EventType: 'UIEvent',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        scroll: {
          EventType: 'UIEvent',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        wheel: {
          EventType: 'WheelEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        abort: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        canPlay: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        canPlayThrough: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        durationChange: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        emptied: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        encrypted: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        ended: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        loadedData: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        loadedMetadata: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        loadStart: {
          EventType: 'ProgressEvent',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        pause: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        play: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        playing: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        progress: {
          EventType: 'ProgressEvent',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        rateChange: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        seeked: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        seeking: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        stalled: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        suspend: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        timeUpdate: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        volumeChange: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        waiting: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        load: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        error: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        animationStart: {
          EventType: 'AnimationEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        animationEnd: {
          EventType: 'AnimationEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        animationIteration: {
          EventType: 'AnimationEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        transitionCancel: {
          EventType: 'TransitionEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        transitionEnd: {
          EventType: 'TransitionEvent',
          defaultInit: { bubbles: !0, cancelable: !0 },
        },
        transitionRun: {
          EventType: 'TransitionEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        transitionStart: {
          EventType: 'TransitionEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        pointerOver: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerEnter: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        pointerDown: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerMove: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerUp: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerCancel: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        pointerOut: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerLeave: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        gotPointerCapture: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        lostPointerCapture: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        popState: {
          EventType: 'PopStateEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        offline: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
        online: {
          EventType: 'Event',
          defaultInit: { bubbles: !1, cancelable: !1 },
        },
      };
      e.eventMap = t;
      var r = { doubleClick: 'dblClick' };
      e.eventAliasMap = r;
    },
  }),
  it = _e(Mp(), 1),
  Hn = it.default.expect;
it.default.version;
it.default.Assertion;
it.default.AssertionError;
var an = it.default.util;
it.default.config;
var zn = it.default.use;
it.default.should;
var Kg = it.default.assert;
it.default.core;
var Yg = it.default,
  Jg = (() => {
    let e;
    return (
      typeof window < 'u'
        ? (e = window)
        : typeof globalThis < 'u'
          ? (e = globalThis)
          : typeof global < 'u'
            ? (e = global)
            : typeof self < 'u'
              ? (e = self)
              : (e = {}),
      e
    );
  })();
function Ot(e, t, r) {
  let o = typeof e;
  if (!r.includes(o))
    throw new TypeError(
      `${t} value must be ${r.join(' or ')}, received "${o}"`
    );
}
function Xg(e) {
  return e != null && typeof e == 'object' && !Array.isArray(e);
}
function Qg(e) {
  return (
    e === Object.prototype || e === Function.prototype || e === RegExp.prototype
  );
}
function ao(e) {
  return Object.prototype.toString.apply(e).slice(8, -1);
}
function Zg(e, t) {
  let r = typeof t == 'function' ? t : (o) => t.add(o);
  Object.getOwnPropertyNames(e).forEach(r),
    Object.getOwnPropertySymbols(e).forEach(r);
}
function Es(e) {
  let t = new Set();
  return Qg(e) ? [] : (Zg(e, t), Array.from(t));
}
var ws = { forceWritable: !1 };
function Ya(e, t = ws) {
  return io(e, new WeakMap(), t);
}
function io(e, t, r = ws) {
  let o, a;
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    for (a = Array((o = e.length)), t.set(e, a); o--; ) a[o] = io(e[o], t);
    return a;
  }
  if (Object.prototype.toString.call(e) === '[object Object]') {
    (a = Object.create(Object.getPrototypeOf(e))), t.set(e, a);
    let c = Es(e);
    for (let n of c) {
      let i = Object.getOwnPropertyDescriptor(e, n);
      if (!i) continue;
      let l = io(e[n], t);
      'get' in i
        ? Object.defineProperty(a, n, {
            ...i,
            get() {
              return l;
            },
          })
        : Object.defineProperty(a, n, {
            ...i,
            writable: r.forceWritable ? !0 : i.writable,
            value: l,
          });
    }
    return a;
  }
  return e;
}
var lo = _e(_n(), 1),
  ev = _e(yn(), 1),
  {
    AsymmetricMatcher: tv,
    DOMCollection: rv,
    DOMElement: nv,
    Immutable: ov,
    ReactElement: av,
    ReactTestComponent: iv,
  } = lo.plugins,
  Ja = [iv, av, nv, rv, ov, tv];
function gt(e, t = 10, { maxLength: r, ...o } = {}) {
  let a = r ?? 1e4,
    c;
  try {
    c = (0, lo.format)(e, { maxDepth: t, escapeString: !1, plugins: Ja, ...o });
  } catch {
    c = (0, lo.format)(e, {
      callToJSON: !1,
      maxDepth: t,
      escapeString: !1,
      plugins: Ja,
      ...o,
    });
  }
  return c.length >= a && t > 1 ? gt(e, Math.floor(t / 2)) : c;
}
var lv = /%[sdjifoOcj%]/g;
function sv(...e) {
  if (typeof e[0] != 'string') {
    let c = [];
    for (let n = 0; n < e.length; n++)
      c.push(_r(e[n], { depth: 0, colors: !1, compact: 3 }));
    return c.join(' ');
  }
  let t = e.length,
    r = 1,
    o = e[0],
    a = String(o).replace(lv, (c) => {
      if (c === '%%') return '%';
      if (r >= t) return c;
      switch (c) {
        case '%s': {
          let n = e[r++];
          return typeof n == 'bigint'
            ? `${n.toString()}n`
            : typeof n == 'number' && n === 0 && 1 / n < 0
              ? '-0'
              : typeof n == 'object' && n !== null
                ? _r(n, { depth: 0, colors: !1, compact: 3 })
                : String(n);
        }
        case '%d': {
          let n = e[r++];
          return typeof n == 'bigint'
            ? `${n.toString()}n`
            : Number(n).toString();
        }
        case '%i': {
          let n = e[r++];
          return typeof n == 'bigint'
            ? `${n.toString()}n`
            : Number.parseInt(String(n)).toString();
        }
        case '%f':
          return Number.parseFloat(String(e[r++])).toString();
        case '%o':
          return _r(e[r++], { showHidden: !0, showProxy: !0 });
        case '%O':
          return _r(e[r++]);
        case '%c':
          return r++, '';
        case '%j':
          try {
            return JSON.stringify(e[r++]);
          } catch (n) {
            let i = n.message;
            if (
              i.includes('circular structure') ||
              i.includes('cyclic structures') ||
              i.includes('cyclic object')
            )
              return '[Circular]';
            throw n;
          }
        default:
          return c;
      }
    });
  for (let c = e[r]; r < t; c = e[++r])
    c === null || typeof c != 'object' ? (a += ` ${c}`) : (a += ` ${_r(c)}`);
  return a;
}
function _r(e, t = {}) {
  return (
    t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY),
    (0, ev.inspect)(e, t)
  );
}
var uv = Symbol('vitest:SAFE_COLORS'),
  cv = {
    bold: ['\x1B[1m', '\x1B[22m', '\x1B[22m\x1B[1m'],
    dim: ['\x1B[2m', '\x1B[22m', '\x1B[22m\x1B[2m'],
    italic: ['\x1B[3m', '\x1B[23m'],
    underline: ['\x1B[4m', '\x1B[24m'],
    inverse: ['\x1B[7m', '\x1B[27m'],
    hidden: ['\x1B[8m', '\x1B[28m'],
    strikethrough: ['\x1B[9m', '\x1B[29m'],
    black: ['\x1B[30m', '\x1B[39m'],
    red: ['\x1B[31m', '\x1B[39m'],
    green: ['\x1B[32m', '\x1B[39m'],
    yellow: ['\x1B[33m', '\x1B[39m'],
    blue: ['\x1B[34m', '\x1B[39m'],
    magenta: ['\x1B[35m', '\x1B[39m'],
    cyan: ['\x1B[36m', '\x1B[39m'],
    white: ['\x1B[37m', '\x1B[39m'],
    gray: ['\x1B[90m', '\x1B[39m'],
    bgBlack: ['\x1B[40m', '\x1B[49m'],
    bgRed: ['\x1B[41m', '\x1B[49m'],
    bgGreen: ['\x1B[42m', '\x1B[49m'],
    bgYellow: ['\x1B[43m', '\x1B[49m'],
    bgBlue: ['\x1B[44m', '\x1B[49m'],
    bgMagenta: ['\x1B[45m', '\x1B[49m'],
    bgCyan: ['\x1B[46m', '\x1B[49m'],
    bgWhite: ['\x1B[47m', '\x1B[49m'],
  },
  dv = Object.entries(cv);
function na(e) {
  return String(e);
}
na.open = '';
na.close = '';
var fv = dv.reduce((e, [t]) => ((e[t] = na), e), { isColorSupported: !1 });
function oa() {
  return globalThis[uv] || fv;
}
_e(_n(), 1);
_e(yn(), 1);
var yt = _e(_n(), 1),
  Xa = _e(Il(), 1);
function Qa(e) {
  if (e === void 0) return 'undefined';
  if (e === null) return 'null';
  if (Array.isArray(e)) return 'array';
  if (typeof e == 'boolean') return 'boolean';
  if (typeof e == 'function') return 'function';
  if (typeof e == 'number') return 'number';
  if (typeof e == 'string') return 'string';
  if (typeof e == 'bigint') return 'bigint';
  if (typeof e == 'object') {
    if (e != null) {
      if (e.constructor === RegExp) return 'regexp';
      if (e.constructor === Map) return 'map';
      if (e.constructor === Set) return 'set';
      if (e.constructor === Date) return 'date';
    }
    return 'object';
  } else if (typeof e == 'symbol') return 'symbol';
  throw new Error(`value of unknown type: ${e}`);
}
var or = -1,
  ar = 1,
  tn = 0,
  Er = class {
    constructor(e, t) {
      Xt(this, 0);
      Xt(this, 1);
      (this[0] = e), (this[1] = t);
    }
  },
  Ss = 'Compared values have no visual difference.',
  pv =
    'Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.';
function mv(e, t) {
  return e.replace(/\s+$/, (r) => t(r));
}
function aa(e, t, r, o, a, c) {
  return e.length !== 0
    ? r(`${o} ${mv(e, a)}`)
    : o !== ' '
      ? r(o)
      : t && c.length !== 0
        ? r(`${o} ${c}`)
        : '';
}
function Cs(
  e,
  t,
  {
    aColor: r,
    aIndicator: o,
    changeLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: c,
  }
) {
  return aa(e, t, r, o, a, c);
}
function Os(
  e,
  t,
  {
    bColor: r,
    bIndicator: o,
    changeLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: c,
  }
) {
  return aa(e, t, r, o, a, c);
}
function Ps(
  e,
  t,
  {
    commonColor: r,
    commonIndicator: o,
    commonLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: c,
  }
) {
  return aa(e, t, r, o, a, c);
}
function Za(e, t, r, o, { patchColor: a }) {
  return a(`@@ -${e + 1},${t - e} +${r + 1},${o - r} @@`);
}
function yv(e, t) {
  let r = e.length,
    o = t.contextLines,
    a = o + o,
    c = r,
    n = !1,
    i = 0,
    l = 0;
  for (; l !== r; ) {
    let E = l;
    for (; l !== r && e[l][0] === tn; ) l += 1;
    if (E !== l)
      if (E === 0) l > o && ((c -= l - o), (n = !0));
      else if (l === r) {
        let C = l - E;
        C > o && ((c -= C - o), (n = !0));
      } else {
        let C = l - E;
        C > a && ((c -= C - a), (i += 1));
      }
    for (; l !== r && e[l][0] !== tn; ) l += 1;
  }
  let s = i !== 0 || n;
  i !== 0 ? (c += i + 1) : n && (c += 1);
  let u = c - 1,
    f = [],
    d = 0;
  s && f.push('');
  let p = 0,
    m = 0,
    y = 0,
    g = 0,
    h = (E) => {
      let C = f.length;
      f.push(Ps(E, C === 0 || C === u, t)), (y += 1), (g += 1);
    },
    v = (E) => {
      let C = f.length;
      f.push(Cs(E, C === 0 || C === u, t)), (y += 1);
    },
    S = (E) => {
      let C = f.length;
      f.push(Os(E, C === 0 || C === u, t)), (g += 1);
    };
  for (l = 0; l !== r; ) {
    let E = l;
    for (; l !== r && e[l][0] === tn; ) l += 1;
    if (E !== l)
      if (E === 0) {
        l > o && ((E = l - o), (p = E), (m = E), (y = p), (g = m));
        for (let C = E; C !== l; C += 1) h(e[C][1]);
      } else if (l === r) {
        let C = l - E > o ? E + o : l;
        for (let A = E; A !== C; A += 1) h(e[A][1]);
      } else {
        let C = l - E;
        if (C > a) {
          let A = E + o;
          for (let _ = E; _ !== A; _ += 1) h(e[_][1]);
          (f[d] = Za(p, y, m, g, t)), (d = f.length), f.push('');
          let R = C - a;
          (p = y + R), (m = g + R), (y = p), (g = m);
          for (let _ = l - o; _ !== l; _ += 1) h(e[_][1]);
        } else for (let A = E; A !== l; A += 1) h(e[A][1]);
      }
    for (; l !== r && e[l][0] === or; ) v(e[l][1]), (l += 1);
    for (; l !== r && e[l][0] === ar; ) S(e[l][1]), (l += 1);
  }
  return (
    s && (f[d] = Za(p, y, m, g, t)),
    f.join(`
`)
  );
}
function hv(e, t) {
  return e.map((r, o, a) => {
    let c = r[1],
      n = o === 0 || o === a.length - 1;
    switch (r[0]) {
      case or:
        return Cs(c, n, t);
      case ar:
        return Os(c, n, t);
      default:
        return Ps(c, n, t);
    }
  }).join(`
`);
}
var ei = (e) => e,
  Rs = 5;
function bv() {
  let e = oa();
  return {
    aAnnotation: 'Expected',
    aColor: e.green,
    aIndicator: '-',
    bAnnotation: 'Received',
    bColor: e.red,
    bIndicator: '+',
    changeColor: e.inverse,
    changeLineTrailingSpaceColor: ei,
    commonColor: e.dim,
    commonIndicator: ' ',
    commonLineTrailingSpaceColor: ei,
    compareKeys: void 0,
    contextLines: Rs,
    emptyFirstOrLastLinePlaceholder: '',
    expand: !0,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: e.yellow,
  };
}
function gv(e) {
  return e && typeof e == 'function' ? e : void 0;
}
function vv(e) {
  return typeof e == 'number' && Number.isSafeInteger(e) && e >= 0 ? e : Rs;
}
function Fr(e = {}) {
  return {
    ...bv(),
    ...e,
    compareKeys: gv(e.compareKeys),
    contextLines: vv(e.contextLines),
  };
}
function Zt(e) {
  return e.length === 1 && e[0].length === 0;
}
function _v(e) {
  let t = 0,
    r = 0;
  return (
    e.forEach((o) => {
      switch (o[0]) {
        case or:
          t += 1;
          break;
        case ar:
          r += 1;
          break;
      }
    }),
    { a: t, b: r }
  );
}
function Ev(
  {
    aAnnotation: e,
    aColor: t,
    aIndicator: r,
    bAnnotation: o,
    bColor: a,
    bIndicator: c,
    includeChangeCounts: n,
    omitAnnotationLines: i,
  },
  l
) {
  if (i) return '';
  let s = '',
    u = '';
  if (n) {
    let p = String(l.a),
      m = String(l.b),
      y = o.length - e.length,
      g = ' '.repeat(Math.max(0, y)),
      h = ' '.repeat(Math.max(0, -y)),
      v = m.length - p.length,
      S = ' '.repeat(Math.max(0, v)),
      E = ' '.repeat(Math.max(0, -v));
    (s = `${g}  ${r} ${S}${p}`), (u = `${h}  ${c} ${E}${m}`);
  }
  let f = `${r} ${e}${s}`,
    d = `${c} ${o}${u}`;
  return `${t(f)}
${a(d)}

`;
}
function Ts(e, t) {
  return Ev(t, _v(e)) + (t.expand ? hv(e, t) : yv(e, t));
}
function ia(e, t, r) {
  return Ts(As(Zt(e) ? [] : e, Zt(t) ? [] : t), Fr(r));
}
function wv(e, t, r, o, a) {
  if (
    (Zt(e) && Zt(r) && ((e = []), (r = [])),
    Zt(t) && Zt(o) && ((t = []), (o = [])),
    e.length !== r.length || t.length !== o.length)
  )
    return ia(e, t, a);
  let c = As(r, o),
    n = 0,
    i = 0;
  return (
    c.forEach((l) => {
      switch (l[0]) {
        case or:
          (l[1] = e[n]), (n += 1);
          break;
        case ar:
          (l[1] = t[i]), (i += 1);
          break;
        default:
          (l[1] = t[i]), (n += 1), (i += 1);
      }
    }),
    Ts(c, Fr(a))
  );
}
function As(e, t) {
  let r = e.length,
    o = t.length,
    a = (s, u) => e[s] === t[u],
    c = [],
    n = 0,
    i = 0,
    l = (s, u, f) => {
      for (; n !== u; n += 1) c.push(new Er(or, e[n]));
      for (; i !== f; i += 1) c.push(new Er(ar, t[i]));
      for (; s !== 0; s -= 1, n += 1, i += 1) c.push(new Er(tn, t[i]));
    };
  for ((Xa.default.default || Xa.default)(r, o, a, l); n !== r; n += 1)
    c.push(new Er(or, e[n]));
  for (; i !== o; i += 1) c.push(new Er(ar, t[i]));
  return c;
}
function so(e, t) {
  let { commonColor: r } = Fr(t);
  return r(e);
}
var {
    AsymmetricMatcher: Sv,
    DOMCollection: Cv,
    DOMElement: Ov,
    Immutable: Pv,
    ReactElement: Rv,
    ReactTestComponent: Tv,
  } = yt.plugins,
  qs = [Tv, Rv, Ov, Cv, Pv, Sv],
  uo = { plugins: qs },
  xs = { callToJSON: !1, maxDepth: 10, plugins: qs };
function Rr(e, t, r) {
  if (Object.is(e, t)) return '';
  let o = Qa(e),
    a = o,
    c = !1;
  if (o === 'object' && typeof e.asymmetricMatch == 'function') {
    if (
      e.$$typeof !== Symbol.for('jest.asymmetricMatcher') ||
      typeof e.getExpectedType != 'function'
    )
      return null;
    (a = e.getExpectedType()), (c = a === 'string');
  }
  if (a !== Qa(t)) {
    let {
        aAnnotation: n,
        aColor: i,
        aIndicator: l,
        bAnnotation: s,
        bColor: u,
        bIndicator: f,
      } = Fr(r),
      d = co(xs, r),
      p = (0, yt.format)(e, d),
      m = (0, yt.format)(t, d),
      y = `${i(`${l} ${n}:`)} 
${p}`,
      g = `${u(`${f} ${s}:`)} 
${m}`;
    return `${y}

${g}`;
  }
  if (c) return null;
  switch (o) {
    case 'string':
      return ia(
        e.split(`
`),
        t.split(`
`),
        r
      );
    case 'boolean':
    case 'number':
      return Av(e, t, r);
    case 'map':
      return Vn(ti(e), ti(t), r);
    case 'set':
      return Vn(ri(e), ri(t), r);
    default:
      return Vn(e, t, r);
  }
}
function Av(e, t, r) {
  let o = (0, yt.format)(e, uo),
    a = (0, yt.format)(t, uo);
  return o === a
    ? ''
    : ia(
        o.split(`
`),
        a.split(`
`),
        r
      );
}
function ti(e) {
  return new Map(Array.from(e.entries()).sort());
}
function ri(e) {
  return new Set(Array.from(e.values()).sort());
}
function Vn(e, t, r) {
  let o,
    a = !1;
  try {
    let n = co(uo, r);
    o = ni(e, t, n, r);
  } catch {
    a = !0;
  }
  let c = so(Ss, r);
  if (o === void 0 || o === c) {
    let n = co(xs, r);
    (o = ni(e, t, n, r)),
      o !== c &&
        !a &&
        (o = `${so(pv, r)}

${o}`);
  }
  return o;
}
function co(e, t) {
  let { compareKeys: r } = Fr(t);
  return { ...e, compareKeys: r };
}
function ni(e, t, r, o) {
  let a = { ...r, indent: 0 },
    c = (0, yt.format)(e, a),
    n = (0, yt.format)(t, a);
  if (c === n) return so(Ss, o);
  {
    let i = (0, yt.format)(e, r),
      l = (0, yt.format)(t, r);
    return wv(
      i.split(`
`),
      l.split(`
`),
      c.split(`
`),
      n.split(`
`),
      o
    );
  }
}
function qv(e) {
  return typeof e == 'function' && '_isMockFunction' in e && e._isMockFunction;
}
_e(_n(), 1);
_e(Il(), 1);
_e(yn(), 1);
var xv = '@@__IMMUTABLE_RECORD__@@',
  Mv = '@@__IMMUTABLE_ITERABLE__@@';
function jv(e) {
  return e && (e[Mv] || e[xv]);
}
var Iv = Object.getPrototypeOf({});
function oi(e) {
  return e instanceof Error
    ? `<unserializable>: ${e.message}`
    : typeof e == 'string'
      ? `<unserializable>: ${e}`
      : '<unserializable>';
}
function Or(e, t = new WeakMap()) {
  if (!e || typeof e == 'string') return e;
  if (typeof e == 'function') return `Function<${e.name || 'anonymous'}>`;
  if (typeof e == 'symbol') return e.toString();
  if (typeof e != 'object') return e;
  if (jv(e)) return Or(e.toJSON(), t);
  if (
    e instanceof Promise ||
    (e.constructor && e.constructor.prototype === 'AsyncFunction')
  )
    return 'Promise';
  if (typeof Element < 'u' && e instanceof Element) return e.tagName;
  if (typeof e.asymmetricMatch == 'function')
    return `${e.toString()} ${sv(e.sample)}`;
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    let r = new Array(e.length);
    return (
      t.set(e, r),
      e.forEach((o, a) => {
        try {
          r[a] = Or(o, t);
        } catch (c) {
          r[a] = oi(c);
        }
      }),
      r
    );
  } else {
    let r = Object.create(null);
    t.set(e, r);
    let o = e;
    for (; o && o !== Iv; )
      Object.getOwnPropertyNames(o).forEach((a) => {
        if (!(a in r))
          try {
            r[a] = Or(e[a], t);
          } catch (c) {
            delete r[a], (r[a] = oi(c));
          }
      }),
        (o = Object.getPrototypeOf(o));
    return r;
  }
}
function ai(e) {
  return e.replace(/__vite_ssr_import_\d+__\./g, '');
}
function Nv(e, t) {
  if (!e || typeof e != 'object') return { message: e };
  if (
    (e.stack && (e.stackStr = String(e.stack)),
    e.name && (e.nameStr = String(e.name)),
    e.showDiff ||
      (e.showDiff === void 0 && e.expected !== void 0 && e.actual !== void 0))
  ) {
    let r = Ya(e.actual, { forceWritable: !0 }),
      o = Ya(e.expected, { forceWritable: !0 }),
      { replacedActual: a, replacedExpected: c } = Ms(r, o);
    e.diff = Rr(c, a, t);
  }
  typeof e.expected != 'string' && (e.expected = gt(e.expected, 10)),
    typeof e.actual != 'string' && (e.actual = gt(e.actual, 10));
  try {
    typeof e.message == 'string' && (e.message = ai(e.message)),
      typeof e.cause == 'object' &&
        typeof e.cause.message == 'string' &&
        (e.cause.message = ai(e.cause.message));
  } catch {}
  try {
    return Or(e);
  } catch (r) {
    return Or(
      new Error(`Failed to fully serialize error: ${r == null ? void 0 : r.message}
Inner error message: ${e == null ? void 0 : e.message}`)
    );
  }
}
function ii(e) {
  return ao(e) === 'Object' && typeof e.asymmetricMatch == 'function';
}
function li(e, t) {
  let r = ao(e),
    o = ao(t);
  return r === o && r === 'Object';
}
function Ms(e, t, r = new WeakSet(), o = new WeakSet()) {
  return li(e, t)
    ? r.has(e) || o.has(t)
      ? { replacedActual: e, replacedExpected: t }
      : (r.add(e),
        o.add(t),
        Es(t).forEach((a) => {
          let c = t[a],
            n = e[a];
          if (ii(c)) c.asymmetricMatch(n) && (e[a] = c);
          else if (ii(n)) n.asymmetricMatch(c) && (t[a] = n);
          else if (li(n, c)) {
            let i = Ms(n, c, r, o);
            (e[a] = i.replacedActual), (t[a] = i.replacedExpected);
          }
        }),
        { replacedActual: e, replacedExpected: t })
    : { replacedActual: e, replacedExpected: t };
}
var Tr = Symbol.for('matchers-object'),
  ln = Symbol.for('$$jest-matchers-object-storybook'),
  qn = Symbol.for('expect-global');
if (!Object.prototype.hasOwnProperty.call(globalThis, Tr)) {
  let e = new WeakMap();
  Object.defineProperty(globalThis, Tr, { get: () => e });
}
if (!Object.prototype.hasOwnProperty.call(globalThis, ln)) {
  let e = Object.create(null);
  Object.defineProperty(globalThis, ln, {
    configurable: !0,
    get: () => ({ state: globalThis[Tr].get(globalThis[qn]), matchers: e }),
  });
}
function Ar(e) {
  return globalThis[Tr].get(e);
}
function Wn(e, t) {
  let r = globalThis[Tr],
    o = r.get(t) || {};
  Object.assign(o, e), r.set(t, o);
}
function js() {
  let e = () => oa(),
    t = e().green,
    r = e().red,
    o = e().inverse,
    a = e().bold,
    c = e().dim;
  function n(s, u = 'received', f = 'expected', d = {}) {
    let {
        comment: p = '',
        isDirectExpectCall: m = !1,
        isNot: y = !1,
        promise: g = '',
        secondArgument: h = '',
        expectedColor: v = t,
        receivedColor: S = r,
        secondArgumentColor: E = t,
      } = d,
      C = '',
      A = 'expect';
    return (
      !m && u !== '' && ((C += c(`${A}(`) + S(u)), (A = ')')),
      g !== '' && ((C += c(`${A}.`) + g), (A = '')),
      y && ((C += `${c(`${A}.`)}not`), (A = '')),
      s.includes('.') ? (A += s) : ((C += c(`${A}.`) + s), (A = '')),
      f === ''
        ? (A += '()')
        : ((C += c(`${A}(`) + v(f)), h && (C += c(', ') + E(h)), (A = ')')),
      p !== '' && (A += ` // ${p}`),
      A !== '' && (C += c(A)),
      C
    );
  }
  let i = '·',
    l = (s) => s.replace(/\s+$/gm, (u) => i.repeat(u.length));
  return {
    EXPECTED_COLOR: t,
    RECEIVED_COLOR: r,
    INVERTED_COLOR: o,
    BOLD_WEIGHT: a,
    DIM_COLOR: c,
    matcherHint: n,
    printReceived: (s) => r(l(gt(s))),
    printExpected: (s) => t(l(gt(s))),
  };
}
function Se(e, t, r, o) {
  return (r = r || []), Is(e, t, [], [], r, o ? Ns : $v);
}
function si(e) {
  return (
    !!e &&
    typeof e == 'object' &&
    'asymmetricMatch' in e &&
    Tt('Function', e.asymmetricMatch)
  );
}
function Bv(e, t) {
  let r = si(e),
    o = si(t);
  if (!(r && o)) {
    if (r) return e.asymmetricMatch(t);
    if (o) return t.asymmetricMatch(e);
  }
}
function Is(e, t, r, o, a, c) {
  let n = !0,
    i = Bv(e, t);
  if (i !== void 0) return i;
  for (let p = 0; p < a.length; p++) {
    let m = a[p](e, t);
    if (m !== void 0) return m;
  }
  if (e instanceof Error && t instanceof Error) return e.message === t.message;
  if (Object.is(e, t)) return !0;
  if (e === null || t === null) return e === t;
  let l = Object.prototype.toString.call(e);
  if (l !== Object.prototype.toString.call(t)) return !1;
  switch (l) {
    case '[object Boolean]':
    case '[object String]':
    case '[object Number]':
      return typeof e != typeof t
        ? !1
        : typeof e != 'object' && typeof t != 'object'
          ? Object.is(e, t)
          : Object.is(e.valueOf(), t.valueOf());
    case '[object Date]': {
      let p = +e,
        m = +t;
      return p === m || (Number.isNaN(p) && Number.isNaN(m));
    }
    case '[object RegExp]':
      return e.source === t.source && e.flags === t.flags;
  }
  if (typeof e != 'object' || typeof t != 'object') return !1;
  if (ci(e) && ci(t)) return e.isEqualNode(t);
  let s = r.length;
  for (; s--; ) {
    if (r[s] === e) return o[s] === t;
    if (o[s] === t) return !1;
  }
  if ((r.push(e), o.push(t), l === '[object Array]' && e.length !== t.length))
    return !1;
  let u = ui(e, c),
    f,
    d = u.length;
  if (ui(t, c).length !== d) return !1;
  for (; d--; )
    if (((f = u[d]), (n = c(t, f) && Is(e[f], t[f], r, o, a, c)), !n))
      return !1;
  return r.pop(), o.pop(), n;
}
function ui(e, t) {
  let r = [];
  for (let o in e) t(e, o) && r.push(o);
  return r.concat(
    Object.getOwnPropertySymbols(e).filter(
      (o) => Object.getOwnPropertyDescriptor(e, o).enumerable
    )
  );
}
function $v(e, t) {
  return Ns(e, t) && e[t] !== void 0;
}
function Ns(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Tt(e, t) {
  return Object.prototype.toString.apply(t) === `[object ${e}]`;
}
function ci(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    'nodeType' in e &&
    typeof e.nodeType == 'number' &&
    'nodeName' in e &&
    typeof e.nodeName == 'string' &&
    'isEqualNode' in e &&
    typeof e.isEqualNode == 'function'
  );
}
var Dv = '@@__IMMUTABLE_KEYED__@@',
  kv = '@@__IMMUTABLE_SET__@@',
  Bs = '@@__IMMUTABLE_ORDERED__@@';
function Lv(e) {
  return !!(e && e[Dv] && !e[Bs]);
}
function Fv(e) {
  return !!(e && e[kv] && !e[Bs]);
}
var $s = Symbol.iterator;
function di(e) {
  return !!(e != null && e[$s]);
}
function We(e, t, r = [], o = []) {
  if (
    typeof e != 'object' ||
    typeof t != 'object' ||
    Array.isArray(e) ||
    Array.isArray(t) ||
    !di(e) ||
    !di(t)
  )
    return;
  if (e.constructor !== t.constructor) return !1;
  let a = r.length;
  for (; a--; ) if (r[a] === e) return o[a] === t;
  r.push(e), o.push(t);
  let c = (i, l) => We(i, l, [...r], [...o]);
  if (e.size !== void 0) {
    if (e.size !== t.size) return !1;
    if (Tt('Set', e) || Fv(e)) {
      let i = !0;
      for (let l of e)
        if (!t.has(l)) {
          let s = !1;
          for (let u of t) Se(l, u, [c]) === !0 && (s = !0);
          if (s === !1) {
            i = !1;
            break;
          }
        }
      return r.pop(), o.pop(), i;
    } else if (Tt('Map', e) || Lv(e)) {
      let i = !0;
      for (let l of e)
        if (!t.has(l[0]) || !Se(l[1], t.get(l[0]), [c])) {
          let s = !1;
          for (let u of t) {
            let f = Se(l[0], u[0], [c]),
              d = !1;
            f === !0 && (d = Se(l[1], u[1], [c])), d === !0 && (s = !0);
          }
          if (s === !1) {
            i = !1;
            break;
          }
        }
      return r.pop(), o.pop(), i;
    }
  }
  let n = t[$s]();
  for (let i of e) {
    let l = n.next();
    if (l.done || !Se(i, l.value, [c])) return !1;
  }
  return n.next().done ? (r.pop(), o.pop(), !0) : !1;
}
function Ds(e, t) {
  return !e || typeof e != 'object' || e === Object.prototype
    ? !1
    : Object.prototype.hasOwnProperty.call(e, t) ||
        Ds(Object.getPrototypeOf(e), t);
}
function fi(e) {
  return (
    Xg(e) && !(e instanceof Error) && !Array.isArray(e) && !(e instanceof Date)
  );
}
function la(e, t) {
  let r =
    (o = new WeakMap()) =>
    (a, c) => {
      if (fi(c))
        return Object.keys(c).every((n) => {
          if (fi(c[n])) {
            if (o.has(c[n])) return Se(a[n], c[n], [We]);
            o.set(c[n], !0);
          }
          let i = a != null && Ds(a, n) && Se(a[n], c[n], [We, r(o)]);
          return o.delete(c[n]), i;
        });
    };
  return r()(e, t);
}
function fo(e, t) {
  if (!(e == null || t == null || e.constructor === t.constructor)) return !1;
}
function pi(e, t) {
  let r = e,
    o = t;
  if (!(e instanceof DataView && t instanceof DataView)) {
    if (!(e instanceof ArrayBuffer) || !(t instanceof ArrayBuffer)) return;
    try {
      (r = new DataView(e)), (o = new DataView(t));
    } catch {
      return;
    }
  }
  if (r.byteLength !== o.byteLength) return !1;
  for (let a = 0; a < r.byteLength; a++)
    if (r.getUint8(a) !== o.getUint8(a)) return !1;
  return !0;
}
function mi(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t)) return;
  let r = Object.keys(e),
    o = Object.keys(t);
  return Se(e, t, [We, fo], !0) && Se(r, o);
}
function Uv(e, t = '#{this}', r = '#{exp}') {
  let o = `expected ${t} to be ${r} // Object.is equality`;
  return ['toStrictEqual', 'toEqual'].includes(e)
    ? `${o}

If it should pass with deep equality, replace "toBe" with "${e}"

Expected: ${t}
Received: serializes to the same string
`
    : o;
}
var Vt = class {
    constructor(e, t = !1) {
      Xt(this, '$$typeof', Symbol.for('jest.asymmetricMatcher'));
      (this.sample = e), (this.inverse = t);
    }
    getMatcherContext(e) {
      return {
        ...Ar(e || globalThis[qn]),
        equals: Se,
        isNot: this.inverse,
        utils: {
          ...js(),
          diff: Rr,
          stringify: gt,
          iterableEquality: We,
          subsetEquality: la,
        },
      };
    }
  },
  yi = class extends Vt {
    constructor(e, t = !1) {
      if (!Tt('String', e)) throw new Error('Expected is not a string');
      super(e, t);
    }
    asymmetricMatch(e) {
      let t = Tt('String', e) && e.includes(this.sample);
      return this.inverse ? !t : t;
    }
    toString() {
      return `String${this.inverse ? 'Not' : ''}Containing`;
    }
    getExpectedType() {
      return 'string';
    }
  },
  Hv = class extends Vt {
    asymmetricMatch(e) {
      return e != null;
    }
    toString() {
      return 'Anything';
    }
    toAsymmetricMatcher() {
      return 'Anything';
    }
  },
  hi = class extends Vt {
    constructor(e, t = !1) {
      super(e, t);
    }
    getPrototype(e) {
      return Object.getPrototypeOf
        ? Object.getPrototypeOf(e)
        : e.constructor.prototype === e
          ? null
          : e.constructor.prototype;
    }
    hasProperty(e, t) {
      return e
        ? Object.prototype.hasOwnProperty.call(e, t)
          ? !0
          : this.hasProperty(this.getPrototype(e), t)
        : !1;
    }
    asymmetricMatch(e) {
      if (typeof this.sample != 'object')
        throw new TypeError(
          `You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`
        );
      let t = !0;
      for (let r in this.sample)
        if (!this.hasProperty(e, r) || !Se(this.sample[r], e[r])) {
          t = !1;
          break;
        }
      return this.inverse ? !t : t;
    }
    toString() {
      return `Object${this.inverse ? 'Not' : ''}Containing`;
    }
    getExpectedType() {
      return 'object';
    }
  },
  bi = class extends Vt {
    constructor(e, t = !1) {
      super(e, t);
    }
    asymmetricMatch(e) {
      if (!Array.isArray(this.sample))
        throw new TypeError(
          `You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`
        );
      let t =
        this.sample.length === 0 ||
        (Array.isArray(e) && this.sample.every((r) => e.some((o) => Se(r, o))));
      return this.inverse ? !t : t;
    }
    toString() {
      return `Array${this.inverse ? 'Not' : ''}Containing`;
    }
    getExpectedType() {
      return 'array';
    }
  },
  zv = class extends Vt {
    constructor(e) {
      if (typeof e > 'u')
        throw new TypeError(
          'any() expects to be passed a constructor function. Please pass one or use anything() to match any object.'
        );
      super(e);
    }
    fnNameFor(e) {
      if (e.name) return e.name;
      let t = Function.prototype.toString
        .call(e)
        .match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
      return t ? t[1] : '<anonymous>';
    }
    asymmetricMatch(e) {
      return this.sample === String
        ? typeof e == 'string' || e instanceof String
        : this.sample === Number
          ? typeof e == 'number' || e instanceof Number
          : this.sample === Function
            ? typeof e == 'function' || e instanceof Function
            : this.sample === Boolean
              ? typeof e == 'boolean' || e instanceof Boolean
              : this.sample === BigInt
                ? typeof e == 'bigint' || e instanceof BigInt
                : this.sample === Symbol
                  ? typeof e == 'symbol' || e instanceof Symbol
                  : this.sample === Object
                    ? typeof e == 'object'
                    : e instanceof this.sample;
    }
    toString() {
      return 'Any';
    }
    getExpectedType() {
      return this.sample === String
        ? 'string'
        : this.sample === Number
          ? 'number'
          : this.sample === Function
            ? 'function'
            : this.sample === Object
              ? 'object'
              : this.sample === Boolean
                ? 'boolean'
                : this.fnNameFor(this.sample);
    }
    toAsymmetricMatcher() {
      return `Any<${this.fnNameFor(this.sample)}>`;
    }
  },
  gi = class extends Vt {
    constructor(e, t = !1) {
      if (!Tt('String', e) && !Tt('RegExp', e))
        throw new Error('Expected is not a String or a RegExp');
      super(new RegExp(e), t);
    }
    asymmetricMatch(e) {
      let t = Tt('String', e) && this.sample.test(e);
      return this.inverse ? !t : t;
    }
    toString() {
      return `String${this.inverse ? 'Not' : ''}Matching`;
    }
    getExpectedType() {
      return 'string';
    }
  },
  Vv = (e, t) => {
    t.addMethod(e.expect, 'anything', () => new Hv()),
      t.addMethod(e.expect, 'any', (r) => new zv(r)),
      t.addMethod(e.expect, 'stringContaining', (r) => new yi(r)),
      t.addMethod(e.expect, 'objectContaining', (r) => new hi(r)),
      t.addMethod(e.expect, 'arrayContaining', (r) => new bi(r)),
      t.addMethod(e.expect, 'stringMatching', (r) => new gi(r)),
      (e.expect.not = {
        stringContaining: (r) => new yi(r, !0),
        objectContaining: (r) => new hi(r, !0),
        arrayContaining: (r) => new bi(r, !0),
        stringMatching: (r) => new gi(r, !0),
      });
  };
function vi(e, t) {
  return (
    e &&
      t instanceof Promise &&
      ((t = t.finally(() => {
        let r = e.promises.indexOf(t);
        r !== -1 && e.promises.splice(r, 1);
      })),
      e.promises || (e.promises = []),
      e.promises.push(t)),
    t
  );
}
function ks(e, t) {
  return function (...r) {
    var o;
    let a = e.flag(this, 'vitest-test');
    if (
      !(
        a != null && a.context._local
          ? a.context.expect.getState()
          : Ar(globalThis[qn])
      ).soft
    )
      return t.apply(this, r);
    if (!a) throw new Error('expect.soft() can only be used inside a test');
    try {
      return t.apply(this, r);
    } catch (c) {
      a.result || (a.result = { state: 'fail' }),
        (a.result.state = 'fail'),
        (o = a.result).errors || (o.errors = []),
        a.result.errors.push(Nv(c));
    }
  };
}
var Wv = (e, t) => {
  let { AssertionError: r } = e,
    o = () => oa();
  function a(u, f) {
    let d = (p) => {
      let m = ks(t, f);
      t.addMethod(e.Assertion.prototype, p, m),
        t.addMethod(globalThis[ln].matchers, p, m);
    };
    Array.isArray(u) ? u.forEach((p) => d(p)) : d(u);
  }
  ['throw', 'throws', 'Throw'].forEach((u) => {
    t.overwriteMethod(
      e.Assertion.prototype,
      u,
      (f) =>
        function (...d) {
          let p = t.flag(this, 'promise'),
            m = t.flag(this, 'object'),
            y = t.flag(this, 'negate');
          if (p === 'rejects')
            t.flag(this, 'object', () => {
              throw m;
            });
          else if (p === 'resolves' && typeof m != 'function') {
            if (y) return;
            {
              let g =
                  t.flag(this, 'message') ||
                  "expected promise to throw an error, but it didn't",
                h = { showDiff: !1 };
              throw new r(g, h, t.flag(this, 'ssfi'));
            }
          }
          f.apply(this, d);
        }
    );
  }),
    a('withTest', function (u) {
      return t.flag(this, 'vitest-test', u), this;
    }),
    a('toEqual', function (u) {
      let f = t.flag(this, 'object'),
        d = Se(f, u, [We]);
      return this.assert(
        d,
        'expected #{this} to deeply equal #{exp}',
        'expected #{this} to not deeply equal #{exp}',
        u,
        f
      );
    }),
    a('toStrictEqual', function (u) {
      let f = t.flag(this, 'object'),
        d = Se(f, u, [We, fo, mi, pi], !0);
      return this.assert(
        d,
        'expected #{this} to strictly equal #{exp}',
        'expected #{this} to not strictly equal #{exp}',
        u,
        f
      );
    }),
    a('toBe', function (u) {
      let f = this._obj,
        d = Object.is(f, u),
        p = '';
      return (
        d ||
          (Se(f, u, [We, fo, mi, pi], !0)
            ? (p = 'toStrictEqual')
            : Se(f, u, [We]) && (p = 'toEqual')),
        this.assert(
          d,
          Uv(p),
          'expected #{this} not to be #{exp} // Object.is equality',
          u,
          f
        )
      );
    }),
    a('toMatchObject', function (u) {
      let f = this._obj;
      return this.assert(
        Se(f, u, [We, la]),
        'expected #{this} to match object #{exp}',
        'expected #{this} to not match object #{exp}',
        u,
        f
      );
    }),
    a('toMatch', function (u) {
      return typeof u == 'string' ? this.include(u) : this.match(u);
    }),
    a('toContain', function (u) {
      return this.contain(u);
    }),
    a('toContainEqual', function (u) {
      let f = t.flag(this, 'object'),
        d = Array.from(f).findIndex((p) => Se(p, u));
      this.assert(
        d !== -1,
        'expected #{this} to deep equally contain #{exp}',
        'expected #{this} to not deep equally contain #{exp}',
        u
      );
    }),
    a('toBeTruthy', function () {
      let u = t.flag(this, 'object');
      this.assert(
        !!u,
        'expected #{this} to be truthy',
        'expected #{this} to not be truthy',
        u,
        !1
      );
    }),
    a('toBeFalsy', function () {
      let u = t.flag(this, 'object');
      this.assert(
        !u,
        'expected #{this} to be falsy',
        'expected #{this} to not be falsy',
        u,
        !1
      );
    }),
    a('toBeGreaterThan', function (u) {
      let f = this._obj;
      return (
        Ot(f, 'actual', ['number', 'bigint']),
        Ot(u, 'expected', ['number', 'bigint']),
        this.assert(
          f > u,
          `expected ${f} to be greater than ${u}`,
          `expected ${f} to be not greater than ${u}`,
          f,
          u,
          !1
        )
      );
    }),
    a('toBeGreaterThanOrEqual', function (u) {
      let f = this._obj;
      return (
        Ot(f, 'actual', ['number', 'bigint']),
        Ot(u, 'expected', ['number', 'bigint']),
        this.assert(
          f >= u,
          `expected ${f} to be greater than or equal to ${u}`,
          `expected ${f} to be not greater than or equal to ${u}`,
          f,
          u,
          !1
        )
      );
    }),
    a('toBeLessThan', function (u) {
      let f = this._obj;
      return (
        Ot(f, 'actual', ['number', 'bigint']),
        Ot(u, 'expected', ['number', 'bigint']),
        this.assert(
          f < u,
          `expected ${f} to be less than ${u}`,
          `expected ${f} to be not less than ${u}`,
          f,
          u,
          !1
        )
      );
    }),
    a('toBeLessThanOrEqual', function (u) {
      let f = this._obj;
      return (
        Ot(f, 'actual', ['number', 'bigint']),
        Ot(u, 'expected', ['number', 'bigint']),
        this.assert(
          f <= u,
          `expected ${f} to be less than or equal to ${u}`,
          `expected ${f} to be not less than or equal to ${u}`,
          f,
          u,
          !1
        )
      );
    }),
    a('toBeNaN', function () {
      return this.be.NaN;
    }),
    a('toBeUndefined', function () {
      return this.be.undefined;
    }),
    a('toBeNull', function () {
      return this.be.null;
    }),
    a('toBeDefined', function () {
      let u = t.flag(this, 'negate');
      return (
        t.flag(this, 'negate', !1),
        u ? this.be.undefined : this.not.be.undefined
      );
    }),
    a('toBeTypeOf', function (u) {
      let f = typeof this._obj,
        d = u === f;
      return this.assert(
        d,
        'expected #{this} to be type of #{exp}',
        'expected #{this} not to be type of #{exp}',
        u,
        f
      );
    }),
    a('toBeInstanceOf', function (u) {
      return this.instanceOf(u);
    }),
    a('toHaveLength', function (u) {
      return this.have.length(u);
    }),
    a('toHaveProperty', function (...u) {
      Array.isArray(u[0]) &&
        (u[0] = u[0]
          .map((S) => String(S).replace(/([.[\]])/g, '\\$1'))
          .join('.'));
      let f = this._obj,
        [d, p] = u,
        m = () =>
          Object.prototype.hasOwnProperty.call(f, d)
            ? { value: f[d], exists: !0 }
            : t.getPathInfo(f, d),
        { value: y, exists: g } = m(),
        h = g && (u.length === 1 || Se(p, y)),
        v = u.length === 1 ? '' : ` with value ${t.objDisplay(p)}`;
      return this.assert(
        h,
        `expected #{this} to have property "${d}"${v}`,
        `expected #{this} to not have property "${d}"${v}`,
        f
      );
    }),
    a('toBeCloseTo', function (u, f = 2) {
      let d = this._obj,
        p = !1,
        m = 0,
        y = 0;
      return (
        (u === Number.POSITIVE_INFINITY && d === Number.POSITIVE_INFINITY) ||
        (u === Number.NEGATIVE_INFINITY && d === Number.NEGATIVE_INFINITY)
          ? (p = !0)
          : ((m = 10 ** -f / 2), (y = Math.abs(d - u)), (p = y < m)),
        this.assert(
          p,
          `expected #{this} to be close to #{exp}, received difference is ${y}, but expected ${m}`,
          `expected #{this} to not be close to #{exp}, received difference is ${y}, but expected ${m}`,
          u,
          d,
          !1
        )
      );
    });
  let c = (u) => {
      if (!qv(u._obj))
        throw new TypeError(
          `${t.inspect(u._obj)} is not a spy or a call to a spy!`
        );
    },
    n = (u) => (c(u), u._obj),
    i = (u) => {
      let f = u % 10,
        d = u % 100;
      return f === 1 && d !== 11
        ? `${u}st`
        : f === 2 && d !== 12
          ? `${u}nd`
          : f === 3 && d !== 13
            ? `${u}rd`
            : `${u}th`;
    },
    l = (u, f, d) => (
      u.mock.calls &&
        (f += o().gray(`

Received: 

${u.mock.calls.map((p, m) => {
  let y = o().bold(`  ${i(m + 1)} ${u.getMockName()} call:

`);
  return (
    d
      ? (y += Rr(d, p, { omitAnnotationLines: !0 }))
      : (y += gt(p)
          .split(
            `
`
          )
          .map((g) => `    ${g}`).join(`
`)),
    (y += `
`),
    y
  );
}).join(`
`)}`)),
      (f += o().gray(`

Number of calls: ${o().bold(u.mock.calls.length)}
`)),
      f
    ),
    s = (u, f, d) => (
      (f += o().gray(`

Received: 

${u.mock.results.map((p, m) => {
  let y = o().bold(`  ${i(m + 1)} ${u.getMockName()} call return:

`);
  return (
    d
      ? (y += Rr(d, p.value, { omitAnnotationLines: !0 }))
      : (y += gt(p)
          .split(
            `
`
          )
          .map((g) => `    ${g}`).join(`
`)),
    (y += `
`),
    y
  );
}).join(`
`)}`)),
      (f += o().gray(`

Number of calls: ${o().bold(u.mock.calls.length)}
`)),
      f
    );
  a(['toHaveBeenCalledTimes', 'toBeCalledTimes'], function (u) {
    let f = n(this),
      d = f.getMockName(),
      p = f.mock.calls.length;
    return this.assert(
      p === u,
      `expected "${d}" to be called #{exp} times, but got ${p} times`,
      `expected "${d}" to not be called #{exp} times`,
      u,
      p,
      !1
    );
  }),
    a('toHaveBeenCalledOnce', function () {
      let u = n(this),
        f = u.getMockName(),
        d = u.mock.calls.length;
      return this.assert(
        d === 1,
        `expected "${f}" to be called once, but got ${d} times`,
        `expected "${f}" to not be called once`,
        1,
        d,
        !1
      );
    }),
    a(['toHaveBeenCalled', 'toBeCalled'], function () {
      let u = n(this),
        f = u.getMockName(),
        d = u.mock.calls.length,
        p = d > 0,
        m = t.flag(this, 'negate'),
        y = t.getMessage(this, [
          p,
          `expected "${f}" to be called at least once`,
          `expected "${f}" to not be called at all, but actually been called ${d} times`,
          !0,
          p,
        ]);
      if ((p && m && (y = l(u, y)), (p && m) || (!p && !m))) throw new r(y);
    }),
    a(['toHaveBeenCalledWith', 'toBeCalledWith'], function (...u) {
      let f = n(this),
        d = f.getMockName(),
        p = f.mock.calls.some((g) => Se(g, u, [We])),
        m = t.flag(this, 'negate'),
        y = t.getMessage(this, [
          p,
          `expected "${d}" to be called with arguments: #{exp}`,
          `expected "${d}" to not be called with arguments: #{exp}`,
          u,
        ]);
      if ((p && m) || (!p && !m)) throw new r(l(f, y, u));
    }),
    a(['toHaveBeenNthCalledWith', 'nthCalledWith'], function (u, ...f) {
      let d = n(this),
        p = d.getMockName(),
        m = d.mock.calls[u - 1];
      this.assert(
        Se(m, f, [We]),
        `expected ${i(u)} "${p}" call to have been called with #{exp}`,
        `expected ${i(u)} "${p}" call to not have been called with #{exp}`,
        f,
        m
      );
    }),
    a(['toHaveBeenLastCalledWith', 'lastCalledWith'], function (...u) {
      let f = n(this),
        d = f.getMockName(),
        p = f.mock.calls[f.mock.calls.length - 1];
      this.assert(
        Se(p, u, [We]),
        `expected last "${d}" call to have been called with #{exp}`,
        `expected last "${d}" call to not have been called with #{exp}`,
        u,
        p
      );
    }),
    a(['toThrow', 'toThrowError'], function (u) {
      if (typeof u == 'string' || typeof u > 'u' || u instanceof RegExp)
        return this.throws(u);
      let f = this._obj,
        d = t.flag(this, 'promise'),
        p = t.flag(this, 'negate'),
        m = null;
      if (d === 'rejects') m = f;
      else if (d === 'resolves' && typeof f != 'function') {
        if (p) return;
        {
          let y =
              t.flag(this, 'message') ||
              "expected promise to throw an error, but it didn't",
            g = { showDiff: !1 };
          throw new r(y, g, t.flag(this, 'ssfi'));
        }
      } else {
        let y = !1;
        try {
          f();
        } catch (g) {
          (y = !0), (m = g);
        }
        if (!y && !p) {
          let g =
              t.flag(this, 'message') ||
              "expected function to throw an error, but it didn't",
            h = { showDiff: !1 };
          throw new r(g, h, t.flag(this, 'ssfi'));
        }
      }
      if (typeof u == 'function') {
        let y = u.name || u.prototype.constructor.name;
        return this.assert(
          m && m instanceof u,
          `expected error to be instance of ${y}`,
          `expected error not to be instance of ${y}`,
          u,
          m,
          !1
        );
      }
      if (u instanceof Error)
        return this.assert(
          m && u.message === m.message,
          `expected error to have message: ${u.message}`,
          `expected error not to have message: ${u.message}`,
          u.message,
          m && m.message
        );
      if (
        typeof u == 'object' &&
        'asymmetricMatch' in u &&
        typeof u.asymmetricMatch == 'function'
      ) {
        let y = u;
        return this.assert(
          m && y.asymmetricMatch(m),
          'expected error to match asymmetric matcher',
          'expected error not to match asymmetric matcher',
          y.toString(),
          m,
          !1
        );
      }
      throw new Error(
        `"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof u}"`
      );
    }),
    a(['toHaveReturned', 'toReturn'], function () {
      let u = n(this),
        f = u.getMockName(),
        d =
          u.mock.calls.length > 0 &&
          u.mock.results.some(({ type: p }) => p !== 'throw');
      this.assert(
        d,
        `expected "${f}" to be successfully called at least once`,
        `expected "${f}" to not be successfully called`,
        d,
        !d,
        !1
      );
    }),
    a(['toHaveReturnedTimes', 'toReturnTimes'], function (u) {
      let f = n(this),
        d = f.getMockName(),
        p = f.mock.results.reduce(
          (m, { type: y }) => (y === 'throw' ? m : ++m),
          0
        );
      this.assert(
        p === u,
        `expected "${d}" to be successfully called ${u} times`,
        `expected "${d}" to not be successfully called ${u} times`,
        `expected number of returns: ${u}`,
        `received number of returns: ${p}`,
        !1
      );
    }),
    a(['toHaveReturnedWith', 'toReturnWith'], function (u) {
      let f = n(this),
        d = f.getMockName(),
        p = f.mock.results.some(
          ({ type: g, value: h }) => g === 'return' && Se(u, h)
        ),
        m = t.flag(this, 'negate'),
        y = t.getMessage(this, [
          p,
          `expected "${d}" to return with: #{exp} at least once`,
          `expected "${d}" to not return with: #{exp}`,
          u,
        ]);
      if ((p && m) || (!p && !m)) throw new r(s(f, y, u));
    }),
    a(['toHaveLastReturnedWith', 'lastReturnedWith'], function (u) {
      let f = n(this),
        d = f.getMockName(),
        { value: p } = f.mock.results[f.mock.results.length - 1],
        m = Se(p, u);
      this.assert(
        m,
        `expected last "${d}" call to return #{exp}`,
        `expected last "${d}" call to not return #{exp}`,
        u,
        p
      );
    }),
    a(['toHaveNthReturnedWith', 'nthReturnedWith'], function (u, f) {
      let d = n(this),
        p = d.getMockName(),
        m = t.flag(this, 'negate'),
        { type: y, value: g } = d.mock.results[u - 1],
        h = `${i(u)} call`;
      !m &&
        y === 'throw' &&
        e.assert.fail(
          `expected ${h} to return #{exp}, but instead it threw an error`
        );
      let v = Se(g, f);
      this.assert(
        v,
        `expected ${h} "${p}" call to return #{exp}`,
        `expected ${h} "${p}" call to not return #{exp}`,
        f,
        g
      );
    }),
    a('toSatisfy', function (u, f) {
      return this.be.satisfy(u, f);
    }),
    t.addProperty(e.Assertion.prototype, 'resolves', function () {
      let u = new Error('resolves');
      t.flag(this, 'promise', 'resolves'), t.flag(this, 'error', u);
      let f = t.flag(this, 'vitest-test'),
        d = t.flag(this, 'object');
      if (typeof (d == null ? void 0 : d.then) != 'function')
        throw new TypeError(
          `You must provide a Promise to expect() when using .resolves, not '${typeof d}'.`
        );
      let p = new Proxy(this, {
        get: (m, y, g) => {
          let h = Reflect.get(m, y, g);
          return typeof h != 'function'
            ? h instanceof e.Assertion
              ? p
              : h
            : async (...v) => {
                let S = d.then(
                  (E) => (t.flag(this, 'object', E), h.call(this, ...v)),
                  (E) => {
                    let C = new r(
                      `promise rejected "${t.inspect(E)}" instead of resolving`,
                      { showDiff: !1 }
                    );
                    throw (
                      ((C.stack = u.stack.replace(u.message, C.message)), C)
                    );
                  }
                );
                return vi(f, S);
              };
        },
      });
      return p;
    }),
    t.addProperty(e.Assertion.prototype, 'rejects', function () {
      let u = new Error('rejects');
      t.flag(this, 'promise', 'rejects'), t.flag(this, 'error', u);
      let f = t.flag(this, 'vitest-test'),
        d = t.flag(this, 'object'),
        p = typeof d == 'function' ? d() : d;
      if (typeof (p == null ? void 0 : p.then) != 'function')
        throw new TypeError(
          `You must provide a Promise to expect() when using .rejects, not '${typeof p}'.`
        );
      let m = new Proxy(this, {
        get: (y, g, h) => {
          let v = Reflect.get(y, g, h);
          return typeof v != 'function'
            ? v instanceof e.Assertion
              ? m
              : v
            : async (...S) => {
                let E = p.then(
                  (C) => {
                    let A = new r(
                      `promise resolved "${t.inspect(C)}" instead of rejecting`,
                      { showDiff: !1 }
                    );
                    throw (
                      ((A.stack = u.stack.replace(u.message, A.message)), A)
                    );
                  },
                  (C) => (t.flag(this, 'object', C), v.call(this, ...S))
                );
                return vi(f, E);
              };
        },
      });
      return m;
    });
};
function Gv(e, t) {
  let r = e._obj,
    o = an.flag(e, 'negate'),
    a = an.flag(e, 'promise') || '',
    c = {
      ...js(),
      diff: Rr,
      stringify: gt,
      iterableEquality: We,
      subsetEquality: la,
    };
  return {
    state: {
      ...Ar(t),
      isNot: o,
      utils: c,
      promise: a,
      equals: Se,
      suppressedErrors: [],
    },
    isNot: o,
    obj: r,
  };
}
var _i = class extends Error {
  constructor(e, t, r) {
    super(e), (this.actual = t), (this.expected = r);
  }
};
function Kv(e, t) {
  return (r, o) => {
    Object.entries(t).forEach(([a, c]) => {
      function n(...s) {
        let { state: u, isNot: f, obj: d } = Gv(this, e),
          p = c.call(u, d, ...s);
        if (p && typeof p == 'object' && p instanceof Promise)
          return p.then(({ pass: v, message: S, actual: E, expected: C }) => {
            if ((v && f) || (!v && !f)) throw new _i(S(), E, C);
          });
        let { pass: m, message: y, actual: g, expected: h } = p;
        if ((m && f) || (!m && !f)) throw new _i(y(), g, h);
      }
      let i = ks(o, n);
      o.addMethod(globalThis[ln].matchers, a, i),
        o.addMethod(r.Assertion.prototype, a, i);
      class l extends Vt {
        constructor(u = !1, ...f) {
          super(f, u);
        }
        asymmetricMatch(u) {
          let { pass: f } = c.call(
            this.getMatcherContext(e),
            u,
            ...this.sample
          );
          return this.inverse ? !f : f;
        }
        toString() {
          return `${this.inverse ? 'not.' : ''}${a}`;
        }
        getExpectedType() {
          return 'any';
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(', ')}>`;
        }
      }
      Object.defineProperty(e, a, {
        configurable: !0,
        enumerable: !0,
        value: (...s) => new l(!1, ...s),
        writable: !0,
      }),
        Object.defineProperty(e.not, a, {
          configurable: !0,
          enumerable: !0,
          value: (...s) => new l(!0, ...s),
          writable: !0,
        });
    });
  };
}
var Yv = (e, t) => {
    t.addMethod(e.expect, 'extend', (r, o) => {
      e.use(Kv(r, o));
    });
  },
  Ls = {};
Al(Ls, {
  toBeChecked: () => Au,
  toBeDisabled: () => Eu,
  toBeEmpty: () => iu,
  toBeEmptyDOMElement: () => lu,
  toBeEnabled: () => wu,
  toBeInTheDOM: () => mo,
  toBeInTheDocument: () => au,
  toBeInvalid: () => Ou,
  toBePartiallyChecked: () => xu,
  toBeRequired: () => Su,
  toBeValid: () => Pu,
  toBeVisible: () => hu,
  toContainElement: () => yo,
  toContainHTML: () => su,
  toHaveAccessibleDescription: () => ho,
  toHaveAccessibleErrorMessage: () => cu,
  toHaveAccessibleName: () => bo,
  toHaveAttribute: () => du,
  toHaveClass: () => fu,
  toHaveDescription: () => Mu,
  toHaveDisplayValue: () => Tu,
  toHaveErrorMessage: () => ju,
  toHaveFocus: () => pu,
  toHaveFormValues: () => mu,
  toHaveStyle: () => go,
  toHaveTextContent: () => uu,
  toHaveValue: () => Ru,
});
var Ei = _e(Nl(), 1),
  Jv = _e(Jl(), 1);
function Fs(e) {
  Object.defineProperty(e, '__esModule', { value: !0, configurable: !0 });
}
function sa(e, t, r, o) {
  Object.defineProperty(e, t, {
    get: r,
    set: o,
    enumerable: !0,
    configurable: !0,
  });
}
var Us = {};
Fs(Us);
sa(Us, 'default', () => Hs);
var Hs = class extends Error {
    constructor(e, t, r, o, a) {
      super(e + ':' + r + ':' + o + ': ' + t),
        (this.reason = t),
        (this.filename = e),
        (this.line = r),
        (this.column = o),
        (this.source = a);
    }
  },
  zs = {};
Fs(zs);
sa(zs, 'default', () => Vs);
var Vs = class {
    constructor(e, t, r) {
      (this.start = e), (this.end = t), (this.source = r);
    }
  },
  Xv = {};
sa(Xv, 'CssTypes', () => xe);
var xe;
(function (e) {
  (e.stylesheet = 'stylesheet'),
    (e.rule = 'rule'),
    (e.declaration = 'declaration'),
    (e.comment = 'comment'),
    (e.container = 'container'),
    (e.charset = 'charset'),
    (e.document = 'document'),
    (e.customMedia = 'custom-media'),
    (e.fontFace = 'font-face'),
    (e.host = 'host'),
    (e.import = 'import'),
    (e.keyframes = 'keyframes'),
    (e.keyframe = 'keyframe'),
    (e.layer = 'layer'),
    (e.media = 'media'),
    (e.namespace = 'namespace'),
    (e.page = 'page'),
    (e.supports = 'supports');
})(xe || (xe = {}));
var Gn = /\/\*[^]*?(?:\*\/|$)/g,
  Qv = (e, t) => {
    t = t || {};
    let r = 1,
      o = 1;
    function a(Z) {
      let q = Z.match(/\n/g);
      q && (r += q.length);
      let M = Z.lastIndexOf(`
`);
      o = ~M ? Z.length - M : o + Z.length;
    }
    function c() {
      let Z = { line: r, column: o };
      return function (q) {
        return (
          (q.position = new Vs(
            Z,
            { line: r, column: o },
            (t == null ? void 0 : t.source) || ''
          )),
          p(),
          q
        );
      };
    }
    let n = [];
    function i(Z) {
      let q = new Hs((t == null ? void 0 : t.source) || '', Z, r, o, e);
      if (t != null && t.silent) n.push(q);
      else throw q;
    }
    function l() {
      let Z = f();
      return {
        type: xe.stylesheet,
        stylesheet: {
          source: t == null ? void 0 : t.source,
          rules: Z,
          parsingErrors: n,
        },
      };
    }
    function s() {
      return d(/^{\s*/);
    }
    function u() {
      return d(/^}/);
    }
    function f() {
      let Z,
        q = [];
      for (p(), m(q); e.length && e.charAt(0) !== '}' && (Z = ae() || ue()); )
        Z && (q.push(Z), m(q));
      return q;
    }
    function d(Z) {
      let q = Z.exec(e);
      if (!q) return;
      let M = q[0];
      return a(M), (e = e.slice(M.length)), q;
    }
    function p() {
      d(/^\s*/);
    }
    function m(Z) {
      let q;
      for (Z = Z || []; (q = y()); ) q && Z.push(q);
      return Z;
    }
    function y() {
      let Z = c();
      if (e.charAt(0) !== '/' || e.charAt(1) !== '*') return;
      let q = d(/^\/\*[^]*?\*\//);
      return q
        ? Z({ type: xe.comment, comment: q[0].slice(2, -2) })
        : i('End of comment missing');
    }
    function g() {
      let Z = d(/^([^{]+)/);
      if (!Z) return;
      let q = Qe(Z[0]).replace(Gn, '');
      return q.indexOf(',') === -1
        ? [q]
        : q
            .replace(/("|')(?:\\\1|.)*?\1|\(.*?\)/g, (M) =>
              M.replace(/,/g, '‌')
            )
            .split(',')
            .map((M) => Qe(M.replace(/\u200C/g, ',')));
    }
    function h() {
      let Z = c(),
        q = d(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
      if (!q) return;
      let M = Qe(q[0]);
      if (!d(/^:\s*/)) return i("property missing ':'");
      let F = d(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/),
        z = Z({
          type: xe.declaration,
          property: M.replace(Gn, ''),
          value: F ? Qe(F[0]).replace(Gn, '') : '',
        });
      return d(/^[;\s]*/), z;
    }
    function v() {
      let Z = [];
      if (!s()) return i("missing '{'");
      m(Z);
      let q;
      for (; (q = h()); ) q && (Z.push(q), m(Z));
      return u() ? Z : i("missing '}'");
    }
    function S() {
      let Z,
        q = [],
        M = c();
      for (; (Z = d(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)); )
        q.push(Z[1]), d(/^,\s*/);
      if (q.length)
        return M({ type: xe.keyframe, values: q, declarations: v() || [] });
    }
    function E() {
      let Z = c(),
        q = d(/^@([-\w]+)?keyframes\s*/);
      if (!q) return;
      let M = q[1],
        F = d(/^([-\w]+)\s*/);
      if (!F) return i('@keyframes missing name');
      let z = F[1];
      if (!s()) return i("@keyframes missing '{'");
      let X,
        B = m();
      for (; (X = S()); ) B.push(X), (B = B.concat(m()));
      return u()
        ? Z({ type: xe.keyframes, name: z, vendor: M, keyframes: B })
        : i("@keyframes missing '}'");
    }
    function C() {
      let Z = c(),
        q = d(/^@supports *([^{]+)/);
      if (!q) return;
      let M = Qe(q[1]);
      if (!s()) return i("@supports missing '{'");
      let F = m().concat(f());
      return u()
        ? Z({ type: xe.supports, supports: M, rules: F })
        : i("@supports missing '}'");
    }
    function A() {
      let Z = c();
      if (!d(/^@host\s*/)) return;
      if (!s()) return i("@host missing '{'");
      let q = m().concat(f());
      return u() ? Z({ type: xe.host, rules: q }) : i("@host missing '}'");
    }
    function R() {
      let Z = c(),
        q = d(/^@container *([^{]+)/);
      if (!q) return;
      let M = Qe(q[1]);
      if (!s()) return i("@container missing '{'");
      let F = m().concat(f());
      return u()
        ? Z({ type: xe.container, container: M, rules: F })
        : i("@container missing '}'");
    }
    function _() {
      let Z = c(),
        q = d(/^@layer *([^{;@]+)/);
      if (!q) return;
      let M = Qe(q[1]);
      if (!s()) return d(/^[;\s]*/), Z({ type: xe.layer, layer: M });
      let F = m().concat(f());
      return u()
        ? Z({ type: xe.layer, layer: M, rules: F })
        : i("@layer missing '}'");
    }
    function O() {
      let Z = c(),
        q = d(/^@media *([^{]+)/);
      if (!q) return;
      let M = Qe(q[1]);
      if (!s()) return i("@media missing '{'");
      let F = m().concat(f());
      return u()
        ? Z({ type: xe.media, media: M, rules: F })
        : i("@media missing '}'");
    }
    function x() {
      let Z = c(),
        q = d(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
      if (q)
        return Z({ type: xe.customMedia, name: Qe(q[1]), media: Qe(q[2]) });
    }
    function I() {
      let Z = c();
      if (!d(/^@page */)) return;
      let q = g() || [];
      if (!s()) return i("@page missing '{'");
      let M = m(),
        F;
      for (; (F = h()); ) M.push(F), (M = M.concat(m()));
      return u()
        ? Z({ type: xe.page, selectors: q, declarations: M })
        : i("@page missing '}'");
    }
    function H() {
      let Z = c(),
        q = d(/^@([-\w]+)?document *([^{]+)/);
      if (!q) return;
      let M = Qe(q[1]),
        F = Qe(q[2]);
      if (!s()) return i("@document missing '{'");
      let z = m().concat(f());
      return u()
        ? Z({ type: xe.document, document: F, vendor: M, rules: z })
        : i("@document missing '}'");
    }
    function V() {
      let Z = c();
      if (!d(/^@font-face\s*/)) return;
      if (!s()) return i("@font-face missing '{'");
      let q = m(),
        M;
      for (; (M = h()); ) q.push(M), (q = q.concat(m()));
      return u()
        ? Z({ type: xe.fontFace, declarations: q })
        : i("@font-face missing '}'");
    }
    let L = oe('import'),
      re = oe('charset'),
      G = oe('namespace');
    function oe(Z) {
      let q = new RegExp(
        '^@' +
          Z +
          `\\s*((?::?[^;'"]|"(?:\\\\"|[^"])*?"|'(?:\\\\'|[^'])*?')+)(?:;|$)`
      );
      return function () {
        let M = c(),
          F = d(q);
        if (!F) return;
        let z = { type: Z };
        return (z[Z] = F[1].trim()), M(z);
      };
    }
    function ae() {
      if (e[0] === '@')
        return (
          E() ||
          O() ||
          x() ||
          C() ||
          L() ||
          re() ||
          G() ||
          H() ||
          I() ||
          A() ||
          V() ||
          R() ||
          _()
        );
    }
    function ue() {
      let Z = c(),
        q = g();
      return q
        ? (m(), Z({ type: xe.rule, selectors: q, declarations: v() || [] }))
        : i('selector missing');
    }
    return po(l());
  };
function Qe(e) {
  return e ? e.trim() : '';
}
function po(e, t) {
  let r = e && typeof e.type == 'string',
    o = r ? e : t;
  for (let a in e) {
    let c = e[a];
    Array.isArray(c)
      ? c.forEach((n) => {
          po(n, o);
        })
      : c && typeof c == 'object' && po(c, o);
  }
  return (
    r &&
      Object.defineProperty(e, 'parent', {
        configurable: !0,
        writable: !0,
        enumerable: !1,
        value: t || null,
      }),
    e
  );
}
var Zv = Qv,
  e_ = Zv,
  t_ = Object.prototype.toString;
function wi(e) {
  return typeof e == 'function' || t_.call(e) === '[object Function]';
}
function r_(e) {
  var t = Number(e);
  return isNaN(t)
    ? 0
    : t === 0 || !isFinite(t)
      ? t
      : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var n_ = Math.pow(2, 53) - 1;
function o_(e) {
  var t = r_(e);
  return Math.min(Math.max(t, 0), n_);
}
function nt(e, t) {
  var r = Array,
    o = Object(e);
  if (e == null)
    throw new TypeError(
      'Array.from requires an array-like object - not null or undefined'
    );
  if (typeof t < 'u' && !wi(t))
    throw new TypeError(
      'Array.from: when provided, the second argument must be a function'
    );
  for (
    var a = o_(o.length), c = wi(r) ? Object(new r(a)) : new Array(a), n = 0, i;
    n < a;

  )
    (i = o[n]), t ? (c[n] = t(i, n)) : (c[n] = i), (n += 1);
  return (c.length = a), c;
}
function qr(e) {
  '@babel/helpers - typeof';
  return (
    (qr =
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
    qr(e)
  );
}
function a_(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Si(e, t) {
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, Ws(o.key), o);
  }
}
function i_(e, t, r) {
  return (
    t && Si(e.prototype, t),
    r && Si(e, r),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function l_(e, t, r) {
  return (
    (t = Ws(t)),
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
function Ws(e) {
  var t = s_(e, 'string');
  return qr(t) === 'symbol' ? t : String(t);
}
function s_(e, t) {
  if (qr(e) !== 'object' || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t || 'default');
    if (qr(o) !== 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var u_ = (function () {
    function e() {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      a_(this, e), l_(this, 'items', void 0), (this.items = t);
    }
    return (
      i_(e, [
        {
          key: 'add',
          value: function (t) {
            return this.has(t) === !1 && this.items.push(t), this;
          },
        },
        {
          key: 'clear',
          value: function () {
            this.items = [];
          },
        },
        {
          key: 'delete',
          value: function (t) {
            var r = this.items.length;
            return (
              (this.items = this.items.filter(function (o) {
                return o !== t;
              })),
              r !== this.items.length
            );
          },
        },
        {
          key: 'forEach',
          value: function (t) {
            var r = this;
            this.items.forEach(function (o) {
              t(o, o, r);
            });
          },
        },
        {
          key: 'has',
          value: function (t) {
            return this.items.indexOf(t) !== -1;
          },
        },
        {
          key: 'size',
          get: function () {
            return this.items.length;
          },
        },
      ]),
      e
    );
  })(),
  c_ = typeof Set > 'u' ? Set : u_;
function Le(e) {
  var t;
  return (t = e.localName) !== null && t !== void 0
    ? t
    : e.tagName.toLowerCase();
}
var d_ = {
    article: 'article',
    aside: 'complementary',
    button: 'button',
    datalist: 'listbox',
    dd: 'definition',
    details: 'group',
    dialog: 'dialog',
    dt: 'term',
    fieldset: 'group',
    figure: 'figure',
    form: 'form',
    footer: 'contentinfo',
    h1: 'heading',
    h2: 'heading',
    h3: 'heading',
    h4: 'heading',
    h5: 'heading',
    h6: 'heading',
    header: 'banner',
    hr: 'separator',
    html: 'document',
    legend: 'legend',
    li: 'listitem',
    math: 'math',
    main: 'main',
    menu: 'list',
    nav: 'navigation',
    ol: 'list',
    optgroup: 'group',
    option: 'option',
    output: 'status',
    progress: 'progressbar',
    section: 'region',
    summary: 'button',
    table: 'table',
    tbody: 'rowgroup',
    textarea: 'textbox',
    tfoot: 'rowgroup',
    td: 'cell',
    th: 'columnheader',
    thead: 'rowgroup',
    tr: 'row',
    ul: 'list',
  },
  f_ = {
    caption: new Set(['aria-label', 'aria-labelledby']),
    code: new Set(['aria-label', 'aria-labelledby']),
    deletion: new Set(['aria-label', 'aria-labelledby']),
    emphasis: new Set(['aria-label', 'aria-labelledby']),
    generic: new Set(['aria-label', 'aria-labelledby', 'aria-roledescription']),
    insertion: new Set(['aria-label', 'aria-labelledby']),
    paragraph: new Set(['aria-label', 'aria-labelledby']),
    presentation: new Set(['aria-label', 'aria-labelledby']),
    strong: new Set(['aria-label', 'aria-labelledby']),
    subscript: new Set(['aria-label', 'aria-labelledby']),
    superscript: new Set(['aria-label', 'aria-labelledby']),
  };
function p_(e, t) {
  return [
    'aria-atomic',
    'aria-busy',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-dropeffect',
    'aria-flowto',
    'aria-grabbed',
    'aria-hidden',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-live',
    'aria-owns',
    'aria-relevant',
    'aria-roledescription',
  ].some(function (r) {
    var o;
    return (
      e.hasAttribute(r) && !((o = f_[t]) !== null && o !== void 0 && o.has(r))
    );
  });
}
function Gs(e, t) {
  return p_(e, t);
}
function m_(e) {
  var t = h_(e);
  if (t === null || t === 'presentation') {
    var r = y_(e);
    if (t !== 'presentation' || Gs(e, r || '')) return r;
  }
  return t;
}
function y_(e) {
  var t = d_[Le(e)];
  if (t !== void 0) return t;
  switch (Le(e)) {
    case 'a':
    case 'area':
    case 'link':
      if (e.hasAttribute('href')) return 'link';
      break;
    case 'img':
      return e.getAttribute('alt') === '' && !Gs(e, 'img')
        ? 'presentation'
        : 'img';
    case 'input': {
      var r = e,
        o = r.type;
      switch (o) {
        case 'button':
        case 'image':
        case 'reset':
        case 'submit':
          return 'button';
        case 'checkbox':
        case 'radio':
          return o;
        case 'range':
          return 'slider';
        case 'email':
        case 'tel':
        case 'text':
        case 'url':
          return e.hasAttribute('list') ? 'combobox' : 'textbox';
        case 'search':
          return e.hasAttribute('list') ? 'combobox' : 'searchbox';
        case 'number':
          return 'spinbutton';
        default:
          return null;
      }
    }
    case 'select':
      return e.hasAttribute('multiple') || e.size > 1 ? 'listbox' : 'combobox';
  }
  return null;
}
function h_(e) {
  var t = e.getAttribute('role');
  if (t !== null) {
    var r = t.trim().split(' ')[0];
    if (r.length > 0) return r;
  }
  return null;
}
function Ce(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function Ks(e) {
  return Ce(e) && Le(e) === 'caption';
}
function rn(e) {
  return Ce(e) && Le(e) === 'input';
}
function b_(e) {
  return Ce(e) && Le(e) === 'optgroup';
}
function g_(e) {
  return Ce(e) && Le(e) === 'select';
}
function v_(e) {
  return Ce(e) && Le(e) === 'table';
}
function __(e) {
  return Ce(e) && Le(e) === 'textarea';
}
function E_(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument,
    r = t.defaultView;
  if (r === null) throw new TypeError('no window available');
  return r;
}
function w_(e) {
  return Ce(e) && Le(e) === 'fieldset';
}
function S_(e) {
  return Ce(e) && Le(e) === 'legend';
}
function C_(e) {
  return Ce(e) && Le(e) === 'slot';
}
function O_(e) {
  return Ce(e) && e.ownerSVGElement !== void 0;
}
function P_(e) {
  return Ce(e) && Le(e) === 'svg';
}
function R_(e) {
  return O_(e) && Le(e) === 'title';
}
function sn(e, t) {
  if (Ce(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(' '),
      o = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r
      .map(function (a) {
        return o.getElementById(a);
      })
      .filter(function (a) {
        return a !== null;
      });
  }
  return [];
}
function ht(e, t) {
  return Ce(e) ? t.indexOf(m_(e)) !== -1 : !1;
}
function T_(e) {
  return e.trim().replace(/\s\s+/g, ' ');
}
function A_(e, t) {
  if (!Ce(e)) return !1;
  if (e.hasAttribute('hidden') || e.getAttribute('aria-hidden') === 'true')
    return !0;
  var r = t(e);
  return (
    r.getPropertyValue('display') === 'none' ||
    r.getPropertyValue('visibility') === 'hidden'
  );
}
function q_(e) {
  return ht(e, ['button', 'combobox', 'listbox', 'textbox']) || Ys(e, 'range');
}
function Ys(e, t) {
  if (!Ce(e)) return !1;
  switch (t) {
    case 'range':
      return ht(e, [
        'meter',
        'progressbar',
        'scrollbar',
        'slider',
        'spinbutton',
      ]);
    default:
      throw new TypeError(
        "No knowledge about abstract role '".concat(
          t,
          "'. This is likely a bug :("
        )
      );
  }
}
function Ci(e, t) {
  var r = nt(e.querySelectorAll(t));
  return (
    sn(e, 'aria-owns').forEach(function (o) {
      r.push.apply(r, nt(o.querySelectorAll(t)));
    }),
    r
  );
}
function x_(e) {
  return g_(e)
    ? e.selectedOptions || Ci(e, '[selected]')
    : Ci(e, '[aria-selected="true"]');
}
function M_(e) {
  return ht(e, ['none', 'presentation']);
}
function j_(e) {
  return Ks(e);
}
function I_(e) {
  return ht(e, [
    'button',
    'cell',
    'checkbox',
    'columnheader',
    'gridcell',
    'heading',
    'label',
    'legend',
    'link',
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
    'option',
    'radio',
    'row',
    'rowheader',
    'switch',
    'tab',
    'tooltip',
    'treeitem',
  ]);
}
function N_(e) {
  return !1;
}
function B_(e) {
  return rn(e) || __(e) ? e.value : e.textContent || '';
}
function Oi(e) {
  var t = e.getPropertyValue('content');
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : '';
}
function Js(e) {
  var t = Le(e);
  return (
    t === 'button' ||
    (t === 'input' && e.getAttribute('type') !== 'hidden') ||
    t === 'meter' ||
    t === 'output' ||
    t === 'progress' ||
    t === 'select' ||
    t === 'textarea'
  );
}
function Xs(e) {
  if (Js(e)) return e;
  var t = null;
  return (
    e.childNodes.forEach(function (r) {
      if (t === null && Ce(r)) {
        var o = Xs(r);
        o !== null && (t = o);
      }
    }),
    t
  );
}
function $_(e) {
  if (e.control !== void 0) return e.control;
  var t = e.getAttribute('for');
  return t !== null ? e.ownerDocument.getElementById(t) : Xs(e);
}
function D_(e) {
  var t = e.labels;
  if (t === null) return t;
  if (t !== void 0) return nt(t);
  if (!Js(e)) return null;
  var r = e.ownerDocument;
  return nt(r.querySelectorAll('label')).filter(function (o) {
    return $_(o) === e;
  });
}
function k_(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? nt(e.childNodes) : t;
}
function Qs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = new c_(),
    o = E_(e),
    a = t.compute,
    c = a === void 0 ? 'name' : a,
    n = t.computedStyleSupportsPseudoElements,
    i = n === void 0 ? t.getComputedStyle !== void 0 : n,
    l = t.getComputedStyle,
    s = l === void 0 ? o.getComputedStyle.bind(o) : l,
    u = t.hidden,
    f = u === void 0 ? !1 : u;
  function d(h, v) {
    var S = '';
    if (Ce(h) && i) {
      var E = s(h, '::before'),
        C = Oi(E);
      S = ''.concat(C, ' ').concat(S);
    }
    var A = C_(h) ? k_(h) : nt(h.childNodes).concat(sn(h, 'aria-owns'));
    if (
      (A.forEach(function (O) {
        var x = g(O, {
            isEmbeddedInLabel: v.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0,
          }),
          I = Ce(O) ? s(O).getPropertyValue('display') : 'inline',
          H = I !== 'inline' ? ' ' : '';
        S += ''.concat(H).concat(x).concat(H);
      }),
      Ce(h) && i)
    ) {
      var R = s(h, '::after'),
        _ = Oi(R);
      S = ''.concat(S, ' ').concat(_);
    }
    return S.trim();
  }
  function p(h, v) {
    var S = h.getAttributeNode(v);
    return S !== null && !r.has(S) && S.value.trim() !== ''
      ? (r.add(S), S.value)
      : null;
  }
  function m(h) {
    return Ce(h) ? p(h, 'title') : null;
  }
  function y(h) {
    if (!Ce(h)) return null;
    if (w_(h)) {
      r.add(h);
      for (var v = nt(h.childNodes), S = 0; S < v.length; S += 1) {
        var E = v[S];
        if (S_(E))
          return g(E, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1,
          });
      }
    } else if (v_(h)) {
      r.add(h);
      for (var C = nt(h.childNodes), A = 0; A < C.length; A += 1) {
        var R = C[A];
        if (Ks(R))
          return g(R, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1,
          });
      }
    } else if (P_(h)) {
      r.add(h);
      for (var _ = nt(h.childNodes), O = 0; O < _.length; O += 1) {
        var x = _[O];
        if (R_(x)) return x.textContent;
      }
      return null;
    } else if (Le(h) === 'img' || Le(h) === 'area') {
      var I = p(h, 'alt');
      if (I !== null) return I;
    } else if (b_(h)) {
      var H = p(h, 'label');
      if (H !== null) return H;
    }
    if (
      rn(h) &&
      (h.type === 'button' || h.type === 'submit' || h.type === 'reset')
    ) {
      var V = p(h, 'value');
      if (V !== null) return V;
      if (h.type === 'submit') return 'Submit';
      if (h.type === 'reset') return 'Reset';
    }
    var L = D_(h);
    if (L !== null && L.length !== 0)
      return (
        r.add(h),
        nt(L)
          .map(function (ae) {
            return g(ae, {
              isEmbeddedInLabel: !0,
              isReferenced: !1,
              recursion: !0,
            });
          })
          .filter(function (ae) {
            return ae.length > 0;
          })
          .join(' ')
      );
    if (rn(h) && h.type === 'image') {
      var re = p(h, 'alt');
      if (re !== null) return re;
      var G = p(h, 'title');
      return G !== null ? G : 'Submit Query';
    }
    if (ht(h, ['button'])) {
      var oe = d(h, { isEmbeddedInLabel: !1, isReferenced: !1 });
      if (oe !== '') return oe;
    }
    return null;
  }
  function g(h, v) {
    if (r.has(h)) return '';
    if (!f && A_(h, s) && !v.isReferenced) return r.add(h), '';
    var S = Ce(h) ? h.getAttributeNode('aria-labelledby') : null,
      E = S !== null && !r.has(S) ? sn(h, 'aria-labelledby') : [];
    if (c === 'name' && !v.isReferenced && E.length > 0)
      return (
        r.add(S),
        E.map(function (I) {
          return g(I, {
            isEmbeddedInLabel: v.isEmbeddedInLabel,
            isReferenced: !0,
            recursion: !1,
          });
        }).join(' ')
      );
    var C = v.recursion && q_(h) && c === 'name';
    if (!C) {
      var A = ((Ce(h) && h.getAttribute('aria-label')) || '').trim();
      if (A !== '' && c === 'name') return r.add(h), A;
      if (!M_(h)) {
        var R = y(h);
        if (R !== null) return r.add(h), R;
      }
    }
    if (ht(h, ['menu'])) return r.add(h), '';
    if (C || v.isEmbeddedInLabel || v.isReferenced) {
      if (ht(h, ['combobox', 'listbox'])) {
        r.add(h);
        var _ = x_(h);
        return _.length === 0
          ? rn(h)
            ? h.value
            : ''
          : nt(_)
              .map(function (I) {
                return g(I, {
                  isEmbeddedInLabel: v.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0,
                });
              })
              .join(' ');
      }
      if (Ys(h, 'range'))
        return (
          r.add(h),
          h.hasAttribute('aria-valuetext')
            ? h.getAttribute('aria-valuetext')
            : h.hasAttribute('aria-valuenow')
              ? h.getAttribute('aria-valuenow')
              : h.getAttribute('value') || ''
        );
      if (ht(h, ['textbox'])) return r.add(h), B_(h);
    }
    if (I_(h) || (Ce(h) && v.isReferenced) || j_(h) || N_()) {
      var O = d(h, {
        isEmbeddedInLabel: v.isEmbeddedInLabel,
        isReferenced: !1,
      });
      if (O !== '') return r.add(h), O;
    }
    if (h.nodeType === h.TEXT_NODE) return r.add(h), h.textContent || '';
    if (v.recursion)
      return (
        r.add(h),
        d(h, { isEmbeddedInLabel: v.isEmbeddedInLabel, isReferenced: !1 })
      );
    var x = m(h);
    return x !== null ? (r.add(h), x) : (r.add(h), '');
  }
  return T_(
    g(e, {
      isEmbeddedInLabel: !1,
      isReferenced: c === 'description',
      recursion: !1,
    })
  );
}
function xr(e) {
  '@babel/helpers - typeof';
  return (
    (xr =
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
    xr(e)
  );
}
function Pi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t &&
      (o = o.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, o);
  }
  return r;
}
function Ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pi(Object(r), !0).forEach(function (o) {
          L_(e, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Pi(Object(r)).forEach(function (o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
          });
  }
  return e;
}
function L_(e, t, r) {
  return (
    (t = F_(t)),
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
function F_(e) {
  var t = U_(e, 'string');
  return xr(t) === 'symbol' ? t : String(t);
}
function U_(e, t) {
  if (xr(e) !== 'object' || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t || 'default');
    if (xr(o) !== 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function ua(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = sn(e, 'aria-describedby')
      .map(function (a) {
        return Qs(a, Ri(Ri({}, t), {}, { compute: 'description' }));
      })
      .join(' ');
  if (r === '') {
    var o = e.getAttribute('title');
    r = o === null ? '' : o;
  }
  return r;
}
function H_(e) {
  return ht(e, [
    'caption',
    'code',
    'deletion',
    'emphasis',
    'generic',
    'insertion',
    'paragraph',
    'presentation',
    'strong',
    'subscript',
    'superscript',
  ]);
}
function xn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return H_(e) ? '' : Qs(e, t);
}
var z_ = _e(Ql(), 1),
  Zs = _e(Zl(), 1),
  V_ = _e(es(), 1),
  W_ = _e(ts(), 1),
  eu = _e(ta(), 1),
  tu = class extends Error {
    constructor(e, t, r, o) {
      super(), Error.captureStackTrace && Error.captureStackTrace(this, r);
      let a = '';
      try {
        a = o.utils.printWithType('Received', t, o.utils.printReceived);
      } catch {}
      this.message = [
        o.utils.matcherHint(
          `${o.isNot ? '.not' : ''}.${r.name}`,
          'received',
          ''
        ),
        '',
        `${o.utils.RECEIVED_COLOR('received')} value must ${e}.`,
        a,
      ].join(`
`);
    }
  },
  Ti = class extends tu {
    constructor(...e) {
      super('be an HTMLElement or an SVGElement', ...e);
    }
  },
  Ai = class extends tu {
    constructor(...e) {
      super('be a Node', ...e);
    }
  };
function ru(e, t, ...r) {
  if (!e || !e.ownerDocument || !e.ownerDocument.defaultView)
    throw new t(e, ...r);
}
function G_(e, ...t) {
  ru(e, Ai, ...t);
  let r = e.ownerDocument.defaultView;
  if (!(e instanceof r.Node)) throw new Ai(e, ...t);
}
function Ee(e, ...t) {
  ru(e, Ti, ...t);
  let r = e.ownerDocument.defaultView;
  if (!(e instanceof r.HTMLElement) && !(e instanceof r.SVGElement))
    throw new Ti(e, ...t);
}
var K_ = class extends Error {
  constructor(e, t, r) {
    super(),
      Error.captureStackTrace && Error.captureStackTrace(this, t),
      (this.message = [
        e.message,
        '',
        r.utils.RECEIVED_COLOR('Failing css:'),
        r.utils.RECEIVED_COLOR(`${e.css}`),
      ].join(`
`));
  }
};
function Y_(e, ...t) {
  let r = e_(`selector { ${e} }`, { silent: !0 }).stylesheet;
  if (r.parsingErrors && r.parsingErrors.length > 0) {
    let { reason: o, line: a } = r.parsingErrors[0];
    throw new K_(
      {
        css: e,
        message: `Syntax error parsing expected css: ${o} on line: ${a}`,
      },
      ...t
    );
  }
  return r.rules[0].declarations
    .filter((o) => o.type === 'declaration')
    .reduce((o, { property: a, value: c }) => Object.assign(o, { [a]: c }), {});
}
function qi(e, t) {
  return typeof t == 'string' ? t : e.utils.stringify(t);
}
function He(e, t, r, o, a, c) {
  return [
    `${t}
`,
    `${r}:
${e.utils.EXPECTED_COLOR((0, Ei.default)(qi(e, o), 2))}`,
    `${a}:
${e.utils.RECEIVED_COLOR((0, Ei.default)(qi(e, c), 2))}`,
  ].join(`
`);
}
function J_(e, t) {
  return t instanceof RegExp ? t.test(e) : e.includes(String(t));
}
function Mn(e, t) {
  console.warn(
    `Warning: ${e} has been deprecated and will be removed in future updates.`,
    t
  );
}
function jn(e) {
  return e.replace(/\s+/g, ' ').trim();
}
function At(e) {
  return e.tagName && e.tagName.toLowerCase();
}
function X_({ multiple: e, options: t }) {
  let r = [...t].filter((o) => o.selected);
  if (e) return [...r].map((o) => o.value);
  if (r.length !== 0) return r[0].value;
}
function Q_(e) {
  switch (e.type) {
    case 'number':
      return e.value === '' ? null : Number(e.value);
    case 'checkbox':
      return e.checked;
    default:
      return e.value;
  }
}
function nu(e) {
  if (e)
    switch (e.tagName.toLowerCase()) {
      case 'input':
        return Q_(e);
      case 'select':
        return X_(e);
      default:
        return e.value;
    }
}
function ou(e, t) {
  if (Array.isArray(e) && Array.isArray(t))
    return (0, Jv.default)(new Set(e), new Set(t));
}
function Z_(
  e,
  { wordConnector: t = ', ', lastWordConnector: r = ' and ' } = {}
) {
  return [e.slice(0, -1).join(t), e[e.length - 1]].join(e.length > 1 ? r : '');
}
function mo(e, t) {
  return (
    Mn(
      'toBeInTheDOM',
      'Please use toBeInTheDocument for searching the entire document and toContainElement for searching a specific container.'
    ),
    e && Ee(e, mo, this),
    t && Ee(t, mo, this),
    {
      pass: t ? t.contains(e) : !!e,
      message: () =>
        [
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toBeInTheDOM`,
            'element',
            ''
          ),
          '',
          'Received:',
          `  ${this.utils.printReceived(e && e.cloneNode(!1))}`,
        ].join(`
`),
    }
  );
}
function au(e) {
  (e !== null || !this.isNot) && Ee(e, au, this);
  let t = e === null ? !1 : e.ownerDocument === e.getRootNode({ composed: !0 }),
    r = () =>
      `expected document not to contain element, found ${this.utils.stringify(e.cloneNode(!0))} instead`,
    o = () => 'element could not be found in the document';
  return {
    pass: t,
    message: () =>
      [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeInTheDocument`,
          'element',
          ''
        ),
        '',
        this.utils.RECEIVED_COLOR(this.isNot ? r() : o()),
      ].join(`
`),
  };
}
function iu(e) {
  return (
    Mn(
      'toBeEmpty',
      'Please use instead toBeEmptyDOMElement for finding empty nodes in the DOM.'
    ),
    Ee(e, iu, this),
    {
      pass: e.innerHTML === '',
      message: () =>
        [
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toBeEmpty`,
            'element',
            ''
          ),
          '',
          'Received:',
          `  ${this.utils.printReceived(e.innerHTML)}`,
        ].join(`
`),
    }
  );
}
function lu(e) {
  return (
    Ee(e, lu, this),
    {
      pass: eE(e),
      message: () =>
        [
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toBeEmptyDOMElement`,
            'element',
            ''
          ),
          '',
          'Received:',
          `  ${this.utils.printReceived(e.innerHTML)}`,
        ].join(`
`),
    }
  );
}
function eE(e) {
  return [...e.childNodes].filter((t) => t.nodeType !== 8).length === 0;
}
function yo(e, t) {
  return (
    Ee(e, yo, this),
    t !== null && Ee(t, yo, this),
    {
      pass: e.contains(t),
      message: () =>
        [
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toContainElement`,
            'element',
            'element'
          ),
          '',
          this.utils
            .RECEIVED_COLOR(`${this.utils.stringify(e.cloneNode(!1))} ${this.isNot ? 'contains:' : 'does not contain:'} ${this.utils.stringify(t && t.cloneNode(!1))}
        `),
        ].join(`
`),
    }
  );
}
function tE(e, t) {
  let r = e.ownerDocument.createElement('div');
  return (r.innerHTML = t), r.innerHTML;
}
function su(e, t) {
  if ((Ee(e, su, this), typeof t != 'string'))
    throw new Error(`.toContainHTML() expects a string value, got ${t}`);
  return {
    pass: e.outerHTML.includes(tE(e, t)),
    message: () =>
      [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toContainHTML`,
          'element',
          ''
        ),
        'Expected:',
        `  ${this.utils.EXPECTED_COLOR(t)}`,
        'Received:',
        `  ${this.utils.printReceived(e.cloneNode(!0))}`,
      ].join(`
`),
  };
}
function uu(e, t, r = { normalizeWhitespace: !0 }) {
  G_(e, uu, this);
  let o = r.normalizeWhitespace
      ? jn(e.textContent)
      : e.textContent.replace(/\u00a0/g, ' '),
    a = o !== '' && t === '';
  return {
    pass: !a && J_(o, t),
    message: () => {
      let c = this.isNot ? 'not to' : 'to';
      return He(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveTextContent`,
          'element',
          ''
        ),
        a
          ? 'Checking with empty string will always match, use .toBeEmptyDOMElement() instead'
          : `Expected element ${c} have text content`,
        t,
        'Received',
        o
      );
    },
  };
}
function ho(e, t) {
  Ee(e, ho, this);
  let r = ua(e),
    o = arguments.length === 1,
    a = !1;
  return (
    o
      ? (a = r !== '')
      : (a = t instanceof RegExp ? t.test(r) : this.equals(r, t)),
    {
      pass: a,
      message: () => {
        let c = this.isNot ? 'not to' : 'to';
        return He(
          this,
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.${ho.name}`,
            'element',
            ''
          ),
          `Expected element ${c} have accessible description`,
          t,
          'Received',
          r
        );
      },
    }
  );
}
var wr = 'aria-invalid',
  rE = ['false'];
function cu(e, t) {
  var i;
  Ee(e, cu, this);
  let r = this.isNot ? 'not to' : 'to',
    o = this.isNot
      ? '.not.toHaveAccessibleErrorMessage'
      : '.toHaveAccessibleErrorMessage',
    a = e.getAttribute('aria-errormessage');
  if (a && /\s+/.test(a))
    return {
      pass: !1,
      message: () =>
        He(
          this,
          this.utils.matcherHint(o, 'element'),
          "Expected element's `aria-errormessage` attribute to be empty or a single, valid ID",
          '',
          'Received',
          `aria-errormessage="${a}"`
        ),
    };
  let c = e.getAttribute(wr);
  if (!e.hasAttribute(wr) || rE.includes(c))
    return {
      pass: !1,
      message: () =>
        He(
          this,
          this.utils.matcherHint(o, 'element'),
          'Expected element to be marked as invalid with attribute',
          `${wr}="${String(!0)}"`,
          'Received',
          e.hasAttribute('aria-invalid') ? `${wr}="${e.getAttribute(wr)}` : null
        ),
    };
  let n = jn(
    ((i = e.ownerDocument.getElementById(a)) == null
      ? void 0
      : i.textContent) ?? ''
  );
  return {
    pass:
      t === void 0 ? !!n : t instanceof RegExp ? t.test(n) : this.equals(n, t),
    message: () =>
      He(
        this,
        this.utils.matcherHint(o, 'element'),
        `Expected element ${r} have accessible error message`,
        t ?? '',
        'Received',
        n
      ),
  };
}
function bo(e, t) {
  Ee(e, bo, this);
  let r = xn(e),
    o = arguments.length === 1,
    a = !1;
  return (
    o
      ? (a = r !== '')
      : (a = t instanceof RegExp ? t.test(r) : this.equals(r, t)),
    {
      pass: a,
      message: () => {
        let c = this.isNot ? 'not to' : 'to';
        return He(
          this,
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.${bo.name}`,
            'element',
            ''
          ),
          `Expected element ${c} have accessible name`,
          t,
          'Received',
          r
        );
      },
    }
  );
}
function xi(e, t, r) {
  return r === void 0 ? t : `${t}=${e(r)}`;
}
function nE(e, t, r) {
  return r === void 0
    ? `element.hasAttribute(${e(t)})`
    : `element.getAttribute(${e(t)}) === ${e(r)}`;
}
function du(e, t, r) {
  Ee(e, du, this);
  let o = r !== void 0,
    a = e.hasAttribute(t),
    c = e.getAttribute(t);
  return {
    pass: o ? a && this.equals(c, r) : a,
    message: () => {
      let n = this.isNot ? 'not to' : 'to',
        i = a ? xi(this.utils.stringify, t, c) : null,
        l = this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveAttribute`,
          'element',
          this.utils.printExpected(t),
          {
            secondArgument: o ? this.utils.printExpected(r) : void 0,
            comment: nE(this.utils.stringify, t, r),
          }
        );
      return He(
        this,
        l,
        `Expected the element ${n} have attribute`,
        xi(this.utils.stringify, t, r),
        'Received',
        i
      );
    },
  };
}
function oE(e) {
  let t = e.pop(),
    r,
    o;
  return (
    typeof t == 'object'
      ? ((r = e), (o = t))
      : ((r = e.concat(t)), (o = { exact: !1 })),
    { expectedClassNames: r, options: o }
  );
}
function Mi(e) {
  return e ? e.split(/\s+/).filter((t) => t.length > 0) : [];
}
function ji(e, t) {
  return e.every((r) => t.includes(r));
}
function fu(e, ...t) {
  Ee(e, fu, this);
  let { expectedClassNames: r, options: o } = oE(t),
    a = Mi(e.getAttribute('class')),
    c = r.reduce((n, i) => n.concat(Mi(i)), []);
  return o.exact
    ? {
        pass: ji(c, a) && c.length === a.length,
        message: () => {
          let n = this.isNot ? 'not to' : 'to';
          return He(
            this,
            this.utils.matcherHint(
              `${this.isNot ? '.not' : ''}.toHaveClass`,
              'element',
              this.utils.printExpected(c.join(' '))
            ),
            `Expected the element ${n} have EXACTLY defined classes`,
            c.join(' '),
            'Received',
            a.join(' ')
          );
        },
      }
    : c.length > 0
      ? {
          pass: ji(c, a),
          message: () => {
            let n = this.isNot ? 'not to' : 'to';
            return He(
              this,
              this.utils.matcherHint(
                `${this.isNot ? '.not' : ''}.toHaveClass`,
                'element',
                this.utils.printExpected(c.join(' '))
              ),
              `Expected the element ${n} have class`,
              c.join(' '),
              'Received',
              a.join(' ')
            );
          },
        }
      : {
          pass: this.isNot ? a.length > 0 : !1,
          message: () =>
            this.isNot
              ? He(
                  this,
                  this.utils.matcherHint('.not.toHaveClass', 'element', ''),
                  'Expected the element to have classes',
                  '(none)',
                  'Received',
                  a.join(' ')
                )
              : [
                  this.utils.matcherHint('.toHaveClass', 'element'),
                  'At least one expected class must be provided.',
                ].join(`
`),
        };
}
function aE(e, t) {
  let r = {},
    o = e.createElement('div');
  return (
    Object.keys(t).forEach((a) => {
      (o.style[a] = t[a]), (r[a] = o.style[a]);
    }),
    r
  );
}
function iE(e, t) {
  return (
    !!Object.keys(e).length &&
    Object.entries(e).every(
      ([r, o]) => t[r] === o || t.getPropertyValue(r.toLowerCase()) === o
    )
  );
}
function Ii(e) {
  return Object.keys(e)
    .sort()
    .map((t) => `${t}: ${e[t]};`).join(`
`);
}
function lE(e, t, r) {
  let o = Array.from(r)
    .filter((a) => t[a] !== void 0)
    .reduce((a, c) => Object.assign(a, { [c]: r.getPropertyValue(c) }), {});
  return e(Ii(t), Ii(o)).replace(
    `${z_.default.red('+ Received')}
`,
    ''
  );
}
function go(e, t) {
  Ee(e, go, this);
  let r = typeof t == 'object' ? t : Y_(t, go, this),
    { getComputedStyle: o } = e.ownerDocument.defaultView,
    a = aE(e.ownerDocument, r),
    c = o(e);
  return {
    pass: iE(a, c),
    message: () => {
      let n = `${this.isNot ? '.not' : ''}.toHaveStyle`;
      return [
        this.utils.matcherHint(n, 'element', ''),
        lE(this.utils.diff, a, c),
      ].join(`

`);
    },
  };
}
function pu(e) {
  return (
    Ee(e, pu, this),
    {
      pass: e.ownerDocument.activeElement === e,
      message: () =>
        [
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toHaveFocus`,
            'element',
            ''
          ),
          '',
          ...(this.isNot
            ? [
                'Received element is focused:',
                `  ${this.utils.printReceived(e)}`,
              ]
            : [
                'Expected element with focus:',
                `  ${this.utils.printExpected(e)}`,
                'Received element with focus:',
                `  ${this.utils.printReceived(e.ownerDocument.activeElement)}`,
              ]),
        ].join(`
`),
    }
  );
}
function sE(e) {
  let t = (0, V_.default)(e.map((r) => r.type));
  if (t.length !== 1)
    throw new Error(
      'Multiple form elements with the same name must be of the same type'
    );
  switch (t[0]) {
    case 'radio': {
      let r = e.find((o) => o.checked);
      return r ? r.value : void 0;
    }
    case 'checkbox':
      return e.filter((r) => r.checked).map((r) => r.value);
    default:
      return e.map((r) => r.value);
  }
}
function uE(e, t) {
  let r = [...e.querySelectorAll(`[name="${(0, W_.default)(t)}"]`)];
  if (r.length !== 0)
    switch (r.length) {
      case 1:
        return nu(r[0]);
      default:
        return sE(r);
    }
}
function cE(e) {
  return /\[\]$/.test(e) ? e.slice(0, -2) : e;
}
function dE(e) {
  return Array.from(e.elements)
    .map((t) => t.name)
    .reduce((t, r) => ({ ...t, [cE(r)]: uE(e, r) }), {});
}
function mu(e, t) {
  if ((Ee(e, mu, this), !e.elements))
    throw new Error('toHaveFormValues must be called on a form or a fieldset');
  let r = dE(e);
  return {
    pass: Object.entries(t).every(([o, a]) => (0, Zs.default)(r[o], a, ou)),
    message: () => {
      let o = this.isNot ? 'not to' : 'to',
        a = `${this.isNot ? '.not' : ''}.toHaveFormValues`,
        c = Object.keys(r)
          .filter((n) => t.hasOwnProperty(n))
          .reduce((n, i) => ({ ...n, [i]: r[i] }), {});
      return [
        this.utils.matcherHint(a, 'element', ''),
        `Expected the element ${o} have form values`,
        this.utils.diff(t, c),
      ].join(`

`);
    },
  };
}
function fE(e) {
  let { getComputedStyle: t } = e.ownerDocument.defaultView,
    { display: r, visibility: o, opacity: a } = t(e);
  return (
    r !== 'none' && o !== 'hidden' && o !== 'collapse' && a !== '0' && a !== 0
  );
}
function pE(e, t) {
  let r;
  return (
    t
      ? (r =
          e.nodeName === 'DETAILS' && t.nodeName !== 'SUMMARY'
            ? e.hasAttribute('open')
            : !0)
      : (r = e.nodeName === 'DETAILS' ? e.hasAttribute('open') : !0),
    !e.hasAttribute('hidden') && r
  );
}
function yu(e, t) {
  return fE(e) && pE(e, t) && (!e.parentElement || yu(e.parentElement, e));
}
function hu(e) {
  Ee(e, hu, this);
  let t = e.ownerDocument === e.getRootNode({ composed: !0 }),
    r = t && yu(e);
  return {
    pass: r,
    message: () => {
      let o = r ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeVisible`,
          'element',
          ''
        ),
        '',
        `Received element ${o} visible${t ? '' : ' (element is not in the document)'}:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
var mE = [
  'fieldset',
  'input',
  'select',
  'optgroup',
  'option',
  'button',
  'textarea',
];
function yE(e, t) {
  return (
    At(e) === 'legend' &&
    At(t) === 'fieldset' &&
    e.isSameNode(Array.from(t.children).find((r) => At(r) === 'legend'))
  );
}
function hE(e, t) {
  return gu(t) && !yE(e, t);
}
function bE(e) {
  return e.includes('-');
}
function bu(e) {
  let t = At(e);
  return mE.includes(t) || bE(t);
}
function gu(e) {
  return bu(e) && e.hasAttribute('disabled');
}
function vu(e) {
  let t = e.parentElement;
  return !!t && (hE(e, t) || vu(t));
}
function _u(e) {
  return bu(e) && (gu(e) || vu(e));
}
function Eu(e) {
  Ee(e, Eu, this);
  let t = _u(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeDisabled`,
          'element',
          ''
        ),
        '',
        `Received element ${r} disabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function wu(e) {
  Ee(e, wu, this);
  let t = !_u(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeEnabled`,
          'element',
          ''
        ),
        '',
        `Received element ${r} enabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
var gE = ['select', 'textarea'],
  vE = ['input', 'select', 'textarea'],
  _E = ['color', 'hidden', 'range', 'submit', 'image', 'reset'],
  EE = ['combobox', 'gridcell', 'radiogroup', 'spinbutton', 'tree'];
function wE(e) {
  return gE.includes(At(e)) && e.hasAttribute('required');
}
function SE(e) {
  return (
    At(e) === 'input' &&
    e.hasAttribute('required') &&
    ((e.hasAttribute('type') && !_E.includes(e.getAttribute('type'))) ||
      !e.hasAttribute('type'))
  );
}
function CE(e) {
  return (
    e.hasAttribute('aria-required') &&
    e.getAttribute('aria-required') === 'true' &&
    (vE.includes(At(e)) ||
      (e.hasAttribute('role') && EE.includes(e.getAttribute('role'))))
  );
}
function Su(e) {
  Ee(e, Su, this);
  let t = wE(e) || SE(e) || CE(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeRequired`,
          'element',
          ''
        ),
        '',
        `Received element ${r} required:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
var OE = ['form', 'input', 'select', 'textarea'];
function PE(e) {
  return (
    e.hasAttribute('aria-invalid') && e.getAttribute('aria-invalid') !== 'false'
  );
}
function RE(e) {
  return OE.includes(At(e));
}
function Cu(e) {
  let t = PE(e);
  return RE(e) ? t || !e.checkValidity() : t;
}
function Ou(e) {
  Ee(e, Ou, this);
  let t = Cu(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeInvalid`,
          'element',
          ''
        ),
        '',
        `Received element ${r} currently invalid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function Pu(e) {
  Ee(e, Pu, this);
  let t = !Cu(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeValid`,
          'element',
          ''
        ),
        '',
        `Received element ${r} currently valid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function Ru(e, t) {
  if (
    (Ee(e, Ru, this),
    e.tagName.toLowerCase() === 'input' &&
      ['checkbox', 'radio'].includes(e.type))
  )
    throw new Error(
      'input with type=checkbox or type=radio cannot be used with .toHaveValue(). Use .toBeChecked() for type=checkbox or .toHaveFormValues() instead'
    );
  let r = nu(e),
    o = t !== void 0,
    a = t,
    c = r;
  return (
    t == r &&
      t !== r &&
      ((a = `${t} (${typeof t})`), (c = `${r} (${typeof r})`)),
    {
      pass: o ? (0, Zs.default)(r, t, ou) : !!r,
      message: () => {
        let n = this.isNot ? 'not to' : 'to',
          i = this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toHaveValue`,
            'element',
            t
          );
        return He(
          this,
          i,
          `Expected the element ${n} have value`,
          o ? a : '(any)',
          'Received',
          c
        );
      },
    }
  );
}
function Tu(e, t) {
  Ee(e, Tu, this);
  let r = e.tagName.toLowerCase();
  if (!['select', 'input', 'textarea'].includes(r))
    throw new Error(
      '.toHaveDisplayValue() currently supports only input, textarea or select elements, try with another matcher instead.'
    );
  if (r === 'input' && ['radio', 'checkbox'].includes(e.type))
    throw new Error(
      `.toHaveDisplayValue() currently does not support input[type="${e.type}"], try with another matcher instead.`
    );
  let o = TE(r, e),
    a = AE(t),
    c = a.filter((l) =>
      o.some((s) =>
        l instanceof RegExp ? l.test(s) : this.equals(s, String(l))
      )
    ).length,
    n = c === o.length,
    i = c === a.length;
  return {
    pass: n && i,
    message: () =>
      He(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveDisplayValue`,
          'element',
          ''
        ),
        `Expected element ${this.isNot ? 'not ' : ''}to have display value`,
        t,
        'Received',
        o
      ),
  };
}
function TE(e, t) {
  return e === 'select'
    ? Array.from(t)
        .filter((r) => r.selected)
        .map((r) => r.textContent)
    : [t.value];
}
function AE(e) {
  return e instanceof Array ? e : [e];
}
function Au(e) {
  Ee(e, Au, this);
  let t = () =>
      e.tagName.toLowerCase() === 'input' &&
      ['checkbox', 'radio'].includes(e.type),
    r = () =>
      qu(e.getAttribute('role')) &&
      ['true', 'false'].includes(e.getAttribute('aria-checked'));
  if (!t() && !r())
    return {
      pass: !1,
      message: () =>
        `only inputs with type="checkbox" or type="radio" or elements with ${qE()} and a valid aria-checked attribute can be used with .toBeChecked(). Use .toHaveValue() instead`,
    };
  let o = () => (t() ? e.checked : e.getAttribute('aria-checked') === 'true');
  return {
    pass: o(),
    message: () => {
      let a = o() ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBeChecked`,
          'element',
          ''
        ),
        '',
        `Received element ${a} checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function qE() {
  return Z_(
    xE().map((e) => `role="${e}"`),
    { lastWordConnector: ' or ' }
  );
}
function xE() {
  return eu.roles.keys().filter(qu);
}
function qu(e) {
  var t;
  return (
    ((t = eu.roles.get(e)) == null ? void 0 : t.props['aria-checked']) !==
    void 0
  );
}
function xu(e) {
  Ee(e, xu, this);
  let t = () => e.tagName.toLowerCase() === 'input' && e.type === 'checkbox',
    r = () => e.getAttribute('role') === 'checkbox';
  if (!t() && !r())
    return {
      pass: !1,
      message: () =>
        'only inputs with type="checkbox" or elements with role="checkbox" and a valid aria-checked attribute can be used with .toBePartiallyChecked(). Use .toHaveValue() instead',
    };
  let o = () => {
    let a = e.getAttribute('aria-checked') === 'mixed';
    return (t() && e.indeterminate) || a;
  };
  return {
    pass: o(),
    message: () => {
      let a = o() ? 'is' : 'is not';
      return [
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toBePartiallyChecked`,
          'element',
          ''
        ),
        '',
        `Received element ${a} partially checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function Mu(e, t) {
  Mn('toHaveDescription', 'Please use toHaveAccessibleDescription.'),
    Ee(e, Mu, this);
  let r = t !== void 0,
    o = (e.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean),
    a = '';
  if (o.length > 0) {
    let c = e.ownerDocument,
      n = o.map((i) => c.getElementById(i)).filter(Boolean);
    a = jn(n.map((i) => i.textContent).join(' '));
  }
  return {
    pass: r ? (t instanceof RegExp ? t.test(a) : this.equals(a, t)) : !!a,
    message: () => {
      let c = this.isNot ? 'not to' : 'to';
      return He(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveDescription`,
          'element',
          ''
        ),
        `Expected the element ${c} have description`,
        this.utils.printExpected(t),
        'Received',
        this.utils.printReceived(a)
      );
    },
  };
}
function ju(e, t) {
  if (
    (Mn('toHaveErrorMessage', 'Please use toHaveAccessibleErrorMessage.'),
    Ee(e, ju, this),
    !e.hasAttribute('aria-invalid') ||
      e.getAttribute('aria-invalid') === 'false')
  ) {
    let c = this.isNot ? '.not' : '';
    return {
      pass: !1,
      message: () =>
        He(
          this,
          this.utils.matcherHint(`${c}.toHaveErrorMessage`, 'element', ''),
          'Expected the element to have invalid state indicated by',
          'aria-invalid="true"',
          'Received',
          e.hasAttribute('aria-invalid')
            ? `aria-invalid="${e.getAttribute('aria-invalid')}"`
            : this.utils.printReceived('')
        ),
    };
  }
  let r = t !== void 0,
    o = (e.getAttribute('aria-errormessage') || '')
      .split(/\s+/)
      .filter(Boolean),
    a = '';
  if (o.length > 0) {
    let c = e.ownerDocument,
      n = o.map((i) => c.getElementById(i)).filter(Boolean);
    a = jn(n.map((i) => i.textContent).join(' '));
  }
  return {
    pass: r ? (t instanceof RegExp ? t.test(a) : this.equals(a, t)) : !!a,
    message: () => {
      let c = this.isNot ? 'not to' : 'to';
      return He(
        this,
        this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveErrorMessage`,
          'element',
          ''
        ),
        `Expected the element ${c} have error message`,
        this.utils.printExpected(t),
        'Received',
        this.utils.printReceived(a)
      );
    },
  };
}
_e(Nl(), 1);
_e(Jl(), 1);
_e(Ql(), 1);
_e(Zl(), 1);
_e(es(), 1);
_e(ts(), 1);
_e(ta(), 1);
function ME() {
  zn(Yv), zn(Wv), zn(Vv);
  let e = (o, a) => {
    let { assertionCalls: c } = Ar(e);
    return Wn({ assertionCalls: c + 1, soft: !1 }, e), Hn(o, a);
  };
  Object.assign(e, Hn),
    (e.getState = () => Ar(e)),
    (e.setState = (o) => Wn(o, e)),
    (e.extend = (o) => Hn.extend(e, o)),
    (e.soft = (...o) => {
      let a = e(...o);
      return e.setState({ soft: !0 }), a;
    }),
    (e.unreachable = (o) => {
      Kg.fail(`expected${o ? ` "${o}" ` : ' '}not to be reached`);
    });
  function t(o) {
    let a = () =>
      new Error(
        `expected number of assertions to be ${o}, but got ${e.getState().assertionCalls}`
      );
    'captureStackTrace' in Error &&
      typeof Error.captureStackTrace == 'function' &&
      Error.captureStackTrace(a(), t),
      e.setState({
        expectedAssertionsNumber: o,
        expectedAssertionsNumberErrorGen: a,
      });
  }
  function r() {
    let o = new Error('expected any number of assertion, but got none');
    'captureStackTrace' in Error &&
      typeof Error.captureStackTrace == 'function' &&
      Error.captureStackTrace(o, r),
      e.setState({ isExpectingAssertions: !0, isExpectingAssertionsError: o });
  }
  return (
    Wn(
      {
        assertionCalls: 0,
        isExpectingAssertions: !1,
        isExpectingAssertionsError: null,
        expectedAssertionsNumber: null,
        expectedAssertionsNumberErrorGen: null,
      },
      e
    ),
    an.addMethod(e, 'assertions', t),
    an.addMethod(e, 'hasAssertions', r),
    e.extend(Ls),
    e
  );
}
var Iu = ME();
Object.defineProperty(globalThis, qn, {
  value: Iu,
  writable: !0,
  configurable: !0,
});
var ca = new Set();
function jE() {
  ca.forEach((e) => e.mockClear());
}
function IE() {
  ca.forEach((e) => e.mockReset());
}
function NE() {
  ca.forEach((e) => e.mockRestore());
}
var Nu = {};
Al(Nu, {
  buildQueries: () => Et,
  configure: () => nw,
  createEvent: () => Pr,
  findAllByAltText: () => qc,
  findAllByDisplayValue: () => Cc,
  findAllByLabelText: () => nc,
  findAllByPlaceholderText: () => fc,
  findAllByRole: () => Hc,
  findAllByTestId: () => Yc,
  findAllByText: () => gc,
  findAllByTitle: () => Bc,
  findByAltText: () => xc,
  findByDisplayValue: () => Oc,
  findByLabelText: () => oc,
  findByPlaceholderText: () => pc,
  findByRole: () => zc,
  findByTestId: () => Jc,
  findByText: () => vc,
  findByTitle: () => $c,
  fireEvent: () => Ir,
  getAllByAltText: () => Tc,
  getAllByDisplayValue: () => wc,
  getAllByLabelText: () => ac,
  getAllByPlaceholderText: () => cc,
  getAllByRole: () => Fc,
  getAllByTestId: () => Gc,
  getAllByText: () => hc,
  getAllByTitle: () => Ic,
  getByAltText: () => Ac,
  getByDisplayValue: () => Sc,
  getByLabelText: () => ic,
  getByPlaceholderText: () => dc,
  getByRole: () => Uc,
  getByTestId: () => Kc,
  getByText: () => bc,
  getByTitle: () => Nc,
  getConfig: () => ge,
  getDefaultNormalizer: () => ya,
  getElementError: () => Nn,
  getMultipleElementsFoundError: () => Bn,
  getNodeText: () => Ur,
  getQueriesForElement: () => To,
  getRoles: () => Ju,
  getSuggestedQuery: () => un,
  isInaccessible: () => In,
  logDOM: () => vo,
  logRoles: () => sw,
  makeFindQuery: () => lr,
  makeGetAllQuery: () => ga,
  makeSingleQuery: () => ir,
  prettyDOM: () => Mr,
  prettyFormat: () => da,
  queries: () => cn,
  queryAllByAltText: () => Pc,
  queryAllByAttribute: () => Gt,
  queryAllByDisplayValue: () => _c,
  queryAllByLabelText: () => lc,
  queryAllByPlaceholderText: () => sc,
  queryAllByRole: () => kc,
  queryAllByTestId: () => Vc,
  queryAllByText: () => mc,
  queryAllByTitle: () => Mc,
  queryByAltText: () => Rc,
  queryByAttribute: () => Qu,
  queryByDisplayValue: () => Ec,
  queryByLabelText: () => tc,
  queryByPlaceholderText: () => uc,
  queryByRole: () => Lc,
  queryByTestId: () => Wc,
  queryByText: () => yc,
  queryByTitle: () => jc,
  queryHelpers: () => ww,
  screen: () => Jw,
  waitFor: () => ba,
  waitForElementToBeRemoved: () => Hw,
  within: () => To,
  wrapAllByQueryWithSuggestion: () => Ge,
  wrapSingleQueryWithSuggestion: () => qt,
});
var da = _e(Vg()),
  Ze = _e(ta()),
  BE = _e(Wg());
function Bu(e) {
  return e.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
var $E = (e, t, r, o, a, c, n) => {
    let i = o + r.indent,
      l = r.colors;
    return e
      .map((s) => {
        let u = t[s],
          f = n(u, r, i, a, c);
        return (
          typeof u != 'string' &&
            (f.indexOf(`
`) !== -1 && (f = r.spacingOuter + i + f + r.spacingOuter + o),
            (f = '{' + f + '}')),
          r.spacingInner +
            o +
            l.prop.open +
            s +
            l.prop.close +
            '=' +
            l.value.open +
            f +
            l.value.close
        );
      })
      .join('');
  },
  DE = 3,
  kE = (e, t, r, o, a, c) =>
    e
      .map((n) => {
        let i = typeof n == 'string' ? $u(n, t) : c(n, t, r, o, a);
        return i === '' &&
          typeof n == 'object' &&
          n !== null &&
          n.nodeType !== DE
          ? ''
          : t.spacingOuter + r + i;
      })
      .join(''),
  $u = (e, t) => {
    let r = t.colors.content;
    return r.open + Bu(e) + r.close;
  },
  LE = (e, t) => {
    let r = t.colors.comment;
    return r.open + '<!--' + Bu(e) + '-->' + r.close;
  },
  FE = (e, t, r, o, a) => {
    let c = o.colors.tag;
    return (
      c.open +
      '<' +
      e +
      (t && c.close + t + o.spacingOuter + a + c.open) +
      (r
        ? '>' + c.close + r + o.spacingOuter + a + c.open + '</' + e
        : (t && !o.min ? '' : ' ') + '/') +
      '>' +
      c.close
    );
  },
  UE = (e, t) => {
    let r = t.colors.tag;
    return r.open + '<' + e + r.close + ' …' + r.open + ' />' + r.close;
  },
  HE = 1,
  Du = 3,
  ku = 8,
  Lu = 11,
  zE = /^((HTML|SVG)\w*)?Element$/,
  VE = (e) => {
    let t = e.constructor.name,
      { nodeType: r, tagName: o } = e,
      a =
        (typeof o == 'string' && o.includes('-')) ||
        (typeof e.hasAttribute == 'function' && e.hasAttribute('is'));
    return (
      (r === HE && (zE.test(t) || a)) ||
      (r === Du && t === 'Text') ||
      (r === ku && t === 'Comment') ||
      (r === Lu && t === 'DocumentFragment')
    );
  };
function WE(e) {
  return e.nodeType === Du;
}
function GE(e) {
  return e.nodeType === ku;
}
function Kn(e) {
  return e.nodeType === Lu;
}
function KE(e) {
  return {
    test: (t) => {
      var r;
      return (
        (t == null || (r = t.constructor) == null ? void 0 : r.name) && VE(t)
      );
    },
    serialize: (t, r, o, a, c, n) => {
      if (WE(t)) return $u(t.data, r);
      if (GE(t)) return LE(t.data, r);
      let i = Kn(t) ? 'DocumentFragment' : t.tagName.toLowerCase();
      return ++a > r.maxDepth
        ? UE(i, r)
        : FE(
            i,
            $E(
              Kn(t)
                ? []
                : Array.from(t.attributes)
                    .map((l) => l.name)
                    .sort(),
              Kn(t)
                ? {}
                : Array.from(t.attributes).reduce(
                    (l, s) => ((l[s.name] = s.value), l),
                    {}
                  ),
              r,
              o + r.indent,
              a,
              c,
              n
            ),
            kE(
              Array.prototype.slice.call(t.childNodes || t.children).filter(e),
              r,
              o + r.indent,
              a,
              c,
              n
            ),
            r,
            o
          );
    },
  };
}
var Fu = null,
  fa = null,
  pa = null;
try {
  let e = module && module.require;
  (fa = e.call(module, 'fs').readFileSync),
    (pa = e.call(module, '@babel/code-frame').codeFrameColumns),
    (Fu = e.call(module, 'chalk'));
} catch {}
function YE(e) {
  let t = e.indexOf('(') + 1,
    r = e.indexOf(')'),
    o = e.slice(t, r),
    a = o.split(':'),
    [c, n, i] = [a[0], parseInt(a[1], 10), parseInt(a[2], 10)],
    l = '';
  try {
    l = fa(c, 'utf-8');
  } catch {
    return '';
  }
  let s = pa(
    l,
    { start: { line: n, column: i } },
    { highlightCode: !0, linesBelow: 0 }
  );
  return (
    Fu.dim(o) +
    `
` +
    s +
    `
`
  );
}
function JE() {
  if (!fa || !pa) return '';
  let e = new Error().stack
    .split(
      `
`
    )
    .slice(1)
    .find((t) => !t.includes('node_modules/'));
  return YE(e);
}
var Uu = 3;
function Yn() {
  return typeof jest < 'u' && jest !== null
    ? setTimeout._isMockFunction === !0 ||
        Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
    : !1;
}
function ma() {
  if (typeof window > 'u') throw new Error('Could not find default container');
  return window.document;
}
function Hu(e) {
  if (e.defaultView) return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window) return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null
    ? new Error(
        'It looks like the window object is not available for the provided node.'
      )
    : e.then instanceof Function
      ? new Error(
          'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?'
        )
      : Array.isArray(e)
        ? new Error(
            'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?'
          )
        : typeof e.debug == 'function' &&
            typeof e.logTestingPlaygroundURL == 'function'
          ? new Error(
              'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?'
            )
          : new Error(
              'The given node is not an Element, the node type is: ' +
                typeof e +
                '.'
            );
}
function _t(e) {
  if (
    !e ||
    typeof e.querySelector != 'function' ||
    typeof e.querySelectorAll != 'function'
  )
    throw new TypeError(
      'Expected container to be an Element, a Document or a DocumentFragment but got ' +
        t(e) +
        '.'
    );
  function t(r) {
    return typeof r == 'object'
      ? r === null
        ? 'null'
        : r.constructor.name
      : typeof r;
  }
}
var XE = () => {
    let e;
    try {
      var t;
      e = JSON.parse(
        (t = process) == null || (t = t.env) == null ? void 0 : t.COLORS
      );
    } catch {}
    return typeof e == 'boolean'
      ? e
      : typeof process < 'u' &&
          process.versions !== void 0 &&
          process.versions.node !== void 0;
  },
  { DOMCollection: QE } = da.plugins,
  ZE = 1,
  ew = 8;
function tw(e) {
  return (
    e.nodeType !== ew && (e.nodeType !== ZE || !e.matches(ge().defaultIgnore))
  );
}
function Mr(e, t, r) {
  if (
    (r === void 0 && (r = {}),
    e || (e = ma().body),
    typeof t != 'number' &&
      (t = (typeof process < 'u' && tp.DEBUG_PRINT_LIMIT) || 7e3),
    t === 0)
  )
    return '';
  e.documentElement && (e = e.documentElement);
  let o = typeof e;
  if (
    (o === 'object' ? (o = e.constructor.name) : (e = {}), !('outerHTML' in e))
  )
    throw new TypeError('Expected an element or document but got ' + o);
  let { filterNode: a = tw, ...c } = r,
    n = da.format(e, {
      plugins: [KE(a), QE],
      printFunctionName: !1,
      highlight: XE(),
      ...c,
    });
  return t !== void 0 && e.outerHTML.length > t ? n.slice(0, t) + '...' : n;
}
var vo = function () {
    let e = JE();
    console.log(
      e
        ? Mr(...arguments) +
            `

` +
            e
        : Mr(...arguments)
    );
  },
  Nt = {
    testIdAttribute: 'data-testid',
    asyncUtilTimeout: 1e3,
    asyncWrapper: (e) => e(),
    unstable_advanceTimersWrapper: (e) => e(),
    eventWrapper: (e) => e(),
    defaultHidden: !1,
    defaultIgnore: 'script, style',
    showOriginalStackTrace: !1,
    throwSuggestions: !1,
    getElementError(e, t) {
      let r = Mr(t),
        o = new Error(
          [
            e,
            'Ignored nodes: comments, ' +
              Nt.defaultIgnore +
              `
` +
              r,
          ].filter(Boolean).join(`

`)
        );
      return (o.name = 'TestingLibraryElementError'), o;
    },
    _disableExpensiveErrorDiagnostics: !1,
    computedStyleSupportsPseudoElements: !1,
  };
function rw(e) {
  try {
    return (Nt._disableExpensiveErrorDiagnostics = !0), e();
  } finally {
    Nt._disableExpensiveErrorDiagnostics = !1;
  }
}
function nw(e) {
  typeof e == 'function' && (e = e(Nt)), (Nt = { ...Nt, ...e });
}
function ge() {
  return Nt;
}
var ow = [
  'button',
  'meter',
  'output',
  'progress',
  'select',
  'textarea',
  'input',
];
function zu(e) {
  return ow.includes(e.nodeName.toLowerCase())
    ? ''
    : e.nodeType === Uu
      ? e.textContent
      : Array.from(e.childNodes)
          .map((t) => zu(t))
          .join('');
}
function _o(e) {
  let t;
  return (
    e.tagName.toLowerCase() === 'label'
      ? (t = zu(e))
      : (t = e.value || e.textContent),
    t
  );
}
function Vu(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!aw(e)) return [];
  let r = e.ownerDocument.querySelectorAll('label');
  return Array.from(r).filter((o) => o.control === e);
}
function aw(e) {
  return (
    /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) ||
    (e.tagName === 'INPUT' && e.getAttribute('type') !== 'hidden')
  );
}
function Wu(e, t, r) {
  let { selector: o = '*' } = r === void 0 ? {} : r,
    a = t.getAttribute('aria-labelledby'),
    c = a ? a.split(' ') : [];
  return c.length
    ? c.map((n) => {
        let i = e.querySelector('[id="' + n + '"]');
        return i
          ? { content: _o(i), formControl: null }
          : { content: '', formControl: null };
      })
    : Array.from(Vu(t)).map((n) => {
        let i = _o(n),
          l = 'button, input, meter, output, progress, select, textarea',
          s = Array.from(n.querySelectorAll(l)).filter((u) => u.matches(o))[0];
        return { content: i, formControl: s };
      });
}
function Gu(e) {
  if (e == null)
    throw new Error(
      'It looks like ' +
        e +
        ' was passed instead of a matcher. Did you do something like getByText(' +
        e +
        ')?'
    );
}
function yr(e, t, r, o) {
  if (typeof e != 'string') return !1;
  Gu(r);
  let a = o(e);
  return typeof r == 'string' || typeof r == 'number'
    ? a.toLowerCase().includes(r.toString().toLowerCase())
    : typeof r == 'function'
      ? r(a, t)
      : Ku(r, a);
}
function bt(e, t, r, o) {
  if (typeof e != 'string') return !1;
  Gu(r);
  let a = o(e);
  return r instanceof Function
    ? r(a, t)
    : r instanceof RegExp
      ? Ku(r, a)
      : a === String(r);
}
function ya(e) {
  let { trim: t = !0, collapseWhitespace: r = !0 } = e === void 0 ? {} : e;
  return (o) => {
    let a = o;
    return (a = t ? a.trim() : a), (a = r ? a.replace(/\s+/g, ' ') : a), a;
  };
}
function Wt(e) {
  let { trim: t, collapseWhitespace: r, normalizer: o } = e;
  if (!o) return ya({ trim: t, collapseWhitespace: r });
  if (typeof t < 'u' || typeof r < 'u')
    throw new Error(
      'trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer'
    );
  return o;
}
function Ku(e, t) {
  let r = e.test(t);
  return (
    e.global &&
      e.lastIndex !== 0 &&
      (console.warn(
        'To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp.'
      ),
      (e.lastIndex = 0)),
    r
  );
}
function Ur(e) {
  return e.matches('input[type=submit], input[type=button], input[type=reset]')
    ? e.value
    : Array.from(e.childNodes)
        .filter((t) => t.nodeType === Uu && !!t.textContent)
        .map((t) => t.textContent)
        .join('');
}
var iw = lw(Ze.elementRoles);
function Yu(e) {
  return (
    e.hidden === !0 ||
    e.getAttribute('aria-hidden') === 'true' ||
    e.ownerDocument.defaultView.getComputedStyle(e).display === 'none'
  );
}
function In(e, t) {
  t === void 0 && (t = {});
  let { isSubtreeInaccessible: r = Yu } = t;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === 'hidden')
    return !0;
  let o = e;
  for (; o; ) {
    if (r(o)) return !0;
    o = o.parentElement;
  }
  return !1;
}
function ha(e) {
  for (let { match: t, roles: r } of iw) if (t(e)) return [...r];
  return [];
}
function lw(e) {
  function t(n) {
    let { name: i, attributes: l } = n;
    return (
      '' +
      i +
      l
        .map((s) => {
          let { name: u, value: f, constraints: d = [] } = s;
          return d.indexOf('undefined') !== -1
            ? ':not([' + u + '])'
            : f
              ? '[' + u + '="' + f + '"]'
              : '[' + u + ']';
        })
        .join('')
    );
  }
  function r(n) {
    let { attributes: i = [] } = n;
    return i.length;
  }
  function o(n, i) {
    let { specificity: l } = n,
      { specificity: s } = i;
    return s - l;
  }
  function a(n) {
    let { attributes: i = [] } = n,
      l = i.findIndex(
        (u) => u.value && u.name === 'type' && u.value === 'text'
      );
    l >= 0 && (i = [...i.slice(0, l), ...i.slice(l + 1)]);
    let s = t({ ...n, attributes: i });
    return (u) => (l >= 0 && u.type !== 'text' ? !1 : u.matches(s));
  }
  let c = [];
  for (let [n, i] of e.entries())
    c = [...c, { match: a(n), roles: Array.from(i), specificity: r(n) }];
  return c.sort(o);
}
function Ju(e, t) {
  let { hidden: r = !1 } = t === void 0 ? {} : t;
  function o(a) {
    return [a, ...Array.from(a.children).reduce((c, n) => [...c, ...o(n)], [])];
  }
  return o(e)
    .filter((a) => (r === !1 ? In(a) === !1 : !0))
    .reduce((a, c) => {
      let n = [];
      return (
        c.hasAttribute('role')
          ? (n = c.getAttribute('role').split(' ').slice(0, 1))
          : (n = ha(c)),
        n.reduce(
          (i, l) =>
            Array.isArray(i[l])
              ? { ...i, [l]: [...i[l], c] }
              : { ...i, [l]: [c] },
          a
        )
      );
    }, {});
}
function Xu(e, t) {
  let { hidden: r, includeDescription: o } = t,
    a = Ju(e, { hidden: r });
  return Object.entries(a)
    .filter((c) => {
      let [n] = c;
      return n !== 'generic';
    })
    .map((c) => {
      let [n, i] = c,
        l = '-'.repeat(50),
        s = i.map((u) => {
          let f =
              'Name "' +
              xn(u, {
                computedStyleSupportsPseudoElements:
                  ge().computedStyleSupportsPseudoElements,
              }) +
              `":
`,
            d = Mr(u.cloneNode(!1));
          if (o) {
            let p =
              'Description "' +
              ua(u, {
                computedStyleSupportsPseudoElements:
                  ge().computedStyleSupportsPseudoElements,
              }) +
              `":
`;
            return '' + f + p + d;
          }
          return '' + f + d;
        }).join(`

`);
      return (
        n +
        `:

` +
        s +
        `

` +
        l
      );
    }).join(`
`);
}
var sw = function (e, t) {
  let { hidden: r = !1 } = t === void 0 ? {} : t;
  return console.log(Xu(e, { hidden: r }));
};
function uw(e) {
  return e.tagName === 'OPTION' ? e.selected : Hr(e, 'aria-selected');
}
function cw(e) {
  return e.getAttribute('aria-busy') === 'true';
}
function dw(e) {
  if (!('indeterminate' in e && e.indeterminate))
    return 'checked' in e ? e.checked : Hr(e, 'aria-checked');
}
function fw(e) {
  return Hr(e, 'aria-pressed');
}
function pw(e) {
  var t, r;
  return (t =
    (r = Hr(e, 'aria-current')) != null ? r : e.getAttribute('aria-current')) !=
    null
    ? t
    : !1;
}
function mw(e) {
  return Hr(e, 'aria-expanded');
}
function Hr(e, t) {
  let r = e.getAttribute(t);
  if (r === 'true') return !0;
  if (r === 'false') return !1;
}
function yw(e) {
  let t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 };
  return (
    (e.getAttribute('aria-level') && Number(e.getAttribute('aria-level'))) ||
    t[e.tagName]
  );
}
function hw(e) {
  let t = e.getAttribute('aria-valuenow');
  return t === null ? void 0 : +t;
}
function bw(e) {
  let t = e.getAttribute('aria-valuemax');
  return t === null ? void 0 : +t;
}
function gw(e) {
  let t = e.getAttribute('aria-valuemin');
  return t === null ? void 0 : +t;
}
function vw(e) {
  let t = e.getAttribute('aria-valuetext');
  return t === null ? void 0 : t;
}
var Ni = ya();
function _w(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}
function Bi(e) {
  return new RegExp(_w(e.toLowerCase()), 'i');
}
function Pt(e, t, r, o) {
  let { variant: a, name: c } = o,
    n = '',
    i = {},
    l = [['Role', 'TestId'].includes(e) ? r : Bi(r)];
  c && (i.name = Bi(c)),
    e === 'Role' &&
      In(t) &&
      ((i.hidden = !0),
      (n = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `)),
    Object.keys(i).length > 0 && l.push(i);
  let s = a + 'By' + e;
  return {
    queryName: e,
    queryMethod: s,
    queryArgs: l,
    variant: a,
    warning: n,
    toString() {
      n && console.warn(n);
      let [u, f] = l;
      return (
        (u = typeof u == 'string' ? "'" + u + "'" : u),
        (f = f
          ? ', { ' +
            Object.entries(f)
              .map((d) => {
                let [p, m] = d;
                return p + ': ' + m;
              })
              .join(', ') +
            ' }'
          : ''),
        s + '(' + u + f + ')'
      );
    },
  };
}
function Rt(e, t, r) {
  return r && (!t || t.toLowerCase() === e.toLowerCase());
}
function un(e, t, r) {
  var o, a;
  if ((t === void 0 && (t = 'get'), e.matches(ge().defaultIgnore))) return;
  let c =
    (o = e.getAttribute('role')) != null
      ? o
      : (a = ha(e)) == null
        ? void 0
        : a[0];
  if (c !== 'generic' && Rt('Role', r, c))
    return Pt('Role', e, c, {
      variant: t,
      name: xn(e, {
        computedStyleSupportsPseudoElements:
          ge().computedStyleSupportsPseudoElements,
      }),
    });
  let n = Wu(document, e)
    .map((d) => d.content)
    .join(' ');
  if (Rt('LabelText', r, n)) return Pt('LabelText', e, n, { variant: t });
  let i = e.getAttribute('placeholder');
  if (Rt('PlaceholderText', r, i))
    return Pt('PlaceholderText', e, i, { variant: t });
  let l = Ni(Ur(e));
  if (Rt('Text', r, l)) return Pt('Text', e, l, { variant: t });
  if (Rt('DisplayValue', r, e.value))
    return Pt('DisplayValue', e, Ni(e.value), { variant: t });
  let s = e.getAttribute('alt');
  if (Rt('AltText', r, s)) return Pt('AltText', e, s, { variant: t });
  let u = e.getAttribute('title');
  if (Rt('Title', r, u)) return Pt('Title', e, u, { variant: t });
  let f = e.getAttribute(ge().testIdAttribute);
  if (Rt('TestId', r, f)) return Pt('TestId', e, f, { variant: t });
}
function Gr(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function Ew(e, t) {
  let {
    container: r = ma(),
    timeout: o = ge().asyncUtilTimeout,
    showOriginalStackTrace: a = ge().showOriginalStackTrace,
    stackTraceError: c,
    interval: n = 50,
    onTimeout: i = (s) => (
      Object.defineProperty(s, 'message', {
        value: ge().getElementError(s.message, r).message,
      }),
      s
    ),
    mutationObserverOptions: l = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0,
    },
  } = t;
  if (typeof e != 'function')
    throw new TypeError('Received `callback` arg must be a function');
  return new Promise(async (s, u) => {
    let f,
      d,
      p,
      m = !1,
      y = 'idle',
      g = setTimeout(C, o),
      h = Yn();
    if (h) {
      let { unstable_advanceTimersWrapper: A } = ge();
      for (E(); !m; ) {
        if (!Yn()) {
          let R = new Error(
            "Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
          );
          a || Gr(R, c), u(R);
          return;
        }
        if (
          (await A(async () => {
            jest.advanceTimersByTime(n);
          }),
          E(),
          m)
        )
          break;
      }
    } else {
      try {
        _t(r);
      } catch (R) {
        u(R);
        return;
      }
      d = setInterval(S, n);
      let { MutationObserver: A } = Hu(r);
      (p = new A(S)), p.observe(r, l), E();
    }
    function v(A, R) {
      (m = !0),
        clearTimeout(g),
        h || (clearInterval(d), p.disconnect()),
        A ? u(A) : s(R);
    }
    function S() {
      if (Yn()) {
        let A = new Error(
          "Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
        );
        return a || Gr(A, c), u(A);
      } else return E();
    }
    function E() {
      if (y !== 'pending')
        try {
          let A = rw(e);
          typeof (A == null ? void 0 : A.then) == 'function'
            ? ((y = 'pending'),
              A.then(
                (R) => {
                  (y = 'resolved'), v(null, R);
                },
                (R) => {
                  (y = 'rejected'), (f = R);
                }
              ))
            : v(null, A);
        } catch (A) {
          f = A;
        }
    }
    function C() {
      let A;
      f
        ? ((A = f), !a && A.name === 'TestingLibraryElementError' && Gr(A, c))
        : ((A = new Error('Timed out in waitFor.')), a || Gr(A, c)),
        v(i(A), null);
    }
  });
}
function ba(e, t) {
  let r = new Error('STACK_TRACE_MESSAGE');
  return ge().asyncWrapper(() => Ew(e, { stackTraceError: r, ...t }));
}
function Nn(e, t) {
  return ge().getElementError(e, t);
}
function Bn(e, t) {
  return Nn(
    e +
      '\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).',
    t
  );
}
function Gt(e, t, r, o) {
  let {
      exact: a = !0,
      collapseWhitespace: c,
      trim: n,
      normalizer: i,
    } = o === void 0 ? {} : o,
    l = a ? bt : yr,
    s = Wt({ collapseWhitespace: c, trim: n, normalizer: i });
  return Array.from(t.querySelectorAll('[' + e + ']')).filter((u) =>
    l(u.getAttribute(e), u, r, s)
  );
}
function Qu(e, t, r, o) {
  let a = Gt(e, t, r, o);
  if (a.length > 1)
    throw Bn('Found multiple elements by [' + e + '=' + r + ']', t);
  return a[0] || null;
}
function ir(e, t) {
  return function (r) {
    for (
      var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), c = 1;
      c < o;
      c++
    )
      a[c - 1] = arguments[c];
    let n = e(r, ...a);
    if (n.length > 1) {
      let i = n.map((l) => Nn(null, l).message).join(`

`);
      throw Bn(
        t(r, ...a) +
          `

Here are the matching elements:

` +
          i,
        r
      );
    }
    return n[0] || null;
  };
}
function Zu(e, t) {
  return ge().getElementError(
    `A better query is available, try this:
` +
      e.toString() +
      `
`,
    t
  );
}
function ga(e, t) {
  return function (r) {
    for (
      var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), c = 1;
      c < o;
      c++
    )
      a[c - 1] = arguments[c];
    let n = e(r, ...a);
    if (!n.length) throw ge().getElementError(t(r, ...a), r);
    return n;
  };
}
function lr(e) {
  return (t, r, o, a) => ba(() => e(t, r, o), { container: t, ...a });
}
var qt = (e, t, r) =>
    function (o) {
      for (
        var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), n = 1;
        n < a;
        n++
      )
        c[n - 1] = arguments[n];
      let i = e(o, ...c),
        [{ suggest: l = ge().throwSuggestions } = {}] = c.slice(-1);
      if (i && l) {
        let s = un(i, r);
        if (s && !t.endsWith(s.queryName)) throw Zu(s.toString(), o);
      }
      return i;
    },
  Ge = (e, t, r) =>
    function (o) {
      for (
        var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), n = 1;
        n < a;
        n++
      )
        c[n - 1] = arguments[n];
      let i = e(o, ...c),
        [{ suggest: l = ge().throwSuggestions } = {}] = c.slice(-1);
      if (i.length && l) {
        let s = [
          ...new Set(
            i.map((u) => {
              var f;
              return (f = un(u, r)) == null ? void 0 : f.toString();
            })
          ),
        ];
        if (s.length === 1 && !t.endsWith(un(i[0], r).queryName))
          throw Zu(s[0], o);
      }
      return i;
    };
function Et(e, t, r) {
  let o = qt(ir(e, t), e.name, 'query'),
    a = ga(e, r),
    c = ir(a, t),
    n = qt(c, e.name, 'get'),
    i = Ge(a, e.name.replace('query', 'get'), 'getAll'),
    l = lr(Ge(a, e.name, 'findAll')),
    s = lr(qt(c, e.name, 'find'));
  return [o, i, n, l, s];
}
var ww = Object.freeze({
  __proto__: null,
  getElementError: Nn,
  wrapAllByQueryWithSuggestion: Ge,
  wrapSingleQueryWithSuggestion: qt,
  getMultipleElementsFoundError: Bn,
  queryAllByAttribute: Gt,
  queryByAttribute: Qu,
  makeSingleQuery: ir,
  makeGetAllQuery: ga,
  makeFindQuery: lr,
  buildQueries: Et,
});
function Sw(e) {
  return Array.from(e.querySelectorAll('label,input'))
    .map((t) => ({ node: t, textToMatch: _o(t) }))
    .filter((t) => {
      let { textToMatch: r } = t;
      return r !== null;
    });
}
var Cw = function (e, t, r) {
    let {
        exact: o = !0,
        trim: a,
        collapseWhitespace: c,
        normalizer: n,
      } = r === void 0 ? {} : r,
      i = o ? bt : yr,
      l = Wt({ collapseWhitespace: c, trim: a, normalizer: n });
    return Sw(e)
      .filter((s) => {
        let { node: u, textToMatch: f } = s;
        return i(f, u, t, l);
      })
      .map((s) => {
        let { node: u } = s;
        return u;
      });
  },
  jr = function (e, t, r) {
    let {
      selector: o = '*',
      exact: a = !0,
      collapseWhitespace: c,
      trim: n,
      normalizer: i,
    } = r === void 0 ? {} : r;
    _t(e);
    let l = a ? bt : yr,
      s = Wt({ collapseWhitespace: c, trim: n, normalizer: i }),
      u = Array.from(e.querySelectorAll('*'))
        .filter((f) => Vu(f).length || f.hasAttribute('aria-labelledby'))
        .reduce((f, d) => {
          let p = Wu(e, d, { selector: o });
          p.filter((y) => !!y.formControl).forEach((y) => {
            l(y.content, y.formControl, t, s) &&
              y.formControl &&
              f.push(y.formControl);
          });
          let m = p.filter((y) => !!y.content).map((y) => y.content);
          return (
            l(m.join(' '), d, t, s) && f.push(d),
            m.length > 1 &&
              m.forEach((y, g) => {
                l(y, d, t, s) && f.push(d);
                let h = [...m];
                h.splice(g, 1),
                  h.length > 1 && l(h.join(' '), d, t, s) && f.push(d);
              }),
            f
          );
        }, [])
        .concat(Gt('aria-label', e, t, { exact: a, normalizer: s }));
    return Array.from(new Set(u)).filter((f) => f.matches(o));
  },
  Bt = function (e, t) {
    for (
      var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2;
      a < r;
      a++
    )
      o[a - 2] = arguments[a];
    let c = jr(e, t, ...o);
    if (!c.length) {
      let n = Cw(e, t, ...o);
      if (n.length) {
        let i = n.map((l) => Ow(e, l)).filter((l) => !!l);
        throw i.length
          ? ge().getElementError(
              i.map(
                (l) =>
                  'Found a label with the text of: ' +
                  t +
                  ', however the element associated with this label (<' +
                  l +
                  ' />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <' +
                  l +
                  ' />, you can use aria-label or aria-labelledby instead.'
              ).join(`

`),
              e
            )
          : ge().getElementError(
              'Found a label with the text of: ' +
                t +
                `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`,
              e
            );
      } else
        throw ge().getElementError(
          'Unable to find a label with the text of: ' + t,
          e
        );
    }
    return c;
  };
function Ow(e, t) {
  let r = t.getAttribute('for');
  if (!r) return null;
  let o = e.querySelector('[id="' + r + '"]');
  return o ? o.tagName.toLowerCase() : null;
}
var ec = (e, t) => 'Found multiple elements with the text of: ' + t,
  tc = qt(ir(jr, ec), jr.name, 'query'),
  rc = ir(Bt, ec),
  nc = lr(Ge(Bt, Bt.name, 'findAll')),
  oc = lr(qt(rc, Bt.name, 'find')),
  ac = Ge(Bt, Bt.name, 'getAll'),
  ic = qt(rc, Bt.name, 'get'),
  lc = Ge(jr, jr.name, 'queryAll'),
  Eo = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return _t(t[0]), Gt('placeholder', ...t);
  },
  Pw = (e, t) => 'Found multiple elements with the placeholder text of: ' + t,
  Rw = (e, t) => 'Unable to find an element with the placeholder text of: ' + t,
  sc = Ge(Eo, Eo.name, 'queryAll'),
  [uc, cc, dc, fc, pc] = Et(Eo, Pw, Rw),
  wo = function (e, t, r) {
    let {
      selector: o = '*',
      exact: a = !0,
      collapseWhitespace: c,
      trim: n,
      ignore: i = ge().defaultIgnore,
      normalizer: l,
    } = r === void 0 ? {} : r;
    _t(e);
    let s = a ? bt : yr,
      u = Wt({ collapseWhitespace: c, trim: n, normalizer: l }),
      f = [];
    return (
      typeof e.matches == 'function' && e.matches(o) && (f = [e]),
      [...f, ...Array.from(e.querySelectorAll(o))]
        .filter((d) => !i || !d.matches(i))
        .filter((d) => s(Ur(d), d, t, u))
    );
  },
  Tw = (e, t) => 'Found multiple elements with the text: ' + t,
  Aw = function (e, t, r) {
    r === void 0 && (r = {});
    let { collapseWhitespace: o, trim: a, normalizer: c, selector: n } = r,
      i = Wt({ collapseWhitespace: o, trim: a, normalizer: c })(t.toString()),
      l = i !== t.toString(),
      s = (n ?? '*') !== '*';
    return (
      'Unable to find an element with the text: ' +
      (l ? i + " (normalized from '" + t + "')" : t) +
      (s ? ", which matches selector '" + n + "'" : '') +
      '. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.'
    );
  },
  mc = Ge(wo, wo.name, 'queryAll'),
  [yc, hc, bc, gc, vc] = Et(wo, Tw, Aw),
  So = function (e, t, r) {
    let {
      exact: o = !0,
      collapseWhitespace: a,
      trim: c,
      normalizer: n,
    } = r === void 0 ? {} : r;
    _t(e);
    let i = o ? bt : yr,
      l = Wt({ collapseWhitespace: a, trim: c, normalizer: n });
    return Array.from(e.querySelectorAll('input,textarea,select')).filter(
      (s) =>
        s.tagName === 'SELECT'
          ? Array.from(s.options)
              .filter((u) => u.selected)
              .some((u) => i(Ur(u), u, t, l))
          : i(s.value, s, t, l)
    );
  },
  qw = (e, t) => 'Found multiple elements with the display value: ' + t + '.',
  xw = (e, t) => 'Unable to find an element with the display value: ' + t + '.',
  _c = Ge(So, So.name, 'queryAll'),
  [Ec, wc, Sc, Cc, Oc] = Et(So, qw, xw),
  Mw = /^(img|input|area|.+-.+)$/i,
  Co = function (e, t, r) {
    return (
      r === void 0 && (r = {}),
      _t(e),
      Gt('alt', e, t, r).filter((o) => Mw.test(o.tagName))
    );
  },
  jw = (e, t) => 'Found multiple elements with the alt text: ' + t,
  Iw = (e, t) => 'Unable to find an element with the alt text: ' + t,
  Pc = Ge(Co, Co.name, 'queryAll'),
  [Rc, Tc, Ac, qc, xc] = Et(Co, jw, Iw),
  Nw = (e) => {
    var t;
    return (
      e.tagName.toLowerCase() === 'title' &&
      ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) ===
        'svg'
    );
  },
  Oo = function (e, t, r) {
    let {
      exact: o = !0,
      collapseWhitespace: a,
      trim: c,
      normalizer: n,
    } = r === void 0 ? {} : r;
    _t(e);
    let i = o ? bt : yr,
      l = Wt({ collapseWhitespace: a, trim: c, normalizer: n });
    return Array.from(e.querySelectorAll('[title], svg > title')).filter(
      (s) => i(s.getAttribute('title'), s, t, l) || (Nw(s) && i(Ur(s), s, t, l))
    );
  },
  Bw = (e, t) => 'Found multiple elements with the title: ' + t + '.',
  $w = (e, t) => 'Unable to find an element with the title: ' + t + '.',
  Mc = Ge(Oo, Oo.name, 'queryAll'),
  [jc, Ic, Nc, Bc, $c] = Et(Oo, Bw, $w),
  Po = function (e, t, r) {
    let {
      hidden: o = ge().defaultHidden,
      name: a,
      description: c,
      queryFallbacks: n = !1,
      selected: i,
      busy: l,
      checked: s,
      pressed: u,
      current: f,
      level: d,
      expanded: p,
      value: { now: m, min: y, max: g, text: h } = {},
    } = r === void 0 ? {} : r;
    if ((_t(e), i !== void 0)) {
      var v;
      if (
        ((v = Ze.roles.get(t)) == null ? void 0 : v.props['aria-selected']) ===
        void 0
      )
        throw new Error(
          '"aria-selected" is not supported on role "' + t + '".'
        );
    }
    if (l !== void 0) {
      var S;
      if (
        ((S = Ze.roles.get(t)) == null ? void 0 : S.props['aria-busy']) ===
        void 0
      )
        throw new Error('"aria-busy" is not supported on role "' + t + '".');
    }
    if (s !== void 0) {
      var E;
      if (
        ((E = Ze.roles.get(t)) == null ? void 0 : E.props['aria-checked']) ===
        void 0
      )
        throw new Error('"aria-checked" is not supported on role "' + t + '".');
    }
    if (u !== void 0) {
      var C;
      if (
        ((C = Ze.roles.get(t)) == null ? void 0 : C.props['aria-pressed']) ===
        void 0
      )
        throw new Error('"aria-pressed" is not supported on role "' + t + '".');
    }
    if (f !== void 0) {
      var A;
      if (
        ((A = Ze.roles.get(t)) == null ? void 0 : A.props['aria-current']) ===
        void 0
      )
        throw new Error('"aria-current" is not supported on role "' + t + '".');
    }
    if (d !== void 0 && t !== 'heading')
      throw new Error('Role "' + t + '" cannot have "level" property.');
    if (m !== void 0) {
      var R;
      if (
        ((R = Ze.roles.get(t)) == null ? void 0 : R.props['aria-valuenow']) ===
        void 0
      )
        throw new Error(
          '"aria-valuenow" is not supported on role "' + t + '".'
        );
    }
    if (g !== void 0) {
      var _;
      if (
        ((_ = Ze.roles.get(t)) == null ? void 0 : _.props['aria-valuemax']) ===
        void 0
      )
        throw new Error(
          '"aria-valuemax" is not supported on role "' + t + '".'
        );
    }
    if (y !== void 0) {
      var O;
      if (
        ((O = Ze.roles.get(t)) == null ? void 0 : O.props['aria-valuemin']) ===
        void 0
      )
        throw new Error(
          '"aria-valuemin" is not supported on role "' + t + '".'
        );
    }
    if (h !== void 0) {
      var x;
      if (
        ((x = Ze.roles.get(t)) == null ? void 0 : x.props['aria-valuetext']) ===
        void 0
      )
        throw new Error(
          '"aria-valuetext" is not supported on role "' + t + '".'
        );
    }
    if (p !== void 0) {
      var I;
      if (
        ((I = Ze.roles.get(t)) == null ? void 0 : I.props['aria-expanded']) ===
        void 0
      )
        throw new Error(
          '"aria-expanded" is not supported on role "' + t + '".'
        );
    }
    let H = new WeakMap();
    function V(L) {
      return H.has(L) || H.set(L, Yu(L)), H.get(L);
    }
    return Array.from(e.querySelectorAll(Dw(t)))
      .filter((L) => {
        if (L.hasAttribute('role')) {
          let re = L.getAttribute('role');
          if (n)
            return re
              .split(' ')
              .filter(Boolean)
              .some((oe) => oe === t);
          let [G] = re.split(' ');
          return G === t;
        }
        return ha(L).some((re) => re === t);
      })
      .filter((L) => {
        if (i !== void 0) return i === uw(L);
        if (l !== void 0) return l === cw(L);
        if (s !== void 0) return s === dw(L);
        if (u !== void 0) return u === fw(L);
        if (f !== void 0) return f === pw(L);
        if (p !== void 0) return p === mw(L);
        if (d !== void 0) return d === yw(L);
        if (m !== void 0 || g !== void 0 || y !== void 0 || h !== void 0) {
          let G = !0;
          if (
            (m !== void 0 && G && (G = m === hw(L)),
            g !== void 0 && G && (G = g === bw(L)),
            y !== void 0 && G && (G = y === gw(L)),
            h !== void 0)
          ) {
            var re;
            G && (G = bt((re = vw(L)) != null ? re : null, L, h, (oe) => oe));
          }
          return G;
        }
        return !0;
      })
      .filter((L) =>
        a === void 0
          ? !0
          : bt(
              xn(L, {
                computedStyleSupportsPseudoElements:
                  ge().computedStyleSupportsPseudoElements,
              }),
              L,
              a,
              (re) => re
            )
      )
      .filter((L) =>
        c === void 0
          ? !0
          : bt(
              ua(L, {
                computedStyleSupportsPseudoElements:
                  ge().computedStyleSupportsPseudoElements,
              }),
              L,
              c,
              (re) => re
            )
      )
      .filter((L) =>
        o === !1 ? In(L, { isSubtreeInaccessible: V }) === !1 : !0
      );
  };
function Dw(e) {
  var t;
  let r = '*[role~="' + e + '"]',
    o = (t = Ze.roleElements.get(e)) != null ? t : new Set(),
    a = new Set(
      Array.from(o).map((c) => {
        let { name: n } = c;
        return n;
      })
    );
  return [r].concat(Array.from(a)).join(',');
}
var Dc = (e) => {
    let t = '';
    return (
      e === void 0
        ? (t = '')
        : typeof e == 'string'
          ? (t = ' and name "' + e + '"')
          : (t = ' and name `' + e + '`'),
      t
    );
  },
  kw = function (e, t, r) {
    let { name: o } = r === void 0 ? {} : r;
    return 'Found multiple elements with the role "' + t + '"' + Dc(o);
  },
  Lw = function (e, t, r) {
    let {
      hidden: o = ge().defaultHidden,
      name: a,
      description: c,
    } = r === void 0 ? {} : r;
    if (ge()._disableExpensiveErrorDiagnostics)
      return 'Unable to find role="' + t + '"' + Dc(a);
    let n = '';
    Array.from(e.children).forEach((u) => {
      n += Xu(u, { hidden: o, includeDescription: c !== void 0 });
    });
    let i;
    n.length === 0
      ? o === !1
        ? (i =
            'There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole')
        : (i = 'There are no available roles.')
      : (i = (
          `
Here are the ` +
          (o === !1 ? 'accessible' : 'available') +
          ` roles:

  ` +
          n
            .replace(
              /\n/g,
              `
  `
            )
            .replace(
              /\n\s\s\n/g,
              `

`
            ) +
          `
`
        ).trim());
    let l = '';
    a === void 0
      ? (l = '')
      : typeof a == 'string'
        ? (l = ' and name "' + a + '"')
        : (l = ' and name `' + a + '`');
    let s = '';
    return (
      c === void 0
        ? (s = '')
        : typeof c == 'string'
          ? (s = ' and description "' + c + '"')
          : (s = ' and description `' + c + '`'),
      (
        `
Unable to find an ` +
        (o === !1 ? 'accessible ' : '') +
        'element with the role "' +
        t +
        '"' +
        l +
        s +
        `

` +
        i
      ).trim()
    );
  },
  kc = Ge(Po, Po.name, 'queryAll'),
  [Lc, Fc, Uc, Hc, zc] = Et(Po, kw, Lw),
  va = () => ge().testIdAttribute,
  Ro = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return _t(t[0]), Gt(va(), ...t);
  },
  Fw = (e, t) => 'Found multiple elements by: [' + va() + '="' + t + '"]',
  Uw = (e, t) => 'Unable to find an element by: [' + va() + '="' + t + '"]',
  Vc = Ge(Ro, Ro.name, 'queryAll'),
  [Wc, Gc, Kc, Yc, Jc] = Et(Ro, Fw, Uw),
  cn = Object.freeze({
    __proto__: null,
    queryAllByLabelText: lc,
    queryByLabelText: tc,
    getAllByLabelText: ac,
    getByLabelText: ic,
    findAllByLabelText: nc,
    findByLabelText: oc,
    queryByPlaceholderText: uc,
    queryAllByPlaceholderText: sc,
    getByPlaceholderText: dc,
    getAllByPlaceholderText: cc,
    findAllByPlaceholderText: fc,
    findByPlaceholderText: pc,
    queryByText: yc,
    queryAllByText: mc,
    getByText: bc,
    getAllByText: hc,
    findAllByText: gc,
    findByText: vc,
    queryByDisplayValue: Ec,
    queryAllByDisplayValue: _c,
    getByDisplayValue: Sc,
    getAllByDisplayValue: wc,
    findAllByDisplayValue: Cc,
    findByDisplayValue: Oc,
    queryByAltText: Rc,
    queryAllByAltText: Pc,
    getByAltText: Ac,
    getAllByAltText: Tc,
    findAllByAltText: qc,
    findByAltText: xc,
    queryByTitle: jc,
    queryAllByTitle: Mc,
    getByTitle: Nc,
    getAllByTitle: Ic,
    findAllByTitle: Bc,
    findByTitle: $c,
    queryByRole: Lc,
    queryAllByRole: kc,
    getAllByRole: Fc,
    getByRole: Uc,
    findAllByRole: Hc,
    findByRole: zc,
    queryByTestId: Wc,
    queryAllByTestId: Vc,
    getByTestId: Kc,
    getAllByTestId: Gc,
    findAllByTestId: Yc,
    findByTestId: Jc,
  });
function To(e, t, r) {
  return (
    t === void 0 && (t = cn),
    r === void 0 && (r = {}),
    Object.keys(t).reduce((o, a) => {
      let c = t[a];
      return (o[a] = c.bind(null, e)), o;
    }, r)
  );
}
var Xc = (e) => !e || (Array.isArray(e) && !e.length);
function $i(e) {
  if (Xc(e))
    throw new Error(
      'The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.'
    );
}
async function Hw(e, t) {
  let r = new Error('Timed out in waitForElementToBeRemoved.');
  if (typeof e != 'function') {
    $i(e);
    let o = (Array.isArray(e) ? e : [e]).map((a) => {
      let c = a.parentElement;
      if (c === null) return () => null;
      for (; c.parentElement; ) c = c.parentElement;
      return () => (c.contains(a) ? a : null);
    });
    e = () => o.map((a) => a()).filter(Boolean);
  }
  return (
    $i(e()),
    ba(() => {
      let o;
      try {
        o = e();
      } catch (a) {
        if (a.name === 'TestingLibraryElementError') return;
        throw a;
      }
      if (!Xc(o)) throw r;
    }, t)
  );
}
var Di = {
    copy: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    cut: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    paste: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionEnd: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionStart: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionUpdate: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    keyDown: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    keyPress: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    keyUp: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    focus: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    blur: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    focusIn: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    focusOut: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    change: {
      EventType: 'Event',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    input: {
      EventType: 'InputEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    invalid: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !0 },
    },
    submit: {
      EventType: 'Event',
      defaultInit: { bubbles: !0, cancelable: !0 },
    },
    reset: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
    click: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 },
    },
    contextMenu: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dblClick: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    drag: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragEnd: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragEnter: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragExit: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragLeave: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragOver: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragStart: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    drop: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseDown: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseEnter: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    mouseLeave: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    mouseMove: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseOut: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseOver: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseUp: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    select: {
      EventType: 'Event',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    touchCancel: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    touchEnd: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    touchMove: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    touchStart: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    resize: {
      EventType: 'UIEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    scroll: {
      EventType: 'UIEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    wheel: {
      EventType: 'WheelEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    abort: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    canPlay: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    canPlayThrough: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    durationChange: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    emptied: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    encrypted: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    ended: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    loadedData: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    loadedMetadata: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    loadStart: {
      EventType: 'ProgressEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    pause: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    play: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    playing: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    progress: {
      EventType: 'ProgressEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    rateChange: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    seeked: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    seeking: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    stalled: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    suspend: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    timeUpdate: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    volumeChange: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    waiting: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    load: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    error: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    animationStart: {
      EventType: 'AnimationEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    animationEnd: {
      EventType: 'AnimationEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    animationIteration: {
      EventType: 'AnimationEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionCancel: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionEnd: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !0 },
    },
    transitionRun: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionStart: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    pointerOver: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerEnter: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    pointerDown: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerMove: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerUp: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerCancel: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    pointerOut: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerLeave: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    gotPointerCapture: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    lostPointerCapture: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    popState: {
      EventType: 'PopStateEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    offline: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
    online: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 },
    },
  },
  ki = { doubleClick: 'dblClick' };
function Ir(e, t) {
  return ge().eventWrapper(() => {
    if (!t)
      throw new Error(
        'Unable to fire an event - please provide an event object.'
      );
    if (!e)
      throw new Error(
        'Unable to fire a "' +
          t.type +
          '" event - please provide a DOM element.'
      );
    return e.dispatchEvent(t);
  });
}
function Pr(e, t, r, o) {
  let { EventType: a = 'Event', defaultInit: c = {} } = o === void 0 ? {} : o;
  if (!t)
    throw new Error(
      'Unable to fire a "' + e + '" event - please provide a DOM element.'
    );
  let n = { ...c, ...r },
    { target: { value: i, files: l, ...s } = {} } = n;
  i !== void 0 && zw(t, i),
    l !== void 0 &&
      Object.defineProperty(t, 'files', {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: l,
      }),
    Object.assign(t, s);
  let u = Hu(t),
    f = u[a] || u.Event,
    d;
  if (typeof f == 'function') d = new f(e, n);
  else {
    d = u.document.createEvent(a);
    let { bubbles: p, cancelable: m, detail: y, ...g } = n;
    d.initEvent(e, p, m, y),
      Object.keys(g).forEach((h) => {
        d[h] = g[h];
      });
  }
  return (
    ['dataTransfer', 'clipboardData'].forEach((p) => {
      let m = n[p];
      typeof m == 'object' &&
        (typeof u.DataTransfer == 'function'
          ? Object.defineProperty(d, p, {
              value: Object.getOwnPropertyNames(m).reduce(
                (y, g) => (Object.defineProperty(y, g, { value: m[g] }), y),
                new u.DataTransfer()
              ),
            })
          : Object.defineProperty(d, p, { value: m }));
    }),
    d
  );
}
Object.keys(Di).forEach((e) => {
  let { EventType: t, defaultInit: r } = Di[e],
    o = e.toLowerCase();
  (Pr[e] = (a, c) => Pr(o, a, c, { EventType: t, defaultInit: r })),
    (Ir[e] = (a, c) => Ir(a, Pr[e](a, c)));
});
function zw(e, t) {
  let { set: r } = Object.getOwnPropertyDescriptor(e, 'value') || {},
    o = Object.getPrototypeOf(e),
    { set: a } = Object.getOwnPropertyDescriptor(o, 'value') || {};
  if (a && r !== a) a.call(e, t);
  else if (r) r.call(e, t);
  else throw new Error('The given element does not have a value setter');
}
Object.keys(ki).forEach((e) => {
  let t = ki[e];
  Ir[e] = function () {
    return Ir[t](...arguments);
  };
});
function Vw(e) {
  return e.replace(
    /[ \t]*[\n][ \t]*/g,
    `
`
  );
}
function Ww(e) {
  return BE.default.compressToEncodedURIComponent(Vw(e));
}
function Gw(e) {
  return 'https://testing-playground.com/#markup=' + Ww(e);
}
var Kw = (e, t, r) =>
    Array.isArray(e) ? e.forEach((o) => vo(o, t, r)) : vo(e, t, r),
  Yw = function (e) {
    if ((e === void 0 && (e = ma().body), !e || !('innerHTML' in e))) {
      console.log("The element you're providing isn't a valid DOM element.");
      return;
    }
    if (!e.innerHTML) {
      console.log("The provided element doesn't have any children.");
      return;
    }
    let t = Gw(e.innerHTML);
    return (
      console.log(
        `Open this URL in your browser

` + t
      ),
      t
    );
  },
  Li = { debug: Kw, logTestingPlaygroundURL: Yw },
  Jw =
    typeof document < 'u' && document.body
      ? To(document.body, cn, Li)
      : Object.keys(cn).reduce(
          (e, t) => (
            (e[t] = () => {
              throw new TypeError(
                'For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error'
              );
            }),
            e
          ),
          Li
        ),
  Xw = _e(Gg(), 1),
  Qw = _e(_s(), 1),
  Qc = _e(_s(), 1),
  Zc = Object.defineProperty,
  Zw = Object.defineProperties,
  e0 = Object.getOwnPropertyDescriptors,
  Fi = Object.getOwnPropertySymbols,
  t0 = Object.prototype.hasOwnProperty,
  r0 = Object.prototype.propertyIsEnumerable,
  n0 = Math.pow,
  Ui = (e, t, r) =>
    t in e
      ? Zc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  he = (e, t) => {
    for (var r in t || (t = {})) t0.call(t, r) && Ui(e, r, t[r]);
    if (Fi) for (var r of Fi(t)) r0.call(t, r) && Ui(e, r, t[r]);
    return e;
  },
  Ne = (e, t) => Zw(e, e0(t)),
  ed = (e, t) => {
    for (var r in t) Zc(e, r, { get: t[r], enumerable: !0 });
  },
  be = (e, t, r) =>
    new Promise((o, a) => {
      var c = (l) => {
          try {
            i(r.next(l));
          } catch (s) {
            a(s);
          }
        },
        n = (l) => {
          try {
            i(r.throw(l));
          } catch (s) {
            a(s);
          }
        },
        i = (l) => (l.done ? o(l.value) : Promise.resolve(l.value).then(c, n));
      i((r = r.apply(e, t)).next());
    });
function pe(e, t, r) {
  return (e.namespaceURI &&
    e.namespaceURI !== 'http://www.w3.org/1999/xhtml') ||
    ((t = Array.isArray(t) ? t : [t]), !t.includes(e.tagName.toLowerCase()))
    ? !1
    : r
      ? Object.entries(r).every(([o, a]) => e[o] === a)
      : !0;
}
var o0 = [
  'button',
  'color',
  'file',
  'image',
  'reset',
  'submit',
  'checkbox',
  'radio',
];
function a0(e) {
  return pe(e, 'button') || (pe(e, 'input') && o0.includes(e.type));
}
function td(e, t) {
  return new Promise((r, o) => {
    let a = new t();
    (a.onerror = o),
      (a.onabort = o),
      (a.onload = () => {
        r(String(a.result));
      }),
      a.readAsText(e);
  });
}
function _a(e, t) {
  let r = Ne(he({}, t), {
    length: t.length,
    item: (o) => r[o],
    [Symbol.iterator]: function* () {
      for (let o = 0; o < r.length; o++) yield r[o];
    },
  });
  return (
    (r.constructor = e.FileList),
    Object.setPrototypeOf(r, e.FileList.prototype),
    Object.freeze(r),
    r
  );
}
var rd = class {
    constructor(e, t) {
      (this.file = null),
        (this.data = void 0),
        typeof e == 'string'
          ? ((this.kind = 'string'), (this.type = String(t)), (this.data = e))
          : ((this.kind = 'file'), (this.type = e.type), (this.file = e));
    }
    getAsFile() {
      return this.file;
    }
    getAsString(e) {
      typeof this.data == 'string' && e(this.data);
    }
    webkitGetAsEntry() {
      throw new Error('not implemented');
    }
  },
  i0 = class extends Array {
    add(...e) {
      let t = new rd(e[0], e[1]);
      return this.push(t), t;
    }
    clear() {
      this.splice(0, this.length);
    }
    remove(e) {
      this.splice(e, 1);
    }
  };
function Kr(e, t) {
  let [r, o] = e.split('/'),
    a = !o || o === '*';
  return (c) =>
    t ? c.type === (a ? r : e) : a ? c.type.startsWith(`${r}/`) : c.type === r;
}
function l0(e) {
  return new (class {
    constructor() {
      (this.dropEffect = 'none'),
        (this.effectAllowed = 'uninitialized'),
        (this.items = new i0()),
        (this.files = _a(e, []));
    }
    getData(t) {
      var r;
      let o =
          (r = this.items.find(Kr(t, !0))) != null
            ? r
            : this.items.find(Kr(t, !1)),
        a = '';
      return (
        o == null ||
          o.getAsString((c) => {
            a = c;
          }),
        a
      );
    }
    setData(t, r) {
      let o = this.items.findIndex(Kr(t, !0)),
        a = new rd(r, t);
      o >= 0 ? this.items.splice(o, 1, a) : this.items.push(a);
    }
    clearData(t) {
      if (t) {
        let r = this.items.findIndex(Kr(t, !0));
        r >= 0 && this.items.remove(r);
      } else this.items.clear();
    }
    get types() {
      let t = [];
      return (
        this.files.length && t.push('Files'),
        this.items.forEach((r) => t.push(r.type)),
        Object.freeze(t),
        t
      );
    }
    setDragImage() {}
  })();
}
function Ea(e, t = []) {
  let r = typeof e.DataTransfer > 'u' ? l0(e) : new e.DataTransfer();
  return Object.defineProperty(r, 'files', { get: () => _a(e, t) }), r;
}
function s0(e, t) {
  if (t.kind === 'file') return t.getAsFile();
  let r = '';
  return (
    t.getAsString((o) => {
      r = o;
    }),
    new e.Blob([r], { type: t.type })
  );
}
function wt(e) {
  return (0, Xw.getWindowFromNode)(e);
}
function nd(e, ...t) {
  let r = Object.fromEntries(
    t.map((o) => [
      typeof o == 'string' ? 'text/plain' : o.type,
      Promise.resolve(o),
    ])
  );
  return typeof e.ClipboardItem < 'u'
    ? new e.ClipboardItem(r)
    : new (class {
        constructor(o) {
          this.data = o;
        }
        get types() {
          return Array.from(Object.keys(this.data));
        }
        getType(o) {
          return be(this, null, function* () {
            let a = yield this.data[o];
            if (!a)
              throw new Error(
                `${o} is not one of the available MIME types on this item.`
              );
            return a instanceof e.Blob ? a : new e.Blob([a], { type: o });
          });
        }
      })(r);
}
var sr = Symbol('Manage ClipboardSub');
function Hi(e, t) {
  return Object.assign(
    new (class extends e.EventTarget {
      constructor() {
        super(...arguments), (this.items = []);
      }
      read() {
        return be(this, null, function* () {
          return Array.from(this.items);
        });
      }
      readText() {
        return be(this, null, function* () {
          let r = '';
          for (let o of this.items) {
            let a = o.types.includes('text/plain')
              ? 'text/plain'
              : o.types.find((c) => c.startsWith('text/'));
            a && (r += yield o.getType(a).then((c) => td(c, e.FileReader)));
          }
          return r;
        });
      }
      write(r) {
        return be(this, null, function* () {
          this.items = r;
        });
      }
      writeText(r) {
        return be(this, null, function* () {
          this.items = [nd(e, r)];
        });
      }
    })(),
    { [sr]: t }
  );
}
function wa(e) {
  return !!(e != null && e[sr]);
}
function u0(e) {
  if (wa(e.navigator.clipboard)) return e.navigator.clipboard[sr];
  let t = Object.getOwnPropertyDescriptor(e.navigator, 'clipboard'),
    r,
    o = {
      resetClipboardStub: () => {
        r = Hi(e, o);
      },
      detachClipboardStub: () => {
        t
          ? Object.defineProperty(e.navigator, 'clipboard', t)
          : Object.defineProperty(e.navigator, 'clipboard', {
              value: void 0,
              configurable: !0,
            });
      },
    };
  return (
    (r = Hi(e, o)),
    Object.defineProperty(e.navigator, 'clipboard', {
      get: () => r,
      configurable: !0,
    }),
    r[sr]
  );
}
function c0(e) {
  wa(e.navigator.clipboard) && e.navigator.clipboard[sr].resetClipboardStub();
}
function d0(e) {
  wa(e.navigator.clipboard) && e.navigator.clipboard[sr].detachClipboardStub();
}
function f0(e) {
  return be(this, null, function* () {
    let t = e.defaultView,
      r = t == null ? void 0 : t.navigator.clipboard,
      o = r && (yield r.read());
    if (!o) throw new Error('The Clipboard API is unavailable.');
    let a = Ea(t);
    for (let c of o)
      for (let n of c.types)
        a.setData(n, yield c.getType(n).then((i) => td(i, t.FileReader)));
    return a;
  });
}
function od(e, t) {
  return be(this, null, function* () {
    let r = wt(e),
      o = r.navigator.clipboard,
      a = [];
    for (let c = 0; c < t.items.length; c++) {
      let n = t.items[c],
        i = s0(r, n);
      a.push(nd(r, i));
    }
    if (
      !(
        o &&
        (yield o.write(a).then(
          () => !0,
          () => !1
        ))
      )
    )
      throw new Error('The Clipboard API is unavailable.');
  });
}
typeof globalThis.afterEach == 'function' &&
  globalThis.afterEach(() => c0(globalThis.window));
typeof globalThis.afterAll == 'function' &&
  globalThis.afterAll(() => d0(globalThis.window));
function $t(e) {
  return (
    e.hasAttribute('contenteditable') &&
    (e.getAttribute('contenteditable') == 'true' ||
      e.getAttribute('contenteditable') == '')
  );
}
function Nr(e) {
  let t = p0(e);
  return (
    t &&
    (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'))
  );
}
function p0(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function Ao(e) {
  return e ? ($t(e) ? e.textContent : St(e)) : null;
}
var dn = globalThis.parseInt;
function m0(e) {
  let t = e.replace(/\D/g, '');
  if (t.length < 2) return e;
  let r = dn(t[0], 10),
    o = dn(t[1], 10);
  if (r >= 3 || (r === 2 && o >= 4)) {
    let a;
    return r >= 3 ? (a = 1) : (a = 2), zi(t, a);
  }
  return e.length === 2 ? e : zi(t, 2);
}
function zi(e, t) {
  let r = e.slice(0, t),
    o = Math.min(dn(r, 10), 23),
    a = e.slice(t),
    c = dn(a, 10),
    n = Math.min(c, 59);
  return `${o.toString().padStart(2, '0')}:${n.toString().padStart(2, '0')}`;
}
function ad(e, t) {
  let r = e.cloneNode();
  return (r.value = t), r.value === t;
}
var id = ((e) => (
  (e.email = 'email'),
  (e.password = 'password'),
  (e.search = 'search'),
  (e.telephone = 'telephone'),
  (e.text = 'text'),
  (e.url = 'url'),
  e
))(id || {});
function y0(e) {
  let t = Ao(e);
  if (t === null) return;
  let r = h0(e);
  return r ? r - t.length : void 0;
}
function h0(e) {
  var t;
  if (!b0(e)) return;
  let r = (t = e.getAttribute('maxlength')) != null ? t : '';
  return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function b0(e) {
  return pe(e, 'textarea') || (pe(e, 'input') && !!id[e.type]);
}
function ld(e) {
  return pe(e, 'input') && ['date', 'time'].includes(e.type);
}
function ur(e, t, r, o = 'insertText') {
  let a = x0(t);
  a &&
    ((!ld(t) && !Be(e, t, 'beforeinput', { inputType: o, data: r })) ||
      ('startContainer' in a ? g0(e, t, a, r, o) : v0(e, t, a, r, o)));
}
function g0(e, t, r, o, a) {
  let c = !1;
  if (!r.collapsed) (c = !0), r.deleteContents();
  else if (['deleteContentBackward', 'deleteContentForward'].includes(a)) {
    let n = cd(
      r.startContainer,
      r.startOffset,
      a === 'deleteContentBackward' ? -1 : 1,
      a
    );
    if (n) {
      c = !0;
      let i = r.cloneRange();
      i.comparePoint(n.node, n.offset) < 0
        ? i.setStart(n.node, n.offset)
        : i.setEnd(n.node, n.offset),
        i.deleteContents();
    }
  }
  if (o)
    if (r.endContainer.nodeType === 3) {
      let n = r.endOffset;
      r.endContainer.insertData(n, o),
        r.setStart(r.endContainer, n + o.length),
        r.setEnd(r.endContainer, n + o.length);
    } else {
      let n = t.ownerDocument.createTextNode(o);
      r.insertNode(n), r.setStart(n, o.length), r.setEnd(n, o.length);
    }
  (c || o) && Be(e, t, 'input', { inputType: a });
}
function v0(e, t, r, o, a) {
  let c = o,
    n = y0(t);
  if (n !== void 0 && o.length > 0)
    if (n > 0) c = o.substring(0, n);
    else return;
  let { newValue: i, newOffset: l, oldValue: s } = _0(c, t, r, a);
  (i === s && l === r.startOffset && l === r.endOffset) ||
    (pe(t, 'input', { type: 'number' }) && !E0(i)) ||
    (m1(t, i),
    Dt({ focusNode: t, anchorOffset: l, focusOffset: l }),
    ld(t)
      ? ad(t, i) && (Vi(e, t, l, {}), Be(e, t, 'change'), Od(t))
      : Vi(e, t, l, { data: o, inputType: a }));
}
function _0(e, t, { startOffset: r, endOffset: o }, a) {
  let c = St(t),
    n = Math.max(0, r === o && a === 'deleteContentBackward' ? r - 1 : r),
    i = c.substring(0, n),
    l = Math.min(c.length, r === o && a === 'deleteContentForward' ? r + 1 : o),
    s = c.substring(l, c.length),
    u = `${i}${e}${s}`,
    f = n + e.length;
  if (pe(t, 'input', { type: 'time' })) {
    let d = m0(u);
    d !== '' && ad(t, d) && ((u = d), (f = d.length));
  }
  return { oldValue: c, newValue: u, newOffset: f };
}
function Vi(e, t, r, o) {
  Be(e, t, 'input', o), v1(t, r);
}
function E0(e) {
  var t, r;
  let o = e.split('e', 2);
  return !(
    /[^\d.\-e]/.test(e) ||
    Number((t = e.match(/-/g)) == null ? void 0 : t.length) > 2 ||
    Number((r = e.match(/\./g)) == null ? void 0 : r.length) > 1 ||
    (o[1] && !/^-?\d*$/.test(o[1]))
  );
}
function cr(e) {
  return w0(e) || pe(e, 'textarea', { readOnly: !1 }) || $t(e);
}
var zr = ((e) => (
  (e.text = 'text'),
  (e.date = 'date'),
  (e['datetime-local'] = 'datetime-local'),
  (e.email = 'email'),
  (e.month = 'month'),
  (e.number = 'number'),
  (e.password = 'password'),
  (e.search = 'search'),
  (e.tel = 'tel'),
  (e.time = 'time'),
  (e.url = 'url'),
  (e.week = 'week'),
  e
))(zr || {});
function w0(e) {
  return pe(e, 'input', { readOnly: !1 }) && !!zr[e.type];
}
var Wi = Symbol('files and value properties are mocked');
function S0(e, t) {
  var r;
  (r = e[Wi]) == null || r.restore();
  let o = Object.getOwnPropertyDescriptors(e),
    a = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(e));
  function c() {
    Object.defineProperties(e, {
      files: he(he({}, a.files), o.files),
      value: he(he({}, a.value), o.value),
      type: he(he({}, a.type), o.type),
    });
  }
  (e[Wi] = { restore: c }),
    Object.defineProperties(e, {
      files: Ne(he(he({}, a.files), o.files), { get: () => t }),
      value: Ne(he(he({}, a.value), o.value), {
        get: () => (t.length ? `C:\\fakepath\\${t[0].name}` : ''),
        set(n) {
          var i;
          n === '' ? c() : (i = o.value.set) == null || i.call(e, n);
        },
      }),
      type: Ne(he(he({}, a.type), o.type), {
        set(n) {
          n !== 'file' && (c(), (e.type = n));
        },
      }),
    });
}
function sd(e) {
  let t;
  return (
    ge().eventWrapper(() => {
      t = e();
    }),
    t
  );
}
function C0(e, t) {
  let r = e;
  do {
    if (t(r)) return r;
    r = r.parentElement;
  } while (r && r !== e.ownerDocument.body);
}
function ot(e) {
  var t;
  for (let r = e; r; r = r.parentElement)
    if (
      pe(r, ['button', 'input', 'select', 'textarea', 'optgroup', 'option'])
    ) {
      if (r.hasAttribute('disabled')) return !0;
    } else if (pe(r, 'fieldset')) {
      if (
        r.hasAttribute('disabled') &&
        !((t = r.querySelector(':scope > legend')) != null && t.contains(e))
      )
        return !0;
    } else if (
      r.tagName.includes('-') &&
      r.constructor.formAssociated &&
      r.hasAttribute('disabled')
    )
      return !0;
  return !1;
}
function $n(e) {
  let t = e.activeElement;
  return t != null && t.shadowRoot
    ? $n(t.shadowRoot)
    : ot(t)
      ? e.ownerDocument
        ? e.ownerDocument.body
        : e.body
      : t;
}
var ud = [
  'input:not([type=hidden]):not([disabled])',
  'button:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[contenteditable=""]',
  '[contenteditable="true"]',
  'a[href]',
  '[tabindex]:not([disabled])',
].join(', ');
function Sa(e) {
  return e.matches(ud);
}
function cd(e, t, r, o) {
  if (nn(e) && t + r >= 0 && t + r <= e.nodeValue.length)
    return { node: e, offset: t + r };
  let a = Gi(e, t, r);
  if (a) {
    if (nn(a))
      return {
        node: a,
        offset:
          r > 0
            ? Math.min(1, a.nodeValue.length)
            : Math.max(a.nodeValue.length - 1, 0),
      };
    if (pe(a, 'br')) {
      let c = Gi(a, void 0, r);
      return c
        ? nn(c)
          ? { node: c, offset: r > 0 ? 0 : c.nodeValue.length }
          : r < 0 && pe(c, 'br')
            ? { node: a.parentNode, offset: Yr(a) }
            : { node: c.parentNode, offset: Yr(c) + (r > 0 ? 0 : 1) }
        : r < 0 && o === 'deleteContentBackward'
          ? { node: a.parentNode, offset: Yr(a) }
          : void 0;
    } else return { node: a.parentNode, offset: Yr(a) + (r > 0 ? 1 : 0) };
  }
}
function Gi(e, t, r) {
  let o = Number(t) + (r < 0 ? -1 : 0);
  return (
    t !== void 0 &&
      Ca(e) &&
      o >= 0 &&
      o < e.children.length &&
      (e = e.children[o]),
    P0(e, r === 1 ? 'next' : 'previous', O0)
  );
}
function O0(e) {
  if (nn(e)) return !0;
  if (Ca(e)) {
    if (pe(e, ['input', 'textarea'])) return e.type !== 'hidden';
    if (pe(e, 'br')) return !0;
  }
  return !1;
}
function Yr(e) {
  let t = 0;
  for (; e.previousSibling; ) t++, (e = e.previousSibling);
  return t;
}
function Ca(e) {
  return e.nodeType === 1;
}
function nn(e) {
  return e.nodeType === 3;
}
function P0(e, t, r) {
  for (var o; ; ) {
    let a = e[`${t}Sibling`];
    if (a) {
      if (((e = R0(a, t === 'next' ? 'first' : 'last')), r(e))) return e;
    } else if (
      e.parentNode &&
      (!Ca(e.parentNode) ||
        (!$t(e.parentNode) &&
          e.parentNode !== ((o = e.ownerDocument) == null ? void 0 : o.body)))
    )
      e = e.parentNode;
    else break;
  }
}
function R0(e, t) {
  for (; e.hasChildNodes(); ) e = e[`${t}Child`];
  return e;
}
function Sr(e, t, r) {
  var o;
  if (hr(e)) return Dt({ focusNode: e, anchorOffset: t, focusOffset: r });
  if ($t(e) && ((o = e.firstChild) == null ? void 0 : o.nodeType) === 3)
    return Dt({ focusNode: e.firstChild, anchorOffset: t, focusOffset: r });
  throw new Error(
    'Not implemented. The result of this interaction is unreliable.'
  );
}
function hr(e) {
  return T0(e) && (pe(e, 'textarea') || (pe(e, 'input') && e.type in zr));
}
function T0(e) {
  return e.nodeType === 1;
}
function dd(e) {
  let t = A0(e);
  if (t && hr(t)) return { type: 'input', selection: $r(t) };
  let r = t == null ? void 0 : t.ownerDocument.getSelection();
  return {
    type:
      Nr(e) && r != null && r.anchorNode && Nr(r.anchorNode)
        ? 'contenteditable'
        : 'default',
    selection: r,
  };
}
function A0(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function q0(e) {
  var t;
  let r = e.ownerDocument.getSelection();
  if (r != null && r.focusNode && hr(e)) {
    let o = Nr(r.focusNode);
    if (o) {
      if (!r.isCollapsed) {
        let a =
          ((t = o.firstChild) == null ? void 0 : t.nodeType) === 3
            ? o.firstChild
            : o;
        r.setBaseAndExtent(a, 0, a, 0);
      }
    } else r.setBaseAndExtent(e, 0, e, 0);
  }
}
function x0(e) {
  var t;
  let r = dd(e);
  if (r.type === 'input') return r.selection;
  if (r.type === 'contenteditable')
    return (t = r.selection) == null ? void 0 : t.getRangeAt(0);
}
function Dt({
  focusNode: e,
  focusOffset: t,
  anchorNode: r = e,
  anchorOffset: o = t,
}) {
  var a, c;
  if (dd(e).type === 'input') return br(e, { anchorOffset: o, focusOffset: t });
  (c = (a = r.ownerDocument) == null ? void 0 : a.getSelection()) == null ||
    c.setBaseAndExtent(r, o, e, t);
}
function Ki(e, t) {
  if (hr(e)) {
    let r = $r(e);
    Dt({
      focusNode: e,
      focusOffset:
        r.startOffset === r.endOffset
          ? r.focusOffset + t
          : t < 0
            ? r.startOffset
            : r.endOffset,
    });
  } else {
    let r = e.ownerDocument.getSelection();
    if (!(r != null && r.focusNode)) return;
    if (r.isCollapsed) {
      let o = cd(r.focusNode, r.focusOffset, t);
      o && Dt({ focusNode: o.node, focusOffset: o.offset });
    } else r[t < 0 ? 'collapseToStart' : 'collapseToEnd']();
  }
}
function xt(e) {
  let t = C0(e, Sa),
    r = $n(e.ownerDocument);
  (t ?? e.ownerDocument.body) !== r &&
    (sd(t ? () => t.focus() : () => (r == null ? void 0 : r.blur())),
    q0(t ?? e.ownerDocument.body));
}
function Jr(e, t, r) {
  let o = wt(t),
    a = Array.from(
      t.ownerDocument.querySelectorAll(
        t.name
          ? `input[type="radio"][name="${o.CSS.escape(t.name)}"]`
          : 'input[type="radio"][name=""], input[type="radio"]:not([name])'
      )
    );
  for (let c = a.findIndex((n) => n === t) + r; ; c += r) {
    if ((a[c] || (c = r > 0 ? 0 : a.length - 1), a[c] === t)) return;
    ot(a[c]) || (xt(a[c]), Be(e, a[c], 'click'));
  }
}
function M0(e) {
  !Sa(e) || $n(e.ownerDocument) !== e || sd(() => e.blur());
}
function fd(e) {
  let t = hr(e)
      ? { 'text/plain': j0(e) }
      : { 'text/plain': String(e.ownerDocument.getSelection()) },
    r = Ea(wt(e));
  for (let o in t) t[o] && r.setData(o, t[o]);
  return r;
}
function j0(e) {
  let t = $r(e);
  return St(e).substring(t.startOffset, t.endOffset);
}
function I0(e) {
  let t = wt(e);
  for (let r = e; r != null && r.ownerDocument; r = r.parentElement) {
    let { display: o, visibility: a } = t.getComputedStyle(r);
    if (o === 'none' || a === 'hidden') return !1;
  }
  return !0;
}
function N0(e, t) {
  let r = e.ownerDocument,
    o = r.querySelectorAll(ud),
    a = Array.from(o).filter(
      (l) => l === e || !(Number(l.getAttribute('tabindex')) < 0 || ot(l))
    );
  Number(e.getAttribute('tabindex')) >= 0 &&
    a.sort((l, s) => {
      let u = Number(l.getAttribute('tabindex')),
        f = Number(s.getAttribute('tabindex'));
      return u === f ? 0 : u === 0 ? 1 : f === 0 ? -1 : u - f;
    });
  let c = {},
    n = [r.body],
    i = pe(e, 'input', { type: 'radio' }) ? e.name : void 0;
  a.forEach((l) => {
    let s = l;
    if (pe(s, 'input', { type: 'radio' }) && s.name) {
      if (s === e) {
        n.push(s);
        return;
      } else if (s.name === i) return;
      if (s.checked) {
        (n = n.filter((u) => !pe(u, 'input', { type: 'radio', name: s.name }))),
          n.push(s),
          (c[s.name] = s);
        return;
      }
      if (typeof c[s.name] < 'u') return;
    }
    n.push(s);
  });
  for (let l = n.findIndex((s) => s === e); ; )
    if (
      ((l += t ? -1 : 1),
      l === n.length ? (l = 0) : l === -1 && (l = n.length - 1),
      n[l] === e || n[l] === r.body || I0(n[l]))
    )
      return n[l];
}
function pd(e) {
  var t;
  if (pe(e, 'textarea') || (pe(e, 'input') && e.type in zr))
    return Dt({ focusNode: e, anchorOffset: 0, focusOffset: St(e).length });
  let r = (t = Nr(e)) != null ? t : e.ownerDocument.body;
  Dt({ focusNode: r, anchorOffset: 0, focusOffset: r.childNodes.length });
}
function B0(e) {
  var t;
  if (pe(e, 'textarea') || (pe(e, 'input') && e.type in zr))
    return $r(e).startOffset === 0 && $r(e).endOffset === St(e).length;
  let r = (t = Nr(e)) != null ? t : e.ownerDocument.body,
    o = e.ownerDocument.getSelection();
  return (
    (o == null ? void 0 : o.anchorNode) === r &&
    o.focusNode === r &&
    o.anchorOffset === 0 &&
    o.focusOffset === r.childNodes.length
  );
}
function Vr(e) {
  return { key: e.key, code: e.code };
}
function $0(e) {
  return {
    altKey: e.modifiers.Alt,
    ctrlKey: e.modifiers.Control,
    metaKey: e.modifiers.Meta,
    shiftKey: e.modifiers.Shift,
    modifierAltGraph: e.modifiers.AltGraph,
    modifierCapsLock: e.modifiers.CapsLock,
    modifierFn: e.modifiers.Fn,
    modifierFnLock: e.modifiers.FnLock,
    modifierNumLock: e.modifiers.NumLock,
    modifierScrollLock: e.modifiers.ScrollLock,
    modifierSymbol: e.modifiers.Symbol,
    modifierSymbolLock: e.modifiers.SymbolLock,
  };
}
var Oa = ((e) => ((e['{'] = '}'), (e['['] = ']'), e))(Oa || {});
function md(e, t) {
  let r = 0,
    o = e[r] in Oa ? e[r] : '';
  r += o.length;
  let a = new RegExp(`^\\${o}{2}`).test(e) ? '' : o;
  return he({ type: a }, a === '' ? D0(e, r, t) : k0(e, r, a, t));
}
function D0(e, t, r) {
  let o = e[t];
  return (
    yd(o, e, t, r),
    (t += o.length),
    {
      consumedLength: t,
      descriptor: o,
      releasePrevious: !1,
      releaseSelf: !0,
      repeat: 1,
    }
  );
}
function k0(e, t, r, o) {
  var a, c, n;
  let i = e[t] === '/' ? '/' : '';
  t += i.length;
  let l = r === '{' && e[t] === '\\';
  t += Number(l);
  let s = l
    ? e[t]
    : (a = e.slice(t).match(r === '{' ? /^\w+|^[^}>/]/ : /^\w+/)) == null
      ? void 0
      : a[0];
  yd(s, e, t, o), (t += s.length);
  let u =
    (n = (c = e.slice(t).match(/^>\d+/)) == null ? void 0 : c[0]) != null
      ? n
      : '';
  t += u.length;
  let f = e[t] === '/' || (!u && e[t] === '>') ? e[t] : '';
  t += f.length;
  let d = Oa[r],
    p = e[t] === d ? d : '';
  if (!p)
    throw new Error(
      hd(
        [!u && 'repeat modifier', !f && 'release modifier', `"${d}"`]
          .filter(Boolean)
          .join(' or '),
        e[t],
        e,
        o
      )
    );
  return (
    (t += p.length),
    {
      consumedLength: t,
      descriptor: s,
      releasePrevious: !!i,
      repeat: u ? Math.max(Number(u.substr(1)), 1) : 1,
      releaseSelf: L0(f, u),
    }
  );
}
function yd(e, t, r, o) {
  if (!e) throw new Error(hd('key descriptor', t[r], t, o));
}
function L0(e, t) {
  if (e) return e === '/';
  if (t) return !1;
}
function hd(e, t, r, o) {
  return `Expected ${e} but found "${t ?? ''}" in "${r}"
    See ${o === 'pointer' ? 'https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen' : 'https://testing-library.com/docs/user-event/keyboard'}
    for more information about how userEvent parses your input.`;
}
function F0(e) {
  return new e.constructor(e.type, e);
}
function U0(e) {
  return H0(e) ? e : e.ownerDocument;
}
function H0(e) {
  return e.nodeType === 9;
}
function Yi(e, t) {
  let r = e;
  do {
    if (r === t) return !0;
    r = r.parentElement;
  } while (r);
  return !1;
}
var on = Symbol('Api level refs');
function Br(e, t) {
  e[on] != null || (e[on] = {}), (e[on][t] = {});
}
function Xr(e, t) {
  var r;
  return (r = e[on]) == null ? void 0 : r[t];
}
function dr(e) {
  let t = e.delay;
  if (typeof t == 'number')
    return Promise.all([
      new Promise((r) => globalThis.setTimeout(() => r(), t)),
      e.advanceTimers(t),
    ]);
}
var z0 = [
    ...'0123456789'.split('').map((e) => ({ code: `Digit${e}`, key: e })),
    ...')!@#$%^&*('
      .split('')
      .map((e, t) => ({ code: `Digit${t}`, key: e, shiftKey: !0 })),
    ...'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .map((e) => ({ code: `Key${e.toUpperCase()}`, key: e })),
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      .split('')
      .map((e) => ({ code: `Key${e}`, key: e, shiftKey: !0 })),
    { code: 'Space', key: ' ' },
    { code: 'AltLeft', key: 'Alt', location: 1 },
    { code: 'AltRight', key: 'Alt', location: 2 },
    { code: 'ShiftLeft', key: 'Shift', location: 1 },
    { code: 'ShiftRight', key: 'Shift', location: 2 },
    { code: 'ControlLeft', key: 'Control', location: 1 },
    { code: 'ControlRight', key: 'Control', location: 2 },
    { code: 'MetaLeft', key: 'Meta', location: 1 },
    { code: 'MetaRight', key: 'Meta', location: 2 },
    { code: 'OSLeft', key: 'OS', location: 1 },
    { code: 'OSRight', key: 'OS', location: 2 },
    { code: 'Tab', key: 'Tab' },
    { code: 'CapsLock', key: 'CapsLock' },
    { code: 'Backspace', key: 'Backspace' },
    { code: 'Enter', key: 'Enter' },
    { code: 'Escape', key: 'Escape' },
    { code: 'ArrowUp', key: 'ArrowUp' },
    { code: 'ArrowDown', key: 'ArrowDown' },
    { code: 'ArrowLeft', key: 'ArrowLeft' },
    { code: 'ArrowRight', key: 'ArrowRight' },
    { code: 'Home', key: 'Home' },
    { code: 'End', key: 'End' },
    { code: 'Delete', key: 'Delete' },
    { code: 'PageUp', key: 'PageUp' },
    { code: 'PageDown', key: 'PageDown' },
    { code: 'Fn', key: 'Fn' },
    { code: 'Symbol', key: 'Symbol' },
    { code: 'AltRight', key: 'AltGraph' },
  ],
  V0 = [
    { name: 'MouseLeft', pointerType: 'mouse', button: 'primary' },
    { name: 'MouseRight', pointerType: 'mouse', button: 'secondary' },
    { name: 'MouseMiddle', pointerType: 'mouse', button: 'auxiliary' },
    { name: 'TouchA', pointerType: 'touch' },
    { name: 'TouchB', pointerType: 'touch' },
    { name: 'TouchC', pointerType: 'touch' },
  ],
  bd = {
    applyAccept: !0,
    autoModify: !0,
    delay: 0,
    document: globalThis.document,
    keyboardMap: z0,
    pointerMap: V0,
    pointerEventsCheck: 2,
    skipAutoClose: !1,
    skipClick: !1,
    skipHover: !1,
    writeToClipboard: !1,
    advanceTimers: () => Promise.resolve(),
  },
  W0 = Ne(he({}, bd), { writeToClipboard: !0 });
function qo(e, t) {
  var r;
  return ((r = gd(e, t)) == null ? void 0 : r.pointerEvents) !== 'none';
}
function G0(e) {
  let t = wt(e);
  for (let r = e, o = []; r != null && r.ownerDocument; r = r.parentElement) {
    o.push(r);
    let a = t.getComputedStyle(r).pointerEvents;
    if (a && !['inherit', 'unset'].includes(a))
      return { pointerEvents: a, tree: o };
  }
}
var Ji = Symbol('Last check for pointer-events');
function gd(e, t) {
  let r = t[Ji];
  if (
    !(
      e.pointerEventsCheck !== 0 &&
      (!r ||
        (Xi(e.pointerEventsCheck, 2) && r[1] !== Xr(e, 1)) ||
        (Xi(e.pointerEventsCheck, 4) && r[2] !== Xr(e, 2)))
    )
  )
    return r == null ? void 0 : r.result;
  let o = G0(t);
  return (t[Ji] = { 1: Xr(e, 1), 2: Xr(e, 2), result: o }), o;
}
function Dn(e, t) {
  let r = gd(e, t);
  if ((r == null ? void 0 : r.pointerEvents) === 'none')
    throw new Error(
      [
        `Unable to perform pointer interaction as the element ${r.tree.length > 1 ? 'inherits' : 'has'} \`pointer-events: none\`:`,
        '',
        K0(r.tree),
      ].join(`
`)
    );
}
function K0(e) {
  return e
    .reverse()
    .map((t, r) =>
      [
        ''.padEnd(r),
        t.tagName,
        t.id && `#${t.id}`,
        t.hasAttribute('data-testid') &&
          `(testId=${t.getAttribute('data-testid')})`,
        Y0(t),
        e.length > 1 &&
          r === 0 &&
          '  <-- This element declared `pointer-events: none`',
        e.length > 1 &&
          r === e.length - 1 &&
          '  <-- Asserted pointer events here',
      ]
        .filter(Boolean)
        .join('')
    ).join(`
`);
}
function Y0(e) {
  var t, r, o, a;
  let c;
  return (
    e.hasAttribute('aria-label')
      ? (c = e.getAttribute('aria-label'))
      : e.hasAttribute('aria-labelledby')
        ? (c =
            (r =
              (t = e.ownerDocument.getElementById(
                e.getAttribute('aria-labelledby')
              )) == null
                ? void 0
                : t.textContent) == null
              ? void 0
              : r.trim())
        : pe(e, [
              'button',
              'input',
              'meter',
              'output',
              'progress',
              'select',
              'textarea',
            ]) &&
            (o = e.labels) != null &&
            o.length
          ? (c = Array.from(e.labels)
              .map((n) => {
                var i;
                return (i = n.textContent) == null ? void 0 : i.trim();
              })
              .join('|'))
          : pe(e, 'button') &&
            (c = (a = e.textContent) == null ? void 0 : a.trim()),
    (c = c == null ? void 0 : c.replace(/\n/g, '  ')),
    Number(c == null ? void 0 : c.length) > 30 &&
      (c = `${c == null ? void 0 : c.substring(0, 29)}…`),
    c ? `(label=${c})` : ''
  );
}
function Xi(e, t) {
  return (e & t) > 0;
}
var vd = {
    primary: 0,
    secondary: 1,
    auxiliary: 2,
    back: 3,
    X1: 3,
    forward: 4,
    X2: 4,
  },
  Qi = { auxiliary: 1, secondary: 2, 1: 2, 2: 1 };
function J0(e) {
  return e in Qi ? Qi[e] : typeof e == 'number' ? e : vd[e];
}
function X0(...e) {
  let t = 0;
  for (let r of e) {
    let o = typeof r == 'number' ? r : vd[r];
    t |= n0(2, o);
  }
  return t;
}
var _d = Ne(he({}, Qw.eventMap), {
    beforeInput: {
      EventType: 'InputEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
  }),
  Q0 = Object.fromEntries(Object.keys(_d).map((e) => [e.toLowerCase(), e])),
  Zi = Object.fromEntries(
    Object.keys(Qc.eventMap).map((e) => [e.toLowerCase(), e])
  );
function Ed(e) {
  return e in Zi ? Qc.eventMap[Zi[e]].EventType : 'Event';
}
var Z0 = ['MouseEvent', 'PointerEvent'];
function wd(e) {
  return Z0.includes(Ed(e));
}
function e1(e) {
  return Ed(e) === 'KeyboardEvent';
}
function t1(e, t, r) {
  let o = Pr(e, t, r, _d[Q0[e]]);
  return wd(e) && r && (r1(o, r), n1(o, r)), o;
}
function Sd(e, t) {
  for (let [r, o] of Object.entries(t))
    Object.defineProperty(e, r, { get: () => o });
}
function r1(
  e,
  {
    x: t,
    y: r,
    clientX: o,
    clientY: a,
    offsetX: c,
    offsetY: n,
    pageX: i,
    pageY: l,
    screenX: s,
    screenY: u,
  }
) {
  var f, d, p, m;
  Sd(e, {
    x: (f = t ?? o) != null ? f : 0,
    y: (d = r ?? a) != null ? d : 0,
    clientX: (p = t ?? o) != null ? p : 0,
    clientY: (m = r ?? a) != null ? m : 0,
    offsetX: c ?? 0,
    offsetY: n ?? 0,
    pageX: i ?? 0,
    pageY: l ?? 0,
    screenX: s ?? 0,
    screenY: u ?? 0,
  });
}
function n1(e, { isPrimary: t, pointerId: r, pointerType: o }) {
  Sd(e, { isPrimary: t, pointerId: r, pointerType: o });
}
var Kt = {};
Kt.click = (e, t, r) => {
  let o = t.closest('button,input,label,select,textarea'),
    a = o && pe(o, 'label') && o.control;
  if (a)
    return () => {
      Sa(a) && xt(a), Cd(r, a, F0(e));
    };
  if (pe(t, 'input', { type: 'file' }))
    return () => {
      M0(t), t.dispatchEvent(new (wt(t).Event)('fileDialog')), xt(t);
    };
};
Kt.cut = (e, t, r) => () => {
  cr(t) && ur(r, t, '', 'deleteByCut');
};
Kt.keydown = (e, t, r) => {
  var o, a;
  return (a = (o = el[e.key]) == null ? void 0 : o.call(el, e, t, r)) != null
    ? a
    : o1(e, t, r);
};
var el = {
    ArrowDown: (e, t, r) => {
      if (pe(t, 'input', { type: 'radio' })) return () => Jr(r, t, -1);
    },
    ArrowLeft: (e, t, r) =>
      pe(t, 'input', { type: 'radio' }) ? () => Jr(r, t, -1) : () => Ki(t, -1),
    ArrowRight: (e, t, r) =>
      pe(t, 'input', { type: 'radio' }) ? () => Jr(r, t, 1) : () => Ki(t, 1),
    ArrowUp: (e, t, r) => {
      if (pe(t, 'input', { type: 'radio' })) return () => Jr(r, t, 1);
    },
    Backspace: (e, t, r) => {
      if (cr(t))
        return () => {
          ur(r, t, '', 'deleteContentBackward');
        };
    },
    Delete: (e, t, r) => {
      if (cr(t))
        return () => {
          ur(r, t, '', 'deleteContentForward');
        };
    },
    End: (e, t) => {
      if (pe(t, ['input', 'textarea']) || $t(t))
        return () => {
          var r, o;
          let a = (o = (r = Ao(t)) == null ? void 0 : r.length) != null ? o : 0;
          Sr(t, a, a);
        };
    },
    Home: (e, t) => {
      if (pe(t, ['input', 'textarea']) || $t(t))
        return () => {
          Sr(t, 0, 0);
        };
    },
    PageDown: (e, t) => {
      if (pe(t, ['input']))
        return () => {
          let r = Ao(t).length;
          Sr(t, r, r);
        };
    },
    PageUp: (e, t) => {
      if (pe(t, ['input']))
        return () => {
          Sr(t, 0, 0);
        };
    },
    Tab:
      (e, t, { keyboardState: r }) =>
      () => {
        let o = N0(t, r.modifiers.Shift);
        xt(o), hr(o) && br(o, { anchorOffset: 0, focusOffset: o.value.length });
      },
  },
  o1 = (e, t, r) => {
    if (e.code === 'KeyA' && r.keyboardState.modifiers.Control)
      return () => pd(t);
  };
Kt.keypress = (e, t, r) => {
  if (e.key === 'Enter') {
    if (
      pe(t, 'button') ||
      (pe(t, 'input') && a1.includes(t.type)) ||
      (pe(t, 'a') && t.href)
    )
      return () => {
        Be(r, t, 'click');
      };
    if (pe(t, 'input')) {
      let o = t.form,
        a =
          o == null
            ? void 0
            : o.querySelector(
                'input[type="submit"], button:not([type]), button[type="submit"]'
              );
      return a
        ? () => Be(r, a, 'click')
        : o && i1.includes(t.type) && o.querySelectorAll('input').length === 1
          ? () => Be(r, o, 'submit')
          : void 0;
    }
  }
  if (cr(t)) {
    let o =
        e.key === 'Enter'
          ? $t(t) && !r.keyboardState.modifiers.Shift
            ? 'insertParagraph'
            : 'insertLineBreak'
          : 'insertText',
      a =
        e.key === 'Enter'
          ? `
`
          : e.key;
    return () => ur(r, t, a, o);
  }
};
var a1 = ['button', 'color', 'file', 'image', 'reset', 'submit'],
  i1 = ['email', 'month', 'password', 'search', 'tel', 'text', 'url', 'week'];
Kt.keyup = (e, t, r) => {
  var o;
  return (o = tl[e.key]) == null ? void 0 : o.call(tl, e, t, r);
};
var tl = {
  ' ': (e, t, r) => {
    if (a0(t)) return () => Be(r, t, 'click');
  },
};
Kt.paste = (e, t, r) => {
  if (cr(t))
    return () => {
      var o;
      let a = (o = e.clipboardData) == null ? void 0 : o.getData('text');
      a && ur(r, t, a, 'insertFromPaste');
    };
};
function rl(e, t) {
  return ge().eventWrapper(e);
}
function Cd(e, t, r, o = !1) {
  var a, c;
  let n = r.type,
    i = o ? () => {} : (c = (a = Kt)[n]) == null ? void 0 : c.call(a, r, t, e);
  if (i) {
    r.preventDefault();
    let l = !1;
    return (
      Object.defineProperty(r, 'defaultPrevented', { get: () => l }),
      Object.defineProperty(r, 'preventDefault', {
        value: () => {
          l = r.cancelable;
        },
      }),
      rl(() => t.dispatchEvent(r)),
      l || i(),
      !l
    );
  }
  return rl(() => t.dispatchEvent(r));
}
function Be(e, t, r, o, a = !1) {
  (wd(r) || e1(r)) && (o = he(he({}, o), $0(e.keyboardState)));
  let c = t1(r, t, o);
  return Cd(e, t, c, a);
}
function l1(e) {
  return Be.bind(void 0, e);
}
var Jn = Symbol('Interceptor for programmatical calls');
function er(e, t, r) {
  let o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    a = Object.getOwnPropertyDescriptor(e, t),
    c = o != null && o.set ? 'set' : 'value';
  if (typeof (o == null ? void 0 : o[c]) != 'function' || o[c][Jn])
    throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
  function n(...i) {
    let { applyNative: l = !1, realArgs: s, then: u } = r.call(this, ...i),
      f = ((!l && a) || o)[c];
    c === 'set' ? f.call(this, s) : f.call(this, ...s), u == null || u();
  }
  (n[Jn] = Jn), Object.defineProperty(e, t, Ne(he({}, a ?? o), { [c]: n }));
}
var Ke = Symbol('Displayed selection in UI');
function s1(e) {
  er(e, 'setSelectionRange', function (t, ...r) {
    let o = t && typeof t == 'object' && t[Ke];
    return (
      o || (this[Ke] = void 0),
      { applyNative: !!o, realArgs: [Number(t), ...r] }
    );
  }),
    er(e, 'selectionStart', function (t) {
      return (this[Ke] = void 0), { realArgs: t };
    }),
    er(e, 'selectionEnd', function (t) {
      return (this[Ke] = void 0), { realArgs: t };
    }),
    er(e, 'select', function () {
      return (
        (this[Ke] = { anchorOffset: 0, focusOffset: St(e).length }),
        { realArgs: [] }
      );
    });
}
function br(e, { focusOffset: t, anchorOffset: r = t }, o = 'replace') {
  let a = St(e).length,
    c = (f) => Math.max(0, Math.min(a, f)),
    n = o === 'replace' || e[Ke] === void 0 ? c(r) : e[Ke].anchorOffset,
    i = c(t),
    l = Math.min(n, i),
    s = Math.max(n, i);
  if (
    ((e[Ke] = { anchorOffset: n, focusOffset: i }),
    e.selectionStart === l && e.selectionEnd === s)
  )
    return;
  let u = new Number(l);
  u[Ke] = Ke;
  try {
    e.setSelectionRange(u, s);
  } catch {}
}
function $r(e) {
  var t, r, o;
  let a =
    (o = e[Ke]) != null
      ? o
      : {
          anchorOffset: (t = e.selectionStart) != null ? t : 0,
          focusOffset: (r = e.selectionEnd) != null ? r : 0,
        };
  return Ne(he({}, a), {
    startOffset: Math.min(a.anchorOffset, a.focusOffset),
    endOffset: Math.max(a.anchorOffset, a.focusOffset),
  });
}
function u1(e) {
  return !!e[Ke];
}
function c1(e) {
  e[Ke] = void 0;
}
var kt = Symbol('Displayed value in UI'),
  fn = Symbol('Initial value to compare on blur'),
  Dr = Symbol('Track programmatic changes for React workaround');
function d1(e) {
  let t = typeof e == 'object' && e[kt];
  return (
    t && ((this[kt] = String(e)), b1(this)),
    {
      applyNative: !!t,
      realArgs: f1(this, e),
      then: t ? void 0 : () => g1(this, String(e)),
    }
  );
}
function f1(e, t) {
  return pe(e, 'input', { type: 'number' }) &&
    String(t) !== '' &&
    !Number.isNaN(Number(t))
    ? String(Number(t))
    : String(t);
}
function p1(e) {
  er(e, 'value', d1);
}
function m1(e, t) {
  e[fn] === void 0 && (e[fn] = e.value),
    (e.value = { [kt]: kt, toString: () => t });
}
function St(e) {
  return e[kt] === void 0 ? e.value : String(e[kt]);
}
function Pa(e) {
  e[kt] = void 0;
}
function Od(e) {
  e[fn] = void 0;
}
function y1(e) {
  return e[fn];
}
function h1(e) {
  return (
    Object.getOwnPropertyNames(e).some((t) => t.startsWith('__react')) &&
    wt(e).REACT_VERSION === 17
  );
}
function b1(e) {
  h1(e) && (e[Dr] = { previousValue: String(e.value), tracked: [] });
}
function g1(e, t) {
  var r, o;
  (o = (r = e[Dr]) == null ? void 0 : r.tracked) == null || o.push(t),
    e[Dr] || (Pa(e), br(e, { focusOffset: t.length }));
}
function v1(e, t) {
  var r;
  let o = e[Dr];
  if (
    ((e[Dr] = void 0),
    !((r = o == null ? void 0 : o.tracked) != null && r.length))
  )
    return;
  let a =
    o.tracked.length === 2 &&
    o.tracked[0] === o.previousValue &&
    o.tracked[1] === e.value;
  a || Pa(e), u1(e) && br(e, { focusOffset: a ? t : e.value.length });
}
function _1(e) {
  er(e, 'setRangeText', function (...t) {
    return {
      realArgs: t,
      then: () => {
        Pa(e), c1(e);
      },
    };
  });
}
var tr = Symbol('Node prepared with document state workarounds');
function Pd(e) {
  e[tr] ||
    (e.addEventListener(
      'focus',
      (t) => {
        let r = t.target;
        nl(r);
      },
      { capture: !0, passive: !0 }
    ),
    e.activeElement && nl(e.activeElement),
    e.addEventListener(
      'blur',
      (t) => {
        let r = t.target,
          o = y1(r);
        o !== void 0 && (r.value !== o && Be({}, r, 'change'), Od(r));
      },
      { capture: !0, passive: !0 }
    ),
    (e[tr] = tr));
}
function nl(e) {
  e[tr] ||
    (pe(e, ['input', 'textarea']) && (p1(e), s1(e), _1(e)), (e[tr] = tr));
}
var E1 = ['Alt', 'AltGraph', 'Control', 'Fn', 'Meta', 'Shift', 'Symbol'];
function Rd(e) {
  return E1.includes(e);
}
var w1 = ['CapsLock', 'FnLock', 'NumLock', 'ScrollLock', 'SymbolLock'];
function Td(e) {
  return w1.includes(e);
}
function S1(e, { key: t }, r) {
  var o;
  if (Rd(t)) {
    if (((e.keyboardState.modifiers[t] = !0), t === 'AltGraph')) {
      let a =
        (o = e.keyboardMap.find((c) => c.key === 'Control')) != null
          ? o
          : { key: 'Control', code: 'Control' };
      Be(e, r, 'keydown', Vr(a));
    }
  } else
    Td(t) &&
      ((e.keyboardState.modifierPhase[t] = e.keyboardState.modifiers[t]),
      e.keyboardState.modifierPhase[t] || (e.keyboardState.modifiers[t] = !0));
}
function C1(e, { key: t }) {
  (Rd(t) || (Td(t) && e.keyboardState.modifierPhase[t])) &&
    (e.keyboardState.modifiers[t] = !1);
}
function O1(e, { key: t }, r) {
  var o;
  if (t === 'AltGraph') {
    let a =
      (o = e.keyboardMap.find((c) => c.key === 'Control')) != null
        ? o
        : { key: 'Control', code: 'Control' };
    Be(e, r, 'keyup', Vr(a));
  }
}
function P1(e, t) {
  return be(this, null, function* () {
    for (let r = 0; r < t.length; r++)
      yield R1(e, t[r]), r < t.length - 1 && (yield dr(e));
  });
}
function R1(e, t) {
  return be(
    this,
    arguments,
    function* (
      r,
      { keyDef: o, releasePrevious: a, releaseSelf: c, repeat: n }
    ) {
      let { document: i, keyboardState: l } = r,
        s = () => Ad(i),
        u = l.pressed.find((f) => f.keyDef === o);
      if ((u && (yield xo(o, s, r, u.unpreventedDefault)), !a)) {
        let f = !0;
        for (let d = 1; d <= n; d++)
          (f = yield A1(o, s, r)),
            f && x1(o, r) && (yield q1(o, s, r)),
            d < n && (yield dr(r));
        c && (yield xo(o, s, r, f));
      }
    }
  );
}
function Ad(e) {
  var t;
  return (t = $n(e)) != null ? t : e.body;
}
function T1(e) {
  return be(this, null, function* () {
    let t = () => Ad(e.document);
    for (let r of e.keyboardState.pressed)
      yield xo(r.keyDef, t, e, r.unpreventedDefault);
  });
}
function A1(e, t, r) {
  return be(this, null, function* () {
    let o = t();
    o !== r.keyboardState.activeElement &&
      ((r.keyboardState.carryValue = void 0), (r.keyboardState.carryChar = '')),
      (r.keyboardState.activeElement = o),
      S1(r, e, o);
    let a = Be(r, o, 'keydown', Vr(e));
    return (
      r.keyboardState.pressed.push({ keyDef: e, unpreventedDefault: a }), a
    );
  });
}
function q1(e, t, r) {
  return be(this, null, function* () {
    let o = t();
    Be(
      r,
      o,
      'keypress',
      Ne(he({}, Vr(e)), {
        charCode: e.key === 'Enter' ? 13 : String(e.key).charCodeAt(0),
      })
    );
  });
}
function xo(e, t, r, o) {
  return be(this, null, function* () {
    let a = t();
    C1(r, e),
      Be(r, a, 'keyup', Vr(e), !o),
      (r.keyboardState.pressed = r.keyboardState.pressed.filter(
        (c) => c.keyDef !== e
      )),
      O1(r, e, a);
  });
}
function x1(e, t) {
  var r;
  return (
    (((r = e.key) == null ? void 0 : r.length) === 1 || e.key === 'Enter') &&
    !t.keyboardState.modifiers.Control &&
    !t.keyboardState.modifiers.Alt
  );
}
function M1(e, t) {
  var r;
  let o = [];
  do {
    let {
        type: a,
        descriptor: c,
        consumedLength: n,
        releasePrevious: i,
        releaseSelf: l = !0,
        repeat: s,
      } = md(t, 'keyboard'),
      u =
        (r = e.find((f) => {
          var d, p;
          return a === '['
            ? ((d = f.code) == null ? void 0 : d.toLowerCase()) ===
                c.toLowerCase()
            : a === '{'
              ? ((p = f.key) == null ? void 0 : p.toLowerCase()) ===
                c.toLowerCase()
              : f.key === c;
        })) != null
          ? r
          : {
              key: 'Unknown',
              code: 'Unknown',
              [a === '[' ? 'code' : 'key']: c,
            };
    o.push({ keyDef: u, releasePrevious: i, releaseSelf: l, repeat: s }),
      (t = t.slice(n));
  } while (t);
  return o;
}
function j1(e) {
  return be(this, null, function* () {
    let t = M1(this[we].keyboardMap, e);
    return P1(this[we], t);
  });
}
function I1() {
  return {
    activeElement: null,
    pressed: [],
    carryChar: '',
    modifiers: {
      Alt: !1,
      AltGraph: !1,
      Control: !1,
      CapsLock: !1,
      Fn: !1,
      FnLock: !1,
      Meta: !1,
      NumLock: !1,
      ScrollLock: !1,
      Shift: !1,
      Symbol: !1,
      SymbolLock: !1,
    },
    modifierPhase: {},
  };
}
function ol(e, t) {
  let r = [];
  do {
    let {
        descriptor: o,
        consumedLength: a,
        releasePrevious: c,
        releaseSelf: n = !0,
      } = md(t, 'pointer'),
      i = e.find((l) => l.name === o);
    i && r.push({ keyDef: i, releasePrevious: c, releaseSelf: n }),
      (t = t.slice(a));
  } while (t);
  return r;
}
function Ra(
  e,
  t,
  r,
  {
    pointerType: o,
    button: a,
    coords: c,
    pointerId: n,
    isPrimary: i,
    clickCount: l,
  }
) {
  let s = he({}, c);
  return (
    (r === 'click' || r.startsWith('pointer')) &&
      ((s.pointerId = n), (s.pointerType = o)),
    ['pointerdown', 'pointerup'].includes(r) && (s.isPrimary = i),
    (s.button = J0(a ?? 0)),
    (s.buttons = X0(
      ...e.pointerState.pressed
        .filter((u) => u.keyDef.pointerType === o)
        .map((u) => {
          var f;
          return (f = u.keyDef.button) != null ? f : 0;
        })
    )),
    ['mousedown', 'mouseup', 'click', 'dblclick', 'contextmenu'].includes(r) &&
      (s.detail = l),
    Be(e, t, r, s)
  );
}
function Mo({ target: e, node: t, offset: r }) {
  return pe(e, ['input', 'textarea'])
    ? { node: e, offset: r ?? St(e).length }
    : t
      ? {
          node: t,
          offset:
            r ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length),
        }
      : qd(e, r);
}
function qd(e, t, r = !0) {
  let o = t === void 0 ? e.childNodes.length - 1 : 0,
    a = t === void 0 ? -1 : 1;
  for (
    ;
    t === void 0
      ? o >= (r ? Math.max(e.childNodes.length - 1, 0) : 0)
      : o <= e.childNodes.length;

  ) {
    let c = e.childNodes.item(o),
      n = String(c.textContent);
    if (n.length)
      if (t !== void 0 && n.length < t) t -= n.length;
      else {
        if (c.nodeType === 1) return qd(c, t, !1);
        if (c.nodeType === 3)
          return { node: c, offset: t ?? c.nodeValue.length };
      }
    o += a;
  }
  return { node: e, offset: e.childNodes.length };
}
function N1(e, t) {
  return be(
    this,
    arguments,
    function* (
      r,
      { pointerName: o = 'mouse', target: a, coords: c, node: n, offset: i }
    ) {
      let { pointerState: l } = r;
      if (!(o in l.position))
        throw new Error(`Trying to move pointer "${o}" which does not exist.`);
      let {
        pointerId: s,
        pointerType: u,
        target: f,
        coords: d,
        selectionRange: p,
      } = l.position[o];
      if (
        (f && f !== a && (Br(r, 2), qo(r, f) && (m(f, d), Yi(a, f) || y(f, d))),
        Br(r, 2),
        Dn(r, a),
        (l.position[o] = Ne(he({}, l.position[o]), { target: a, coords: c })),
        f !== a && (!f || !Yi(f, a)) && g(a, c),
        m(a, c),
        p)
      ) {
        let v = Mo({ target: a, node: n, offset: i });
        if ('node' in p) {
          if (v.node === p.node) {
            let S = v.offset < p.start ? p.end : p.start,
              E = v.offset > p.end || v.offset < p.start ? v.offset : p.end;
            br(p.node, { anchorOffset: S, focusOffset: E });
          }
        } else {
          let S = p.cloneRange(),
            E = S.comparePoint(v.node, v.offset);
          E < 0
            ? S.setStart(v.node, v.offset)
            : E > 0 && S.setEnd(v.node, v.offset);
          let C = a.ownerDocument.getSelection();
          C.removeAllRanges(), C.addRange(S.cloneRange());
        }
      }
      function m(v, S) {
        h(v, 'pointermove', S), u === 'mouse' && !ot(v) && h(v, 'mousemove', S);
      }
      function y(v, S) {
        h(v, 'pointerout', S),
          h(v, 'pointerleave', S),
          u === 'mouse' &&
            !ot(v) &&
            (h(v, 'mouseout', S), h(v, 'mouseleave', S));
      }
      function g(v, S) {
        h(v, 'pointerover', S),
          h(v, 'pointerenter', S),
          u === 'mouse' &&
            !ot(v) &&
            (h(v, 'mouseover', S), h(v, 'mouseenter', S));
      }
      function h(v, S, E) {
        return Ra(r, v, S, { coords: E, pointerId: s, pointerType: u });
      }
    }
  );
}
function B1(e, t) {
  return be(this, null, function* () {
    let { keyDef: r, target: o, releasePrevious: a, releaseSelf: c } = t,
      n = e.pointerState.pressed.find((s) => s.keyDef === r),
      i = r.pointerType === 'touch' ? r.name : r.pointerType,
      l = ot(o);
    if ((n && al(e, i, t, n, l), !a)) {
      let s = D1(e, i, t, l);
      c && al(e, i, t, s, l);
    }
  });
}
function $1(e) {
  return (e.pointerId = e.pointerId + 1), e.pointerId;
}
function D1(e, t, { keyDef: r, node: o, offset: a, target: c, coords: n }, i) {
  var l, s, u;
  Br(e, 2), Dn(e, c);
  let { pointerState: f } = e,
    { name: d, pointerType: p, button: m } = r,
    y = p === 'mouse' ? 1 : $1(f);
  f.position[t] = Ne(he({}, f.position[t]), {
    pointerId: y,
    pointerType: p,
    target: c,
    coords: n,
  });
  let g = !1,
    h = !0;
  if (p !== 'mouse')
    for (let C of f.pressed)
      C.keyDef.pointerType === p && ((C.isMultiTouch = !0), (g = !0), (h = !1));
  ((l = f.activeClickCount) == null ? void 0 : l[0]) !== d &&
    delete f.activeClickCount;
  let v =
    Number(
      (u = (s = f.activeClickCount) == null ? void 0 : s[1]) != null ? u : 0
    ) + 1;
  f.activeClickCount = [d, v];
  let S = {
    keyDef: r,
    downTarget: c,
    pointerId: y,
    unpreventedDefault: !0,
    isMultiTouch: g,
    isPrimary: h,
    clickCount: v,
  };
  return (
    f.pressed.push(S),
    p !== 'mouse' && (E('pointerover'), E('pointerenter')),
    (p !== 'mouse' ||
      !f.pressed.some((C) => C.keyDef !== r && C.keyDef.pointerType === p)) &&
      E('pointerdown'),
    p === 'mouse' &&
      (i || (S.unpreventedDefault = E('mousedown')),
      S.unpreventedDefault &&
        xd({
          target: c,
          targetIsDisabled: i,
          clickCount: v,
          position: f.position[t],
          node: o,
          offset: a,
        }),
      m === 'secondary' && E('contextmenu')),
    S
  );
  function E(C) {
    return Ra(e, c, C, {
      button: m,
      clickCount: v,
      coords: n,
      isPrimary: h,
      pointerId: y,
      pointerType: p,
    });
  }
}
function al(
  e,
  t,
  {
    keyDef: { pointerType: r, button: o },
    target: a,
    coords: c,
    node: n,
    offset: i,
  },
  l,
  s
) {
  Br(e, 2), Dn(e, a);
  let { pointerState: u } = e;
  u.pressed = u.pressed.filter((h) => h !== l);
  let { isMultiTouch: f, isPrimary: d, pointerId: p, clickCount: m } = l,
    { unpreventedDefault: y } = l;
  (u.position[t] = Ne(he({}, u.position[t]), { target: a, coords: c })),
    (r !== 'mouse' ||
      !u.pressed.filter((h) => h.keyDef.pointerType === r).length) &&
      g('pointerup'),
    r !== 'mouse' && (g('pointerout'), g('pointerleave')),
    r !== 'mouse' &&
      !f &&
      (s ||
        (m === 1 && (g('mouseover'), g('mouseenter')),
        g('mousemove'),
        (y = g('mousedown') && y)),
      y &&
        xd({
          target: a,
          targetIsDisabled: s,
          clickCount: m,
          position: u.position[t],
          node: n,
          offset: i,
        })),
    delete u.position[t].selectionRange,
    s ||
      ((r === 'mouse' || !f) &&
        ((y = g('mouseup') && y),
        (r !== 'mouse' || o === 'primary') &&
          a === l.downTarget &&
          (g('click'), m === 2 && g('dblclick'))));
  function g(h) {
    return Ra(e, a, h, {
      button: o,
      clickCount: m,
      coords: c,
      isPrimary: d,
      pointerId: p,
      pointerType: r,
    });
  }
}
function xd({
  position: e,
  target: t,
  targetIsDisabled: r,
  clickCount: o,
  node: a,
  offset: c,
}) {
  if (!r) {
    let n = pe(t, ['input', 'textarea']),
      i = String(n ? St(t) : t.textContent),
      [l, s] = a ? [c, c] : k1(i, c, o);
    if (n)
      br(t, { anchorOffset: l ?? i.length, focusOffset: s ?? i.length }),
        (e.selectionRange = { node: t, start: l ?? 0, end: s ?? i.length });
    else {
      let { node: u, offset: f } = Mo({ target: t, node: a, offset: l }),
        { node: d, offset: p } = Mo({ target: t, node: a, offset: s }),
        m = t.ownerDocument.createRange();
      m.setStart(u, f), m.setEnd(d, p), (e.selectionRange = m);
      let y = t.ownerDocument.getSelection();
      y.removeAllRanges(), y.addRange(m.cloneRange());
    }
  }
  xt(t);
}
function k1(e, t, r) {
  if (r % 3 === 1 || e.length === 0) return [t, t];
  let o = t ?? e.length;
  return r % 3 === 2
    ? [
        o - e.substr(0, t).match(/(\w+|\s+|\W)?$/)[0].length,
        t === void 0 ? t : t + e.substr(t).match(/^(\w+|\s+|\W)?/)[0].length,
      ]
    : [
        o - e.substr(0, t).match(/[^\r\n]*$/)[0].length,
        t === void 0 ? t : t + e.substr(t).match(/^[^\r\n]*/)[0].length,
      ];
}
function L1(e, t) {
  return be(this, null, function* () {
    var r, o;
    for (let a = 0; a < t.length; a++) {
      let c = t[a],
        n =
          'pointerName' in c && c.pointerName
            ? c.pointerName
            : 'keyDef' in c
              ? c.keyDef.pointerType === 'touch'
                ? c.keyDef.name
                : c.keyDef.pointerType
              : 'mouse',
        i = (r = c.target) != null ? r : F1(n, e.pointerState),
        l =
          (o = c.coords) != null
            ? o
            : n in e.pointerState.position
              ? e.pointerState.position[n].coords
              : void 0;
      yield 'keyDef' in c
        ? B1(e, Ne(he({}, c), { target: i, coords: l }))
        : N1(e, Ne(he({}, c), { target: i, coords: l })),
        a < t.length - 1 && (yield dr(e));
    }
    delete e.pointerState.activeClickCount;
  });
}
function F1(e, t) {
  if (!(e in t.position) || !t.position[e].target)
    throw new Error(
      'This pointer has no previous position. Provide a target property!'
    );
  return t.position[e].target;
}
function U1(e) {
  return be(this, null, function* () {
    let { pointerMap: t } = this[we],
      r = [];
    return (
      (Array.isArray(e) ? e : [e]).forEach((o) => {
        typeof o == 'string'
          ? r.push(...ol(t, o))
          : 'keys' in o
            ? r.push(...ol(t, o.keys).map((a) => he(he({}, o), a)))
            : r.push(o);
      }),
      L1(this[we], r).then(() => {})
    );
  });
}
function H1(e) {
  return {
    pointerId: 1,
    position: {
      mouse: {
        pointerType: 'mouse',
        pointerId: 1,
        target: e.body,
        coords: {
          clientX: 0,
          clientY: 0,
          offsetX: 0,
          offsetY: 0,
          pageX: 0,
          pageY: 0,
          x: 0,
          y: 0,
        },
      },
    },
    pressed: [],
  };
}
var we = Symbol('Config'),
  jo = {};
ed(jo, {
  clear: () => eS,
  click: () => z1,
  copy: () => J1,
  cut: () => X1,
  dblClick: () => V1,
  deselectOptions: () => rS,
  hover: () => G1,
  keyboard: () => j1,
  paste: () => Q1,
  pointer: () => U1,
  selectOptions: () => tS,
  tab: () => Y1,
  tripleClick: () => W1,
  type: () => nS,
  unhover: () => K1,
  upload: () => oS,
});
function z1(e) {
  return be(this, null, function* () {
    let t = [];
    return (
      this[we].skipHover || t.push({ target: e }),
      t.push({ keys: '[MouseLeft]', target: e }),
      this.pointer(t)
    );
  });
}
function V1(e) {
  return be(this, null, function* () {
    return this.pointer([{ target: e }, '[MouseLeft][MouseLeft]']);
  });
}
function W1(e) {
  return be(this, null, function* () {
    return this.pointer([{ target: e }, '[MouseLeft][MouseLeft][MouseLeft]']);
  });
}
function G1(e) {
  return be(this, null, function* () {
    return this.pointer({ target: e });
  });
}
function K1(e) {
  return be(this, null, function* () {
    return (
      Dn(this[we], this[we].pointerState.position.mouse.target),
      this.pointer({ target: e.ownerDocument.body })
    );
  });
}
function Y1() {
  return be(this, arguments, function* ({ shift: e } = {}) {
    return this.keyboard(
      e === !0
        ? '{Shift>}{Tab}{/Shift}'
        : e === !1
          ? '[/ShiftLeft][/ShiftRight]{Tab}'
          : '{Tab}'
    );
  });
}
function J1() {
  return be(this, null, function* () {
    var e;
    let t = this[we].document,
      r = (e = t.activeElement) != null ? e : t.body,
      o = fd(r);
    if (o.items.length !== 0)
      return (
        this.dispatchUIEvent(r, 'copy', { clipboardData: o }) &&
          this[we].writeToClipboard &&
          (yield od(t, o)),
        o
      );
  });
}
function X1() {
  return be(this, null, function* () {
    var e;
    let t = this[we].document,
      r = (e = t.activeElement) != null ? e : t.body,
      o = fd(r);
    if (o.items.length !== 0)
      return (
        this.dispatchUIEvent(r, 'cut', { clipboardData: o }) &&
          this[we].writeToClipboard &&
          (yield od(r.ownerDocument, o)),
        o
      );
  });
}
function Q1(e) {
  return be(this, null, function* () {
    var t, r;
    let o = this[we].document,
      a = (t = o.activeElement) != null ? t : o.body,
      c =
        (r = typeof e == 'string' ? Z1(o, e) : e) != null
          ? r
          : yield f0(o).catch(() => {
              throw new Error(
                '`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.'
              );
            });
    this.dispatchUIEvent(a, 'paste', { clipboardData: c });
  });
}
function Z1(e, t) {
  let r = Ea(wt(e));
  return r.setData('text', t), r;
}
function eS(e) {
  return be(this, null, function* () {
    if (!cr(e) || ot(e))
      throw new Error('clear()` is only supported on editable elements.');
    if ((xt(e), e.ownerDocument.activeElement !== e))
      throw new Error('The element to be cleared could not be focused.');
    if ((pd(e), !B0(e)))
      throw new Error(
        'The element content to be cleared could not be selected.'
      );
    ur(this[we], e, '', 'deleteContentBackward');
  });
}
function tS(e, t) {
  return be(this, null, function* () {
    return Md.call(this, !0, e, t);
  });
}
function rS(e, t) {
  return be(this, null, function* () {
    return Md.call(this, !1, e, t);
  });
}
function Md(e, t, r) {
  return be(this, null, function* () {
    if (!e && !t.multiple)
      throw ge().getElementError(
        'Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.',
        t
      );
    let o = Array.isArray(r) ? r : [r],
      a = Array.from(t.querySelectorAll('option, [role="option"]')),
      c = o
        .map((i) => {
          if (typeof i != 'string' && a.includes(i)) return i;
          {
            let l = a.find((s) => s.value === i || s.innerHTML === i);
            if (l) return l;
            throw ge().getElementError(
              `Value "${String(i)}" not found in options`,
              t
            );
          }
        })
        .filter((i) => !ot(i));
    if (ot(t) || !c.length) return;
    let n = (i) => {
      (i.selected = e),
        this.dispatchUIEvent(t, 'input', {
          bubbles: !0,
          cancelable: !1,
          composed: !0,
        }),
        this.dispatchUIEvent(t, 'change');
    };
    if (pe(t, 'select'))
      if (t.multiple)
        for (let i of c) {
          let l = this[we].pointerEventsCheck === 0 ? !0 : qo(this[we], i);
          l &&
            (this.dispatchUIEvent(i, 'pointerover'),
            this.dispatchUIEvent(t, 'pointerenter'),
            this.dispatchUIEvent(i, 'mouseover'),
            this.dispatchUIEvent(t, 'mouseenter'),
            this.dispatchUIEvent(i, 'pointermove'),
            this.dispatchUIEvent(i, 'mousemove'),
            this.dispatchUIEvent(i, 'pointerdown'),
            this.dispatchUIEvent(i, 'mousedown')),
            xt(t),
            l &&
              (this.dispatchUIEvent(i, 'pointerup'),
              this.dispatchUIEvent(i, 'mouseup')),
            n(i),
            l && this.dispatchUIEvent(i, 'click'),
            yield dr(this[we]);
        }
      else if (c.length === 1) {
        let i = this[we].pointerEventsCheck === 0 ? !0 : qo(this[we], t);
        i ? yield this.click(t) : xt(t),
          n(c[0]),
          i &&
            (this.dispatchUIEvent(t, 'pointerover'),
            this.dispatchUIEvent(t, 'pointerenter'),
            this.dispatchUIEvent(t, 'mouseover'),
            this.dispatchUIEvent(t, 'mouseenter'),
            this.dispatchUIEvent(t, 'pointerup'),
            this.dispatchUIEvent(t, 'mouseup'),
            this.dispatchUIEvent(t, 'click')),
          yield dr(this[we]);
      } else
        throw ge().getElementError(
          'Cannot select multiple options on a non-multiple select',
          t
        );
    else if (t.getAttribute('role') === 'listbox')
      for (let i of c) yield this.click(i), yield this.unhover(i);
    else
      throw ge().getElementError(
        'Cannot select options on elements that are neither select nor listbox elements',
        t
      );
  });
}
function nS(e, t) {
  return be(
    this,
    arguments,
    function* (
      r,
      o,
      {
        skipClick: a = this[we].skipClick,
        skipAutoClose: c = this[we].skipAutoClose,
        initialSelectionStart: n,
        initialSelectionEnd: i,
      } = {}
    ) {
      r.disabled ||
        (a || (yield this.click(r)),
        n !== void 0 && Sr(r, n, i ?? n),
        yield this.keyboard(o),
        c || (yield T1(this[we])));
    }
  );
}
function oS(e, t) {
  return be(this, null, function* () {
    let r = pe(e, 'label') ? e.control : e;
    if (!r || !pe(r, 'input', { type: 'file' }))
      throw new TypeError(
        `The ${r === e ? 'given' : 'associated'} ${r == null ? void 0 : r.tagName} element does not accept file uploads`
      );
    if (ot(e)) return;
    let o = (Array.isArray(t) ? t : [t])
        .filter((c) => !this[we].applyAccept || aS(c, r.accept))
        .slice(0, r.multiple ? void 0 : 1),
      a = () => {
        var c;
        (o.length === ((c = r.files) == null ? void 0 : c.length) &&
          o.every((n, i) => {
            var l;
            return n === ((l = r.files) == null ? void 0 : l.item(i));
          })) ||
          (S0(r, _a(wt(e), o)),
          this.dispatchUIEvent(r, 'input'),
          this.dispatchUIEvent(r, 'change'));
      };
    r.addEventListener('fileDialog', a),
      yield this.click(e),
      r.removeEventListener('fileDialog', a);
  });
}
function aS(e, t) {
  if (!t) return !0;
  let r = ['audio/*', 'image/*', 'video/*'];
  return t
    .split(',')
    .some((o) =>
      o.startsWith('.')
        ? e.name.endsWith(o)
        : r.includes(o)
          ? e.type.startsWith(o.substr(0, o.length - 1))
          : e.type === o
    );
}
function iS(e) {
  return ge().asyncWrapper(e);
}
function jd(e = {}, t = W0, r) {
  let o = cS(e, r, t),
    { keyboardState: a = I1(), pointerState: c = H1(o) } = e;
  return Ne(he(he({}, t), e), {
    document: o,
    keyboardState: a,
    pointerState: c,
  });
}
function lS(e = {}) {
  var t;
  let r = jd(e);
  Pd(r.document);
  let o = (t = r.document.defaultView) != null ? t : globalThis.window;
  return u0(o), Ta(r);
}
function Fe(e = {}, t) {
  let r = jd(e, bd, t);
  return Pd(r.document), { config: r, api: Ta(r) };
}
function sS(e) {
  return Ta(he(he({}, this[we]), e));
}
function uS(e, t) {
  function r(...o) {
    return (
      Br(e[we], 1),
      iS(() =>
        t.apply(e, o).then((a) =>
          be(this, null, function* () {
            return yield dr(e[we]), a;
          })
        )
      )
    );
  }
  return Object.defineProperty(r, 'name', { get: () => t.name }), r;
}
function Ta(e) {
  let t = he({ [we]: e, dispatchUIEvent: l1(e) }, jo);
  return Ne(
    he(
      {},
      Object.fromEntries(Object.entries(jo).map(([r, o]) => [r, uS(t, o)]))
    ),
    { setup: sS.bind(t) }
  );
}
function cS(e, t, r) {
  var o, a;
  return (a = (o = e.document) != null ? o : t && U0(t)) != null
    ? a
    : r.document;
}
var Id = {};
ed(Id, {
  clear: () => dS,
  click: () => fS,
  copy: () => pS,
  cut: () => mS,
  dblClick: () => yS,
  deselectOptions: () => hS,
  hover: () => bS,
  keyboard: () => gS,
  paste: () => _S,
  pointer: () => vS,
  selectOptions: () => ES,
  tab: () => PS,
  tripleClick: () => wS,
  type: () => SS,
  unhover: () => CS,
  upload: () => OS,
});
function dS(e) {
  return Fe().api.clear(e);
}
function fS(e, t = {}) {
  return Fe(t, e).api.click(e);
}
function pS(e = {}) {
  return Fe(e).api.copy();
}
function mS(e = {}) {
  return Fe(e).api.cut();
}
function yS(e, t = {}) {
  return Fe(t).api.dblClick(e);
}
function hS(e, t, r = {}) {
  return Fe(r).api.deselectOptions(e, t);
}
function bS(e, t = {}) {
  return Fe(t).api.hover(e);
}
function gS(e) {
  return be(this, arguments, function* (t, r = {}) {
    let { config: o, api: a } = Fe(r);
    return a.keyboard(t).then(() => o.keyboardState);
  });
}
function vS(e) {
  return be(this, arguments, function* (t, r = {}) {
    let { config: o, api: a } = Fe(r);
    return a.pointer(t).then(() => o.pointerState);
  });
}
function _S(e, t) {
  return Fe(t).api.paste(e);
}
function ES(e, t, r = {}) {
  return Fe(r).api.selectOptions(e, t);
}
function wS(e, t = {}) {
  return Fe(t).api.tripleClick(e);
}
function SS(e, t, r = {}) {
  return Fe(r, e).api.type(e, t, r);
}
function CS(e, t = {}) {
  let { config: r, api: o } = Fe(t);
  return (r.pointerState.position.mouse.target = e), o.unhover(e);
}
function OS(e, t, r = {}) {
  return Fe(r).api.upload(e, t);
}
function PS(e = {}) {
  return Fe().api.tab(e);
}
var RS = Ne(he({}, Id), { setup: lS });
function TS(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var o = Array.from(typeof e == 'string' ? [e] : e);
  o[o.length - 1] = o[o.length - 1].replace(/\r?\n([\t ]*)$/, '');
  var a = o.reduce(function (i, l) {
    var s = l.match(/\n([\t ]+|(?!\s).)/g);
    return s
      ? i.concat(
          s.map(function (u) {
            var f, d;
            return (d =
              (f = u.match(/[\t ]/g)) === null || f === void 0
                ? void 0
                : f.length) !== null && d !== void 0
              ? d
              : 0;
          })
        )
      : i;
  }, []);
  if (a.length) {
    var c = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, a) +
        '}',
      'g'
    );
    o = o.map(function (i) {
      return i.replace(
        c,
        `
`
      );
    });
  }
  o[0] = o[0].replace(/^\r?\n/, '');
  var n = o[0];
  return (
    t.forEach(function (i, l) {
      var s = n.match(/(?:^|\n)( *)$/),
        u = s ? s[1] : '',
        f = i;
      typeof i == 'string' &&
        i.includes(`
`) &&
        (f = String(i)
          .split(
            `
`
          )
          .map(function (d, p) {
            return p === 0 ? d : '' + u + d;
          }).join(`
`)),
        (n += f + o[l + 1]);
    }),
    n
  );
}
var AS = TS,
  Io = Fo(
    { ...Nu },
    {
      intercept: (e, t) =>
        t[0] === 'fireEvent' || e.startsWith('find') || e.startsWith('waitFor'),
    }
  );
Io.screen = new Proxy(Io.screen, {
  get(e, t, r) {
    return (
      rp.warn(AS`
          You are using Testing Library's \`screen\` object. Use \`within(canvasElement)\` instead.
          More info: https://storybook.js.org/docs/react/essentials/interactions
        `),
      Reflect.get(e, t, r)
    );
  },
});
var {
    buildQueries: LS,
    configure: FS,
    createEvent: US,
    fireEvent: HS,
    findAllByAltText: zS,
    findAllByDisplayValue: VS,
    findAllByLabelText: WS,
    findAllByPlaceholderText: GS,
    findAllByRole: KS,
    findAllByTestId: YS,
    findAllByText: JS,
    findAllByTitle: XS,
    findByAltText: QS,
    findByDisplayValue: ZS,
    findByLabelText: eC,
    findByPlaceholderText: tC,
    findByRole: rC,
    findByTestId: nC,
    findByText: oC,
    findByTitle: aC,
    getAllByAltText: iC,
    getAllByDisplayValue: lC,
    getAllByLabelText: sC,
    getAllByPlaceholderText: uC,
    getAllByRole: cC,
    getAllByTestId: dC,
    getAllByText: fC,
    getAllByTitle: pC,
    getByAltText: mC,
    getByDisplayValue: yC,
    getByLabelText: hC,
    getByPlaceholderText: bC,
    getByRole: gC,
    getByTestId: vC,
    getByText: _C,
    getByTitle: EC,
    getConfig: wC,
    getDefaultNormalizer: SC,
    getElementError: CC,
    getNodeText: OC,
    getQueriesForElement: PC,
    getRoles: RC,
    getSuggestedQuery: TC,
    isInaccessible: AC,
    logDOM: qC,
    logRoles: xC,
    prettyDOM: MC,
    queries: jC,
    queryAllByAltText: IC,
    queryAllByAttribute: NC,
    queryAllByDisplayValue: BC,
    queryAllByLabelText: $C,
    queryAllByPlaceholderText: DC,
    queryAllByRole: kC,
    queryAllByTestId: LC,
    queryAllByText: FC,
    queryAllByTitle: UC,
    queryByAltText: HC,
    queryByAttribute: zC,
    queryByDisplayValue: VC,
    queryByLabelText: WC,
    queryByPlaceholderText: GC,
    queryByRole: KC,
    queryByTestId: YC,
    queryByText: JC,
    queryByTitle: XC,
    queryHelpers: QC,
    screen: ZC,
    waitFor: eO,
    waitForElementToBeRemoved: tO,
    within: qS,
    prettyFormat: rO,
  } = Io,
  { userEvent: xS } = Fo({ userEvent: RS }, { intercept: !0 }),
  { expect: Xn } = Fo(
    { expect: Iu },
    {
      getKeys: (e, t) => {
        let r = ['assert', '__methods', '__flags', '_obj'];
        if (e.constructor === Yg.Assertion) {
          let o = Object.keys(Object.getPrototypeOf(e)).filter(
            (a) => !r.includes(a)
          );
          return t > 2 ? o : [...o, 'not'];
        }
        return Object.keys(e);
      },
      intercept: (e) => e !== 'expect',
    }
  ),
  MS = ({ parameters: e }) => {
    var t, r, o;
    ((t = e == null ? void 0 : e.test) == null ? void 0 : t.mockReset) === !0
      ? IE()
      : ((r = e == null ? void 0 : e.test) == null ? void 0 : r.clearMocks) ===
          !0
        ? jE()
        : ((o = e == null ? void 0 : e.test) == null
            ? void 0
            : o.restoreMocks) !== !1 && NE();
  };
Jg.__STORYBOOK_TEST_LOADERS__ = [MS];
const No = () => {
  const [e, t] = kd.useState();
  return qe.jsxs('article', {
    children: [
      qe.jsx(Ld, {
        user: e,
        onLogin: () => t({ name: 'Jane Doe' }),
        onLogout: () => t(void 0),
        onCreateAccount: () => t({ name: 'Jane Doe' }),
      }),
      qe.jsxs('section', {
        className: 'storybook-page',
        children: [
          qe.jsx('h2', { children: 'Pages in Storybook' }),
          qe.jsxs('p', {
            children: [
              'We recommend building UIs with a',
              ' ',
              qe.jsx('a', {
                href: 'https://componentdriven.org',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: qe.jsx('strong', { children: 'component-driven' }),
              }),
              ' ',
              'process starting with atomic components and ending with pages.',
            ],
          }),
          qe.jsx('p', {
            children:
              'Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:',
          }),
          qe.jsxs('ul', {
            children: [
              qe.jsx('li', {
                children:
                  'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories',
              }),
              qe.jsx('li', {
                children:
                  'Assemble data in the page component from your services. You can mock these services out using Storybook.',
              }),
            ],
          }),
          qe.jsxs('p', {
            children: [
              'Get a guided tutorial on component-driven development at',
              ' ',
              qe.jsx('a', {
                href: 'https://storybook.js.org/tutorials/',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'Storybook tutorials',
              }),
              '. Read more in the',
              ' ',
              qe.jsx('a', {
                href: 'https://storybook.js.org/docs',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'docs',
              }),
              '.',
            ],
          }),
          qe.jsxs('div', {
            className: 'tip-wrapper',
            children: [
              qe.jsx('span', { className: 'tip', children: 'Tip' }),
              ' Adjust the width of the canvas with the',
              ' ',
              qe.jsx('svg', {
                width: '10',
                height: '10',
                viewBox: '0 0 12 12',
                xmlns: 'http://www.w3.org/2000/svg',
                children: qe.jsx('g', {
                  fill: 'none',
                  fillRule: 'evenodd',
                  children: qe.jsx('path', {
                    d: 'M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z',
                    id: 'a',
                    fill: '#999',
                  }),
                }),
              }),
              'Viewports addon in the toolbar',
            ],
          }),
        ],
      }),
    ],
  });
};
try {
  (No.displayName = 'Page'),
    (No.__docgenInfo = { description: '', displayName: 'Page', props: {} });
} catch {}
const nO = {
    title: 'Example/Page',
    component: No,
    parameters: { layout: 'fullscreen' },
  },
  Qr = {},
  Zr = {
    play: async ({ canvasElement: e }) => {
      const t = qS(e),
        r = t.getByRole('button', { name: /Log in/i });
      await Xn(r).toBeInTheDocument(),
        await xS.click(r),
        await Xn(r).not.toBeInTheDocument();
      const o = t.getByRole('button', { name: /Log out/i });
      await Xn(o).toBeInTheDocument();
    },
  };
var il, ll, sl;
Qr.parameters = {
  ...Qr.parameters,
  docs: {
    ...((il = Qr.parameters) == null ? void 0 : il.docs),
    source: {
      originalSource: '{}',
      ...((sl = (ll = Qr.parameters) == null ? void 0 : ll.docs) == null
        ? void 0
        : sl.source),
    },
  },
};
var ul, cl, dl;
Zr.parameters = {
  ...Zr.parameters,
  docs: {
    ...((ul = Zr.parameters) == null ? void 0 : ul.docs),
    source: {
      originalSource: `{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,
      ...((dl = (cl = Zr.parameters) == null ? void 0 : cl.docs) == null
        ? void 0
        : dl.source),
    },
  },
};
const oO = ['LoggedOut', 'LoggedIn'];
export {
  Zr as LoggedIn,
  Qr as LoggedOut,
  oO as __namedExportsOrder,
  nO as default,
};
