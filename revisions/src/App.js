
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test1 from './test1';
import Store from './store';
import Navbar from './navbar';


function App() {
  return (
 
    <div className="App">
    <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<Navbar/>} /> */}
    <Route path="/" element={<Store/>} />
    {/* <Route path="/t" element={<Test1/>} /> */}
    </Routes>
    </BrowserRouter>
  
    </div>
 
  );
}

export default App;
