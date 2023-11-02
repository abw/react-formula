import{j as r,a as e,T as M,b as A,P as J,F as o,c as i,S as d,E as a,d as h,e as n,f as T,N as F,g as Y,R as k,h as S,V as R,i as N,k as U,l as z,M as _,m as f,n as w,o as G,p as B,q as I,r as v,s as g,t as j,u as K,v as L,w as P,x as Q,y as X,C as Z,z as ee,A as re,B as te,O as ie,D as ae,G as D,H as oe,I as se,J as W,K as ne,L as O,Q as H,U as V,W as $,X as le,Y as de,Z as ce,_ as me,$ as c}from"./index-73c75cb5.js";import{S as l,a as m,c as b}from"./index.esm-3bc0eaf2.js";const ue=()=>r("div",{children:[e("h1",{children:"Tutorial"}),e("p",{className:"intro",children:"This section of the documentation provides a guided walk-through of the features without going into too much detail.  The idea is to give you an overview of the functionality to get a feel for how it works."}),e(M,{menu:A,url:"/tutorial"})]}),u=({uri:t})=>e(J,{uri:t,menu:A}),he=()=>r(o,{children:[e(i,{name:"email",label:"Email Address",required:!0}),e(i,{name:"password",type:"password",label:"Password",required:!0}),e(d,{text:"Login"})]}),pe=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const BasicLoginForm = () =>
  <Form>
    <Field
      name="email"
      label="Email Address"
      required
      // inputClass="flat"
    />
    <Field
      name="password"
      type="password"
      label="Password"
      required
    />
    <Submit text="Login"/>
  </Form>

export default BasicLoginForm`,fe=()=>r("div",{className:"prose",children:[e("h1",{children:"Defining a Form"}),r(l,{align:"start",children:[r("p",{className:"intro",children:["One of the underlying principles of this library is, to borrow a phrase from Larry Wall, to make simple things simple and hard things possible. It should be just as easy, if not easier, to create a form using"," ",e("code",{children:"react-formula"})," as it should be using vanilla HTML."]}),r("blockquote",{className:"intro",children:["Make simple things simple and hard things possible.",e("div",{className:"attrib",children:"Larry Wall"})]})]}),e("h2",{children:"A Simple Login Form"}),r(l,{children:[e("p",{children:"So without further ado, let's look at the one form that most websites will require: a user login form."}),e(m,{children:`Try entering some values in the form below and click on the "Login" button. Also see what happens if you don't enter a value for either field.`})]}),e(a,{Element:he,code:pe,caption:"Basic Login Form"}),e("h2",{children:"The Basic Components"}),r("dl",{children:[e("dt",{children:e("code",{children:"Form"})}),e("dd",{children:r("p",{children:["A form is defined using the ",e(h,{})," component.  You can include any content you like inside the component, but most often you'll want to include at least one ",e(n,{})," and a ",e(T,{})," button."]})}),e("dt",{children:e("code",{children:"Field"})}),e("dd",{children:r("p",{children:["The example contains two ",e(n,{})," components.  Each ",e("b",{children:"MUST"})," ","define a ",e(F,{})," and everything else is optional. In both cases we add a ",e(Y,{})," and the ",e(k,{})," ","property to indicate that the user must enter a value.  In the case of the"," ",e("code",{children:"password"})," field we also set the input ",e(S,{})," to"," ",e("code",{children:"password"}),"."]})}),e("dt",{children:e("code",{children:"Submit"})}),e("dd",{children:r("p",{children:["The ",e(T,{})," component is used to render a button to submit the form.  In the example above we set the ",e("code",{children:"text"}),' property to customise the text displayed on the button. Otherwise it defaults to "Submit".']})})]}),e("h2",{children:"Where Next?"}),r("p",{children:["The ",e(k,{})," property is useful for simple cases, but at some point you'll want to add more thorough validation for fields.  Let's look at that next."]}),e(u,{uri:"simple-form"})]}),be={email:{label:"Email Address",validate:t=>b().trim().email("That doesn't look like an email address").required("You must enter your email address!").validate(t)},password:{label:"Password",type:"password",validate:t=>b().trim().required("You must enter your password!").min(6,"Your password should be at least 6 characters").validate(t)}},ge=()=>r(o,{fields:be,children:[e(i,{name:"email"}),e(i,{name:"password"}),e(d,{text:"Login"})]}),we=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const fields = {
  email: {
    label: 'Email Address',
    validate: value => yup
      .string()
      .trim()
      .email("That doesn't look like an email address")
      .required('You must enter your email address!')
      .validate(value)
  },
  password: {
    label: 'Password',
    type:  'password',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your password!')
      .min(6, 'Your password should be at least 6 characters')
      .validate(value)
  },
}

const LoginWithValidation = () =>
  <Form fields={fields}>
    <Field name="email"/>
    <Field name="password"/>
    <Submit text="Login"/>
  </Form>

export default LoginWithValidation`,ve=()=>r("div",{className:"prose",children:[e("h1",{children:"Field Validation"}),r("p",{className:"intro wide",children:["It's good practice to validate fields as thoroughly as possible.  On the client-side this is important to help draw the user's attention to any invalid fields ",e("i",{children:"before"})," the form is submitted.  Of course you'll also need some kind of server-side validation, but we'll look at that later."]}),e("h2",{children:"Login Form With Field Validation"}),r(l,{children:[r("div",{children:[r("p",{children:["You can add a ",e(R,{})," property to a field to provide a function to validate the input.  This will be passed the field value and should return a Promise that resolves with the (possibly modified) value if the input is valid, or rejects with an error if not. In these examples we'll be using"," ",e("a",{href:"https://github.com/jquense/yup",children:"Yup"})," but you should be able to use any validation library or even roll your own validation functions for special cases."]}),r("p",{children:["You can add the ",e(R,{})," function to the ",e(n,{})," ","component if you like, but you may find that things quickly get a bit messy.  So this is a good opportunity to demonstrate the other way of defining form fields, using a schema.  This allows you to define your field properties separately and then pass them to the ",e(h,{})," ","component as the ",e(N,{})," property.  When you include a ",e(n,{})," the ",e(F,{})," will be used to lookup the default properties for the field from the ",e(N,{})," you've provided."]})]}),r("div",{children:[r("p",{children:["There are a number of benefits to defining a separate schema for your form fields.  For one, it means that all your field definitions are in a single place where you can easily inspect and edit them without having to wade through lots of markup.  It also means that your form markup remains free of all the functional code, allowing you to concentrate on layout, styling and other presentational aspects. If you decide to split a long form into multiple parts, change the order of some fields, or perhaps display some fields side-by-side instead of stacked vertically, then it's easier to move a single"," ",e(n,{})," element around, or just edit the ",e(F,{})," property than it is to cut and paste large blocks of code."]}),r(m,{children:["Try entering some values in the form below and click on the"," ",e("b",{children:"Login"})," button. If you don't provide a value, or if you provide an invalid value then you should see the validation errors."]})]})]}),e(a,{Element:ge,code:we,caption:"Field Validation"}),e("h2",{children:"Validation Properties"}),r("dl",{children:[e("dt",{children:e("code",{children:"validateOnBlur"})}),e("dd",{children:r("p",{children:["By default, field validation happens when the form is submitted. You can add the ",e(U,{})," property to either the"," ",e(h,{})," or individual ",e(n,{})," components if you want the validation to happen when a field is blurred."]})}),e("dt",{children:e("code",{children:"validateOnChange"})}),e("dd",{children:r("p",{children:["You can add the ",e(z,{})," property to either the"," ",e(h,{})," or individual ",e(n,{})," components if you want validation to happen any time the field value changes, i.e. as the user types."]})}),e("dt",{children:e("code",{children:"minValidateLength"})}),e("dd",{children:r("p",{children:["The ",e(_,{})," can be set if you only want validation to start after the user has entered a particular number of characters. The default values is ",e("code",{children:"1"}),"."]})})]}),e("h2",{children:"Where Next?"}),e("p",{children:"If you need to perform some kind of validation where you have access to all of the submitted values then you can do that at the form level We'll look at that next."}),e(u,{uri:"field-validation"})]}),ye=t=>new Promise((s,p)=>t.password===t.passcheck?s(t):p({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),Fe=t=>b().trim().email().required("You must enter your email address!").validate(t),q=t=>b().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(t),Se={email:{label:"Email Address",validate:Fe},password:{label:"Password",type:"password",validate:q},passcheck:{label:"Confirm Password",type:"password",validate:q}},xe=()=>r(o,{fields:Se,validate:ye,children:[e(f,{names:"email password passcheck"}),e(w,{title:"Registration Error",fieldErrors:!1}),e(d,{text:"Register"})]}),Ee=`import { Form, Fields, Errors, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, Errors, Submit } from '@abw/react-formula'
import * as yup  from 'yup'

const validateForm = values => new Promise(
  (resolve, reject) => {
    if (values.password === values.passcheck) {
      return resolve(values)
    }
    else {
      return reject({
        error: "Your passwords don't match!",
        errors: [
          { name: 'password',  message: 'Please re-enter your password' },
          { name: 'passcheck', message: 'Please re-confirm your password' },
        ]
      })
    }
  }
)

const validateEmail = value => yup
  .string()
  .trim()
  .email()
  .required('You must enter your email address!')
  .validate(value)

const validatePassword = value => yup
  .string()
  .trim()
  .required('You must enter a password!')
  .min(6, 'Your password should be at least 6 characters')
  .validate(value)

const fields = {
  email: {
    label:    'Email Address',
    validate: validateEmail
  },
  password: {
    label:    'Password',
    type:     'password',
    validate: validatePassword
  },
  passcheck: {
    label:    'Confirm Password',
    type:     'password',
    validate: validatePassword
  },
}

const LoginWithValidation = () =>
  <Form fields={fields} validate={validateForm}>
    <Fields names="email password passcheck"/>
    <Errors title="Registration Error" fieldErrors={false}/>
    <Submit text="Register"/>
  </Form>

export default LoginWithValidation`,Te=()=>r("div",{className:"prose",children:[e("h1",{children:"Form Validation"}),e("p",{className:"intro wide",children:"Sometimes you need access to all the submitted field values to validate the form.  The classic example is a registration form where you ask the user to enter their password twice to make sure that they're sure about what they've entered.  Although this isn't necessarily considered good practice these days, it illustrates the principle well."}),e("h2",{children:"Registration Form With Validation"}),r(l,{children:[r("div",{children:[r("p",{children:["You can add a ",e(G,{})," property to a form to provide a function to validate the inputs from all fields.  The function will be called after the field-level validation, and only if all fields have validated successfully."]}),r("p",{children:["The function will be passed a ",e("code",{children:"values"})," object containing the validated field values.  It should return a Promise that resolves with the (possibly modified) values if the input is valid, or rejects with an an ",e("code",{children:"error"})," and/or array of ",e("code",{children:"errors"})," if not."]}),r("p",{children:["The ",e("code",{children:"error"})," can be used to define an error for the form that isn't specific to any particular field.  In this case it's being used to raise an error indicating that the two passwords entered don't match."]}),r("p",{children:["Each item in the ",e("code",{children:"errors"})," array should relate to a field identified by ",e("code",{children:"name"}),", with an additional ",e("code",{children:"message"})," ","indicating why it is invalid.  In this case we're also raising errors for both password fields."]})]}),r("div",{children:[r("p",{children:["The ",e(B,{})," component can used to insert a prominent alert anywhere in the form, warning the user about what's gone wrong.  By default it will display any generic ",e("code",{children:"error"})," ","and also a list of any field-specific ",e("code",{children:"errors"}),".  But here we're relying on the fact that the field errors will be displayed underneath each field input, so we're setting the "," ",e("code",{children:"fieldErrors"})," flag to ",e("code",{children:"false"})," to suppress the"," ",e("code",{children:"errors"})," list."]}),r("p",{children:["We're also using this opportunity to introduce you to the"," ",e(I,{})," component which allows you to add multiple fields to a ",e(h,{})," in one fell swoop."]}),r(m,{children:["Try entering some values in the form below and click on the"," ",e("b",{children:"Register"})," button. You should see the field level validation errors if you don't provide a valid value for any field. Or if you provide different values for the Password and Confirm Password fields then you should see the form validation errors."]})]})]}),e(a,{Element:xe,code:Ee,caption:"Form Validation"}),e("h2",{children:"Where Next?"}),e("p",{children:"Now that we've handled the validation of the form we can talk about how the form is submitted."}),e(u,{uri:"form-validation"})]}),ke=()=>{const[t,s]=v.useState();return r(g,{children:[r(o,{onSubmit:E=>Promise.resolve(s(E)),debug:!0,children:[e(i,{name:"email",label:"Email Address",required:!0}),e(i,{name:"password",type:"password",label:"Password",required:!0}),e(d,{text:"Login"})]}),t?r("div",{className:"info alert border mar-t-4",children:[e("h4",{children:"Submitted Values"}),e("pre",{children:JSON.stringify(t)})]}):null]})},Re=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const DummySubmit = () => {
  const [values, setValues] = useState()

  const onSubmit = values => Promise.resolve(
    setValues(values)
  )

  return (
    <>
      <Form onSubmit={onSubmit} debug>
        <Field name="email" label="Email Address" required/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
      { values
        ? <div className="info alert border mar-t-4">
            <h4>Submitted Values</h4>
            <pre>{JSON.stringify(values)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default DummySubmit`,Ne=()=>r("div",{className:"prose",children:[e("h1",{children:"Form Submission"}),r("p",{className:"intro wide",children:["To handle submission of a form we need to add an ",e("code",{children:"onSubmit"})," ","handler to the ",e(h,{})," component. In most cases this will be making a call to a back-end API but to demonstrate the basic principle let's start with something simpler."]}),r("h2",{children:[e("code",{children:"onSubmit"})," Handler"]}),r(l,{align:"end",children:[r("p",{children:["We'll create a function which stores the submitted"," ",e("code",{children:"values"})," in a state variable and displays them on the screen.  The ",e(j,{})," handler is passed an object containing the validated form values.  It should return a Promise which resolves on success.  If an error occurs then the Promise should reject, returning an object containing either an ",e("code",{children:"error"})," and/or an array of ",e("code",{children:"errors"}),".  These are handled the same as for client-side form validation."]}),e(m,{children:'Try entering some values in the form below and click on the "Login" button.  You should see the submitted values appear in a debugging window beneath the form.'})]}),e(a,{Element:ke,code:Re,caption:"Dummy Submission"}),e("h2",{children:"Where Next?"}),e("p",{children:"When the form is submitted there are two possible outcomes.  Either the submission is successful, or there's an error (or errors) that need to be handled.  We'll look at these in the next few pages."}),e(u,{uri:"form-submission"})]}),Le=()=>{const[t,s]=v.useState();return r(g,{children:[r(o,{onSubmit:y=>Promise.resolve({status:200,data:{message:"Welcome back!  You are now logged in.",user:{id:12345,email:y.email,name:"Bobby Badger"}}}),onSuccess:y=>s(y.data),debug:!0,children:[e(i,{name:"email",label:"Email Address",required:!0}),e(i,{name:"password",type:"password",label:"Password",required:!0}),e(d,{text:"Login"})]}),t?r("div",{className:"info alert mar-t-4",children:[e("h4",{children:"Emulated Response"}),e("pre",{children:JSON.stringify(t,null,2)})]}):null]})},Pe=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitResponse = () => {
  const [response, setResponse] = useState()

  // dummy submission in the style of fetch or axios
  const onSubmit = values => {
    return Promise.resolve({
      status: 200,
      data:   {
        message: 'Welcome back!  You are now logged in.',
        user:    {
          id:    12345,
          email: values.email,
          name:  'Bobby Badger',
        },
      }
    })
  }

  // handle successful response
  const onSuccess = response => setResponse(response.data)

  return (
    <>
      <Form onSubmit={onSubmit} onSuccess={onSuccess} debug>
        <Field name="email" label="Email Address" required/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
      { response
        ? <div className="info alert mar-t-4">
            <h4>Emulated Response</h4>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default SubmitResponse`,qe=()=>r("div",{className:"prose",children:[e("h1",{children:"Submission Response"}),e("p",{className:"intro wide",children:"We now need to think about what happens in the real world where a form submission results in a call to a back-end API.  There are, broadly speaking, two possible outcomes: the call is successful, or it fails for some reason."}),e("h2",{children:e("code",{children:"onSuccess"})}),r(l,{align:"end",children:[r("div",{children:[r("p",{children:["Let's start by looking at the case there the submission is successful.  In this example we define an ",e(j,{})," function which returns a resolved promise.  This is emulating how both"," ",e("a",{href:"https://axios-http.com/",children:"Axios"})," and the native"," ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"Fetch API"})," ","API work."]}),r("p",{children:["The additional step is to defined an ",e(K,{})," handler which can do something to handle the successful response.  In this case we're calling the ",e("code",{children:"setResponse"})," function to store the response data, much like in the previous example, except that this time we're emulating the full request and response cycle."]})]}),e(m,{children:'Try entering some values in the form below and click on the "Login" button.  You should see the values returned by an emulated server response appear in a debugging window beneath the form.  Also note that the form is reset on a successful submission.'})]}),e(a,{Element:Le,code:Pe,caption:"Submission Response"}),e("h2",{children:"Where Next?"}),e("p",{children:"What happens if the submission isn't successful?  We'll look at handling submission errors on the next page."}),e(u,{uri:"submission-response"})]}),Ce=()=>e(g,{children:r(o,{onSubmit:()=>{throw"Oh noes! An error occurred"},children:[e(w,{}),e(i,{name:"email",label:"Email Address",required:!0}),e(i,{name:"password",type:"password",label:"Password",required:!0}),e(d,{text:"Login"})]})}),Ae=`import { Form, Field, Submit, Errors } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const SubmitThrow = () => {
  const onSubmit = () => {
    throw('Oh noes! An error occurred')
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Errors/>
        <Field name="email" label="Email Address" required/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
    </>
  )
}

export default SubmitThrow`,Ye=()=>e(g,{children:r(o,{onSubmit:()=>{throw new Error("Oh noes! An error occurred")},debug:!0,children:[e(w,{}),e(i,{name:"email",label:"Email Address",required:!0}),e(i,{name:"password",type:"password",label:"Password",required:!0}),e(d,{text:"Login"})]})}),Be=`import { Form, Field, Submit, Errors } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const SubmitThrow = () => {
  const onSubmit = () => {
    throw new Error('Oh noes! An error occurred')
  }

  return (
    <>
      <Form onSubmit={onSubmit} debug>
        <Errors/>
        <Field name="email" label="Email Address" required/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
    </>
  )
}

export default SubmitThrow`,Ie=()=>e(g,{children:r(o,{onSubmit:()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]}),children:[e(w,{}),e(i,{name:"email",label:"Email Address",required:!0,debug:!0}),e(i,{name:"password",type:"password",label:"Password",required:!0}),e(d,{text:"Login"})]})}),je=`import { Form, Field, Submit, Errors } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const SubmitReject = () => {
  const onSubmit = () => Promise.reject({
    errors: [
      {
        name:    'email',
        message: 'Your email address is not valid'
      },
      {
        name:    'password',
        message: 'Your password is too easy to guess'
      }
    ],
  })

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Errors/>
        <Field name="email" label="Email Address" required debug/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
    </>
  )
}

export default SubmitReject`,De=()=>{const[t,s]=v.useState();return r(g,{children:[r(o,{onSubmit:()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]}),onError:s,children:[e(i,{name:"email",label:"Email Address",required:!0,debug:!0}),e(i,{name:"password",type:"password",label:"Password",required:!0}),e(d,{text:"Login"})]}),t?r("div",{className:"info alert mar-t-4 mar-b-none",children:[e("h4",{children:"Submission Error"}),e("pre",{children:JSON.stringify(t,null,2)})]}):null]})},We=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitThrow = () => {
  const [error, setError] = useState()

  const onSubmit = () => Promise.reject({
    errors: [
      {
        name:    'email',
        message: 'Your email address is not valid'
      },
      {
        name:    'password',
        message: 'Your password is too easy to guess'
      }
    ],
  })

  return (
    <>
      <Form onSubmit={onSubmit} onError={setError}>
        <Field name="email" label="Email Address" required debug/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
      { error
        ? <div className="info alert mar-t-4 mar-b-none">
            <h4>Submission Error</h4>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default SubmitThrow`,Oe=()=>r("div",{className:"prose",children:[e("h1",{children:"Submission Errors"}),r("p",{className:"intro wide",children:["For a good user experience we should use client-side validation to try and catch all data entry errors ",e("i",{children:"before"})," they get submitted. However, it's not always possible to do that.  It may be the case that validating a field requires access to the database and is best handled on the server.  Or perhaps a field should be validated server-side for security reasons (e.g. validating a Captcha).  Or an API request could fail or otherwise be rejected for any number of other reasons.  So we must know how to handle these cases."]}),e("h2",{children:"Simple Error"}),r(l,{align:"end",children:[r("p",{children:["If a submission throws an error or returns an error via a rejected Promise then the form submission handler will set the internal"," ",e("code",{children:"error"})," state variable. See the ",e(B,{})," component for more information about changing how and if errors are displayed."]}),e(m,{children:"Try submitting this form to see what happens when an error is thrown. You should see the error displayed in the form header and also in a debugging window beneath the form."})]}),e(a,{Element:Ce,code:Ae,caption:"Error Thrown"}),r("p",{children:["As well as calling the ",e("code",{children:"throw()"})," function with a string, you can ",e("code",{children:"throw"})," an ",e("code",{children:"Error"})," object."]}),e(a,{Element:Ye,code:Be,caption:"Error Thrown"}),e("h2",{children:"Rejected Promise"}),r(l,{align:"start",children:[r("div",{children:[r("p",{children:["In most cases a failed submission should return a rejected Promise. The data returned should be an objecting containing either a single"," ",e("code",{children:"error"})," string (or object containing a ",e("code",{children:"message"}),"), or an array of ",e("code",{children:"errors"}),".  Each element in the array can be an error string, but the more usual (and useful) case is for each element to be an object containing the error ",e("code",{children:"message"}),"."]}),r("p",{children:["The benefit of this approach is that error objects can also contain the ",e("code",{children:"name"})," of the field that it relates to.  The corresponding field will be marked as invalid and have the error message set so that it can be displayed under the input.  Furthermore, the field label is copied into the error element so that it can be displayed in the error panel at the start of the form."]})]}),r("div",{children:[e("p",{children:"This would be the typical way to handle a request that failed due to server-side validation errors."}),e(m,{title:"Try it out",children:"Try submitting the form to see the errors generated."})]})]}),e(a,{Element:Ie,code:je,caption:"Error Thrown"}),e("h2",{children:e("code",{children:"onError"})}),r(l,{children:[r("p",{children:["You can provide an ",e(L,{})," handler which will be called when an error response is received.  In this example we simply call a ",e("code",{children:"setError()"})," function to store the error in a React state variable and then display it beneath the form."]}),r(m,{children:["Try submitting the form to see the errors generated.  The "," ",e(L,{})," handler will store them in the state variable and display them beneath the form."]})]}),e(a,{Element:De,code:We,caption:"onError"}),e("h2",{children:"Where Next?"}),e("p",{children:"We've now enough in place to look at a more complete example."}),e(u,{uri:"submission-errors"})]}),He=t=>new Promise((s,p)=>t.password===t.passcheck?s(t):p({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),Ve=t=>b().trim().email().required("You must enter your email address!").validate(t),C=t=>b().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(t),$e={name:{label:"Your name",required:!0,inputsClass:"wide"},email:{label:"Email address",required:!0,validate:Ve,inputsClass:"wide"},password:{label:"Password",type:"password",required:!0,validate:C,inputsClass:"wide"},passcheck:{label:"Confirm password",type:"password",required:!0,validate:C,inputsClass:"wide"},experience:{label:"What is your level of experience?",type:"radio",options:["Beginner","Intermediate","Expert"],className:"wide"},dob:{type:"date",label:"Date of Birth",inputsClass:"wide"},price:{type:"number",label:"Your donation?",prefix:"£",suffix:".00",min:11,max:100,inputsClass:"wide"},animal:{label:"Your favourite animal?",type:"select",default:"Badger",options:["Badger","Ferret","Stoat"],inputsClass:"wide"},color:{label:"Your favourite color?",type:"select",default:"Red",options:[{value:null,text:"Select a color"},{value:"red",text:"Red"},{value:"orange",text:"Orange"},{value:"yellow",text:"Yellow"},{value:"violet",text:"Violet"},{value:"white",text:"White"}],inputsClass:"wide"},terms:{label:"Terms and conditions",type:"checkbox",text:"I accept the Terms and Conditions",className:"fluid",required:!0,requiredMessage:"You must accept the Terms and Conditions"}},Me=()=>{const[t,s]=v.useState();return r(o,{fields:$e,validate:He,showRequired:!0,children:[e(P,{legend:"Your Details",children:e(f,{names:"name email password passcheck",className:"lg-grid-2"})}),r(P,{legend:"Other Information",children:[e(f,{names:"dob price",className:"lg-grid-2"}),e(i,{name:"experience"}),r("div",{className:"lg-grid-2",children:[e(i,{name:"animal"}),e(i,{name:"color",onChange:s})]}),(t==null?void 0:t.value)&&r("div",{style:{color:t.value,backgroundColor:"#444",padding:"0.25rem 0.5rem",textAlign:"center"},children:[t.value," is a great color!"]})]}),e(i,{name:"terms"}),e(d,{text:"Register"})]})},Je=`import { Form, Field, Fields, Fieldset, Submit } from '../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Fields, Fieldset, Submit } from '@abw/react-formula'
import * as yup  from 'yup'

const validateForm = values => new Promise(
  (resolve, reject) => {
    if (values.password === values.passcheck) {
      return resolve(values)
    }
    else {
      return reject({
        error: "Your passwords don't match!",
        errors: [
          { name: 'password',  message: 'Please re-enter your password' },
          { name: 'passcheck', message: 'Please re-confirm your password' },
        ]
      })
    }
  }
)

const validateEmail = value => yup
  .string()
  .trim()
  .email()
  .required('You must enter your email address!')
  .validate(value)

const validatePassword = value => yup
  .string()
  .trim()
  .required('You must enter a password!')
  .min(6, 'Your password should be at least 6 characters')
  .validate(value)

const fields = {
  name: {
    label:    'Your name',
    required: true,
    inputsClass: 'wide'
  },
  email: {
    label:    'Email address',
    required: true,
    validate: validateEmail,
    inputsClass: 'wide'
  },
  password: {
    label:    'Password',
    type:     'password',
    required: true,
    validate: validatePassword,
    inputsClass: 'wide'
  },
  passcheck: {
    label:    'Confirm password',
    type:     'password',
    required: true,
    validate: validatePassword,
    inputsClass: 'wide'
  },
  experience: {
    label:    'What is your level of experience?',
    type:     'radio',
    options:  ['Beginner', 'Intermediate', 'Expert'],
    className: 'wide',
    // inputsClass: 'radio inputs lg-grid-3',
  },
  dob: {
    type:  'date',
    label: 'Date of Birth',
    inputsClass: 'wide'
  },
  price: {
    type:  'number',
    label: 'Your donation?',
    prefix: '£',
    suffix: '.00',
    min: 11,
    max: 100,
    inputsClass: 'wide'
  },
  animal: {
    label:    'Your favourite animal?',
    type:     'select',
    default:  'Badger',
    options:  ['Badger', 'Ferret', 'Stoat'],
    inputsClass: 'wide',
  },
  color: {
    label:    'Your favourite color?',
    type:     'select',
    default:  'Red',
    options:  [
      { value: null,     text: 'Select a color' },
      { value: 'red',    text: 'Red'    },
      { value: 'orange', text: 'Orange' },
      { value: 'yellow', text: 'Yellow' },
      { value: 'violet', text: 'Violet' },
      { value: 'white',  text: 'White'  },
    ],
    inputsClass: 'wide',
  },
  terms: {
    label:    'Terms and conditions',
    type:     'checkbox',
    text:     'I accept the Terms and Conditions',
    className: 'fluid',
    required:  true,
    requiredMessage: 'You must accept the Terms and Conditions'
  },
}

const RegistrationForm = () => {
  const [color, setColor] = useState()

  return (
    <Form
      fields={fields}
      validate={validateForm}
      showRequired
      // showOptional
    >
      <Fieldset legend="Your Details">
        <Fields
          names="name email password passcheck"
          className="lg-grid-2"
        />
      </Fieldset>
      <Fieldset legend="Other Information">
        <Fields
          names="dob price"
          className="lg-grid-2"
        />
        <Field name="experience"/>
        <div className="lg-grid-2">
          <Field name="animal"/>
          <Field name="color" onChange={setColor}/>
        </div>
        { color?.value &&
          <div
            style={{
              color: color.value,
              backgroundColor: '#444',
              padding: '0.25rem 0.5rem',
              textAlign: 'center'
            }}
          >{color.value} is a great color!</div>
        }
      </Fieldset>
      <Field name="terms"/>
      <Submit text="Register"/>
    </Form>
  )
}

export default RegistrationForm`,Ue=`@media (min-width: 1024px) {
  .lg-grid-2 {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .lg-grid-3 {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}`;const ze=()=>r("div",{className:"prose",children:[e("h1",{children:"Complete Registration Form"}),e("p",{className:"intro wide",children:"Here's a more complete (albeit rather contrived) example of a user registration form."}),e("h2",{children:"Input Types"}),r(l,{children:[r("p",{children:["This example demonstrates some of the other fields input types. Set the ",e(n,{})," ",e(S,{})," to ",e("code",{children:"radio"})," for a ",e(Q,{})," button input and provide some ",e("code",{children:"options"}),", as shown here for the ",e("code",{children:"experience"})," field.  Or set it to ",e("code",{children:"select"})," for a ",e(X,{})," input as shown in the"," ",e("code",{children:"animal"})," field.  Set it to ",e("code",{children:"checkbox"})," for a"," ",e(Z,{})," and provide some ",e("code",{children:"text"})," to go alongside it."]}),r("p",{children:["You can also use the ",e(S,{})," to set other text input types, like ",e("code",{children:"number"})," and ",e("code",{children:"date"}),"."]})]}),e(a,{Element:Me,code:Je,caption:"Registration Form"}),e("h2",{children:"Components and Properties"}),r("dl",{children:[r("dt",{children:[e("code",{children:"Fieldset"})," Component"]}),e("dd",{children:r("p",{children:["The example includes the ",e(ee,{})," component which can be used to group fields together in a set, complete with a ",e("code",{children:"legend"}),"."]})}),r("dt",{children:[e("code",{children:"showRequired"})," and ",e("code",{children:"showOptional"})]}),e("dd",{children:r("p",{children:["The ",e(re,{})," and ",e(te,{})," properties can be set on the ",e(h,{})," or individual ",e(n,{})," components to have an additional label displayed telling the user which fields they do and don't need to complete."]})}),e("dt",{children:e("code",{children:"onChange"})}),e("dd",{children:r("p",{children:["The ",e(ie,{})," property can be added to a ",e(n,{})," to watch for changes in the field value.  You can see it in use above in the ",e("code",{children:"color"})," field."]})})]}),e("h2",{children:"Custom CSS"}),r(l,{children:[r("p",{children:["The example above uses a couple of custom CSS classes, "," ",e("code",{children:"lg-grid-2"})," and ",e("code",{children:"lg-grid-3"})," to display fields in 2 and 3 columns, respectively, on larger screen sizes. You may already be using a CSS framework which includes something similar which you can use instead.  Here's the CSS for those classes for completeness."]}),e(ae,{code:Ue,language:"css",className:"mar-b-2",fixed:!0})]}),e("h2",{children:"Where Next?"}),e("p",{children:"There's a lot to take in there.  For the next example we'll scale things back a bit and look at the common case where you want to edit some existing data using a form."}),e(u,{uri:"complete-registration"})]}),_e={name:{label:"Product Name",required:!0},description:{label:"Description",type:"textarea",required:!0},manufacturer:{label:"Manufacturer",type:"select",options:[{value:"100",text:"Alan's Accessories"},{value:"101",text:"Brian's Bits"},{value:"102",text:"Charlie's Components"}]},price:{type:"number",label:"Price",prefix:"$"}},x={id:"9876",version:123,name:"Widget-2000",description:"This is an awesome widget",manufacturer:"102",price:12.99},Ge={id:x.id,version:x.version},Ke=()=>r(o,{fields:_e,values:x,hidden:Ge,children:[e(f,{names:"name description",wide:!0}),e(f,{names:"manufacturer price",grid:2,wide:!0}),e(D,{submit:{text:"Save Changes",className:"blue"},reset:{className:"outline"},className:"flex space"})]}),Qe=`import { Form, Fields, ResetSubmit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, ResetSubmit } from '@abw/react-formula'

// field definitions - these could be defined elsewhere and imported in
// allowing them to be re-used in other forms, e.g. an "Add Product" form
const fields = {
  name: {
    label:    'Product Name',
    required: true
  },
  description: {
    label:    'Description',
    type:     'textarea',
    required: true,
  },
  manufacturer: {
    label:    'Manufacturer',
    type:     'select',
    options:  [
      { value: '100', text: "Alan's Accessories" },
      { value: '101', text: "Brian's Bits" },
      { value: '102', text: "Charlie's Components" },
    ],
  },
  price: {
    type:  'number',
    label: 'Price',
    prefix: '$',
  },
}

// these values would typically be fetched from a database
const values = {
  id:           '9876',
  version:      123,
  name:         'Widget-2000',
  description:  'This is an awesome widget',
  manufacturer: '102',
  price:        12.99
}

// some hidden fields that will be included when the form is submitted
const hidden = {
  id:      values.id,
  version: values.version,
}

const EditForm = () =>
  <Form fields={fields} values={values} hidden={hidden}>
    <Fields names="name description" wide/>
    <Fields names="manufacturer price" grid={2} wide/>
    <ResetSubmit
      submit={{ text: 'Save Changes', className: 'blue' }}
      reset={{ className: 'outline' }}
      className="flex space"
    />
  </Form>

export default EditForm`,Xe=()=>r("div",{className:"prose",children:[e("h1",{children:"Edit Form"}),e("p",{className:"intro wide",children:"Another common use case for forms is in editing existing data records."}),e("h2",{children:e("code",{children:"values"})}),r(l,{children:[r("p",{children:["You can pass the ",e(oe,{})," property to a ",e(h,{})," to seed it with initial values for fields.  If there are additional hidden values that you want to include when you submit the form then you can provide them using the ",e(se,{})," property."]}),r(m,{children:["Try changing some of the values in the form and then click on the ",e("b",{children:"Reset"})," button.  The fields will reset to their original values."]})]}),e(a,{Element:Ke,code:Qe,caption:"Edit Form"}),e("h2",{children:"Where Next?"}),r("p",{children:["You've seen an example of the ",e(W,{})," component in action. Now it's time to talk about debugging in a little more detail."]}),e(u,{uri:"edit-form"})]}),Ze={name:{label:"Product Name",required:!0},description:{label:"Description",type:"textarea",required:!0},manufacturer:{label:"Manufacturer",type:"select",debug:!0,placeholder:"Select manufacturer",options:[{value:"100",text:"Alan's Accessories"},{value:"101",text:"Brian's Bits"},{value:"102",text:"Charlie's Components"}]},price:{type:"number",label:"Price",prefix:"$"}},er=()=>r(o,{fields:Ze,debug:!0,children:[e(i,{name:"name",debug:!0,wide:!0}),e(i,{name:"description",debug:!0,wide:!0}),e(f,{names:"manufacturer price",grid:2,debug:!0,wide:!0}),e(D,{className:"flex space"}),e(ne,{status:!0})]}),rr=`import { Form, Field, Fields, ResetSubmit, Debug } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Fields, ResetSubmit, Debug } from '@abw/react-formula'

const fields = {
  name: {
    label:    'Product Name',
    required: true
  },
  description: {
    label:    'Description',
    type:     'textarea',
    required: true,
  },
  manufacturer: {
    label:    'Manufacturer',
    type:     'select',
    debug:    true,
    placeholder: 'Select manufacturer',
    options:  [
      { value: '100', text: "Alan's Accessories" },
      { value: '101', text: "Brian's Bits" },
      { value: '102', text: "Charlie's Components" },
    ],
  },
  price: {
    type:  'number',
    label: 'Price',
    prefix: '$',
  },
}

const DebuggingForm = () =>
  <Form fields={fields} debug>
    <Field name="name" debug wide/>
    <Field name="description" debug wide/>
    <Fields names="manufacturer price" grid={2} debug wide/>
    <ResetSubmit className="flex space"/>
    <Debug status/>
  </Form>

export default DebuggingForm`,tr=()=>r("div",{className:"prose",children:[e("h1",{children:"Debugging"}),e("p",{className:"intro wide",children:"Let't face it, things don't always work right first time, so being able to debug your forms is an important requirement."}),r("h2",{children:[e("code",{children:"Debug"})," Component and ",e("code",{children:"debug"})," Property"]}),r(l,{align:"end",children:[r("div",{children:[r("p",{children:["The ",e(W,{})," component can be added to a form to display information about the form values and other state variables.  By default it shows only the form values, but you can use the ",e("code",{children:"status"})," option to also show the form status.  If for some reason you don't want to see the values you can set ",e("code",{children:"values"})," to ",e("code",{children:"false"}),"."]}),r("p",{children:["If you add the ",e("code",{children:"debug"})," property to a ",e(h,{})," or"," ",e(n,{})," then it will enable debugging messages for that component. These will be output to the Javascript console.  Any properties (like"," ",e("code",{children:"debug"}),") that are passed to the ",e(I,{})," component will be forwarded onto the respective ",e(n,{})," components, so it works there too."]})]}),e(m,{children:"Try changing some of the values in the form.  Watch the form values and status change in the debugging panel.  Also check out the Javascript console for further debugging messages."})]}),e(a,{Element:er,code:rr,caption:"Debugging"}),e("h2",{children:"Where Next?"}),e("p",{children:"On the next page we'll look at how you can define your own field layout."}),e(u,{uri:"debugging"})]}),ir={email:{label:"Email Address",required:!0}},ar=()=>r(o,{fields:ir,children:[e(i,{name:"email",children:t=>r("div",{className:"field",children:[e("label",{htmlFor:t.id,children:t.label}),e("div",{className:"inputs",children:e("input",{className:"input",ref:t.inputRef,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:t.tabIndex,onFocus:t.onFocus,onBlur:t.onBlur,onChange:s=>t.onChange(s.target.value)})})]})}),e(d,{text:"Login"})]}),or=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const fields = {
  email: {
    label:    'Email Address',
    required: true
  },
}

const HeadlessFields = () =>
  <Form fields={fields}>
    <Field name="email">
      { field =>
        <div className="field">
          <label htmlFor={field.id}>{field.label}</label>
          <div className="inputs">
            <input
              className="input"
              ref={field.inputRef}
              aria-disabled={field.disabled}
              tabIndex={field.disabled ? -1 : field.tabIndex}
              onFocus={field.onFocus}
              onBlur={field.onBlur}
              onChange={e => field.onChange(e.target.value)}
            />
          </div>
        </div>
      }
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessFields`,sr={email:{label:"Email Address"}},nr=()=>e(o,{fields:sr,children:e(i,{name:"email",children:t=>r("div",{className:"boxed",children:["This is where you render the ",t.name,' field with an "',t.label,'" label']})})}),lr=`import { Form, Field } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const fields = {
  email: {
    label: 'Email Address',
  },
}

const HeadlessBlank = () =>
  <Form fields={fields}>
    <Field name="email">
      { field =>
        <div className="boxed">
          This is where you render the {field.name} field with
          an &quot;{field.label}&quot; label
        </div>
      }
    </Field>
  </Form>

export default HeadlessBlank`,dr={email:{label:"Email Address",required:!0}},cr=()=>r(o,{fields:dr,children:[e(i,{name:"email",children:t=>r(O,{children:[r("h2",{className:"mar-t-none",children:["Custom Layout for ",t.name]}),e(H,{}),e(V,{}),e($,{})]})}),e(d,{text:"Login"})]}),mr=`import {
  Form, Field, Layout, Label, Text, Message, Submit
} from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Layout, Label, Text, Message, Submit
// PRETEND: } from '@abw/react-formula'

const fields = {
  email: {
    label:    'Email Address',
    required: true,
  },
}

const HeadlessBuiltins = () =>
  <Form fields={fields}>
    <Field name="email">
      { field =>
        <Layout>
          <h2 className="mar-t-none">
            Custom Layout for {field.name}
          </h2>
          <Label/>
          <Text/>
          <Message/>
        </Layout>
      }
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessBuiltins`,ur={email:{label:"Email Address",required:!0}},hr=()=>r(o,{fields:ur,children:[e(i,{name:"email",children:r(O,{children:[e("h2",{className:"mar-t-none",children:"Custom Layout for Email field"}),e(H,{}),e(V,{}),e($,{})]})}),e(d,{text:"Login"})]}),pr=`import {
  Form, Field, Layout, Label, Text, Message, Submit
} from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Layout, Label, Text, Message, Submit
// PRETEND: } from '@abw/react-formula'

const fields = {
  email: {
    label:    'Email Address',
    required: true,
  },
}

const HeadlessBuiltins = () =>
  <Form fields={fields}>
    <Field name="email">
      <Layout>
        <h2 className="mar-t-none">
          Custom Layout for Email field
        </h2>
        <Label/>
        <Text/>
        <Message/>
      </Layout>
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessBuiltins`,fr=()=>r("div",{className:"prose",children:[e("h1",{children:"Headless Fields"}),e("p",{className:"intro wide",children:'One of the problems with any UI library is that it forces you into using the styles provided, or requires you to customise the CSS to match your in-house brand.  This is the problem that "Headless" UI components are designed to solve.'}),e("h2",{children:"Field Render Function"}),e("p",{children:"Instead of using the default rendering components for a field you can provide a function as a child element.  The function will be passed the field context and can render the field any way it likes."}),e(a,{Element:nr,code:lr,caption:"Headless Fields"}),e("h2",{children:"Typical Render Function"}),e("p",{children:"Here's a more complete example showing how a field would typically be rendered using the builtin components."}),e(a,{Element:ar,code:or,caption:"Headless Fields"}),e("h2",{children:"Builtin Components"}),r("p",{children:["You can mix and match your own layout with the builtin components. This example shows how you can use the ",e(le,{}),", ",e(Y,{}),","," ",e(de,{})," and ",e(ce,{})," components to build up the field content."]}),e(a,{Element:cr,code:mr,caption:"Builtin Components"}),e("h2",{children:"Child Components"}),r("p",{children:["If you're using the default layout components and/or providing your own that can access the field context using ",e("code",{children:"useField"})," ","then you don't need to define a function for the ",e(n,{})," body. You can just include them as children of the field component."]}),e(a,{Element:hr,code:pr,caption:"Builtin Components"}),e(u,{uri:"headless-fields"})]}),wr=()=>r(me,{children:[e(c,{path:"",end:!0,element:e(ue,{})}),e(c,{path:"simple-form",element:e(fe,{})}),e(c,{path:"field-validation",element:e(ve,{})}),e(c,{path:"form-validation",element:e(Te,{})}),e(c,{path:"form-submission",element:e(Ne,{})}),e(c,{path:"submission-response",element:e(qe,{})}),e(c,{path:"submission-errors",element:e(Oe,{})}),e(c,{path:"complete-registration",element:e(ze,{})}),e(c,{path:"edit-form",element:e(Xe,{})}),e(c,{path:"debugging",element:e(tr,{})}),e(c,{path:"headless-fields",element:e(fr,{})})]});export{wr as default};
