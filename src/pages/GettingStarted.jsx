import React from 'react'
import CodeBlock from '../components/CodeBlock.jsx'

const GettingStarted = () =>
  <div>
    <h1>Getting Started</h1>
    <p>
      Add the <code className="code">@abw/react-formula</code> module to
      your project using your favourite package manager.
    </p>
    <CodeBlock language="bash">
      {`## using npm
$ npm add @abw/react-formula

## using yarn
$ yarn add @abw/react-formula

## using pnpm
$ pnpm add @abw/react-formula
`}
    </CodeBlock>
    <p>
      You can then import the modules and start using them.
    </p>
    <CodeBlock>
      {`import { Form, Field, Submit } from '@abw/react-formula'

const MyFormExample = () =>
  <Form onSubmit={submit => console.log('Form submit:', submit)}>
    <Field name="name" label="What is your name?"/>
    <Submit/>
  </Form>

export default MyFormExample
`}
    </CodeBlock>
    <p>
      If you want to use the provided styles (and you probably will to start
      with) then you&apos;ll need to import the default CSS stylesheet into
      your React app.  Something like this:
    </p>
    <CodeBlock>
      {`import '@abw/react-formula/css/formula.css'`}
    </CodeBlock>
    <p>
      Or if you&apos;re using SASS then you can import the SASS components
      into your main stylesheet.
    </p>
    <CodeBlock language="scss">
      {`@import '@abw/react-formula/scss/formula.scss';`}
    </CodeBlock>
    <p>
      See the <a href="styling">styling page</a> for further information
      about customising the styles.
    </p>
  </div>

export default GettingStarted