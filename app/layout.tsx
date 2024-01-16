"use client"

import type { Metadata } from 'next'
import { inter, montserrat } from '@/app/ui/fonts'
import './globals.css'
import NavBar from './ui/navbar'
import Footer from './ui/footer/footer'
import { useEffect, useState } from 'react'


// export const metadata: Metadata = {
//   title: '%s | Nestegg',
//   description: 'Nestegg prototype',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if ( typeof window !== 'undefined' ){
      const handleResize = () => {
        console.log(window.innerWidth < 768)
        console.log(window.innerWidth)
        setIsMobile(window.innerWidth < 768 );
      }

      handleResize();
      window.addEventListener('resize', () => handleResize);
      window.removeEventListener('resize', handleResize);
    }
  })
  return (
    <html lang="en">
      <body className={` ${montserrat.className} antialiased`}>
        {isMobile? (
          <div className='md:hidden'>
          <div>
            <NavBar/>
          </div>
          {children}
          <Footer/>
          </div>
          ) : (
          <div>
            <div>Hello, Please this is mobile only prototype. Kindly resize your window -not greater than 768px-, or view on a mobile device then reload. Thank you!</div>
          </div>
         )}
        
      </body>
    </html>
  )
}
