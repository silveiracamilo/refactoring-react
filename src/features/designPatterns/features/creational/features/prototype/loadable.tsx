import { lazyLoad } from '@/shared/utils/loadable';

export const PrototypePage = lazyLoad(
  () => import('.'),
  module => module.PrototypePage,
);
