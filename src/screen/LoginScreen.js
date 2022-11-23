import react, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { userLogin } from '../Api';
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
function LoginScreen() {
    const navigate = useNavigate();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: '',

        },
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
            try {
                const { data } = await userLogin(values);
                console.log(data);
                if (data.status === 200) {
                    // alert("Successfully LoggedIn")
                    navigate("/");
                }
            }
            catch (e) {
                console.log(e);
            }

        },
    });
    return (
        <>
            <h1>Sign In</h1>
            <Form >
                <Form.Group>
                    <Form.Label>Email Adress</Form.Label>

                    <Form.Control name="email" type='email' placeholder='Enter Email' value={values.email} onChange={handleChange} className='w-50' />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='mt-3'> Password</Form.Label>

                    <Form.Control name="password" type='password' placeholder='Enter Password' value={values.password} onChange={handleChange} className='w-50 ' />
                </Form.Group>
                <Button variant='primary' onClick={handleSubmit} className='fw-bold mt-3'>Sign In</Button>
            </Form>
        </>
    )
}
export default LoginScreen;