import { CoffeeItemProps } from './type'

import {
  Name,
  Price,
  Currency,
  Description,
  ImageWrapper,
  TextContainer,
  ImageContainer,
  PriceContainer,
  CoffeeItemContainer,
} from './styles'

import { slideDownToUpAnimation } from '@screens/Catalog/animations'

export const CoffeeItem = ({ item }: CoffeeItemProps) => {
  const { image: ItemImage, name, description, price } = item

  return (
    <CoffeeItemContainer entering={slideDownToUpAnimation}>
      <ImageContainer>
        <ImageWrapper>
          <ItemImage />
        </ImageWrapper>
      </ImageContainer>

      <TextContainer>
        <Name>{name}</Name>

        <Description>{description}</Description>

        <PriceContainer>
          <Currency>R$</Currency>
          <Price>{price}</Price>
        </PriceContainer>
      </TextContainer>
    </CoffeeItemContainer>
  )
}
