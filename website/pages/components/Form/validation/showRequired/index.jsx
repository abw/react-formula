import React from 'react'
import { ShowRequiredLink } from '@/website/site/Links.jsx'

const ShowRequired = () =>
  <div className="prose flow">
    <h1>Form Validation</h1>
    <h2><code>showRequired</code></h2>
    <p>
      This option can be set <code>true</code> to enable the{' '}
      <ShowRequiredLink/> option as the default for all fields.
      Individual fields can set it <code>false</code> to override the
      default.
    </p>
    <p>
      When enabled, required fields will display a &quot;Required&quot; tag
      in the label.
    </p>
  </div>

export default ShowRequired