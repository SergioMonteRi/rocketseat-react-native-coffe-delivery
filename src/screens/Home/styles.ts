import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const HeaderWrapper = styled.View`
  z-index: 1;
`

export const CarouselWrapper = styled.View`
  height: 360px;
  width: 100%;

  z-index: 2;
  top: 270px;
  position: absolute;
`
