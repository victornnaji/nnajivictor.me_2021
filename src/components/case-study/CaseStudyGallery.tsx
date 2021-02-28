import React from 'react'
import { GalleryProp } from './types'
import Img from "gatsby-image"
import styled from 'styled-components'
import { media } from '@src/styles'

interface Props {
    gallery: GalleryProp[]
}

const CaseStudyGallery = ({gallery}: Props) => {

    const handleImageClick = (e: any) => {
        console.log(e);
    }

    const size = gallery.length;
    const sizeSelect = ["one", "two", "three", "four", "five"];
    return (
        <StyledGallery className={`case-study__gallery ${sizeSelect[size - 1]}`}>
            {gallery.map((image: GalleryProp) => (
                <span key={image.databaseId} className="gallery-image" onClick={() => handleImageClick(image.localFile.childImageSharp.fluid)}>
                    <Img fluid={image.localFile.childImageSharp.fluid} alt={image.altText}/>
                </span>
            ))}
        </StyledGallery>
    )
}

const StyledGallery = styled.div`
    margin-top: 10rem;
    display: grid;
    margin-bottom: 10rem;
    grid-template-columns: 1fr repeat(2, 25%);
    grid-template-rows: repeat(2, 1fr);
    ${media.phablet`grid-template-columns: 1fr; grid-template-rows: 1fr;`};
    grid-auto-rows: 16vw;

    &.one{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }

    &.two{
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        ${media.phablet`grid-template-columns: 1fr; grid-template-rows: 1fr;`};
    }

    &.three, &.four{
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        ${media.phablet`grid-template-columns: 1fr; grid-template-rows: 1fr;`};
    }

    &.three, &.five{
        .gallery-image{
            &:nth-child(1){
                grid-row: 1/-1;
            }
            .gatsby-image-wrapper{
                height: 100%;
                width: 100%
            }
        }
    }

    .gallery-image{
        cursor: pointer;
        .gatsby-image-wrapper{
            height: 100%;
            width: 100%
        }
    }

    
`

export default CaseStudyGallery
