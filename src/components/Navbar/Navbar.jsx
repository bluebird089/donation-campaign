import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/"><a>Home</a></Link></li>
                        <li><Link to="/donation"><a>Donation</a></Link></li>
                        <li><Link to="/statistics"><a>Statistics</a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;