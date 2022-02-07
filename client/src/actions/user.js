import * as api from '../api/index'

export const signIn = (formData,navigate)=> async(dispatch)=>{
    try {
        const {data} = await api.signIn(formData)
        dispatch({type:"AUTH",data})
        //console.log(data.message)
        navigate('/')
    } catch (error) {
        //console.log(data.message)
        console.log(error.message)
    }
}

export const signUp = (formData,navigate)=> async(dispatch)=>{
    try {
        const {data} = await api.signUp(formData)
        
        dispatch({type:"AUTH",data})
        console.log(data.message)
        navigate('/')
    } catch (error) {
        console.log(error.message)   
    }
}