import Heading from "@src/components/Heading"
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { FeaturedProps } from "@src/sections/Featured"
import CustomLink from "@src/components/CustomLink"
import { GatsbyImage } from "gatsby-plugin-image"
import { media, theme } from "@src/styles"
import FilledButton, { FilledButtonText } from "@src/components/FilledButton"
import Seo from "@src/components/Seo"
import { get_url } from "@src/_utils"

const CaseStudies = () => {
  const data = useStaticQuery(graphql`
    {
      caseStudies: allWpCaseStudy {
        edges {
          node {
            slug
            excerpt
            id: databaseId
            title
            CaseStudiesGraphql {
              featuredImage {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      layout: CONSTRAINED
                      formats: [AUTO, WEBP]
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const caseStudies = data.caseStudies.edges

  return (
    <StyledCaseStudies>
      <Seo
        url={get_url("case-studies")}
        title="Case Studies"
        tags={["Work", "case study", "Web development"]}
        description="Browse through Victor Nnaji's featured works for clients or personal projects"
      />
      <Heading content="Case Studies">All Case Studies</Heading>
      <div className="case-study__subheading">
        List of all detailed projects (personal / for clients)
      </div>
      <div className="case-studies__content">
        {caseStudies.map((caseStudy: FeaturedProps, i: number) => {
          const {
            id,
            title,
            excerpt,
            slug,
            CaseStudiesGraphql,
          } = caseStudy.node
          const Image =
            CaseStudiesGraphql.featuredImage.localFile.childImageSharp
              .gatsbyImageData
          return (
            <StyledCaseStudyContent key={id}>
              <div className="text-content">
                <h3 className="title">{title}</h3>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
                <FilledButton>
                  <CustomLink page={`/case-study/${slug}`}>
                    <FilledButtonText text="View Case Study" />
                  </CustomLink>
                </FilledButton>
              </div>
              <div className="image-content">
                <GatsbyImage
                  className=""
                  image={Image!}
                  alt={CaseStudiesGraphql.featuredImage.altText}
                />
              </div>
            </StyledCaseStudyContent>
          )
        })}
      </div>
    </StyledCaseStudies>
  )
}

const StyledCaseStudies = styled.section`
  margin-top: 10rem;

  .case-study__subheading {
    margin-top: -6rem;
    font-size: 1.8rem;
    ${media.phablet` margin-top: -8rem; font-size: 1.6rem`}
    ${media.phone` margin-top: -4rem;`};
    color: var(--link-color);
    font-family: ${theme.fonts.Mono};
  }

  .case-studies__content {
    margin-top: 7rem;
    margin-bottom: 15rem;
    ${media.tablet`
            margin-top: 3rem;
            margin-bottom: 10rem;
        `};

    ${media.desktop`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        `}
  }
`

const StyledCaseStudyContent = styled.div`
  border-top: 1px solid var(--primary-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-decoration: none;
  color: var(--primary-color);

  ${media.desktop`
        width: 50%;
        display: flex; 
        flex-direction: column-reverse; 
        border: 1px solid var(--primary-color);
    `}
  ${media.desktop`
        justify-content: flex-end;
    `}
    ${media.tablet`width:100%; border: none; border-top: 1px solid var(--primary-color);`}

    .text-content {
    padding: 5rem 1rem;
    ${media.desktop`padding: 3rem;`};
    ${media.tablet`padding: 5rem 0`};
    ${media.phablet`padding: 3rem 0`}

    .title {
      font-size: 3rem;
      font-weight: 600;
      margin-bottom: 1.4rem;
    }

    .content {
      margin: 3.5rem 0;
      font-size: 1.7rem;
      width: 80%;
      line-height: 2.8rem;
      ${media.desktop`height: 15rem; width: 100%`};
      ${media.tablet`height: auto`}
      ${media.phablet`margin: 3rem 0`}
    }
  }

  .image-content {
    max-height: 40rem;
    ${media.desktop`
        `}
    ${media.tablet`height: 25rem`}

        .gatsby-image-wrapper {
      height: 100%;
      width: 100%;
    }
  }
`

export default CaseStudies
