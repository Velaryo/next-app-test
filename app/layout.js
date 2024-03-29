// estilos globales
import '../styles/globals.css'

import { Navigation } from '../components/Navigation'
import { font } from './font'
import Providers from './Providers'

export const metadata = {
  title: 'UN titulo',
  description: 'Generated by Next.js'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <head />

      <body className={font.variable}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  )
}
