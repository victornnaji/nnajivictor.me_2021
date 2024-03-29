import styled from "styled-components"
import media from "./media"
import theme from "./theme"

const BlogPostContainer = styled.article`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  padding: 15rem 0;

  a {
    color: var(--link-color);
    text-decoration: none;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }

  a:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr min(80ch, 100%) 1fr;

    ${media.phablet`display: block`}
  }
  .wrapper > * {
    grid-column: 2;
  }
  .full-bleed {
    width: 90%;
    margin: 4rem auto;
    grid-column: 1 / -1;
    ${media.tablet`width: 100%;`}
  }
  font-family: ${theme.fonts.Lato};

  code {
    background-color: rgb(23, 42, 69);
    color: rgb(230, 241, 255);
    font-size: 1.5rem;
    border-radius: 3px;
    padding: 0.3em 0.5em;
    margin-bottom: 1.5rem;
    font-family: ${theme.fonts.Mono};
  }

  ${media.desktop`
        padding: 20rem auto;
    `};
  ${media.tablet`
        padding: 15rem 0;
    `};
  ${media.phablet`
        padding: 12.5rem 0;
    `};

  .gatsby-highlight {
    background-color: #112340;
    padding: 3.5rem;
    border-radius: 0.3rem;
    margin: 2em 0;
    font-family: ${theme.fonts.Mono};
    font-size: 1.7rem;
    position: relative;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"] {
    &::before {
      background-color: #303c55;
      font-size: 1.2rem;
      color: #e6f1ff;
      font-family: ${theme.fonts.Mono};
      line-height: 1.5;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border-radius: 0 0 3px 3px;
      position: absolute;
      top: 0;
      left: 1.25rem;
      padding: 0.25rem 0.5rem;
    }
  }

  .gatsby-highlight pre[class*="language-javascript"]::before {
    content: "js";
  }
  .gatsby-highlight pre[class*="language-js"]::before {
    content: "js";
  }
  .gatsby-highlight pre[class*="language-jsx"]::before {
    content: "jsx";
  }
  .gatsby-highlight pre[class*="language-graphql"]::before {
    content: "GraphQL";
  }
  .gatsby-highlight pre[class*="language-html"]::before {
    content: "html";
  }
  .gatsby-highlight pre[class*="language-css"]::before {
    content: "css";
  }
  .gatsby-highlight pre[class*="language-mdx"]::before {
    content: "mdx";
  }
  .gatsby-highlight pre[class*="language-shell"]::before {
    content: "shell";
  }
  .gatsby-highlight pre[class*="language-sh"]::before {
    content: "sh";
  }
  .gatsby-highlight pre[class*="language-bash"]::before {
    content: "bash";
  }
  .gatsby-highlight pre[class*="language-yaml"]::before {
    content: "yaml";
  }
  .gatsby-highlight pre[class*="language-markdown"]::before {
    content: "mdx";
  }
  .gatsby-highlight pre[class*="language-json"]::before,
  .gatsby-highlight pre[class*="language-json5"]::before {
    content: "json";
  }
  .gatsby-highlight pre[class*="language-diff"]::before {
    content: "diff";
  }
  .gatsby-highlight pre[class*="language-text"]::before {
    content: "text";
  }
  .gatsby-highlight pre[class*="language-flow"]::before {
    content: "flow";
  }
  .gatsby-highlight pre[class*="language-csharp"]::before {
    content: "c#";
  }
  .gatsby-highlight pre[class*="language-php"]::before {
    content: "php";
  }
`

export const BlogPostContent = styled.main`
  margin-bottom: 10rem;
  font-size: 2rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    font-family: ${theme.fonts.Inter};
    margin: 3.5rem 0 2rem 0;
  }

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  h6 {
    font-size: 1rem;
  }

  strong {
    font-weight: 600;
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.6;
    color: var(--primary-color);
    font-family: ${theme.fonts.Lato};
  }

  .inline-gatsby-image-wrapper,
  .inline-gatsby-image-wrapper span {
    display: block;
    margin: 0 auto;
  }

  blockquote {
    font-style: italic;
    color: rgb(156, 168, 180);
    padding: 0px 32px;
    margin-top: 24px;
    margin-bottom: 48px;
    position: relative;
    width: 70%;
    margin: 7rem auto;

    ${media.phablet`width: 90%; margin: 5rem auto;`}

    cite {
      display: block;
      color: var(--primary-color);
      font-style: normal;
      font-weight: bold;
      margin-top: 1em;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        background-color: var(--primary-color);
        height: 0.2rem;
        width: 3rem;
        left: -4rem;
        top: 40%;
      }
    }

    &::before {
      content: "“";
      position: absolute;
      color: var(--primary-dark);
      font-size: 20rem;
      z-index: -1;
      left: -6rem;
      top: -6rem;

      ${media.phablet`font-size: 10rem; left: -3rem;
        top: -3rem;`}
    }
  }
`

export const BlogPostHeader = styled.header`
  margin-bottom: 5rem;
  h1 {
    font-weight: 600;
    margin: 0 0 1.6rem 0;

    &.medium-title {
      font-size: 5.5rem;
      line-height: 1.1;
      margin: 0;
      ${media.desktop`font-size: 5rem;`}
      ${media.tablet`font-size: 4rem`};
      font-family: ${theme.fonts.Inter};
    }
  }

  h2.subtitle {
    margin: 1.5rem 0 1rem 0;
    font-size: 1.7rem;
    font-family: ${theme.fonts.Mono};
    line-height: 1.5;

    a {
      margin-right: 10px;
      text-transform: capitalize;
    }
  }
`

export default BlogPostContainer
