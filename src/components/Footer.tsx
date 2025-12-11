import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Subdivisions", href: "/subdivisions" },
    { name: "Hope Fund Investment", href: "https://www.mycnote.com/?code=6AAGh7XZc" },
    { name: "Buy A Home", href: "/buy-a-home" },
    { name: "Repair My Home", href: "/repair-my-home" },
    { name: "Make a Payment", href: "/make-a-payment" },
    { name: "Contact Us", href: "/contact" },
  ];

  const subdivisions = [
    { name: "Crockett Estates", file: "/files/crockett-estates.pdf" },
    { name: "Crown Haven", file: "/files/crown-haven.pdf" },
    { name: "Jaguar Heights", file: "/files/jaguar-heights.pdf" },
    { name: "Lakewood Estates", file: "/files/lakewood-estates.pdf" },
    { name: "Mid Valley Estates", file: "/files/mid-valley=estates.pdf" },
    { name: "Speedy Trails", file: "/files/speedy-trails.pdf" },
    { name: "Stonebriar", file: "/files/stonebriar.pdf" },
    { name: "Tiger Crossing", file: "/files/tiger-crossing.pdf" },
  ];

  const locations = [
    "Administration Building",
    "Homeownership Center",
    "Construction Services Building",
    "Weslaco Branch",
    "Fred Munguia Training House",
  ];

  const socials = [
    { image: "/svg/facebook-white.svg", alt: "facebook", link: "https://www.facebook.com/AffordableHomesSTX/" },
    { image: "/svg/instagram-white.svg", alt: "instagram", link: "https://www.instagram.com/ahsti/" },
    { image: "/svg/youtube-white.svg", alt: "youtube", link: "https://www.youtube.com/@myahsti/" },
    { image: "/svg/linkedin-white.svg", alt: "linkedin", link: "https://www.linkedin.com/company/affordable-homes-of-south-texas-inc-/" },
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-[1140px] w-full py-8 px-4 mx-auto text-white">
        {/* Footer Columns */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-8 sm:gap-6 justify-between">
          {/* Logo + Social */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/5">
            <Link href={"/"}>
              <Image
                src="/svg-logos/logo2-white.png"
                alt="Affordable Homes of South Texas Logo"
                width={500}
                height={500}
                className="w-[200px] lg:w-full h-auto"
              /></Link>
            <p className="small-text">
              <i>Building Communities, One Home at a Time.</i>
            </p>

            <div className="flex flex-row gap-3 mt-5">
              {socials.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
                  <Image src={item.image} alt={item.alt} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/5">
            <h4 className="mb-2 font-semibold">Quick Links</h4>
            {links.map((link, index) => (
              <p key={index} className="small-text hover:underline">
                {link.href.startsWith("http") ? (
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</Link>
                ) : (
                  <Link href={link.href}>{link.name}</Link>
                )}
              </p>
            ))}
          </div>

          {/* Subdivisions */}
          <div className="flex flex-col sm:w-[45%] lg:w-1/5">
            <h4 className="mb-2 font-semibold">Subdivisions</h4>
            {subdivisions.map((subdivision, index) => (
              <a key={index} href={subdivision.file} target="_blank" rel="noopener noreferrer">
                <p className="small-text hover:underline">{subdivision.name}</p>
              </a>
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
