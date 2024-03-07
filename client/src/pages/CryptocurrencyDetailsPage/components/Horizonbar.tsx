interface HorizonbarProps {
    lowtitle: string;
    lowvalue: string;
    hightitle: string;
    highvalue: string;
  }
  
export function Horizonbar({lowtitle,lowvalue,hightitle,highvalue}:HorizonbarProps) {
  return (
    <div className="flex justify-center items-center gap-6 w-full">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-[14px] mini:text-[12px] font-normal text-black">{lowtitle}</h2>
        <span className="text-[15px] mini:text-[13px] font-medium text-black">{lowvalue}</span>
      </div>
      <figure className="flex h-[8px] bg-gradient-to-r from-red-500 via-yellow-500 to-secondary rounded-lg w-full relative">
        {lowtitle === `Today's Low` &&
          <span className=" flex flex-col justify-center items-center mini:text-[10px] text-[12px] font-normal absolute md:left-[50%] left-[70%] top-[4px] text-black ">
            <span>&#9650;</span>
            <span>$48,637.83</span>
          </span>
        }
      </figure>
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-[14px] mini:text-[12px] font-normal text-black">{hightitle}</h2>
        <span className="text-[15px] mini:text-[13px] font-medium text-black">{highvalue}</span>
      </div>
    </div>
  );
}
