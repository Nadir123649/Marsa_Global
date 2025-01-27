import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Contactus from './Contactus';

const Layout = ({ children, showContactForm }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {showContactForm && <Contactus />}
      <Footer />
    </>
  );
};

export default Layout;
