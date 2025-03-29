import { createContext, useCallback, useEffect, useState } from 'react'

import { CatalogueItem } from '@utils/types/types'

import { CartContextDataProps, CartContextProviderProps } from './types'

export const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps,
)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<
    { item: CatalogueItem; quantity: number; size: number }[]
  >([])

  const [cartQuantity, setCartQuantity] = useState<number>(0)
  const [cartTotalValue, setCartTotalValue] = useState<number>(0)

  const handleAddToCart = useCallback(
    (item: CatalogueItem, quantity: number, size: number) => {
      setCartItems((prev) => {
        const existingItemIndex = prev.findIndex(
          (cartItem) => cartItem.item.id === item.id && cartItem.size === size,
        )

        if (existingItemIndex >= 0) {
          const updatedItems = [...prev]

          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + quantity,
          }

          return updatedItems
        } else {
          return [...prev, { item, quantity, size }]
        }
      })
    },
    [],
  )

  const handleRemoveItemToCart = useCallback(
    (size: number, item: CatalogueItem) => {
      setCartItems((prev) => {
        const updatedItems = prev.filter(
          (cartItem) =>
            !(cartItem.item.id === item.id && cartItem.size === size),
        )
        return updatedItems
      })
    },
    [],
  )

  const handleUpdateItemQuantityToCart = useCallback(
    (size: number, item: CatalogueItem, newQuantity: number) => {
      setCartItems((prev) => {
        const updatedItems = prev.map((cartItem) => {
          if (cartItem.item.id === item.id && cartItem.size === size) {
            return {
              ...cartItem,
              quantity: newQuantity,
            }
          }
          return cartItem
        })
        return updatedItems
      })
    },
    [],
  )

  useEffect(() => {
    const totalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0,
    )

    const totalValue = cartItems.reduce((total, item) => {
      const priceNumber = parseFloat(item.item.price.replace(',', '.'))

      return total + priceNumber * item.quantity
    }, 0)

    setCartQuantity(totalQuantity)
    setCartTotalValue(totalValue)
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartTotalValue,
        handleAddToCart,
        handleRemoveItemToCart,
        handleUpdateItemQuantityToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
