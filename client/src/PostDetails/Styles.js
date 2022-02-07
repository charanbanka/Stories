import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme)=>({
    media: {
        borderRadius: '20px',
        objectFit: 'cover',
        height: '100%',
        maxHeight:"400px",
       // maxWidth:"50%"
        width: '100%',
    
      },
      card: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          display: "flex",
          width:"100%",
          flexWrap: 'wrap',
          flexDirection: 'column',
        },
      },
      section: {

        borderRadius: '20px',
        margin: '10px',
        width: '50%',
        [theme.breakpoints.down('sm')]:{
          width:"100%",
        }
        //flex: 1,
      },
      imageSection: {
        marginLeft: '20px',
        width: "100%",
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0,
          maxHeight: "400px",
        },
      },
      recomendposts:{
          display: "flex",
          justifyContent:"space-between",
          [theme.breakpoints.down('sm')]: {
            flexDirection:"column",
            width:"100%",
          },
      },
      recomandimage:{
        width:"200px",
        [theme.breakpoints.down('sm')]:{
          width:"100%",
        }
      },
      recomendsection:{
        marginTop:theme.spacing(5),
      },
      
}))