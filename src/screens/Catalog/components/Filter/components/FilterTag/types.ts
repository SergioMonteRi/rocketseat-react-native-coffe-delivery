import { SharedValue } from 'react-native-reanimated'

export type FilterTagProps = {
  option: string
  scrollY: SharedValue<number>
  sectionsPositionsY: {
    [key: string]: {
      y: number
      height: number
    }
  }
  onPress: (option: string) => void
}
