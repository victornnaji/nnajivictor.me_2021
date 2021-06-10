import React from "react"
import Arrow from "@src/assets/Arrow.png"
import styled from "styled-components"

const ClickMe = ({ text }: { text: string }) => {
  return (
    <StyledClickMe>
      <img src={Arrow} alt="Arrow Pointer" />
    </StyledClickMe>
  )
}

const StyledClickMe = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  img {
    transform: rotate(-180deg);
    height: 5rem;
  }
`

export default ClickMe
