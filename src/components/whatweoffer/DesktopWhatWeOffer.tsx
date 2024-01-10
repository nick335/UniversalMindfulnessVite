import data from './WWOData'
import Nav from '../utility/subSections/Nav'
import { Fragment, useState } from 'react'
import SectionTransitionMotion from '../utility/motion/SectionTransitionMotion'
import DesktopWWOSectionTopContent from './DesktopWWOSectionTopContent'
import { AnimatePresence } from 'framer-motion'
import { nanoid } from 'nanoid/non-secure'
import DesktopWWOSectionBottomContent from './DesktopWWOSectionBottomContent'

const DesktopWhatWeOffer = () => {
  const [activeNav, setActiveNav] = useState(data[0].header)

  function switchSection (header: string){
    setActiveNav(header)
  }

  const topSections = data.map((each, idx) => {
    return <Fragment key={nanoid()}>
            {
              activeNav === each.header && (
                <SectionTransitionMotion key={idx}>
                  <DesktopWWOSectionTopContent
                    key={idx} 
                    header={each.header}
                    para={each.para}
                    ul={each.ul}
                  />
                </SectionTransitionMotion>
              )
            }
           </Fragment>
  })
  const bottomSections = data.map((each, idx) => {
    return <Fragment key={nanoid()}>
            {
              activeNav == each.header && (
                <SectionTransitionMotion key={idx}>
                  <DesktopWWOSectionBottomContent />
                </SectionTransitionMotion>
              )
            }  
    </Fragment>
  })
  return (
    <section className='mt-16 mb-32'>
      <div className='ml-[5%] flex gap-x-5'>
        <Nav 
          data={data}
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
        {bottomSections}
      </div>
    </section>
  )
}

export default DesktopWhatWeOffer
