import styled, { css } from 'styled-components/native'

import { FILTER_HEIGHT } from '@screens/Home/constants'

export const FilterContainer = styled.View<{ isFixed?: boolean }>`
  row-gap: 12px;
  height: ${FILTER_HEIGHT}px;
  padding: 16px 32px;
  background-color: ${({ theme, isFixed }) =>
    isFixed ? theme.COLORS.WHITE : theme.COLORS.GRAY_900};
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
