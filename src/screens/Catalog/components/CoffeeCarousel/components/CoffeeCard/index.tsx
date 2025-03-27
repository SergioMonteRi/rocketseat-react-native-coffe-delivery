import {
  withTiming,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

import {
  Tag,
  Title,
  Price,
  Currency,
  Description,
  PriceContainer,
  ContentContainer,
  AnimatedCardContainer,
  AnimatedImageContainer,
  ITEM_SIZE,
} from './styles'

import { CoffeCardProps } from './types'

export const CoffeeCard = (props: CoffeCardProps) => {
  const { item, scrollX, index } = props

  const inputRange = [
    (index - 1) * ITEM_SIZE,
    index * ITEM_SIZE,
    (index + 1) * ITEM_SIZE,
  ]

  const styledAnimatedCard = useAnimatedStyle(() => {
    const scale = interpolate(scrollX.value, inputRange, [1, 1.3, 1], 'clamp')

    return {
      marginHorizontal: 32,
      transform: [{ scale: withTiming(scale, { duration: 100 }) }],
    }
  })

  const styledAnimatedImage = useAnimatedStyle(() => {
    const scale = interpolate(scrollX.value, inputRange, [1, 1.3, 1], 'clamp')

    return {
      transform: [{ scale: withTiming(scale, { duration: 100 }) }],
    }
  })

  return (
    <AnimatedCardContainer style={styledAnimatedCard}>
      <ContentContainer>
        <AnimatedImageContainer style={styledAnimatedImage}>
          <item.image height={'100%'} width={'100%'} />
        </AnimatedImageContainer>

        <Tag>{item.tag}</Tag>

        <Title>{item.title}</Title>

        <Description>{item.description}</Description>

        <PriceContainer>
          <Currency>R$</Currency>
          <Price>{item.price}</Price>
        </PriceContainer>
      </ContentContainer>
    </AnimatedCardContainer>
  )
}
