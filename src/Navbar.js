import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Job Portal</h1>
            <div className="links">
                <Link to = "/">Home</Link>
                <a href="#">Admin</a>
            </div>
        </nav>
    );
}
 
export default Navbar;