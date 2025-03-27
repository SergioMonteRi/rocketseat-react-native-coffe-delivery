import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity)

export const AnimatedFilterTagContainer = styled(AnimatedTouchableOpacity)`
  padding: 6px 12px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_DARK};
`

export const AnimatedTag = styled(Animated.Text)`
  ${({ theme }) => css`
    color: ${theme.COLORS.PURPLE_DARK};
    font-size: ${theme.FONT_SIZE.TAG}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
  `}
`
