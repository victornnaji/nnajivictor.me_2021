import { theme } from "@src/styles";
import styled from "styled-components";

export default styled.em`
    font-family: ${theme.fonts.Roslindale};
    font-size: 1.8rem;
    color: ${props => props.color || '#FF39A8'};
    font-style: bold;
`