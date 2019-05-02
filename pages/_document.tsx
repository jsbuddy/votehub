import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          {/* Import CSS for nprogress */}
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}