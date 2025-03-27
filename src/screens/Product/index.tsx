import { StatusBar } from 'react-native'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Content } from './components/Content'

import { ProductScrollContainer, ProductContentContainer } from './styles'

export const Product = () => {
  return (
    <ProductScrollContainer
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <StatusBar barStyle="light-content" />

      <ProductContentContainer>
        <Header />

        <Content />
      </ProductContentContainer>

      <Footer />
    </ProductScrollContainer>
  )
}
