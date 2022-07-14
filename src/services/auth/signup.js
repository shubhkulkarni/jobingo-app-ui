import { post } from "../services.config";

export const signup = async (data) => {
  return await post("/signup", data);
};
