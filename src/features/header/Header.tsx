import {AppBar, Hidden} from '@mui/material'
import NavBar from '../../entitties/navBar/NavBar'
import DropdownAndProfile from '../../entitties/dropdownAndProfile/DropdownAndProfile'

const Header = () => {
  return(
    <>
    <AppBar elevation={0} sx={{background:'#FFFFFF', height:'64px', alignItems:'center', display:'flex',justifyContent:'space-between', flexDirection:'row', paddingTop:'10px', paddingBottom:'10px', paddingLeft:'140px', paddingRight:'220px'}}>
      <NavBar/>
      <Hidden smDown>
      <DropdownAndProfile/>
      </Hidden>

    </AppBar>

    </>
  )
}

export default Header