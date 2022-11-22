import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
function RegistorScreen(){
    let[name,setName]=useState('');
    let[email,setEmail]=useState('');
    let[password,setPassword]=useState('');
    let[confirmPassword,setConfirmPassword]=useState('');
    let[phone,setPhone]=useState('');
    let[message,setMessage]=useState(null);
    return(
        <>
            <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                
            <Form.Control type='text' placeholder='Enter Name' value={name} onChange={e=>setName(e.target.value)} className='w-50' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email Adress</Form.Label>
                
            <Form.Control type='email' placeholder='Enter Email' value={email} onChange={e=>setEmail(e.target.value)} className='w-50' />
            </Form.Group>
            <Form.Group>
                <Form.Label className='mt-3'> Password</Form.Label>
                
            <Form.Control type='password' placeholder='Enter Password' value={password} onChange={e=>setPassword(e.target.value)} className='w-50 '/>
            </Form.Group>
            <Form.Group>
                <Form.Label className='mt-3'>Confirm Password</Form.Label>
                
            <Form.Control type='password' placeholder='Enter Password' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} className='w-50 '/>
            </Form.Group>
            <Form.Group>
                <Form.Label className='mt-3'>Phone</Form.Label>
                
            <Form.Control type='password' placeholder='Enter Password' value={password} onChange={e=>setPassword(e.target.value)} className='w-50 '/>
            </Form.Group>
            
            <Button type="submit" variant="primary" className="mt-3">Registor</Button>
            </Form>
        </>
    )
}
export default RegistorScreen