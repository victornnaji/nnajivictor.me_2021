import styled from "styled-components";

export const OrderedList = styled.ol`
  list-style: decimal;
  counter-reset: number;
  margin-left: 4.5rem;
  margin-bottom: 3rem;

  & li{
      margin-bottom: 1.5rem;
      &::marker{
          color: var(--link-color);
          font-weight: 600;
      }
  }
`

export const UnorderedList = styled.ul`
    list-style: none;
    margin-left: 2rem;
    margin-bottom: 3rem;

    & li{
        position: relative;
        margin-bottom: 1.5rem;
        padding-left: 2.5rem;
        &:before {
            content: "+";
            position: absolute;
            left: 0;
            color: var(--link-color);
            font-size: 2.5rem;
            line-height: 1.2;
        }
    }
`;