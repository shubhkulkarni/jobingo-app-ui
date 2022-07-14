import { useLocation } from "react-router-dom";
import Constants from "../../constants";
import Content from "./Content";
import HeroFooter from "./Footer";
import "./Hero.css";
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";

const Hero = () => {
  const route = useLocation();
  const SignInLocation = route.pathname === Constants.SIGNIN_PATH;
  const SignUpLocation = route.pathname === Constants.SIGNUP_PATH;
  return (
    <div className="hero-main flex flex-col justify-between h-screen overflow-y-auto overflow-x-clip">
      <Navbar type={route.pathname} />
      <div className="content-grid grid place-items-center ">
        <div className="hero-content flex-col-reverse md:flex-row flex md:justify-center items-center w-full">
          <Content type={route.pathname} />
          {SignInLocation && <Login />}
          {SignUpLocation && <Signup />}
        </div>
      </div>
      <HeroFooter />
    </div>
  );
};

export default Hero;
