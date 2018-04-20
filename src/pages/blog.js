import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <h1>我的博客</h1>
    { data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id }>
        <h3>{ post.node.frontmatter.title }</h3>
        <small>{ post.node.frontmatter.author } 发表于 {post.node.frontmatter.date}</small> 
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>阅读更多</Link>
        <br />
        <br />
        <hr />
      </div>
    )) }
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
