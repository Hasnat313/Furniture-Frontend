import react, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getCartId, userLogin } from '../../Api';
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
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
                    localStorage.setItem("userData", JSON.stringify(data.user));
                    localStorage.setItem("accessToken", JSON.stringify(data.user.token));
                    localStorage.setItem("refreshToken", JSON.stringify(data.user.refreshToken));

                    const { data: cartId } = await getCartId(data.user.id);
                    console.log(cartId);

                    localStorage.setItem("cartId", JSON.stringify(cartId.listing._id))
                    navigate("/Home");
                }
            }
            catch (e) {
                console.log(e);
                alert(e.response.data.message)
            }

        },
    });
    return (
        <>
            <Container sx={{ mt: "40px" }}>
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
                <Button variant="secondary" className="mt-3" onClick={() => { navigate("/register") }}>Don't have account? Register</Button>
            </Container>
        </>
    )
}
export default LoginScreen;