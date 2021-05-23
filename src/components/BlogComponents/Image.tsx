import React from 'react'
import styled from 'styled-components'
import { RenderWhenOnscreen } from './RenderWhenOnScreen';

interface Props {
    src: string,
    alt: string,
    caption: string,
    className: string,
}
const BlogImage = ({ src, alt = '', caption = '', className , ...delegated}: Props) => {
    
  let mutableAlt = alt || '';
  let mutableCaption = caption;
  const altMatch = mutableAlt.match(/caption=(.+)\|alt=(.+)/i);
  if (!caption && altMatch) {
    mutableCaption = altMatch[1];
    mutableAlt = altMatch[2];
  }

    return (
        <RenderWhenOnscreen className={className}>
            <ImageWrapper>
                <StyledImage src={src} alt={mutableAlt} title={mutableAlt} {...delegated} />
                {mutableCaption && <Caption>{mutableCaption}</Caption>}
            </ImageWrapper>
        </RenderWhenOnscreen>
    )
}

const ImageWrapper = styled.span`
  display: block;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: content-box;
  border-radius: 5px;
`;

const Caption = styled.span`
  display: block;
  padding-top: 6px;
  font-size: 14px;
  text-align: center;
`;


const StyledImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 3px;
  margin: auto;
`;

export default BlogImage
