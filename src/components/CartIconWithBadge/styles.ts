import styled, { css } from 'styled-components/native'

import theme from '@theme/theme'

export const CartIconWithBadgeContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: relative;

  min-height: 36px;
  min-width: 36px;
`

export const BadgeContainer = styled.View<{
  bgColor?: keyof typeof theme.COLORS
}>`
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -12px;
  right: -10px;

  min-height: 20px;
  min-width: 20px;

  padding: 4px 6px;
  border-radius: 100px;
  background-color: ${({ theme, bgColor }) =>
    bgColor ? theme.COLORS[bgColor] : theme.COLORS.PURPLE};
`

export const BadgeCounter = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.TEXT.XS}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
  `}

  text-align: center;
`
