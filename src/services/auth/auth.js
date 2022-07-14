const { get } = require("../services.config");
export const authStatus = async () => {
  return await get("/auth");
};
