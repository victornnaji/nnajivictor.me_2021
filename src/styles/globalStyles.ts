import {
    createGlobalStyle
  } from "styled-components"
  import FontFaces from "./fonts"
  import theme from "./theme"
  
  const GlobalStyles = createGlobalStyle`
    ${FontFaces};
    body{
      background-color: var(--bg);
      color: var(--primary-color);
      margin: 0;
      width: 100%;
      min-height: 100%;
      font-family: ${theme.fonts.Lato};
      overflow-x: hidden;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      line-height: 1.3;
      font-kerning: normal;
      -moz-font-feature-settings: "kern", "liga", "clig", "calt";
      -ms-font-feature-settings: "kern", "liga", "clig", "calt";
      -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
      font-feature-settings: "kern", "liga", "clig", "calt";
    }
    #stoic{
      overflow-y: hidden;
    }
  
  `
  
export default GlobalStyles