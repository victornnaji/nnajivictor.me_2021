import Heading from '@src/components/Heading';
import { media } from '@src/styles';
import React from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { Link } from 'gatsby';
import ScrollDown from '@src/assets/ScrollDown';
import { Icon } from '@src/assets/icons';

const Explore = () => {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const slides = gsap.utils.toArray('.explore-box');
        slides.forEach((slide: any) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: slide,
                  start: "top bottom",
                  end: 'top center+=10%',
                  scrub: 1,
                  markers: false // position of trigger meets the scroller position
                }
             })

             tl.from(slide, {
                ease: "power4",
                y: "+=5vh",
                duration: 2.5,
                opacity: 0,
              })
                .from(
                  slide.querySelectorAll(".explore-item"),
                  {
                    y: 200,
                    duration: 2,
                    ease: "power4",
                    stagger: 0.1
                  },
                  0
                )

        })

    }, []);

    const exploreItems = [
        {title: "Blog", link: '/blog'},
        {title: "Series", link: '/series'},
        {title: "Reviews", link: '/reviews'},
        {title: "Playground", link: '/playground'},
    ]

    return (
        <ExploredContainer>
          <Heading content="Explore">Explore</Heading>
          <StyledExplore>

              {exploreItems.map((item, i) => (
                  <div className="explore-box" key={i}>
                  <div className="box__inner--mask">
                      <div className="explore-item">
                          <div className="explore-item__col">
                              <div className="title">{item.title}</div>
                              <Icon name="Folder"/>
                          </div>
                          <Link to={item.link} className="explore-link">
                              <ScrollDown />
                          </Link>
                      </div>
                  </div>
                </div>
              ))}
             
          </StyledExplore>  
        </ExploredContainer>
    )
}

const ExploredContainer = styled.section`
    margin-bottom: 10rem;
`;

const StyledExplore = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 3rem;
    ${media.phablet`grid-template-columns: 1fr`};

    .box__inner--mask{
        overflow: hidden;
    }

    .explore-item{
        height: 20rem;
        background-color: var(--primary-dark);
        border-radius: 2rem;
        padding: 1rem 3rem;
        color: var(--bg);
        ${media.phablet` height: 10rem; border-radius: 1rem; padding: 1rem;`};
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .explore-item__col{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .title{
                font-size: 6.5rem;
                font-weight: 700;
                opacity: 0.6;
                ${media.desktop` font-size: 6rem;`};
                ${media.tablet` font-size: 4rem;`};
                ${media.phablet` font-size: 2rem;`};
            }

            svg{
                height: 3rem;
                width: 3rem;
                ${media.phablet` height: 2rem; width: 2rem;`};
            }
        }


        .explore-link{
            text-align: right;
            svg{
                transform: rotate(-90deg);
                width: 3.5rem;
                height: 3.5rem;
                ${media.phablet` height: 2.5rem; width: 2.5rem;`};

                path, line{
                    stroke: var(--bg);
                    opacity: 0.6;
                }
            }
            

            &:hover{
                svg{
                    animation-name: bounceAlpha;
                    animation-duration:1.4s;
                    animation-iteration-count:infinite;
                    animation-timing-function:linear;
                }
            }
        }
    }
`;

export default Explore
