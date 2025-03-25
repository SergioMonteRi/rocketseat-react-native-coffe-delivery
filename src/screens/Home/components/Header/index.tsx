import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useLocation } from '@hooks/useLocation'
import { useTheme } from 'styled-components/native'
import { MapPin, ShoppingCart, MagnifyingGlass } from 'phosphor-react-native'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

import {
  BgImage,
  FilterTitle,
  FilterInput,
  TopContainer,
  LocationText,
  CartContainer,
  HeaderContainer,
  FilterContainer,
  LocationContainer,
  FilterInputContainer,
} from './styles'

import CoffeeBgImage from '@assets/images/backgrounds/coffee-bg.png'

export const Header = () => {
  const { COLORS } = useTheme()
  const { location } = useLocation()

  const [isFilterFocused, setIsFilterFocused] = useState(false)
  const [filterValue, setFilterValue] = useState('')

  const filterIconColor = isFilterFocused
    ? COLORS.YELLOW
    : filterValue.length > 0
      ? COLORS.YELLOW_DARK
      : COLORS.GRAY_400

  const handleSearch = () => {
    console.log('pressionou', filterValue)
    Keyboard.dismiss()
  }

  return (
    <HeaderContainer>
      <StatusBar style="light" />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <TopContainer>
            <LocationContainer>
              <MapPin color={COLORS.PURPLE} size={20} weight="fill" />
              <LocationText>
                {location?.city}, {location?.state}
              </LocationText>
            </LocationContainer>

            <CartContainer>
              <ShoppingCart
                color={COLORS.YELLOW_DARK}
                size={20}
                weight="fill"
              />
            </CartContainer>
          </TopContainer>

          <FilterContainer>
            <FilterTitle>
              Encontre o café perfeito para qualquer hora do dia
            </FilterTitle>

            <FilterInputContainer>
              <MagnifyingGlass color={filterIconColor} />
              <FilterInput
                value={filterValue}
                placeholder={'Buscar café'}
                returnKeyType={'search'}
                onChangeText={setFilterValue}
                onSubmitEditing={handleSearch}
                onFocus={() => setIsFilterFocused(true)}
                onBlur={() => setIsFilterFocused(false)}
              />
            </FilterInputContainer>
          </FilterContainer>

          <BgImage source={CoffeeBgImage} />
        </>
      </TouchableWithoutFeedback>
    </HeaderContainer>
  )
}
