import { useQuery } from "@tanstack/react-query";
import Axios  from "axios";

export const Profile=()=>{
    const {data}=useQuery(["cat"], ()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=> res.data);
        });
    
        return <h1>{data.fact}</h1>

}