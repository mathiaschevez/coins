import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <div className='flex justify-between py-2 px-6'>
      Navbar
      <div>
        <Link href='/coins'>Coins</Link>
      </div>
    </div>
  )
}
