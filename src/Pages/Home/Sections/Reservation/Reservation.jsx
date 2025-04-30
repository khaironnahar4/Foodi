import MainButton from "../../../../Components/MainButton";
import SecondaryButton from "../../../../Components/SecondaryButton";

function Reservation() {
  return (
    <section className="hero-bg h-[600px] flex items-center text-white relative px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="w-full relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between">
        <div>
          <h2 className="text-sm tracking-widest mb-2">RESERVATION</h2>
          <div className="bg-[#d48f1e] h-0.5 w-14 mb-5"></div>
          <h1 className="text-4xl md:text-5xl font-[600] mb-6">
          Working Hours
          </h1>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <MainButton text="BOOK A TABLE" />
            <SecondaryButton text="CONTACT US" />
          </div>
        </div>
        <div className="bg-base-200 p-12 md:p-14 lg:p-16 rounded-xs">
            <div>
                <h3>Sunday to Tuesday</h3>
                <h3>09:00 AM - 10.00 PM</h3>
            </div>
            <div className="mt-12 mg:mt-14 lg:mt-16">
                <h3>Friday to Saturday</h3>
                <h3>09:00 AM - 10.00 PM</h3>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
