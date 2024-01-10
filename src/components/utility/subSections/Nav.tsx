import { aboutNavLi, wwoNavLi } from "../../../types/navTypes"

interface props {
  data: aboutNavLi[] | wwoNavLi[]
  toggle: (header: string) => void
  active: string
}

const Nav = ({ data, toggle, active }: props) => {
  const liElements = data.map((each, idx) => {
      return <li 
              onClick={() => toggle(each.header)} 
              key={idx} 
              className={`w-fit py-[1.26rem] px-[2.28rem] transition-all ease-linear duration-300 rounded-[0.45713rem] ${active === each.header ? 'text-white bg-headerSecondary': ''}`}>
              {each.header}
             </li>
  })
  return (
    <div className='min-w-[24rem] w-[24rem] max-w-[24rem] py-16 px-8 bg-navSubSections rounded-lg h-fit'>
      <ul className="text-center flex flex-col justify-center items-center gap-y-2 text-lg font-medium leading-[1.8125rem] cursor-pointer">
        {liElements}
      </ul>
    </div>
  )
}

export default Nav
