import { Container, Profile } from './style.js';

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
        </Container>
    );
}
