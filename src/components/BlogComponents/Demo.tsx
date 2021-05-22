import React from 'react'
import styled from 'styled-components'
import { RenderWhenOnscreen } from './RenderWhenOnScreen'

const Demo: React.FC<{className: string}> = ({children, className}) => {
    return (
        <RenderWhenOnscreen className={className}>
            <StyledDemo>
                {children}
            </StyledDemo>
        </RenderWhenOnscreen>
    )
}

const StyledDemo = styled.aside`
    display: flex;
    place-items: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 5rem 0;
`;



export default Demo
