import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type ComponentType,
  type MouseEvent,
  type ReactNode,
} from "react";

type HeadMeta = {
  title?: string;
  name?: string;
  property?: string;
  content?: string;
  charSet?: string;
};

type RouteOptions = {
  component?: ComponentType;
  notFoundComponent?: ComponentType;
  errorComponent?: ComponentType<{ error: Error; reset: () => void }>;
  head?: () => { meta?: HeadMeta[] };
};

type RouteRecord = {
  id?: string;
  path: string;
  fullPath?: string;
  options: RouteOptions;
  children?: Record<string, RouteRecord>;
  update: (values: Partial<RouteRecord>) => RouteRecord;
  _addFileChildren: (children: Record<string, RouteRecord>) => RouteRecord;
  _addFileTypes: <T>() => RouteRecord;
};

type Router = {
  routeTree: RouteRecord;
  navigate: (to: string) => void;
  getPath: () => string;
};

type RouterContextValue = {
  currentPath: string;
  currentRoute?: RouteRecord;
  navigate: (to: string) => void;
  invalidate: () => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);
const OutletContext = createContext<ReactNode>(null);

function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  return path.replace(/\/+$/, "");
}

function makeRoute(path: string, options: RouteOptions): RouteRecord {
  const route: RouteRecord = {
    path,
    fullPath: path,
    options,
    update(values) {
      return Object.assign(route, values);
    },
    _addFileChildren(children) {
      route.children = children;
      return route;
    },
    _addFileTypes() {
      return route;
    },
  };

  return route;
}

function findRoute(routeTree: RouteRecord, pathname: string) {
  const path = normalizePath(pathname);
  const routes = Object.values(routeTree.children ?? {});
  return routes.find((route) => normalizePath(route.fullPath ?? route.path) === path);
}

function applyRouteHead(routeTree: RouteRecord, route?: RouteRecord) {
  const meta = [...(routeTree.options.head?.().meta ?? []), ...(route?.options.head?.().meta ?? [])];
  const title = [...meta].reverse().find((item) => item.title)?.title;
  const description = [...meta].reverse().find((item) => item.name === "description")?.content;

  if (title) document.title = title;

  if (description) {
    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = description;
  }
}

export function createFileRoute(path: string) {
  return (options: RouteOptions) => makeRoute(path, options);
}

export function createRootRoute() {
  return (options: RouteOptions) => makeRoute("/", options);
}

export function createRouter({ routeTree }: { routeTree: RouteRecord; [key: string]: unknown }): Router {
  return {
    routeTree,
    navigate(to: string) {
      window.history.pushState({}, "", to);
      window.dispatchEvent(new PopStateEvent("popstate"));
    },
    getPath() {
      return window.location.pathname;
    },
  };
}

export function RouterProvider({ router }: { router: Router }) {
  const [currentPath, setCurrentPath] = useState(router.getPath());

  useEffect(() => {
    const syncPath = () => setCurrentPath(router.getPath());
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, [router]);

  const currentRoute = findRoute(router.routeTree, currentPath);
  const RootComponent = router.routeTree.options.component;
  const PageComponent = currentRoute?.options.component ?? router.routeTree.options.notFoundComponent;
  const outlet = PageComponent ? <PageComponent /> : null;

  useEffect(() => {
    applyRouteHead(router.routeTree, currentRoute);
  }, [currentRoute, router.routeTree]);

  const value = useMemo<RouterContextValue>(
    () => ({
      currentPath,
      currentRoute,
      navigate: router.navigate,
      invalidate: () => setCurrentPath(router.getPath()),
    }),
    [currentPath, currentRoute, router],
  );

  return (
    <RouterContext.Provider value={value}>
      <OutletContext.Provider value={outlet}>{RootComponent ? <RootComponent /> : outlet}</OutletContext.Provider>
    </RouterContext.Provider>
  );
}

export function Outlet() {
  return <>{useContext(OutletContext)}</>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used within RouterProvider");
  return ctx;
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  activeProps?: { className?: string };
  activeOptions?: { exact?: boolean };
};

export function Link({ to, activeProps, activeOptions, className, onClick, ...props }: LinkProps) {
  const router = useRouter();
  const current = normalizePath(router.currentPath);
  const target = normalizePath(to);
  const active = activeOptions?.exact ? current === target : current === target || current.startsWith(`${target}/`);
  const mergedClassName = active && activeProps?.className ? [className, activeProps.className].filter(Boolean).join(" ") : className;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    router.navigate(to);
  }

  return <a href={to} className={mergedClassName} onClick={handleClick} {...props} />;
}

export interface Register {}
