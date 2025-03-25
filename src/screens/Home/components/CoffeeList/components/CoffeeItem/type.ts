import { SvgProps } from 'react-native-svg'

export type CoffeeItemProps = {
  item: {
    name: string
    price: string
    description: string
    image: React.FC<SvgProps>
  }
}
