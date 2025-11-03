import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ContactSection from "./contactsection"

export function ContactTabs() {
  return (
    <div>
      <Tabs defaultValue="admin" variant="blue" className="w-full">
        <TabsList className="mx-auto">
          <TabsTrigger value="admin">Administration Building</TabsTrigger>
          <TabsTrigger value="homeownership">Homeownership Center</TabsTrigger>
          <TabsTrigger value="construction">Construction Services Building</TabsTrigger>
          <TabsTrigger value="weslaco">Weslaco Branch</TabsTrigger>
          <TabsTrigger value="fred">Fred Munguia Training House</TabsTrigger>
        </TabsList>

        <TabsContent value="admin">
          <h3>Administration Info</h3>
          <ContactSection />
        </TabsContent>
        <TabsContent value="homeownership">
          <h3>Homeownership Info</h3>
          <ContactSection />
        </TabsContent>
        <TabsContent value="construction">
          <h3>Construction Info</h3>
          <ContactSection />
        </TabsContent>
        <TabsContent value="weslaco">
          <h3>Weslaco Branch Info</h3>
          <ContactSection />
        </TabsContent>
        <TabsContent value="fred">
          <h3>Fred Munguia Training House Info</h3>
          <ContactSection />
        </TabsContent>
      </Tabs>
    </div>
  )
}
