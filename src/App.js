
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/include/header';
import Footer from './component/include/footer';
import Home from './component/pages/home';
import About from './component/pages/about';
import Product from './component/pages/product';
import ProductDetails from './component/pages/productdetails';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />

        <div className='layout-section'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />



          </Routes>
        </div>

        <Footer/>



      </BrowserRouter>

    </div>
  );
}

export default App;
