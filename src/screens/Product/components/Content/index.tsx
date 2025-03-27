import { AnimatedSmoke } from './components/AnimatedSmoke'

import {
  Tag,
  Title,
  Price,
  Currency,
  StyledImage,
  Description,
  PriceContainer,
  ImageContainer,
  ContentContainer,
  TitleAndPriceContainer,
} from './styles'

import CoffeeImg from '@assets/images/coffees/coffee.png'

export const Content = () => {
  return (
    <ContentContainer>
      <Tag>ESPECIAL</Tag>

      <TitleAndPriceContainer>
        <Title>Irlandês</Title>

        <PriceContainer>
          <Currency>R$</Currency>
          <Price>9,90</Price>
        </PriceContainer>
      </TitleAndPriceContainer>

      <Description>
        Bebida a base de café, uísque irlandês, açúcar e chantilly
      </Description>

      <ImageContainer>
        <AnimatedSmoke />
        <StyledImage source={CoffeeImg} />
      </ImageContainer>
    </ContentContainer>
  )
}
