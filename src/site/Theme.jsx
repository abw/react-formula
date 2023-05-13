import { useState, useEffect } from 'react'
import { Generator } from '@abw/react-context'

const PREFERS_DARK = '(prefers-color-scheme: dark)'

const Theme = ({render}) => {
  const getTheme = () => window.matchMedia(PREFERS_DARK).matches
  const [dark, setDark] = useState(getTheme())
  const mqListener = e => setDark(e.matches)
  const toggleTheme = () => setDark(! dark)
  useEffect(
    () => {
      const darkThemeMq = window.matchMedia(PREFERS_DARK)
      darkThemeMq.addEventListener('change', mqListener)
      return () => darkThemeMq.removeEventListener('change', mqListener)
    },
    []
  )
  return render({
    dark, setDark, toggleTheme,
    theme: dark ? 'dark' : 'light',
  })
}

const generated = Generator(Theme)
export const { Provider: ThemeProvider, Use: useTheme } = generated
export default generated
