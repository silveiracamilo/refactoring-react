import { lazyLoad } from '@/shared/utils/loadable';

export const MementoPage = lazyLoad(
  () => import('.'),
  module => module.MementoPage,
);
