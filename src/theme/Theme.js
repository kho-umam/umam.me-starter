import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { Button } from "rebass"

export const theme = {
  // TODO: https://rebassjs.org/theming
}

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: Arial, Helvetica, sans-serif;
  }

  h1 {
    color: red;
  }

  h3 {
    font-family: Arial, Helvetica, sans-serif
  }
`

export const LayoutComponents = {
  h1: styled.h1`
    font-size: 20px;
  `,
  p: styled.p`
    font-size: 16px;
  `,
}

export const UIComponents = {
  Button: props => <Button {...props}>{props.children}</Button>,
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
)