import React from 'react'
import styled from 'styled-components'
import Image from '@src/assets/NnajiVictor.jpg';
import { media, theme } from '@src/styles';
import { SwipeLinks } from './Links';

const MenuImage = () => {

    return (
        <>
            <StyledMenuMask className="img-menu">
                <div className="img-menu__mask">
                    <div className="inner"></div>
                </div>
            </StyledMenuMask>
            <StyledMenuImage className="img-menu__content">
                <div className="inner">
                    <div className="img-menu__title">
                        <div className="img-menu__title--mask">
                            <SwipeLinks to="/about">About</SwipeLinks>
                        </div>
                    </div>
                    <div className="img-menu__image">
                        <div className="img-menu__image--mask">
                            <img src={Image} alt="Nnaji Victor"/>
                        </div>
                    </div>
                </div>
            </StyledMenuImage>
        </>
    )
}

const StyledMenuImage = styled.div`
    height: 100%;
    position: fixed;
    flex-direction: column;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;

    &::before{
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background: var(--menu-2-color);
        opacity: 0.5;
    }

    .inner{
        height: 100%;
        width: 100%;
        .img-menu__title{
            position: absolute;
            text-align: center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 5;

            .img-menu__title--mask{
                overflow: hidden;

                a{
                    text-decoration: none;
                    font-size: 5rem;
                    color: var(--primary-color);
                    font-family: ${theme.fonts.Lato};
                    font-weight: 900;
                    ${media.phablet`font-size: 3rem;`}
                    position: relative;
                    display: inline-block;

                    &::before {
                        content: "";
                        position: absolute;
                        z-index: -1;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 30%;
                        opacity: 0.7;
                        transform: scale3d(0, 1, 1);
                        transform-origin: 0% 50%;
                        transition: ${theme.transition};
                        background: var(--link-color);
                    }

                    &:hover {
                        &::before {
                            transform: scale3d(1, 1, 1);
                        }
                    }
                }
            }
        }

        .img-menu__image{
            overflow: hidden;
            width: 100%;

            .img-menu__image--mask{
                overflow: hidden;
                width: 100%;
                height: 100%;
                position: absolute;

                img{
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    object-fit: cover;
                    object-position: 50% 50%;
                    opacity: 0.35;
                    will-change: transform;
                }
            }
        }
    }

`

const StyledMenuMask = styled.div`
    height: 100%;
    position: fixed;
    flex-direction: column;
    z-index: 4;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;

    .img-menu__mask{
        background-color: transparent;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .inner{
            height: 100%;
            width: 100%;
            background: var(--tertiary-color-moon);
        }
    }
`;

export default MenuImage
