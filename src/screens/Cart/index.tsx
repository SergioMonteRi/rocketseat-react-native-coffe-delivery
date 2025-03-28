import { View } from 'react-native'

import { CartHeader } from './components/CartHeader'
import { CartList } from './components/CartList'

export const Cart = () => {
  return (
    <View>
      <CartHeader />

      <CartList />
    </View>
  )
}
