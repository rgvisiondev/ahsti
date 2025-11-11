import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Subdivisions", href: "/subdivisions" },
    { name: "Buy A House", href: "/buy-a-house" },
    { name: "Make a Payment", href: "/make-a-payment" },
    { name: "Repairs & Support", href: "/repairs-support" },
    { name: "Noticies & Policies", href: "/notices-policies" },
    { name: "Contact Us", href: "/contact" },
  ];

  const subdivisions = [
    "Crockett Estates",
    "Crown Haven",
    "Jaguar Heights",
    "Lakewood Estates",
    "Mid Valley Estates",
    "Speedy Trails",
    "Stonebriar",
    "Tiger Crossing",
  ];

  const locations = [
    "Administration Building",
    "Homeownership Center",
    "Construction Services Building",
    "Weslaco Branch",
    "Fred Munguia Training House",
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-[1140px] w-full py-8 px-4 mx-auto text-white">
        {/* Footer Columns */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-8 sm:gap-6 justify-between">
          {/* Logo + Social */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/5">
            <Image
              src="/logos/ahsti-logo-white.png"
              alt="Affordable Homes of South Texas Logo"
              width={300}
              height={100}
              className="w-[200px] sm:w-[250px] lg:w-[300px] h-auto"
            />
            <p className="small-text mt-3">
              <i>Building Communities, One Home at a Time.</i>
            </p>

            <div className="flex flex-row gap-3 mt-5">
              <Image src="/svg/facebook-white.svg" alt="facebook" width={25} height={25} />
              <Image src="/svg/instagram-white.svg" alt="instagram" width={25} height={25} />
              <Image src="/svg/youtube-white.svg" alt="youtube" width={25} height={25} />
              <Image src="/svg/linkedin-white.svg" alt="linkedin" width={25} height={25} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/5">
            <h4 className="mb-2 font-semibold">Quick Links</h4>
            {links.map((link, index) => (
              <p key={index} className="small-text">
                <Link href={link.href}>{link.name}</Link>
              </p>
            ))}
          </div>

          {/* Subdivisions */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/5">
            <h4 className="mb-2 font-semibold">Subdivisions</h4>
            {subdivisions.map((subdivision, index) => (
              <p key={index} className="small-text">
                {subdivision}
              </p>
            ))}
          </div>

          {/* Locations */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/5">
            <h4 className="mb-2 font-semibold">Locations</h4>
            {locations.map((location, index) => (
              <p key={index} className="small-text">
                {location}
              </p>
            ))}
          </div>

          {/* Main Office */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/5">
            <h4 className="mb-2 font-semibold">Main Office</h4>
            <p className="small-text">Ph: 956-687-6263</p>
            <p className="small-text">FX: 956-682-9751</p>
            <p className="small-text">1420 Erie Ave McAllen, TX 78501</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-t border-white opacity-60" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <p className="small-text">
            © 2024 All Rights Reserved. Affordable Homes of South Texas, Inc.
          </p>
          <Link href="https://rgvisionmedia.com/">
            <p className="small-text hover:underline">Made X RGVision Media</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
