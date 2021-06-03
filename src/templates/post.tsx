import React from "react"
import { SEOImage } from "@src/_utils/SeoImage"
import { graphql } from "gatsby"
import BlogPostContainer, {
  BlogPostContent,
  BlogPostHeader,
} from "@src/styles/BlogPostContainer"
import Seo from "@src/components/Seo"
import { get_url, get_date, strip_tags } from "@src/_utils"
import { trackFinishedReadingPost } from "@src/_utils/analytics"
import GoogleAds from "@src/components/BlogComponents/GoogleAds"
import BreadCrumbs from "@src/components/BlogComponents/BreadCrumbs"
import Link from "@src/components/BlogComponents/Link"
import NewsLetter from "@src/components/BlogComponents/NewsLetter"
import parse from 'html-react-parser';
import { replaceCode } from "@src/components/BlogComponents/ReplaceCode"

interface PostProps {
  data: {
    post: {
      title: string
      content: string
      excerpt: string
      date: string | Date
      tags: any
    }
  }
  pageContext: {
    node: {
      databaseId: number
      slug: string
      title: string
      excerpt: string
    }
    slug: string
    next: {
      node: {
        databaseId: number
        excerpt: string
        slug: string
        title: string
      }
    }
    prev: {
      node: {
        databaseId: number
        excerpt: string
        slug: string
        title: string
      }
    }
  }
}




const PostPage = ({ data, pageContext: post }: PostProps) => {
  const { title, excerpt, content, date, tags } = data.post
  const cleanExcerpt = strip_tags(excerpt)
  const { next, prev, slug, node } = post
  const seoImageUrl = SEOImage({ title, tagline: cleanExcerpt })
  const url = get_url(`blog/${slug}`)
  const dateIso = get_date(date)
  const tag = tags.nodes.map((x: any) => x.name)

  let hasBeenRead = false
  if (!hasBeenRead) {
    trackFinishedReadingPost({ slug: url })
    hasBeenRead = true
  }

  // console.log(content);

  return (
    <BlogPostContainer>
      <Seo
        title={title}
        description={cleanExcerpt}
        url={url}
        image={seoImageUrl}
        imageAlt={title}
        tags={tag}
        date={dateIso}
        section={"Software Engineering, Web Development"}
        type="Article"
      />
      <GoogleAds />
      <BlogPostContent className="wrapper">
        <BlogPostHeader>
          <BreadCrumbs link="/blog"> All Articles </BreadCrumbs>
          <h1 className="medium-title">{title}</h1>
          <h2 className="subtitle">
            <time>{dateIso}</time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {tag &&
              tag.length > 0 &&
              tag.map((post_tag: string, i: number) => (
                <Link key={i} className="tag">
                  #{post_tag}
                </Link>
              ))}
          </h2>
        </BlogPostHeader>
        {parse(content, {replace: replaceCode})}
      </BlogPostContent>
      <NewsLetter />
    </BlogPostContainer>
  )
}

export const query = graphql`
  query pageQuery($slug: String!) {
    post: wpPost(slug: { eq: $slug }) {
      title
      content
      date
      categories {
        nodes {
          name
        }
      }
      tags {
        nodes {
          name
        }
      }
      excerpt
    }
  }
`

export default PostPage
