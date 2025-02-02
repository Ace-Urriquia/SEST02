
import Home from "./pages/Home";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import {Routes, Route, Navigate} from "react-router-dom";
//Bootstrap
import Container from 'react-bootstrap/Container';


function App() {
  

  return (
    <>
    <Navigation/>
    <Container>
    <Routes>
    
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Post/>}/>
        <Route path="/posts/create" element={<CreatePost/>}/>
        <Route path="/posts/:id" element={<PostDetails/>}/>
        <Route path="*" element={<Navigate to="/" />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Container>
      
    </>
  )
}

export default App;
