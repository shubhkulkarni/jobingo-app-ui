import img404 from "../../assets/404.svg";
import { Button, Icon } from "@vechaiui/react";
import { UserIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="page-not bg-white grid place-items-center h-screen">
      <div className="text-center">
        <img
          src={img404}
          alt="page not found"
          className="max-h-64 not-fount-img"
        />
        <div className=" text-xl font-semibold page-notFound-text text-black mt-10">
          Sorry ! This page is could not be found.
        </div>
        <Link to="/signin">
          <Button
            leftIcon={
              <Icon as={UserIcon} label="gift" className="w-4 h-4 mr-1" />
            }
            color="primary"
            variant="solid"
            className="mt-4 "
          >
            Sign in
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
