import type { Metadata } from 'next'
import '@/styles/globals.scss'

import robotoFlex from './fonts'

export const metadata: Metadata = {
  title: 'Slide your way to a better presentation',
  description: 'Slide your way to see and hear better presentations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoFlex.className}>{children}</body>
    </html>
  )
}
