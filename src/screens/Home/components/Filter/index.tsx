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

export const Filter = ({ setFilterPositionY }: FilterProps) => {
  const handleLayout = (event: LayoutChangeEvent) => {
    if (!setFilterPositionY) return

    const { y } = event.nativeEvent.layout

    setFilterPositionY(y)
  }

  return (
    <FilterContainer onLayout={handleLayout}>
      <Title>Nossos cafés</Title>

      <FilterOptionsContainer>
        {FILTERS_OPTIONS.map((option) => (
          <TagContainer key={option}>
            <Tag>{option}</Tag>
          </TagContainer>
        ))}
      </FilterOptionsContainer>
    </FilterContainer>
  )
}
