import react from 'react';
import {Container,Row,Col} from 'react-bootstrap';
function Footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3 '>
                        &copy; Furniture
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;