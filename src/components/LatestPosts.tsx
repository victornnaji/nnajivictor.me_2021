import { media } from "@src/styles"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import BlogCard from "./BlogCard"
import { StyledBlogContent } from "@src/pages/blog"

const LatestPosts = ({ data, tag }: { data: any; tag: any }) => {
  const extractedTag = tag[0]

  if (data.length > 0) {
    return (
      <StyledLatestPosts>
        <h2 className="latest-post-title">Latest Articles in {extractedTag}</h2>
        <p className="cta-to-tag">
          <Link className="link latest-post-link" to="/">
            View all {extractedTag} Articles
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                style={{ transform: "rotate(-90deg)" }}
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.4"
                  d="M12 3v17M19 13l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </Link>
        </p>
        <div className="posts">
          <StyledBlogContent>
            {data.map((post: any) => {
              return (
                <BlogCard
                  data={post.node}
                  key={post.node.databaseId}
                  classname="dynamic_blog-content"
                />
              )
            })}
          </StyledBlogContent>
        </div>
      </StyledLatestPosts>
    )
  }
  return <> </>
}

const StyledLatestPosts = styled.div`
  margin-top: 10rem;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max-content;
  grid-template-rows: repeat(3, max-content);

  .latest-post-title {
    font-size: 3rem;
    font-weight: 600;
  }

  .posts {
    grid-row: 3/-1;
    grid-column: span 2;
    ${media.phablet`
        grid-row: 2/span 1;
      `}
  }

  .cta-to-tag {
    ${media.phablet`
        grid-row: 3/ -1;
      `}

    .latest-post-link {
      display: flex;
      align-items: center;
      font-size: 2rem;
      font-weight: 600;
      color: var(--primary-color);
      transition: all 0.2s;
      padding-bottom: 1rem;

      &:hover {
        span {
          color: var(--bg);
          background-color: var(--primary-color);
        }
      }
    }

    a.latest-post-link > span {
      padding: 0.5rem;
      margin-left: 1.5rem;
      border-radius: 4rem;
      border-radius: 50%;
      border: 1px solid var(--primary-color);
      display: flex;
      /* background-color: var(--bg); */

      svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }

  /* .latest-post-header{
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 2rem;
      align-items: center;

      .latest-post-title{
          font-size: 3rem;
          font-weight: 600;
      }
  }

  */
`

export default LatestPosts
