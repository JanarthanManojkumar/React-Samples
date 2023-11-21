import React, { useState,useEffect,createContext } from 'react'; // Import React and useState
import styles from './App.module.css';
import { Task } from './task';
import {Profile } from './profile';
import { Navbar } from './navbar';
import Axios from "axios";
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import{QueryClient,QueryClientProvider} from "@tanstack/react-query";

export const Appcontext=createContext()
function App() {
    const client=new QueryClient();
    const [username,setUsername]= useState("haloo");

 return(
 <div className="main">
<QueryClientProvider client={client}>
<Appcontext.Provider value={{username,setUsername}}>
    <Router>
       <Navbar />
        <Routes>
            <Route path="/" />
            <Route path="/Task" element={<Task />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="*" element={<h1>No page found</h1>} /> 
        </Routes>  
   </Router>
  </Appcontext.Provider>
</QueryClientProvider>
    
 </div>
    
 );
}

export default App;
