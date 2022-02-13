import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './components/header';
import Display from './components/display';
import Home from './components/home';
import env from 'react-dotenv';
function App() {

  return (
   <Router>
     <Header/>
     <Routes>
       <Route path="/display/:prodType" element={<Display/>}/>
       <Route path="/" element={<Home/>}/>
     </Routes>
    
   </Router>
  );
}

export default App;
