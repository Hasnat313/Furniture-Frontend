import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useFormik } from 'formik';
import { createCart, userFormSignup } from "../../Api";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function RegisterScreen() {
    const navigate = useNavigate();
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
                    const { data: cartData } = await createCart({ userId: data.user.id });
                    console.log(cartData);
                    alert("Successfully Registered")
                }
            }
            catch (e) {
                console.log(e);
                alert(e.response.data.message)
            }

        },
    });
    console.log(values);
    return (

        <>
            <Container sx={{ mt: "40px" }}>
                <Box>
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
                </Box>
                <Button variant="secondary" className="mt-3" onClick={() => { navigate("/") }}>Already have account? Login</Button>
            </Container>
        </>
    )
}
export default RegisterScreen