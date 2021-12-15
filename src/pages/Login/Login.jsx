import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg';

import './Login.css'

function Login () {
  return (
    <div className="login d-flex flex-column align-items-center justify-content-center">
      <h1 className="login__heading">Login</h1>

    <img src={logo} className="logo my-5" />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit">
          Login
        </Button>
      </Form>

      <Link to='/register' className="mt-4 tex">Don't Have an Account Yet?</Link>
    </div>
  )
}


export default Login;