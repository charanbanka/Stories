import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';
import Styles from './Styles';

const Posts = ({setCurrentId}) => {
    const classes = Styles()
    const {posts,isLoading} = useSelector((state)=>state.posts)
  return (
      isLoading ? <CircularProgress sixe="7em" /> :(
          <Grid container spacing={2}>
              {posts.map((post)=>(
                  <Grid key={post._id} item xs={12} sm={6} md={4} lg={4}>
                      <Post post={post} setCurrentId={setCurrentId} />
                      </Grid>
              ))}
          </Grid>
      )
  )
};

export default Posts;
