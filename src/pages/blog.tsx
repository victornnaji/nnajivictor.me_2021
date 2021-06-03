import ArticleIcon from '@src/assets/Article'
import { media, theme } from '@src/styles'
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import BlogCard from '@src/components/BlogCard'
import FilledButton, { FilledButtonText } from '@src/components/FilledButton'
import BlogSearch from '@src/components/blogSearch'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    {
      posts: allWpPost(sort: {order: DESC, fields: date}) {
        edges {
          node {
            databaseId
            slug
            title
            excerpt
            date,
            tags{
              nodes {
                name
                slug
              }
            }
            featuredImage {
              node {
                altText
                localFile {
                    childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, formats: [AUTO,WEBP])
                  }
                }
              }
            }

          }
        }
      }
    }`);

    const posts = data.posts.edges;

    //state for the list
    const [list, setList] = React.useState([...posts.slice(0, 10)]);

    const [loadMore, setLoadMore] = React.useState(false);

    const [hasMore, setHasMore] = React.useState(posts.length > 10);

    const handleLoadMore = () => {
        setLoadMore(true)
    }

    React.useEffect(() => {
        if(loadMore && hasMore){
            const currentLength = list.length;
            const isMore = currentLength < posts.length
            const nextResults = isMore
              ? posts.slice(currentLength, currentLength + 8)
              : []
            setList([...list,...nextResults])
            setLoadMore(false);
        }
    }, [loadMore, hasMore]);


    React.useEffect(() => {
        const isMore = list.length < posts.length
        setHasMore(isMore)
    }, [list]); 

    return (
        <StyledBlog>
            <DoubleLine/>
            <div className="blog-title-and-search">
                <h1 className="blog-title"><ArticleIcon /> <span>Articles</span></h1>
                <BlogSearch indexName="Posts"/>
            </div>
            <p className="blog-description"> A collection of all my thoughts and findings</p>
            <StyledBlogContent>
                {list.map((article)=>(
                    <BlogCard data={article.node} key={article.node.databaseId} classname="dynamic_blog-content"/>)
                )}
            </StyledBlogContent>
            {hasMore ? (
                <div className="load-more" style={{display: "flex", justifyContent: "center", width:"100%", marginTop: "2rem", marginBottom: "5rem"}}>
                    <FilledButton>
                        <button onClick={handleLoadMore}>
                            <FilledButtonText text="Load More Articles" />
                        </button>
                    </FilledButton>
                </div>
            ) : <div className="empty-space"></div>}
        </StyledBlog>
    )
}

const StyledBlogContent = styled.div`
    display: grid;
    margin-top: 4rem;
    gap:.75rem;
    grid-row-gap: 2rem;
    @media(min-width: 600px){
        grid-template-columns:repeat(4,1fr);
        gap:2rem
    }
    @media(min-width: 1024px){
        grid-template-columns:repeat(12,1fr);
        gap: 2rem;
        grid-row-gap: 3.75rem;
    }
    
    .dynamic_blog-content{
        @media(min-width: 600px){
            grid-column:span 2
        }
        @media(min-width: 1024px){
            grid-column:span 4
        }
        ${media.phablet`margin-bottom: 3rem;`}
    }
`;

export const DoubleLine = styled.hr`
    background-color: transparent;
    height: 1.5rem;
    border-top: .2rem solid var(--primary-color);
    border-bottom: .1rem solid var(--primary-color);
    border-left: none;
    border-right: none;
`;

const StyledBlog = styled.section`
    margin-top: 5rem;
    .empty-space{
        margin-bottom: 10rem;
    }
    .blog-title-and-search{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        width: 100%;
        position: relative;
        .blog-title{
            /* margin-top: 1rem; */
            svg{
                height: 3rem;
                width: 3rem;
            }
    
            span{
                margin-left: .8rem;
                font-size: 1.4rem;
                font-family: ${theme.fonts.Mono};
            }
            display: flex;
            align-items: center;
        }
    }

    .blog-description{
        margin-top: 2rem;
        font-size: 2rem;
        font-family: ${theme.fonts.Inter};
        text-align: center;
        font-weight: 700;
    }
`;



export default BlogPage
