import { lazyLoad } from '@/shared/utils/loadable';

export const IteratorPage = lazyLoad(
  () => import('.'),
  module => module.IteratorPage,
);
