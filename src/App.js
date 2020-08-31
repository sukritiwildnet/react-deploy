import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import SignIn from "./Components/Signin.js";
import {
  Dashboard as DashboardView,
  // ProductList as ProductListView,
  // UserList as UserListView,
  // Typography as TypographyView,
  // Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  // SignUp as SignUpView,
  // NotFound as NotFoundView,
} from "./Components/views";
import RouteWithLayout from "./Components/RouteWithLayout";
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
} from "./Components/layouts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <div>
          {/* <Route exact path="/" component={SignIn} /> */}
          <RouteWithLayout
            component={SignIn}
            exact
            layout={MinimalLayout}
            path="/"
          />
          <RouteWithLayout
            component={DashboardView}
            exact
            layout={MainLayout}
            path="/dashboard"
          />
          <RouteWithLayout
            component={AccountView}
            exact
            layout={MainLayout}
            path="/account"
          />
          <RouteWithLayout
            component={SettingsView}
            exact
            layout={MainLayout}
            path="/settings"
          />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
