import React, { Suspense } from "react";
import Loader from "../components/Loader/Loader";

const SuspenseLoad = ({ Component, props = {} }) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default SuspenseLoad;
