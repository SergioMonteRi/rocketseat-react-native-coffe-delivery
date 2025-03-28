import styled, { css } from 'styled-components/native'

export const CartItemContainer = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 16px 32px;
  column-gap: 20px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const InfoContainer = styled.View`
  flex: 1;
`

export const DetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  flex: 1;
`

export const TitleAndSizeContainer = styled.View`
  row-gap: 4px;
`
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TEXT.MD}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}
`
export const Size = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.TEXT.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}
`

export const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE.SM}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}
`
