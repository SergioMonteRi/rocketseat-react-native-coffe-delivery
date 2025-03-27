import styled from 'styled-components/native'

export const ProductScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const ProductContentContainer = styled.View`
  flex: 1;
  padding: 72px 32px;
`
