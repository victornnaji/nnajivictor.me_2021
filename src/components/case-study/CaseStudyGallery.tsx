import React from 'react'
import { GalleryProp } from './types'
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components'
import { media } from '@src/styles'
import Times from '@src/assets/Times'

interface Props {
    gallery: GalleryProp[]
}

const CaseStudyGallery = ({gallery}: Props) => {
    const [open, setOpen] = React.useState(false);
    const [modalMedia, setModalMedia] = React.useState<any>();

    const handleImageClick = (e: React.MouseEvent, item : GalleryProp) => {
        e.preventDefault();
        setOpen(true);
        setModalMedia(item);
    }

    const size = gallery.length;
    const sizeSelect = ["one", "two", "three", "four", "five"];
    const modalRef = React.useRef(null);
    return <>
        <StyledGallery className={`case-study__gallery ${sizeSelect[size - 1]}`}>
            {gallery.map((image: GalleryProp) => (
                <span key={image.databaseId} className="gallery-image" onClick={(e) => handleImageClick(e, image)}>
                    <GatsbyImage
                        image={image.localFile.childImageSharp.gatsbyImageData}
                        alt={image.altText} />
                </span>
            ))}
        </StyledGallery>
        {open && <Gallerymodal ref={modalRef} >
            <span className="modal-button" onClick={() => setOpen(false)}><Times /></span>
            <div className="modal-content">
              <GatsbyImage image={modalMedia.localFile.childImageSharp.gatsbyImageData} alt={modalMedia.altText}/>
            </div>
        </Gallerymodal>}
    </>;
}

const Gallerymodal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--tertiary-color-trans);
    height: 100vh;
    width: 100vw;
    z-index: 5000;
    grid-template-columns: repeat(var(--cols),var(--gridSize));
    display: grid;
    grid-gap: 0px;
    overflow: hidden;
    transition: all .3s;

    .modal-button{
        height: 3rem;
        width: 3rem;
        grid-column: 12/12;
        cursor: pointer;
        margin-top: 3rem;
        z-index: 5100;
        ${media.phablet`grid-column: 11/11;`}
        svg{
            fill: var(--primary-color);
        }
    }

    .modal-content{
        grid-column: 3/11;
        ${media.phablet`grid-column: 2/12;`}

        .gatsby-image-wrapper{
            width: 100%;
            div{
                max-width: 100% !important;
            }
        }
    }
`

const StyledGallery = styled.div`
    margin-top: 10rem;
    display: grid;
    margin-bottom: 10rem;
    grid-template-columns: 1fr repeat(2, 25%);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    ${media.phablet`grid-template-columns: 1fr; grid-template-rows: 1fr auto;height: auto;`};
    grid-auto-rows: 16vw;

    &.one{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }

    &.two{
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        ${media.phablet`grid-template-columns: 1fr; grid-template-rows: 1fr auto;`};
    }

    &.three, &.four{
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        ${media.phablet`grid-template-columns: 1fr; grid-template-rows:repeat(4, auto);`};
    }

    &.three, &.five{
        .gallery-image{
            &:nth-child(1){
                grid-row: 1/-1;
                ${media.phablet`grid-row: auto;`};
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
