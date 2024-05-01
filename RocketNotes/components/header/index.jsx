import { useNavigate } from 'react-router-dom';
import { Container, Profile, ExitIcon } from './style.js';
import { IoIosExit } from "react-icons/io";
import {useAuth} from "../../src/hooks/auth"
import { api } from '../../src/services/api.js';
import avatarPlaceholder from '../../src/assets/avatar_placeholder.svg';




export function Header(){

    const { SignOut, user} = useAuth();
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const navigation = useNavigate();



    function handleSignOut(){
            
        SignOut();
    }

    return(
        <Container>
             <Profile to="/profile">
                <img src={avatarURL} alt={user.name}/>
                

                <div> 
                    <span>Welcome</span>
                    <strong>{user.name}</strong>
                </div>
 
            </Profile>

            <ExitIcon onClick={handleSignOut} >
                <IoIosExit/>
            </ExitIcon>
            
        </Container>
    );
}
