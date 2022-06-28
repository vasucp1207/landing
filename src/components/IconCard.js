import Typography from 'components/Typography'
import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'

const Card = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  padding: 8px;
  @media (min-width: ${get('breakpoints.md')}) {
    height: 110px;
  }

  > svg {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    @media (min-width: ${get('breakpoints.md')}) {
      width: 55px;
      height: 55px;
    }
  }
`

const Title = styled(Typography)`
  display: block;
  text-align: center;
`

const IconCard = ({ icon, title, ...props }) => {
  const Icon = icon
  return (
    <Card {...props}>
      <Icon width={55} height={55} />
      <Title variant="body.xs.default">{title}</Title>
    </Card>
  )
}

export default IconCard
