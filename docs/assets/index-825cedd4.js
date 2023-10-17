import{a as e,a1 as X,j as t,T as H,a2 as Z,a3 as x,F as i,c as l,S as h,a4 as ee,a5 as te,a6 as le,e as s,N as re,E as o,D as V,a7 as W,a8 as oe,r as p,p as f,a9 as C,d as u,$ as j,a0 as n,aa as ie,H as y,K as _,i as T,R as F,Z as I,ab as ne,C as ae,x as de,y as se,ac as ce,L as N,X as P,ad as me,ae as ue,k as he,af as pe,B as fe,l as be,ag as Fe,A as xe,m as S,M as Se,w as K,o as ge,u as Ee,ah as B,ai as J,aj as k,ak as q,f as w,al as O,am as A,G as g,an as we,t as ye,Q as Y,U as $,W as z,Y as Te,h as ve,_ as Re,ao as Ce}from"./index-2e4de7a5.js";import{S as v,c as R}from"./index.esm-4fce6895.js";const Ne=({children:r})=>e(X,{children:r}),ke=()=>t("div",{children:[e("h1",{children:"Components"}),e("p",{className:"intro",children:"This section of the documentation provides detailed information about each of the components."}),e(H,{menu:Z})]}),Oe=()=>t("div",{children:[e("h1",{children:"Form"}),t("p",{children:["The ",e("code",{children:"Form"})," component is used to render a form. Inside the form you will typically have one or more"," ",e(x,{to:"/field",children:e("code",{children:"Field"})})," components to render the fields and a ",e(x,{to:"/form/submit",children:e("code",{children:"Submit"})})," ","component to add a submit button."]}),t("ul",{className:"menu",children:[e("li",{children:e(x,{to:"./properties",text:"Form properties"})}),t("li",{children:[e(x,{to:"./reset",children:e("code",{children:"Reset"})})," component to reset the form"]}),t("li",{children:[e(x,{to:"./submit",children:e("code",{children:"Submit"})})," component to submit the form"]}),t("li",{children:[t(x,{to:"./controls",children:["Controls combining ",e("code",{children:"Submit"})]})," component to submit the form"]})]})]}),qe=()=>t(i,{fields:{name:{label:"Your name",required:!0},email:{label:"Your email address",required:!0}},children:[e(l,{name:"name"}),e(l,{name:"email"}),e(h,{})]}),Ae=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const FieldsExample = () => {
  const fields = {
    name: {
      label: 'Your name',
      required: true
    },
    email: {
      label: 'Your email address',
      required: true
    }
  }

  return (
    <Form fields={fields}>
      <Field name="name"/>
      <Field name="email"/>
      <Submit/>
    </Form>
  )
}

export default FieldsExample`,Le=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const FieldsExample = () =>
  <Form>
    <Field name="name" label="Your name" required/>
    <Field name="email" label="Your email address" required/>
    <Submit/>
  </Form>

export default FieldsExample`,c=({links:r})=>t("div",{className:"see-also",children:[e("h2",{children:"See Also"}),e("ul",{className:"menu",children:r.map(a=>e(De,{to:a},a))})]}),De=({to:r})=>{const a=ee[r]||te(`Invalid SeeAlso link: ${r}`),{about:d}=a;return t("li",{children:[e(le,{to:r}),!!d&&e("span",{className:"about",children:d})]})},Pe=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"fields"})}),t("p",{children:["The ",e("code",{children:"fields"})," property allows you to define properties for form fields externally.  The ",e(s,{})," ",e(re,{})," property is used to associate a field to its definition."]}),e(o,{Element:qe,code:Ae,caption:"fields",expand:!0}),t("p",{children:["This is the same as defining the properties on the ",e(s,{})," components."]}),e(V,{code:W(Le),caption:"Inline Field",expand:!0}),t("p",{children:["The ",e("code",{children:"fields"})," definition can contain any number of fields, including those that aren't used by any particular form.  Only the fields that are referenced by a ",e(s,{})," component will be considered part of the form."]}),e("p",{children:"Although it requires a little more work to define fields externally, there are a number of benefits.  The first is that you're separating the field definition from the presentational markup.  When a form gets more complex it's usually easier to have them separated, particularly if you have more complicated validation functions attached to the fields."}),t("p",{children:["Another benefit is that you can share field definitions across multiple forms.  For example, you might want to define a single set of field definitions for all forms relating to user authentication: login, registration, password reset, and so on.  The ",e("code",{children:"email"})," ","field will be the same for each, so it makes sense to define it in one place."]}),e(c,{links:[]})]}),Ve=()=>t(i,{values:{name:"Bobby Badger",email:"bobby@badgerpower.com"},children:[e(l,{name:"name",label:"Name"}),e(l,{name:"email",label:"Email Address"}),e(h,{})]}),je=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const ValuesExample = () => {
  const values = {
    name: 'Bobby Badger',
    email: 'bobby@badgerpower.com'
  }

  return (
    <Form values={values}>
      <Field name="name" label="Name"/>
      <Field name="email" label="Email Address"/>
      <Submit/>
    </Form>
  )
}

export default ValuesExample`,Be=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"values"})}),t("p",{children:["The ",e("code",{children:"values"})," property can be used to pre-define values for fields in the form.  This is typically used when editing existing data records."]}),e(o,{Element:Ve,code:je,caption:"fields",expand:!0}),e(c,{links:["form:hidden"]})]}),Ye=()=>t(i,{values:{name:"Bobby Badger",email:"bobby@badgerpower.com"},hidden:{user_id:12345},children:[e(l,{name:"name",label:"Name"}),e(l,{name:"email",label:"Email Address"}),e(h,{})]}),$e=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () => {
  const hidden = {
    user_id: 12345
  }
  const user = {
    name: 'Bobby Badger',
    email: 'bobby@badgerpower.com'
  }

  return (
    <Form values={user} hidden={hidden}>
      <Field name="name" label="Name"/>
      <Field name="email" label="Email Address"/>
      <Submit/>
    </Form>
  )
}

export default HiddenExample`,Ie=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"hidden"})}),t("p",{children:["The ",e("code",{children:"hidden"})," property can be used to define hidden values for the form.  This is typically used to include identifiers when editing existing data records."]}),t("p",{children:["Any ",e("code",{children:"hidden"})," fields and their values will be included in the submitted data."]}),e(o,{Element:Ye,code:$e,caption:"hidden",expand:!0}),e(c,{links:["form:values"]})]});const Me=()=>t(i,{classes:{required:"required red-bg"},showRequired:!0,children:[e(l,{name:"name",label:"Name",required:!0}),e(l,{name:"email",label:"Email Address"}),e(h,{})]}),Ge=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'
import './my-form-styles.css'

const ClassesExample = () => {
  const classes = {
    required: 'required red-bg'
  }

  return (
    <Form classes={classes} showRequired>
      <Field name="name" label="Name" required/>
      <Field name="email" label="Email Address"/>
      <Submit/>
    </Form>
  )
}

export default ClassesExample`,Ue=`.red-bg {
  color: white !important;
  background-color: #c44 !important;
  border-color: black !important;
}`,He=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"classes"})}),t("p",{children:["The ",e("code",{children:"classes"})," property can be used to change the"," ",e(oe,{})," used for different elements in a form."]}),e(o,{Element:Me,code:Ge,caption:"classes",expand:!0}),t("p",{children:["This is typically used in conjunction with your own custom stylesheet. For example, the ",e("code",{children:"red-bg"})," CSS class might be defined like this."]}),e(V,{code:Ue,language:"css",caption:"Custom Stylesheet",expand:!0}),t("p",{children:["Note the use of the ",e("code",{children:"!important"})," modifier to increase the specificity of the rule in this example.  The alternative would be to fully qualify it, e.g as ",e("code",{children:".formula .field label .red-bg"}),"."]}),e(c,{links:["styling:css-classes"]})]}),We=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:"THIS IS TODO"}),t("pre",{children:["className:         FORMULA",e("br",{}),"errorsInHeader:    true",e("br",{}),"errorsInFooter:    false,",e("br",{}),"enctype:           application/x-www-form-urlencoded",e("br",{}),"method:            post",e("br",{}),"headerClass:       header",e("br",{}),"bodyClass:         body",e("br",{}),"footerClass:       footer",e("br",{}),"errorsClass:       errors",e("br",{}),"errorsTitle:       n => `Form Submission Error... errorPrompt:       Please correct this problem and re-submit:",e("br",{}),"errorsPrompt:      n => `Please correct these... submittingClass:   SUBMITTING,",e("br",{}),"validatingClass:   VALIDATING",e("br",{})]})]}),_e=`import { Form, Field } from '../../../../../lib/index.js'

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
          type="checkbox" text="One Louder"
        />
        <Field
          name="field4" label="Field Four"
          type="select" options={['Nigel', 'David', 'Derek']}
        />
        <Field
          name="field5" label="Field Five"
          type="radio" default='Keyboards'
          className="inline"
          options={['Vocals', 'Guitar', 'Bass', 'Keyboards', 'Drums']}
        />
      </Form>
      <div className="formula">
        <button onClick={() => form?.setFocus('field1')}>
          Focus One
        </button>
        <button onClick={() => form?.setFocus('field2')}>
          Focus Two
        </button>
        <button onClick={() => form?.setFocus('field3')}>
          Focus Three
        </button>
        <button onClick={() => form?.setFocus('field4')}>
          Focus Four
        </button>
        <button onClick={() => form?.setFocus('field5')}>
          Focus Five
        </button>
      </div>
    </>
  )
}

export default SetFocusExample`,Ke=()=>{const[r,a]=p.useState(!1);return t(f,{children:[t(i,{onLoad:a,children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",type:"textarea"}),e(l,{name:"field3",label:"Field Three",type:"checkbox",text:"One Louder"}),e(l,{name:"field4",label:"Field Four",type:"select",options:["Nigel","David","Derek"]}),e(l,{name:"field5",label:"Field Five",type:"radio",default:"Keyboards",className:"inline",options:["Vocals","Guitar","Bass","Keyboards","Drums"]})]}),t("div",{className:"formula",children:[e("button",{onClick:()=>r==null?void 0:r.setFocus("field1"),children:"Focus One"}),e("button",{onClick:()=>r==null?void 0:r.setFocus("field2"),children:"Focus Two"}),e("button",{onClick:()=>r==null?void 0:r.setFocus("field3"),children:"Focus Three"}),e("button",{onClick:()=>r==null?void 0:r.setFocus("field4"),children:"Focus Four"}),e("button",{onClick:()=>r==null?void 0:r.setFocus("field5"),children:"Focus Five"})]})]})},Je=`import { Form, Field, useForm } from '../../../../../lib/index.js'

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
      onClick={ e => { e.preventDefault(); setFocus(name) } }
    >
      {caption}
    </button>
  )
}

export default UseFormFocus`,ze=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two"}),e(M,{name:"field1",caption:"Focus Field One"}),e(M,{name:"field2",caption:"Focus Field Two"})]}),M=({name:r,caption:a})=>{const{setFocus:d}=C();return e("button",{onClick:m=>{m.preventDefault(),d(r)},children:a})},Qe=`import { useForm } from '../../../../../lib/index.js'

{/* START */}
import React  from 'react'
// PRETEND: import { useForm } from '@abw/react-formula'

const FieldFocusButton = ({name, caption}) => {
  const { setFocus } = useForm()
  return (
    <button onClick={ e => setFocus(name, e) }>
      {caption}
    </button>
  )
}

export default FieldFocusButton`,Xe=()=>t("div",{children:[e("h1",{children:"Focus Fields"}),e("h2",{children:e("code",{children:"setFocus()"})}),t("p",{children:["You can programmatically set the focus on a ",e(s,{})," by calling the ",e("code",{children:"setFocus()"})," method on the ",e(u,{}),", passing the name of the field that you want to focus as an argument."]}),t("p",{children:["You can capture a reference to the form using the ",e("code",{children:"onLoad"})," ","property to set a state variable, as shown in this example."]}),e(o,{Element:Ke,code:_e,caption:"onLoad() and setFocus()",children:e("p",{children:"Click on one of the buttons to focus on a field."})}),t("p",{children:["If the buttons (or other controls) that you want to use to focus the fields are contained within the ",e(u,{})," then you can call the ",e("code",{children:"useForm()"})," function to gain access to the form context."]}),e(o,{Element:ze,code:Je,caption:"useForm() and setFocus()"}),t("p",{children:["Be careful to make sure that your buttons call"," ",e("code",{children:"e.preventDefault()"})," on the event, as shown in the example above, otherwise the form may be submitted.  Alternately you can pass the event to the ",e("code",{children:"setFocus()"})," method as the second argument and it will do it for you, as shown below."]}),e(V,{code:W(Qe),expand:!0})]}),Ze=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(h,{})]}),et=`import { Form, Field, Submit } from '../../../../../../lib/index.js'

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

export default SubmitExample`,tt=()=>t("div",{children:[e("h1",{children:"Validation"}),e("p",{children:"Validation can be applied on two levels: on individual fields and/or on the form."}),t("p",{children:["You can specify a field is ",e("code",{children:"required"}),", as shown here, or define your own custom ",e(x,{to:"/components/field/validation",text:"field validation"})," functions. When the form is submitted, each field will be validated.  If any validation errors occur then the form submission will be cancelled and the errors displayed."]}),e(o,{Element:Ze,code:et,caption:"Required Fields",expand:!0,children:e("p",{children:"Try entering some text in the fields below then click on the Submit button.  The first two fields are required so you can leave either of the them empty to see the validation errors."})}),t("p",{children:["You can also define a ",e("code",{children:"validate"})," function on the ",e(u,{}),". This will be run after any field validation and will be passed"]})]}),lt=()=>{const[r,a]=p.useState();return t(i,{onSubmit:d=>a(`foo was submitted as ${d.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(h,{}),r]})},rt=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnSubmitExample`,ot=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onSubmit"})}),e("p",{children:"TODO"}),e(o,{Element:lt,code:rt,caption:"onSubmit",expand:!0,children:e("p",{children:"TODO"})}),e(c,{links:["form:onSuccess","form:onError"]})]}),it=()=>{const[r,a]=p.useState();return t(i,{onSubmit:d=>a(`foo was submitted as ${d.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(h,{}),r]})},nt=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnSuccessExample`,at=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onSuccess"})}),e("p",{children:"TODO"}),e(o,{Element:it,code:nt,caption:"onSuccess",expand:!0,children:e("p",{children:"TODO"})}),e(c,{links:["form:onSubmit","form:onError"]})]}),dt=()=>{const[r,a]=p.useState();return t(i,{onSubmit:d=>a(`foo was submitted as ${d.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(h,{}),r]})},st=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnErrorExample`,ct=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onError"})}),e("p",{children:"TODO"}),e(o,{Element:dt,code:st,caption:"onError",expand:!0,children:e("p",{children:"TODO"})}),e(c,{links:["form:onSubmit","form:onError"]})]}),mt=`import { Form, Field } from '../../../../../../lib/index.js'

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

export default SetValues`,ut=()=>{const[r,a]=p.useState(),d=(m,D)=>r==null?void 0:r.setValues({color:m,animal:D});return t(f,{children:[t(i,{onLoad:a,children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"})]}),e("button",{onClick:()=>d("Grey","Elephant"),children:"Grey Elephant"}),e("button",{onClick:()=>d("Red","Fox"),children:"Red Fox"})]})},ht=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

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

export default UseSetValues`,pt=()=>e(f,{children:t(i,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),e(G,{color:"Grey",animal:"Elephant"}),e(G,{color:"Red",animal:"Fox"})]})}),G=({color:r,animal:a})=>{const{setValues:d}=C();return t("button",{onClick:m=>{m.preventDefault(),d({color:r,animal:a},m)},children:[r," ",a]})},ft=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

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

export default UseSetValues`,bt=()=>e(f,{children:t(i,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),e(U,{color:"Grey",animal:"Elephant"}),e(U,{color:"Red",animal:"Fox"})]})}),U=({color:r,animal:a})=>{const{setValues:d}=C();return t("button",{onClick:m=>d({color:r,animal:a},m),children:[r," ",a]})},Ft=()=>t("div",{children:[e("h1",{children:"Setting Form Values"}),e("h2",{children:"setValues()"}),t("p",{children:["The ",e("code",{children:"setValues"})," function can be used to programmatically set form values.  You can use the ",e("code",{children:"onLoad"})," handler to save a reference to the form context as show in this example."]}),e(o,{Element:ut,code:mt,caption:"setValues",children:e("p",{children:"Click on one of the buttons to update the form values."})}),t("p",{children:["If you want to set the values from a component placed inside the"," ",e("code",{children:"Form"})," component then you can use ",e("code",{children:"useForm()"})," to get access to the form context."]}),e(o,{Element:pt,code:ht,caption:"setValues"}),t("p",{children:["If you're using a ",e("code",{children:"button"})," to trigger the call to"," ",e("code",{children:"setValues()"}),", as shown in the example above, then you need to make sure you call ",e("code",{children:"e.preventDefault()"})," event.  Otherwise the form may be submitted. Alternately you can pass the event as the second argument to the ",e("code",{children:"setValues()"})," method as shown below and it will do it for you."]}),e(o,{Element:bt,code:ft,caption:"setValues"})]}),xt=()=>t(j,{children:[e(n,{path:"",end:!0,element:e(Oe,{})}),e(n,{path:"fields",element:e(Pe,{})}),e(n,{path:"values",element:e(Be,{})}),e(n,{path:"hidden",element:e(Ie,{})}),e(n,{path:"classes",element:e(He,{})}),e(n,{path:"properties",element:e(We,{})}),e(n,{path:"setfocus",element:e(Xe,{})}),e(n,{path:"validation",element:e(tt,{})}),e(n,{path:"onSubmit",element:e(ot,{})}),e(n,{path:"onSuccess",element:e(at,{})}),e(n,{path:"onError",element:e(ct,{})}),e(n,{path:"set/*",element:e(Ft,{})})]}),St=`import { Form, Field } from '../../../../lib/index.js'

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

export default FieldExample`,gt=()=>e(i,{children:e(l,{name:"example",label:"An Example Field",type:"text",required:!0})}),Et=()=>t(f,{children:[e("h1",{children:"Field Component"}),t("p",{className:"intro",children:["The ",e("code",{children:"Field"})," component is used to render a field inside a ",e(u,{}),"."]}),e(o,{Element:gt,code:St,caption:"Field",expand:!0}),e(H,{menu:ie})]}),wt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:"THIS IS TODO"})]}),yt=`import { Form, Field, Debug, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit, Debug } from '@abw/react-formula'

const NameExample = () =>
  <Form>
    <Field name="field1"/>
    <Submit/>
    <Debug/>
  </Form>

export default NameExample`,Tt=()=>t(i,{children:[e(l,{name:"field1"}),e(h,{}),e(y,{})]}),vt=`import { Form, Field, Debug, Submit } from '../../../../../lib/index.js'

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

export default FormFieldsExample`,Rt={field1:{label:"This is field one",required:!0}},Ct=()=>t(i,{fields:Rt,children:[e(l,{name:"field1"}),e(h,{}),e(y,{})]}),Nt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"name"})}),t("p",{children:["The ",e("code",{children:"name"})," is the only required property for a ",e(s,{}),". It is used as the key to set the ",e(u,{})," value."]}),e(o,{Element:Tt,code:yt,caption:"name",expand:!0,children:t("p",{children:["Enter some text in the input field.  The ",e(_,{}),` component is included in this example to show the form data as it's being set.  Click on the "Submit" button and you'll see an alert showing the data that would be submitted.`]})}),t("p",{children:["You can set the ",e(T,{})," property on the ",e(u,{})," as an object containing additional properties for each field.  The"," ",e("code",{children:"name"})," is used as the key to fetch those properties. Any properties explicitly set on the ",e(s,{})," will override them."]}),e(o,{Element:Ct,code:vt,caption:"Form fields",expand:!0,children:t("p",{children:["Note how the ",e(s,{})," has now got a ",e("code",{children:"label"})," and the"," ",e(F,{})," property is set."]})}),e(c,{links:["field:label","form:fields"]})]}),kt=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Hello World!"/>
  </Form>

export default LabelExample`,Ot=()=>e(i,{children:e(l,{name:"field1",label:"Hello World!"})}),qt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default FormFieldsExample`,At={field1:{label:"This is field one"},field2:{label:"This is field two"}},Lt=()=>t(i,{fields:At,children:[e(l,{name:"field1"}),e(l,{name:"field2",label:"A different label"})]}),Dt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"label"})}),t("p",{children:["Add a label to the field with the ",e("code",{children:"label"})," property."]}),e(o,{Element:Ot,code:kt,caption:"name",expand:!0}),t("p",{children:["Like all other field properties, they can be defined via ",e(T,{})," ","on the ",e(u,{}),".  If you explicitly set a ",e("code",{children:"label"})," on the"," ",e(s,{})," then it will take precedence."]}),e(o,{Element:Lt,code:qt,caption:"Form fields",expand:!0,children:t("p",{children:["Note how the first field has the ",e("code",{children:"label"})," defined in the"," ",e(T,{})," but the second defines its own ",e("code",{children:"label"})," ","which is used instead of the one defined in the ",e(T,{}),"."]})}),e(c,{links:["field:name","form:fields"]})]}),Pt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default TypeExample`,Vt=()=>t(i,{children:[e(l,{name:"field1",label:"Text Field"}),e(l,{name:"field2",type:"textarea",label:"TextArea Field"}),e(l,{name:"field3",type:"number",label:"Number Field"}),e(l,{name:"field4",type:"checkbox",label:"Checkbox Field",text:"Yes"})]}),jt=`import { Form, Field, Debug } from '../../../../../lib/index.js'

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

export default FormFieldsExample`,Bt={field1:{label:"Text Field"},field2:{label:"TextArea Field",type:"textarea"},field3:{label:"Number Field",type:"number"},field4:{label:"Checkbox Field",type:"checkbox",text:"Yes"},field5:{label:"Another Field"}},Yt=()=>t(i,{fields:Bt,children:[e(l,{name:"field1"}),e(l,{name:"field2"}),e(l,{name:"field3"}),e(l,{name:"field4"}),e(y,{})]}),$t=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"type"})}),t("p",{children:["The ",e("code",{children:"type"})," property specifies what kind of input should be displayed.  The default value is ",e("code",{children:"text"})," corresponding to the ",e(I,{})," input component.  Other values can be"," ",e("code",{children:"textarea"})," (see ",e(ne,{}),"),"," ",e("code",{children:"checkbox"})," (see ",e(ae,{}),"),"," ",e("code",{children:"radio"})," (see ",e(de,{}),"),"," ",e("code",{children:"select"})," (see ",e(se,{}),") and"," ",e("code",{children:"hidden"})," (see ",e(ce,{}),") corresponding to the basic HTML input types."]}),t("p",{children:["You can also set ",e("code",{children:"type"})," to be one of the other valid HTML input types, e.g. ",e("code",{children:"password"}),", ",e("code",{children:"email"}),","," ",e("code",{children:"number"}),", ",e("code",{children:"date"}),", ",e("code",{children:"color"}),", and so on.  These use the same basic ",e(I,{})," input component as for ",e("code",{children:"text"})," types, but with the ",e("code",{children:"type"})," attribute set appropriately to use the browser-specific functionality."]}),e(o,{Element:Vt,code:Pt,caption:"type",expand:!0,children:e("p",{children:`Enter some text in the input fields below. Note how the "Number Field" input uses the browser's built-in functionality to accept only numbers.`})}),t("p",{children:["As with all other ",e(s,{})," properties, they can be defined using"," ",e(T,{})," set on the ",e(u,{}),". The benefit of this approach is that it keeps the field definitions and markup separate.  As well as making them easier to read and maintain, it also has the benefit that field definitions can be reused across multiple forms."]}),t(o,{Element:Yt,code:jt,caption:"Form fields",children:[t("p",{children:["The example below generates exactly the same form as the one above (with the exception of the additional ",e(_,{})," component). Note that the form data will only include fields that are present in the ",e(u,{}),".  The ",e("code",{children:"field5"})," field definition is effectively ignored."]}),e("p",{})]}),e(c,{links:["field:name","field:label","form:fields","input:types"]})]}),It=`import { Form, Field } from '../../../../../lib/index.js'

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

export default PlaceholderExample`,Mt=()=>e(i,{children:e(l,{name:"name",label:"Your Name",placeholder:"Enter your name"})}),Gt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"placeholder"})}),t("p",{children:["Use the ",e("code",{children:"placeholder"})," property to add some text as a placeholder in the input."]}),e(o,{Element:Mt,code:It,caption:"placeholder",expand:!0}),e(c,{links:["field:name","form:fields"]})]}),Ut=`import { Form, Field, Layout } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout } from '@abw/react-formula'

const ChildFunctions = () =>
  <Form>
    <Field
      name="greeting"
      label="Enter a greeting"
    >
      { field =>
        <h2 className="mar-t-none">
          The {field.name} field
        </h2>
      }
      <Layout/>
      { field =>
        <>
          <div>
            Current value is: {field.value}
          </div>
          <div className="flex gap-2 blue mar-t-4">
            <button
              type="button"
              onClick={() => field.setValue('Foo')}
            >
              Foo
            </button>
            <button
              type="button"
              onClick={() => field.setValue('Bar')}
            >
              Bar
            </button>
          </div>
        </>
      }
    </Field>
  </Form>

export default ChildFunctions`,Ht=()=>e(i,{children:t(l,{name:"greeting",label:"Enter a greeting",children:[r=>t("h2",{className:"mar-t-none",children:["The ",r.name," field"]}),e(N,{}),r=>t(f,{children:[t("div",{children:["Current value is: ",r.value]}),t("div",{className:"flex gap-2 blue mar-t-4",children:[e("button",{type:"button",onClick:()=>r.setValue("Foo"),children:"Foo"}),e("button",{type:"button",onClick:()=>r.setValue("Bar"),children:"Bar"})]})]})]})}),Wt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"children"})}),e("p",{children:"You can define children of a field, either as components or functions. Component can access the field context Functions receive the field context as the first argument."}),t("p",{children:["Note that if you define children for the field then it will replace the default ",e(P,{})," component.  In this case it's up to you to render the field content."]}),t("p",{children:["If you want to include the default layout for a field and add some content of your own then you can include the ",e(P,{})," component manually."]}),e(o,{Element:Ht,code:Ut,caption:"suffix",expand:!0})]}),_t=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default HelpExample`,Kt=()=>t(i,{children:[e(l,{name:"email",label:"Email Address",help:"Enter the email address that you registered with",required:!0}),e(h,{})]}),Jt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"help"})}),t("p",{children:["The ",e("code",{children:"help"})," property can be used to define some additional help for the user.  By default it is displayed underneath the field input."]}),e("p",{children:"If the field input fails to validate then the validation error message will be displayed in its place."}),e(o,{Element:Kt,code:_t,caption:"help",children:e("p",{children:"Try submitting the form without entering any value.  You should see the help message replaced by the validation error."})}),e(c,{links:["field:name","field:label","field:required","field:validate","form:fields"]})]}),zt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default PrefixExample`,Qt=()=>e(i,{children:e(l,{name:"money",type:"number",label:"Price",prefix:"$"})}),Xt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"prefix"})}),t("p",{children:["You can add a ",e("code",{children:"prefix"})," to a ",e("code",{children:"text"})," field or any of the other types using the basic text input, e.g."," ",e("code",{children:"money"}),", ",e("code",{children:"date"}),", etc."]}),e(o,{Element:Qt,code:zt,caption:"prefix",expand:!0}),e(c,{links:["field:suffix"]})]}),Zt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SuffixExample`,el=()=>e(i,{children:e(l,{name:"suffix",type:"password",label:"Enter your password",suffix:"🔒"})}),tl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default PrefixSuffixExample`,ll=()=>e(i,{children:e(l,{name:"money",type:"number",label:"Field with both prefix and suffix",prefix:"$",suffix:".00"})}),rl=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"suffix"})}),t("p",{children:["You can add a ",e("code",{children:"suffix"})," to a field"]}),e(o,{Element:el,code:Zt,caption:"suffix",expand:!0}),t("p",{children:["You can add both a ",e("code",{children:"prefix"})," and a ",e("code",{children:"suffix"}),"."]}),e(o,{Element:ll,code:tl,caption:"prefix and suffix",expand:!0}),e(c,{links:["field:prefix"]})]}),ol=()=>{const[r,a]=p.useState(),d=m=>a(`${m.label} was focussed`);return t(i,{children:[e(l,{name:"foo",label:"The Foo Field",onFocus:d}),e(l,{name:"bar",label:"The Bar Field",onFocus:d}),r]})},il=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnFocusExample`,nl=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onFocus"})}),t("p",{children:["You can add an ",e("code",{children:"onFocus"})," handler to a ",e(s,{})," ","which will be called when the field is focussed (i.e. selected). The field context will be passed as an argument."]}),e(o,{Element:ol,code:il,caption:"onFocus",expand:!0,children:e("p",{children:"Focus on each of the fields below.  A message should be displayed each time a field gains focus."})}),e(c,{links:["field:onBlur","field:onChange","field:onValid","field:onInvalid"]})]}),al=()=>{const[r,a]=p.useState(),d=m=>a(`${m.label} was blurred`);return t(i,{children:[e(l,{name:"foo",label:"The Foo Field",onBlur:d}),e(l,{name:"bar",label:"The Bar Field",onBlur:d}),r]})},dl=`import { Form, Field } from '../../../../../lib/index.js'

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
export default OnBlurExample`,sl=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onBlur"})}),t("p",{children:["You can add an ",e("code",{children:"onBlur"})," handler to a ",e(s,{})," ","which will be called when the field is blurred (i.e. unselected). The field context will be passed as an argument."]}),e(o,{Element:al,code:dl,caption:"onFocus",expand:!0,children:e("p",{children:"Focus on one of the fields below and then select the other field. A message should be displayed each time a field loses focus."})}),e(c,{links:["field:validateOnBlur","field:onFocus","field:onChange","field:onValid","field:onInvalid"]})]}),cl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetFocusExample`,ml=()=>{const[r,a]=p.useState(!1),[d,m]=p.useState(!1);return t(f,{children:[t(i,{children:[e(l,{onLoad:a,name:"field1",label:"Field One"}),e(l,{onLoad:m,name:"field2",label:"Field Two"})]}),t("div",{children:[e("button",{onClick:()=>r==null?void 0:r.setFocus(),children:"Focus Field One"}),e("button",{onClick:()=>d==null?void 0:d.setFocus(),children:"Focus Field Two"})]})]})},ul=()=>t("div",{children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setFocus()"})}),t("p",{children:["If you want to programmatically set the focus on a ",e(s,{})," then you first need to capture a reference to it.  You can do that using an ",e("code",{children:"onLoad"})," property to set a state variable."]}),t("p",{children:["Then call the ",e("code",{children:"setFocus()"})," method on the field object to focus it."]}),e(o,{Element:ml,code:cl,caption:"setFocus()",children:e("p",{children:"Click on one of the buttons to focus on a field."})}),t("p",{children:["You can also focus on fields by name using the ",e(u,{})," ",e(me,{})," method."]}),e(c,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),hl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetValueExample`,pl=()=>{const[r,a]=p.useState(!1);return t(f,{children:[e(i,{children:e(l,{onLoad:a,name:"animal",label:"Animal"})}),t("div",{children:[e("button",{onClick:()=>r.setValue("Antelope"),children:"Antelope"}),e("button",{onClick:()=>r.setValue("Badger"),children:"Badger"}),e("button",{onClick:()=>r.setValue("Camel"),children:"Camel"})]})]})},fl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetValueExample`,bl=()=>{const[r,a]=p.useState(!1);return e(f,{children:t(i,{children:[e(l,{onLoad:a,name:"animal",label:"Animal"}),t("div",{children:[e("button",{className:"btn-green",onClick:d=>{d.preventDefault(),r.setValue("Antelope")},children:"Antelope"}),e("button",{className:"btn-green",onClick:d=>r.setValue("Badger",d),children:"Badger"}),e("button",{type:"button",className:"btn-green",onClick:()=>r.setValue("Camel"),children:"Camel"}),e("button",{onClick:()=>r.setValue("Danger!"),className:"btn-red",children:"Danger!"})]})]})})},Fl=()=>t("div",{children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setValue()"})}),t("p",{children:["If you want to programmatically set the value for a ",e(s,{})," then you first need to capture a reference to it.  You can do that using an ",e("code",{children:"onLoad"})," property to set a state variable."]}),t("p",{children:["Then call the ",e("code",{children:"setValue()"})," method on the field object to set the value."]}),e(o,{Element:pl,code:hl,caption:"setValue()",children:e("p",{children:"Click on one of the buttons to set the input value."})}),t("p",{children:["One thing to be aware of is that the default behaviour of a"," ",e("code",{children:"button"})," inside a ",e("code",{children:"form"})," is to submit the form. This is an innate property of HTML and not something that's specific to this library.  In the example above we put the buttons outside the"," ",e(u,{})," to avoid this behaviour, but it's not always possible to do that. There are a number of ways to work around it, shown in the example below."]}),t("p",{children:['The first "Antelope" button calls the'," ",e("code",{children:"preventDefault()"})," "," method on the event.  Given that this is a bit clumsy, the ",e("code",{children:"setValue()"})," method allows you to pass the event as the second argument and it will call"," ",e("code",{children:"preventDefault()"}),' for you, as shown on the second "Badger" button.  The third approach, shown on the "Camel" button, is to explicitly set the'," ",e("code",{children:"type"})," to ",e("code",{children:"button"})," to override the default"," ",e("code",{children:"type"})," of ",e("code",{children:"submit"}),`.  The fourth "Danger!" button doesn't do anything and will cause the form to submit, just in case you don't believe me that it's really a problem.`]}),e(o,{Element:bl,code:fl,caption:"setValue()",children:e("p",{children:"Click on one of the buttons to set the input value.  Be warned that the fourth button will cause the form to submit."})}),t("p",{children:["You can also set values for one or more fields by name using the"," ",e(u,{})," ",e(ue,{})," method."]}),e(c,{links:["form:setValues","field:setFocus","field:reset"]})]}),xl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ResetExample`,Sl=()=>{const[r,a]=p.useState(!1),[d,m]=p.useState(!1);return t(f,{children:[t(i,{children:[e(l,{onLoad:a,name:"field1",label:"Field One"}),e(l,{onLoad:m,value:"Initial value",name:"field2",label:"Field Two"})]}),t("div",{children:[e("button",{className:"btn-blue",onClick:r.reset,children:"Reset Field One"}),e("button",{className:"btn-blue",onClick:d.reset,children:"Reset Field Two"})]})]})},gl=()=>t("div",{children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"reset()"})}),t("p",{children:["If you want to programmatically reset a ",e(s,{})," then you first need to capture a reference to it.  You can do that using an ",e("code",{children:"onLoad"})," property to set a state variable."]}),t("p",{children:["Then call the ",e("code",{children:"reset()"})," method on the field object to reset it."]}),e(o,{Element:Sl,code:xl,caption:"reset()",children:e("p",{children:"Enter some text in either of the inputs below and then click on the corresponding button to reset it to the original value."})}),e(c,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),El=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnChangeExample`,wl=()=>{const[r,a]=p.useState("");return t(i,{children:[e(l,{name:"example",label:"Field with onChange",onChange:d=>a(d.value)}),"Current value: ",r]})},yl=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onChange"})}),t("p",{children:["You can add an ",e("code",{children:"onChange"})," handler to a ",e(s,{})," ","which will be called when the field value is changed.  The field context will be passed as an argument."]}),e(o,{Element:wl,code:El,caption:"onChange",expand:!0,children:e("p",{children:'Try entering some text in the field below.  You should see the "Current value" display update to reflect the field content.'})}),e(c,{links:["field:validateOnChange","field:onBlur","field:onFocus","field:onValid","field:onInvalid"]})]}),Tl=()=>{const[r,a]=p.useState();return t(i,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onValid:d=>a(`${d.name} is valid: ${d.value}`)}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:d=>a(`${d.name} is valid: ${d.value}`)}),r]})},vl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnValidExample`,Rl=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onValid"})}),t("p",{children:["You can add an ",e("code",{children:"onValid"})," handler to a ",e(s,{})," ","which will be called when the field is successfully validated. The field context will be passed as an argument."]}),e(o,{Element:Tl,code:vl,caption:"onValid",expand:!0,children:t("p",{children:["Enter some text in one of the fields below and then select the other field.  The ",e("code",{children:"validateOnBlur"})," option on the ",e(u,{})," ","means that the first field will be validated when it loses focus and the ",e("code",{children:"onValid"})," handler will be called."]})}),e(c,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onInvalid"]})]}),Cl=()=>{const[r,a]=p.useState(),d=m=>a(`${m.label} is invalid: ${m.message}`);return t(i,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onInvalid:d}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:d,requiredMessage:"You must enter a value"}),r]})},Nl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnInvalidExample`,kl=()=>t("div",{children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onInvalid"})}),t("p",{children:["You can add an ",e("code",{children:"onInvalid"})," handler to a ",e(s,{})," ","which will be called when the field fails validation. The field context will be passed as an argument."]}),t(o,{Element:Cl,code:Nl,caption:"onInvalid",expand:!0,children:[t("p",{children:["Click one of the fields below and then select the other field without entering any text. The ",e(he,{})," option on the"," ",e(u,{})," "," means that the fields will be validated when they lose focus. They're both marked as ",e(F,{})," so they will fail validation (assuming you haven't entered anything) and the ",e("code",{children:"onInvalid"})," handler will be called."]}),t("p",{children:["Also note the use of ",e(pe,{})," to set a custom message for the second field."]})]}),e(c,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onValid"]})]}),Ol=`import { Form, Field } from '../../../../../lib/index.js'

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

export default PrepareValue`,ql={upper:{label:"Converted to UPPER CASE",prepareValue:r=>r.toUpperCase()}},Al=()=>e(i,{fields:ql,children:e(l,{name:"upper"})}),L=({text:r,children:a})=>e("div",{className:"info alert border",children:r||a}),Ll=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"prepareValue"})}),t(v,{children:[t("p",{children:["You can add a ",e("code",{className:"code",children:"prepareValue"})," function to a ",e(s,{})," to prepare the value before it's set."]}),e(L,{children:"Try entering some letters in the field below.  You should see that they get converted to upper case."})]}),e(o,{Element:Al,code:Ol,caption:"onChange",expand:!0}),e(c,{links:["field:validate","field:validateOnBlur","field:validateOnChange"]})]}),Dl=()=>t(i,{children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(h,{})]}),Pl=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const Required = () =>
  <Form>
    <Field name="field1" label="Required Field" required/>
    <Submit/>
  </Form>

export default Required`,Vl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"required"})}),t(v,{align:"end",children:[t("p",{children:["You can add a ",e("code",{children:"required"})," property to a field to mark it as being required.  This automatically adds a validator to the field to ensure that a value is provided when the form is submitted."]}),e(L,{children:"Try submitting the form without entering anything in the field input."})]}),e(o,{Element:Dl,code:Pl,caption:"required",expand:!0}),e(c,{links:["field:showRequired","field:requiredLabel","field:requiredMessage","field:validateOnBlur","field:validateOnChange"]})]}),jl=()=>t(i,{children:[e(l,{name:"field1",label:"Required Field",required:!0,showRequired:!0,wide:!0}),e(l,{name:"field2",label:"Optional Field",wide:!0})]}),Bl=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowRequired = () =>
  <Form>
    <Field
      name="field1"
      label="Required Field"
      required showRequired wide
    />
    <Field
      name="field2"
      label="Optional Field"
      wide
    />
  </Form>

export default ShowRequired`,Yl=()=>t(i,{showRequired:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0,wide:!0}),e(l,{name:"field2",label:"Optional Field",wide:!0})]}),$l=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowRequiredForm = () =>
  <Form showRequired>
    <Field
      name="field1"
      label="Required Field"
      required wide
    />
    <Field
      name="field2"
      label="Optional Field"
      wide
    />
  </Form>

export default ShowRequiredForm`,Il=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showRequired"})}),t("p",{children:["If a ",e(s,{})," is marked as ",e(F,{})," then the"," ",e("code",{children:"showRequired"})," property can be added to have an additional label displayed indicating that it is required."]}),e(o,{Element:jl,code:Bl,caption:"showRequired on Field",expand:!0}),t("p",{children:["The ",e("code",{children:"showRequired"})," property can also be added to the"," ",e(u,{})," to have it apply to all ",e(F,{})," fields."]}),e(o,{Element:Yl,code:$l,caption:"showRequired on Form",expand:!0}),e(c,{links:["field:required","field:requiredLabel","field:showOptional","field:optionalLabel"]})]}),Ml=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RequiredLabel = () =>
  <Form showRequired requiredLabel="Important!">
    <Field
      name="field1"
      label="Required Field"
      required wide
    />
    <Field
      name="field2"
      label="Another Required Field"
      requiredLabel="Very Important!"
      required wide
    />
  </Form>

export default RequiredLabel`,Gl=()=>t(i,{showRequired:!0,requiredLabel:"Important!",children:[e(l,{name:"field1",label:"Required Field",required:!0,wide:!0}),e(l,{name:"field2",label:"Another Required Field",requiredLabel:"Very Important!",required:!0,wide:!0})]}),Ul=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredLabel"})," property to change the label that is displayed for ",e(F,{})," fields that have the ",e(fe,{})," option enabled.  You can set it on individual ",e(s,{})," components or on the parent ",e(u,{}),"."]}),e(o,{Element:Gl,code:Ml,caption:"requiredLabel",expand:!0}),e(c,{links:["field:required","field:showRequired","field:showOptional","field:optionalLabel"]})]}),Hl=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default RequiredLabel`,Wl=()=>t(i,{requiredMessage:"Nothing will come of nothing",children:[e(l,{name:"foo",label:"Foo",required:!0}),e(l,{name:"bar",label:"Bar",required:!0,requiredMessage:"You really MUST enter a value"}),e(h,{})]}),_l=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredMessage"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredMessage"})," property to change the error message that is generated for ",e(F,{})," fields that aren't completed."]}),t("p",{children:["You can set it on individual ",e(s,{})," components or on the parent"," ",e(u,{})," to act as the default for all fields."]}),e(o,{Element:Wl,code:Hl,caption:"requiredMessage",expand:!0,children:e("p",{children:"Try submitting the form without entering any values."})}),e(c,{links:["field:required","field:showRequired","field:requiredLabel","field:validateOnChange","field:validateOnBlur"]})]}),Kl={alice:!0,bob:!0,charlie:!0},Jl={username:{label:"Username",help:"Choose a username (minimum length: 3)",validateOnChange:!0,minValidateLength:3,validate:(r,a,d,m)=>{r.length<3&&m({message:"Your username must be at least 3 characters"}),Kl[r.toLowerCase()]?m({message:"Sorry, that username is taken"}):d({message:"That username is available"})}}},zl=()=>t(i,{fields:Jl,children:[e(l,{name:"username"}),e(h,{})]}),Ql=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default MinValidateLengthExample`,Xl=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"minValidateLength"})}),t("p",{children:["You can set the ",e(be,{})," property flag to enable validation any time the field value changes.  The"," ",e("code",{children:"minValidateLength"})," property can be set to only trigger validation when the input length exceeds a threshold."]}),e(o,{Element:zl,code:Ql,caption:"minValidateLength",children:t("p",{children:["Enter a username in the form below.  The usernames ",e("code",{children:"alice"}),",",e("code",{children:"bob"})," and ",e("code",{children:"charlie"})," will return a validation error saying that they're not available.  There's a minimum length for a username so we wait until at least three characters have been entered before checking to see if the username is available.  Note that the validation will also be triggered when the form is submitted, regardless of how many characters have been entered.  For that reason the validation function also rejects any username that is too short."]})}),e(c,{links:["field:required","field:validate","field:validateOnBlur","field:validateOnChange"]})]}),Zl=()=>t(i,{showOptional:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0,wide:!0}),e(l,{name:"field2",label:"Optional Field",wide:!0})]}),er=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowOptional = () =>
  <Form showOptional>
    <Field
      name="field1"
      label="Required Field"
      required wide
    />
    <Field
      name="field2"
      label="Optional Field"
      wide
    />
  </Form>

export default ShowOptional`,tr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showOptional"})}),t("p",{children:["If a field is ",e("b",{children:"NOT"})," marked as ",e(F,{})," then it is optional. If you set the ",e("code",{children:"showOptional"})," property then it will add an additional label to a field to indicate that it's optional.  You can set the property on individual ",e(s,{})," components or on the parent ",e(u,{})," to act as a default for all fields."]}),t("p",{children:["You can use the ",e(Fe,{})," property to change the text of the label that is displayed."]}),e(o,{Element:Zl,code:er,caption:"showOptional",expand:!0}),e(c,{links:["field:required","field:optionalLabel","field:showRequired","field:requiredLabel"]})]}),lr=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OptionalLabel = () =>
  <Form showOptional optionalLabel="Not required">
    <Field
      name="field1"
      label="Optional Field"
      wide
    />
    <Field
      name="field2"
      label="Another Optional Field"
      optionalLabel="Nice to have"
      wide
    />
  </Form>

export default OptionalLabel`,rr=()=>t(i,{showOptional:!0,optionalLabel:"Not required",children:[e(l,{name:"field1",label:"Optional Field",wide:!0}),e(l,{name:"field2",label:"Another Optional Field",optionalLabel:"Nice to have",wide:!0})]}),or=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"optionalLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"optionalLabel"})," property to change the label that is display for optional fields (i.e. those that aren't marked as ",e(F,{}),") that have the"," ",e(xe,{})," option set.  You can set it on individual"," ",e(s,{})," components or on the parent ",e(u,{})," to act as a default for all fields."]}),e(o,{Element:rr,code:lr,caption:"optionalLabel",expand:!0}),e(c,{links:["field:required","field:showRequired","field:showOptional","field:requiredLabel"]})]}),ir={username:{label:"Username",help:"Enter your username",validate:r=>R().trim().required("You must enter your username you numpty!").validate(r)},password:{label:"Password",type:"password",help:"Enter your password",validate:r=>R().trim().required("You must enter your password you muppet!").validate(r)}},nr=()=>t(i,{fields:ir,children:[e(S,{names:"username password",wide:!0}),e(h,{})]}),ar=`import { Form, Fields, Submit } from '../../../../../lib/index.js'

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
    <Fields names="username password" wide/>
    <Submit/>
  </Form>

export default ValidateExample`,dr={username:{label:"Username",help:"Enter your username",validate:async(r,a,d,m)=>{r.match(/badger/i)?d({value:`${r} is a great name`}):m({value:"Mr Badger",message:'Your username must contain the word "badger"'})}}},sr=()=>t(i,{fields:dr,children:[e(l,{name:"username"}),e(h,{})]}),cr=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default ValidateExample`,mr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),t("p",{children:["There are a number of different ways to validate field input. For simple cases where a value must be provided you can use the"," ",e(F,{})," property.  If you need to perform additional validation then you can do that using a ",e("code",{children:"validate"})," function."]}),e("h2",{children:e("code",{children:"validate"})}),t(v,{children:[t("div",{children:[t("p",{children:["You can use the ",e(F,{})," property to mark a field as being required, but it's a blunt instrument.  All it will do is check that a field has some value entered. For more robust validation you can use the ",e("code",{children:"validate"})," property to define an ",e("code",{children:"async"})," ","validation function."]}),t("p",{children:["In this example we're using"," ",e("a",{href:"https://www.npmjs.com/package/yup",children:"Yup"})," but you can use anything you like.  It should return the validated value on success or throw an error if the valid is invalid."]})]}),e(L,{children:"Try submitting the form without entering any values for either of the fields. You should see the custom validation errors."})]}),e(o,{Element:nr,code:ar,caption:"validate"}),t(v,{align:"end",children:[t("p",{children:[e("h3",{children:"NOTE: this may change"}),"The ",e("code",{children:"validate"})," function is passed four arguments.  The first is the field value for common cases where that's all you need to determine if the field is valid.  The second argument is the field context containing everything you need to know about the field state and callable actions to change it.  The third and fourth arguments are"," ",e("code",{children:"resolve"})," and ",e("code",{children:"reject"})," functions which can be called to validate or invalidate the field, respectively.  The"," ",e("code",{children:"resolve"})," function should be passed an object containing the ",e("code",{children:"value"}),", which may be modified by your function. The ",e("code",{children:"reject"})," function should be passed an object containing an error ",e("code",{children:"message"}),", and optionally a new ",e("code",{children:"value"})," ","for the field."]}),e(L,{children:'In this somewhat contrived example we require the user to enter a username containing the word "badger".'})]}),e(o,{Element:sr,code:cr,caption:"validate"}),e(c,{links:["field:required","field:validateOnChange","field:validateOnBlur"]})]}),ur=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ValidateOnChangeExample`,hr={vowels:{label:"Vowels",help:"Enter between 3 and 5 vowels",validateOnChange:!0,minValidateLength:3,validate:r=>R().trim().matches(/^[^y]*$/i,"Sorry, but y is not allowed").matches(/^[aeiou]*$/i,"You should only type vowels").min(3,"You must enter at least three vowels").max(5,"You should not enter more than 5 vowels").validate(r)}},pr=()=>e(i,{fields:hr,children:e(l,{name:"vowels"})}),fr=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnChange"})}),t("p",{children:["You can set the ",e("code",{children:"validateOnChange"})," flag to enable validation any time the field value changes.  The ",e(Se,{})," property can be set to only trigger validation when the input length exceeds a threshold."]}),e(o,{Element:pr,code:ur,caption:"validateOnChange",children:e("p",{children:"Enter some text in the field below.  Once you've entered three letters the validation will kick in.  You should see an error if you enter any letters that aren't vowels."})}),e(c,{links:["field:required","field:validate","field:validateOnBlur","field:minValidateLength"]})]}),br={username:{label:"Username",help:"Enter your username",validate:r=>R().trim().required("You must enter your username you numpty!").validate(r)},password:{label:"Password",type:"password",help:"Enter your password",validate:r=>R().trim().required("You must enter your password you muppet!").validate(r)}},Fr=()=>t(i,{fields:br,validateOnBlur:!0,children:[e(S,{names:"username password"}),e(h,{})]}),xr=`import { Form, Fields, Submit } from '../../../../../lib/index.js'

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

export default ValidateExample`,Sr=()=>t("div",{children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnBlur"})}),t("p",{children:["The ",e("code",{children:"validateOnBlur"})," property can be set to trigger validation whenever a field is blurred.  You can set it on individual"," ",e(s,{})," components or on the parent ",e(u,{})," to have it apply to all fields."]}),e(o,{Element:Fr,code:xr,caption:"validate",children:e("p",{children:"Try switching focus from one field to another without entering anything.  You should see the custom validation errors when each field is blurred."})}),e(c,{links:["field:required","field:validate","field:validateOnChange"]})]}),gr=`import { Form } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CustomInput = () =>
  <Form>
    TODO
  </Form>

export default CustomInput`,Er=()=>e(i,{children:"TODO"}),wr=()=>t("div",{children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Input"})}),t("p",{children:["You can define a custom ",e("code",{className:"code",children:"Input"})," component to render the input for a field."]}),e(o,{Element:Er,code:gr,caption:"Input",expand:!0}),e(c,{links:["custom:Input"]})]}),yr=()=>t(j,{children:[e(n,{path:"",end:!0,element:e(Et,{})}),e(n,{path:"properties",element:e(wt,{})}),e(n,{path:"name",element:e(Nt,{})}),e(n,{path:"label",element:e(Dt,{})}),e(n,{path:"type",element:e($t,{})}),e(n,{path:"placeholder",element:e(Gt,{})}),e(n,{path:"children",element:e(Wt,{})}),e(n,{path:"help",element:e(Jt,{})}),e(n,{path:"prefix",element:e(Xt,{})}),e(n,{path:"suffix",element:e(rl,{})}),e(n,{path:"required",element:e(Vl,{})}),e(n,{path:"showRequired",element:e(Il,{})}),e(n,{path:"requiredLabel",element:e(Ul,{})}),e(n,{path:"requiredMessage",element:e(_l,{})}),e(n,{path:"showOptional",element:e(tr,{})}),e(n,{path:"optionalLabel",element:e(or,{})}),e(n,{path:"prepareValue",element:e(Ll,{})}),e(n,{path:"validate",element:e(mr,{})}),e(n,{path:"validateOnBlur",element:e(Sr,{})}),e(n,{path:"validateOnChange",element:e(fr,{})}),e(n,{path:"minValidateLength",element:e(Xl,{})}),e(n,{path:"onFocus",element:e(nl,{})}),e(n,{path:"onBlur",element:e(sl,{})}),e(n,{path:"onChange",element:e(yl,{})}),e(n,{path:"onValid",element:e(Rl,{})}),e(n,{path:"onInvalid",element:e(kl,{})}),e(n,{path:"setFocus",element:e(ul,{})}),e(n,{path:"setValue",element:e(Fl,{})}),e(n,{path:"Reset",element:e(gl,{})}),e(n,{path:"Input",element:e(wr,{})})]}),Tr={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},vr=()=>t(i,{fields:Tr,children:[e(S,{names:["name","message"]}),e(S,{names:"badgers animal"})]}),Rr=`import { Form, Fields } from '../../../../../lib/index.js'

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
    {/* array of field name strings */}
    <Fields names={['name', 'message']}/>
    {/* shortcut - a single string of field names */}
    <Fields names='badgers animal'/>
  </Form>

export default FieldsExample
`,Cr={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},Nr=()=>e(i,{fields:Cr,children:e(S,{names:"name email",grid:2,wide:!0})}),kr=`import { Form, Fields } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/react-formula'

const fields = {
  name: {
    label: 'Name',
    required: true,
  },
  email: {
    label: 'Email Address',
    required: true,
  },
}

const FieldsGridExample = () =>
  <Form fields={fields}>
    <Fields
      names="name email"
      grid={2} wide
    />
  </Form>

export default FieldsGridExample
`,Or={one:{label:"One"},two:{label:"Two"},three:{label:"Three"}},qr=()=>e(i,{fields:Or,children:e(S,{names:"one two three",grid:!0,wide:!0})}),Ar=`import { Form, Fields } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, Submit } from '@abw/badger-form'

const fields = {
  one: {
    label: 'One',
  },
  two: {
    label: 'Two',
  },
  three: {
    label: 'Three',
  }
}

const FieldsGridAutoExample = () =>
  <Form fields={fields}>
    <Fields names="one two three" grid wide/>
  </Form>

export default FieldsGridAutoExample
`,Lr={forename:{label:"First Name",required:!0},surname:{label:"Surname",required:!0},company:{label:"Company",required:!0},job_title:{label:"Job Title",required:!0}},Dr=()=>e(i,{fields:Lr,children:e(S,{names:"forename surname company job_title",grid:2,gap:12,wide:!0})}),Pr=`import { Form, Fields } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const fields = {
  forename: {
    label: 'First Name',
    required: true,
  },
  surname: {
    label: 'Surname',
    required: true,
  },
  company: {
    label: 'Company',
    required: true,
  },
  job_title: {
    label: 'Job Title',
    required: true,
  },
}

const FieldsGapExample = () =>
  <Form fields={fields}>
    <Fields
      names="forename surname company job_title"
      grid={2} gap={12} wide
    />
  </Form>

export default FieldsGapExample
`,Vr={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},jr=()=>e(i,{fields:Vr,children:e(S,{names:"name email",className:"border pad-4 bgc-95 bgd-5 bdr-2",wide:!0})}),Br=`import { Form, Fields } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/react-formula'

const fields = {
  name: {
    label: 'Name',
    required: true,
  },
  email: {
    label: 'Email Address',
    required: true,
  },
}

const FieldsClassExample = () =>
  <Form fields={fields}>
    <Fields
      names="name email"
      className="border pad-4 bgc-95 bgd-5 bdr-2"
      wide
    />
  </Form>

export default FieldsClassExample
`,Yr={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},$r=()=>e(i,{fields:Yr,children:e(S,{names:"name message badgers animal",wide:!0})}),Ir=`import { Form, Fields } from '../../../../../lib/index.js'

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

const FieldsWide = () =>
  <Form fields={fields}>
    <Fields names='name message badgers animal' wide/>
  </Form>

export default FieldsWide
`,Mr=()=>t("div",{className:"prose",children:[e("h1",{children:"Fields"}),t("p",{children:["The ",e("code",{children:"Fields"})," component can be used to render multiple fields."]}),e("p",{children:"This is a shortcut for convenience, but it depends on you having all your form fields defined in a separate schema so you can reference them only by name."}),t("p",{children:["The ",e("code",{className:"code",children:"names"})," property should be used to specify the list of field names either as an array of strings, or a single string containing a whitespace-delimited list of field names. The ",e("code",{className:"code",children:"Fields"})," component renders each of the fields, collected together in a single"," ",e("code",{className:"code",children:"div"})," element"]}),e(o,{Element:vr,code:Rr,caption:"Fields"}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be set to add a CSS class to the fields container."]}),e(o,{Element:jr,code:Br,caption:"Fields Class"}),e("h2",{children:e("code",{children:"grid"})}),t("p",{children:["The ",e("code",{children:"grid"})," property can be used to layout the fields in a grid.  Set the property to the number of columns you want.  The default gap between the fields will be 1rem (using the"," ",e("code",{children:"gap-h-4"})," utility class provided by"," ",e("a",{href:"https://abw.github.io/badger-css/utilities/grid",children:"Badger-CSS"}),")."]}),e(o,{Element:Nr,code:kr,caption:"Fields in a Grid"}),t("p",{children:["You can also specify ",e("code",{children:"grid"})," as the boolean value"," ",e("code",{children:"true"})," (which React will conveniently set for you if you include it as a valueless property) and it will automatically select the correct number of columns based on how many fields it is rendering."]}),e(o,{Element:qr,code:Ar,caption:"Automatic Grid Columns"}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set a custom horizontal gap between fields.  The value should be an integer number of margin units of 0.25rem."]}),e(o,{Element:Dr,code:Pr,caption:"Fields With a Gap"}),e("h2",{children:"Additional Properties"}),t("p",{children:["Any additional properties that you pass to the ",e("code",{children:"Fields"})," component will be forwarded to each of the ",e(s,{})," components."]}),t("p",{children:["For example, if you want all your fields to expand to the full width of the container you can pass the ",e("code",{children:"wide"})," property and it will forward it to each of the ",e(s,{})," components."]}),e(o,{Element:$r,code:Ir,caption:"Wide Fields"})]}),Gr=()=>e(i,{children:t(K,{legend:"Fieldset One",children:[e(l,{name:"one",label:"Field One"}),e(l,{name:"one",label:"Field Two"})]})}),Ur=`import { Form, Field, Fieldset } from '../../../../../lib/index.js'

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
`,Hr={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},Wr=()=>e(i,{fields:Hr,children:e(K,{legend:"Fieldset Two",fields:"name message"})}),_r=`import { Form, Fieldset } from '../../../../../lib/index.js'

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
`,Kr=()=>t("div",{children:[e("h1",{children:"Fieldset"}),t("p",{children:["The ",e("code",{children:"Fieldset"})," component can be used to create a field set.  The ",e("code",{children:"legend"})," property should be used to set the legend."]}),e(o,{Element:Gr,code:Ur,caption:"Fieldset",expand:!0}),t("p",{children:["The ",e("code",{className:"code",children:"fields"})," property can be used as a shortcut to render a set of named fields using the"," ",e(ge,{})," component."]}),e(o,{Element:Wr,code:_r,caption:"Fieldset fields",expand:!0})]}),Jr=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(h,{})]}),zr=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one"/>
    <Field name="two"   label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample`,Qr=()=>t(i,{children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(h,{className:"btn-blue",text:"Save Changes"})]}),Xr=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const SubmitProps = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit className="btn-blue" text="Save Changes"/>
  </Form>

export default SubmitProps`,Zr=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnSubmit = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <Submit/>
  </Form>

export default OnSubmit`,eo=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(h,{})]}),to=()=>t("div",{children:[e("h1",{children:"Submit"}),t("p",{children:["The ",e("code",{children:"Submit"})," component can be used to add a button which will submit the form.  See the"," ",e(x,{to:"/components/form/validation",text:"validation page"})," for information on how the form data is validated and the"," ",e(Ee,{})," component for details on how validation errors are displayed and can be customised."]}),e(o,{Element:Jr,code:zr,caption:"Submit",expand:!0,children:e("p",{children:"Try entering some text in the fields below then click on the Submit button."})}),e("h2",{children:"Properties"}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(o,{Element:Qr,code:Xr,caption:"Properties",expand:!0}),e("h2",{children:"onSubmit"}),t("p",{children:["You can use the ",e("code",{children:"onSubmit"})," form property to handle the submission."]}),e(o,{Element:eo,code:Zr,caption:"onSubmit",expand:!0})]}),lo=`import { Form, Field, Reset } from '../../../../../lib/index.js'

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

export default ResetExample`,ro=()=>t(i,{values:{three:"The third field"},children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two with default value",default:"Badger"}),e(l,{name:"three",label:"Field three with pre-defined form value"}),e(B,{})]}),oo=()=>t(i,{children:[e(l,{name:"one",label:"Field one"}),e(B,{className:"btn-brown",text:"Reset the form"})]}),io=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const Properties = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Reset className="btn-brown" text="Reset the form"/>
  </Form>

export default Properties`,no=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const OnReset = () =>
  <Form onReset={() => alert('form has been reset')}>
    <Field name="field1" label="Field One"/>
    <Reset/>
  </Form>

export default OnReset`,ao=()=>t(i,{onReset:()=>alert("form has been reset"),children:[e(l,{name:"field1",label:"Field One"}),e(B,{})]}),so=()=>t("div",{children:[e("h1",{children:"Reset"}),t("p",{children:["The ",e("code",{children:"Reset"})," component can be used to add a reset button which will reset the form to its initial state.  Any"," ",e("code",{children:"values"})," defined on the ",e(u,{})," will be restored. Any fields that have a ",e("code",{children:"default"})," value will be reset to that value."]}),e(o,{Element:ro,code:lo,caption:"Reset",expand:!0,children:e("p",{children:"Try entering some text in the fields below then click on the Reset button.  You should see the fields reset to their original state."})}),e("h2",{children:"Properties"}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(o,{Element:oo,code:io,caption:"Properties",expand:!0}),e("h2",{children:"onReset"}),t("p",{children:["You can use the ",e("code",{children:"onReset"})," property to register a function that should be called when the form is reset."]}),e(o,{Element:ao,code:no,caption:"onReset",expand:!0})]}),co=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(J,{})]}),mo=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Cancel } from '@abw/react-formula'

const CancelExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Cancel/>
  </Form>

export default CancelExample`,uo=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(J,{text:"Go Back",className:"btn-brown",onClick:()=>alert("Cancel button was clicked")})]}),ho=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

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

export default CancelExample`,po=()=>t("div",{children:[e("h1",{children:"Cancel"}),t("p",{children:["The ",e("code",{children:"Cancel"})," component can be used to add a Cancel button. This doesn't do anything to the form but it's common to provide a button in a form to allow a user to cancel an edit or go back."]}),e(o,{Element:co,code:mo,caption:"Cancel",expand:!0,children:t("p",{children:["Don't be surprised that the Cancel button doesn't do anything in this example.  We need to add an ",e("code",{children:"onClick"})," handler to make it useful. See the next example."]})}),t("p",{children:["The ",e("code",{children:"text"})," property will set the text for the button. The ",e("code",{children:"className"})," property can be used to add a CSS class.  The ",e("code",{children:"onClick"})," property should be used to define a handler to do something when the button is clicked."]}),e(o,{Element:uo,code:ho,caption:"Properties",expand:!0})]}),fo=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(k,{})]}),bo=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit/>
  </Form>

export default CancelSubmitExample`,Fo=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(k,{gap:8})]}),xo=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit gap={8}/>
  </Form>

export default CancelSubmitGap`,So=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(k,{space:!0})]}),go=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One" wide/>
    <CancelSubmit space/>
  </Form>

export default CancelSubmitSpace`,Eo=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(k,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),wo=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitClassName = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit
      className="flex space bgc-90 bgd-10 border bdr-2 pad-4"
    />
  </Form>

export default CancelSubmitClassName`,yo=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(k,{submit:{text:"Continue",className:"green"},cancel:{text:"Go Back",className:"outline",onClick:()=>alert("You went back")},space:!0})]}),To=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One" wide/>
    <CancelSubmit
      submit={{
        text: 'Continue',
        className: 'green',
      }}
      cancel={{
        text: 'Go Back',
        className: 'outline',
        onClick: () => alert('You went back')
      }}
      space
    />
  </Form>

export default CancelSubmitExample`,vo=()=>t("div",{className:"prose",children:[e("h1",{children:"CancelSubmit"}),t("p",{children:["The ",e("code",{children:"CancelSubmit"})," component can be used to add both"," ",e(q,{})," and ",e(w,{})," controls."]}),e(o,{Element:fo,code:bo,caption:"CancelSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(o,{Element:Fo,code:xo,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(o,{Element:So,code:go,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(o,{Element:Eo,code:wo,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(q,{})," component using the ",e("code",{children:"cancel"})," property, and for the ",e(w,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(o,{Element:yo,code:To,caption:"Properties",expand:!0})]}),Ro=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(O,{})]}),Co=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit/>
  </Form>

export default CancelResetSubmitExample`,No=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(O,{gap:8})]}),ko=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit gap={8}/>
  </Form>

export default CancelResetSubmitGap`,Oo=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(O,{space:!0})]}),qo=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One" wide/>
    <CancelResetSubmit space/>
  </Form>

export default CancelResetSubmitSpace`,Ao=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(O,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),Lo=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitClassName = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit
      className="flex space bgc-90 bgd-10 border bdr-2 pad-4"
    />
  </Form>

export default CancelResetSubmitClassName`,Do=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(O,{submit:{text:"Continue",className:"green"},reset:{text:"Restart",className:"brown"},cancel:{text:"Go Back",className:"outline",onClick:()=>alert("You went back")},space:!0})]}),Po=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One" wide/>
    <CancelResetSubmit
      submit={{
        text: 'Continue',
        className: 'green',
      }}
      reset={{
        text: 'Restart',
        className: 'brown',
      }}
      cancel={{
        text: 'Go Back',
        className: 'outline',
        onClick: () => alert('You went back')
      }}
      space
    />
  </Form>

export default CancelResetSubmitExample`,Vo=()=>t("div",{children:[e("h1",{children:"CancelResetSubmit"}),t("p",{children:["The ",e("code",{children:"CancelResetSubmit"})," component can be used to add all three ",e(q,{}),", ",e(A,{})," and ",e(w,{})," controls in one fell swoop."]}),e(o,{Element:Ro,code:Co,caption:"CancelResetSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(o,{Element:No,code:ko,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(o,{Element:Oo,code:qo,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(o,{Element:Ao,code:Lo,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"cancel"}),", ",e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(q,{})," component using the ",e("code",{children:"cancel"})," property, for the ",e(A,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(w,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(o,{Element:Do,code:Po,caption:"Properties",expand:!0})]}),jo=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(g,{})]}),Bo=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit/>
  </Form>

export default ResetSubmitExample`,Yo=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(g,{gap:8})]}),$o=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit gap={8}/>
  </Form>

export default ResetSubmitGap`,Io=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(g,{space:!0})]}),Mo=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One" wide/>
    <ResetSubmit space/>
  </Form>

export default ResetSubmitSpace`,Go=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(g,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),Uo=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitClassName = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit
      className="flex space bgc-90 bgd-10 border bdr-2 pad-4"
    />
  </Form>

export default ResetSubmitClassName`,Ho=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(g,{reset:{text:"Reset the Form",className:"outline"},submit:{text:"Submit the Form",className:"blue"},space:!0})]}),Wo=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form>
    <Field name="field1" label="Field One" wide/>
    <ResetSubmit
      reset={{
        text: 'Reset the Form',
        className: 'outline'
      }}
      submit={{
        text: 'Submit the Form',
        className: 'blue'
      }}
      space
    />
  </Form>

export default ResetSubmitExample`,_o=()=>t("div",{className:"prose",children:[e("h1",{children:"ResetSubmit"}),t("p",{children:["The ",e("code",{children:"ResetSubmit"})," component can be used to add both"," ",e(A,{})," and ",e(w,{})," controls."]}),e(o,{Element:jo,code:Bo,caption:"ResetSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(o,{Element:Yo,code:$o,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(o,{Element:Io,code:Mo,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(o,{Element:Go,code:Uo,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(A,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(w,{})," ","component using the ",e("code",{children:"submit"})," property."]}),e(o,{Element:Ho,code:Wo,caption:"Properties",expand:!0})]}),Ko=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",value:"Hello World!"}),e(we,{children:e(g,{})})]}),Jo=`import { Form, Field, Changed, ResetSubmit } from '../../../../lib/index.js'

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

export default ChangedExample`,zo=()=>t("div",{children:[e("h1",{children:"Changed"}),t("p",{children:["The ",e("code",{children:"Changed"})," component will only render its child components when the form state has changed."]}),e("p",{children:'A typical example is shown below.  The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field.'}),e(o,{Element:Ko,code:Jo,caption:"Changed",expand:!0,children:t("p",{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})})]}),Qo=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(h,{})]}),Xo=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default RequiredExample`,Zo=()=>t(i,{showRequired:!0,errorsInHeader:!1,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(ye,{}),e(h,{})]}),ei=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

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

export default ErrorsExample`,ti=()=>e(i,{children:e(li,{})}),li=()=>{const{setInvalidState:r}=C(),a=(E,b)=>{E.preventDefault(),r({error:b})};return t(f,{children:[e("button",{onClick:E=>a(E,"An error string"),children:"Error String"}),e("button",{onClick:E=>a(E,{message:"An error object"}),children:"Error Object"}),e("button",{onClick:E=>a(E,{label:"Example",message:"An error object"}),children:"Labelled Error"})]})},ri=`import { Form, useForm } from '../../../../../lib/index.js'

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

export default Error`,oi=()=>e(i,{children:e(ii,{})}),ii=()=>{const{setInvalidState:r}=C(),a=(b,Q)=>{b.preventDefault(),r({errors:Q})};return t(f,{children:[e("button",{onClick:b=>a(b,["A single error in errors"]),children:"Error String"}),e("button",{onClick:b=>a(b,["An error string","Another error string"]),children:"Error Strings"}),e("button",{onClick:b=>a(b,[{message:"An error object"},{message:"Another error object"}]),children:"Error Objects"}),e("button",{onClick:b=>a(b,[{label:"Example1",message:"An error object"},{label:"Example2",message:"Another error object"}]),children:"Labelled Errors"})]})},ni=`import { Form, useForm } from '../../../../../lib/index.js'

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

export default Errors`,ai=()=>t("div",{children:[e("h1",{children:"Errors"}),e("p",{children:"By default, validation errors will be displayed in the form header."}),e(o,{Element:Qo,code:Xo,caption:"Required Fields",expand:!0,children:e("p",{children:"Try submitting the form below without entering anything for either of the first two fields."})}),e("h2",{children:"errorsInHeader"}),t("p",{children:["If you don't want errors displayed in the header you can set the"," ",e("code",{children:"errorsInHeader"})," form property to ",e("code",{children:"false"}),".  You can use the ",e("code",{children:"Errors"})," component to display them somewhere else inside the form."]}),e(o,{Element:Zo,code:ei,caption:"Errors",expand:!0}),e("h2",{children:"error"}),t("p",{children:["The ",e(u,{})," context can include a single ",e("code",{children:"error"})," or an array of ",e("code",{children:"errors"}),`.  The first case is typically used when there's an error that doesn't relate to a specific field, e.g. "Invalid username or password".  The latter case is used when there are multiple errors, e.g. for different fields.`]}),t("p",{children:["Just to complicate matters, both ",e("code",{children:"error"})," and the elements in ",e("code",{children:"errors"})," can be either strings or objects containing a"," ",e("code",{children:"message"})," and other information about what field the error message relates to, including the field ",e("code",{children:"name"})," and"," ",e("code",{children:"label"}),"."]}),t("p",{children:["The ",e("code",{children:"Errors"})," component handles all these cases.  There are also some additional properties that you can set on the ",e(u,{})," to configure what gets displayed.  The ",e("code",{children:"errorsTitle"}),' can be defined as a function which takes the number of errors and returns an appropriate title.  The default function returns "Form Submission Error" if there is one error or "Form Submission Errors" if there are more than one.  The ',e("code",{children:"errorsPrompt"})," can also be defined to prompt the user to fix any ",e("code",{children:"errors"}),".  This also takes the number of ",e("code",{children:"errors"}),'.  The default function returns "Please correct this problem and re-submit:" or "Please correct these problems and re-submit:", depending on the number of errors.']}),t("p",{children:["This example includes some buttons that set the ",e("code",{children:"error"})," ","in the ",e(u,{})," to demonstrate the different combinations."]}),e(o,{Element:ti,code:ri,caption:"error"}),e("h2",{children:"errors"}),t("p",{children:["This example does a similar thing but sets multiple ",e("code",{children:"errors"}),"."]}),e(o,{Element:oi,code:ni,caption:"error"}),t("p",{children:["You can always implement your own component for displaying errors if you don't like the way this works.  Just be warned that there are the various different possibilities that need to be accounted for. You can use the ",e("code",{children:"useForm"})," function to get access to the form context which contains the ",e("code",{children:"error"})," and/or ",e("code",{children:"errors"}),"."]}),t("p",{children:["See the implementations of the"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Errors.jsx",children:"Errors"})," ","and"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Error.jsx",children:"Error"})," ","modules for a starting point."]})]}),di=`import { Form, Field, ResetSubmit, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit, Debug } from '@abw/react-formula'

const DebugForm = () =>
  <Form>
    <Field
      name="message"
      label="Message"
      placeholder="Enter a message"
      wide required
    />
    <Field
      name="animal"
      label="Animal"
      type="select"
      options={['Anteater', 'Badger', 'Camel']}
      placeholder="Select an animal"
      wide required
    />
    <Field
      name="terms"
      label="Terms and Conditions"
      type="checkbox"
      text="I agree to the Terms and Conditions"
      wide required
    />
    <ResetSubmit/>
    <Debug/>
  </Form>

export default DebugForm`,si=()=>t(i,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",wide:!0,required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",wide:!0,required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",wide:!0,required:!0}),e(g,{}),e(y,{})]}),ci=()=>t(i,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",wide:!0,required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",wide:!0,required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",wide:!0,required:!0}),e(g,{}),e(y,{values:!1,fields:!0,status:!0})]}),mi=`import { Form, Field, Debug, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit, Debug } from '@abw/react-formula'

const DebugStatus = () =>
  <Form>
    <Field
      name="message"
      label="Message"
      placeholder="Enter a message"
      wide required
    />
    <Field
      name="animal"
      label="Animal"
      type="select"
      options={['Anteater', 'Badger', 'Camel']}
      placeholder="Select an animal"
      wide required
    />
    <Field
      name="terms"
      label="Terms and Conditions"
      type="checkbox"
      text="I agree to the Terms and Conditions"
      wide required
    />
    <ResetSubmit/>
    <Debug
      values={false}
      fields={true}
      status={true}
    />
  </Form>

export default DebugStatus`,ui=`import { Form, Field, ResetSubmit, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit, Debug } from '@abw/react-formula'

const DebugAll = () =>
  <Form>
    <Field
      name="message"
      label="Message"
      placeholder="Enter a message"
      wide required
    />
    <Field
      name="animal"
      label="Animal"
      type="select"
      options={['Anteater', 'Badger', 'Camel']}
      placeholder="Select an animal"
      wide required
    />
    <Field
      name="terms"
      label="Terms and Conditions"
      type="checkbox"
      text="I agree to the Terms and Conditions"
      wide required
    />
    <ResetSubmit/>
    <Debug all/>
  </Form>

export default DebugAll`,hi=()=>t(i,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",wide:!0,required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",wide:!0,required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",wide:!0,required:!0}),e(g,{}),e(y,{all:!0})]}),pi=()=>t("div",{className:"prose",children:[e("h1",{children:"Debug"}),t(v,{align:"end",children:[t("p",{children:["The ",e("code",{children:"Debug"})," component can be used in development to debug your form.  By default it displays only the form values."]}),e("div",{className:"info alert border",children:"Try updating the form values and see how the debugging data changes."})]}),e(o,{Element:si,code:di,caption:"Debug"}),t("h2",{children:[e("code",{children:"values"})," and ",e("code",{children:"status"})]}),t("p",{children:["The ",e("code",{children:"status"})," option can be set to view the form status. The ",e("code",{children:"values"})," option defaults to ",e("code",{children:"true"})," but you can set it to ",e("code",{children:"false"})," if you don't want to view the current form values."]}),e(o,{Element:ci,code:mi,caption:"Status and Fields"}),e("h2",{children:e("code",{children:"all"})}),t("p",{children:["The ",e("code",{children:"all"})," option is a shortcut to show all form data."]}),e(o,{Element:hi,code:ui,caption:"All Data",expand:!0})]}),fi=()=>e(i,{children:t(l,{name:"field1",label:"Field One",help:"A help message",children:[r=>`Something before ${r.label}`,e(N,{}),r=>`Something after ${r.label}`]})}),bi=`import { Form, Field, Layout } from '../../../../lib/index.js'

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

export default LayoutExample`,Fi=()=>e(i,{children:e(l,{name:"field1",label:"Field One",help:"A help message",children:t(N,{children:[e(Y,{}),"Hello...",e($,{}),"...World!",e(z,{})]})})}),xi=`import { Form, Field, Layout, Label, Text, Message } from '../../../../lib/index.js'

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

export default LayoutExample`,Si=()=>t("div",{children:[e("h1",{children:"Layout"}),t("p",{children:["The ",e("code",{children:"Layout"})," component provides the default content for a"," ",e(s,{}),".  It renders a ",e("code",{children:"div"})," with the ",e("code",{children:"field"})," ","CSS class and any other classes relevant to the state of the field (e.g. ",e("code",{children:"focus"}),", ",e("code",{children:"valid"})," and/or ",e("code",{children:"invalid"}),")."]}),t("p",{children:["If you're defining your own field content and want to include all the usual elements then you can manually include it in a ",e(s,{}),"."]}),e(o,{Element:fi,code:bi,caption:"Layout",expand:!0}),t("p",{children:["The ",e("code",{children:"Layout"})," component renders a ",e(Te,{}),", one of the relevant ",e(x,{to:"/inputs",text:"input type components"})," based on the ",e(ve,{})," of the field, and the ",e(Re,{})," component."]}),t("p",{children:["You can manually include these inside a ",e(s,{})," and intersperse them with your own content."]}),e(o,{Element:Fi,code:xi,caption:"Layout Content",expand:!0})]}),gi=()=>e(i,{children:e(l,{name:"field1",label:"Field One",children:t("div",{className:"field",children:[e(Y,{}),e($,{})]})})}),Ei=`import { Form, Field, Text, Label } from '../../../../lib/index.js'

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

export default LabelExample`,wi=()=>t("div",{children:[e("h1",{children:"Label"}),t("p",{children:["The ",e("code",{children:"Label"})," component can be used to add a label to a"," ",e(s,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),e(o,{Element:gi,code:Ei,caption:"Label",expand:!0})]}),yi=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",help:"Additional help message",validMessage:"This is fine!",requiredMessage:"You must enter a value",required:!0,children:t(N,{children:[e(Y,{}),e($,{}),e(z,{})]})}),e(h,{})]}),Ti=`import { Form, Field, Layout, Label, Text, Message, Submit } from '../../../../lib/index.js'

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

export default MessageExample`,vi=()=>t("div",{children:[e("h1",{children:"Message"}),t("p",{children:["The ",e("code",{children:"Message"})," component is used to add a message underneath a ",e(s,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),t("p",{children:["If you have defined ",e("code",{children:"help"})," for your field then it will be displayed here.  If the field fails to validate then the validation error message will be displayed.  In this example we're setting an explicit ",e("code",{children:"requiredMessage"})," to override the default message. We're also setting a ",e("code",{children:"validMessage"})," to provide a custom message if the field is valid."]}),e(o,{Element:yi,code:Ti,caption:"Message",expand:!0})]}),Ri=()=>e(i,{children:t(l,{name:"hello",label:"Enter a greeting",children:[e(N,{}),e("div",{className:"info alert",children:e(Ne,{children:r=>`You have entered: ${r.value}`})})]})}),Ci=`import { Form, Field, Layout, UseField } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout, UseField } from '@abw/react-formula'

const UseFieldExample = () =>
  <Form>
    <Field
      name="hello"
      label="Enter a greeting"
    >
      <Layout/>
      <div className="info alert">
        <UseField>
          { field => \`You have entered: \${field.value}\`}
        </UseField>
      </div>
    </Field>
  </Form>

export default UseFieldExample`,Ni=()=>t("div",{children:[e("h1",{children:"UseField"}),t("p",{children:["The immediate ",e(Ce,{})," of a ",e(s,{})," component can be functions that will receive the field context as the first argument."]}),t("p",{children:["However, this only works for the immediate children of the ",e(s,{}),". If you want to include a function that is nested inside another element (e.g. inside a ",e("code",{children:"div"})," as shown in this example) then you can use the ",e("code",{children:"UseForm"})," component to provide it."]}),t("p",{children:["Don't forget that defining any children of a ",e(s,{})," component will override the default ",e(P,{})," component, so you'll need to add it manually or define your own layout for the field."]}),e(o,{Element:Ri,code:Ci,caption:"UseField",expand:!0})]}),qi=()=>t(j,{children:[e(n,{path:"",end:!0,element:e(ke,{})}),e(n,{path:"Form/*",element:e(xt,{})}),e(n,{path:"Field/*",element:e(yr,{})}),e(n,{path:"Fields",element:e(Mr,{})}),e(n,{path:"Fieldset",element:e(Kr,{})}),e(n,{path:"Submit",element:e(to,{})}),e(n,{path:"Reset",element:e(so,{})}),e(n,{path:"Cancel",element:e(po,{})}),e(n,{path:"CancelSubmit",element:e(vo,{})}),e(n,{path:"ResetSubmit",element:e(_o,{})}),e(n,{path:"CancelResetSubmit",element:e(Vo,{})}),e(n,{path:"Changed",element:e(zo,{})}),e(n,{path:"Errors",element:e(ai,{})}),e(n,{path:"Debug",element:e(pi,{})}),e(n,{path:"Layout",element:e(Si,{})}),e(n,{path:"Label",element:e(wi,{})}),e(n,{path:"Message",element:e(vi,{})}),e(n,{path:"UseField",element:e(Ni,{})})]});export{qi as default};
