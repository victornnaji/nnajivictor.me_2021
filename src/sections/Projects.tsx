import Heading from '@src/components/Heading';
import { media} from '@src/styles';
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql} from "gatsby"
import SingleProject from '@src/components/SingleProject';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { SwipeLinks } from '@src/components/Links';

const Projects = () => {

    const data = useStaticQuery(graphql`
    {
      projects: allWpProject(sort: {fields: ProjectsGraphql___year, order: DESC}, limit: 6) {
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

  interface ProjectData {
      node : {
        ProjectsGraphql : {
            github?: string | null,
            link?: string | null,
            techsUsed: Tech[],
            title: string,
            year: string,
        },
        databaseId : string,
      }
  }

  interface Tech {
      tech: string
  }

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const projects = gsap.utils.toArray('.project-item-container');
    projects.forEach((project: any, i) => {

      const prj = gsap.timeline({
        scrollTrigger:{
          trigger: project,
          start: "top bottom-=10%",
          id: project,
          scrub: true,
        }
      });

      prj.to(".project-item-container", {
        css:{className:'+=is-inView'},
        stagger: 0.2,
        ease: "power4",
      })

      let tl = gsap.timeline({
        scrollTrigger:{
          trigger: project,
          start: "top bottom-=10%",
          end: 'top center',
          id: project,
          scrub: true,
        }
      });

      tl
      .from(
        project.querySelectorAll(".line__inner"),
        {
          y: 200,
          duration: 2,
          ease: "power4",
          stagger: 0.1
        },
        0
      )
    })

  }, [])

    const projects = data.projects.edges;
    return (
        <StyledProjects>
            <Heading content={'Projects'}>Notable Projects</Heading>
            {
                projects.map((project: ProjectData) => {
                    return (
                        <div className="project-item-container" key={project.node.databaseId}>
                            <SingleProject data={project.node.ProjectsGraphql}/>
                        </div>
                    )
                })
            }
            <div className="all-project__link">
                <SwipeLinks to="/archives" className="link">View the Archive</SwipeLinks>
            </div>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    margin-top: 15rem;
    margin-bottom: 15rem;
    ${media.phablet`margin-top: 12rem; margin-bottom: 10rem;`}

    .all-project__link{
        text-align: center;
        margin-top: 3rem;
        font-size: 1.5rem;
        font-weight: 700;
    }

    .is-inView{
        .project-item::after{
            transform: scaleX(1);
        }
    }
`;

export default Projects
