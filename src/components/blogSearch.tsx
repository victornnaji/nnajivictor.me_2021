import { media, theme } from "@src/styles"
import React from "react"
import styled from "styled-components"
import {InstantSearch} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { CustomSearchBox } from "./search/SearchBox";
import Result from "./search/SearchResult";
import { PoweredBy } from 'react-instantsearch-dom';
import { Helmet } from "react-helmet";


const BlogSearch = () => {
  const [searchClick, setSearchClick] = React.useState(false)
  function handleSearchClick() {
    setSearchClick(!searchClick)
  }
  function handleKeyUp(e: any) {
    if (e.keyCode === 27) {
      setSearchClick(!searchClick)
    }
  }

  document.addEventListener('keyup', (event) => {
    if (event.isComposing || event.keyCode === 27) {
        setSearchClick(false)
    }
  })

  const searchClient = algoliasearch(
    `${process.env.GATSBY_ALGOLIA_APP_ID}`,
    `${process.env.GATSBY_ALGOLIA_SEARCH_KEY}`
  );
  
  return (
    <StyledSearch onKeyUp={handleKeyUp}>
      <Helmet>
       <body id={searchClick ? "stoic" : ""} />
      </Helmet>
      <div className="search-wrap">
        <button
          id="btn-search"
          className="btn btn--search"
          onClick={handleSearchClick}
        >
          <svg className="icon icon--search" viewBox="0 0 24 24">
            <title>Search Blog</title>
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
      </div>

      <div className={`search-component search ${searchClick ? "search--open" : ""}`}>
        <button
          id="btn-search-close"
          className="btn btn--search-close"
          aria-label="Close search form"
          onClick={handleSearchClick}
        >
          <svg className="icon icon--cross" viewBox="0 0 24 24">
            <title>Close Search</title>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
        <InstantSearch
          indexName="Posts"
          searchClient={searchClient}
        >
          <div className="poweredby"><PoweredBy /></div>
          <CustomSearchBox searchClick={searchClick}/>
          <Result />
        </InstantSearch>
      </div>
    </StyledSearch>
  )
}

const StyledSearch = styled.div`
  #btn-search,
  #btn-search-close {
    background: transparent;
    outline: none;
    text-decoration: none;
    font-size: 1.5em;
    color: var(--primary-color);
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;

    svg {
      width: 3rem;
      height: 3rem;
      fill: currentColor;
    }
  }

  #btn-search-close {
    text-align: right;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem;
    color: var(--bg);

    svg {
      width: 4rem;
      height: 4rem;
    }
  }

  .search-component {
    background-color: var(--primary-color);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    z-index: 30;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    .poweredby{
      position: absolute;
      top: 3rem;
      left: 3.5rem;
      width: 6rem;
      .ais-PoweredBy-text{
        color: var(--bg);
        display: block;
        text-align: left;
      }

      svg{
        width: 10rem;
        ${media.phablet`width: 8rem`}
        path{
          &:nth-child(2), &:nth-child(4){
            fill: var(--bg)
          }
          &:nth-child(3){
            fill: var(--primary-color)
          }
        }
      }
      
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: calc(100% + 15px);
      height: calc(100% + 15px);
      pointer-events: none;
      border: 1.5em solid var(--tertiary-color-moon);
    }
    &::before {
      top: 0;
      left: 0;
      border-right-width: 0;
      border-bottom-width: 0;
    }

    &::after {
      right: 0;
      bottom: 0;
      border-top-width: 0;
      border-left-width: 0;
    }

    .btn--search-close {
      font-size: 2em;
      position: absolute;
      top: 1.25em;
      right: 1.25em;
      display: none;
      display: block;
    }
    .search__form {
      margin: 10rem 0 4rem 0;
      ${media.tablet`margin: 12rem 0 2rem 0;`};
    }

    .search__input {
      font-family: inherit;
      font-size: 3vw;
      line-height: 1;
      display: inline-block;
      box-sizing: border-box;
      width: 90%;
      padding: 0.1em 0;
      color: var(--bg);
      border: none;
      border-bottom: 1px solid var(--bg);
      background-color: transparent;
      pointer-events: auto;
      ${media.phablet`font-size: 5.5vw; width: 75%;`};
      font-family: ${theme.fonts.Inter};
      &::placeholder {
        color: var(--tertiary-color-moon) !important;
        opacity: 0.5 !important;
      }

      &:focus {
        outline: none;
      }
    }

    .search__input::-webkit-input-placeholder {
      /* WebKit, Blink, Edge */
      opacity: 0.3;
      color: #060919;
    }

    .search__input::-moz-placeholder {
      opacity: 0.3;
      /* Mozilla Firefox 19+ */
      color: #060919;
    }

    .search__input:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      opacity: 0.3;
      color: #060919;
    }

    .search__input::-webkit-search-cancel-button,
    .search__input::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    .search__input::-ms-clear {
      display: none;
    }
    .search__info {
      font-size: 1.3rem;
      font-weight: bold;
      display: block;
      width: 75%;
      margin: 0 auto;
      padding: 0.85em 0;
      text-align: right;
      color: var(--bg);
      font-family: ${theme.fonts.Mono};
      ${media.phablet`font-size: 1.2rem;`}
    }

    .search__related {
      width: 100%;
      color: var(--bg);
    }


    /* Transitions */
    &.search {
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.5s;
    }
    &.search--open {
      pointer-events: auto;
      opacity: 1;
    }
    &.search::before,
    &.search::after {
      transition: transform 0.5s;
    }

    &.search::before {
      transform: translate3d(-15px, -15px, 0);
    }

    &.search::after {
      transform: translate3d(15px, 15px, 0);
    }

    &.search--open::before,
    &.search--open::after {
      transform: translate3d(0, 0, 0);
    }
    .btn--search-close, .poweredby {
        opacity: 0;
        transform: scale3d(0.8, 0.8, 1);
        transition: opacity 0.5s, transform 0.5s;
    }

    &.search--open .btn--search-close, &.search--open .poweredby {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }

    &.search--open .search__suggestion {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    .search__form {
        opacity: 0;
        transform: scale3d(0.8, 0.8, 1);
        transition: opacity 0.3s, transform 0.5s;
    }
    &.search--open .search__form {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }

  }
`

export default BlogSearch
