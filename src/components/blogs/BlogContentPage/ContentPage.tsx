import YouMightLIkeThis from "./YouMightLIkeThis"
import demo from '../../../assets/home/hero2.png'
import ContentIdentity from "./ContentIdentity"
import ContentText from "./ContentText"

const ContentPage = () => {
  return (
    <div className="mt-8">
      <h3 className={`font-semibold text-3xl text-headerPrimary lg:max-w-[57.125rem] lg:mx-auto lg:text-[3.525rem] leading-[1.1] text-center `}>Does being a perfectionist affect your confidence?</h3>
      <div className="w-full max-h-[30.25rem] aspect-[1/1.25] mt-[1.38rem] rounded-lg">
        <img src={demo} alt="blogImg" className="imgFocus rounded-lg object-cover"/>
      </div>
      <ContentIdentity />
      <ContentText />
      <YouMightLIkeThis />
    </div>
  )
}

export default ContentPage
