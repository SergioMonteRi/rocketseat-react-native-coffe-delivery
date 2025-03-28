import { CatalogueItem } from '@utils/types/types'

export type CartContextDataProps = {
  cartQuantity: number
  cartItems: { item: CatalogueItem; quantity: number; size: number }[]
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
