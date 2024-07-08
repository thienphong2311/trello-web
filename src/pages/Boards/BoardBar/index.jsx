import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Button, Tooltip } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: '#e0f2f1'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trelloCustom.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      paddingX: 2,
      justifyContent: 'space-between'
    }}>
      <Box sx={{ display : 'flex', alignItems : 'center', gap : 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="Thiên Phong"
          clickable
          //onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
          //onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          //onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable
          //onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          //onClick={() => {}}
        />
      </Box>
      <Box sx={{ display : 'flex', alignItems : 'center', gap : 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title='Thiên Phong'>
            <Avatar
              alt="Thiên Phong"
              src="https://lh3.googleusercontent.com/a/ACg8ocJgicmMjuLTTu-fJUPW8pgJ35CTR8Tlpc6-8CC6nzAmEMpCjH29=s360-c-no" />
          </Tooltip>
          <Tooltip title='Thiên Phong'>
            <Avatar
              alt="Thiên Phong"
              src="https://lh3.googleusercontent.com/a/ACg8ocJgicmMjuLTTu-fJUPW8pgJ35CTR8Tlpc6-8CC6nzAmEMpCjH29=s360-c-no" />
          </Tooltip>
          <Tooltip title='Thiên Phong'>
            <Avatar
              alt="Thiên Phong"
              src="https://lh3.googleusercontent.com/a/ACg8ocJgicmMjuLTTu-fJUPW8pgJ35CTR8Tlpc6-8CC6nzAmEMpCjH29=s360-c-no" />
          </Tooltip>
          <Tooltip title='Thiên Phong'>
            <Avatar
              alt="Thiên Phong"
              src="https://lh3.googleusercontent.com/a/ACg8ocJgicmMjuLTTu-fJUPW8pgJ35CTR8Tlpc6-8CC6nzAmEMpCjH29=s360-c-no" />
          </Tooltip>
          <Tooltip title='Thiên Phong'>
            <Avatar
              alt="Thiên Phong"
              src="https://lh3.googleusercontent.com/a/ACg8ocJgicmMjuLTTu-fJUPW8pgJ35CTR8Tlpc6-8CC6nzAmEMpCjH29=s360-c-no" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
