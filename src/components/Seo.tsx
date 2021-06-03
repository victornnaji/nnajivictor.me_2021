import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import ogImage from "@src/images/ogImage.png"
import logo from '@src/images/vn.png';

type Meta =
  | { property: string; content: string; name?: undefined }
  | { name: string; content: string; property?: undefined }

interface Props {
  description?: string
  image?: string
  imageAlt?: string
  lang?: string
  title?: string
  type?: string
  url: string,
  date?: string,
  section: string,
  tags: []
}
const Seo = ({
  description,
  image,
  imageAlt,
  lang,
  tags,
  date,
  section,
  title,
  type = "website",
  url,
}: Props) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          siteTitle
          description
          siteKeywords
          name
          twitterHandle
        }
      }
    }
  `)

  const siteMeta = site.siteMetadata

  const htmlLang = lang || "en"
  const metaDescription = description || siteMeta.description
  const metaImage = image || ogImage
  const metaImageFull = metaImage.startsWith("http")
    ? metaImage
    : `${siteMeta.siteUrl}${metaImage}`
  const metaTags = tags? tags.join(",") : ""
  const siteTitle = siteMeta.siteTitle
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const keywords = metaTags.length ? tags.join(",") : siteMeta.siteKeywords

  const jsonLd = {
    "@context": `https://schema.org/`,
    "@type": "Website",
    author: {
        "@type": `Person`,
        name: siteMeta.name,
    },
    keywords: keywords,
    headline: title || siteMeta.siteTitle,
    url: url,
    name: fullTitle,
    alternateName: siteTitle,
    copyrightHolder: siteMeta.name,
    copyrightYear: 2020,
    image: metaImageFull ? {
        "@type": `ImageObject`,
        url: metaImageFull,
        width: 1200,
        height: 600,
    } : undefined,
    publisher: {
        "@type": `Person`,
        name: siteMeta.name,
        logo: {
            "@type": `ImageObject`,
            url: logo,
            width: 60,
            height: 60,
        },
    },
    description: description || siteMeta.siteDescription,
    mainEntityOfPage: {
        "@type": `WebPage`,
        "@id": siteMeta.siteUrl,
    },
}
  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{fullTitle}</title>

      {/* General Tags */}
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={metaImageFull} />
      <link rel="canonical" href={url} />

      {/* OpenGraph tags */}
      {/* OpenGraph tags */}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImageFull} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:site"
        content={siteMeta.twitterHandle}
      />
      <meta
        name="twitter:creator"
        content={siteMeta.twitterHandle}
      />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImageFull} />
      <meta name="twitter:image:alt" content={imageAlt} />

      <meta name="og:article:published_time" content={date} />
      <meta name="og:article:author" content={siteMeta.name} />
      <meta name="og:article:section" content={section} />
      {tags.map((tag, index) => (
        <meta name="og:article:tag" content={tag} key={index}/>
      ))}

      {/* schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  )
}

export default Seo
