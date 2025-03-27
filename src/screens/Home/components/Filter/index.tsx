import { LayoutChangeEvent } from 'react-native'

import { FILTERS_OPTIONS } from './constants'

import { FilterTag } from './components/FilterTag'

import { Title, FilterContainer, FilterOptionsContainer } from './styles'

import { FilterProps } from './types'

export const Filter = (props: FilterProps) => {
  const {
    isFixed,
    scrollY,
    setFilterPositionY,
    sectionsPositionsY,
    handleFilterPress,
  } = props

  const handleLayout = (event: LayoutChangeEvent) => {
    if (!setFilterPositionY) return

    const { y } = event.nativeEvent.layout

    setFilterPositionY(y)
  }

  const onFilterPress = (filterName: string) => {
    handleFilterPress(filterName.toUpperCase())
  }

  return (
    <FilterContainer isFixed={isFixed} onLayout={handleLayout}>
      <Title>Nossos cafés</Title>

      <FilterOptionsContainer>
        {FILTERS_OPTIONS.map((option) => (
          <FilterTag
            key={option}
            option={option.toUpperCase()}
            scrollY={scrollY}
            sectionsPositionsY={sectionsPositionsY}
            onPress={onFilterPress}
          />
        ))}
      </FilterOptionsContainer>
    </FilterContainer>
  )
}
