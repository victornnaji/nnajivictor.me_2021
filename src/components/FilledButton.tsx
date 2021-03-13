import React from 'react'
import styled from 'styled-components';

const FilledButton: React.FC = ({children}) => {

    return (
        <StyledFilledButton>
            {React.Children.map((children), (child: any) => {
                const newChild = React.cloneElement(child, {className: `${child.props.className} filled_link`});
                return newChild;
            })}
        </StyledFilledButton>
    )
}

interface FilledButtonTextProps {
    text: string,
}

export const FilledButtonText : React.FC<FilledButtonTextProps> = ({text}) => {
    return (
        <>
            <span className="filled-btn-text">{text}</span>
            <span className="filled-btn-overlay"></span>
        </>
    )
}

const StyledFilledButton = styled.div`
.filled_link {
    border-style: solid;
    border-width: 2px;
    border-color: var(--primary-color);
    background-color: transparent;
    transition: color 200ms ease, background-color 200ms ease;
    color: var(--primary-color);
    font-weight: 400;
    letter-spacing: 0.4px;
    text-decoration: none;
    text-transform: capitalize;
    max-width: 100%;
    position: relative;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;

    .filled-btn-overlay {
      background-color: var(--primary-color);
      position: absolute;
      left: 0px;
      top: 0px;
      bottom: 0px;
      z-index: 0;
      width: 0;
      height: 100%;
      will-change: width, height, color;
      transition: all 0.3s;

      &.right {
        left: auto;
        right: 0px;
        transform-origin: right;
      }
    }

    .filled-btn-text {
      font-size: 1.5rem;
      font-weight: 700;
    }

    &:hover {
      .filled-btn-overlay {
        width: 100%;
      }

      .filled-btn-text {
        color: var(--bg);
        z-index: 1;
      }
    }
  }
`;

export default FilledButton
