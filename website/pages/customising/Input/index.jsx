import React from 'react'
import PictureForm     from './examples/PictureForm.jsx'
import PictureFormSrc  from './examples/PictureForm.jsx?raw'
import PictureInputSrc from './examples/PictureInput.jsx?raw'
import AnimalsCSS      from './examples/animals.css?raw'
import Example         from '../../../site/Example.jsx'
import { InputLink }   from '../../../site/Links.jsx'
import CodeBlock from '../../../site/CodeBlock.jsx'
import { prepareCode } from '../../../site/Example.jsx'

const CustomInput = () =>
  <div>
    <h1>Custom Input</h1>
    <p className="intro">
      You can define your own components to handle the input for a field.
    </p>
    <p>
      The <InputLink/> property can be set on a field to contain a custom
      component for rendering the field input.  In this example we define
      a <code>PictureInput</code> component to show some pictures of animals
      for the user to select an animal guide from.
    </p>
    <Example
      Element={PictureForm}
      code={PictureFormSrc}
      caption="Picture Form"
      expand
    >
      <p>
        Click on an animal to select it.  In this example we&apos;re just
        implementing a custom input and relying on the default field layout
        to provide us with the label and validation message.  Try submitting
        the form without selecting an animal to see the validation error
        message in effect.
      </p>
    </Example>
    <p>
      Here&apos;s the implementation of the <code>PictureInput</code> component.
    </p>
    <CodeBlock
      code={prepareCode(PictureInputSrc)}
      caption="PictureInput"
      expand
    />
    <p>
      On line 7 we call <code>useField()</code> to get the current field{' '}
      <code>value</code> and the <code>onChange</code> function to set the
      value.  We iterate over a list of animals on line 10 and render the{' '}
      <code>Picture</code> component for each.  We pass the <code>selected</code>{' '}
      flag on line 15 to indicate if the animal name matches the current{' '}
      <code>value</code>.  This is used to add the <code>selected</code> CSS
      class to the picture container on line 25.  We also pass a <code>select</code>{' '}
      function on line 16 which calls the <code>onChange</code> handler to select
      the animal.  This is added to the picture container as an <code>onClick</code>{' '}
      handler on line 26.
    </p>
    <p>
      For completeness, here&apos;s the additional CSS we&apos;re using to
      apply the styling.
    </p>
    <CodeBlock
      code={AnimalsCSS}
      caption="animals.css"
      language="css"
      expand
    />
    <h2 className="hint">Picture Credits</h2>
    <ul className="credits">
      <li>Badger photo by <a href="https://unsplash.com/es/@vincentvanzalinge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vincent van Zalinge</a> on <a href="https://unsplash.com/photos/jd8s5zhWEug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
      <li>Gorilla photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/images/animals/monkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
      <li>Kitten photo by <a href="https://unsplash.com/@feneek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sergey Semin</a> on <a href="https://unsplash.com/images/animals/kitten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></li>
    </ul>
  </div>

export default CustomInput