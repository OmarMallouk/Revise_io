import axios from "axios";
import { Children, useContext } from "react";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

const UserProvider = ({children}) =>{
    const[users,setUsers] = useState([]);



    const fetchUsers = async()=>{

        try{

            const response = await axios.get("/users",{
                headers:{
                    "Authorization": `Bearer ${token}`,
                    
                }
                
            });
            console.log(response)
            setUsers(response.data);
        }catch(error){
            console("error message");
    }
        
    }


    useEffect(()=>{
        fetchUsers();
    },[]);



    return(

        <UserContext.Provider value={{users}}>
            {children}
        </UserContext.Provider>



    );

}


export default UserProvider;