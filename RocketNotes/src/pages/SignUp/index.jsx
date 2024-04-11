import { Container, Form, Background } from './styles';
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Buttons";

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';








export function SignUp(){
    return(
        <Container>
            <Background 
            alt ="Background image with a cup of coffe, notepad and a laptop"/>
            <Form>
                    <h1>Rocket Notes</h1>
                    <p>App to manage and save your notes </p>

                    <h2>Create an account</h2>
                
            
                <Input type="text"
                    placeholder ="Name"
                    icon ={FiUser}
                />

                <Input type="text"
                    placeholder ="E-mail"
                    icon ={FiMail}
                />

                <Input type="Password"
                    placeholder ="password"
                    icon ={FiLock}
                />

                <Button title="SignUp">
                </Button>


                <Link to="/">
                    Already have an account ?
                </Link>


            </Form>

            

        </Container>
    )
};


