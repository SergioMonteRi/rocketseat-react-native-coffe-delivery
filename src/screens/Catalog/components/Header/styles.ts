import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'

import { HEADER_HEIGHT } from '@screens/Catalog/constants'

export const AnimatedHeaderContainer = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 72px 32px 20px 32px;
  height: ${HEADER_HEIGHT}px;
`

export const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
`

export const AnimatedLocationText = styled(Animated.Text)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT.SM}px;
    color: ${theme.COLORS.GRAY_900};
  `}
`

export const CartContainer = styled.TouchableOpacity``
