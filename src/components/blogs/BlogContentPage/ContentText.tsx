import DOMPurify from "dompurify"
interface props {
  body: string
}
const ContentText = ({ body }: props ) => {
  const sanitizedHtml = DOMPurify.sanitize(body)
  return (
    <div className="mt-6 font-medium text-base leading-[178.2%] blogbody" dangerouslySetInnerHTML={{__html: sanitizedHtml}}>
    </div>
  )
}

export default ContentText
