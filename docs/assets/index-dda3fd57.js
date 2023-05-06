import{j as t,a as e,x as U,y as H,L as E,r as p,h as b,F as n,b as l,z as y,d as u,c as s,n as G,S as h,v as q,w as a,D as w,U as W,A as K,B as J,m as P,G as g,H as F,I as N,J as z,K as Q,N as X,O as Z,P as _,Q as j,V as ee,W as te,X as le,Y as oe,Z as re,_ as ne,f as R,i as Y,g as ie,E as ae,$ as O,a0 as B,a1 as I,a2 as T,e as S,a3 as $,a4 as C,o as A,a5 as de,q as se,a6 as ce}from"./index-33e67b92.js";import{E as r,p as me}from"./Example-581f2c92.js";import{c as v}from"./index.esm-ecaef62f.js";const ue=()=>t("div",{children:[e("h1",{children:"Components"}),e("p",{children:"This section of the documentation provides detailed information about each of the components."}),e("ul",{className:"menu",children:U.items.map((o,i)=>e(H,{item:o,showAbout:!0},i))})]}),he=()=>t("div",{children:[e("h1",{children:"Form"}),t("p",{children:["The ",e("code",{children:"Form"})," component is used to render a form. Inside the form you will typically have one or more"," ",e(E,{to:"/field",children:e("code",{children:"Field"})})," components to render the fields and a ",e(E,{to:"/form/submit",children:e("code",{children:"Submit"})})," ","component to add a submit button."]}),t("ul",{className:"menu",children:[e("li",{children:e(E,{to:"./properties",text:"Form properties"})}),t("li",{children:[e(E,{to:"./reset",children:e("code",{children:"Reset"})})," component to reset the form"]}),t("li",{children:[e(E,{to:"./submit",children:e("code",{children:"Submit"})})," component to submit the form"]}),t("li",{children:[t(E,{to:"./controls",children:["Controls combining ",e("code",{children:"Submit"})]})," component to submit the form"]})]})]}),pe=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:"THIS IS TODO"}),t("pre",{children:["className:         FORMULA",e("br",{}),"errorsInHeader:    true",e("br",{}),"errorsInFooter:    false,",e("br",{}),"enctype:           application/x-www-form-urlencoded",e("br",{}),"method:            post",e("br",{}),"headerClass:       header",e("br",{}),"bodyClass:         body",e("br",{}),"footerClass:       footer",e("br",{}),"errorsClass:       errors",e("br",{}),"errorsTitle:       n => `Form Submission Error... errorPrompt:       Please correct this problem and re-submit:",e("br",{}),"errorsPrompt:      n => `Please correct these... submittingClass:   SUBMITTING,",e("br",{}),"validatingClass:   VALIDATING",e("br",{})]})]}),fe=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetFocusExample = () => {
  const [form, setForm] = useState(false)

  return (
    <>
      <Form onLoad={setForm}>
        <Field
          name="field1" label="Field One"
        />
        <Field
          name="field2" label="Field Two"
          type="textarea"
        />
        <Field
          name="field3" label="Field Three"
          type="checkbox" text="I agree to the Terms and Conditions"
        />
        <Field
          name="field4" label="Field Four"
          type="select" options={['Nigel', 'David', 'Derek']}
        />
        <Field
          name="field5" label="Field Five"
          type="radio" default='Keyboards'
          options={['Vocals', 'Guitar', 'Bass', 'Keyboards', 'Drums']}
        />
      </Form>
      <div>
        <button className="btn-blue" onClick={() => form?.setFocus('field1')}>
          Focus One
        </button>
        <button className="btn-blue" onClick={() => form?.setFocus('field2')}>
          Focus Two
        </button>
        <button className="btn-blue" onClick={() => form?.setFocus('field3')}>
          Focus Three
        </button>
        <button className="btn-blue" onClick={() => form?.setFocus('field4')}>
          Focus Four
        </button>
        <button className="btn-blue" onClick={() => form?.setFocus('field5')}>
          Focus Five
        </button>
      </div>
    </>
  )
}

export default SetFocusExample`,be=()=>{const[o,i]=p.useState(!1);return t(b,{children:[t(n,{onLoad:i,children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",type:"textarea"}),e(l,{name:"field3",label:"Field Three",type:"checkbox",text:"I agree to the Terms and Conditions"}),e(l,{name:"field4",label:"Field Four",type:"select",options:["Nigel","David","Derek"]}),e(l,{name:"field5",label:"Field Five",type:"radio",default:"Keyboards",options:["Vocals","Guitar","Bass","Keyboards","Drums"]})]}),t("div",{children:[e("button",{className:"btn-blue",onClick:()=>o==null?void 0:o.setFocus("field1"),children:"Focus One"}),e("button",{className:"btn-blue",onClick:()=>o==null?void 0:o.setFocus("field2"),children:"Focus Two"}),e("button",{className:"btn-blue",onClick:()=>o==null?void 0:o.setFocus("field3"),children:"Focus Three"}),e("button",{className:"btn-blue",onClick:()=>o==null?void 0:o.setFocus("field4"),children:"Focus Four"}),e("button",{className:"btn-blue",onClick:()=>o==null?void 0:o.setFocus("field5"),children:"Focus Five"})]})]})},Fe=`import { Form, Field, useForm } from '../../../../../lib/index.js'

{/* START */}
import React  from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/react-formula'

const UseFormFocus = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two"/>
    <FieldFocusButton name="field1" caption="Focus Field One"/>
    <FieldFocusButton name="field2" caption="Focus Field Two"/>
  </Form>

const FieldFocusButton = ({name, caption}) => {
  const { setFocus } = useForm()
  return (
    <button
      className="btn-blue"
      onClick={ e => { e.preventDefault(); setFocus(name) } }
    >
      {caption}
    </button>
  )
}

export default UseFormFocus`,xe=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two"}),e(V,{name:"field1",caption:"Focus Field One"}),e(V,{name:"field2",caption:"Focus Field Two"})]}),V=({name:o,caption:i})=>{const{setFocus:d}=y();return e("button",{className:"btn-blue",onClick:c=>{c.preventDefault(),d(o)},children:i})},Ee=`import { useForm } from '../../../../../lib/index.js'

{/* START */}
import React  from 'react'
// PRETEND: import { useForm } from '@abw/react-formula'

const FieldFocusButton = ({name, caption}) => {
  const { setFocus } = useForm()
  return (
    <button className="btn-blue" onClick={ e => setFocus(name, e) }>
      {caption}
    </button>
  )
}

export default FieldFocusButton`,Se=()=>t("div",{children:[e("h1",{children:"Focus Fields"}),e("h2",{children:e("code",{children:"setFocus()"})}),t("p",{children:["You can programmatically set the focus on a ",e(u,{})," by calling the ",e("code",{children:"setFocus()"})," method on the ",e(s,{}),", passing the name of the field that you want to focus as an argument."]}),t("p",{children:["You can capture a reference to the form using the ",e("code",{children:"onLoad"})," ","property to set a state variable, as shown in this example."]}),e(r,{Element:be,code:fe,caption:"onLoad() and setFocus()",children:e("p",{children:"Click on one of the buttons to focus on a field."})}),t("p",{children:["If the buttons (or other controls) that you want to use to focus the fields are contained within the ",e(s,{})," then you can call the ",e("code",{children:"useForm()"})," function to gain access to the form context."]}),e(r,{Element:xe,code:Fe,caption:"useForm() and setFocus()"}),t("p",{children:["Be careful to make sure that your buttons call"," ",e("code",{children:"e.preventDefault()"})," on the event, as shown in the example above, otherwise the form may be submitted.  Alternately you can pass the event to the ",e("code",{children:"setFocus()"})," method as the second argument and it will do it for you, as shown below."]}),e(G,{code:me(Ee)})]}),we=()=>t(n,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(h,{})]}),ge=`import { Form, Field, Submit } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one" required/>
    <Field name="two"   label="Field two" required/>
    <Field name="three" label="Field three"/>
    <Submit/>
  </Form>

export default SubmitExample`,ve=()=>t("div",{children:[e("h1",{children:"Validation"}),e("p",{children:"Validation can be applied on two levels: on individual fields and/or on the form."}),t("p",{children:["You can specify a field is ",e("code",{children:"required"}),", as shown here, or define your own custom ",e(E,{to:"/components/field/validation",text:"field validation"})," functions. When the form is submitted, each field will be validated.  If any validation errors occur then the form submission will be cancelled and the errors displayed."]}),e(r,{Element:we,code:ge,caption:"Required Fields",children:e("p",{children:"Try entering some text in the fields below then click on the Submit button.  The first two fields are required so you can leave either of the them empty to see the validation errors."})}),t("p",{children:["You can also define a ",e("code",{children:"validate"})," function on the ",e(s,{}),". This will be run after any field validation and will be passed"]})]}),ye=`import { Form, Field } from '../../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetValues = () => {
  const [form, setForm] = useState()
  const setValues = (color, animal) =>
    form?.setValues({ color, animal })

  return (
    <>
      <Form onLoad={setForm}>
        <Field name="color"  label="Color"/>
        <Field name="animal" label="Animal"/>
      </Form>

      <button onClick={() => setValues('Grey', 'Elephant')}>
        Grey Elephant
      </button>

      <button onClick={() => setValues('Red', 'Fox')}>
        Red Fox
      </button>
    </>
  )
}

export default SetValues`,Re=()=>{const[o,i]=p.useState(),d=(c,k)=>o==null?void 0:o.setValues({color:c,animal:k});return t(b,{children:[t(n,{onLoad:i,children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"})]}),e("button",{onClick:()=>d("Grey","Elephant"),children:"Grey Elephant"}),e("button",{onClick:()=>d("Red","Fox"),children:"Red Fox"})]})},Te=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/react-formula'

const UseSetValues = () =>
  <>
    <Form>
      <Field name="color"  label="Color"/>
      <Field name="animal" label="Animal"/>
      <Setter color="Grey" animal="Elephant"/>
      <Setter color="Red"  animal="Fox"/>
    </Form>
  </>

const Setter = ({ color, animal }) => {
  const { setValues } = useForm()
  return (
    <button onClick={
      e => {
        e.preventDefault()
        setValues({ color, animal }, e)
      }
    }>
      {color} {animal}
    </button>
  )
}

export default UseSetValues`,Ce=()=>e(b,{children:t(n,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),e(L,{color:"Grey",animal:"Elephant"}),e(L,{color:"Red",animal:"Fox"})]})}),L=({color:o,animal:i})=>{const{setValues:d}=y();return t("button",{onClick:c=>{c.preventDefault(),d({color:o,animal:i},c)},children:[o," ",i]})},ke=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/react-formula'

const UseSetValues = () =>
  <>
    <Form>
      <Field name="color"  label="Color"/>
      <Field name="animal" label="Animal"/>
      <Setter color="Grey" animal="Elephant"/>
      <Setter color="Red"  animal="Fox"/>
    </Form>
  </>

const Setter = ({ color, animal }) => {
  const { setValues } = useForm()
  return (
    <button onClick={e => setValues({ color, animal }, e)}>
      {color} {animal}
    </button>
  )
}

export default UseSetValues`,qe=()=>e(b,{children:t(n,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),e(D,{color:"Grey",animal:"Elephant"}),e(D,{color:"Red",animal:"Fox"})]})}),D=({color:o,animal:i})=>{const{setValues:d}=y();return t("button",{onClick:c=>d({color:o,animal:i},c),children:[o," ",i]})},Oe=()=>t("div",{children:[e("h1",{children:"Setting Form Values"}),e("h2",{children:"setValues()"}),t("p",{children:["The ",e("code",{children:"setValues"})," function can be used to programmatically set form values.  You can use the ",e("code",{children:"onLoad"})," handler to save a reference to the form context as show in this example."]}),e(r,{Element:Re,code:ye,caption:"setValues",children:e("p",{children:"Click on one of the buttons to update the form values."})}),t("p",{children:["If you want to set the values from a component placed inside the"," ",e("code",{children:"Form"})," component then you can use ",e("code",{children:"useForm()"})," to get access to the form context."]}),e(r,{Element:Ce,code:Te,caption:"setValues"}),t("p",{children:["If you're using a ",e("code",{children:"button"})," to trigger the call to"," ",e("code",{children:"setValues()"}),", as shown in the example above, then you need to make sure you call ",e("code",{children:"e.preventDefault()"})," event.  Otherwise the form may be submitted. Alternately you can pass the event as the second argument to the ",e("code",{children:"setValues()"})," method as shown below and it will do it for you."]}),e(r,{Element:qe,code:ke,caption:"setValues"})]}),Ae=()=>t(q,{children:[e(a,{path:"",end:!0,element:e(he,{})}),e(a,{path:"properties",element:e(pe,{})}),e(a,{path:"setfocus",element:e(Se,{})}),e(a,{path:"validation",element:e(ve,{})}),e(a,{path:"set/*",element:e(Oe,{})})]}),Ne=()=>t(b,{children:[e("h1",{children:"Field"}),e("h2",{children:"TODO"}),e("ul",{children:e("li",{children:"Field reset"})})]}),Ve=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:"THIS IS TODO"})]}),Le=`import { Form, Field, Debug, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit, Debug } from '@abw/react-formula'

const NameExample = () =>
  <Form>
    <Field name="field1"/>
    <Submit/>
    <Debug/>
  </Form>

export default NameExample`,De=()=>t(n,{children:[e(l,{name:"field1"}),e(h,{}),e(w,{})]}),Pe=`import { Form, Field, Debug, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit, Debug } from '@abw/react-formula'

const fields = {
  field1: {
    label: 'This is field one',
    required: true
  }
}

const FormFieldsExample = () =>
  <Form fields={fields}>
    <Field name="field1"/>
    <Submit/>
    <Debug/>
  </Form>

export default FormFieldsExample`,je={field1:{label:"This is field one",required:!0}},Ye=()=>t(n,{fields:je,children:[e(l,{name:"field1"}),e(h,{}),e(w,{})]}),m=({links:o})=>t("div",{className:"see-also",children:[e("h2",{children:"See Also"}),e("ul",{className:"menu",children:o.map(i=>e(Be,{to:i},i))})]}),Be=({to:o})=>{const i=W[o]||K(`Invalid SeeAlso link: ${o}`),{about:d}=i;return t("li",{children:[e(J,{to:o}),!!d&&e("span",{className:"about",children:d})]})},Ie=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"name"})}),t("p",{children:["The ",e("code",{children:"name"})," is the only required property for a ",e(u,{}),". It is used as the key to set the ",e(s,{})," value."]}),e(r,{Element:De,code:Le,caption:"name",children:t("p",{children:["Enter some text in the input field.  The ",e(P,{}),` component is included in this example to show the form data as it's being set.  Click on the "Submit" button and you'll see an alert showing the data that would be submitted.`]})}),t("p",{children:["You can set the ",e(g,{})," property on the ",e(s,{})," as an object containing additional properties for each field.  The"," ",e("code",{children:"name"})," is used as the key to fetch those properties. Any properties explicitly set on the ",e(u,{})," will override them."]}),e(r,{Element:Ye,code:Pe,caption:"Form fields",children:t("p",{children:["Note how the ",e(u,{})," has now got a ",e("code",{children:"label"})," and the"," ",e(F,{})," property is set."]})}),e(m,{links:["field:label","form:fields"]})]}),$e=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Hello World!"/>
  </Form>

export default LabelExample`,Me=()=>e(n,{children:e(l,{name:"field1",label:"Hello World!"})}),Ue=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const fields = {
  field1: {
    label: 'This is field one',
  },
  field2: {
    label: 'This is field two',
  }
}

const FormFieldsExample = () =>
  <Form fields={fields}>
    <Field name="field1"/>
    <Field name="field2" label="A different label"/>
  </Form>

export default FormFieldsExample`,He={field1:{label:"This is field one"},field2:{label:"This is field two"}},Ge=()=>t(n,{fields:He,children:[e(l,{name:"field1"}),e(l,{name:"field2",label:"A different label"})]}),We=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"label"})}),t("p",{children:["Add a label to the field with the ",e("code",{children:"label"})," property."]}),e(r,{Element:Me,code:$e,caption:"name"}),t("p",{children:["Like all other field properties, they can be defined via ",e(g,{})," ","on the ",e(s,{}),".  If you explicitly set a ",e("code",{children:"label"})," on the"," ",e(u,{})," then it will take precedence."]}),e(r,{Element:Ge,code:Ue,caption:"Form fields",children:t("p",{children:["Note how the first field has the ",e("code",{children:"label"})," defined in the"," ",e(g,{})," but the second defines its own ",e("code",{children:"label"})," ","which is used instead of the one defined in the ",e(g,{}),"."]})}),e(m,{links:["field:name","form:fields"]})]}),Ke=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const TypeExample = () =>
  <Form>
    <Field name="field1" label="Text Field"/>
    <Field name="field2" type="textarea" label="TextArea Field"/>
    <Field name="field3" type="number"   label="Number Field"/>
    <Field name="field4" type="checkbox" label="Checkbox Field" text="Yes"/>
  </Form>

export default TypeExample`,Je=()=>t(n,{children:[e(l,{name:"field1",label:"Text Field"}),e(l,{name:"field2",type:"textarea",label:"TextArea Field"}),e(l,{name:"field3",type:"number",label:"Number Field"}),e(l,{name:"field4",type:"checkbox",label:"Checkbox Field",text:"Yes"})]}),ze=`import { Form, Field, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const fields = {
  field1: {
    label: 'Text Field',
  },
  field2: {
    label: 'TextArea Field',
    type:  'textarea',
  },
  field3: {
    label: 'Number Field',
    type:  'number',
  },
  field4: {
    label: 'Checkbox Field',
    type:  'checkbox',
    text:  'Yes'
  },
  field5: {
    label: 'Another Field',
  },
}

const FormFieldsExample = () =>
  <Form fields={fields}>
    <Field name="field1"/>
    <Field name="field2"/>
    <Field name="field3"/>
    <Field name="field4"/>
    <Debug/>
  </Form>

export default FormFieldsExample`,Qe={field1:{label:"Text Field"},field2:{label:"TextArea Field",type:"textarea"},field3:{label:"Number Field",type:"number"},field4:{label:"Checkbox Field",type:"checkbox",text:"Yes"},field5:{label:"Another Field"}},Xe=()=>t(n,{fields:Qe,children:[e(l,{name:"field1"}),e(l,{name:"field2"}),e(l,{name:"field3"}),e(l,{name:"field4"}),e(w,{})]}),Ze=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"type"})}),t("p",{children:["The ",e("code",{children:"type"})," property specifies what kind of input should be displayed.  The default value is ",e("code",{children:"text"})," corresponding to the ",e(N,{})," input component.  Other values can be"," ",e("code",{children:"textarea"})," (see ",e(z,{}),"),"," ",e("code",{children:"checkbox"})," (see ",e(Q,{}),"),"," ",e("code",{children:"radio"})," (see ",e(X,{}),"),"," ",e("code",{children:"select"})," (see ",e(Z,{}),") and"," ",e("code",{children:"hidden"})," (see ",e(_,{}),") corresponding to the basic HTML input types."]}),t("p",{children:["You can also set ",e("code",{children:"type"})," to be one of the other valid HTML input types, e.g. ",e("code",{children:"password"}),", ",e("code",{children:"email"}),","," ",e("code",{children:"number"}),", ",e("code",{children:"date"}),", ",e("code",{children:"color"}),", and so on.  These use the same basic ",e(N,{})," input component as for ",e("code",{children:"text"})," types, but with the ",e("code",{children:"type"})," attribute set appropriately to use the browser-specific functionality."]}),e(r,{Element:Je,code:Ke,caption:"type",children:e("p",{children:`Enter some text in the input fields below. Note how the "Number Field" input uses the browser's built-in functionality to accept only numbers.`})}),t("p",{children:["As with all other ",e(u,{})," properties, they can be defined using"," ",e(g,{})," set on the ",e(s,{}),". The benefit of this approach is that it keeps the field definitions and markup separate.  As well as making them easier to read and maintain, it also has the benefit that field definitions can be reused across multiple forms."]}),t(r,{Element:Xe,code:ze,caption:"Form fields",children:[t("p",{children:["The example below generates exactly the same form as the one above (with the exception of the additional ",e(P,{})," component). Note that the form data will only include fields that are present in the ",e(s,{}),".  The ",e("code",{children:"field5"})," field definition is effectively ignored."]}),e("p",{})]}),e(m,{links:["field:name","field:label","form:fields","input:types"]})]}),_e=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HelpExample = () =>
  <Form>
    <Field
      name="email"
      label="Email Address"
      help="Enter the email address that you registered with"
      required
    />
    <Submit/>
  </Form>

export default HelpExample`,et=()=>t(n,{children:[e(l,{name:"email",label:"Email Address",help:"Enter the email address that you registered with",required:!0}),e(h,{})]}),tt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"help"})}),t("p",{children:["The ",e("code",{children:"help"})," property can be used to define some additional help for the user.  By default it is displayed underneath the field input."]}),e("p",{children:"If the field input fails to validate then the validation error message will be displayed in its place."}),e(r,{Element:et,code:_e,caption:"help",children:e("p",{children:"Try submitting the form without entering any value.  You should see the help message replaced by the validation error."})}),e(m,{links:["field:name","field:label","field:required","field:validate","form:fields"]})]}),lt=`import { Form, Field } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const PrefixExample = () =>
  <Form>
    <Field
      name="prefix" type="text"
      label="Field with a prefix"
      prefix="😀"
    />
  </Form>

export default PrefixExample`,ot=()=>e(n,{children:e(l,{name:"prefix",type:"text",label:"Field with a prefix",prefix:"😀"})}),rt=`import { Form, Field } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SuffixExample = () =>
  <Form>
    <Field
      name="suffix" type="text"
      label="Field with a suffix"
      suffix="🔒"
    />
  </Form>

export default SuffixExample`,nt=()=>e(n,{children:e(l,{name:"suffix",type:"text",label:"Field with a suffix",suffix:"🔒"})}),it=`import { Form, Field } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const PrefixSuffixExample = () =>
  <Form>
    <Field
      name="money" type="number"
      label="Field with both prefix and suffix"
      prefix="$" suffix=".00"
    />
  </Form>

export default PrefixSuffixExample`,at=()=>e(n,{children:e(l,{name:"money",type:"number",label:"Field with both prefix and suffix",prefix:"$",suffix:".00"})}),dt=()=>t("div",{children:[e("h1",{children:"Prefix and Suffix"}),e("h2",{children:"prefix"}),t("p",{children:["You can add a ",e("code",{children:"prefix"})," to a ",e("code",{children:"text"})," field or any of the other types using the basic text input, e.g."," ",e("code",{children:"money"}),", ",e("code",{children:"date"}),", etc."]}),e(r,{Element:ot,code:lt,caption:"prefix"}),e("h2",{children:"suffix"}),t("p",{children:["You can add also add a ",e("code",{children:"suffix"}),"."]}),e(r,{Element:nt,code:rt,caption:"suffix"}),e("h2",{children:"prefix and suffix"}),e("p",{children:"Or you can add both."}),e(r,{Element:at,code:it,caption:"prefix and suffix"})]}),st=()=>{const[o,i]=p.useState(),d=c=>i(`${c.label} was focussed`);return t(n,{children:[e(l,{name:"foo",label:"The Foo Field",onFocus:d}),e(l,{name:"bar",label:"The Bar Field",onFocus:d}),o]})},ct=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnFocusExample = () => {
  const [msg, setMsg] = useState()
  const onFocus = field =>
    setMsg(\`\${field.label} was focussed\`)

  return (
    <Form>
      <Field
        name="foo" label="The Foo Field"
        onFocus={onFocus}
      />
      <Field
        name="bar" label="The Bar Field"
        onFocus={onFocus}
      />
      {msg}
    </Form>
  )
}

export default OnFocusExample`,mt=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onFocus"})}),t("p",{children:["You can add an ",e("code",{children:"onFocus"})," handler to a ",e(u,{})," ","which will be called when the field is focussed (i.e. selected). The field context will be passed as an argument."]}),e(r,{Element:st,code:ct,caption:"onFocus",children:e("p",{children:"Focus on each of the fields below.  A message should be displayed each time a field gains focus."})}),e(m,{links:["field:onBlur","field:onChange","field:onValid","field:onInvalid"]})]}),ut=()=>{const[o,i]=p.useState(),d=c=>i(`${c.label} was blurred`);return t(n,{children:[e(l,{name:"foo",label:"The Foo Field",onBlur:d}),e(l,{name:"bar",label:"The Bar Field",onBlur:d}),o]})},ht=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnBlurExample = () => {
  const [msg, setMsg] = useState()
  const onBlur = field =>
    setMsg(\`\${field.label} was blurred\`)

  return (
    <Form>
      <Field
        name="foo" label="The Foo Field"
        onBlur={onBlur}
      />
      <Field
        name="bar" label="The Bar Field"
        onBlur={onBlur}
      />
      {msg}
    </Form>
  )
}
export default OnBlurExample`,pt=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onBlur"})}),t("p",{children:["You can add an ",e("code",{children:"onBlur"})," handler to a ",e(u,{})," ","which will be called when the field is blurred (i.e. unselected). The field context will be passed as an argument."]}),e(r,{Element:ut,code:ht,caption:"onFocus",children:e("p",{children:"Focus on one of the fields below and then select the other field. A message should be displayed each time a field loses focus."})}),e(m,{links:["field:validateOnBlur","field:onFocus","field:onChange","field:onValid","field:onInvalid"]})]}),ft=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetFocusExample = () => {
  const [field1, setField1] = useState(false)
  const [field2, setField2] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField1}
          name="field1" label="Field One"
        />
        <Field
          onLoad={setField2}
          name="field2" label="Field Two"
        />
      </Form>
      <div>
        <button onClick={() => field1?.setFocus()}>
          Focus Field One
        </button>
        <button onClick={() => field2?.setFocus()}>
          Focus Field Two
        </button>
      </div>
    </>
  )
}

export default SetFocusExample`,bt=()=>{const[o,i]=p.useState(!1),[d,c]=p.useState(!1);return t(b,{children:[t(n,{children:[e(l,{onLoad:i,name:"field1",label:"Field One"}),e(l,{onLoad:c,name:"field2",label:"Field Two"})]}),t("div",{children:[e("button",{onClick:()=>o==null?void 0:o.setFocus(),children:"Focus Field One"}),e("button",{onClick:()=>d==null?void 0:d.setFocus(),children:"Focus Field Two"})]})]})},Ft=()=>t("div",{children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setFocus()"})}),t("p",{children:["If you want to programmatically set the focus on a ",e(u,{})," then you first need to capture a reference to it.  You can do that using an ",e("code",{children:"onLoad"})," property to set a state variable."]}),t("p",{children:["Then call the ",e("code",{children:"setFocus()"})," method on the field object to focus it."]}),e(r,{Element:bt,code:ft,caption:"setFocus()",children:e("p",{children:"Click on one of the buttons to focus on a field."})}),t("p",{children:["You can also focus on fields by name using the ",e(s,{})," ",e(j,{})," method."]}),e(m,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),xt=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetValueExample = () => {
  const [field, setField] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField}
          name="animal" label="Animal"
        />
      </Form>
      <div>
        <button onClick={() => field.setValue('Antelope')}>
          Antelope
        </button>
        <button onClick={() => field.setValue('Badger')}>
          Badger
        </button>
        <button onClick={() => field.setValue('Camel')}>
          Camel
        </button>
      </div>
    </>
  )
}

export default SetValueExample`,Et=()=>{const[o,i]=p.useState(!1);return t(b,{children:[e(n,{children:e(l,{onLoad:i,name:"animal",label:"Animal"})}),t("div",{children:[e("button",{onClick:()=>o.setValue("Antelope"),children:"Antelope"}),e("button",{onClick:()=>o.setValue("Badger"),children:"Badger"}),e("button",{onClick:()=>o.setValue("Camel"),children:"Camel"})]})]})},St=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetValueExample = () => {
  const [field, setField] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField}
          name="animal" label="Animal"
        />
        <div>
          <button
            className="btn-green"
            onClick={e => { e.preventDefault(); field.setValue('Antelope') }}
          >
            Antelope
          </button>
          <button
            className="btn-green"
            onClick={e => field.setValue('Badger', e)}
          >
            Badger
          </button>
          <button
            type="button"
            className="btn-green"
            onClick={() => field.setValue('Camel')}
          >
            Camel
          </button>
          <button
            onClick={() => field.setValue('Danger!')}
            className="btn-red"
          >
            Danger!
          </button>
        </div>
      </Form>
    </>
  )
}

export default SetValueExample`,wt=()=>{const[o,i]=p.useState(!1);return e(b,{children:t(n,{children:[e(l,{onLoad:i,name:"animal",label:"Animal"}),t("div",{children:[e("button",{className:"btn-green",onClick:d=>{d.preventDefault(),o.setValue("Antelope")},children:"Antelope"}),e("button",{className:"btn-green",onClick:d=>o.setValue("Badger",d),children:"Badger"}),e("button",{type:"button",className:"btn-green",onClick:()=>o.setValue("Camel"),children:"Camel"}),e("button",{onClick:()=>o.setValue("Danger!"),className:"btn-red",children:"Danger!"})]})]})})},gt=()=>t("div",{children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setValue()"})}),t("p",{children:["If you want to programmatically set the value for a ",e(u,{})," then you first need to capture a reference to it.  You can do that using an ",e("code",{children:"onLoad"})," property to set a state variable."]}),t("p",{children:["Then call the ",e("code",{children:"setValue()"})," method on the field object to set the value."]}),e(r,{Element:Et,code:xt,caption:"setValue()",children:e("p",{children:"Click on one of the buttons to set the input value."})}),t("p",{children:["One thing to be aware of is that the default behaviour of a"," ",e("code",{children:"button"})," inside a ",e("code",{children:"form"})," is to submit the form. This is an innate property of HTML and not something that's specific to this library.  In the example above we put the buttons outside the"," ",e(s,{})," to avoid this behaviour, but it's not always possible to do that. There are a number of ways to work around it, shown in the example below."]}),t("p",{children:['The first "Antelope" button calls the'," ",e("code",{children:"preventDefault()"})," "," method on the event.  Given that this is a bit clumsy, the ",e("code",{children:"setValue()"})," method allows you to pass the event as the second argument and it will call"," ",e("code",{children:"preventDefault()"}),' for you, as shown on the second "Badger" button.  The third approach, shown on the "Camel" button, is to explicitly set the'," ",e("code",{children:"type"})," to ",e("code",{children:"button"})," to override the default"," ",e("code",{children:"type"})," of ",e("code",{children:"submit"}),`.  The fourth "Danger!" button doesn't do anything and will cause the form to submit, just in case you don't believe me that it's really a problem.`]}),e(r,{Element:wt,code:St,caption:"setValue()",children:e("p",{children:"Click on one of the buttons to set the input value.  Be warned that the fourth button will cause the form to submit."})}),t("p",{children:["You can also set values for one or more fields by name using the"," ",e(s,{})," ",e(ee,{})," method."]}),e(m,{links:["form:setValues","field:setFocus","field:reset"]})]}),vt=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ResetExample = () => {
  const [field1, setField1] = useState(false)
  const [field2, setField2] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField1}
          name="field1" label="Field One"
        />
        <Field
          onLoad={setField2} value="Initial value"
          name="field2" label="Field Two"
        />
      </Form>
      <div>
        <button className="btn-blue" onClick={field1.reset}>
          Reset Field One
        </button>
        <button className="btn-blue" onClick={field2.reset}>
          Reset Field Two
        </button>
      </div>
    </>
  )
}

export default ResetExample`,yt=()=>{const[o,i]=p.useState(!1),[d,c]=p.useState(!1);return t(b,{children:[t(n,{children:[e(l,{onLoad:i,name:"field1",label:"Field One"}),e(l,{onLoad:c,value:"Initial value",name:"field2",label:"Field Two"})]}),t("div",{children:[e("button",{className:"btn-blue",onClick:o.reset,children:"Reset Field One"}),e("button",{className:"btn-blue",onClick:d.reset,children:"Reset Field Two"})]})]})},Rt=()=>t("div",{children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"reset()"})}),t("p",{children:["If you want to programmatically reset a ",e(u,{})," then you first need to capture a reference to it.  You can do that using an ",e("code",{children:"onLoad"})," property to set a state variable."]}),t("p",{children:["Then call the ",e("code",{children:"reset()"})," method on the field object to reset it."]}),e(r,{Element:yt,code:vt,caption:"reset()",children:e("p",{children:"Enter some text in either of the inputs below and then click on the corresponding button to reset it to the original value."})}),t("p",{children:["You can also focus on fields by name using the ",e(s,{})," ",e(j,{})," method."]}),e(m,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),Tt=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnChangeExample = () => {
  const [value, setValue] = useState('')
  return (
    <Form>
      <Field
        name="example" label="Field with onChange"
        onChange={field => setValue(field.value)}
      />
      Current value: {value}
    </Form>
  )
}

export default OnChangeExample`,Ct=()=>{const[o,i]=p.useState("");return t(n,{children:[e(l,{name:"example",label:"Field with onChange",onChange:d=>i(d.value)}),"Current value: ",o]})},kt=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onChange"})}),t("p",{children:["You can add an ",e("code",{children:"onChange"})," handler to a ",e(u,{})," ","which will be called when the field value is changed.  The field context will be passed as an argument."]}),e(r,{Element:Ct,code:Tt,caption:"onChange",children:e("p",{children:'Try entering some text in the field below.  You should see the "Current value" display update to reflect the field content.'})}),e(m,{links:["field:validateOnChange","field:onBlur","field:onFocus","field:onValid","field:onInvalid"]})]}),qt=()=>{const[o,i]=p.useState();return t(n,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onValid:d=>i(`${d.name} is valid: ${d.value}`)}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:d=>i(`${d.name} is valid: ${d.value}`)}),o]})},Ot=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnValidExample = () => {
  const [msg, setMsg] = useState()

  return (
    <Form validateOnBlur>
      <Field
        name="foo" label="Foo Field" required
        onValid={field => setMsg(\`\${field.name} is valid: \${field.value}\`)}
      />
      <Field
        name="bar" label="Bar Field" required
        onValid={field => setMsg(\`\${field.name} is valid: \${field.value}\`)}
      />
      {msg}
    </Form>
  )
}

export default OnValidExample`,At=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onValid"})}),t("p",{children:["You can add an ",e("code",{children:"onValid"})," handler to a ",e(u,{})," ","which will be called when the field is successfully validated. The field context will be passed as an argument."]}),e(r,{Element:qt,code:Ot,caption:"onValid",children:t("p",{children:["Enter some text in one of the fields below and then select the other field.  The ",e("code",{children:"validateOnBlur"})," option on the ",e(s,{})," ","means that the first field will be validated when it loses focus and the ",e("code",{children:"onValid"})," handler will be called."]})}),e(m,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onInvalid"]})]}),Nt=()=>{const[o,i]=p.useState(),d=c=>i(`${c.label} is invalid: ${c.message}`);return t(n,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onInvalid:d}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:d,requiredMessage:"You must enter a value"}),o]})},Vt=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnInvalidExample = () => {
  const [msg, setMsg] = useState()
  const onInvalid = field =>
    setMsg(\`\${field.label} is invalid: \${field.message}\`)

  return (
    <Form validateOnBlur>
      <Field
        name="foo" label="Foo Field" required
        onInvalid={onInvalid}
      />
      <Field
        name="bar" label="Bar Field" required
        onValid={onInvalid}
        requiredMessage="You must enter a value"
      />
      {msg}
    </Form>
  )
}

export default OnInvalidExample`,Lt=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onInvalid"})}),t("p",{children:["You can add an ",e("code",{children:"onInvalid"})," handler to a ",e(u,{})," ","which will be called when the field fails validation. The field context will be passed as an argument."]}),t(r,{Element:Nt,code:Vt,caption:"onInvalid",children:[t("p",{children:["Click one of the fields below and then select the other field without entering any text. The ",e(te,{})," option on the"," ",e(s,{})," "," means that the fields will be validated when they lose focus. They're both marked as ",e(F,{})," so they will fail validation (assuming you haven't entered anything) and the ",e("code",{children:"onInvalid"})," handler will be called."]}),t("p",{children:["Also note the use of ",e(le,{})," to set a custom message for the second field."]})]}),e(m,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onValid"]})]}),Dt=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const fields = {
  upper: {
    label: 'Converted to UPPER CASE',
    prepareValue: value => value.toUpperCase()
  }
}

const PrepareValue = () =>
  <Form fields={fields}>
    <Field name="upper"/>
  </Form>

export default PrepareValue`,Pt={upper:{label:"Converted to UPPER CASE",prepareValue:o=>o.toUpperCase()}},jt=()=>e(n,{fields:Pt,children:e(l,{name:"upper"})}),Yt=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"prepareValue"})}),t("p",{children:["You can add a ",e("code",{className:"code",children:"prepareValue"})," function to a ",e(u,{})," to prepare the value before it's set."]}),e(r,{Element:jt,code:Dt,caption:"onChange",children:e("p",{children:"Try entering some letters in the field below.  You should see that they get converted to upper case."})}),e(m,{links:["field:validate","field:validateOnBlur","field:validateOnChange"]})]}),Bt=()=>t(n,{children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(h,{})]}),It=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const Required = () =>
  <Form>
    <Field name="field1" label="Required Field" required/>
    <Submit/>
  </Form>

export default Required`,$t=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"required"})}),t("p",{children:["You can add a ",e("code",{children:"required"})," property to a field to mark it as being required.  This automatically adds a validator to the field to ensure that a value is provided when the form is submitted."]}),e(r,{Element:Bt,code:It,caption:"required",children:e("p",{children:"Try submitting the form without entering anything in the field input."})}),e(m,{links:["field:showRequired","field:requiredLabel","field:requiredMessage","field:validateOnBlur","field:validateOnChange"]})]}),Mt=()=>t(n,{children:[e(l,{name:"field1",label:"Required Field",required:!0,showRequired:!0}),e(l,{name:"field2",label:"Optional Field"})]}),Ut=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowRequired = () =>
  <Form>
    <Field
      name="field1" label="Required Field"
      required showRequired
    />
    <Field
      name="field2" label="Optional Field"
    />
  </Form>

export default ShowRequired`,Ht=()=>t(n,{showRequired:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(l,{name:"field2",label:"Another Required Field",required:!0})]}),Gt=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowRequiredForm = () =>
  <Form showRequired>
    <Field
      name="field1" label="Required Field"
      required
    />
    <Field
      name="field2" label="Another Required Field"
      required
    />
  </Form>

export default ShowRequiredForm`,Wt=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showRequired"})}),t("p",{children:["If a ",e(u,{})," is marked as ",e(F,{})," then the"," ",e("code",{children:"showRequired"})," property can be added to have an additional label displayed indicating that it is required."]}),e(r,{Element:Mt,code:Ut,caption:"showRequired on Field"}),t("p",{children:["The ",e("code",{children:"showRequired"})," property can also be added to the"," ",e(s,{})," to have it apply to all ",e(F,{})," fields."]}),e(r,{Element:Ht,code:Gt,caption:"showRequired on Form"}),e(m,{links:["field:required","field:requiredLabel","field:showOptional","field:optionalLabel"]})]}),Kt=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RequiredLabel = () =>
  <Form showRequired requiredLabel="Important!">
    <Field
      name="field1" label="Required Field"
      required
    />
    <Field
      name="field2" label="Another Required Field"
      required
      requiredLabel="Very Important!"
    />
  </Form>

export default RequiredLabel`,Jt=()=>t(n,{showRequired:!0,requiredLabel:"Important!",children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(l,{name:"field2",label:"Another Required Field",required:!0,requiredLabel:"Very Important!"})]}),zt=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredLabel"})," property to change the label that is displayed for ",e(F,{})," fields that have the ",e(oe,{})," option enabled.  You can set it on individual ",e(u,{})," components or on the parent ",e(s,{}),"."]}),e(r,{Element:Jt,code:Kt,caption:"requiredLabel"}),e(m,{links:["field:required","field:showRequired","field:showOptional","field:optionalLabel"]})]}),Qt=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const RequiredLabel = () =>
  <Form requiredMessage="Nothing will come of nothing">
    <Field
      name="foo" label="Foo" required
    />
    <Field
      name="bar" label="Bar" required
      requiredMessage="You really MUST enter a value"
    />
    <Submit/>
  </Form>

export default RequiredLabel`,Xt=()=>t(n,{requiredMessage:"Nothing will come of nothing",children:[e(l,{name:"foo",label:"Foo",required:!0}),e(l,{name:"bar",label:"Bar",required:!0,requiredMessage:"You really MUST enter a value"}),e(h,{})]}),Zt=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredMessage"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredMessage"})," property to change the error message that is generated for ",e(F,{})," fields that aren't completed."]}),t("p",{children:["You can set it on individual ",e(u,{})," components or on the parent"," ",e(s,{})," to act as the default for all fields."]}),e(r,{Element:Xt,code:Qt,caption:"requiredMessage",children:e("p",{children:"Try submitting the form without entering any values."})}),e(m,{links:["field:required","field:showRequired","field:requiredLabel","field:validateOnChange","field:validateOnBlur"]})]}),_t=()=>t(n,{showOptional:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(l,{name:"field2",label:"Optional Field"})]}),el=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowOptional = () =>
  <Form showOptional>
    <Field
      name="field1" label="Required Field"
      required={true}
    />
    <Field
      name="field2" label="Optional Field"
    />
  </Form>

export default ShowOptional`,tl=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showOptional"})}),t("p",{children:["If a field is ",e("b",{children:"NOT"})," marked as ",e(F,{})," then it is optional. If you set the ",e("code",{children:"showOptional"})," property then it will add an additional label to a field to indicate that it's optional.  You can set the property on individual ",e(u,{})," components or on the parent ",e(s,{})," to act as a default for all fields."]}),t("p",{children:["You can use the ",e(re,{})," property to change the text of the label that is displayed."]}),e(r,{Element:_t,code:el,caption:"showOptional"}),e(m,{links:["field:required","field:optionalLabel","field:showRequired","field:requiredLabel"]})]}),ll=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OptionalLabel = () =>
  <Form showOptional optionalLabel="Not required">
    <Field
      name="field1" label="Optional Field"
    />
    <Field
      name="field2" label="Another Optional Field"
      optionalLabel="Nice to have"
    />
  </Form>

export default OptionalLabel`,ol=()=>t(n,{showOptional:!0,optionalLabel:"Not required",children:[e(l,{name:"field1",label:"Optional Field"}),e(l,{name:"field2",label:"Another Optional Field",optionalLabel:"Nice to have"})]}),rl=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"optionalLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"optionalLabel"})," property to change the label that is display for optional fields (i.e. those that aren't marked as ",e(F,{}),") that have the"," ",e(ne,{})," option set.  You can set it on individual"," ",e(u,{})," components or on the parent ",e(s,{})," to act as a default for all fields."]}),e(r,{Element:ol,code:ll,caption:"optionalLabel"}),e(m,{links:["field:required","field:showRequired","field:showOptional","field:requiredLabel"]})]}),nl={username:{label:"Username",help:"Enter your username",validate:o=>v().trim().required("You must enter your username you numpty!").validate(o)},password:{label:"Password",type:"password",help:"Enter your password",validate:o=>v().trim().required("You must enter your password you muppet!").validate(o)}},il=()=>t(n,{fields:nl,children:[e(R,{names:"username password"}),e(h,{})]}),al=`import { Form, Fields, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Fields, Submit } from '@abw/react-formula'

const fields = {
  username: {
    label: 'Username',
    help:  'Enter your username',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your username you numpty!')
      .validate(value)
  },
  password: {
    label: 'Password',
    type:  'password',
    help:  'Enter your password',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your password you muppet!')
      .validate(value)
  }
}

const ValidateExample = () =>
  <Form fields={fields}>
    <Fields names="username password"/>
    <Submit/>
  </Form>

export default ValidateExample`,dl={username:{label:"Username",help:"Enter your username",validate:async(o,i,d,c)=>{o.match(/badger/i)?d({value:`${o} is a great name`}):c({value:"Mr Badger",message:'Your username must contain the word "badger"'})}}},sl=()=>t(n,{fields:dl,children:[e(l,{name:"username"}),e(h,{})]}),cl=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const fields = {
  username: {
    label: 'Username',
    help:  'Enter your username',
    validate: async (value, field, resolve, reject) => {
      if (value.match(/badger/i)) {
        resolve({
          value: \`\${value} is a great name\`
        })
      }
      else {
        reject({
          value:   'Mr Badger',
          message: 'Your username must contain the word "badger"'
        })
      }
    }
  }
}

const ValidateExample = () =>
  <Form fields={fields}>
    <Field name="username"/>
    <Submit/>
  </Form>

export default ValidateExample`,ml=()=>t("div",{children:[e("h1",{children:"Field Validation"}),t("p",{children:["There are a number of different ways to validate field input. For simple cases where a value must be provided you can use the"," ",e(F,{})," property.  If you need to perform additional validation then you can do that using a ",e("code",{children:"validate"})," function."]}),e("h2",{children:e("code",{children:"validate"})}),t("p",{children:["You can use the ",e(F,{})," property to mark a field as being required, but it's a blunt instrument.  All it will do is check that a field has some value entered. For more robust validation you can use the ",e("code",{children:"validate"})," property to define an ",e("code",{children:"async"})," ","validation function."]}),t("p",{children:["In this example we're using"," ",e("a",{href:"https://www.npmjs.com/package/yup",children:"Yup"})," but you can use anything you like.  It should return the validated value on success or throw an error if the valid is invalid."]}),e(r,{Element:il,code:al,caption:"validate",children:e("p",{children:"Try submitting the form without entering any values for either of the fields. You should see the custom validation errors."})}),t("p",{children:["The ",e("code",{children:"validate"})," function is passed four arguments.  The first is the field value for common cases where that's all you need to determine if the field is valid.  The second argument is the field context containing everything you need to know about the field state and callable actions to change it.  The third and fourth arguments are"," ",e("code",{children:"resolve"})," and ",e("code",{children:"reject"})," functions which can be called to validate or invalidate the field, respectively.  The"," ",e("code",{children:"resolve"})," function should be passed an object containing the ",e("code",{children:"value"}),", which may be modified by your function. The ",e("code",{children:"reject"})," function should be passed an object containing an error ",e("code",{children:"message"}),", and optionally a new ",e("code",{children:"value"})," ","for the field."]}),e(r,{Element:sl,code:cl,caption:"validate",children:e("p",{children:'In this somewhat contrived example we require the user to enter a username containing the word "badger".'})}),e(m,{links:["field:required","field:validateOnChange","field:validateOnBlur"]})]}),ul=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const fields = {
  vowels: {
    label: 'Vowels',
    help:  'Enter between 3 and 5 vowels',
    validateOnChange: true,
    minValidateLength: 3,
    validate: value => yup
      .string()
      .trim()
      .matches(/^[^y]*$/i, 'Sorry, but y is not allowed')
      .matches(/^[aeiou]*$/i, 'You should only type vowels')
      .min(3, 'You must enter at least three vowels')
      .max(5, 'You should not enter more than 5 vowels')
      .validate(value)
  }
}

const ValidateOnChangeExample = () =>
  <Form fields={fields}>
    <Field name="vowels"/>
  </Form>

export default ValidateOnChangeExample`,hl={vowels:{label:"Vowels",help:"Enter between 3 and 5 vowels",validateOnChange:!0,minValidateLength:3,validate:o=>v().trim().matches(/^[^y]*$/i,"Sorry, but y is not allowed").matches(/^[aeiou]*$/i,"You should only type vowels").min(3,"You must enter at least three vowels").max(5,"You should not enter more than 5 vowels").validate(o)}},pl=()=>e(n,{fields:hl,children:e(l,{name:"vowels"})}),fl=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnChange"})}),t("p",{children:["You can set the ",e("code",{children:"validateOnChange"})," flag to enable validation any time the field value changes.  The ",e("code",{children:"minValidateLength"})," can be set to only trigger validation when the input length exceeds a threshold."]}),e(r,{Element:pl,code:ul,caption:"validateOnChange",children:e("p",{children:"Enter some text in the field below.  Once you've entered three letters the validation will kick in.  You should see an error if you enter any letters that aren't vowels."})}),e(m,{links:["field:required","field:validate","field:validateOnBlur"]})]}),bl={username:{label:"Username",help:"Enter your username",validate:o=>v().trim().required("You must enter your username you numpty!").validate(o)},password:{label:"Password",type:"password",help:"Enter your password",validate:o=>v().trim().required("You must enter your password you muppet!").validate(o)}},Fl=()=>t(n,{fields:bl,validateOnBlur:!0,children:[e(R,{names:"username password"}),e(h,{})]}),xl=`import { Form, Fields, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Fields, Submit } from '@abw/react-formula'

const fields = {
  username: {
    label: 'Username',
    help:  'Enter your username',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your username you numpty!')
      .validate(value)
  },
  password: {
    label: 'Password',
    type:  'password',
    help:  'Enter your password',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your password you muppet!')
      .validate(value)
  }
}

const ValidateExample = () =>
  <Form fields={fields} validateOnBlur>
    <Fields names="username password"/>
    <Submit/>
  </Form>

export default ValidateExample`,El=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnBlur"})}),t("p",{children:["The ",e("code",{children:"validateOnBlur"})," property can be set to trigger validation whenever a field is blurred.  You can set it on individual"," ",e(u,{})," components or on the parent ",e(s,{})," to have it apply to all fields."]}),e(r,{Element:Fl,code:xl,caption:"validate",children:e("p",{children:"Try switching focus from one field to another without entering anything.  You should see the custom validation errors when each field is blurred."})}),e(m,{links:["field:required","field:validate","field:validateOnChange"]})]}),Sl=()=>t(q,{children:[e(a,{path:"",end:!0,element:e(Ne,{})}),e(a,{path:"properties",element:e(Ve,{})}),e(a,{path:"name",element:e(Ie,{})}),e(a,{path:"label",element:e(We,{})}),e(a,{path:"type",element:e(Ze,{})}),e(a,{path:"help",element:e(tt,{})}),e(a,{path:"prefix-suffix",element:e(dt,{})}),e(a,{path:"onFocus",element:e(mt,{})}),e(a,{path:"onBlur",element:e(pt,{})}),e(a,{path:"onValid",element:e(At,{})}),e(a,{path:"onInvalid",element:e(Lt,{})}),e(a,{path:"setFocus",element:e(Ft,{})}),e(a,{path:"setValue",element:e(gt,{})}),e(a,{path:"Reset",element:e(Rt,{})}),e(a,{path:"onChange",element:e(kt,{})}),e(a,{path:"prepareValue",element:e(Yt,{})}),e(a,{path:"required",element:e($t,{})}),e(a,{path:"requiredMessage",element:e(Zt,{})}),e(a,{path:"showRequired",element:e(Wt,{})}),e(a,{path:"requiredLabel",element:e(zt,{})}),e(a,{path:"showOptional",element:e(tl,{})}),e(a,{path:"optionalLabel",element:e(rl,{})}),e(a,{path:"validate",element:e(ml,{})}),e(a,{path:"validateOnChange",element:e(fl,{})}),e(a,{path:"validateOnBlur",element:e(El,{})})]}),wl={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},gl=()=>e(n,{fields:wl,children:t("div",{className:"grid-2 gap-2",children:[e(R,{names:["name","message"]}),e(R,{names:"badgers animal"})]})}),vl=`import { Form, Fields } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/react-formula'

const fields = {
  name: {
    label: 'Enter your name',
    placeholder: 'Your name'
  },
  message: {
    label: 'Enter a message',
    placeholder: 'Hello World'
  },
  badgers: {
    label: 'Do you like badgers?',
    type: 'checkbox',
    text: 'Yes, of course I do'
  },
  animal: {
    label: 'What is your favourite animal?',
    type: 'radio',
    options: ['Badger', 'Ferret', 'Stoat']
  },
}

const FieldsExample = () =>
  <Form fields={fields}>
    <div className="grid-2 gap-2">
      {/* array of field name strings */}
      <Fields names={['name', 'message']}/>
      {/* shortcut - a single string of field names */}
      <Fields names='badgers animal'/>
    </div>
  </Form>

export default FieldsExample
`,yl=()=>t("div",{children:[e("h1",{children:"Fields"}),t("p",{children:["The ",e("code",{children:"Fields"})," component can be used to render multiple fields."]}),e("p",{children:"This is a shortcut for convenience, but it depends on you having all your form fields defined in a separate schema so you can reference them only by name."}),t("p",{children:["The ",e("code",{className:"code",children:"names"})," property should be used to specify the list of field names either as an array of strings, or a single string containing a whitespace-delimited list of field names. The ",e("code",{className:"code",children:"Fields"})," component renders each of the fields, collected together in a single"," ",e("code",{className:"code",children:"div"})," element"]}),e(r,{Element:gl,code:vl,caption:"Fields"})]}),Rl=()=>e(n,{children:t(Y,{legend:"Fieldset One",children:[e(l,{name:"one",label:"Field One"}),e(l,{name:"one",label:"Field Two"})]})}),Tl=`import { Form, Field, Fieldset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Fieldset } from '@abw/react-formula'

const FieldsetExample = () =>
  <Form>
    <Fieldset legend="Fieldset One">
      <Field name="one" label="Field One"/>
      <Field name="one" label="Field Two"/>
    </Fieldset>
  </Form>

export default FieldsetExample
`,Cl={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},kl=()=>e(n,{fields:Cl,children:e(Y,{legend:"Fieldset Two",fields:"name message"})}),ql=`import { Form, Fieldset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fieldset } from '@abw/react-formula'

const fields = {
  name: {
    label: 'Enter your name',
    placeholder: 'Your name'
  },
  message: {
    label: 'Enter a message',
    placeholder: 'Hello World'
  },
}

const FieldsetFieldsExample = () =>
  <Form fields={fields}>
    <Fieldset legend="Fieldset Two" fields="name message"/>
  </Form>

export default FieldsetFieldsExample
`,Ol=()=>t("div",{children:[e("h1",{children:"Fieldset"}),t("p",{children:["The ",e("code",{children:"Fieldset"})," component can be used to create a field set.  The ",e("code",{children:"legend"})," property should be used to set the legend."]}),e(r,{Element:Rl,code:Tl,caption:"Fieldset"}),t("p",{children:["The ",e("code",{className:"code",children:"fields"})," property can be used as a shortcut to render a set of named fields using the"," ",e(ie,{})," component."]}),e(r,{Element:kl,code:ql,caption:"Fieldset fields"})]}),Al=()=>t(n,{showRequired:!0,children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(h,{})]}),Nl=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one"/>
    <Field name="two"   label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample`,Vl=()=>t(n,{children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(h,{className:"btn-blue",text:"Save Changes"})]}),Ll=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const SubmitProps = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit className="btn-blue" text="Save Changes"/>
  </Form>

export default SubmitProps`,Dl=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnSubmit = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <Submit/>
  </Form>

export default OnSubmit`,Pl=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(h,{})]}),jl=()=>t("div",{children:[e("h1",{children:"Submit"}),t("p",{children:["The ",e("code",{children:"Submit"})," component can be used to add a button which will submit the form.  See the"," ",e(E,{to:"/components/form/validation",text:"validation page"})," for information on how the form data is validated and the"," ",e(ae,{})," component for details on how validation errors are displayed and can be customised."]}),e(r,{Element:Al,code:Nl,caption:"Submit",children:e("p",{children:"Try entering some text in the fields below then click on the Submit button."})}),e("h2",{children:"Properties"}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(r,{Element:Vl,code:Ll,caption:"Properties"}),e("h2",{children:"onSubmit"}),t("p",{children:["You can use the ",e("code",{children:"onSubmit"})," form property to handle the submission."]}),e(r,{Element:Pl,code:Dl,caption:"onSubmit"})]}),Yl=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const ResetExample = () =>
  <Form values={{ three: 'The third field' }}>
    <Field
      name="one"
      label="Field one"
    />
    <Field
      name="two"
      label="Field two with default value"
      default="Badger"
    />
    <Field
      name="three"
      label="Field three with pre-defined form value"
    />
    <Reset/>
  </Form>

export default ResetExample`,Bl=()=>t(n,{values:{three:"The third field"},children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two with default value",default:"Badger"}),e(l,{name:"three",label:"Field three with pre-defined form value"}),e(O,{})]}),Il=()=>t(n,{children:[e(l,{name:"one",label:"Field one"}),e(O,{className:"btn-brown",text:"Reset the form"})]}),$l=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const Properties = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Reset className="btn-brown" text="Reset the form"/>
  </Form>

export default Properties`,Ml=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const OnReset = () =>
  <Form onReset={() => alert('form has been reset')}>
    <Field name="field1" label="Field One"/>
    <Reset/>
  </Form>

export default OnReset`,Ul=()=>t(n,{onReset:()=>alert("form has been reset"),children:[e(l,{name:"field1",label:"Field One"}),e(O,{})]}),Hl=()=>t("div",{children:[e("h1",{children:"Reset"}),t("p",{children:["The ",e("code",{children:"Reset"})," component can be used to add a reset button which will reset the form to its initial state.  Any"," ",e("code",{children:"values"})," defined on the ",e(s,{})," will be restored. Any fields that have a ",e("code",{children:"default"})," value will be reset to that value."]}),e(r,{Element:Bl,code:Yl,caption:"Reset",children:e("p",{children:"Try entering some text in the fields below then click on the Reset button.  You should see the fields reset to their original state."})}),e("h2",{children:"Properties"}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(r,{Element:Il,code:$l,caption:"Properties"}),e("h2",{children:"onReset"}),t("p",{children:["You can use the ",e("code",{children:"onReset"})," property to register a function that should be called when the form is reset."]}),e(r,{Element:Ul,code:Ml,caption:"onReset"})]}),Gl=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(B,{})]}),Wl=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Cancel } from '@abw/react-formula'

const CancelExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Cancel/>
  </Form>

export default CancelExample`,Kl=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(B,{text:"Go Back",className:"btn-brown",onClick:()=>alert("Cancel button was clicked")})]}),Jl=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Cancel } from '@abw/react-formula'

const CancelExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Cancel
      text="Go Back"
      className="btn-brown"
      onClick={() => alert('Cancel button was clicked')}
    />
  </Form>

export default CancelExample`,zl=()=>t("div",{children:[e("h1",{children:"Cancel"}),t("p",{children:["The ",e("code",{children:"Cancel"})," component can be used to add a Cancel button. This doesn't do anything to the form but it's common to provide a button in a form to allow a user to cancel an edit or go back."]}),e(r,{Element:Gl,code:Wl,caption:"Cancel",children:t("p",{children:["Don't be surprised that the Cancel button doesn't do anything in this example.  We need to add an ",e("code",{children:"onClick"})," handler to make it useful. See the next example."]})}),t("p",{children:["The ",e("code",{children:"text"})," property will set the text for the button. The ",e("code",{children:"className"})," property can be used to add a CSS class.  The ",e("code",{children:"onClick"})," property should be used to define a handler to do something when the button is clicked."]}),e(r,{Element:Kl,code:Jl,caption:"Properties"})]}),Ql=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(I,{})]}),Xl=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelSubmit/>
  </Form>

export default CancelSubmitExample`,Zl=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(I,{className:"flex evenly",submit:{text:"Submit the Form",className:"wide btn-green"},cancel:{text:"Go Back",className:"wide btn-lilac",onClick:()=>alert("You went back")}})]}),_l=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelSubmit
      className="flex evenly"
      submit={{
        text: 'Submit the Form',
        className: 'wide btn-green',
      }}
      cancel={{
        text: 'Go Back',
        className: 'wide btn-lilac',
        onClick: () => alert('You went back')
      }}
    />
  </Form>

export default CancelSubmitExample`,eo=()=>t("div",{children:[e("h1",{children:"CancelSubmit"}),t("p",{children:["The ",e("code",{children:"CancelSubmit"})," component can be used to add both"," ",e(T,{})," and ",e(S,{})," controls."]}),e(r,{Element:Ql,code:Xl,caption:"CancelSubmit"}),t("p",{children:["You can define properties for the ",e(T,{})," component using the ",e("code",{children:"cancel"})," property, and for the ",e(S,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(r,{Element:Zl,code:_l,caption:"Properties"})]}),to=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e($,{})]}),lo=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit/>
  </Form>

export default CancelResetSubmitExample`,oo=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e($,{submit:{text:"Submit the Form",className:"btn-green"},reset:{text:"Reset the Form",className:"btn-brown"},cancel:{text:"Go Back",onClick:()=>alert("You went back")}})]}),ro=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit
      submit={{
        text: 'Submit the Form',
        className: 'btn-green',
      }}
      reset={{
        text: 'Reset the Form',
        className: 'btn-brown',
      }}
      cancel={{
        text: 'Go Back',
        onClick: () => alert('You went back')
      }}
    />
  </Form>

export default CancelResetSubmitExample`,no=()=>t("div",{children:[e("h1",{children:"CancelResetSubmit"}),t("p",{children:["The ",e("code",{children:"CancelResetSubmit"})," component can be used to add all three ",e(T,{}),", ",e(C,{})," and ",e(S,{})," controls in one fell swoop."]}),e(r,{Element:to,code:lo,caption:"CancelResetSubmit"}),t("p",{children:["You can define properties for the ",e(T,{})," component using the ",e("code",{children:"cancel"})," property, for the ",e(C,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(S,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(r,{Element:oo,code:ro,caption:"Properties"})]}),io=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(A,{})]}),ao=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <ResetSubmit/>
  </Form>

export default ResetSubmitExample`,so=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(A,{reset:{text:"Reset the Form",className:"btn-brown"},submit:{text:"Submit the Form",className:"btn-blue"}})]}),co=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <ResetSubmit
      reset={{
        text: 'Reset the Form',
        className: 'btn-brown'
      }}
      submit={{
        text: 'Submit the Form',
        className: 'btn-blue'
      }}
    />
  </Form>

export default ResetSubmitExample`,mo=()=>t("div",{children:[e("h1",{children:"ResetSubmit"}),t("p",{children:["The ",e("code",{children:"ResetSubmit"})," component can be used to add both"," ",e(C,{})," and ",e(S,{})," controls."]}),e(r,{Element:io,code:ao,caption:"ResetSubmit"}),t("p",{children:["You can define properties for the ",e(C,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(S,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(r,{Element:so,code:co,caption:"Properties"})]}),uo=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",value:"Hello World!"}),e(de,{children:e(A,{})})]}),ho=`import { Form, Field, Changed, ResetSubmit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Changed, ResetSubmit } from '@abw/react-formula'

const ChangedExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two" value="Hello World!"/>
    <Changed>
      <ResetSubmit/>
    </Changed>
  </Form>

export default ChangedExample`,po=()=>t("div",{children:[e("h1",{children:"Changed"}),t("p",{children:["The ",e("code",{children:"Changed"})," component will only render its child components when the form state has changed."]}),e("p",{children:'A typical example is shown below.  The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field.'}),e(r,{Element:uo,code:ho,caption:"Changed",children:t("p",{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})})]}),fo=()=>e(n,{children:e(l,{name:"field1",label:"Field One",children:e(se,{})})}),bo=`import { Form, Field, Label } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Label } from '@abw/react-formula'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Field One">
      <Label/>
    </Field>
  </Form>

export default LabelExample`,Fo=()=>t("div",{children:[e("h1",{children:"Label"}),t("p",{children:["The ",e("code",{children:"Label"})," component can be used to add a label to a field."]}),e(r,{Element:fo,code:bo,caption:"Label"})]}),xo=()=>t(n,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(h,{})]}),Eo=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const RequiredExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one" required/>
    <Field name="two"   label="Field two" required/>
    <Field name="three" label="Field three"/>
    <Submit/>
  </Form>

export default RequiredExample`,So=()=>t(n,{showRequired:!0,errorsInHeader:!1,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(ce,{}),e(h,{})]}),wo=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const ErrorsExample = () =>
  <Form showRequired errorsInHeader={false}>
    <Field name="one"   label="Field one" required/>
    <Field name="two"   label="Field two" required/>
    <Field name="three" label="Field three"/>
    <Errors/>
    <Submit/>
  </Form>

export default ErrorsExample`,go=()=>e(n,{children:e(vo,{})}),vo=()=>{const{setInvalidState:o}=y(),i=(x,f)=>{x.preventDefault(),o({error:f})};return t(b,{children:[e("button",{onClick:x=>i(x,"An error string"),children:"Error String"}),e("button",{onClick:x=>i(x,{message:"An error object"}),children:"Error Object"}),e("button",{onClick:x=>i(x,{label:"Example",message:"An error object"}),children:"Labelled Error"})]})},yo=`import { Form, useForm } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, useForm } from '@abw/react-formula'

const Error = () =>
  <Form>
    <ErrorButtons/>
  </Form>

const ErrorButtons = () => {
  const { setInvalidState } = useForm()

  const setError = (event, error) => {
    event.preventDefault()
    setInvalidState({ error })
  }

  const errorString = event =>
    setError(event, 'An error string')

  const errorObject = event =>
    setError(event, { message: 'An error object' })

  const errorLabel  = event =>
    setError(event, { label: 'Example', message: 'An error object' })

  return (
    <>
      <button onClick={errorString}>
        Error String
      </button>
      <button onClick={errorObject}>
        Error Object
      </button>
      <button onClick={errorLabel}>
        Labelled Error
      </button>
    </>
  )
}

export default Error`,Ro=()=>e(n,{children:e(To,{})}),To=()=>{const{setInvalidState:o}=y(),i=(f,M)=>{f.preventDefault(),o({errors:M})};return t(b,{children:[e("button",{onClick:f=>i(f,["A single error in errors"]),children:"Error String"}),e("button",{onClick:f=>i(f,["An error string","Another error string"]),children:"Error Strings"}),e("button",{onClick:f=>i(f,[{message:"An error object"},{message:"Another error object"}]),children:"Error Objects"}),e("button",{onClick:f=>i(f,[{label:"Example1",message:"An error object"},{label:"Example2",message:"Another error object"}]),children:"Labelled Errors"})]})},Co=`import { Form, useForm } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, useForm } from '@abw/react-formula'

const Errors = () =>
  <Form>
    <ErrorButtons/>
  </Form>

const ErrorButtons = () => {
  const { setInvalidState } = useForm()

  const setErrors = (event, errors) => {
    event.preventDefault()
    setInvalidState({ errors })
  }

  const errorString = event =>
    setErrors(event, [
      'A single error in errors',
    ])

  const errorStrings = event =>
    setErrors(event, [
      'An error string',
      'Another error string'
    ])

  const errorObjects = event =>
    setErrors(event, [
      { message: 'An error object' },
      { message: 'Another error object'}
    ])

  const errorLabels  = event =>
    setErrors(event, [
      { label: 'Example1', message: 'An error object' },
      { label: 'Example2', message: 'Another error object' }
    ])

  return (
    <>
      <button onClick={errorString}>
        Error String
      </button>
      <button onClick={errorStrings}>
        Error Strings
      </button>
      <button onClick={errorObjects}>
        Error Objects
      </button>
      <button onClick={errorLabels}>
        Labelled Errors
      </button>
    </>
  )
}

export default Errors`,ko=()=>t("div",{children:[e("h1",{children:"Errors"}),e("p",{children:"By default, validation errors will be displayed in the form header."}),e(r,{Element:xo,code:Eo,caption:"Required Fields",children:e("p",{children:"Try submitting the form below without entering anything for either of the first two fields."})}),e("h2",{children:"errorsInHeader"}),t("p",{children:["If you don't want errors displayed in the header you can set the"," ",e("code",{children:"errorsInHeader"})," form property to ",e("code",{children:"false"}),".  You can use the ",e("code",{children:"Errors"})," component to display them somewhere else inside the form."]}),e(r,{Element:So,code:wo,caption:"Errors"}),e("h2",{children:"error"}),t("p",{children:["The ",e(s,{})," context can include a single ",e("code",{children:"error"})," or an array of ",e("code",{children:"errors"}),`.  The first case is typically used when there's an error that doesn't relate to a specific field, e.g. "Invalid username or password".  The latter case is used when there are multiple errors, e.g. for different fields.`]}),t("p",{children:["Just to complicate matters, both ",e("code",{children:"error"})," and the elements in ",e("code",{children:"errors"})," can be either strings or objects containing a"," ",e("code",{children:"message"})," and other information about what field the error message relates to, including the field ",e("code",{children:"name"})," and"," ",e("code",{children:"label"}),"."]}),t("p",{children:["The ",e("code",{children:"Errors"})," component handles all these cases.  There are also some additional properties that you can set on the ",e(s,{})," to configure what gets displayed.  The ",e("code",{children:"errorsTitle"}),' can be defined as a function which takes the number of errors and returns an appropriate title.  The default function returns "Form Submission Error" if there is one error or "Form Submission Errors" if there are more than one.  The ',e("code",{children:"errorsPrompt"})," can also be defined to prompt the user to fix any ",e("code",{children:"errors"}),".  This also takes the number of ",e("code",{children:"errors"}),'.  The default function returns "Please correct this problem and re-submit:" or "Please correct these problems and re-submit:", depending on the number of errors.']}),t("p",{children:["This example includes some buttons that set the ",e("code",{children:"error"})," ","in the ",e(s,{})," to demonstrate the different combinations."]}),e(r,{Element:go,code:yo,caption:"error"}),e("h2",{children:"errors"}),t("p",{children:["This example does a similar thing but sets multiple ",e("code",{children:"errors"}),"."]}),e(r,{Element:Ro,code:Co,caption:"error"}),t("p",{children:["You can always implement your own component for displaying errors if you don't like the way this works.  Just be warned that there are the various different possibilities that need to be accounted for. You can use the ",e("code",{children:"useForm"})," function to get access to the form context which contains the ",e("code",{children:"error"})," and/or ",e("code",{children:"errors"}),"."]}),t("p",{children:["See the implementations of the"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Errors.jsx",children:"Errors"})," ","and"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Error.jsx",children:"Error"})," ","modules for a starting point."]})]}),qo=`import { Form, Field, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const DebugForm = () =>
  <Form>
    <Field
      name="message" label="Message"
    />
    <Field
      name="animal" label="Animal" type="select"
      options={['Anteater', 'Badger', 'Camel']}
    />
    <Field
      name="terms" label="Terms and Conditions" type="checkbox"
      text="I agree to the Terms and Conditions"
    />
    <Debug/>
  </Form>

export default DebugForm`,Oo=()=>t(n,{children:[e(l,{name:"message",label:"Message"}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"]}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions"}),e(w,{})]}),Ao=`import { Form, Field, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const Show = () =>
  <Form>
    <Field
      name="message" label="Message"
    />
    <Field
      name="animal" label="Animal" type="select"
      options={['Anteater', 'Badger', 'Camel']}
    />
    <Field
      name="terms" label="Terms and Conditions" type="checkbox"
      text="I agree to the Terms and Conditions"
    />
    <Debug show={{ values: true, status: true, config: true }}/>
  </Form>

export default Show`,No=()=>t(n,{children:[e(l,{name:"message",label:"Message"}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"]}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions"}),e(w,{show:{values:!0,status:!0,config:!0}})]}),Vo=`import { Form, Field, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const ShowAll = () =>
  <Form>
    <Field name="message" label="Message"/>
    <Debug showAll/>
  </Form>

export default ShowAll`,Lo=()=>t(n,{children:[e(l,{name:"message",label:"Message"}),e(w,{showAll:!0})]}),Do=()=>t("div",{children:[e("h1",{children:"Debug"}),t("p",{children:["The ",e("code",{children:"Debug"})," component can be used in development to debug your form.  By default it displays only the form values."]}),e(r,{Element:Oo,code:qo,caption:"Debug",children:e("p",{children:"Try updating the form values and see how the debugging data changes."})}),e("h2",{children:"show"}),t("p",{children:["The ",e("code",{children:"show"})," option can used to configure what data the debug panel displays.  It should be an object containing any of"," ",e("code",{children:"values"}),", ",e("code",{children:"config"}),", ",e("code",{children:"status"})," or"," ",e("code",{children:"fields"})," which should be set to ",e("code",{children:"true"})," to enable display."]}),e(r,{Element:No,code:Ao,caption:"show"}),e("h2",{children:"showAll"}),t("p",{children:["The ",e("code",{children:"showAll"})," option is a shortcut to showing all form data."]}),e(r,{Element:Lo,code:Vo,caption:"showAll"})]}),Bo=()=>t(q,{children:[e(a,{path:"",end:!0,element:e(ue,{})}),e(a,{path:"Form/*",element:e(Ae,{})}),e(a,{path:"Field/*",element:e(Sl,{})}),e(a,{path:"Fields",element:e(yl,{})}),e(a,{path:"Fieldset",element:e(Ol,{})}),e(a,{path:"Submit",element:e(jl,{})}),e(a,{path:"Reset",element:e(Hl,{})}),e(a,{path:"Cancel",element:e(zl,{})}),e(a,{path:"CancelSubmit",element:e(eo,{})}),e(a,{path:"ResetSubmit",element:e(mo,{})}),e(a,{path:"CancelResetSubmit",element:e(no,{})}),e(a,{path:"Changed",element:e(po,{})}),e(a,{path:"Label",element:e(Fo,{})}),e(a,{path:"Errors",element:e(ko,{})}),e(a,{path:"Debug",element:e(Do,{})})]});export{Bo as default};
