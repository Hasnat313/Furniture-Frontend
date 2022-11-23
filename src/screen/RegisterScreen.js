import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useFormik } from 'formik';
import { userFormSignup } from "../Api";
function RegisterScreen() {

    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            fullName: '',
            password: '',
            phoneNo: '',
            email: "",
            pfp: ""
        },
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
            try {
                const { data } = await userFormSignup(values);
                console.log(data);
                if (data.status === 200) {
                    alert("Successfully Registered")
                }
            }
            catch (e) {
                console.log(e);
            }

        },
    });
    console.log(values);
    return (

        <>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>

                    <Form.Control name="fullName" type='text' placeholder='Enter Name' value={values.fullName} onChange={handleChange} className='w-50' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>

                    <Form.Control name="email" type='email' placeholder='Enter Email' value={values.email} onChange={handleChange} className='w-50' />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='mt-3'> Password</Form.Label>

                    <Form.Control name="password" type='password' placeholder='Enter Password' value={values.password} onChange={handleChange} className='w-50 ' />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='mt-3'>Phone</Form.Label>

                    <Form.Control name="phoneNo" type='number' placeholder='Enter Phone No' value={values.phoneNo} onChange={handleChange} className='w-50 ' />
                </Form.Group>
                {/* <Form.Group>
                    <Form.Label className='mt-3'>Phone</Form.Label>

                    <Form.Control type='file' placeholder='Enter Phone No' value={password} onChange={e => setPassword(e.target.value)} className='w-50 ' />
                </Form.Group> */}

                <Button variant="primary" className="mt-3" onClick={handleSubmit}>Register</Button>
            </Form>
        </>
    )
}
export default RegisterScreen