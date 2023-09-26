import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
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
      <script src="https://kit.fontawesome.com/f3586bdbae.js" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <header>
      <Navbar/> {/* Pass the current path as a prop */}
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
