/* eslint-disable camelcase */

import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Routes } from '@routes/index'

import theme from '@theme/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />

        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
