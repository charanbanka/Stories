import React from 'react';
import { Container } from '@material-ui/core';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Auth from './Auth';
import PostDetails from './PostDetails/PostDetails';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
 // const navigate = useNavigate()
  return(
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/posts" element={<Home/>} exact />
            <Route path="/posts/search" element={<Home />} exact />
            <Route path="/posts/id/:id" element={<PostDetails />} exact />
            <Route path="/auth" element={<Auth />} exact />
  
          </Routes>
        </Container>
      </BrowserRouter>
      
  )
};

export default App;
