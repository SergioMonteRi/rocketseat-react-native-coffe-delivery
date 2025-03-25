import { Header } from './components/Header'
import { CoffeeCarousel } from './components/CoffeeCarousel'
import { CarouselWrapper, HeaderWrapper, HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <CarouselWrapper>
        <CoffeeCarousel />
      </CarouselWrapper>
    </HomeContainer>
  )
}
