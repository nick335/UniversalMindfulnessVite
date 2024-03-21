import { useQuery } from "@tanstack/react-query";
import useWindowDimensions from "../../hooks/UseWindowDimensions";
import { splitArray } from "../../utilsFunction/splitArray";
import EmbeddedVideo from "../utility/EmbeddedVideo/EmbeddedVideo";
import AboutSwitchingAni from "./AboutSwitchingAni";
import { getImages } from "../../api/images/getImages";
import AdminContentLoader from "../utility/Loader/AdminContentLoader";
import ErrorMessage3 from "../utility/Error/ErrorMessage3";
import { imageResponseType } from "../../types/api/response";

const AboutGallery = () => {
  const { data, isLoading, error } = useQuery(['aboutGallery'], () => getImages({
    title: 'aboutGallery'
  }))

  const Images: imageResponseType[] = data?.data.data || []
  console.log(data)
  const { width } = useWindowDimensions()
  const stringArray= [
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Ivy",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Ugli fruit",
    "Vanilla",
    "Watermelon",
    "Xigua",
    "Yam",
    "Zucchini",
    "Apricot",
    "Blueberry",
    "Cantaloupe",
    "Dragonfruit",
  ];
  const result = width < 1024  ? splitArray(Images, 5) : splitArray(Images, 4)
  const videoUrls = [
    'yCyE91-D-KI',
    'V8eWxOLXLK8',
  ]
  if(error) return <ErrorMessage3 error={error} />
  if(isLoading) return <div><AdminContentLoader /></div>
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 w-full overflow-x-hidden">
      <AboutSwitchingAni rowIndex={1} row={result[0]} interval={5000}  />
      {
        width < 1024 && <AboutSwitchingAni rowIndex={5} row={result[4]} interval={9000} /> 
      }
      <EmbeddedVideo videoUrls={videoUrls} />
      <AboutSwitchingAni rowIndex={2} row={result[1]} interval={6000}  />
      <AboutSwitchingAni rowIndex={3} row={result[2]} interval={7000}  />
      <AboutSwitchingAni rowIndex={4} row={result[3]} interval={8000}  />
    </div>
  )
}

export default AboutGallery
