import{j as n,a as e,T as s,an as c,ao as m,F as d,c as r,D as u,ap as h,E as p,B as l,a3 as f,_ as g,$ as o}from"./index-860d35d1.js";const C=()=>n("div",{children:[e("h1",{children:"Custom Components"}),e("p",{children:"This example is TODO."}),n("ul",{children:[e("li",{children:"Adding a custom Layout, Input or other component"}),e("li",{children:"Writing your own components"}),e("li",{children:"Registering components, input types, handlers, etc."})]})]}),y=()=>n("div",{children:[e("h1",{children:"Customising"}),e("p",{className:"intro",children:"This section of the documentation looks at how you can create your own custom components."}),e(s,{menu:c})]}),v=["badger","gorilla","kitten"],x=()=>{const{value:i,onChange:a}=m();return e("div",{className:"animals",children:v.map(t=>e(b,{animal:t,selected:i===t,select:()=>a(t)},t))})},b=({animal:i,select:a,selected:t})=>e("div",{className:`animal ${t?"selected":""}`,onClick:a,children:e("img",{src:`/${i}.jpg`,width:"120",height:"120",alt:i})});const P=()=>n(d,{children:[e(r,{name:"name",label:"Your name",requiredMessage:"You must enter your name",required:!0}),e(r,{name:"animal",label:"Pick an animal guide",requiredMessage:"You must pick an animal",required:!0,Input:x}),e(u,{})]}),F=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
import PictureInput from './PictureInput.jsx'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'
import './animals.css'

const PictureForm = () =>
  <Form>
    <Field
      name="name" label="Your name"
      requiredMessage="You must enter your name"
      required
    />
    <Field
      name="animal" label="Pick an animal guide"
      requiredMessage="You must pick an animal"
      required
      Input={PictureInput}
    />
    <ResetSubmit/>
  </Form>

export default PictureForm`,k=`import { useField } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

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

const Picture = ({ animal, select, selected }) =>
  <div
    className={\`animal \${selected ? 'selected' : ''}\`}
    onClick={select}
  >
    <img
      src={\`/\${animal}.jpg\`} width="120" height="120"
      alt={animal}
    />
  </div>

export default PictureInput`,T=`div.animals {
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
}`,_=()=>n("div",{children:[e("h1",{children:"Custom Input"}),e("p",{className:"intro",children:"You can define your own components to handle the input for a field."}),n("p",{children:["The ",e(h,{})," property can be set on a field to contain a custom component for rendering the field input.  In this example we define a ",e("code",{children:"PictureInput"})," component to show some pictures of animals for the user to select an animal guide from."]}),e(p,{Element:P,code:F,caption:"Picture Form",expand:!0,children:e("p",{children:"Click on an animal to select it.  In this example we're just implementing a custom input and relying on the default field layout to provide us with the label and validation message.  Try submitting the form without selecting an animal to see the validation error message in effect."})}),n("p",{children:["Here's the implementation of the ",e("code",{children:"PictureInput"})," component."]}),e(l,{code:f(k),caption:"PictureInput",expand:!0}),n("p",{children:["On line 7 we call ",e("code",{children:"useField()"})," to get the current field"," ",e("code",{children:"value"})," and the ",e("code",{children:"onChange"})," function to set the value.  We iterate over a list of animals on line 10 and render the"," ",e("code",{children:"Picture"})," component for each.  We pass the ",e("code",{children:"selected"})," ","flag on line 15 to indicate if the animal name matches the current"," ",e("code",{children:"value"}),".  This is used to add the ",e("code",{children:"selected"})," CSS class to the picture container on line 25.  We also pass a ",e("code",{children:"select"})," ","function on line 16 which calls the ",e("code",{children:"onChange"})," handler to select the animal.  This is added to the picture container as an ",e("code",{children:"onClick"})," ","handler on line 26."]}),e("p",{children:"For completeness, here's the additional CSS we're using to apply the styling."}),e(l,{code:T,caption:"animals.css",language:"css",expand:!0}),e("h2",{className:"hint",children:"Picture Credits"}),n("ul",{className:"credits",children:[n("li",{children:["Badger photo by ",e("a",{href:"https://unsplash.com/es/@vincentvanzalinge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Vincent van Zalinge"})," on ",e("a",{href:"https://unsplash.com/photos/jd8s5zhWEug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),n("li",{children:["Gorilla photo by ",e("a",{href:"https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Kelly Sikkema"})," on ",e("a",{href:"https://unsplash.com/images/animals/monkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),n("li",{children:["Kitten photo by ",e("a",{href:"https://unsplash.com/@feneek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Sergey Semin"})," on ",e("a",{href:"https://unsplash.com/images/animals/kitten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})]}),I=()=>n(g,{children:[e(o,{path:"",end:!0,element:e(y,{})}),e(o,{path:"input",element:e(_,{})}),e(o,{path:"components",element:e(C,{})})]});export{I as default};
