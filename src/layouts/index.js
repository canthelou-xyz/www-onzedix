import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div className="bodywrapper">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Pierre Canthelou est ingénieur en génie logiciel multi fonction, en poste chez Bee2Link à Chalon-sur-Saone' },
        { name: 'keywords', content: '' },
      ]}
    />
    <Header></Header>
      {children()}
    <Footer></Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
