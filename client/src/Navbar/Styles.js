import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '10px 0',
    display: 'flex',
    background: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
  },
  heading: {
    textDecoration:'none',
    padding: theme.spacing(6),
  },
  image: {
    marginLeft: '15px',
  },
  gridcontainer:{
      display:"flex",
  },
  toolbar:{
      display:"flex",
  },
  profile:{
    display: "flex",
    justifyContent:'space-between',
    marginRight:theme.spacing(8)

  },
  purple:{
    backgroundColor:"red",
  },
  userName:{
    display: "flex",
    alignItems:"center",
    [theme.breakpoints.up('sm')]:{
    marginLeft:theme.spacing(8),
    marginRight:theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]:{
      marginLeft:theme.spacing(1),
      marginRight:theme.spacing(1),
      }
  }

}));