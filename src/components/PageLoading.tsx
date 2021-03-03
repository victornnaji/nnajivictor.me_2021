import React, {useEffect} from 'react'
import styled from 'styled-components';


const PageLoading: React.FC = ({children}) => {
    
    return (
      <StyledPageLoader className="overall">
        <div className="mask js-mask">
            <div className="mask__slice js-mask__slice"></div>
            <div className="mask__slice js-mask__slice"></div>
            <div className="mask__slice js-mask__slice"></div>
        </div>
      </StyledPageLoader>
    )
}

const StyledPageLoader = styled.div`
 .mask {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    visibility: hidden;
    opacity: 0;
  }

  .mask__slice {
    -webkit-box-flex: 1;
    flex: 1;
    background-color: var(--tertiary-color);
  }
`;

export default PageLoading;