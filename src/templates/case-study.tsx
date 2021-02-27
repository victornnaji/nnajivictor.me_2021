import React from 'react'
import styled from 'styled-components'
import { SplitWord } from '@src/_utils/split-text'
import { media, theme } from '@src/styles'
import InlineNav, { LeftNav, RightNav } from '@src/components/InlineNav'
import { graphql } from 'gatsby'
import ScrollDown from '@src/assets/ScrollDown'

interface PageProp {
    caseStudy: {
        CaseStudiesGraphql: {
            challenges: string,
            designProcess: string,
            description: string,
            clientDescription: {
                clientName? : string,
                dateLaunched? : string,
                website?: string,
                awards: Award[]
            },
            mainImage: {
                altText: string,
                localFile: ImageProps,
            }, 
            gallery: ImageProps[]
        }
    }
}

type Award = {
    awardItem: string,
}

type ImageProps = {
    altText: string,
    localFile: {
        childImageSharp:{
            fluid: {
                tracedSVG: string,
            }
        }
    }
}


interface Props {
    pageContext: {
        next : {
            node: {
                slug: string;
                CaseStudiesGraphql: {
                    featuredImage: {
                        altText: string;
                        mediaItemUrl: string;
                    };
                };
                excerpt?: string | undefined;
                title: string;
            },
        },
        prev : {
            node: {
                slug: string;
                CaseStudiesGraphql: {
                    featuredImage: {
                        altText: string;
                        mediaItemUrl: string;
                    };
                };
                excerpt?: string | undefined;
                title: string;
            }
        },
        node: {
            excerpt: string,
            title: string,
            slug: string,
            CaseStudiesGraphql: { }
        }
    }, 
    data : PageProp
}


export const query = graphql`
  query getQuery($slug: String!){
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
          localFile {
            childImageSharp {
              fluid {
                tracedSVG
                src
              }
            }
          }
        }
        gallery {
          altText
          localFile {
            childImageSharp {
              fluid {
                src
                tracedSVG
              }
            }
          }
        }
      }
    }
  }
`


const caseStudy = ({data, pageContext: caseStudy} : Props) => {
    console.log(data.caseStudy.CaseStudiesGraphql);

    const {title} = caseStudy.node;
    const nextProps = caseStudy.next.node;
    const prevProps = caseStudy.prev.node;

    const {description, clientDescription} = data.caseStudy.CaseStudiesGraphql;
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
                    <div className="case-study__header--client-info">
                        <div className="case-study__header--client-info__block">
                            <div className="info-title">Client</div>
                            {clientDescription.clientName ? (
                                <div className="info-value">{clientDescription.clientName}</div>
                                ) : (<span>--</span>)
                            }
                        </div>
                        <div className="case-study__header--client-info__block">
                            <div className="info-title">Date</div>
                                {clientDescription.dateLaunched ? (
                                    <div className="info-value">{clientDescription.dateLaunched}</div>
                                ) : (<span>--</span>)
                            }
                        </div>
                        <div className="case-study__header--client-info__block">
                            <div className="info-title">Awards</div>
                                {clientDescription.awards.length > 0 ? (
                                        clientDescription.awards.map((award : Award, i : number) => (
                                            <div className="info-value award-value" key={i}>{award.awardItem}</div>
                                        ))
                                    ) : (<span>--</span>)
                                }
                        </div>
                        <div className="case-study__header--client-info__block">
                            <div className="info-title">Website</div>
                                {clientDescription.website ? (
                                    <a href={`https://${clientDescription.website}`} className="info-value link">{clientDescription.website}</a>
                                ) : (<span>--</span>)
                            }
                        </div>
                    </div>
                </div>
                <div className="case-study__scroll">
                    <span className="scroll-text">Scroll Down</span>
                    <span className="scrolldown"><ScrollDown /></span>
                </div>
            </StyledCaseStudy>
                <InlineNav>
                    <LeftNav value={nextProps}/>
                    <RightNav value={prevProps}/>
                </InlineNav>
        </CaseStudyPage>
    )
}

const CaseStudyPage = styled.section`
    grid-template-columns: repeat(var(--cols),var(--gridSize));
    display: grid;
    grid-gap: 0px;
`;


const StyledCaseStudy = styled.section`
    grid-column: 2/-2;
    font-family: ${theme.fonts.Lato};
    
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
        .case-study__header--client-info{
            flex: 0 0 auto;
            display: flex;
            width: 100%;
            align-items: flex-start;
            flex-wrap: wrap;
            margin-top: 4.5rem;
            ${media.phablet`flex-direction: column`}

            &__block{
                margin-right: 10rem;
                flex: 0 auto;

                .info-title{
                    font-size: 1.7rem;
                    line-height: 24px;
                    text-align: left;
                    
                }

                .info-value{
                    font-size: 18px;
                    line-height: 24px;
                    font-weight: 700;
                    text-align: left;
                    font-family: ${theme.fonts.Lato};
                    text-decoration: none;
                    color: currentColor;
                    ${media.phablet`margin-bottom: 2rem; display: block;`}
                }

                .award-value{
                    ${media.phablet`margin-bottom: .5rem; display: block; `}
                    &:last-child{
                        ${media.phablet`margin-bottom: 2rem; display: block; `}
                    }
                }
            }
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
                width: 1/5rem;
                path, line{
                    stroke: var(--primary-color);
                }
            }
        }
    }

`;


export default caseStudy;
