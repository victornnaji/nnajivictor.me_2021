import React from 'react'
import styled from 'styled-components'

const ReactComponentHolder: React.FC = ({children}) => {
    return (
        <StyledReactComponent>
            {children}
        </StyledReactComponent>
    )
}

const StyledReactComponent = styled.div`
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    width: 100%;
    padding: 0 auto;
    margin: 2rem 0;
    flex-direction: column;
    align-items: center;
`;

export default ReactComponentHolder
