import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
// import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { addToCart } from "../Api";
// import Rating from '../components/Rating'
function Product({ product, callback }) {
    console.log(product.image);

    const imagedata = product?.image?.replace("public", "http://localhost:5006")
    console.log(imagedata);


    const handleClick = async () => {
        try {
            const id = JSON.parse(localStorage.getItem("cartId"));
            const { data } = await addToCart({ productId: product._id, cartId: id })
            console.log(data);
            if (data.status === 200) {
                // window.location.reload(true);
                callback();
                alert("Product added to the cart successfully")

            }
        }
        catch (e) {
            console.log(e);
            alert(e.response?.data?.message);
        }

    }


    return (
        <>

            <Card sx={{ width: 350, my: "30px", border: "2px solid black", height: "450px", alignContent: "space-between", justifyContent: "space-between" }}>
                <CardMedia
                    component="img"
                    height="240"
                    width="240"
                    sx={{ "objectFit": "contain" }}
                    image={imagedata}
                    alt="green iguana"
                />
                <CardContent sx={{ height: "150px" }}>
                    <Typography gutterBottom variant="h5" component="div" >
                        {product?.name}
                    </Typography>
                    <Typography variant="h6" color="orange">
                        USD:   {product?.price}
                    </Typography>
                    <Typography variant="body2  " color="text.secondary">
                        Stock {product?.stockQuantity}
                    </Typography>
                </CardContent>
                <CardActions sx={{ "alignItems": "end" }}>

                    <Button size="small" sx={{ width: "100%" }} onClick={handleClick} variant="contained" endIcon={<ShoppingCart />}>Add to Cart

                    </Button>
                </CardActions>
            </Card>





























            {/* <Card className='my-3 p-3 rounded'>
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant='top' />
                </Link>
                <Card.Body>
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
                    </Link>
                    <Card.Text as='div'>
                        <Rating value={product.rating} Text={`${product.numReviews} reviews`} />
                    </Card.Text>
                    <Card.Text as='h3'>
                        ${product.price}
                    </Card.Text>
                </Card.Body>
            </Card> */}
        </>
    )
}
export default Product