import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useFormik } from 'formik';
import { addProduct, uploadProductImage, userFormSignup } from "../../Api";
import { Container } from "@mui/material";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
function RegisterScreen() {
    const navigate = useNavigate();
    const [image, setImage] = useState();
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            price: '',
            stockQuantity: '',
            image: ""
        },
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
            try {
                let formData = new FormData();

                console.log(image);
                formData.append("product-images", image)

                console.log(formData);
                const { data: imageData } = await uploadProductImage(formData)
                console.log(imageData);
                console.log(formData);
                values.image = imageData.images;
                const data = await addProduct(values);
                console.log(data);
                // if (data === undefined) {
                //     const data = await addProduct(values);
                //     if (data?.status === 200) {
                //         alert("Successfully Added")
                //     }
                // }
                // console.log(data);
                if (data?.status === 200) {
                    alert("Successfully Added")
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
                <Form >
                    <Form.Group>
                        <Form.Label>Product Name</Form.Label>

                        <Form.Control name="name" type='text' placeholder='Enter Product Name' value={values.name} onChange={handleChange} className='w-50' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='mt-3'>Enter Stock Qauntity</Form.Label>

                        <Form.Control name="stockQuantity" type='number' placeholder='Enter Stock Qauntity' value={values.stockQuantity} onChange={handleChange} className='w-50' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='mt-3'> Price</Form.Label>

                        <Form.Control name="price" type='number' placeholder='Enter Price' value={values.price} onChange={handleChange} className='w-50 ' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className='mt-3'>Upload Product Image</Form.Label>

                        <Form.Control name="image" type='file' placeholder='Upload Image' accept="image/*" onChange={(event) => {
                            try {
                                const files = event.target.files;
                                console.log(files[0]);
                                // let myFiles = Array.from(files);
                                // console.log(myFiles);
                                // const data = myFiles.map((item) => item.name)
                                setImage(files[0]);



                            }
                            catch (e) {
                                console.log(e);
                            }
                        }} className='w-50 ' />
                    </Form.Group>
                    {/* <Form.Group>
                    <Form.Label className='mt-3'>Phone</Form.Label>

                    <Form.Control type='file' placeholder='Enter Phone No' value={password} onChange={e => setPassword(e.target.value)} className='w-50 ' />
                </Form.Group> */}

                    <Button variant="primary" className="mt-3" onClick={handleSubmit}>Add</Button>
                </Form>
            </Container>
        </>
    )
}
export default RegisterScreen