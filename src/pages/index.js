import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Yen Wei's Blog :)"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hi folks{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h1>
        <p>Welcome to my simple blog page website. You are currently on the home page.</p>
        <p>
          Just a lil speck of a living person in this vast world. A proud Malaysian currently
          braving thro' NA's greatest of challenges to try and fulfill my dreams and wishes.
        </p>
        <p>PEw pEW PEW!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
