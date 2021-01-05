module.exports = {
  siteMetadata: {
    title: "gatsby-contentful-website",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "bLTfshkKKI2rmZHUSbnqReq3gRKxS0_GjMkvtxr8pjk",
        spaceId: "f549s9i0rm47",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
