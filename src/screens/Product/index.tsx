import { StatusBar } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Content } from './components/Content'

import { ProductScrollContainer, ProductContentContainer } from './styles'

import { ProductRouteParams } from './types'

export const Product = () => {
  const routeParams = useRoute().params as ProductRouteParams
  const { itemDetails } = routeParams

  return (
    <ProductScrollContainer
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <StatusBar barStyle="light-content" />

      <ProductContentContainer>
        <Header />

        <Content itemDetails={itemDetails} />
      </ProductContentContainer>

      <Footer />
    </ProductScrollContainer>
  )
}
