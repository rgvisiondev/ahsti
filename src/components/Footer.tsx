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
        
        <div className="w-[1140px] py-8 justify-center mx-auto text-white ">

            <div className="flex flex-row gap-5">
                        <div className="flex flex-col w-1/5">
                            <Image 
                                src="/logos/ahsti-logo-white.png" 
                                alt="Affordable Homes of South Texas Logo" 
                                width={300} height={100} />
                            <br />
                            <p className="small-text"><i>Building Communities, One Home at a Time.</i></p>

                            <div className="flex flex-row gap-3 mt-5">
                                <Image 
                                    src="/svg/facebook-white.svg" 
                                    alt="phone"
                                    width={25}
                                    height={25} />
                                <Image 
                                    src="/svg/instagram-white.svg" 
                                    alt="phone"
                                    width={25}
                                    height={25} />
                                <Image 
                                    src="/svg/youtube-white.svg" 
                                    alt="phone"
                                    width={25}
                                    height={25} />
                                <Image 
                                    src="/svg/linkedin-white.svg" 
                                    alt="phone"
                                    width={25}
                                    height={25} />
                            </div>
                        </div>

                        <div className="flex flex-col w-1/5">
                            <h4>Quick Links</h4>
                            {
                                links.map((link, index) => (
                                    <p key={index} className="small-text">
                                        <Link href={link.href}>{link.name}</Link>
                                    </p>
                                ))
                            }
                        </div>

                        <div className="flex flex-col w-1/5">
                            <h4>Subdivisions</h4>
                            {
                                subdivisions.map((subdivision, index) => (
                                    <p key={index} className="small-text">{subdivision}</p>
                                ))
                            }
                        </div>

                        <div className="flex flex-col w-1/5">
                            <h4>Locations</h4>
                            {
                                locations.map((location, index) => (
                                    <p key={index} className="small-text">{location}</p>
                                ))
                            }
                        </div>

                        <div className="flex flex-col w-1/5">
                            <h4>Main Office</h4>
                            <p className="small-text">Ph: 956-687-6263</p>
                            <p className="small-text">FX: 956-682-9751</p>
                            <p className="small-text">1420 Erie Ave McAllen, TX 78501</p>
                        </div>

            </div>

            <hr className="my-8 border-t border-white"/>

            <div className="flex flex-row justify-between">
                <p className="small-text">© 2024 All Rights Reserved. Affordable Homes of South Texas, Inc.</p>
                <Link href="https://rgvisionmedia.com/"><p className="small-text">Made X RGVision Media</p></Link>
            </div>

        </div>

    </div>
  );

}