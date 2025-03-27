import styled, { css } from 'styled-components/native'

export const CoffeeListContainer = styled.View`
  flex: 1;
`

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
    font-family: ${theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  `}

  padding: 16px 32px;
  margin-bottom: 24px;
  position: fixed;
  width: 100%;
  top: 0;
`
