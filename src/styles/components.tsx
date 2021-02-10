import styled from "styled-components";
import theme from "./theme";

export const SkipToContent = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:focus,
  &:active {
    outline: 0;
    color: var(--primary-color);
    background-color: var(--bg);
    border-radius: .3rem;
    padding: 18px 23px;
    font-size: 1.4rem;
    font-family: ${theme.fonts.Lato};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`;