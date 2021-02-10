import React from 'react'
import { useAnimating, useMenu, useSafeDispatch } from '@src/_hooks';
import styled from 'styled-components'
import {gsap} from 'gsap';
import {theme, media} from '@src/styles'
// import Social from './Social';
import MenuImage from './MenuImage';
import { AnimatingContextInterface, MenuContextInterface } from '@src/_hooks/hooks.types';
import { SwipeLinks } from './Links';
import { testMenu } from '@src/_utils';

const Menu = () => {

    const [open] = useMenu() as MenuContextInterface;
    const [, setAnimating] = useAnimating() as AnimatingContextInterface;
    const menuRef = React.useRef<HTMLInputElement>(null);
    const [complete, setComplete] = React.useState(false);
    const SafeSetComplete : (D: any) => void = useSafeDispatch(setComplete);

    const memoisedToggle = React.useCallback((action) => {
        setAnimating(true);
        
        //Get the menu items container
        const items = gsap.utils.toArray(".menu__item");
        const itemsTotal = items.length;

        if(action === 'open'){
            gsap.set(menuRef.current, {autoAlpha: 1});
        }

        if(menuRef && menuRef.current){
            menuRef.current.classList[action === 'open' ? 'add' : 'remove']('menu--open');
        }

        function animationEnd(pos : number){
            if ( pos === itemsTotal-1 && complete) {
                setAnimating(false); 
            }
          }; 
        
        items.forEach( (el: any, pos) => {
          const innerEl = el.querySelector('.menu__item-inner');
          const config = {x: '', y: ''};
          const configInner = {x: '', y: ''};
          const direction = el.dataset.direction;
  
          if (direction === "bt") {
            config.y = "101%"
            configInner.y = "-101%"
            configInner.x = "0%"
          } else if (direction === "tb") {
            config.y = "-101%"
            configInner.y = "101%"
            configInner.x = "0%"
          } else if (direction === "lr") {
            config.x = "-101%"
            configInner.x = "101%"
          } else if (direction === "rl") {
            config.x = "101%"
            configInner.x = "-101%"
          } else {
            config.x = "101%"
            config.y = "101%"
            configInner.x = "-101%"
            configInner.y = "-101%"
          }
  
  
          if ( action === 'open' ){
            gsap.set(menuRef.current, {css: {zIndex: 20}})
            gsap.set(el, config);
            gsap.set(innerEl, configInner);
            gsap.to([el,innerEl],{
              ease: "Power4.easeOut",
              x: '0%',
              y: '0%',
              duration: .9, 
              onComplete: () => animationEnd(pos)
          });
        }
        else{
          gsap.to(menuRef.current, {css: {zIndex: -1}})
          gsap.to(el,{
            duration: 0.6,
            ease: "Power4.easeInOut",
            x: config.x || 0,
            y: config.y || 0
          });
          gsap.to(innerEl, {
            duration: 0.6,
            ease: "Power4.easeInOut",
            x: configInner.x || 0,
            y: configInner.y || 0,
            onComplete: () => animationEnd(pos)
          })
        }
        });

        // Individual Animations
        const mainlink_title = gsap.utils.toArray('.mainmenu .mainlink__title');
        const mainlink_social = gsap.utils.toArray('.mainlink_social .main_link_social-item');
        const secondary_item = gsap.utils.toArray('.secondaryMenu .secondar-link__content');
        const imgMenuLoader = '.img-menu .inner';
        const imgMenu_img_mask = '.img-menu__content .img-menu__image--mask';
        const imgMenu_img = '.img-menu__content img';
        const imgMenuText = '.img-menu__content .img-menu__title--mask a'
        const tl = gsap.timeline({
            onComplete: () => {
              SafeSetComplete(true);
            },
        });
        
        tl
        .fromTo(mainlink_title,{
            y: action === 'open' ? '50%' : 0,
            opacity: action === 'open' ? 0 : 1,
        },{
            y: 1,
            // startAt: action === 'open' ? {y: '50%', opacity: 0} : null,
            ease: action === 'open' ? "ease" : "Power4.easeInOut",
            stagger: action === 'open' ? 0.15 : 0.1,
            opacity: action === 'open' ? 1 : 0,
            autoAlpha: action === 'open' ? 1 : 0,
        }, "start")
        .fromTo(mainlink_social,  {
            y: action === 'open' ? '50%' : 0,
            opacity: action === 'open' ? 0 : 1,
        },{
            duration: 0.5,
            y: 1,
            // startAt: action === 'open' ? {y: '50%', opacity: 0} : null,
            ease: action === 'open' ? "ease" : "Power4.easeInOut",
            stagger: action === 'open' ? 0.15 : 0.1,
            opacity: action === 'open' ? 1 : 0,
            autoAlpha: action === 'open' ? 1 : 0,
        }, "start-=0.2")
        .fromTo(secondary_item, {
            y: action === 'open' ? '50%' : 0,
            opacity: action === 'open' ? 0 : 1,
        },{
            y: 1,
            ease: action === 'open' ? "ease" : "Power4.easeInOut",
            stagger: action === 'open' ? 0.15 : 0.1,
            opacity: action === 'open' ? 1 : 0,
            autoAlpha: action === 'open' ? 1 : 0,
        },  "start+=0.25")
        .from(imgMenuLoader, {
            scaleY: action === 'open' ? 0 : 1,
            transformOrigin: action === 'open' ? 'bottom' : 'top',
            duration: 1.1,
            ease: 'power2.out',
        }, 0.3)
        .addLabel('revealImage')
        .from(imgMenu_img_mask, { 
            yPercent: action === 'open' ? 120 : 0,
            duration: action === 'open' ? 1.1 : 0,
            ease: 'power2.out',
        }, 'revealImage-=0.6')
        .from(imgMenu_img, { 
            yPercent: action === 'open' ? -50 : 0,
            duration: action === 'open' ? 1 : 0,
            ease: 'power2.out',
        }, 'revealImage-=0.6')
        .from(imgMenuText, { 
            yPercent: action === 'open' ? 120 : 0,
            duration: action === 'open' ? 1 : 0,
            ease: 'power2.out',
        }, 'revealImage-=0.4')
    

    }, [setAnimating, complete, SafeSetComplete])

    React.useEffect(() => {
        if (open) {
            memoisedToggle("open")
        } else {
            memoisedToggle("close")
        }
    }, [memoisedToggle, open]);

    const {mainMenu, secondaryMenu} = testMenu;

    return (
        <StyledMenu role="navigation" className="menu" ref={menuRef}>
            {/* Menu Item 1 */}
            <MenuItem className="menu__item menu__item--1" data-direction="bt">
                <div className="menu__item-inner">
                    <div className="mainmenu">
                        {mainMenu.map((main, i) => (
                            <div className="mainlink__inner" key={main.label+i}>
                                <p className="mainlink__title">
                                    <SwipeLinks to={main.path} className="mainmenu__item" activeClassName="active">
                                        {main.label}
                                    </SwipeLinks>
                                </p>
                            </div>
                        ))}
                        <StyledLabel className="label--topleft label--vert-mirror">
                            <div className="mainlink__inner">
                                <p className="mainlink__title">
                                    <a href="mailto:nnajivictor0@gmail.com" className="link" target="_blank" rel="nofollow noopener noreferrer">
                                        nnajivictor0@gmail.com
                                    </a>
                                </p>
                            </div>
                        </StyledLabel>
                        <StyledLabel className="label--bottomright label--vert">
                            {/* <Social /> */}
                        </StyledLabel>
                    </div>
                </div>
            </MenuItem>

            {/* Menu Item 2 */}
            <MenuItem className="menu__item menu__item--2" data-direction="lr">
                <div className="menu__item-inner">
                    <MenuImage />
                </div>
            </MenuItem>

            {/* Menu Item 3 */}
            <MenuItem className="menu__item menu__item--3" data-direction={window.screen.width > 768 ? "bt" : "tb"}>
                <div className="menu__item-inner">
                    <div className="secondaryMenu">
                        {secondaryMenu.map((item : any, i :number) => (
                            <div className="secondary-link__inner" key={item+i}>
                                <div className="secondar-link__content">
                                    <div className="sec-item-link">
                                        <SwipeLinks to={item.path} className="secondarymenu__item" activeClassName="active">
                                            {item.label}
                                        </SwipeLinks>
                                    </div>
                                    <div className="secondarymenu__tag">
                                        {item.tagline}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MenuItem>

            {/* Menu Item 4 */}
            <MenuItem className="menu__item menu__item--4" data-direction="rl">
                <div className="menu__item-inner">
                    hello4
                </div>
            </MenuItem>

            {/* Menu Item 5 */}
            <MenuItem className="menu__item menu__item--5" data-direction="tb">
                <div className="menu__item-inner">
                    hello5
                </div>
            </MenuItem>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    &.menu--open {
      pointer-events: auto;
      z-index: 20;
    }
    grid-column: 1/-1;
    text-align: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    visibility: hidden;
    display: grid;
    ${media.tablet`
        grid-template-columns: 100%;
        grid-template-rows: 1fr 20% 1fr;
        grid-template-areas: 
            "item1"
            "item2"
            "item3"
    `}
  ${media.phone`
        grid-template-columns: 100%;
        grid-template-rows: 40% 20% 40%;
        grid-template-areas: 
            "item1"
            "item2"
            "item3"
  `}

  @media screen and (min-width: 53em){
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    grid-template-columns: 25% 25% 50%;
    grid-template-rows: 60% 40%;
    grid-template-areas:
      "item3 item2 item1"
      "item4 item5 item1";
  }
`;

const MenuItem = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  .menu__item-inner {
    overflow: hidden;
    transform: translate3d(100%, 0, 0);
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &.menu__item--1 .menu__item-inner {
    background: var(--tertiary-color);
    height: 100%;

    .mainmenu {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      counter-reset: menuitem;

      .mainmenu__item {
        text-decoration: none;
        color: var(--primary-color);
        font-size: 5vw;
        text-transform: lowercase;
        overflow: visible;
        padding: 0 2rem;
        position: relative;
        transition: color 0.3s;
        font-family: ${theme.fonts.Cinzel};
        margin: 0.4rem 0;
        ${media.tablet`
                position: relative;
                overflow: hidden;
                transition: color 0.1s;
                margin: 0.4rem 0;
                padding: 0.5rem 0;
                display: block;
                line-height: 30px;
            `}
        ${media.phone`
                padding: 0.5rem 0;
                font-size: 3rem;
            `}

          &::after {
            counter-increment: menuitem;
            content: counters(menuitem, "", decimal-leading-zero);
            position: absolute;
            font-size: 2rem;
            top: 0;
            left: 0rem;
            color: var(--link-color);

             ${media.tablet`display: none`}
         }

        &::before {
          content: "";
          position: absolute;
          z-index: -1;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30%;
          opacity: 0.7;
          transform: scale3d(0, 1, 1);
          transform-origin: 0% 50%;
          transition: ${theme.transition};
          background: var(--link-color);
        }

        &:hover {
          &::before {
            transform: scale3d(1, 1, 1);
          }
        }

        &.active {
          &::before {
            transform: scale3d(1, 1, 1);
          }
        }
      }
    }
  }
  &.menu__item--2 .menu__item-inner {
    background: var(--menu-2-color);
    height: 100%;
    position: relative;
  }
  &.menu__item--3 .menu__item-inner {
    background: var(--tertiary-color-moon);
    height: 100%;

    .secondaryMenu {
      width: 85%;
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      ${media.tablet`align-items: center`}

      .secondary-link__inner {
        overflow: hidden;

        .secondar-link__content{
            font-weight: 900;
            margin: 1.25em 0;
            padding-left: 0.25em;
            font-family: ${theme.fonts.Lato};
            text-align: left;
            ${media.tablet`padding-left: 0; margin: 1em 0;`}
            position: relative;

            &::before{
                content: '';
                position: absolute;
                top: 2rem;
                left: 0;
                width: 1.5rem;
                height: 0.5rem;
                background: var(--primary-color);
                transform: scale3d(0,1,1);
                transform-origin: 0% 50%;
                transition: transform 0.3s;
            }

            &:hover{
                &::before{
                    transform: scale3d(1,1,1);
                }

                .secondarymenu__item{
                    transform: translate3d(0.5em,0,0);
                    opacity: 1;
                }

                .secondarymenu__tag{
                    opacity: 1;
                }
            }

            .secondarymenu__item{
                color: var(--primary-color);
                text-decoration: none;
                font-size: 3rem;
                ${media.tablet`font-size: 1.5rem;`}
                text-transform: capitalize;
                display: inline-block;
                transition: transform 0.3s;
                margin-right: 1.5rem;
                opacity: .85;
            }

            .secondarymenu__tag{
                font-size: 1.3rem;
                color: var(--link-color);
                ${media.tablet`font-size: 1.2rem;`}
                opacity: .85;
            }
        }
      }
    }
  }
  &.menu__item--4 .menu__item-inner {
    background: var(--tertiary-color);
    height: 100%;
    color: #fff;
  }
  &.menu__item--5 .menu__item-inner {
    background: var(--tertiary-color-moon);
    height: 100%;
  }
  &.menu__item--4,
  &.menu__item--5 {
    display: none;
  }

  .mainlink__inner {
    overflow: hidden;
  }

  @media screen and (min-width: 53em) {
    height: 100%;
    &.menu__item--1 {
      grid-area: item1;
    }
    &.menu__item--2 {
      grid-area: item2;
    }
    &.menu__item--3 {
      grid-area: item3;
    }
    &.menu__item--4 {
      grid-area: item4;
    }
    &.menu__item--5 {
      grid-area: item5;
    }
    &.menu__item--5,
    &.menu__item--4 {
      display: block;
    }
    .menu__item-inner {
      align-items: center;
    }
  }
`

const StyledLabel = styled.div`
  display: block;
  color: var(--primary-color);
  position: absolute;
  z-index: 1000;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
  text-transform: capitalize;
  opacity: 0.7;
  cursor: pointer;

  &.label--topleft {
    top: 2rem;
    left: 2rem;

    a{
      position: relative;
      overflow: hidden;
      text-decoration: none;
      color: var(--link-color);
      opacity: 1;
      &::after {
        content: "";
        background: var(--link-color);
        position: absolute;
        right: 14px;
        bottom: -8px;
        width: calc(100% - 10px);
        height: calc(100% - 8px);
        z-index: -1;
        transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
      }
      &:hover:after {
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 100%;
      }
    }
  }

  &.label--bottomright {
    bottom: 2rem;
    right: 2rem;
  }

  &.label--vert,
  &.label--vert-mirror {
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
  }

  &.label--vert-mirror {
    transform: rotate(180deg);
  }
`

const MemoMenu = React.memo(Menu);

export default MemoMenu
