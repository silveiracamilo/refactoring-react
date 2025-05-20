import { lazyLoad } from 'shared/utils/loadable';

export const CreationalPage = lazyLoad(
  () => import('.'),
  module => module.CreationalPage,
);
