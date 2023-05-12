import React                from 'react'
import Home                 from './Home.jsx'
import SimpleForm           from './SimpleForm.jsx'
import FieldValidation      from './FieldValidation.jsx'
import FormValidation       from './FormValidation.jsx'
import FormSubmission       from './FormSubmission.jsx'
import SubmissionResponse   from './SubmissionResponse.jsx'
import SubmissionErrors     from './SubmissionErrors.jsx'
import CompleteRegistration from './CompleteRegistration.jsx'
import EditForm             from './EditForm.jsx'
import Debugging            from './Debugging.jsx'
import HeadlessFields from './HeadlessFields.jsx'
import { Routes, Route }    from 'react-router-dom'

const Tutorial = () =>
  <Routes>
    <Route path="" end                element={<Home/>}/>
    <Route path="simple-form"         element={<SimpleForm/>}/>
    <Route path="field-validation"    element={<FieldValidation/>}/>
    <Route path="form-validation"     element={<FormValidation/>}/>
    <Route path="form-submission"     element={<FormSubmission/>}/>
    <Route path="submission-response" element={<SubmissionResponse/>}/>
    <Route path="submission-errors"     element={<SubmissionErrors/>}/>
    <Route path="complete-registration" element={<CompleteRegistration/>}/>
    <Route path="edit-form"             element={<EditForm/>}/>
    <Route path="debugging"             element={<Debugging/>}/>
    <Route path="headless-fields"         element={<HeadlessFields/>}/>
  </Routes>


export default Tutorial