import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components';
import { media, theme } from '@src/styles';
import ExternalLink from '@src/assets/icons/ExternalLink';
import { kebabCase } from 'lodash';

interface Props {
    node: {
        title: string,
        excerpt: string,
        databaseId: number,
        slug: string,
        categories: {
            nodes: [{name: string, slug: string}]
        }
    }
}
const SearchSuggestions = () => {
    
    const data = useStaticQuery(graphql`
    {
      suggested: allWpPost(filter: {MakeFeaturedPost: {makeFeaturedPost: {eq: true}}}, limit: 3) {
        edges {
          node {
            title
            excerpt
            databaseId
            slug
            categories {
                nodes {
                    name
                    slug
                }
            }
          }
        }
      }
    }
  `);

    const suggested = data.suggested.edges;

    return (
        <StyledSearchSuggestions>
            <div className="suggested-contents-holder">
                {suggested && suggested.map((post: Props) => {
                    const {title, databaseId, excerpt, categories, slug} = post.node;
                    return (
                        <div className="suggested-contents" key={databaseId}>
                            <h4 className="title">{title}</h4>
                            <p className="content"  dangerouslySetInnerHTML={{__html: excerpt}}/>
                            <div className="category">
                                <span>In</span> 
                                {
                                    categories.nodes.map((category: any, i) => (
                                        <Link to={`/blog/category/${kebabCase(category.slug)}/`} key={i} className="link">{category.name}</Link>
                                    ))
                                }
                            </div>
                            <div className="external-link">
                                 <Link to={`/blog/${slug}`} className="link read-link"> <ExternalLink /> <span>Read Article</span></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </StyledSearchSuggestions>
    )
}

const StyledSearchSuggestions = styled.div`
    margin-top: 4rem;
    ${media.tablet`margin-top: 2rem`}

    .suggested-contents-holder{
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(20rem, 30rem));
       justify-content: center;
       ${media.tablet`padding-bottom: 5rem; height: 100%`}

       .suggested-contents{
           &:nth-child(even){
               border-left: 1px solid var(--bg);
               ${media.tablet`border: none;`}
            }
            padding:0 2rem;
            ${media.tablet`padding:0; margin-bottom: 3rem;`}
           .title{
               font-size: 2rem;
               font-family: ${theme.fonts.Inter};
               position: relative;
           }
           .content{
               font-size: 1.3rem;
               min-height: 8rem;
               ${media.phablet`min-height: auto`}
           }

           .category{
               margin-top: 1rem;

               span{
                   font-weight: 700;
                   font-size: 1.2rem;
                   display: inline-block;
                   padding-right: 1rem;
               }

               a.link{
                    position: relative;
                    cursor: pointer;
                    font-family: ${theme.fonts.Mono};
                    font-size: 1.2rem;
                    color: var(--primary-color);
                    line-height: 1.75;
                    margin-right: 1rem;
                    padding: 1.2rem 2rem;
                    display: inline-block;
                    padding: 0.2rem 1.2rem;
                    text-transform: uppercase;
                    margin-bottom: .75rem;
                    background-color: var(--bg);
                    &:last-of-type{
                        margin-right: 0;
                    }
                    &:hover{
                        color: var(--link-color);
                    }
               }
           }

           .external-link{
                text-align: right;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                .read-link{
                    display: flex;
                    align-items: center;
                    color: var(--bg);
                    span{
                        display: inline-block;
                        padding-left: 1rem;
                        font-size: 1.4rem;
                        color: var(--bg);
                    }

                    svg{
                        fill: var(--bg);
                    }
                }
           }
       }
    }
`;

export default SearchSuggestions
