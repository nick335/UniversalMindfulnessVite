import { Helmet } from 'react-helmet'

interface props {
  page: string
}

const SEOPageHeader = ({page}: props) => {
  return (
    <Helmet>
      <title>{page} - Discovering your True Potential </title>
      <link rel='canonical' href='https://universalmindfulness.co.uk/' />
    </Helmet>
  )
}

export default SEOPageHeader;
