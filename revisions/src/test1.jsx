import React from "react";
import { useState,useEffect } from "react";

const Test1 = () =>{
    const [counter,setCounter] = useState(0);
    const [formValues, setFormValues] = useState({ name: '', age: '' });
    const[items,setItems] = useState([]);

    console.log("items",items);


    const handleChange = (event) =>{
        const name  = event.target.name;
        const value = event.target.value;
        setFormValues(values=>({...values, [name]: value}))
       
    }

    const handleSubmit=(event) =>{

    
        event.preventDefault();
        setItems(prevItems => [...prevItems, {name: formValues.name, age:formValues.age}]);
        setFormValues({name: '', age: ''});
        alert(JSON.stringify(items));
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
    <label htmlFor="">Enter your name
    <input type="text" name="name" value={formValues.name} onChange={handleChange} />
    </label>

    <label htmlFor="" >Enter your age
        <input type="text" name="age" value={formValues.age} onChange={handleChange}/>
    </label>
    <input type="submit"/>
</form>


<div>
   

        
        {items.map((item, index) =>(
            <p key={index}>
                {item.name} - {item.age}
            </p>
        ))}
  
</div>




</div>


    );
}


export default Test1;