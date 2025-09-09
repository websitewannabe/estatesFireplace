import React from "react";
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { metadata } from './metadata'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter bg-black text-white">
        <div className="min-h-screen bg-rich-black">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}