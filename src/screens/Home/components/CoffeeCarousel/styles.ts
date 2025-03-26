import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const CoffeeCarouselContainer = styled.View`
  z-index: 2;
  justify-content: flex-end;
  align-items: end;

  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`

export const AnimatedWrapper = styled(Animated.View)`
  min-height: 360px;
  margin-top: -120px;
`
