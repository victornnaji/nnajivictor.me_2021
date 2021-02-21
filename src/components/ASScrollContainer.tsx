import React from 'react'
import ASScroll from '@ashthornton/asscroll';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';
import { useMediaQuery } from '@src/_hooks';

interface ASScrollProps {
    children? : any,
    isOpen: Boolean,
}

const ASScrollContainer : React.FC<ASScrollProps> = ({children, isOpen}) => {

  const asscroll = React.useRef<any>(null);

  const isMobile = useMediaQuery();
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    asscroll.current = new ASScroll({
      customScrollbar: true,
      // disableRaf: true
    });

    asscroll.current.scrollTo(0);

    ScrollTrigger.defaults({
      scroller: asscroll.current.Scroll.scrollContainer
    })

    ScrollTrigger.scrollerProxy(asscroll.current.Scroll.scrollContainer, {
      scrollTop(value) {
        return arguments.length ? asscroll.current.scrollTo(value) : -asscroll.current.smoothScrollPos;
      }
    });

    asscroll.current.on("raf", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", () => asscroll.current.onResize());
    // gsap.ticker.add(asscroll.current.onRaf)

    if (isMobile) {
      gsap.to(
        ['.heading__inner', '.name-container',
          '.intro__occupation', '.slide', '.intro__name'],
        { clearProps: 'all' }
      );
    }
    else {
      //Section heading  
      const headings = gsap.utils.toArray('.header__container');
      headings.forEach((heading: any, i: number) => {
        gsap.to(
          heading.querySelectorAll('.heading__inner'),
          {
            y: "1.5vh",
            scrollTrigger: {
              trigger: heading,
              scrub: true,
              start: "top bottom",
            },
            ease: "none"
          }
        );
      })


      //intro header
      //intro
      const stl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro",
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
          markers: false
        }
      });

      stl
        .to(".name-container", {
          x: 400,
          ease: "power4.in",
          duration: 3
        })
        .to(
          ".intro__occupation",
          {
            y: 100,
            ease: "power4.in",
            duration: 3
          },
          0
        );

      // sliders
      const slides = gsap.utils.toArray('.slide');
      slides.forEach((slide: any, i) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: "10% 50%",
            scrub: 1,
            markers: false // position of trigger meets the scroller position
          }
        });

        tl.from(slide.querySelectorAll(".col__content-title"), {
          ease: "power4",
          y: "+=5vh",
          duration: 2.5
        })
          .from(
            slide.querySelectorAll(".line__inner"),
            {
              y: 200,
              duration: 2,
              ease: "power4",
              stagger: 0.1
            },
            0
          )
          .from(
            slide.querySelectorAll(".col__content-txt"),
            {
              x: 100,
              y: 50,
              opacity: 0,
              duration: 2,
              ease: "power4"
            },
            0.4
          )
          .from(
            slide.querySelectorAll(".slide-link"),
            {
              x: -100,
              y: 100,
              opacity: 0,
              duration: 2,
              ease: "power4"
            },
            0.3
          )
          .from(
            slide.querySelectorAll(".slide__scroll-link"),
            {
              y: 200,
              duration: 3,
              ease: "power4"
            },
            0.4
          )
          .to(
            slide.querySelectorAll(".slide__scroll-line"),
            {
              scaleY: 0.6,
              transformOrigin: "bottom left",
              duration: 2.5,
              ease: "elastic(1,0.5)"
            },
            1.4
          );
      });
      slides.forEach((slide: any, i) => {
        let imageWrappers = slide.querySelectorAll(".col__image-wrap");

        gsap.fromTo(
          imageWrappers,
          {
            y: "-40vh"
          },
          {
            y: "30vh",
            scrollTrigger: {
              trigger: slide,
              scrub: true,
              start: "top bottom",
            },
            ease: "none"
          }
        );
      });
    }

    }, [isMobile]);

    React.useEffect(() => {
      isOpen ?   asscroll.current.disable() :  asscroll.current.enable();
    }, [isOpen])

    return (
        <div className='asscroll-container'>
            <div className="layout__inner">
                {children}
            </div>
        </div>
    )
}


export default ASScrollContainer
