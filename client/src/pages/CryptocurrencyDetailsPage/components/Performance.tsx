import Fundamental from "./Fundamental";
import { Horizonbar } from "./Horizonbar";


export default function Performance() {
    return (
      <section className="flex flex-col justify-center items-start bg-foreground rounded-xl p-6 gap-2 w-full">
        <h3 className="text-[25px] font-semibold text-black">Performance</h3>
        <div className="flex flex-col justify-center items-center w-full gap-4">
            <Horizonbar/>
            <Horizonbar/>
        </div>
        <div className="flex justify-center items-center gap-2">
            <h2 className="text-[20px] font-medium text-gray mt-2 ">Fundamentals</h2>
            <div className=" flex justify-center items-center w-4 h-4 rounded-full text-[10px] bg-gray text-foreground ">i</div>
        </div>
        <div className="flex mobile:flex-col justify-between mobile:gap-4 gap-8 items-start w-full">
            <div className="flex flex-col justify-center items-center gap-4 mobile:w-full w-1/2">
                <Fundamental/>
                <Fundamental/>
                <Fundamental/>
                <Fundamental/>
                <Fundamental/>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mobile:w-full w-1/2">
                <Fundamental/>
                <Fundamental/>
                <Fundamental/>
                <Fundamental/>
                <Fundamental/>
            </div>
        </div>
      </section>
    );
  }
  