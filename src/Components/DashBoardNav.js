
import { Link } from "react-router-dom";
const DashBoardNav=()=>
{
    return(
        <div className='header-box'>
        <div><h1>RENT FURLAX</h1></div>
        <div className='options'>
            <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/orders"}>Orders</Link>
                <Link to={"/cart"}>Cart</Link>
                <Link to={"/logout"}>Logout</Link>
            </ul>
        </div>
    </div>
    );
}
export default DashBoardNav;