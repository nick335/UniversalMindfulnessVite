import { useQuery } from "@tanstack/react-query"
import Team from "../components/meettheteam/Team"
import PageTransition from "../components/utility/motion/PageTransition"
import SEOPageHeader from "../components/utility/seo/SEOPageHeader"
import PageHeaderSection from "../components/utility/subHeaders/PageHeaderSection"
import Subheader from "../components/utility/subHeaders/Subheader"
import { getContent } from "../api/content/getContent"
import { teamResponseType } from "../types/api/response"
import TeamMemberSkeleton from "../components/utility/skeletons/TeamMemberSkeleton"
import { nanoid } from "nanoid"
import NoContent from "../components/utility/admin/contentdisplay/NoContent"
import ErrorMessage3 from "../components/utility/Error/ErrorMessage3"
import SEOPageDescription from "../components/utility/seo/SEOPageDescription"

const MeetTheTeam = () => {
  const { data, isLoading, error } = useQuery(['team'], () => getContent({section: 'team'}))

  const contentArr: teamResponseType[] = data?.data.data || []

  const bordercolors = [
    '#FC5704', '#527BBD', '#CDE0FF', '#FFEEE6'
  ]

  const contentDisplay = contentArr.map((each, id) => {
    return <Team 
              key={nanoid()}
              name={each.title}
              role={each.header}
              color={bordercolors[id]}
              introduction={each.body1}
              img={each.link1}
          />
  })

  const LoadingUi = [
    <TeamMemberSkeleton key={nanoid()} />,
    <TeamMemberSkeleton key={nanoid()} />,
    <TeamMemberSkeleton key={nanoid()} />,
    <TeamMemberSkeleton key={nanoid()} />,
  ]
  return (
    <PageTransition layout='layout'>
      <SEOPageHeader 
        page='The Team'
      />
      <SEOPageDescription 
        desc='Unlock your true potential with Universal Mindfulness. Our team is dedicated to helping you discover the power of mindfulness in achieving personal growth and transformation. Join us on your journey to self-discovery and fulfillment today.'
      />
      <Subheader header='Meet the Team' />
      <PageHeaderSection 
        header='Meet the Team: The right skills, the right people.'
        para='Mindfulness is a way of paying attention to, and seeing what is happening in our lives with clarity.'
        max='50.5'
      />
      { error ? <ErrorMessage3 error={error} /> : 
      <section className="mt-12 lg:grid lg:grid-cols-2 lg:gap-x-4 xl:gap-x-10">
        {
          isLoading ? LoadingUi : contentDisplay.length === 0 ? <NoContent /> : contentDisplay
        }
      </section>
      }
    </PageTransition>
  )
}

export default MeetTheTeam
