import Heading from "@src/components/Heading"
import { media, theme } from "@src/styles"
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, PageProps } from "gatsby"
import SingleProject from "@src/components/SingleProject"
import { ProjectData } from "@src/sections/Projects"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Layout from "@src/components/Layout"
import Seo from "@src/components/Seo"
import { get_url } from "@src/_utils"

const Archives: React.FC<PageProps> = ({location}) => {
  const data = useStaticQuery(graphql`
    {
      archives: allWpProject(
        sort: { fields: ProjectsGraphql___year, order: DESC }
      ) {
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
  `)

  const projects = data.archives.edges

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const projects = gsap.utils.toArray(".project-item-container")
    projects.forEach((project: any) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top bottom-=5%",
          end: "top center+=10%",
          id: project,
          scrub: true,
        },
      })

      tl.from(
        project.querySelectorAll(".line__inner"),
        {
          y: 200,
          duration: 2,
          ease: "power4",
        },
        0
      )
    })
  }, [])

  return (
    <>
      <Seo
        url={get_url("archives")}
        title="Archives"
        tags={["Frontend blog", "React blog", "Web development", "wordpress"]}
        description="Browse through Victor Nnaji's Archives to see some of his hosted projects"
        type="Archive"
      />
      <Layout location={location}>
        <StyledArchive>
          <Heading content="Archives">Archives</Heading>
          <div className="archive__sub-heading">
            Lists of all the projects I have worked on
          </div>
          <StyledTableContainer>
            {projects.map((project: ProjectData) => {
              return (
                <div
                  className="project-item-container"
                  key={project.node.databaseId}
                >
                  <SingleProject data={project.node.ProjectsGraphql} />
                </div>
              )
            })}
          </StyledTableContainer>
        </StyledArchive>
      </Layout>
    </>
  )
}

const StyledArchive = styled.section`
  margin-top: 10rem;
  ${media.phablet` margin-top: 7rem;`}
  &>h3 {
    &::before {
      ${media.phablet`font-size: 8rem; top: -3.5rem`}
    }
  }
  .archive__sub-heading {
    margin-top: -6rem;
    font-size: 1.8rem;
    ${media.phablet` margin-top: -8rem; font-size: 1.6rem`}
    ${media.phone` margin-top: -4rem;`};
    color: var(--link-color);
    font-family: ${theme.fonts.Mono};
  }
`

const StyledTableContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 15rem;
  ${media.tablet`
    margin-top: 3rem;
    margin-bottom: 10rem;
  `};
`

export default Archives
