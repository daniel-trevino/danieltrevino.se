// @flow
import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "../Helmet"
import "styles/global.scss"

import Navigation from "../Navigation"

type Props = {
  children: React.Node
}

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data: Object) => (
      <div>
        <Helmet data={data} />
        <Navigation siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
      </div>
    )}
  />
)

export default Layout
