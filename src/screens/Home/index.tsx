import { Header } from './components/Header'
import { Filter } from './components/Filter'
import { CoffeeList } from './components/CoffeeList'
import { CoffeeCarousel } from './components/CoffeeCarousel'

import { enteringAnimation } from './animations'

import {
  HeaderWrapper,
  HomeContainer,
  AnimatedCarouselWrapper,
  CarouselAndFilterWrapper,
  CoffeListHeaderContainer,
} from './styles'
import { memo } from 'react'

export const Home = () => {
  const CoffeeListHeader = memo(() => {
    return (
      <CoffeListHeaderContainer>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>

        <CarouselAndFilterWrapper>
          <AnimatedCarouselWrapper entering={enteringAnimation}>
            <CoffeeCarousel />
          </AnimatedCarouselWrapper>

          <Filter />
        </CarouselAndFilterWrapper>
      </CoffeListHeaderContainer>
    )
  })

  CoffeeListHeader.displayName = 'CoffeeListHeader'

  return (
    <HomeContainer>
      <CoffeeList listHeaderComponent={CoffeeListHeader} />
    </HomeContainer>
  )
}
