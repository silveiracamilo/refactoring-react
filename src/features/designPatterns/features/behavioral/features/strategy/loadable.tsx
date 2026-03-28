import { lazyLoad } from '@/shared/utils/loadable';

export const StrategyPage = lazyLoad(
  () => import('.'),
  module => module.StrategyPage,
);
