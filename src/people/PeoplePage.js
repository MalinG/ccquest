import React from 'react'
import TaskListing from '../components/TaskListing'

class PeoplePage extends React.Component {
  state = {
    active: false
  }

  onItemClick = () => {
    console.log('Item clicked');
    this.setState({
      active: !this.state.active
    })
  }
  render () {
    const { frontmatter } = this.props.data.markdownRemark
    return (
      <div>
        <h1>{frontmatter.title}</h1>
        {frontmatter.tasks && frontmatter.tasks.map((item, index) =>
          <TaskListing key={index} item={item} onItemClick={this.onItemClick} />
        )}
      </div>
    )
  }
}

PeoplePage.defaultProps = {
  frontmatter: {
    tasks: []
  }
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