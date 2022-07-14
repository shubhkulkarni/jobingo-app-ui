import Constants from "../../constants";
import "./Hero.css";
import { Button } from "@vechaiui/react";
import Navbar from "./Navbar";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const PriceCard = ({ selected, onClick, type }) => {
  const selectedStyles = selected ? `bg-white rounded` : ``;

  const prices = {
    SILVER: { price: 0, benefits: "No subscription needed" },
    GOLD: { price: 99, benefits: "Premium services & exposure" },
    PLATINUM: {
      price: 199,
      benefits: `Highest ranking of your profile`
    }
  };
  return (
    <button
      onClick={onClick}
      className={`priceCard border border-transparent cursor-pointer rounded hover:border-blue-200 w-40 flex flex-col items-center justrify-start mx-2 p-4 py-6 ${selectedStyles}`}
    >
      <div className="priceIcon h-10">
        <img
          src={Constants[type + "_URL"]}
          alt={type}
          className="h-full mb-2"
        />
      </div>
      <div className="priceLabel text-black font-bold">{type}</div>
      <div className="priceNum text-blue-900 text-3xl mt-6 font-bold">
        {prices[type].price}
      </div>
      <div className="mr-2 text-sm text-blue-600 ">₹ / month</div>
      <div className="border-b border-gray-300 w-full my-4"></div>
      <div className="text-center text-gray-800">{prices[type].benefits}</div>
      <div className="">
        <Link to={Constants.PAGE_NOT_FOUND}>
          <Button
            color="primary"
            variant="solid"
            className={selected ? `w-full mt-4` : `w-full mt-4 invisible`}
            type="button"
          >
            Select
          </Button>
        </Link>
      </div>
    </button>
  );
};

const Pricing = () => {
  const [plan, setPlan] = useState(Constants.GOLD);
  const onCardClick = useCallback((type) => {
    return () => setPlan(type);
  }, []);
  return (
    <div className="flex flex-col justify-between h-screen bg-slate-100 overflow-y-auto overflow-x-clip">
      <Navbar type={Constants.SIGNUP_PATH} />
      <div className="jobingoPricing h-full flex items-center justify-center">
        <div className="">
          <h1 className="text-center text-xl mt-12 md:text-4xl md:mt-0 text-blue-900 font-bold mb-4">
            Choose your plan
          </h1>
          <h2 className="text-center text-gray-600 text-blue-600 mb-10">
            Pay as you enjoy. No credit card required. You can cancel anytime.
          </h2>
          <div className="flex items-center justify-center flex-wrap">
            <PriceCard
              type={Constants.SILVER}
              onClick={onCardClick(Constants.SILVER)}
              selected={plan === Constants.SILVER}
            />
            <PriceCard
              type={Constants.GOLD}
              onClick={onCardClick(Constants.GOLD)}
              selected={plan === Constants.GOLD}
            />
            <PriceCard
              type={Constants.PLATINUM}
              onClick={onCardClick(Constants.PLATINUM)}
              selected={plan === Constants.PLATINUM}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
