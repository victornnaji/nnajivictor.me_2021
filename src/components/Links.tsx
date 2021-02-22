import React from 'react';
import {  useMenu } from '@src/_hooks';
import {  MenuContextInterface} from '@src/_hooks/hooks.types';
import { Link } from 'gatsby';

interface LinkInterface {
    children: React.ReactChild | any;
    to: string;
    className?: string;
    activeClassName?: string;
}



export const SwipeLinks : React.FC<LinkInterface> = ({children, to, className, activeClassName}) => {
    const [,setOpen] = useMenu() as MenuContextInterface;
    return (
        <Link onClick={() => setOpen(false)} to={to} className={className} activeClassName={activeClassName}>
            {children}
        </Link>
    )
}


