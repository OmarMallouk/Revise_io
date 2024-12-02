import { useState } from "react";
import {useDispatch} from "react-redux";
import { increment,decrement,incrementByAmount } from "./carCountSlic";
import Navbar from "./navbar";


const Store = () =>{
const [carCount, setCarCount] = useState(0);
const [incrementAmount, setIncrementAmount] = useState(0);


let dispatch = useDispatch();

    return(

        <div>
            <Navbar/>
            <h2>Toyota</h2>
            <div>
                <button onClick={()=> dispatch(increment())}>+</button>
                <button onClick={()=> dispatch(decrement())}>-</button>
                <input type="text" onChange={(e) => setIncrementAmount(parseInt(e.target.value))} />
                <button onClick={()=> dispatch(incrementByAmount(incrementAmount))}></button>
            </div>
        </div>



    );
}

export default Store;