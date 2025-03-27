import { SvgProps } from 'react-native-svg'
import { SharedValue } from 'react-native-reanimated'

export type CoffeeCarouselProps = {
  filterPositionY: number
  scrollY: SharedValue<number>
}

export type CarouselCoffeeItem = {
  id: number
  title: string
  description: string
  price: string
  image: React.FC<SvgProps>
  tag: string
}
