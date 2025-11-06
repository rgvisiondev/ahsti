import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { ContactTabs } from "@/components/ContactTabs";

export default function Contact() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/home-header.png)] bg-cover bg-no-repeat bg-center">
      <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
        <div className="w-[1140px] h-[600px] mx-auto justify-center flex flex-col">
          <h4 className="text-white">CONTACT AHSTI</h4>
          <h1 className="text-white">We’re Here To Help.</h1>
          <p className="w-2/3 text-white">Connect with AHSTI to learn more about our housing programs, get help with your mortgage account, or ask questions about home repair, replacement, or financing options—our team is ready to support you by phone, email, or in person.</p>
          <div className="flex flex-row gap-3 mt-5">
            <Button className="w-[200px] py-6"  size="lg">Buy A Home</Button>
            <Button className="w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button>
          </div>
        </div>
      </div>
      </div>

      {/* Contact section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col text-center">
          <ContactTabs />
      </div>
      
      {/* carousel section */}
      <div className="py-10">
      <ContinuousCarousel />
      </div>


    </div>
  );
}