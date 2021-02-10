import React, {useEffect} from 'react'
import styled from 'styled-components';
import { gsap } from "gsap"
import { useLoader } from '@src/_hooks';
import { LoadingContextInterface } from '@src/_hooks/hooks.types';

const PageLoading = () => {
    const [,setLoading] = useLoader() as LoadingContextInterface;
    
    useEffect(() => {
        setLoading(true);
        const mask = ".js-mask";
        const slices = gsap.utils.toArray(".js-mask__slice");
        gsap.set(".overall", {
          css: {backgroundColor: "#93b4c2"},
          duration: 0.2,
        })

        const tl = gsap.timeline({
            onComplete: () => {
                setLoading(false);
              }
           })

      tl
       .set(mask, {autoAlpha: 1})
       .fromTo(slices, {
        xPercent: 0
    },{
      duration: 1.5,
      stagger: 0.095,
      xPercent: 100,
      ease: "expo.inOut"
    }, "-=0.2")
    .set(mask, {
      autoAlpha: 0
    })
    }, [setLoading])
    return (
        <StyledPageLoader className="overall">
            <div className="mask js-mask">
                <div className="mask__slice js-mask__slice"></div>
                <div className="mask__slice js-mask__slice"></div>
                <div className="mask__slice js-mask__slice"></div>
            </div>
        </StyledPageLoader>
    )
}

const StyledPageLoader = styled.div`
 .mask {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    visibility: hidden;
    opacity: 0;
  }

  .mask__slice {
    -webkit-box-flex: 1;
    flex: 1;
    background-color: var(--tertiary-color);
  }
`;

export default PageLoading;