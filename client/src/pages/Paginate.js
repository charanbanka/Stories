import React, { useEffect } from 'react'; 
import {Pagination, PaginationItem} from '@material-ui/lab';
import {Link} from 'react-router-dom';
import Styles from './Styles';
import { getPosts } from '../actions/posts';
import { useDispatch, useSelector } from 'react-redux';

const Paginate = ({page}) => {
  const classes = Styles();
  const {noOfPages} = useSelector((state)=>state.posts)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(page) dispatch(getPosts(page))
  },[page])
  return (
      <Pagination 
        classes={{ul:classes.ul}}
        count={noOfPages}
        page={Number(page)||1}
        variant='outlined'
        color='primary'
        renderItem={(item)=>(
          <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
        )}
      />
  )
};

export default Paginate;
