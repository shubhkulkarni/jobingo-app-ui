import "./Hero.css";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Button,
  useNotification
} from "@vechaiui/react";
import { useState } from "react";
import Constants from "../../constants";
import { Link } from "react-router-dom";
import { useDocTitle, useForm } from "../../utils/hooks";
import { signup } from "../../services/auth/signup";
import useGlobal from "../../global";

const Signup = () => {
  const [type, setType] = useState(Constants.USER);
  const [state, actions] = useGlobal();
  const [showPassword, setShowPassword] = useState(false);
  useDocTitle("Sign up");
  const isUser = type === Constants.USER;
  const isEmployer = type === Constants.EMPLOYER;
  const [loading, setLoading] = useState(false);
  const notification = useNotification();
  const [data, changeHandler, reset] = useForm({
    email: "",
    password: "",
    name: "",
    company: "",
    confirmPassword: ""
  });
  const disableBtn = isUser
    ? Object.entries({ ...data, company: "demo" }).some((i) => !i[1].length)
    : Object.entries(data).some((i) => !i[1].length);

  const onSubmit = async () => {
    try {
      setLoading(true);
      if (isUser) data.company = undefined;
      if (isEmployer) data.role = Constants.EMPLOYER;
      const res = await signup(data);
      setLoading(false);
      if (res?.data?.status === "success") {
        actions.setState("auth", true);
      }
    } catch (e) {
      notification({
        title: "Signup error",
        description: JSON.stringify(e.response.data.message),
        status: "error",
        position: "bottom-right"
      });
      setLoading(false);
    }
  };
  return (
    <div className="signup-page w-4/5 md:max-w-md md:w-2/5 mt-10 md:mt-0">
      <div className="tab-group mb-3 flex justify-start w-full">
        <button
          onClick={() => {
            reset();
            setType(Constants.USER);
          }}
          className={isUser ? "tab-btn" : "tab-btn-normal"}
          type="button"
        >
          Individual
        </button>
        <button
          onClick={() => {
            reset();
            setType(Constants.EMPLOYER);
          }}
          className={isEmployer ? "tab-btn" : "tab-btn-normal"}
          type="button"
        >
          Employer
        </button>
      </div>

      <form className="glass-card text-white p-8  ">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input
            value={data["name"]}
            onChange={changeHandler("name")}
            type="text"
            placeholder="ex. John Doe"
            className="placeholder-gray-200 text-white bg-transparent ring-0 border-0 bg-white bg-opacity-20"
          />
        </FormControl>
        {isEmployer && (
          <FormControl id="company" className="mt-5">
            <FormLabel>Company</FormLabel>
            <Input
              value={data["company"]}
              onChange={changeHandler("company")}
              type="text"
              placeholder="ex. ABC India PVT.LTD."
              className="placeholder-gray-200 text-white bg-transparent ring-0 border-0 bg-white bg-opacity-20"
            />
          </FormControl>
        )}
        <FormControl id="email" className="mt-5">
          <FormLabel>Email</FormLabel>
          <Input
            value={data["email"]}
            onChange={changeHandler("email")}
            type="email"
            placeholder="example@gmail.com"
            className="placeholder-gray-200 text-white bg-transparent ring-0 border-0 bg-white bg-opacity-20"
          />
        </FormControl>
        <FormControl id="password" className="mt-5">
          <FormLabel>Password</FormLabel>
          <Input.Group>
            <Input
              value={data["password"]}
              onChange={changeHandler("password")}
              type={showPassword ? "text" : "password"}
              className="placeholder-gray-200 text-white bg-transparent ring-0 border-0 bg-white bg-opacity-20"
            />
            <Input.RightElement className="w-16">
              <Button
                type="button"
                size="xs"
                variant="ghost"
                className="text-gray-200 hover:text-blue-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </Input.RightElement>
          </Input.Group>
        </FormControl>
        <FormControl id="confirm" className="mt-5">
          <FormLabel>Confirm password</FormLabel>
          <Input
            value={data["confirmPassword"]}
            onChange={changeHandler("confirmPassword")}
            type="password"
            className="placeholder-gray-200 text-white bg-transparent ring-0 border-0 bg-white bg-opacity-20"
          />
        </FormControl>

        <FormControl id="password" className="mt-6">
          <Link to={Constants.SIGNUP_PATH}>
            <Button
              loading={loading}
              loadingText="Signing up"
              color="primary"
              variant="solid"
              className="w-full"
              type="button"
              onClick={onSubmit}
              disabled={disableBtn}
            >
              Sign up
            </Button>
          </Link>
        </FormControl>
        <div className="forgot-pwd text-sm mt-2 text-blue-300 cursor-pointer">
          Already have an account ?{" "}
          <Link to={Constants.SIGNIN_PATH}>
            <span className="sign-up text-white font-semibold">Sign in</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
