import { FlatList } from 'react-native'
import {
  interpolate,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { COFFEE_CAROUSEL_DATA } from './constants'

import { enteringAnimation } from '@screens/Home/animations'

import { CoffeeCard } from './components/CoffeeCard'

import { AnimatedWrapper, CoffeeCarouselContainer } from './styles'

import { CoffeeCarouselProps } from './type'

export const CoffeeCarousel = (props: CoffeeCarouselProps) => {
  const { filterPositionY, scrollY } = props

  const scrollX = useSharedValue(0)

  const animatedWrapperStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scrollY.value, [0, filterPositionY], [1, 0.75]),
        },
      ],
    }
  })

  return (
    <CoffeeCarouselContainer>
      <AnimatedWrapper
        entering={enteringAnimation}
        style={animatedWrapperStyle}
      >
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={COFFEE_CAROUSEL_DATA}
          renderItem={({ item, index }) => (
            <CoffeeCard item={item} index={index} scrollX={scrollX} />
          )}
          contentContainerStyle={{
            paddingHorizontal: 32,
          }}
          onScroll={(e) => (scrollX.value = e.nativeEvent.contentOffset.x)}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </AnimatedWrapper>
    </CoffeeCarouselContainer>
  )
}
