import { SharedValue } from 'react-native-reanimated'
import { CarouselCoffeeItem } from '../../type'

export type CoffeCardProps = {
  index: number
  scrollX: SharedValue<number>
  item: CarouselCoffeeItem
}
