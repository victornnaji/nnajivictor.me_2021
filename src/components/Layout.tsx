import React from 'react';
import { GlobalStyles } from '@src/styles';
import { SkipToContent } from '@src/styles/components';
import { useLoader, useMenu} from '@src/_hooks';
import { LoadingContextInterface, MenuContextInterface } from '@src/_hooks/hooks.types';
import Loading from './Loading';
import Banner from './Banner';
import Header from './Header';
import Loadable from "@loadable/component";
import MemoMenu from './Menu';

const ASScrollContainer = Loadable(() => import('./ASScrollContainer'));

interface LayoutProps {
    children? : any,
    location: Location,
}

const Layout = ({ location, children }: LayoutProps)  => {
    const isHome = location.pathname === '/';
    const isBlog = /(\/blog)\/?(.*)?/g.test(location.pathname);
    const [isLoading] = useLoader() as LoadingContextInterface;
    const [open] = useMenu() as MenuContextInterface;
    
    return (
        <>
            <GlobalStyles />
            <SkipToContent href="#content">Skip to Content</SkipToContent>
            {isLoading ? (
                <Loading />
            ) :  (
                <>
                {isBlog ? (
                    <div className="layout-container">
                        <Banner />
                        <Header />
                        <MemoMenu />
                        {children}
                    </div>
                ) : (
                    <>
                    <ASScrollContainer isOpen={open}>
                        <Banner />
                        <Header />
                        <MemoMenu />
                        {children}
                    </ASScrollContainer>
                    </>
                )}
                </>
            )}
        </>
    )
}

export default Layout;