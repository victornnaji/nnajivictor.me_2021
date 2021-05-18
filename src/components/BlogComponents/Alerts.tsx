import React from 'react'
import styled, { css } from 'styled-components'
import { MDXProvider } from '@mdx-js/react';

const component = {
    pre: (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
}

interface Props {
    type: string
    [index:string]:any
}

const Icons = {
    info: `<svg fill="none"
    height="32"
    width="32"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12" y2="8"></line>
  </svg>`,
  alert: `
    <svg fill="none" height="32" width="32" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line>
    </svg>
  `,
  success: `
    <svg fill="none" height="32" width="32" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>`
} as any

const Alerts:React.FC<Props> = ({children, type}) => {
    return (
        <StyledAlert type={type}>
            <div className="alert-icon" dangerouslySetInnerHTML={{__html: Icons[`${type}`]}}/>
            <MDXProvider components={component}>
                {children}
            </MDXProvider>
        </StyledAlert>
    )
}

const StyledAlert = styled.aside<Props>`
    padding: 3rem;
    margin: 4rem 0;
    border-radius: 6px 6px 6px 3px;
    border-left: 3px solid;
    position: relative;
    font-size: 1.6rem;

    ${({type}) => type === "info" && css`
        background-color: var(--alert-notice);
        border-color: hsl(230deg, 100%, 67%);
        .alert-icon{
            color: #5773ff;
            border-radius: 50%;
        }
    `};
    
    ${({type}) => type === "alert" && css`
        background-color: var(--alert-alert);
        border-color: hsl(30deg, 100%, 50%);
        .alert-icon{
            color: #ff9d00;
            border-radius: 50%;
        }
    `};
    
    ${({type}) => type === "success" && css`
        background-color: var(--alert-success);
        border-color: rgb(0, 204, 136);
        .alert-icon{
            color: rgb(0, 204, 136);
            border-radius: 50%;
        }
    `};

    .alert-icon{
        display: inline-block;
        padding: 1rem;
        border-radius: 3rem;
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(-50%, -50%);
        background: var(--bg);
        
        svg{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    
    `;

const StyledWarning = styled(StyledAlert)`
    background-color: var(--alert-notice);
    border-color: #5773ff;
    `;
const StyledInfo = styled(StyledAlert)`
    background-color: var(--alert-notice);
    border-color: hsl(230deg, 100%, 67%);
    .alert-info{
        color: #5773ff;
    }
    `;
const StyledDanger = styled(StyledAlert)`
    background-color: var(--alert-notice);
    border-color: #5773ff;
    `;


export default Alerts