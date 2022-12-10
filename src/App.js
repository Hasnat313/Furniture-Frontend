import react from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap'
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
//import LoginScreen from './screen/LoginScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import products from './products';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import AddProduct from "./screen/AddProduct"
import ViewCart from "./screen/ViewCart"
import OrderForm from "./screen/OrderForm"
function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}


      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/Home' element={<HomeScreen />} exact />
        <Route path='/product/:id' element={<ProductScreen product={products} />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/viewCart' element={<ViewCart />} />
        <Route path='/paymentDetails' element={<OrderForm />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  );
}
export default App;