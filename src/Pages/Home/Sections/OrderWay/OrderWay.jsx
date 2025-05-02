import { BiLogoPlayStore } from "react-icons/bi";
import img1 from "../../../../assets/mobilePage-1.jpg";
import img2 from "../../../../assets/mobilePage-2.jpg";
import { FaApple } from "react-icons/fa";

function OrderWay() {
  return (
    <section className="easy-order-bg h-[400px] lg:h-[600px] flex items-center text-white relative px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 z-10">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="text-4xl font-[600] text-center lg:text-left">
            Simple Way To <br />
            Order Your Foods
          </h1>
          {/* cards */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 rounded-sm">
            {/* play store */}
            <div className="flex gap-2 justicefy-between items-center p-2 bg-white text-black rounded-md">
              <div>
                <BiLogoPlayStore className="text-4xl" />
              </div>
              <div>
                <h3 className="text-[10px]">GET IT ON</h3>
                <h1 className="text-2xl font-[600]">Google Play</h1>
              </div>
            </div>

            {/* apple store */}
            <div className="flex gap-2 justicefy-between items-center p-2 bg-white text-black rounded-md">
              <div>
                <FaApple className="text-4xl" />
              </div>
              <div>
                <h3 className="text-[10px]">GET IT ON</h3>
                <h1 className="text-2xl font-[600]">Apple Store</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 justify-start gap-6 hidden lg:flex">
          <div className="w-1/3 -mt-40">
            <img className="w-full" src={img1} alt="mobile app" />
          </div>
          <div className="w-1/3 -mb-40">
            <img className="w-full" src={img2} alt="mobile app" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderWay;
