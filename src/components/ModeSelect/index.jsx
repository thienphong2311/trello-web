import { Select, useColorScheme } from '@mui/material'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectMode = event.target.value
    setMode(selectMode)
  }

  return (
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
          <Box sx={{ display : 'flex', alignItems : 'center', gap : 1 }}>
            <LightModeIcon fontSize='small'/>  Light
          </Box>
        </MenuItem>
        <MenuItem value={'dark'}>
          <Box sx={{ display : 'flex', alignItems : 'center', gap : 1 }}>
            <DarkModeOutlinedIcon fontSize='small'/>  Dark
          </Box>
        </MenuItem>
        <MenuItem value={'system'}>
          <Box sx={{ display : 'flex', alignItems : 'center', gap : 1 }}>
            <SettingsBrightnessIcon fontSize='small'/>  System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
