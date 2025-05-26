import { lazyLoad } from '@/shared/utils/loadable';

export const BridgePage = lazyLoad(
  () => import('.'),
  module => module.BridgePage,
);
