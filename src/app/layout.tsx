import './globals.css'
import type { Metadata } from 'next'
import { Quicksand} from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import Script from 'next/script';


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
      <head>
          <Script id='google-tag-manager'>
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T6J5RFDS');
            `}
          </Script>
        <meta name="facebook-domain-verification" content="atcjnrvz2iywmwdwov6ibnj8foa74g" />
      </head>
      <body className={quicksand.className}>
          <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6J5RFDS"
            height="0" 
            width="0">

          </iframe>
          </noscript>
          {children}
          <Analytics/>
      </body>
    </html>
  )
}
