// components/Layout.js
import { Component, useRef } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'



export default function Layout(props) {
  const containerRef = useRef(null)
  const { children }: any = props
  return ( 
    <div className='layout'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}