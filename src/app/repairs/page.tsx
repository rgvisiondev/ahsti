import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";
import { RepairsAccordion } from "@/components/RepairsAccordion";

export default function Repairs() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/header4.png)] bg-cover bg-no-repeat bg-center bg-fixed">
      <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
        <div className="w-[1140px] h-[600px] mx-auto justify-center flex flex-col">
          <h4 className="text-white">HOME REPAIR</h4>
          <h1 className="text-white">Home Improvement.</h1>
          <p className="w-2/3 text-white">Explore home repair and replacement programs designed to help eligible homeowners in the Rio Grande Valley improve their living conditions through affordable financing and community partnerships. All programs are income based.</p>
          <div className="flex flex-row gap-3 mt-5">
            <Button className="w-[200px] py-6"  size="lg">Buy A Home</Button>
            <Button className="w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button>
          </div>
        </div>
      </div>
      </div>

    {/* subdivisions section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-row">
        <div className="w-1/2 bg-[url(/images/family4.png)] bg-center bg-cover rounded-lg"></div>

        <div className="w-1/2">
            <h4>INCOME-BASED LOCAL PROGRAMS</h4>
            <h2 className="text-base/12">Home Repair Assistance</h2>
            <RepairsAccordion />
       </div>



    </div>


    {/* cta section */}
    <CTASection />

      {/* Contact section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col text-center">
          <h4>CONTACT US</h4>
          <h2>Reach Out To Our Administration Building</h2>
          <ContactSection />
      </div>
      
      {/* carousel section */}
      <div className="py-10">
      <ContinuousCarousel />
      </div>


    </div>
  );
}