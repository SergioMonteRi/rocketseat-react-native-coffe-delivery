import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components/native'
import { LayoutChangeEvent, StatusBar } from 'react-native'
import Animated, {
  Easing,
  runOnJS,
  scrollTo,
  withTiming,
  useSharedValue,
  useAnimatedRef,
  useDerivedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated'

import { Header } from './components/Header'
import { Filter } from './components/Filter'
import { Search } from './components/Search'
import { CoffeeList } from './components/CoffeeList'
import { CoffeeCarousel } from './components/CoffeeCarousel'

import { FILTER_HEIGHT, HEADER_HEIGHT } from './constants'

import { AnimatedFilterWrapper, AnimatedHomeContainer } from './styles'

export const Catalog = () => {
  const { COLORS } = useTheme()

  const scrollViewRef = useAnimatedRef<Animated.ScrollView>()

  const [sectionsPositionsY, setSectionsPositionsY] = useState<{
    [key: string]: { y: number; height: number }
  }>({})

  const [filterPositionY, setFilterPositionY] = useState(0)
  const [statusBarStyle, setStatusBarStyle] = useState<
    'light-content' | 'dark-content'
  >('light-content')

  const scrollY = useSharedValue(0)
  const targetY = useSharedValue(0)

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

  const fixedFilterAnimatedStyle = useAnimatedStyle(() => {
    const shouldBeFixed = scrollY.value > filterPositionY

    return {
      position: 'absolute',
      top: HEADER_HEIGHT,
      left: 0,
      right: 0,
      zIndex: 2,
      backgroundColor: COLORS.WHITE,
      display: shouldBeFixed ? 'flex' : 'none',
      opacity: shouldBeFixed ? 1 : 0,

      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 3,
      shadowColor: COLORS.GRAY_400,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    }
  })

  const setCoffeeListSectionsYpositions = (
    sectionName: string,
    event: LayoutChangeEvent,
  ) => {
    'worklet'
    const { height } = event.nativeEvent.layout

    event.target.measureInWindow((x, y) => {
      setSectionsPositionsY((prev) => ({
        ...prev,
        [sectionName]: {
          y,
          height,
        },
      }))
    })
  }

  const handleFilterPress = (filterName: string) => {
    const sectionY = sectionsPositionsY[filterName].y

    if (typeof sectionY === 'number') {
      const targetYposition = Math.max(
        0,
        sectionY - HEADER_HEIGHT - FILTER_HEIGHT + 2,
      )

      targetY.value = scrollY.value

      targetY.value = withTiming(targetYposition, {
        duration: 900,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    }
  }

  useEffect(() => {
    StatusBar.setBarStyle(statusBarStyle, true)
  }, [statusBarStyle])

  useDerivedValue(() => {
    scrollTo(scrollViewRef, 0, targetY.value, false)
  }, [targetY])

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        animated
        translucent
      />

      <Header scrollY={scrollY} filterPositionY={filterPositionY} />

      <AnimatedFilterWrapper style={fixedFilterAnimatedStyle}>
        <Filter
          scrollY={scrollY}
          sectionsPositionsY={sectionsPositionsY}
          handleFilterPress={handleFilterPress}
          isFixed
        />
      </AnimatedFilterWrapper>

      <AnimatedHomeContainer
        ref={scrollViewRef}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 164 }}
      >
        <Search scrollY={scrollY} filterPositionY={filterPositionY} />

        <CoffeeCarousel scrollY={scrollY} filterPositionY={filterPositionY} />

        <Filter
          scrollY={scrollY}
          sectionsPositionsY={sectionsPositionsY}
          setFilterPositionY={setFilterPositionY}
          handleFilterPress={handleFilterPress}
        />

        <CoffeeList
          setCoffeeListSectionsYpositions={setCoffeeListSectionsYpositions}
        />
      </AnimatedHomeContainer>
    </>
  )
}
