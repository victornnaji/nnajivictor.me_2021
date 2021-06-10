import Seo from "@src/components/Seo"
import BlogPostContainer, {
  BlogPostContent,
} from "@src/styles/BlogPostContainer"
import { get_url } from "@src/_utils"
import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

export const query = graphql`
  {
    privacy: allWpPage(filter: { slug: { eq: "privacy-policy" } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`

type PrivacyPolicyProps = {
  data: {
    privacy: {
      edges: [
        {
          node: {
            title: string
            content: string
          }
        }
      ]
    }
  }
}

const Privacy = ({ data }: PrivacyPolicyProps) => {
  const { title, content } = data.privacy.edges[0].node
  return (
    <BlogPostContainer>
      <Seo
        title={"privacy policy"}
        description={"Privacy policy for nnajivictor.me"}
        url={get_url("privacy-policy")}
        tags={["privacy policy"]}
        section={"Software Engineering, Web Development"}
        type="Page"
      />
      <StyledBlogPostContent className="wrapper">
        <h1 className="medium-title">{title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </StyledBlogPostContent>
    </BlogPostContainer>
  )
}

const StyledBlogPostContent = styled(BlogPostContent)`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 1.8rem;
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "+";
        position: absolute;
        left: 0;
        color: var(--link-color);
      }
    }
  }
`
export default Privacy
