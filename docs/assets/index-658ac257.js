import{j as t,a as e,T as c,aA as m,F as r,c as a,e as l,h as n,E as o,x as p,S as s,d,_ as h,$ as i}from"./index-d33ecaeb.js";const u=()=>t("div",{children:[e("h1",{children:"Inputs"}),e("p",{className:"intro",children:"This section of the documentation provides detailed information about different input types."}),e(c,{menu:m})]}),b=()=>t(r,{children:[e(a,{name:"one"}),e(a,{name:"two",label:"A text input with a label"}),e(a,{name:"three",label:"Another text input",type:"text"}),e(a,{name:"four",label:"Text with placeholder",placeholder:"Hello World!"}),e(a,{name:"money",label:"Prefix/Suffix",prefix:"$",suffix:".00",prefixClass:"lined shaded",suffixClass:"lined shaded"})]}),f=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Text = () =>
  <Form>
    <Field
      name="one"
    />
    <Field
      name="two"
      label="A text input with a label"
    />
    <Field
      name="three"
      label="Another text input"
      type="text"
    />
    <Field
      name="four"
      label="Text with placeholder"
      placeholder="Hello World!"
    />
    <Field
      name="money"
      label="Prefix/Suffix"
      prefix="$"
      suffix=".00"
      prefixClass="lined shaded"
      suffixClass="lined shaded"
    />
  </Form>

export default Text`,x=()=>e(r,{children:t("div",{className:"grid-2 gap-4",children:[e(a,{name:"one",label:"Field One"}),e(a,{name:"two",label:"Field Two"})]})}),F=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Grid = () =>
  <Form>
    <div className="grid-2 gap-4">
      <Field
        name="one"
        label="Field One"
      />
      <Field
        name="two"
        label="Field Two"
      />
    </div>
  </Form>

export default Grid`,y=()=>t(r,{children:[e(a,{name:"one",label:"A text field",size:"25",inline:!0}),e(a,{name:"two",label:"A text field with prefix and suffix",prefix:"$",suffix:".00",prefixClass:"lined shaded",suffixClass:"lined shaded",size:"6",inline:!0})]}),S=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Inline = () =>
  <Form>
    <Field
      name="one"
      label="A text field"
      size="25"
      inline
    />
    <Field
      name="two"
      label="A text field with prefix and suffix"
      prefix="$" suffix=".00"
      prefixClass="lined shaded"
      suffixClass="lined shaded"
      size="6"
      inline
    />
  </Form>

export default Inline`,T=()=>t(r,{children:[e(a,{name:"one",type:"number",label:"A number field"}),e(a,{name:"two",type:"date",label:"A date field"}),e(a,{name:"three",type:"password",label:"A password field"}),e(a,{name:"four",type:"color",label:"A color field"})]}),w=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Variants = () =>
  <Form>
    <Field
      name="one"
      type="number"
      label="A number field"
    />
    <Field
      name="two"
      type="date"
      label="A date field"
    />
    <Field
      name="three"
      type="password"
      label="A password field"
    />
    <Field
      name="four"
      type="color"
      label="A color field"
    />
  </Form>

export default Variants`,R=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Text Input"}),t("p",{children:["The default ",e(l,{})," ",e(n,{})," is ",e("code",{children:"text"}),".  You can specify it explicitly if you like, but it's entirely optional."]}),e(o,{Element:b,code:f,expand:!0}),e("h2",{children:"Inline Text Input"}),e("p",{children:"The default behaviour is to make the text fields extend to the full width of the container.  Bitter experience has taught me that it's generally easier to do this and constrain the width of the container than it is to try and get all inputs the same width, especially if you're using prefix and suffix elements."}),t("p",{children:["You can set the ",e("code",{children:"inline"})," property on a field if you want the input to have fluid width."]}),e(o,{Element:y,code:S,expand:!0}),e("h2",{children:"Grid Layout"}),e("p",{children:"Another, possibly better approach, is to use CSS grids to layout fields."}),e(o,{Element:x,code:F,expand:!0}),e("h2",{children:"Number, Date and other Field Types"}),t("p",{children:["All the other variants of the basic input type are supported.  Set the ",e("code",{children:"type"})," to ",e("code",{children:"number"})," for a numerical field,"," ",e("code",{children:"date"})," for a date selector, ",e("code",{children:"password"})," for a password field, and so on."]}),e(o,{Element:T,code:w,expand:!0})]}),E=()=>t(r,{children:[e(a,{type:"textarea",name:"one",label:"A text area input"}),e(a,{type:"textarea",name:"two",label:"Text area with rows",rows:"10"}),e(a,{type:"textarea",name:"three",label:"Thin text area with placeholder",placeholder:"Type here",className:"thin"})]}),g=`import { Form, Field } from '../../../../../lib/index.js'

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

export default TextAreaExample`,C=()=>t(r,{children:[e(a,{name:"one",type:"textarea",label:"Text Area One",inline:!0}),e(a,{name:"one",type:"textarea",label:"Text Area Two",inline:!0})]}),v=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Inline = () =>
  <Form>
    <Field
      name="one"
      type="textarea"
      label="Text Area One"
      inline
    />
    <Field
      name="one"
      type="textarea"
      label="Text Area Two"
      inline
    />
  </Form>

export default Inline`,k=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Text Area Input"}),t("p",{children:["Set the ",e(l,{})," ",e(n,{})," to ",e("code",{children:"textarea"})," for a text area input.  The optional ",e("code",{children:"rows"})," property can be used to specify the number of rows."]}),e(o,{Element:E,code:g,expand:!0}),e("h2",{children:"Inline Text Area Input"}),t("p",{children:["By default a text area will expand to fill the width of the container. Add the ",e("code",{children:"inline"})," property to give it a fluid width."]}),e(o,{Element:C,code:v,expand:!0})]}),A=()=>t(r,{children:[e(a,{name:"one",type:"checkbox",label:"Default Checkbox",text:"I like badgers!"}),e(a,{name:"two",type:"checkbox",text:"I accept the terms and conditions"})]}),B=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Checkbox`,I=()=>e(r,{children:e(a,{type:"checkbox",name:"badger",label:"Checkbox Border",text:"I really, really like badgers!",border:!0})}),N=`import { Form, Field } from '../../../../../lib/index.js'

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

export default CheckboxBorder`,W=()=>t(r,{children:[e(a,{name:"badger",type:"checkbox",text:"Badgers are brilliant!",border:!0,inline:!0}),e(a,{name:"stoat",type:"checkbox",text:"Stoats are sexy!",border:!0,inline:!0})]}),O=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CheckboxWide = () =>
  <Form>
    <Field
      name="badger"
      type="checkbox"
      text="Badgers are brilliant!"
      border inline
    />
    <Field
      name="stoat"
      type="checkbox"
      text="Stoats are sexy!"
      border inline
    />
  </Form>

export default CheckboxWide`,P=()=>e(r,{children:e(a,{name:"badger",type:"checkbox",text:"Badgers are brilliant!",inputClass:"larger"})}),j=`import { Form, Field } from '../../../../../lib/index.js'

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

export default CheckboxInputClass`,D=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Checkbox Input"}),t("p",{children:["Set the ",e(l,{})," ",e(n,{})," to ",e("code",{children:"checkbox"})," for a checkbox. Use the ",e("code",{children:"text"})," property to define any text that you want to appear alongside the checkbox.  The ",e("code",{children:"label"})," is optional on all fields, so depending on what your checkbox text says, you might want to leave it out."]}),e(o,{Element:A,code:B,expand:!0}),e("h2",{children:e("code",{children:"border"})}),t("p",{children:["Add the ",e("code",{children:"border"})," property if you want a border around the checkbox item."]}),e(o,{Element:I,code:N,expand:!0}),e("h2",{children:e("code",{children:"inline"})}),t("p",{children:["The default behaviour is for checkboxes to expand to the full width of the container. Add the ",e("code",{children:"inline"})," property to make them only expand as wide as necessary."]}),e(o,{Element:W,code:O,expand:!0}),e("h2",{children:e("code",{children:"inputClass"})}),t("p",{children:["The ",e("code",{children:"inputClass"})," property can be used to add a CSS class to the checkbox input."]}),e(o,{Element:P,code:j,expand:!0})]}),H=()=>e(r,{children:e(a,{type:"radio",name:"animal",label:"Radio Buttons",options:[{value:"badger",text:"Bobby Badger",className:"underline"},{value:"ferret",text:"Franky Ferret"},{value:"stoat",text:"Simon Stoat"},{value:"weasel",text:"Willy Weasel"}]})}),$=`import { Form, Field } from '../../../../../lib/index.js'

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
          className: 'underline'
        },
        { value: 'ferret', text: 'Franky Ferret' },
        { value: 'stoat',  text: 'Simon Stoat'   },
        { value: 'weasel', text: 'Willy Weasel'  }
      ]}
    />
  </Form>

export default RadioOptions
`,Y=()=>e(r,{children:e(a,{type:"radio",name:"animal",label:"Simple Options",options:["Badger","Ferret","Stoat","Weasel"]})}),G=`import { Form, Field } from '../../../../../lib/index.js'

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
`,_=()=>e(r,{children:e(a,{type:"radio",name:"animal",label:"Inline Options",options:["Badger","Ferret","Stoat","Weasel"],inline:!0})}),L=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioInline = () =>
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Inline Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      inline
    />
  </Form>

export default RadioInline`,M=()=>t(r,{children:[e(a,{type:"radio",name:"animal1",label:"Border Options",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"inline mar-r-2",border:!0}),e(a,{type:"radio",name:"animal2",label:"Wide Border Options",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"mar-b-2",border:!0,wide:!0})]}),V=`import { Form, Field } from '../../../../../lib/index.js'

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
      optionClass="inline mar-r-2"
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

export default RadioBorder`,z=()=>t(r,{children:[e(a,{type:"radio",name:"animal1",label:"Flex Options With Gaps",options:["Badger","Ferret","Stoat","Weasel"],optionsClass:"flex gap-4",border:!0}),e(a,{type:"radio",name:"animal2",label:"Grid Options with Gaps",options:["Badger","Ferret","Stoat","Weasel"],optionsClass:"grid-2 gap-4",border:!0})]}),J=`import { Form, Field } from '../../../../../lib/index.js'

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
      optionsClass="flex gap-4"
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

export default RadioOptionsClass`,U=()=>t(r,{children:[e(a,{type:"radio",name:"animal1",label:"Options With Margins on Right and Extra Padding",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"inline mar-r-4 mar-b-4 pad-h-4",border:!0}),e(a,{type:"radio",name:"animal2",label:"Large Options With Margins and Padding",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"large mar-b-4 pad-v-2 pad-h-4",border:!0})]}),X=`import { Form, Field } from '../../../../../lib/index.js'

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
      optionClass="inline mar-r-4 mar-b-4 pad-h-4"
      border
    />
    <Field
      type="radio"
      name="animal2"
      label="Large Options With Margins and Padding"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionClass="large mar-b-4 pad-v-2 pad-h-4"
      border
    />
  </Form>

export default RadioOptionsClass`,q=()=>e(r,{children:e(a,{type:"radio",name:"animal",label:"Input Class",options:["Badger","Ferret","Stoat","Weasel"],inputClass:"larger"})}),K=`import { Form, Field } from '../../../../../lib/index.js'

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

export default RadioInputClass`,Q=()=>t("div",{className:"prose",children:[e("h1",{children:"Radio Button Input"}),t("p",{children:["Set the ",e(l,{})," ",e(n,{})," to ",e("code",{children:"radio"})," to create a radio button set. The ",e("code",{children:"options"})," property should be used to define the options. This should be an array of objects containing"," ",e("code",{children:"value"})," and ",e("code",{children:"text"})," "," properties."]}),t("p",{children:["You can also add ",e("code",{children:"className"})," if you want to add a particular class to an option.  Or for more complex markup, define the"," ",e("code",{children:"text"})," as a JSX snippet."]}),e(o,{Element:H,code:$,expand:!0}),t("p",{children:["In simple cases where the value and text are the same then you can define ",e("code",{children:"options"})," as an array of values."]}),e(o,{Element:Y,code:G,expand:!0}),e("h2",{children:e("code",{children:"inline"})}),t("p",{children:["The default behaviour is for radio button options to be displayed as blocks that extend to the full width of the container.  Add the",e("code",{children:"inline"})," property to keep them inline."]}),e(o,{Element:_,code:L,expand:!0}),e("h2",{children:e("code",{children:"border"})}),t("p",{children:["Add the ",e("code",{children:"border"})," CSS class to have the options inline. Note that margins aren't automatically added between option, but you can use the ",e("code",{children:"optionClass"})," and/or"," ",e("code",{children:"optionsClass"})," properties, described below, to add them."]}),e(o,{Element:M,code:V,expand:!0}),e("h2",{children:e("code",{children:"optionsClass"})}),t("p",{children:["The ",e("code",{children:"optionsClass"})," property (note plural) can be used to add a CSS class to the options container.  This is useful for adding gaps between options, or if you want to display the options in a grid, for example."]}),e(o,{Element:z,code:J,expand:!0}),e("h2",{children:e("code",{children:"optionClass"})}),t("p",{children:["The ",e("code",{children:"optionClass"})," property (note singular) can be used to add a CSS class to each of the options.  This is useful if you want to add margins to options, for example."]}),e(o,{Element:U,code:X,expand:!0}),e("h2",{children:e("code",{children:"inputClass"})}),t("p",{children:["The ",e("code",{children:"inputClass"})," property can be used to add a CSS class to the radio input."]}),e(o,{Element:q,code:K,expand:!0})]}),Z=()=>t(r,{children:[e(a,{name:"animal",type:"select",label:"What is your favourite animal?",options:["Badger","Ferret","Stoat"]}),e(a,{name:"food",type:"select",label:"What is your favourite number?",placeholder:"Pick a number",options:[{value:10,text:"Ten"},{value:11,text:"Eleven (one louder)",className:"bold"},{value:42,text:"Forty-Two (the meaning of life)"},{value:69,text:"Sixty nine, dude!",disabled:!0}]})]}),ee=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Select`,te=()=>t(r,{children:[e(a,{name:"animal",type:"select",label:"What is your favourite animal?",options:["Badger","Ferret","Stoat"],className:"mar-r-option",inline:!0}),e(a,{name:"food",type:"select",label:"What is your favourite number?",placeholder:"Pick a number",options:[10,11,42,69],inline:!0})]}),ae=`import { Form, Field } from '../../../../../lib/index.js'

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
      className="mar-r-option"
      inline
    />
    <Field
      name="food"
      type="select"
      label="What is your favourite number?"
      placeholder="Pick a number"
      options={[ 10, 11, 42, 69 ]}
      inline
    />
  </Form>

export default InlineSelect`,oe=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Select Input"}),t("p",{children:["Set the ",e(l,{})," ",e(n,{})," to ",e("code",{children:"select"})," to create a select input. Just like the ",e(p,{})," input, you can specify the ",e("code",{children:"options"})," as an array of simple values or objects containing ",e("code",{children:"value"})," and ",e("code",{children:"text"})," properties."]}),e(o,{Element:Z,code:ee,expand:!0}),e("h1",{children:"Inline Select Input"}),t("p",{children:["Select elements default to full-width block elements. Add the ",e("code",{children:"inline"})," CSS class to keep them inline."]}),e(o,{Element:te,code:ae,expand:!0})]}),re=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () =>
  <Form debug>
    <Field name="user_id" type="hidden" value="123"/>
    <Field name="name"    label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,ie=()=>t(r,{debug:!0,children:[e(a,{name:"user_id",type:"hidden",value:"123"}),e(a,{name:"name",label:"Your Name"}),e(s,{})]}),le=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () =>
  <Form values={{ user_id: 456, name: 'Alice' }}>
    <Field name="user_id" type="hidden"/>
    <Field name="name"    label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,ne=()=>t(r,{values:{user_id:456,name:"Alice"},children:[e(a,{name:"user_id",type:"hidden"}),e(a,{name:"name",label:"Your Name"}),e(s,{})]}),de=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default HiddenExample`,se={name:"Bob"},ce={user_id:789,version:42},me=()=>t(r,{values:se,hidden:ce,children:[e(a,{name:"name",label:"Your Name"}),e(s,{})]}),pe=()=>t("div",{children:[e("h1",{children:"Hidden Input"}),t("p",{children:["Set the ",e(l,{})," ",e(n,{})," to ",e("code",{children:"hidden"})," to embed a hidden value in the ",e(d,{}),".  A hidden value will be included in the form ",e("code",{children:"values"})," that will be submitted.  But otherwise it is invisible to the naked eye."]}),e(o,{Element:ie,code:re,children:t("p",{children:["The hidden value for ",e("code",{children:"user_id"}),' will be defined in the form values.  Try entering some text for "Your name" and then click on the "Submit" button.  You should see both the ',e("code",{children:"user_id"})," and ",e("code",{children:"name"})," included in the submitted values."]})}),t("p",{children:["You don't have to define the ",e("code",{children:"value"})," in the field as shown above.  It can also be defined in the ",e("code",{children:"values"})," that you pass to the ",e(d,{})]}),e(o,{Element:ne,code:le}),t("p",{children:["You can also pass ",e("code",{children:"hidden"})," values to the ",e(d,{})," and they will automatically be included in the submitted values."]}),e(o,{Element:me,code:de})]}),ue=()=>t(h,{children:[e(i,{path:"",end:!0,element:e(u,{})}),e(i,{path:"text",element:e(R,{})}),e(i,{path:"textarea",element:e(k,{})}),e(i,{path:"checkbox",element:e(D,{})}),e(i,{path:"radio",element:e(Q,{})}),e(i,{path:"select",element:e(oe,{})}),e(i,{path:"hidden",element:e(pe,{})})]});export{ue as default};
