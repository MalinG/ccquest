import React, { Component } from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'
import { ReactComponent as Cupcake } from '../../images/cupcake-purple.svg'
import Confetti from 'react-dom-confetti';

const Item = styled.div`
  display: flex;
  position: relative;
  padding: 24px;
  border-radius: 5px;
  background: #f5f5f5;
  margin: 20px 0;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  opacity: ${(props) => props.disabled ? '0.3' : '1'};
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

const ConfettiWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
`

const config = {
  angle: 90,
  spread: 244,
  startVelocity: 25,
  elementCount: 128,
  decay: 0.91
};

class TaskListing extends React.Component {
  state = {
    disabled: false
  }

  onClick = () => {
    if(!this.state.disabled) {
      this.setState({
        disabled: true
      })
      this.props.onItemClick(this.props.item.points)
    }
  }

  render () {
    const { item } = this.props
    return (
      <Item disabled={this.state.disabled} onClick={this.onClick}>
          <Title >
              {item.task}
          </Title>
          <Points>
            {item.points}
            <StyledCupcake />
          </Points>
          <ConfettiWrapper>
            <Confetti active={this.state.disabled} config={config} />
          </ConfettiWrapper>
      </Item>
    )
  }
}

export default TaskListing