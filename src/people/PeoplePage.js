import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Cupcake } from '../images/cupcake-purple.svg'
import TaskListing from '../components/TaskListing'

const StyledCupcake = styled(Cupcake)`
  width: 40px;
  fill: #A800FF;
  margin-left: 5px;
`
const ContentHeader = styled.div`
  display: flex;
  align-items: center;
`

const Counter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex:1;
  justify-self: flex-end;
  margin-bottom: 1.45rem;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }
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
        <ContentHeader>
          <h1>{frontmatter.title}</h1>
          <Counter>
            <h2>{this.state.count}</h2>
            <StyledCupcake />
          </Counter>
        </ContentHeader>
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