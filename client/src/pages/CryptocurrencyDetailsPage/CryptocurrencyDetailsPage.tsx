import { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import useApiCall from "../../hooks/useApiCall";
import { deepCompare } from "../../utils";
import Getstarted from "./components/Getstarted";
import Team from "./components/Team";
import Tokenomics from "./components/Tokenomics";
import About from "./components/About";
import Sentiment from "./components/Sentiment";
import Performance from "./components/Performance";


export default function CryptocurrencyDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const info = useApiCall("/simple/price", {
    params: {
      ids: id,
      vs_currencies: "inr,usd",
      include_24hrs_change: true,
    },
  });

  useEffect(() => {
    if (info.data && deepCompare(info.data, {})) {
      navigate("/error");
    }
  }, [info.data]);

  return (
    <>
      <div className="flex flex-col justify-start items-start bg-background mobile:top-[80px] widescreen:top-[90px] paddingx w-full absolute mt-2">
        <div className="flex justify-center items-center gap-1">
          <p className="text-[14px] text-gray">Cryptocurrencies</p>
          <p className="text-[14px] text-black">Bitcoin</p>
        </div>
        <div className="flex mobile:flex-col justify-between mobile:gap-5 widescreen:gap-10 items-start w-full mt-3 ">
          <div className="flex flex-col widescreen:w-[65%] w-full gap-6">
            <Performance/>
            <Sentiment/>
            <About/>
            <Tokenomics/>
            <Team/>
          </div>
          <div className="flex widescreen:w-[35%] w-full">
            <Getstarted/>
          </div>
        </div>
      </div>
    </>
  );
}
