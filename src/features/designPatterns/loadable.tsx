import { lazyLoad } from 'shared/utils/loadable';

export const DesignPatternsPage = lazyLoad(
  () => import('.'),
  module => module.DesignPatternsPage,
);
