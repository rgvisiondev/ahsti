import { Button } from "./ui/button";
import Image from "next/image";

const events = [
    { title: "AHSTI Event", text: "Join us for an evening of networking with business leaders from across the Rio Grande Valley", day: "15", month: "MAY", time: "6:00 PM - 9:00 PM", location: "1420 Erie Ave, McAllen, TX 78501" },
    { title: "AHSTI Event", text: "Join us for an evening of networking with business leaders from across the Rio Grande Valley", day: "15", month: "MAY", time: "6:00 PM - 9:00 PM", location: "1420 Erie Ave, McAllen, TX 78501" },
]

export default function Event() {

    return (
        <div className="flex flex-col lg:flex-row gap-3 mt-5 mb-3">{
            events.map((item, index) => (


                <div key={index} className="w-full lg:w-1/2 bg-white rounded-lg border-2 border-gray-300 text-left flex flex-row transform hover:translate-y-[-5px] transition-all hover:shadow-lg">

                    <div className="border-r-2 border-primary flex flex-col w-1/6  p-2 lg:p-5 text-center justify-center">
                        <h3 className="text-primary">{item.day}</h3>
                        <p className="text-gray-400">{item.month}</p>
                    </div>

                    <div className="flex flex-col w-5/6 p-2 lg:p-5 gap-3">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>

                        <ul className="gap-3">

                            <li>
                                <div className="flex flow-row gap-3">
                                    <Image
                                        src="/svg/clock.svg"
                                        alt="phone"
                                        width={15}
                                        height={15} />
                                    <p className="small-text text-left">{item.time}</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex flow-row gap-3">
                                    <Image
                                        src="/svg/map.svg"
                                        alt="phone"
                                        width={15}
                                        height={15} />
                                    <p className="small-text text-left">{item.location}</p>
                                </div>
                            </li>
                        </ul>
                        <Button className="w-full lg:w-[200px]" size="lg">View Event</Button>

                    </div>

                </div>
            ))}</div>
    );


}