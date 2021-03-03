import TinyBlocks from "@src/assets/TinyBlocks"
import { media } from "@src/styles"
import React from "react"
import styled from "styled-components"
import CustomLink from "../CustomLink"

interface Props {
    prevProps : {
        slug: string,
    },
    nextProps : {
        slug: string,
    },
}
const BottomNav = ({ prevProps, nextProps }: Props) => {

    return (
      <StyledBottomNav>
          <div className="left-bottom-nav">
              <CustomLink
                  page={`/case-study/${prevProps.slug}`}
                  className="link__case-study"
              >
                  <span className="filled-btn-text">Prev Case Study</span>
                  <span className="filled-btn-overlay right"></span>
              </CustomLink>
          </div>
          <CustomLink className="center-bottom-nav" page={"/case-studies"}>
              <div className="grid-button">
                  <TinyBlocks />
              </div>
              <div className="case-study__tolltip" aria-label="back to case studies">Back to Case Studies</div>
          </CustomLink>
          <div className="right-bottom-nav">
              <CustomLink
                  page={`/case-study/${nextProps.slug}`}
                  className="link__case-study"
              >
                  <span className="filled-btn-text">Next Case Study</span>
                  <span className="filled-btn-overlay"></span>
              </CustomLink>
          </div>
      </StyledBottomNav>
  )
}

const StyledBottomNav = styled.div`
  margin-top: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.phablet`margin-top: 7rem; flex-direction: column; `}
  margin-bottom: 10rem;
  ${media.phablet`margin-bottom: 5rem;`}

  .center-bottom-nav {
    color: var(--primary-color);
    display: inline-block;
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    align-items: center;
    text-decoration: none;
    position: relative;
    width: 100%;

    .case-study__tolltip {
      background-color: var(--primary-dark);
      color: var(--bg);
      padding: 8px 12px;
      text-decoration: none;
      font-size: 1.4rem;
      position: absolute;
      top: -5rem;
      transform: translate3d(0px, 24px, 0px);
      transform-style: preserve-3d;
      opacity: 0;
      display: none;
      font-weight: 700;
      transition: transform 3.8s;
      will-change: transform;
    }

    .grid-button{
        ${media.phablet`margin: 2rem 0`}
        &:hover + .case-study__tolltip{
            display: block;
            opacity: 1;
            transform: translate3d(0px, 0px, 0px);
            transition: transform 3.8s;
        }
    }
  }

  .link__case-study {
    border-style: solid;
    border-width: 2px;
    border-color: var(--primary-color);
    background-color: transparent;
    transition: color 200ms ease, background-color 200ms ease;
    color: var(--primary-color);
    font-weight: 400;
    letter-spacing: 0.4px;
    text-decoration: none;
    text-transform: capitalize;
    max-width: 100%;
    position: relative;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;

    .filled-btn-overlay {
      background-color: var(--primary-color);
      position: absolute;
      left: 0px;
      top: 0px;
      bottom: 0px;
      z-index: 0;
      width: 0;
      height: 100%;
      will-change: width, height, color;
      transition: all 0.3s;

      &.right {
        left: auto;
        right: 0px;
        transform-origin: right;
      }
    }

    .filled-btn-text {
      font-size: 1.5rem;
      font-weight: 700;
    }

    &:hover {
      .filled-btn-overlay {
        width: 100%;
      }

      .filled-btn-text {
        color: var(--bg);
        z-index: 1;
      }
    }
  }
`

export default BottomNav
