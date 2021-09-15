/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
//import Head from 'next/head'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <title>VanGo</title>
          <link rel='icon' href='/favicon.ico' />
        
        
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
// $(function () {
//   var $body = $(document)
//   $body.bind('scroll', function () {
//     // "Disable" the horizontal scroll.
//     if ($body.scrollLeft() !== 0) {
//       $body.scrollLeft(0)
//     }
//   })
// })

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  }
}
