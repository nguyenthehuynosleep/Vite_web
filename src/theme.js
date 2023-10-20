// import { createTheme } from '@mui/material/styles'/// Theme before
import { teal, cyan, deepOrange, orange } from '@mui/material/colors'
import {experimental_extendTheme as extendTheme} from '@mui/material/styles'
// Create a theme instance.
// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#556cd6'
//     },
//     secondary: {
//       main: '#19857b'
//     },
//     error: {
//       main: red.A400
//     },
//     text: {
//       secondary: red[200]
//     }
//   }
// })
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    }
  },
  dark: {
    palette: {
      primary: cyan,
      secondary:orange
    }
  }
});
// ...other properties);
export default theme