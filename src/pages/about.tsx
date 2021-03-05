import { media } from "@src/styles"
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const About: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      image: allFile(filter: { absolutePath: { regex: "/images/" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: FLUID)
            }
          }
        }
      }
    }
  `)

  const image = data.image.edges[0].node.childImageSharp.gatsbyImageData

  return (
    <StyledAboutPage>
      <div className="about__hero">
        <div className="about__hero--column">
          <div className="about__hero--column-image">
            <img
              className="image"
              srcSet={image.images.sources[0].srcSet}
              sizes={image.images.sources[0].sizes}
              src={image.images.fallback.src}
            />
          </div>
        </div>
        <div className="about__hero--column">Text</div>
      </div>
    </StyledAboutPage>
  )
}

const StyledAboutPage = styled.section`
  margin-top: 10rem;
  ${media.phablet`margin-top: 4rem`}

  .about__hero {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    ${media.tablet`grid-template-columns: 1fr`};
    grid-gap: 3rem;

    &--column {
      .about__hero--column-image {
        overflow: hidden;
        background-color: var(--bg);
        display: flex;
        justify-content: center;
        align-items: center;

        .image {
          position: relative;
          max-height: 60rem;
          border-radius: 1rem;
          max-width: 100%;
          height: 100%;
          opacity: 0.55;
          object-fit: contain;
          ${media.tablet`max-height: 40rem;`}
          ${media.phablet`border-radius: 1rem;`}
        }
      }
    }
  }
`

export default About
