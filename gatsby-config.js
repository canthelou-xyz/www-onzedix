module.exports = {
  siteMetadata: {
    title: 'Pierre Canthelou est lead developer chez Bee2Link et spécialiste frontend',
    description: 'Pierre Canthelou est lead developer chez Bee2Link et spécialiste frontend',
    keywords: 'Pierre Canthelou est lead developer chez Bee2Link et spécialiste frontend',
    url: 'https://onzedix.fr',
    locale: 'fr_FR',
    others: ["https://www.facebook.com/studio.developpement.1110",
      "https://www.twitter.com/jigsaaw",
      "https://instagram.com/jigsaaw/",
      "https://www.linkedin.com/in/pierrecanthelou/"
    ],
    creator: 'Pierre Canthelou',
    logo: 'https://onzedix.fr/logo.png',
    twitter: '@jigsaaw'
  },
  plugins: [{
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
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 769043,
        sv: 6
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}