import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft, ShoppingCart } from 'phosphor-react-native'

import { useCart } from '@hooks/useCart'

import { AppNavigationRoutesProps } from '@routes/AppRoutes/types'

import {
  CartCounter,
  CartContainer,
  HeaderContainer,
  CartCounterContainer,
} from './styles'

export const Header = () => {
  const { COLORS } = useTheme()
  const { cartQuantity } = useCart()

  const navigator = useNavigation<AppNavigationRoutesProps>()

  const handleBackPress = () => {
    navigator.goBack()
  }

  return (
    <HeaderContainer>
      <TouchableOpacity onPress={handleBackPress}>
        <ArrowLeft color={COLORS.WHITE} size={24} />
      </TouchableOpacity>

      <CartContainer>
        {cartQuantity > 0 && (
          <CartCounterContainer>
            <CartCounter>{cartQuantity}</CartCounter>
          </CartCounterContainer>
        )}
        <ShoppingCart color={COLORS.PURPLE} size={20} weight="fill" />
      </CartContainer>
    </HeaderContainer>
  )
}
