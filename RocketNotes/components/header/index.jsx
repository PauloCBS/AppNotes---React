import { Container, Profile, ExitIcon } from './style.js';
import { IoIosExit } from "react-icons/io";

export function Header(){

    return(
        <Container>
             <Profile>
                <img src="https://github.com/PauloCBS.png" alt="Profile picture"/>

                <div> 
                    <span>Welcome</span>
                    <strong>Paulo Silva</strong>
                </div>
 
            </Profile>

            <ExitIcon>
                <IoIosExit/>
            </ExitIcon>
            
        </Container>
    );
}
