import { lazyLoad } from '@/shared/utils/loadable';

export const FacadePage = lazyLoad(
  () => import('.'),
  module => module.FacadePage,
);
