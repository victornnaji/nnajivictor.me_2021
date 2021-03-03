import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import gsap from 'gsap'
import { useLoader } from '@src/_hooks';
import { LoadingContextInterface } from '@src/_hooks/hooks.types';

const CustomLink = ({page, children, className} : any) => {
  const [,setLoading] = useLoader() as LoadingContextInterface;
    function exitAnimation(exit : any){

      const mask = ".js-mask";
      const slices = gsap.utils.toArray(".js-mask__slice");
      
        const tl = gsap.timeline({
          onComplete: () => {
              setLoading(false);
            }
         })

      tl
        .set(mask, { autoAlpha: 1 })
        .fromTo(slices, {
          xPercent: 0
        }, {
          duration: 1.5,
          stagger: 0.095,
          xPercent: 100,
          ease: "expo.inOut"
        }, "-=0.2")
        .set(mask, {
          autoAlpha: 0
        })
    }

    return (
        <TransitionLink to={page} 
          exit={{
              trigger: ({exit} : any) => exitAnimation(exit),
          }}
          className={className}
        >
            {children}
        </TransitionLink>
    )
}

export default CustomLink
