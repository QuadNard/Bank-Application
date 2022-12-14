import React, { SyntheticEvent } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormContainer from '../components/FormContainer';
import { useNavigate} from 'react-router-dom'


const SignupScreen = ({ history }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 


      const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault()


        await fetch('localhost:3000/api/tusersRoutes/signup'. {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
          })
        })
      }



  return (
       <FormContainer>
      <h1>SignUp</h1>
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstName" placeholder="Enter your first name" 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Group>
       <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastName" placeholder="Enter your last name" 
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>
       <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

  
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </FormContainer>
  )
}

export default SignupScreen
