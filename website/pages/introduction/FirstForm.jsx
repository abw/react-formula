import React        from 'react'
import Example      from '../../site/Example.jsx'
import FirstForm    from '../../snippets/FirstForm.jsx'
import FirstFormSrc from '../../snippets/FirstForm.jsx?raw'
import Pager        from '../../site/Pager/Introduction.jsx'
import { useTheme } from '@abw/react-night-and-day'

const FirstFormPage = () => {
  const { isDark, toggleTheme } = useTheme()
  return (
    <div>
      <h1>Your First Form</h1>
      <p>
        Now you&apos;re ready to import the modules and start using them to
        build forms.
      </p>
      <Example
        Element={FirstForm}
        code={FirstFormSrc}
        caption="Your First Form"
        expand
      >
        <p>
          If everything has gone according to plan then you should see a form
          like this.  Don&apos;t forget to see what it looks like in{' '}
          <span className="link" onClick={toggleTheme}>
            { isDark ? 'light mode' : 'dark mode' }
          </span>.
        </p>
      </Example>
      <Pager uri="first-form"/>
    </div>
  )
}

export default FirstFormPage