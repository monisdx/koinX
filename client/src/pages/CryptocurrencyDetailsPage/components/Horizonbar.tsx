export function Horizonbar() {
  return (
    <div className="flex justify-center items-center gap-6 w-full">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-[14px] font-normal text-black">Today's Low</h2>
        <span className="text-[15px] font-medium text-black">46,930.22</span>
      </div>
      <figure className="flex h-[8px] bg-gradient-to-r from-red-500 via-yellow-500 to-green-200 rounded-lg w-full"></figure>
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-[14px] font-normal text-black">Today's High</h2>
        <span className="text-[15px] font-medium text-black">49,343.83</span>
      </div>
    </div>
  );
}
