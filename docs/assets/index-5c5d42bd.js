import{a as e,a1 as Z,j as t,T as H,a2 as ee,a3 as g,F as i,c as l,S as f,a4 as te,a5 as le,a6 as oe,e as c,N as re,E as r,D as V,a7 as W,a8 as ie,r as b,p as F,a9 as C,d as h,$ as j,a0 as a,aa as ae,H as N,K as _,i as v,R as S,Z as $,ab as ne,C as de,x as se,y as ce,ac as me,L as k,X as P,ad as K,ae as ue,af as he,k as pe,ag as fe,B as be,l as Fe,ah as xe,A as Se,m as E,M as ge,w as J,o as Ee,u as we,ai as B,aj as z,ak as O,al as A,f as T,am as q,an as L,G as w,ao as ye,t as Te,Q as Y,U as I,W as Q,Y as ve,h as Re,_ as Ce,ap as Ne}from"./index-9a795a9b.js";import{S as u,a as p,c as R}from"./index.esm-51d35d26.js";const ke=({children:o})=>e(Z,{children:o}),Oe=()=>t("div",{children:[e("h1",{children:"Components"}),e("p",{className:"intro",children:"This section of the documentation provides detailed information about each of the components."}),e(H,{menu:ee})]}),qe=()=>t("div",{children:[e("h1",{children:"Form"}),t("p",{children:["The ",e("code",{children:"Form"})," component is used to render a form. Inside the form you will typically have one or more"," ",e(g,{to:"/field",children:e("code",{children:"Field"})})," components to render the fields and a ",e(g,{to:"/form/submit",children:e("code",{children:"Submit"})})," ","component to add a submit button."]}),t("ul",{className:"menu",children:[e("li",{children:e(g,{to:"./properties",text:"Form properties"})}),t("li",{children:[e(g,{to:"./reset",children:e("code",{children:"Reset"})})," component to reset the form"]}),t("li",{children:[e(g,{to:"./submit",children:e("code",{children:"Submit"})})," component to submit the form"]}),t("li",{children:[t(g,{to:"./controls",children:["Controls combining ",e("code",{children:"Submit"})]})," component to submit the form"]})]})]}),Ae=()=>t(i,{fields:{name:{label:"Your name",required:!0},email:{label:"Your email address",required:!0}},children:[e(l,{name:"name"}),e(l,{name:"email"}),e(f,{})]}),Le=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default FieldsExample`,De=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const FieldsExample = () =>
  <Form>
    <Field name="name" label="Your name" required/>
    <Field name="email" label="Your email address" required/>
    <Submit/>
  </Form>

export default FieldsExample`,s=({links:o})=>t("div",{className:"see-also",children:[e("h2",{children:"See Also"}),e("ul",{className:"menu",children:o.map(n=>e(Pe,{to:n},n))})]}),Pe=({to:o})=>{const n=te[o]||le(`Invalid SeeAlso link: ${o}`),{about:d}=n;return t("li",{children:[e(oe,{to:o}),!!d&&e("span",{className:"about",children:d})]})},Ve=()=>t("div",{className:"prose",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"fields"})}),t("p",{children:["The ",e("code",{children:"fields"})," property allows you to define properties for form fields externally.  The ",e(c,{})," ",e(re,{})," property is used to associate a field to its definition."]}),e(r,{Element:Ae,code:Le,caption:"fields",expand:!0}),t("p",{children:["This is the same as defining the properties on the ",e(c,{})," components."]}),e(V,{code:W(De),caption:"Inline Field",expand:!0}),t("p",{children:["The ",e("code",{children:"fields"})," definition can contain any number of fields, including those that aren't used by any particular form.  Only the fields that are referenced by a ",e(c,{})," component will be considered part of the form."]}),e("p",{children:"Although it requires a little more work to define fields externally, there are a number of benefits.  The first is that you're separating the field definition from the presentational markup.  When a form gets more complex it's usually easier to have them separated, particularly if you have more complicated validation functions attached to the fields."}),t("p",{children:["Another benefit is that you can share field definitions across multiple forms.  For example, you might want to define a single set of field definitions for all forms relating to user authentication: login, registration, password reset, and so on.  The ",e("code",{children:"email"})," ","field will be the same for each, so it makes sense to define it in one place."]})]}),je=()=>t(i,{values:{name:"Bobby Badger",email:"bobby@badgerpower.com"},children:[e(l,{name:"name",label:"Name"}),e(l,{name:"email",label:"Email Address"}),e(f,{})]}),Be=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default ValuesExample`,Ye=()=>t("div",{className:"prose",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"values"})}),t("p",{children:["The ",e("code",{children:"values"})," property can be used to pre-define values for fields in the form.  This is typically used when editing existing data records."]}),e(r,{Element:je,code:Be,caption:"fields",expand:!0}),e(s,{links:["form:hidden"]})]}),Ie=()=>t(i,{values:{name:"Bobby Badger",email:"bobby@badgerpower.com"},hidden:{user_id:12345},children:[e(l,{name:"name",label:"Name"}),e(l,{name:"email",label:"Email Address"}),e(f,{})]}),$e=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default HiddenExample`,Me=()=>t("div",{className:"prose",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"hidden"})}),t("p",{children:["The ",e("code",{children:"hidden"})," property can be used to define hidden values for the form.  This is typically used to include identifiers when editing existing data records."]}),t("p",{children:["Any ",e("code",{children:"hidden"})," fields and their values will be included in the submitted data."]}),e(r,{Element:Ie,code:$e,caption:"hidden",expand:!0}),e(s,{links:["form:values"]})]});const Ge=()=>t(i,{classes:{required:"required red-bg"},showRequired:!0,children:[e(l,{name:"name",label:"Name",required:!0}),e(l,{name:"email",label:"Email Address"}),e(f,{})]}),Ue=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default ClassesExample`,He=`.red-bg {
  color: white !important;
  background-color: #c44 !important;
  border-color: black !important;
}`,We=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"classes"})}),t("p",{children:["The ",e("code",{children:"classes"})," property can be used to change the"," ",e(ie,{})," used for different elements in a form."]}),e(r,{Element:Ge,code:Ue,caption:"classes",expand:!0}),t("p",{children:["This is typically used in conjunction with your own custom stylesheet. For example, the ",e("code",{children:"red-bg"})," CSS class might be defined like this."]}),e(V,{code:He,language:"css",caption:"Custom Stylesheet",expand:!0}),t("p",{children:["Note the use of the ",e("code",{children:"!important"})," modifier to increase the specificity of the rule in this example.  The alternative would be to fully qualify it, e.g as ",e("code",{children:".formula .field label .red-bg"}),"."]}),e(s,{links:["styling:css-classes"]})]}),_e=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:"THIS IS TODO"}),t("pre",{children:["className:         FORMULA",e("br",{}),"errorsInHeader:    true",e("br",{}),"errorsInFooter:    false,",e("br",{}),"enctype:           application/x-www-form-urlencoded",e("br",{}),"method:            post",e("br",{}),"headerClass:       header",e("br",{}),"bodyClass:         body",e("br",{}),"footerClass:       footer",e("br",{}),"errorsClass:       errors",e("br",{}),"errorsTitle:       n => `Form Submission Error... errorPrompt:       Please correct this problem and re-submit:",e("br",{}),"errorsPrompt:      n => `Please correct these... submittingClass:   SUBMITTING,",e("br",{}),"validatingClass:   VALIDATING",e("br",{})]})]}),Ke=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetFocusExample`,Je=()=>{const[o,n]=b.useState(!1);return t(F,{children:[t(i,{onLoad:n,children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",type:"textarea"}),e(l,{name:"field3",label:"Field Three",type:"checkbox",text:"One Louder"}),e(l,{name:"field4",label:"Field Four",type:"select",options:["Nigel","David","Derek"]}),e(l,{name:"field5",label:"Field Five",type:"radio",default:"Keyboards",className:"inline",options:["Vocals","Guitar","Bass","Keyboards","Drums"]})]}),t("div",{className:"formula",children:[e("button",{onClick:()=>o==null?void 0:o.setFocus("field1"),children:"Focus One"}),e("button",{onClick:()=>o==null?void 0:o.setFocus("field2"),children:"Focus Two"}),e("button",{onClick:()=>o==null?void 0:o.setFocus("field3"),children:"Focus Three"}),e("button",{onClick:()=>o==null?void 0:o.setFocus("field4"),children:"Focus Four"}),e("button",{onClick:()=>o==null?void 0:o.setFocus("field5"),children:"Focus Five"})]})]})},ze=`import { Form, Field, useForm } from '../../../../../lib/index.js'

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

export default UseFormFocus`,Qe=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two"}),e(M,{name:"field1",caption:"Focus Field One"}),e(M,{name:"field2",caption:"Focus Field Two"})]}),M=({name:o,caption:n})=>{const{setFocus:d}=C();return e("button",{onClick:m=>{m.preventDefault(),d(o)},children:n})},Xe=`import { useForm } from '../../../../../lib/index.js'

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

export default FieldFocusButton`,Ze=()=>t("div",{children:[e("h1",{children:"Focus Fields"}),e("h2",{children:e("code",{children:"setFocus()"})}),t("p",{children:["You can programmatically set the focus on a ",e(c,{})," by calling the ",e("code",{children:"setFocus()"})," method on the ",e(h,{}),", passing the name of the field that you want to focus as an argument."]}),t("p",{children:["You can capture a reference to the form using the ",e("code",{children:"onLoad"})," ","property to set a state variable, as shown in this example."]}),e(r,{Element:Je,code:Ke,caption:"onLoad() and setFocus()",children:e("p",{children:"Click on one of the buttons to focus on a field."})}),t("p",{children:["If the buttons (or other controls) that you want to use to focus the fields are contained within the ",e(h,{})," then you can call the ",e("code",{children:"useForm()"})," function to gain access to the form context."]}),e(r,{Element:Qe,code:ze,caption:"useForm() and setFocus()"}),t("p",{children:["Be careful to make sure that your buttons call"," ",e("code",{children:"e.preventDefault()"})," on the event, as shown in the example above, otherwise the form may be submitted.  Alternately you can pass the event to the ",e("code",{children:"setFocus()"})," method as the second argument and it will do it for you, as shown below."]}),e(V,{code:W(Xe),expand:!0})]}),et=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(f,{})]}),tt=`import { Form, Field, Submit } from '../../../../../../lib/index.js'

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

export default SubmitExample`,lt=()=>t("div",{className:"prose",children:[e("h1",{children:"Validation"}),e("p",{className:"intro wide",children:"Validation can be applied on two levels: on individual fields and/or on the form."}),t(u,{children:[t("p",{children:["You can specify a field is ",e("code",{children:"required"}),", as shown here, or define your own custom ",e(g,{to:"/components/field/validation",text:"field validation"})," functions. When the form is submitted, each field will be validated.  If any validation errors occur then the form submission will be cancelled and the errors displayed."]}),e(p,{children:"Try entering some text in the fields below then click on the Submit button.  The first two fields are required so you can leave either of the them empty to see the validation errors."})]}),e(r,{Element:et,code:tt,caption:"Required Fields",expand:!0}),t("p",{children:["You can also define a ",e("code",{children:"validate"})," function on the ",e(h,{}),". This will be run after any field validation and will be passed"]})]}),ot=()=>{const[o,n]=b.useState();return t(i,{onSubmit:d=>n(`foo was submitted as ${d.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(f,{}),o]})},rt=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnSubmitExample`,it=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onSubmit"})}),e("p",{children:"TODO"}),e(r,{Element:ot,code:rt,caption:"onSubmit",expand:!0,children:e("p",{children:"TODO"})}),e(s,{links:["form:onSuccess","form:onError"]})]}),at=()=>{const[o,n]=b.useState();return t(i,{onSubmit:d=>n(`foo was submitted as ${d.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(f,{}),o]})},nt=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnSuccessExample`,dt=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onSuccess"})}),e("p",{children:"TODO"}),e(r,{Element:at,code:nt,caption:"onSuccess",expand:!0,children:e("p",{children:"TODO"})}),e(s,{links:["form:onSubmit","form:onError"]})]}),st=()=>{const[o,n]=b.useState();return t(i,{onSubmit:d=>n(`foo was submitted as ${d.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(f,{}),o]})},ct=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnErrorExample`,mt=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onError"})}),e("p",{children:"TODO"}),e(r,{Element:st,code:ct,caption:"onError",expand:!0,children:e("p",{children:"TODO"})}),e(s,{links:["form:onSubmit","form:onError"]})]}),ut=`import { Form, Field } from '../../../../../../lib/index.js'

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

export default SetValues`,ht=()=>{const[o,n]=b.useState(),d=(m,D)=>o==null?void 0:o.setValues({color:m,animal:D});return t(F,{children:[t(i,{onLoad:n,children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"})]}),e("button",{onClick:()=>d("Grey","Elephant"),children:"Grey Elephant"}),e("button",{onClick:()=>d("Red","Fox"),children:"Red Fox"})]})},pt=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

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

export default UseSetValues`,ft=()=>e(F,{children:t(i,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),e(G,{color:"Grey",animal:"Elephant"}),e(G,{color:"Red",animal:"Fox"})]})}),G=({color:o,animal:n})=>{const{setValues:d}=C();return t("button",{onClick:m=>{m.preventDefault(),d({color:o,animal:n},m)},children:[o," ",n]})},bt=`import { Form, Field, useForm } from '../../../../../../lib/index.js'

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

export default UseSetValues`,Ft=()=>e(F,{children:t(i,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),e(U,{color:"Grey",animal:"Elephant"}),e(U,{color:"Red",animal:"Fox"})]})}),U=({color:o,animal:n})=>{const{setValues:d}=C();return t("button",{onClick:m=>d({color:o,animal:n},m),children:[o," ",n]})},xt=()=>t("div",{children:[e("h1",{children:"Setting Form Values"}),e("h2",{children:"setValues()"}),t("p",{children:["The ",e("code",{children:"setValues"})," function can be used to programmatically set form values.  You can use the ",e("code",{children:"onLoad"})," handler to save a reference to the form context as show in this example."]}),e(r,{Element:ht,code:ut,caption:"setValues",children:e("p",{children:"Click on one of the buttons to update the form values."})}),t("p",{children:["If you want to set the values from a component placed inside the"," ",e("code",{children:"Form"})," component then you can use ",e("code",{children:"useForm()"})," to get access to the form context."]}),e(r,{Element:ft,code:pt,caption:"setValues"}),t("p",{children:["If you're using a ",e("code",{children:"button"})," to trigger the call to"," ",e("code",{children:"setValues()"}),", as shown in the example above, then you need to make sure you call ",e("code",{children:"e.preventDefault()"})," event.  Otherwise the form may be submitted. Alternately you can pass the event as the second argument to the ",e("code",{children:"setValues()"})," method as shown below and it will do it for you."]}),e(r,{Element:Ft,code:bt,caption:"setValues"})]}),St=()=>t(j,{children:[e(a,{path:"",end:!0,element:e(qe,{})}),e(a,{path:"fields",element:e(Ve,{})}),e(a,{path:"values",element:e(Ye,{})}),e(a,{path:"hidden",element:e(Me,{})}),e(a,{path:"classes",element:e(We,{})}),e(a,{path:"properties",element:e(_e,{})}),e(a,{path:"setfocus",element:e(Ze,{})}),e(a,{path:"validation",element:e(lt,{})}),e(a,{path:"onSubmit",element:e(it,{})}),e(a,{path:"onSuccess",element:e(dt,{})}),e(a,{path:"onError",element:e(mt,{})}),e(a,{path:"set/*",element:e(xt,{})})]}),gt=`import { Form, Field } from '../../../../lib/index.js'

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

export default FieldExample`,Et=()=>e(i,{children:e(l,{name:"example",label:"An Example Field",type:"text",required:!0})}),wt=()=>t(F,{children:[e("h1",{children:"Field Component"}),t("p",{className:"intro",children:["The ",e("code",{children:"Field"})," component is used to render a field inside a ",e(h,{}),"."]}),e(r,{Element:Et,code:gt,caption:"Field",expand:!0}),e(H,{menu:ae})]}),yt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:"THIS IS TODO"})]}),Tt=`import { Form, Field, Debug, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit, Debug } from '@abw/react-formula'

const NameExample = () =>
  <Form>
    <Field name="field1"/>
    <Submit/>
    <Debug/>
  </Form>

export default NameExample`,vt=()=>t(i,{children:[e(l,{name:"field1"}),e(f,{}),e(N,{})]}),Rt=`import { Form, Field, Debug, Submit } from '../../../../../lib/index.js'

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

export default FormFieldsExample`,Ct={field1:{label:"This is field one",required:!0}},Nt=()=>t(i,{fields:Ct,children:[e(l,{name:"field1"}),e(f,{}),e(N,{})]}),kt=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"name"})}),t(u,{children:[t("p",{children:["The ",e("code",{children:"name"})," is the only required property for a ",e(c,{}),". It is used as the key to set the ",e(h,{})," value."]}),t(p,{children:["Enter some text in the input field.  The ",e(_,{}),` component is included in this example to show the form data as it's being set.  Click on the "Submit" button and you'll see an alert showing the data that would be submitted.`]})]}),e(r,{Element:vt,code:Tt,caption:"name",expand:!0}),t(u,{children:[t("p",{children:["You can set the ",e(v,{})," property on the ",e(h,{})," as an object containing additional properties for each field.  The"," ",e("code",{children:"name"})," is used as the key to fetch those properties. Any properties explicitly set on the ",e(c,{})," will override them."]}),t(p,{children:["Note how the ",e(c,{})," has now got a ",e("code",{children:"label"})," and the"," ",e(S,{})," property is set."]})]}),e(r,{Element:Nt,code:Rt,caption:"Form fields",expand:!0}),e(s,{links:["field:label","form:fields"]})]}),Ot=`import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Hello World!"/>
  </Form>

export default LabelExample`,qt=()=>e(i,{children:e(l,{name:"field1",label:"Hello World!"})}),At=`import { Form, Field } from '../../../../../lib/index.js'

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

export default FormFieldsExample`,Lt={field1:{label:"This is field one"},field2:{label:"This is field two"}},Dt=()=>t(i,{fields:Lt,children:[e(l,{name:"field1"}),e(l,{name:"field2",label:"A different label"})]}),Pt=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"label"})}),t("p",{children:["Add a label to the field with the ",e("code",{children:"label"})," property."]}),e(r,{Element:qt,code:Ot,caption:"name",expand:!0}),t(u,{children:[t("p",{children:["Like all other field properties, they can be defined via ",e(v,{})," ","on the ",e(h,{}),".  If you explicitly set a ",e("code",{children:"label"})," on the"," ",e(c,{})," then it will take precedence."]}),t(p,{children:["Note how the first field has the ",e("code",{children:"label"})," defined in the"," ",e(v,{})," but the second defines its own ",e("code",{children:"label"})," ","which is used instead of the one defined in the ",e(v,{}),"."]})]}),e(r,{Element:Dt,code:At,caption:"Form fields",expand:!0}),e(s,{links:["field:name","form:fields"]})]}),Vt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default TypeExample`,jt=()=>t(i,{children:[e(l,{name:"field1",label:"Text Field",wide:!0}),e(l,{name:"field2",type:"textarea",label:"TextArea Field",wide:!0}),e(l,{name:"field3",type:"number",label:"Number Field",wide:!0}),e(l,{name:"field4",type:"date",label:"Date Field",wide:!0}),e(l,{name:"field5",type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"],wide:!0}),e(l,{name:"field6",type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]}),e(l,{name:"field7",type:"checkbox",label:"Checkbox Field",text:"I like badgers"})]}),Bt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default FormFieldsExample`,Yt={field1:{label:"Text Field"},field2:{type:"textarea",label:"TextArea Field"},field3:{type:"number",label:"Number Field"},field4:{type:"date",label:"Date Field"},field5:{type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"]},field6:{type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]},field7:{type:"checkbox",label:"Checkbox Field",text:"I like badgers"}},It=()=>t(i,{fields:Yt,children:[e(l,{name:"field1",wide:!0}),e(l,{name:"field2",wide:!0}),e(l,{name:"field3",wide:!0}),e(l,{name:"field4",wide:!0}),e(l,{name:"field5",wide:!0}),e(l,{name:"field6"}),e(l,{name:"field7"})]}),$t=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"type"})}),t(u,{align:"end",children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"type"})," property specifies what kind of input should be displayed.  The default value is ",e("code",{children:"text"})," corresponding to the ",e($,{})," input component.  Other values can be"," ",e("code",{children:"textarea"})," (see ",e(ne,{}),"),"," ",e("code",{children:"checkbox"})," (see ",e(de,{}),"),"," ",e("code",{children:"radio"})," (see ",e(se,{}),"),"," ",e("code",{children:"select"})," (see ",e(ce,{}),") and"," ",e("code",{children:"hidden"})," (see ",e(me,{}),") corresponding to the basic HTML input types."]}),t("p",{children:["You can also set ",e("code",{children:"type"})," to be one of the other valid HTML input types, e.g. ",e("code",{children:"password"}),", ",e("code",{children:"email"}),","," ",e("code",{children:"number"}),", ",e("code",{children:"date"}),", ",e("code",{children:"color"}),", and so on.  These use the same basic ",e($,{})," input component as for ",e("code",{children:"text"})," types, but with the ",e("code",{children:"type"})," attribute set appropriately to use the browser-specific functionality."]})]}),e(p,{children:"Enter some text in the input fields below. Note how the number field uses the browser's built-in functionality to accept only numbers, and the date field provides a date picker."})]}),e(r,{Element:jt,code:Vt,caption:"type",expand:!0}),t(u,{children:[t("p",{children:["As with all other ",e(c,{})," properties, they can be defined using"," ",e(v,{})," set on the ",e(h,{}),". The benefit of this approach is that it keeps the field definitions and markup separate.  As well as making them easier to read and maintain, it also has the benefit that field definitions can be reused across multiple forms."]}),t(p,{children:["The example below generates exactly the same form as the one above (with the exception of the additional ",e(_,{})," component). Note that the form data will only include fields that are present in the ",e(h,{}),".  The ",e("code",{children:"field5"})," field definition is effectively ignored."]})]}),e(r,{Element:It,code:Bt,caption:"Form fields",expand:!0}),e(s,{links:["field:name","field:label","form:fields","input:types"]})]}),Mt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default PlaceholderExample`,Gt=()=>e(i,{children:e(l,{name:"name",label:"Your Name",placeholder:"Enter your name"})}),Ut=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"placeholder"})}),t("p",{children:["Use the ",e("code",{children:"placeholder"})," property to add some text as a placeholder in the input."]}),e(r,{Element:Gt,code:Mt,caption:"placeholder",expand:!0}),e(s,{links:["field:name","form:fields"]})]}),Ht=`import { Form, Field, Layout } from '../../../../../lib/index.js'

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

export default ChildFunctions`,Wt=()=>e(i,{children:t(l,{name:"greeting",label:"Enter a greeting",children:[o=>t("h2",{className:"mar-t-none",children:["The ",o.name," field"]}),e(k,{}),o=>t(F,{children:[t("div",{children:["Current value is: ",o.value]}),t("div",{className:"flex gap-2 blue mar-t-4",children:[e("button",{type:"button",onClick:()=>o.setValue("Foo"),children:"Foo"}),e("button",{type:"button",onClick:()=>o.setValue("Bar"),children:"Bar"})]})]})]})}),_t=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"children"})}),e("p",{children:"You can define children of a field, either as components or functions. Component can access the field context Functions receive the field context as the first argument."}),t("p",{children:["Note that if you define children for the field then it will replace the default ",e(P,{})," component.  In this case it's up to you to render the field content."]}),t("p",{children:["If you want to include the default layout for a field and add some content of your own then you can include the ",e(P,{})," component manually."]}),e(r,{Element:Wt,code:Ht,caption:"suffix",expand:!0})]}),Kt=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default HelpExample`,Jt=()=>t(i,{children:[e(l,{name:"email",label:"Email Address",help:"Enter the email address that you registered with",required:!0}),e(f,{})]}),zt=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"help"})}),t(u,{align:"end",children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"help"})," property can be used to define some additional help for the user.  By default it is displayed underneath the field input."]}),e("p",{children:"If the field input fails to validate then the validation error message will be displayed in its place."})]}),e(p,{children:"Try submitting the form without entering any value.  You should see the help message replaced by the validation error."})]}),e(r,{Element:Jt,code:Kt,caption:"help"}),e(s,{links:["field:name","field:label","field:required","field:validate","form:fields"]})]}),Qt=`import { Form, Field } from '../../../../../lib/index.js'

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

export default PrefixExample`,Xt=()=>e(i,{children:e(l,{name:"money",type:"number",label:"Price",prefix:"$"})}),Zt=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"prefix"})}),t("p",{children:["You can add a ",e("code",{children:"prefix"})," to a ",e("code",{children:"text"})," field or any of the other types using the basic text input, e.g."," ",e("code",{children:"money"}),", ",e("code",{children:"date"}),", etc."]}),e(r,{Element:Xt,code:Qt,caption:"prefix",expand:!0}),e(s,{links:["field:suffix"]})]}),el=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SuffixExample`,tl=()=>e(i,{children:e(l,{name:"suffix",type:"password",label:"Enter your password",suffix:"🔒"})}),ll=`import { Form, Field } from '../../../../../lib/index.js'

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

export default PrefixSuffixExample`,ol=()=>e(i,{children:e(l,{name:"money",type:"number",label:"Field with both prefix and suffix",prefix:"$",suffix:".00"})}),rl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"suffix"})}),t("p",{children:["You can add a ",e("code",{children:"suffix"})," to a field"]}),e(r,{Element:tl,code:el,caption:"suffix",expand:!0}),t("p",{children:["You can add both a ",e("code",{children:"prefix"})," and a ",e("code",{children:"suffix"}),"."]}),e(r,{Element:ol,code:ll,caption:"prefix and suffix",expand:!0}),e(s,{links:["field:prefix"]})]}),il=()=>{const[o,n]=b.useState(),d=m=>n(`${m.label} was focussed`);return t(i,{children:[e(l,{name:"foo",label:"The Foo Field",onFocus:d}),e(l,{name:"bar",label:"The Bar Field",onFocus:d}),o]})},al=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnFocusExample`,nl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onFocus"})}),t(u,{children:[t("p",{children:["You can add an ",e("code",{children:"onFocus"})," handler to a ",e(c,{})," ","which will be called when the field is focussed (i.e. selected). The field context will be passed as an argument."]}),e(p,{children:"Focus on each of the fields below.  A message should be displayed each time a field gains focus."})]}),e(r,{Element:il,code:al,caption:"onFocus",expand:!0}),e(s,{links:["field:onBlur","field:onChange","field:onValid","field:onInvalid"]})]}),dl=()=>{const[o,n]=b.useState(),d=m=>n(`${m.label} was blurred`);return t(i,{children:[e(l,{name:"foo",label:"The Foo Field",onBlur:d}),e(l,{name:"bar",label:"The Bar Field",onBlur:d}),o]})},sl=`import { Form, Field } from '../../../../../lib/index.js'

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
export default OnBlurExample`,cl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onBlur"})}),t(u,{children:[t("p",{children:["You can add an ",e("code",{children:"onBlur"})," handler to a ",e(c,{})," ","which will be called when the field is blurred (i.e. unselected). The field context will be passed as an argument."]}),e(p,{children:"Focus on one of the fields below and then select the other field. A message should be displayed each time a field loses focus."})]}),e(r,{Element:dl,code:sl,caption:"onFocus",expand:!0}),e(s,{links:["field:validateOnBlur","field:onFocus","field:onChange","field:onValid","field:onInvalid"]})]}),ml=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetFocusExample`,ul=()=>{const[o,n]=b.useState(!1),[d,m]=b.useState(!1);return t(F,{children:[t(i,{children:[e(l,{onLoad:n,name:"field1",label:"Field One",wide:!0}),e(l,{onLoad:m,name:"field2",label:"Field Two",wide:!0})]}),t("div",{className:"flex gap-4",children:[e("button",{onClick:()=>o==null?void 0:o.setFocus(),children:"Focus Field One"}),e("button",{onClick:()=>d==null?void 0:d.setFocus(),children:"Focus Field Two"})]})]})},hl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setFocus()"})}),t(u,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"setFocus()"})," function can be called to focus a field. You can use the ",e(K,{})," property to save a reference to a field context object."]}),t("p",{children:["Then call the ",e("code",{children:"setFocus()"})," method on the field object to focus it."]})]}),e(p,{children:"Click on one of the buttons to focus the corresponding field."})]}),e(r,{Element:ul,code:ml,caption:"setFocus()"}),t("p",{children:["You can also focus on fields by name using the ",e(h,{})," ",e(ue,{})," method."]}),e(s,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),pl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetValueExample`,fl=()=>{const[o,n]=b.useState(!1);return t(F,{children:[e(i,{children:e(l,{onLoad:n,name:"animal",label:"Animal",wide:!0})}),t("div",{className:"flex gap-4",children:[e("button",{onClick:()=>o.setValue("Antelope"),children:"Antelope"}),e("button",{onClick:()=>o.setValue("Badger"),children:"Badger"}),e("button",{onClick:()=>o.setValue("Camel"),children:"Camel"})]})]})},bl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default SetValueExample`,Fl=()=>{const[o,n]=b.useState(!1);return e(F,{children:t(i,{children:[e(l,{onLoad:n,name:"animal",label:"Animal",wide:!0}),t("div",{className:"flex gap-4",children:[e("button",{className:"green",onClick:d=>{d.preventDefault(),o.setValue("Antelope")},children:"Antelope"}),e("button",{className:"green",onClick:d=>o.setValue("Badger",d),children:"Badger"}),e("button",{type:"button",className:"green",onClick:()=>o.setValue("Camel"),children:"Camel"}),e("button",{onClick:()=>o.setValue("Danger!"),className:"red",children:"Danger!"})]})]})})},xl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setValue()"})}),t(u,{children:[t("p",{children:["The ",e("code",{children:"setValue()"})," method can be called on a field to set the value.  You can use ",e(K,{})," to capture a reference to the field context object"]}),e(p,{children:"Click on one of the buttons to set the field to have the corresponding value."})]}),e(r,{Element:fl,code:pl,caption:"setValue()"}),e("h2",{children:"Beware Buttons That Submit!"}),t(u,{children:[t("div",{children:[t("p",{children:["One thing to be aware of is that the default behaviour of a"," ",e("code",{children:"button"})," inside a ",e("code",{children:"form"})," is to submit the form. This is an innate property of HTML and not something that's specific to this library.  In the example above we put the buttons outside the"," ",e(h,{})," to avoid this behaviour, but it's not always possible to do that. There are a number of ways to work around it, shown in the example below."]}),t("p",{children:['The first "Antelope" button calls the'," ",e("code",{children:"preventDefault()"})," "," method on the event.  Given that this is a bit clumsy, the ",e("code",{children:"setValue()"})," method allows you to pass the event as the second argument and it will call"," ",e("code",{children:"preventDefault()"}),' for you, as shown on the second "Badger" button.']})]}),t("div",{children:[t("p",{children:['The third approach, shown on the "Camel" button, is to explicitly set the ',e("code",{children:"type"})," to ",e("code",{children:"button"})," to override the default button ",e("code",{children:"type"})," of ",e("code",{children:"submit"}),"."," ",`The fourth "Danger!" button doesn't do anything and will cause the form to submit, just in case you don't believe me that it's really a problem.`]}),e(p,{children:"Click on one of the buttons to set the input value.  Be warned that the fourth button will cause the form to submit."})]})]}),e(r,{Element:Fl,code:bl,caption:"setValue()"}),t("p",{children:["You can also set values for one or more fields by name using the"," ",e(h,{})," ",e(he,{})," method."]}),e(s,{links:["form:setValues","field:setFocus","field:reset"]})]}),Sl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ResetExample`,gl=()=>{const[o,n]=b.useState(!1),[d,m]=b.useState(!1);return t(F,{children:[t(i,{children:[e(l,{onLoad:n,name:"field1",label:"Field One"}),e(l,{onLoad:m,value:"Initial value",name:"field2",label:"Field Two"})]}),t("div",{children:[e("button",{className:"btn-blue",onClick:o.reset,children:"Reset Field One"}),e("button",{className:"btn-blue",onClick:d.reset,children:"Reset Field Two"})]})]})},El=()=>t("div",{children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"reset()"})}),t("p",{children:["If you want to programmatically reset a ",e(c,{})," then you first need to capture a reference to it.  You can do that using an ",e("code",{children:"onLoad"})," property to set a state variable."]}),t("p",{children:["Then call the ",e("code",{children:"reset()"})," method on the field object to reset it."]}),e(r,{Element:gl,code:Sl,caption:"reset()",children:e("p",{children:"Enter some text in either of the inputs below and then click on the corresponding button to reset it to the original value."})}),e(s,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),wl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnChangeExample`,yl=()=>{const[o,n]=b.useState("");return t(i,{children:[e(l,{name:"example",label:"Field with onChange",onChange:d=>n(d.value)}),"Current value: ",o]})},Tl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onChange"})}),t(u,{children:[t("p",{children:["You can add an ",e("code",{children:"onChange"})," handler to a ",e(c,{})," ","which will be called when the field value is changed.  The field context will be passed as an argument."]}),e(p,{children:'Try entering some text in the field below.  You should see the "Current value" display update to reflect the field content.'})]}),e(r,{Element:yl,code:wl,caption:"onChange",expand:!0}),e(s,{links:["field:validateOnChange","field:onBlur","field:onFocus","field:onValid","field:onInvalid"]})]}),vl=()=>{const[o,n]=b.useState();return t(i,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onValid:d=>n(`${d.name} is valid: ${d.value}`)}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:d=>n(`${d.name} is valid: ${d.value}`)}),o]})},Rl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnValidExample`,Cl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onValid"})}),t(u,{children:[t("p",{children:["You can add an ",e("code",{children:"onValid"})," handler to a ",e(c,{})," ","which will be called when the field is successfully validated. The field context will be passed as an argument."]}),t(p,{children:["Enter some text in one of the fields below and then select the other field.  The ",e("code",{children:"validateOnBlur"})," option on the ",e(h,{})," ","means that the first field will be validated when it loses focus and the ",e("code",{children:"onValid"})," handler will be called."]})]}),e(r,{Element:vl,code:Rl,caption:"onValid",expand:!0}),e(s,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onInvalid"]})]}),Nl=()=>{const[o,n]=b.useState(),d=m=>n(`${m.label} is invalid: ${m.message}`);return t(i,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onInvalid:d}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:d,requiredMessage:"You must enter a value"}),o]})},kl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnInvalidExample`,Ol=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onInvalid"})}),t(u,{children:[t("p",{children:["You can add an ",e("code",{children:"onInvalid"})," handler to a ",e(c,{})," ","which will be called when the field fails validation. The field context will be passed as an argument."]}),t(p,{children:[t("p",{children:["Click one of the fields below and then select the other field without entering any text. The ",e(pe,{})," option on the"," ",e(h,{})," "," means that the fields will be validated when they lose focus. They're both marked as ",e(S,{})," so they will fail validation (assuming you haven't entered anything) and the ",e("code",{children:"onInvalid"})," handler will be called."]}),t("p",{children:["Also note the use of ",e(fe,{})," to set a custom message for the second field."]})]})]}),e(r,{Element:Nl,code:kl,caption:"onInvalid",expand:!0}),e(s,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onValid"]})]}),ql=()=>{const[o,n]=b.useState();return t(i,{children:[e(l,{name:"foo",label:"Foo Field",onLoad:n,wide:!0}),t("div",{className:"grid-4 gap-2",children:[e("button",{type:"button",onClick:()=>o.reset(),children:"Reset"}),e("button",{type:"button",onClick:()=>o.setValue("Hello"),children:"Hello"}),e("button",{type:"button",onClick:()=>o.setValue("Goodbye"),children:"Goodbye"}),e("button",{type:"button",onClick:()=>o.setFocus(),children:"Focus"})]})]})},Al=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OnLoadExample`,Ll=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onLoad"})}),t(u,{children:[t("p",{children:["You can add an ",e("code",{children:"onInvalid"})," handler to a ",e(c,{})," ","which will be called when the field is initialised.  This is useful if you want to programmatically control the field."]}),e(p,{children:"Click on the buttons to programmatically call field methods. The first resets the field, the next two set the field value, and the last one focusses the field."})]}),e(r,{Element:ql,code:Al,caption:"onLoad"}),e(s,{links:["field:onBlur","field:onFocus","field:onChange","field:onValid","field:setFocus"]})]}),Dl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default PrepareValue`,Pl={upper:{label:"Converted to UPPER CASE",prepareValue:o=>o.toUpperCase()}},Vl=()=>e(i,{fields:Pl,children:e(l,{name:"upper"})}),jl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"prepareValue"})}),t(u,{children:[t("p",{children:["You can add a ",e("code",{className:"code",children:"prepareValue"})," function to a ",e(c,{})," to prepare the value before it's set."]}),e(p,{children:"Try entering some letters in the field below.  You should see that they get converted to upper case."})]}),e(r,{Element:Vl,code:Dl,caption:"onChange",expand:!0}),e(s,{links:["field:validate","field:validateOnBlur","field:validateOnChange"]})]}),Bl=()=>t(i,{children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(f,{})]}),Yl=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const Required = () =>
  <Form>
    <Field name="field1" label="Required Field" required/>
    <Submit/>
  </Form>

export default Required`,Il=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"required"})}),t(u,{align:"end",children:[t("p",{children:["You can add a ",e("code",{children:"required"})," property to a field to mark it as being required.  This automatically adds a validator to the field to ensure that a value is provided when the form is submitted."]}),e(p,{children:"Try submitting the form without entering anything in the field input."})]}),e(r,{Element:Bl,code:Yl,caption:"required",expand:!0}),e(s,{links:["field:showRequired","field:requiredLabel","field:requiredMessage","field:validateOnBlur","field:validateOnChange"]})]}),$l=()=>t(i,{children:[e(l,{name:"field1",label:"Required Field",required:!0,showRequired:!0,wide:!0}),e(l,{name:"field2",label:"Optional Field",wide:!0})]}),Ml=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ShowRequired`,Gl=()=>t(i,{showRequired:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0,wide:!0}),e(l,{name:"field2",label:"Optional Field",wide:!0})]}),Ul=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ShowRequiredForm`,Hl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showRequired"})}),t("p",{children:["If a ",e(c,{})," is marked as ",e(S,{})," then the"," ",e("code",{children:"showRequired"})," property can be added to have an additional label displayed indicating that it is required."]}),e(r,{Element:$l,code:Ml,caption:"showRequired on Field",expand:!0}),t("p",{children:["The ",e("code",{children:"showRequired"})," property can also be added to the"," ",e(h,{})," to have it apply to all ",e(S,{})," fields."]}),e(r,{Element:Gl,code:Ul,caption:"showRequired on Form",expand:!0}),e(s,{links:["field:required","field:requiredLabel","field:showOptional","field:optionalLabel"]})]}),Wl=`import { Form, Field } from '../../../../../lib/index.js'

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

export default RequiredLabel`,_l=()=>t(i,{showRequired:!0,requiredLabel:"Important!",children:[e(l,{name:"field1",label:"Required Field",required:!0,wide:!0}),e(l,{name:"field2",label:"Another Required Field",requiredLabel:"Very Important!",required:!0,wide:!0})]}),Kl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredLabel"})," property to change the label that is displayed for ",e(S,{})," fields that have the ",e(be,{})," option enabled.  You can set it on individual ",e(c,{})," components or on the parent ",e(h,{}),"."]}),e(r,{Element:_l,code:Wl,caption:"requiredLabel",expand:!0}),e(s,{links:["field:required","field:showRequired","field:showOptional","field:optionalLabel"]})]}),Jl=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default RequiredLabel`,zl=()=>t(i,{requiredMessage:"Nothing will come of nothing",children:[e(l,{name:"foo",label:"Foo",required:!0}),e(l,{name:"bar",label:"Bar",required:!0,requiredMessage:"You really MUST enter a value"}),e(f,{})]}),Ql=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredMessage"})}),t(u,{align:"end",children:[t("div",{children:[t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredMessage"})," property to change the error message that is generated for ",e(S,{})," fields that aren't completed."]}),t("p",{children:["You can set it on individual ",e(c,{})," components or on the parent"," ",e(h,{})," to act as the default for all fields."]})]}),t(p,{children:["Try submitting the form without entering any values.  You should see the form-wide ",e("code",{children:"requiredMessage"})," displayed for the first field, and the field-specific value for the second."]})]}),e(r,{Element:zl,code:Jl,caption:"requiredMessage",expand:!0}),e(s,{links:["field:required","field:showRequired","field:requiredLabel","field:validateOnChange","field:validateOnBlur"]})]}),Xl={alice:!0,bob:!0,charlie:!0},Zl={username:{label:"Username",help:"Choose a username (minimum length: 3)",validateOnChange:!0,minValidateLength:3,validate:(o,n,d,m)=>{o.length<3&&m({message:"Your username must be at least 3 characters"}),Xl[o.toLowerCase()]?m({message:"Sorry, that username is taken"}):d({message:"That username is available"})}}},eo=()=>t(i,{fields:Zl,children:[e(l,{name:"username"}),e(f,{})]}),to=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default MinValidateLengthExample`,lo=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"minValidateLength"})}),t(u,{children:[t("p",{children:["You can set the ",e(Fe,{})," property flag to enable validation any time the field value changes.  The"," ",e("code",{children:"minValidateLength"})," property can be set to only trigger validation when the input length exceeds a threshold."]}),t(p,{children:["Enter a username in the form below.  The usernames ",e("code",{children:"alice"}),",",e("code",{children:"bob"})," and ",e("code",{children:"charlie"})," will return a validation error saying that they're not available.  There's a minimum length for a username so we wait until at least three characters have been entered before checking to see if the username is available.  Note that the validation will also be triggered when the form is submitted, regardless of how many characters have been entered.  For that reason the validation function also rejects any username that is too short."]})]}),e(r,{Element:eo,code:to,caption:"minValidateLength"}),e(s,{links:["field:required","field:validate","field:validateOnBlur","field:validateOnChange"]})]}),oo=()=>t(i,{showOptional:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0,wide:!0}),e(l,{name:"field2",label:"Optional Field",wide:!0})]}),ro=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ShowOptional`,io=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showOptional"})}),t("p",{children:["If a field is ",e("b",{children:"NOT"})," marked as ",e(S,{})," then it is optional. If you set the ",e("code",{children:"showOptional"})," property then it will add an additional label to a field to indicate that it's optional.  You can set the property on individual ",e(c,{})," components or on the parent ",e(h,{})," to act as a default for all fields."]}),t("p",{children:["You can use the ",e(xe,{})," property to change the text of the label that is displayed."]}),e(r,{Element:oo,code:ro,caption:"showOptional",expand:!0}),e(s,{links:["field:required","field:optionalLabel","field:showRequired","field:requiredLabel"]})]}),ao=`import { Form, Field } from '../../../../../lib/index.js'

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

export default OptionalLabel`,no=()=>t(i,{showOptional:!0,optionalLabel:"Not required",children:[e(l,{name:"field1",label:"Optional Field",wide:!0}),e(l,{name:"field2",label:"Another Optional Field",optionalLabel:"Nice to have",wide:!0})]}),so=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"optionalLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"optionalLabel"})," property to change the label that is display for optional fields (i.e. those that aren't marked as ",e(S,{}),") that have the"," ",e(Se,{})," option set.  You can set it on individual"," ",e(c,{})," components or on the parent ",e(h,{})," to act as a default for all fields."]}),e(r,{Element:no,code:ao,caption:"optionalLabel",expand:!0}),e(s,{links:["field:required","field:showRequired","field:showOptional","field:requiredLabel"]})]}),co={username:{label:"Username",help:"Enter your username",validate:o=>R().trim().required("You must enter your username you numpty!").validate(o)},password:{label:"Password",type:"password",help:"Enter your password",validate:o=>R().trim().required("You must enter your password you muppet!").validate(o)}},mo=()=>t(i,{fields:co,children:[e(E,{names:"username password",wide:!0}),e(f,{})]}),uo=`import { Form, Fields, Submit } from '../../../../../lib/index.js'

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

export default ValidateExample`,ho={username:{label:"Username",help:"Enter your username",validate:async(o,n,d,m)=>{o.match(/badger/i)?d({value:`${o} is a great name`}):m({value:"Mr Badger",message:'Your username must contain the word "badger"'})}}},po=()=>t(i,{fields:ho,children:[e(l,{name:"username"}),e(f,{})]}),fo=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default ValidateExample`,bo=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),t("p",{children:["There are a number of different ways to validate field input. For simple cases where a value must be provided you can use the"," ",e(S,{})," property.  If you need to perform additional validation then you can do that using a ",e("code",{children:"validate"})," function."]}),e("h2",{children:e("code",{children:"validate"})}),t(u,{children:[t("div",{children:[t("p",{children:["You can use the ",e(S,{})," property to mark a field as being required, but it's a blunt instrument.  All it will do is check that a field has some value entered. For more robust validation you can use the ",e("code",{children:"validate"})," property to define an ",e("code",{children:"async"})," ","validation function."]}),t("p",{children:["In this example we're using"," ",e("a",{href:"https://www.npmjs.com/package/yup",children:"Yup"})," but you can use anything you like.  It should return the validated value on success or throw an error if the valid is invalid."]})]}),e(p,{children:"Try submitting the form without entering any values for either of the fields. You should see the custom validation errors."})]}),e(r,{Element:mo,code:uo,caption:"validate"}),t(u,{align:"end",children:[t("p",{children:[e("h3",{children:"NOTE: this may change"}),"The ",e("code",{children:"validate"})," function is passed four arguments.  The first is the field value for common cases where that's all you need to determine if the field is valid.  The second argument is the field context containing everything you need to know about the field state and callable actions to change it.  The third and fourth arguments are"," ",e("code",{children:"resolve"})," and ",e("code",{children:"reject"})," functions which can be called to validate or invalidate the field, respectively.  The"," ",e("code",{children:"resolve"})," function should be passed an object containing the ",e("code",{children:"value"}),", which may be modified by your function. The ",e("code",{children:"reject"})," function should be passed an object containing an error ",e("code",{children:"message"}),", and optionally a new ",e("code",{children:"value"})," ","for the field."]}),e(p,{children:'In this somewhat contrived example we require the user to enter a username containing the word "badger".'})]}),e(r,{Element:po,code:fo,caption:"validate"}),e(s,{links:["field:required","field:validateOnChange","field:validateOnBlur"]})]}),Fo=`import { Form, Field } from '../../../../../lib/index.js'

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

export default ValidateOnChangeExample`,xo={vowels:{label:"Vowels",help:"Enter between 3 and 5 vowels",validateOnChange:!0,minValidateLength:3,validate:o=>R().trim().matches(/^[^y]*$/i,"Sorry, but y is not allowed").matches(/^[aeiou]*$/i,"You should only type vowels").min(3,"You must enter at least three vowels").max(5,"You should not enter more than 5 vowels").validate(o)}},So=()=>e(i,{fields:xo,children:e(l,{name:"vowels"})}),go=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnChange"})}),t(u,{children:[t("p",{children:["You can set the ",e("code",{children:"validateOnChange"})," flag to enable validation any time the field value changes.  The ",e(ge,{})," property can be set to only trigger validation when the input length exceeds a threshold."]}),e(p,{children:"Enter some text in the field below.  Once you've entered three letters the validation will kick in.  You should see an error if you enter any letters that aren't vowels."})]}),e(r,{Element:So,code:Fo,caption:"validateOnChange"}),e(s,{links:["field:required","field:validate","field:validateOnBlur","field:minValidateLength"]})]}),Eo={username:{label:"Username",help:"Enter your username",validate:o=>R().trim().required("You must enter your username you numpty!").validate(o)},password:{label:"Password",type:"password",help:"Enter your password",validate:o=>R().trim().required("You must enter your password you muppet!").validate(o)}},wo=()=>t(i,{fields:Eo,validateOnBlur:!0,children:[e(E,{names:"username password"}),e(f,{})]}),yo=`import { Form, Fields, Submit } from '../../../../../lib/index.js'

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

export default ValidateExample`,To=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnBlur"})}),t(u,{children:[t("p",{children:["The ",e("code",{children:"validateOnBlur"})," property can be set to trigger validation whenever a field is blurred.  You can set it on individual"," ",e(c,{})," components or on the parent ",e(h,{})," to have it apply to all fields."]}),e(p,{children:"Try switching focus from one field to another without entering anything.  You should see the custom validation errors when each field is blurred."})]}),e(r,{Element:wo,code:yo,caption:"validate"}),e(s,{links:["field:required","field:validate","field:validateOnChange"]})]}),vo=`import { Form, Field } from '../../../../../lib/index.js'

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

export default Wide`,Ro=()=>t(i,{children:[e(l,{name:"regular",label:"Regular Field"}),e(l,{name:"wide",label:"Wide Field",wide:!0}),e(l,{name:"wide-textarea",type:"textarea",label:"Wide Text Area Field",wide:!0})]}),Co=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"wide"})}),t("p",{children:["The default behaviour is for fields to be fluid in width. You can add the ",e("code",{children:"wide"})," property to make it expand to the full width of the container."]}),e(r,{Element:Ro,code:vo,caption:"wide",expand:!0})]}),No=`import { Form } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CustomInput = () =>
  <Form>
    TODO
  </Form>

export default CustomInput`,ko=()=>e(i,{children:"TODO"}),Oo=()=>t("div",{children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Input"})}),t("p",{children:["You can define a custom ",e("code",{className:"code",children:"Input"})," component to render the input for a field."]}),e(r,{Element:ko,code:No,caption:"Input",expand:!0}),e(s,{links:["custom:Input"]})]}),qo=()=>t(j,{children:[e(a,{path:"",end:!0,element:e(wt,{})}),e(a,{path:"properties",element:e(yt,{})}),e(a,{path:"name",element:e(kt,{})}),e(a,{path:"label",element:e(Pt,{})}),e(a,{path:"type",element:e($t,{})}),e(a,{path:"placeholder",element:e(Ut,{})}),e(a,{path:"children",element:e(_t,{})}),e(a,{path:"help",element:e(zt,{})}),e(a,{path:"prefix",element:e(Zt,{})}),e(a,{path:"suffix",element:e(rl,{})}),e(a,{path:"wide",element:e(Co,{})}),e(a,{path:"required",element:e(Il,{})}),e(a,{path:"showRequired",element:e(Hl,{})}),e(a,{path:"requiredLabel",element:e(Kl,{})}),e(a,{path:"requiredMessage",element:e(Ql,{})}),e(a,{path:"showOptional",element:e(io,{})}),e(a,{path:"optionalLabel",element:e(so,{})}),e(a,{path:"prepareValue",element:e(jl,{})}),e(a,{path:"validate",element:e(bo,{})}),e(a,{path:"validateOnBlur",element:e(To,{})}),e(a,{path:"validateOnChange",element:e(go,{})}),e(a,{path:"minValidateLength",element:e(lo,{})}),e(a,{path:"onFocus",element:e(nl,{})}),e(a,{path:"onBlur",element:e(cl,{})}),e(a,{path:"onChange",element:e(Tl,{})}),e(a,{path:"onValid",element:e(Cl,{})}),e(a,{path:"onInvalid",element:e(Ol,{})}),e(a,{path:"onLoad",element:e(Ll,{})}),e(a,{path:"setFocus",element:e(hl,{})}),e(a,{path:"setValue",element:e(xl,{})}),e(a,{path:"Reset",element:e(El,{})}),e(a,{path:"Input",element:e(Oo,{})})]}),Ao={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},Lo=()=>t(i,{fields:Ao,children:[e(E,{names:["name","message"]}),e(E,{names:"badgers animal"})]}),Do=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,Po={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},Vo=()=>e(i,{fields:Po,children:e(E,{names:"name email",grid:2,wide:!0})}),jo=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,Bo={one:{label:"One"},two:{label:"Two"},three:{label:"Three"}},Yo=()=>e(i,{fields:Bo,children:e(E,{names:"one two three",grid:!0,wide:!0})}),Io=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,$o={forename:{label:"First Name",required:!0},surname:{label:"Surname",required:!0},company:{label:"Company",required:!0},job_title:{label:"Job Title",required:!0}},Mo=()=>e(i,{fields:$o,children:e(E,{names:"forename surname company job_title",grid:2,gap:12,wide:!0})}),Go=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,Uo={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},Ho=()=>e(i,{fields:Uo,children:e(E,{names:"name email",className:"border pad-4 bgc-95 bgd-5 bdr-2",wide:!0})}),Wo=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,_o={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},Ko=()=>e(i,{fields:_o,children:e(E,{names:"name message badgers animal",wide:!0})}),Jo=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,zo=()=>t("div",{className:"prose",children:[e("h1",{children:"Fields"}),t("p",{children:["The ",e("code",{children:"Fields"})," component can be used to render multiple fields."]}),e("p",{children:"This is a shortcut for convenience, but it depends on you having all your form fields defined in a separate schema so you can reference them only by name."}),t("p",{children:["The ",e("code",{className:"code",children:"names"})," property should be used to specify the list of field names either as an array of strings, or a single string containing a whitespace-delimited list of field names. The ",e("code",{className:"code",children:"Fields"})," component renders each of the fields, collected together in a single"," ",e("code",{className:"code",children:"div"})," element"]}),e(r,{Element:Lo,code:Do,caption:"Fields"}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be set to add a CSS class to the fields container."]}),e(r,{Element:Ho,code:Wo,caption:"Fields Class"}),e("h2",{children:e("code",{children:"grid"})}),t("p",{children:["The ",e("code",{children:"grid"})," property can be used to layout the fields in a grid.  Set the property to the number of columns you want.  The default gap between the fields will be 1rem (using the"," ",e("code",{children:"gap-h-4"})," utility class provided by"," ",e("a",{href:"https://abw.github.io/badger-css/utilities/grid",children:"Badger-CSS"}),")."]}),e(r,{Element:Vo,code:jo,caption:"Fields in a Grid"}),t("p",{children:["You can also specify ",e("code",{children:"grid"})," as the boolean value"," ",e("code",{children:"true"})," (which React will conveniently set for you if you include it as a valueless property) and it will automatically select the correct number of columns based on how many fields it is rendering."]}),e(r,{Element:Yo,code:Io,caption:"Automatic Grid Columns"}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set a custom horizontal gap between fields.  The value should be an integer number of margin units of 0.25rem."]}),e(r,{Element:Mo,code:Go,caption:"Fields With a Gap"}),e("h2",{children:"Additional Properties"}),t("p",{children:["Any additional properties that you pass to the ",e("code",{children:"Fields"})," component will be forwarded to each of the ",e(c,{})," components."]}),t("p",{children:["For example, if you want all your fields to expand to the full width of the container you can pass the ",e("code",{children:"wide"})," property and it will forward it to each of the ",e(c,{})," components."]}),e(r,{Element:Ko,code:Jo,caption:"Wide Fields"})]}),Qo=()=>e(i,{children:t(J,{legend:"Fieldset One",children:[e(l,{name:"one",label:"Field One"}),e(l,{name:"one",label:"Field Two"})]})}),Xo=`import { Form, Field, Fieldset } from '../../../../../lib/index.js'

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
`,Zo={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},er=()=>e(i,{fields:Zo,children:e(J,{legend:"Fieldset Two",fields:"name message"})}),tr=`import { Form, Fieldset } from '../../../../../lib/index.js'

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
`,lr=()=>t("div",{children:[e("h1",{children:"Fieldset"}),t("p",{children:["The ",e("code",{children:"Fieldset"})," component can be used to create a field set.  The ",e("code",{children:"legend"})," property should be used to set the legend."]}),e(r,{Element:Qo,code:Xo,caption:"Fieldset",expand:!0}),t("p",{children:["The ",e("code",{className:"code",children:"fields"})," property can be used as a shortcut to render a set of named fields using the"," ",e(Ee,{})," component."]}),e(r,{Element:er,code:tr,caption:"Fieldset fields",expand:!0})]}),or=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(f,{})]}),rr=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one"/>
    <Field name="two"   label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample`,ir=()=>t(i,{children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(f,{className:"btn-blue",text:"Save Changes"})]}),ar=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const SubmitProps = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit className="btn-blue" text="Save Changes"/>
  </Form>

export default SubmitProps`,nr=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnSubmit = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <Submit/>
  </Form>

export default OnSubmit`,dr=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(f,{})]}),sr=()=>t("div",{children:[e("h1",{children:"Submit"}),t("p",{children:["The ",e("code",{children:"Submit"})," component can be used to add a button which will submit the form.  See the"," ",e(g,{to:"/components/form/validation",text:"validation page"})," for information on how the form data is validated and the"," ",e(we,{})," component for details on how validation errors are displayed and can be customised."]}),e(r,{Element:or,code:rr,caption:"Submit",expand:!0,children:e("p",{children:"Try entering some text in the fields below then click on the Submit button."})}),e("h2",{children:"Properties"}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(r,{Element:ir,code:ar,caption:"Properties",expand:!0}),e("h2",{children:"onSubmit"}),t("p",{children:["You can use the ",e("code",{children:"onSubmit"})," form property to handle the submission."]}),e(r,{Element:dr,code:nr,caption:"onSubmit",expand:!0})]}),cr=`import { Form, Field, Reset } from '../../../../../lib/index.js'

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

export default ResetExample`,mr=()=>t(i,{values:{three:"The third field"},children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two with default value",default:"Badger"}),e(l,{name:"three",label:"Field three with pre-defined form value"}),e(B,{})]}),ur=()=>t(i,{children:[e(l,{name:"one",label:"Field one"}),e(B,{className:"btn-brown",text:"Reset the form"})]}),hr=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const Properties = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Reset className="btn-brown" text="Reset the form"/>
  </Form>

export default Properties`,pr=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const OnReset = () =>
  <Form onReset={() => alert('form has been reset')}>
    <Field name="field1" label="Field One"/>
    <Reset/>
  </Form>

export default OnReset`,fr=()=>t(i,{onReset:()=>alert("form has been reset"),children:[e(l,{name:"field1",label:"Field One"}),e(B,{})]}),br=()=>t("div",{children:[e("h1",{children:"Reset"}),t("p",{children:["The ",e("code",{children:"Reset"})," component can be used to add a reset button which will reset the form to its initial state.  Any"," ",e("code",{children:"values"})," defined on the ",e(h,{})," will be restored. Any fields that have a ",e("code",{children:"default"})," value will be reset to that value."]}),e(r,{Element:mr,code:cr,caption:"Reset",expand:!0,children:e("p",{children:"Try entering some text in the fields below then click on the Reset button.  You should see the fields reset to their original state."})}),e("h2",{children:"Properties"}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(r,{Element:ur,code:hr,caption:"Properties",expand:!0}),e("h2",{children:"onReset"}),t("p",{children:["You can use the ",e("code",{children:"onReset"})," property to register a function that should be called when the form is reset."]}),e(r,{Element:fr,code:pr,caption:"onReset",expand:!0})]}),Fr=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(z,{})]}),xr=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Cancel } from '@abw/react-formula'

const CancelExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Cancel/>
  </Form>

export default CancelExample`,Sr=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(z,{text:"Go Back",className:"btn-brown",onClick:()=>alert("Cancel button was clicked")})]}),gr=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

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

export default CancelExample`,Er=()=>t("div",{children:[e("h1",{children:"Cancel"}),t("p",{children:["The ",e("code",{children:"Cancel"})," component can be used to add a Cancel button. This doesn't do anything to the form but it's common to provide a button in a form to allow a user to cancel an edit or go back."]}),e(r,{Element:Fr,code:xr,caption:"Cancel",expand:!0,children:t("p",{children:["Don't be surprised that the Cancel button doesn't do anything in this example.  We need to add an ",e("code",{children:"onClick"})," handler to make it useful. See the next example."]})}),t("p",{children:["The ",e("code",{children:"text"})," property will set the text for the button. The ",e("code",{children:"className"})," property can be used to add a CSS class.  The ",e("code",{children:"onClick"})," property should be used to define a handler to do something when the button is clicked."]}),e(r,{Element:Sr,code:gr,caption:"Properties",expand:!0})]}),wr=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(O,{})]}),yr=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit/>
  </Form>

export default CancelSubmitExample`,Tr=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(O,{gap:8})]}),vr=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit gap={8}/>
  </Form>

export default CancelSubmitGap`,Rr=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(O,{space:!0})]}),Cr=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One" wide/>
    <CancelSubmit space/>
  </Form>

export default CancelSubmitSpace`,Nr=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(O,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),kr=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

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

export default CancelSubmitClassName`,Or=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(O,{submit:{text:"Continue",className:"green"},cancel:{text:"Go Back",className:"outline",onClick:()=>alert("You went back")},space:!0})]}),qr=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

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

export default CancelSubmitExample`,Ar=()=>t("div",{className:"prose",children:[e("h1",{children:"CancelSubmit"}),t("p",{children:["The ",e("code",{children:"CancelSubmit"})," component can be used to add both"," ",e(A,{})," and ",e(T,{})," controls."]}),e(r,{Element:wr,code:yr,caption:"CancelSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(r,{Element:Tr,code:vr,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(r,{Element:Rr,code:Cr,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(r,{Element:Nr,code:kr,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(A,{})," component using the ",e("code",{children:"cancel"})," property, and for the ",e(T,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(r,{Element:Or,code:qr,caption:"Properties",expand:!0})]}),Lr=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(q,{})]}),Dr=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit/>
  </Form>

export default CancelResetSubmitExample`,Pr=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(q,{gap:8})]}),Vr=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit gap={8}/>
  </Form>

export default CancelResetSubmitGap`,jr=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(q,{space:!0})]}),Br=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One" wide/>
    <CancelResetSubmit space/>
  </Form>

export default CancelResetSubmitSpace`,Yr=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(q,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),Ir=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

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

export default CancelResetSubmitClassName`,$r=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(q,{submit:{text:"Continue",className:"green"},reset:{text:"Restart",className:"brown"},cancel:{text:"Go Back",className:"outline",onClick:()=>alert("You went back")},space:!0})]}),Mr=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

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

export default CancelResetSubmitExample`,Gr=()=>t("div",{children:[e("h1",{children:"CancelResetSubmit"}),t("p",{children:["The ",e("code",{children:"CancelResetSubmit"})," component can be used to add all three ",e(A,{}),", ",e(L,{})," and ",e(T,{})," controls in one fell swoop."]}),e(r,{Element:Lr,code:Dr,caption:"CancelResetSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(r,{Element:Pr,code:Vr,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(r,{Element:jr,code:Br,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(r,{Element:Yr,code:Ir,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"cancel"}),", ",e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(A,{})," component using the ",e("code",{children:"cancel"})," property, for the ",e(L,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(T,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(r,{Element:$r,code:Mr,caption:"Properties",expand:!0})]}),Ur=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(w,{})]}),Hr=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit/>
  </Form>

export default ResetSubmitExample`,Wr=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(w,{gap:8})]}),_r=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit gap={8}/>
  </Form>

export default ResetSubmitGap`,Kr=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(w,{space:!0})]}),Jr=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One" wide/>
    <ResetSubmit space/>
  </Form>

export default ResetSubmitSpace`,zr=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(w,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),Qr=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

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

export default ResetSubmitClassName`,Xr=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",wide:!0}),e(w,{reset:{text:"Reset the Form",className:"outline"},submit:{text:"Submit the Form",className:"blue"},space:!0})]}),Zr=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

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

export default ResetSubmitExample`,ei=()=>t("div",{className:"prose",children:[e("h1",{children:"ResetSubmit"}),t("p",{children:["The ",e("code",{children:"ResetSubmit"})," component can be used to add both"," ",e(L,{})," and ",e(T,{})," controls."]}),e(r,{Element:Ur,code:Hr,caption:"ResetSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(r,{Element:Wr,code:_r,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(r,{Element:Kr,code:Jr,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(r,{Element:zr,code:Qr,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(L,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(T,{})," ","component using the ",e("code",{children:"submit"})," property."]}),e(r,{Element:Xr,code:Zr,caption:"Properties",expand:!0})]}),ti=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",value:"Hello World!"}),e(ye,{children:e(w,{})})]}),li=`import { Form, Field, Changed, ResetSubmit } from '../../../../lib/index.js'

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

export default ChangedExample`,oi=()=>t("div",{children:[e("h1",{children:"Changed"}),t("p",{children:["The ",e("code",{children:"Changed"})," component will only render its child components when the form state has changed."]}),e("p",{children:'A typical example is shown below.  The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field.'}),e(r,{Element:ti,code:li,caption:"Changed",expand:!0,children:t("p",{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})})]}),ri=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(f,{})]}),ii=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default RequiredExample`,ai=()=>t(i,{showRequired:!0,errorsInHeader:!1,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(Te,{}),e(f,{})]}),ni=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

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

export default ErrorsExample`,di=()=>e(i,{children:e(si,{})}),si=()=>{const{setInvalidState:o}=C(),n=(y,x)=>{y.preventDefault(),o({error:x})};return t(F,{children:[e("button",{onClick:y=>n(y,"An error string"),children:"Error String"}),e("button",{onClick:y=>n(y,{message:"An error object"}),children:"Error Object"}),e("button",{onClick:y=>n(y,{label:"Example",message:"An error object"}),children:"Labelled Error"})]})},ci=`import { Form, useForm } from '../../../../../lib/index.js'

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

export default Error`,mi=()=>e(i,{children:e(ui,{})}),ui=()=>{const{setInvalidState:o}=C(),n=(x,X)=>{x.preventDefault(),o({errors:X})};return t(F,{children:[e("button",{onClick:x=>n(x,["A single error in errors"]),children:"Error String"}),e("button",{onClick:x=>n(x,["An error string","Another error string"]),children:"Error Strings"}),e("button",{onClick:x=>n(x,[{message:"An error object"},{message:"Another error object"}]),children:"Error Objects"}),e("button",{onClick:x=>n(x,[{label:"Example1",message:"An error object"},{label:"Example2",message:"Another error object"}]),children:"Labelled Errors"})]})},hi=`import { Form, useForm } from '../../../../../lib/index.js'

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

export default Errors`,pi=()=>t("div",{children:[e("h1",{children:"Errors"}),e("p",{children:"By default, validation errors will be displayed in the form header."}),e(r,{Element:ri,code:ii,caption:"Required Fields",expand:!0,children:e("p",{children:"Try submitting the form below without entering anything for either of the first two fields."})}),e("h2",{children:"errorsInHeader"}),t("p",{children:["If you don't want errors displayed in the header you can set the"," ",e("code",{children:"errorsInHeader"})," form property to ",e("code",{children:"false"}),".  You can use the ",e("code",{children:"Errors"})," component to display them somewhere else inside the form."]}),e(r,{Element:ai,code:ni,caption:"Errors",expand:!0}),e("h2",{children:"error"}),t("p",{children:["The ",e(h,{})," context can include a single ",e("code",{children:"error"})," or an array of ",e("code",{children:"errors"}),`.  The first case is typically used when there's an error that doesn't relate to a specific field, e.g. "Invalid username or password".  The latter case is used when there are multiple errors, e.g. for different fields.`]}),t("p",{children:["Just to complicate matters, both ",e("code",{children:"error"})," and the elements in ",e("code",{children:"errors"})," can be either strings or objects containing a"," ",e("code",{children:"message"})," and other information about what field the error message relates to, including the field ",e("code",{children:"name"})," and"," ",e("code",{children:"label"}),"."]}),t("p",{children:["The ",e("code",{children:"Errors"})," component handles all these cases.  There are also some additional properties that you can set on the ",e(h,{})," to configure what gets displayed.  The ",e("code",{children:"errorsTitle"}),' can be defined as a function which takes the number of errors and returns an appropriate title.  The default function returns "Form Submission Error" if there is one error or "Form Submission Errors" if there are more than one.  The ',e("code",{children:"errorsPrompt"})," can also be defined to prompt the user to fix any ",e("code",{children:"errors"}),".  This also takes the number of ",e("code",{children:"errors"}),'.  The default function returns "Please correct this problem and re-submit:" or "Please correct these problems and re-submit:", depending on the number of errors.']}),t("p",{children:["This example includes some buttons that set the ",e("code",{children:"error"})," ","in the ",e(h,{})," to demonstrate the different combinations."]}),e(r,{Element:di,code:ci,caption:"error"}),e("h2",{children:"errors"}),t("p",{children:["This example does a similar thing but sets multiple ",e("code",{children:"errors"}),"."]}),e(r,{Element:mi,code:hi,caption:"error"}),t("p",{children:["You can always implement your own component for displaying errors if you don't like the way this works.  Just be warned that there are the various different possibilities that need to be accounted for. You can use the ",e("code",{children:"useForm"})," function to get access to the form context which contains the ",e("code",{children:"error"})," and/or ",e("code",{children:"errors"}),"."]}),t("p",{children:["See the implementations of the"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Errors.jsx",children:"Errors"})," ","and"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Error.jsx",children:"Error"})," ","modules for a starting point."]})]}),fi=`import { Form, Field, ResetSubmit, Debug } from '../../../../../lib/index.js'

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

export default DebugForm`,bi=()=>t(i,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",wide:!0,required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",wide:!0,required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",wide:!0,required:!0}),e(w,{}),e(N,{})]}),Fi=()=>t(i,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",wide:!0,required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",wide:!0,required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",wide:!0,required:!0}),e(w,{}),e(N,{values:!1,fields:!0,status:!0})]}),xi=`import { Form, Field, Debug, ResetSubmit } from '../../../../../lib/index.js'

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

export default DebugStatus`,Si=`import { Form, Field, ResetSubmit, Debug } from '../../../../../lib/index.js'

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

export default DebugAll`,gi=()=>t(i,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",wide:!0,required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",wide:!0,required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",wide:!0,required:!0}),e(w,{}),e(N,{all:!0})]}),Ei=()=>t("div",{className:"prose",children:[e("h1",{children:"Debug"}),t(u,{align:"end",children:[t("p",{children:["The ",e("code",{children:"Debug"})," component can be used in development to debug your form.  By default it displays only the form values."]}),e("div",{className:"info alert border",children:"Try updating the form values and see how the debugging data changes."})]}),e(r,{Element:bi,code:fi,caption:"Debug"}),t("h2",{children:[e("code",{children:"values"})," and ",e("code",{children:"status"})]}),t("p",{children:["The ",e("code",{children:"status"})," option can be set to view the form status. The ",e("code",{children:"values"})," option defaults to ",e("code",{children:"true"})," but you can set it to ",e("code",{children:"false"})," if you don't want to view the current form values."]}),e(r,{Element:Fi,code:xi,caption:"Status and Fields"}),e("h2",{children:e("code",{children:"all"})}),t("p",{children:["The ",e("code",{children:"all"})," option is a shortcut to show all form data."]}),e(r,{Element:gi,code:Si,caption:"All Data",expand:!0})]}),wi=()=>e(i,{children:t(l,{name:"field1",label:"Field One",help:"A help message",children:[o=>`Something before ${o.label}`,e(k,{}),o=>`Something after ${o.label}`]})}),yi=`import { Form, Field, Layout } from '../../../../lib/index.js'

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

export default LayoutExample`,Ti=()=>e(i,{children:e(l,{name:"field1",label:"Field One",help:"A help message",children:t(k,{children:[e(Y,{}),"Hello...",e(I,{}),"...World!",e(Q,{})]})})}),vi=`import { Form, Field, Layout, Label, Text, Message } from '../../../../lib/index.js'

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

export default LayoutExample`,Ri=()=>t("div",{children:[e("h1",{children:"Layout"}),t("p",{children:["The ",e("code",{children:"Layout"})," component provides the default content for a"," ",e(c,{}),".  It renders a ",e("code",{children:"div"})," with the ",e("code",{children:"field"})," ","CSS class and any other classes relevant to the state of the field (e.g. ",e("code",{children:"focus"}),", ",e("code",{children:"valid"})," and/or ",e("code",{children:"invalid"}),")."]}),t("p",{children:["If you're defining your own field content and want to include all the usual elements then you can manually include it in a ",e(c,{}),"."]}),e(r,{Element:wi,code:yi,caption:"Layout",expand:!0}),t("p",{children:["The ",e("code",{children:"Layout"})," component renders a ",e(ve,{}),", one of the relevant ",e(g,{to:"/inputs",text:"input type components"})," based on the ",e(Re,{})," of the field, and the ",e(Ce,{})," component."]}),t("p",{children:["You can manually include these inside a ",e(c,{})," and intersperse them with your own content."]}),e(r,{Element:Ti,code:vi,caption:"Layout Content",expand:!0})]}),Ci=()=>e(i,{children:e(l,{name:"field1",label:"Field One",children:t("div",{className:"field",children:[e(Y,{}),e(I,{})]})})}),Ni=`import { Form, Field, Text, Label } from '../../../../lib/index.js'

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

export default LabelExample`,ki=()=>t("div",{children:[e("h1",{children:"Label"}),t("p",{children:["The ",e("code",{children:"Label"})," component can be used to add a label to a"," ",e(c,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),e(r,{Element:Ci,code:Ni,caption:"Label",expand:!0})]}),Oi=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",help:"Additional help message",validMessage:"This is fine!",requiredMessage:"You must enter a value",required:!0,children:t(k,{children:[e(Y,{}),e(I,{}),e(Q,{})]})}),e(f,{})]}),qi=`import { Form, Field, Layout, Label, Text, Message, Submit } from '../../../../lib/index.js'

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

export default MessageExample`,Ai=()=>t("div",{children:[e("h1",{children:"Message"}),t("p",{children:["The ",e("code",{children:"Message"})," component is used to add a message underneath a ",e(c,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),t("p",{children:["If you have defined ",e("code",{children:"help"})," for your field then it will be displayed here.  If the field fails to validate then the validation error message will be displayed.  In this example we're setting an explicit ",e("code",{children:"requiredMessage"})," to override the default message. We're also setting a ",e("code",{children:"validMessage"})," to provide a custom message if the field is valid."]}),e(r,{Element:Oi,code:qi,caption:"Message",expand:!0})]}),Li=()=>e(i,{children:t(l,{name:"hello",label:"Enter a greeting",children:[e(k,{}),e("div",{className:"info alert",children:e(ke,{children:o=>`You have entered: ${o.value}`})})]})}),Di=`import { Form, Field, Layout, UseField } from '../../../../lib/index.js'

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

export default UseFieldExample`,Pi=()=>t("div",{children:[e("h1",{children:"UseField"}),t("p",{children:["The immediate ",e(Ne,{})," of a ",e(c,{})," component can be functions that will receive the field context as the first argument."]}),t("p",{children:["However, this only works for the immediate children of the ",e(c,{}),". If you want to include a function that is nested inside another element (e.g. inside a ",e("code",{children:"div"})," as shown in this example) then you can use the ",e("code",{children:"UseForm"})," component to provide it."]}),t("p",{children:["Don't forget that defining any children of a ",e(c,{})," component will override the default ",e(P,{})," component, so you'll need to add it manually or define your own layout for the field."]}),e(r,{Element:Li,code:Di,caption:"UseField",expand:!0})]}),Bi=()=>t(j,{children:[e(a,{path:"",end:!0,element:e(Oe,{})}),e(a,{path:"Form/*",element:e(St,{})}),e(a,{path:"Field/*",element:e(qo,{})}),e(a,{path:"Fields",element:e(zo,{})}),e(a,{path:"Fieldset",element:e(lr,{})}),e(a,{path:"Submit",element:e(sr,{})}),e(a,{path:"Reset",element:e(br,{})}),e(a,{path:"Cancel",element:e(Er,{})}),e(a,{path:"CancelSubmit",element:e(Ar,{})}),e(a,{path:"ResetSubmit",element:e(ei,{})}),e(a,{path:"CancelResetSubmit",element:e(Gr,{})}),e(a,{path:"Changed",element:e(oi,{})}),e(a,{path:"Errors",element:e(pi,{})}),e(a,{path:"Debug",element:e(Ei,{})}),e(a,{path:"Layout",element:e(Ri,{})}),e(a,{path:"Label",element:e(ki,{})}),e(a,{path:"Message",element:e(Ai,{})}),e(a,{path:"UseField",element:e(Pi,{})})]});export{Bi as default};
