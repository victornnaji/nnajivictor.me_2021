import { media, theme } from '@src/styles';
import { SplitChar, SplitWord } from '@src/_utils/split-text';
import React from 'react';
import styled from 'styled-components';
import { SiteSiteMetadata } from '__generated__/graphql-types';
import { gsap } from "gsap";
import ScrollDown from '@src/assets/ScrollDown';

type Props = {
    data: {
        edges : [
            {
                node : {
                    siteMetadata: SiteSiteMetadata
                }
            }
        ]
    }
}

const Hero : React.FC<Props> = ({data}) => {
    const {name, job} = data.edges[0].node.siteMetadata;
    const firstName = SplitChar(name!.split(' ')[0], "intro__line");
    const secondName = SplitChar(name!.split(' ')[1], "intro__line");
    const new_job = SplitWord(job!, 'intro__line');

    React.useEffect(() => {
        const tl = gsap.timeline({ delay: 1, ease: "power4" });
        const intro_greetings = '.intro__name .intro__greetings .intro__line';
        const intro_name = gsap.utils.toArray('.name-container .intro__line');
        const intro__occupation = '.intro__occupation .intro__line';

        tl
        .set('.intro__title', {opacity: 1})
        .from([intro_greetings, intro_name, intro__occupation], {
            y: 400,
            ease: "power4",
            duration: 1,
            stagger: 0.08,
        })
        .fromTo('.decor__circle', {
            opacity: 0,
            x: 20
        },{
            opacity: 1,
            x: 0,
            autoAlpha: 1,
        }, 0.4)
        .to(".hero__line", {
            scaleX: 1,
        }, 0.65)
        .to('.scrolldown', {
            opacity: 1,
            scaleX: 1,
        }, 0.65)

    }, []);

    return (
        <StyledHero className="intro slide--0" id="slide-0">
            <div className="intro__content">
                <h1 className="intro__name">
                    <span className="intro__title intro__greetings">
                        <h3 className="intro__line">Hi, I'm</h3>
                    </span>
                    <span className="name-container">
                        <h1 className="intro__title intro__name-first">{firstName}</h1>
                        <h1 className="intro__title intro__name-second">{secondName}</h1>
                    </span>
                </h1>
                <h2 className="intro__title intro__occupation">
                    {new_job}
                </h2>
            </div>
            <div className="decor__circle"></div> 
            <hr className="hero__line"/>
            <StyledScrollDown className="scrolldown" href="#slide-1">
                <ScrollDown />
            </StyledScrollDown>
        </StyledHero>
    )
}

const StyledScrollDown = styled.a`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1.875rem;
    opacity: 0;
    transition: opacity .6s cubic-bezier(.215,.61,.355,1);
    -webkit-animation: scrollIndicator 4s infinite;
    animation: scrollIndicator 4s infinite;
    ${media.tablet`display: none`};
    svg{
        height: 50px;
        width: 50px;
        path, line{
            stroke: var(--primary-color);
        }
    }
`;

const StyledHero = styled.section`
    height: calc(100vh - 10rem);
    font-family: ${theme.fonts.Inter};
    box-sizing: border-box;
    padding-bottom: 10rem;
    ${media.phablet`padding-top: 10rem; height:75vh`};
    ${media.phone`padding-bottom: 2rem; height:70vh`};
    position: relative;

    .intro__content{
        z-index: 3;
        opacity: .95;
        display: flex;
        margin: auto;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        ${media.phablet`height: 100%`}
    }

    .intro__title{
        overflow: hidden;
        opacity: 0;
    }

    .intro__name{
        .intro__greetings{
            font-size: 7.6rem;
            display: block;
            ${media.phablet`font-size: 5rem;`};
            ${media.phone`font-size: 3rem;`};
        }

        .name-container{
            display: flex;
            font-size: 10vw;
            font-weight: 800;
            ${media.phablet`font-size: 9rem;`};
            ${media.phone`font-size: 8rem`};
            @media(max-width: 662.5px){
                display: block
            }
            .intro__name-second{
                margin-left: 3rem;
                ${media.phablet`margin-left: 2rem;`};
                @media(max-width: 662.5px){
                    margin-left: 0;
                }
            }
        }
    }

        .intro__occupation{
            font-size: 3rem;
            font-weight: 400;
            opacity: 0;
            ${media.phone`font-size: 2.5rem`}
        }

    .hero__line{
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
        right: 0;
        display: block;
        padding: 0;
        height: 1px;
        border: 0;
        border-top: 1px solid currentColor;
        transform: scaleX(0);
        /* transition: transform .6s cubic-bezier(.215,.61,.355,1); */
    }
    .decor__circle {
        border: 1px var(--primary-color) solid;
        border-radius: 100%;
        width: 30vw;
        height: 30vw;
        position: absolute;
        opacity: 0;
        visibility: hidden;
        top: 27vh;
        left: 50vw;
        opacity: 0.4;
        z-index: -2;
        pointer-events: none;
        ${media.tablet`display: none;`}
    }
`

export default Hero
