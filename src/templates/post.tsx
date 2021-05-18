import React from 'react'
import { SEOImage } from '@src/_utils/SeoImage';
import { graphql } from "gatsby"

const PostPage = ({data, pageContext: post}: any) => {

    const {title, excerpt} = post.node
    console.log(data);
    console.log(post);
    // SEOImage({title, tagline: excerpt});

    return (
        <div>
          post title: {title}
            <div>This is a page</div>
            another title: {data.wpPost.title}
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
