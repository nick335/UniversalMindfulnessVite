import { Helmet } from 'react-helmet'

interface props {
  desc: string
}

const SEOPageDescription = ({desc}: props) => {
  return (
    <Helmet>
      <meta name="description" content={desc} />
    </Helmet>
  )
}

export default SEOPageDescription
