import PageTransition from '../components/utility/motion/PageTransition'
import Subheader from '../components/utility/subHeaders/Subheader'
import PageHeaderSection from '../components/utility/subHeaders/PageHeaderSection'
import Event from '../components/events/Event'

const Events = () => {
  return (
    <PageTransition layout='layout'>
      <Subheader header='Events' />
      <PageHeaderSection 
        header='Providing emotional intelligence and mindfulness in adults and kids.'
        para='Throughout the year, we offer adult workshops, kids clubs and training programmes focused on developing emotional intelligence and mindfulness.'
        max='57.125'
      />
      <section className='mt-7 lg:mt-12 lg:mb-32'>
        <Event />
        <Event />
        <Event />
        <Event />
      </section>
    </PageTransition>
  )
}

export default Events
