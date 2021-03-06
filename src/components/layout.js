import React from "react"
import SiteHeader from "./SiteHeader"
import GlobalStyle from "../theme/global"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const SiteWrapper = styled.div`
  margin: 0 auto;
  max-width: ${rhythm(26)};

  > main {
    margin-top: 5rem;
  }

  > header, main, footer {
    padding: 0 ${rhythm(3 / 4)}; 
  }
`

const Layout = ({ children }) => {
  return (
    <SiteWrapper>
      <GlobalStyle />
      <SiteHeader />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </SiteWrapper>
  )
}

export default Layout
