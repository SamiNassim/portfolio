import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Header from './_components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sami Bououdine - Développeur Web',
  description: 'Portfolio de Sami Bououdine, développeur web fullstack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}><Providers><Header />{children}</Providers></body>
    </html>
  )
}
