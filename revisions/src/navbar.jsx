
import { useSelector } from "react-redux";




const Navbar = () =>{
    let carCount = useSelector(state=>state.carCount.value)



    return(

<div>
    <h2>Number of items: {carCount}</h2>
</div>


    );
}


export default Navbar;