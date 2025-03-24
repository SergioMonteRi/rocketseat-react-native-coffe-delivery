/* eslint-disable camelcase */

import { StatusBar } from 'expo-status-bar'
import styled, { ThemeProvider } from 'styled-components/native'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import theme from '@theme/theme'

import Cappuccino from 'src/assets/images/coffes/capuccino.svg'

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
      <AppContainer>
        <Cappuccino width={100} height={100} />
        <AppName>Coffe Delivery!</AppName>
        <StatusBar style="auto" />
      </AppContainer>
    </ThemeProvider>
  )
}

const AppContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  align-items: center;
  justify-content: center;
`

const AppName = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BALOO2.BALOO2_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`
