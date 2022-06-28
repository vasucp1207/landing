import React from 'react'
import styled from 'styled-components'
import Typography from 'components/Typography'
import get from 'utils/get'

const PricingAssistantTextContainer = styled.div`
  grid-column: 1 / -1;
  margin-top: 112px;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 1 / 5;
  }
`

const PreTitle = styled(Typography)`
  color: ${p => p.$color};
`

const Title = styled(Typography)`
  color: ${get('colors.white')};
  margin-top: 24px;
  letter-spacing: -0.01em;

  strong {
    color: ${p => p.$color};
  }
`

const LeftColumn = ({ pricingAssistant, color }) => (
  <PricingAssistantTextContainer>
    <PreTitle variant="title.caps" $color={color}>
      {pricingAssistant.preTitle}
    </PreTitle>
    <Title
      variant="title.l"
      forwardedAs="h2"
      $color={color}
      dangerouslySetInnerHTML={{ __html: pricingAssistant.title }}
    />
  </PricingAssistantTextContainer>
)

export default LeftColumn
