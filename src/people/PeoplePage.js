import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Cupcake } from '../images/cupcake-purple.svg'
import TaskListing from '../components/TaskListing'

const StyledCupcake = styled(Cupcake)`
  width: 40px;
  fill: #A800FF;
  margin-left: 5px;
`

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

class PeoplePage extends React.Component {
  state = {
    count : 0
  }
  onItemClick = (points) => {
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
        <Counter>
          <StyledCupcake />
          <h2>{this.state.count}</h2>
        </Counter>
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