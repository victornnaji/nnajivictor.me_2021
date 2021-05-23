import React from 'react'
import styled from 'styled-components';

const Banner = ({show}: {show: boolean}) => {

    if(!show){
        return <></>;
    }
    return (
        <StyledBanner aria-label="banner">
            ✉️ We noticed you haven’t been reading some of our newsletters & have paused sending you those for now. You can resubscribe at any time in your <a className="link" href="http://www.">account settings</a>.
        </StyledBanner>
    )
}

const StyledBanner = styled.aside`
    height: 6rem;
    /* background-color: red; */
    width: 100%;
    grid-column: 1/-1;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--primary-color);
    font-size: 1.6rem;
    

    a{
        display: inline-block;
        margin-left: 1rem;
    }
`;
export default Banner
