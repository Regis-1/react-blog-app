import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <h1>Drone blog 🤖</h1>
            <div className="NavLinks">
                <Link to='/'>Home</Link>
                <Link to='/addPost'>Add post</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;