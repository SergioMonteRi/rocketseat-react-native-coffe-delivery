import { Keyframe } from 'react-native-reanimated'

export const enteringAnimation = new Keyframe({
  0: {
    transform: [{ translateX: 100 }, { scale: 0.9 }],
    opacity: 0,
  },
  100: {
    transform: [{ translateX: 0 }, { scale: 1 }],
    opacity: 1,
  },
})
  .duration(800)
  .delay(300)

export const slideDownToUpAnimation = new Keyframe({
  0: {
    transform: [{ translateY: 90 }, { scale: 0.9 }],
    opacity: 0,
  },
  100: {
    transform: [{ translateY: 0 }, { scale: 1 }],
    opacity: 1,
  },
})
  .duration(800)
  .delay(300)
