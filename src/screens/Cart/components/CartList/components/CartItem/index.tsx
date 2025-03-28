import {
  Size,
  Title,
  Price,
  InfoContainer,
  DetailsContainer,
  CartItemContainer,
  TitleAndSizeContainer,
} from './styles'

import { CartItemProps } from './types'

export const CartItem = (props: CartItemProps) => {
  const { cartItem } = props
  const {
    size,
    item: { image: ProductImage, title, price },
  } = cartItem

  return (
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
      </InfoContainer>
    </CartItemContainer>
  )
}
