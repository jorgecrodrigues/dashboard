import Sidebar from "./shared/components/Sidebar";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => Sidebar,
    main: () => "Home",
  },
  {
    path: "/bubblegum",
    sidebar: () => Sidebar,
    main: () => "Bubblegum",
  },
  {
    path: "/shoelaces",
    sidebar: () => Sidebar,
    main: () => "Shoelaces",
  },
];

export default routes;
