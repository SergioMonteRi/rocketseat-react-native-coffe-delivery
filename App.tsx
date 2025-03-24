import { StatusBar } from 'expo-status-bar'
import styled, { ThemeProvider } from 'styled-components/native'

import theme from '@theme/theme'

import Cappuccino from 'src/assets/images/coffes/capuccino.svg'

export default function App() {
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
  color: ${({ theme }) => theme.COLORS.WHITE};
`
