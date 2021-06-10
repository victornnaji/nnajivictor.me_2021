import React from 'react'
import Lottie from 'react-lottie';
import Four04 from '@src/assets/404.json';
import styled from 'styled-components';

export const Icon404 = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Four04,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      return (
        <Styled404Icon>
             <Lottie options={defaultOptions} isClickToPauseDisabled = {true}/>
        </Styled404Icon>
      )
    
}

const Styled404Icon = styled.div`
    div{
        svg{
            g{
                g:nth-child(1){
                    g{
                        path{
                            fill: currentColor !important;
                        }
                    }
                }
                g:nth-child(2){
                    g{
                        path{
                            fill: currentColor !important;
                        }
                    }
                }
                g:nth-child(3){
                    g{
                        path{
                            fill: currentColor !important;
                        }
                    }
                }
                g:nth-child(4){
                    g{
                        path{
                            fill: currentColor !important;
                        }
                    }
                }
                g:nth-child(5){
                    g{
                        path{
                            fill: currentColor !important;
                        }
                    }
                }
                g:nth-child(6){
                    g{
                        path{
                            fill: currentColor !important;
                        }
                    }
                }
                g:nth-child(7){
                    g{
                        path{
                            fill: currentColor !important;
                        }
                    }
                }
            }
        }
    }
`;

export default Icon404;