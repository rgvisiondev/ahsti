import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "./ui/button"

export function RepairsAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-3 mt-5" // adds spacing between blobs
      defaultValue="item-1"
    >
      <AccordionItem
        value="item-1"
        className="bg-white shadow-md rounded-2xl p-4 transition-all hover:shadow-lg"
      >
        <AccordionTrigger>
          <p>Project Imagine Tomorrow - McAllen homeowners only</p>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            In a partnership between AHSTI and The City of McAllen, Project Imagine Tomorrow encourages homeowners to repair or demolish their dilapidated homes through tax incentives and practical home mortgage financing solutions.  Restricted to households at 80% of the area median income or below. 
          </p>
          <Button>Next Steps</Button>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-2"
        className="bg-white shadow-md rounded-2xl p-4 transition-all hover:shadow-lg"
      >
        <AccordionTrigger>
          <p>New Beginnings - McAllen homeowners only</p>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            New Beginnings is a home replacement program for 60 years of age (or older) and/or for disabled clients who are currently living in substandard living conditions that are beyond repair. Restricted to households at 80% of the area median income or below.
          </p>
          <Button>Next Steps</Button>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-3"
        className="bg-white shadow-md rounded-2xl p-4 transition-all hover:shadow-lg"
      >
        <AccordionTrigger>
          <p>Programs for Pharr homeowners only</p>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Neighborhood Housing Program is a home rehab/replacement program that is available for Pharr residents that have lived in Pharr at least one year.
          </p>
          <p>
            Applicants must be low or moderate income at the time of application (means total gross earnings equal to or less than 80% of median family income).
          </p>
          <p>
            There are no age restrictions and the property must be current on taxes and with no liens.  The home must also be the primary residence of the homeowner.   
          </p>
          <Button>Next Steps</Button>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-4"
        className="bg-white shadow-md rounded-2xl p-4 transition-all hover:shadow-lg"
      >
        <AccordionTrigger>
          <p>All Other Programs</p>

        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">

          <p>
            There are several other rehab programs available to homeowners from Hidalgo County. Contact us 
          </p>
          <Button>Next Steps</Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
