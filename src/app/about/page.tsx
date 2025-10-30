import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";

export default function About() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/home-header.png)] bg-cover bg-no-repeat bg-center">
      <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
        <div className="w-[1140px] h-[600px] mx-auto justify-center flex flex-col">
          <h4 className="text-white">ABOUT US</h4>
          <h1 className="text-white">We Build For People.</h1>
          <p className="w-2/3 text-white">Affordable Homes of South Texas, Inc. (AHSTI) is a community-based non-profit organization dedicated to enhancing the quality of life by providing affordable housing and related services to eligible families.</p>
          <div className="flex flex-row gap-3 mt-5">
            <Button className="w-[200px] py-6"  size="lg">Buy A Home</Button>
            <Button className="w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button>
          </div>
        </div>
      </div>
      </div>

    {/* timeline section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-col">
        <div className="w-full text-center">
          <h4>HISTORY OF AHSTI</h4>
          <h2>Building Stronger Communities In The RGV</h2>
        </div>

    </div>
    

    {/* impact section */}
    <div className="w-full py-10 mx-auto justify-center flex flex-col flex flex-row">

      <div className="bg-[url(/images/family1.png)] bg-cover bg-no-repeat bg-top w-1/2"></div>

      <div className="bg-gradient-to-r from-primary/95 to-secondary/95 bg-blend-overlay w-1/2 text-white">
        <div className="w-[570px] py-20 pl-5">
          <h4>OUR IMPACT</h4>
          <h2>Changing Lives</h2>
          <p>Owning our first home was a dream that always felt just out of reach. With AHSTI’s help, that dream finally came true. From the first meeting to the day we received our keys, their team treated us like family. They didn’t just help us buy a house, they helped us build a future. Our kids finally have a safe place to grow up, and we now have the stability we always hoped for. AHSTI gave us more than a home; they gave us hope.</p>
          <p>
          <br /><b>-The Ramirez Family</b><br />
          McAllen, TX</p>
        </div>

      </div>

    </div>



    {/* team section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-col">
        <div className="w-full text-center">
          <h4>HISTORY OF AHSTI</h4>
          <h2>Building Stronger Communities In The RGV</h2>
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