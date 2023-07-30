import { ReduxProvider } from '@/redux/provider'
import type { Metadata } from 'next'
import { Comfortaa, Pangolin } from 'next/font/google'
import '../styles/globals.css'
import { Footer, Navbar } from '@/components'

const pangolin = Pangolin({ 
  weight: '400',
  subsets: ['latin'],
})
const comfortaa = Comfortaa({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '📝 Todo app',
  description: 'Todo application created with Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <ReduxProvider>
          <Navbar />
          <main className='min-h-screen mx-auto sm:container md:container lg:container px-6 py-8'>
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
