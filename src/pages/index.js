import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
const IndexPage = props => {
  const posts = props.data.allMicrocmsPost.nodes
  return (
    <Layout>
      <Helmet>
        <title>よしたく 雑記Blog</title>
        <meta name="description" content="よしたくの雑記です" />
      </Helmet>
      <PostList posts={posts} />
    </Layout>
  )
}
export const query = graphql`
  query {
    allMicrocmsPost(sort: { fields: [publishedAtView], order: DESC }) {
      nodes {
        slug
        title
        content
        publishedAtView(formatString: "YYYY.DD.MM hh:mm")
        category {
          slug
          name
        }
      }
    }
  }
`
export default IndexPage
