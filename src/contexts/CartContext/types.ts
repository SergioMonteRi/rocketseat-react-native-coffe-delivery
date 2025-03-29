import { CatalogueItem } from '@utils/types/types'

export type CartContextDataProps = {
  cartQuantity: number
  cartTotalValue: number
  cartItems: { item: CatalogueItem; quantity: number; size: number }[]
  handleRemoveItemToCart: (size: number, item: CatalogueItem) => void
  handleAddToCart: (item: CatalogueItem, quantity: number, size: number) => void
  handleUpdateItemQuantityToCart: (
    size: number,
    item: CatalogueItem,
    newQuantity: number,
  ) => void
}

export type CartContextProviderProps = {
  children: React.ReactNode
}
