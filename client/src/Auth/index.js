import { Avatar, Button, Container, Grid,Link,Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Styles from './Styles';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined'
import { useDispatch } from 'react-redux';
import {Link as LinkR} from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import Input from './Input';
import Icon from './icon';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../actions/user';
const Auth = () => {
    const classes = Styles()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //const user = JSON.parse(localStorage.getItem('profile'))
    const initialValues = {firstName:"",lastName:"",email:"",password:"",confirmPassword:""}
    const [signup,setSignUp] = useState(false)
    const [showpwd,setShowpwd] = useState(false)
    const [formData,setFormData] = useState(initialValues)
    const handleShowPassword = ()=>{
        setShowpwd(!showpwd)
    }
    const switchMode = ()=>{
        setSignUp(!signup)
        setShowpwd(false)
    }
    var error=""
    const handleSubmit=(e)=>{
        e.preventDefault()
            if(signup)
                dispatch(signUp(formData,navigate))
            else
                dispatch(signIn(formData,navigate))
            setFormData(initialValues)
        
       
    }
    
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const googleSuccess = async (res)=>{
        const result = res?.profileObj
        const token = res?.tokenId
        try {
            dispatch({type:"AUTH",data:{result,token}})
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = (error)=>{
        console.log(error)
    }
  return (
      <Container component="main" maxWidth="xs">
          <Paper elevation={3}  className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutLinedIcon />
                </Avatar>
                <Typography variant='h6' color='primary'>{signup?"Sign Up":"Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                        {
                            signup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half  />
                                     <Input name="lastName" label="Last Name" handleChange={handleChange}  half  />
                                </>
                             )
                        }
                        <Input name="email" label="Email" handleChange={handleChange} type="email"  />
                        <Input name="password" label="Password" handleChange={handleChange}  type={showpwd?'text':'password'} handleShowPassword={handleShowPassword } />
                        {signup &&(
                            <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange}  type="password" />
                        )}
                    </Grid>
                    <Button type="submit" className={classes.button} variant='contained' color="primary" fullWidth >{signup?"Sign Up":"Sign In"}</Button>
                   
                    <GoogleLogin
                        apiKey='AIzaSyAkLYeVYK0rClysngl5x_FqIAU6rue1IwQ'
                        clientId='1089981393247-pu99v526h73c1q4j2ptu0j8srm1nk9d9.apps.googleusercontent.com'
                        render={(renderprops)=>(
                            <Button variant='contained' color="primary" fullWidth onClick={renderprops.onClick} disabled={renderprops.disabled} startIcon={<Icon/>} >
                                Google {signup?"Sign Up":"Sign In"}
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                     />
                     <Grid container justifyContent='center' style={{marginTop:"10px"}}>
                        <Grid item >
                            {!signup &&
                                <Link component={LinkR} to="/auth/forgot" color='secondary' underline="hover" className={classes.forgot} >Forgot Password</Link>
                            }
                            <div className={classes.signinsignup}>
                                <Typography variant='body2' color='inherit'>{signup? 'Already have an account? ':"Don't have an account? "}</Typography>
                                <Button onClick={switchMode} color="secondary" >
                                    {signup? 'Sign In':"Sign Up"}
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
          </Paper>
      </Container>
   
  )
};

export default Auth;
