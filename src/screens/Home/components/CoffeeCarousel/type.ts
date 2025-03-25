import { SvgProps } from 'react-native-svg'

export type CarouselCoffeeItem = {
  id: number
  title: string
  description: string
  price: string
  image: React.FC<SvgProps>
  tag: string
}
