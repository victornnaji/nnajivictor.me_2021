import React from 'react';
import { GlobalStyles } from '@src/styles';
import { SkipToContent } from '@src/styles/components';
import { useLoader, useMediaQuery} from '@src/_hooks';
import { LoadingContextInterface} from '@src/_hooks/hooks.types';
import Loading from './Loading';
import Banner from './Banner';
import Header from './Header';
import MemoMenu from './Menu';
import {gsap} from 'gsap';

interface LayoutProps {
    children? : any,
    location?: Location,
}

const Layout = ({ children }: LayoutProps)  => {
    const [isLoading] = useLoader() as LoadingContextInterface;
    const isMobile = useMediaQuery();
    
    React.useEffect(() => {
      if (isMobile) {
          gsap.to(
            ['.heading__inner', '.name-container',
              '.intro__occupation', '.slide','.intro__name', '.name-container', '.intro__title .intro__occupation'],
            { clearProps: 'all' }
          );
      }
    }, [isMobile])
    
    return (
        <>
            <GlobalStyles />
            <SkipToContent href="#content">Skip to Content</SkipToContent>
            {isLoading ? (
                <Loading />
            ) :  (
                <div className="layout__inner">
                    <Banner />
                    <Header />
                    <MemoMenu />
                    {children}
                </div>
            )}
        </>
    )
}

export default Layout;