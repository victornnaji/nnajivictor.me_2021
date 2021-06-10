import Heading from '@src/components/Heading';
import { media } from '@src/styles';
import React from 'react'
import styled from 'styled-components'
import LatestPosts from '@src/components/LatestPosts';
import { useStaticQuery, graphql } from "gatsby"


const Explore = () => {

    const data = useStaticQuery(graphql`
    {
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

`;

export default Explore
