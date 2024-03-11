import Nav from "../utility/CustomAccordion/Nav";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ShadComponent/ui/accordion"
import { whatweofferSectionResponseType } from "../../types/api/response";
import imgBaseUrl from "../../store/ImgBaseUrl";
import DOMPurify from "dompurify";
import { wwoNavLi } from "../../types/navTypes";
import styles from '../about/about.module.css'

interface props {
  data: whatweofferSectionResponseType[]
}
const MobileWhatWeOffer = ({ data }: props) => {
  const [openAccordion, setOpenAccordion] = useState<undefined | string | null>();
  const navData: wwoNavLi[] = data.map((each) => {
    return {
      header: each.title,
      para: each.body1,
      ul: []
    }
  })
  const handleAccordionToggle = (value:string) => {
    setOpenAccordion((prevOpenAccordion: string | undefined | null)   => (prevOpenAccordion === value ? null : value));
  };
  const items = data.map((each, idx) => {
    const sanitizedHtml = DOMPurify.sanitize(each.body1)
    const sanitizedHtml2 = DOMPurify.sanitize(each.body2)
    return <AccordionItem key={idx} value={each.title} className="mb-8">
            <AccordionTrigger className="text-center flex ml-auto "><h3 className="ml-auto text-lg font-medium leading-[1.63125rem]" onClick={() => handleAccordionToggle(each.title)}>{each.title}</h3></AccordionTrigger>
            <AccordionContent className="font-lato">
              <div className="w-full aspect-[1/1.25] mt-4">
               <img src={`${imgBaseUrl}${each.link1}`} alt={each.title} className="imgFocus object-cover rounded-lg w-full h-full"  /> 
              </div>     
              <h3 className="font-semibold text-[1.80694rem] text-headerPrimary mt-6 leading-[1.2]">{each.title}</h3>
              <div className={`mt-[0.43rem] text-base font-medium leading-[1.782rem] ${styles.para}`} dangerouslySetInnerHTML={{__html: sanitizedHtml}}></div>
              <div className="w-full aspect-[1/1.25] mt-4">
               <img src={`${imgBaseUrl}${each.link2}`} alt="img" className="imgFocus object-cover rounded-lg w-full h-full"  /> 
              </div>
              <div className="w-full aspect-[1/1.25] mt-4">
               <img src={`${imgBaseUrl}${each.link3}`} alt="img" className="imgFocus object-cover rounded-lg w-full h-full"  /> 
              </div>
               { each.body2 && <div className={`text-base font-medium leading-[1.782rem] mt-2 ${styles.para}`} dangerouslySetInnerHTML={{__html: sanitizedHtml2}} >
              </div>}
            </AccordionContent>
          </AccordionItem>
  })
  return (
    <div className="mt-12">
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

export default MobileWhatWeOffer
