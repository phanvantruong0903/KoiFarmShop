import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Koikohaku from "./Components/Koi/Koikohaku";
import Koiogon from "./Components/Koi/Koiogon";
import Koishowa from "./Components/Koi/Koishowa";
import Koitancho from "./Components/Koi/Koitancho";
import Koibekko from "./Components/Koi/Koibekko";
import Koidoitsu from "./Components/Koi/Koidoitsu";
import Koiginrin from "./Components/Koi/Koiginrin";
import Koigoshiki from "./Components/Koi/Koigoshiki";
import Koibenigoi from "./Components/Koi/Koibenigoi";
import Gioithieu from "./Components/Gioithieu";
import Gioithieusankygui from "./Components/Gioithieusankygui";
import Koiasagi from "./Components/Koi/Koiasagi";
import Koishusui from "./Components/Koi/Koishusui";
import Koiplatinum from "./Components/Koi/Koiplatinum";
import Lienhe from "./Components/Lienhe";
import Kienthuckoi from "./Components/Kienthuckoi";
import Koikygui from "./Components/Koikygui";
import Spinner from "./An/Components/Spinner";
import DashBoard from "./An/Pages/DashBoard";
import Home from "./Home";
import Login from "./Login";
import LoginPage from "./An/Pages/Login";

const Staff = lazy(() => import('../src/An/Pages/Staff'));
const Manager = lazy(() => import('../src/An/Pages/Manager'));
const Profiles = lazy(() => import("../src/An/Pages/Staff/Profiles"));
const Orders = lazy(() => import("../src/An/Pages/Staff/Orders"));

const router = createBrowserRouter([
  {
    path: "/kohaku",
    element: <Koikohaku />,
  },
  {
    path: "/ogon",
    element: <Koiogon />,
  },
  {
    path: "/showa",
    element: <Koishowa />,
  },
  {
    path: "/tancho",
    element: <Koitancho />,
  },
  {
    path: "/bekko",
    element: <Koibekko />,
  },
  {
    path: "/doitsu",
    element: <Koidoitsu />,
  },
  {
    path: "/ginrin",
    element: <Koiginrin />,
  },
  {
    path: "/goshiki",
    element: <Koigoshiki />,
  },
  {
    path: "/benigoi",
    element: <Koibenigoi />,
  },
  {
    path: "/asagi",
    element: <Koiasagi />,
  },
  {
    path: "/shusui",
    element: <Koishusui />,
  },
  {
    path: "/platinum",
    element: <Koiplatinum />,
  },
  {
    path: "/gioithieu",
    element: <Gioithieu />,
  },
  {
    path: "/gioithieusankygui",
    element: <Gioithieusankygui />,
  },
  {
    path: "/lienhe",
    element: <Lienhe />,
  },
  {
    path: "/kienthuckoi",
    element: <Kienthuckoi />,
  },
  {
    path: "/kygui",
    element: <Gioithieusankygui />,
  },
  {
    path: "/koikygui",
    element: <Koikygui />,
  },
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
        path: "manager",
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
