import ArticleIcon from '@src/assets/Article';
import { media } from '@src/styles';
import { Link, PageProps } from 'gatsby';
import React from 'react'
import { connectHits } from 'react-instantsearch-dom';
import { connectStateResults } from 'react-instantsearch-dom';
import styled from 'styled-components';
import SearchSuggestions from './SearchSuggestions';

const SearchResult = ({ hits }: { hits : any}) => {
    return (
        <div className="suggested-posts-holder">
           {hits.map((hit: any) => (
                <Link to={`/blog/${hit.slug}`} key={hit.objectID} className="link suggested-posts">
                    <div className="title" dangerouslySetInnerHTML={{__html: hit._highlightResult.title.value}}/>
                    <div className="excerpt"  dangerouslySetInnerHTML={{__html: hit.excerpt}}/>
                </Link>
            ))} 
        </div>
    )
}
const CustomHits = connectHits(SearchResult);

const SearchPlaygroundResult = ({ hits }: any) => {
    return (
        <div className="suggested-posts-holder">
           {hits.map((hit: any) => (
                <Link to={`/playground/${hit.slug}`} key={hit.objectID} className="link suggested-posts">
                    <div className="title" dangerouslySetInnerHTML={{__html: hit._highlightResult.title.value}}/>
                    <div className="excerpt"  dangerouslySetInnerHTML={{__html: hit.excerpt}}/>
                </Link>
            ))} 
        </div>
    )
}
const CustomPlagroundHits = connectHits(SearchPlaygroundResult);

const StateResults = connectStateResults(({ searchState, children, searchResults }) =>{

        if(searchResults && searchResults.nbHits === 0){
            return (
                <div style={{color: 'red'}}>No post found</div>
            )
        }else if(searchState && searchState.query) {
            return (
                <div>{children}</div>
            )
        }
        else {
            return (
                <div className="search__related">
                    <div className="search__suggestion">
                        {/* <h3><ArticleIcon />  <span>May I Suggest?</span></h3>
                        <SearchSuggestions /> */}
                    </div>
                </div>
            )
        }
    }
);
  
const Result = ({indexName}: {indexName: string}) => {
    return (
        <StyledResult>
            <StateResults>
                {indexName === "Posts" ? (
                    <CustomHits />
                ) : (
                    <CustomPlagroundHits />
                )}
            </StateResults>
        </StyledResult>
    )
}

const StyledResult = styled.div`
    width: 75%;
    ${media.tablet`overflow: scroll;`}
    .search__suggestion {
      width: 100%;
      text-align: left;
      opacity: 0;
      transform: translate3d(0, -30px, 0);
      transition: opacity 0.5s, transform 0.5s;
      ${media.tablet`margin-top: 4rem;`}

      svg{
        height: 3rem;
        width: 3rem;
      }

      h3 {
        font-size: 1.6rem;
        font-weight: 700;
        margin: 0;
        display: flex;
        align-items: center;

        span{
            padding-left: .5rem;
            transform: translateY(.25rem);
            display: inline-block;
        }
      }

      p {
        font-size: 1.15em;
        line-height: 1.4;
        margin: 0.75em 0 0 0;
      }
    }

    .suggested-posts-holder{
        height: 50vh;
        overflow-y: scroll;
        .suggested-posts{
           list-style: none;
           color: var(--bg);
           text-decoration: none;
           width: 70%;
           text-align: left;
           margin: 0 auto;
           display: block;
           margin-bottom: 2rem;
           ${media.phablet`width: 100%`}

           .title{
               font-size: 1.8rem;
               font-weight: 700;
               ais-highlight-0000000000{
                   color: var(--link-inverted);
               }
           }

           .excerpt{
               font-size: 1.2rem;
           }
        }
    }

`;

export default Result

