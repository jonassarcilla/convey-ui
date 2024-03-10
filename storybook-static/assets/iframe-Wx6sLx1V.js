function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      './Button.stories-DEf7bax9.js',
      './jsx-runtime-CKrituN3.js',
      './index-CBqU2yxZ.js',
      './_commonjsHelpers-BosuxZz1.js',
      './Button.stories-Bke4nAK7.js',
      './Button-Co2Qoq0-.js',
      './Button-BfyGbg8N.css',
      './Configure-C1LkQ7MV.js',
      './index-BCEiXYxq.js',
      './index-BtM5VmRH.js',
      './index-Bw8VTzHM.js',
      './index-Cmc67Rxs.js',
      './index-DrFu-skq.js',
      './index-DI5IigMn.js',
      './Header.stories-D7mOLZu8.js',
      './Header-C5yX4MSU.js',
      './Header-BjLH3naM.css',
      './Page.stories-DeJLIoo0.js',
      './Page-B9ntr4df.css',
      './entry-preview-fAjVL9W4.js',
      './react-18-D8cruF67.js',
      './entry-preview-docs-CfnZZqCs.js',
      './preview-B_0crF9I.js',
      './preview-D8VCGkL0.js',
      './preview-BcxrGG1y.js',
      './preview-BAz7FMXc.js',
      './preview-CDTsxpVA.js',
      './preview-BVM7IB9A.js',
      './preview-CoGRliJ2.css',
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import '../sb-preview/runtime.js';
(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) c(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === 'childList')
        for (const r of t.addedNodes)
          r.tagName === 'LINK' && r.rel === 'modulepreload' && c(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (t.credentials = 'include')
        : e.crossOrigin === 'anonymous'
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
      t
    );
  }
  function c(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = s(e);
    fetch(e.href, t);
  }
})();
const d = 'modulepreload',
  p = function (_, i) {
    return new URL(_, i).href;
  },
  O = {},
  o = function (i, s, c) {
    let e = Promise.resolve();
    if (s && s.length > 0) {
      const t = document.getElementsByTagName('link');
      e = Promise.all(
        s.map((r) => {
          if (((r = p(r, c)), r in O)) return;
          O[r] = !0;
          const l = r.endsWith('.css'),
            E = l ? '[rel="stylesheet"]' : '';
          if (!!c)
            for (let u = t.length - 1; u >= 0; u--) {
              const a = t[u];
              if (a.href === r && (!l || a.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${r}"]${E}`)) return;
          const n = document.createElement('link');
          if (
            ((n.rel = l ? 'stylesheet' : d),
            l || ((n.as = 'script'), (n.crossOrigin = '')),
            (n.href = r),
            document.head.appendChild(n),
            l)
          )
            return new Promise((u, a) => {
              n.addEventListener('load', u),
                n.addEventListener('error', () =>
                  a(new Error(`Unable to preload CSS for ${r}`))
                );
            });
        })
      );
    }
    return e
      .then(() => i())
      .catch((t) => {
        const r = new Event('vite:preloadError', { cancelable: !0 });
        if (((r.payload = t), window.dispatchEvent(r), !r.defaultPrevented))
          throw t;
      });
  },
  { createBrowserChannel: R } = __STORYBOOK_MODULE_CHANNELS__,
  { addons: f } = __STORYBOOK_MODULE_PREVIEW_API__,
  m = R({ page: 'preview' });
f.setChannel(m);
window.__STORYBOOK_ADDONS_CHANNEL__ = m;
window.CONFIG_TYPE === 'DEVELOPMENT' &&
  (window.__STORYBOOK_SERVER_CHANNEL__ = m);
const P = {
  './src/components/button/Button.stories.ts': async () =>
    o(
      () => import('./Button.stories-DEf7bax9.js'),
      __vite__mapDeps([0, 1, 2, 3]),
      import.meta.url
    ),
  './src/stories/Button.stories.ts': async () =>
    o(
      () => import('./Button.stories-Bke4nAK7.js'),
      __vite__mapDeps([4, 5, 1, 2, 3, 6]),
      import.meta.url
    ),
  './src/stories/Configure.mdx': async () =>
    o(
      () => import('./Configure-C1LkQ7MV.js'),
      __vite__mapDeps([7, 1, 2, 3, 8, 9, 10, 11, 12, 13]),
      import.meta.url
    ),
  './src/stories/Header.stories.ts': async () =>
    o(
      () => import('./Header.stories-D7mOLZu8.js'),
      __vite__mapDeps([14, 15, 1, 2, 3, 5, 6, 16]),
      import.meta.url
    ),
  './src/stories/Page.stories.ts': async () =>
    o(
      () => import('./Page.stories-DeJLIoo0.js'),
      __vite__mapDeps([17, 1, 2, 3, 15, 5, 6, 16, 18]),
      import.meta.url
    ),
};
async function T(_) {
  return P[_]();
}
const {
    composeConfigs: w,
    PreviewWeb: L,
    ClientApi: I,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  v = async () => {
    const _ = await Promise.all([
      o(
        () => import('./entry-preview-fAjVL9W4.js'),
        __vite__mapDeps([19, 2, 3, 20, 9]),
        import.meta.url
      ),
      o(
        () => import('./entry-preview-docs-CfnZZqCs.js'),
        __vite__mapDeps([21, 11, 3, 12, 2]),
        import.meta.url
      ),
      o(
        () => import('./preview-B_0crF9I.js'),
        __vite__mapDeps([22, 10]),
        import.meta.url
      ),
      o(
        () => import('./preview-D1lVxV1a.js'),
        __vite__mapDeps([]),
        import.meta.url
      ),
      o(
        () => import('./preview-D8VCGkL0.js'),
        __vite__mapDeps([23, 12]),
        import.meta.url
      ),
      o(
        () => import('./preview-BcxrGG1y.js'),
        __vite__mapDeps([24, 12]),
        import.meta.url
      ),
      o(
        () => import('./preview-Db4Idchh.js'),
        __vite__mapDeps([]),
        import.meta.url
      ),
      o(
        () => import('./preview-BAz7FMXc.js'),
        __vite__mapDeps([25, 12]),
        import.meta.url
      ),
      o(
        () => import('./preview-Cv3rAi2i.js'),
        __vite__mapDeps([]),
        import.meta.url
      ),
      o(
        () => import('./preview-CDTsxpVA.js'),
        __vite__mapDeps([26, 3]),
        import.meta.url
      ),
      o(
        () => import('./preview-BVM7IB9A.js'),
        __vite__mapDeps([27, 28]),
        import.meta.url
      ),
    ]);
    return w(_);
  };
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new L();
window.__STORYBOOK_STORY_STORE__ =
  window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ =
  window.__STORYBOOK_CLIENT_API__ ||
  new I({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({
  importFn: T,
  getProjectAnnotations: v,
});
export { o as _ };
