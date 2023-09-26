import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    return (
        <div className="navbar flex items-center justify-between bg-transparent absolute">
            <div className="flex-1">
                <a className="w-40 md:w-60" href="/"><img src="../../../public/Logo.png" alt="" /></a>
            </div>
            <div className="flex-none">
                <ul className="gap-5 hidden lg:flex">
                    <li><NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""} to="/donation">Donation</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""} to="/statistics">Statistics</NavLink></li>
                </ul>
                <details className="dropdown dropdown-end lg:hidden">
                    <summary className="m-1 btn bg-[#FF444A] hover:bg-[#e73e44] text-white"><HiMenuAlt3></HiMenuAlt3></summary>
                    <ul className="p-2 shadow space-y-1 dropdown-content z-[1] bg-base-100 rounded-box w-28">
                        <li><NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""} to="/donation">Donation</NavLink></li>
                        <li><NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""} to="/statistics">Statistics</NavLink></li>
                    </ul>
                </details>
            </div>
        </div>
    );
};

export default Navbar;