import {useState, useEffect} from "react";

import {useParams} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function PostDetails(){
  const [post,setPost] = useState(null);
  const [isloading,setIsLoading] = useState(true);

  const [showAlert, setShowAlert] = useState(null);
  

  const {id} = useParams();
 

  const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");
   const [description, setDescription] = useState("");
   const [userIsAuthor, setUserIsAuthor] = useState(true); // Define userIsAuthor

   useEffect(() => {
    const fetchData = async () => {
      try{
    const response = await fetch(`http://localhost:3000/api/posts/${id}`);
      
    if(!response.ok){
      throw new Error(response.status);
    }

   const PostDetails = await response.json();
   setPost(PostDetails);
  }
      catch(error){
        console.error(error.message);
      }
      finally{
        setIsLoading(false);
      }
    };

    fetchData();
   },[id]);

   const handleShowAlert = (message,variant="success") =>{
    setShowAlert({message,variant});
    setTimeout(() => {
      setShowAlert(null);
    },3000);
   };

   const handleUpdate = async () => {
    try{
      const updatedPost = {
        title: title !== "" ? title : post.title,
        author: post.author,
        description: description !== "" ? description : post.description,

      };

    const response = await fetch(`http://localhost:3000/api/posts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPost),
        }
      );

      if(!response.ok){
        throw new Error(`Failed to update post. Status: ${response.status}`);
      }

  const deserialized =  await response.json();
  handleShowAlert(deserialized.message);

    }
    catch(error){
      console.error("Update failed:",error.message);
    }

   };
   const handleDelete = async () => {

    try{
      const response = await fetch(`http://localhost:3000/api/posts/${id}`,{
       method: "DELETE",
      });
      if(!response.ok){
       throw new Error(`Failed to delete post. Status: ${response.status}`);
      }

      handleShowAlert("Post has been deleted.");

       }catch(error){
         console.error("Delete failed:", error.message);
       }
 
   };




   if(isloading) return <Spinner animation="border" variant="info" />;
    return (
        <>
        {showAlert && (
          <Alert variant={showAlert.variant}>
            {showAlert.message}
        </Alert>
        )}
        <h1>Welcome to the PostDetails page!</h1>
        {userIsAuthor ? (
          <>            <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
             type="text"
              placeholder="Enter title"
              defaultValue={post.title}
               onChange={(event)=>setTitle(event.target.value)} />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={6} placeholder="Enter description"
          defaultValue={post.description}
          onChange={(event)=>setDescription(event.target.value)}
          />
          </Form.Group>

          <Button variant="primary" className="m-2"
          onClick={handleUpdate}
          >
            Update
          </Button>


          <Button variant="danger"
          onClick={handleDelete}
          >
            Delete
          </Button>
          </>
        ): (
            <Card key={post._id}>
            <Card.Header>{post.author}</Card.Header>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
              {post.description}
              </Card.Text>
              <Card.Text>
                Likes:
              {post.likes}
              </Card.Text>
              
            </Card.Body>
          </Card>
        )}
      
        </>
    );
    }
    
    
    export default PostDetails;
    