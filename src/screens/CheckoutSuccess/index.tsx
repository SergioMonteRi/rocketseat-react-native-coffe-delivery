import Animated from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

import { slideInRight } from './animations'

import {
  SuccessTitle,
  SuccessSubtitle,
  BackToCatalogButton,
  BackToCatalogButtonText,
  CheckoutSuccessContainer,
} from './styles'

import { AppNavigationRoutesProps } from '@routes/AppRoutes/types'

import ManMotorcycleSvg from '@assets/images/checkout/man_motorcycle.svg'

export const CheckoutSuccess = () => {
  const { navigate } = useNavigation<AppNavigationRoutesProps>()

  const handleBackToCatalog = () => {
    navigate('catalog')
  }

  return (
    <CheckoutSuccessContainer>
      <Animated.View entering={slideInRight}>
        <ManMotorcycleSvg />
      </Animated.View>

      <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>

      <SuccessSubtitle>
        Agora é só aguardar que logo o café chegará até você!
      </SuccessSubtitle>

      <BackToCatalogButton onPress={handleBackToCatalog}>
        <BackToCatalogButtonText>IR PARA O CATÁLOGO</BackToCatalogButtonText>
      </BackToCatalogButton>
    </CheckoutSuccessContainer>
  )
}
