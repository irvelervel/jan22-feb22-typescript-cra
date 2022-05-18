import { useState, ChangeEvent, FormEvent } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const FormComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // I have to assign React.ChangeEvent<FormControlElement> to e manually
    setEmail(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('good job')
    navigate('/')
  }

  // input values are ALWAYS strings, i.e: '23432432423'

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormComponent
