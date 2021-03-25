import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import gsap from 'gsap'
import { useLoader, useMenu } from '@src/_hooks';
import { LoadingContextInterface, MenuContextInterface } from '@src/_hooks/hooks.types';

interface Props {
  page: string,
  className?: string,
  activeClassName?: string,
}
const CustomLink : React.FC<Props> = ({page, children, className, activeClassName}) => {
  const [,setLoading] = useLoader() as LoadingContextInterface;
  const [,setOpen] = useMenu() as MenuContextInterface;
    function exitAnimation(){
      setOpen(false);
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
              trigger: () => exitAnimation(),
          }}
          entry = {
            {
              delay: 1
            }
          }
          className={className}
          activeClassName={activeClassName}
        >
            {children}
        </TransitionLink>
    )
}

export default CustomLink
