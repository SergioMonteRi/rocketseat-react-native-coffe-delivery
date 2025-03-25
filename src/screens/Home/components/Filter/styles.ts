import styled, { css } from 'styled-components/native'

export const FilterContainer = styled.View`
  row-gap: 12px;
  padding: 16px 32px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.TITLE.SM}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}
`

export const FilterOptionsContainer = styled.View`
  flex-direction: row;
  column-gap: 8px;
`

export const TagContainer = styled.TouchableOpacity`
  padding: 6px 12px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_DARK};
`

export const Tag = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.PURPLE_DARK};
    font-size: ${theme.FONT_SIZE.TAG}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO.ROBOTO_BOLD};
  `}
`
