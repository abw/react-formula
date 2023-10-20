import{a as e,a0 as te,j as t,T as Z,a1 as le,a2 as R,F as n,c as l,S as p,a3 as ie,a4 as oe,a5 as ne,e as h,N as re,E as o,D as S,a6 as y,a7 as ae,r as b,p as x,a8 as A,d as f,_ as $,$ as d,a9 as de,L as q,X as k,i as N,K as Q,R as v,Y as W,aa as se,C as ce,x as me,y as ue,ab as he,l as pe,A as fe,B as be,ac as Fe,m as T,M as ge,k as xe,ad as Se,ae as P,af as we,ag as Ee,Q as I,U as ye,ah as ve,ai as M,W as X,aj as U,G as w,g as z,ak as Te,Z as Re,al as Ce,w as G,o as Ne,u as ke,q as Oe,am as Y,an as Ae,ao as ee,ap as L,aq as j,f as C,ar as D,as as V,at as qe,t as Pe,H}from"./index-c5715447.js";import{S as c,a as m,c as O}from"./index.esm-898455a3.js";const Le=({children:i})=>e(te,{children:i}),De=()=>t("div",{children:[e("h1",{children:"Components"}),e("p",{className:"intro",children:"This section of the documentation provides detailed information about each of the components."}),e(Z,{menu:le})]}),je=()=>t("div",{children:[e("h1",{children:"Form"}),t("p",{children:["The ",e("code",{children:"Form"})," component is used to render a form. Inside the form you will typically have one or more"," ",e(R,{to:"/field",children:e("code",{children:"Field"})})," components to render the fields and a ",e(R,{to:"/form/submit",children:e("code",{children:"Submit"})})," ","component to add a submit button."]}),t("ul",{className:"menu",children:[e("li",{children:e(R,{to:"./properties",text:"Form properties"})}),t("li",{children:[e(R,{to:"./reset",children:e("code",{children:"Reset"})})," component to reset the form"]}),t("li",{children:[e(R,{to:"./submit",children:e("code",{children:"Submit"})})," component to submit the form"]}),t("li",{children:[t(R,{to:"./controls",children:["Controls combining ",e("code",{children:"Submit"})]})," component to submit the form"]})]})]}),Ve=()=>t(n,{fields:{name:{label:"Your name",required:!0},email:{label:"Your email address",required:!0}},children:[e(l,{name:"name"}),e(l,{name:"email"}),e(p,{})]}),Ie=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default FieldsExample`,Ye=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const FieldsExample = () =>
  <Form>
    <Field name="name" label="Your name" required/>
    <Field name="email" label="Your email address" required/>
    <Submit/>
  </Form>

export default FieldsExample`,u=({links:i})=>t("div",{className:"see-also",children:[e("h2",{children:"See Also"}),e("ul",{className:"menu",children:i.map(r=>e(Be,{to:r},r))})]}),Be=({to:i})=>{const r=ie[i]||oe(`Invalid SeeAlso link: ${i}`),{about:a}=r;return t("li",{children:[e(ne,{to:i}),!!a&&e("span",{className:"about",children:a})]})},$e=()=>t("div",{className:"prose",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"fields"})}),t("p",{children:["The ",e("code",{children:"fields"})," property allows you to define properties for form fields externally.  The ",e(h,{})," ",e(re,{})," property is used to associate a field to its definition."]}),e(o,{Element:Ve,code:Ie,caption:"fields",expand:!0}),t("p",{children:["This is the same as defining the properties on the ",e(h,{})," components."]}),e(S,{code:y(Ye),caption:"Inline Field",expand:!0}),t("p",{children:["The ",e("code",{children:"fields"})," definition can contain any number of fields, including those that aren't used by any particular form.  Only the fields that are referenced by a ",e(h,{})," component will be considered part of the form."]}),e("p",{children:"Although it requires a little more work to define fields externally, there are a number of benefits.  The first is that you're separating the field definition from the presentational markup.  When a form gets more complex it's usually easier to have them separated, particularly if you have more complicated validation functions attached to the fields."}),t("p",{children:["Another benefit is that you can share field definitions across multiple forms.  For example, you might want to define a single set of field definitions for all forms relating to user authentication: login, registration, password reset, and so on.  The ",e("code",{children:"email"})," ","field will be the same for each, so it makes sense to define it in one place."]})]}),Me=()=>t(n,{values:{name:"Bobby Badger",email:"bobby@badgerpower.com"},children:[e(l,{name:"name",label:"Name"}),e(l,{name:"email",label:"Email Address"}),e(p,{})]}),Ue=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default ValuesExample`,Ge=()=>t("div",{className:"prose",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"values"})}),t("p",{children:["The ",e("code",{children:"values"})," property can be used to pre-define values for fields in the form.  This is typically used when editing existing data records."]}),e(o,{Element:Me,code:Ue,caption:"fields",expand:!0}),e(u,{links:["form:hidden"]})]}),He=()=>t(n,{values:{name:"Bobby Badger",email:"bobby@badgerpower.com"},hidden:{user_id:12345},children:[e(l,{name:"name",label:"Name"}),e(l,{name:"email",label:"Email Address"}),e(p,{})]}),We=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default HiddenExample`,ze=()=>t("div",{className:"prose",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"hidden"})}),t("p",{children:["The ",e("code",{children:"hidden"})," property can be used to define hidden values for the form.  This is typically used to include identifiers when editing existing data records."]}),t("p",{children:["Any ",e("code",{children:"hidden"})," fields and their values will be included in the submitted data."]}),e(o,{Element:He,code:We,caption:"hidden",expand:!0}),e(u,{links:["form:values"]})]});const _e=()=>t(n,{classes:{required:"required red-bg"},showRequired:!0,children:[e(l,{name:"name",label:"Name",required:!0}),e(l,{name:"email",label:"Email Address"}),e(p,{})]}),Ke=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default ClassesExample`,Je=`.red-bg {
  color: white !important;
  background-color: #c44 !important;
  border-color: black !important;
}`,Ze=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"classes"})}),t("p",{children:["The ",e("code",{children:"classes"})," property can be used to change the"," ",e(ae,{})," used for different elements in a form."]}),e(o,{Element:_e,code:Ke,caption:"classes",expand:!0}),t("p",{children:["This is typically used in conjunction with your own custom stylesheet. For example, the ",e("code",{children:"red-bg"})," CSS class might be defined like this."]}),e(S,{code:Je,language:"css",caption:"Custom Stylesheet",expand:!0}),t("p",{children:["Note the use of the ",e("code",{children:"!important"})," modifier to increase the specificity of the rule in this example.  The alternative would be to fully qualify it, e.g as ",e("code",{children:".formula .field label .red-bg"}),"."]}),e(u,{links:["styling:css-classes"]})]}),Qe=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:"THIS IS TODO"}),t("pre",{children:["className:         FORMULA",e("br",{}),"errorsInHeader:    true",e("br",{}),"errorsInFooter:    false,",e("br",{}),"enctype:           application/x-www-form-urlencoded",e("br",{}),"method:            post",e("br",{}),"headerClass:       header",e("br",{}),"bodyClass:         body",e("br",{}),"footerClass:       footer",e("br",{}),"errorsClass:       errors",e("br",{}),"errorsTitle:       n => `Form Submission Error... errorPrompt:       Please correct this problem and re-submit:",e("br",{}),"errorsPrompt:      n => `Please correct these... submittingClass:   SUBMITTING,",e("br",{}),"validatingClass:   VALIDATING",e("br",{})]})]}),Xe=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetFocusExample`,et=()=>{const[i,r]=b.useState(!1);return t(x,{children:[t(n,{onLoad:r,children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",type:"textarea"}),e(l,{name:"field3",label:"Field Three",type:"checkbox",text:"One Louder"}),e(l,{name:"field4",label:"Field Four",type:"select",options:["Nigel","David","Derek"]}),e(l,{name:"field5",label:"Field Five",type:"radio",default:"Keyboards",className:"inline",options:["Vocals","Guitar","Bass","Keyboards","Drums"]})]}),t("div",{className:"formula",children:[e("button",{onClick:()=>i==null?void 0:i.setFocus("field1"),children:"Focus One"}),e("button",{onClick:()=>i==null?void 0:i.setFocus("field2"),children:"Focus Two"}),e("button",{onClick:()=>i==null?void 0:i.setFocus("field3"),children:"Focus Three"}),e("button",{onClick:()=>i==null?void 0:i.setFocus("field4"),children:"Focus Four"}),e("button",{onClick:()=>i==null?void 0:i.setFocus("field5"),children:"Focus Five"})]})]})},tt=`import { Form, Field, useForm } from '../../../../../lib/index.js'

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

export default UseFormFocus`,lt=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two"}),e(_,{name:"field1",caption:"Focus Field One"}),e(_,{name:"field2",caption:"Focus Field Two"})]}),_=({name:i,caption:r})=>{const{setFocus:a}=A();return e("button",{onClick:s=>{s.preventDefault(),a(i)},children:r})},it=`import { useForm } from '../../../../../lib/index.js'

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

export default FieldFocusButton`,ot=()=>t("div",{children:[e("h1",{children:"Focus Fields"}),e("h2",{children:e("code",{children:"setFocus()"})}),t("p",{children:["You can programmatically set the focus on a ",e(h,{})," by calling the ",e("code",{children:"setFocus()"})," method on the ",e(f,{}),", passing the name of the field that you want to focus as an argument."]}),t("p",{children:["You can capture a reference to the form using the ",e("code",{children:"onLoad"})," ","property to set a state variable, as shown in this example."]}),e(o,{Element:et,code:Xe,caption:"onLoad() and setFocus()",children:e("p",{children:"Click on one of the buttons to focus on a field."})}),t("p",{children:["If the buttons (or other controls) that you want to use to focus the fields are contained within the ",e(f,{})," then you can call the ",e("code",{children:"useForm()"})," function to gain access to the form context."]}),e(o,{Element:lt,code:tt,caption:"useForm() and setFocus()"}),t("p",{children:["Be careful to make sure that your buttons call"," ",e("code",{children:"e.preventDefault()"})," on the event, as shown in the example above, otherwise the form may be submitted.  Alternately you can pass the event to the ",e("code",{children:"setFocus()"})," method as the second argument and it will do it for you, as shown below."]}),e(S,{code:y(it),expand:!0})]}),nt=()=>t(n,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(p,{})]}),rt=`import { Form, Field, Submit } from '../../../../../../lib/index.js'

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

export default SubmitExample`,at=()=>t("div",{className:"prose",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"validate"})}),e("p",{className:"intro wide",children:"Validation can be applied on two levels: on individual fields and/or on the form."}),t(c,{children:[t("p",{children:["You can specify a field is ",e("code",{children:"required"}),", as shown here, or define your own custom ",e(R,{to:"/components/field/validation",text:"field validation"})," functions. When the form is submitted, each field will be validated.  If any validation errors occur then the form submission will be cancelled and the errors displayed."]}),e(m,{children:"Try entering some text in the fields below then click on the Submit button.  The first two fields are required so you can leave either of the them empty to see the validation errors."})]}),e(o,{Element:nt,code:rt,caption:"Required Fields",expand:!0}),t("p",{children:["You can also define a ",e("code",{children:"validate"})," function on the ",e(f,{}),". This will be run after any field validation and will be passed"]})]}),dt=()=>{const[i,r]=b.useState();return t(n,{onSubmit:a=>r(`foo was submitted as ${a.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(p,{}),i]})},st=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnSubmitExample`,ct=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onSubmit"})}),e("p",{children:"TODO"}),e(o,{Element:dt,code:st,caption:"onSubmit",expand:!0,children:e("p",{children:"TODO"})}),e(u,{links:["form:onSuccess","form:onError"]})]}),mt=()=>{const[i,r]=b.useState();return t(n,{onSubmit:a=>r(`foo was submitted as ${a.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(p,{}),i]})},ut=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnSuccessExample`,ht=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onSuccess"})}),e("p",{children:"TODO"}),e(o,{Element:mt,code:ut,caption:"onSuccess",expand:!0,children:e("p",{children:"TODO"})}),e(u,{links:["form:onSubmit","form:onError"]})]}),pt=()=>{const[i,r]=b.useState();return t(n,{onSubmit:a=>r(`foo was submitted as ${a.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(p,{}),i]})},ft=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnErrorExample`,bt=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onError"})}),e("p",{children:"TODO"}),e(o,{Element:pt,code:ft,caption:"onError",expand:!0,children:e("p",{children:"TODO"})}),e(u,{links:["form:onSubmit","form:onError"]})]}),Ft=`import { Form, Field } from '../../../../../../lib/index.js'

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

export default SetValues`,gt=()=>{const[i,r]=b.useState(),a=(s,F)=>i==null?void 0:i.setValues({color:s,animal:F});return t(x,{children:[t(n,{onLoad:r,children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"})]}),e("button",{onClick:()=>a("Grey","Elephant"),children:"Grey Elephant"}),e("button",{onClick:()=>a("Red","Fox"),children:"Red Fox"})]})},xt=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

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

export default UseSetValues`,St=()=>e(x,{children:t(n,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),e(K,{color:"Grey",animal:"Elephant"}),e(K,{color:"Red",animal:"Fox"})]})}),K=({color:i,animal:r})=>{const{setValues:a}=A();return t("button",{onClick:s=>{s.preventDefault(),a({color:i,animal:r},s)},children:[i," ",r]})},wt=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

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

export default UseSetValues`,Et=()=>e(x,{children:t(n,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),e(J,{color:"Grey",animal:"Elephant"}),e(J,{color:"Red",animal:"Fox"})]})}),J=({color:i,animal:r})=>{const{setValues:a}=A();return t("button",{onClick:s=>a({color:i,animal:r},s),children:[i," ",r]})},yt=()=>t("div",{children:[e("h1",{children:"Setting Form Values"}),e("h2",{children:"setValues()"}),t("p",{children:["The ",e("code",{children:"setValues"})," function can be used to programmatically set form values.  You can use the ",e("code",{children:"onLoad"})," handler to save a reference to the form context as show in this example."]}),e(o,{Element:gt,code:Ft,caption:"setValues",children:e("p",{children:"Click on one of the buttons to update the form values."})}),t("p",{children:["If you want to set the values from a component placed inside the"," ",e("code",{children:"Form"})," component then you can use ",e("code",{children:"useForm()"})," to get access to the form context."]}),e(o,{Element:St,code:xt,caption:"setValues"}),t("p",{children:["If you're using a ",e("code",{children:"button"})," to trigger the call to"," ",e("code",{children:"setValues()"}),", as shown in the example above, then you need to make sure you call ",e("code",{children:"e.preventDefault()"})," event.  Otherwise the form may be submitted. Alternately you can pass the event as the second argument to the ",e("code",{children:"setValues()"})," method as shown below and it will do it for you."]}),e(o,{Element:Et,code:wt,caption:"setValues"})]}),vt=()=>t($,{children:[e(d,{path:"",end:!0,element:e(je,{})}),e(d,{path:"fields",element:e($e,{})}),e(d,{path:"values",element:e(Ge,{})}),e(d,{path:"hidden",element:e(ze,{})}),e(d,{path:"classes",element:e(Ze,{})}),e(d,{path:"properties",element:e(Qe,{})}),e(d,{path:"setfocus",element:e(ot,{})}),e(d,{path:"validate",element:e(at,{})}),e(d,{path:"onSubmit",element:e(ct,{})}),e(d,{path:"onSuccess",element:e(ht,{})}),e(d,{path:"onError",element:e(bt,{})}),e(d,{path:"set/*",element:e(yt,{})})]}),Tt=`import { Form, Field } from '../../../../lib/index.js'

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

export default FieldExample`,Rt=()=>e(n,{children:e(l,{name:"example",label:"An Example Field",type:"text",required:!0})}),Ct=()=>t(x,{children:[e("h1",{children:"Field Component"}),t("p",{className:"intro",children:["The ",e("code",{children:"Field"})," component is used to render a field inside a ",e(f,{}),"."]}),e(o,{Element:Rt,code:Tt,caption:"Field",expand:!0}),e(Z,{menu:de})]}),Nt=`import { Form, Field, Layout } from '@/lib/index.js'

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

export default ChildFunctions`,kt=()=>e(n,{children:t(l,{name:"greeting",label:"Enter a greeting",children:[i=>t("h2",{className:"mar-t-none",children:["The ",i.name," field"]}),e(q,{}),i=>t(x,{children:[t("div",{children:["Current value is: ",i.value]}),t("div",{className:"flex gap-2 blue mar-t-4",children:[e("button",{type:"button",onClick:()=>i.setValue("Foo"),children:"Foo"}),e("button",{type:"button",onClick:()=>i.setValue("Bar"),children:"Bar"})]})]})]})}),Ot=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"children"})}),e("p",{children:"You can define children of a field, either as components or functions. Component can access the field context Functions receive the field context as the first argument."}),t("p",{children:["Note that if you define children for the field then it will replace the default ",e(k,{})," component.  In this case it's up to you to render the field content."]}),t("p",{children:["If you want to include the default layout for a field and add some content of your own then you can include the ",e(k,{})," component manually."]}),e(o,{Element:kt,code:Nt,caption:"suffix",expand:!0})]}),At=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default HelpExample`,qt=()=>t(n,{children:[e(l,{name:"email",label:"Email Address",help:"Enter the email address that you registered with",required:!0}),e(p,{})]}),Pt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"help"})}),t(c,{align:"end",children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"help"})," property can be used to define some additional help for the user.  By default it is displayed underneath the field input."]}),e("p",{children:"If the field input fails to validate then the validation error message will be displayed in its place."})]}),e(m,{children:"Try submitting the form without entering any value.  You should see the help message replaced by the validation error."})]}),e(o,{Element:qt,code:At,caption:"help"}),e(u,{links:["field:name","field:label","field:required","field:validate","form:fields"]})]}),Lt=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Hello World!"/>
  </Form>

export default LabelExample`,Dt=()=>e(n,{children:e(l,{name:"field1",label:"Hello World!"})}),jt=`import { Form, Field } from '@/lib/index.js'

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

export default FormFieldsExample`,Vt={field1:{label:"This is field one"},field2:{label:"This is field two"}},It=()=>t(n,{fields:Vt,children:[e(l,{name:"field1"}),e(l,{name:"field2",label:"A different label"})]}),Yt=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"label"})}),t("p",{children:["Add a label to the field with the ",e("code",{children:"label"})," property."]}),e(o,{Element:Dt,code:Lt,caption:"name",expand:!0}),t(c,{children:[t("p",{children:["Like all other field properties, they can be defined via ",e(N,{})," ","on the ",e(f,{}),".  If you explicitly set a ",e("code",{children:"label"})," on the"," ",e(h,{})," then it will take precedence."]}),t(m,{children:["Note how the first field has the ",e("code",{children:"label"})," defined in the"," ",e(N,{})," but the second defines its own ",e("code",{children:"label"})," ","which is used instead of the one defined in the ",e(N,{}),"."]})]}),e(o,{Element:It,code:jt,caption:"Form fields",expand:!0}),e(u,{links:["field:name","form:fields"]})]}),Bt=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const NameExample = () =>
  <Form>
    <Field name="field1"/>
    <Submit/>
  </Form>

export default NameExample`,$t=()=>t(n,{children:[e(l,{name:"field1"}),e(p,{})]}),Mt=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

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
  </Form>

export default FormFieldsExample`,Ut={field1:{label:"This is field one",required:!0}},Gt=()=>t(n,{fields:Ut,children:[e(l,{name:"field1"}),e(p,{})]}),Ht=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"name"})}),t(c,{children:[t("p",{children:["The ",e("code",{children:"name"})," is the only required property for a ",e(h,{}),". It is used as the key to set the ",e(f,{})," value."]}),t(m,{children:["Enter some text in the input field.  The ",e(Q,{}),` component is included in this example to show the form data as it's being set.  Click on the "Submit" button and you'll see an alert showing the data that would be submitted.`]})]}),e(o,{Element:$t,code:Bt,caption:"name",expand:!0}),t(c,{children:[t("p",{children:["You can set the ",e(N,{})," property on the ",e(f,{})," as an object containing additional properties for each field.  The"," ",e("code",{children:"name"})," is used as the key to fetch those properties. Any properties explicitly set on the ",e(h,{})," will override them."]}),t(m,{children:["Note how the ",e(h,{})," has now got a ",e("code",{children:"label"})," and the"," ",e(v,{})," property is set."]})]}),e(o,{Element:Gt,code:Mt,caption:"Form fields",expand:!0}),e(u,{links:["field:label","form:fields"]})]}),Wt=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const TypeExample = () =>
  <Form>
    <Field
      name="field1"
      label="Text Field"
      wide
    />
    <Field
      name="field2"
      type="textarea"
      label="TextArea Field"
      wide
    />
    <Field
      name="field3"
      type="number"
      label="Number Field"
      wide
    />
    <Field
      name="field4"
      type="date"
      label="Date Field"
      wide
    />
    <Field
      name="field5"
      type="select"
      label="Select Field"
      options={['Badger', 'Ferret', 'Stoat']}
      wide
    />
    <Field
      name="field6"
      type="radio"
      label="Radio Button Field"
      options={['No', 'Maybe', 'Yes']}
    />
    <Field
      name="field7"
      type="checkbox"
      label="Checkbox Field"
      text="I like badgers"
    />
  </Form>

export default TypeExample`,zt=()=>t(n,{children:[e(l,{name:"field1",label:"Text Field",wide:!0}),e(l,{name:"field2",type:"textarea",label:"TextArea Field",wide:!0}),e(l,{name:"field3",type:"number",label:"Number Field",wide:!0}),e(l,{name:"field4",type:"date",label:"Date Field",wide:!0}),e(l,{name:"field5",type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"],wide:!0}),e(l,{name:"field6",type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]}),e(l,{name:"field7",type:"checkbox",label:"Checkbox Field",text:"I like badgers"})]}),_t=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const fields = {
  field1: {
    label:   'Text Field',
  },
  field2: {
    type:    'textarea',
    label:   'TextArea Field',
  },
  field3: {
    type:    'number',
    label:   'Number Field',
  },
  field4: {
    type:    'date',
    label:   'Date Field',
  },
  field5: {
    type:    'select',
    label:   'Select Field',
    options: ['Badger', 'Ferret', 'Stoat']
  },
  field6: {
    type:    'radio',
    label:   'Radio Button Field',
    options: ['No', 'Maybe', 'Yes']
  },
  field7: {
    type:    'checkbox',
    label:   'Checkbox Field',
    text:    'I like badgers'
  },
}

const FormFieldsExample = () =>
  <Form fields={fields}>
    <Field name="field1" wide/>
    <Field name="field2" wide/>
    <Field name="field3" wide/>
    <Field name="field4" wide/>
    <Field name="field5" wide/>
    <Field name="field6"/>
    <Field name="field7"/>
  </Form>

export default FormFieldsExample`,Kt={field1:{label:"Text Field"},field2:{type:"textarea",label:"TextArea Field"},field3:{type:"number",label:"Number Field"},field4:{type:"date",label:"Date Field"},field5:{type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"]},field6:{type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]},field7:{type:"checkbox",label:"Checkbox Field",text:"I like badgers"}},Jt=()=>t(n,{fields:Kt,children:[e(l,{name:"field1",wide:!0}),e(l,{name:"field2",wide:!0}),e(l,{name:"field3",wide:!0}),e(l,{name:"field4",wide:!0}),e(l,{name:"field5",wide:!0}),e(l,{name:"field6"}),e(l,{name:"field7"})]}),Zt=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"type"})}),t(c,{align:"end",children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"type"})," property specifies what kind of input should be displayed.  The default value is ",e("code",{children:"text"})," corresponding to the ",e(W,{})," input component.  Other values can be"," ",e("code",{children:"textarea"})," (see ",e(se,{}),"),"," ",e("code",{children:"checkbox"})," (see ",e(ce,{}),"),"," ",e("code",{children:"radio"})," (see ",e(me,{}),"),"," ",e("code",{children:"select"})," (see ",e(ue,{}),") and"," ",e("code",{children:"hidden"})," (see ",e(he,{}),") corresponding to the basic HTML input types."]}),t("p",{children:["You can also set ",e("code",{children:"type"})," to be one of the other valid HTML input types, e.g. ",e("code",{children:"password"}),", ",e("code",{children:"email"}),","," ",e("code",{children:"number"}),", ",e("code",{children:"date"}),", ",e("code",{children:"color"}),", and so on.  These use the same basic ",e(W,{})," input component as for ",e("code",{children:"text"})," types, but with the ",e("code",{children:"type"})," attribute set appropriately to use the browser-specific functionality."]})]}),e(m,{children:"Enter some text in the input fields below. Note how the number field uses the browser's built-in functionality to accept only numbers, and the date field provides a date picker."})]}),e(o,{Element:zt,code:Wt,caption:"type",expand:!0}),t(c,{children:[t("p",{children:["As with all other ",e(h,{})," properties, they can be defined using"," ",e(N,{})," set on the ",e(f,{}),". The benefit of this approach is that it keeps the field definitions and markup separate.  As well as making them easier to read and maintain, it also has the benefit that field definitions can be reused across multiple forms."]}),t(m,{children:["The example below generates exactly the same form as the one above (with the exception of the additional ",e(Q,{})," component). Note that the form data will only include fields that are present in the ",e(f,{}),".  The ",e("code",{children:"field5"})," field definition is effectively ignored."]})]}),e(o,{Element:Jt,code:_t,caption:"Form fields",expand:!0}),e(u,{links:["field:name","field:label","form:fields","input:types"]})]}),Qt=`import { Form, Field } from '@/lib/index.js'

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

export default PlaceholderExample`,Xt=()=>e(n,{children:e(l,{name:"name",label:"Your Name",placeholder:"Enter your name"})}),el=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"placeholder"})}),t("p",{children:["Use the ",e("code",{children:"placeholder"})," property to add some text as a placeholder in the input."]}),e(o,{Element:Xt,code:Qt,caption:"placeholder",expand:!0}),e(u,{links:["field:name","form:fields"]})]}),tl=`import { Form, Field } from '@/lib/index.js'

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

export default PrefixExample`,ll=()=>e(n,{children:e(l,{name:"money",type:"number",label:"Price",prefix:"$"})}),il=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"prefix"})}),t("p",{children:["You can add a ",e("code",{children:"prefix"})," to a ",e("code",{children:"text"})," field or any of the other types using the basic text input, e.g."," ",e("code",{children:"money"}),", ",e("code",{children:"date"}),", etc."]}),e(o,{Element:ll,code:tl,caption:"prefix",expand:!0}),e(u,{links:["field:suffix"]})]}),ol=`import { Form, Field } from '@/lib/index.js'

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

export default SuffixExample`,nl=()=>e(n,{children:e(l,{name:"suffix",type:"password",label:"Enter your password",suffix:"🔒"})}),rl=`import { Form, Field } from '@/lib/index.js'

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

export default PrefixSuffixExample`,al=()=>e(n,{children:e(l,{name:"money",type:"number",label:"Field with both prefix and suffix",prefix:"$",suffix:".00"})}),dl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"suffix"})}),t("p",{children:["You can add a ",e("code",{children:"suffix"})," to a field"]}),e(o,{Element:nl,code:ol,caption:"suffix",expand:!0}),t("p",{children:["You can add both a ",e("code",{children:"prefix"})," and a ",e("code",{children:"suffix"}),"."]}),e(o,{Element:al,code:rl,caption:"prefix and suffix",expand:!0}),e(u,{links:["field:prefix"]})]}),sl=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Wide = () =>
  <Form>
    <Field
      name="regular"
      label="Regular Field"
    />
    <Field
      name="wide"
      label="Wide Field"
      wide
    />
    <Field
      name="wide-textarea"
      type="textarea"
      label="Wide Text Area Field"
      wide
    />
  </Form>

export default Wide`,cl=()=>t(n,{children:[e(l,{name:"regular",label:"Regular Field"}),e(l,{name:"wide",label:"Wide Field",wide:!0}),e(l,{name:"wide-textarea",type:"textarea",label:"Wide Text Area Field",wide:!0})]}),ml=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"wide"})}),t("p",{children:["The default behaviour is for fields to be fluid in width. You can add the ",e("code",{children:"wide"})," property to make it expand to the full width of the container."]}),e(o,{Element:cl,code:sl,caption:"wide",expand:!0})]}),ul={alice:!0,bob:!0,charlie:!0},hl={username:{label:"Username",help:"Choose a username (minimum length: 3)",validateOnChange:!0,minValidateLength:3,validate:(i,r,a,s)=>{i.length<3&&s({message:"Your username must be at least 3 characters"}),ul[i.toLowerCase()]?s({message:"Sorry, that username is taken"}):a({message:"That username is available"})}}},pl=()=>t(n,{fields:hl,children:[e(l,{name:"username"}),e(p,{})]}),fl=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default MinValidateLengthExample`,bl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"minValidateLength"})}),t(c,{children:[t("p",{children:["You can set the ",e(pe,{})," property flag to enable validation any time the field value changes.  The"," ",e("code",{children:"minValidateLength"})," property can be set to only trigger validation when the input length exceeds a threshold."]}),t(m,{children:["Enter a username in the form below.  The usernames ",e("code",{children:"alice"}),",",e("code",{children:"bob"})," and ",e("code",{children:"charlie"})," will return a validation error saying that they're not available.  There's a minimum length for a username so we wait until at least three characters have been entered before checking to see if the username is available.  Note that the validation will also be triggered when the form is submitted, regardless of how many characters have been entered.  For that reason the validation function also rejects any username that is too short."]})]}),e(o,{Element:pl,code:fl,caption:"minValidateLength"}),e(u,{links:["field:required","field:validate","field:validateOnBlur","field:validateOnChange"]})]}),Fl=`import { Form, Field } from '@/lib/index.js'

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

export default OptionalLabel`,gl=()=>t(n,{showOptional:!0,optionalLabel:"Not required",children:[e(l,{name:"field1",label:"Optional Field",wide:!0}),e(l,{name:"field2",label:"Another Optional Field",optionalLabel:"Nice to have",wide:!0})]}),xl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"optionalLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"optionalLabel"})," property to change the label that is display for optional fields (i.e. those that aren't marked as ",e(v,{}),") that have the"," ",e(fe,{})," option set.  You can set it on individual"," ",e(h,{})," components or on the parent ",e(f,{})," to act as a default for all fields."]}),e(o,{Element:gl,code:Fl,caption:"optionalLabel",expand:!0}),e(u,{links:["field:required","field:showRequired","field:showOptional","field:requiredLabel"]})]}),Sl=`import { Form, Field } from '@/lib/index.js'

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

export default PrepareValue`,wl={upper:{label:"Converted to UPPER CASE",prepareValue:i=>i.toUpperCase()}},El=()=>e(n,{fields:wl,children:e(l,{name:"upper"})}),yl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"prepareValue"})}),t(c,{children:[t("p",{children:["You can add a ",e("code",{className:"code",children:"prepareValue"})," function to a ",e(h,{})," to prepare the value before it's set."]}),e(m,{children:"Try entering some letters in the field below.  You should see that they get converted to upper case."})]}),e(o,{Element:El,code:Sl,caption:"onChange",expand:!0}),e(u,{links:["field:validate","field:validateOnBlur","field:validateOnChange"]})]}),vl=()=>t(n,{children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(p,{})]}),Tl=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const Required = () =>
  <Form>
    <Field name="field1" label="Required Field" required/>
    <Submit/>
  </Form>

export default Required`,Rl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"required"})}),t(c,{align:"end",children:[t("p",{children:["You can add a ",e("code",{children:"required"})," property to a field to mark it as being required.  This automatically adds a validator to the field to ensure that a value is provided when the form is submitted."]}),e(m,{children:"Try submitting the form without entering anything in the field input."})]}),e(o,{Element:vl,code:Tl,caption:"required",expand:!0}),e(u,{links:["field:showRequired","field:requiredLabel","field:requiredMessage","field:validateOnBlur","field:validateOnChange"]})]}),Cl=`import { Form, Field } from '@/lib/index.js'

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

export default RequiredLabel`,Nl=()=>t(n,{showRequired:!0,requiredLabel:"Important!",children:[e(l,{name:"field1",label:"Required Field",required:!0,wide:!0}),e(l,{name:"field2",label:"Another Required Field",requiredLabel:"Very Important!",required:!0,wide:!0})]}),kl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredLabel"})," property to change the label that is displayed for ",e(v,{})," fields that have the ",e(be,{})," option enabled.  You can set it on individual ",e(h,{})," components or on the parent ",e(f,{}),"."]}),e(o,{Element:Nl,code:Cl,caption:"requiredLabel",expand:!0}),e(u,{links:["field:required","field:showRequired","field:showOptional","field:optionalLabel"]})]}),Ol=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default RequiredLabel`,Al=()=>t(n,{requiredMessage:"Nothing will come of nothing",children:[e(l,{name:"foo",label:"Foo",required:!0}),e(l,{name:"bar",label:"Bar",required:!0,requiredMessage:"You really MUST enter a value"}),e(p,{})]}),ql=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredMessage"})}),t(c,{align:"end",children:[t("div",{children:[t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredMessage"})," property to change the error message that is generated for ",e(v,{})," fields that aren't completed."]}),t("p",{children:["You can set it on individual ",e(h,{})," components or on the parent"," ",e(f,{})," to act as the default for all fields."]})]}),t(m,{children:["Try submitting the form without entering any values.  You should see the form-wide ",e("code",{children:"requiredMessage"})," displayed for the first field, and the field-specific value for the second."]})]}),e(o,{Element:Al,code:Ol,caption:"requiredMessage",expand:!0}),e(u,{links:["field:required","field:showRequired","field:requiredLabel","field:validateOnChange","field:validateOnBlur"]})]}),Pl=()=>t(n,{showOptional:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0,wide:!0}),e(l,{name:"field2",label:"Optional Field",wide:!0})]}),Ll=`import { Form, Field } from '@/lib/index.js'

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

export default ShowOptional`,Dl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showOptional"})}),t("p",{children:["If a field is ",e("b",{children:"NOT"})," marked as ",e(v,{})," then it is optional. If you set the ",e("code",{children:"showOptional"})," property then it will add an additional label to a field to indicate that it's optional.  You can set the property on individual ",e(h,{})," components or on the parent ",e(f,{})," to act as a default for all fields."]}),t("p",{children:["You can use the ",e(Fe,{})," property to change the text of the label that is displayed."]}),e(o,{Element:Pl,code:Ll,caption:"showOptional",expand:!0}),e(u,{links:["field:required","field:optionalLabel","field:showRequired","field:requiredLabel"]})]}),jl=()=>t(n,{children:[e(l,{name:"field1",label:"Required Field",required:!0,showRequired:!0,wide:!0}),e(l,{name:"field2",label:"Optional Field",wide:!0})]}),Vl=`import { Form, Field } from '@/lib/index.js'

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

export default ShowRequired`,Il=()=>t(n,{showRequired:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0,wide:!0}),e(l,{name:"field2",label:"Optional Field",wide:!0})]}),Yl=`import { Form, Field } from '@/lib/index.js'

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

export default ShowRequiredForm`,Bl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showRequired"})}),t("p",{children:["If a ",e(h,{})," is marked as ",e(v,{})," then the"," ",e("code",{children:"showRequired"})," property can be added to have an additional label displayed indicating that it is required."]}),e(o,{Element:jl,code:Vl,caption:"showRequired on Field",expand:!0}),t("p",{children:["The ",e("code",{children:"showRequired"})," property can also be added to the"," ",e(f,{})," to have it apply to all ",e(v,{})," fields."]}),e(o,{Element:Il,code:Yl,caption:"showRequired on Form",expand:!0}),e(u,{links:["field:required","field:requiredLabel","field:showOptional","field:optionalLabel"]})]}),$l={username:{label:"Username",help:"Enter your username",validate:i=>O().trim().required("You must enter your username you numpty!").validate(i)},password:{label:"Password",type:"password",help:"Enter your password",validate:i=>O().trim().required("You must enter your password you muppet!").validate(i)}},Ml=()=>t(n,{fields:$l,children:[e(T,{names:"username password",wide:!0}),e(p,{})]}),Ul=`import { Form, Fields, Submit } from '@/lib/index.js'

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

export default ValidateExample`,Gl={username:{label:"Username",help:"Enter your username",validate:async(i,r,a,s)=>{i.match(/badger/i)?a({value:`${i} is a great name`}):s({value:"Mr Badger",message:'Your username must contain the word "badger"'})}}},Hl=()=>t(n,{fields:Gl,children:[e(l,{name:"username"}),e(p,{})]}),Wl=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default ValidateExample`,zl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validate"})}),t(c,{align:"end",children:[t("div",{children:[t("p",{children:["You can use the ",e(v,{})," property to mark a field as being required, but it's a blunt instrument.  All it will do is check that a field has some value entered. For more robust validation you can use the ",e("code",{children:"validate"})," property to define an ",e("code",{children:"async"})," ","validation function."]}),t("p",{children:["In this example we're using"," ",e("a",{href:"https://www.npmjs.com/package/yup",children:"Yup"})," but you can use anything you like.  It should return the validated value on success or throw an error if the valid is invalid."]})]}),e(m,{children:"Try submitting the form without entering any values for either of the fields. You should see the custom validation errors."})]}),e(o,{Element:Ml,code:Ul,caption:"validate"}),t(c,{align:"end",children:[t("p",{children:[e("h3",{children:"NOTE: this may change"}),"The ",e("code",{children:"validate"})," function is passed four arguments.  The first is the field value for common cases where that's all you need to determine if the field is valid.  The second argument is the field context containing everything you need to know about the field state and callable actions to change it.  The third and fourth arguments are"," ",e("code",{children:"resolve"})," and ",e("code",{children:"reject"})," functions which can be called to validate or invalidate the field, respectively.  The"," ",e("code",{children:"resolve"})," function should be passed an object containing the ",e("code",{children:"value"}),", which may be modified by your function. The ",e("code",{children:"reject"})," function should be passed an object containing an error ",e("code",{children:"message"}),", and optionally a new ",e("code",{children:"value"})," ","for the field."]}),e(m,{children:'In this somewhat contrived example we require the user to enter a username containing the word "badger".'})]}),e(o,{Element:Hl,code:Wl,caption:"validate"}),e(u,{links:["field:required","field:validateOnChange","field:validateOnBlur"]})]}),_l={username:{label:"Username",help:"Enter your username",validate:i=>O().trim().required("You must enter your username you numpty!").validate(i)},password:{label:"Password",type:"password",help:"Enter your password",validate:i=>O().trim().required("You must enter your password you muppet!").validate(i)}},Kl=()=>t(n,{fields:_l,validateOnBlur:!0,children:[e(T,{names:"username password"}),e(p,{})]}),Jl=`import { Form, Fields, Submit } from '@/lib/index.js'

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

export default ValidateExample`,Zl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnBlur"})}),t(c,{children:[t("p",{children:["The ",e("code",{children:"validateOnBlur"})," property can be set to trigger validation whenever a field is blurred.  You can set it on individual"," ",e(h,{})," components or on the parent ",e(f,{})," to have it apply to all fields."]}),e(m,{children:"Try switching focus from one field to another without entering anything.  You should see the custom validation errors when each field is blurred."})]}),e(o,{Element:Kl,code:Jl,caption:"validate"}),e(u,{links:["field:required","field:validate","field:validateOnChange"]})]}),Ql=`import { Form, Field } from '@/lib/index.js'

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

export default ValidateOnChangeExample`,Xl={vowels:{label:"Vowels",help:"Enter between 3 and 5 vowels",validateOnChange:!0,minValidateLength:3,validate:i=>O().trim().matches(/^[^y]*$/i,"Sorry, but y is not allowed").matches(/^[aeiou]*$/i,"You should only type vowels").min(3,"You must enter at least three vowels").max(5,"You should not enter more than 5 vowels").validate(i)}},ei=()=>e(n,{fields:Xl,children:e(l,{name:"vowels"})}),ti=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnChange"})}),t(c,{children:[t("p",{children:["You can set the ",e("code",{children:"validateOnChange"})," flag to enable validation any time the field value changes.  The ",e(ge,{})," property can be set to only trigger validation when the input length exceeds a threshold."]}),e(m,{children:"Enter some text in the field below.  Once you've entered three letters the validation will kick in.  You should see an error if you enter any letters that aren't vowels."})]}),e(o,{Element:ei,code:Ql,caption:"validateOnChange"}),e(u,{links:["field:required","field:validate","field:validateOnBlur","field:minValidateLength"]})]}),li=()=>{const[i,r]=b.useState(),a=s=>r(`${s.label} was blurred`);return t(n,{children:[e(l,{name:"foo",label:"The Foo Field",onBlur:a}),e(l,{name:"bar",label:"The Bar Field",onBlur:a}),i]})},ii=`import { Form, Field } from '@/lib/index.js'

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
export default OnBlurExample`,oi=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onBlur"})}),t(c,{children:[t("p",{children:["You can add an ",e("code",{children:"onBlur"})," handler to a ",e(h,{})," ","which will be called when the field is blurred (i.e. unselected). The field context will be passed as an argument."]}),e(m,{children:"Focus on one of the fields below and then select the other field. A message should be displayed each time a field loses focus."})]}),e(o,{Element:li,code:ii,caption:"onFocus",expand:!0}),e(u,{links:["field:validateOnBlur","field:onFocus","field:onChange","field:onValid","field:onInvalid"]})]}),ni=`import { Form, Field } from '@/lib/index.js'

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

export default OnChangeExample`,ri=()=>{const[i,r]=b.useState("");return t(n,{children:[e(l,{name:"example",label:"Field with onChange",onChange:a=>r(a.value)}),"Current value: ",i]})},ai=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onChange"})}),t(c,{children:[t("p",{children:["You can add an ",e("code",{children:"onChange"})," handler to a ",e(h,{})," ","which will be called when the field value is changed.  The field context will be passed as an argument."]}),e(m,{children:'Try entering some text in the field below.  You should see the "Current value" display update to reflect the field content.'})]}),e(o,{Element:ri,code:ni,caption:"onChange",expand:!0}),e(u,{links:["field:validateOnChange","field:onBlur","field:onFocus","field:onValid","field:onInvalid"]})]}),di=()=>{const[i,r]=b.useState(),a=s=>r(`${s.label} was focussed`);return t(n,{children:[e(l,{name:"foo",label:"The Foo Field",onFocus:a}),e(l,{name:"bar",label:"The Bar Field",onFocus:a}),i]})},si=`import { Form, Field } from '@/lib/index.js'

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

export default OnFocusExample`,ci=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onFocus"})}),t(c,{children:[t("p",{children:["You can add an ",e("code",{children:"onFocus"})," handler to a ",e(h,{})," ","which will be called when the field is focussed (i.e. selected). The field context will be passed as an argument."]}),e(m,{children:"Focus on each of the fields below.  A message should be displayed each time a field gains focus."})]}),e(o,{Element:di,code:si,caption:"onFocus",expand:!0}),e(u,{links:["field:onBlur","field:onChange","field:onValid","field:onInvalid"]})]}),mi=()=>{const[i,r]=b.useState(),a=s=>r(`${s.label} is invalid: ${s.message}`);return t(n,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onInvalid:a}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:a,requiredMessage:"You must enter a value"}),i]})},ui=`import { Form, Field } from '@/lib/index.js'

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

export default OnInvalidExample`,hi=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onInvalid"})}),t(c,{children:[t("p",{children:["You can add an ",e("code",{children:"onInvalid"})," handler to a ",e(h,{})," ","which will be called when the field fails validation. The field context will be passed as an argument."]}),t(m,{children:[t("p",{children:["Click one of the fields below and then select the other field without entering any text. The ",e(xe,{})," option on the"," ",e(f,{})," "," means that the fields will be validated when they lose focus. They're both marked as ",e(v,{})," so they will fail validation (assuming you haven't entered anything) and the ",e("code",{children:"onInvalid"})," handler will be called."]}),t("p",{children:["Also note the use of ",e(Se,{})," to set a custom message for the second field."]})]})]}),e(o,{Element:mi,code:ui,caption:"onInvalid",expand:!0}),e(u,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onValid"]})]}),pi=()=>{const[i,r]=b.useState();return t(n,{children:[e(l,{name:"foo",label:"Foo Field",onLoad:r,wide:!0}),t("div",{className:"grid-4 gap-2",children:[e("button",{type:"button",onClick:()=>i.reset(),children:"Reset"}),e("button",{type:"button",onClick:()=>i.setValue("Hello"),children:"Hello"}),e("button",{type:"button",onClick:()=>i.setValue("Goodbye"),children:"Goodbye"}),e("button",{type:"button",onClick:()=>i.setFocus(),children:"Focus"})]})]})},fi=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnLoadExample = () => {
  const [field, setField] = useState()

  return (
    <Form>
      <Field
        name="foo"
        label="Foo Field"
        onLoad={setField}
        wide
      />
      <div className="grid-4 gap-2">
        <button
          type="button"
          onClick={() => field.reset()}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => field.setValue('Hello')}
        >
          Hello
        </button>
        <button
          type="button"
          onClick={() => field.setValue('Goodbye')}
        >
          Goodbye
        </button>
        <button
          type="button"
          onClick={() => field.setFocus()}
        >
          Focus
        </button>
      </div>
    </Form>
  )
}

export default OnLoadExample`,bi=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onLoad"})}),t(c,{children:[t("p",{children:["You can add an ",e("code",{children:"onInvalid"})," handler to a ",e(h,{})," ","which will be called when the field is initialised.  This is useful if you want to programmatically control the field."]}),e(m,{children:"Click on the buttons to programmatically call field methods. The first resets the field, the next two set the field value, and the last one focusses the field."})]}),e(o,{Element:pi,code:fi,caption:"onLoad"}),e(u,{links:["field:onBlur","field:onFocus","field:onChange","field:onValid","field:setFocus"]})]}),Fi=()=>{const[i,r]=b.useState();return t(n,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onValid:a=>r(`${a.name} is valid: ${a.value}`)}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:a=>r(`${a.name} is valid: ${a.value}`)}),i]})},gi=`import { Form, Field } from '@/lib/index.js'

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

export default OnValidExample`,xi=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onValid"})}),t(c,{children:[t("p",{children:["You can add an ",e("code",{children:"onValid"})," handler to a ",e(h,{})," ","which will be called when the field is successfully validated. The field context will be passed as an argument."]}),t(m,{children:["Enter some text in one of the fields below and then select the other field.  The ",e("code",{children:"validateOnBlur"})," option on the ",e(f,{})," ","means that the first field will be validated when it loses focus and the ",e("code",{children:"onValid"})," handler will be called."]})]}),e(o,{Element:Fi,code:gi,caption:"onValid",expand:!0}),e(u,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onInvalid"]})]}),Si=`import { Form, Field } from '@/lib/index.js'

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
          name="field1"
          label="Field One"
          wide
        />
        <Field
          onLoad={setField2}
          value="Initial value"
          name="field2"
          label="Field Two"
          wide
        />
      </Form>
      <div className="flex gap-4">
        <button
          className="blue"
          onClick={field1.reset}
        >
          Reset Field One
        </button>
        <button
          className="blue"
          onClick={field2.reset}
        >
          Reset Field Two
        </button>
      </div>
    </>
  )
}

export default ResetExample`,wi=()=>{const[i,r]=b.useState(!1),[a,s]=b.useState(!1);return t(x,{children:[t(n,{children:[e(l,{onLoad:r,name:"field1",label:"Field One",wide:!0}),e(l,{onLoad:s,value:"Initial value",name:"field2",label:"Field Two",wide:!0})]}),t("div",{className:"flex gap-4",children:[e("button",{className:"blue",onClick:i.reset,children:"Reset Field One"}),e("button",{className:"blue",onClick:a.reset,children:"Reset Field Two"})]})]})},Ei=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"reset()"})}),t(c,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"reset()"})," function can be called to reset a field to its initial state."]}),t("p",{children:["You can use the ",e(P,{})," property to save a reference to a field context object. Then call the ",e("code",{children:"reset()"})," method on the field object to make it invalid.  An optional argument can be provided as the message to display."]})]}),e(m,{children:"Enter some text in either of the inputs below and then click on the corresponding button to reset it to the original value."})]}),e(o,{Element:wi,code:Si,caption:"reset()"}),e(u,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),yi=`import { Form, Field } from '@/lib/index.js'

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
          name="field1"
          label="Field One"
          wide
        />
        <Field
          onLoad={setField2}
          name="field2"
          label="Field Two"
          wide
        />
      </Form>
      <div className="flex gap-4">
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

export default SetFocusExample`,vi=()=>{const[i,r]=b.useState(!1),[a,s]=b.useState(!1);return t(x,{children:[t(n,{children:[e(l,{onLoad:r,name:"field1",label:"Field One",wide:!0}),e(l,{onLoad:s,name:"field2",label:"Field Two",wide:!0})]}),t("div",{className:"flex gap-4",children:[e("button",{onClick:()=>i==null?void 0:i.setFocus(),children:"Focus Field One"}),e("button",{onClick:()=>a==null?void 0:a.setFocus(),children:"Focus Field Two"})]})]})},Ti=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setFocus()"})}),t(c,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"setFocus()"})," function can be called to focus a field. You can use the ",e(P,{})," property to save a reference to a field context object."]}),t("p",{children:["Then call the ",e("code",{children:"setFocus()"})," method on the field object to focus it."]})]}),e(m,{children:"Click on one of the buttons to focus the corresponding field."})]}),e(o,{Element:vi,code:yi,caption:"setFocus()"}),t("p",{children:["You can also focus on fields by name using the ",e(f,{})," ",e(we,{})," method."]}),e(u,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),Ri=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetInvalidExample = () => {
  const [field1, setField1] = useState(false)
  const [field2, setField2] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField1}
          name="field1"
          label="Field One"
          wide
        />
        <Field
          onLoad={setField2}
          name="field2"
          label="Field Two"
          wide
        />
      </Form>
      <div className="flex gap-4">
        <button
          className="red"
          onClick={() => field1.setInvalid()}
        >
          Invalid Field One
        </button>
        <button
          className="red"
          onClick={() => field2.setInvalid('Naughty!')}
        >
          Invalid Field Two
        </button>
      </div>
    </>
  )
}

export default SetInvalidExample`,Ci=()=>{const[i,r]=b.useState(!1),[a,s]=b.useState(!1);return t(x,{children:[t(n,{children:[e(l,{onLoad:r,name:"field1",label:"Field One",wide:!0}),e(l,{onLoad:s,name:"field2",label:"Field Two",wide:!0})]}),t("div",{className:"flex gap-4",children:[e("button",{className:"red",onClick:()=>i.setInvalid(),children:"Invalid Field One"}),e("button",{className:"red",onClick:()=>a.setInvalid("Naughty!"),children:"Invalid Field Two"})]})]})},Ni=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setInvalid()"})}),t(c,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"setInvalid()"})," function can be called to mark a field as invalid."]}),t("p",{children:["You can use the ",e(P,{})," property to save a reference to a field context object. Then call the ",e("code",{children:"setInvalid()"})," method on the field object to make it invalid.  An optional argument can be provided as the message to display."]})]}),e(m,{children:"Click on one of the buttons to set the corresponding field to be invalid."})]}),e(o,{Element:Ci,code:Ri,caption:"setFocus()"}),e(u,{links:["field:setInvalid"]})]}),ki=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetValidExample = () => {
  const [field1, setField1] = useState(false)
  const [field2, setField2] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField1}
          name="field1"
          label="Field One"
          wide
        />
        <Field
          onLoad={setField2}
          name="field2"
          label="Field Two"
          wide
        />
      </Form>
      <div className="flex gap-4">
        <button
          className="green"
          onClick={() => field1?.setValid()}
        >
          Valid Field One
        </button>
        <button
          className="green"
          onClick={() => field2?.setValid('Nice one!')}
        >
          Valid Field Two
        </button>
      </div>
    </>
  )
}

export default SetValidExample`,Oi=()=>{const[i,r]=b.useState(!1),[a,s]=b.useState(!1);return t(x,{children:[t(n,{children:[e(l,{onLoad:r,name:"field1",label:"Field One",wide:!0}),e(l,{onLoad:s,name:"field2",label:"Field Two",wide:!0})]}),t("div",{className:"flex gap-4",children:[e("button",{className:"green",onClick:()=>i==null?void 0:i.setValid(),children:"Valid Field One"}),e("button",{className:"green",onClick:()=>a==null?void 0:a.setValid("Nice one!"),children:"Valid Field Two"})]})]})},Ai=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setValid()"})}),t(c,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"setValid()"})," function can be called to mark a field as valid."]}),t("p",{children:["You can use the ",e(P,{})," property to save a reference to a field context object. Then call the ",e("code",{children:"setValid()"})," method on the field object to make it valid.  An optional argument can be provided as the message to display."]})]}),e(m,{children:"Click on one of the buttons to set the corresponding field to be valid."})]}),e(o,{Element:Oi,code:ki,caption:"setFocus()"}),e(u,{links:["field:setInvalid"]})]}),qi=`import { Form, Field } from '@/lib/index.js'

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
          name="animal"
          label="Animal"
          wide
        />
      </Form>
      <div className="flex gap-4">
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

export default SetValueExample`,Pi=()=>{const[i,r]=b.useState(!1);return t(x,{children:[e(n,{children:e(l,{onLoad:r,name:"animal",label:"Animal",wide:!0})}),t("div",{className:"flex gap-4",children:[e("button",{onClick:()=>i.setValue("Antelope"),children:"Antelope"}),e("button",{onClick:()=>i.setValue("Badger"),children:"Badger"}),e("button",{onClick:()=>i.setValue("Camel"),children:"Camel"})]})]})},Li=`import { Form, Field } from '@/lib/index.js'

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
          name="animal"
          label="Animal"
          wide
        />
        <div className="flex gap-4">
          <button
            className="green"
            onClick={e => { e.preventDefault(); field.setValue('Antelope') }}
          >
            Antelope
          </button>
          <button
            className="green"
            onClick={e => field.setValue('Badger', e)}
          >
            Badger
          </button>
          <button
            type="button"
            className="green"
            onClick={() => field.setValue('Camel')}
          >
            Camel
          </button>
          <button
            onClick={() => field.setValue('Danger!')}
            className="red"
          >
            Danger!
          </button>
        </div>
      </Form>
    </>
  )
}

export default SetValueExample`,Di=()=>{const[i,r]=b.useState(!1);return e(x,{children:t(n,{children:[e(l,{onLoad:r,name:"animal",label:"Animal",wide:!0}),t("div",{className:"flex gap-4",children:[e("button",{className:"green",onClick:a=>{a.preventDefault(),i.setValue("Antelope")},children:"Antelope"}),e("button",{className:"green",onClick:a=>i.setValue("Badger",a),children:"Badger"}),e("button",{type:"button",className:"green",onClick:()=>i.setValue("Camel"),children:"Camel"}),e("button",{onClick:()=>i.setValue("Danger!"),className:"red",children:"Danger!"})]})]})})},ji=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setValue()"})}),t(c,{children:[t("p",{children:["The ",e("code",{children:"setValue()"})," method can be called on a field to set the value.  You can use ",e(P,{})," to capture a reference to the field context object"]}),e(m,{children:"Click on one of the buttons to set the field to have the corresponding value."})]}),e(o,{Element:Pi,code:qi,caption:"setValue()"}),e("h2",{children:"Beware Buttons That Submit!"}),t(c,{children:[t("div",{children:[t("p",{children:["One thing to be aware of is that the default behaviour of a"," ",e("code",{children:"button"})," inside a ",e("code",{children:"form"})," is to submit the form. This is an innate property of HTML and not something that's specific to this library.  In the example above we put the buttons outside the"," ",e(f,{})," to avoid this behaviour, but it's not always possible to do that. There are a number of ways to work around it, shown in the example below."]}),t("p",{children:['The first "Antelope" button calls the'," ",e("code",{children:"preventDefault()"})," "," method on the event.  Given that this is a bit clumsy, the ",e("code",{children:"setValue()"})," method allows you to pass the event as the second argument and it will call"," ",e("code",{children:"preventDefault()"}),' for you, as shown on the second "Badger" button.']})]}),t("div",{children:[t("p",{children:['The third approach, shown on the "Camel" button, is to explicitly set the ',e("code",{children:"type"})," to ",e("code",{children:"button"})," to override the default button ",e("code",{children:"type"})," of ",e("code",{children:"submit"}),"."," ",`The fourth "Danger!" button doesn't do anything and will cause the form to submit, just in case you don't believe me that it's really a problem.`]}),e(m,{children:"Click on one of the buttons to set the input value.  Be warned that the fourth button will cause the form to submit."})]})]}),e(o,{Element:Di,code:Li,caption:"setValue()"}),t("p",{children:["You can also set values for one or more fields by name using the"," ",e(f,{})," ",e(Ee,{})," method."]}),e(u,{links:["form:setValues","field:setFocus","field:reset"]})]}),Vi=()=>e(n,{children:e(l,{name:"field1",label:"Field One",children:t("div",{className:"field",children:[e(I,{}),e(ye,{})]})})}),Ii=`import { Form, Field, Text, Label } from '@/lib/index.js'

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

export default LabelExample`,Yi=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Label"})}),t("p",{children:["The ",e("code",{children:"Label"})," component can be used to add a label to a"," ",e(h,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),e(o,{Element:Vi,code:Ii,caption:"Label",expand:!0})]}),Bi=()=>t(n,{children:[e(l,{name:"one",label:"Field One",help:"This has implicit layout"}),e(l,{name:"two",label:"Field Two",help:"This has explicit layout",children:e(q,{})})]}),$i=`import { Form, Field, Layout } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout } from '@abw/react-formula'

const FormLayout = () =>
  <Form>
    <Field
      name="one"
      label="Field One"
      help="This has implicit layout"
    />
    <Field
      name="two"
      label="Field Two"
      help="This has explicit layout"
    >
      <Layout/>
    </Field>
  </Form>

export default FormLayout`,Mi=()=>t(n,{children:[e(l,{name:"one",label:"Field One",help:"This is what the layout component does",required:!0,children:i=>t("div",{className:ve(i),children:[e(I,{}),e(M,{}),e(X,{})]})}),e(p,{})]}),Ui=`import { Form, Field, Label, Input, Message, Submit, fieldClass } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Submit,
// PRETEND:   Label, Input, Message, fieldClass
// PRETEND: } from '@abw/react-formula'

const FormLayout = () =>
  <Form>
    <Field
      name="one"
      label="Field One"
      help="This is what the layout component does"
      required
    >
      { field =>
        <div className={fieldClass(field)}>
          <Label/>
          <Input/>
          <Message/>
        </div>
      }
    </Field>
    <Submit/>
  </Form>

export default FormLayout`,Gi=({id:i,topping:r,selected:a,select:s})=>e("div",{children:t("label",{htmlFor:i,className:"checkbox",children:[e("input",{type:"checkbox",checked:a,onChange:s,id:i}),r]})}),Hi=({id:i,toppings:r,selected:a,select:s})=>e("div",{className:"options",children:r.map(F=>e(Gi,{topping:F,id:`${i}-${F}`,selected:a[F]||!1,select:()=>s(F)},F))}),Wi=({value:i,free:r,price:a})=>e("div",{className:"summary",children:i.map((s,F)=>t("div",{className:"selected",children:[e("div",{children:s}),e("div",{children:F<r?"Free":a})]},s))}),zi=i=>i.reduce((r,a)=>(r[a]=!0,r),{}),_i=(i,r)=>a=>{i[a]=!i[a],r(Object.entries(i).filter(s=>s[1]).map(s=>s[0]))},Ki=()=>{const{id:i,value:r,onChange:a,free:s,price:F,toppings:E}=U(),g=zi(r),B=_i(g,a);return t("div",{className:"toppings field",children:[e("p",{className:"wide",children:"Select any extra toppings you want on your pizza."}),t("p",{className:"pricing wide",children:["The first ",s," are free. Any additional toppings are ",e("span",{className:"price",children:F})," each."]}),e(I,{}),t("div",{className:"selection",children:[e(Hi,{id:i,toppings:E,value:r,selected:g,select:B}),e(Wi,{value:r,free:s,price:F})]})]})};const Ji={toppings:{Layout:Ki,label:"Pick your toppings",default:[],free:3,price:"£1.00",toppings:["Ham","Bacon","Onions","Sausage","Pepperoni","Mushrooms","Sweetcorn","Pineapple","Extra Cheese"]}},Zi=()=>t(n,{fields:Ji,children:[e(l,{name:"toppings"}),e(w,{})]}),Qi=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
import Toppings from './Toppings.jsx'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'
import './pizza.scss'

const fields = {
  toppings: {
    Layout:   Toppings,
    label:    'Pick your toppings',
    default:  [ ],
    free:     3,
    price:    '£1.00',
    toppings: [
      'Ham',
      'Bacon',
      'Onions',
      'Sausage',
      'Pepperoni',
      'Mushrooms',
      'Sweetcorn',
      'Pineapple',
      'Extra Cheese',
    ],
  }
}

const PizzaForm = () =>
  <Form fields={fields}>
    <Field name="toppings"/>
    <ResetSubmit/>
  </Form>

export default PizzaForm`,Xi=`import { Label, useField } from '@/lib/index.js'
{/* START */}
import React from 'react'
import Options from './Options.jsx'
import Summary from './Summary.jsx'
// PRETEND: import { Label, useField } from '@abw/react-formula'
import { selectedToppings, toppingSelector } from './Utils.js'

const Toppings = () => {
  const { id, value, onChange, free, price, toppings } = useField()
  const selected = selectedToppings(value)
  const select = toppingSelector(selected, onChange)

  return (
    <div className="toppings field">
      <p className="wide">
        Select any extra toppings you want on your pizza.
      </p>
      <p className="pricing wide">
        The first {free} are free. Any additional toppings
        are <span className="price">{price}</span> each.
      </p>
      <Label/>
      <div className="selection">
        <Options
          id={id} toppings={toppings} value={value}
          selected={selected} select={select}
        />
        <Summary
          value={value} free={free} price={price}
        />
      </div>
    </div>
  )
}
export default Toppings`,eo=`// convert the toppings array to an object
export const selectedToppings = value =>
  value.reduce(
    (selected, option) => {
      selected[option] = true
      return selected
    },
    { }
  )

// select (or unselect) a topping
export const toppingSelector = (selected, onChange) =>
  topping => {
    // toggle the selection
    selected[topping] = ! selected[topping]
    // update the field value
    onChange(
      // extract the names (keys) of all selected toppings
      Object.entries(selected)
        .filter( entry => entry[1] )  // filter by value
        .map( entry => entry[0] )     // return the key
    )
  }`,to=`import React from 'react'
import Option from './Option.jsx'

const Options = ({id, toppings, selected, select}) =>
  <div className="options">
    { toppings.map(
      topping =>
        <Option
          key={topping}
          topping={topping}
          id={\`\${id}-\${topping}\`}
          selected={selected[topping] || false}
          select={() => select(topping)}
        />
    )}
  </div>

export default Options`,lo=`import React from 'react'

const Option = ({id, topping, selected, select}) =>
  <div>
    <label htmlFor={id} className="checkbox">
      <input
        type="checkbox"
        checked={selected}
        onChange={select}
        id={id}
      />
      {topping}
    </label>
  </div>

export default Option`,io=`import React from 'react'

const Summary = ({value, free, price}) =>
  <div className="summary">
    { value.map(
      (topping, n) =>
        <div className="selected" key={topping}>
          <div>
            {topping}
          </div>
          <div>
            {n < free ? 'Free' : price}
          </div>
        </div>
    )}
  </div>

export default Summary`,oo=`div.toppings {
  background-color: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  p {
    margin: 0;
    font-size: 1.1rem;
    &.pricing {
      font-size: 0.9rem;
      opacity: 0.8;
      margin-bottom: 1rem;
    }
  }
  div.selection {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: flex-end;
    gap: 1rem;
    div.options {
      padding-left: 1rem;
    }
    div.summary {
      div.selected {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }
    }
  }
}
.dark div.toppings {
  background-color: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.1);
}`,no=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Layout"})}),t("p",{children:["The ",e("code",{children:"Layout"})," component is inserted as the default content for a ",e(h,{})," that doesn't have it's own content."]}),t("p",{children:["The two fields in the example below both generate the same output. The first implicitly uses the ",e("code",{children:"Layout"})," for its content, the second includes it explicitly."]}),e(o,{Element:Bi,code:$i,caption:"Default Layout",expand:!0}),t(c,{children:[t("p",{children:["The ",e("code",{children:"Layout"})," component creates a ",e("code",{children:"div"})," containing the ",e(z,{}),", ",e(Te,{})," and ",e(Re,{})," components. The ",e("code",{children:"div"})," will have the ",e("code",{children:"field"})," CSS class and possibly other classes based on the state of the field (e.g."," ",e("code",{children:"valid"}),", ",e("code",{children:"invalid"}),", etc.)  The",e("code",{children:"fieldClass()"})," utility function can be used to automatically return the correct CSS classes for the field."]}),t("div",{children:[t("p",{children:["The example below shows how you can roll your own layout that does the same thing as the default ",e("code",{children:"Layout"})," component."]}),t(m,{children:["Try submitting the form without entering any value in the required field.  You should see that the ",e("code",{children:"invalid"})," CSS class is added to the field container."]})]})]}),e(o,{Element:Mi,code:Ui,caption:"Explicit Layout",expand:!0}),e("h2",{children:"Custom Layout"}),t("p",{children:["You can define your own component to handle the layout for a field using the ",e("code",{children:"Layout"})," field property."]}),t(c,{children:[t("p",{children:["In this example we define a ",e("code",{children:"Toppings"})," layout component to render a field allowing a user to select some toppings for a pizza."]}),e(m,{children:"Before we go any further into the code, let's see how it looks. Select some toppings for your pizza!"})]}),e(o,{Element:Zi,code:Qi,caption:"Pizza Form",expand:!0}),e(c,{children:t("p",{children:["We're defining the schema for the ",e("code",{children:"fields"})," externally (lines 6 to 25) and passing them into the ",e("code",{children:"Form"})," as the"," ",e("code",{children:"fields"})," property (line 28). In addition to setting the ",e("code",{children:"Layout"})," component on line 8, we're also defining some extra data that the field will require: the number of ",e("code",{children:"free"})," toppings (line 11), the"," ",e("code",{children:"price"})," of additional toppings after that (line 12), and a list of available ",e("code",{children:"toppings"})," (lines 13 to 23).  This is the kind of data that we want defined up front and not buried in the form markup."]})}),t("h2",{children:["The ",e("code",{children:"Toppings"})," Component"]}),t("p",{children:["Here's the implementation of the ",e("code",{children:"Toppings"})," component."]}),t(c,{children:[e(S,{code:y(Xi),caption:"Toppings",expand:!0}),t("div",{children:[t("p",{children:["On line 8 we call ",e("code",{children:"useField()"})," to get the current field"," ","context.  As well as the ",e("code",{children:"id"}),", ",e("code",{children:"value"})," and"," ",e("code",{children:"onChange"})," function to set the value, we're also getting our additional data fields: ",e("code",{children:"free"}),", ",e("code",{children:"price"})," and"," ",e("code",{children:"toppings"}),"."]}),t("p",{children:["We've got two utility functions that we're importing from our ",e("code",{children:"Utils.js"})," file.  On line 9 we call"," ",e("code",{children:"selectedToppings()"})," to convert the array of toppings in"," ",e("code",{children:"value"})," into an object so we can easily tell which toppings are selected (each selected topping will be set ",e("code",{children:"true"}),"). On line 10 we call the ",e("code",{children:"toppingSelector()"})," factory function which returns a function for selecting a topping (or unselecting one that's already selected) and calling the ",e("code",{children:"onChange"})," handler to update the field.  We'll look at the definitions of those functions shortly."]}),t("p",{children:["We have some explanatory text from lines 14 to 20.  Note how this includes the ",e("code",{children:"free"})," and ",e("code",{children:"price"})," values defined in our field schema. On line 21 we render the default ",e(z,{})," ","component to generate the field label. On line 23 we render a custom"," ",e("code",{children:"Options"})," component and on line 27 a custom"," ",e("code",{children:"Summary"})," component."]})]})]}),e("h2",{children:"Utility Functions"}),e("p",{children:"Here's the definitions for those utility functions."}),e(S,{code:y(eo),caption:"Utils.js",expand:!0}),t("h2",{children:["The ",e("code",{children:"Options"})," Component"]}),t("p",{children:["The ",e("code",{children:"Options"})," component iterates over the available toppings and renders the ",e("code",{children:"Option"})," component for each.  It passes a custom ",e("code",{children:"id"}),", ",e("code",{children:"selected"})," flag and"," ",e("code",{children:"select"})," function tailored to each option."]}),e(S,{code:y(to),caption:"Options.jsx",expand:!0}),t("h2",{children:["The ",e("code",{children:"Option"})," Component"]}),t("p",{children:["The ",e("code",{children:"Option"})," component simply renders a checkbox in a label using those properties."]}),e(S,{code:y(lo),caption:"Option.jsx",expand:!0}),t("h2",{children:["The ",e("code",{children:"Summary"})," Component"]}),t("p",{children:["The ",e("code",{children:"Summary"})," component displays a summary of the selected toppings."]}),e(S,{code:y(io),caption:"Summary.jsx",expand:!0}),e("h2",{children:"Additional Styles"}),e("p",{children:"And finally, here's the additional SCSS we're using to apply the styling."}),e(S,{code:oo,caption:"pizza.scss",language:"css",expand:!0})]}),ro=()=>e(n,{children:e(l,{name:"one",children:t("div",{className:"field flex baseline gap-2",children:[e("label",{children:"Label on the left"}),e(M,{})]})})}),ao=`import { Form, Field, Input } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Input } from '@abw/react-formula'

const FormInput = () =>
  <Form>
    <Field name="one">
      <div className="field flex baseline gap-2">
        <label>Label on the left</label>
        <Input/>
      </div>
    </Field>
  </Form>

export default FormInput`,so="/react-formula/badger.jpg",co="/react-formula/kitten.jpg",mo="/react-formula/gorilla.jpg",uo={badger:so,kitten:co,gorilla:mo},ho=({animal:i,select:r,selected:a})=>e("div",{className:`animal ${a?"selected":""}`,onClick:r,children:e("img",{src:uo[i],width:"120",height:"120",alt:i})}),po=["badger","gorilla","kitten"],fo=()=>{const{value:i,onChange:r}=U();return e("div",{className:"animals",children:po.map(a=>e(ho,{animal:a,selected:i===a,select:()=>r(a)},a))})};const bo=()=>t(n,{children:[e(l,{name:"animal",label:"Pick an animal guide",requiredMessage:"You must pick an animal",required:!0,Input:fo}),e(w,{reset:{className:"outline"},submit:{className:"blue"}})]}),Fo=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
import PictureInput from './PictureInput.jsx'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'
import './animals.css'

const PictureForm = () =>
  <Form>
    <Field
      name="animal" label="Pick an animal guide"
      requiredMessage="You must pick an animal"
      required
      Input={PictureInput}
    />
    <ResetSubmit
      reset={{ className: 'outline' }}
      submit={{ className: 'blue' }}
    />
  </Form>

export default PictureForm`,go=`import { useField } from '@/lib/index.js'
{/* START */}
import React from 'react'
import Picture from './Picture.jsx'
// PRETEND: import { useField } from '@abw/react-formula'

const animals = ['badger', 'gorilla', 'kitten']

const PictureInput = () => {
  const { value, onChange } = useField()
  return (
    <div className="animals">
      { animals.map(
        animal =>
          <Picture
            key={animal}
            animal={animal}
            selected={value === animal}
            select={() => onChange(animal)}
          />
      )}
    </div>
  )
}

export default PictureInput`,xo=`import badgerUrl  from '/badger.jpg'
import kittenUrl  from '/kitten.jpg'
import gorillaUrl from '/gorilla.jpg'
{/* START */}
import React from 'react'
/* REAL */const URLS = { badger: badgerUrl, kitten: kittenUrl, gorilla: gorillaUrl }/* UNREAL */

const Picture = ({ animal, select, selected }) =>
  <div
    className={\`animal \${selected ? 'selected' : ''}\`}
    onClick={select}
  >
    <img
      /* REAL */src={URLS[animal]}/* UNREAL */// PRETEND: src={\`/\${animal}.jpg\`}
      width="120" height="120"
      alt={animal}
    />
  </div>

export default Picture`,So=`div.animals {
  display: flex;
  gap: 1rem;
}
div.animal {
  font-size: 0;
  line-height: 0;
  border: 6px solid white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.5s;
}
div.animal:hover {
  border-color: #ccf;
  cursor: pointer;
}
div.animal.selected {
  border-color: #88f;
}`,wo=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Input"})}),t("p",{children:["The ",e("code",{children:"Input"})," component is included by the ",e(k,{})," ","component to render the input for a field."]}),t("p",{children:["You can define your own content for a field to replace the default"," ",e(k,{}),", but still use the default ",e("code",{children:"Input"})," component to render the correct input for the field type."]}),e(o,{Element:ro,code:ao,caption:"Default Input",expand:!0}),e("h2",{children:"Custom Input"}),t("p",{children:["You can define your own component to handle the input for a field using the ",e("code",{children:"Input"})," field property."]}),t(c,{children:[e("div",{children:t("p",{children:["In this example we define a ",e("code",{children:"PictureInput"})," component to show some pictures of animals for the user to select an animal guide from.  We're still using the default field layout which provides us with the label and validation message."]})}),e(m,{children:"Click on an animal to select it. Try submitting the form without selecting an animal to see the validation error message in effect."})]}),e(o,{Element:bo,code:Fo,caption:"Picture Form",expand:!0}),t("h2",{children:["The ",e("code",{children:"PictureInput"})," Component"]}),t(c,{children:[e(S,{code:y(go),caption:"PictureInput",expand:!0}),t("div",{children:[t("p",{children:["Here's the implementation of the ",e("code",{children:"PictureInput"})," component."]}),t("p",{children:["On line 8 we call ",e("code",{children:"useField()"})," to get the current field"," ",e("code",{children:"value"})," and the ",e("code",{children:"onChange"})," function to set the value.  We iterate over a list of animals on line 11 and render the"," ",e("code",{children:"Picture"})," component for each.  We pass the ",e("code",{children:"selected"})," ","flag on line 16 to indicate if the animal name matches the current"," ",e("code",{children:"value"}),".  We also pass a ",e("code",{children:"select"})," ","function on line 17 which calls the ",e("code",{children:"onChange"})," handler to select the animal."]})]})]}),t("h2",{children:["The ",e("code",{children:"Picture"})," Component"]}),t(c,{children:[e(S,{code:y(xo),caption:"Picture",expand:!0}),t("p",{children:["Here's the ",e("code",{children:"Picture"})," component.  It simply renders a ",e("code",{children:"div"})," with an ",e("code",{children:"onClick"})," handler to call the ",e("code",{children:"select"})," function passed as a property.  The"," ",e("code",{children:"animal"})," CSS class is added, along with ",e("code",{children:"selected"})," ","if the animal is currently selected.  Inside the ",e("code",{children:"div"})," we render a picture of the animal in an ",e("code",{children:"img"})," element."]})]}),e("h2",{children:"Additional Styles"}),t(c,{children:[e(S,{code:So,caption:"animals.css",language:"css",expand:!0}),e("p",{children:"For completeness, here's the additional CSS we're using to apply the styling."})]}),e("h2",{className:"hint",children:"Picture Credits"}),t("ul",{className:"credits",children:[t("li",{children:["Badger photo by ",e("a",{href:"https://unsplash.com/es/@vincentvanzalinge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Vincent van Zalinge"})," on ",e("a",{href:"https://unsplash.com/photos/jd8s5zhWEug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),t("li",{children:["Gorilla photo by ",e("a",{href:"https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Kelly Sikkema"})," on ",e("a",{href:"https://unsplash.com/images/animals/monkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),t("li",{children:["Kitten photo by ",e("a",{href:"https://unsplash.com/@feneek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Sergey Semin"})," on ",e("a",{href:"https://unsplash.com/images/animals/kitten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})]}),Eo=()=>t(n,{children:[e(l,{name:"field1",label:"Field One",help:"Additional help message",validMessage:"This is fine!",requiredMessage:"You must enter a value",required:!0,children:t(q,{children:[e(I,{}),e(M,{}),e(X,{})]})}),e(p,{})]}),yo=`import { Form, Field, Layout, Label, Input, Message, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Layout, Label,
// PRETEND:   Input, Message, Submit
// PRETEND: } from '@abw/react-formula'

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
        <Input/>
        <Message/>
      </Layout>
    </Field>
    <Submit/>
  </Form>

export default MessageExample`,vo=()=>{const{message:i,help:r}=U();return e("div",{className:"small bold mar-t-2 fgc-40 fgd-60",children:i??r})},To=()=>t(n,{children:[e(l,{name:"field1",label:"Field One",help:"Enter a value",validMessage:"This is fine!",requiredMessage:"You must enter a value",Message:vo,required:!0,wide:!0}),e(p,{})]}),Ro=`import { Form, Field, Submit, useField } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Submit, useField
// PRETEND: } from '@abw/react-formula'

const MyMessage = () => {
  const { message, help } = useField()
  return (
    <div className="small bold mar-t-2 fgc-40 fgd-60">
      { message ?? help }
    </div>
  )
}

const MessageExample = () =>
  <Form>
    <Field
      name="field1"
      label="Field One"
      help="Enter a value"
      validMessage="This is fine!"
      requiredMessage="You must enter a value"
      Message={MyMessage}
      required
      wide
    />
    <Submit/>
  </Form>

export default MessageExample`,Co=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Message"})}),t("p",{children:["The ",e("code",{children:"Message"})," component is used to add a message underneath a ",e(h,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),t(c,{children:[t("p",{children:["If you have defined ",e("code",{children:"help"})," for your field then it will be displayed here.  If the field fails to validate then the validation error message will be displayed.  In this example we're setting an explicit ",e("code",{children:"requiredMessage"})," to override the default message. We're also setting a ",e("code",{children:"validMessage"})," to provide a custom message if the field is valid."]}),t(m,{children:["Try submitting the form without entering a value.  You should see the ",e("code",{children:"help"})," message be replaced by the"," ",e("code",{children:"requiredMessage"})," error message."]})]}),e(o,{Element:Eo,code:yo,caption:"Message",expand:!0}),e("h2",{children:"Custom Message Component"}),t("p",{children:["You can define your own component to handle the message for a field using the ",e("code",{children:"Message"})," field property."]}),e(o,{Element:To,code:Ro,caption:"Custom Message Component",expand:!0})]}),No=()=>e(n,{children:t(l,{name:"hello",label:"Enter a greeting",children:[e(q,{}),i=>t("div",{className:"info alert",children:["You have entered: ",i.value]})]})}),ko=`import { Form, Field, Layout } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout } from '@abw/react-formula'

const FieldChildrenExample = () =>
  <Form>
    <Field
      name="hello"
      label="Enter a greeting"
    >
      <Layout/>
      { field =>
        <div className="info alert">
          You have entered: {field.value}
        </div>
      }
    </Field>
  </Form>

export default FieldChildrenExample`,Oo=()=>e(n,{children:t(l,{name:"hello",label:"Enter a greeting",children:[e(q,{}),e("div",{className:"info alert",children:e(Le,{children:i=>`You have entered: ${i.value}`})})]})}),Ao=`import { Form, Field, Layout, UseField } from '@/lib/index.js'

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

export default UseFieldExample`,qo=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"UseField"})}),t("p",{children:["The immediate ",e(Ce,{})," of a ",e(h,{})," component can be functions that will receive the field context as the first argument."]}),e(o,{Element:No,code:ko,caption:"Field Children",expand:!0}),t("p",{children:["However, this only works for the immediate children of the ",e(h,{}),". If you want to include a function that is nested inside another element (e.g. inside a ",e("code",{children:"div"})," as shown in this example) then you can use the ",e("code",{children:"UseForm"})," component to provide it."]}),t("p",{children:["Don't forget that defining any children of a ",e(h,{})," component will override the default ",e(k,{})," component, so you'll need to add it manually or define your own layout for the field."]}),e(o,{Element:Oo,code:Ao,caption:"UseField",expand:!0})]}),Po=()=>t($,{children:[e(d,{path:"",end:!0,element:e(Ct,{})}),t(d,{path:"properties",children:[e(d,{path:"children",element:e(Ot,{})}),e(d,{path:"help",element:e(Pt,{})}),e(d,{path:"label",element:e(Yt,{})}),e(d,{path:"name",element:e(Ht,{})}),e(d,{path:"placeholder",element:e(el,{})}),e(d,{path:"prefix",element:e(il,{})}),e(d,{path:"suffix",element:e(dl,{})}),e(d,{path:"type",element:e(Zt,{})}),e(d,{path:"wide",element:e(ml,{})})]}),t(d,{path:"validation",children:[e(d,{path:"minValidateLength",element:e(bl,{})}),e(d,{path:"optionalLabel",element:e(xl,{})}),e(d,{path:"prepareValue",element:e(yl,{})}),e(d,{path:"required",element:e(Rl,{})}),e(d,{path:"requiredLabel",element:e(kl,{})}),e(d,{path:"requiredMessage",element:e(ql,{})}),e(d,{path:"showOptional",element:e(Dl,{})}),e(d,{path:"showRequired",element:e(Bl,{})}),e(d,{path:"validate",element:e(zl,{})}),e(d,{path:"validateOnBlur",element:e(Zl,{})}),e(d,{path:"validateOnChange",element:e(ti,{})})]}),t(d,{path:"events",children:[e(d,{path:"onBlur",element:e(oi,{})}),e(d,{path:"onChange",element:e(ai,{})}),e(d,{path:"onFocus",element:e(ci,{})}),e(d,{path:"onInvalid",element:e(hi,{})}),e(d,{path:"onLoad",element:e(bi,{})}),e(d,{path:"onValid",element:e(xi,{})})]}),t(d,{path:"functions",children:[e(d,{path:"Reset",element:e(Ei,{})}),e(d,{path:"setFocus",element:e(Ti,{})}),e(d,{path:"setInvalid",element:e(Ni,{})}),e(d,{path:"setValid",element:e(Ai,{})}),e(d,{path:"setValue",element:e(ji,{})})]}),t(d,{path:"components",children:[e(d,{path:"Input",element:e(wo,{})}),e(d,{path:"Layout",element:e(no,{})}),e(d,{path:"Label",element:e(Yi,{})}),e(d,{path:"Message",element:e(Co,{})}),e(d,{path:"UseField",element:e(qo,{})})]})]}),Lo={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},Do=()=>t(n,{fields:Lo,children:[e(T,{names:["name","message"]}),e(T,{names:"badgers animal"})]}),jo=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,Vo={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},Io=()=>e(n,{fields:Vo,children:e(T,{names:"name email",grid:2,wide:!0})}),Yo=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,Bo={one:{label:"One"},two:{label:"Two"},three:{label:"Three"}},$o=()=>e(n,{fields:Bo,children:e(T,{names:"one two three",grid:!0,wide:!0})}),Mo=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,Uo={forename:{label:"First Name",required:!0},surname:{label:"Surname",required:!0},company:{label:"Company",required:!0},job_title:{label:"Job Title",required:!0}},Go=()=>e(n,{fields:Uo,children:e(T,{names:"forename surname company job_title",grid:2,gap:12,wide:!0})}),Ho=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,Wo={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},zo=()=>e(n,{fields:Wo,children:e(T,{names:"name email",className:"border pad-4 bgc-95 bgd-5 bdr-2",wide:!0})}),_o=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,Ko={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},Jo=()=>e(n,{fields:Ko,children:e(T,{names:"name message badgers animal",wide:!0})}),Zo=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,Qo=()=>t("div",{className:"prose",children:[e("h1",{children:"Fields"}),t("p",{children:["The ",e("code",{children:"Fields"})," component can be used to render multiple fields."]}),e("p",{children:"This is a shortcut for convenience, but it depends on you having all your form fields defined in a separate schema so you can reference them only by name."}),t("p",{children:["The ",e("code",{className:"code",children:"names"})," property should be used to specify the list of field names either as an array of strings, or a single string containing a whitespace-delimited list of field names. The ",e("code",{className:"code",children:"Fields"})," component renders each of the fields, collected together in a single"," ",e("code",{className:"code",children:"div"})," element"]}),e(o,{Element:Do,code:jo,caption:"Fields"}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be set to add a CSS class to the fields container."]}),e(o,{Element:zo,code:_o,caption:"Fields Class"}),e("h2",{children:e("code",{children:"grid"})}),t("p",{children:["The ",e("code",{children:"grid"})," property can be used to layout the fields in a grid.  Set the property to the number of columns you want.  The default gap between the fields will be 1rem (using the"," ",e("code",{children:"gap-h-4"})," utility class provided by"," ",e("a",{href:"https://abw.github.io/badger-css/utilities/grid",children:"Badger-CSS"}),")."]}),e(o,{Element:Io,code:Yo,caption:"Fields in a Grid"}),t("p",{children:["You can also specify ",e("code",{children:"grid"})," as the boolean value"," ",e("code",{children:"true"})," (which React will conveniently set for you if you include it as a valueless property) and it will automatically select the correct number of columns based on how many fields it is rendering."]}),e(o,{Element:$o,code:Mo,caption:"Automatic Grid Columns"}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set a custom horizontal gap between fields.  The value should be an integer number of margin units of 0.25rem."]}),e(o,{Element:Go,code:Ho,caption:"Fields With a Gap"}),e("h2",{children:"Additional Properties"}),t("p",{children:["Any additional properties that you pass to the ",e("code",{children:"Fields"})," component will be forwarded to each of the ",e(h,{})," components."]}),t("p",{children:["For example, if you want all your fields to expand to the full width of the container you can pass the ",e("code",{children:"wide"})," property and it will forward it to each of the ",e(h,{})," components."]}),e(o,{Element:Jo,code:Zo,caption:"Wide Fields"})]}),Xo=()=>e(n,{children:t(G,{legend:"Fieldset One",children:[e(l,{name:"one",label:"Field One",wide:!0}),e(l,{name:"one",label:"Field Two",wide:!0})]})}),en=`import { Form, Field, Fieldset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Fieldset } from '@abw/react-formula'

const FieldsetExample = () =>
  <Form>
    <Fieldset legend="Fieldset One">
      <Field name="one" label="Field One" wide/>
      <Field name="one" label="Field Two" wide/>
    </Fieldset>
  </Form>

export default FieldsetExample
`,tn={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},ln=()=>e(n,{fields:tn,children:e(G,{legend:"Fieldset Two",fields:"name message",wide:!0})}),on=`import { Form, Fieldset } from '../../../../../lib/index.js'

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
    <Fieldset
      legend="Fieldset Two"
      fields="name message" wide
    />
  </Form>

export default FieldsetFieldsExample
`;const nn={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},rn=()=>e(n,{fields:nn,children:e(G,{legend:"Fieldset Two",fields:"name message",className:"prominent",wide:!0})}),an=`import { Form, Fieldset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fieldset } from '@abw/react-formula'
import './fieldset.css'

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
    <Fieldset
      legend="Fieldset Two"
      fields="name message"
      className="prominent"
      wide
    />
  </Form>

export default FieldsetFieldsExample
`,dn=`fieldset.prominent {
  --fieldset-back: var(--grey-95);
  --legend-text: var(--grey-20);
  --legend-back: var(--grey-100);
  --legend-border: var(--grey-70);
  padding: 1rem 2rem 2rem;
  background-color: var(--fieldset-back);
}
fieldset.prominent legend {
  padding: 0.25em 0.5em;
  color: var(--legend-text);
  background-color: var(--legend-back);
  border: 1px solid var(--legend-border);
  border-radius: 0.25em;
}
.dark fieldset.prominent {
  --fieldset-back: var(--grey-10);
  --legend-text: var(--grey-80);
  --legend-back: var(--grey-20);
  --legend-border: var(--grey-40);
}`,sn=()=>t("div",{className:"prose",children:[e("h1",{children:"Fieldset"}),t("p",{children:["The ",e("code",{children:"Fieldset"})," component can be used to create a field set.  The ",e("code",{children:"legend"})," property should be used to set the legend."]}),e(o,{Element:Xo,code:en,caption:"Fieldset",expand:!0}),e("h2",{children:e("code",{children:"fields"})}),t("p",{children:["The ",e("code",{children:"fields"})," property can be used as a shortcut to render a set of named fields using the"," ",e(Ne,{})," component."]}),e(o,{Element:ln,code:on,caption:"Fieldset fields",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to add a CSS class to the fieldset container."]}),e(o,{Element:rn,code:an,caption:"Fieldset className",expand:!0}),e("h2",{children:"Additional Styles"}),e("p",{children:"For completeness, here's the additional CSS we're using to apply the styling in the above example."}),e(S,{code:dn,caption:"fieldset.scss",language:"css",expand:!0})]}),cn=()=>t(n,{showRequired:!0,children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(p,{})]}),mn=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one"/>
    <Field name="two"   label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample`,un=()=>t(n,{children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(p,{className:"btn-blue",text:"Save Changes"})]}),hn=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const SubmitProps = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit className="btn-blue" text="Save Changes"/>
  </Form>

export default SubmitProps`,pn=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnSubmit = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <Submit/>
  </Form>

export default OnSubmit`,fn=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(p,{})]}),bn=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnClick = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Submit
      onClick={
        e => {
          e.preventDefault()
          window.alert('The form submission was intercepted!')
        }
      }
    />
  </Form>

export default OnClick`,Fn=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(p,{onClick:i=>{i.preventDefault(),window.alert("The form submission was intercepted!")}})]}),gn=()=>t("div",{className:"prose",children:[e("h1",{children:"Submit"}),t(c,{children:[t("p",{children:["The ",e("code",{children:"Submit"})," component can be used to add a button which will submit the form.  See the"," ",e(R,{to:"/components/form/validation",text:"validation page"})," for information on how the form data is validated and the"," ",e(ke,{})," component for details on how validation errors are displayed and can be customised."]}),e(m,{children:"Try entering some text in the fields below then click on the Submit button."})]}),e(o,{Element:cn,code:mn,caption:"Submit",expand:!0}),e("h2",{children:e("code",{children:"text"})}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(o,{Element:un,code:hn,caption:"Properties",expand:!0}),e("h2",{children:e("code",{children:"onClick"})}),t("p",{children:["You can use the ",e("code",{children:"onClick"})," property to handle a click on the button.  You will need to call ",e("code",{children:"preventDefault()"})," on the event if you want to stop the form from being submitted."]}),e(o,{Element:Fn,code:bn,caption:"onClick",expand:!0}),e("h2",{children:e("code",{children:"onSubmit"})}),t("p",{children:["The default behaviour for the button is to submit the form. You can use the ",e(Oe,{})," form property to handle the submission."]}),e(o,{Element:fn,code:pn,caption:"onSubmit",expand:!0})]}),xn=`import { Form, Field, Reset } from '../../../../../lib/index.js'

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

export default ResetExample`,Sn=()=>t(n,{values:{three:"The third field"},children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two with default value",default:"Badger"}),e(l,{name:"three",label:"Field three with pre-defined form value"}),e(Y,{})]}),wn=()=>t(n,{children:[e(l,{name:"one",label:"Field one"}),e(Y,{className:"btn-brown",text:"Reset the form"})]}),En=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const Properties = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Reset className="btn-brown" text="Reset the form"/>
  </Form>

export default Properties`,yn=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const OnClick = () =>
  <Form onReset={() => alert('form has been reset')}>
    <Field name="field1" label="Field One"/>
    <Reset
      onClick={
        () => window.alert('Reset was intercepted')
      }
    />
  </Form>

export default OnClick`,vn=()=>t(n,{onReset:()=>alert("form has been reset"),children:[e(l,{name:"field1",label:"Field One"}),e(Y,{onClick:()=>window.alert("Reset was intercepted")})]}),Tn=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const OnReset = () =>
  <Form onReset={() => alert('form has been reset')}>
    <Field name="field1" label="Field One"/>
    <Reset/>
  </Form>

export default OnReset`,Rn=()=>t(n,{onReset:()=>alert("form has been reset"),children:[e(l,{name:"field1",label:"Field One"}),e(Y,{})]}),Cn=()=>t("div",{className:"prose",children:[e("h1",{children:"Reset"}),t(c,{children:[t("p",{children:["The ",e("code",{children:"Reset"})," component can be used to add a reset button which will reset the form to its initial state.  Any"," ",e("code",{children:"values"})," defined on the ",e(f,{})," will be restored. Any fields that have a ",e("code",{children:"default"})," value will be reset to that value."]}),e(m,{children:"Try entering some text in the fields below then click on the Reset button.  You should see the fields reset to their original state."})]}),e(o,{Element:Sn,code:xn,caption:"Reset",expand:!0}),e("h2",{children:e("code",{children:"text"})}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(o,{Element:wn,code:En,caption:"Properties",expand:!0}),e("h2",{children:e("code",{children:"onClick"})}),t("p",{children:["You can use the ",e("code",{children:"onReset"})," property to register a function that should be called when the form is reset."]}),e(o,{Element:vn,code:yn,caption:"onClick",expand:!0}),e("h2",{children:e("code",{children:"onReset"})}),t("p",{children:["The default behaviour for the button is to reset the form. You can use the ",e(Ae,{})," form property to register a function that will be called when the form is reset."]}),e(o,{Element:Rn,code:Tn,caption:"onReset",expand:!0})]}),Nn=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(ee,{})]}),kn=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Cancel } from '@abw/react-formula'

const CancelExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Cancel/>
  </Form>

export default CancelExample`,On=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(ee,{text:"Go Back",className:"btn-brown",onClick:()=>alert("Cancel button was clicked")})]}),An=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

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

export default CancelExample`,qn=()=>t("div",{className:"prose",children:[e("h1",{children:"Cancel"}),t(c,{children:[t("p",{children:["The ",e("code",{children:"Cancel"})," component can be used to add a Cancel button. This doesn't do anything to the form but it's common to provide a button in a form to allow a user to cancel an edit or go back."]}),t(m,{children:["Don't be surprised that the Cancel button doesn't do anything in this example.  We need to add an ",e("code",{children:"onClick"})," handler to make it useful. See the next example."]})]}),e(o,{Element:Nn,code:kn,caption:"Cancel",expand:!0}),t("p",{children:["The ",e("code",{children:"text"})," property will set the text for the button. The ",e("code",{children:"className"})," property can be used to add a CSS class.  The ",e("code",{children:"onClick"})," property should be used to define a handler to do something when the button is clicked."]}),e(o,{Element:On,code:An,caption:"Properties",expand:!0})]}),Pn=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(L,{})]}),Ln=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit/>
  </Form>

export default CancelSubmitExample`,Dn=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(L,{gap:8})]}),jn=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit gap={8}/>
  </Form>

export default CancelSubmitGap`,Vn=()=>t(n,{children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(L,{space:!0})]}),In=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One" wide/>
    <CancelSubmit space/>
  </Form>

export default CancelSubmitSpace`,Yn=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(L,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),Bn=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

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

export default CancelSubmitClassName`,$n=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(L,{submit:{text:"Continue",className:"green"},cancel:{text:"Go Back",className:"outline",onClick:()=>alert("You went back")},space:!0})]}),Mn=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

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

export default CancelSubmitExample`,Un=()=>t("div",{className:"prose",children:[e("h1",{children:"CancelSubmit"}),t("p",{children:["The ",e("code",{children:"CancelSubmit"})," component can be used to add both"," ",e(j,{})," and ",e(C,{})," controls."]}),e(o,{Element:Pn,code:Ln,caption:"CancelSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(o,{Element:Dn,code:jn,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(o,{Element:Vn,code:In,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(o,{Element:Yn,code:Bn,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(j,{})," component using the ",e("code",{children:"cancel"})," property, and for the ",e(C,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(o,{Element:$n,code:Mn,caption:"Properties",expand:!0})]}),Gn=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(D,{})]}),Hn=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit/>
  </Form>

export default CancelResetSubmitExample`,Wn=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(D,{gap:8})]}),zn=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit gap={8}/>
  </Form>

export default CancelResetSubmitGap`,_n=()=>t(n,{children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(D,{space:!0})]}),Kn=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One" wide/>
    <CancelResetSubmit space/>
  </Form>

export default CancelResetSubmitSpace`,Jn=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(D,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),Zn=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

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

export default CancelResetSubmitClassName`,Qn=()=>t(n,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(D,{submit:{text:"Continue",className:"green"},reset:{text:"Restart",className:"brown"},cancel:{text:"Go Back",className:"outline",onClick:()=>alert("You went back")},space:!0})]}),Xn=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

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

export default CancelResetSubmitExample`,er=()=>t("div",{className:"prose",children:[e("h1",{children:"CancelResetSubmit"}),t("p",{children:["The ",e("code",{children:"CancelResetSubmit"})," component can be used to add all three ",e(j,{}),", ",e(V,{})," and ",e(C,{})," controls in one fell swoop."]}),e(o,{Element:Gn,code:Hn,caption:"CancelResetSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(o,{Element:Wn,code:zn,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(o,{Element:_n,code:Kn,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(o,{Element:Jn,code:Zn,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"cancel"}),", ",e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(j,{})," component using the ",e("code",{children:"cancel"})," property, for the ",e(V,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(C,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(o,{Element:Qn,code:Xn,caption:"Properties",expand:!0})]}),tr=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(w,{})]}),lr=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit/>
  </Form>

export default ResetSubmitExample`,ir=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(w,{gap:8})]}),or=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit gap={8}/>
  </Form>

export default ResetSubmitGap`,nr=()=>t(n,{children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(w,{space:!0})]}),rr=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One" wide/>
    <ResetSubmit space/>
  </Form>

export default ResetSubmitSpace`,ar=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(w,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),dr=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

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

export default ResetSubmitClassName`,sr=()=>t(n,{children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(w,{reset:{text:"Reset the Form",className:"outline"},submit:{text:"Submit the Form",className:"blue"},space:!0})]}),cr=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

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

export default ResetSubmitExample`,mr=()=>t("div",{className:"prose",children:[e("h1",{children:"ResetSubmit"}),t("p",{children:["The ",e("code",{children:"ResetSubmit"})," component can be used to add both"," ",e(V,{})," and ",e(C,{})," controls."]}),e(o,{Element:tr,code:lr,caption:"ResetSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(o,{Element:ir,code:or,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(o,{Element:nr,code:rr,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(o,{Element:ar,code:dr,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(V,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(C,{})," ","component using the ",e("code",{children:"submit"})," property."]}),e(o,{Element:sr,code:cr,caption:"Properties",expand:!0})]}),ur=()=>t(n,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",value:"Hello World!"}),e(qe,{children:e(w,{})})]}),hr=`import { Form, Field, Changed, ResetSubmit } from '../../../../lib/index.js'

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

export default ChangedExample`,pr=()=>t("div",{className:"prose",children:[e("h1",{children:"Changed"}),t(c,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"Changed"})," component will only render its child components when the form state has changed."]}),e("p",{children:'A typical example is shown below.  The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field.'})]}),t(m,{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})]}),e(o,{Element:ur,code:hr,caption:"Changed",expand:!0})]}),fr=()=>t(n,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(p,{})]}),br=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default RequiredExample`,Fr=()=>t(n,{showRequired:!0,errorsInHeader:!1,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(Pe,{}),e(p,{})]}),gr=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

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

export default ErrorsExample`,xr=()=>e(n,{children:e(Sr,{})}),Sr=()=>{const{setInvalidState:i}=A(),r=(E,g)=>{E.preventDefault(),i({error:g})};return t(x,{children:[e("button",{onClick:E=>r(E,"An error string"),children:"Error String"}),e("button",{onClick:E=>r(E,{message:"An error object"}),children:"Error Object"}),e("button",{onClick:E=>r(E,{label:"Example",message:"An error object"}),children:"Labelled Error"})]})},wr=`import { Form, useForm } from '../../../../../lib/index.js'

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

export default Error`,Er=()=>e(n,{children:e(yr,{})}),yr=()=>{const{setInvalidState:i}=A(),r=(g,B)=>{g.preventDefault(),i({errors:B})};return t(x,{children:[e("button",{onClick:g=>r(g,["A single error in errors"]),children:"Error String"}),e("button",{onClick:g=>r(g,["An error string","Another error string"]),children:"Error Strings"}),e("button",{onClick:g=>r(g,[{message:"An error object"},{message:"Another error object"}]),children:"Error Objects"}),e("button",{onClick:g=>r(g,[{label:"Example1",message:"An error object"},{label:"Example2",message:"Another error object"}]),children:"Labelled Errors"})]})},vr=`import { Form, useForm } from '../../../../../lib/index.js'

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

export default Errors`,Tr=()=>t("div",{children:[e("h1",{children:"Errors"}),t("div",{className:"error alert border",children:[e("h3",{children:"This page needs updating"}),t("p",{children:["I've change it so that errors don't get displayed by default (except in field validition messages).  You have to manually insert the ",e("code",{children:"Errors"})," component if you want the more detailed errors to be displayed"]})]}),e("p",{children:"By default, validation errors will be displayed in the form header."}),e(o,{Element:fr,code:br,caption:"Required Fields",expand:!0,children:e("p",{children:"Try submitting the form below without entering anything for either of the first two fields."})}),e("h2",{children:"errorsInHeader"}),t("p",{children:["If you don't want errors displayed in the header you can set the"," ",e("code",{children:"errorsInHeader"})," form property to ",e("code",{children:"false"}),".  You can use the ",e("code",{children:"Errors"})," component to display them somewhere else inside the form."]}),e(o,{Element:Fr,code:gr,caption:"Errors",expand:!0}),e("h2",{children:"error"}),t("p",{children:["The ",e(f,{})," context can include a single ",e("code",{children:"error"})," or an array of ",e("code",{children:"errors"}),`.  The first case is typically used when there's an error that doesn't relate to a specific field, e.g. "Invalid username or password".  The latter case is used when there are multiple errors, e.g. for different fields.`]}),t("p",{children:["Just to complicate matters, both ",e("code",{children:"error"})," and the elements in ",e("code",{children:"errors"})," can be either strings or objects containing a"," ",e("code",{children:"message"})," and other information about what field the error message relates to, including the field ",e("code",{children:"name"})," and"," ",e("code",{children:"label"}),"."]}),t("p",{children:["The ",e("code",{children:"Errors"})," component handles all these cases.  There are also some additional properties that you can set on the ",e(f,{})," to configure what gets displayed.  The ",e("code",{children:"errorsTitle"}),' can be defined as a function which takes the number of errors and returns an appropriate title.  The default function returns "Form Submission Error" if there is one error or "Form Submission Errors" if there are more than one.  The ',e("code",{children:"errorsPrompt"})," can also be defined to prompt the user to fix any ",e("code",{children:"errors"}),".  This also takes the number of ",e("code",{children:"errors"}),'.  The default function returns "Please correct this problem and re-submit:" or "Please correct these problems and re-submit:", depending on the number of errors.']}),t("p",{children:["This example includes some buttons that set the ",e("code",{children:"error"})," ","in the ",e(f,{})," to demonstrate the different combinations."]}),e(o,{Element:xr,code:wr,caption:"error"}),e("h2",{children:"errors"}),t("p",{children:["This example does a similar thing but sets multiple ",e("code",{children:"errors"}),"."]}),e(o,{Element:Er,code:vr,caption:"error"}),t("p",{children:["You can always implement your own component for displaying errors if you don't like the way this works.  Just be warned that there are the various different possibilities that need to be accounted for. You can use the ",e("code",{children:"useForm"})," function to get access to the form context which contains the ",e("code",{children:"error"})," and/or ",e("code",{children:"errors"}),"."]}),t("p",{children:["See the implementations of the"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Errors.jsx",children:"Errors"})," ","and"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Error.jsx",children:"Error"})," ","modules for a starting point."]})]}),Rr=`import { Form, Field, ResetSubmit, Debug } from '../../../../../lib/index.js'

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

export default DebugForm`,Cr=()=>t(n,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",wide:!0,required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",wide:!0,required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",wide:!0,required:!0}),e(w,{}),e(H,{})]}),Nr=()=>t(n,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",wide:!0,required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",wide:!0,required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",wide:!0,required:!0}),e(w,{}),e(H,{values:!1,fields:!0,status:!0})]}),kr=`import { Form, Field, Debug, ResetSubmit } from '../../../../../lib/index.js'

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

export default DebugStatus`,Or=`import { Form, Field, ResetSubmit, Debug } from '../../../../../lib/index.js'

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

export default DebugAll`,Ar=()=>t(n,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",wide:!0,required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",wide:!0,required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",wide:!0,required:!0}),e(w,{}),e(H,{all:!0})]}),qr=()=>t("div",{className:"prose",children:[e("h1",{children:"Debug"}),t(c,{align:"end",children:[t("p",{children:["The ",e("code",{children:"Debug"})," component can be used in development to debug your form.  By default it displays only the form values."]}),e(m,{children:"Try updating the form values and see how the debugging data changes."})]}),e(o,{Element:Cr,code:Rr,caption:"Debug"}),t("h2",{children:[e("code",{children:"values"})," and ",e("code",{children:"status"})]}),t("p",{children:["The ",e("code",{children:"status"})," option can be set to view the form status. The ",e("code",{children:"values"})," option defaults to ",e("code",{children:"true"})," but you can set it to ",e("code",{children:"false"})," if you don't want to view the current form values."]}),e(o,{Element:Nr,code:kr,caption:"Status and Fields"}),e("h2",{children:e("code",{children:"all"})}),t("p",{children:["The ",e("code",{children:"all"})," option is a shortcut to show all form data."]}),e(o,{Element:Ar,code:Or,caption:"All Data",expand:!0})]}),Dr=()=>t($,{children:[e(d,{path:"",end:!0,element:e(De,{})}),e(d,{path:"Form/*",element:e(vt,{})}),e(d,{path:"Field/*",element:e(Po,{})}),e(d,{path:"Fields",element:e(Qo,{})}),e(d,{path:"Fieldset",element:e(sn,{})}),e(d,{path:"Submit",element:e(gn,{})}),e(d,{path:"Reset",element:e(Cn,{})}),e(d,{path:"Cancel",element:e(qn,{})}),e(d,{path:"CancelSubmit",element:e(Un,{})}),e(d,{path:"ResetSubmit",element:e(mr,{})}),e(d,{path:"CancelResetSubmit",element:e(er,{})}),e(d,{path:"Changed",element:e(pr,{})}),e(d,{path:"Errors",element:e(Tr,{})}),e(d,{path:"Debug",element:e(qr,{})})]});export{Dr as default};
