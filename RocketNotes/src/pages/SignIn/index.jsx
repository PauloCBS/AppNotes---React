import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Background } from './styles';
import { useAuth } from '../../hooks/auth';
import { Input } from "../../../components/Input";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { Button } from "../../../components/Buttons";





export function SignIn(){

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");


    const {signIn} = useAuth();
    
    function handleSignIn(){
        signIn({ email, password});

        console.log("handleSignIn")
    };

    function handleSubmit(event) {
        event.preventDefault(); // This stops the form from submitting normally
        // Here you can add what you want to do after the form is submitted
        console.log("Form submitted");
      };
    

 

    return(
        <Container>

            <Form onSubmit={handleSubmit} >
                    <h1>Rocket Notes</h1>
                    <p>App to manage and save your notes </p>

                    <h2>Login</h2>
                
                    
                <Input type="text"
                    placeholder ="E-mail"
                    icon ={FiMail}
                    onChange={e => setEmail(e.target.value)}
                    
                />

                <Input type="Password"
                    placeholder ="password"
                    icon ={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button 
                     type="submit"
                    title="login"
                    onClick={handleSignIn}>
                    Login
                </Button>

                <Link to="/register">Create an account</Link>

            </Form>

            <Background 
            alt ="Background image with a cup of coffe, notepad and a laptop"/>

        </Container>
    )
};


