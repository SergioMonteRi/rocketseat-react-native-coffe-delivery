import { useTheme } from 'styled-components/native'
import { ShoppingCart } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import { AppNavigationRoutesProps } from '@routes/AppRoutes/types'

import {
  EmptyListText,
  EmptyListButton,
  EmptyListContainer,
  EmptyListButtonText,
} from './styles'

export const EmptyList = () => {
  const { COLORS } = useTheme()
  const { navigate } = useNavigation<AppNavigationRoutesProps>()

  const handleNavigateToCatalog = () => {
    navigate('catalog')
  }

  return (
    <EmptyListContainer>
      <ShoppingCart color={COLORS.GRAY_500} weight="fill" />

      <EmptyListText>Seu carrinho está vazio</EmptyListText>

      <EmptyListButton onPress={handleNavigateToCatalog}>
        <EmptyListButtonText>VER CATÁLOGO</EmptyListButtonText>
      </EmptyListButton>
    </EmptyListContainer>
  )
}
