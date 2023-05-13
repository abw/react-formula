import { useState } from 'react'
import { Generator } from '@abw/react-context'

const Theme = ({render}) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [dark, setDark] = useState(prefersDark)
  const toggleTheme = () => setDark(! dark)
  return render({
    dark, setDark, toggleTheme,
    theme: dark ? 'dark' : 'light',
  })
}

const generated = Generator(Theme)
export const { Provider: ThemeProvider, Use: useTheme } = generated
export default generated
