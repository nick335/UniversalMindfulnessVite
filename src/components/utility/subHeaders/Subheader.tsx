
interface props {
    header: string
}

const Subheader = ({ header }: props) => {
  return (
    <div className='w-full flex justify-center'>
      <h3 className="bg-bgSubHeader p-[0.32875rem] font-semibold rounded-[0.32875rem] lg:p-2 lg:rounded-lg lg:text-xl font-lato text-headerSecondary text-[0.83963rem] capitalize underline underline-offset-4">{header}</h3>
    </div>
  )
}

export default Subheader
