import './App.scss'
import { Switch, useTheme } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode'

const App = () => {
  const darkMode = useDarkMode(true)
  const { type } = useTheme()

  return (
    <div className='App navbar'>
      <header className='App-header dark-mode-toggle'>
        The current theme is: {type}
        <button type='button' onClick={darkMode.disable}>
          ☀
        </button>
        <Switch checked={darkMode.value} onChange={() => darkMode.toggle()} />
        <button type='button' onClick={darkMode.enable}>
          ☾
        </button>
      </header>
    </div>
  )
}

export default App
