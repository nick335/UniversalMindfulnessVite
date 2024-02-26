import Nav from '../utility/subSections/Nav'
import { Fragment, useState } from 'react'
import SectionTransitionMotion from '../utility/motion/SectionTransitionMotion'
import DesktopWWOSectionTopContent from './DesktopWWOSectionTopContent'
import { AnimatePresence } from 'framer-motion'
import { nanoid } from 'nanoid/non-secure'
import DesktopWWOSectionBottomContent from './DesktopWWOSectionBottomContent'
import { whatweofferSectionResponseType } from '../../types/api/response'
import { wwoNavLi } from '../../types/navTypes'

interface props {
  data: whatweofferSectionResponseType[]
}

const DesktopWhatWeOffer = ({ data }: props) => {
  const [activeNav, setActiveNav] = useState(data[0].title)
  const navData: wwoNavLi[] = data.map((each) => {
    return {
      header: each.title,
      para: each.body1,
    }
  })
  function switchSection (header: string){
    setActiveNav(header)
  }

  const topSections = data.map((each, idx) => {
    return <Fragment key={nanoid()}>
            {
              activeNav === each.title && (
                <SectionTransitionMotion key={idx}>
                  <DesktopWWOSectionTopContent
                    key={idx} 
                    header={each.title}
                    para={each.body1}
                    img={each.link1}
                  />
                </SectionTransitionMotion>
              )
            }
           </Fragment>
  })
  const bottomSections = data.map((each, idx) => {
    return <Fragment key={nanoid()}>
            {
              activeNav == each.title && (
                <SectionTransitionMotion key={idx}>
                  <DesktopWWOSectionBottomContent 
                    title={each.title}
                    body={each.body2}
                    img2={each.link2}
                    img3={each.link3}
                  />
                </SectionTransitionMotion>
              )
            }  
    </Fragment>
  })
  return (
    <section className='mt-16 mb-32'>
      <div className='ml-[5%] flex gap-x-5'>
        <Nav 
          data={navData}
          toggle={switchSection}
          active={activeNav}
        />
        <div>
          <AnimatePresence mode='sync'>
            {topSections} 
          </AnimatePresence> 
        </div>
      </div>
      <div>
        <AnimatePresence mode='sync'>
          {bottomSections}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default DesktopWhatWeOffer
