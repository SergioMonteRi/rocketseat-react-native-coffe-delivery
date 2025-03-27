import { css } from 'styled-components'
import styled from 'styled-components/native'

export const FooterContainer = styled.View`
  padding: 72px 32px 32px 32px;
`

export const SizeSelectorContainer = styled.View`
  row-gap: 8px;
  margin-bottom: 20px;
`

export const SizeSelectorTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.TEXT.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}
`
export const SizeSelectorContent = styled.View`
  flex-direction: row;
  column-gap: 8px;
`

export const AddToCartContainer = styled.View`
  flex-direction: row;
  column-gap: 16px;
  padding: 8px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const AddToCardQuantitySelectorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 14px;
`

export const AddToCartQuantityText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.TEXT.MD}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}
`

export const AddToCartButton = styled.TouchableOpacity`
  padding: 12px 8px;
  border-radius: 6px;
  height: 46px;

  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
`

export const AddToCartButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.BUTTON}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
  `}
`
