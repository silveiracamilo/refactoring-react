import { lazyLoad } from '@/shared/utils/loadable';

export const StatePage = lazyLoad(
  () => import('.'),
  module => module.StatePage,
);
