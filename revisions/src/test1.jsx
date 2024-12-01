import React from "react";
import { useState,useEffect } from "react";

const Test1 = () =>{
    const [counter,setCounter] = useState(0);
    const[items,setItems] = useState([]);

// const handleChange(){

//     if 

// }



    return(

<div className="testo">


<button className="minus" onClick={()=>setCounter(prevCount => Math.max(prevCount - 1, 0))}>-</button>

<textarea className="texto" value={counter} readOnly></textarea>

<button className="plus" onClick={()=>setCounter(prevCount =>  (prevCount + 1))}>+</button>

<button onClick={()=>setCounter(0)}>reset</button>




</div>


    );
}


export default Test1;