import react from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
function Header() {
    return (
        <>
            <Navbar bg='dark' expand='lg' variant='dark'>
                <Container fluid >
                    <Navbar.Brand href='/'>Furniture Store</Navbar.Brand>
                    <Nav className=''>
                        <Nav.Link href='/cart'>Cart</Nav.Link>
                        <Nav.Link href='/login'>Sign In</Nav.Link>
                        <Nav.Link href='/register'>Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;