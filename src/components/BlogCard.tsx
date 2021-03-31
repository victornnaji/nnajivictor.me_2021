import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage} from 'gatsby-plugin-image';
import { theme } from '@src/styles';
import { Link } from 'gatsby';
import CustomLink from './CustomLink';
import kebabCase from 'lodash.kebabcase';


interface BlogCardProps{
    data: {
        image: string,
        title: string,
        excerpt: string,
        tags?: [string],
        slug: string,
        date: string,
        categories: {
            nodes:  [{
                name: string,
                slug: string,
            }]
        }
        featuredImage: {
           node:{
            altText: string,
            localFile:{
              childImageSharp:{
                gatsbyImageData: any
              }
            },
           }
        }
    },
    classname? : string,
}
const BlogCard = ({classname, data}: BlogCardProps) => {
    const excerpt = data.excerpt.slice(0, 350);
    console.log(data.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData);
    const Image = getImage(data.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData)
    return (
        <StyledBlogCard className={classname}>
            <GatsbyImage
                image={Image!}
                alt={data.featuredImage?.node?.altText}
             />
            <div className="blog-sub-menu">
                <ul className="blog-sub-menu__categories">
                    {data.categories.nodes.map((category: { name: string, slug: string }, i: number) => (
                        <li key={i}>
                            <CustomLink page={`/blog/category/${kebabCase(category.slug)}/`} className="link">{category.name}</CustomLink>
                        </li>
                    ))}
                </ul>
            </div>
            <h2 className="blog-title"> <Link to={`/blog/${data.slug}`} className="link"> {data.title} </Link></h2>
            {/* <p className="blog-excerpt" dangerouslySetInnerHTML={{__html: excerpt}}/> */}
            <p className="blog-excerpt">Building intrinsic user interface boils down to the styling of these components. Here is how to style css components using inline styles and classname</p>
        </StyledBlogCard>
    )
}

const StyledBlogCard = styled.article`
    .blog-title{
        font-size: 2.3rem;
        font-family: ${theme.fonts.Inter};
        line-height: 2.8rem;
        a{
            text-decoration: none;
            color: var(--primary-color);
            
            &.link{
                white-space: unset !important;
            }
        }
    }
    .blog-sub-menu{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding-top: 0.5rem;

        &__categories{
            display: flex;
            align-items: flex-end;
            flex-wrap: wrap;
            padding: 0;
            margin: 0;
            list-style: none;

            li{
                font-family: ${theme.fonts.Mono};
                font-size: 1.2rem;
                color: var(--bg);
                line-height: 1.75;
                margin-right: 1rem;
                padding: 1.2rem 2rem;
                display: inline-block;
                padding: 0.2rem 1.2rem;
                text-transform: uppercase;
                margin-bottom: .75rem;
                background-color: var(--primary-color);
                &:last-of-type{
                    margin-right: 0;
                }

                a{
                    color: currentColor;
                    text-decoration: none;
                }
            }
        }
    }

    .blog-excerpt{
        margin-top: 1rem;
        font-size: 1.5rem;
        font-family: ${theme.fonts.Lato};
    }
`;

export default BlogCard
