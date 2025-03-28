import { useContext } from 'react'

import { CartContext } from '@contexts/CartContext'

export const useCart = () => {
  try {
    const contex = useContext(CartContext)

    return contex
  } catch (error) {
    throw new Error('Error to use CartContex')
  }
}
