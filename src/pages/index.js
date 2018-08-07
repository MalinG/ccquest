import React from 'react'
import Link from 'gatsby-link'

import PeopleListing from '../components/PeopleListing'

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <div>
    <h2>Warriors</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PeopleListing key={node.id} item={node} />
    ))}
  </div>
  )
}


export default IndexPage


export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] }
      filter: {fileAbsolutePath: {regex: "/(people)/.*\\.md$/"}}
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
