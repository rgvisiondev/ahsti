import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";

export default function Repairs() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/home-header.png)] bg-cover bg-no-repeat bg-center">
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
        <div className="w-1/2">
            <h4>MISSION, TX</h4>
            <h2 className="text-base/12">Speedy Trails</h2>
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <Button className="w-[200px] py-6 mt-5"  size="lg">Learn More</Button>
       </div>

        <div className="w-1/2 bg-gray-200 rounded-lg"></div>

    </div>

    {/* subdivisions section */}
<div className="bg-white">
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-row">

        <div className="w-1/2 bg-gray-200 rounded-lg"></div>
        <div className="w-1/2">
            <h4>MISSION, TX</h4>
            <h2 className="text-base/12">Speedy Trails</h2>
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <Button className="w-[200px] py-6 mt-5"  size="lg">Learn More</Button>
       </div>
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