export type FilterProps = {
  isFixed?: boolean
  handleFilterPress: (value: string) => void
  setFilterPositionY?: React.Dispatch<React.SetStateAction<number>>
}
