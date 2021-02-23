import { media, theme } from '@src/styles';
import React from 'react'
import styled from 'styled-components'
import { FeaturedProps } from './components.types'
import {gsap} from 'gsap';
import { SplitWord } from '@src/_utils/split-text';


interface HeadingProps {
    content: string
}
const Heading: React.FC<FeaturedProps> = ({content, children, className}) => {
    // React.useEffect(() => {
    //     const headings = gsap.utils.toArray('.header__container');
    //     headings.forEach((heading: any, i: number) => {          
    //       gsap.to(
    //         heading.querySelectorAll('.heading__inner'),
    //         {
    //           y: "1.5vh",
    //           scrollTrigger: {
    //             trigger: heading,
    //             scrub: true,
    //             start: "top bottom",
    //           },
    //           ease: "none"
    //         }
    //       );
    //     })
    //   },[]);

    const text = SplitWord(children as string, 'intro__line');

    return (
        <StyledHeading content={content} className={`header__container ${className}`}>
            <span className="heading__inner">{text}</span>
        </StyledHeading>
    )
}

const StyledHeading = styled.h3`
  margin: 10rem 0;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  font-size: 6rem;
  font-weight: 800;
  font-family: ${theme.fonts.Inter};
  ${media.tablet`font-size: 3rem;`};
  ${media.phone`margin: 6rem 0`};
  perspective: 300px;

  .heading__inner{
    display: block;
    overflow: hidden;
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 10rem;
    background-color: var(--primary-color);
    position: relative;
    top: -5px;
    margin-left: 20px;
    ${media.desktop`width: 30%`};
    ${media.phone`margin-left: 1rem;`};
  }
  &:before {
    content: "${(props: HeadingProps) => props.content}";
    position: absolute;
    opacity: 0.06;
    font-size: 15rem;
    font-weight: 800;
    font-family: inherit;
    top: -6.5rem;
    left: 0;
    width: 100%;
    text-transform: uppercase;
    overflow: hidden;
    ${media.tablet`font-size: 12rem;`}
    }
`

export default Heading
