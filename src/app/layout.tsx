import './globals.css'
import type { Metadata } from 'next'
import { Quicksand} from 'next/font/google'

import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';


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
