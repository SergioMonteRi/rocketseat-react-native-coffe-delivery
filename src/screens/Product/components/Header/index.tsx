import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { ArrowLeft, ShoppingCart } from 'phosphor-react-native'

import { HeaderContainer } from './styles'

export const Header = () => {
  const { COLORS } = useTheme()

  return (
    <HeaderContainer>
      <TouchableOpacity>
        <ArrowLeft color={COLORS.WHITE} size={24} />
      </TouchableOpacity>

      <ShoppingCart color={COLORS.PURPLE} size={20} weight="fill" />
    </HeaderContainer>
  )
}
