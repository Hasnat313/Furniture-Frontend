import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useFormik } from 'formik';
import { createCart, delProductsFromCart, paymentDetails, removeFromCart, userFormSignup } from "../../Api";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
function RegisterScreen() {
    const navigate = useNavigate();
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            userId: '',
            paymentMethod: 'COD',
            city: '',
            postalCode: "",
            fullAddress: ""
        },
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
            try {
                const userData = JSON.parse(localStorage.getItem("userData"));
                console.log(userData);
                values.userId = userData.id;
                const { data } = await paymentDetails(values);
                console.log(data);
                if (data.status === 200) {
                    // const { data: cartData } = await createCart({ userId: data.user.id });
                    // console.log(cartData);
                    alert("Order Placed")
                    const cartId = JSON.parse(localStorage.getItem("cartId"));
                    const { data } = await delProductsFromCart(cartId);
                    if (data.status === 200)
                        navigate("/Home")
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
            <Header />
            <Container sx={{ mt: "40px" }}>
                <Box>
                    <Form>
                        <Form.Group>
                            <Form.Label>City</Form.Label>

                            <Form.Control name="city" type='text' placeholder='Enter City' value={values.city} onChange={handleChange} className='w-50' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-3'>Postal Code</Form.Label>

                            <Form.Control name="postalCode" type='number' placeholder='Enter Postal Code' value={values.postalCode} onChange={handleChange} className='w-50' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-3'> Full Address</Form.Label>

                            <Form.Control name="fullAddress" type='text' as="textarea" rows={3} placeholder='Enter Full Address' value={values.fullAddress} onChange={handleChange} className='w-50 ' />
                        </Form.Group>
                        <Form.Group controlId="paymentMethod" value={values.paymentMethod}>
                            <Form.Label className='mt-3'> Payment Method</Form.Label>
                            <Form.Check
                                value="Visa"
                                type="radio"
                                aria-label="radio 1"
                                label="Visa Card"
                                onChange={handleChange}
                                checked={values.paymentMethod === "Visa"}

                            />
                            <Form.Check
                                value="Master"
                                type="radio"
                                aria-label="radio 2"
                                label="Master Card"
                                onChange={handleChange}
                                checked={values.paymentMethod === "Master"}

                            />
                            <Form.Check
                                value="COD"
                                type="radio"
                                aria-label="radio 2"
                                label="COD"
                                onChange={handleChange}
                                checked={values.paymentMethod === "COD"}

                            />
                        </Form.Group>


                        {/* <Form.Group>
                    <Form.Label className='mt-3'>Phone</Form.Label>

                    <Form.Control type='file' placeholder='Enter Phone No' value={password} onChange={e => setPassword(e.target.value)} className='w-50 ' />
                </Form.Group> */}

                        <Button variant="primary" className="mt-3" onClick={handleSubmit}>Place Order</Button>
                    </Form>
                </Box>

            </Container>
        </>
    )
}
export default RegisterScreen