import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex md:flex-row justify-center gap-32 font-bold border-slate-400 border-2 p-4 m-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </div>
  );
};

export default Navbar;
