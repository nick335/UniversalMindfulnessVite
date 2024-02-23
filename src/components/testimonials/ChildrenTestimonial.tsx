import { useQuery } from "@tanstack/react-query"
import TestimonialBox from "./TestimonialBox"
import { getContent } from "../../api/content/getContent"
import { testimonialResponseType } from "../../types/api/response"
import TestimonialSkeleton from "../utility/skeletons/TestimonialSkeleton"
import { nanoid } from "nanoid"
import ErrorMessage3 from "../utility/Error/ErrorMessage3"
import NoContent from "../utility/admin/contentdisplay/NoContent"

const ChildrenTestimonial = () => {
  const {data, isLoading, error } = useQuery(['childrenTestimonial'],  () => getContent({section: 'childrenTestimonial'}))

  const contentArr: testimonialResponseType[] = data?.data.data || []

  const loadingUi = Array.from({length: 3}).map(() => {
    return <TestimonialSkeleton key={nanoid()} />
  })

  const contentDisplay = contentArr.map((each) => {
    return <TestimonialBox 
              key={nanoid()}
              name={each.title}
              caption={each.header}
              img={each.link1}
              testimony={each.body1}
          />
  })
  return (
    <section className="mt-12">
      <h3 className="text-[1.75rem] text-headerPrimary font-semibold">Children</h3>
      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12">
        {
          isLoading ? loadingUi : error ? <ErrorMessage3 error={error} /> : contentDisplay.length === 0 ? <NoContent /> : contentDisplay
        }
      </div>
    </section>
  )
}

export default ChildrenTestimonial
