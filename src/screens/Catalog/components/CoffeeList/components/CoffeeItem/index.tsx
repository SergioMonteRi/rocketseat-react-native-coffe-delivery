import { useNavigation } from '@react-navigation/native'

import { slideDownToUpAnimation } from '@screens/Catalog/animations'

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

import { AppNavigationRoutesProps } from '@routes/AppRoutes/types'

import { CoffeeItemProps } from './type'

export const CoffeeItem = ({ item }: CoffeeItemProps) => {
  const { image: ItemImage, title, description, price } = item

  const navigator = useNavigation<AppNavigationRoutesProps>()

  const handleProductNavigation = () => {
    navigator.navigate('product', {
      itemDetails: { ...item },
    })
  }

  return (
    <CoffeeItemContainer
      entering={slideDownToUpAnimation}
      onPress={handleProductNavigation}
    >
      <ImageContainer>
        <ImageWrapper>
          <ItemImage />
        </ImageWrapper>
      </ImageContainer>

      <TextContainer>
        <Name>{title}</Name>

        <Description>{description}</Description>

        <PriceContainer>
          <Currency>R$</Currency>
          <Price>{price}</Price>
        </PriceContainer>
      </TextContainer>
    </CoffeeItemContainer>
  )
}
