import { CircularProgress, Container, Divider, Grid, Paper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import Styles from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getPost, getPostsBySearch } from '../actions/posts';
import { likePost } from '../api';

const PostDetails = () => {
  const {post,posts,isLoading} = useSelector((state)=>state.posts)
  const classes = Styles()
  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);
 
  useEffect(()=>{
    dispatch(getPostsBySearch({search:'none',tags:post?.tags.join(',')}))
  },[post])
  const openPost=(_id)=>{
    dispatch(getPost(_id));
    navigate(`/posts/id/${id}`)
  }
  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  if(!post) return <CircularProgress size="7em" />
  const recommendPosts = posts.filter((postone)=>postone._id!==post._id)
  return (
         <Paper elevation={6} style={{ padding: '20px', borderRadius: '15px' }}>
            <div className={classes.card}>
                <div className={classes.section}>
                  <Typography variant="h3" component="h2">{post.title}</Typography>
                  <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                  <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
                  <Typography variant="h6">Created by: {post.name}</Typography>
                  <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                  <Divider style={{ margin: '20px 0' }} />
                  <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
                  <Divider style={{ margin: '20px 0' }} />
                  <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
                  <Divider style={{ margin: '20px 0' }} />
                </div>
                <div className={classes.imageSection}>
                  <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
                </div>
      </div>
      <div className={classes.recomendsection}>
          <Typography variant='h6' color='inherit'>You might like this</Typography>
          <Divider/>
          <div className={classes.recomendposts} >
            { recommendPosts && (
              recommendPosts.map(({title,name,selectedFile,message,likes,_id})=>(
                <div onClick={()=>openPost(_id)} key={_id} style={{cursor:"pointer",margin:"20px"}} >
                  
                    <Typography variant='h6' color='inherit'>{title}</Typography>
                    <Typography variant='subtitle2' color="inherit" >{name}</Typography>
                    <Typography variant='subtitle2' color='inherit'>{message}</Typography>
                    <Typography variant='subtitle2' color="primary" >Likes:{likes.length}</Typography>
                    
                    <img src={selectedFile} alt={title}  height="200px" className={classes.recomandimage} />
                </div>
              ))
            ) }
          </div>
      </div>
      </Paper>
    )
};

export default PostDetails;
