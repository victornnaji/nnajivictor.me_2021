import TinyBlocks from "@src/assets/TinyBlocks"
import { media } from "@src/styles"
import React from "react"
import styled from "styled-components"
import CustomLink from "../CustomLink"
import FilledButton, { FilledButtonText } from "../FilledButton"

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
            <FilledButton>
              <CustomLink page={`/case-study/${prevProps.slug}`} >
                  <FilledButtonText text="Prev Case Study" />
              </CustomLink>
            </FilledButton>
          </div>
          <CustomLink className="center-bottom-nav" page={"/case-studies"}>
              <div className="grid-button">
                  <TinyBlocks />
              </div>
              <div className="case-study__tolltip" aria-label="back to case studies">Back to Case Studies</div>
          </CustomLink>
          <div className="right-bottom-nav">
            <FilledButton>
              <CustomLink page={`/case-study/${nextProps.slug}`} >
                <FilledButtonText text="Next Case Study" />
              </CustomLink>
            </FilledButton>
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
`

export default BottomNav
