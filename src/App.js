import React from 'react';
import Layout from './layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import Product from './Pages/product';
import About from './Pages/about';
const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
