import{j as t,a as e,T as n,am as c,F as l,c as a,E as o,p as s,S as d,d as i,_ as m,$ as r}from"./index-860d35d1.js";const h=()=>t("div",{children:[e("h1",{children:"Inputs"}),e("p",{className:"intro",children:"This section of the documentation provides detailed information about different input types."}),e(n,{menu:c})]}),p=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Text`,u=()=>t(l,{children:[e(a,{name:"one"}),e(a,{name:"two",label:"A text input with a label"}),e(a,{name:"three",label:"Another text input",type:"text"}),e(a,{name:"four",label:"Text with placeholder",placeholder:"Hello World!"}),e(a,{name:"money",label:"Prefix/Suffix",prefix:"$",suffix:".00"})]}),b=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const TextThin = () =>
  <Form>
    <Field
      name="one"
      label="A text field"
      className="thin"
      size="25"
    />
    <Field
      name="two"
      label="A text field with prefix and suffix"
      prefix="$" suffix=".00"
      size="6"
      className="thin"
    />
  </Form>

export default TextThin`,f=()=>t(l,{children:[e(a,{name:"one",label:"A text field",className:"thin",size:"25"}),e(a,{name:"two",label:"A text field with prefix and suffix",prefix:"$",suffix:".00",size:"6",className:"thin"})]}),x=()=>t("div",{children:[e("h1",{children:"Text Fields"}),t("p",{children:["The ",e("code",{className:"code",children:"Form"})," component is used to create a form wrapper.  Inside that the ",e("code",{className:"code",children:"Field"})," ","component is used to define a field.  The only property required is ",e("code",{className:"code",children:"name"}),"."]}),t("p",{children:["The default field ",e("code",{className:"code",children:"type"})," is"," ",e("code",{className:"code",children:"text"})," so it's optional in these examples.  You can provide a ",e("code",{className:"code",children:"label"})," ","and/or ",e("code",{className:"code",children:"placeholder"})," text.  Both are also optional."]}),e(o,{Element:u,code:p}),e("h2",{children:"Thin Text Fields"}),t("p",{children:["The default behaviour is to make the text fields extend to the full width of the container.  Bitter experience has taught me that it's generally easier to do this and constrain the width of the container than it is to try and get all inputs the same width, especially if you're using prefix and suffix elements. But if you really want to throw caution to the wind you can add the ",e("code",{className:"code",children:"thin"})," CSS class via the ",e("code",{className:"code",children:"className"})," property."]}),t("p",{children:["The ",e("code",{className:"code",children:"size"})," property can be set to tell the browser ",e("i",{children:"approximately"})," how wide the field should be in terms of characters, but don't rely on it being particularly accurate.  In terms of usability it is generally considered to be a good thing to give users a visual indication of how long the input is expected to be.  Unfortunately I can count on no hands the number of times a designer has agreed that this is more important than having all the fields fully justified."]}),e(o,{Element:f,code:b})]}),F=`import { Form, Field } from '../../../../../lib/index.js'

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

export default TextAreaExample`,y=()=>t(l,{children:[e(a,{type:"textarea",name:"one",label:"A text area input"}),e(a,{type:"textarea",name:"two",label:"Text area with rows",rows:"10"}),e(a,{type:"textarea",name:"three",label:"Thin text area with placeholder",placeholder:"Type here",className:"thin"})]}),T=()=>t("div",{children:[e("h1",{children:"Text Area Fields"}),t("p",{children:["Set the ",e("code",{className:"code",children:"type"})," to"," ",e("code",{className:"code",children:"textarea"})," for a text area input.  The optional ",e("code",{className:"code",children:"rows"})," property can be used to specify the number of rows."]}),e(o,{Element:y,code:F})]}),N=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const TextExample = () =>
  <Form>
    <Field name="one"   type="number"   label="A number field"/>
    <Field name="two"   type="date"     label="A date field"/>
    <Field name="three" type="password" label="A password field"/>
    <Field name="four"  type="color"    label="A color field"/>
  </Form>

export default TextExample`,w=()=>t(l,{children:[e(a,{name:"one",type:"number",label:"A number field"}),e(a,{name:"two",type:"date",label:"A date field"}),e(a,{name:"three",type:"password",label:"A password field"}),e(a,{name:"four",type:"color",label:"A color field"})]}),v=()=>t("div",{children:[e("h1",{children:"Number, Date and other Field Types"}),t("p",{children:["All the other variants of the basic input type are supported.  Set the ",e("code",{className:"code",children:"type"})," to ",e("code",{className:"code",children:"number"})," ",", for a numerical field, ",e("code",{className:"code",children:"date"})," for a date selector, ",e("code",{className:"code",children:"password"})," for a password field, and so on."]}),e(o,{Element:w,code:N})]}),E=()=>e(l,{children:e(a,{name:"one",label:"A checkbox example",type:"checkbox",text:"I like badgers!"})}),S=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Checkbox = () =>
  <Form>
    <Field
      name="one" label="A checkbox example"
      type="checkbox" text="I like badgers!"
    />
  </Form>

export default Checkbox`,k=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CheckboxWide = () =>
  <Form>
    <Field
      name="badger" label="A wide checkbox example"
      type="checkbox" text="I really like badgers!"
      className="wide"
    />
  </Form>

export default CheckboxWide`,R=()=>e(l,{children:e(a,{name:"badger",label:"A wide checkbox example",type:"checkbox",text:"I really like badgers!",className:"wide"})}),A=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CheckboxBare = () =>
  <Form>
    <Field
      name="badger" label="A bare checkbox"
      type="checkbox" text="I really, really like badgers!"
      className="bare"
    />
  </Form>

export default CheckboxBare`,g=()=>e(l,{children:e(a,{name:"badger",label:"A bare checkbox",type:"checkbox",text:"I really, really like badgers!",className:"bare"})}),B=()=>t("div",{children:[e("h1",{children:"Checkbox Fields"}),t("p",{children:["Set the ",e("code",{className:"code",children:"type"})," to"," ",e("code",{className:"code",children:"checkbox"})," for a checkbox.  Use the",e("code",{className:"code",children:"text"})," property to define any text that you want to appear alongside the checkbox.  The"," ",e("code",{className:"code",children:"label"})," is optional on all fields, so depending on what your checkbox text says, you might want to leave it out."]}),e(o,{Element:E,code:S}),e("h2",{children:"Wide Checkbox"}),t("p",{children:["The default behaviour is for a checkbox to only take up as much room as is required for the text.  Add the ",e("code",{className:"code",children:"wide"})," ","CSS class using the ",e("code",{className:"code",children:"className"})," property to make it extend across the full width of the container."]}),e(o,{Element:R,code:k}),e("h2",{children:"Bare Checkbox"}),t("p",{children:["If boxes around checkboxes aren't your thing then the"," ",e("code",{className:"code",children:"bare"})," class will strip them naked."]}),e(o,{Element:g,code:A})]}),W=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Radio`,j=()=>e(l,{children:e(a,{name:"animal",label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]})}),C=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioWide = () =>
  <Form>
    <Field
      name="food" label="What is your favourite number?" type="radio"
      options={[
        { value: 10, text: 'Ten' },
        { value: 11, text: 'Eleven (one louder)', className: 'bold' },
        { value: 42, text: <>Forty-Two (the meaning of <i>life</i>)</> },
      ]}
      className="wide"
    />
  </Form>

export default RadioWide`,P=()=>e(l,{children:e(a,{name:"food",label:"What is your favourite number?",type:"radio",options:[{value:10,text:"Ten"},{value:11,text:"Eleven (one louder)",className:"bold"},{value:42,text:t(s,{children:["Forty-Two (the meaning of ",e("i",{children:"life"}),")"]})}],className:"wide"})}),$=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioBare = () =>
  <Form>
    <Field
      name="cheese" label="What is your favourite cheese?" type="radio"
      options={[ 'Cheddar', 'Brie', 'Emmental' ]}
      className="bare"
    />
  </Form>

export default RadioBare`,H=()=>e(l,{children:e(a,{name:"cheese",label:"What is your favourite cheese?",type:"radio",options:["Cheddar","Brie","Emmental"],className:"bare"})}),I=()=>t("div",{children:[e("h1",{children:"Radio Button Fields"}),t("p",{children:["Set the ",e("code",{className:"code",children:"type"})," to"," ",e("code",{className:"code",children:"radio"})," to create a radio button set. The ",e("code",{className:"code",children:"options"})," property should be used to define the options.  In simple cases where the value and text are the same then you only need to provide an array of values.  Otherwise, provide an array of objects containing"," ",e("code",{className:"code",children:"value"})," and ",e("code",{className:"code",children:"text"})," ","properties."]}),t("p",{children:["You can also add ",e("code",{className:"code",children:"className"})," if you want to add a particular class to an option.  Or for more complex markup, define the ",e("code",{className:"code",children:"text"})," as a JSX snippet.  All of these properties can be defined in a"," ",e("a",{href:"schema",children:"separate scheme"}),' or you can "inline" them as shown here.  Whatever floats your boat.']}),e(o,{Element:j,code:W}),e("h2",{children:"Wide Radio Button Options"}),t("p",{children:["The default behaviour is for radio button options to only take up as much room as is required for the text.  Add the"," ",e("code",{className:"code",children:"wide"})," CSS class using the"," ",e("code",{className:"code",children:"className"})," property to make them extend across the full width of the container."]}),t("p",{children:[`If you don't like the "boxy" look then add the`," ",e("code",{className:"code",children:"bare"})," class to remove the border and background."]}),e(o,{Element:P,code:C}),e("h2",{children:"Bare Radio Button Options"}),t("p",{children:[`If you don't like the "boxy" look then add the`," ",e("code",{className:"code",children:"bare"})," class to remove the border and background."]}),e(o,{Element:H,code:$})]}),D=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SelectExample = () =>
  <Form>
    <Field
      name="animal" label="What is your favourite animal?" type="select"
      options={[ 'Badger', 'Ferret', 'Stoat' ]}
    />
    <Field
      name="food" label="What is your favourite number?" type="select"
      placeholder="Pick a number"
      options={[
        { value: 10, text: 'Ten' },
        { value: 11, text: 'Eleven (one louder)', className: 'bold' },
        { value: 42, text: 'Forty-Two (the meaning of life)' },
        { value: 69, text: 'Sixty nine, dude!', disabled: true }
      ]}
    />
  </Form>

export default SelectExample`,Y=()=>t(l,{children:[e(a,{name:"animal",label:"What is your favourite animal?",type:"select",options:["Badger","Ferret","Stoat"]}),e(a,{name:"food",label:"What is your favourite number?",type:"select",placeholder:"Pick a number",options:[{value:10,text:"Ten"},{value:11,text:"Eleven (one louder)",className:"bold"},{value:42,text:"Forty-Two (the meaning of life)"},{value:69,text:"Sixty nine, dude!",disabled:!0}]})]}),_=()=>t("div",{children:[e("h1",{children:"Select Fields"}),t("p",{children:["Set the ",e("code",{className:"code",children:"type"})," to"," ",e("code",{className:"code",children:"select"})," to create a select input. Just like the ",e("a",{href:"radio",children:"radio"})," field, you can specify the ",e("code",{className:"code",children:"options"})," as an array of simple values or objects containing"," ",e("code",{className:"code",children:"value"})," and ",e("code",{className:"code",children:"text"})," ","properties."]}),e(o,{Element:Y,code:D})]}),z=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () =>
  <Form debug>
    <Field name="user_id" type="hidden" value="123"/>
    <Field name="name"    label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,O=()=>t(l,{debug:!0,children:[e(a,{name:"user_id",type:"hidden",value:"123"}),e(a,{name:"name",label:"Your Name"}),e(d,{})]}),q=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () =>
  <Form values={{ user_id: 456, name: 'Alice' }}>
    <Field name="user_id" type="hidden"/>
    <Field name="name"    label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample`,J=()=>t(l,{values:{user_id:456,name:"Alice"},children:[e(a,{name:"user_id",type:"hidden"}),e(a,{name:"name",label:"Your Name"}),e(d,{})]}),U=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default HiddenExample`,L={name:"Bob"},M={user_id:789,version:42},V=()=>t(l,{values:L,hidden:M,children:[e(a,{name:"name",label:"Your Name"}),e(d,{})]}),X=()=>t("div",{children:[e("h1",{children:"Hidden Input"}),t("p",{children:["Set the ",e("code",{children:"type"})," to ",e("code",{children:"hidden"})," to embed a hidden value in the ",e(i,{}),".  A hidden value will be included in the form ",e("code",{children:"values"})," that will be submitted.  But otherwise it is invisible to the naked eye."]}),e(o,{Element:O,code:z,children:t("p",{children:["The hidden value for ",e("code",{children:"user_id"}),' will be defined in the form values.  Try entering some text for "Your name" and then click on the "Submit" button.  You should see both the ',e("code",{children:"user_id"})," and ",e("code",{children:"name"})," included in the submitted values."]})}),t("p",{children:["You don't have to define the ",e("code",{children:"value"})," in the field as shown above.  It can also be defined in the ",e("code",{children:"values"})," that you pass to the ",e(i,{})]}),e(o,{Element:J,code:q}),t("p",{children:["You can also pass ",e("code",{children:"hidden"})," values to the ",e(i,{})," and they will automatically be included in the submitted values."]}),e(o,{Element:V,code:U})]}),K=()=>t(m,{children:[e(r,{path:"",end:!0,element:e(h,{})}),e(r,{path:"text",element:e(x,{})}),e(r,{path:"textarea",element:e(T,{})}),e(r,{path:"number",element:e(v,{})}),e(r,{path:"checkbox",element:e(B,{})}),e(r,{path:"radio",element:e(I,{})}),e(r,{path:"select",element:e(_,{})}),e(r,{path:"hidden",element:e(X,{})})]});export{K as default};
