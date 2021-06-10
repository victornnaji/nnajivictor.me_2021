import React from "react"
// import { socialMedia } from '@src/config';
import styled from "styled-components"
import { Icon } from "@src/assets/icons"
import { useStaticQuery, graphql } from "gatsby"
import { theme } from "@src/styles"

const Socials = () => {
  const data = useStaticQuery(graphql`
    {
      site: allSite {
        nodes {
          siteMetadata {
            socialMedia {
              name
              url
            }
          }
        }
      }
    }
  `)

  const socialMedia = data.site.nodes[0].siteMetadata.socialMedia

  return (
    <StyledSocial>
      <p>Follow on Social Media</p>
      <StyledList>
        {socialMedia &&
          socialMedia.map(
            ({ url, name }: { url: string; name: string }, i: number) => (
              <li key={i}>
                <StyledLink
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}
                  className="link"
                >
                  <Icon name={name} />
                </StyledLink>
              </li>
            )
          )}
      </StyledList>
    </StyledSocial>
  )
}

const StyledSocial = styled.div`
    margin-bottom: 4rem;
    font-size: 2rem;
    font-family: ${theme.fonts.Inter};
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    transition: ${theme.transition};
  }
  transition: ${theme.transition};
`

const StyledLink = styled.a`
  padding: 10px;
  color: var(--primary-color);
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export default Socials
