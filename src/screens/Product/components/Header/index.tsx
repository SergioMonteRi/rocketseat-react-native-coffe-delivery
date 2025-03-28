import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'

import { AppNavigationRoutesProps } from '@routes/AppRoutes/types'

import { CartIconWithBadge } from '@components/CartIconWithBadge'

import { HeaderContainer } from './styles'

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

      <CartIconWithBadge />
    </HeaderContainer>
  )
}
