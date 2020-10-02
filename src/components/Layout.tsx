import React from "react"

import styled, { createGlobalStyle } from "styled-components"

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyles />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const GlobalStyles = createGlobalStyle`
    body {
        transition: all 0.5s linear;

        &.dark-mode {
            background-color: #1f1f1f;
            color: #ddd;
        }
    }
`
