import { useDocTitle } from "../../utils/hooks";
import Appbar from "./Appbar";

const Home = () => {
  useDocTitle("Home");
  return (
    <div className="home-page-main bg-white  h-screen bg-slate-100">
      <Appbar />
      <div className=""></div>
    </div>
  );
};

export default Home;
