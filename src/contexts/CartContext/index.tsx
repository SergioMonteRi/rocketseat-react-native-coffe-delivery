import { createContext, useCallback, useEffect, useState } from 'react'

import { CatalogueItem } from '@utils/types/types'

import { CartContextDataProps, CartContextProviderProps } from './types'

import Irish from '@assets/images/coffees/irlandes.svg'
import Traditional from '@assets/images/coffees/tradicional.svg'

export const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps,
)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<
    { item: CatalogueItem; quantity: number; size: number }[]
  >([
    {
      item: {
        id: 1,
        tag: 'TRADICIONAL',
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: '9,90',
        image: Traditional,
      },
      quantity: 2,
      size: 140,
    },
    {
      item: {
        id: 12,
        tag: 'ESPECIAL',
        title: 'Irlandês',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: '9,90',
        image: Irish,
      },
      quantity: 1,
      size: 114,
    },
  ])

  const [cartQuantity, setCartQuantity] = useState<number>(0)

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
          (cartItem) => cartItem.item.id !== item.id && cartItem.size !== size,
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

    setCartQuantity(totalQuantity)
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        handleAddToCart,
        handleRemoveItemToCart,
        handleUpdateItemQuantityToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
