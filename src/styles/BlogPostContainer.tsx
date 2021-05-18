import styled from "styled-components";
import media from "./media";
import theme from "./theme";

const BlogPostContainer = styled.article`
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
    min-height: 100vh;
    padding: 200px 100px;
    font-family: ${theme.fonts.Lato};

    code {
        background-color: rgb(23, 42, 69);
        color: rgb(230, 241, 255);
        font-size: 14px;
        border-radius: 3px;
        padding: 0.3em 0.5em;
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

    .gatsby-highlight{
        background-color: #112340;
        padding: 3.5rem;
        border-radius: .3rem;
        margin: 2em 0;
        font-family: ${theme.fonts.Mono};
        font-size: 1.5rem;
        position: relative;
        overflow: auto;
    }

    .gatsby-highlight pre[class*='language-'] {
        &::before{
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

    .gatsby-highlight pre[class*='language-javascript']::before {
        content: 'js';
    }
    .gatsby-highlight pre[class*='language-js']::before {
        content: 'js';
    }
    .gatsby-highlight pre[class*='language-jsx']::before {
        content: "jsx";
    }
    .gatsby-highlight pre[class*='language-graphql']::before {
        content: 'GraphQL';
    }
    .gatsby-highlight pre[class*='language-html']::before {
        content: 'html';
    }
    .gatsby-highlight pre[class*='language-css']::before {
        content: 'css';
    }
    .gatsby-highlight pre[class*='language-mdx']::before {
        content: 'mdx';
    }
    .gatsby-highlight pre[class*='language-shell']::before {
        content: 'shell';
    }
    .gatsby-highlight pre[class*='language-sh']::before {
        content: 'sh';
    }
    .gatsby-highlight pre[class*='language-bash']::before {
        content: 'bash';
    }
    .gatsby-highlight pre[class*='language-yaml']::before {
        content: 'yaml';
    }
    .gatsby-highlight pre[class*='language-markdown']::before {
        content: 'mdx';
    }
    .gatsby-highlight pre[class*='language-json']::before,
    .gatsby-highlight pre[class*='language-json5']::before {
        content: 'json';
    }
    .gatsby-highlight pre[class*='language-diff']::before {
        content: 'diff';
    }
    .gatsby-highlight pre[class*='language-text']::before {
        content: 'text';
    }
    .gatsby-highlight pre[class*='language-flow']::before {
        content: 'flow';
    }
    .gatsby-highlight pre[class*='language-csharp']::before {
        content: 'c#';
    }
    .gatsby-highlight pre[class*='language-php']::before {
        content: 'php';
    }
`;

export default BlogPostContainer