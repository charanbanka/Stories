import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { createPost, updatePost } from '../actions/posts';
import Styles from './Styles';

const Form = ({currentId,setCurrentId}) => {
    const classes = Styles()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('profile'))
    const post = useSelector((state)=>(currentId? state.posts.posts.find((post) =>post._id===currentId):null) )

    const [postData,setPostData] = useState({title:"",message:"",tags:"",selectedFile:""})
    useEffect(()=>{
        if(post) setPostData(post)
    },[post])

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!currentId)
            dispatch(createPost({...postData,name:user?.result?.name},navigate))
        else
        {
            setPostData(post)
            dispatch(updatePost(currentId,postData))
        }
        clear()
    }
    const clear = ()=>{
        setPostData({
           title:"",message:"",tags:"",selectedFile:"" 
        })
        setCurrentId(0)
    }
    if(!user){
        return(
            <Paper className={classes.paper} elevation={6}>
                <Typography variant='h6' color='inherit' align='center'>
                    If you want to like a post or create a post, please login
                </Typography>
            </Paper>
        )
    }
  return (
      <Paper className={classes.paper} elevation={6}>
          <Typography variant='h6' color='primary' align='center'>{currentId? "Editing ":"Creating"} a Post</Typography>
          <form autoComplete='off' noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})} />
            <TextField name="message" variant="outlined" label="Messages" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})} />
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})} />
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})} />
            </div>
            <Button variant='contained' color="primary" type='submit' fullWidth className={classes.buttonSubmit}>Submit</Button>
            <Button variant='contained' color="secondary"  fullWidth onClick={clear}>Clear</Button>
          </form>
      </Paper>
  );
};

export default Form;
