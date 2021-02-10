import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import styled from 'styled-components';

const Toggle = () => {
    return (
      <div className="toggle">
        <ThemeToggler>
        {({ theme, toggleTheme }: any) => (
          <Toggler>
            <label>
              <input
                type="checkbox"
                onChange={e => {
                    e.target.checked ? e.target.parentElement!.setAttribute('title', 'Go to Dark Mode') : e.target.parentElement!.setAttribute('title', 'Go to Light Mode');
                    e.target.checked ? e.target.parentElement!.setAttribute('alt', 'Go to Dark Mode') : e.target.parentElement!.setAttribute('alt', 'Go to Light Mode');
                    return toggleTheme(e.target.checked ? "light" : "dark")
                }}
                checked={theme === "light"}
              />
              <div></div>
            </label>
          </Toggler>
        )}
      </ThemeToggler>
      </div>
    )
}

const Toggler = styled.div`
     cursor: pointer;
     input{
        display: none;
        & + div {
            border-radius: 50%;
            cursor: pointer;
            width: 35px;
            height: 35px;
            position: relative;
            box-shadow: inset 12px -12px 0 0 var(--primary-color);
            transform: scale(0.75) rotate(-2deg);
            transition: box-shadow .5s ease 0s, transform .4s ease .1s;
            &:before {
                content: '';
                width: inherit;
                height: inherit;
                border-radius: inherit;
                position: absolute;
                left: 0;
                top: 0;
                transition: background .3s ease;
            }
            &:after {
                content: '';
                width: 8px;
                height: 8px;
                border-radius: 50%;
                margin: -4px 0 0 -4px;
                position: absolute;
                top: 50%;
                left: 50%;
                box-shadow: 0 -23px 0 var(--primary-color), 0 23px 0 var(--primary-color), 23px 0 0 var(--primary-color), -23px 0 0 var(--primary-color), 15px 15px 0 var(--primary-color), -15px 15px 0 var(--primary-color), 15px -15px 0 var(--primary-color), -15px -15px 0 var(--primary-color);
                transform: scale(0);
                transition: all .3s ease;
            }
        }
        &:checked + div {
            box-shadow: inset 32px -32px 0 0 var(--primary-color);
            transform: scale(.35) rotate(0deg);
            transition: transform .3s ease .1s, box-shadow .2s ease 0s;
            cursor: pointer;
            &:before {
                background: var(--primary-color);
                transition: background .3s ease .1s;
            }
            &:after {
                transform: scale(1.5);
                transition: transform .5s ease .15s;
            }
        }
     }
`

export default Toggle
