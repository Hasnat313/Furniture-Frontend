import React from "react";
import products from "../products";
import Rating from "../components/Rating";
import {Row,Col,Image,Card,Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
function ProductScreen(){
    let params=useParams();
    
    const product=products.find((p) => p._id == params.id );
    
    return(
        <>
            <Link to='/' className='btn btn-primary my-3'><span className="fs-3" >&#8592;</span>  Go Back  </Link>
            <Row>
                <Col md={6}>
<Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Prie : ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description :{product.description}
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                    <Col>Price:</Col>
                                        <Col><strong>${product.price}</strong></Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                    <Col>Status:</Col>
                                        <Col><strong>{product.countInStock > 0 ? 'in Stock' :'out of Stock'}</strong></Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button className="btn-block" type="button" disabled={product.countInStock === 0 }>Add To Card</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
            </Row>
        </>
    );
}
export default ProductScreen;