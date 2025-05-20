import { lazyLoad } from 'shared/utils/loadable';

export const BehavioralPage = lazyLoad(
  () => import('.'),
  module => module.BehavioralPage,
);
