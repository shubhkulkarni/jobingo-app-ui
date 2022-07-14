import { post } from "../services.config";

export const signin = async (data) => {
  return await post("/signin", data);
};
