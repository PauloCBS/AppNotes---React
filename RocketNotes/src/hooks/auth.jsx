import {createContext, useContext, useState, useEffect} from "react";
import {api} from '../services/api';



export const AuthContext = createContext({});

function AuthProvider({ children }){

    const[data, setData] = useState({});

    async function signIn({email, password}){

       try {
        const response = await api.post("/sessions", {email, password}); // responsible to check the email and password
        const {user, token} = response.data;

        //add the token and user name to our local storage. 
        localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
        localStorage.setItem("@rocketnotes:token", token);

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`//The token is added to our header to allow the acess to protected content

        setData({user, token});

       }catch(error){

            if(error.response){
                //console.log(error.response.data.message)
                alert("login not possible, check password and e-mail")
            }else{
                alert("login not possible, try again later");
            }
            
       }

    };
    function SignOut(){
        //after a logout the user information is removed from the browser storage.
        localStorage.removeItem("@rocketnotes:token");
        localStorage.removeItem("@rocketnotes:user");

        setData({});// it will clear the data from the browser.
    };

    async function updateProfile({user, avatarFile}){

        try{

                if(avatarFile) {

                    const fileUploadForm = new FormData(); //used to send the picture. 
                    fileUploadForm.append("avatar", avatarFile); //prepare the picture to be sent to the server. 
                    const response = await api.patch("/users/avatar", fileUploadForm);
                    user.avatar = response.data.avatar; //updates the avatar picture in the BE. 

                    alert("Profile Picture updated")
                    
                } 
                    // this saves the data in the localstorage and in the BE. 
                    await api.put("/users", user);
                    localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
                    setData({user, token: data.token});
                
                    alert("All changes were sucessfully done");

                


        }catch(error){

                if(error.response){
                    alert(error.response.data.message)
                }else{
                    alert("It was not possible to update your profile");
                }
                
            }

    };
//react hook used to get the auth data
    useEffect(
        () => {
            const token = localStorage.getItem("@rocketnotes:token");
            const user  = localStorage.getItem("@rocketnotes:user");


            if( token && user) {
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }
            //update the state with token and user.
            setData({
                token, 
                user: JSON.parse(user)
            });} 
            ,[]);

        return(
            //the component's children have acess to the auth context. 
            <AuthContext.Provider value={{
                signIn, 
                SignOut, 
                updateProfile,
                user : data.user}} >
            {children}
            </AuthContext.Provider>
        );
};

function useAuth(){
    const context = useContext(AuthContext);

    return context
}

export {AuthProvider, useAuth};