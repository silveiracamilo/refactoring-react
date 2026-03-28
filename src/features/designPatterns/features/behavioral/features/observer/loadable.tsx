import { lazyLoad } from '@/shared/utils/loadable';

export const ObserverPage = lazyLoad(
  () => import('.'),
  module => module.ObserverPage,
);
