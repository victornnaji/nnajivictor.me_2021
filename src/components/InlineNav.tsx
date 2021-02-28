import { media, theme } from "@src/styles"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const InlineNav = ({ children }: any) => {
  return <StyledInlineNav>{children}</StyledInlineNav>
}

interface Props {
    value : {
        slug: string,
        CaseStudiesGraphql: {
            featuredImage:{
                altText: string,
                mediaItemUrl: string,
            }
        },
        excerpt?: string,
        title: string,

    }
}

export const LeftNav = ({value}: Props) => {
  return (
    <a className="prev" href="/item1">
      <span className="icon-wrap">
        <svg className="icon" width="32" height="32" viewBox="0 0 64 64">
          <path
            id="arrow-left-1"
            d="M46.077 55.738c0.858 0.867 0.858 2.266 0 3.133s-2.243 0.867-3.101 0l-25.056-25.302c-0.858-0.867-0.858-2.269 0-3.133l25.056-25.306c0.858-0.867 2.243-0.867 3.101 0s0.858 2.266 0 3.133l-22.848 23.738 22.848 23.738z"
          />
        </svg>
      </span>
      <div>
        <h3>{value.title}</h3>
        <img src={value.CaseStudiesGraphql.featuredImage.mediaItemUrl} alt={value.CaseStudiesGraphql.featuredImage.altText} />
      </div>
    </a>
  )
}

export const RightNav = ({value}: Props) => {
  return (
    <a className="next" href="/item3">
      <span className="icon-wrap">
        <svg className="icon" width="32" height="32" viewBox="0 0 64 64">
          <path
            id="arrow-right-1"
            d="M17.919 55.738c-0.858 0.867-0.858 2.266 0 3.133s2.243 0.867 3.101 0l25.056-25.302c0.858-0.867 0.858-2.269 0-3.133l-25.056-25.306c-0.858-0.867-2.243-0.867-3.101 0s-0.858 2.266 0 3.133l22.848 23.738-22.848 23.738z"
          />
        </svg>
      </span>
      <div>
        <h3>{value.title}</h3>
        <img src={value.CaseStudiesGraphql.featuredImage.mediaItemUrl} alt={value.CaseStudiesGraphql.featuredImage.altText} />
      </div>
    </a>
  )
}

const StyledInlineNav = styled.nav`
  ${media.phablet`display: none`};
  & a {
    position: fixed;
    top: 50%;
    display: block;
    outline: none;
    text-align: left;
    z-index: 1000;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);

    div {
      position: absolute;
      top: 50%;
      padding: 0 100px;
      background-color: var(--tertiary-color);
      -webkit-transition: -webkit-transform 0.3s;
      transition: transform 0.3s;
      height: 7rem;
      display: grid;
      align-content: center;
      justify-content: center;
      border: 1px solid var(--primary-color);

      h3 {
        position: relative;
        margin: 0;
        color: var(--primary-color);
        white-space: nowrap;
        font-weight: 700;
        font-size: 2.2rem;
        line-height: 1.5;
      }
      img {
        position: absolute;
        top: 0;
        height: 100%;
      }
    }

    &.prev {
      left: 0;

      div {
        left: 0;
        padding-right: 120px;
        -webkit-transform: translateY(-50%) translateX(-100%);
        transform: translateY(-50%) translateX(-100%);

        h3{
            padding-right: 2rem;
        }
      }

      img {
        right: 0;
      }
    }

    &.next {
      right: 0;
      div {
        right: 0;
        padding-left: 120px;
        text-align: right;
        -webkit-transform: translateY(-50%) translateX(100%);
        transform: translateY(-50%) translateX(100%);

        h3{
            padding-left: 2rem;
        }
      }

      img {
        left: 0;
      }
    }

    & svg {
      display: block;
      margin: 0 auto;
      padding: 0;
    }
  }

  .icon-wrap {
    position: relative;
    z-index: 100;
    display: block;
    height: 7rem;
    width: 7rem;
    display: grid;
    align-content: center;
    justify-content: center;
    background-color: var(--primary-color);

    svg.icon {
      fill: var(--bg);
    }
  }
  a:hover div {
    -webkit-transform: translateY(-50%) translateX(0);
    transform: translateY(-50%) translateX(0);
  }
`

export default InlineNav
