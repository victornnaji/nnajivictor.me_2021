import ScrollDown from "@src/assets/ScrollDown"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

type PlaygroundProps = {
  node: {
    slug: string
    id: string
    frontmatter: {
      date: Date
      excerpt: string
      published: boolean
      title: string
    }
  }
}

const PlaygroundCard = ({ data }: { data: PlaygroundProps }) => {
  console.log(data.node)
  return (
    <StyledCard to={data.node.slug}>
      <h2 className="title">{data.node.frontmatter.title}</h2>
      <div className="subtitle">{data.node.frontmatter.excerpt}</div>
      <div className="explore-container">
        <Link className="explore link" to={data.node.slug}>
          explore
        </Link>
        <span>
          <ScrollDown />
        </span>
      </div>
    </StyledCard>
  )
}

const StyledCard = styled(Link)`
  background-color: var(--primary-dark);
  padding: 3rem;
  padding: 32px;
  border-radius: 8px;
  color: var(--bg);
  width: 100%;
  text-decoration: none;
  transition: all 0.2s;
  position: relative;
  
  &:hover {
    .title {
      color: var(--link-inverted);
    }
  }

  h2.title {
    font-size: 3rem;
    font-weight: 600;
  }

  .subtitle {
    font-size: 1.7rem;
    margin: 1rem 0;
    margin-bottom: 2rem;
    margin-top: 1.6rem;
    line-height: 2.6rem;
  }

  .explore {
    font-size: 1.7rem;
    color: inherit;
    text-decoration: none;
    font-weight: 600;
  }

  .explore-container{
    display: flex;
    align-items: center;

    span {
      width: 2rem;
      height: 2rem;
      display: inline-block;
      transform: rotate(-90deg);
      margin-left: 1rem;
    }
  }
`

export default PlaygroundCard
