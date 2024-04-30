import {createContext, useContext, useState, useEffect} from "react";
import {api} from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }){

    const[data, setData] = useState({});

    async function signIn({email, password}){

       try {
        const response = await api.post("/sessions", {email, password});
        const {user, token} = response.data;

        localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
        localStorage.setItem("@rocketnotes:token", token);

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        setData({user, token});

       } catch(error){
            if(error.response){
                console.log(error.response.data.message)
            }else{
                console.log("login not possible");
            }
            
       }

    };
    function SignOut(){

        localStorage.removeItem("@rocketnotes:token");
        localStorage.removeItem("@rocketnotes:user");

        setData({});// it will change the state to authroutes
    };

    async function updateProfile({user, avatarFile}){

        try{

                if(avatarFile) {

                    const fileUploadForm = new FormData();
                    fileUploadForm.append("avatar", avatarFile);

                    const response = await api.patch("/users/avatar", fileUploadForm);
                    user.avatar = response.data.avatar;

                    alert("Profile Picture updated")
                    console.log("Profile Picture updated")

                }

                await api.put("/users", user);
                console.log(user);
                localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

                setData({user, token: data.token})
                console.log(setData({user, token: data.token}))
                alert("password was updated")


        }catch(error){

                if(error.response){
                    console.log(error.response.data.message)
                }else{
                    console.log("It was not possible to update your profile");
                }
                
            }

    };
    useEffect(
        () => {
            const token = localStorage.getItem("@rocketnotes:token");
            const user  = localStorage.getItem("@rocketnotes:user");


            if( token && user) {
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            }
            setData({
                token, 
                user: JSON.parse(user)
            });} 
            ,[]);
        return(
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