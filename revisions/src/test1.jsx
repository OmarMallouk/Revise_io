import React, { useContext } from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { UserContext } from "./context1";

const Test1 = () =>{
    const [counter,setCounter] = useState(0);
    const [formValues, setFormValues] = useState({ username: '', password: '' });
    const[items,setItems] = useState([]);
    const [perks,setPerks] = useState([]);
    const {users} = useContext(UserContext);





    const fetchPerks = async() =>{
        
        try{

       
            const response = await  axios.get("/users/perks",{
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        
    },
});
            setPerks(response.data);
        }catch(error){
            console.error("Error fetching perks:", error);
        }
        
        }

        
    const login = async() =>{
        
        try{

       
            const response = await  axios.post("/login",{
                
                    username: formValues.username,
                    password: formValues.password,
                },{
        headers:{
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}`
        
    },
});
            setFormValues(response.data);
        }catch(error){
            console.error("Error fetching perks:", error);
        }
        
        }




    


    console.log("items",items);


    const handleChange = (event) =>{
        const name  = event.target.name;
        const value = event.target.value;
        setFormValues(values=>({...values, [name]: value}))
       
    }

    const handleSubmit=(event) =>{

    
        event.preventDefault();
       login();
    }

    return(

<div className="testo">

{/* 
<button className="minus" onClick={()=>setCounter(prevCount => Math.max(prevCount - 1, 0))}>-</button>

<textarea className="texto" value={counter} readOnly></textarea>

<button className="plus" onClick={()=>setCounter(prevCount =>  (prevCount + 1))}>+</button>

<button onClick={()=>setCounter(0)}>reset</button>
 */}

<form onSubmit={handleSubmit}>
    <label htmlFor="">Enter your username
    <input type="text" name="username" value={formValues.username} onChange={handleChange} />
    </label>

    <label htmlFor="" >Enter your password
        <input type="password" name="password" value={formValues.password} onChange={handleChange}/>
    </label>
    <input type="submit" value={login}/>
</form>


<div>
   

        
        {items.map((item, index) =>(
            <p key={index}>
                {item.name} - {item.age}
            </p>
        ))}
  
</div>

<div>
    {perks.map((perk,index)=>{
        <p key={perk.id}>{perk.name}</p>
    })}
</div>


</div>


    );
}


export default Test1;