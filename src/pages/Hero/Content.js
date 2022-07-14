import "./Hero.css";
import { Button, Icon } from "@vechaiui/react";
import { UserIcon } from "@heroicons/react/outline";
import Constants from "../../constants";
import Typing from "react-typing-animation";
import { Link } from "react-router-dom";
const Content = ({ type }) => {
  const SignInLocation = type === Constants.SIGNIN_PATH;
  const msg = "The last step towards your Dream Job";

  return (
    <div className="max-w-lg mb-10 mt-10 md:mt-0 md:mb-0 md:pr-16 w-4/5 md:max-w-md md:w-2/5">
      <div className="content-main font-semibold text-4xl md:text-left text-white">
        <Typing speed={150}>{msg}</Typing>
      </div>
      <div className="content-sub text-lg text-blue-300 mt-4">
        Sign up now, to get started !
      </div>
      <Link to={SignInLocation ? Constants.SIGNUP_PATH : Constants.SIGNIN_PATH}>
        <Button
          leftIcon={
            <Icon as={UserIcon} label="gift" className="w-4 h-4 mr-1" />
          }
          color="primary"
          variant="solid"
          className="mt-4 "
        >
          {SignInLocation ? "Sign up" : "Sign in"}
        </Button>
      </Link>
    </div>
  );
};

export default Content;
