import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import Home from './src/screens/Home'
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Home />
      </Provider>
    </ThemeProvider>

  )
}

export default App