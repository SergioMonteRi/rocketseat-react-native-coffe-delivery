import {
  TotalValue,
  ButtonText,
  TotalValueText,
  ButtonContainer,
  CartFooterContainer,
  TotalValueContainer,
} from './styles'

import { CartFooterProps } from './types'

export const CartFooter = ({ total }: CartFooterProps) => {
  return (
    <CartFooterContainer>
      <TotalValueContainer>
        <TotalValueText>Valor total</TotalValueText>
        <TotalValue>R$ {total.toFixed(2)}</TotalValue>
      </TotalValueContainer>

      <ButtonContainer>
        <ButtonText>CONFIRMAR PEDIDO</ButtonText>
      </ButtonContainer>
    </CartFooterContainer>
  )
}
