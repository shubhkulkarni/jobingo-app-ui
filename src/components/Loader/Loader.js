import { Spinner } from "@vechaiui/react";

const Loader = () => {
  return (
    <div className="loader-main bg-white text-md grid place-items-center h-screen">
      <div className="loader flex flex-col items-center">
        <Spinner className="text-sky-500" size="xl" />
        <div className="mt-2 text-black font-semibold">Almost there...</div>
      </div>
    </div>
  );
};

export default Loader;
