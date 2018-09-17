require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: { //Edits the title of the header
    title: 'Lim Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',//for Blog Post
      options: {
        path:`${__dirname}/src/pages`,
        name:'pages',
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,//for CSS library
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
  ],
}