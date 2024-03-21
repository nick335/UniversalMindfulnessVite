import { useQueries } from "@tanstack/react-query";
import useWindowDimensions from "../../hooks/UseWindowDimensions";
import { splitArray } from "../../utilsFunction/splitArray";
import EmbeddedVideo from "../utility/EmbeddedVideo/EmbeddedVideo";
import AboutSwitchingAni from "./AboutSwitchingAni";
import { getImages } from "../../api/images/getImages";
import ErrorMessage3 from "../utility/Error/ErrorMessage3";
import { imageResponseType, videoResponseType } from "../../types/api/response";
import GallerySkeleton from "../utility/skeletons/Gallery/GallerySkeleton";
import imgBaseUrl from "../../store/ImgBaseUrl";

const AboutGallery = () => {
  const results = useQueries({
    queries: [
      {
        queryKey: ['aboutGallery'],
        queryFn: () => getImages({title: 'aboutGallery'})
      },
      {
        queryKey: ['videos'],
        queryFn: () => getImages({title: 'videos'})
      },
    ]
  })
  const isLoading = results[0].isLoading || results[1].isLoading
  const error = results[0].error || results[0].error
  const ImagesData: imageResponseType[] = results[0].data?.data.data || [] 
  const VideosData: videoResponseType[] = results[1].data?.data.data || [] 
 
  const { width } = useWindowDimensions()
  const ImageSplitArr = width < 1024  ? splitArray(ImagesData, 5) : splitArray(ImagesData, 4)
  const videoUrls = VideosData.map((each) => {
    return `${imgBaseUrl}/${each.link}`
  })
  if(error) return <ErrorMessage3 error={error} />
  if(isLoading) return <GallerySkeleton />
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 w-full overflow-x-hidden">
      <AboutSwitchingAni rowIndex={1} row={ImageSplitArr[0]} interval={5000}  />
      {
        width < 1024 && <AboutSwitchingAni rowIndex={5} row={ImageSplitArr[4]} interval={9000} /> 
      }
      <EmbeddedVideo videoUrls={videoUrls} />
      <AboutSwitchingAni rowIndex={2} row={ImageSplitArr[1]} interval={6000}  />
      <AboutSwitchingAni rowIndex={3} row={ImageSplitArr[2]} interval={7000}  />
      <AboutSwitchingAni rowIndex={4} row={ImageSplitArr[3]} interval={8000}  />
    </div>
  )
}

export default AboutGallery
