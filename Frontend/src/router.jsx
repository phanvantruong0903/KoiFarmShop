import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login/oauth",
    element: <Login />,
  },
  {
    path: "/koikohaku",
    element: <Koikohaku />,
  },
  {
    path: "/koiogon",
    element: <Koiogon />,
  },
  {
    path: "/koishowa",
    element: <Koishowa />,
  },
  {
    path: "/koitancho",
    element: <Koitancho />,
  },
  {
    path: "/koibekko",
    element: <Koibekko />,
  },
  {
    path: "/koidoitsu",
    element: <Koidoitsu />,
  },
  {
    path: "/koiginrin",
    element: <Koiginrin />,
  },
  {
    path: "/koigoshiki",
    element: <Koigoshiki />,
  },
  {
    path: "/koibenigoi",
    element: <Koibenigoi />,
  },
  {
    path: "/gioithieu",
    element: <Gioithieu />,
  },
  {
    path: "/gioithieusankygui",
    element: <Gioithieusankygui />,
  },
]);

export default router;
