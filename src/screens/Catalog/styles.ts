import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const AnimatedHomeContainer = styled(Animated.ScrollView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const HeaderWrapper = styled.View`
  z-index: 1;
`

export const CoffeListHeaderContainer = styled.View`
  width: 100%;
  padding: 0;
  background-color: red;
`

export const AnimatedFilterWrapper = styled(Animated.View)``
