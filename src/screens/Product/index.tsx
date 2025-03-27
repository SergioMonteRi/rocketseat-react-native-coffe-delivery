import { StatusBar } from 'react-native'

import { Header } from './components/Header'

import { ProductScrollContainer, ProductContentContainer } from './styles'

export const Product = () => {
  return (
    <ProductScrollContainer>
      <ProductContentContainer>
        <StatusBar barStyle="light-content" />

        <Header />
      </ProductContentContainer>
    </ProductScrollContainer>
  )
}
