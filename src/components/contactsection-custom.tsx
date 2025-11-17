import Image from "next/image";
import MapAdminCustom from "./maps/map-custom";
import ContactForm from "./ContactForm";

export default function ContactSectionCustom({ location }: { location: { value: string; label: string; address: string; phone: string; fax: string; mapLocation: string } }) {
    
    return (
          <div className="flex flex-col lg:flex-row mt-5 gap-5 p-3">

            <div className="flex flex-col w-full lg:w-1/2 text-left">
                    <div className="flex flex-col gap-3 pb-5">

                        {location.phone && (
                        <div className="flex flow-row gap-3">
                            <Image 
                                src="/svg/phone.svg" 
                                alt="phone"
                                width={20}
                                height={20} />
                            <p className="small-text text-left">{location.phone}</p>
                        </div>
                        )}

                        {location.fax && (
                        <div className="flex flow-row gap-3">
                            <Image 
                                src="/svg/fax.svg" 
                                alt="fax"
                                width={20}
                                height={20} />
                            <p className="small-text text-left">FAX: {location.fax}</p>
                        </div>
                        )}


                        <div className="flex flow-row gap-3">
                            <Image 
                                src="/svg/map.svg" 
                                alt="address"
                                width={20}
                                height={20} />
                            <p className="small-text text-left">{location.address}</p>
                        </div>

                    </div>
              <MapAdminCustom location={location.mapLocation} />
            </div>

            <div className="bg-white flex w-full lg:w-1/2 border-1 border-gray-300 shadow-md rounded-lg p-5 max-h-129">
              <ContactForm />
            </div>

          </div>


    );
}