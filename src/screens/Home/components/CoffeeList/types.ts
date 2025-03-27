import { LayoutChangeEvent, View } from 'react-native'

export type CoffeeListProps = {
  sectionRefs?: React.MutableRefObject<{
    [key: string]: View
  }>
  setCoffeeListSectionsYpositions: (
    sectionName: string,
    event: LayoutChangeEvent,
  ) => void
}
