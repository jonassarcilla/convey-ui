function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      './DocsRenderer-NNNQARDV-Dpcp6NM9.js',
      './iframe-Wx6sLx1V.js',
      './index-CBqU2yxZ.js',
      './_commonjsHelpers-BosuxZz1.js',
      './react-18-D8cruF67.js',
      './index-BtM5VmRH.js',
      './index-BCEiXYxq.js',
      './index-Bw8VTzHM.js',
      './index-Cmc67Rxs.js',
      './index-DrFu-skq.js',
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import { _ as e } from './iframe-Wx6sLx1V.js';
import '../sb-preview/runtime.js';
var a = {
  docs: {
    renderer: async () => {
      let { DocsRenderer: r } = await e(
        () => import('./DocsRenderer-NNNQARDV-Dpcp6NM9.js'),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
        import.meta.url
      );
      return new r();
    },
  },
};
export { a as parameters };
