import Heading from '@src/components/Heading'
import { media } from '@src/styles'
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql} from "gatsby"


const Archives = () => {

    const data = useStaticQuery(graphql`
    {
      archives: allWpProject(sort: {fields: ProjectsGraphql___year, order: DESC}) {
        edges {
          node {
            ProjectsGraphql {
              github
              link
              title
              techsUsed {
                tech
              }
              year
            }
            databaseId
          }
        }
      }
    }
  `);

    const projects = data.archives.edges;


    return (
        <StyledArchive>
            <Heading content="Archives">Archives</Heading>
            <div className="archive__sub-heading">Lists of all the projects I have worked on</div>
            <StyledTableContainer>
                <StyledTable>

                </StyledTable>
            </StyledTableContainer>
        </StyledArchive>
    )
}

const StyledArchive = styled.section`
    margin-top: 10rem;
    ${media.phablet` margin-top: 7rem;`}
    &>h3{
        &::before{
            ${media.phablet`font-size: 8rem; top: -3.5rem`}
        }
    }
    .archive__sub-heading{
        margin-top: -6rem;
        font-size: 1.8rem;
        ${media.phablet` margin-top: -8rem; font-size: 1.6rem`}
        ${media.phone` margin-top: -4rem;`}
    }
`;

const StyledTableContainer = styled.div`
  margin-top: 5rem;
  ${media.tablet`
    margin-top: 3rem;
  `};
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
        ${media.tablet`
        display: none;
        `};
    }
`



export default Archives
