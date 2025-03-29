import Animated, {
  SlideOutRight,
  LinearTransition,
} from 'react-native-reanimated'

import { useCart } from '@hooks/useCart'

import { CartItem } from './components/CartItem'
import { EmptyList } from './components/EmptyList'

export const CartList = () => {
  const { cartItems } = useCart()

  return (
    <Animated.FlatList
      data={cartItems}
      keyExtractor={(item) => `${item.item.id}-${item.size}`}
      renderItem={({ item }) => {
        return (
          <Animated.View
            exiting={SlideOutRight}
            layout={LinearTransition.springify()}
          >
            <CartItem cartItem={item} />
          </Animated.View>
        )
      }}
      ListEmptyComponent={() => <EmptyList />}
      itemLayoutAnimation={LinearTransition.springify()}
    />
  )
}
