import { Container, Form, Background } from './styles';
import { Input } from "../../../components/Input";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { Button } from "../../../components/Buttons";






export function SignIn(){
    return(
        <Container>
            <Form>
                    <h1>Rocket Notes</h1>
                    <p>App to manage and save your notes </p>

                    <h2>Login</h2>
                
            
                <Input type="text"
                    placeholder ="E-mail"
                    icon ={FiMail}
                />

                <Input type="Password"
                    placeholder ="password"
                    icon ={FiLock}
                />

                <Button title="login">
                    Login
                </Button>
            </Form>

            <Background 
            alt ="Background image with a cup of coffe, notepad and a laptop"/>

        </Container>
    )
};


