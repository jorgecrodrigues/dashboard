import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, theme, Box } from "@chakra-ui/react";
import Sidebar from "./shared/components/Sidebar";
import { ColorModeSwitcher } from "./shared/components/ColorModeSwitcher";
import { sidebarMenuModeStorageManager } from "./storage-manager";

// Pages
const Home = lazy(() => import("./features/Home"));
const Dashboard = lazy(() => import("./features/Dashboard"));
const About = lazy(() => import("./features/About"));
// Storage Manager
const sidebarMenuMode = sidebarMenuModeStorageManager.get("expanded");

export const App = () => {
  const [
    sidebarWidthDimension,
    setSidebarWidthDimension,
  ] = React.useState<number>(0);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Sidebar
          expanded={sidebarMenuMode === "expanded"}
          onDimension={(w: number): void => {
            setSidebarWidthDimension(w);
          }}
        />
        <Box ml={`${sidebarWidthDimension}px`} px={5}>
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<div />}>
                <Home />
              </Suspense>
            </Route>
            <Route exact path="/dashboard">
              <Suspense fallback={<div />}>
                <Dashboard />
              </Suspense>
            </Route>
            <Route path="/about">
              <Suspense fallback={<div />}>
                <About />
              </Suspense>
            </Route>
          </Switch>
        </Box>
        <ColorModeSwitcher right={4} bottom={5} position="fixed" />
      </Router>
    </ChakraProvider>
  );
};
