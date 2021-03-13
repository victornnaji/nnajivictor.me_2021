import Logo from '@src/assets/Logo'
import { media } from '@src/styles'
import React from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap';
import Toggle from './Toggle'
import Hamburger from './Hamburger'
import CustomLink from './CustomLink';

const Header : React.FC = () => {
    React.useEffect(() => {
        const tl = gsap.timeline();
        const brand = '.brand .js-logo';
        const toggle = '.toggle--mask .toggle';
        const menu = '.hamburger--mask .hamburger';
        tl
        .set([brand, toggle, menu], { css: {autoAlpha: 0, opacity: 0}})
        .fromTo( brand,
          {
            y: 100,
            opacity: 0,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            opacity: 1,
            ease: "power4.out",
            duration: 1.5,
          }, "start")
          .fromTo([".hamburger--mask .hamburger", ".toggle"], {
            y: 120,
            opacity: 0,
          }, {
            y: 0,
            autoAlpha: 1,
            opacity: 1,
            ease: "ease.in",
            stagger: 0.1,
          },"start+=0.25")
        
      }, [])
    return (
        <StyledHeader> 
            <StyledLogo className="brand">
            <CustomLink page="/" aria-label="home">
              <Logo />
            </CustomLink>
          </StyledLogo>
          <StyledToggle className="toggle--mask">
            <Toggle />
          </StyledToggle>
          <StyledHamburger className="hamburger--mask">
            <Hamburger />
          </StyledHamburger>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
    grid-column: 1/-1;
    height: 100%;
    padding-top: 1rem;
    height: 7rem;
    ${media.phone`height: 6rem`}
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    grid-template-rows: 1fr;
    position: relative;
`

const StyledLogo = styled.div`
    grid-column: 2/3;
    overflow: hidden;
    width: 4rem;

    a {
    display: block;
    color: var(--primary-color) !important;
    width: 42px;
    height: 42px;
    &:hover,
    &:focus {
      svg {
        fill: var(--primary-color) !important;
      }
    }
    svg {
      fill: none;
      user-select: none;
    }
  } 

  .js-logo{
    opacity: 0;
    visibility: hidden;
  }

`

const StyledHamburger = styled.div`
    grid-column: 11/12;
    overflow: hidden;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-end;

    .hamburger{
      opacity: 0;
      visibility: hidden;
    }
`

const StyledToggle = styled.div`
    grid-column: 10/11;
    justify-self: right;
    ${media.phablet`grid-column: 9/10;`};
    padding: .5rem;
    overflow: hidden;

    .toggle{
      opacity: 0;
      visibility: hidden;
    }
`;

export default Header
