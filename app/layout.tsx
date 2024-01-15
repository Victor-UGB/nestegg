import type { Metadata } from 'next'
import { inter, montserrat } from '@/app/ui/fonts'
import './globals.css'
import NavBar from './ui/navbar'
import Footer from './ui/footer/footer'


export const metadata: Metadata = {
  title: '%s | Nestegg',
  description: 'Nestegg prototype',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div>
          <NavBar/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
