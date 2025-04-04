import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Cart } from '@screens/Cart'
import { Catalog } from '@screens/Catalog'
import { Product } from '@screens/Product'
import { CheckoutSuccess } from '@screens/CheckoutSuccess'

import { AppRoutesProps } from './types'

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesProps>()

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="catalog" component={Catalog} />
      <Screen name="product" component={Product} />
      <Screen name="cart" component={Cart} />
      <Screen name="checkoutSuccess" component={CheckoutSuccess} />
    </Navigator>
  )
}
