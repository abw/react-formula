import React from 'react'
import Link from '../../../site/Link.jsx'

const Home = () =>
  <div>
    <h1>Form</h1>
    <p>
      The <code>Form</code> component is used to render a form.
      Inside the form you will typically have one or more{' '}
      <Link to="/field"><code>Field</code></Link> components to render
      the fields and a <Link to="/form/submit"><code>Submit</code></Link>{' '}
      component to add a submit button.
    </p>
    <ul className="menu">
      <li><Link to="./properties" text="Form properties"/></li>
      <li><Link to="./reset"><code>Reset</code></Link> component to reset the form</li>
      <li><Link to="./submit"><code>Submit</code></Link> component to submit the form</li>
      <li><Link to="./controls">Controls combining <code>Submit</code></Link> component to submit the form</li>
    </ul>
  </div>

export default Home