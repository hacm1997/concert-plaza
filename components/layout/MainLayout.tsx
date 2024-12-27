import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { ToastContainer } from 'react-toastify';

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
