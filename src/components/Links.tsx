import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {  useMenu } from '@src/_hooks';
import {  MenuContextInterface} from '@src/_hooks/hooks.types';

interface LinkInterface {
    children: React.ReactChild | any;
    to: string;
    className?: string;
    activeClassName?: string;
}



export const SwipeLinks : React.FC<LinkInterface> = ({children, to, className, activeClassName}) => {
    const [,setOpen] = useMenu() as MenuContextInterface;
    return (
        <AniLink cover onClick={() => setOpen(false)} duration={2.5} to={to} bg="var(--tertiary-color)" className={className} activeClassName={activeClassName}>
            {children}
        </AniLink>
    )
}


