import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { CatalogueItem } from '@utils/types/types'

export type AppRoutesProps = {
  catalog: undefined
  product: {
    itemDetails: CatalogueItem
  }
  cart: undefined
}

export type AppNavigationRoutesProps = NativeStackNavigationProp<AppRoutesProps>
