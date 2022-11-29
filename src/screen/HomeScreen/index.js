import React, { useEffect, useState } from "react";
// import { Row, Col } from 'react-bootstrap'
import products from '../../products'
import Product from '../../components/Product'
import { Box, Container, Grid, Stack } from "@mui/material";
import Header from "../../components/Header";
import { getAllProducts } from "../../Api";
//import {useDispatch,useSelector} from 'react-redux';
//import { listProduct } from "../actions/productAction";
const HomeScreen = () => {
    // const dispatch=useDispatch();
    //const {loading,products,error}=useSelector(state => state.productList);
    //const {loading,products,error}=productList;
    //console.log(products);
    //     useEffect(()=>{
    // dispatch(listProduct());
    //     },[])
    const [apiProducts, setProducts] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        async function call() {
            try {

                const { data } = await getAllProducts();
                // console.log(data);
                console.log(data.listing);
                setProducts(data.listing);
            }
            catch (e) {
                console.log(e);
                alert(e.response.data.message)
            }
        }
        call();
    }, [update])

    const callback = () => {
        setUpdate((prev) => !prev);
    }
    return (
        <>
            <Header />
            <Container>
                <h1>Latest Products</h1>

                <Grid container spacing={4}>
                    {apiProducts.map((product, index) => (
                        <Grid item xs={8} lg={4} key={index}>
                            <Product product={product} callback={callback} />
                        </Grid>
                    ))}
                </Grid>
            </Container>



        </>
    )
}
export default HomeScreen;