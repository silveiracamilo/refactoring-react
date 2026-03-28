import { lazyLoad } from '@/shared/utils/loadable';

export const MediatorPage = lazyLoad(
  () => import('.'),
  module => module.MediatorPage,
);
