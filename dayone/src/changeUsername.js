import { useState } from "react";
import { useContext } from "react";
import { Appcontext } from "./App";

export const Changeusername=()=>{
   const {setUsername}=useContext(Appcontext)
   const [newuser,setnewuser]=useState("")
    return(
        <div className="input">
           
            <input type="text" onChange={(event)=>{
                setnewuser(event.target.value)
            }} />

            <button onClick={()=>{
                setUsername(newuser)
            }}>Change Name</button>

        </div>
    );

}