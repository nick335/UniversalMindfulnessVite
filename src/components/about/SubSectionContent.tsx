import Demo from '../../assets/about/demo.png'

interface props {
  header: string,
  para: string,
}

const SubSectionContent = ({ header, para }: props) => {
  return (
    <div>
      <div className='w-fit h-fit'>
        <img src={Demo} alt='image' className='w-full aspect-[2/1]' />
      </div>
      <div className=" mt-10 lg:mr-20 xl:mr-28">
        <h3 className="font-semibold text-[2.5rem] text-headerPrimary">
          {header}
        </h3>
        <p className="text-base leading-[1.782rem] mt-4 font-medium">
          {para}
        </p>
      </div>
    </div>
  )
}

export default SubSectionContent
