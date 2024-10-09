import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Spinner from "./An/Components/Spinner";
import DashBoard from "./An/Pages/DashBoard";
import Home from "./Home";
import Login from "./Login";
import LoginPage from "./An/Pages/Login";

const Staff = lazy(() => import('../src/An/Pages/Staff'));
const Manager = lazy(() => import('./An/Pages/Manager/Manager'));
const Profiles = lazy(() => import("../src/An/Pages/Staff/Profiles"));
const Orders = lazy(() => import("../src/An/Pages/Staff/Orders"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />, // Temporary login route
  },
  {
    path: "/",
    element: <Home />, // Home component
  },
  {
    path: "/login/oauth",
    element: <Login />, // OAuth login route
  },
  {
    path: "/DashBoard",
    element: <DashBoard />, // DashBoard component
    children: [
      {
        path: "staff/Profiles",
        element: (
          <Suspense fallback={<Spinner />}>
            <Profiles /> {/* Profile component */}
          </Suspense>
        ),
      },
      {
        path: "staff/Orders",
        element: (
          <Suspense fallback={<Spinner />}>
            <Orders /> {/* Orders component */}
          </Suspense>
        ),
      },
      {
        path: "manager/Consign",
        element: (
          <Suspense fallback={<Spinner />}>
            <Manager /> {/* Manager component */}
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
