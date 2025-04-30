import { MdOutlineFoodBank } from "react-icons/md";
import SectionHeading from "../../../../Components/SectionHeading";
import { GiCook, GiJellyBeans } from "react-icons/gi";

function Features() {
  return (
    <section className="px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <SectionHeading
        heading={"features"}
        subHeading={"Why people choose us?"}
      />
      {/* the three sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
        {/* section one */}
        <div className="flex flex-col items-center justify-center text-center gap-y-6 max-w-sm">
          <MdOutlineFoodBank className="text-5xl md:text-6xl lg:text-7xl mb-6" />

          <h1 className="text-2xl font-[600]">MENU FOR EVERY TASTE</h1>
          <p className="text-[#797B78]">Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem. </p>
        </div>

        {/* section two */}
        <div className="flex flex-col items-center justify-center text-center gap-y-6 max-w-sm">
          <GiJellyBeans className="text-5xl md:text-6xl lg:text-7xl mb-6"/>

          <h1 className="text-2xl font-[600]">ALWAYS QUALITY BEANS</h1>
          <p className="text-[#797B78]">Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem. </p>
        </div>

        {/* section three */}
        <div className="flex flex-col items-center justify-center text-center gap-y-6 max-w-sm">
          <GiCook className="text-5xl md:text-6xl lg:text-7xl mb-6" />

          <h1 className="text-2xl font-[600]">EXPERIENCED BARISTA</h1>
          <p className="text-[#797B78]">Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem. </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
