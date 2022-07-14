import { VechaiProvider } from "@vechaiui/react";
import React, { useCallback, useEffect, useState } from "react";
import useGlobal from "./global";
import Router from "./routes/Router";
import { theme } from "./theme/theme";
import "./index.css";
import { authStatus } from "./services/auth/auth";
import Loader from "./components/Loader/Loader";

function App() {
  const [state, actions] = useGlobal();
  const [loading, setLoading] = useState(true);

  const setAuthStatus = useCallback(async () => {
    try {
      const auth = await authStatus();
      setLoading(false);
      actions.setState("auth", auth.data);
    } catch (e) {
      setLoading(false);
      actions.setState("auth", false);
    }
  }, [actions]);

  useEffect(() => {
    setAuthStatus();
  }, [setAuthStatus]);
  return (
    <VechaiProvider theme={theme} colorScheme={state.theme}>
      <div className={state.theme}>{loading ? <Loader /> : <Router />}</div>
    </VechaiProvider>
  );
}

export default App;
