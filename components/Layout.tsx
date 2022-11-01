// components/Layout.js
import { useRef } from 'react';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('./Navbar'))
const Footer = dynamic(() => import('./Footer'))


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