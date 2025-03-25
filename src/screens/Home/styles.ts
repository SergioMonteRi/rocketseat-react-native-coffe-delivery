import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const HeaderWrapper = styled.View`
  z-index: 1;
`

export const CarouselAndFilterWrapper = styled.View`
  z-index: 2;
  justify-content: flex-end;
  align-items: end;

  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`

export const AnimatedCarouselWrapper = styled(Animated.View)`
  min-height: 360px;
  margin-top: -110px;
`

export const CoffeListHeaderContainer = styled.View`
  width: 100%;
  padding: 0;
  background-color: red;
`
