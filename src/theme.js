import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

// Create a theme instance.
const theme = experimental_extendTheme({
  trelloCustom: {
    appBarHeight: '60px',
    boardBarHeight: '58px'
  },
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
          main: cyan[900],
          secondary: orange[400]
        }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#00b894'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.light
            },
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.light
              }
            },
            '& fieldset': {
              borderWidth: '1px !important'
            }
          }
        }
      }
    }
  }
  // ...other properties
})

export default theme
