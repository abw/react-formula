import React         from 'react'
import Message       from './examples/Message.jsx'
import MessageSrc    from './examples/Message.jsx?raw'
import Custom        from './examples/CustomMessage.jsx'
import CustomSrc     from './examples/CustomMessage.jsx?raw'
import Example       from '@/site/Example.jsx'
import { FieldLink } from '@/site/Links.jsx'
import Split from '@/website/site/Split.jsx'
import Suggest from '@/website/site/Suggest.jsx'

const MessageExamples = () =>
  <div className="prose">
    <h1>Field Components</h1>
    <h2><code>Message</code></h2>
    <p>
      The <code>Message</code> component is used to add a message underneath
      a <FieldLink/>. It&apos;s usually added automatically, but it&apos;s
      useful if you&apos;re implementing your own layout for a field.
    </p>
    <Split>
      <p>
        If you have defined <code>help</code> for your field then it will be
        displayed here.  If the field fails to validate then the validation
        error message will be displayed.  In this example we&apos;re setting
        an explicit <code>requiredMessage</code> to override the default message.
        We&apos;re also setting a <code>validMessage</code> to provide a custom
        message if the field is valid.
      </p>
      <Suggest>
        Try submitting the form without entering a value.  You should see
        the <code>help</code> message be replaced by the{' '}
        <code>requiredMessage</code> error message.
      </Suggest>
    </Split>
    <Example
      Element={Message} code={MessageSrc}
      caption="Message" expand
    />

    <h2>Custom Message Component</h2>
    <p>
      You can define your own component to handle the message for a field
      using the <code>Message</code> field property.
    </p>
    <Example
      Element={Custom}
      code={CustomSrc}
      caption="Custom Message Component" expand
    />
  </div>

export default MessageExamples