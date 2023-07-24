import { ReduxProvider } from '@/redux/provider'
import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import '../styles/globals.css'

const inter = Comfortaa({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
