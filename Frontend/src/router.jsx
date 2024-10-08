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
import Koiasagi from "./Components/Koi/Koiasagi";
import Koishusui from "./Components/Koi/Koishusui";
import Koiplatinum from "./Components/Koi/Koiplatinum";
import Lienhe from "./Components/Lienhe";
import Kienthuckoi from "./Components/Kienthuckoi";
import Koikygui from "./Components/Koikygui";
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
    element: <Gioithieu sankygui />,
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
]);

export default router;
