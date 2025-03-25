import Traditional from '@assets/images/coffees/tradicional.svg'
import American from '@assets/images/coffees/americano.svg'
import Smooth from '@assets/images/coffees/expresso_cremoso.svg'
import Latte from '@assets/images/coffees/latte.svg'
import Frozen from '@assets/images/coffees/gelado.svg'
import Capuccino from '@assets/images/coffees/capuccino.svg'
import Mochaccino from '@assets/images/coffees/mochaccino.svg'

export const COFFEE_LIST = [
  {
    title: 'Tradicionais',
    data: [
      {
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: '9,90',
        image: Traditional,
      },
      {
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: '9,90',
        image: American,
      },
      {
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: '9,90',
        image: Smooth,
      },
      {
        name: 'Latte',
        description: 'Café expresso com o dobro de leite e espuma cremosa',
        price: '9,90',
        image: Latte,
      },
      {
        name: 'Expresso Gelado',
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
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses de café, leite e espuma',
        price: '9,90',
        image: Capuccino,
      },
      {
        name: 'Mocaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        price: '9,90',
        image: Mochaccino,
      },
    ],
  },
]
