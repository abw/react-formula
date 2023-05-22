import React              from 'react'
import CodeBlock          from '../../site/CodeBlock.jsx'
import Example            from '../../site/Example.jsx'
import Pager              from '../../site/Pager/Styling.jsx'
import namespace          from '../../../styles/config/namespace.scss?raw'
import useBEM             from '../../snippets/useBEM?raw'
import BEMForm            from '../../snippets/BEMForm.jsx'
import BEMFormSrc         from '../../snippets/BEMForm.jsx?raw'
import CSSPrefix          from '../../snippets/my-form.scss?raw'
import CSSPrefixForm      from '../../snippets/CSSPrefixForm.jsx'
import CSSPrefixFormSrc   from '../../snippets/CSSPrefixForm.jsx?raw'
import { parseSassVars }  from '../../site/ParseSassVars.js'
import { FormClassesLink, FormLink, SASSVarsLink } from '../../site/Links.jsx'

const namespaceVars = parseSassVars(namespace)

const CSSClasses = () =>
  <div>
    <h1>CSS Classes</h1>
    <p className="intro">
      The CSS classes used in the main stylesheet are shown in the table
      below.
    </p>
    <Table/>
    <h2>Alternate BEM Stylesheet</h2>
    <p>
      The default classes are intentionally simple and map directly onto the
      element or state they represent. However there is always the possibility
      that you can get a clash with an existing CSS class in your stylesheet.
      For example, you may have an existing CSS rule for the <code>invalid</code>{' '}
      class which could interfere with the <code>react-formula</code> rule of
      the same name.
    </p>
    <p>
      If that is the case then you can use the alternate stylesheet that
      explicitly scopes the classes under the <code>formula--</code> prefix.
      For example, it uses <code>formula--invalid</code> instead of{' '}
      <code>invalid</code>.  This is commonly known as{' '}
      <a href="https://getbem.com/">BEM</a> for &quot;Block, Element, Modifier&quot;
      (although it should be noted that this isn&apos;t necessarily a strict
      implementation of BEM).
    </p>
    <CodeBlock code={useBEM} caption="BEM Stylesheet" expand/>
    <p>
      You will also need to update your code to tell <code>react-formula</code>{' '}
      to use these classes in the code it generates.  You can do this by
      importing the <code>BEMClasses</code> from <code>@abw/react-formula</code>{' '}
      and passing it to your form as using the <FormClassesLink/> property.
    </p>
    <Example
      Element={BEMForm} code={BEMFormSrc}
      caption="Using BEMClasses" expand
    >
      <p>
        Note that any other classes you use will now require the{' '}
        <code>formula--</code> prefix.  For example, the checkbox in this
        example uses <code>formula--fluid</code> instead of just{' '}
        <code>fluid</code> to make it have a fluid width.
      </p>
    </Example>

    <h2>Custom CSS Namespace</h2>
    <p>
      You can create your own stylesheet with a custom CSS namespace using
      the SASS components.  Create your own <code>.scss</code> file like the
      one below.  Define <code>$namespace</code> to be the prefix you want
      and then <code>@import</code> the{' '}
      <code>@abw/react-formula/styles/formula-bem.scss</code> component.
    </p>
    <CodeBlock
      code={CSSPrefix} caption="Custom Stylesheet" expand
      language="scss"
    />
    <p>
      You will then need to include this stylesheet in your application.
      If your framework doesn&apos;t support loading SASS styles directly
      then you should pre-process it using the <code>sass</code> command line
      tool to generate a CSS file which you can import into your app.
    </p>
    <p>
      In your React code you can then use the <code>prefixClasses()</code>{' '}
      function to generate the CSS classes with your prefix that you can pass
      to each <FormLink/> using the <FormClassesLink/> property.
    </p>
    <Example
      Element={CSSPrefixForm} code={CSSPrefixFormSrc}
      caption="prefixCSS" expand
    >
      <p>
        Note that any other classes you use will now require the{' '}
        <code>my-form--</code> prefix.  For example, the checkbox in this
        example uses <code>my-form--fluid</code> instead of just{' '}
        <code>fluid</code> to make it have a fluid width.
      </p>
    </Example>
    <p>
      If you just want to change one or two classes to avoid a clash then
      you can do that by setting the appropriate SASS namespace variables
      (see <SASSVarsLink/>) before importing the <code>formula.scss</code>{' '}
      component.
    </p>

    <Pager uri="css-classes"/>
  </div>

const Table = () =>
  <table className="wide vars table">
    <thead>
      <tr>
        <th>CSS Class</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      { namespaceVars.map(
        ({variable, defaultValue, description, section}) =>
          section
            ? null
            : <tr key={variable}>
                <td className="default">{defaultValue}</td>
                <td className="description">{description}</td>
              </tr>
      )}
    </tbody>
  </table>

export default CSSClasses