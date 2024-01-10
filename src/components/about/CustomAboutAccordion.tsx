import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ShadComponent/ui/accordion"
import data from "./AboutData"
import Demo from '../../assets/about/demo.png'
import Nav from "../utility/CustomAccordion/Nav";
import { useState } from "react";
const CustomAboutAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState<undefined | string | null>();
  const handleAccordionToggle = (value:string) => {
    setOpenAccordion((prevOpenAccordion: string | undefined | null)  => (prevOpenAccordion === value ? null : value));
  };
  const items = data.map((each, idx) => {
    return <AccordionItem id={each.header} key={idx} value={each.header} className="mb-8">
            <div onClick={() => handleAccordionToggle(each.header)}>
              <AccordionTrigger className="text-center flex ml-auto "><h3 className="ml-auto text-lg font-medium leading-[1.63125rem]">{each.header}</h3></AccordionTrigger>
            </div>
            
            <AccordionContent className="font-lato">
              <div className="w-full aspect-[1/1.25] mt-4">
               <img src={Demo} alt="img" className="imgFocus object-cover rounded-lg"  /> 
              </div>     
              <h3 className="font-semibold text-[1.80694rem] text-headerPrimary mt-6">What is Mindfulness</h3>
              <p className="mt-[0.43rem] text-base font-medium leading-[1.782rem]">{each.para}</p>
            </AccordionContent>
          </AccordionItem>
  })
  return (
    <div>
      <Nav 
        active={openAccordion}
        navData={data}
        handleAccordionToggle={handleAccordionToggle}
      />
      <div className="mt-[2.4rem] mx-4">
        <Accordion value={openAccordion as string | undefined} type="single" className=" bg-bgDisclosure pt-12 pb-1 rounded-lg px-[1rem] " collapsible>
          <div>
          {items}
          </div> 
        </Accordion>
      </div>
    </div>
  )
}

export default CustomAboutAccordion
