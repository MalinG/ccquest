import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const Item = styled.div`
  display: flex;
  padding: 24px;
  border-radius: 5px;
  background: #f5f5f5;
  margin: 20px 0;
  align-items: center;
`

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 24px 0 0;
`

const Title = styled.h3`
  margin: 0;
`

const PeopleListing = ({ item }) => {

  return (
    <StyledLink to={item.fields.slug}>
      <Item>
          <Avatar src={item.frontmatter.image} />
          <Title>
              {item.frontmatter.title}
          </Title>
      </Item>
    </StyledLink>
  )
}

export default PeopleListing