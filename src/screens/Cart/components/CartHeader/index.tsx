import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import { AppNavigationRoutesProps } from '@routes/AppRoutes/types'

import { BackIconContainer, CartHeaderContainer, HeaderTitle } from './styles'

export const CartHeader = () => {
  const { COLORS } = useTheme()
  const { goBack } = useNavigation<AppNavigationRoutesProps>()

  const handleBackPress = () => {
    goBack()
  }

  return (
    <CartHeaderContainer>
      <BackIconContainer onPress={handleBackPress}>
        <ArrowLeft color={COLORS.GRAY_100} size={24} />
      </BackIconContainer>

      <HeaderTitle>Carrinho</HeaderTitle>
    </CartHeaderContainer>
  )
}
