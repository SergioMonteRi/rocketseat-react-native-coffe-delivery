import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft, ShoppingCart } from 'phosphor-react-native'

import { HeaderContainer } from './styles'

import { AppNavigationRoutesProps } from '@routes/AppRoutes/types'

export const Header = () => {
  const { COLORS } = useTheme()

  const navigator = useNavigation<AppNavigationRoutesProps>()

  const handleBackPress = () => {
    navigator.goBack()
  }

  return (
    <HeaderContainer>
      <TouchableOpacity onPress={handleBackPress}>
        <ArrowLeft color={COLORS.WHITE} size={24} />
      </TouchableOpacity>

      <ShoppingCart color={COLORS.PURPLE} size={20} weight="fill" />
    </HeaderContainer>
  )
}
