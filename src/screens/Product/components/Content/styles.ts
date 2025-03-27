import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'

export const ContentContainer = styled.View`
  flex: 1;
  padding-top: 12px;
`

export const Tag = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.TAG}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
    background-color: ${theme.COLORS.GRAY_200};
  `}

  padding: 6px 12px;
  border-radius: 100px;
  align-self: flex-start;
`

export const TitleAndPriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.TITLE.LG}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}
`

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
  gap: 4px;
`

export const Currency = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW};
    font-size: ${theme.FONT_SIZE.TEXT.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}
`

export const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW};
    font-size: ${theme.FONT_SIZE.TITLE.XL}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.TEXT.MD}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}

  padding-right: 12px;
  margin-top: 6px;
`

export const AnimatedImageContainer = styled(Animated.View)`
  position: absolute;
  align-items: center;

  bottom: 0;
  z-index: 2;
  width: 100%;
  margin-bottom: -60px;
`

export const StyledImage = styled.Image`
  width: 370px;
  height: 300px;
`
