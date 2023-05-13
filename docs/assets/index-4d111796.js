import{j as o,a as e,z as d,I as l,ak as $,o as b,Y as v,Z as s}from"./index-be7da424.js";const g=()=>o("div",{children:[e("h1",{children:"Styling the Forms"}),e("p",{children:"There's good news and bad news.  The good news is that there's a default stylesheet which should give you reasonable results as a starting point.  You can import it into the top-level of your React app with something like this:"}),e(d,{children:"import '@abw/react-formula/css/formula.css'"}),e("p",{children:"The gooder news is that the stylesheet is built using SASS (specifically SCSS) and you can import the styles into your own SASS stylesheet like so:"}),e(d,{language:"scss",children:"@import '@abw/react-formula/scss/formula.scss';"}),o("p",{children:["The goodest news it that it's built from numerous "," ",e("a",{href:"sass-variables",children:"configuration variables"})," which you can tweak to change the styling.  They're all defined using the"," ",e("code",{className:"code",children:"!default"})," directive which means you can provide your own values before importing the main SCSS file and it'll use your values instead of the defaults."]}),e(d,{language:"scss",children:`$brand-hue:     123;
$valid-hue:     40;
$invalid-hue:   12;
@import '@abw/react-formula/scss/formula.scss';`}),o("p",{children:["Or you can rewrite large chunks of the styling if you prefer. Every element has its own CSS class and they're all scoped inside"," ",e("code",{className:"code",children:"form.formula"}),".  For example, you can import the main stylesheet and then selectively override the things you want to change."]}),e(d,{language:"scss",children:`@import '@abw/react-formula/scss/formula.scss';

form.formula {
  .field {
    .inputs {
      select {
        // your custom styling overrides
      }
    }
  }
}`}),e("p",{children:"The bad news is that CSS/SASS is currently all there is.  If you want to use styled components or any other CSS-in-JS solution then you're bang out of luck.  I'm personally not a huge fan of putting CSS in JS (although I totally respect that it may be what works for you), and given that I wrote this library to help me get my job done, it's understandably focussed on what works for me."})]}),m=()=>o("div",{children:[e("h1",{children:"Form Styles"}),o("div",{className:"note",children:[e("b",{children:"NOTE:"})," these are mockup forms and don't have full interactivity. For example, clicking on an input will not automatically focus it."]}),e("p",{children:"This is TODO"})]}),i={...$,label:"Example Label",type:"text",placeholder:"Placeholder text",form:{},status:{}},x=()=>o("div",{children:[e("h1",{children:"Field Styles"}),o("div",{className:"note",children:[e("b",{children:"NOTE:"})," these are mockup fields and don't have full interactivity. For example, clicking on an input will not automatically focus it."]}),o("form",{className:"formula",children:[e("h3",{children:"Field With Placeholder Text"}),e(l,{field:i}),e("h3",{children:"Field With Value"}),e(l,{field:{...i,value:"Hello World"}}),e("h3",{children:"Field With Help"}),e(l,{field:{...i,help:"Your password must be between 11 and 42 characters"}}),e("h3",{children:"Field With Required Label"}),e(l,{field:{...i,value:"Hello World",required:!0,showRequired:!0}}),e("h3",{children:"Field With Optional Label"}),e(l,{field:{...i,value:"Hello World",showOptional:!0}}),e("h3",{children:"Field With Prefix and Suffix"}),e(l,{field:{...i,prefix:"$",suffix:".00"}}),e("h3",{children:"Focussed Field With Placeholder Text"}),e(l,{field:{...i,status:{focus:!0}}}),e("h3",{children:"Focussed Field With Value"}),e(l,{field:{...i,value:"Hello World",status:{focus:!0}}}),e("h3",{children:"Focussed Field With Help"}),e(l,{field:{...i,help:"Your password must be between 11 and 42 characters",status:{focus:!0}}}),e("h3",{children:"Focussed Field With Prefix and Suffix"}),e(l,{field:{...i,prefix:"$",suffix:".00",status:{focus:!0}}}),e("h3",{children:"Valid Field"}),e(l,{field:{...i,value:"Hello World",status:{valid:!0}}}),e("h3",{children:"Valid Field With Message"}),e(l,{field:{...i,message:"That username is available!",status:{valid:!0}}}),e("h3",{children:"Valid Field With Prefix and Suffix"}),e(l,{field:{...i,value:"Hello World",prefix:"$",suffix:".00",status:{valid:!0}}}),e("h3",{children:"Focussed Valid Field With Prefix and Suffix"}),e(l,{field:{...i,value:"Hello World",prefix:"$",suffix:".00",status:{valid:!0,focus:!0}}}),e("h3",{children:"Invalid Field"}),e(l,{field:{...i,value:"Hello World",status:{invalid:!0}}}),e("h3",{children:"Invalid Field With Message"}),e(l,{field:{...i,message:"Something went wrong!",status:{invalid:!0}}}),e("h3",{children:"Invalid Field With Prefix and Suffix"}),e(l,{field:{...i,value:"Hello World",prefix:"$",suffix:".00",status:{invalid:!0}}}),e("h3",{children:"Focussed Invalid Field With Prefix and Suffix"}),e(l,{field:{...i,value:"Hello World",prefix:"$",suffix:".00",status:{invalid:!0,focus:!0}}}),e("h3",{children:"Disabled Field"}),e(l,{field:{...i,prefix:"£",message:"Denied!",status:{disabled:!0}}})]})]}),y=`/* Base Hues */
// A hue for your brand used to style various components, including
// checkboxes, radio buttons, etc.
$brand-hue:                 193 !default;
// Hue for default state inputs, typically the \`$brand-hue\` but almost
// totally de-saturated.
$input-hue:                 $brand-hue !default;
// Hue for focussed inputs, defaulting to a sky blue.
$focus-hue:                 210 !default;
// Hue for invalid inputs, usually a red hue.
$invalid-hue:               0   !default;
// Hue for validated inputs, usually a green hue.
$valid-hue:                 90  !default;
// Hue for disabled inputs, usually a desaturated red.
$disabled-hue:              0   !default;
// Hue for the "required" label that can appear in the label when the
// \`showRequired\` option is set
$required-hue:              30  !default;
// Hue for the "optional" tag that can appear in the label when the
// \`showOptional\` option is set
$optional-hue:              210 !default;
// Hue for errors.
$error-hue:                 $invalid-hue !default;
// Hue for debugging panel, not usually seen by customers.
$debug-hue:                 240 !default;

/* Labels, Including Required and Optional Tags */
// Default saturation for labels
$label-saturation:          40% !default;
// De-saturated saturation for labels
$label-desaturation:        10% !default;
// Color for field labels in the default state.
$label-color:               hsl($brand-hue, $label-desaturation, 50%) !default;
// Color for the "required" tag that can appear in the label when the
// \`showRequired\` option is set
$required-label-color:      hsl($required-hue, 90%, 30%) !default;
// Background color for the "required" tag.
$required-back-color:       hsl($required-hue, 50%, 90%) !default;
// Border color for the "required" tag.
$required-border-color:     hsl($required-hue, 70%, 80%) !default;
// Color for the "optional" tag that can appear in the label when the
// \`showOptional\` option is set
$optional-label-color:      hsl($optional-hue, 10%, 30%) !default;
// Background color for the "optional" tag.
$optional-back-color:       hsl($optional-hue, 50%, 90%) !default;
// Border color for the "optional" tag.
$optional-border-color:     hsl($optional-hue, 70%, 80%) !default;

/* Default Input State */
// Background color for inputs in the default state.
$input-back-color:          hsl($input-hue, 10%, 97%) !default;
// Border color for inputs in the default state.
$input-border-color:        hsl($input-hue, 30%, 80%) !default;
// Text color for inputs in the default state.
$input-text-color:          hsl($input-hue, 20%, 40%) !default;
// Background color for input prefix/suffix elements in the default state.
$input-prefix-back-color:   hsl($input-hue, 20%, 90%) !default;
// Text color for input prefix/suffix elements in the default state.
$input-prefix-text-color:   hsl($input-hue, 70%, 20%) !default;
// Color for input placeholder text in the default state.
$input-placeholder-color:   hsl($input-hue, 20%, 75%) !default;

/* Focussed Input State */
// Color for labels in focussed fields.
$focus-label-color:         hsl($focus-hue, $label-saturation, 30%) !default;
// Background color for inputs in focussed fields.
$focus-back-color:          hsl($focus-hue, 60%, 99%) !default;
// Border color for inputs in focussed fields.
$focus-border-color:        hsl($focus-hue, 60%, 70%) !default;
// Border color for inputs in focussed fields.
$focus-ring-color:          hsl($focus-hue, 70%, 85%) !default;
// Color of gap between border and ring.
$focus-gap-color:           hsl($focus-hue, 10%, 95%) !default;
// Text color for inputs in focussed fields.
$focus-text-color:          hsl($focus-hue, 60%, 20%) !default;
// Background color for prefix/suffix elements in focussed fields.
$focus-prefix-back-color:   hsl($focus-hue, 30%, 90%) !default;
// Text color for prefix/suffix elements in focussed fields.
$focus-prefix-text-color:   hsl($focus-hue, 70%, 20%) !default;
// Color for input placeholder text in focussed fields.
$focus-placeholder-color:   hsl($focus-hue, 50%, 80%) !default;

/* Valid Field State */
// Color for labels in valid fields.
$valid-label-color:         hsl($valid-hue, $label-saturation, 30%) !default;
// Background color for inputs in valid fields.
$valid-back-color:          hsl($valid-hue, 30%, 97%) !default;
// Border color for inputs in valid fields.
$valid-border-color:        hsl($valid-hue, 40%, 50%) !default;
// Border color for valid inputs in focussed fields.
$valid-ring-color:          hsl($valid-hue, 60%, 75%) !default;
// Color of gap between border and ring.
$valid-gap-color:           hsl($valid-hue, 10%, 95%) !default;
// Text color for inputs in valid fields.
$valid-text-color:          hsl($valid-hue, 50%, 30%) !default;
// Background color for prefix/suffix elements in valid fields.
$valid-prefix-back-color:   hsl($valid-hue, 30%, 90%) !default;
// Text color for prefix/suffix elements in valid fields.
$valid-prefix-text-color:   hsl($valid-hue, 70%, 20%) !default;
// Color for input placeholder text in valid fields.
$valid-placeholder-color:   hsl($valid-hue, 40%, 70%) !default;
// Successful validation message displayed under field input
$valid-message-color:       hsl($valid-hue, 60%, 40%) !default;

/* Invalid Field State */
// Color for labels in invalid fields.
$invalid-label-color:       hsl($invalid-hue, $label-saturation, 30%) !default;
// Background color for inputs in invalid fields.
$invalid-back-color:        hsl($invalid-hue, 60%, 96%) !default;
// Border color for inputs in invalid fields.
$invalid-border-color:      hsl($invalid-hue, 60%, 70%) !default;
// Border color for invalid inputs in focussed fields.
$invalid-ring-color:        hsl($invalid-hue, 70%, 85%) !default;
// Color of gap between border and ring.
$invalid-gap-color:         hsl($invalid-hue, 10%, 95%) !default;
// Text color for inputs in valid fields.
// Text color for inputs in invalid fields.
$invalid-text-color:        hsl($invalid-hue, 50%, 30%) !default;
// Background color for prefix/suffix elements in invalid fields.
$invalid-prefix-back-color: hsl($invalid-hue, 30%, 90%) !default;
// Text color for prefix/suffix elements in invalid fields.
$invalid-prefix-text-color: hsl($invalid-hue, 70%, 20%) !default;
// Color for input placeholder text in invalid fields.
$invalid-placeholder-color: hsl($invalid-hue, 50%, 80%) !default;
// Error message displayed under field input
$invalid-message-color:     hsl($invalid-hue, 70%, 50%) !default;

/* Disabled Field State */
// Saturation for disabled elements
$disabled-saturation:        5% !default;
// Color for labels in invalid fields.
$disabled-label-color:       hsl($disabled-hue, $disabled-saturation, 70%) !default;
// Background color for inputs in disabled fields.
$disabled-back-color:        hsl($disabled-hue, $disabled-saturation, 90%) !default;
// Border color for inputs in disabled fields.
$disabled-border-color:      hsl($disabled-hue, $disabled-saturation, 70%) !default;
// Text color for inputs in disabled fields.
$disabled-text-color:        hsl($disabled-hue, $disabled-saturation, 50%) !default;
// Background color for prefix/suffix elements in disabled fields.
$disabled-prefix-back-color: hsl($disabled-hue, $disabled-saturation, 85%) !default;
// Text color for prefix/suffix elements in disabled fields.
$disabled-prefix-text-color: hsl($disabled-hue, $disabled-saturation, 50%) !default;
// Color for input placeholder text in disabled fields.
$disabled-placeholder-color: hsl($disabled-hue, $disabled-saturation, 65%) !default;
// Error message displayed under field input
$disabled-message-color:     hsl($disabled-hue, $disabled-saturation, 70%) !default;

// Background color for errors.
$error-back-color:           hsl($error-hue, 50%, 95%) !default;
// Text color for errors
$error-text-color:           hsl($error-hue, 50%, 50%) !default;
// Color for errors border
$error-border-color:         hsl($error-hue, 80%, 40%) !default;
// Color for errors title
$error-title-color:          hsl($error-hue, 20%, 90%) !default;
// Color for labels in errors
$error-label-color:          hsl($error-hue, 60%, 40%) !default;

// Background color for fieldset
$fieldset-back-color:       rgba(255, 255, 255, 0.5) !default;
// Color of fieldset border
$fieldset-border-color:      $input-border-color !default;
// Text color for fieldset legend
$legend-text-color:          hsl($brand-hue, $label-desaturation, 30%) !default;
// Background color for fieldset legend
$legend-back-color:          hsl($brand-hue, 5%, 95%) !default;
// Background color for fieldset legend
$legend-border-color:        $input-border-color !default;

/* Other Colors */
// Accent color for checkboxes, radio buttons, range sliders, etc., based on
// the brand hue.
$accent-color:              hsl($brand-hue, 60%, 30%) !default;
`,w=`/* Input Variables */
// Width of border
$input-border-width:           $border-width !default;
// Border radius of field
$input-border-radius:          $border-radius !default;
// Width of focus ring
$input-ring-width:             $ring-width !default;
// Gap between border and focus ring
$input-ring-gap:               $ring-gap !default;
// Vertical padding
$input-padding-vertical:       $unit-padding-vertical !default;
// Horizontal padding
$input-padding-horizontal:     $unit-padding-horizontal !default;
// Tweak select to make same size
$select-padding-tweak:         1.25px !default;`;function h(u){const f=u.split(/[\r\n]+/);let n=[],r=[],a;for(let t of f){if(t.match(/^\s*$/)){r=[];continue}if(a=t.match(/^\/\*\s*(.*?)\s*\*\/$/)){r=[],n.push({section:a[1]});continue}if(a=t.match(/\/\/\s*(.*)/)){r.push(a[1]);continue}(a=t.match(/(\$[\w-]*):\s*(.*?)\s*(!default)?;/))&&(n.push({variable:a[1],defaultValue:a[2],description:r.join(" ")}),r=[])}return n}const k=h(y),S=h(w),F=()=>o("div",{children:[e("h1",{children:"SASS Variables"}),e(c,{title:"Input",vars:S}),e(c,{title:"Colors",vars:k})]}),c=({title:u,vars:f})=>o(b,{children:[e("h2",{children:u}),o("table",{className:"wide sass-vars table",children:[e("thead",{children:o("tr",{children:[e("th",{children:"Variable"}),e("th",{children:"Default"}),e("th",{children:"Description"})]})}),e("tbody",{children:f.map(({variable:n,defaultValue:r,description:a,section:t},p)=>t?e("tr",{children:e("th",{className:"section",colSpan:"3",children:t})},p):o("tr",{children:[e("td",{className:"name",children:n}),e("td",{className:"default",children:r}),e("td",{className:"description",children:a})]},n))})]})]}),T=()=>o(v,{children:[e(s,{path:"",exact:!0,element:e(g,{})}),e(s,{path:"forms",element:e(m,{})}),e(s,{path:"fields",element:e(x,{})}),e(s,{path:"variables",element:e(F,{})})]});export{T as default};
