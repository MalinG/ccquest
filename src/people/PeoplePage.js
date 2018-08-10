import React from 'react'
import Link from 'gatsby-link'

import TaskListing from '../components/TaskListing'

const PeoplePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      {(frontmatter.tasks.length > 0) && frontmatter.tasks.map((item, index) =>
        <TaskListing key={index} item={item} />
      )}
    </div>
  )
}

export default PeoplePage


export const query = graphql`
  query PeopleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tasks {
          points
          task
        }
      }
    }
  }
`;