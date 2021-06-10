import React from "react"
import { graphql, PageProps } from "gatsby"
import Hero from "@src/sections/Hero"
import Loadable from "@loadable/component"
import Seo from "@src/components/Seo"
import { get_url } from "@src/_utils"
import Layout from "@src/components/Layout"

const Featured = Loadable(() => import("@src/sections/Featured"))
const Projects = Loadable(() => import("@src/sections/Projects"))
const Explore = Loadable(() => import("@src/sections/Explore"))
const Contact = Loadable(() => import("@src/sections/Contact"))

type SiteMetadataProps = {
  title?: string
  description?: string
  author?: string
  siteUrl?: string
  name?: string
  job?: string
  siteKeywords: string
}

interface IndexPageQuery {
    hero: {
      edges: [
        {
          node: {
            siteMetadata: SiteMetadataProps
          }
        }
      ]
    }
}

const IndexPage: React.FC<PageProps<IndexPageQuery>> = ({ location, data }) => {
  return (
    <>
      <Seo
        tags={[data.hero.edges[0].node.siteMetadata.siteKeywords]}
        url={get_url()}
      />
      <Layout location={location}>
        <Hero data={data.hero} />
        <Featured />
        <Projects />
        <Explore />
        <Contact />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query IndexPageQueryQuery {
    hero: allSite {
      edges {
        node {
          siteMetadata {
            job
            name
            siteKeywords
          }
        }
      }
    }
  }
`

export default IndexPage
