import { FILTERS_OPTIONS } from './constants'

import {
  Tag,
  Title,
  TagContainer,
  FilterContainer,
  FilterOptionsContainer,
} from './styles'

export const Filter = () => {
  return (
    <FilterContainer>
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
