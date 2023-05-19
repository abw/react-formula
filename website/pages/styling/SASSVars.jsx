import React from 'react'
import defaults from '../../../styles/config/defaults.scss?raw'
import namespace  from '../../../styles/config/namespace.scss?raw'
import namespaces  from './examples/namespaces.scss?raw'
import defaultsScss from './examples/defaults.scss?raw'
import { parseSassVars } from '../../site/ParseSassVars.js'
import CodeBlock from '../../site/CodeBlock.jsx'
import Link from '../../site/Link.jsx'
import VarsList from './VarsList.jsx'

const namespaceVars = parseSassVars(namespace)
const defaultsVars = parseSassVars(defaults)

const SASSVars = () =>
  <div>
    <h1>SASS Variables</h1>
    <p className="intro">
      The easiest way to modify the styles is by use of{' '}
      <Link to="/styling/css-variables" text="CSS variables"/>.
      If you want or need to go a bit deeper then you can generate your own
      variant of the default CSS file, customised using SASS variables.
    </p>
    <h2>CSS Classes</h2>
    <p>
      The CSS classes used in the main stylesheet are defined using the
      variables listed in the table below.  Everything is scoped inside
      the main <code>.formula</code> namespace.
    </p>
    <p>
      If you want to use different class names then you can define the
      following SASS variables before importing the main{' '}
      <code>formula.scss</code> file,
      as show in this example.  Note that you will also need to configure
      the React components to use these new CSS classes.
    </p>
    <CodeBlock language="scss" code={namespaces} expand caption="your-formula.scss"/>
    <VarsList vars={namespaceVars}/>

    <h2>Default Values</h2>
    <p>
      There are a few SASS variables that are used to define some common units,
      shown in the table below.
    </p>
    <p>
      If you want to create your own stylesheet with different default values
      then the process is the same as shown above.  Define your own SASS
      stylesheet that defines custom values for these variables before
      importing the main <code>formula.scss</code>.
    </p>
    <CodeBlock language="scss" code={defaultsScss} expand caption="your-formula.scss"/>
    <VarsList vars={defaultsVars}/>
  </div>



export default SASSVars