import { SharedValue } from 'react-native-reanimated'

export type CoffeeListProps = {
  scrollY: SharedValue<number>
  listHeaderComponent: React.MemoExoticComponent<() => React.JSX.Element>
}
