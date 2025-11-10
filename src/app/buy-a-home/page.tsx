import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";

export default function BuyAHome() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/header8.png)] bg-cover bg-no-repeat bg-center bg-fixed">
      <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
        <div className="w-[1140px] h-[600px] mx-auto justify-center flex flex-col">
          <h4 className="text-white">BUY A HOME</h4>
          <h1 className="text-white">Understand Our Programs. </h1>
          <p className="w-2/3 text-white">Discover how Affordable Homes of South Texas, Inc. helps hardworking families achieve the dream of homeownership through education, guidance, and affordable, energy-efficient homes.</p>
          <div className="flex flex-row gap-3 mt-5">
            <Button className="w-[200px] py-6"  size="lg">Buy A Home</Button>
            <Button className="w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button>
          </div>
        </div>
      </div>
      </div>

    {/* steps section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-row">
        <div className="w-1/2">
          <h4>WHAT IS AHSTI?</h4>
          <h2 className="text-base/12">A Nonprofit Helping Families Build Homes.</h2>
          <p className="mt-3">Affordable Homes of South Texas, Inc. (AHSTI) is a nonprofit organization dedicated to helping families become homeowners. For over 50 years, we’ve built quality homes and empowered families with financial education and support.
            <br /><br />
            We don’t just build houses — we build stability, opportunity, and stronger communities.</p>
        </div>

        <div className="w-1/2 bg-gray-200 rounded-lg"></div>
    </div>

    {/* steps section 2 */}
    <div className="w-full bg-white">
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-row">
        
      <div className="w-1/2 bg-gray-200 rounded-lg"></div>

        <div className="w-1/2">
          <h4>WHAT IS AHSTI?</h4>
          <h2 className="text-base/12">A Nonprofit Helping Families Build Homes.</h2>
          <p className="mt-3">Unlike traditional builders or lenders, AHSTI is community-driven — not profit-driven. We focus on affordable financing, energy-efficient design, and personalized support for each buyer.
            <br /><br />
            From credit counseling to closing, we’re with you every step of the way.</p>
        </div>

      </div>
    </div>

    {/* steps section 3 */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-row">
        <div className="w-1/2">
          <h4>WHAT IS PROGRAM ELIGIBILITY?</h4>
          <h2 className="text-base/12">Simple requirements. Real opportunities.</h2>
          <p className="mt-3">AHSTI homeownership programs are designed for working families who meet income and credit guidelines. Eligibility is based on your household size, income level, and financial readiness. We’ll guide you through every step.
            </p>
            <Button className="mt-5">View Current HUD Income Limits</Button>
        </div>

        <div className="w-1/2 bg-gray-200 rounded-lg"></div>
    </div>

    {/* steps section 4 */}
    <div className="w-full bg-white">
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-row">

      <div className="w-1/2 bg-gray-200 rounded-lg"></div>

        <div className="w-1/2">
          <h4>WHAT KIND OF HOMES DOES AHSTI BUILD?</h4>
          <h2 className="text-base/12">Built With Care, Designed For Your Family’s Future.</h2>
          <p className="mt-3">Our homes are designed to be affordable, durable, and energy-efficient. Each one is thoughtfully built in safe, growing neighborhoods close to schools, parks, and amenities.
            <br /><br />
            Whether you’re buying your first home or planning for your family’s future, AHSTI has a design that fits your lifestyle and budget.</p>
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