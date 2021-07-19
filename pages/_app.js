import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { red } from '@material-ui/core/colors'

export default function MyApp (props) {
  const { Component, pageProps } = props

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#707070',
        contrastText: '#fff'
      },
      secondary: {
        main: '#FFF826'
      },
      third: {
        main: '#FFFFFF'
      },
      error: {
        main: red.A400
      },
      background: {
        default: '#fff'
      },

      text: {
        primary: '#707070',
        secondary: '#F8F008',
        third: '#FFFFFF'
      }
    },
    typography: {
      fontFamily: 'Poppins',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500
    }
  })

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>VanGo</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
