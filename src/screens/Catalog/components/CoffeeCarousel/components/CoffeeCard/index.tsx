import { useNavigation } from '@react-navigation/native'
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

import { AppNavigationRoutesProps } from '@routes/AppRoutes/types'

import { CoffeCardProps } from './types'
import { TouchableOpacity } from 'react-native'

export const CoffeeCard = (props: CoffeCardProps) => {
  const { item, scrollX, index } = props

  const navigator = useNavigation<AppNavigationRoutesProps>()

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

  const handleProductNavigation = () => {
    navigator.navigate('product', {
      itemDetails: { ...item },
    })
  }

  return (
    <AnimatedCardContainer style={styledAnimatedCard}>
      <TouchableOpacity onPress={handleProductNavigation} activeOpacity={0.85}>
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
      </TouchableOpacity>
    </AnimatedCardContainer>
  )
}
