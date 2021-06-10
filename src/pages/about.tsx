import { media, theme } from "@src/styles"
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ScrollDown from "@src/assets/ScrollDown"
import Inspirations from "@src/components/about/inspirations"
import Embed from "@src/components/about/Embed";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Resume from "@src/components/about/Resume"

const About: React.FC = () => {

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(['.about__hero--column .text-paragraph', '.skillsContainer'], {
      opacity: 0,
      x: 10,
    })
    gsap.from('.about__hero--column-image', {
      opacity: 0,
      x: -10,
    });

    gsap.from('.about__other-section .other-courses .title', {
      scrollTrigger: {
        trigger: '.about__other-section .other-courses .title',
        start: "top 90%",
        // markers: true,
      },
      ease: "power4",
      y: "+=5vh",
      duration: 2,
      opacity: 0,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".other-activities",
        start: "top 90%",
        // end: "top 40%",
        scrub: 1,
        // markers: true
      }
    })

    tl.from(".other-activities .title", {
      ease: "power4",
      y: "+=5vh",
      duration: 2
    })
    .from(
      ".other-activities .title .line__inner",
      {
        y: 200,
        duration: 2,
        ease: "power4",
        stagger: 0.1
      },
      0
    )
    .from(
      ".other-activities .content",
      {
        x: 50,
        y: 50,
        opacity: 0,
        duration: 2,
        ease: "power4"
      },
      0.4
  )
    const tl_2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".spotify",
        start: "top 90%",
        // end: "top 40%",
        scrub: 1,
        // markers: true
      }
    })

    tl_2.from(".spotify .title", {
      ease: "power4",
      y: "+=5vh",
      duration: 2
    })
    .from(
      ".spotify .title .line__inner",
      {
        y: 200,
        duration: 2,
        ease: "power4",
        stagger: 0.1
      },
      0
    )
    .from(
      ".spotify .content",
      {
        x: 50,
        y: 50,
        opacity: 0,
        duration: 2,
        ease: "power4"
      },
      0.4
  )



  }, [])

  const data = useStaticQuery(graphql`
    {
      image: allFile(filter: { absolutePath: { regex: "/images/Nnaji/" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: FLUID)
            }
          }
        }
      }

      skills: allSite {
        edges {
          node {
            siteMetadata {
              skills
            }
          }
        }
      }
    }
  `)

  const image = data.image.edges[0].node.childImageSharp.gatsbyImageData
  const skills = data.skills.edges[0].node.siteMetadata.skills

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
        <div className="about__hero--column">
          <h2 className="text-heading">
            I'm Nnaji Victor, a Software Engineer in Lagos.
          </h2>
          <p className="text-paragraph">
            I'm a weird guy who enjoys making eccentric things with web
            technologies. I love to create intrinsic user interface and useful
            interaction, developing rich web experiences & web applications.
          </p>
          <p className="text-paragraph">
            I have spent the last 3 years working along senior and experienced
            developers who have raised my standards for what is expected to take
            up any project and create excellent products and not just that, but
            one written in maintainable and easy to read codes.
          </p>
          <h3 className="text-paragraph" style={{ fontWeight: 700 }}>
            Here are a few technologies I've been working with recently.
          </h3>
          <SkillsContainer className="skillsContainer">
            {skills &&
              skills.map((skill: string, i: number) => (
                <Skill key={i}>{skill}</Skill>
              ))}
          </SkillsContainer>
          <div className="case-study__scroll">
            <span className="scroll-text">Scroll Down</span>
            <span className="scrolldown">
              <ScrollDown />
            </span>
          </div>
        </div>
      </div>
      <div className="Resume-section"><Resume /></div>
      <div className="about__other-section">
        <div className="other-courses">
          <div className="title">
            Courses and Project that I draw inspiration from
          </div>
          <div className="content">
            <Inspirations />
          </div>
        </div>

        <div className="other-activities">
          <div className="title">
            <div className="line__inner">Other Activities</div>
          </div>
          <div className="content">
          ...When i'm not coding, I love to play <span className="activity">Fifa</span>, I'm pretty very good at it. I also enjoy watching superhero movies espacially one from the
          &nbsp; <span className="activity">MCU</span>. I like checking out random things on <span className="activity">YouTube</span>. 
          The most important of them all being <span className="activity">Music</span> - I cannot do without that.
          </div>
        </div>
      </div>
      <div className="spotify">
        <Embed />
      </div>
    </StyledAboutPage>
  )
}

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
`

const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${theme.fonts.Lato};
  font-size: 1.4rem;
  &:before {
    content: "+";
    position: absolute;
    left: 0;
    color: var(--link-color);
    font-size: 1.2rem;
    line-height: 12px;
  }
`

const StyledAboutPage = styled.section`
  margin-top: 8rem;
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

      .case-study__scroll {
        margin-top: 4rem;
        display: flex;

        ${media.phablet` margin-top: 2rem; `}

        .scroll-text {
          font-size: 1.4rem;
          margin-right: 1rem;
          display: block;
        }

        .scrolldown {
          transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
          animation: scrollIndicator 2s infinite;

          svg {
            height: 1.5rem;
            width: 1.5rem;
            path,
            line {
              stroke: var(--primary-color);
            }
          }
        }
      }

      .text-heading {
        font-family: ${theme.fonts.Inter};
        font-size: 3rem;
        font-weight: 700;
      }

      .text-paragraph {
        &:nth-of-type(1) {
          margin-top: 3rem;
        }
        margin-top: 2rem;
        font-size: 1.7rem;
      }
    }
  }

  .about__other-section {
    margin-top: 10rem;

    .title {
      font-size: 3rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .other-activities{
      width: 80%;
      margin: 15rem auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      ${media.phablet`width: 100%; display: block; margin: 5rem 0`}

      .title,.content{
        width: 50%;
        ${media.phablet`width: 100%;`}
        overflow: hidden;
      }

      .content{
        font-size: 1.7rem;
        line-height: 3rem;
        font-weight: 500;

        .activity{
          font-size: 3rem;
          font-family: ${theme.fonts.Mono};
          ${media.phablet`font-size: 1.8rem;`}
        }
      }
    }
  }
`

export default About
