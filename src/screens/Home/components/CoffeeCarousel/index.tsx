import { FlatList } from 'react-native'
import Animated, { SlideInRight, useSharedValue } from 'react-native-reanimated'

import { COFFEE_CAROUSEL_DATA } from './constants'

import { CoffeeCard } from './components/CoffeeCard'

export const CoffeeCarousel = () => {
  const scrollX = useSharedValue(0)

  return (
    <Animated.View
      entering={SlideInRight.delay(500).duration(700)}
      style={{ minHeight: 450 }}
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
    </Animated.View>
  )
}
