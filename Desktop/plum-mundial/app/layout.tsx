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
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KLQLHMH3');
        `}} />
      </head>
      <body className="font-body antialiased bg-plum-dark">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KLQLHMH3"
            height="0" width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
