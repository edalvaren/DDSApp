import React from 'react'
import { AppBar, Toolbar, Menu, MenuItem, IconButton } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import LogoAvatar from '../images/ImageAvatars';
import * as actions from '../actions/navbar'
import { to } from '../actions/navigation'
import { unauthorizeUser } from '../actions/auth'
import { connectTo } from '../utils/generic'
import flexbox from '@material-ui/system/flexbox';


const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'flex',
        alignItems: 'flex-end',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        flexGrow: 1,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
        sectionDesktop: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    logoFlexBox:{
        opacity: 0.7,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        border: 'solid',
        borderColor: fade(theme.palette.primary.dark, 0.25)
    },
    },
  })



const navbar = ({classes, to, unauthorizeUser, dropdownOpen, dropdownAnchor, toggleDropdown}) => {
  const itemHandler = func => () => {
    toggleDropdown()
    func()
  }
  return (
    <AppBar position='static'>
      <Toolbar>
              <div className={classes.searcIcon}>       <IconButton
                  aria-owns={dropdownOpen ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={({ currentTarget }) => toggleDropdown(currentTarget)}
                  color="inherit"
              >
                  <MenuIcon />
              </IconButton>
                     </div>
            <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        <div className={classes.sectionDesktop}>

      <div className={classes.grow} />
                  <flexbox className={classes.logoFlexBox}>
                  {/* <LogoAvatar /> */}
        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                    Spiral Docs | Intralox STG | 2019 &copy;
          </Typography>
                      </flexbox>

                                  </div>

          <Menu
            id="menu-appbar"
            anchorEl={dropdownAnchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={dropdownOpen}
            onClose={toggleDropdown}
          >
            <MenuItem onClick={itemHandler(() => to (''))}> About </MenuItem>
            <MenuItem onClick={itemHandler(() => to('documents'))}>Browse Documents</MenuItem>
            <Divider />
            <MenuItem onClick={itemHandler(unauthorizeUser)}>Sign out</MenuItem>
            <MenuItem>About</MenuItem>
          </Menu>
      </Toolbar>
    </AppBar>
  )
}

navbar.propTypes = {
    classes: PropTypes.object.isRequired,
    handleUnauthorizedUser: PropTypes.func.isRequired,
};


export default connectTo(
  state => state.navbar,
  { ...actions, to, unauthorizeUser },
  withStyles(styles)(navbar)
)