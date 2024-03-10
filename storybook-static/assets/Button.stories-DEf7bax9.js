import { j as Se } from './jsx-runtime-CKrituN3.js';
import './index-CBqU2yxZ.js';
import './_commonjsHelpers-BosuxZz1.js';
function ye(e) {
  var r,
    t,
    o = '';
  if (typeof e == 'string' || typeof e == 'number') o += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var l = e.length;
      for (r = 0; r < l; r++)
        e[r] && (t = ye(e[r])) && (o && (o += ' '), (o += t));
    } else for (t in e) e[t] && (o && (o += ' '), (o += t));
  return o;
}
function Ae() {
  for (var e, r, t = 0, o = '', l = arguments.length; t < l; t++)
    (e = arguments[t]) && (r = ye(e)) && (o && (o += ' '), (o += r));
  return o;
}
const H = '-';
function Me(e) {
  const r = Be(e),
    { conflictingClassGroups: t, conflictingClassGroupModifiers: o } = e;
  function l(s) {
    const i = s.split(H);
    return i[0] === '' && i.length !== 1 && i.shift(), xe(i, r) || Te(s);
  }
  function n(s, i) {
    const u = t[s] || [];
    return i && o[s] ? [...u, ...o[s]] : u;
  }
  return { getClassGroupId: l, getConflictingClassGroupIds: n };
}
function xe(e, r) {
  var s;
  if (e.length === 0) return r.classGroupId;
  const t = e[0],
    o = r.nextPart.get(t),
    l = o ? xe(e.slice(1), o) : void 0;
  if (l) return l;
  if (r.validators.length === 0) return;
  const n = e.join(H);
  return (s = r.validators.find(({ validator: i }) => i(n))) == null
    ? void 0
    : s.classGroupId;
}
const te = /^\[(.+)\]$/;
function Te(e) {
  if (te.test(e)) {
    const r = te.exec(e)[1],
      t = r == null ? void 0 : r.substring(0, r.indexOf(':'));
    if (t) return 'arbitrary..' + t;
  }
}
function Be(e) {
  const { theme: r, prefix: t } = e,
    o = { nextPart: new Map(), validators: [] };
  return (
    je(Object.entries(e.classGroups), t).forEach(([n, s]) => {
      U(s, o, n, r);
    }),
    o
  );
}
function U(e, r, t, o) {
  e.forEach((l) => {
    if (typeof l == 'string') {
      const n = l === '' ? r : oe(r, l);
      n.classGroupId = t;
      return;
    }
    if (typeof l == 'function') {
      if (Re(l)) {
        U(l(o), r, t, o);
        return;
      }
      r.validators.push({ validator: l, classGroupId: t });
      return;
    }
    Object.entries(l).forEach(([n, s]) => {
      U(s, oe(r, n), t, o);
    });
  });
}
function oe(e, r) {
  let t = e;
  return (
    r.split(H).forEach((o) => {
      t.nextPart.has(o) ||
        t.nextPart.set(o, { nextPart: new Map(), validators: [] }),
        (t = t.nextPart.get(o));
    }),
    t
  );
}
function Re(e) {
  return e.isThemeGetter;
}
function je(e, r) {
  return r
    ? e.map(([t, o]) => {
        const l = o.map((n) =>
          typeof n == 'string'
            ? r + n
            : typeof n == 'object'
              ? Object.fromEntries(
                  Object.entries(n).map(([s, i]) => [r + s, i])
                )
              : n
        );
        return [t, l];
      })
    : e;
}
function Ie(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let r = 0,
    t = new Map(),
    o = new Map();
  function l(n, s) {
    t.set(n, s), r++, r > e && ((r = 0), (o = t), (t = new Map()));
  }
  return {
    get(n) {
      let s = t.get(n);
      if (s !== void 0) return s;
      if ((s = o.get(n)) !== void 0) return l(n, s), s;
    },
    set(n, s) {
      t.has(n) ? t.set(n, s) : l(n, s);
    },
  };
}
const we = '!';
function Pe(e) {
  const r = e.separator,
    t = r.length === 1,
    o = r[0],
    l = r.length;
  return function (s) {
    const i = [];
    let u = 0,
      c = 0,
      d;
    for (let g = 0; g < s.length; g++) {
      let m = s[g];
      if (u === 0) {
        if (m === o && (t || s.slice(g, g + l) === r)) {
          i.push(s.slice(c, g)), (c = g + l);
          continue;
        }
        if (m === '/') {
          d = g;
          continue;
        }
      }
      m === '[' ? u++ : m === ']' && u--;
    }
    const b = i.length === 0 ? s : s.substring(c),
      h = b.startsWith(we),
      y = h ? b.substring(1) : b,
      v = d && d > c ? d - c : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: y,
      maybePostfixModifierPosition: v,
    };
  };
}
function Ve(e) {
  if (e.length <= 1) return e;
  const r = [];
  let t = [];
  return (
    e.forEach((o) => {
      o[0] === '[' ? (r.push(...t.sort(), o), (t = [])) : t.push(o);
    }),
    r.push(...t.sort()),
    r
  );
}
function Ge(e) {
  return { cache: Ie(e.cacheSize), splitModifiers: Pe(e), ...Me(e) };
}
const Ee = /\s+/;
function Ne(e, r) {
  const {
      splitModifiers: t,
      getClassGroupId: o,
      getConflictingClassGroupIds: l,
    } = r,
    n = new Set();
  return e
    .trim()
    .split(Ee)
    .map((s) => {
      const {
        modifiers: i,
        hasImportantModifier: u,
        baseClassName: c,
        maybePostfixModifierPosition: d,
      } = t(s);
      let b = o(d ? c.substring(0, d) : c),
        h = !!d;
      if (!b) {
        if (!d) return { isTailwindClass: !1, originalClassName: s };
        if (((b = o(c)), !b))
          return { isTailwindClass: !1, originalClassName: s };
        h = !1;
      }
      const y = Ve(i).join(':');
      return {
        isTailwindClass: !0,
        modifierId: u ? y + we : y,
        classGroupId: b,
        originalClassName: s,
        hasPostfixModifier: h,
      };
    })
    .reverse()
    .filter((s) => {
      if (!s.isTailwindClass) return !0;
      const { modifierId: i, classGroupId: u, hasPostfixModifier: c } = s,
        d = i + u;
      return n.has(d)
        ? !1
        : (n.add(d), l(u, c).forEach((b) => n.add(i + b)), !0);
    })
    .reverse()
    .map((s) => s.originalClassName)
    .join(' ');
}
function Le() {
  let e = 0,
    r,
    t,
    o = '';
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = ve(r)) && (o && (o += ' '), (o += t));
  return o;
}
function ve(e) {
  if (typeof e == 'string') return e;
  let r,
    t = '';
  for (let o = 0; o < e.length; o++)
    e[o] && (r = ve(e[o])) && (t && (t += ' '), (t += r));
  return t;
}
function _e(e, ...r) {
  let t,
    o,
    l,
    n = s;
  function s(u) {
    const c = r.reduce((d, b) => b(d), e());
    return (t = Ge(c)), (o = t.cache.get), (l = t.cache.set), (n = i), i(u);
  }
  function i(u) {
    const c = o(u);
    if (c) return c;
    const d = Ne(u, t);
    return l(u, d), d;
  }
  return function () {
    return n(Le.apply(null, arguments));
  };
}
function p(e) {
  const r = (t) => t[e] || [];
  return (r.isThemeGetter = !0), r;
}
const ke = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Oe = /^\d+\/\d+$/,
  We = new Set(['px', 'full', 'screen']),
  qe = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  $e =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ue = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Fe = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  He =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function w(e) {
  return S(e) || We.has(e) || Oe.test(e);
}
function C(e) {
  return A(e, 'length', er);
}
function S(e) {
  return !!e && !Number.isNaN(Number(e));
}
function V(e) {
  return A(e, 'number', S);
}
function B(e) {
  return !!e && Number.isInteger(Number(e));
}
function Je(e) {
  return e.endsWith('%') && S(e.slice(0, -1));
}
function a(e) {
  return ke.test(e);
}
function z(e) {
  return qe.test(e);
}
const Ke = new Set(['length', 'size', 'percentage']);
function Xe(e) {
  return A(e, Ke, Ce);
}
function Ze(e) {
  return A(e, 'position', Ce);
}
const Qe = new Set(['image', 'url']);
function Ye(e) {
  return A(e, Qe, tr);
}
function De(e) {
  return A(e, '', rr);
}
function R() {
  return !0;
}
function A(e, r, t) {
  const o = ke.exec(e);
  return o
    ? o[1]
      ? typeof r == 'string'
        ? o[1] === r
        : r.has(o[1])
      : t(o[2])
    : !1;
}
function er(e) {
  return $e.test(e) && !Ue.test(e);
}
function Ce() {
  return !1;
}
function rr(e) {
  return Fe.test(e);
}
function tr(e) {
  return He.test(e);
}
function or() {
  const e = p('colors'),
    r = p('spacing'),
    t = p('blur'),
    o = p('brightness'),
    l = p('borderColor'),
    n = p('borderRadius'),
    s = p('borderSpacing'),
    i = p('borderWidth'),
    u = p('contrast'),
    c = p('grayscale'),
    d = p('hueRotate'),
    b = p('invert'),
    h = p('gap'),
    y = p('gradientColorStops'),
    v = p('gradientColorStopPositions'),
    g = p('inset'),
    m = p('margin'),
    k = p('opacity'),
    x = p('padding'),
    J = p('saturate'),
    _ = p('scale'),
    K = p('sepia'),
    X = p('skew'),
    Z = p('space'),
    Q = p('translate'),
    O = () => ['auto', 'contain', 'none'],
    W = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
    q = () => ['auto', a, r],
    f = () => [a, r],
    Y = () => ['', w, C],
    j = () => ['auto', S, a],
    D = () => [
      'bottom',
      'center',
      'left',
      'left-bottom',
      'left-top',
      'right',
      'right-bottom',
      'right-top',
      'top',
    ],
    I = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
    ee = () => [
      'normal',
      'multiply',
      'screen',
      'overlay',
      'darken',
      'lighten',
      'color-dodge',
      'color-burn',
      'hard-light',
      'soft-light',
      'difference',
      'exclusion',
      'hue',
      'saturation',
      'color',
      'luminosity',
      'plus-lighter',
    ],
    $ = () => [
      'start',
      'end',
      'center',
      'between',
      'around',
      'evenly',
      'stretch',
    ],
    M = () => ['', '0', a],
    re = () => [
      'auto',
      'avoid',
      'all',
      'avoid-page',
      'page',
      'left',
      'right',
      'column',
    ],
    T = () => [S, V],
    P = () => [S, a];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [R],
      spacing: [w, C],
      blur: ['none', '', z, a],
      brightness: T(),
      borderColor: [e],
      borderRadius: ['none', '', 'full', z, a],
      borderSpacing: f(),
      borderWidth: Y(),
      contrast: T(),
      grayscale: M(),
      hueRotate: P(),
      invert: M(),
      gap: f(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Je, C],
      inset: q(),
      margin: q(),
      opacity: T(),
      padding: f(),
      saturate: T(),
      scale: T(),
      sepia: M(),
      skew: P(),
      space: f(),
      translate: f(),
    },
    classGroups: {
      aspect: [{ aspect: ['auto', 'square', 'video', a] }],
      container: ['container'],
      columns: [{ columns: [z] }],
      'break-after': [{ 'break-after': re() }],
      'break-before': [{ 'break-before': re() }],
      'break-inside': [
        { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
      ],
      'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
      box: [{ box: ['border', 'content'] }],
      display: [
        'block',
        'inline-block',
        'inline',
        'flex',
        'inline-flex',
        'table',
        'inline-table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row-group',
        'table-row',
        'flow-root',
        'grid',
        'inline-grid',
        'contents',
        'list-item',
        'hidden',
      ],
      float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
      clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
      isolation: ['isolate', 'isolation-auto'],
      'object-fit': [
        { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
      ],
      'object-position': [{ object: [...D(), a] }],
      overflow: [{ overflow: W() }],
      'overflow-x': [{ 'overflow-x': W() }],
      'overflow-y': [{ 'overflow-y': W() }],
      overscroll: [{ overscroll: O() }],
      'overscroll-x': [{ 'overscroll-x': O() }],
      'overscroll-y': [{ 'overscroll-y': O() }],
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      inset: [{ inset: [g] }],
      'inset-x': [{ 'inset-x': [g] }],
      'inset-y': [{ 'inset-y': [g] }],
      start: [{ start: [g] }],
      end: [{ end: [g] }],
      top: [{ top: [g] }],
      right: [{ right: [g] }],
      bottom: [{ bottom: [g] }],
      left: [{ left: [g] }],
      visibility: ['visible', 'invisible', 'collapse'],
      z: [{ z: ['auto', B, a] }],
      basis: [{ basis: q() }],
      'flex-direction': [
        { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
      ],
      'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
      flex: [{ flex: ['1', 'auto', 'initial', 'none', a] }],
      grow: [{ grow: M() }],
      shrink: [{ shrink: M() }],
      order: [{ order: ['first', 'last', 'none', B, a] }],
      'grid-cols': [{ 'grid-cols': [R] }],
      'col-start-end': [{ col: ['auto', { span: ['full', B, a] }, a] }],
      'col-start': [{ 'col-start': j() }],
      'col-end': [{ 'col-end': j() }],
      'grid-rows': [{ 'grid-rows': [R] }],
      'row-start-end': [{ row: ['auto', { span: [B, a] }, a] }],
      'row-start': [{ 'row-start': j() }],
      'row-end': [{ 'row-end': j() }],
      'grid-flow': [
        { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
      ],
      'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', a] }],
      'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', a] }],
      gap: [{ gap: [h] }],
      'gap-x': [{ 'gap-x': [h] }],
      'gap-y': [{ 'gap-y': [h] }],
      'justify-content': [{ justify: ['normal', ...$()] }],
      'justify-items': [
        { 'justify-items': ['start', 'end', 'center', 'stretch'] },
      ],
      'justify-self': [
        { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
      ],
      'align-content': [{ content: ['normal', ...$(), 'baseline'] }],
      'align-items': [
        { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
      ],
      'align-self': [
        { self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] },
      ],
      'place-content': [{ 'place-content': [...$(), 'baseline'] }],
      'place-items': [
        { 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] },
      ],
      'place-self': [
        { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
      ],
      p: [{ p: [x] }],
      px: [{ px: [x] }],
      py: [{ py: [x] }],
      ps: [{ ps: [x] }],
      pe: [{ pe: [x] }],
      pt: [{ pt: [x] }],
      pr: [{ pr: [x] }],
      pb: [{ pb: [x] }],
      pl: [{ pl: [x] }],
      m: [{ m: [m] }],
      mx: [{ mx: [m] }],
      my: [{ my: [m] }],
      ms: [{ ms: [m] }],
      me: [{ me: [m] }],
      mt: [{ mt: [m] }],
      mr: [{ mr: [m] }],
      mb: [{ mb: [m] }],
      ml: [{ ml: [m] }],
      'space-x': [{ 'space-x': [Z] }],
      'space-x-reverse': ['space-x-reverse'],
      'space-y': [{ 'space-y': [Z] }],
      'space-y-reverse': ['space-y-reverse'],
      w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', a, r] }],
      'min-w': [{ 'min-w': [a, r, 'min', 'max', 'fit'] }],
      'max-w': [
        {
          'max-w': [
            a,
            r,
            'none',
            'full',
            'min',
            'max',
            'fit',
            'prose',
            { screen: [z] },
            z,
          ],
        },
      ],
      h: [{ h: [a, r, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
      'min-h': [{ 'min-h': [a, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
      'max-h': [{ 'max-h': [a, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
      size: [{ size: [a, r, 'auto', 'min', 'max', 'fit'] }],
      'font-size': [{ text: ['base', z, C] }],
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      'font-style': ['italic', 'not-italic'],
      'font-weight': [
        {
          font: [
            'thin',
            'extralight',
            'light',
            'normal',
            'medium',
            'semibold',
            'bold',
            'extrabold',
            'black',
            V,
          ],
        },
      ],
      'font-family': [{ font: [R] }],
      'fvn-normal': ['normal-nums'],
      'fvn-ordinal': ['ordinal'],
      'fvn-slashed-zero': ['slashed-zero'],
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      tracking: [
        {
          tracking: [
            'tighter',
            'tight',
            'normal',
            'wide',
            'wider',
            'widest',
            a,
          ],
        },
      ],
      'line-clamp': [{ 'line-clamp': ['none', S, V] }],
      leading: [
        {
          leading: [
            'none',
            'tight',
            'snug',
            'normal',
            'relaxed',
            'loose',
            w,
            a,
          ],
        },
      ],
      'list-image': [{ 'list-image': ['none', a] }],
      'list-style-type': [{ list: ['none', 'disc', 'decimal', a] }],
      'list-style-position': [{ list: ['inside', 'outside'] }],
      'placeholder-color': [{ placeholder: [e] }],
      'placeholder-opacity': [{ 'placeholder-opacity': [k] }],
      'text-alignment': [
        { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
      ],
      'text-color': [{ text: [e] }],
      'text-opacity': [{ 'text-opacity': [k] }],
      'text-decoration': [
        'underline',
        'overline',
        'line-through',
        'no-underline',
      ],
      'text-decoration-style': [{ decoration: [...I(), 'wavy'] }],
      'text-decoration-thickness': [
        { decoration: ['auto', 'from-font', w, C] },
      ],
      'underline-offset': [{ 'underline-offset': ['auto', w, a] }],
      'text-decoration-color': [{ decoration: [e] }],
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
      indent: [{ indent: f() }],
      'vertical-align': [
        {
          align: [
            'baseline',
            'top',
            'middle',
            'bottom',
            'text-top',
            'text-bottom',
            'sub',
            'super',
            a,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            'normal',
            'nowrap',
            'pre',
            'pre-line',
            'pre-wrap',
            'break-spaces',
          ],
        },
      ],
      break: [{ break: ['normal', 'words', 'all', 'keep'] }],
      hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
      content: [{ content: ['none', a] }],
      'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
      'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
      'bg-opacity': [{ 'bg-opacity': [k] }],
      'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
      'bg-position': [{ bg: [...D(), Ze] }],
      'bg-repeat': [
        { bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] },
      ],
      'bg-size': [{ bg: ['auto', 'cover', 'contain', Xe] }],
      'bg-image': [
        {
          bg: [
            'none',
            { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
            Ye,
          ],
        },
      ],
      'bg-color': [{ bg: [e] }],
      'gradient-from-pos': [{ from: [v] }],
      'gradient-via-pos': [{ via: [v] }],
      'gradient-to-pos': [{ to: [v] }],
      'gradient-from': [{ from: [y] }],
      'gradient-via': [{ via: [y] }],
      'gradient-to': [{ to: [y] }],
      rounded: [{ rounded: [n] }],
      'rounded-s': [{ 'rounded-s': [n] }],
      'rounded-e': [{ 'rounded-e': [n] }],
      'rounded-t': [{ 'rounded-t': [n] }],
      'rounded-r': [{ 'rounded-r': [n] }],
      'rounded-b': [{ 'rounded-b': [n] }],
      'rounded-l': [{ 'rounded-l': [n] }],
      'rounded-ss': [{ 'rounded-ss': [n] }],
      'rounded-se': [{ 'rounded-se': [n] }],
      'rounded-ee': [{ 'rounded-ee': [n] }],
      'rounded-es': [{ 'rounded-es': [n] }],
      'rounded-tl': [{ 'rounded-tl': [n] }],
      'rounded-tr': [{ 'rounded-tr': [n] }],
      'rounded-br': [{ 'rounded-br': [n] }],
      'rounded-bl': [{ 'rounded-bl': [n] }],
      'border-w': [{ border: [i] }],
      'border-w-x': [{ 'border-x': [i] }],
      'border-w-y': [{ 'border-y': [i] }],
      'border-w-s': [{ 'border-s': [i] }],
      'border-w-e': [{ 'border-e': [i] }],
      'border-w-t': [{ 'border-t': [i] }],
      'border-w-r': [{ 'border-r': [i] }],
      'border-w-b': [{ 'border-b': [i] }],
      'border-w-l': [{ 'border-l': [i] }],
      'border-opacity': [{ 'border-opacity': [k] }],
      'border-style': [{ border: [...I(), 'hidden'] }],
      'divide-x': [{ 'divide-x': [i] }],
      'divide-x-reverse': ['divide-x-reverse'],
      'divide-y': [{ 'divide-y': [i] }],
      'divide-y-reverse': ['divide-y-reverse'],
      'divide-opacity': [{ 'divide-opacity': [k] }],
      'divide-style': [{ divide: I() }],
      'border-color': [{ border: [l] }],
      'border-color-x': [{ 'border-x': [l] }],
      'border-color-y': [{ 'border-y': [l] }],
      'border-color-t': [{ 'border-t': [l] }],
      'border-color-r': [{ 'border-r': [l] }],
      'border-color-b': [{ 'border-b': [l] }],
      'border-color-l': [{ 'border-l': [l] }],
      'divide-color': [{ divide: [l] }],
      'outline-style': [{ outline: ['', ...I()] }],
      'outline-offset': [{ 'outline-offset': [w, a] }],
      'outline-w': [{ outline: [w, C] }],
      'outline-color': [{ outline: [e] }],
      'ring-w': [{ ring: Y() }],
      'ring-w-inset': ['ring-inset'],
      'ring-color': [{ ring: [e] }],
      'ring-opacity': [{ 'ring-opacity': [k] }],
      'ring-offset-w': [{ 'ring-offset': [w, C] }],
      'ring-offset-color': [{ 'ring-offset': [e] }],
      shadow: [{ shadow: ['', 'inner', 'none', z, De] }],
      'shadow-color': [{ shadow: [R] }],
      opacity: [{ opacity: [k] }],
      'mix-blend': [{ 'mix-blend': ee() }],
      'bg-blend': [{ 'bg-blend': ee() }],
      filter: [{ filter: ['', 'none'] }],
      blur: [{ blur: [t] }],
      brightness: [{ brightness: [o] }],
      contrast: [{ contrast: [u] }],
      'drop-shadow': [{ 'drop-shadow': ['', 'none', z, a] }],
      grayscale: [{ grayscale: [c] }],
      'hue-rotate': [{ 'hue-rotate': [d] }],
      invert: [{ invert: [b] }],
      saturate: [{ saturate: [J] }],
      sepia: [{ sepia: [K] }],
      'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
      'backdrop-blur': [{ 'backdrop-blur': [t] }],
      'backdrop-brightness': [{ 'backdrop-brightness': [o] }],
      'backdrop-contrast': [{ 'backdrop-contrast': [u] }],
      'backdrop-grayscale': [{ 'backdrop-grayscale': [c] }],
      'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [d] }],
      'backdrop-invert': [{ 'backdrop-invert': [b] }],
      'backdrop-opacity': [{ 'backdrop-opacity': [k] }],
      'backdrop-saturate': [{ 'backdrop-saturate': [J] }],
      'backdrop-sepia': [{ 'backdrop-sepia': [K] }],
      'border-collapse': [{ border: ['collapse', 'separate'] }],
      'border-spacing': [{ 'border-spacing': [s] }],
      'border-spacing-x': [{ 'border-spacing-x': [s] }],
      'border-spacing-y': [{ 'border-spacing-y': [s] }],
      'table-layout': [{ table: ['auto', 'fixed'] }],
      caption: [{ caption: ['top', 'bottom'] }],
      transition: [
        {
          transition: [
            'none',
            'all',
            '',
            'colors',
            'opacity',
            'shadow',
            'transform',
            a,
          ],
        },
      ],
      duration: [{ duration: P() }],
      ease: [{ ease: ['linear', 'in', 'out', 'in-out', a] }],
      delay: [{ delay: P() }],
      animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', a] }],
      transform: [{ transform: ['', 'gpu', 'none'] }],
      scale: [{ scale: [_] }],
      'scale-x': [{ 'scale-x': [_] }],
      'scale-y': [{ 'scale-y': [_] }],
      rotate: [{ rotate: [B, a] }],
      'translate-x': [{ 'translate-x': [Q] }],
      'translate-y': [{ 'translate-y': [Q] }],
      'skew-x': [{ 'skew-x': [X] }],
      'skew-y': [{ 'skew-y': [X] }],
      'transform-origin': [
        {
          origin: [
            'center',
            'top',
            'top-right',
            'right',
            'bottom-right',
            'bottom',
            'bottom-left',
            'left',
            'top-left',
            a,
          ],
        },
      ],
      accent: [{ accent: ['auto', e] }],
      appearance: [{ appearance: ['none', 'auto'] }],
      cursor: [
        {
          cursor: [
            'auto',
            'default',
            'pointer',
            'wait',
            'text',
            'move',
            'help',
            'not-allowed',
            'none',
            'context-menu',
            'progress',
            'cell',
            'crosshair',
            'vertical-text',
            'alias',
            'copy',
            'no-drop',
            'grab',
            'grabbing',
            'all-scroll',
            'col-resize',
            'row-resize',
            'n-resize',
            'e-resize',
            's-resize',
            'w-resize',
            'ne-resize',
            'nw-resize',
            'se-resize',
            'sw-resize',
            'ew-resize',
            'ns-resize',
            'nesw-resize',
            'nwse-resize',
            'zoom-in',
            'zoom-out',
            a,
          ],
        },
      ],
      'caret-color': [{ caret: [e] }],
      'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
      resize: [{ resize: ['none', 'y', 'x', ''] }],
      'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
      'scroll-m': [{ 'scroll-m': f() }],
      'scroll-mx': [{ 'scroll-mx': f() }],
      'scroll-my': [{ 'scroll-my': f() }],
      'scroll-ms': [{ 'scroll-ms': f() }],
      'scroll-me': [{ 'scroll-me': f() }],
      'scroll-mt': [{ 'scroll-mt': f() }],
      'scroll-mr': [{ 'scroll-mr': f() }],
      'scroll-mb': [{ 'scroll-mb': f() }],
      'scroll-ml': [{ 'scroll-ml': f() }],
      'scroll-p': [{ 'scroll-p': f() }],
      'scroll-px': [{ 'scroll-px': f() }],
      'scroll-py': [{ 'scroll-py': f() }],
      'scroll-ps': [{ 'scroll-ps': f() }],
      'scroll-pe': [{ 'scroll-pe': f() }],
      'scroll-pt': [{ 'scroll-pt': f() }],
      'scroll-pr': [{ 'scroll-pr': f() }],
      'scroll-pb': [{ 'scroll-pb': f() }],
      'scroll-pl': [{ 'scroll-pl': f() }],
      'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
      'snap-stop': [{ snap: ['normal', 'always'] }],
      'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
      'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
      touch: [{ touch: ['auto', 'none', 'manipulation'] }],
      'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
      'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
      'touch-pz': ['touch-pinch-zoom'],
      select: [{ select: ['none', 'text', 'all', 'auto'] }],
      'will-change': [
        { 'will-change': ['auto', 'scroll', 'contents', 'transform', a] },
      ],
      fill: [{ fill: [e, 'none'] }],
      'stroke-w': [{ stroke: [w, C, V] }],
      stroke: [{ stroke: [e, 'none'] }],
      sr: ['sr-only', 'not-sr-only'],
      'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: [
        'inset-x',
        'inset-y',
        'start',
        'end',
        'top',
        'right',
        'bottom',
        'left',
      ],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': [
        'fvn-ordinal',
        'fvn-slashed-zero',
        'fvn-figure',
        'fvn-spacing',
        'fvn-fraction',
      ],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: [
        'rounded-s',
        'rounded-e',
        'rounded-t',
        'rounded-r',
        'rounded-b',
        'rounded-l',
        'rounded-ss',
        'rounded-se',
        'rounded-ee',
        'rounded-es',
        'rounded-tl',
        'rounded-tr',
        'rounded-br',
        'rounded-bl',
      ],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': [
        'border-w-s',
        'border-w-e',
        'border-w-t',
        'border-w-r',
        'border-w-b',
        'border-w-l',
      ],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': [
        'border-color-t',
        'border-color-r',
        'border-color-b',
        'border-color-l',
      ],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': [
        'scroll-mx',
        'scroll-my',
        'scroll-ms',
        'scroll-me',
        'scroll-mt',
        'scroll-mr',
        'scroll-mb',
        'scroll-ml',
      ],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': [
        'scroll-px',
        'scroll-py',
        'scroll-ps',
        'scroll-pe',
        'scroll-pt',
        'scroll-pr',
        'scroll-pb',
        'scroll-pl',
      ],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch'],
    },
    conflictingClassGroupModifiers: { 'font-size': ['leading'] },
  };
}
const nr = _e(or),
  sr = (...e) => nr(Ae(...e));
function ze(e) {
  var r,
    t,
    o = '';
  if (typeof e == 'string' || typeof e == 'number') o += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (t = ze(e[r])) && (o && (o += ' '), (o += t));
    else for (r in e) e[r] && (o && (o += ' '), (o += r));
  return o;
}
function lr() {
  for (var e, r, t = 0, o = ''; t < arguments.length; )
    (e = arguments[t++]) && (r = ze(e)) && (o && (o += ' '), (o += r));
  return o;
}
const ne = (e) => (typeof e == 'boolean' ? ''.concat(e) : e === 0 ? '0' : e),
  se = lr,
  ar = (e, r) => (t) => {
    var o;
    if ((r == null ? void 0 : r.variants) == null)
      return se(
        e,
        t == null ? void 0 : t.class,
        t == null ? void 0 : t.className
      );
    const { variants: l, defaultVariants: n } = r,
      s = Object.keys(l).map((c) => {
        const d = t == null ? void 0 : t[c],
          b = n == null ? void 0 : n[c];
        if (d === null) return null;
        const h = ne(d) || ne(b);
        return l[c][h];
      }),
      i =
        t &&
        Object.entries(t).reduce((c, d) => {
          let [b, h] = d;
          return h === void 0 || (c[b] = h), c;
        }, {}),
      u =
        r == null || (o = r.compoundVariants) === null || o === void 0
          ? void 0
          : o.reduce((c, d) => {
              let { class: b, className: h, ...y } = d;
              return Object.entries(y).every((v) => {
                let [g, m] = v;
                return Array.isArray(m)
                  ? m.includes({ ...n, ...i }[g])
                  : { ...n, ...i }[g] === m;
              })
                ? [...c, b, h]
                : c;
            }, []);
    return se(
      e,
      s,
      u,
      t == null ? void 0 : t.class,
      t == null ? void 0 : t.className
    );
  },
  ir = ar(
    'flex flex-row gap-x-4 disabled:cursor-not-allowed items-center justify-center',
    {
      variants: {
        buttonType: {
          primary:
            'bg-violet-500 text-white border-violet-500 hover:bg-violet-600',
          secondary:
            'bg-gray-200 text-gray-600 border-gray-200 hover:bg-gray-300',
          warning:
            'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600',
          outline:
            'bg-white text-gray-600 hover:bg-gray-100 border hover:border-gray-100 border-gray-300 hover:shadow-md',
          disabled: 'bg-black text-white border-black cursor-not-allowed',
          error: 'bg-red-500 text-white border-red-500 hover:bg-red-600',
        },
        size: {
          default: ['text-base'],
          small: ['text-sm'],
          large: ['text-lg'],
          xxl: ['text-2xl'],
        },
        spacing: {
          default: ['py-2', 'px-4'],
          small: ['py-1', 'px-2'],
          large: ['py-3', 'px-6'],
          xxl: ['py-4', 'px-8'],
        },
        rounded: {
          default: 'rounded-md',
          sm: 'rounded-sm',
          lg: 'rounded-lg',
          xl: 'rounded-xl',
          xxl: 'rounded-2xl',
          none: 'rounded-none',
          full: 'rounded-full',
        },
      },
      compoundVariants: [
        {
          buttonType: 'primary',
          size: 'default',
          spacing: 'default',
          rounded: 'default',
        },
      ],
      defaultVariants: {
        buttonType: 'primary',
        size: 'default',
        rounded: 'default',
        spacing: 'default',
      },
    }
  );
function F({
  className: e,
  buttonType: r,
  size: t,
  rounded: o,
  label: l,
  rightIcon: n,
  spacing: s,
  leftIcon: i,
  ...u
}) {
  return Se.jsxs('button', {
    className: sr(ir({ buttonType: r, size: t, rounded: o, spacing: s }), e),
    type: 'button',
    ...u,
    children: [!!i && i, !!l && l, !!n && n],
  });
}
try {
  (F.displayName = 'Button'),
    (F.__docgenInfo = {
      description: '',
      displayName: 'Button',
      props: {
        leftIcon: {
          defaultValue: null,
          description: '',
          name: 'leftIcon',
          required: !1,
          type: { name: 'ReactNode' },
        },
        rightIcon: {
          defaultValue: null,
          description: '',
          name: 'rightIcon',
          required: !1,
          type: { name: 'ReactNode' },
        },
        label: {
          defaultValue: null,
          description: '',
          name: 'label',
          required: !1,
          type: { name: 'string' },
        },
        ref: {
          defaultValue: null,
          description: '',
          name: 'ref',
          required: !1,
          type: {
            name: '((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null',
          },
        },
        size: {
          defaultValue: null,
          description: '',
          name: 'size',
          required: !1,
          type: { name: '"small" | "large" | "default" | "xxl" | null' },
        },
        buttonType: {
          defaultValue: null,
          description: '',
          name: 'buttonType',
          required: !1,
          type: {
            name: '"primary" | "disabled" | "secondary" | "warning" | "outline" | "error" | null',
          },
        },
        spacing: {
          defaultValue: null,
          description: '',
          name: 'spacing',
          required: !1,
          type: { name: '"small" | "large" | "default" | "xxl" | null' },
        },
        rounded: {
          defaultValue: null,
          description: '',
          name: 'rounded',
          required: !1,
          type: {
            name: '"default" | "xxl" | "sm" | "lg" | "xl" | "none" | "full" | null',
          },
        },
      },
    });
} catch {}
const pr = {
    title: 'Components/Button',
    component: F,
    tags: ['autodocs'],
    argTypes: {},
  },
  G = {
    args: {
      label: 'Button',
      onClick: () => {
        window.console.log('Button clicked!');
      },
    },
  },
  E = {
    args: {
      label: 'Button',
      buttonType: 'secondary',
      onClick: () => {
        window.console.log('Button clicked!');
      },
    },
  },
  N = { args: { label: 'Button', size: 'large' } },
  L = {
    args: {
      size: 'small',
      label: 'Button',
      onClick: () => {
        window.console.log('Button clicked!');
      },
    },
  };
var le, ae, ie;
G.parameters = {
  ...G.parameters,
  docs: {
    ...((le = G.parameters) == null ? void 0 : le.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Button',
    onClick: () => {
      window.console.log('Button clicked!');
    }
  }
}`,
      ...((ie = (ae = G.parameters) == null ? void 0 : ae.docs) == null
        ? void 0
        : ie.source),
    },
  },
};
var ce, de, ue;
E.parameters = {
  ...E.parameters,
  docs: {
    ...((ce = E.parameters) == null ? void 0 : ce.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Button',
    buttonType: 'secondary',
    onClick: () => {
      window.console.log('Button clicked!');
    }
  }
}`,
      ...((ue = (de = E.parameters) == null ? void 0 : de.docs) == null
        ? void 0
        : ue.source),
    },
  },
};
var pe, fe, be;
N.parameters = {
  ...N.parameters,
  docs: {
    ...((pe = N.parameters) == null ? void 0 : pe.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Button',
    size: 'large'
  }
}`,
      ...((be = (fe = N.parameters) == null ? void 0 : fe.docs) == null
        ? void 0
        : be.source),
    },
  },
};
var ge, me, he;
L.parameters = {
  ...L.parameters,
  docs: {
    ...((ge = L.parameters) == null ? void 0 : ge.docs),
    source: {
      originalSource: `{
  args: {
    size: 'small',
    label: 'Button',
    onClick: () => {
      window.console.log('Button clicked!');
    }
  }
}`,
      ...((he = (me = L.parameters) == null ? void 0 : me.docs) == null
        ? void 0
        : he.source),
    },
  },
};
const fr = ['Primary', 'Secondary', 'Large', 'Small'];
export {
  N as Large,
  G as Primary,
  E as Secondary,
  L as Small,
  fr as __namedExportsOrder,
  pr as default,
};
