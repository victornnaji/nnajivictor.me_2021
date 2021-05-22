import React from 'react'
import { SEOImage } from '@src/_utils/SeoImage';
import { graphql } from "gatsby"
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from '@src/components/BlogComponents/CodeBlock';
import Paragraph from '@src/components/BlogComponents/Paragraph';
import BlogPostContainer from '@src/styles/BlogPostContainer';


const components = {
  pre: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
  code: CodeBlock,
  p: Paragraph,
}

const PostPage = ({data, pageContext: post, children}: any) => {
    const {title, excerpt} = post.node
    console.log(data.wpPost);
    // console.log(post);
    // SEOImage({title, tagline: excerpt});

    children = <div className="content" dangerouslySetInnerHTML={{__html: data.wpPost.content}}/>;
    return (
      <MDXProvider components={components}>
        <BlogPostContainer>
         {children}
        </BlogPostContainer>
      </MDXProvider>
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
