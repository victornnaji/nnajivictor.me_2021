import { theme } from '@src/styles'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const BreadCrumbs:React.FC<{link: string}> = ({link, children}) => {
    return (
        <StyledBreadCrumb className="breadcrumb">
            <span className="arrow">&larr;</span>
            <Link to={link} className="link">{children}</Link>
        </StyledBreadCrumb>
    )
}

const StyledBreadCrumb = styled.div`
  &.breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: var(--link-color);

    .arrow {
      display: block;
      margin-right: 10px;
      font-size: 2rem;
    }
    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      font-family: ${theme.fonts.Mono};
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.5;
      text-transform: capitalize;
      letter-spacing: 0.1em;
    }
  }
`

export default BreadCrumbs
