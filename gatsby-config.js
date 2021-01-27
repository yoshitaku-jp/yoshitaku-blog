module.exports = {
  siteMetadata: {
    title: "よしたく Blog",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: "yoshitaku-jp",
        apis: [
          {
            endpoint: "post",
          },
          {
            endpoint: "category",
          },
        ],
      },
    },
  ],
}
