import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Auth from "layouts/Auth";
import Admin from "layouts/Admin";
import RTL from "layouts/RTL";
import routes from "routes.js";

const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    if (prop.layout === "/auth") {
      return <Route path={`/${prop.path}`} element={prop.component} key={key} />;
    } else if (prop.layout === "/admin") {
      return <Route path={`/${prop.path}`} element={prop.component} key={key} />;
    } else if (prop.layout === "/rtl") {
      return <Route path={`/${prop.path}`} element={prop.component} key={key} />;
    } else {
      return null;
    }
  });
};

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/auth/*" element={<Auth />}>
        {getRoutes(routes)}
      </Route>
      <Route path="/admin/*" element={<Admin />}>
        {getRoutes(routes)}
      </Route>
      <Route path="/rtl/*" element={<RTL />}>
        {getRoutes(routes)}
      </Route>
      <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);