import Icon404 from "@src/components/404Icon"
import Seo from "@src/components/Seo"
import { media, theme } from "@src/styles"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const NotFoundPage = () => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <Seo tags={["404", "Not Found"]} title="404: Not found" url={"*"} />
      {isMounted && (
        <StyledMainContainer className="fillHeight">
          <StyledTitle>
            <Icon404 />
          </StyledTitle>
          <StyledSubtitle>
            You just hit a route that doesn&#39;t exist 😥.
          </StyledSubtitle>
          <StyledHomeButton to="/">Go Home</StyledHomeButton>
        </StyledMainContainer>
      )}
    </>
  )
}

const StyledMainContainer = styled.main`
  padding-top: 20rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const StyledTitle = styled.h1`
  color: var(--secondary-color);
  font-family: ${theme.fonts.Mono};
  width: 50%;
  line-height: 1;
  ${media.desktop`font-size: 200px;`}
  ${media.phablet`font-size: 120px;`};
`
const StyledSubtitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  ${media.desktop`font-size: 50px;`};
  ${media.phablet`font-size: 24px;`};
`
const StyledHomeButton = styled(Link)`
  color: var(--link-color);
  background-color: transparent;
  border: 1px solid var(--link-color);
  border-radius: 3rem;
  padding: 1.25rem 1.75rem;
  font-size: 1.4rem;
  font-family: ${theme.fonts.Mono};
  line-height: 1;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  &:hover,
  &:focus,
  &:active {
    background-color: var(--link-color);
    color: var(--bg) !important;
  }
  &:after {
    display: none !important;
  }
  margin-top: 40px;
`

export default NotFoundPage
