import { SharedValue } from 'react-native-reanimated'

import { CatalogueItem } from '@utils/types/types'

export type CoffeCardProps = {
  index: number
  item: CatalogueItem
  scrollX: SharedValue<number>
}
