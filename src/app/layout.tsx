import './globals.css'
import type { Metadata } from 'next'
import { Inter, Quicksand, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ weight: '400', subsets: ['latin']})
const quicksand = Quicksand({ weight: '700', subsets: ['latin']})
export const metadata: Metadata = {
  title: 'A Chave do Lucro Digital',
  description: 'O caminho para o seu sucesso digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
