import { makeStyles } from "@material-ui/core/styles";

export default makeStyles ((theme)=>({
    paper:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:'350px',
        marginTop:theme.spacing(5),
    },
    form:{
        padding: theme.spacing(1),
    },
    button:{
        marginTop:theme.spacing(1),
        marginBottom:theme.spacing(1),
        
    },
    avatar:{
        backgroundColor:"red",
        margin:theme.spacing(1),
    }

}))