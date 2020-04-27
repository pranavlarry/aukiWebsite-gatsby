import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {


  const seoMeta = {
    title: 'AUKI',
    description: '',
    image: ``,
    url: ``,
    keywords: ``,
  }

  const ogMeta = {
    title: 'AUKI',
    description: '',
    image: ``,
    url: ``,
  }

  const twitterMeta = {
    title: 'AUKI',
    description: '',
    image: ``,
    imageAlt: ``,
  }


  return (
    <Helmet title={seoMeta.title}>

      <meta name="description" content={seoMeta.description} />
      <meta name="image" content={seoMeta.image} />
      <meta name="keywords" content={seoMeta.keywords} />
      

      <meta property="og:url" content={ogMeta.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogMeta.title} />
      <meta property="og:description" content={ogMeta.description} />
      <meta property="og:image" content={ogMeta.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterMeta.title} />
      <meta name="twitter:description" content={twitterMeta.description} />
      <meta name="twitter:image" content={twitterMeta.image} />
      <meta name="twitter:image:alt" content={twitterMeta.imageAlt} />
      
    </Helmet>
  )
}

export default SEO
