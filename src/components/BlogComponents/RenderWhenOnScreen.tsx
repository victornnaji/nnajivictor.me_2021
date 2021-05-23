import React, { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(ref: React.MutableRefObject<Element | null>, options: IntersectionObserverInit = {}, forward: boolean = true) {
    const [element, setElement] = useState<Element | null>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observer = useRef<null | IntersectionObserver>(null);

    const cleanOb = () => {
        if (observer.current) {
            observer.current.disconnect()
        }
    }

    useEffect(() => {
        setElement(ref.current);
    }, [ref]);

    useEffect(() => {
        if (!element) return;
        cleanOb()
        const ob = observer.current = new IntersectionObserver(([entry]) => {
            const isElementIntersecting = entry.isIntersecting;
            if (!forward) {
                setIsIntersecting(isElementIntersecting)
            } else if (forward && !isIntersecting && isElementIntersecting) {
                setIsIntersecting(isElementIntersecting);
                cleanOb()
            };
        }, { ...options })
        ob.observe(element);
        return () => {
            cleanOb()
        }
    }, [element, options ])


    return isIntersecting;
}

interface Props{
    tag?: React.ComponentType | keyof JSX.IntrinsicElements
    children: React.ReactNode
    style?: React.CSSProperties
    className?: string
    root?: Element | Document | null
    threshold?: number | number[]
    rootMargin?: string
    forward?: boolean
}

export function RenderWhenOnscreen(props: Props){
    const { tag = 'div', children, style, className } = props;
    const Tag: any = tag;
    const ref = useRef<Element>(null)
    const isIntersecting = useIntersectionObserver(ref, {
        root: props.root ?? null,
        threshold: props.threshold ?? 0,
        rootMargin: props.rootMargin
    }, props.forward);

    return (
        <Tag
            ref={ref}
            style={style}
            className={className}
            children={isIntersecting ? children : null}
        />
    )
}