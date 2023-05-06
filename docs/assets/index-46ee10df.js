import{j as i,a as e,T as b,L as E,F as l,b as a,S as n,c as u,d as c,e as y,f as g,g as A,r as w,h as v,E as C,i as F,D as Y,R as j,k as B,C as I,l as D,m as H,n as O,o as W,p as R,q as P,s as k,M as L,t as V,u as $,v as M,w as d}from"./index-33e67b92.js";import{E as s}from"./Example-581f2c92.js";import{c as f}from"./index.esm-ecaef62f.js";const J=()=>i("div",{children:[e("h1",{children:"Tutorial"}),e("p",{children:"This section of the documentation provides a guided walk-through of the features to get you up and running as quickly as possible."}),e("ul",{className:"menu",children:b.items.map(([r,t])=>e("li",{children:e(E,{to:`/tutorial/${r}`,text:t})},r))})]}),U=()=>i(l,{children:[e(a,{name:"email",label:"Email Address",required:!0}),e(a,{name:"password",type:"password",label:"Password",required:!0}),e(n,{text:"Login"})]}),z=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const BasicLoginForm = () =>
  <Form>
    <Field name="email" label="Email Address" required/>
    <Field name="password" type="password" label="Password" required/>
    <Submit text="Login"/>
  </Form>

export default BasicLoginForm`,_=({prevLink:r,prevText:t,nextLink:o,nextText:h})=>i("div",{className:"flex space",children:[e(S,{caption:"Previous",text:t,link:r}),e(S,{caption:"Next",text:h,link:o})]}),S=({caption:r,text:t,link:o})=>o?i(E,{to:o,className:"prev-next-link",children:[e("h4",{children:r}),e("p",{children:t})]}):e("div",{}),m=({uri:r})=>{const t=b.items.findIndex(N=>N[0]===r);if(t<0)throw`Invalid tutorial page URI: ${r}`;const[o,h]=t>0?b.items[t-1]:[],[p,q]=t<b.items.length-1?b.items[t+1]:[];return e(_,{prevLink:o&&`/tutorial/${o}`,prevText:h,nextLink:p&&`/tutorial/${p}`,nextText:q})},G=()=>i("div",{children:[e("h1",{children:"Defining a Form"}),i("p",{className:"intro",children:["One of the underlying principles of this library is, to borrow a phrase from Larry Wall, to make simple things simple and hard things possible. It should be just as easy, if not easier, to create a form using"," ",e("code",{children:"react-formula"})," as it should be using vanilla HTML."]}),e("h2",{children:"A Simple Login Form"}),e("p",{children:"So without further ado, let's look at the one form that most websites will require: a user login form."}),e(s,{Element:U,code:z,caption:"Basic Login Form",children:e("p",{children:`Try entering some values in the form below and click on the "Login" button. Also see what happens if you don't enter a value for either field.`})}),i("h2",{children:[e("code",{children:"Form"}),", ",e("code",{children:"Field"})," and ",e("code",{children:"Submit"})]}),i("p",{children:["A form is defined using the ",e(u,{})," component.  This example contains two ",e(c,{})," components and a ",e(y,{})," button.  Each ",e(c,{})," ",e("b",{children:"MUST"})," define a ",e("code",{children:"name"})," and everything else is optional. In both cases we add a ",e("code",{children:"label"})," and the ",e("code",{children:"required"})," ","flag to indicate that the user must enter a value.  In the case of the"," ",e("code",{children:"password"})," field we also set the input ",e("code",{children:"type"})," to"," ",e("code",{children:"password"}),".  For the ",e(y,{})," component we set the"," ",e("code",{children:"text"}),' property to customise the text displayed on the button. Otherwise it defaults to "Submit".']}),e("h2",{children:"Where Next?"}),i("p",{children:["The ",e("code",{children:"required"})," property is useful for simple cases, but at some point you'll want to add more thorough validation for fields.  Let's look at that next."]}),e(m,{uri:"simple-form"})]}),K={email:{label:"Email Address",validate:r=>f().trim().email().required("You must enter your email address!").validate(r)},password:{label:"Password",type:"password",validate:r=>f().trim().required("You must enter your password!").min(6,"Your password should be at least 6 characters").validate(r)}},Q=()=>i(l,{fields:K,children:[e(a,{name:"email"}),e(a,{name:"password"}),e(n,{text:"Login"})]}),X=`import { Form, Field, Submit } from '../../../../lib/index.js'

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
      .email()
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

export default LoginWithValidation`,Z=()=>i("div",{children:[e("h1",{children:"Field Validation"}),i("p",{className:"intro",children:["It's good practice to validate fields as thoroughly as possible.  On the client-side this is important to help draw the user's attention to any invalid fields ",e("i",{children:"before"})," the form is submitted.  Of course you'll also need some kind of server-side validation, but we'll look at that later."]}),e("h2",{children:"Login Form With Field Validation"}),i("p",{children:["You can add a ",e("code",{children:"validate"})," property to a field to provide a function to validate the input.  This will be passed the field value and should return a Promise that resolves with the (possibly modified) value if the input is valid, or rejects with an error if not. In these examples we'll be using"," ",e("a",{href:"https://github.com/jquense/yup",children:"Yup"})," but you should be able to use any validation library or even roll your own validation functions for special cases."]}),i("p",{children:["You can add the ",e("code",{children:"validate"})," function to the ",e(c,{})," ","component if you like, but you may find that things quickly get a bit messy.  So this is a good opportunity to demonstrate the other way of defining form fields, using a schema.  This allows you to define your field properties separately and then pass them to the ",e(u,{})," ","component as the ",e("code",{children:"fields"})," property.  When you include a ",e(c,{})," the ",e("code",{children:"name"})," will be used to lookup the default properties for the field from the ",e("code",{children:"fields"})," you've provided."]}),i("p",{children:["There are a number of benefits to defining a separate schema for your form fields.  For one, it means that all your field definitions are in a single place where you can easily inspect and edit them without having to wade through lots of markup.  It also means that your form markup remains free of all the functional code, allowing you to concentrate on layout, styling and other presentational aspects. If you decide to split a long form into multiple parts, change the order of some fields, or perhaps display some fields side-by-side instead of stacked vertically, then it's easier to move a single"," ",e("code",{className:"code",children:"Field"})," element around, or just edit the "," ",e("code",{className:"code",children:"name"})," property than it is to cut and paste large blocks of code."]}),e(s,{Element:Q,code:X,caption:"Field Validation",children:e("p",{children:`Try entering some values in the form below and click on the "Login" button. If you don't provide a value, or if you provide an invalid value then you should see the validation errors.`})}),e("h2",{children:e("code",{children:"validateOnBlur"})}),i("p",{children:["By default, field validation happens when the form is submitted. You can add the ",e("code",{children:"validateOnBlur"})," property to either the"," ",e(u,{})," or individual ",e(c,{})," components if you want the validation to happen when a field is blurred."]}),i("h2",{children:[e("code",{children:"validateOnChange"})," and ",e("code",{children:"minValidationLength"})]}),i("p",{children:["You can add the ",e("code",{children:"validateOnChange"})," property to either the"," ",e(u,{})," or individual ",e(c,{})," components if you want validation to happen any time the field value changes, i.e. as the user types. The ",e("code",{children:"minValidationLength"})," can be set if you only want it to start after the user has entered a particular number of characters. The default values is ",e("code",{children:"1"}),"."]}),e("h2",{children:"Where Next?"}),e("p",{children:"If you need to perform some kind of validation where you have access to all of the submitted values then you can do that at the form level We'll look at that next."}),e(m,{uri:"field-validation"})]}),ee=r=>new Promise((t,o)=>r.password===r.passcheck?t(r):o({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),ie=r=>f().trim().email().required("You must enter your email address!").validate(r),x=r=>f().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(r),re={email:{label:"Email Address",validate:ie},password:{label:"Password",type:"password",validate:x},passcheck:{label:"Confirm Password",type:"password",validate:x}},te=()=>i(l,{fields:re,validate:ee,children:[e(g,{names:"email password passcheck"}),e(n,{text:"Register"})]}),ae=`import { Form, Fields, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, Submit } from '@abw/react-formula'
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
    <Submit text="Register"/>
  </Form>

export default LoginWithValidation`,oe=()=>i("div",{children:[e("h1",{children:"Form Validation"}),e("p",{className:"intro",children:"Sometimes you need access to all the submitted field values to validate the form.  The classic example is a registration form where you ask the user to enter their password twice to make sure that they're sure about what they've entered.  Although this isn't necessarily considered good practice these days, it illustrates the principle well."}),e("h2",{children:"Registration Form With Validation"}),i("p",{children:["You can add a ",e("code",{children:"validate"})," property to a form to provide a function to validate the inputs from all fields.  The function will be called after the field-level validation, and only if all fields have validated successfully."]}),i("p",{children:["The function will be passed a ",e("code",{children:"values"})," object containing the validated field values.  It should return a Promise that resolves with the (possibly modified) values if the input is valid, or rejects with an an ",e("code",{children:"error"})," and/or array of ",e("code",{children:"errors"})," if not. The ",e("code",{children:"error"})," can be used to define an error for the form that isn't specify to any particular field.  Each item in the errors array should relate to a field identified by ",e("code",{children:"name"}),", with an additional ",e("code",{children:"message"})," indicating why it is invalid."]}),i("p",{children:["We're also using this opportunity to introduce you to the"," ",e(A,{})," component which allows you to add multiple fields to a ",e(u,{})," in one fell swoop."]}),e(s,{Element:te,code:ae,caption:"Form Validation",children:e("p",{children:`Try entering some values in the form below and click on the "Register" button. You should see the field level validation errors if you don't provide a valid value for any field. Or if you provide different values for the Password and Confirm Password fields then you should see the form validation errors.`})}),e("h2",{children:"Where Next?"}),e("p",{children:"Now that we've handled the validation of the form we can talk about how the form is submitted."}),e(m,{uri:"form-validation"})]}),se=()=>{const[r,t]=w.useState();return i(v,{children:[i(l,{onSubmit:h=>Promise.resolve(t(h)),debug:!0,children:[e(a,{name:"email",label:"Email Address",required:!0}),e(a,{name:"password",type:"password",label:"Password",required:!0}),e(n,{text:"Login"})]}),r?i("div",{className:"debug",children:[e("h4",{children:"Submitted Values"}),e("pre",{children:JSON.stringify(r)})]}):null]})},le=`import { Form, Field, Submit } from '../../../../lib/index.js'

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
        ? <div className="debug">
            <h4>Submitted Values</h4>
            <pre>{JSON.stringify(values)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default DummySubmit`,ne=()=>i("div",{children:[e("h1",{children:"Form Submission"}),i("p",{className:"intro",children:["To handle submission of a form we need to add an ",e("code",{children:"onSubmit"})," ","handler to the ",e(u,{})," component. In most cases this will be making a call to a back-end API but to demonstrate the basic principle let's start with something simpler."]}),i("h2",{children:[e("code",{children:"onSubmit"})," Handler"]}),i("p",{children:["We'll create a function which stores the submitted"," ",e("code",{children:"values"})," in a state variable and displays them on the screen.  The ",e("code",{children:"onSubmit"})," handler is passed an object containing the validated form values.  It should return a Promise which resolves on success.  If an error occurs then the Promise should reject, returning an object containing either an ",e("code",{children:"error"})," and/or an array of ",e("code",{children:"errors"}),".  These are handled the same as for client-side form validation."]}),e(s,{Element:se,code:le,caption:"Dummy Submission",children:e("p",{children:'Try entering some values in the form below and click on the "Login" button.  You should see the submitted values appear in a debugging window beneath the form.'})}),e(m,{uri:"form-submission"})]}),de=()=>{const[r,t]=w.useState();return i(v,{children:[i(l,{onSubmit:p=>Promise.resolve({status:200,data:{message:"Welcome back!  You are now logged in.",user:{id:12345,email:p.email,name:"Bobby Badger"}}}),onSuccess:p=>t(p.data),debug:!0,children:[e(a,{name:"email",label:"Email Address",required:!0}),e(a,{name:"password",type:"password",label:"Password",required:!0}),e(n,{text:"Login"})]}),r?i("div",{className:"debug",children:[e("h4",{children:"Emulated Response"}),e("pre",{children:JSON.stringify(r,null,2)})]}):null]})},ce=`import { Form, Field, Submit } from '../../../../lib/index.js'

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
        ? <div className="debug">
            <h4>Emulated Response</h4>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default SubmitResponse`,me=()=>i("div",{children:[e("h1",{children:"Submission Response"}),e("p",{className:"intro",children:"We now need to think about what happens in the real world where a form submission results in a call to a back-end API.  There are, broadly speaking, two possible outcomes: the call is successful, or it fails for some reason."}),e("h2",{children:e("code",{children:"onSuccess"})}),i("p",{children:["Let's start by looking at the case there the submission is successful.  In this example we define an ",e("code",{children:"onSubmit"})," function which returns a resolved promise.  This is emulating how both"," ",e("a",{href:"https://axios-http.com/",children:"Axios"})," and the native"," ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"Fetch API"})," ","API work."]}),i("p",{children:["The additional step is to defined an ",e("code",{children:"onSuccess"})," handler which can do something to handle the successful response.  In this case we're calling the ",e("code",{children:"setResponse"})," function to store the response data, much like in the previous example, except that this time we're emulating the full request and response cycle."]}),e(s,{Element:de,code:ce,caption:"Submission Response",children:e("p",{children:'Try entering some values in the form below and click on the "Login" button.  You should see the values returned by an emulated server response appear in a debugging window beneath the form.  Also note that the form is reset on a successful submission.'})}),e(m,{uri:"submission-response"})]}),ue=()=>e(v,{children:i(l,{onSubmit:()=>{throw"Oh noes! An error occurred"},children:[e(a,{name:"email",label:"Email Address",required:!0}),e(a,{name:"password",type:"password",label:"Password",required:!0}),e(n,{text:"Login"})]})}),he=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitThrow = () => {
  const onSubmit = () => {
    throw('Oh noes! An error occurred')
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Field name="email" label="Email Address" required/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
    </>
  )
}

export default SubmitThrow`,pe=()=>e(v,{children:i(l,{onSubmit:()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]}),children:[e(a,{name:"email",label:"Email Address",required:!0,debug:!0}),e(a,{name:"password",type:"password",label:"Password",required:!0}),e(n,{text:"Login"})]})}),fe=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

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
        <Field name="email" label="Email Address" required debug/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
    </>
  )
}

export default SubmitReject`,be=()=>{const[r,t]=w.useState();return i(v,{children:[i(l,{onSubmit:()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]}),onError:t,children:[e(a,{name:"email",label:"Email Address",required:!0,debug:!0}),e(a,{name:"password",type:"password",label:"Password",required:!0}),e(n,{text:"Login"})]}),r?i("div",{className:"debug",children:[e("h4",{children:"Submission Error"}),e("pre",{children:JSON.stringify(r,null,2)})]}):null]})},ge=`import { Form, Field, Submit } from '../../../../lib/index.js'

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
        ? <div className="debug">
            <h4>Submission Error</h4>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default SubmitThrow`,ve=()=>i("div",{children:[e("h1",{children:"Submission Errors"}),i("p",{className:"intro",children:["For a good user experience we should use client-side validation to try and catch all data entry errors ",e("i",{children:"before"})," they get submitted. However, it's not always possible to do that.  It may be the case that validating a field requires access to the database and is best handled on the server.  Or perhaps a field should be validated server-side for security reasons (e.g. validating a Captcha).  Or an API request could fail or otherwise be rejected for any number of other reasons.  So we must know how to handle these cases."]}),e("h2",{children:"Simple Error"}),i("p",{children:["If a submission throws an error or returns an error via a rejected Promise then the form submission handler will set the internal"," ",e("code",{children:"error"})," state variable. By default this error will be displayed in the form header.  See the ",e(C,{})," component for more information about changing how and if errors are displayed."]}),e(s,{Element:ue,code:he,caption:"Error Thrown",children:e("p",{children:"Try submitting this form to see what happens when an error is thrown. You should see the error displayed in the form header and also in a debugging window beneath the form."})}),e("h2",{children:"Rejected Promise"}),i("p",{children:["In most cases a failed submission should return a rejected Promise. The data returned should be an objecting containing either a single",e("code",{children:"error"})," string (or object containing a ",e("code",{children:"message"}),"), or an array of ",e("code",{children:"errors"}),".  Each element in the array can be an error string, but the more usual (and useful) case is for each element to be an object containing the error ",e("code",{children:"message"}),"."]}),i("p",{children:["The benefit of this approach is that error objects can also contain the ",e("code",{children:"name"})," of the field that it relates to.  The corresponding field will be marked as invalid and have the error message set so that it can be displayed under the input.  Furthermore, the field label is copied into the error element so that it can be displayed in the error panel at the start of the form."]}),e("p",{children:"This would be the typical way to handle a request that failed due to server-side validation errors."}),e(s,{Element:pe,code:fe,caption:"Error Thrown",children:e("p",{children:"Try submitting the form to see the errors generated."})}),e("h2",{children:e("code",{children:"onError"})}),i("p",{children:["You can provide an ",e("code",{children:"onError"})," handler which will be called when an error response is received.  In this example we simply call a ",e("code",{children:"setError()"})," function to store the error in a React state variable and then display it beneath the form."]}),e(s,{Element:be,code:ge,caption:"onError",children:i("p",{children:["Try submitting the form to see the errors generated.  The "," ",e("code",{children:"onError"})," handler will store them in the state variable and display them beneath the form."]})}),e(m,{uri:"submission-errors"})]}),we=r=>new Promise((t,o)=>r.password===r.passcheck?t(r):o({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),ye=r=>f().trim().email().required("You must enter your email address!").validate(r),T=r=>f().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(r),Fe={name:{label:"Your name",required:!0},email:{label:"Email address",required:!0,validate:ye},password:{label:"Password",type:"password",required:!0,validate:T},passcheck:{label:"Confirm password",type:"password",required:!0,validate:T},experience:{label:"What is your level of experience?",type:"radio",options:["Beginner","Intermediate","Expert"],className:"wide",inputsClass:"radio inputs lg-grid-3"},dob:{type:"date",label:"Date of Birth"},price:{type:"number",label:"How much would you pay for this?",prefix:"£",suffix:".00",min:11,max:100},animal:{label:"What is your favourite animal?",type:"select",default:"Badger",options:["Badger","Ferret","Stoat"]},color:{label:"What is your favourite color?",type:"select",default:"Red",options:[{value:null,text:"Select a color"},{value:"red",text:"Red"},{value:"orange",text:"Orange"},{value:"yellow",text:"Yellow"},{value:"violet",text:"Violet"},{value:"white",text:"White"}]},terms:{label:"Terms and conditions",type:"checkbox",text:"I accept the Terms and Conditions",className:"wide",required:!0,requiredMessage:"You must accept the Terms and Conditions"}},Se=()=>{const[r,t]=w.useState();return i(l,{fields:Fe,validate:we,showRequired:!0,showOptional:!0,children:[i(F,{legend:"Your Details",children:[e("div",{className:"lg-grid-2",children:e(g,{names:"name email"})}),e("div",{className:"lg-grid-2",children:e(g,{names:"password passcheck"})})]}),i(F,{legend:"Other Information",children:[e("div",{className:"lg-grid-2",children:e(g,{names:"dob price"})}),e(a,{name:"experience"}),i("div",{className:"lg-grid-2",children:[e(a,{name:"animal"}),e(a,{name:"color",onChange:t})]}),(r==null?void 0:r.value)&&i("div",{style:{color:r.value,backgroundColor:"#444",padding:"0.25rem 0.5rem",textAlign:"center"},children:[r.value," is a great color!"]})]}),e(a,{name:"terms"}),e(n,{text:"Register"}),e(Y,{})]})},xe=`import { Form, Field, Fields, Fieldset, Submit, Debug } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
import { useState } from 'react'
// PRETEND: import { Form, Field, Fields, Fieldset, Submit, Debug } from '@abw/react-formula'
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
    required: true
  },
  email: {
    label:    'Email address',
    required: true,
    validate: validateEmail
  },
  password: {
    label:    'Password',
    type:     'password',
    required: true,
    validate: validatePassword
  },
  passcheck: {
    label:    'Confirm password',
    type:     'password',
    required: true,
    validate: validatePassword
  },
  experience: {
    label:    'What is your level of experience?',
    type:     'radio',
    options:  ['Beginner', 'Intermediate', 'Expert'],
    className: 'wide',
    inputsClass: 'radio inputs lg-grid-3',
  },
  dob: {
    type:  'date',
    label: 'Date of Birth',
  },
  price: {
    type:  'number',
    label: 'How much would you pay for this?',
    prefix: '£',
    suffix: '.00',
    min: 11,
    max: 100
  },
  animal: {
    label:    'What is your favourite animal?',
    type:     'select',
    default:  'Badger',
    options:  ['Badger', 'Ferret', 'Stoat']
  },
  color: {
    label:    'What is your favourite color?',
    type:     'select',
    default:  'Red',
    options:  [
      { value: null,     text: 'Select a color' },
      { value: 'red',    text: 'Red'    },
      { value: 'orange', text: 'Orange' },
      { value: 'yellow', text: 'Yellow' },
      { value: 'violet', text: 'Violet' },
      { value: 'white',  text: 'White'  },
    ]
  },
  terms: {
    label:    'Terms and conditions',
    type:     'checkbox',
    text:     'I accept the Terms and Conditions',
    className: 'wide',
    required:  true,
    requiredMessage: 'You must accept the Terms and Conditions'
  },
}

const RegistrationForm = () => {
  const [color, setColor] = useState()

  return (
    <Form
      fields={fields} validate={validateForm}
      showRequired showOptional
    >
      <Fieldset legend="Your Details">
        <div className="lg-grid-2">
          <Fields names="name email"/>
        </div>
        <div className="lg-grid-2">
          <Fields names="password passcheck"/>
        </div>
      </Fieldset>
      <Fieldset legend="Other Information">
        <div className="lg-grid-2">
          <Fields names="dob price"/>
        </div>
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
      <Debug/>
    </Form>
  )
}

export default RegistrationForm`,Te=`@media (min-width: 1024px) {
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
}`,Ee=()=>i("div",{children:[e("h1",{children:"Complete Registration Form"}),e("p",{className:"intro",children:"Here's a more complete (albeit rather contrived) example of a user registration form."}),e("h2",{children:"Input Types"}),i("p",{children:["This example demonstrates some of the other fields input types. Set the ",e(c,{})," ",e("code",{children:"type"})," to ",e("code",{children:"radio"})," for a ",e(j,{})," button input and provide some ",e("code",{children:"options"}),", as shown here for the ",e("code",{children:"experience"})," field.  Or set it to ",e("code",{children:"select"})," for a ",e(B,{})," input as shown in the"," ",e("code",{children:"animal"})," field.  Set it to ",e("code",{children:"checkbox"})," for a"," ",e(I,{})," and provide some ",e("code",{children:"text"})," to go alongside it."]}),i("p",{children:["You can also use the ",e("code",{children:"type"})," to set other text input types, like ",e("code",{children:"number"})," and ",e("code",{children:"date"}),"."]}),e(s,{Element:Se,code:xe,caption:"Registration Form"}),i("h2",{children:[e("code",{children:"Fieldset"})," Component"]}),i("p",{children:["The example includes the ",e(D,{})," component which can be used to group fields together in a set, complete with a ",e("code",{children:"legend"}),"."]}),i("h2",{children:[e("code",{children:"Debug"})," Component"]}),i("p",{children:["This example also includes the ",e(H,{})," component which, as the name suggests, can be useful for debugging."]}),i("h2",{children:[e("code",{children:"showRequired"})," and ",e("code",{children:"showOptional"})]}),i("p",{children:["The ",e("code",{children:"showOptional"})," and ",e("code",{children:"showRequired"})," properties can be set on the ",e(u,{})," or individual ",e(c,{})," components to have an additional label displayed telling the user which fields they do and don't need to complete."]}),e("h2",{children:e("code",{children:"onChange"})}),i("p",{children:["The ",e("code",{children:"onChange"})," property can be added to a ",e(c,{})," to watch for changes in the field value.  You can see it in use above in the ",e("code",{children:"color"})," field."]}),e("h2",{children:"Custom CSS"}),i("p",{children:["The example above uses a couple of custom CSS classes, "," ",e("code",{children:"lg-grid-2"})," and ",e("code",{children:"lg-grid-3"})," to display fields in 2 and 3 columns, respectively, on larger screen sizes. You may already be using a CSS framework which includes something similar which you can use instead.  Here's the CSS for those classes for completeness."]}),e(O,{code:Te,language:"css",className:"mar-b-2"}),e(m,{uri:"complete-registration"})]}),Re={name:{label:"Product Name",required:!0},description:{label:"Description",type:"textarea",required:!0},manufacturer:{label:"Manufacturer",type:"select",debug:!0,options:[{value:"100",text:"Alan's Accessories"},{value:"101",text:"Brian's Bits"},{value:"102",text:"Charlie's Components"}]},price:{type:"number",label:"Price?",prefix:"$"}},Pe={id:"9876",name:"Widget-2000",description:"This is an awesome widget",manufacturer:"102",price:12.99},ke=()=>i(l,{fields:Re,values:Pe,children:[e(g,{names:"name description manufacturer price"}),e(W,{submit:{text:"Save Changes"}})]}),Le=`import { Form, Fields, ResetSubmit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, ResetSubmit, Debug } from '@abw/react-formula'

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
    options:  [
      { value: '100', text: "Alan's Accessories" },
      { value: '101', text: "Brian's Bits" },
      { value: '102', text: "Charlie's Components" },
    ],
  },
  price: {
    type:  'number',
    label: 'Price?',
    prefix: '$',
  },
}

const values = {
  id:           '9876',
  name:         'Widget-2000',
  description:  'This is an awesome widget',
  manufacturer: '102',
  price:        12.99
}

const EditForm = () =>
  <Form fields={fields} values={values}>
    <Fields names="name description manufacturer price"/>
    <ResetSubmit submit={{ text: 'Save Changes' }}/>
  </Form>

export default EditForm`,qe=()=>i("div",{children:[e("h1",{children:"Edit Form"}),e("p",{className:"intro",children:"Another common use case for form is in editing existing data records."}),i("h2",{children:["Specifying ",e("code",{children:"values"})]}),i("p",{children:["You can pass the ",e("code",{children:"values"})," property to a ",e(u,{})," to seed it with initial values for fields."]}),e(s,{Element:ke,code:Le,caption:"Edit Form",children:e("p",{children:'Try changing some of the values in the form and then click on the "Reset" button.  The fields will reset to their original values.'})}),e(m,{uri:"edit-form"})]}),Ne={email:{label:"Email Address",required:!0}},Ae=()=>i(l,{fields:Ne,children:[e(a,{name:"email",children:r=>i("div",{className:"field",children:[e("label",{htmlFor:r.id,children:r.label}),e("div",{className:"inputs",children:e("input",{className:"input",ref:r.inputRef,"aria-disabled":r.disabled,tabIndex:r.disabled?-1:r.tabIndex,onFocus:r.onFocus,onBlur:r.onBlur,onChange:t=>r.onChange(t.target.value)})})]})}),e(n,{text:"Login"})]}),Ce=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default HeadlessFields`,Ye={email:{label:"Email Address"}},je=()=>e(l,{fields:Ye,children:e(a,{name:"email",children:r=>i("div",{className:"boxed",children:["This is where you render the ",r.name,' field with an "',r.label,'" label']})})}),Be=`import { Form, Field } from '../../../../lib/index.js'

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

export default HeadlessBlank`,Ie={email:{label:"Email Address",required:!0}},De=()=>i(l,{fields:Ie,children:[e(a,{name:"email",children:r=>i(R,{children:[i("h3",{children:["Custom Layout for ",r.name]}),e(P,{}),e(k,{}),e(L,{})]})}),e(n,{text:"Login"})]}),He=`import {
  Form, Field, FieldLayout, Label, Text, Message, Submit
} from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, FieldLayout, Label, Text, Message, Submit
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
        <FieldLayout>
          <h3>Custom Layout for {field.name}</h3>
          <Label/>
          <Text/>
          <Message/>
        </FieldLayout>
      }
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessBuiltins`,Oe={email:{label:"Email Address",required:!0}},We=()=>i(l,{fields:Oe,children:[e(a,{name:"email",children:i(R,{children:[e("h3",{children:"Custom Layout for Email field"}),e(P,{}),e(k,{}),e(L,{})]})}),e(n,{text:"Login"})]}),Ve=`import {
  Form, Field, FieldLayout, Label, Text, Message, Submit
} from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, FieldLayout, Label, Text, Message, Submit
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
      <FieldLayout>
        <h3>Custom Layout for Email field</h3>
        <Label/>
        <Text/>
        <Message/>
      </FieldLayout>
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessBuiltins`,$e=()=>i("div",{children:[e("h1",{children:"Headless Fields"}),e("p",{className:"intro",children:'One of the problems with any UI library is that it forces you into using the styles provided, or requires you to customise the CSS to match your in-house brand.  This is the problem that "Headless" UI components are designed to solve.'}),e("h2",{children:"Field Render Function"}),e("p",{children:"Instead of using the default rendering components for a field you can provide a function as a child element.  The function will be passed the field context and can render the field any way it likes."}),e(s,{Element:je,code:Be,caption:"Headless Fields"}),e("h2",{children:"Typical Render Function"}),e("p",{children:"Here's a more complete example showing how a field would typically be rendered using the builtin components."}),e(s,{Element:Ae,code:Ce,caption:"Headless Fields"}),e("h2",{children:"Builtin Components"}),e("p",{children:"You can mix and match your own layout with the builtin components. This example shows how you can use the"}),e(s,{Element:De,code:He,caption:"Builtin Components"}),e("h2",{children:"Child Layout"}),i("p",{children:["If you're using the default layout components and/or providing your own that can access the field context using ",e("code",{children:"useField"})," ","then you don't need to define a function for the ",e(c,{})," body."]}),e(s,{Element:We,code:Ve,caption:"Builtin Components"}),e("h2",{children:e("code",{children:"FieldLayout"})}),i("p",{children:["The ",e(V,{})," component renders a ",e("code",{children:"div"})," with the"," ",e("code",{children:"className"})," including ",e("code",{children:"field"})," and any of"," ",e("code",{children:"focus"}),", ",e("code",{children:"valid"}),", ",e("code",{children:"invalid"})," or"," ",e("code",{children:"disabled"})," depending on the field state."]}),e("h2",{children:e("code",{children:"Label"})}),i("p",{children:["The ",e($,{})," component renders a ",e("code",{children:"div"})," with the"," ",e("code",{children:"className"})," including ",e("code",{children:"field"})," and any of"," ",e("code",{children:"focus"}),", ",e("code",{children:"valid"}),", ",e("code",{children:"invalid"})," or"," ",e("code",{children:"disabled"})," depending on the field state."]}),e(m,{uri:"headless-fields"})]}),ze=()=>i(M,{children:[e(d,{path:"",end:!0,element:e(J,{})}),e(d,{path:"simple-form",element:e(G,{})}),e(d,{path:"field-validation",element:e(Z,{})}),e(d,{path:"form-validation",element:e(oe,{})}),e(d,{path:"form-submission",element:e(ne,{})}),e(d,{path:"submission-response",element:e(me,{})}),e(d,{path:"submission-errors",element:e(ve,{})}),e(d,{path:"complete-registration",element:e(Ee,{})}),e(d,{path:"edit-form",element:e(qe,{})}),e(d,{path:"headless-fields",element:e($e,{})})]});export{ze as default};
