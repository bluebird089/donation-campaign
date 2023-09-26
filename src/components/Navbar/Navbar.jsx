import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar flex items-center justify-between bg-transparent absolute">
                <div className="flex-1">
                    <a className="w-1/5" href="/"><img src="../../../public/Logo.png" alt="" /></a>
                </div>
                <div className="flex-none">
                    <ul className="flex gap-5">
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