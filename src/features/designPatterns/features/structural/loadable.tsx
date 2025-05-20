import { lazyLoad } from 'shared/utils/loadable';

export const StructuralPage = lazyLoad(
  () => import('.'),
  module => module.StructuralPage,
);
