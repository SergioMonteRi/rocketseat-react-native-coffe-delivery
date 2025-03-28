import { FlatList } from 'react-native'

import { useCart } from '@hooks/useCart'

import { CartItem } from './components/CartItem'

export const CartList = () => {
  const { cartItems } = useCart()

  return (
    <FlatList
      data={cartItems}
      keyExtractor={(item, index) => item.item.id + index.toString()}
      renderItem={({ item, index }) => {
        return (
          <CartItem key={item.item.id + index.toString()} cartItem={item} />
        )
      }}
    />
  )
}
