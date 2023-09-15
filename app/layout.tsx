import { ClerkProvider } from '@clerk/nextjs'
import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'CarsByRent',
  description: 'Get the best cars in your town for rent!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={'relative'}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
    </ClerkProvider>
  )
}
