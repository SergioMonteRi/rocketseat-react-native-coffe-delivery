import styled, { css } from 'styled-components/native'

export const EmptyListContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 64px;
`

export const EmptyListText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.TEXT.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_REGULAR};
  `}

  margin: 12px 0 32px 0;
`

export const EmptyListButton = styled.TouchableOpacity`
  padding: 12px 16px;
  border-radius: 6px;
  width: 250px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
`

export const EmptyListButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.TEXT.SM}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
  `}
`
