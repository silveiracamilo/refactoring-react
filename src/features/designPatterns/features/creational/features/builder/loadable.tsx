import { lazyLoad } from 'shared/utils/loadable';

export const BuilderPage = lazyLoad(
  () => import('.'),
  module => module.BuilderPage,
);
