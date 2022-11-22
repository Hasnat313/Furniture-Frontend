import react, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
function LoginScreen(){
    let[email,setEmail]=useState('');
    let[password,setPassword]=useState('');
    function submit(){}
    return(
        <>
            <h1>Sign In</h1>
            <Form onSubmit={submit}>
            <Form.Group>
                <Form.Label>Email Adress</Form.Label>
                
            <Form.Control type='email' placeholder='Enter Email' value={email} onChange={e=>setEmail(e.target.value)} className='w-50' />
            </Form.Group>
            <Form.Group>
                <Form.Label className='mt-3'> Password</Form.Label>
                
            <Form.Control type='password' placeholder='Enter Password' value={password} onChange={e=>setPassword(e.target.value)} className='w-50 '/>
            </Form.Group>
            <Button variant='primary' type='submit' className='fw-bold mt-3'>Sign In</Button>
            </Form>
        </>
    )
}
export default LoginScreen;