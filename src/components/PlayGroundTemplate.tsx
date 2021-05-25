import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./BlogComponents/CodeBlock"
import BlogPostContainer, {
  BlogPostContent,
  BlogPostHeader,
} from "@src/styles/BlogPostContainer"
import ReactComponentHolder from "./BlogComponents/ReactComponent"
import Em from "./BlogComponents/Em"
import Paragraph from "./BlogComponents/Paragraph"
import Link from "./BlogComponents/Link"
import { OrderedList, UnorderedList } from "./BlogComponents/List"
import GoogleAds from "./BlogComponents/GoogleAds"
import BreadCrumbs from "./BlogComponents/BreadCrumbs"
import NewsLetter from "./BlogComponents/NewsLetter"
import Alerts from "./BlogComponents/Alerts"
import Demo from "./BlogComponents/Demo"
import LiveCodeEditor from "./BlogComponents/LiveCodeEditor"
import { trackFinishedReadingPost } from "@src/_utils/analytics"
import BlogImage from "./BlogComponents/Image"
import Seo from "./Seo"
import { get_url } from "@src/_utils"
import { SEOImage } from "@src/_utils/SeoImage"
import { graphql, useStaticQuery } from "gatsby"

const components = {
  pre: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
  code: CodeBlock,
  ReactComponentHolder,
  em: Em,
  p: Paragraph,
  a: Link,
  ol: OrderedList,
  ul: UnorderedList,
  Alerts,
  Demo,
  LiveCodeEditor,
  BlogImage,
}

interface Props {
  pageContext: {
    frontmatter: {
      date: Date
      slug: string
      title: string
      excerpt: string
      tags: []
      shortDescription?: string
    }
  }
}

const PlayGroundTemplate: React.FC<Props> = ({ children, pageContext }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
        }
      }
    }
  `)

  const {
    excerpt,
    date,
    title,
    slug,
    tags,
    shortDescription,
  } = pageContext.frontmatter

  const url = get_url(`playground/${slug}`)

  const seoImageUrl = SEOImage({ title, tagline: excerpt })

  const dateIso = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  let hasBeenRead = false
  if (!hasBeenRead) {
    trackFinishedReadingPost({ slug: url })
    hasBeenRead = true
  }

  return (
    <MDXProvider components={components}>
      <Seo
        title={title}
        description={excerpt}
        url={url}
        image={seoImageUrl}
        imageAlt={title}
        tags={tags}
        type="tutorial"
        meta={[
          { property: "og:article:published_time", content: dateIso },
          {
            property: "og:article:author",
            content: data.site.siteMetadata.name,
          },
          { property: "og:article:section", content: "Technology" },
          ...(tags || []).map(tag => ({
            property: "og:article:tag",
            content: tag,
          })),
        ]}
        schemaOrg={{
          "@type": "BlogPosting",
          headline: shortDescription,
          articleBody: children,
          author: {
            "@type": "Person",
            name: data.site.siteMetadata.name,
          },
          datePublished: dateIso,
          publisher: {
            "@type": "Person",
            name: data.site.siteMetadata.name,
          },
        }}
      />
      <BlogPostContainer>
        <GoogleAds />
        <BlogPostContent className="wrapper">
          <BlogPostHeader>
            <BreadCrumbs link="/playground"> All Playgrounds </BreadCrumbs>
            <h1 className="medium-title">{title}</h1>
            <h2 className="subtitle">
              <time>{dateIso}</time>
              <span>&nbsp;&mdash;&nbsp;</span>
              {tags &&
                tags.length > 0 &&
                tags.map((tag: string, i: number) => (
                  <Link key={i} className="tag">
                    #{tag}
                  </Link>
                ))}
            </h2>
          </BlogPostHeader>
          {children}
        </BlogPostContent>
        <NewsLetter />
      </BlogPostContainer>
    </MDXProvider>
  )
}

export default PlayGroundTemplate
