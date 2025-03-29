import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Minus, Plus, Trash } from 'phosphor-react-native'
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable'

import { useCart } from '@hooks/useCart'

import {
  Size,
  Title,
  Price,
  CounterText,
  InfoContainer,
  RemoveContainer,
  DetailsContainer,
  ActionsContainer,
  CounterContainer,
  CartItemContainer,
  TitleAndSizeContainer,
  SwiapeableLeftContainer,
  SwiapeableContainerStyles,
} from './styles'

import { CartItemProps } from './types'

export const CartItem = (props: CartItemProps) => {
  const { cartItem } = props
  const {
    size,
    quantity,
    item: { image: ProductImage, title, price },
  } = cartItem

  const { COLORS } = useTheme()
  const { handleRemoveItemToCart, handleUpdateItemQuantityToCart } = useCart()

  const [localQuantity, setLocalQuantity] = useState(quantity)

  const handleIncrease = () => {
    setLocalQuantity((prev) => prev + 1)

    const newQuantity = localQuantity + 1

    handleUpdateItemQuantityToCart(size, cartItem.item, newQuantity)
  }

  const handleDecrease = () => {
    setLocalQuantity((prev) => Math.max(1, prev - 1))

    const newQuantity = localQuantity - 1

    handleUpdateItemQuantityToCart(size, cartItem.item, newQuantity)
  }

  return (
    <Swipeable
      leftThreshold={10}
      containerStyle={SwiapeableContainerStyles.leftContainer}
      renderRightActions={() => null}
      onSwipeableOpen={() => handleRemoveItemToCart(size, cartItem.item)}
      renderLeftActions={() => (
        <SwiapeableLeftContainer>
          <Trash size={28} color={COLORS.RED_DARK} />
        </SwiapeableLeftContainer>
      )}
    >
      <CartItemContainer>
        <ProductImage width={64} height={64} />

        <InfoContainer>
          <DetailsContainer>
            <TitleAndSizeContainer>
              <Title>{title}</Title>
              <Size>{size}ml</Size>
            </TitleAndSizeContainer>

            <Price>R$ {price}</Price>
          </DetailsContainer>

          <ActionsContainer>
            <CounterContainer>
              <TouchableOpacity onPress={handleDecrease}>
                <Minus size={20} color={COLORS.PURPLE} weight="bold" />
              </TouchableOpacity>

              <CounterText>{localQuantity}</CounterText>

              <TouchableOpacity onPress={handleIncrease}>
                <Plus size={20} color={COLORS.PURPLE} weight="bold" />
              </TouchableOpacity>
            </CounterContainer>

            <RemoveContainer
              onPress={() => handleRemoveItemToCart(size, cartItem.item)}
            >
              <Trash size={20} color={COLORS.PURPLE} />
            </RemoveContainer>
          </ActionsContainer>
        </InfoContainer>
      </CartItemContainer>
    </Swipeable>
  )
}
