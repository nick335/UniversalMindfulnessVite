import Demo from '../../assets/about/demo.png'
import { wwoNavLi } from '../../types/navTypes'

const DesktopWWOSectionTopContent = ({header, para, ul}: wwoNavLi) => {
  const liElements = ul.map((each, idx) => {
    return <li key={idx} >
              {each}
            </li>
  })
  return (
    <div>
      <div>
        <img src={Demo} alt='image' className='w-full object-fill aspect-[2/1]' />
      </div>
      <div className='mt-10 lg:mr-20 xl:mr-28'>
        <h3 className="font-semibold text-[2.5rem] text-headerPrimary">
          {header}
        </h3>
        <p className="text-base leading-[1.782rem] mt-4 font-medium">
          {para}
        </p>
        <ul className='mt-1 list-inside list-disc text-base leading-[1.782rem]'>
          {liElements}
        </ul>
      </div>
    </div>
  )
}

export default DesktopWWOSectionTopContent
