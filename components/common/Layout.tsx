// components/layout.js
import React from "react";


import Navbar from './Navbar'
import Footer from './Footer'
import Banner from "../home/Banner";

export default function Layout({ children }:{children:any}) {
  return (
    <>
      <Navbar />
      <Banner/>
      <main>{children}</main>

      <Footer />
    </>
  )
}