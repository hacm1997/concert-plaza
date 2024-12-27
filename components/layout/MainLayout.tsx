import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <ToastContainer position='bottom-right' theme='dark' />
    </div>
  )
}
