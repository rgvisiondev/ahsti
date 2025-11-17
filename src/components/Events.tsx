import Event from "./event";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Events() {

    return (
        <div>
        <Tabs defaultValue="upcoming" className="w-full pt-5">

        <TabsList className="mx-auto">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="previous">Previous Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
            <div>
                <Event />
            </div>
            </TabsContent>

        <TabsContent value="previous">
            <div>
                <Event />
            </div>
        </TabsContent>

        </Tabs>

        </div>
    );


}