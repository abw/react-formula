import{j as t,a as e,T as h,am as u,F as o,c as a,e as r,h as n,E as i,w as d,an as p,p as m,S as s,d as c,_ as f,$ as l}from"./index-7755403d.js";const b=()=>t("div",{children:[e("h1",{children:"Inputs"}),e("p",{className:"intro",children:"This section of the documentation provides detailed information about different input types."}),e(h,{menu:u})]}),x=()=>t(o,{children:[e(a,{name:"one"}),e(a,{name:"two",label:"A text input with a label"}),e(a,{name:"three",label:"Another text input",type:"text"}),e(a,{name:"four",label:"Text with placeholder",placeholder:"Hello World!"}),e(a,{name:"money",label:"Prefix/Suffix",prefix:"$",suffix:".00"})]}),F=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Text`,y=()=>t(o,{children:[e(a,{name:"one",label:"A fluid field",className:"fluid",size:"25"}),e(a,{name:"two",label:"A text field with prefix and suffix",prefix:"$",suffix:".00",size:"6",className:"fluid"})]}),T=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Fluid`,S=()=>t(o,{children:[e(a,{name:"one",label:"A text field",size:"25",className:"inline mar-r-option"}),e(a,{name:"two",label:"A text field with prefix and suffix",prefix:"$",suffix:".00",size:"6",className:"inline"})]}),w=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Inline`,v=()=>t(o,{children:[e(a,{name:"one",type:"number",label:"A number field"}),e(a,{name:"two",type:"date",label:"A date field"}),e(a,{name:"three",type:"password",label:"A password field"}),e(a,{name:"four",type:"color",label:"A color field"})]}),E=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Variants`,R=()=>t("div",{children:[e("h1",{children:"Text Input"}),t("p",{children:["The default ",e(r,{})," ",e(n,{})," is ",e("code",{children:"text"}),".  You can specify it explicitly if you like, but it's entirely optional."]}),e(i,{Element:x,code:F,expand:!0}),e("h2",{children:"Fluid Text Input"}),t("p",{children:["The default behaviour is to make the text fields extend to the full width of the container.  Bitter experience has taught me that it's generally easier to do this and constrain the width of the container than it is to try and get all inputs the same width, especially if you're using prefix and suffix elements. You can add the ",e("code",{children:"fluid"})," CSS class via the"," ",e("code",{children:"className"})," property if you want a fluid width input."]}),t("p",{children:["The ",e("code",{children:"size"})," property can be set to tell the browser ",e("i",{children:"approximately"})," how wide the field should be in terms of characters, but don't rely on it being particularly accurate.  In terms of usability it is generally considered to be a good thing to give users a visual indication of how long the input is expected to be.  Unfortunately I can count on no hands the number of times a designer has agreed that this is more important than having all the fields fully justified."]}),e(i,{Element:y,code:T,expand:!0}),e("h2",{children:"Inline Text Input"}),t("p",{children:["Add the ",e("code",{children:"inline"})," CSS class for inline fields.  Note that there isn't any margin automatically added between successive inline fields.  You can add a margin using your own CSS class or inline style rules, or use the provided ",e("code",{children:"mar-r-option"})," ","utility class to add a margin to the right of a field.  There's also the ",e("code",{children:"mar-l-option"})," class for adding a margin to the left."]}),t("p",{children:["These utility classes are so named because it's the same margin width that is automatically added between options in the"," ",e(d,{})," input type.  The default value is ",e("code",{children:"1rem"}),". You can redefine it using the ",e("code",{children:"--option-margin"})," CSS variable. See ",e(p,{})," for further information."]}),e(i,{Element:S,code:w,expand:!0}),e("h2",{children:"Number, Date and other Field Types"}),t("p",{children:["All the other variants of the basic input type are supported.  Set the ",e("code",{children:"type"})," to ",e("code",{children:"number"})," for a numerical field,"," ",e("code",{children:"date"})," for a date selector, ",e("code",{children:"password"})," for a password field, and so on."]}),e(i,{Element:v,code:E,expand:!0})]}),N=()=>t(o,{children:[e(a,{type:"textarea",name:"one",label:"A text area input"}),e(a,{type:"textarea",name:"two",label:"Text area with rows",rows:"10"}),e(a,{type:"textarea",name:"three",label:"Thin text area with placeholder",placeholder:"Type here",className:"thin"})]}),g=`import { Form, Field } from '../../../../../lib/index.js'

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

export default TextAreaExample`,A=()=>e(o,{children:e(a,{name:"one",type:"textarea",label:"Fluid Text Area",className:"fluid"})}),k=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Fluid`,I=()=>t(o,{children:[e(a,{name:"one",type:"textarea",label:"Text Area One",className:"inline mar-r-option"}),e(a,{name:"one",type:"textarea",label:"Text Area Two",className:"inline"})]}),C=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Inline`,B=()=>t("div",{children:[e("h1",{children:"Text Area Input"}),t("p",{children:["Set the ",e(r,{})," ",e(n,{})," to ",e("code",{children:"textarea"})," for a text area input.  The optional ",e("code",{children:"rows"})," property can be used to specify the number of rows."]}),e(i,{Element:N,code:g,expand:!0}),e("h2",{children:"Fluid Text Area Input"}),t("p",{children:["Add the ",e("code",{children:"fluid"})," CSS class for a fluid width input."]}),e(i,{Element:A,code:k,expand:!0}),e("h2",{children:"Inline Text Area Input"}),t("p",{children:["Add the ",e("code",{children:"inline"})," CSS class for inline fields.  You may also want to add the ",e("code",{children:"mar-r-option"})," CSS class to add a margin to the right side of any fields that are followed by another field."]}),e(i,{Element:I,code:C,expand:!0})]}),P=()=>e(o,{children:e(a,{name:"one",type:"checkbox",label:"A checkbox example",text:"I like badgers!"})}),j=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Checkbox = () =>
  <Form>
    <Field
      name="one"
      type="checkbox"
      label="A checkbox example"
      text="I like badgers!"
    />
  </Form>

export default Checkbox`,D=()=>t(o,{children:[e(a,{name:"badger",type:"checkbox",text:"Badgers are brilliant!",className:"fluid"}),e(a,{name:"stoat",type:"checkbox",text:"Stoats are sexy!",className:"fluid"})]}),W=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const FluidCheckbox = () =>
  <Form>
    <Field
      name="badger"
      type="checkbox"
      text="Badgers are brilliant!"
      className="fluid"
    />
    <Field
      name="stoat"
      type="checkbox"
      text="Stoats are sexy!"
      className="fluid"
    />
  </Form>

export default FluidCheckbox`,$=()=>t(o,{children:[e(a,{name:"badger",type:"checkbox",text:"Badgers are brilliant!",className:"inline mar-r-option"}),e(a,{name:"ferret",type:"checkbox",text:"Ferrets are funky!",className:"inline"})]}),H=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const InlineCheckbox = () =>
  <Form>
    <Field
      name="badger"
      type="checkbox"
      text="Badgers are brilliant!"
      className="inline mar-r-option"
    />
    <Field
      name="ferret"
      type="checkbox"
      text="Ferrets are funky!"
      className="inline"
    />
  </Form>

export default InlineCheckbox`,Y=()=>e(o,{children:e(a,{name:"badger",label:"A bare checkbox",type:"checkbox",text:"I really, really like badgers!",className:"bare"})}),_=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const BareCheckbox = () =>
  <Form>
    <Field
      name="badger" label="A bare checkbox"
      type="checkbox" text="I really, really like badgers!"
      className="bare"
    />
  </Form>

export default BareCheckbox`,z=()=>t("div",{children:[e("h1",{children:"Checkbox Input"}),t("p",{children:["Set the ",e(r,{})," ",e(n,{})," to ",e("code",{children:"checkbox"})," for a checkbox. Use the ",e("code",{children:"text"})," property to define any text that you want to appear alongside the checkbox.  The ",e("code",{children:"label"})," is optional on all fields, so depending on what your checkbox text says, you might want to leave it out."]}),e(i,{Element:P,code:j,expand:!0}),e("h2",{children:"Fluid Checkbox Input"}),t("p",{children:["The default behaviour is for a checkbox to stretch to the full width of the container.  Add the ",e("code",{children:"fluid"})," CSS class using the ",e("code",{children:"className"})," property to give it a fluid width."]}),e(i,{Element:D,code:W,expand:!0}),e("h2",{children:"Inline Checkbox Input"}),t("p",{children:["Add the ",e("code",{children:"fluid"})," CSS class for inline fields.  Note that there isn't any margin automatically added between inline fields. If you want a margin then you can add it using your own class or style rules, or use the ",e("code",{children:"mar-r-option"})," utility class which adds a suitable margin on the right.  This is the same width as the margin that is added between ",e(d,{})," options."]}),e(i,{Element:$,code:H,expand:!0}),e("h2",{children:"Bare Checkbox Input"}),t("p",{children:["If boxes around checkboxes aren't your thing then the"," ",e("code",{children:"bare"})," class will strip them naked."]}),e(i,{Element:Y,code:_,expand:!0})]}),V=()=>e(o,{children:e(a,{name:"animal",label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]})}),L=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Radio = () =>
  <Form>
    <Field
      name="animal" label="What is your favourite animal?" type="radio"
      options={[ 'Badger', 'Ferret', 'Stoat' ]}
    />
  </Form>

export default Radio`,O=()=>e(o,{children:e(a,{name:"food",label:"What is your favourite number?",type:"radio",options:[{value:10,text:"Ten"},{value:11,text:"Eleven (one louder)",className:"bold"},{value:42,text:t(m,{children:["Forty-Two (the meaning of ",e("i",{children:"life"}),")"]})}],className:"fluid"})}),J=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const FluidRadio = () =>
  <Form>
    <Field
      name="food" label="What is your favourite number?" type="radio"
      options={[
        { value: 10, text: 'Ten' },
        { value: 11, text: 'Eleven (one louder)', className: 'bold' },
        { value: 42, text: <>Forty-Two (the meaning of <i>life</i>)</> },
      ]}
      className="fluid"
    />
  </Form>

export default FluidRadio`,U=()=>e(o,{children:e(a,{name:"food",label:"What is your favourite number?",type:"radio",options:[{value:10,text:"Ten"},{value:11,text:"Eleven (one louder)",className:"bold"},{value:42,text:t(m,{children:["Forty-Two (the meaning of ",e("i",{children:"life"}),")"]})}],className:"inline"})}),M=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const InlineRadio = () =>
  <Form>
    <Field
      name="food" label="What is your favourite number?" type="radio"
      options={[
        { value: 10, text: 'Ten' },
        { value: 11, text: 'Eleven (one louder)', className: 'bold' },
        { value: 42, text: <>Forty-Two (the meaning of <i>life</i>)</> },
      ]}
      className="inline"
    />
  </Form>

export default InlineRadio`,X=()=>e(o,{children:e(a,{name:"cheese",label:"What is your favourite cheese?",type:"radio",options:["Cheddar","Brie","Emmental"],className:"bare inline"})}),q=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const BareRadio = () =>
  <Form>
    <Field
      name="cheese" label="What is your favourite cheese?" type="radio"
      options={[ 'Cheddar', 'Brie', 'Emmental' ]}
      className="bare inline"
    />
  </Form>

export default BareRadio`,G=()=>t("div",{children:[e("h1",{children:"Radio Button Input"}),t("p",{children:["Set the ",e(r,{})," ",e(n,{})," to ",e("code",{children:"radio"})," to create a radio button set. The ",e("code",{children:"options"})," property should be used to define the options. In simple cases where the value and text are the same then you only need to provide an array of values.  Otherwise, provide an array of objects containing ",e("code",{children:"value"})," and ",e("code",{children:"text"})," ","properties."]}),t("p",{children:["You can also add ",e("code",{children:"className"})," if you want to add a particular class to an option.  Or for more complex markup, define the"," ",e("code",{children:"text"})," as a JSX snippet."]}),e(i,{Element:V,code:L,expand:!0}),e("h2",{children:"Fluid Radio Button Input"}),t("p",{children:["The default behaviour is for radio button options to expand to the full width of the container.  Add the ",e("code",{children:"fluid"})," CSS class using the ",e("code",{children:"className"})," property to give them fluid width."]}),e(i,{Element:O,code:J,expand:!0}),e("h2",{children:"Inline Radio Button Input"}),t("p",{children:["Add the ",e("code",{children:"inline"})," CSS class to have the options inline. Note that a margin is added between each option, but there isn't any margin applied to the right side of the field."]}),e(i,{Element:U,code:M,expand:!0}),e("h2",{children:"Bare Radio Button Input"}),t("p",{children:[`If you don't like the "boxy" look then add the`," ",e("code",{children:"bare"})," class to remove the border and background.  The focus ring will still appear when the input is focussed."]}),e(i,{Element:X,code:q,expand:!0})]}),K=()=>t(o,{children:[e(a,{name:"animal",type:"select",label:"What is your favourite animal?",options:["Badger","Ferret","Stoat"]}),e(a,{name:"food",type:"select",label:"What is your favourite number?",placeholder:"Pick a number",options:[{value:10,text:"Ten"},{value:11,text:"Eleven (one louder)",className:"bold"},{value:42,text:"Forty-Two (the meaning of life)"},{value:69,text:"Sixty nine, dude!",disabled:!0}]})]}),Q=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Select`,Z=()=>t(o,{children:[e(a,{name:"animal",type:"select",label:"What is your favourite animal?",options:["Badger","Ferret","Stoat"],className:"fluid"}),e(a,{name:"food",type:"select",label:"What is your favourite number?",placeholder:"Pick a number",options:[10,11,42,69],className:"fluid"})]}),ee=`import { Form, Field } from '../../../../../lib/index.js'

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

export default FluidSelect`,te=()=>t(o,{children:[e(a,{name:"animal",type:"select",label:"What is your favourite animal?",options:["Badger","Ferret","Stoat"],className:"inline mar-r-option"}),e(a,{name:"food",type:"select",label:"What is your favourite number?",placeholder:"Pick a number",options:[10,11,42,69],className:"inline"})]}),ae=`import { Form, Field } from '../../../../../lib/index.js'

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

export default InlineSelect`,ie=()=>t("div",{children:[e("h1",{children:"Select Input"}),t("p",{children:["Set the ",e(r,{})," ",e(n,{})," to ",e("code",{children:"select"})," to create a select input. Just like the ",e(d,{})," input, you can specify the ",e("code",{children:"options"})," as an array of simple values or objects containing ",e("code",{children:"value"})," and ",e("code",{children:"text"})," properties."]}),e(i,{Element:K,code:Q,expand:!0}),e("h1",{children:"Fluid Select Input"}),t("p",{children:["The default behaviour is for a select input to expand to the full width of the container. Add the ",e("code",{children:"fluid"})," CSS class via the"," ",e("code",{children:"className"})," "," property if you would rather it didn't."]}),e(i,{Element:Z,code:ee,expand:!0}),e("h1",{children:"Inline Select Input"}),t("p",{children:["Add the ",e("code",{children:"inline"})," CSS class for inline select input fields. There isn't any margin applied between inline fields by default but you can add the ",e("code",{children:"mar-r-option"})," CSS class to have a margin added to the right side (or ",e("code",{children:"mar-l-option"})," to have it added to the left).  This is the same width margin that is added between ",e(d,{})," options."]}),e(i,{Element:te,code:ae,expand:!0})]}),oe=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () =>
  <Form debug>
    <Field name="user_id" type="hidden" value="123"/>
    <Field name="name"    label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,le=()=>t(o,{debug:!0,children:[e(a,{name:"user_id",type:"hidden",value:"123"}),e(a,{name:"name",label:"Your Name"}),e(s,{})]}),re=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () =>
  <Form values={{ user_id: 456, name: 'Alice' }}>
    <Field name="user_id" type="hidden"/>
    <Field name="name"    label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,ne=()=>t(o,{values:{user_id:456,name:"Alice"},children:[e(a,{name:"user_id",type:"hidden"}),e(a,{name:"name",label:"Your Name"}),e(s,{})]}),de=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default HiddenExample`,ce={name:"Bob"},se={user_id:789,version:42},me=()=>t(o,{values:ce,hidden:se,children:[e(a,{name:"name",label:"Your Name"}),e(s,{})]}),he=()=>t("div",{children:[e("h1",{children:"Hidden Input"}),t("p",{children:["Set the ",e(r,{})," ",e(n,{})," to ",e("code",{children:"hidden"})," to embed a hidden value in the ",e(c,{}),".  A hidden value will be included in the form ",e("code",{children:"values"})," that will be submitted.  But otherwise it is invisible to the naked eye."]}),e(i,{Element:le,code:oe,children:t("p",{children:["The hidden value for ",e("code",{children:"user_id"}),' will be defined in the form values.  Try entering some text for "Your name" and then click on the "Submit" button.  You should see both the ',e("code",{children:"user_id"})," and ",e("code",{children:"name"})," included in the submitted values."]})}),t("p",{children:["You don't have to define the ",e("code",{children:"value"})," in the field as shown above.  It can also be defined in the ",e("code",{children:"values"})," that you pass to the ",e(c,{})]}),e(i,{Element:ne,code:re}),t("p",{children:["You can also pass ",e("code",{children:"hidden"})," values to the ",e(c,{})," and they will automatically be included in the submitted values."]}),e(i,{Element:me,code:de})]}),pe=()=>t(f,{children:[e(l,{path:"",end:!0,element:e(b,{})}),e(l,{path:"text",element:e(R,{})}),e(l,{path:"textarea",element:e(B,{})}),e(l,{path:"checkbox",element:e(z,{})}),e(l,{path:"radio",element:e(G,{})}),e(l,{path:"select",element:e(ie,{})}),e(l,{path:"hidden",element:e(he,{})})]});export{pe as default};
