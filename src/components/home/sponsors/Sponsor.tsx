import { useQuery } from "@tanstack/react-query"
import SlidingImages from "./SlidingImages"
import { getImages } from "../../../api/images/getImages"
import { imageResponseType } from "../../../types/api/response"
import AdminContentLoader from "../../utility/Loader/AdminContentLoader"
import ErrorMessage3 from "../../utility/Error/ErrorMessage3"
import NoContent from "../../utility/admin/contentdisplay/NoContent"

const Sponsor = () => {
  const { data, isLoading, error } = useQuery(['SponsorImages'], () => getImages({ title: 'SponsorImages' }))

  const Images: imageResponseType[] = data?.data.data || []

  const imagesLinks = Images.map((each) => {
    return each.link
  })

  return (
    <section className="mt-10 lg:mt-32">
        <p className="text-center font-semibold">Join 150+ companies that care about emotional intelligence</p>
        <div className="mt-8 lg:mt-12">
          {
            isLoading ? <AdminContentLoader /> : error ? <ErrorMessage3 error={error} /> : imagesLinks.length === 0 ? <NoContent /> : <SlidingImages images={imagesLinks} />
          }
        </div>
    </section>
  )
}

export default Sponsor
