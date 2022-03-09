import Head from 'next/head'

import Footer from 'components/Footer'

import type { AppProps } from 'next/app'

import 'styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <title>Lapce</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Lightning-fast and Powerful Code Editor" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
      <link rel="canonical" href="https://lapce.dev/" />
    </Head>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default App
