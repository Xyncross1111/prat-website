import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'

export const metadata: Metadata = {
  title: 'Pratishruti',
  description: 'Made with Love',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body>{children}</body>
    </html>
  )
}
