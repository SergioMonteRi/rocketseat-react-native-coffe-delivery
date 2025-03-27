import { SharedValue } from 'react-native-reanimated'

export type FilterProps = {
  isFixed?: boolean
  scrollY: SharedValue<number>
  sectionsPositionsY: {
    [key: string]: {
      y: number
      height: number
    }
  }
  handleFilterPress: (value: string) => void
  setFilterPositionY?: React.Dispatch<React.SetStateAction<number>>
}
