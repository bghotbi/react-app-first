import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
    <div>
       <nav className="Nav-Bar">
       <Link className="Nav-Bar-Item" to='/'>Products</Link>
       <Link className="Nav-Bar-Item" to='/About'>About</Link>
       <Link className="Nav-Bar-Item" to='/Contact'>Contact</Link>
       <Link className="Nav-Bar-Item" to='/Home'>Home</Link>
       </nav>
    </div>

    );
}