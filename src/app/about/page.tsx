import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/header2.png)] bg-cover bg-no-repeat bg-center bg-fixed">
      <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
          <div className="max-w-[1140px] w-full h-[600px] mx-auto px-4 flex flex-col justify-center text-center sm:text-left">
          <h4 className="text-white">ABOUT US</h4>
          <h1 className="text-white">We Build For People</h1>
          <p className="text-white lg:w-2/3">Affordable Homes of South Texas, Inc. (AHSTI) is a community-based non-profit organization dedicated to enhancing the quality of life by providing affordable housing and related services to eligible families.</p>
            <div className="flex flex-row gap-3 justify-center sm:justify-start mt-5">
              <Link href="/buy-a-home"><Button className="w-[160px] lg:w-[200px] py-6"  size="lg">Buy A Home</Button></Link>
              <Link href="/repairs"><Button className="w-[160px] lg:w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button></Link>
            </div>
        </div>
      </div>
      </div>

    {/* timeline section */}
      <div className="max-w-[1140px] w-full py-10 mx-auto justify-center flex flex-col gap-5 flex flex-col">
        <div className="w-full text-center">
          <h4>HISTORY OF AHSTI</h4>
          <h2>Building Stronger Communities In The RGV</h2>
          <div className="mt-5">
          <Timeline />
          </div>
        </div>

    </div>
    

    {/* impact section */}
    <div className="w-full py-10 mx-auto justify-center flex flex-col lg:flex-row">

      <div className="bg-[url(/images/family1.png)] bg-cover bg-no-repeat bg-top w-full lg:w-1/2 min-h-[400px]"></div>

      <div className="bg-gradient-to-r from-primary/95 to-secondary/95 bg-blend-overlay w-full lg:w-1/2 text-white">
        <div className="w-full lg:w-[570px] py-10 lg:py-20 px-5 lg:pl-5 text-center lg:text-left">
          <h4>OUR IMPACT</h4>
          <h2>Changing Lives,<br /> One Family at a Time</h2>
          <p>Owning our first home was a dream that always felt just out of reach. With AHSTI’s help, that dream finally came true. From the first meeting to the day we received our keys, their team treated us like family. They didn’t just help us buy a house, they helped us build a future. Our kids finally have a safe place to grow up, and we now have the stability we always hoped for. AHSTI gave us more than a home; they gave us hope.</p>
          <p>
          <br /><b>-The Ramirez Family</b><br />
          McAllen, TX</p>
        </div>

      </div>

    </div>



    {/* team section */}
      <div className="max-w-[1140px] w-full pb-10 mx-auto justify-center flex flex-col gap-5 flex flex-col">
        <div className="w-full text-center">
          <h4>OUR TEAM</h4>
          <h2>Meet the Heart of AHSTI</h2>
          <div className="flex justify-center w-full">
            <div className="gap-6 mt-10 w-full flex flex-col lg:flex-row ">

              <div className="flex flex-col items-center px-5 w-full lg:w-1/3 mt-5">
                <div className="bg-primary h-[325px] w-full flex items-end justify-center">
                  <Image src="/team/test.png" alt="test" width={350} height={350}/>
                </div>
                <div className="text-center">
                  <h3>Maria Duron</h3>
                  <p className="text-gray-600">President/CEO</p>
                </div>
              </div>

              <div className="flex flex-col items-center px-5 w-full lg:w-1/3 mt-5">
                <div className="bg-primary h-[325px] w-full flex items-end justify-center">
                  <Image src="/team/test.png" alt="test" width={350} height={350}/>
                </div>
                <div className="text-center">
                  <h3>Maria Duron</h3>
                  <p className="text-gray-600">President/CEO</p>
                </div>
              </div>

              <div className="flex flex-col items-center px-5 w-full lg:w-1/3 mt-5">
                <div className="bg-primary h-[325px] w-full flex items-end justify-center">
                  <Image src="/team/test.png" alt="test" width={350} height={350}/>
                </div>
                <div className="text-center">
                  <h3>Maria Duron</h3>
                  <p className="text-gray-600">President/CEO</p>
                </div>
              </div>

            </div>
          </div>
        </div>

    </div>


    {/* cta section */}
    <CTASection />

      {/* Contact Section */}
      <div className="max-w-[1140px] w-full py-10 px-4 mx-auto flex flex-col text-center">
        <h4>GET STARTED</h4>
        <h2 className="mt-2">
          Contact Our Administration Building
        </h2>
        <ContactSection />
      </div>

      {/* Carousel Section */}
      <div className="py-10">
        <ContinuousCarousel />
      </div>


    </div>
  );
}