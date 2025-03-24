import styled, { css } from 'styled-components/native'

export const HeaderContainer = styled.View`
  height: 340px;
`

export const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 32px;
`

export const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
`

export const LocationText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT.SM}px;
    color: ${theme.COLORS.GRAY_900};
  `}
`

export const CartContainer = styled.TouchableOpacity``

export const FilterContainer = styled.View`
  row-gap: 16px;
  padding: 20px 32px 0 32px;
`

export const FilterTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.TITLE.MD}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}
`

export const FilterInputContainer = styled.View`
  flex-direction: row;
  align-items: center;

  height: 42px;
  padding: 12px;
  column-gap: 8px;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const FilterInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_400,
}))`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.TEXT.SM}px;
  `}
`

export const BgImage = styled.ImageBackground`
  width: 83px;
  height: 83px;
  z-index: -1;
  align-self: flex-end;
`
