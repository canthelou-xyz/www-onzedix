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
        url
        locale
        creator
        logo
        others
        twitter
      }
    }
  }
`

const schemaOrgJSONLD = (data) => ({
    "@context" : "http://schema.org",
    "@type" : "Organization",
    "name" : data.site.siteMetadata.title,
    "url" : data.site.siteMetadata.url,
    "logo" : data.site.siteMetadata.logo,
    "sameAs" : data.site.siteMetadata.others
});

const metas = (data) => ([
  { name: 'description', content: data.site.siteMetadata.description },
  { name: 'keywords', content: data.site.siteMetadata.keywords },
  { property: 'og:locale', content: data.site.siteMetadata.locale },
  { property: 'og:url', content: data.site.siteMetadata.url },
  { property: 'og:title', content: data.site.siteMetadata.title },
  { property: 'og:description', content: data.site.siteMetadata.description },
  { property: 'og:site_name', content: data.site.siteMetadata.creator },
  { property: 'og:image', content: data.site.siteMetadata.logo },
  { property: 'twitter:card', content: data.site.siteMetadata.title },
  { property: 'twitter:creator', content: data.site.siteMetadata.creator },
  { property: 'twitter:title',content: data.site.siteMetadata.title },
  { property: 'twitter:description',content: data.site.siteMetadata.description },
  { property: 'twitter:image:src', content: data.site.siteMetadata.logo },
  { property: 'twitter:domain', content: data.site.siteMetadata.url },
  { property: 'twitter:site', content: data.site.siteMetadata.twitter }
]);

const Layout = ({
  children,
  data
}) => (
  <div className="bodywrapper">
    <Helmet
      title={data.site.siteMetadata.title}
    >
      <link rel="canonical" href={data.site.siteMetadata.url} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD(data))}
      </script>
      <link rel="preload" href="https://fonts.googleapis.com/css?family=Martel+Sans:400,900" as="font" crossorigin="anonymous" />
      <link rel="preload" href="https://fonts.googleapis.com/css?family=Muli:200,400,900" as="font" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Martel+Sans:400,900" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:200,400,900" />
      <script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script>

      {
        metas(data).map((meta,index) =>
          <meta key={index} property={meta.property} content={meta.content} />
        )
      }
      
      {
        data.site.siteMetadata.others.map((other,index) =>
          <meta key={index} property="og:see_also" content={other} />
        )
      }


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
