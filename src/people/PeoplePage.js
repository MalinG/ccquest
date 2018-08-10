import React from 'react'
import TaskListing from '../components/TaskListing'

class PeoplePage extends React.Component {
  state = {
    count : 0
  }
  onItemClick = (points) => {
    console.log('Item clicked: ', points);
    const {count} = this.state;
    this.setState({
      count: parseInt(count) + parseInt(points)
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
        <h2>{this.state.count}</h2>
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