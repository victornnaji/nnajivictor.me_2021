import React from 'react'
import styled from 'styled-components'
import { SplitWord } from '@src/_utils/split-text'
import { media, theme } from '@src/styles'
import InlineNav, { LeftNav, RightNav } from '@src/components/InlineNav'
import { graphql } from 'gatsby'
import ScrollDown from '@src/assets/ScrollDown'
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Heading from '@src/components/Heading'
import { CaseStudyProps} from '@src/components/case-study'
import ClientHeader from '@src/components/case-study/ClientHeader'
import CaseStudyGallery from '@src/components/case-study/CaseStudyGallery'
import BottomNav from '@src/components/case-study/BottomNav'
import gsap from 'gsap'

const caseStudy = ({data, pageContext: caseStudy} : CaseStudyProps ) => {
    React.useEffect(() => {
        const tl = gsap.timeline();
    
        tl.from(['.case-study__inner', '.case-study__header--client-info__block', '.scroll-text', '.scrolldown', '.case-study__main-image .gatsby-image-wrapper'], {
           y: 20,
          duration: 1.5,
          ease: "power4",
          stagger: 0.05,
          opacity: 0,
        });
    }, [])

    const {title} = caseStudy.node;
    const nextProps = caseStudy.next.node;
    const prevProps = caseStudy.prev.node;
    const {description, clientDescription, mainImage, challenges, gallery, designProcess} = data.caseStudy.CaseStudiesGraphql;
    const image = getImage(mainImage.localFile.childImageSharp.gatsbyImageData);
    return (
        <CaseStudyPage>
            <StyledCaseStudy>
                <div className="case-study__header">
                    <h1 className="case-study__header--heading">
                        {SplitWord(title, "case-study__inner")}
                    </h1>
                    <div className="case-study__header--text">
                        {SplitWord(description, "case-study__inner")}
                    </div>
                    <ClientHeader clientDescription={clientDescription}/>
                </div>
                <div className="case-study__scroll">
                    <span className="scroll-text">Scroll Down</span>
                    <span className="scrolldown"><ScrollDown /></span>
                </div>
                <div className="case-study__main-image">
                    <GatsbyImage
                        image={image!}
                        alt={mainImage.altText} />
                </div>
                <div className="case-study__main-challenge">
                    <Heading content="challenges">Challenges</Heading>
                    <div className="challenges-content" dangerouslySetInnerHTML={{__html: challenges}}/>
                </div>
                {gallery.length > 0 && (
                    <CaseStudyGallery gallery={gallery}/>
                )}
                <div className="case-study__design-process">
                    <Heading content="Process">Design Process</Heading>
                    <div className="design-process__content" dangerouslySetInnerHTML={{__html: designProcess}} />
                </div>
                <BottomNav prevProps={prevProps} nextProps={nextProps}/>
            </StyledCaseStudy>
                <InlineNav>
                    <LeftNav value={nextProps}/>
                    <RightNav value={prevProps}/>
                </InlineNav>
        </CaseStudyPage>
    );
}

const CaseStudyPage = styled.section`
    grid-template-columns: repeat(var(--cols),var(--gridSize));
    display: grid;
    grid-gap: 0px;
`;


const StyledCaseStudy = styled.section`
    grid-column: 2/-2;
    font-family: ${theme.fonts.Lato};

    .case-study__header--heading, .case-study__header--text, .case-study__scroll, .case-study__main-image{
        overflow: hidden;
    }
    
    .case-study__header{
        margin-top: 5rem;
        &--heading{
            font-size: 4rem;
            line-height: 4rem;
            font-weight: 700;
            ${media.phablet`font-size: 3rem`};
            font-family: ${theme.fonts.Inter};
        }
        &--text{
            margin-top: 3rem;
            flex: 0 0 auto;
            font-size: 1.75rem;
            line-height: 25px;
            margin-bottom: 1.6rem;
        }
    }

    .case-study__scroll{
        margin-top: 6rem;
        display: flex;

        ${media.phablet` margin-top: 4rem; `}

        .scroll-text{
            font-size: 1.4rem;
            margin-right: 1rem;
            display: block;
        }

        .scrolldown{
            transition: opacity .3s cubic-bezier(.215,.61,.355,1);
            animation: scrollIndicator 2s infinite;

            svg{
                height: 1.5rem;
                width: 1.5rem;
                path, line{
                    stroke: var(--primary-color);
                }
            }
        }
    }

    .case-study__main-image{
        margin-top: 10rem;
        height: 100vh;

        .gatsby-image-wrapper{
            height: 100%;
        }
        ${media.phablet`margin-top: 5rem; height: 40rem;`}
    }

    .case-study__main-challenge{
        margin-top: 12rem;
        ${media.phablet`margin-top: 8rem`};

        .challenges-content{
            margin-top: -5rem;
            column-count: 2;
            font-size: 1.8rem;
            ${media.tablet`margin-top: -5rem;`}
            ${media.phablet`column-count: 1; font-size: 1.7rem;`};
            ${media.phone`margin-top: -2rem;`}
            p{
                margin-bottom: 1.5rem;
            }
        }
    }

    .case-study__main-challenge, .case-study__design-process{
        &>h3{
            &::before{
                ${media.phablet`font-size: 8rem; top: -3.5rem`}
            }
        }
    }

    .case-study__design-process{
        .design-process__content{
            margin-top: -5rem;
            font-size: 1.8rem;
            ${media.tablet`margin-top: -5rem;`}
            ${media.phablet`font-size: 1.7rem;`};
            ${media.phone`margin-top: -2rem;`}
            p{
                margin-bottom: 1.5rem;
            }
        }
    }

`;

export const query = graphql`query caseStudyQuery($slug: String!) {
    caseStudy: wpCaseStudy(slug: {eq: $slug}) {
      CaseStudiesGraphql {
        challenges
        description
        designProcess
        clientDescription {
          clientName
          dateLaunched
          website
          awards {
            awardItem
          }
        }
        mainImage {
          altText
          databaseId
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FLUID, formats: [AUTO,WEBP])
            }
          }
        }
        gallery {
          altText
          databaseId
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED, formats: [AUTO,WEBP])
            }
          }
        }
      }
    }
  }
  `;


export default caseStudy;
