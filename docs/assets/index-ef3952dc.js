import{a as e,a0 as pe,j as t,T as le,a1 as fe,a2 as C,F as i,c as l,S as u,e as p,N as be,E as o,a3 as Fe,a4 as ge,a5 as xe,n as w,V as Se,p as re,a6 as Ee,k as G,l as W,a7 as ve,M as oe,B as ie,a8 as we,a9 as ae,A as ne,aa as de,r as f,s as S,ab as N,ac as se,ad as P,d as F,ae as q,D as x,af as R,ag as ye,_ as H,$ as n,ah as Te,L as V,X as j,i as L,J as ce,R as y,Y as J,ai as Re,C as Ce,x as Ne,y as ke,aj as Oe,m as T,ak as Pe,al as qe,Q as M,U as Ae,am as Le,an as z,W as me,ao as _,G as E,g as X,ap as je,Z as De,aq as Ve,w as U,q as Z,t as Ie,ar as Be,as as he,at as I,au as Y,f as k,av as B,aw as $,ax as Ye,K}from"./index-09f7c60a.js";import{a as m,S as c,c as D}from"./index.esm-d429871e.js";const $e=({children:r})=>e(pe,{children:r}),Me=()=>t("div",{children:[e("h1",{children:"Components"}),e("p",{className:"intro",children:"This section of the documentation provides detailed information about each of the components."}),e(le,{menu:fe})]}),Ue=()=>t("div",{children:[e("h1",{children:"Form"}),t("p",{children:["The ",e("code",{children:"Form"})," component is used to render a form. Inside the form you will typically have one or more"," ",e(C,{to:"/field",children:e("code",{children:"Field"})})," components to render the fields and a ",e(C,{to:"/form/submit",children:e("code",{children:"Submit"})})," ","component to add a submit button."]}),t("ul",{className:"menu",children:[e("li",{children:e(C,{to:"./properties",text:"Form properties"})}),t("li",{children:[e(C,{to:"./reset",children:e("code",{children:"Reset"})})," component to reset the form"]}),t("li",{children:[e(C,{to:"./submit",children:e("code",{children:"Submit"})})," component to submit the form"]}),t("li",{children:[t(C,{to:"./controls",children:["Controls combining ",e("code",{children:"Submit"})]})," component to submit the form"]})]})]}),Ge=()=>t(i,{fields:{name:{label:"Your name",required:!0},email:{label:"Your email address",required:!0}},children:[e(l,{name:"name"}),e(l,{name:"email"}),e(u,{})]}),We=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default FieldsExample`,He=()=>t(i,{children:[e(l,{name:"name",label:"Your name",required:!0}),e(l,{name:"email",label:"Your email address",required:!0}),e(u,{})]}),ze=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const FieldsExample = () =>
  <Form>
    <Field name="name" label="Your name" required/>
    <Field name="email" label="Your email address" required/>
    <Submit/>
  </Form>

export default FieldsExample`,_e=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"fields"})}),t("p",{children:["The ",e("code",{children:"fields"})," property allows you to define properties for form fields externally.  The ",e(p,{})," ",e(be,{})," property is used to associate a field to its definition."]}),e(o,{Element:Ge,code:We,caption:"fields"}),t("p",{children:["This is the same as defining the properties on the ",e(p,{})," components."]}),e(o,{Element:He,code:ze,caption:"fields"}),t("p",{children:["The ",e("code",{children:"fields"})," definition can contain any number of fields, including those that aren't used by any particular form.  Only the fields that are referenced by a ",e(p,{})," component will be considered part of the form."]}),e("p",{children:"Although it requires a little more work to define fields externally, there are a number of benefits.  The first is that you're separating the field definition from the presentational markup.  When a form gets more complex it's usually easier to have them separated, particularly if you have more complicated validation functions attached to the fields."}),t("p",{children:["Another benefit is that you can share field definitions across multiple forms.  For example, you might want to define a single set of field definitions for all forms relating to user authentication: login, registration, password reset, and so on.  The ",e("code",{children:"email"})," ","field will be the same for each, so it makes sense to define it in one place."]})]}),Ke=()=>t(i,{values:{name:"Bobby Badger",email:"bobby@badgerpower.com"},children:[e(l,{name:"name",label:"Name"}),e(l,{name:"email",label:"Email Address"}),e(u,{})]}),Je=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default ValuesExample`,h=({links:r})=>t("div",{className:"see-also",children:[e("h2",{children:"See Also"}),e("ul",{className:"menu",children:r.map(a=>e(Xe,{to:a},a))})]}),Xe=({to:r})=>{const a=Fe[r]||ge(`Invalid SeeAlso link: ${r}`),{about:d}=a;return t("li",{children:[e(xe,{to:r}),!!d&&e("span",{className:"about",children:d})]})},Ze=()=>t("div",{className:"prose",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"values"})}),t("p",{children:["The ",e("code",{children:"values"})," property can be used to pre-define values for fields in the form.  This is typically used when editing existing data records."]}),e(o,{Element:Ke,code:Je,caption:"fields",expand:!0}),e(h,{links:["form:hidden"]})]}),Qe=()=>t(i,{values:{name:"Bobby Badger",email:"bobby@badgerpower.com"},hidden:{user_id:12345},children:[e(l,{name:"name",label:"Name"}),e(l,{name:"email",label:"Email Address"}),e(u,{})]}),et=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default HiddenExample`,O=r=>e(m,{title:"Try it out",...r}),tt=()=>t("div",{className:"prose",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"hidden"})}),t(c,{align:"end",children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"hidden"})," property can be used to define hidden values for the form.  This is typically used to include identifiers when editing existing data records."]}),t("p",{children:["Any ",e("code",{children:"hidden"})," fields and their values will be included in the submitted data."]})]}),e(O,{children:"Submit the form below.  You should see an alert showing that the two visible fields and the hidden data were all submitted."})]}),e(o,{Element:Qe,code:et,caption:"hidden",expand:!0}),e(h,{links:["form:values"]})]}),lt=r=>r.password1!==r.password2?Promise.reject({error:"The two passwords you entered don't match",errors:[{name:"password1",message:"This password..."},{name:"password2",message:"...doesn't match this one"}]}):(r.checkedMessage="Passwords were checked!",Promise.resolve(r)),rt=()=>t(i,{validate:lt,children:[e(w,{fieldErrors:!1}),e(l,{name:"password1",type:"password",label:"New Password",required:!0}),e(l,{name:"password2",type:"password",label:"Confirm Password",required:!0}),e(u,{})]}),ot=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const checkPasswordsMatch = values => {
  if (values.password1 !== values.password2) {
    return Promise.reject({
      error: "The two passwords you entered don't match",
      errors: [
        {
          name: 'password1',
          message: 'This password...'
        },
        {
          name: 'password2',
          message: "...doesn't match this one"
        }
      ]
    })
  }
  else {
    values.checkedMessage = 'Passwords were checked!'
    return Promise.resolve(values)
  }
}

const PasswordsExample = () =>
  <Form validate={checkPasswordsMatch}>
    <Errors fieldErrors={false}/>
    <Field
      name="password1"
      type="password"
      label="New Password"
      required
    />
    <Field
      name="password2"
      type="password"
      label="Confirm Password"
      required
    />
    <Submit/>
  </Form>

export default PasswordsExample`,it=(r,a)=>{const d=r.password1.trim(),s=r.password2.trim();return d===s?Promise.resolve({password:d}):(a.reset(),Promise.reject({error:"The two passwords you entered don't match"}))},at=()=>t(i,{validate:it,debug:!0,children:[e(w,{fieldErrors:!1}),e(l,{name:"password1",type:"password",label:"New Password",required:!0}),e(l,{name:"password2",type:"password",label:"Confirm Password",required:!0}),e(u,{})]}),nt=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const checkPasswordsMatch = (values, form) => {
  const password1 = values.password1.trim()
  const password2 = values.password2.trim()

  if (password1 === password2) {
    // resolve but only return a single password
    return Promise.resolve({ password: password1 })
  }
  else {
    // reset the form
    form.reset()
    // reject!
    return Promise.reject({
      error: "The two passwords you entered don't match",
    })
  }
}

const PasswordsExample = () =>
  <Form validate={checkPasswordsMatch} debug>
    <Errors fieldErrors={false}/>
    <Field
      name="password1"
      type="password"
      label="New Password"
      required
    />
    <Field
      name="password2"
      type="password"
      label="Confirm Password"
      required
    />
    <Submit/>
  </Form>

export default PasswordsExample`,dt=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"validate"})}),t("p",{children:["The ",e("code",{children:"validate"})," property can be used to provide a validation function for all the form data.  You can also define ",e(Se,{})," ","function on individual fields.  The form validation will be run after all the fields have validated successfully.  If any individual fields fail validation then the form validation is not run."]}),e("h2",{children:"Simple Example"}),t(c,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"validate"})," function is passed the form values as the first argument."]}),t("p",{children:["If the form validation fails then the function should return a rejected promise.  The rejected value should be an object containing either an ",e("code",{children:"error"})," message, used to indicate a generic error and/or an array of ",e("code",{children:"errors"})," to indicate errors in particular fields."]}),e("p",{children:"If the validation passes then the function should return a resolved promise with the form values. The form values can be modified or augmented by the function."})]}),t("div",{children:[t("p",{children:["You should include the ",e(re,{})," component somewhere in your form to report any validation errors.  In this example we're setting the ",e("code",{children:"fieldErrors"})," property to ",e("code",{children:"false"})," ","so that the component only displays the generic ",e("code",{children:"error"}),". The separate field ",e("code",{children:"errors"})," are already being displayed beneath each field input."]}),e(O,{children:"Try entering two different passwords in the form below then click on the Submit button."})]})]}),e(o,{Element:rt,code:ot,caption:"Form Validation"}),e("h2",{children:"More Advanced Example"}),t(c,{align:"end",children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"validate"})," function is passed the form context as the second argument.  In this example we call the ",e(Ee,{})," ","method to reset the form if the passwords don't match."]}),t("p",{children:["Also note that in this example we're trimming any whitespace from the passwords and, if they match, we return a single",e("code",{children:"password"})," value in the submission values."]})]}),e(O,{children:"Try entering two passwords in the fields below then click on the submit button.  Additional leading and trailing whitespace on the passwords is removed."})]}),e(o,{Element:at,code:nt,caption:"Form Validation"}),e(h,{links:["field:validate"]})]}),st=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Validation"}),e("h2",{children:e("code",{children:"validateOnBlur"})}),t("p",{children:["Fields are usually only validated when the form is submitted. You can set the ",e(G,{})," property to ",e("code",{children:"true"})," ","on individual fields, or on the form to set it as the default for all fields."]}),e("p",{children:"When enabled, fields will be validated whenever the input loses focus."})]}),ct=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Validation"}),e("h2",{children:e("code",{children:"validateOnChange"})}),t("p",{children:["Fields are usually only validated when the form is submitted. You can set the ",e(W,{})," property to ",e("code",{children:"true"})," "," on individual fields, or on the form to set it as the default for all fields."]}),e("p",{children:"When enabled, fields will be validated whenever the input changes."})]}),mt=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Validation"}),e("h2",{children:e("code",{children:"validateOnInvalid"})}),t("p",{children:["This option is set ",e("code",{children:"true"})," by default. You can set the ",e(ve,{})," property to ",e("code",{children:"false"})," on individual fields, or on the form to set it as the default for all fields."]}),e("p",{children:"If a field fails validation then this option switches it to validate whenever the input changes."})]}),ht=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Validation"}),e("h2",{children:e("code",{children:"minValidateLength"})}),t("p",{children:["This option can be set to provide a default value for the"," ",e(oe,{})," option for all fields. Individual fields can set their own values to override it."]})]}),ut=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Validation"}),e("h2",{children:e("code",{children:"showRequired"})}),t("p",{children:["This option can be set ",e("code",{children:"true"})," to enable the"," ",e(ie,{})," option as the default for all fields. Individual fields can set it ",e("code",{children:"false"})," to override the default."]}),e("p",{children:'When enabled, required fields will display a "Required" tag in the label.'})]}),pt=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Validation"}),e("h2",{children:e("code",{children:"requiredLabel"})}),t("p",{children:["This option can be set to provide a default value for the"," ",e(we,{})," option for all fields. Individual fields can set their own values to override it."]})]}),ft=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Validation"}),e("h2",{children:e("code",{children:"requiredMessage"})}),t("p",{children:["This option can be set to provide a default value for the"," ",e(ae,{})," option for all fields. Individual fields can set their own values to override it."]})]}),bt=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Validation"}),e("h2",{children:e("code",{children:"showOptional"})}),t("p",{children:["This option can be set ",e("code",{children:"true"})," to enable the"," ",e(ne,{})," option as the default for all fields. Individual fields can set it ",e("code",{children:"false"})," to override the default."]}),e("p",{children:'When enabled, optional fields will be display an "Optional" tag in the label.'})]}),Ft=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Validation"}),e("h2",{children:e("code",{children:"optionalLabel"})}),t("p",{children:["This option can be set to provide a default value for the"," ",e(de,{})," option for all fields. Individual fields can set their own values to override it."]})]}),gt=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Validation"}),e("h2",{children:e("code",{children:"resetOnSuccess"})}),t("p",{children:["This property defaults to ",e("code",{children:"true"})," and will cause the form to be reset after successful validation and submission."]}),t("p",{children:["You can explicitly set it to ",e("code",{children:"false"})," if you need to."]})]}),xt=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Validation"}),e("h2",{children:e("code",{children:"focusInvalidField"})}),t("p",{children:["This property defaults to ",e("code",{children:"true"}),".  In this case the first field that fails validation will be automatically focussed."]}),t("p",{children:["You can explicitly set it to ",e("code",{children:"false"})," if you need to."]})]}),St=()=>{const[r,a]=f.useState(),d=s=>r==null?void 0:r.setValues({animal:s});return t(S,{children:[e(i,{onLoad:a,children:e(l,{name:"animal",label:"Animal"})}),t("div",{className:"grid-2 gap-4",children:[e("button",{onClick:()=>d("Badger"),children:"Badger"}),e("button",{onClick:()=>d("Ferret"),children:"Ferret"})]})]})},Et=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnLoadExample = () => {
  const [form, setForm] = useState()
  const setAnimal = animal =>
    form?.setValues({ animal })

  return (
    <>
      <Form onLoad={setForm}>
        <Field
          name="animal"
          label="Animal"
        />
      </Form>

      <div className="grid-2 gap-4">
        <button onClick={() => setAnimal('Badger')}>
          Badger
        </button>
        <button onClick={() => setAnimal('Ferret')}>
          Ferret
        </button>
      </div>
    </>
  )
}

export default OnLoadExample`,vt=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onLoad"})}),t("p",{children:["The ",e("code",{children:"onLoad"})," property can be used to define a function that will be called when the form is loaded.  This allows you to capture a reference to the form context object for manipulating the form programmatically."]}),e(o,{Element:St,code:Et,caption:"onLoad"})]}),wt=()=>{const[r,a]=f.useState();return t(i,{onReset:()=>a("The form was reset"),children:[e(l,{name:"foo",label:"Foo Field"}),e(N,{}),r&&e("div",{className:"info alert mar-t-2",children:r})]})},yt=`import { Form, Field, Reset } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnResetExample = () => {
  const [msg, setMsg] = useState()

  return (
    <Form onReset={() => setMsg(\`The form was reset\`)}>
      <Field name="foo" label="Foo Field"/>
      <Reset/>
      { msg &&
        <div className="info alert mar-t-2">
          {msg}
        </div>
      }
    </Form>
  )
}

export default OnResetExample`,Tt=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onReset"})}),t("p",{children:["The ",e("code",{children:"onReset"})," property can be used to define a function that will be called when the form is reset."]}),e(o,{Element:wt,code:yt,caption:"onReset"}),e(h,{links:["form:onSubmit","form:onSuccess","form:onError"]})]}),Rt=()=>{const[r,a]=f.useState();return t(i,{onSubmit:s=>a(`Form submitted, foo is ${s.foo}`),children:[e(l,{name:"foo",label:"Foo Field"}),e(u,{}),r&&e("div",{className:"info alert mar-t-2",children:r})]})},Ct=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnSubmitExample = () => {
  const [msg, setMsg] = useState()
  const onSubmit = values =>
    setMsg(\`Form submitted, foo is \${values.foo}\`)

  return (
    <Form onSubmit={onSubmit}>
      <Field name="foo" label="Foo Field"/>
      <Submit/>
      { msg &&
        <div className="info alert mar-t-2">
          {msg}
        </div>
      }
    </Form>
  )
}

export default OnSubmitExample`,Nt=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onSubmit"})}),t("p",{children:["The ",e("code",{children:"onSubmit"})," property can be used to define a function that will be called when the form is submitted and has passed all the relevant validation checks."]}),e("p",{children:"In most cases this function will be making an API call to submit the form data.  The form values are passed to the function as the first argument.  The second argument is an object containing the form context in case you need it."}),e(o,{Element:Rt,code:Ct,caption:"onSubmit"}),e(h,{links:["form:onSuccess","form:onError"]})]}),kt=()=>{const[r,a]=f.useState();return t(i,{onSubmit:async b=>(await se(1e3),Promise.resolve({ok:!0,message:`Dummy API call with foo: ${b.foo}`})),onSuccess:b=>{a(b.message)},children:[e(l,{name:"foo",label:"Foo Field"}),e(u,{}),r&&e("div",{className:"info alert mar-t-2",children:r})]})},Ot=`import { Form, Field, Submit } from '@/lib/index.js'
import { sleep } from '@abw/badger-utils'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'
// PRETEND: import { sleep } from '@abw/badger-utils'

const OnSuccessExample = () => {
  const [msg, setMsg] = useState()
  const onSubmit = async values => {
    await sleep(1000)
    return Promise.resolve({
      ok: true,
      message: \`Dummy API call with foo: \${values.foo}\`
    })
  }
  const onSuccess = response => {
    setMsg(response.message)
  }

  return (
    <Form onSubmit={onSubmit} onSuccess={onSuccess}>
      <Field name="foo" label="Foo Field"/>
      <Submit/>
      { msg &&
        <div className="info alert mar-t-2">
          {msg}
        </div>
      }
    </Form>
  )
}

export default OnSuccessExample`,Pt=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onSuccess"})}),t("p",{children:["The ",e("code",{children:"onSuccess"})," property can be used to define a function that will be called in the event of a successful submission of the form."]}),e(o,{Element:kt,code:Ot,caption:"onSuccess"}),e(h,{links:["form:onSubmit","form:onError"]})]}),qt=()=>{const[r,a]=f.useState();return t(i,{onSubmit:async b=>(await se(1e3),Promise.reject({message:`Dummy failed API call with foo: ${b.foo}`})),onError:b=>{a(b.message)},debug:!0,children:[e(l,{name:"foo",label:"Foo Field"}),e(u,{}),r&&e("div",{className:"error alert mar-t-2",children:r})]})},At=`import { Form, Field, Submit } from '@/lib/index.js'
import { sleep } from '@abw/badger-utils'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'
// PRETEND: import { sleep } from '@abw/badger-utils'

const OnErrorExample = () => {
  const [msg, setMsg] = useState()
  const onSubmit = async values => {
    await sleep(1000)
    return Promise.reject({
      message: \`Dummy failed API call with foo: \${values.foo}\`
    })
  }
  const onError = response => {
    setMsg(response.message)
  }

  return (
    <Form onSubmit={onSubmit} onError={onError} debug>
      <Field name="foo" label="Foo Field"/>
      <Submit/>
      { msg &&
        <div className="error alert mar-t-2">
          {msg}
        </div>
      }
    </Form>
  )
}

export default OnErrorExample`,Lt=()=>t("div",{children:[e("h1",{children:"Form Events"}),e("h2",{children:e("code",{children:"onError"})}),t("p",{children:["The ",e("code",{children:"onError"})," property can be used to define a function that will be called in the event of a failed submission of the form."]}),e(o,{Element:qt,code:At,caption:"onError"}),e(h,{links:["form:onSubmit","form:onSuccess"]})]}),jt=()=>t(i,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),r=>e("button",{onClick:r.reset,children:"Reset"})]}),Dt=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ResetExample = () =>
  <Form>
    <Field name="color"  label="Color"/>
    <Field name="animal" label="Animal"/>
    { form =>
      <button onClick={form.reset}>
        Reset
      </button>
    }
  </Form>

export default ResetExample`,Vt=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two"}),e(It,{})]}),It=()=>{const{reset:r}=P();return e("button",{onClick:r,children:"Reset the Form"})},Bt=`import { Form, Field, useForm } from '@/lib/index.js'

{/* START */}
import React  from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/react-formula'

const UseFormReset = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two"/>
    <MyResetButton/>
  </Form>

const MyResetButton = () => {
  const { reset } = useForm()
  return (
    <button onClick={reset}>
      Reset the Form
    </button>
  )
}

export default UseFormReset`,Yt=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Form Functions"}),e("h2",{children:e("code",{children:"reset"})}),t(c,{children:[e("div",{children:t("p",{children:["You can programmatically reset a form by calling the the ",e("code",{children:"reset()"})," method."]})}),e(O,{children:"Enter some values in the fields and then click on the reset button."})]}),e(o,{Element:jt,code:Dt,caption:"reset"}),e("h2",{children:e("code",{children:"useForm"})}),t("p",{children:["If the buttons (or other controls) that you want to use to reset the form are contained within the form then you can call the ",e("code",{children:"useForm()"})," function to gain access to the form context."]}),e(o,{Element:Vt,code:Bt,caption:"useForm() and reset()"})]}),$t=`import { Form, Field } from '@/lib/index.js'

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
        <div className="grid-2 gap-4">
          <Field
            name="field3" label="Field Three"
            type="checkbox" text="One Louder"
          />
          <Field
            name="field4" label="Field Four"
            type="select" options={['Nigel', 'David', 'Derek']}
          />
        </div>
        <Field
          name="field5" label="Field Five"
          type="radio" default='Keyboards'
          optionClass="inline"
          options={['Vocals', 'Guitar', 'Bass', 'Keyboards', 'Drums']}
        />
      </Form>
      <div className="mar-t-4 grid-fit gap-2">
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

export default SetFocusExample`,Mt=()=>{const[r,a]=f.useState(!1);return t(S,{children:[t(i,{onLoad:a,children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",type:"textarea"}),t("div",{className:"grid-2 gap-4",children:[e(l,{name:"field3",label:"Field Three",type:"checkbox",text:"One Louder"}),e(l,{name:"field4",label:"Field Four",type:"select",options:["Nigel","David","Derek"]})]}),e(l,{name:"field5",label:"Field Five",type:"radio",default:"Keyboards",optionClass:"inline",options:["Vocals","Guitar","Bass","Keyboards","Drums"]})]}),t("div",{className:"mar-t-4 grid-fit gap-2",children:[e("button",{onClick:()=>r==null?void 0:r.setFocus("field1"),children:"Focus One"}),e("button",{onClick:()=>r==null?void 0:r.setFocus("field2"),children:"Focus Two"}),e("button",{onClick:()=>r==null?void 0:r.setFocus("field3"),children:"Focus Three"}),e("button",{onClick:()=>r==null?void 0:r.setFocus("field4"),children:"Focus Four"}),e("button",{onClick:()=>r==null?void 0:r.setFocus("field5"),children:"Focus Five"})]})]})},Ut=`import { Form, Field, useForm } from '@/lib/index.js'

{/* START */}
import React  from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/react-formula'

const UseFormFocus = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two"/>
    <div className="grid-2 gap-4">
      <FieldFocusButton
        name="field1"
        caption="Focus Field One"
      />
      <FieldFocusButton
        name="field2"
        caption="Focus Field Two"
      />
    </div>
  </Form>

const FieldFocusButton = ({name, caption}) => {
  const { setFocus } = useForm()
  return (
    <button
      onClick={
        e => {
          e.preventDefault()
          setFocus(name)
        }
      }
    >
      {caption}
    </button>
  )
}

export default UseFormFocus`,Gt=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two"}),t("div",{className:"grid-2 gap-4",children:[e(Q,{name:"field1",caption:"Focus Field One"}),e(Q,{name:"field2",caption:"Focus Field Two"})]})]}),Q=({name:r,caption:a})=>{const{setFocus:d}=P();return e("button",{onClick:s=>{s.preventDefault(),d(r)},children:a})},Wt=`import { useForm } from '@/lib/index.js'

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

export default FieldFocusButton`,Ht=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Focus Fields"}),e("h2",{children:e("code",{children:"setFocus()"})}),t(c,{align:"end",children:[t("div",{children:[t("p",{children:["You can programmatically set the focus on a ",e(p,{})," by calling the ",e("code",{children:"setFocus()"})," method on the ",e(F,{}),", passing the name of the field that you want to focus as an argument."]}),t("p",{children:["You can capture a reference to the form using the ",e(q,{})," ","property to set a state variable, as shown in this example."]})]}),e(O,{children:"Click on one of the buttons to focus on a field."})]}),e(o,{Element:Mt,code:$t,caption:"onLoad() and setFocus()"}),e("h2",{children:e("code",{children:"useForm"})}),t("p",{children:["If the buttons (or other controls) that you want to use to focus the fields are contained within the ",e(F,{})," then you can call the ",e("code",{children:"useForm()"})," function to gain access to the form context."]}),e(o,{Element:Gt,code:Ut,caption:"useForm() and setFocus()"}),e("h2",{children:"Preventing Default Event"}),t(c,{children:[t("p",{children:["Be careful to make sure that your buttons call"," ",e("code",{children:"e.preventDefault()"})," on the event, as shown in the example above, otherwise the form may be submitted.  Alternately you can pass the event to the ",e("code",{children:"setFocus()"})," method as the second argument and it will do it for you, as shown below."]}),e(x,{code:R(Wt),expand:!0})]})]}),zt=`import { Form, Field } from '@/lib/index.js'

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
      <div className="grid-2 gap-4">
        <button onClick={() => setValues('Grey', 'Elephant')}>
          Grey Elephant
        </button>
        <button onClick={() => setValues('Red', 'Fox')}>
          Red Fox
        </button>
      </div>
    </>
  )
}

export default SetValues`,_t=()=>{const[r,a]=f.useState(),d=(s,b)=>r==null?void 0:r.setValues({color:s,animal:b});return t(S,{children:[t(i,{onLoad:a,children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"})]}),t("div",{className:"grid-2 gap-4",children:[e("button",{onClick:()=>d("Grey","Elephant"),children:"Grey Elephant"}),e("button",{onClick:()=>d("Red","Fox"),children:"Red Fox"})]})]})},Kt=`import { Form, Field, useForm } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/react-formula'

const UseSetValues = () =>
  <>
    <Form>
      <Field name="color"  label="Color"/>
      <Field name="animal" label="Animal"/>
      <div className="grid-2 gap-4">
        <Setter color="Grey" animal="Elephant"/>
        <Setter color="Red"  animal="Fox"/>
      </div>
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

export default UseSetValues`,Jt=()=>e(S,{children:t(i,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),t("div",{className:"grid-2 gap-4",children:[e(ee,{color:"Grey",animal:"Elephant"}),e(ee,{color:"Red",animal:"Fox"})]})]})}),ee=({color:r,animal:a})=>{const{setValues:d}=P();return t("button",{onClick:s=>{s.preventDefault(),d({color:r,animal:a},s)},children:[r," ",a]})},Xt=`import { Form, Field, useForm } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/react-formula'

const UseSetValues = () =>
  <>
    <Form>
      <Field name="color"  label="Color"/>
      <Field name="animal" label="Animal"/>
      <div className="grid-2 gap-4">
        <Setter color="Grey" animal="Elephant"/>
        <Setter color="Red"  animal="Fox"/>
      </div>
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

export default UseSetValues`,Zt=()=>e(S,{children:t(i,{children:[e(l,{name:"color",label:"Color"}),e(l,{name:"animal",label:"Animal"}),t("div",{className:"grid-2 gap-4",children:[e(te,{color:"Grey",animal:"Elephant"}),e(te,{color:"Red",animal:"Fox"})]})]})}),te=({color:r,animal:a})=>{const{setValues:d}=P();return t("button",{onClick:s=>d({color:r,animal:a},s),children:[r," ",a]})},Qt=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Setting Form Values"}),e("h2",{children:"setValues()"}),t(c,{children:[t("p",{children:["The ",e("code",{children:"setValues"})," function can be used to programmatically set form values.  You can use the ",e("code",{children:"onLoad"})," handler to save a reference to the form context as show in this example."]}),e(O,{children:"Click on one of the buttons to update the form values."})]}),e(o,{Element:_t,code:zt,caption:"setValues"}),e("h2",{children:e("code",{children:"useForm"})}),t("p",{children:["If you want to set the values from a component placed inside the"," ",e("code",{children:"Form"})," component then you can use ",e("code",{children:"useForm()"})," to get access to the form context."]}),e(o,{Element:Jt,code:Kt,caption:"setValues"}),e("h2",{children:"Preventing Default Event"}),t("p",{children:["If you're using a ",e("code",{children:"button"})," to trigger the call to"," ",e("code",{children:"setValues()"}),", as shown in the example above, then you need to make sure you call ",e("code",{children:"e.preventDefault()"})," event.  Otherwise the form may be submitted. Alternately you can pass the event as the second argument to the ",e("code",{children:"setValues()"})," method as shown below and it will do it for you."]}),e(o,{Element:Zt,code:Xt,caption:"setValues"})]});const el=()=>t(i,{classes:{required:"required red-bg"},showRequired:!0,children:[e(l,{name:"name",label:"Name",required:!0}),e(l,{name:"email",label:"Email Address"}),e(u,{})]}),tl=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default ClassesExample`,ll=`.red-bg {
  color: white !important;
  background-color: #c44 !important;
  border-color: black !important;
}`,rl=()=>t("div",{children:[e("h1",{children:"Form Properties"}),e("h2",{children:e("code",{children:"classes"})}),t("p",{children:["The ",e("code",{children:"classes"})," property can be used to change the"," ",e(ye,{})," used for different elements in a form."]}),e(o,{Element:el,code:tl,caption:"classes",expand:!0}),t("p",{children:["This is typically used in conjunction with your own custom stylesheet. For example, the ",e("code",{children:"red-bg"})," CSS class might be defined like this."]}),e(x,{code:ll,language:"css",caption:"Custom Stylesheet",expand:!0}),t("p",{children:["Note the use of the ",e("code",{children:"!important"})," modifier to increase the specificity of the rule in this example.  The alternative would be to fully qualify it, e.g as ",e("code",{children:".formula .field label .red-bg"}),"."]}),e(h,{links:["styling:css-classes"]})]}),ol=()=>t(H,{children:[e(n,{path:"",end:!0,element:e(Ue,{})}),t(n,{path:"properties",children:[e(n,{path:"fields",element:e(_e,{})}),e(n,{path:"values",element:e(Ze,{})}),e(n,{path:"hidden",element:e(tt,{})})]}),t(n,{path:"validation",children:[e(n,{path:"showRequired",element:e(ut,{})}),e(n,{path:"requiredLabel",element:e(pt,{})}),e(n,{path:"requiredMessage",element:e(ft,{})}),e(n,{path:"showOptional",element:e(bt,{})}),e(n,{path:"optionalLabel",element:e(Ft,{})}),e(n,{path:"validate",element:e(dt,{})}),e(n,{path:"validateOnBlur",element:e(st,{})}),e(n,{path:"validateOnChange",element:e(ct,{})}),e(n,{path:"validateOnInvalid",element:e(mt,{})}),e(n,{path:"minValidateLength",element:e(ht,{})}),e(n,{path:"focusInvalidField",element:e(xt,{})}),e(n,{path:"resetOnSuccess",element:e(gt,{})})]}),t(n,{path:"events",children:[e(n,{path:"onLoad",element:e(vt,{})}),e(n,{path:"onReset",element:e(Tt,{})}),e(n,{path:"onSubmit",element:e(Nt,{})}),e(n,{path:"onSuccess",element:e(Pt,{})}),e(n,{path:"onError",element:e(Lt,{})})]}),t(n,{path:"functions",children:[e(n,{path:"reset",element:e(Yt,{})}),e(n,{path:"setFocus",element:e(Ht,{})}),e(n,{path:"setValues",element:e(Qt,{})})]}),e(n,{path:"classes",element:e(rl,{})})]}),il=`import { Form, Field } from '../../../../lib/index.js'

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

export default FieldExample`,al=()=>e(i,{children:e(l,{name:"example",label:"An Example Field",type:"text",required:!0})}),nl=()=>t(S,{children:[e("h1",{children:"Field Component"}),t("p",{className:"intro",children:["The ",e("code",{children:"Field"})," component is used to render a field inside a ",e(F,{}),"."]}),e(o,{Element:al,code:il,caption:"Field",expand:!0}),e(le,{menu:Te})]}),dl=`import { Form, Field, Layout } from '@/lib/index.js'

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

export default ChildFunctions`,sl=()=>e(i,{children:t(l,{name:"greeting",label:"Enter a greeting",children:[r=>t("h2",{className:"mar-t-none",children:["The ",r.name," field"]}),e(V,{}),r=>t("div",{children:["Current value is: ",r.value]}),r=>t("div",{className:"flex gap-2 blue mar-t-4",children:[e("button",{type:"button",onClick:()=>r.setValue("Foo"),children:"Foo"}),e("button",{type:"button",onClick:()=>r.setValue("Bar"),children:"Bar"})]})]})}),cl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"children"})}),e("p",{children:"You can define children of a field, either as components or functions. Component can access the field context Functions receive the field context as the first argument."}),t("p",{children:["Note that if you define children for the field then it will replace the default ",e(j,{})," component.  In this case it's up to you to render the field content."]}),t("p",{children:["If you want to include the default layout for a field and add some content of your own then you can include the ",e(j,{})," component manually."]}),e(o,{Element:sl,code:dl,caption:"suffix",expand:!0})]}),ml=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default HelpExample`,hl=()=>t(i,{children:[e(l,{name:"email",label:"Email Address",help:"Enter the email address that you registered with",required:!0}),e(u,{})]}),ul=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"help"})}),t(c,{align:"end",children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"help"})," property can be used to define some additional help for the user.  By default it is displayed underneath the field input."]}),e("p",{children:"If the field input fails to validate then the validation error message will be displayed in its place."})]}),e(m,{children:"Try submitting the form without entering any value.  You should see the help message replaced by the validation error."})]}),e(o,{Element:hl,code:ml,caption:"help"}),e(h,{links:["field:name","field:label","field:required","field:validate","form:fields"]})]}),pl=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Hello World!"/>
  </Form>

export default LabelExample`,fl=()=>e(i,{children:e(l,{name:"field1",label:"Hello World!"})}),bl=`import { Form, Field } from '@/lib/index.js'

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

export default FormFieldsExample`,Fl={field1:{label:"This is field one"},field2:{label:"This is field two"}},gl=()=>t(i,{fields:Fl,children:[e(l,{name:"field1"}),e(l,{name:"field2",label:"A different label"})]}),xl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"label"})}),t("p",{children:["Add a label to the field with the ",e("code",{children:"label"})," property."]}),e(o,{Element:fl,code:pl,caption:"name",expand:!0}),t(c,{children:[t("p",{children:["Like all other field properties, they can be defined via ",e(L,{})," ","on the ",e(F,{}),".  If you explicitly set a ",e("code",{children:"label"})," on the"," ",e(p,{})," then it will take precedence."]}),t(m,{children:["Note how the first field has the ",e("code",{children:"label"})," defined in the"," ",e(L,{})," but the second defines its own ",e("code",{children:"label"})," ","which is used instead of the one defined in the ",e(L,{}),"."]})]}),e(o,{Element:gl,code:bl,caption:"Form fields",expand:!0}),e(h,{links:["field:name","form:fields"]})]}),Sl=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const NameExample = () =>
  <Form>
    <Field name="field1"/>
    <Submit/>
  </Form>

export default NameExample`,El=()=>t(i,{children:[e(l,{name:"field1"}),e(u,{})]}),vl=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default FormFieldsExample`,wl={field1:{label:"This is field one",required:!0}},yl=()=>t(i,{fields:wl,children:[e(l,{name:"field1"}),e(u,{})]}),Tl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"name"})}),t(c,{children:[t("p",{children:["The ",e("code",{children:"name"})," is the only required property for a ",e(p,{}),". It is used as the key to set the ",e(F,{})," value."]}),t(m,{children:["Enter some text in the input field.  The ",e(ce,{}),` component is included in this example to show the form data as it's being set.  Click on the "Submit" button and you'll see an alert showing the data that would be submitted.`]})]}),e(o,{Element:El,code:Sl,caption:"name",expand:!0}),t(c,{children:[t("p",{children:["You can set the ",e(L,{})," property on the ",e(F,{})," as an object containing additional properties for each field.  The"," ",e("code",{children:"name"})," is used as the key to fetch those properties. Any properties explicitly set on the ",e(p,{})," will override them."]}),t(m,{children:["Note how the ",e(p,{})," has now got a ",e("code",{children:"label"})," and the"," ",e(y,{})," property is set."]})]}),e(o,{Element:yl,code:vl,caption:"Form fields",expand:!0}),e(h,{links:["field:label","form:fields"]})]}),Rl=`import { Form, Field } from '@/lib/index.js'

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

export default TypeExample`,Cl=()=>t(i,{children:[e(l,{name:"field1",label:"Text Field"}),e(l,{name:"field2",type:"textarea",label:"TextArea Field"}),e(l,{name:"field3",type:"number",label:"Number Field"}),e(l,{name:"field4",type:"date",label:"Date Field"}),e(l,{name:"field5",type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"]}),e(l,{name:"field6",type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]}),e(l,{name:"field7",type:"checkbox",label:"Checkbox Field",text:"I like badgers"})]}),Nl=`import { Form, Field } from '@/lib/index.js'

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

export default FormFieldsExample`,kl={field1:{label:"Text Field"},field2:{type:"textarea",label:"TextArea Field"},field3:{type:"number",label:"Number Field"},field4:{type:"date",label:"Date Field"},field5:{type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"]},field6:{type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]},field7:{type:"checkbox",label:"Checkbox Field",text:"I like badgers"}},Ol=()=>t(i,{fields:kl,children:[e(l,{name:"field1"}),e(l,{name:"field2"}),e(l,{name:"field3"}),e(l,{name:"field4"}),e(l,{name:"field5"}),e(l,{name:"field6"}),e(l,{name:"field7"})]}),Pl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"type"})}),t(c,{align:"end",children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"type"})," property specifies what kind of input should be displayed.  The default value is ",e("code",{children:"text"})," corresponding to the ",e(J,{})," input component.  Other values can be"," ",e("code",{children:"textarea"})," (see ",e(Re,{}),"),"," ",e("code",{children:"checkbox"})," (see ",e(Ce,{}),"),"," ",e("code",{children:"radio"})," (see ",e(Ne,{}),"),"," ",e("code",{children:"select"})," (see ",e(ke,{}),") and"," ",e("code",{children:"hidden"})," (see ",e(Oe,{}),") corresponding to the basic HTML input types."]}),t("p",{children:["You can also set ",e("code",{children:"type"})," to be one of the other valid HTML input types, e.g. ",e("code",{children:"password"}),", ",e("code",{children:"email"}),","," ",e("code",{children:"number"}),", ",e("code",{children:"date"}),", ",e("code",{children:"color"}),", and so on.  These use the same basic ",e(J,{})," input component as for ",e("code",{children:"text"})," types, but with the ",e("code",{children:"type"})," attribute set appropriately to use the browser-specific functionality."]})]}),e(m,{children:"Enter some text in the input fields below. Note how the number field uses the browser's built-in functionality to accept only numbers, and the date field provides a date picker."})]}),e(o,{Element:Cl,code:Rl,caption:"type",expand:!0}),t(c,{children:[t("p",{children:["As with all other ",e(p,{})," properties, they can be defined using"," ",e(L,{})," set on the ",e(F,{}),". The benefit of this approach is that it keeps the field definitions and markup separate.  As well as making them easier to read and maintain, it also has the benefit that field definitions can be reused across multiple forms."]}),t(m,{children:["The example below generates exactly the same form as the one above (with the exception of the additional ",e(ce,{})," component). Note that the form data will only include fields that are present in the ",e(F,{}),".  The ",e("code",{children:"field5"})," field definition is effectively ignored."]})]}),e(o,{Element:Ol,code:Nl,caption:"Form fields",expand:!0}),e(h,{links:["field:name","field:label","form:fields","input:types"]})]}),ql=`import { Form, Field } from '@/lib/index.js'

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

export default PlaceholderExample`,Al=()=>e(i,{children:e(l,{name:"name",label:"Your Name",placeholder:"Enter your name"})}),Ll=()=>t("div",{children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"placeholder"})}),t("p",{children:["Use the ",e("code",{children:"placeholder"})," property to add some text as a placeholder in the input."]}),e(o,{Element:Al,code:ql,caption:"placeholder",expand:!0}),e(h,{links:["field:name","form:fields"]})]}),jl=`import { Form, Field } from '@/lib/index.js'

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

export default PrefixExample`,Dl=()=>e(i,{children:e(l,{name:"money",type:"number",label:"Price",prefix:"$"})}),Vl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"prefix"})}),t("p",{children:["You can add a ",e("code",{children:"prefix"})," to a ",e("code",{children:"text"})," field or any of the other types using the basic text input, e.g."," ",e("code",{children:"money"}),", ",e("code",{children:"date"}),", etc."]}),e(o,{Element:Dl,code:jl,caption:"prefix",expand:!0}),e(h,{links:["field:suffix"]})]}),Il=`import { Form, Field } from '@/lib/index.js'

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

export default SuffixExample`,Bl=()=>e(i,{children:e(l,{name:"suffix",type:"password",label:"Enter your password",suffix:"🔒"})}),Yl=`import { Form, Field } from '@/lib/index.js'

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

export default PrefixSuffixExample`,$l=()=>e(i,{children:e(l,{name:"money",type:"number",label:"Field with both prefix and suffix",prefix:"$",suffix:".00"})}),Ml=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"suffix"})}),t("p",{children:["You can add a ",e("code",{children:"suffix"})," to a field"]}),e(o,{Element:Bl,code:Il,caption:"suffix",expand:!0}),t("p",{children:["You can add both a ",e("code",{children:"prefix"})," and a ",e("code",{children:"suffix"}),"."]}),e(o,{Element:$l,code:Yl,caption:"prefix and suffix",expand:!0}),e(h,{links:["field:prefix"]})]}),Ul=()=>t(i,{children:[e(l,{name:"regular",label:"Regular Field"}),e(l,{name:"wide",label:"Wide Field"}),e(l,{name:"wide-textarea",type:"textarea",label:"Wide Text Area Field"})]}),Gl=`import { Form, Field } from '@/lib/index.js'

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

export default Wide`,Wl=()=>t(i,{children:[e(l,{name:"zero",label:"Narrow Text Field"}),e(l,{name:"one",label:"Text Field"}),e(l,{name:"two",label:"Text Area Field",type:"textarea"}),e(l,{name:"three",label:"Select Field",type:"select",options:["Badger","Ferret","Stoat"]}),e(l,{name:"four",label:"Checkbox Field",type:"checkbox",text:"Badgers are cool"}),e(l,{name:"five",label:"Radio Button Field",type:"radio",options:["Badger","Ferret","Stoat"]})]}),Hl=`import { Form, Field } from '@/lib/index.js'

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

export default Wide`,zl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Properties"}),e("h2",{children:e("code",{children:"wide"})}),t("p",{children:["The default behaviour is for fields to be fluid in width. You can add the ",e("code",{children:"wide"})," property to make it expand to the full width of the container."]}),e(o,{Element:Ul,code:Gl,caption:"wide",expand:!0}),t("p",{children:["If wide fields are your thing, you can add the ",e("code",{children:"wide"})," property to the form and all the fields will inherit it as the default.  You can set ",e("code",{children:"wide"})," to ",e("code",{children:"false"})," if you don't want a particular field to be full-width."]}),e(o,{Element:Wl,code:Hl,caption:"wide form",expand:!0})]}),_l={alice:!0,bob:!0,charlie:!0},Kl={username:{label:"Username",help:"Choose a username (minimum length: 3)",validateOnChange:!0,minValidateLength:3,validate:(r,a,d,s)=>{r.length<3&&s({message:"Your username must be at least 3 characters"}),_l[r.toLowerCase()]?s({message:"Sorry, that username is taken"}):d({message:"That username is available"})}}},Jl=()=>t(i,{fields:Kl,children:[e(l,{name:"username"}),e(u,{})]}),Xl=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default MinValidateLengthExample`,Zl=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"minValidateLength"})}),t(c,{children:[t("p",{children:["You can set the ",e(W,{})," property flag to enable validation any time the field value changes.  The"," ",e("code",{children:"minValidateLength"})," property can be set to only trigger validation when the input length exceeds a threshold."]}),t(m,{children:["Enter a username in the form below.  The usernames ",e("code",{children:"alice"}),",",e("code",{children:"bob"})," and ",e("code",{children:"charlie"})," will return a validation error saying that they're not available.  There's a minimum length for a username so we wait until at least three characters have been entered before checking to see if the username is available.  Note that the validation will also be triggered when the form is submitted, regardless of how many characters have been entered.  For that reason the validation function also rejects any username that is too short."]})]}),e(o,{Element:Jl,code:Xl,caption:"minValidateLength"}),e(h,{links:["field:required","field:validate","field:validateOnBlur","field:validateOnChange"]})]}),Ql=`import { Form, Field } from '@/lib/index.js'

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

export default OptionalLabel`,er=()=>t(i,{showOptional:!0,optionalLabel:"Not required",children:[e(l,{name:"field1",label:"Optional Field"}),e(l,{name:"field2",label:"Another Optional Field",optionalLabel:"Nice to have"})]}),tr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"optionalLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"optionalLabel"})," property to change the label that is display for optional fields (i.e. those that aren't marked as ",e(y,{}),") that have the"," ",e(ne,{})," option set.  You can set it on individual"," ",e(p,{})," components or on the parent ",e(F,{})," to act as a default for all fields."]}),e(o,{Element:er,code:Ql,caption:"optionalLabel",expand:!0}),e(h,{links:["field:required","field:showRequired","field:showOptional","field:requiredLabel"]})]}),lr=`import { Form, Field } from '@/lib/index.js'

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

export default PrepareValue`,rr={upper:{label:"Converted to UPPER CASE",prepareValue:r=>r.toUpperCase()}},or=()=>e(i,{fields:rr,children:e(l,{name:"upper"})}),ir=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"prepareValue"})}),t(c,{children:[t("p",{children:["You can add a ",e("code",{className:"code",children:"prepareValue"})," function to a ",e(p,{})," to prepare the value before it's set."]}),e(m,{children:"Try entering some letters in the field below.  You should see that they get converted to upper case."})]}),e(o,{Element:or,code:lr,caption:"onChange",expand:!0}),e(h,{links:["field:validate","field:validateOnBlur","field:validateOnChange"]})]}),ar=()=>t(i,{children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(u,{})]}),nr=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const Required = () =>
  <Form>
    <Field name="field1" label="Required Field" required/>
    <Submit/>
  </Form>

export default Required`,dr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"required"})}),t(c,{align:"end",children:[t("p",{children:["You can add a ",e("code",{children:"required"})," property to a field to mark it as being required.  This automatically adds a validator to the field to ensure that a value is provided when the form is submitted."]}),e(m,{children:"Try submitting the form without entering anything in the field input."})]}),e(o,{Element:ar,code:nr,caption:"required",expand:!0}),e(h,{links:["field:showRequired","field:requiredLabel","field:requiredMessage","field:validateOnBlur","field:validateOnChange"]})]}),sr=`import { Form, Field } from '@/lib/index.js'

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

export default RequiredLabel`,cr=()=>t(i,{showRequired:!0,requiredLabel:"Important!",children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(l,{name:"field2",label:"Another Required Field",requiredLabel:"Very Important!",required:!0})]}),mr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredLabel"})}),t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredLabel"})," property to change the label that is displayed for ",e(y,{})," fields that have the ",e(ie,{})," option enabled.  You can set it on individual ",e(p,{})," components or on the parent ",e(F,{}),"."]}),e(o,{Element:cr,code:sr,caption:"requiredLabel",expand:!0}),e(h,{links:["field:required","field:showRequired","field:showOptional","field:optionalLabel"]})]}),hr=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default RequiredLabel`,ur=()=>t(i,{requiredMessage:"Nothing will come of nothing",children:[e(l,{name:"foo",label:"Foo",required:!0}),e(l,{name:"bar",label:"Bar",required:!0,requiredMessage:"You really MUST enter a value"}),e(u,{})]}),pr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"requiredMessage"})}),t(c,{align:"end",children:[t("div",{children:[t("p",{children:["You can use the ",e("code",{className:"code",children:"requiredMessage"})," property to change the error message that is generated for ",e(y,{})," fields that aren't completed."]}),t("p",{children:["You can set it on individual ",e(p,{})," components or on the parent"," ",e(F,{})," to act as the default for all fields."]})]}),t(m,{children:["Try submitting the form without entering any values.  You should see the form-wide ",e("code",{children:"requiredMessage"})," displayed for the first field, and the field-specific value for the second."]})]}),e(o,{Element:ur,code:hr,caption:"requiredMessage",expand:!0}),e(h,{links:["field:required","field:showRequired","field:requiredLabel","field:validateOnChange","field:validateOnBlur"]})]}),fr=()=>t(i,{showOptional:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(l,{name:"field2",label:"Optional Field"})]}),br=`import { Form, Field } from '@/lib/index.js'

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

export default ShowOptional`,Fr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showOptional"})}),t("p",{children:["If a field is ",e("b",{children:"NOT"})," marked as ",e(y,{})," then it is optional. If you set the ",e("code",{children:"showOptional"})," property then it will add an additional label to a field to indicate that it's optional.  You can set the property on individual ",e(p,{})," components or on the parent ",e(F,{})," to act as a default for all fields."]}),t("p",{children:["You can use the ",e(de,{})," property to change the text of the label that is displayed."]}),e(o,{Element:fr,code:br,caption:"showOptional",expand:!0}),e(h,{links:["field:required","field:optionalLabel","field:showRequired","field:requiredLabel"]})]}),gr=()=>t(i,{children:[e(l,{name:"field1",label:"Required Field",required:!0,showRequired:!0}),e(l,{name:"field2",label:"Optional Field"})]}),xr=`import { Form, Field } from '@/lib/index.js'

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

export default ShowRequired`,Sr=()=>t(i,{showRequired:!0,children:[e(l,{name:"field1",label:"Required Field",required:!0}),e(l,{name:"field2",label:"Optional Field"})]}),Er=`import { Form, Field } from '@/lib/index.js'

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

export default ShowRequiredForm`,vr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"showRequired"})}),t("p",{children:["If a ",e(p,{})," is marked as ",e(y,{})," then the"," ",e("code",{children:"showRequired"})," property can be added to have an additional label displayed indicating that it is required."]}),e(o,{Element:gr,code:xr,caption:"showRequired on Field",expand:!0}),t("p",{children:["The ",e("code",{children:"showRequired"})," property can also be added to the"," ",e(F,{})," to have it apply to all ",e(y,{})," fields."]}),e(o,{Element:Sr,code:Er,caption:"showRequired on Form",expand:!0}),e(h,{links:["field:required","field:requiredLabel","field:showOptional","field:optionalLabel"]})]}),wr={username:{label:"Username",help:"Enter your username",validate:r=>D().trim().required("You must enter your username you numpty!").validate(r)},password:{label:"Password",type:"password",help:"Enter your password",validate:r=>D().trim().required("You must enter your password you muppet!").validate(r)}},yr=()=>t(i,{fields:wr,children:[e(T,{names:"username password"}),e(u,{})]}),Tr=`import { Form, Fields, Submit } from '@/lib/index.js'

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

export default ValidateExample`,Rr={username:{label:"Username",help:"Enter your username",validate:async(r,a,d,s)=>{r.match(/badger/i)?d({value:`${r} is a great name`}):s({value:"Mr Badger",message:'Your username must contain the word "badger"'})}}},Cr=()=>t(i,{fields:Rr,children:[e(l,{name:"username"}),e(u,{})]}),Nr=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default ValidateExample`,kr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validate"})}),t(c,{align:"end",children:[t("div",{children:[t("p",{children:["You can use the ",e(y,{})," property to mark a field as being required, but it's a blunt instrument.  All it will do is check that a field has some value entered. For more robust validation you can use the ",e("code",{children:"validate"})," property to define an ",e("code",{children:"async"})," ","validation function."]}),t("p",{children:["In this example we're using"," ",e("a",{href:"https://www.npmjs.com/package/yup",children:"Yup"})," but you can use anything you like.  It should return the validated value on success or throw an error if the valid is invalid."]})]}),e(m,{children:"Try submitting the form without entering any values for either of the fields. You should see the custom validation errors."})]}),e(o,{Element:yr,code:Tr,caption:"validate"}),t(c,{align:"end",children:[t("p",{children:[e("h3",{children:"NOTE: this may change"}),"The ",e("code",{children:"validate"})," function is passed four arguments.  The first is the field value for common cases where that's all you need to determine if the field is valid.  The second argument is the field context containing everything you need to know about the field state and callable actions to change it.  The third and fourth arguments are"," ",e("code",{children:"resolve"})," and ",e("code",{children:"reject"})," functions which can be called to validate or invalidate the field, respectively.  The"," ",e("code",{children:"resolve"})," function should be passed an object containing the ",e("code",{children:"value"}),", which may be modified by your function. The ",e("code",{children:"reject"})," function should be passed an object containing an error ",e("code",{children:"message"}),", and optionally a new ",e("code",{children:"value"})," ","for the field."]}),e(m,{children:'In this somewhat contrived example we require the user to enter a username containing the word "badger".'})]}),e(o,{Element:Cr,code:Nr,caption:"validate"}),e(h,{links:["field:required","field:validateOnChange","field:validateOnBlur"]})]}),Or={username:{label:"Username",help:"Enter your username",validate:r=>D().trim().required("You must enter your username you numpty!").validate(r)},password:{label:"Password",type:"password",help:"Enter your password",validate:r=>D().trim().required("You must enter your password you muppet!").validate(r)}},Pr=()=>t(i,{fields:Or,validateOnBlur:!0,children:[e(T,{names:"username password"}),e(u,{})]}),qr=`import { Form, Fields, Submit } from '@/lib/index.js'

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

export default ValidateExample`,Ar=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnBlur"})}),t(c,{children:[t("p",{children:["The ",e("code",{children:"validateOnBlur"})," property can be set to trigger validation whenever a field is blurred.  You can set it on individual"," ",e(p,{})," components or on the parent ",e(F,{})," to have it apply to all fields."]}),e(m,{children:"Try switching focus from one field to another without entering anything.  You should see the custom validation errors when each field is blurred."})]}),e(o,{Element:Pr,code:qr,caption:"validate"}),e(h,{links:["field:required","field:validate","field:validateOnChange"]})]}),Lr=`import { Form, Field } from '@/lib/index.js'

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

export default ValidateOnChangeExample`,jr={vowels:{label:"Vowels",help:"Enter between 3 and 5 vowels",validateOnChange:!0,minValidateLength:3,validate:r=>D().trim().matches(/^[^y]*$/i,"Sorry, but y is not allowed").matches(/^[aeiou]*$/i,"You should only type vowels").min(3,"You must enter at least three vowels").max(5,"You should not enter more than 5 vowels").validate(r)}},Dr=()=>e(i,{fields:jr,children:e(l,{name:"vowels"})}),Vr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnChange"})}),t(c,{children:[t("p",{children:["You can set the ",e("code",{children:"validateOnChange"})," flag to enable validation any time the field value changes.  The ",e(oe,{})," property can be set to only trigger validation when the input length exceeds a threshold."]}),e(m,{children:"Enter some text in the field below.  Once you've entered three letters the validation will kick in.  You should see an error if you enter any letters that aren't vowels."})]}),e(o,{Element:Dr,code:Lr,caption:"validateOnChange"}),e(h,{links:["field:required","field:validate","field:validateOnBlur","field:minValidateLength"]})]}),Ir=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),e("h2",{children:e("code",{children:"validateOnInvalid"})}),t("p",{children:["Fields are normally validated when the form is submitted. The ",e(W,{})," and ",e(G,{})," options can be set to change this."]}),t("p",{children:["If a field fails validation it will then switch to validating on change.  This option can be set to ",e("code",{children:"false"})," to prevent this behaviour."]})]}),Br=()=>{const[r,a]=f.useState(),d=s=>a(`${s.label} was blurred`);return t(i,{children:[e(l,{name:"foo",label:"The Foo Field",onBlur:d}),e(l,{name:"bar",label:"The Bar Field",onBlur:d}),r]})},Yr=`import { Form, Field } from '@/lib/index.js'

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
export default OnBlurExample`,$r=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onBlur"})}),t(c,{children:[t("p",{children:["You can add an ",e("code",{children:"onBlur"})," handler to a ",e(p,{})," ","which will be called when the field is blurred (i.e. unselected). The field context will be passed as an argument."]}),e(m,{children:"Focus on one of the fields below and then select the other field. A message should be displayed each time a field loses focus."})]}),e(o,{Element:Br,code:Yr,caption:"onFocus",expand:!0}),e(h,{links:["field:validateOnBlur","field:onFocus","field:onChange","field:onValid","field:onInvalid"]})]}),Mr=`import { Form, Field } from '@/lib/index.js'

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

export default OnChangeExample`,Ur=()=>{const[r,a]=f.useState("");return t(i,{children:[e(l,{name:"example",label:"Field with onChange",onChange:d=>a(d.value)}),"Current value: ",r]})},Gr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onChange"})}),t(c,{children:[t("p",{children:["You can add an ",e("code",{children:"onChange"})," handler to a ",e(p,{})," ","which will be called when the field value is changed.  The field context will be passed as an argument."]}),e(m,{children:'Try entering some text in the field below.  You should see the "Current value" display update to reflect the field content.'})]}),e(o,{Element:Ur,code:Mr,caption:"onChange",expand:!0}),e(h,{links:["field:validateOnChange","field:onBlur","field:onFocus","field:onValid","field:onInvalid"]})]}),Wr=()=>{const[r,a]=f.useState(),d=s=>a(`${s.label} was focussed`);return t(i,{children:[e(l,{name:"foo",label:"The Foo Field",onFocus:d}),e(l,{name:"bar",label:"The Bar Field",onFocus:d}),r]})},Hr=`import { Form, Field } from '@/lib/index.js'

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

export default OnFocusExample`,zr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onFocus"})}),t(c,{children:[t("p",{children:["You can add an ",e("code",{children:"onFocus"})," handler to a ",e(p,{})," ","which will be called when the field is focussed (i.e. selected). The field context will be passed as an argument."]}),e(m,{children:"Focus on each of the fields below.  A message should be displayed each time a field gains focus."})]}),e(o,{Element:Wr,code:Hr,caption:"onFocus",expand:!0}),e(h,{links:["field:onBlur","field:onChange","field:onValid","field:onInvalid"]})]}),_r=()=>{const[r,a]=f.useState(),d=s=>a(`${s.label} is invalid: ${s.message}`);return t(i,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onInvalid:d}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:d,requiredMessage:"You must enter a value"}),r]})},Kr=`import { Form, Field } from '@/lib/index.js'

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

export default OnInvalidExample`,Jr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onInvalid"})}),t(c,{children:[t("p",{children:["You can add an ",e("code",{children:"onInvalid"})," handler to a ",e(p,{})," ","which will be called when the field fails validation. The field context will be passed as an argument."]}),t(m,{children:[t("p",{children:["Click one of the fields below and then select the other field without entering any text. The ",e(G,{})," option on the"," ",e(F,{})," "," means that the fields will be validated when they lose focus. They're both marked as ",e(y,{})," so they will fail validation (assuming you haven't entered anything) and the ",e("code",{children:"onInvalid"})," handler will be called."]}),t("p",{children:["Also note the use of ",e(ae,{})," to set a custom message for the second field."]})]})]}),e(o,{Element:_r,code:Kr,caption:"onInvalid",expand:!0}),e(h,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onValid"]})]}),Xr=()=>{const[r,a]=f.useState();return t(i,{children:[e(l,{name:"foo",label:"Foo Field",onLoad:a}),t("div",{className:"grid-4 gap-2",children:[e("button",{type:"button",onClick:()=>r.reset(),children:"Reset"}),e("button",{type:"button",onClick:()=>r.setValue("Hello"),children:"Hello"}),e("button",{type:"button",onClick:()=>r.setValue("Goodbye"),children:"Goodbye"}),e("button",{type:"button",onClick:()=>r.setFocus(),children:"Focus"})]})]})},Zr=`import { Form, Field } from '@/lib/index.js'

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

export default OnLoadExample`,Qr=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onLoad"})}),t(c,{children:[t("p",{children:["You can add an ",e("code",{children:"onInvalid"})," handler to a ",e(p,{})," ","which will be called when the field is initialised.  This is useful if you want to programmatically control the field."]}),e(m,{children:"Click on the buttons to programmatically call field methods. The first resets the field, the next two set the field value, and the last one focusses the field."})]}),e(o,{Element:Xr,code:Zr,caption:"onLoad"}),e(h,{links:["field:onBlur","field:onFocus","field:onChange","field:onValid","field:setFocus"]})]}),eo=()=>{const[r,a]=f.useState();return t(i,{validateOnBlur:!0,children:[e(l,{name:"foo",label:"Foo Field",required:!0,onValid:d=>a(`${d.name} is valid: ${d.value}`)}),e(l,{name:"bar",label:"Bar Field",required:!0,onValid:d=>a(`${d.name} is valid: ${d.value}`)}),r]})},to=`import { Form, Field } from '@/lib/index.js'

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

export default OnValidExample`,lo=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Events"}),e("h2",{children:e("code",{children:"onValid"})}),t(c,{children:[t("p",{children:["You can add an ",e("code",{children:"onValid"})," handler to a ",e(p,{})," ","which will be called when the field is successfully validated. The field context will be passed as an argument."]}),t(m,{children:["Enter some text in one of the fields below and then select the other field.  The ",e("code",{children:"validateOnBlur"})," option on the ",e(F,{})," ","means that the first field will be validated when it loses focus and the ",e("code",{children:"onValid"})," handler will be called."]})]}),e(o,{Element:eo,code:to,caption:"onValid",expand:!0}),e(h,{links:["field:validate","field:onBlur","field:onFocus","field:onChange","field:onInvalid"]})]}),ro=`import { Form, Field } from '@/lib/index.js'

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

export default ResetExample`,oo=()=>{const[r,a]=f.useState(!1),[d,s]=f.useState(!1);return t(S,{children:[t(i,{children:[e(l,{onLoad:a,name:"field1",label:"Field One"}),e(l,{onLoad:s,value:"Initial value",name:"field2",label:"Field Two"})]}),t("div",{className:"flex gap-4",children:[e("button",{className:"blue",onClick:r.reset,children:"Reset Field One"}),e("button",{className:"blue",onClick:d.reset,children:"Reset Field Two"})]})]})},io=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"reset()"})}),t(c,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"reset()"})," function can be called to reset a field to its initial state."]}),t("p",{children:["You can use the ",e(q,{})," property to save a reference to a field context object. Then call the ",e("code",{children:"reset()"})," method on the field object to make it invalid.  An optional argument can be provided as the message to display."]})]}),e(m,{children:"Enter some text in either of the inputs below and then click on the corresponding button to reset it to the original value."})]}),e(o,{Element:oo,code:ro,caption:"reset()"}),e(h,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),ao=`import { Form, Field } from '@/lib/index.js'

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

export default SetFocusExample`,no=()=>{const[r,a]=f.useState(!1),[d,s]=f.useState(!1);return t(S,{children:[t(i,{children:[e(l,{onLoad:a,name:"field1",label:"Field One"}),e(l,{onLoad:s,name:"field2",label:"Field Two"})]}),t("div",{className:"flex gap-4",children:[e("button",{onClick:()=>r==null?void 0:r.setFocus(),children:"Focus Field One"}),e("button",{onClick:()=>d==null?void 0:d.setFocus(),children:"Focus Field Two"})]})]})},so=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setFocus()"})}),t(c,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"setFocus()"})," function can be called to focus a field. You can use the ",e(q,{})," property to save a reference to a field context object."]}),t("p",{children:["Then call the ",e("code",{children:"setFocus()"})," method on the field object to focus it."]})]}),e(m,{children:"Click on one of the buttons to focus the corresponding field."})]}),e(o,{Element:no,code:ao,caption:"setFocus()"}),t("p",{children:["You can also focus on fields by name using the ",e(F,{})," ",e(Pe,{})," method."]}),e(h,{links:["form:setFocus","field:onFocus","field:onBlur"]})]}),co=`import { Form, Field } from '@/lib/index.js'

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

export default SetInvalidExample`,mo=()=>{const[r,a]=f.useState(!1),[d,s]=f.useState(!1);return t(S,{children:[t(i,{children:[e(l,{onLoad:a,name:"field1",label:"Field One"}),e(l,{onLoad:s,name:"field2",label:"Field Two"})]}),t("div",{className:"flex gap-4",children:[e("button",{className:"red",onClick:()=>r.setInvalid(),children:"Invalid Field One"}),e("button",{className:"red",onClick:()=>d.setInvalid("Naughty!"),children:"Invalid Field Two"})]})]})},ho=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setInvalid()"})}),t(c,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"setInvalid()"})," function can be called to mark a field as invalid."]}),t("p",{children:["You can use the ",e(q,{})," property to save a reference to a field context object. Then call the ",e("code",{children:"setInvalid()"})," method on the field object to make it invalid.  An optional argument can be provided as the message to display."]})]}),e(m,{children:"Click on one of the buttons to set the corresponding field to be invalid."})]}),e(o,{Element:mo,code:co,caption:"setFocus()"}),e(h,{links:["field:setInvalid"]})]}),uo=`import { Form, Field } from '@/lib/index.js'

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

export default SetValidExample`,po=()=>{const[r,a]=f.useState(!1),[d,s]=f.useState(!1);return t(S,{children:[t(i,{children:[e(l,{onLoad:a,name:"field1",label:"Field One"}),e(l,{onLoad:s,name:"field2",label:"Field Two"})]}),t("div",{className:"flex gap-4",children:[e("button",{className:"green",onClick:()=>r==null?void 0:r.setValid(),children:"Valid Field One"}),e("button",{className:"green",onClick:()=>d==null?void 0:d.setValid("Nice one!"),children:"Valid Field Two"})]})]})},fo=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setValid()"})}),t(c,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"setValid()"})," function can be called to mark a field as valid."]}),t("p",{children:["You can use the ",e(q,{})," property to save a reference to a field context object. Then call the ",e("code",{children:"setValid()"})," method on the field object to make it valid.  An optional argument can be provided as the message to display."]})]}),e(m,{children:"Click on one of the buttons to set the corresponding field to be valid."})]}),e(o,{Element:po,code:uo,caption:"setFocus()"}),e(h,{links:["field:setInvalid"]})]}),bo=`import { Form, Field } from '@/lib/index.js'

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

export default SetValueExample`,Fo=()=>{const[r,a]=f.useState(!1);return t(S,{children:[e(i,{children:e(l,{onLoad:a,name:"animal",label:"Animal"})}),t("div",{className:"flex gap-4",children:[e("button",{onClick:()=>r.setValue("Antelope"),children:"Antelope"}),e("button",{onClick:()=>r.setValue("Badger"),children:"Badger"}),e("button",{onClick:()=>r.setValue("Camel"),children:"Camel"})]})]})},go=`import { Form, Field } from '@/lib/index.js'

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

export default SetValueExample`,xo=()=>{const[r,a]=f.useState(!1);return e(S,{children:t(i,{children:[e(l,{onLoad:a,name:"animal",label:"Animal"}),t("div",{className:"flex gap-4",children:[e("button",{className:"green",onClick:d=>{d.preventDefault(),r.setValue("Antelope")},children:"Antelope"}),e("button",{className:"green",onClick:d=>r.setValue("Badger",d),children:"Badger"}),e("button",{type:"button",className:"green",onClick:()=>r.setValue("Camel"),children:"Camel"}),e("button",{onClick:()=>r.setValue("Danger!"),className:"red",children:"Danger!"})]})]})})},So=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Functions"}),e("h2",{children:e("code",{children:"setValue()"})}),t(c,{children:[t("p",{children:["The ",e("code",{children:"setValue()"})," method can be called on a field to set the value.  You can use ",e(q,{})," to capture a reference to the field context object"]}),e(m,{children:"Click on one of the buttons to set the field to have the corresponding value."})]}),e(o,{Element:Fo,code:bo,caption:"setValue()"}),e("h2",{children:"Beware Buttons That Submit!"}),t(c,{children:[t("div",{children:[t("p",{children:["One thing to be aware of is that the default behaviour of a"," ",e("code",{children:"button"})," inside a ",e("code",{children:"form"})," is to submit the form. This is an innate property of HTML and not something that's specific to this library.  In the example above we put the buttons outside the"," ",e(F,{})," to avoid this behaviour, but it's not always possible to do that. There are a number of ways to work around it, shown in the example below."]}),t("p",{children:['The first "Antelope" button calls the'," ",e("code",{children:"preventDefault()"})," "," method on the event.  Given that this is a bit clumsy, the ",e("code",{children:"setValue()"})," method allows you to pass the event as the second argument and it will call"," ",e("code",{children:"preventDefault()"}),' for you, as shown on the second "Badger" button.']})]}),t("div",{children:[t("p",{children:['The third approach, shown on the "Camel" button, is to explicitly set the ',e("code",{children:"type"})," to ",e("code",{children:"button"})," to override the default button ",e("code",{children:"type"})," of ",e("code",{children:"submit"}),"."," ",`The fourth "Danger!" button doesn't do anything and will cause the form to submit, just in case you don't believe me that it's really a problem.`]}),e(m,{children:"Click on one of the buttons to set the input value.  Be warned that the fourth button will cause the form to submit."})]})]}),e(o,{Element:xo,code:go,caption:"setValue()"}),t("p",{children:["You can also set values for one or more fields by name using the"," ",e(F,{})," ",e(qe,{})," method."]}),e(h,{links:["form:setValues","field:setFocus","field:reset"]})]}),Eo=()=>e(i,{children:e(l,{name:"field1",label:"Field One",children:t("div",{className:"field",children:[e(M,{}),e(Ae,{})]})})}),vo=`import { Form, Field, Text, Label } from '@/lib/index.js'

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

export default LabelExample`,wo=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Label"})}),t("p",{children:["The ",e("code",{children:"Label"})," component can be used to add a label to a"," ",e(p,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),e(o,{Element:Eo,code:vo,caption:"Label",expand:!0})]}),yo=()=>t(i,{children:[e(l,{name:"one",label:"Field One",help:"This has implicit layout"}),e(l,{name:"two",label:"Field Two",help:"This has explicit layout",children:e(V,{})})]}),To=`import { Form, Field, Layout } from '@/lib/index.js'

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

export default FormLayout`,Ro=()=>t(i,{children:[e(l,{name:"one",label:"Field One",help:"This is what the layout component does",required:!0,children:r=>t("div",{className:Le(r),children:[e(M,{}),e(z,{}),e(me,{})]})}),e(u,{})]}),Co=`import { Form, Field, Label, Input, Message, Submit, fieldClass } from '@/lib/index.js'

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

export default FormLayout`,No=({id:r,topping:a,selected:d,select:s})=>e("div",{children:t("label",{htmlFor:r,className:"checkbox",children:[e("input",{type:"checkbox",checked:d,onChange:s,id:r}),a]})}),ko=({id:r,toppings:a,selected:d,select:s})=>e("div",{className:"options",children:a.map(b=>e(No,{topping:b,id:`${r}-${b}`,selected:d[b]||!1,select:()=>s(b)},b))}),Oo=({value:r,free:a,price:d})=>e("div",{className:"summary",children:r.map((s,b)=>t("div",{className:"selected",children:[e("div",{children:s}),e("div",{children:b<a?"Free":d})]},s))}),Po=r=>r.reduce((a,d)=>(a[d]=!0,a),{}),qo=(r,a)=>d=>{r[d]=!r[d],a(Object.entries(r).filter(s=>s[1]).map(s=>s[0]))},Ao=()=>{const{id:r,value:a,onChange:d,free:s,price:b,toppings:v}=_(),A=Po(a),g=qo(A,d);return t("div",{className:"toppings field",children:[e("p",{className:"wide",children:"Select any extra toppings you want on your pizza."}),t("p",{className:"pricing wide",children:["The first ",s," are free. Any additional toppings are ",e("span",{className:"price",children:b})," each."]}),e(M,{}),t("div",{className:"selection",children:[e(ko,{id:r,toppings:v,value:a,selected:A,select:g}),e(Oo,{value:a,free:s,price:b})]})]})};const Lo={toppings:{Layout:Ao,label:"Pick your toppings",default:[],free:3,price:"£1.00",toppings:["Ham","Bacon","Onions","Sausage","Pepperoni","Mushrooms","Sweetcorn","Pineapple","Extra Cheese"]}},jo=()=>t(i,{fields:Lo,children:[e(l,{name:"toppings"}),e(E,{})]}),Do=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

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

export default PizzaForm`,Vo=`import { Label, useField } from '@/lib/index.js'
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
export default Toppings`,Io=`// convert the toppings array to an object
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
  }`,Bo=`import React from 'react'
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

export default Options`,Yo=`import React from 'react'

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

export default Option`,$o=`import React from 'react'

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

export default Summary`,Mo=`div.toppings {
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
}`,Uo=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Layout"})}),t("p",{children:["The ",e("code",{children:"Layout"})," component is inserted as the default content for a ",e(p,{})," that doesn't have it's own content."]}),t("p",{children:["The two fields in the example below both generate the same output. The first implicitly uses the ",e("code",{children:"Layout"})," for its content, the second includes it explicitly."]}),e(o,{Element:yo,code:To,caption:"Default Layout",expand:!0}),t(c,{children:[t("p",{children:["The ",e("code",{children:"Layout"})," component creates a ",e("code",{children:"div"})," containing the ",e(X,{}),", ",e(je,{})," and ",e(De,{})," components. The ",e("code",{children:"div"})," will have the ",e("code",{children:"field"})," CSS class and possibly other classes based on the state of the field (e.g."," ",e("code",{children:"valid"}),", ",e("code",{children:"invalid"}),", etc.)  The",e("code",{children:"fieldClass()"})," utility function can be used to automatically return the correct CSS classes for the field."]}),t("div",{children:[t("p",{children:["The example below shows how you can roll your own layout that does the same thing as the default ",e("code",{children:"Layout"})," component."]}),t(m,{children:["Try submitting the form without entering any value in the required field.  You should see that the ",e("code",{children:"invalid"})," CSS class is added to the field container."]})]})]}),e(o,{Element:Ro,code:Co,caption:"Explicit Layout",expand:!0}),e("h2",{children:"Custom Layout"}),t("p",{children:["You can define your own component to handle the layout for a field using the ",e("code",{children:"Layout"})," field property."]}),t(c,{children:[t("p",{children:["In this example we define a ",e("code",{children:"Toppings"})," layout component to render a field allowing a user to select some toppings for a pizza."]}),e(m,{children:"Before we go any further into the code, let's see how it looks. Select some toppings for your pizza!"})]}),e(o,{Element:jo,code:Do,caption:"Pizza Form",expand:!0}),e(c,{children:t("p",{children:["We're defining the schema for the ",e("code",{children:"fields"})," externally (lines 6 to 25) and passing them into the ",e("code",{children:"Form"})," as the"," ",e("code",{children:"fields"})," property (line 28). In addition to setting the ",e("code",{children:"Layout"})," component on line 8, we're also defining some extra data that the field will require: the number of ",e("code",{children:"free"})," toppings (line 11), the"," ",e("code",{children:"price"})," of additional toppings after that (line 12), and a list of available ",e("code",{children:"toppings"})," (lines 13 to 23).  This is the kind of data that we want defined up front and not buried in the form markup."]})}),t("h2",{children:["The ",e("code",{children:"Toppings"})," Component"]}),t("p",{children:["Here's the implementation of the ",e("code",{children:"Toppings"})," component."]}),t(c,{children:[e(x,{code:R(Vo),caption:"Toppings",expand:!0}),t("div",{children:[t("p",{children:["On line 8 we call ",e("code",{children:"useField()"})," to get the current field"," ","context.  As well as the ",e("code",{children:"id"}),", ",e("code",{children:"value"})," and"," ",e("code",{children:"onChange"})," function to set the value, we're also getting our additional data fields: ",e("code",{children:"free"}),", ",e("code",{children:"price"})," and"," ",e("code",{children:"toppings"}),"."]}),t("p",{children:["We've got two utility functions that we're importing from our ",e("code",{children:"Utils.js"})," file.  On line 9 we call"," ",e("code",{children:"selectedToppings()"})," to convert the array of toppings in"," ",e("code",{children:"value"})," into an object so we can easily tell which toppings are selected (each selected topping will be set ",e("code",{children:"true"}),"). On line 10 we call the ",e("code",{children:"toppingSelector()"})," factory function which returns a function for selecting a topping (or unselecting one that's already selected) and calling the ",e("code",{children:"onChange"})," handler to update the field.  We'll look at the definitions of those functions shortly."]}),t("p",{children:["We have some explanatory text from lines 14 to 20.  Note how this includes the ",e("code",{children:"free"})," and ",e("code",{children:"price"})," values defined in our field schema. On line 21 we render the default ",e(X,{})," ","component to generate the field label. On line 23 we render a custom"," ",e("code",{children:"Options"})," component and on line 27 a custom"," ",e("code",{children:"Summary"})," component."]})]})]}),e("h2",{children:"Utility Functions"}),e("p",{children:"Here's the definitions for those utility functions."}),e(x,{code:R(Io),caption:"Utils.js",expand:!0}),t("h2",{children:["The ",e("code",{children:"Options"})," Component"]}),t("p",{children:["The ",e("code",{children:"Options"})," component iterates over the available toppings and renders the ",e("code",{children:"Option"})," component for each.  It passes a custom ",e("code",{children:"id"}),", ",e("code",{children:"selected"})," flag and"," ",e("code",{children:"select"})," function tailored to each option."]}),e(x,{code:R(Bo),caption:"Options.jsx",expand:!0}),t("h2",{children:["The ",e("code",{children:"Option"})," Component"]}),t("p",{children:["The ",e("code",{children:"Option"})," component simply renders a checkbox in a label using those properties."]}),e(x,{code:R(Yo),caption:"Option.jsx",expand:!0}),t("h2",{children:["The ",e("code",{children:"Summary"})," Component"]}),t("p",{children:["The ",e("code",{children:"Summary"})," component displays a summary of the selected toppings."]}),e(x,{code:R($o),caption:"Summary.jsx",expand:!0}),e("h2",{children:"Additional Styles"}),e("p",{children:"And finally, here's the additional SCSS we're using to apply the styling."}),e(x,{code:Mo,caption:"pizza.scss",language:"css",expand:!0})]}),Go=()=>e(i,{children:e(l,{name:"one",children:t("div",{className:"field flex baseline gap-2",children:[e("label",{children:"Label on the left"}),e(z,{})]})})}),Wo=`import { Form, Field, Input } from '@/lib/index.js'

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

export default FormInput`,Ho="/react-formula/badger.jpg",zo="/react-formula/kitten.jpg",_o="/react-formula/gorilla.jpg",Ko={badger:Ho,kitten:zo,gorilla:_o},Jo=({animal:r,select:a,selected:d})=>e("div",{className:`animal ${d?"selected":""}`,onClick:a,children:e("img",{src:Ko[r],width:"120",height:"120",alt:r})}),Xo=["badger","gorilla","kitten"],Zo=()=>{const{value:r,onChange:a}=_();return e("div",{className:"animals",children:Xo.map(d=>e(Jo,{animal:d,selected:r===d,select:()=>a(d)},d))})};const Qo=()=>t(i,{children:[e(l,{name:"animal",label:"Pick an animal guide",requiredMessage:"You must pick an animal",required:!0,Input:Zo}),e(E,{reset:{className:"outline"},submit:{className:"blue"}})]}),ei=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

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

export default PictureForm`,ti=`import { useField } from '@/lib/index.js'
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

export default PictureInput`,li=`import badgerUrl  from '/badger.jpg'
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

export default Picture`,ri=`div.animals {
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
}`,oi=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Input"})}),t("p",{children:["The ",e("code",{children:"Input"})," component is included by the ",e(j,{})," ","component to render the input for a field."]}),t("p",{children:["You can define your own content for a field to replace the default"," ",e(j,{}),", but still use the default ",e("code",{children:"Input"})," component to render the correct input for the field type."]}),e(o,{Element:Go,code:Wo,caption:"Default Input",expand:!0}),e("h2",{children:"Custom Input"}),t("p",{children:["You can define your own component to handle the input for a field using the ",e("code",{children:"Input"})," field property."]}),t(c,{children:[e("div",{children:t("p",{children:["In this example we define a ",e("code",{children:"PictureInput"})," component to show some pictures of animals for the user to select an animal guide from.  We're still using the default field layout which provides us with the label and validation message."]})}),e(m,{children:"Click on an animal to select it. Try submitting the form without selecting an animal to see the validation error message in effect."})]}),e(o,{Element:Qo,code:ei,caption:"Picture Form",expand:!0}),t("h2",{children:["The ",e("code",{children:"PictureInput"})," Component"]}),t(c,{children:[e(x,{code:R(ti),caption:"PictureInput",expand:!0}),t("div",{children:[t("p",{children:["Here's the implementation of the ",e("code",{children:"PictureInput"})," component."]}),t("p",{children:["On line 8 we call ",e("code",{children:"useField()"})," to get the current field"," ",e("code",{children:"value"})," and the ",e("code",{children:"onChange"})," function to set the value.  We iterate over a list of animals on line 11 and render the"," ",e("code",{children:"Picture"})," component for each.  We pass the ",e("code",{children:"selected"})," ","flag on line 16 to indicate if the animal name matches the current"," ",e("code",{children:"value"}),".  We also pass a ",e("code",{children:"select"})," ","function on line 17 which calls the ",e("code",{children:"onChange"})," handler to select the animal."]})]})]}),t("h2",{children:["The ",e("code",{children:"Picture"})," Component"]}),t(c,{children:[e(x,{code:R(li),caption:"Picture",expand:!0}),t("p",{children:["Here's the ",e("code",{children:"Picture"})," component.  It simply renders a ",e("code",{children:"div"})," with an ",e("code",{children:"onClick"})," handler to call the ",e("code",{children:"select"})," function passed as a property.  The"," ",e("code",{children:"animal"})," CSS class is added, along with ",e("code",{children:"selected"})," ","if the animal is currently selected.  Inside the ",e("code",{children:"div"})," we render a picture of the animal in an ",e("code",{children:"img"})," element."]})]}),e("h2",{children:"Additional Styles"}),t(c,{children:[e(x,{code:ri,caption:"animals.css",language:"css",expand:!0}),e("p",{children:"For completeness, here's the additional CSS we're using to apply the styling."})]}),e("h2",{className:"hint",children:"Picture Credits"}),t("ul",{className:"credits",children:[t("li",{children:["Badger photo by ",e("a",{href:"https://unsplash.com/es/@vincentvanzalinge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Vincent van Zalinge"})," on ",e("a",{href:"https://unsplash.com/photos/jd8s5zhWEug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),t("li",{children:["Gorilla photo by ",e("a",{href:"https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Kelly Sikkema"})," on ",e("a",{href:"https://unsplash.com/images/animals/monkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),t("li",{children:["Kitten photo by ",e("a",{href:"https://unsplash.com/@feneek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Sergey Semin"})," on ",e("a",{href:"https://unsplash.com/images/animals/kitten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})]}),ii=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",help:"Additional help message",validMessage:"This is fine!",requiredMessage:"You must enter a value",required:!0,children:t(V,{children:[e(M,{}),e(z,{}),e(me,{})]})}),e(u,{})]}),ai=`import { Form, Field, Layout, Label, Input, Message, Submit } from '@/lib/index.js'

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

export default MessageExample`,ni=()=>{const{message:r,help:a}=_();return e("div",{className:"small bold mar-t-2 fgc-40 fgd-60",children:r??a})},di=()=>t(i,{children:[e(l,{name:"field1",label:"Field One",help:"Enter a value",validMessage:"This is fine!",requiredMessage:"You must enter a value",Message:ni,required:!0}),e(u,{})]}),si=`import { Form, Field, Submit, useField } from '@/lib/index.js'

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

export default MessageExample`,ci=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"Message"})}),t("p",{children:["The ",e("code",{children:"Message"})," component is used to add a message underneath a ",e(p,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),t(c,{children:[t("p",{children:["If you have defined ",e("code",{children:"help"})," for your field then it will be displayed here.  If the field fails to validate then the validation error message will be displayed.  In this example we're setting an explicit ",e("code",{children:"requiredMessage"})," to override the default message. We're also setting a ",e("code",{children:"validMessage"})," to provide a custom message if the field is valid."]}),t(m,{children:["Try submitting the form without entering a value.  You should see the ",e("code",{children:"help"})," message be replaced by the"," ",e("code",{children:"requiredMessage"})," error message."]})]}),e(o,{Element:ii,code:ai,caption:"Message",expand:!0}),e("h2",{children:"Custom Message Component"}),t("p",{children:["You can define your own component to handle the message for a field using the ",e("code",{children:"Message"})," field property."]}),e(o,{Element:di,code:si,caption:"Custom Message Component",expand:!0})]}),mi=()=>e(i,{children:t(l,{name:"hello",label:"Enter a greeting",children:[e(V,{}),r=>t("div",{className:"info alert",children:["You have entered: ",r.value]})]})}),hi=`import { Form, Field, Layout } from '@/lib/index.js'

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

export default FieldChildrenExample`,ui=()=>e(i,{children:t(l,{name:"hello",label:"Enter a greeting",children:[e(V,{}),e("div",{className:"info alert",children:e($e,{children:r=>`You have entered: ${r.value}`})})]})}),pi=`import { Form, Field, Layout, UseField } from '@/lib/index.js'

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

export default UseFieldExample`,fi=()=>t("div",{className:"prose",children:[e("h1",{children:"Field Components"}),e("h2",{children:e("code",{children:"UseField"})}),t("p",{children:["The immediate ",e(Ve,{})," of a ",e(p,{})," component can be functions that will receive the field context as the first argument."]}),e(o,{Element:mi,code:hi,caption:"Field Children",expand:!0}),t("p",{children:["However, this only works for the immediate children of the ",e(p,{}),". If you want to include a function that is nested inside another element (e.g. inside a ",e("code",{children:"div"})," as shown in this example) then you can use the ",e("code",{children:"UseForm"})," component to provide it."]}),t("p",{children:["Don't forget that defining any children of a ",e(p,{})," component will override the default ",e(j,{})," component, so you'll need to add it manually or define your own layout for the field."]}),e(o,{Element:ui,code:pi,caption:"UseField",expand:!0})]}),bi=()=>t(H,{children:[e(n,{path:"",end:!0,element:e(nl,{})}),t(n,{path:"properties",children:[e(n,{path:"children",element:e(cl,{})}),e(n,{path:"help",element:e(ul,{})}),e(n,{path:"label",element:e(xl,{})}),e(n,{path:"name",element:e(Tl,{})}),e(n,{path:"placeholder",element:e(Ll,{})}),e(n,{path:"prefix",element:e(Vl,{})}),e(n,{path:"suffix",element:e(Ml,{})}),e(n,{path:"type",element:e(Pl,{})}),e(n,{path:"wide",element:e(zl,{})})]}),t(n,{path:"validation",children:[e(n,{path:"minValidateLength",element:e(Zl,{})}),e(n,{path:"optionalLabel",element:e(tr,{})}),e(n,{path:"prepareValue",element:e(ir,{})}),e(n,{path:"required",element:e(dr,{})}),e(n,{path:"requiredLabel",element:e(mr,{})}),e(n,{path:"requiredMessage",element:e(pr,{})}),e(n,{path:"showOptional",element:e(Fr,{})}),e(n,{path:"showRequired",element:e(vr,{})}),e(n,{path:"validate",element:e(kr,{})}),e(n,{path:"validateOnBlur",element:e(Ar,{})}),e(n,{path:"validateOnChange",element:e(Vr,{})}),e(n,{path:"validateOnInvalid",element:e(Ir,{})})]}),t(n,{path:"events",children:[e(n,{path:"onBlur",element:e($r,{})}),e(n,{path:"onChange",element:e(Gr,{})}),e(n,{path:"onFocus",element:e(zr,{})}),e(n,{path:"onInvalid",element:e(Jr,{})}),e(n,{path:"onLoad",element:e(Qr,{})}),e(n,{path:"onValid",element:e(lo,{})})]}),t(n,{path:"functions",children:[e(n,{path:"Reset",element:e(io,{})}),e(n,{path:"setFocus",element:e(so,{})}),e(n,{path:"setInvalid",element:e(ho,{})}),e(n,{path:"setValid",element:e(fo,{})}),e(n,{path:"setValue",element:e(So,{})})]}),t(n,{path:"components",children:[e(n,{path:"Input",element:e(oi,{})}),e(n,{path:"Layout",element:e(Uo,{})}),e(n,{path:"Label",element:e(wo,{})}),e(n,{path:"Message",element:e(ci,{})}),e(n,{path:"UseField",element:e(fi,{})})]})]}),Fi={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},gi=()=>t(i,{fields:Fi,children:[e(T,{names:["name","message"]}),e(T,{names:"badgers animal"})]}),xi=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,Si={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},Ei=()=>e(i,{fields:Si,children:e(T,{names:"name email",grid:2})}),vi=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,wi={one:{label:"One"},two:{label:"Two"},three:{label:"Three"}},yi=()=>e(i,{fields:wi,children:e(T,{names:"one two three",grid:!0})}),Ti=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,Ri={forename:{label:"First Name",required:!0},surname:{label:"Surname",required:!0},company:{label:"Company",required:!0},job_title:{label:"Job Title",required:!0}},Ci=()=>e(i,{fields:Ri,children:e(T,{names:"forename surname company job_title",grid:2,gap:8})}),Ni=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,ki={alpha:{label:"Alpha"},bravo:{label:"Bravo"},charlie:{label:"Charlie"},delta:{label:"Delta"},echo:{label:"Echo"},foxtrot:{label:"Foxtrot"}},Oi=()=>e(i,{fields:ki,children:e(T,{names:"alpha bravo charlie delta echo foxtrot",grid:3,stack:"tablet"})}),Pi=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,qi={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},Ai=()=>e(i,{fields:qi,children:e(T,{names:"name email",className:"border pad-4 bgc-95 bgd-5 bdr-2"})}),Li=`import { Form, Fields } from '../../../../../lib/index.js'

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
`,ji=()=>t("div",{className:"prose",children:[e("h1",{children:"Fields"}),t("p",{children:["The ",e("code",{children:"Fields"})," component can be used to render multiple fields."]}),e("p",{children:"This is a shortcut for convenience, but it depends on you having all your form fields defined in a separate schema so you can reference them only by name."}),t("p",{children:["The ",e("code",{className:"code",children:"names"})," property should be used to specify the list of field names either as an array of strings, or a single string containing a whitespace-delimited list of field names. The ",e("code",{className:"code",children:"Fields"})," component renders each of the fields, collected together in a single"," ",e("code",{className:"code",children:"div"})," element"]}),e(o,{Element:gi,code:xi,caption:"Fields"}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be set to add a CSS class to the fields container."]}),e(o,{Element:Ai,code:Li,caption:"Fields Class"}),e("h2",{children:e("code",{children:"grid"})}),t("p",{children:["The ",e("code",{children:"grid"})," property can be used to layout the fields in a grid.  Set the property to the number of columns you want.  The default gap between the fields will be 1rem (using the"," ",e("code",{children:"gap-h-4"})," utility class provided by"," ",e("a",{href:"https://abw.github.io/badger-css/utilities/grid",children:"Badger-CSS"}),")."]}),e(o,{Element:Ei,code:vi,caption:"Fields in a Grid"}),t("p",{children:["You can also specify ",e("code",{children:"grid"})," as the boolean value"," ",e("code",{children:"true"})," (which React will conveniently set for you if you include it as a valueless property) and it will automatically select the correct number of columns based on how many fields it is rendering."]}),e(o,{Element:yi,code:Ti,caption:"Automatic Grid Columns"}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set a custom horizontal gap between fields.  The value should be an integer number of margin units of 0.25rem."]}),e(o,{Element:Ci,code:Ni,caption:"Fields With a Gap"}),e("h2",{children:e("code",{children:"stack"})}),t("p",{children:["The ",e("code",{children:"stack"})," property can be used to define a stacking breakpoint.  This will add the corresponding ",e("code",{children:"stack-XXX"})," CSS class.  Try resizing your browser window to see the effect.  With a width of less than 800px, the fields will be stacked, otherwise they will be displayed in three columns."]}),e(o,{Element:Oi,code:Pi,caption:"Stacking Fields"})]}),Di=()=>e(i,{children:t(U,{legend:"Fieldset One",children:[e(l,{name:"one",label:"Field One"}),e(l,{name:"one",label:"Field Two"})]})}),Vi=`import { Form, Field, Fieldset } from '../../../../../lib/index.js'

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
`,Ii={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},Bi=()=>e(i,{fields:Ii,children:e(U,{legend:"Fieldset Two",fields:"name message"})}),Yi=`import { Form, Fieldset } from '../../../../../lib/index.js'

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
`;const $i={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},Mi=()=>e(i,{fields:$i,children:e(U,{legend:"Fieldset Two",fields:"name message",className:"prominent"})}),Ui=`import { Form, Fieldset } from '../../../../../lib/index.js'

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
`,Gi={alpha:{label:"Alpha"},bravo:{label:"Bravo"},charlie:{label:"Charlie"},delta:{label:"Delta"},echo:{label:"Echo"},foxtrot:{label:"Foxtrot"}},Wi=()=>e(i,{fields:Gi,children:e(U,{legend:"Fieldset Grid",fields:"alpha bravo charlie delta echo foxtrot",grid:2,stack:"laptop"})}),Hi=`import { Form, Fieldset } from '../../../../../lib/index.js'

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
`,zi=`fieldset.prominent {
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
}`,_i=()=>t("div",{className:"prose",children:[e("h1",{children:"Fieldset"}),t("p",{children:["The ",e("code",{children:"Fieldset"})," component can be used to create a field set.  The ",e("code",{children:"legend"})," property should be used to set the legend."]}),e(o,{Element:Di,code:Vi,caption:"Fieldset",expand:!0}),e("h2",{children:e("code",{children:"fields"})}),t("p",{children:["The ",e("code",{children:"fields"})," property can be used as a shortcut to render a set of named fields using the"," ",e(Z,{})," component."]}),e(o,{Element:Bi,code:Yi,caption:"Fieldset fields",expand:!0}),t("h2",{children:[e("code",{children:"grid"}),", ",e("code",{children:"gap"})," and ",e("code",{children:"stack"})]}),t("p",{children:["Any other properties are forwarded onto the ",e(Z,{})," component. For example, you can set the ",e("code",{children:"grid"}),", ",e("code",{children:"gap"})," and"," ",e("code",{children:"stack"})," properties to set the layout to implement a grid layout."]}),e(o,{Element:Wi,code:Hi,caption:"Fieldset Grid",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to add a CSS class to the fieldset container."]}),e(o,{Element:Mi,code:Ui,caption:"Fieldset className",expand:!0}),e("h2",{children:"Additional Styles"}),e("p",{children:"For completeness, here's the additional CSS we're using to apply the styling in the above example."}),e(x,{code:zi,caption:"fieldset.scss",language:"css",expand:!0})]}),Ki=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(u,{})]}),Ji=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitExample = () =>
  <Form showRequired>
    <Field name="one"   label="Field one"/>
    <Field name="two"   label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample`,Xi=()=>t(i,{children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two"}),e(u,{className:"btn-blue",text:"Save Changes"})]}),Zi=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const SubmitProps = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit className="btn-blue" text="Save Changes"/>
  </Form>

export default SubmitProps`,Qi=`import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnSubmit = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <Submit/>
  </Form>

export default OnSubmit`,ea=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(u,{})]}),ta=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default OnClick`,la=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(u,{onClick:r=>{r.preventDefault(),window.alert("The form submission was intercepted!")}})]}),ra=()=>t("div",{className:"prose",children:[e("h1",{children:"Submit"}),t(c,{children:[t("p",{children:["The ",e("code",{children:"Submit"})," component can be used to add a button which will submit the form.  See the"," ",e(C,{to:"/components/form/validation",text:"validation page"})," for information on how the form data is validated and the"," ",e(re,{})," component for details on how validation errors are displayed and can be customised."]}),e(m,{children:"Try entering some text in the fields below then click on the Submit button."})]}),e(o,{Element:Ki,code:Ji,caption:"Submit",expand:!0}),e("h2",{children:e("code",{children:"text"})}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(o,{Element:Xi,code:Zi,caption:"Properties",expand:!0}),e("h2",{children:e("code",{children:"onClick"})}),t("p",{children:["You can use the ",e("code",{children:"onClick"})," property to handle a click on the button.  You will need to call ",e("code",{children:"preventDefault()"})," on the event if you want to stop the form from being submitted."]}),e(o,{Element:la,code:ta,caption:"onClick",expand:!0}),e("h2",{children:e("code",{children:"onSubmit"})}),t("p",{children:["The default behaviour for the button is to submit the form. You can use the ",e(Ie,{})," form property to handle the submission."]}),e(o,{Element:ea,code:Qi,caption:"onSubmit",expand:!0})]}),oa=`import { Form, Field, Reset } from '../../../../../lib/index.js'

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

export default ResetExample`,ia=()=>t(i,{values:{three:"The third field"},children:[e(l,{name:"one",label:"Field one"}),e(l,{name:"two",label:"Field two with default value",default:"Badger"}),e(l,{name:"three",label:"Field three with pre-defined form value"}),e(N,{})]}),aa=()=>t(i,{children:[e(l,{name:"one",label:"Field one"}),e(N,{className:"btn-brown",text:"Reset the form"})]}),na=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const Properties = () =>
  <Form>
    <Field name="one" label="Field one"/>
    <Reset className="btn-brown" text="Reset the form"/>
  </Form>

export default Properties`,da=`import { Form, Field, Reset } from '../../../../../lib/index.js'

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

export default OnClick`,sa=()=>t(i,{onReset:()=>alert("form has been reset"),children:[e(l,{name:"field1",label:"Field One"}),e(N,{onClick:()=>window.alert("Reset was intercepted")})]}),ca=`import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const OnReset = () =>
  <Form onReset={() => alert('form has been reset')}>
    <Field name="field1" label="Field One"/>
    <Reset/>
  </Form>

export default OnReset`,ma=()=>t(i,{onReset:()=>alert("form has been reset"),children:[e(l,{name:"field1",label:"Field One"}),e(N,{})]}),ha=()=>t("div",{className:"prose",children:[e("h1",{children:"Reset"}),t(c,{children:[t("p",{children:["The ",e("code",{children:"Reset"})," component can be used to add a reset button which will reset the form to its initial state.  Any"," ",e("code",{children:"values"})," defined on the ",e(F,{})," will be restored. Any fields that have a ",e("code",{children:"default"})," value will be reset to that value."]}),e(m,{children:"Try entering some text in the fields below then click on the Reset button.  You should see the fields reset to their original state."})]}),e(o,{Element:ia,code:oa,caption:"Reset",expand:!0}),e("h2",{children:e("code",{children:"text"})}),t("p",{children:["You can use the ",e("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",e("code",{children:"className"}),"."]}),e(o,{Element:aa,code:na,caption:"Properties",expand:!0}),e("h2",{children:e("code",{children:"onClick"})}),t("p",{children:["You can use the ",e("code",{children:"onReset"})," property to register a function that should be called when the form is reset."]}),e(o,{Element:sa,code:da,caption:"onClick",expand:!0}),e("h2",{children:e("code",{children:"onReset"})}),t("p",{children:["The default behaviour for the button is to reset the form. You can use the ",e(Be,{})," form property to register a function that will be called when the form is reset."]}),e(o,{Element:ma,code:ca,caption:"onReset",expand:!0})]}),ua=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(he,{})]}),pa=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Cancel } from '@abw/react-formula'

const CancelExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Cancel/>
  </Form>

export default CancelExample`,fa=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(he,{text:"Go Back",className:"btn-brown",onClick:()=>alert("Cancel button was clicked")})]}),ba=`import { Form, Field, Cancel } from '../../../../../lib/index.js'

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

export default CancelExample`,Fa=()=>t("div",{className:"prose",children:[e("h1",{children:"Cancel"}),t(c,{children:[t("p",{children:["The ",e("code",{children:"Cancel"})," component can be used to add a Cancel button. This doesn't do anything to the form but it's common to provide a button in a form to allow a user to cancel an edit or go back."]}),t(m,{children:["Don't be surprised that the Cancel button doesn't do anything in this example.  We need to add an ",e("code",{children:"onClick"})," handler to make it useful. See the next example."]})]}),e(o,{Element:ua,code:pa,caption:"Cancel",expand:!0}),t("p",{children:["The ",e("code",{children:"text"})," property will set the text for the button. The ",e("code",{children:"className"})," property can be used to add a CSS class.  The ",e("code",{children:"onClick"})," property should be used to define a handler to do something when the button is clicked."]}),e(o,{Element:fa,code:ba,caption:"Properties",expand:!0})]}),ga=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(I,{})]}),xa=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit/>
  </Form>

export default CancelSubmitExample`,Sa=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(I,{gap:8})]}),Ea=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit gap={8}/>
  </Form>

export default CancelSubmitGap`,va=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(I,{space:!0})]}),wa=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit space/>
  </Form>

export default CancelSubmitSpace`,ya=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(I,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),Ta=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

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

export default CancelSubmitClassName`,Ra=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(I,{submit:{text:"Continue",className:"green"},cancel:{text:"Go Back",className:"outline",onClick:()=>alert("You went back")},space:!0})]}),Ca=`import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

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

export default CancelSubmitExample`,Na=()=>t("div",{className:"prose",children:[e("h1",{children:"CancelSubmit"}),t("p",{children:["The ",e("code",{children:"CancelSubmit"})," component can be used to add both"," ",e(Y,{})," and ",e(k,{})," controls."]}),e(o,{Element:ga,code:xa,caption:"CancelSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(o,{Element:Sa,code:Ea,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(o,{Element:va,code:wa,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(o,{Element:ya,code:Ta,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(Y,{})," component using the ",e("code",{children:"cancel"})," property, and for the ",e(k,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(o,{Element:Ra,code:Ca,caption:"Properties",expand:!0})]}),ka=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(B,{})]}),Oa=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit/>
  </Form>

export default CancelResetSubmitExample`,Pa=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(B,{gap:8})]}),qa=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit gap={8}/>
  </Form>

export default CancelResetSubmitGap`,Aa=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(B,{space:!0})]}),La=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit space/>
  </Form>

export default CancelResetSubmitSpace`,ja=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(B,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),Da=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

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

export default CancelResetSubmitClassName`,Va=()=>t(i,{onSubmit:()=>alert("You submitted the form"),children:[e(l,{name:"field1",label:"Field One"}),e(B,{submit:{text:"Continue",className:"green"},reset:{text:"Restart",className:"brown"},cancel:{text:"Go Back",className:"outline",onClick:()=>alert("You went back")},space:!0})]}),Ia=`import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

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

export default CancelResetSubmitExample`,Ba=()=>t("div",{className:"prose",children:[e("h1",{children:"CancelResetSubmit"}),t("p",{children:["The ",e("code",{children:"CancelResetSubmit"})," component can be used to add all three ",e(Y,{}),", ",e($,{})," and ",e(k,{})," controls in one fell swoop."]}),e(o,{Element:ka,code:Oa,caption:"CancelResetSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(o,{Element:Pa,code:qa,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(o,{Element:Aa,code:La,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(o,{Element:ja,code:Da,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"cancel"}),", ",e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e(Y,{})," component using the ",e("code",{children:"cancel"})," property, for the ",e($,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(k,{})," ","component using the ",e("code",{children:"submit"})," property.  You can add a"," ",e("code",{children:"className"})," property to set the CSS class of the container."]}),e(o,{Element:Va,code:Ia,caption:"Properties",expand:!0})]}),Ya=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(E,{})]}),$a=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit/>
  </Form>

export default ResetSubmitExample`,Ma=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(E,{gap:8})]}),Ua=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitGap = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit gap={8}/>
  </Form>

export default ResetSubmitGap`,Ga=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(E,{space:!0})]}),Wa=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit space/>
  </Form>

export default ResetSubmitSpace`,Ha=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(E,{className:"flex space bgc-90 bgd-10 border bdr-2 pad-4"})]}),za=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

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

export default ResetSubmitClassName`,_a=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(E,{reset:{text:"Reset the Form",className:"outline"},submit:{text:"Submit the Form",className:"blue"},space:!0})]}),Ka=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

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

export default ResetSubmitExample`,Ja=()=>t("div",{className:"prose",children:[e("h1",{children:"ResetSubmit"}),t("p",{children:["The ",e("code",{children:"ResetSubmit"})," component can be used to add both"," ",e($,{})," and ",e(k,{})," controls."]}),e(o,{Element:Ya,code:$a,caption:"ResetSubmit",expand:!0}),e("h2",{children:e("code",{children:"gap"})}),t("p",{children:["The default CSS class for the container is ",e("code",{children:"flex gap-4 controls"}),". The ",e("code",{children:"flex"})," and ",e("code",{children:"gap-4"})," classes are provided by ",e("a",{href:"https://abw.github.io/badger-css/utilities/flexbox",children:"Badger-CSS"})," and set the display to ",e("code",{children:"flex"})," and the ",e("code",{children:"gap"})," to 4 units (1rem), respectively.  The ",e("code",{children:"controls"})," CSS class doesn't have any styling by default, but you can add your own CSS rules to target it if you want to."]}),t("p",{children:["The ",e("code",{children:"gap"})," property can be used to set the gap between the buttons in multiple of 0.25rem."]}),e(o,{Element:Ma,code:Ua,caption:"Setting the Gap",expand:!0}),e("h2",{children:e("code",{children:"space"})}),t("p",{children:["The ",e("code",{children:"space"})," property can be used to add the ",e("code",{children:"space"})," ","CSS class which set the ",e("code",{children:"justify-content"})," to ",e("code",{children:"space-between"}),", effectively pushing the buttons out to the full width of the container."]}),e(o,{Element:Ga,code:Wa,caption:"Spacing Buttons",expand:!0}),e("h2",{children:e("code",{children:"className"})}),t("p",{children:["The ",e("code",{children:"className"})," property can be used to define your own CSS classes for the container."]}),e(o,{Element:Ha,code:za,caption:"Custom ClassName",expand:!0}),t("h2",{children:[e("code",{children:"reset"})," and ",e("code",{children:"submit"})]}),t("p",{children:["You can define properties for the ",e($,{})," component using the ",e("code",{children:"reset"})," property, and for the ",e(k,{})," ","component using the ",e("code",{children:"submit"})," property."]}),e(o,{Element:_a,code:Ka,caption:"Properties",expand:!0})]}),Xa=()=>t(i,{children:[e(l,{name:"field1",label:"Field One"}),e(l,{name:"field2",label:"Field Two",value:"Hello World!"}),e(Ye,{children:e(E,{space:!0,reset:{className:"outline"},submit:{className:"blue"}})})]}),Za=`import { Form, Field, Changed, ResetSubmit } from '../../../../lib/index.js'

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

export default ChangedExample`,Qa=()=>t("div",{className:"prose",children:[e("h1",{children:"Changed"}),t(c,{children:[t("div",{children:[t("p",{children:["The ",e("code",{children:"Changed"})," component will only render its child components when the form state has changed."]}),e("p",{children:'A typical example is shown below.  The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field.'})]}),t(m,{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})]}),e(o,{Element:Xa,code:Za,caption:"Changed",expand:!0})]}),en=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(u,{})]}),tn=`import { Form, Field, Submit } from '../../../../../lib/index.js'

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

export default RequiredExample`,ln=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(w,{}),e(u,{})]}),rn=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

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

export default RequiredExample`,on=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(w,{title:"Form Submission Failed"}),e(u,{})]}),an=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const ErrorsTitle = () =>
  <Form showRequired>
    <Field name="one"   label="Field one" required/>
    <Errors title="Form Submission Failed"/>
    <Submit/>
  </Form>

export default ErrorsTitle`,nn=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(w,{title:r=>r===1?"There is an error":`There are ${r} errors`}),e(u,{})]}),dn=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

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

export default ErrorsTitle`,sn=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(w,{prompt:"You shall not pass!"}),e(u,{})]}),cn=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const ErrorsHeadline = () =>
  <Form showRequired>
    <Field name="one" label="Field one" required/>
    <Errors prompt="You shall not pass!"/>
    <Submit/>
  </Form>

export default ErrorsHeadline`,mn=()=>t(i,{showRequired:!0,children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(w,{prompt:r=>r===1?"Please correct this error":`Please correct these ${r} errors`}),e(u,{})]}),hn=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

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

export default ErrorsTitle`,un=()=>t(i,{errorsTitle:"Custom Errors Title",errorsPrompt:"Custom errors prompt",children:[e(l,{name:"one",label:"Field one",required:!0}),e(l,{name:"two",label:"Field two",required:!0}),e(l,{name:"three",label:"Field three"}),e(w,{}),e(u,{})]}),pn=`import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const FormOptions = () =>
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

export default FormOptions`,fn=()=>t(i,{children:[e(w,{}),e(bn,{}),e(N,{})]}),bn=()=>{const{handleError:r}=P(),a=(v,A)=>{v.preventDefault(),r({error:A})};return t("div",{className:"grid-3 gap-4 mar-b-4",children:[e("button",{onClick:v=>a(v,"An error string"),children:"Error String"}),e("button",{onClick:v=>a(v,{message:"An error object with a message"}),children:"Error Object"}),e("button",{onClick:v=>a(v,{label:"Example",message:"An error object with label and message"}),children:"Labelled Error"})]})},Fn=`import { Form, Errors, Reset, useForm } from '../../../../../lib/index.js'

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

export default Error`,gn=()=>t(i,{children:[e(l,{name:"one",label:"Field One"}),e(l,{name:"two",label:"Field Two"}),e(w,{}),e(xn,{}),e(N,{})]}),xn=()=>{const{handleError:r}=P(),a=(g,ue)=>{g.preventDefault(),r({errors:ue})};return t("div",{className:"grid-2 gap-4 mar-b-4",children:[e("button",{onClick:g=>a(g,["A single error in errors"]),children:"Error String"}),e("button",{onClick:g=>a(g,["An error string","Another error string"]),children:"Error Strings"}),e("button",{onClick:g=>a(g,[{message:"An error message in an object"},{message:"Another error message in an object"}]),children:"Error Objects"}),e("button",{onClick:g=>a(g,[{label:"The First Field",message:"This is a labelled error"},{label:"The Second Field",message:"Another labelled error"}]),children:"Labelled Errors"}),e("button",{onClick:g=>a(g,[{name:"one",message:'An error for the "one" field'},{field:"two",message:'An error for the "two" field'}]),children:"Field Errors"})]})},Sn=`import { Form, Field, Errors, Reset, useForm } from '../../../../../lib/index.js'

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

export default ErrorsExample`,En=()=>t("div",{className:"prose flow",children:[e("h1",{children:"Errors"}),t(c,{align:"end",children:[e("div",{children:t("p",{children:["By default, validation errors will be displayed against the corresponding fields. In this example the first two fields are marked as"," ",e("code",{children:"required"}),".  A validation error will be raised for them if the form is submitted without a value being entered."]})}),e(m,{children:e("p",{children:"Try submitting the form below without entering anything for either of the first two fields."})})]}),e(o,{Element:en,code:tn,caption:"Required Fields",expand:!0}),e("h2",{children:e("code",{children:"Errors"})}),t("p",{children:["The ",e("code",{children:"Errors"})," component can be included anywhere inside the form to display field validation errors or more general errors."]}),e(o,{Element:ln,code:rn,caption:"Errors",expand:!0}),e("h2",{children:e("code",{children:"title"})}),t("p",{children:["The ",e("code",{children:"title"})," property can be passed to set a custom title."]}),e(o,{Element:on,code:an,caption:"Errors Title",expand:!0}),t("p",{children:["The ",e("code",{children:"title"})," property can also be a function which will be passed the number of errors."]}),e(o,{Element:nn,code:dn,caption:"Errors Title Function",expand:!0}),e("h2",{children:e("code",{children:"prompt"})}),t("p",{children:["The ",e("code",{children:"prompt"})," property can be passed to set a custom prompt."]}),e(o,{Element:sn,code:cn,caption:"Errors Prompt",expand:!0}),t("p",{children:["The ",e("code",{children:"prompt"})," property can also be a function which will be passed the number of errors."]}),e(o,{Element:mn,code:hn,caption:"Errors Prompt Function",expand:!0}),t("h2",{children:["Form Options: ",e("code",{children:"errorsTitle"})," and ",e("code",{children:"errorsPrompt"})]}),t("p",{children:["You can set the ",e("code",{children:"title"})," and ",e("code",{children:"prompt"})," properties for the ",e("code",{children:"Errors"})," component as the ",e("code",{children:"errorsTitle"})," and"," ",e("code",{children:"errorsPrompt"})," properties, respectively.  They can be strings or functions that return strings, as described above."]}),e(o,{Element:un,code:pn,caption:"Form Errors Options",expand:!0}),e("h2",{children:"Error Types"}),e("h3",{children:e("code",{children:"error"})}),t(c,{children:[t("div",{children:[t("p",{children:["The ",e(F,{})," context can include a single ",e("code",{children:"error"})," or an array of ",e("code",{children:"errors"}),`.  The first case is typically used when there's an error that doesn't relate to a specific field, e.g. "Invalid username or password".  The latter case is used when there are multiple errors, e.g. for different fields.`]}),t("p",{children:["Just to complicate matters, both ",e("code",{children:"error"})," and the elements in ",e("code",{children:"errors"})," can be either strings or objects containing a"," ",e("code",{children:"message"})," and other information about what field the error message relates to, including the field ",e("code",{children:"name"})," or"," ",e("code",{children:"label"}),"."]})]}),e("div",{children:t("p",{children:["This first example includes some buttons that set the ",e("code",{children:"error"})," ","in the ",e(F,{})," to demonstrate the different combinations."]})})]}),e(o,{Element:fn,code:Fn,caption:"error"}),e("h3",{children:e("code",{children:"errors"})}),t(c,{children:[t("div",{children:[t("p",{children:["This second example sets the ",e("code",{children:"errors"}),".  These are typically used when there is one or more errors relating to particular fields."]}),t("p",{children:["If an entry in ",e("code",{children:"errors"})," is a string then it will be displayed as it is.  The first two buttons generate these kind of errors."]}),t("p",{children:["If an entry in ",e("code",{children:"errors"})," is an object then it should contain a ",e("code",{children:"message"})," which will be displayed.  Click on the third button to see this in action."]})]}),t("div",{children:[t("p",{children:["If the object also contains a ",e("code",{children:"label"})," then it will be displayed in bold in the errors list.  The fourth button can be clicked to demonstrate this."]}),t("p",{children:["Alternately, the object can contain any of ",e("code",{children:"field"}),","," ",e("code",{children:"name"})," or ",e("code",{children:"param"})," to indicate the invalid field. If it corresponds to a known field then the field label (if it has one) will be displayed along with the error.  Click on the fifth button to see how this works."]})]})]}),e(o,{Element:gn,code:Sn,caption:"error"}),e("h2",{children:"Custom Error Component"}),t(c,{children:[t("p",{children:["You can always implement your own component for displaying errors if you don't like the way this works.  Just be warned that there are the various different possibilities that need to be accounted for. You can use the ",e("code",{children:"useForm"})," function to get access to the form context which contains the ",e("code",{children:"error"})," and/or ",e("code",{children:"errors"}),"."]}),t("p",{children:["See the implementations of the"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Errors.jsx",children:"Errors"})," ","and"," ",e("a",{href:"https://github.com/abw/react-formula/blob/master/lib/Form/Error.jsx",children:"Error"})," ","modules for a starting point."]})]})]}),vn=`import { Form, Field, ResetSubmit, Debug } from '../../../../../lib/index.js'

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

export default DebugForm`,wn=()=>t(i,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",required:!0}),e(E,{space:!0,reset:{className:"outline"},submit:{className:"blue"}}),e(K,{})]}),yn=()=>t(i,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",required:!0}),e(E,{space:!0,reset:{className:"outline"},submit:{className:"blue"}}),e(K,{values:!1,fields:!0,status:!0})]}),Tn=`import { Form, Field, Debug, ResetSubmit } from '../../../../../lib/index.js'

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

export default DebugStatus`,Rn=`import { Form, Field, ResetSubmit, Debug } from '../../../../../lib/index.js'

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

export default DebugAll`,Cn=()=>t(i,{children:[e(l,{name:"message",label:"Message",placeholder:"Enter a message",required:!0}),e(l,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",required:!0}),e(l,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",required:!0}),e(E,{space:!0,reset:{className:"outline"},submit:{className:"blue"}}),e(K,{all:!0})]}),Nn=()=>t("div",{className:"prose",children:[e("h1",{children:"Debug"}),t(c,{align:"end",children:[t("p",{children:["The ",e("code",{children:"Debug"})," component can be used in development to debug your form.  By default it displays only the form values."]}),e(m,{children:"Try updating the form values and see how the debugging data changes."})]}),e(o,{Element:wn,code:vn,caption:"Debug"}),t("h2",{children:[e("code",{children:"values"})," and ",e("code",{children:"status"})]}),t("p",{children:["The ",e("code",{children:"status"})," option can be set to view the form status. The ",e("code",{children:"values"})," option defaults to ",e("code",{children:"true"})," but you can set it to ",e("code",{children:"false"})," if you don't want to view the current form values."]}),e(o,{Element:yn,code:Tn,caption:"Status and Fields"}),e("h2",{children:e("code",{children:"all"})}),t("p",{children:["The ",e("code",{children:"all"})," option is a shortcut to show all form data."]}),e(o,{Element:Cn,code:Rn,caption:"All Data",expand:!0})]}),Pn=()=>t(H,{children:[e(n,{path:"",end:!0,element:e(Me,{})}),e(n,{path:"Form/*",element:e(ol,{})}),e(n,{path:"Field/*",element:e(bi,{})}),e(n,{path:"Fields",element:e(ji,{})}),e(n,{path:"Fieldset",element:e(_i,{})}),e(n,{path:"Submit",element:e(ra,{})}),e(n,{path:"Reset",element:e(ha,{})}),e(n,{path:"Cancel",element:e(Fa,{})}),e(n,{path:"CancelSubmit",element:e(Na,{})}),e(n,{path:"ResetSubmit",element:e(Ja,{})}),e(n,{path:"CancelResetSubmit",element:e(Ba,{})}),e(n,{path:"Changed",element:e(Qa,{})}),e(n,{path:"Errors",element:e(En,{})}),e(n,{path:"Debug",element:e(Nn,{})})]});export{Pn as default};
