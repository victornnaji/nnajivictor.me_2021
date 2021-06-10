import Heading from '@src/components/Heading';
import { media } from '@src/styles';
import React from 'react'
import styled from 'styled-components'
import LatestPosts from '@src/components/LatestPosts';
import { useStaticQuery, graphql } from "gatsby"


const Explore = () => {

    const data = useStaticQuery(graphql`
    {
      wp: allWpTag(limit: 2000) {
        edges {
          node {
            slug
          }
        }
      }

      latest: allWpPost(sort: {fields: date, order: DESC}, filter: {tags: {nodes: {elemMatch: {slug: {eq: "react"}}}}}) {
        group(field: tags___nodes___name, limit: 4) {
          edges {
            node {
              databaseId
              slug
              title
              excerpt
              date
              tags {
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
                      gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, formats: [AUTO, WEBP])
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

const y = data.wp.edges;
  console.log(y)

    return (
        <ExploredContainer>
          <Heading content="Explore">Explore</Heading>
          <StyledExplore>
              <LatestPosts tag={["React"]} data={data.latest.group[0].edges}/>
          </StyledExplore>  
        </ExploredContainer>
    )
}

const ExploredContainer = styled.section`
    margin-bottom: 10rem;
`;

const StyledExplore = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    gap: 3rem;
    ${media.phablet`grid-template-columns: 1fr`};
    margin-top: -10rem;

    /* .box__inner--mask{
        overflow: hidden;
    }

    .explore-item{
        height: 20rem;
        background-color: var(--primary-dark);
        border-radius: 2rem;
        padding: 1rem 3rem;
        color: var(--bg);
        ${media.phablet` height: 10rem; border-radius: 1rem; padding: 1rem;`};
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .explore-item__col{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .title{
                font-size: 6.5rem;
                font-weight: 700;
                opacity: 0.6;
                ${media.desktop` font-size: 6rem;`};
                ${media.tablet` font-size: 4rem;`};
                ${media.phablet` font-size: 2rem;`};
            }

            svg{
                height: 3rem;
                width: 3rem;
                ${media.phablet` height: 2rem; width: 2rem;`};
            }
        }


        .explore-link{
            text-align: right;
            svg{
                transform: rotate(-90deg);
                width: 3.5rem;
                height: 3.5rem;
                ${media.phablet` height: 2.5rem; width: 2.5rem;`};

                path, line{
                    stroke: var(--bg);
                    opacity: 0.6;
                }
            }
            

            &:hover{
                svg{
                    animation-name: bounceAlpha;
                    animation-duration:1.4s;
                    animation-iteration-count:infinite;
                    animation-timing-function:linear;
                }
            }
        }
    } */
`;

export default Explore
