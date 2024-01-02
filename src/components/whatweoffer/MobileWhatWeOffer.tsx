import Nav from "../utility/CustomAccordion/Nav";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ShadComponent/ui/accordion"
import data from './WWOData'
import Demo from '../../assets/about/demo.png'
const MobileWhatWeOffer = () => {
  const [openAccordion, setOpenAccordion] = useState<undefined | string>();
  const handleAccordionToggle = (value:string) => {
    setOpenAccordion((prevOpenAccordion: string | undefined)  => (prevOpenAccordion === value ? undefined : value));
  };
  const items = data.map((each, idx) => {
    return <AccordionItem key={idx} value={each.header} className="mb-8">
            <AccordionTrigger className="text-center flex ml-auto "><h3 className="ml-auto text-lg font-medium leading-[1.63125rem]" onClick={() => handleAccordionToggle(each.header)}>{each.header}</h3></AccordionTrigger>
            <AccordionContent className="font-lato">
              <div className="w-full aspect-[1/1.25] mt-4">
               <img src={Demo} alt="img" className="imgFocus object-cover rounded-lg"  /> 
              </div>     
              <h3 className="font-semibold text-[1.80694rem] text-headerPrimary mt-6 leading-[1.2]">Universal Mindfulness for Children</h3>
              <p className="mt-[0.43rem] text-base font-medium leading-[1.782rem]">{each.para}</p>
              <ul className="mt-1 list-inside list-disc">
                {each.ul.map((each, idx) => {
                  return <li key={idx} className="">{each}</li>
                })}
              </ul>
              <div className="w-full aspect-[1/1.25] mt-4">
               <img src={Demo} alt="img" className="imgFocus object-cover rounded-lg"  /> 
              </div>'<div className="w-full aspect-[1/1.25] mt-4">
               <img src={Demo} alt="img" className="imgFocus object-cover rounded-lg"  /> 
              </div>'
            </AccordionContent>
          </AccordionItem>
  })
  return (
    <div className="mt-12">
      <Nav 
        active={openAccordion}
        navData={data}
        handleAccordionToggle={handleAccordionToggle}
      />
      <div className="mt-[2.4rem]">
        <Accordion value={openAccordion} type="single" className=" bg-bgDisclosure pt-12 pb-1 rounded-lg px-[1rem] " collapsible>
          <div>
          {items}
          </div> 
        </Accordion>
      </div>
    </div>
  )
}

export default MobileWhatWeOffer
