import { media} from "@src/styles"
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react"
import styled from "styled-components"
import CustomLink from "./CustomLink"

const InlineNav : React.FC = ({ children }) => {
  return <StyledInlineNav>{children}</StyledInlineNav>
}

interface Props {
    value : {
        slug: string,
        CaseStudiesGraphql: {
            featuredImage:{
              altText: string,
              localFile: any,
            }
        },
        excerpt?: string,
        title: string,

    }
}

export const LeftNav = ({value}: Props) => {
  const image = getImage(value.CaseStudiesGraphql.featuredImage.localFile);
  return (
    <CustomLink page={`/case-study/${value.slug}`} className="prev">
      <span className="icon-wrap">
        <svg className="icon" width="32" height="32" viewBox="0 0 64 64">
          <path
            id="arrow-left-1"
            d="M46.077 55.738c0.858 0.867 0.858 2.266 0 3.133s-2.243 0.867-3.101 0l-25.056-25.302c-0.858-0.867-0.858-2.269 0-3.133l25.056-25.306c0.858-0.867 2.243-0.867 3.101 0s0.858 2.266 0 3.133l-22.848 23.738 22.848 23.738z"
          />
        </svg>
      </span>
      <div className="inlinenav-content">
        <h3>{value.title}</h3>
        <div className="image-holder"><GatsbyImage image={image!} alt={value.CaseStudiesGraphql.featuredImage.altText}/></div>
      </div>
    </CustomLink>
  )
}

export const RightNav = ({value}: Props) => {
  const image = getImage(value.CaseStudiesGraphql.featuredImage.localFile);
  return (
    <CustomLink page={`/case-study/${value.slug}`} className="next">
      <span className="icon-wrap">
        <svg className="icon" width="32" height="32" viewBox="0 0 64 64">
          <path
            id="arrow-right-1"
            d="M17.919 55.738c-0.858 0.867-0.858 2.266 0 3.133s2.243 0.867 3.101 0l25.056-25.302c0.858-0.867 0.858-2.269 0-3.133l-25.056-25.306c-0.858-0.867-2.243-0.867-3.101 0s-0.858 2.266 0 3.133l22.848 23.738-22.848 23.738z"
          />
        </svg>
      </span>
      <div className="inlinenav-content">
        <h3>{value.title}</h3>
        <div className="image-holder"><GatsbyImage image={image!} alt={value.CaseStudiesGraphql.featuredImage.altText}/></div>
      </div>
    </CustomLink>
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

    .inlinenav-content {
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
      overflow: hidden;

      h3 {
        position: relative;
        margin: 0;
        color: var(--primary-color);
        white-space: nowrap;
        font-weight: 700;
        font-size: 2.2rem;
        line-height: 1.5;
      }
      .image-holder {
        position: absolute;
        top: 0;
        width: 120px;
      }
    }

    &.prev {
      left: 0;

      .inlinenav-content {
        left: 0;
        padding-right: 120px;
        -webkit-transform: translateY(-50%) translateX(-100%);
        transform: translateY(-50%) translateX(-100%);

        h3{
            padding-right: 2rem;
        }
      }

      .image-holder {
        right: 0;
      }
    }

    &.next {
      right: 0;
      .inlinenav-content {
        right: 0;
        padding-left: 120px;
        text-align: right;
        -webkit-transform: translateY(-50%) translateX(100%);
        transform: translateY(-50%) translateX(100%);

        h3{
            padding-left: 2rem;
        }
      }

      .image-holder {
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
  a:hover .inlinenav-content {
    -webkit-transform: translateY(-50%) translateX(0);
    transform: translateY(-50%) translateX(0);
  }
`

export default InlineNav
