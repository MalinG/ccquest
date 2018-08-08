import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  padding: 24px;
  border-radius: 5px;
  background: #f5f5f5;
  margin: 20px 0;
  align-items: center;
`

const Title = styled.h3`
  margin: 0;
`

const TaskListing = ({ item }) => {

  return (
    <Item>
        <Title>
            {item.task} {item.points}
        </Title>
    </Item>
  )
}

export default TaskListing