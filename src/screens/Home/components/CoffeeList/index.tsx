import { SectionList } from 'react-native'

import { COFFEE_LIST } from '../../constants'

import { CoffeeItem } from './components/CoffeeItem'

import { CoffeeListContainer, SectionTitle } from './styles'

import { CoffeeListProps } from './types'

export const CoffeeList = (props: CoffeeListProps) => {
  const { listHeaderComponent, scrollY } = props

  return (
    <CoffeeListContainer>
      <SectionList
        sections={COFFEE_LIST}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <CoffeeItem item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
        ListHeaderComponent={listHeaderComponent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 64 }}
        stickySectionHeadersEnabled={false}
        onScroll={(e) => (scrollY.value = e.nativeEvent.contentOffset.y)}
      />
    </CoffeeListContainer>
  )
}
