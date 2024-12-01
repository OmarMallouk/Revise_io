
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test1 from './test1';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Test1/>} />
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
