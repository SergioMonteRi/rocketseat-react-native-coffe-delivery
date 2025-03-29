import styled, { css } from 'styled-components/native'

export const CartFooterContainer = styled.View`
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;

  row-gap: 20px;
  padding: 28px 32px 40px 32px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.1);
`

export const TotalValueContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const TotalValueText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.TEXT.MD}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}
`
export const TotalValue = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.TITLE.MD}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}
`

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  width: 100%;

  align-items: center;
  justify-content: center;

  padding: 14px 8px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.BUTTON}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
  `}
`
