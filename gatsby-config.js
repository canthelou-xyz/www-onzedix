module.exports = {
  siteMetadata: {
    title: 'Pierre Canthelou est lead developer chez Bee2Link et spécialiste frontend',
    description: 'Pierre Canthelou est lead developer chez Bee2Link et spécialiste frontend',
    keywords: 'Pierre Canthelou est lead developer chez Bee2Link et spécialiste frontend'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-759298-37",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
