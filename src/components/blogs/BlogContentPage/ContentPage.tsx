import YouMightLIkeThis from "./YouMightLIkeThis"
import ContentIdentity from "./ContentIdentity"
import ContentText from "./ContentText"
import ShareBlog from "./ShareBlog"
import imgBaseUrl from "../../../store/ImgBaseUrl"

interface props {
  header: string,
  body: string,
  category: string,
  img: string
  writtenBy: string,
  createdAt: string | undefined
  blogId?: number
}

const ContentPage = ({header, body, category, img, writtenBy, createdAt, blogId}: props) => {

  return (
    <div className="mt-8">
      <h3 className={`font-semibold text-3xl text-headerPrimary lg:max-w-[57.125rem] lg:mx-auto lg:text-[3.525rem] leading-[1.1] text-center `}>{header}</h3>
      <div className="w-full max-h-[30.25rem] aspect-[1/1.25] mt-[1.38rem] rounded-lg">
        <img src={`${imgBaseUrl}${img}`} alt={header} className="imgFocus rounded-lg object-cover"/>
      </div>
      <ContentIdentity 
        writtenBy={writtenBy}
        category={category}
        date={createdAt}
      />
      <ContentText body={body} />
      <ShareBlog title={header} blogId={blogId} />
      <YouMightLIkeThis />
    </div>
  )
}

export default ContentPage
