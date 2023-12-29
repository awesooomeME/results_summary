import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const fontstyle = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Results Summary',
  description: 'This next app is a solution for the frontendmentor challenge- https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV/hub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontstyle.className}>{children}</body>
    </html>
  )
}
