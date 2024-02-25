import { aboutSectionResponseType } from '../../types/api/response'
import DesktopAboutSubSections from './DesktopAboutSubSections'

interface props {
  data: aboutSectionResponseType[]
}

const DesktopAbout = ({ data }: props) => {
  return (
    <section>
      <DesktopAboutSubSections data={data} />
    </section>
  )
}

export default DesktopAbout
