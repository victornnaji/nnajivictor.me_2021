import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { media, theme } from '@src/styles'
import FilledButton, {FilledButtonText} from '../FilledButton'


const Resume = () => {

    const data = useStaticQuery(graphql`
    {
      resume: allWpPage(filter: {title: {regex: "/About/"}}) {
        edges {
          node {
            AboutPage_Graphql {
              resume {
                company
                role
                yearsSpent
              }
              education {
                degree
                school
                year
              }
              cv {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `)

  interface ResumeProps {
      company: string,
      role: string,
      yearsSpent: string,
  }
    const {resume, education, cv} = data.resume.edges[0].node.AboutPage_Graphql;
    
    return (
        <StyledResume>
            <div className="resume-title">Resume</div>
            <div className="resume-content">
                <div className="work">
                    <div className="title">Work Experience</div>
                      {resume.map((work: ResumeProps, i: number) => (
                        <div className="content" key={i}>
                          <div className="content-main__title">{work.company}</div>
                          <div className="content-sub__title">{work.role}</div>
                          <div className="content-sub__title">{work.yearsSpent}</div>
                        </div>
                    ))}
                </div>
                <div className="education">
                    <div className="title">Education</div>
                    <div className="content">
                        <div className="content-main__title">{education.school}</div>
                        <div className="content-sub__title">{education.degree}</div>
                        <div className="content-sub__title">{education.year}</div>
                    </div>
                </div>
            </div>
            <div className="download-resume">
              <FilledButton>
                <a href={cv.mediaItemUrl} target="_blank" rel="nofollow noopener noreferrer">
                    <FilledButtonText text="Download Resume" />
                </a>
              </FilledButton>
            </div>
        </StyledResume>
    )
}

const StyledResume = styled.section`
    width: 80%;
    margin: 15rem auto;
    ${media.phablet` margin: 7rem 0`};

    .resume-title{
        font-size: 3rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    .resume-content{
        margin-top: 3rem;
        display: flex;
        ${media.phablet`display: block;`};
        
        .work, .education{
            width: 50%;
            ${media.phablet`width: 100%`};

            .title{
                font-size: 2.3rem;
                font-weight: 700;
            }

            .content{
              margin: 2rem 0;
              opacity: 0.9;
              ${media.phablet`margin: 1.2rem 0`};
              .content-main__title{
                font-size: 1.8rem;
                font-weight: 800;
                font-family: ${theme.fonts.Inter};
              }

              .content-sub__title{
                font-size: 1.7rem;
                margin: .5rem 0;
              }
            }
        }

        .education{
          ${media.phablet`margin-top: 3rem;`}
        }
    }

    .download-resume{
      margin-top: 3rem;
    }
`;

export default Resume
