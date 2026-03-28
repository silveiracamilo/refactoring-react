import { lazyLoad } from '@/shared/utils/loadable';

export const TemplateMethodPage = lazyLoad(
  () => import('.'),
  module => module.TemplateMethodPage,
);
