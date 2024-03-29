import React from "react"
import { GlobalStyles } from "@src/styles"
import { SkipToContent } from "@src/styles/components"
import { useLoader, useMediaQuery } from "@src/_hooks"
import { LoadingContextInterface } from "@src/_hooks/hooks.types"
import Loading from "./Loading"
import Banner from "./Banner"
import Header from "./Header"
import MemoMenu from "./Menu"
import { gsap } from "gsap"
import { Helmet } from "react-helmet"
import PageLoading from "./PageLoading"
import { PageProps, useStaticQuery, graphql } from "gatsby"
import favicon from "@src/images/favicons/favicon.ico"
import Seo from "./Seo"
import { get_url } from "@src/_utils"

const Layout: React.FC<PageProps> = ({ children, location }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle
          description
          siteKeywords
          siteUrl
        }
      }
    }
  `)
  const [isLoading] = useLoader() as LoadingContextInterface
  const isMobile = useMediaQuery()

  const isHome = location.pathname === "/"
  // const isBlog = /(\/blog)\/?(.*)?/g.test(location.pathname);
  const isCaseStudy = /(\/case-study)\/?(.*)?/g.test(location.pathname)

  React.useEffect(() => {
    if (isHome) {
      if (isMobile) {
        gsap.to(
          [
            [".col__image-wrap"],
            ".heading__inner",
            ".name-container",
            ".intro__occupation",
            ".slide",
            ".intro__name",
            ".name-container",
            ".intro__title .intro__occupation",
          ],
          { clearProps: "all" }
        )
      }
    }
  }, [isMobile, isHome])

  return (
    <>
      <GlobalStyles />
      <SkipToContent href="#content">Skip to Content</SkipToContent>
      {/* <Helmet>
        <html lang="en" prefix="og: http://ogp.me/ns#" title={site.siteTitle}/>
        <link rel="shortcut icon" href={favicon} />
        <meta name="description" content={site.description} />
      </Helmet> */}
      <Seo url={site.siteUrl} />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="layout__inner">
          {isCaseStudy ? (
            <Helmet>
              <html className="caseStudy" lang="en" />
            </Helmet>
          ) : null}
          {/* <Banner show={true}/> */}
          <Header />
          <MemoMenu />
          {children}
          <PageLoading />
        </div>
      )}
    </>
  )
}

export default Layout
