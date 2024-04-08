import { Container, Form, Background } from './styles';
import { Input } from "../../../components/Input";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { Button } from "../../../components/Buttons";
import { BsFilePerson } from 'react-icons/bs';






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
                    icon ={BsFilePerson}
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
            </Form>

            

        </Container>
    )
};


