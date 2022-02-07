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
  signin:{
      display: "flex",
      justifyContent:"flex-end",
      marginLeft:theme.spacing(25),
    
  },
  heading: {
    textDecoration:'none',
    padding: theme.spacing(6),
    [theme.breakpoints.down('sm')]:{
      display: "none",
    }
  },
  home:{
    display: "none",
    [theme.breakpoints.down('sm')]:{
      display: "flex",
      marginLeft:theme.spacing(1),
      justifyContent:"center",
      alignItems:"center",
    }
  },
  image: {
    marginLeft: '15px',
  },
  gridcontainer:{
      display:"flex",
  },
  toolbar:{
    [theme.breakpoints.down('sm')]:{
      width: "100%",
    },
    width:"50%",
  },
  profile:{
    display: "flex",
    width: "100%",
    justifyContent:"space-between",
    //alignItems:"center",
    [theme.breakpoints.up('sm')]:{
      marginRight:theme.spacing(8)
    }
    
  },
  purple:{
    backgroundColor:"red",
  },
  userName:{
    display: "flex",
    alignItems:"center",
   
  }

}));