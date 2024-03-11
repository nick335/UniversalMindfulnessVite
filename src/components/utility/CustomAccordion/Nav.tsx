import { aboutNavLi, wwoNavLi } from "../../../types/navTypes"

interface props {
  handleAccordionToggle: (value: string) => void,
  navData: Array<aboutNavLi | wwoNavLi>,
  active: string | undefined | null
}

const Nav = ({handleAccordionToggle, navData, active} : props) => {
  const handleNavAccordionToggle = async (header: string) => {
      handleAccordionToggle(header)
      await new Promise(resolve => setTimeout(resolve, 500))
      const target = document.getElementById(header)
      target?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'end' })
  }
  const liElements = navData.map((each, idx) => {
    return <li key={idx} className={`${
      active === each.header ? 'border-b-2 border-navLiBorder' : 'border-none'
    } text-nowrap text-lg font-lato leading-[1.63125rem]`} onClick={() => handleNavAccordionToggle(each.header)}>
            {each.header}
          </li>
  })
  return (
    <div className="bg-bgDisclosure pt-6 pb-3 px-6 rounded-lg  max-w-full overflow-x-hidden ml-4">
      <div className="overflow-x-scroll pb-3" style={{ WebkitOverflowScrolling: 'touch' }}>
        <ul className="flex items-center flex-nowrap gap-x-[1.19rem]">
          {liElements}
        </ul> 
      </div>
    </div>
  )
}

export default Nav
