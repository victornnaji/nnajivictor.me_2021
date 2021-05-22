import { theme } from "@src/styles";
import styled from "styled-components";

export default styled.em`
    font-family: ${theme.fonts.Mono};
    font-size: 2rem;
    color: ${props => props.color || 'var(--em-color)'};
    font-weight: 600;
`