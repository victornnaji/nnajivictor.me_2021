import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Heading from '@src/components/Heading'
import styled from 'styled-components'
import { media, theme } from '@src/styles'
import { SplitWord } from '@src/_utils/split-text'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { SwipeLinks } from '@src/components/Links'


const Featured = () => {
    const data = useStaticQuery(graphql`
    {
      featured: allWpCaseStudy {
        edges {
        node {
          slug
          excerpt
          id: databaseId
          title
          CaseStudiesGraphql {
            featuredImage {
              altText
              mediaItemUrl
            }
          }
        }
       }
      }
    }
  `)

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.animatedHeading .intro__line', {
      opacity: 0,
      delay: 1.6,
  });

  const slides = gsap.utils.toArray('.slide');
  slides.forEach((slide: any, i) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: slide,
        start: "10% 50%",
        scrub: 1,
        markers: false // position of trigger meets the scroller position
      }
    });

    tl.from(slide.querySelectorAll(".col__content-title"), {
      ease: "power4",
      y: "+=5vh",
      duration: 2.5
    })
      .from(
        slide.querySelectorAll(".line__inner"),
        {
          y: 200,
          duration: 2,
          ease: "power4",
          stagger: 0.1
        },
        0
      )
      .from(
        slide.querySelectorAll(".col__content-txt"),
        {
          x: 100,
          y: 50,
          opacity: 0,
          duration: 2,
          ease: "power4"
        },
        0.4
      )
      .from(
        slide.querySelectorAll(".slide-link"),
        {
          x: -100,
          y: 100,
          opacity: 0,
          duration: 2,
          ease: "power4"
        },
        0.3
      )
      .from(
        slide.querySelectorAll(".slide__scroll-link"),
        {
          y: 200,
          duration: 3,
          ease: "power4"
        },
        0.4
      )
      .to(
        slide.querySelectorAll(".slide__scroll-line"),
        {
          scaleY: 0.6,
          transformOrigin: "bottom left",
          duration: 2.5,
          ease: "elastic(1,0.5)"
        },
        1.4
      );
  });
  slides.forEach((slide: any, i) => {
    let imageWrappers = slide.querySelectorAll(".col__image-wrap");

    gsap.fromTo(
      imageWrappers,
      {
        y: "-40vh"
      },
      {
        y: "30vh",
        scrollTrigger: {
          trigger: slide,
          scrub: true,
          start: "top bottom",
        },
        ease: "none"
      }
    );
  });
  }, [])

    const featured = data.featured.edges;
    return (
        <FeaturedContainer>
           <Heading content={'Featured'} className="animatedHeading">Featured Projects</Heading>
           {
               featured.map((featuredProject: any, i: number) => {
                   const {id, title, excerpt, slug, CaseStudiesGraphql} = featuredProject.node
                   return (
                       <StyledFeatured className={`content-wrap slide slide--${i}`} id={`slide-${i}`} key={id}>
                           <div className="col col--1">
                               <div className="col__content">
                                   <h3 className="col__content-title">
                                       {title.split(' ')
                                           .map((text: string, i: number) => <span className="line__inner-mask" key={i}>{SplitWord(text, "line__inner", i)}</span>)
                                       }
                                   </h3>
                                   <div className="col__content-wrap">
                                       <p className="col__content-txt" dangerouslySetInnerHTML={{ __html: excerpt }} />
                                       <SwipeLinks to={`/case-study/${slug}`} className="slide-link">
                                           <span className="slide-link__circ"></span>
                                           <span className="slide-link__line"></span>
                                       </SwipeLinks>
                                   </div>
                               </div>
                               <SwipeLinks to={`/case-study/${slug}`} className="slide__scroll-link">
                                   <div className="slide__scroll-line"></div>
                                   <span className="slide__casestudy">View Case Study</span>
                               </SwipeLinks>
                           </div>
                           <div className="col col--2">
                               <div className="col__image-wrap">
                                   <img
                                       className="img img--1"
                                       src={CaseStudiesGraphql.featuredImage.mediaItemUrl}
                                       alt={CaseStudiesGraphql.featuredImage.altText}
                                   />
                               </div>
                           </div>
                       </StyledFeatured>
                   )
               })
           }
        </FeaturedContainer>
    )
}

const FeaturedContainer = styled.section`
    .intro__line{
          opacity: 1;
     }
`;
const StyledFeatured = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    overflow: hidden;

    ${media.tablet` display: block;position: relative;`};
    ${media.phone`height: 70vh`}

    .col {
    flex-basis: 50%;
    width: 50%;
    ${media.tablet`display: block;width: 100%;height: 100%;`};
  }

  .col--1 {
    position: relative;
    z-index: 1;
    ${media.phablet`  position: relative; z-index: 1;`};
  }

  .col--2 {
    position: relative;
    overflow: hidden;
    ${media.phablet`position: absolute; z-index: 0;left: 0;top: 0;`};
  }

  .col__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    height: 100%;
    padding: 6vw 6vw 10vw;
    background: var(--tertiary-color);
    ${media.phablet`background: var(--tertiary-color-trans); width: 90%;`}
  }

  &:nth-of-type(odd){
    .col__content{
        background-color: var(--tertiary-color-moon);
        ${media.phablet`background-color: var(--tertiary-color-moon-trans)`}
    }
  }

  .col__content-title {
    margin: 0 0 2vw;
    font-size: 10rem;
    font-size: 6vw;
    letter-spacing: -0.4vw;
    font-family: ${theme.fonts.Inter};
    font-weight: 600;
    line-height: 1;
    ${media.phablet`margin: 0 0 6vw; font-size: 12vw;`}
  }

  .col__content-wrap {
    display: flex;
    justify-content: flex-end;
    ${media.phablet`flex-direction: column;`}
  }
  .col__content-txt {
    max-width: 22vw;
    order: 2;
    margin-left: 32px;
    font-size: 1.8rem;
    line-height: 1.5;
    opacity: 0.7;
    font-family: ${theme.fonts.Lato};
    ${media.phablet`order: 1; max-width: 100%;margin: 0 0 10vw 10vw; font-size: 1.8rem`};
    ${media.phone`font-size: 1.5rem`}
  }
  .slide-link {
    position: relative;
    order: 1;
    display: flex;
    justify-content: flex-end;
    width: 75px;
    height: 53px;

    > * {
      pointer-events: none;
    }

    @media all and (max-width: 768px) {
      order: 2;
      align-self: flex-end;
    }
  }
  .slide-link__circ {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
  }
  .slide-link__line {
    position: absolute;
    top: 25px;
    left: 0;
    width: 64px;
    height: 3px;
    background: var(--link-color);
  }
  .line {
    overflow: hidden;

    &:nth-of-type(even) {
      margin-top: -1vw;
    }
  }

  .line__inner {
    display: block;
  }
  .slide__scroll-link {
    position: absolute;
    right: -113px;
    bottom: 3.5vw;
    display: block;
    width: 140px;
    height: 140px;
    background: var(--primary-color);
    overflow: hidden;

    @media all and (max-width: 768px) {
      display: none;
    }
  }

  .line__inner-mask{
      overflow: hidden;
      display: block;
  }

  .slide__casestudy{
    writing-mode: vertical-rl;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    text-align: center;
    font-size: 2rem;
    color: var(--tertiary-color);
    font-weight: 600;
  }
  .slide__scroll-line {
    position: absolute;
    left: 26px;
    bottom: 0;
    width: 1px;
    height: 100%;
    background: var(--bg);
  }
  .col__image-wrap {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 160vh;
  }

  .img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;
    filter: brightness(0.7)
  }
`

export default Featured
