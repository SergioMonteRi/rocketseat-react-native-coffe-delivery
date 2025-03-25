import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'

export const ITEM_SIZE = 170

export const AnimatedCardContainer = styled(Animated.View)`
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.View`
  margin-top: 24px;

  justify-content: flex-end;
  align-items: center;

  height: 250px;
  width: ${ITEM_SIZE}px;

  border-radius: 6px 36px 6px 36px;
  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`

export const AnimatedImageContainer = styled(Animated.View)`
  height: 64px;
  width: 64px;

  position: absolute;
  margin-top: -10px;
  top: 0;
`

export const Tag = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.PURPLE_DARK};
    font-size: ${theme.FONT_SIZE.TAG}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
    background-color: ${theme.COLORS.PURPLE_LIGHT};
  `}

  padding: 4px 8px;
  margin-bottom: 15px;
  border-radius: 100px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.TITLE.MD}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.TEXT.XS}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}

  text-align: center;
  margin-top: 4px;
`

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: center;

  margin-top: 14px;
`

export const Currency = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW_DARK};
    font-size: ${theme.FONT_SIZE.TEXT.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}

  margin-right: 4px;
`

export const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW_DARK};
    font-size: ${theme.FONT_SIZE.TITLE.LG}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}
`
