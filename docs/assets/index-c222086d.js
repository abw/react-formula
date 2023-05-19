import{j as t,a as e,T as O,b as q,P as H,F as o,c as r,S as l,E as a,d as c,e as n,f as x,N as w,g as V,R as T,h as v,V as E,i as k,k as $,l as M,M as J,m,n as U,o as A,r as b,p as f,q as C,s as z,t as _,u as R,v as L,w as G,x as K,C as Q,y as X,z as Z,A as ee,O as te,B as ie,D as Y,G as B,H as re,I as ae,J as y,L as j,K as D,Q as I,U as W,W as oe,X as se,Y as ne,Z as le,_ as de,$ as d}from"./index-860d35d1.js";import{c as p}from"./index.esm-ecaef62f.js";const ue=()=>t("div",{children:[e("h1",{children:"Tutorial"}),e("p",{className:"intro",children:"This section of the documentation provides a guided walk-through of the features without going into too much detail.  The idea is to give you an overview of the functionality to get a feel for how it works."}),e(O,{menu:q,url:"/tutorial"})]}),u=({uri:i})=>e(H,{uri:i,menu:q}),ce=()=>t(o,{children:[e("h2",{children:"Login"}),e(r,{name:"email",label:"Email Address",required:!0}),e(r,{name:"password",type:"password",label:"Password",required:!0}),t("div",{className:"flex space",children:[e("a",{href:"https://tinyurl.com/576m4j6n",children:"Forgot your password?"}),e(l,{text:"Login"})]})]}),me=`import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const BasicLoginForm = () =>
  <Form>
    <h2>Login</h2>
    <Field name="email" label="Email Address" required/>
    <Field name="password" type="password" label="Password" required/>
    <div className="flex space">
      <a href="https://tinyurl.com/576m4j6n">
        Forgot your password?
      </a>
      <Submit text="Login"/>
    </div>
  </Form>

export default BasicLoginForm`,he=()=>t("div",{children:[e("h1",{children:"Defining a Form"}),t("p",{className:"intro",children:["One of the underlying principles of this library is, to borrow a phrase from Larry Wall, to make simple things simple and hard things possible. It should be just as easy, if not easier, to create a form using"," ",e("code",{children:"react-formula"})," as it should be using vanilla HTML."]}),e("h2",{children:"A Simple Login Form"}),e("p",{children:"So without further ado, let's look at the one form that most websites will require: a user login form."}),e(a,{Element:ce,code:me,caption:"Basic Login Form",children:e("p",{children:`Try entering some values in the form below and click on the "Login" button. Also see what happens if you don't enter a value for either field.  Note that the "Forgot your password?" link doesn't do anything useful - it't just there to demonstrate how you can include your own markup in a form.`})}),e("h2",{children:e("code",{children:"Form"})}),t("p",{children:["A form is defined using the ",e(c,{})," component.  You can include any content you like inside the component, but most often you'll want to include at least one ",e(n,{})," and a ",e(x,{})," button."]}),e("h2",{children:e("code",{children:"Field"})}),t("p",{children:["The example contains two ",e(n,{})," components.  Each ",e("b",{children:"MUST"})," ","define a ",e(w,{})," and everything else is optional. In both cases we add a ",e(V,{})," and the ",e(T,{})," ","property to indicate that the user must enter a value.  In the case of the"," ",e("code",{children:"password"})," field we also set the input ",e(v,{})," to"," ",e("code",{children:"password"}),"."]}),e("h2",{children:e("code",{children:"Submit"})}),t("p",{children:["The ",e(x,{})," component is used to render a button to submit the form.  In the example above we set the ",e("code",{children:"text"}),' property to customise the text displayed on the button. Otherwise it defaults to "Submit".']}),e("h2",{children:"Where Next?"}),t("p",{children:["The ",e(T,{})," property is useful for simple cases, but at some point you'll want to add more thorough validation for fields.  Let's look at that next."]}),e(u,{uri:"simple-form"})]}),pe={email:{label:"Email Address",validate:i=>p().trim().email().required("You must enter your email address!").validate(i)},password:{label:"Password",type:"password",validate:i=>p().trim().required("You must enter your password!").min(6,"Your password should be at least 6 characters").validate(i)}},fe=()=>t(o,{fields:pe,children:[e(r,{name:"email"}),e(r,{name:"password"}),e(l,{text:"Login"})]}),be=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default LoginWithValidation`,ge=()=>t("div",{children:[e("h1",{children:"Field Validation"}),t("p",{className:"intro",children:["It's good practice to validate fields as thoroughly as possible.  On the client-side this is important to help draw the user's attention to any invalid fields ",e("i",{children:"before"})," the form is submitted.  Of course you'll also need some kind of server-side validation, but we'll look at that later."]}),e("h2",{children:"Login Form With Field Validation"}),t("p",{children:["You can add a ",e(E,{})," property to a field to provide a function to validate the input.  This will be passed the field value and should return a Promise that resolves with the (possibly modified) value if the input is valid, or rejects with an error if not. In these examples we'll be using"," ",e("a",{href:"https://github.com/jquense/yup",children:"Yup"})," but you should be able to use any validation library or even roll your own validation functions for special cases."]}),t("p",{children:["You can add the ",e(E,{})," function to the ",e(n,{})," ","component if you like, but you may find that things quickly get a bit messy.  So this is a good opportunity to demonstrate the other way of defining form fields, using a schema.  This allows you to define your field properties separately and then pass them to the ",e(c,{})," ","component as the ",e(k,{})," property.  When you include a ",e(n,{})," the ",e(w,{})," will be used to lookup the default properties for the field from the ",e(k,{})," you've provided."]}),t("p",{children:["There are a number of benefits to defining a separate schema for your form fields.  For one, it means that all your field definitions are in a single place where you can easily inspect and edit them without having to wade through lots of markup.  It also means that your form markup remains free of all the functional code, allowing you to concentrate on layout, styling and other presentational aspects. If you decide to split a long form into multiple parts, change the order of some fields, or perhaps display some fields side-by-side instead of stacked vertically, then it's easier to move a single"," ",e(n,{})," element around, or just edit the ",e(w,{})," property than it is to cut and paste large blocks of code."]}),e(a,{Element:fe,code:be,caption:"Field Validation",children:e("p",{children:`Try entering some values in the form below and click on the "Login" button. If you don't provide a value, or if you provide an invalid value then you should see the validation errors.`})}),e("h2",{children:e("code",{children:"validateOnBlur"})}),t("p",{children:["By default, field validation happens when the form is submitted. You can add the ",e($,{})," property to either the"," ",e(c,{})," or individual ",e(n,{})," components if you want the validation to happen when a field is blurred."]}),e("h2",{children:e("code",{children:"validateOnChange"})}),t("p",{children:["You can add the ",e(M,{})," property to either the"," ",e(c,{})," or individual ",e(n,{})," components if you want validation to happen any time the field value changes, i.e. as the user types."]}),e("h2",{children:e("code",{children:"minValidateLength"})}),t("p",{children:["The ",e(J,{})," can be set if you only want validation to start after the user has entered a particular number of characters. The default values is ",e("code",{children:"1"}),"."]}),e("h2",{children:"Where Next?"}),e("p",{children:"If you need to perform some kind of validation where you have access to all of the submitted values then you can do that at the form level We'll look at that next."}),e(u,{uri:"field-validation"})]}),we=i=>new Promise((s,h)=>i.password===i.passcheck?s(i):h({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),ve=i=>p().trim().email().required("You must enter your email address!").validate(i),P=i=>p().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(i),ye={email:{label:"Email Address",validate:ve},password:{label:"Password",type:"password",validate:P},passcheck:{label:"Confirm Password",type:"password",validate:P}},Fe=()=>t(o,{fields:ye,validate:we,children:[e(m,{names:"email password passcheck"}),e(l,{text:"Register"})]}),Se=`import { Form, Fields, Submit } from '../../../../lib/index.js'

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

export default LoginWithValidation`,xe=()=>t("div",{children:[e("h1",{children:"Form Validation"}),e("p",{className:"intro",children:"Sometimes you need access to all the submitted field values to validate the form.  The classic example is a registration form where you ask the user to enter their password twice to make sure that they're sure about what they've entered.  Although this isn't necessarily considered good practice these days, it illustrates the principle well."}),e("h2",{children:"Registration Form With Validation"}),t("p",{children:["You can add a ",e(U,{})," property to a form to provide a function to validate the inputs from all fields.  The function will be called after the field-level validation, and only if all fields have validated successfully."]}),t("p",{children:["The function will be passed a ",e("code",{children:"values"})," object containing the validated field values.  It should return a Promise that resolves with the (possibly modified) values if the input is valid, or rejects with an an ",e("code",{children:"error"})," and/or array of ",e("code",{children:"errors"})," if not. The ",e("code",{children:"error"})," can be used to define an error for the form that isn't specify to any particular field.  Each item in the errors array should relate to a field identified by ",e("code",{children:"name"}),", with an additional ",e("code",{children:"message"})," indicating why it is invalid."]}),t("p",{children:["We're also using this opportunity to introduce you to the"," ",e(A,{})," component which allows you to add multiple fields to a ",e(c,{})," in one fell swoop."]}),e(a,{Element:Fe,code:Se,caption:"Form Validation",children:e("p",{children:`Try entering some values in the form below and click on the "Register" button. You should see the field level validation errors if you don't provide a valid value for any field. Or if you provide different values for the Password and Confirm Password fields then you should see the form validation errors.`})}),e("h2",{children:"Where Next?"}),e("p",{children:"Now that we've handled the validation of the form we can talk about how the form is submitted."}),e(u,{uri:"form-validation"})]}),Te=()=>{const[i,s]=b.useState();return t(f,{children:[t(o,{onSubmit:S=>Promise.resolve(s(S)),debug:!0,children:[e(r,{name:"email",label:"Email Address",required:!0}),e(r,{name:"password",type:"password",label:"Password",required:!0}),e(l,{text:"Login"})]}),i?t("div",{className:"debug",children:[e("h4",{children:"Submitted Values"}),e("pre",{children:JSON.stringify(i)})]}):null]})},Ee=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default DummySubmit`,ke=()=>t("div",{children:[e("h1",{children:"Form Submission"}),t("p",{className:"intro",children:["To handle submission of a form we need to add an ",e("code",{children:"onSubmit"})," ","handler to the ",e(c,{})," component. In most cases this will be making a call to a back-end API but to demonstrate the basic principle let's start with something simpler."]}),t("h2",{children:[e("code",{children:"onSubmit"})," Handler"]}),t("p",{children:["We'll create a function which stores the submitted"," ",e("code",{children:"values"})," in a state variable and displays them on the screen.  The ",e(C,{})," handler is passed an object containing the validated form values.  It should return a Promise which resolves on success.  If an error occurs then the Promise should reject, returning an object containing either an ",e("code",{children:"error"})," and/or an array of ",e("code",{children:"errors"}),".  These are handled the same as for client-side form validation."]}),e(a,{Element:Te,code:Ee,caption:"Dummy Submission",children:e("p",{children:'Try entering some values in the form below and click on the "Login" button.  You should see the submitted values appear in a debugging window beneath the form.'})}),e("h2",{children:"Where Next?"}),e("p",{children:"When the form is submitted there are two possible outcomes.  Either the submission is successful, or there's an error (or errors) that need to be handled.  We'll look at these in the next few pages."}),e(u,{uri:"form-submission"})]}),Re=()=>{const[i,s]=b.useState();return t(f,{children:[t(o,{onSubmit:g=>Promise.resolve({status:200,data:{message:"Welcome back!  You are now logged in.",user:{id:12345,email:g.email,name:"Bobby Badger"}}}),onSuccess:g=>s(g.data),debug:!0,children:[e(r,{name:"email",label:"Email Address",required:!0}),e(r,{name:"password",type:"password",label:"Password",required:!0}),e(l,{text:"Login"})]}),i?t("div",{className:"debug",children:[e("h4",{children:"Emulated Response"}),e("pre",{children:JSON.stringify(i,null,2)})]}):null]})},Le=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default SubmitResponse`,Pe=()=>t("div",{children:[e("h1",{children:"Submission Response"}),e("p",{className:"intro",children:"We now need to think about what happens in the real world where a form submission results in a call to a back-end API.  There are, broadly speaking, two possible outcomes: the call is successful, or it fails for some reason."}),e("h2",{children:e("code",{children:"onSuccess"})}),t("p",{children:["Let's start by looking at the case there the submission is successful.  In this example we define an ",e(C,{})," function which returns a resolved promise.  This is emulating how both"," ",e("a",{href:"https://axios-http.com/",children:"Axios"})," and the native"," ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"Fetch API"})," ","API work."]}),t("p",{children:["The additional step is to defined an ",e(z,{})," handler which can do something to handle the successful response.  In this case we're calling the ",e("code",{children:"setResponse"})," function to store the response data, much like in the previous example, except that this time we're emulating the full request and response cycle."]}),e(a,{Element:Re,code:Le,caption:"Submission Response",children:e("p",{children:'Try entering some values in the form below and click on the "Login" button.  You should see the values returned by an emulated server response appear in a debugging window beneath the form.  Also note that the form is reset on a successful submission.'})}),e("h2",{children:"Where Next?"}),e("p",{children:"What happens if the submission isn't successful?  We'll look at handling submission errors on the next page."}),e(u,{uri:"submission-response"})]}),Ne=()=>e(f,{children:t(o,{onSubmit:()=>{throw"Oh noes! An error occurred"},children:[e(r,{name:"email",label:"Email Address",required:!0}),e(r,{name:"password",type:"password",label:"Password",required:!0}),e(l,{text:"Login"})]})}),qe=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default SubmitThrow`,Ae=()=>e(f,{children:t(o,{onSubmit:()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]}),children:[e(r,{name:"email",label:"Email Address",required:!0,debug:!0}),e(r,{name:"password",type:"password",label:"Password",required:!0}),e(l,{text:"Login"})]})}),Ce=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default SubmitReject`,Ye=()=>{const[i,s]=b.useState();return t(f,{children:[t(o,{onSubmit:()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]}),onError:s,children:[e(r,{name:"email",label:"Email Address",required:!0,debug:!0}),e(r,{name:"password",type:"password",label:"Password",required:!0}),e(l,{text:"Login"})]}),i?t("div",{className:"debug",children:[e("h4",{children:"Submission Error"}),e("pre",{children:JSON.stringify(i,null,2)})]}):null]})},Be=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default SubmitThrow`,je=()=>t("div",{children:[e("h1",{children:"Submission Errors"}),t("p",{className:"intro",children:["For a good user experience we should use client-side validation to try and catch all data entry errors ",e("i",{children:"before"})," they get submitted. However, it's not always possible to do that.  It may be the case that validating a field requires access to the database and is best handled on the server.  Or perhaps a field should be validated server-side for security reasons (e.g. validating a Captcha).  Or an API request could fail or otherwise be rejected for any number of other reasons.  So we must know how to handle these cases."]}),e("h2",{children:"Simple Error"}),t("p",{children:["If a submission throws an error or returns an error via a rejected Promise then the form submission handler will set the internal"," ",e("code",{children:"error"})," state variable. By default this error will be displayed in the form header.  See the ",e(_,{})," component for more information about changing how and if errors are displayed."]}),e(a,{Element:Ne,code:qe,caption:"Error Thrown",children:e("p",{children:"Try submitting this form to see what happens when an error is thrown. You should see the error displayed in the form header and also in a debugging window beneath the form."})}),e("h2",{children:"Rejected Promise"}),t("p",{children:["In most cases a failed submission should return a rejected Promise. The data returned should be an objecting containing either a single",e("code",{children:"error"})," string (or object containing a ",e("code",{children:"message"}),"), or an array of ",e("code",{children:"errors"}),".  Each element in the array can be an error string, but the more usual (and useful) case is for each element to be an object containing the error ",e("code",{children:"message"}),"."]}),t("p",{children:["The benefit of this approach is that error objects can also contain the ",e("code",{children:"name"})," of the field that it relates to.  The corresponding field will be marked as invalid and have the error message set so that it can be displayed under the input.  Furthermore, the field label is copied into the error element so that it can be displayed in the error panel at the start of the form."]}),e("p",{children:"This would be the typical way to handle a request that failed due to server-side validation errors."}),e(a,{Element:Ae,code:Ce,caption:"Error Thrown",children:e("p",{children:"Try submitting the form to see the errors generated."})}),e("h2",{children:e("code",{children:"onError"})}),t("p",{children:["You can provide an ",e(R,{})," handler which will be called when an error response is received.  In this example we simply call a ",e("code",{children:"setError()"})," function to store the error in a React state variable and then display it beneath the form."]}),e(a,{Element:Ye,code:Be,caption:"onError",children:t("p",{children:["Try submitting the form to see the errors generated.  The "," ",e(R,{})," handler will store them in the state variable and display them beneath the form."]})}),e("h2",{children:"Where Next?"}),e("p",{children:"We've now enough in place to look at a more complete example."}),e(u,{uri:"submission-errors"})]}),De=i=>new Promise((s,h)=>i.password===i.passcheck?s(i):h({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),Ie=i=>p().trim().email().required("You must enter your email address!").validate(i),N=i=>p().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(i),We={name:{label:"Your name",required:!0},email:{label:"Email address",required:!0,validate:Ie},password:{label:"Password",type:"password",required:!0,validate:N},passcheck:{label:"Confirm password",type:"password",required:!0,validate:N},experience:{label:"What is your level of experience?",type:"radio",options:["Beginner","Intermediate","Expert"],className:"wide",inputsClass:"radio inputs lg-grid-3"},dob:{type:"date",label:"Date of Birth"},price:{type:"number",label:"How much would you pay for this?",prefix:"£",suffix:".00",min:11,max:100},animal:{label:"What is your favourite animal?",type:"select",default:"Badger",options:["Badger","Ferret","Stoat"]},color:{label:"What is your favourite color?",type:"select",default:"Red",options:[{value:null,text:"Select a color"},{value:"red",text:"Red"},{value:"orange",text:"Orange"},{value:"yellow",text:"Yellow"},{value:"violet",text:"Violet"},{value:"white",text:"White"}]},terms:{label:"Terms and conditions",type:"checkbox",text:"I accept the Terms and Conditions",className:"wide",required:!0,requiredMessage:"You must accept the Terms and Conditions"}},Oe=()=>{const[i,s]=b.useState();return t(o,{fields:We,validate:De,showRequired:!0,showOptional:!0,children:[t(L,{legend:"Your Details",children:[e("div",{className:"lg-grid-2",children:e(m,{names:"name email"})}),e("div",{className:"lg-grid-2",children:e(m,{names:"password passcheck"})})]}),t(L,{legend:"Other Information",children:[e("div",{className:"lg-grid-2",children:e(m,{names:"dob price"})}),e(r,{name:"experience"}),t("div",{className:"lg-grid-2",children:[e(r,{name:"animal"}),e(r,{name:"color",onChange:s})]}),(i==null?void 0:i.value)&&t("div",{style:{color:i.value,backgroundColor:"#444",padding:"0.25rem 0.5rem",textAlign:"center"},children:[i.value," is a great color!"]})]}),e(r,{name:"terms"}),e(l,{text:"Register"})]})},He=`import { Form, Field, Fields, Fieldset, Submit } from '../../../../lib/index.js'

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
    </Form>
  )
}

export default RegistrationForm`,Ve=`@media (min-width: 1024px) {
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
}`,$e=()=>t("div",{children:[e("h1",{children:"Complete Registration Form"}),e("p",{className:"intro",children:"Here's a more complete (albeit rather contrived) example of a user registration form."}),e("h2",{children:"Input Types"}),t("p",{children:["This example demonstrates some of the other fields input types. Set the ",e(n,{})," ",e(v,{})," to ",e("code",{children:"radio"})," for a ",e(G,{})," button input and provide some ",e("code",{children:"options"}),", as shown here for the ",e("code",{children:"experience"})," field.  Or set it to ",e("code",{children:"select"})," for a ",e(K,{})," input as shown in the"," ",e("code",{children:"animal"})," field.  Set it to ",e("code",{children:"checkbox"})," for a"," ",e(Q,{})," and provide some ",e("code",{children:"text"})," to go alongside it."]}),t("p",{children:["You can also use the ",e(v,{})," to set other text input types, like ",e("code",{children:"number"})," and ",e("code",{children:"date"}),"."]}),e(a,{Element:Oe,code:He,caption:"Registration Form"}),t("h2",{children:[e("code",{children:"Fieldset"})," Component"]}),t("p",{children:["The example includes the ",e(X,{})," component which can be used to group fields together in a set, complete with a ",e("code",{children:"legend"}),"."]}),t("h2",{children:[e("code",{children:"showRequired"})," and ",e("code",{children:"showOptional"})]}),t("p",{children:["The ",e(Z,{})," and ",e(ee,{})," properties can be set on the ",e(c,{})," or individual ",e(n,{})," components to have an additional label displayed telling the user which fields they do and don't need to complete."]}),e("h2",{children:e("code",{children:"onChange"})}),t("p",{children:["The ",e(te,{})," property can be added to a ",e(n,{})," to watch for changes in the field value.  You can see it in use above in the ",e("code",{children:"color"})," field."]}),e("h2",{children:"Custom CSS"}),t("p",{children:["The example above uses a couple of custom CSS classes, "," ",e("code",{children:"lg-grid-2"})," and ",e("code",{children:"lg-grid-3"})," to display fields in 2 and 3 columns, respectively, on larger screen sizes. You may already be using a CSS framework which includes something similar which you can use instead.  Here's the CSS for those classes for completeness."]}),e(ie,{code:Ve,language:"css",className:"mar-b-2",fixed:!0}),e("h2",{children:"Where Next?"}),e("p",{children:"There's a lot to take in there.  For the next example we'll scale things back a bit and look at the common case where you want to edit some existing data using a form."}),e(u,{uri:"complete-registration"})]}),Me={name:{label:"Product Name",required:!0},description:{label:"Description",type:"textarea",required:!0},manufacturer:{label:"Manufacturer",type:"select",options:[{value:"100",text:"Alan's Accessories"},{value:"101",text:"Brian's Bits"},{value:"102",text:"Charlie's Components"}]},price:{type:"number",label:"Price",prefix:"$"}},F={id:"9876",version:123,name:"Widget-2000",description:"This is an awesome widget",manufacturer:"102",price:12.99},Je={id:F.id,version:F.version},Ue=()=>t(o,{fields:Me,values:F,hidden:Je,children:[e(m,{names:"name description"}),e("div",{className:"lg-grid-2",children:e(m,{names:"manufacturer price"})}),e(Y,{submit:{text:"Save Changes"}}),e(B,{state:!0})]}),ze=`import { Form, Fields, ResetSubmit, Debug } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, ResetSubmit, Debug } from '@abw/react-formula'

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
    <Fields names="name description"/>
    <div className="lg-grid-2">
      <Fields names="manufacturer price"/>
    </div>
    <ResetSubmit submit={{ text: 'Save Changes' }}/>
    <Debug state/>
  </Form>

export default EditForm`,_e=()=>t("div",{children:[e("h1",{children:"Edit Form"}),e("p",{className:"intro",children:"Another common use case for forms is in editing existing data records."}),e("h2",{children:e("code",{children:"values"})}),t("p",{children:["You can pass the ",e(re,{})," property to a ",e(c,{})," to seed it with initial values for fields.  If there are additional hidden values that you want to include when you submit the form then you can provide them using the ",e(ae,{})," property."]}),e(a,{Element:Ue,code:ze,caption:"Edit Form",children:t("p",{children:['Try changing some of the values in the form and then click on the "Reset" button.  The fields will reset to their original values.  The ',e(y,{})," component is included in this example so you can see what's going on behind the scenes.  We'll talk more about that on the next page."]})}),e("h2",{children:"Where Next?"}),t("p",{children:["You've seen an example of the ",e(y,{})," component in action. Now it's time to talk about debugging in a little more detail."]}),e(u,{uri:"edit-form"})]}),Ge={name:{label:"Product Name",required:!0},description:{label:"Description",type:"textarea",required:!0},manufacturer:{label:"Manufacturer",type:"select",debug:!0,placeholder:"Select manufacturer",options:[{value:"100",text:"Alan's Accessories"},{value:"101",text:"Brian's Bits"},{value:"102",text:"Charlie's Components"}]},price:{type:"number",label:"Price",prefix:"$"}},Ke=()=>t(o,{fields:Ge,debug:!0,children:[e(r,{name:"name",debug:!0}),e(r,{name:"description",debug:!0}),e("div",{className:"lg-grid-2",children:e(m,{names:"manufacturer price",debug:!0})}),e(Y,{}),e(B,{status:!0})]}),Qe=`import { Form, Field, Fields, ResetSubmit, Debug } from '../../../../lib/index.js'

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
    <Field name="name" debug/>
    <Field name="description" debug/>
    <div className="lg-grid-2">
      <Fields names="manufacturer price" debug/>
    </div>
    <ResetSubmit/>
    <Debug status/>
  </Form>

export default DebuggingForm`,Xe=()=>t("div",{children:[e("h1",{children:"Debugging"}),e("p",{className:"intro",children:"Let't face it, things don't always work right first time, so being able to debug your forms is an important requirement."}),t("h2",{children:[e("code",{children:"Debug"})," Component and ",e("code",{children:"debug"})," Property"]}),t("p",{children:["The ",e(y,{})," component can be added to a form to display information about the form values and other state variables.  By default it shows only the form values, but you can use the ",e("code",{children:"status"})," option to also show the form status.  If for some reason you don't want to see the values you can set ",e("code",{children:"values"})," to ",e("code",{children:"false"}),"."]}),t("p",{children:["If you add the ",e("code",{children:"debug"})," property to a ",e(c,{})," or"," ",e(n,{})," then it will enable debugging messages for that component. These will be output to the Javascript console.  Any properties (like"," ",e("code",{children:"debug"}),") that are passed to the ",e(A,{})," component will be forwarded onto the respective ",e(n,{})," components, so it works there too."]}),e(a,{Element:Ke,code:Qe,caption:"Debugging",children:e("p",{children:"Try changing some of the values in the form.  Watch the form values and status change in the debugging panel.  Also check out the Javascript console for further debugging messages."})}),e("h2",{children:"Where Next?"}),e("p",{children:"On the next page we'll look at how you can define your own field layout."}),e(u,{uri:"debugging"})]}),Ze={email:{label:"Email Address",required:!0}},et=()=>t(o,{fields:Ze,children:[e(r,{name:"email",children:i=>t("div",{className:"field",children:[e("label",{htmlFor:i.id,children:i.label}),e("div",{className:"inputs",children:e("input",{className:"input",ref:i.inputRef,"aria-disabled":i.disabled,tabIndex:i.disabled?-1:i.tabIndex,onFocus:i.onFocus,onBlur:i.onBlur,onChange:s=>i.onChange(s.target.value)})})]})}),e(l,{text:"Login"})]}),tt=`import { Form, Field, Submit } from '../../../../lib/index.js'

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

export default HeadlessFields`,it={email:{label:"Email Address"}},rt=()=>e(o,{fields:it,children:e(r,{name:"email",children:i=>t("div",{className:"boxed",children:["This is where you render the ",i.name,' field with an "',i.label,'" label']})})}),at=`import { Form, Field } from '../../../../lib/index.js'

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

export default HeadlessBlank`,ot={email:{label:"Email Address",required:!0}},st=()=>t(o,{fields:ot,children:[e(r,{name:"email",children:i=>t(j,{children:[t("h2",{children:["Custom Layout for ",i.name]}),e(D,{}),e(I,{}),e(W,{})]})}),e(l,{text:"Login"})]}),nt=`import {
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
          <h2>Custom Layout for {field.name}</h2>
          <Label/>
          <Text/>
          <Message/>
        </Layout>
      }
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessBuiltins`,lt={email:{label:"Email Address",required:!0}},dt=()=>t(o,{fields:lt,children:[e(r,{name:"email",children:t(j,{children:[e("h2",{children:"Custom Layout for Email field"}),e(D,{}),e(I,{}),e(W,{})]})}),e(l,{text:"Login"})]}),ut=`import {
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
        <h2>Custom Layout for Email field</h2>
        <Label/>
        <Text/>
        <Message/>
      </Layout>
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessBuiltins`,ct=()=>t("div",{children:[e("h1",{children:"Headless Fields"}),e("p",{className:"intro",children:'One of the problems with any UI library is that it forces you into using the styles provided, or requires you to customise the CSS to match your in-house brand.  This is the problem that "Headless" UI components are designed to solve.'}),e("h2",{children:"Field Render Function"}),e("p",{children:"Instead of using the default rendering components for a field you can provide a function as a child element.  The function will be passed the field context and can render the field any way it likes."}),e(a,{Element:rt,code:at,caption:"Headless Fields"}),e("h2",{children:"Typical Render Function"}),e("p",{children:"Here's a more complete example showing how a field would typically be rendered using the builtin components."}),e(a,{Element:et,code:tt,caption:"Headless Fields"}),e("h2",{children:"Builtin Components"}),t("p",{children:["You can mix and match your own layout with the builtin components. This example shows how you can use the ",e(oe,{}),", ",e(se,{}),","," ",e(ne,{})," and ",e(le,{})," components to build up the field content."]}),e(a,{Element:st,code:nt,caption:"Builtin Components"}),e("h2",{children:"Child Components"}),t("p",{children:["If you're using the default layout components and/or providing your own that can access the field context using ",e("code",{children:"useField"})," ","then you don't need to define a function for the ",e(n,{})," body. You can just include them as children of the field component."]}),e(a,{Element:dt,code:ut,caption:"Builtin Components"}),e(u,{uri:"headless-fields"})]}),pt=()=>t(de,{children:[e(d,{path:"",end:!0,element:e(ue,{})}),e(d,{path:"simple-form",element:e(he,{})}),e(d,{path:"field-validation",element:e(ge,{})}),e(d,{path:"form-validation",element:e(xe,{})}),e(d,{path:"form-submission",element:e(ke,{})}),e(d,{path:"submission-response",element:e(Pe,{})}),e(d,{path:"submission-errors",element:e(je,{})}),e(d,{path:"complete-registration",element:e($e,{})}),e(d,{path:"edit-form",element:e(_e,{})}),e(d,{path:"debugging",element:e(Xe,{})}),e(d,{path:"headless-fields",element:e(ct,{})})]});export{pt as default};
