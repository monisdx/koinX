
export default function Sentiment() {
    return (
      <section className="flex flex-col justify-center items-start bg-foreground rounded-xl p-6 gap-2 w-full">
        <h3 className="text-[25px] font-semibold text-black">Sentiment</h3>
        <div className="flex justify-center items-center gap-2">
            <h2 className="text-[20px] font-medium text-gray mt-2">Key Events</h2>
            <div className="flex justify-center items-center w-4 h-4 rounded-full text-[10px] bg-gray text-foreground">i</div>
        </div>
        <div>

        </div>
        <div className="flex justify-center items-center gap-2">
            <h2 className="text-[20px] font-medium text-gray mt-2 ">Analyst Estimates</h2>
            <div className=" flex justify-center items-center w-4 h-4 rounded-full text-[10px] bg-gray text-foreground ">i</div>
        </div>
        <div className="flex justify-between items-center gap-6 mt-2 w-full">
            <div className="flex justify-center items-center w-[100px] h-[100px] text-[30px] text-secondary rounded-full bg-light_green min-w-[100px]">76%</div>
            <div className="flex flex-col justify-center items-center gap-2 w-[70%]">
                <div className="flex justify-start items-center gap-5 w-full">
                    <span className="text-[14px] font-normal text-light_gray">Buy</span>
                    <div className="flex justify-start items-start h-[8px] rounded-sm w-full">
                        <div className="flex h-full w-[76%] bg-secondary relative rounded-sm">
                        <span className="text-[14px] font-normal absolute -right-12 -top-[6px] text-light_gray ">76%</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-5 w-full">
                    <span className="text-[14px] font-normal text-light_gray">Hold</span>
                    <div className="flex justify-start items-start h-[8px] rounded-sm w-full">
                        <div className="flex h-full w-[8%] bg-light_gray relative rounded-sm">
                        <span className="text-[14px] font-normal absolute -right-12 -top-[6px] text-light_gray ">8%</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-5 w-full">
                    <span className="text-[14px] font-normal text-light_gray">Sell</span>
                    <div className="flex justify-start items-start h-[8px] rounded-sm w-full">
                        <div className="flex h-full w-[16%] bg-primary relative rounded-sm">
                        <span className="text-[14px] font-normal absolute -right-12 -top-[6px] text-light_gray ">16%</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        
        
      </section>
    );
  }
  