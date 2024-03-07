import Fundamental from "./Fundamental";
import { Horizonbar } from "./Horizonbar";
import { getFormattedDate } from "../../../utils";
import { ApiResponse } from "../../../types";

export default function Performance(props:{data: ApiResponse<`/coins/${string}`>;}) {
  const {data} = props;
  const athFormattedDate = getFormattedDate(data?.market_data?.ath_date?.usd);
  const atlFormattedDate = getFormattedDate(data?.market_data?.atl_date?.usd);

  console.log(data);
  return (
    <section className="flex flex-col justify-center items-start bg-foreground rounded-xl p-6 gap-2 w-full">
      <h3 className="text-[25px] font-semibold text-black">Performance</h3>
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <Horizonbar
          lowtitle={"Today's Low"}
          lowvalue={"46,930.22"}
          hightitle={"Today's High"}
          highvalue={"49,343.83"}
        />
        <Horizonbar
          lowtitle={"52W Low"}
          lowvalue={"16,930.22"}
          hightitle={"52W High"}
          highvalue={"49,743.83"}
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        <h2 className="text-[20px] font-medium text-gray mt-2 ">
          Fundamentals
        </h2>
        <div className=" flex justify-center items-center w-4 h-4 rounded-full text-[10px] bg-gray text-foreground ">
          i
        </div>
      </div>
      <div className="flex mobile:flex-col justify-between mobile:gap-4 gap-8 items-start w-full">
        <div className="flex flex-col justify-evenly items-center gap-4  mobile:w-full w-1/2 ">
          <Fundamental
            title={"Bitcoin Price"}
            value={"$" + data?.market_data?.current_price?.usd.toLocaleString()}
          />
          <Fundamental
            title={"24h Low / 24h High"}
            value={
              "$" +
              data?.market_data?.low_24h?.usd.toLocaleString() +
              " / " +
              "$" +
              data?.market_data?.high_24h?.usd.toLocaleString()
            }
          />
          <Fundamental
            title={"7d Low / 7d High"}
            value={
              "$" +
              data?.market_data?.low_24h?.usd.toLocaleString() +
              " / " +
              "$" +
              data?.market_data?.high_24h?.usd.toLocaleString()
            }
          />
          <Fundamental
            title={"Trading Volume"}
            value={"$" + data?.market_data?.total_volume?.usd.toLocaleString()}
          />
          <Fundamental
            title={"Market Cap Rank"}
            value={"#" + data?.market_cap_rank}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mobile:w-full w-1/2 ">
          <Fundamental
            title={"Market Cap"}
            value={"$" + data?.market_data?.market_cap?.usd.toLocaleString()}
          />
          <Fundamental
            title={"Market Cap Dominance"}
            value={
              data?.market_data?.market_cap_change_percentage_24h.toFixed(2) +
              "%"
            }
          />
          <Fundamental
            title={"Volume / Market Cap"}
            value={(
              data?.market_data?.total_volume?.usd /
              data?.market_data?.market_cap?.usd
            )
              .toFixed(4)
              .toString()}
          />
          <Fundamental
            title={"All-Time High"}
            value={
              "$" +
              data?.market_data?.ath?.usd +
              "|" +
              data?.market_data?.ath_change_percentage?.usd.toFixed(1) +
              "%" +
              "| " +
              athFormattedDate
            }
          />
          <Fundamental
            title={"All-Time Low"}
            value={
              "$" +
              data?.market_data?.atl?.usd +
              "|" +
              data?.market_data?.atl_change_percentage?.usd.toFixed(1) +
              "%" +
              "| " +
              atlFormattedDate
            }
          />
        </div>
      </div>
    </section>
  );
}
