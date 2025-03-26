import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components/native'
import { SectionList, StatusBar } from 'react-native'
import Animated, {
  runOnJS,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated'

import { Header } from './components/Header'
import { Filter } from './components/Filter'
import { Search } from './components/Search'
import { CoffeeCarousel } from './components/CoffeeCarousel'
import { CoffeeItem } from './components/CoffeeList/components/CoffeeItem'

import { COFFEE_LIST } from './constants'

import {
  SectionTitle,
  CoffeeListContainer,
  AnimatedHomeContainer,
} from './styles'

import { CoffeeItemList } from './types'

const AnimatedSectionList = Animated.createAnimatedComponent(
  SectionList<CoffeeItemList>,
)

export const Home = () => {
  const { COLORS } = useTheme()

  const [filterPositionY, setFilterPositionY] = useState(0)
  const [statusBarStyle, setStatusBarStyle] = useState<
    'light-content' | 'dark-content'
  >('light-content')

  const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      'worklet'
      scrollY.value = event.contentOffset.y

      if (event.contentOffset.y > filterPositionY) {
        runOnJS(setStatusBarStyle)('dark-content')
      } else {
        runOnJS(setStatusBarStyle)('light-content')
      }
    },
  })

  const fixedFilterStyle = useAnimatedStyle(() => {
    const shouldBeFixed = scrollY.value > filterPositionY

    return {
      position: 'absolute',
      top: 110,
      left: 0,
      right: 0,
      zIndex: 2,
      backgroundColor: COLORS.WHITE,
      display: shouldBeFixed ? 'flex' : 'none',
      opacity: shouldBeFixed ? 1 : 0,
    }
  })

  useEffect(() => {
    StatusBar.setBarStyle(statusBarStyle, true)
  }, [statusBarStyle])

  return (
    <>
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />

      <Header scrollY={scrollY} filterPositionY={filterPositionY} />

      <Animated.View style={fixedFilterStyle}>
        <Filter />
      </Animated.View>

      <AnimatedHomeContainer
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
      >
        <Search scrollY={scrollY} filterPositionY={filterPositionY} />

        <CoffeeCarousel scrollY={scrollY} filterPositionY={filterPositionY} />

        <Filter setFilterPositionY={setFilterPositionY} />

        <CoffeeListContainer>
          <AnimatedSectionList
            sections={COFFEE_LIST}
            keyExtractor={(item: CoffeeItemList) => item.name}
            renderItem={({ item }) => <CoffeeItem item={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <SectionTitle>{title}</SectionTitle>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 64 }}
            stickySectionHeadersEnabled={false}
          />
        </CoffeeListContainer>
      </AnimatedHomeContainer>
    </>
  )
}
