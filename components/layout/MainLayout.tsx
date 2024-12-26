import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';

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
    </div>
  )
}
