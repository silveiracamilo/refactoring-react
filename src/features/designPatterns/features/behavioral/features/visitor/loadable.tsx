import { lazyLoad } from '@/shared/utils/loadable';

export const VisitorPage = lazyLoad(
  () => import('.'),
  module => module.VisitorPage,
);
