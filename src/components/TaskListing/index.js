import React, { Component } from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'
import { ReactComponent as Cupcake } from '../../images/cupcake-purple.svg'
import Confetti from 'react-dom-confetti';

const Item = styled.div`
  display: flex;
  padding: 24px;
  border-radius: 5px;
  background: #f5f5f5;
  margin: 20px 0;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  opacity: ${(props) => props.disabled ? '0.4' : '1'};
`

const Title = styled.h3`
  margin: 0;
`

const StyledCupcake = styled(Cupcake)`
  width: 20px;
  fill: #A800FF;
  margin-left: 5px;
`

const Points = styled.div`
  display: flex;
  align-items: center;
`
const config = {
  angle: 80,
  spread: 208,
  startVelocity: 27,
  elementCount: 78,
  decay: 0.86
};

class TaskListing extends React.Component {
  state = {
    disabled: false
  }

  onClick = () => {
    this.setState({
      disabled: true
    })
  }

  render () {
    const { item, onItemClick } = this.props
    return (
      <Item big={this.state.disabled} onClick={this.onClick}>
          <Title >
              {item.task}
          </Title>
          <Points>
            {item.points}
            <StyledCupcake />
          </Points>
          <Confetti active={this.state.disabled} config={config} />
      </Item>
    )
  }
}

export default TaskListing