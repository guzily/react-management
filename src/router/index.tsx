import React, { lazy } from "react";
import { Children } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));
const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));
const Login = lazy(() => import("../views/login"));

const withLoading = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
);

const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: withLoading(<Page1 />)
      },
      {
        path: "/page2",
        element: withLoading(<Page2 />)
      }
    ]
  },
  {
    path: "/about",
    element: withLoading(<About />)
  },
  {
    path: "/login",
    element: <Login />
  }
];

export default routes;
