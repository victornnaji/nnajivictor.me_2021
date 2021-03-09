import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from "gatsby"
import { media } from '@src/styles';



interface InspirationProps {
    inspirationTitle: string;
    inspirationImage: any;
    inspirationText: string;
}
const Inspirations = () => {

    const data = useStaticQuery(graphql`
    {
      inspiration: allWpPage(filter: {title: {regex: "/About/"}}) {
        edges {
          node {
            AboutPage_Graphql {
              inspiration {
                inspirationText
                inspirationTitle
                inspirationImage {
                    altText
                    databaseId
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
      }
    }
  `)

    const inspiration = data.inspiration.edges[0].node.AboutPage_Graphql.inspiration;

    return (
        <StyledInspiration>
            {inspiration.map((inspiration: InspirationProps, i: number) => {
                const image = getImage(inspiration.inspirationImage.localFile.childImageSharp.gatsbyImageData)
                return (
                    <div className="inspiration" key={i}>
                        <div className="inspiration-photo">
                            <GatsbyImage image={image!} alt={inspiration.inspirationImage.altText} />
                        </div>
                        <div className="inspiration-title">{inspiration.inspirationTitle}</div>
                        <div className="inspiration-text" dangerouslySetInnerHTML={{__html: inspiration.inspirationText}}/>
                    </div>
                )
            })}
        </StyledInspiration>
    )
}

const StyledInspiration = styled.div`
    margin-top: 4rem;
    ${media.phablet`margin-top: 2rem;`};
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--primary-color);
    .inspiration{
        display: grid;
        grid-template-columns: min-content 1fr;
        grid-template-rows: repeat(2, 1fr);
        column-gap: 2rem;
        width: 100%;
        padding: 2rem 0;
        border-width: 50%;
        ${media.phablet`grid-template-columns: 1fr; grid-template-rows: auto; text-align: center; margin-bottom: 3rem`};
        ${media.phone`text-align: left;`}

        .inspiration-photo{
            grid-row: 1/-1;
            width: 30rem;
            border: 1px solid var(--primary-color);
            height: 100%;
            ${media.phablet`width: 40rem; margin: 0 auto`};
            ${media.phone`width: 100%`};

            .gatsby-image-wrapper{
                height: 100%;
            }
        }

        @media(min-width: 900px){
            &:nth-child(even){
            grid-template-columns: 1fr min-content;
            justify-items: end;
                .inspiration-photo{
                    grid-column: 2/-1;
                    grid-row: 1/-1;
                }
            }
        }

        .inspiration-title{
            font-size: 3rem;
            font-weight: 700;
            align-self: center;
            opacity: 0.6;
            ${media.phablet`margin-top: 2rem;`}
        }

        .inspiration-text{
            font-size: 1.5rem;
            width: 50%;
            ${media.tablet`width: 90%;`}
            ${media.phablet`width: 80%; margin: 0 auto; margin-top: 1rem`}
            ${media.tablet`width: 100%;`}
        }
    }
`;

export default Inspirations
