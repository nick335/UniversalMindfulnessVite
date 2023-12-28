
interface props {
    header: string
}

const Subheader = ({ header }: props) => {
  return (
    <div className='w-full flex justify-center'>
      <h3 className="bg-bgSubHeader p-[0.32875rem] font-semibold rounded-[0.32875rem] lg:p-2 lg:rounded-lg lg:text-lg font-lato text-headerSecondary text-[0.73963rem]">{header}</h3>
    </div>
  )
}

export default Subheader
