
import React, { useState } from 'react';
import Member from './components/Member'
import Form from './components/Form'
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

export default function App() {

  const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues , [inputName]: inputValue})
  }

  const submitForm = () => {
    
    console.log(formValues)

    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setMembers([newMember, ...members])
    setFormValues(initialFormValues)
  }


  return (
    <div className="App">
    <Form values={formValues} update={updateForm} submit={submitForm}  />

    {members.map((member, idx) => (
      <Member key={idx} details={member}/>
    ))}
    </div>
  );
}

