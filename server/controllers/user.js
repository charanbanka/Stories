import mongoose from 'mongoose';
import userSchema from '../models/userSchema.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signin = async(req,res)=>{
    const {email,password} = req.body
    try {
        const existingUser = await userSchema.findOne({email})

        if(!existingUser) return res.status(404).json({message:"User doesn't exist"})

        const isPwdCrt = await bcrypt.compare(password,existingUser.password)

        if(!isPwdCrt) return res.status(404).json({message:"Invalid password"})

        const token = jwt.sign({email:existingUser.email,id:existingUser._id},'test',{expiresIn:"1h"})

        res.status(200).json({result:existingUser,token})
    } catch (error) {
        res.status(500).json({message:'something went wrong.'})
    }
}

export const signup = async(req,res)=>{
    const {firstName,lastName,email,password,confirmPassword} = req.body;
    try {
        const existingUser = await userSchema.findOne({email})

        if(existingUser) return res.status(404).json({message:"User already exist"})

        if(password!=confirmPassword) return res.status(404).json({message:"password not matched"})

        const hashPassword = await bcrypt.hash(password,12)

        const user = await userSchema.create({email,password:hashPassword,name:`${firstName} ${lastName}`})

        const token = jwt.sign({email:user.email,id:user._id},'test',{expiresIn:'1h'})

        res.status(200).json({result:user,token})
    } catch (error) {
        res.status(500).json({message:'something went wrong.'})
    }
}