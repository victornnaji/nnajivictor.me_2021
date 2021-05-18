import styled from "styled-components";

export const OrderedList = styled.ol`
    font-size: 1.6rem;
    margin-bottom: 32px;
    counter-reset: counts 0;
    list-style: outside none none !important;

    & li {
        counter-increment: counts 1;
        -moz-box-align: baseline;
        align-items: baseline;
    }
`;