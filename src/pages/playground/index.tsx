import ArticleIcon from '@src/assets/Article'
import BlogSearch from '@src/components/blogSearch'
import { theme } from '@src/styles'
import React from 'react'
import styled from 'styled-components'
import { DoubleLine } from '../blog'

const index = () => {
    return (
        <StyledPlayground>
            <DoubleLine />
            <div className="blog-title-and-search">
                <h1 className="blog-title"><ArticleIcon /> <span>Tutorials</span></h1>
                <BlogSearch indexName="Playground"/>
            </div>
        </StyledPlayground>
    )
}

const StyledPlayground = styled.main`
    margin-top: 5rem;
    .blog-title-and-search{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        width: 100%;
        position: relative;
        .blog-title{
            /* margin-top: 1rem; */
            svg{
                height: 3rem;
                width: 3rem;
            }
    
            span{
                margin-left: .8rem;
                font-size: 1.4rem;
                font-family: ${theme.fonts.Mono};
            }
            display: flex;
            align-items: center;
        }
    }
`

export default index
