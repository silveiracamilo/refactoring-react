import { lazyLoad } from '@/shared/utils/loadable';

export const ChainOfResponsibilityPage = lazyLoad(
  () => import('.'),
  module => module.ChainOfResponsibilityPage,
);
