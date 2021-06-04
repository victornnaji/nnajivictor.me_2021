import React from "react"
import BlogPostContainer, {
  BlogPostContent,
} from "@src/styles/BlogPostContainer"
import { graphql, Link } from "gatsby"
import Seo from "@src/components/Seo"
import { get_url } from "@src/_utils"
import styled from "styled-components"
import useLoadMore from "@src/_hooks/useLoadMore"
import { kebabCase } from "lodash"
import { DoubleLine } from "@src/pages/blog"
import FilledButton, { FilledButtonText } from "@src/components/FilledButton"

type TagProps = {
  pageContext: pageContextProps
  data: dataProps
}

interface pageContextProps {
  tag: string
}

interface dataProps {
  mdxPost: mdxProps
  wpPost: wpProps
}

interface mdxProps {
  edges: [
    {
      node: mdxNode
    }
  ]
}

interface mdxNode {
  node: {
    id: string
    slug: string
    frontmatter: {
      date: string | Date
      title: string
      tags: string[]
    }
  }
}

interface wpProps {
  edges: [
    {
      node: wpNode
    }
  ]
}

interface wpNode {
  node: {
    databaseId: number
    date: string | Date
    slug: string
    tags: {
      nodes: [{ slug: string }]
    }
    title: string
  }
}

const Tag = ({ data, pageContext }: TagProps) => {
  let tag = pageContext.tag
  tag = tag.replace(tag[0], tag[0].toUpperCase())
  const wp = data.wpPost.edges
  const mdx = data.mdxPost.edges
  const url = get_url(`tag/${tag}`)
  const seoTag = [tag]

  const {
    hasMore: wpHasMore,
    handleLoadMore: wpHandleLoadMore,
    list: wpList,
  } = useLoadMore({ data: wp })

  const {
    hasMore: mdxHasMore,
    handleLoadMore: mdxHandleLoadMore,
    list: mdxList,
  } = useLoadMore({ data: mdx })

  return (
    <BlogPostContainer>
      <Seo
        title={tag}
        description={`View all tutorials and articles on ${tag}`}
        url={url}
        tags={seoTag}
        section={"Tag lists"}
        type="Tag Page"
      />
      <BlogPostContent className="wrapper">
        <h1 className="tag-title" style={{ fontSize: "7rem" }}>
          #{pageContext.tag}
        </h1>
        <StyledTagContent>
          {wp && wp.length > 0 && (
            <>
              <div className="title">
                <h2>Articles/Blogs</h2>
                <span>
                  {wp.length} Article{wp.length > 1 ? "s" : ""}
                </span>
              </div>
              <DoubleLine />
              <ul className="tag-list">
                {wpList.map((article: wpNode) => {
                  const { databaseId, slug, date, tags, title } = article.node
                  return (
                    <li key={databaseId}>
                      <h3>
                        <Link to={`/blog/${slug}`} className="link">
                          {title}
                        </Link>
                      </h3>
                      <p className="subtitle">
                        <time>
                          {new Date(date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span>&nbsp;&mdash;&nbsp;</span>
                        {tags &&
                          tags.nodes.length > 0 &&
                          tags.nodes.map((tag, i) => (
                            <Link
                              key={i}
                              to={`/tag/${kebabCase(tag.slug)}/`}
                              className="link tag"
                            >
                              #{tag.slug}
                            </Link>
                          ))}
                      </p>
                    </li>
                  )
                })}
                {wpHasMore ? (
                  <div
                    className="load-more"
                    style={{
                      display: "flex",
                      width: "100%",
                      marginTop: "2rem",
                      marginBottom: "5rem",
                      cursor: "pointer",
                    }}
                  >
                    <FilledButton>
                      <button onClick={wpHandleLoadMore}>
                        <FilledButtonText text="Load More Articles" />
                      </button>
                    </FilledButton>
                  </div>
                ) : (
                  <div className="empty-space"></div>
                )}
              </ul>
            </>
          )}
        </StyledTagContent>
        <StyledTagContent>
          {mdx && mdx.length > 0 && (
            <>
              <div className="title">
                <h2>Tutorials/Playground</h2>
                <span>
                  {mdx.length} Post{mdx.length > 1 ? "s" : ""}
                </span>
              </div>
              <DoubleLine />
              <ul className="tag-list">
                {mdxList.map((post: mdxNode) => {
                  const { frontmatter, slug, id } = post.node
                  return (
                    <li key={id}>
                      <h3>
                        <Link to={`/playground/${slug}`} className="link">
                          {frontmatter.title}
                        </Link>
                      </h3>
                      <p className="subtitle">
                        <time>
                          {new Date(frontmatter.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </time>
                        <span>&nbsp;&mdash;&nbsp;</span>
                        {frontmatter.tags &&
                          frontmatter.tags.length > 0 &&
                          frontmatter.tags.map((tag: string, i: number) => (
                            <Link
                              key={i}
                              to={`/tag/${kebabCase(tag)}/`}
                              className="link tag"
                            >
                              #{tag}
                            </Link>
                          ))}
                      </p>
                    </li>
                  )
                })}
                {mdxHasMore ? (
                  <div
                    className="load-more"
                    style={{
                      display: "flex",
                      width: "100%",
                      marginTop: "2rem",
                      marginBottom: "5rem",
                      cursor: "pointer",
                    }}
                  >
                    <FilledButton>
                      <button onClick={mdxHandleLoadMore}>
                        <FilledButtonText text="Load More Posts" />
                      </button>
                    </FilledButton>
                  </div>
                ) : (
                  <div className="empty-space"></div>
                )}
              </ul>
            </>
          )}
        </StyledTagContent>
      </BlogPostContent>
    </BlogPostContainer>
  )
}

const StyledTagContent = styled.div`
  .tag-title {
    font-size: 7rem;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    h2 {
      font-size: 3.8rem;
    }

    span {
      color: var(--link-color);
    }
  }
  .tag-list {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;

      .subtitle {
        a:not(:first-of-type) {
            margin-left: 1rem;
            display: inline-block;
        }
      }

      h3 {
        a {
          color: var(--primary-color) !important;
        }
        font-size: 2.5rem;
      }
      &:before {
        content: "+";
        position: absolute;
        left: 0;
        color: var(--link-color);
      }
    }
  }
`

export const query = graphql`
  query TagQuery($tag: String!) {
    wpPost: allWpPost(
      sort: { fields: date, order: DESC }
      filter: { tags: { nodes: { elemMatch: { slug: { eq: $tag } } } } }
    ) {
      edges {
        node {
          databaseId
          slug
          title
          date
          tags {
            nodes {
              slug
            }
          }
        }
      }
    }

    mdxPost: allMdx(
      filter: { frontmatter: { tags: { eq: $tag }, published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            tags
            title
          }
          slug
          id
        }
      }
    }
  }
`

export default Tag
