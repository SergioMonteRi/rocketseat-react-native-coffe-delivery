import { useNavigation } from '@react-navigation/native'
import {
  TotalValue,
  ButtonText,
  TotalValueText,
  ButtonContainer,
  CartFooterContainer,
  TotalValueContainer,
} from './styles'

import { AppNavigationRoutesProps } from '@routes/AppRoutes/types'

import { CartFooterProps } from './types'

export const CartFooter = ({ total }: CartFooterProps) => {
  const { navigate } = useNavigation<AppNavigationRoutesProps>()

  const handleNavigateToCheckoutSucess = () => {
    navigate('checkoutSuccess')
  }

  return (
    <CartFooterContainer>
      <TotalValueContainer>
        <TotalValueText>Valor total</TotalValueText>
        <TotalValue>R$ {total.toFixed(2)}</TotalValue>
      </TotalValueContainer>

      <ButtonContainer onPress={handleNavigateToCheckoutSucess}>
        <ButtonText>CONFIRMAR PEDIDO</ButtonText>
      </ButtonContainer>
    </CartFooterContainer>
  )
}
