import { useState } from "react";
import { Container, Form, Background } from './styles';
import { Input } from "../../../components/Input";
import { Button } from "../../../components/buttons";
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { api } from "../../services/api";


export function SignUp() {

    //signup information State
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    function handleSignUp(event) {


        if (!name & !email & !password) {
           return ( 
            alert("To create an account, name, email, and password are mandatory.")
           )
        }

        // access the api and add the information to our db
        api.post("/users", { name, email, password })
            .then(() => {
                alert("User created");
                navigate("/");
            })
            .catch(error => {
                if (error.res) {
                    alert(error.res.data.message);
                } else {
                    alert("user alredy exists");
                }
            });

            
    };

    function handleSubmit(event) {
        event.preventDefault();
    };

    return (
        <Container>
            <Background alt="Background image with a cup of coffee, notepad, and a laptop" />
            <Form onSubmit={handleSubmit}>
                <h1>Rocket Notes</h1>
                <p>App to manage and save your notes</p>

                <h2>Create an account</h2>

                <Input type="text"
                    placeholder="Name"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)} // receives the information in this input.
                />

                <Input type="email"  // Ensure correct type for email input
                    placeholder="E-mail"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input type="password"  // Ensure correct type for password input
                    placeholder="Password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button type="submit" title="SignUp" onClick = {handleSignUp} /> 

                <Link to="/">Already have an account?</Link>
            </Form>
        </Container>
    );
}


