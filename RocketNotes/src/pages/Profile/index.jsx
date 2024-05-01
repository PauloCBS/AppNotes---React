import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { api } from '../../services/api';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth'; //
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Buttons'
import { Container, Form, Avatar } from "./styles";
import { useNavigate } from 'react-router-dom';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";




export function Profile() {

// access to useAuth hooks
  const {user, updateProfile} = useAuth();

//states - user login info 
  const [name,setName] = useState(user.name);
  const [email,setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

//states - profile picture
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarURL); 
  const [avatarFile, setAvatarFile] = useState(null); 
  
  
  const navigate = useNavigate();


//function that will receive th inputs and send it to auth.jsx
async function handleUpdate(){
  const updatedUser = Object.assign({}, user, {
    name, 
    email, 
    password: passwordNew,
    old_password: passwordOld,
  });
  
  // Call updateProfile with the correct parameter structure
  await updateProfile({user: updatedUser, avatarFile});


    handleBack()

  }

    function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);

  };

  function handleBack(){
    navigate(-1);
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);

  };

  function handleBack(){
    navigate(-1);
  }




  function handleSubmit(event) {
    event.preventDefault(); // This stops the form from submitting normally
    
  };



  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack} >
          <FiArrowLeft size={24} />
        </button>
      </header>

      <Form onSubmit={handleSubmit} >
        <Avatar>
          <img
            src={avatar}
            alt="User profile Picture"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange ={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
          value ={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value ={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Current Password"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="New Password"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button 
         type="submit"
        title="Save" 
        onClick={handleUpdate} />
      </Form>
    </Container>
  )
}