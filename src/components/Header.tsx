"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const navItems = [
  { name: "About", link: "/about" },
  { name: "Subdivisions", link: "/subdivisions" },
  { name: "Repairs", link: "/repairs" },
  { name: "Make A Payment", link: "/make-a-payment" },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-[1140px] w-full py-2 px-4 mx-auto flex flex-col sm:flex-row text-white justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">
            <div className="flex flex-row gap-3 items-center">
              <Image src="/svg/phone-white.svg" alt="phone" width={20} height={20} />
              <p className="small-text text-left">956-687-6263</p>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <Image src="/svg/fax-white.svg" alt="fax" width={20} height={20} />
              <p className="small-text text-left">FAX: 956-687-6263</p>
            </div>
          </div>

          <div className="flex flex-row gap-3 mt-2 sm:mt-0">
            <Image src="/svg/facebook-white.svg" alt="facebook" width={20} height={20} />
            <Image src="/svg/instagram-white.svg" alt="instagram" width={20} height={20} />
            <Image src="/svg/youtube-white.svg" alt="youtube" width={20} height={20} />
            <Image src="/svg/linkedin-white.svg" alt="linkedin" width={20} height={20} />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md flex flex-col">
        <div className="max-w-[1140px] w-full py-5 px-4 mx-auto flex flex-row text-black justify-between gap-10 items-center">
          {/* Logo */}
          <div className="flex w-auto sm:w-1/5">
            <Link href="/">
              <Image
                src="/logos/ahsti-logo.png"
                alt="Affordable Homes of South Texas Logo"
                width={200}
                height={80}
                className="h-auto w-[160px] sm:w-[200px] md:w-[300px]"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex w-3/5 justify-between">
            {navItems.map((item, i) => (
              <Link key={i} href={item.link}>
                <h5 className="hover:text-primary transition">{item.name}</h5>
              </Link>
            ))}
          </div>

          {/* Buy Button (desktop) */}
          <div className="hidden md:flex w-1/5">
            <Link href="/buy-a-home" className="w-full">
              <Button className="w-full py-6" size="lg">
                Buy A Home
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-black transition ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-6 h-0.5 bg-black transition ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-black transition ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col md:hidden bg-white border-t border-gray-200 px-4 pb-4">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-lg hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/buy-a-home" onClick={() => setMenuOpen(false)}>
              <Button className="w-full mt-2 py-6" size="lg">
                Buy A Home
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
