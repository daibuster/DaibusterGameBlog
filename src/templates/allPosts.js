import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
  SEO
} from "../components"
import { H1, P } from "../elements"

const allPosts = ({ pageContext, data }) => {
  const {currentPage, numPages} = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage =`/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <Container>
      <SEO />
      <FeatureImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          お試しタイトル
        </H1>
        <P color="dark2" textAlign="center">
        こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。
        </P>
        {posts.map(post => (
          <ContentCard 
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination 
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}

export default allPosts

export const pageQuery = graphql`
  query AllpostsQuery ($skip: Int!, $limit: Int!){
    allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "YYYY-MM-DD")
            excerpt
          }
        }
      }
    }
  }
`
