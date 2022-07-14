import { Navigate } from "react-router";
import Constants from "../constants";
import { loadLazy } from "../utils/loadLazy";
import SuspenseLoad from "../utils/SuspenseLoad";
const Hero = loadLazy("../pages/Hero/Hero");
const Pricing = loadLazy("../pages/Hero/Pricing");
const Home = loadLazy("../pages/Home/Home");
const PageNotFound = loadLazy("../pages/404/PageNotFound");

const authRoutes = [
  {
    path: Constants.PRICING_PATH,
    element: <SuspenseLoad Component={Pricing} />
  },
  {
    path: Constants.PAGE_NOT_FOUND,
    element: <SuspenseLoad Component={PageNotFound} />
  },
  { path: Constants.SIGNIN_PATH, element: <SuspenseLoad Component={Hero} /> },
  { path: Constants.SIGNUP_PATH, element: <SuspenseLoad Component={Hero} /> },
  { path: "*", element: <Navigate replace to={Constants.SIGNIN_PATH} /> }
];

const appRoutes = [
  { path: Constants.HOME_PATH, element: <SuspenseLoad Component={Home} /> },
  { path: "*", element: <Navigate replace to={Constants.HOME_PATH} /> }
];
const AppRoutes = { authRoutes, appRoutes };
export default AppRoutes;
