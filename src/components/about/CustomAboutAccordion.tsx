import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ShadComponent/ui/accordion"
import Nav from "../utility/CustomAccordion/Nav";
import { useState } from "react";
import { aboutSectionResponseType } from "../../types/api/response";
import DOMPurify from "dompurify";
import { aboutNavLi } from "../../types/navTypes";
import imgBaseUrl from "../../store/ImgBaseUrl";

interface props {
  data: aboutSectionResponseType[]
}
const CustomAboutAccordion = ({ data }: props) => {
  const [openAccordion, setOpenAccordion] = useState<undefined | string | null>();
  const handleAccordionToggle = (value:string) => {
    setOpenAccordion((prevOpenAccordion: string | undefined | null)  => (prevOpenAccordion === value ? null : value));
  };
  const navData: aboutNavLi[] = data.map((each) => {
    return {
      header: each.title,
      para: each.body1
    }
  })
  const items = data.map((each, idx) => {
    const sanitizedHtml = DOMPurify.sanitize(each.body1)
    return <AccordionItem id={each.title} key={idx} value={each.title} className="mb-8">
            <div onClick={() => handleAccordionToggle(each.title)}>
              <AccordionTrigger className="text-center flex ml-auto "><h3 className="ml-auto text-lg font-medium leading-[1.63125rem]">{each.title}</h3></AccordionTrigger>
            </div>
            
            <AccordionContent className="font-lato">
              <div className="w-full aspect-[1/1.25] mt-4">
               <img src={`${imgBaseUrl}${each.link1}`} alt="img" className="imgFocus object-cover rounded-lg"  /> 
              </div>     
              <h3 className="font-semibold text-[1.80694rem] text-headerPrimary mt-6">{each.title}</h3>
              <div className="mt-[0.43rem] text-base font-medium leading-[1.782rem]" dangerouslySetInnerHTML={{__html: sanitizedHtml}}></div>
            </AccordionContent>
          </AccordionItem>
  })
  return (
    <div>
      <Nav 
        active={openAccordion}
        navData={navData}
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
