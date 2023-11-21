import {Link} from "react-router-dom";
export const Navbar=()=>{
    return(
    <div className="navbar">
        <Link to="/">Menu</Link>
        <Link to="/Task">Task</Link>
        <Link to="/Profile">Profile</Link>
    </div>
    );
}
