import styled, { css } from 'styled-components/native'

export const CartHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 72px 32px 20px 32px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const BackIconContainer = styled.TouchableOpacity`
  position: absolute;
  left: 32px;
  top: 72px;
`

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.TITLE.SM}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}
`
