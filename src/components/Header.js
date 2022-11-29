import { Close, Remove } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Modal, Typography } from '@mui/material';
import react, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { removeFromCart, viewCart } from '../Api';
function Header() {

    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [update, setUpdate] = useState(false);
    const navigate = useNavigate()

    async function call() {
        const id = JSON.parse(localStorage.getItem("cartId"))
        try {
            const { data } = await viewCart(id)
            console.log(data);
            setData(data.listing)

        }
        catch (e) {
            console.log(e);
        }

    }
    const calculateTotalPrice = () => {
        let tPrice = 0;
        data.map((ele) => {
            tPrice += ele.price
        })
        return tPrice;
    }


    return (
        <>
            <Navbar bg='dark' expand='lg' variant='dark'>
                <Container fluid >
                    <Navbar.Brand href='/'>Furniture Store</Navbar.Brand>
                    <Nav className=''>
                        <Nav.Link onClick={() => { call(); handleOpen() }}>Cart</Nav.Link>
                        <Nav.Link href='/addProduct'>Add Product</Nav.Link>
                        <Nav.Link href='/login'>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ height: "500px", }}
            >
                <Box backgroundColor="white" width="50%" m="auto" height={"auto"} mt="30px" sx={{}}>
                    <List sx={{ width: '100%', padding: 0, margin: 0, height: "500px", bgcolor: 'background.paper', overflowY: "scroll" }}>
                        {data.map((element, index) => <>

                            <ListItem key={index} sx={{ display: "flex", flex: "1" }}>
                                <ListItemAvatar sx={{ width: "20%" }}>
                                    <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} src={element?.image?.replace("public", "http://localhost:5001")} />
                                </ListItemAvatar>
                                <ListItemText width="60%"
                                    primary={element?.name}
                                    secondary={
                                        <>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Price {element?.price}
                                            </Typography>



                                        </>
                                    }
                                />
                                <ListItemButton disableGutters={"true"} sx={{ width: "0", textAlign: "center" }} >
                                    <Close onClick={async () => {
                                        try {

                                            const { data } = await removeFromCart(element?.id);
                                            console.log(data);
                                            if (data.status === 200) {
                                                call();
                                                setUpdate((prev) => !prev);
                                            }
                                        }
                                        catch (e) {
                                            console.log(e);
                                        }

                                    }} />

                                </ListItemButton>

                            </ListItem>


                            <Divider variant="inset" component="li" sx={{ listStyleType: "none" }} />
                        </>
                        )}
                    </List>
                    <Box sx={{ display: "flex" }}>

                        <Typography sx={{ flex: 1 }} variant="h6" color={"white"} backgroundColor="black"> Total Price: {calculateTotalPrice()}</Typography>
                        <Button variant="contained" onClick={() => {
                            navigate("/paymentDetails")
                        }} sx={{ backgroundColor: "black", borderRadius: "0" }}>Order Now</Button>
                    </Box>
                </Box>
            </Modal>





        </>
    )
}
export default Header;