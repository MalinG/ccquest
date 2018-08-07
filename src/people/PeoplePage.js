import React from 'react'
import Link from 'gatsby-link'

const PeoplePage = ({ data }) => (
  <div>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default PeoplePage


export const query = graphql`
  query PeopleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`;