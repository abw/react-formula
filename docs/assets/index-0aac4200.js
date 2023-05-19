import{j as n,a as e,T as s,an as c,ao as m,F as d,c as o,D as u,ap as h,E as p,B as l,a3 as g,_ as f,$ as r}from"./index-b1da392e.js";const b=()=>n("div",{children:[e("h1",{children:"Custom Components"}),e("p",{children:"This example is TODO."}),n("ul",{children:[e("li",{children:"Adding a custom Layout, Input or other component"}),e("li",{children:"Writing your own components"}),e("li",{children:"Registering components, input types, handlers, etc."})]})]}),C=()=>n("div",{children:[e("h1",{children:"Customising"}),e("p",{className:"intro",children:"This section of the documentation looks at how you can create your own custom components."}),e(s,{menu:c})]}),k="/react-formula/badger.jpg",y="/react-formula/kitten.jpg",v="/react-formula/gorilla.jpg",x=["badger","gorilla","kitten"],P={badger:k,kitten:y,gorilla:v},F=()=>{const{value:i,onChange:a}=m();return e("div",{className:"animals",children:x.map(t=>e(T,{animal:t,selected:i===t,select:()=>a(t)},t))})},T=({animal:i,select:a,selected:t})=>e("div",{className:`animal ${t?"selected":""}`,onClick:a,children:e("img",{src:P[i],width:"120",height:"120",alt:i})});const R=()=>n(d,{children:[e(o,{name:"name",label:"Your name",requiredMessage:"You must enter your name",required:!0}),e(o,{name:"animal",label:"Pick an animal guide",requiredMessage:"You must pick an animal",required:!0,Input:F}),e(u,{})]}),S=`import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

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

export default PictureForm`,_=`import { useField } from '../../../../../lib/index.js'
import badgerUrl from '/badger.jpg'
import kittenUrl from '/kitten.jpg'
import gorillaUrl from '/gorilla.jpg'
{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const animals = ['badger', 'gorilla', 'kitten']
/* REAL */const URLS = { badger: badgerUrl, kitten: kittenUrl, gorilla: gorillaUrl }/* UNREAL */
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
      /* REAL */src={URLS[animal]}/* UNREAL */// PRETEND: src={\`/\${animal}.jpg\`}
      width="120" height="120"
      alt={animal}
    />
  </div>

export default PictureInput`,w=`div.animals {
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
}`,I=()=>n("div",{children:[e("h1",{children:"Custom Input"}),e("p",{className:"intro",children:"You can define your own components to handle the input for a field."}),n("p",{children:["The ",e(h,{})," property can be set on a field to contain a custom component for rendering the field input.  In this example we define a ",e("code",{children:"PictureInput"})," component to show some pictures of animals for the user to select an animal guide from."]}),e(p,{Element:R,code:S,caption:"Picture Form",expand:!0,children:e("p",{children:"Click on an animal to select it.  In this example we're just implementing a custom input and relying on the default field layout to provide us with the label and validation message.  Try submitting the form without selecting an animal to see the validation error message in effect."})}),n("p",{children:["Here's the implementation of the ",e("code",{children:"PictureInput"})," component."]}),e(l,{code:g(_),caption:"PictureInput",expand:!0}),n("p",{children:["On line 7 we call ",e("code",{children:"useField()"})," to get the current field"," ",e("code",{children:"value"})," and the ",e("code",{children:"onChange"})," function to set the value.  We iterate over a list of animals on line 10 and render the"," ",e("code",{children:"Picture"})," component for each.  We pass the ",e("code",{children:"selected"})," ","flag on line 15 to indicate if the animal name matches the current"," ",e("code",{children:"value"}),".  This is used to add the ",e("code",{children:"selected"})," CSS class to the picture container on line 25.  We also pass a ",e("code",{children:"select"})," ","function on line 16 which calls the ",e("code",{children:"onChange"})," handler to select the animal.  This is added to the picture container as an ",e("code",{children:"onClick"})," ","handler on line 26."]}),e("p",{children:"For completeness, here's the additional CSS we're using to apply the styling."}),e(l,{code:w,caption:"animals.css",language:"css",expand:!0}),e("h2",{className:"hint",children:"Picture Credits"}),n("ul",{className:"credits",children:[n("li",{children:["Badger photo by ",e("a",{href:"https://unsplash.com/es/@vincentvanzalinge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Vincent van Zalinge"})," on ",e("a",{href:"https://unsplash.com/photos/jd8s5zhWEug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),n("li",{children:["Gorilla photo by ",e("a",{href:"https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Kelly Sikkema"})," on ",e("a",{href:"https://unsplash.com/images/animals/monkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),n("li",{children:["Kitten photo by ",e("a",{href:"https://unsplash.com/@feneek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Sergey Semin"})," on ",e("a",{href:"https://unsplash.com/images/animals/kitten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})]}),j=()=>n(f,{children:[e(r,{path:"",end:!0,element:e(C,{})}),e(r,{path:"input",element:e(I,{})}),e(r,{path:"components",element:e(b,{})})]});export{j as default};
