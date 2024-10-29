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
import Koidangban from "./Components/Koikygui";
import Spinner from "./An/Components/Spinner";
import DashBoard from "./An/Pages/DashBoard";
import Home from "./Home";
import Login from "./Login";
import LoginPage from "./An/Pages/Login";
import OrderPage from "./Components/OrderPage";
import TrackingOrderPage from "./Components/trackingOrderPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Components/Profile";
import DonKyGuiPage from "./Components/Donkygui";
import NguonGocCuaIKoi from "./Components/Nguongoccuaikoi";
import GioiThieuVeKoiViet from "./Components/GioiThieuVeKoiViet";
import GioiThieuVeKoiNhat from "./Components/GioiThieuVeKoiNhat";
import GioiThieuVeKoiF1 from "./Components/GioitThieuVeKoiF1";
import OrderingIKoi from "./Components/OrderingIKoi";
import OrderingJapanKoi from "./Components/OrderingJapanKoi";
import changePassword from "./Components/ChangePassword";

const Staff = lazy(() => import("../src/An/Pages/Staff"));
const Manager = lazy(() => import("./An/Pages/Manager/Manager"));
// const Profiles = lazy(() => import("../src/An/Pages/Staff/Profiles"));
const Orders = lazy(() => import("../src/An/Pages/Staff/Orders"));
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import style cho toast
import ShoppingCart from "./Components/ShoppingCart";
import ResetPassword from "./An/Components/resetpassword";
import ManageKoi from "./An/Pages/Manager/ManageKoi";
import ManageSupplier from "./An/Pages/Manager/ManageSupplier";
import ChangePassword from "./Components/ChangePassword";
import FormFillInformation from "./Components/FormFillInformation";
import Chart from "./An/Pages/Charts/Charts";
import PaymentMethod from "./Components/Paymentmethod";
import ManageInvoices from "./An/Pages/Manager/ManageInvoices";
import Profiles from "./An/Ant Design/Pages/Profiles";
import AnTopBar from "./An/Ant Design/Components/ANTDTopbar";
import Locakoinhapkhau from "./Components/LoCaKoiNhapKhau";
import Consigns from "./An/Ant Design/Pages/Consigns";
import Invoices from "./An/Ant Design/Pages/Invoices";
import Suppliers from "./An/Ant Design/Pages/Suppliers";
import CaKoiNhat from "./Components/CaKoiNhat";
import OrdersNext from "./An/Ant Design/Pages/Orders";
import Kois from "./An/Ant Design/Pages/Kois";
const router = createBrowserRouter([
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
    path: "/koidangban",
    element: <Koidangban />,
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
    path: "/order",
    element: <OrderPage />, // Home component
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/trackingorder",
    element: <TrackingOrderPage />, // Home component
  },
  {
    path: "/profile",
    element: <Profile />, // Home component
  },
  {
    path: "/donkygui",
    element: <DonKyGuiPage />, // Home component
  },
  {
    path: "/nguongocIKoi",
    element: <NguonGocCuaIKoi />, // Home component
  },
  {
    path: "/gioithieuvekoiviet",
    element: <GioiThieuVeKoiViet />, // Home component
  },
  {
    path: "/gioithieuvekoinhat",
    element: <GioiThieuVeKoiNhat />, // Home component
  },
  {
    path: "/gioithieuvekoif1",
    element: <GioiThieuVeKoiF1 />,
  },
  {
    path: "/gioithieuvekoiviet",
    element: <GioiThieuVeKoiViet />,
  },
  {
    path: "/orderingikoi",
    element: <OrderingIKoi />,
  },
  {
    path: "/orderingjapankoi",
    element: <OrderingJapanKoi />,
  },
  {
    path: "/changepassword",
    element: <ChangePassword />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
  },
  {
    path: "/formfillinformation",
    element: <FormFillInformation />,
  },
  {
    path: "/paymentmethod",
    element: <PaymentMethod />,
  },
  {
    path: "/cakoinhat",
    element: <CaKoiNhat />,
  },

  {
    path: "/NewDashboard",
    element: <AnTopBar />,
    children: [
      {
        path: "staff/Profiles",
        element: <Profiles />,
      },
      {
        path: "staff/Consigns",
        element: <Consigns />,
      },
      {
        path: "staff/Invoices",
        element: <Invoices />,
      },
      {
        path: "staff/Suppliers",
        element: <Suppliers />,
      },
      {
        path: "staff/Orders",
        element: <OrdersNext />,
      }
    ],
  },
  {
    path: "/lonhapkhau",
    element: <Locakoinhapkhau />,
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
        path: "staff/Report/:chartType",
        element: (
          <Suspense fallback={<Spinner />}>
            <Chart />
          </Suspense>
        ),
      },
      {
        path: "manager/ManageInvoices",
        element: (
          <Suspense fallback={<Spinner />}>
            <ManageInvoices />
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
      {
        path: "manager/ManageSupplier",
        element: (
          <Suspense fallback={<Spinner />}>
            <ManageSupplier />
          </Suspense>
        ),
      },
      {
        path: "manager/ManageKoi",
        element: (
          <Suspense fallback={<Spinner />}>
            <ManageKoi />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
