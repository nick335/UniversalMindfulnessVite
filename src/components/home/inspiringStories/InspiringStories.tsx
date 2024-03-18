import AboutGallery from "../../about/AboutGallery"
import Subheader from "../../utility/subHeaders/Subheader"


const InspiringStories = () => {
  return (
    <section className='mt-[3.57rem]'>
      <Subheader 
        header="Watch Inspiring Stories"
      />
      <div className="mt-12">
        <AboutGallery />
      </div>
    </section>
  )
}

export default InspiringStories
