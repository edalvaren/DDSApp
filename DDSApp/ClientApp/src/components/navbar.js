import React from 'react'
// import {AppBar, Toolbar, Menu, MenuItem, IconButton } from '@material-ui/core'
// import { AccountCircle } from '@material-ui/icons'
// import styled from 'styled-components'
import PrimarySearchBar from '../components/styled/PrimarySearchAppBar';
// import Logo from './logo';

import * as actions from '../actions/navbar'
import { to } from '../actions/navigation'
import { unauthorizeUser } from '../actions/auth'
import { connectTo } from '../utils/generic'



export const Navbar = ({ unauthorizeUser, dropdownOpen, dropdownAnchor, toggleDropdown }) => {
  return (
    <PrimarySearchBar handleUnauthorizedUser={() => toggleDropdown && unauthorizeUser } />
  )
}


// export const Navbar = ({ unauthorizeUser, dropdownOpen, dropdownAnchor, toggleDropdown }) => {
//   return (
//     <AppBar position='static'>
//         <div>
//         <PrimarySearchBar>
//           <IconButton
//             aria-owns={dropdownOpen ? 'menu-appbar' : null}
//             aria-haspopup="true"
//             onClick={({ currentTarget }) => toggleDropdown(currentTarget)}
//             color='primary'
//           >
//             <AccountCircle />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={dropdownAnchor}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={dropdownOpen}
//             onClose={toggleDropdown}
//           >
//             <MenuItem onClick={() => toggleDropdown() && unauthorizeUser()}>Logout</MenuItem>
//           </Menu>
//         </PrimarySearchBar>
//         </div>
//     </AppBar>
//   )
// }

export default connectTo(
  state => state.navbar,
  { ...actions, to, unauthorizeUser },
  Navbar
)