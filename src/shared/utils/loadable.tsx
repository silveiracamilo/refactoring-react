import React, { lazy, Suspense, type JSX } from "react";
import LoadingSpin from "../components/loading/LoadingSpin";

type Opts = {
  fallback: React.ReactNode;
}

type ModuleWithDefault<TProps extends object> = {
  default: React.ComponentType<TProps>;
};

export const lazyLoad = <TProps extends object, TModule = unknown>(
  importFunc: () => Promise<ModuleWithDefault<TProps> | TModule>,
  selectorOrOpts?: ((module: TModule) => React.ComponentType<TProps>) | Opts,
  opts: Opts = { fallback: <LoadingSpin /> }
) => {
  const selector =
    typeof selectorOrOpts === "function" ? selectorOrOpts : undefined;
  const resolvedOpts: Opts = selector
    ? opts
    : (selectorOrOpts ?? opts) as Opts;

  const lazyFactory = () =>
    importFunc().then((module) => {
      if (selector) {
        return { default: selector(module as TModule) };
      }

      return module as ModuleWithDefault<TProps>;
    });

  const LazyComponent = lazy(lazyFactory);

  return (props: TProps): JSX.Element => (
    <Suspense fallback={resolvedOpts.fallback}>
      {React.createElement(LazyComponent, props)}
    </Suspense>
  );
};
