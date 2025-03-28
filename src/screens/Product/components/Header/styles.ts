import styled, { css } from 'styled-components/native'

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`

export const CartContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: relative;

  min-height: 36px;
  min-width: 36px;
`

export const CartCounterContainer = styled.View`
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -12px;
  right: -10px;

  min-height: 20px;
  min-width: 20px;

  padding: 4px 6px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
`

export const CartCounter = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.TEXT.XS}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
  `}

  text-align: center;
`
