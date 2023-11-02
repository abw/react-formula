import{a as e,a0 as oe,j as t,T as Q,a1 as ie,a2 as R,F as i,c as l,S as u,a3 as ae,a4 as ne,a5 as de,e as p,N as se,E as o,D as x,a6 as v,a7 as ce,r as b,p as S,a8 as L,d as f,_ as U,$ as d,a9 as me,L as D,X as A,i as q,K as ee,R as w,Y as z,aa as he,C as ue,x as pe,y as fe,ab as be,l as Fe,A as ge,B as xe,ac as Se,m as T,M as Ee,k as ye,ad as ve,ae as j,af as we,ag as Te,Q as $,U as Re,ah as Ce,ai as G,W as te,aj as H,G as E,g as _,ak as Ne,Z as ke,al as Oe,w as M,o as K,u as qe,q as Ae,am as k,an as Pe,ao as le,ap as V,aq as I,f as N,ar as B,as as Y,at as Le,t as C,H as W}from"./index-2ded27f3.js";import{S as s,a as m,c as P}from"./index.esm-b6197137.js";const De=({children:r})=>e(oe,{children:r}),je=()=>t("div",{children:[e("h1",{children:"Components"}),e("p",{className:"intro",children:"This section of the documentation provides detailed information about each of the components."}),e(Q,{menu:ie})]}),Ve=()=>t("div",{children:[e("h1",{children:"Form"}),t("p",{children:["The ",e("code",{children:"Form"})," component is used to render a form. Inside the form you will typically have one or more"," ",e(R,{to:"/field",children:e("code",{children:"Field"})})," components to render the fields and a ",e(R,{to:"/form/submit",children:e("code",{children:"Submit"})})," ","component to add a submit button."]}),t("ul",{className:"menu",children:[e("li",{children:e(R,{to:"./properties",text:"Form properties"})}),t("li",{children:[e(R,{to:"./reset",children:e("code",{children:"Reset"})})," component to reset the form"]}),t("li",{children:[e(R,{to:"./submit",children:e("code",{children:"Submit"})})," component to submit the form"]}),t("li",{children:[t(R,{to:"./controls",children:["Controls combining ",e("code",{children:"Submit"})]})," component to submit the form"]})]})]}),Be=()=>t(i,{fields:{name:{label:"Your name",required:!0},email:{label:"Your email address",required:!0}},children:[e(l,{name:"name"}),e(l,{name:"email"}),e(u,{})]}),Ie=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default FieldsExample`,h=({links:r})=>t("div",{className:"see-also",children:[e("h2",{children:"See Also"}),e("ul",{className:"menu",children:r.map(a=>e($e,{to:a},a))})]}),$e=({to:r})=>{const a=ae[r]||ne(`Invalid SeeAlso link: ${r}`),{about:n}=a;return t("li",{children:[e(de,{to:r}),!!n&&e("span",{className:"about",children:n})]})},Me=()=>t("div",{className:"prose",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"fields"})}),t("p",{children:["The ",e("code",{children:"fields"})," property allows you to define properties for form fields externally.  The ",e(p,{})," ",e(se,{})," property is used to associate a field to its definition."]}),e(o,{Element:Be,code:Ie,caption:"fields",expand:!0}),t("p",{children:["This is the same as defining the properties on the ",e(p,{})," components."]}),e(x,{code:v(Ye),caption:"Inline Field",expand:!0}),t("p",{children:["The ",e("code",{children:"fields"})," definition can contain any number of fields, including those that aren't used by any particular form.  Only the fields that are referenced by a ",e(p,{})," component will be considered part of the form."]}),e("p",{children:"Although it requires a little more work to define fields externally, there are a number of benefits.  The first is that you're separating the field definition from the presentational markup.  When a form gets more complex it's usually easier to have them separated, particularly if you have more complicated validation functions attached to the fields."}),t("p",{children:["Another benefit is that you can share field definitions across multiple forms.  For example, you might want to define a single set of field definitions for all forms relating to user authentication: login, registration, password reset, and so on.  The ",e("code",{children:"email"})," ","field will be the same for each, so it makes sense to define it in one place."]})]}),Ue=()=>t(i,{values:{name:"Bobby Badger",email:"bobby@badgerpower.com"},children:[e(l,{name:"name",label:"Name"}),e(l,{name:"email",label:"Email Address"}),e(u,{})]}),Ge=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default ValuesExample`,He=()=>t("div",{className:"prose",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"values"})}),t("p",{children:["The ",e("code",{children:"values"})," property can be used to pre-define values for fields in the form.  This is typically used when editing existing data records."]}),e(o,{Element:Ue,code:Ge,caption:"fields",expand:!0}),e(h,{links:["form:hidden"]})]}),We=()=>t(i,{values:{name:"Bobby Badger",email:"bobby@badgerpower.com"},hidden:{user_id:12345},children:[e(l,{name:"name",label:"Name"}),e(l,{name:"email",label:"Email Address"}),e(u,{})]}),ze=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default HiddenExample`,_e=()=>t("div",{className:"prose",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"hidden"})}),t("p",{children:["The ",e("code",{children:"hidden"})," property can be used to define hidden values for the form.  This is typically used to include identifiers when editing existing data records."]}),t("p",{children:["Any ",e("code",{children:"hidden"})," fields and their values will be included in the submitted data."]}),e(o,{Element:We,code:ze,caption:"hidden",expand:!0}),e(h,{links:["form:values"]})]});const Ke=()=>t(i,{classes:{required:"required red-bg"},showRequired:!0,children:[e(l,{name:"name",label:"Name",required:!0}),e(l,{name:"email",label:"Email Address"}),e(u,{})]}),Je=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default ClassesExample`,Xe=`.red-bg {
  color: white !important;
  background-color: #c44 !important;
  border-color: black !important;
}`,Ze=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"classes"})}),t("p",{children:["The ",e("code",{children:"classes"})," property can be used to change the"," ",e(ce,{})," used for different elements in a form."]}),e(o,{Element:Ke,code:Je,caption:"classes",expand:!0}),t("p",{children:["This is typically used in conjunction with your own custom stylesheet. For example, the ",e("code",{children:"red-bg"})," CSS class might be defined like this."]}),e(x,{code:Xe,language:"css",caption:"Custom Stylesheet",expand:!0}),t("p",{children:["Note the use of the ",e("code",{children:"!important"})," modifier to increase the specificity of the rule in this example.  The alternative would be to fully qualify it, e.g as ",e("code",{children:".formula .field label .red-bg"}),"."]}),e(h,{links:["styling:css-classes"]})]}),Qe=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:"THIS IS TODO"}),t("pre",{children:["className:         FORMULA",e("br",{}),"errorsInHeader:    true",e("br",{}),"errorsInFooter:    false,",e("br",{}),"enctype:           application/x-www-form-urlencoded",e("br",{}),"method:            post",e("br",{}),"headerClass:       header",e("br",{}),"bodyClass:         body",e("br",{}),"footerClass:       footer",e("br",{}),"errorsClass:       errors",e("br",{}),"errorsTitle:       n => `Form Submission Error... errorPrompt:       Please correct this problem and re-submit:",e("br",{}),"errorsPrompt:      n => `Please correct these... submittingClass:   SUBMITTING,",e("br",{}),"validatingClass:   VALIDATING",e("br",{})]})]}),et=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetFocusExample`,tt=()=>{const[r,a]=b.useState(!1);return t(S,{children:[t(i,{onLoad:a,children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",type:"textarea"}),e(l,{name:"field3",label:"Field Three",type:"checkbox",text:"One Louder"}),e(l,{name:"field4",label:"Field Four",type:"select",options:["Nigel","David","Derek"]}),e(l,{name:"field5",label:"Field Five",type:"radio",default:"Keyboards",className:"inline",options:["Vocals","Guitar","Bass","Keyboards","Drums"]})]}),t("div",{className:"formula",children:[e("button",{onClick:()=>r==null?void 0:r.setFocus("field1"),children:"Focus One"}),e("button",{onClick:()=>r==null?void 0:r.setFocus("field2"),children:"Focus Two"}),e("button",{onClick:()=>r==null?void 0:r.setFocus("field3"),children:"Focus Three"}),e("button",{onClick:()=>r==null?void 0:r.setFocus("field4"),children:"Focus Four"}),e("button",{onClick:()=>r==null?void 0:r.setFocus("field5"),children:"Focus Five"})]})]})},lt=`import { Form, Field, useForm } from '../../../../../lib/index.js'

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

export default UseFormFocus`,rt=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two"}),e(J,{name:"field1",caption:"Focus Field One"}),e(J,{name:"field2",caption:"Focus Field Two"})]}),J=({name:r,caption:a})=>{const{setFocus:n}=L();return e("button",{onClick:c=>{c.preventDefault(),n(r)},children:a})},ot=`import { useForm } from '../../../../../lib/index.js'

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

export default FieldFocusButton`,it=()=>t("div",{children:[e("h1",{children:"Focus Fields"}),e("h2",{children:e("code",{children:"setFocus()"})}),t("p",{children:["You can programmatically set the focus on a ",e(p,{})," by calling the ",e("code",{children:"setFocus()"})," method on the ",e(f,{}),", passing the name of the field that you want to focus as an argument."]}),t("p",{children:["You can capture a reference to the form using the ",e("code",{children:"onLoad"})," ","property to set a state variable, as shown in this example."]}),e(o,{Element:tt,code:et,caption:"onLoad() and setFocus()",children:e("p",{children:"Click on one of the buttons to focus on a field."})}),t("p",{children:["If the buttons (or other controls) that you want to use to focus the fields are contained within the ",e(f,{})," then you can call the ",e("code",{children:"useForm()"})," function to gain access to the form context."]}),e(o,{Element:rt,code:lt,caption:"useForm() and setFocus()"}),t("p",{children:["Be careful to make sure that your buttons call"," ",e("code",{children:"e.preventDefault()"})," on the event, as shown in the example above, otherwise the form may be submitted.  Alternately you can pass the event to the ",e("code",{children:"setFocus()"})," method as the second argument and it will do it for you, as shown below."]}),e(x,{code:v(ot),expand:!0})]}),at=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(u,{})]}),nt=`import { Form, Field, Submit } from '../../../../../../lib/index.js'

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

export default SubmitExample`,dt=()=>t("div",{className:"prose",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"validate"})}),e("p",{className:"intro wide",children:"Validation can be applied on two levels: on individual fields and/or on the form."}),t(s,{children:[t("p",{children:["You can specify a field is ",e("code",{children:"required"}),", as shown here, or define your own custom ",e(R,{to:"/components/field/validation",text:"field validation"})," functions. When the form is submitted, each field will be validated.  If any validation errors occur then the form submission will be cancelled and the errors displayed."]}),e(m,{children:"Try entering some text in the fields below then click on the Submit button.  The first two fields are required so you can leave either of the them empty to see the validation errors."})]}),e(o,{Element:at,code:nt,caption:"Required Fields",expand:!0}),t("p",{children:["You can also define a ",e("code",{children:"validate"})," function on the ",e(f,{}),". This will be run after any field validation and will be passed"]})]}),st=()=>{const[r,a]=b.useState();return t(i,{onSubmit:n=>a(`foo was submitted as ${n.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(u,{}),r]})},ct=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnSubmitExample`,mt=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onSubmit"})}),e("p",{children:"TODO"}),e(o,{Element:st,code:ct,caption:"onSubmit",expand:!0,children:e("p",{children:"TODO"})}),e(h,{links:["form:onSuccess","form:onError"]})]}),ht=()=>{const[r,a]=b.useState();return t(i,{onSubmit:n=>a(`foo was submitted as ${n.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(u,{}),r]})},ut=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnSuccessExample`,pt=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onSuccess"})}),e("p",{children:"TODO"}),e(o,{Element:ht,code:ut,caption:"onSuccess",expand:!0,children:e("p",{children:"TODO"})}),e(h,{links:["form:onSubmit","form:onError"]})]}),ft=()=>{const[r,a]=b.useState();return t(i,{onSubmit:n=>a(`foo was submitted as ${n.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(u,{}),r]})},bt=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnErrorExample`,Ft=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onError"})}),e("p",{children:"TODO"}),e(o,{Element:ft,code:bt,caption:"onError",expand:!0,children:e("p",{children:"TODO"})}),e(h,{links:["form:onSubmit","form:onError"]})]}),gt=`import { Form, Field } from '../../../../../../lib/index.js'

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

export default SetValues`,xt=()=>{const[r,a]=b.useState(),n=(c,F)=>r==null?void 0:r.setValues({color:c,animal:F});return t(S,{children:[t(i,{onLoad:a,children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"})]}),e("button",{onClick:()=>n("Grey","Elephant"),children:"Grey Elephant"}),e("button",{onClick:()=>n("Red","Fox"),children:"Red Fox"})]})},St=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

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

export default UseSetValues`,Et=()=>e(S,{children:t(i,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),e(X,{color:"Grey",animal:"Elephant"}),e(X,{color:"Red",animal:"Fox"})]})}),X=({color:r,animal:a})=>{const{setValues:n}=L();return t("button",{onClick:c=>{c.preventDefault(),n({color:r,animal:a},c)},children:[r," ",a]})},yt=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

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

export default UseSetValues`,vt=()=>e(S,{children:t(i,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),e(Z,{color:"Grey",animal:"Elephant"}),e(Z,{color:"Red",animal:"Fox"})]})}),Z=({color:r,animal:a})=>{const{setValues:n}=L();return t("button",{onClick:c=>n({color:r,animal:a},c),children:[r," ",a]})},wt=()=>t("div",{children:[e("h1",{children:"Setting Form Values"}),e("h2",{children:"setValues()"}),t("p",{children:["The ",e("code",{children:"setValues"})," function can be used to programmatically set form values.  You can use the ",e("code",{children:"onLoad"})," handler to save a reference to the form context as show in this example."]}),e(o,{Element:xt,code:gt,caption:"setValues",children:e("p",{children:"Click on one of the buttons to update the form values."})}),t("p",{children:["If you want to set the values from a component placed inside the"," ",e("code",{children:"Form"})," component then you can use ",e("code",{children:"useForm()"})," to get access to the form context."]}),e(o,{Element:Et,code:St,caption:"setValues"}),t("p",{children:["If you're using a ",e("code",{children:"button"})," to trigger the call to"," ",e("code",{children:"setValues()"}),", as shown in the example above, then you need to make sure you call ",e("code",{children:"e.preventDefault()"})," event.  Otherwise the form may be submitted. Alternately you can pass the event as the second argument to the ",e("code",{children:"setValues()"})," method as shown below and it will do it for you."]}),e(o,{Element:vt,code:yt,caption:"setValues"})]}),Tt=()=>t(U,{children:[e(d,{path:"",end:!0,element:e(Ve,{})}),e(d,{path:"fields",element:e(Me,{})}),e(d,{path:"values",element:e(He,{})}),e(d,{path:"hidden",element:e(_e,{})}),e(d,{path:"classes",element:e(Ze,{})}),e(d,{path:"properties",element:e(Qe,{})}),e(d,{path:"setfocus",element:e(it,{})}),e(d,{path:"validate",element:e(dt,{})}),e(d,{path:"onSubmit",element:e(mt,{})}),e(d,{path:"onSuccess",element:e(pt,{})}),e(d,{path:"onError",element:e(Ft,{})}),e(d,{path:"set/*",element:e(wt,{})})]}),Rt=`import { Form, Field } from '../../../../lib/index.js'

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

export default FieldExample`,Ct=()=>e(i,{children:e(l,{name:"example",label:"An Example Field",type:"text",required:!0})}),Nt=()=>t(S,{children:[e("h1",{children:"Field Component"}),t("p",{className:"intro",children:["The ",e("code",{children:"Field"})," component is used to render a field inside a ",e(f,{}),"."]}),e(o,{Element:Ct,code:Rt,caption:"Field",expand:!0}),e(Q,{menu:me})]}),kt=`import { Form, Field, Layout } from '@/lib/index.js'

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
        <div>
          Current value is: {field.value}
        </div>
      }
      { field =>
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
      }
    </Field>
  </Form>

export default ChildFunctions`,Ot=()=>e(i,{children:t(l,{name:"greeting",label:"Enter a greeting",children:[r=>t("h2",{className:"mar-t-none",children:["The ",r.name," field"]}),e(D,{}),r=>t("div",{children:["Current value is: ",r.value]}),r=>t("div",{className:"flex gap-2 blue mar-t-4",children:[e("button",{type:"button",onClick:()=>r.setValue("Foo"),children:"Foo"}),e("button",{type:"button",onClick:()=>r.setValue("Bar"),children:"Bar"})]})]})}),qt=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"children"})}),e("p",{children:"You can define children of a field, either as components or functions. Component can access the field context Functions receive the field context as the first argument."}),t("p",{children:["Note that if you define children for the field then it will replace the default ",e(A,{})," component.  In this case it's up to you to render the field content."]}),t("p",{children:["If you want to include the default layout for a field and add some content of your own then you can include the ",e(A,{})," component manually."]}),e(o,{Element:Ot,code:kt,caption:"suffix",expand:!0})]}),At=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default HelpExample`,Pt=()=>t(i,{children:[e(l,{name:"email",label:"Email Address",help:"Enter the email address that you registered with",required:!0}),e(u,{})]}),Lt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"help"})}),t(s,{align:"end",children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"help"})," property can be used to define some additional help for the user.  By default it is displayed underneath the field input."]}),e("p",{children:"If the field input fails to validate then the validation error message will be displayed in its place."})]}),e(m,{children:"Try submitting the form without entering any value.  You should see the help message replaced by the validation error."})]}),e(o,{Element:Pt,code:At,caption:"help"}),e(h,{links:["field:name","field:label","field:required","field:validate","form:fields"]})]}),Dt=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Hello World!"/>
  </Form>

export default LabelExample`,jt=()=>e(i,{children:e(l,{name:"field1",label:"Hello World!"})}),Vt=`import { Form, Field } from '@/lib/index.js'

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

export default FormFieldsExample`,Bt={field1:{label:"This is field one"},field2:{label:"This is field two"}},It=()=>t(i,{fields:Bt,children:[e(l,{name:"field1"}),e(l,{name:"field2",label:"A different label"})]}),Yt=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"label"})}),t("p",{children:["Add a label to the field with the ",e("code",{children:"label"})," property."]}),e(o,{Element:jt,code:Dt,caption:"name",expand:!0}),t(s,{children:[t("p",{children:["Like all other field properties, they can be defined via ",e(q,{})," ","on the ",e(f,{}),".  If you explicitly set a ",e("code",{children:"label"})," on the"," ",e(p,{})," then it will take precedence."]}),t(m,{children:["Note how the first field has the ",e("code",{children:"label"})," defined in the"," ",e(q,{})," but the second defines its own ",e("code",{children:"label"})," ","which is used instead of the one defined in the ",e(q,{}),"."]})]}),e(o,{Element:It,code:Vt,caption:"Form fields",expand:!0}),e(h,{links:["field:name","form:fields"]})]}),$t=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const NameExample = () =>
  <Form>
    <Field name="field1"/>
    <Submit/>
  </Form>

export default NameExample`,Mt=()=>t(i,{children:[e(l,{name:"field1"}),e(u,{})]}),Ut=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default FormFieldsExample`,Gt={field1:{label:"This is field one",required:!0}},Ht=()=>t(i,{fields:Gt,children:[e(l,{name:"field1"}),e(u,{})]}),Wt=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"name"})}),t(s,{children:[t("p",{children:["The ",e("code",{children:"name"})," is the only required property for a ",e(p,{}),". It is used as the key to set the ",e(f,{})," value."]}),t(m,{children:["Enter some text in the input field.  The ",e(ee,{}),` component is included in this example to show the form data as it's being set.  Click on the "Submit" button and you'll see an alert showing the data that would be submitted.`]})]}),e(o,{Element:Mt,code:$t,caption:"name",expand:!0}),t(s,{children:[t("p",{children:["You can set the ",e(q,{})," property on the ",e(f,{})," as an object containing additional properties for each field.  The"," ",e("code",{children:"name"})," is used as the key to fetch those properties. Any properties explicitly set on the ",e(p,{})," will override them."]}),t(m,{children:["Note how the ",e(p,{})," has now got a ",e("code",{children:"label"})," and the"," ",e(w,{})," property is set."]})]}),e(o,{Element:Ht,code:Ut,caption:"Form fields",expand:!0}),e(h,{links:["field:label","form:fields"]})]}),zt=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const TypeExample = () =>
  <Form>
    <Field
      name="field1"
      label="Text Field"
    />
    <Field
      name="field2"
      type="textarea"
      label="TextArea Field"
    />
    <Field
      name="field3"
      type="number"
      label="Number Field"
    />
    <Field
      name="field4"
      type="date"
      label="Date Field"
    />
    <Field
      name="field5"
      type="select"
      label="Select Field"
      options={['Badger', 'Ferret', 'Stoat']}
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

export default TypeExample`,_t=()=>t(i,{children:[e(l,{name:"field1",label:"Text Field"}),e(l,{name:"field2",type:"textarea",label:"TextArea Field"}),e(l,{name:"field3",type:"number",label:"Number Field"}),e(l,{name:"field4",type:"date",label:"Date Field"}),e(l,{name:"field5",type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"]}),e(l,{name:"field6",type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]}),e(l,{name:"field7",type:"checkbox",label:"Checkbox Field",text:"I like badgers"})]}),Kt=`import { Form, Field } from '@/lib/index.js'

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
    <Field name="field1"/>
    <Field name="field2"/>
    <Field name="field3"/>
    <Field name="field4"/>
    <Field name="field5"/>
    <Field name="field6"/>
    <Field name="field7"/>
  </Form>

export default FormFieldsExample`,Jt={field1:{label:"Text Field"},field2:{type:"textarea",label:"TextArea Field"},field3:{type:"number",label:"Number Field"},field4:{type:"date",label:"Date Field"},field5:{type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"]},field6:{type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]},field7:{type:"checkbox",label:"Checkbox Field",text:"I like badgers"}},Xt=()=>t(i,{fields:Jt,children:[e(l,{name:"field1"}),e(l,{name:"field2"}),e(l,{name:"field3"}),e(l,{name:"field4"}),e(l,{name:"field5"}),e(l,{name:"field6"}),e(l,{name:"field7"})]}),Zt=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"type"})}),t(s,{align:"end",children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"type"})," property specifies what kind of input should be displayed.  The default value is ",e("code",{children:"text"})," corresponding to the ",e(z,{})," input component.  Other values can be"," ",e("code",{children:"textarea"})," (see ",e(he,{}),"),"," ",e("code",{children:"checkbox"})," (see ",e(ue,{}),"),"," ",e("code",{children:"radio"})," (see ",e(pe,{}),"),"," ",e("code",{children:"select"})," (see ",e(fe,{}),") and"," ",e("code",{children:"hidden"})," (see ",e(be,{}),") corresponding to the basic HTML input types."]}),t("p",{children:["You can also set ",e("code",{children:"type"})," to be one of the other valid HTML input types, e.g. ",e("code",{children:"password"}),", ",e("code",{children:"email"}),","," ",e("code",{children:"number"}),", ",e("code",{children:"date"}),", ",e("code",{children:"color"}),", and so on.  These use the same basic ",e(z,{})," input component as for ",e("code",{children:"text"})," types, but with the ",e("code",{children:"type"})," attribute set appropriately to use the browser-specific functionality."]})]}),e(m,{children:"Enter some text in the input fields below. Note how the number field uses the browser's built-in functionality to accept only numbers, and the date field provides a date picker."})]}),e(o,{Element:_t,code:zt,caption:"type",expand:!0}),t(s,{children:[t("p",{children:["As with all other ",e(p,{})," properties, they can be defined using"," ",e(q,{})," set on the ",e(f,{}),". The benefit of this approach is that it keeps the field definitions and markup separate.  As well as making them easier to read and maintain, it also has the benefit that field definitions can be reused across multiple forms."]}),t(m,{children:["The example below generates exactly the same form as the one above (with the exception of the additional ",e(ee,{})," component). Note that the form data will only include fields that are present in the ",e(f,{}),".  The ",e("code",{children:"field5"})," field definition is effectively ignored."]})]}),e(o,{Element:Xt,code:Kt,caption:"Form fields",expand:!0}),e(h,{links:["field:name","field:label","form:fields","input:types"]})]}),Qt=`import { Form, Field } from '@/lib/index.js'

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

export default PlaceholderExample`,el=()=>e(i,{children:e(l,{name:"name",label:"Your Name",placeholder:"Enter your name"})}),tl=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"placeholder"})}),t("p",{children:["Use the ",e("code",{children:"placeholder"})," property to add some text as a placeholder in the input."]}),e(o,{Element:el,code:Qt,caption:"placeholder",expand:!0}),e(h,{links:["field:name","form:fields"]})]}),ll=`import { Form, Field } from '@/lib/index.js'

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

export default PrefixExample`,rl=()=>e(i,{children:e(l,{name:"money",type:"number",label:"Price",prefix:"$"})}),ol=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"prefix"})}),t("p",{children:["You can add a ",e("code",{children:"prefix"})," to a ",e("code",{children:"text"})," field or any of the other types using the basic text input, e.g."," ",e("code",{children:"money"}),", ",e("code",{children:"date"}),", etc."]}),e(o,{Element:rl,code:ll,caption:"prefix",expand:!0}),e(h,{links:["field:suffix"]})]}),il=`import { Form, Field } from '@/lib/index.js'

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

export default SuffixExample`,al=()=>e(i,{children:e(l,{name:"suffix",type:"password",label:"Enter your password",suffix:"🔒"})}),nl=`import { Form, Field } from '@/lib/index.js'

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

export default PrefixSuffixExample`,dl=()=>e(i,{children:e(l,{name:"money",type:"number",label:"Field with both prefix and suffix",prefix:"$",suffix:".00"})}),sl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"suffix"})}),t("p",{children:["You can add a ",e("code",{children:"suffix"})," to a field"]}),e(o,{Element:al,code:il,caption:"suffix",expand:!0}),t("p",{children:["You can add both a ",e("code",{children:"prefix"})," and a ",e("code",{children:"suffix"}),"."]}),e(o,{Element:dl,code:nl,caption:"prefix and suffix",expand:!0}),e(h,{links:["field:prefix"]})]}),cl=()=>t(i,{children:[e(l,{name:"regular",label:"Regular Field"}),e(l,{name:"wide",label:"Wide Field"}),e(l,{name:"wide-textarea",type:"textarea",label:"Wide Text Area Field"})]}),ml=`import { Form, Field } from '@/lib/index.js'

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
    />
    <Field
      name="wide-textarea"
      type="textarea"
      label="Wide Text Area Field"
    />
  </Form>

export default Wide`,hl=()=>t(i,{children:[e(l,{name:"zero",label:"Narrow Text Field"}),e(l,{name:"one",label:"Text Field"}),e(l,{name:"two",label:"Text Area Field",type:"textarea"}),e(l,{name:"three",label:"Select Field",type:"select",options:["Badger","Ferret","Stoat"]}),e(l,{name:"four",label:"Checkbox Field",type:"checkbox",text:"Badgers are cool"}),e(l,{name:"five",label:"Radio Button Field",type:"radio",options:["Badger","Ferret","Stoat"]})]}),ul=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Wide = () =>
  <Form>
    <Field
      name="zero"
      label="Narrow Text Field"
    />
    <Field
      name="one"
      label="Text Field"
    />
    <Field
      name="two"
      label="Text Area Field"
      type="textarea"
    />
    <Field
      name="three"
      label="Select Field"
      type="select"
      options={['Badger', 'Ferret', 'Stoat']}
    />
    <Field
      name="four"
      label="Checkbox Field"
      type="checkbox"
      text="Badgers are cool"
    />
    <Field
      name="five"
      label="Radio Button Field"
      type="radio"
      options={['Badger', 'Ferret', 'Stoat']}
    />
  </Form>

export default Wide`,pl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"wide"})}),t("p",{children:["The default behaviour is for fields to be fluid in width. You can add the ",e("code",{children:"wide"})," property to make it expand to the full width of the container."]}),e(o,{Element:cl,code:ml,caption:"wide",expand:!0}),t("p",{children:["If wide fields are your thing, you can add the ",e("code",{children:"wide"})," property to the form and all the fields will inherit it as the default.  You can set ",e("code",{children:"wide"})," to ",e("code",{children:"false"})," if you don't want a particular field to be full-width."]}),e(o,{Element:hl,code:ul,caption:"wide form",expand:!0})]}),fl={alice:!0,bob:!0,charlie:!0},bl={username:{label:"Username",help:"Choose a username (minimum length: 3)",validateOnChange:!0,minValidateLength:3,validate:(r,a,n,c)=>{r.length<3&&c({message:"Your username must be at least 3 characters"}),fl[r.toLowerCase()]?c({message:"Sorry, that username is taken"}):n({message:"That username is available"})}}},Fl=()=>t(i,{fields:bl,children:[e(l,{name:"username"}),e(u,{})]}),gl=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default MinValidateLengthExample`,xl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"minValidateLength"})}),t(s,{children:[t("p",{children:["You can set the ",e(Fe,{})," property flag to enable validation any time the field value changes.  The"," ",e("code",{children:"minValidateLength"})," property can be set to only trigger validation when the input length exceeds a threshold."]}),t(m,{children:["Enter a username in the form below.  The usernames ",e("code",{children:"alice"}),",",e("code",{children:"bob"})," and ",e("code",{children:"charlie"})," will return a validation error saying that they're not available.  There's a minimum length for a username so we wait until at least three characters have been entered before checking to see if the username is available.  Note that the validation will also be triggered when the form is submitted, regardless of how many characters have been entered.  For that reason the validation function also rejects any username that is too short."]})]}),e(o,{Element:Fl,code:gl,caption:"minValidateLength"}),e(h,{links:["field:required","field:validate","field:validateOnBlur","field:validateOnChange"]})]}),Sl=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OptionalLabel = () =>
  <Form showOptional optionalLabel="Not required">
    <Field
      name="field1"
      label="Optional Field"
    />
    <Field
      name="field2"
      label="Another Optional Field"
      optionalLabel="Nice to have"
    />
  </Form>

export default OptionalLabel`,El=()=>t(i,{showOptional:!0,optionalLabel:"Not required",children:[e(l,{name:"field1",label:"Optional Field"}),e(l,{name:"field2",label:"Another Optional Field",optionalLabel:"Nice to have"})]}),yl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"optionalLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"optionalLabel"})," property to change the label that is display for optional fields (i.e. those that aren't marked as ",e(w,{}),") that have the"," ",e(ge,{})," option set.  You can set it on individual"," ",e(p,{})," components or on the parent ",e(f,{})," to act as a default for all fields."]}),e(o,{Element:El,code:Sl,caption:"optionalLabel",expand:!0}),e(h,{links:["field:required","field:showRequired","field:showOptional","field:requiredLabel"]})]}),vl=`import { Form, Field } from '@/lib/index.js'

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

export default PrepareValue`,wl={upper:{label:"Converted to UPPER CASE",prepareValue:r=>r.toUpperCase()}},Tl=()=>e(i,{fields:wl,children:e(l,{name:"upper"})}),Rl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"prepareValue"})}),t(s,{children:[t("p",{children:["You can add a ",e("code",{className:"code",children:"prepareValue"})," function to a ",e(p,{})," to prepare the value before it's set."]}),e(m,{children:"Try entering some letters in the field below.  You should see that they get converted to upper case."})]}),e(o,{Element:Tl,code:vl,caption:"onChange",expand:!0}),e(h,{links:["field:validate","field:validateOnBlur","field:validateOnChange"]})]}),Cl=()=>t(i,{children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(u,{})]}),Nl=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const Required = () =>
  <Form>
    <Field name="field1" label="Required Field" required/>
    <Submit/>
  </Form>

export default Required`,kl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"required"})}),t(s,{align:"end",children:[t("p",{children:["You can add a ",e("code",{children:"required"})," property to a field to mark it as being required.  This automatically adds a validator to the field to ensure that a value is provided when the form is submitted."]}),e(m,{children:"Try submitting the form without entering anything in the field input."})]}),e(o,{Element:Cl,code:Nl,caption:"required",expand:!0}),e(h,{links:["field:showRequired","field:requiredLabel","field:requiredMessage","field:validateOnBlur","field:validateOnChange"]})]}),Ol=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RequiredLabel = () =>
  <Form showRequired requiredLabel="Important!">
    <Field
      name="field1"
      label="Required Field"
      required
    />
    <Field
      name="field2"
      label="Another Required Field"
      requiredLabel="Very Important!"
      required
    />
  </Form>

export default RequiredLabel`,ql=()=>t(i,{showRequired:!0,requiredLabel:"Important!",children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(l,{name:"field2",label:"Another Required Field",requiredLabel:"Very Important!",required:!0})]}),Al=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredLabel"})," property to change the label that is displayed for ",e(w,{})," fields that have the ",e(xe,{})," option enabled.  You can set it on individual ",e(p,{})," components or on the parent ",e(f,{}),"."]}),e(o,{Element:ql,code:Ol,caption:"requiredLabel",expand:!0}),e(h,{links:["field:required","field:showRequired","field:showOptional","field:optionalLabel"]})]}),Pl=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default RequiredLabel`,Ll=()=>t(i,{requiredMessage:"Nothing will come of nothing",children:[e(l,{name:"foo",label:"Foo",required:!0}),e(l,{name:"bar",label:"Bar",required:!0,requiredMessage:"You really MUST enter a value"}),e(u,{})]}),Dl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredMessage"})}),t(s,{align:"end",children:[t("div",{children:[t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredMessage"})," property to change the error message that is generated for ",e(w,{})," fields that aren't completed."]}),t("p",{children:["You can set it on individual ",e(p,{})," components or on the parent"," ",e(f,{})," to act as the default for all fields."]})]}),t(m,{children:["Try submitting the form without entering any values.  You should see the form-wide ",e("code",{children:"requiredMessage"})," displayed for the first field, and the field-specific value for the second."]})]}),e(o,{Element:Ll,code:Pl,caption:"requiredMessage",expand:!0}),e(h,{links:["field:required","field:showRequired","field:requiredLabel","field:validateOnChange","field:validateOnBlur"]})]}),jl=()=>t(i,{showOptional:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(l,{name:"field2",label:"Optional Field"})]}),Vl=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowOptional = () =>
  <Form showOptional>
    <Field
      name="field1"
      label="Required Field"
      required
    />
    <Field
      name="field2"
      label="Optional Field"
    />
  </Form>

export default ShowOptional`,Bl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showOptional"})}),t("p",{children:["If a field is ",e("b",{children:"NOT"})," marked as ",e(w,{})," then it is optional. If you set the ",e("code",{children:"showOptional"})," property then it will add an additional label to a field to indicate that it's optional.  You can set the property on individual ",e(p,{})," components or on the parent ",e(f,{})," to act as a default for all fields."]}),t("p",{children:["You can use the ",e(Se,{})," property to change the text of the label that is displayed."]}),e(o,{Element:jl,code:Vl,caption:"showOptional",expand:!0}),e(h,{links:["field:required","field:optionalLabel","field:showRequired","field:requiredLabel"]})]}),Il=()=>t(i,{children:[e(l,{name:"field1",label:"Required Field",required:!0,showRequired:!0}),e(l,{name:"field2",label:"Optional Field"})]}),Yl=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowRequired = () =>
  <Form>
    <Field
      name="field1"
      label="Required Field"
      required showRequired
    />
    <Field
      name="field2"
      label="Optional Field"
    />
  </Form>

export default ShowRequired`,$l=()=>t(i,{showRequired:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(l,{name:"field2",label:"Optional Field"})]}),Ml=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowRequiredForm = () =>
  <Form showRequired>
    <Field
      name="field1"
      label="Required Field"
      required
    />
    <Field
      name="field2"
      label="Optional Field"
    />
  </Form>

export default ShowRequiredForm`,Ul=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showRequired"})}),t("p",{children:["If a ",e(p,{})," is marked as ",e(w,{})," then the"," ",e("code",{children:"showRequired"})," property can be added to have an additional label displayed indicating that it is required."]}),e(o,{Element:Il,code:Yl,caption:"showRequired on Field",expand:!0}),t("p",{children:["The ",e("code",{children:"showRequired"})," property can also be added to the"," ",e(f,{})," to have it apply to all ",e(w,{})," fields."]}),e(o,{Element:$l,code:Ml,caption:"showRequired on Form",expand:!0}),e(h,{links:["field:required","field:requiredLabel","field:showOptional","field:optionalLabel"]})]}),Gl={username:{label:"Username",help:"Enter your username",validate:r=>P().trim().required("You must enter your username you numpty!").validate(r)},password:{label:"Password",type:"password",help:"Enter your password",validate:r=>P().trim().required("You must enter your password you muppet!").validate(r)}},Hl=()=>t(i,{fields:Gl,children:[e(T,{names:"username password"}),e(u,{})]}),Wl=`import { Form, Fields, Submit } from '@/lib/index.js'

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

export default ValidateExample`,zl={username:{label:"Username",help:"Enter your username",validate:async(r,a,n,c)=>{r.match(/badger/i)?n({value:`${r} is a great name`}):c({value:"Mr Badger",message:'Your username must contain the word "badger"'})}}},_l=()=>t(i,{fields:zl,children:[e(l,{name:"username"}),e(u,{})]}),Kl=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default ValidateExample`,Jl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validate"})}),t(s,{align:"end",children:[t("div",{children:[t("p",{children:["You can use the ",e(w,{})," property to mark a field as being required, but it's a blunt instrument.  All it will do is check that a field has some value entered. For more robust validation you can use the ",e("code",{children:"validate"})," property to define an ",e("code",{children:"async"})," ","validation function."]}),t("p",{children:["In this example we're using"," ",e("a",{href:"https://www.npmjs.com/package/yup",children:"Yup"})," but you can use anything you like.  It should return the validated value on success or throw an error if the valid is invalid."]})]}),e(m,{children:"Try submitting the form without entering any values for either of the fields. You should see the custom validation errors."})]}),e(o,{Element:Hl,code:Wl,caption:"validate"}),t(s,{align:"end",children:[t("p",{children:[e("h3",{children:"NOTE: this may change"}),"The ",e("code",{children:"validate"})," function is passed four arguments.  The first is the field value for common cases where that's all you need to determine if the field is valid.  The second argument is the field context containing everything you need to know about the field state and callable actions to change it.  The third and fourth arguments are"," ",e("code",{children:"resolve"})," and ",e("code",{children:"reject"})," functions which can be called to validate or invalidate the field, respectively.  The"," ",e("code",{children:"resolve"})," function should be passed an object containing the ",e("code",{children:"value"}),", which may be modified by your function. The ",e("code",{children:"reject"})," function should be passed an object containing an error ",e("code",{children:"message"}),", and optionally a new ",e("code",{children:"value"})," ","for the field."]}),e(m,{children:'In this somewhat contrived example we require the user to enter a username containing the word "badger".'})]}),e(o,{Element:_l,code:Kl,caption:"validate"}),e(h,{links:["field:required","field:validateOnChange","field:validateOnBlur"]})]}),Xl={username:{label:"Username",help:"Enter your username",validate:r=>P().trim().required("You must enter your username you numpty!").validate(r)},password:{label:"Password",type:"password",help:"Enter your password",validate:r=>P().trim().required("You must enter your password you muppet!").validate(r)}},Zl=()=>t(i,{fields:Xl,validateOnBlur:!0,children:[e(T,{names:"username password"}),e(u,{})]}),Ql=`import { Form, Fields, Submit } from '@/lib/index.js'

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

export default ValidateExample`,er=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnBlur"})}),t(s,{children:[t("p",{children:["The ",e("code",{children:"validateOnBlur"})," property can be set to trigger validation whenever a field is blurred.  You can set it on individual"," ",e(p,{})," components or on the parent ",e(f,{})," to have it apply to all fields."]}),e(m,{children:"Try switching focus from one field to another without entering anything.  You should see the custom validation errors when each field is blurred."})]}),e(o,{Element:Zl,code:Ql,caption:"validate"}),e(h,{links:["field:required","field:validate","field:validateOnChange"]})]}),tr=`import { Form, Field } from '@/lib/index.js'

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

export default ValidateOnChangeExample`,lr={vowels:{label:"Vowels",help:"Enter between 3 and 5 vowels",validateOnChange:!0,minValidateLength:3,validate:r=>P().trim().matches(/^[^y]*$/i,"Sorry, but y is not allowed").matches(/^[aeiou]*$/i,"You should only type vowels").min(3,"You must enter at least three vowels").max(5,"You should not enter more than 5 vowels").validate(r)}},rr=()=>e(i,{fields:lr,children:e(l,{name:"vowels"})}),or=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnChange"})}),t(s,{children:[t("p",{children:["You can set the ",e("code",{children:"validateOnChange"})," flag to enable validation any time the field value changes.  The ",e(Ee,{})," property can be set to only trigger validation when the input length exceeds a threshold."]}),e(m,{children:"Enter some text in the field below.  Once you've entered three letters the validation will kick in.  You should see an error if you enter any letters that aren't vowels."})]}),e(o,{Element:rr,code:tr,caption:"validateOnChange"}),e(h,{links:["field:required","field:validate","field:validateOnBlur","field:minValidateLength"]})]}),ir=()=>{const[r,a]=b.useState(),n=c=>a(`${c.label} was blurred`);return t(i,{children:[e(l,{name:"foo",label:"The Foo Field",onBlur:n}),e(l,{name:"bar",label:"The Bar Field",onBlur:n}),r]})},ar=`import { Form, Field } from '@/lib/index.js'

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
export default OnBlurExample`,nr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onBlur"})}),t(s,{children:[t("p",{children:["You can add an ",e("code",{children:"onBlur"})," handler to a ",e(p,{})," ","which will be called when the field is blurred (i.e. unselected). The field context will be passed as an argument."]}),e(m,{children:"Focus on one of the fields below and then select the other field. A message should be displayed each time a field loses focus."})]}),e(o,{Element:ir,code:ar,caption:"onFocus",expand:!0}),e(h,{links:["field:validateOnBlur","field:onFocus","field:onChange","field:onValid","field:onInvalid"]})]}),dr=`import { Form, Field } from '@/lib/index.js'

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

export default OnChangeExample`,sr=()=>{const[r,a]=b.useState("");return t(i,{children:[e(l,{name:"example",label:"Field with onChange",onChange:n=>a(n.value)}),"Current value: ",r]})},cr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onChange"})}),t(s,{children:[t("p",{children:["You can add an ",e("code",{children:"onChange"})," handler to a ",e(p,{})," ","which will be called when the field value is changed.  The field context will be passed as an argument."]}),e(m,{children:'Try entering some text in the field below.  You should see the "Current value" display update to reflect the field content.'})]}),e(o,{Element:sr,code:dr,caption:"onChange",expand:!0}),e(h,{links:["field:validateOnChange","field:onBlur","field:onFocus","field:onValid","field:onInvalid"]})]}),mr=()=>{const[r,a]=b.useState(),n=c=>a(`${c.label} was focussed`);return t(i,{children:[e(l,{name:"foo",label:"The Foo Field",onFocus:n}),e(l,{name:"bar",label:"The Bar Field",onFocus:n}),r]})},hr=`import { Form, Field } from '@/lib/index.js'

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

export default OnFocusExample`,ur=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onFocus"})}),t(s,{children:[t("p",{children:["You can add an ",e("code",{children:"onFocus"})," handler to a ",e(p,{})," ","which will be called when the field is focussed (i.e. selected). The field context will be passed as an argument."]}),e(m,{children:"Focus on each of the fields below.  A message should be displayed each time a field gains focus."})]}),e(o,{Element:mr,code:hr,caption:"onFocus",expand:!0}),e(h,{links:["field:onBlur","field:onChange","field:onValid","field:onInvalid"]})]}),pr=()=>{const[r,a]=b.useState(),n=c=>a(`${c.label} is invalid: ${c.message}`);return t(i,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onInvalid:n}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:n,requiredMessage:"You must enter a value"}),r]})},fr=`import { Form, Field } from '@/lib/index.js'

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

export default OnInvalidExample`,br=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onInvalid"})}),t(s,{children:[t("p",{children:["You can add an ",e("code",{children:"onInvalid"})," handler to a ",e(p,{})," ","which will be called when the field fails validation. The field context will be passed as an argument."]}),t(m,{children:[t("p",{children:["Click one of the fields below and then select the other field without entering any text. The ",e(ye,{})," option on the"," ",e(f,{})," "," means that the fields will be validated when they lose focus. They're both marked as ",e(w,{})," so they will fail validation (assuming you haven't entered anything) and the ",e("code",{children:"onInvalid"})," handler will be called."]}),t("p",{children:["Also note the use of ",e(ve,{})," to set a custom message for the second field."]})]})]}),e(o,{Element:pr,code:fr,caption:"onInvalid",expand:!0}),e(h,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onValid"]})]}),Fr=()=>{const[r,a]=b.useState();return t(i,{children:[e(l,{name:"foo",label:"Foo Field",onLoad:a}),t("div",{className:"grid-4 gap-2",children:[e("button",{type:"button",onClick:()=>r.reset(),children:"Reset"}),e("button",{type:"button",onClick:()=>r.setValue("Hello"),children:"Hello"}),e("button",{type:"button",onClick:()=>r.setValue("Goodbye"),children:"Goodbye"}),e("button",{type:"button",onClick:()=>r.setFocus(),children:"Focus"})]})]})},gr=`import { Form, Field } from '@/lib/index.js'

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

export default OnLoadExample`,xr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onLoad"})}),t(s,{children:[t("p",{children:["You can add an ",e("code",{children:"onInvalid"})," handler to a ",e(p,{})," ","which will be called when the field is initialised.  This is useful if you want to programmatically control the field."]}),e(m,{children:"Click on the buttons to programmatically call field methods. The first resets the field, the next two set the field value, and the last one focusses the field."})]}),e(o,{Element:Fr,code:gr,caption:"onLoad"}),e(h,{links:["field:onBlur","field:onFocus","field:onChange","field:onValid","field:setFocus"]})]}),Sr=()=>{const[r,a]=b.useState();return t(i,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onValid:n=>a(`${n.name} is valid: ${n.value}`)}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:n=>a(`${n.name} is valid: ${n.value}`)}),r]})},Er=`import { Form, Field } from '@/lib/index.js'

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

export default OnValidExample`,yr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onValid"})}),t(s,{children:[t("p",{children:["You can add an ",e("code",{children:"onValid"})," handler to a ",e(p,{})," ","which will be called when the field is successfully validated. The field context will be passed as an argument."]}),t(m,{children:["Enter some text in one of the fields below and then select the other field.  The ",e("code",{children:"validateOnBlur"})," option on the ",e(f,{})," ","means that the first field will be validated when it loses focus and the ",e("code",{children:"onValid"})," handler will be called."]})]}),e(o,{Element:Sr,code:Er,caption:"onValid",expand:!0}),e(h,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onInvalid"]})]}),vr=`import { Form, Field } from '@/lib/index.js'

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
        />
        <Field
          onLoad={setField2}
          value="Initial value"
          name="field2"
          label="Field Two"
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

export default ResetExample`,wr=()=>{const[r,a]=b.useState(!1),[n,c]=b.useState(!1);return t(S,{children:[t(i,{children:[e(l,{onLoad:a,name:"field1",label:"Field One"}),e(l,{onLoad:c,value:"Initial value",name:"field2",label:"Field Two"})]}),t("div",{className:"flex gap-4",children:[e("button",{className:"blue",onClick:r.reset,children:"Reset Field One"}),e("button",{className:"blue",onClick:n.reset,children:"Reset Field Two"})]})]})},Tr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"reset()"})}),t(s,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"reset()"})," function can be called to reset a field to its initial state."]}),t("p",{children:["You can use the ",e(j,{})," property to save a reference to a field context object. Then call the ",e("code",{children:"reset()"})," method on the field object to make it invalid.  An optional argument can be provided as the message to display."]})]}),e(m,{children:"Enter some text in either of the inputs below and then click on the corresponding button to reset it to the original value."})]}),e(o,{Element:wr,code:vr,caption:"reset()"}),e(h,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),Rr=`import { Form, Field } from '@/lib/index.js'

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
        />
        <Field
          onLoad={setField2}
          name="field2"
          label="Field Two"
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

export default SetFocusExample`,Cr=()=>{const[r,a]=b.useState(!1),[n,c]=b.useState(!1);return t(S,{children:[t(i,{children:[e(l,{onLoad:a,name:"field1",label:"Field One"}),e(l,{onLoad:c,name:"field2",label:"Field Two"})]}),t("div",{className:"flex gap-4",children:[e("button",{onClick:()=>r==null?void 0:r.setFocus(),children:"Focus Field One"}),e("button",{onClick:()=>n==null?void 0:n.setFocus(),children:"Focus Field Two"})]})]})},Nr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setFocus()"})}),t(s,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"setFocus()"})," function can be called to focus a field. You can use the ",e(j,{})," property to save a reference to a field context object."]}),t("p",{children:["Then call the ",e("code",{children:"setFocus()"})," method on the field object to focus it."]})]}),e(m,{children:"Click on one of the buttons to focus the corresponding field."})]}),e(o,{Element:Cr,code:Rr,caption:"setFocus()"}),t("p",{children:["You can also focus on fields by name using the ",e(f,{})," ",e(we,{})," method."]}),e(h,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),kr=`import { Form, Field } from '@/lib/index.js'

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
        />
        <Field
          onLoad={setField2}
          name="field2"
          label="Field Two"
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

export default SetInvalidExample`,Or=()=>{const[r,a]=b.useState(!1),[n,c]=b.useState(!1);return t(S,{children:[t(i,{children:[e(l,{onLoad:a,name:"field1",label:"Field One"}),e(l,{onLoad:c,name:"field2",label:"Field Two"})]}),t("div",{className:"flex gap-4",children:[e("button",{className:"red",onClick:()=>r.setInvalid(),children:"Invalid Field One"}),e("button",{className:"red",onClick:()=>n.setInvalid("Naughty!"),children:"Invalid Field Two"})]})]})},qr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setInvalid()"})}),t(s,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"setInvalid()"})," function can be called to mark a field as invalid."]}),t("p",{children:["You can use the ",e(j,{})," property to save a reference to a field context object. Then call the ",e("code",{children:"setInvalid()"})," method on the field object to make it invalid.  An optional argument can be provided as the message to display."]})]}),e(m,{children:"Click on one of the buttons to set the corresponding field to be invalid."})]}),e(o,{Element:Or,code:kr,caption:"setFocus()"}),e(h,{links:["field:setInvalid"]})]}),Ar=`import { Form, Field } from '@/lib/index.js'

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
        />
        <Field
          onLoad={setField2}
          name="field2"
          label="Field Two"
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

export default SetValidExample`,Pr=()=>{const[r,a]=b.useState(!1),[n,c]=b.useState(!1);return t(S,{children:[t(i,{children:[e(l,{onLoad:a,name:"field1",label:"Field One"}),e(l,{onLoad:c,name:"field2",label:"Field Two"})]}),t("div",{className:"flex gap-4",children:[e("button",{className:"green",onClick:()=>r==null?void 0:r.setValid(),children:"Valid Field One"}),e("button",{className:"green",onClick:()=>n==null?void 0:n.setValid("Nice one!"),children:"Valid Field Two"})]})]})},Lr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setValid()"})}),t(s,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"setValid()"})," function can be called to mark a field as valid."]}),t("p",{children:["You can use the ",e(j,{})," property to save a reference to a field context object. Then call the ",e("code",{children:"setValid()"})," method on the field object to make it valid.  An optional argument can be provided as the message to display."]})]}),e(m,{children:"Click on one of the buttons to set the corresponding field to be valid."})]}),e(o,{Element:Pr,code:Ar,caption:"setFocus()"}),e(h,{links:["field:setInvalid"]})]}),Dr=`import { Form, Field } from '@/lib/index.js'

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

export default SetValueExample`,jr=()=>{const[r,a]=b.useState(!1);return t(S,{children:[e(i,{children:e(l,{onLoad:a,name:"animal",label:"Animal"})}),t("div",{className:"flex gap-4",children:[e("button",{onClick:()=>r.setValue("Antelope"),children:"Antelope"}),e("button",{onClick:()=>r.setValue("Badger"),children:"Badger"}),e("button",{onClick:()=>r.setValue("Camel"),children:"Camel"})]})]})},Vr=`import { Form, Field } from '@/lib/index.js'

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

export default SetValueExample`,Br=()=>{const[r,a]=b.useState(!1);return e(S,{children:t(i,{children:[e(l,{onLoad:a,name:"animal",label:"Animal"}),t("div",{className:"flex gap-4",children:[e("button",{className:"green",onClick:n=>{n.preventDefault(),r.setValue("Antelope")},children:"Antelope"}),e("button",{className:"green",onClick:n=>r.setValue("Badger",n),children:"Badger"}),e("button",{type:"button",className:"green",onClick:()=>r.setValue("Camel"),children:"Camel"}),e("button",{onClick:()=>r.setValue("Danger!"),className:"red",children:"Danger!"})]})]})})},Ir=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setValue()"})}),t(s,{children:[t("p",{children:["The ",e("code",{children:"setValue()"})," method can be called on a field to set the value.  You can use ",e(j,{})," to capture a reference to the field context object"]}),e(m,{children:"Click on one of the buttons to set the field to have the corresponding value."})]}),e(o,{Element:jr,code:Dr,caption:"setValue()"}),e("h2",{children:"Beware Buttons That Submit!"}),t(s,{children:[t("div",{children:[t("p",{children:["One thing to be aware of is that the default behaviour of a"," ",e("code",{children:"button"})," inside a ",e("code",{children:"form"})," is to submit the form. This is an innate property of HTML and not something that's specific to this library.  In the example above we put the buttons outside the"," ",e(f,{})," to avoid this behaviour, but it's not always possible to do that. There are a number of ways to work around it, shown in the example below."]}),t("p",{children:['The first "Antelope" button calls the'," ",e("code",{children:"preventDefault()"})," "," method on the event.  Given that this is a bit clumsy, the ",e("code",{children:"setValue()"})," method allows you to pass the event as the second argument and it will call"," ",e("code",{children:"preventDefault()"}),' for you, as shown on the second "Badger" button.']})]}),t("div",{children:[t("p",{children:['The third approach, shown on the "Camel" button, is to explicitly set the ',e("code",{children:"type"})," to ",e("code",{children:"button"})," to override the default button ",e("code",{children:"type"})," of ",e("code",{children:"submit"}),"."," ",`The fourth "Danger!" button doesn't do anything and will cause the form to submit, just in case you don't believe me that it's really a problem.`]}),e(m,{children:"Click on one of the buttons to set the input value.  Be warned that the fourth button will cause the form to submit."})]})]}),e(o,{Element:Br,code:Vr,caption:"setValue()"}),t("p",{children:["You can also set values for one or more fields by name using the"," ",e(f,{})," ",e(Te,{})," method."]}),e(h,{links:["form:setValues","field:setFocus","field:reset"]})]}),Yr=()=>e(i,{children:e(l,{name:"field1",label:"Field One",children:t("div",{className:"field",children:[e($,{}),e(Re,{})]})})}),$r=`import { Form, Field, Text, Label } from '@/lib/index.js'

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

export default LabelExample`,Mr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Label"})}),t("p",{children:["The ",e("code",{children:"Label"})," component can be used to add a label to a"," ",e(p,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),e(o,{Element:Yr,code:$r,caption:"Label",expand:!0})]}),Ur=()=>t(i,{children:[e(l,{name:"one",label:"Field One",help:"This has implicit layout"}),e(l,{name:"two",label:"Field Two",help:"This has explicit layout",children:e(D,{})})]}),Gr=`import { Form, Field, Layout } from '@/lib/index.js'

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

export default FormLayout`,Hr=()=>t(i,{children:[e(l,{name:"one",label:"Field One",help:"This is what the layout component does",required:!0,children:r=>t("div",{className:Ce(r),children:[e($,{}),e(G,{}),e(te,{})]})}),e(u,{})]}),Wr=`import { Form, Field, Label, Input, Message, Submit, fieldClass } from '@/lib/index.js'

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

export default FormLayout`,zr=({id:r,topping:a,selected:n,select:c})=>e("div",{children:t("label",{htmlFor:r,className:"checkbox",children:[e("input",{type:"checkbox",checked:n,onChange:c,id:r}),a]})}),_r=({id:r,toppings:a,selected:n,select:c})=>e("div",{className:"options",children:a.map(F=>e(zr,{topping:F,id:`${r}-${F}`,selected:n[F]||!1,select:()=>c(F)},F))}),Kr=({value:r,free:a,price:n})=>e("div",{className:"summary",children:r.map((c,F)=>t("div",{className:"selected",children:[e("div",{children:c}),e("div",{children:F<a?"Free":n})]},c))}),Jr=r=>r.reduce((a,n)=>(a[n]=!0,a),{}),Xr=(r,a)=>n=>{r[n]=!r[n],a(Object.entries(r).filter(c=>c[1]).map(c=>c[0]))},Zr=()=>{const{id:r,value:a,onChange:n,free:c,price:F,toppings:y}=H(),O=Jr(a),g=Xr(O,n);return t("div",{className:"toppings field",children:[e("p",{className:"wide",children:"Select any extra toppings you want on your pizza."}),t("p",{className:"pricing wide",children:["The first ",c," are free. Any additional toppings are ",e("span",{className:"price",children:F})," each."]}),e($,{}),t("div",{className:"selection",children:[e(_r,{id:r,toppings:y,value:a,selected:O,select:g}),e(Kr,{value:a,free:c,price:F})]})]})};const Qr={toppings:{Layout:Zr,label:"Pick your toppings",default:[],free:3,price:"£1.00",toppings:["Ham","Bacon","Onions","Sausage","Pepperoni","Mushrooms","Sweetcorn","Pineapple","Extra Cheese"]}},eo=()=>t(i,{fields:Qr,children:[e(l,{name:"toppings"}),e(E,{})]}),to=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

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

export default PizzaForm`,lo=`import { Label, useField } from '@/lib/index.js'
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
export default Toppings`,ro=`// convert the toppings array to an object
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
  }`,oo=`import React from 'react'
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

export default Options`,io=`import React from 'react'

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

export default Option`,ao=`import React from 'react'

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

export default Summary`,no=`div.toppings {
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
}`,so=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Layout"})}),t("p",{children:["The ",e("code",{children:"Layout"})," component is inserted as the default content for a ",e(p,{})," that doesn't have it's own content."]}),t("p",{children:["The two fields in the example below both generate the same output. The first implicitly uses the ",e("code",{children:"Layout"})," for its content, the second includes it explicitly."]}),e(o,{Element:Ur,code:Gr,caption:"Default Layout",expand:!0}),t(s,{children:[t("p",{children:["The ",e("code",{children:"Layout"})," component creates a ",e("code",{children:"div"})," containing the ",e(_,{}),", ",e(Ne,{})," and ",e(ke,{})," components. The ",e("code",{children:"div"})," will have the ",e("code",{children:"field"})," CSS class and possibly other classes based on the state of the field (e.g."," ",e("code",{children:"valid"}),", ",e("code",{children:"invalid"}),", etc.)  The",e("code",{children:"fieldClass()"})," utility function can be used to automatically return the correct CSS classes for the field."]}),t("div",{children:[t("p",{children:["The example below shows how you can roll your own layout that does the same thing as the default ",e("code",{children:"Layout"})," component."]}),t(m,{children:["Try submitting the form without entering any value in the required field.  You should see that the ",e("code",{children:"invalid"})," CSS class is added to the field container."]})]})]}),e(o,{Element:Hr,code:Wr,caption:"Explicit Layout",expand:!0}),e("h2",{children:"Custom Layout"}),t("p",{children:["You can define your own component to handle the layout for a field using the ",e("code",{children:"Layout"})," field property."]}),t(s,{children:[t("p",{children:["In this example we define a ",e("code",{children:"Toppings"})," layout component to render a field allowing a user to select some toppings for a pizza."]}),e(m,{children:"Before we go any further into the code, let's see how it looks. Select some toppings for your pizza!"})]}),e(o,{Element:eo,code:to,caption:"Pizza Form",expand:!0}),e(s,{children:t("p",{children:["We're defining the schema for the ",e("code",{children:"fields"})," externally (lines 6 to 25) and passing them into the ",e("code",{children:"Form"})," as the"," ",e("code",{children:"fields"})," property (line 28). In addition to setting the ",e("code",{children:"Layout"})," component on line 8, we're also defining some extra data that the field will require: the number of ",e("code",{children:"free"})," toppings (line 11), the"," ",e("code",{children:"price"})," of additional toppings after that (line 12), and a list of available ",e("code",{children:"toppings"})," (lines 13 to 23).  This is the kind of data that we want defined up front and not buried in the form markup."]})}),t("h2",{children:["The ",e("code",{children:"Toppings"})," Component"]}),t("p",{children:["Here's the implementation of the ",e("code",{children:"Toppings"})," component."]}),t(s,{children:[e(x,{code:v(lo),caption:"Toppings",expand:!0}),t("div",{children:[t("p",{children:["On line 8 we call ",e("code",{children:"useField()"})," to get the current field"," ","context.  As well as the ",e("code",{children:"id"}),", ",e("code",{children:"value"})," and"," ",e("code",{children:"onChange"})," function to set the value, we're also getting our additional data fields: ",e("code",{children:"free"}),", ",e("code",{children:"price"})," and"," ",e("code",{children:"toppings"}),"."]}),t("p",{children:["We've got two utility functions that we're importing from our ",e("code",{children:"Utils.js"})," file.  On line 9 we call"," ",e("code",{children:"selectedToppings()"})," to convert the array of toppings in"," ",e("code",{children:"value"})," into an object so we can easily tell which toppings are selected (each selected topping will be set ",e("code",{children:"true"}),"). On line 10 we call the ",e("code",{children:"toppingSelector()"})," factory function which returns a function for selecting a topping (or unselecting one that's already selected) and calling the ",e("code",{children:"onChange"})," handler to update the field.  We'll look at the definitions of those functions shortly."]}),t("p",{children:["We have some explanatory text from lines 14 to 20.  Note how this includes the ",e("code",{children:"free"})," and ",e("code",{children:"price"})," values defined in our field schema. On line 21 we render the default ",e(_,{})," ","component to generate the field label. On line 23 we render a custom"," ",e("code",{children:"Options"})," component and on line 27 a custom"," ",e("code",{children:"Summary"})," component."]})]})]}),e("h2",{children:"Utility Functions"}),e("p",{children:"Here's the definitions for those utility functions."}),e(x,{code:v(ro),caption:"Utils.js",expand:!0}),t("h2",{children:["The ",e("code",{children:"Options"})," Component"]}),t("p",{children:["The ",e("code",{children:"Options"})," component iterates over the available toppings and renders the ",e("code",{children:"Option"})," component for each.  It passes a custom ",e("code",{children:"id"}),", ",e("code",{children:"selected"})," flag and"," ",e("code",{children:"select"})," function tailored to each option."]}),e(x,{code:v(oo),caption:"Options.jsx",expand:!0}),t("h2",{children:["The ",e("code",{children:"Option"})," Component"]}),t("p",{children:["The ",e("code",{children:"Option"})," component simply renders a checkbox in a label using those properties."]}),e(x,{code:v(io),caption:"Option.jsx",expand:!0}),t("h2",{children:["The ",e("code",{children:"Summary"})," Component"]}),t("p",{children:["The ",e("code",{children:"Summary"})," component displays a summary of the selected toppings."]}),e(x,{code:v(ao),caption:"Summary.jsx",expand:!0}),e("h2",{children:"Additional Styles"}),e("p",{children:"And finally, here's the additional SCSS we're using to apply the styling."}),e(x,{code:no,caption:"pizza.scss",language:"css",expand:!0})]}),co=()=>e(i,{children:e(l,{name:"one",children:t("div",{className:"field flex baseline gap-2",children:[e("label",{children:"Label on the left"}),e(G,{})]})})}),mo=`import { Form, Field, Input } from '@/lib/index.js'

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

export default FormInput`,ho="/react-formula/badger.jpg",uo="/react-formula/kitten.jpg",po="/react-formula/gorilla.jpg",fo={badger:ho,kitten:uo,gorilla:po},bo=({animal:r,select:a,selected:n})=>e("div",{className:`animal ${n?"selected":""}`,onClick:a,children:e("img",{src:fo[r],width:"120",height:"120",alt:r})}),Fo=["badger","gorilla","kitten"],go=()=>{const{value:r,onChange:a}=H();return e("div",{className:"animals",children:Fo.map(n=>e(bo,{animal:n,selected:r===n,select:()=>a(n)},n))})};const xo=()=>t(i,{children:[e(l,{name:"animal",label:"Pick an animal guide",requiredMessage:"You must pick an animal",required:!0,Input:go}),e(E,{reset:{className:"outline"},submit:{className:"blue"}})]}),So=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

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

export default PictureForm`,Eo=`import { useField } from '@/lib/index.js'
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

export default PictureInput`,yo=`import badgerUrl  from '/badger.jpg'
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

export default Picture`,vo=`div.animals {
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
}`,wo=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Input"})}),t("p",{children:["The ",e("code",{children:"Input"})," component is included by the ",e(A,{})," ","component to render the input for a field."]}),t("p",{children:["You can define your own content for a field to replace the default"," ",e(A,{}),", but still use the default ",e("code",{children:"Input"})," component to render the correct input for the field type."]}),e(o,{Element:co,code:mo,caption:"Default Input",expand:!0}),e("h2",{children:"Custom Input"}),t("p",{children:["You can define your own component to handle the input for a field using the ",e("code",{children:"Input"})," field property."]}),t(s,{children:[e("div",{children:t("p",{children:["In this example we define a ",e("code",{children:"PictureInput"})," component to show some pictures of animals for the user to select an animal guide from.  We're still using the default field layout which provides us with the label and validation message."]})}),e(m,{children:"Click on an animal to select it. Try submitting the form without selecting an animal to see the validation error message in effect."})]}),e(o,{Element:xo,code:So,caption:"Picture Form",expand:!0}),t("h2",{children:["The ",e("code",{children:"PictureInput"})," Component"]}),t(s,{children:[e(x,{code:v(Eo),caption:"PictureInput",expand:!0}),t("div",{children:[t("p",{children:["Here's the implementation of the ",e("code",{children:"PictureInput"})," component."]}),t("p",{children:["On line 8 we call ",e("code",{children:"useField()"})," to get the current field"," ",e("code",{children:"value"})," and the ",e("code",{children:"onChange"})," function to set the value.  We iterate over a list of animals on line 11 and render the"," ",e("code",{children:"Picture"})," component for each.  We pass the ",e("code",{children:"selected"})," ","flag on line 16 to indicate if the animal name matches the current"," ",e("code",{children:"value"}),".  We also pass a ",e("code",{children:"select"})," ","function on line 17 which calls the ",e("code",{children:"onChange"})," handler to select the animal."]})]})]}),t("h2",{children:["The ",e("code",{children:"Picture"})," Component"]}),t(s,{children:[e(x,{code:v(yo),caption:"Picture",expand:!0}),t("p",{children:["Here's the ",e("code",{children:"Picture"})," component.  It simply renders a ",e("code",{children:"div"})," with an ",e("code",{children:"onClick"})," handler to call the ",e("code",{children:"select"})," function passed as a property.  The"," ",e("code",{children:"animal"})," CSS class is added, along with ",e("code",{children:"selected"})," ","if the animal is currently selected.  Inside the ",e("code",{children:"div"})," we render a picture of the animal in an ",e("code",{children:"img"})," element."]})]}),e("h2",{children:"Additional Styles"}),t(s,{children:[e(x,{code:vo,caption:"animals.css",language:"css",expand:!0}),e("p",{children:"For completeness, here's the additional CSS we're using to apply the styling."})]}),e("h2",{className:"hint",children:"Picture Credits"}),t("ul",{className:"credits",children:[t("li",{children:["Badger photo by ",e("a",{href:"https://unsplash.com/es/@vincentvanzalinge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Vincent van Zalinge"})," on ",e("a",{href:"https://unsplash.com/photos/jd8s5zhWEug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),t("li",{children:["Gorilla photo by ",e("a",{href:"https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Kelly Sikkema"})," on ",e("a",{href:"https://unsplash.com/images/animals/monkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),t("li",{children:["Kitten photo by ",e("a",{href:"https://unsplash.com/@feneek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Sergey Semin"})," on ",e("a",{href:"https://unsplash.com/images/animals/kitten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})]}),To=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",help:"Additional help message",validMessage:"This is fine!",requiredMessage:"You must enter a value",required:!0,children:t(D,{children:[e($,{}),e(G,{}),e(te,{})]})}),e(u,{})]}),Ro=`import { Form, Field, Layout, Label, Input, Message, Submit } from '@/lib/index.js'

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

export default MessageExample`,Co=()=>{const{message:r,help:a}=H();return e("div",{className:"small bold mar-t-2 fgc-40 fgd-60",children:r??a})},No=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",help:"Enter a value",validMessage:"This is fine!",requiredMessage:"You must enter a value",Message:Co,required:!0}),e(u,{})]}),ko=`import { Form, Field, Submit, useField } from '@/lib/index.js'

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
    />
    <Submit/>
  </Form>

export default MessageExample`,Oo=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Message"})}),t("p",{children:["The ",e("code",{children:"Message"})," component is used to add a message underneath a ",e(p,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),t(s,{children:[t("p",{children:["If you have defined ",e("code",{children:"help"})," for your field then it will be displayed here.  If the field fails to validate then the validation error message will be displayed.  In this example we're setting an explicit ",e("code",{children:"requiredMessage"})," to override the default message. We're also setting a ",e("code",{children:"validMessage"})," to provide a custom message if the field is valid."]}),t(m,{children:["Try submitting the form without entering a value.  You should see the ",e("code",{children:"help"})," message be replaced by the"," ",e("code",{children:"requiredMessage"})," error message."]})]}),e(o,{Element:To,code:Ro,caption:"Message",expand:!0}),e("h2",{children:"Custom Message Component"}),t("p",{children:["You can define your own component to handle the message for a field using the ",e("code",{children:"Message"})," field property."]}),e(o,{Element:No,code:ko,caption:"Custom Message Component",expand:!0})]}),qo=()=>e(i,{children:t(l,{name:"hello",label:"Enter a greeting",children:[e(D,{}),r=>t("div",{className:"info alert",children:["You have entered: ",r.value]})]})}),Ao=`import { Form, Field, Layout } from '@/lib/index.js'

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

export default FieldChildrenExample`,Po=()=>e(i,{children:t(l,{name:"hello",label:"Enter a greeting",children:[e(D,{}),e("div",{className:"info alert",children:e(De,{children:r=>`You have entered: ${r.value}`})})]})}),Lo=`import { Form, Field, Layout, UseField } from '@/lib/index.js'

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

export default UseFieldExample`,Do=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"UseField"})}),t("p",{children:["The immediate ",e(Oe,{})," of a ",e(p,{})," component can be functions that will receive the field context as the first argument."]}),e(o,{Element:qo,code:Ao,caption:"Field Children",expand:!0}),t("p",{children:["However, this only works for the immediate children of the ",e(p,{}),". If you want to include a function that is nested inside another element (e.g. inside a ",e("code",{children:"div"})," as shown in this example) then you can use the ",e("code",{children:"UseForm"})," component to provide it."]}),t("p",{children:["Don't forget that defining any children of a ",e(p,{})," component will override the default ",e(A,{})," component, so you'll need to add it manually or define your own layout for the field."]}),e(o,{Element:Po,code:Lo,caption:"UseField",expand:!0})]}),jo=()=>t(U,{children:[e(d,{path:"",end:!0,element:e(Nt,{})}),t(d,{path:"properties",children:[e(d,{path:"children",element:e(qt,{})}),e(d,{path:"help",element:e(Lt,{})}),e(d,{path:"label",element:e(Yt,{})}),e(d,{path:"name",element:e(Wt,{})}),e(d,{path:"placeholder",element:e(tl,{})}),e(d,{path:"prefix",element:e(ol,{})}),e(d,{path:"suffix",element:e(sl,{})}),e(d,{path:"type",element:e(Zt,{})}),e(d,{path:"wide",element:e(pl,{})})]}),t(d,{path:"validation",children:[e(d,{path:"minValidateLength",element:e(xl,{})}),e(d,{path:"optionalLabel",element:e(yl,{})}),e(d,{path:"prepareValue",element:e(Rl,{})}),e(d,{path:"required",element:e(kl,{})}),e(d,{path:"requiredLabel",element:e(Al,{})}),e(d,{path:"requiredMessage",element:e(Dl,{})}),e(d,{path:"showOptional",element:e(Bl,{})}),e(d,{path:"showRequired",element:e(Ul,{})}),e(d,{path:"validate",element:e(Jl,{})}),e(d,{path:"validateOnBlur",element:e(er,{})}),e(d,{path:"validateOnChange",element:e(or,{})})]}),t(d,{path:"events",children:[e(d,{path:"onBlur",element:e(nr,{})}),e(d,{path:"onChange",element:e(cr,{})}),e(d,{path:"onFocus",element:e(ur,{})}),e(d,{path:"onInvalid",element:e(br,{})}),e(d,{path:"onLoad",element:e(xr,{})}),e(d,{path:"onValid",element:e(yr,{})})]}),t(d,{path:"functions",children:[e(d,{path:"Reset",element:e(Tr,{})}),e(d,{path:"setFocus",element:e(Nr,{})}),e(d,{path:"setInvalid",element:e(qr,{})}),e(d,{path:"setValid",element:e(Lr,{})}),e(d,{path:"setValue",element:e(Ir,{})})]}),t(d,{path:"components",children:[e(d,{path:"Input",element:e(wo,{})}),e(d,{path:"Layout",element:e(so,{})}),e(d,{path:"Label",element:e(Mr,{})}),e(d,{path:"Message",element:e(Oo,{})}),e(d,{path:"UseField",element:e(Do,{})})]})]}),Vo={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},Bo=()=>t(i,{fields:Vo,children:[e(T,{names:["name","message"]}),e(T,{names:"badgers animal"})]}),Io=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,Yo={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},$o=()=>e(i,{fields:Yo,children:e(T,{names:"name email",grid:2})}),Mo=`import { Form, Fields } from '../../../../../lib/index.js'

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
      grid={2}
    />
  </Form>

export default FieldsGridExample
`,Uo={one:{label:"One"},two:{label:"Two"},three:{label:"Three"}},Go=()=>e(i,{fields:Uo,children:e(T,{names:"one two three",grid:!0})}),Ho=`import { Form, Fields } from '../../../../../lib/index.js'

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
    <Fields names="one two three" grid/>
  </Form>

export default FieldsGridAutoExample
`,Wo={forename:{label:"First Name",required:!0},surname:{label:"Surname",required:!0},company:{label:"Company",required:!0},job_title:{label:"Job Title",required:!0}},zo=()=>e(i,{fields:Wo,children:e(T,{names:"forename surname company job_title",grid:2,gap:8})}),_o=`import { Form, Fields } from '../../../../../lib/index.js'

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
      grid={2} gap={8}
    />
  </Form>

export default FieldsGapExample
`,Ko={alpha:{label:"Alpha"},bravo:{label:"Bravo"},charlie:{label:"Charlie"},delta:{label:"Delta"},echo:{label:"Echo"},foxtrot:{label:"Foxtrot"}},Jo=()=>e(i,{fields:Ko,children:e(T,{names:"alpha bravo charlie delta echo foxtrot",grid:3,stack:"tablet"})}),Xo=`import { Form, Fields } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const fields = {
  alpha:    { label: 'Alpha'    },
  bravo:    { label: 'Bravo'    },
  charlie:  { label: 'Charlie'  },
  delta:    { label: 'Delta'    },
  echo:     { label: 'Echo'     },
  foxtrot:  { label: 'Foxtrot'  },
}

const FieldsStackExample = () =>
  <Form fields={fields}>
    <Fields
      names="alpha bravo charlie delta echo foxtrot"
      grid={3} stack="tablet"
    />
  </Form>

export default FieldsStackExample
`,Zo={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},Qo=()=>e(i,{fields:Zo,children:e(T,{names:"name email",className:"border pad-4 bgc-95 bgd-5 bdr-2"})}),ei=`import { Form, Fields } from '../../../../../lib/index.js'

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
    />
  </Form>

export default FieldsClassExample
`,ti=()=>t("div",{className:"prose",children:[e("h1",{children:"Fields"}),t("p",{children:["The ",e("code",{children:"Fields"})," component can be used to render multiple fields."]}),e("p",{children:"This is a shortcut for convenience, but it depends on you having all your form fields defined in a separate schema so you can reference them only by name."}),t("p",{children:["The ",e("code",{className:"code",children:"names"})," property should be used to specify the list of field names either as an array of strings, or a single string containing a whitespace-delimited list of field names. The ",e("code",{className:"code",children:"Fields"})," component renders each of the fields, collected together in a single"," ",e("code",{className:"code",children:"div"})," element"]}),e(o,{Element:Bo,code:Io,caption:"Fields"}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be set to add a CSS class to the fields container."]}),e(o,{Element:Qo,code:ei,caption:"Fields Class"}),e("h2",{children:e("code",{children:"grid"})}),t("p",{children:["The ",e("code",{children:"grid"})," property can be used to layout the fields in a grid.  Set the property to the number of columns you want.  The default gap between the fields will be 1rem (using the"," ",e("code",{children:"gap-h-4"})," utility class provided by"," ",e("a",{href:"https://abw.github.io/badger-css/utilities/grid",children:"Badger-CSS"}),")."]}),e(o,{Element:$o,code:Mo,caption:"Fields in a Grid"}),t("p",{children:["You can also specify ",e("code",{children:"grid"})," as the boolean value"," ",e("code",{children:"true"})," (which React will conveniently set for you if you include it as a valueless property) and it will automatically select the correct number of columns based on how many fields it is rendering."]}),e(o,{Element:Go,code:Ho,caption:"Automatic Grid Columns"}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set a custom horizontal gap between fields.  The value should be an integer number of margin units of 0.25rem."]}),e(o,{Element:zo,code:_o,caption:"Fields With a Gap"}),e("h2",{children:e("code",{children:"stack"})}),t("p",{children:["The ",e("code",{children:"stack"})," property can be used to define a stacking breakpoint.  This will add the corresponding ",e("code",{children:"stack-XXX"})," CSS class.  Try resizing your browser window to see the effect.  With a width of less than 800px, the fields will be stacked, otherwise they will be displayed in three columns."]}),e(o,{Element:Jo,code:Xo,caption:"Stacking Fields"})]}),li=()=>e(i,{children:t(M,{legend:"Fieldset One",children:[e(l,{name:"one",label:"Field One"}),e(l,{name:"one",label:"Field Two"})]})}),ri=`import { Form, Field, Fieldset } from '../../../../../lib/index.js'

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
`,oi={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},ii=()=>e(i,{fields:oi,children:e(M,{legend:"Fieldset Two",fields:"name message"})}),ai=`import { Form, Fieldset } from '../../../../../lib/index.js'

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
      fields="name message"
    />
  </Form>

export default FieldsetFieldsExample
`;const ni={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},di=()=>e(i,{fields:ni,children:e(M,{legend:"Fieldset Two",fields:"name message",className:"prominent"})}),si=`import { Form, Fieldset } from '../../../../../lib/index.js'

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
    />
  </Form>

export default FieldsetFieldsExample
`,ci={alpha:{label:"Alpha"},bravo:{label:"Bravo"},charlie:{label:"Charlie"},delta:{label:"Delta"},echo:{label:"Echo"},foxtrot:{label:"Foxtrot"}},mi=()=>e(i,{fields:ci,children:e(M,{legend:"Fieldset Grid",fields:"alpha bravo charlie delta echo foxtrot",grid:2,stack:"laptop"})}),hi=`import { Form, Fieldset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fieldset } from '@abw/react-formula'

const fields = {
  alpha:    { label: 'Alpha'    },
  bravo:    { label: 'Bravo'    },
  charlie:  { label: 'Charlie'  },
  delta:    { label: 'Delta'    },
  echo:     { label: 'Echo'     },
  foxtrot:  { label: 'Foxtrot'  },
}

const FieldsetGridExample = () =>
  <Form fields={fields}>
    <Fieldset
      legend="Fieldset Grid"
      fields="alpha bravo charlie delta echo foxtrot"
      grid={2} stack="laptop"
    />
  </Form>

export default FieldsetGridExample
`,ui=`fieldset.prominent {
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
}`,pi=()=>t("div",{className:"prose",children:[e("h1",{children:"Fieldset"}),t("p",{children:["The ",e("code",{children:"Fieldset"})," component can be used to create a field set.  The ",e("code",{children:"legend"})," property should be used to set the legend."]}),e(o,{Element:li,code:ri,caption:"Fieldset",expand:!0}),e("h2",{children:e("code",{children:"fields"})}),t("p",{children:["The ",e("code",{children:"fields"})," property can be used as a shortcut to render a set of named fields using the"," ",e(K,{})," component."]}),e(o,{Element:ii,code:ai,caption:"Fieldset fields",expand:!0}),t("h2",{children:[e("code",{children:"grid"}),", ",e("code",{children:"gap"})," and ",e("code",{children:"stack"})]}),t("p",{children:["Any other properties are forwarded onto the ",e(K,{})," component. For example, you can set the ",e("code",{children:"grid"}),", ",e("code",{children:"gap"})," and"," ",e("code",{children:"stack"})," properties to set the layout to implement a grid layout."]}),e(o,{Element:mi,code:hi,caption:"Fieldset Grid",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to add a CSS class to the fieldset container."]}),e(o,{Element:di,code:si,caption:"Fieldset className",expand:!0}),e("h2",{children:"Additional Styles"}),e("p",{children:"For completeness, here's the additional CSS we're using to apply the styling in the above example."}),e(x,{code:ui,caption:"fieldset.scss",language:"css",expand:!0})]}),fi=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(u,{})]}),bi=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one"/>
    <Field name="two"   label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample`,Fi=()=>t(i,{children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(u,{className:"btn-blue",text:"Save Changes"})]}),gi=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const SubmitProps = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit className="btn-blue" text="Save Changes"/>
  </Form>

export default SubmitProps`,xi=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnSubmit = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <Submit/>
  </Form>

export default OnSubmit`,Si=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(u,{})]}),Ei=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnClick`,yi=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(u,{onClick:r=>{r.preventDefault(),window.alert("The form submission was intercepted!")}})]}),vi=()=>t("div",{className:"prose",children:[e("h1",{children:"Submit"}),t(s,{children:[t("p",{children:["The ",e("code",{children:"Submit"})," component can be used to add a button which will submit the form.  See the"," ",e(R,{to:"/components/form/validation",text:"validation page"})," for information on how the form data is validated and the"," ",e(qe,{})," component for details on how validation errors are displayed and can be customised."]}),e(m,{children:"Try entering some text in the fields below then click on the Submit button."})]}),e(o,{Element:fi,code:bi,caption:"Submit",expand:!0}),e("h2",{children:e("code",{children:"text"})}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(o,{Element:Fi,code:gi,caption:"Properties",expand:!0}),e("h2",{children:e("code",{children:"onClick"})}),t("p",{children:["You can use the ",e("code",{children:"onClick"})," property to handle a click on the button.  You will need to call ",e("code",{children:"preventDefault()"})," on the event if you want to stop the form from being submitted."]}),e(o,{Element:yi,code:Ei,caption:"onClick",expand:!0}),e("h2",{children:e("code",{children:"onSubmit"})}),t("p",{children:["The default behaviour for the button is to submit the form. You can use the ",e(Ae,{})," form property to handle the submission."]}),e(o,{Element:Si,code:xi,caption:"onSubmit",expand:!0})]}),wi=`import { Form, Field, Reset } from '../../../../../lib/index.js'

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

export default ResetExample`,Ti=()=>t(i,{values:{three:"The third field"},children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two with default value",default:"Badger"}),e(l,{name:"three",label:"Field three with pre-defined form value"}),e(k,{})]}),Ri=()=>t(i,{children:[e(l,{name:"one",label:"Field one"}),e(k,{className:"btn-brown",text:"Reset the form"})]}),Ci=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const Properties = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Reset className="btn-brown" text="Reset the form"/>
  </Form>

export default Properties`,Ni=`import { Form, Field, Reset } from '../../../../../lib/index.js'

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

export default OnClick`,ki=()=>t(i,{onReset:()=>alert("form has been reset"),children:[e(l,{name:"field1",label:"Field One"}),e(k,{onClick:()=>window.alert("Reset was intercepted")})]}),Oi=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const OnReset = () =>
  <Form onReset={() => alert('form has been reset')}>
    <Field name="field1" label="Field One"/>
    <Reset/>
  </Form>

export default OnReset`,qi=()=>t(i,{onReset:()=>alert("form has been reset"),children:[e(l,{name:"field1",label:"Field One"}),e(k,{})]}),Ai=()=>t("div",{className:"prose",children:[e("h1",{children:"Reset"}),t(s,{children:[t("p",{children:["The ",e("code",{children:"Reset"})," component can be used to add a reset button which will reset the form to its initial state.  Any"," ",e("code",{children:"values"})," defined on the ",e(f,{})," will be restored. Any fields that have a ",e("code",{children:"default"})," value will be reset to that value."]}),e(m,{children:"Try entering some text in the fields below then click on the Reset button.  You should see the fields reset to their original state."})]}),e(o,{Element:Ti,code:wi,caption:"Reset",expand:!0}),e("h2",{children:e("code",{children:"text"})}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(o,{Element:Ri,code:Ci,caption:"Properties",expand:!0}),e("h2",{children:e("code",{children:"onClick"})}),t("p",{children:["You can use the ",e("code",{children:"onReset"})," property to register a function that should be called when the form is reset."]}),e(o,{Element:ki,code:Ni,caption:"onClick",expand:!0}),e("h2",{children:e("code",{children:"onReset"})}),t("p",{children:["The default behaviour for the button is to reset the form. You can use the ",e(Pe,{})," form property to register a function that will be called when the form is reset."]}),e(o,{Element:qi,code:Oi,caption:"onReset",expand:!0})]}),Pi=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(le,{})]}),Li=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Cancel } from '@abw/react-formula'

const CancelExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Cancel/>
  </Form>

export default CancelExample`,Di=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(le,{text:"Go Back",className:"btn-brown",onClick:()=>alert("Cancel button was clicked")})]}),ji=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

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

export default CancelExample`,Vi=()=>t("div",{className:"prose",children:[e("h1",{children:"Cancel"}),t(s,{children:[t("p",{children:["The ",e("code",{children:"Cancel"})," component can be used to add a Cancel button. This doesn't do anything to the form but it's common to provide a button in a form to allow a user to cancel an edit or go back."]}),t(m,{children:["Don't be surprised that the Cancel button doesn't do anything in this example.  We need to add an ",e("code",{children:"onClick"})," handler to make it useful. See the next example."]})]}),e(o,{Element:Pi,code:Li,caption:"Cancel",expand:!0}),t("p",{children:["The ",e("code",{children:"text"})," property will set the text for the button. The ",e("code",{children:"className"})," property can be used to add a CSS class.  The ",e("code",{children:"onClick"})," property should be used to define a handler to do something when the button is clicked."]}),e(o,{Element:Di,code:ji,caption:"Properties",expand:!0})]}),Bi=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(V,{})]}),Ii=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit/>
  </Form>

export default CancelSubmitExample`,Yi=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(V,{gap:8})]}),$i=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit gap={8}/>
  </Form>

export default CancelSubmitGap`,Mi=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(V,{space:!0})]}),Ui=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit space/>
  </Form>

export default CancelSubmitSpace`,Gi=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(V,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),Hi=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

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

export default CancelSubmitClassName`,Wi=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(V,{submit:{text:"Continue",className:"green"},cancel:{text:"Go Back",className:"outline",onClick:()=>alert("You went back")},space:!0})]}),zi=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
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

export default CancelSubmitExample`,_i=()=>t("div",{className:"prose",children:[e("h1",{children:"CancelSubmit"}),t("p",{children:["The ",e("code",{children:"CancelSubmit"})," component can be used to add both"," ",e(I,{})," and ",e(N,{})," controls."]}),e(o,{Element:Bi,code:Ii,caption:"CancelSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(o,{Element:Yi,code:$i,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(o,{Element:Mi,code:Ui,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(o,{Element:Gi,code:Hi,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(I,{})," component using the ",e("code",{children:"cancel"})," property, and for the ",e(N,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(o,{Element:Wi,code:zi,caption:"Properties",expand:!0})]}),Ki=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(B,{})]}),Ji=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit/>
  </Form>

export default CancelResetSubmitExample`,Xi=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(B,{gap:8})]}),Zi=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit gap={8}/>
  </Form>

export default CancelResetSubmitGap`,Qi=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(B,{space:!0})]}),ea=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit space/>
  </Form>

export default CancelResetSubmitSpace`,ta=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(B,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),la=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

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

export default CancelResetSubmitClassName`,ra=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(B,{submit:{text:"Continue",className:"green"},reset:{text:"Restart",className:"brown"},cancel:{text:"Go Back",className:"outline",onClick:()=>alert("You went back")},space:!0})]}),oa=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
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

export default CancelResetSubmitExample`,ia=()=>t("div",{className:"prose",children:[e("h1",{children:"CancelResetSubmit"}),t("p",{children:["The ",e("code",{children:"CancelResetSubmit"})," component can be used to add all three ",e(I,{}),", ",e(Y,{})," and ",e(N,{})," controls in one fell swoop."]}),e(o,{Element:Ki,code:Ji,caption:"CancelResetSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(o,{Element:Xi,code:Zi,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(o,{Element:Qi,code:ea,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(o,{Element:ta,code:la,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"cancel"}),", ",e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(I,{})," component using the ",e("code",{children:"cancel"})," property, for the ",e(Y,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(N,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(o,{Element:ra,code:oa,caption:"Properties",expand:!0})]}),aa=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(E,{})]}),na=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit/>
  </Form>

export default ResetSubmitExample`,da=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(E,{gap:8})]}),sa=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit gap={8}/>
  </Form>

export default ResetSubmitGap`,ca=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(E,{space:!0})]}),ma=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit space/>
  </Form>

export default ResetSubmitSpace`,ha=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(E,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),ua=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

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

export default ResetSubmitClassName`,pa=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(E,{reset:{text:"Reset the Form",className:"outline"},submit:{text:"Submit the Form",className:"blue"},space:!0})]}),fa=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
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

export default ResetSubmitExample`,ba=()=>t("div",{className:"prose",children:[e("h1",{children:"ResetSubmit"}),t("p",{children:["The ",e("code",{children:"ResetSubmit"})," component can be used to add both"," ",e(Y,{})," and ",e(N,{})," controls."]}),e(o,{Element:aa,code:na,caption:"ResetSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(o,{Element:da,code:sa,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(o,{Element:ca,code:ma,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(o,{Element:ha,code:ua,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(Y,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(N,{})," ","component using the ",e("code",{children:"submit"})," property."]}),e(o,{Element:pa,code:fa,caption:"Properties",expand:!0})]}),Fa=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",value:"Hello World!"}),e(Le,{children:e(E,{space:!0,reset:{className:"outline"},submit:{className:"blue"}})})]}),ga=`import { Form, Field, Changed, ResetSubmit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Changed, ResetSubmit } from '@abw/react-formula'

const ChangedExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two" value="Hello World!"/>
    <Changed>
      <ResetSubmit
        space
        reset={{ className: 'outline' }}
        submit={{ className: 'blue' }}
      />
    </Changed>
  </Form>

export default ChangedExample`,xa=()=>t("div",{className:"prose",children:[e("h1",{children:"Changed"}),t(s,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"Changed"})," component will only render its child components when the form state has changed."]}),e("p",{children:'A typical example is shown below.  The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field.'})]}),t(m,{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})]}),e(o,{Element:Fa,code:ga,caption:"Changed",expand:!0})]}),Sa=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(u,{})]}),Ea=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default RequiredExample`,ya=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(C,{}),e(u,{})]}),va=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const RequiredExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one" required/>
    <Field name="two"   label="Field two" required/>
    <Field name="three" label="Field three"/>
    <Errors/>
    <Submit/>
  </Form>

export default RequiredExample`,wa=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(C,{title:"Form Submission Failed"}),e(u,{})]}),Ta=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const ErrorsTitle = () =>
  <Form showRequired>
    <Field name="one"   label="Field one" required/>
    <Errors title="Form Submission Failed"/>
    <Submit/>
  </Form>

export default ErrorsTitle`,Ra=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(C,{title:r=>r===1?"There is an error":`There are ${r} errors`}),e(u,{})]}),Ca=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const ErrorsTitle = () =>
  <Form showRequired>
    <Field name="one" label="Field one" required/>
    <Field name="two" label="Field two" required/>
    <Errors
      title={
        n => n === 1
          ? 'There is an error'
          : \`There are \${n} errors\`
      }
    />
    <Submit/>
  </Form>

export default ErrorsTitle`,Na=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(C,{prompt:"You shall not pass!"}),e(u,{})]}),ka=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const ErrorsHeadline = () =>
  <Form showRequired>
    <Field name="one" label="Field one" required/>
    <Errors prompt="You shall not pass!"/>
    <Submit/>
  </Form>

export default ErrorsHeadline`,Oa=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(C,{prompt:r=>r===1?"Please correct this error":`Please correct these ${r} errors`}),e(u,{})]}),qa=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const ErrorsTitle = () =>
  <Form showRequired>
    <Field name="one" label="Field one" required/>
    <Field name="two" label="Field two" required/>
    <Errors
      prompt={
        n => n === 1
          ? 'Please correct this error'
          : \`Please correct these \${n} errors\`
      }
    />
    <Submit/>
  </Form>

export default ErrorsTitle`,Aa=()=>t(i,{errorsTitle:"Custom Errors Title",errorsPrompt:"Custom errors prompt",children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(C,{}),e(u,{})]}),Pa=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const FormErrorOptions = () =>
  <Form
    errorsTitle="Custom Errors Title"
    errorsPrompt="Custom errors prompt"
  >
    <Field name="one"   label="Field one" required/>
    <Field name="two"   label="Field two" required/>
    <Field name="three" label="Field three"/>
    <Errors/>
    <Submit/>
  </Form>

export default FormErrorOptions`,La=()=>t(i,{children:[e(C,{}),e(Da,{}),e(k,{})]}),Da=()=>{const{handleError:r}=L(),a=(y,O)=>{y.preventDefault(),r({error:O})};return t("div",{className:"grid-3 gap-4 mar-b-4",children:[e("button",{onClick:y=>a(y,"An error string"),children:"Error String"}),e("button",{onClick:y=>a(y,{message:"An error object with a message"}),children:"Error Object"}),e("button",{onClick:y=>a(y,{label:"Example",message:"An error object with label and message"}),children:"Labelled Error"})]})},ja=`import { Form, Errors, Reset, useForm } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Errors, Reset, useForm } from '@abw/react-formula'

const Error = () =>
  <Form>
    <Errors/>
    <ErrorButtons/>
    <Reset/>
  </Form>

const ErrorButtons = () => {
  const { handleError } = useForm()

  const setError = (event, error) => {
    event.preventDefault()
    handleError({ error })
  }

  const errorString = event =>
    setError(
      event,
      'An error string'
    )

  const errorObject = event =>
    setError(
      event,
      { message: 'An error object with a message' }
    )

  const errorLabel  = event =>
    setError(
      event,
      {
        label: 'Example',
        message: 'An error object with label and message'
      }
    )

  return (
    <div className="grid-3 gap-4 mar-b-4">
      <button onClick={errorString}>
        Error String
      </button>
      <button onClick={errorObject}>
        Error Object
      </button>
      <button onClick={errorLabel}>
        Labelled Error
      </button>
    </div>
  )
}

export default Error`,Va=()=>t(i,{children:[e(l,{name:"one",label:"Field One"}),e(l,{name:"two",label:"Field Two"}),e(C,{}),e(Ba,{}),e(k,{})]}),Ba=()=>{const{handleError:r}=L(),a=(g,re)=>{g.preventDefault(),r({errors:re})};return t("div",{className:"grid-2 gap-4 mar-b-4",children:[e("button",{onClick:g=>a(g,["A single error in errors"]),children:"Error String"}),e("button",{onClick:g=>a(g,["An error string","Another error string"]),children:"Error Strings"}),e("button",{onClick:g=>a(g,[{message:"An error message in an object"},{message:"Another error message in an object"}]),children:"Error Objects"}),e("button",{onClick:g=>a(g,[{label:"The First Field",message:"This is a labelled error"},{label:"The Second Field",message:"Another labelled error"}]),children:"Labelled Errors"}),e("button",{onClick:g=>a(g,[{name:"one",message:'An error for the "one" field'},{field:"two",message:'An error for the "two" field'}]),children:"Field Errors"})]})},Ia=`import { Form, Field, Errors, Reset, useForm } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Reset, useForm } from '@abw/react-formula'

const ErrorsExample = () =>
  <Form>
    <Field name="one" label="Field One"/>
    <Field name="two" label="Field Two"/>
    <Errors/>
    <ErrorButtons/>
    <Reset/>
  </Form>

const ErrorButtons = () => {
  const { handleError } = useForm()

  const setErrors = (event, errors) => {
    event.preventDefault()
    handleError({ errors })
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
      { message: 'An error message in an object' },
      { message: 'Another error message in an object'}
    ])

  const errorLabels  = event =>
    setErrors(event, [
      { label: 'The First Field',  message: 'This is a labelled error' },
      { label: 'The Second Field', message: 'Another labelled error' }
    ])

  const errorFields  = event =>
    setErrors(event, [
      // both 'name' and 'field' (and also 'param') can be
      // used to denote the invalid field
      { name:  'one', message: 'An error for the "one" field' },
      { field: 'two', message: 'An error for the "two" field' }
    ])

  return (
    <div className="grid-2 gap-4 mar-b-4">
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
      <button onClick={errorFields}>
        Field Errors
      </button>
    </div>
  )
}

export default ErrorsExample`,Ya=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Errors"}),t(s,{align:"end",children:[e("div",{children:t("p",{children:["By default, validation errors will be displayed against the corresponding fields. In this example the first two fields are marked as"," ",e("code",{children:"required"}),".  A validation error will be raised for them if the form is submitted without a value being entered."]})}),e(m,{children:e("p",{children:"Try submitting the form below without entering anything for either of the first two fields."})})]}),e(o,{Element:Sa,code:Ea,caption:"Required Fields",expand:!0}),e("h2",{children:e("code",{children:"Errors"})}),t("p",{children:["The ",e("code",{children:"Errors"})," component can be included anywhere inside the form to display field validation errors or more general errors."]}),e(o,{Element:ya,code:va,caption:"Errors",expand:!0}),e("h2",{children:e("code",{children:"title"})}),t("p",{children:["The ",e("code",{children:"title"})," property can be passed to set a custom title."]}),e(o,{Element:wa,code:Ta,caption:"Errors Title",expand:!0}),t("p",{children:["The ",e("code",{children:"title"})," property can also be a function which will be passed the number of errors."]}),e(o,{Element:Ra,code:Ca,caption:"Errors Title Function",expand:!0}),e("h2",{children:e("code",{children:"prompt"})}),t("p",{children:["The ",e("code",{children:"prompt"})," property can be passed to set a custom prompt."]}),e(o,{Element:Na,code:ka,caption:"Errors Prompt",expand:!0}),t("p",{children:["The ",e("code",{children:"prompt"})," property can also be a function which will be passed the number of errors."]}),e(o,{Element:Oa,code:qa,caption:"Errors Prompt Function",expand:!0}),t("h2",{children:["Form Options: ",e("code",{children:"errorsTitle"})," and ",e("code",{children:"errorsPrompt"})]}),t("p",{children:["You can set the ",e("code",{children:"title"})," and ",e("code",{children:"prompt"})," properties for the ",e("code",{children:"Errors"})," component as the ",e("code",{children:"errorsTitle"})," and"," ",e("code",{children:"errorsPrompt"})," properties, respectively.  They can be strings or functions that return strings, as described above."]}),e(o,{Element:Aa,code:Pa,caption:"Form Errors Options",expand:!0}),e("h2",{children:"Error Types"}),e("h3",{children:e("code",{children:"error"})}),t(s,{children:[t("div",{children:[t("p",{children:["The ",e(f,{})," context can include a single ",e("code",{children:"error"})," or an array of ",e("code",{children:"errors"}),`.  The first case is typically used when there's an error that doesn't relate to a specific field, e.g. "Invalid username or password".  The latter case is used when there are multiple errors, e.g. for different fields.`]}),t("p",{children:["Just to complicate matters, both ",e("code",{children:"error"})," and the elements in ",e("code",{children:"errors"})," can be either strings or objects containing a"," ",e("code",{children:"message"})," and other information about what field the error message relates to, including the field ",e("code",{children:"name"})," or"," ",e("code",{children:"label"}),"."]})]}),e("div",{children:t("p",{children:["This first example includes some buttons that set the ",e("code",{children:"error"})," ","in the ",e(f,{})," to demonstrate the different combinations."]})})]}),e(o,{Element:La,code:ja,caption:"error"}),e("h3",{children:e("code",{children:"errors"})}),t(s,{children:[t("div",{children:[t("p",{children:["This second example sets the ",e("code",{children:"errors"}),".  These are typically used when there is one or more errors relating to particular fields."]}),t("p",{children:["If an entry in ",e("code",{children:"errors"})," is a string then it will be displayed as it is.  The first two buttons generate these kind of errors."]}),t("p",{children:["If an entry in ",e("code",{children:"errors"})," is an object then it should contain a ",e("code",{children:"message"})," which will be displayed.  Click on the third button to see this in action."]})]}),t("div",{children:[t("p",{children:["If the object also contains a ",e("code",{children:"label"})," then it will be displayed in bold in the errors list.  The fourth button can be clicked to demonstrate this."]}),t("p",{children:["Alternately, the object can contain any of ",e("code",{children:"field"}),","," ",e("code",{children:"name"})," or ",e("code",{children:"param"})," to indicate the invalid field. If it corresponds to a known field then the field label (if it has one) will be displayed along with the error.  Click on the fifth button to see how this works."]})]})]}),e(o,{Element:Va,code:Ia,caption:"error"}),e("h2",{children:"Custom Error Component"}),t(s,{children:[t("p",{children:["You can always implement your own component for displaying errors if you don't like the way this works.  Just be warned that there are the various different possibilities that need to be accounted for. You can use the ",e("code",{children:"useForm"})," function to get access to the form context which contains the ",e("code",{children:"error"})," and/or ",e("code",{children:"errors"}),"."]}),t("p",{children:["See the implementations of the"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Errors.jsx",children:"Errors"})," ","and"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Error.jsx",children:"Error"})," ","modules for a starting point."]})]})]}),$a=`import { Form, Field, ResetSubmit, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit, Debug } from '@abw/react-formula'

const DebugForm = () =>
  <Form>
    <Field
      name="message"
      label="Message"
      placeholder="Enter a message"
      required
    />
    <Field
      name="animal"
      label="Animal"
      type="select"
      options={['Anteater', 'Badger', 'Camel']}
      placeholder="Select an animal"
      required
    />
    <Field
      name="terms"
      label="Terms and Conditions"
      type="checkbox"
      text="I agree to the Terms and Conditions"
      required
    />
    <ResetSubmit
      space
      reset={{ className: 'outline' }}
      submit={{ className: 'blue' }}
    />
    <Debug/>
  </Form>

export default DebugForm`,Ma=()=>t(i,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",required:!0}),e(E,{space:!0,reset:{className:"outline"},submit:{className:"blue"}}),e(W,{})]}),Ua=()=>t(i,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",required:!0}),e(E,{space:!0,reset:{className:"outline"},submit:{className:"blue"}}),e(W,{values:!1,fields:!0,status:!0})]}),Ga=`import { Form, Field, Debug, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit, Debug } from '@abw/react-formula'

const DebugStatus = () =>
  <Form>
    <Field
      name="message"
      label="Message"
      placeholder="Enter a message"
      required
    />
    <Field
      name="animal"
      label="Animal"
      type="select"
      options={['Anteater', 'Badger', 'Camel']}
      placeholder="Select an animal"
      required
    />
    <Field
      name="terms"
      label="Terms and Conditions"
      type="checkbox"
      text="I agree to the Terms and Conditions"
      required
    />
    <ResetSubmit
      space
      reset={{ className: 'outline' }}
      submit={{ className: 'blue' }}
    />
    <Debug
      values={false}
      fields={true}
      status={true}
    />
  </Form>

export default DebugStatus`,Ha=`import { Form, Field, ResetSubmit, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit, Debug } from '@abw/react-formula'

const DebugAll = () =>
  <Form>
    <Field
      name="message"
      label="Message"
      placeholder="Enter a message"
      required
    />
    <Field
      name="animal"
      label="Animal"
      type="select"
      options={['Anteater', 'Badger', 'Camel']}
      placeholder="Select an animal"
      required
    />
    <Field
      name="terms"
      label="Terms and Conditions"
      type="checkbox"
      text="I agree to the Terms and Conditions"
      required
    />
    <ResetSubmit
      space
      reset={{ className: 'outline' }}
      submit={{ className: 'blue' }}
    />
    <Debug all/>
  </Form>

export default DebugAll`,Wa=()=>t(i,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",required:!0}),e(E,{space:!0,reset:{className:"outline"},submit:{className:"blue"}}),e(W,{all:!0})]}),za=()=>t("div",{className:"prose",children:[e("h1",{children:"Debug"}),t(s,{align:"end",children:[t("p",{children:["The ",e("code",{children:"Debug"})," component can be used in development to debug your form.  By default it displays only the form values."]}),e(m,{children:"Try updating the form values and see how the debugging data changes."})]}),e(o,{Element:Ma,code:$a,caption:"Debug"}),t("h2",{children:[e("code",{children:"values"})," and ",e("code",{children:"status"})]}),t("p",{children:["The ",e("code",{children:"status"})," option can be set to view the form status. The ",e("code",{children:"values"})," option defaults to ",e("code",{children:"true"})," but you can set it to ",e("code",{children:"false"})," if you don't want to view the current form values."]}),e(o,{Element:Ua,code:Ga,caption:"Status and Fields"}),e("h2",{children:e("code",{children:"all"})}),t("p",{children:["The ",e("code",{children:"all"})," option is a shortcut to show all form data."]}),e(o,{Element:Wa,code:Ha,caption:"All Data",expand:!0})]}),Ja=()=>t(U,{children:[e(d,{path:"",end:!0,element:e(je,{})}),e(d,{path:"Form/*",element:e(Tt,{})}),e(d,{path:"Field/*",element:e(jo,{})}),e(d,{path:"Fields",element:e(ti,{})}),e(d,{path:"Fieldset",element:e(pi,{})}),e(d,{path:"Submit",element:e(vi,{})}),e(d,{path:"Reset",element:e(Ai,{})}),e(d,{path:"Cancel",element:e(Vi,{})}),e(d,{path:"CancelSubmit",element:e(_i,{})}),e(d,{path:"ResetSubmit",element:e(ba,{})}),e(d,{path:"CancelResetSubmit",element:e(ia,{})}),e(d,{path:"Changed",element:e(xa,{})}),e(d,{path:"Errors",element:e(Ya,{})}),e(d,{path:"Debug",element:e(za,{})})]});export{Ja as default};
