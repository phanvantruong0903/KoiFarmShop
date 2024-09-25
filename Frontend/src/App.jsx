import { Suspense,lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Spinner from "./An/Components/Spinner";
import DashBoard from "./An/Pages/DashBoard";
import Home from "./Home";
import Login from "./Login";
import LoginPage from "./An/Pages/Login";

const Staff = lazy(() => import('../src/An/Pages/Staff'));
const Manager = lazy(() => import('../src/An/Pages/Manager'));
const StaffLayOut = lazy(() => import("../src/An/Layouts/StaffLayOut"));
const ManagerLayOut = lazy(() => import("../src/An/Layouts/ManagerLayOut"));


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />, // Nguyen route setup tam thoi de v
  },
  {
    path: "/",
    element: <Home />, // Home component
  },
  {
    path: "/login/oauth",
    element: <Login />, // Nguyen route setup tam thoi de v
  },
  {
    path: "/DashBoard",
    element: <DashBoard />, //  DashBoard component
    children: [
      {
        path: "staff",
        element: (
          <Suspense fallback={<Spinner />}>
            <StaffLayOut />
          </Suspense>
        ),
        children: [
          {
            index: true, // Default route for "/DashBoard/staff"
            element: (
              <Suspense fallback={<Spinner />}>
                <Staff />
              </Suspense>
            ),
          },
        ],
      },
      
      {
        path: "manager",
        element: (
          <Suspense fallback={<Spinner />}>
            <ManagerLayOut />
          </Suspense>
        ),
        children: [
          {
            index: true, // Default route for "/DashBoard/manager"
            element: (
              <Suspense fallback={<Spinner />}>
                <Manager />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
