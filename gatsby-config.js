module.exports = {
  siteMetadata: {
    title: "Blog Leurjim",
    description: "Mi blog personal",
    twitter: "myhandle",
    siteUrl: "https://example.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        prismPreset: `prism-okaidia`,
        preset: `@theme-ui/preset-funk`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
