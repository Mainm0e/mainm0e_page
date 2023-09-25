import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import Footer from './footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mainm0e',
  description: 'Mainm0e\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body className={inter.className}>
      <Navbar/> {/* Pass the current path as a prop */}
        {children}
        <Footer />
        </body>
    </html>
  )
}
