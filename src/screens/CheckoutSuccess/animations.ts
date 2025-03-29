import { Keyframe } from 'react-native-reanimated'

export const slideInRight = new Keyframe({
  0: {
    transform: [{ translateX: -200 }],
  },
  50: {
    transform: [{ translateX: -100 }],
  },
  100: {
    transform: [{ translateX: 0 }],
  },
}).delay(200)
