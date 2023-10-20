import './App.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { createSvgIcon } from '@mui/material/utils'
import { Typography } from '@mui/material'
import {useColorScheme} from '@mui/material/styles'
function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}
const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
)
const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
)
function App() {
  // const [count, setCount] = useState(0)
  // eslint-disable-next-line no-trailing-spaces
  // const Behind = "Nguyenthehuy" 
  // const nguyenthehuy = () => {
  // }
  return (
    <>
      <ModeToggle />
      <hr / >
      <Stack direction="row" spacing={3}>
        <HomeIcon />
        <HomeIcon color="primary" />
        <PlusIcon />
        <PlusIcon color="secondary" />
      </Stack>
      <div>NGUYENTHEHUY</div>
      <Typography variant="body2" color="text.secondary">Config_theme</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="success">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App
