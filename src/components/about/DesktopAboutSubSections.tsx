import { Fragment, useState } from 'react'
import Nav from '../utility/subSections/Nav'
import data from './AboutData'
import SubSectionContent from './SubSectionContent'
import SectionTransitionMotion from '../utility/motion/SectionTransitionMotion'

const DesktopAboutSubSections = () => {
  const [activeNav, setActiveNav] = useState(data[0].header)

  function switchSection (header: string){
    setActiveNav(header)
  }
  const sections = data.map((each, idx) => {
    return <Fragment>
            {
              activeNav === each.header && (
                <SectionTransitionMotion key={idx}>
                  <SubSectionContent 
                    key={each.header}
                    para={each.para}
                    header={each.header}
                  />
                </SectionTransitionMotion>
              )
            }
          </Fragment>
  })
  return (
    <div className='ml-[5%] flex gap-x-5'>
      <Nav 
        data = {data}
        active={activeNav}
        toggle={switchSection}
      />
      <div>
        {sections}
      </div>
    </div>
  )
}

export default DesktopAboutSubSections
