import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
const theme = createTheme({
  palette: {
    primary: {
      main: '#012169',
      contrastText: '#fff'
    },
    secondary: {
      main: '#C8102E'
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
      secondary: '#012169',
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
export default theme
