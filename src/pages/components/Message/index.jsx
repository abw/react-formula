import React         from 'react'
import Example       from '../../../site/Example.jsx'
import Message       from './Message.jsx'
import MessageSrc    from './Message.jsx?raw'
import { FieldLink } from '../../../site/Links.jsx'

const MessageExamples = () =>
  <div>
    <h1>Message</h1>
    <p>
      The <code>Message</code> component is used to add a message underneath
      a <FieldLink/>. It&apos;s usually added automatically, but it&apos;s
      useful if you&apos;re implementing your own layout for a field.
    </p>
    <p>
      If you have defined <code>help</code> for your field then it will be
      displayed here.  If the field fails to validate then the validation
      error message will be displayed.  In this example we&apos;re setting
      an explicit <code>requiredMessage</code> to override the default message.
      We&apos;re also setting a <code>validMessage</code> to provide a custom
      message if the field is valid.
    </p>
    <Example
      Element={Message} code={MessageSrc}
      caption="Message"
    >
    </Example>
  </div>

export default MessageExamples