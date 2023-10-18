import{j as t,a as e,T as m,ar as p,F as r,c as a,e as l,h as n,E as o,x as s,as as h,S as c,d,$ as u,a0 as i}from"./index-9a795a9b.js";const f=()=>t("div",{children:[e("h1",{children:"Inputs"}),e("p",{className:"intro",children:"This section of the documentation provides detailed information about different input types."}),e(m,{menu:p})]}),b=()=>t(r,{children:[e(a,{name:"one"}),e(a,{name:"two",label:"A text input with a label"}),e(a,{name:"three",label:"Another text input",type:"text"}),e(a,{name:"four",label:"Text with placeholder",placeholder:"Hello World!"}),e(a,{name:"money",label:"Prefix/Suffix",prefix:"$",suffix:".00"})]}),x=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Text = () =>
  <Form>
    <Field name="one"/>
    <Field name="two"   label="A text input with a label"/>
    <Field name="three" label="Another text input"    type="text"/>
    <Field name="four"  label="Text with placeholder" placeholder="Hello World!"/>
    <Field name="money" label="Prefix/Suffix" prefix="$" suffix=".00" />
  </Form>

export default Text`,F=()=>t(r,{children:[e(a,{name:"one",label:"A fluid field",className:"fluid",size:"25"}),e(a,{name:"two",label:"A text field with prefix and suffix",prefix:"$",suffix:".00",size:"6",className:"fluid"})]}),y=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Fluid = () =>
  <Form>
    <Field
      name="one"
      label="A fluid field"
      className="fluid"
      size="25"
    />
    <Field
      name="two"
      label="A text field with prefix and suffix"
      prefix="$" suffix=".00"
      size="6"
      className="fluid"
    />
  </Form>

export default Fluid`,S=()=>t(r,{children:[e(a,{name:"one",label:"A text field",size:"25",className:"inline mar-r-option"}),e(a,{name:"two",label:"A text field with prefix and suffix",prefix:"$",suffix:".00",size:"6",className:"inline"})]}),T=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Inline = () =>
  <Form>
    <Field
      name="one"
      label="A text field"
      size="25"
      className="inline mar-r-option"
    />
    <Field
      name="two"
      label="A text field with prefix and suffix"
      prefix="$" suffix=".00"
      size="6"
      className="inline"
    />
  </Form>

export default Inline`,w=()=>t(r,{children:[e(a,{name:"one",type:"number",label:"A number field"}),e(a,{name:"two",type:"date",label:"A date field"}),e(a,{name:"three",type:"password",label:"A password field"}),e(a,{name:"four",type:"color",label:"A color field"})]}),g=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Variants = () =>
  <Form>
    <Field name="one"   type="number"   label="A number field"/>
    <Field name="two"   type="date"     label="A date field"/>
    <Field name="three" type="password" label="A password field"/>
    <Field name="four"  type="color"    label="A color field"/>
  </Form>

export default Variants`,R=()=>t("div",{children:[e("h1",{children:"Text Input"}),t("p",{children:["The default ",e(l,{})," ",e(n,{})," is ",e("code",{children:"text"}),".  You can specify it explicitly if you like, but it's entirely optional."]}),e(o,{Element:b,code:x,expand:!0}),e("h2",{children:"Fluid Text Input"}),t("p",{children:["The default behaviour is to make the text fields extend to the full width of the container.  Bitter experience has taught me that it's generally easier to do this and constrain the width of the container than it is to try and get all inputs the same width, especially if you're using prefix and suffix elements. You can add the ",e("code",{children:"fluid"})," CSS class via the"," ",e("code",{children:"className"})," property if you want a fluid width input."]}),t("p",{children:["The ",e("code",{children:"size"})," property can be set to tell the browser ",e("i",{children:"approximately"})," how wide the field should be in terms of characters, but don't rely on it being particularly accurate.  In terms of usability it is generally considered to be a good thing to give users a visual indication of how long the input is expected to be.  Unfortunately I can count on no hands the number of times a designer has agreed that this is more important than having all the fields fully justified."]}),e(o,{Element:F,code:y,expand:!0}),e("h2",{children:"Inline Text Input"}),t("p",{children:["Add the ",e("code",{children:"inline"})," CSS class for inline fields.  Note that there isn't any margin automatically added between successive inline fields.  You can add a margin using your own CSS class or inline style rules, or use the provided ",e("code",{children:"mar-r-option"})," ","utility class to add a margin to the right of a field.  There's also the ",e("code",{children:"mar-l-option"})," class for adding a margin to the left."]}),t("p",{children:["These utility classes are so named because it's the same margin width that is automatically added between options in the"," ",e(s,{})," input type.  The default value is ",e("code",{children:"1rem"}),". You can redefine it using the ",e("code",{children:"--option-margin"})," CSS variable. See ",e(h,{})," for further information."]}),e(o,{Element:S,code:T,expand:!0}),e("h2",{children:"Number, Date and other Field Types"}),t("p",{children:["All the other variants of the basic input type are supported.  Set the ",e("code",{children:"type"})," to ",e("code",{children:"number"})," for a numerical field,"," ",e("code",{children:"date"})," for a date selector, ",e("code",{children:"password"})," for a password field, and so on."]}),e(o,{Element:w,code:g,expand:!0})]}),E=()=>t(r,{children:[e(a,{type:"textarea",name:"one",label:"A text area input"}),e(a,{type:"textarea",name:"two",label:"Text area with rows",rows:"10"}),e(a,{type:"textarea",name:"three",label:"Thin text area with placeholder",placeholder:"Type here",className:"thin"})]}),v=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const TextAreaExample = () =>
  <Form>
    <Field
      type="textarea" name="one"
      label="A text area input"
    />
    <Field
      type="textarea" name="two"
      label="Text area with rows" rows="10"
    />
    <Field
      type="textarea" name="three"
      label="Thin text area with placeholder"
      placeholder="Type here"
      className="thin"
    />
  </Form>

export default TextAreaExample`,C=()=>e(r,{children:e(a,{name:"one",type:"textarea",label:"Fluid Text Area",className:"fluid"})}),A=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Fluid = () =>
  <Form>
    <Field
      name="one"
      type="textarea"
      label="Fluid Text Area"
      className="fluid"
    />
  </Form>

export default Fluid`,N=()=>t(r,{children:[e(a,{name:"one",type:"textarea",label:"Text Area One",className:"inline mar-r-option"}),e(a,{name:"one",type:"textarea",label:"Text Area Two",className:"inline"})]}),k=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Inline = () =>
  <Form>
    <Field
      name="one"
      type="textarea"
      label="Text Area One"
      className="inline mar-r-option"
    />
    <Field
      name="one"
      type="textarea"
      label="Text Area Two"
      className="inline"
    />
  </Form>

export default Inline`,W=()=>t("div",{children:[e("h1",{children:"Text Area Input"}),t("p",{children:["Set the ",e(l,{})," ",e(n,{})," to ",e("code",{children:"textarea"})," for a text area input.  The optional ",e("code",{children:"rows"})," property can be used to specify the number of rows."]}),e(o,{Element:E,code:v,expand:!0}),e("h2",{children:"Fluid Text Area Input"}),t("p",{children:["Add the ",e("code",{children:"fluid"})," CSS class for a fluid width input."]}),e(o,{Element:C,code:A,expand:!0}),e("h2",{children:"Inline Text Area Input"}),t("p",{children:["Add the ",e("code",{children:"inline"})," CSS class for inline fields.  You may also want to add the ",e("code",{children:"mar-r-option"})," CSS class to add a margin to the right side of any fields that are followed by another field."]}),e(o,{Element:N,code:k,expand:!0})]}),B=()=>t(r,{children:[e(a,{name:"one",type:"checkbox",label:"Default Checkbox",text:"I like badgers!"}),e(a,{name:"two",type:"checkbox",text:"I accept the terms and conditions"})]}),I=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Checkbox = () =>
  <Form>
    <Field
      name="one"
      type="checkbox"
      label="Default Checkbox"
      text="I like badgers!"
    />
    <Field
      name="two"
      type="checkbox"
      text="I accept the terms and conditions"
    />
  </Form>

export default Checkbox`,P=()=>e(r,{children:e(a,{type:"checkbox",name:"badger",label:"Checkbox Border",text:"I really, really like badgers!",border:!0})}),O=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CheckboxBorder = () =>
  <Form>
    <Field
      type="checkbox"
      name="badger"
      label="Checkbox Border"
      text="I really, really like badgers!"
      border
    />
  </Form>

export default CheckboxBorder`,j=()=>t(r,{children:[e(a,{name:"badger",type:"checkbox",text:"Badgers are brilliant!",border:!0,wide:!0}),e(a,{name:"stoat",type:"checkbox",text:"Stoats are sexy!",border:!0,wide:!0})]}),D=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CheckboxWide = () =>
  <Form>
    <Field
      name="badger"
      type="checkbox"
      text="Badgers are brilliant!"
      border wide
    />
    <Field
      name="stoat"
      type="checkbox"
      text="Stoats are sexy!"
      border wide
    />
  </Form>

export default CheckboxWide`,$=()=>e(r,{children:e(a,{name:"badger",type:"checkbox",text:"Badgers are brilliant!",inputClass:"larger"})}),H=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CheckboxInputClass = () =>
  <Form>
    <Field
      name="badger"
      type="checkbox"
      text="Badgers are brilliant!"
      inputClass="larger"
    />
  </Form>

export default CheckboxInputClass`,Y=()=>t("div",{className:"prose",children:[e("h1",{children:"Checkbox Input"}),t("p",{children:["Set the ",e(l,{})," ",e(n,{})," to ",e("code",{children:"checkbox"})," for a checkbox. Use the ",e("code",{children:"text"})," property to define any text that you want to appear alongside the checkbox.  The ",e("code",{children:"label"})," is optional on all fields, so depending on what your checkbox text says, you might want to leave it out."]}),e(o,{Element:B,code:I,expand:!0}),e("h2",{children:e("code",{children:"border"})}),t("p",{children:["Add the ",e("code",{children:"border"})," property if you want a border around the checkbox item."]}),e(o,{Element:P,code:O,expand:!0}),e("h2",{children:e("code",{children:"wide"})}),t("p",{children:["The default behaviour is for checkboxes to be displayed inline.  Add the ",e("code",{children:"wide"})," property to make them expand to the full width of the container."]}),e(o,{Element:j,code:D,expand:!0}),e("h2",{children:e("code",{children:"inputClass"})}),t("p",{children:["The ",e("code",{children:"inputClass"})," property can be used to add a CSS class to the checkbox input."]}),e(o,{Element:$,code:H,expand:!0})]}),_=()=>e(r,{children:e(a,{type:"radio",name:"animal",label:"Radio Buttons",options:[{value:"badger",text:"Bobby Badger",className:"bold"},{value:"ferret",text:"Franky Ferret"},{value:"stoat",text:"Simon Stoat"},{value:"weasel",text:"Willy Weasel"}]})}),z=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioOptions = () =>
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Radio Buttons"
      options={[
        { value:     'badger',
          text:      'Bobby Badger',
          className: 'bold'
        },
        { value: 'ferret', text: 'Franky Ferret' },
        { value: 'stoat',  text: 'Simon Stoat'   },
        { value: 'weasel', text: 'Willy Weasel'  }
      ]}
    />
  </Form>

export default RadioOptions
`,L=()=>e(r,{children:e(a,{type:"radio",name:"animal",label:"Simple Options",options:["Badger","Ferret","Stoat","Weasel"]})}),G=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioSimple = () =>
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Simple Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
    />
  </Form>

export default RadioSimple
`,V=()=>e(r,{children:e(a,{type:"radio",name:"animal",label:"Wide Options",options:["Badger","Ferret","Stoat","Weasel"],wide:!0})}),M=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioWide = () =>
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Wide Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      wide
    />
  </Form>

export default RadioWide`,J=()=>t(r,{children:[e(a,{type:"radio",name:"animal1",label:"Border Options",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"mar-r-2",border:!0}),e(a,{type:"radio",name:"animal2",label:"Wide Border Options",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"mar-b-2",border:!0,wide:!0})]}),U=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioBorder = () =>
  <Form>
    <Field
      type="radio"
      name="animal1"
      label="Border Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionClass="mar-r-2"
      border
    />
    <Field
      type="radio"
      name="animal2"
      label="Wide Border Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionClass="mar-b-2"
      border wide
    />
  </Form>

export default RadioBorder`,X=()=>t(r,{children:[e(a,{type:"radio",name:"animal1",label:"Flex Options With Gaps",options:["Badger","Ferret","Stoat","Weasel"],optionsClass:"flex gap-2",border:!0}),e(a,{type:"radio",name:"animal2",label:"Grid Options with Gaps",options:["Badger","Ferret","Stoat","Weasel"],optionsClass:"grid-2 gap-4",border:!0})]}),q=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioOptionsClass = () =>
  <Form>
    <Field
      type="radio"
      name="animal1"
      label="Flex Options With Gaps"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionsClass="flex gap-2"
      border
    />
    <Field
      type="radio"
      name="animal2"
      label="Grid Options with Gaps"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionsClass="grid-2 gap-4"
      border

    />
  </Form>

export default RadioOptionsClass`,K=()=>t(r,{children:[e(a,{type:"radio",name:"animal1",label:"Options With Margins on Right and Extra Padding",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"mar-r-4 pad-h-4",border:!0}),e(a,{type:"radio",name:"animal2",label:"Large Options With Margins and Padding",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"large mar-b-4 pad-v-2 pad-h-4",border:!0,wide:!0})]}),Q=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioOptionsClass = () =>
  <Form>
    <Field
      type="radio"
      name="animal1"
      label="Options With Margins on Right and Extra Padding"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionClass="mar-r-4 pad-h-4"
      border
    />
    <Field
      type="radio"
      name="animal2"
      label="Large Options With Margins and Padding"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionClass="large mar-b-4 pad-v-2 pad-h-4"
      border wide
    />
  </Form>

export default RadioOptionsClass`,Z=()=>e(r,{children:e(a,{type:"radio",name:"animal",label:"Input Class",options:["Badger","Ferret","Stoat","Weasel"],inputClass:"larger"})}),ee=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioInputClass = () =>
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Input Class"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      inputClass="larger"
    />
  </Form>

export default RadioInputClass`,te=()=>t("div",{className:"prose",children:[e("h1",{children:"Radio Button Input"}),t("p",{children:["Set the ",e(l,{})," ",e(n,{})," to ",e("code",{children:"radio"})," to create a radio button set. The ",e("code",{children:"options"})," property should be used to define the options. This should be an array of objects containing"," ",e("code",{children:"value"})," and ",e("code",{children:"text"})," "," properties."]}),t("p",{children:["You can also add ",e("code",{children:"className"})," if you want to add a particular class to an option.  Or for more complex markup, define the"," ",e("code",{children:"text"})," as a JSX snippet."]}),e(o,{Element:_,code:z,expand:!0}),t("p",{children:["In simple cases where the value and text are the same then you can define ",e("code",{children:"options"})," as an array of values."]}),e(o,{Element:L,code:G,expand:!0}),e("h2",{children:e("code",{children:"border"})}),t("p",{children:["Add the ",e("code",{children:"border"})," CSS class to have the options inline. Note that margins aren't automatically added between option, but you can use the ",e("code",{children:"optionClass"})," and/or"," ",e("code",{children:"optionsClass"})," properties, described below, to add them."]}),e(o,{Element:J,code:U,expand:!0}),e("h2",{children:e("code",{children:"wide"})}),t("p",{children:["The default behaviour is for radio button options to be displayed inline.  Add the ",e("code",{children:"wide"})," property to make them expand to the full width of the container."]}),e(o,{Element:V,code:M,expand:!0}),e("h2",{children:e("code",{children:"optionsClass"})}),t("p",{children:["The ",e("code",{children:"optionsClass"})," property (note plural) can be used to add a CSS class to the options container.  This is useful for adding gaps between options, or if you want to display the options in a grid, for example."]}),e(o,{Element:X,code:q,expand:!0}),e("h2",{children:e("code",{children:"optionClass"})}),t("p",{children:["The ",e("code",{children:"optionClass"})," property (note singular) can be used to add a CSS class to each of the options.  This is useful if you want to add margins to options, for example."]}),e(o,{Element:K,code:Q,expand:!0}),e("h2",{children:e("code",{children:"inputClass"})}),t("p",{children:["The ",e("code",{children:"inputClass"})," property can be used to add a CSS class to the radio input."]}),e(o,{Element:Z,code:ee,expand:!0})]}),ae=()=>t(r,{children:[e(a,{name:"animal",type:"select",label:"What is your favourite animal?",options:["Badger","Ferret","Stoat"]}),e(a,{name:"food",type:"select",label:"What is your favourite number?",placeholder:"Pick a number",options:[{value:10,text:"Ten"},{value:11,text:"Eleven (one louder)",className:"bold"},{value:42,text:"Forty-Two (the meaning of life)"},{value:69,text:"Sixty nine, dude!",disabled:!0}]})]}),oe=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Select = () =>
  <Form>
    <Field
      name="animal"
      type="select"
      label="What is your favourite animal?"
      options={[ 'Badger', 'Ferret', 'Stoat' ]}
    />
    <Field
      name="food"
      type="select"
      label="What is your favourite number?"
      placeholder="Pick a number"
      options={[
        { value: 10, text: 'Ten' },
        { value: 11, text: 'Eleven (one louder)', className: 'bold' },
        { value: 42, text: 'Forty-Two (the meaning of life)' },
        { value: 69, text: 'Sixty nine, dude!', disabled: true }
      ]}
    />
  </Form>

export default Select`,re=()=>t(r,{children:[e(a,{name:"animal",type:"select",label:"What is your favourite animal?",options:["Badger","Ferret","Stoat"],className:"fluid"}),e(a,{name:"food",type:"select",label:"What is your favourite number?",placeholder:"Pick a number",options:[10,11,42,69],className:"fluid"})]}),ie=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const FluidSelect = () =>
  <Form>
    <Field
      name="animal"
      type="select"
      label="What is your favourite animal?"
      options={[ 'Badger', 'Ferret', 'Stoat' ]}
      className="fluid"
    />
    <Field
      name="food"
      type="select"
      label="What is your favourite number?"
      placeholder="Pick a number"
      options={[ 10, 11, 42, 69 ]}
      className="fluid"
    />
  </Form>

export default FluidSelect`,le=()=>t(r,{children:[e(a,{name:"animal",type:"select",label:"What is your favourite animal?",options:["Badger","Ferret","Stoat"],className:"inline mar-r-option"}),e(a,{name:"food",type:"select",label:"What is your favourite number?",placeholder:"Pick a number",options:[10,11,42,69],className:"inline"})]}),ne=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const InlineSelect = () =>
  <Form>
    <Field
      name="animal"
      type="select"
      label="What is your favourite animal?"
      options={[ 'Badger', 'Ferret', 'Stoat' ]}
      className="inline mar-r-option"
    />
    <Field
      name="food"
      type="select"
      label="What is your favourite number?"
      placeholder="Pick a number"
      options={[ 10, 11, 42, 69 ]}
      className="inline"
    />
  </Form>

export default InlineSelect`,de=()=>t("div",{children:[e("h1",{children:"Select Input"}),t("p",{children:["Set the ",e(l,{})," ",e(n,{})," to ",e("code",{children:"select"})," to create a select input. Just like the ",e(s,{})," input, you can specify the ",e("code",{children:"options"})," as an array of simple values or objects containing ",e("code",{children:"value"})," and ",e("code",{children:"text"})," properties."]}),e(o,{Element:ae,code:oe,expand:!0}),e("h1",{children:"Fluid Select Input"}),t("p",{children:["The default behaviour is for a select input to expand to the full width of the container. Add the ",e("code",{children:"fluid"})," CSS class via the"," ",e("code",{children:"className"})," "," property if you would rather it didn't."]}),e(o,{Element:re,code:ie,expand:!0}),e("h1",{children:"Inline Select Input"}),t("p",{children:["Add the ",e("code",{children:"inline"})," CSS class for inline select input fields. There isn't any margin applied between inline fields by default but you can add the ",e("code",{children:"mar-r-option"})," CSS class to have a margin added to the right side (or ",e("code",{children:"mar-l-option"})," to have it added to the left).  This is the same width margin that is added between ",e(s,{})," options."]}),e(o,{Element:le,code:ne,expand:!0})]}),se=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () =>
  <Form debug>
    <Field name="user_id" type="hidden" value="123"/>
    <Field name="name"    label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,ce=()=>t(r,{debug:!0,children:[e(a,{name:"user_id",type:"hidden",value:"123"}),e(a,{name:"name",label:"Your Name"}),e(c,{})]}),me=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () =>
  <Form values={{ user_id: 456, name: 'Alice' }}>
    <Field name="user_id" type="hidden"/>
    <Field name="name"    label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,pe=()=>t(r,{values:{user_id:456,name:"Alice"},children:[e(a,{name:"user_id",type:"hidden"}),e(a,{name:"name",label:"Your Name"}),e(c,{})]}),he=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const values = {
  name: 'Bob'
}
const hidden = {
  user_id: 789,
  version: 42,
}

const HiddenExample = () =>
  <Form values={values} hidden={hidden}>
    <Field name="name" label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,ue={name:"Bob"},fe={user_id:789,version:42},be=()=>t(r,{values:ue,hidden:fe,children:[e(a,{name:"name",label:"Your Name"}),e(c,{})]}),xe=()=>t("div",{children:[e("h1",{children:"Hidden Input"}),t("p",{children:["Set the ",e(l,{})," ",e(n,{})," to ",e("code",{children:"hidden"})," to embed a hidden value in the ",e(d,{}),".  A hidden value will be included in the form ",e("code",{children:"values"})," that will be submitted.  But otherwise it is invisible to the naked eye."]}),e(o,{Element:ce,code:se,children:t("p",{children:["The hidden value for ",e("code",{children:"user_id"}),' will be defined in the form values.  Try entering some text for "Your name" and then click on the "Submit" button.  You should see both the ',e("code",{children:"user_id"})," and ",e("code",{children:"name"})," included in the submitted values."]})}),t("p",{children:["You don't have to define the ",e("code",{children:"value"})," in the field as shown above.  It can also be defined in the ",e("code",{children:"values"})," that you pass to the ",e(d,{})]}),e(o,{Element:pe,code:me}),t("p",{children:["You can also pass ",e("code",{children:"hidden"})," values to the ",e(d,{})," and they will automatically be included in the submitted values."]}),e(o,{Element:be,code:he})]}),ye=()=>t(u,{children:[e(i,{path:"",end:!0,element:e(f,{})}),e(i,{path:"text",element:e(R,{})}),e(i,{path:"textarea",element:e(W,{})}),e(i,{path:"checkbox",element:e(Y,{})}),e(i,{path:"radio",element:e(te,{})}),e(i,{path:"select",element:e(de,{})}),e(i,{path:"hidden",element:e(xe,{})})]});export{ye as default};
