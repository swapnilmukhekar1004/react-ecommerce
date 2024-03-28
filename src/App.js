
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Header from './component/include/header';
import Footer from './component/include/footer';
import Home from './component/pages/home';
import About from './component/pages/about';
import Product from './component/pages/product';
import ProductDetails from './component/pages/productdetails';



function App() {

  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    // Show the button when user scrolls down 400px
    if (scrollTop > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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

        {isVisible && (
        <div className="return-to-top " onClick={scrollToTop}>
          Go to Top
        </div>
      )}



      </BrowserRouter>

    </div>
  );
}

export default App;
