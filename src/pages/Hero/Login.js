import "./Hero.css";
import Navbar from "./Navbar";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useNotification
} from "@vechaiui/react";
import { useState } from "react";
import Constants from "../../constants";
import { Link } from "react-router-dom";
import { useDocTitle, useForm } from "../../utils/hooks";
import { signin } from "../../services/auth/signin";
import useGlobal from "../../global";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, actions] = useGlobal();
  const [loading, setLoading] = useState(false);
  const notification = useNotification();
  const [data, changeHandler] = useForm({ email: "", password: "" });
  useDocTitle("Sign in");

  const onSubmit = async () => {
    try {
      setLoading(true);
      const res = await signin(data);
      setLoading(false);
      if (res?.data?.status === "success") {
        actions.setState("auth", true);
      }
    } catch (e) {
      console.log(e.response.data.message);
      notification({
        title: "Signin error",
        description: JSON.stringify(e.response.data.message),
        status: "error",
        position: "bottom-right"
      });
      setLoading(false);
    }
  };
  return (
    <form className="glass-card text-white p-8 mt-10 md:mt-0 w-4/5 md:max-w-md md:w-2/5">
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input
          value={data["email"]}
          onChange={changeHandler("email")}
          type="email"
          placeholder="jon@gmail.com"
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
      <div className="forgot-pwd text-sm mt-1 text-blue-300 cursor-pointer">
        Forgot password ?
      </div>
      <FormControl id="password" className="mt-6">
        <Button
          loading={loading}
          loadingText="Signing in"
          color="primary"
          variant="solid"
          className="w-full"
          type="button"
          disabled={!data.email.trim() || !data.password.trim()}
          onClick={onSubmit}
        >
          Sign in
        </Button>
      </FormControl>
      <div className="forgot-pwd text-sm mt-2 text-blue-300 cursor-pointer">
        Don't have an account ?{" "}
        <Link to={Constants.SIGNUP_PATH}>
          <span className="sign-up text-white font-semibold">Sign up</span>
        </Link>
      </div>
    </form>
  );
};

export default Login;
