import started from "../../../assets/images/started.png"

export default function Getstarted() {
    return (
      <section className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-evenly items-center bg-blue rounded-xl p-10 gap-3">
            <h3 className="text-[25px] text-center font-medium text-foreground max-w-[300px]">Get Started with KoinX for FREE</h3>
            <p className="text-[15px] text-center font-normal  text-foreground ">With our range of features that you can equip for free, KoinX allows you
             to be more educated and aware of your tax reports</p>
            <img src={started} alt="started" />
            <button type='button' className=' px-5 py-2 font-medium text-[18px] rounded-lg  text-black bg-foreground outline-none border-none'>
            Get Started for FREE -{">"}
            </button>
        </div>
        <div>

        </div>
        
      </section>
    );
  }
  