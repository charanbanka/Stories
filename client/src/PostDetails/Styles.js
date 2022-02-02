import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme)=>({
    media: {
        borderRadius: '20px',
        objectFit: 'cover',
        height: '100%',
        //maxHeight: '600px',
    
      },
      card: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          flexWrap: 'wrap',
          flexDirection: 'column',
        },
      },
      section: {
        borderRadius: '20px',
        margin: '10px',
        //flex: 1,
      },
      imageSection: {
        marginLeft: '20px',
        
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0,
        },
      },
      recomendposts:{
          display: "flex",
          justifyContent:"space-between",
      }
}))