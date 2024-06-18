import { Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Shivbhan Kushwaha PortFolio',
  description: 'Coded by Shivbhan Kushwaha',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
      <ThemeProvider attribute='class' defaultTheme='light'>
        <Header/>
        {children}
        <Footer/>
      </ThemeProvider>
      </body>
    </html>
  )
}
