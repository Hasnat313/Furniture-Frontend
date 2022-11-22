import React, { useEffect } from "react";
import {Row,Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
//import {useDispatch,useSelector} from 'react-redux';
//import { listProduct } from "../actions/productAction";
const  HomeScreen=()=>{
   // const dispatch=useDispatch();
    //const {loading,products,error}=useSelector(state => state.productList);
    //const {loading,products,error}=productList;
    //console.log(products);
//     useEffect(()=>{
// dispatch(listProduct());
//     },[])
    return(
        <>
            <h1>Latest Products</h1>
        
                <Row>
                {products.map(product =>(
                    <Col sm={12} md={6} lg={4} xl={3}>
<Product product={product}/>
                    </Col>
                ))}
            </Row>
            
        </>
    )
}
export default HomeScreen;