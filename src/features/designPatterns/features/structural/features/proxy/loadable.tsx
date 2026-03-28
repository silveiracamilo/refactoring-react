import { lazyLoad } from '@/shared/utils/loadable';

export const ProxyPage = lazyLoad(
  () => import('.'),
  module => module.ProxyPage,
);
