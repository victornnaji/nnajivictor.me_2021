import { media, theme } from '@src/styles';
import { SplitWord } from '@src/_utils/split-text';
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Coffee from '@src/assets/Coffee';
import { Icon } from '@src/assets/icons';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import { scrollTop } from '@src/_utils';

interface SocialProp {
    name : string,
    link : string,
}

const Contact = () => {

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollToPlugin);

        const inner = gsap.utils.toArray('.export-line__inner');
        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#contact",
              start: "30% 80%",
              end: 'top 20%',
              scrub: 1,
              markers: false // position of trigger meets the scroller position
            }
        });
        tl
        .from(
            inner,
            {
            y: 200,
            duration: 2.5,
            ease: "power4",
            stagger: 0.1
            },
            0
        )

        gsap.from(".footer__link", {
            scrollTrigger: {
              trigger: ".footer",
              scrub: 2,
              start: "50% 100%", // position of trigger meets the scroller position
              end: "0% 0%"
            },
            y: "20vh",
            ease: "sine"
          });

    }, [])


    const data = useStaticQuery(graphql`
    {
      contact: allSite {
        nodes {
          siteMetadata {
            socialMedia {
              name
              url
            }
            email
          }
        }
      }
    }
  `)

    const {email, socialMedia} = data.contact.nodes[0].siteMetadata;
    const {github, twitter, codepen} = socialMedia;

    const socials = [
        {
            name: "GitHub",
            link: github, 
        },
        {
            name: "Twitter",
            link: twitter,
        },
        {
            name: "Codepen",
            link: codepen
        }
    ];

    function handleFooterClick(e: React.MouseEvent){
        e.preventDefault();
        scrollTop('#content');
    }

    function handleFooterOver(){
        gsap.to(".footer__link-top-line", {
            scaleY: 3,
            transformOrigin: "bottom center",
            duration: 0.6,
            ease: "power4"
        });
    }

    function handleFooterOut(){
        gsap.to(".footer__link-top-line", {
            scaleY: 1,
            transformOrigin: "bottom center",
            duration: 0.6,
            ease: "power4"
          });
    }
   
    return (
        <>
        <StyledContact id="contact">
            <div className="contact-column">
                <h3 className="contact-colum__title">
                    <span className="line__inner-mask move-left--1">{SplitWord("Want to", "export-line__inner")}</span>
                    <span className="line__inner-mask">{SplitWord("Start", "export-line__inner")}</span>
                    <span className="line__inner-mask move-left--2">{SplitWord("a new", "export-line__inner")}</span>
                    <span className="line__inner-mask">{SplitWord("Project?", "export-line__inner")}</span>
                </h3>
                <h4 className="contact-column__sub-title">
                    <span className="line__inner-mask">{SplitWord("Or just say hello.", "export-line__inner")}</span>
                </h4>
            </div>
            <div className="contact-column contact-column__right">
                <div className="email-surrounding">
                    <span className="email-section  line__inner-mask">
                        <a href={`mailto:${email}`} className="contact-email link export-line__inner">{email}</a>
                    </span>
                </div>
               
                <span className="line__inner-mask contact-column__social-media">
                    {
                        socials.map((social : SocialProp, i : number) => {
                            return (
                                <a href={social.link} key={i} className="export-line__inner">
                                    <Icon name={social.name} />
                                    <span className="social-media__text">
                                            {social.name}
                                    </span>
                                </a>
                            )
                        })
                    }
                </span>

                <div className="buy-me-cofee">
                   <span className="line__inner-mask">
                        <a className="bmc-button export-line__inner" target="_blank" rel="nofollow noopener noreferrer" href="https://www.buymeacoffee.com/nnajivictor">
                            <Coffee />
                            <span style={{marginLeft: '5px', fontSize: '19px !important'}}>Buy me a coffee</span>
                        </a>
                   </span>
                </div>
            </div>
        </StyledContact>
        <ContactFooter>
            <footer className="footer" id="slide-7">
                <p className="footer__link">nnaji Victor</p>
                <a className="footer__link-top" style={{cursor: "pointer"}} role="button" onClick={handleFooterClick} onMouseOver={handleFooterOver} onMouseOut={handleFooterOut}>Top<span className="footer__link-top-line"></span></a>
                <p className="footer__copyright">Designed & Built by Nnaji Victor.</p>
            </footer>
        </ContactFooter>
        </>
    )
}
const ContactFooter = styled.section`
    .footer {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
    }
    .footer__link {
        font-size: 4.5vw;
        color: var(--primary-color);
        text-decoration: none;
        font-family: ${theme.fonts.Roslindale};
        text-transform: uppercase;
    }

    .footer__link-top {
        position: absolute;
        left: 50%;
        bottom: 100px;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        background: var(--primary-color);
        font-size: 18px;
        color: var(--bg);
        text-decoration: none;
        font-family: ${theme.fonts.Roslindale};
    }

    .footer__link-top-line {
        position: absolute;
        top: -50px;
        left: 50%;
        width: 1px;
        height: 50px;
        background: var(--primary-color);
    }

    .footer__copyright {
        position: absolute;
        left: 50%;
        bottom: 24px;
        transform: translateX(-50%);
    }
`;

const StyledContact = styled.section`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20rem;
    ${media.phablet`grid-template-columns: 1fr; margin-top: 6rem;`}

    .line__inner-mask{
      overflow: hidden;
      display: block;
    }

    .contact-column{
        font-family: ${theme.fonts.Roslindale};
        .contact-colum__title{
            font-size: 10vw;
            line-height: 8.4vw;
            font-weight: 500;
            text-align: center;
            letter-spacing: -.02em;
            padding-left: 4vw;
            ${media.phablet`font-size: 20vw; line-height: 18vw; padding-right: .4vw; padding-bottom: 1vw;`};
            
            .line__inner-mask{
                margin-left: 4rem;
                display: block;
            }

            .move-left--1{
                margin-left: -3vw;
                display: block;
            }

            .move-left--2{
                margin-left: -4vw;
                display: block;
            }
        }

        .contact-column__sub-title{
            margin-top: 5rem;
            font-size: 2.6vw;
            line-height: 4vw;
            font-weight: 500;
            display: flex;
            justify-content: flex-end;
            width: 100%;
            ${media.phablet`margin-top: 5rem; font-size: 5vw; line-height: 5vw;`}
            
        }
    }

    .contact-column__right{
        padding-left: 8vw;
        padding-top: 5rem;
        ${media.phablet`padding-top: 10rem;`};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 70%;
        ${media.phablet`height: 45rem; padding-left: 0; text-align: center`}

        .email-section{
            overflow: hidden;
        }

        .email-surrounding{
            position: relative;
            width: 80%;
            ${media.phablet`width: 100%;`}
            &::before, &::after{
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100px;
                height: 100px;
                border: 2px solid var(--primary-dark);
                border-radius: 50%;
                cursor: pointer;
                content: '';
                opacity: 0;
                -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
                -moz-transition: -moz-transform 0.3s, opacity 0.3s;
                transition: transform 0.3s, opacity 0.3s;
                -webkit-transform: translateX(-50%) translateY(-50%) scale(0.2);
                -moz-transform: translateX(-50%) translateY(-50%) scale(0.2);
                transform: translateX(-50%) translateY(-50%) scale(0.2);
             }

            &::after{
                width: 90px;
                height: 90px;
                border-width: 6px;
                -webkit-transform: translateX(-50%) translateY(-50%) scale(0.8);
                -moz-transform: translateX(-50%) translateY(-50%) scale(0.8);
                transform: translateX(-50%) translateY(-50%) scale(0.8);
            }

            &:hover::before, &:hover::after, &:focus::before,&:focus::after{
                opacity: 1;
                -webkit-transform: translateX(-50%) translateY(-50%) scale(1);
                -moz-transform: translateX(-50%) translateY(-50%) scale(1);
                transform: translateX(-50%) translateY(-50%) scale(1);
            }
        }

        .email-section {
            .contact-email{
                color: var(--primary-color);
                letter-spacing: 0.1vw;
                padding: 0;
                cursor: pointer;
                font-size: 2.5vw;
                line-height: 3vw;

                ${media.phablet`font-size: 3rem; padding: 1.5rem 0; text-decoration: underline;`}

                &::before{
                    height: 2px;
                }
            }
        }

        .contact-column__social-media{
            display: flex;
            align-items: center;
            width: 70%;
            justify-content: space-between;
            ${media.phablet`width: 100%`};
            a{
                display: flex;
                flex-direction: column;
                font-family: ${theme.fonts.Lato};
                cursor: pointer;
                font-weight: 500;
                align-items: center;
                svg{
                    height: 3rem;
                    width: 3rem;
                }

                &:hover{
                    svg{
                        stroke: var(--link-color);
                    }

                    .social-media__text{
                        color: var(--link-color)
                    }
                }
            }

            .social-media__text{
                font-size: 2rem;
                margin-top: 0.5rem;
            }
        }

        .buy-me-cofee{
            .bmc-button svg{
                height: 34px !important;
                width: 35px !important;
                margin-bottom: 1px !important;
                box-shadow: none !important;
                border: none !important;
                vertical-align: middle !important;
            }
            .bmc-button{
                line-height: 35px !important;
                text-decoration: none !important;
                display:inline-flex !important;
                color: var(--bg) !important;
                background-color: var(--primary-color) !important;
                border-radius: 5px !important;
                opacity: 0.6;
                padding: 10px 15px 7px 10px !important;
                font-size: 20px !important;
                font-weight: 700;
                letter-spacing:0.6px !important;
                font-family: ${theme.fonts.Inter} !important;
            }
            .bmc-button:hover, .bmc-button:active, .bmc-button:focus {
                text-decoration: none !important;
                opacity: 0.85 !important;
                color: var(--bg) !important;
            }
        }
    }

`;

export default Contact
