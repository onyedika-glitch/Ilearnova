import SignIn from "views/auth/SignIn";
import Dashboard from "views/admin/Dashboard";

const routes = [
  {
    path: "sign-in",
    component: <SignIn />,
    layout: "/auth",
  },
  {
    path: "dashboard",
    component: <Dashboard />,
    layout: "/admin",
  },
  // Add more routes as needed
];

export default routes;