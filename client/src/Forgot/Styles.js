import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>({
    paper:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:'350px',
        marginTop:theme.spacing(15),
    },
    form:{
       
    },
    pwd:{
        margin: theme.spacing(1),
    },
    container:{
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        margin:theme.spacing(1),
    }
}))