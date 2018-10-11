// @flow
import * as React from "react"
import Helmet from "react-helmet"
import danieltrevinoImg from "../images/danieltrevino.se.png"

type Props = {
  data: Object
}

const GA_ID = "UA-83814700-1"

class SEO extends React.Component<Props> {
  componentDidMount() {
    this.initGA()
  }
  initGA() {
    window.dataLayer = window.dataLayer || []
    function gtag(first: string, second: any) {
      window.dataLayer.push(arguments)
    }
    gtag("js", new Date())

    gtag("config", GA_ID)
  }
  render() {
    const { title, description, keywords } = this.props.data.site.siteMetadata
    return (
      <Helmet
        title={title}
        meta={[
          { name: "description", content: description },
          { name: "keywords", content: keywords }
        ]}
      >
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@danielivert" />
        <meta name="twitter:image" content={danieltrevinoImg} />

        <meta property="og:image" content={danieltrevinoImg} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
      </Helmet>
    )
  }
}

export default SEO
