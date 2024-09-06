import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const StyledToolBarr = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-evenly'
})


const Navbar = () => {
  return (
    <AppBar position="absolute">
      <StyledToolBarr>
        <MenuItem>About</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Skills</MenuItem>
      </StyledToolBarr>
    </AppBar>
  )
}

export default Navbar