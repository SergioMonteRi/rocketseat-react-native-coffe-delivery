import LatteSvg from '@assets/images/coffees/latte.svg'
import IrishSvg from '@assets/images/coffees/irlandes.svg'
import MochaccinoSvg from '@assets/images/coffees/mochaccino.svg'

import { CatalogueItem } from '@utils/types/types'

export const COFFEE_CAROUSEL_DATA: CatalogueItem[] = [
  {
    id: 1,
    title: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    image: LatteSvg,
    price: '9,90',
    tag: 'TRADICIONAL',
  },
  {
    id: 2,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, leite e espuma',
    image: MochaccinoSvg,
    price: '9,90',
    tag: 'DOCE',
  },
  {
    id: 3,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: IrishSvg,
    price: '9,90',
    tag: 'ESPECIAL',
  },
]
