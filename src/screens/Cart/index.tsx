import { CartHeader } from './components/CartHeader'
import { CartList } from './components/CartList'

import { CartContainer } from './styles'

export const Cart = () => {
  return (
    <CartContainer>
      <CartHeader />

      <CartList />
    </CartContainer>
  )
}
