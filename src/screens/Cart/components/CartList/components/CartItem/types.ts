import { CatalogueItem } from '@utils/types/types'

export type CartItemProps = {
  cartItem: {
    size: number
    quantity: number
    item: CatalogueItem
  }
}
