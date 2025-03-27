import { TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity)

export const AnimatedSizeSelectorOptionContainer = styled(
  AnimatedTouchableOpacity,
)`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 12px 16px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const AnimatedButtonText = styled(Animated.Text)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}
`
