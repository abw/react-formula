import React           from 'react'
import PizzaForm       from './examples/PizzaForm.jsx'
import PizzaFormSrc    from './examples/PizzaForm.jsx?raw'
import ToppingsSrc     from './examples/Toppings.jsx?raw'
import UtilsSrc        from './examples/Utils.js?raw'
import OptionsSrc      from './examples/Options.jsx?raw'
import OptionSrc       from './examples/Option.jsx?raw'
import SummarySrc      from './examples/Summary.jsx?raw'
import PizzaCSS        from './examples/pizza.scss?raw'
import Example         from '../../../site/Example.jsx'
import CodeBlock       from '../../../site/CodeBlock.jsx'
import Pager           from '../../../site/Pager/Customising.jsx'
import { prepareCode } from '../../../site/CodeBlock.jsx'
import { FieldLayoutLink, LabelLink }   from '../../../site/Links.jsx'

const CustomLayout = () =>
  <div>
    <h1>Custom Layout</h1>
    <p className="intro">
      You can define your own component to handle the complete layout for
      a field.
    </p>
    <p>
      The <FieldLayoutLink/> property can be set on a field to contain a custom
      component for rendering the field layout.  In this example we define
      a <code>Toppings</code> layout component to render a field allowing
      a user to select some toppings for a pizza.
    </p>
    <p>
      We&apos;re defining the schema for the <code>fields</code> externally
      (lines 6 to 25) and passing them into the <code>Form</code> as the{' '}
      <code>fields</code> property (line 28).
      In addition to setting the <code>Layout</code> component on line 8,
      we&apos;re also defining some extra data that the field will require:
      the number of <code>free</code> toppings (line 11), the{' '}
      <code>price</code> of additional toppings after that (line 12), and a
      list of available <code>toppings</code> (lines 13 to 23).  This is the
      kind of data that we want defined up front and not buried in the form markup.
    </p>
    <Example
      Element={PizzaForm}
      code={PizzaFormSrc}
      caption="Pizza Form"
      expand
    >
      <p>
        Before we go any further into the code, let&apos;s see how it looks.
        Select some toppings for your pizza!
      </p>
    </Example>
    <p>
      Here&apos;s the implementation of the <code>Toppings</code> component.
    </p>
    <CodeBlock
      code={prepareCode(ToppingsSrc)}
      caption="Toppings"
      expand
    />
    <p>
      On line 8 we call <code>useField()</code> to get the current field{' '}
      context.  As well as the <code>id</code>, <code>value</code> and{' '}
      <code>onChange</code> function to set the value, we&apos;re also getting
      our additional data fields: <code>free</code>, <code>price</code> and{' '}
      <code>toppings</code>.
    </p>
    <p>
      We&apos;ve got two utility functions that we&apos;re importing from
      our <code>Utils.js</code> file.  On line 9 we call{' '}
      <code>selectedToppings()</code> to convert the array of toppings in{' '}
      <code>value</code> into an object so we can easily tell which toppings
      are selected (each selected topping will be set <code>true</code>).
      On line 10 we call the <code>toppingSelector()</code> factory function
      which returns a function for selecting a topping (or unselecting one
      that&apos;s already selected) and calling the <code>onChange</code> handler
      to update the field.  We&apos;ll look at the definitions of those functions
      shortly.
    </p>
    <p>
      We have some explanatory text from lines 14 to 20.  Note how this
      includes the <code>free</code> and <code>price</code> values defined
      in our field schema. On line 21 we render the default <LabelLink/>{' '}
      component to generate the field label. On line 23 we render a custom{' '}
      <code>Options</code> component and on line 27 a custom{' '}
      <code>Summary</code> component.
    </p>
    <p>
      Here&apos;s the definitions for those utility functions.
    </p>
    <CodeBlock
      code={prepareCode(UtilsSrc)}
      caption="Utils.js"
      expand
    />
    <p>
      The <code>Options</code> component iterates over the available toppings
      and renders the <code>Option</code> component for each.  It passes a
      custom <code>id</code>, <code>selected</code> flag and{' '}
      <code>select</code> function tailored to each option.
    </p>
    <CodeBlock
      code={prepareCode(OptionsSrc)}
      caption="Options.jsx"
      expand
    />
    <p>
      The <code>Option</code> component simply renders a checkbox in a label
      using those properties.
    </p>
    <CodeBlock
      code={prepareCode(OptionSrc)}
      caption="Option.jsx"
      expand
    />
    <p>
      The <code>Summary</code> component displays a summary of the selected
      toppings.
    </p>
    <CodeBlock
      code={prepareCode(SummarySrc)}
      caption="Summary.jsx"
      expand
    />

    <p>
      And finally, here&apos;s the additional SCSS we&apos;re using to
      apply the styling.
    </p>
    <CodeBlock
      code={PizzaCSS}
      caption="pizza.scss"
      language="css"
      expand
    />

    <Pager uri="layout"/>
  </div>

export default CustomLayout