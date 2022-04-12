import { Html, Head, Main, NextScript } from 'next/document'
import link from 'next/link'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="ice icon" href="favicon.png" />
      </Head>    
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}