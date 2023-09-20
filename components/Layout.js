import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PizzaList from './PizzaList';

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  );
}

export default Layout;
