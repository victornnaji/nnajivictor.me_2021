import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { media, theme } from '@src/styles'


const Embed = () => {

    const data = useStaticQuery(graphql`
    {
      inspiration: allWpPage(filter: {title: {regex: "/About/"}}) {
        edges {
          node {
            AboutPage_Graphql {
              spotifyEmbed
            }
          }
        }
      }
    }
  `)

  const spotify = data.inspiration.edges[0].node.AboutPage_Graphql.spotifyEmbed
    return (
        <SpotifyEmbed>
            <div className="title">Songs I built this portfolio with...</div>
            <div className="content" dangerouslySetInnerHTML={{__html: spotify}}/>
        </SpotifyEmbed>
    )
}

const SpotifyEmbed = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-bottom: 10rem;
    ${media.phablet`width: 100%`};

    .title{
        font-family: ${theme.fonts.Inter};
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    .content{
        iframe{
            width: 100%;
        }
    }
`;

export default Embed
