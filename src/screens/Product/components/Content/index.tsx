import { Easing, FadeInRight } from 'react-native-reanimated'
import { AnimatedSmoke } from './components/AnimatedSmoke'

import {
  Tag,
  Title,
  Price,
  Currency,
  StyledImage,
  Description,
  PriceContainer,
  ContentContainer,
  AnimatedImageContainer,
  TitleAndPriceContainer,
} from './styles'

import { ContentProps } from './types'

import CoffeeImg from '@assets/images/coffees/coffee.png'

export const Content = (props: ContentProps) => {
  const { itemDetails } = props
  const { tag, title, price, description } = itemDetails

  return (
    <ContentContainer>
      <Tag>{tag}</Tag>

      <TitleAndPriceContainer>
        <Title>{title}</Title>

        <PriceContainer>
          <Currency>R$</Currency>
          <Price>{price}</Price>
        </PriceContainer>
      </TitleAndPriceContainer>

      <Description>{description}</Description>

      <AnimatedImageContainer
        entering={FadeInRight.duration(600)
          .delay(100)
          .easing(Easing.ease)
          .mass(0.5)}
      >
        <AnimatedSmoke />
        <StyledImage source={CoffeeImg} />
      </AnimatedImageContainer>
    </ContentContainer>
  )
}
