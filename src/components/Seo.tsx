import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import ogImage from "@src/images/ogImage.png"
import logo from "@src/images/vn.png"

import appleIcon57x57 from "@src/images/favicons/apple-icon-57x57.png"
import appleIcon60x60 from "@src/images/favicons/apple-icon-60x60.png"
import appleIcon72x72 from "@src/images/favicons/apple-icon-72x72.png"
import appleIcon76x76 from "@src/images/favicons/apple-icon-76x76.png"
import appleIcon114x114 from "@src/images/favicons/apple-icon-114x114.png"
import appleIcon120x120 from "@src/images/favicons/apple-icon-120x120.png"
import appleIcon144x144 from "@src/images/favicons/apple-icon-144x144.png"
import appleIcon152x152 from "@src/images/favicons/apple-icon-152x152.png"
import appleIcon180x180 from "@src/images/favicons/apple-icon-180x180.png"
import androidIcon192x192 from "@src/images/favicons/android-icon-192x192.png"
import favicon32x32 from "@src/images/favicons/favicon-32x32.png"
import favicon96x96 from "@src/images/favicons/favicon-96x96.png"
import favicon16x16 from "@src/images/favicons/favicon-16x16.png"

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
  url: string
  date?: string
  section?: string
  tags: [] | string[]
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
  const metaTags = tags ? tags.join(",") : ""
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
    image: metaImageFull
      ? {
          "@type": `ImageObject`,
          url: metaImageFull,
          width: 1200,
          height: 600,
        }
      : undefined,
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
      <html lang={htmlLang} title={fullTitle}/>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={metaImageFull} />
      <link rel="canonical" href={url} />

      <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57x57} />
      <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60x60} />
      <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72x72} />
      <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76x76} />
      <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114x114} />
      <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120x120} />
      <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144x144} />
      <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152x152} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={androidIcon192x192}
      />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="96x96" href={favicon96x96} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImageFull} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_US" />
      <meta name="og:article:published_time" content={date} />
      <meta name="og:article:author" content={siteMeta.name} />
      <meta name="og:article:section" content={section} />
      {tags.map((tag: string, index: number) => (
        <meta name="og:article:tag" content={tag} key={index} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMeta.twitterHandle} />
      <meta name="twitter:creator" content={siteMeta.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImageFull} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

export default Seo
