import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Catalog } from '@screens/Catalog'
import { Product } from '@screens/Product'

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
    </Navigator>
  )
}
