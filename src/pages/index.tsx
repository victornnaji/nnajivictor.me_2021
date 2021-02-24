import React from 'react';
import { graphql  } from 'gatsby';
import Hero from '@src/sections/Hero';
import { SiteSiteMetadata } from '__generated__/graphql-types';
import Loadable from "@loadable/component";

const Featured = Loadable(() => import('@src/sections/Featured'));
const Projects = Loadable(() => import('@src/sections/Projects'));
const Explore = Loadable(() => import('@src/sections/Explore'));
const Contact = Loadable(() => import('@src/sections/Contact'));

interface IndexPageQuery {
    data : {
        hero : {
            edges : [
                {
                    node : {
                        siteMetadata: SiteSiteMetadata
                    }
                }
            ]
        }
    },
}

const IndexPage : React.FC<IndexPageQuery> = ({data}) => {
    return (
        <>
         <Hero data={data.hero}/>
         <Featured />
         <Projects />
         <Explore />
         <Contact />
        </>
    )
}

export const pageQuery = graphql`
    query IndexPageQueryQuery{
        hero : allSite {
            edges{
                node{
                    siteMetadata{
                        job
                        name
                    }
                }
            }
        }
    }
`





export default IndexPage;