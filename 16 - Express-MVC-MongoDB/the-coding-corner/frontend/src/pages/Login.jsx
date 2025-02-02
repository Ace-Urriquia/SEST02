import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async (event) =>{
        event.preventDefault();

        try{
         const response = await fetch("http://localhost:3000/api/users/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username,password}),
            });

            if(!response.ok){
                throw new Error(`Failed to login. Status: ${response.status}`);
            }

            const deserialized = await response.json();
            localStorage.setItem("jwtToken", deserialized.token);
           

        }catch(error){
            console.error(error.message);
        }
    };

    return (
        <>
        <h1>Login Page</h1>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password"
         value={password}
         onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
        </>
    );
}

export default Login;