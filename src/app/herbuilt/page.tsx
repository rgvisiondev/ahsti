import { Button } from "../../components/ui/button";
import ContinuousCarousel from "@/components/carousels/SliderImages";
import Link from "next/link";
import { Metadata } from "next";
import {
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  RotateCcw,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HERBuilt® | AHSTI",
  description:
    "HERBuilt® is an AHSTI workforce and culture-change initiative creating safer, stronger, more inclusive construction job sites and career pathways for women across the Rio Grande Valley.",
};

export default function HerBuilt() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* Hero Section */}
      <div className="bg-[url(/images/6F4A1832.jpg)] bg-cover bg-[700px] md:bg-center bg-fixed">
        <div className="bg-gradient-to-r from-black/70 via-black/45 to-black/20">
          <div className="max-w-[1140px] w-full min-h-[600px] mx-auto px-5 lg:px-0 flex flex-col justify-center py-15">

            {/* HERBuilt Logo */}
            <img
              src="/logos/HERBuilt_logo_color.png"
              alt="HERBuilt"
              className="w-[220px] md:w-[200px] mb-8"
            />

            <h4 className="text-white">
              REBUILDING THE TRADES THROUGH CULTURE &amp; CERTIFICATION
            </h4>

            <h1 className="text-white max-w-[850px]">
              Building Safer. Stronger. More Inclusive Job Sites.
            </h1>

            <p className="text-white max-w-[750px] mt-3">
              Opening real career pathways for women in construction across the
              Rio Grande Valley.
            </p>

            <div className="flex flex-row flex-wrap gap-3 mt-7">
              <Link href="#about">
                <Button
                  className="w-[160px] lg:w-[190px] py-6"
                  size="lg"
                >
                  Learn More
                </Button>
              </Link>

              <Link href="#get-involved">
                <Button
                  className="w-[160px] lg:w-[190px] py-6"
                  size="lg"
                  variant="secondary"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* The Challenge */}
      <div
        id="about"
        className="max-w-[1140px] w-full px-5 lg:px-0 py-16 mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-10 items-center">

          <div className="w-full lg:w-1/2">
            <h4>THE CHALLENGE</h4>

            <h2 className="mt-2">
              Breaking Barriers in Construction
            </h2>

            <p className="mt-5">
              Women remain significantly underrepresented in the construction
              trades — even as the industry faces persistent labor shortages
              and offers some of the strongest wages and career stability
              available without a four-year degree.
            </p>

            <p className="mt-4">
              Bias, unsafe or unwelcoming job-site conditions, inflexible
              schedules, and a lack of paid entry pathways keep many women from
              entering — or staying in — the trades.
            </p>
          </div>

          <div
            className="w-full lg:w-1/2 min-h-[420px] rounded-lg bg-[url(/images/6F4A1822.jpg)] bg-cover bg-center"
            aria-label="HERBuilt construction site"
          />
        </div>
      </div>

      {/* Our Solution */}
      <div className="bg-gradient-to-r from-[#078DCE] to-[#55B5E8]">
        <div className="max-w-[1140px] w-full px-5 lg:px-0 py-16 mx-auto">

          <div className="text-center text-white mx-auto">
            <h4 className="text-white">OUR SOLUTION</h4>

            <h2 className="text-white mt-2">
              Changing the Job Site, Not the Woman
            </h2>

            <p className="mt-5">
              HERBuilt® is a workforce and culture-change initiative from
              Affordable Homes of South Texas, Inc. designed to remove those
              barriers — not by asking women to adapt to the status quo, but by
              requiring employers to build job sites where women can succeed.
            </p>
          </div>

          {/* Core Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

            {/* Paid Apprenticeships */}
            <div className="bg-white rounded-lg p-8">
              <GraduationCap className="w-10 h-10 text-[#078DCE] mb-3" />

              <h4 className="text-xl font-bold">
                Paid Apprenticeships
              </h4>

              <p className="mt-4">
                Real, demand-driven training tied directly to active
                construction projects, so participants earn while they learn.
              </p>
            </div>

            {/* Wraparound Supports */}
            <div className="bg-white rounded-lg p-8">
              <HeartHandshake className="w-10 h-10 text-[#078DCE] mb-3" />

              <h4 className="text-xl font-bold">
                Wraparound Supports
              </h4>

              <p className="mt-4">
                Assistance with transportation, childcare, and properly fitted
                personal protective equipment (PPE) that remove practical
                barriers to staying in the program.
              </p>
            </div>

            {/* Safe Sites */}
            <div className="bg-white rounded-lg p-8">
              <ShieldCheck className="w-10 h-10 text-[#078DCE] mb-3" />

              <h4 className="text-xl font-bold">
                HERBuilt® Safe-Sites Certification
              </h4>

              <p className="mt-4">
                An enforceable standard requiring subcontractors to adopt
                safety, respect, and accountability practices as a condition
                of participating in the program.
              </p>
            </div>

          </div>

          {/* Safe Sites Certification */}
          <div className="mt-12 bg-white rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">

            <div className="flex-shrink-0">
              <img
                src="/logos/HERBuilt_SafeSite_Seal.png"
                alt="HERBuilt® Safe Sites Certification"
                className="w-[180px] h-[180px] md:w-[210px] md:h-[210px] object-contain"
              />
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-[#078DCE]">
                HERBUILT® SAFE-SITES CERTIFICATION
              </h4>

              <h3 className="text-2xl md:text-3xl font-bold mt-2">
                A Higher Standard for Construction Job Sites
              </h3>

              <p className="mt-4 max-w-[700px]">
                The HERBuilt® Safe-Sites Certification establishes an
                enforceable standard for participating subcontractors,
                requiring safety, respect, and accountability practices that
                help create job sites where women can succeed.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Why AHSTI */}
      <div className="bg-white">
        <div className="max-w-[1140px] w-full px-5 lg:px-0 py-16 mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">

            <div className="w-full lg:w-1/2">
              <h4>WHY AHSTI</h4>

              <h2 className="mt-2">
                50 Years of Building Opportunity
              </h2>

              <p className="mt-5">
                For 50 years, Affordable Homes of South Texas, Inc. has built
                more than homes — we&apos;ve built pathways to stability and
                opportunity for families across the Rio Grande Valley.
              </p>

              <p className="mt-4">
                As an active affordable housing developer and construction
                manager, AHSTI has the rare ability to embed HERBuilt®&apos;s
                standards directly into real, active job sites — not just a
                classroom or a training manual.
              </p>
            </div>

            <div
              className="w-full lg:w-1/2 min-h-[420px] rounded-lg bg-[url(/images/6F4A1815.jpg)] bg-cover bg-center"
              aria-label="HERBuilt construction team"
            />
          </div>
        </div>
      </div>

      {/* Who HERBuilt Serves */}
      <div className="max-w-[1140px] w-full px-5 lg:px-0 py-16 mx-auto">

        <div className="text-center mx-auto">
          <h4>WHO HERBUILT® SERVES</h4>

          <h2 className="mt-2">
            Building Pathways to Careers in Construction
          </h2>

          <p className="mt-5">
            HERBuilt® is designed for women seeking stable, well-paying
            careers in construction across the Rio Grande Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

          {/* Women Seeking Careers */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <BriefcaseBusiness className="w-10 h-10 text-[#078DCE] mb-3" />

            <h4 className="text-xl font-bold">
              Women Seeking Careers
            </h4>

            <p className="mt-4">
              Women seeking stable, well-paying careers in construction,
              including women entering the trades for the first time.
            </p>
          </div>

          {/* Women Reentering the Workforce */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <RotateCcw className="w-10 h-10 text-[#078DCE] mb-3" />

            <h4 className="text-xl font-bold">
              Women Reentering the Workforce
            </h4>

            <p className="mt-4">
              Women balancing caregiving responsibilities or looking for a
              pathway back into the workforce.
            </p>
          </div>

          {/* First-Generation Trades Workers */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <UsersRound className="w-10 h-10 text-[#078DCE] mb-3" />

            <h4 className="text-xl font-bold">
              First-Generation Trades Workers
            </h4>

            <p className="mt-4">
              First-generation trades workers across Cameron and Hidalgo
              counties looking to build long-term careers.
            </p>
          </div>

        </div>

        <div className="max-w-[850px] mx-auto text-center mt-10">
          <p>
            HERBuilt® also benefits the subcontractors and employers who
            partner with us, helping address labor shortages while building
            safer, more productive job sites.
          </p>
        </div>

      </div>

      {/* Where We Are Now */}
      <div className="bg-white">
        <div className="max-w-[1140px] w-full px-5 lg:px-0 py-16 mx-auto">

          <div className="text-center">
            <h4>WHERE WE ARE NOW</h4>

            <h2 className="mt-2">
              Building the Foundation for 2027
            </h2>

            <p className="max-w-[800px] mx-auto mt-5">
              HERBuilt® is currently in its planning and partnership-building
              phase, with a pilot launch planned for early 2027. We&apos;re
              building relationships with subcontractors, education partners,
              and workforce organizations across the Rio Grande Valley to
              prepare for our first cohort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">

            {/* Planning */}
            <div className="text-center p-8 rounded-lg bg-[#F5F7FA]">
              <div className="text-[#078DCE] font-bold text-3xl">
                2026
              </div>

              <h3 className="mt-3 text-xl font-bold">
                Planning &amp; Partnerships
              </h3>

              <p className="mt-3">
                Building relationships with subcontractors, training providers,
                and workforce organizations.
              </p>
            </div>

            {/* Pilot */}
            <div className="text-center p-8 rounded-lg bg-[#F5F7FA]">
              <div className="text-[#078DCE] font-bold text-3xl">
                Early 2027
              </div>

              <h3 className="mt-3 text-xl font-bold">
                Pilot Launch
              </h3>

              <p className="mt-3">
                Launching the first HERBuilt® cohort and putting the program
                into action on active construction projects.
              </p>
            </div>

            {/* Future */}
            <div className="text-center p-8 rounded-lg bg-[#F5F7FA]">
              <div className="text-[#078DCE] font-bold text-3xl">
                Future
              </div>

              <h3 className="mt-3 text-xl font-bold">
                Expanding Career Pathways
              </h3>

              <p className="mt-3">
                Growing opportunities for women and creating lasting change
                across the construction industry.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="max-w-[1140px] w-full px-5 lg:px-0 py-16 mx-auto">

        <div className="text-center">
          <h4>OUR PARTNERS</h4>

          <h2 className="mt-2">
            Building HERBuilt® Together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

          {/* Education Partner */}
          <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center justify-center text-center min-h-[280px]">

            <h4 className="text-xl font-bold mb-6">
              Education Partner
            </h4>

            <img
              src="/logos/STC-Primary-Logo.png"
              alt="South Texas College"
              className="max-w-[400px] max-h-[230px] object-contain"
            />

          </div>

          {/* Pilot Subcontractor Partner */}
          <div className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center justify-center text-center min-h-[280px]">

            <h4 className="text-xl font-bold mb-6">
              Pilot Subcontractor Partner
            </h4>

            <img
              src="/logos/subcontractor-logo.png"
              alt="Gonzalez Concrete"
              className="max-w-[400px] max-h-[230px] object-contain"
            />

          </div>

        </div>
      </div>

      {/* Get Involved CTA */}
      <div
        id="get-involved"
        className="bg-[#F5F7FA]"
      >
        <div className="max-w-[1140px] w-full px-5 lg:px-0 py-16 mx-auto text-center">

          <h4>GET INVOLVED</h4>

          <h2>
            Help Build the Future of the Trades
          </h2>

          <p className="max-w-[750px] mx-auto mt-5">
            Interested in partnering with HERBuilt® as a subcontractor,
            training provider, or supporter? Reach out to our team to learn
            more about how you can get involved.
          </p>

          <div className="flex justify-center mt-7">
            <Link href="mailto:herbuilt@ahsti.org">
              <Button
                className="w-[220px] py-6"
                size="lg"
              >
                Email Us
              </Button>
            </Link>
          </div>

          <p className="mt-5">
            <a
              href="mailto:herbuilt@ahsti.org"
              className="font-bold hover:underline"
            >
              herbuilt@ahsti.org
            </a>
          </p>

        </div>
      </div>

      {/* AHSTI Partner / Certification Logos */}
      <div className="py-10">
        <ContinuousCarousel />
      </div>

    </div>
  );
}