import { lazyLoad } from '@/shared/utils/loadable';

export const FlyweightPage = lazyLoad(
  () => import('.'),
  module => module.FlyweightPage,
);
