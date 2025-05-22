import { lazyLoad } from '@/shared/utils/loadable';

export const AbstractFactoryPage = lazyLoad(
  () => import('.'),
  module => module.AbstractFactoryPage,
);
