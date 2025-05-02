import SectionHeading from "../../../../Components/SectionHeading";
import foodimg1 from "../../../../assets/food (1).png";
import foodimg2 from "../../../../assets/food (2).png";
import foodimg3 from "../../../../assets/food (3).png";

function OurFoods() {
  return (
    <section className="">
      <SectionHeading heading={"menu"} subHeading={"Explore Our Foods?"} />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* card 1 */}
        <div className="mx-w-md rounded-lg bg-base-100 overflow-hidden">
          {/* card image */}
          <div className="h-[320px]">
          <img src={foodimg1} alt="food image" className="w-full h-full object-cover object-center" />
          </div>
          {/* card info */}
          <div className="p-6">
            <h1 className="text-2xl font-[600] mt-5">Raspberry French Toast</h1>
            <p>Time: 10 - 15 Minutes | Serves: 1</p>
            <h2 className="text-2xl font-[600] my-5">
              <span className="text-[var(--color-primary)]">$12.50</span>{" "}
              <span className="">$13.50</span>
            </h2>
            <div className="btn btn-md font-[500] text-black p-3 bg-[var(--color-primary)] rounded-sm">
              Order Now
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="mx-w-md rounded-lg bg-base-100 overflow-hidden">
          {/* card image */}
          <div className="h-[320px]">
          <img src={foodimg2} alt="food image" className="w-full h-full object-cover object-center" />
          </div>
          {/* card info */}
          <div className="p-6">
            <h1 className="text-2xl font-[600] mt-5">Raspberry French Toast</h1>
            <p>Time: 10 - 15 Minutes | Serves: 1</p>
            <h2 className="text-2xl font-[600] my-5">
              <span className="text-[var(--color-primary)]">$12.50</span>{" "}
              <span className="">$13.50</span>
            </h2>
            <div className="btn btn-md font-[500] text-black p-3 bg-[var(--color-primary)] rounded-sm">
              Order Now
            </div>
          </div>
        </div>

         {/* card 3 */}
         <div className="mx-w-md rounded-lg bg-base-100 overflow-hidden">
          {/* card image */}
          <div className="h-[320px]">
          <img src={foodimg3} alt="food image" className="w-full h-full object-cover object-center" />
          </div>
          {/* card info */}
          <div className="p-6">
            <h1 className="text-2xl font-[600] mt-5">Raspberry French Toast</h1>
            <p>Time: 10 - 15 Minutes | Serves: 1</p>
            <h2 className="text-2xl font-[600] my-5">
              <span className="text-[var(--color-primary)]">$12.50</span>{" "}
              <span className="">$13.50</span>
            </h2>
            <div className="btn btn-md font-[500] text-black p-3 bg-[var(--color-primary)] rounded-sm">
              Order Now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurFoods;
