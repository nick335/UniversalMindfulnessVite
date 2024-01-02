import Team from "../components/meettheteam/Team"
import PageTransition from "../components/utility/motion/PageTransition"
import PageHeaderSection from "../components/utility/subHeaders/PageHeaderSection"
import Subheader from "../components/utility/subHeaders/Subheader"

const MeetTheTeam = () => {
  return (
    <PageTransition layout='layout'>
      <Subheader header='Meet the Team' />
      <PageHeaderSection 
        header='Meet the Team: The right skills, the right people.'
        para='Mindfulness is a way of paying attention to, and seeing what is happening in our lives with clarity.'
        max='50.5'
      />
      <section className="mt-12 lg:grid lg:grid-cols-2 lg:gap-x-4 xl:gap-x-10">
        <Team />
        <Team />
        <Team />
        <Team />
      </section>
    </PageTransition>
  )
}

export default MeetTheTeam
