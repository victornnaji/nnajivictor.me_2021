import Heading from '@src/components/Heading';
import { media } from '@src/styles';
import React from 'react'
import styled from 'styled-components'

const Projects = () => {
    return (
        <StyledProjects>
            <Heading content={'Projects'}>Notable Projects</Heading>
            Projects
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    margin-top: 20rem;
    ${media.phablet`margin-top: 12rem`}
`;

export default Projects
