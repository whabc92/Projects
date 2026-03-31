import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar(props) {

    return (
        <div className="NavbarCls">
            <span className="span1">
                <p id="title">{props.title}</p>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </span>
            {
                (props.SearchBarFlag) ?
                    (<span className="span2">
                        <input type="text" placeholder="enter here"></input>
                        <button type="button">Search</button>
                    </span>)
                    : <p>No Search Bar</p>
            }
        </div>
    )
}

export default Navbar