import React        from 'react'
import Example      from '../../site/Example.jsx'
import FirstForm    from '../../snippets/FirstForm.jsx'
import FirstFormSrc from '../../snippets/FirstForm.jsx?raw'
import Pager        from '../../site/Pager/Introduction.jsx'
import { useTheme } from '@abw/react-night-and-day'

const FirstFormPage = () => {
  const { isDark, toggleTheme } = useTheme()
  return (
    <div className="prose">
      <h1>Your First Form</h1>
      <p>
        Now you&apos;re ready to import the modules and start using them to
        build forms.
      </p>
      <p>
        If everything has gone according to plan then you should see a form
        like this.
        Don&apos;t forget to see what it looks like in{' '}
        <span className="link" onClick={toggleTheme}>
          { isDark ? 'light mode' : 'dark mode' }
        </span>.
      </p>
      <Example
        Element={FirstForm}
        code={FirstFormSrc}
        caption="Your First Form"
        expand
      >
      </Example>
      <p className="note">
        <b>NOTE:</b> all the examples on this web site show the output contained
        in a panel (with &quot;Output&quot; in the top right corner).
        That&apos;s not part of the default form styling, but of course you
        can style your own forms like that if you want to.
      </p>
      <Pager uri="first-form"/>
    </div>
  )
}

export default FirstFormPage