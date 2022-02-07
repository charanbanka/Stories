import axios from 'axios';

const API = axios.create({baseURL:"http://13.233.130.23:5000"})
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.autherization= `loveyou ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const fetchPosts = (page)=> API.get(`/posts?page=${Number(page)}`)
export const fetchPost = (_id)=> API.get(`/posts/id/${_id}`)
export const fetchPostsBySearch = (searchQuery) =>API.get(`/posts/search?searchQuery=${searchQuery.search||'none'}&tags=${searchQuery.tags}`)
export const createPost = (newPost) =>API.post('/posts',newPost)
export const updatePost = (_id,newPost)=>API.patch(`/posts/${_id}`,newPost)
export const deletePost = (_id) =>API.delete(`/posts/${_id}`)
export const likePost = (_id)=>API.patch(`/posts/${_id}/likePost`)

export const signIn = (formData)=>API.post('/user/signin',formData)
export const signUp = (formData)=>API.post('/user/signup',formData)
