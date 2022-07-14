import "./Hero.css";
import logo from "../../assets/Jobingo.svg";
import { Button, Icon } from "@vechaiui/react";
import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/outline";
import MobileNav from "./MobileNav";
import Constants from "../../constants";
const Navbar = ({ type }) => {
  const SignInLocation = type === Constants.SIGNIN_PATH;
  return (
    <div className="w-screen bg-white dark:bg-gray-900 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        <Link to={Constants.SIGNIN_PATH}>
          <div className="logo pl-8">
            <img src={logo} alt="logo" className="h-6 md:h-8" />
          </div>
        </Link>
        <div className="hidden nav md:flex pr-8 text-gray-500 ">
          <div className="nav-item px-5 cursor-pointer">
            <Link to={Constants.PRICING_PATH}>
              <Button color="primary" variant="ghost">
                Pricing
              </Button>
            </Link>
          </div>
          {/* <div className="nav-item px-5 cursor-pointer">
            <Button color="primary" variant="ghost">
              About
            </Button>
          </div> */}
          <div className="nav-item pr-8 pl-5 cursor-pointer">
            <Link
              to={
                SignInLocation ? Constants.SIGNUP_PATH : Constants.SIGNIN_PATH
              }
            >
              <Button
                color="primary"
                variant="solid"
                leftIcon={
                  <Icon as={UserIcon} label="gift" className="w-4 h-4 mr-1" />
                }
              >
                {SignInLocation ? "Sign up" : "Sign in"}
              </Button>
            </Link>
          </div>
        </div>
        <div className="mobile-nav md:hidden pr-8 pl-5 cursor-pointer">
          <MobileNav location={SignInLocation} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
