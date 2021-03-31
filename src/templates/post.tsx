import React from 'react'
import { SEOImage } from '@src/_utils/SeoImage';
import { graphql } from "gatsby"

const PostPage = ({data, pageContext: post}: any) => {

    const {title, excerpt} = post.node
    console.log(data);
    SEOImage({title, tagline: excerpt});

    return (
        <div>
            This is a page
        </div>
    )
}

export const query = graphql`
  query pageQuery($slug: String!){
    wpPost(slug: {eq: $slug}) {
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
