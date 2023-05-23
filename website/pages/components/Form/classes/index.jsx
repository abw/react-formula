import React      from 'react'
import Example    from '../../../../site/Example.jsx'
import Classes    from './Classes.jsx'
import ClassesSrc from './Classes.jsx?raw'
import CSS        from './my-form-styles.css?raw'
import SeeAlso    from '../../../../site/SeeAlso.jsx'
import { CSSClassesLink } from '../../../../site/Links.jsx'
import CodeBlock from '../../../../site/CodeBlock.jsx'

const ClassesExamples = () =>
  <div>
    <h1>Form Properties</h1>
    <h2><code>classes</code></h2>
    <p>
      The <code>classes</code> property can be used to change the{' '}
      <CSSClassesLink/> used for different elements in a form.
    </p>
    <Example
      Element={Classes} code={ClassesSrc}
      caption="classes" expand
    />
    <p>
      This is typically used in conjunction with your own custom stylesheet.
      For example, the <code>red-bg</code> CSS class might be defined like
      this.
    </p>
    <CodeBlock code={CSS} language="css" caption="Custom Stylesheet" expand/>
    <p>
      Note the use of the <code>!important</code> modifier to increase the
      specificity of the rule in this example.  The alternative would be
      to fully qualify it, e.g as <code>.formula .field label .red-bg</code>.
    </p>
    <SeeAlso
      links={[
        'styling:css-classes',
      ]}
    />
  </div>


export default ClassesExamples