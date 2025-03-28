import { useTheme } from 'styled-components/native'
import { ShoppingCart } from 'phosphor-react-native'

import { useCart } from '@hooks/useCart'

import {
  BadgeCounter,
  BadgeContainer,
  CartIconWithBadgeContainer,
} from './styles'

import { CartIconWithBadgeProps } from './types'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationRoutesProps } from '@routes/AppRoutes/types'

export const CartIconWithBadge = (props: CartIconWithBadgeProps) => {
  const { bgColor = 'PURPLE' } = props

  const { COLORS } = useTheme()
  const { cartQuantity } = useCart()
  const { navigate } = useNavigation<AppNavigationRoutesProps>()

  const handleNavigateToCart = () => {
    navigate('cart')
  }

  return (
    <CartIconWithBadgeContainer onPress={handleNavigateToCart}>
      {cartQuantity > 0 && (
        <BadgeContainer bgColor={bgColor}>
          <BadgeCounter>{cartQuantity}</BadgeCounter>
        </BadgeContainer>
      )}
      <ShoppingCart color={COLORS[bgColor]} size={20} weight="fill" />
    </CartIconWithBadgeContainer>
  )
}
