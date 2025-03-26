import { View } from 'react-native'

import { COFFEE_LIST } from '../../constants'

import { CoffeeItem } from './components/CoffeeItem'

import { CoffeeListContainer, SectionTitle } from './styles'

import { CoffeeListProps } from './types'

export const CoffeeList = (props: CoffeeListProps) => {
  const { sectionRefs, setCoffeeListSectionsYpositions } = props

  return (
    <CoffeeListContainer>
      {COFFEE_LIST.map((listItem) => (
        <View
          key={listItem.title}
          ref={(ref) =>
            ref && (sectionRefs.current[listItem.title.toUpperCase()] = ref)
          }
          onLayout={(e) =>
            setCoffeeListSectionsYpositions(listItem.title.toUpperCase(), e)
          }
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
