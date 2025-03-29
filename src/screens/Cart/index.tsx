import { StatusBar } from 'react-native'

import { useCart } from '@hooks/useCart'

import { CartList } from './components/CartList'
import { CartHeader } from './components/CartHeader'
import { CartFooter } from './components/CartFooter'

import { CartContainer } from './styles'

export const Cart = () => {
  const { cartTotalValue } = useCart()

  return (
    <CartContainer>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />

      <CartHeader />

      <CartList />

      {cartTotalValue > 0 && <CartFooter total={cartTotalValue} />}
    </CartContainer>
  )
}
