import { useTheme } from 'styled-components/native'
import {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated'

import { FILTER_HEIGHT, HEADER_HEIGHT } from '@screens/Catalog/constants'

import { AnimatedFilterTagContainer, AnimatedTag } from './styles'

import { FilterTagProps } from './types'

export const FilterTag = (props: FilterTagProps) => {
  const { option, onPress, scrollY, sectionsPositionsY } = props

  const { COLORS } = useTheme()

  const animatedValues = useDerivedValue(() => {
    if (!sectionsPositionsY[option]) return { distance: 0, sectionHeight: 0 }

    const sectionPosition = sectionsPositionsY[option].y
    const sectionPositionY = sectionPosition - HEADER_HEIGHT - FILTER_HEIGHT

    const shouldStartInterpolation = scrollY.value > 10

    const distance = shouldStartInterpolation
      ? Math.abs(scrollY.value - sectionPositionY)
      : sectionsPositionsY[option].height

    const sectionHeight = sectionsPositionsY[option].height

    return { distance, sectionHeight }
  }, [sectionsPositionsY, option, scrollY])

  const tagContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderColor: COLORS.PURPLE,
      borderWidth: 1,
      backgroundColor: interpolateColor(
        animatedValues.value.distance,
        [0, animatedValues.value.sectionHeight],
        [COLORS.PURPLE, COLORS.WHITE],
      ),
    }
  })

  const tagAnimatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        animatedValues.value.distance,
        [0, animatedValues.value.sectionHeight],
        [COLORS.WHITE, COLORS.PURPLE_DARK],
      ),
    }
  })

  return (
    <AnimatedFilterTagContainer
      key={option}
      style={tagContainerAnimatedStyle}
      onPress={() => onPress(option.toUpperCase())}
    >
      <AnimatedTag style={tagAnimatedStyle}>{option}</AnimatedTag>
    </AnimatedFilterTagContainer>
  )
}
