/* eslint-disable camelcase */

import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import theme from '@theme/theme'

import { Catalog } from '@screens/Catalog'

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
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />

      <Catalog />
    </ThemeProvider>
  )
}
