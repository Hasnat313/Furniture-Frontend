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
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen product={products} />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
          </Routes>

        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;