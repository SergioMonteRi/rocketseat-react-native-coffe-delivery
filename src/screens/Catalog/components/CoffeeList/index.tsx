import { LayoutChangeEvent, View } from 'react-native'

import { COFFEE_LIST } from '../../constants'

import { CoffeeItem } from './components/CoffeeItem'

import { CoffeeListContainer, SectionTitle } from './styles'

import { CoffeeListProps } from './types'

export const CoffeeList = (props: CoffeeListProps) => {
  const { setCoffeeListSectionsYpositions } = props

  const handleSectionLayout = (title: string, event: LayoutChangeEvent) => {
    setCoffeeListSectionsYpositions(title.toUpperCase(), event)
  }

  return (
    <CoffeeListContainer>
      {COFFEE_LIST.map((listItem) => (
        <View
          key={listItem.title}
          onLayout={(e) => handleSectionLayout(listItem.title, e)}
        >
          <SectionTitle>{listItem.title}</SectionTitle>
          {listItem.data.map((coffeeItem) => (
            <CoffeeItem key={coffeeItem.name} item={coffeeItem} />
          ))}
        </View>
      ))}
    </CoffeeListContainer>
  )
}
