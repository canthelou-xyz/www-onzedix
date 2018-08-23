import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './styles.scss'

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`

const Layout = ({
  children,
  data
}) => (
  <div className="bodywrapper">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}>
      <link rel="preload" href="https://fonts.googleapis.com/css?family=Martel+Sans:400,900" as="font" crossorigin="anonymous" />
      <link rel="preload" href="https://fonts.googleapis.com/css?family=Muli:200,400,900" as="font" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Martel+Sans:400,900" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:200,400,900" />
    </Helmet>
    <Header></Header>
      {children()}
    <Footer></Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
