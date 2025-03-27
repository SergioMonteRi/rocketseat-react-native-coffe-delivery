import { SvgProps } from 'react-native-svg'

export type Tag = 'TRADICIONAL' | 'DOCE' | 'ESPECIAL'

export type CatalogueItem = {
  id: number
  tag: Tag
  title: string
  price: string
  description: string
  image: React.FC<SvgProps>
}

export type CatalogueList = {
  title: string
  data: CatalogueItem[]
}[]
