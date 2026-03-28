import { lazyLoad } from '@/shared/utils/loadable';

export const CommandPage = lazyLoad(
  () => import('.'),
  module => module.CommandPage,
);
