import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import ContactSection from "@/components/contactsection";
import { CTASection } from "@/components/cta";

export default function MakeAPayment() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* header section */}
      <div className="bg-[url(/headers/home-header.png)] bg-cover bg-no-repeat bg-center">
      <div className="bg-gradient-to-r from-black/65 to-black/25 bg-blend-overlay">
        <div className="w-[1140px] h-[600px] mx-auto justify-center flex flex-col">
          <h4 className="text-white">MAKE A PAYMENT</h4>
          <h1 className="text-white">Pay Your Mortgage Online.</h1>
          <p className="w-2/3 text-white">Make secure mortgage payments online through AHSTI’s user-friendly portal, designed to help homeowners manage their loans conveniently and confidently, with step-by-step guidance for first-time users and ongoing support available.</p>
          <div className="flex flex-row gap-3 mt-5">
            <Button className="w-[200px] py-6"  size="lg">Buy A Home</Button>
            <Button className="w-[200px] py-6" size="lg" variant="secondary">Repair My Home</Button>
          </div>
        </div>
      </div>
      </div>

    <div className="py-5 w-[1140px] bg-blue-100 mx-auto rounded-lg text-center mt-10">
      <div>
        <p><b>Reminder: </b>We recommend that you<b> do NOT schedule your payment more than 5 days in advance.</b></p>
      </div>

    </div>

    {/* subdivisions section */}
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-row">
        <div className="w-1/2">
            <h4>ONLINE PAYMENTS</h4>
            <h2 className="text-base/12">Getting Started</h2>
            <p className="mt-3">
              <b>1. Register Your Account</b><br />
                Go to the login page and click on:
                "Register: First-time users must register."
                (Located in the grey box under the login section.)
                <br /><br />
                <b>2. Gather Your Information</b><br />
                Loan Number (found on your monthly mortgage statement) If you don’t have a statement, call (956) 687-6263 and request your loan number.
                Social Security Number
                <br /><br />
                <b>3. Complete Registration</b><br />
                After entering your information, confirm your account to begin using the portal.
                <br /><br />
                <b>4. Make Your Payment</b><br />
                Once logged in, you’ll be able to make a secure mortgage payment.
            </p>
            <Button className="w-[200px] py-6 mt-5"  size="lg">Learn More</Button>
       </div>

        <div className="w-1/2 bg-gray-200 rounded-lg"></div>

    </div>

    {/* subdivisions section */}
<div className="bg-white">
      <div className="w-[1140px] py-10 mx-auto justify-center flex flex-col gap-5 flex flex-row">

        <div className="w-1/2 bg-gray-200 rounded-lg"></div>
        <div className="w-1/2">
            <h4>SECURITY TIPS</h4>
            <h2 className="text-base/12">Account Security</h2>

            <ul className="list-disc mt-3 ml-5 gap-5 flex flex-col">
              <li>Keep your password in a safe place.</li>
              <li>If you enter the wrong password three times, your account will be locked.</li>
              <li>If your account gets locked, you’ll need to call a 1-800 number (provided on the lockout screen) to unlock it.</li>
              <li>Contact AHSTI immediately if you notice any suspicious activity on your account.</li>
            </ul>

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