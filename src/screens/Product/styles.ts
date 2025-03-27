import styled from 'styled-components/native'

export const ProductScrollContainer = styled.ScrollView`
  flex: 1;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`

export const ProductContentContainer = styled.View`
  flex: 1;
  padding: 64px 32px 0px 32px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`
