import Traditional from '@assets/images/coffees/tradicional.svg'
import American from '@assets/images/coffees/americano.svg'
import Smooth from '@assets/images/coffees/expresso_cremoso.svg'
import Latte from '@assets/images/coffees/latte.svg'
import Frozen from '@assets/images/coffees/gelado.svg'
import Capuccino from '@assets/images/coffees/capuccino.svg'
import Mochaccino from '@assets/images/coffees/mochaccino.svg'
import HotChocolate from '@assets/images/coffees/chocolate_quente.svg'
import Cuban from '@assets/images/coffees/cubano.svg'
import Hawai from '@assets/images/coffees/havaiano.svg'
import Arabic from '@assets/images/coffees/arabe.svg'
import Irish from '@assets/images/coffees/irlandes.svg'

import { CatalogueList } from '@utils/types/types'

export const HEADER_HEIGHT = 116
export const FILTER_HEIGHT = 100

export const COFFEE_LIST: CatalogueList = [
  {
    title: 'Tradicionais',
    data: [
      {
        id: 1,
        tag: 'TRADICIONAL',
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: '9,90',
        image: Traditional,
      },
      {
        id: 2,
        tag: 'TRADICIONAL',
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: '9,90',
        image: American,
      },
      {
        id: 3,
        tag: 'TRADICIONAL',
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: '9,90',
        image: Smooth,
      },
      {
        id: 4,
        tag: 'TRADICIONAL',
        title: 'Latte',
        description: 'Café expresso com o dobro de leite e espuma cremosa',
        price: '9,90',
        image: Latte,
      },
      {
        id: 5,
        tag: 'TRADICIONAL',
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: '9,90',
        image: Frozen,
      },
    ],
  },
  {
    title: 'Doces',
    data: [
      {
        id: 6,
        tag: 'DOCE',
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses de café, leite e espuma',
        price: '9,90',
        image: Capuccino,
      },
      {
        id: 7,
        tag: 'DOCE',
        title: 'Mocaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        price: '9,90',
        image: Mochaccino,
      },
      {
        id: 8,
        tag: 'DOCE',
        title: 'Chocolate Quente',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        price: '9,90',
        image: HotChocolate,
      },
    ],
  },
  {
    title: 'Especiais',
    data: [
      {
        id: 9,
        tag: 'ESPECIAL',
        title: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: '9,90',
        image: Cuban,
      },
      {
        id: 10,
        tag: 'ESPECIAL',
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: '9,90',
        image: Hawai,
      },
      {
        id: 11,
        tag: 'ESPECIAL',
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: '9,90',
        image: Arabic,
      },
      {
        id: 12,
        tag: 'ESPECIAL',
        title: 'Irlandês',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: '9,90',
        image: Irish,
      },
    ],
  },
]
