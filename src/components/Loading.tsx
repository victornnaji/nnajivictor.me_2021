import React from 'react'
import { useLoader } from '@src/_hooks';
import { LoadingContextInterface } from '@src/_hooks/hooks.types';
import styled from 'styled-components';
import Logo from '@src/assets/Logo';
import { media } from '@src/styles';
import { gsap } from "gsap";

const Loading : React.FC = () => {

    const [,setLoading] = useLoader() as LoadingContextInterface;

    React.useEffect(() => {
        setLoading(true);
        const mask = ".js-mask";
        const slices = gsap.utils.toArray(".js-mask__slice");
        const lines = gsap.utils.toArray(".js-mask-line");
        const logo = ".js-logo";

        const tl = gsap.timeline({
          onComplete: () => {
            setLoading(false);
          }
        })

        tl.set(mask, { autoAlpha: 1 })
          .fromTo(
            slices,
            {
              xPercent: 100,
            },
            {
              xPercent: 0,
              ease: "expo.inOut",
              duration: 2,
              stagger: 0.06,
            },
            -0.1
          )
          .add("loadingStart")
          .set([logo, lines[0]], { autoAlpha: 1 })
          .fromTo(
            logo,
            {
              yPercent: -100,
              rotation: 1,
            },
            {
              yPercent: 0,
              rotation: 0,
              autoAlpha: 1,
              ease: "expo.out",
              duration: 1,
            }
          )
          .fromTo(
            lines,
            {
              scaleX: 0,
            },
            {
              scaleX: 1,
              duration: 1,
              ease: "expo.inOut",
              stagger: 0.75,
            },
            "-=1"
          )
          .set(lines, {
            transformOrigin: "right",
          })
          .fromTo(
            '.js-mask-line__outer',
            {
              scaleX: 1,
            },
            {
              duration: 1,
              scaleX: 0,
              ease: "expo.inOut",
            }
          )
          .to(
            logo,
            {
              yPercent: 150,
              ease: "expo.in",
              duration: 1,
            },
            "-=0.4"
          )
          .fromTo(
            slices,
            {
              xPercent: 0,
            },
            {
              duration: 1.5,
              stagger: 0.095,
              xPercent: 100,
              ease: "expo.inOut",
            },
            "-=0.2"
          )
          .set(mask, {
            autoAlpha: 0,
          })
    }, []);
    return (
        <StyledLoading id="loading">
            <div className="mask js-mask">
                <div className="mask__slice js-mask__slice"></div>
                <div className="mask__slice js-mask__slice"></div>
                <div className="mask__slice js-mask__slice"></div>
                <div className="mask__inner">
                    <figure className="logo logo--mask">
                        <Logo />
                    </figure>
                    <div className="mask-line js-mask-line js-mask-line__outer">
                        <div className="mask-line__inner js-mask-line"></div>
                    </div>
                </div>
            </div>
        </StyledLoading>
    )
}

const StyledLoading = styled.div`
 .mask{
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  &__slice{
    flex: 1;
    background-color: var(--tertiary-color);
  }
  &__inner{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    .logo{
      display: block;
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-bottom: 2rem;

      .js-logo{
        width: 10rem;
        height: auto;
        margin: 0 auto;
        visibility: hidden;
        opacity: 0;
      }
    }
  }
  &-line{
    position: relative;
    transform-origin: left;
    width: 30rem;
    height: 2px;
    overflow: hidden;
    background-color: var(--tertiary-color);
    ${media.phablet`width: 20rem`}
    visibility: hidden;
    opacity: 0;
    
    &__inner{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--primary-color);
      transform-origin: left;
    }
  }
 }
`

export default Loading
