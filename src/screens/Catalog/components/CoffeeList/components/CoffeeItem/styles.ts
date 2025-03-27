import { TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity)

export const CoffeeItemContainer = styled(TouchableOpacityAnimated)`
  flex-direction: row;
  min-height: 120px;
  column-gap: 12px;
  padding: 16px 12px;
  border-radius: 6px 36px 6px 36px;

  margin: 0 32px;
  margin-bottom: 32px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`

export const ImageContainer = styled.View`
  width: 96px;
`

export const ImageWrapper = styled.View`
  position: absolute;
  top: -30px;
`

export const TextContainer = styled.View`
  flex: 1;
`

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.TITLE.SM}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}

  margin-bottom: 4px;
`

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.TEXT.XS}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}

  margin-bottom: 4px;
`

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
  column-gap: 2px;
`

export const Currency = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW_DARK};
    font-size: ${theme.FONT_SIZE.TEXT.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}
`

export const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW_DARK};
    font-size: ${theme.FONT_SIZE.TITLE.MD}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}
`
