import { MagnifyingGlass } from 'phosphor-react-native'
import {
  BgImage,
  ContentContainer,
  InputContainer,
  InputText,
  AnimatedSearchContainer,
  Title,
} from './styles'
import { useState } from 'react'
import { useTheme } from 'styled-components/native'

import CoffeeBgImage from '@assets/images/backgrounds/coffee-bg.png'
import { Keyboard } from 'react-native'
import { SearchProps } from './types'
import { interpolateColor, useAnimatedStyle } from 'react-native-reanimated'

export const Search = (props: SearchProps) => {
  const { filterPositionY, scrollY } = props

  const { COLORS } = useTheme()

  const [isFilterFocused, setIsFilterFocused] = useState(false)
  const [filterValue, setFilterValue] = useState('')

  const filterIconColor = isFilterFocused
    ? COLORS.YELLOW
    : filterValue.length > 0
      ? COLORS.YELLOW_DARK
      : COLORS.GRAY_400

  const handleSearch = () => {
    Keyboard.dismiss()
  }

  const animatedSearchContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [10, filterPositionY],
        [COLORS.GRAY_100, COLORS.WHITE],
      ),
    }
  })

  return (
    <AnimatedSearchContainer style={animatedSearchContainerStyle}>
      <ContentContainer>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>

        <InputContainer>
          <MagnifyingGlass color={filterIconColor} />
          <InputText
            value={filterValue}
            placeholder={'Buscar café'}
            returnKeyType={'search'}
            onChangeText={setFilterValue}
            onSubmitEditing={handleSearch}
            onFocus={() => setIsFilterFocused(true)}
            onBlur={() => setIsFilterFocused(false)}
          />
        </InputContainer>
      </ContentContainer>

      <BgImage source={CoffeeBgImage} />
    </AnimatedSearchContainer>
  )
}
