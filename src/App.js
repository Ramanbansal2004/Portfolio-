import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Event from './Pages/Event.js';
import SignUp from  './components/SignUp.js';
import Team from './Pages/Team.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>   
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>      
        <Route path="/events" element={<Event/>}/> 
        <Route path="/Team" element={<Team/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        
        </Routes>
        <Footer/>         
      </BrowserRouter>

          
    </div>
  );
}

export default App;
