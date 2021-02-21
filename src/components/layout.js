import React from "react"
import { Link } from "gatsby"
import Hero from "../components/hero"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  
  const header = (
    <Link className="header-link-home" to="/">
    <Hero>        
      {title}
    </Hero>
  </Link>
  )

  // if (isRootPath) {
  //   header = (
  //     <Hero>
  //       <Link to="/">{title}</Link>
  //     </Hero>

  //   )
  // } else {
  //   header = (

  //     <Link className="header-link-home" to="/">
  //       <Hero>        
  //         {title}
  //       </Hero>
  //     </Link>
  //   )
  // }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main className="main-wrapper">{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
