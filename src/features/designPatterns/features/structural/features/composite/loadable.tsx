import { lazyLoad } from '@/shared/utils/loadable';

export const CompositePage = lazyLoad(
  () => import('.'),
  module => module.CompositePage,
);
