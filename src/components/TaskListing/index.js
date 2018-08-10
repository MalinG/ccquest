import React from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'
import { ReactComponent as Cupcake } from '../../images/cupcake-purple.svg'

const Item = styled.div`
  display: flex;
  padding: 24px;
  border-radius: 5px;
  background: #f5f5f5;
  margin: 20px 0;
  justify-content: space-between;
  align-items: center;
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

const TaskListing = ({ item }) => {

  return (
    <Item>
        <Title>
            {item.task}
        </Title>
        <Points>
          {item.points}
          <StyledCupcake />
        </Points>
    </Item>
  )
}

export default TaskListing