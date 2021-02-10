import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet";
import { throttle } from "@src/_utils";
import { useAnimating, useMenu } from "@src/_hooks";
import { AnimatingContextInterface, MenuContextInterface } from "@src/_hooks/hooks.types";


const Hamburger = () => {
  const [open, setOpen] = useMenu() as MenuContextInterface;
  const [animating] = useAnimating() as AnimatingContextInterface;
  
  const handleOpen = () => {
    if (animating) {
      return
    }
    setOpen(!open)
  }
  return (
    <>
      <Helmet>
        <body id={open ? "stoic" : ""} />
      </Helmet>
      <HamburgerButton
      aria-label="Menu hamburger"
      className={`hamburger ${open ? "open" : ""}`}
      onClick={throttle(handleOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </HamburgerButton>
    </>
  )
}

const HamburgerButton = styled.button`
  display: block;
  width: 35px;
  height: 20px;
  position: relative;
  background-color: transparent;
  border: none;
  z-index: 35;
  transition: 0.5s ease-in-out;
  transform: rotate(0deg);
  opacity: 0;
  visibility: hidden;
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
  }

  &.open span:nth-child(1) {
    top: 10px;
    transform: rotate(135deg);
    width: 100%;
  }
  &.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
    width: 100%;
  }
  &.open span:nth-child(3) {
    top: 10px;
    width: 100%;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  span {
    display: block;
    position: absolute;
    left: 50%;
    width: 100%;
    height: 3px;
    background: var(--primary-color);
    z-index: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    left: 0;

    &:nth-child(1) {
      top: 0px;
    }
    &:nth-child(2) {
      top: 10px;
      width: 50%;
      right: 0;
      margin-left: auto;
    }
    &:nth-child(3) {
      top: 20px;
      width: 75%;
      right: 0;
      margin-left: auto;
    }
    &:before,
    &:after {
      position: absolute;
      content: "";
      display: block;
      top: 0;
      height: 100%;
      width: 0;
      right: 0;
      left: auto;
    }
    &:before {
      z-index: 1;
      background: var(--primary-color);
      transition: all 0.15s linear 0s;
    }
    &:after {
      z-index: 2;
      background: var(--link-color);
      transition: all 0.15s linear 0.3s;
    }
    &:nth-child(2):before {
      transition-delay: 0.15s;
    }
    &:nth-child(3):before {
      transition-delay: 0.3s;
    }
    &:nth-child(2):after {
      transition-delay: 0.45s;
    }
    &:nth-child(3):after {
      transition-delay: 0.6s;
    }
  }

  &:hover {
    span {
      &:after,
      &:before {
        width: 100%;
        left: 0;
        right: auto;
      }
      &:after {
        z-index: 1;
        transition: all 0.15s linear 0s;
      }
      &:before {
        z-index: 2;
        transition: all 0.15s linear 0.3s;
      }
      &:nth-child(2):after {
        transition-delay: 0.15s;
      }
      &:nth-child(3):after {
        transition-delay: 0.3s;
      }
      &:nth-child(2):before {
        transition-delay: 0.45s;
      }
      &:nth-child(3):before {
        transition-delay: 0.6s;
      }
    }
  }
`

export default Hamburger
