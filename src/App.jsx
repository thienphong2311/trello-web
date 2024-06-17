import * as React from 'react'
import { Select, useColorScheme } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

export function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectMode = event.target.value
    setMode(selectMode)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value={'light'}>
            <div style={{ display : 'flex', alignItems : 'center', gap : '8px' }}>
              <LightModeIcon fontSize='small'/>  Light
            </div>
          </MenuItem>
          <MenuItem value={'dark'}>
            <Box sx={{ display : 'flex', alignItems : 'center', gap : 1 }}>
              <DarkModeOutlinedIcon fontSize='small'/>  Dark
            </Box>
          </MenuItem>
          <MenuItem value={'system'}>
            <Box sx={{ display : 'flex', alignItems : 'center', gap : 2 }}>
              <SettingsBrightnessIcon fontSize='small'/>  System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

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

function App() {
  return (
    <>
      <ModeSelect />
      <hr />
      <ModeToggle />
      <hr />
      <div>Thien Phong</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
    </>
  )
}

export default App
