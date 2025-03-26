import { LayoutChangeEvent } from 'react-native'

import { FILTERS_OPTIONS } from './constants'

import {
  Tag,
  Title,
  TagContainer,
  FilterContainer,
  FilterOptionsContainer,
} from './styles'

import { FilterProps } from './types'

export const Filter = (props: FilterProps) => {
  const { isFixed, setFilterPositionY, handleFilterPress } = props

  const handleLayout = (event: LayoutChangeEvent) => {
    if (!setFilterPositionY) return

    const { y } = event.nativeEvent.layout

    setFilterPositionY(y)
  }

  return (
    <FilterContainer isFixed={isFixed} onLayout={handleLayout}>
      <Title>Nossos cafés</Title>

      <FilterOptionsContainer>
        {FILTERS_OPTIONS.map((option) => (
          <TagContainer
            key={option}
            onPress={() => handleFilterPress(option.toUpperCase())}
          >
            <Tag>{option}</Tag>
          </TagContainer>
        ))}
      </FilterOptionsContainer>
    </FilterContainer>
  )
}
