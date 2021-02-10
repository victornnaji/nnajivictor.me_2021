import React from 'react'
import ASScroll from '@ashthornton/asscroll';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';

interface ASScrollProps {
    children? : any,
    isBlog: Boolean,
}

const ASScrollContainer : React.FC<ASScrollProps> = ({children, isBlog}) => {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const asscroll = new ASScroll({
            customScrollbar: true
        });
            
           ScrollTrigger.defaults({
               scroller: asscroll.Scroll.scrollContainer
           })
           
           ScrollTrigger.scrollerProxy(asscroll.Scroll.scrollContainer, {
               scrollTop(value) {
                   return arguments.length ? asscroll.scrollTo(value) : -asscroll.smoothScrollPos;
               }
           });
           
           asscroll.on("raf", ScrollTrigger.update);
           ScrollTrigger.addEventListener("refresh", () => asscroll.onResize());
       
           asscroll.enable();
       
    }, [])
    return (
        <div className={isBlog ? "layout-container" : 'asscroll-container'}>
            <div className="layout__inner">
                {children}
            </div>
        </div>
    )
}


export default ASScrollContainer
