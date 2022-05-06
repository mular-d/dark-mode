import React from 'react'
import { render } from 'react-dom'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode'

import App from './App'
import './index.scss'

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

const Main = () => {
  const darkMode = useDarkMode(true)
  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <App />
    </NextUIProvider>
  )
}

render(<Main />, document.getElementById('root'))
