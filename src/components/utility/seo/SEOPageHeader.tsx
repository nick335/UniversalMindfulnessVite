import { Helmet } from 'react-helmet'

interface props {
  page: string
}

const SEOPageHeader = ({page}: props) => {
  return (
    <Helmet>
      <title>{page} - Discovering your True Potential </title>
      <link rel='canonical' href='https://universalmindfulness.co.uk/' />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="max-image-preview:large" />
    </Helmet>
  )
}

export default SEOPageHeader;
