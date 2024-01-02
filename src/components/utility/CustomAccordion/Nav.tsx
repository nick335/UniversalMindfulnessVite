import { aboutNavLi, wwoNavLi } from "../../../types/navTypes"

interface props {
  handleAccordionToggle: (value: string) => void,
  navData: Array<aboutNavLi | wwoNavLi>,
  active: string | undefined
}

const Nav = ({handleAccordionToggle, navData, active} : props) => {
  const liElements = navData.map((each, idx) => {
    return <li key={idx} className={`${
      active === each.header ? 'border-b-2 border-navLiBorder' : 'border-none'
    } text-nowrap text-lg font-lato leading-[1.63125rem]`} onClick={() => handleAccordionToggle(each.header)}>
            {each.header}
          </li>
  })
  return (
    <div className="bg-bgDisclosure pt-6 pb-3 px-6 rounded-lg  max-w-full overflow-x-hidden">
      <div className="overflow-x-scroll pb-3">
        <ul className="flex items-center flex-nowrap gap-x-[1.19rem]">
          {liElements}
        </ul> 
      </div>
      
    </div>
  )
}

export default Nav
