import { Button, ButtonBase, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import DeleteIcon from '@material-ui/icons/Delete'
import moment from 'moment'
import Styles from './Styles';
import { deletePost,getPost,likePost } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Post = ({post,setCurrentId}) => {
    const classes = Styles()
    const location = useLocation()
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('profile'))
    const Likes = () => {
      if (post.likes.length > 0) {
        return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
          ? (
            <><ThumbUpAltIcon fontSize="small" />{post.likes.length > 2 ?`You & ${post.likes.length - 1} others`: `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
          );
      }
    
      return <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;Like</>;
    };
    const openPost =()=>{
      dispatch(getPost(post._id))
      navigate(`/posts/id/${post._id}`)
    }
    const dispatch = useDispatch()
  return (
    <Card className={classes.card} sx={{height: 150}}>
      
    <CardMedia className={classes.media} image={post.selectedFile||'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
    <div className={classes.overlay}>
      <Typography variant="h6">{post.name}</Typography>
      <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
    </div>
    {(user?.result?._id===post.creator || user?.result?.googleId===post.creator) ?
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() =>setCurrentId(post._id)}><MoreHorizIcon fontSize="medium" /></Button>
      </div>
    :null}
    <ButtonBase component="span" name="test" onClick={openPost} className={classes.cardAction}>
    <div className={classes.details}>
      <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
    </div>
    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
    <CardContent className={classes.message}>
      <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
    </CardContent>
    </ButtonBase>
        <CardActions className={classes.cardActions}>
      <Button size="small" color="primary" disabled={!user?.result} onClick={() =>dispatch(likePost(post._id)) }><Likes/></Button>
          {(user?.result?._id===post.creator || user?.result?.googleId===post.creator)  && <Button size="small" color="secondary" onClick={()=>dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Del</Button>}
    </CardActions>
    
  </Card>
  );
};

export default Post;
