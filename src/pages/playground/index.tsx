import ArticleIcon from "@src/assets/Article"
import BlogSearch from "@src/components/blogSearch"
import { media, theme } from "@src/styles"
import React from "react"
import styled from "styled-components"
import { DoubleLine } from "../blog"
import { graphql } from "gatsby"
import FilledButton, { FilledButtonText } from "@src/components/FilledButton"
import PlaygroundCard from "@src/components/PlaygroundCard"

interface Props {
  data: {
    playground: {
      edges: PlaygroundProps[]
    }
  }
}

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
export const query = graphql`
  {
    playground: allMdx {
      edges {
        node {
          slug
          frontmatter {
            date(locale: "dd/mm/yyyy")
            excerpt
            title
          }
          id
        }
      }
    }
  }
`

const index = ({ data }: Props) => {
  const datas = data.playground.edges

  const [list, setList] = React.useState([...datas.slice(0, 10)])

  const [loadMore, setLoadMore] = React.useState(false)

  const [hasMore, setHasMore] = React.useState(datas.length > 10)

  const handleLoadMore = () => {
    setLoadMore(true)
  }

  React.useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < datas.length
      const nextResults = isMore
        ? datas.slice(currentLength, currentLength + 8)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore])

  React.useEffect(() => {
    const isMore = list.length < datas.length
    setHasMore(isMore)
  }, [list])

  return (
    <StyledPlayground>
      <DoubleLine />
      <div className="blog-title-and-search">
        <h1 className="blog-title">
          <ArticleIcon /> <span>Tutorials</span>
        </h1>
        <BlogSearch indexName="Playground" />
      </div>
      <p className="blog-description">
        A collection of all my my experiments and tutorials
      </p>
      <StyledPlaygroundContent>
        {list.map((data: PlaygroundProps) => {
          return <PlaygroundCard data={data} key={data.node.id}/>
        })}
      </StyledPlaygroundContent>
      {hasMore ? (
        <div
          className="load-more"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "2rem",
            marginBottom: "5rem",
          }}
        >
          <FilledButton>
            <button onClick={handleLoadMore}>
              <FilledButtonText text="Load More Tutorials" />
            </button>
          </FilledButton>
        </div>
      ) : (
        <div className="empty-space"></div>
      )}
    </StyledPlayground>
  )
}

const StyledPlaygroundContent = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  gap: 3.2rem;
  justify-content: center;
  ${media.phablet`justify-items: center;`}
`

const StyledPlayground = styled.main`
  .empty-space {
    margin-bottom: 10rem;
  }
  margin-top: 5rem;
  .blog-title-and-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
    position: relative;
    .blog-title {
      /* margin-top: 1rem; */
      svg {
        height: 3rem;
        width: 3rem;
      }

      span {
        margin-left: 0.8rem;
        font-size: 1.4rem;
        font-family: ${theme.fonts.Mono};
      }
      display: flex;
      align-items: center;
    }
  }

  .blog-description {
    margin-top: 2rem;
    font-size: 2rem;
    font-family: ${theme.fonts.Inter};
    text-align: center;
    font-weight: 700;
  }
`

export default index
