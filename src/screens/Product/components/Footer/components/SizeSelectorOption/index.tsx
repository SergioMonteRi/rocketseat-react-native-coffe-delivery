import {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated'

import {
  AnimatedButtonText,
  AnimatedSizeSelectorOptionContainer,
} from './styles'

import { SizeSelectorOptionProps } from './types'
import { useEffect } from 'react'
import { useTheme } from 'styled-components/native'

export const SizeSelectorOption = (props: SizeSelectorOptionProps) => {
  const { size, isSelected, handleSizePress } = props

  const { COLORS } = useTheme()

  const selected = useSharedValue(0)

  const sizeSelectorOptionContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        selected.value,
        [0, 1],
        [COLORS.GRAY_700, COLORS.WHITE],
      ),
      borderWidth: 1,
      borderColor: interpolateColor(
        selected.value,
        [0, 1],
        [COLORS.WHITE, COLORS.PURPLE],
      ),
    }
  })

  const buttonTextAnimatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        selected.value,
        [0, 1],
        [COLORS.GRAY_300, COLORS.PURPLE],
      ),
    }
  })

  useEffect(() => {
    selected.value = withTiming(isSelected ? 1 : 0, { duration: 250 })
  }, [isSelected, selected])

  return (
    <AnimatedSizeSelectorOptionContainer
      key={size}
      onPress={() => handleSizePress(size)}
      style={sizeSelectorOptionContainerAnimatedStyle}
    >
      <AnimatedButtonText style={buttonTextAnimatedStyle}>
        {size}ml
      </AnimatedButtonText>
    </AnimatedSizeSelectorOptionContainer>
  )
}
