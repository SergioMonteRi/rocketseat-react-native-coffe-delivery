import { useTheme } from 'styled-components/native'
import { MapPin, ShoppingCart } from 'phosphor-react-native'
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { useLocation } from '@hooks/useLocation'

import {
  CartContainer,
  LocationContainer,
  AnimatedLocationText,
  AnimatedHeaderContainer,
} from './styles'

import { HeaderProps } from './types'

export const Header = (props: HeaderProps) => {
  const { filterPositionY, scrollY } = props

  const { COLORS } = useTheme()
  const { location } = useLocation()

  const fixedHeaderAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [10, filterPositionY],
        [COLORS.GRAY_100, COLORS.WHITE],
      ),
      borderBottomWidth: interpolate(
        scrollY.value,
        [50, filterPositionY],
        [0, 0.5],
      ),
      borderBottomColor: COLORS.GRAY_700,
    }
  })

  const locationTextAnimatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollY.value,
        [10, filterPositionY],
        [COLORS.GRAY_900, COLORS.GRAY_100],
      ),
    }
  })

  return (
    <AnimatedHeaderContainer style={fixedHeaderAnimatedStyle}>
      <LocationContainer>
        <MapPin color={COLORS.PURPLE} size={20} weight="fill" />
        <AnimatedLocationText style={locationTextAnimatedStyle}>
          {location?.city}, {location?.state}
        </AnimatedLocationText>
      </LocationContainer>

      <CartContainer>
        <ShoppingCart color={COLORS.YELLOW_DARK} size={20} weight="fill" />
      </CartContainer>
    </AnimatedHeaderContainer>
  )
}
