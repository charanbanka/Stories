import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Styles from './Styles';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const classes = Styles()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const logout = ()=>{
        dispatch({type:"LOGOUT"})
        navigate('/')
        setUser(null)
    }
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    //console.log(user)
  return (
    <AppBar position='static' align="center" className={classes.appBar}>
        <div className={classes.brandContainer}>
            <Typography component={Link} to="/posts" className={classes.heading} variant='h4' color='inherit' underline="none">Stories</Typography>
        </div>
        <Toolbar className={classes.toolbar}>
            {user?(
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} >{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ):(
                <Button variant='contained' color='primary' className={classes.signin} component={Link} to='/auth' >Sign In</Button>
            )}
        </Toolbar>
    </AppBar>
  )
};

export default Navbar;
