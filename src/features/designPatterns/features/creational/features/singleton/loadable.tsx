import { lazyLoad } from '@/shared/utils/loadable';

export const SingletonPage = lazyLoad(
  () => import('.'),
  module => module.SingletonPage,
);
