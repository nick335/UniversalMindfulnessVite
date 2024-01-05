
interface props {
  header: string,
  para: string,
  max: string
}

const PageHeaderSection = ({ header, para, max }: props) => {
  return (
    <div className="mt-6 lg:mt-8 text-center">
      <h2 className={`font-semibold text-3xl text-headerPrimary lg:max-w-[${max}rem] lg:mx-auto lg:text-[3.4rem] leading-[1.1]`}>{header}</h2>
      <p className="mt-[0.41rem] text-base font-medium lg:text-lg">{para}</p>
    </div>
  )
}

export default PageHeaderSection
