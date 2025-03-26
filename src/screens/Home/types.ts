import { COFFEE_LIST } from './constants'

export type CoffeeItemList = (typeof COFFEE_LIST)[number]['data'][number]
