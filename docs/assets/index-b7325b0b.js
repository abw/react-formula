import{j as t,a as e,_ as K,L as x,r as p,o as b,F as n,b as l,$ as y,d as m,c as u,z as J,S as h,a0 as z,a1 as X,a2 as Z,Y as O,Z as i,a3 as _,D as S,H as B,h as w,R as F,W as P,a4 as Q,C as ee,u as te,v as le,a5 as oe,a6 as re,a7 as ne,i as ie,a8 as ae,y as de,k as se,a9 as ce,x as me,l as T,M as ue,t as I,n as he,E as pe,aa as L,ab as $,ac as M,ad as R,e as g,ae as U,af as C,A as q,ag as fe,ah as be,I as A,J as N,K as V,P as H,U as Fe,g as xe,X as Ee}from"./index-e88f7b9f.js";import{T as G}from"./TOC-c02c7200.js";import{E as r,p as ge}from"./Example-640aaaeb.js";import{c as v}from"./index.esm-ecaef62f.js";const Se=()=>t("div",{children:[e("h1",{children:"Components"}),e("p",{children:"This section of the documentation provides detailed information about each of the components."}),e(G,{menu:K})]}),we=()=>t("div",{children:[e("h1",{children:"Form"}),t("p",{children:["The ",e("code",{children:"Form"})," component is used to render a form. Inside the form you will typically have one or more"," ",e(x,{to:"/field",children:e("code",{children:"Field"})})," components to render the fields and a ",e(x,{to:"/form/submit",children:e("code",{children:"Submit"})})," ","component to add a submit button."]}),t("ul",{className:"menu",children:[e("li",{children:e(x,{to:"./properties",text:"Form properties"})}),t("li",{children:[e(x,{to:"./reset",children:e("code",{children:"Reset"})})," component to reset the form"]}),t("li",{children:[e(x,{to:"./submit",children:e("code",{children:"Submit"})})," component to submit the form"]}),t("li",{children:[t(x,{to:"./controls",children:["Controls combining ",e("code",{children:"Submit"})]})," component to submit the form"]})]})]}),ve=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:"THIS IS TODO"}),t("pre",{children:["className:         FORMULA",e("br",{}),"errorsInHeader:    true",e("br",{}),"errorsInFooter:    false,",e("br",{}),"enctype:           application/x-www-form-urlencoded",e("br",{}),"method:            post",e("br",{}),"headerClass:       header",e("br",{}),"bodyClass:         body",e("br",{}),"footerClass:       footer",e("br",{}),"errorsClass:       errors",e("br",{}),"errorsTitle:       n => `Form Submission Error... errorPrompt:       Please correct this problem and re-submit:",e("br",{}),"errorsPrompt:      n => `Please correct these... submittingClass:   SUBMITTING,",e("br",{}),"validatingClass:   VALIDATING",e("br",{})]})]}),ye=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetFocusExample`,Te=()=>{const[o,a]=p.useState(!1);return t(b,{children:[t(n,{onLoad:a,children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",type:"textarea"}),e(l,{name:"field3",label:"Field Three",type:"checkbox",text:"I agree to the Terms and Conditions"}),e(l,{name:"field4",label:"Field Four",type:"select",options:["Nigel","David","Derek"]}),e(l,{name:"field5",label:"Field Five",type:"radio",default:"Keyboards",options:["Vocals","Guitar","Bass","Keyboards","Drums"]})]}),t("div",{children:[e("button",{className:"btn-blue",onClick:()=>o==null?void 0:o.setFocus("field1"),children:"Focus One"}),e("button",{className:"btn-blue",onClick:()=>o==null?void 0:o.setFocus("field2"),children:"Focus Two"}),e("button",{className:"btn-blue",onClick:()=>o==null?void 0:o.setFocus("field3"),children:"Focus Three"}),e("button",{className:"btn-blue",onClick:()=>o==null?void 0:o.setFocus("field4"),children:"Focus Four"}),e("button",{className:"btn-blue",onClick:()=>o==null?void 0:o.setFocus("field5"),children:"Focus Five"})]})]})},Re=`import { Form, Field, useForm } from '../../../../../lib/index.js'

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

export default UseFormFocus`,Ce=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two"}),e(D,{name:"field1",caption:"Focus Field One"}),e(D,{name:"field2",caption:"Focus Field Two"})]}),D=({name:o,caption:a})=>{const{setFocus:d}=y();return e("button",{className:"btn-blue",onClick:c=>{c.preventDefault(),d(o)},children:a})},ke=`import { useForm } from '../../../../../lib/index.js'

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

export default FieldFocusButton`,Oe=()=>t("div",{children:[e("h1",{children:"Focus Fields"}),e("h2",{children:e("code",{children:"setFocus()"})}),t("p",{children:["You can programmatically set the focus on a ",e(m,{})," by calling the ",e("code",{children:"setFocus()"})," method on the ",e(u,{}),", passing the name of the field that you want to focus as an argument."]}),t("p",{children:["You can capture a reference to the form using the ",e("code",{children:"onLoad"})," ","property to set a state variable, as shown in this example."]}),e(r,{Element:Te,code:ye,caption:"onLoad() and setFocus()",children:e("p",{children:"Click on one of the buttons to focus on a field."})}),t("p",{children:["If the buttons (or other controls) that you want to use to focus the fields are contained within the ",e(u,{})," then you can call the ",e("code",{children:"useForm()"})," function to gain access to the form context."]}),e(r,{Element:Ce,code:Re,caption:"useForm() and setFocus()"}),t("p",{children:["Be careful to make sure that your buttons call"," ",e("code",{children:"e.preventDefault()"})," on the event, as shown in the example above, otherwise the form may be submitted.  Alternately you can pass the event to the ",e("code",{children:"setFocus()"})," method as the second argument and it will do it for you, as shown below."]}),e(J,{code:ge(ke),expand:!0})]}),Le=()=>t(n,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(h,{})]}),qe=`import { Form, Field, Submit } from '../../../../../../lib/index.js'

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

export default SubmitExample`,Ae=()=>t("div",{children:[e("h1",{children:"Validation"}),e("p",{children:"Validation can be applied on two levels: on individual fields and/or on the form."}),t("p",{children:["You can specify a field is ",e("code",{children:"required"}),", as shown here, or define your own custom ",e(x,{to:"/components/field/validation",text:"field validation"})," functions. When the form is submitted, each field will be validated.  If any validation errors occur then the form submission will be cancelled and the errors displayed."]}),e(r,{Element:Le,code:qe,caption:"Required Fields",expand:!0,children:e("p",{children:"Try entering some text in the fields below then click on the Submit button.  The first two fields are required so you can leave either of the them empty to see the validation errors."})}),t("p",{children:["You can also define a ",e("code",{children:"validate"})," function on the ",e(u,{}),". This will be run after any field validation and will be passed"]})]}),Ne=()=>{const[o,a]=p.useState();return t(n,{onSubmit:d=>a(`foo was submitted as ${d.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(h,{}),o]})},Ve=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnSubmitExample = () => {
  const [msg, setMsg] = useState()

  return (
    <Form onSubmit={values => setMsg(\`foo was submitted as \${values.foo}\`)}>
      <Field name="foo" label="Foo Field"/>
      <Submit/>
      {msg}
    </Form>
  )
}

export default OnSubmitExample`,s=({links:o})=>t("div",{className:"see-also",children:[e("h2",{children:"See Also"}),e("ul",{className:"menu",children:o.map(a=>e(Pe,{to:a},a))})]}),Pe=({to:o})=>{const a=z[o]||X(`Invalid SeeAlso link: ${o}`),{about:d}=a;return t("li",{children:[e(Z,{to:o}),!!d&&e("span",{className:"about",children:d})]})},De=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onSubmit"})}),e("p",{children:"TODO"}),e(r,{Element:Ne,code:Ve,caption:"onSubmit",expand:!0,children:e("p",{children:"TODO"})}),e(s,{links:["form:onSuccess","form:onError"]})]}),je=()=>{const[o,a]=p.useState();return t(n,{onSubmit:d=>a(`foo was submitted as ${d.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(h,{}),o]})},Ye=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnSuccessExample = () => {
  const [msg, setMsg] = useState()

  return (
    <Form onSubmit={values => setMsg(\`foo was submitted as \${values.foo}\`)}>
      <Field name="foo" label="Foo Field"/>
      <Submit/>
      {msg}
    </Form>
  )
}

export default OnSuccessExample`,Be=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onSuccess"})}),e("p",{children:"TODO"}),e(r,{Element:je,code:Ye,caption:"onSuccess",expand:!0,children:e("p",{children:"TODO"})}),e(s,{links:["form:onSubmit","form:onError"]})]}),Ie=()=>{const[o,a]=p.useState();return t(n,{onSubmit:d=>a(`foo was submitted as ${d.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(h,{}),o]})},$e=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnErrorExample = () => {
  const [msg, setMsg] = useState()

  return (
    <Form onSubmit={values => setMsg(\`foo was submitted as \${values.foo}\`)}>
      <Field name="foo" label="Foo Field"/>
      <Submit/>
      {msg}
    </Form>
  )
}

export default OnErrorExample`,Me=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onError"})}),e("p",{children:"TODO"}),e(r,{Element:Ie,code:$e,caption:"onError",expand:!0,children:e("p",{children:"TODO"})}),e(s,{links:["form:onSubmit","form:onError"]})]}),Ue=`import { Form, Field } from '../../../../../../lib/index.js'

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

export default SetValues`,He=()=>{const[o,a]=p.useState(),d=(c,k)=>o==null?void 0:o.setValues({color:c,animal:k});return t(b,{children:[t(n,{onLoad:a,children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"})]}),e("button",{onClick:()=>d("Grey","Elephant"),children:"Grey Elephant"}),e("button",{onClick:()=>d("Red","Fox"),children:"Red Fox"})]})},Ge=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

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

export default UseSetValues`,We=()=>e(b,{children:t(n,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),e(j,{color:"Grey",animal:"Elephant"}),e(j,{color:"Red",animal:"Fox"})]})}),j=({color:o,animal:a})=>{const{setValues:d}=y();return t("button",{onClick:c=>{c.preventDefault(),d({color:o,animal:a},c)},children:[o," ",a]})},Ke=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

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

export default UseSetValues`,Je=()=>e(b,{children:t(n,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),e(Y,{color:"Grey",animal:"Elephant"}),e(Y,{color:"Red",animal:"Fox"})]})}),Y=({color:o,animal:a})=>{const{setValues:d}=y();return t("button",{onClick:c=>d({color:o,animal:a},c),children:[o," ",a]})},ze=()=>t("div",{children:[e("h1",{children:"Setting Form Values"}),e("h2",{children:"setValues()"}),t("p",{children:["The ",e("code",{children:"setValues"})," function can be used to programmatically set form values.  You can use the ",e("code",{children:"onLoad"})," handler to save a reference to the form context as show in this example."]}),e(r,{Element:He,code:Ue,caption:"setValues",children:e("p",{children:"Click on one of the buttons to update the form values."})}),t("p",{children:["If you want to set the values from a component placed inside the"," ",e("code",{children:"Form"})," component then you can use ",e("code",{children:"useForm()"})," to get access to the form context."]}),e(r,{Element:We,code:Ge,caption:"setValues"}),t("p",{children:["If you're using a ",e("code",{children:"button"})," to trigger the call to"," ",e("code",{children:"setValues()"}),", as shown in the example above, then you need to make sure you call ",e("code",{children:"e.preventDefault()"})," event.  Otherwise the form may be submitted. Alternately you can pass the event as the second argument to the ",e("code",{children:"setValues()"})," method as shown below and it will do it for you."]}),e(r,{Element:Je,code:Ke,caption:"setValues"})]}),Xe=()=>t(O,{children:[e(i,{path:"",end:!0,element:e(we,{})}),e(i,{path:"properties",element:e(ve,{})}),e(i,{path:"setfocus",element:e(Oe,{})}),e(i,{path:"validation",element:e(Ae,{})}),e(i,{path:"onSubmit",element:e(De,{})}),e(i,{path:"onSuccess",element:e(Be,{})}),e(i,{path:"onError",element:e(Me,{})}),e(i,{path:"set/*",element:e(ze,{})})]}),Ze=`import { Form, Field } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const FieldExample = () =>
  <Form>
    <Field
      name="example"
      label="An Example Field"
      type="text"   // default
      required
    />
  </Form>

export default FieldExample`,_e=()=>e(n,{children:e(l,{name:"example",label:"An Example Field",type:"text",required:!0})}),Qe=()=>t(b,{children:[e("h1",{children:"Field Component"}),t("p",{className:"intro",children:["The ",e("code",{children:"Field"})," component is used to render a field inside a ",e(u,{}),"."]}),e(r,{Element:_e,code:Ze,caption:"Field",expand:!0}),e(G,{menu:_})]}),et=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:"THIS IS TODO"})]}),tt=`import { Form, Field, Debug, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit, Debug } from '@abw/react-formula'

const NameExample = () =>
  <Form>
    <Field name="field1"/>
    <Submit/>
    <Debug/>
  </Form>

export default NameExample`,lt=()=>t(n,{children:[e(l,{name:"field1"}),e(h,{}),e(S,{})]}),ot=`import { Form, Field, Debug, Submit } from '../../../../../lib/index.js'

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

export default FormFieldsExample`,rt={field1:{label:"This is field one",required:!0}},nt=()=>t(n,{fields:rt,children:[e(l,{name:"field1"}),e(h,{}),e(S,{})]}),it=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"name"})}),t("p",{children:["The ",e("code",{children:"name"})," is the only required property for a ",e(m,{}),". It is used as the key to set the ",e(u,{})," value."]}),e(r,{Element:lt,code:tt,caption:"name",expand:!0,children:t("p",{children:["Enter some text in the input field.  The ",e(B,{}),` component is included in this example to show the form data as it's being set.  Click on the "Submit" button and you'll see an alert showing the data that would be submitted.`]})}),t("p",{children:["You can set the ",e(w,{})," property on the ",e(u,{})," as an object containing additional properties for each field.  The"," ",e("code",{children:"name"})," is used as the key to fetch those properties. Any properties explicitly set on the ",e(m,{})," will override them."]}),e(r,{Element:nt,code:ot,caption:"Form fields",expand:!0,children:t("p",{children:["Note how the ",e(m,{})," has now got a ",e("code",{children:"label"})," and the"," ",e(F,{})," property is set."]})}),e(s,{links:["field:label","form:fields"]})]}),at=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Hello World!"/>
  </Form>

export default LabelExample`,dt=()=>e(n,{children:e(l,{name:"field1",label:"Hello World!"})}),st=`import { Form, Field } from '../../../../../lib/index.js'

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

export default FormFieldsExample`,ct={field1:{label:"This is field one"},field2:{label:"This is field two"}},mt=()=>t(n,{fields:ct,children:[e(l,{name:"field1"}),e(l,{name:"field2",label:"A different label"})]}),ut=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"label"})}),t("p",{children:["Add a label to the field with the ",e("code",{children:"label"})," property."]}),e(r,{Element:dt,code:at,caption:"name",expand:!0}),t("p",{children:["Like all other field properties, they can be defined via ",e(w,{})," ","on the ",e(u,{}),".  If you explicitly set a ",e("code",{children:"label"})," on the"," ",e(m,{})," then it will take precedence."]}),e(r,{Element:mt,code:st,caption:"Form fields",expand:!0,children:t("p",{children:["Note how the first field has the ",e("code",{children:"label"})," defined in the"," ",e(w,{})," but the second defines its own ",e("code",{children:"label"})," ","which is used instead of the one defined in the ",e(w,{}),"."]})}),e(s,{links:["field:name","form:fields"]})]}),ht=`import { Form, Field } from '../../../../../lib/index.js'

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

export default TypeExample`,pt=()=>t(n,{children:[e(l,{name:"field1",label:"Text Field"}),e(l,{name:"field2",type:"textarea",label:"TextArea Field"}),e(l,{name:"field3",type:"number",label:"Number Field"}),e(l,{name:"field4",type:"checkbox",label:"Checkbox Field",text:"Yes"})]}),ft=`import { Form, Field, Debug } from '../../../../../lib/index.js'

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

export default FormFieldsExample`,bt={field1:{label:"Text Field"},field2:{label:"TextArea Field",type:"textarea"},field3:{label:"Number Field",type:"number"},field4:{label:"Checkbox Field",type:"checkbox",text:"Yes"},field5:{label:"Another Field"}},Ft=()=>t(n,{fields:bt,children:[e(l,{name:"field1"}),e(l,{name:"field2"}),e(l,{name:"field3"}),e(l,{name:"field4"}),e(S,{})]}),xt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"type"})}),t("p",{children:["The ",e("code",{children:"type"})," property specifies what kind of input should be displayed.  The default value is ",e("code",{children:"text"})," corresponding to the ",e(P,{})," input component.  Other values can be"," ",e("code",{children:"textarea"})," (see ",e(Q,{}),"),"," ",e("code",{children:"checkbox"})," (see ",e(ee,{}),"),"," ",e("code",{children:"radio"})," (see ",e(te,{}),"),"," ",e("code",{children:"select"})," (see ",e(le,{}),") and"," ",e("code",{children:"hidden"})," (see ",e(oe,{}),") corresponding to the basic HTML input types."]}),t("p",{children:["You can also set ",e("code",{children:"type"})," to be one of the other valid HTML input types, e.g. ",e("code",{children:"password"}),", ",e("code",{children:"email"}),","," ",e("code",{children:"number"}),", ",e("code",{children:"date"}),", ",e("code",{children:"color"}),", and so on.  These use the same basic ",e(P,{})," input component as for ",e("code",{children:"text"})," types, but with the ",e("code",{children:"type"})," attribute set appropriately to use the browser-specific functionality."]}),e(r,{Element:pt,code:ht,caption:"type",expand:!0,children:e("p",{children:`Enter some text in the input fields below. Note how the "Number Field" input uses the browser's built-in functionality to accept only numbers.`})}),t("p",{children:["As with all other ",e(m,{})," properties, they can be defined using"," ",e(w,{})," set on the ",e(u,{}),". The benefit of this approach is that it keeps the field definitions and markup separate.  As well as making them easier to read and maintain, it also has the benefit that field definitions can be reused across multiple forms."]}),t(r,{Element:Ft,code:ft,caption:"Form fields",children:[t("p",{children:["The example below generates exactly the same form as the one above (with the exception of the additional ",e(B,{})," component). Note that the form data will only include fields that are present in the ",e(u,{}),".  The ",e("code",{children:"field5"})," field definition is effectively ignored."]}),e("p",{})]}),e(s,{links:["field:name","field:label","form:fields","input:types"]})]}),Et=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const PlaceholderExample = () =>
  <Form>
    <Field
      name="name" label="Your Name"
      placeholder="Enter your name"
    />
  </Form>

export default PlaceholderExample`,gt=()=>e(n,{children:e(l,{name:"name",label:"Your Name",placeholder:"Enter your name"})}),St=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"placeholder"})}),t("p",{children:["Use the ",e("code",{children:"placeholder"})," property to add some text as a placeholder in the input."]}),e(r,{Element:gt,code:Et,caption:"placeholder",expand:!0}),e(s,{links:["field:name","form:fields"]})]}),wt=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default HelpExample`,vt=()=>t(n,{children:[e(l,{name:"email",label:"Email Address",help:"Enter the email address that you registered with",required:!0}),e(h,{})]}),yt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"help"})}),t("p",{children:["The ",e("code",{children:"help"})," property can be used to define some additional help for the user.  By default it is displayed underneath the field input."]}),e("p",{children:"If the field input fails to validate then the validation error message will be displayed in its place."}),e(r,{Element:vt,code:wt,caption:"help",children:e("p",{children:"Try submitting the form without entering any value.  You should see the help message replaced by the validation error."})}),e(s,{links:["field:name","field:label","field:required","field:validate","form:fields"]})]}),Tt=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const PrefixExample = () =>
  <Form>
    <Field
      name="money" type="number"
      label="Price"
      prefix="$"
    />
  </Form>

export default PrefixExample`,Rt=()=>e(n,{children:e(l,{name:"money",type:"number",label:"Price",prefix:"$"})}),Ct=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"prefix"})}),t("p",{children:["You can add a ",e("code",{children:"prefix"})," to a ",e("code",{children:"text"})," field or any of the other types using the basic text input, e.g."," ",e("code",{children:"money"}),", ",e("code",{children:"date"}),", etc."]}),e(r,{Element:Rt,code:Tt,caption:"prefix",expand:!0}),e(s,{links:["field:suffix"]})]}),kt=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SuffixExample = () =>
  <Form>
    <Field
      name="suffix" type="password"
      label="Enter your password"
      suffix="🔒"
    />
  </Form>

export default SuffixExample`,Ot=()=>e(n,{children:e(l,{name:"suffix",type:"password",label:"Enter your password",suffix:"🔒"})}),Lt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default PrefixSuffixExample`,qt=()=>e(n,{children:e(l,{name:"money",type:"number",label:"Field with both prefix and suffix",prefix:"$",suffix:".00"})}),At=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"suffix"})}),t("p",{children:["You can add add a ",e("code",{children:"suffix"})," to a field"]}),e(r,{Element:Ot,code:kt,caption:"suffix",expand:!0}),t("p",{children:["You can add both a ",e("code",{children:"prefix"})," and a ",e("code",{children:"suffix"}),"."]}),e(r,{Element:qt,code:Lt,caption:"prefix and suffix",expand:!0}),e(s,{links:["field:prefix"]})]}),Nt=()=>{const[o,a]=p.useState(),d=c=>a(`${c.label} was focussed`);return t(n,{children:[e(l,{name:"foo",label:"The Foo Field",onFocus:d}),e(l,{name:"bar",label:"The Bar Field",onFocus:d}),o]})},Vt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnFocusExample`,Pt=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onFocus"})}),t("p",{children:["You can add an ",e("code",{children:"onFocus"})," handler to a ",e(m,{})," ","which will be called when the field is focussed (i.e. selected). The field context will be passed as an argument."]}),e(r,{Element:Nt,code:Vt,caption:"onFocus",expand:!0,children:e("p",{children:"Focus on each of the fields below.  A message should be displayed each time a field gains focus."})}),e(s,{links:["field:onBlur","field:onChange","field:onValid","field:onInvalid"]})]}),Dt=()=>{const[o,a]=p.useState(),d=c=>a(`${c.label} was blurred`);return t(n,{children:[e(l,{name:"foo",label:"The Foo Field",onBlur:d}),e(l,{name:"bar",label:"The Bar Field",onBlur:d}),o]})},jt=`import { Form, Field } from '../../../../../lib/index.js'

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
export default OnBlurExample`,Yt=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onBlur"})}),t("p",{children:["You can add an ",e("code",{children:"onBlur"})," handler to a ",e(m,{})," ","which will be called when the field is blurred (i.e. unselected). The field context will be passed as an argument."]}),e(r,{Element:Dt,code:jt,caption:"onFocus",expand:!0,children:e("p",{children:"Focus on one of the fields below and then select the other field. A message should be displayed each time a field loses focus."})}),e(s,{links:["field:validateOnBlur","field:onFocus","field:onChange","field:onValid","field:onInvalid"]})]}),Bt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetFocusExample`,It=()=>{const[o,a]=p.useState(!1),[d,c]=p.useState(!1);return t(b,{children:[t(n,{children:[e(l,{onLoad:a,name:"field1",label:"Field One"}),e(l,{onLoad:c,name:"field2",label:"Field Two"})]}),t("div",{children:[e("button",{onClick:()=>o==null?void 0:o.setFocus(),children:"Focus Field One"}),e("button",{onClick:()=>d==null?void 0:d.setFocus(),children:"Focus Field Two"})]})]})},$t=()=>t("div",{children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setFocus()"})}),t("p",{children:["If you want to programmatically set the focus on a ",e(m,{})," then you first need to capture a reference to it.  You can do that using an ",e("code",{children:"onLoad"})," property to set a state variable."]}),t("p",{children:["Then call the ",e("code",{children:"setFocus()"})," method on the field object to focus it."]}),e(r,{Element:It,code:Bt,caption:"setFocus()",children:e("p",{children:"Click on one of the buttons to focus on a field."})}),t("p",{children:["You can also focus on fields by name using the ",e(u,{})," ",e(re,{})," method."]}),e(s,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),Mt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetValueExample`,Ut=()=>{const[o,a]=p.useState(!1);return t(b,{children:[e(n,{children:e(l,{onLoad:a,name:"animal",label:"Animal"})}),t("div",{children:[e("button",{onClick:()=>o.setValue("Antelope"),children:"Antelope"}),e("button",{onClick:()=>o.setValue("Badger"),children:"Badger"}),e("button",{onClick:()=>o.setValue("Camel"),children:"Camel"})]})]})},Ht=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetValueExample`,Gt=()=>{const[o,a]=p.useState(!1);return e(b,{children:t(n,{children:[e(l,{onLoad:a,name:"animal",label:"Animal"}),t("div",{children:[e("button",{className:"btn-green",onClick:d=>{d.preventDefault(),o.setValue("Antelope")},children:"Antelope"}),e("button",{className:"btn-green",onClick:d=>o.setValue("Badger",d),children:"Badger"}),e("button",{type:"button",className:"btn-green",onClick:()=>o.setValue("Camel"),children:"Camel"}),e("button",{onClick:()=>o.setValue("Danger!"),className:"btn-red",children:"Danger!"})]})]})})},Wt=()=>t("div",{children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setValue()"})}),t("p",{children:["If you want to programmatically set the value for a ",e(m,{})," then you first need to capture a reference to it.  You can do that using an ",e("code",{children:"onLoad"})," property to set a state variable."]}),t("p",{children:["Then call the ",e("code",{children:"setValue()"})," method on the field object to set the value."]}),e(r,{Element:Ut,code:Mt,caption:"setValue()",children:e("p",{children:"Click on one of the buttons to set the input value."})}),t("p",{children:["One thing to be aware of is that the default behaviour of a"," ",e("code",{children:"button"})," inside a ",e("code",{children:"form"})," is to submit the form. This is an innate property of HTML and not something that's specific to this library.  In the example above we put the buttons outside the"," ",e(u,{})," to avoid this behaviour, but it's not always possible to do that. There are a number of ways to work around it, shown in the example below."]}),t("p",{children:['The first "Antelope" button calls the'," ",e("code",{children:"preventDefault()"})," "," method on the event.  Given that this is a bit clumsy, the ",e("code",{children:"setValue()"})," method allows you to pass the event as the second argument and it will call"," ",e("code",{children:"preventDefault()"}),' for you, as shown on the second "Badger" button.  The third approach, shown on the "Camel" button, is to explicitly set the'," ",e("code",{children:"type"})," to ",e("code",{children:"button"})," to override the default"," ",e("code",{children:"type"})," of ",e("code",{children:"submit"}),`.  The fourth "Danger!" button doesn't do anything and will cause the form to submit, just in case you don't believe me that it's really a problem.`]}),e(r,{Element:Gt,code:Ht,caption:"setValue()",children:e("p",{children:"Click on one of the buttons to set the input value.  Be warned that the fourth button will cause the form to submit."})}),t("p",{children:["You can also set values for one or more fields by name using the"," ",e(u,{})," ",e(ne,{})," method."]}),e(s,{links:["form:setValues","field:setFocus","field:reset"]})]}),Kt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ResetExample`,Jt=()=>{const[o,a]=p.useState(!1),[d,c]=p.useState(!1);return t(b,{children:[t(n,{children:[e(l,{onLoad:a,name:"field1",label:"Field One"}),e(l,{onLoad:c,value:"Initial value",name:"field2",label:"Field Two"})]}),t("div",{children:[e("button",{className:"btn-blue",onClick:o.reset,children:"Reset Field One"}),e("button",{className:"btn-blue",onClick:d.reset,children:"Reset Field Two"})]})]})},zt=()=>t("div",{children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"reset()"})}),t("p",{children:["If you want to programmatically reset a ",e(m,{})," then you first need to capture a reference to it.  You can do that using an ",e("code",{children:"onLoad"})," property to set a state variable."]}),t("p",{children:["Then call the ",e("code",{children:"reset()"})," method on the field object to reset it."]}),e(r,{Element:Jt,code:Kt,caption:"reset()",children:e("p",{children:"Enter some text in either of the inputs below and then click on the corresponding button to reset it to the original value."})}),e(s,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),Xt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnChangeExample`,Zt=()=>{const[o,a]=p.useState("");return t(n,{children:[e(l,{name:"example",label:"Field with onChange",onChange:d=>a(d.value)}),"Current value: ",o]})},_t=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onChange"})}),t("p",{children:["You can add an ",e("code",{children:"onChange"})," handler to a ",e(m,{})," ","which will be called when the field value is changed.  The field context will be passed as an argument."]}),e(r,{Element:Zt,code:Xt,caption:"onChange",expand:!0,children:e("p",{children:'Try entering some text in the field below.  You should see the "Current value" display update to reflect the field content.'})}),e(s,{links:["field:validateOnChange","field:onBlur","field:onFocus","field:onValid","field:onInvalid"]})]}),Qt=()=>{const[o,a]=p.useState();return t(n,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onValid:d=>a(`${d.name} is valid: ${d.value}`)}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:d=>a(`${d.name} is valid: ${d.value}`)}),o]})},el=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnValidExample`,tl=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onValid"})}),t("p",{children:["You can add an ",e("code",{children:"onValid"})," handler to a ",e(m,{})," ","which will be called when the field is successfully validated. The field context will be passed as an argument."]}),e(r,{Element:Qt,code:el,caption:"onValid",expand:!0,children:t("p",{children:["Enter some text in one of the fields below and then select the other field.  The ",e("code",{children:"validateOnBlur"})," option on the ",e(u,{})," ","means that the first field will be validated when it loses focus and the ",e("code",{children:"onValid"})," handler will be called."]})}),e(s,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onInvalid"]})]}),ll=()=>{const[o,a]=p.useState(),d=c=>a(`${c.label} is invalid: ${c.message}`);return t(n,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onInvalid:d}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:d,requiredMessage:"You must enter a value"}),o]})},ol=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnInvalidExample`,rl=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onInvalid"})}),t("p",{children:["You can add an ",e("code",{children:"onInvalid"})," handler to a ",e(m,{})," ","which will be called when the field fails validation. The field context will be passed as an argument."]}),t(r,{Element:ll,code:ol,caption:"onInvalid",expand:!0,children:[t("p",{children:["Click one of the fields below and then select the other field without entering any text. The ",e(ie,{})," option on the"," ",e(u,{})," "," means that the fields will be validated when they lose focus. They're both marked as ",e(F,{})," so they will fail validation (assuming you haven't entered anything) and the ",e("code",{children:"onInvalid"})," handler will be called."]}),t("p",{children:["Also note the use of ",e(ae,{})," to set a custom message for the second field."]})]}),e(s,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onValid"]})]}),nl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default PrepareValue`,il={upper:{label:"Converted to UPPER CASE",prepareValue:o=>o.toUpperCase()}},al=()=>e(n,{fields:il,children:e(l,{name:"upper"})}),dl=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"prepareValue"})}),t("p",{children:["You can add a ",e("code",{className:"code",children:"prepareValue"})," function to a ",e(m,{})," to prepare the value before it's set."]}),e(r,{Element:al,code:nl,caption:"onChange",expand:!0,children:e("p",{children:"Try entering some letters in the field below.  You should see that they get converted to upper case."})}),e(s,{links:["field:validate","field:validateOnBlur","field:validateOnChange"]})]}),sl=()=>t(n,{children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(h,{})]}),cl=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const Required = () =>
  <Form>
    <Field name="field1" label="Required Field" required/>
    <Submit/>
  </Form>

export default Required`,ml=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"required"})}),t("p",{children:["You can add a ",e("code",{children:"required"})," property to a field to mark it as being required.  This automatically adds a validator to the field to ensure that a value is provided when the form is submitted."]}),e(r,{Element:sl,code:cl,caption:"required",expand:!0,children:e("p",{children:"Try submitting the form without entering anything in the field input."})}),e(s,{links:["field:showRequired","field:requiredLabel","field:requiredMessage","field:validateOnBlur","field:validateOnChange"]})]}),ul=()=>t(n,{debug:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0,showRequired:!0}),e(l,{name:"field2",label:"Optional Field"})]}),hl=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowRequired = () =>
  <Form debug>
    <Field
      name="field1" label="Required Field"
      required showRequired
    />
    <Field
      name="field2" label="Optional Field"
    />
  </Form>

export default ShowRequired`,pl=()=>t(n,{showRequired:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(l,{name:"field2",label:"Another Required Field",required:!0})]}),fl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ShowRequiredForm`,bl=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showRequired"})}),t("p",{children:["If a ",e(m,{})," is marked as ",e(F,{})," then the"," ",e("code",{children:"showRequired"})," property can be added to have an additional label displayed indicating that it is required."]}),e(r,{Element:ul,code:hl,caption:"showRequired on Field",expand:!0}),t("p",{children:["The ",e("code",{children:"showRequired"})," property can also be added to the"," ",e(u,{})," to have it apply to all ",e(F,{})," fields."]}),e(r,{Element:pl,code:fl,caption:"showRequired on Form",expand:!0}),e(s,{links:["field:required","field:requiredLabel","field:showOptional","field:optionalLabel"]})]}),Fl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default RequiredLabel`,xl=()=>t(n,{showRequired:!0,requiredLabel:"Important!",children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(l,{name:"field2",label:"Another Required Field",required:!0,requiredLabel:"Very Important!"})]}),El=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredLabel"})," property to change the label that is displayed for ",e(F,{})," fields that have the ",e(de,{})," option enabled.  You can set it on individual ",e(m,{})," components or on the parent ",e(u,{}),"."]}),e(r,{Element:xl,code:Fl,caption:"requiredLabel",expand:!0}),e(s,{links:["field:required","field:showRequired","field:showOptional","field:optionalLabel"]})]}),gl=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default RequiredLabel`,Sl=()=>t(n,{requiredMessage:"Nothing will come of nothing",children:[e(l,{name:"foo",label:"Foo",required:!0}),e(l,{name:"bar",label:"Bar",required:!0,requiredMessage:"You really MUST enter a value"}),e(h,{})]}),wl=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredMessage"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredMessage"})," property to change the error message that is generated for ",e(F,{})," fields that aren't completed."]}),t("p",{children:["You can set it on individual ",e(m,{})," components or on the parent"," ",e(u,{})," to act as the default for all fields."]}),e(r,{Element:Sl,code:gl,caption:"requiredMessage",expand:!0,children:e("p",{children:"Try submitting the form without entering any values."})}),e(s,{links:["field:required","field:showRequired","field:requiredLabel","field:validateOnChange","field:validateOnBlur"]})]}),vl={alice:!0,bob:!0,charlie:!0},yl={username:{label:"Username",help:"Choose a username (minimum length: 3)",validateOnChange:!0,minValidateLength:3,validate:(o,a,d,c)=>{o.length<3&&c({message:"Your username must be at least 3 characters"}),vl[o.toLowerCase()]?c({message:"Sorry, that username is taken"}):d({message:"That username is available"})}}},Tl=()=>t(n,{fields:yl,children:[e(l,{name:"username"}),e(h,{})]}),Rl=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const existingUsers = {
  alice:   true,
  bob:     true,
  charlie: true,
}

const fields = {
  username: {
    label: 'Username',
    help:  'Choose a username (minimum length: 3)',
    validateOnChange: true,
    minValidateLength: 3,
    validate: (value, field, resolve, reject) => {
      if (value.length < 3) {
        reject({ message: 'Your username must be at least 3 characters' })
      }
      if (existingUsers[value.toLowerCase()]) {
        reject({ message: 'Sorry, that username is taken' })
      }
      else {
        resolve({ message: 'That username is available' })
      }
    }
  }
}

const MinValidateLengthExample = () =>
  <Form fields={fields}>
    <Field name="username"/>
    <Submit/>
  </Form>

export default MinValidateLengthExample`,Cl=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"minValidateLength"})}),t("p",{children:["You can set the ",e(se,{})," property flag to enable validation any time the field value changes.  The"," ",e("code",{children:"minValidateLength"})," property can be set to only trigger validation when the input length exceeds a threshold."]}),e(r,{Element:Tl,code:Rl,caption:"minValidateLength",children:t("p",{children:["Enter a username in the form below.  The usernames ",e("code",{children:"alice"}),",",e("code",{children:"bob"})," and ",e("code",{children:"charlie"})," will return a validation error saying that they're not available.  There's a minimum length for a username so we wait until at least three characters have been entered before checking to see if the username is available.  Note that the validation will also be triggered when the form is submitted, regardless of how many characters have been entered.  For that reason the validation function also rejects any username that is too short."]})}),e(s,{links:["field:required","field:validate","field:validateOnBlur","field:validateOnChange"]})]}),kl=()=>t(n,{showOptional:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(l,{name:"field2",label:"Optional Field"})]}),Ol=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ShowOptional`,Ll=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showOptional"})}),t("p",{children:["If a field is ",e("b",{children:"NOT"})," marked as ",e(F,{})," then it is optional. If you set the ",e("code",{children:"showOptional"})," property then it will add an additional label to a field to indicate that it's optional.  You can set the property on individual ",e(m,{})," components or on the parent ",e(u,{})," to act as a default for all fields."]}),t("p",{children:["You can use the ",e(ce,{})," property to change the text of the label that is displayed."]}),e(r,{Element:kl,code:Ol,caption:"showOptional",expand:!0}),e(s,{links:["field:required","field:optionalLabel","field:showRequired","field:requiredLabel"]})]}),ql=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OptionalLabel`,Al=()=>t(n,{showOptional:!0,optionalLabel:"Not required",children:[e(l,{name:"field1",label:"Optional Field"}),e(l,{name:"field2",label:"Another Optional Field",optionalLabel:"Nice to have"})]}),Nl=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"optionalLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"optionalLabel"})," property to change the label that is display for optional fields (i.e. those that aren't marked as ",e(F,{}),") that have the"," ",e(me,{})," option set.  You can set it on individual"," ",e(m,{})," components or on the parent ",e(u,{})," to act as a default for all fields."]}),e(r,{Element:Al,code:ql,caption:"optionalLabel",expand:!0}),e(s,{links:["field:required","field:showRequired","field:showOptional","field:requiredLabel"]})]}),Vl={username:{label:"Username",help:"Enter your username",validate:o=>v().trim().required("You must enter your username you numpty!").validate(o)},password:{label:"Password",type:"password",help:"Enter your password",validate:o=>v().trim().required("You must enter your password you muppet!").validate(o)}},Pl=()=>t(n,{fields:Vl,children:[e(T,{names:"username password"}),e(h,{})]}),Dl=`import { Form, Fields, Submit } from '../../../../../lib/index.js'

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

export default ValidateExample`,jl={username:{label:"Username",help:"Enter your username",validate:async(o,a,d,c)=>{o.match(/badger/i)?d({value:`${o} is a great name`}):c({value:"Mr Badger",message:'Your username must contain the word "badger"'})}}},Yl=()=>t(n,{fields:jl,children:[e(l,{name:"username"}),e(h,{})]}),Bl=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default ValidateExample`,Il=()=>t("div",{children:[e("h1",{children:"Field Validation"}),t("p",{children:["There are a number of different ways to validate field input. For simple cases where a value must be provided you can use the"," ",e(F,{})," property.  If you need to perform additional validation then you can do that using a ",e("code",{children:"validate"})," function."]}),e("h2",{children:e("code",{children:"validate"})}),t("p",{children:["You can use the ",e(F,{})," property to mark a field as being required, but it's a blunt instrument.  All it will do is check that a field has some value entered. For more robust validation you can use the ",e("code",{children:"validate"})," property to define an ",e("code",{children:"async"})," ","validation function."]}),t("p",{children:["In this example we're using"," ",e("a",{href:"https://www.npmjs.com/package/yup",children:"Yup"})," but you can use anything you like.  It should return the validated value on success or throw an error if the valid is invalid."]}),e(r,{Element:Pl,code:Dl,caption:"validate",children:e("p",{children:"Try submitting the form without entering any values for either of the fields. You should see the custom validation errors."})}),t("p",{children:["The ",e("code",{children:"validate"})," function is passed four arguments.  The first is the field value for common cases where that's all you need to determine if the field is valid.  The second argument is the field context containing everything you need to know about the field state and callable actions to change it.  The third and fourth arguments are"," ",e("code",{children:"resolve"})," and ",e("code",{children:"reject"})," functions which can be called to validate or invalidate the field, respectively.  The"," ",e("code",{children:"resolve"})," function should be passed an object containing the ",e("code",{children:"value"}),", which may be modified by your function. The ",e("code",{children:"reject"})," function should be passed an object containing an error ",e("code",{children:"message"}),", and optionally a new ",e("code",{children:"value"})," ","for the field."]}),e(r,{Element:Yl,code:Bl,caption:"validate",children:e("p",{children:'In this somewhat contrived example we require the user to enter a username containing the word "badger".'})}),e(s,{links:["field:required","field:validateOnChange","field:validateOnBlur"]})]}),$l=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ValidateOnChangeExample`,Ml={vowels:{label:"Vowels",help:"Enter between 3 and 5 vowels",validateOnChange:!0,minValidateLength:3,validate:o=>v().trim().matches(/^[^y]*$/i,"Sorry, but y is not allowed").matches(/^[aeiou]*$/i,"You should only type vowels").min(3,"You must enter at least three vowels").max(5,"You should not enter more than 5 vowels").validate(o)}},Ul=()=>e(n,{fields:Ml,children:e(l,{name:"vowels"})}),Hl=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnChange"})}),t("p",{children:["You can set the ",e("code",{children:"validateOnChange"})," flag to enable validation any time the field value changes.  The ",e(ue,{})," property can be set to only trigger validation when the input length exceeds a threshold."]}),e(r,{Element:Ul,code:$l,caption:"validateOnChange",children:e("p",{children:"Enter some text in the field below.  Once you've entered three letters the validation will kick in.  You should see an error if you enter any letters that aren't vowels."})}),e(s,{links:["field:required","field:validate","field:validateOnBlur","field:minValidateLength"]})]}),Gl={username:{label:"Username",help:"Enter your username",validate:o=>v().trim().required("You must enter your username you numpty!").validate(o)},password:{label:"Password",type:"password",help:"Enter your password",validate:o=>v().trim().required("You must enter your password you muppet!").validate(o)}},Wl=()=>t(n,{fields:Gl,validateOnBlur:!0,children:[e(T,{names:"username password"}),e(h,{})]}),Kl=`import { Form, Fields, Submit } from '../../../../../lib/index.js'

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

export default ValidateExample`,Jl=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnBlur"})}),t("p",{children:["The ",e("code",{children:"validateOnBlur"})," property can be set to trigger validation whenever a field is blurred.  You can set it on individual"," ",e(m,{})," components or on the parent ",e(u,{})," to have it apply to all fields."]}),e(r,{Element:Wl,code:Kl,caption:"validate",children:e("p",{children:"Try switching focus from one field to another without entering anything.  You should see the custom validation errors when each field is blurred."})}),e(s,{links:["field:required","field:validate","field:validateOnChange"]})]}),zl=()=>t(O,{children:[e(i,{path:"",end:!0,element:e(Qe,{})}),e(i,{path:"properties",element:e(et,{})}),e(i,{path:"name",element:e(it,{})}),e(i,{path:"label",element:e(ut,{})}),e(i,{path:"type",element:e(xt,{})}),e(i,{path:"placeholder",element:e(St,{})}),e(i,{path:"help",element:e(yt,{})}),e(i,{path:"prefix",element:e(Ct,{})}),e(i,{path:"suffix",element:e(At,{})}),e(i,{path:"required",element:e(ml,{})}),e(i,{path:"showRequired",element:e(bl,{})}),e(i,{path:"requiredLabel",element:e(El,{})}),e(i,{path:"requiredMessage",element:e(wl,{})}),e(i,{path:"showOptional",element:e(Ll,{})}),e(i,{path:"optionalLabel",element:e(Nl,{})}),e(i,{path:"prepareValue",element:e(dl,{})}),e(i,{path:"validate",element:e(Il,{})}),e(i,{path:"validateOnBlur",element:e(Jl,{})}),e(i,{path:"validateOnChange",element:e(Hl,{})}),e(i,{path:"minValidateLength",element:e(Cl,{})}),e(i,{path:"onFocus",element:e(Pt,{})}),e(i,{path:"onBlur",element:e(Yt,{})}),e(i,{path:"onChange",element:e(_t,{})}),e(i,{path:"onValid",element:e(tl,{})}),e(i,{path:"onInvalid",element:e(rl,{})}),e(i,{path:"setFocus",element:e($t,{})}),e(i,{path:"setValue",element:e(Wt,{})}),e(i,{path:"Reset",element:e(zt,{})})]}),Xl={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},Zl=()=>e(n,{fields:Xl,children:t("div",{className:"grid-2 gap-2",children:[e(T,{names:["name","message"]}),e(T,{names:"badgers animal"})]})}),_l=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,Ql=()=>t("div",{children:[e("h1",{children:"Fields"}),t("p",{children:["The ",e("code",{children:"Fields"})," component can be used to render multiple fields."]}),e("p",{children:"This is a shortcut for convenience, but it depends on you having all your form fields defined in a separate schema so you can reference them only by name."}),t("p",{children:["The ",e("code",{className:"code",children:"names"})," property should be used to specify the list of field names either as an array of strings, or a single string containing a whitespace-delimited list of field names. The ",e("code",{className:"code",children:"Fields"})," component renders each of the fields, collected together in a single"," ",e("code",{className:"code",children:"div"})," element"]}),e(r,{Element:Zl,code:_l,caption:"Fields"})]}),eo=()=>e(n,{children:t(I,{legend:"Fieldset One",children:[e(l,{name:"one",label:"Field One"}),e(l,{name:"one",label:"Field Two"})]})}),to=`import { Form, Field, Fieldset } from '../../../../../lib/index.js'

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
`,lo={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},oo=()=>e(n,{fields:lo,children:e(I,{legend:"Fieldset Two",fields:"name message"})}),ro=`import { Form, Fieldset } from '../../../../../lib/index.js'

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
`,no=()=>t("div",{children:[e("h1",{children:"Fieldset"}),t("p",{children:["The ",e("code",{children:"Fieldset"})," component can be used to create a field set.  The ",e("code",{children:"legend"})," property should be used to set the legend."]}),e(r,{Element:eo,code:to,caption:"Fieldset",expand:!0}),t("p",{children:["The ",e("code",{className:"code",children:"fields"})," property can be used as a shortcut to render a set of named fields using the"," ",e(he,{})," component."]}),e(r,{Element:oo,code:ro,caption:"Fieldset fields",expand:!0})]}),io=()=>t(n,{showRequired:!0,children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(h,{})]}),ao=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one"/>
    <Field name="two"   label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample`,so=()=>t(n,{children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(h,{className:"btn-blue",text:"Save Changes"})]}),co=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const SubmitProps = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit className="btn-blue" text="Save Changes"/>
  </Form>

export default SubmitProps`,mo=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnSubmit = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <Submit/>
  </Form>

export default OnSubmit`,uo=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(h,{})]}),ho=()=>t("div",{children:[e("h1",{children:"Submit"}),t("p",{children:["The ",e("code",{children:"Submit"})," component can be used to add a button which will submit the form.  See the"," ",e(x,{to:"/components/form/validation",text:"validation page"})," for information on how the form data is validated and the"," ",e(pe,{})," component for details on how validation errors are displayed and can be customised."]}),e(r,{Element:io,code:ao,caption:"Submit",expand:!0,children:e("p",{children:"Try entering some text in the fields below then click on the Submit button."})}),e("h2",{children:"Properties"}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(r,{Element:so,code:co,caption:"Properties",expand:!0}),e("h2",{children:"onSubmit"}),t("p",{children:["You can use the ",e("code",{children:"onSubmit"})," form property to handle the submission."]}),e(r,{Element:uo,code:mo,caption:"onSubmit",expand:!0})]}),po=`import { Form, Field, Reset } from '../../../../../lib/index.js'

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

export default ResetExample`,fo=()=>t(n,{values:{three:"The third field"},children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two with default value",default:"Badger"}),e(l,{name:"three",label:"Field three with pre-defined form value"}),e(L,{})]}),bo=()=>t(n,{children:[e(l,{name:"one",label:"Field one"}),e(L,{className:"btn-brown",text:"Reset the form"})]}),Fo=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const Properties = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Reset className="btn-brown" text="Reset the form"/>
  </Form>

export default Properties`,xo=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const OnReset = () =>
  <Form onReset={() => alert('form has been reset')}>
    <Field name="field1" label="Field One"/>
    <Reset/>
  </Form>

export default OnReset`,Eo=()=>t(n,{onReset:()=>alert("form has been reset"),children:[e(l,{name:"field1",label:"Field One"}),e(L,{})]}),go=()=>t("div",{children:[e("h1",{children:"Reset"}),t("p",{children:["The ",e("code",{children:"Reset"})," component can be used to add a reset button which will reset the form to its initial state.  Any"," ",e("code",{children:"values"})," defined on the ",e(u,{})," will be restored. Any fields that have a ",e("code",{children:"default"})," value will be reset to that value."]}),e(r,{Element:fo,code:po,caption:"Reset",expand:!0,children:e("p",{children:"Try entering some text in the fields below then click on the Reset button.  You should see the fields reset to their original state."})}),e("h2",{children:"Properties"}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(r,{Element:bo,code:Fo,caption:"Properties",expand:!0}),e("h2",{children:"onReset"}),t("p",{children:["You can use the ",e("code",{children:"onReset"})," property to register a function that should be called when the form is reset."]}),e(r,{Element:Eo,code:xo,caption:"onReset",expand:!0})]}),So=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e($,{})]}),wo=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Cancel } from '@abw/react-formula'

const CancelExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Cancel/>
  </Form>

export default CancelExample`,vo=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e($,{text:"Go Back",className:"btn-brown",onClick:()=>alert("Cancel button was clicked")})]}),yo=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

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

export default CancelExample`,To=()=>t("div",{children:[e("h1",{children:"Cancel"}),t("p",{children:["The ",e("code",{children:"Cancel"})," component can be used to add a Cancel button. This doesn't do anything to the form but it's common to provide a button in a form to allow a user to cancel an edit or go back."]}),e(r,{Element:So,code:wo,caption:"Cancel",expand:!0,children:t("p",{children:["Don't be surprised that the Cancel button doesn't do anything in this example.  We need to add an ",e("code",{children:"onClick"})," handler to make it useful. See the next example."]})}),t("p",{children:["The ",e("code",{children:"text"})," property will set the text for the button. The ",e("code",{children:"className"})," property can be used to add a CSS class.  The ",e("code",{children:"onClick"})," property should be used to define a handler to do something when the button is clicked."]}),e(r,{Element:vo,code:yo,caption:"Properties",expand:!0})]}),Ro=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(M,{})]}),Co=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelSubmit/>
  </Form>

export default CancelSubmitExample`,ko=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(M,{className:"flex evenly",submit:{text:"Submit the Form",className:"wide btn-green"},cancel:{text:"Go Back",className:"wide btn-lilac",onClick:()=>alert("You went back")}})]}),Oo=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

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

export default CancelSubmitExample`,Lo=()=>t("div",{children:[e("h1",{children:"CancelSubmit"}),t("p",{children:["The ",e("code",{children:"CancelSubmit"})," component can be used to add both"," ",e(R,{})," and ",e(g,{})," controls."]}),e(r,{Element:Ro,code:Co,caption:"CancelSubmit",expand:!0}),t("p",{children:["You can define properties for the ",e(R,{})," component using the ",e("code",{children:"cancel"})," property, and for the ",e(g,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(r,{Element:ko,code:Oo,caption:"Properties",expand:!0})]}),qo=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(U,{})]}),Ao=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit/>
  </Form>

export default CancelResetSubmitExample`,No=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(U,{submit:{text:"Submit the Form",className:"btn-green"},reset:{text:"Reset the Form",className:"btn-brown"},cancel:{text:"Go Back",onClick:()=>alert("You went back")}})]}),Vo=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

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

export default CancelResetSubmitExample`,Po=()=>t("div",{children:[e("h1",{children:"CancelResetSubmit"}),t("p",{children:["The ",e("code",{children:"CancelResetSubmit"})," component can be used to add all three ",e(R,{}),", ",e(C,{})," and ",e(g,{})," controls in one fell swoop."]}),e(r,{Element:qo,code:Ao,caption:"CancelResetSubmit",expand:!0}),t("p",{children:["You can define properties for the ",e(R,{})," component using the ",e("code",{children:"cancel"})," property, for the ",e(C,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(g,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(r,{Element:No,code:Vo,caption:"Properties",expand:!0})]}),Do=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(q,{})]}),jo=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <ResetSubmit/>
  </Form>

export default ResetSubmitExample`,Yo=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(q,{reset:{text:"Reset the Form",className:"btn-brown"},submit:{text:"Submit the Form",className:"btn-blue"}})]}),Bo=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

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

export default ResetSubmitExample`,Io=()=>t("div",{children:[e("h1",{children:"ResetSubmit"}),t("p",{children:["The ",e("code",{children:"ResetSubmit"})," component can be used to add both"," ",e(C,{})," and ",e(g,{})," controls."]}),e(r,{Element:Do,code:jo,caption:"ResetSubmit",expand:!0}),t("p",{children:["You can define properties for the ",e(C,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(g,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(r,{Element:Yo,code:Bo,caption:"Properties",expand:!0})]}),$o=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",value:"Hello World!"}),e(fe,{children:e(q,{})})]}),Mo=`import { Form, Field, Changed, ResetSubmit } from '../../../../lib/index.js'

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

export default ChangedExample`,Uo=()=>t("div",{children:[e("h1",{children:"Changed"}),t("p",{children:["The ",e("code",{children:"Changed"})," component will only render its child components when the form state has changed."]}),e("p",{children:'A typical example is shown below.  The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field.'}),e(r,{Element:$o,code:Mo,caption:"Changed",expand:!0,children:t("p",{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})})]}),Ho=()=>t(n,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(h,{})]}),Go=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default RequiredExample`,Wo=()=>t(n,{showRequired:!0,errorsInHeader:!1,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(be,{}),e(h,{})]}),Ko=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

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

export default ErrorsExample`,Jo=()=>e(n,{children:e(zo,{})}),zo=()=>{const{setInvalidState:o}=y(),a=(E,f)=>{E.preventDefault(),o({error:f})};return t(b,{children:[e("button",{onClick:E=>a(E,"An error string"),children:"Error String"}),e("button",{onClick:E=>a(E,{message:"An error object"}),children:"Error Object"}),e("button",{onClick:E=>a(E,{label:"Example",message:"An error object"}),children:"Labelled Error"})]})},Xo=`import { Form, useForm } from '../../../../../lib/index.js'

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

export default Error`,Zo=()=>e(n,{children:e(_o,{})}),_o=()=>{const{setInvalidState:o}=y(),a=(f,W)=>{f.preventDefault(),o({errors:W})};return t(b,{children:[e("button",{onClick:f=>a(f,["A single error in errors"]),children:"Error String"}),e("button",{onClick:f=>a(f,["An error string","Another error string"]),children:"Error Strings"}),e("button",{onClick:f=>a(f,[{message:"An error object"},{message:"Another error object"}]),children:"Error Objects"}),e("button",{onClick:f=>a(f,[{label:"Example1",message:"An error object"},{label:"Example2",message:"Another error object"}]),children:"Labelled Errors"})]})},Qo=`import { Form, useForm } from '../../../../../lib/index.js'

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

export default Errors`,er=()=>t("div",{children:[e("h1",{children:"Errors"}),e("p",{children:"By default, validation errors will be displayed in the form header."}),e(r,{Element:Ho,code:Go,caption:"Required Fields",expand:!0,children:e("p",{children:"Try submitting the form below without entering anything for either of the first two fields."})}),e("h2",{children:"errorsInHeader"}),t("p",{children:["If you don't want errors displayed in the header you can set the"," ",e("code",{children:"errorsInHeader"})," form property to ",e("code",{children:"false"}),".  You can use the ",e("code",{children:"Errors"})," component to display them somewhere else inside the form."]}),e(r,{Element:Wo,code:Ko,caption:"Errors",expand:!0}),e("h2",{children:"error"}),t("p",{children:["The ",e(u,{})," context can include a single ",e("code",{children:"error"})," or an array of ",e("code",{children:"errors"}),`.  The first case is typically used when there's an error that doesn't relate to a specific field, e.g. "Invalid username or password".  The latter case is used when there are multiple errors, e.g. for different fields.`]}),t("p",{children:["Just to complicate matters, both ",e("code",{children:"error"})," and the elements in ",e("code",{children:"errors"})," can be either strings or objects containing a"," ",e("code",{children:"message"})," and other information about what field the error message relates to, including the field ",e("code",{children:"name"})," and"," ",e("code",{children:"label"}),"."]}),t("p",{children:["The ",e("code",{children:"Errors"})," component handles all these cases.  There are also some additional properties that you can set on the ",e(u,{})," to configure what gets displayed.  The ",e("code",{children:"errorsTitle"}),' can be defined as a function which takes the number of errors and returns an appropriate title.  The default function returns "Form Submission Error" if there is one error or "Form Submission Errors" if there are more than one.  The ',e("code",{children:"errorsPrompt"})," can also be defined to prompt the user to fix any ",e("code",{children:"errors"}),".  This also takes the number of ",e("code",{children:"errors"}),'.  The default function returns "Please correct this problem and re-submit:" or "Please correct these problems and re-submit:", depending on the number of errors.']}),t("p",{children:["This example includes some buttons that set the ",e("code",{children:"error"})," ","in the ",e(u,{})," to demonstrate the different combinations."]}),e(r,{Element:Jo,code:Xo,caption:"error"}),e("h2",{children:"errors"}),t("p",{children:["This example does a similar thing but sets multiple ",e("code",{children:"errors"}),"."]}),e(r,{Element:Zo,code:Qo,caption:"error"}),t("p",{children:["You can always implement your own component for displaying errors if you don't like the way this works.  Just be warned that there are the various different possibilities that need to be accounted for. You can use the ",e("code",{children:"useForm"})," function to get access to the form context which contains the ",e("code",{children:"error"})," and/or ",e("code",{children:"errors"}),"."]}),t("p",{children:["See the implementations of the"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Errors.jsx",children:"Errors"})," ","and"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Error.jsx",children:"Error"})," ","modules for a starting point."]})]}),tr=`import { Form, Field, Debug } from '../../../../../lib/index.js'

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

export default DebugForm`,lr=()=>t(n,{children:[e(l,{name:"message",label:"Message"}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"]}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions"}),e(S,{})]}),or=`import { Form, Field, Debug } from '../../../../../lib/index.js'

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

export default Show`,rr=()=>t(n,{children:[e(l,{name:"message",label:"Message"}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"]}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions"}),e(S,{show:{values:!0,status:!0,config:!0}})]}),nr=`import { Form, Field, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const ShowAll = () =>
  <Form>
    <Field name="message" label="Message"/>
    <Debug showAll/>
  </Form>

export default ShowAll`,ir=()=>t(n,{children:[e(l,{name:"message",label:"Message"}),e(S,{showAll:!0})]}),ar=()=>t("div",{children:[e("h1",{children:"Debug"}),t("p",{children:["The ",e("code",{children:"Debug"})," component can be used in development to debug your form.  By default it displays only the form values."]}),e(r,{Element:lr,code:tr,caption:"Debug",children:e("p",{children:"Try updating the form values and see how the debugging data changes."})}),e("h2",{children:"show"}),t("p",{children:["The ",e("code",{children:"show"})," option can used to configure what data the debug panel displays.  It should be an object containing any of"," ",e("code",{children:"values"}),", ",e("code",{children:"config"}),", ",e("code",{children:"status"})," or"," ",e("code",{children:"fields"})," which should be set to ",e("code",{children:"true"})," to enable display."]}),e(r,{Element:rr,code:or,caption:"show"}),e("h2",{children:"showAll"}),t("p",{children:["The ",e("code",{children:"showAll"})," option is a shortcut to showing all form data."]}),e(r,{Element:ir,code:nr,caption:"showAll",expand:!0})]}),dr=()=>e(n,{children:t(l,{name:"field1",label:"Field One",help:"A help message",children:[o=>`Something before ${o.label}`,e(A,{}),o=>`Something after ${o.label}`]})}),sr=`import { Form, Field, Layout } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout } from '@abw/react-formula'

const LayoutExample = () =>
  <Form>
    <Field name="field1" label="Field One" help="A help message">
      { field => \`Something before \${field.label}\`}
      <Layout/>
      { field => \`Something after \${field.label}\`}
    </Field>
  </Form>

export default LayoutExample`,cr=()=>e(n,{children:e(l,{name:"field1",label:"Field One",help:"A help message",children:t(A,{children:[e(N,{}),"Hello...",e(V,{}),"...World!",e(H,{})]})})}),mr=`import { Form, Field, Layout, Label, Text, Message } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout, Label, Text, Message } from '@abw/react-formula'

const LayoutExample = () =>
  <Form>
    <Field name="field1" label="Field One" help="A help message">
      <Layout>
        <Label/>
        Hello...
        <Text/>
        ...World!
        <Message/>
      </Layout>
    </Field>
  </Form>

export default LayoutExample`,ur=()=>t("div",{children:[e("h1",{children:"Layout"}),t("p",{children:["The ",e("code",{children:"Layout"})," component provides the default content for a"," ",e(m,{}),".  It renders a ",e("code",{children:"div"})," with the ",e("code",{children:"field"})," ","CSS class and any other classes relevant to the state of the field (e.g. ",e("code",{children:"focus"}),", ",e("code",{children:"valid"})," and/or ",e("code",{children:"invalid"}),")."]}),t("p",{children:["If you're defining your own field content and want to include all the usual elements then you can manually include it in a ",e(m,{}),"."]}),e(r,{Element:dr,code:sr,caption:"Layout",expand:!0}),t("p",{children:["The ",e("code",{children:"Layout"})," component renders a ",e(Fe,{}),", one of the relevant ",e(x,{to:"/inputs",text:"input type components"})," based on the ",e(xe,{})," of the field, and the ",e(Ee,{})," component."]}),t("p",{children:["You can manually include these inside a ",e(m,{})," and intersperse them with your own content."]}),e(r,{Element:cr,code:mr,caption:"Layout Content",expand:!0})]}),hr=()=>e(n,{children:e(l,{name:"field1",label:"Field One",children:t("div",{className:"field",children:[e(N,{}),e(V,{})]})})}),pr=`import { Form, Field, Text, Label } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Text, Label } from '@abw/react-formula'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Field One">
      <div className="field">
        <Label/>
        <Text/>
      </div>
    </Field>
  </Form>

export default LabelExample`,fr=()=>t("div",{children:[e("h1",{children:"Label"}),t("p",{children:["The ",e("code",{children:"Label"})," component can be used to add a label to a"," ",e(m,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),e(r,{Element:hr,code:pr,caption:"Label",expand:!0})]}),br=()=>t(n,{children:[e(l,{name:"field1",label:"Field One",help:"Additional help message",validMessage:"This is fine!",requiredMessage:"You must enter a value",required:!0,children:t(A,{children:[e(N,{}),e(V,{}),e(H,{})]})}),e(h,{})]}),Fr=`import { Form, Field, Layout, Label, Text, Message, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout, Label, Text, Message, Submit } from '@abw/react-formula'

const MessageExample = () =>
  <Form>
    <Field
      name="field1" label="Field One"
      help="Additional help message"
      validMessage="This is fine!"
      requiredMessage="You must enter a value"
      required
    >
      <Layout>
        <Label/>
        <Text/>
        <Message/>
      </Layout>
    </Field>
    <Submit/>
  </Form>

export default MessageExample`,xr=()=>t("div",{children:[e("h1",{children:"Message"}),t("p",{children:["The ",e("code",{children:"Message"})," component is used to add a message underneath a ",e(m,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),t("p",{children:["If you have defined ",e("code",{children:"help"})," for your field then it will be displayed here.  If the field fails to validate then the validation error message will be displayed.  In this example we're setting an explicit ",e("code",{children:"requiredMessage"})," to override the default message. We're also setting a ",e("code",{children:"validMessage"})," to provide a custom message if the field is valid."]}),e(r,{Element:br,code:Fr,caption:"Message",expand:!0})]}),vr=()=>t(O,{children:[e(i,{path:"",end:!0,element:e(Se,{})}),e(i,{path:"Form/*",element:e(Xe,{})}),e(i,{path:"Field/*",element:e(zl,{})}),e(i,{path:"Fields",element:e(Ql,{})}),e(i,{path:"Fieldset",element:e(no,{})}),e(i,{path:"Submit",element:e(ho,{})}),e(i,{path:"Reset",element:e(go,{})}),e(i,{path:"Cancel",element:e(To,{})}),e(i,{path:"CancelSubmit",element:e(Lo,{})}),e(i,{path:"ResetSubmit",element:e(Io,{})}),e(i,{path:"CancelResetSubmit",element:e(Po,{})}),e(i,{path:"Changed",element:e(Uo,{})}),e(i,{path:"Errors",element:e(er,{})}),e(i,{path:"Debug",element:e(ar,{})}),e(i,{path:"Layout",element:e(ur,{})}),e(i,{path:"Label",element:e(fr,{})}),e(i,{path:"Message",element:e(xr,{})})]});export{vr as default};
