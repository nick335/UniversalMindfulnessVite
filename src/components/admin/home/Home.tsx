import HeroCarouselImages from "./HeroCarouselImages"
import ServicesContainer from "./ServicesContainer"
import SponsorImages from "./SponsorImages"

const AdminHome = () => {
  return (
    <div className="adminSectionsGridLayout">
      <HeroCarouselImages />
      <SponsorImages />
      <ServicesContainer />
    </div>
  )
}

export default AdminHome
