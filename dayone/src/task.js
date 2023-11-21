import { Changeusername } from "./changeUsername";
import { useContext } from "react";
import { Appcontext } from "./App";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";

export const Task=()=>{
  const {username}=useContext(Appcontext);
    return(
    <div className="main">
        <h1>this is the task page {username}</h1>
        <Changeusername/>
    </div>
    );
    }