import data from "./footerSponsorData"

const FooterSponsorLogo = () => {
  const imgElements = data.map((each) => {
    return <img src={each.img} alt='sponsor-logo' className={`${each.style} object-fill`} />
  })
  return (
    <div className="flex items-center gap-x-4 mt-20">
      {imgElements}
    </div>
  )
}

export default FooterSponsorLogo
