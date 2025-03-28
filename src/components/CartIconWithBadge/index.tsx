import { useTheme } from 'styled-components/native'
import { ShoppingCart } from 'phosphor-react-native'

import { useCart } from '@hooks/useCart'

import {
  BadgeCounter,
  BadgeContainer,
  CartIconWithBadgeContainer,
} from './styles'

import { CartIconWithBadgeProps } from './types'

export const CartIconWithBadge = (props: CartIconWithBadgeProps) => {
  const { bgColor = 'PURPLE' } = props

  const { COLORS } = useTheme()
  const { cartQuantity } = useCart()

  return (
    <CartIconWithBadgeContainer>
      {cartQuantity > 0 && (
        <BadgeContainer bgColor={bgColor}>
          <BadgeCounter>{cartQuantity}</BadgeCounter>
        </BadgeContainer>
      )}
      <ShoppingCart color={COLORS[bgColor]} size={20} weight="fill" />
    </CartIconWithBadgeContainer>
  )
}
