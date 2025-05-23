import { lazyLoad } from '@/shared/utils/loadable';

export const AdapterPage = lazyLoad(
  () => import('.'),
  module => module.AdapterPage,
);
