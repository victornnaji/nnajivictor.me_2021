import { Icon } from '@src/assets/icons';
import { media, theme } from '@src/styles';
import { SplitWord } from '@src/_utils/split-text';
import React from 'react'
import styled from 'styled-components'

interface Prop {
    data: {
        github?: string | null,
        link?: string | null,
        techsUsed: Tech[],
        title: string,
        year: string,
    }
}


interface Tech {
    tech: string
}


const SingleProject: React.FC<Prop> = ({data}) => {
    const {year, link, github, techsUsed, title} = data;
    return (
        <StyledSingleProject className="project-item">
                <div className="year">
                    <span className="line__inner-mask">{SplitWord(year, "line__inner")}</span>
                </div>
                <h3 className="name">
                    {title.split(' ')
                        .map((text: string, i: number) => <span className="line__inner-mask" key={i}>{SplitWord(text, "line__inner", i)}</span>)
                    }
                </h3>
                <div className="tech">
                    <div className="tech-heading">
                        <span className="line__inner-mask">{SplitWord("Tech Used", "line__inner")}</span>
                    </div>
                    <div className="tech-content">
                        <span className="line__inner-mask">
                            <p className="line__inner" style={{ display: 'block', textAlign: 'start', position: 'relative' }}>
                                {techsUsed.length > 0 &&
                                    techsUsed.map((item: Tech, i: number) => (
                                        <span key={i}>
                                            {item.tech}
                                            {''}
                                            {i !== techsUsed.length - 1 && <span className="separator">&middot;</span>}
                                        </span>
                                    ))
                                }
                            </p>
                        </span>
                    </div>
                </div>
                <div className="links">
                    <span className="line__inner-mask">
                        <p className="line__inner" style={{ position: 'relative' }}>
                            {link && (
                                <a
                                    title={'External Link'}
                                    href={link}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label="External Link">
                                    <Icon name="External" />
                                </a>
                            )}
                            {github && (
                                <a
                                title={'Github Link'}
                                    href={github}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label="GitHub Link">
                                    <Icon name="GitHub" />
                                </a>
                            )}
                        </p>
                    </span>
                </div>
        </StyledSingleProject>
    )
}
const StyledSingleProject = styled.div`
    .line__inner-mask{
        overflow: hidden;
        display: block;
    }

    &.project-item{
        width: 100%;
        padding: 30px 0;
        font-size: .94117647em;
        line-height: 1.875em;
        height: 10rem;
        display: grid;
        grid-template-columns: 20% 1fr 1fr 10%;
        align-content: center;
        justify-items: baseline;
        ${media.phablet`grid-template-columns: 1fr; padding: 10px; height: 100%;`};
        opacity: 0.8;
        position: relative;

        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            height: 1px;
            background-color: var(--primary-color);;
            transform: scaleX(0);
            transform-origin: center left;
            transition: transform 2s cubic-bezier(.215,.61,.355,1);

        }

        .year{
            font-family: ${theme.fonts.Mono};
            font-size: 1.4rem;
            letter-spacing: 1.2px;
            display: flex;
            justify-content: center;
            align-items: center;
            ${media.phablet`margin-bottom: 1.5rem;`};
        }

        .name{
            font-family: ${theme.fonts.Inter};
            font-size: 2.3rem;
            text-transform: capitalize;
            text-align: left;
            ${media.phablet`text-align: start;`};
            font-weight: 700;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            line-height: 1.2;
            .line__inner-mask:nth-child(2){
                margin-left: 1rem;
            }
            ${media.phablet`margin-bottom: 1rem;`};
        }
        .links{
            .line__inner{
               display: flex;
               justify-content: flex-start;
               align-items: center;
            }
            ${media.phablet`margin-bottom: 1.5rem;`};
            a {
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            a + a {
                margin-left: 10px;
            }
            svg {
                width: 2rem;
                height: 2rem;
                stroke: var(--primary-color);
                &:hover{
                    stroke: var(--link-color);
                }
            }
        }

        .tech{
            font-size: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            ${media.phablet`margin-bottom: 1.5rem;`};

            .tech-heading{
                font-size: 1.6rem;
                opacity: 0.7;
                margin-bottom: 1rem;
                ${media.phablet`display: none;`};
            }
            .tech-content{
                .separator {
                    margin: 0 5px;
                    color: var(--link-color);
                }
                span {
                    display: inline-block;
                }
            }
        }
    }
`;
export default SingleProject
