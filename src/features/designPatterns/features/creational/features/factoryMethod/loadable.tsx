import { lazyLoad } from '@/shared/utils/loadable';

export const FactoryMethodPage = lazyLoad(
  () => import('.'),
  module => module.FactoryMethodPage,
);
