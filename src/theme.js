import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

// Create a theme instance.
const theme = experimental_extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[600],
          secondary: deepOrange.A700
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: cyan[400],
          secondary: orange[400]
        }
      }
    }
  }
  // ...other properties
})

export default theme