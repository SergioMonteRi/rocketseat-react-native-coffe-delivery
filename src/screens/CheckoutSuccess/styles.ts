import styled, { css } from 'styled-components/native'

export const CheckoutSuccessContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};

  align-items: center;
  justify-content: center;

  padding: 0 64px 96px 64px;
`

export const SuccessTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.YELLOW_DARK};
    font-size: ${theme.FONT_SIZE.TITLE.LG}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}

  margin: 48px 0 4px 0;
`

export const SuccessSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.TEXT.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}

  text-align: center;
`

export const BackToCatalogButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 64px;
  border-radius: 6px;
  padding: 16px 24px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
`

export const BackToCatalogButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.BUTTON}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
  `}
`
