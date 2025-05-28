import { lazyLoad } from '@/shared/utils/loadable';

export const DecoratorPage = lazyLoad(
  () => import('.'),
  module => module.DecoratorPage,
);
