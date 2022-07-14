import { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import useGlobal from "../global";
import AppRoutes from "./Router.config";
const { authRoutes, appRoutes } = AppRoutes;
const Router = () => {
  const [state, actions] = useGlobal();

  if (!state.auth) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            {authRoutes.map((route) => {
              return <Route {...route} key={route.path} />;
            })}
          </Routes>
        </BrowserRouter>
      </>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            {appRoutes.map((route) => {
              return <Route {...route} key={route.path} />;
            })}
          </Routes>
        </BrowserRouter>
      </>
    );
  }
};

export default Router;
