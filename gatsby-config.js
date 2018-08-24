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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
