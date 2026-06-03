import type { Metadata, Viewport } from 'next'
import { Nunito, Bebas_Neue } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const bebas  = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-display', display: 'swap' })

export const metadata: Metadata = {
  title: 'Plum Mundial 2026 | Tu Prode del Mundial',
  description: 'Completá tu fixture del Mundial 2026, guardá tus predicciones y compartí con amigos. Auspicia Jugos Plum.',
  openGraph: {
    title: 'Plum Mundial 2026',
    description: '¡Viví el Mundial con Plum! Completá tu prode.',
    type: 'website',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#FF6B00',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${nunito.variable} ${bebas.variable}`}>
      <body className="font-body antialiased bg-plum-dark">
        {children}
      </body>
    </html>
  )
}
