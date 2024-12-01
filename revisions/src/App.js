
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test1 from './test1';
import UserProvider from './context1';

function App() {
  return (
    <UserProvider>
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Test1/>} />
    </Routes>
    </BrowserRouter>
  
    </div>
    </UserProvider>
  );
}

export default App;
