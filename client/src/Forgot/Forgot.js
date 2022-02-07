import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import Styles from './Styles';
const Forgot = () => {
    const classes = Styles()
    const navigate = useNavigate()
    const [forgot,setForgot] = useState(true)
    const initialValues={email:"",password:"",confirmPassword:""}
    const [forgotData,setForgotData] = useState(initialValues)
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(forgotData)
        setForgot(!forgot)
        setForgotData(initialValues)
        navigate('/auth')
    }
    const handleChange = (e)=>{
        setForgotData({...forgotData,[e.target.name]:e.target.value})
    }
  return (
    <Container component="main" maxWidth="xs">
    <Paper  className={classes.paper}>
          
          <Typography variant='h6' color='primary'>Forgot Password</Typography>
          <Typography variant='h6' color='secondary'>Currently working on it</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
              <div className={classes.container}>
                  {forgot? (<>
                        <TextField name="email" required variant="outlined" label="Email" type="email" value={forgotData.email} onChange={handleChange} fullWidth />
                        <Button onClick={()=>setForgot(!forgot)} className={classes.pwd} variant='contained' color="primary"  >Continue</Button>
              </>):(<>
                  <TextField className={classes.pwd} name="password" variant="outlined" label="Password" type="password" required fullWidth value={forgotData.password} onChange={handleChange} />
                
                  <TextField name="confirmPassword" variant="outlined" label="Confirm Password" required fullWidth type="password" value={forgotData.confirmPassword} onChange={handleChange} />
                  <Button type="submit" className={classes.pwd} variant='contained' color="primary"  >Submit</Button>
                  </> )}
              </div>
              </form>
        </Paper>
    </Container>
  )
};

export default Forgot;
