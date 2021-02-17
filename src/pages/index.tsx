import React from 'react';
import { graphql  } from 'gatsby';
import Hero from '@src/sections/Hero';
import { SiteSiteMetadata } from '__generated__/graphql-types';
import Featured from '@src/sections/Featured';

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