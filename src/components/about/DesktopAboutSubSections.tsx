import { Fragment, useState } from 'react'
import Nav from '../utility/subSections/Nav'
import SubSectionContent from './SubSectionContent'
import SectionTransitionMotion from '../utility/motion/SectionTransitionMotion'
import { AnimatePresence } from 'framer-motion'
import { nanoid } from 'nanoid'
import { aboutSectionResponseType } from '../../types/api/response'
import { aboutNavLi } from '../../types/navTypes'

interface props {
  data: aboutSectionResponseType[]
}
const DesktopAboutSubSections = ({ data} : props) => {
  const [activeNav, setActiveNav] = useState(data[0].title)

  function switchSection (header: string){
    setActiveNav(header)
  }
  const navData: aboutNavLi[] = data.map((each) => {
    return {
      header: each.title,
      para: each.body1
    }
  })
  const sections = data.map((each, idx) => {
    return <Fragment key={nanoid()}>
            {
              activeNav === each.title && (
                <SectionTransitionMotion key={idx}>
                  <SubSectionContent 
                    key={nanoid()}
                    para={each.body1}
                    header={each.title}
                    img={each.link1}
                  />
                </SectionTransitionMotion>
              )
            }
          </Fragment>
  })
  return (
    <div className='ml-[5%] flex gap-x-5'>
      <Nav 
        data = {navData}
        active={activeNav}
        toggle={switchSection}
      />
      <div className='w-full'>
        <AnimatePresence mode='sync'>
          {sections}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default DesktopAboutSubSections
