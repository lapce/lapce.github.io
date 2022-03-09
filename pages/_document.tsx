import Document, { Html, Head, Main, NextScript } from 'next/document'

class LapceDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased bg-body text-body font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default LapceDocument